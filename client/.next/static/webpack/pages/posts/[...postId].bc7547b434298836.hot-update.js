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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Comment.module.css */ \"./styles/Comment.module.css\");\n/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/formatDistance */ \"./node_modules/date-fns/esm/formatDistance/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar Comment = function(param) {\n    var comment = param.comment;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().commentWrap),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/users/[...oneUser]\",\n                as: \"/users/\".concat(comment.postedBy._id),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().pic),\n                        src: !comment.postedBy.photo.startsWith('http') ? '/default.png' : post.postedBy.photo,\n                        alt: comment.postedBy.username,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/users/[...oneUser]\",\n                                as: \"/users/\".concat(comment.postedBy._id),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    style: {\n                                        textDecoration: 'none'\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: comment.postedBy.username\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().time),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new Date(comment.createdAt), new Date(), {\n                                    addSuffix: true\n                                }).replace('about', '').replace('less than', '')\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                            style: {\n                                color: '#000'\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\items\\\\Comment.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: comment.content\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar _c;\n$RefreshReg$(_c, \"Comment\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2l0ZW1zL0NvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QjtBQUMrQjtBQUNQOztBQUVwRCxHQUFLLENBQUNHLE9BQU8sR0FBRyxRQUFRLFFBQVMsQ0FBQztRQUFmQyxPQUFPLFNBQVBBLE9BQU87SUFDeEIsTUFBTSx1RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUVMLCtFQUF5Qjs7Ozs7Ozs7aUZBQ3RDRCxrREFBSTtnQkFBQ1EsSUFBSSxFQUFDLENBQXFCO2dCQUFDQyxFQUFFLEVBQUcsQ0FBTyxTQUF1QixPQUFyQkwsT0FBTyxDQUFDTSxRQUFRLENBQUNDLEdBQUc7Ozs7Ozs7K0ZBQ2hFQyxDQUFDOzs7Ozs7O21HQUNDQyxDQUFHO3dCQUNGUCxTQUFTLEVBQUVMLHVFQUFpQjt3QkFDNUJjLEdBQUcsR0FDQVgsT0FBTyxDQUFDTSxRQUFRLENBQUNNLEtBQUssQ0FBQ0MsVUFBVSxDQUFDLENBQU0sU0FDckMsQ0FBYyxnQkFDZEMsSUFBSSxDQUFDUixRQUFRLENBQUNNLEtBQUs7d0JBRXpCRyxHQUFHLEVBQUVmLE9BQU8sQ0FBQ00sUUFBUSxDQUFDVSxRQUFROzs7Ozs7Ozs7O2tGQUluQ2YsQ0FBRzs7Ozs7Ozs7MEZBQ0RBLENBQUc7Ozs7Ozs7O2lHQUNETCxrREFBSTtnQ0FDSFEsSUFBSSxFQUFDLENBQXFCO2dDQUMxQkMsRUFBRSxFQUFHLENBQU8sU0FBdUIsT0FBckJMLE9BQU8sQ0FBQ00sUUFBUSxDQUFDQyxHQUFHOzs7Ozs7OytHQUVqQ0MsQ0FBQztvQ0FBQ1MsS0FBSyxFQUFFLENBQUM7d0NBQUNDLGNBQWMsRUFBRSxDQUFNO29DQUFDLENBQUM7Ozs7Ozs7bUhBQ2pDQyxDQUFJO3dDQUFDakIsU0FBUyxFQUFFTCx3RUFBa0I7Ozs7Ozs7a0RBQ2hDRyxPQUFPLENBQUNNLFFBQVEsQ0FBQ1UsUUFBUTs7OztpR0FJL0JHLENBQUk7Z0NBQUNqQixTQUFTLEVBQUVMLHdFQUFrQjs7Ozs7OzswQ0FDaENDLG1FQUFjLENBQUMsR0FBRyxDQUFDd0IsSUFBSSxDQUFDdEIsT0FBTyxDQUFDdUIsU0FBUyxHQUFHLEdBQUcsQ0FBQ0QsSUFBSSxJQUFJLENBQUM7b0NBQ3hERSxTQUFTLEVBQUUsSUFBSTtnQ0FDakIsQ0FBQyxFQUNFQyxPQUFPLENBQUMsQ0FBTyxRQUFFLENBQUUsR0FDbkJBLE9BQU8sQ0FBQyxDQUFXLFlBQUUsQ0FBRTs7Ozt5RkFHN0J4QixDQUFHOzs7Ozs7O3VHQUNEeUIsQ0FBQzs0QkFBQ3hCLFNBQVMsRUFBRUwsMkVBQXFCOzRCQUFFb0IsS0FBSyxFQUFFLENBQUM7Z0NBQUNXLEtBQUssRUFBRSxDQUFNOzRCQUFDLENBQUM7Ozs7Ozs7c0NBQzFENUIsT0FBTyxDQUFDMkIsT0FBTzs7Ozs7OztBQU01QixDQUFDO0tBNUNLNUIsT0FBTztBQThDYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaXRlbXMvQ29tbWVudC5qcz8xOTNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBjb21tZW50U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Db21tZW50Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UnO1xyXG5cclxuY29uc3QgQ29tbWVudCA9ICh7IGNvbW1lbnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29tbWVudFN0eWxlcy5jb21tZW50V3JhcH0+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy91c2Vycy9bLi4ub25lVXNlcl0nIGFzPXtgL3VzZXJzLyR7Y29tbWVudC5wb3N0ZWRCeS5faWR9YH0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tbWVudFN0eWxlcy5waWN9XHJcbiAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgIWNvbW1lbnQucG9zdGVkQnkucGhvdG8uc3RhcnRzV2l0aCgnaHR0cCcpXHJcbiAgICAgICAgICAgICAgICA/ICcvZGVmYXVsdC5wbmcnXHJcbiAgICAgICAgICAgICAgICA6IHBvc3QucG9zdGVkQnkucGhvdG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbHQ9e2NvbW1lbnQucG9zdGVkQnkudXNlcm5hbWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPScvdXNlcnMvWy4uLm9uZVVzZXJdJ1xyXG4gICAgICAgICAgICBhcz17YC91c2Vycy8ke2NvbW1lbnQucG9zdGVkQnkuX2lkfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb21tZW50U3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAge2NvbW1lbnQucG9zdGVkQnkudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NvbW1lbnRTdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgIHtmb3JtYXREaXN0YW5jZShuZXcgRGF0ZShjb21tZW50LmNyZWF0ZWRBdCksIG5ldyBEYXRlKCksIHtcclxuICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2Fib3V0JywgJycpXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2xlc3MgdGhhbicsICcnKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtjb21tZW50U3R5bGVzLmNvbnRlbnR9IHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcgfX0+XHJcbiAgICAgICAgICAgIHtjb21tZW50LmNvbnRlbnR9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiY29tbWVudFN0eWxlcyIsImZvcm1hdERpc3RhbmNlIiwiQ29tbWVudCIsImNvbW1lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb21tZW50V3JhcCIsImhyZWYiLCJhcyIsInBvc3RlZEJ5IiwiX2lkIiwiYSIsImltZyIsInBpYyIsInNyYyIsInBob3RvIiwic3RhcnRzV2l0aCIsInBvc3QiLCJhbHQiLCJ1c2VybmFtZSIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJzcGFuIiwibmFtZSIsInRpbWUiLCJEYXRlIiwiY3JlYXRlZEF0IiwiYWRkU3VmZml4IiwicmVwbGFjZSIsInAiLCJjb250ZW50IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/items/Comment.js\n");

/***/ })

});