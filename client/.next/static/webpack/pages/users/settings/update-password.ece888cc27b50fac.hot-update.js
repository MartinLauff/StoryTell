"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/settings/update-password",{

/***/ "./pages/users/settings/update-password.js":
/*!*************************************************!*\
  !*** ./pages/users/settings/update-password.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/use-request */ \"./hooks/use-request.js\");\n/* harmony import */ var _styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/EditProfile.module.css */ \"./styles/EditProfile.module.css\");\n/* harmony import */ var _styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/Components.module.css */ \"./styles/Components.module.css\");\n/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar updatePassword = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), success = ref1[0], setSuccess = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), currentPassword = ref2[0], setCurrentPassword = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), newPassword = ref3[0], setNewPassword = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), confirmNewPassword = ref4[0], setConfirmNewPassword = ref4[1];\n    var ref5 = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        url: 'http://localhost:8000/api/users/update-password',\n        method: 'put',\n        body: {\n            currentPassword: currentPassword,\n            newPassword: newPassword\n        },\n        headers: {\n            Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('jwt')\n        }\n    }), doRequest = ref5.doRequest, errors = ref5.errors;\n    var onsubmit = _asyncToGenerator(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var res;\n        return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    setActive(false);\n                    if (!(!currentPassword || !newPassword || !confirmNewPassword)) {\n                        _ctx.next = 4;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\");\n                case 4:\n                    if (!(newPassword !== confirmNewPassword)) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", setActive(true));\n                case 6:\n                    _ctx.next = 8;\n                    return doRequest();\n                case 8:\n                    res = _ctx.sent;\n                    if (res) {\n                        setSuccess(true);\n                    }\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n            lineNumber: 44,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: (_styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_6___default().bar),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/users/my-profile\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                            style: {\n                                height: '2rem'\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"svg\", {\n                                width: \"20\",\n                                height: \"20\",\n                                viewBox: \"0 0 20 20\",\n                                fill: \"none\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"path\", {\n                                    d: \"M10 10L19 19M1 19L10 10L1 19ZM19 1L9.99828 10L19 1ZM9.99828 10L1 1L9.99828 10Z\",\n                                    stroke: \"black\",\n                                    strokeWidth: \"2\",\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Password\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n                onSubmit: onsubmit,\n                className: (_styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrap),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                    lineNumber: 67,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                            lineNumber: 68,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this,\n                                        children: \"Current Password\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                                        onChange: function(e) {\n                                            return setCurrentPassword(e.target.value);\n                                        },\n                                        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7___default().textInput),\n                                        type: \"password\",\n                                        minLength: \"8\",\n                                        maxLength: \"20\",\n                                        required: true,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this,\n                                        children: \"New Password\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                                        onChange: function(e) {\n                                            return setNewPassword(e.target.value);\n                                        },\n                                        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7___default().textInput),\n                                        type: \"password\",\n                                        minLength: \"8\",\n                                        maxLength: \"20\",\n                                        required: true,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this,\n                                        children: \"Confirm New Password\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                                        onChange: function(e) {\n                                            return setConfirmNewPassword(e.target.value);\n                                        },\n                                        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7___default().textInput),\n                                        type: \"password\",\n                                        minLength: \"8\",\n                                        maxLength: \"20\",\n                                        required: true,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    active && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                        style: {\n                            fontSize: 'var(--fs-mid)'\n                        },\n                        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7___default().err),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Provided passwords are not the same\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                        type: \"submit\",\n                        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7___default().applyBtn),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                            lineNumber: 111,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Save\"\n                    })\n                ]\n            }),\n            success && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_6___default().successBar),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\pages\\\\users\\\\settings\\\\update-password.js\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: \"Password changed successfully\"\n            }),\n            errors\n        ]\n    }));\n};\n_s(updatePassword, \"keW8kuRNbuD0uytPs2FgeNYtiOI=\", false, function() {\n    return [\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (updatePassword);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9zZXR0aW5ncy91cGRhdGUtcGFzc3dvcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0o7QUFDRztBQUNvQjtBQUNZO0FBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5FLEdBQUssQ0FBQ00sY0FBYyxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUM1QixHQUFLLENBQXVCTixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuQ08sTUFBTSxHQUFlUCxHQUFlLEtBQTVCUSxTQUFTLEdBQUlSLEdBQWU7SUFDM0MsR0FBSyxDQUF5QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckNTLE9BQU8sR0FBZ0JULElBQWUsS0FBN0JVLFVBQVUsR0FBSVYsSUFBZTtJQUM3QyxHQUFLLENBQXlDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFsRFcsZUFBZSxHQUF3QlgsSUFBWSxLQUFsQ1ksa0JBQWtCLEdBQUlaLElBQVk7SUFDMUQsR0FBSyxDQUFpQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBMUNhLFdBQVcsR0FBb0JiLElBQVksS0FBOUJjLGNBQWMsR0FBSWQsSUFBWTtJQUNsRCxHQUFLLENBQStDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUF4RGUsa0JBQWtCLEdBQTJCZixJQUFZLEtBQXJDZ0IscUJBQXFCLEdBQUloQixJQUFZO0lBRWhFLEdBQUssQ0FBeUJHLElBUTVCLEdBUjRCQSw4REFBVSxDQUFDLENBQUM7UUFDeENjLEdBQUcsRUFBRSxDQUFpRDtRQUN0REMsTUFBTSxFQUFFLENBQUs7UUFDYkMsSUFBSSxFQUFFLENBQUM7WUFDTFIsZUFBZSxFQUFmQSxlQUFlO1lBQ2ZFLFdBQVcsRUFBWEEsV0FBVztRQUNiLENBQUM7UUFDRE8sT0FBTyxFQUFFLENBQUM7WUFBQ0MsYUFBYSxFQUFFLENBQVMsV0FBR25CLHFEQUFXLENBQUMsQ0FB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Q0FDZEMsUUFBUTs7Ozs7Ozs7Ozs7O29CQUlicEQsTUFBTSx5RUFDSnFELENBQUk7d0JBQ0gxQixLQUFLLEVBQUUsQ0FBQzs0QkFBQzJCLFFBQVEsRUFBRSxDQUFlO3dCQUFDLENBQUM7d0JBQ3BDL0IsU0FBUyxFQUFFekIsMEVBQW1COzs7Ozs7O2tDQUMvQixDQUVEOzt5RkFFRDBELENBQU07d0JBQUNQLElBQUksRUFBQyxDQUFRO3dCQUFDMUIsU0FBUyxFQUFFekIsK0VBQXdCOzs7Ozs7O2tDQUFFLENBRTNEOzs7O1lBRURJLE9BQU8seUVBQ0xvQixDQUFHO2dCQUFDQyxTQUFTLEVBQUUxQixrRkFBcUI7Ozs7Ozs7MEJBQUUsQ0FFdkM7O1lBRURvQixNQUFNOzs7QUFHYixDQUFDO0dBbkhLbEIsY0FBYzs7UUFPWUgsMERBQVU7OztBQThHMUMsK0RBQWVHLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9zZXR0aW5ncy91cGRhdGUtcGFzc3dvcmQuanM/MjEyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlLXJlcXVlc3QnO1xyXG5pbXBvcnQgZWRpdFN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvRWRpdFByb2ZpbGUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBjb21wb25lbnRTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL0NvbXBvbmVudHMubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCB1cGRhdGVQYXNzd29yZCA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudFBhc3N3b3JkLCBzZXRDdXJyZW50UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtuZXdQYXNzd29yZCwgc2V0TmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb25maXJtTmV3UGFzc3dvcmQsIHNldENvbmZpcm1OZXdQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHsgZG9SZXF1ZXN0LCBlcnJvcnMgfSA9IHVzZVJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2Vycy91cGRhdGUtcGFzc3dvcmQnLFxyXG4gICAgbWV0aG9kOiAncHV0JyxcclxuICAgIGJvZHk6IHtcclxuICAgICAgY3VycmVudFBhc3N3b3JkLFxyXG4gICAgICBuZXdQYXNzd29yZCxcclxuICAgIH0sXHJcbiAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIENvb2tpZXMuZ2V0KCdqd3QnKSB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvbnN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRBY3RpdmUoZmFsc2UpO1xyXG5cclxuICAgIGlmICghY3VycmVudFBhc3N3b3JkIHx8ICFuZXdQYXNzd29yZCB8fCAhY29uZmlybU5ld1Bhc3N3b3JkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3UGFzc3dvcmQgIT09IGNvbmZpcm1OZXdQYXNzd29yZCkge1xyXG4gICAgICByZXR1cm4gc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRvUmVxdWVzdCgpO1xyXG4gICAgaWYgKHJlcykge1xyXG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17ZWRpdFN0eWxlcy5iYXJ9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy91c2Vycy9teS1wcm9maWxlJz5cclxuICAgICAgICAgIDxhIHN0eWxlPXt7IGhlaWdodDogJzJyZW0nIH19PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgd2lkdGg9JzIwJ1xyXG4gICAgICAgICAgICAgIGhlaWdodD0nMjAnXHJcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDIwIDIwJ1xyXG4gICAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9J00xMCAxMEwxOSAxOU0xIDE5TDEwIDEwTDEgMTlaTTE5IDFMOS45OTgyOCAxMEwxOSAxWk05Ljk5ODI4IDEwTDEgMUw5Ljk5ODI4IDEwWidcclxuICAgICAgICAgICAgICAgIHN0cm9rZT0nYmxhY2snXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8aDI+UGFzc3dvcmQ8L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uc3VibWl0fSBjbGFzc05hbWU9e2VkaXRTdHlsZXMud3JhcH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5DdXJyZW50IFBhc3N3b3JkPC9oMj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXJyZW50UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICBtaW5MZW5ndGg9JzgnXHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPScyMCdcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+TmV3IFBhc3N3b3JkPC9oMj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgIG1pbkxlbmd0aD0nOCdcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9JzIwJ1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5Db25maXJtIE5ldyBQYXNzd29yZDwvaDI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29uZmlybU5ld1Bhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgbWluTGVuZ3RoPSc4J1xyXG4gICAgICAgICAgICAgIG1heExlbmd0aD0nMjAnXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHthY3RpdmUgJiYgKFxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICd2YXIoLS1mcy1taWQpJyB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5lcnJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFByb3ZpZGVkIHBhc3N3b3JkcyBhcmUgbm90IHRoZSBzYW1lXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuYXBwbHlCdG59PlxyXG4gICAgICAgICAgU2F2ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZWRpdFN0eWxlcy5zdWNjZXNzQmFyfT5cclxuICAgICAgICAgIFBhc3N3b3JkIGNoYW5nZWQgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtlcnJvcnN9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlUGFzc3dvcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJDb29raWVzIiwidXNlUmVxdWVzdCIsImVkaXRTdHlsZXMiLCJjb21wb25lbnRTdHlsZXMiLCJ1cGRhdGVQYXNzd29yZCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiY3VycmVudFBhc3N3b3JkIiwic2V0Q3VycmVudFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsImNvbmZpcm1OZXdQYXNzd29yZCIsInNldENvbmZpcm1OZXdQYXNzd29yZCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldCIsImRvUmVxdWVzdCIsImVycm9ycyIsIm9uc3VibWl0IiwiZSIsInJlcyIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYmFyIiwiaHJlZiIsImEiLCJzdHlsZSIsImhlaWdodCIsInN2ZyIsIndpZHRoIiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJkIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsIndyYXAiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0SW5wdXQiLCJ0eXBlIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwicmVxdWlyZWQiLCJzcGFuIiwiZm9udFNpemUiLCJlcnIiLCJidXR0b24iLCJhcHBseUJ0biIsInN1Y2Nlc3NCYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/settings/update-password.js\n");

/***/ })

});