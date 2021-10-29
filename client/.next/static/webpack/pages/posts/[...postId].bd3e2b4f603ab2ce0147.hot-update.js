"use strict";
self["webpackHotUpdate_N_E"]("pages/posts/[...postId]",{

/***/ "./components/CommentList.js":
/*!***********************************!*\
  !*** ./components/CommentList.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Comment.module.css */ "./styles/Comment.module.css");
/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\CommentList.js",
    _this = undefined;





var CommentList = function CommentList(_ref) {
  var comments = _ref.comments;

  if (!comments || comments.length === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().noComments),
      children: "Be the first one to comment this post!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this);
  }

  var renderedList = comments.map(function (comment) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Comment__WEBPACK_IMPORTED_MODULE_0__.default, {
      comment: comment
    }, comment._id, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().commentList),
    children: renderedList
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvWy4uLnBvc3RJZF0uYmQzZTJiNGY2MDNhYjJjZTAxNDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQ3BDLE1BQUksQ0FBQ0EsUUFBRCxJQUFhQSxRQUFRLENBQUNDLE1BQVQsS0FBb0IsQ0FBckMsRUFBd0M7QUFDdEMsd0JBQ0U7QUFBSyxlQUFTLEVBQUVILDhFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0Q7O0FBRUQsTUFBTUssWUFBWSxHQUFHSCxRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsd0JBQ2hDLDhEQUFDLDZDQUFEO0FBQTJCLGFBQU8sRUFBRUE7QUFBcEMsT0FBY0EsT0FBTyxDQUFDQyxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGdDO0FBQUEsR0FBYixDQUFyQjtBQUlBLHNCQUFPO0FBQUssYUFBUyxFQUFFUiwrRUFBaEI7QUFBQSxjQUE0Q0s7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FkRDs7S0FBTUo7QUFnQk4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnO1xyXG5pbXBvcnQgY29tbWVudFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ29tbWVudC5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IENvbW1lbnRMaXN0ID0gKHsgY29tbWVudHMgfSkgPT4ge1xyXG4gIGlmICghY29tbWVudHMgfHwgY29tbWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tbWVudFN0eWxlcy5ub0NvbW1lbnRzfT5cclxuICAgICAgICBCZSB0aGUgZmlyc3Qgb25lIHRvIGNvbW1lbnQgdGhpcyBwb3N0IVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJlZExpc3QgPSBjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgIDxDb21tZW50IGtleT17Y29tbWVudC5faWR9IGNvbW1lbnQ9e2NvbW1lbnR9IC8+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y29tbWVudFN0eWxlcy5jb21tZW50TGlzdH0+e3JlbmRlcmVkTGlzdH08L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50TGlzdDtcclxuIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJjb21tZW50U3R5bGVzIiwiQ29tbWVudExpc3QiLCJjb21tZW50cyIsImxlbmd0aCIsIm5vQ29tbWVudHMiLCJyZW5kZXJlZExpc3QiLCJtYXAiLCJjb21tZW50IiwiX2lkIiwiY29tbWVudExpc3QiXSwic291cmNlUm9vdCI6IiJ9