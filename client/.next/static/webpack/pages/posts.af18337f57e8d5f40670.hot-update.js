"use strict";
self["webpackHotUpdate_N_E"]("pages/posts",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuYWYxODMzN2Y1N2U4ZDVmNDA2NzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU8sSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULDZDQUFNLENBQUNPLElBQUksQ0FBQ0csU0FBTixDQUFOLENBQXVCQyxPQUF2QixFQUFaO0FBQ0Esc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FBWjtBQUFrQyxhQUFTLEVBQUViLHFFQUE3QztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSx3RUFBaEI7QUFBQSw4QkFDRTtBQUFLLGFBQUssRUFBRTtBQUFFZSxVQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkMsVUFBQUEsU0FBUyxFQUFFO0FBQTlCLFNBQVo7QUFBQSxnQ0FDRTtBQUNFLGVBQUssRUFBRTtBQUFFQyxZQUFBQSxXQUFXLEVBQUU7QUFBZixXQURUO0FBRUUsbUJBQVMsRUFBRWpCLHFFQUZiO0FBR0UsYUFBRyxFQUFFUSxJQUFJLENBQUNXLEtBSFo7QUFJRSxhQUFHLGFBQU1YLElBQUksQ0FBQ1ksSUFBWDtBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFNLG1CQUFTLEVBQUVwQixzRUFBakI7QUFBQSxnQ0FBeUNRLElBQUksQ0FBQ2EsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBVUU7QUFBTSxpQkFBUyxFQUFFckIscUVBQWpCO0FBQUEsa0JBQ0dDLDZDQUFNLENBQUNPLElBQUksQ0FBQ0csU0FBTixDQUFOLENBQXVCQyxPQUF2QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRixlQWFFO0FBQVEsaUJBQVMsRUFBRVosdUVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFnQkU7QUFBSyxlQUFTLEVBQUVBLDRFQUFoQjtBQUFBLDZCQUNFO0FBQUEsa0JBQUlRLElBQUksQ0FBQ1c7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRixlQW1CRTtBQUFLLGVBQVMsRUFBRW5CLDJFQUFoQjtBQUFBLDhCQUNFO0FBQUEsZ0NBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sZUFBSyxFQUFFO0FBQUVhLFlBQUFBLE1BQU0sRUFBRTtBQUFWLFdBQWI7QUFBQSxvQkFBc0NMLElBQUksQ0FBQ2tCLEtBQUwsQ0FBV0M7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRTtBQUFBLGdDQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLGVBQUssRUFBRTtBQUFFQyxZQUFBQSxVQUFVLEVBQUU7QUFBZCxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBVUU7QUFBQSwrQkFDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRixFQWlDR3BCLElBQUksQ0FBQ3FCLFVBQUwsaUJBQW1CO0FBQUssU0FBRyxFQUFFckIsSUFBSSxDQUFDVztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ3RCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUNELENBdkNEOztLQUFNWjtBQXlDTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBvc3RTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Bvc3QubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XHJcbmltcG9ydCBMaWtlSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL0xpa2VJY29uJztcclxuaW1wb3J0IERpc0xpa2VJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvRGlzTGlrZUljb24nO1xyXG5pbXBvcnQgQ29tbWVudEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9Db21tZW50SWNvbic7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zL01vcmVJY29uJztcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhtb21lbnQocG9zdC5jcmVhdGVkQXQpLmZyb21Ob3coKSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMXJlbSAwJyB9fSBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLnBvc3RUb3B9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzAuNXJlbScgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmljb259XHJcbiAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgc3JjPXtgLyR7cG9zdC5zbHVnfS5qcGdgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cG9zdFN0eWxlcy50b3BpY30+e2BzLyR7cG9zdC50b3BpY31gfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICB7bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtwb3N0U3R5bGVzLmZvbGxvd30+Rm9sbG93PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlcy5wb3N0Q29udGVudH0+XHJcbiAgICAgICAgPHA+e3Bvc3QudGl0bGV9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZXMucG9zdEJvdHRvbX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMaWtlSWNvbiAvPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luOiAnMCAwLjhyZW0nIH19Pntwb3N0Lmxpa2VzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICA8RGlzTGlrZUljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMC44cmVtJyB9fT5Db21tZW50czwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cG9zdC5jb3ZlckltYWdlICYmIDxpbWcgYWx0PXtwb3N0LnRpdGxlfSAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwibmFtZXMiOlsicG9zdFN0eWxlcyIsIm1vbWVudCIsIkRhdGVUaW1lIiwiTGlrZUljb24iLCJEaXNMaWtlSWNvbiIsIkNvbW1lbnRJY29uIiwiTW9yZUljb24iLCJQb3N0IiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVkQXQiLCJmcm9tTm93IiwibWFyZ2luIiwicG9zdFRvcCIsImRpc3BsYXkiLCJhbGlnSXRlbXMiLCJtYXJnaW5SaWdodCIsImljb24iLCJ0aXRsZSIsInNsdWciLCJ0b3BpYyIsImRhdGUiLCJmb2xsb3ciLCJwb3N0Q29udGVudCIsInBvc3RCb3R0b20iLCJsaWtlcyIsImxlbmd0aCIsIm1hcmdpbkxlZnQiLCJjb3ZlckltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==