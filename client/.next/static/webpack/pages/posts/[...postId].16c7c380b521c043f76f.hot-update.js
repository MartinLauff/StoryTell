self["webpackHotUpdate_N_E"]("pages/posts/[...postId]",{

/***/ "./components/Icons/LikeSet.js":
/*!*************************************!*\
  !*** ./components/Icons/LikeSet.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Error.module.css */ "./styles/Error.module.css");
/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\Icons\\LikeSet.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var LikeSet = function LikeSet(_ref) {
  _s();

  var postID = _ref.postID,
      likes = _ref.likes,
      greyColor = _ref.greyColor;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(likes),
      likeCount = _useState[0],
      setLikeCount = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      errors = _useState3[0],
      setErrors = _useState3[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setTimeout(function () {
      setErrors(null);
    }, 4000);
  }, [errors]);

  var doRequest = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(path) {
      return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                url: "http://localhost:8000/api/upvotes/".concat(postID, "/").concat(path),
                headers: {
                  Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_6__.default.get('jwt')
                },
                method: 'put',
                body: {}
              });

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              setErrors( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: (_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_8___default().errorBanner),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h4", {
                  children: "Ooops...."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 11
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
                  style: {
                    listStyle: 'none'
                  },
                  children: _context.t0.response.data.errors.map(function (err) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                      children: err.message
                    }, err.message, false, {
                      fileName: _jsxFileName,
                      lineNumber: 31,
                      columnNumber: 15
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 9
              }, _this));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    return function doRequest(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var doLike = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
      var currPosts, d, _d;

      return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setActive(!active);
              currPosts = JSON.parse(localStorage.getItem('likedPosts'));

              if (currPosts.includes(postID)) {
                doRequest('unlike');
                setLikeCount(function (oldState) {
                  return oldState - 1;
                });
                d = currPosts.filter(function (el) {
                  return el !== postID;
                });
                localStorage.setItem('likedPosts', JSON.stringify(d));
              } else {
                doRequest('like');
                setLikeCount(function (oldState) {
                  return oldState + 1;
                });
                _d = [].concat((0,C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(currPosts), [postID]);
                localStorage.setItem('likedPosts', JSON.stringify(_d));
              }

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function doLike() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("svg", {
      onClick: doLike,
      width: "18",
      height: "17",
      viewBox: "0 0 18 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("path", {
        d: "M1 8.17983L9 1.19062L17 8.17983",
        stroke: active ? '#59BAB7' : '#878A8C',
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("path", {
        d: "M1 15.169L9 8.17982L17 15.169",
        stroke: active ? '#59BAB7' : '#878A8C',
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
      style: _objectSpread({
        margin: '0 0.8rem'
      }, greyColor),
      children: likeCount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), errors]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_s(LikeSet, "U38ING0oIMiIt+FWBrF2u/duzTw=");

_c = LikeSet;
/* harmony default export */ __webpack_exports__["default"] = (LikeSet);

var _c;

$RefreshReg$(_c, "LikeSet");

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

/***/ "./styles/Error.module.css":
/*!*********************************!*\
  !*** ./styles/Error.module.css ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Error.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Error.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Error.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Error.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Error.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Error.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Error.module.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Error.module.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Error_errorBanner__-BAs8 {\r\n  position: fixed;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n  top: 7%;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n  z-index: 9999;\r\n  color: #fff;\r\n  background-color: #eb4d4b;\r\n  font-size: var(--fs-mid);\r\n  font-weight: var(--fw-slim);\r\n  text-align: center;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  border-radius: 1rem;\r\n  width: min(30rem, 80%);\r\n  height: auto;\r\n  display: -webkit-flex;\r\n  display: -moz-box;\r\n  display: flex;\r\n  padding: 1rem 0;\r\n  -webkit-flex-direction: column;\r\n     -moz-box-orient: vertical;\r\n     -moz-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-justify-content: center;\r\n     -moz-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-align-items: center;\r\n     -moz-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);\r\n  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.Error_hide__2y-TV {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/Error.module.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,4BAAoB;EAApB,oBAAoB;EACpB,OAAO;EACP,SAAS;EACT,mCAAmC;EACnC,2BAA2B;EAC3B,aAAa;EACb,WAAW;EACX,yBAAyB;EACzB,wBAAwB;EACxB,2BAA2B;EAC3B,kBAAkB;EAClB,8BAA8B;EAC9B,+BAA+B;EAC/B,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,eAAe;EACf,8BAAsB;KAAtB,yBAAsB;KAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,mDAAmD;EACnD,2CAA2C;AAC7C;;AAEA;EACE,aAAa;AACf","sourcesContent":[".errorBanner {\r\n  position: fixed;\r\n  transition: all 0.3s;\r\n  top: 7%;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n  z-index: 9999;\r\n  color: #fff;\r\n  background-color: #eb4d4b;\r\n  font-size: var(--fs-mid);\r\n  font-weight: var(--fw-slim);\r\n  text-align: center;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  border-radius: 1rem;\r\n  width: min(30rem, 80%);\r\n  height: auto;\r\n  display: flex;\r\n  padding: 1rem 0;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  -webkit-box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);\r\n  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"errorBanner": "Error_errorBanner__-BAs8",
	"hide": "Error_hide__2y-TV"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvWy4uLnBvc3RJZF0uMTZjN2MzODBiNTIxYzA0M2Y3NmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFrQztBQUFBOztBQUFBLE1BQS9CQyxNQUErQixRQUEvQkEsTUFBK0I7QUFBQSxNQUF2QkMsS0FBdUIsUUFBdkJBLEtBQXVCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDaEQsa0JBQWtDUiwrQ0FBUSxDQUFDTyxLQUFELENBQTFDO0FBQUEsTUFBT0UsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBNEJWLCtDQUFRLENBQUMsS0FBRCxDQUFwQztBQUFBLE1BQU9XLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUE0QlosK0NBQVEsQ0FBQyxJQUFELENBQXBDO0FBQUEsTUFBT2EsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUFiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkYyxJQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmRCxNQUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBSlEsRUFJTixDQUFDRCxNQUFELENBSk0sQ0FBVDs7QUFNQSxNQUFNRyxTQUFTO0FBQUEsOFNBQUcsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFUmQsNENBQUssQ0FBQztBQUNWZSxnQkFBQUEsR0FBRyw4Q0FBdUNaLE1BQXZDLGNBQWlEVyxJQUFqRCxDQURPO0FBRVZFLGdCQUFBQSxPQUFPLEVBQUU7QUFBRUMsa0JBQUFBLGFBQWEsRUFBRSxZQUFZaEIsa0RBQUEsQ0FBWSxLQUFaO0FBQTdCLGlCQUZDO0FBR1ZrQixnQkFBQUEs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LEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7OztBQ25GQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EscUVBQXFFLHNCQUFzQixtQ0FBbUMsMkJBQTJCLGNBQWMsZ0JBQWdCLDBDQUEwQyxrQ0FBa0Msb0JBQW9CLGtCQUFrQixnQ0FBZ0MsK0JBQStCLGtDQUFrQyx5QkFBeUIscUNBQXFDLHNDQUFzQywwQkFBMEIsNkJBQTZCLG1CQUFtQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixzQkFBc0IscUNBQXFDLG1DQUFtQyxvQ0FBb0MscUNBQXFDLHNDQUFzQywrQkFBK0Isc0NBQXNDLGtDQUFrQyxnQ0FBZ0Msa0NBQWtDLDBEQUEwRCxrREFBa0QsS0FBSyw0QkFBNEIsb0JBQW9CLEtBQUssV0FBVyx3RkFBd0YsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSx1Q0FBdUMsc0JBQXNCLDJCQUEyQixjQUFjLGdCQUFnQiwwQ0FBMEMsa0NBQWtDLG9CQUFvQixrQkFBa0IsZ0NBQWdDLCtCQUErQixrQ0FBa0MseUJBQXlCLHFDQUFxQyxzQ0FBc0MsMEJBQTBCLDZCQUE2QixtQkFBbUIsb0JBQW9CLHNCQUFzQiw2QkFBNkIsOEJBQThCLDBCQUEwQiwwREFBMEQsa0RBQWtELEtBQUssZUFBZSxvQkFBb0IsS0FBSyx1QkFBdUI7QUFDeDlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ljb25zL0xpa2VTZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9FcnJvci5tb2R1bGUuY3NzPzA5ZGYiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9FcnJvci5tb2R1bGUuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZ2VuZXJhbEVycm9yIGZyb20gJy4uLy4uL3N0eWxlcy9FcnJvci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IExpa2VTZXQgPSAoeyBwb3N0SUQsIGxpa2VzLCBncmV5Q29sb3IgfSkgPT4ge1xyXG4gIGNvbnN0IFtsaWtlQ291bnQsIHNldExpa2VDb3VudF0gPSB1c2VTdGF0ZShsaWtlcyk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgfSwgNDAwMCk7XHJcbiAgfSwgW2Vycm9yc10pO1xyXG5cclxuICBjb25zdCBkb1JlcXVlc3QgPSBhc3luYyAocGF0aCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXB2b3Rlcy8ke3Bvc3RJRH0vJHtwYXRofWAsXHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBDb29raWVzLmdldCgnand0JykgfSxcclxuICAgICAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgICAgIGJvZHk6IHt9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcnMoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dlbmVyYWxFcnJvci5lcnJvckJhbm5lcn0+XHJcbiAgICAgICAgICA8aDQ+T29vcHMuLi4uPC9oND5cclxuICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fT5cclxuICAgICAgICAgICAge2Vyci5yZXNwb25zZS5kYXRhLmVycm9ycy5tYXAoKGVycikgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2Vyci5tZXNzYWdlfT57ZXJyLm1lc3NhZ2V9PC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvTGlrZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcclxuICAgIGxldCBjdXJyUG9zdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZFBvc3RzJykpO1xyXG5cclxuICAgIGlmIChjdXJyUG9zdHMuaW5jbHVkZXMocG9zdElEKSkge1xyXG4gICAgICBkb1JlcXVlc3QoJ3VubGlrZScpO1xyXG4gICAgICBzZXRMaWtlQ291bnQoKG9sZFN0YXRlKSA9PiBvbGRTdGF0ZSAtIDEpO1xyXG4gICAgICBsZXQgZCA9IGN1cnJQb3N0cy5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gcG9zdElEKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpa2VkUG9zdHMnLCBKU09OLnN0cmluZ2lmeShkKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb1JlcXVlc3QoJ2xpa2UnKTtcclxuICAgICAgc2V0TGlrZUNvdW50KChvbGRTdGF0ZSkgPT4gb2xkU3RhdGUgKyAxKTtcclxuICAgICAgbGV0IGQgPSBbLi4uY3VyclBvc3RzLCBwb3N0SURdO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlrZWRQb3N0cycsIEpTT04uc3RyaW5naWZ5KGQpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgb25DbGljaz17ZG9MaWtlfVxyXG4gICAgICAgIHdpZHRoPScxOCdcclxuICAgICAgICBoZWlnaHQ9JzE3J1xyXG4gICAgICAgIHZpZXdCb3g9JzAgMCAxOCAxNydcclxuICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPSdNMSA4LjE3OTgzTDkgMS4xOTA2MkwxNyA4LjE3OTgzJ1xyXG4gICAgICAgICAgc3Ryb2tlPXthY3RpdmUgPyAnIzU5QkFCNycgOiAnIzg3OEE4Qyd9XHJcbiAgICAgICAgICBzdHJva2VXaWR0aD0nMidcclxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9J00xIDE1LjE2OUw5IDguMTc5ODJMMTcgMTUuMTY5J1xyXG4gICAgICAgICAgc3Ryb2tlPXthY3RpdmUgPyAnIzU5QkFCNycgOiAnIzg3OEE4Qyd9XHJcbiAgICAgICAgICBzdHJva2VXaWR0aD0nMidcclxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW46ICcwIDAuOHJlbScsIC4uLmdyZXlDb2xvciB9fT57bGlrZUNvdW50fTwvc3Bhbj5cclxuICAgICAge2Vycm9yc31cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpa2VTZXQ7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9FcnJvci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbiAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFuY2hvckVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihwIGluIGIpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9FcnJvci5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9FcnJvci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5FcnJvcl9lcnJvckJhbm5lcl9fLUJBczgge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgdG9wOiA3JTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViNGQ0YjtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWlkKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1zbGltKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgd2lkdGg6IG1pbigzMHJlbSwgODAlKTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxufVxcclxcblxcclxcbi5FcnJvcl9oaWRlX18yeS1UViB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0Vycm9yLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixPQUFPO0VBQ1AsU0FBUztFQUNULG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBYTtFQUFiLGlCQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBc0I7S0FBdEIseUJBQXNCO0tBQXRCLDBCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsK0JBQXVCO0tBQXZCLHFCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkJBQW1CO0tBQW5CLHNCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsbURBQW1EO0VBQ25ELDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZXJyb3JCYW5uZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuICB0b3A6IDclO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI0ZDRiO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mcy1taWQpO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LXNsaW0pO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICB3aWR0aDogbWluKDMwcmVtLCA4MCUpO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJlcnJvckJhbm5lclwiOiBcIkVycm9yX2Vycm9yQmFubmVyX18tQkFzOFwiLFxuXHRcImhpZGVcIjogXCJFcnJvcl9oaWRlX18yeS1UVlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2VuZXJhbEVycm9yIiwiYXhpb3MiLCJDb29raWVzIiwiTGlrZVNldCIsInBvc3RJRCIsImxpa2VzIiwiZ3JleUNvbG9yIiwibGlrZUNvdW50Iiwic2V0TGlrZUNvdW50IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic2V0VGltZW91dCIsImRvUmVxdWVzdCIsInBhdGgiLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldCIsIm1ldGhvZCIsImJvZHkiLCJlcnJvckJhbm5lciIsImxpc3RTdHlsZSIsInJlc3BvbnNlIiwiZGF0YSIsIm1hcCIsImVyciIsIm1lc3NhZ2UiLCJkb0xpa2UiLCJjdXJyUG9zdHMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5jbHVkZXMiLCJvbGRTdGF0ZSIsImQiLCJmaWx0ZXIiLCJlbCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJtYXJnaW4iXSwic291cmNlUm9vdCI6IiJ9