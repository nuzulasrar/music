"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";

const page = () => {
  const [data, setData] = useState([]);

  const getProjects = async () => {
    try {
      const response = await fetch("/api/project");

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

  const [modalVis, setModalVis] = useState(false);

  const handleModalChange = (option: boolean) => {
    setModalVis(option);
  };

  return (
    <div
      className="flex flex-col overflow-y-scroll p-20 justify-center items-center"
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <button
        onClick={() => setModalVis(true)}
        className="bg-blue-500 px-6 py-2 rounded-lg mb-3 self-start"
      >
        <p className="text-white">Add New Project</p>
      </button>
      <table className="table-fixed">
        <thead>
          <tr className="border border-neutral-200">
            <th className="border border-neutral-200 p-2">No</th>
            <th className="border border-neutral-200 p-2">Project Name</th>
            <th className="border border-neutral-200 p-2">Type</th>
            <th className="border border-neutral-200 p-2">Created At</th>
            <th className="border border-neutral-200 p-2">Updated At</th>
            <th className="border border-neutral-200 p-2">View</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              const u1 = item?.updatedAt;
              const u11 = new Date(u1);
              const kl1 = u11.toLocaleString("en-GB", {
                timeZone: "Asia/Kuala_Lumpur",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              });
              const u2 = item?.updatedAt;
              const u22 = new Date(u2);
              const k22 = u22.toLocaleString("en-GB", {
                timeZone: "Asia/Kuala_Lumpur",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              });

              return (
                <tr className="border border-neutral-200">
                  <td className="border border-neutral-200 p-2">{index + 1}</td>
                  <td className="border border-neutral-200 p-2">
                    {item?.project_name}
                  </td>
                  <td className="border border-neutral-200 p-2">
                    {item?.project_type}
                  </td>
                  <td className="border border-neutral-200 p-2">{k22}</td>
                  <td className="border border-neutral-200 p-2">{kl1}</td>
                  <td className="border border-neutral-200 p-2">
                    <button className="bg-blue-500 px-6 py-2 rounded-lg">
                      <p className="text-white">View</p>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {modalVis && (
        <Modal
          pressCreate={() => {
            getProjects();
          }}
          pressCancel={setModalVis}
        />
      )}
    </div>
  );
};

export default page;
