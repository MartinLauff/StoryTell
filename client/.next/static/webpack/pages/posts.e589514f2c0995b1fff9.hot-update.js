"use strict";
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/bars/TopBar.js":
/*!***********************************!*\
  !*** ./components/bars/TopBar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/GlobalCtx */ "./context/GlobalCtx.js");
/* harmony import */ var _styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Bar.module.css */ "./styles/Bar.module.css");
/* harmony import */ var _styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icons_LogoIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/LogoIcon */ "./components/Icons/LogoIcon.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\bars\\TopBar.js",
    _this = undefined,
    _s = $RefreshSig$();








var TopBar = function TopBar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      active = _useState[0],
      setActive = _useState[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__.GlobalContext),
      setSidebar = _useContext.setSidebar;

  var onClick = function onClick() {
    setActive(true);
    setSidebar(true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "".concat((_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default().bar), " ").concat((_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default().topBar)),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/posts",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        style: {
          height: '3.2rem'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Icons_LogoIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
      children: "Storytell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      onClick: onClick,
      className: "".concat((_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default().circle), " ").concat(active ? (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default().circleRotate) : ''),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default().groupDots),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(TopBar, "XTmje2zzfhvxjSUUVt0c1fWsQCk=");

_c = TopBar;
/* harmony default export */ __webpack_exports__["default"] = (TopBar);

var _c;

$RefreshReg$(_c, "TopBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuZTU4OTUxNGYyYzA5OTViMWZmZjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU0sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixrQkFBNEJMLCtDQUFRLENBQUMsS0FBRCxDQUFwQztBQUFBLE1BQU9NLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG9CQUF1Qk4saURBQVUsQ0FBQ0MsNkRBQUQsQ0FBakM7QUFBQSxNQUFRTSxVQUFSLGVBQVFBLFVBQVI7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkYsSUFBQUEsU0FBUyxDQUFDLElBQUQsQ0FBVDtBQUNBQyxJQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFLLGFBQVMsWUFBS0wsbUVBQUwsY0FBc0JBLHNFQUF0QixDQUFkO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsUUFBWDtBQUFBLDZCQUNFO0FBQUcsYUFBSyxFQUFFO0FBQUVTLFVBQUFBLE1BQU0sRUFBRTtBQUFWLFNBQVY7QUFBQSwrQkFDRSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRTtBQUNFLGFBQU8sRUFBRUgsT0FEWDtBQUVFLGVBQVMsWUFBS04sc0VBQUwsY0FDUEcsTUFBTSxHQUFHSCw0RUFBSCxHQUE0QixFQUQzQixDQUZYO0FBQUEsNkJBTUU7QUFBSyxpQkFBUyxFQUFFQSx5RUFBaEI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQS9CRDs7R0FBTUU7O0tBQUFBO0FBZ0NOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmFycy9Ub3BCYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L0dsb2JhbEN0eCc7XHJcbmltcG9ydCBCYXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Jhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExvZ29JY29uIGZyb20gJy4uL0ljb25zL0xvZ29JY29uJztcclxuXHJcbmNvbnN0IFRvcEJhciA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgc2V0U2lkZWJhciB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgc2V0U2lkZWJhcih0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake0JhclN0eWxlcy5iYXJ9ICR7QmFyU3R5bGVzLnRvcEJhcn1gfT5cclxuICAgICAgPExpbmsgaHJlZj0nL3Bvc3RzJz5cclxuICAgICAgICA8YSBzdHlsZT17eyBoZWlnaHQ6ICczLjJyZW0nIH19PlxyXG4gICAgICAgICAgPExvZ29JY29uIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxoMj5TdG9yeXRlbGw8L2gyPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICBjbGFzc05hbWU9e2Ake0JhclN0eWxlcy5jaXJjbGV9ICR7XHJcbiAgICAgICAgICBhY3RpdmUgPyBCYXJTdHlsZXMuY2lyY2xlUm90YXRlIDogJydcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtCYXJTdHlsZXMuZ3JvdXBEb3RzfT5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJCYXJTdHlsZXMiLCJMb2dvSWNvbiIsIlRvcEJhciIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNldFNpZGViYXIiLCJvbkNsaWNrIiwiYmFyIiwidG9wQmFyIiwiaGVpZ2h0IiwiY2lyY2xlIiwiY2lyY2xlUm90YXRlIiwiZ3JvdXBEb3RzIl0sInNvdXJjZVJvb3QiOiIifQ==