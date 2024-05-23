import React, { useState } from "react";

const EditPhotoDetailModal: any = ({
  arrayIndex,
  imageIndex,
  value,
  pressOK,
  pressCancel,
}: any) => {
  const [form, setForm] = useState({
    location: value?.location,
    mapping_no: value?.mapping_no,
    description: value?.description,
    remarks: value?.remarks,
  });

  const FillForm = (name: any, value: any) => {
    setForm({ ...form, [name]: value });
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
                // if (projectName && projectType) postProject();
                pressOK && pressOK(form);
              }}
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Update Photo Detail
                    </h3>
                    <div className="mt-2 w-[300px]">
                      <div className="mb-3 w-full">
                        <p className="text-black text-semibold mb-2">
                          Location
                        </p>
                        <input
                          onChange={(e) => FillForm("location", e.target.value)}
                          type="text"
                          value={form.location}
                          className="bg-gray-200 pl-3 rounded-md h-[40px] w-full"
                        />
                      </div>
                      <div className="mb-3 w-full">
                        <p className="text-black text-semibold mb-2">
                          Mapping Tag No
                        </p>
                        <input
                          onChange={(e) =>
                            FillForm("mapping_no", e.target.value)
                          }
                          type="text"
                          value={form.mapping_no}
                          className="bg-gray-200 pl-3 rounded-md h-[40px] w-full"
                        />
                      </div>
                      <div className="mb-3 w-full">
                        <p className="text-black text-semibold mb-2">
                          Description
                        </p>
                        <input
                          onChange={(e) =>
                            FillForm("description", e.target.value)
                          }
                          type="text"
                          value={form.description}
                          className="bg-gray-200 pl-3 rounded-md h-[40px] w-full"
                        />
                      </div>
                      <div className="mb-3 w-full">
                        <p className="text-black text-semibold mb-2">Remarks</p>
                        <input
                          onChange={(e) => FillForm("remarks", e.target.value)}
                          type="text"
                          value={form.remarks}
                          className="bg-gray-200 pl-3 rounded-md h-[40px] w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Update
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

export default EditPhotoDetailModal;
