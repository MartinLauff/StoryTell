(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{28:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return t(4699)}])},4357:function(n,e,t){"use strict";var r=t(5893),o=t(7294),a=t(520),s=t.n(a);e.Z=function(n){var e=n.style,t=n.content,a=n.color;return(0,r.jsx)(o.Fragment,{children:(0,r.jsx)("button",{type:"submit",style:e,className:"".concat(s().button," ").concat(s()[a]),children:t})})}},6471:function(n,e,t){"use strict";var r=t(5666),o=t.n(r),a=t(5893),s=t(9669),i=t.n(s),u=t(7294),c=t(6699),_=t.n(c);function l(n,e,t,r,o,a,s){try{var i=n[a](s),u=i.value}catch(c){return void t(c)}i.done?e(u):Promise.resolve(u).then(r,o)}function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){p(n,e,t[e])}))}return n}e.Z=function(n){var e,t=n.url,r=n.method,s=n.body,c=n.onSuccess,p=(0,u.useState)(null),d=p[0],f=p[1];return{doRequest:(e=o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,f(null),n.next=4,i()({method:r,url:t,data:m({},s),withCredentials:!0});case 4:return e=n.sent,c&&c(e.data),n.abrupt("return",e.data);case 9:n.prev=9,n.t0=n.catch(0),n.t0.response.data.message?f((0,a.jsxs)("div",{onClick:function(){return f(null)},className:_().errorBanner,children:[(0,a.jsx)("h4",{children:"Invalid parameters"}),(0,a.jsx)("ul",{style:{listStyle:"none"},children:n.t0.response.data.message.split(",").map((function(n){return(0,a.jsx)("li",{children:n.split(":").pop().replace("jwt malformed","You are not logged in!")},n)}))})]})):f((0,a.jsxs)("div",{onClick:function(){return f(null)},className:_().errorBanner,children:[(0,a.jsx)("h4",{children:"Ooops...."}),(0,a.jsx)("ul",{style:{listStyle:"none"},children:n.t0.response.data.errors.map((function(n){return(0,a.jsx)("li",{children:n.message},n.message)}))})]}));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function s(n){l(a,r,o,s,i,"next",n)}function i(n){l(a,r,o,s,i,"throw",n)}s(void 0)}))}),errors:d}}},4699:function(n,e,t){"use strict";t.r(e);var r=t(5666),o=t.n(r),a=t(5893),s=t(7294),i=t(1163),u=t(4357),c=t(9145),_=t.n(c),l=t(520),p=t.n(l),m=t(6471);function d(n,e,t,r,o,a,s){try{var i=n[a](s),u=i.value}catch(c){return void t(c)}i.done?e(u):Promise.resolve(u).then(r,o)}e.default=function(){var n,e=(0,s.useState)(""),t=e[0],r=e[1],c=(0,s.useState)(""),l=c[0],f=c[1],h=(0,m.Z)({url:"/api/auth/signin",method:"post",body:{email:t,password:l},onSuccess:function(){return i.default.push("/posts")}}),x=h.doRequest,g=h.errors,v=(n=o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t&&l){n.next=3;break}return n.abrupt("return");case 3:x();case 4:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function s(n){d(a,r,o,s,i,"next",n)}function i(n){d(a,r,o,s,i,"throw",n)}s(void 0)}))});return(0,a.jsxs)("div",{className:"".concat(_().mybackground," ").concat(_().signinImg),children:[(0,a.jsx)("h1",{className:_().heading,children:"Storytell"}),(0,a.jsxs)("form",{className:_().flexCenter,onSubmit:v,children:[(0,a.jsx)("input",{className:p().textInput,onChange:function(n){return r(n.target.value)},type:"email",placeholder:"Email",required:!0}),(0,a.jsx)("input",{className:p().textInput,onChange:function(n){return f(n.target.value)},type:"password",placeholder:"Password",minLength:"8",maxLength:"20",required:!0}),g,(0,a.jsx)(u.Z,{content:"Login",color:"redButton"})]})]})}},520:function(n){n.exports={button:"Components_button__BY9YS",whiteButton:"Components_whiteButton__ZIUDv",redButton:"Components_redButton__5XsJr",textInput:"Components_textInput__xi2s6",btnWrapper:"Components_btnWrapper__pVph0",cancelBtn:"Components_cancelBtn__D5X_g",applyBtn:"Components_applyBtn__QcY2Q",moreBanner:"Components_moreBanner__Qeo6x",bannerOption:"Components_bannerOption__QuB5k",bannerText:"Components_bannerText__KsWGP",transparentLayer:"Components_transparentLayer__8SrQE",err:"Components_err__TWstW",xIcon:"Components_xIcon__N98h2",imgON:"Components_imgON__f_deP",imgOFF:"Components_imgOFF__c7y04",layer:"Components_layer__eFSk2",deleteBanner:"Components_deleteBanner__vq_hj",cancel:"Components_cancel__9pr49",delete:"Components_delete__0_IGi",editWrap:"Components_editWrap__fm7H1",textArea:"Components_textArea__xsDtq",Xmarker:"Components_Xmarker__joTSX",Not:"Components_Not__0sfJh",marginBottom:"Components_marginBottom__o8J3b"}},6699:function(n){n.exports={errorBanner:"Error_errorBanner__EDEUS",errMessage:"Error_errMessage__EAG1J",hide:"Error_hide__LPa3Y",custom500:"Error_custom500__Q8T4b",h500:"Error_h500__KOR9p",errWrap:"Error_errWrap__8zg74"}},9145:function(n){n.exports={mybackground:"Index_mybackground__H6VlL",indexImg:"Index_indexImg__k_lif",signinImg:"Index_signinImg__YiNvJ",heading:"Index_heading__hZLdZ",indexSpan:"Index_indexSpan__jsynF",flexCenter:"Index_flexCenter___QCGl"}},1163:function(n,e,t){n.exports=t(387)}},function(n){n.O(0,[669,774,888,179],(function(){return e=28,n(n.s=e);var e}));var e=n.O();_N_E=e}]);