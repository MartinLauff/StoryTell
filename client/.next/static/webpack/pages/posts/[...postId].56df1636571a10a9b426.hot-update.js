"use strict";
self["webpackHotUpdate_N_E"]("pages/posts/[...postId]",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Comment.module.css */ "./styles/Comment.module.css");
/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/formatDistance */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\Comment.js",
    _this = undefined;






var Comment = function Comment(_ref) {
  var comment = _ref.comment;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().top),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
          children: comment.postedBy.username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().time),
          children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_3__.default)(new Date(comment.createdAt), new Date(), {
            addSuffix: true
          }).replace('about', '').replace('less than', '')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),
          children: comment.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Comment;
/* harmony default export */ __webpack_exports__["default"] = (Comment);

var _c;

$RefreshReg$(_c, "Comment");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvWy4uLnBvc3RJZF0uNTZkZjE2MzY1NzFhMTBhOWI0MjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQy9CLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVILHVFQUFoQjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBRUEsd0VBQWpCO0FBQUEsb0JBQ0dHLE9BQU8sQ0FBQ0csUUFBUixDQUFpQkM7QUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQU0sbUJBQVMsRUFBRVAsd0VBQWpCO0FBQUEsb0JBQ0dDLGdFQUFjLENBQUMsSUFBSVEsSUFBSixDQUFTTixPQUFPLENBQUNPLFNBQWpCLENBQUQsRUFBOEIsSUFBSUQsSUFBSixFQUE5QixFQUEwQztBQUN2REUsWUFBQUEsU0FBUyxFQUFFO0FBRDRDLFdBQTFDLENBQWQsQ0FHRUMsT0FIRixDQUdVLE9BSFYsRUFHbUIsRUFIbkIsRUFJRUEsT0FKRixDQUlVLFdBSlYsRUFJdUIsRUFKdkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBYUU7QUFBQSwrQkFDRTtBQUFNLG1CQUFTLEVBQUVaLDJFQUFqQjtBQUFBLG9CQUF5Q0csT0FBTyxDQUFDVTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBdkJEOztLQUFNWDtBQXlCTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGNvbW1lbnRTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NvbW1lbnQubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZSc7XHJcblxyXG5jb25zdCBDb21tZW50ID0gKHsgY29tbWVudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWcgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tbWVudFN0eWxlcy50b3B9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb21tZW50U3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICB7Y29tbWVudC5wb3N0ZWRCeS51c2VybmFtZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29tbWVudFN0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKG5ldyBEYXRlKGNvbW1lbnQuY3JlYXRlZEF0KSwgbmV3IERhdGUoKSwge1xyXG4gICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAucmVwbGFjZSgnYWJvdXQnLCAnJylcclxuICAgICAgICAgICAgICAucmVwbGFjZSgnbGVzcyB0aGFuJywgJycpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NvbW1lbnRTdHlsZXMuY29udGVudH0+e2NvbW1lbnQuY29udGVudH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiY29tbWVudFN0eWxlcyIsImZvcm1hdERpc3RhbmNlIiwiQ29tbWVudCIsImNvbW1lbnQiLCJ0b3AiLCJuYW1lIiwicG9zdGVkQnkiLCJ1c2VybmFtZSIsInRpbWUiLCJEYXRlIiwiY3JlYXRlZEF0IiwiYWRkU3VmZml4IiwicmVwbGFjZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9