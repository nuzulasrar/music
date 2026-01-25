import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import CryptoJS from "crypto-js";
var jwt = require("jsonwebtoken");

export const revalidate = 0;

export async function POST(request: any) {
  try {
    const postdata = await request.json();

    // const CREATE_project = true;

    const CREATE_project = await prisma.projectBridge.create({
      data: {
        name: postdata.projectName,
        type: postdata.projectType,
        l_routeNo: postdata.location_data.route_no,
        l_structureNo: postdata.location_data.structure_no,
        l_riverOrBridgeName: postdata.location_data.bridge_name,
        l_district: postdata.location_data.district,
        l_state: postdata.location_data.state,
        b_systemType: postdata.bridgeType.system_type,
        b_deckType: postdata.bridgeType.deck_type,
        b_abutmentType: postdata.bridgeType.abutment_type,
        b_pierType: postdata.bridgeType.pier_type,
        s_roadWidth: postdata.structured_data.road_width,
        s_bridgeWidth: postdata.structured_data.bridge_width,
        s_skewAngle: postdata.structured_data.skew_angle,
        s_noOfSpan: postdata.structured_data.no_span,
        s_spans: postdata.structured_data.spans,
        s_yearBuilt: postdata.structured_data.year_build,
        s_bridgeLength: postdata.structured_data.bridge_length,
        s_yearRepaired: postdata.structured_data.year_repair,
        beamGirder_tick: false,
        beamGirder_steel_tick: false,
        beamGirder_pconcrete_tick: false,
        beamGirder_rconcrete_tick: false,
        beamGirder_oldRating: "",
        beamGirder_newRating: "",
        beamGirder_majorDamages: "",
        beamGirder_maintenanceWorkRequired: "",
        deckSlab_tick: false,
        deckSlab_steel_tick: false,
        deckSlab_concrete_tick: false,
        deckSlab_oldRating: "",
        deckSlab_newRating: "",
        deckSlab_majorDamages: "",
        deckSlab_maintenanceWorkRequired: "",
        pier_tick: false,
        pier_concrete_tick: false,
        pier_masonry_tick: false,
        pier_oldRating: "",
        pier_newRating: "",
        pier_majorDamages: "",
        pier_maintenanceWorkRequired: "",
        abutment_tick: false,
        abutment_concrete_tick: false,
        abutment_masonry_tick: false,
        abutment_oldRating: "",
        abutment_newRating: "",
        abutment_majorDamages: "",
        abutment_maintenanceWorkRequired: "",
        bearing_tick: false,
        bearing_steel_tick: false,
        bearing_rubber_tick: false,
        bearing_oldRating: "",
        bearing_newRating: "",
        bearing_majorDamages: "",
        bearing_maintenanceWorkRequired: "",
        drainpipe_tick: false,
        drainpipe_steel_tick: false,
        drainpipe_pvc_tick: false,
        drainpipe_oldRating: "",
        drainpipe_newRating: "",
        drainpipe_majorDamages: "",
        drainpipe_maintenanceWorkRequired: "",
        parapet_tick: false,
        parapet_steel_tick: false,
        parapet_concrete_tick: false,
        parapet_others_tick: false,
        parapet_oldRating: "",
        parapet_newRating: "",
        parapet_majorDamages: "",
        parapet_maintenanceWorkRequired: "",
        surfacing_tick: false,
        surfacing_asphalt_tick: false,
        surfacing_concrete_tick: false,
        surfacing_oldRating: "",
        surfacing_newRating: "",
        surfacing_majorDamages: "",
        surfacing_maintenanceWorkRequired: "",
        expansionJoint_tick: false,
        expansionJoint_asphaltPlug_tick: false,
        expansionJoint_elastomeric_tick: false,
        expansionJoint_others_tick: false,
        expansionJoint_oldRating: "",
        expansionJoint_newRating: "",
        expansionJoint_majorDamages: "",
        expansionJoint_maintenanceWorkRequired: "",
        slopeProtection_tick: false,
        slopeProtection_rubblePitching_tick: false,
        slopeProtection_gabions_tick: false,
        slopeProtection_others_tick: false,
        slopeProtection_oldRating: "",
        slopeProtection_newRating: "",
        slopeProtection_majorDamages: "",
        slopeProtection_maintenanceWorkRequired: "",
        culvert_tick: false,
        culvert_steel_tick: false,
        culvert_concrete_tick: false,
        culvert_masonry_tick: false,
        culvert_oldRating: "",
        culvert_newRating: "",
        culvert_majorDamages: "",
        culvert_maintenanceWorkRequired: "",
        inspectorComment: "",
        detailedInspection: false,
        noOfPages: "",
        nameOfInspector: "",
        inspectionDate: "",
        previousInspectionDate: "",
        signature: "",
      },
    });

    if (CREATE_project) {
      return NextResponse.json({
        success: true,
        postdata: postdata,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Fail to create a project.",
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
