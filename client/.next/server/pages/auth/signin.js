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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SingleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SingleButton */ "./components/SingleButton.js");
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Index.module.css */ "./styles/Index.module.css");
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Components.module.css */ "./styles/Components.module.css");
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-request */ "./hooks/use-request.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
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
    doRequest,
    errors
  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_4__.default)({
    url: 'http://localhost:8000/api/auth/signin',
    method: 'post',
    body: {
      email,
      password
    },
    onSuccess: () => next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/posts')
  });

  const submit = async e => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    const res = await doRequest();

    if (res) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set('jwt', res.token);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: `${(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default().mybackground)} ${(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default().signinImg)}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default().heading),
      children: "Storytell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
      className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default().flexCenter),
      onSubmit: submit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7___default().textInput),
        onChange: e => setEmail(e.target.value),
        type: "email",
        placeholder: "Email",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7___default().textInput),
        onChange: e => setPassword(e.target.value),
        type: "password",
        placeholder: "Password",
        minLength: "8",
        maxLength: "20",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), errors, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_SingleButton__WEBPACK_IMPORTED_MODULE_3__.default, {
        content: "Login",
        color: "redButton"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXV0aC9zaWduaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsTUFBTUUsWUFBWSxHQUFHLENBQUM7QUFBRUMsRUFBQUEsS0FBRjtBQUFTQyxFQUFBQSxPQUFUO0FBQWtCQyxFQUFBQTtBQUFsQixDQUFELEtBQStCO0FBQ2xELHNCQUNFLDhEQUFDLDJDQUFEO0FBQUEsMkJBQ0U7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLFdBQUssRUFBRUYsS0FGVDtBQUdFLGVBQVMsRUFBRyxHQUFFRiw2RUFBb0IsSUFBR0Esc0VBQVksQ0FBQ0ksS0FBRCxDQUFRLEVBSDNEO0FBQUEsZ0JBS0dEO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBWkQ7O0FBYUEsaUVBQWVGLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNUSxVQUFVLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxHQUFGO0FBQU9DLEVBQUFBLE1BQVA7QUFBZUMsRUFBQUEsT0FBZjtBQUF3QkMsRUFBQUEsSUFBeEI7QUFBOEJDLEVBQUFBO0FBQTlCLENBQUQsS0FBK0M7QUFDaEUsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCVCwrQ0FBUSxDQUFDLElBQUQsQ0FBcEM7O0FBRUEsUUFBTVUsU0FBUyxHQUFHLE9BQU9DLEtBQUssR0FBRyxFQUFmLEtBQXNCO0FBQ3RDLFFBQUk7QUFDRkYsTUFBQUEsU0FBUyxDQUFDLElBQUQsQ0FBVDtBQUNBLFlBQU1HLFFBQVEsR0FBRyxNQUFNYiw4Q0FBSyxDQUFDSyxNQUFELENBQUwsQ0FDckJELEdBRHFCLGtDQUVoQkcsSUFGZ0IsR0FFUEssS0FGTyxHQUdyQjtBQUNFTixRQUFBQTtBQURGLE9BSHFCLENBQXZCOztBQVFBLFVBQUlFLFNBQUosRUFBZTtBQUNiQSxRQUFBQSxTQUFTLENBQUNLLFFBQVEsQ0FBQ0MsSUFBVixDQUFUO0FBQ0Q7O0FBRUQsYUFBT0QsUUFBUSxDQUFDQyxJQUFoQjtBQUNELEtBZkQsQ0FlRSxPQUFPQyxHQUFQLEVBQVk7QUFDWkwsTUFBQUEsU0FBUyxlQUNQO0FBQUssaUJBQVMsRUFBRVIsNkVBQWhCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLGVBQUssRUFBRTtBQUFFZSxZQUFBQSxTQUFTLEVBQUU7QUFBYixXQUFYO0FBQUEsb0JBQ0dGLEdBQUcsQ0FBQ0YsUUFBSixDQUFhQyxJQUFiLENBQWtCTCxNQUFsQixDQUF5QlMsR0FBekIsQ0FBOEJILEdBQUQsaUJBQzVCO0FBQUEsc0JBQXVCQSxHQUFHLENBQUNJO0FBQTNCLGFBQVNKLEdBQUcsQ0FBQ0ksT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRE8sQ0FBVDtBQVVEO0FBQ0YsR0E1QkQ7O0FBOEJBLFNBQU87QUFBRVIsSUFBQUEsU0FBRjtBQUFhRixJQUFBQTtBQUFiLEdBQVA7QUFDRCxDQWxDRDs7QUFvQ0EsaUVBQWVOLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTXFCLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQnpCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDMEIsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEIzQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUVVLElBQUFBLFNBQUY7QUFBYUYsSUFBQUE7QUFBYixNQUF3Qk4sMkRBQVUsQ0FBQztBQUN2Q0MsSUFBQUEsR0FBRyxFQUFFLHVDQURrQztBQUV2Q0MsSUFBQUEsTUFBTSxFQUFFLE1BRitCO0FBR3ZDRSxJQUFBQSxJQUFJLEVBQUU7QUFDSmtCLE1BQUFBLEtBREk7QUFFSkUsTUFBQUE7QUFGSSxLQUhpQztBQU92Q25CLElBQUFBLFNBQVMsRUFBRSxNQUFNYSx1REFBQSxDQUFZLFFBQVo7QUFQc0IsR0FBRCxDQUF4Qzs7QUFVQSxRQUFNUyxNQUFNLEdBQUcsTUFBT0MsQ0FBUCxJQUFhO0FBQzFCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSSxDQUFDUCxLQUFELElBQVUsQ0FBQ0UsUUFBZixFQUF5QjtBQUN2QjtBQUNEOztBQUVELFVBQU1NLEdBQUcsR0FBRyxNQUFNdEIsU0FBUyxFQUEzQjs7QUFDQSxRQUFJc0IsR0FBSixFQUFTO0FBQ1BiLE1BQUFBLG9EQUFBLENBQVksS0FBWixFQUFtQmEsR0FBRyxDQUFDRSxLQUF2QjtBQUNEO0FBQ0YsR0FYRDs7QUFZQSxzQkFDRTtBQUFLLGFBQVMsRUFBRyxHQUFFYiw4RUFBeUIsSUFBR0EsMkVBQXNCLEVBQXJFO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUVBLHlFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxlQUFTLEVBQUVBLDRFQUFqQjtBQUF5QyxjQUFRLEVBQUVRLE1BQW5EO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxFQUFFUCxnRkFEYjtBQUVFLGdCQUFRLEVBQUdRLENBQUQsSUFBT0wsUUFBUSxDQUFDSyxDQUFDLENBQUNVLE1BQUYsQ0FBU0MsS0FBVixDQUYzQjtBQUdFLFlBQUksRUFBQyxPQUhQO0FBSUUsbUJBQVcsRUFBQyxPQUpkO0FBS0UsZ0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBUUU7QUFDRSxpQkFBUyxFQUFFbkIsZ0ZBRGI7QUFFRSxnQkFBUSxFQUFHUSxDQUFELElBQU9ILFdBQVcsQ0FBQ0csQ0FBQyxDQUFDVSxNQUFGLENBQVNDLEtBQVYsQ0FGOUI7QUFHRSxZQUFJLEVBQUMsVUFIUDtBQUlFLG1CQUFXLEVBQUMsVUFKZDtBQUtFLGlCQUFTLEVBQUMsR0FMWjtBQU1FLGlCQUFTLEVBQUMsSUFOWjtBQU9FLGdCQUFRO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixFQWlCR2pDLE1BakJILGVBa0JFLDhEQUFDLDZEQUFEO0FBQWMsZUFBTyxFQUFDLE9BQXRCO0FBQThCLGFBQUssRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQsQ0FsREQ7O0FBb0RBLGlFQUFlZSxNQUFmOzs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvU2luZ2xlQnV0dG9uLmpzIiwid2VicGFjazovL2NsaWVudC8uL2hvb2tzL3VzZS1yZXF1ZXN0LmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2F1dGgvc2lnbmluLmpzIiwid2VicGFjazovL2NsaWVudC8uL3N0eWxlcy9Db21wb25lbnRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3R5bGVzL0Vycm9yLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3R5bGVzL0luZGV4Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBidXR0b25TdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NvbXBvbmVudHMubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBTaW5nbGVCdXR0b24gPSAoeyBzdHlsZSwgY29udGVudCwgY29sb3IgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7YnV0dG9uU3R5bGVzLmJ1dHRvbn0gJHtidXR0b25TdHlsZXNbY29sb3JdfWB9XHJcbiAgICAgID5cclxuICAgICAgICB7Y29udGVudH1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUJ1dHRvbjtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBnZW5lcmFsRXJyb3IgZnJvbSAnLi4vc3R5bGVzL0Vycm9yLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgdXNlUmVxdWVzdCA9ICh7IHVybCwgbWV0aG9kLCBoZWFkZXJzLCBib2R5LCBvblN1Y2Nlc3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgZG9SZXF1ZXN0ID0gYXN5bmMgKHByb3BzID0ge30pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEVycm9ycyhudWxsKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1ttZXRob2RdKFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICB7IC4uLmJvZHksIC4uLnByb3BzIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAob25TdWNjZXNzKSB7XHJcbiAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcnMoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dlbmVyYWxFcnJvci5lcnJvckJhbm5lcn0+XHJcbiAgICAgICAgICA8aDQ+T29vcHMuLi4uPC9oND5cclxuICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fT5cclxuICAgICAgICAgICAge2Vyci5yZXNwb25zZS5kYXRhLmVycm9ycy5tYXAoKGVycikgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2Vyci5tZXNzYWdlfT57ZXJyLm1lc3NhZ2V9PC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGRvUmVxdWVzdCwgZXJyb3JzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0O1xyXG4iLCJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTaW5nbGVCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaW5nbGVCdXR0b24nO1xyXG5pbXBvcnQgaW5kZXhTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0luZGV4Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgY29tcG9uZW50U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Db21wb25lbnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVxdWVzdCc7XHJcblxyXG5jb25zdCBzaWduaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBkb1JlcXVlc3QsIGVycm9ycyB9ID0gdXNlUmVxdWVzdCh7XHJcbiAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvc2lnbmluJyxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgYm9keToge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9LFxyXG4gICAgb25TdWNjZXNzOiAoKSA9PiBSb3V0ZXIucHVzaCgnL3Bvc3RzJyksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRvUmVxdWVzdCgpO1xyXG4gICAgaWYgKHJlcykge1xyXG4gICAgICBDb29raWVzLnNldCgnand0JywgcmVzLnRva2VuKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aW5kZXhTdHlsZXMubXliYWNrZ3JvdW5kfSAke2luZGV4U3R5bGVzLnNpZ25pbkltZ31gfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17aW5kZXhTdHlsZXMuaGVhZGluZ30+U3Rvcnl0ZWxsPC9oMT5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtpbmRleFN0eWxlcy5mbGV4Q2VudGVyfSBvblN1Ym1pdD17c3VibWl0fT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xyXG4gICAgICAgICAgbWluTGVuZ3RoPSc4J1xyXG4gICAgICAgICAgbWF4TGVuZ3RoPScyMCdcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZXJyb3JzfVxyXG4gICAgICAgIDxTaW5nbGVCdXR0b24gY29udGVudD0nTG9naW4nIGNvbG9yPSdyZWRCdXR0b24nIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWduaW47XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIkNvbXBvbmVudHNfYnV0dG9uX18yNlZSSlwiLFxuXHRcIndoaXRlQnV0dG9uXCI6IFwiQ29tcG9uZW50c193aGl0ZUJ1dHRvbl9fM0tWSGxcIixcblx0XCJyZWRCdXR0b25cIjogXCJDb21wb25lbnRzX3JlZEJ1dHRvbl9fMU1GV1pcIixcblx0XCJ0ZXh0SW5wdXRcIjogXCJDb21wb25lbnRzX3RleHRJbnB1dF9fMXJ2LU9cIixcblx0XCJidG5XcmFwcGVyXCI6IFwiQ29tcG9uZW50c19idG5XcmFwcGVyX18zYkYyWVwiLFxuXHRcImNhbmNlbEJ0blwiOiBcIkNvbXBvbmVudHNfY2FuY2VsQnRuX18tUjNnblwiLFxuXHRcImFwcGx5QnRuXCI6IFwiQ29tcG9uZW50c19hcHBseUJ0bl9fM05PQnhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVycm9yQmFubmVyXCI6IFwiRXJyb3JfZXJyb3JCYW5uZXJfXy1CQXM4XCIsXG5cdFwiaGlkZVwiOiBcIkVycm9yX2hpZGVfXzJ5LVRWXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJteWJhY2tncm91bmRcIjogXCJJbmRleF9teWJhY2tncm91bmRfXzJhQ2NHXCIsXG5cdFwiaW5kZXhJbWdcIjogXCJJbmRleF9pbmRleEltZ19fSXFwcGtcIixcblx0XCJzaWduaW5JbWdcIjogXCJJbmRleF9zaWduaW5JbWdfXzMxNkZCXCIsXG5cdFwiaGVhZGluZ1wiOiBcIkluZGV4X2hlYWRpbmdfXzJzRW1zXCIsXG5cdFwiaW5kZXhTcGFuXCI6IFwiSW5kZXhfaW5kZXhTcGFuX18ydjJ0YVwiLFxuXHRcImZsZXhDZW50ZXJcIjogXCJJbmRleF9mbGV4Q2VudGVyX18ySnVNY1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJidXR0b25TdHlsZXMiLCJTaW5nbGVCdXR0b24iLCJzdHlsZSIsImNvbnRlbnQiLCJjb2xvciIsImJ1dHRvbiIsImF4aW9zIiwidXNlU3RhdGUiLCJnZW5lcmFsRXJyb3IiLCJ1c2VSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJvblN1Y2Nlc3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJkb1JlcXVlc3QiLCJwcm9wcyIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsImVycm9yQmFubmVyIiwibGlzdFN0eWxlIiwibWFwIiwibWVzc2FnZSIsIkNvb2tpZXMiLCJSb3V0ZXIiLCJpbmRleFN0eWxlcyIsImNvbXBvbmVudFN0eWxlcyIsInNpZ25pbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicHVzaCIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsInNldCIsInRva2VuIiwibXliYWNrZ3JvdW5kIiwic2lnbmluSW1nIiwiaGVhZGluZyIsImZsZXhDZW50ZXIiLCJ0ZXh0SW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=