"use strict";
self["webpackHotUpdate_N_E"]("pages/posts/[...postId]",{

/***/ "./pages/posts/[...postId].js":
/*!************************************!*\
  !*** ./pages/posts/[...postId].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var _components_bars_TopBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/bars/TopBar */ "./components/bars/TopBar.js");
/* harmony import */ var _components_bars_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/bars/SideBar */ "./components/bars/SideBar.js");
/* harmony import */ var _components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Icons/LikeIcon */ "./components/Icons/LikeIcon.js");
/* harmony import */ var _components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Icons/CommentIcon */ "./components/Icons/CommentIcon.js");
/* harmony import */ var _components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Icons/DisLikeIcon */ "./components/Icons/DisLikeIcon.js");
/* harmony import */ var _components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/bars/BottomBar */ "./components/bars/BottomBar.js");
/* harmony import */ var _styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Show.module.css */ "./styles/Show.module.css");
/* harmony import */ var _styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_bars_Layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/bars/Layer */ "./components/bars/Layer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\posts\\[...postId].js",
    _this = undefined;











var PostShow = function PostShow(_ref) {
  var post = _ref.data.post;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_bars_TopBar__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_bars_SideBar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_bars_Layer__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8___default().showWrap),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8___default().post),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8___default().postTop),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
            alt: post.title,
            src: "/".concat(post.slug, ".jpg")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8___default().topic),
            children: "s/".concat(post.topic)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            children: "posted by"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8___default().name),
            children: post.postedBy.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8___default().postCore),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8___default().content),
            children: post.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8___default().postBottom),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_8___default().showLikes),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              children: post.likes.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              children: "".concat(post.comments.length, " ").concat(post.comments.length === 1 ? 'Comment' : 'Comments')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = PostShow;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (PostShow);

var _c;

$RefreshReg$(_c, "PostShow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvWy4uLnBvc3RJZF0uYThmMjU1YjE4MjczYTUwZjZhNzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBd0I7QUFBQSxNQUFiQyxJQUFhLFFBQXJCQyxJQUFxQixDQUFiRCxJQUFhO0FBQ3ZDLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBSyxlQUFTLEVBQUVILHlFQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEscUVBQWhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQSx3RUFBaEI7QUFBQSxrQ0FDRTtBQUFLLGVBQUcsRUFBRUcsSUFBSSxDQUFDSSxLQUFmO0FBQXNCLGVBQUcsYUFBTUosSUFBSSxDQUFDSyxJQUFYO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLHFCQUFTLEVBQUVSLHNFQUFqQjtBQUFBLGtDQUF5Q0csSUFBSSxDQUFDTSxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQU0scUJBQVMsRUFBRVQscUVBQWpCO0FBQUEsc0JBQW1DRyxJQUFJLENBQUNRLFFBQUwsQ0FBY0M7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFLLG1CQUFTLEVBQUVaLHlFQUFoQjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBRUEsc0VBQWY7QUFBQSxzQkFBa0NHLElBQUksQ0FBQ0k7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUcscUJBQVMsRUFBRVAsd0VBQWQ7QUFBQSxzQkFBbUNHLElBQUksQ0FBQ1c7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFXRTtBQUFLLG1CQUFTLEVBQUVkLDJFQUFoQjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRUEsMEVBQWhCO0FBQUEsb0NBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsd0JBQU9HLElBQUksQ0FBQ2MsS0FBTCxDQUFXQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRTtBQUFBLG9DQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLGtDQUFVZixJQUFJLENBQUNnQixRQUFMLENBQWNELE1BQXhCLGNBQ0VmLElBQUksQ0FBQ2dCLFFBQUwsQ0FBY0QsTUFBZCxLQUF5QixDQUF6QixHQUE2QixTQUE3QixHQUF5QyxVQUQzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUErQkUsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1DRCxDQXBDRDs7S0FBTWhCOztBQW1ETiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9bLi4ucG9zdElkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9wQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFycy9Ub3BCYXInO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhcnMvU2lkZUJhcic7XHJcbmltcG9ydCBMaWtlSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ljb25zL0xpa2VJY29uJztcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSWNvbnMvQ29tbWVudEljb24nO1xyXG5pbXBvcnQgRGlzTGlrZUljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JY29ucy9EaXNMaWtlSWNvbic7XHJcbmltcG9ydCBCb3R0b21CYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL0JvdHRvbUJhcic7XHJcbmltcG9ydCBzaG93U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9TaG93Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL0xheWVyJztcclxuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uLy4uL2FwaS9idWlsZC1jbGllbnQnO1xyXG5cclxuY29uc3QgUG9zdFNob3cgPSAoeyBkYXRhOiB7IHBvc3QgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgPFNpZGVCYXIgLz5cclxuICAgICAgPExheWVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93U3R5bGVzLnNob3dXcmFwfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1N0eWxlcy5wb3N0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93U3R5bGVzLnBvc3RUb3B9PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD17cG9zdC50aXRsZX0gc3JjPXtgLyR7cG9zdC5zbHVnfS5qcGdgfSAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Nob3dTdHlsZXMudG9waWN9Pntgcy8ke3Bvc3QudG9waWN9YH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPnBvc3RlZCBieTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzaG93U3R5bGVzLm5hbWV9Pntwb3N0LnBvc3RlZEJ5LnVzZXJuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dTdHlsZXMucG9zdENvcmV9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzaG93U3R5bGVzLnRpdGxlfT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3Nob3dTdHlsZXMuY29udGVudH0+e3Bvc3QuY29udGVudH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93U3R5bGVzLnBvc3RCb3R0b219PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1N0eWxlcy5zaG93TGlrZXN9PlxyXG4gICAgICAgICAgICAgIDxMaWtlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntwb3N0Lmxpa2VzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPERpc0xpa2VJY29uIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntgJHtwb3N0LmNvbW1lbnRzLmxlbmd0aH0gJHtcclxuICAgICAgICAgICAgICAgIHBvc3QuY29tbWVudHMubGVuZ3RoID09PSAxID8gJ0NvbW1lbnQnIDogJ0NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgIH1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCb3R0b21CYXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHsgcG9zdElkIH0gPSBjdHgucXVlcnk7XHJcbiAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoY3R4KTtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoYC9hcGkvcG9zdHMvJHtwb3N0SWR9YCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBwb3N0SWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0U2hvdztcclxuIl0sIm5hbWVzIjpbIlRvcEJhciIsIlNpZGVCYXIiLCJMaWtlSWNvbiIsIkNvbW1lbnRJY29uIiwiRGlzTGlrZUljb24iLCJCb3R0b21CYXIiLCJzaG93U3R5bGVzIiwiTGF5ZXIiLCJQb3N0U2hvdyIsInBvc3QiLCJkYXRhIiwic2hvd1dyYXAiLCJwb3N0VG9wIiwidGl0bGUiLCJzbHVnIiwidG9waWMiLCJuYW1lIiwicG9zdGVkQnkiLCJ1c2VybmFtZSIsInBvc3RDb3JlIiwiY29udGVudCIsInBvc3RCb3R0b20iLCJzaG93TGlrZXMiLCJsaWtlcyIsImxlbmd0aCIsImNvbW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==