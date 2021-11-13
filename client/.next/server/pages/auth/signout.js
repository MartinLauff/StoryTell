(() => {
var exports = {};
exports.id = "pages/auth/signout";
exports.ids = ["pages/auth/signout"];
exports.modules = {

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
/* harmony import */ var _context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/GlobalCtx */ "./context/GlobalCtx.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-request */ "./hooks/use-request.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\auth\\signout.js";







const signout = () => {
  const {
    setCurrentUser,
    currentUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__.GlobalContext);
  const {
    doRequest
  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_4__.default)({
    url: 'http://localhost:8000/api/auth/signout',
    method: 'post',
    body: {},
    onSuccess: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/')
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    await doRequest();
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default().remove('jwt');
    setCurrentUser(null);
    console.log(currentUser);
  }, []);
  const style = {
    fontSize: '4rem',
    fontWeight: '700',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    style: style,
    children: "Signing you out..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDN0IsNkRBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUVtQixJQUFBQTtBQUFGLE1BQWdCUiwyREFBVSxDQUFDO0FBQy9CQyxJQUFBQSxHQUFHLEVBQUUsd0NBRDBCO0FBRS9CQyxJQUFBQSxNQUFNLEVBQUUsTUFGdUI7QUFHL0JFLElBQUFBLElBQUksRUFBRSxFQUh5QjtBQUkvQkMsSUFBQUEsU0FBUyxFQUFFLE1BQU1jLHVEQUFBLENBQVksR0FBWjtBQUpjLEdBQUQsQ0FBaEM7QUFPQUYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFZO0FBQ3BCLFVBQU1ULFNBQVMsRUFBZjtBQUNBWSxJQUFBQSx1REFBQSxDQUFlLEtBQWY7QUFDQXZCLElBQUFBLGNBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQTJCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZN0IsV0FBWjtBQUNELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxRQUFNOEIsS0FBSyxHQUFHO0FBQ1pDLElBQUFBLFFBQVEsRUFBRSxNQURFO0FBRVpDLElBQUFBLFVBQVUsRUFBRSxLQUZBO0FBR1pDLElBQUFBLFFBQVEsRUFBRSxVQUhFO0FBSVpDLElBQUFBLEdBQUcsRUFBRSxLQUpPO0FBS1pDLElBQUFBLElBQUksRUFBRSxLQUxNO0FBTVpDLElBQUFBLFNBQVMsRUFBRTtBQU5DLEdBQWQ7QUFTQSxzQkFBTztBQUFLLFNBQUssRUFBRU4sS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0ExQkQ7O0FBMkJBLGlFQUFlTCxPQUFmOzs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29udGV4dC9HbG9iYWxDdHguanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vaG9va3MvdXNlLXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXV0aC9zaWdub3V0LmpzIiwid2VicGFjazovL2NsaWVudC8uL3N0eWxlcy9FcnJvci5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3NpZGViYXIsIHNldFNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyb3RhdGVEb3RzLCBzZXRSb3RhdGVEb3RzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBzaWRlYmFyLFxyXG4gICAgICAgIHNldFNpZGViYXIsXHJcbiAgICAgICAgcm90YXRlRG90cyxcclxuICAgICAgICBzZXRSb3RhdGVEb3RzLFxyXG4gICAgICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBnZW5lcmFsRXJyb3IgZnJvbSAnLi4vc3R5bGVzL0Vycm9yLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgdXNlUmVxdWVzdCA9ICh7IHVybCwgbWV0aG9kLCBoZWFkZXJzLCBib2R5LCBvblN1Y2Nlc3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgZG9SZXF1ZXN0ID0gYXN5bmMgKHByb3BzID0ge30pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEVycm9ycyhudWxsKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1ttZXRob2RdKFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICB7IC4uLmJvZHksIC4uLnByb3BzIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAob25TdWNjZXNzKSB7XHJcbiAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcnMoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dlbmVyYWxFcnJvci5lcnJvckJhbm5lcn0+XHJcbiAgICAgICAgICA8aDQ+T29vcHMuLi4uPC9oND5cclxuICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fT5cclxuICAgICAgICAgICAge2Vyci5yZXNwb25zZS5kYXRhLmVycm9ycy5tYXAoKGVycikgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2Vyci5tZXNzYWdlfT57ZXJyLm1lc3NhZ2V9PC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGRvUmVxdWVzdCwgZXJyb3JzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0O1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9HbG9iYWxDdHgnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVxdWVzdCc7XHJcblxyXG5jb25zdCBzaWdub3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2V0Q3VycmVudFVzZXIsIGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIGNvbnN0IHsgZG9SZXF1ZXN0IH0gPSB1c2VSZXF1ZXN0KHtcclxuICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9zaWdub3V0JyxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgYm9keToge30sXHJcbiAgICBvblN1Y2Nlc3M6ICgpID0+IFJvdXRlci5wdXNoKCcvJyksXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkb1JlcXVlc3QoKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKCdqd3QnKTtcclxuICAgIHNldEN1cnJlbnRVc2VyKG51bGwpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBmb250U2l6ZTogJzRyZW0nLFxyXG4gICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzUwJScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlfT5TaWduaW5nIHlvdSBvdXQuLi48L2Rpdj47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHNpZ25vdXQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVycm9yQmFubmVyXCI6IFwiRXJyb3JfZXJyb3JCYW5uZXJfXy1CQXM4XCIsXG5cdFwiaGlkZVwiOiBcIkVycm9yX2hpZGVfXzJ5LVRWXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJHbG9iYWxDb250ZXh0IiwiR2xvYmFsUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNpZGViYXIiLCJzZXRTaWRlYmFyIiwicm90YXRlRG90cyIsInNldFJvdGF0ZURvdHMiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwiYXhpb3MiLCJnZW5lcmFsRXJyb3IiLCJ1c2VSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJvblN1Y2Nlc3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJkb1JlcXVlc3QiLCJwcm9wcyIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsImVycm9yQmFubmVyIiwibGlzdFN0eWxlIiwibWFwIiwibWVzc2FnZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJSb3V0ZXIiLCJDb29raWVzIiwic2lnbm91dCIsInB1c2giLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9