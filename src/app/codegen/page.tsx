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
    let name = "Abnormal Noise";
    let pname = "Corrosion of Reinforcement";

    let arrString = [];
    for (let index = 14; index < 15; index++) {
      arrString[index] = `
        
        {/* percentage */}
            <td className="text-center text-[12px]">
              {data.beamGirder_steel_corrosionOfSteel_pctgAff1}
            </td>
            <td className="text-center text-[8px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "${index}",
                      mat: "${name}",
                      value: c1.r${index}p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c1.r${index}p
              )}
            </td>
            {/* remarks */}
            <td className="text-center text-[8px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "${index}",
                      mat: "${name}",
                      value: c1.r${index}r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c1.r${index}r
              )}
            </td>
            {/* rod */}
            <td className="text-center text-[8px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "${index}",
                      mat: "${name}",
                      value: c1.r${index}rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c1.r${index}rod
              )}
            </td>
            `;
    }

    setThisArr(arrString);
  };

  useEffect(() => {
    RenderCode();
  }, []);

  return (
    <div
      className="flex flex-col overflow-y-scroll p-20 justify-center items-center"
      style={{ width: "100%", height: "100%" }}
    >
      <div className="w-full">
        {/* sadsadsa {JSON.stringify(thisArr)} */}
        {thisArr &&
          thisArr.length > 0 &&
          thisArr.map((item: any, index: any) => (
            <div className="mb-4">
              <p>{item}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;
