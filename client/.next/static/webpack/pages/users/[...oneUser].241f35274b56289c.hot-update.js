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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar OneUser = function(param) {\n    var data = param.data;\n    var doit = _asyncToGenerator(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res;\n        return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_3___default().get('http://localhost:8000/api/users/614cd1903d4f12c478b19464');\n                case 2:\n                    res = _ctx.sent;\n                    console.log(res);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\[...oneUser].js\",\n            lineNumber: 12,\n            columnNumber: 10\n        },\n        __self: _this,\n        children: \"User Page\"\n    }));\n};\n_c = OneUser;\n// export const getServerSideProps = async (ctx) => {\n//   const { OneUser } = ctx.query;\n//   const client = buildClient(ctx);\n//   const { data } = await client.get(`/api/users/${OneUser}`);\n//   return {\n//     props: {\n//       ...data,\n//       OneUser,\n//     },\n//   };\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (OneUser);\nvar _c;\n$RefreshReg$(_c, \"OneUser\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9bLi4ub25lVXNlcl0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsR0FBSyxDQUFDRSxPQUFPLEdBQUcsUUFBUSxRQUFNLENBQUM7UUFBWkMsSUFBSSxTQUFKQSxJQUFJO0lBQ3JCLEdBQUssQ0FBQ0MsSUFBSSwySkFBRyxRQUFRLFdBQUksQ0FBQztZQUNsQkMsR0FBRzs7Ozs7MkJBQVNKLGdEQUFTLENBQ3pCLENBQTBEOztvQkFEdERJLEdBQUc7b0JBSVRFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHOzs7Ozs7SUFDakIsQ0FBQztJQUNELE1BQU0sc0VBQUVJLENBQUc7Ozs7Ozs7a0JBQUMsQ0FBUzs7QUFDdkIsQ0FBQztLQVRLUCxPQUFPO0FBV2IsRUFBcUQ7QUFDckQsRUFBbUM7QUFDbkMsRUFBcUM7QUFDckMsRUFBZ0U7QUFFaEUsRUFBYTtBQUNiLEVBQWU7QUFDZixFQUFpQjtBQUNqQixFQUFpQjtBQUNqQixFQUFTO0FBQ1QsRUFBTztBQUNQLEVBQUs7QUFFTCwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1suLi5vbmVVc2VyXS5qcz85OTI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZENsaWVudCBmcm9tICcuLi8uLi9hcGkvYnVpbGQtY2xpZW50JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IE9uZVVzZXIgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBkb2l0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2Vycy82MTRjZDE5MDNkNGYxMmM0NzhiMTk0NjQnXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgfTtcclxuICByZXR1cm4gPGRpdj5Vc2VyIFBhZ2U8L2Rpdj47XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4vLyAgIGNvbnN0IHsgT25lVXNlciB9ID0gY3R4LnF1ZXJ5O1xyXG4vLyAgIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGN0eCk7XHJcbi8vICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KGAvYXBpL3VzZXJzLyR7T25lVXNlcn1gKTtcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIC4uLmRhdGEsXHJcbi8vICAgICAgIE9uZVVzZXIsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPbmVVc2VyO1xyXG4iXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJheGlvcyIsIk9uZVVzZXIiLCJkYXRhIiwiZG9pdCIsInJlcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[...oneUser].js\n");

/***/ })

});