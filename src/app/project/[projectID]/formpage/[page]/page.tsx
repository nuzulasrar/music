"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import Link from "next/link";
import "./styles.css";
import EditModal from "@/components/EditModal";

const page = ({ params }: any) => {
  const { projectID, page } = params;

  const [editCheck, setEditCheck] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editorMode, setEditorMode] = useState({
    type: "", // p || r ||  rod || rom
    compNo: "0",
    rowNo: "0",
    mat: "",
    value: "",
  });

  const [data, setData] = useState<any>([]);

  const [spanNo, setSpanNo] = useState("");

  const [formData, setFormData] = useState({
    pageOfSpan: "",
    routeNo: "",
    structNo: "",
    bridgeName: "",
    nameOfInspector: "",
    date: "",
  });

  const [c1, setC1] = useState<any>({
    main: false,
    one: false,
    two: false,
    three: false,
    rom1: "",
    rom2: "",
    r1d: null,
    r1s: null,
    r1p: null,
    r1r: null,
    r1rod: null,

    r2d: null,
    r2s: null,
    r2p: null,
    r2r: null,
    r2rod: null,

    r3d: null,
    r3s: null,
    r3p: null,
    r3r: null,
    r3rod: null,

    r4d: null,
    r4s: null,
    r4p: null,
    r4r: null,
    r4rod: null,

    r5d: null,
    r5s: null,
    r5p: null,
    r5r: null,
    r5rod: null,

    r6d: null,
    r6s: null,
    r6p: null,
    r6r: null,
    r6rod: null,

    r7d: null,
    r7s: null,
    r7p: null,
    r7r: null,
    r7rod: null,

    r8d: null,
    r8s: null,
    r8p: null,
    r8r: null,
    r8rod: null,

    r9d: null,
    r9s: null,
    r9p: null,
    r9r: null,
    r9rod: null,

    r10d: null,
    r10s: null,
    r10p: null,
    r10r: null,
    r10rod: null,

    r11d: null,
    r11s: null,
    r11p: null,
    r11r: null,
    r11rod: null,

    r12d: null,
    r12s: null,
    r12p: null,
    r12r: null,
    r12rod: null,

    r13d: null,
    r13s: null,
    r13p: null,
    r13r: null,
    r13rod: null,

    r14d: null,
    r14s: null,
    r14p: null,
    r14r: null,
    r14rod: null,
  });

  const [c2, setC2] = useState<any>({
    main: false,
    one: false,
    two: false,
    three: false,
    rom1: "",
    rom2: "",
    r1d: null,
    r1s: null,
    r1p: null,
    r1r: null,
    r1rod: null,

    r2d: null,
    r2s: null,
    r2p: null,
    r2r: null,
    r2rod: null,

    r3d: null,
    r3s: null,
    r3p: null,
    r3r: null,
    r3rod: null,

    r4d: null,
    r4s: null,
    r4p: null,
    r4r: null,
    r4rod: null,

    r5d: null,
    r5s: null,
    r5p: null,
    r5r: null,
    r5rod: null,

    r6d: null,
    r6s: null,
    r6p: null,
    r6r: null,
    r6rod: null,

    r7d: null,
    r7s: null,
    r7p: null,
    r7r: null,
    r7rod: null,

    r8d: null,
    r8s: null,
    r8p: null,
    r8r: null,
    r8rod: null,

    r9d: null,
    r9s: null,
    r9p: null,
    r9r: null,
    r9rod: null,

    r10d: null,
    r10s: null,
    r10p: null,
    r10r: null,
    r10rod: null,

    r11d: null,
    r11s: null,
    r11p: null,
    r11r: null,
    r11rod: null,

    r12d: null,
    r12s: null,
    r12p: null,
    r12r: null,
    r12rod: null,

    r13d: null,
    r13s: null,
    r13p: null,
    r13r: null,
    r13rod: null,

    r14d: null,
    r14s: null,
    r14p: null,
    r14r: null,
    r14rod: null,
  });

  const handleUpdateEditor = () => {};

  const getForm = async () => {
    try {
      const response = await fetch(`/api/getform/${projectID}/${page}`);

      if (!response.ok) {
        alert("Failed to fetch data");
      }

      const result = await response.json();
      if (result.dataa) {
        setFormData({
          ...formData,
          pageOfSpan: result.dataa.pageOfSpan,
          routeNo: result.dataa.routeNo,
          structNo: result.dataa.structNo,
          bridgeName: result.dataa.bridgeName,
          nameOfInspector: result.dataa.nameOfInspector,
          date: result.dataa.date,
        });

        setC1({
          ...c1,
          main: result.dataa.beamGirder_tick,
          one: result.dataa.beamGirder_steel_tick,
          two: result.dataa.beamGirder_pConcrete_tick,
          three: result.dataa.beamGirder_rConcrete_tick,

          rom1: result.dataa.beamGirder_steel_ratingOfMember,
          rom2: result.dataa.beamGirder_pAndRConcrete_ratingOfMember,

          r1d: result.dataa.beamGirder_steel_corrosionOfSteel_tick,
          r1s: result.dataa.beamGirder_steel_corrosionOfSteel_severity,
          r1p: result.dataa.beamGirder_steel_corrosionOfSteel_pctgAff2,
          r1r: result.dataa.beamGirder_steel_corrosionOfSteel_remarks,
          r1rod: result.dataa.beamGirder_steel_corrosionOfSteel_rod,

          r2d: result.dataa.beamGirder_steel_fractureAtSteel_tick,
          r2s: result.dataa.beamGirder_steel_fractureAtSteel_severity,
          r2p: result.dataa.beamGirder_steel_fractureAtSteel_pctgAff1,
          r2r: result.dataa.beamGirder_steel_fractureAtSteel_remarks,
          r2rod: result.dataa.beamGirder_steel_fractureAtSteel_rod,

          r3d: result.dataa.beamGirder_steel_looseConnections_tick,
          r3s: result.dataa.beamGirder_steel_looseConnections_severity,
          r3p: result.dataa.beamGirder_steel_looseConnections_pctgAff2,
          r3r: result.dataa.beamGirder_steel_looseConnections_remarks,
          r3rod: result.dataa.beamGirder_steel_looseConnections_rod,

          r4d: result.dataa.beamGirder_steel_perManentDeformations_tick,
          r4s: result.dataa.beamGirder_steel_perManentDeformations_severity,
          r4p: result.dataa.beamGirder_steel_perManentDeformations_pctgAff1,
          r4r: result.dataa.beamGirder_steel_perManentDeformations_remarks,
          r4rod: result.dataa.beamGirder_steel_perManentDeformations_rod,

          r5d: result.dataa.beamGirder_steel_paintDeterioration_tick,
          r5s: result.dataa.beamGirder_steel_paintDeterioration_severity,
          r5p: result.dataa.beamGirder_steel_paintDeterioration_pctgAff2,
          r5r: result.dataa.beamGirder_steel_paintDeterioration_remarks,
          r5rod: result.dataa.beamGirder_steel_paintDeterioration_rod,

          r6d: result.dataa.beamGirder_steel_abnormalVibration_tick,
          r6s: result.dataa.beamGirder_steel_abnormalVibration_severity,
          r6p: result.dataa.beamGirder_steel_abnormalVibration_pctgAff1,
          r6r: result.dataa.beamGirder_steel_abnormalVibration_remarks,
          r6rod: result.dataa.beamGirder_steel_abnormalVibration_rod,

          r7d: result.dataa.beamGirder_steel_abnormalNoise_tick,
          r7s: result.dataa.beamGirder_steel_abnormalNoise_severity,
          r7p: result.dataa.beamGirder_steel_abnormalNoise_pctgAff1,
          r7r: result.dataa.beamGirder_steel_abnormalNoise_remarks,
          r7rod: result.dataa.beamGirder_steel_abnormalNoise_rod,

          r8d: result.dataa.beamGirder_pAndRConcrete_surfaceDefect_tick,
          r8s: result.dataa.beamGirder_pAndRConcrete_surfaceDefect_severity,
          r8p: result.dataa.beamGirder_pAndRConcrete_surfaceDefect_pctgAff2,
          r8r: result.dataa.beamGirder_pAndRConcrete_surfaceDefect_remarks,
          r8rod: result.dataa.beamGirder_pAndRConcrete_surfaceDefect_rod,

          r9d: result.dataa.beamGirder_pAndRConcrete_cracksAtConcrete_tick,
          r9s: result.dataa.beamGirder_pAndRConcrete_cracksAtConcrete_severity,
          r9p: result.dataa.beamGirder_pAndRConcrete_cracksAtConcrete_pctgAff1,
          r9r: result.dataa.beamGirder_pAndRConcrete_cracksAtConcrete_remarks,
          r9rod: result.dataa.beamGirder_pAndRConcrete_cracksAtConcrete_rod,

          r10d: result.dataa.beamGirder_pAndRConcrete_delamination_tick,
          r10s: result.dataa.beamGirder_pAndRConcrete_delamination_severity,
          r10p: result.dataa.beamGirder_pAndRConcrete_delamination_pctgAff2,
          r10r: result.dataa.beamGirder_pAndRConcrete_delamination_remarks,
          r10rod: result.dataa.beamGirder_pAndRConcrete_delamination_rod,

          r11d: result.dataa.beamGirder_pAndRConcrete_spalling_tick,
          r11s: result.dataa.beamGirder_pAndRConcrete_spalling_severity,
          r11p: result.dataa.beamGirder_pAndRConcrete_spalling_pctgAff2,
          r11r: result.dataa.beamGirder_pAndRConcrete_spalling_remarks,
          r11rod: result.dataa.beamGirder_pAndRConcrete_spalling_rod,

          r12d: result.dataa
            .beamGirder_pAndRConcrete_corrossionOfReinforcement_tick,
          r12s: result.dataa
            .beamGirder_pAndRConcrete_corrossionOfReinforcement_severity,
          r12p: result.dataa
            .beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff2,
          r12r: result.dataa
            .beamGirder_pAndRConcrete_corrossionOfReinforcement_remarks,
          r12rod:
            result.dataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_rod,

          r13d: result.dataa.beamGirder_pAndRConcrete_abnormalVibration_tick,
          r13s: result.dataa
            .beamGirder_pAndRConcrete_abnormalVibration_severity,
          r13p: result.dataa
            .beamGirder_pAndRConcrete_abnormalVibration_pctgAff1,
          r13r: result.dataa.beamGirder_pAndRConcrete_abnormalVibration_remarks,
          r13rod: result.dataa.beamGirder_pAndRConcrete_abnormalVibration_rod,

          r14d: result.dataa.beamGirder_pAndRConcrete_abnormalMovement_tick,
          r14s: result.dataa.beamGirder_pAndRConcrete_abnormalMovement_severity,
          r14p: result.dataa.beamGirder_pAndRConcrete_abnormalMovement_pctgAff1,
          r14r: result.dataa.beamGirder_pAndRConcrete_abnormalMovement_remarks,
          r14rod: result.dataa.beamGirder_pAndRConcrete_abnormalMovement_rod,
        });

        setData(result.dataa);
      }
    } catch (error) {
      console.log(error);
      // throw new Error(error);
    }
  };

  useEffect(() => {
    getForm();
  }, []);

  return (
    <div
      className="flex flex-col overflow-y-scroll p-20 justify-center items-center"
      // style={{ width: "100%", height: "100%" }}
    >
      <div className="w-full">
        <div className="w-1/2 flex flex-row items-center mb-6 no-print">
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
        <div className="flex flex-row justify-end items-center">
          <p className="font-bold text-[12px]">Page 1 of SPAN: </p>
          {editCheck ? (
            <input
              value={formData.pageOfSpan}
              onChange={(e) => {
                setFormData({ ...formData, pageOfSpan: e.target.value });
              }}
              className="w-[100px] h-[40px] border border-black"
            />
          ) : (
            <span>&nbsp;{formData.pageOfSpan}</span>
          )}
        </div>
      </div>
      <h1 className="font-bold text-center mb-2">
        ROUTINE CONDITION INSPECTION - STRUCTURAL CONDITION CHECKLIST (BRIDGE)
      </h1>
      <div className="w-full flex flex-row items-center mb-2">
        <div className="w-1/5 flex flex-row items-center">
          <p className="font-bold text-[12px]">ROUTE NO.:&nbsp;</p>
          {editCheck ? (
            <input
              value={formData.routeNo}
              onChange={(e) => {
                setFormData({ ...formData, routeNo: e.target.value });
              }}
              className="w-[100px] h-[40px] border border-black"
            />
          ) : (
            <span>&nbsp;{formData.routeNo}</span>
          )}
        </div>
        <div className="w-1/5 flex flex-row items-center">
          <p className="font-bold text-[12px]">STRUCT. NO.:&nbsp;</p>
          {editCheck ? (
            <input
              value={formData.structNo}
              onChange={(e) => {
                setFormData({ ...formData, structNo: e.target.value });
              }}
              className="w-[100px] h-[40px] border border-black"
            />
          ) : (
            <span>&nbsp;{formData.structNo}</span>
          )}
        </div>
        <div className="w-1/5 flex flex-row items-center">
          <p className="font-bold text-[12px]">BRIDGE NAME:&nbsp;</p>
          {editCheck ? (
            <input
              value={formData.bridgeName}
              onChange={(e) => {
                setFormData({ ...formData, bridgeName: e.target.value });
              }}
              className="w-[100px] h-[40px] border border-black"
            />
          ) : (
            <span>&nbsp;{formData.bridgeName}</span>
          )}
        </div>
        <div className="w-1/5 flex flex-row items-center">
          <p className="font-bold text-[12px]">NAME OF INSPECTOR:&nbsp;</p>
          {editCheck ? (
            <input
              value={formData.nameOfInspector}
              onChange={(e) => {
                setFormData({ ...formData, nameOfInspector: e.target.value });
              }}
              className="w-[100px] h-[40px] border border-black"
            />
          ) : (
            <span>&nbsp;{formData.nameOfInspector}</span>
          )}
        </div>
        <div className="w-1/5 flex flex-row items-center">
          <p className="font-bold text-[12px]">DATE:&nbsp;</p>
          {editCheck ? (
            <input
              value={formData.date}
              onChange={(e) => {
                setFormData({ ...formData, date: e.target.value });
              }}
              className="w-[100px] h-[40px] border border-black"
            />
          ) : (
            <span>&nbsp;{formData.date}</span>
          )}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th colSpan={2} className="font-bold text-[10px]">
              BRIDGE MEMBER
            </th>
            <th rowSpan={2} className="font-bold text-[10px]">
              TYPE OF DAMAGES
            </th>
            <th rowSpan={2} className="font-bold text-[10px]">
              CODE
            </th>
            <th colSpan={2} className="font-bold text-[10px]">
              DEFECTS
            </th>
            <th colSpan={4} className="font-bold text-[10px]">
              SEVERITY OF DAMAGE
            </th>
            <th colSpan={2} className="font-bold text-[10px]">
              PERCENTAGE AFFECTED
            </th>
            <th rowSpan={2} className="font-bold text-[10px]">
              REMARKS
            </th>
            <th rowSpan={2} className="font-bold text-[10px]">
              RATING OF DAMAGE
            </th>
            <th rowSpan={2} className="font-bold text-[10px]">
              RATING OF MEMBER
            </th>
          </tr>
          <tr>
            <th className="font-bold text-[10px]">COMPONENT</th>
            <th className="font-bold text-[10px]">MATERIAL</th>
            <th className="font-bold text-[10px]">Yes</th>
            <th className="font-bold text-[10px]">No</th>
            <th className="font-bold text-[10px]">Light</th>
            <th className="font-bold text-[10px]">Medium</th>
            <th className="font-bold text-[10px]">Severe</th>
            <th className="font-bold text-[10px]">V. Severe</th>
            <th className="font-bold text-[10px]">*</th>
            <th className="font-bold text-[10px]">&nbsp;&nbsp;&nbsp;&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {/* START BG */}
          {/* bG row1 */}
          <tr>
            <td rowSpan={15} className="font-bold text-center text-[12px]">
              BEAM/GIRDER (PRIMARY)
            </td>
            <td rowSpan={7} className="font-bold text-center text-[12px]">
              Steel
            </td>
            <td className="font-semibold text-[12px]">Corrosion of Steel</td>
            <td className="font-semibold text-center text-[12px]">1</td>
            <td className="justify-center items-center">
              {c1.r1d && (
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
              {!c1.r1d && (
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
                if (editCheck && c1.r1s == 1) {
                  setC1({ ...c1, r1s: 0, r1d: false });
                } else if (editCheck && c1.r1s != 1) {
                  setC1({ ...c1, r1s: 1, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r1s == 1 && (
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
                if (editCheck && c1.r1s == 2) {
                  setC1({ ...c1, r1s: 0, r1d: false });
                } else if (editCheck && c1.r1s != 2) {
                  setC1({ ...c1, r1s: 2, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r1s == 2 && (
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
                if (editCheck && c1.r1s == 3) {
                  setC1({ ...c1, r1s: 0, r1d: false });
                } else if (editCheck && c1.r1s != 3) {
                  setC1({ ...c1, r1s: 3, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r1s == 3 && (
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
                if (editCheck && c1.r1s == 4) {
                  setC1({ ...c1, r1s: 0, r1d: false });
                } else if (editCheck && c1.r1s != 4) {
                  setC1({ ...c1, r1s: 4, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r1s == 4 && (
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
                      compNo: "1",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c1.r1p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c1.r1p
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
                      compNo: "1",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c1.r1r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c1.r1r
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
                      compNo: "1",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c1.r1rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c1.r1rod
              )}
            </td>
            {/* rom */}
            <td rowSpan={7} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "1",
                      rowNo: "1",
                      mat: "Steel",
                      value: c1.rom1,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c1.rom1
              )}
            </td>
          </tr>
          {/* bG row2 */}
          <tr>
            <td className="font-semibold text-[12px]">Fracture at Steel</td>
            <td className="font-semibold text-center text-[12px]">2</td>
            <td className="justify-center items-center">
              {c1.r2d && (
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
              {!c1.r2d && (
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
                if (editCheck && c1.r2s == 1) {
                  setC1({ ...c1, r2s: 0, r2d: false });
                } else if (editCheck && c1.r2s != 1) {
                  setC1({ ...c1, r2s: 1, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r2s == 1 && (
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
                if (editCheck && c1.r2s == 2) {
                  setC1({ ...c1, r2s: 0, r2d: false });
                } else if (editCheck && c1.r2s != 2) {
                  setC1({ ...c1, r2s: 2, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r2s == 2 && (
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
                if (editCheck && c1.r2s == 3) {
                  setC1({ ...c1, r2s: 0, r2d: false });
                } else if (editCheck && c1.r2s != 3) {
                  setC1({ ...c1, r2s: 3, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r2s == 3 && (
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
                if (editCheck && c1.r2s == 4) {
                  setC1({ ...c1, r2s: 0, r2d: false });
                } else if (editCheck && c1.r2s != 4) {
                  setC1({ ...c1, r2s: 4, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r2s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "2",
                      mat: "Fracture at Steel",
                      value: c1.r2p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r2p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "2",
                      mat: "Fracture at Steel",
                      value: c1.r2r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r2r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "2",
                      mat: "Fracture at Steel",
                      value: c1.r2rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r2rod
              )}{" "}
            </td>
          </tr>
          {/* bG row3 */}
          <tr>
            <td className="font-semibold text-[12px]">Loose Connections</td>
            <td className="font-semibold text-center text-[12px]">3</td>
            <td className="justify-center items-center">
              {c1.r3d && (
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
              {!c1.r3d && (
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
                if (editCheck && c1.r3s == 1) {
                  setC1({ ...c1, r3s: 0, r3d: false });
                } else if (editCheck && c1.r3s != 1) {
                  setC1({ ...c1, r3s: 1, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r3s == 1 && (
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
                if (editCheck && c1.r3s == 2) {
                  setC1({ ...c1, r3s: 0, r3d: false });
                } else if (editCheck && c1.r3s != 2) {
                  setC1({ ...c1, r3s: 2, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r3s == 2 && (
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
                if (editCheck && c1.r3s == 3) {
                  setC1({ ...c1, r3s: 0, r3d: false });
                } else if (editCheck && c1.r3s != 3) {
                  setC1({ ...c1, r3s: 3, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r3s == 3 && (
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
                if (editCheck && c1.r3s == 4) {
                  setC1({ ...c1, r3s: 0, r3d: false });
                } else if (editCheck && c1.r3s != 4) {
                  setC1({ ...c1, r3s: 4, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r3s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td className="text-center text-[12px]">
              {" "}
              {data.beamGirder_steel_looseConnections_pctgAff1}{" "}
            </td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "3",
                      mat: "Loose Connections",
                      value: c1.r3p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r3p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "3",
                      mat: "Loose Connections",
                      value: c1.r3r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r3r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "3",
                      mat: "Loose Connections",
                      value: c1.r3rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r3rod
              )}{" "}
            </td>
          </tr>
          {/* bG row4 */}
          <tr>
            <td className="font-semibold text-[12px]">
              Permanent Deformations
            </td>
            <td className="font-semibold text-center text-[12px]">4</td>
            <td className="justify-center items-center">
              {c1.r4d && (
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
              {!c1.r4d && (
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
                if (editCheck && c1.r4s == 1) {
                  setC1({ ...c1, r4s: 0, r4d: false });
                } else if (editCheck && c1.r4s != 1) {
                  setC1({ ...c1, r4s: 1, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r4s == 1 && (
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
                if (editCheck && c1.r4s == 2) {
                  setC1({ ...c1, r4s: 0, r4d: false });
                } else if (editCheck && c1.r4s != 2) {
                  setC1({ ...c1, r4s: 2, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r4s == 2 && (
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
                if (editCheck && c1.r4s == 3) {
                  setC1({ ...c1, r4s: 0, r4d: false });
                } else if (editCheck && c1.r4s != 3) {
                  setC1({ ...c1, r4s: 3, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r4s == 3 && (
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
                if (editCheck && c1.r4s == 4) {
                  setC1({ ...c1, r4s: 0, r4d: false });
                } else if (editCheck && c1.r4s != 4) {
                  setC1({ ...c1, r4s: 4, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r4s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "4",
                      mat: "Permanent Deformations",
                      value: c1.r4p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r4p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "4",
                      mat: "Permanent Deformations",
                      value: c1.r4r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r4r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "4",
                      mat: "Permanent Deformations",
                      value: c1.r4rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r4rod
              )}{" "}
            </td>
          </tr>
          {/* bG row5 */}
          <tr>
            <td className="font-semibold text-[12px]">Paint Deterioration</td>
            <td className="font-semibold text-center text-[12px]">5</td>
            <td className="justify-center items-center">
              {c1.r5d && (
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
              {!c1.r5d && (
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
                if (editCheck && c1.r5s == 1) {
                  setC1({ ...c1, r5s: 0, r5d: false });
                } else if (editCheck && c1.r5s != 1) {
                  setC1({ ...c1, r5s: 1, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r5s == 1 && (
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
                if (editCheck && c1.r5s == 2) {
                  setC1({ ...c1, r5s: 0, r5d: false });
                } else if (editCheck && c1.r5s != 2) {
                  setC1({ ...c1, r5s: 2, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r5s == 2 && (
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
                if (editCheck && c1.r5s == 3) {
                  setC1({ ...c1, r5s: 0, r5d: false });
                } else if (editCheck && c1.r5s != 3) {
                  setC1({ ...c1, r5s: 3, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r5s == 3 && (
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
                if (editCheck && c1.r5s == 4) {
                  setC1({ ...c1, r5s: 0, r5d: false });
                } else if (editCheck && c1.r5s != 4) {
                  setC1({ ...c1, r5s: 4, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r5s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td className="text-center text-[12px]">
              {" "}
              {data.beamGirder_steel_paintDeterioration_pctgAff1}{" "}
            </td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "5",
                      mat: "Paint Deteriorations",
                      value: c1.r5p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r5p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "5",
                      mat: "Paint Deteriorations",
                      value: c1.r5r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r5r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "5",
                      mat: "Paint Deteriorations",
                      value: c1.r5rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r5rod
              )}{" "}
            </td>
          </tr>
          {/* bG row6 */}
          <tr>
            <td className="font-semibold text-[12px]">
              Abnormal Vibration/Deflection
            </td>
            <td className="font-semibold text-center text-[12px]">13</td>
            <td className="justify-center items-center">
              {c1.r6d && (
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
              {!c1.r6d && (
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
                if (editCheck && c1.r6s == 1) {
                  setC1({ ...c1, r6s: 0, r6d: false });
                } else if (editCheck && c1.r6s != 1) {
                  setC1({ ...c1, r6s: 1, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r6s == 1 && (
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
                if (editCheck && c1.r6s == 2) {
                  setC1({ ...c1, r6s: 0, r6d: false });
                } else if (editCheck && c1.r6s != 2) {
                  setC1({ ...c1, r6s: 2, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r6s == 2 && (
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
                if (editCheck && c1.r6s == 3) {
                  setC1({ ...c1, r6s: 0, r6d: false });
                } else if (editCheck && c1.r6s != 3) {
                  setC1({ ...c1, r6s: 3, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r6s == 3 && (
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
                if (editCheck && c1.r6s == 4) {
                  setC1({ ...c1, r6s: 0, r6d: false });
                } else if (editCheck && c1.r6s != 4) {
                  setC1({ ...c1, r6s: 4, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r6s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "6",
                      mat: "Abnormal Vibration/Deflection",
                      value: c1.r6p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r6p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "6",
                      mat: "Abnormal Vibration/Deflection",
                      value: c1.r6r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r6r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "6",
                      mat: "Abnormal Vibration/Deflection",
                      value: c1.r6rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r6rod
              )}{" "}
            </td>
          </tr>
          {/* bG row7 */}
          <tr>
            <td className="font-semibold text-[12px]">Abnormal Noise</td>
            <td className="font-semibold text-center text-[12px]">31</td>
            <td className="justify-center items-center">
              {c1.r7d && (
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
              {!c1.r7d && (
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
                if (editCheck && c1.r7s == 1) {
                  setC1({ ...c1, r7s: 0, r7d: false });
                } else if (editCheck && c1.r7s != 1) {
                  setC1({ ...c1, r7s: 1, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r7s == 1 && (
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
                if (editCheck && c1.r7s == 2) {
                  setC1({ ...c1, r7s: 0, r7d: false });
                } else if (editCheck && c1.r7s != 2) {
                  setC1({ ...c1, r7s: 2, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r7s == 2 && (
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
                if (editCheck && c1.r7s == 3) {
                  setC1({ ...c1, r7s: 0, r7d: false });
                } else if (editCheck && c1.r7s != 3) {
                  setC1({ ...c1, r7s: 3, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r7s == 3 && (
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
                if (editCheck && c1.r7s == 4) {
                  setC1({ ...c1, r7s: 0, r7d: false });
                } else if (editCheck && c1.r7s != 4) {
                  setC1({ ...c1, r7s: 4, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r7s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "7",
                      mat: "Abnormal Noise",
                      value: c1.r7p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r7p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "7",
                      mat: "Abnormal Noise",
                      value: c1.r7r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r7r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "7",
                      mat: "Abnormal Noise",
                      value: c1.r7rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r7rod
              )}{" "}
            </td>
          </tr>
          {/* bG material 2 */}
          <tr>
            <td rowSpan={8} className="font-bold text-[12px]">
              P. Concrete R. Concrete
            </td>
          </tr>
          {/* bG row8 */}
          <tr>
            <td className="font-semibold text-[12px]">Surface Defect</td>
            <td className="font-semibold text-center text-[12px]">11</td>
            <td className="justify-center items-center">
              {c1.r8d && (
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
              {!c1.r8d && (
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
                if (editCheck && c1.r8s == 1) {
                  setC1({ ...c1, r8s: 0, r8d: false });
                } else if (editCheck && c1.r8s != 1) {
                  setC1({ ...c1, r8s: 1, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r8s == 1 && (
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
                if (editCheck && c1.r8s == 2) {
                  setC1({ ...c1, r8s: 0, r8d: false });
                } else if (editCheck && c1.r8s != 2) {
                  setC1({ ...c1, r8s: 2, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r8s == 2 && (
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
                if (editCheck && c1.r8s == 3) {
                  setC1({ ...c1, r8s: 0, r8d: false });
                } else if (editCheck && c1.r8s != 3) {
                  setC1({ ...c1, r8s: 3, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r8s == 3 && (
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
                if (editCheck && c1.r8s == 4) {
                  setC1({ ...c1, r8s: 0, r8d: false });
                } else if (editCheck && c1.r8s != 4) {
                  setC1({ ...c1, r8s: 4, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r8s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td className="text-center text-[12px]">
              {" "}
              {data.beamGirder_pAndRConcrete_surfaceDefect_pctgAff1}{" "}
            </td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "8",
                      mat: "Surface Defect",
                      value: c1.r8p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r8p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "8",
                      mat: "Surface Defect",
                      value: c1.r8r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r8r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "8",
                      mat: "Surface Defect",
                      value: c1.r8rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r8rod
              )}{" "}
            </td>
            {/* rom */}
            <td rowSpan={7} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "1",
                      rowNo: "2",
                      mat: "P. Concrete and R. Concrete",
                      value: c1.rom2,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c1.rom2
              )}
            </td>
          </tr>
          {/* bG row9 */}
          <tr>
            <td className="font-semibold text-[12px]">Cracks at Concrete</td>
            <td className="font-semibold text-center text-[12px]">6</td>
            <td className="justify-center items-center">
              {c1.r9d && (
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
              {!c1.r9d && (
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
                if (editCheck && c1.r9s == 1) {
                  setC1({ ...c1, r9s: 0, r9d: false });
                } else if (editCheck && c1.r9s != 1) {
                  setC1({ ...c1, r9s: 1, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r9s == 1 && (
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
                if (editCheck && c1.r9s == 2) {
                  setC1({ ...c1, r9s: 0, r9d: false });
                } else if (editCheck && c1.r9s != 2) {
                  setC1({ ...c1, r9s: 2, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r9s == 2 && (
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
                if (editCheck && c1.r9s == 3) {
                  setC1({ ...c1, r9s: 0, r9d: false });
                } else if (editCheck && c1.r9s != 3) {
                  setC1({ ...c1, r9s: 3, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r9s == 3 && (
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
                if (editCheck && c1.r9s == 4) {
                  setC1({ ...c1, r9s: 0, r9d: false });
                } else if (editCheck && c1.r9s != 4) {
                  setC1({ ...c1, r9s: 4, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r9s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "9",
                      mat: "Cracks at Concrete",
                      value: c1.r9p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r9p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "9",
                      mat: "Cracks at Concrete",
                      value: c1.r9r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r9r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "9",
                      mat: "Cracks at Concrete",
                      value: c1.r9rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r9rod
              )}{" "}
            </td>
          </tr>
          {/* bG row10 */}
          <tr>
            <td className="font-semibold text-[12px]">Delamination</td>
            <td className="font-semibold text-center text-[12px]">12</td>
            <td className="justify-center items-center">
              {c1.r10d && (
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
              {!c1.r10d && (
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
                if (editCheck && c1.r10s == 1) {
                  setC1({ ...c1, r10s: 0, r10d: false });
                } else if (editCheck && c1.r10s != 1) {
                  setC1({ ...c1, r10s: 1, r10d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r10s == 1 && (
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
                if (editCheck && c1.r10s == 2) {
                  setC1({ ...c1, r10s: 0, r10d: false });
                } else if (editCheck && c1.r10s != 2) {
                  setC1({ ...c1, r10s: 2, r10d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r10s == 2 && (
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
                if (editCheck && c1.r10s == 3) {
                  setC1({ ...c1, r10s: 0, r10d: false });
                } else if (editCheck && c1.r10s != 3) {
                  setC1({ ...c1, r10s: 3, r10d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r10s == 3 && (
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
                if (editCheck && c1.r10s == 4) {
                  setC1({ ...c1, r10s: 0, r10d: false });
                } else if (editCheck && c1.r10s != 4) {
                  setC1({ ...c1, r10s: 4, r10d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r10s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td className="text-center text-[12px]">
              {" "}
              {data.beamGirder_pAndRConcrete_delamination_pctgAff1}{" "}
            </td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "10",
                      mat: "Delamination",
                      value: c1.r10p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r10p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "10",
                      mat: "Delamination",
                      value: c1.r10r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r10r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "10",
                      mat: "Delamination",
                      value: c1.r10rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r10rod
              )}{" "}
            </td>
          </tr>
          {/* bG row11 */}
          <tr>
            <td className="font-semibold text-[12px]">Spalling</td>
            <td className="font-semibold text-center text-[12px]">7</td>
            <td className="justify-center items-center">
              {c1.r11d && (
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
              {!c1.r11d && (
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
                if (editCheck && c1.r11s == 1) {
                  setC1({ ...c1, r11s: 0, r11d: false });
                } else if (editCheck && c1.r11s != 1) {
                  setC1({ ...c1, r11s: 1, r11d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r11s == 1 && (
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
                if (editCheck && c1.r11s == 2) {
                  setC1({ ...c1, r11s: 0, r11d: false });
                } else if (editCheck && c1.r11s != 2) {
                  setC1({ ...c1, r11s: 2, r11d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r11s == 2 && (
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
                if (editCheck && c1.r11s == 3) {
                  setC1({ ...c1, r11s: 0, r11d: false });
                } else if (editCheck && c1.r11s != 3) {
                  setC1({ ...c1, r11s: 3, r11d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r11s == 3 && (
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
                if (editCheck && c1.r11s == 4) {
                  setC1({ ...c1, r11s: 0, r11d: false });
                } else if (editCheck && c1.r11s != 4) {
                  setC1({ ...c1, r11s: 4, r11d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r11s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td className="text-center text-[12px]">
              {" "}
              {data.beamGirder_pAndRConcrete_spalling_pctgAff1}{" "}
            </td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "11",
                      mat: "Spalling",
                      value: c1.r11p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r11p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "11",
                      mat: "Spalling",
                      value: c1.r11r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r11r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "11",
                      mat: "Spalling",
                      value: c1.r11rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r11rod
              )}{" "}
            </td>
          </tr>
          {/* bG row12 */}
          <tr>
            <td className="font-semibold text-[12px]">
              Corrosion of Reinforcement
            </td>
            <td className="font-semibold text-center text-[12px]">8</td>
            <td className="justify-center items-center">
              {c1.r12d && (
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
              {!c1.r12d && (
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
                if (editCheck && c1.r12s == 1) {
                  setC1({ ...c1, r12s: 0, r12d: false });
                } else if (editCheck && c1.r12s != 1) {
                  setC1({ ...c1, r12s: 1, r12d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r12s == 1 && (
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
                if (editCheck && c1.r12s == 2) {
                  setC1({ ...c1, r12s: 0, r12d: false });
                } else if (editCheck && c1.r12s != 2) {
                  setC1({ ...c1, r12s: 2, r12d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r12s == 2 && (
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
                if (editCheck && c1.r12s == 3) {
                  setC1({ ...c1, r12s: 0, r12d: false });
                } else if (editCheck && c1.r12s != 3) {
                  setC1({ ...c1, r12s: 3, r12d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r12s == 3 && (
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
                if (editCheck && c1.r12s == 4) {
                  setC1({ ...c1, r12s: 0, r12d: false });
                } else if (editCheck && c1.r12s != 4) {
                  setC1({ ...c1, r12s: 4, r12d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r12s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td className="text-center text-[12px]">
              {" "}
              {
                data.beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff1
              }{" "}
            </td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "12",
                      mat: "Corrosion of Reinforcement",
                      value: c1.r12p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r12p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "12",
                      mat: "Corrosion of Reinforcement",
                      value: c1.r12r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r12r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "12",
                      mat: "Corrosion of Reinforcement",
                      value: c1.r12rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r12rod
              )}{" "}
            </td>
          </tr>
          {/* bG row13 */}
          <tr>
            <td className="font-semibold text-[12px]">
              Abnormal Vibration/Deflection
            </td>
            <td className="font-semibold text-center text-[12px]">13</td>
            <td className="justify-center items-center">
              {c1.r13d && (
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
              {!c1.r13d && (
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
                if (editCheck && c1.r13s == 1) {
                  setC1({ ...c1, r13s: 0, r13d: false });
                } else if (editCheck && c1.r13s != 1) {
                  setC1({ ...c1, r13s: 1, r13d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r13s == 1 && (
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
                if (editCheck && c1.r13s == 2) {
                  setC1({ ...c1, r13s: 0, r13d: false });
                } else if (editCheck && c1.r13s != 2) {
                  setC1({ ...c1, r13s: 2, r13d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r13s == 2 && (
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
                if (editCheck && c1.r13s == 3) {
                  setC1({ ...c1, r13s: 0, r13d: false });
                } else if (editCheck && c1.r13s != 3) {
                  setC1({ ...c1, r13s: 3, r13d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r13s == 3 && (
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
                if (editCheck && c1.r13s == 4) {
                  setC1({ ...c1, r13s: 0, r13d: false });
                } else if (editCheck && c1.r13s != 4) {
                  setC1({ ...c1, r13s: 4, r13d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r13s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "13",
                      mat: "Abnormal Vibration/Deflection ",
                      value: c1.r13p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r13p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "13",
                      mat: "Abnormal Vibration/Deflection ",
                      value: c1.r13r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r13r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "13",
                      mat: "Abnormal Vibration/Deflection ",
                      value: c1.r13rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r13rod
              )}{" "}
            </td>
          </tr>
          {/* bG row14 */}
          <tr>
            <td className="font-semibold text-[12px]">Abnormal Movement</td>
            <td className="font-semibold text-center text-[12px]">16</td>
            <td className="justify-center items-center">
              {c1.r14d && (
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
              {!c1.r14d && (
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
                if (editCheck && c1.r14s == 1) {
                  setC1({ ...c1, r14s: 0, r14d: false });
                } else if (editCheck && c1.r14s != 1) {
                  setC1({ ...c1, r14s: 1, r14d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r14s == 1 && (
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
                if (editCheck && c1.r14s == 2) {
                  setC1({ ...c1, r14s: 0, r14d: false });
                } else if (editCheck && c1.r14s != 2) {
                  setC1({ ...c1, r14s: 2, r14d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r14s == 2 && (
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
                if (editCheck && c1.r14s == 3) {
                  setC1({ ...c1, r14s: 0, r14d: false });
                } else if (editCheck && c1.r14s != 3) {
                  setC1({ ...c1, r14s: 3, r14d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r14s == 3 && (
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
                if (editCheck && c1.r14s == 4) {
                  setC1({ ...c1, r14s: 0, r14d: false });
                } else if (editCheck && c1.r14s != 4) {
                  setC1({ ...c1, r14s: 4, r14d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c1.r14s == 4 && (
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
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "1",
                      rowNo: "14",
                      mat: "Abnormal Movement",
                      value: c1.r14p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r14p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "1",
                      rowNo: "14",
                      mat: "Abnormal Movement",
                      value: c1.r14r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r14r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "1",
                      rowNo: "14",
                      mat: "Abnormal Movement",
                      value: c1.r14rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c1.r14rod
              )}{" "}
            </td>
          </tr>
          {/* END BG */}
          {/* START DS */}
          {/* dS row1 */}
          <tr>
            <td rowSpan={15} className="font-bold text-center text-[12px]">
              DECK SLAB (Primary)
            </td>
            <td rowSpan={7} className="font-bold text-center text-[12px]">
              Steel
            </td>
            <td className="font-semibold text-[12px]">Corrosion of Steel</td>
            <td className="font-semibold text-center text-[12px]">1</td>
            <td className="justify-center items-center">
              {c2.r1d && (
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
              {!c2.r1d && (
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
                if (editCheck && c2.r1s == 1) {
                  setC2({ ...c2, r1s: 0, r1d: false });
                } else if (editCheck && c2.r1s != 1) {
                  setC2({ ...c2, r1s: 1, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r1s == 1 && (
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
                if (editCheck && c2.r1s == 2) {
                  setC2({ ...c2, r1s: 0, r1d: false });
                } else if (editCheck && c2.r1s != 2) {
                  setC2({ ...c2, r1s: 2, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r1s == 2 && (
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
                if (editCheck && c2.r1s == 3) {
                  setC2({ ...c2, r1s: 0, r1d: false });
                } else if (editCheck && c2.r1s != 3) {
                  setC2({ ...c2, r1s: 3, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r1s == 3 && (
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
                if (editCheck && c2.r1s == 4) {
                  setC2({ ...c2, r1s: 0, r1d: false });
                } else if (editCheck && c2.r1s != 4) {
                  setC2({ ...c2, r1s: 4, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r1s == 4 && (
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
                      compNo: "2",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c2.r1p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c2.r1p
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
                      compNo: "2",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c2.r1r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c2.r1r
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
                      compNo: "2",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c2.r1rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c2.r1rod
              )}
            </td>
            {/* rom */}
            <td rowSpan={7} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "2",
                      rowNo: "1",
                      mat: "Steel",
                      value: c2.rom1,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c2.rom1
              )}
            </td>
          </tr>
          {/* dS row2 */}
          <tr>
            <td className="font-semibold text-[12px]">Fracture at Steel</td>
            <td className="font-semibold text-center text-[12px]">2</td>
            <td className="justify-center items-center">
              {c2.r2d && (
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
              {!c2.r2d && (
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
                if (editCheck && c2.r2s == 1) {
                  setC2({ ...c2, r2s: 0, r2d: false });
                } else if (editCheck && c2.r2s != 1) {
                  setC2({ ...c2, r2s: 1, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r2s == 1 && (
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
                if (editCheck && c2.r2s == 2) {
                  setC2({ ...c2, r2s: 0, r2d: false });
                } else if (editCheck && c2.r2s != 2) {
                  setC2({ ...c2, r2s: 2, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r2s == 2 && (
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
                if (editCheck && c2.r2s == 3) {
                  setC2({ ...c2, r2s: 0, r2d: false });
                } else if (editCheck && c2.r2s != 3) {
                  setC2({ ...c2, r2s: 3, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r2s == 3 && (
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
                if (editCheck && c2.r2s == 4) {
                  setC2({ ...c2, r2s: 0, r2d: false });
                } else if (editCheck && c2.r2s != 4) {
                  setC2({ ...c2, r2s: 4, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r2s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "2",
                      rowNo: "2",
                      mat: "Fracture at Steel",
                      value: c2.r2p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r2p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "2",
                      rowNo: "2",
                      mat: "Fracture at Steel",
                      value: c2.r2r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r2r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "2",
                      rowNo: "2",
                      mat: "Fracture at Steel",
                      value: c2.r2rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r2rod
              )}{" "}
            </td>
          </tr>
          {/* dS row3 */}
          <tr>
            <td className="font-semibold text-[12px]">Loose Connections</td>
            <td className="font-semibold text-center text-[12px]">3</td>
            <td className="justify-center items-center">
              {c2.r3d && (
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
              {!c2.r3d && (
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
                if (editCheck && c2.r3s == 1) {
                  setC2({ ...c2, r3s: 0, r3d: false });
                } else if (editCheck && c2.r3s != 1) {
                  setC2({ ...c2, r3s: 1, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r3s == 1 && (
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
                if (editCheck && c2.r3s == 2) {
                  setC2({ ...c2, r3s: 0, r3d: false });
                } else if (editCheck && c2.r3s != 2) {
                  setC2({ ...c2, r3s: 2, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r3s == 2 && (
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
                if (editCheck && c2.r3s == 3) {
                  setC2({ ...c2, r3s: 0, r3d: false });
                } else if (editCheck && c2.r3s != 3) {
                  setC2({ ...c2, r3s: 3, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r3s == 3 && (
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
                if (editCheck && c2.r3s == 4) {
                  setC2({ ...c2, r3s: 0, r3d: false });
                } else if (editCheck && c2.r3s != 4) {
                  setC2({ ...c2, r3s: 4, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r3s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td className="text-center text-[12px]">
              {" "}
              {data.beamGirder_steel_looseConnections_pctgAff1}{" "}
            </td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "2",
                      rowNo: "3",
                      mat: "Loose Connections",
                      value: c2.r3p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r3p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "2",
                      rowNo: "3",
                      mat: "Loose Connections",
                      value: c2.r3r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r3r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "2",
                      rowNo: "3",
                      mat: "Loose Connections",
                      value: c2.r3rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r3rod
              )}{" "}
            </td>
          </tr>
          {/* dS row4 */}
          <tr>
            <td className="font-semibold text-[12px]">
              Permanent Deformations
            </td>
            <td className="font-semibold text-center text-[12px]">4</td>
            <td className="justify-center items-center">
              {c2.r4d && (
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
              {!c2.r4d && (
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
                if (editCheck && c2.r4s == 1) {
                  setC2({ ...c2, r4s: 0, r4d: false });
                } else if (editCheck && c2.r4s != 1) {
                  setC2({ ...c2, r4s: 1, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r4s == 1 && (
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
                if (editCheck && c2.r4s == 2) {
                  setC2({ ...c2, r4s: 0, r4d: false });
                } else if (editCheck && c2.r4s != 2) {
                  setC2({ ...c2, r4s: 2, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r4s == 2 && (
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
                if (editCheck && c2.r4s == 3) {
                  setC2({ ...c2, r4s: 0, r4d: false });
                } else if (editCheck && c2.r4s != 3) {
                  setC2({ ...c2, r4s: 3, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r4s == 3 && (
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
                if (editCheck && c2.r4s == 4) {
                  setC2({ ...c2, r4s: 0, r4d: false });
                } else if (editCheck && c2.r4s != 4) {
                  setC2({ ...c2, r4s: 4, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r4s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "2",
                      rowNo: "4",
                      mat: "Permanent Deformations",
                      value: c2.r4p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r4p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "2",
                      rowNo: "4",
                      mat: "Permanent Deformations",
                      value: c2.r4r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r4r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "2",
                      rowNo: "4",
                      mat: "Permanent Deformations",
                      value: c2.r4rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r4rod
              )}{" "}
            </td>
          </tr>
          {/* dS row5 */}
          <tr>
            <td className="font-semibold text-[12px]">Water Leak</td>
            <td className="font-semibold text-center text-[12px]">14</td>
            <td className="justify-center items-center">
              {c2.r5d && (
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
              {!c2.r5d && (
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
                if (editCheck && c2.r5s == 1) {
                  setC2({ ...c2, r5s: 0, r5d: false });
                } else if (editCheck && c2.r5s != 1) {
                  setC2({ ...c2, r5s: 1, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r5s == 1 && (
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
                if (editCheck && c2.r5s == 2) {
                  setC2({ ...c2, r5s: 0, r5d: false });
                } else if (editCheck && c2.r5s != 2) {
                  setC2({ ...c2, r5s: 2, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r5s == 2 && (
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
                if (editCheck && c2.r5s == 3) {
                  setC2({ ...c2, r5s: 0, r5d: false });
                } else if (editCheck && c2.r5s != 3) {
                  setC2({ ...c2, r5s: 3, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r5s == 3 && (
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
                if (editCheck && c2.r5s == 4) {
                  setC2({ ...c2, r5s: 0, r5d: false });
                } else if (editCheck && c2.r5s != 4) {
                  setC2({ ...c2, r5s: 4, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r5s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td className="text-center text-[12px]">
              {" "}
              {data.beamGirder_steel_paintDeterioration_pctgAff1}{" "}
            </td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "2",
                      rowNo: "5",
                      mat: "Water Leak",
                      value: c2.r5p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r5p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "2",
                      rowNo: "5",
                      mat: "Water Leak",
                      value: c2.r5r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r5r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "2",
                      rowNo: "5",
                      mat: "Water Leak",
                      value: c2.r5rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r5rod
              )}{" "}
            </td>
          </tr>
          {/* dS row6 */}
          <tr>
            <td className="font-semibold text-[12px]">Abnormal Movement</td>
            <td className="font-semibold text-center text-[12px]">16</td>
            <td className="justify-center items-center">
              {c2.r6d && (
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
              {!c2.r6d && (
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
                if (editCheck && c2.r6s == 1) {
                  setC2({ ...c2, r6s: 0, r6d: false });
                } else if (editCheck && c2.r6s != 1) {
                  setC2({ ...c2, r6s: 1, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r6s == 1 && (
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
                if (editCheck && c2.r6s == 2) {
                  setC2({ ...c2, r6s: 0, r6d: false });
                } else if (editCheck && c2.r6s != 2) {
                  setC2({ ...c2, r6s: 2, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r6s == 2 && (
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
                if (editCheck && c2.r6s == 3) {
                  setC2({ ...c2, r6s: 0, r6d: false });
                } else if (editCheck && c2.r6s != 3) {
                  setC2({ ...c2, r6s: 3, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r6s == 3 && (
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
                if (editCheck && c2.r6s == 4) {
                  setC2({ ...c2, r6s: 0, r6d: false });
                } else if (editCheck && c2.r6s != 4) {
                  setC2({ ...c2, r6s: 4, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r6s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "2",
                      rowNo: "6",
                      mat: "Abnormal Movement",
                      value: c2.r6p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r6p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "2",
                      rowNo: "6",
                      mat: "Abnormal Movement",
                      value: c2.r6r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r6r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "2",
                      rowNo: "6",
                      mat: "Abnormal Movement",
                      value: c2.r6rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r6rod
              )}{" "}
            </td>
          </tr>
          {/* dS row7 */}
          <tr>
            <td className="font-semibold text-[12px]">Abnormal Noise</td>
            <td className="font-semibold text-center text-[12px]">31</td>
            <td className="justify-center items-center">
              {c2.r7d && (
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
              {!c2.r7d && (
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
                if (editCheck && c2.r7s == 1) {
                  setC2({ ...c2, r7s: 0, r7d: false });
                } else if (editCheck && c2.r7s != 1) {
                  setC2({ ...c2, r7s: 1, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r7s == 1 && (
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
                if (editCheck && c2.r7s == 2) {
                  setC2({ ...c2, r7s: 0, r7d: false });
                } else if (editCheck && c2.r7s != 2) {
                  setC2({ ...c2, r7s: 2, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r7s == 2 && (
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
                if (editCheck && c2.r7s == 3) {
                  setC2({ ...c2, r7s: 0, r7d: false });
                } else if (editCheck && c2.r7s != 3) {
                  setC2({ ...c2, r7s: 3, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r7s == 3 && (
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
                if (editCheck && c2.r7s == 4) {
                  setC2({ ...c2, r7s: 0, r7d: false });
                } else if (editCheck && c2.r7s != 4) {
                  setC2({ ...c2, r7s: 4, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r7s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "2",
                      rowNo: "7",
                      mat: "Abnormal Noise",
                      value: c2.r7p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r7p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "2",
                      rowNo: "7",
                      mat: "Abnormal Noise",
                      value: c2.r7r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r7r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "2",
                      rowNo: "7",
                      mat: "Abnormal Noise",
                      value: c2.r7rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r7rod
              )}{" "}
            </td>
          </tr>
          {/* bG material 2 */}
          <tr>
            <td rowSpan={8} className="font-bold text-[12px]">
              P. Concrete R. Concrete
            </td>
          </tr>
          {/* dS row8 */}
          <tr>
            <td className="font-semibold text-[12px]">Surface Defect</td>
            <td className="font-semibold text-center text-[12px]">11</td>
            <td className="justify-center items-center">
              {c2.r8d && (
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
              {!c2.r8d && (
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
                if (editCheck && c2.r8s == 1) {
                  setC2({ ...c2, r8s: 0, r8d: false });
                } else if (editCheck && c2.r8s != 1) {
                  setC2({ ...c2, r8s: 1, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r8s == 1 && (
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
                if (editCheck && c2.r8s == 2) {
                  setC2({ ...c2, r8s: 0, r8d: false });
                } else if (editCheck && c2.r8s != 2) {
                  setC2({ ...c2, r8s: 2, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r8s == 2 && (
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
                if (editCheck && c2.r8s == 3) {
                  setC2({ ...c2, r8s: 0, r8d: false });
                } else if (editCheck && c2.r8s != 3) {
                  setC2({ ...c2, r8s: 3, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r8s == 3 && (
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
                if (editCheck && c2.r8s == 4) {
                  setC2({ ...c2, r8s: 0, r8d: false });
                } else if (editCheck && c2.r8s != 4) {
                  setC2({ ...c2, r8s: 4, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r8s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td className="text-center text-[12px]">
              {" "}
              {data.beamGirder_pAndRConcrete_surfaceDefect_pctgAff1}{" "}
            </td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "2",
                      rowNo: "8",
                      mat: "Surface Defect",
                      value: c2.r8p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r8p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "2",
                      rowNo: "8",
                      mat: "Surface Defect",
                      value: c2.r8r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r8r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "2",
                      rowNo: "8",
                      mat: "Surface Defect",
                      value: c2.r8rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r8rod
              )}{" "}
            </td>
            {/* rom */}
            <td rowSpan={7} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "2",
                      rowNo: "2",
                      mat: "P. Concrete and R. Concrete",
                      value: c2.rom2,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c2.rom2
              )}
            </td>
          </tr>
          {/* dS row9 */}
          <tr>
            <td className="font-semibold text-[12px]">Cracks at Concrete</td>
            <td className="font-semibold text-center text-[12px]">6</td>
            <td className="justify-center items-center">
              {c2.r9d && (
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
              {!c2.r9d && (
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
                if (editCheck && c2.r9s == 1) {
                  setC2({ ...c2, r9s: 0, r9d: false });
                } else if (editCheck && c2.r9s != 1) {
                  setC2({ ...c2, r9s: 1, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r9s == 1 && (
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
                if (editCheck && c2.r9s == 2) {
                  setC2({ ...c2, r9s: 0, r9d: false });
                } else if (editCheck && c2.r9s != 2) {
                  setC2({ ...c2, r9s: 2, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r9s == 2 && (
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
                if (editCheck && c2.r9s == 3) {
                  setC2({ ...c2, r9s: 0, r9d: false });
                } else if (editCheck && c2.r9s != 3) {
                  setC2({ ...c2, r9s: 3, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r9s == 3 && (
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
                if (editCheck && c2.r9s == 4) {
                  setC2({ ...c2, r9s: 0, r9d: false });
                } else if (editCheck && c2.r9s != 4) {
                  setC2({ ...c2, r9s: 4, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r9s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "2",
                      rowNo: "9",
                      mat: "Cracks at Concrete",
                      value: c2.r9p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r9p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "2",
                      rowNo: "9",
                      mat: "Cracks at Concrete",
                      value: c2.r9r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r9r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "2",
                      rowNo: "9",
                      mat: "Cracks at Concrete",
                      value: c2.r9rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r9rod
              )}{" "}
            </td>
          </tr>
          {/* dS row10 */}
          <tr>
            <td className="font-semibold text-[12px]">Delamination</td>
            <td className="font-semibold text-center text-[12px]">12</td>
            <td className="justify-center items-center">
              {c2.r10d && (
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
              {!c2.r10d && (
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
                if (editCheck && c2.r10s == 1) {
                  setC2({ ...c2, r10s: 0, r10d: false });
                } else if (editCheck && c2.r10s != 1) {
                  setC2({ ...c2, r10s: 1, r10d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r10s == 1 && (
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
                if (editCheck && c2.r10s == 2) {
                  setC2({ ...c2, r10s: 0, r10d: false });
                } else if (editCheck && c2.r10s != 2) {
                  setC2({ ...c2, r10s: 2, r10d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r10s == 2 && (
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
                if (editCheck && c2.r10s == 3) {
                  setC2({ ...c2, r10s: 0, r10d: false });
                } else if (editCheck && c2.r10s != 3) {
                  setC2({ ...c2, r10s: 3, r10d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r10s == 3 && (
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
                if (editCheck && c2.r10s == 4) {
                  setC2({ ...c2, r10s: 0, r10d: false });
                } else if (editCheck && c2.r10s != 4) {
                  setC2({ ...c2, r10s: 4, r10d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r10s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td className="text-center text-[12px]">
              {" "}
              {data.beamGirder_pAndRConcrete_delamination_pctgAff1}{" "}
            </td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "2",
                      rowNo: "10",
                      mat: "Delamination",
                      value: c2.r10p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r10p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "2",
                      rowNo: "10",
                      mat: "Delamination",
                      value: c2.r10r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r10r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "2",
                      rowNo: "10",
                      mat: "Delamination",
                      value: c2.r10rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r10rod
              )}{" "}
            </td>
          </tr>
          {/* dS row11 */}
          <tr>
            <td className="font-semibold text-[12px]">Spalling</td>
            <td className="font-semibold text-center text-[12px]">7</td>
            <td className="justify-center items-center">
              {c2.r11d && (
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
              {!c2.r11d && (
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
                if (editCheck && c2.r11s == 1) {
                  setC2({ ...c2, r11s: 0, r11d: false });
                } else if (editCheck && c2.r11s != 1) {
                  setC2({ ...c2, r11s: 1, r11d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r11s == 1 && (
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
                if (editCheck && c2.r11s == 2) {
                  setC2({ ...c2, r11s: 0, r11d: false });
                } else if (editCheck && c2.r11s != 2) {
                  setC2({ ...c2, r11s: 2, r11d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r11s == 2 && (
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
                if (editCheck && c2.r11s == 3) {
                  setC2({ ...c2, r11s: 0, r11d: false });
                } else if (editCheck && c2.r11s != 3) {
                  setC2({ ...c2, r11s: 3, r11d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r11s == 3 && (
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
                if (editCheck && c2.r11s == 4) {
                  setC2({ ...c2, r11s: 0, r11d: false });
                } else if (editCheck && c2.r11s != 4) {
                  setC2({ ...c2, r11s: 4, r11d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r11s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td className="text-center text-[12px]">
              {" "}
              {data.beamGirder_pAndRConcrete_spalling_pctgAff1}{" "}
            </td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "2",
                      rowNo: "11",
                      mat: "Spalling",
                      value: c2.r11p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r11p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "2",
                      rowNo: "11",
                      mat: "Spalling",
                      value: c2.r11r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r11r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "2",
                      rowNo: "11",
                      mat: "Spalling",
                      value: c2.r11rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r11rod
              )}{" "}
            </td>
          </tr>
          {/* dS row12 */}
          <tr>
            <td className="font-semibold text-[12px]">
              Corrosion of Reinforcement
            </td>
            <td className="font-semibold text-center text-[12px]">8</td>
            <td className="justify-center items-center">
              {c2.r12d && (
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
              {!c2.r12d && (
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
                if (editCheck && c2.r12s == 1) {
                  setC2({ ...c2, r12s: 0, r12d: false });
                } else if (editCheck && c2.r12s != 1) {
                  setC2({ ...c2, r12s: 1, r12d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r12s == 1 && (
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
                if (editCheck && c2.r12s == 2) {
                  setC2({ ...c2, r12s: 0, r12d: false });
                } else if (editCheck && c2.r12s != 2) {
                  setC2({ ...c2, r12s: 2, r12d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r12s == 2 && (
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
                if (editCheck && c2.r12s == 3) {
                  setC2({ ...c2, r12s: 0, r12d: false });
                } else if (editCheck && c2.r12s != 3) {
                  setC2({ ...c2, r12s: 3, r12d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r12s == 3 && (
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
                if (editCheck && c2.r12s == 4) {
                  setC2({ ...c2, r12s: 0, r12d: false });
                } else if (editCheck && c2.r12s != 4) {
                  setC2({ ...c2, r12s: 4, r12d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r12s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td className="text-center text-[12px]">
              {" "}
              {
                data.beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff1
              }{" "}
            </td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "2",
                      rowNo: "12",
                      mat: "Corrosion of Reinforcement",
                      value: c2.r12p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r12p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "2",
                      rowNo: "12",
                      mat: "Corrosion of Reinforcement",
                      value: c2.r12r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r12r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "2",
                      rowNo: "12",
                      mat: "Corrosion of Reinforcement",
                      value: c2.r12rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r12rod
              )}{" "}
            </td>
          </tr>
          {/* dS row13 */}
          <tr>
            <td className="font-semibold text-[12px]">Water Leark/Free Lime</td>
            <td className="font-semibold text-center text-[12px]">14</td>
            <td className="justify-center items-center">
              {c2.r13d && (
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
              {!c2.r13d && (
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
                if (editCheck && c2.r13s == 1) {
                  setC2({ ...c2, r13s: 0, r13d: false });
                } else if (editCheck && c2.r13s != 1) {
                  setC2({ ...c2, r13s: 1, r13d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r13s == 1 && (
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
                if (editCheck && c2.r13s == 2) {
                  setC2({ ...c2, r13s: 0, r13d: false });
                } else if (editCheck && c2.r13s != 2) {
                  setC2({ ...c2, r13s: 2, r13d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r13s == 2 && (
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
                if (editCheck && c2.r13s == 3) {
                  setC2({ ...c2, r13s: 0, r13d: false });
                } else if (editCheck && c2.r13s != 3) {
                  setC2({ ...c2, r13s: 3, r13d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r13s == 3 && (
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
                if (editCheck && c2.r13s == 4) {
                  setC2({ ...c2, r13s: 0, r13d: false });
                } else if (editCheck && c2.r13s != 4) {
                  setC2({ ...c2, r13s: 4, r13d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c2.r13s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
            {/* percentage */}{" "}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "2",
                      rowNo: "13",
                      mat: "Abnormal Vibration/Deflection ",
                      value: c2.r13p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r13p
              )}{" "}
            </td>{" "}
            {/* remarks */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "r",
                      compNo: "2",
                      rowNo: "13",
                      mat: "Abnormal Vibration/Deflection ",
                      value: c2.r13r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r13r
              )}{" "}
            </td>{" "}
            {/* rod */}{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rod",
                      compNo: "2",
                      rowNo: "13",
                      mat: "Abnormal Vibration/Deflection ",
                      value: c2.r13rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c2.r13rod
              )}{" "}
            </td>
          </tr>

          {/* END DS */}
        </tbody>
      </table>

      <EditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className="font-bold text-black mb-2">
          {editorMode.compNo == "1"
            ? "BEAM/GIRDER"
            : editorMode.compNo == "2"
              ? "DECK SLAB"
              : editorMode.compNo == "3"
                ? "ABUTMENT"
                : editorMode.compNo == "4"
                  ? "PIER NO"
                  : editorMode.compNo == "4"
                    ? "BEARING"
                    : editorMode.compNo == "4"
                      ? "PARAPET"
                      : editorMode.compNo == "4"
                        ? "SURFACING"
                        : editorMode.compNo == "4"
                          ? "EXPANSION JOINT"
                          : editorMode.compNo == "4"
                            ? "DRAINPIPES"
                            : editorMode.compNo == "4"
                              ? "SLOPE PROTECTION / RIVER BANK"
                              : editorMode.compNo == "4"
                                ? "HYDRAULIC CAPACITY"
                                : null}
        </p>

        <p className="font-bold text-black mb-2">{editorMode.mat}</p>
        <p className="font-bold text-black mb-2">
          {editorMode.type == "p"
            ? "Percentage"
            : editorMode.type == "r"
              ? "Remarks"
              : editorMode.type == "rod"
                ? "Rating of Damage"
                : editorMode.type == "rom"
                  ? "Rating of Member"
                  : null}
        </p>
        <textarea
          value={editorMode.value}
          onChange={(e) =>
            setEditorMode({ ...editorMode, value: e.target.value })
          }
          className="w-full h-[100px] border border-black"
        />

        <button
          onClick={handleUpdateEditor}
          className="mt-6 w-full py-2 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Update
        </button>
      </EditModal>
    </div>
  );
};

export default page;
