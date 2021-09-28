"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var buildClient = function buildClient(_ref) {
  var req = _ref.req;

  if (false) {} else {
    // We must be on the browser
    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
      baseURL: 'http://localhost:8000/'
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (buildClient);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMzQ5YjgzNmEyZGU4ZDljZDJmYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFhO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVOztBQUMvQixhQUFtQyxFQUFuQyxNQU9PO0FBQ0w7QUFDQSxXQUFPRixtREFBQSxDQUFhO0FBQ2xCSSxNQUFBQSxPQUFPLEVBQUU7QUFEUyxLQUFiLENBQVA7QUFHRDtBQUNGLENBZEQ7O0FBZUEsK0RBQWVILFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2J1aWxkLWNsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgYnVpbGRDbGllbnQgPSAoeyByZXEgfSkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXJcclxuXHJcbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8nLFxyXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBXZSBtdXN0IGJlIG9uIHRoZSBicm93c2VyXHJcbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8nLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBidWlsZENsaWVudDtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYnVpbGRDbGllbnQiLCJyZXEiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=