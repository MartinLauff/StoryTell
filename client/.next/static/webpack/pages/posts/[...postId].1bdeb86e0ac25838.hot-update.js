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

/***/ "./components/items/Comment.js":
/*!*************************************!*\
  !*** ./components/items/Comment.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Comment.module.css */ \"./styles/Comment.module.css\");\n/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/formatDistance */ \"./node_modules/date-fns/esm/formatDistance/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this2 = undefined;\nvar _s = $RefreshSig$();\nvar Comment = function(param) {\n    var comment = param.comment;\n    var _this1 = _this2;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), state = ref[0], setState = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        //Converts comment to charArray and returns array with whitespaces only\n        var newArr = comment.content.split('').filter(function(el) {\n            return el === ' ';\n        });\n        if (comment.content.length > 15 && newArr.length < 2) {\n            var _this = _this1;\n            var arr = comment.content.split(' ');\n            setState(arr.map(function(content, i) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: content\n                }, i);\n            }));\n        } else {\n            setState(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                },\n                __self: _this1,\n                children: comment.content\n            }));\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().commentWrap),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n            lineNumber: 27,\n            columnNumber: 5\n        },\n        __self: _this2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/users/[...oneUser]\",\n                as: \"/users/\".concat(comment.postedBy._id),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this2,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    },\n                    __self: _this2,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().pic),\n                        src: !comment.postedBy.photo.startsWith('http') ? '/default.png' : post.postedBy.photo,\n                        alt: comment.postedBy.username,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        },\n                        __self: _this2\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                },\n                __self: _this2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        },\n                        __self: _this2,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/users/[...oneUser]\",\n                                as: \"/users/\".concat(comment.postedBy._id),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 11\n                                },\n                                __self: _this2,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    style: {\n                                        textDecoration: 'none'\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this2,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this2,\n                                        children: comment.postedBy.username\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().time),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 11\n                                },\n                                __self: _this2,\n                                children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Date(comment.createdAt), new Date(), {\n                                    addSuffix: true\n                                }).replace('about', '').replace('less than', '')\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        },\n                        __self: _this2,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                            style: {\n                                color: '#000'\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            },\n                            __self: _this2,\n                            children: comment.content\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Comment, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar _c;\n$RefreshReg$(_c, \"Comment\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxZQUFFLENBQUU7Ozs7eUZBSTdCdEIsQ0FBRzs7Ozs7Ozt1R0FDREgsQ0FBQzs0QkFBQ0MsU0FBUyxFQUFFaEIsMkVBQXFCOzRCQUFFaUMsS0FBSyxFQUFFLENBQUM7Z0NBQUNRLEtBQUssRUFBRSxDQUFNOzRCQUFDLENBQUM7Ozs7Ozs7c0NBQzFEdEMsT0FBTyxDQUFDSSxPQUFPOzs7Ozs7O0FBTTVCLENBQUM7R0FoRUtMLE9BQU87S0FBUEEsT0FBTztBQWtFYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaXRlbXMvQ29tbWVudC5qcz8xOTNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb21tZW50U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Db21tZW50Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UnO1xyXG5cclxuY29uc3QgQ29tbWVudCA9ICh7IGNvbW1lbnQgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vQ29udmVydHMgY29tbWVudCB0byBjaGFyQXJyYXkgYW5kIHJldHVybnMgYXJyYXkgd2l0aCB3aGl0ZXNwYWNlcyBvbmx5XHJcbiAgICBsZXQgbmV3QXJyID0gY29tbWVudC5jb250ZW50LnNwbGl0KCcnKS5maWx0ZXIoKGVsKSA9PiBlbCA9PT0gJyAnKTtcclxuICAgIGlmIChjb21tZW50LmNvbnRlbnQubGVuZ3RoID4gMTUgJiYgbmV3QXJyLmxlbmd0aCA8IDIpIHtcclxuICAgICAgY29uc3QgYXJyID0gY29tbWVudC5jb250ZW50LnNwbGl0KCcgJyk7XHJcbiAgICAgIHNldFN0YXRlKFxyXG4gICAgICAgIGFyci5tYXAoKGNvbnRlbnQsIGkpID0+IChcclxuICAgICAgICAgIDxwIGtleT17aX0gY2xhc3NOYW1lPXtjb21tZW50U3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U3RhdGUoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb21tZW50U3R5bGVzLmNvbnRlbnR9Pntjb21tZW50LmNvbnRlbnR9PC9zcGFuPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbW1lbnRTdHlsZXMuY29tbWVudFdyYXB9PlxyXG4gICAgICA8TGluayBocmVmPScvdXNlcnMvWy4uLm9uZVVzZXJdJyBhcz17YC91c2Vycy8ke2NvbW1lbnQucG9zdGVkQnkuX2lkfWB9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NvbW1lbnRTdHlsZXMucGljfVxyXG4gICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICFjb21tZW50LnBvc3RlZEJ5LnBob3RvLnN0YXJ0c1dpdGgoJ2h0dHAnKVxyXG4gICAgICAgICAgICAgICAgPyAnL2RlZmF1bHQucG5nJ1xyXG4gICAgICAgICAgICAgICAgOiBwb3N0LnBvc3RlZEJ5LnBob3RvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWx0PXtjb21tZW50LnBvc3RlZEJ5LnVzZXJuYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj0nL3VzZXJzL1suLi5vbmVVc2VyXSdcclxuICAgICAgICAgICAgYXM9e2AvdXNlcnMvJHtjb21tZW50LnBvc3RlZEJ5Ll9pZH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29tbWVudFN0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgIHtjb21tZW50LnBvc3RlZEJ5LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb21tZW50U3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2UobmV3IERhdGUoY29tbWVudC5jcmVhdGVkQXQpLCBuZXcgRGF0ZSgpLCB7XHJcbiAgICAgICAgICAgICAgYWRkU3VmZml4OiB0cnVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdhYm91dCcsICcnKVxyXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdsZXNzIHRoYW4nLCAnJyl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXY+e3N0YXRlfTwvZGl2PiAqL31cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtjb21tZW50U3R5bGVzLmNvbnRlbnR9IHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcgfX0+XHJcbiAgICAgICAgICAgIHtjb21tZW50LmNvbnRlbnR9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb21tZW50U3R5bGVzIiwiZm9ybWF0RGlzdGFuY2UiLCJDb21tZW50IiwiY29tbWVudCIsInN0YXRlIiwic2V0U3RhdGUiLCJuZXdBcnIiLCJjb250ZW50Iiwic3BsaXQiLCJmaWx0ZXIiLCJlbCIsImxlbmd0aCIsImFyciIsIm1hcCIsImkiLCJwIiwiY2xhc3NOYW1lIiwic3BhbiIsImRpdiIsImNvbW1lbnRXcmFwIiwiaHJlZiIsImFzIiwicG9zdGVkQnkiLCJfaWQiLCJhIiwiaW1nIiwicGljIiwic3JjIiwicGhvdG8iLCJzdGFydHNXaXRoIiwicG9zdCIsImFsdCIsInVzZXJuYW1lIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm5hbWUiLCJ0aW1lIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImFkZFN1ZmZpeCIsInJlcGxhY2UiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/items/Comment.js\n");

/***/ })

});