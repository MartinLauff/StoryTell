"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[...oneUser]",{

/***/ "./pages/users/[...oneUser].js":
/*!*************************************!*\
  !*** ./pages/users/[...oneUser].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar OneUser = function(param) {\n    var data = param.data;\n    var doit = _asyncToGenerator(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res;\n        return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_3___default().get('http://localhost:8000/api/users/614cd1903d4f12c478b19464', {\n                        headers: {\n                            Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('jwt')\n                        }\n                    });\n                case 2:\n                    res = _ctx.sent;\n                    console.log(res);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    doit();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\[...oneUser].js\",\n            lineNumber: 17,\n            columnNumber: 10\n        },\n        __self: _this,\n        children: [\n            \"User Page\",\n            res\n        ]\n    }));\n};\n_c = OneUser;\n// export const getServerSideProps = async (ctx) => {\n//   const { OneUser } = ctx.query;\n//   const client = buildClient(ctx);\n//   const { data } = await client.get(`/api/users/${OneUser}`);\n//   return {\n//     props: {\n//       ...data,\n//       OneUser,\n//     },\n//   };\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (OneUser);\nvar _c;\n$RefreshReg$(_c, \"OneUser\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9bLi4ub25lVXNlcl0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3ZCO0FBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsR0FBSyxDQUFDRyxPQUFPLEdBQUcsUUFBUSxRQUFNLENBQUM7UUFBWkMsSUFBSSxTQUFKQSxJQUFJO0lBQ3JCLEdBQUssQ0FBQ0MsSUFBSSwySkFBRyxRQUFRLFdBQUksQ0FBQztZQUNsQkMsR0FBRzs7Ozs7MkJBQVNMLGdEQUFTLENBQ3pCLENBQTBELDJEQUMxRCxDQUFDO3dCQUNDTyxPQUFPLEVBQUUsQ0FBQzs0QkFBQ0MsYUFBYSxFQUFFLENBQVMsV0FBR1AscURBQVcsQ0FBQyxDQUFLO3dCQUFFLENBQUM7b0JBQzVELENBQUM7O29CQUpHSSxHQUFHO29CQU9USSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsR0FBRzs7Ozs7O0lBQ2pCLENBQUM7SUFDREQsSUFBSTtJQUNKLE1BQU0sdUVBQUVPLENBQUc7Ozs7Ozs7O1lBQUMsQ0FBUztZQUFDTixHQUFHOzs7QUFDM0IsQ0FBQztLQWJLSCxPQUFPO0FBZWIsRUFBcUQ7QUFDckQsRUFBbUM7QUFDbkMsRUFBcUM7QUFDckMsRUFBZ0U7QUFFaEUsRUFBYTtBQUNiLEVBQWU7QUFDZixFQUFpQjtBQUNqQixFQUFpQjtBQUNqQixFQUFTO0FBQ1QsRUFBTztBQUNQLEVBQUs7QUFFTCwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1suLi5vbmVVc2VyXS5qcz85OTI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZENsaWVudCBmcm9tICcuLi8uLi9hcGkvYnVpbGQtY2xpZW50JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IE9uZVVzZXIgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBkb2l0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2Vycy82MTRjZDE5MDNkNGYxMmM0NzhiMTk0NjQnLFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBDb29raWVzLmdldCgnand0JykgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gIH07XHJcbiAgZG9pdCgpO1xyXG4gIHJldHVybiA8ZGl2PlVzZXIgUGFnZXtyZXN9PC9kaXY+O1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuLy8gICBjb25zdCB7IE9uZVVzZXIgfSA9IGN0eC5xdWVyeTtcclxuLy8gICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChjdHgpO1xyXG4vLyAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldChgL2FwaS91c2Vycy8ke09uZVVzZXJ9YCk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICAuLi5kYXRhLFxyXG4vLyAgICAgICBPbmVVc2VyLFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT25lVXNlcjtcclxuIl0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwiYXhpb3MiLCJDb29raWVzIiwiT25lVXNlciIsImRhdGEiLCJkb2l0IiwicmVzIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[...oneUser].js\n");

/***/ })

});