"use strict";
self["webpackHotUpdate_N_E"]("pages/topics/[topicSlug]",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
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
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    style: !post.coverImage ? {
      border: '2px solid #000'
    } : null,
    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().post),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/posts/[...postId]",
      as: "/posts/".concat(post._id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
        style: {
          textDecoration: 'none'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: post.coverImage ? (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().imagePosition) : (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().textPosition),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            style: post.coverImage ? {
              paddingTop: '1.5rem'
            } : null,
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postTop),
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
                lineNumber: 32,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                style: post.coverImage ? whiteColor : blackColor,
                className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().topic),
                children: "s/".concat(post.topic)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              style: post.coverImage ? whiteColor : greyColor,
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().date),
              children: (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_8__.default)(new Date(post.createdAt), new Date(), {
                addSuffix: true
              }).replace('about', '').replace('less than', '')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              style: whiteColor,
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().follow),
              children: "Follow"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postContent),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              style: post.coverImage ? whiteColor : blackColor,
              children: post.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().text),
              children: [post.content.slice(0, 50), "..."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, _this), !post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postBottom),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_LikeIcon__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                style: _objectSpread({
                  margin: '0 0.8rem'
                }, greyColor),
                children: post.likes.length
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_DisLikeIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                style: _objectSpread({
                  marginLeft: '0.8rem'
                }, greyColor),
                children: "Comments"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), post.coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().coverImage),
          src: post.coverImage,
          alt: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9waWNzL1t0b3BpY1NsdWddLjc3MTYzOTk2NjkyN2RmZjI4ZjYwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU8sSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QixNQUFNQyxVQUFVLEdBQUc7QUFBRUMsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBbkI7QUFDQSxNQUFNQyxVQUFVLEdBQUc7QUFBRUQsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBbkI7QUFDQSxNQUFNRSxTQUFTLEdBQUc7QUFBRUYsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBbEI7QUFDQSxzQkFDRTtBQUNFLFNBQUssRUFBRSxDQUFDRixJQUFJLENBQUNLLFVBQU4sR0FBbUI7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FBbkIsR0FBa0QsSUFEM0Q7QUFFRSxhQUFTLEVBQUViLHFFQUZiO0FBQUEsMkJBSUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsb0JBQVg7QUFBZ0MsUUFBRSxtQkFBWU8sSUFBSSxDQUFDTyxHQUFqQixDQUFsQztBQUFBLDZCQUNFO0FBQUcsYUFBSyxFQUFFO0FBQUVDLFVBQUFBLGNBQWMsRUFBRTtBQUFsQixTQUFWO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUNQUixJQUFJLENBQUNLLFVBQUwsR0FDSVosOEVBREosR0FFSUEsNkVBSlI7QUFBQSxrQ0FPRTtBQUNFLGlCQUFLLEVBQUVPLElBQUksQ0FBQ0ssVUFBTCxHQUFrQjtBQUFFTSxjQUFBQSxVQUFVLEVBQUU7QUFBZCxhQUFsQixHQUE2QyxJQUR0RDtBQUVFLHFCQUFTLEVBQUVsQix3RUFGYjtBQUFBLG9DQUlFO0FBQUssbUJBQUssRUFBRTtBQUFFb0IsZ0JBQUFBLE9B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QUFBO0FBQUEscUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUF1RUdKLElBQUksQ0FBQ0ssVUFBTCxpQkFDQztBQUNFLG1CQUFTLEVBQUVaLDJFQURiO0FBRUUsYUFBRyxFQUFFTyxJQUFJLENBQUNLLFVBRlo7QUFHRSxhQUFHLEVBQUVMLElBQUksQ0FBQ2lCO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdGRCxDQTVGRDs7S0FBTWxCO0FBOEZOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcG9zdFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUG9zdC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlJztcclxuaW1wb3J0IExpa2VJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvTGlrZUljb24nO1xyXG5pbXBvcnQgRGlzTGlrZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9EaXNMaWtlSWNvbic7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL0NvbW1lbnRJY29uJztcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvTW9yZUljb24nO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGJsYWNrQ29sb3IgPSB7IGNvbG9yOiAnIzAwMCcgfTtcclxuICBjb25zdCB3aGl0ZUNvbG9yID0geyBjb2xvcjogJyNmZmYnIH07XHJcbiAgY29uc3QgZ3JleUNvbG9yID0geyBjb2xvcjogJyM4NzhhOGMnIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9eyFwb3N0LmNvdmVySW1hZ2UgPyB7IGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyB9IDogbnVsbH1cclxuICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3R9XHJcbiAgICA+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy9wb3N0cy9bLi4ucG9zdElkXScgYXM9e2AvcG9zdHMvJHtwb3N0Ll9pZH1gfT5cclxuICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHBvc3QuY292ZXJJbWFnZVxyXG4gICAgICAgICAgICAgICAgPyBwb3N0U3R5bGVzLmltYWdlUG9zaXRpb25cclxuICAgICAgICAgICAgICAgIDogcG9zdFN0eWxlcy50ZXh0UG9zaXRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3Bvc3QuY292ZXJJbWFnZSA/IHsgcGFkZGluZ1RvcDogJzEuNXJlbScgfSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RUb3B9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ0l0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcwLjVyZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YC8ke3Bvc3Quc2x1Z30uanBnYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17cG9zdC5jb3ZlckltYWdlID8gd2hpdGVDb2xvciA6IGJsYWNrQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy50b3BpY31cclxuICAgICAgICAgICAgICAgID57YHMvJHtwb3N0LnRvcGljfWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17cG9zdC5jb3ZlckltYWdlID8gd2hpdGVDb2xvciA6IGdyZXlDb2xvcn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5kYXRlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtmb3JtYXREaXN0YW5jZShuZXcgRGF0ZShwb3N0LmNyZWF0ZWRBdCksIG5ldyBEYXRlKCksIHtcclxuICAgICAgICAgICAgICAgICAgYWRkU3VmZml4OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2Fib3V0JywgJycpXHJcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdsZXNzIHRoYW4nLCAnJyl9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3doaXRlQ29sb3J9IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5mb2xsb3d9PlxyXG4gICAgICAgICAgICAgICAgRm9sbG93XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXtwb3N0LmNvdmVySW1hZ2UgPyB3aGl0ZUNvbG9yIDogYmxhY2tDb2xvcn0+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Bvc3QuY292ZXJJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cG9zdFN0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAge3Bvc3QuY29udGVudC5zbGljZSgwLCA1MCl9Li4uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHshcG9zdC5jb3ZlckltYWdlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0Qm90dG9tfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaWtlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW46ICcwIDAuOHJlbScsIC4uLmdyZXlDb2xvciB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5saWtlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPERpc0xpa2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMC44cmVtJywgLi4uZ3JleUNvbG9yIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3Bvc3QuY292ZXJJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuY292ZXJJbWFnZX1cclxuICAgICAgICAgICAgICBzcmM9e3Bvc3QuY292ZXJJbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwicG9zdFN0eWxlcyIsImZvcm1hdERpc3RhbmNlIiwiTGlrZUljb24iLCJEaXNMaWtlSWNvbiIsIkNvbW1lbnRJY29uIiwiTW9yZUljb24iLCJQb3N0IiwicG9zdCIsImJsYWNrQ29sb3IiLCJjb2xvciIsIndoaXRlQ29sb3IiLCJncmV5Q29sb3IiLCJjb3ZlckltYWdlIiwiYm9yZGVyIiwiX2lkIiwidGV4dERlY29yYXRpb24iLCJpbWFnZVBvc2l0aW9uIiwidGV4dFBvc2l0aW9uIiwicGFkZGluZ1RvcCIsInBvc3RUb3AiLCJkaXNwbGF5IiwiYWxpZ0l0ZW1zIiwibWFyZ2luUmlnaHQiLCJpY29uIiwidGl0bGUiLCJzbHVnIiwidG9waWMiLCJkYXRlIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImFkZFN1ZmZpeCIsInJlcGxhY2UiLCJmb2xsb3ciLCJwb3N0Q29udGVudCIsInRleHQiLCJjb250ZW50Iiwic2xpY2UiLCJwb3N0Qm90dG9tIiwibWFyZ2luIiwibGlrZXMiLCJsZW5ndGgiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==