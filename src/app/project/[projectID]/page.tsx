"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Modal from "@/components/Modal";
import EditRatingMemberModal from "@/components/EditRatingMemberModal";
import EditPhotoDetailModal from "@/components/EditPhotoDetailModal";
import { log } from "console";
import PdfToImage from "./PdfToImage";
import Link from "next/link";

import "./styles.css";

const page = ({ params }: any) => {
  const pdfUrl = "/uploads/2024-12-09-13-35-10-0pdf.pdf";
  // const pdfUrl =
  //   'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  const { projectID } = params;
  const [data, setData] = useState<any>([]);

  const [locationData, setLocationData] = useState<any>({
    l_routeNo: "",
    l_structureNo: "",
    l_riverOrBridgeName: "",
    l_district: "",
    l_state: "",
  });

  const [bridgeData, setBridgeData] = useState<any>({
    b_systemType: "",
    b_deckType: "",
    b_abutmentType: "",
    b_pierType: "",
  });

  const [c0, setC0] = useState({
    main: false,
    one: false,
    two: false,
    three: false,
  });
  const [c1, setC1] = useState({
    main: false,
    one: false,
    two: false,
  });
  const [c2, setC2] = useState({
    main: false,
    one: false,
    two: false,
  });
  const [c3, setC3] = useState({
    main: false,
    one: false,
    two: false,
  });
  const [c4, setC4] = useState({
    main: false,
    one: false,
    two: false,
  });
  const [c5, setC5] = useState({
    main: false,
    one: false,
    two: false,
  });
  const [c6, setC6] = useState({
    main: false,
    one: false,
    two: false,
    three: false,
  });
  const [c7, setC7] = useState({
    main: false,
    one: false,
    two: false,
  });
  const [c8, setC8] = useState({
    main: false,
    one: false,
    two: false,
    three: false,
  });
  const [c9, setC9] = useState({
    main: false,
    one: false,
    two: false,
    three: false,
  });
  const [c10, setC10] = useState({
    main: false,
    one: false,
    two: false,
    three: false,
  });

  const [majorDamageBeam, setMajorDamageBeam] = useState("");
  const [majorDamageDeck, setMajorDamageDeck] = useState("");
  const [majorDamageAbutment, setMajorDamageAbutment] = useState("");
  const [majorDamagePier, setMajorDamagePier] = useState("");
  const [majorDamageBearing, setMajorDamageBearing] = useState("");
  const [majorDamageParapet, setMajorDamageParapet] = useState("");
  const [majorDamageSurfacing, setMajorDamageSurfacing] = useState("");
  const [majorDamageExpansionJoint, setMajorDamageExpansionJoint] =
    useState("");
  const [majorDamageDrainpipe, setMajorDamageDrainpipe] = useState("");
  const [majorDamageSlopeProtection, setMajorDamageSlopeProtection] =
    useState("");
  const [majorDamageHydraulic, setMajorDamageHydraulic] = useState("");

  const [maintenanceBeam, setMaintenanceBeam] = useState("");
  const [maintenanceDeck, setMaintenanceDeck] = useState("");
  const [maintenanceAbutment, setMaintenanceAbutment] = useState("");
  const [maintenancePier, setMaintenancePier] = useState("");
  const [maintenanceBearing, setMaintenanceBearing] = useState("");
  const [maintenanceParapet, setMaintenanceParapet] = useState("");
  const [maintenanceSurfacing, setMaintenanceSurfacing] = useState("");
  const [maintenanceExpansionJoint, setMaintenanceExpansionJoint] =
    useState("");
  const [maintenanceDrainpipe, setMaintenanceDrainpipe] = useState("");
  const [maintenanceSlopeProtection, setMaintenanceSlopeProtection] =
    useState("");
  const [maintenanceHydraulic, setMaintenanceHydraulic] = useState("");

  const [maxOldRating, setMaxOldRating] = useState<any>({
    c0: 0,
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    c9: 0,
    c10: 0,
  });

  const [maxNewRating, setMaxNewRating] = useState<any>({
    c0: 0,
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    c9: 0,
    c10: 0,
  });

  const getSubmittedForms = async () => {
    try {
      const response = await fetch(`/api/projectdetails/${projectID}`);

      // if (!response.ok) {
      //   // throw new Error("Failed to fetch data");
      //   alert('Failed to fetch data')
      // }

      const result = await response.json();
      console.log("result data", JSON.stringify(result));

      let testString = "a";

      if (result.data) {
        // alert("testt")
        console.log("result.data", JSON.stringify(result.data));

        setLocationData({
          l_routeNo: result.data.l_routeNo,
          l_structureNo: result.data.l_structureNo,
          l_riverOrBridgeName: result.data.l_riverOrBridgeName,
          l_district: result.data.l_district,
          l_state: result.data.l_state,
        });
        setBridgeData({
          b_systemType: result.data.b_systemType,
          b_deckType: result.data.b_deckType,
          b_abutmentType: result.data.b_abutmentType,
          b_pierType: result.data.b_pierType,
        });

        setC0({
          ...c0,
          main: result.data.beamGirder_tick,
          one: result.data.beamGirder_steel_tick,
          two: result.data.beamGirder_pconcrete_tick,
          three: result.data.beamGirder_rconcrete_tick,
        });
        setC1({
          ...c1,
          main: result.data.deckSlab_tick,
          one: result.data.deckSlab_steel_tick,
          two: result.data.deckSlab_concrete_tick,
        });
        setC2({
          ...c2,
          main: result.data.pier_tick,
          one: result.data.pier_concrete_tick,
          two: result.data.pier_masonry_tick,
        });
        setC3({
          ...c3,
          main: result.data.abutment_tick,
          one: result.data.abutment_concrete_tick,
          two: result.data.abutment_masonry_tick,
        });
        setC4({
          ...c4,
          main: result.data.bearing_tick,
          one: result.data.bearing_steel_tick,
          two: result.data.bearing_rubber_tick,
        });
        setC5({
          ...c5,
          main: result.data.drainpipe_tick,
          one: result.data.drainpipe_steel_tick,
          two: result.data.drainpipe_pvc_tick,
        });
        setC6({
          ...c6,
          main: result.data.parapet_tick,
          one: result.data.parapet_steel_tick,
          two: result.data.parapet_concrete_tick,
          three: result.data.parapet_others_tick,
        });
        setC7({
          ...c7,
          main: result.data.surfacing_tick,
          one: result.data.surfacing_asphalt_tick,
          two: result.data.surfacing_concrete_tick,
        });
        setC8({
          ...c8,
          main: result.data.expansionJoint_tick,
          one: result.data.expansionJoint_asphaltPlug_tick,
          two: result.data.expansionJoint_elastomeric_tick,
          three: result.data.expansionJoint_others_tick,
        });
        setC9({
          ...c9,
          main: result.data.slopeProtection_tick,
          one: result.data.slopeProtection_rubblePitching_tick,
          two: result.data.slopeProtection_gabions_tick,
          three: result.data.slopeProtection_others_tick,
        });
        setC10({
          ...c10,
          main: result.data.culvert_tick,
          one: result.data.culvert_steel_tick,
          two: result.data.culvert_concrete_tick,
          three: result.data.culvert_masonry_tick,
        });

        setMajorDamageBeam(result.data.beamGirder_majorDamages);
        setMajorDamageDeck(result.data.deckSlab_majorDamages);
        setMajorDamagePier(result.data.pier_majorDamages);
        setMajorDamageAbutment(result.data.abutment_majorDamages);
        setMajorDamageBearing(result.data.bearing_majorDamages);
        setMajorDamageDrainpipe(result.data.drainpipe_majorDamages);
        setMajorDamageParapet(result.data.parapet_majorDamages);
        setMajorDamageSurfacing(result.data.surfacing_majorDamages);
        setMajorDamageExpansionJoint(result.data.expansionJoint_majorDamages);
        setMajorDamageSlopeProtection(result.data.slopeProtection_majorDamages);
        setMajorDamageHydraulic(result.data.culvert_majorDamages);

        setMaintenanceBeam(result.data.beamGirder_maintenanceWorkRequired);
        setMaintenanceDeck(result.data.deckSlab_maintenanceWorkRequired);
        setMaintenancePier(result.data.pier_maintenanceWorkRequired);
        setMaintenanceAbutment(result.data.abutment_maintenanceWorkRequired);
        setMaintenanceBearing(result.data.bearing_maintenanceWorkRequired);
        setMaintenanceDrainpipe(result.data.drainpipe_maintenanceWorkRequired);
        setMaintenanceParapet(result.data.parapet_maintenanceWorkRequired);
        setMaintenanceSurfacing(result.data.surfacing_maintenanceWorkRequired);
        setMaintenanceExpansionJoint(
          result.data.expansionJoint_maintenanceWorkRequired,
        );
        setMaintenanceSlopeProtection(
          result.data.slopeProtection_maintenanceWorkRequired,
        );
        setMaintenanceHydraulic(result.data.culvert_maintenanceWorkRequired);
        setMaxOldRating({
          c0: result.data.beamGirder_oldRating
            ? result.data.beamGirder_oldRating
            : 0,
          c1: result.data.deckSlab_oldRating
            ? result.data.deckSlab_oldRating
            : 0,
          c2: result.data.pier_oldRating ? result.data.pier_oldRating : 0,
          c3: result.data.abutment_oldRating
            ? result.data.abutment_oldRating
            : 0,
          c4: result.data.bearing_oldRating ? result.data.bearing_oldRating : 0,
          c5: result.data.drainpipe_oldRating
            ? result.data.drainpipe_oldRating
            : 0,
          c6: result.data.parapet_oldRating ? result.data.parapet_oldRating : 0,
          c7: result.data.surfacing_oldRating
            ? result.data.surfacing_oldRating
            : 0,
          c8: result.data.expansionJoint_oldRating
            ? result.data.expansionJoint_oldRating
            : 0,
          c9: result.data.slopeProtection_oldRating
            ? result.data.slopeProtection_oldRating
            : 0,
          c10: result.data.culvert_oldRating
            ? result.data.culvert_oldRating
            : 0,
        });
        setMaxNewRating({
          c0: result.data.beamGirder_newRating
            ? result.data.beamGirder_newRating
            : 0,
          c1: result.data.deckSlab_newRating
            ? result.data.deckSlab_newRating
            : 0,
          c2: result.data.pier_newRating ? result.data.pier_newRating : 0,
          c3: result.data.abutment_newRating
            ? result.data.abutment_newRating
            : 0,
          c4: result.data.bearing_newRating ? result.data.bearing_newRating : 0,
          c5: result.data.drainpipe_newRating
            ? result.data.drainpipe_newRating
            : 0,
          c6: result.data.parapet_newRating ? result.data.parapet_newRating : 0,
          c7: result.data.surfacing_newRating
            ? result.data.surfacing_newRating
            : 0,
          c8: result.data.expansionJoint_newRating
            ? result.data.expansionJoint_newRating
            : 0,
          c9: result.data.slopeProtection_newRating
            ? result.data.slopeProtection_newRating
            : 0,
          c10: result.data.culvert_newRating
            ? result.data.culvert_newRating
            : 0,
        });
        setData(result.data);
      }
    } catch (error: any) {
      console.log(error);
      // throw new Error(error);
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

    fd.append(`id`, data.id);

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
      // throw error;
    }
  };

  const handleUploadPDF = async () => {
    const fd = new FormData();

    let thisarray = [...selectedFiles];

    thisarray.forEach((item, index) => {
      fd.append(`files${index}`, thisarray[index]);
    });

    fd.append(`id`, data.id);

    try {
      const response = await fetch("/api/uploadtemplatepdf", {
        method: "post",
        body: fd,
      });

      const json = await response.json();

      console.log("JSON: ", JSON.stringify(json, null, 2));

      if (json.success) {
        window.location.reload();
      } else {
        alert("fail to upload image");
      }
    } catch (error: any) {
      console.log(error.message);
      // throw error;
    }
  };

  const [editForm, setEditForm] = useState(0);
  const [editComponent, setEditComponent] = useState(0);
  const [editMaterial, setEditMaterial] = useState(0);

  const [editValue, setEditValue] = useState("");
  const [editModalVis, setEditModalVis] = useState(false);
  const [editModalVis2, setEditModalVis2] = useState(false);

  const [editForm2, setEditForm2] = useState(0);
  const [editImageArrayIndex, setEditImageArrayIndex] = useState(0);
  const [editImageIndex, setEditImageIndex] = useState(0);
  const [editValue2, setEditValue2] = useState({});

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
        console.log("json", JSON.stringify(json.newdata));

        if (json?.success === "success") {
          // window.location.reload()
          setData([json?.newdata]);
        } else {
          alert("Fail to update. Please try again later.");
        }
      })
      .catch((error) => console.log("ERROR", error));
  };

  const updateForm2 = (imageIndex: any, form: any, id: any) => {
    console.log(JSON.stringify(imageIndex));
    console.log(form);
    console.log(JSON.stringify(id));

    var fd = new FormData();

    fd.append("imageIndex", JSON.stringify(imageIndex));
    fd.append("form", form);
    fd.append("id", JSON.stringify(id));

    fetch("/api/updatephotodetail", {
      method: "PUT",
      body: fd,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("json", JSON.stringify(json, null, 2));

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
    material_rating: any,
  ) => {
    //ambik yg lama
    let thisdata = [...data];
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
        ].tick,
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
            ].severity_of_damage,
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

    // console.log(
    //   JSON.stringify(
    //     JSON.parse(thisMaterial[component].structure).component.material[
    //       material
    //     ].type_of_damages[type_of_damages].severity_of_damage
    //   )
    // );

    thisdata[index].formdata = JSON.stringify(thisMaterial);
    //balik

    updateForm(thisdata[index].formdata, thisdata[index].id);
    // console.log(thisdata[index]);
    // console.log(JSON.stringify(thisMaterial));

    // set to the original list to FE
    // setFormList(thisMaterial);
  };

  return (
    <div className="flex flex-col p-20 justify-center items-center">
      {/* {data && JSON.stringify(data.length)} */}
      <div className="w-full mb-8">
        <div className="flex flex-row items-center w-full">
          <div className="w-1/2 flex flex-row items-center mb-6 no-print">
            <div className="w-8/12 flex-row justify-between items-center">
              <div className="flex-row justify-between items-center mb-4">
                <p className="font-bold mb-2 no-print">
                  Add Defect Mapping (Image)
                </p>
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
                <button
                  className="bg-blue-400 text-white font-bold px-6 py-3 rounded-xl ml-3"
                  onClick={handleUpload}
                >
                  Upload Image {JSON.stringify(selectedFiles)}
                </button>
              </div>

              <div className="flex-row justify-between items-center">
                <p className="font-bold mb-2">Add Defect Mapping (PDF)</p>
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
                <button
                  className="bg-blue-400 text-white font-bold px-6 py-3 rounded-xl ml-3"
                  onClick={handleUploadPDF}
                >
                  Upload PDF {JSON.stringify(selectedFiles)}
                </button>
              </div>
            </div>
          </div>
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
        </div>
      </div>
      <div className="w-full mb-4">
        <h1 className="font-bold text-center">ROUTINE CONDITION INSPECTION</h1>
        <p className="font-bold text-center">- Summary Report Form -</p>
        <div className="mt-4">
          <p className="font-semibold mb-1">Location Data:</p>
          <table className="w-full mb-3">
            <tbody>
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p className="">
                    Route No:{" "}
                    <span className="font-bold">
                      {editCheck ? (
                        <textarea
                          className="w-full text-center"
                          value={locationData.l_routeNo}
                          onChange={(e) =>
                            setLocationData({
                              ...locationData,
                              l_routeNo: e.target.value,
                            })
                          }
                          style={{ height: 100 }}
                        />
                      ) : (
                        locationData.l_routeNo
                      )}
                    </span>
                  </p>
                </td>
                <td colSpan={2} className="border border-black p-2">
                  <p className="">
                    River/Bridge Name:{" "}
                    <span className="font-bold">
                      {editCheck ? (
                        <textarea
                          className="w-full text-center"
                          value={locationData.l_riverOrBridgeName}
                          onChange={(e) =>
                            setLocationData({
                              ...locationData,
                              l_riverOrBridgeName: e.target.value,
                            })
                          }
                          style={{ height: 100 }}
                        />
                      ) : (
                        locationData.l_riverOrBridgeName
                      )}
                    </span>
                  </p>
                </td>
              </tr>
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p className="">
                    Structure No:{" "}
                    <span className="font-bold">
                      {editCheck ? (
                        <textarea
                          className="w-full text-center"
                          value={locationData.l_structureNo}
                          onChange={(e) =>
                            setLocationData({
                              ...locationData,
                              l_structureNo: e.target.value,
                            })
                          }
                          style={{ height: 100 }}
                        />
                      ) : (
                        locationData.l_structureNo
                      )}
                    </span>
                  </p>
                </td>
                <td className="border border-black p-2">
                  <p className="">
                    Disctrict:{" "}
                    <span className="font-bold">
                      {editCheck ? (
                        <textarea
                          className="w-full text-center"
                          value={locationData.l_district}
                          onChange={(e) =>
                            setLocationData({
                              ...locationData,
                              l_district: e.target.value,
                            })
                          }
                          style={{ height: 100 }}
                        />
                      ) : (
                        locationData.l_district
                      )}
                    </span>
                  </p>
                </td>
                <td className="border border-black p-2">
                  <p className="">
                    State:{" "}
                    <span className="font-bold">
                      {editCheck ? (
                        <textarea
                          className="w-full text-center"
                          value={locationData.l_state}
                          onChange={(e) =>
                            setLocationData({
                              ...locationData,
                              l_state: e.target.value,
                            })
                          }
                          style={{ height: 100 }}
                        />
                      ) : (
                        locationData.l_state
                      )}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="font-semibold mb-1">Bridge Type:</p>
          <table className="w-full mb-3">
            <tbody>
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p className="">System Type: </p>
                </td>
                <td className="border border-black p-2">
                  <p className="font-bold">
                    {editCheck ? (
                      <textarea
                        className="w-full text-center"
                        value={bridgeData.b_systemType}
                        onChange={(e) =>
                          setBridgeData({
                            ...bridgeData,
                            b_systemType: e.target.value,
                          })
                        }
                        style={{ height: 100 }}
                      />
                    ) : (
                      bridgeData.b_systemType
                    )}
                  </p>
                </td>
                <td className="border border-black p-2">
                  <p className="">Deck Type: </p>
                </td>
                <td className="border border-black p-2">
                  <p className="font-bold">
                    {editCheck ? (
                      <textarea
                        className="w-full text-center"
                        value={bridgeData.b_deckType}
                        onChange={(e) =>
                          setBridgeData({
                            ...bridgeData,
                            b_deckType: e.target.value,
                          })
                        }
                        style={{ height: 100 }}
                      />
                    ) : (
                      bridgeData.b_deckType
                    )}
                  </p>
                </td>
              </tr>
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <p className="">Abutment Type: </p>
                </td>
                <td className="border border-black p-2">
                  <p className="font-bold">
                    {editCheck ? (
                      <textarea
                        className="w-full text-center"
                        value={bridgeData.b_abutmentType}
                        onChange={(e) =>
                          setBridgeData({
                            ...bridgeData,
                            b_abutmentType: e.target.value,
                          })
                        }
                        style={{ height: 100 }}
                      />
                    ) : (
                      bridgeData.b_abutmentType
                    )}
                  </p>
                </td>
                <td className="border border-black p-2">
                  <p className="">Pier Type: </p>
                </td>
                <td className="border border-black p-2">
                  <p className="font-bold">
                    {editCheck ? (
                      <textarea
                        className="w-full text-center"
                        value={bridgeData.b_pierType}
                        onChange={(e) =>
                          setBridgeData({
                            ...bridgeData,
                            b_pierType: e.target.value,
                          })
                        }
                        style={{ height: 100 }}
                      />
                    ) : (
                      bridgeData.b_pierType
                    )}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="font-semibold mb-1">Summary Report:</p>
          <table className="w-full bottom-space1">
            <thead>
              <tr className="border border-black">
                <th
                  rowSpan={2}
                  colSpan={2}
                  className="border border-black bg-gray-300"
                >
                  <p className="font-bold">BRIDGE MEMBER</p>
                </th>
                <th colSpan={2} className="border border-black bg-gray-300">
                  <p className="font-bold">RATING</p>
                </th>
                <th rowSpan={2} className="border border-black bg-gray-300">
                  <p className="font-bold">MAJOR DAMAGES</p>
                </th>
                <th rowSpan={2} className="border border-black bg-gray-300">
                  <p className="font-bold">MAINTENANCE WORK REQUIRED</p>
                </th>
              </tr>
              <tr className="border border-black">
                <th className="border border-black bg-gray-300">
                  <p className="font-bold">OLD</p>
                </th>
                <th className="border border-black bg-gray-300">
                  <p className="font-bold">NEW</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {data &&
        data.map((item: any, index: any) => {
          // console.log("item " + index, JSON.parse(item.formdata));
          
          return (
            <tr className="border border-black">
              <td className="border border-black">
                <p></p>
              </td>
            </tr>
          )})} */}

              {/* Component 0 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC0({ ...c0, main: !c0.main }) : null;
                    }}
                    className="flex flex-row justify-start items-center"
                  >
                    {c0.main && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p>Beam/Girder</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC0({ ...c0, one: !c0.one }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c0.one && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Steel</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC0({ ...c0, two: !c0.two }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c0.two && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">P. Concrete</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC0({ ...c0, three: !c0.three }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c0.three && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">R. Concrete</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxOldRating.c0}
                      onChange={(e) =>
                        setMaxOldRating({ ...maxOldRating, c0: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxOldRating.c0}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxNewRating.c0}
                      onChange={(e) =>
                        setMaxNewRating({ ...maxNewRating, c0: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxNewRating.c0}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={majorDamageBeam}
                      onChange={(e) => setMajorDamageBeam(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{majorDamageBeam}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maintenanceBeam}
                      onChange={(e) => setMaintenanceBeam(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maintenanceBeam}</p>
                  )}
                </td>
              </tr>

              {/* Component 1 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC1({ ...c1, main: !c1.main }) : null;
                    }}
                    className="flex flex-row justify-start items-center"
                  >
                    {c1.main && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p>Deck/Slab</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC1({ ...c1, one: !c1.one }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c1.one && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Steel</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC1({ ...c1, two: !c1.two }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c1.two && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Concrete</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxOldRating.c1}
                      onChange={(e) =>
                        setMaxOldRating({ ...maxOldRating, c1: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxOldRating.c1}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxNewRating.c1}
                      onChange={(e) =>
                        setMaxNewRating({ ...maxNewRating, c1: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxNewRating.c1}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={majorDamageDeck}
                      onChange={(e) => setMajorDamageDeck(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{majorDamageDeck}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maintenanceDeck}
                      onChange={(e) => setMaintenanceDeck(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maintenanceDeck}</p>
                  )}
                </td>
              </tr>

              {/* Component 2 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC2({ ...c2, main: !c2.main }) : null;
                    }}
                    className="flex flex-row justify-start items-center"
                  >
                    {c2.main && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p>Pier</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC2({ ...c2, one: !c2.one }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c2.one && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Concrete</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC2({ ...c2, two: !c2.two }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c2.two && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Masonry</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxOldRating.c2}
                      onChange={(e) =>
                        setMaxOldRating({ ...maxOldRating, c2: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxOldRating.c2}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxNewRating.c2}
                      onChange={(e) =>
                        setMaxNewRating({ ...maxNewRating, c2: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxNewRating.c2}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={majorDamagePier}
                      onChange={(e) => setMajorDamagePier(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{majorDamagePier}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maintenancePier}
                      onChange={(e) => setMaintenancePier(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maintenancePier}</p>
                  )}
                </td>
              </tr>

              {/* Component 3 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC3({ ...c3, main: !c3.main }) : null;
                    }}
                    className="flex flex-row justify-start items-center"
                  >
                    {c3.main && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p>Abutment</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC3({ ...c3, one: !c3.one }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c3.one && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Concrete</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC3({ ...c3, two: !c3.two }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c3.two && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Masonry</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxOldRating.c3}
                      onChange={(e) =>
                        setMaxOldRating({ ...maxOldRating, c3: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxOldRating.c3}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxNewRating.c3}
                      onChange={(e) =>
                        setMaxNewRating({ ...maxNewRating, c3: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxNewRating.c3}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={majorDamageAbutment}
                      onChange={(e) => setMajorDamageAbutment(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{majorDamageAbutment}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maintenanceAbutment}
                      onChange={(e) => setMaintenanceAbutment(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maintenanceAbutment}</p>
                  )}
                </td>
              </tr>

              {/* Component 4 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC4({ ...c4, main: !c4.main }) : null;
                    }}
                    className="flex flex-row justify-start items-center"
                  >
                    {c4.main && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p>Bearing</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC4({ ...c4, one: !c4.one }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c4.one && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Steel</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC4({ ...c4, two: !c4.two }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c4.two && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Rubber</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxOldRating.c4}
                      onChange={(e) =>
                        setMaxOldRating({ ...maxOldRating, c4: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxOldRating.c4}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxNewRating.c4}
                      onChange={(e) =>
                        setMaxNewRating({ ...maxNewRating, c4: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxNewRating.c4}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={majorDamageBearing}
                      onChange={(e) => setMajorDamageBearing(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{majorDamageBearing}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maintenanceBearing}
                      onChange={(e) => setMaintenanceBearing(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maintenanceBearing}</p>
                  )}
                </td>
              </tr>

              {/* Component 5 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC5({ ...c5, main: !c5.main }) : null;
                    }}
                    className="flex flex-row justify-start items-center"
                  >
                    {c5.main && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p>Drainpipe</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC5({ ...c5, one: !c5.one }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c5.one && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Steel</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC5({ ...c5, two: !c5.two }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c5.two && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">PVC</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxOldRating.c5}
                      onChange={(e) =>
                        setMaxOldRating({ ...maxOldRating, c5: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxOldRating.c5}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxNewRating.c5}
                      onChange={(e) =>
                        setMaxNewRating({ ...maxNewRating, c5: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxNewRating.c5}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={majorDamageDrainpipe}
                      onChange={(e) => setMajorDamageDrainpipe(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{majorDamageDrainpipe}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maintenanceDrainpipe}
                      onChange={(e) => setMaintenanceDrainpipe(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maintenanceDrainpipe}</p>
                  )}
                </td>
              </tr>

              {/* Component 6 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC6({ ...c6, main: !c6.main }) : null;
                    }}
                    className="flex flex-row justify-start items-center"
                  >
                    {c6.main && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p>Parapet</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC6({ ...c6, one: !c6.one }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c6.one && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Steel</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC6({ ...c6, two: !c6.two }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c6.two && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Concrete</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC6({ ...c6, three: !c6.three }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c6.three && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Others</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxOldRating.c6}
                      onChange={(e) =>
                        setMaxOldRating({ ...maxOldRating, c6: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxOldRating.c6}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxNewRating.c6}
                      onChange={(e) =>
                        setMaxNewRating({ ...maxNewRating, c6: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxNewRating.c6}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={majorDamageParapet}
                      onChange={(e) => setMajorDamageParapet(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{majorDamageParapet}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maintenanceParapet}
                      onChange={(e) => setMaintenanceParapet(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maintenanceParapet}</p>
                  )}
                </td>
              </tr>

              {/* Component 7 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC7({ ...c7, main: !c7.main }) : null;
                    }}
                    className="flex flex-row justify-start items-center"
                  >
                    {c7.main && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p>Surfacing</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC7({ ...c7, one: !c7.one }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c7.one && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Asphalt</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC7({ ...c7, two: !c7.two }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c7.two && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Concrete</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxOldRating.c7}
                      onChange={(e) =>
                        setMaxOldRating({ ...maxOldRating, c7: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxOldRating.c7}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxNewRating.c7}
                      onChange={(e) =>
                        setMaxNewRating({ ...maxNewRating, c7: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxNewRating.c7}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={majorDamageSurfacing}
                      onChange={(e) => setMajorDamageSurfacing(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{majorDamageSurfacing}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maintenanceSurfacing}
                      onChange={(e) => setMaintenanceSurfacing(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maintenanceSurfacing}</p>
                  )}
                </td>
              </tr>

              {/* Component 8 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC8({ ...c8, main: !c8.main }) : null;
                    }}
                    className="flex flex-row justify-start items-center"
                  >
                    {c8.main && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p>Expansion Joint</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC8({ ...c8, one: !c8.one }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c8.one && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Asphaltic Plug</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC8({ ...c8, two: !c8.two }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c8.two && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Elastomeric</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC8({ ...c8, three: !c8.three }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c8.three && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Others</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxOldRating.c8}
                      onChange={(e) =>
                        setMaxOldRating({ ...maxOldRating, c8: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxOldRating.c8}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxNewRating.c8}
                      onChange={(e) =>
                        setMaxNewRating({ ...maxNewRating, c8: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxNewRating.c8}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={majorDamageExpansionJoint}
                      onChange={(e) =>
                        setMajorDamageExpansionJoint(e.target.value)
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{majorDamageExpansionJoint}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maintenanceExpansionJoint}
                      onChange={(e) =>
                        setMaintenanceExpansionJoint(e.target.value)
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maintenanceExpansionJoint}</p>
                  )}
                </td>
              </tr>

              {/* Component 9 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC9({ ...c9, main: !c9.main }) : null;
                    }}
                    className="flex flex-row justify-start items-center"
                  >
                    {c9.main && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p>Slope Protection</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC9({ ...c9, one: !c9.one }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c9.one && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Rubble Pitching</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC9({ ...c9, two: !c9.two }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c9.two && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Gabions</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC9({ ...c9, three: !c9.three }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c9.three && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Others</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxOldRating.c9}
                      onChange={(e) =>
                        setMaxOldRating({ ...maxOldRating, c9: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxOldRating.c9}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxNewRating.c9}
                      onChange={(e) =>
                        setMaxNewRating({ ...maxNewRating, c9: e.target.value })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxNewRating.c9}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={majorDamageSlopeProtection}
                      onChange={(e) =>
                        setMajorDamageSlopeProtection(e.target.value)
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{majorDamageSlopeProtection}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maintenanceSlopeProtection}
                      onChange={(e) =>
                        setMaintenanceSlopeProtection(e.target.value)
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maintenanceSlopeProtection}</p>
                  )}
                </td>
              </tr>

              {/* Component 10 */}
              <tr className="border border-black">
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC10({ ...c10, main: !c10.main }) : null;
                    }}
                    className="flex flex-row justify-start items-center"
                  >
                    {c10.main && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p>Culvert</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  <div
                    onClick={() => {
                      editCheck ? setC10({ ...c10, one: !c10.one }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c10.one && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Steel</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC10({ ...c10, two: !c10.two }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c10.two && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Concrete</p>
                  </div>
                  <div
                    onClick={() => {
                      editCheck ? setC10({ ...c10, three: !c10.three }) : null;
                    }}
                    className="flex flex-row justify-normal items-center"
                  >
                    {c10.three && (
                      <Image
                        src="/check.png"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          alignSelf: "center",
                        }}
                        className="mx-auto print:w-[5px] print:h-[5px]"
                      />
                    )}
                    <p className="text-center">Masonry</p>
                  </div>
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxOldRating.c10}
                      onChange={(e) =>
                        setMaxOldRating({
                          ...maxOldRating,
                          c10: e.target.value,
                        })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxOldRating.c10}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maxNewRating.c10}
                      onChange={(e) =>
                        setMaxNewRating({
                          ...maxNewRating,
                          c10: e.target.value,
                        })
                      }
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maxNewRating.c10}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={majorDamageHydraulic}
                      onChange={(e) => setMajorDamageHydraulic(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{majorDamageHydraulic}</p>
                  )}
                </td>
                <td className="border border-black p-2">
                  {editCheck ? (
                    <textarea
                      className="w-full text-center"
                      value={maintenanceHydraulic}
                      onChange={(e) => setMaintenanceHydraulic(e.target.value)}
                      style={{ height: 100 }}
                    />
                  ) : (
                    <p className="text-center">{maintenanceHydraulic}</p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full mb-4">
        <button className="bg-blue-500 px-6 py-2 rounded-lg">
          <Link href={`/project/${projectID}/formpage/1`}>
            <p className="text-white">Form Pages</p>
          </Link>
        </button>
      </div>
      <div className="w-full">
        <button className="bg-blue-500 px-6 py-2 rounded-lg">
          <Link href={`/project/${projectID}/photos`}>
            <p className="text-white">Photos</p>
          </Link>
        </button>
      </div>

      {/* {JSON.parse(data[0]?.properimages).map((item, index) => {
        return (
          <>
            <img
              src={`/uploads/${item}`}
              alt=""
              style={{
                width:"50%",
                height:"50%",
              }}
            />
          </>
        );
      })} */}

      {editModalVis && (
        <EditRatingMemberModal
          value={editValue}
          pressOK={(value: any) => {
            let thisform = [...data];

            let thisstructure = JSON.parse(
              JSON.parse(thisform[editForm].formdata)[editComponent].structure,
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

      {editModalVis2 && (
        <EditPhotoDetailModal
          arrayIndex={editImageArrayIndex}
          imageIndex={editImageIndex}
          value={editValue2}
          pressOK={(value: any) => {
            // console.log(value);

            let thisform = [...data];

            let thisdetail = [];

            if (editImageArrayIndex === 1) {
              thisform[editForm2].images_detail1;

              thisdetail = JSON.parse(thisform[editForm2].images_detail1);

              // console.log("thisdetail 1", JSON.stringify(thisdetail));

              thisdetail[editImageIndex] = value;

              // console.log("thisdetail 2", JSON.stringify(thisdetail));

              thisform[editForm2].images_detail1 = JSON.stringify(thisdetail);

              // console.log("thisform", JSON.stringify(thisform[editForm2]));

              updateForm2(
                editImageArrayIndex,
                thisform[editForm2].images_detail1,
                thisform[editForm2].id,
              );
            } else if (editImageArrayIndex === 2) {
              thisform[editForm2].images_detail2;

              thisdetail = JSON.parse(thisform[editForm2].images_detail2);

              // console.log("thisdetail 1", JSON.stringify(thisdetail));

              thisdetail[editImageIndex] = value;

              // console.log("thisdetail 2", JSON.stringify(thisdetail));

              thisform[editForm2].images_detail2 = thisdetail;

              // console.log("thisform", JSON.stringify(thisform[editForm2]));

              updateForm2(
                editImageArrayIndex,
                thisform[editForm2].images_detail2,
                thisform[editForm2].id,
              );
            } else if (editImageArrayIndex === 3) {
              thisform[editForm2].images_detail3;

              thisdetail = JSON.parse(thisform[editForm2].images_detail3);

              // console.log("thisdetail 1", JSON.stringify(thisdetail));

              thisdetail[editImageIndex] = value;

              // console.log("thisdetail 2", JSON.stringify(thisdetail));

              thisform[editForm2].images_detail3 = thisdetail;

              // console.log("thisform", JSON.stringify(thisform[editForm2]));

              updateForm2(
                editImageArrayIndex,
                thisform[editForm2].images_detail3,
                thisform[editForm2].id,
              );
            }

            // let thisstructure = JSON.parse(
            //   JSON.parse(thisform[editForm2].formdata)[editComponent].structure
            // );

            // thisstructure.component.material[editMaterial].rating_of_member =
            //   value;

            // let thisformdata = JSON.parse(thisform[editForm].formdata);

            // thisformdata[editComponent].structure =
            //   JSON.stringify(thisstructure);

            // thisform[editForm].formdata = JSON.stringify(thisformdata);
          }}
          pressCancel={(option: any) => {
            setEditModalVis2(option);
          }}
        />
      )}
    </div>
  );
};

export default page;
