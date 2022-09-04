(() => {
var exports = {};
exports.id = 205;
exports.ids = [205];
exports.modules = {

/***/ 5694:
/***/ ((module) => {

// Exports
module.exports = {
	"bar": "EditProfile_bar__8eAHp",
	"wrap": "EditProfile_wrap__quNyR",
	"imgWrap": "EditProfile_imgWrap__2vCqL",
	"img": "EditProfile_img__yTfpH",
	"close": "EditProfile_close__AKrJt",
	"successBar": "EditProfile_successBar__Uw9xr"
};


/***/ }),

/***/ 8411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ saved_posts),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/EditProfile.module.css
var EditProfile_module = __webpack_require__(5694);
var EditProfile_module_default = /*#__PURE__*/__webpack_require__.n(EditProfile_module);
// EXTERNAL MODULE: ./api/build-client.js
var build_client = __webpack_require__(8775);
// EXTERNAL MODULE: ./components/lists/PostList.js + 1 modules
var PostList = __webpack_require__(5650);
// EXTERNAL MODULE: ./styles/Components.module.css
var Components_module = __webpack_require__(6853);
var Components_module_default = /*#__PURE__*/__webpack_require__.n(Components_module);
// EXTERNAL MODULE: ./hooks/use-request.js
var use_request = __webpack_require__(6471);
;// CONCATENATED MODULE: ./components/Icons/UnsaveIcon.js



const UnsaveIcon = ({ postId , deleteOpt , Xposition  })=>{
    const { doRequest , errors  } = (0,use_request/* default */.Z)({
        url: `/api/users/unsave/${postId}`,
        method: 'put'
    });
    const onClick = (e)=>{
        e.preventDefault();
        doRequest();
        deleteOpt(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: onClick,
        className: `${(Components_module_default()).xIcon} ${Xposition ? (Components_module_default()).imgON : (Components_module_default()).imgOFF}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M10 10L19 19M1 19L10 10L1 19ZM19 1L9.99828 10L19 1ZM9.99828 10L1 1L9.99828 10Z",
                    stroke: "black",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            }),
            errors
        ]
    }));
};
/* harmony default export */ const Icons_UnsaveIcon = (UnsaveIcon);

;// CONCATENATED MODULE: ./pages/users/settings/saved-posts.js






const savedPosts = ({ data  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (EditProfile_module_default()).bar,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/users/my-profile",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            style: {
                                height: '2rem'
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M10 10L19 19M1 19L10 10L1 19ZM19 1L9.99828 10L19 1ZM9.99828 10L1 1L9.99828 10Z",
                                    stroke: "black",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Saved posts"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PostList/* default */.Z, {
                userId: data.userId,
                UnsaveOption: /*#__PURE__*/ jsx_runtime_.jsx(Icons_UnsaveIcon, {
                }),
                posts: data.posts
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                style: {
                    display: 'none'
                },
                children: `html::-webkit-scrollbar{width:1.6rem}html::-webkit-scrollbar-track{background:#fff;border-radius:100vw}html::-webkit-scrollbar-thumb{background:#545454;border:.4em solid #fff;border-radius:100vw;transition:all .3s}html::-webkit-scrollbar-thumb:hover{background:#6d6d6d}`
            })
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    const client = (0,build_client/* default */.Z)(ctx);
    const { data  } = await client.get('/api/posts/saved');
    return {
        props: {
            data
        }
    };
};
/* harmony default export */ const saved_posts = (savedPosts);


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,853,471,960,241,650], () => (__webpack_exec__(8411)));
module.exports = __webpack_exports__;

})();