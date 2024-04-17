"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState({});

  const getProjects = async () => {
    try {
      const response = await fetch("/api/bridgelist");

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
    <div className="flex h-full bg-gray-100 justify-center items-center">
      home {data.bridgelist && JSON.stringify(data.bridgelist[0])}
    </div>
  );
};

export default page;
