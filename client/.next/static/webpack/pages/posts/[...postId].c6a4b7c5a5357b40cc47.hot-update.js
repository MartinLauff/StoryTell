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
/* harmony import */ var _components_CommentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CommentList */ "./components/CommentList.js");
/* harmony import */ var _components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Icons/LikeIcon */ "./components/Icons/LikeIcon.js");
/* harmony import */ var _components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Icons/CommentIcon */ "./components/Icons/CommentIcon.js");
/* harmony import */ var _components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Icons/DisLikeIcon */ "./components/Icons/DisLikeIcon.js");
/* harmony import */ var _components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/bars/BottomBar */ "./components/bars/BottomBar.js");
/* harmony import */ var _styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/Show.module.css */ "./styles/Show.module.css");
/* harmony import */ var _styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_bars_Layer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/bars/Layer */ "./components/bars/Layer.js");
/* harmony import */ var _components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Icons/MoreIcon */ "./components/Icons/MoreIcon.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\posts\\[...postId].js",
    _this = undefined;













var PostShow = function PostShow(_ref) {
  var post = _ref.data.post;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_bars_TopBar__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_bars_SideBar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_bars_Layer__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().showWrap),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().post),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().postTop),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
            alt: post.title,
            src: "/".concat(post.slug, ".jpg")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().topic),
            children: "s/".concat(post.topic)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
            children: "posted by"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().name),
            children: post.postedBy.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().postCore),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().content),
            children: post.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().image),
          src: post.coverImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().actions),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().showLikes),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
              children: post.likes.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().comments),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
              className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().count),
              children: post.comments.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
              children: post.comments.length === 1 ? 'Comment' : 'Comments'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_CommentList__WEBPACK_IMPORTED_MODULE_2__.default, {
        comments: post.comments
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvWy4uLnBvc3RJZF0uYzZhNGI3YzVhNTM1N2I0MGNjNDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsSUFBTVUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBd0I7QUFBQSxNQUFiQyxJQUFhLFFBQXJCQyxJQUFxQixDQUFiRCxJQUFhO0FBQ3ZDLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBSyxlQUFTLEVBQUVKLDBFQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsc0VBQWhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQSx5RUFBaEI7QUFBQSxrQ0FDRTtBQUFLLGVBQUcsRUFBRUksSUFBSSxDQUFDSSxLQUFmO0FBQXNCLGVBQUcsYUFBTUosSUFBSSxDQUFDSyxJQUFYO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLHFCQUFTLEVBQUVULHVFQUFqQjtBQUFBLGtDQUF5Q0ksSUFBSSxDQUFDTSxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQU0scUJBQVMsRUFBRVYsc0VBQWpCO0FBQUEsc0JBQW1DSSxJQUFJLENBQUNRLFFBQUwsQ0FBY0M7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFLLG1CQUFTLEVBQUViLDBFQUFoQjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBRUEsdUVBQWY7QUFBQSxzQkFBa0NJLElBQUksQ0FBQ0k7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUcscUJBQVMsRUFBRVIseUVBQWQ7QUFBQSxzQkFBbUNJLElBQUksQ0FBQ1c7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFXRTtBQUFLLG1CQUFTLEVBQUVmLHVFQUFoQjtBQUFrQyxhQUFHLEVBQUVJLElBQUksQ0FBQ2E7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixlQVlFO0FBQUssbUJBQVMsRUFBRWpCLHlFQUFoQjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRUEsMkVBQWhCO0FBQUEsb0NBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsd0JBQU9JLElBQUksQ0FBQ2dCLEtBQUwsQ0FBV0M7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUU7QUFBSyxxQkFBUyxFQUFFckIsMEVBQWhCO0FBQUEsb0NBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQU0sdUJBQVMsRUFBRUEsdUVBQWpCO0FBQUEsd0JBQW9DSSxJQUFJLENBQUNrQixRQUFMLENBQWNEO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFBLHdCQUFPakIsSUFBSSxDQUFDa0IsUUFBTCxDQUFjRCxNQUFkLEtBQXlCLENBQXpCLEdBQTZCLFNBQTdCLEdBQXlDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBV0U7QUFBQSxtQ0FDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUE2QkUsOERBQUMsNERBQUQ7QUFBYSxnQkFBUSxFQUFFakIsSUFBSSxDQUFDa0I7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQW1DRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUNELENBeENEOztLQUFNbkI7O0FBdUROLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1suLi5wb3N0SWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb3BCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL1RvcEJhcic7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFycy9TaWRlQmFyJztcclxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tbWVudExpc3QnO1xyXG5pbXBvcnQgTGlrZUljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JY29ucy9MaWtlSWNvbic7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ljb25zL0NvbW1lbnRJY29uJztcclxuaW1wb3J0IERpc0xpa2VJY29uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSWNvbnMvRGlzTGlrZUljb24nO1xyXG5pbXBvcnQgQm90dG9tQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFycy9Cb3R0b21CYXInO1xyXG5pbXBvcnQgc2hvd1N0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvU2hvdy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExheWVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFycy9MYXllcic7XHJcbmltcG9ydCBidWlsZENsaWVudCBmcm9tICcuLi8uLi9hcGkvYnVpbGQtY2xpZW50JztcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSWNvbnMvTW9yZUljb24nO1xyXG5cclxuY29uc3QgUG9zdFNob3cgPSAoeyBkYXRhOiB7IHBvc3QgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgPFNpZGVCYXIgLz5cclxuICAgICAgPExheWVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93U3R5bGVzLnNob3dXcmFwfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1N0eWxlcy5wb3N0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93U3R5bGVzLnBvc3RUb3B9PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD17cG9zdC50aXRsZX0gc3JjPXtgLyR7cG9zdC5zbHVnfS5qcGdgfSAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Nob3dTdHlsZXMudG9waWN9Pntgcy8ke3Bvc3QudG9waWN9YH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPnBvc3RlZCBieTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzaG93U3R5bGVzLm5hbWV9Pntwb3N0LnBvc3RlZEJ5LnVzZXJuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dTdHlsZXMucG9zdENvcmV9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzaG93U3R5bGVzLnRpdGxlfT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3Nob3dTdHlsZXMuY29udGVudH0+e3Bvc3QuY29udGVudH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzaG93U3R5bGVzLmltYWdlfSBzcmM9e3Bvc3QuY292ZXJJbWFnZX0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93U3R5bGVzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1N0eWxlcy5zaG93TGlrZXN9PlxyXG4gICAgICAgICAgICAgIDxMaWtlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntwb3N0Lmxpa2VzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPERpc0xpa2VJY29uIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1N0eWxlcy5jb21tZW50c30+XHJcbiAgICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzaG93U3R5bGVzLmNvdW50fT57cG9zdC5jb21tZW50cy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntwb3N0LmNvbW1lbnRzLmxlbmd0aCA9PT0gMSA/ICdDb21tZW50JyA6ICdDb21tZW50cyd9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8TW9yZUljb24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q29tbWVudExpc3QgY29tbWVudHM9e3Bvc3QuY29tbWVudHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Qm90dG9tQmFyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCB7IHBvc3RJZCB9ID0gY3R4LnF1ZXJ5O1xyXG4gIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGN0eCk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KGAvYXBpL3Bvc3RzLyR7cG9zdElkfWApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgcG9zdElkLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFNob3c7XHJcbiJdLCJuYW1lcyI6WyJUb3BCYXIiLCJTaWRlQmFyIiwiQ29tbWVudExpc3QiLCJMaWtlSWNvbiIsIkNvbW1lbnRJY29uIiwiRGlzTGlrZUljb24iLCJCb3R0b21CYXIiLCJzaG93U3R5bGVzIiwiTGF5ZXIiLCJNb3JlSWNvbiIsIlBvc3RTaG93IiwicG9zdCIsImRhdGEiLCJzaG93V3JhcCIsInBvc3RUb3AiLCJ0aXRsZSIsInNsdWciLCJ0b3BpYyIsIm5hbWUiLCJwb3N0ZWRCeSIsInVzZXJuYW1lIiwicG9zdENvcmUiLCJjb250ZW50IiwiaW1hZ2UiLCJjb3ZlckltYWdlIiwiYWN0aW9ucyIsInNob3dMaWtlcyIsImxpa2VzIiwibGVuZ3RoIiwiY29tbWVudHMiLCJjb3VudCJdLCJzb3VyY2VSb290IjoiIn0=