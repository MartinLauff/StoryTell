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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n/* harmony import */ var _items_Activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../items/Activity */ \"./components/items/Activity.js\");\n/* harmony import */ var _styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Activity.module.css */ \"./styles/Activity.module.css\");\n/* harmony import */ var _styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ActivityList = function(param) {\n    var activities = param.activities;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(activities.length), count = ref1[0], setCount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), acsData = ref2[0], setAcsData = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), page = ref3[0], nextPage = ref3[1];\n    if (!activities || activities.length === 0) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: (_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_6___default().noActivities),\n            __source: {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: \"When a user likes your post, comments on your post or starts following you. We will get you notified here 🔥 👍 👌\"\n        }));\n    }\n    var ref4 = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        url: \"http://localhost:8000/api/users/activities?page=\".concat(page, \"&limit=10\"),\n        method: 'get',\n        headers: {\n            Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('jwt')\n        }\n    }), doRequest = ref4.doRequest, errors = ref4.errors;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setAcsData(function(oldState) {\n            return _toConsumableArray(oldState).concat(_toConsumableArray(activities));\n        });\n        nextPage(function(oldState) {\n            return oldState + 1;\n        });\n        console.log(acsData);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(acsData);\n    }, [\n        acsData\n    ]);\n    var onClick = _asyncToGenerator(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var data;\n        return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    _ctx.next = 3;\n                    return doRequest();\n                case 3:\n                    data = _ctx.sent.data;\n                    if (data) {\n                        setCount(function(oldState) {\n                            return oldState + data.length;\n                        });\n                        nextPage(function(oldState) {\n                            return oldState + 1;\n                        });\n                        setAcsData(function(oldState) {\n                            return _toConsumableArray(oldState).concat(_toConsumableArray(data));\n                        });\n                    }\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var renderedList = acsData.map(function(activity) {\n        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_items_Activity__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            activity: activity,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n                lineNumber: 49,\n                columnNumber: 5\n            },\n            __self: _this1\n        }, activity._id);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: (_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_6___default().activityList),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n            lineNumber: 53,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            renderedList,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                onClick: onClick,\n                className: (_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_6___default().moreAcs),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Older Notifications\"\n            }),\n            errors\n        ]\n    }));\n};\n_s(ActivityList, \"nuhUc7+p2o92T/7TeWgpQmeyO1s=\", false, function() {\n    return [\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = ActivityList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActivityList);\nvar _c;\n$RefreshReg$(_c, \"ActivityList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpc3RzL0FjdGl2aXR5TGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDWjtBQUNpQjtBQUNSO0FBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELEdBQUssQ0FBQ00sWUFBWSxHQUFHLFFBQVEsUUFBWSxDQUFDO1FBQWxCQyxVQUFVLFNBQVZBLFVBQVU7OztJQUNoQyxHQUFLLENBQXVCUCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuQ1EsTUFBTSxHQUFlUixHQUFlLEtBQTVCUyxTQUFTLEdBQUlULEdBQWU7SUFDM0MsR0FBSyxDQUFxQkEsSUFBMkIsR0FBM0JBLCtDQUFRLENBQUNPLFVBQVUsQ0FBQ0csTUFBTSxHQUE3Q0MsS0FBSyxHQUFjWCxJQUEyQixLQUF2Q1ksUUFBUSxHQUFJWixJQUEyQjtJQUNyRCxHQUFLLENBQXlCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWxDYSxPQUFPLEdBQWdCYixJQUFZLEtBQTFCYyxVQUFVLEdBQUlkLElBQVk7SUFDMUMsR0FBSyxDQUFvQkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBNUJlLElBQUksR0FBY2YsSUFBVyxLQUF2QmdCLFFBQVEsR0FBSWhCLElBQVc7SUFDcEMsRUFBRSxHQUFHTyxVQUFVLElBQUlBLFVBQVUsQ0FBQ0csTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQzNDLE1BQU0sc0VBQ0hPLENBQUc7WUFBQ0MsU0FBUyxFQUFFYixpRkFBMkI7Ozs7Ozs7c0JBQUUsQ0FHN0M7O0lBRUosQ0FBQztJQUVELEdBQUssQ0FBeUJGLElBSTVCLEdBSjRCQSw4REFBVSxDQUFDLENBQUM7UUFDeENpQixHQUFHLEVBQUcsQ0FBZ0Qsa0RBQU8sTUFBUyxDQUFkTCxJQUFJLEVBQUMsQ0FBUztRQUN0RU0sTUFBTSxFQUFFLENBQUs7UUFDYkMsT0FBTyxFQUFFLENBQUM7WUFBQ0MsYUFBYSxFQUFFLENBQVMsV0FBR3JCLHFEQUFXLENBQUMsQ0FBSztRQUFFLENBQUM7SUFDNUQsQ0FBQyxHQUpPdUIsU0FBUyxHQUFhdEIsSUFJNUIsQ0FKTXNCLFNBQVMsRUFBRUMsTUFBTSxHQUFLdkIsSUFJNUIsQ0FKaUJ1QixNQUFNO0lBTXpCekIsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmYSxVQUFVLENBQUMsUUFBUSxDQUFQYSxRQUFRO1lBQUssTUFBTSxvQkFBRkEsUUFBUSw0QkFBS3BCLFVBQVU7O1FBQ3BEUyxRQUFRLENBQUMsUUFBUSxDQUFQVyxRQUFRO1lBQUtBLE1BQU0sQ0FBTkEsUUFBUSxHQUFHLENBQUM7O1FBQ25DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLE9BQU87SUFDckIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMWixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2YyQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLE9BQU87SUFDckIsQ0FBQyxFQUFFLENBQUNBO1FBQUFBLE9BQU87SUFBQSxDQUFDO0lBRVosR0FBSyxDQUFDaUIsT0FBTywySkFBRyxRQUFRLFNBQURDLENBQUMsRUFBSyxDQUFDO1lBR3BCQyxJQUFJOzs7O29CQUZaRCxDQUFDLENBQUNFLGNBQWM7OzJCQUVPUixTQUFTOztvQkFBeEJPLElBQUksYUFBSkEsSUFBSTtvQkFDWixFQUFFLEVBQUVBLElBQUksRUFBRSxDQUFDO3dCQUNUcEIsUUFBUSxDQUFDLFFBQVEsQ0FBUGUsUUFBUTs0QkFBS0EsTUFBTSxDQUFOQSxRQUFRLEdBQUdLLElBQUksQ0FBQ3RCLE1BQU07O3dCQUM3Q00sUUFBUSxDQUFDLFFBQVEsQ0FBUFcsUUFBUTs0QkFBS0EsTUFBTSxDQUFOQSxRQUFRLEdBQUcsQ0FBQzs7d0JBQ25DYixVQUFVLENBQUMsUUFBUSxDQUFQYSxRQUFROzRCQUFLLE1BQU0sb0JBQUZBLFFBQVEsNEJBQUtLLElBQUk7O29CQUNoRCxDQUFDOzs7Ozs7SUFDSCxDQUFDO0lBRUQsR0FBSyxDQUFDRSxZQUFZLEdBQUdyQixPQUFPLENBQUNzQixHQUFHLENBQUMsUUFBUSxDQUFQQyxRQUFRO3NCQUN4QyxNQUFNLHdEQUFMaEMsdURBQVE7WUFBb0JnQyxRQUFRLEVBQUVBLFFBQVE7Ozs7Ozs7V0FBaENBLFFBQVEsQ0FBQ0MsR0FBRzs7SUFHN0IsTUFBTSx1RUFDSHBCLENBQUc7UUFBQ0MsU0FBUyxFQUFFYixpRkFBMkI7Ozs7Ozs7O1lBQ3hDNkIsWUFBWTtpRkFDWkssQ0FBTTtnQkFBQ1QsT0FBTyxFQUFFQSxPQUFPO2dCQUFFWixTQUFTLEVBQUViLDRFQUFzQjs7Ozs7OzswQkFBRSxDQUU3RDs7WUFDQ3FCLE1BQU07OztBQUdiLENBQUM7R0F0REtwQixZQUFZOztRQWNjSCwwREFBVTs7O0tBZHBDRyxZQUFZO0FBd0RsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGlzdHMvQWN0aXZpdHlMaXN0LmpzPzcwZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlcXVlc3QnO1xyXG5pbXBvcnQgQWN0aXZpdHkgZnJvbSAnLi4vaXRlbXMvQWN0aXZpdHknO1xyXG5pbXBvcnQgYWN0aXZpdHlTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0FjdGl2aXR5Lm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgQWN0aXZpdHlMaXN0ID0gKHsgYWN0aXZpdGllcyB9KSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKGFjdGl2aXRpZXMubGVuZ3RoKTtcclxuICBjb25zdCBbYWNzRGF0YSwgc2V0QWNzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BhZ2UsIG5leHRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGlmICghYWN0aXZpdGllcyB8fCBhY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2FjdGl2aXR5U3R5bGVzLm5vQWN0aXZpdGllc30+XHJcbiAgICAgICAgV2hlbiBhIHVzZXIgbGlrZXMgeW91ciBwb3N0LCBjb21tZW50cyBvbiB5b3VyIHBvc3Qgb3Igc3RhcnRzIGZvbGxvd2luZ1xyXG4gICAgICAgIHlvdS4gV2Ugd2lsbCBnZXQgeW91IG5vdGlmaWVkIGhlcmUg8J+UpSDwn5GNIPCfkYxcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBkb1JlcXVlc3QsIGVycm9ycyB9ID0gdXNlUmVxdWVzdCh7XHJcbiAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXJzL2FjdGl2aXRpZXM/cGFnZT0ke3BhZ2V9JmxpbWl0PTEwYCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIENvb2tpZXMuZ2V0KCdqd3QnKSB9LFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0QWNzRGF0YSgob2xkU3RhdGUpID0+IFsuLi5vbGRTdGF0ZSwgLi4uYWN0aXZpdGllc10pO1xyXG4gICAgbmV4dFBhZ2UoKG9sZFN0YXRlKSA9PiBvbGRTdGF0ZSArIDEpO1xyXG4gICAgY29uc29sZS5sb2coYWNzRGF0YSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWNzRGF0YSk7XHJcbiAgfSwgW2Fjc0RhdGFdKTtcclxuXHJcbiAgY29uc3Qgb25DbGljayA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBkb1JlcXVlc3QoKTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHNldENvdW50KChvbGRTdGF0ZSkgPT4gb2xkU3RhdGUgKyBkYXRhLmxlbmd0aCk7XHJcbiAgICAgIG5leHRQYWdlKChvbGRTdGF0ZSkgPT4gb2xkU3RhdGUgKyAxKTtcclxuICAgICAgc2V0QWNzRGF0YSgob2xkU3RhdGUpID0+IFsuLi5vbGRTdGF0ZSwgLi4uZGF0YV0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlcmVkTGlzdCA9IGFjc0RhdGEubWFwKChhY3Rpdml0eSkgPT4gKFxyXG4gICAgPEFjdGl2aXR5IGtleT17YWN0aXZpdHkuX2lkfSBhY3Rpdml0eT17YWN0aXZpdHl9IC8+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YWN0aXZpdHlTdHlsZXMuYWN0aXZpdHlMaXN0fT5cclxuICAgICAge3JlbmRlcmVkTGlzdH1cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2FjdGl2aXR5U3R5bGVzLm1vcmVBY3N9PlxyXG4gICAgICAgIE9sZGVyIE5vdGlmaWNhdGlvbnNcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtlcnJvcnN9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHlMaXN0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb29raWVzIiwidXNlUmVxdWVzdCIsIkFjdGl2aXR5IiwiYWN0aXZpdHlTdHlsZXMiLCJBY3Rpdml0eUxpc3QiLCJhY3Rpdml0aWVzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwibGVuZ3RoIiwiY291bnQiLCJzZXRDb3VudCIsImFjc0RhdGEiLCJzZXRBY3NEYXRhIiwicGFnZSIsIm5leHRQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibm9BY3Rpdml0aWVzIiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXQiLCJkb1JlcXVlc3QiLCJlcnJvcnMiLCJvbGRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrIiwiZSIsImRhdGEiLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlcmVkTGlzdCIsIm1hcCIsImFjdGl2aXR5IiwiX2lkIiwiYWN0aXZpdHlMaXN0IiwiYnV0dG9uIiwibW9yZUFjcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/lists/ActivityList.js\n");

/***/ })

});