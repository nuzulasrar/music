'use client'
import React, { useState } from 'react'

interface ModalInterface {
  pressCancel: (option: boolean) => void
  pressCreate: () => void
}

const Modal: any = ({ pressCancel, pressCreate }: any) => {
  const [projectName, setProjectName] = useState('')
  const [projectType, setProjectType] = useState('')

  const [locationData, setLocationData] = useState({
    route_no: '',
    bridge_name: '',
    structure_no: '',
    district: '',
    state: '',
  })
  const [bridgeType, setBridgeType] = useState({
    system_type: '',
    deck_type: '',
    abutment_type: '',
    pier_type: '',
  })

  const [structureData, setStructureData] = useState({
    road_width: '',
    bridge_width: '',
    skew_angle: '',
    no_span: '',
    spans: '',
    bridge_length: '',
    year_build: '',
    year_repair: '',
  })

  const handleLocationDataChange = (name: string, value: string) => {
    setLocationData({ ...locationData, [name]: value })
  }
  const handleBridgeTypeChange = (name: string, value: string) => {
    setBridgeType({ ...bridgeType, [name]: value })
  }
  const handleStructureDataChange = (name: string, value: string) => {
    setStructureData({ ...structureData, [name]: value })
  }

  const postProject = async () => {
    try {
      const response = await fetch('/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName,
          projectType,
          location_data: locationData,
          structured_data: structureData,
        }),
      })

      const result = await response.json()
      console.log(JSON.stringify(result))

      if (result.success) {
        alert(result.msg)
        pressCancel && pressCancel(false)
        pressCreate && pressCreate()
      } else {
        alert(result.error)
      }

      // alert(JSON.stringify(result));
    } catch (error) {
      console.log(error)
      // throw new Error(error);
    }
  }

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (projectName && projectType) postProject()
              }}
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Create New Project
                    </h3>
                    <div className="mt-2">
                      <table className="table-fixed">
                        <tbody>
                          <tr className="">
                            <td className="pb-2">Project Name</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr className="">
                            <td className="pb-2">Type {projectType}</td>
                            <td className="pl-8 pb-2">
                              <select
                                required
                                onChange={(e) => setProjectType(e.target.value)}
                                className="block w-full h-[35px] text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                              >
                                <option value="">Select One</option>
                                <option value="Bridge">Bridge</option>
                                <option value="Toll">Toll Plaza</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2 font-bold">Location Data</td>
                          </tr>
                          <tr>
                            <td className="pb-2">Route No</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={locationData.route_no}
                                onChange={(e) =>
                                  handleLocationDataChange(
                                    'route_no',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">River/Bridge Name</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={locationData.bridge_name}
                                onChange={(e) =>
                                  handleLocationDataChange(
                                    'bridge_name',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">Structure No</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={locationData.structure_no}
                                onChange={(e) =>
                                  handleLocationDataChange(
                                    'structure_no',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">District</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={locationData.district}
                                onChange={(e) =>
                                  handleLocationDataChange(
                                    'district',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">State</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={locationData.state}
                                onChange={(e) =>
                                  handleLocationDataChange(
                                    'state',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2 font-bold">Bridge Type</td>
                          </tr>
                          <tr>
                            <td className="pb-2">System Type</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={bridgeType.system_type}
                                onChange={(e) =>
                                  handleBridgeTypeChange(
                                    'system_type',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">Deck Type</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={bridgeType.deck_type}
                                onChange={(e) =>
                                  handleBridgeTypeChange(
                                    'deck_type',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">Abutment Type</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={bridgeType.abutment_type}
                                onChange={(e) =>
                                  handleBridgeTypeChange(
                                    'abutment_type',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">Pier Type</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={bridgeType.pier_type}
                                onChange={(e) =>
                                  handleBridgeTypeChange(
                                    'pier_type',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2 font-bold">Structure Data</td>
                          </tr>
                          <tr>
                            <td className="pb-2">Road Width</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={structureData.road_width}
                                onChange={(e) =>
                                  handleStructureDataChange(
                                    'road_width',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">Bridge Width</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={structureData.bridge_width}
                                onChange={(e) =>
                                  handleStructureDataChange(
                                    'bridge_width',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">Skew Angle</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={structureData.skew_angle}
                                onChange={(e) =>
                                  handleStructureDataChange(
                                    'skew_angle',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">No. of Span</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={structureData.no_span}
                                onChange={(e) =>
                                  handleStructureDataChange(
                                    'no_span',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">Span(s)</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={structureData.spans}
                                onChange={(e) =>
                                  handleStructureDataChange(
                                    'spans',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">Bridge Length</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={structureData.bridge_length}
                                onChange={(e) =>
                                  handleStructureDataChange(
                                    'bridge_length',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">Year Build</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={structureData.year_build}
                                onChange={(e) =>
                                  handleStructureDataChange(
                                    'year_build',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="pb-2">Year Repair</td>
                            <td className="pl-8 pb-2">
                              <input
                                required
                                type="text"
                                value={structureData.year_repair}
                                onChange={(e) =>
                                  handleStructureDataChange(
                                    'year_repair',
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded-md h-[35px] pl-2"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Create
                </button>
                <button
                  type="button"
                  onClick={() => pressCancel && pressCancel(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
