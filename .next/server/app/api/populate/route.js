"use strict";
(() => {
var exports = {};
exports.id = 148;
exports.ids = [148];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/populate/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: ./src/app/lib/prisma.ts + 1 modules
var prisma = __webpack_require__(6936);
;// CONCATENATED MODULE: ./src/app/api/populate/route.js


// export async function GET(request, { params }) {
//     // const team = params.team // '1'
//     return new NextResponse(JSON.stringify(params.industryID))
// }
async function GET(request) {
    try {
        // const create = await prisma.type_of_damage.createMany({
        //     data: [
        //         {
        //             code: 1,
        //             name: "Corrosion of Steel",
        //         },
        //         {
        //             code: 2,
        //             name: "Fracture at Steel",
        //         },
        //         {
        //             code: 3,
        //             name: "Loose Connections Primary (Steel)",
        //         },
        //         {
        //             code: 3,
        //             name: "Loose Connections Secondary",
        //         },
        //         {
        //             code: 4,
        //             name: "Permanent Deformations (Steel & Rubber)",
        //         },
        //         {
        //             code: 5,
        //             name: "Paint Deterioration (Steel)",
        //         },
        //         {
        //             code: 6,
        //             name: "Cracks (Reinforced Concrete)",
        //         },
        //         {
        //             code: 6,
        //             name: "Cracks (Prestressed Concrete)",
        //         },
        //         {
        //             code: 7,
        //             name: "Spalling (Reinforced Concrete)",
        //         },
        //         {
        //             code: 7,
        //             name: "Spalling (Prestressed Concrete)",
        //         },
        //         {
        //             code: 8,
        //             name: "Corrosion of Reinforcement (Concrete)",
        //         },
        //         {
        //             code: 9,
        //             name: "Wear/Abrasion (Concrete)",
        //         },
        //         {
        //             code: 10,
        //             name: "Material Deterioration (Concrete)",
        //         },
        //         {
        //             code: 10,
        //             name: "Material Deterioration (Masonry)",
        //         },
        //         {
        //             code: 11,
        //             name: "Surface Defect (Concrete)",
        //         },
        //         {
        //             code: 12,
        //             name: "Delamination (Concrete)",
        //         },
        //         {
        //             code: 13,
        //             name: "Abnormal Vibration / Defelection (At Beam)",
        //         },
        //         {
        //             code: 14,
        //             name: "Water Leak (At Deck/Culvert) (Concrete)",
        //         },
        //         {
        //             code: 14,
        //             name: "Water Leak (At Expansion Joint)",
        //         },
        //         {
        //             code: 15,
        //             name: "Tilt/Settlement (At Abutment/pier)",
        //         },
        //         {
        //             code: 16,
        //             name: "Abnormal Movement",
        //         },
        //         {
        //             code: 17,
        //             name: "Scouring (At Abutment/pier)",
        //         },
        //         {
        //             code: 17,
        //             name: "Scouring (At Slope Protection)",
        //         },
        //         {
        //             code: 17,
        //             name: "Scouring (At Culvert)",
        //         },
        //         {
        //             code: 18,
        //             name: "Ponding Water (At Bearing)",
        //         },
        //         {
        //             code: 19,
        //             name: "Debris/Vegetation (At Bearing)",
        //         },
        //         {
        //             code: 20,
        //             name: "Drainage Blocked (At Drainpipe)",
        //         },
        //         {
        //             code: 21,
        //             name: "No Pipe/Inadequate Pipe Length (At Drainpipe)",
        //         },
        //         {
        //             code: 22,
        //             name: "Impact Damage (At Parapet)",
        //         },
        //         {
        //             code: 23,
        //             name: "Pot Hole (At Pavement)",
        //         },
        //         {
        //             code: 24,
        //             name: "Rutting (At Pavement)",
        //         },
        //         {
        //             code: 25,
        //             name: "Loss of Bond & Delamination (At Pavement)",
        //         },
        //         {
        //             code: 26,
        //             name: "Rippling (At Pavement)",
        //         },
        //         {
        //             code: 26,
        //             name: "Rippling (At Pavement)",
        //         },
        //         {
        //             code: 27,
        //             name: "Pavement Crack",
        //         },
        //         {
        //             code: 28,
        //             name: "Crack at Expansion Joint",
        //         },
        //         {
        //             code: 29,
        //             name: "Abnormal Spacing (At Expansion Joint)",
        //         },
        //         {
        //             code: 30,
        //             name: "Difference in Level (At Expansion Joint)",
        //         },
        //         {
        //             code: 31,
        //             name: "Abnormal Noise (At Expansion Joint)",
        //         },
        //         {
        //             code: 32,
        //             name: "Rupture (At Expansion Joint)",
        //         },
        //         {
        //             code: 33,
        //             name: "Buldging (At Bearing)",
        //         },
        //         {
        //             code: 34,
        //             name: "Abnormal Displacement (Bearing)",
        //         },
        //         {
        //             code: 35,
        //             name: "Erosion (At Slope Protection)",
        //         },
        //         {
        //             code: 35,
        //             name: "Erosion (At River Bank)",
        //         },
        //         {
        //             code: 36,
        //             name: "Material Loss/Disintegration (At Slope Protection)",
        //         },
        //         {
        //             code: 37,
        //             name: "Silting (At Culvert)",
        //         },
        //         {
        //             code: 38,
        //             name: "Inadequate Size (At Culvert)",
        //         },
        //         {
        //             code: 39,
        //             name: "Damage/Missing Panel (For Roof Tiles & Ceiling)",
        //         }
        //     ]
        // })
        // const create2 = await prisma.project.createMany({
        //     data: [
        //         {
        //             project_name: "Example Toll Plaza Project",
        //             project_type: "Toll Plaza",
        //         },
        //         {
        //             project_name: "Example Bridge Project",
        //             project_type: "Bridge",
        //         },
        //     ]
        // })
        const create3 = await prisma/* default */.Z.bridge_list2.create({
            data: {
                structure: "elsa@prisma.io"
            }
        });
        // if (create && create2 && create3) {
        if (create3) {
            return new next_response/* default */.Z("Successfully Populate bridge_list2 table.");
        } else {
            return new next_response/* default */.Z("Fail");
        }
    } catch (error) {
        return new next_response/* default */.Z(error.message);
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fpopulate%2Froute&name=app%2Fapi%2Fpopulate%2Froute&pagePath=private-next-app-dir%2Fapi%2Fpopulate%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5Cnext%5Cmusic%5Csrc%5Capp&appPaths=%2Fapi%2Fpopulate%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/populate/route","pathname":"/api/populate","filename":"route","bundlePath":"app/api/populate/route"},"resolvedPagePath":"C:\\Users\\User\\Desktop\\next\\music\\src\\app\\api\\populate\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/populate/route"

    

/***/ }),

/***/ 6936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ lib_prisma)
});

// UNUSED EXPORTS: prisma

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./src/app/lib/prisma.ts

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new client_namespaceObject.PrismaClient();
if (false) {}
/* harmony default export */ const lib_prisma = (prisma);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [697,501,335], () => (__webpack_exec__(678)));
module.exports = __webpack_exports__;

})();