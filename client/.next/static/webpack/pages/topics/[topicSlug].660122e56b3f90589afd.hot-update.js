"use strict";
self["webpackHotUpdate_N_E"]("pages/topics/[topicSlug]",{

/***/ "./components/Icons/LikeIcon.js":
/*!**************************************!*\
  !*** ./components/Icons/LikeIcon.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ "./hooks/use-request.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\Icons\\LikeIcon.js",
    _this = undefined,
    _s = $RefreshSig$();






var LikeIcon = function LikeIcon(_ref) {
  _s();

  var postID = _ref.postID;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      active = _useState[0],
      setActive = _useState[1];

  var _useRequest = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__.default)({
    url: "http://localhost:8000/api/upvotes/".concat(postID, "/like"),
    method: 'put',
    body: {}
  }),
      doRequest = _useRequest.doRequest,
      errors = _useRequest.errors;

  var onClick = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return doRequest();

            case 2:
              setActive(!active);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("svg", {
      onClick: onClick,
      width: "18",
      height: "17",
      viewBox: "0 0 18 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("path", {
        d: "M1 8.17983L9 1.19062L17 8.17983",
        stroke: active ? '#59BAB7' : '#878A8C',
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("path", {
        d: "M1 15.169L9 8.17982L17 15.169",
        stroke: active ? '#59BAB7' : '#878A8C',
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_s(LikeIcon, "rcoosvFXuUkYt6nPWbWg8beQ5Ts=", false, function () {
  return [_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = LikeIcon;
/* harmony default export */ __webpack_exports__["default"] = (LikeIcon);

var _c;

$RefreshReg$(_c, "LikeIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9waWNzL1t0b3BpY1NsdWddLjY2MDEyMmU1NmIzZjkwNTg5YWZkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDL0Isa0JBQTRCSCwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPSSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxvQkFBOEJKLDJEQUFVLENBQUM7QUFDdkNLLElBQUFBLEdBQUcsOENBQXVDSCxNQUF2QyxVQURvQztBQUV2Q0ksSUFBQUEsTUFBTSxFQUFFLEtBRitCO0FBR3ZDQyxJQUFBQSxJQUFJLEVBQUU7QUFIaUMsR0FBRCxDQUF4QztBQUFBLE1BQVFDLFNBQVIsZUFBUUEsU0FBUjtBQUFBLE1BQW1CQyxNQUFuQixlQUFtQkEsTUFBbkI7O0FBTUEsTUFBTUMsT0FBTztBQUFBLDhTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNSRixTQUFTLEVBREQ7O0FBQUE7QUFFZEosY0FBQUEsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDs7QUFGYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQTyxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBS0Esc0JBQ0UsOERBQUMsMkNBQUQ7QUFBQSwyQkFDRTtBQUNFLGFBQU8sRUFBRUEsT0FEWDtBQUVFLFdBQUssRUFBQyxJQUZSO0FBR0UsWUFBTSxFQUFDLElBSFQ7QUFJRSxhQUFPLEVBQUMsV0FKVjtBQUtFLFVBQUksRUFBQyxNQUxQO0FBTUUsV0FBSyxFQUFDLDRCQU5SO0FBQUEsOEJBUUU7QUFDRSxTQUFDLEVBQUMsaUNBREo7QUFFRSxjQUFNLEVBQUVQLE1BQU0sR0FBRyxTQUFILEdBQWUsU0FGL0I7QUFHRSxtQkFBVyxFQUFDLEdBSGQ7QUFJRSxxQkFBYSxFQUFDLE9BSmhCO0FBS0Usc0JBQWMsRUFBQztBQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFlRTtBQUNFLFNBQUMsRUFBQywrQkFESjtBQUVFLGNBQU0sRUFBRUEsTUFBTSxHQUFHLFNBQUgsR0FBZSxTQUYvQjtBQUdFLG1CQUFXLEVBQUMsR0FIZDtBQUlFLHFCQUFhLEVBQUMsT0FKaEI7QUFLRSxzQkFBYyxFQUFDO0FBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0F4Q0Q7O0dBQU1GO1VBRTBCRDs7O0tBRjFCQztBQTBDTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ljb25zL0xpa2VJY29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlcXVlc3QnO1xyXG5cclxuY29uc3QgTGlrZUljb24gPSAoeyBwb3N0SUQgfSkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBkb1JlcXVlc3QsIGVycm9ycyB9ID0gdXNlUmVxdWVzdCh7XHJcbiAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Vwdm90ZXMvJHtwb3N0SUR9L2xpa2VgLFxyXG4gICAgbWV0aG9kOiAncHV0JyxcclxuICAgIGJvZHk6IHt9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZG9SZXF1ZXN0KCk7XHJcbiAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgd2lkdGg9JzE4J1xyXG4gICAgICAgIGhlaWdodD0nMTcnXHJcbiAgICAgICAgdmlld0JveD0nMCAwIDE4IDE3J1xyXG4gICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9J00xIDguMTc5ODNMOSAxLjE5MDYyTDE3IDguMTc5ODMnXHJcbiAgICAgICAgICBzdHJva2U9e2FjdGl2ZSA/ICcjNTlCQUI3JyA6ICcjODc4QThDJ31cclxuICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xyXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD0nTTEgMTUuMTY5TDkgOC4xNzk4MkwxNyAxNS4xNjknXHJcbiAgICAgICAgICBzdHJva2U9e2FjdGl2ZSA/ICcjNTlCQUI3JyA6ICcjODc4QThDJ31cclxuICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xyXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWtlSWNvbjtcclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlU3RhdGUiLCJ1c2VSZXF1ZXN0IiwiTGlrZUljb24iLCJwb3N0SUQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwiZG9SZXF1ZXN0IiwiZXJyb3JzIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=