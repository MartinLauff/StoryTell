exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 2604:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "Bar_sidebar__9b6BM",
	"open": "Bar_open__WUSiu",
	"close": "Bar_close__F7cEH",
	"bar": "Bar_bar__3eWjt",
	"toggle": "Bar_toggle__OwwHd",
	"hide": "Bar_hide__k3StC",
	"dark": "Bar_dark__txwzO",
	"white": "Bar_white__iHVCO",
	"topBar": "Bar_topBar__Zxuls",
	"bottomBar": "Bar_bottomBar__qMksK",
	"circle": "Bar_circle__G2uuY",
	"circleRotate": "Bar_circleRotate__IyXBb",
	"groupDots": "Bar_groupDots__856Ae",
	"layer": "Bar_layer__QsdWE",
	"arrowBar": "Bar_arrowBar__l11K1"
};


/***/ }),

/***/ 7899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ bars_BottomBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/Bar.module.css
var Bar_module = __webpack_require__(2604);
var Bar_module_default = /*#__PURE__*/__webpack_require__.n(Bar_module);
;// CONCATENATED MODULE: ./components/Icons/NotifitcationIcon.js

const NotifitcationIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            width: "23",
            height: "27",
            viewBox: "0 0 23 27",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M22.7273 21.4646V22.7273H0V21.4646L2.52525 18.9394V11.3636C2.52525 7.4495 5.08838 4.00253 8.83838 2.89141V2.52525C8.83838 1.85551 9.10444 1.21321 9.57801 0.739629C10.0516 0.266053 10.6939 0 11.3636 0C12.0334 0 12.6757 0.266053 13.1493 0.739629C13.6228 1.21321 13.8889 1.85551 13.8889 2.52525V2.89141C17.6389 4.00253 20.202 7.4495 20.202 11.3636V18.9394L22.7273 21.4646ZM13.8889 23.9899C13.8889 24.6596 13.6228 25.3019 13.1493 25.7755C12.6757 26.2491 12.0334 26.5152 11.3636 26.5152C10.6939 26.5152 10.0516 26.2491 9.57801 25.7755C9.10444 25.3019 8.83838 24.6596 8.83838 23.9899",
                fill: "black"
            })
        })
    });
};
/* harmony default export */ const Icons_NotifitcationIcon = (NotifitcationIcon);

;// CONCATENATED MODULE: ./components/Icons/NewPostIcon.js

const NewPostIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "15",
                    cy: "15",
                    r: "15",
                    fill: "#FF2F2F"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M15 9V19.5469",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M20.2969 14.2734H9.75",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            ]
        })
    });
};
/* harmony default export */ const Icons_NewPostIcon = (NewPostIcon);

;// CONCATENATED MODULE: ./components/Icons/ProfileIcon.js

const ProfileIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12 0C13.5913 0 15.1174 0.632141 16.2426 1.75736C17.3679 2.88258 18 4.4087 18 6C18 7.5913 17.3679 9.11742 16.2426 10.2426C15.1174 11.3679 13.5913 12 12 12C10.4087 12 8.88258 11.3679 7.75736 10.2426C6.63214 9.11742 6 7.5913 6 6C6 4.4087 6.63214 2.88258 7.75736 1.75736C8.88258 0.632141 10.4087 0 12 0ZM12 15C18.63 15 24 17.685 24 21V24H0V21C0 17.685 5.37 15 12 15Z",
                fill: "black"
            })
        })
    });
};
/* harmony default export */ const Icons_ProfileIcon = (ProfileIcon);

;// CONCATENATED MODULE: ./components/bars/BottomBar.js






const BottomBar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(Bar_module_default()).bar} ${(Bar_module_default()).bottomBar}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/users/notifications",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: {
                        height: "2.7rem"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icons_NotifitcationIcon, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/posts/create-post",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: {
                        height: "3.0rem"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icons_NewPostIcon, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/users/my-profile",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: {
                        height: "2.4rem"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icons_ProfileIcon, {})
                })
            })
        ]
    });
};
/* harmony default export */ const bars_BottomBar = (BottomBar);


/***/ })

};
;