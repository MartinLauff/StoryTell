(() => {
var exports = {};
exports.id = "pages/auth/signin";
exports.ids = ["pages/auth/signin"];
exports.modules = {

/***/ "./components/SingleButton.js":
/*!************************************!*\
  !*** ./components/SingleButton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Components.module.css */ "./styles/Components.module.css");
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\SingleButton.js";




const SingleButton = ({
  style,
  content,
  color
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      style: style,
      className: `${(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_2___default())[color]}`,
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleButton);

/***/ }),

/***/ "./pages/auth/signin.js":
/*!******************************!*\
  !*** ./pages/auth/signin.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SingleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SingleButton */ "./components/SingleButton.js");
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Index.module.css */ "./styles/Index.module.css");
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Components.module.css */ "./styles/Components.module.css");
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\auth\\signin.js";







const signin = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const submit = e => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    router.push('/posts');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: `${(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default().mybackground)} ${(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default().signinImg)}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),
      children: "Storytell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
      className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default().flexCenter),
      onSubmit: submit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5___default().textInput),
        onChange: e => setEmail(e.target.value),
        type: "email",
        placeholder: "Email",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5___default().textInput),
        onChange: e => setPassword(e.target.value),
        type: "password",
        placeholder: "Password",
        minLength: "8",
        maxLength: "20",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_SingleButton__WEBPACK_IMPORTED_MODULE_2__.default, {
        content: "Login",
        color: "redButton"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signin);

/***/ }),

/***/ "./styles/Components.module.css":
/*!**************************************!*\
  !*** ./styles/Components.module.css ***!
  \**************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Components_button__26VRJ",
	"whiteButton": "Components_whiteButton__3KVHl",
	"redButton": "Components_redButton__1MFWZ",
	"textInput": "Components_textInput__1rv-O"
};


/***/ }),

/***/ "./styles/Index.module.css":
/*!*********************************!*\
  !*** ./styles/Index.module.css ***!
  \*********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"mybackground": "Index_mybackground__2aCcG",
	"indexImg": "Index_indexImg__Iqppk",
	"signinImg": "Index_signinImg__316FB",
	"heading": "Index_heading__2sEms",
	"indexSpan": "Index_indexSpan__2v2ta",
	"flexCenter": "Index_flexCenter__2JuMc"
};


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signin.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L1NpbmdsZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hdXRoL3NpZ25pbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC8uL3N0eWxlcy9JbmRleC5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGJ1dHRvblN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFNpbmdsZUJ1dHRvbiA9ICh7IHN0eWxlLCBjb250ZW50LCBjb2xvciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtidXR0b25TdHlsZXMuYnV0dG9ufSAke2J1dHRvblN0eWxlc1tjb2xvcl19YH1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb250ZW50fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQnV0dG9uO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU2luZ2xlQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2luZ2xlQnV0dG9uJztcclxuaW1wb3J0IGluZGV4U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9JbmRleC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGNvbXBvbmVuU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Db21wb25lbnRzLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3Qgc2lnbmluID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXIucHVzaCgnL3Bvc3RzJyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2luZGV4U3R5bGVzLm15YmFja2dyb3VuZH0gJHtpbmRleFN0eWxlcy5zaWduaW5JbWd9YH0+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e2luZGV4U3R5bGVzLmhlYWRpbmd9PlN0b3J5dGVsbDwvaDE+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17aW5kZXhTdHlsZXMuZmxleENlbnRlcn0gb25TdWJtaXQ9e3N1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXHJcbiAgICAgICAgICBtaW5MZW5ndGg9JzgnXHJcbiAgICAgICAgICBtYXhMZW5ndGg9JzIwJ1xyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTaW5nbGVCdXR0b24gY29udGVudD0nTG9naW4nIGNvbG9yPSdyZWRCdXR0b24nIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWduaW47XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIkNvbXBvbmVudHNfYnV0dG9uX18yNlZSSlwiLFxuXHRcIndoaXRlQnV0dG9uXCI6IFwiQ29tcG9uZW50c193aGl0ZUJ1dHRvbl9fM0tWSGxcIixcblx0XCJyZWRCdXR0b25cIjogXCJDb21wb25lbnRzX3JlZEJ1dHRvbl9fMU1GV1pcIixcblx0XCJ0ZXh0SW5wdXRcIjogXCJDb21wb25lbnRzX3RleHRJbnB1dF9fMXJ2LU9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm15YmFja2dyb3VuZFwiOiBcIkluZGV4X215YmFja2dyb3VuZF9fMmFDY0dcIixcblx0XCJpbmRleEltZ1wiOiBcIkluZGV4X2luZGV4SW1nX19JcXBwa1wiLFxuXHRcInNpZ25pbkltZ1wiOiBcIkluZGV4X3NpZ25pbkltZ19fMzE2RkJcIixcblx0XCJoZWFkaW5nXCI6IFwiSW5kZXhfaGVhZGluZ19fMnNFbXNcIixcblx0XCJpbmRleFNwYW5cIjogXCJJbmRleF9pbmRleFNwYW5fXzJ2MnRhXCIsXG5cdFwiZmxleENlbnRlclwiOiBcIkluZGV4X2ZsZXhDZW50ZXJfXzJKdU1jXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkZyYWdtZW50IiwiYnV0dG9uU3R5bGVzIiwiU2luZ2xlQnV0dG9uIiwic3R5bGUiLCJjb250ZW50IiwiY29sb3IiLCJidXR0b24iLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImluZGV4U3R5bGVzIiwiY29tcG9uZW5TdHlsZXMiLCJzaWduaW4iLCJyb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJteWJhY2tncm91bmQiLCJzaWduaW5JbWciLCJoZWFkaW5nIiwiZmxleENlbnRlciIsInRleHRJbnB1dCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==