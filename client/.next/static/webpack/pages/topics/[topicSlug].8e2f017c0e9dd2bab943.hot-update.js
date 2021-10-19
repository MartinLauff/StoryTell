"use strict";
self["webpackHotUpdate_N_E"]("pages/topics/[topicSlug]",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Post.module.css */ "./styles/Post.module.css");
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Icons/LikeIcon */ "./components/Icons/LikeIcon.js");
/* harmony import */ var _components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Icons/DisLikeIcon */ "./components/Icons/DisLikeIcon.js");
/* harmony import */ var _components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Icons/CommentIcon */ "./components/Icons/CommentIcon.js");
/* harmony import */ var _components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Icons/MoreIcon */ "./components/Icons/MoreIcon.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\Post.js",
    _this = undefined;









var Post = function Post(_ref) {
  var post = _ref.post;
  var f = new Intl.DateTimeFormat('en');
  var a = f.formatToParts();
  console.log(a);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    style: {
      margin: '1rem 0'
    },
    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().post),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().postTop),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        style: {
          display: 'flex',
          aligItems: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
          style: {
            marginRight: '0.5rem'
          },
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),
          alt: post.title,
          src: "/".concat(post.slug, ".jpg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().topic),
          children: "s/".concat(post.topic)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().date),
        children: "5 min ago"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().follow),
        children: "Follow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().postContent),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default().postBottom),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          style: {
            margin: '0 0.8rem'
          },
          children: post.likes.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          style: {
            marginLeft: '0.8rem'
          },
          children: "Comments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
      alt: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 27
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9waWNzL1t0b3BpY1NsdWddLjhlMmYwMTdjMGU5ZGQyYmFiOTQzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QixNQUFJQyxDQUFDLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxjQUFULENBQXdCLElBQXhCLENBQVI7QUFDQSxNQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksYUFBRixFQUFSO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFaO0FBQ0Esc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUksTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FBWjtBQUFrQyxhQUFTLEVBQUVmLHFFQUE3QztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSx3RUFBaEI7QUFBQSw4QkFDRTtBQUFLLGFBQUssRUFBRTtBQUFFaUIsVUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLFVBQUFBLFNBQVMsRUFBRTtBQUE5QixTQUFaO0FBQUEsZ0NBQ0U7QUFDRSxlQUFLLEVBQUU7QUFBRUMsWUFBQUEsV0FBVyxFQUFFO0FBQWYsV0FEVDtBQUVFLG1CQUFTLEVBQUVuQixxRUFGYjtBQUdFLGFBQUcsRUFBRU8sSUFBSSxDQUFDYyxLQUhaO0FBSUUsYUFBRyxhQUFNZCxJQUFJLENBQUNlLElBQVg7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBTSxtQkFBUyxFQUFFdEIsc0VBQWpCO0FBQUEsZ0NBQXlDTyxJQUFJLENBQUNnQixLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRTtBQUFNLGlCQUFTLEVBQUV2QixxRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRixlQVdFO0FBQVEsaUJBQVMsRUFBRUEsdUVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFjRTtBQUFLLGVBQVMsRUFBRUEsNEVBQWhCO0FBQUEsNkJBQ0U7QUFBQSxrQkFBSU8sSUFBSSxDQUFDYztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEYsZUFpQkU7QUFBSyxlQUFTLEVBQUVyQiwyRUFBaEI7QUFBQSw4QkFDRTtBQUFBLGdDQUNFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLGVBQUssRUFBRTtBQUFFZSxZQUFBQSxNQUFNLEVBQUU7QUFBVixXQUFiO0FBQUEsb0JBQXNDUixJQUFJLENBQUNxQixLQUFMLENBQVdDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBQSxnQ0FDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxlQUFLLEVBQUU7QUFBRUMsWUFBQUEsVUFBVSxFQUFFO0FBQWQsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQVVFO0FBQUEsK0JBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkYsRUErQkd2QixJQUFJLENBQUN3QixVQUFMLGlCQUFtQjtBQUFLLFNBQUcsRUFBRXhCLElBQUksQ0FBQ2M7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0J0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1DRCxDQXZDRDs7S0FBTWY7QUF5Q04sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb3N0U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Qb3N0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcclxuaW1wb3J0IExpa2VJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvTGlrZUljb24nO1xyXG5pbXBvcnQgRGlzTGlrZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9EaXNMaWtlSWNvbic7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL0NvbW1lbnRJY29uJztcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvTW9yZUljb24nO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGxldCBmID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuJyk7XHJcbiAgbGV0IGEgPSBmLmZvcm1hdFRvUGFydHMoKTtcclxuICBjb25zb2xlLmxvZyhhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxcmVtIDAnIH19IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdFRvcH0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWdJdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC41cmVtJyB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICBzcmM9e2AvJHtwb3N0LnNsdWd9LmpwZ2B9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnRvcGljfT57YHMvJHtwb3N0LnRvcGljfWB9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5kYXRlfT41IG1pbiBhZ288L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuZm9sbG93fT5Gb2xsb3c8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RDb250ZW50fT5cclxuICAgICAgICA8cD57cG9zdC50aXRsZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0Qm90dG9tfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpa2VJY29uIC8+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW46ICcwIDAuOHJlbScgfX0+e3Bvc3QubGlrZXMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgIDxEaXNMaWtlSWNvbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjhyZW0nIH19PkNvbW1lbnRzPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TW9yZUljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwb3N0LmNvdmVySW1hZ2UgJiYgPGltZyBhbHQ9e3Bvc3QudGl0bGV9IC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJwb3N0U3R5bGVzIiwiRGF0ZVRpbWUiLCJMaWtlSWNvbiIsIkRpc0xpa2VJY29uIiwiQ29tbWVudEljb24iLCJNb3JlSWNvbiIsIlBvc3QiLCJwb3N0IiwiZiIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsImEiLCJmb3JtYXRUb1BhcnRzIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbiIsInBvc3RUb3AiLCJkaXNwbGF5IiwiYWxpZ0l0ZW1zIiwibWFyZ2luUmlnaHQiLCJpY29uIiwidGl0bGUiLCJzbHVnIiwidG9waWMiLCJkYXRlIiwiZm9sbG93IiwicG9zdENvbnRlbnQiLCJwb3N0Qm90dG9tIiwibGlrZXMiLCJsZW5ndGgiLCJtYXJnaW5MZWZ0IiwiY292ZXJJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=