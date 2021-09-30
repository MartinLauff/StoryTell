"use strict";
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/TopBar.js":
/*!******************************!*\
  !*** ./components/TopBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalCtx */ "./context/GlobalCtx.js");
/* harmony import */ var _styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Bar.module.css */ "./styles/Bar.module.css");
/* harmony import */ var _styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icons_LogoIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/LogoIcon */ "./components/Icons/LogoIcon.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\TopBar.js",
    _this = undefined,
    _s = $RefreshSig$();








var TopBar = function TopBar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      active = _useState[0],
      setActive = _useState[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__.GlobalContext),
      sidebar = _useContext.sidebar,
      setSidebar = _useContext.setSidebar;

  var onClick = function onClick() {
    setActive(true);
    setSidebar(true);
  };

  var layerOff = function layerOff() {
    setActive(false);
    setSidebar(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "".concat((_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default().bar), " ").concat((_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default().between)),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/posts",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        style: {
          height: '3.2rem'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Icons_LogoIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
      children: "Storytell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      onClick: onClick,
      className: "".concat((_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default().circle), " ").concat(active ? (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default().circleRotate) : ''),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default().groupDots),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      onClick: layerOff,
      className: "".concat(sidebar ? (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default().layer) : (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_5___default().hide))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(TopBar, "nwN8lO6qUeuqF3sku1dg8HeY2aA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuN2FjYWQxOWZkY2I5ZWI3YTEyYzUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU0sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixrQkFBNEJMLCtDQUFRLENBQUMsS0FBRCxDQUFwQztBQUFBLE1BQU9NLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG9CQUFnQ04saURBQVUsQ0FBQ0MsNkRBQUQsQ0FBMUM7QUFBQSxNQUFRTSxPQUFSLGVBQVFBLE9BQVI7QUFBQSxNQUFpQkMsVUFBakIsZUFBaUJBLFVBQWpCOztBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJILElBQUFBLFNBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUUsSUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBSEQ7O0FBSUEsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkosSUFBQUEsU0FBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBRSxJQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFLLGFBQVMsWUFBS04sbUVBQUwsY0FBc0JBLHVFQUF0QixDQUFkO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsUUFBWDtBQUFBLDZCQUNFO0FBQUcsYUFBSyxFQUFFO0FBQUVXLFVBQUFBLE1BQU0sRUFBRTtBQUFWLFNBQVY7QUFBQSwrQkFDRSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRTtBQUNFLGFBQU8sRUFBRUosT0FEWDtBQUVFLGVBQVMsWUFBS1Asc0VBQUwsY0FDUEcsTUFBTSxHQUFHSCw0RUFBSCxHQUE0QixFQUQzQixDQUZYO0FBQUEsNkJBTUU7QUFBSyxpQkFBUyxFQUFFQSx5RUFBaEI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQW9CRTtBQUNFLGFBQU8sRUFBRVEsUUFEWDtBQUVFLGVBQVMsWUFBS0gsT0FBTyxHQUFHTCxxRUFBSCxHQUFxQkEsb0VBQWpDO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQXZDRDs7R0FBTUU7O0tBQUFBO0FBd0NOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wQmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDdHgnO1xyXG5pbXBvcnQgQmFyU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9CYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMb2dvSWNvbiBmcm9tICcuL0ljb25zL0xvZ29JY29uJztcclxuXHJcbmNvbnN0IFRvcEJhciA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgc2lkZWJhciwgc2V0U2lkZWJhciB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgc2V0U2lkZWJhcih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGxheWVyT2ZmID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgIHNldFNpZGViYXIoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7QmFyU3R5bGVzLmJhcn0gJHtCYXJTdHlsZXMuYmV0d2Vlbn1gfT5cclxuICAgICAgPExpbmsgaHJlZj0nL3Bvc3RzJz5cclxuICAgICAgICA8YSBzdHlsZT17eyBoZWlnaHQ6ICczLjJyZW0nIH19PlxyXG4gICAgICAgICAgPExvZ29JY29uIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxoMj5TdG9yeXRlbGw8L2gyPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICBjbGFzc05hbWU9e2Ake0JhclN0eWxlcy5jaXJjbGV9ICR7XHJcbiAgICAgICAgICBhY3RpdmUgPyBCYXJTdHlsZXMuY2lyY2xlUm90YXRlIDogJydcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtCYXJTdHlsZXMuZ3JvdXBEb3RzfT5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgb25DbGljaz17bGF5ZXJPZmZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzaWRlYmFyID8gQmFyU3R5bGVzLmxheWVyIDogQmFyU3R5bGVzLmhpZGV9YH1cclxuICAgICAgPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJCYXJTdHlsZXMiLCJMb2dvSWNvbiIsIlRvcEJhciIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNpZGViYXIiLCJzZXRTaWRlYmFyIiwib25DbGljayIsImxheWVyT2ZmIiwiYmFyIiwiYmV0d2VlbiIsImhlaWdodCIsImNpcmNsZSIsImNpcmNsZVJvdGF0ZSIsImdyb3VwRG90cyIsImxheWVyIiwiaGlkZSJdLCJzb3VyY2VSb290IjoiIn0=