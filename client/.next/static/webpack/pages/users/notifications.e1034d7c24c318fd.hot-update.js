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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n/* harmony import */ var _items_Activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../items/Activity */ \"./components/items/Activity.js\");\n/* harmony import */ var _styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Activity.module.css */ \"./styles/Activity.module.css\");\n/* harmony import */ var _styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ActivityList = function(param) {\n    var activities = param.activities;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), acsData = ref[0], setAcsData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), page = ref1[0], nextPage = ref1[1];\n    if (!activities || activities.length === 0) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: (_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_6___default().noActivities),\n            __source: {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: \"When a user likes your post, comments on your post or starts following you. We will get you notified here 🔥 👍 👌\"\n        }));\n    }\n    var ref2 = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        url: \"http://localhost:8000/api/users/activities?page=\".concat(page, \"&limit=10\"),\n        method: 'get',\n        headers: {\n            Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('jwt')\n        }\n    }), doRequest = ref2.doRequest, errors = ref2.errors;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setAcsData(function(oldState) {\n            return _toConsumableArray(oldState).concat([\n                activities\n            ]);\n        });\n        console.log(activities);\n    }, []);\n    var doo = _asyncToGenerator(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    nextPage(function(oldState) {\n                        return oldState + 1;\n                    });\n                    _ctx.next = 3;\n                    return doRequest();\n                case 3:\n                    data = _ctx.sent.data;\n                    console.log(data);\n                    if (data) {\n                        setAcsData(function(oldState) {\n                            return _toConsumableArray(oldState).concat([\n                                data\n                            ]);\n                        });\n                    }\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    // const renderedList = acsData.map((activity) => (\n    //   <Activity key={activity._id} activity={activity} />\n    // ));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: (_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_6___default().activityList),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n            lineNumber: 45,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                onClick: doo,\n                className: (_styles_Activity_module_css__WEBPACK_IMPORTED_MODULE_6___default().moreAcs),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\Codes\\\\storytell\\\\client\\\\components\\\\lists\\\\ActivityList.js\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Older Notifications\"\n            }),\n            errors\n        ]\n    }));\n};\n_s(ActivityList, \"bSM9cQW2IyrVit5oDtqsbTTHIG8=\", false, function() {\n    return [\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = ActivityList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActivityList);\nvar _c;\n$RefreshReg$(_c, \"ActivityList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpc3RzL0FjdGl2aXR5TGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDWjtBQUNpQjtBQUNSO0FBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELEdBQUssQ0FBQ00sWUFBWSxHQUFHLFFBQVEsUUFBWSxDQUFDO1FBQWxCQyxVQUFVLFNBQVZBLFVBQVU7O0lBQ2hDLEdBQUssQ0FBeUJQLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBbENRLE9BQU8sR0FBZ0JSLEdBQVksS0FBMUJTLFVBQVUsR0FBSVQsR0FBWTtJQUMxQyxHQUFLLENBQW9CQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE1QlUsSUFBSSxHQUFjVixJQUFXLEtBQXZCVyxRQUFRLEdBQUlYLElBQVc7SUFDcEMsRUFBRSxHQUFHTyxVQUFVLElBQUlBLFVBQVUsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQzNDLE1BQU0sc0VBQ0hDLENBQUc7WUFBQ0MsU0FBUyxFQUFFVCxpRkFBMkI7Ozs7Ozs7c0JBQUUsQ0FHN0M7O0lBRUosQ0FBQztJQUVELEdBQUssQ0FBeUJGLElBSTVCLEdBSjRCQSw4REFBVSxDQUFDLENBQUM7UUFDeENhLEdBQUcsRUFBRyxDQUFnRCxrREFBTyxNQUFTLENBQWROLElBQUksRUFBQyxDQUFTO1FBQ3RFTyxNQUFNLEVBQUUsQ0FBSztRQUNiQyxPQUFPLEVBQUUsQ0FBQztZQUFDQyxhQUFhLEVBQUUsQ0FBUyxXQUFHakIscURBQVcsQ0FBQyxDQUFLO1FBQUUsQ0FBQztJQUM1RCxDQUFDLEdBSk9tQixTQUFTLEdBQWFsQixJQUk1QixDQUpNa0IsU0FBUyxFQUFFQyxNQUFNLEdBQUtuQixJQUk1QixDQUppQm1CLE1BQU07SUFNekJyQixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZRLFVBQVUsQ0FBQyxRQUFRLENBQVBjLFFBQVE7WUFBSyxNQUFNLG9CQUFGQSxRQUFRLFNBQVosQ0FBQztnQkFBYWhCLFVBQVU7WUFBQSxDQUFDOztRQUNsRGlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbEIsVUFBVTtJQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBSyxDQUFDbUIsR0FBRywySkFBRyxRQUFRLFdBQUksQ0FBQztZQUVmQyxJQUFJOzs7O29CQURaaEIsUUFBUSxDQUFDLFFBQVEsQ0FBUFksUUFBUTt3QkFBS0EsTUFBTSxDQUFOQSxRQUFRLEdBQUcsQ0FBQzs7OzJCQUNaRixTQUFTOztvQkFBeEJNLElBQUksYUFBSkEsSUFBSTtvQkFDWkgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLElBQUk7b0JBRWhCLEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7d0JBQ1RsQixVQUFVLENBQUMsUUFBUSxDQUFQYyxRQUFROzRCQUFLLE1BQU0sb0JBQUZBLFFBQVEsU0FBWixDQUFDO2dDQUFhSSxJQUFJOzRCQUFBLENBQUM7O29CQUM5QyxDQUFDOzs7Ozs7SUFDSCxDQUFDO0lBRUQsRUFBbUQ7SUFDbkQsRUFBd0Q7SUFDeEQsRUFBTTtJQUVOLE1BQU0sdUVBQ0hkLENBQUc7UUFBQ0MsU0FBUyxFQUFFVCxpRkFBMkI7Ozs7Ozs7O2lGQUV4Q3dCLENBQU07Z0JBQUNDLE9BQU8sRUFBRUosR0FBRztnQkFBRVosU0FBUyxFQUFFVCw0RUFBc0I7Ozs7Ozs7MEJBQUUsQ0FFekQ7O1lBQ0NpQixNQUFNOzs7QUFHYixDQUFDO0dBOUNLaEIsWUFBWTs7UUFZY0gsMERBQVU7OztLQVpwQ0csWUFBWTtBQWdEbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xpc3RzL0FjdGl2aXR5TGlzdC5qcz83MGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB1c2VSZXF1ZXN0IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1yZXF1ZXN0JztcclxuaW1wb3J0IEFjdGl2aXR5IGZyb20gJy4uL2l0ZW1zL0FjdGl2aXR5JztcclxuaW1wb3J0IGFjdGl2aXR5U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9BY3Rpdml0eS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IEFjdGl2aXR5TGlzdCA9ICh7IGFjdGl2aXRpZXMgfSkgPT4ge1xyXG4gIGNvbnN0IFthY3NEYXRhLCBzZXRBY3NEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGFnZSwgbmV4dFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgaWYgKCFhY3Rpdml0aWVzIHx8IGFjdGl2aXRpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YWN0aXZpdHlTdHlsZXMubm9BY3Rpdml0aWVzfT5cclxuICAgICAgICBXaGVuIGEgdXNlciBsaWtlcyB5b3VyIHBvc3QsIGNvbW1lbnRzIG9uIHlvdXIgcG9zdCBvciBzdGFydHMgZm9sbG93aW5nXHJcbiAgICAgICAgeW91LiBXZSB3aWxsIGdldCB5b3Ugbm90aWZpZWQgaGVyZSDwn5SlIPCfkY0g8J+RjFxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGRvUmVxdWVzdCwgZXJyb3JzIH0gPSB1c2VSZXF1ZXN0KHtcclxuICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcnMvYWN0aXZpdGllcz9wYWdlPSR7cGFnZX0mbGltaXQ9MTBgLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgQ29va2llcy5nZXQoJ2p3dCcpIH0sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRBY3NEYXRhKChvbGRTdGF0ZSkgPT4gWy4uLm9sZFN0YXRlLCBhY3Rpdml0aWVzXSk7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpdml0aWVzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGRvbyA9IGFzeW5jICgpID0+IHtcclxuICAgIG5leHRQYWdlKChvbGRTdGF0ZSkgPT4gb2xkU3RhdGUgKyAxKTtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZG9SZXF1ZXN0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBzZXRBY3NEYXRhKChvbGRTdGF0ZSkgPT4gWy4uLm9sZFN0YXRlLCBkYXRhXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgcmVuZGVyZWRMaXN0ID0gYWNzRGF0YS5tYXAoKGFjdGl2aXR5KSA9PiAoXHJcbiAgLy8gICA8QWN0aXZpdHkga2V5PXthY3Rpdml0eS5faWR9IGFjdGl2aXR5PXthY3Rpdml0eX0gLz5cclxuICAvLyApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXthY3Rpdml0eVN0eWxlcy5hY3Rpdml0eUxpc3R9PlxyXG4gICAgICB7Lyoge3JlbmRlcmVkTGlzdH0gKi99XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17ZG9vfSBjbGFzc05hbWU9e2FjdGl2aXR5U3R5bGVzLm1vcmVBY3N9PlxyXG4gICAgICAgIE9sZGVyIE5vdGlmaWNhdGlvbnNcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtlcnJvcnN9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHlMaXN0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb29raWVzIiwidXNlUmVxdWVzdCIsIkFjdGl2aXR5IiwiYWN0aXZpdHlTdHlsZXMiLCJBY3Rpdml0eUxpc3QiLCJhY3Rpdml0aWVzIiwiYWNzRGF0YSIsInNldEFjc0RhdGEiLCJwYWdlIiwibmV4dFBhZ2UiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJub0FjdGl2aXRpZXMiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldCIsImRvUmVxdWVzdCIsImVycm9ycyIsIm9sZFN0YXRlIiwiY29uc29sZSIsImxvZyIsImRvbyIsImRhdGEiLCJhY3Rpdml0eUxpc3QiLCJidXR0b24iLCJvbkNsaWNrIiwibW9yZUFjcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/lists/ActivityList.js\n");

/***/ })

});