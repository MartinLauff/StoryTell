"use strict";
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post */ "./components/Post.js");
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Post.module.css */ "./styles/Post.module.css");
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\PostList.js",
    _this = undefined;





var PostList = function PostList(_ref) {
  var posts = _ref.posts;

  if (!posts || posts.length === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: "Let's discover new inspirations on topics tab"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }, _this);
  }

  console.log(posts);
  var renderedList = posts.data.map(function (post) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_0__.default, {
      post: post
    }, post._id, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_2___default().postList),
    children: renderedList
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 10
  }, _this);
};

_c = PostList;
/* harmony default export */ __webpack_exports__["default"] = (PostList);

var _c;

$RefreshReg$(_c, "PostList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuY2IyYTNkNDFlZjg4M2Y0NWQ1ZTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDOUIsTUFBSSxDQUFDQSxLQUFELElBQVVBLEtBQUssQ0FBQ0MsTUFBTixLQUFpQixDQUEvQixFQUFrQztBQUNoQyx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0RDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBRUEsTUFBTUksWUFBWSxHQUFHSixLQUFLLENBQUNLLElBQU4sQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLElBQUQ7QUFBQSx3QkFDbEMsOERBQUMsMENBQUQ7QUFBcUIsVUFBSSxFQUFFQTtBQUEzQixPQUFXQSxJQUFJLENBQUNDLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEa0M7QUFBQSxHQUFmLENBQXJCO0FBSUEsc0JBQU87QUFBSyxhQUFTLEVBQUVWLHlFQUFoQjtBQUFBLGNBQXNDTTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQVhEOztLQUFNTDtBQWFOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdExpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3QgZnJvbSAnLi9Qb3N0JztcclxuaW1wb3J0IHBvc3RTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Bvc3QubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBQb3N0TGlzdCA9ICh7IHBvc3RzIH0pID0+IHtcclxuICBpZiAoIXBvc3RzIHx8IHBvc3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDxkaXY+TGV0J3MgZGlzY292ZXIgbmV3IGluc3BpcmF0aW9ucyBvbiB0b3BpY3MgdGFiPC9kaXY+O1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhwb3N0cyk7XHJcblxyXG4gIGNvbnN0IHJlbmRlcmVkTGlzdCA9IHBvc3RzLmRhdGEubWFwKChwb3N0KSA9PiAoXHJcbiAgICA8UG9zdCBrZXk9e3Bvc3QuX2lkfSBwb3N0PXtwb3N0fSAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdExpc3R9PntyZW5kZXJlZExpc3R9PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7XHJcbiJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdFN0eWxlcyIsIlBvc3RMaXN0IiwicG9zdHMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyZWRMaXN0IiwiZGF0YSIsIm1hcCIsInBvc3QiLCJfaWQiLCJwb3N0TGlzdCJdLCJzb3VyY2VSb290IjoiIn0=