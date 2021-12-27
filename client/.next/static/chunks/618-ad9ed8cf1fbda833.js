(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618],{1574:function(e,t,n){"use strict";function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){a(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(e,t){a(2,arguments);var n=r(e),o=r(t),i=n.getTime()-o.getTime();return i<0?-1:i>0?1:i}function i(e,t){a(2,arguments);var n=r(e),o=r(t),i=n.getFullYear()-o.getFullYear(),u=n.getMonth()-o.getMonth();return 12*i+u}function u(e){a(1,arguments);var t=r(e);return t.setHours(23,59,59,999),t}function s(e){a(1,arguments);var t=r(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function l(e){a(1,arguments);var t=r(e);return u(t).getTime()===s(t).getTime()}function c(e,t){a(2,arguments);var n,u=r(e),s=r(t),c=o(u,s),f=Math.abs(i(u,s));if(f<1)n=0;else{1===u.getMonth()&&u.getDate()>27&&u.setDate(30),u.setMonth(u.getMonth()-c*f);var d=o(u,s)===-c;l(r(e))&&1===f&&1===o(e,s)&&(d=!1),n=c*(f-Number(d))}return 0===n?0:n}function f(e,t){return a(2,arguments),r(e).getTime()-r(t).getTime()}n.d(t,{Z:function(){return x}});var d={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function h(e){return e?d[e]:d.trunc}function m(e,t,n){a(2,arguments);var r=f(e,t)/1e3;return h(null===n||void 0===n?void 0:n.roundingMethod)(r)}var g={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},v=function(e,t,n){var a,r=g[e];return a="string"===typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function p(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,a=e.formats[n]||e.formats[e.defaultWidth];return a}}var y={date:p({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:p({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:p({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},b={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function w(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;a=e.values[s]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function M(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var i,u=o[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?W(s,(function(e){return e.test(u)})):D(s,(function(e){return e.test(u)}));i=e.valueCallback?e.valueCallback(l):l,i=n.valueCallback?n.valueCallback(i):i;var c=t.slice(u.length);return{value:i,rest:c}}}function D(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function W(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var k,P={code:"en-US",formatDistance:v,formatLong:y,formatRelative:function(e,t,n,a){return b[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:w({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:w({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:w({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:w({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:w({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(k={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(k.matchPattern);if(!n)return null;var a=n[0],r=e.match(k.parsePattern);if(!r)return null;var o=k.valueCallback?k.valueCallback(r[0]):r[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(a.length);return{value:o,rest:i}}),era:M({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:M({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:M({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:M({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function S(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}function T(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var C=1440,j=43200;function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};a(2,arguments);var i=n.locale||P;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var u=o(e,t);if(isNaN(u))throw new RangeError("Invalid time value");var s,l,f=S(n);f.addSuffix=Boolean(n.addSuffix),f.comparison=u,u>0?(s=r(t),l=r(e)):(s=r(e),l=r(t));var d,h=m(l,s),g=(T(l)-T(s))/1e3,v=Math.round((h-g)/60);if(v<2)return n.includeSeconds?h<5?i.formatDistance("lessThanXSeconds",5,f):h<10?i.formatDistance("lessThanXSeconds",10,f):h<20?i.formatDistance("lessThanXSeconds",20,f):h<40?i.formatDistance("halfAMinute",null,f):h<60?i.formatDistance("lessThanXMinutes",1,f):i.formatDistance("xMinutes",1,f):0===v?i.formatDistance("lessThanXMinutes",1,f):i.formatDistance("xMinutes",v,f);if(v<45)return i.formatDistance("xMinutes",v,f);if(v<90)return i.formatDistance("aboutXHours",1,f);if(v<C){var p=Math.round(v/60);return i.formatDistance("aboutXHours",p,f)}if(v<2520)return i.formatDistance("xDays",1,f);if(v<j){var y=Math.round(v/C);return i.formatDistance("xDays",y,f)}if(v<86400)return d=Math.round(v/j),i.formatDistance("aboutXMonths",d,f);if((d=c(l,s))<12){var b=Math.round(v/j);return i.formatDistance("xMonths",b,f)}var w=d%12,M=Math.floor(d/12);return w<3?i.formatDistance("aboutXYears",M,f):w<9?i.formatDistance("overXYears",M,f):i.formatDistance("almostXYears",M+1,f)}},7942:function(e,t,n){"use strict";var a=n(3038);t.default=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(4957),u=n(9898),s=n(639);var l={};function c(e,t,n,a){if(e&&i.isLocalURL(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,r=u.useRouter(),f=o.default.useMemo((function(){var t=i.resolveHref(r,e.href,!0),n=a(t,2),o=n[0],u=n[1];return{href:o,as:e.as?i.resolveHref(r,e.as):u||o}}),[r,e.href,e.as]),d=f.href,h=f.as,m=e.children,g=e.replace,v=e.shallow,p=e.scroll,y=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var b=(t=o.default.Children.only(m))&&"object"===typeof t&&t.ref,w=s.useIntersection({rootMargin:"200px"}),M=a(w,2),D=M[0],W=M[1],k=o.default.useCallback((function(e){D(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,D]);o.default.useEffect((function(){var e=W&&n&&i.isLocalURL(d),t="undefined"!==typeof y?y:r&&r.locale,a=l[d+"%"+h+(t?"%"+t:"")];e&&!a&&c(r,d,h,{locale:t})}),[h,d,W,y,n,r]);var P={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,u,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==u&&a.indexOf("#")>=0&&(u=!1),t[r?"replace":"push"](n,a,{shallow:o,locale:s,scroll:u}))}(e,r,d,h,g,v,p,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&c(r,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof y?y:r&&r.locale,T=r&&r.isLocaleDomain&&i.getDomainLocale(h,S,r&&r.locales,r&&r.domainLocales);P.href=T||i.addBasePath(i.addLocale(h,S,r&&r.defaultLocale))}return o.default.cloneElement(t,P)};t.default=f},639:function(e,t,n){"use strict";var a=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=r.useRef(),l=r.useState(!1),c=a(l,2),f=c[0],d=c[1],h=r.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,o=a.observer,i=a.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),u.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return r.useEffect((function(){if(!i&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[h,f]};var r=n(7294),o=n(6286),i="undefined"!==typeof IntersectionObserver;var u=new Map},1664:function(e,t,n){e.exports=n(7942)}}]);