"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[...postId]",{

/***/ "./components/bannerOptions/DeleteOption.js":
/*!**************************************************!*\
  !*** ./components/bannerOptions/DeleteOption.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/GlobalCtx */ \"./context/GlobalCtx.js\");\n/* harmony import */ var _bars_Layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bars/Layer */ \"./components/bars/Layer.js\");\n/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Components.module.css */ \"./styles/Components.module.css\");\n/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n/* harmony import */ var _Icons_DeleteIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icons/DeleteIcon */ \"./components/Icons/DeleteIcon.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar DeleteOption = function(param) {\n    var postID = param.postID, deleteOpt = param.deleteOpt;\n    _s();\n    var setSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__.GlobalContext).setSidebar;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), active = ref[0], setActive = ref[1];\n    var ref1 = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        url: \"http://localhost:8000/api/posts/\".concat(postID),\n        method: 'delete',\n        headers: {\n            Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('jwt')\n        },\n        onSuccess: function() {\n            return next_router__WEBPACK_IMPORTED_MODULE_7___default().push('/users/my-profile');\n        }\n    }), doRequest = ref1.doRequest, errors = ref1.errors;\n    var onClick = function() {\n        setActive(true);\n        deleteOpt(true);\n    };\n    var deletePost = function(e) {\n        e.preventDefault();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        onClick: onClick,\n        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerOption),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\bannerOptions\\\\DeleteOption.js\",\n            lineNumber: 28,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icons_DeleteIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\bannerOptions\\\\DeleteOption.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerText),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\bannerOptions\\\\DeleteOption.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Delete post\"\n            }),\n            errors,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_bars_Layer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                status: active,\n                setStatus: setActive,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\bannerOptions\\\\DeleteOption.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(DeleteOption, \"0rGp4A60ucX4vXz9Q1VoPjwuy/4=\", false, function() {\n    return [\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = DeleteOption;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteOption);\nvar _c;\n$RefreshReg$(_c, \"DeleteOption\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jhbm5lck9wdGlvbnMvRGVsZXRlT3B0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDVztBQUN0QjtBQUMrQjtBQUNqQztBQUNpQjtBQUNKO0FBQ1o7OztBQUVoQyxHQUFLLENBQUNTLFlBQVksR0FBRyxRQUFRLFFBQW1CLENBQUM7UUFBekJDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxTQUFTLFNBQVRBLFNBQVM7O0lBQ3ZDLEdBQUssQ0FBR0MsVUFBVSxHQUFLWCxpREFBVSxDQUFDQyw2REFBYSxFQUF2Q1UsVUFBVTtJQUNsQixHQUFLLENBQXVCWixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuQ2EsTUFBTSxHQUFlYixHQUFlLEtBQTVCYyxTQUFTLEdBQUlkLEdBQWU7SUFDM0MsR0FBSyxDQUF5Qk0sSUFLNUIsR0FMNEJBLDhEQUFVLENBQUMsQ0FBQztRQUN4Q1MsR0FBRyxFQUFHLENBQWdDLGtDQUFTLE9BQVBMLE1BQU07UUFDOUNNLE1BQU0sRUFBRSxDQUFRO1FBQ2hCQyxPQUFPLEVBQUUsQ0FBQztZQUFDQyxhQUFhLEVBQUUsQ0FBUyxXQUFHYixxREFBVyxDQUFDLENBQUs7UUFBRSxDQUFDO1FBQzFEZSxTQUFTLEVBQUUsUUFBUTtZQUFGWixNQUFNLENBQU5BLHVEQUFXLENBQUMsQ0FBbUI7O0lBQ2xELENBQUMsR0FMT2MsU0FBUyxHQUFhaEIsSUFLNUIsQ0FMTWdCLFNBQVMsRUFBRUMsTUFBTSxHQUFLakIsSUFLNUIsQ0FMaUJpQixNQUFNO0lBTXpCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ3JCVixTQUFTLENBQUMsSUFBSTtRQUNkSCxTQUFTLENBQUMsSUFBSTtJQUNoQixDQUFDO0lBRUQsR0FBSyxDQUFDYyxVQUFVLEdBQUcsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztRQUN6QkEsQ0FBQyxDQUFDQyxjQUFjO0lBQ2xCLENBQUM7SUFDRCxNQUFNLHVFQUNIQyxDQUFHO1FBQUNKLE9BQU8sRUFBRUEsT0FBTztRQUFFSyxTQUFTLEVBQUV6QixtRkFBNEI7Ozs7Ozs7O2lGQUMzREcseURBQVU7Ozs7Ozs7O2lGQUNWd0IsQ0FBSTtnQkFBQ0YsU0FBUyxFQUFFekIsaUZBQTBCOzs7Ozs7OzBCQUFFLENBQVc7O1lBQ3ZEbUIsTUFBTTtpRkFDTnBCLG1EQUFLO2dCQUFDOEIsTUFBTSxFQUFFcEIsTUFBTTtnQkFBRXFCLFNBQVMsRUFBRXBCLFNBQVM7Ozs7Ozs7Ozs7QUFHakQsQ0FBQztHQXpCS0wsWUFBWTs7UUFHY0gsMERBQVU7OztLQUhwQ0csWUFBWTtBQTJCbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Jhbm5lck9wdGlvbnMvRGVsZXRlT3B0aW9uLmpzPzUzMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L0dsb2JhbEN0eCc7XHJcbmltcG9ydCBMYXllciBmcm9tICcuLi9iYXJzL0xheWVyJztcclxuaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlcXVlc3QnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuLi9JY29ucy9EZWxldGVJY29uJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBEZWxldGVPcHRpb24gPSAoeyBwb3N0SUQsIGRlbGV0ZU9wdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBzZXRTaWRlYmFyIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBkb1JlcXVlc3QsIGVycm9ycyB9ID0gdXNlUmVxdWVzdCh7XHJcbiAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Bvc3RzLyR7cG9zdElEfWAsXHJcbiAgICBtZXRob2Q6ICdkZWxldGUnLFxyXG4gICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBDb29raWVzLmdldCgnand0JykgfSxcclxuICAgIG9uU3VjY2VzczogKCkgPT4gUm91dGVyLnB1c2goJy91c2Vycy9teS1wcm9maWxlJyksXHJcbiAgfSk7XHJcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSh0cnVlKTtcclxuICAgIGRlbGV0ZU9wdCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVQb3N0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJhbm5lck9wdGlvbn0+XHJcbiAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJhbm5lclRleHR9PkRlbGV0ZSBwb3N0PC9zcGFuPlxyXG4gICAgICB7ZXJyb3JzfVxyXG4gICAgICA8TGF5ZXIgc3RhdHVzPXthY3RpdmV9IHNldFN0YXR1cz17c2V0QWN0aXZlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZU9wdGlvbjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJMYXllciIsImNvbXBvbmVudFN0eWxlcyIsIkNvb2tpZXMiLCJ1c2VSZXF1ZXN0IiwiRGVsZXRlSWNvbiIsIlJvdXRlciIsIkRlbGV0ZU9wdGlvbiIsInBvc3RJRCIsImRlbGV0ZU9wdCIsInNldFNpZGViYXIiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldCIsIm9uU3VjY2VzcyIsInB1c2giLCJkb1JlcXVlc3QiLCJlcnJvcnMiLCJvbkNsaWNrIiwiZGVsZXRlUG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImJhbm5lck9wdGlvbiIsInNwYW4iLCJiYW5uZXJUZXh0Iiwic3RhdHVzIiwic2V0U3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/bannerOptions/DeleteOption.js\n");

/***/ })

});