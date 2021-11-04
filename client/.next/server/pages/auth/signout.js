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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vaG9va3MvdXNlLXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXV0aC9zaWdub3V0LmpzIiwid2VicGFjazovL2NsaWVudC8uL3N0eWxlcy9FcnJvci5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZ2VuZXJhbEVycm9yIGZyb20gJy4uL3N0eWxlcy9FcnJvci5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IHVzZVJlcXVlc3QgPSAoeyB1cmwsIG1ldGhvZCwgaGVhZGVycywgYm9keSwgb25TdWNjZXNzIH0pID0+IHtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGRvUmVxdWVzdCA9IGFzeW5jIChwcm9wcyA9IHt9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRFcnJvcnMobnVsbCk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NbbWV0aG9kXShcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgeyAuLi5ib2R5LCAuLi5wcm9wcyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKG9uU3VjY2Vzcykge1xyXG4gICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXJyb3JzKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZW5lcmFsRXJyb3IuZXJyb3JCYW5uZXJ9PlxyXG4gICAgICAgICAgPGg0Pk9vb3BzLi4uLjwvaDQ+XHJcbiAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIHtlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMubWFwKChlcnIpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtlcnIubWVzc2FnZX0+e2Vyci5tZXNzYWdlfTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBkb1JlcXVlc3QsIGVycm9ycyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdDtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlcXVlc3QnO1xyXG5cclxuY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcclxuICBjb25zdCB7IGRvUmVxdWVzdCB9ID0gdXNlUmVxdWVzdCh7XHJcbiAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvc2lnbm91dCcsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgIGJvZHk6IHt9LFxyXG4gICAgb25TdWNjZXNzOiAoKSA9PiBSb3V0ZXIucHVzaCgnLycpLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZG9SZXF1ZXN0KCk7XHJcbiAgICBDb29raWVzLnJlbW92ZSgnand0Jyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgIGZvbnRTaXplOiAnNHJlbScsXHJcbiAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnNTAlJyxcclxuICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB9O1xyXG5cclxuICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9PlNpZ25pbmcgeW91IG91dC4uLjwvZGl2PjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc2lnbm91dDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXJyb3JCYW5uZXJcIjogXCJFcnJvcl9lcnJvckJhbm5lcl9fLUJBczhcIixcblx0XCJoaWRlXCI6IFwiRXJyb3JfaGlkZV9fMnktVFZcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJnZW5lcmFsRXJyb3IiLCJ1c2VSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJvblN1Y2Nlc3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJkb1JlcXVlc3QiLCJwcm9wcyIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsImVycm9yQmFubmVyIiwibGlzdFN0eWxlIiwibWFwIiwibWVzc2FnZSIsInVzZUVmZmVjdCIsIlJvdXRlciIsIkNvb2tpZXMiLCJzaWdub3V0IiwicHVzaCIsInJlbW92ZSIsInN0eWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==