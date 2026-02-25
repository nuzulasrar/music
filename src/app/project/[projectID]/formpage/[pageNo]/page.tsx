"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import Link from "next/link";
import "./styles.css";
import EditModal from "@/components/EditModal";

const page = ({ params }: any) => {
  const { projectID, pageNo } = params;

  const [editCheck, setEditCheck] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editorMode, setEditorMode] = useState({
    type: "", // p || r ||  rod || rom
    compNo: "0",
    rowNo: "0",
    mat: "",
    value: "",
  });

  const [data, setData] = useState<any>([]);

  const [inDB, setInDB] = useState(false);

  const [spanNo, setSpanNo] = useState("");

  const [formData, setFormData] = useState({
    pageOfSpan: "",
    routeNo: "",
    structNo: "",
    bridgeName: "",
    nameOfInspector: "",
    date: "",
  });

  const [allComponentsInspected, setAllComponentsInspected] = useState(false);

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

  const [c3, setC3] = useState<any>({
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

  const [c4, setC4] = useState<any>({
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

  const [c5, setC5] = useState<any>({
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

  const [c6, setC6] = useState<any>({
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

  const [c7, setC7] = useState<any>({
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

  const [c8, setC8] = useState<any>({
    main: false,
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
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
  const [c9, setC9] = useState<any>({
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
  const [c10, setC10] = useState<any>({
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
  const [c11, setC11] = useState<any>({
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

  const handleUpdateEditor = () => {
    // ...editorMode,
    // type: "p",
    // compNo: "1",
    // rowNo: "1",
    // mat: "Corrosion of Steel",
    // value: c1.r1p

    if (editorMode.type === "p") {
      if (editorMode.compNo == "1") {
        if (editorMode.rowNo == "1") {
          setC1({ ...c1, r1p: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC1({ ...c1, r2p: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC1({ ...c1, r3p: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC1({ ...c1, r4p: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC1({ ...c1, r5p: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC1({ ...c1, r6p: editorMode.value });
        } else if (editorMode.rowNo == "7") {
          setC1({ ...c1, r7p: editorMode.value });
        } else if (editorMode.rowNo == "8") {
          setC1({ ...c1, r8p: editorMode.value });
        } else if (editorMode.rowNo == "9") {
          setC1({ ...c1, r9p: editorMode.value });
        } else if (editorMode.rowNo == "10") {
          setC1({ ...c1, r10p: editorMode.value });
        } else if (editorMode.rowNo == "11") {
          setC1({ ...c1, r11p: editorMode.value });
        } else if (editorMode.rowNo == "12") {
          setC1({ ...c1, r12p: editorMode.value });
        } else if (editorMode.rowNo == "13") {
          setC1({ ...c1, r13p: editorMode.value });
        } else if (editorMode.rowNo == "14") {
          setC1({ ...c1, r14p: editorMode.value });
        }
      } else if (editorMode.compNo == "2") {
        if (editorMode.rowNo == "1") {
          setC2({ ...c2, r1p: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC2({ ...c2, r2p: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC2({ ...c2, r3p: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC2({ ...c2, r4p: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC2({ ...c2, r5p: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC2({ ...c2, r6p: editorMode.value });
        } else if (editorMode.rowNo == "7") {
          setC2({ ...c2, r7p: editorMode.value });
        } else if (editorMode.rowNo == "8") {
          setC2({ ...c2, r8p: editorMode.value });
        } else if (editorMode.rowNo == "9") {
          setC2({ ...c2, r9p: editorMode.value });
        } else if (editorMode.rowNo == "10") {
          setC2({ ...c2, r10p: editorMode.value });
        } else if (editorMode.rowNo == "11") {
          setC2({ ...c2, r11p: editorMode.value });
        } else if (editorMode.rowNo == "12") {
          setC2({ ...c2, r12p: editorMode.value });
        } else if (editorMode.rowNo == "13") {
          setC2({ ...c2, r13p: editorMode.value });
        }
      } else if (editorMode.compNo == "3") {
        if (editorMode.rowNo == "1") {
          setC3({ ...c3, r1p: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC3({ ...c3, r2p: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC3({ ...c3, r3p: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC3({ ...c3, r4p: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC3({ ...c3, r5p: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC3({ ...c3, r6p: editorMode.value });
        } else if (editorMode.rowNo == "7") {
          setC3({ ...c3, r7p: editorMode.value });
        } else if (editorMode.rowNo == "8") {
          setC3({ ...c3, r8p: editorMode.value });
        } else if (editorMode.rowNo == "9") {
          setC3({ ...c3, r9p: editorMode.value });
        }
      } else if (editorMode.compNo == "4") {
        if (editorMode.rowNo == "1") {
          setC4({ ...c4, r1p: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC4({ ...c4, r2p: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC4({ ...c4, r3p: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC4({ ...c4, r4p: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC4({ ...c4, r5p: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC4({ ...c4, r6p: editorMode.value });
        } else if (editorMode.rowNo == "7") {
          setC4({ ...c4, r7p: editorMode.value });
        } else if (editorMode.rowNo == "8") {
          setC4({ ...c4, r8p: editorMode.value });
        } else if (editorMode.rowNo == "9") {
          setC4({ ...c4, r9p: editorMode.value });
        }
      } else if (editorMode.compNo == "5") {
        if (editorMode.rowNo == "1") {
          setC5({ ...c5, r1p: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC5({ ...c5, r2p: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC5({ ...c5, r3p: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC5({ ...c5, r4p: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC5({ ...c5, r5p: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC5({ ...c5, r6p: editorMode.value });
        }
      } else if (editorMode.compNo == "6") {
        if (editorMode.rowNo == "1") {
          setC6({ ...c6, r1p: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC6({ ...c6, r2p: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC6({ ...c6, r3p: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC6({ ...c6, r4p: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC6({ ...c6, r5p: editorMode.value });
        }
      } else if (editorMode.compNo == "7") {
        if (editorMode.rowNo == "1") {
          setC7({ ...c7, r1p: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC7({ ...c7, r2p: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC7({ ...c7, r3p: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC7({ ...c7, r4p: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC7({ ...c7, r5p: editorMode.value });
        }
      } else if (editorMode.compNo == "8") {
        if (editorMode.rowNo == "1") {
          setC8({ ...c8, r1p: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC8({ ...c8, r2p: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC8({ ...c8, r3p: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC8({ ...c8, r4p: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC8({ ...c8, r5p: editorMode.value });
        }
      } else if (editorMode.compNo == "9") {
        if (editorMode.rowNo == "1") {
          setC9({ ...c9, r1p: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC9({ ...c9, r2p: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC9({ ...c9, r3p: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC9({ ...c9, r4p: editorMode.value });
        }
      } else if (editorMode.compNo == "10") {
        if (editorMode.rowNo == "1") {
          setC10({ ...c10, r1p: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC10({ ...c10, r2p: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC10({ ...c10, r3p: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC10({ ...c10, r4p: editorMode.value });
        }
      } else if (editorMode.compNo == "11") {
        if (editorMode.rowNo == "1") {
          setC11({ ...c11, r1p: editorMode.value });
        }
      }
    } else if (editorMode.type === "r") {
      if (editorMode.compNo == "1") {
        if (editorMode.rowNo == "1") {
          setC1({ ...c1, r1r: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC1({ ...c1, r2r: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC1({ ...c1, r3r: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC1({ ...c1, r4r: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC1({ ...c1, r5r: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC1({ ...c1, r6r: editorMode.value });
        } else if (editorMode.rowNo == "7") {
          setC1({ ...c1, r7r: editorMode.value });
        } else if (editorMode.rowNo == "8") {
          setC1({ ...c1, r8r: editorMode.value });
        } else if (editorMode.rowNo == "9") {
          setC1({ ...c1, r9r: editorMode.value });
        } else if (editorMode.rowNo == "10") {
          setC1({ ...c1, r10r: editorMode.value });
        } else if (editorMode.rowNo == "11") {
          setC1({ ...c1, r11r: editorMode.value });
        } else if (editorMode.rowNo == "12") {
          setC1({ ...c1, r12r: editorMode.value });
        } else if (editorMode.rowNo == "13") {
          setC1({ ...c1, r13r: editorMode.value });
        } else if (editorMode.rowNo == "14") {
          setC1({ ...c1, r14r: editorMode.value });
        }
      } else if (editorMode.compNo == "2") {
        if (editorMode.rowNo == "1") {
          setC2({ ...c2, r1r: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC2({ ...c2, r2r: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC2({ ...c2, r3r: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC2({ ...c2, r4r: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC2({ ...c2, r5r: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC2({ ...c2, r6r: editorMode.value });
        } else if (editorMode.rowNo == "7") {
          setC2({ ...c2, r7r: editorMode.value });
        } else if (editorMode.rowNo == "8") {
          setC2({ ...c2, r8r: editorMode.value });
        } else if (editorMode.rowNo == "9") {
          setC2({ ...c2, r9r: editorMode.value });
        } else if (editorMode.rowNo == "10") {
          setC2({ ...c2, r10r: editorMode.value });
        } else if (editorMode.rowNo == "11") {
          setC2({ ...c2, r11r: editorMode.value });
        } else if (editorMode.rowNo == "12") {
          setC2({ ...c2, r12r: editorMode.value });
        } else if (editorMode.rowNo == "13") {
          setC2({ ...c2, r13r: editorMode.value });
        }
      } else if (editorMode.compNo == "3") {
        if (editorMode.rowNo == "1") {
          setC3({ ...c3, r1r: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC3({ ...c3, r2r: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC3({ ...c3, r3r: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC3({ ...c3, r4r: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC3({ ...c3, r5r: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC3({ ...c3, r6r: editorMode.value });
        } else if (editorMode.rowNo == "7") {
          setC3({ ...c3, r7r: editorMode.value });
        } else if (editorMode.rowNo == "8") {
          setC3({ ...c3, r8r: editorMode.value });
        } else if (editorMode.rowNo == "9") {
          setC3({ ...c3, r9r: editorMode.value });
        }
      } else if (editorMode.compNo == "4") {
        if (editorMode.rowNo == "1") {
          setC4({ ...c4, r1r: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC4({ ...c4, r2r: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC4({ ...c4, r3r: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC4({ ...c4, r4r: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC4({ ...c4, r5r: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC4({ ...c4, r6r: editorMode.value });
        } else if (editorMode.rowNo == "7") {
          setC4({ ...c4, r7r: editorMode.value });
        } else if (editorMode.rowNo == "8") {
          setC4({ ...c4, r8r: editorMode.value });
        } else if (editorMode.rowNo == "9") {
          setC4({ ...c4, r9r: editorMode.value });
        }
      } else if (editorMode.compNo == "5") {
        if (editorMode.rowNo == "1") {
          setC5({ ...c5, r1r: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC5({ ...c5, r2r: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC5({ ...c5, r3r: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC5({ ...c5, r4r: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC5({ ...c5, r5r: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC5({ ...c5, r6r: editorMode.value });
        }
      } else if (editorMode.compNo == "6") {
        if (editorMode.rowNo == "1") {
          setC6({ ...c6, r1r: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC6({ ...c6, r2r: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC6({ ...c6, r3r: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC6({ ...c6, r4r: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC6({ ...c6, r5r: editorMode.value });
        }
      } else if (editorMode.compNo == "7") {
        if (editorMode.rowNo == "1") {
          setC7({ ...c7, r1r: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC7({ ...c7, r2r: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC7({ ...c7, r3r: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC7({ ...c7, r4r: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC7({ ...c7, r5r: editorMode.value });
        }
      } else if (editorMode.compNo == "8") {
        if (editorMode.rowNo == "1") {
          setC8({ ...c8, r1r: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC8({ ...c8, r2r: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC8({ ...c8, r3r: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC8({ ...c8, r4r: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC8({ ...c8, r5r: editorMode.value });
        }
      } else if (editorMode.compNo == "9") {
        if (editorMode.rowNo == "1") {
          setC9({ ...c9, r1r: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC9({ ...c9, r2r: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC9({ ...c9, r3r: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC9({ ...c9, r4r: editorMode.value });
        }
      } else if (editorMode.compNo == "10") {
        if (editorMode.rowNo == "1") {
          setC10({ ...c10, r1r: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC10({ ...c10, r2r: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC10({ ...c10, r3r: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC10({ ...c10, r4r: editorMode.value });
        }
      } else if (editorMode.compNo == "11") {
        if (editorMode.rowNo == "1") {
          setC11({ ...c11, r1r: editorMode.value });
        }
      }
    } else if (editorMode.type === "rod") {
      if (editorMode.compNo == "1") {
        if (editorMode.rowNo == "1") {
          setC1({ ...c1, r1rod: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC1({ ...c1, r2rod: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC1({ ...c1, r3rod: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC1({ ...c1, r4rod: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC1({ ...c1, r5rod: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC1({ ...c1, r6rod: editorMode.value });
        } else if (editorMode.rowNo == "7") {
          setC1({ ...c1, r7rod: editorMode.value });
        } else if (editorMode.rowNo == "8") {
          setC1({ ...c1, r8rod: editorMode.value });
        } else if (editorMode.rowNo == "9") {
          setC1({ ...c1, r9rod: editorMode.value });
        } else if (editorMode.rowNo == "10") {
          setC1({ ...c1, r10rod: editorMode.value });
        } else if (editorMode.rowNo == "11") {
          setC1({ ...c1, r11rod: editorMode.value });
        } else if (editorMode.rowNo == "12") {
          setC1({ ...c1, r12rod: editorMode.value });
        } else if (editorMode.rowNo == "13") {
          setC1({ ...c1, r13rod: editorMode.value });
        } else if (editorMode.rowNo == "14") {
          setC1({ ...c1, r14rod: editorMode.value });
        }
      } else if (editorMode.compNo == "2") {
        if (editorMode.rowNo == "1") {
          setC2({ ...c2, r1rod: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC2({ ...c2, r2rod: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC2({ ...c2, r3rod: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC2({ ...c2, r4rod: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC2({ ...c2, r5rod: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC2({ ...c2, r6rod: editorMode.value });
        } else if (editorMode.rowNo == "7") {
          setC2({ ...c2, r7rod: editorMode.value });
        } else if (editorMode.rowNo == "8") {
          setC2({ ...c2, r8rod: editorMode.value });
        } else if (editorMode.rowNo == "9") {
          setC2({ ...c2, r9rod: editorMode.value });
        } else if (editorMode.rowNo == "10") {
          setC2({ ...c2, r10rod: editorMode.value });
        } else if (editorMode.rowNo == "11") {
          setC2({ ...c2, r11rod: editorMode.value });
        } else if (editorMode.rowNo == "12") {
          setC2({ ...c2, r12rod: editorMode.value });
        } else if (editorMode.rowNo == "13") {
          setC2({ ...c2, r13rod: editorMode.value });
        }
      } else if (editorMode.compNo == "3") {
        if (editorMode.rowNo == "1") {
          setC3({ ...c3, r1rod: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC3({ ...c3, r2rod: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC3({ ...c3, r3rod: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC3({ ...c3, r4rod: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC3({ ...c3, r5rod: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC3({ ...c3, r6rod: editorMode.value });
        } else if (editorMode.rowNo == "7") {
          setC3({ ...c3, r7rod: editorMode.value });
        } else if (editorMode.rowNo == "8") {
          setC3({ ...c3, r8rod: editorMode.value });
        } else if (editorMode.rowNo == "9") {
          setC3({ ...c3, r9rod: editorMode.value });
        }
      } else if (editorMode.compNo == "4") {
        if (editorMode.rowNo == "1") {
          setC4({ ...c4, r1rod: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC4({ ...c4, r2rod: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC4({ ...c4, r3rod: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC4({ ...c4, r4rod: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC4({ ...c4, r5rod: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC4({ ...c4, r6rod: editorMode.value });
        } else if (editorMode.rowNo == "7") {
          setC4({ ...c4, r7rod: editorMode.value });
        } else if (editorMode.rowNo == "8") {
          setC4({ ...c4, r8rod: editorMode.value });
        } else if (editorMode.rowNo == "9") {
          setC4({ ...c4, r9rod: editorMode.value });
        }
      } else if (editorMode.compNo == "5") {
        if (editorMode.rowNo == "1") {
          setC5({ ...c5, r1rod: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC5({ ...c5, r2rod: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC5({ ...c5, r3rod: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC5({ ...c5, r4rod: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC5({ ...c5, r5rod: editorMode.value });
        } else if (editorMode.rowNo == "6") {
          setC5({ ...c5, r6rod: editorMode.value });
        }
      } else if (editorMode.compNo == "6") {
        if (editorMode.rowNo == "1") {
          setC6({ ...c6, r1rod: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC6({ ...c6, r2rod: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC6({ ...c6, r3rod: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC6({ ...c6, r4rod: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC6({ ...c6, r5rod: editorMode.value });
        }
      } else if (editorMode.compNo == "7") {
        if (editorMode.rowNo == "1") {
          setC7({ ...c7, r1rod: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC7({ ...c7, r2rod: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC7({ ...c7, r3rod: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC7({ ...c7, r4rod: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC7({ ...c7, r5rod: editorMode.value });
        }
      } else if (editorMode.compNo == "8") {
        if (editorMode.rowNo == "1") {
          setC8({ ...c8, r1rod: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC8({ ...c8, r2rod: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC8({ ...c8, r3rod: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC8({ ...c8, r4rod: editorMode.value });
        } else if (editorMode.rowNo == "5") {
          setC8({ ...c8, r5rod: editorMode.value });
        }
      } else if (editorMode.compNo == "9") {
        if (editorMode.rowNo == "1") {
          setC9({ ...c9, r1rod: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC9({ ...c9, r2rod: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC9({ ...c9, r3rod: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC9({ ...c9, r4rod: editorMode.value });
        }
      } else if (editorMode.compNo == "10") {
        if (editorMode.rowNo == "1") {
          setC10({ ...c10, r1rod: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC10({ ...c10, r2rod: editorMode.value });
        } else if (editorMode.rowNo == "3") {
          setC10({ ...c10, r3rod: editorMode.value });
        } else if (editorMode.rowNo == "4") {
          setC10({ ...c10, r4rod: editorMode.value });
        }
      } else if (editorMode.compNo == "11") {
        if (editorMode.rowNo == "1") {
          setC11({ ...c11, r1rod: editorMode.value });
        }
      }
    } else if (editorMode.type === "rom") {
      if (editorMode.compNo == "1") {
        if (editorMode.rowNo == "1") {
          setC1({ ...c1, rom1: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC1({ ...c1, rom2: editorMode.value });
        }
      } else if (editorMode.compNo == "2") {
        if (editorMode.rowNo == "1") {
          setC2({ ...c2, rom1: editorMode.value });
        } else if (editorMode.rowNo == "2") {
          setC2({ ...c2, rom2: editorMode.value });
        }
      } else if (editorMode.compNo == "3") {
        if (editorMode.rowNo == "1") {
          setC3({ ...c3, rom1: editorMode.value });
        }
      } else if (editorMode.compNo == "4") {
        if (editorMode.rowNo == "1") {
          setC4({ ...c4, rom1: editorMode.value });
        }
      } else if (editorMode.compNo == "5") {
        if (editorMode.rowNo == "1") {
          setC5({ ...c5, rom1: editorMode.value });
        }
      } else if (editorMode.compNo == "6") {
        if (editorMode.rowNo == "1") {
          setC6({ ...c6, rom1: editorMode.value });
        }
      } else if (editorMode.compNo == "7") {
        if (editorMode.rowNo == "1") {
          setC7({ ...c7, rom1: editorMode.value });
        }
      } else if (editorMode.compNo == "8") {
        if (editorMode.rowNo == "1") {
          setC8({ ...c8, rom1: editorMode.value });
        }
      } else if (editorMode.compNo == "9") {
        if (editorMode.rowNo == "1") {
          setC9({ ...c9, rom1: editorMode.value });
        }
      } else if (editorMode.compNo == "10") {
        if (editorMode.rowNo == "1") {
          setC10({ ...c10, rom1: editorMode.value });
        }
      } else if (editorMode.compNo == "11") {
        if (editorMode.rowNo == "1") {
          setC11({ ...c11, rom1: editorMode.value });
        }
      }
    }

    setIsModalOpen(false);
  };

  const getForm = async () => {
    try {
      const response = await fetch(`/api/getform/${projectID}/${pageNo}`);

      console.log("responsee: ", JSON.stringify(response));

      const result = await response.json();

      if (response.status == 404) {
        setInDB(false);
      } else if (response.status == 200) {
        setInDB(true);
      }
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

        setC2({
          ...c2,
          main: result.dataa.deckSlab_tick,
          one: result.dataa.deckSlab_steel_tick,
          two: result.dataa.deckSlab_concrete_tick,

          rom1: result.dataa.deckSlab_steel_ratingOfMember,

          r1d: result.dataa.deckSlab_steel_corrosionOfSteel_tick,
          r1s: result.dataa.deckSlab_steel_corrosionOfSteel_severity,
          r1p: result.dataa.deckSlab_steel_corrosionOfSteel_pctgAff2,
          r1r: result.dataa.deckSlab_steel_corrosionOfSteel_remarks,
          r1rod: result.dataa.deckSlab_steel_corrosionOfSteel_rod,

          r2d: result.dataa.deckSlab_steel_fractureAtSteel_tick,
          r2s: result.dataa.deckSlab_steel_fractureAtSteel_severity,
          r2p: result.dataa.deckSlab_steel_fractureAtSteel_pctgAff1,
          r2r: result.dataa.deckSlab_steel_fractureAtSteel_remarks,
          r2rod: result.dataa.deckSlab_steel_fractureAtSteel_rod,

          r3d: result.dataa.deckSlab_steel_looseConnections_tick,
          r3s: result.dataa.deckSlab_steel_looseConnections_severity,
          r3p: result.dataa.deckSlab_steel_looseConnections_pctgAff2,
          r3r: result.dataa.deckSlab_steel_looseConnections_remarks,
          r3rod: result.dataa.deckSlab_steel_looseConnections_rod,

          r4d: result.dataa.deckSlab_steel_perManentDeformations_tick,
          r4s: result.dataa.deckSlab_steel_perManentDeformations_severity,
          r4p: result.dataa.deckSlab_steel_perManentDeformations_pctgAff1,
          r4r: result.dataa.deckSlab_steel_perManentDeformations_remarks,
          r4rod: result.dataa.deckSlab_steel_perManentDeformations_rod,

          r5d: result.dataa.deckSlab_steel_waterLeak_tick,
          r5s: result.dataa.deckSlab_steel_waterLeak_severity,
          r5p: result.dataa.deckSlab_steel_waterLeak_pctgAff2,
          r5r: result.dataa.deckSlab_steel_waterLeak_remarks,
          r5rod: result.dataa.deckSlab_steel_waterLeak_rod,

          r6d: result.dataa.deckSlab_steel_abnormalMovement_tick,
          r6s: result.dataa.deckSlab_steel_abnormalMovement_severity,
          r6p: result.dataa.deckSlab_steel_abnormalMovement_pctgAff1,
          r6r: result.dataa.deckSlab_steel_abnormalMovement_remarks,
          r6rod: result.dataa.deckSlab_steel_abnormalMovement_rod,

          r7d: result.dataa.deckSlab_steel_abnormalNoise_tick,
          r7s: result.dataa.deckSlab_steel_abnormalNoise_severity,
          r7p: result.dataa.deckSlab_steel_abnormalNoise_pctgAff1,
          r7r: result.dataa.deckSlab_steel_abnormalNoise_remarks,
          r7rod: result.dataa.deckSlab_steel_abnormalNoise_rod,

          r8d: result.dataa.deckSlab_concrete_surfaceDefect_tick,
          r8s: result.dataa.deckSlab_concrete_surfaceDefect_severity,
          r8p: result.dataa.deckSlab_concrete_abnormalNoise_pctgAff2,
          r8r: result.dataa.deckSlab_concrete_surfaceDefect_remarks,
          r8rod: result.dataa.deckSlab_concrete_surfaceDefect_rod,

          r9d: result.dataa.deckSlab_concrete_cracksAtConcrete_tick,
          r9s: result.dataa.deckSlab_concrete_cracksAtConcrete_severity,
          r9p: result.dataa.deckSlab_concrete_cracksAtConcrete_pctgAff1,
          r9r: result.dataa.deckSlab_concrete_cracksAtConcrete_remarks,
          r9rod: result.dataa.deckSlab_concrete_cracksAtConcrete_rod,

          r10d: result.dataa.deckSlab_concrete_delamination_tick,
          r10s: result.dataa.deckSlab_concrete_delamination_severity,
          r10p: result.dataa.deckSlab_concrete_delamination_pctgAff2,
          r10r: result.dataa.deckSlab_concrete_delamination_remarks,
          r10rod: result.dataa.deckSlab_concrete_delamination_rod,

          r11d: result.dataa.deckSlab_concrete_spalling_tick,
          r11s: result.dataa.deckSlab_concrete_spalling_severity,
          r11p: result.dataa.deckSlab_concrete_spalling_pctgAff2,
          r11r: result.dataa.deckSlab_concrete_spalling_remarks,
          r11rod: result.dataa.deckSlab_concrete_spalling_rod,

          r12d: result.dataa.deckSlab_concrete_corrosionOfReinforcement_tick,
          r12s: result.dataa
            .deckSlab_concrete_corrosionOfReinforcement_severity,
          r12p: result.dataa
            .deckSlab_concrete_corrosionOfReinforcement_pctgAff2,
          r12r: result.dataa.deckSlab_concrete_corrosionOfReinforcement_remarks,
          r12rod: result.dataa.deckSlab_concrete_corrosionOfReinforcement_rod,

          r13d: result.dataa.deckSlab_concrete_waterLeakOrFreeLime_tick,
          r13s: result.dataa.deckSlab_concrete_waterLeakOrFreeLime_severity,
          r13p: result.dataa.deckSlab_concrete_waterLeakOrFreeLime_pctgAff2,
          r13r: result.dataa.deckSlab_concrete_waterLeakOrFreeLime_remarks,
          r13rod: result.dataa.deckSlab_concrete_waterLeakOrFreeLime_rod,
        });

        setC3({
          ...c3,
          main: result.dataa.abutment_tick,
          one: result.dataa.abutment_concrete_tick,
          two: result.dataa.abutment_masonry_tick,

          rom1: result.dataa.abutment_concreteAndMasonry_ratingOfMember,

          r1d: result.dataa.abutment_concreteAndMasonry_surfaceDefect_tick,
          r1s: result.dataa.abutment_concreteAndMasonry_surfaceDefect_severity,
          r1p: result.dataa.abutment_concreteAndMasonry_surfaceDefect_pctgAff2,
          r1r: result.dataa.abutment_concreteAndMasonry_surfaceDefect_remarks,
          r1rod: result.dataa.abutment_concreteAndMasonry_surfaceDefect_rod,

          r2d: result.dataa.abutment_concreteAndMasonry_cracksAtConcrete_tick,
          r2s: result.dataa
            .abutment_concreteAndMasonry_cracksAtConcrete_severity,
          r2p: result.dataa
            .abutment_concreteAndMasonry_cracksAtConcrete_pctgAff1,
          r2r: result.dataa
            .abutment_concreteAndMasonry_cracksAtConcrete_remarks,
          r2rod: result.dataa.abutment_concreteAndMasonry_cracksAtConcrete_rod,

          r3d: result.dataa.abutment_concreteAndMasonry_delamination_tick,
          r3s: result.dataa.abutment_concreteAndMasonry_delamination_severity,
          r3p: result.dataa.abutment_concreteAndMasonry_delamination_pctgAff2,
          r3r: result.dataa.abutment_concreteAndMasonry_delamination_remarks,
          r3rod: result.dataa.abutment_concreteAndMasonry_delamination_rod,

          r4d: result.dataa.abutment_concreteAndMasonry_spalling_tick,
          r4s: result.dataa.abutment_concreteAndMasonry_spalling_severity,
          r4p: result.dataa.abutment_concreteAndMasonry_spalling_pctgAff2,
          r4r: result.dataa.abutment_concreteAndMasonry_spalling_remarks,
          r4rod: result.dataa.abutment_concreteAndMasonry_spalling_rod,

          r5d: result.dataa
            .abutment_concreteAndMasonry_corrosionOfReinforcement_tick,
          r5s: result.dataa
            .abutment_concreteAndMasonry_corrosionOfReinforcement_severity,
          r5p: result.dataa
            .abutment_concreteAndMasonry_corrosionOfReinforcement_pctgAff2,
          r5r: result.dataa
            .abutment_concreteAndMasonry_corrosionOfReinforcement_remarks,
          r5rod:
            result.dataa
              .abutment_concreteAndMasonry_corrosionOfReinforcement_rod,

          r6d: result.dataa.abutment_concreteAndMasonry_wearOrAbrasion_tick,
          r6s: result.dataa.abutment_concreteAndMasonry_wearOrAbrasion_severity,
          r6p: result.dataa.abutment_concreteAndMasonry_wearOrAbrasion_pctgAff2,
          r6r: result.dataa.abutment_concreteAndMasonry_wearOrAbrasion_remarks,
          r6rod: result.dataa.abutment_concreteAndMasonry_wearOrAbrasion_rod,

          r7d: result.dataa
            .abutment_concreteAndMasonry_materialDeterioration_tick,
          r7s: result.dataa
            .abutment_concreteAndMasonry_materialDeterioration_severity,
          r7p: result.dataa
            .abutment_concreteAndMasonry_materialDeterioration_pctgAff2,
          r7r: result.dataa
            .abutment_concreteAndMasonry_materialDeterioration_remarks,
          r7rod:
            result.dataa.abutment_concreteAndMasonry_materialDeterioration_rod,

          r8d: result.dataa.abutment_concreteAndMasonry_tiltOrSettlement_tick,
          r8s: result.dataa
            .abutment_concreteAndMasonry_tiltOrSettlement_severity,
          r8p: result.dataa
            .abutment_concreteAndMasonry_tiltOrSettlement_pctgAff1,
          r8r: result.dataa
            .abutment_concreteAndMasonry_tiltOrSettlement_remarks,
          r8rod: result.dataa.abutment_concreteAndMasonry_tiltOrSettlement_rod,

          r9d: result.dataa.abutment_concreteAndMasonry_scouring_tick,
          r9s: result.dataa.abutment_concreteAndMasonry_scouring_severity,
          r9p: result.dataa.abutment_concreteAndMasonry_scouring_pctgAff1,
          r9r: result.dataa.abutment_concreteAndMasonry_scouring_remarks,
          r9rod: result.dataa.abutment_concreteAndMasonry_scouring_rod,
        });

        setC4({
          ...c4,
          main: result.dataa.pierNo__tick,
          one: result.dataa.pierNo_concrete_tick,
          two: result.dataa.pierNo_masonry_tick,

          rom1: result.dataa.pierNo_concreteAndMasonry_ratingOfMember,

          r1d: result.dataa.pierNo_concreteAndMasonry_surfaceDefect_tick,
          r1s: result.dataa.pierNo_concreteAndMasonry_surfaceDefect_severity,
          r1p: result.dataa.pierNo_concreteAndMasonry_surfaceDefect_pctgAff2,
          r1r: result.dataa.pierNo_concreteAndMasonry_surfaceDefect_remarks,
          r1rod: result.dataa.pierNo_concreteAndMasonry_surfaceDefect_rod,

          r2d: result.dataa.pierNo_concreteAndMasonry_cracksAtConcrete_tick,
          r2s: result.dataa.pierNo_concreteAndMasonry_cracksAtConcrete_severity,
          r2p: result.dataa.pierNo_concreteAndMasonry_cracksAtConcrete_pctgAff1,
          r2r: result.dataa.pierNo_concreteAndMasonry_cracksAtConcrete_remarks,
          r2rod: result.dataa.pierNo_concreteAndMasonry_cracksAtConcrete_rod,

          r3d: result.dataa.pierNo_concreteAndMasonry_delamination_tick,
          r3s: result.dataa.pierNo_concreteAndMasonry_delamination_severity,
          r3p: result.dataa.pierNo_concreteAndMasonry_delamination_pctgAff2,
          r3r: result.dataa.pierNo_concreteAndMasonry_delamination_remarks,
          r3rod: result.dataa.pierNo_concreteAndMasonry_delamination_rod,

          r4d: result.dataa.pierNo_concreteAndMasonry_spalling_tick,
          r4s: result.dataa.pierNo_concreteAndMasonry_spalling_severity,
          r4p: result.dataa.pierNo_concreteAndMasonry_spalling_pctgAff2,
          r4r: result.dataa.pierNo_concreteAndMasonry_spalling_remarks,
          r4rod: result.dataa.pierNo_concreteAndMasonry_spalling_rod,

          r5d: result.dataa
            .pierNo_concreteAndMasonry_corrosionOfReinforcement_tick,
          r5s: result.dataa
            .pierNo_concreteAndMasonry_corrosionOfReinforcement_severity,
          r5p: result.dataa
            .pierNo_concreteAndMasonry_corrosionOfReinforcement_pctgAff2,
          r5r: result.dataa
            .pierNo_concreteAndMasonry_corrosionOfReinforcement_remarks,
          r5rod:
            result.dataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_rod,

          r6d: result.dataa.pierNo_concreteAndMasonry_wearOrAbrasion_tick,
          r6s: result.dataa.pierNo_concreteAndMasonry_wearOrAbrasion_severity,
          r6p: result.dataa.pierNo_concreteAndMasonry_wearOrAbrasion_pctgAff2,
          r6r: result.dataa.pierNo_concreteAndMasonry_wearOrAbrasion_remarks,
          r6rod: result.dataa.pierNo_concreteAndMasonry_wearOrAbrasion_rod,

          r7d: result.dataa
            .pierNo_concreteAndMasonry_materialDeterioration_tick,
          r7s: result.dataa
            .pierNo_concreteAndMasonry_materialDeterioration_severity,
          r7p: result.dataa
            .pierNo_concreteAndMasonry_materialDeterioration_pctgAff2,
          r7r: result.dataa
            .pierNo_concreteAndMasonry_materialDeterioration_remarks,
          r7rod:
            result.dataa.pierNo_concreteAndMasonry_materialDeterioration_rod,

          r8d: result.dataa.pierNo_concreteAndMasonry_tiltOrSettlement_tick,
          r8s: result.dataa.pierNo_concreteAndMasonry_tiltOrSettlement_severity,
          r8p: result.dataa.pierNo_concreteAndMasonry_tiltOrSettlement_pctgAff1,
          r8r: result.dataa.pierNo_concreteAndMasonry_tiltOrSettlement_remarks,
          r8rod: result.dataa.pierNo_concreteAndMasonry_tiltOrSettlement_rod,

          r9d: result.dataa.pierNo_concreteAndMasonry_scouring_tick,
          r9s: result.dataa.pierNo_concreteAndMasonry_scouring_severity,
          r9p: result.dataa.pierNo_concreteAndMasonry_scouring_pctgAff1,
          r9r: result.dataa.pierNo_concreteAndMasonry_scouring_remarks,
          r9rod: result.dataa.pierNo_concreteAndMasonry_scouring_rod,
        });

        setC5({
          ...c5,
          main: result.dataa2.bearing_tick,
          one: result.dataa2.bearing_steel_tick,
          two: result.dataa2.bearing_rubber_tick,
          three: result.dataa2.bearing_others_tick,

          rom1: result.dataa2.bearing_steelAndRubberAndOthers_ratingOfMember,

          r1d: result.dataa2
            .bearing_steelAndRubberAndOthers_corrosionOfSteel_tick,
          r1s: result.dataa2
            .bearing_steelAndRubberAndOthers_corrosionOfSteel_severity,
          r1p: result.dataa2
            .bearing_steelAndRubberAndOthers_corrosionOfSteel_pctgAff2,
          r1r: result.dataa2
            .bearing_steelAndRubberAndOthers_corrosionOfSteel_remarks,
          r1rod:
            result.dataa2.bearing_steelAndRubberAndOthers_corrosionOfSteel_rod,

          r2d: result.dataa2
            .bearing_steelAndRubberAndOthers_looseConnections_tick,
          r2s: result.dataa2
            .bearing_steelAndRubberAndOthers_looseConnections_severity,
          r2p: result.dataa2
            .bearing_steelAndRubberAndOthers_looseConnections_pctgAff2,
          r2r: result.dataa2
            .bearing_steelAndRubberAndOthers_looseConnections_remarks,
          r2rod:
            result.dataa2.bearing_steelAndRubberAndOthers_looseConnections_rod,

          r3d: result.dataa2.bearing_steelAndRubberAndOthers_pendingWater_tick,
          r3s: result.dataa2
            .bearing_steelAndRubberAndOthers_pendingWater_severity,
          r3p: result.dataa2
            .bearing_steelAndRubberAndOthers_pendingWater_pctgAff1,
          r3r: result.dataa2
            .bearing_steelAndRubberAndOthers_pendingWater_remarks,
          r3rod: result.dataa2.bearing_steelAndRubberAndOthers_pendingWater_rod,

          r4d: result.dataa2
            .bearing_steelAndRubberAndOthers_debrisOrVegetation_tick,
          r4s: result.dataa2
            .bearing_steelAndRubberAndOthers_debrisOrVegetation_severity,
          r4p: result.dataa2
            .bearing_steelAndRubberAndOthers_debrisOrVegetation_pctgAff1,
          r4r: result.dataa2
            .bearing_steelAndRubberAndOthers_debrisOrVegetation_remarks,
          r4rod:
            result.dataa2
              .bearing_steelAndRubberAndOthers_debrisOrVegetation_rod,

          r5d: result.dataa2
            .bearing_steelAndRubberAndOthers_abnormalBulging_tick,
          r5s: result.dataa2
            .bearing_steelAndRubberAndOthers_abnormalBulging_severity,
          r5p: result.dataa2
            .bearing_steelAndRubberAndOthers_abnormalBulging_pctgAff1,
          r5r: result.dataa2
            .bearing_steelAndRubberAndOthers_abnormalBulging_remarks,
          r5rod:
            result.dataa2.bearing_steelAndRubberAndOthers_abnormalBulging_rod,

          r6d: result.dataa2
            .bearing_steelAndRubberAndOthers_abnormalDisplacement_tick,
          r6s: result.dataa2
            .bearing_steelAndRubberAndOthers_abnormalDisplacement_severity,
          r6p: result.dataa2
            .bearing_steelAndRubberAndOthers_abnormalDisplacement_pctgAff2,
          r6r: result.dataa2
            .bearing_steelAndRubberAndOthers_abnormalDisplacement_remarks,
          r6rod:
            result.dataa2
              .bearing_steelAndRubberAndOthers_abnormalDisplacement_rod,
        });

        setC6({
          ...c6,
          main: result.dataa2.parapet_tick,
          one: result.dataa2.parapet_steel_tick,
          two: result.dataa2.parapet_concrete_tick,
          three: result.dataa2.parapet_others_tick,

          rom1: result.dataa2.parapet_steelAndConcreteAndOthers_ratingOfMember,

          r1d: result.dataa2
            .parapet_steelAndConcreteAndOthers_corrosionOfSteel_tick,
          r1s: result.dataa2
            .parapet_steelAndConcreteAndOthers_corrosionOfSteel_severity,
          r1p: result.dataa2
            .parapet_steelAndConcreteAndOthers_corrosionOfSteel_pctgAff2,
          r1r: result.dataa2
            .parapet_steelAndConcreteAndOthers_corrosionOfSteel_remarks,
          r1rod:
            result.dataa2
              .parapet_steelAndConcreteAndOthers_corrosionOfSteel_rod,

          r2d: result.dataa2
            .parapet_steelAndConcreteAndOthers_cracksAtConcrete_tick,
          r2s: result.dataa2
            .parapet_steelAndConcreteAndOthers_cracksAtConcrete_severity,
          r2p: result.dataa2
            .parapet_steelAndConcreteAndOthers_cracksAtConcrete_pctgAff1,
          r2r: result.dataa2
            .parapet_steelAndConcreteAndOthers_cracksAtConcrete_remarks,
          r2rod:
            result.dataa2
              .parapet_steelAndConcreteAndOthers_cracksAtConcrete_rod,

          r3d: result.dataa2.parapet_steelAndConcreteAndOthers_spalling_tick,
          r3s: result.dataa2
            .parapet_steelAndConcreteAndOthers_spalling_severity,
          r3p: result.dataa2
            .parapet_steelAndConcreteAndOthers_spalling_pctgAff2,
          r3r: result.dataa2.parapet_steelAndConcreteAndOthers_spalling_remarks,
          r3rod: result.dataa2.parapet_steelAndConcreteAndOthers_spalling_rod,

          r4d: result.dataa2
            .parapet_steelAndConcreteAndOthers_impactDamage_tick,
          r4s: result.dataa2
            .parapet_steelAndConcreteAndOthers_impactDamage_severity,
          r4p: result.dataa2
            .parapet_steelAndConcreteAndOthers_impactDamage_pctgAff2,
          r4r: result.dataa2
            .parapet_steelAndConcreteAndOthers_impactDamage_remarks,
          r4rod:
            result.dataa2.parapet_steelAndConcreteAndOthers_impactDamage_rod,

          r5d: result.dataa2
            .parapet_steelAndConcreteAndOthers_looseConnections_tick,
          r5s: result.dataa2
            .parapet_steelAndConcreteAndOthers_looseConnections_severity,
          r5p: result.dataa2
            .parapet_steelAndConcreteAndOthers_looseConnections_pctgAff2,
          r5r: result.dataa2
            .parapet_steelAndConcreteAndOthers_looseConnections_remarks,
          r5rod:
            result.dataa2
              .parapet_steelAndConcreteAndOthers_looseConnections_rod,
        });

        setC7({
          ...c7,
          main: result.dataa2.surfacing__tick,
          one: result.dataa2.surfacing_asphalt_tick,
          two: result.dataa2.surfacing_concrete_tick,

          rom1: result.dataa2.surfacing_asphaltAndConcrete_ratingOfMember,

          r1d: result.dataa2.surfacing_asphaltAndConcrete_potHoles_tick,
          r1s: result.dataa2.surfacing_asphaltAndConcrete_potHoles_severity,
          r1p: result.dataa2.surfacing_asphaltAndConcrete_potHoles_pctgAff2,
          r1r: result.dataa2.surfacing_asphaltAndConcrete_potHoles_remarks,
          r1rod: result.dataa2.surfacing_asphaltAndConcrete_potHoles_rod,

          r2d: result.dataa2
            .surfacing_asphaltAndConcrete_wheelTrackRutting_tick,
          r2s: result.dataa2
            .surfacing_asphaltAndConcrete_wheelTrackRutting_severity,
          r2p: result.dataa2
            .surfacing_asphaltAndConcrete_wheelTrackRutting_pctgAff2,
          r2r: result.dataa2
            .surfacing_asphaltAndConcrete_wheelTrackRutting_remarks,
          r2rod:
            result.dataa2.surfacing_asphaltAndConcrete_wheelTrackRutting_rod,

          r3d: result.dataa2
            .surfacing_asphaltAndConcrete_lostOfBondAndDelamination_tick,
          r3s: result.dataa2
            .surfacing_asphaltAndConcrete_lostOfBondAndDelamination_severity,
          r3p: result.dataa2
            .surfacing_asphaltAndConcrete_lostOfBondAndDelamination_pctgAff2,
          r3r: result.dataa2
            .surfacing_asphaltAndConcrete_lostOfBondAndDelamination_remarks,
          r3rod:
            result.dataa2
              .surfacing_asphaltAndConcrete_lostOfBondAndDelamination_rod,

          r4d: result.dataa2.surfacing_asphaltAndConcrete_rippling_tick,
          r4s: result.dataa2.surfacing_asphaltAndConcrete_rippling_severity,
          r4p: result.dataa2.surfacing_asphaltAndConcrete_rippling_pctgAff1,
          r4r: result.dataa2.surfacing_asphaltAndConcrete_rippling_remarks,
          r4rod: result.dataa2.surfacing_asphaltAndConcrete_rippling_rod,

          r5d: result.dataa2.surfacing_asphaltAndConcrete_pavementCrack_tick,
          r5s: result.dataa2
            .surfacing_asphaltAndConcrete_pavementCrack_severity,
          r5p: result.dataa2
            .surfacing_asphaltAndConcrete_pavementCrack_pctgAff1,
          r5r: result.dataa2.surfacing_asphaltAndConcrete_pavementCrack_remarks,
          r5rod: result.dataa2.surfacing_asphaltAndConcrete_pavementCrack_rod,
        });

        setC8({
          ...c8,
          main: result.dataa2.expansionJoint__tick,
          one: result.dataa2.expansionJoint_aspPlug_tick,
          two: result.dataa2.expansionJoint_elastomeric_tick,
          three: result.dataa2.expansionJoint_compSeal_tick,
          four: result.dataa2.expansionJoint_buried_tick,
          five: result.dataa2.expansionJoint_others_tick,

          rom1: result.dataa2.expansionJoint_all_ratingOfMember,

          r1d: result.dataa2.expansionJoint_all_abnormalSpacing_tick,
          r1s: result.dataa2.expansionJoint_all_abnormalSpacing_severity,
          r1p: result.dataa2.expansionJoint_all_abnormalSpacing_pctgAff1,
          r1r: result.dataa2.expansionJoint_all_abnormalSpacing_remarks,
          r1rod: result.dataa2.expansionJoint_all_abnormalSpacing_rod,

          r2d: result.dataa2.expansionJoint_all_differenceInLevel_tick,
          r2s: result.dataa2.expansionJoint_all_differenceInLevel_severity,
          r2p: result.dataa2.expansionJoint_all_differenceInLevel_pctgAff2,
          r2r: result.dataa2.expansionJoint_all_differenceInLevel_remarks,
          r2rod: result.dataa2.expansionJoint_all_differenceInLevel_rod,

          r3d: result.dataa2.expansionJoint_all_waterLeak_tick,
          r3s: result.dataa2.expansionJoint_all_waterLeak_severity,
          r3p: result.dataa2.expansionJoint_all_waterLeak_pctgAff2,
          r3r: result.dataa2.expansionJoint_all_waterLeak_remarks,
          r3rod: result.dataa2.expansionJoint_all_waterLeak_rod,

          r4d: result.dataa2.expansionJoint_all_crackingAtExpJoint_tick,
          r4s: result.dataa2.expansionJoint_all_crackingAtExpJoint_severity,
          r4p: result.dataa2.expansionJoint_all_crackingAtExpJoint_pctgAff2,
          r4r: result.dataa2.expansionJoint_all_crackingAtExpJoint_remarks,
          r4rod: result.dataa2.expansionJoint_all_crackingAtExpJoint_rod,

          r5d: result.dataa2.expansionJoint_all_rupture_tick,
          r5s: result.dataa2.expansionJoint_all_rupture_severity,
          r5p: result.dataa2.expansionJoint_all_rupture_pctgAff2,
          r5r: result.dataa2.expansionJoint_all_rupture_remarks,
          r5rod: result.dataa2.expansionJoint_all_rupture_rod,
        });

        setC9({
          ...c9,
          main: result.dataa2.drainPipe_tick,
          one: result.dataa2.drainPipe_steel_tick,
          two: result.dataa2.drainPipe_pvc_tick,

          rom1: result.dataa2.drainPipe_all_ratingOfMember,

          r1d: result.dataa2.drainPipe_steelPVC_corrosionOfSteel_tick,
          r1s: result.dataa2.drainPipe_steelPVC_corrosionOfSteel_severity,
          r1p: result.dataa2.drainPipe_steelPVC_corrosionOfSteel_pctgAff2,
          r1r: result.dataa2.drainPipe_steelPVC_corrosionOfSteel_remarks,
          r1rod: result.dataa2.drainPipe_steelPVC_corrosionOfSteel_rod,

          r2d: result.dataa2.drainPipe_steelPVC_blockedDrainage_tick,
          r2s: result.dataa2.drainPipe_steelPVC_blockedDrainage_severity,
          r2p: result.dataa2.drainPipe_steelPVC_blockedDrainage_pctgAff2,
          r2r: result.dataa2.drainPipe_steelPVC_blockedDrainage_remarks,
          r2rod: result.dataa2.drainPipe_steelPVC_blockedDrainage_rod,

          r3d: result.dataa2.drainPipe_steelPVC_waterLeak_tick,
          r3s: result.dataa2.drainPipe_steelPVC_waterLeak_severity,
          r3p: result.dataa2.drainPipe_steelPVC_waterLeak_pctgAff2,
          r3r: result.dataa2.drainPipe_steelPVC_waterLeak_remarks,
          r3rod: result.dataa2.drainPipe_steelPVC_waterLeak_rod,

          r4d: result.dataa2.drainPipe_steelPVC_inadequatePipeLength_tick,
          r4s: result.dataa2.drainPipe_steelPVC_inadequatePipeLength_severity,
          r4p: result.dataa2.drainPipe_steelPVC_inadequatePipeLength_pctgAff2,
          r4r: result.dataa2.drainPipe_steelPVC_inadequatePipeLength_remarks,
          r4rod: result.dataa2.drainPipe_steelPVC_inadequatePipeLength_rod,
        });

        setC10({
          ...c10,
          main: result.dataa2.slopeProtection_tick,
          one: result.dataa2.slopeProtection_rblePitching_tick,
          two: result.dataa2.slopeProtection_gablons_tick,
          three: result.dataa2.slopeProtection_others_tick,

          rom1: result.dataa2.slopeProtection_all_ratingOfMember,

          r1d: result.dataa2.slopeProtection_all_scouring_tick,
          r1s: result.dataa2.slopeProtection_all_scouring_severity,
          r1p: result.dataa2.slopeProtection_all_scouring_pctgAff1,
          r1r: result.dataa2.slopeProtection_all_scouring_remarks,
          r1rod: result.dataa2.slopeProtection_all_scouring_rod,

          r2d: result.dataa2.slopeProtection_all_erosion_tick,
          r2s: result.dataa2.slopeProtection_all_erosion_severity,
          r2p: result.dataa2.slopeProtection_all_erosion_pctgAff2,
          r2r: result.dataa2.slopeProtection_all_erosion_remarks,
          r2rod: result.dataa2.slopeProtection_all_erosion_rod,

          r3d: result.dataa2.slopeProtection_all_materialLoss_tick,
          r3s: result.dataa2.slopeProtection_all_materialLoss_severity,
          r3p: result.dataa2.slopeProtection_all_materialLoss_pctgAff2,
          r3r: result.dataa2.slopeProtection_all_materialLoss_remarks,
          r3rod: result.dataa2.slopeProtection_all_materialLoss_rod,

          r4d: result.dataa2.slopeProtection_all_blank_tick,
          r4s: result.dataa2.slopeProtection_all_blank_severity,
          r4p: result.dataa2.slopeProtection_all_blank_pctgAff2,
          r4r: result.dataa2.slopeProtection_all_blank_remarks,
          r4rod: result.dataa2.slopeProtection_all_blank_rod,
        });

        setC11({
          ...c11,
          rom1: result.dataa2
            .hydraulicCapacity_inadequateOpening_ratingOfMember,

          r1d: result.dataa2.hydraulicCapacity_inadequateOpening_tick,
          r1s: result.dataa2.hydraulicCapacity_inadequateOpening_severity,
          r1p: result.dataa2.hydraulicCapacity_inadequateOpening_pctgAff1,
          r1r: result.dataa2.hydraulicCapacity_inadequateOpening_remarks,
          r1rod: result.dataa2.hydraulicCapacity_inadequateOpening_rod,
        });
        setAllComponentsInspected(result.dataa2.allComponentsInspected);

        setData({ ...data, ...result.dataa, ...result.dataa2 });
      }
    } catch (error) {
      console.log(error);
      // throw new Error(error);
    }
  };

  const handleUpdateForm = async () => {
    //balik
    // pageOfSpan: header.pageOfSpan,
    // routeNo: header.routeNo,
    // structNo: header.structNo,
    // bridgeName: header.bridgeName,
    // nameOfInspector: header.nameOfInspector,
    // date: header.date,
    // projectBridgeId: Number(projectID),
    // projectbridgees: {
    //     create: Number(projectID),
    //      connectOrCreate: ProjectBridgeCreateOrConnectWithoutBridgeformoneInput,
    //      connect: ProjectBridgeWhereUniqueInput
    //    }
    const formdataa = {
      page: Number(pageNo),
      projectBridgeId: Number(projectID),
      pageOfSpan: formData.pageOfSpan,
      routeNo: formData.routeNo,
      structNo: formData.structNo,
      bridgeName: formData.bridgeName,
      nameOfInspector: formData.nameOfInspector,
      date: formData.date,

      beamGirder_tick: c1.main,
      beamGirder_steel_tick: c1.one,
      beamGirder_steel_ratingOfMember: c1.rom1,
      beamGirder_steel_corrosionOfSteel_tick: c1.r1d,
      beamGirder_steel_corrosionOfSteel_severity: c1.r1s,
      beamGirder_steel_corrosionOfSteel_pctgAff1: "A",
      beamGirder_steel_corrosionOfSteel_pctgAff2: c1.r1p,
      beamGirder_steel_corrosionOfSteel_remarks: c1.r1r,
      beamGirder_steel_corrosionOfSteel_rod: c1.r1rod,
      beamGirder_steel_fractureAtSteel_tick: c1.r2d,
      beamGirder_steel_fractureAtSteel_severity: c1.r2s,
      beamGirder_steel_fractureAtSteel_pctgAff1: c1.r2p,
      beamGirder_steel_fractureAtSteel_remarks: c1.r2r,
      beamGirder_steel_fractureAtSteel_rod: c1.r2rod,
      beamGirder_steel_looseConnections_tick: c1.r3d,
      beamGirder_steel_looseConnections_severity: c1.r3s,
      beamGirder_steel_looseConnections_pctgAff1: "N",
      beamGirder_steel_looseConnections_pctgAff2: c1.r3p,
      beamGirder_steel_looseConnections_remarks: c1.r3r,
      beamGirder_steel_looseConnections_rod: c1.r3rod,
      beamGirder_steel_perManentDeformations_tick: c1.r4d,
      beamGirder_steel_perManentDeformations_severity: c1.r4s,
      beamGirder_steel_perManentDeformations_pctgAff1: c1.r4p,
      beamGirder_steel_perManentDeformations_remarks: c1.r4r,
      beamGirder_steel_perManentDeformations_rod: c1.r4rod,
      beamGirder_steel_paintDeterioration_tick: c1.r5d,
      beamGirder_steel_paintDeterioration_severity: c1.r5s,
      beamGirder_steel_paintDeterioration_pctgAff1: "A",
      beamGirder_steel_paintDeterioration_pctgAff2: c1.r5p,
      beamGirder_steel_paintDeterioration_remarks: c1.r5r,
      beamGirder_steel_paintDeterioration_rod: c1.r5rod,
      beamGirder_steel_abnormalVibration_tick: c1.r6d,
      beamGirder_steel_abnormalVibration_severity: c1.r6s,
      beamGirder_steel_abnormalVibration_pctgAff1: c1.r6p,
      beamGirder_steel_abnormalVibration_remarks: c1.r6r,
      beamGirder_steel_abnormalVibration_rod: c1.r6rod,
      beamGirder_steel_abnormalNoise_tick: c1.r7d,
      beamGirder_steel_abnormalNoise_severity: c1.r7s,
      beamGirder_steel_abnormalNoise_pctgAff1: c1.r7p,
      beamGirder_steel_abnormalNoise_remarks: c1.r7r,
      beamGirder_steel_abnormalNoise_rod: c1.r7rod,
      beamGirder_pConcrete_tick: c1.two,
      beamGirder_rConcrete_tick: c1.three,
      beamGirder_pAndRConcrete_ratingOfMember: c1.rom2,
      beamGirder_pAndRConcrete_surfaceDefect_tick: c1.r8d,
      beamGirder_pAndRConcrete_surfaceDefect_severity: c1.r8s,
      beamGirder_pAndRConcrete_surfaceDefect_pctgAff1: "A",
      beamGirder_pAndRConcrete_surfaceDefect_pctgAff2: c1.r8p,
      beamGirder_pAndRConcrete_surfaceDefect_remarks: c1.r8r,
      beamGirder_pAndRConcrete_surfaceDefect_rod: c1.r8rod,
      beamGirder_pAndRConcrete_cracksAtConcrete_tick: c1.r9d,
      beamGirder_pAndRConcrete_cracksAtConcrete_severity: c1.r9s,
      beamGirder_pAndRConcrete_cracksAtConcrete_pctgAff1: c1.r9p,
      beamGirder_pAndRConcrete_cracksAtConcrete_remarks: c1.r9r,
      beamGirder_pAndRConcrete_cracksAtConcrete_rod: c1.r9rod,
      beamGirder_pAndRConcrete_delamination_tick: c1.r10d,
      beamGirder_pAndRConcrete_delamination_severity: c1.r10s,
      beamGirder_pAndRConcrete_delamination_pctgAff1: "A",
      beamGirder_pAndRConcrete_delamination_pctgAff2: c1.r10p,
      beamGirder_pAndRConcrete_delamination_remarks: c1.r10r,
      beamGirder_pAndRConcrete_delamination_rod: c1.r10rod,
      beamGirder_pAndRConcrete_spalling_tick: c1.r11d,
      beamGirder_pAndRConcrete_spalling_severity: c1.r11s,
      beamGirder_pAndRConcrete_spalling_pctgAff1: "A",
      beamGirder_pAndRConcrete_spalling_pctgAff2: c1.r11p,
      beamGirder_pAndRConcrete_spalling_remarks: c1.r11r,
      beamGirder_pAndRConcrete_spalling_rod: c1.r11rod,
      beamGirder_pAndRConcrete_corrossionOfReinforcement_tick: c1.r12d,
      beamGirder_pAndRConcrete_corrossionOfReinforcement_severity: c1.r12s,
      beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff1: "L",
      beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff2: c1.r12p,
      beamGirder_pAndRConcrete_corrossionOfReinforcement_remarks: c1.r12r,
      beamGirder_pAndRConcrete_corrossionOfReinforcement_rod: c1.r12rod,
      beamGirder_pAndRConcrete_abnormalVibration_tick: c1.r13d,
      beamGirder_pAndRConcrete_abnormalVibration_severity: c1.r13s,
      beamGirder_pAndRConcrete_abnormalVibration_pctgAff1: c1.r13p,
      beamGirder_pAndRConcrete_abnormalVibration_remarks: c1.r13r,
      beamGirder_pAndRConcrete_abnormalVibration_rod: c1.r13rod,
      beamGirder_pAndRConcrete_abnormalMovement_tick: c1.r14d,
      beamGirder_pAndRConcrete_abnormalMovement_severity: c1.r14s,
      beamGirder_pAndRConcrete_abnormalMovement_pctgAff1: c1.r14p,
      beamGirder_pAndRConcrete_abnormalMovement_remarks: c1.r14r,
      beamGirder_pAndRConcrete_abnormalMovement_rod: c1.r14rod,

      deckSlab_tick: c2.main,
      deckSlab_steel_tick: c2.one,
      deckSlab_steel_ratingOfMember: c2.rom1,
      deckSlab_steel_corrosionOfSteel_tick: c2.r1d,
      deckSlab_steel_corrosionOfSteel_severity: c2.r1s,
      deckSlab_steel_corrosionOfSteel_pctgAff1: "A",
      deckSlab_steel_corrosionOfSteel_pctgAff2: c2.r1p,
      deckSlab_steel_corrosionOfSteel_remarks: c2.r1r,
      deckSlab_steel_corrosionOfSteel_rod: c2.r1rod,
      deckSlab_steel_fractureAtSteel_tick: c2.r2d,
      deckSlab_steel_fractureAtSteel_severity: c2.r2s,
      deckSlab_steel_fractureAtSteel_pctgAff1: c2.r2p,
      deckSlab_steel_fractureAtSteel_remarks: c2.r2r,
      deckSlab_steel_fractureAtSteel_rod: c2.r2rod,
      deckSlab_steel_looseConnections_tick: c2.r3d,
      deckSlab_steel_looseConnections_severity: c2.r3s,
      deckSlab_steel_looseConnections_pctgAff1: "N",
      deckSlab_steel_looseConnections_pctgAff2: c2.r3p,
      deckSlab_steel_looseConnections_remarks: c2.r3r,
      deckSlab_steel_looseConnections_rod: c2.r3rod,
      deckSlab_steel_perManentDeformations_tick: c2.r4d,
      deckSlab_steel_perManentDeformations_severity: c2.r4s,
      deckSlab_steel_perManentDeformations_pctgAff1: c2.r4p,
      deckSlab_steel_perManentDeformations_remarks: c2.r4r,
      deckSlab_steel_perManentDeformations_rod: c2.r4rod,
      deckSlab_steel_waterLeak_tick: c2.r5d,
      deckSlab_steel_waterLeak_severity: c2.r5s,
      deckSlab_steel_waterLeak_pctgAff1: "A",
      deckSlab_steel_waterLeak_pctgAff2: c2.r5p,
      deckSlab_steel_waterLeak_remarks: c2.r5r,
      deckSlab_steel_waterLeak_rod: c2.r5rod,
      deckSlab_steel_abnormalMovement_tick: c2.r6d,
      deckSlab_steel_abnormalMovement_severity: c2.r6s,
      deckSlab_steel_abnormalMovement_pctgAff1: c2.r6p,
      deckSlab_steel_abnormalMovement_remarks: c2.r6r,
      deckSlab_steel_abnormalMovement_rod: c2.r6rod,
      deckSlab_steel_abnormalNoise_tick: c2.r7d,
      deckSlab_steel_abnormalNoise_severity: c2.r7s,
      deckSlab_steel_abnormalNoise_pctgAff1: c2.r7p,
      deckSlab_steel_abnormalNoise_remarks: c2.r7r,
      deckSlab_steel_abnormalNoise_rod: c2.r7rod,
      deckSlab_concrete_tick: c2.two,
      deckSlab_concrete_surfaceDefect_tick: c2.r8d,
      deckSlab_concrete_surfaceDefect_severity: c2.r8s,
      deckSlab_concrete_surfaceDefect_pctgAff1: "A",
      deckSlab_concrete_abnormalNoise_pctgAff2: c2.r8p,
      deckSlab_concrete_surfaceDefect_remarks: c2.r8r,
      deckSlab_concrete_surfaceDefect_rod: c2.r8rod,
      deckSlab_concrete_cracksAtConcrete_tick: c2.r9d,
      deckSlab_concrete_cracksAtConcrete_severity: c2.r9s,
      deckSlab_concrete_cracksAtConcrete_pctgAff1: c2.r9p,
      deckSlab_concrete_cracksAtConcrete_remarks: c2.r9r,
      deckSlab_concrete_cracksAtConcrete_rod: c2.r9rod,
      deckSlab_concrete_delamination_tick: c2.r10d,
      deckSlab_concrete_delamination_severity: c2.r10s,
      deckSlab_concrete_delamination_pctgAff1: "A",
      deckSlab_concrete_delamination_pctgAff2: c2.r10p,
      deckSlab_concrete_delamination_remarks: c2.r10r,
      deckSlab_concrete_delamination_rod: c2.r10rod,
      deckSlab_concrete_spalling_tick: c2.r11d,
      deckSlab_concrete_spalling_severity: c2.r11s,
      deckSlab_concrete_spalling_pctgAff1: "A",
      deckSlab_concrete_spalling_pctgAff2: c2.r11p,
      deckSlab_concrete_spalling_remarks: c2.r11r,
      deckSlab_concrete_spalling_rod: c2.r11rod,
      deckSlab_concrete_corrosionOfReinforcement_tick: c2.r12d,
      deckSlab_concrete_corrosionOfReinforcement_severity: c2.r12s,
      deckSlab_concrete_corrosionOfReinforcement_pctgAff1: "L",
      deckSlab_concrete_corrosionOfReinforcement_pctgAff2: c2.r12p,
      deckSlab_concrete_corrosionOfReinforcement_remarks: c2.r12r,
      deckSlab_concrete_corrosionOfReinforcement_rod: c2.r12rod,
      deckSlab_concrete_waterLeakOrFreeLime_tick: c2.r13d,
      deckSlab_concrete_waterLeakOrFreeLime_severity: c2.r13s,
      deckSlab_concrete_waterLeakOrFreeLime_pctgAff1: "A",
      deckSlab_concrete_waterLeakOrFreeLime_pctgAff2: c2.r13p,
      deckSlab_concrete_waterLeakOrFreeLime_remarks: c2.r13r,
      deckSlab_concrete_waterLeakOrFreeLime_rod: c2.r13rod,

      abutment_tick: c3.main,
      abutment_concrete_tick: c3.one,
      abutment_masonry_tick: c3.two,
      abutment_concreteAndMasonry_ratingOfMember: c3.rom1,
      abutment_concreteAndMasonry_surfaceDefect_tick: c3.r1d,
      abutment_concreteAndMasonry_surfaceDefect_severity: c3.r1s,
      abutment_concreteAndMasonry_surfaceDefect_pctgAff1: "A",
      abutment_concreteAndMasonry_surfaceDefect_pctgAff2: c3.r1p,
      abutment_concreteAndMasonry_surfaceDefect_remarks: c3.r1r,
      abutment_concreteAndMasonry_surfaceDefect_rod: c3.r1rod,
      abutment_concreteAndMasonry_cracksAtConcrete_tick: c3.r2d,
      abutment_concreteAndMasonry_cracksAtConcrete_severity: c3.r2s,
      abutment_concreteAndMasonry_cracksAtConcrete_pctgAff1: c3.r2p,
      abutment_concreteAndMasonry_cracksAtConcrete_remarks: c3.r2r,
      abutment_concreteAndMasonry_cracksAtConcrete_rod: c3.r2rod,
      abutment_concreteAndMasonry_delamination_tick: c3.r3d,
      abutment_concreteAndMasonry_delamination_severity: c3.r3s,
      abutment_concreteAndMasonry_delamination_pctgAff1: "A",
      abutment_concreteAndMasonry_delamination_pctgAff2: c3.r3p,
      abutment_concreteAndMasonry_delamination_remarks: c3.r3r,
      abutment_concreteAndMasonry_delamination_rod: c3.r3rod,
      abutment_concreteAndMasonry_spalling_tick: c3.r4d,
      abutment_concreteAndMasonry_spalling_severity: c3.r4s,
      abutment_concreteAndMasonry_spalling_pctgAff1: "A",
      abutment_concreteAndMasonry_spalling_pctgAff2: c3.r4p,
      abutment_concreteAndMasonry_spalling_remarks: c3.r4r,
      abutment_concreteAndMasonry_spalling_rod: c3.r4rod,
      abutment_concreteAndMasonry_corrosionOfReinforcement_tick: c3.r5d,
      abutment_concreteAndMasonry_corrosionOfReinforcement_severity: c3.r5s,
      abutment_concreteAndMasonry_corrosionOfReinforcement_pctgAff1: "L",
      abutment_concreteAndMasonry_corrosionOfReinforcement_pctgAff2: c3.r5p,
      abutment_concreteAndMasonry_corrosionOfReinforcement_remarks: c3.r5r,
      abutment_concreteAndMasonry_corrosionOfReinforcement_rod: c3.r5rod,
      abutment_concreteAndMasonry_wearOrAbrasion_tick: c3.r6d,
      abutment_concreteAndMasonry_wearOrAbrasion_severity: c3.r6s,
      abutment_concreteAndMasonry_wearOrAbrasion_pctgAff1: "A",
      abutment_concreteAndMasonry_wearOrAbrasion_pctgAff2: c3.r6p,
      abutment_concreteAndMasonry_wearOrAbrasion_remarks: c3.r6r,
      abutment_concreteAndMasonry_wearOrAbrasion_rod: c3.r6rod,
      abutment_concreteAndMasonry_materialDeterioration_tick: c3.r7d,
      abutment_concreteAndMasonry_materialDeterioration_severity: c3.r7s,
      abutment_concreteAndMasonry_materialDeterioration_pctgAff1: "A",
      abutment_concreteAndMasonry_materialDeterioration_pctgAff2: c3.r7p,
      abutment_concreteAndMasonry_materialDeterioration_remarks: c3.r7r,
      abutment_concreteAndMasonry_materialDeterioration_rod: c3.r7rod,
      abutment_concreteAndMasonry_tiltOrSettlement_tick: c3.r8d,
      abutment_concreteAndMasonry_tiltOrSettlement_severity: c3.r8s,
      abutment_concreteAndMasonry_tiltOrSettlement_pctgAff1: c3.r8p,
      abutment_concreteAndMasonry_tiltOrSettlement_remarks: c3.r8r,
      abutment_concreteAndMasonry_tiltOrSettlement_rod: c3.r8rod,
      abutment_concreteAndMasonry_scouring_tick: c3.r9d,
      abutment_concreteAndMasonry_scouring_severity: c3.r9s,
      abutment_concreteAndMasonry_scouring_pctgAff1: c3.r9p,
      abutment_concreteAndMasonry_scouring_remarks: c3.r9r,
      abutment_concreteAndMasonry_scouring_rod: c3.r9rod,

      pierNo__tick: c4.main,
      pierNo_number: "",
      pierNo_concrete_tick: c4.one,
      pierNo_masonry_tick: c4.two,
      pierNo_concreteAndMasonry_ratingOfMember: c4.rom1,
      pierNo_concreteAndMasonry_surfaceDefect_tick: c4.r1d,
      pierNo_concreteAndMasonry_surfaceDefect_severity: c4.r1s,
      pierNo_concreteAndMasonry_surfaceDefect_pctgAff1: "A",
      pierNo_concreteAndMasonry_surfaceDefect_pctgAff2: c4.r1p,
      pierNo_concreteAndMasonry_surfaceDefect_remarks: c4.r1r,
      pierNo_concreteAndMasonry_surfaceDefect_rod: c4.r1rod,
      pierNo_concreteAndMasonry_cracksAtConcrete_tick: c4.r2d,
      pierNo_concreteAndMasonry_cracksAtConcrete_severity: c4.r2s,
      pierNo_concreteAndMasonry_cracksAtConcrete_pctgAff1: c4.r2p,
      pierNo_concreteAndMasonry_cracksAtConcrete_remarks: c4.r2r,
      pierNo_concreteAndMasonry_cracksAtConcrete_rod: c4.r2rod,
      pierNo_concreteAndMasonry_delamination_tick: c4.r3d,
      pierNo_concreteAndMasonry_delamination_severity: c4.r3s,
      pierNo_concreteAndMasonry_delamination_pctgAff1: "A",
      pierNo_concreteAndMasonry_delamination_pctgAff2: c4.r3p,
      pierNo_concreteAndMasonry_delamination_remarks: c4.r3r,
      pierNo_concreteAndMasonry_delamination_rod: c4.r3rod,
      pierNo_concreteAndMasonry_spalling_tick: c4.r4d,
      pierNo_concreteAndMasonry_spalling_severity: c4.r4s,
      pierNo_concreteAndMasonry_spalling_pctgAff1: "A",
      pierNo_concreteAndMasonry_spalling_pctgAff2: c4.r4p,
      pierNo_concreteAndMasonry_spalling_remarks: c4.r4r,
      pierNo_concreteAndMasonry_spalling_rod: c4.r4rod,
      pierNo_concreteAndMasonry_corrosionOfReinforcement_tick: c4.r5d,
      pierNo_concreteAndMasonry_corrosionOfReinforcement_severity: c4.r5s,
      pierNo_concreteAndMasonry_corrosionOfReinforcement_pctgAff1: "L",
      pierNo_concreteAndMasonry_corrosionOfReinforcement_pctgAff2: c4.r5p,
      pierNo_concreteAndMasonry_corrosionOfReinforcement_remarks: c4.r5r,
      pierNo_concreteAndMasonry_corrosionOfReinforcement_rod: c4.r5rod,
      pierNo_concreteAndMasonry_wearOrAbrasion_tick: c4.r6d,
      pierNo_concreteAndMasonry_wearOrAbrasion_severity: c4.r6s,
      pierNo_concreteAndMasonry_wearOrAbrasion_pctgAff1: "A",
      pierNo_concreteAndMasonry_wearOrAbrasion_pctgAff2: c4.r6p,
      pierNo_concreteAndMasonry_wearOrAbrasion_remarks: c4.r6r,
      pierNo_concreteAndMasonry_wearOrAbrasion_rod: c4.r6rod,
      pierNo_concreteAndMasonry_materialDeterioration_tick: c4.r7d,
      pierNo_concreteAndMasonry_materialDeterioration_severity: c4.r7s,
      pierNo_concreteAndMasonry_materialDeterioration_pctgAff1: "A",
      pierNo_concreteAndMasonry_materialDeterioration_pctgAff2: c4.r7p,
      pierNo_concreteAndMasonry_materialDeterioration_remarks: c4.r7r,
      pierNo_concreteAndMasonry_materialDeterioration_rod: c4.r7rod,
      pierNo_concreteAndMasonry_tiltOrSettlement_tick: c4.r8d,
      pierNo_concreteAndMasonry_tiltOrSettlement_severity: c4.r8s,
      pierNo_concreteAndMasonry_tiltOrSettlement_pctgAff1: c4.r8p,
      pierNo_concreteAndMasonry_tiltOrSettlement_remarks: c4.r8r,
      pierNo_concreteAndMasonry_tiltOrSettlement_rod: c4.r8rod,
      pierNo_concreteAndMasonry_scouring_tick: c4.r9d,
      pierNo_concreteAndMasonry_scouring_severity: c4.r9s,
      pierNo_concreteAndMasonry_scouring_pctgAff1: c4.r9p,
      pierNo_concreteAndMasonry_scouring_remarks: c4.r9r,
      pierNo_concreteAndMasonry_scouring_rod: c4.r9rod,
      bearing_tick: c5.main,
      bearing_steel_tick: c5.one,
      bearing_rubber_tick: c5.two,
      bearing_others_tick: c5.three,
      bearing_steelAndRubberAndOthers_ratingOfMember: c5.rom1,
      bearing_steelAndRubberAndOthers_corrosionOfSteel_tick: c5.r1d,
      bearing_steelAndRubberAndOthers_corrosionOfSteel_severity: c5.r1s,
      bearing_steelAndRubberAndOthers_corrosionOfSteel_pctgAff1: "A",
      bearing_steelAndRubberAndOthers_corrosionOfSteel_pctgAff2: c5.r1p,
      bearing_steelAndRubberAndOthers_corrosionOfSteel_remarks: c5.r1r,
      bearing_steelAndRubberAndOthers_corrosionOfSteel_rod: c5.r1rod,
      bearing_steelAndRubberAndOthers_looseConnections_tick: c5.r2d,
      bearing_steelAndRubberAndOthers_looseConnections_severity: c5.r2s,
      bearing_steelAndRubberAndOthers_looseConnections_pctgAff1: "N",
      bearing_steelAndRubberAndOthers_looseConnections_pctgAff2: c5.r2p,
      bearing_steelAndRubberAndOthers_looseConnections_remarks: c5.r2r,
      bearing_steelAndRubberAndOthers_looseConnections_rod: c5.r2rod,
      bearing_steelAndRubberAndOthers_pendingWater_tick: c5.r3d,
      bearing_steelAndRubberAndOthers_pendingWater_severity: c5.r3s,
      bearing_steelAndRubberAndOthers_pendingWater_pctgAff1: c5.r3p,
      bearing_steelAndRubberAndOthers_pendingWater_remarks: c5.r3r,
      bearing_steelAndRubberAndOthers_pendingWater_rod: c5.r3rod,
      bearing_steelAndRubberAndOthers_debrisOrVegetation_tick: c5.r4d,
      bearing_steelAndRubberAndOthers_debrisOrVegetation_severity: c5.r4s,
      bearing_steelAndRubberAndOthers_debrisOrVegetation_pctgAff1: c5.r4p,
      bearing_steelAndRubberAndOthers_debrisOrVegetation_remarks: c5.r4r,
      bearing_steelAndRubberAndOthers_debrisOrVegetation_rod: c5.r4rod,
      bearing_steelAndRubberAndOthers_abnormalBulging_tick: c5.r5d,
      bearing_steelAndRubberAndOthers_abnormalBulging_severity: c5.r5s,
      bearing_steelAndRubberAndOthers_abnormalBulging_pctgAff1: c5.r5p,
      bearing_steelAndRubberAndOthers_abnormalBulging_remarks: c5.r5r,
      bearing_steelAndRubberAndOthers_abnormalBulging_rod: c5.r5rod,
      bearing_steelAndRubberAndOthers_abnormalDisplacement_tick: c5.r6d,
      bearing_steelAndRubberAndOthers_abnormalDisplacement_severity: c5.r6s,
      bearing_steelAndRubberAndOthers_abnormalDisplacement_pctgAff1: "A",
      bearing_steelAndRubberAndOthers_abnormalDisplacement_pctgAff2: c5.r6p,
      bearing_steelAndRubberAndOthers_abnormalDisplacement_remarks: c5.r6r,
      bearing_steelAndRubberAndOthers_abnormalDisplacement_rod: c5.r6rod,

      parapet__tick: c6.main,
      parapet_steel_tick: c6.one,
      parapet_concrete_tick: c6.two,
      parapet_others_tick: c6.three,
      parapet_steelAndConcreteAndOthers_ratingOfMember: c6.rom1,
      parapet_steelAndConcreteAndOthers_corrosionOfSteel_tick: c6.r1d,
      parapet_steelAndConcreteAndOthers_corrosionOfSteel_severity: c6.r1s,
      parapet_steelAndConcreteAndOthers_corrosionOfSteel_pctgAff1: "L/N",
      parapet_steelAndConcreteAndOthers_corrosionOfSteel_pctgAff2: c6.r1p,
      parapet_steelAndConcreteAndOthers_corrosionOfSteel_remarks: c6.r1r,
      parapet_steelAndConcreteAndOthers_corrosionOfSteel_rod: c6.r1rod,
      parapet_steelAndConcreteAndOthers_cracksAtConcrete_tick: c6.r2d,
      parapet_steelAndConcreteAndOthers_cracksAtConcrete_severity: c6.r2s,
      parapet_steelAndConcreteAndOthers_cracksAtConcrete_pctgAff1: c6.r2p,
      parapet_steelAndConcreteAndOthers_cracksAtConcrete_remarks: c6.r2r,
      parapet_steelAndConcreteAndOthers_cracksAtConcrete_rod: c6.r2rod,
      parapet_steelAndConcreteAndOthers_spalling_tick: c6.r3d,
      parapet_steelAndConcreteAndOthers_spalling_severity: c6.r3s,
      parapet_steelAndConcreteAndOthers_spalling_pctgAff1: "A",
      parapet_steelAndConcreteAndOthers_spalling_pctgAff2: c6.r3p,
      parapet_steelAndConcreteAndOthers_spalling_remarks: c6.r3r,
      parapet_steelAndConcreteAndOthers_spalling_rod: c6.r3rod,
      parapet_steelAndConcreteAndOthers_impactDamage_tick: c6.r4d,
      parapet_steelAndConcreteAndOthers_impactDamage_severity: c6.r4s,
      parapet_steelAndConcreteAndOthers_impactDamage_pctgAff1: "L",
      parapet_steelAndConcreteAndOthers_impactDamage_pctgAff2: c6.r4p,
      parapet_steelAndConcreteAndOthers_impactDamage_remarks: c6.r4r,
      parapet_steelAndConcreteAndOthers_impactDamage_rod: c6.r4rod,
      parapet_steelAndConcreteAndOthers_looseConnections_tick: c6.r5d,
      parapet_steelAndConcreteAndOthers_looseConnections_severity: c6.r5s,
      parapet_steelAndConcreteAndOthers_looseConnections_pctgAff1: "N",
      parapet_steelAndConcreteAndOthers_looseConnections_pctgAff2: c6.r5p,
      parapet_steelAndConcreteAndOthers_looseConnections_remarks: c6.r5r,
      parapet_steelAndConcreteAndOthers_looseConnections_rod: c6.r5rod,

      surfacing__tick: c7.main,
      surfacing_asphalt_tick: c7.one,
      surfacing_concrete_tick: c7.two,
      surfacing_asphaltAndConcrete_ratingOfMember: c7.rom1,
      surfacing_asphaltAndConcrete_potHoles_tick: c7.r1d,
      surfacing_asphaltAndConcrete_potHoles_severity: c7.r1s,
      surfacing_asphaltAndConcrete_potHoles_pctgAff1: "A",
      surfacing_asphaltAndConcrete_potHoles_pctgAff2: c7.r1p,
      surfacing_asphaltAndConcrete_potHoles_remarks: c7.r1r,
      surfacing_asphaltAndConcrete_potHoles_rod: c7.r1rod,
      surfacing_asphaltAndConcrete_wheelTrackRutting_tick: c7.r2d,
      surfacing_asphaltAndConcrete_wheelTrackRutting_severity: c7.r2s,
      surfacing_asphaltAndConcrete_wheelTrackRutting_pctgAff1: "A",
      surfacing_asphaltAndConcrete_wheelTrackRutting_pctgAff2: c7.r2p,
      surfacing_asphaltAndConcrete_wheelTrackRutting_remarks: c7.r2r,
      surfacing_asphaltAndConcrete_wheelTrackRutting_rod: c7.r2rod,
      surfacing_asphaltAndConcrete_lostOfBondAndDelamination_tick: c7.r3d,
      surfacing_asphaltAndConcrete_lostOfBondAndDelamination_severity: c7.r3s,
      surfacing_asphaltAndConcrete_lostOfBondAndDelamination_pctgAff1: "A",
      surfacing_asphaltAndConcrete_lostOfBondAndDelamination_pctgAff2: c7.r3p,
      surfacing_asphaltAndConcrete_lostOfBondAndDelamination_remarks: c7.r3r,
      surfacing_asphaltAndConcrete_lostOfBondAndDelamination_rod: c7.r3rod,
      surfacing_asphaltAndConcrete_rippling_tick: c7.r4d,
      surfacing_asphaltAndConcrete_rippling_severity: c7.r4s,
      surfacing_asphaltAndConcrete_rippling_pctgAff1: c7.r4p,
      surfacing_asphaltAndConcrete_rippling_remarks: c7.r4r,
      surfacing_asphaltAndConcrete_rippling_rod: c7.r4rod,
      surfacing_asphaltAndConcrete_pavementCrack_tick: c7.r5d,
      surfacing_asphaltAndConcrete_pavementCrack_severity: c7.r5s,
      surfacing_asphaltAndConcrete_pavementCrack_pctgAff1: c7.r5p,
      surfacing_asphaltAndConcrete_pavementCrack_remarks: c7.r5r,
      surfacing_asphaltAndConcrete_pavementCrack_rod: c7.r5rod,

      expansionJoint__tick: c8.main,
      expansionJoint_aspPlug_tick: c8.one,
      expansionJoint_elastomeric_tick: c8.two,
      expansionJoint_compSeal_tick: c8.three,
      expansionJoint_buried_tick: c8.four,
      expansionJoint_others_tick: c8.five,
      expansionJoint_all_ratingOfMember: c8.rom1,
      expansionJoint_all_abnormalSpacing_tick: c8.r1d,
      expansionJoint_all_abnormalSpacing_severity: c8.r1s,
      expansionJoint_all_abnormalSpacing_pctgAff1: c8.r1p,
      expansionJoint_all_abnormalSpacing_remarks: c8.r1r,
      expansionJoint_all_abnormalSpacing_rod: c8.r1rod,
      expansionJoint_all_differenceInLevel_tick: c8.r2d,
      expansionJoint_all_differenceInLevel_severity: c8.r2s,
      expansionJoint_all_differenceInLevel_pctgAff1: "L",
      expansionJoint_all_differenceInLevel_pctgAff2: c8.r2p,
      expansionJoint_all_differenceInLevel_remarks: c8.r2r,
      expansionJoint_all_differenceInLevel_rod: c8.r2rod,
      expansionJoint_all_waterLeak_tick: c8.r3d,
      expansionJoint_all_waterLeak_severity: c8.r3s,
      expansionJoint_all_waterLeak_pctgAff1: "A",
      expansionJoint_all_waterLeak_pctgAff2: c8.r3p,
      expansionJoint_all_waterLeak_remarks: c8.r3r,
      expansionJoint_all_waterLeak_rod: c8.r3rod,
      expansionJoint_all_crackingAtExpJoint_tick: c8.r4d,
      expansionJoint_all_crackingAtExpJoint_severity: c8.r4s,
      expansionJoint_all_crackingAtExpJoint_pctgAff1: "L",
      expansionJoint_all_crackingAtExpJoint_pctgAff2: c8.r4p,
      expansionJoint_all_crackingAtExpJoint_remarks: c8.r4r,
      expansionJoint_all_crackingAtExpJoint_rod: c8.r4rod,
      expansionJoint_all_rupture_tick: c8.r5d,
      expansionJoint_all_rupture_severity: c8.r5s,
      expansionJoint_all_rupture_pctgAff1: "L",
      expansionJoint_all_rupture_pctgAff2: c8.r5p,
      expansionJoint_all_rupture_remarks: c8.r5r,
      expansionJoint_all_rupture_rod: c8.r5rod,

      drainPipe_tick: c9.main,
      drainPipe_steel_tick: c9.one,
      drainPipe_pvc_tick: c9.two,
      drainPipe_all_ratingOfMember: c9.rom1,
      drainPipe_steelPVC_corrosionOfSteel_tick: c9.r1d,
      drainPipe_steelPVC_corrosionOfSteel_severity: c9.r1s,
      drainPipe_steelPVC_corrosionOfSteel_pctgAff1: "A",
      drainPipe_steelPVC_corrosionOfSteel_pctgAff2: c9.r1p,
      drainPipe_steelPVC_corrosionOfSteel_remarks: c9.r1r,
      drainPipe_steelPVC_corrosionOfSteel_rod: c9.r1rod,
      drainPipe_steelPVC_blockedDrainage_tick: c9.r2d,
      drainPipe_steelPVC_blockedDrainage_severity: c9.r2s,
      drainPipe_steelPVC_blockedDrainage_pctgAff1: "N",
      drainPipe_steelPVC_blockedDrainage_pctgAff2: c9.r2p,
      drainPipe_steelPVC_blockedDrainage_remarks: c9.r2r,
      drainPipe_steelPVC_blockedDrainage_rod: c9.r2rod,
      drainPipe_steelPVC_waterLeak_tick: c9.r3d,
      drainPipe_steelPVC_waterLeak_severity: c9.r3s,
      drainPipe_steelPVC_waterLeak_pctgAff1: "A",
      drainPipe_steelPVC_waterLeak_pctgAff2: c9.r3p,
      drainPipe_steelPVC_waterLeak_remarks: c9.r3r,
      drainPipe_steelPVC_waterLeak_rod: c9.r3rod,
      drainPipe_steelPVC_inadequatePipeLength_tick: c9.r4d,
      drainPipe_steelPVC_inadequatePipeLength_severity: c9.r4s,
      drainPipe_steelPVC_inadequatePipeLength_pctgAff1: "N",
      drainPipe_steelPVC_inadequatePipeLength_pctgAff2: c9.r4p,
      drainPipe_steelPVC_inadequatePipeLength_remarks: c9.r4r,
      drainPipe_steelPVC_inadequatePipeLength_rod: c9.r4rod,

      slopeProtection_tick: c10.main,
      slopeProtection_rblePitching_tick: c10.one,
      slopeProtection_gablons_tick: c10.two,
      slopeProtection_others_tick: c10.three,
      slopeProtection_all_ratingOfMember: c10.rom1,
      slopeProtection_all_scouring_tick: c10.r1d,
      slopeProtection_all_scouring_severity: c10.r1s,
      slopeProtection_all_scouring_pctgAff1: c10.r1p,
      slopeProtection_all_scouring_remarks: c10.r1r,
      slopeProtection_all_scouring_rod: c10.r1rod,
      slopeProtection_all_erosion_tick: c10.r2d,
      slopeProtection_all_erosion_severity: c10.r2s,
      slopeProtection_all_erosion_pctgAff1: "A",
      slopeProtection_all_erosion_pctgAff2: c10.r2p,
      slopeProtection_all_erosion_remarks: c10.r2r,
      slopeProtection_all_erosion_rod: c10.r2rod,
      slopeProtection_all_materialLoss_tick: c10.r3d,
      slopeProtection_all_materialLoss_severity: c10.r3s,
      slopeProtection_all_materialLoss_pctgAff1: "A",
      slopeProtection_all_materialLoss_pctgAff2: c10.r3p,
      slopeProtection_all_materialLoss_remarks: c10.r3r,
      slopeProtection_all_materialLoss_rod: c10.r3rod,
      slopeProtection_all_blank_name: "",
      slopeProtection_all_blank_tick: c10.r4d,
      slopeProtection_all_blank_severity: c10.r4s,
      slopeProtection_all_blank_pctgAff1: "",
      slopeProtection_all_blank_pctgAff2: c10.r4p,
      slopeProtection_all_blank_remarks: c10.r4r,
      slopeProtection_all_blank_rod: c10.r4rod,

      hydraulicCapacity_inadequateOpening_ratingOfMember: c11.rom1,
      hydraulicCapacity_inadequateOpening_tick: c11.r1d,
      hydraulicCapacity_inadequateOpening_severity: c11.r1s,
      hydraulicCapacity_inadequateOpening_pctgAff1: c11.r1p,
      hydraulicCapacity_inadequateOpening_remarks: c11.r1r,
      hydraulicCapacity_inadequateOpening_rod: c11.r1rod,

      allComponentsInspected: allComponentsInspected,
    };

    try {
      const response = await fetch(`/api/getform/${projectID}/${pageNo}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formdataa: formdataa,
        }),
      });
      const result = await response.json();
      if (result.success) {
        alert("Form data updated successfully!");
        window.location.reload();
      } else {
        alert("Failed to update form data.");
      }
      console.log("update result: ", JSON.stringify(result, null, 2));
    } catch (error) {
      console.log("errorrr: ", JSON.stringify(error, null, 2));
      alert("Failed to update form data.");
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
        <div className="w-full flex flex-row">
          <div className="w-1/2 flex flex-row items-center mb-6 no-print">
            <div className="w-full flex flex-row items-center">
              <div className="mr-4">
                <p className="font-bold mb-2">Edit</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editCheck}
                    onChange={() => setEditCheck(!editCheck)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <p className="ml-3">
                    {editCheck ? "Edit Mode" : "View Mode"}
                  </p>
                </label>
              </div>
              <div className="flex flex-row items-center mt-4">
                <button
                  onClick={() => {
                    window.location.href = `/project/${projectID}/formpage/${Number(pageNo) + 1}`;
                  }}
                  className="bg-blue-500 text-white font-bold px-6 py-3 rounded-xl mt-4"
                >
                  Page Up
                </button>
                <button
                  onClick={() => {
                    if (Number(pageNo) != 1)
                      window.location.href = `/project/${projectID}/formpage/${Number(pageNo) - 1}`;
                    else alert("This is the first page!");
                  }}
                  className="bg-blue-500 text-white font-bold px-6 py-3 rounded-xl mt-4"
                >
                  Page Down
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-row items-center mb-6 no-print">
            <p
              className="font-semibold p-2 mb-2"
              style={{
                backgroundColor: inDB
                  ? "oklch(79.2% 0.209 151.711)"
                  : "oklch(80.8% 0.114 19.571)",
              }}
            >
              {inDB ? "Available in Database" : "Not Available in Database"}
            </p>
            <button
              className="bg-blue-500 text-white font-bold px-6 py-3 rounded-xl ml-3"
              onClick={handleUpdateForm}
            >
              Update
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center">
          <p className="font-bold text-[12px]">Page {pageNo} of SPAN: </p>
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
            <td
              rowSpan={15}
              className="font-bold text-center text-[12px] relative"
            >
              <span
                onClick={() => {
                  if (editCheck) {
                    setC1({ ...c1, main: !c1.main });
                  }
                }}
                className="absolute top-3 left-2"
              >
                [{c1.main ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>
              BEAM/GIRDER (PRIMARY)
            </td>
            <td rowSpan={7} className="font-bold text-center text-[12px]">
              <span
                onClick={() => {
                  if (editCheck) {
                    setC1({ ...c1, one: !c1.one });
                  }
                }}
              >
                [{c1.one ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Steel
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
              {data.beamGirder_steel_corrosionOfSteel_pctgAff1
                ? data.beamGirder_steel_corrosionOfSteel_pctgAff1
                : "A"}
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
              {data.beamGirder_steel_looseConnections_pctgAff1
                ? data.beamGirder_steel_looseConnections_pctgAff1
                : "N"}
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
              {data.beamGirder_steel_paintDeterioration_pctgAff1
                ? data.beamGirder_steel_paintDeterioration_pctgAff1
                : "A"}{" "}
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
            <td rowSpan={8} className="font-bold text-center text-[12px]">
              <span
                onClick={() => {
                  if (editCheck) {
                    setC1({ ...c1, two: !c1.two });
                  }
                }}
              >
                [{c1.two ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; P. Concrete
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC1({ ...c1, three: !c1.three });
                  }
                }}
              >
                [{c1.three ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; R. Concrete
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
              {data.beamGirder_pAndRConcrete_surfaceDefect_pctgAff1
                ? data.beamGirder_pAndRConcrete_surfaceDefect_pctgAff1
                : "A"}
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
              {data.beamGirder_pAndRConcrete_delamination_pctgAff1
                ? data.beamGirder_pAndRConcrete_delamination_pctgAff1
                : "A"}
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
              {data.beamGirder_pAndRConcrete_spalling_pctgAff1
                ? data.beamGirder_pAndRConcrete_spalling_pctgAff1
                : "A"}{" "}
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
              {data.beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff1
                ? data.beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff1
                : "L"}
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
            <td
              rowSpan={14}
              className="font-bold text-center text-[12px] relative"
            >
              <span
                onClick={() => {
                  if (editCheck) {
                    setC2({ ...c2, main: !c2.main });
                  }
                }}
                className="absolute top-3 left-2"
              >
                [{c2.main ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>
              DECK SLAB (Primary)
            </td>
            <td rowSpan={7} className="font-bold text-center text-[12px]">
              <span
                onClick={() => {
                  if (editCheck) {
                    setC2({ ...c2, one: !c2.one });
                  }
                }}
              >
                [{c2.one ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Steel
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
            <td className="text-center text-[12px]">A</td>
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
            {/* percentage */} <td className="text-center text-[12px]">N</td>
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
            {/* percentage */} <td className="text-center text-[12px]">A</td>
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
            <td rowSpan={7} className="font-bold text-[12px]">
              <span
                onClick={() => {
                  if (editCheck) {
                    setC2({ ...c2, two: !c2.two });
                  }
                }}
              >
                [{c2.two ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; P. Concrete <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC2({ ...c2, three: !c2.three });
                  }
                }}
              >
                [{c2.three ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; R. Concrete
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
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
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
            <td rowSpan={6} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "2",
                      rowNo: "2",
                      mat: "Concrete",
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
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
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
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
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
            {/* percentage */} <td className="text-center text-[12px]">L</td>{" "}
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
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
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
          {/* START Abutment */}
          {/* Abutment row1 */}
          <tr>
            <td
              rowSpan={9}
              className="font-bold text-center text-[12px] relative"
            >
              <span
                onClick={() => {
                  if (editCheck) {
                    setC3({ ...c3, main: !c3.main });
                  }
                }}
                className="absolute top-3 left-2"
              >
                [{c3.main ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>
              ABUTMENT (Primary)
            </td>
            <td rowSpan={9} className="font-bold text-center text-[12px]">
              <span
                onClick={() => {
                  if (editCheck) {
                    setC3({ ...c3, one: !c3.one });
                  }
                }}
              >
                [{c3.one ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Concrete
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC3({ ...c3, two: !c3.two });
                  }
                }}
              >
                [{c3.two ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Masonry
            </td>
            <td className="font-semibold text-[12px]">Surface Defect</td>
            <td className="font-semibold text-center text-[12px]">11</td>
            <td className="justify-center items-center">
              {c3.r1d && (
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
              {!c3.r1d && (
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
                if (editCheck && c3.r1s == 1) {
                  setC3({ ...c3, r1s: 0, r1d: false });
                } else if (editCheck && c3.r1s != 1) {
                  setC3({ ...c3, r1s: 1, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c3.r1s == 1 && (
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
                if (editCheck && c3.r1s == 2) {
                  setC3({ ...c3, r1s: 0, r1d: false });
                } else if (editCheck && c3.r1s != 2) {
                  setC3({ ...c3, r1s: 2, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c3.r1s == 2 && (
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
                if (editCheck && c3.r1s == 3) {
                  setC3({ ...c3, r1s: 0, r1d: false });
                } else if (editCheck && c3.r1s != 3) {
                  setC3({ ...c3, r1s: 3, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c3.r1s == 3 && (
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
                if (editCheck && c3.r1s == 4) {
                  setC3({ ...c3, r1s: 0, r1d: false });
                } else if (editCheck && c3.r1s != 4) {
                  setC3({ ...c3, r1s: 4, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c3.r1s == 4 && (
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
            <td className="text-center text-[12px]">A</td>
            <td className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "3",
                      rowNo: "1",
                      mat: "Surface Defect",
                      value: c3.r1p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c3.r1p
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
                      compNo: "3",
                      rowNo: "1",
                      mat: "Surface Defect",
                      value: c3.r1r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c3.r1r
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
                      compNo: "3",
                      rowNo: "1",
                      mat: "Surface Defect",
                      value: c3.r1rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c3.r1rod
              )}
            </td>
            {/* rom */}
            <td rowSpan={9} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "3",
                      rowNo: "1",
                      mat: "Concrete and Masonry",
                      value: c3.rom1,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c3.rom1
              )}
            </td>
          </tr>
          {/* Abutment row2 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Cracks at Concrete</td>{" "}
            <td className="font-semibold text-center text-[12px]">6</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c3.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c3.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r2s == 1) {
                  setC3({ ...c3, r2s: 0, r2d: false });
                } else if (editCheck && c3.r2s != 1) {
                  setC3({ ...c3, r2s: 1, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r2s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r2s == 2) {
                  setC3({ ...c3, r2s: 0, r2d: false });
                } else if (editCheck && c3.r2s != 2) {
                  setC3({ ...c3, r2s: 2, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r2s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r2s == 3) {
                  setC3({ ...c3, r2s: 0, r2d: false });
                } else if (editCheck && c3.r2s != 3) {
                  setC3({ ...c3, r2s: 3, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r2s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r2s == 4) {
                  setC3({ ...c3, r2s: 0, r2d: false });
                } else if (editCheck && c3.r2s != 4) {
                  setC3({ ...c3, r2s: 4, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r2s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "3",
                      rowNo: "2",
                      mat: "Cracks at Concrete",
                      value: c3.r2p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r2p
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
                      compNo: "3",
                      rowNo: "2",
                      mat: "Cracks at Concrete",
                      value: c3.r2r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r2r
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
                      compNo: "3",
                      rowNo: "2",
                      mat: "Cracks at Concrete",
                      value: c3.r2rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r2rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Abutment row3 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Delamination</td>{" "}
            <td className="font-semibold text-center text-[12px]">12</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c3.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c3.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r3s == 1) {
                  setC3({ ...c3, r3s: 0, r3d: false });
                } else if (editCheck && c3.r3s != 1) {
                  setC3({ ...c3, r3s: 1, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r3s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r3s == 2) {
                  setC3({ ...c3, r3s: 0, r3d: false });
                } else if (editCheck && c3.r3s != 2) {
                  setC3({ ...c3, r3s: 2, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r3s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r3s == 3) {
                  setC3({ ...c3, r3s: 0, r3d: false });
                } else if (editCheck && c3.r3s != 3) {
                  setC3({ ...c3, r3s: 3, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r3s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r3s == 4) {
                  setC3({ ...c3, r3s: 0, r3d: false });
                } else if (editCheck && c3.r3s != 4) {
                  setC3({ ...c3, r3s: 4, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r3s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "3",
                      rowNo: "3",
                      mat: "Delamination",
                      value: c3.r3p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r3p
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
                      compNo: "3",
                      rowNo: "3",
                      mat: "Delamination",
                      value: c3.r3r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r3r
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
                      compNo: "3",
                      rowNo: "3",
                      mat: "Delamination",
                      value: c3.r3rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r3rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Abutment row4 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Spalling</td>{" "}
            <td className="font-semibold text-center text-[12px]">7</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c3.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c3.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r4s == 1) {
                  setC3({ ...c3, r4s: 0, r4d: false });
                } else if (editCheck && c3.r4s != 1) {
                  setC3({ ...c3, r4s: 1, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r4s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r4s == 2) {
                  setC3({ ...c3, r4s: 0, r4d: false });
                } else if (editCheck && c3.r4s != 2) {
                  setC3({ ...c3, r4s: 2, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r4s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r4s == 3) {
                  setC3({ ...c3, r4s: 0, r4d: false });
                } else if (editCheck && c3.r4s != 3) {
                  setC3({ ...c3, r4s: 3, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r4s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r4s == 4) {
                  setC3({ ...c3, r4s: 0, r4d: false });
                } else if (editCheck && c3.r4s != 4) {
                  setC3({ ...c3, r4s: 4, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r4s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "3",
                      rowNo: "4",
                      mat: "Spalling",
                      value: c3.r4p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r4p
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
                      compNo: "3",
                      rowNo: "4",
                      mat: "Spalling",
                      value: c3.r4r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r4r
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
                      compNo: "3",
                      rowNo: "4",
                      mat: "Spalling",
                      value: c3.r4rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r4rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Abutment row5 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">
              Corrosion of Reinforcement
            </td>{" "}
            <td className="font-semibold text-center text-[12px]">8</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c3.r5d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c3.r5d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r5s == 1) {
                  setC3({ ...c3, r5s: 0, r5d: false });
                } else if (editCheck && c3.r5s != 1) {
                  setC3({ ...c3, r5s: 1, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r5s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r5s == 2) {
                  setC3({ ...c3, r5s: 0, r5d: false });
                } else if (editCheck && c3.r5s != 2) {
                  setC3({ ...c3, r5s: 2, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r5s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r5s == 3) {
                  setC3({ ...c3, r5s: 0, r5d: false });
                } else if (editCheck && c3.r5s != 3) {
                  setC3({ ...c3, r5s: 3, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r5s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r5s == 4) {
                  setC3({ ...c3, r5s: 0, r5d: false });
                } else if (editCheck && c3.r5s != 4) {
                  setC3({ ...c3, r5s: 4, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r5s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">L</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "3",
                      rowNo: "5",
                      mat: "Corrosion of Reinforcement",
                      value: c3.r5p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r5p
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
                      compNo: "3",
                      rowNo: "5",
                      mat: "Corrosion of Reinforcement",
                      value: c3.r5r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r5r
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
                      compNo: "3",
                      rowNo: "5",
                      mat: "Corrosion of Reinforcement",
                      value: c3.r5rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r5rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Abutment row6 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Wear/Abrasion</td>{" "}
            <td className="font-semibold text-center text-[12px]">9</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c3.r6d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c3.r6d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r6s == 1) {
                  setC3({ ...c3, r6s: 0, r6d: false });
                } else if (editCheck && c3.r6s != 1) {
                  setC3({ ...c3, r6s: 1, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r6s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r6s == 2) {
                  setC3({ ...c3, r6s: 0, r6d: false });
                } else if (editCheck && c3.r6s != 2) {
                  setC3({ ...c3, r6s: 2, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r6s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r6s == 3) {
                  setC3({ ...c3, r6s: 0, r6d: false });
                } else if (editCheck && c3.r6s != 3) {
                  setC3({ ...c3, r6s: 3, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r6s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r6s == 4) {
                  setC3({ ...c3, r6s: 0, r6d: false });
                } else if (editCheck && c3.r6s != 4) {
                  setC3({ ...c3, r6s: 4, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r6s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "3",
                      rowNo: "6",
                      mat: "Wear/Abrasion",
                      value: c3.r6p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r6p
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
                      compNo: "3",
                      rowNo: "6",
                      mat: "Wear/Abrasion",
                      value: c3.r6r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r6r
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
                      compNo: "3",
                      rowNo: "6",
                      mat: "Wear/Abrasion",
                      value: c3.r6rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r6rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Abutment row7 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">
              Material Deterioration
            </td>{" "}
            <td className="font-semibold text-center text-[12px]">10</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c3.r7d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c3.r7d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r7s == 1) {
                  setC3({ ...c3, r7s: 0, r7d: false });
                } else if (editCheck && c3.r7s != 1) {
                  setC3({ ...c3, r7s: 1, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r7s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r7s == 2) {
                  setC3({ ...c3, r7s: 0, r7d: false });
                } else if (editCheck && c3.r7s != 2) {
                  setC3({ ...c3, r7s: 2, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r7s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r7s == 3) {
                  setC3({ ...c3, r7s: 0, r7d: false });
                } else if (editCheck && c3.r7s != 3) {
                  setC3({ ...c3, r7s: 3, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r7s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r7s == 4) {
                  setC3({ ...c3, r7s: 0, r7d: false });
                } else if (editCheck && c3.r7s != 4) {
                  setC3({ ...c3, r7s: 4, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r7s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "3",
                      rowNo: "7",
                      mat: "Material Deterioration",
                      value: c3.r7p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r7p
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
                      compNo: "3",
                      rowNo: "7",
                      mat: "Material Deterioration",
                      value: c3.r7r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r7r
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
                      compNo: "3",
                      rowNo: "7",
                      mat: "Material Deterioration",
                      value: c3.r7rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r7rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Abutment row8 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Tilt/Settlement</td>{" "}
            <td className="font-semibold text-center text-[12px]">15</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c3.r8d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c3.r8d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r8s == 1) {
                  setC3({ ...c3, r8s: 0, r8d: false });
                } else if (editCheck && c3.r8s != 1) {
                  setC3({ ...c3, r8s: 1, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r8s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r8s == 2) {
                  setC3({ ...c3, r8s: 0, r8d: false });
                } else if (editCheck && c3.r8s != 2) {
                  setC3({ ...c3, r8s: 2, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r8s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r8s == 3) {
                  setC3({ ...c3, r8s: 0, r8d: false });
                } else if (editCheck && c3.r8s != 3) {
                  setC3({ ...c3, r8s: 3, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r8s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r8s == 4) {
                  setC3({ ...c3, r8s: 0, r8d: false });
                } else if (editCheck && c3.r8s != 4) {
                  setC3({ ...c3, r8s: 4, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r8s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "3",
                      rowNo: "8",
                      mat: "Tilt/Settlement",
                      value: c3.r8p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r8p
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
                      compNo: "3",
                      rowNo: "8",
                      mat: "Tilt/Settlement",
                      value: c3.r8r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r8r
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
                      compNo: "3",
                      rowNo: "8",
                      mat: "Tilt/Settlement",
                      value: c3.r8rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r8rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Abutment row9 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Scouring</td>{" "}
            <td className="font-semibold text-center text-[12px]">17</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c3.r9d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c3.r9d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r9s == 1) {
                  setC3({ ...c3, r9s: 0, r9d: false });
                } else if (editCheck && c3.r9s != 1) {
                  setC3({ ...c3, r9s: 1, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r9s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r9s == 2) {
                  setC3({ ...c3, r9s: 0, r9d: false });
                } else if (editCheck && c3.r9s != 2) {
                  setC3({ ...c3, r9s: 2, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r9s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r9s == 3) {
                  setC3({ ...c3, r9s: 0, r9d: false });
                } else if (editCheck && c3.r9s != 3) {
                  setC3({ ...c3, r9s: 3, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r9s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c3.r9s == 4) {
                  setC3({ ...c3, r9s: 0, r9d: false });
                } else if (editCheck && c3.r9s != 4) {
                  setC3({ ...c3, r9s: 4, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c3.r9s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "3",
                      rowNo: "9",
                      mat: "Scouring",
                      value: c3.r9p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r9p
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
                      compNo: "3",
                      rowNo: "9",
                      mat: "Scouring",
                      value: c3.r9r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r9r
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
                      compNo: "3",
                      rowNo: "9",
                      mat: "Scouring",
                      value: c3.r9rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c3.r9rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* END Abutment */}
          {/* START Pier */}
          {/* Pier row1 */}
          <tr>
            <td
              rowSpan={9}
              className="font-bold text-center text-[12px] relative"
            >
              <span
                onClick={() => {
                  if (editCheck) {
                    setC4({ ...c4, main: !c4.main });
                  }
                }}
                className="absolute top-3 left-2"
              >
                [{c4.main ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>
              PIER NO. (Primary)
            </td>
            <td rowSpan={9} className="font-bold text-center text-[12px]">
              <span
                onClick={() => {
                  if (editCheck) {
                    setC4({ ...c4, one: !c4.one });
                  }
                }}
              >
                [{c4.one ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Concrete
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC4({ ...c4, two: !c4.two });
                  }
                }}
              >
                [{c4.two ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Masonry
            </td>

            <td className="font-semibold text-[12px]">Surface Defect</td>
            <td className="font-semibold text-center text-[12px]">11</td>
            <td className="justify-center items-center">
              {c4.r1d && (
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
              {!c4.r1d && (
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
                if (editCheck && c4.r1s == 1) {
                  setC4({ ...c4, r1s: 0, r1d: false });
                } else if (editCheck && c4.r1s != 1) {
                  setC4({ ...c4, r1s: 1, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c4.r1s == 1 && (
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
                if (editCheck && c4.r1s == 2) {
                  setC4({ ...c4, r1s: 0, r1d: false });
                } else if (editCheck && c4.r1s != 2) {
                  setC4({ ...c4, r1s: 2, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c4.r1s == 2 && (
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
                if (editCheck && c4.r1s == 3) {
                  setC4({ ...c4, r1s: 0, r1d: false });
                } else if (editCheck && c4.r1s != 3) {
                  setC4({ ...c4, r1s: 3, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c4.r1s == 3 && (
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
                if (editCheck && c4.r1s == 4) {
                  setC4({ ...c4, r1s: 0, r1d: false });
                } else if (editCheck && c4.r1s != 4) {
                  setC4({ ...c4, r1s: 4, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {c4.r1s == 4 && (
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
            <td className="text-center text-[12px]">A</td>
            <td className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "4",
                      rowNo: "1",
                      mat: "Surface Defect",
                      value: c4.r1p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c4.r1p
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
                      compNo: "4",
                      rowNo: "1",
                      mat: "Surface Defect",
                      value: c4.r1r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c4.r1r
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
                      compNo: "4",
                      rowNo: "1",
                      mat: "Surface Defect",
                      value: c4.r1rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c4.r1rod
              )}
            </td>
            {/* rom */}
            <td rowSpan={9} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "4",
                      rowNo: "1",
                      mat: "Concrete and Masonry",
                      value: c4.rom1,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c4.rom1
              )}
            </td>
          </tr>
          {/* Pier row2 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Cracks at Concrete</td>{" "}
            <td className="font-semibold text-center text-[12px]">6</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c4.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c4.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r2s == 1) {
                  setC4({ ...c4, r2s: 0, r2d: false });
                } else if (editCheck && c4.r2s != 1) {
                  setC4({ ...c4, r2s: 1, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r2s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r2s == 2) {
                  setC4({ ...c4, r2s: 0, r2d: false });
                } else if (editCheck && c4.r2s != 2) {
                  setC4({ ...c4, r2s: 2, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r2s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r2s == 3) {
                  setC4({ ...c4, r2s: 0, r2d: false });
                } else if (editCheck && c4.r2s != 3) {
                  setC4({ ...c4, r2s: 3, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r2s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r2s == 4) {
                  setC4({ ...c4, r2s: 0, r2d: false });
                } else if (editCheck && c4.r2s != 4) {
                  setC4({ ...c4, r2s: 4, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r2s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "4",
                      rowNo: "2",
                      mat: "Cracks at Concrete",
                      value: c4.r2p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r2p
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
                      compNo: "4",
                      rowNo: "2",
                      mat: "Cracks at Concrete",
                      value: c4.r2r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r2r
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
                      compNo: "4",
                      rowNo: "2",
                      mat: "Cracks at Concrete",
                      value: c4.r2rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r2rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Pier row3 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Delamination</td>{" "}
            <td className="font-semibold text-center text-[12px]">12</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c4.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c4.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r3s == 1) {
                  setC4({ ...c4, r3s: 0, r3d: false });
                } else if (editCheck && c4.r3s != 1) {
                  setC4({ ...c4, r3s: 1, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r3s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r3s == 2) {
                  setC4({ ...c4, r3s: 0, r3d: false });
                } else if (editCheck && c4.r3s != 2) {
                  setC4({ ...c4, r3s: 2, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r3s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r3s == 3) {
                  setC4({ ...c4, r3s: 0, r3d: false });
                } else if (editCheck && c4.r3s != 3) {
                  setC4({ ...c4, r3s: 3, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r3s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r3s == 4) {
                  setC4({ ...c4, r3s: 0, r3d: false });
                } else if (editCheck && c4.r3s != 4) {
                  setC4({ ...c4, r3s: 4, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r3s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "4",
                      rowNo: "3",
                      mat: "Delamination",
                      value: c4.r3p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r3p
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
                      compNo: "4",
                      rowNo: "3",
                      mat: "Delamination",
                      value: c4.r3r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r3r
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
                      compNo: "4",
                      rowNo: "3",
                      mat: "Delamination",
                      value: c4.r3rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r3rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Pier row4 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Spalling</td>{" "}
            <td className="font-semibold text-center text-[12px]">7</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c4.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c4.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r4s == 1) {
                  setC4({ ...c4, r4s: 0, r4d: false });
                } else if (editCheck && c4.r4s != 1) {
                  setC4({ ...c4, r4s: 1, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r4s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r4s == 2) {
                  setC4({ ...c4, r4s: 0, r4d: false });
                } else if (editCheck && c4.r4s != 2) {
                  setC4({ ...c4, r4s: 2, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r4s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r4s == 3) {
                  setC4({ ...c4, r4s: 0, r4d: false });
                } else if (editCheck && c4.r4s != 3) {
                  setC4({ ...c4, r4s: 3, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r4s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r4s == 4) {
                  setC4({ ...c4, r4s: 0, r4d: false });
                } else if (editCheck && c4.r4s != 4) {
                  setC4({ ...c4, r4s: 4, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r4s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "4",
                      rowNo: "4",
                      mat: "Spalling",
                      value: c4.r4p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r4p
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
                      compNo: "4",
                      rowNo: "4",
                      mat: "Spalling",
                      value: c4.r4r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r4r
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
                      compNo: "4",
                      rowNo: "4",
                      mat: "Spalling",
                      value: c4.r4rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r4rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Pier row5 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">
              Corrosion of Reinforcement
            </td>{" "}
            <td className="font-semibold text-center text-[12px]">8</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c4.r5d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c4.r5d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r5s == 1) {
                  setC4({ ...c4, r5s: 0, r5d: false });
                } else if (editCheck && c4.r5s != 1) {
                  setC4({ ...c4, r5s: 1, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r5s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r5s == 2) {
                  setC4({ ...c4, r5s: 0, r5d: false });
                } else if (editCheck && c4.r5s != 2) {
                  setC4({ ...c4, r5s: 2, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r5s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r5s == 3) {
                  setC4({ ...c4, r5s: 0, r5d: false });
                } else if (editCheck && c4.r5s != 3) {
                  setC4({ ...c4, r5s: 3, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r5s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r5s == 4) {
                  setC4({ ...c4, r5s: 0, r5d: false });
                } else if (editCheck && c4.r5s != 4) {
                  setC4({ ...c4, r5s: 4, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r5s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">L</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "4",
                      rowNo: "5",
                      mat: "Corrosion of Reinforcement",
                      value: c4.r5p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r5p
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
                      compNo: "4",
                      rowNo: "5",
                      mat: "Corrosion of Reinforcement",
                      value: c4.r5r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r5r
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
                      compNo: "4",
                      rowNo: "5",
                      mat: "Corrosion of Reinforcement",
                      value: c4.r5rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r5rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Pier row6 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Wear/Abrasion</td>{" "}
            <td className="font-semibold text-center text-[12px]">9</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c4.r6d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c4.r6d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r6s == 1) {
                  setC4({ ...c4, r6s: 0, r6d: false });
                } else if (editCheck && c4.r6s != 1) {
                  setC4({ ...c4, r6s: 1, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r6s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r6s == 2) {
                  setC4({ ...c4, r6s: 0, r6d: false });
                } else if (editCheck && c4.r6s != 2) {
                  setC4({ ...c4, r6s: 2, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r6s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r6s == 3) {
                  setC4({ ...c4, r6s: 0, r6d: false });
                } else if (editCheck && c4.r6s != 3) {
                  setC4({ ...c4, r6s: 3, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r6s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r6s == 4) {
                  setC4({ ...c4, r6s: 0, r6d: false });
                } else if (editCheck && c4.r6s != 4) {
                  setC4({ ...c4, r6s: 4, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r6s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "4",
                      rowNo: "6",
                      mat: "Wear/Abrasion",
                      value: c4.r6p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r6p
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
                      compNo: "4",
                      rowNo: "6",
                      mat: "Wear/Abrasion",
                      value: c4.r6r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r6r
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
                      compNo: "4",
                      rowNo: "6",
                      mat: "Wear/Abrasion",
                      value: c4.r6rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r6rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Pier row7 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">
              Material Deterioration
            </td>{" "}
            <td className="font-semibold text-center text-[12px]">10</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c4.r7d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c4.r7d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r7s == 1) {
                  setC4({ ...c4, r7s: 0, r7d: false });
                } else if (editCheck && c4.r7s != 1) {
                  setC4({ ...c4, r7s: 1, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r7s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r7s == 2) {
                  setC4({ ...c4, r7s: 0, r7d: false });
                } else if (editCheck && c4.r7s != 2) {
                  setC4({ ...c4, r7s: 2, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r7s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r7s == 3) {
                  setC4({ ...c4, r7s: 0, r7d: false });
                } else if (editCheck && c4.r7s != 3) {
                  setC4({ ...c4, r7s: 3, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r7s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r7s == 4) {
                  setC4({ ...c4, r7s: 0, r7d: false });
                } else if (editCheck && c4.r7s != 4) {
                  setC4({ ...c4, r7s: 4, r7d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r7s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "4",
                      rowNo: "7",
                      mat: "Material Deterioration",
                      value: c4.r7p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r7p
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
                      compNo: "4",
                      rowNo: "7",
                      mat: "Material Deterioration",
                      value: c4.r7r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r7r
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
                      compNo: "4",
                      rowNo: "7",
                      mat: "Material Deterioration",
                      value: c4.r7rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r7rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Pier row8 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Tilt/Settlement</td>{" "}
            <td className="font-semibold text-center text-[12px]">15</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c4.r8d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c4.r8d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r8s == 1) {
                  setC4({ ...c4, r8s: 0, r8d: false });
                } else if (editCheck && c4.r8s != 1) {
                  setC4({ ...c4, r8s: 1, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r8s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r8s == 2) {
                  setC4({ ...c4, r8s: 0, r8d: false });
                } else if (editCheck && c4.r8s != 2) {
                  setC4({ ...c4, r8s: 2, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r8s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r8s == 3) {
                  setC4({ ...c4, r8s: 0, r8d: false });
                } else if (editCheck && c4.r8s != 3) {
                  setC4({ ...c4, r8s: 3, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r8s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r8s == 4) {
                  setC4({ ...c4, r8s: 0, r8d: false });
                } else if (editCheck && c4.r8s != 4) {
                  setC4({ ...c4, r8s: 4, r8d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r8s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "4",
                      rowNo: "8",
                      mat: "Tilt/Settlement",
                      value: c4.r8p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r8p
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
                      compNo: "4",
                      rowNo: "8",
                      mat: "Tilt/Settlement",
                      value: c4.r8r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r8r
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
                      compNo: "4",
                      rowNo: "8",
                      mat: "Tilt/Settlement",
                      value: c4.r8rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r8rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Pier row9 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Scouring</td>{" "}
            <td className="font-semibold text-center text-[12px]">17</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c4.r9d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c4.r9d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r9s == 1) {
                  setC4({ ...c4, r9s: 0, r9d: false });
                } else if (editCheck && c4.r9s != 1) {
                  setC4({ ...c4, r9s: 1, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r9s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r9s == 2) {
                  setC4({ ...c4, r9s: 0, r9d: false });
                } else if (editCheck && c4.r9s != 2) {
                  setC4({ ...c4, r9s: 2, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r9s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r9s == 3) {
                  setC4({ ...c4, r9s: 0, r9d: false });
                } else if (editCheck && c4.r9s != 3) {
                  setC4({ ...c4, r9s: 3, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r9s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c4.r9s == 4) {
                  setC4({ ...c4, r9s: 0, r9d: false });
                } else if (editCheck && c4.r9s != 4) {
                  setC4({ ...c4, r9s: 4, r9d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c4.r9s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "4",
                      rowNo: "9",
                      mat: "Scouring",
                      value: c4.r9p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r9p
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
                      compNo: "4",
                      rowNo: "9",
                      mat: "Scouring",
                      value: c4.r9r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r9r
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
                      compNo: "4",
                      rowNo: "9",
                      mat: "Scouring",
                      value: c4.r9rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c4.r9rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* END Pier */}
          {/* START Bearing */}
          {/* Bearing row1 */}
          <tr>
            <td
              rowSpan={6}
              className="font-bold text-center text-[12px] relative"
            >
              <span
                onClick={() => {
                  if (editCheck) {
                    setC5({ ...c5, main: !c5.main });
                  }
                }}
                className="absolute top-3 left-2"
              >
                [{c5.main ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>
              BEARING (Primary)
            </td>
            <td rowSpan={6} className="font-bold text-center text-[12px]">
              <span
                onClick={() => {
                  if (editCheck) {
                    setC5({ ...c5, one: !c5.one });
                  }
                }}
              >
                [{c5.one ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Steel
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC5({ ...c5, two: !c5.two });
                  }
                }}
              >
                [{c5.two ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Rubber
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC5({ ...c5, three: !c5.three });
                  }
                }}
              >
                [{c5.three ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Others
            </td>
            <td className="font-semibold text-[12px]">Corrosion of Steel</td>{" "}
            <td className="font-semibold text-center text-[12px]">1</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c5.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c5.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r1s == 1) {
                  setC5({ ...c5, r1s: 0, r1d: false });
                } else if (editCheck && c5.r1s != 1) {
                  setC5({ ...c5, r1s: 1, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r1s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r1s == 2) {
                  setC5({ ...c5, r1s: 0, r1d: false });
                } else if (editCheck && c5.r1s != 2) {
                  setC5({ ...c5, r1s: 2, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r1s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r1s == 3) {
                  setC5({ ...c5, r1s: 0, r1d: false });
                } else if (editCheck && c5.r1s != 3) {
                  setC5({ ...c5, r1s: 3, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r1s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r1s == 4) {
                  setC5({ ...c5, r1s: 0, r1d: false });
                } else if (editCheck && c5.r1s != 4) {
                  setC5({ ...c5, r1s: 4, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r1s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "5",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c5.r1p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r1p
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
                      compNo: "5",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c5.r1r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r1r
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
                      compNo: "5",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c5.r1rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r1rod
              )}{" "}
            </td>
            {/* rom */}
            <td rowSpan={6} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "5",
                      rowNo: "1",
                      mat: "Steel, RUbber and Others",
                      value: c5.rom1,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c5.rom1
              )}
            </td>
          </tr>
          {/* Bearing row2 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Loose Connections</td>{" "}
            <td className="font-semibold text-center text-[12px]">3</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c5.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c5.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r2s == 1) {
                  setC5({ ...c5, r2s: 0, r2d: false });
                } else if (editCheck && c5.r2s != 1) {
                  setC5({ ...c5, r2s: 1, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r2s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r2s == 2) {
                  setC5({ ...c5, r2s: 0, r2d: false });
                } else if (editCheck && c5.r2s != 2) {
                  setC5({ ...c5, r2s: 2, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r2s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r2s == 3) {
                  setC5({ ...c5, r2s: 0, r2d: false });
                } else if (editCheck && c5.r2s != 3) {
                  setC5({ ...c5, r2s: 3, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r2s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r2s == 4) {
                  setC5({ ...c5, r2s: 0, r2d: false });
                } else if (editCheck && c5.r2s != 4) {
                  setC5({ ...c5, r2s: 4, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r2s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">N</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "5",
                      rowNo: "2",
                      mat: "Loose Connections",
                      value: c5.r2p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r2p
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
                      compNo: "5",
                      rowNo: "2",
                      mat: "Loose Connections",
                      value: c5.r2r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r2r
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
                      compNo: "5",
                      rowNo: "2",
                      mat: "Loose Connections",
                      value: c5.r2rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r2rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Bearing row3 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Pending Water</td>{" "}
            <td className="font-semibold text-center text-[12px]">18</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c5.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c5.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r3s == 1) {
                  setC5({ ...c5, r3s: 0, r3d: false });
                } else if (editCheck && c5.r3s != 1) {
                  setC5({ ...c5, r3s: 1, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r3s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r3s == 2) {
                  setC5({ ...c5, r3s: 0, r3d: false });
                } else if (editCheck && c5.r3s != 2) {
                  setC5({ ...c5, r3s: 2, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r3s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r3s == 3) {
                  setC5({ ...c5, r3s: 0, r3d: false });
                } else if (editCheck && c5.r3s != 3) {
                  setC5({ ...c5, r3s: 3, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r3s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r3s == 4) {
                  setC5({ ...c5, r3s: 0, r3d: false });
                } else if (editCheck && c5.r3s != 4) {
                  setC5({ ...c5, r3s: 4, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r3s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "5",
                      rowNo: "3",
                      mat: "Pending Water",
                      value: c5.r3p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r3p
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
                      compNo: "5",
                      rowNo: "3",
                      mat: "Pending Water",
                      value: c5.r3r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r3r
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
                      compNo: "5",
                      rowNo: "3",
                      mat: "Pending Water",
                      value: c5.r3rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r3rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Bearing row4 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Debris/Vegetation</td>{" "}
            <td className="font-semibold text-center text-[12px]">19</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c5.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c5.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r4s == 1) {
                  setC5({ ...c5, r4s: 0, r4d: false });
                } else if (editCheck && c5.r4s != 1) {
                  setC5({ ...c5, r4s: 1, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r4s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r4s == 2) {
                  setC5({ ...c5, r4s: 0, r4d: false });
                } else if (editCheck && c5.r4s != 2) {
                  setC5({ ...c5, r4s: 2, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r4s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r4s == 3) {
                  setC5({ ...c5, r4s: 0, r4d: false });
                } else if (editCheck && c5.r4s != 3) {
                  setC5({ ...c5, r4s: 3, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r4s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r4s == 4) {
                  setC5({ ...c5, r4s: 0, r4d: false });
                } else if (editCheck && c5.r4s != 4) {
                  setC5({ ...c5, r4s: 4, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r4s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "5",
                      rowNo: "4",
                      mat: "Debris/Vegetation",
                      value: c5.r4p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r4p
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
                      compNo: "5",
                      rowNo: "4",
                      mat: "Debris/Vegetation",
                      value: c5.r4r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r4r
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
                      compNo: "5",
                      rowNo: "4",
                      mat: "Debris/Vegetation",
                      value: c5.r4rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r4rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Bearing row5 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Abnormal Bulging</td>{" "}
            <td className="font-semibold text-center text-[12px]">33</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c5.r5d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c5.r5d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r5s == 1) {
                  setC5({ ...c5, r5s: 0, r5d: false });
                } else if (editCheck && c5.r5s != 1) {
                  setC5({ ...c5, r5s: 1, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r5s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r5s == 2) {
                  setC5({ ...c5, r5s: 0, r5d: false });
                } else if (editCheck && c5.r5s != 2) {
                  setC5({ ...c5, r5s: 2, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r5s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r5s == 3) {
                  setC5({ ...c5, r5s: 0, r5d: false });
                } else if (editCheck && c5.r5s != 3) {
                  setC5({ ...c5, r5s: 3, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r5s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r5s == 4) {
                  setC5({ ...c5, r5s: 0, r5d: false });
                } else if (editCheck && c5.r5s != 4) {
                  setC5({ ...c5, r5s: 4, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r5s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "5",
                      rowNo: "5",
                      mat: "Abnormal Bulging",
                      value: c5.r5p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r5p
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
                      compNo: "5",
                      rowNo: "5",
                      mat: "Abnormal Bulging",
                      value: c5.r5r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r5r
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
                      compNo: "5",
                      rowNo: "5",
                      mat: "Abnormal Bulging",
                      value: c5.r5rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r5rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Bearing row6 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Abnormal Displacement</td>{" "}
            <td className="font-semibold text-center text-[12px]">34</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c5.r6d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c5.r6d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r6s == 1) {
                  setC5({ ...c5, r6s: 0, r6d: false });
                } else if (editCheck && c5.r6s != 1) {
                  setC5({ ...c5, r6s: 1, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r6s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r6s == 2) {
                  setC5({ ...c5, r6s: 0, r6d: false });
                } else if (editCheck && c5.r6s != 2) {
                  setC5({ ...c5, r6s: 2, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r6s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r6s == 3) {
                  setC5({ ...c5, r6s: 0, r6d: false });
                } else if (editCheck && c5.r6s != 3) {
                  setC5({ ...c5, r6s: 3, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r6s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c5.r6s == 4) {
                  setC5({ ...c5, r6s: 0, r6d: false });
                } else if (editCheck && c5.r6s != 4) {
                  setC5({ ...c5, r6s: 4, r6d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c5.r6s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "5",
                      rowNo: "6",
                      mat: "Abnormal Displacement",
                      value: c5.r6p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r6p
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
                      compNo: "5",
                      rowNo: "6",
                      mat: "Abnormal Displacement",
                      value: c5.r6r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r6r
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
                      compNo: "5",
                      rowNo: "6",
                      mat: "Abnormal Displacement",
                      value: c5.r6rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c5.r6rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* END Bearing */}
          {/* START Parapet */}
          {/* Parapet row1 */}
          <tr>
            <td
              rowSpan={5}
              className="font-bold text-center text-[12px] relative"
            >
              <span
                onClick={() => {
                  if (editCheck) {
                    setC6({ ...c6, main: !c6.main });
                  }
                }}
                className="absolute top-3 left-2"
              >
                [{c6.main ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>
              PARAPET (Secondary)
            </td>
            <td rowSpan={5} className="font-bold text-center text-[12px]">
              <span
                onClick={() => {
                  if (editCheck) {
                    setC6({ ...c6, one: !c6.one });
                  }
                }}
              >
                [{c6.one ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Steel
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC6({ ...c6, two: !c6.two });
                  }
                }}
              >
                [{c6.two ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Concrete
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC6({ ...c6, three: !c6.three });
                  }
                }}
              >
                [{c6.three ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Others
            </td>
            <td className="font-semibold text-[12px]">Corrosion of Steel</td>{" "}
            <td className="font-semibold text-center text-[12px]">1</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c6.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c6.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r1s == 1) {
                  setC6({ ...c6, r1s: 0, r1d: false });
                } else if (editCheck && c6.r1s != 1) {
                  setC6({ ...c6, r1s: 1, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r1s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r1s == 2) {
                  setC6({ ...c6, r1s: 0, r1d: false });
                } else if (editCheck && c6.r1s != 2) {
                  setC6({ ...c6, r1s: 2, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r1s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r1s == 3) {
                  setC6({ ...c6, r1s: 0, r1d: false });
                } else if (editCheck && c6.r1s != 3) {
                  setC6({ ...c6, r1s: 3, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r1s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r1s == 4) {
                  setC6({ ...c6, r1s: 0, r1d: false });
                } else if (editCheck && c6.r1s != 4) {
                  setC6({ ...c6, r1s: 4, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r1s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">L/N</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "6",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c6.r1p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r1p
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
                      compNo: "6",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c6.r1r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r1r
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
                      compNo: "6",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c6.r1rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r1rod
              )}{" "}
            </td>
            {/* rom */}
            <td rowSpan={5} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "6",
                      rowNo: "1",
                      mat: "Steel, Concrete and Others",
                      value: c6.rom1,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c6.rom1
              )}
            </td>
          </tr>
          {/* Parapet row2 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Cracks at Concrete</td>{" "}
            <td className="font-semibold text-center text-[12px]">6</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c6.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c6.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r2s == 1) {
                  setC6({ ...c6, r2s: 0, r2d: false });
                } else if (editCheck && c6.r2s != 1) {
                  setC6({ ...c6, r2s: 1, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r2s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r2s == 2) {
                  setC6({ ...c6, r2s: 0, r2d: false });
                } else if (editCheck && c6.r2s != 2) {
                  setC6({ ...c6, r2s: 2, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r2s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r2s == 3) {
                  setC6({ ...c6, r2s: 0, r2d: false });
                } else if (editCheck && c6.r2s != 3) {
                  setC6({ ...c6, r2s: 3, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r2s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r2s == 4) {
                  setC6({ ...c6, r2s: 0, r2d: false });
                } else if (editCheck && c6.r2s != 4) {
                  setC6({ ...c6, r2s: 4, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r2s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "6",
                      rowNo: "2",
                      mat: "Cracks at Concrete",
                      value: c6.r2p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r2p
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
                      compNo: "6",
                      rowNo: "2",
                      mat: "Cracks at Concrete",
                      value: c6.r2r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r2r
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
                      compNo: "6",
                      rowNo: "2",
                      mat: "Cracks at Concrete",
                      value: c6.r2rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r2rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Parapet row3 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Spalling</td>{" "}
            <td className="font-semibold text-center text-[12px]">7</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c6.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c6.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r3s == 1) {
                  setC6({ ...c6, r3s: 0, r3d: false });
                } else if (editCheck && c6.r3s != 1) {
                  setC6({ ...c6, r3s: 1, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r3s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r3s == 2) {
                  setC6({ ...c6, r3s: 0, r3d: false });
                } else if (editCheck && c6.r3s != 2) {
                  setC6({ ...c6, r3s: 2, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r3s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r3s == 3) {
                  setC6({ ...c6, r3s: 0, r3d: false });
                } else if (editCheck && c6.r3s != 3) {
                  setC6({ ...c6, r3s: 3, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r3s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r3s == 4) {
                  setC6({ ...c6, r3s: 0, r3d: false });
                } else if (editCheck && c6.r3s != 4) {
                  setC6({ ...c6, r3s: 4, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r3s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "6",
                      rowNo: "3",
                      mat: "Spalling",
                      value: c6.r3p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r3p
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
                      compNo: "6",
                      rowNo: "3",
                      mat: "Spalling",
                      value: c6.r3r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r3r
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
                      compNo: "6",
                      rowNo: "3",
                      mat: "Spalling",
                      value: c6.r3rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r3rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Parapet row4 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Impact Damage</td>{" "}
            <td className="font-semibold text-center text-[12px]">22</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c6.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c6.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r4s == 1) {
                  setC6({ ...c6, r4s: 0, r4d: false });
                } else if (editCheck && c6.r4s != 1) {
                  setC6({ ...c6, r4s: 1, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r4s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r4s == 2) {
                  setC6({ ...c6, r4s: 0, r4d: false });
                } else if (editCheck && c6.r4s != 2) {
                  setC6({ ...c6, r4s: 2, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r4s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r4s == 3) {
                  setC6({ ...c6, r4s: 0, r4d: false });
                } else if (editCheck && c6.r4s != 3) {
                  setC6({ ...c6, r4s: 3, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r4s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r4s == 4) {
                  setC6({ ...c6, r4s: 0, r4d: false });
                } else if (editCheck && c6.r4s != 4) {
                  setC6({ ...c6, r4s: 4, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r4s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">L</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "6",
                      rowNo: "4",
                      mat: "Impact Damage",
                      value: c6.r4p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r4p
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
                      compNo: "6",
                      rowNo: "4",
                      mat: "Impact Damage",
                      value: c6.r4r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r4r
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
                      compNo: "6",
                      rowNo: "4",
                      mat: "Impact Damage",
                      value: c6.r4rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r4rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Parapet row5 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Loose Connections</td>{" "}
            <td className="font-semibold text-center text-[12px]">3</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c6.r5d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c6.r5d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r5s == 1) {
                  setC6({ ...c6, r5s: 0, r5d: false });
                } else if (editCheck && c6.r5s != 1) {
                  setC6({ ...c6, r5s: 1, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r5s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r5s == 2) {
                  setC6({ ...c6, r5s: 0, r5d: false });
                } else if (editCheck && c6.r5s != 2) {
                  setC6({ ...c6, r5s: 2, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r5s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r5s == 3) {
                  setC6({ ...c6, r5s: 0, r5d: false });
                } else if (editCheck && c6.r5s != 3) {
                  setC6({ ...c6, r5s: 3, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r5s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c6.r5s == 4) {
                  setC6({ ...c6, r5s: 0, r5d: false });
                } else if (editCheck && c6.r5s != 4) {
                  setC6({ ...c6, r5s: 4, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c6.r5s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">N</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "6",
                      rowNo: "5",
                      mat: "Loose Connections",
                      value: c6.r5p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r5p
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
                      compNo: "6",
                      rowNo: "5",
                      mat: "Loose Connections",
                      value: c6.r5r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r5r
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
                      compNo: "6",
                      rowNo: "5",
                      mat: "Loose Connections",
                      value: c6.r5rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c6.r5rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* END Parapet */}
          {/* START Surfacing */}
          {/* Surfacing row1 */}
          <tr>
            <td
              rowSpan={5}
              className="font-bold text-center text-[12px] relative"
            >
              <span
                onClick={() => {
                  if (editCheck) {
                    setC7({ ...c7, main: !c7.main });
                  }
                }}
                className="absolute top-3 left-2"
              >
                [{c7.main ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>
              SURFACING (Secondary)
            </td>
            <td rowSpan={5} className="font-bold text-center text-[12px]">
              <span
                onClick={() => {
                  if (editCheck) {
                    setC7({ ...c7, one: !c7.one });
                  }
                }}
              >
                [{c7.one ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Asphalt
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC7({ ...c7, two: !c7.two });
                  }
                }}
              >
                [{c7.two ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp;Concrete
            </td>
            <td className="font-semibold text-[12px]">Pot-holes</td>{" "}
            <td className="font-semibold text-center text-[12px]">23</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c7.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c7.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r1s == 1) {
                  setC7({ ...c7, r1s: 0, r1d: false });
                } else if (editCheck && c7.r1s != 1) {
                  setC7({ ...c7, r1s: 1, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r1s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r1s == 2) {
                  setC7({ ...c7, r1s: 0, r1d: false });
                } else if (editCheck && c7.r1s != 2) {
                  setC7({ ...c7, r1s: 2, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r1s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r1s == 3) {
                  setC7({ ...c7, r1s: 0, r1d: false });
                } else if (editCheck && c7.r1s != 3) {
                  setC7({ ...c7, r1s: 3, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r1s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r1s == 4) {
                  setC7({ ...c7, r1s: 0, r1d: false });
                } else if (editCheck && c7.r1s != 4) {
                  setC7({ ...c7, r1s: 4, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r1s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "7",
                      rowNo: "1",
                      mat: "Pot-holes",
                      value: c7.r1p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r1p
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
                      compNo: "7",
                      rowNo: "1",
                      mat: "Pot-holes",
                      value: c7.r1r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r1r
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
                      compNo: "7",
                      rowNo: "1",
                      mat: "Pot-holes",
                      value: c7.r1rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r1rod
              )}{" "}
            </td>
            {/* rom */}
            <td rowSpan={5} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "7",
                      rowNo: "1",
                      mat: "Asphalt and Concrete",
                      value: c7.rom1,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c7.rom1
              )}
            </td>
          </tr>
          {/* Surfacing row2 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Wheel Track Rutting</td>{" "}
            <td className="font-semibold text-center text-[12px]">24</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c7.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c7.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r2s == 1) {
                  setC7({ ...c7, r2s: 0, r2d: false });
                } else if (editCheck && c7.r2s != 1) {
                  setC7({ ...c7, r2s: 1, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r2s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r2s == 2) {
                  setC7({ ...c7, r2s: 0, r2d: false });
                } else if (editCheck && c7.r2s != 2) {
                  setC7({ ...c7, r2s: 2, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r2s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r2s == 3) {
                  setC7({ ...c7, r2s: 0, r2d: false });
                } else if (editCheck && c7.r2s != 3) {
                  setC7({ ...c7, r2s: 3, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r2s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r2s == 4) {
                  setC7({ ...c7, r2s: 0, r2d: false });
                } else if (editCheck && c7.r2s != 4) {
                  setC7({ ...c7, r2s: 4, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r2s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "7",
                      rowNo: "2",
                      mat: "Wheel Track Rutting",
                      value: c7.r2p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r2p
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
                      compNo: "7",
                      rowNo: "2",
                      mat: "Wheel Track Rutting",
                      value: c7.r2r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r2r
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
                      compNo: "7",
                      rowNo: "2",
                      mat: "Wheel Track Rutting",
                      value: c7.r2rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r2rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Surfacing row3 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">
              Loss of Bond and Delamination
            </td>{" "}
            <td className="font-semibold text-center text-[12px]">25</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c7.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c7.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r3s == 1) {
                  setC7({ ...c7, r3s: 0, r3d: false });
                } else if (editCheck && c7.r3s != 1) {
                  setC7({ ...c7, r3s: 1, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r3s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r3s == 2) {
                  setC7({ ...c7, r3s: 0, r3d: false });
                } else if (editCheck && c7.r3s != 2) {
                  setC7({ ...c7, r3s: 2, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r3s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r3s == 3) {
                  setC7({ ...c7, r3s: 0, r3d: false });
                } else if (editCheck && c7.r3s != 3) {
                  setC7({ ...c7, r3s: 3, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r3s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r3s == 4) {
                  setC7({ ...c7, r3s: 0, r3d: false });
                } else if (editCheck && c7.r3s != 4) {
                  setC7({ ...c7, r3s: 4, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r3s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "7",
                      rowNo: "3",
                      mat: "Loss of Bond and Delamination",
                      value: c7.r3p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r3p
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
                      compNo: "7",
                      rowNo: "3",
                      mat: "Loss of Bond and Delamination",
                      value: c7.r3r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r3r
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
                      compNo: "7",
                      rowNo: "3",
                      mat: "Loss of Bond and Delamination",
                      value: c7.r3rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r3rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Surfacing row4 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Rippling</td>{" "}
            <td className="font-semibold text-center text-[12px]">26</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c7.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c7.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r4s == 1) {
                  setC7({ ...c7, r4s: 0, r4d: false });
                } else if (editCheck && c7.r4s != 1) {
                  setC7({ ...c7, r4s: 1, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r4s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r4s == 2) {
                  setC7({ ...c7, r4s: 0, r4d: false });
                } else if (editCheck && c7.r4s != 2) {
                  setC7({ ...c7, r4s: 2, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r4s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r4s == 3) {
                  setC7({ ...c7, r4s: 0, r4d: false });
                } else if (editCheck && c7.r4s != 3) {
                  setC7({ ...c7, r4s: 3, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r4s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r4s == 4) {
                  setC7({ ...c7, r4s: 0, r4d: false });
                } else if (editCheck && c7.r4s != 4) {
                  setC7({ ...c7, r4s: 4, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r4s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "7",
                      rowNo: "4",
                      mat: "Rippling",
                      value: c7.r4p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r4p
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
                      compNo: "7",
                      rowNo: "4",
                      mat: "Rippling",
                      value: c7.r4r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r4r
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
                      compNo: "7",
                      rowNo: "4",
                      mat: "Rippling",
                      value: c7.r4rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r4rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Surfacing row5 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Pavement Crack</td>{" "}
            <td className="font-semibold text-center text-[12px]">27</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c7.r5d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c7.r5d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r5s == 1) {
                  setC7({ ...c7, r5s: 0, r5d: false });
                } else if (editCheck && c7.r5s != 1) {
                  setC7({ ...c7, r5s: 1, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r5s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r5s == 2) {
                  setC7({ ...c7, r5s: 0, r5d: false });
                } else if (editCheck && c7.r5s != 2) {
                  setC7({ ...c7, r5s: 2, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r5s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r5s == 3) {
                  setC7({ ...c7, r5s: 0, r5d: false });
                } else if (editCheck && c7.r5s != 3) {
                  setC7({ ...c7, r5s: 3, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r5s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c7.r5s == 4) {
                  setC7({ ...c7, r5s: 0, r5d: false });
                } else if (editCheck && c7.r5s != 4) {
                  setC7({ ...c7, r5s: 4, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c7.r5s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "7",
                      rowNo: "5",
                      mat: "Pavement Crack",
                      value: c7.r5p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r5p
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
                      compNo: "7",
                      rowNo: "5",
                      mat: "Pavement Crack",
                      value: c7.r5r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r5r
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
                      compNo: "7",
                      rowNo: "5",
                      mat: "Pavement Crack",
                      value: c7.r5rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c7.r5rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* END Surfacing */}
          {/* START EJ */}
          {/* EJ row1 */}
          <tr>
            <td
              rowSpan={5}
              className="font-bold text-center text-[12px] relative"
            >
              <span
                onClick={() => {
                  if (editCheck) {
                    setC8({ ...c8, main: !c8.main });
                  }
                }}
                className="absolute top-3 left-2"
              >
                [{c8.main ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>
              EXPANSION JOINT (Secondary)
            </td>
            <td rowSpan={5} className="font-bold text-center text-[12px]">
              <span
                onClick={() => {
                  if (editCheck) {
                    setC8({ ...c8, one: !c8.one });
                  }
                }}
              >
                [{c8.one ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Asp Plug
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC8({ ...c8, two: !c8.two });
                  }
                }}
              >
                [{c8.two ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Elastomeric
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC8({ ...c8, three: !c8.three });
                  }
                }}
              >
                [{c8.three ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Comp. Seal
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC8({ ...c8, four: !c8.four });
                  }
                }}
              >
                [{c8.four ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp;Buried
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC8({ ...c8, five: !c8.five });
                  }
                }}
              >
                [{c8.five ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Others
            </td>
            <td className="font-semibold text-[12px]">Abnormal Spacing</td>{" "}
            <td className="font-semibold text-center text-[12px]">29</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c8.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c8.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r1s == 1) {
                  setC8({ ...c8, r1s: 0, r1d: false });
                } else if (editCheck && c8.r1s != 1) {
                  setC8({ ...c8, r1s: 1, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r1s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r1s == 2) {
                  setC8({ ...c8, r1s: 0, r1d: false });
                } else if (editCheck && c8.r1s != 2) {
                  setC8({ ...c8, r1s: 2, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r1s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r1s == 3) {
                  setC8({ ...c8, r1s: 0, r1d: false });
                } else if (editCheck && c8.r1s != 3) {
                  setC8({ ...c8, r1s: 3, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r1s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r1s == 4) {
                  setC8({ ...c8, r1s: 0, r1d: false });
                } else if (editCheck && c8.r1s != 4) {
                  setC8({ ...c8, r1s: 4, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r1s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "8",
                      rowNo: "1",
                      mat: "Abnormal Spacing",
                      value: c8.r1p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r1p
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
                      compNo: "8",
                      rowNo: "1",
                      mat: "Abnormal Spacing",
                      value: c8.r1r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r1r
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
                      compNo: "8",
                      rowNo: "1",
                      mat: "Abnormal Spacing",
                      value: c8.r1rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r1rod
              )}{" "}
            </td>
            {/* rom */}
            <td rowSpan={5} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "8",
                      rowNo: "1",
                      mat: "Asp. Plug, Elastomeric, Comp. Seal, Buried, and Others",
                      value: c8.rom1,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c8.rom1
              )}
            </td>
          </tr>
          {/* EJ row2 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Difference in Level</td>{" "}
            <td className="font-semibold text-center text-[12px]">30</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c8.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c8.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r2s == 1) {
                  setC8({ ...c8, r2s: 0, r2d: false });
                } else if (editCheck && c8.r2s != 1) {
                  setC8({ ...c8, r2s: 1, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r2s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r2s == 2) {
                  setC8({ ...c8, r2s: 0, r2d: false });
                } else if (editCheck && c8.r2s != 2) {
                  setC8({ ...c8, r2s: 2, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r2s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r2s == 3) {
                  setC8({ ...c8, r2s: 0, r2d: false });
                } else if (editCheck && c8.r2s != 3) {
                  setC8({ ...c8, r2s: 3, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r2s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r2s == 4) {
                  setC8({ ...c8, r2s: 0, r2d: false });
                } else if (editCheck && c8.r2s != 4) {
                  setC8({ ...c8, r2s: 4, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r2s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">L</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "8",
                      rowNo: "2",
                      mat: "Difference in Level",
                      value: c8.r2p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r2p
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
                      compNo: "8",
                      rowNo: "2",
                      mat: "Difference in Level",
                      value: c8.r2r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r2r
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
                      compNo: "8",
                      rowNo: "2",
                      mat: "Difference in Level",
                      value: c8.r2rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r2rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* EJ row3 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Water Leak</td>{" "}
            <td className="font-semibold text-center text-[12px]">14</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c8.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c8.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r3s == 1) {
                  setC8({ ...c8, r3s: 0, r3d: false });
                } else if (editCheck && c8.r3s != 1) {
                  setC8({ ...c8, r3s: 1, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r3s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r3s == 2) {
                  setC8({ ...c8, r3s: 0, r3d: false });
                } else if (editCheck && c8.r3s != 2) {
                  setC8({ ...c8, r3s: 2, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r3s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r3s == 3) {
                  setC8({ ...c8, r3s: 0, r3d: false });
                } else if (editCheck && c8.r3s != 3) {
                  setC8({ ...c8, r3s: 3, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r3s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r3s == 4) {
                  setC8({ ...c8, r3s: 0, r3d: false });
                } else if (editCheck && c8.r3s != 4) {
                  setC8({ ...c8, r3s: 4, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r3s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "8",
                      rowNo: "3",
                      mat: "Water Leak",
                      value: c8.r3p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r3p
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
                      compNo: "8",
                      rowNo: "3",
                      mat: "Water Leak",
                      value: c8.r3r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r3r
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
                      compNo: "8",
                      rowNo: "3",
                      mat: "Water Leak",
                      value: c8.r3rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r3rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* EJ row4 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">
              Cracking at Exp. Joint
            </td>{" "}
            <td className="font-semibold text-center text-[12px]">28</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c8.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c8.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r4s == 1) {
                  setC8({ ...c8, r4s: 0, r4d: false });
                } else if (editCheck && c8.r4s != 1) {
                  setC8({ ...c8, r4s: 1, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r4s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r4s == 2) {
                  setC8({ ...c8, r4s: 0, r4d: false });
                } else if (editCheck && c8.r4s != 2) {
                  setC8({ ...c8, r4s: 2, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r4s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r4s == 3) {
                  setC8({ ...c8, r4s: 0, r4d: false });
                } else if (editCheck && c8.r4s != 3) {
                  setC8({ ...c8, r4s: 3, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r4s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r4s == 4) {
                  setC8({ ...c8, r4s: 0, r4d: false });
                } else if (editCheck && c8.r4s != 4) {
                  setC8({ ...c8, r4s: 4, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r4s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">L</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "8",
                      rowNo: "4",
                      mat: "Cracking at Exp. Joint",
                      value: c8.r4p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r4p
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
                      compNo: "8",
                      rowNo: "4",
                      mat: "Cracking at Exp. Joint",
                      value: c8.r4r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r4r
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
                      compNo: "8",
                      rowNo: "4",
                      mat: "Cracking at Exp. Joint",
                      value: c8.r4rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r4rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* EJ row5 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Rupture</td>{" "}
            <td className="font-semibold text-center text-[12px]">32</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c8.r5d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c8.r5d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r5s == 1) {
                  setC8({ ...c8, r5s: 0, r5d: false });
                } else if (editCheck && c8.r5s != 1) {
                  setC8({ ...c8, r5s: 1, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r5s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r5s == 2) {
                  setC8({ ...c8, r5s: 0, r5d: false });
                } else if (editCheck && c8.r5s != 2) {
                  setC8({ ...c8, r5s: 2, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r5s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r5s == 3) {
                  setC8({ ...c8, r5s: 0, r5d: false });
                } else if (editCheck && c8.r5s != 3) {
                  setC8({ ...c8, r5s: 3, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r5s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c8.r5s == 4) {
                  setC8({ ...c8, r5s: 0, r5d: false });
                } else if (editCheck && c8.r5s != 4) {
                  setC8({ ...c8, r5s: 4, r5d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c8.r5s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">L</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "8",
                      rowNo: "5",
                      mat: "Rupture",
                      value: c8.r5p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r5p
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
                      compNo: "8",
                      rowNo: "5",
                      mat: "Rupture",
                      value: c8.r5r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r5r
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
                      compNo: "8",
                      rowNo: "5",
                      mat: "Rupture",
                      value: c8.r5rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c8.r5rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* END EJ */}
          {/* START Drainpipe */}
          {/* Drainpipe row1 */}
          <tr>
            <td
              rowSpan={4}
              className="font-bold text-center text-[12px] relative"
            >
              <span
                onClick={() => {
                  if (editCheck) {
                    setC9({ ...c9, main: !c9.main });
                  }
                }}
                className="absolute top-3 left-2"
              >
                [{c9.main ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>
              DRAINPIPES (Secondary)
            </td>
            <td rowSpan={4} className="font-bold text-center text-[12px]">
              <span
                onClick={() => {
                  if (editCheck) {
                    setC9({ ...c9, one: !c9.one });
                  }
                }}
              >
                [{c9.one ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; Steel
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC9({ ...c9, two: !c9.two });
                  }
                }}
              >
                [{c9.two ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp; PVC
            </td>
            <td className="font-semibold text-[12px]">Corrosion of Steel</td>{" "}
            <td className="font-semibold text-center text-[12px]">1</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c9.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c9.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r1s == 1) {
                  setC9({ ...c9, r1s: 0, r1d: false });
                } else if (editCheck && c9.r1s != 1) {
                  setC9({ ...c9, r1s: 1, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r1s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r1s == 2) {
                  setC9({ ...c9, r1s: 0, r1d: false });
                } else if (editCheck && c9.r1s != 2) {
                  setC9({ ...c9, r1s: 2, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r1s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r1s == 3) {
                  setC9({ ...c9, r1s: 0, r1d: false });
                } else if (editCheck && c9.r1s != 3) {
                  setC9({ ...c9, r1s: 3, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r1s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r1s == 4) {
                  setC9({ ...c9, r1s: 0, r1d: false });
                } else if (editCheck && c9.r1s != 4) {
                  setC9({ ...c9, r1s: 4, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r1s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "9",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c9.r1p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c9.r1p
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
                      compNo: "9",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c9.r1r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c9.r1r
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
                      compNo: "9",
                      rowNo: "1",
                      mat: "Corrosion of Steel",
                      value: c9.r1rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c9.r1rod
              )}{" "}
            </td>
            {/* rom */}
            <td rowSpan={4} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "9",
                      rowNo: "1",
                      mat: "Steel and PVC",
                      value: c9.rom1,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c9.rom1
              )}
            </td>
          </tr>
          {/* Drainpipe row2 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Blocked Drainage</td>{" "}
            <td className="font-semibold text-center text-[12px]">20</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c9.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c9.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r2s == 1) {
                  setC9({ ...c9, r2s: 0, r2d: false });
                } else if (editCheck && c9.r2s != 1) {
                  setC9({ ...c9, r2s: 1, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r2s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r2s == 2) {
                  setC9({ ...c9, r2s: 0, r2d: false });
                } else if (editCheck && c9.r2s != 2) {
                  setC9({ ...c9, r2s: 2, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r2s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r2s == 3) {
                  setC9({ ...c9, r2s: 0, r2d: false });
                } else if (editCheck && c9.r2s != 3) {
                  setC9({ ...c9, r2s: 3, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r2s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r2s == 4) {
                  setC9({ ...c9, r2s: 0, r2d: false });
                } else if (editCheck && c9.r2s != 4) {
                  setC9({ ...c9, r2s: 4, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r2s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">N</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "9",
                      rowNo: "2",
                      mat: "Blocked Drainage",
                      value: c9.r2p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c9.r2p
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
                      compNo: "9",
                      rowNo: "2",
                      mat: "Blocked Drainage",
                      value: c9.r2r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c9.r2r
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
                      compNo: "9",
                      rowNo: "2",
                      mat: "Blocked Drainage",
                      value: c9.r2rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c9.r2rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Drainpipe row3 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Water Leak</td>{" "}
            <td className="font-semibold text-center text-[12px]">14</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c9.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c9.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r3s == 1) {
                  setC9({ ...c9, r3s: 0, r3d: false });
                } else if (editCheck && c9.r3s != 1) {
                  setC9({ ...c9, r3s: 1, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r3s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r3s == 2) {
                  setC9({ ...c9, r3s: 0, r3d: false });
                } else if (editCheck && c9.r3s != 2) {
                  setC9({ ...c9, r3s: 2, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r3s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r3s == 3) {
                  setC9({ ...c9, r3s: 0, r3d: false });
                } else if (editCheck && c9.r3s != 3) {
                  setC9({ ...c9, r3s: 3, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r3s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r3s == 4) {
                  setC9({ ...c9, r3s: 0, r3d: false });
                } else if (editCheck && c9.r3s != 4) {
                  setC9({ ...c9, r3s: 4, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r3s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "9",
                      rowNo: "3",
                      mat: "Water Leak",
                      value: c9.r3p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c9.r3p
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
                      compNo: "9",
                      rowNo: "3",
                      mat: "Water Leak",
                      value: c9.r3r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c9.r3r
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
                      compNo: "9",
                      rowNo: "3",
                      mat: "Water Leak",
                      value: c9.r3rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c9.r3rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* Drainpipe row4 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">
              No/Inadequate Pipe Length
            </td>{" "}
            <td className="font-semibold text-center text-[12px]">21</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c9.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c9.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r4s == 1) {
                  setC9({ ...c9, r4s: 0, r4d: false });
                } else if (editCheck && c9.r4s != 1) {
                  setC9({ ...c9, r4s: 1, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r4s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r4s == 2) {
                  setC9({ ...c9, r4s: 0, r4d: false });
                } else if (editCheck && c9.r4s != 2) {
                  setC9({ ...c9, r4s: 2, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r4s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r4s == 3) {
                  setC9({ ...c9, r4s: 0, r4d: false });
                } else if (editCheck && c9.r4s != 3) {
                  setC9({ ...c9, r4s: 3, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r4s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c9.r4s == 4) {
                  setC9({ ...c9, r4s: 0, r4d: false });
                } else if (editCheck && c9.r4s != 4) {
                  setC9({ ...c9, r4s: 4, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c9.r4s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">N</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "9",
                      rowNo: "4",
                      mat: "No/Inadequate Pipe Length",
                      value: c9.r4p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c9.r4p
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
                      compNo: "9",
                      rowNo: "4",
                      mat: "No/Inadequate Pipe Length",
                      value: c9.r4r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c9.r4r
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
                      compNo: "9",
                      rowNo: "4",
                      mat: "No/Inadequate Pipe Length",
                      value: c9.r4rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c9.r4rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* END Drainpipe */}
          {/* START SP */}
          {/* SP row1 */}
          <tr>
            <td
              rowSpan={4}
              className="font-bold text-center text-[12px] relative"
            >
              <span
                onClick={() => {
                  if (editCheck) {
                    setC10({ ...c10, main: !c10.main });
                  }
                }}
                className="absolute top-3 left-2"
              >
                [{c10.main ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>
              Slope Protection / River Bank (Secondary)
            </td>
            <td rowSpan={4} className="font-bold text-center text-[12px]">
              <span
                onClick={() => {
                  if (editCheck) {
                    setC10({ ...c10, one: !c10.one });
                  }
                }}
              >
                [{c10.one ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp;Rble. Pitching
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC10({ ...c10, two: !c10.two });
                  }
                }}
              >
                [{c10.two ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}]
              </span>{" "}
              &nbsp;Gabions
              <br />
              <span
                onClick={() => {
                  if (editCheck) {
                    setC10({ ...c10, three: !c10.three });
                  }
                }}
              >
                [{c10.three ? <span>&#10003;</span> : <span>&nbsp;&nbsp;</span>}
                ]
              </span>{" "}
              &nbsp;Others
            </td>
            <td className="font-semibold text-[12px]">Scouring</td>{" "}
            <td className="font-semibold text-center text-[12px]">17</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c10.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c10.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r1s == 1) {
                  setC10({ ...c10, r1s: 0, r1d: false });
                } else if (editCheck && c10.r1s != 1) {
                  setC10({ ...c10, r1s: 1, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r1s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r1s == 2) {
                  setC10({ ...c10, r1s: 0, r1d: false });
                } else if (editCheck && c10.r1s != 2) {
                  setC10({ ...c10, r1s: 2, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r1s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r1s == 3) {
                  setC10({ ...c10, r1s: 0, r1d: false });
                } else if (editCheck && c10.r1s != 3) {
                  setC10({ ...c10, r1s: 3, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r1s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r1s == 4) {
                  setC10({ ...c10, r1s: 0, r1d: false });
                } else if (editCheck && c10.r1s != 4) {
                  setC10({ ...c10, r1s: 4, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r1s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "10",
                      rowNo: "1",
                      mat: "Scouring",
                      value: c10.r1p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c10.r1p
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
                      compNo: "10",
                      rowNo: "1",
                      mat: "Scouring",
                      value: c10.r1r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c10.r1r
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
                      compNo: "10",
                      rowNo: "1",
                      mat: "Scouring",
                      value: c10.r1rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c10.r1rod
              )}{" "}
            </td>
            {/* rom */}
            <td rowSpan={4} className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "10",
                      rowNo: "1",
                      mat: " Rble. Pitching, Gabions, and Others",
                      value: c10.rom1,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c10.rom1
              )}
            </td>
          </tr>
          {/* SP row2 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">Erosion</td>{" "}
            <td className="font-semibold text-center text-[12px]">35</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c10.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c10.r2d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r2s == 1) {
                  setC10({ ...c10, r2s: 0, r2d: false });
                } else if (editCheck && c10.r2s != 1) {
                  setC10({ ...c10, r2s: 1, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r2s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r2s == 2) {
                  setC10({ ...c10, r2s: 0, r2d: false });
                } else if (editCheck && c10.r2s != 2) {
                  setC10({ ...c10, r2s: 2, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r2s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r2s == 3) {
                  setC10({ ...c10, r2s: 0, r2d: false });
                } else if (editCheck && c10.r2s != 3) {
                  setC10({ ...c10, r2s: 3, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r2s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r2s == 4) {
                  setC10({ ...c10, r2s: 0, r2d: false });
                } else if (editCheck && c10.r2s != 4) {
                  setC10({ ...c10, r2s: 4, r2d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r2s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "10",
                      rowNo: "2",
                      mat: "Erosion",
                      value: c10.r2p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c10.r2p
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
                      compNo: "10",
                      rowNo: "2",
                      mat: "Erosion",
                      value: c10.r2r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c10.r2r
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
                      compNo: "10",
                      rowNo: "2",
                      mat: "Erosion",
                      value: c10.r2rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c10.r2rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* SP row3 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]">
              Material Loss / Disintegration
            </td>{" "}
            <td className="font-semibold text-center text-[12px]">36</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c10.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c10.r3d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r3s == 1) {
                  setC10({ ...c10, r3s: 0, r3d: false });
                } else if (editCheck && c10.r3s != 1) {
                  setC10({ ...c10, r3s: 1, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r3s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r3s == 2) {
                  setC10({ ...c10, r3s: 0, r3d: false });
                } else if (editCheck && c10.r3s != 2) {
                  setC10({ ...c10, r3s: 2, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r3s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r3s == 3) {
                  setC10({ ...c10, r3s: 0, r3d: false });
                } else if (editCheck && c10.r3s != 3) {
                  setC10({ ...c10, r3s: 3, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r3s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r3s == 4) {
                  setC10({ ...c10, r3s: 0, r3d: false });
                } else if (editCheck && c10.r3s != 4) {
                  setC10({ ...c10, r3s: 4, r3d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r3s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */} <td className="text-center text-[12px]">A</td>{" "}
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "10",
                      rowNo: "3",
                      mat: "Material Loss / Disintegration",
                      value: c10.r3p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c10.r3p
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
                      compNo: "10",
                      rowNo: "3",
                      mat: "Material Loss / Disintegration",
                      value: c10.r3r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c10.r3r
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
                      compNo: "10",
                      rowNo: "3",
                      mat: "Material Loss / Disintegration",
                      value: c10.r3rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c10.r3rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* SP row4 */}{" "}
          <tr>
            <td className="font-semibold text-[12px]"></td>{" "}
            <td className="font-semibold text-center text-[12px]"></td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c10.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c10.r4d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r4s == 1) {
                  setC10({ ...c10, r4s: 0, r4d: false });
                } else if (editCheck && c10.r4s != 1) {
                  setC10({ ...c10, r4s: 1, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r4s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r4s == 2) {
                  setC10({ ...c10, r4s: 0, r4d: false });
                } else if (editCheck && c10.r4s != 2) {
                  setC10({ ...c10, r4s: 2, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r4s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r4s == 3) {
                  setC10({ ...c10, r4s: 0, r4d: false });
                } else if (editCheck && c10.r4s != 3) {
                  setC10({ ...c10, r4s: 3, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r4s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c10.r4s == 4) {
                  setC10({ ...c10, r4s: 0, r4d: false });
                } else if (editCheck && c10.r4s != 4) {
                  setC10({ ...c10, r4s: 4, r4d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c10.r4s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}{" "}
            <td className="text-center text-[12px] invisible">A</td>
            <td className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "10",
                      rowNo: "4",
                      mat: "",
                      value: c10.r4p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c10.r4p
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
                      compNo: "10",
                      rowNo: "4",
                      mat: "",
                      value: c10.r4r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c10.r4r
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
                      compNo: "10",
                      rowNo: "4",
                      mat: "",
                      value: c10.r4rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c10.r4rod
              )}{" "}
            </td>{" "}
          </tr>
          {/* END SP */}
          {/* START HC */}
          {/* HC row1 */}
          <tr>
            <td colSpan={2} className="font-bold text-center text-[12px]">
              HYDRAULIC CAPACITY
            </td>
            <td className="font-semibold text-[12px]">Inadequate Opening</td>{" "}
            <td className="font-semibold text-center text-[12px]">38</td>{" "}
            <td className="justify-center items-center">
              {" "}
              {c11.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td className="justify-center items-center">
              {" "}
              {!c11.r1d && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* severity */}{" "}
            <td
              onClick={() => {
                if (editCheck && c11.r1s == 1) {
                  setC11({ ...c11, r1s: 0, r1d: false });
                } else if (editCheck && c11.r1s != 1) {
                  setC11({ ...c11, r1s: 1, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c11.r1s == 1 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c11.r1s == 2) {
                  setC11({ ...c11, r1s: 0, r1d: false });
                } else if (editCheck && c11.r1s != 2) {
                  setC11({ ...c11, r1s: 2, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c11.r1s == 2 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c11.r1s == 3) {
                  setC11({ ...c11, r1s: 0, r1d: false });
                } else if (editCheck && c11.r1s != 3) {
                  setC11({ ...c11, r1s: 3, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c11.r1s == 3 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            <td
              onClick={() => {
                if (editCheck && c11.r1s == 4) {
                  setC11({ ...c11, r1s: 0, r1d: false });
                } else if (editCheck && c11.r1s != 4) {
                  setC11({ ...c11, r1s: 4, r1d: true });
                }
              }}
              className="justify-center items-center"
            >
              {" "}
              {c11.r1s == 4 && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}{" "}
            </td>{" "}
            {/* percentage */}
            <td colSpan={2} className="text-center text-[10px]">
              {" "}
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "p",
                      compNo: "11",
                      rowNo: "1",
                      mat: "Inadequate Opening",
                      value: c11.r1p,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c11.r1p
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
                      compNo: "11",
                      rowNo: "1",
                      mat: "Inadequate Opening",
                      value: c11.r1r,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c11.r1r
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
                      compNo: "11",
                      rowNo: "1",
                      mat: "Inadequate Opening",
                      value: c11.r1rod,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : (
                c11.r1rod
              )}{" "}
            </td>
            {/* rom */}
            <td className="text-center text-[10px]">
              {editCheck ? (
                <button
                  onClick={() => {
                    setEditorMode({
                      ...editorMode,
                      type: "rom",
                      compNo: "11",
                      rowNo: "1",
                      mat: "HYDRAULIC CAPACITY",
                      value: c11.rom1,
                    });
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              ) : (
                c11.rom1
              )}
            </td>
          </tr>
          {/* END HC */}
        </tbody>
      </table>
      <p className="self-start text-[12px]">
        * Legend: A=Area, N=Numbers, L=Length
      </p>
      <table className="mt-4">
        <tbody>
          <tr>
            <td rowSpan={2} className="p-1 text-[14px] font-bold">
              Have all the components been inspected?
            </td>
            <td className="p-1 font-bold text-[12px]">YES</td>
            <td className="p-1 font-bold text-[12px]">NO</td>
          </tr>
          <tr>
            <td
              onClick={() => {
                if (editCheck) setAllComponentsInspected(true);
              }}
              className="justify-center items-center p-1"
            >
              {allComponentsInspected && (
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
                if (editCheck) setAllComponentsInspected(false);
              }}
              className="p-1"
            >
              {!allComponentsInspected && (
                <Image
                  src="/check.png"
                  alt=""
                  width={10}
                  height={10}
                  style={{ alignSelf: "center", margin: "0 auto" }}
                />
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <EditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* <p>{JSON.stringify(editorMode)}</p> */}
        <p className="font-bold text-black mb-2">
          {editorMode.compNo == "1"
            ? "BEAM/GIRDER"
            : editorMode.compNo == "2"
              ? "DECK SLAB"
              : editorMode.compNo == "3"
                ? "ABUTMENT"
                : editorMode.compNo == "4"
                  ? "PIER NO"
                  : editorMode.compNo == "5"
                    ? "BEARING"
                    : editorMode.compNo == "6"
                      ? "PARAPET"
                      : editorMode.compNo == "7"
                        ? "SURFACING"
                        : editorMode.compNo == "8"
                          ? "EXPANSION JOINT"
                          : editorMode.compNo == "9"
                            ? "DRAINPIPES"
                            : editorMode.compNo == "10"
                              ? "SLOPE PROTECTION / RIVER BANK"
                              : editorMode.compNo == "11"
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
