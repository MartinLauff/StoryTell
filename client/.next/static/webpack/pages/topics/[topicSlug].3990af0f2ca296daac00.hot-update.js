"use strict";
self["webpackHotUpdate_N_E"]("pages/topics/[topicSlug]",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Post.module.css */ "./styles/Post.module.css");
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/formatDistance */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Icons/LikeIcon */ "./components/Icons/LikeIcon.js");
/* harmony import */ var _components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Icons/DisLikeIcon */ "./components/Icons/DisLikeIcon.js");
/* harmony import */ var _components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Icons/CommentIcon */ "./components/Icons/CommentIcon.js");
/* harmony import */ var _components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Icons/MoreIcon */ "./components/Icons/MoreIcon.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\Post.js",
    _this = undefined;










var Post = function Post(_ref) {
  var post = _ref.post;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().post),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/posts/[...postId]",
      as: "/posts/".concat(post._id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        style: {
          textDecoration: 'none'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().postTop),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            style: {
              display: 'flex',
              aligItems: 'center'
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              style: {
                marginRight: '0.5rem'
              },
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().icon),
              alt: post.title,
              src: "/".concat(post.slug, ".jpg")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().topic),
              children: "s/".concat(post.topic)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().date),
            children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_7__.default)(new Date(post.createdAt), new Date(), {
              addSuffix: true
            }).replace('about', '').replace('less than', '')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().follow),
            children: "Follow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().postContent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), !post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().postBottom),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              style: {
                margin: '0 0.8rem'
              },
              children: post.likes.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              style: {
                marginLeft: '0.8rem'
              },
              children: "Comments"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, _this), post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().coverImage),
          src: post.coverImage,
          alt: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9waWNzL1t0b3BpY1NsdWddLjM5OTBhZjBmMmNhMjk2ZGFhYzAwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLHNCQUNFO0FBQUssYUFBUyxFQUFFUCxxRUFBaEI7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxvQkFBWDtBQUFnQyxRQUFFLG1CQUFZTyxJQUFJLENBQUNDLEdBQWpCLENBQWxDO0FBQUEsNkJBQ0U7QUFBRyxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsY0FBYyxFQUFFO0FBQWxCLFNBQVY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVULHdFQUFoQjtBQUFBLGtDQUNFO0FBQUssaUJBQUssRUFBRTtBQUFFVyxjQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkMsY0FBQUEsU0FBUyxFQUFFO0FBQTlCLGFBQVo7QUFBQSxvQ0FDRTtBQUNFLG1CQUFLLEVBQUU7QUFBRUMsZ0JBQUFBLFdBQVcsRUFBRTtBQUFmLGVBRFQ7QUFFRSx1QkFBUyxFQUFFYixxRUFGYjtBQUdFLGlCQUFHLEVBQUVPLElBQUksQ0FBQ1EsS0FIWjtBQUlFLGlCQUFHLGFBQU1SLElBQUksQ0FBQ1MsSUFBWDtBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFPRTtBQUFNLHVCQUFTLEVBQUVoQixzRUFBakI7QUFBQSxvQ0FBeUNPLElBQUksQ0FBQ1UsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVVFO0FBQU0scUJBQVMsRUFBRWpCLHFFQUFqQjtBQUFBLHNCQUNHQyxnRUFBYyxDQUFDLElBQUlrQixJQUFKLENBQVNaLElBQUksQ0FBQ2EsU0FBZCxDQUFELEVBQTJCLElBQUlELElBQUosRUFBM0IsRUFBdUM7QUFDcERFLGNBQUFBLFNBQVMsRUFBRTtBQUR5QyxhQUF2QyxDQUFkLENBR0VDLE9BSEYsQ0FHVSxPQUhWLEVBR21CLEVBSG5CLEVBSUVBLE9BSkYsQ0FJVSxXQUpWLEVBSXVCLEVBSnZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQWlCRTtBQUFRLHFCQUFTLEVBQUV0Qix1RUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQW9CRTtBQUFLLG1CQUFTLEVBQUVBLDRFQUFoQjtBQUFBLGlDQUNFO0FBQUEsc0JBQUlPLElBQUksQ0FBQ1E7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQkYsRUF1QkcsQ0FBQ1IsSUFBSSxDQUFDa0IsVUFBTixpQkFDQztBQUFLLG1CQUFTLEVBQUV6QiwyRUFBaEI7QUFBQSxrQ0FDRTtBQUFBLG9DQUNFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFNLG1CQUFLLEVBQUU7QUFBRTJCLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUFiO0FBQUEsd0JBQXNDcEIsSUFBSSxDQUFDcUIsS0FBTCxDQUFXQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRTtBQUFBLG9DQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFNLG1CQUFLLEVBQUU7QUFBRUMsZ0JBQUFBLFVBQVUsRUFBRTtBQUFkLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBVUU7QUFBQSxtQ0FDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJKLEVBd0NHdkIsSUFBSSxDQUFDa0IsVUFBTCxpQkFDQztBQUNFLG1CQUFTLEVBQUV6QiwyRUFEYjtBQUVFLGFBQUcsRUFBRU8sSUFBSSxDQUFDa0IsVUFGWjtBQUdFLGFBQUcsRUFBRWxCLElBQUksQ0FBQ1E7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0RELENBdkREOztLQUFNVDtBQXlETiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHBvc3RTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Bvc3QubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZSc7XHJcbmltcG9ydCBMaWtlSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL0xpa2VJY29uJztcclxuaW1wb3J0IERpc0xpa2VJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvRGlzTGlrZUljb24nO1xyXG5pbXBvcnQgQ29tbWVudEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9Db21tZW50SWNvbic7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL01vcmVJY29uJztcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdH0+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy9wb3N0cy9bLi4ucG9zdElkXScgYXM9e2AvcG9zdHMvJHtwb3N0Ll9pZH1gfT5cclxuICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdFRvcH0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC41cmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvJHtwb3N0LnNsdWd9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMudG9waWN9Pntgcy8ke3Bvc3QudG9waWN9YH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKG5ldyBEYXRlKHBvc3QuY3JlYXRlZEF0KSwgbmV3IERhdGUoKSwge1xyXG4gICAgICAgICAgICAgICAgYWRkU3VmZml4OiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnYWJvdXQnLCAnJylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdsZXNzIHRoYW4nLCAnJyl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuZm9sbG93fT5Gb2xsb3c8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdENvbnRlbnR9PlxyXG4gICAgICAgICAgICA8cD57cG9zdC50aXRsZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHshcG9zdC5jb3ZlckltYWdlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdEJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaWtlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luOiAnMCAwLjhyZW0nIH19Pntwb3N0Lmxpa2VzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8RGlzTGlrZUljb24gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMC44cmVtJyB9fT5Db21tZW50czwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7cG9zdC5jb3ZlckltYWdlICYmIChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIHNyYz17cG9zdC5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJwb3N0U3R5bGVzIiwiZm9ybWF0RGlzdGFuY2UiLCJMaWtlSWNvbiIsIkRpc0xpa2VJY29uIiwiQ29tbWVudEljb24iLCJNb3JlSWNvbiIsIlBvc3QiLCJwb3N0IiwiX2lkIiwidGV4dERlY29yYXRpb24iLCJwb3N0VG9wIiwiZGlzcGxheSIsImFsaWdJdGVtcyIsIm1hcmdpblJpZ2h0IiwiaWNvbiIsInRpdGxlIiwic2x1ZyIsInRvcGljIiwiZGF0ZSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJhZGRTdWZmaXgiLCJyZXBsYWNlIiwiZm9sbG93IiwicG9zdENvbnRlbnQiLCJjb3ZlckltYWdlIiwicG9zdEJvdHRvbSIsIm1hcmdpbiIsImxpa2VzIiwibGVuZ3RoIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=