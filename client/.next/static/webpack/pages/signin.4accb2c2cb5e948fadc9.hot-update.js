"use strict";
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SingleButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SingleButton */ "./components/SingleButton.js");
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Index.module.css */ "./styles/Index.module.css");
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Components.module.css */ "./styles/Components.module.css");
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\signin.js",
    _this = undefined;






var signin = function signin() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "".concat((_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_2___default().mybackground), " ").concat((_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_2___default().signinImg)),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_2___default().heading),
      children: "Storytell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
      style: {
        display: 'initial'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_3___default().textInput),
        type: "email",
        placeholder: "Email",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_3___default().textInput),
        type: "password",
        placeholder: "Password",
        minLength: "8",
        maxLength: "20",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SingleButton__WEBPACK_IMPORTED_MODULE_0__.default, {
        route: "/home",
        content: "Sign in",
        color: "redButton"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
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

/* harmony default export */ __webpack_exports__["default"] = (signin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjRhY2NiMmMyY2I1ZTk0OGZhZGM5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLHNCQUNFO0FBQUssYUFBUyxZQUFLRiw4RUFBTCxjQUFpQ0EsMkVBQWpDLENBQWQ7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRUEseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQU0sV0FBSyxFQUFFO0FBQUVNLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQWI7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUVMLGdGQURiO0FBRUUsWUFBSSxFQUFDLE9BRlA7QUFHRSxtQkFBVyxFQUFDLE9BSGQ7QUFJRSxnQkFBUTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQ0UsaUJBQVMsRUFBRUEsZ0ZBRGI7QUFFRSxZQUFJLEVBQUMsVUFGUDtBQUdFLG1CQUFXLEVBQUMsVUFIZDtBQUlFLGlCQUFTLEVBQUMsR0FKWjtBQUtFLGlCQUFTLEVBQUMsSUFMWjtBQU1FLGdCQUFRO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBZUUsOERBQUMsNkRBQUQ7QUFBYyxhQUFLLEVBQUMsT0FBcEI7QUFBNEIsZUFBTyxFQUFDLFNBQXBDO0FBQThDLGFBQUssRUFBQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0F2QkQ7O0FBeUJBLCtEQUFlQyxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ25pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2luZ2xlQnV0dG9uJztcclxuaW1wb3J0IGluZGV4U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9JbmRleC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGNvbXBvbmVuU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Db21wb25lbnRzLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3Qgc2lnbmluID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aW5kZXhTdHlsZXMubXliYWNrZ3JvdW5kfSAke2luZGV4U3R5bGVzLnNpZ25pbkltZ31gfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17aW5kZXhTdHlsZXMuaGVhZGluZ30+U3Rvcnl0ZWxsPC9oMT5cclxuICAgICAgPGZvcm0gc3R5bGU9e3sgZGlzcGxheTogJ2luaXRpYWwnIH19PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lblN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW5TdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXHJcbiAgICAgICAgICBtaW5MZW5ndGg9JzgnXHJcbiAgICAgICAgICBtYXhMZW5ndGg9JzIwJ1xyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTaW5nbGVCdXR0b24gcm91dGU9Jy9ob21lJyBjb250ZW50PSdTaWduIGluJyBjb2xvcj0ncmVkQnV0dG9uJyAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lnbmluO1xyXG4iXSwibmFtZXMiOlsiU2luZ2xlQnV0dG9uIiwiaW5kZXhTdHlsZXMiLCJjb21wb25lblN0eWxlcyIsInNpZ25pbiIsIm15YmFja2dyb3VuZCIsInNpZ25pbkltZyIsImhlYWRpbmciLCJkaXNwbGF5IiwidGV4dElucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==