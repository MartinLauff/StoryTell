exports.id = 650;
exports.ids = [650];
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
	"borda": "Post_borda__q6rtX",
	"margin": "Post_margin__6a_4W"
};


/***/ }),

/***/ 5650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lists_PostList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Icons/LikeSet.js
var LikeSet = __webpack_require__(9107);
// EXTERNAL MODULE: ./components/bannerOptions/SaveOption.js
var SaveOption = __webpack_require__(7417);
// EXTERNAL MODULE: ./components/bannerOptions/CopyOption.js + 1 modules
var CopyOption = __webpack_require__(5845);
// EXTERNAL MODULE: ./styles/Post.module.css
var Post_module = __webpack_require__(2407);
var Post_module_default = /*#__PURE__*/__webpack_require__.n(Post_module);
// EXTERNAL MODULE: ./styles/Components.module.css
var Components_module = __webpack_require__(6853);
var Components_module_default = /*#__PURE__*/__webpack_require__.n(Components_module);
// EXTERNAL MODULE: external "date-fns/formatDistance"
var formatDistance_ = __webpack_require__(3291);
var formatDistance_default = /*#__PURE__*/__webpack_require__.n(formatDistance_);
// EXTERNAL MODULE: ./components/Icons/CommentIcon.js
var CommentIcon = __webpack_require__(5363);
// EXTERNAL MODULE: ./components/Icons/MoreIcon.js
var MoreIcon = __webpack_require__(1110);
;// CONCATENATED MODULE: ./components/items/Post.js











const Post = ({ post , UnsaveOption , userId  })=>{
    const { 0: banner , 1: setBanner  } = (0,external_react_.useState)(false);
    const { 0: state , 1: setState  } = (0,external_react_.useState)(true);
    const blackColor = {
        color: '#000'
    };
    const whiteColor = {
        color: '#fff'
    };
    const greyColor = {
        color: '#878a8c'
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${state ? (Post_module_default()).post : (Post_module_default()).hide} ${!post.coverImage ? (Post_module_default()).borda : ''} ${!post.coverImage ? (Post_module_default()).margin : ''}`,
        children: [
            UnsaveOption && /*#__PURE__*/ (0,external_react_.cloneElement)(UnsaveOption, {
                postId: post._id,
                deleteOpt: setState,
                Xposition: post.coverImage ? true : false
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/posts/[...postId]",
                as: `/posts/${post._id}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: (Post_module_default()).postLink,
                    style: {
                        textDecoration: 'none',
                        display: 'flex'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: post.coverImage ? (Post_module_default()).imagePosition : (Post_module_default()).textPosition,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: post.coverImage ? {
                                        paddingTop: '1.5rem'
                                    } : null,
                                    className: (Post_module_default()).postTop,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                display: 'flex',
                                                aligItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        marginRight: '0.5rem'
                                                    },
                                                    className: (Post_module_default()).icon,
                                                    alt: post.title,
                                                    src: `/${post.slug}.jpg`
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: post.coverImage ? whiteColor : blackColor,
                                                    className: (Post_module_default()).topic,
                                                    children: `s/${post.topic}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: post.coverImage ? whiteColor : greyColor,
                                            className: (Post_module_default()).date,
                                            children: formatDistance_default()(new Date(post.createdAt), new Date(), {
                                                addSuffix: true
                                            }).replace('about', '').replace('less than', '')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                display: 'flex',
                                                aligItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        marginRight: '0.5rem'
                                                    },
                                                    src: post.postedBy.photo,
                                                    className: (Post_module_default()).icon,
                                                    alt: "profile photo"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: post.coverImage ? whiteColor : blackColor,
                                                    className: (Post_module_default()).topic,
                                                    children: post.postedBy.username
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: post.coverImage ? {
                                        padding: '1rem 0'
                                    } : null,
                                    className: (Post_module_default()).postContent,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        style: post.coverImage ? whiteColor : blackColor,
                                        children: post.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: (Post_module_default()).text,
                                        children: [
                                            post.content.slice(0, 100).trim(),
                                            "..."
                                        ]
                                    })
                                }),
                                !post.coverImage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Post_module_default()).postBottom,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LikeSet/* default */.Z, {
                                                userId: userId,
                                                likes: post.likes,
                                                greyColor: greyColor,
                                                postID: post._id
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CommentIcon/* default */.Z, {
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        marginLeft: '0.8rem',
                                                        ...greyColor
                                                    },
                                                    children: "Comments"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(MoreIcon/* default */.Z, {
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        post.coverImage && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: (Post_module_default()).coverImage,
                            loading: "lazy",
                            src: post.coverImage,
                            alt: post.title
                        })
                    ]
                })
            }),
            post.coverImage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(Post_module_default()).postBottom} ${(Post_module_default()).anotherActions}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(LikeSet/* default */.Z, {
                            userId: userId,
                            likes: post.likes,
                            greyColor: greyColor,
                            postID: post._id
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CommentIcon/* default */.Z, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: {
                                    marginLeft: '0.8rem',
                                    ...greyColor
                                },
                                children: "Comments"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            padding: '1.5rem 1rem'
                        },
                        onClick: ()=>setBanner(true)
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MoreIcon/* default */.Z, {
                        })
                    }),
                    banner && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onClick: ()=>setBanner(false)
                        ,
                        className: (Components_module_default()).moreBanner,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SaveOption/* default */.Z, {
                                postID: post._id
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CopyOption/* default */.Z, {
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>setBanner(false)
                ,
                className: banner ? (Components_module_default()).transparentLayer : null
            })
        ]
    }));
};
/* harmony default export */ const items_Post = (Post);

;// CONCATENATED MODULE: ./components/lists/PostList.js



const PostList = ({ posts , text , UnsaveOption , userId  })=>{
    if (!posts || posts.length === 0) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Post_module_default()).noPosts,
            children: text
        }));
    }
    const renderedList = posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(items_Post, {
            userId: userId,
            UnsaveOption: UnsaveOption,
            post: post
        }, post._id)
    );
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Post_module_default()).postList,
        children: renderedList
    }));
};
/* harmony default export */ const lists_PostList = (PostList);


/***/ })

};
;