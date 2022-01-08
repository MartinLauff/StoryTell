(() => {
var exports = {};
exports.id = 137;
exports.ids = [137];
exports.modules = {

/***/ 403:
/***/ ((module) => {

// Exports
module.exports = {
	"topicStripe": "Topic_topicStripe__aVolD"
};


/***/ }),

/***/ 5641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _components_lists_PostList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5650);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8775);
/* harmony import */ var _styles_Topic_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(403);
/* harmony import */ var _styles_Topic_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Topic_module_css__WEBPACK_IMPORTED_MODULE_7__);








const TopicPosts = ({ data , topicSlug  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_TopBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_SideBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_Layer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Topic_module_css__WEBPACK_IMPORTED_MODULE_7___default().topicStripe),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `/compress/${topicSlug}-big.jpg`,
                            alt: topicSlug
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: topicSlug
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_lists_PostList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                text: "This topic doesn't have a post yet. Let's change it!",
                posts: data.posts,
                userId: data.userId
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            })
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    const { topicSlug  } = ctx.query;
    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(ctx);
    const { data  } = await client.get(`/api/topics/${topicSlug}`);
    return {
        props: {
            ...data,
            topicSlug
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopicPosts);


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 2069:
/***/ ((module) => {

"use strict";
module.exports = require("axios-rate-limit");

/***/ }),

/***/ 3291:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/formatDistance");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,853,471,960,899,241,650,30], () => (__webpack_exec__(5641)));
module.exports = __webpack_exports__;

})();