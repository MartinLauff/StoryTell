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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _items_Activity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items/Activity */ \"./components/items/Activity.js\");\n/* harmony import */ var _styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Activity.module.css */ \"./styles/Activity.module.css\");\n/* harmony import */ var _styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ActivityList = function(param) {\n    var nextPage = param.nextPage, request = param.request, activities = param.activities;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), acsData = ref[0], setAcsData = ref[1];\n    if (!activities || activities.length === 0) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: (_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_4___default().noActivities),\n            __source: {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: \"When a user likes your post, comments on your post or starts following you. We will get you notified here 🔥 👍 👌\"\n        }));\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setAcsData(function(oldState) {\n            return _toConsumableArray(oldState).concat([\n                activities\n            ]);\n        });\n        console.log(activities);\n    }, []);\n    var doo = _asyncToGenerator(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res;\n        return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    nextPage(function(oldState) {\n                        return oldState + 1;\n                    });\n                    _ctx.next = 3;\n                    return request();\n                case 3:\n                    res = _ctx.sent;\n                    console.log(res);\n                    if (res) {\n                        setAcsData(function(oldState) {\n                            return _toConsumableArray(oldState).concat([\n                                res\n                            ]);\n                        });\n                    }\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    // const renderedList = acsData.map((activity) => (\n    //   <Activity key={activity._id} activity={activity} />\n    // ));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: (_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_4___default().activityList),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n            lineNumber: 36,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            renderedList,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                onClick: doo,\n                className: (_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_4___default().moreAcs),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Older Notifications\"\n            })\n        ]\n    }));\n};\n_s(ActivityList, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ActivityList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActivityList);\nvar _c;\n$RefreshReg$(_c, \"ActivityList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpc3RzL0FjdGl2aXR5TGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0g7QUFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsR0FBSyxDQUFDSSxZQUFZLEdBQUcsUUFBUSxRQUErQixDQUFDO1FBQXJDQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFVBQVUsU0FBVkEsVUFBVTs7SUFDbkQsR0FBSyxDQUF5QlAsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFsQ1EsT0FBTyxHQUFnQlIsR0FBWSxLQUExQlMsVUFBVSxHQUFJVCxHQUFZO0lBQzFDLEVBQUUsR0FBR08sVUFBVSxJQUFJQSxVQUFVLENBQUNHLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMzQyxNQUFNLHNFQUNIQyxDQUFHO1lBQUNDLFNBQVMsRUFBRVQsaUZBQTJCOzs7Ozs7O3NCQUFFLENBRzdDOztJQUVKLENBQUM7SUFFREYsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmUSxVQUFVLENBQUMsUUFBUSxDQUFQSyxRQUFRO1lBQUssTUFBTSxvQkFBRkEsUUFBUSxTQUFaLENBQUM7Z0JBQWFQLFVBQVU7WUFBQSxDQUFDOztRQUNsRFEsT0FBTyxDQUFDQyxHQUFHLENBQUNULFVBQVU7SUFDeEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ1UsR0FBRywySkFBRyxRQUFRLFdBQUksQ0FBQztZQUVqQkMsR0FBRzs7OztvQkFEVGIsUUFBUSxDQUFDLFFBQVEsQ0FBUFMsUUFBUTt3QkFBS0EsTUFBTSxDQUFOQSxRQUFRLEdBQUcsQ0FBQzs7OzJCQUNqQlIsT0FBTzs7b0JBQW5CWSxHQUFHO29CQUNUSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsR0FBRztvQkFFZixFQUFFLEVBQUVBLEdBQUcsRUFBRSxDQUFDO3dCQUNSVCxVQUFVLENBQUMsUUFBUSxDQUFQSyxRQUFROzRCQUFLLE1BQU0sb0JBQUZBLFFBQVEsU0FBWixDQUFDO2dDQUFhSSxHQUFHOzRCQUFBLENBQUM7O29CQUM3QyxDQUFDOzs7Ozs7SUFDSCxDQUFDO0lBRUQsRUFBbUQ7SUFDbkQsRUFBd0Q7SUFDeEQsRUFBTTtJQUVOLE1BQU0sdUVBQ0hQLENBQUc7UUFBQ0MsU0FBUyxFQUFFVCxpRkFBMkI7Ozs7Ozs7O1lBQ3hDaUIsWUFBWTtpRkFDWkMsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFTCxHQUFHO2dCQUFFTCxTQUFTLEVBQUVULDRFQUFzQjs7Ozs7OzswQkFBRSxDQUV6RDs7OztBQUdOLENBQUM7R0F0Q0tDLFlBQVk7S0FBWkEsWUFBWTtBQXdDbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xpc3RzL0FjdGl2aXR5TGlzdC5qcz83MGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBY3Rpdml0eSBmcm9tICcuLi9pdGVtcy9BY3Rpdml0eSc7XHJcbmltcG9ydCBhY3Rpdml0eVN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQWN0aXZpdHkubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBBY3Rpdml0eUxpc3QgPSAoeyBuZXh0UGFnZSwgcmVxdWVzdCwgYWN0aXZpdGllcyB9KSA9PiB7XHJcbiAgY29uc3QgW2Fjc0RhdGEsIHNldEFjc0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGlmICghYWN0aXZpdGllcyB8fCBhY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2FjdGl2aXR5U3R5bGVzLm5vQWN0aXZpdGllc30+XHJcbiAgICAgICAgV2hlbiBhIHVzZXIgbGlrZXMgeW91ciBwb3N0LCBjb21tZW50cyBvbiB5b3VyIHBvc3Qgb3Igc3RhcnRzIGZvbGxvd2luZ1xyXG4gICAgICAgIHlvdS4gV2Ugd2lsbCBnZXQgeW91IG5vdGlmaWVkIGhlcmUg8J+UpSDwn5GNIPCfkYxcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEFjc0RhdGEoKG9sZFN0YXRlKSA9PiBbLi4ub2xkU3RhdGUsIGFjdGl2aXRpZXNdKTtcclxuICAgIGNvbnNvbGUubG9nKGFjdGl2aXRpZXMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZG9vID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbmV4dFBhZ2UoKG9sZFN0YXRlKSA9PiBvbGRTdGF0ZSArIDEpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdCgpO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuXHJcbiAgICBpZiAocmVzKSB7XHJcbiAgICAgIHNldEFjc0RhdGEoKG9sZFN0YXRlKSA9PiBbLi4ub2xkU3RhdGUsIHJlc10pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IHJlbmRlcmVkTGlzdCA9IGFjc0RhdGEubWFwKChhY3Rpdml0eSkgPT4gKFxyXG4gIC8vICAgPEFjdGl2aXR5IGtleT17YWN0aXZpdHkuX2lkfSBhY3Rpdml0eT17YWN0aXZpdHl9IC8+XHJcbiAgLy8gKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YWN0aXZpdHlTdHlsZXMuYWN0aXZpdHlMaXN0fT5cclxuICAgICAge3JlbmRlcmVkTGlzdH1cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkb299IGNsYXNzTmFtZT17YWN0aXZpdHlTdHlsZXMubW9yZUFjc30+XHJcbiAgICAgICAgT2xkZXIgTm90aWZpY2F0aW9uc1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0eUxpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFjdGl2aXR5IiwiYWN0aXZpdHlTdHlsZXMiLCJBY3Rpdml0eUxpc3QiLCJuZXh0UGFnZSIsInJlcXVlc3QiLCJhY3Rpdml0aWVzIiwiYWNzRGF0YSIsInNldEFjc0RhdGEiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJub0FjdGl2aXRpZXMiLCJvbGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkb28iLCJyZXMiLCJhY3Rpdml0eUxpc3QiLCJyZW5kZXJlZExpc3QiLCJidXR0b24iLCJvbkNsaWNrIiwibW9yZUFjcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/lists/ActivityList.js\n");

/***/ })

});