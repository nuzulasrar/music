"use strict";
(() => {
var exports = {};
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1179:
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

// NAMESPACE OBJECT: ./src/app/api/bridgelist/route.js
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
;// CONCATENATED MODULE: ./src/app/api/bridgelist/route.js


const replaceTypeOfDamageWith1 = async (obj)=>{
    if (obj.structure && obj.structure.component && obj.structure.component.material) {
        obj.structure.component.material.forEach((material)=>{
            if (material.type_of_damage) {
                material.type_of_damage = material.type_of_damage.map(()=>1);
            }
        });
    }
};
async function GET(request, { params }) {
    // const team = params.team // '1'
    const bridgelist = await prisma/* default */.Z.bridge_list.findMany({
    });
    var damage = [];
    // bridgelist.forEach(replaceTypeOfDamageWith1);
    bridgelist.forEach((item)=>{
        // damage.push(item.structure.component.material[0].type_of_damage[0])
        item.structure.component.material.forEach((item2)=>{
            // item2.haha = "haha"
            // damage = []
            item2.type_of_damage.forEach(async (item3)=>{
                const thisdamage = await prisma/* default */.Z.type_of_damage.findFirst({
                    where: {
                        id: item3
                    },
                    select: {
                        name: true,
                        code: true
                    },
                    orderBy: {
                        code: "asc"
                    }
                });
                // console.log(thisdamage.name);
                thisdamage ? damage.push({
                    code: thisdamage.code,
                    name: thisdamage.name
                }) : null;
            });
            item2.damagenames = damage;
        });
    });
    // thisdamage = await prisma.type_of_damage.findUnique({
    //     where: {
    //         id: 1
    //     }
    // })\
    var thisdamage = await prisma/* default */.Z.type_of_damage.findMany({
        select: {
            code: true,
            name: true
        }
    });
    // return new NextResponse(typeof bridgelist)
    // return new NextResponse(JSON.stringify(damage))
    // return new NextResponse(JSON.stringify(thisdamage))
    return new next_response/* default */.Z(JSON.stringify({
        bridgelist: bridgelist,
        thisdamage: thisdamage
    }));
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fbridgelist%2Froute&name=app%2Fapi%2Fbridgelist%2Froute&pagePath=private-next-app-dir%2Fapi%2Fbridgelist%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5Cnext%5Cmusic%5Csrc%5Capp&appPaths=%2Fapi%2Fbridgelist%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/bridgelist/route","pathname":"/api/bridgelist","filename":"route","bundlePath":"app/api/bridgelist/route"},"resolvedPagePath":"C:\\Users\\User\\Desktop\\next\\music\\src\\app\\api\\bridgelist\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/bridgelist/route"

    

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
var __webpack_exports__ = __webpack_require__.X(0, [697,501,335], () => (__webpack_exec__(1179)));
module.exports = __webpack_exports__;

})();