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
/* harmony import */ var _styles_Show_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Show.module.css */ "./styles/Show.module.css");
/* harmony import */ var _styles_Show_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_4__);
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
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvWy4uLnBvc3RJZF0uODExY2IzNmE0NjU3ZDE1ZjNhNTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMvQixzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUFNLG1CQUFTLEVBQUVKLHdFQUFqQjtBQUFBLG9CQUNHSSxPQUFPLENBQUNFLFFBQVIsQ0FBaUJDO0FBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFNLG1CQUFTLEVBQUVQLHdFQUFqQjtBQUFBLG9CQUNHRSxnRUFBYyxDQUFDLElBQUlPLElBQUosQ0FBU0wsT0FBTyxDQUFDTSxTQUFqQixDQUFELEVBQThCLElBQUlELElBQUosRUFBOUIsRUFBMEM7QUFDdkRFLFlBQUFBLFNBQVMsRUFBRTtBQUQ0QyxXQUExQyxDQUFkLENBR0VDLE9BSEYsQ0FHVSxPQUhWLEVBR21CLEVBSG5CLEVBSUVBLE9BSkYsQ0FJVSxXQUpWLEVBSXVCLEVBSnZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWFFO0FBQUEsK0JBQ0U7QUFBTSxtQkFBUyxFQUFFWCx3RUFBakI7QUFBQSxvQkFBc0NHLE9BQU8sQ0FBQ1M7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQXZCRDs7S0FBTVY7QUF5Qk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBjb21tZW50U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Db21tZW50Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgc2hvd1N0eWxlcyBmcm9tICcuLi9zdHlsZXMvU2hvdy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlJztcclxuXHJcbmNvbnN0IENvbW1lbnQgPSAoeyBjb21tZW50IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGltZyAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NvbW1lbnRTdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgIHtjb21tZW50LnBvc3RlZEJ5LnVzZXJuYW1lfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb21tZW50U3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2UobmV3IERhdGUoY29tbWVudC5jcmVhdGVkQXQpLCBuZXcgRGF0ZSgpLCB7XHJcbiAgICAgICAgICAgICAgYWRkU3VmZml4OiB0cnVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdhYm91dCcsICcnKVxyXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdsZXNzIHRoYW4nLCAnJyl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c2hvd1N0eWxlcy5jb250ZW50fT57Y29tbWVudC5jb250ZW50fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJjb21tZW50U3R5bGVzIiwic2hvd1N0eWxlcyIsImZvcm1hdERpc3RhbmNlIiwiQ29tbWVudCIsImNvbW1lbnQiLCJuYW1lIiwicG9zdGVkQnkiLCJ1c2VybmFtZSIsInRpbWUiLCJEYXRlIiwiY3JlYXRlZEF0IiwiYWRkU3VmZml4IiwicmVwbGFjZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9