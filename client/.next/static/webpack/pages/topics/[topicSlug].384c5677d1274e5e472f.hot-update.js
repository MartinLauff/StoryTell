"use strict";
self["webpackHotUpdate_N_E"]("pages/topics/[topicSlug]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9waWNzL1t0b3BpY1NsdWddLjM4NGM1Njc3ZDEyNzRlNWU0NzJmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU8sSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QixNQUFNQyxVQUFVLEdBQUc7QUFBRUMsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBbkI7QUFDQSxNQUFNQyxVQUFVLEdBQUc7QUFBRUQsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBbkI7QUFDQSxNQUFNRSxTQUFTLEdBQUc7QUFBRUYsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBbEI7QUFDQSxzQkFDRTtBQUNFLFNBQUssRUFBRSxDQUFDRixJQUFJLENBQUNLLFVBQU4sR0FBbUI7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FBbkIsR0FBa0QsSUFEM0Q7QUFFRSxhQUFTLEVBQUViLHFFQUZiO0FBQUEsMkJBSUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsb0JBQVg7QUFBZ0MsUUFBRSxtQkFBWU8sSUFBSSxDQUFDTyxHQUFqQixDQUFsQztBQUFBLDZCQUNFO0FBQUcsYUFBSyxFQUFFO0FBQUVDLFVBQUFBLGNBQWMsRUFBRTtBQUFsQixTQUFWO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFUixJQUFJLENBQUNLLFVBQUwsR0FBa0JaLDhFQUFsQixHQUE2QyxFQUE3RDtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRUEsd0VBQWhCO0FBQUEsb0NBQ0U7QUFBSyxtQkFBSyxFQUFFO0FBQUVrQixnQkFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLGdCQUFBQSxTQUFTLEVBQUU7QUFBOUIsZUFBWjtBQUFBLHNDQUNFO0FBQ0UscUJBQUssRUFBRTtBQUFFQyxr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SSxDQUFDSyxVQUFMLGlCQUNDO0FBQ0UsbUJBQVMsRUFBRVosMkVBRGI7QUFFRSxhQUFHLEVBQUVPLElBQUksQ0FBQ0ssVUFGWjtBQUdFLGFBQUcsRUFBRUwsSUFBSSxDQUFDZTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0RKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErRUQsQ0FuRkQ7O0tBQU1oQjtBQXFGTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHBvc3RTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Bvc3QubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZSc7XHJcbmltcG9ydCBMaWtlSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL0xpa2VJY29uJztcclxuaW1wb3J0IERpc0xpa2VJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvRGlzTGlrZUljb24nO1xyXG5pbXBvcnQgQ29tbWVudEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9Db21tZW50SWNvbic7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL01vcmVJY29uJztcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBibGFja0NvbG9yID0geyBjb2xvcjogJyMwMDAnIH07XHJcbiAgY29uc3Qgd2hpdGVDb2xvciA9IHsgY29sb3I6ICcjZmZmJyB9O1xyXG4gIGNvbnN0IGdyZXlDb2xvciA9IHsgY29sb3I6ICcjODc4YThjJyB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXshcG9zdC5jb3ZlckltYWdlID8geyBib3JkZXI6ICcycHggc29saWQgIzAwMCcgfSA6IG51bGx9XHJcbiAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0fVxyXG4gICAgPlxyXG4gICAgICA8TGluayBocmVmPScvcG9zdHMvWy4uLnBvc3RJZF0nIGFzPXtgL3Bvc3RzLyR7cG9zdC5faWR9YH0+XHJcbiAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0LmNvdmVySW1hZ2UgPyBwb3N0U3R5bGVzLmltYWdlUG9zaXRpb24gOiAnJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RUb3B9PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzAuNXJlbScgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtgLyR7cG9zdC5zbHVnfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtwb3N0LmNvdmVySW1hZ2UgPyB3aGl0ZUNvbG9yIDogYmxhY2tDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnRvcGljfVxyXG4gICAgICAgICAgICAgICAgPntgcy8ke3Bvc3QudG9waWN9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtwb3N0LmNvdmVySW1hZ2UgPyB3aGl0ZUNvbG9yIDogZ3JleUNvbG9yfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmRhdGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKG5ldyBEYXRlKHBvc3QuY3JlYXRlZEF0KSwgbmV3IERhdGUoKSwge1xyXG4gICAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgnYWJvdXQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2xlc3MgdGhhbicsICcnKX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17d2hpdGVDb2xvcn0gY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmZvbGxvd30+XHJcbiAgICAgICAgICAgICAgICBGb2xsb3dcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RDb250ZW50fT5cclxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3Bvc3QuY292ZXJJbWFnZSA/IHdoaXRlQ29sb3IgOiBibGFja0NvbG9yfT5cclxuICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cG9zdC5jb3ZlckltYWdlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICB7cG9zdC5jb250ZW50LnNsaWNlKDAsIDUwKX0uLi5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyFwb3N0LmNvdmVySW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RCb3R0b219PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPExpa2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogJzAgMC44cmVtJywgLi4uZ3JleUNvbG9yIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0Lmxpa2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8RGlzTGlrZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjhyZW0nLCAuLi5ncmV5Q29sb3IgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbWVudHNcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TW9yZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cG9zdC5jb3ZlckltYWdlICYmIChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIHNyYz17cG9zdC5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJwb3N0U3R5bGVzIiwiZm9ybWF0RGlzdGFuY2UiLCJMaWtlSWNvbiIsIkRpc0xpa2VJY29uIiwiQ29tbWVudEljb24iLCJNb3JlSWNvbiIsIlBvc3QiLCJwb3N0IiwiYmxhY2tDb2xvciIsImNvbG9yIiwid2hpdGVDb2xvciIsImdyZXlDb2xvciIsImNvdmVySW1hZ2UiLCJib3JkZXIiLCJfaWQiLCJ0ZXh0RGVjb3JhdGlvbiIsImltYWdlUG9zaXRpb24iLCJwb3N0VG9wIiwiZGlzcGxheSIsImFsaWdJdGVtcyIsIm1hcmdpblJpZ2h0IiwiaWNvbiIsInRpdGxlIiwic2x1ZyIsInRvcGljIiwiZGF0ZSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJhZGRTdWZmaXgiLCJyZXBsYWNlIiwiZm9sbG93IiwicG9zdENvbnRlbnQiLCJ0ZXh0IiwiY29udGVudCIsInNsaWNlIiwicG9zdEJvdHRvbSIsIm1hcmdpbiIsImxpa2VzIiwibGVuZ3RoIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=