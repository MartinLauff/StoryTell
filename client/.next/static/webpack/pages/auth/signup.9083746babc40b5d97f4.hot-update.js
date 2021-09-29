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
      return setActive(true);
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        style: {
          color: '#ff0000'
        },
        className: !active ? (_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6___default().hide) : '',
        children: "Please confirm your password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_SingleButton__WEBPACK_IMPORTED_MODULE_2__.default, {
        content: "Register",
        color: "redButton"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9zaWdudXAuOTA4Mzc0NmJhYmM0MGI1ZDk3ZjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBeEI7O0FBQ0Esa0JBQWdDRCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPUSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUEwQlQsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT1UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWdDWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPWSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE4Q2IsK0NBQVEsQ0FBQyxFQUFELENBQXREO0FBQUEsTUFBT2MsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQTRCZiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPZ0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSSxDQUFDWixRQUFELElBQWEsQ0FBQ0UsS0FBZCxJQUF1QixDQUFDRSxRQUF4QixJQUFvQyxDQUFDRSxlQUF6QyxFQUEwRDtBQUN4RDtBQUNEOztBQUNELFFBQUlGLFFBQVEsS0FBS0UsZUFBakIsRUFBa0M7QUFDaEMsYUFBT0csU0FBUyxDQUFDLElBQUQsQ0FBaEI7QUFDRDs7QUFFRFYsSUFBQUEsTUFBTSxDQUFDYyxJQUFQLENBQVksUUFBWjtBQUNELEdBWEQ7O0FBYUEsc0JBQ0U7QUFBSyxhQUFTLFlBQUtsQiw4RUFBTCxDQUFkO0FBQUEsNEJBQ0U7QUFBSSxXQUFLLEVBQUU7QUFBRW9CLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BQVg7QUFBOEIsZUFBUyxFQUFFcEIseUVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFNLGVBQVMsRUFBRUEsNEVBQWpCO0FBQXlDLGNBQVEsRUFBRWUsTUFBbkQ7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUViLGdGQURiO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ2MsQ0FBRDtBQUFBLGlCQUFPVixXQUFXLENBQUNVLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsU0FGWjtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsbUJBQVcsRUFBQyxVQUpkO0FBS0UsaUJBQVMsRUFBQyxHQUxaO0FBTUUsaUJBQVMsRUFBQyxJQU5aO0FBT0UsZ0JBQVE7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRTtBQUNFLGlCQUFTLEVBQUV2QixnRkFEYjtBQUVFLGdCQUFRLEVBQUUsa0JBQUNjLENBQUQ7QUFBQSxpQkFBT1IsUUFBUSxDQUFDUSxDQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsU0FGWjtBQUdFLFlBQUksRUFBQyxPQUhQO0FBSUUsbUJBQVcsRUFBQyxPQUpkO0FBS0UsZ0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFpQkU7QUFDRSxpQkFBUyxFQUFFdkIsZ0ZBRGI7QUFFRSxnQkFBUSxFQUFFLGtCQUFDYyxDQUFEO0FBQUEsaUJBQU9OLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxTQUZaO0FBR0UsWUFBSSxFQUFDLFVBSFA7QUFJRSxtQkFBVyxFQUFDLFVBSmQ7QUFLRSxpQkFBUyxFQUFDLEdBTFo7QUFNRSxpQkFBUyxFQUFDLElBTlo7QUFPRSxnQkFBUTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkYsZUEwQkU7QUFDRSxpQkFBUyxFQUFFdkIsZ0ZBRGI7QUFFRSxnQkFBUSxFQUFFLGtCQUFDYyxDQUFEO0FBQUEsaUJBQU9KLGtCQUFrQixDQUFDSSxDQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVixDQUF6QjtBQUFBLFNBRlo7QUFHRSxZQUFJLEVBQUMsVUFIUDtBQUlFLG1CQUFXLEVBQUMsa0JBSmQ7QUFLRSxpQkFBUyxFQUFDLEdBTFo7QUFNRSxpQkFBUyxFQUFDLElBTlo7QUFPRSxnQkFBUTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQkYsZUFtQ0U7QUFDRSxhQUFLLEVBQUU7QUFBRUwsVUFBQUEsS0FBSyxFQUFFO0FBQVQsU0FEVDtBQUVFLGlCQUFTLEVBQUUsQ0FBQ1AsTUFBRCxHQUFVWixzRUFBVixHQUE2QixFQUYxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DRixlQXlDRSw4REFBQyw2REFBRDtBQUFjLGVBQU8sRUFBQyxVQUF0QjtBQUFpQyxhQUFLLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtERCxDQXZFRDs7R0FBTUU7VUFDV0w7OztBQXdFakIsK0RBQWVLLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWdudXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNpbmdsZUJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpbmdsZUJ1dHRvbic7XHJcbmltcG9ydCBpbmRleFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSW5kZXgubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBlcnJvclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvRXJyb3IubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBjb21wb25lblN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IHNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRDb25maXJtLCBzZXRQYXNzd29yZENvbmZpcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFwYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgcmV0dXJuIHNldEFjdGl2ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXIucHVzaCgnL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpbmRleFN0eWxlcy5teWJhY2tncm91bmR9YH0+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJyMwMDAnIH19IGNsYXNzTmFtZT17aW5kZXhTdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgU3Rvcnl0ZWxsXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17aW5kZXhTdHlsZXMuZmxleENlbnRlcn0gb25TdWJtaXQ9e3N1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZSdcclxuICAgICAgICAgIG1pbkxlbmd0aD0nNCdcclxuICAgICAgICAgIG1heExlbmd0aD0nMTQnXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVuU3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXHJcbiAgICAgICAgICBtaW5MZW5ndGg9JzgnXHJcbiAgICAgICAgICBtYXhMZW5ndGg9JzIwJ1xyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lblN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkQ29uZmlybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCBjb25maXJtJ1xyXG4gICAgICAgICAgbWluTGVuZ3RoPSc4J1xyXG4gICAgICAgICAgbWF4TGVuZ3RoPScyMCdcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmYwMDAwJyB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXshYWN0aXZlID8gZXJyb3JTdHlsZXMuaGlkZSA6ICcnfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFBsZWFzZSBjb25maXJtIHlvdXIgcGFzc3dvcmRcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPFNpbmdsZUJ1dHRvbiBjb250ZW50PSdSZWdpc3RlcicgY29sb3I9J3JlZEJ1dHRvbicgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ251cDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiU2luZ2xlQnV0dG9uIiwiaW5kZXhTdHlsZXMiLCJlcnJvclN0eWxlcyIsImNvbXBvbmVuU3R5bGVzIiwic2lnbnVwIiwicm91dGVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtIiwic2V0UGFzc3dvcmRDb25maXJtIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsIm15YmFja2dyb3VuZCIsImNvbG9yIiwiaGVhZGluZyIsImZsZXhDZW50ZXIiLCJ0ZXh0SW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhpZGUiXSwic291cmNlUm9vdCI6IiJ9