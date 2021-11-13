"use strict";
self["webpackHotUpdate_N_E"]("pages/posts/[...postId]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvWy4uLnBvc3RJZF0uNjYwMTIyZTU2YjNmOTA1ODlhZmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUMvQixrQkFBNEJILCtDQUFRLENBQUMsS0FBRCxDQUFwQztBQUFBLE1BQU9JLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG9CQUE4QkosMkRBQVUsQ0FBQztBQUN2Q0ssSUFBQUEsR0FBRyw4Q0FBdUNILE1BQXZDLFVBRG9DO0FBRXZDSSxJQUFBQSxNQUFNLEVBQUUsS0FGK0I7QUFHdkNDLElBQUFBLElBQUksRUFBRTtBQUhpQyxHQUFELENBQXhDO0FBQUEsTUFBUUMsU0FBUixlQUFRQSxTQUFSO0FBQUEsTUFBbUJDLE1BQW5CLGVBQW1CQSxNQUFuQjs7QUFNQSxNQUFNQyxPQUFPO0FBQUEsOFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1JGLFNBQVMsRUFERDs7QUFBQTtBQUVkSixjQUFBQSxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFUOztBQUZjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBPLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUFLQSxzQkFDRSw4REFBQywyQ0FBRDtBQUFBLDJCQUNFO0FBQ0UsYUFBTyxFQUFFQSxPQURYO0FBRUUsV0FBSyxFQUFDLElBRlI7QUFHRSxZQUFNLEVBQUMsSUFIVDtBQUlFLGFBQU8sRUFBQyxXQUpWO0FBS0UsVUFBSSxFQUFDLE1BTFA7QUFNRSxXQUFLLEVBQUMsNEJBTlI7QUFBQSw4QkFRRTtBQUNFLFNBQUMsRUFBQyxpQ0FESjtBQUVFLGNBQU0sRUFBRVAsTUFBTSxHQUFHLFNBQUgsR0FBZSxTQUYvQjtBQUdFLG1CQUFXLEVBQUMsR0FIZDtBQUlFLHFCQUFhLEVBQUMsT0FKaEI7QUFLRSxzQkFBYyxFQUFDO0FBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQWVFO0FBQ0UsU0FBQyxFQUFDLCtCQURKO0FBRUUsY0FBTSxFQUFFQSxNQUFNLEdBQUcsU0FBSCxHQUFlLFNBRi9CO0FBR0UsbUJBQVcsRUFBQyxHQUhkO0FBSUUscUJBQWEsRUFBQyxPQUpoQjtBQUtFLHNCQUFjLEVBQUM7QUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQXhDRDs7R0FBTUY7VUFFMEJEOzs7S0FGMUJDO0FBMENOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSWNvbnMvTGlrZUljb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVxdWVzdCc7XHJcblxyXG5jb25zdCBMaWtlSWNvbiA9ICh7IHBvc3RJRCB9KSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGRvUmVxdWVzdCwgZXJyb3JzIH0gPSB1c2VSZXF1ZXN0KHtcclxuICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXB2b3Rlcy8ke3Bvc3RJRH0vbGlrZWAsXHJcbiAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgYm9keToge30sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkb1JlcXVlc3QoKTtcclxuICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICB3aWR0aD0nMTgnXHJcbiAgICAgICAgaGVpZ2h0PScxNydcclxuICAgICAgICB2aWV3Qm94PScwIDAgMTggMTcnXHJcbiAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD0nTTEgOC4xNzk4M0w5IDEuMTkwNjJMMTcgOC4xNzk4MydcclxuICAgICAgICAgIHN0cm9rZT17YWN0aXZlID8gJyM1OUJBQjcnIDogJyM4NzhBOEMnfVxyXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9JzInXHJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPSdNMSAxNS4xNjlMOSA4LjE3OTgyTDE3IDE1LjE2OSdcclxuICAgICAgICAgIHN0cm9rZT17YWN0aXZlID8gJyM1OUJBQjcnIDogJyM4NzhBOEMnfVxyXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9JzInXHJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpa2VJY29uO1xyXG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsInVzZVJlcXVlc3QiLCJMaWtlSWNvbiIsInBvc3RJRCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJkb1JlcXVlc3QiLCJlcnJvcnMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==