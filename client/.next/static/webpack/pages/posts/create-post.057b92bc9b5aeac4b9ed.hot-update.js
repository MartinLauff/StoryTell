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

  var submit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Lenovo_Desktop_Codes_storytell_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var data, _yield$axios, _url, res;

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
              _yield$axios = _context.sent;
              _url = _yield$axios.url;
              console.log(_url);
              setUrl(_url);

            case 13:
              _context.next = 15;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
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
              });

            case 15:
              res = _context.sent;

              if (res) {
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/topics/".concat(topic.toLowerCase()));
              }

            case 17:
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
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_SideBar__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_Layer__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Fitness",
          children: "Fitness"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Language",
          children: "Language"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "School",
          children: "School"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Traveling",
          children: "Traveling"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
        lineNumber: 76,
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
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
          htmlFor: "image",
          children: "Choose an image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_11___default().name),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            children: fileName.name ? fileName.name : fileName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
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
                lineNumber: 112,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
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
        lineNumber: 118,
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
          lineNumber: 132,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          type: "submit",
          className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default().applyBtn),
          children: "Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), err, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, _this);
};

_s(CreatePost, "RdffKW9Dr5gTsBrJQgo8pQ8dct0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvY3JlYXRlLXBvc3QuMDU3YjkyYmM5YjVhZWFjNGI5ZWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLGtCQUEwQlYsK0NBQVEsQ0FBQyxTQUFELENBQWxDO0FBQUEsTUFBT1csS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQTBCWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPYSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEJkLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9lLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQWdDaEIsK0NBQVEsQ0FBQyxZQUFELENBQXhDO0FBQUEsTUFBT2lCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQXNCbEIsK0NBQVEsQ0FBQyxJQUFELENBQTlCO0FBQUEsTUFBT21CLEdBQVA7QUFBQSxNQUFZQyxNQUFaOztBQUNBLG1CQUFzQnBCLCtDQUFRLENBQUMsRUFBRCxDQUE5QjtBQUFBLE1BQU9xQixHQUFQO0FBQUEsTUFBWUMsTUFBWjs7QUFFQSxNQUFNQyxNQUFNO0FBQUEsNlNBQUcsaUJBQU9DLENBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7O0FBRGEsb0JBR1QsQ0FBQ2QsS0FBRCxJQUFVLENBQUNFLEtBQVgsSUFBb0IsQ0FBQ0UsT0FIWjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQU9QVyxjQUFBQSxJQVBPLEdBT0EsSUFBSUMsUUFBSixFQVBBO0FBUWJELGNBQUFBLElBQUksQ0FBQ0UsTUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixFQW1GR2UsR0FuRkgsZUFvRkUsK0RBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdGRCxDQXZJRDs7R0FBTVQ7O0tBQUFBO0FBeUlOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL2NyZWF0ZS1wb3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ29tcG9uZW50cy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGNyZWF0ZVN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ3JlYXRlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQXJyb3dCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL0Fycm93QmFyJztcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL1NpZGVCYXInO1xyXG5pbXBvcnQgQm90dG9tQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFycy9Cb3R0b21CYXInO1xyXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL0xheWVyJztcclxuXHJcbmNvbnN0IENyZWF0ZVBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvcGljLCBzZXRUb3BpY10gPSB1c2VTdGF0ZSgnRml0bmVzcycpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKCcob3B0aW9uYWwpJyk7XHJcbiAgY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCF0b3BpYyB8fCAhdGl0bGUgfHwgIWNvbnRlbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZU5hbWUpO1xyXG4gICAgZGF0YS5hcHBlbmQoJ3VwbG9hZF9wcmVzZXQnLCAnc3Rvcnl0ZWxsJyk7XHJcblxyXG4gICAgaWYgKGZpbGVOYW1lICE9PSAnKG9wdGlvbmFsKScpIHtcclxuICAgICAgY29uc3QgeyB1cmwgfSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5jbG91ZGluYXJ5LmNvbS92MV8xL2Vrb2Vrby9pbWFnZS91cGxvYWQnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICBzZXRVcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Bvc3RzLycsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0b3BpYyxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBjb3ZlckltYWdlOiB1cmwgfHwgJycsXHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgfSxcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBDb29raWVzLmdldCgnand0JykgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXMpIHtcclxuICAgICAgUm91dGVyLnB1c2goYC90b3BpY3MvJHt0b3BpYy50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QXJyb3dCYXIgdGl0bGU9J0NyZWF0ZSBhIHBvc3QnIC8+XHJcbiAgICAgIDxTaWRlQmFyIC8+XHJcbiAgICAgIDxMYXllciAvPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0fSBjbGFzc05hbWU9e2NyZWF0ZVN0eWxlcy53cmFwfT5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgICB2YWx1ZT17dG9waWN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvcGljKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdTdGFydHVwcyc+U3RhcnR1cHM8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0ZpdG5lc3MnPkZpdG5lc3M8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0xhbmd1YWdlJz5MYW5ndWFnZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nU2Nob29sJz5TY2hvb2w8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1RyYXZlbGluZyc+VHJhdmVsaW5nPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBtaW5MZW5ndGg9JzgnXHJcbiAgICAgICAgICBtYXhMZW5ndGg9JzQwJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9eydUaXRsZSd9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3JlYXRlU3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmlsZU5hbWUoZS50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgICAgICBpZD0naW1hZ2UnXHJcbiAgICAgICAgICAgIGFjY2VwdD0naW1hZ2UvKidcclxuICAgICAgICAgICAgdHlwZT0nZmlsZSdcclxuICAgICAgICAgICAgbmFtZT0naW1hZ2UnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2ltYWdlJz5DaG9vc2UgYW4gaW1hZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NyZWF0ZVN0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgPHNwYW4+e2ZpbGVOYW1lLm5hbWUgPyBmaWxlTmFtZS5uYW1lIDogZmlsZU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsZU5hbWUoJyhvcHRpb25hbCknKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgZmlsZU5hbWUubmFtZSA/IGNyZWF0ZVN0eWxlcy5kZWxQaWMgOiBjcmVhdGVTdHlsZXMuaGlkZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgICAgIHdpZHRoPScyNCdcclxuICAgICAgICAgICAgICAgIGhlaWdodD0nMjQnXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPScjZmYyZjJmJ1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9JzInXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGluZSB4MT0nMTgnIHkxPSc2JyB4Mj0nNicgeTI9JzE4Jz48L2xpbmU+XHJcbiAgICAgICAgICAgICAgICA8bGluZSB4MT0nNicgeTE9JzYnIHgyPScxOCcgeTI9JzE4Jz48L2xpbmU+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIG1pbkxlbmd0aD0nMTAnXHJcbiAgICAgICAgICBtYXhMZW5ndGg9JzI3NSdcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzIycmVtJyxcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogJzFyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgIzAwMCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1RleHQnXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJ0bldyYXBwZXJ9PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3Bvc3RzJyl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmNhbmNlbEJ0bn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5hcHBseUJ0bn0+XHJcbiAgICAgICAgICAgIFBvc3RcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIHtlcnJ9XHJcbiAgICAgIDxCb3R0b21CYXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQb3N0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIlJvdXRlciIsIkNvb2tpZXMiLCJjb21wb25lbnRTdHlsZXMiLCJjcmVhdGVTdHlsZXMiLCJBcnJvd0JhciIsIlNpZGVCYXIiLCJCb3R0b21CYXIiLCJMYXllciIsIkNyZWF0ZVBvc3QiLCJ0b3BpYyIsInNldFRvcGljIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsImVyciIsInNldEVyciIsInVybCIsInNldFVybCIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiY292ZXJJbWFnZSIsIkF1dGhvcml6YXRpb24iLCJnZXQiLCJyZXMiLCJwdXNoIiwidG9Mb3dlckNhc2UiLCJ3cmFwIiwidGV4dElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJ3cmFwcGVyIiwiZmlsZXMiLCJuYW1lIiwiZGVsUGljIiwiaGlkZSIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJib3JkZXIiLCJidG5XcmFwcGVyIiwiY2FuY2VsQnRuIiwiYXBwbHlCdG4iXSwic291cmNlUm9vdCI6IiJ9