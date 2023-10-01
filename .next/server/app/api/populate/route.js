"use strict";
(() => {
var exports = {};
exports.id = 148;
exports.ids = [148];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

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
// EXTERNAL MODULE: ./src/app/lib/prisma.ts
var prisma = __webpack_require__(6156);
;// CONCATENATED MODULE: ./src/app/api/populate/route.js


// export async function GET(request, { params }) {
//     // const team = params.team // '1'
//     return new NextResponse(JSON.stringify(params.industryID))
// }
async function GET(request) {
    try {
        const create = await prisma/* default */.Z.type_of_damage.createMany({
            data: [
                {
                    code: 1,
                    name: "Corrosion of Steel"
                },
                {
                    code: 2,
                    name: "Fracture at Steel"
                },
                {
                    code: 3,
                    name: "Loose Connections Primary (Steel)"
                },
                {
                    code: 3,
                    name: "Loose Connections Secondary"
                },
                {
                    code: 4,
                    name: "Permanent Deformations (Steel & Rubber)"
                },
                {
                    code: 5,
                    name: "Paint Deterioration (Steel)"
                },
                {
                    code: 6,
                    name: "Cracks (Reinforced Concrete)"
                },
                {
                    code: 6,
                    name: "Cracks (Prestressed Concrete)"
                },
                {
                    code: 7,
                    name: "Spalling (Reinforced Concrete)"
                },
                {
                    code: 7,
                    name: "Spalling (Prestressed Concrete)"
                },
                {
                    code: 8,
                    name: "Corrosion of Reinforcement (Concrete)"
                },
                {
                    code: 9,
                    name: "Wear/Abrasion (Concrete)"
                },
                {
                    code: 10,
                    name: "Material Deterioration (Concrete)"
                },
                {
                    code: 10,
                    name: "Material Deterioration (Masonry)"
                },
                {
                    code: 11,
                    name: "Surface Defect (Concrete)"
                },
                {
                    code: 12,
                    name: "Delamination (Concrete)"
                },
                {
                    code: 13,
                    name: "Abnormal Vibration / Defelection (At Beam)"
                },
                {
                    code: 14,
                    name: "Water Leak (At Deck/Culvert) (Concrete)"
                },
                {
                    code: 14,
                    name: "Water Leak (At Expansion Joint)"
                },
                {
                    code: 15,
                    name: "Tilt/Settlement (At Abutment/pier)"
                },
                {
                    code: 16,
                    name: "Abnormal Movement"
                },
                {
                    code: 17,
                    name: "Scouring (At Abutment/pier)"
                },
                {
                    code: 17,
                    name: "Scouring (At Slope Protection)"
                },
                {
                    code: 17,
                    name: "Scouring (At Culvert)"
                },
                {
                    code: 18,
                    name: "Ponding Water (At Bearing)"
                },
                {
                    code: 19,
                    name: "Debris/Vegetation (At Bearing)"
                },
                {
                    code: 20,
                    name: "Drainage Blocked (At Drainpipe)"
                },
                {
                    code: 21,
                    name: "No Pipe/Inadequate Pipe Length (At Drainpipe)"
                },
                {
                    code: 22,
                    name: "Impact Damage (At Parapet)"
                },
                {
                    code: 23,
                    name: "Pot Hole (At Pavement)"
                },
                {
                    code: 24,
                    name: "Rutting (At Pavement)"
                },
                {
                    code: 25,
                    name: "Loss of Bond & Delamination (At Pavement)"
                },
                {
                    code: 26,
                    name: "Rippling (At Pavement)"
                },
                {
                    code: 26,
                    name: "Rippling (At Pavement)"
                },
                {
                    code: 27,
                    name: "Pavement Crack"
                },
                {
                    code: 28,
                    name: "Crack at Expansion Joint"
                },
                {
                    code: 29,
                    name: "Abnormal Spacing (At Expansion Joint)"
                },
                {
                    code: 30,
                    name: "Difference in Level (At Expansion Joint)"
                },
                {
                    code: 31,
                    name: "Abnormal Noise (At Expansion Joint)"
                },
                {
                    code: 32,
                    name: "Rupture (At Expansion Joint)"
                },
                {
                    code: 33,
                    name: "Buldging (At Bearing)"
                },
                {
                    code: 34,
                    name: "Abnormal Displacement (Bearing)"
                },
                {
                    code: 35,
                    name: "Erosion (At Slope Protection)"
                },
                {
                    code: 35,
                    name: "Erosion (At River Bank)"
                },
                {
                    code: 36,
                    name: "Material Loss/Disintegration (At Slope Protection)"
                },
                {
                    code: 37,
                    name: "Silting (At Culvert)"
                },
                {
                    code: 38,
                    name: "Inadequate Size (At Culvert)"
                },
                {
                    code: 39,
                    name: "Damage/Missing Panel (For Roof Tiles & Ceiling)"
                }
            ]
        });
        const create2 = await prisma/* default */.Z.bridge_list.createMany({
            data: [
                {
                    structure: {
                        component: {
                            name: "Beam / Grinder (Primary)",
                            material: [
                                {
                                    name: [
                                        "Steel"
                                    ],
                                    type_of_damage: [
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        13,
                                        31
                                    ]
                                },
                                {
                                    name: [
                                        "P.Concrete",
                                        "R.Concrete"
                                    ],
                                    type_of_damage: [
                                        11,
                                        6,
                                        12,
                                        7,
                                        8,
                                        13,
                                        16
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    structure: {
                        component: {
                            name: "Deck Slab (Primary)",
                            material: [
                                {
                                    name: [
                                        "Steel"
                                    ],
                                    type_of_damage: [
                                        1,
                                        2,
                                        3,
                                        4,
                                        14,
                                        16,
                                        31
                                    ]
                                },
                                {
                                    name: [
                                        "Concrete"
                                    ],
                                    type_of_damage: [
                                        11,
                                        6,
                                        12,
                                        7,
                                        8,
                                        14
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    structure: {
                        component: {
                            name: "Abutment (Primary)",
                            material: [
                                {
                                    name: [
                                        "Concrete",
                                        "Masonry"
                                    ],
                                    type_of_damage: [
                                        11,
                                        6,
                                        12,
                                        7,
                                        8,
                                        9,
                                        10,
                                        15,
                                        17
                                    ]
                                }
                            ]
                        }
                    }
                }
            ]
        });
        const create3 = await prisma/* default */.Z.project.createMany({
            data: [
                {
                    project_name: "Example Toll Plaza Project",
                    project_type: "Toll Plaza"
                },
                {
                    project_name: "Example Bridge Project",
                    project_type: "Bridge"
                }
            ]
        });
        if (create && create2 && create3) {
            return new next_response/* default */.Z("Successfully Populate toll_list_type_of_damage table.");
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

/***/ 6156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export prisma */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);


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