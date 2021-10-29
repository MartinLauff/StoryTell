"use strict";
self["webpackHotUpdate_N_E"]("pages/posts/[...postId]",{

/***/ "./components/CommentList.js":
/*!***********************************!*\
  !*** ./components/CommentList.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\CommentList.js",
    _this = undefined;





var CommentList = function CommentList(_ref) {
  var comments = _ref.comments;

  if (!comments) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: "Be the first one to comment this post!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }, _this);
  }

  var renderedList = comments.data.map(function (comment) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Comment__WEBPACK_IMPORTED_MODULE_0__.default, {
      comment: comment
    }, comment._id, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: renderedList
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, _this);
};

_c = CommentList;
/* harmony default export */ __webpack_exports__["default"] = (CommentList);

var _c;

$RefreshReg$(_c, "CommentList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvWy4uLnBvc3RJZF0uYzU1MGM5ODk5MTUxZTVmMTMzOTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNwQyxNQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNiLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxNQUFNQyxZQUFZLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLE9BQUQ7QUFBQSx3QkFDckMsOERBQUMsNkNBQUQ7QUFBMkIsYUFBTyxFQUFFQTtBQUFwQyxPQUFjQSxPQUFPLENBQUNDLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEcUM7QUFBQSxHQUFsQixDQUFyQjtBQUlBLHNCQUFPO0FBQUEsY0FBTUo7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQVZEOztLQUFNRjtBQVlOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbWVudExpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9Db21tZW50JztcclxuaW1wb3J0IGNvbW1lbnRTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NvbW1lbnQubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBDb21tZW50TGlzdCA9ICh7IGNvbW1lbnRzIH0pID0+IHtcclxuICBpZiAoIWNvbW1lbnRzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5CZSB0aGUgZmlyc3Qgb25lIHRvIGNvbW1lbnQgdGhpcyBwb3N0ITwvZGl2PjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlcmVkTGlzdCA9IGNvbW1lbnRzLmRhdGEubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICA8Q29tbWVudCBrZXk9e2NvbW1lbnQuX2lkfSBjb21tZW50PXtjb21tZW50fSAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gPGRpdj57cmVuZGVyZWRMaXN0fTwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRMaXN0O1xyXG4iXSwibmFtZXMiOlsiQ29tbWVudCIsImNvbW1lbnRTdHlsZXMiLCJDb21tZW50TGlzdCIsImNvbW1lbnRzIiwicmVuZGVyZWRMaXN0IiwiZGF0YSIsIm1hcCIsImNvbW1lbnQiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9