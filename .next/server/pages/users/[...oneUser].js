(() => {
var exports = {};
exports.id = 658;
exports.ids = [658];
exports.modules = {

/***/ 2604:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "Bar_sidebar__9b6BM",
	"open": "Bar_open__WUSiu",
	"close": "Bar_close__F7cEH",
	"bar": "Bar_bar__3eWjt",
	"toggle": "Bar_toggle__OwwHd",
	"hide": "Bar_hide__k3StC",
	"dark": "Bar_dark__txwzO",
	"white": "Bar_white__iHVCO",
	"topBar": "Bar_topBar__Zxuls",
	"bottomBar": "Bar_bottomBar__qMksK",
	"circle": "Bar_circle__G2uuY",
	"circleRotate": "Bar_circleRotate__IyXBb",
	"groupDots": "Bar_groupDots__856Ae",
	"layer": "Bar_layer__QsdWE",
	"arrowBar": "Bar_arrowBar__l11K1"
};


/***/ }),

/***/ 4486:
/***/ ((module) => {

// Exports
module.exports = {
	"userTop": "OneUser_userTop__a8GFX",
	"wrapper": "OneUser_wrapper__1vi58",
	"name": "OneUser_name__2LHfw",
	"hobby": "OneUser_hobby__0j14k",
	"photo": "OneUser_photo__hRtIS",
	"btns": "OneUser_btns__xXkBx",
	"chat": "OneUser_chat__FB2f5",
	"follow": "OneUser_follow__GdCtd",
	"stats": "OneUser_stats__GdE2L",
	"description": "OneUser_description__9OnB4",
	"data": "OneUser_data__FKXaq",
	"legend": "OneUser_legend__2EkE8",
	"editMyProfile": "OneUser_editMyProfile__yOb8O"
};


/***/ }),

/***/ 9016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6471);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8775);
/* harmony import */ var _components_lists_PostList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5650);
/* harmony import */ var _components_bars_ArrowBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5109);
/* harmony import */ var _styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4486);
/* harmony import */ var _styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7__);








const OneUser = ({ data  })=>{
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: followers , 1: setFollowers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.user.followers.length);
    const { doRequest , errors  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        url: `/api/users/${active ? "unfollow" : "follow"}/${data.user._id}`,
        method: "put"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data.user.followers.includes(data.userId)) {
            setActive(true);
        }
    }, []);
    const follow = (e)=>{
        e.preventDefault();
        if (active) {
            setFollowers((oldState)=>oldState - 1);
        } else {
            setFollowers((oldState)=>oldState + 1);
        }
        doRequest();
        setActive(!active);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_ArrowBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: "User profile"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().userTop),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: data.user.photo,
                                className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().photo),
                                alt: "profile photo"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().name),
                                        children: data.user.username
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().hobby),
                                        children: data.user.hobby
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().btns),
                                        children: [
                                            data.user._id !== data.userId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                style: active ? {
                                                    backgroundColor: "#000"
                                                } : {
                                                    backgroundColor: "#FF2F2F"
                                                },
                                                onClick: follow,
                                                className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().follow),
                                                children: active ? "Following" : "Follow"
                                            }),
                                            data.user._id !== data.userId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/users/chat/[...userID]",
                                                as: `/users/chat/${data.user._id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().chat),
                                                    children: "Chat"
                                                })
                                            }),
                                            data.user._id === data.userId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/users/settings/update-my-profile",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().editMyProfile),
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
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().stats),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().data),
                                        children: data.user.posts.length
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().legend),
                                        children: "Posts"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().data),
                                        children: followers
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().legend),
                                        children: "Followers"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().data),
                                        children: data.user.following.length
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_OneUser_module_css__WEBPACK_IMPORTED_MODULE_7___default().legend),
                                        children: "Following"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_lists_PostList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                text: "Current user doesn't have any posts",
                posts: data.user.posts,
                userId: data.userId
            }),
            errors
        ]
    });
};
const getServerSideProps = async (ctx)=>{
    const { oneUser  } = ctx.query;
    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(ctx);
    const { data  } = await client.get(`/api/users/${oneUser}`);
    return {
        props: {
            data,
            oneUser
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneUser);


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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,853,471,119,109,909,650], () => (__webpack_exec__(9016)));
module.exports = __webpack_exports__;

})();