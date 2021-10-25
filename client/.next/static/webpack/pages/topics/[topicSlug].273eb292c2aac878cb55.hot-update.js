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
    style: {
      margin: '1rem 0'
    },
    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().post),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      style: {
        textDecoration: 'none'
      },
      href: "/posts/[...postId]",
      as: "/posts/".concat(post._id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
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
              lineNumber: 20,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().topic),
              children: "s/".concat(post.topic)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().date),
            children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_7__.default)(new Date(post.createdAt), new Date(), {
              addSuffix: true
            }).replace('about', '').replace('less than', '')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().follow),
            children: "Follow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().postContent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().postBottom),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              style: {
                margin: '0 0.8rem'
              },
              children: post.likes.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              style: {
                marginLeft: '0.8rem'
              },
              children: "Comments"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this), post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
          alt: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 31
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9waWNzL1t0b3BpY1NsdWddLjI3M2ViMjkyYzJhYWM4NzhjYjU1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLHNCQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBQVo7QUFBa0MsYUFBUyxFQUFFUixxRUFBN0M7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUNFLFdBQUssRUFBRTtBQUFFUyxRQUFBQSxjQUFjLEVBQUU7QUFBbEIsT0FEVDtBQUVFLFVBQUksRUFBQyxvQkFGUDtBQUdFLFFBQUUsbUJBQVlGLElBQUksQ0FBQ0csR0FBakIsQ0FISjtBQUFBLDZCQUtFO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFVix3RUFBaEI7QUFBQSxrQ0FDRTtBQUFLLGlCQUFLLEVBQUU7QUFBRVksY0FBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLGNBQUFBLFNBQVMsRUFBRTtBQUE5QixhQUFaO0FBQUEsb0NBQ0U7QUFDRSxtQkFBSyxFQUFFO0FBQUVDLGdCQUFBQSxXQUFXLEVBQUU7QUFBZixlQURUO0FBRUUsdUJBQVMsRUFBRWQscUVBRmI7QUFHRSxpQkFBRyxFQUFFTyxJQUFJLENBQUNTLEtBSFo7QUFJRSxpQkFBRyxhQUFNVCxJQUFJLENBQUNVLElBQVg7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBT0U7QUFBTSx1QkFBUyxFQUFFakIsc0VBQWpCO0FBQUEsb0NBQXlDTyxJQUFJLENBQUNXLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFVRTtBQUFNLHFCQUFTLEVBQUVsQixxRUFBakI7QUFBQSxzQkFDR0MsZ0VBQWMsQ0FBQyxJQUFJbUIsSUFBSixDQUFTYixJQUFJLENBQUNjLFNBQWQsQ0FBRCxFQUEyQixJQUFJRCxJQUFKLEVBQTNCLEVBQXVDO0FBQ3BERSxjQUFBQSxTQUFTLEVBQUU7QUFEeUMsYUFBdkMsQ0FBZCxDQUdFQyxPQUhGLENBR1UsT0FIVixFQUdtQixFQUhuQixFQUlFQSxPQUpGLENBSVUsV0FKVixFQUl1QixFQUp2QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFpQkU7QUFBUSxxQkFBUyxFQUFFdkIsdUVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFvQkU7QUFBSyxtQkFBUyxFQUFFQSw0RUFBaEI7QUFBQSxpQ0FDRTtBQUFBLHNCQUFJTyxJQUFJLENBQUNTO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJGLGVBdUJFO0FBQUssbUJBQVMsRUFBRWhCLDJFQUFoQjtBQUFBLGtDQUNFO0FBQUEsb0NBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQU0sbUJBQUssRUFBRTtBQUFFUSxnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBYjtBQUFBLHdCQUFzQ0QsSUFBSSxDQUFDb0IsS0FBTCxDQUFXQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRTtBQUFBLG9DQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFNLG1CQUFLLEVBQUU7QUFBRUMsZ0JBQUFBLFVBQVUsRUFBRTtBQUFkLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBVUU7QUFBQSxtQ0FDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkJGLEVBcUNHdEIsSUFBSSxDQUFDdUIsVUFBTCxpQkFBbUI7QUFBSyxhQUFHLEVBQUV2QixJQUFJLENBQUNTO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQ3RCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpREQsQ0FsREQ7O0tBQU1WO0FBb0ROLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcG9zdFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUG9zdC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlJztcclxuaW1wb3J0IExpa2VJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvTGlrZUljb24nO1xyXG5pbXBvcnQgRGlzTGlrZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9EaXNMaWtlSWNvbic7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL0NvbW1lbnRJY29uJztcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvTW9yZUljb24nO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzFyZW0gMCcgfX0gY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3R9PlxyXG4gICAgICA8TGlua1xyXG4gICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX1cclxuICAgICAgICBocmVmPScvcG9zdHMvWy4uLnBvc3RJZF0nXHJcbiAgICAgICAgYXM9e2AvcG9zdHMvJHtwb3N0Ll9pZH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0VG9wfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWdJdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcwLjVyZW0nIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIHNyYz17YC8ke3Bvc3Quc2x1Z30uanBnYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cG9zdFN0eWxlcy50b3BpY30+e2BzLyR7cG9zdC50b3BpY31gfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2UobmV3IERhdGUocG9zdC5jcmVhdGVkQXQpLCBuZXcgRGF0ZSgpLCB7XHJcbiAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdhYm91dCcsICcnKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2xlc3MgdGhhbicsICcnKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5mb2xsb3d9PkZvbGxvdzwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0Q29udGVudH0+XHJcbiAgICAgICAgICAgIDxwPntwb3N0LnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdEJvdHRvbX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPExpa2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luOiAnMCAwLjhyZW0nIH19Pntwb3N0Lmxpa2VzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPERpc0xpa2VJY29uIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjhyZW0nIH19PkNvbW1lbnRzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8TW9yZUljb24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtwb3N0LmNvdmVySW1hZ2UgJiYgPGltZyBhbHQ9e3Bvc3QudGl0bGV9IC8+fVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwicG9zdFN0eWxlcyIsImZvcm1hdERpc3RhbmNlIiwiTGlrZUljb24iLCJEaXNMaWtlSWNvbiIsIkNvbW1lbnRJY29uIiwiTW9yZUljb24iLCJQb3N0IiwicG9zdCIsIm1hcmdpbiIsInRleHREZWNvcmF0aW9uIiwiX2lkIiwicG9zdFRvcCIsImRpc3BsYXkiLCJhbGlnSXRlbXMiLCJtYXJnaW5SaWdodCIsImljb24iLCJ0aXRsZSIsInNsdWciLCJ0b3BpYyIsImRhdGUiLCJEYXRlIiwiY3JlYXRlZEF0IiwiYWRkU3VmZml4IiwicmVwbGFjZSIsImZvbGxvdyIsInBvc3RDb250ZW50IiwicG9zdEJvdHRvbSIsImxpa2VzIiwibGVuZ3RoIiwibWFyZ2luTGVmdCIsImNvdmVySW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9