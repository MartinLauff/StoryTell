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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _items_Activity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items/Activity */ \"./components/items/Activity.js\");\n/* harmony import */ var _styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Activity.module.css */ \"./styles/Activity.module.css\");\n/* harmony import */ var _styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ActivityList = function(param) {\n    var nextPage = param.nextPage, request = param.request, activities = param.activities;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), acsData = ref[0], setAcsData = ref[1];\n    if (!activities || activities.length === 0) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: (_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_4___default().noActivities),\n            __source: {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: \"When a user likes your post, comments on your post or starts following you. We will get you notified here 🔥 👍 👌\"\n        }));\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setAcsData(function(oldState) {\n            return _toConsumableArray(oldState).concat([\n                activities\n            ]);\n        });\n        console.log(activities);\n    }, []);\n    var doo = _asyncToGenerator(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res;\n        return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    nextPage(function(oldState) {\n                        return oldState + 1;\n                    });\n                    _ctx.next = 3;\n                    return request();\n                case 3:\n                    res = _ctx.sent;\n                    console.log(res);\n                    if (res) {\n                        setAcsData(function(oldState) {\n                            return _toConsumableArray(oldState).concat([\n                                res\n                            ]);\n                        });\n                    }\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var renderedList = acsData.map(function(activity) {\n        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_items_Activity__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            activity: activity,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n                lineNumber: 32,\n                columnNumber: 5\n            },\n            __self: _this1\n        }, activity._id);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: (_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_4___default().activityList),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n            lineNumber: 36,\n            columnNumber: 5\n        },\n        __self: _this\n    }));\n};\n_s(ActivityList, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ActivityList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActivityList);\nvar _c;\n$RefreshReg$(_c, \"ActivityList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpc3RzL0FjdGl2aXR5TGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0g7QUFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsR0FBSyxDQUFDSSxZQUFZLEdBQUcsUUFBUSxRQUErQixDQUFDO1FBQXJDQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFVBQVUsU0FBVkEsVUFBVTs7O0lBQ25ELEdBQUssQ0FBeUJQLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBbENRLE9BQU8sR0FBZ0JSLEdBQVksS0FBMUJTLFVBQVUsR0FBSVQsR0FBWTtJQUMxQyxFQUFFLEdBQUdPLFVBQVUsSUFBSUEsVUFBVSxDQUFDRyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDM0MsTUFBTSxzRUFDSEMsQ0FBRztZQUFDQyxTQUFTLEVBQUVULGlGQUEyQjs7Ozs7OztzQkFBRSxDQUc3Qzs7SUFFSixDQUFDO0lBRURGLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZlEsVUFBVSxDQUFDLFFBQVEsQ0FBUEssUUFBUTtZQUFLLE1BQU0sb0JBQUZBLFFBQVEsU0FBWixDQUFDO2dCQUFhUCxVQUFVO1lBQUEsQ0FBQzs7UUFDbERRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxVQUFVO0lBQ3hCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNVLEdBQUcsMkpBQUcsUUFBUSxXQUFJLENBQUM7WUFFakJDLEdBQUc7Ozs7b0JBRFRiLFFBQVEsQ0FBQyxRQUFRLENBQVBTLFFBQVE7d0JBQUtBLE1BQU0sQ0FBTkEsUUFBUSxHQUFHLENBQUM7OzsyQkFDakJSLE9BQU87O29CQUFuQlksR0FBRztvQkFDVEgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEdBQUc7b0JBRWYsRUFBRSxFQUFFQSxHQUFHLEVBQUUsQ0FBQzt3QkFDUlQsVUFBVSxDQUFDLFFBQVEsQ0FBUEssUUFBUTs0QkFBSyxNQUFNLG9CQUFGQSxRQUFRLFNBQVosQ0FBQztnQ0FBYUksR0FBRzs0QkFBQSxDQUFDOztvQkFDN0MsQ0FBQzs7Ozs7O0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ0MsWUFBWSxHQUFHWCxPQUFPLENBQUNZLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFFBQVE7c0JBQ3hDLE1BQU0sd0RBQUxuQix1REFBUTtZQUFvQm1CLFFBQVEsRUFBRUEsUUFBUTs7Ozs7OztXQUFoQ0EsUUFBUSxDQUFDQyxHQUFHOztJQUc3QixNQUFNLHNFQUNIWCxDQUFHO1FBQUNDLFNBQVMsRUFBRVQsaUZBQTJCOzs7Ozs7OztBQU8vQyxDQUFDO0dBdENLQyxZQUFZO0tBQVpBLFlBQVk7QUF3Q2xCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saXN0cy9BY3Rpdml0eUxpc3QuanM/NzBmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQWN0aXZpdHkgZnJvbSAnLi4vaXRlbXMvQWN0aXZpdHknO1xyXG5pbXBvcnQgYWN0aXZpdHlTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0FjdGl2aXR5Lm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgQWN0aXZpdHlMaXN0ID0gKHsgbmV4dFBhZ2UsIHJlcXVlc3QsIGFjdGl2aXRpZXMgfSkgPT4ge1xyXG4gIGNvbnN0IFthY3NEYXRhLCBzZXRBY3NEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBpZiAoIWFjdGl2aXRpZXMgfHwgYWN0aXZpdGllcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthY3Rpdml0eVN0eWxlcy5ub0FjdGl2aXRpZXN9PlxyXG4gICAgICAgIFdoZW4gYSB1c2VyIGxpa2VzIHlvdXIgcG9zdCwgY29tbWVudHMgb24geW91ciBwb3N0IG9yIHN0YXJ0cyBmb2xsb3dpbmdcclxuICAgICAgICB5b3UuIFdlIHdpbGwgZ2V0IHlvdSBub3RpZmllZCBoZXJlIPCflKUg8J+RjSDwn5GMXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRBY3NEYXRhKChvbGRTdGF0ZSkgPT4gWy4uLm9sZFN0YXRlLCBhY3Rpdml0aWVzXSk7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpdml0aWVzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGRvbyA9IGFzeW5jICgpID0+IHtcclxuICAgIG5leHRQYWdlKChvbGRTdGF0ZSkgPT4gb2xkU3RhdGUgKyAxKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QoKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgaWYgKHJlcykge1xyXG4gICAgICBzZXRBY3NEYXRhKChvbGRTdGF0ZSkgPT4gWy4uLm9sZFN0YXRlLCByZXNdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJlZExpc3QgPSBhY3NEYXRhLm1hcCgoYWN0aXZpdHkpID0+IChcclxuICAgIDxBY3Rpdml0eSBrZXk9e2FjdGl2aXR5Ll9pZH0gYWN0aXZpdHk9e2FjdGl2aXR5fSAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2FjdGl2aXR5U3R5bGVzLmFjdGl2aXR5TGlzdH0+XHJcbiAgICAgIHsvKiB7cmVuZGVyZWRMaXN0fVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Rvb30gY2xhc3NOYW1lPXthY3Rpdml0eVN0eWxlcy5tb3JlQWNzfT5cclxuICAgICAgICBPbGRlciBOb3RpZmljYXRpb25zXHJcbiAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0eUxpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFjdGl2aXR5IiwiYWN0aXZpdHlTdHlsZXMiLCJBY3Rpdml0eUxpc3QiLCJuZXh0UGFnZSIsInJlcXVlc3QiLCJhY3Rpdml0aWVzIiwiYWNzRGF0YSIsInNldEFjc0RhdGEiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJub0FjdGl2aXRpZXMiLCJvbGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkb28iLCJyZXMiLCJyZW5kZXJlZExpc3QiLCJtYXAiLCJhY3Rpdml0eSIsIl9pZCIsImFjdGl2aXR5TGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/lists/ActivityList.js\n");

/***/ })

});