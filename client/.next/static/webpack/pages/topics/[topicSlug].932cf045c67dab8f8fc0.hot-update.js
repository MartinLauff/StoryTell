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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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
    _this = undefined,
    _s = $RefreshSig$();











var Post = function Post(_ref) {
  _s();

  var post = _ref.post;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      image = _useState[0],
      setImage = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (post.coverImage) {
      setImage(true);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().post),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/posts/[...postId]",
      as: "/posts/".concat(post._id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
        style: {
          textDecoration: 'none'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: " ".concat((_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postTop)),
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
              lineNumber: 24,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().topic),
              children: "s/".concat(post.topic)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().date),
            children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_8__.default)(new Date(post.createdAt), new Date(), {
              addSuffix: true
            }).replace('about', '').replace('less than', '')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().follow),
            children: "Follow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postContent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), !post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postBottom),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              style: {
                margin: '0 0.8rem'
              },
              children: post.likes.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              style: {
                marginLeft: '0.8rem'
              },
              children: "Comments"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, _this), post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().coverImage),
          src: post.coverImage,
          alt: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(Post, "avCXWS2kKvmqipJNDRk/AiUQ4q8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9waWNzL1t0b3BpY1NsdWddLjkzMmNmMDQ1YzY3ZGFiOGY4ZmMwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1TLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ3pCLGtCQUEwQlQsK0NBQVEsQ0FBQyxLQUFELENBQWxDO0FBQUEsTUFBT1UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0FWLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlRLElBQUksQ0FBQ0csVUFBVCxFQUFxQjtBQUNuQkQsTUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFVCxxRUFBaEI7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxvQkFBWDtBQUFnQyxRQUFFLG1CQUFZTyxJQUFJLENBQUNJLEdBQWpCLENBQWxDO0FBQUEsNkJBQ0U7QUFBRyxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsY0FBYyxFQUFFO0FBQWxCLFNBQVY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLGFBQU1aLHdFQUFOLENBQWQ7QUFBQSxrQ0FDRTtBQUFLLGlCQUFLLEVBQUU7QUFBRWMsY0FBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLGNBQUFBLFNBQVMsRUFBRTtBQUE5QixhQUFaO0FBQUEsb0NBQ0U7QUFDRSxtQkFBSyxFQUFFO0FBQUVDLGdCQUFBQSxXQUFXLEVBQUU7QUFBZixlQURUO0FBRUUsdUJBQVMsRUFBRWhCLHFFQUZiO0FBR0UsaUJBQUcsRUFBRU8sSUFBSSxDQUFDVyxLQUhaO0FBSUUsaUJBQUcsYUFBTVgsSUFBSSxDQUFDWSxJQUFYO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FO0FBQU0sdUJBQVMsRUFBRW5CLHNFQUFqQjtBQUFBLG9DQUF5Q08sSUFBSSxDQUFDYSxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBVUU7QUFBTSxxQkFBUyxFQUFFcEIscUVBQWpCO0FBQUEsc0JBQ0dDLGdFQUFjLENBQUMsSUFBSXFCLElBQUosQ0FBU2YsSUFBSSxDQUFDZ0IsU0FBZCxDQUFELEVBQTJCLElBQUlELElBQUosRUFBM0IsRUFBdUM7QUFDcERFLGNBQUFBLFNBQVMsRUFBRTtBQUR5QyxhQUF2QyxDQUFkLENBR0VDLE9BSEYsQ0FHVSxPQUhWLEVBR21CLEVBSG5CLEVBSUVBLE9BSkYsQ0FJVSxXQUpWLEVBSXVCLEVBSnZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQWlCRTtBQUFRLHFCQUFTLEVBQUV6Qix1RUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQW9CRTtBQUFLLG1CQUFTLEVBQUVBLDRFQUFoQjtBQUFBLGlDQUNFO0FBQUEsc0JBQUlPLElBQUksQ0FBQ1c7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQkYsRUF1QkcsQ0FBQ1gsSUFBSSxDQUFDRyxVQUFOLGlCQUNDO0FBQUssbUJBQVMsRUFBRVYsMkVBQWhCO0FBQUEsa0NBQ0U7QUFBQSxvQ0FDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBTSxtQkFBSyxFQUFFO0FBQUU2QixnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBYjtBQUFBLHdCQUFzQ3RCLElBQUksQ0FBQ3VCLEtBQUwsQ0FBV0M7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUU7QUFBQSxvQ0FDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBTSxtQkFBSyxFQUFFO0FBQUVDLGdCQUFBQSxVQUFVLEVBQUU7QUFBZCxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQVVFO0FBQUEsbUNBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCSixFQXVDR3pCLElBQUksQ0FBQ0csVUFBTCxpQkFDQztBQUNFLG1CQUFTLEVBQUVWLDJFQURiO0FBRUUsYUFBRyxFQUFFTyxJQUFJLENBQUNHLFVBRlo7QUFHRSxhQUFHLEVBQUVILElBQUksQ0FBQ1c7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcURELENBN0REOztHQUFNWjs7S0FBQUE7QUErRE4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBwb3N0U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Qb3N0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UnO1xyXG5pbXBvcnQgTGlrZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9MaWtlSWNvbic7XHJcbmltcG9ydCBEaXNMaWtlSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL0Rpc0xpa2VJY29uJztcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvQ29tbWVudEljb24nO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9Nb3JlSWNvbic7XHJcblxyXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwb3N0LmNvdmVySW1hZ2UpIHtcclxuICAgICAgc2V0SW1hZ2UodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdH0+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy9wb3N0cy9bLi4ucG9zdElkXScgYXM9e2AvcG9zdHMvJHtwb3N0Ll9pZH1gfT5cclxuICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AgJHtwb3N0U3R5bGVzLnBvc3RUb3B9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC41cmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvJHtwb3N0LnNsdWd9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMudG9waWN9Pntgcy8ke3Bvc3QudG9waWN9YH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKG5ldyBEYXRlKHBvc3QuY3JlYXRlZEF0KSwgbmV3IERhdGUoKSwge1xyXG4gICAgICAgICAgICAgICAgYWRkU3VmZml4OiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnYWJvdXQnLCAnJylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdsZXNzIHRoYW4nLCAnJyl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuZm9sbG93fT5Gb2xsb3c8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdENvbnRlbnR9PlxyXG4gICAgICAgICAgICA8cD57cG9zdC50aXRsZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHshcG9zdC5jb3ZlckltYWdlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdEJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaWtlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luOiAnMCAwLjhyZW0nIH19Pntwb3N0Lmxpa2VzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8RGlzTGlrZUljb24gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMC44cmVtJyB9fT5Db21tZW50czwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtwb3N0LmNvdmVySW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmNvdmVySW1hZ2V9XHJcbiAgICAgICAgICAgICAgc3JjPXtwb3N0LmNvdmVySW1hZ2V9XHJcbiAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicG9zdFN0eWxlcyIsImZvcm1hdERpc3RhbmNlIiwiTGlrZUljb24iLCJEaXNMaWtlSWNvbiIsIkNvbW1lbnRJY29uIiwiTW9yZUljb24iLCJQb3N0IiwicG9zdCIsImltYWdlIiwic2V0SW1hZ2UiLCJjb3ZlckltYWdlIiwiX2lkIiwidGV4dERlY29yYXRpb24iLCJwb3N0VG9wIiwiZGlzcGxheSIsImFsaWdJdGVtcyIsIm1hcmdpblJpZ2h0IiwiaWNvbiIsInRpdGxlIiwic2x1ZyIsInRvcGljIiwiZGF0ZSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJhZGRTdWZmaXgiLCJyZXBsYWNlIiwiZm9sbG93IiwicG9zdENvbnRlbnQiLCJwb3N0Qm90dG9tIiwibWFyZ2luIiwibGlrZXMiLCJsZW5ndGgiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==