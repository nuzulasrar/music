"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import Link from "next/link";

const page = ({ params }: any) => {
  const { projectID, page } = params;

  const [editCheck, setEditCheck] = useState(false);

  const [thisArr, setThisArr] = useState<any>([]);

  const RenderCode = () => {
    let compNo = "11";
    let name = "Inadequate Opening";
    let code = "38";

    let arrString = [];
    for (let index = 4; index < 5; index++) {
      arrString[index] = `
        {/* HC row${index} */}
                    <tr><td className="font-semibold text-[12px]">${name}</td>
                    <td className="font-semibold text-center text-[12px]">${code}</td>
                    <td className="justify-center items-center">
                      {c11.r${index}d && (
                        <Image
                          src="/check.png"
                          alt=""
                          width={10}
                          height={10}
                          style={{ alignSelf: "center", margin: "0 auto" }}
                        />
                      )}
                    </td>
                    <td className="justify-center items-center">
                      {!c11.r${index}d && (
                        <Image
                          src="/check.png"
                          alt=""
                          width={10}
                          height={10}
                          style={{ alignSelf: "center", margin: "0 auto" }}
                        />
                      )}
                    </td>
                    {/* severity */}
                    <td
                      onClick={() => {
                        if (editCheck && c11.r${index}s == 1) {
                          setC11({ ...c11, r${index}s: 0, r${index}d: false });
                        } else if (editCheck && c11.r${index}s != 1) {
                          setC11({ ...c11, r${index}s: 1, r${index}d: true });
                        }
                      }}
                      className="justify-center items-center"
                    >
                      {c11.r${index}s == 1 && (
                        <Image
                          src="/check.png"
                          alt=""
                          width={10}
                          height={10}
                          style={{ alignSelf: "center", margin: "0 auto" }}
                        />
                      )}
                    </td>
                    <td
                      onClick={() => {
                        if (editCheck && c11.r${index}s == 2) {
                          setC11({ ...c11, r${index}s: 0, r${index}d: false });
                        } else if (editCheck && c11.r${index}s != 2) {
                          setC11({ ...c11, r${index}s: 2, r${index}d: true });
                        }
                      }}
                      className="justify-center items-center"
                    >
                      {c11.r${index}s == 2 && (
                        <Image
                          src="/check.png"
                          alt=""
                          width={10}
                          height={10}
                          style={{ alignSelf: "center", margin: "0 auto" }}
                        />
                      )}
                    </td>
                    <td
                      onClick={() => {
                        if (editCheck && c11.r${index}s == 3) {
                          setC11({ ...c11, r${index}s: 0, r${index}d: false });
                        } else if (editCheck && c11.r${index}s != 3) {
                          setC11({ ...c11, r${index}s: 3, r${index}d: true });
                        }
                      }}
                      className="justify-center items-center"
                    >
                      {c11.r${index}s == 3 && (
                        <Image
                          src="/check.png"
                          alt=""
                          width={10}
                          height={10}
                          style={{ alignSelf: "center", margin: "0 auto" }}
                        />
                      )}
                    </td>
                    <td
                      onClick={() => {
                        if (editCheck && c11.r${index}s == 4) {
                          setC11({ ...c11, r${index}s: 0, r${index}d: false });
                        } else if (editCheck && c11.r${index}s != 4) {
                          setC11({ ...c11, r${index}s: 4, r${index}d: true });
                        }
                      }}
                      className="justify-center items-center"
                    >
                      {c11.r${index}s == 4 && (
                        <Image
                          src="/check.png"
                          alt=""
                          width={10}
                          height={10}
                          style={{ alignSelf: "center", margin: "0 auto" }}
                        />
                      )}
                    </td>
                    {/* percentage */}
                    <td className="text-center text-[12px]">
                      {data.beamGirder_steel_corrosionOfSteel_pctgAff1}
                    </td>
                    <td className="text-center text-[10px]">
                      {editCheck ? (
                        <button
                          onClick={() => {
                            setEditorMode({
                              ...editorMode,
                              type: "p",
                              compNo: "${compNo}",
                              rowNo: "1",
                              mat: "${name}",
                              value: c11.r${index}p,
                            });
                            setIsModalOpen(true);
                          }}
                          className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                          Edit
                        </button>
                      ) : (
                        c11.r${index}p
                      )}
                    </td>
                    {/* remarks */}
                    <td className="text-center text-[10px]">
                      {editCheck ? (
                        <button
                          onClick={() => {
                            setEditorMode({
                              ...editorMode,
                              type: "r",
                              compNo: "${compNo}",
                              rowNo: "1",
                              mat: "${name}",
                              value: c11.r${index}r,
                            });
                            setIsModalOpen(true);
                          }}
                          className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                          Edit
                        </button>
                      ) : (
                        c11.r${index}r
                      )}
                    </td>
                    {/* rod */}
                    <td className="text-center text-[10px]">
                      {editCheck ? (
                        <button
                          onClick={() => {
                            setEditorMode({
                              ...editorMode,
                              type: "rod",
                              compNo: "${compNo}",
                              rowNo: "1",
                              mat: "${name}",
                              value: c11.r${index}rod,
                            });
                            setIsModalOpen(true);
                          }}
                          className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                          Edit
                        </button>
                      ) : (
                        c11.r${index}rod
                      )}
                    </td>
                  </tr>
            `;
    }

    setThisArr(arrString);
  };

  useEffect(() => {
    RenderCode();
  }, []);

  return (
    <div className="w-full">
      {thisArr &&
        thisArr.length > 0 &&
        thisArr.map((item: any, index: any) => (
          <div className="mb-4">
            <p>{item}</p>
          </div>
        ))}
    </div>
  );
};

export default page;
