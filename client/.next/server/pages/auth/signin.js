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

/***/ "./context/GlobalCtx.js":
/*!******************************!*\
  !*** ./context/GlobalCtx.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": () => (/* binding */ GlobalContext),
/* harmony export */   "GlobalProvider": () => (/* binding */ GlobalProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\context\\GlobalCtx.js";


const GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const GlobalProvider = ({
  children
}) => {
  const {
    0: sidebar,
    1: setSidebar
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: rotateDots,
    1: setRotateDots
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: currentUser,
    1: setCurrentUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlobalContext.Provider, {
    value: {
      sidebar,
      setSidebar,
      rotateDots,
      setRotateDots,
      currentUser,
      setCurrentUser
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Error.module.css */ "./styles/Error.module.css");
/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\hooks\\use-request.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const useRequest = ({
  url,
  method,
  headers,
  body,
  onSuccess
}) => {
  const {
    0: errors,
    1: setErrors
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, _objectSpread(_objectSpread({}, body), props), {
        headers
      });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_3___default().errorBanner),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
          children: "Ooops...."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
          style: {
            listStyle: 'none'
          },
          children: err.response.data.errors.map(err => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
            children: err.message
          }, err.message, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined));
    }
  };

  return {
    doRequest,
    errors
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRequest);

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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/GlobalCtx */ "./context/GlobalCtx.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SingleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SingleButton */ "./components/SingleButton.js");
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Index.module.css */ "./styles/Index.module.css");
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Components.module.css */ "./styles/Components.module.css");
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-request */ "./hooks/use-request.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\auth\\signin.js";










const signin = () => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    setCurrentUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__.GlobalContext);
  const {
    doRequest,
    errors
  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__.default)({
    url: 'http://localhost:8000/api/auth/signin',
    method: 'post',
    body: {
      email,
      password
    },
    onSuccess: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/posts')
  });

  const submit = async e => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    const res = await doRequest();

    if (res) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set('jwt', res.token);
      setCurrentUser(res.data.existingUser);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: `${(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7___default().mybackground)} ${(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7___default().signinImg)}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7___default().heading),
      children: "Storytell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
      className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_7___default().flexCenter),
      onSubmit: submit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8___default().textInput),
        onChange: e => setEmail(e.target.value),
        type: "email",
        placeholder: "Email",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8___default().textInput),
        onChange: e => setPassword(e.target.value),
        type: "password",
        placeholder: "Password",
        minLength: "8",
        maxLength: "20",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), errors, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_SingleButton__WEBPACK_IMPORTED_MODULE_4__.default, {
        content: "Login",
        color: "redButton"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
	"textInput": "Components_textInput__1rv-O",
	"btnWrapper": "Components_btnWrapper__3bF2Y",
	"cancelBtn": "Components_cancelBtn__-R3gn",
	"applyBtn": "Components_applyBtn__3NOBx"
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
	"hide": "Error_hide__2y-TV"
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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQsQ0FwREQ7O0FBc0RBLGlFQUFlZ0IsTUFBZjs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1NpbmdsZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L0dsb2JhbEN0eC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ob29rcy91c2UtcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hdXRoL3NpZ25pbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC8uL3N0eWxlcy9FcnJvci5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC8uL3N0eWxlcy9JbmRleC5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYnV0dG9uU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Db21wb25lbnRzLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgU2luZ2xlQnV0dG9uID0gKHsgc3R5bGUsIGNvbnRlbnQsIGNvbG9yIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICBjbGFzc05hbWU9e2Ake2J1dHRvblN0eWxlcy5idXR0b259ICR7YnV0dG9uU3R5bGVzW2NvbG9yXX1gfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVCdXR0b247XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3NpZGViYXIsIHNldFNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyb3RhdGVEb3RzLCBzZXRSb3RhdGVEb3RzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBzaWRlYmFyLFxyXG4gICAgICAgIHNldFNpZGViYXIsXHJcbiAgICAgICAgcm90YXRlRG90cyxcclxuICAgICAgICBzZXRSb3RhdGVEb3RzLFxyXG4gICAgICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBnZW5lcmFsRXJyb3IgZnJvbSAnLi4vc3R5bGVzL0Vycm9yLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgdXNlUmVxdWVzdCA9ICh7IHVybCwgbWV0aG9kLCBoZWFkZXJzLCBib2R5LCBvblN1Y2Nlc3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgZG9SZXF1ZXN0ID0gYXN5bmMgKHByb3BzID0ge30pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEVycm9ycyhudWxsKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1ttZXRob2RdKFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICB7IC4uLmJvZHksIC4uLnByb3BzIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAob25TdWNjZXNzKSB7XHJcbiAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcnMoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dlbmVyYWxFcnJvci5lcnJvckJhbm5lcn0+XHJcbiAgICAgICAgICA8aDQ+T29vcHMuLi4uPC9oND5cclxuICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fT5cclxuICAgICAgICAgICAge2Vyci5yZXNwb25zZS5kYXRhLmVycm9ycy5tYXAoKGVycikgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2Vyci5tZXNzYWdlfT57ZXJyLm1lc3NhZ2V9PC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGRvUmVxdWVzdCwgZXJyb3JzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0O1xyXG4iLCJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvR2xvYmFsQ3R4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTaW5nbGVCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaW5nbGVCdXR0b24nO1xyXG5pbXBvcnQgaW5kZXhTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0luZGV4Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgY29tcG9uZW50U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Db21wb25lbnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVxdWVzdCc7XHJcblxyXG5jb25zdCBzaWduaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBzZXRDdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCB7IGRvUmVxdWVzdCwgZXJyb3JzIH0gPSB1c2VSZXF1ZXN0KHtcclxuICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9zaWduaW4nLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICBib2R5OiB7XHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgIH0sXHJcbiAgICBvblN1Y2Nlc3M6ICgpID0+IFJvdXRlci5wdXNoKCcvcG9zdHMnKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZG9SZXF1ZXN0KCk7XHJcbiAgICBpZiAocmVzKSB7XHJcbiAgICAgIENvb2tpZXMuc2V0KCdqd3QnLCByZXMudG9rZW4pO1xyXG4gICAgICBzZXRDdXJyZW50VXNlcihyZXMuZGF0YS5leGlzdGluZ1VzZXIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpbmRleFN0eWxlcy5teWJhY2tncm91bmR9ICR7aW5kZXhTdHlsZXMuc2lnbmluSW1nfWB9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtpbmRleFN0eWxlcy5oZWFkaW5nfT5TdG9yeXRlbGw8L2gxPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2luZGV4U3R5bGVzLmZsZXhDZW50ZXJ9IG9uU3VibWl0PXtzdWJtaXR9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXHJcbiAgICAgICAgICBtaW5MZW5ndGg9JzgnXHJcbiAgICAgICAgICBtYXhMZW5ndGg9JzIwJ1xyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnN9XHJcbiAgICAgICAgPFNpbmdsZUJ1dHRvbiBjb250ZW50PSdMb2dpbicgY29sb3I9J3JlZEJ1dHRvbicgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ25pbjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiQ29tcG9uZW50c19idXR0b25fXzI2VlJKXCIsXG5cdFwid2hpdGVCdXR0b25cIjogXCJDb21wb25lbnRzX3doaXRlQnV0dG9uX18zS1ZIbFwiLFxuXHRcInJlZEJ1dHRvblwiOiBcIkNvbXBvbmVudHNfcmVkQnV0dG9uX18xTUZXWlwiLFxuXHRcInRleHRJbnB1dFwiOiBcIkNvbXBvbmVudHNfdGV4dElucHV0X18xcnYtT1wiLFxuXHRcImJ0bldyYXBwZXJcIjogXCJDb21wb25lbnRzX2J0bldyYXBwZXJfXzNiRjJZXCIsXG5cdFwiY2FuY2VsQnRuXCI6IFwiQ29tcG9uZW50c19jYW5jZWxCdG5fXy1SM2duXCIsXG5cdFwiYXBwbHlCdG5cIjogXCJDb21wb25lbnRzX2FwcGx5QnRuX18zTk9CeFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXJyb3JCYW5uZXJcIjogXCJFcnJvcl9lcnJvckJhbm5lcl9fLUJBczhcIixcblx0XCJoaWRlXCI6IFwiRXJyb3JfaGlkZV9fMnktVFZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm15YmFja2dyb3VuZFwiOiBcIkluZGV4X215YmFja2dyb3VuZF9fMmFDY0dcIixcblx0XCJpbmRleEltZ1wiOiBcIkluZGV4X2luZGV4SW1nX19JcXBwa1wiLFxuXHRcInNpZ25pbkltZ1wiOiBcIkluZGV4X3NpZ25pbkltZ19fMzE2RkJcIixcblx0XCJoZWFkaW5nXCI6IFwiSW5kZXhfaGVhZGluZ19fMnNFbXNcIixcblx0XCJpbmRleFNwYW5cIjogXCJJbmRleF9pbmRleFNwYW5fXzJ2MnRhXCIsXG5cdFwiZmxleENlbnRlclwiOiBcIkluZGV4X2ZsZXhDZW50ZXJfXzJKdU1jXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJGcmFnbWVudCIsImJ1dHRvblN0eWxlcyIsIlNpbmdsZUJ1dHRvbiIsInN0eWxlIiwiY29udGVudCIsImNvbG9yIiwiYnV0dG9uIiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiR2xvYmFsQ29udGV4dCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzaWRlYmFyIiwic2V0U2lkZWJhciIsInJvdGF0ZURvdHMiLCJzZXRSb3RhdGVEb3RzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsImF4aW9zIiwiZ2VuZXJhbEVycm9yIiwidXNlUmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwib25TdWNjZXNzIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiZG9SZXF1ZXN0IiwicHJvcHMiLCJyZXNwb25zZSIsImRhdGEiLCJlcnIiLCJlcnJvckJhbm5lciIsImxpc3RTdHlsZSIsIm1hcCIsIm1lc3NhZ2UiLCJDb29raWVzIiwidXNlQ29udGV4dCIsIlJvdXRlciIsImluZGV4U3R5bGVzIiwiY29tcG9uZW50U3R5bGVzIiwic2lnbmluIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwdXNoIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwic2V0IiwidG9rZW4iLCJleGlzdGluZ1VzZXIiLCJteWJhY2tncm91bmQiLCJzaWduaW5JbWciLCJoZWFkaW5nIiwiZmxleENlbnRlciIsInRleHRJbnB1dCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==