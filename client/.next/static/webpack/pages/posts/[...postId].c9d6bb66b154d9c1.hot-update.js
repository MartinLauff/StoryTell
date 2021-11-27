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

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Comment.module.css */ \"./styles/Comment.module.css\");\n/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/formatDistance */ \"./node_modules/date-fns/esm/formatDistance/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this2 = undefined;\nvar _s = $RefreshSig$();\nvar Comment = function(param) {\n    var comment = param.comment;\n    var _this1 = _this2;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), state = ref[0], setState = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        //Converts comment to charArray and returns array with whitespaces only\n        var newArr = comment.content.split('').filter(function(el) {\n            return el === ' ';\n        });\n        if (comment.content.length > 15 && newArr.length < 2) {\n            var _this = _this1;\n            var arr = comment.content.split(' ');\n            setState(arr.map(function(content, i) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\Comment.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: content\n                }, i);\n            }));\n        } else {\n            setState(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\Comment.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                },\n                __self: _this1,\n                children: comment.content\n            }));\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().commentWrap),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\Comment.js\",\n            lineNumber: 27,\n            columnNumber: 5\n        },\n        __self: _this2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().pic),\n                src: !comment.postedBy.photo.startsWith('http') ? '/default.png' : post.postedBy.photo,\n                alt: comment.postedBy.username,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\Comment.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this2\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\Comment.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: _this2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\Comment.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        },\n                        __self: _this2,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\Comment.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 11\n                                },\n                                __self: _this2,\n                                children: comment.postedBy.username\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_3___default().time),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\Comment.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 11\n                                },\n                                __self: _this2,\n                                children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Date(comment.createdAt), new Date(), {\n                                    addSuffix: true\n                                }).replace('about', '').replace('less than', '')\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\Comment.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        },\n                        __self: _this2,\n                        children: state\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Comment, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar _c;\n$RefreshReg$(_c, \"Comment\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ2U7QUFDYTtBQUNKOzs7QUFFcEQsR0FBSyxDQUFDSyxPQUFPLEdBQUcsUUFBUSxRQUFTLENBQUM7UUFBZkMsT0FBTyxTQUFQQSxPQUFPOzs7SUFDeEIsR0FBSyxDQUFxQkwsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBaENNLEtBQUssR0FBY04sR0FBYyxLQUExQk8sUUFBUSxHQUFJUCxHQUFjO0lBQ3hDQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2YsRUFBdUU7UUFDdkUsR0FBRyxDQUFDTyxNQUFNLEdBQUdILE9BQU8sQ0FBQ0ksT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBRSxHQUFFQyxNQUFNLENBQUMsUUFBUUMsQ0FBUEEsRUFBRTtZQUFLQSxNQUFNLENBQU5BLEVBQUUsS0FBSyxDQUFHOztRQUNoRSxFQUFFLEVBQUVQLE9BQU8sQ0FBQ0ksT0FBTyxDQUFDSSxNQUFNLEdBQUcsRUFBRSxJQUFJTCxNQUFNLENBQUNLLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzs7WUFDckQsR0FBSyxDQUFDQyxHQUFHLEdBQUdULE9BQU8sQ0FBQ0ksT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBRztZQUNyQ0gsUUFBUSxDQUNOTyxHQUFHLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBOLE9BQU8sRUFBRU8sQ0FBQzs4QkFDakIsTUFBTSx3REFBTEMsQ0FBQztvQkFBU0MsU0FBUyxFQUFFaEIsMkVBQXFCOzs7Ozs7OzhCQUN4Q08sT0FBTzttQkFERk8sQ0FBQzs7UUFLZixDQUFDLE1BQU0sQ0FBQztZQUNOVCxRQUFRLHNFQUNMWSxDQUFJO2dCQUFDRCxTQUFTLEVBQUVoQiwyRUFBcUI7Ozs7Ozs7MEJBQUdHLE9BQU8sQ0FBQ0ksT0FBTzs7UUFFNUQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLHVFQUNIVyxDQUFHO1FBQUNGLFNBQVMsRUFBRWhCLCtFQUF5Qjs7Ozs7Ozs7aUZBQ3RDb0IsQ0FBRztnQkFDRkosU0FBUyxFQUFFaEIsdUVBQWlCO2dCQUM1QnNCLEdBQUcsR0FDQW5CLE9BQU8sQ0FBQ29CLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVLENBQUMsQ0FBTSxTQUNyQyxDQUFjLGdCQUNkQyxJQUFJLENBQUNILFFBQVEsQ0FBQ0MsS0FBSztnQkFFekJHLEdBQUcsRUFBRXhCLE9BQU8sQ0FBQ29CLFFBQVEsQ0FBQ0ssUUFBUTs7Ozs7Ozs7a0ZBRS9CVixDQUFHOzs7Ozs7OzswRkFDREEsQ0FBRzs7Ozs7Ozs7aUdBQ0RELENBQUk7Z0NBQUNELFNBQVMsRUFBRWhCLHdFQUFrQjs7Ozs7OzswQ0FDaENHLE9BQU8sQ0FBQ29CLFFBQVEsQ0FBQ0ssUUFBUTs7aUdBRTNCWCxDQUFJO2dDQUFDRCxTQUFTLEVBQUVoQix3RUFBa0I7Ozs7Ozs7MENBQ2hDQyxtRUFBYyxDQUFDLEdBQUcsQ0FBQzhCLElBQUksQ0FBQzVCLE9BQU8sQ0FBQzZCLFNBQVMsR0FBRyxHQUFHLENBQUNELElBQUksSUFBSSxDQUFDO29DQUN4REUsU0FBUyxFQUFFLElBQUk7Z0NBQ2pCLENBQUMsRUFDRUMsT0FBTyxDQUFDLENBQU8sUUFBRSxDQUFFLEdBQ25CQSxPQUFPLENBQUMsQ0FBVyxZQUFFLENBQUU7Ozs7eUZBRzdCaEIsQ0FBRzs7Ozs7OztrQ0FBRWQsS0FBSzs7Ozs7O0FBSW5CLENBQUM7R0FoREtGLE9BQU87S0FBUEEsT0FBTztBQWtEYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbWVudC5qcz8zYjIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb21tZW50U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Db21tZW50Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UnO1xyXG5cclxuY29uc3QgQ29tbWVudCA9ICh7IGNvbW1lbnQgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vQ29udmVydHMgY29tbWVudCB0byBjaGFyQXJyYXkgYW5kIHJldHVybnMgYXJyYXkgd2l0aCB3aGl0ZXNwYWNlcyBvbmx5XHJcbiAgICBsZXQgbmV3QXJyID0gY29tbWVudC5jb250ZW50LnNwbGl0KCcnKS5maWx0ZXIoKGVsKSA9PiBlbCA9PT0gJyAnKTtcclxuICAgIGlmIChjb21tZW50LmNvbnRlbnQubGVuZ3RoID4gMTUgJiYgbmV3QXJyLmxlbmd0aCA8IDIpIHtcclxuICAgICAgY29uc3QgYXJyID0gY29tbWVudC5jb250ZW50LnNwbGl0KCcgJyk7XHJcbiAgICAgIHNldFN0YXRlKFxyXG4gICAgICAgIGFyci5tYXAoKGNvbnRlbnQsIGkpID0+IChcclxuICAgICAgICAgIDxwIGtleT17aX0gY2xhc3NOYW1lPXtjb21tZW50U3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U3RhdGUoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb21tZW50U3R5bGVzLmNvbnRlbnR9Pntjb21tZW50LmNvbnRlbnR9PC9zcGFuPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbW1lbnRTdHlsZXMuY29tbWVudFdyYXB9PlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjb21tZW50U3R5bGVzLnBpY31cclxuICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgIWNvbW1lbnQucG9zdGVkQnkucGhvdG8uc3RhcnRzV2l0aCgnaHR0cCcpXHJcbiAgICAgICAgICAgID8gJy9kZWZhdWx0LnBuZydcclxuICAgICAgICAgICAgOiBwb3N0LnBvc3RlZEJ5LnBob3RvXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsdD17Y29tbWVudC5wb3N0ZWRCeS51c2VybmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb21tZW50U3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICB7Y29tbWVudC5wb3N0ZWRCeS51c2VybmFtZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29tbWVudFN0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKG5ldyBEYXRlKGNvbW1lbnQuY3JlYXRlZEF0KSwgbmV3IERhdGUoKSwge1xyXG4gICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAucmVwbGFjZSgnYWJvdXQnLCAnJylcclxuICAgICAgICAgICAgICAucmVwbGFjZSgnbGVzcyB0aGFuJywgJycpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+e3N0YXRlfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29tbWVudFN0eWxlcyIsImZvcm1hdERpc3RhbmNlIiwiQ29tbWVudCIsImNvbW1lbnQiLCJzdGF0ZSIsInNldFN0YXRlIiwibmV3QXJyIiwiY29udGVudCIsInNwbGl0IiwiZmlsdGVyIiwiZWwiLCJsZW5ndGgiLCJhcnIiLCJtYXAiLCJpIiwicCIsImNsYXNzTmFtZSIsInNwYW4iLCJkaXYiLCJjb21tZW50V3JhcCIsImltZyIsInBpYyIsInNyYyIsInBvc3RlZEJ5IiwicGhvdG8iLCJzdGFydHNXaXRoIiwicG9zdCIsImFsdCIsInVzZXJuYW1lIiwibmFtZSIsInRpbWUiLCJEYXRlIiwiY3JlYXRlZEF0IiwiYWRkU3VmZml4IiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Comment.js\n");

/***/ })

});