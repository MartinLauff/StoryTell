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
      const response = await (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, _objectSpread(_objectSpread({}, body), props));

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
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
          style: {
            listStyle: 'none'
          },
          children: err.response.data.errors.map(err => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
            children: err.message
          }, err.message, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1FLGlCQUFTLEVBQUMsSUFOWjtBQU9FLGdCQUFRO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixFQWlCR2pDLE1BakJILGVBa0JFLDhEQUFDLDZEQUFEO0FBQWMsZUFBTyxFQUFDLE9BQXRCO0FBQThCLGFBQUssRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQsQ0FsREQ7O0FBb0RBLGlFQUFlZSxNQUFmOzs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvU2luZ2xlQnV0dG9uLmpzIiwid2VicGFjazovL2NsaWVudC8uL2hvb2tzL3VzZS1yZXF1ZXN0LmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2F1dGgvc2lnbmluLmpzIiwid2VicGFjazovL2NsaWVudC8uL3N0eWxlcy9Db21wb25lbnRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3R5bGVzL0Vycm9yLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3R5bGVzL0luZGV4Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBidXR0b25TdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NvbXBvbmVudHMubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBTaW5nbGVCdXR0b24gPSAoeyBzdHlsZSwgY29udGVudCwgY29sb3IgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7YnV0dG9uU3R5bGVzLmJ1dHRvbn0gJHtidXR0b25TdHlsZXNbY29sb3JdfWB9XHJcbiAgICAgID5cclxuICAgICAgICB7Y29udGVudH1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUJ1dHRvbjtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBnZW5lcmFsRXJyb3IgZnJvbSAnLi4vc3R5bGVzL0Vycm9yLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgdXNlUmVxdWVzdCA9ICh7IHVybCwgbWV0aG9kLCBib2R5LCBvblN1Y2Nlc3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgZG9SZXF1ZXN0ID0gYXN5bmMgKHByb3BzID0ge30pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEVycm9ycyhudWxsKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1ttZXRob2RdKHVybCwge1xyXG4gICAgICAgIC4uLmJvZHksXHJcbiAgICAgICAgLi4ucHJvcHMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKG9uU3VjY2Vzcykge1xyXG4gICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXJyb3JzKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZW5lcmFsRXJyb3IuZXJyb3JCYW5uZXJ9PlxyXG4gICAgICAgICAgPGg0Pk9vb3BzLi4uLjwvaDQ+XHJcbiAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIHtlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMubWFwKChlcnIpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtlcnIubWVzc2FnZX0+e2Vyci5tZXNzYWdlfTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBkb1JlcXVlc3QsIGVycm9ycyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdDtcclxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU2luZ2xlQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2luZ2xlQnV0dG9uJztcclxuaW1wb3J0IGluZGV4U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9JbmRleC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGNvbXBvbmVuU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Db21wb25lbnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVxdWVzdCc7XHJcblxyXG5jb25zdCBzaWduaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBkb1JlcXVlc3QsIGVycm9ycyB9ID0gdXNlUmVxdWVzdCh7XHJcbiAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvc2lnbmluJyxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgYm9keToge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9LFxyXG4gICAgb25TdWNjZXNzOiAoKSA9PiBSb3V0ZXIucHVzaCgnL3Bvc3RzJyksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRvUmVxdWVzdCgpO1xyXG4gICAgaWYgKHJlcykge1xyXG4gICAgICBDb29raWVzLnNldCgnand0JywgcmVzLnRva2VuKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aW5kZXhTdHlsZXMubXliYWNrZ3JvdW5kfSAke2luZGV4U3R5bGVzLnNpZ25pbkltZ31gfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17aW5kZXhTdHlsZXMuaGVhZGluZ30+U3Rvcnl0ZWxsPC9oMT5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtpbmRleFN0eWxlcy5mbGV4Q2VudGVyfSBvblN1Ym1pdD17c3VibWl0fT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW5TdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW5TdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcclxuICAgICAgICAgIG1pbkxlbmd0aD0nOCdcclxuICAgICAgICAgIG1heExlbmd0aD0nMjAnXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9yc31cclxuICAgICAgICA8U2luZ2xlQnV0dG9uIGNvbnRlbnQ9J0xvZ2luJyBjb2xvcj0ncmVkQnV0dG9uJyAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lnbmluO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJDb21wb25lbnRzX2J1dHRvbl9fMjZWUkpcIixcblx0XCJ3aGl0ZUJ1dHRvblwiOiBcIkNvbXBvbmVudHNfd2hpdGVCdXR0b25fXzNLVkhsXCIsXG5cdFwicmVkQnV0dG9uXCI6IFwiQ29tcG9uZW50c19yZWRCdXR0b25fXzFNRldaXCIsXG5cdFwidGV4dElucHV0XCI6IFwiQ29tcG9uZW50c190ZXh0SW5wdXRfXzFydi1PXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlcnJvckJhbm5lclwiOiBcIkVycm9yX2Vycm9yQmFubmVyX18tQkFzOFwiLFxuXHRcImhpZGVcIjogXCJFcnJvcl9oaWRlX18yeS1UVlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibXliYWNrZ3JvdW5kXCI6IFwiSW5kZXhfbXliYWNrZ3JvdW5kX18yYUNjR1wiLFxuXHRcImluZGV4SW1nXCI6IFwiSW5kZXhfaW5kZXhJbWdfX0lxcHBrXCIsXG5cdFwic2lnbmluSW1nXCI6IFwiSW5kZXhfc2lnbmluSW1nX18zMTZGQlwiLFxuXHRcImhlYWRpbmdcIjogXCJJbmRleF9oZWFkaW5nX18yc0Vtc1wiLFxuXHRcImluZGV4U3BhblwiOiBcIkluZGV4X2luZGV4U3Bhbl9fMnYydGFcIixcblx0XCJmbGV4Q2VudGVyXCI6IFwiSW5kZXhfZmxleENlbnRlcl9fMkp1TWNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkZyYWdtZW50IiwiYnV0dG9uU3R5bGVzIiwiU2luZ2xlQnV0dG9uIiwic3R5bGUiLCJjb250ZW50IiwiY29sb3IiLCJidXR0b24iLCJheGlvcyIsInVzZVN0YXRlIiwiZ2VuZXJhbEVycm9yIiwidXNlUmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJkb1JlcXVlc3QiLCJwcm9wcyIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsImVycm9yQmFubmVyIiwibGlzdFN0eWxlIiwibWFwIiwibWVzc2FnZSIsIkNvb2tpZXMiLCJSb3V0ZXIiLCJpbmRleFN0eWxlcyIsImNvbXBvbmVuU3R5bGVzIiwic2lnbmluIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwdXNoIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwic2V0IiwidG9rZW4iLCJteWJhY2tncm91bmQiLCJzaWduaW5JbWciLCJoZWFkaW5nIiwiZmxleENlbnRlciIsInRleHRJbnB1dCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==