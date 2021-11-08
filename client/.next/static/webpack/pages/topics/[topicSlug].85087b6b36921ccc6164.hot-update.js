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
  var whiteText = {
    color: '#fff'
  };
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
          style: image ? whiteText : null,
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
              lineNumber: 30,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().topic),
              children: "s/".concat(post.topic)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().date),
            children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_8__.default)(new Date(post.createdAt), new Date(), {
              addSuffix: true
            }).replace('about', '').replace('less than', '')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().follow),
            children: "Follow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postContent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), !post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postBottom),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              style: {
                margin: '0 0.8rem'
              },
              children: post.likes.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              style: {
                marginLeft: '0.8rem'
              },
              children: "Comments"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, _this), post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().coverImage),
          src: post.coverImage,
          alt: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9waWNzL1t0b3BpY1NsdWddLjg1MDg3YjZiMzY5MjFjY2M2MTY0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1TLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ3pCLGtCQUEwQlQsK0NBQVEsQ0FBQyxLQUFELENBQWxDO0FBQUEsTUFBT1UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0FWLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlRLElBQUksQ0FBQ0csVUFBVCxFQUFxQjtBQUNuQkQsTUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtBLE1BQU1FLFNBQVMsR0FBRztBQUNoQkMsSUFBQUEsS0FBSyxFQUFFO0FBRFMsR0FBbEI7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVoscUVBQWhCO0FBQUEsMkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsb0JBQVg7QUFBZ0MsUUFBRSxtQkFBWU8sSUFBSSxDQUFDTSxHQUFqQixDQUFsQztBQUFBLDZCQUNFO0FBQUcsYUFBSyxFQUFFO0FBQUVDLFVBQUFBLGNBQWMsRUFBRTtBQUFsQixTQUFWO0FBQUEsZ0NBQ0U7QUFDRSxlQUFLLEVBQUVOLEtBQUssR0FBR0csU0FBSCxHQUFlLElBRDdCO0FBRUUsbUJBQVMsYUFBTVgsd0VBQU4sQ0FGWDtBQUFBLGtDQUlFO0FBQUssaUJBQUssRUFBRTtBQUFFZ0IsY0FBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLGNBQUFBLFNBQVMsRUFBRTtBQUE5QixhQUFaO0FBQUEsb0NBQ0U7QUFDRSxtQkFBSyxFQUFFO0FBQUVDLGdCQUFBQSxXQUFXLEVBQUU7QUFBZixlQURUO0FBRUUsdUJBQVMsRUFBRWxCLHFFQUZiO0FBR0UsaUJBQUcsRUFBRU8sSUFBSSxDQUFDYSxLQUhaO0FBSUUsaUJBQUcsYUFBTWIsSUFBSSxDQUFDYyxJQUFYO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FO0FBQU0sdUJBQVMsRUFBRXJCLHNFQUFqQjtBQUFBLG9DQUF5Q08sSUFBSSxDQUFDZSxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBYUU7QUFBTSxxQkFBUyxFQUFFdEIscUVBQWpCO0FBQUEsc0JBQ0dDLGdFQUFjLENBQUMsSUFBSXVCLElBQUosQ0FBU2pCLElBQUksQ0FBQ2tCLFNBQWQsQ0FBRCxFQUEyQixJQUFJRCxJQUFKLEVBQTNCLEVBQXVDO0FBQ3BERSxjQUFBQSxTQUFTLEVBQUU7QUFEeUMsYUFBdkMsQ0FBZCxDQUdFQyxPQUhGLENBR1UsT0FIVixFQUdtQixFQUhuQixFQUlFQSxPQUpGLENBSVUsV0FKVixFQUl1QixFQUp2QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkYsZUFvQkU7QUFBUSxxQkFBUyxFQUFFM0IsdUVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUF1QkU7QUFBSyxtQkFBUyxFQUFFQSw0RUFBaEI7QUFBQSxpQ0FDRTtBQUFBLHNCQUFJTyxJQUFJLENBQUNhO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkJGLEVBMEJHLENBQUNiLElBQUksQ0FBQ0csVUFBTixpQkFDQztBQUFLLG1CQUFTLEVBQUVWLDJFQUFoQjtBQUFBLGtDQUNFO0FBQUEsb0NBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQU0sbUJBQUssRUFBRTtBQUFFK0IsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQWI7QUFBQSx3QkFBc0N4QixJQUFJLENBQUN5QixLQUFMLENBQVdDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FO0FBQUEsb0NBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQU0sbUJBQUssRUFBRTtBQUFFQyxnQkFBQUEsVUFBVSxFQUFFO0FBQWQsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFVRTtBQUFBLG1DQUNFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQkosRUEwQ0czQixJQUFJLENBQUNHLFVBQUwsaUJBQ0M7QUFDRSxtQkFBUyxFQUFFViwyRUFEYjtBQUVFLGFBQUcsRUFBRU8sSUFBSSxDQUFDRyxVQUZaO0FBR0UsYUFBRyxFQUFFSCxJQUFJLENBQUNhO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdERCxDQW5FRDs7R0FBTWQ7O0tBQUFBO0FBcUVOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcG9zdFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUG9zdC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlJztcclxuaW1wb3J0IExpa2VJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvTGlrZUljb24nO1xyXG5pbXBvcnQgRGlzTGlrZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9EaXNMaWtlSWNvbic7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL0NvbW1lbnRJY29uJztcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvTW9yZUljb24nO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocG9zdC5jb3ZlckltYWdlKSB7XHJcbiAgICAgIHNldEltYWdlKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBjb25zdCB3aGl0ZVRleHQgPSB7XHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0fT5cclxuICAgICAgPExpbmsgaHJlZj0nL3Bvc3RzL1suLi5wb3N0SWRdJyBhcz17YC9wb3N0cy8ke3Bvc3QuX2lkfWB9PlxyXG4gICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXtpbWFnZSA/IHdoaXRlVGV4dCA6IG51bGx9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke3Bvc3RTdHlsZXMucG9zdFRvcH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ0l0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzAuNXJlbScgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgLyR7cG9zdC5zbHVnfS5qcGdgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnRvcGljfT57YHMvJHtwb3N0LnRvcGljfWB9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgIHtmb3JtYXREaXN0YW5jZShuZXcgRGF0ZShwb3N0LmNyZWF0ZWRBdCksIG5ldyBEYXRlKCksIHtcclxuICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2Fib3V0JywgJycpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnbGVzcyB0aGFuJywgJycpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmZvbGxvd30+Rm9sbG93PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RDb250ZW50fT5cclxuICAgICAgICAgICAgPHA+e3Bvc3QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7IXBvc3QuY292ZXJJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RCb3R0b219PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGlrZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogJzAgMC44cmVtJyB9fT57cG9zdC5saWtlcy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPERpc0xpa2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuOHJlbScgfX0+Q29tbWVudHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxNb3JlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7cG9zdC5jb3ZlckltYWdlICYmIChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIHNyYz17cG9zdC5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInBvc3RTdHlsZXMiLCJmb3JtYXREaXN0YW5jZSIsIkxpa2VJY29uIiwiRGlzTGlrZUljb24iLCJDb21tZW50SWNvbiIsIk1vcmVJY29uIiwiUG9zdCIsInBvc3QiLCJpbWFnZSIsInNldEltYWdlIiwiY292ZXJJbWFnZSIsIndoaXRlVGV4dCIsImNvbG9yIiwiX2lkIiwidGV4dERlY29yYXRpb24iLCJwb3N0VG9wIiwiZGlzcGxheSIsImFsaWdJdGVtcyIsIm1hcmdpblJpZ2h0IiwiaWNvbiIsInRpdGxlIiwic2x1ZyIsInRvcGljIiwiZGF0ZSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJhZGRTdWZmaXgiLCJyZXBsYWNlIiwiZm9sbG93IiwicG9zdENvbnRlbnQiLCJwb3N0Qm90dG9tIiwibWFyZ2luIiwibGlrZXMiLCJsZW5ndGgiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==