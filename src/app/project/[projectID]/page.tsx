"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Modal from "@/components/Modal";

const page = ({ params }) => {
  const { projectID } = params;
  const [data, setData] = useState([]);

  const getSubmittedForms = async () => {
    try {
      const response = await fetch(`/api/project/${projectID}`);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      console.log(JSON.stringify(result));
      setData(result.data);
    } catch (error) {
      // console.log(error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    getSubmittedForms();
  }, []);

  const [modalVis, setModalVis] = useState(false);

  const handleModalChange = (option: boolean) => {
    setModalVis(option);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    // Here you can perform file upload logic, such as sending the files to a server
    console.log(selectedFiles);
    // Reset selected files after upload if needed
    setSelectedFiles([]);
  };

  return (
    <div className="flex flex-col p-20 justify-center items-center">
      {/* {data && JSON.stringify(data.length)} */}
      {data &&
        data.map((item, index) => {
          let thisformdata = JSON.parse(item.formdata);

          thisformdata = thisformdata.sort((a, b) => a.position - b.position);
          console.log("thisformdata", JSON.stringify(thisformdata, 0, 2));

          let details = JSON.parse(item.details);
          let images1 = JSON.parse(item.images1);
          let images2 = JSON.parse(item.images2);
          let images3 = JSON.parse(item.images3);
          let images_detail1 = JSON.parse(item.images_detail1);
          let images_detail2 = JSON.parse(item.images_detail2);
          let images_detail3 = JSON.parse(item.images_detail3);
          return (
            <div className="mb-10 w-11/12">
              <h1 className="text-center font-bold mb-2">
                ROUTINE CONDITION INSPECTION - STRUCTURAL CONDITION CHECKLIST
                (BRIDGE)
              </h1>
              <input type="file" multiple onChange={handleFileChange} />
              <button onClick={handleUpload}>Upload</button>
              <div className="flex flex-row justify-between items-center mb-2">
                <p className="font-bold">SPAN: {details?.span_no}</p>
                <p className="font-bold">ROUTE NO: {details?.route_no}</p>
                <p className="font-bold">STRUCT NO: {details?.struct_no}</p>
                <p className="font-bold">BRIDGE NAME: {details?.bridge_name}</p>
                <p className="font-bold">
                  NAME OF INSPECTOR: {details?.name_of_inspector}
                </p>
                <p className="font-bold">DATE: {details?.date}</p>
              </div>
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

                <tbody>
                  {thisformdata.map((formitem, formindex) => {
                    let thisstructure = JSON.parse(formitem.structure);
                    if (formindex === 0)
                      console.log(
                        "thisstructure",
                        JSON.stringify(thisstructure)
                      );

                    let thisposition = JSON.parse(formitem.position);
                    // console.log("thisposition", JSON.stringify(thisposition));

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
                  <>
                    <img
                      src={`/uploads/${image1item}`}
                      alt=""
                      style={{
                        width: window.innerWidth / 2,
                        height: window.innerWidth / 2,
                        marginBottom: 20,
                      }}
                    />
                    <table style={{ width: window.innerWidth / 2 }}>
                      <tr style={{ borderWidth: 1, borderColor: "black" }}>
                        <td style={{ borderWidth: 1, borderColor: "black" }}>
                          <p>Location:</p>
                        </td>
                        <td style={{ borderWidth: 1, borderColor: "black" }}>
                          <p>{images_detail1[image1index]?.location}</p>
                        </td>
                        <td>
                          <p>Mapping Tag No:</p>
                        </td>
                        <td style={{ borderWidth: 1, borderColor: "black" }}>
                          <p>{images_detail1[image1index]?.mapping_no}</p>
                        </td>
                      </tr>

                      <tr style={{ borderWidth: 1, borderColor: "black" }}>
                        <td style={{ borderWidth: 1, borderColor: "black" }}>
                          <p>Description:</p>
                        </td>
                        <td
                          colSpan={3}
                          style={{ borderWidth: 1, borderColor: "black" }}
                        >
                          <p>{images_detail1[image1index]?.description}</p>
                        </td>
                      </tr>

                      <tr style={{ borderWidth: 1, borderColor: "black" }}>
                        <td style={{ borderWidth: 1, borderColor: "black" }}>
                          <p>Remarks: </p>
                        </td>
                        <td
                          colSpan={3}
                          style={{ borderWidth: 1, borderColor: "black" }}
                        >
                          <p>{images_detail1[image1index]?.remarks}</p>
                        </td>
                      </tr>
                    </table>
                  </>
                  // <p>{image1item}</p>
                );
              })}
              {images2.map((image2item, image2index) => {
                return (
                  <>
                    <img
                      src={`/uploads/${image2item}`}
                      alt=""
                      style={{
                        width: window.innerWidth / 2,
                        height: window.innerWidth / 2,
                        marginBottom: 20,
                      }}
                    />
                    <table style={{ width: window.innerWidth / 2 }}>
                      <tr style={{ borderWidth: 1, borderColor: "black" }}>
                        <td style={{ borderWidth: 1, borderColor: "black" }}>
                          <p>Location:</p>
                        </td>
                        <td style={{ borderWidth: 1, borderColor: "black" }}>
                          <p>{images_detail2[image2index]?.location}</p>
                        </td>
                        <td>
                          <p>Mapping Tag No:</p>
                        </td>
                        <td style={{ borderWidth: 1, borderColor: "black" }}>
                          <p>{images_detail2[image2index]?.mapping_no}</p>
                        </td>
                      </tr>

                      <tr style={{ borderWidth: 1, borderColor: "black" }}>
                        <td style={{ borderWidth: 1, borderColor: "black" }}>
                          <p>Description:</p>
                        </td>
                        <td
                          colSpan={3}
                          style={{ borderWidth: 1, borderColor: "black" }}
                        >
                          <p>{images_detail2[image2index]?.description}</p>
                        </td>
                      </tr>

                      <tr style={{ borderWidth: 1, borderColor: "black" }}>
                        <td style={{ borderWidth: 1, borderColor: "black" }}>
                          <p>Remarks: </p>
                        </td>
                        <td
                          colSpan={3}
                          style={{ borderWidth: 1, borderColor: "black" }}
                        >
                          <p>{images_detail2[image2index]?.remarks}</p>
                        </td>
                      </tr>
                    </table>
                  </>
                  // <p>{image1item}</p>
                );
              })}
              {images3.map((image3item, image3index) => {
                return (
                  <>
                    <img
                      src={`/uploads/${image3item}`}
                      alt=""
                      style={{
                        width: window.innerWidth / 2,
                        height: window.innerWidth / 2,
                      }}
                    />
                    <p>Location: {images_detail3[image3index]?.location}</p>
                    <p>
                      Description: {images_detail3[image3index]?.description}
                    </p>
                    <p>Mapping No: {images_detail3[image3index]?.mapping_no}</p>
                    <p>Remarks: {images_detail3[image3index]?.remarks}</p>
                  </>
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
