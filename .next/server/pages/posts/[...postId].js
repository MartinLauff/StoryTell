(() => {
var exports = {};
exports.id = 539;
exports.ids = [539];
exports.modules = {

/***/ 8810:
/***/ ((module) => {

// Exports
module.exports = {
	"noComments": "Comment_noComments__TLoV9",
	"commentList": "Comment_commentList__hiQ8u",
	"commentWrap": "Comment_commentWrap__4a85f",
	"name": "Comment_name__aa3P2",
	"time": "Comment_time___sIMm",
	"content": "Comment_content__HGuMs",
	"pic": "Comment_pic__7sGqg",
	"hide": "Comment_hide__I_R8v"
};


/***/ }),

/***/ 8126:
/***/ ((module) => {

// Exports
module.exports = {
	"showWrap": "Show_showWrap__LnzcF",
	"postTop": "Show_postTop__ca9_x",
	"userPic": "Show_userPic__zktEi",
	"createWrap": "Show_createWrap__8Ql7g",
	"btns": "Show_btns__veOAc",
	"cancel": "Show_cancel__F2S2J",
	"send": "Show_send__wEaQR",
	"sendON": "Show_sendON__WHLqo",
	"sendOFF": "Show_sendOFF__3nnpx",
	"createComm": "Show_createComm__xGa_y",
	"showLikes": "Show_showLikes__ZK8yg",
	"count": "Show_count__oTTWf",
	"post": "Show_post__2SE9W",
	"postCore": "Show_postCore__7AdQ8",
	"topic": "Show_topic__kbiDW",
	"name": "Show_name__Y6SaO",
	"title": "Show_title___7J3Y",
	"content": "Show_content__XEu3M",
	"actions": "Show_actions__ZtI4j",
	"comments": "Show_comments__h3Nub",
	"image": "Show_image__dcRJK"
};


/***/ }),

/***/ 9878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _postId_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/use-request.js
var use_request = __webpack_require__(6471);
// EXTERNAL MODULE: ./styles/Comment.module.css
var Comment_module = __webpack_require__(8810);
var Comment_module_default = /*#__PURE__*/__webpack_require__.n(Comment_module);
// EXTERNAL MODULE: ./styles/Components.module.css
var Components_module = __webpack_require__(6853);
var Components_module_default = /*#__PURE__*/__webpack_require__.n(Components_module);
// EXTERNAL MODULE: external "date-fns/formatDistance"
var formatDistance_ = __webpack_require__(3291);
var formatDistance_default = /*#__PURE__*/__webpack_require__.n(formatDistance_);
;// CONCATENATED MODULE: ./components/items/Comment.js







const Comment = ({ comment , userId  })=>{
    const { 0: state , 1: setState  } = (0,external_react_.useState)(true);
    const { doRequest , errors  } = (0,use_request/* default */.Z)({
        url: `http://localhost:8000/api/comments/${comment._id}`,
        method: "delete"
    });
    const deleteComment = (e)=>{
        e.preventDefault();
        setState(false);
        doRequest();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: state ? (Comment_module_default()).commentWrap : (Comment_module_default()).hide,
        children: [
            comment.postedBy._id === userId && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: deleteComment,
                className: (Components_module_default()).Xmarker,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M10 10L19 19M1 19L10 10L1 19ZM19 1L9.99828 10L19 1ZM9.99828 10L1 1L9.99828 10Z",
                        stroke: "black",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/users/[...oneUser]",
                as: `/users/${comment.postedBy._id}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (Comment_module_default()).pic,
                        src: comment.postedBy.photo,
                        alt: comment.postedBy.username
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/users/[...oneUser]",
                                as: `/users/${comment.postedBy._id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        textDecoration: "none"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (Comment_module_default()).name,
                                        children: comment.postedBy.username
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Comment_module_default()).time,
                                children: formatDistance_default()(new Date(comment.createdAt), new Date(), {
                                    addSuffix: true
                                }).replace("about", "").replace("less than", "")
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Comment_module_default()).content,
                            style: {
                                color: "#000"
                            },
                            children: comment.content
                        })
                    })
                ]
            }),
            errors
        ]
    });
};
/* harmony default export */ const items_Comment = (Comment);

// EXTERNAL MODULE: ./components/bars/TopBar.js + 1 modules
var TopBar = __webpack_require__(2710);
// EXTERNAL MODULE: ./components/Icons/LikeSet.js
var LikeSet = __webpack_require__(9107);
// EXTERNAL MODULE: ./components/bannerOptions/SaveOption.js
var SaveOption = __webpack_require__(7417);
// EXTERNAL MODULE: ./components/bannerOptions/CopyOption.js + 1 modules
var CopyOption = __webpack_require__(5845);
// EXTERNAL MODULE: ./components/bannerOptions/DeleteOption.js + 1 modules
var DeleteOption = __webpack_require__(7760);
// EXTERNAL MODULE: ./components/bannerOptions/EditOption.js + 1 modules
var EditOption = __webpack_require__(8537);
// EXTERNAL MODULE: ./components/bars/SideBar.js
var SideBar = __webpack_require__(8328);
;// CONCATENATED MODULE: ./components/lists/CommentList.js



const CommentList = ({ comments , userId  })=>{
    if (comments.length === 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Comment_module_default()).noComments,
            children: "Be the first one to comment this post!"
        });
    }
    if (!comments) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            "data-center": "center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wave"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wave"
                })
            ]
        });
    }
    const renderedList = comments.map((comment)=>/*#__PURE__*/ jsx_runtime_.jsx(items_Comment, {
            userId: userId,
            comment: comment
        }, comment._id));
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Comment_module_default()).commentList,
        children: renderedList
    });
};
/* harmony default export */ const lists_CommentList = (CommentList);

// EXTERNAL MODULE: ./components/Icons/CommentIcon.js
var CommentIcon = __webpack_require__(5363);
// EXTERNAL MODULE: ./components/bars/BottomBar.js + 3 modules
var BottomBar = __webpack_require__(7899);
// EXTERNAL MODULE: ./styles/Show.module.css
var Show_module = __webpack_require__(8126);
var Show_module_default = /*#__PURE__*/__webpack_require__.n(Show_module);
// EXTERNAL MODULE: ./components/bars/Layer.js
var Layer = __webpack_require__(4433);
// EXTERNAL MODULE: ./api/build-client.js
var build_client = __webpack_require__(8775);
// EXTERNAL MODULE: ./components/Icons/MoreIcon.js
var MoreIcon = __webpack_require__(1110);
;// CONCATENATED MODULE: ./pages/posts/[...postId].js





















const PostShow = ({ data: { post  } , data  })=>{
    const { 0: editOpt , 1: setEditOpt  } = (0,external_react_.useState)(false);
    const { 0: deleteOpt , 1: setDeleteOpt  } = (0,external_react_.useState)(false);
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(false);
    const { 0: banner , 1: setBanner  } = (0,external_react_.useState)(false);
    const { 0: postContent , 1: setPostContent  } = (0,external_react_.useState)(post.content);
    const { 0: content , 1: setContent  } = (0,external_react_.useState)("");
    const { 0: comments , 1: setComment  } = (0,external_react_.useState)([]);
    const { 0: commCount , 1: setCommCount  } = (0,external_react_.useState)(post.comments.length);
    const { doRequest , errors  } = (0,use_request/* default */.Z)({
        url: `http://localhost:8000/api/comments/${post._id}`,
        method: "post",
        body: {
            content
        }
    });
    const { doRequest: deleteRequest , errors: errs  } = (0,use_request/* default */.Z)({
        url: `http://localhost:8000/api/posts/${post._id}`,
        method: "delete",
        onSuccess: ()=>router_default().push("/users/my-profile")
    });
    const { doRequest: editRequest , errors: ers  } = (0,use_request/* default */.Z)({
        url: `http://localhost:8000/api/posts/${post._id}`,
        method: "put",
        body: {
            content: postContent
        }
    });
    const onSubmit = async (e)=>{
        e.preventDefault();
        if (content.length < 4 || content.length > 30) {
            return;
        }
        const res = await doRequest();
        if (res) {
            setContent("");
            setCommCount((oldState)=>oldState + 1);
            setComment((oldState)=>[
                    res,
                    ...oldState
                ]);
        }
    };
    const btnCancel = ()=>{
        setContent("");
        setActive(false);
    };
    const renderedComments = comments.map((res)=>/*#__PURE__*/ jsx_runtime_.jsx(items_Comment, {
            comment: res
        }, res.createdAt));
    const deletePost = (e)=>{
        e.preventDefault();
        deleteRequest();
    };
    const editReset = ()=>{
        setPostContent(post.content);
        setEditOpt(false);
    };
    const editPost = async (e)=>{
        e.preventDefault();
        const res = await editRequest();
        if (res) {
            setEditOpt(false);
        } else {
            setPostContent(post.content);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TopBar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SideBar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Layer/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Show_module_default()).showWrap,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Show_module_default()).post,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Show_module_default()).postTop,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/topics/[topicSlug]",
                                        as: `/topics/${post.slug}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    alt: post.title,
                                                    src: `/${post.slug}.jpg`
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (Show_module_default()).topic,
                                                    children: `s/${post.topic}`
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "posted by"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/users/[...oneUser]",
                                        as: `/users/${post.postedBy._id}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (Show_module_default()).name,
                                                    children: post.postedBy.username
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: (Show_module_default()).userPic,
                                                    src: post.postedBy.photo,
                                                    alt: post.postedBy.username
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Show_module_default()).postCore,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: (Show_module_default()).title,
                                        children: post.title
                                    }),
                                    !editOpt && postContent.split("\n").map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            style: el.length === 0 ? {
                                                height: "1rem"
                                            } : null,
                                            className: (Show_module_default()).content,
                                            children: el
                                        }, i)),
                                    editOpt && /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        className: (Components_module_default()).textArea,
                                        onChange: (e)=>setPostContent(e.target.value),
                                        value: postContent
                                    })
                                ]
                            }),
                            !editOpt && post.coverImage && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "cover image",
                                className: (Show_module_default()).image,
                                src: post.coverImage
                            }),
                            editOpt && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Components_module_default()).editWrap,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: editReset,
                                        className: (Components_module_default()).cancel,
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: editPost,
                                        className: (Components_module_default())["delete"],
                                        children: "Save"
                                    })
                                ]
                            }),
                            !editOpt && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Show_module_default()).actions,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Show_module_default()).showLikes,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(LikeSet/* default */.Z, {
                                            userId: data.userId,
                                            likes: post.likes,
                                            postID: post._id
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Show_module_default()).comments,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CommentIcon/* default */.Z, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (Show_module_default()).count,
                                                children: commCount
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: post.comments.length === 1 ? "Comment" : "Comments"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: ()=>setBanner(true),
                                        style: {
                                            padding: "1rem 0.6rem"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(MoreIcon/* default */.Z, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        onClick: ()=>setBanner(false),
                                        style: banner ? null : {
                                            display: "none"
                                        },
                                        className: (Components_module_default()).moreBanner,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(SaveOption/* default */.Z, {
                                                postID: post._id
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CopyOption/* default */.Z, {}),
                                            data.userPosts.includes(post._id) && /*#__PURE__*/ jsx_runtime_.jsx(EditOption/* default */.Z, {
                                                activation: setEditOpt
                                            }),
                                            data.userPosts.includes(post._id) && /*#__PURE__*/ jsx_runtime_.jsx(DeleteOption/* default */.Z, {
                                                activation: setDeleteOpt
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>setBanner(false),
                                className: banner ? (Components_module_default()).transparentLayer : null
                            })
                        ]
                    }),
                    !editOpt && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: onSubmit,
                        className: (Show_module_default()).createWrap,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                onClick: ()=>setActive(true),
                                onChange: (e)=>setContent(e.target.value),
                                value: content,
                                className: (Show_module_default()).createComm,
                                minLength: "6",
                                maxLength: "30",
                                type: "text",
                                placeholder: "Add new comment"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: active ? null : {
                                    display: "none"
                                },
                                className: (Show_module_default()).btns,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: (Show_module_default()).cancel,
                                        onClick: btnCancel,
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        className: `${(Show_module_default()).send} ${content.length > 5 ? (Show_module_default()).sendON : (Show_module_default()).sendOFF}`,
                                        children: "Post"
                                    })
                                ]
                            })
                        ]
                    }),
                    renderedComments,
                    !editOpt && /*#__PURE__*/ jsx_runtime_.jsx(lists_CommentList, {
                        userId: data.userId,
                        comments: post.comments
                    })
                ]
            }),
            errors,
            errs,
            ers,
            /*#__PURE__*/ jsx_runtime_.jsx(BottomBar/* default */.Z, {}),
            deleteOpt && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>setDeleteOpt(false),
                className: (Components_module_default()).layer
            }),
            deleteOpt && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Components_module_default()).deleteBanner,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Are you sure you want to delete this post?"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (Components_module_default()).cancel,
                                onClick: ()=>setDeleteOpt(false),
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: deletePost,
                                className: (Components_module_default())["delete"],
                                children: "Delete"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = async (ctx)=>{
    const { postId  } = ctx.query;
    const client = (0,build_client/* default */.Z)(ctx);
    const { data  } = await client.get(`/api/posts/${postId}`);
    return {
        props: {
            ...data,
            postId
        }
    };
};
/* harmony default export */ const _postId_ = (PostShow);


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 2069:
/***/ ((module) => {

"use strict";
module.exports = require("axios-rate-limit");

/***/ }),

/***/ 3291:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/formatDistance");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,853,471,899,119,909,30], () => (__webpack_exec__(9878)));
module.exports = __webpack_exports__;

})();