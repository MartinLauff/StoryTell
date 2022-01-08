(() => {
var exports = {};
exports.id = 124;
exports.ids = [124];
exports.modules = {

/***/ 5694:
/***/ ((module) => {

// Exports
module.exports = {
	"bar": "EditProfile_bar__8eAHp",
	"wrap": "EditProfile_wrap__quNyR",
	"imgWrap": "EditProfile_imgWrap__2vCqL",
	"img": "EditProfile_img__yTfpH",
	"close": "EditProfile_close__AKrJt",
	"successBar": "EditProfile_successBar__Uw9xr"
};


/***/ }),

/***/ 2238:
/***/ ((module) => {

// Exports
module.exports = {
	"errorBanner": "Error_errorBanner__EDEUS",
	"errMessage": "Error_errMessage__EAG1J",
	"hide": "Error_hide__LPa3Y",
	"custom500": "Error_custom500__Q8T4b",
	"h500": "Error_h500__KOR9p",
	"errWrap": "Error_errWrap__8zg74"
};


/***/ }),

/***/ 8775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const buildClient = ({ req  })=>{
    if (true) {
        // We are on the server
        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
            baseURL: 'https://storytull.herokuapp.com/',
            headers: req.headers,
            withCredentials: true
        });
    } else {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildClient);


/***/ }),

/***/ 7404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2238);
/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8775);
/* harmony import */ var _styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5694);
/* harmony import */ var _styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6853);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8__);









const UpdateMyProfile = ({ data: data1  })=>{
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: photo , 1: setProfilePhoto  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data1.photo);
    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data1.username);
    const { 0: hobby , 1: setHobby  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data1.hobby);
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data1.email);
    const doRequest = (url = data1.photo)=>{
        axios__WEBPACK_IMPORTED_MODULE_2___default()({
            url: '/api/users/update-my-profile',
            method: 'put',
            data: {
                photo: url,
                username,
                hobby,
                email
            },
            withCredentials: true
        }).then(()=>next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/users/my-profile')
        ).catch(({ response: { data  }  })=>setErrors(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_6___default().errorBanner),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: "Ooops...."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        style: {
                            listStyle: 'none'
                        },
                        children: data.message.split(',').map((message)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: message.replace('Validation failed:', '').split(':')[1]
                            }, message)
                        )
                    })
                ]
            }))
        );
    };
    const handleFileInputChange = (e)=>{
        previewFile(e.target.files[0]);
        setProfilePhoto(e.target.files[0]);
    };
    const previewFile = (file)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=>{
            setProfilePhoto(reader.result);
        };
    };
    const resetImg = ()=>{
        setProfilePhoto(data1.photo);
    };
    const onSubmit = async (e)=>{
        e.preventDefault();
        if (!username || !hobby || !email) {
            return;
        }
        const body = new FormData();
        body.append('file', photo);
        body.append('upload_preset', 'storytell');
        if (photo !== data1.photo) {
            const res = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
                method: 'post',
                url: 'https://api.cloudinary.com/v1_1/ekoeko/image/upload',
                data: body,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            doRequest(res.data.url);
        } else {
            doRequest();
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().bar),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        href: "/users/my-profile",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            style: {
                                height: '2rem'
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M10 10L19 19M1 19L10 10L1 19ZM19 1L9.99828 10L19 1ZM9.99828 10L1 1L9.99828 10Z",
                                    stroke: "black",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Edit profile"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: onSubmit,
                className: (_styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().wrap),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().imgWrap),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: (_styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().img),
                                        src: photo,
                                        alt: "profile picture"
                                    }),
                                    photo !== data1.photo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: resetImg,
                                        className: (_styles_EditProfile_module_css__WEBPACK_IMPORTED_MODULE_7___default().close),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#ff2f2f",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                onChange: handleFileInputChange,
                                id: "image",
                                accept: "image/*",
                                type: "file",
                                name: "image",
                                value: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "image",
                                children: "Choose an image"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Username"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        value: username,
                                        onChange: (e)=>setUsername(e.target.value)
                                        ,
                                        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8___default().textInput),
                                        type: "text",
                                        minLength: "4",
                                        maxLength: "14"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Your hobby"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        value: hobby,
                                        onChange: (e)=>setHobby(e.target.value)
                                        ,
                                        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8___default().textInput),
                                        type: "text",
                                        minLength: "2",
                                        maxLength: "18"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value)
                                        ,
                                        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8___default().textInput),
                                        type: "email"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_8___default().applyBtn),
                        children: "Save"
                    })
                ]
            }),
            errors
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(ctx);
    const { data  } = await client.get('/api/users/brief-user');
    return {
        props: {
            data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateMyProfile);


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,853], () => (__webpack_exec__(7404)));
module.exports = __webpack_exports__;

})();