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
      beamGirder_tick: "",
      beamGirder_steel_tick: "",
      beamGirder_pconcrete_tick: "",
      beamGirder_rconcrete_tick: "",
      beamGirder_oldRating: "",
      beamGirder_newRating: "",
      beamGirder_majorDamages: "",
      beamGirder_maintenanceWorkRequired: "",
      deckSlab_tick: "",
      deckSlab_steel_tick: "",
      deckSlab_concrete_tick: "",
      deckSlab_oldRating: "",
      deckSlab_newRating: "",
      deckSlab_majorDamages: "",
      deckSlab_maintenanceWorkRequired: "",
      pier_tick: "",
      pier_concrete_tick: "",
      pier_masonry_tick: "",
      pier_oldRating: "",
      pier_newRating: "",
      pier_majorDamages: "",
      pier_maintenanceWorkRequired: "",
      abutment_tick: "",
      abutment_concrete_tick: "",
      abutment_masonry_tick: "",
      abutment_oldRating: "",
      abutment_newRating: "",
      abutment_majorDamages: "",
      abutment_maintenanceWorkRequired: "",
      bearing_tick: "",
      bearing_steel_tick: "",
      bearing_rubber_tick: "",
      bearing_oldRating: "",
      bearing_newRating: "",
      bearing_majorDamages: "",
      bearing_maintenanceWorkRequired: "",
      drainpipe_tick: "",
      drainpipe_steel_tick: "",
      drainpipe_pvc_tick: "",
      drainpipe_oldRating: "",
      drainpipe_newRating: "",
      drainpipe_majorDamages: "",
      drainpipe_maintenanceWorkRequired: "",
      parapet_tick: "",
      parapet_steel_tick: "",
      parapet_concrete_tick: "",
      parapet_others_tick: "",
      parapet_oldRating: "",
      parapet_newRating: "",
      parapet_majorDamages: "",
      parapet_maintenanceWorkRequired: "",
      surfacing_tick: "",
      surfacing_asphalt_tick: "",
      surfacing_concrete_tick: "",
      surfacing_oldRating: "",
      surfacing_newRating: "",
      surfacing_majorDamages: "",
      surfacing_maintenanceWorkRequired: "",
      expansionJoint_tick: "",
      expansionJoint_asphaltPlug_tick: "",
      expansionJoint_elastomeric_tick: "",
      expansionJoint_others_tick: "",
      expansionJoint_oldRating: "",
      expansionJoint_newRating: "",
      expansionJoint_majorDamages: "",
      expansionJoint_maintenanceWorkRequired: "",
      slopeProtection_tick: "",
      slopeProtection_rubblePitching_tick: "",
      slopeProtection_gabions_tick: "",
      slopeProtection_others_tick: "",
      slopeProtection_oldRating: "",
      slopeProtection_newRating: "",
      slopeProtection_majorDamages: "",
      slopeProtection_maintenanceWorkRequired: "",
      culvert_tick: "",
      culvert_steel_tick: "",
      culvert_concrete_tick: "",
      culvert_masonry_tick: "",
      culvert_oldRating: "",
      culvert_newRating: "",
      culvert_majorDamages: "",
      culvert_maintenanceWorkRequired: "",
      inspectorComment: "",
      detailedInspection: "",
      noOfPages: "",
      nameOfInspector: "",
      inspectionDate: "",
      previousInspectionDate: "",
      date: "",
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
