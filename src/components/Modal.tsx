"use client";
import React, { useState } from "react";

interface ModalInterface {
  pressCancel: (option: boolean) => void;
  pressCreate: () => void;
}

const Modal: any = ({ pressCancel, pressCreate }: any) => {
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("");

  const postProject = async () => {
    try {
      const response = await fetch("/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectName,
          projectType,
        }),
      });

      const result = await response.json();
      console.log(JSON.stringify(result));

      if (result.success) {
        alert(result.msg);
        pressCancel && pressCancel(false);
        pressCreate && pressCreate();
      } else {
        alert(result.error);
      }

      // alert(JSON.stringify(result));
    } catch (error) {
      console.log(error);
      // throw new Error(error);
    }
  };

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
                e.preventDefault();
                if (projectName && projectType) postProject();
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
  );
};

export default Modal;
