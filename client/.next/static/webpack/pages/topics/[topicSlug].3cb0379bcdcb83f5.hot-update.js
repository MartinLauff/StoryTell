"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/topics/[topicSlug]",{

/***/ "./components/items/Post.js":
/*!**********************************!*\
  !*** ./components/items/Post.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons_LikeSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/LikeSet */ \"./components/Icons/LikeSet.js\");\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Post.module.css */ \"./styles/Post.module.css\");\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/formatDistance */ \"./node_modules/date-fns/esm/formatDistance/index.js\");\n/* harmony import */ var _Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/CommentIcon */ \"./components/Icons/CommentIcon.js\");\n/* harmony import */ var _Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/MoreIcon */ \"./components/Icons/MoreIcon.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar Post = function(param) {\n    var post = param.post;\n    var blackColor = {\n        color: '#000'\n    };\n    var whiteColor = {\n        color: '#fff'\n    };\n    var greyColor = {\n        color: '#878a8c'\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        style: !post.coverImage ? {\n            border: '2px solid #000'\n        } : null,\n        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().post),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n            lineNumber: 14,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/posts/[...postId]\",\n            as: \"/posts/\".concat(post._id),\n            __source: {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                style: {\n                    textDecoration: 'none'\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: post.coverImage ? (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().imagePosition) : (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().textPosition),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                style: post.coverImage ? {\n                                    paddingTop: '1.5rem'\n                                } : null,\n                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().postTop),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        style: {\n                                            display: 'flex',\n                                            aligItems: 'center'\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                style: {\n                                                    marginRight: '0.5rem'\n                                                },\n                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),\n                                                alt: post.title,\n                                                src: \"/\".concat(post.slug, \".jpg\"),\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                style: post.coverImage ? whiteColor : blackColor,\n                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().topic),\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"s/\".concat(post.topic)\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        style: post.coverImage ? whiteColor : greyColor,\n                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().date),\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(new Date(post.createdAt), new Date(), {\n                                            addSuffix: true\n                                        }).replace('about', '').replace('less than', '')\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        style: whiteColor,\n                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().follow),\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: \"Follow\"\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: post.coverImage ? {\n                                    padding: '1rem 0'\n                                } : null,\n                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().postContent),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                    style: post.coverImage ? whiteColor : blackColor,\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: post.title\n                                })\n                            }),\n                            post.coverImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().text),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        post.content.slice(0, 100).trim(),\n                                        \"...\"\n                                    ]\n                                })\n                            }),\n                            !post.coverImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().postBottom),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icons_LikeSet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            likes: post.likes.length,\n                                            greyColor: greyColor,\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                style: _objectSpread({\n                                                    marginLeft: '0.8rem'\n                                                }, greyColor),\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this,\n                                                children: \"Comments\"\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this\n                                        })\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    post.coverImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().coverImage),\n                        src: post.coverImage,\n                        alt: post.title,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        })\n    }));\n};\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tl9FLy4vY29tcG9uZW50cy9pdGVtcy9Qb3N0LmpzPzg5MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExpa2VTZXQgZnJvbSAnLi4vSWNvbnMvTGlrZVNldCc7XHJcbmltcG9ydCBwb3N0U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Qb3N0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UnO1xyXG5pbXBvcnQgQ29tbWVudEljb24gZnJvbSAnLi4vSWNvbnMvQ29tbWVudEljb24nO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSAnLi4vSWNvbnMvTW9yZUljb24nO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGJsYWNrQ29sb3IgPSB7IGNvbG9yOiAnIzAwMCcgfTtcclxuICBjb25zdCB3aGl0ZUNvbG9yID0geyBjb2xvcjogJyNmZmYnIH07XHJcbiAgY29uc3QgZ3JleUNvbG9yID0geyBjb2xvcjogJyM4NzhhOGMnIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXshcG9zdC5jb3ZlckltYWdlID8geyBib3JkZXI6ICcycHggc29saWQgIzAwMCcgfSA6IG51bGx9XHJcbiAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0fVxyXG4gICAgPlxyXG4gICAgICA8TGluayBocmVmPScvcG9zdHMvWy4uLnBvc3RJZF0nIGFzPXtgL3Bvc3RzLyR7cG9zdC5faWR9YH0+XHJcbiAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBwb3N0LmNvdmVySW1hZ2VcclxuICAgICAgICAgICAgICAgID8gcG9zdFN0eWxlcy5pbWFnZVBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICA6IHBvc3RTdHlsZXMudGV4dFBvc2l0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtwb3N0LmNvdmVySW1hZ2UgPyB7IHBhZGRpbmdUb3A6ICcxLjVyZW0nIH0gOiBudWxsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0VG9wfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWdJdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC41cmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2AvJHtwb3N0LnNsdWd9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3Bvc3QuY292ZXJJbWFnZSA/IHdoaXRlQ29sb3IgOiBibGFja0NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMudG9waWN9XHJcbiAgICAgICAgICAgICAgICA+e2BzLyR7cG9zdC50b3BpY31gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3Bvc3QuY292ZXJJbWFnZSA/IHdoaXRlQ29sb3IgOiBncmV5Q29sb3J9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuZGF0ZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2UobmV3IERhdGUocG9zdC5jcmVhdGVkQXQpLCBuZXcgRGF0ZSgpLCB7XHJcbiAgICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdhYm91dCcsICcnKVxyXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgnbGVzcyB0aGFuJywgJycpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt3aGl0ZUNvbG9yfSBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuZm9sbG93fT5cclxuICAgICAgICAgICAgICAgIEZvbGxvd1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtwb3N0LmNvdmVySW1hZ2UgPyB7IHBhZGRpbmc6ICcxcmVtIDAnIH0gOiBudWxsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0Q29udGVudH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17cG9zdC5jb3ZlckltYWdlID8gd2hpdGVDb2xvciA6IGJsYWNrQ29sb3J9PlxyXG4gICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtwb3N0LmNvdmVySW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3Bvc3RTdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbnRlbnQuc2xpY2UoMCwgMTAwKS50cmltKCl9Li4uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHshcG9zdC5jb3ZlckltYWdlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0Qm90dG9tfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaWtlU2V0IGxpa2VzPXtwb3N0Lmxpa2VzLmxlbmd0aH0gZ3JleUNvbG9yPXtncmV5Q29sb3J9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMC44cmVtJywgLi4uZ3JleUNvbG9yIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3Bvc3QuY292ZXJJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuY292ZXJJbWFnZX1cclxuICAgICAgICAgICAgICBzcmM9e3Bvc3QuY292ZXJJbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiTGlrZVNldCIsInBvc3RTdHlsZXMiLCJmb3JtYXREaXN0YW5jZSIsIkNvbW1lbnRJY29uIiwiTW9yZUljb24iLCJQb3N0IiwicG9zdCIsImJsYWNrQ29sb3IiLCJjb2xvciIsIndoaXRlQ29sb3IiLCJncmV5Q29sb3IiLCJkaXYiLCJzdHlsZSIsImNvdmVySW1hZ2UiLCJib3JkZXIiLCJjbGFzc05hbWUiLCJocmVmIiwiYXMiLCJfaWQiLCJhIiwidGV4dERlY29yYXRpb24iLCJpbWFnZVBvc2l0aW9uIiwidGV4dFBvc2l0aW9uIiwicGFkZGluZ1RvcCIsInBvc3RUb3AiLCJkaXNwbGF5IiwiYWxpZ0l0ZW1zIiwiaW1nIiwibWFyZ2luUmlnaHQiLCJpY29uIiwiYWx0IiwidGl0bGUiLCJzcmMiLCJzbHVnIiwic3BhbiIsInRvcGljIiwiZGF0ZSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJhZGRTdWZmaXgiLCJyZXBsYWNlIiwiYnV0dG9uIiwiZm9sbG93IiwicGFkZGluZyIsInBvc3RDb250ZW50IiwiaDIiLCJwIiwidGV4dCIsImNvbnRlbnQiLCJzbGljZSIsInRyaW0iLCJwb3N0Qm90dG9tIiwibGlrZXMiLCJsZW5ndGgiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/items/Post.js\n");

/***/ })

});