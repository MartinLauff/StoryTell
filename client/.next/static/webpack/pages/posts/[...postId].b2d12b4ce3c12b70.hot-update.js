"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[...postId]",{

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Error.module.css */ \"./styles/Error.module.css\");\n/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this1 = undefined;\nvar _s = $RefreshSig$();\nvar useRequest = function(param) {\n    var url = param.url, method = param.method, headers = param.headers, body = param.body, onSuccess = param.onSuccess;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), errors = ref[0], setErrors = ref[1];\n    var doRequest = _asyncToGenerator(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response, _this, data;\n        return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    setErrors(null);\n                    _ctx.next = 4;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default()({\n                        method: method,\n                        url: url,\n                        data: _objectSpread({\n                        }, body),\n                        headers: headers\n                    });\n                case 4:\n                    response = _ctx.sent;\n                    if (onSuccess) {\n                        onSuccess(response.data);\n                    }\n                    return _ctx.abrupt(\"return\", response.data);\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    _this = this;\n                    data = _ctx.t0.response.data;\n                    setErrors(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        className: (_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_4___default().errorBanner),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\hooks\\\\use-request.js\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h4\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\hooks\\\\use-request.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"Ooops....\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"ul\", {\n                                style: {\n                                    listStyle: 'none'\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\hooks\\\\use-request.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: data.message.split(',').map(function(message) {\n                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"li\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\hooks\\\\use-request.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: message.replace('Validation failed:', '').split(':')[1]\n                                    }, message);\n                                })\n                            })\n                        ]\n                    }));\n                case 14:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, this, [\n            [\n                0,\n                9\n            ]\n        ]);\n    }).bind(_this1)).bind(_this1);\n    return {\n        doRequest: doRequest,\n        errors: errors\n    };\n};\n_s(useRequest, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequest);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJELEdBQUssQ0FBQ0csVUFBVSxHQUFHLFFBQVFDLFFBQXVDLENBQUM7UUFBN0NDLEdBQUcsU0FBSEEsR0FBRyxFQUFFRCxNQUFNLFNBQU5BLE1BQU0sRUFBRUUsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxTQUFTLFNBQVRBLFNBQVM7O0lBQ3pELEdBQUssQ0FBdUJQLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWxDUSxNQUFNLEdBQWVSLEdBQWMsS0FBM0JTLFNBQVMsR0FBSVQsR0FBYztJQUUxQyxHQUFLLENBQUNVLFNBQVMsMkpBQUcsUUFBUSxXQUFJLENBQUM7WUFHckJDLFFBQVEsU0FnQkFDLElBQUk7Ozs7O29CQWpCbEJILFNBQVMsQ0FBQyxJQUFJOzsyQkFDU1YsNENBQUssQ0FBQyxDQUFDO3dCQUM1QkksTUFBTSxFQUFOQSxNQUFNO3dCQUNOQyxHQUFHLEVBQUhBLEdBQUc7d0JBQ0hRLElBQUk7MkJBQ0NOLElBQUk7d0JBRVRELE9BQU8sRUFBUEEsT0FBTztvQkFDVCxDQUFDOztvQkFQS00sUUFBUTtvQkFTZCxFQUFFLEVBQUVKLFNBQVMsRUFBRSxDQUFDO3dCQUNkQSxTQUFTLENBQUNJLFFBQVEsQ0FBQ0MsSUFBSTtvQkFDekIsQ0FBQztpREFFTUQsUUFBUSxDQUFDQyxJQUFJOzs7OztvQkFHTkEsSUFBSSxXQUFoQkQsUUFBUSxDQUFJQyxJQUFJO29CQUVsQkgsU0FBUyx1RUFDTkksQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFYiw2RUFBd0I7Ozs7Ozs7O2lHQUNyQ2UsQ0FBRTs7Ozs7OzswQ0FBQyxDQUFTOztpR0FDWkMsQ0FBRTtnQ0FBQ0MsS0FBSyxFQUFFLENBQUM7b0NBQUNDLFNBQVMsRUFBRSxDQUFNO2dDQUFDLENBQUM7Ozs7Ozs7MENBQzdCUCxJQUFJLENBQUNRLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUcsSUFBRUMsR0FBRyxDQUFDLFFBQVEsQ0FBUEYsT0FBTztrREFDbkMsTUFBTSx3REFBTEcsQ0FBRTs7Ozs7OztrREFDQUgsT0FBTyxDQUFDSSxPQUFPLENBQUMsQ0FBb0IscUJBQUUsQ0FBRSxHQUFFSCxLQUFLLENBQUMsQ0FBRyxJQUFFLENBQUM7dUNBRGhERCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7SUFRNUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQUNWLFNBQVMsRUFBVEEsU0FBUztRQUFFRixNQUFNLEVBQU5BLE1BQU07SUFBQyxDQUFDO0FBQzlCLENBQUM7R0F4Q0tOLFVBQVU7QUEwQ2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXJlcXVlc3QuanM/YTQ2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGdlbmVyYWxFcnJvciBmcm9tICcuLi9zdHlsZXMvRXJyb3IubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCB1c2VSZXF1ZXN0ID0gKHsgdXJsLCBtZXRob2QsIGhlYWRlcnMsIGJvZHksIG9uU3VjY2VzcyB9KSA9PiB7XHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBkb1JlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRFcnJvcnMobnVsbCk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZCxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uYm9keSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKG9uU3VjY2Vzcykge1xyXG4gICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHJlc3BvbnNlOiB7IGRhdGEgfSxcclxuICAgICAgfSA9IGVycjtcclxuICAgICAgc2V0RXJyb3JzKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZW5lcmFsRXJyb3IuZXJyb3JCYW5uZXJ9PlxyXG4gICAgICAgICAgPGg0Pk9vb3BzLi4uLjwvaDQ+XHJcbiAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIHtkYXRhLm1lc3NhZ2Uuc3BsaXQoJywnKS5tYXAoKG1lc3NhZ2UpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXttZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlLnJlcGxhY2UoJ1ZhbGlkYXRpb24gZmFpbGVkOicsICcnKS5zcGxpdCgnOicpWzFdfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBkb1JlcXVlc3QsIGVycm9ycyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdDtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJnZW5lcmFsRXJyb3IiLCJ1c2VSZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsImJvZHkiLCJvblN1Y2Nlc3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJkb1JlcXVlc3QiLCJyZXNwb25zZSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJlcnJvckJhbm5lciIsImg0IiwidWwiLCJzdHlsZSIsImxpc3RTdHlsZSIsIm1lc3NhZ2UiLCJzcGxpdCIsIm1hcCIsImxpIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/use-request.js\n");

/***/ })

});