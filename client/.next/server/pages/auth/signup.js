(() => {
var exports = {};
exports.id = "pages/auth/signup";
exports.ids = ["pages/auth/signup"];
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

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
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
/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Error.module.css */ "./styles/Error.module.css");
/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Components.module.css */ "./styles/Components.module.css");
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\auth\\signup.js";








const signup = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: passwordConfirm,
    1: setPasswordConfirm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: active,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const submit = e => {
    e.preventDefault();

    if (!username || !email || !password || !passwordConfirm) {
      return;
    }

    if (password !== passwordConfirm) {
      return setActive(true);
    }

    router.push('/posts');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: `${(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default().mybackground)}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      style: {
        color: '#000'
      },
      className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),
      children: "Storytell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
      className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default().flexCenter),
      onSubmit: submit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5___default().textInput),
        onChange: e => setUsername(e.target.value),
        type: "text",
        placeholder: "Username",
        minLength: "4",
        maxLength: "14",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5___default().textInput),
        onChange: e => setEmail(e.target.value),
        type: "email",
        placeholder: "Email",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5___default().textInput),
        onChange: e => setPasswordConfirm(e.target.value),
        type: "password",
        placeholder: "Password confirm",
        minLength: "8",
        maxLength: "20",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        className: !active ? (_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6___default().hide) : (_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6___default().errMessage),
        children: "Please confirm your password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_SingleButton__WEBPACK_IMPORTED_MODULE_2__.default, {
        content: "Register",
        color: "redButton"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signup);

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

/***/ "./styles/Error.module.css":
/*!*********************************!*\
  !*** ./styles/Error.module.css ***!
  \*********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"errorBanner": "Error_errorBanner__-BAs8",
	"hide": "Error_hide__2y-TV",
	"errMessage": "Error_errMessage__3vu-6"
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
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signup.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXV0aC9zaWdudXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsTUFBTUUsWUFBWSxHQUFHLENBQUM7QUFBRUMsRUFBQUEsS0FBRjtBQUFTQyxFQUFBQSxPQUFUO0FBQWtCQyxFQUFBQTtBQUFsQixDQUFELEtBQStCO0FBQ2xELHNCQUNFLDhEQUFDLDJDQUFEO0FBQUEsMkJBQ0U7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLFdBQUssRUFBRUYsS0FGVDtBQUdFLGVBQVMsRUFBRyxHQUFFRiw2RUFBb0IsSUFBR0Esc0VBQVksQ0FBQ0ksS0FBRCxDQUFRLEVBSDNEO0FBQUEsZ0JBS0dEO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBWkQ7O0FBYUEsaUVBQWVGLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTVUsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDTSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQlIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNTLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CViwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1csUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJaLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDYSxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ2UsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JoQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7O0FBRUEsUUFBTWlCLE1BQU0sR0FBSUMsQ0FBRCxJQUFPO0FBQ3BCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSSxDQUFDWixRQUFELElBQWEsQ0FBQ0UsS0FBZCxJQUF1QixDQUFDRSxRQUF4QixJQUFvQyxDQUFDRSxlQUF6QyxFQUEwRDtBQUN4RDtBQUNEOztBQUNELFFBQUlGLFFBQVEsS0FBS0UsZUFBakIsRUFBa0M7QUFDaEMsYUFBT0csU0FBUyxDQUFDLElBQUQsQ0FBaEI7QUFDRDs7QUFFRFYsSUFBQUEsTUFBTSxDQUFDYyxJQUFQLENBQVksUUFBWjtBQUNELEdBWEQ7O0FBYUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUcsR0FBRWxCLDhFQUF5QixFQUE1QztBQUFBLDRCQUNFO0FBQUksV0FBSyxFQUFFO0FBQUVKLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BQVg7QUFBOEIsZUFBUyxFQUFFSSx5RUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFNLGVBQVMsRUFBRUEsNEVBQWpCO0FBQXlDLGNBQVEsRUFBRWUsTUFBbkQ7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUViLGdGQURiO0FBRUUsZ0JBQVEsRUFBR2MsQ0FBRCxJQUFPVixXQUFXLENBQUNVLENBQUMsQ0FBQ08sTUFBRixDQUFTQyxLQUFWLENBRjlCO0FBR0UsWUFBSSxFQUFDLE1BSFA7QUFJRSxtQkFBVyxFQUFDLFVBSmQ7QUFLRSxpQkFBUyxFQUFDLEdBTFo7QUFNRSxpQkFBUyxFQUFDLElBTlo7QUFPRSxnQkFBUTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFVRTtBQUNFLGlCQUFTLEVBQUV0QixnRkFEYjtBQUVFLGdCQUFRLEVBQUdjLENBQUQsSUFBT1IsUUFBUSxDQUFDUSxDQUFDLENBQUNPLE1BQUYsQ0FBU0MsS0FBVixDQUYzQjtBQUdFLFlBQUksRUFBQyxPQUhQO0FBSUUsbUJBQVcsRUFBQyxPQUpkO0FBS0UsZ0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGLGVBaUJFO0FBQ0UsaUJBQVMsRUFBRXRCLGdGQURiO0FBRUUsZ0JBQVEsRUFBR2MsQ0FBRCxJQUFPTixXQUFXLENBQUNNLENBQUMsQ0FBQ08sTUFBRixDQUFTQyxLQUFWLENBRjlCO0FBR0UsWUFBSSxFQUFDLFVBSFA7QUFJRSxtQkFBVyxFQUFDLFVBSmQ7QUFLRSxpQkFBUyxFQUFDLEdBTFo7QUFNRSxpQkFBUyxFQUFDLElBTlo7QUFPRSxnQkFBUTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGLGVBMEJFO0FBQ0UsaUJBQVMsRUFBRXRCLGdGQURiO0FBRUUsZ0JBQVEsRUFBR2MsQ0FBRCxJQUFPSixrQkFBa0IsQ0FBQ0ksQ0FBQyxDQUFDTyxNQUFGLENBQVNDLEtBQVYsQ0FGckM7QUFHRSxZQUFJLEVBQUMsVUFIUDtBQUlFLG1CQUFXLEVBQUMsa0JBSmQ7QUFLRSxpQkFBUyxFQUFDLEdBTFo7QUFNRSxpQkFBUyxFQUFDLElBTlo7QUFPRSxnQkFBUTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUJGLGVBbUNFO0FBQU0saUJBQVMsRUFBRSxDQUFDWCxNQUFELEdBQVVaLHNFQUFWLEdBQTZCQSw0RUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkNGLGVBc0NFLDhEQUFDLDZEQUFEO0FBQWMsZUFBTyxFQUFDLFVBQXRCO0FBQWlDLGFBQUssRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUErQ0QsQ0FwRUQ7O0FBc0VBLGlFQUFlRSxNQUFmOzs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9TaW5nbGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXV0aC9zaWdudXAuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3R5bGVzL0NvbXBvbmVudHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zdHlsZXMvRXJyb3IubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zdHlsZXMvSW5kZXgubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBidXR0b25TdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NvbXBvbmVudHMubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBTaW5nbGVCdXR0b24gPSAoeyBzdHlsZSwgY29udGVudCwgY29sb3IgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7YnV0dG9uU3R5bGVzLmJ1dHRvbn0gJHtidXR0b25TdHlsZXNbY29sb3JdfWB9XHJcbiAgICAgID5cclxuICAgICAgICB7Y29udGVudH1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUJ1dHRvbjtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNpbmdsZUJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpbmdsZUJ1dHRvbic7XHJcbmltcG9ydCBpbmRleFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSW5kZXgubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBlcnJvclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvRXJyb3IubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBjb21wb25lblN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IHNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRDb25maXJtLCBzZXRQYXNzd29yZENvbmZpcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFwYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgcmV0dXJuIHNldEFjdGl2ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXIucHVzaCgnL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpbmRleFN0eWxlcy5teWJhY2tncm91bmR9YH0+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJyMwMDAnIH19IGNsYXNzTmFtZT17aW5kZXhTdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgU3Rvcnl0ZWxsXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17aW5kZXhTdHlsZXMuZmxleENlbnRlcn0gb25TdWJtaXQ9e3N1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZSdcclxuICAgICAgICAgIG1pbkxlbmd0aD0nNCdcclxuICAgICAgICAgIG1heExlbmd0aD0nMTQnXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXHJcbiAgICAgICAgICBtaW5MZW5ndGg9JzgnXHJcbiAgICAgICAgICBtYXhMZW5ndGg9JzIwJ1xyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lblN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkQ29uZmlybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCBjb25maXJtJ1xyXG4gICAgICAgICAgbWluTGVuZ3RoPSc4J1xyXG4gICAgICAgICAgbWF4TGVuZ3RoPScyMCdcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyFhY3RpdmUgPyBlcnJvclN0eWxlcy5oaWRlIDogZXJyb3JTdHlsZXMuZXJyTWVzc2FnZX0+XHJcbiAgICAgICAgICBQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxTaW5nbGVCdXR0b24gY29udGVudD0nUmVnaXN0ZXInIGNvbG9yPSdyZWRCdXR0b24nIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWdudXA7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIkNvbXBvbmVudHNfYnV0dG9uX18yNlZSSlwiLFxuXHRcIndoaXRlQnV0dG9uXCI6IFwiQ29tcG9uZW50c193aGl0ZUJ1dHRvbl9fM0tWSGxcIixcblx0XCJyZWRCdXR0b25cIjogXCJDb21wb25lbnRzX3JlZEJ1dHRvbl9fMU1GV1pcIixcblx0XCJ0ZXh0SW5wdXRcIjogXCJDb21wb25lbnRzX3RleHRJbnB1dF9fMXJ2LU9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVycm9yQmFubmVyXCI6IFwiRXJyb3JfZXJyb3JCYW5uZXJfXy1CQXM4XCIsXG5cdFwiaGlkZVwiOiBcIkVycm9yX2hpZGVfXzJ5LVRWXCIsXG5cdFwiZXJyTWVzc2FnZVwiOiBcIkVycm9yX2Vyck1lc3NhZ2VfXzN2dS02XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJteWJhY2tncm91bmRcIjogXCJJbmRleF9teWJhY2tncm91bmRfXzJhQ2NHXCIsXG5cdFwiaW5kZXhJbWdcIjogXCJJbmRleF9pbmRleEltZ19fSXFwcGtcIixcblx0XCJzaWduaW5JbWdcIjogXCJJbmRleF9zaWduaW5JbWdfXzMxNkZCXCIsXG5cdFwiaGVhZGluZ1wiOiBcIkluZGV4X2hlYWRpbmdfXzJzRW1zXCIsXG5cdFwiaW5kZXhTcGFuXCI6IFwiSW5kZXhfaW5kZXhTcGFuX18ydjJ0YVwiLFxuXHRcImZsZXhDZW50ZXJcIjogXCJJbmRleF9mbGV4Q2VudGVyX18ySnVNY1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJGcmFnbWVudCIsImJ1dHRvblN0eWxlcyIsIlNpbmdsZUJ1dHRvbiIsInN0eWxlIiwiY29udGVudCIsImNvbG9yIiwiYnV0dG9uIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJpbmRleFN0eWxlcyIsImVycm9yU3R5bGVzIiwiY29tcG9uZW5TdHlsZXMiLCJzaWdudXAiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm0iLCJzZXRQYXNzd29yZENvbmZpcm0iLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwibXliYWNrZ3JvdW5kIiwiaGVhZGluZyIsImZsZXhDZW50ZXIiLCJ0ZXh0SW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhpZGUiLCJlcnJNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==