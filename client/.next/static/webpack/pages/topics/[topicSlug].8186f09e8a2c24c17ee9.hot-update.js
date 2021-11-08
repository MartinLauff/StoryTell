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
  var blackColor = {
    color: '#000'
  };
  var whiteColor = {
    color: '#fff'
  };
  var greyColor = {
    color: '#878a8c'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    style: !post.coverImage ? {
      border: '2px solid #000'
    } : null,
    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().post),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/posts/[...postId]",
      as: "/posts/".concat(post._id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        style: {
          textDecoration: 'none'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: post.coverImage ? (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().imagePosition) : '',
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            style: post.coverImage ? {
              paddingTop: '1.5rem'
            } : null,
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
                lineNumber: 26,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                style: post.coverImage ? whiteColor : blackColor,
                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().topic),
                children: "s/".concat(post.topic)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              style: post.coverImage ? whiteColor : greyColor,
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().date),
              children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_7__.default)(new Date(post.createdAt), new Date(), {
                addSuffix: true
              }).replace('about', '').replace('less than', '')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().follow),
              children: "Follow"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().postContent),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h2", {
              children: post.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().text),
              children: post.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), !post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().postBottom),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              style: {
                margin: '0 0.8rem'
              },
              children: post.likes.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              style: {
                marginLeft: '0.8rem'
              },
              children: "Comments"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, _this), post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().coverImage),
          src: post.coverImage,
          alt: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9waWNzL1t0b3BpY1NsdWddLjgxODZmMDllOGEyYzI0YzE3ZWU5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLE1BQU1DLFVBQVUsR0FBRztBQUFFQyxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFuQjtBQUNBLE1BQU1DLFVBQVUsR0FBRztBQUFFRCxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFuQjtBQUNBLE1BQU1FLFNBQVMsR0FBRztBQUFFRixJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFsQjtBQUNBLHNCQUNFO0FBQ0UsU0FBSyxFQUFFLENBQUNGLElBQUksQ0FBQ0ssVUFBTixHQUFtQjtBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBVixLQUFuQixHQUFrRCxJQUQzRDtBQUVFLGFBQVMsRUFBRWIscUVBRmI7QUFBQSwyQkFJRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxvQkFBWDtBQUFnQyxRQUFFLG1CQUFZTyxJQUFJLENBQUNPLEdBQWpCLENBQWxDO0FBQUEsNkJBQ0U7QUFBRyxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsY0FBYyxFQUFFO0FBQWxCLFNBQVY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVSLElBQUksQ0FBQ0ssVUFBTCxHQUFrQlosOEVBQWxCLEdBQTZDLEVBQTdEO0FBQUEsa0NBQ0U7QUFDRSxpQkFBSyxFQUFFTyxJQUFJLENBQUNLLFVBQUwsR0FBa0I7QUFBRUssY0FBQUEsVUFBVSxFQUFFO0FBQWQsYUFBbEIsR0FBNkMsSUFEdEQ7QUFFRSxxQkFBUyxFQUFFakIsd0VBRmI7QUFBQSxvQ0FJRTtBQUFLLG1CQUFLLEVBQUU7QUFBRW1CLGdCQUFBQSxPQUFPLEVB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QUFJLENBQUNLLFVBRlo7QUFHRSxhQUFHLEVBQUVMLElBQUksQ0FBQ2dCO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdFRCxDQTVFRDs7S0FBTWpCO0FBOEVOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcG9zdFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUG9zdC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlJztcclxuaW1wb3J0IExpa2VJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvTGlrZUljb24nO1xyXG5pbXBvcnQgRGlzTGlrZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9EaXNMaWtlSWNvbic7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL0NvbW1lbnRJY29uJztcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvTW9yZUljb24nO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGJsYWNrQ29sb3IgPSB7IGNvbG9yOiAnIzAwMCcgfTtcclxuICBjb25zdCB3aGl0ZUNvbG9yID0geyBjb2xvcjogJyNmZmYnIH07XHJcbiAgY29uc3QgZ3JleUNvbG9yID0geyBjb2xvcjogJyM4NzhhOGMnIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9eyFwb3N0LmNvdmVySW1hZ2UgPyB7IGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyB9IDogbnVsbH1cclxuICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3R9XHJcbiAgICA+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy9wb3N0cy9bLi4ucG9zdElkXScgYXM9e2AvcG9zdHMvJHtwb3N0Ll9pZH1gfT5cclxuICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3QuY292ZXJJbWFnZSA/IHBvc3RTdHlsZXMuaW1hZ2VQb3NpdGlvbiA6ICcnfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtwb3N0LmNvdmVySW1hZ2UgPyB7IHBhZGRpbmdUb3A6ICcxLjVyZW0nIH0gOiBudWxsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0VG9wfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWdJdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC41cmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2AvJHtwb3N0LnNsdWd9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3Bvc3QuY292ZXJJbWFnZSA/IHdoaXRlQ29sb3IgOiBibGFja0NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMudG9waWN9XHJcbiAgICAgICAgICAgICAgICA+e2BzLyR7cG9zdC50b3BpY31gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3Bvc3QuY292ZXJJbWFnZSA/IHdoaXRlQ29sb3IgOiBncmV5Q29sb3J9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuZGF0ZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2UobmV3IERhdGUocG9zdC5jcmVhdGVkQXQpLCBuZXcgRGF0ZSgpLCB7XHJcbiAgICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdhYm91dCcsICcnKVxyXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgnbGVzcyB0aGFuJywgJycpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5mb2xsb3d9PkZvbGxvdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIDxoMj57cG9zdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Bvc3QuY292ZXJJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cG9zdFN0eWxlcy50ZXh0fT57cG9zdC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgeyFwb3N0LmNvdmVySW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0Qm90dG9tfT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpa2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW46ICcwIDAuOHJlbScgfX0+e3Bvc3QubGlrZXMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxEaXNMaWtlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjhyZW0nIH19PkNvbW1lbnRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TW9yZUljb24gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3Bvc3QuY292ZXJJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuY292ZXJJbWFnZX1cclxuICAgICAgICAgICAgICBzcmM9e3Bvc3QuY292ZXJJbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwicG9zdFN0eWxlcyIsImZvcm1hdERpc3RhbmNlIiwiTGlrZUljb24iLCJEaXNMaWtlSWNvbiIsIkNvbW1lbnRJY29uIiwiTW9yZUljb24iLCJQb3N0IiwicG9zdCIsImJsYWNrQ29sb3IiLCJjb2xvciIsIndoaXRlQ29sb3IiLCJncmV5Q29sb3IiLCJjb3ZlckltYWdlIiwiYm9yZGVyIiwiX2lkIiwidGV4dERlY29yYXRpb24iLCJpbWFnZVBvc2l0aW9uIiwicGFkZGluZ1RvcCIsInBvc3RUb3AiLCJkaXNwbGF5IiwiYWxpZ0l0ZW1zIiwibWFyZ2luUmlnaHQiLCJpY29uIiwidGl0bGUiLCJzbHVnIiwidG9waWMiLCJkYXRlIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImFkZFN1ZmZpeCIsInJlcGxhY2UiLCJmb2xsb3ciLCJwb3N0Q29udGVudCIsInRleHQiLCJjb250ZW50IiwicG9zdEJvdHRvbSIsIm1hcmdpbiIsImxpa2VzIiwibGVuZ3RoIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=