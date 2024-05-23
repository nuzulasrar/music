import React, { useState } from "react";
interface ModalInterface {
  value: string;
  pressCancel: (option: boolean) => void;
  pressCreate: () => void;
}
const EditRatingMemberModal: any = ({ value, pressOK, pressCancel }: any) => {
  const [thisValue, setThisValue] = useState(value);

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
                pressOK && pressOK(thisValue);
              }}
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Update Rating of Member
                    </h3>
                    <div className="mt-2 w-[300px]">
                      <input
                        onChange={(e) => setThisValue(e.target.value)}
                        type="text"
                        value={thisValue}
                        className="bg-gray-200 pl-3 rounded-md h-[40px] w-full"
                      />
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

export default EditRatingMemberModal;
