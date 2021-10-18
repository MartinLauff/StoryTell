(() => {
var exports = {};
exports.id = "pages/auth/signout";
exports.ids = ["pages/auth/signout"];
exports.modules = {

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

/***/ "./pages/auth/signout.js":
/*!*******************************!*\
  !*** ./pages/auth/signout.js ***!
  \*******************************/
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ "./hooks/use-request.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\auth\\signout.js";






const signout = () => {
  const {
    doRequest
  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__.default)({
    url: 'http://localhost:8000/api/auth/signout',
    method: 'post',
    body: {},
    onSuccess: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/')
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    await doRequest();
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default().remove('jwt');
  }, []);
  const style = {
    fontSize: '4rem',
    fontWeight: '700',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    style: style,
    children: "Signing you out..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signout);

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
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signout.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vaG9va3MvdXNlLXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXV0aC9zaWdub3V0LmpzIiwid2VicGFjazovL2NsaWVudC8uL3N0eWxlcy9FcnJvci5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZ2VuZXJhbEVycm9yIGZyb20gJy4uL3N0eWxlcy9FcnJvci5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IHVzZVJlcXVlc3QgPSAoeyB1cmwsIG1ldGhvZCwgYm9keSwgb25TdWNjZXNzIH0pID0+IHtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGRvUmVxdWVzdCA9IGFzeW5jIChwcm9wcyA9IHt9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRFcnJvcnMobnVsbCk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIHtcclxuICAgICAgICAuLi5ib2R5LFxyXG4gICAgICAgIC4uLnByb3BzLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChvblN1Y2Nlc3MpIHtcclxuICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldEVycm9ycyhcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2VuZXJhbEVycm9yLmVycm9yQmFubmVyfT5cclxuICAgICAgICAgIDxoND5Pb29wcy4uLi48L2g0PlxyXG4gICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICB7ZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLm1hcCgoZXJyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17ZXJyLm1lc3NhZ2V9PntlcnIubWVzc2FnZX08L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZG9SZXF1ZXN0LCBlcnJvcnMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3Q7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB1c2VSZXF1ZXN0IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1yZXF1ZXN0JztcclxuXHJcbmNvbnN0IHNpZ25vdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkb1JlcXVlc3QgfSA9IHVzZVJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL3NpZ25vdXQnLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICBib2R5OiB7fSxcclxuICAgIG9uU3VjY2VzczogKCkgPT4gUm91dGVyLnB1c2goJy8nKSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRvUmVxdWVzdCgpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoJ2p3dCcpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBmb250U2l6ZTogJzRyZW0nLFxyXG4gICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzUwJScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlfT5TaWduaW5nIHlvdSBvdXQuLi48L2Rpdj47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHNpZ25vdXQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVycm9yQmFubmVyXCI6IFwiRXJyb3JfZXJyb3JCYW5uZXJfXy1CQXM4XCIsXG5cdFwiaGlkZVwiOiBcIkVycm9yX2hpZGVfXzJ5LVRWXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwiZ2VuZXJhbEVycm9yIiwidXNlUmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJkb1JlcXVlc3QiLCJwcm9wcyIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsImVycm9yQmFubmVyIiwibGlzdFN0eWxlIiwibWFwIiwibWVzc2FnZSIsInVzZUVmZmVjdCIsIlJvdXRlciIsIkNvb2tpZXMiLCJzaWdub3V0IiwicHVzaCIsInJlbW92ZSIsInN0eWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==