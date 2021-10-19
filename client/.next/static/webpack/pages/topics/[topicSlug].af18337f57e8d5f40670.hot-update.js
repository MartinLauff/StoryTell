"use strict";
self["webpackHotUpdate_N_E"]("pages/topics/[topicSlug]",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Post.module.css */ "./styles/Post.module.css");
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
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
  console.log(moment__WEBPACK_IMPORTED_MODULE_0___default()(post.createdAt).fromNow());
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    style: {
      margin: '1rem 0'
    },
    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().post),
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
          lineNumber: 15,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().topic),
          children: "s/".concat(post.topic)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().date),
        children: moment__WEBPACK_IMPORTED_MODULE_0___default()(post.createdAt).fromNow()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().follow),
        children: "Follow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().postContent),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
        children: post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().postBottom),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          style: {
            margin: '0 0.8rem'
          },
          children: post.likes.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          style: {
            marginLeft: '0.8rem'
          },
          children: "Comments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
      alt: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 27
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9waWNzL1t0b3BpY1NsdWddLmFmMTgzMzdmNTdlOGQ1ZjQwNjcwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1PLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCw2Q0FBTSxDQUFDTyxJQUFJLENBQUNHLFNBQU4sQ0FBTixDQUF1QkMsT0FBdkIsRUFBWjtBQUNBLHNCQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBQVo7QUFBa0MsYUFBUyxFQUFFYixxRUFBN0M7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUEsd0VBQWhCO0FBQUEsOEJBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRWUsVUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLFVBQUFBLFNBQVMsRUFBRTtBQUE5QixTQUFaO0FBQUEsZ0NBQ0U7QUFDRSxlQUFLLEVBQUU7QUFBRUMsWUFBQUEsV0FBVyxFQUFFO0FBQWYsV0FEVDtBQUVFLG1CQUFTLEVBQUVqQixxRUFGYjtBQUdFLGFBQUcsRUFBRVEsSUFBSSxDQUFDVyxLQUhaO0FBSUUsYUFBRyxhQUFNWCxJQUFJLENBQUNZLElBQVg7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBTSxtQkFBUyxFQUFFcEIsc0VBQWpCO0FBQUEsZ0NBQXlDUSxJQUFJLENBQUNhLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVVFO0FBQU0saUJBQVMsRUFBRXJCLHFFQUFqQjtBQUFBLGtCQUNHQyw2Q0FBTSxDQUFDTyxJQUFJLENBQUNHLFNBQU4sQ0FBTixDQUF1QkMsT0FBdkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFhRTtBQUFRLGlCQUFTLEVBQUVaLHVFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBZ0JFO0FBQUssZUFBUyxFQUFFQSw0RUFBaEI7QUFBQSw2QkFDRTtBQUFBLGtCQUFJUSxJQUFJLENBQUNXO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkYsZUFtQkU7QUFBSyxlQUFTLEVBQUVuQiwyRUFBaEI7QUFBQSw4QkFDRTtBQUFBLGdDQUNFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLGVBQUssRUFBRTtBQUFFYSxZQUFBQSxNQUFNLEVBQUU7QUFBVixXQUFiO0FBQUEsb0JBQXNDTCxJQUFJLENBQUNrQixLQUFMLENBQVdDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBQSxnQ0FDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxlQUFLLEVBQUU7QUFBRUMsWUFBQUEsVUFBVSxFQUFFO0FBQWQsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQVVFO0FBQUEsK0JBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkYsRUFpQ0dwQixJQUFJLENBQUNxQixVQUFMLGlCQUFtQjtBQUFLLFNBQUcsRUFBRXJCLElBQUksQ0FBQ1c7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakN0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQXZDRDs7S0FBTVo7QUF5Q04sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb3N0U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Qb3N0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xyXG5pbXBvcnQgTGlrZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9MaWtlSWNvbic7XHJcbmltcG9ydCBEaXNMaWtlSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL0Rpc0xpa2VJY29uJztcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvQ29tbWVudEljb24nO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9Nb3JlSWNvbic7XHJcblxyXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cobW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mcm9tTm93KCkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzFyZW0gMCcgfX0gY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0VG9wfT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ0l0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcwLjVyZW0nIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgIHNyYz17YC8ke3Bvc3Quc2x1Z30uanBnYH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMudG9waWN9Pntgcy8ke3Bvc3QudG9waWN9YH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAge21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5mb2xsb3d9PkZvbGxvdzwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdENvbnRlbnR9PlxyXG4gICAgICAgIDxwPntwb3N0LnRpdGxlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RCb3R0b219PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TGlrZUljb24gLz5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogJzAgMC44cmVtJyB9fT57cG9zdC5saWtlcy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgPERpc0xpa2VJY29uIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuOHJlbScgfX0+Q29tbWVudHM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxNb3JlSWNvbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Bvc3QuY292ZXJJbWFnZSAmJiA8aW1nIGFsdD17cG9zdC50aXRsZX0gLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbInBvc3RTdHlsZXMiLCJtb21lbnQiLCJEYXRlVGltZSIsIkxpa2VJY29uIiwiRGlzTGlrZUljb24iLCJDb21tZW50SWNvbiIsIk1vcmVJY29uIiwiUG9zdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsIm1hcmdpbiIsInBvc3RUb3AiLCJkaXNwbGF5IiwiYWxpZ0l0ZW1zIiwibWFyZ2luUmlnaHQiLCJpY29uIiwidGl0bGUiLCJzbHVnIiwidG9waWMiLCJkYXRlIiwiZm9sbG93IiwicG9zdENvbnRlbnQiLCJwb3N0Qm90dG9tIiwibGlrZXMiLCJsZW5ndGgiLCJtYXJnaW5MZWZ0IiwiY292ZXJJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=