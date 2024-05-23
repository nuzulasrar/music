"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Modal from "@/components/Modal";
import EditRatingMemberModal from "@/components/EditRatingMemberModal";

const page = ({ params }: any) => {
  const { projectID } = params;
  const [data, setData] = useState<any>([]);

  const getSubmittedForms = async () => {
    try {
      const response = await fetch(`/api/project/${projectID}`);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      console.log(JSON.stringify(result));
      setData(result.data);
    } catch (error: any) {
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

  const handleFileChange = (event: any) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    const fd = new FormData();

    let thisarray = [...selectedFiles];

    thisarray.forEach((item, index) => {
      fd.append(`files${index}`, thisarray[index]);
    });

    fd.append(`id`, data[0]?.id);

    try {
      const response = await fetch("/api/uploadtemplate", {
        method: "post",
        body: fd,
      });

      const json = await response.json();

      if (json.success) {
        window.location.reload();
      } else {
        alert("fail to upload image");
      }
    } catch (error: any) {
      console.log(error.message);
      throw error;
    }
  };

  const [editForm, setEditForm] = useState(0);
  const [editComponent, setEditComponent] = useState(0);
  const [editMaterial, setEditMaterial] = useState(0);

  const [editValue, setEditValue] = useState("");
  const [editModalVis, setEditModalVis] = useState(false);

  const updateForm = (form: any, id: any) => {
    // console.log(form);
    // console.log(id);

    var fd = new FormData();

    fd.append("form", JSON.stringify(JSON.parse(form)));
    fd.append("id", JSON.stringify(id));

    fetch("/api/submitform", {
      method: "PUT",
      body: fd,
      // headers: {
      //   "Content-Type": "multipart/form-data; ",
      // },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);

        if (json?.success === "success") {
          window.location.reload();
        } else {
          alert("Fail to update. Please try again later.");
        }
      })
      .catch((error) => console.log("ERROR", error));
  };

  const [editCheck, setEditCheck] = useState(false);

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
    let thiss = JSON.parse(data[index].formdata);
    const thisMaterial = [...thiss];

    //parse structure
    let thisStructure = JSON.parse(thisMaterial[component].structure);

    console.log(JSON.stringify(thisStructure));

    //x pernah set
    if (
      String(
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].tick
      ) == "0"
    ) {
      //set active details
      thisStructure["component"].material[material].type_of_damages[
        type_of_damages
      ].active_details = whichDetail;

      //kalau confirm 4
      if (
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].remarks.includes("rating = 4")
      ) {
        //set rating of damage
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].severity_of_damage = 4;

        //set tick for the material
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].tick = 1;

        //set percentage affected
        if (whichDetail == 1) {
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details;
        } else if (whichDetail == 2) {
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details_2;
        } else if (whichDetail == 3) {
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details_3;
        }
      }
      //kalau confirm 3
      else if (
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].remarks.includes("rating = 3")
      ) {
        //set rating of damage
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].severity_of_damage = 3;

        //set tick for the material
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].tick = 1;

        //set percentage affected
        if (whichDetail == 1) {
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details;
        } else if (whichDetail == 2) {
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details_2;
        } else if (whichDetail == 3) {
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details_3;
        }
      } else {
        //set rating of damage
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].severity_of_damage = material_rating + 1;

        //set tick for the material
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].tick = 1;

        //set percentage affected
        if (whichDetail == 1) {
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details;
        } else if (whichDetail == 2) {
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details_2;
        } else if (whichDetail == 3) {
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected =
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage_list[material_rating].details_3;
        }
      }
    }
    // pernah set
    else {
      if (
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].remarks.includes("rating = 4")
      ) {
        //set active details
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].active_details = 0;
        //set rating of damage
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].severity_of_damage = 0;

        //set tick for the material
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].tick = 0;

        //set percentage affected
        thisStructure["component"].material[material].type_of_damages[
          type_of_damages
        ].percentage_affected = "";
      } else {
        //sama
        if (
          String(
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].severity_of_damage
          ) == String(Number(material_rating + 1))
        ) {
          //set active details
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].active_details = 0;
          //set rating of damage
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].severity_of_damage = 0;

          //set tick for the material
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].tick = 0;

          //set percentage affected
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].percentage_affected = "";
        }
        //x sama
        else {
          //set active details
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].active_details = whichDetail;
          //set rating of damage
          thisStructure["component"].material[material].type_of_damages[
            type_of_damages
          ].severity_of_damage = material_rating + 1;

          //set percentage affected
          if (whichDetail == 1) {
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].percentage_affected =
              thisStructure["component"].material[material].type_of_damages[
                type_of_damages
              ].severity_of_damage_list[material_rating].details;
          } else if (whichDetail == 2) {
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].percentage_affected =
              thisStructure["component"].material[material].type_of_damages[
                type_of_damages
              ].severity_of_damage_list[material_rating].details_2;
          } else if (whichDetail == 3) {
            thisStructure["component"].material[material].type_of_damages[
              type_of_damages
            ].percentage_affected =
              thisStructure["component"].material[material].type_of_damages[
                type_of_damages
              ].severity_of_damage_list[material_rating].details_3;
          }
        }
      }
    }

    thisStructure.component.material.forEach((item: any, index: any) => {
      let maxSeverity = 0;

      // Iterate through the "type_of_damages" array for each "material" item
      item.type_of_damages.forEach((damage: any) => {
        const severity = damage.severity_of_damage;
        if (severity > maxSeverity) {
          maxSeverity = severity;
        }
      });

      // Update the "rating_of_member" with the maximum severity
      item.rating_of_member = maxSeverity;
    });

    // convert to string to store to DB
    thisMaterial[component].structure = JSON.stringify(thisStructure);

    // console.log(
    //   JSON.stringify(JSON.parse(thisMaterial.bridgelist[component].structure))
    // );

    console.log(
      JSON.stringify(
        JSON.parse(thisMaterial[component].structure).component.material[
          material
        ].type_of_damages[type_of_damages].severity_of_damage
      )
    );

    // set to the original list to FE
    // setFormList(thisMaterial);
  };

  return (
    <div className="flex flex-col p-20 justify-center items-center">
      {/* {data && JSON.stringify(data.length)} */}
      <div className="w-full mb-8">
        <div className="flex flex-row items-center w-full bg-red-100">
          <div className="w-1/2 flex flex-row items-center mb-6 bg-yellow-100">
            <div className="w-8/12">
              <p className="font-bold mb-2">Add Template</p>
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
            </div>
            <button
              className="bg-blue-400 text-white font-bold px-6 py-3 rounded-xl ml-3"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
          <div className="w-1/2 flex flex-row items-center mb-6 bg-yellow-100">
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
                <p className="ml-3">{editCheck ? "Edit Mode" : "View Mode"}</p>
              </label>
            </div>
          </div>
        </div>
      </div>
      {data &&
        data.map((item: any, index: any) => {
          let thisformdata = JSON.parse(item.formdata);

          thisformdata = thisformdata.sort(
            (a: any, b: any) => a.position - b.position
          );
          // console.log("thisformdata", JSON.stringify(thisformdata, 0, 2));

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

              <div className="flex flex-row justify-between items-center mb-2">
                <p className="font-bold">
                  SPAN: <span className="font-normal">{details?.span_no}</span>
                </p>
                <p className="font-bold">
                  ROUTE NO:{" "}
                  <span className="font-normal">{details?.route_no}</span>
                </p>
                <p className="font-bold">
                  STRUCT NO:{" "}
                  <span className="font-normal">{details?.struct_no}</span>
                </p>
                <p className="font-bold">
                  BRIDGE NAME:{" "}
                  <span className="font-normal">{details?.bridge_name}</span>
                </p>
                <p className="font-bold">
                  NAME OF INSPECTOR:{" "}
                  <span className="font-normal">
                    {details?.name_of_inspector}
                  </span>
                </p>
                <p className="font-bold">
                  DATE: <span className="font-normal">{details?.date}</span>
                </p>
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
                  {thisformdata.map((formitem: any, formindex: any) => {
                    let thisstructure = JSON.parse(formitem.structure);
                    if (formindex === 0) {
                      // console.log(
                      //   "thisstructure",
                      //   JSON.stringify(thisstructure)
                      // );
                    }
                    let thisposition = JSON.parse(formitem.position);
                    // console.log("thisposition", JSON.stringify(thisposition));

                    let material = thisstructure.component.material;

                    let first = 0;
                    first++;
                    let theserow = 0;

                    material.map((mtelement: any) => {
                      mtelement.type_of_damages &&
                        mtelement.type_of_damages.map((mdelement: any) => {
                          theserow = theserow + 1;
                        });
                    });
                    return (
                      <>
                        {material &&
                          material.map((mtitem: any, mtindex: any) => {
                            let material_details = mtitem.material_details;
                            let type_of_damages = mtitem.type_of_damages;
                            return (
                              <>
                                {type_of_damages &&
                                  type_of_damages.map(
                                    (toditem: any, todindex: any) => {
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
                                                  (
                                                    mditem: any,
                                                    mdindex: any
                                                  ) => {
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
                                          <td className="border border-neutral-200">
                                            {toditem?.tick == 1 ? (
                                              <Image
                                                src="/check.png"
                                                alt=""
                                                width={20}
                                                height={20}
                                                style={{ alignSelf: "center" }}
                                                className="mx-auto"
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
                                                className="mx-auto"
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
                                              );
                                            }}
                                            className="border border-neutral-200"
                                          >
                                            {toditem?.severity_of_damage ==
                                            1 ? (
                                              <Image
                                                src="/check.png"
                                                alt=""
                                                width={20}
                                                height={20}
                                                style={{ alignSelf: "center" }}
                                                className="mx-auto"
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
                                              );
                                            }}
                                            className="border border-neutral-200"
                                          >
                                            {toditem?.severity_of_damage ==
                                            2 ? (
                                              <Image
                                                src="/check.png"
                                                alt=""
                                                width={20}
                                                height={20}
                                                style={{ alignSelf: "center" }}
                                                className="mx-auto"
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
                                              );
                                            }}
                                            className="border border-neutral-200"
                                          >
                                            {toditem?.severity_of_damage ==
                                            3 ? (
                                              <Image
                                                src="/check.png"
                                                alt=""
                                                width={20}
                                                height={20}
                                                style={{ alignSelf: "center" }}
                                                className="mx-auto"
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
                                              );
                                            }}
                                            className="border border-neutral-200"
                                          >
                                            {toditem?.severity_of_damage ==
                                            4 ? (
                                              <Image
                                                src="/check.png"
                                                alt=""
                                                width={20}
                                                height={20}
                                                style={{ alignSelf: "center" }}
                                                className="mx-auto"
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
                                              className="border border-neutral-200 cursor-pointer"
                                              onClick={() => {
                                                setEditForm(index);
                                                setEditComponent(formindex);
                                                setEditMaterial(mtindex);
                                                setEditValue(
                                                  material[mtindex]
                                                    ?.rating_of_member
                                                );
                                                setEditModalVis(true);
                                              }}
                                            >
                                              <p>
                                                {material[mtindex]
                                                  ?.rating_of_member == 0
                                                  ? "-"
                                                  : material[mtindex]
                                                      ?.rating_of_member}
                                              </p>
                                            </td>
                                          ) : null}
                                        </tr>
                                      );
                                    }
                                  )}
                              </>
                            );
                          })}
                      </>
                    );
                  })}
                </tbody>
              </table>
              {images1.map((image1item: any, image1index: any) => {
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
              {images2.map((image2item: any, image2index: any) => {
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
              {images3.map((image3item: any, image3index: any) => {
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

      {/* {JSON.parse(data[0]?.properimages).map((item, index) => {
        return (
          <>
            <img
              src={`/uploads/${item}`}
              alt=""
              style={{
                width: window.innerWidth / 2,
                height: window.innerWidth / 2,
              }}
            />
          </>
        );
      })} */}

      {data[0] &&
        JSON.parse(data[0]?.properimages).map((item: any, index: any) => {
          return (
            <>
              <img
                src={`/uploads/${item}`}
                alt=""
                style={{
                  width: window.innerWidth / 2,
                  height: window.innerWidth / 2,
                  objectFit: "contain",
                }}
              />
              <div className="w-full border-b-2 border-b-gray-400"></div>
            </>
          );
        })}

      {editModalVis && (
        <EditRatingMemberModal
          value={editValue}
          pressOK={(value: any) => {
            let thisform = [...data];

            let thisstructure = JSON.parse(
              JSON.parse(thisform[editForm].formdata)[editComponent].structure
            );

            thisstructure.component.material[editMaterial].rating_of_member =
              value;

            let thisformdata = JSON.parse(thisform[editForm].formdata);

            thisformdata[editComponent].structure =
              JSON.stringify(thisstructure);

            thisform[editForm].formdata = JSON.stringify(thisformdata);

            // console.log(thisformdata[editComponent].structure);

            // console.log(thisform[editForm].formdata);

            updateForm(thisform[editForm].formdata, thisform[editForm].id);

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
            setEditModalVis(option);
          }}
        />
      )}
    </div>
  );
};

export default page;
