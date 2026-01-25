"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import Link from "next/link";
import "./styles.css";
import EditModal from "@/components/EditModal";
import { log } from "console";

const page = ({ params }: any) => {
  const { projectID, page } = params;

  const [editCheck, setEditCheck] = useState(false);

  const [data, setData] = useState([]);

  const getPhotos = async () => {
    try {
      const response = await fetch(`/api/getphotos/${projectID}`);

      if (!response.ok) {
        alert("Failed to fetch data");
      }

      const result = await response.json();
      if (result.dataa) {
        console.log("thisdata: ", JSON.stringify(result.dataa));

        setData(result.dataa);
      }
    } catch (error) {
      console.log(error);
      // throw new Error(error);
    }
  };

  const handleChange = (id: any, field: any, value: any) => {
    setData((prev: any) =>
      prev.map((item: any) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const handleUpdateData = async () => {
    try {
      const response = await fetch("/api/updatephotos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectID: projectID, photosData: data }), // your array
      });

      const result = await response.json();
      if (result.success) {
        window.location.reload();
      } else {
        alert("Fail to update information.");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id: any) => {
    if (
      window.confirm(
        "Are you sure you want to delete this item? This action cannot be undone.",
      )
    ) {
      try {
        const response = await fetch("/api/deletephotos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        });

        const result = await response.json();
        if (result.success) {
          window.location.reload();
        } else {
          alert("Fail to delete file.");
        }
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="flex flex-col overflow-y-scroll p-20 justify-center items-center">
      <div className="w-full flex flex-row justify-between items-center mb-4">
        <div className="w-8/12 no-print">
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
        <div className="w-4/12 no-print">
          <button
            onClick={handleUpdateData}
            className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-400"
          >
            Update
          </button>
        </div>
      </div>
      <div className="w-full items-center justify-center">
        <h1 className="text-center font-normal mb-4">
          PRESTASI PERINTIS SDN BHD
        </h1>
        <hr style={{ borderColor: "black", marginBottom: 16 }} />
        {data.map((item: any) => (
          <table className="w-full mb-8">
            <tr>
              <td colSpan={4}>
                <img
                  src={`/uploads/${item.filename}`}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td className="font-bold p-1">Location</td>
              <td className="p-1">
                {editCheck ? (
                  <textarea
                    value={item.location}
                    onChange={(e) =>
                      handleChange(item.id, "location", e.target.value)
                    }
                    className="h-[40px]"
                  />
                ) : (
                  item.location
                )}
              </td>
              <td className="font-bold p-1">Mapping Tag No.</td>
              <td className="p-1">
                {editCheck ? (
                  <textarea
                    value={item.mappingTagNo}
                    onChange={(e) =>
                      handleChange(item.id, "mappingTagNo", e.target.value)
                    }
                    className="h-[40px]"
                  />
                ) : (
                  item.mappingTagNo
                )}
              </td>
            </tr>
            <tr>
              <td className="font-bold p-1">Description</td>
              <td colSpan={3} className="p-1">
                {editCheck ? (
                  <textarea
                    value={item.description}
                    onChange={(e) =>
                      handleChange(item.id, "description", e.target.value)
                    }
                    className="h-[40px]"
                  />
                ) : (
                  item.description
                )}
              </td>
            </tr>
            <tr>
              <td className="font-bold p-1">Remarks</td>
              <td colSpan={3} className="p-1">
                {editCheck ? (
                  <textarea
                    value={item.remarks}
                    onChange={(e) =>
                      handleChange(item.id, "remarks", e.target.value)
                    }
                    className="h-[40px]"
                  />
                ) : (
                  item.remarks
                )}
              </td>
            </tr>
            {editCheck && (
              <tr>
                <td className="font-bold p-1">Position</td>
                <td colSpan={3} className="p-1">
                  <textarea
                    value={item.position}
                    onChange={(e) =>
                      handleChange(item.id, "position", e.target.value)
                    }
                    className="h-[40px]"
                  />
                </td>
              </tr>
            )}
            {editCheck && (
              <tr>
                <td colSpan={4}>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )}
          </table>
        ))}
      </div>
    </div>
  );
};

export default page;
