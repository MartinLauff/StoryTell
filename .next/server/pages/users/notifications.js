(() => {
var exports = {};
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 2168:
/***/ ((module) => {

// Exports
module.exports = {
	"mainTitle": "Activity_mainTitle__AGjze",
	"noActivities": "Activity_noActivities__K_oZA",
	"activityList": "Activity_activityList__dnMio",
	"imageLeft": "Activity_imageLeft__r0QpH",
	"topicLeft": "Activity_topicLeft__Yd0SJ",
	"profilePic": "Activity_profilePic__8Qwag",
	"activityWrapper": "Activity_activityWrapper__q64tF",
	"message": "Activity_message__bWTMY",
	"text": "Activity_text__ARc2b",
	"time": "Activity_time__AVFrc",
	"moreAcs": "Activity_moreAcs__k26vl"
};


/***/ }),

/***/ 8697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ notifications),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./api/build-client.js
var build_client = __webpack_require__(8775);
// EXTERNAL MODULE: ./components/bars/ArrowBar.js + 3 modules
var ArrowBar = __webpack_require__(5109);
// EXTERNAL MODULE: ./components/bars/BottomBar.js + 3 modules
var BottomBar = __webpack_require__(7899);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/use-request.js
var use_request = __webpack_require__(6471);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "date-fns/formatDistance"
var formatDistance_ = __webpack_require__(3291);
var formatDistance_default = /*#__PURE__*/__webpack_require__.n(formatDistance_);
;// CONCATENATED MODULE: ./components/Icons/activity/LikeType.js

const LikeType = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "18",
            height: "17",
            viewBox: "0 0 18 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M1 8.46305L9 1L17 8.46305",
                    stroke: "#59BAB7",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M1 15.9261L9 8.46307L17 15.9261",
                    stroke: "#59BAB7",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            ]
        })
    });
};
/* harmony default export */ const activity_LikeType = (LikeType);

;// CONCATENATED MODULE: ./components/Icons/activity/CommentType.js

const CommentType = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            width: "16",
            height: "18",
            viewBox: "0 0 16 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.8 7.74178H4C3.78783 7.74178 3.58434 7.83241 3.43431 7.99373C3.28429 8.15505 3.2 8.37384 3.2 8.60198C3.2 8.83012 3.28429 9.04891 3.43431 9.21023C3.58434 9.37155 3.78783 9.46218 4 9.46218H8.8C9.01217 9.46218 9.21566 9.37155 9.36569 9.21023C9.51571 9.04891 9.6 8.83012 9.6 8.60198C9.6 8.37384 9.51571 8.15505 9.36569 7.99373C9.21566 7.83241 9.01217 7.74178 8.8 7.74178ZM12 4.30099H4C3.78783 4.30099 3.58434 4.39162 3.43431 4.55294C3.28429 4.71425 3.2 4.93305 3.2 5.16119C3.2 5.38933 3.28429 5.60812 3.43431 5.76944C3.58434 5.93076 3.78783 6.02139 4 6.02139H12C12.2122 6.02139 12.4157 5.93076 12.5657 5.76944C12.7157 5.60812 12.8 5.38933 12.8 5.16119C12.8 4.93305 12.7157 4.71425 12.5657 4.55294C12.4157 4.39162 12.2122 4.30099 12 4.30099ZM13.6 0H2.4C1.76348 0 1.15303 0.271883 0.702944 0.755839C0.252856 1.23979 0 1.89618 0 2.58059V11.1826C0 11.867 0.252856 12.5234 0.702944 13.0073C1.15303 13.4913 1.76348 13.7632 2.4 13.7632H11.672L14.632 16.9545C14.7068 17.0342 14.7954 17.0973 14.8929 17.1401C14.9903 17.1829 15.0947 17.2046 15.2 17.204C15.3049 17.2069 15.4091 17.1833 15.504 17.1351C15.6501 17.0706 15.7752 16.961 15.8634 16.8202C15.9517 16.6794 15.9992 16.5136 16 16.3438V2.58059C16 1.89618 15.7471 1.23979 15.2971 0.755839C14.847 0.271883 14.2365 0 13.6 0ZM14.4 14.2707L12.568 12.2922C12.4932 12.2125 12.4046 12.1494 12.3071 12.1066C12.2097 12.0638 12.1053 12.0421 12 12.0428H2.4C2.18783 12.0428 1.98434 11.9521 1.83431 11.7908C1.68429 11.6295 1.6 11.4107 1.6 11.1826V2.58059C1.6 2.35246 1.68429 2.13366 1.83431 1.97234C1.98434 1.81102 2.18783 1.7204 2.4 1.7204H13.6C13.8122 1.7204 14.0157 1.81102 14.1657 1.97234C14.3157 2.13366 14.4 2.35246 14.4 2.58059V14.2707Z",
                fill: "#878A8C"
            })
        })
    });
};
/* harmony default export */ const activity_CommentType = (CommentType);

;// CONCATENATED MODULE: ./components/Icons/activity/FollowType.js

const FollowType = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            width: "20",
            height: "18",
            viewBox: "0 0 20 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4 4C4 1.79 5.79 0 8 0C10.21 0 12 1.79 12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4ZM8 10C3.58 10 0 11.79 0 14V16H11.09C11.04 15.67 11 15.34 11 15C11 13.36 11.66 11.87 12.74 10.78C11.41 10.29 9.78 10 8 10V10ZM17 11L14 14H16V18H18V14H20L17 11V11Z",
                fill: "#FF2F2F"
            })
        })
    });
};
/* harmony default export */ const activity_FollowType = (FollowType);

// EXTERNAL MODULE: ./styles/Activity.module.css
var Activity_module = __webpack_require__(2168);
var Activity_module_default = /*#__PURE__*/__webpack_require__.n(Activity_module);
;// CONCATENATED MODULE: ./components/items/Activity.js







const Activity = ({ activity  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Activity_module_default()).activityWrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/users/[...oneUser]",
                as: `/users/${activity.user._id}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (Activity_module_default()).profilePic,
                        src: activity.user.photo,
                        alt: activity.user.username
                    })
                })
            }),
            activity.type.startsWith("liked") ? /*#__PURE__*/ jsx_runtime_.jsx(activity_LikeType, {}) : activity.type.startsWith("commented") ? /*#__PURE__*/ jsx_runtime_.jsx(activity_CommentType, {}) : /*#__PURE__*/ jsx_runtime_.jsx(activity_FollowType, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Activity_module_default()).text,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (Activity_module_default()).message,
                        children: [
                            "The user",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/users/[...oneUser]",
                                as: `/users/${activity.user._id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        textDecoration: "none",
                                        color: "#000"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: activity.user.username
                                    })
                                })
                            }),
                            " " + activity.type
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Activity_module_default()).time,
                        children: formatDistance_default()(new Date(activity.createdAt), new Date(), {
                            addSuffix: true
                        }).replace("about", "").replace("less than", "")
                    })
                ]
            }),
            activity.post && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/posts/[...postId]",
                as: `/posts/${activity.post._id}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: activity.post.coverImage ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (Activity_module_default()).imageLeft,
                        src: activity.post.coverImage,
                        alt: "post photo"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (Activity_module_default()).topicLeft,
                        src: `/${activity.topic}.png`,
                        alt: "post photo"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const items_Activity = (Activity);

;// CONCATENATED MODULE: ./components/lists/ActivityList.js





const ActivityList = ({ activities  })=>{
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(true);
    const { 0: acsData , 1: setAcsData  } = (0,external_react_.useState)([]);
    const { 0: page , 1: nextPage  } = (0,external_react_.useState)(1);
    const { doRequest , errors  } = (0,use_request/* default */.Z)({
        url: `/api/users/activities?page=${page}&limit=10`,
        method: "get"
    });
    (0,external_react_.useEffect)(()=>{
        if (activities.length < 10) {
            return setActive(false);
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        setAcsData((oldState)=>[
                ...oldState,
                ...activities
            ]);
        nextPage((oldState)=>oldState + 1);
    }, []);
    if (activities.length === 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Activity_module_default()).noActivities,
            children: "When a user likes your post, comments on your post or starts following you. We will get you notified here \uD83D\uDD25 \uD83D\uDC4D \uD83D\uDC4C"
        });
    }
    if (!activities) {
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
    const onClick = async (e)=>{
        e.preventDefault();
        const { data  } = await doRequest();
        if (data) {
            nextPage((oldState)=>oldState + 1);
            setAcsData((oldState)=>[
                    ...oldState,
                    ...data
                ]);
        }
        if (data.length < 10) {
            setActive(false);
        }
    };
    const renderedList = acsData.map((activity)=>/*#__PURE__*/ jsx_runtime_.jsx(items_Activity, {
            activity: activity
        }, activity._id));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Activity_module_default()).activityList,
        children: [
            renderedList,
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                style: active ? null : {
                    display: "none"
                },
                onClick: onClick,
                className: (Activity_module_default()).moreAcs,
                children: "Older Notifications"
            }),
            errors
        ]
    });
};
/* harmony default export */ const lists_ActivityList = (ActivityList);

;// CONCATENATED MODULE: ./pages/users/notifications.js






const Notifications = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ArrowBar/* default */.Z, {
                title: "Notifications"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Activity_module_default()).mainTitle,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "15",
                        height: "23",
                        viewBox: "0 0 15 23",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M11.933 0.0941074C12.0665 0.172123 12.1698 0.293469 12.226 0.438322C12.2822 0.583174 12.288 0.742971 12.2426 0.891607L9.78673 8.93811H14.3179C14.4511 8.93805 14.5814 8.97732 14.6926 9.05106C14.8039 9.12481 14.8914 9.2298 14.9441 9.35307C14.9969 9.47635 15.0128 9.61251 14.9897 9.74475C14.9666 9.877 14.9056 9.99953 14.8143 10.0972L3.90558 21.7847C3.80003 21.8979 3.65958 21.9717 3.50711 21.9941C3.35464 22.0165 3.19915 21.9861 3.06598 21.908C2.93282 21.8298 2.82982 21.7085 2.7738 21.5638C2.71777 21.419 2.712 21.2594 2.75744 21.111L5.21326 13.0631H0.682065C0.548904 13.0632 0.418642 13.0239 0.30736 12.9501C0.196077 12.8764 0.108646 12.7714 0.0558587 12.6481C0.00307159 12.5249 -0.0127604 12.3887 0.0103171 12.2565C0.0333946 12.1242 0.0943711 12.0017 0.18572 11.904L11.0944 0.216482C11.1998 0.103456 11.3401 0.0297142 11.4923 0.00724665C11.6446 -0.0152209 11.7999 0.0149072 11.933 0.0927324V0.0941074ZM2.25974 11.6881H6.13641C6.24311 11.6881 6.34832 11.7133 6.44359 11.7618C6.53885 11.8102 6.62151 11.8805 6.68492 11.9671C6.74832 12.0536 6.79069 12.154 6.80863 12.26C6.82657 12.3661 6.81958 12.4749 6.78821 12.5777L4.92282 18.6869L12.7389 10.3131H8.86359C8.75689 10.3131 8.65167 10.2879 8.55641 10.2394C8.46114 10.191 8.37848 10.1207 8.31508 10.0341C8.25168 9.94759 8.20931 9.84726 8.19137 9.7412C8.17343 9.63514 8.18042 9.52632 8.21179 9.42348L10.0772 3.31436L2.25974 11.6881Z",
                            fill: "black"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "All activity"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lists_ActivityList, {
                activities: data.data
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BottomBar/* default */.Z, {})
        ]
    });
};
const getServerSideProps = async (ctx)=>{
    const client = (0,build_client/* default */.Z)(ctx);
    const { data  } = await client.get("/api/users/activities/");
    return {
        props: {
            data
        }
    };
};
/* harmony default export */ const notifications = (Notifications);


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,853,471,899,119,109], () => (__webpack_exec__(8697)));
module.exports = __webpack_exports__;

})();