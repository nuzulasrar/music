"use strict";
(() => {
var exports = {};
exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 7205:
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

// NAMESPACE OBJECT: ./src/app/api/upload/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: ./src/app/api/upload/route.ts


// export async function POST(request: NextRequest) {
//     try {
//         const data = await request.formData()
//         const file: File | null = data.get('file') as unknown as File
//         var thisarray = []
//         return new NextResponse(JSON.stringify(typeof file))
//         // if (!file) {
//         //     return NextResponse.json({ success: false })
//         // }
//         // const bytes = await file.arrayBuffer()
//         // const buffer = Buffer.from(bytes)
//         // // With the file data in the buffer, you can do whatever you want with it.
//         // // For this, we'll just write it to the filesystem in a new location
//         // const path = "uploads" + file.name
//         // await writeFile(path, buffer)
//         // console.log(`open ${path} to see the uploaded file`)
//         // return NextResponse.json({ success: true })
//     }
//     catch (error: any) {
//         return new NextResponse(JSON.stringify(error.message))
//     }
// }
async function POST(req, res) {
    try {
        const formData = await req.formData();
        const formDataEntryValues = Array.from(formData.values());
        for (const formDataEntryValue of formDataEntryValues){
            if (typeof formDataEntryValue === "object" && "arrayBuffer" in formDataEntryValue) {
                const file = formDataEntryValue;
                const buffer = Buffer.from(await file.arrayBuffer());
                const now = new Date();
                const year = now.getFullYear();
                const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
                const day = String(now.getDate()).padStart(2, "0");
                const hours = String(now.getHours()).padStart(2, "0");
                const minutes = String(now.getMinutes()).padStart(2, "0");
                const seconds = String(now.getSeconds()).padStart(2, "0");
                const formattedDateTime = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
                external_fs_default().writeFileSync(`src/app/uploads/${formattedDateTime}-${file.name}`, buffer);
            }
        }
        return next_response/* default */.Z.json({
            success: true
        });
    } catch (error) {
        // console.error('Error uploading files:', error);
        return new next_response/* default */.Z(JSON.stringify(error.message));
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fupload%2Froute&name=app%2Fapi%2Fupload%2Froute&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDesktop%5Cnext%5Cmusic%5Csrc%5Capp&appPaths=%2Fapi%2Fupload%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/upload/route","pathname":"/api/upload","filename":"route","bundlePath":"app/api/upload/route"},"resolvedPagePath":"C:\\Users\\User\\Desktop\\next\\music\\src\\app\\api\\upload\\route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/upload/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [697,501,335], () => (__webpack_exec__(7205)));
module.exports = __webpack_exports__;

})();