"use strict";
self["webpackHotUpdate_N_E"]("pages/auth/signup",{

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SingleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SingleButton */ "./components/SingleButton.js");
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Index.module.css */ "./styles/Index.module.css");
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Error.module.css */ "./styles/Error.module.css");
/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Components.module.css */ "./styles/Components.module.css");
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\auth\\signup.js",
    _this = undefined,
    _s = $RefreshSig$();









var signup = function signup() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      passwordConfirm = _useState4[0],
      setPasswordConfirm = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      active = _useState5[0],
      setActive = _useState5[1];

  var submit = function submit(e) {
    e.preventDefault();

    if (!username || !email || !password || !passwordConfirm) {
      return;
    }

    if (password !== passwordConfirm) {
      return setActive(function (oldState) {
        return !oldState;
      });
    }

    router.push('/posts');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "".concat((_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default().mybackground)),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      style: {
        color: '#000'
      },
      className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),
      children: "Storytell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
      className: (_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default().flexCenter),
      onSubmit: submit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5___default().textInput),
        onChange: function onChange(e) {
          return setUsername(e.target.value);
        },
        type: "text",
        placeholder: "Username",
        minLength: "4",
        maxLength: "14",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5___default().textInput),
        onChange: function onChange(e) {
          return setEmail(e.target.value);
        },
        type: "email",
        placeholder: "Email",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5___default().textInput),
        onChange: function onChange(e) {
          return setPassword(e.target.value);
        },
        type: "password",
        placeholder: "Password",
        minLength: "8",
        maxLength: "20",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_5___default().textInput),
        onChange: function onChange(e) {
          return setPasswordConfirm(e.target.value);
        },
        type: "password",
        placeholder: "Password confirm",
        minLength: "8",
        maxLength: "20",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_SingleButton__WEBPACK_IMPORTED_MODULE_2__.default, {
        content: "Register",
        color: "redButton"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        className: active ? (_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6___default().errMessage) : '',
        children: "Please confirm your password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(signup, "aNxKIGrbGrWCaJG+Z7s8vMW32E8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9zaWdudXAuOTNiNDc1ZjQxMTc5YTI2YjkwMzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBeEI7O0FBQ0Esa0JBQWdDRCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPUSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUEwQlQsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT1UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWdDWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPWSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE4Q2IsK0NBQVEsQ0FBQyxFQUFELENBQXREO0FBQUEsTUFBT2MsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQTRCZiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPZ0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSSxDQUFDWixRQUFELElBQWEsQ0FBQ0UsS0FBZCxJQUF1QixDQUFDRSxRQUF4QixJQUFvQyxDQUFDRSxlQUF6QyxFQUEwRDtBQUN4RDtBQUNEOztBQUNELFFBQUlGLFFBQVEsS0FBS0UsZUFBakIsRUFBa0M7QUFDaEMsYUFBT0csU0FBUyxDQUFDLFVBQUNJLFFBQUQ7QUFBQSxlQUFjLENBQUNBLFFBQWY7QUFBQSxPQUFELENBQWhCO0FBQ0Q7O0FBRURkLElBQUFBLE1BQU0sQ0FBQ2UsSUFBUCxDQUFZLFFBQVo7QUFDRCxHQVhEOztBQWFBLHNCQUNFO0FBQUssYUFBUyxZQUFLbkIsOEVBQUwsQ0FBZDtBQUFBLDRCQUNFO0FBQUksV0FBSyxFQUFFO0FBQUVxQixRQUFBQSxLQUFLLEVBQUU7QUFBVCxPQUFYO0FBQThCLGVBQVMsRUFBRXJCLHlFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBTSxlQUFTLEVBQUVBLDRFQUFqQjtBQUF5QyxjQUFRLEVBQUVlLE1BQW5EO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxFQUFFYixnRkFEYjtBQUVFLGdCQUFRLEVBQUUsa0JBQUNjLENBQUQ7QUFBQSxpQkFBT1YsV0FBVyxDQUFDVSxDQUFDLENBQUNTLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLFNBRlo7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLG1CQUFXLEVBQUMsVUFKZDtBQUtFLGlCQUFTLEVBQUMsR0FMWjtBQU1FLGlCQUFTLEVBQUMsSUFOWjtBQU9FLGdCQUFRO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBVUU7QUFDRSxpQkFBUyxFQUFFeEIsZ0ZBRGI7QUFFRSxnQkFBUSxFQUFFLGtCQUFDYyxDQUFEO0FBQUEsaUJBQU9SLFFBQVEsQ0FBQ1EsQ0FBQyxDQUFDUyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLFNBRlo7QUFHRSxZQUFJLEVBQUMsT0FIUDtBQUlFLG1CQUFXLEVBQUMsT0FKZDtBQUtFLGdCQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGLGVBaUJFO0FBQ0UsaUJBQVMsRUFBRXhCLGdGQURiO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ2MsQ0FBRDtBQUFBLGlCQUFPTixXQUFXLENBQUNNLENBQUMsQ0FBQ1MsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsU0FGWjtBQUdFLFlBQUksRUFBQyxVQUhQO0FBSUUsbUJBQVcsRUFBQyxVQUpkO0FBS0UsaUJBQVMsRUFBQyxHQUxaO0FBTUUsaUJBQVMsRUFBQyxJQU5aO0FBT0UsZ0JBQVE7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGLGVBMEJFO0FBQ0UsaUJBQVMsRUFBRXhCLGdGQURiO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ2MsQ0FBRDtBQUFBLGlCQUFPSixrQkFBa0IsQ0FBQ0ksQ0FBQyxDQUFDUyxNQUFGLENBQVNDLEtBQVYsQ0FBekI7QUFBQSxTQUZaO0FBR0UsWUFBSSxFQUFDLFVBSFA7QUFJRSxtQkFBVyxFQUFDLGtCQUpkO0FBS0UsaUJBQVMsRUFBQyxHQUxaO0FBTUUsaUJBQVMsRUFBQyxJQU5aO0FBT0UsZ0JBQVE7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMUJGLGVBbUNFLDhEQUFDLDZEQUFEO0FBQWMsZUFBTyxFQUFDLFVBQXRCO0FBQWlDLGFBQUssRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkNGLGVBb0NFO0FBQU0saUJBQVMsRUFBRWIsTUFBTSxHQUFHWiw0RUFBSCxHQUE0QixFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStDRCxDQXBFRDs7R0FBTUU7VUFDV0w7OztBQXFFakIsK0RBQWVLLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWdudXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNpbmdsZUJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpbmdsZUJ1dHRvbic7XHJcbmltcG9ydCBpbmRleFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSW5kZXgubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBlcnJvclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvRXJyb3IubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBjb21wb25lblN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IHNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRDb25maXJtLCBzZXRQYXNzd29yZENvbmZpcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFwYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgcmV0dXJuIHNldEFjdGl2ZSgob2xkU3RhdGUpID0+ICFvbGRTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVyLnB1c2goJy9wb3N0cycpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aW5kZXhTdHlsZXMubXliYWNrZ3JvdW5kfWB9PlxyXG4gICAgICA8aDEgc3R5bGU9e3sgY29sb3I6ICcjMDAwJyB9fSBjbGFzc05hbWU9e2luZGV4U3R5bGVzLmhlYWRpbmd9PlxyXG4gICAgICAgIFN0b3J5dGVsbFxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2luZGV4U3R5bGVzLmZsZXhDZW50ZXJ9IG9uU3VibWl0PXtzdWJtaXR9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lblN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnXHJcbiAgICAgICAgICBtaW5MZW5ndGg9JzQnXHJcbiAgICAgICAgICBtYXhMZW5ndGg9JzE0J1xyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lblN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lblN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xyXG4gICAgICAgICAgbWluTGVuZ3RoPSc4J1xyXG4gICAgICAgICAgbWF4TGVuZ3RoPScyMCdcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW5TdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZENvbmZpcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQgY29uZmlybSdcclxuICAgICAgICAgIG1pbkxlbmd0aD0nOCdcclxuICAgICAgICAgIG1heExlbmd0aD0nMjAnXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNpbmdsZUJ1dHRvbiBjb250ZW50PSdSZWdpc3RlcicgY29sb3I9J3JlZEJ1dHRvbicgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2FjdGl2ZSA/IGVycm9yU3R5bGVzLmVyck1lc3NhZ2UgOiAnJ30+XHJcbiAgICAgICAgICBQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lnbnVwO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJTaW5nbGVCdXR0b24iLCJpbmRleFN0eWxlcyIsImVycm9yU3R5bGVzIiwiY29tcG9uZW5TdHlsZXMiLCJzaWdudXAiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm0iLCJzZXRQYXNzd29yZENvbmZpcm0iLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJvbGRTdGF0ZSIsInB1c2giLCJteWJhY2tncm91bmQiLCJjb2xvciIsImhlYWRpbmciLCJmbGV4Q2VudGVyIiwidGV4dElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJlcnJNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==