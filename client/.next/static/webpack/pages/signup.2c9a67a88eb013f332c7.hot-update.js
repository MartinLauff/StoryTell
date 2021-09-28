"use strict";
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
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
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\signup.js",
    _this = undefined;






var signup = function signup() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "".concat((_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_2___default().mybackground)),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      style: {
        color: '#000'
      },
      className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_2___default().heading),
      children: "Storytell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_3___default().textInput),
      type: "text",
      placeholder: "Username",
      minLength: "4",
      maxLength: "14"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_3___default().textInput),
      type: "email",
      placeholder: "Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_3___default().textInput),
      type: "password",
      placeholder: "Password",
      minLength: "8",
      maxLength: "20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_3___default().textInput),
      type: "password",
      placeholder: "Password confirm",
      minLength: "8",
      maxLength: "20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SingleButton__WEBPACK_IMPORTED_MODULE_0__.default, {
      route: "/home",
      content: "Sign up",
      color: "redButton"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (signup);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjJjOWE2N2E4OGViMDEzZjMzMmM3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLHNCQUNFO0FBQUssYUFBUyxZQUFLRiw4RUFBTCxDQUFkO0FBQUEsNEJBQ0U7QUFBSSxXQUFLLEVBQUU7QUFBRUksUUFBQUEsS0FBSyxFQUFFO0FBQVQsT0FBWDtBQUE4QixlQUFTLEVBQUVKLHlFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFDRSxlQUFTLEVBQUVDLGdGQURiO0FBRUUsVUFBSSxFQUFDLE1BRlA7QUFHRSxpQkFBVyxFQUFDLFVBSGQ7QUFJRSxlQUFTLEVBQUMsR0FKWjtBQUtFLGVBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQVdFO0FBQ0UsZUFBUyxFQUFFQSxnRkFEYjtBQUVFLFVBQUksRUFBQyxPQUZQO0FBR0UsaUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRixlQWdCRTtBQUNFLGVBQVMsRUFBRUEsZ0ZBRGI7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLGlCQUFXLEVBQUMsVUFIZDtBQUlFLGVBQVMsRUFBQyxHQUpaO0FBS0UsZUFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRixlQXVCRTtBQUNFLGVBQVMsRUFBRUEsZ0ZBRGI7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLGlCQUFXLEVBQUMsa0JBSGQ7QUFJRSxlQUFTLEVBQUMsR0FKWjtBQUtFLGVBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkYsZUE4QkUsOERBQUMsNkRBQUQ7QUFBYyxXQUFLLEVBQUMsT0FBcEI7QUFBNEIsYUFBTyxFQUFDLFNBQXBDO0FBQThDLFdBQUssRUFBQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBbkNEOztBQXFDQSwrREFBZUMsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1NpbmdsZUJ1dHRvbic7XHJcbmltcG9ydCBpbmRleFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSW5kZXgubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBjb21wb25lblN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IHNpZ251cCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2luZGV4U3R5bGVzLm15YmFja2dyb3VuZH1gfT5cclxuICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcgfX0gY2xhc3NOYW1lPXtpbmRleFN0eWxlcy5oZWFkaW5nfT5cclxuICAgICAgICBTdG9yeXRlbGxcclxuICAgICAgPC9oMT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lblN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnXHJcbiAgICAgICAgbWluTGVuZ3RoPSc0J1xyXG4gICAgICAgIG1heExlbmd0aD0nMTQnXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW5TdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lblN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xyXG4gICAgICAgIG1pbkxlbmd0aD0nOCdcclxuICAgICAgICBtYXhMZW5ndGg9JzIwJ1xyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQgY29uZmlybSdcclxuICAgICAgICBtaW5MZW5ndGg9JzgnXHJcbiAgICAgICAgbWF4TGVuZ3RoPScyMCdcclxuICAgICAgLz5cclxuICAgICAgPFNpbmdsZUJ1dHRvbiByb3V0ZT0nL2hvbWUnIGNvbnRlbnQ9J1NpZ24gdXAnIGNvbG9yPSdyZWRCdXR0b24nIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lnbnVwO1xyXG4iXSwibmFtZXMiOlsiU2luZ2xlQnV0dG9uIiwiaW5kZXhTdHlsZXMiLCJjb21wb25lblN0eWxlcyIsInNpZ251cCIsIm15YmFja2dyb3VuZCIsImNvbG9yIiwiaGVhZGluZyIsInRleHRJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=