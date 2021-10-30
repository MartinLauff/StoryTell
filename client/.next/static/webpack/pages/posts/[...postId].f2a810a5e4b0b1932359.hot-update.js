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
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
          children: comment.postedBy.username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().time),
          children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_3__.default)(new Date(comment.createdAt), new Date(), {
            addSuffix: true
          }).replace('about', '').replace('less than', '')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          children: comment.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvWy4uLnBvc3RJZF0uZjJhODEwYTVlNGIwYjE5MzIzNTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDL0Isc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLDhCQUNFO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFFSix3RUFBakI7QUFBQSxvQkFDR0ksT0FBTyxDQUFDRSxRQUFSLENBQWlCQztBQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBTSxtQkFBUyxFQUFFUCx3RUFBakI7QUFBQSxvQkFDR0UsZ0VBQWMsQ0FBQyxJQUFJTyxJQUFKLENBQVNMLE9BQU8sQ0FBQ00sU0FBakIsQ0FBRCxFQUE4QixJQUFJRCxJQUFKLEVBQTlCLEVBQTBDO0FBQ3ZERSxZQUFBQSxTQUFTLEVBQUU7QUFENEMsV0FBMUMsQ0FBZCxDQUdFQyxPQUhGLENBR1UsT0FIVixFQUdtQixFQUhuQixFQUlFQSxPQUpGLENBSVUsV0FKVixFQUl1QixFQUp2QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFhRTtBQUFBLCtCQUNFO0FBQUEsb0JBQU9SLE9BQU8sQ0FBQ1M7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBdkJEOztLQUFNVjtBQXlCTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGNvbW1lbnRTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NvbW1lbnQubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBzaG93U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9TaG93Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UnO1xyXG5cclxuY29uc3QgQ29tbWVudCA9ICh7IGNvbW1lbnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW1nIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29tbWVudFN0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAge2NvbW1lbnQucG9zdGVkQnkudXNlcm5hbWV9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NvbW1lbnRTdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgIHtmb3JtYXREaXN0YW5jZShuZXcgRGF0ZShjb21tZW50LmNyZWF0ZWRBdCksIG5ldyBEYXRlKCksIHtcclxuICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2Fib3V0JywgJycpXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2xlc3MgdGhhbicsICcnKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e2NvbW1lbnQuY29udGVudH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiY29tbWVudFN0eWxlcyIsInNob3dTdHlsZXMiLCJmb3JtYXREaXN0YW5jZSIsIkNvbW1lbnQiLCJjb21tZW50IiwibmFtZSIsInBvc3RlZEJ5IiwidXNlcm5hbWUiLCJ0aW1lIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImFkZFN1ZmZpeCIsInJlcGxhY2UiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==