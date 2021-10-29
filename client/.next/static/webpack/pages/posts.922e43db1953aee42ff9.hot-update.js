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

  if (!posts.data || posts.data.length === 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuOTIyZTQzZGIxOTUzYWVlNDJmZjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDOUIsTUFBSSxDQUFDQSxLQUFLLENBQUNDLElBQVAsSUFBZUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLE1BQVgsS0FBc0IsQ0FBekMsRUFBNEM7QUFDMUMsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUNEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQUVBLE1BQU1LLFlBQVksR0FBR0wsS0FBSyxDQUFDQyxJQUFOLENBQVdLLEdBQVgsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsd0JBQ2xDLDhEQUFDLDBDQUFEO0FBQXFCLFVBQUksRUFBRUE7QUFBM0IsT0FBV0EsSUFBSSxDQUFDQyxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGtDO0FBQUEsR0FBZixDQUFyQjtBQUlBLHNCQUFPO0FBQUssYUFBUyxFQUFFVix5RUFBaEI7QUFBQSxjQUFzQ087QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FYRDs7S0FBTU47QUFhTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3N0IGZyb20gJy4vUG9zdCc7XHJcbmltcG9ydCBwb3N0U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Qb3N0Lm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgUG9zdExpc3QgPSAoeyBwb3N0cyB9KSA9PiB7XHJcbiAgaWYgKCFwb3N0cy5kYXRhIHx8IHBvc3RzLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gPGRpdj5MZXQncyBkaXNjb3ZlciBuZXcgaW5zcGlyYXRpb25zIG9uIHRvcGljcyB0YWI8L2Rpdj47XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHBvc3RzKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyZWRMaXN0ID0gcG9zdHMuZGF0YS5tYXAoKHBvc3QpID0+IChcclxuICAgIDxQb3N0IGtleT17cG9zdC5faWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0TGlzdH0+e3JlbmRlcmVkTGlzdH08L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdDtcclxuIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0U3R5bGVzIiwiUG9zdExpc3QiLCJwb3N0cyIsImRhdGEiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyZWRMaXN0IiwibWFwIiwicG9zdCIsIl9pZCIsInBvc3RMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==