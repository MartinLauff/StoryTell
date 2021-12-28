"use strict";
(() => {
var exports = {};
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 5789:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_bars_TopBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2710);
/* harmony import */ var _components_bars_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8328);
/* harmony import */ var _components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7899);
/* harmony import */ var _components_bars_Layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4433);
/* harmony import */ var _components_lists_PostList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5511);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_lists_PostList__WEBPACK_IMPORTED_MODULE_5__]);
_components_lists_PostList__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const LatestPosts = ({ data  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_TopBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_SideBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_Layer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                style: {
                    margin: '6rem 0 0 4rem'
                },
                children: "Latest posts"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_lists_PostList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                text: "Let's discover new inspirations in topics tab",
                posts: data.posts,
                userId: data.userId
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            })
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(ctx);
    const { res  } = ctx;
    const { data  } = await client.get('/api/posts/');
    return {
        props: {
            ...data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LatestPosts);

});

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2069:
/***/ ((module) => {

module.exports = require("axios-rate-limit");

/***/ }),

/***/ 3291:
/***/ ((module) => {

module.exports = require("date-fns/formatDistance");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,853,471,960,899,241,511,30], () => (__webpack_exec__(5789)));
module.exports = __webpack_exports__;

})();