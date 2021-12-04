"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/users/[...oneUser]";
exports.ids = ["pages/users/[...oneUser]"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst buildClient = ({ req  })=>{\n    if (true) {\n        // We are on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: 'http://localhost:8000',\n            headers: req.headers\n        });\n    } else {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildClient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUV6QixLQUFLLENBQUNDLFdBQVcsSUFBSSxDQUFDLENBQUNDLEdBQUcsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNoQyxFQUFFLEVBQUUsSUFBNkIsRUFBRSxDQUFDO1FBQ2xDLEVBQXVCO1FBQ3ZCLE1BQU0sQ0FBQ0YsbURBQVksQ0FBQyxDQUFDO1lBQ25CSSxPQUFPLEVBQUUsQ0FBdUI7WUFDaENDLE9BQU8sRUFBRUgsR0FBRyxDQUFDRyxPQUFPO1FBQ3RCLENBQUM7SUFDSCxDQUFDLE1BQU0sRUFLTjtBQUNILENBQUM7QUFFRCxpRUFBZUosV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vYXBpL2J1aWxkLWNsaWVudC5qcz9jNmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBidWlsZENsaWVudCA9ICh7IHJlcSB9KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyBXZSBhcmUgb24gdGhlIHNlcnZlclxyXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnLFxyXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBXZSBtdXN0IGJlIG9uIHRoZSBicm93c2VyXHJcbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCcsXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidWlsZENsaWVudDtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYnVpbGRDbGllbnQiLCJyZXEiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/users/[...oneUser].js":
/*!*************************************!*\
  !*** ./pages/users/[...oneUser].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/build-client */ \"./api/build-client.js\");\n\n\nconst OneUser = ({ data  })=>{\n    console.log(data);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\[...oneUser].js\",\n            lineNumber: 5,\n            columnNumber: 10\n        },\n        __self: undefined,\n        children: \"User Page\"\n    }));\n};\nconst getServerSideProps = async (ctx)=>{\n    const { oneUser  } = ctx.query;\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ctx);\n    const { data  } = await client.get(`/api/users/${oneUser}`);\n    return {\n        props: {\n            data,\n            oneUser\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneUser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9bLi4ub25lVXNlcl0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdEO0FBRWhELEtBQUssQ0FBQ0MsT0FBTyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSTtJQUNoQixNQUFNLHNFQUFFRyxDQUFHOzs7Ozs7O2tCQUFDLENBQVM7O0FBQ3ZCLENBQUM7QUFFTSxLQUFLLENBQUNDLGtCQUFrQixVQUFVQyxHQUFHLEdBQUssQ0FBQztJQUNoRCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxPQUFPLEVBQUMsQ0FBQyxHQUFHRCxHQUFHLENBQUNFLEtBQUs7SUFDN0IsS0FBSyxDQUFDQyxNQUFNLEdBQUdWLDZEQUFXLENBQUNPLEdBQUc7SUFDOUIsS0FBSyxDQUFDLENBQUMsQ0FBQ0wsSUFBSSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNRLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFLFdBQVcsRUFBRUgsT0FBTztJQUV2RCxNQUFNLENBQUMsQ0FBQztRQUNOSSxLQUFLLEVBQUUsQ0FBQztZQUNOVixJQUFJO1lBQ0pNLE9BQU87UUFDVCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZVAsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvdXNlcnMvWy4uLm9uZVVzZXJdLmpzPzk5MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uLy4uL2FwaS9idWlsZC1jbGllbnQnO1xyXG5cclxuY29uc3QgT25lVXNlciA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiA8ZGl2PlVzZXIgUGFnZTwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBvbmVVc2VyIH0gPSBjdHgucXVlcnk7XHJcbiAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoY3R4KTtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoYC9hcGkvdXNlcnMvJHtvbmVVc2VyfWApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgICAgb25lVXNlcixcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9uZVVzZXI7XHJcbiJdLCJuYW1lcyI6WyJidWlsZENsaWVudCIsIk9uZVVzZXIiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsIm9uZVVzZXIiLCJxdWVyeSIsImNsaWVudCIsImdldCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[...oneUser].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[...oneUser].js"));
module.exports = __webpack_exports__;

})();