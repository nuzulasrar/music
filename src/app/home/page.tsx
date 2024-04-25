"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState({});

  const getProjects = async () => {
    try {
      const response = await fetch("/api/submitform/Bridge");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      // console.log(error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const haha = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div className="flex flex-col overflow-y-scroll p-20 bg-gray-100 justify-center items-center">
      {/* home {data.bridgelist && JSON.stringify(data.bridgelist[0])} */}
      {data.submitted_form && data.submitted_form.length}
      {data.submitted_form &&
        data.submitted_form.map((item, index) => {
          let thisformdata = JSON.parse(item.formdata);
          let images1 = JSON.parse(item.images1);
          let images2 = JSON.parse(item.images2);
          let images3 = JSON.parse(item.images3);
          return (
            <div className="mb-10 w-11/12">
              <div className="bg-red-100">{item.project_type}</div>
              <table className="min-w-full border border-neutral-200 text-center mb-5">
                <thead>
                  <tr className="border border-neutral-200">
                    <th colSpan={2} className="border border-neutral-200">
                      Bridge Member
                    </th>
                    <th rowSpan={2} className="border border-neutral-200">
                      TYPE OF DAMAGES
                    </th>
                    <th rowSpan={2} className="border border-neutral-200">
                      CODE
                    </th>
                    <th colSpan={2} className="border border-neutral-200">
                      DEFECTS
                    </th>
                    <th colSpan={4} className="border border-neutral-200">
                      SEVERITY OF DAMAGE
                    </th>
                    <th colSpan={2} className="border border-neutral-200">
                      PERCENTAGE AFFECTED
                    </th>
                    <th rowSpan={2} className="border border-neutral-200">
                      REMARKS
                    </th>
                    <th rowSpan={2} className="border border-neutral-200">
                      RATING OF DAMAGE
                    </th>
                    <th rowSpan={2} className="border border-neutral-200">
                      RATING OF MEMBER
                    </th>
                  </tr>
                  <tr className="border border-neutral-200">
                    <th className="border border-neutral-200">Component</th>
                    <th className="border border-neutral-200">Material</th>
                    <th className="border border-neutral-200">Yes</th>
                    <th className="border border-neutral-200">No</th>
                    <th className="border border-neutral-200">Light</th>
                    <th className="border border-neutral-200">Medium</th>
                    <th className="border border-neutral-200">Severe</th>
                    <th className="border border-neutral-200">V. Severe</th>
                    <th className="border border-neutral-200">*</th>
                    <th className="border border-neutral-200"></th>
                  </tr>
                </thead>
                {/* <tbody>
                  <tr className="border border-neutral-200">
                    <td rowSpan={14} className="border border-neutral-200">
                      Beam Girder
                    </td>
                    <td rowSpan={7} className="border border-neutral-200">
                      Steel
                    </td>
                    <td className="border border-neutral-200">C of Steel</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td rowSpan={7} className="border border-neutral-200">
                      4
                    </td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td className="border border-neutral-200">
                      Fracture at Steek
                    </td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td className="border border-neutral-200">
                      Loose Connections
                    </td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td className="border border-neutral-200">
                      Permanent Deformations
                    </td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td className="border border-neutral-200">
                      Paint Deteriorations
                    </td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td className="border border-neutral-200">
                      Abnormal Vibration
                    </td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td className="border border-neutral-200">
                      Abnormal Noise
                    </td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td rowSpan={7} className="border border-neutral-200">
                      P Concrete
                    </td>
                    <td className="border border-neutral-200">
                      Surface Defect
                    </td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td className="border border-neutral-200">-</td>
                    <td rowSpan={7} className="border border-neutral-200">
                      4
                    </td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td className="border border-neutral-200">
                      Cracks at Concrete
                    </td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td className="border border-neutral-200">Delamination</td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td className="border border-neutral-200">Spalling</td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td className="border border-neutral-200">
                      Corrosion of Reinforcement
                    </td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td className="border border-neutral-200">
                      Abnormal Vibration/Defelction
                    </td>
                  </tr>
                  <tr className="border border-neutral-200">
                    <td className="border border-neutral-200">
                      Abnormal Movement
                    </td>
                  </tr>
                </tbody> */}

                <tbody>
                  {thisformdata.map((formitem, formindex) => {
                    let thisstructure = JSON.parse(formitem.structure);
                    console.log("thisstructure", JSON.stringify(thisstructure));

                    let material = thisstructure.component.material;

                    let first = 0;
                    first++;
                    let theserow = 0;

                    material.map((mtelement) => {
                      mtelement.type_of_damages &&
                        mtelement.type_of_damages.map((mdelement) => {
                          theserow = theserow + 1;
                        });
                    });
                    return (
                      <>
                        {material &&
                          material.map((mtitem, mtindex) => {
                            let material_details = mtitem.material_details;
                            let type_of_damages = mtitem.type_of_damages;
                            return (
                              <>
                                {type_of_damages &&
                                  type_of_damages.map((toditem, todindex) => {
                                    return (
                                      <tr className="border-4 border-neutral-200">
                                        {mtindex === 0 && todindex === 0 ? (
                                          <td
                                            rowSpan={theserow}
                                            className="border border-neutral-200"
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
                                            className="border border-neutral-200"
                                          >
                                            {material[mtindex]
                                              .material_details &&
                                              material[
                                                mtindex
                                              ].material_details.map(
                                                (mditem, mdindex) => {
                                                  return (
                                                    <>
                                                      <p>{mditem.name}</p>
                                                    </>
                                                  );
                                                }
                                              )}
                                          </td>
                                        ) : null}
                                        <td className="border border-neutral-200">
                                          {toditem?.name}
                                        </td>
                                        <td className="border border-neutral-200">
                                          {toditem?.code}
                                        </td>
                                        <td className="border border-neutral-200 flex justify-center items-center text-center">
                                          {toditem?.tick == 1 ? (
                                            <Image
                                              src="/check.png"
                                              alt=""
                                              width={20}
                                              height={20}
                                              style={{ alignSelf: "center" }}
                                            />
                                          ) : null}
                                        </td>
                                        <td className="border border-neutral-200">
                                          {toditem?.tick == 0 ? (
                                            <Image
                                              src="/check.png"
                                              alt=""
                                              width={20}
                                              height={20}
                                              style={{ alignSelf: "center" }}
                                            />
                                          ) : null}
                                        </td>
                                        <td className="border border-neutral-200">
                                          {toditem?.severity_of_damage == 1 ? (
                                            <Image
                                              src="/check.png"
                                              alt=""
                                              width={20}
                                              height={20}
                                              style={{ alignSelf: "center" }}
                                            />
                                          ) : null}
                                        </td>
                                        <td className="border border-neutral-200">
                                          {toditem?.severity_of_damage == 2 ? (
                                            <Image
                                              src="/check.png"
                                              alt=""
                                              width={20}
                                              height={20}
                                              style={{ alignSelf: "center" }}
                                            />
                                          ) : null}
                                        </td>
                                        <td className="border border-neutral-200">
                                          {toditem?.severity_of_damage == 3 ? (
                                            <Image
                                              src="/check.png"
                                              alt=""
                                              width={20}
                                              height={20}
                                              style={{ alignSelf: "center" }}
                                            />
                                          ) : null}
                                        </td>
                                        <td className="border border-neutral-200">
                                          {toditem?.severity_of_damage == 4 ? (
                                            <Image
                                              src="/check.png"
                                              alt=""
                                              width={20}
                                              height={20}
                                              style={{ alignSelf: "center" }}
                                            />
                                          ) : null}
                                        </td>
                                        <td className="border border-neutral-200"></td>
                                        <td className="border border-neutral-200"></td>
                                        <td className="border border-neutral-200">
                                          {toditem?.remarks}
                                        </td>
                                        <td className="border border-neutral-200">
                                          {toditem?.severity_of_damage}
                                        </td>
                                        {todindex === 0 ? (
                                          <td
                                            rowSpan={type_of_damages.length}
                                            className="border border-neutral-200"
                                          >
                                            {material[mtindex]
                                              ?.rating_of_member == 0
                                              ? "-"
                                              : material[mtindex]
                                                  ?.rating_of_member}
                                          </td>
                                        ) : null}
                                      </tr>
                                    );
                                  })}
                              </>
                            );
                          })}
                      </>
                    );
                  })}
                </tbody>
              </table>

              {images1.map((image1item, image1index) => {
                return (
                  <img
                    src={`/uploads/${image1item}`}
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                  // <p>{image1item}</p>
                );
              })}
              {images2.map((image2item, image2index) => {
                return (
                  <img
                    src={`/uploads/${image2item}`}
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                  // <p>{image1item}</p>
                );
              })}
              {images3.map((image3item, image3index) => {
                return (
                  <img
                    src={`/uploads/${image3item}`}
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                  // <p>{image1item}</p>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default page;
