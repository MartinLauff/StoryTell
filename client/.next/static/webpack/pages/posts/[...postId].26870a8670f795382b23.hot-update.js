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
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/formatDistance */ "./node_modules/date-fns/esm/formatDistance/index.js");
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          children: comment.postedBy.username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_2__.default)(new Date(comment.createdAt), new Date(), {
            addSuffix: true
          }).replace('about', '').replace('less than', '')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          children: comment.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvWy4uLnBvc3RJZF0uMjY4NzBhODY3MGY3OTUzODJiMjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMvQixzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFPQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLG9CQUNHSixnRUFBYyxDQUFDLElBQUlLLElBQUosQ0FBU0gsT0FBTyxDQUFDSSxTQUFqQixDQUFELEVBQThCLElBQUlELElBQUosRUFBOUIsRUFBMEM7QUFDdkRFLFlBQUFBLFNBQVMsRUFBRTtBQUQ0QyxXQUExQyxDQUFkLENBR0VDLE9BSEYsQ0FHVSxPQUhWLEVBR21CLEVBSG5CLEVBSUVBLE9BSkYsQ0FJVSxXQUpWLEVBSXVCLEVBSnZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVdFO0FBQUEsK0JBQ0U7QUFBQSxvQkFBT04sT0FBTyxDQUFDTztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0FyQkQ7O0tBQU1SO0FBdUJOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY29tbWVudFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ29tbWVudC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlJztcclxuXHJcbmNvbnN0IENvbW1lbnQgPSAoeyBjb21tZW50IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGltZyAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57Y29tbWVudC5wb3N0ZWRCeS51c2VybmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKG5ldyBEYXRlKGNvbW1lbnQuY3JlYXRlZEF0KSwgbmV3IERhdGUoKSwge1xyXG4gICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAucmVwbGFjZSgnYWJvdXQnLCAnJylcclxuICAgICAgICAgICAgICAucmVwbGFjZSgnbGVzcyB0aGFuJywgJycpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57Y29tbWVudC5jb250ZW50fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJjb21tZW50U3R5bGVzIiwiZm9ybWF0RGlzdGFuY2UiLCJDb21tZW50IiwiY29tbWVudCIsInBvc3RlZEJ5IiwidXNlcm5hbWUiLCJEYXRlIiwiY3JlYXRlZEF0IiwiYWRkU3VmZml4IiwicmVwbGFjZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9