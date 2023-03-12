exports.id = 237;
exports.ids = [237,119];
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
	"message": "Chat_message__hRlwN",
	"noFollowing": "Chat_noFollowing__lmImX",
	"photo": "Chat_photo__tcgLy",
	"user": "Chat_user___RP1F",
	"link": "Chat_link__giJoy",
	"userList": "Chat_userList__ICLhV",
	"inputWrap": "Chat_inputWrap__n6kfj",
	"textInput": "Chat_textInput__walc3",
	"wrapperlastchild": "Chat_wrapperlastchild__WxA1_",
	"arrowBar": "Chat_arrowBar__Id1Db"
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
            baseURL: "https://storytell.onrender.com/",
            headers: req.headers,
            withCredentials: true
        });
    } else {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildClient);


/***/ }),

/***/ 7960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SaveIcon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "14",
            height: "18",
            viewBox: "0 0 14 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18L7 15L14 18V2C14 0.9 13.1 0 12 0ZM12 15L7 12.82L2 15V2H12V15Z",
                fill: "black"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveIcon);


/***/ })

};
;