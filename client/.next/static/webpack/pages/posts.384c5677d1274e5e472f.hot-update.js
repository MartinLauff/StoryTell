"use strict";
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Post.module.css */ "./styles/Post.module.css");
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/formatDistance */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Icons/LikeIcon */ "./components/Icons/LikeIcon.js");
/* harmony import */ var _components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Icons/DisLikeIcon */ "./components/Icons/DisLikeIcon.js");
/* harmony import */ var _components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Icons/CommentIcon */ "./components/Icons/CommentIcon.js");
/* harmony import */ var _components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Icons/MoreIcon */ "./components/Icons/MoreIcon.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\Post.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Post = function Post(_ref) {
  var post = _ref.post;
  var blackColor = {
    color: '#000'
  };
  var whiteColor = {
    color: '#fff'
  };
  var greyColor = {
    color: '#878a8c'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    style: !post.coverImage ? {
      border: '2px solid #000'
    } : null,
    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().post),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/posts/[...postId]",
      as: "/posts/".concat(post._id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
        style: {
          textDecoration: 'none'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: post.coverImage ? (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().imagePosition) : '',
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postTop),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              style: {
                display: 'flex',
                aligItems: 'center'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                style: {
                  marginRight: '0.5rem'
                },
                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon),
                alt: post.title,
                src: "/".concat(post.slug, ".jpg")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                style: post.coverImage ? whiteColor : blackColor,
                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().topic),
                children: "s/".concat(post.topic)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              style: post.coverImage ? whiteColor : greyColor,
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().date),
              children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_8__.default)(new Date(post.createdAt), new Date(), {
                addSuffix: true
              }).replace('about', '').replace('less than', '')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              style: whiteColor,
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().follow),
              children: "Follow"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postContent),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              style: post.coverImage ? whiteColor : blackColor,
              children: post.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().text),
              children: [post.content.slice(0, 50), "..."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, _this), !post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postBottom),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                style: _objectSpread({
                  margin: '0 0.8rem'
                }, greyColor),
                children: post.likes.length
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                style: _objectSpread({
                  marginLeft: '0.8rem'
                }, greyColor),
                children: "Comments"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().coverImage),
          src: post.coverImage,
          alt: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuMzg0YzU2NzdkMTI3NGU1ZTQ3MmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLE1BQU1DLFVBQVUsR0FBRztBQUFFQyxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFuQjtBQUNBLE1BQU1DLFVBQVUsR0FBRztBQUFFRCxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFuQjtBQUNBLE1BQU1FLFNBQVMsR0FBRztBQUFFRixJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFsQjtBQUNBLHNCQUNFO0FBQ0UsU0FBSyxFQUFFLENBQUNGLElBQUksQ0FBQ0ssVUFBTixHQUFtQjtBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBVixLQUFuQixHQUFrRCxJQUQzRDtBQUVFLGFBQVMsRUFBRWIscUVBRmI7QUFBQSwyQkFJRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxvQkFBWDtBQUFnQyxRQUFFLG1CQUFZTyxJQUFJLENBQUNPLEdBQWpCLENBQWxDO0FBQUEsNkJBQ0U7QUFBRyxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsY0FBYyxFQUFFO0FBQWxCLFNBQVY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVSLElBQUksQ0FBQ0ssVUFBTCxHQUFrQlosOEVBQWxCLEdBQTZDLEVBQTdEO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFQSx3RUFBaEI7QUFBQSxvQ0FDRTtBQUFLLG1CQUFLLEVBQUU7QUFBRWtCLGdCQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkMsZ0JBQUFBLFNBQVMsRUFBRTtBQUE5QixlQUFaO0FBQUEsc0NBQ0U7QUFDRSxxQkFBSyxFQUFFO0FBQUVDLGtCQUFBQSxXQUFXLEVB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aUJBQ0M7QUFDRSxtQkFBUyxFQUFFWiwyRUFEYjtBQUVFLGFBQUcsRUFBRU8sSUFBSSxDQUFDSyxVQUZaO0FBR0UsYUFBRyxFQUFFTCxJQUFJLENBQUNlO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStFRCxDQW5GRDs7S0FBTWhCO0FBcUZOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcG9zdFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUG9zdC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlJztcclxuaW1wb3J0IExpa2VJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvTGlrZUljb24nO1xyXG5pbXBvcnQgRGlzTGlrZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9EaXNMaWtlSWNvbic7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL0NvbW1lbnRJY29uJztcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvTW9yZUljb24nO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGJsYWNrQ29sb3IgPSB7IGNvbG9yOiAnIzAwMCcgfTtcclxuICBjb25zdCB3aGl0ZUNvbG9yID0geyBjb2xvcjogJyNmZmYnIH07XHJcbiAgY29uc3QgZ3JleUNvbG9yID0geyBjb2xvcjogJyM4NzhhOGMnIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9eyFwb3N0LmNvdmVySW1hZ2UgPyB7IGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyB9IDogbnVsbH1cclxuICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3R9XHJcbiAgICA+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy9wb3N0cy9bLi4ucG9zdElkXScgYXM9e2AvcG9zdHMvJHtwb3N0Ll9pZH1gfT5cclxuICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3QuY292ZXJJbWFnZSA/IHBvc3RTdHlsZXMuaW1hZ2VQb3NpdGlvbiA6ICcnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdFRvcH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWdJdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC41cmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2AvJHtwb3N0LnNsdWd9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3Bvc3QuY292ZXJJbWFnZSA/IHdoaXRlQ29sb3IgOiBibGFja0NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMudG9waWN9XHJcbiAgICAgICAgICAgICAgICA+e2BzLyR7cG9zdC50b3BpY31gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3Bvc3QuY292ZXJJbWFnZSA/IHdoaXRlQ29sb3IgOiBncmV5Q29sb3J9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuZGF0ZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2UobmV3IERhdGUocG9zdC5jcmVhdGVkQXQpLCBuZXcgRGF0ZSgpLCB7XHJcbiAgICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdhYm91dCcsICcnKVxyXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgnbGVzcyB0aGFuJywgJycpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt3aGl0ZUNvbG9yfSBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuZm9sbG93fT5cclxuICAgICAgICAgICAgICAgIEZvbGxvd1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17cG9zdC5jb3ZlckltYWdlID8gd2hpdGVDb2xvciA6IGJsYWNrQ29sb3J9PlxyXG4gICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtwb3N0LmNvdmVySW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3Bvc3RTdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbnRlbnQuc2xpY2UoMCwgNTApfS4uLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7IXBvc3QuY292ZXJJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdEJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TGlrZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luOiAnMCAwLjhyZW0nLCAuLi5ncmV5Q29sb3IgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bvc3QubGlrZXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxEaXNMaWtlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuOHJlbScsIC4uLmdyZXlDb2xvciB9fT5cclxuICAgICAgICAgICAgICAgICAgICBDb21tZW50c1xyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxNb3JlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtwb3N0LmNvdmVySW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmNvdmVySW1hZ2V9XHJcbiAgICAgICAgICAgICAgc3JjPXtwb3N0LmNvdmVySW1hZ2V9XHJcbiAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInBvc3RTdHlsZXMiLCJmb3JtYXREaXN0YW5jZSIsIkxpa2VJY29uIiwiRGlzTGlrZUljb24iLCJDb21tZW50SWNvbiIsIk1vcmVJY29uIiwiUG9zdCIsInBvc3QiLCJibGFja0NvbG9yIiwiY29sb3IiLCJ3aGl0ZUNvbG9yIiwiZ3JleUNvbG9yIiwiY292ZXJJbWFnZSIsImJvcmRlciIsIl9pZCIsInRleHREZWNvcmF0aW9uIiwiaW1hZ2VQb3NpdGlvbiIsInBvc3RUb3AiLCJkaXNwbGF5IiwiYWxpZ0l0ZW1zIiwibWFyZ2luUmlnaHQiLCJpY29uIiwidGl0bGUiLCJzbHVnIiwidG9waWMiLCJkYXRlIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImFkZFN1ZmZpeCIsInJlcGxhY2UiLCJmb2xsb3ciLCJwb3N0Q29udGVudCIsInRleHQiLCJjb250ZW50Iiwic2xpY2UiLCJwb3N0Qm90dG9tIiwibWFyZ2luIiwibGlrZXMiLCJsZW5ndGgiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==