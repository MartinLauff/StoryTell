(() => {
var exports = {};
exports.id = 539;
exports.ids = [539];
exports.modules = {

/***/ 685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9799);
/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8810);
/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6853);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3291);
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const Comment = ({
  comment,
  userId
}) => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    doRequest,
    errors
  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
    url: `/api/comments/${comment._id}`,
    method: 'delete',
    headers: {
      Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('jwt')
    }
  });

  const deleteComment = e => {
    e.preventDefault();
    setState(false);
    doRequest();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: state ? (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_6___default().commentWrap) : (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_6___default().hide),
    children: [comment.postedBy._id === userId && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      onClick: deleteComment,
      className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_7___default().Xmarker),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("path", {
          d: "M10 10L19 19M1 19L10 10L1 19ZM19 1L9.99828 10L19 1ZM9.99828 10L1 1L9.99828 10Z",
          stroke: "black",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/users/[...oneUser]",
      as: `/users/${comment.postedBy._id}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
          className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_6___default().pic),
          src: comment.postedBy.photo,
          alt: comment.postedBy.username
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: "/users/[...oneUser]",
          as: `/users/${comment.postedBy._id}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
            style: {
              textDecoration: 'none'
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_6___default().name),
              children: comment.postedBy.username
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_6___default().time),
          children: date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4___default()(new Date(comment.createdAt), new Date(), {
            addSuffix: true
          }).replace('about', '').replace('less than', '')
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),
          style: {
            color: '#000'
          },
          children: comment.content
        })
      })]
    }), errors]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);
});

/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _items_Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(685);
/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8810);
/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_items_Comment__WEBPACK_IMPORTED_MODULE_0__]);
_items_Comment__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const CommentList = ({
  comments,
  userId
}) => {
  if (comments.length === 0) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().noComments),
      children: "Be the first one to comment this post!"
    });
  }

  if (!comments) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      "data-center": "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "wave"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "wave"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "wave"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "wave"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "wave"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "wave"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "wave"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "wave"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "wave"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "wave"
      })]
    });
  }

  const renderedList = comments.map(comment => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_items_Comment__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    userId: userId,
    comment: comment
  }, comment._id));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_2___default().commentList),
    children: renderedList
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentList);
});

/***/ }),

/***/ 6356:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_items_Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(685);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9799);
/* harmony import */ var _components_bars_TopBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2609);
/* harmony import */ var _components_Icons_LikeSet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3212);
/* harmony import */ var _components_bannerOptions_SaveOption__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7112);
/* harmony import */ var _components_bannerOptions_CopyOption__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6200);
/* harmony import */ var _components_bannerOptions_DeleteOption__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6211);
/* harmony import */ var _components_bannerOptions_EditOption__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8655);
/* harmony import */ var _components_bars_SideBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4899);
/* harmony import */ var _components_lists_CommentList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5656);
/* harmony import */ var _components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2287);
/* harmony import */ var _components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3091);
/* harmony import */ var _styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8126);
/* harmony import */ var _styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6853);
/* harmony import */ var _styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_bars_Layer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6834);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4808);
/* harmony import */ var _components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8280);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_lists_CommentList__WEBPACK_IMPORTED_MODULE_13__, _components_bannerOptions_SaveOption__WEBPACK_IMPORTED_MODULE_8__, _components_Icons_LikeSet__WEBPACK_IMPORTED_MODULE_7__, _components_items_Comment__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_4__]);
([_components_lists_CommentList__WEBPACK_IMPORTED_MODULE_13__, _components_bannerOptions_SaveOption__WEBPACK_IMPORTED_MODULE_8__, _components_Icons_LikeSet__WEBPACK_IMPORTED_MODULE_7__, _components_items_Comment__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























const PostShow = ({
  data: {
    post
  },
  data
}) => {
  const {
    0: editOpt,
    1: setEditOpt
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: deleteOpt,
    1: setDeleteOpt
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: active,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: banner,
    1: setBanner
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: postContent,
    1: setPostContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(post.content);
  const {
    0: content,
    1: setContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: comments,
    1: setComment
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: commCount,
    1: setCommCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(post.comments.length);
  const {
    doRequest,
    errors
  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
    url: `/api/comments/${post._id}`,
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get('jwt')
    },
    body: {
      content
    }
  });
  const {
    doRequest: deleteRequest,
    errors: errs
  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
    url: `/api/posts/${post._id}`,
    method: 'delete',
    headers: {
      Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get('jwt')
    },
    onSuccess: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/users/my-profile')
  });
  const {
    doRequest: editRequest,
    errors: ers
  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
    url: `/api/posts/${post._id}`,
    method: 'put',
    body: {
      content: postContent
    },
    headers: {
      Authorization: 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get('jwt')
    }
  });

  const onSubmit = async e => {
    e.preventDefault();

    if (content.length < 4 || content.length > 30) {
      return;
    }

    const res = await doRequest();

    if (res) {
      setContent('');
      setCommCount(oldState => oldState + 1);
      setComment(oldState => [res, ...oldState]);
    }
  };

  const btnCancel = () => {
    setContent('');
    setActive(false);
  };

  const renderedComments = comments.map(res => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_items_Comment__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    comment: res
  }, res.createdAt));

  const deletePost = e => {
    e.preventDefault();
    deleteRequest();
  };

  const editReset = () => {
    setPostContent(post.content);
    setEditOpt(false);
  };

  const editPost = async e => {
    e.preventDefault();
    const res = await editRequest();

    if (res) {
      setEditOpt(false);
    } else {
      setPostContent(post.content);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_bars_TopBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_bars_SideBar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_bars_Layer__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().showWrap),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().post),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().postTop),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
            href: "/topics/[topicSlug]",
            as: `/topics/${post.slug}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("a", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("img", {
                alt: post.title,
                src: `/${post.slug}.jpg`
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("span", {
                className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().topic),
                children: `s/${post.topic}`
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("span", {
            children: "posted by"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
            href: "/users/[...oneUser]",
            as: `/users/${post.postedBy._id}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("a", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("span", {
                className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().name),
                children: post.postedBy.username
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("img", {
                className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().userPic),
                src: post.postedBy.photo,
                alt: post.postedBy.username
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().postCore),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("h1", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().title),
            children: post.title
          }), !editOpt && postContent.split('\n').map((el, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("p", {
            style: el.length === 0 ? {
              height: '1rem'
            } : null,
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().content),
            children: el
          }, i)), editOpt && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("textarea", {
            className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21___default().textArea),
            onChange: e => setPostContent(e.target.value),
            value: postContent
          })]
        }), !editOpt && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("img", {
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().image),
          src: post.coverImage
        }), editOpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
          className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21___default().editWrap),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("button", {
            onClick: editReset,
            className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21___default().cancel),
            children: "Cancel"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("button", {
            onClick: editPost,
            className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21___default()["delete"]),
            children: "Save"
          })]
        }), !editOpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().actions),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().showLikes),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Icons_LikeSet__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              userId: data.userId,
              likes: post.likes,
              postID: post._id
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().comments),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Icons_CommentIcon__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("span", {
              className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().count),
              children: commCount
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("span", {
              children: post.comments.length === 1 ? 'Comment' : 'Comments'
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
            onClick: () => setBanner(true),
            style: {
              padding: '1rem 0.6rem'
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Icons_MoreIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
            onClick: () => setBanner(false),
            style: banner ? null : {
              display: 'none'
            },
            className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21___default().moreBanner),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_bannerOptions_SaveOption__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              postID: post._id
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_bannerOptions_CopyOption__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), data.userPosts.includes(post._id) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_bannerOptions_EditOption__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              activation: setEditOpt
            }), data.userPosts.includes(post._id) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_bannerOptions_DeleteOption__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              activation: setDeleteOpt
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
          onClick: () => setBanner(false),
          className: banner ? (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21___default().transparentLayer) : null
        })]
      }), !editOpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("form", {
        onSubmit: onSubmit,
        className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().createWrap),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("input", {
          onClick: () => setActive(true),
          onChange: e => setContent(e.target.value),
          value: content,
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().createComm),
          minLength: "6",
          maxLength: "30",
          type: "text",
          placeholder: "Add new comment"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
          style: active ? null : {
            display: 'none'
          },
          className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().btns),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("button", {
            className: (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().cancel),
            onClick: btnCancel,
            children: "Cancel"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("button", {
            type: "submit",
            className: `${(_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().send)} ${content.length > 5 ? (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().sendON) : (_styles_Show_module_css__WEBPACK_IMPORTED_MODULE_20___default().sendOFF)}`,
            children: "Post"
          })]
        })]
      }), renderedComments, !editOpt && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_lists_CommentList__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        userId: data.userId,
        comments: post.comments
      })]
    }), errors, errs, ers, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_bars_BottomBar__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}), deleteOpt && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
      onClick: () => setDeleteOpt(false),
      className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21___default().layer)
    }), deleteOpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21___default().deleteBanner),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("p", {
        children: "Are you sure you want to delete this post?"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("button", {
          className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21___default().cancel),
          onClick: () => setDeleteOpt(false),
          children: "Cancel"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("button", {
          onClick: deletePost,
          className: (_styles_Components_module_css__WEBPACK_IMPORTED_MODULE_21___default()["delete"]),
          children: "Delete"
        })]
      })]
    })]
  });
};

const getServerSideProps = async ctx => {
  const {
    postId
  } = ctx.query;
  const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(ctx);
  const {
    data
  } = await client.get(`/api/posts/${postId}`);
  return {
    props: _objectSpread(_objectSpread({}, data), {}, {
      postId
    })
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostShow);
});

/***/ }),

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

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,853,799,771,91,859,238], () => (__webpack_exec__(6356)));
module.exports = __webpack_exports__;

})();