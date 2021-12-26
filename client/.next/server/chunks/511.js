exports.id = 511;
exports.ids = [511];
exports.modules = {

/***/ 2407:
/***/ ((module) => {

// Exports
module.exports = {
	"noPosts": "Post_noPosts__aC3Np",
	"postList": "Post_postList__1mInT",
	"post": "Post_post__v48_a",
	"icon": "Post_icon__8_1TR",
	"postContent": "Post_postContent__CIPHe",
	"text": "Post_text__6YOxr",
	"imagePosition": "Post_imagePosition__83WMM",
	"textPosition": "Post_textPosition__irwx7",
	"topic": "Post_topic__BvTtb",
	"date": "Post_date__B7bMG",
	"follow": "Post_follow__mSFXu",
	"postTop": "Post_postTop__zKmEU",
	"postBottom": "Post_postBottom__uMCq9",
	"coverImage": "Post_coverImage__qWhaG",
	"hide": "Post_hide__OEcmp",
	"postLink": "Post_postLink__aHNai",
	"anotherActions": "Post_anotherActions__usE9q",
	"borda": "Post_borda__q6rtX"
};


/***/ }),

/***/ 4978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _Icons_LikeSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9107);
/* harmony import */ var _components_bannerOptions_SaveOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6859);
/* harmony import */ var _components_bannerOptions_CopyOption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5845);
/* harmony import */ var _components_bannerOptions_DeleteOption__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7760);
/* harmony import */ var _components_bannerOptions_EditOption__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8537);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2407);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6853);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3291);
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5363);
/* harmony import */ var _Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1110);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_bannerOptions_SaveOption__WEBPACK_IMPORTED_MODULE_4__, _Icons_LikeSet__WEBPACK_IMPORTED_MODULE_3__]);
([_components_bannerOptions_SaveOption__WEBPACK_IMPORTED_MODULE_4__, _Icons_LikeSet__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













const Post = ({ post , UnsaveOption , userId  })=>{
    const { 0: banner , 1: setBanner  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const blackColor = {
        color: '#000'
    };
    const whiteColor = {
        color: '#fff'
    };
    const greyColor = {
        color: '#878a8c'
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${state ? (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().post) : (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().hide)} ${!post.coverImage ? (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().borda) : ''}`,
        children: [
            UnsaveOption && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(UnsaveOption, {
                postId: post._id,
                deleteOpt: setState,
                Xposition: post.coverImage ? true : false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: "/posts/[...postId]",
                as: `/posts/${post._id}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().postLink),
                    style: {
                        textDecoration: 'none',
                        display: 'flex'
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: post.coverImage ? (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().imagePosition) : (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().textPosition),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: post.coverImage ? {
                                        paddingTop: '1.5rem'
                                    } : null,
                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().postTop),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                display: 'flex',
                                                aligItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    style: {
                                                        marginRight: '0.5rem'
                                                    },
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().icon),
                                                    alt: post.title,
                                                    src: `/${post.slug}.jpg`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: post.coverImage ? whiteColor : blackColor,
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().topic),
                                                    children: `s/${post.topic}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: post.coverImage ? whiteColor : greyColor,
                                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().date),
                                            children: date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_8___default()(new Date(post.createdAt), new Date(), {
                                                addSuffix: true
                                            }).replace('about', '').replace('less than', '')
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                display: 'flex',
                                                aligItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    style: {
                                                        marginRight: '0.5rem'
                                                    },
                                                    src: post.postedBy.photo,
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().icon),
                                                    alt: "profile photo"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: post.coverImage ? whiteColor : blackColor,
                                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().topic),
                                                    children: post.postedBy.username
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: post.coverImage ? {
                                        padding: '1rem 0'
                                    } : null,
                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().postContent),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        style: post.coverImage ? whiteColor : blackColor,
                                        children: post.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().text),
                                        children: [
                                            post.content.slice(0, 100).trim(),
                                            "..."
                                        ]
                                    })
                                }),
                                !post.coverImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().postBottom),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_LikeSet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                userId: userId,
                                                likes: post.likes,
                                                greyColor: greyColor,
                                                postID: post._id
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        marginLeft: '0.8rem',
                                                        ...greyColor
                                                    },
                                                    children: "Comments"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        post.coverImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().coverImage),
                            src: post.coverImage,
                            alt: post.title
                        })
                    ]
                })
            }),
            post.coverImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().postBottom)} ${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_11___default().anotherActions)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_LikeSet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            userId: userId,
                            likes: post.likes,
                            greyColor: greyColor
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                style: {
                                    marginLeft: '0.8rem',
                                    ...greyColor
                                },
                                children: "Comments"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setBanner(true)
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        })
                    }),
                    banner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>setBanner(false)
                        ,
                        className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default().moreBanner),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bannerOptions_SaveOption__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                postID: post._id
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bannerOptions_CopyOption__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setBanner(false)
                ,
                className: banner ? (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_12___default().transparentLayer) : null
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

});

/***/ }),

/***/ 5511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _items_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4978);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2407);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_items_Post__WEBPACK_IMPORTED_MODULE_1__]);
_items_Post__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const PostList = ({ posts , text , UnsaveOption , userId  })=>{
    if (posts.length === 0) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_2___default().noPosts),
            children: text
        }));
    }
    if (!posts) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            "data-center": "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wave"
                })
            ]
        }));
    }
    const renderedList = posts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_items_Post__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            userId: userId,
            UnsaveOption: UnsaveOption,
            post: post
        }, post._id)
    );
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_2___default().postList),
        children: renderedList
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostList);

});

/***/ })

};
;