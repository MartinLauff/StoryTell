exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 2238:
/***/ ((module) => {

// Exports
module.exports = {
	"errorBanner": "Error_errorBanner__EDEUS",
	"errMessage": "Error_errMessage__EAG1J",
	"hide": "Error_hide__LPa3Y"
};


/***/ }),

/***/ 6471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2238);
/* harmony import */ var _styles_Error_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_3__);




const useRequest = ({ url , method , headers , body , onSuccess  })=>{
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const doRequest = async ()=>{
        try {
            setErrors(null);
            const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
                method,
                url,
                data: {
                    ...body
                },
                headers,
                withCredentials: true
            });
            if (onSuccess) {
                onSuccess(response.data);
            }
            return response.data;
        } catch (err1) {
            console.log(err1.response);
            if (!err1.response.data.message) {
                setErrors(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>setErrors(null)
                    ,
                    className: (_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_3___default().errorBanner),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Ooops...."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            style: {
                                listStyle: 'none'
                            },
                            children: err1.response.data.errors.map((err)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: err.message
                                }, err.message)
                            )
                        })
                    ]
                }));
            } else {
                setErrors(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>setErrors(null)
                    ,
                    className: (_styles_Error_module_css__WEBPACK_IMPORTED_MODULE_3___default().errorBanner),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Invalid parameters"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            style: {
                                listStyle: 'none'
                            },
                            children: err1.response.data.message.split(',').map((message)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: message.split(':').pop().replace('jwt malformed', 'You are not logged in!')
                                }, message)
                            )
                        })
                    ]
                }));
            }
        }
    };
    return {
        doRequest,
        errors
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRequest);


/***/ })

};
;