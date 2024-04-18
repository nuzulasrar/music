"use client";
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
      //   alert(JSON.stringify(typeof data));
      setData(result);
    } catch (error) {
      console.log(error);
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
            <div className="mb-10">
              <div className="bg-red-100">{item.project_type}</div>
              {/* <p>{JSON.stringify(thisformdata)}</p> */}
              {thisformdata.map((formitem, formindex) => {
                let thisstructure = JSON.parse(formitem.structure);
                let material = thisstructure.component.material;
                return (
                  <div className="bg-emerald-100 flex flex-row justify-between mb-4">
                    {/* <p>{JSON.stringify(material_details)}</p> */}
                    <p>{thisstructure.component.component_details.name}</p>
                    {material.map((materialitem, materialindex) => {
                      let material_details = materialitem.material_details;
                      return (
                        <div className="bg-yellow-100">
                          <p>{materialitem.rating_of_member}</p>
                          {/* <p>{JSON.stringify(material_details)}</p> */}
                          {material_details &&
                            material_details.map(
                              (mtdetailitem, mtdetailindex) => {
                                return (
                                  <div className="flex flex-row">
                                    <input
                                      type="checkbox"
                                      name=""
                                      id=""
                                      checked={
                                        mtdetailitem.tick == 1 ? true : false
                                      }
                                    />
                                    {mtdetailitem.tick}
                                    <p>{mtdetailitem.name}</p>
                                  </div>
                                );
                              }
                            )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
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
