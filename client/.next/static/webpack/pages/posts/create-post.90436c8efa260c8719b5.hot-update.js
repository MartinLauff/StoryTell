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
      var data, _data, res;

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
                _context.next = 17;
                break;
              }

              _context.prev = 7;
              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                method: 'post',
                url: 'https://api.cloudinary.com/v1_1/ekoeko/image/upload',
                data: _data,
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });

            case 10:
              _data = _context.sent;
              console.log(_data);
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](7);
              console.log(_context.t0);

            case 17:
              _context.next = 19;
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

            case 19:
              res = _context.sent;

              if (res) {
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/topics/".concat(topic.toLowerCase()));
              }

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 14]]);
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
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_SideBar__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_Layer__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
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
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Fitness",
          children: "Fitness"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Language",
          children: "Language"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "School",
          children: "School"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
          value: "Traveling",
          children: "Traveling"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
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
        lineNumber: 80,
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
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
          htmlFor: "image",
          children: "Choose an image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_styles_Create_module_css__WEBPACK_IMPORTED_MODULE_11___default().name),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            children: fileName.name ? fileName.name : fileName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
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
                lineNumber: 116,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
        lineNumber: 122,
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
          lineNumber: 136,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          type: "submit",
          className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default().applyBtn),
          children: "Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), err, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvY3JlYXRlLXBvc3QuOTA0MzZjOGVmYTI2MGM4NzE5YjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLGtCQUEwQlYsK0NBQVEsQ0FBQyxTQUFELENBQWxDO0FBQUEsTUFBT1csS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQTBCWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPYSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEJkLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9lLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQWdDaEIsK0NBQVEsQ0FBQyxZQUFELENBQXhDO0FBQUEsTUFBT2lCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQXNCbEIsK0NBQVEsQ0FBQyxJQUFELENBQTlCO0FBQUEsTUFBT21CLEdBQVA7QUFBQSxNQUFZQyxNQUFaOztBQUNBLG1CQUFzQnBCLCtDQUFRLENBQUMsRUFBRCxDQUE5QjtBQUFBLE1BQU9xQixHQUFQO0FBQUEsTUFBWUMsTUFBWjs7QUFFQSxNQUFNQyxNQUFNO0FBQUEsNlNBQUcsaUJBQU9DLENBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7O0FBRGEsb0JBR1QsQ0FBQ2QsS0FBRCxJQUFVLENBQUNFLEtBQVgsSUFBb0IsQ0FBQ0UsT0FIWjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQU9QVyxjQUFBQSxJQVBPLEdBT0EsSUFBSUMsUUFBSixFQVBBO0FBUWJELGNBQUFBLElBQUksQ0FBQ0UsTUFB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akM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBbUZHZSxHQW5GSCxlQW9GRSwrREFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0ZELENBM0lEOztHQUFNVDs7S0FBQUE7QUE2SU4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvY3JlYXRlLXBvc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgY29tcG9uZW50U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Db21wb25lbnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgY3JlYXRlU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9DcmVhdGUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBBcnJvd0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhcnMvQXJyb3dCYXInO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhcnMvU2lkZUJhcic7XHJcbmltcG9ydCBCb3R0b21CYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXJzL0JvdHRvbUJhcic7XHJcbmltcG9ydCBMYXllciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhcnMvTGF5ZXInO1xyXG5cclxuY29uc3QgQ3JlYXRlUG9zdCA9ICgpID0+IHtcclxuICBjb25zdCBbdG9waWMsIHNldFRvcGljXSA9IHVzZVN0YXRlKCdGaXRuZXNzJyk7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gdXNlU3RhdGUoJyhvcHRpb25hbCknKTtcclxuICBjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIXRvcGljIHx8ICF0aXRsZSB8fCAhY29udGVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlTmFtZSk7XHJcbiAgICBkYXRhLmFwcGVuZCgndXBsb2FkX3ByZXNldCcsICdzdG9yeXRlbGwnKTtcclxuXHJcbiAgICBpZiAoZmlsZU5hbWUgIT09ICcob3B0aW9uYWwpJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvZWtvZWtvL2ltYWdlL3VwbG9hZCcsXHJcbiAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgICAgLy8gc2V0VXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wb3N0cy8nLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdG9waWMsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgY292ZXJJbWFnZTogdXJsIHx8ICcnLFxyXG4gICAgICAgIGNvbnRlbnQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgQ29va2llcy5nZXQoJ2p3dCcpIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdG9waWNzLyR7dG9waWMudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEFycm93QmFyIHRpdGxlPSdDcmVhdGUgYSBwb3N0JyAvPlxyXG4gICAgICA8U2lkZUJhciAvPlxyXG4gICAgICA8TGF5ZXIgLz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdH0gY2xhc3NOYW1lPXtjcmVhdGVTdHlsZXMud3JhcH0+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgICAgdmFsdWU9e3RvcGljfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb3BpYyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nU3RhcnR1cHMnPlN0YXJ0dXBzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdGaXRuZXNzJz5GaXRuZXNzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdMYW5ndWFnZSc+TGFuZ3VhZ2U8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1NjaG9vbCc+U2Nob29sPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdUcmF2ZWxpbmcnPlRyYXZlbGluZzwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgbWluTGVuZ3RoPSc4J1xyXG4gICAgICAgICAgbWF4TGVuZ3RoPSc0MCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVGl0bGUnfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NyZWF0ZVN0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpbGVOYW1lKGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgICAgaWQ9J2ltYWdlJ1xyXG4gICAgICAgICAgICBhY2NlcHQ9J2ltYWdlLyonXHJcbiAgICAgICAgICAgIHR5cGU9J2ZpbGUnXHJcbiAgICAgICAgICAgIG5hbWU9J2ltYWdlJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdpbWFnZSc+Q2hvb3NlIGFuIGltYWdlPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjcmVhdGVTdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgIDxzcGFuPntmaWxlTmFtZS5uYW1lID8gZmlsZU5hbWUubmFtZSA6IGZpbGVOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbGVOYW1lKCcob3B0aW9uYWwpJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGZpbGVOYW1lLm5hbWUgPyBjcmVhdGVTdHlsZXMuZGVsUGljIDogY3JlYXRlU3R5bGVzLmhpZGVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD0nMjQnXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzI0J1xyXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgICAgIHN0cm9rZT0nI2ZmMmYyZidcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCc+PC9saW5lPlxyXG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCc+PC9saW5lPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBtaW5MZW5ndGg9JzEwJ1xyXG4gICAgICAgICAgbWF4TGVuZ3RoPScyNzUnXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICcyMnJlbScsXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcxcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdUZXh0J1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5XcmFwcGVyfT5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9wb3N0cycpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5jYW5jZWxCdG59XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuYXBwbHlCdG59PlxyXG4gICAgICAgICAgICBQb3N0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7ZXJyfVxyXG4gICAgICA8Qm90dG9tQmFyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9zdDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJSb3V0ZXIiLCJDb29raWVzIiwiY29tcG9uZW50U3R5bGVzIiwiY3JlYXRlU3R5bGVzIiwiQXJyb3dCYXIiLCJTaWRlQmFyIiwiQm90dG9tQmFyIiwiTGF5ZXIiLCJDcmVhdGVQb3N0IiwidG9waWMiLCJzZXRUb3BpYyIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImZpbGVOYW1lIiwic2V0RmlsZU5hbWUiLCJlcnIiLCJzZXRFcnIiLCJ1cmwiLCJzZXRVcmwiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsImNvdmVySW1hZ2UiLCJBdXRob3JpemF0aW9uIiwiZ2V0IiwicmVzIiwicHVzaCIsInRvTG93ZXJDYXNlIiwid3JhcCIsInRleHRJbnB1dCIsInRhcmdldCIsInZhbHVlIiwid3JhcHBlciIsImZpbGVzIiwibmFtZSIsImRlbFBpYyIsImhpZGUiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwiYm9yZGVyIiwiYnRuV3JhcHBlciIsImNhbmNlbEJ0biIsImFwcGx5QnRuIl0sInNvdXJjZVJvb3QiOiIifQ==