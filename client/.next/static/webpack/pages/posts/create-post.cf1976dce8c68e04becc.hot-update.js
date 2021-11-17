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
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ "./hooks/use-request.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../styles/Components.module.css */ "./styles/Components.module.css");
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_Create_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/Create.module.css */ "./styles/Create.module.css");
/* harmony import */ var _styles_Create_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_bars_ArrowBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/bars/ArrowBar */ "./components/bars/ArrowBar.js");
/* harmony import */ var _components_bars_SideBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/bars/SideBar */ "./components/bars/SideBar.js");
/* harmony import */ var _components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/bars/BottomBar */ "./components/bars/BottomBar.js");
/* harmony import */ var _components_bars_Layer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/bars/Layer */ "./components/bars/Layer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
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

  var _useRequest = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__.default)({
    url: 'http://localhost:8000/api/posts/',
    method: 'post',
    body: {
      topic: topic,
      title: title,
      coverImage: url || '',
      content: content
    },
    headers: {
      Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_6__.default.get('jwt')
    },
    onSuccess: function onSuccess() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/topics/".concat(topic.toLowerCase()));
    }
  }),
      doRequest = _useRequest.doRequest,
      errors = _useRequest.errors;

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
                _context.next = 11;
                break;
              }

              _context.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: 'post',
                url: 'https://api.cloudinary.com/v1_1/ekoeko/image/upload',
                data: data,
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });

            case 9:
              res = _context.sent;
              setUrl(res.data.url);

            case 11:
              _context.next = 13;
              return doRequest();

            case 13:
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_bars_ArrowBar__WEBPACK_IMPORTED_MODULE_7__.default, {
      title: "Create a post"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_bars_SideBar__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_bars_Layer__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("form", {
      onSubmit: submit,
      className: (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_12___default().wrap),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("select", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_13___default().textInput),
        value: topic,
        onChange: function onChange(e) {
          return setTopic(e.target.value);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
          value: "Startups",
          children: "Startups"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
          value: "Fitness",
          children: "Fitness"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
          value: "Language",
          children: "Language"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
          value: "School",
          children: "School"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
          value: "Traveling",
          children: "Traveling"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("input", {
        required: true,
        onChange: function onChange(e) {
          return setTitle(e.target.value);
        },
        minLength: "8",
        maxLength: "40",
        placeholder: 'Title',
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_13___default().textInput)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_12___default().wrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return setFileName(e.target.files[0]);
          },
          id: "image",
          accept: "image/*",
          type: "file",
          name: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("label", {
          htmlFor: "image",
          children: "Choose an image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_12___default().name),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            children: fileName.name ? fileName.name : fileName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
            onClick: function onClick() {
              return setFileName('(optional)');
            },
            className: fileName.name ? (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_12___default().delPic) : (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_12___default().hide),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#ff2f2f",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("textarea", {
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
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_13___default().textInput)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_13___default().btnWrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/posts');
          },
          className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_13___default().cancelBtn),
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          type: "submit",
          className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_13___default().applyBtn),
          children: "Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), errors, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);
};

_s(CreatePost, "hADJeS0nt0kYOnLSGk3RGZwa7Vs=", false, function () {
  return [_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__.default];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvY3JlYXRlLXBvc3QuY2YxOTc2ZGNlOGM2OGUwNGJlY2MuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLGtCQUEwQlgsK0NBQVEsQ0FBQyxTQUFELENBQWxDO0FBQUEsTUFBT1ksS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQTBCYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPYyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEJmLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9nQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFnQ2pCLCtDQUFRLENBQUMsWUFBRCxDQUF4QztBQUFBLE1BQU9rQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFzQm5CLCtDQUFRLENBQUMsRUFBRCxDQUE5QjtBQUFBLE1BQU9vQixHQUFQO0FBQUEsTUFBWUMsTUFBWjs7QUFFQSxvQkFBOEJwQiwyREFBVSxDQUFDO0FBQ3ZDbUIsSUFBQUEsR0FBRyxFQUFFLGtDQURrQztBQUV2Q0UsSUFBQUEsTUFBTSxFQUFFLE1BRitCO0FBR3ZDQyxJQUFBQSxJQUFJLEVBQUU7QUFDSlgsTUFBQUEsS0FBSyxFQUFMQSxLQURJO0FBRUpFLE1BQUFBLEtBQUssRUFBTEEsS0FGSTtBQUdKVSxNQUFBQSxVQUFVLEVBQUVKLEdBQUcsSUFBSSxFQUhmO0FBSUpKLE1BQUFBLE9BQU8sRUFBUEE7QUFKSSxLQUhpQztBQVN2Q1MsSUFBQUEsT0FBTyxFQUFFO0FBQUVDLE1BQUFBLGFBQWEsRUFBRSxZQUFZdEIsa0RBQUEsQ0FBWSxLQUFa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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBbUZHMkIsTUFuRkgsZUFvRkUsK0RBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdGRCxDQXBJRDs7R0FBTXJCO1VBTzBCVjs7O0tBUDFCVTtBQXNJTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9jcmVhdGUtcG9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlcXVlc3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGNyZWF0ZVN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ3JlYXRlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQXJyb3dCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL0Fycm93QmFyJztcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL1NpZGVCYXInO1xyXG5pbXBvcnQgQm90dG9tQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFycy9Cb3R0b21CYXInO1xyXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL0xheWVyJztcclxuXHJcbmNvbnN0IENyZWF0ZVBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvcGljLCBzZXRUb3BpY10gPSB1c2VTdGF0ZSgnRml0bmVzcycpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKCcob3B0aW9uYWwpJyk7XHJcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgeyBkb1JlcXVlc3QsIGVycm9ycyB9ID0gdXNlUmVxdWVzdCh7XHJcbiAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Bvc3RzLycsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgIGJvZHk6IHtcclxuICAgICAgdG9waWMsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBjb3ZlckltYWdlOiB1cmwgfHwgJycsXHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBDb29raWVzLmdldCgnand0JykgfSxcclxuICAgIG9uU3VjY2VzczogKCkgPT4gUm91dGVyLnB1c2goYC90b3BpY3MvJHt0b3BpYy50b0xvd2VyQ2FzZSgpfWApLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghdG9waWMgfHwgIXRpdGxlIHx8ICFjb250ZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGVOYW1lKTtcclxuICAgIGRhdGEuYXBwZW5kKCd1cGxvYWRfcHJlc2V0JywgJ3N0b3J5dGVsbCcpO1xyXG5cclxuICAgIGlmIChmaWxlTmFtZSAhPT0gJyhvcHRpb25hbCknKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5jbG91ZGluYXJ5LmNvbS92MV8xL2Vrb2Vrby9pbWFnZS91cGxvYWQnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRVcmwocmVzLmRhdGEudXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBkb1JlcXVlc3QoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEFycm93QmFyIHRpdGxlPSdDcmVhdGUgYSBwb3N0JyAvPlxyXG4gICAgICA8U2lkZUJhciAvPlxyXG4gICAgICA8TGF5ZXIgLz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdH0gY2xhc3NOYW1lPXtjcmVhdGVTdHlsZXMud3JhcH0+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgICAgdmFsdWU9e3RvcGljfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb3BpYyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nU3RhcnR1cHMnPlN0YXJ0dXBzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdGaXRuZXNzJz5GaXRuZXNzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdMYW5ndWFnZSc+TGFuZ3VhZ2U8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1NjaG9vbCc+U2Nob29sPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdUcmF2ZWxpbmcnPlRyYXZlbGluZzwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgbWluTGVuZ3RoPSc4J1xyXG4gICAgICAgICAgbWF4TGVuZ3RoPSc0MCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVGl0bGUnfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NyZWF0ZVN0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpbGVOYW1lKGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgICAgaWQ9J2ltYWdlJ1xyXG4gICAgICAgICAgICBhY2NlcHQ9J2ltYWdlLyonXHJcbiAgICAgICAgICAgIHR5cGU9J2ZpbGUnXHJcbiAgICAgICAgICAgIG5hbWU9J2ltYWdlJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdpbWFnZSc+Q2hvb3NlIGFuIGltYWdlPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjcmVhdGVTdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgIDxzcGFuPntmaWxlTmFtZS5uYW1lID8gZmlsZU5hbWUubmFtZSA6IGZpbGVOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbGVOYW1lKCcob3B0aW9uYWwpJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGZpbGVOYW1lLm5hbWUgPyBjcmVhdGVTdHlsZXMuZGVsUGljIDogY3JlYXRlU3R5bGVzLmhpZGVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD0nMjQnXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzI0J1xyXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgICAgIHN0cm9rZT0nI2ZmMmYyZidcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCc+PC9saW5lPlxyXG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCc+PC9saW5lPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBtaW5MZW5ndGg9JzEwJ1xyXG4gICAgICAgICAgbWF4TGVuZ3RoPScyNzUnXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICcyMnJlbScsXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcxcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdUZXh0J1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5XcmFwcGVyfT5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9wb3N0cycpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5jYW5jZWxCdG59XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuYXBwbHlCdG59PlxyXG4gICAgICAgICAgICBQb3N0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7ZXJyb3JzfVxyXG4gICAgICA8Qm90dG9tQmFyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9zdDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVxdWVzdCIsImF4aW9zIiwiUm91dGVyIiwiQ29va2llcyIsImNvbXBvbmVudFN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsIkFycm93QmFyIiwiU2lkZUJhciIsIkJvdHRvbUJhciIsIkxheWVyIiwiQ3JlYXRlUG9zdCIsInRvcGljIiwic2V0VG9waWMiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJmaWxlTmFtZSIsInNldEZpbGVOYW1lIiwidXJsIiwic2V0VXJsIiwibWV0aG9kIiwiYm9keSIsImNvdmVySW1hZ2UiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldCIsIm9uU3VjY2VzcyIsInB1c2giLCJ0b0xvd2VyQ2FzZSIsImRvUmVxdWVzdCIsImVycm9ycyIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlcyIsIndyYXAiLCJ0ZXh0SW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndyYXBwZXIiLCJmaWxlcyIsIm5hbWUiLCJkZWxQaWMiLCJoaWRlIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsImJvcmRlciIsImJ0bldyYXBwZXIiLCJjYW5jZWxCdG4iLCJhcHBseUJ0biJdLCJzb3VyY2VSb290IjoiIn0=