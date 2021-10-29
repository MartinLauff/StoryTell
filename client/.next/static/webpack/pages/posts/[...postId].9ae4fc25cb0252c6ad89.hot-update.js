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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().actions),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().showLikes),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
              children: post.likes.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().comments),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
              className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_10___default().count),
              children: post.comments.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
              children: post.comments.length === 1 ? 'Comment' : 'Comments'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_CommentList__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvWy4uLnBvc3RJZF0uOWFlNGZjMjVjYjAyNTJjNmFkODkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsSUFBTVUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBd0I7QUFBQSxNQUFiQyxJQUFhLFFBQXJCQyxJQUFxQixDQUFiRCxJQUFhO0FBQ3ZDLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBSyxlQUFTLEVBQUVKLDBFQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsc0VBQWhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQSx5RUFBaEI7QUFBQSxrQ0FDRTtBQUFLLGVBQUcsRUFBRUksSUFBSSxDQUFDSSxLQUFmO0FBQXNCLGVBQUcsYUFBTUosSUFBSSxDQUFDSyxJQUFYO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLHFCQUFTLEVBQUVULHVFQUFqQjtBQUFBLGtDQUF5Q0ksSUFBSSxDQUFDTSxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQU0scUJBQVMsRUFBRVYsc0VBQWpCO0FBQUEsc0JBQW1DSSxJQUFJLENBQUNRLFFBQUwsQ0FBY0M7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFLLG1CQUFTLEVBQUViLDBFQUFoQjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBRUEsdUVBQWY7QUFBQSxzQkFBa0NJLElBQUksQ0FBQ0k7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUcscUJBQVMsRUFBRVIseUVBQWQ7QUFBQSxzQkFBbUNJLElBQUksQ0FBQ1c7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFXRTtBQUFLLG1CQUFTLEVBQUVmLHlFQUFoQjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRUEsMkVBQWhCO0FBQUEsb0NBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsd0JBQU9JLElBQUksQ0FBQ2MsS0FBTCxDQUFXQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRTtBQUFLLHFCQUFTLEVBQUVuQiwwRUFBaEI7QUFBQSxvQ0FDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBTSx1QkFBUyxFQUFFQSx1RUFBakI7QUFBQSx3QkFBb0NJLElBQUksQ0FBQ2dCLFFBQUwsQ0FBY0Q7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUEsd0JBQU9mLElBQUksQ0FBQ2dCLFFBQUwsQ0FBY0QsTUFBZCxLQUF5QixDQUF6QixHQUE2QixTQUE3QixHQUF5QztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQVdFO0FBQUEsbUNBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBNEJFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFrQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNDRCxDQXZDRDs7S0FBTWhCOztBQXNETiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9bLi4ucG9zdElkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9wQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFycy9Ub3BCYXInO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhcnMvU2lkZUJhcic7XHJcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0JztcclxuaW1wb3J0IExpa2VJY29uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSWNvbnMvTGlrZUljb24nO1xyXG5pbXBvcnQgQ29tbWVudEljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JY29ucy9Db21tZW50SWNvbic7XHJcbmltcG9ydCBEaXNMaWtlSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ljb25zL0Rpc0xpa2VJY29uJztcclxuaW1wb3J0IEJvdHRvbUJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhcnMvQm90dG9tQmFyJztcclxuaW1wb3J0IHNob3dTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1Nob3cubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMYXllciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhcnMvTGF5ZXInO1xyXG5pbXBvcnQgYnVpbGRDbGllbnQgZnJvbSAnLi4vLi4vYXBpL2J1aWxkLWNsaWVudCc7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ljb25zL01vcmVJY29uJztcclxuXHJcbmNvbnN0IFBvc3RTaG93ID0gKHsgZGF0YTogeyBwb3N0IH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8VG9wQmFyIC8+XHJcbiAgICAgIDxTaWRlQmFyIC8+XHJcbiAgICAgIDxMYXllciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1N0eWxlcy5zaG93V3JhcH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dTdHlsZXMucG9zdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1N0eWxlcy5wb3N0VG9wfT5cclxuICAgICAgICAgICAgPGltZyBhbHQ9e3Bvc3QudGl0bGV9IHNyYz17YC8ke3Bvc3Quc2x1Z30uanBnYH0gLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzaG93U3R5bGVzLnRvcGljfT57YHMvJHtwb3N0LnRvcGljfWB9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5wb3N0ZWQgYnk8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c2hvd1N0eWxlcy5uYW1lfT57cG9zdC5wb3N0ZWRCeS51c2VybmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93U3R5bGVzLnBvc3RDb3JlfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c2hvd1N0eWxlcy50aXRsZX0+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzaG93U3R5bGVzLmNvbnRlbnR9Pntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1N0eWxlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dTdHlsZXMuc2hvd0xpa2VzfT5cclxuICAgICAgICAgICAgICA8TGlrZUljb24gLz5cclxuICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5saWtlcy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxEaXNMaWtlSWNvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dTdHlsZXMuY29tbWVudHN9PlxyXG4gICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c2hvd1N0eWxlcy5jb3VudH0+e3Bvc3QuY29tbWVudHMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5jb21tZW50cy5sZW5ndGggPT09IDEgPyAnQ29tbWVudCcgOiAnQ29tbWVudHMnfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENvbW1lbnRMaXN0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Qm90dG9tQmFyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCB7IHBvc3RJZCB9ID0gY3R4LnF1ZXJ5O1xyXG4gIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGN0eCk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KGAvYXBpL3Bvc3RzLyR7cG9zdElkfWApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgcG9zdElkLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFNob3c7XHJcbiJdLCJuYW1lcyI6WyJUb3BCYXIiLCJTaWRlQmFyIiwiQ29tbWVudExpc3QiLCJMaWtlSWNvbiIsIkNvbW1lbnRJY29uIiwiRGlzTGlrZUljb24iLCJCb3R0b21CYXIiLCJzaG93U3R5bGVzIiwiTGF5ZXIiLCJNb3JlSWNvbiIsIlBvc3RTaG93IiwicG9zdCIsImRhdGEiLCJzaG93V3JhcCIsInBvc3RUb3AiLCJ0aXRsZSIsInNsdWciLCJ0b3BpYyIsIm5hbWUiLCJwb3N0ZWRCeSIsInVzZXJuYW1lIiwicG9zdENvcmUiLCJjb250ZW50IiwiYWN0aW9ucyIsInNob3dMaWtlcyIsImxpa2VzIiwibGVuZ3RoIiwiY29tbWVudHMiLCJjb3VudCJdLCJzb3VyY2VSb290IjoiIn0=