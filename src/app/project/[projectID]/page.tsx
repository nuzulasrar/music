'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Modal from '@/components/Modal'
import EditRatingMemberModal from '@/components/EditRatingMemberModal'
import EditPhotoDetailModal from '@/components/EditPhotoDetailModal'
import { log } from 'console'
import PdfToImage from './PdfToImage'

import './styles.css'

const page = ({ params }: any) => {
  const pdfUrl = '/uploads/2024-12-09-13-35-10-0pdf.pdf'
  // const pdfUrl =
  //   'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  const { projectID } = params
  const [data, setData] = useState<any>([])

  const [maxRating, setMaxRating] = useState<any>({
    maxComponent0: 0,
    maxComponent1: 0,
    maxComponent2: 0,
    maxComponent3: 0,
    maxComponent4: 0,
    maxComponent5: 0,
    maxComponent6: 0,
    maxComponent7: 0,
    maxComponent8: 0,
    maxComponent9: 0,
    maxComponent10: 0,
  })

  const getSubmittedForms = async () => {
    try {
      const response = await fetch(`/api/project/${projectID}`)

      if (!response.ok) {
        // throw new Error("Failed to fetch data");
        alert('Failed to fetch data')
      }

      const result = await response.json()
      // console.log("result data", JSON.stringify(result));

      let testString = 'a'

      if (result.data) {
        // alert("testt")

        let maxComponent0 = 0
        let maxComponent1 = 0
        let maxComponent2 = 0
        let maxComponent3 = 0
        let maxComponent4 = 0
        let maxComponent5 = 0
        let maxComponent6 = 0
        let maxComponent7 = 0
        let maxComponent8 = 0
        let maxComponent9 = 0
        let maxComponent10 = 0

        result.data.forEach((item: any, index: any) => {
          let eachformdata = JSON.parse(item.formdata)
          eachformdata.forEach((item2: any, index2: any) => {
            let eachcomponent = JSON.parse(item2.structure).component

            let material_array = eachcomponent.material

            // if(index2 === 0){
            material_array.forEach((mtitem: any, mtindex: any) => {
              // console.log(`index ${index} | index2 ${index2}: `, mtitem.rating_of_member)
              if (index2 === 0)
                maxComponent0 = Math.max(maxComponent0, mtitem.rating_of_member)
              if (index2 === 1)
                maxComponent1 = Math.max(maxComponent1, mtitem.rating_of_member)
              if (index2 === 2)
                maxComponent2 = Math.max(maxComponent2, mtitem.rating_of_member)
              if (index2 === 3)
                maxComponent3 = Math.max(maxComponent3, mtitem.rating_of_member)
              if (index2 === 4)
                maxComponent4 = Math.max(maxComponent4, mtitem.rating_of_member)
              if (index2 === 5)
                maxComponent5 = Math.max(maxComponent5, mtitem.rating_of_member)
              if (index2 === 6)
                maxComponent6 = Math.max(maxComponent6, mtitem.rating_of_member)
              if (index2 === 7)
                maxComponent7 = Math.max(maxComponent7, mtitem.rating_of_member)
              if (index2 === 8)
                maxComponent8 = Math.max(maxComponent8, mtitem.rating_of_member)
              if (index2 === 9)
                maxComponent9 = Math.max(maxComponent9, mtitem.rating_of_member)
              if (index2 === 10)
                maxComponent10 = Math.max(
                  maxComponent10,
                  mtitem.rating_of_member
                )
            })
            // }

            // console.log(`index ${index} | index2 ${index2}: `, JSON.stringify(JSON.parse(item2.structure).component))
            // testString = testString + name;
          })
          // testString = testString + index + " ";
        })

        console.log('maxComponent0 : ', maxComponent0)
        console.log('maxComponent1 : ', maxComponent1)
        console.log('maxComponent2 : ', maxComponent2)
        console.log('maxComponent3 : ', maxComponent3)
        console.log('maxComponent4 : ', maxComponent4)
        console.log('maxComponent5 : ', maxComponent5)
        console.log('maxComponent6 : ', maxComponent6)
        console.log('maxComponent7 : ', maxComponent7)
        console.log('maxComponent8 : ', maxComponent8)
        console.log('maxComponent9 : ', maxComponent9)
        console.log('maxComponent10 : ', maxComponent10)

        setMaxRating({
          maxComponent0: maxComponent0,
          maxComponent1: maxComponent1,
          maxComponent2: maxComponent2,
          maxComponent3: maxComponent3,
          maxComponent4: maxComponent4,
          maxComponent5: maxComponent5,
          maxComponent6: maxComponent6,
          maxComponent7: maxComponent7,
          maxComponent8: maxComponent8,
          maxComponent9: maxComponent9,
          maxComponent10: maxComponent10,
        })
      }

      setData(result.data)
    } catch (error: any) {
      console.log(error)
      // throw new Error(error);
    }
  }

  useEffect(() => {
    getSubmittedForms()
  }, [])

  const [modalVis, setModalVis] = useState(false)

  const handleModalChange = (option: boolean) => {
    setModalVis(option)
  }

  const [selectedFiles, setSelectedFiles] = useState([])

  const handleFileChange = (event: any) => {
    const files = event.target.files
    setSelectedFiles(files)
  }

  const handleUpload = async () => {
    const fd = new FormData()

    let thisarray = [...selectedFiles]

    thisarray.forEach((item, index) => {
      fd.append(`files${index}`, thisarray[index])
    })

    fd.append(`id`, data[0]?.id)

    try {
      const response = await fetch('/api/uploadtemplate', {
        method: 'post',
        body: fd,
      })

      const json = await response.json()

      if (json.success) {
        window.location.reload()
      } else {
        alert('fail to upload image')
      }
    } catch (error: any) {
      console.log(error.message)
      // throw error;
    }
  }

  const handleUploadPDF = async () => {
    const fd = new FormData()

    let thisarray = [...selectedFiles]

    thisarray.forEach((item, index) => {
      fd.append(`files${index}`, thisarray[index])
    })

    fd.append(`id`, data[0]?.id)

    try {
      const response = await fetch('/api/uploadtemplatepdf', {
        method: 'post',
        body: fd,
      })

      const json = await response.json()

      if (json.success) {
        window.location.reload()
      } else {
        alert('fail to upload image')
      }
    } catch (error: any) {
      console.log(error.message)
      // throw error;
    }
  }

  const [editForm, setEditForm] = useState(0)
  const [editComponent, setEditComponent] = useState(0)
  const [editMaterial, setEditMaterial] = useState(0)

  const [editValue, setEditValue] = useState('')
  const [editModalVis, setEditModalVis] = useState(false)
  const [editModalVis2, setEditModalVis2] = useState(false)

  const [editForm2, setEditForm2] = useState(0)
  const [editImageArrayIndex, setEditImageArrayIndex] = useState(0)
  const [editImageIndex, setEditImageIndex] = useState(0)
  const [editValue2, setEditValue2] = useState({})

  const updateForm = (form: any, id: any) => {
    // console.log(form);
    // console.log(id);

    var fd = new FormData()

    fd.append('form', JSON.stringify(JSON.parse(form)))
    fd.append('id', JSON.stringify(id))

    fetch('/api/submitform', {
      method: 'PUT',
      body: fd,
      // headers: {
      //   "Content-Type": "multipart/form-data; ",
      // },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log('json', json)

        if (json?.success === 'success') {
          window.location.reload()
        } else {
          alert('Fail to update. Please try again later.')
        }
      })
      .catch((error) => console.log('ERROR', error))
  }

  const updateForm2 = (imageIndex: any, form: any, id: any) => {
    console.log(JSON.stringify(imageIndex))
    console.log(form)
    console.log(JSON.stringify(id))

    var fd = new FormData()

    fd.append('imageIndex', JSON.stringify(imageIndex))
    fd.append('form', form)
    fd.append('id', JSON.stringify(id))

    fetch('/api/updatephotodetail', {
      method: 'PUT',
      body: fd,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log('json', JSON.stringify(json, null, 2))

        if (json?.success === 'success') {
          window.location.reload()
        } else {
          alert('Fail to update. Please try again later.')
        }
      })
      .catch((error) => console.log('ERROR', error))
  }

  const [editCheck, setEditCheck] = useState(false)

  const captureInput = (
    index: any,
    code: any,
    whichDetail: any,
    component: any,
    material: any,
    type_of_damages: any,
    material_rating: any
  ) => {
    //ambik yg lama
    let thisdata = [...data]
    let thiss = JSON.parse(data[index].formdata)
    const thisMaterial = [...thiss]

    //parse structure
    let thisStructure = JSON.parse(thisMaterial[component].structure)

    console.log(JSON.stringify(thisStructure))

    //x pernah set
    if (
      String(
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].tick
      ) == '0'
    ) {
      //set active details
      thisStructure['component'].material[material].type_of_damages[
        type_of_damages
      ].active_details = whichDetail

      //kalau confirm 4
      if (
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].remarks.includes('rating = 4')
      ) {
        //set rating of damage
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].severity_of_damage = 4

        //set tick for the material
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].tick = 1

        //set percentage affected
        if (whichDetail == 1) {
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details
        } else if (whichDetail == 2) {
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details_2
        } else if (whichDetail == 3) {
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details_3
        }
      }
      //kalau confirm 3
      else if (
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].remarks.includes('rating = 3')
      ) {
        //set rating of damage
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].severity_of_damage = 3

        //set tick for the material
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].tick = 1

        //set percentage affected
        if (whichDetail == 1) {
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details
        } else if (whichDetail == 2) {
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details_2
        } else if (whichDetail == 3) {
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details_3
        }
      } else {
        //set rating of damage
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].severity_of_damage = material_rating + 1

        //set tick for the material
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].tick = 1

        //set percentage affected
        if (whichDetail == 1) {
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details
        } else if (whichDetail == 2) {
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details_2
        } else if (whichDetail == 3) {
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details_3
        }
      }
    }
    // pernah set
    else {
      if (
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].remarks.includes('rating = 4')
      ) {
        //set active details
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].active_details = 0
        //set rating of damage
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].severity_of_damage = 0

        //set tick for the material
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].tick = 0

        //set percentage affected
        thisStructure['component'].material[material].type_of_damages[
          type_of_damages
        ].percentage_affected = ''
      } else {
        //sama
        if (
          String(
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage
          ) == String(Number(material_rating + 1))
        ) {
          //set active details
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].active_details = 0
          //set rating of damage
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].severity_of_damage = 0

          //set tick for the material
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].tick = 0

          //set percentage affected
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected = ''
        }
        //x sama
        else {
          //set active details
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].active_details = whichDetail
          //set rating of damage
          thisStructure['component'].material[material].type_of_damages[
            type_of_damages
          ].severity_of_damage = material_rating + 1

          //set percentage affected
          if (whichDetail == 1) {
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].percentage_affected =
              thisStructure['component'].material[material].type_of_damages[
                type_of_damages
              ].severity_of_damage_list[material_rating].details
          } else if (whichDetail == 2) {
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].percentage_affected =
              thisStructure['component'].material[material].type_of_damages[
                type_of_damages
              ].severity_of_damage_list[material_rating].details_2
          } else if (whichDetail == 3) {
            thisStructure['component'].material[material].type_of_damages[
              type_of_damages
            ].percentage_affected =
              thisStructure['component'].material[material].type_of_damages[
                type_of_damages
              ].severity_of_damage_list[material_rating].details_3
          }
        }
      }
    }

    thisStructure.component.material.forEach((item: any, index: any) => {
      let maxSeverity = 0

      // Iterate through the "type_of_damages" array for each "material" item
      item.type_of_damages.forEach((damage: any) => {
        const severity = damage.severity_of_damage
        if (severity > maxSeverity) {
          maxSeverity = severity
        }
      })

      // Update the "rating_of_member" with the maximum severity
      item.rating_of_member = maxSeverity
    })

    // convert to string to store to DB
    thisMaterial[component].structure = JSON.stringify(thisStructure)

    // console.log(
    //   JSON.stringify(JSON.parse(thisMaterial.bridgelist[component].structure))
    // );

    // console.log(
    //   JSON.stringify(
    //     JSON.parse(thisMaterial[component].structure).component.material[
    //       material
    //     ].type_of_damages[type_of_damages].severity_of_damage
    //   )
    // );

    thisdata[index].formdata = JSON.stringify(thisMaterial)
    //balik

    updateForm(thisdata[index].formdata, thisdata[index].id)
    // console.log(thisdata[index]);
    // console.log(JSON.stringify(thisMaterial));

    // set to the original list to FE
    // setFormList(thisMaterial);
  }

  const [majorDamageBeam, setMajorDamageBeam] = useState('Water Stain')
  const [majorDamageDeck, setMajorDamageDeck] = useState('A1')
  const [majorDamageAbutment, setMajorDamageAbutment] = useState('A2')
  const [majorDamagePier, setMajorDamagePier] = useState('A3')
  const [majorDamageBearing, setMajorDamageBearing] = useState('A4')
  const [majorDamageParapet, setMajorDamageParapet] = useState('A5')
  const [majorDamageSurfacing, setMajorDamageSurfacing] = useState('A6')
  const [majorDamageExpansionJoint, setMajorDamageExpansionJoint] =
    useState('A7')
  const [majorDamageDrainpipe, setMajorDamageDrainpipe] = useState('A8')
  const [majorDamageSlopeProtection, setMajorDamageSlopeProtection] =
    useState('A9')
  const [majorDamageHydraulic, setMajorDamageHydraulic] = useState('A10')

  const [maintenanceBeam, setMaintenanceBeam] = useState('Regular Monitoring')
  const [maintenanceDeck, setMaintenanceDeck] = useState('B1')
  const [maintenanceAbutment, setMaintenanceAbutment] = useState('B2')
  const [maintenancePier, setMaintenancePier] = useState('B3')
  const [maintenanceBearing, setMaintenanceBearing] = useState('B4')
  const [maintenanceParapet, setMaintenanceParapet] = useState('B5')
  const [maintenanceSurfacing, setMaintenanceSurfacing] = useState('B6')
  const [maintenanceExpansionJoint, setMaintenanceExpansionJoint] =
    useState('B7')
  const [maintenanceDrainpipe, setMaintenanceDrainpipe] = useState('B8')
  const [maintenanceSlopeProtection, setMaintenanceSlopeProtection] =
    useState('B9')
  const [maintenanceHydraulic, setMaintenanceHydraulic] = useState('B10')

  return (
    <div className="flex flex-col p-20 justify-center items-center">
      {/* {data && JSON.stringify(data.length)} */}
      <div className="w-full mb-8">
        <div className="flex flex-row items-center w-full">
          <div className="w-1/2 flex flex-row items-center mb-6 no-print">
            <div className="w-8/12 flex-row justify-between items-center">
              <div className="flex-row justify-between items-center mb-4">
                <p className="font-bold mb-2 no-print">
                  Add Defect Mapping (Image)
                </p>
                <input
                  className="flex h-9 w-10/12  rounded-md border border-input 
              bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm 
              file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="picture"
                  name="picture"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                />
                <button
                  className="bg-blue-400 text-white font-bold px-6 py-3 rounded-xl ml-3"
                  onClick={handleUpload}
                >
                  Upload Image {JSON.stringify(selectedFiles)}
                </button>
              </div>

              <div className="flex-row justify-between items-center">
                <p className="font-bold mb-2">Add Defect Mapping (PDF)</p>
                <input
                  className="flex h-9 w-10/12  rounded-md border border-input 
              bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm 
              file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="picture"
                  name="picture"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                />
                <button
                  className="bg-blue-400 text-white font-bold px-6 py-3 rounded-xl ml-3"
                  onClick={handleUploadPDF}
                >
                  Upload PDF {JSON.stringify(selectedFiles)}
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-row items-center mb-6 no-print">
            <div className="w-8/12">
              <p className="font-bold mb-2">Edit</p>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={editCheck}
                  onChange={() => setEditCheck(!editCheck)}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <p className="ml-3">{editCheck ? 'Edit Mode' : 'View Mode'}</p>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-4">
        <h1 className="font-bold text-center">ROUTINE CONDITION INSPECTION</h1>
        <p className="font-bold text-center">Summary Report Form</p>
        <div className="mt-4">
          <p className="font-semibold mb-1">Location Data:</p>
          <table className="w-full mb-3">
            <tbody>
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p className="">
                    Route No: <span className="font-bold">Example E9</span>
                  </p>
                </td>
                <td colSpan={2} className="border border-black p-2">
                  <p className="">
                    River/Bridge Name:{' '}
                    <span className="font-bold">BRIDGE 1 - E9/000</span>
                  </p>
                </td>
              </tr>
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p className="">
                    Structure No: <span className="font-bold">Example E9</span>
                  </p>
                </td>
                <td className="border border-black p-2">
                  <p className="">
                    Disctrict:{' '}
                    <span className="font-bold">BRIDGE 1 - E9/000</span>
                  </p>
                </td>
                <td className="border border-black p-2">
                  <p className="">
                    State: <span className="font-bold">BRIDGE 1 - E9/000</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="font-semibold mb-1">Bridge Type:</p>
          <table className="w-full mb-3">
            <tbody>
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p className="">System Type: </p>
                </td>
                <td className="border border-black p-2">
                  <p className="font-bold">SIMPLY SUPPORTED</p>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="font-semibold mb-1">Summary Report:</p>
          <table className="w-full bottom-space1">
            <thead>
              <tr className="border border-black">
                <th
                  rowSpan={2}
                  colSpan={2}
                  className="border border-black bg-gray-300"
                >
                  <p className="font-bold">BRIDGE MEMBER</p>
                </th>
                <th colSpan={2} className="border border-black bg-gray-300">
                  <p className="font-bold">RATING</p>
                </th>
                <th rowSpan={2} className="border border-black bg-gray-300">
                  <p className="font-bold">MAJOR DAMAGES</p>
                </th>
                <th rowSpan={2} className="border border-black bg-gray-300">
                  <p className="font-bold">MAINTENANCE WORK REQUIRED</p>
                </th>
              </tr>
              <tr className="border border-black">
                <th className="border border-black bg-gray-300">
                  <p className="font-bold">OLD</p>
                </th>
                <th className="border border-black bg-gray-300">
                  <p className="font-bold">NEW</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {data &&
        data.map((item: any, index: any) => {
          // console.log("item " + index, JSON.parse(item.formdata));
          
          return (
            <tr className="border border-black">
              <td className="border border-black">
                <p></p>
              </td>
            </tr>
          )})} */}

              {/* Component 0 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p>Beam/Girder</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">Test</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent0}</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent0}</p>
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={majorDamageBeam}
                    onChange={(e) => setMajorDamageBeam(e.target.value)}
                  />
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={maintenanceBeam}
                    onChange={(e) => setMaintenanceBeam(e.target.value)}
                  />
                </td>
              </tr>

              {/* Component 1 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p>Deck/Slab</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">Test</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent1}</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent1}</p>
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={majorDamageDeck}
                    onChange={(e) => setMajorDamageDeck(e.target.value)}
                  />
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={maintenanceDeck}
                    onChange={(e) => setMaintenanceDeck(e.target.value)}
                  />
                </td>
              </tr>

              {/* Component 2 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p>Pier</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">Test</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent3}</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent3}</p>
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={majorDamagePier}
                    onChange={(e) => setMajorDamagePier(e.target.value)}
                  />
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={maintenancePier}
                    onChange={(e) => setMaintenancePier(e.target.value)}
                  />
                </td>
              </tr>

              {/* Component 3 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p>Abutment</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">Test</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent2}</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent2}</p>
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={majorDamageAbutment}
                    onChange={(e) => setMajorDamageAbutment(e.target.value)}
                  />
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={maintenanceAbutment}
                    onChange={(e) => setMaintenanceAbutment(e.target.value)}
                  />
                </td>
              </tr>

              {/* Component 4 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p>Bearing</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">Test</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent4}</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent4}</p>
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={majorDamageBearing}
                    onChange={(e) => setMajorDamageBearing(e.target.value)}
                  />
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={maintenanceBearing}
                    onChange={(e) => setMaintenanceBearing(e.target.value)}
                  />
                </td>
              </tr>

              {/* Component 5 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p>Drainpipe</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">Test</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent8}</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent8}</p>
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={majorDamageDrainpipe}
                    onChange={(e) => setMajorDamageDrainpipe(e.target.value)}
                  />
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={maintenanceDrainpipe}
                    onChange={(e) => setMaintenanceDrainpipe(e.target.value)}
                  />
                </td>
              </tr>

              {/* Component 6 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p>Parapet</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">Test</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent5}</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent5}</p>
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={majorDamageParapet}
                    onChange={(e) => setMajorDamageParapet(e.target.value)}
                  />
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={maintenanceParapet}
                    onChange={(e) => setMaintenanceParapet(e.target.value)}
                  />
                </td>
              </tr>

              {/* Component 7 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p>Surfacing</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">Test</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent6}</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent6}</p>
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={majorDamageSurfacing}
                    onChange={(e) => setMajorDamageSurfacing(e.target.value)}
                  />
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={maintenanceSurfacing}
                    onChange={(e) => setMaintenanceSurfacing(e.target.value)}
                  />
                </td>
              </tr>

              {/* Component 8 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p>Expansion Joint</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">Test</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent7}</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent7}</p>
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={majorDamageExpansionJoint}
                    onChange={(e) =>
                      setMajorDamageExpansionJoint(e.target.value)
                    }
                  />
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={maintenanceExpansionJoint}
                    onChange={(e) =>
                      setMaintenanceExpansionJoint(e.target.value)
                    }
                  />
                </td>
              </tr>

              {/* Component 9 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p>Slope Protection</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">Test</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent9}</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent9}</p>
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={majorDamageSlopeProtection}
                    onChange={(e) =>
                      setMajorDamageSlopeProtection(e.target.value)
                    }
                  />
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={maintenanceSlopeProtection}
                    onChange={(e) =>
                      setMaintenanceSlopeProtection(e.target.value)
                    }
                  />
                </td>
              </tr>

              {/* Component 10 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p>Culvert</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">Test</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent10}</p>
                </td>
                <td className="border border-black p-2">
                  <p className="text-center">{maxRating.maxComponent10}</p>
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={majorDamageHydraulic}
                    onChange={(e) => setMajorDamageHydraulic(e.target.value)}
                  />
                </td>
                <td className="border border-black p-2">
                  <input
                    className="w-full text-center"
                    type="text"
                    value={maintenanceHydraulic}
                    onChange={(e) => setMaintenanceHydraulic(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {data &&
        data.map((item: any, index: any) => {
          let thisformdata = JSON.parse(item.formdata)

          thisformdata = thisformdata.sort(
            (a: any, b: any) => a.position - b.position
          )
          // console.log("thisformdata", JSON.stringify(thisformdata, 0, 2));

          let details = JSON.parse(item.details)
          let images1 = JSON.parse(item.images1)
          let images2 = JSON.parse(item.images2)
          let images3 = JSON.parse(item.images3)
          let images_detail1 = JSON.parse(item.images_detail1)
          let images_detail2 = JSON.parse(item.images_detail2)
          let images_detail3 = JSON.parse(item.images_detail3)
          return (
            <div className="mb-10 screen:w-11/12 print:w-full print:bg-yellow-100">
              <h1 className="text-center font-bold mb-2 print:text-[8px]">
                ROUTINE CONDITION INSPECTION - STRUCTURAL CONDITION CHECKLIST
                (BRIDGE)
              </h1>

              <div className="flex flex-row justify-between items-center mb-2 print:text-[5px]">
                <p className="font-bold">
                  SPAN: <span className="font-normal">{details?.span_no}</span>
                </p>
                <p className="font-bold">
                  ROUTE NO:{' '}
                  <span className="font-normal">{details?.route_no}</span>
                </p>
                <p className="font-bold">
                  STRUCT NO:{' '}
                  <span className="font-normal">{details?.struct_no}</span>
                </p>
                <p className="font-bold">
                  BRIDGE NAME:{' '}
                  <span className="font-normal">{details?.bridge_name}</span>
                </p>
                <p className="font-bold">
                  NAME OF INSPECTOR:{' '}
                  <span className="font-normal">
                    {details?.name_of_inspector}
                  </span>
                </p>
                <p className="font-bold">
                  DATE: <span className="font-normal">{details?.date}</span>
                </p>
              </div>
              <div className="">
                <table className="min-w-full border-[0.1px] border-neutral-200 text-center mb-5 self-center">
                  <thead>
                    <tr className="border-[0.1px] border-neutral-200">
                      <th
                        colSpan={2}
                        className="border-[0.1px] border-neutral-200 print:text-[5px]"
                      >
                        Bridge Member
                      </th>
                      <th
                        rowSpan={2}
                        className="border-[0.1px] border-neutral-200 print:text-[5px]"
                      >
                        TYPE OF DAMAGES
                      </th>
                      <th
                        rowSpan={2}
                        className="border-[0.1px] border-neutral-200 print:text-[5px]"
                      >
                        CODE
                      </th>
                      <th
                        colSpan={2}
                        className="border-[0.1px] border-neutral-200 print:text-[5px]"
                      >
                        DEFECTS
                      </th>
                      <th
                        colSpan={4}
                        className="border-[0.1px] border-neutral-200 print:text-[5px]"
                      >
                        SEVERITY OF DAMAGE
                      </th>
                      <th
                        colSpan={2}
                        className="border-[0.1px] border-neutral-200 print:text-[5px]"
                      >
                        PERCENTAGE AFFECTED
                      </th>
                      <th
                        rowSpan={2}
                        className="border-[0.1px] border-neutral-200 print:text-[5px]"
                      >
                        REMARKS
                      </th>
                      <th
                        rowSpan={2}
                        className="border-[0.1px] border-neutral-200 print:text-[5px]"
                      >
                        RATING OF DAMAGE
                      </th>
                      <th
                        rowSpan={2}
                        className="border-[0.1px] border-neutral-200 print:text-[5px]"
                      >
                        RATING OF MEMBER
                      </th>
                    </tr>
                    <tr className="border-[0.1px] border-neutral-200">
                      <th className="border-[0.1px] border-neutral-200 print:text-[5px]">
                        Component
                      </th>
                      <th className="border-[0.1px] border-neutral-200 print:text-[5px]">
                        Material
                      </th>
                      <th className="border-[0.1px] border-neutral-200 print:text-[5px]">
                        Yes
                      </th>
                      <th className="border-[0.1px] border-neutral-200 print:text-[5px]">
                        No
                      </th>
                      <th className="border-[0.1px] border-neutral-200 print:text-[5px]">
                        Light
                      </th>
                      <th className="border-[0.1px] border-neutral-200 print:text-[5px]">
                        Medium
                      </th>
                      <th className="border-[0.1px] border-neutral-200 print:text-[5px]">
                        Severe
                      </th>
                      <th className="border-[0.1px] border-neutral-200 print:text-[5px]">
                        V. Severe
                      </th>
                      <th className="border-[0.1px] border-neutral-200 print:text-[5px]">
                        *
                      </th>
                      <th className="border-[0.1px] border-neutral-200 print:text-[5px]"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {thisformdata.map((formitem: any, formindex: any) => {
                      let thisstructure = JSON.parse(formitem.structure)
                      if (formindex === 0) {
                        // console.log(
                        //   "thisstructure",
                        //   JSON.stringify(thisstructure)
                        // );
                      }
                      let thisposition = JSON.parse(formitem.position)
                      // console.log("thisposition", JSON.stringify(thisposition));

                      let material = thisstructure.component.material

                      let first = 0
                      first++
                      let theserow = 0

                      material.map((mtelement: any) => {
                        mtelement.type_of_damages &&
                          mtelement.type_of_damages.map((mdelement: any) => {
                            theserow = theserow + 1
                          })
                      })
                      return (
                        <>
                          {material &&
                            material.map((mtitem: any, mtindex: any) => {
                              let material_details = mtitem.material_details
                              let type_of_damages = mtitem.type_of_damages
                              return (
                                <>
                                  {type_of_damages &&
                                    type_of_damages.map(
                                      (toditem: any, todindex: any) => {
                                        return (
                                          <tr className="border-[0.1px] border-green-200">
                                            {mtindex === 0 && todindex === 0 ? (
                                              <td
                                                rowSpan={theserow}
                                                className="border-[0.1px] border-neutral-200 print:text-[5px]"
                                              >
                                                <p>
                                                  {
                                                    thisstructure.component
                                                      .component_details.name
                                                  }
                                                </p>
                                              </td>
                                            ) : null}
                                            {todindex === 0 ? (
                                              <td
                                                rowSpan={type_of_damages.length}
                                                className="border border-neutral-200 print:text-[5px]"
                                              >
                                                {material[mtindex]
                                                  .material_details &&
                                                  material[
                                                    mtindex
                                                  ].material_details.map(
                                                    (
                                                      mditem: any,
                                                      mdindex: any
                                                    ) => {
                                                      return (
                                                        <>
                                                          <p>{mditem.name}</p>
                                                        </>
                                                      )
                                                    }
                                                  )}
                                              </td>
                                            ) : null}
                                            <td className="border border-neutral-200 print:text-[5px]">
                                              {toditem?.name}
                                            </td>
                                            <td className="border border-neutral-200 print:text-[5px]">
                                              {toditem?.code}
                                            </td>
                                            <td className="border border-neutral-200 print:text-[5px]">
                                              {toditem?.tick == 1 ? (
                                                <Image
                                                  src="/check.png"
                                                  alt=""
                                                  width={20}
                                                  height={20}
                                                  style={{
                                                    alignSelf: 'center',
                                                  }}
                                                  className="mx-auto print:w-[5px] print:h-[5px]"
                                                />
                                              ) : null}
                                            </td>
                                            <td className="border border-neutral-200 print:text-[5px]">
                                              {toditem?.tick == 0 ? (
                                                <Image
                                                  src="/check.png"
                                                  alt=""
                                                  width={20}
                                                  height={20}
                                                  style={{
                                                    alignSelf: 'center',
                                                  }}
                                                  className="mx-auto print:w-[5px] print:h-[5px]"
                                                />
                                              ) : null}
                                            </td>
                                            <td
                                              onClick={() => {
                                                captureInput(
                                                  index,
                                                  toditem.code,
                                                  1,
                                                  formindex,
                                                  mtindex,
                                                  todindex,
                                                  0
                                                )
                                              }}
                                              className="border border-neutral-200 print:text-[5px]"
                                            >
                                              {toditem?.severity_of_damage ==
                                              1 ? (
                                                <Image
                                                  src="/check.png"
                                                  alt=""
                                                  width={20}
                                                  height={20}
                                                  style={{
                                                    alignSelf: 'center',
                                                  }}
                                                  className="mx-auto print:w-[5px] print:h-[5px]"
                                                />
                                              ) : null}
                                            </td>
                                            <td
                                              onClick={() => {
                                                captureInput(
                                                  index,
                                                  toditem.code,
                                                  1,
                                                  formindex,
                                                  mtindex,
                                                  todindex,
                                                  1
                                                )
                                              }}
                                              className="border border-neutral-200 print:text-[5px]"
                                            >
                                              {toditem?.severity_of_damage ==
                                              2 ? (
                                                <Image
                                                  src="/check.png"
                                                  alt=""
                                                  width={20}
                                                  height={20}
                                                  style={{
                                                    alignSelf: 'center',
                                                  }}
                                                  className="mx-auto print:w-[5px] print:h-[5px]"
                                                />
                                              ) : null}
                                            </td>
                                            <td
                                              onClick={() => {
                                                captureInput(
                                                  index,
                                                  toditem.code,
                                                  1,
                                                  formindex,
                                                  mtindex,
                                                  todindex,
                                                  2
                                                )
                                              }}
                                              className="border border-neutral-200 print:text-[5px]"
                                            >
                                              {toditem?.severity_of_damage ==
                                              3 ? (
                                                <Image
                                                  src="/check.png"
                                                  alt=""
                                                  width={20}
                                                  height={20}
                                                  style={{
                                                    alignSelf: 'center',
                                                  }}
                                                  className="mx-auto print:w-[5px] print:h-[5px]"
                                                />
                                              ) : null}
                                            </td>
                                            <td
                                              onClick={() => {
                                                captureInput(
                                                  index,
                                                  toditem.code,
                                                  1,
                                                  formindex,
                                                  mtindex,
                                                  todindex,
                                                  3
                                                )
                                              }}
                                              className="border border-neutral-200 print:text-[5px]"
                                            >
                                              {toditem?.severity_of_damage ==
                                              4 ? (
                                                <Image
                                                  src="/check.png"
                                                  alt=""
                                                  width={20}
                                                  height={20}
                                                  style={{
                                                    alignSelf: 'center',
                                                  }}
                                                  className="mx-auto print:w-[5px] print:h-[5px]"
                                                />
                                              ) : null}
                                            </td>
                                            <td className="border border-neutral-200 print:text-[5px]"></td>
                                            <td className="border border-neutral-200 print:text-[5px]"></td>
                                            <td className="border border-neutral-200 print:text-[5px]">
                                              {toditem?.remarks}
                                            </td>
                                            <td className="border border-neutral-200 print:text-[5px]">
                                              {toditem?.severity_of_damage}
                                            </td>
                                            {todindex === 0 ? (
                                              <td
                                                rowSpan={type_of_damages.length}
                                                className="border border-neutral-200 print:text-[5px] cursor-pointer"
                                                onClick={() => {
                                                  setEditForm(index)
                                                  setEditComponent(formindex)
                                                  setEditMaterial(mtindex)
                                                  setEditValue(
                                                    material[mtindex]
                                                      ?.rating_of_member
                                                  )
                                                  setEditModalVis(true)
                                                }}
                                              >
                                                <p>
                                                  {material[mtindex]
                                                    ?.rating_of_member == 0
                                                    ? '-'
                                                    : material[mtindex]
                                                        ?.rating_of_member}
                                                </p>
                                              </td>
                                            ) : null}
                                          </tr>
                                        )
                                      }
                                    )}
                                </>
                              )
                            })}
                        </>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="justify-center items-center bg-red-100">
                {data[0] &&
                  JSON.parse(data[0]?.properimages).map(
                    (item: any, index: any) => {
                      if (item.slice(-3) === 'pdf') {
                        return (
                          <div className="justify-center items-center">
                            <center>
                              {/* <embed
                                src={`/uploads/${item}`}
                                width={'550px'}
                                height="948.4px"
                              /> */}
                              <PdfToImage pdfUrl={pdfUrl} />
                            </center>
                            <div className="w-full border-b-2 border-b-gray-400">
                              <a href={`/uploads/${item}`}>
                                <p className="text-center mb-2">{item}</p>
                              </a>
                            </div>
                          </div>
                        )
                      } else {
                        return (
                          <>
                            <img
                              src={`/uploads/${item}`}
                              alt=""
                              style={{
                                width: '100%',
                                height: '50%',
                                objectFit: 'contain',
                              }}
                            />
                            <div className="w-full border-b-2 border-b-gray-400">
                              <p className="text-center mb-2">{item}</p>
                            </div>
                          </>
                        )
                      }
                    }
                  )}
              </div>
              {images1.map((image1item: any, image1index: any) => {
                return (
                  <div className="print:h-[48vh] mb-1">
                    <img
                      src={`/uploads/${image1item}`}
                      alt=""
                      style={{
                        // width: "50%",
                        // height: "50%",
                        marginBottom: 2,
                      }}
                      className="screen:w-[100%] screen:h-auto print:w-auto print:h-[40vh]"
                    />
                    <p className="text-black">{image1item}</p>
                    <table style={{}}>
                      <tr
                        onClick={() => {
                          setEditForm2(index)
                          setEditImageArrayIndex(1)
                          setEditImageIndex(image1index)
                          setEditValue2({
                            location: images_detail1[image1index]?.location,
                            mapping_no: images_detail1[image1index]?.mapping_no,
                            description:
                              images_detail1[image1index]?.description,
                            remarks: images_detail1[image1index]?.remarks,
                          })
                          setEditModalVis2(true)
                        }}
                        style={{ borderWidth: 1, borderColor: 'black' }}
                      >
                        <td
                          style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            width: '25%',
                          }}
                        >
                          <p>Location:</p>
                        </td>
                        <td
                          style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            width: '25%',
                          }}
                        >
                          <p>{images_detail1[image1index]?.location}</p>
                        </td>
                        <td style={{ width: '25%' }}>
                          <p>Mapping Tag No:</p>
                        </td>
                        <td
                          style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            width: '25%',
                          }}
                        >
                          <p>{images_detail1[image1index]?.mapping_no}</p>
                        </td>
                      </tr>

                      <tr style={{ borderWidth: 1, borderColor: 'black' }}>
                        <td style={{ borderWidth: 1, borderColor: 'black' }}>
                          <p>Description:</p>
                        </td>
                        <td
                          colSpan={3}
                          style={{ borderWidth: 1, borderColor: 'black' }}
                        >
                          <p>{images_detail1[image1index]?.description}</p>
                        </td>
                      </tr>

                      <tr style={{ borderWidth: 1, borderColor: 'black' }}>
                        <td style={{ borderWidth: 1, borderColor: 'black' }}>
                          <p>Remarks: </p>
                        </td>
                        <td
                          colSpan={3}
                          style={{ borderWidth: 1, borderColor: 'black' }}
                        >
                          <p>{images_detail1[image1index]?.remarks}</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                  // <p>{image1item}</p>
                )
              })}
              {images2.map((image2item: any, image2index: any) => {
                return (
                  <div className="print:h-[48vh] mb-1">
                    <img
                      src={`/uploads/${image2item}`}
                      alt=""
                      style={{
                        // width: "50%",
                        // height: "50%",
                        marginBottom: 20,
                      }}
                      className="screen:w-[100%] screen:h-auto print:w-auto print:h-[40vh]"
                    />
                    <table style={{}}>
                      <tr style={{ borderWidth: 1, borderColor: 'black' }}>
                        <td
                          style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            width: '25%',
                          }}
                        >
                          <p>Location:</p>
                        </td>
                        <td
                          style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            width: '25%',
                          }}
                        >
                          <p>{images_detail2[image2index]?.location}</p>
                        </td>
                        <td style={{ width: '25%' }}>
                          <p>Mapping Tag No:</p>
                        </td>
                        <td
                          style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            width: '25%',
                          }}
                        >
                          <p>{images_detail2[image2index]?.mapping_no}</p>
                        </td>
                      </tr>

                      <tr style={{ borderWidth: 1, borderColor: 'black' }}>
                        <td style={{ borderWidth: 1, borderColor: 'black' }}>
                          <p>Description:</p>
                        </td>
                        <td
                          colSpan={3}
                          style={{ borderWidth: 1, borderColor: 'black' }}
                        >
                          <p>{images_detail2[image2index]?.description}</p>
                        </td>
                      </tr>

                      <tr style={{ borderWidth: 1, borderColor: 'black' }}>
                        <td style={{ borderWidth: 1, borderColor: 'black' }}>
                          <p>Remarks: </p>
                        </td>
                        <td
                          colSpan={3}
                          style={{ borderWidth: 1, borderColor: 'black' }}
                        >
                          <p>{images_detail2[image2index]?.remarks}</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                  // <p>{image1item}</p>
                )
              })}
              {images3.map((image3item: any, image3index: any) => {
                return (
                  <div className="print:h-[48vh] mb-1">
                    <img
                      src={`/uploads/${image3item}`}
                      alt=""
                      style={{
                        // width: "50%",
                        // height: "50%",
                        marginBottom: 2,
                      }}
                      className="screen:w-[100%] screen:h-auto print:w-auto print:h-[40vh]"
                    />
                    <table style={{}}>
                      <tr style={{ borderWidth: 1, borderColor: 'black' }}>
                        <td
                          style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            width: '25%',
                          }}
                        >
                          <p>Location:</p>
                        </td>
                        <td
                          style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            width: '25%',
                          }}
                        >
                          <p>{images_detail3[image3index]?.location}</p>
                        </td>
                        <td style={{ width: '25%' }}>
                          <p>Mapping Tag No:</p>
                        </td>
                        <td
                          style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            width: '25%',
                          }}
                        >
                          <p>{images_detail3[image3index]?.mapping_no}</p>
                        </td>
                      </tr>

                      <tr style={{ borderWidth: 1, borderColor: 'black' }}>
                        <td style={{ borderWidth: 1, borderColor: 'black' }}>
                          <p>Description:</p>
                        </td>
                        <td
                          colSpan={3}
                          style={{ borderWidth: 1, borderColor: 'black' }}
                        >
                          <p>{images_detail3[image3index]?.description}</p>
                        </td>
                      </tr>

                      <tr style={{ borderWidth: 1, borderColor: 'black' }}>
                        <td style={{ borderWidth: 1, borderColor: 'black' }}>
                          <p>Remarks: </p>
                        </td>
                        <td
                          colSpan={3}
                          style={{ borderWidth: 1, borderColor: 'black' }}
                        >
                          <p>{images_detail3[image3index]?.remarks}</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                  // <p>{image1item}</p>
                )
              })}
            </div>
          )
        })}

      {/* {JSON.parse(data[0]?.properimages).map((item, index) => {
        return (
          <>
            <img
              src={`/uploads/${item}`}
              alt=""
              style={{
                width:"50%",
                height:"50%",
              }}
            />
          </>
        );
      })} */}

      {editModalVis && (
        <EditRatingMemberModal
          value={editValue}
          pressOK={(value: any) => {
            let thisform = [...data]

            let thisstructure = JSON.parse(
              JSON.parse(thisform[editForm].formdata)[editComponent].structure
            )

            thisstructure.component.material[editMaterial].rating_of_member =
              value

            let thisformdata = JSON.parse(thisform[editForm].formdata)

            thisformdata[editComponent].structure =
              JSON.stringify(thisstructure)

            thisform[editForm].formdata = JSON.stringify(thisformdata)

            // console.log(thisformdata[editComponent].structure);

            // console.log(thisform[editForm].formdata);

            updateForm(thisform[editForm].formdata, thisform[editForm].id)

            // console.log(
            //   JSON.parse(
            //     JSON.parse(thisform[editForm].formdata)[editComponent].structure
            //   ).component.material[editMaterial]?.rating_of_member
            // );
            // console.log(thisform[editForm].id);

            // console.log(
            //   JSON.stringify(JSON.parse(data[editForm].formdata), 0, 5)
            // );
            // console.log(data[editForm].id);

            // console.log(
            //   JSON.parse(
            //     JSON.parse(data[editForm].formdata)[editComponent].structure
            //   ).component.material[editMaterial]?.rating_of_member
            // );
            // updateForm();
          }}
          pressCancel={(option: any) => {
            setEditModalVis(option)
          }}
        />
      )}

      {editModalVis2 && (
        <EditPhotoDetailModal
          arrayIndex={editImageArrayIndex}
          imageIndex={editImageIndex}
          value={editValue2}
          pressOK={(value: any) => {
            // console.log(value);

            let thisform = [...data]

            let thisdetail = []

            if (editImageArrayIndex === 1) {
              thisform[editForm2].images_detail1

              thisdetail = JSON.parse(thisform[editForm2].images_detail1)

              // console.log("thisdetail 1", JSON.stringify(thisdetail));

              thisdetail[editImageIndex] = value

              // console.log("thisdetail 2", JSON.stringify(thisdetail));

              thisform[editForm2].images_detail1 = JSON.stringify(thisdetail)

              // console.log("thisform", JSON.stringify(thisform[editForm2]));

              updateForm2(
                editImageArrayIndex,
                thisform[editForm2].images_detail1,
                thisform[editForm2].id
              )
            } else if (editImageArrayIndex === 2) {
              thisform[editForm2].images_detail2

              thisdetail = JSON.parse(thisform[editForm2].images_detail2)

              // console.log("thisdetail 1", JSON.stringify(thisdetail));

              thisdetail[editImageIndex] = value

              // console.log("thisdetail 2", JSON.stringify(thisdetail));

              thisform[editForm2].images_detail2 = thisdetail

              // console.log("thisform", JSON.stringify(thisform[editForm2]));

              updateForm2(
                editImageArrayIndex,
                thisform[editForm2].images_detail2,
                thisform[editForm2].id
              )
            } else if (editImageArrayIndex === 3) {
              thisform[editForm2].images_detail3

              thisdetail = JSON.parse(thisform[editForm2].images_detail3)

              // console.log("thisdetail 1", JSON.stringify(thisdetail));

              thisdetail[editImageIndex] = value

              // console.log("thisdetail 2", JSON.stringify(thisdetail));

              thisform[editForm2].images_detail3 = thisdetail

              // console.log("thisform", JSON.stringify(thisform[editForm2]));

              updateForm2(
                editImageArrayIndex,
                thisform[editForm2].images_detail3,
                thisform[editForm2].id
              )
            }

            // let thisstructure = JSON.parse(
            //   JSON.parse(thisform[editForm2].formdata)[editComponent].structure
            // );

            // thisstructure.component.material[editMaterial].rating_of_member =
            //   value;

            // let thisformdata = JSON.parse(thisform[editForm].formdata);

            // thisformdata[editComponent].structure =
            //   JSON.stringify(thisstructure);

            // thisform[editForm].formdata = JSON.stringify(thisformdata);
          }}
          pressCancel={(option: any) => {
            setEditModalVis2(option)
          }}
        />
      )}
    </div>
  )
}

export default page
