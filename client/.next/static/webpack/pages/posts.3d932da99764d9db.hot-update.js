"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/items/Post.js":
/*!**********************************!*\
  !*** ./components/items/Post.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons_LikeSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/LikeSet */ \"./components/Icons/LikeSet.js\");\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Post.module.css */ \"./styles/Post.module.css\");\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/formatDistance */ \"./node_modules/date-fns/esm/formatDistance/index.js\");\n/* harmony import */ var _Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/CommentIcon */ \"./components/Icons/CommentIcon.js\");\n/* harmony import */ var _Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/MoreIcon */ \"./components/Icons/MoreIcon.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar Post = function(param) {\n    var post = param.post;\n    console.log(post);\n    var blackColor = {\n        color: '#000'\n    };\n    var whiteColor = {\n        color: '#fff'\n    };\n    var greyColor = {\n        color: '#878a8c'\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        style: !post.coverImage ? {\n            border: '2px solid #000'\n        } : null,\n        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().post),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/posts/[...postId]\",\n            as: \"/posts/\".concat(post._id),\n            __source: {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                style: {\n                    textDecoration: 'none'\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: post.coverImage ? (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().imagePosition) : (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().textPosition),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                style: post.coverImage ? {\n                                    paddingTop: '1.5rem'\n                                } : null,\n                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().postTop),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        style: {\n                                            display: 'flex',\n                                            aligItems: 'center'\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                style: {\n                                                    marginRight: '0.5rem'\n                                                },\n                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),\n                                                alt: post.title,\n                                                src: \"/\".concat(post.slug, \".jpg\"),\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                style: post.coverImage ? whiteColor : blackColor,\n                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().topic),\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"s/\".concat(post.topic)\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        style: post.coverImage ? whiteColor : greyColor,\n                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().date),\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(new Date(post.createdAt), new Date(), {\n                                            addSuffix: true\n                                        }).replace('about', '').replace('less than', '')\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                src: !data.photo.startsWith('http') ? '/default.png' : post.postedBy.photo,\n                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),\n                                                alt: \"profile photo\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                                style: post.coverImage ? whiteColor : blackColor,\n                                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().topic),\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: post.postedBy.username\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: post.coverImage ? {\n                                    padding: '1rem 0'\n                                } : null,\n                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().postContent),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                    style: post.coverImage ? whiteColor : blackColor,\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: post.title\n                                })\n                            }),\n                            post.coverImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().text),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        post.content.slice(0, 100).trim(),\n                                        \"...\"\n                                    ]\n                                })\n                            }),\n                            !post.coverImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().postBottom),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icons_LikeSet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            likes: post.likes.length,\n                                            greyColor: greyColor,\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                style: _objectSpread({\n                                                    marginLeft: '0.8rem'\n                                                }, greyColor),\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this,\n                                                children: \"Comments\"\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this\n                                        })\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    post.coverImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().coverImage),\n                        src: post.coverImage,\n                        alt: post.title,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Post.js\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        })\n    }));\n};\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRO21EQUFLL0MsU0FBUzs7Ozs7OzswREFBSSxDQUVyRDs7Ozt5R0FFREMsQ0FBRzs7Ozs7Ozt1SEFDRFQsdURBQVE7Ozs7Ozs7Ozs7Ozs7b0JBS2hCRSxJQUFJLENBQUNTLFVBQVUseUVBQ2JjLENBQUc7d0JBQ0ZaLFNBQVMsRUFBRWhCLDJFQUFxQjt3QkFDaENpQyxHQUFHLEVBQUU1QixJQUFJLENBQUNTLFVBQVU7d0JBQ3BCaUIsR0FBRyxFQUFFMUIsSUFBSSxDQUFDMkIsS0FBSzs7Ozs7Ozs7Ozs7O0FBTzdCLENBQUM7S0EzR0s1QixJQUFJO0FBNkdWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtcy9Qb3N0LmpzPzg5MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExpa2VTZXQgZnJvbSAnLi4vSWNvbnMvTGlrZVNldCc7XHJcbmltcG9ydCBwb3N0U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Qb3N0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UnO1xyXG5pbXBvcnQgQ29tbWVudEljb24gZnJvbSAnLi4vSWNvbnMvQ29tbWVudEljb24nO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSAnLi4vSWNvbnMvTW9yZUljb24nO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBvc3QpO1xyXG4gIGNvbnN0IGJsYWNrQ29sb3IgPSB7IGNvbG9yOiAnIzAwMCcgfTtcclxuICBjb25zdCB3aGl0ZUNvbG9yID0geyBjb2xvcjogJyNmZmYnIH07XHJcbiAgY29uc3QgZ3JleUNvbG9yID0geyBjb2xvcjogJyM4NzhhOGMnIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXshcG9zdC5jb3ZlckltYWdlID8geyBib3JkZXI6ICcycHggc29saWQgIzAwMCcgfSA6IG51bGx9XHJcbiAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0fVxyXG4gICAgPlxyXG4gICAgICA8TGluayBocmVmPScvcG9zdHMvWy4uLnBvc3RJZF0nIGFzPXtgL3Bvc3RzLyR7cG9zdC5faWR9YH0+XHJcbiAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBwb3N0LmNvdmVySW1hZ2VcclxuICAgICAgICAgICAgICAgID8gcG9zdFN0eWxlcy5pbWFnZVBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICA6IHBvc3RTdHlsZXMudGV4dFBvc2l0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtwb3N0LmNvdmVySW1hZ2UgPyB7IHBhZGRpbmdUb3A6ICcxLjVyZW0nIH0gOiBudWxsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0VG9wfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWdJdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC41cmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2AvJHtwb3N0LnNsdWd9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3Bvc3QuY292ZXJJbWFnZSA/IHdoaXRlQ29sb3IgOiBibGFja0NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMudG9waWN9XHJcbiAgICAgICAgICAgICAgICA+e2BzLyR7cG9zdC50b3BpY31gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3Bvc3QuY292ZXJJbWFnZSA/IHdoaXRlQ29sb3IgOiBncmV5Q29sb3J9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuZGF0ZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2UobmV3IERhdGUocG9zdC5jcmVhdGVkQXQpLCBuZXcgRGF0ZSgpLCB7XHJcbiAgICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdhYm91dCcsICcnKVxyXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgnbGVzcyB0aGFuJywgJycpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICFkYXRhLnBob3RvLnN0YXJ0c1dpdGgoJ2h0dHAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgPyAnL2RlZmF1bHQucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiBwb3N0LnBvc3RlZEJ5LnBob3RvXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgICAgIGFsdD0ncHJvZmlsZSBwaG90bydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17cG9zdC5jb3ZlckltYWdlID8gd2hpdGVDb2xvciA6IGJsYWNrQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy50b3BpY31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3Bvc3QucG9zdGVkQnkudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3Bvc3QuY292ZXJJbWFnZSA/IHsgcGFkZGluZzogJzFyZW0gMCcgfSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RDb250ZW50fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXtwb3N0LmNvdmVySW1hZ2UgPyB3aGl0ZUNvbG9yIDogYmxhY2tDb2xvcn0+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Bvc3QuY292ZXJJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cG9zdFN0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAge3Bvc3QuY29udGVudC5zbGljZSgwLCAxMDApLnRyaW0oKX0uLi5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyFwb3N0LmNvdmVySW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RCb3R0b219PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPExpa2VTZXQgbGlrZXM9e3Bvc3QubGlrZXMubGVuZ3RofSBncmV5Q29sb3I9e2dyZXlDb2xvcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjhyZW0nLCAuLi5ncmV5Q29sb3IgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbWVudHNcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TW9yZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cG9zdC5jb3ZlckltYWdlICYmIChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIHNyYz17cG9zdC5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJMaWtlU2V0IiwicG9zdFN0eWxlcyIsImZvcm1hdERpc3RhbmNlIiwiQ29tbWVudEljb24iLCJNb3JlSWNvbiIsIlBvc3QiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImJsYWNrQ29sb3IiLCJjb2xvciIsIndoaXRlQ29sb3IiLCJncmV5Q29sb3IiLCJkaXYiLCJzdHlsZSIsImNvdmVySW1hZ2UiLCJib3JkZXIiLCJjbGFzc05hbWUiLCJocmVmIiwiYXMiLCJfaWQiLCJhIiwidGV4dERlY29yYXRpb24iLCJpbWFnZVBvc2l0aW9uIiwidGV4dFBvc2l0aW9uIiwicGFkZGluZ1RvcCIsInBvc3RUb3AiLCJkaXNwbGF5IiwiYWxpZ0l0ZW1zIiwiaW1nIiwibWFyZ2luUmlnaHQiLCJpY29uIiwiYWx0IiwidGl0bGUiLCJzcmMiLCJzbHVnIiwic3BhbiIsInRvcGljIiwiZGF0ZSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJhZGRTdWZmaXgiLCJyZXBsYWNlIiwiZGF0YSIsInBob3RvIiwic3RhcnRzV2l0aCIsInBvc3RlZEJ5IiwicCIsInVzZXJuYW1lIiwicGFkZGluZyIsInBvc3RDb250ZW50IiwiaDIiLCJ0ZXh0IiwiY29udGVudCIsInNsaWNlIiwidHJpbSIsInBvc3RCb3R0b20iLCJsaWtlcyIsImxlbmd0aCIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/items/Post.js\n");

/***/ })

});