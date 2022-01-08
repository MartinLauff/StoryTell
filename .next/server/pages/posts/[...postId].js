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

/***/ 9274:
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
        url: `/api/comments/${comment._id}`,
        method: 'delete'
    });
    const deleteComment = (e)=>{
        e.preventDefault();
        setState(false);
        doRequest();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
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
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/users/[...oneUser]",
                                as: `/users/${comment.postedBy._id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        textDecoration: 'none'
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
                                }).replace('about', '').replace('less than', '')
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Comment_module_default()).content,
                            style: {
                                color: '#000'
                            },
                            children: comment.content
                        })
                    })
                ]
            }),
            errors
        ]
    }));
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
;// CONCATENATED MODULE: ./components/Icons/DeleteIcon.js

const DeleteIcon = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            width: "20",
            height: "20.75",
            viewBox: "0 0 74 91",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M52.6458 9.19V8.19V7.29105C52.6498 7.2983 52.6458 7.29545 52.6458 7.28H52.6383C52.6374 7.27884 52.6364 7.27762 52.6353 7.27634C52.6153 7.25274 52.5425 7.19 52.4167 7.19H51.6458H50.6458H22.3542H21.5833C21.4575 7.19 21.3847 7.25274 21.3647 7.27634C21.3636 7.27762 21.3626 7.27884 21.3617 7.28H21.3542C21.3542 7.29009 21.3525 7.2948 21.3524 7.29484C21.3524 7.29486 21.3528 7.29356 21.3542 7.29105V8.19V15.38H16.4167V7.28C16.4167 3.65489 18.8835 1 21.5833 1H52.4167C55.1165 1 57.5833 3.65489 57.5833 7.28V15.38H52.6458V9.19ZM22.3542 17.38H23.3542H50.6458H51.6458H58.5833H59.5833H70.9167C71.9207 17.38 73 18.3969 73 20.02V23.57H67.4094H66.4486L66.4102 24.53L64.0302 84.0213L64.0302 84.0217C63.8913 87.5278 61.4904 90 58.8724 90H15.1276C12.5193 90 10.1087 87.5166 9.96978 84.0215L9.96977 84.0213L7.58983 24.53L7.55142 23.57H6.59062H1V20.02C1 18.3969 2.07931 17.38 3.08333 17.38H14.4167H15.4167H22.3542ZM1.00178 23.6748C1.00177 23.6748 1.00168 23.6746 1.00154 23.6742L1.00178 23.6748ZM58.1305 83.81H59.0912L59.1297 82.85L61.4614 24.61L61.5031 23.57H60.4622H13.5378H12.4969L12.5386 24.61L14.8703 82.85L14.9088 83.81H15.8695H58.1305Z",
                fill: "black",
                stroke: "black",
                strokeWidth: "3"
            })
        })
    }));
};
/* harmony default export */ const Icons_DeleteIcon = (DeleteIcon);

;// CONCATENATED MODULE: ./components/bannerOptions/DeleteOption.js



const DeleteOption = ({ activation  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: ()=>activation(true)
        ,
        className: (Components_module_default()).bannerOption,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icons_DeleteIcon, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Components_module_default()).bannerText,
                children: "Delete post"
            })
        ]
    }));
};
/* harmony default export */ const bannerOptions_DeleteOption = (DeleteOption);

;// CONCATENATED MODULE: ./components/Icons/EditIcon.js

const EditIcon = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M15.156 0L17.9999 2.8439L15.8319 5.01285L12.988 2.16895L15.156 0ZM4.73975 13.2602H7.58365L14.4915 6.35233L11.6476 3.50843L4.73975 10.4163V13.2602Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M15.1675 16.1041H4.88961C4.86497 16.1041 4.83937 16.1135 4.81473 16.1135C4.78344 16.1135 4.75216 16.105 4.71993 16.1041H1.89593V2.83252H8.38667L10.2826 0.936584H1.89593C0.850326 0.936584 0 1.78596 0 2.83252V16.1041C0 17.1506 0.850326 18 1.89593 18H15.1675C15.6703 18 16.1525 17.8002 16.5081 17.4447C16.8637 17.0891 17.0634 16.6069 17.0634 16.1041V7.88708L15.1675 9.78301V16.1041Z",
                    fill: "black"
                })
            ]
        })
    }));
};
/* harmony default export */ const Icons_EditIcon = (EditIcon);

;// CONCATENATED MODULE: ./components/bannerOptions/EditOption.js



const EditOption = ({ activation  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: ()=>activation(true)
        ,
        className: (Components_module_default()).bannerOption,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icons_EditIcon, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Components_module_default()).bannerText,
                children: "Edit post"
            })
        ]
    }));
};
/* harmony default export */ const bannerOptions_EditOption = (EditOption);

// EXTERNAL MODULE: ./components/bars/SideBar.js
var SideBar = __webpack_require__(8328);
;// CONCATENATED MODULE: ./components/lists/CommentList.js



const CommentList = ({ comments , userId  })=>{
    if (!comments || comments.length === 0) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Comment_module_default()).noComments,
            children: "Be the first one to comment this post!"
        }));
    }
    const renderedList = comments.map((comment)=>/*#__PURE__*/ jsx_runtime_.jsx(items_Comment, {
            userId: userId,
            comment: comment
        }, comment._id)
    );
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Comment_module_default()).commentList,
        children: renderedList
    }));
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
    const { 0: content , 1: setContent  } = (0,external_react_.useState)('');
    const { 0: comments , 1: setComment  } = (0,external_react_.useState)([]);
    const { 0: commCount , 1: setCommCount  } = (0,external_react_.useState)(post.comments.length);
    const { doRequest , errors  } = (0,use_request/* default */.Z)({
        url: `/api/comments/${post._id}`,
        method: 'post',
        body: {
            content
        }
    });
    const { doRequest: deleteRequest , errors: errs  } = (0,use_request/* default */.Z)({
        url: `/api/posts/${post._id}`,
        method: 'delete',
        onSuccess: ()=>router_default().push('/users/my-profile')
    });
    const { doRequest: editRequest , errors: ers  } = (0,use_request/* default */.Z)({
        url: `/api/posts/${post._id}`,
        method: 'put',
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
            setContent('');
            setCommCount((oldState)=>oldState + 1
            );
            setComment((oldState)=>[
                    res,
                    ...oldState
                ]
            );
        }
    };
    const btnCancel = ()=>{
        setContent('');
        setActive(false);
    };
    const renderedComments = comments.map((res)=>/*#__PURE__*/ jsx_runtime_.jsx(items_Comment, {
            comment: res
        }, res.createdAt)
    );
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
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TopBar/* default */.Z, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SideBar/* default */.Z, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layer/* default */.Z, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Show_module_default()).showWrap,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Show_module_default()).post,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Show_module_default()).postTop,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
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
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
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
                                    !editOpt && postContent.split('\n').map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            style: el.length === 0 ? {
                                                height: '1rem'
                                            } : null,
                                            className: (Show_module_default()).content,
                                            children: el
                                        }, i)
                                    ),
                                    editOpt && /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        className: (Components_module_default()).textArea,
                                        onChange: (e)=>setPostContent(e.target.value)
                                        ,
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
                                            /*#__PURE__*/ jsx_runtime_.jsx(CommentIcon/* default */.Z, {
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (Show_module_default()).count,
                                                children: commCount
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: post.comments.length === 1 ? 'Comment' : 'Comments'
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: ()=>setBanner(true)
                                        ,
                                        style: {
                                            padding: '1rem 0.6rem'
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(MoreIcon/* default */.Z, {
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        onClick: ()=>setBanner(false)
                                        ,
                                        style: banner ? null : {
                                            display: 'none'
                                        },
                                        className: (Components_module_default()).moreBanner,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(SaveOption/* default */.Z, {
                                                postID: post._id
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CopyOption/* default */.Z, {
                                            }),
                                            data.userPosts.includes(post._id) && /*#__PURE__*/ jsx_runtime_.jsx(bannerOptions_EditOption, {
                                                activation: setEditOpt
                                            }),
                                            data.userPosts.includes(post._id) && /*#__PURE__*/ jsx_runtime_.jsx(bannerOptions_DeleteOption, {
                                                activation: setDeleteOpt
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
                    }),
                    !editOpt && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: onSubmit,
                        className: (Show_module_default()).createWrap,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                onClick: ()=>setActive(true)
                                ,
                                onChange: (e)=>setContent(e.target.value)
                                ,
                                value: content,
                                className: (Show_module_default()).createComm,
                                minLength: "6",
                                maxLength: "30",
                                type: "text",
                                placeholder: "Add new comment"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: active ? null : {
                                    display: 'none'
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
            /*#__PURE__*/ jsx_runtime_.jsx(BottomBar/* default */.Z, {
            }),
            deleteOpt && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>setDeleteOpt(false)
                ,
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
                                onClick: ()=>setDeleteOpt(false)
                                ,
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
    }));
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,853,471,960,899,241,30], () => (__webpack_exec__(9274)));
module.exports = __webpack_exports__;

})();