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

  var submit = function submit(e) {
    e.preventDefault();

    if (!username || !email || !password || !passwordConfirm) {
      return;
    }

    if (password !== passwordConfirm) {
      return;
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
      lineNumber: 29,
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
        lineNumber: 33,
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
        lineNumber: 42,
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
        lineNumber: 49,
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
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_SingleButton__WEBPACK_IMPORTED_MODULE_2__.default, {
        content: "Register",
        color: "redButton"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        children: "Please confirm your password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(signup, "xD/BgexvychMDCte6pIjqd+y11I=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9zaWdudXAuOGY3OGEyZjUzMmYyZmY2NmIwMmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUF4Qjs7QUFDQSxrQkFBZ0NELCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9PLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTBCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPUyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBZ0NWLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9XLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQThDWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQSxNQUFPYSxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxDQUFELEVBQU87QUFDcEJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFFQSxRQUFJLENBQUNWLFFBQUQsSUFBYSxDQUFDRSxLQUFkLElBQXVCLENBQUNFLFFBQXhCLElBQW9DLENBQUNFLGVBQXpDLEVBQTBEO0FBQ3hEO0FBQ0Q7O0FBQ0QsUUFBSUYsUUFBUSxLQUFLRSxlQUFqQixFQUFrQztBQUNoQztBQUNEOztBQUVEUCxJQUFBQSxNQUFNLENBQUNZLElBQVAsQ0FBWSxRQUFaO0FBQ0QsR0FYRDs7QUFhQSxzQkFDRTtBQUFLLGFBQVMsWUFBS2YsOEVBQUwsQ0FBZDtBQUFBLDRCQUNFO0FBQUksV0FBSyxFQUFFO0FBQUVpQixRQUFBQSxLQUFLLEVBQUU7QUFBVCxPQUFYO0FBQThCLGVBQVMsRUFBRWpCLHlFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBTSxlQUFTLEVBQUVBLDRFQUFqQjtBQUF5QyxjQUFRLEVBQUVZLE1BQW5EO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxFQUFFWCxnRkFEYjtBQUVFLGdCQUFRLEVBQUUsa0JBQUNZLENBQUQ7QUFBQSxpQkFBT1IsV0FBVyxDQUFDUSxDQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLFNBRlo7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLG1CQUFXLEVBQUMsVUFKZDtBQUtFLGlCQUFTLEVBQUMsR0FMWjtBQU1FLGlCQUFTLEVBQUMsSUFOWjtBQU9FLGdCQUFRO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBVUU7QUFDRSxpQkFBUyxFQUFFckIsZ0ZBRGI7QUFFRSxnQkFBUSxFQUFFLGtCQUFDWSxDQUFEO0FBQUEsaUJBQU9OLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLFNBRlo7QUFHRSxZQUFJLEVBQUMsT0FIUDtBQUlFLG1CQUFXLEVBQUMsT0FKZDtBQUtFLGdCQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGLGVBaUJFO0FBQ0UsaUJBQVMsRUFBRXJCLGdGQURiO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ1ksQ0FBRDtBQUFBLGlCQUFPSixXQUFXLENBQUNJLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsU0FGWjtBQUdFLFlBQUksRUFBQyxVQUhQO0FBSUUsbUJBQVcsRUFBQyxVQUpkO0FBS0UsaUJBQVMsRUFBQyxHQUxaO0FBTUUsaUJBQVMsRUFBQyxJQU5aO0FBT0UsZ0JBQVE7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGLGVBMEJFO0FBQ0UsaUJBQVMsRUFBRXJCLGdGQURiO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ1ksQ0FBRDtBQUFBLGlCQUFPRixrQkFBa0IsQ0FBQ0UsQ0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVYsQ0FBekI7QUFBQSxTQUZaO0FBR0UsWUFBSSxFQUFDLFVBSFA7QUFJRSxtQkFBVyxFQUFDLGtCQUpkO0FBS0UsaUJBQVMsRUFBQyxHQUxaO0FBTUUsaUJBQVMsRUFBQyxJQU5aO0FBT0UsZ0JBQVE7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMUJGLGVBbUNFLDhEQUFDLDZEQUFEO0FBQWMsZUFBTyxFQUFDLFVBQXRCO0FBQWlDLGFBQUssRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkNGLGVBb0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkNELENBakVEOztHQUFNcEI7VUFDV0o7OztBQWtFakIsK0RBQWVJLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWdudXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNpbmdsZUJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpbmdsZUJ1dHRvbic7XHJcbmltcG9ydCBpbmRleFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSW5kZXgubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBjb21wb25lblN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IHNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRDb25maXJtLCBzZXRQYXNzd29yZENvbmZpcm1dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghdXNlcm5hbWUgfHwgIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhcGFzc3dvcmRDb25maXJtKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDb25maXJtKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXIucHVzaCgnL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpbmRleFN0eWxlcy5teWJhY2tncm91bmR9YH0+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJyMwMDAnIH19IGNsYXNzTmFtZT17aW5kZXhTdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgU3Rvcnl0ZWxsXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17aW5kZXhTdHlsZXMuZmxleENlbnRlcn0gb25TdWJtaXQ9e3N1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZSdcclxuICAgICAgICAgIG1pbkxlbmd0aD0nNCdcclxuICAgICAgICAgIG1heExlbmd0aD0nMTQnXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXHJcbiAgICAgICAgICBtaW5MZW5ndGg9JzgnXHJcbiAgICAgICAgICBtYXhMZW5ndGg9JzIwJ1xyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lblN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkQ29uZmlybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCBjb25maXJtJ1xyXG4gICAgICAgICAgbWluTGVuZ3RoPSc4J1xyXG4gICAgICAgICAgbWF4TGVuZ3RoPScyMCdcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2luZ2xlQnV0dG9uIGNvbnRlbnQ9J1JlZ2lzdGVyJyBjb2xvcj0ncmVkQnV0dG9uJyAvPlxyXG4gICAgICAgIDxzcGFuPlBsZWFzZSBjb25maXJtIHlvdXIgcGFzc3dvcmQ8L3NwYW4+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWdudXA7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlNpbmdsZUJ1dHRvbiIsImluZGV4U3R5bGVzIiwiY29tcG9uZW5TdHlsZXMiLCJzaWdudXAiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm0iLCJzZXRQYXNzd29yZENvbmZpcm0iLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwibXliYWNrZ3JvdW5kIiwiY29sb3IiLCJoZWFkaW5nIiwiZmxleENlbnRlciIsInRleHRJbnB1dCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==