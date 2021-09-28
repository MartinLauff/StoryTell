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
    className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_2___default().mybackground),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_2___default().heading),
        children: "Storytell"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_3___default().textInput),
        type: "email",
        placeholder: "Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_3___default().textInput),
        type: "password",
        placeholder: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SingleButton__WEBPACK_IMPORTED_MODULE_0__.default, {
        route: "/home",
        content: "Sign in",
        color: "redButton"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjQ1MTQxNjRhNjMxNmFkNTQyMTI5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLHNCQUNFO0FBQUssYUFBUyxFQUFFRiw4RUFBaEI7QUFBQSwyQkFDRTtBQUNFLFdBQUssRUFBRTtBQUNMSSxRQUFBQSxPQUFPLEVBQUUsTUFESjtBQUVMQyxRQUFBQSxhQUFhLEVBQUUsUUFGVjtBQUdMQyxRQUFBQSxVQUFVLEVBQUU7QUFIUCxPQURUO0FBQUEsOEJBT0U7QUFBSSxpQkFBUyxFQUFFTix5RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBUUU7QUFDRSxpQkFBUyxFQUFFQyxnRkFEYjtBQUVFLFlBQUksRUFBQyxPQUZQO0FBR0UsbUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQWFFO0FBQ0UsaUJBQVMsRUFBRUEsZ0ZBRGI7QUFFRSxZQUFJLEVBQUMsVUFGUDtBQUdFLG1CQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkYsZUFrQkUsOERBQUMsNkRBQUQ7QUFBYyxhQUFLLEVBQUMsT0FBcEI7QUFBNEIsZUFBTyxFQUFDLFNBQXBDO0FBQThDLGFBQUssRUFBQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQXpCRDs7QUEyQkEsK0RBQWVDLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGVCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9TaW5nbGVCdXR0b24nO1xyXG5pbXBvcnQgaW5kZXhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0luZGV4Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgY29tcG9uZW5TdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NvbXBvbmVudHMubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBzaWduaW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleFN0eWxlcy5teWJhY2tncm91bmR9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2luZGV4U3R5bGVzLmhlYWRpbmd9PlN0b3J5dGVsbDwvaDE+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNpbmdsZUJ1dHRvbiByb3V0ZT0nL2hvbWUnIGNvbnRlbnQ9J1NpZ24gaW4nIGNvbG9yPSdyZWRCdXR0b24nIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ25pbjtcclxuIl0sIm5hbWVzIjpbIlNpbmdsZUJ1dHRvbiIsImluZGV4U3R5bGVzIiwiY29tcG9uZW5TdHlsZXMiLCJzaWduaW4iLCJteWJhY2tncm91bmQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJoZWFkaW5nIiwidGV4dElucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==