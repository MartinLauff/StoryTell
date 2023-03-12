"use strict";
(() => {
var exports = {};
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 4972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SocketContext),
/* harmony export */   "w": () => (/* binding */ SocketProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)("https://storytell.onrender.com/"), SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(socket);
const SocketProvider = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocketContext.Provider, {
        value: socket,
        children: children
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9289:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_bars_ArrowBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5109);
/* harmony import */ var _context_SocketCtx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4972);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8775);
/* harmony import */ var _styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6004);
/* harmony import */ var _styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_SocketCtx__WEBPACK_IMPORTED_MODULE_3__]);
_context_SocketCtx__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const UserID = ({ data  })=>{
    const { 0: text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: list , 1: setList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SocketCtx__WEBPACK_IMPORTED_MODULE_3__/* .SocketContext */ .J);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        socket.emit("connect-user", data.userId, data.user._id);
        socket.on("receive-message", (message)=>{
            setList((oldState)=>[
                    ...oldState,
                    message
                ]);
            messagesEndRef.current.scrollIntoView({
                behavior: "smooth"
            });
        });
    }, [
        socket
    ]);
    const submit = (e)=>{
        e.preventDefault();
        if (text.length >= 1) {
            socket.emit("send-message", {
                senderID: data.userId,
                receiverID: data.user._id,
                text
            });
            setText("");
        }
    };
    const renderedList = list.map((el, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: data.userId === el.senderID ? {
                flexFlow: "column wrap-reverse"
            } : null,
            className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                style: data.userId === el.senderID ? {
                    backgroundColor: "#c5c5c5"
                } : null,
                className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().message),
                children: el.text
            }, i)
        }, i));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bars_ArrowBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                image: data.user.photo,
                title: data.user.username
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrap),
                children: [
                    renderedList,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapperlastchild),
                        ref: messagesEndRef
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().formWrap),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: submit,
                    className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatForm),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
                            maxLength: "22",
                            onChange: (e)=>setText(e.target.value),
                            value: text,
                            type: "text",
                            placeholder: "Message..."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: submit,
                            disabled: text.length >= 1 ? false : true,
                            className: `${(_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().submit)} ${text.length >= 1 ? (_styles_Chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().sendON) : null}`,
                            type: "submit",
                            children: "Send"
                        })
                    ]
                })
            })
        ]
    });
};
const getServerSideProps = async (ctx)=>{
    const { userID  } = ctx.query;
    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(ctx);
    const { data  } = await client.get(`/api/users/${userID}`);
    return {
        props: {
            data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserID);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,853,109,237], () => (__webpack_exec__(9289)));
module.exports = __webpack_exports__;

})();