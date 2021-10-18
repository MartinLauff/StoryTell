"use strict";
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/bars/Layer.js":
/*!**********************************!*\
  !*** ./components/bars/Layer.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GlobalCtx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/GlobalCtx */ "./context/GlobalCtx.js");
/* harmony import */ var _styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Bar.module.css */ "./styles/Bar.module.css");
/* harmony import */ var _styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\bars\\Layer.js",
    _this = undefined,
    _s = $RefreshSig$();







var Layer = function Layer() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GlobalCtx__WEBPACK_IMPORTED_MODULE_1__.GlobalContext),
      sidebar = _useContext.sidebar,
      setSidebar = _useContext.setSidebar;

  var layerOff = function layerOff() {
    setActive(false);
    setSidebar(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      onClick: layerOff,
      className: "".concat(sidebar ? (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_3___default().layer) : (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_3___default().hide))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Layer, "EI3IcB8ZmOnQ8oqy6R8njqhcf9I=");

_c = Layer;
/* harmony default export */ __webpack_exports__["default"] = (Layer);

var _c;

$RefreshReg$(_c, "Layer");

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


/***/ }),

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var _components_bars_TopBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/bars/TopBar */ "./components/bars/TopBar.js");
/* harmony import */ var _components_bars_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/bars/SideBar */ "./components/bars/SideBar.js");
/* harmony import */ var _components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/bars/BottomBar */ "./components/bars/BottomBar.js");
/* harmony import */ var _components_bars_Layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/bars/Layer */ "./components/bars/Layer.js");
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostList */ "./components/PostList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\posts\\index.js",
    _this = undefined;








var LatestPosts = function LatestPosts(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_bars_TopBar__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_bars_SideBar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_bars_Layer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h2", {
      style: {
        margin: '1rem 0 0 4rem'
      },
      children: "Latest posts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_PostList__WEBPACK_IMPORTED_MODULE_4__.default, {
      posts: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = LatestPosts;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (LatestPosts);

var _c;

$RefreshReg$(_c, "LatestPosts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuZGY3OGJkM2U0ZWU3ZDhlYTZhZmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixvQkFBZ0NILGlEQUFVLENBQUNDLDZEQUFELENBQTFDO0FBQUEsTUFBUUcsT0FBUixlQUFRQSxPQUFSO0FBQUEsTUFBaUJDLFVBQWpCLGVBQWlCQSxVQUFqQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCQyxJQUFBQSxTQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0FGLElBQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQUEsMkJBQ0U7QUFDRSxhQUFPLEVBQUVDLFFBRFg7QUFFRSxlQUFTLFlBQUtGLE9BQU8sR0FBR0YscUVBQUgsR0FBcUJBLG9FQUFqQztBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVFELENBZkQ7O0dBQU1DOztLQUFBQTtBQWlCTiwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNVyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2hDLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBSSxXQUFLLEVBQUU7QUFBRUMsUUFBQUEsTUFBTSxFQUFFO0FBQVYsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UsOERBQUMseURBQUQ7QUFBVSxXQUFLLEVBQUVEO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWEQ7O0tBQU1EOztBQXdCTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JhcnMvTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L0dsb2JhbEN0eCc7XHJcbmltcG9ydCBCYXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Jhci5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IExheWVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2lkZWJhciwgc2V0U2lkZWJhciB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBsYXllck9mZiA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICBzZXRTaWRlYmFyKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIG9uQ2xpY2s9e2xheWVyT2ZmfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c2lkZWJhciA/IEJhclN0eWxlcy5sYXllciA6IEJhclN0eWxlcy5oaWRlfWB9XHJcbiAgICAgID48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXllcjtcclxuIiwiaW1wb3J0IFRvcEJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhcnMvVG9wQmFyJztcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL1NpZGVCYXInO1xyXG5pbXBvcnQgQm90dG9tQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFycy9Cb3R0b21CYXInO1xyXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL0xheWVyJztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdExpc3QnO1xyXG5pbXBvcnQgYnVpbGRDbGllbnQgZnJvbSAnLi4vLi4vYXBpL2J1aWxkLWNsaWVudCc7XHJcblxyXG5jb25zdCBMYXRlc3RQb3N0cyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8VG9wQmFyIC8+XHJcbiAgICAgIDxTaWRlQmFyIC8+XHJcbiAgICAgIDxMYXllciAvPlxyXG4gICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luOiAnMXJlbSAwIDAgNHJlbScgfX0+TGF0ZXN0IHBvc3RzPC9oMj5cclxuICAgICAgPFBvc3RMaXN0IHBvc3RzPXtkYXRhfSAvPlxyXG4gICAgICA8Qm90dG9tQmFyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChjdHgpO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldCgnL2FwaS9wb3N0cy8nKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXRlc3RQb3N0cztcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwiQmFyU3R5bGVzIiwiTGF5ZXIiLCJzaWRlYmFyIiwic2V0U2lkZWJhciIsImxheWVyT2ZmIiwic2V0QWN0aXZlIiwibGF5ZXIiLCJoaWRlIiwiVG9wQmFyIiwiU2lkZUJhciIsIkJvdHRvbUJhciIsIlBvc3RMaXN0IiwiTGF0ZXN0UG9zdHMiLCJkYXRhIiwibWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==