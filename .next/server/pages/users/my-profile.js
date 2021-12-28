"use strict";
(() => {
var exports = {};
exports.id = 291;
exports.ids = [291];
exports.modules = {

/***/ 2786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1110);
/* harmony import */ var _components_lists_PostList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5511);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8775);
/* harmony import */ var _components_bars_ArrowBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5109);
/* harmony import */ var _components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7899);
/* harmony import */ var _styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5092);
/* harmony import */ var _styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_lists_PostList__WEBPACK_IMPORTED_MODULE_3__]);
_components_lists_PostList__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const MyProfile = ({ data  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_ArrowBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                extra: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    color: '#000',
                    styling: {
                        transform: 'scale(1.2) rotate(90deg)'
                    }
                }),
                title: "My profile"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().userTop),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: data.user.photo,
                        className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().photo),
                        alt: "profile photo"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().name),
                                children: data.user.username
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().hobby),
                                children: data.user.hobby
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                href: "/users/settings/update-my-profile",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().btns),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            width: "13",
                                            height: "14",
                                            viewBox: "0 0 13 14",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M0.711148 13.5768C0.612874 13.5766 0.515711 13.556 0.425836 13.5162C0.335962 13.4765 0.255343 13.4185 0.189107 13.3459C0.121672 13.2739 0.0702153 13.1885 0.0381102 13.0952C0.00600514 13.0019 -0.00602276 12.9029 0.00281499 12.8047L0.176357 10.8964L8.19327 2.88236L10.6986 5.38703L2.68386 13.4004L0.775607 13.5739C0.754178 13.5759 0.732667 13.5769 0.711148 13.5768ZM11.1987 4.88623L8.69406 2.38157L10.1964 0.879193C10.2622 0.813334 10.3403 0.761088 10.4263 0.725442C10.5123 0.689795 10.6045 0.671448 10.6976 0.671448C10.7907 0.671448 10.8828 0.689795 10.9688 0.725442C11.0548 0.761088 11.1329 0.813334 11.1987 0.879193L12.7011 2.38157C12.767 2.44735 12.8192 2.52547 12.8549 2.61146C12.8905 2.69745 12.9089 2.78963 12.9089 2.88271C12.9089 2.9758 12.8905 3.06797 12.8549 3.15396C12.8192 3.23995 12.767 3.31807 12.7011 3.38386L11.1994 4.88553L11.1987 4.88623Z",
                                                fill: "white"
                                            })
                                        }),
                                        "Edit profile"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().stats),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().data),
                                children: data.user.posts.length
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().legend),
                                children: "Posts"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().data),
                                children: data.user.followers.length
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().legend),
                                children: "Followers"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().data),
                                children: data.user.following.length
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_myProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().legend),
                                children: "Following"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_lists_PostList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                userId: data.userId,
                text: "Here will be displayed your posts!",
                posts: data.user.posts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                style: {
                    display: 'none'
                },
                children: `html::-webkit-scrollbar{width:1.6rem}html::-webkit-scrollbar-track{background:#fff;border-radius:100vw}html::-webkit-scrollbar-thumb{background:#545454;border:.4em solid #fff;border-radius:100vw;transition:all .3s}html::-webkit-scrollbar-thumb:hover{background:#6d6d6d}`
            })
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(ctx);
    const { data  } = await client.get('/api/users/my-profile/');
    return {
        props: {
            data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyProfile);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,853,471,960,899,241,511,109], () => (__webpack_exec__(2786)));
module.exports = __webpack_exports__;

})();