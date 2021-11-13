"use strict";
self["webpackHotUpdate_N_E"]("pages/topics/[topicSlug]",{

/***/ "./components/bars/SideBar.js":
/*!************************************!*\
  !*** ./components/bars/SideBar.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/GlobalCtx */ "./context/GlobalCtx.js");
/* harmony import */ var _styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Bar.module.css */ "./styles/Bar.module.css");
/* harmony import */ var _styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\storytell\\client\\components\\bars\\SideBar.js",
    _this = undefined,
    _s = $RefreshSig$();







var SideBar = function SideBar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      toggle = _useState[0],
      setToggle = _useState[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__.GlobalContext),
      sidebar = _useContext.sidebar,
      setSidebar = _useContext.setSidebar;

  var close = function close() {
    setSidebar(false);
  };

  var scrollStyle = "\n    html::-webkit-scrollbar {\n      width: 1.6rem;\n    }\n    html::-webkit-scrollbar-track {\n      background: hsl(0, 0%, 100%);\n      border-radius: 100vw;\n    }\n    html::-webkit-scrollbar-thumb {\n      background: hsl(0, 0%, 33%);\n      border: 0.4em solid #fff;\n      border-radius: 100vw;\n      transition: all 0.3s;\n    }\n    html::-webkit-scrollbar-thumb:hover {\n      background: hsl(0, 0%, 43%);\n    }\n    ";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "".concat((_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidebar), " ").concat(sidebar ? (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default().open) : (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default().close)),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("style", {
      children: sidebar ? "\n      body {\n        overflow: hidden;\n      }\n    " : scrollStyle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
      children: "Storytell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/posts",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
          width: "21",
          height: "19",
          viewBox: "0 0 21 19",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
            d: "M20.4153 10.4558H18.4925V17.3558C18.4925 17.8675 18.2694 18.5058 17.3425 18.5058H12.7425V11.6058H8.14249V18.5058H3.54249C2.61559 18.5058 2.39249 17.8675 2.39249 17.3558V10.4558H0.469692C-0.218008 10.4558 -0.0708078 10.0832 0.400692 9.5956L9.62829 0.3588C9.85254 0.1265 10.1469 0.0115 10.4425 0C10.738 0.0115 11.0324 0.12535 11.2567 0.3588L20.4831 9.59445C20.9558 10.0832 21.103 10.4558 20.4153 10.4558Z",
            fill: "black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/premium",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
          width: "22",
          height: "18",
          viewBox: "0 0 22 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
            d: "M18.15 15.4H3.85C3.5475 15.4 3.3 15.6475 3.3 15.95V17.05C3.3 17.3525 3.5475 17.6 3.85 17.6H18.15C18.4525 17.6 18.7 17.3525 18.7 17.05V15.95C18.7 15.6475 18.4525 15.4 18.15 15.4ZM20.35 4.4C19.4391 4.4 18.7 5.13906 18.7 6.05C18.7 6.29406 18.755 6.52094 18.8513 6.73063L16.3625 8.2225C15.8331 8.53875 15.1491 8.36 14.8431 7.82375L12.0416 2.92188C12.4094 2.61937 12.65 2.16563 12.65 1.65C12.65 0.739063 11.9109 0 11 0C10.0891 0 9.35 0.739063 9.35 1.65C9.35 2.16563 9.59063 2.61937 9.95844 2.92188L7.15688 7.82375C6.85094 8.36 6.16344 8.53875 5.6375 8.2225L3.15219 6.73063C3.245 6.52438 3.30344 6.29406 3.30344 6.05C3.30344 5.13906 2.56438 4.4 1.65344 4.4C0.7425 4.4 0 5.13906 0 6.05C0 6.96094 0.739063 7.7 1.65 7.7C1.73938 7.7 1.82875 7.68625 1.91469 7.6725L4.4 14.3H17.6L20.0853 7.6725C20.1712 7.68625 20.2606 7.7 20.35 7.7C21.2609 7.7 22 6.96094 22 6.05C22 5.13906 21.2609 4.4 20.35 4.4Z",
            fill: "black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "Get Storytell Pro"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/posts/create-post",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
          width: "19",
          height: "19",
          viewBox: "0 0 19 19",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
            d: "M16.5 0.75H2.5C1.5375 0.75 0.75875 1.5375 0.75875 2.5L0.75 18.25L4.25 14.75H16.5C17.4625 14.75 18.25 13.9625 18.25 13V2.5C18.25 1.5375 17.4625 0.75 16.5 0.75ZM10.375 11.25H8.625V9.5H10.375V11.25ZM10.375 7.75H8.625V4.25H10.375V7.75Z",
            fill: "black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "Send feedback"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
          d: "M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389951 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 8.54 17.96 8.08 17.9 7.64C17.4003 8.34066 16.7401 8.91146 15.9746 9.30465C15.2091 9.69784 14.3606 9.90198 13.5 9.9C12.3552 9.90003 11.24 9.53643 10.3152 8.86166C9.39041 8.18688 8.70385 7.23581 8.35454 6.14561C8.00523 5.05541 8.01123 3.88243 8.37167 2.79586C8.73211 1.70928 9.42836 0.765281 10.36 0.0999999C9.92 0.0399999 9.46 0 9 0Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        children: "Dark mode"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        onClick: function onClick() {
          return setToggle(function (oldState) {
            return !oldState;
          });
        },
        className: (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default().toggle),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: toggle ? (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default().dark) : (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default().white)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/auth/signout",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        onClick: function onClick() {
          return setSidebar(false);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
            d: "M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H8C8.26522 18 8.51957 17.8946 8.70711 17.7071C8.89464 17.5196 9 17.2652 9 17C9 16.7348 8.89464 16.4804 8.70711 16.2929C8.51957 16.1054 8.26522 16 8 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8C8.26522 2 8.51957 1.89464 8.70711 1.70711C8.89464 1.51957 9 1.26522 9 1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0H3Z",
            fill: "#FF4040"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
            d: "M12.293 4.29303C12.4805 4.10556 12.7348 4.00024 13 4.00024C13.2652 4.00024 13.5195 4.10556 13.707 4.29303L17.707 8.29303C17.8945 8.48056 17.9998 8.73487 17.9998 9.00003C17.9998 9.26519 17.8945 9.5195 17.707 9.70703L13.707 13.707C13.5184 13.8892 13.2658 13.99 13.0036 13.9877C12.7414 13.9854 12.4906 13.8803 12.3052 13.6948C12.1198 13.5094 12.0146 13.2586 12.0123 12.9964C12.01 12.7342 12.1108 12.4816 12.293 12.293L14.586 10H7C6.73478 10 6.48043 9.89467 6.29289 9.70714C6.10536 9.5196 6 9.26525 6 9.00003C6 8.73481 6.10536 8.48046 6.29289 8.29292C6.48043 8.10539 6.73478 8.00003 7 8.00003H14.586L12.293 5.70703C12.1055 5.5195 12.0002 5.26519 12.0002 5.00003C12.0002 4.73487 12.1055 4.48056 12.293 4.29303Z",
            fill: "#FF4040"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          style: {
            color: '#FF4040'
          },
          children: "Log out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
      children: "Popular topics"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/topics/[topicSlug]",
      as: '/topics/fitness',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        onClick: close,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          src: "/fitness.jpg",
          alt: "fitness"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "s/Fitness"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/topics/[topicSlug]",
      as: '/topics/startups',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        onClick: close,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          src: "/startups.jpg",
          alt: "startups"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "s/Startups"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/topics/[topicSlug]",
      as: '/topics/language',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        onClick: close,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          src: "/language.jpg",
          alt: "language"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "s/Language"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/topics/[topicSlug]",
      as: '/topics/school',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        onClick: close,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          src: "/school.jpg",
          alt: "school"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "s/School"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/topics/[topicSlug]",
      as: '/topics/traveling',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        onClick: close,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          src: "/traveling.jpg",
          alt: "traveling"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "s/Traveling"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(SideBar, "iCmUVg624XU8TfqxdBGlTvLjoFE=");

_c = SideBar;
/* harmony default export */ __webpack_exports__["default"] = (SideBar);

var _c;

$RefreshReg$(_c, "SideBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9waWNzL1t0b3BpY1NsdWddLmZjOGY0MTUxNmQyMjI0Y2MyZTEwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsa0JBQTRCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPSyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxvQkFBZ0NMLGlEQUFVLENBQUNDLDZEQUFELENBQTFDO0FBQUEsTUFBUUssT0FBUixlQUFRQSxPQUFSO0FBQUEsTUFBaUJDLFVBQWpCLGVBQWlCQSxVQUFqQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCRCxJQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsR0FGRDs7QUFHQSxNQUFNRSxXQUFXLHNiQUFqQjtBQW1CQSxzQkFDRTtBQUNFLGFBQVMsWUFBS1AsdUVBQUwsY0FDUEksT0FBTyxHQUFHSixvRUFBSCxHQUFvQkEscUVBRHBCLENBRFg7QUFBQSw0QkFLRTtBQUFBLGdCQUNHSSxPQUFPLGdFQU1KRztBQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEYsZUFlRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxRQUFYO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUNFLGVBQUssRUFBQyxJQURSO0FBRUUsZ0JBQU0sRUFBQyxJQUZUO0FBR0UsaUJBQU8sRUFBQyxXQUhWO0FBSUUsY0FBSSxFQUFDLE1BSlA7QUFLRSxlQUFLLEVBQUMsNEJBTFI7QUFBQSxpQ0FPRTtBQUNFLGFBQUMsRUFBQyxvWkFESjtBQUVFLGdCQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FB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QTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpIRixlQStIRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxxQkFBWDtBQUFpQyxRQUFFLEVBQUUsZ0JBQXJDO0FBQUEsNkJBQ0U7QUFBRyxlQUFPLEVBQUVBLEtBQVo7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyxhQUFUO0FBQXVCLGFBQUcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9IRixlQXFJRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxxQkFBWDtBQUFpQyxRQUFFLEVBQUUsbUJBQXJDO0FBQUEsNkJBQ0U7QUFBRyxlQUFPLEVBQUVBLEtBQVo7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyxnQkFBVDtBQUEwQixhQUFHLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFySUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4SUQsQ0F2S0Q7O0dBQU1MOztLQUFBQTtBQXdLTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JhcnMvU2lkZUJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvR2xvYmFsQ3R4JztcclxuaW1wb3J0IEJhclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQmFyLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgU2lkZUJhciA9ICgpID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgc2lkZWJhciwgc2V0U2lkZWJhciB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBjbG9zZSA9ICgpID0+IHtcclxuICAgIHNldFNpZGViYXIoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3Qgc2Nyb2xsU3R5bGUgPSBgXHJcbiAgICBodG1sOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIHdpZHRoOiAxLjZyZW07XHJcbiAgICB9XHJcbiAgICBodG1sOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgMTAwJSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xyXG4gICAgfVxyXG4gICAgaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDMzJSk7XHJcbiAgICAgIGJvcmRlcjogMC40ZW0gc29saWQgI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwdnc7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgfVxyXG4gICAgaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDQzJSk7XHJcbiAgICB9XHJcbiAgICBgO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Ake0JhclN0eWxlcy5zaWRlYmFyfSAke1xyXG4gICAgICAgIHNpZGViYXIgPyBCYXJTdHlsZXMub3BlbiA6IEJhclN0eWxlcy5jbG9zZVxyXG4gICAgICB9YH1cclxuICAgID5cclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgIHtzaWRlYmFyXHJcbiAgICAgICAgICA/IGBcclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gICAgICAgICAgOiBzY3JvbGxTdHlsZX1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPGgzPlN0b3J5dGVsbDwvaDM+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy9wb3N0cyc+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHdpZHRoPScyMSdcclxuICAgICAgICAgICAgaGVpZ2h0PScxOSdcclxuICAgICAgICAgICAgdmlld0JveD0nMCAwIDIxIDE5J1xyXG4gICAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD0nTTIwLjQxNTMgMTAuNDU1OEgxOC40OTI1VjE3LjM1NThDMTguNDkyNSAxNy44Njc1IDE4LjI2OTQgMTguNTA1OCAxNy4zNDI1IDE4LjUwNThIMTIuNzQyNVYxMS42MDU4SDguMTQyNDlWMTguNTA1OEgzLjU0MjQ5QzIuNjE1NTkgMTguNTA1OCAyLjM5MjQ5IDE3Ljg2NzUgMi4zOTI0OSAxNy4zNTU4VjEwLjQ1NThIMC40Njk2OTJDLTAuMjE4MDA4IDEwLjQ1NTggLTAuMDcwODA3OCAxMC4wODMyIDAuNDAwNjkyIDkuNTk1Nkw5LjYyODI5IDAuMzU4OEM5Ljg1MjU0IDAuMTI2NSAxMC4xNDY5IDAuMDExNSAxMC40NDI1IDBDMTAuNzM4IDAuMDExNSAxMS4wMzI0IDAuMTI1MzUgMTEuMjU2NyAwLjM1ODhMMjAuNDgzMSA5LjU5NDQ1QzIwLjk1NTggMTAuMDgzMiAyMS4xMDMgMTAuNDU1OCAyMC40MTUzIDEwLjQ1NThaJ1xyXG4gICAgICAgICAgICAgIGZpbGw9J2JsYWNrJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8c3Bhbj5Ib21lPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPScvcHJlbWl1bSc+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHdpZHRoPScyMidcclxuICAgICAgICAgICAgaGVpZ2h0PScxOCdcclxuICAgICAgICAgICAgdmlld0JveD0nMCAwIDIyIDE4J1xyXG4gICAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD0nTTE4LjE1IDE1LjRIMy44NUMzLjU0NzUgMTUuNCAzLjMgMTUuNjQ3NSAzLjMgMTUuOTVWMTcuMDVDMy4zIDE3LjM1MjUgMy41NDc1IDE3LjYgMy44NSAxNy42SDE4LjE1QzE4LjQ1MjUgMTcuNiAxOC43IDE3LjM1MjUgMTguNyAxNy4wNVYxNS45NUMxOC43IDE1LjY0NzUgMTguNDUyNSAxNS40IDE4LjE1IDE1LjRaTTIwLjM1IDQuNEMxOS40MzkxIDQuNCAxOC43IDUuMTM5MDYgMTguNyA2LjA1QzE4LjcgNi4yOTQwNiAxOC43NTUgNi41MjA5NCAxOC44NTEzIDYuNzMwNjNMMTYuMzYyNSA4LjIyMjVDMTUuODMzMSA4LjUzODc1IDE1LjE0OTEgOC4zNiAxNC44NDMxIDcuODIzNzVMMTIuMDQxNiAyLjkyMTg4QzEyLjQwOTQgMi42MTkzNyAxMi42NSAyLjE2NTYzIDEyLjY1IDEuNjVDMTIuNjUgMC43MzkwNjMgMTEuOTEwOSAwIDExIDBDMTAuMDg5MSAwIDkuMzUgMC43MzkwNjMgOS4zNSAxLjY1QzkuMzUgMi4xNjU2MyA5LjU5MDYzIDIuNjE5MzcgOS45NTg0NCAyLjkyMTg4TDcuMTU2ODggNy44MjM3NUM2Ljg1MDk0IDguMzYgNi4xNjM0NCA4LjUzODc1IDUuNjM3NSA4LjIyMjVMMy4xNTIxOSA2LjczMDYzQzMuMjQ1IDYuNTI0MzggMy4zMDM0NCA2LjI5NDA2IDMuMzAzNDQgNi4wNUMzLjMwMzQ0IDUuMTM5MDYgMi41NjQzOCA0LjQgMS42NTM0NCA0LjRDMC43NDI1IDQuNCAwIDUuMTM5MDYgMCA2LjA1QzAgNi45NjA5NCAwLjczOTA2MyA3LjcgMS42NSA3LjdDMS43MzkzOCA3LjcgMS44Mjg3NSA3LjY4NjI1IDEuOTE0NjkgNy42NzI1TDQuNCAxNC4zSDE3LjZMMjAuMDg1MyA3LjY3MjVDMjAuMTcxMiA3LjY4NjI1IDIwLjI2MDYgNy43IDIwLjM1IDcuN0MyMS4yNjA5IDcuNyAyMiA2Ljk2MDk0IDIyIDYuMDVDMjIgNS4xMzkwNiAyMS4yNjA5IDQuNCAyMC4zNSA0LjRaJ1xyXG4gICAgICAgICAgICAgIGZpbGw9J2JsYWNrJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8c3Bhbj5HZXQgU3Rvcnl0ZWxsIFBybzwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj0nL3Bvc3RzL2NyZWF0ZS1wb3N0Jz5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9JzE5J1xyXG4gICAgICAgICAgICBoZWlnaHQ9JzE5J1xyXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgMTkgMTknXHJcbiAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPSdNMTYuNSAwLjc1SDIuNUMxLjUzNzUgMC43NSAwLjc1ODc1IDEuNTM3NSAwLjc1ODc1IDIuNUwwLjc1IDE4LjI1TDQuMjUgMTQuNzVIMTYuNUMxNy40NjI1IDE0Ljc1IDE4LjI1IDEzLjk2MjUgMTguMjUgMTNWMi41QzE4LjI1IDEuNTM3NSAxNy40NjI1IDAuNzUgMTYuNSAwLjc1Wk0xMC4zNzUgMTEuMjVIOC42MjVWOS41SDEwLjM3NVYxMS4yNVpNMTAuMzc1IDcuNzVIOC42MjVWNC4yNUgxMC4zNzVWNy43NVonXHJcbiAgICAgICAgICAgICAgZmlsbD0nYmxhY2snXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDxzcGFuPlNlbmQgZmVlZGJhY2s8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgd2lkdGg9JzE4J1xyXG4gICAgICAgICAgaGVpZ2h0PScxOCdcclxuICAgICAgICAgIHZpZXdCb3g9JzAgMCAxOCAxOCdcclxuICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD0nTTkgMEM3LjIxOTk3IDAgNS40Nzk5MSAwLjUyNzg0MSAzLjk5OTg3IDEuNTE2NzdDMi41MTk4MyAyLjUwNTcxIDEuMzY2MjggMy45MTEzMSAwLjY4NTA4OCA1LjU1NTg1QzAuMDAzODk5NTEgNy4yMDAzOCAtMC4xNzQzMyA5LjAwOTk4IDAuMTcyOTM3IDEwLjc1NThDMC41MjAyMDMgMTIuNTAxNiAxLjM3NzM3IDE0LjEwNTMgMi42MzYwNCAxNS4zNjRDMy44OTQ3MiAxNi42MjI2IDUuNDk4MzYgMTcuNDc5OCA3LjI0NDE5IDE3LjgyNzFDOC45OTAwMiAxOC4xNzQzIDEwLjc5OTYgMTcuOTk2MSAxMi40NDQyIDE3LjMxNDlDMTQuMDg4NyAxNi42MzM3IDE1LjQ5NDMgMTUuNDgwMiAxNi40ODMyIDE0LjAwMDFDMTcuNDcyMiAxMi41MjAxIDE4IDEwLjc4IDE4IDlDMTggOC41NCAxNy45NiA4LjA4IDE3LjkgNy42NEMxNy40MDAzIDguMzQwNjYgMTYuNzQwMSA4LjkxMTQ2IDE1Ljk3NDYgOS4zMDQ2NUMxNS4yMDkxIDkuNjk3ODQgMTQuMzYwNiA5LjkwMTk4IDEzLjUgOS45QzEyLjM1NTIgOS45MDAwMyAxMS4yNCA5LjUzNjQzIDEwLjMxNTIgOC44NjE2NkM5LjM5MDQxIDguMTg2ODggOC43MDM4NSA3LjIzNTgxIDguMzU0NTQgNi4xNDU2MUM4LjAwNTIzIDUuMDU1NDEgOC4wMTEyMyAzLjg4MjQzIDguMzcxNjcgMi43OTU4NkM4LjczMjExIDEuNzA5MjggOS40MjgzNiAwLjc2NTI4MSAxMC4zNiAwLjA5OTk5OTlDOS45MiAwLjAzOTk5OTkgOS40NiAwIDkgMFonXHJcbiAgICAgICAgICAgIGZpbGw9J2JsYWNrJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8c3Bhbj5EYXJrIG1vZGU8L3NwYW4+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKChvbGRTdGF0ZSkgPT4gIW9sZFN0YXRlKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17QmFyU3R5bGVzLnRvZ2dsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlID8gQmFyU3R5bGVzLmRhcmsgOiBCYXJTdHlsZXMud2hpdGV9PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExpbmsgaHJlZj0nL2F1dGgvc2lnbm91dCc+XHJcbiAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0U2lkZWJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB3aWR0aD0nMTgnXHJcbiAgICAgICAgICAgIGhlaWdodD0nMTgnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAxOCAxOCdcclxuICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9J00zIDBDMi4yMDQzNSAwIDEuNDQxMjkgMC4zMTYwNzEgMC44Nzg2OCAwLjg3ODY4QzAuMzE2MDcxIDEuNDQxMjkgMCAyLjIwNDM1IDAgM1YxNUMwIDE1Ljc5NTYgMC4zMTYwNzEgMTYuNTU4NyAwLjg3ODY4IDE3LjEyMTNDMS40NDEyOSAxNy42ODM5IDIuMjA0MzUgMTggMyAxOEg4QzguMjY1MjIgMTggOC41MTk1NyAxNy44OTQ2IDguNzA3MTEgMTcuNzA3MUM4Ljg5NDY0IDE3LjUxOTYgOSAxNy4yNjUyIDkgMTdDOSAxNi43MzQ4IDguODk0NjQgMTYuNDgwNCA4LjcwNzExIDE2LjI5MjlDOC41MTk1NyAxNi4xMDU0IDguMjY1MjIgMTYgOCAxNkgzQzIuNzM0NzggMTYgMi40ODA0MyAxNS44OTQ2IDIuMjkyODkgMTUuNzA3MUMyLjEwNTM2IDE1LjUxOTYgMiAxNS4yNjUyIDIgMTVWM0MyIDIuNzM0NzggMi4xMDUzNiAyLjQ4MDQzIDIuMjkyODkgMi4yOTI4OUMyLjQ4MDQzIDIuMTA1MzYgMi43MzQ3OCAyIDMgMkg4QzguMjY1MjIgMiA4LjUxOTU3IDEuODk0NjQgOC43MDcxMSAxLjcwNzExQzguODk0NjQgMS41MTk1NyA5IDEuMjY1MjIgOSAxQzkgMC43MzQ3ODQgOC44OTQ2NCAwLjQ4MDQzIDguNzA3MTEgMC4yOTI4OTNDOC41MTk1NyAwLjEwNTM1NyA4LjI2NTIyIDAgOCAwSDNaJ1xyXG4gICAgICAgICAgICAgIGZpbGw9JyNGRjQwNDAnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD0nTTEyLjI5MyA0LjI5MzAzQzEyLjQ4MDUgNC4xMDU1NiAxMi43MzQ4IDQuMDAwMjQgMTMgNC4wMDAyNEMxMy4yNjUyIDQuMDAwMjQgMTMuNTE5NSA0LjEwNTU2IDEzLjcwNyA0LjI5MzAzTDE3LjcwNyA4LjI5MzAzQzE3Ljg5NDUgOC40ODA1NiAxNy45OTk4IDguNzM0ODcgMTcuOTk5OCA5LjAwMDAzQzE3Ljk5OTggOS4yNjUxOSAxNy44OTQ1IDkuNTE5NSAxNy43MDcgOS43MDcwM0wxMy43MDcgMTMuNzA3QzEzLjUxODQgMTMuODg5MiAxMy4yNjU4IDEzLjk5IDEzLjAwMzYgMTMuOTg3N0MxMi43NDE0IDEzLjk4NTQgMTIuNDkwNiAxMy44ODAzIDEyLjMwNTIgMTMuNjk0OEMxMi4xMTk4IDEzLjUwOTQgMTIuMDE0NiAxMy4yNTg2IDEyLjAxMjMgMTIuOTk2NEMxMi4wMSAxMi43MzQyIDEyLjExMDggMTIuNDgxNiAxMi4yOTMgMTIuMjkzTDE0LjU4NiAxMEg3QzYuNzM0NzggMTAgNi40ODA0MyA5Ljg5NDY3IDYuMjkyODkgOS43MDcxNEM2LjEwNTM2IDkuNTE5NiA2IDkuMjY1MjUgNiA5LjAwMDAzQzYgOC43MzQ4MSA2LjEwNTM2IDguNDgwNDYgNi4yOTI4OSA4LjI5MjkyQzYuNDgwNDMgOC4xMDUzOSA2LjczNDc4IDguMDAwMDMgNyA4LjAwMDAzSDE0LjU4NkwxMi4yOTMgNS43MDcwM0MxMi4xMDU1IDUuNTE5NSAxMi4wMDAyIDUuMjY1MTkgMTIuMDAwMiA1LjAwMDAzQzEyLjAwMDIgNC43MzQ4NyAxMi4xMDU1IDQuNDgwNTYgMTIuMjkzIDQuMjkzMDNaJ1xyXG4gICAgICAgICAgICAgIGZpbGw9JyNGRjQwNDAnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnI0ZGNDA0MCcgfX0+TG9nIG91dDwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGgzPlBvcHVsYXIgdG9waWNzPC9oMz5cclxuICAgICAgPExpbmsgaHJlZj0nL3RvcGljcy9bdG9waWNTbHVnXScgYXM9eycvdG9waWNzL2ZpdG5lc3MnfT5cclxuICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz0nL2ZpdG5lc3MuanBnJyBhbHQ9J2ZpdG5lc3MnIC8+XHJcbiAgICAgICAgICA8c3Bhbj5zL0ZpdG5lc3M8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy90b3BpY3MvW3RvcGljU2x1Z10nIGFzPXsnL3RvcGljcy9zdGFydHVwcyd9PlxyXG4gICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlfT5cclxuICAgICAgICAgIDxpbWcgc3JjPScvc3RhcnR1cHMuanBnJyBhbHQ9J3N0YXJ0dXBzJyAvPlxyXG4gICAgICAgICAgPHNwYW4+cy9TdGFydHVwczwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj0nL3RvcGljcy9bdG9waWNTbHVnXScgYXM9eycvdG9waWNzL2xhbmd1YWdlJ30+XHJcbiAgICAgICAgPGEgb25DbGljaz17Y2xvc2V9PlxyXG4gICAgICAgICAgPGltZyBzcmM9Jy9sYW5ndWFnZS5qcGcnIGFsdD0nbGFuZ3VhZ2UnIC8+XHJcbiAgICAgICAgICA8c3Bhbj5zL0xhbmd1YWdlPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPScvdG9waWNzL1t0b3BpY1NsdWddJyBhcz17Jy90b3BpY3Mvc2Nob29sJ30+XHJcbiAgICAgICAgPGEgb25DbGljaz17Y2xvc2V9PlxyXG4gICAgICAgICAgPGltZyBzcmM9Jy9zY2hvb2wuanBnJyBhbHQ9J3NjaG9vbCcgLz5cclxuICAgICAgICAgIDxzcGFuPnMvU2Nob29sPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPScvdG9waWNzL1t0b3BpY1NsdWddJyBhcz17Jy90b3BpY3MvdHJhdmVsaW5nJ30+XHJcbiAgICAgICAgPGEgb25DbGljaz17Y2xvc2V9PlxyXG4gICAgICAgICAgPGltZyBzcmM9Jy90cmF2ZWxpbmcuanBnJyBhbHQ9J3RyYXZlbGluZycgLz5cclxuICAgICAgICAgIDxzcGFuPnMvVHJhdmVsaW5nPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwiQmFyU3R5bGVzIiwiU2lkZUJhciIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInNpZGViYXIiLCJzZXRTaWRlYmFyIiwiY2xvc2UiLCJzY3JvbGxTdHlsZSIsIm9wZW4iLCJvbGRTdGF0ZSIsImRhcmsiLCJ3aGl0ZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==