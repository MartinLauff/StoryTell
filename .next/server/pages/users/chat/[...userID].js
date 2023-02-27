(() => {
var exports = {};
exports.id = 56;
exports.ids = [56];
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

/***/ 6004:
/***/ ((module) => {

// Exports
module.exports = {
	"chatForm": "Chat_chatForm___6dmL",
	"wrap": "Chat_wrap__EcHgi",
	"wrapper": "Chat_wrapper__gGaNn",
	"submit": "Chat_submit__mNdpG",
	"sendON": "Chat_sendON___NwxR",
	"input": "Chat_input___tdmN",
	"formWrap": "Chat_formWrap__0hy1R",
	"message": "Chat_message__hRlwN"
};


/***/ }),

/***/ 8775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const buildClient = ({ req  })=>{
    if (true) {
        // We are on the server
        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
            baseURL: 'https://storytell.onrender.com/',
            headers: req.headers,
            withCredentials: true
        });
    } else {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildClient);


/***/ }),

/***/ 9289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8775);
/* harmony import */ var _styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6004);
/* harmony import */ var _styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_bars_ArrowBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5109);





const UserID = ({ data  })=>{
    const { 0: text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: list , 1: setList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const submit = (e)=>{
        e.preventDefault();
        if (text.length >= 1) {
            setList((oldState)=>[
                    ...oldState,
                    text
                ]
            );
            setText('');
        }
    };
    const renderedList = list.map((el, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().message),
            children: el
        }, i)
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_ArrowBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                image: data.user.photo,
                title: data.user.username
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrap),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
                    children: renderedList
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().formWrap),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: submit,
                    className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatForm),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
                            maxLength: "22",
                            onChange: (e)=>setText(e.target.value)
                            ,
                            value: text,
                            type: "text",
                            placeholder: "Message..."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: submit,
                            disabled: text.length >= 1 ? false : true,
                            className: `${(_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit)} ${text.length >= 1 ? (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().sendON) : null}`,
                            type: "submit",
                            children: "Send"
                        })
                    ]
                })
            })
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    const { userID  } = ctx.query;
    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ctx);
    const { data  } = await client.get(`/api/users/${userID}`);
    return {
        props: {
            data,
            userID
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserID);


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,853,960,109], () => (__webpack_exec__(9289)));
module.exports = __webpack_exports__;

})();