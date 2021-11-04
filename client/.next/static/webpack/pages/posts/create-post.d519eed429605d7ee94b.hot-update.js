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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      err = _useState5[0],
      setErr = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      url = _useState6[0],
      setUrl = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (url) {
      axios__WEBPACK_IMPORTED_MODULE_3___default()({
        method: 'post',
        url: 'http://localhost:8000/api/posts/',
        data: {
          topic: topic,
          title: title,
          coverImage: url || '',
          content: content
        },
        headers: {
          Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_5__.default.get('jwt')
        }
      }).then(next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/topics/".concat(topic.toLowerCase())));
    }
  }, [url]);

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
              setUrl(res.data.url);

            case 11:
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
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_SideBar__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_Layer__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Fitness",
          children: "Fitness"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Language",
          children: "Language"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "School",
          children: "School"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Traveling",
          children: "Traveling"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
        lineNumber: 75,
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
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
          htmlFor: "image",
          children: "Choose an image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_11___default().name),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            children: fileName.name ? fileName.name : fileName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
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
                lineNumber: 111,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
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
        lineNumber: 117,
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
          lineNumber: 131,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          type: "submit",
          className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default().applyBtn),
          children: "Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), err, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, _this);
};

_s(CreatePost, "vCNpVLbUoFDhtR/wru6N/LWlMYY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvY3JlYXRlLXBvc3QuZDUxOWVlZDQyOTYwNWQ3ZWU5NGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLGtCQUEwQlgsK0NBQVEsQ0FBQyxTQUFELENBQWxDO0FBQUEsTUFBT1ksS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQTBCYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPYyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEJmLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9nQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFnQ2pCLCtDQUFRLENBQUMsWUFBRCxDQUF4QztBQUFBLE1BQU9rQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFzQm5CLCtDQUFRLENBQUMsSUFBRCxDQUE5QjtBQUFBLE1BQU9vQixHQUFQO0FBQUEsTUFBWUMsTUFBWjs7QUFDQSxtQkFBc0JyQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUI7QUFBQSxNQUFPc0IsR0FBUDtBQUFBLE1BQVlDLE1BQVo7O0FBRUF0QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJcUIsR0FBSixFQUFTO0FBQ1BwQixNQUFBQSw0Q0FBSyxDQUFDO0FBQ0pzQixRQUFBQSxNQUFNLEVBQUUsTUFESjtBQUVKRixRQUFBQSxHQUFHLEVBQUUsa0NBRkQ7QUFHSkcsUUFBQUEsSUFBSSxFQUFFO0FBQ0piLFVBQUFBLEtBQUssRUFBTEEsS0FESTtBQUVKRSxVQUFBQSxLQUFLLEVBQUxBLEtBRkk7QUFHSlksVUFBQUEsVUFBVSxFQUFFSixHQUFHLElB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O0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsRUFtRkdlLEdBbkZILGVBb0ZFLCtEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3RkQsQ0F0SUQ7O0dBQU1UOztLQUFBQTtBQXdJTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9jcmVhdGUtcG9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGNyZWF0ZVN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ3JlYXRlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQXJyb3dCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL0Fycm93QmFyJztcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL1NpZGVCYXInO1xyXG5pbXBvcnQgQm90dG9tQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFycy9Cb3R0b21CYXInO1xyXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL0xheWVyJztcclxuXHJcbmNvbnN0IENyZWF0ZVBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvcGljLCBzZXRUb3BpY10gPSB1c2VTdGF0ZSgnRml0bmVzcycpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKCcob3B0aW9uYWwpJyk7XHJcbiAgY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Bvc3RzLycsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdG9waWMsXHJcbiAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgIGNvdmVySW1hZ2U6IHVybCB8fCAnJyxcclxuICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIENvb2tpZXMuZ2V0KCdqd3QnKSB9LFxyXG4gICAgICB9KS50aGVuKFJvdXRlci5wdXNoKGAvdG9waWNzLyR7dG9waWMudG9Mb3dlckNhc2UoKX1gKSk7XHJcbiAgICB9XHJcbiAgfSwgW3VybF0pO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghdG9waWMgfHwgIXRpdGxlIHx8ICFjb250ZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGVOYW1lKTtcclxuICAgIGRhdGEuYXBwZW5kKCd1cGxvYWRfcHJlc2V0JywgJ3N0b3J5dGVsbCcpO1xyXG5cclxuICAgIGlmIChmaWxlTmFtZSAhPT0gJyhvcHRpb25hbCknKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5jbG91ZGluYXJ5LmNvbS92MV8xL2Vrb2Vrby9pbWFnZS91cGxvYWQnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRVcmwocmVzLmRhdGEudXJsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEFycm93QmFyIHRpdGxlPSdDcmVhdGUgYSBwb3N0JyAvPlxyXG4gICAgICA8U2lkZUJhciAvPlxyXG4gICAgICA8TGF5ZXIgLz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdH0gY2xhc3NOYW1lPXtjcmVhdGVTdHlsZXMud3JhcH0+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgICAgdmFsdWU9e3RvcGljfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb3BpYyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nU3RhcnR1cHMnPlN0YXJ0dXBzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdGaXRuZXNzJz5GaXRuZXNzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdMYW5ndWFnZSc+TGFuZ3VhZ2U8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1NjaG9vbCc+U2Nob29sPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdUcmF2ZWxpbmcnPlRyYXZlbGluZzwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgbWluTGVuZ3RoPSc4J1xyXG4gICAgICAgICAgbWF4TGVuZ3RoPSc0MCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVGl0bGUnfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NyZWF0ZVN0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpbGVOYW1lKGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgICAgaWQ9J2ltYWdlJ1xyXG4gICAgICAgICAgICBhY2NlcHQ9J2ltYWdlLyonXHJcbiAgICAgICAgICAgIHR5cGU9J2ZpbGUnXHJcbiAgICAgICAgICAgIG5hbWU9J2ltYWdlJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdpbWFnZSc+Q2hvb3NlIGFuIGltYWdlPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjcmVhdGVTdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgIDxzcGFuPntmaWxlTmFtZS5uYW1lID8gZmlsZU5hbWUubmFtZSA6IGZpbGVOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbGVOYW1lKCcob3B0aW9uYWwpJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGZpbGVOYW1lLm5hbWUgPyBjcmVhdGVTdHlsZXMuZGVsUGljIDogY3JlYXRlU3R5bGVzLmhpZGVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD0nMjQnXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzI0J1xyXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgICAgIHN0cm9rZT0nI2ZmMmYyZidcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCc+PC9saW5lPlxyXG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCc+PC9saW5lPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBtaW5MZW5ndGg9JzEwJ1xyXG4gICAgICAgICAgbWF4TGVuZ3RoPScyNzUnXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICcyMnJlbScsXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcxcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdUZXh0J1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5XcmFwcGVyfT5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9wb3N0cycpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5jYW5jZWxCdG59XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuYXBwbHlCdG59PlxyXG4gICAgICAgICAgICBQb3N0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7ZXJyfVxyXG4gICAgICA8Qm90dG9tQmFyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9zdDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJSb3V0ZXIiLCJDb29raWVzIiwiY29tcG9uZW50U3R5bGVzIiwiY3JlYXRlU3R5bGVzIiwiQXJyb3dCYXIiLCJTaWRlQmFyIiwiQm90dG9tQmFyIiwiTGF5ZXIiLCJDcmVhdGVQb3N0IiwidG9waWMiLCJzZXRUb3BpYyIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImZpbGVOYW1lIiwic2V0RmlsZU5hbWUiLCJlcnIiLCJzZXRFcnIiLCJ1cmwiLCJzZXRVcmwiLCJtZXRob2QiLCJkYXRhIiwiY292ZXJJbWFnZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0IiwidGhlbiIsInB1c2giLCJ0b0xvd2VyQ2FzZSIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzIiwid3JhcCIsInRleHRJbnB1dCIsInRhcmdldCIsInZhbHVlIiwid3JhcHBlciIsImZpbGVzIiwibmFtZSIsImRlbFBpYyIsImhpZGUiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwiYm9yZGVyIiwiYnRuV3JhcHBlciIsImNhbmNlbEJ0biIsImFwcGx5QnRuIl0sInNvdXJjZVJvb3QiOiIifQ==