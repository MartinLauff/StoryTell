"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/notifications",{

/***/ "./components/lists/ActivityList.js":
/*!******************************************!*\
  !*** ./components/lists/ActivityList.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _items_Activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items/Activity */ \"./components/items/Activity.js\");\n/* harmony import */ var _styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Activity.module.css */ \"./styles/Activity.module.css\");\n/* harmony import */ var _styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar ActivityList = function(param) {\n    var nextPage = param.nextPage, request = param.request, activities = param.activities;\n    // const [acsData, setAcsData] = useState([]);\n    // if (!activities.data || activities.data.length === 0) {\n    //   return (\n    //     <div className={activityStyles.noActivities}>\n    //       When a user likes your posts, comments on your posts or starts following\n    //       you. We will get you notified here 🔥 👍 👌\n    //     </div>\n    //   );\n    // }\n    // useEffect(() => {\n    //   setAcsData((oldState) => [...oldState, activities]);\n    //   console.log(activities);\n    // }, []);\n    // const doo = async () => {\n    //   nextPage((oldState) => oldState + 1);\n    //   const res = await request();\n    //   if (res) {\n    //     setAcsData((oldState) => [...oldState, res]);\n    //   }\n    // };\n    // const renderedList = acsData.data.map((activity) => (\n    //   <Activity key={activity._id} activity={activity} />\n    // ));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_3___default().activityList),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n            lineNumber: 35,\n            columnNumber: 5\n        },\n        __self: _this\n    }));\n};\n_c = ActivityList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActivityList);\nvar _c;\n$RefreshReg$(_c, \"ActivityList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpc3RzL0FjdGl2aXR5TGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ0g7QUFDcUI7O0FBRTdELEdBQUssQ0FBQ0ksWUFBWSxHQUFHLFFBQVEsUUFBK0IsQ0FBQztRQUFyQ0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxVQUFVLFNBQVZBLFVBQVU7SUFDbkQsRUFBOEM7SUFDOUMsRUFBMEQ7SUFDMUQsRUFBYTtJQUNiLEVBQW9EO0lBQ3BELEVBQWlGO0lBQ2pGLEVBQWlEO0lBQ2pELEVBQWE7SUFDYixFQUFPO0lBQ1AsRUFBSTtJQUVKLEVBQW9CO0lBQ3BCLEVBQXlEO0lBQ3pELEVBQTZCO0lBQzdCLEVBQVU7SUFFVixFQUE0QjtJQUM1QixFQUEwQztJQUMxQyxFQUFpQztJQUVqQyxFQUFlO0lBQ2YsRUFBb0Q7SUFDcEQsRUFBTTtJQUNOLEVBQUs7SUFFTCxFQUF3RDtJQUN4RCxFQUF3RDtJQUN4RCxFQUFNO0lBRU4sTUFBTSxzRUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUVOLGlGQUEyQjs7Ozs7Ozs7QUFPL0MsQ0FBQztLQXJDS0MsWUFBWTtBQXVDbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xpc3RzL0FjdGl2aXR5TGlzdC5qcz83MGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBY3Rpdml0eSBmcm9tICcuLi9pdGVtcy9BY3Rpdml0eSc7XHJcbmltcG9ydCBhY3Rpdml0eVN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQWN0aXZpdHkubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBBY3Rpdml0eUxpc3QgPSAoeyBuZXh0UGFnZSwgcmVxdWVzdCwgYWN0aXZpdGllcyB9KSA9PiB7XHJcbiAgLy8gY29uc3QgW2Fjc0RhdGEsIHNldEFjc0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIGlmICghYWN0aXZpdGllcy5kYXRhIHx8IGFjdGl2aXRpZXMuZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPXthY3Rpdml0eVN0eWxlcy5ub0FjdGl2aXRpZXN9PlxyXG4gIC8vICAgICAgIFdoZW4gYSB1c2VyIGxpa2VzIHlvdXIgcG9zdHMsIGNvbW1lbnRzIG9uIHlvdXIgcG9zdHMgb3Igc3RhcnRzIGZvbGxvd2luZ1xyXG4gIC8vICAgICAgIHlvdS4gV2Ugd2lsbCBnZXQgeW91IG5vdGlmaWVkIGhlcmUg8J+UpSDwn5GNIPCfkYxcclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIHNldEFjc0RhdGEoKG9sZFN0YXRlKSA9PiBbLi4ub2xkU3RhdGUsIGFjdGl2aXRpZXNdKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKGFjdGl2aXRpZXMpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy8gY29uc3QgZG9vID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgbmV4dFBhZ2UoKG9sZFN0YXRlKSA9PiBvbGRTdGF0ZSArIDEpO1xyXG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdCgpO1xyXG5cclxuICAvLyAgIGlmIChyZXMpIHtcclxuICAvLyAgICAgc2V0QWNzRGF0YSgob2xkU3RhdGUpID0+IFsuLi5vbGRTdGF0ZSwgcmVzXSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gY29uc3QgcmVuZGVyZWRMaXN0ID0gYWNzRGF0YS5kYXRhLm1hcCgoYWN0aXZpdHkpID0+IChcclxuICAvLyAgIDxBY3Rpdml0eSBrZXk9e2FjdGl2aXR5Ll9pZH0gYWN0aXZpdHk9e2FjdGl2aXR5fSAvPlxyXG4gIC8vICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2FjdGl2aXR5U3R5bGVzLmFjdGl2aXR5TGlzdH0+XHJcbiAgICAgIHsvKiB7cmVuZGVyZWRMaXN0fVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Rvb30gY2xhc3NOYW1lPXthY3Rpdml0eVN0eWxlcy5tb3JlQWNzfT5cclxuICAgICAgICBPbGRlciBOb3RpZmljYXRpb25zXHJcbiAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0eUxpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFjdGl2aXR5IiwiYWN0aXZpdHlTdHlsZXMiLCJBY3Rpdml0eUxpc3QiLCJuZXh0UGFnZSIsInJlcXVlc3QiLCJhY3Rpdml0aWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWN0aXZpdHlMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/lists/ActivityList.js\n");

/***/ })

});