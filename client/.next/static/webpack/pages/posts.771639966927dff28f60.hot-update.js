"use strict";
self["webpackHotUpdate_N_E"]("pages/posts",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuNzcxNjM5OTY2OTI3ZGZmMjhmNjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLE1BQU1DLFVBQVUsR0FBRztBQUFFQyxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFuQjtBQUNBLE1BQU1DLFVBQVUsR0FBRztBQUFFRCxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFuQjtBQUNBLE1BQU1FLFNBQVMsR0FBRztBQUFFRixJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFsQjtBQUNBLHNCQUNFO0FBQ0UsU0FBSyxFQUFFLENBQUNGLElBQUksQ0FBQ0ssVUFBTixHQUFtQjtBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBVixLQUFuQixHQUFrRCxJQUQzRDtBQUVFLGFBQVMsRUFBRWIscUVBRmI7QUFBQSwyQkFJRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxvQkFBWDtBQUFnQyxRQUFFLG1CQUFZTyxJQUFJLENBQUNPLEdBQWpCLENBQWxDO0FBQUEsNkJBQ0U7QUFBRyxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsY0FBYyxFQUFFO0FBQWxCLFNBQVY7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQ1BSLElBQUksQ0FBQ0ssVUFBTCxHQUNJWiw4RUFESixHQUVJQSw2RUFKUjtBQUFBLGtDQU9FO0FBQ0UsaUJBQUssRUFBRU8sSUFBSSxDQUFDSyxVQUFMLEdBQWtCO0FBQUVNLGNBQUFBLFVBQVUsRUFBRTtBQUFkLGFBQWxCLEdBQTZDLElBRHREO0FBRUUscUJBQVMsRUFBRWxCLHdFQUZiO0FBQUEsb0NBSUU7QUFBSyxtQkFBSyxFQUFFO0FBQUVvQixnQkFBQUEsT0FBTyxFQUFFLE1BQVg7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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQXVFR0osSUFBSSxDQUFDSyxVQUFMLGlCQUNDO0FBQ0UsbUJBQVMsRUFBRVosMkVBRGI7QUFFRSxhQUFHLEVBQUVPLElBQUksQ0FBQ0ssVUFGWjtBQUdFLGFBQUcsRUFBRUwsSUFBSSxDQUFDaUI7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0ZELENBNUZEOztLQUFNbEI7QUE4Rk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBwb3N0U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Qb3N0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UnO1xyXG5pbXBvcnQgTGlrZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9MaWtlSWNvbic7XHJcbmltcG9ydCBEaXNMaWtlSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL0Rpc0xpa2VJY29uJztcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvQ29tbWVudEljb24nO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9Nb3JlSWNvbic7XHJcblxyXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgYmxhY2tDb2xvciA9IHsgY29sb3I6ICcjMDAwJyB9O1xyXG4gIGNvbnN0IHdoaXRlQ29sb3IgPSB7IGNvbG9yOiAnI2ZmZicgfTtcclxuICBjb25zdCBncmV5Q29sb3IgPSB7IGNvbG9yOiAnIzg3OGE4YycgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17IXBvc3QuY292ZXJJbWFnZSA/IHsgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnIH0gOiBudWxsfVxyXG4gICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdH1cclxuICAgID5cclxuICAgICAgPExpbmsgaHJlZj0nL3Bvc3RzL1suLi5wb3N0SWRdJyBhcz17YC9wb3N0cy8ke3Bvc3QuX2lkfWB9PlxyXG4gICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgcG9zdC5jb3ZlckltYWdlXHJcbiAgICAgICAgICAgICAgICA/IHBvc3RTdHlsZXMuaW1hZ2VQb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgOiBwb3N0U3R5bGVzLnRleHRQb3NpdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17cG9zdC5jb3ZlckltYWdlID8geyBwYWRkaW5nVG9wOiAnMS41cmVtJyB9IDogbnVsbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdFRvcH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzAuNXJlbScgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtgLyR7cG9zdC5zbHVnfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtwb3N0LmNvdmVySW1hZ2UgPyB3aGl0ZUNvbG9yIDogYmxhY2tDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnRvcGljfVxyXG4gICAgICAgICAgICAgICAgPntgcy8ke3Bvc3QudG9waWN9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtwb3N0LmNvdmVySW1hZ2UgPyB3aGl0ZUNvbG9yIDogZ3JleUNvbG9yfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmRhdGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKG5ldyBEYXRlKHBvc3QuY3JlYXRlZEF0KSwgbmV3IERhdGUoKSwge1xyXG4gICAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgnYWJvdXQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2xlc3MgdGhhbicsICcnKX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17d2hpdGVDb2xvcn0gY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmZvbGxvd30+XHJcbiAgICAgICAgICAgICAgICBGb2xsb3dcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RDb250ZW50fT5cclxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3Bvc3QuY292ZXJJbWFnZSA/IHdoaXRlQ29sb3IgOiBibGFja0NvbG9yfT5cclxuICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cG9zdC5jb3ZlckltYWdlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICB7cG9zdC5jb250ZW50LnNsaWNlKDAsIDUwKX0uLi5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyFwb3N0LmNvdmVySW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RCb3R0b219PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPExpa2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogJzAgMC44cmVtJywgLi4uZ3JleUNvbG9yIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0Lmxpa2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8RGlzTGlrZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjhyZW0nLCAuLi5ncmV5Q29sb3IgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbWVudHNcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TW9yZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cG9zdC5jb3ZlckltYWdlICYmIChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9zdFN0eWxlcy5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIHNyYz17cG9zdC5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJwb3N0U3R5bGVzIiwiZm9ybWF0RGlzdGFuY2UiLCJMaWtlSWNvbiIsIkRpc0xpa2VJY29uIiwiQ29tbWVudEljb24iLCJNb3JlSWNvbiIsIlBvc3QiLCJwb3N0IiwiYmxhY2tDb2xvciIsImNvbG9yIiwid2hpdGVDb2xvciIsImdyZXlDb2xvciIsImNvdmVySW1hZ2UiLCJib3JkZXIiLCJfaWQiLCJ0ZXh0RGVjb3JhdGlvbiIsImltYWdlUG9zaXRpb24iLCJ0ZXh0UG9zaXRpb24iLCJwYWRkaW5nVG9wIiwicG9zdFRvcCIsImRpc3BsYXkiLCJhbGlnSXRlbXMiLCJtYXJnaW5SaWdodCIsImljb24iLCJ0aXRsZSIsInNsdWciLCJ0b3BpYyIsImRhdGUiLCJEYXRlIiwiY3JlYXRlZEF0IiwiYWRkU3VmZml4IiwicmVwbGFjZSIsImZvbGxvdyIsInBvc3RDb250ZW50IiwidGV4dCIsImNvbnRlbnQiLCJzbGljZSIsInBvc3RCb3R0b20iLCJtYXJnaW4iLCJsaWtlcyIsImxlbmd0aCIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9