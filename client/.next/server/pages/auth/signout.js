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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: "Signing you out..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXV0aC9zaWdub3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUcsVUFBVSxHQUFHLENBQUM7QUFBRUMsRUFBQUEsR0FBRjtBQUFPQyxFQUFBQSxNQUFQO0FBQWVDLEVBQUFBLElBQWY7QUFBcUJDLEVBQUFBO0FBQXJCLENBQUQsS0FBc0M7QUFDdkQsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCUiwrQ0FBUSxDQUFDLElBQUQsQ0FBcEM7O0FBRUEsUUFBTVMsU0FBUyxHQUFHLE9BQU9DLEtBQUssR0FBRyxFQUFmLEtBQXNCO0FBQ3RDLFFBQUk7QUFDRkYsTUFBQUEsU0FBUyxDQUFDLElBQUQsQ0FBVDtBQUNBLFlBQU1HLFFBQVEsR0FBRyxNQUFNWiw4Q0FBSyxDQUFDSyxNQUFELENBQUwsQ0FBY0QsR0FBZCxrQ0FDbEJFLElBRGtCLEdBRWxCSyxLQUZrQixFQUF2Qjs7QUFLQSxVQUFJSixTQUFKLEVBQWU7QUFDYkEsUUFBQUEsU0FBUyxDQUFDSyxRQUFRLENBQUNDLElBQVYsQ0FBVDtBQUNEOztBQUVELGFBQU9ELFFBQVEsQ0FBQ0MsSUFBaEI7QUFDRCxLQVpELENBWUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1pMLE1BQUFBLFNBQVMsZUFDUDtBQUFLLGlCQUFTLEVBQUVQLDZFQUFoQjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSSxlQUFLLEVBQUU7QUFBRWMsWUFBQUEsU0FBUyxFQUFFO0FBQWIsV0FBWDtBQUFBLG9CQUNHRixHQUFHLENBQUNGLFFBQUosQ0FBYUMsSUFBYixDQUFrQkwsTUFBbEIsQ0FBeUJTLEdBQXpCLENBQThCSCxHQUFELGlCQUM1QjtBQUFBLHNCQUF1QkEsR0FBRyxDQUFDSTtBQUEzQixhQUFTSixHQUFHLENBQUNJLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURPLENBQVQ7QUFVRDtBQUNGLEdBekJEOztBQTJCQSxTQUFPO0FBQUVSLElBQUFBLFNBQUY7QUFBYUYsSUFBQUE7QUFBYixHQUFQO0FBQ0QsQ0EvQkQ7O0FBaUNBLGlFQUFlTCxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNbUIsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTTtBQUFFWixJQUFBQTtBQUFGLE1BQWdCUCwyREFBVSxDQUFDO0FBQy9CQyxJQUFBQSxHQUFHLEVBQUUsd0NBRDBCO0FBRS9CQyxJQUFBQSxNQUFNLEVBQUUsTUFGdUI7QUFHL0JDLElBQUFBLElBQUksRUFBRSxFQUh5QjtBQUkvQkMsSUFBQUEsU0FBUyxFQUFFLE1BQU1hLHVEQUFBLENBQVksR0FBWjtBQUpjLEdBQUQsQ0FBaEM7QUFPQUQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFZO0FBQ3BCLFVBQU1ULFNBQVMsRUFBZjtBQUNBVyxJQUFBQSx1REFBQSxDQUFlLEtBQWY7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0Esc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBZEQ7O0FBZUEsaUVBQWVDLE9BQWY7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ob29rcy91c2UtcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hdXRoL3NpZ25vdXQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3R5bGVzL0Vycm9yLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBnZW5lcmFsRXJyb3IgZnJvbSAnLi4vc3R5bGVzL0Vycm9yLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgdXNlUmVxdWVzdCA9ICh7IHVybCwgbWV0aG9kLCBib2R5LCBvblN1Y2Nlc3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgZG9SZXF1ZXN0ID0gYXN5bmMgKHByb3BzID0ge30pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEVycm9ycyhudWxsKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1ttZXRob2RdKHVybCwge1xyXG4gICAgICAgIC4uLmJvZHksXHJcbiAgICAgICAgLi4ucHJvcHMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKG9uU3VjY2Vzcykge1xyXG4gICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXJyb3JzKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZW5lcmFsRXJyb3IuZXJyb3JCYW5uZXJ9PlxyXG4gICAgICAgICAgPGg0Pk9vb3BzLi4uLjwvaDQ+XHJcbiAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIHtlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMubWFwKChlcnIpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtlcnIubWVzc2FnZX0+e2Vyci5tZXNzYWdlfTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBkb1JlcXVlc3QsIGVycm9ycyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdDtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlcXVlc3QnO1xyXG5cclxuY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcclxuICBjb25zdCB7IGRvUmVxdWVzdCB9ID0gdXNlUmVxdWVzdCh7XHJcbiAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvc2lnbm91dCcsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgIGJvZHk6IHt9LFxyXG4gICAgb25TdWNjZXNzOiAoKSA9PiBSb3V0ZXIucHVzaCgnLycpLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZG9SZXF1ZXN0KCk7XHJcbiAgICBDb29raWVzLnJlbW92ZSgnand0Jyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPGRpdj5TaWduaW5nIHlvdSBvdXQuLi48L2Rpdj47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHNpZ25vdXQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVycm9yQmFubmVyXCI6IFwiRXJyb3JfZXJyb3JCYW5uZXJfXy1CQXM4XCIsXG5cdFwiaGlkZVwiOiBcIkVycm9yX2hpZGVfXzJ5LVRWXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwiZ2VuZXJhbEVycm9yIiwidXNlUmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJkb1JlcXVlc3QiLCJwcm9wcyIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsImVycm9yQmFubmVyIiwibGlzdFN0eWxlIiwibWFwIiwibWVzc2FnZSIsInVzZUVmZmVjdCIsIlJvdXRlciIsIkNvb2tpZXMiLCJzaWdub3V0IiwicHVzaCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=