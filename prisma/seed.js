import { PrismaClient } from "@prisma/client";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const SECRET_KEY = process.env.JWT_SECRET;

async function main() {
  const hashedPassword = CryptoJS.MD5("abc123").toString();

  const token = jwt.sign({ username: "nuzulasrar@gmail.com" }, SECRET_KEY, {
    expiresIn: "1h",
  });

  const seedUser = await prisma.user.upsert({
    where: {
      email: "nuzulasrar@gmail.com",
    },
    update: {},
    create: {
      email: "nuzulasrar@gmail.com",
      name: "Ahmad",
      password: hashedPassword,
      sessionToken: token,
      role: "Normal",
    },
  });

  const seedProject = await prisma.projectBridge.create({
    data: {
      name: "Example Project",
      type: "Bridge",
      l_routeNo: "",
      l_structureNo: "",
      l_riverOrBridgeName: "",
      l_district: "",
      l_state: "",
      b_systemType: "",
      b_deckType: "",
      b_abutmentType: "",
      b_pierType: "",
      s_roadWidth: "",
      s_bridgeWidth: "",
      s_skewAngle: "",
      s_noOfSpan: "",
      s_spans: "",
      s_yearBuilt: "",
      s_bridgeLength: "",
      s_yearRepaired: "",
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

  if (seedUser && seedProject) console.log("User seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
