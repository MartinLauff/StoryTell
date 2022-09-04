"use strict";
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 4433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3211);
/* harmony import */ var _styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2604);
/* harmony import */ var _styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_3__);




const Layer = ()=>{
    const { sidebar , setSidebar , setRotateDots  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_GlobalCtx__WEBPACK_IMPORTED_MODULE_2__/* .GlobalContext */ .k);
    const layerOff = ()=>{
        setSidebar(false);
        setRotateDots(false);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            onClick: layerOff,
            className: `${sidebar ? (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_3___default().layer) : (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_3___default().hide)}`
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layer);


/***/ }),

/***/ 8328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_GlobalCtx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3211);
/* harmony import */ var _styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2604);
/* harmony import */ var _styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4__);





const SideBar = ()=>{
    const { sidebar , setSidebar , setRotateDots  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_GlobalCtx__WEBPACK_IMPORTED_MODULE_3__/* .GlobalContext */ .k);
    const scrollStyle = `html::-webkit-scrollbar{width:1.6rem}html::-webkit-scrollbar-track{background:#fff;border-radius:100vw}html::-webkit-scrollbar-thumb{background:#545454;border:.4em solid #fff;border-radius:100vw;transition:all .3s}html::-webkit-scrollbar-thumb:hover{background:#6d6d6d}`;
    const close = ()=>{
        setSidebar(false);
        setRotateDots(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidebar)} ${sidebar ? (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default().open) : (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default().close)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                style: {
                    display: 'none'
                },
                children: sidebar ? `body {overflow: hidden;}` : scrollStyle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Storytell"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/posts",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: close,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            width: "21",
                            height: "19",
                            viewBox: "0 0 21 19",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M20.4153 10.4558H18.4925V17.3558C18.4925 17.8675 18.2694 18.5058 17.3425 18.5058H12.7425V11.6058H8.14249V18.5058H3.54249C2.61559 18.5058 2.39249 17.8675 2.39249 17.3558V10.4558H0.469692C-0.218008 10.4558 -0.0708078 10.0832 0.400692 9.5956L9.62829 0.3588C9.85254 0.1265 10.1469 0.0115 10.4425 0C10.738 0.0115 11.0324 0.12535 11.2567 0.3588L20.4831 9.59445C20.9558 10.0832 21.103 10.4558 20.4153 10.4558Z",
                                fill: "black"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Home"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/premium",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: close,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            width: "22",
                            height: "18",
                            viewBox: "0 0 22 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M18.15 15.4H3.85C3.5475 15.4 3.3 15.6475 3.3 15.95V17.05C3.3 17.3525 3.5475 17.6 3.85 17.6H18.15C18.4525 17.6 18.7 17.3525 18.7 17.05V15.95C18.7 15.6475 18.4525 15.4 18.15 15.4ZM20.35 4.4C19.4391 4.4 18.7 5.13906 18.7 6.05C18.7 6.29406 18.755 6.52094 18.8513 6.73063L16.3625 8.2225C15.8331 8.53875 15.1491 8.36 14.8431 7.82375L12.0416 2.92188C12.4094 2.61937 12.65 2.16563 12.65 1.65C12.65 0.739063 11.9109 0 11 0C10.0891 0 9.35 0.739063 9.35 1.65C9.35 2.16563 9.59063 2.61937 9.95844 2.92188L7.15688 7.82375C6.85094 8.36 6.16344 8.53875 5.6375 8.2225L3.15219 6.73063C3.245 6.52438 3.30344 6.29406 3.30344 6.05C3.30344 5.13906 2.56438 4.4 1.65344 4.4C0.7425 4.4 0 5.13906 0 6.05C0 6.96094 0.739063 7.7 1.65 7.7C1.73938 7.7 1.82875 7.68625 1.91469 7.6725L4.4 14.3H17.6L20.0853 7.6725C20.1712 7.68625 20.2606 7.7 20.35 7.7C21.2609 7.7 22 6.96094 22 6.05C22 5.13906 21.2609 4.4 20.35 4.4Z",
                                fill: "black"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Get Storytell Pro"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: {
                    pathname: '/posts/create-post',
                    query: {
                        q: 'feedback'
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: close,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            width: "19",
                            height: "19",
                            viewBox: "0 0 19 19",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M16.5 0.75H2.5C1.5375 0.75 0.75875 1.5375 0.75875 2.5L0.75 18.25L4.25 14.75H16.5C17.4625 14.75 18.25 13.9625 18.25 13V2.5C18.25 1.5375 17.4625 0.75 16.5 0.75ZM10.375 11.25H8.625V9.5H10.375V11.25ZM10.375 7.75H8.625V4.25H10.375V7.75Z",
                                fill: "black"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Send feedback"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389951 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 8.54 17.96 8.08 17.9 7.64C17.4003 8.34066 16.7401 8.91146 15.9746 9.30465C15.2091 9.69784 14.3606 9.90198 13.5 9.9C12.3552 9.90003 11.24 9.53643 10.3152 8.86166C9.39041 8.18688 8.70385 7.23581 8.35454 6.14561C8.00523 5.05541 8.01123 3.88243 8.37167 2.79586C8.73211 1.70928 9.42836 0.765281 10.36 0.0999999C9.92 0.0399999 9.46 0 9 0Z",
                            fill: "black"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Dark mode"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default().toggle),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Bar_module_css__WEBPACK_IMPORTED_MODULE_4___default().dark)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/auth/signout",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: close,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H8C8.26522 18 8.51957 17.8946 8.70711 17.7071C8.89464 17.5196 9 17.2652 9 17C9 16.7348 8.89464 16.4804 8.70711 16.2929C8.51957 16.1054 8.26522 16 8 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8C8.26522 2 8.51957 1.89464 8.70711 1.70711C8.89464 1.51957 9 1.26522 9 1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0H3Z",
                                    fill: "#FF4040"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M12.293 4.29303C12.4805 4.10556 12.7348 4.00024 13 4.00024C13.2652 4.00024 13.5195 4.10556 13.707 4.29303L17.707 8.29303C17.8945 8.48056 17.9998 8.73487 17.9998 9.00003C17.9998 9.26519 17.8945 9.5195 17.707 9.70703L13.707 13.707C13.5184 13.8892 13.2658 13.99 13.0036 13.9877C12.7414 13.9854 12.4906 13.8803 12.3052 13.6948C12.1198 13.5094 12.0146 13.2586 12.0123 12.9964C12.01 12.7342 12.1108 12.4816 12.293 12.293L14.586 10H7C6.73478 10 6.48043 9.89467 6.29289 9.70714C6.10536 9.5196 6 9.26525 6 9.00003C6 8.73481 6.10536 8.48046 6.29289 8.29292C6.48043 8.10539 6.73478 8.00003 7 8.00003H14.586L12.293 5.70703C12.1055 5.5195 12.0002 5.26519 12.0002 5.00003C12.0002 4.73487 12.1055 4.48056 12.293 4.29303Z",
                                    fill: "#FF4040"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                color: '#FF4040'
                            },
                            children: "Log out"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Popular topics"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/topics/[topicSlug]",
                as: '/topics/fitness',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: close,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/fitness.jpg",
                            alt: "fitness"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "s/Fitness"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/topics/[topicSlug]",
                as: '/topics/startups',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: close,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/startups.jpg",
                            alt: "startups"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "s/Startups"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/topics/[topicSlug]",
                as: '/topics/language',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: close,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/language.jpg",
                            alt: "language"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "s/Language"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/topics/[topicSlug]",
                as: '/topics/school',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: close,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/school.jpg",
                            alt: "school"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "s/School"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/topics/[topicSlug]",
                as: '/topics/traveling',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: close,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/traveling.jpg",
                            alt: "traveling"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "s/Traveling"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);


/***/ }),

/***/ 2710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ bars_TopBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/GlobalCtx.js
var GlobalCtx = __webpack_require__(3211);
// EXTERNAL MODULE: ./styles/Bar.module.css
var Bar_module = __webpack_require__(2604);
var Bar_module_default = /*#__PURE__*/__webpack_require__.n(Bar_module);
;// CONCATENATED MODULE: ./components/Icons/LogoIcon.js

const LogoIcon = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            style: {
                marginLeft: '1rem'
            },
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16",
                    fill: "url(#paint0_linear)"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M27.7057 26.9911L26.5585 23.2404L25.4115 19.4897L25.3623 19.5422C25.7594 18.4383 25.962 17.2739 25.961 16.1008C25.961 10.4883 21.4111 5.93835 15.7986 5.93835C10.1861 5.93835 5.63611 10.4887 5.63611 16.1012C5.63611 21.7137 10.1857 26.2636 15.7986 26.2636C17.3779 26.2636 18.8724 25.9033 20.2058 25.2609L23.884 26.1096L27.7057 26.9911ZM11.0019 17.6733C10.134 17.6733 9.42993 16.9696 9.42993 16.1012C9.42993 15.2328 10.1336 14.5296 11.0019 14.5296C11.8703 14.5296 12.5741 15.2333 12.5741 16.1012C12.5741 16.9691 11.87 17.6733 11.0019 17.6733ZM15.8564 17.6733C14.9884 17.6733 14.2847 16.9696 14.2847 16.1012C14.2847 15.2328 14.9884 14.5296 15.8563 14.5296C16.7243 14.5296 17.428 15.2333 17.428 16.1012C17.428 16.9691 16.7248 17.6733 15.8563 17.6733H15.8564ZM19.0232 16.1012C19.0232 15.2333 19.7269 14.5296 20.5952 14.5296C21.4635 14.5296 22.1668 15.2333 22.1668 16.1012C22.1668 16.9691 21.4632 17.6733 20.5952 17.6733C19.7271 17.6733 19.0232 16.9692 19.0232 16.1012Z",
                    fill: "white"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint0_linear",
                        x1: "27.2",
                        y1: "4.8",
                        x2: "4.8",
                        y2: "27.2",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#FF2F2F"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.53",
                                stopColor: "#E61B6E"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#AE3E93"
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Icons_LogoIcon = (LogoIcon);

;// CONCATENATED MODULE: ./components/bars/TopBar.js






const TopBar = ()=>{
    const { setSidebar , rotateDots , setRotateDots  } = (0,external_react_.useContext)(GlobalCtx/* GlobalContext */.k);
    const onClick = ()=>{
        setRotateDots(true);
        setSidebar(true);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(Bar_module_default()).bar} ${(Bar_module_default()).topBar}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/posts",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: {
                        height: '3.2rem'
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icons_LogoIcon, {
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Storytell"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: onClick,
                className: `${(Bar_module_default()).circle} ${rotateDots ? (Bar_module_default()).circleRotate : ''}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Bar_module_default()).groupDots,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const bars_TopBar = (TopBar);


/***/ }),

/***/ 3211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ GlobalContext),
/* harmony export */   "R": () => (/* binding */ GlobalProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const GlobalProvider = ({ children  })=>{
    const { 0: sidebar , 1: setSidebar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: rotateDots , 1: setRotateDots  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: delOpt , 1: setDelOpt  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: editOpt , 1: setEditOpt  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalContext.Provider, {
        value: {
            sidebar,
            setSidebar,
            rotateDots,
            setRotateDots,
            delOpt,
            setDelOpt,
            editOpt,
            setEditOpt
        },
        children: children
    }));
};


/***/ })

};
;