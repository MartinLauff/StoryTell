"use strict";
self["webpackHotUpdate_N_E"]("pages/posts/create-post",{

/***/ "./pages/posts/create-post.js":
/*!************************************!*\
  !*** ./pages/posts/create-post.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/Components.module.css */ "./styles/Components.module.css");
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_Create_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/Create.module.css */ "./styles/Create.module.css");
/* harmony import */ var _styles_Create_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_bars_ArrowBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/bars/ArrowBar */ "./components/bars/ArrowBar.js");
/* harmony import */ var _components_bars_SideBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/bars/SideBar */ "./components/bars/SideBar.js");
/* harmony import */ var _components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/bars/BottomBar */ "./components/bars/BottomBar.js");
/* harmony import */ var _components_bars_Layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/bars/Layer */ "./components/bars/Layer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\pages\\posts\\create-post.js",
    _this = undefined,
    _s = $RefreshSig$();














var CreatePost = function CreatePost() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('Fitness'),
      topic = _useState[0],
      setTopic = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      content = _useState3[0],
      setContent = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('(optional)'),
      fileName = _useState4[0],
      setFileName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      url = _useState5[0],
      setUrl = _useState5[1];

  var doRequest = function doRequest() {
    console.log(url);
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      url: 'http://localhost:8000/api/posts/',
      method: 'post',
      data: {
        topic: topic,
        title: title,
        coverImage: url || '',
        content: content
      },
      headers: {
        Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_5__.default.get('jwt')
      }
    }).then(function () {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/topics/".concat(topic.toLowerCase()));
    })["catch"](function (err) {
      return console.error(err);
    });
  };

  var submit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var data, res;
      return C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!(!topic || !title || !content)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              data = new FormData();
              data.append('file', fileName);
              data.append('upload_preset', 'storytell');

              if (!(fileName !== '(optional)')) {
                _context.next = 13;
                break;
              }

              _context.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                method: 'post',
                url: 'https://api.cloudinary.com/v1_1/ekoeko/image/upload',
                data: data,
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });

            case 9:
              res = _context.sent;
              doRequest(res.data.url);
              _context.next = 14;
              break;

            case 13:
              doRequest();

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_ArrowBar__WEBPACK_IMPORTED_MODULE_6__.default, {
      title: "Create a post"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_SideBar__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_Layer__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("form", {
      onSubmit: submit,
      className: (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrap),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("select", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default().textInput),
        value: topic,
        onChange: function onChange(e) {
          return setTopic(e.target.value);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Startups",
          children: "Startups"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Fitness",
          children: "Fitness"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Language",
          children: "Language"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "School",
          children: "School"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Traveling",
          children: "Traveling"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
        required: true,
        onChange: function onChange(e) {
          return setTitle(e.target.value);
        },
        minLength: "8",
        maxLength: "40",
        placeholder: 'Title',
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default().textInput)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return setFileName(e.target.files[0]);
          },
          id: "image",
          accept: "image/*",
          type: "file",
          name: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
          htmlFor: "image",
          children: "Choose an image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_11___default().name),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            children: fileName.name ? fileName.name : fileName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            onClick: function onClick() {
              return setFileName('(optional)');
            },
            className: fileName.name ? (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_11___default().delPic) : (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_11___default().hide),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#ff2f2f",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("textarea", {
        required: true,
        onChange: function onChange(e) {
          return setContent(e.target.value);
        },
        minLength: "10",
        maxLength: "275",
        style: {
          height: '22rem',
          paddingTop: '1rem',
          border: '2px solid #000'
        },
        placeholder: "Text",
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default().textInput)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default().btnWrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/posts');
          },
          className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default().cancelBtn),
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          type: "submit",
          className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default().applyBtn),
          children: "Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, _this);
};

_s(CreatePost, "kMKFbI2S/6ZkdSMtVY5L6dhEGDY=");

_c = CreatePost;
/* harmony default export */ __webpack_exports__["default"] = (CreatePost);

var _c;

$RefreshReg$(_c, "CreatePost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvY3JlYXRlLXBvc3QuYWM0ZjRkZGI4ZmY5MTA2ODM0MDQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLGtCQUEwQlYsK0NBQVEsQ0FBQyxTQUFELENBQWxDO0FBQUEsTUFBT1csS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQTBCWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPYSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEJkLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9lLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQWdDaEIsK0NBQVEsQ0FBQyxZQUFELENBQXhDO0FBQUEsTUFBT2lCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQXNCbEIsK0NBQVEsQ0FBQyxFQUFELENBQTlCO0FBQUEsTUFBT21CLEdBQVA7QUFBQSxNQUFZQyxNQUFaOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaO0FBQ0FsQixJQUFBQSw0Q0FBSyxDQUFDO0FBQ0prQixNQUFBQSxHQUFHLEVBQUUsa0NBREQ7QUFFSkssTUFBQUEsTUFBTSxFQUFFLE1BRko7QUFHSkMsTUFBQUEsSUFBSSxFQUFFO0FBQ0pkLFFBQUFBLEtBQUssRUFBTEEsS0FESTtBQUVKRSxRQUFBQSxLQUFLLEVBQUxBLEtBRkk7QUFHSmEsUUFBQUEsVUFBVSxFQUFFUCxHQUFHLElBQUksRUFIZjtBQUlKSixRQUFBQSxPQUFPLEVBQVBBO0FBSkksT0FIRjtBQVNK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QUMsUUFBYjtBQUFzQixtQkFBUyxFQUFFQSxnRkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBbUZFLCtEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1RkQsQ0F4SUQ7O0dBQU1NOztLQUFBQTtBQTBJTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9jcmVhdGUtcG9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBjb21wb25lbnRTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0NvbXBvbmVudHMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBjcmVhdGVTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0NyZWF0ZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEFycm93QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFycy9BcnJvd0Jhcic7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFycy9TaWRlQmFyJztcclxuaW1wb3J0IEJvdHRvbUJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhcnMvQm90dG9tQmFyJztcclxuaW1wb3J0IExheWVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFycy9MYXllcic7XHJcblxyXG5jb25zdCBDcmVhdGVQb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b3BpYywgc2V0VG9waWNdID0gdXNlU3RhdGUoJ0ZpdG5lc3MnKTtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZpbGVOYW1lLCBzZXRGaWxlTmFtZV0gPSB1c2VTdGF0ZSgnKG9wdGlvbmFsKScpO1xyXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGRvUmVxdWVzdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcG9zdHMvJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0b3BpYyxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBjb3ZlckltYWdlOiB1cmwgfHwgJycsXHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgfSxcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBDb29raWVzLmdldCgnand0JykgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IFJvdXRlci5wdXNoKGAvdG9waWNzLyR7dG9waWMudG9Mb3dlckNhc2UoKX1gKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIXRvcGljIHx8ICF0aXRsZSB8fCAhY29udGVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlTmFtZSk7XHJcbiAgICBkYXRhLmFwcGVuZCgndXBsb2FkX3ByZXNldCcsICdzdG9yeXRlbGwnKTtcclxuXHJcbiAgICBpZiAoZmlsZU5hbWUgIT09ICcob3B0aW9uYWwpJykge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuY2xvdWRpbmFyeS5jb20vdjFfMS9la29la28vaW1hZ2UvdXBsb2FkJyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRvUmVxdWVzdChyZXMuZGF0YS51cmwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9SZXF1ZXN0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxBcnJvd0JhciB0aXRsZT0nQ3JlYXRlIGEgcG9zdCcgLz5cclxuICAgICAgPFNpZGVCYXIgLz5cclxuICAgICAgPExheWVyIC8+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9IGNsYXNzTmFtZT17Y3JlYXRlU3R5bGVzLndyYXB9PlxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAgIHZhbHVlPXt0b3BpY31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9waWMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1N0YXJ0dXBzJz5TdGFydHVwczwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nRml0bmVzcyc+Rml0bmVzczwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTGFuZ3VhZ2UnPkxhbmd1YWdlPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdTY2hvb2wnPlNjaG9vbDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nVHJhdmVsaW5nJz5UcmF2ZWxpbmc8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIG1pbkxlbmd0aD0nOCdcclxuICAgICAgICAgIG1heExlbmd0aD0nNDAnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17J1RpdGxlJ31cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjcmVhdGVTdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaWxlTmFtZShlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICAgIGlkPSdpbWFnZSdcclxuICAgICAgICAgICAgYWNjZXB0PSdpbWFnZS8qJ1xyXG4gICAgICAgICAgICB0eXBlPSdmaWxlJ1xyXG4gICAgICAgICAgICBuYW1lPSdpbWFnZSdcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0naW1hZ2UnPkNob29zZSBhbiBpbWFnZTwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3JlYXRlU3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICA8c3Bhbj57ZmlsZU5hbWUubmFtZSA/IGZpbGVOYW1lLm5hbWUgOiBmaWxlTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWxlTmFtZSgnKG9wdGlvbmFsKScpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBmaWxlTmFtZS5uYW1lID8gY3JlYXRlU3R5bGVzLmRlbFBpYyA6IGNyZWF0ZVN0eWxlcy5oaWRlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9JzI0J1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9JyNmZjJmMmYnXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPScxOCcgeTE9JzYnIHgyPSc2JyB5Mj0nMTgnPjwvbGluZT5cclxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPSc2JyB5MT0nNicgeDI9JzE4JyB5Mj0nMTgnPjwvbGluZT5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgbWluTGVuZ3RoPScxMCdcclxuICAgICAgICAgIG1heExlbmd0aD0nMjc1J1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjJyZW0nLFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAnMXJlbScsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nVGV4dCdcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnRleHRJbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuYnRuV3JhcHBlcn0+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcG9zdHMnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuY2FuY2VsQnRufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmFwcGx5QnRufT5cclxuICAgICAgICAgICAgUG9zdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPEJvdHRvbUJhciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiUm91dGVyIiwiQ29va2llcyIsImNvbXBvbmVudFN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsIkFycm93QmFyIiwiU2lkZUJhciIsIkJvdHRvbUJhciIsIkxheWVyIiwiQ3JlYXRlUG9zdCIsInRvcGljIiwic2V0VG9waWMiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJmaWxlTmFtZSIsInNldEZpbGVOYW1lIiwidXJsIiwic2V0VXJsIiwiZG9SZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImRhdGEiLCJjb3ZlckltYWdlIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXQiLCJ0aGVuIiwicHVzaCIsInRvTG93ZXJDYXNlIiwiZXJyIiwiZXJyb3IiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlcyIsIndyYXAiLCJ0ZXh0SW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndyYXBwZXIiLCJmaWxlcyIsIm5hbWUiLCJkZWxQaWMiLCJoaWRlIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsImJvcmRlciIsImJ0bldyYXBwZXIiLCJjYW5jZWxCdG4iLCJhcHBseUJ0biJdLCJzb3VyY2VSb290IjoiIn0=