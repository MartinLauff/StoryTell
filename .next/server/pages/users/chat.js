"use strict";
(() => {
var exports = {};
exports.id = 241;
exports.ids = [241];
exports.modules = {

/***/ 1489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ chat),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./api/build-client.js
var build_client = __webpack_require__(8775);
// EXTERNAL MODULE: ./components/bars/ArrowBar.js + 3 modules
var ArrowBar = __webpack_require__(5109);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Chat.module.css
var Chat_module = __webpack_require__(6004);
var Chat_module_default = /*#__PURE__*/__webpack_require__.n(Chat_module);
;// CONCATENATED MODULE: ./components/lists/FollowingList.js




const FollowingList = ({ following  })=>{
    const { 0: user , 1: setUser  } = (0,external_react_.useState)("");
    if (following.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Chat_module_default()).noFollowing,
            children: [
                "You are not following anyone yet! ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " You can do so by visiting other users profile."
            ]
        });
    }
    const renderedList = following.filter((i)=>i.username.includes(user)).map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: `/users/chat/${el._id}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: (Chat_module_default()).link,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (Chat_module_default()).photo,
                        src: el.photo
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Chat_module_default()).user,
                        style: {
                            color: "#000"
                        },
                        children: el.username
                    })
                ]
            })
        }, i));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Chat_module_default()).userList,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Chat_module_default()).inputWrap,
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: (Chat_module_default()).textInput,
                    value: user,
                    onChange: (e)=>setUser(e.target.value),
                    maxLength: "10",
                    type: "text",
                    placeholder: "Search the people you follow"
                })
            }),
            renderedList
        ]
    });
};
/* harmony default export */ const lists_FollowingList = (FollowingList);

;// CONCATENATED MODULE: ./pages/users/chat/index.js




const Index = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ArrowBar/* default */.Z, {
                title: "Chats"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lists_FollowingList, {
                following: data.following
            })
        ]
    });
};
const getServerSideProps = async (ctx)=>{
    const client = (0,build_client/* default */.Z)(ctx);
    const { data  } = await client.get("/api/users/chats");
    return {
        props: {
            data
        }
    };
};
/* harmony default export */ const chat = (Index);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,853,109,237], () => (__webpack_exec__(1489)));
module.exports = __webpack_exports__;

})();