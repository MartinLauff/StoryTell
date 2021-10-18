"use strict";
self["webpackHotUpdate_N_E"]("pages/auth/signout",{

/***/ "./pages/auth/signout.js":
/*!*******************************!*\
  !*** ./pages/auth/signout.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-request */ "./hooks/use-request.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\auth\\signout.js",
    _this = undefined,
    _s = $RefreshSig$();








var signout = function signout() {
  _s();

  var _useRequest = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__.default)({
    url: 'http://localhost:8000/api/auth/signout',
    method: 'post',
    body: {},
    onSuccess: function onSuccess() {
      return next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
    }
  }),
      doRequest = _useRequest.doRequest;

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)( /*#__PURE__*/(0,C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return doRequest();

          case 2:
            js_cookie__WEBPACK_IMPORTED_MODULE_4__.default.remove('jwt');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  var style = {
    fontSize: '4rem',
    fontWeight: '700',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    style: style,
    children: "Signing you out..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 10
  }, _this);
};

_s(signout, "y7yhtVOv5AJjyRTpqxLuB3CFVeI=", false, function () {
  return [_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__.default];
});

/* harmony default export */ __webpack_exports__["default"] = (signout);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9zaWdub3V0LjE4NWIyMDM1OTM5ZGI1ODc0MjY5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixvQkFBc0JELDJEQUFVLENBQUM7QUFDL0JFLElBQUFBLEdBQUcsRUFBRSx3Q0FEMEI7QUFFL0JDLElBQUFBLE1BQU0sRUFBRSxNQUZ1QjtBQUcvQkMsSUFBQUEsSUFBSSxFQUFFLEVBSHlCO0FBSS9CQyxJQUFBQSxTQUFTLEVBQUU7QUFBQSxhQUFNUCx1REFBQSxDQUFZLEdBQVosQ0FBTjtBQUFBO0FBSm9CLEdBQUQsQ0FBaEM7QUFBQSxNQUFRUyxTQUFSLGVBQVFBLFNBQVI7O0FBT0FWLEVBQUFBLGdEQUFTLDZTQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNGVSxTQUFTLEVBRFA7O0FBQUE7QUFFUlIsWUFBQUEscURBQUEsQ0FBZSxLQUFmOztBQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFHTixFQUhNLENBQVQ7QUFLQSxNQUFNVSxLQUFLLEdBQUc7QUFDWkMsSUFBQUEsUUFBUSxFQUFFLE1BREU7QUFFWkMsSUFBQUEsVUFBVSxFQUFFLEtBRkE7QUFHWkMsSUFBQUEsUUFBUSxFQUFFLFVBSEU7QUFJWkMsSUFBQUEsR0FBRyxFQUFFLEtBSk87QUFLWkMsSUFBQUEsSUFBSSxFQUFFLEtBTE07QUFNWkMsSUFBQUEsU0FBUyxFQUFFO0FBTkMsR0FBZDtBQVNBLHNCQUFPO0FBQUssU0FBSyxFQUFFTixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQXZCRDs7R0FBTVI7VUFDa0JEOzs7QUF1QnhCLCtEQUFlQyxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2F1dGgvc2lnbm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVxdWVzdCc7XHJcblxyXG5jb25zdCBzaWdub3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZG9SZXF1ZXN0IH0gPSB1c2VSZXF1ZXN0KHtcclxuICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9zaWdub3V0JyxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgYm9keToge30sXHJcbiAgICBvblN1Y2Nlc3M6ICgpID0+IFJvdXRlci5wdXNoKCcvJyksXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkb1JlcXVlc3QoKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKCdqd3QnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgZm9udFNpemU6ICc0cmVtJyxcclxuICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICc1MCUnLFxyXG4gICAgbGVmdDogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZX0+U2lnbmluZyB5b3Ugb3V0Li4uPC9kaXY+O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzaWdub3V0O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiUm91dGVyIiwiQ29va2llcyIsInVzZVJlcXVlc3QiLCJzaWdub3V0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsIm9uU3VjY2VzcyIsInB1c2giLCJkb1JlcXVlc3QiLCJyZW1vdmUiLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=