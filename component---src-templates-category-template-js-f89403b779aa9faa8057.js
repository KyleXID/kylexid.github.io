(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"categoryQuery",function(){return p});var a=n(11),o=n(1),i=n.n(o),r=n(0),c=n.n(r),s=n(308),l=n(157),u=n(312),d=n(315),f=n(434),m=function(e){var t=e.pageContext.category,n=e.data,o=n.allMarkdownRemark,i=o.totalCount,r=o.edges,m=n.site.siteMetadata.facebook;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.ThemeContext.Consumer,null,function(e){return c.a.createElement(u.a,{theme:e},c.a.createElement("header",null,c.a.createElement(d.a,{theme:e},c.a.createElement("span",null,"Posts in category")," ",c.a.createElement(a.i,null),t),c.a.createElement("p",{className:"meta"},"There ",i>1?"are":"is"," ",c.a.createElement("strong",null,i)," post",i>1?"s":""," ","in the category."),c.a.createElement(f.a,{edges:r,theme:e})))}),c.a.createElement(s.a,{facebook:m}))};m.propTypes={data:i.a.object.isRequired,pageContext:i.a.object.isRequired},t.default=m;var p="1683565267"},308:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(1),r=n.n(i),c=n(325),s=n.n(c),l=n(28),u=n.n(l),d=function(e){var t=e.data,n=e.facebook,a=((t||{}).frontmatter||{}).title,i=((t||{}).frontmatter||{}).description,r=((t||{}).frontmatter||{}).cover,c=((t||{}).fields||{}).slug,l=a?a+" - "+u.a.shortSiteTitle:u.a.siteTitle,d=i||u.a.siteDescription,f=r||u.a.siteImage,m=u.a.siteUrl+u.a.pathPrefix+c;return o.a.createElement(s.a,{htmlAttributes:{lang:u.a.siteLanguage,prefix:"og: http://ogp.me/ns#"}},o.a.createElement("title",null,l),o.a.createElement("meta",{name:"description",content:d}),o.a.createElement("meta",{property:"og:url",content:m}),o.a.createElement("meta",{property:"og:title",content:l}),o.a.createElement("meta",{property:"og:description",content:d}),o.a.createElement("meta",{property:"og:image",content:f}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"fb:app_id",content:n.appId}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.authorTwitterAccount?u.a.authorTwitterAccount:""}))};d.propTypes={data:r.a.object,facebook:r.a.object.isRequired};var f=d;n.d(t,"a",function(){return f})},312:function(e,t,n){"use strict";var a=n(2),o=n.n(a),i=n(0),r=n.n(i),c=n(1),s=n.n(c),l=function(e){var t=e.children,n=e.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{className:o.a.dynamic([["2846578189",[n.space.inset.default,"calc("+n.space.default+") calc("+n.space.default+" * 2)",n.text.maxWidth.tablet,"calc("+n.space.default+" * 2 + 90px) 0 calc("+n.space.default+" * 2)",n.text.maxWidth.desktop]]])+" article"},t),r.a.createElement(o.a,{styleId:"2846578189",css:[".article.__jsx-style-dynamic-selector{padding:"+n.space.inset.default+";margin:0 auto;}","@media screen and (min-width:600px){.article.__jsx-style-dynamic-selector{padding:calc("+n.space.default+") calc("+n.space.default+" * 2);max-width:"+n.text.maxWidth.tablet+";}}","@media screen and (min-width:1024px){.article.__jsx-style-dynamic-selector{padding:calc("+n.space.default+" * 2 + 90px) 0 calc("+n.space.default+" * 2);max-width:"+n.text.maxWidth.desktop+";}}"],dynamic:[n.space.inset.default,"calc("+n.space.default+") calc("+n.space.default+" * 2)",n.text.maxWidth.tablet,"calc("+n.space.default+" * 2 + 90px) 0 calc("+n.space.default+" * 2)",n.text.maxWidth.desktop]}))};l.propTypes={children:s.a.node.isRequired,theme:s.a.object.isRequired};var u=l;n.d(t,"a",function(){return u})},315:function(e,t,n){"use strict";var a=n(2),o=n.n(a),i=n(0),r=n.n(i),c=n(1),s=n.n(c),l=function(e){var t=e.title,n=e.children,a=e.theme;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("h1",{className:o.a.dynamic([["1826841480",[a.font.size.xxl,a.space.stack.l,a.time.duration.long,a.font.weight.standard,a.space.stack.xs,a.color.brand.primary,"calc("+a.font.size.xl+" * 1.2)","calc("+a.font.size.xl+" * 1.4)"]]])},t):r.a.createElement("h1",{className:o.a.dynamic([["1826841480",[a.font.size.xxl,a.space.stack.l,a.time.duration.long,a.font.weight.standard,a.space.stack.xs,a.color.brand.primary,"calc("+a.font.size.xl+" * 1.2)","calc("+a.font.size.xl+" * 1.4)"]]])},n),r.a.createElement(o.a,{styleId:"1826841480",css:["h1.__jsx-style-dynamic-selector{font-size:"+a.font.size.xxl+";margin:"+a.space.stack.l+";-webkit-animation-name:headlineEntry;-webkit-animation-name:headlineEntry-__jsx-style-dynamic-selector;animation-name:headlineEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:"+a.time.duration.long+";-webkit-animation-duration:"+a.time.duration.long+";animation-duration:"+a.time.duration.long+";}","h1.__jsx-style-dynamic-selector span{font-weight:"+a.font.weight.standard+";display:block;font-size:0.5em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;margin:"+a.space.stack.xs+";}","h1.__jsx-style-dynamic-selector svg{height:0.75em;fill:"+a.color.brand.primary+";}","@-webkit-keyframes headlineEntry{from.__jsx-style-dynamic-selector{opacity:0.5;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@media screen and (min-width:600px){h1.__jsx-style-dynamic-selector{font-size:calc("+a.font.size.xl+" * 1.2);}}","@media screen and (min-width:1024px){h1.__jsx-style-dynamic-selector{font-size:calc("+a.font.size.xl+" * 1.4);}}"],dynamic:[a.font.size.xxl,a.space.stack.l,a.time.duration.long,a.font.weight.standard,a.space.stack.xs,a.color.brand.primary,"calc("+a.font.size.xl+" * 1.2)","calc("+a.font.size.xl+" * 1.4)"]}))};l.propTypes={title:s.a.string,children:s.a.node,theme:s.a.object.isRequired},t.a=l},387:function(e,t,n){e.exports=function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=n(1),r=(a(i),n(6)),c=a(r),s=n(7),l=a(s),u=n(8),d=a(u),f=n(9),m=a(f),p=n(10),b=a(p),y=n(11),v=a(y),g=n(14),h=a(g),w=[],x=!1,k={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(x=!0),x)return w=(0,v.default)(w,k),(0,b.default)(w,k.once),w},E=function(){w=(0,h.default)(),j()};e.exports={init:function(e){k=o(k,e),w=(0,h.default)();var t=document.all&&!window.atob;return function(e){return!0===e||"mobile"===e&&m.default.mobile()||"phone"===e&&m.default.phone()||"tablet"===e&&m.default.tablet()||"function"==typeof e&&!0===e()}(k.disable)||t?void w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}):(k.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),k.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",k.easing),document.querySelector("body").setAttribute("data-aos-duration",k.duration),document.querySelector("body").setAttribute("data-aos-delay",k.delay),"DOMContentLoaded"===k.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===k.startEvent?window.addEventListener(k.startEvent,function(){j(!0)}):document.addEventListener(k.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,l.default)(j,k.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(j,k.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,b.default)(w,k.once)},k.throttleDelay)),k.disableMutationObserver||d.default.ready("[data-aos]",E),w)},refresh:j,refreshHard:E}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=d,a=f;return d=f=void 0,v=t,p=e.apply(a,n)}function r(e){var n=e-y,a=e-v;return void 0===y||n>=t||n<0||h&&a>=m}function s(){var e=k();return r(e)?l(e):void(b=setTimeout(s,function(e){var n=e-v,a=t-(e-y);return h?x(a,m-n):a}(e)))}function l(e){return b=void 0,j&&d?o(e):(d=f=void 0,p)}function u(){var e=k(),n=r(e);if(d=arguments,f=this,y=e,n){if(void 0===b)return function(e){return v=e,b=setTimeout(s,t),g?o(e):p}(y);if(h)return b=setTimeout(s,t),o(y)}return void 0===b&&(b=setTimeout(s,t)),p}var d,f,m,p,b,y,v=0,g=!1,h=!1,j=!0;if("function"!=typeof e)throw new TypeError(c);return t=i(t)||0,a(n)&&(g=!!n.leading,m=(h="maxWait"in n)?w(i(n.maxWait)||0,t):m,j="trailing"in n?!!n.trailing:j),u.cancel=function(){void 0!==b&&clearTimeout(b),v=0,d=y=f=b=void 0},u.flush=function(){return void 0===b?p:l(k())},u}function a(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function o(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":r(e))}(e)&&h.call(e)==l}function i(e){if("number"==typeof e)return e;if(o(e))return s;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=f.test(e);return n||m.test(e)?p(e.slice(2),n?2:8):d.test(e)?s:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,l="[object Symbol]",u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,p=parseInt,b="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,v=b||y||Function("return this")(),g=Object.prototype,h=g.toString,w=Math.max,x=Math.min,k=function(){return v.Date.now()};e.exports=function(e,t,o){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(c);return a(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),n(e,t,{leading:i,maxWait:t,trailing:r})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function a(e){return"symbol"==(void 0===e?"undefined":i(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":i(e))}(e)&&g.call(e)==s}function o(e){if("number"==typeof e)return e;if(a(e))return c;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var o=d.test(e);return o||f.test(e)?m(e.slice(2),o?2:8):u.test(e)?c:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="Expected a function",c=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,m=parseInt,p="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,y=p||b||Function("return this")(),v=Object.prototype,g=v.toString,h=Math.max,w=Math.min,x=function(){return y.Date.now()};e.exports=function(e,t,a){function i(t){var n=d,a=f;return d=f=void 0,v=t,p=e.apply(a,n)}function c(e){var n=e-y,a=e-v;return void 0===y||n>=t||n<0||k&&a>=m}function s(){var e=x();return c(e)?l(e):void(b=setTimeout(s,function(e){var n=e-v,a=t-(e-y);return k?w(a,m-n):a}(e)))}function l(e){return b=void 0,j&&d?i(e):(d=f=void 0,p)}function u(){var e=x(),n=c(e);if(d=arguments,f=this,y=e,n){if(void 0===b)return function(e){return v=e,b=setTimeout(s,t),g?i(e):p}(y);if(k)return b=setTimeout(s,t),i(y)}return void 0===b&&(b=setTimeout(s,t)),p}var d,f,m,p,b,y,v=0,g=!1,k=!1,j=!0;if("function"!=typeof e)throw new TypeError(r);return t=o(t)||0,n(a)&&(g=!!a.leading,m=(k="maxWait"in a)?h(o(a.maxWait)||0,t):m,j="trailing"in a?!!a.trailing:j),u.cancel=function(){void 0!==b&&clearTimeout(b),v=0,d=y=f=b=void 0},u.flush=function(){return void 0===b?p:l(x())},u}}).call(t,function(){return this}())},function(e,t){"use strict";function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),a=t.concat(n);if(function e(t){var n=void 0,a=void 0;for(n=0;n<t.length;n+=1){if((a=t[n]).dataset&&a.dataset.aos)return!0;if(a.children&&e(a.children))return!0}return!1}(a))return o()})}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){};t.default={isSupported:function(){return!!n()},ready:function(e,t){var i=window.document,r=new(n())(a);o=t,r.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"phone",value:function(){var e=n();return!(!o.test(e)&&!i.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!r.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=window.pageYOffset,a=window.innerHeight;e.forEach(function(e,o){!function(e,t,n){var a=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==a&&("false"===a||!n&&"true"!==a)&&e.node.classList.remove("aos-animate")}(e,a+n,t)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)}),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e,t){var n=0,a=0,i=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(a=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),n=(0,o.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return r.anchorPlacement||r.offset||isNaN(t)||(a=t),n+a}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},434:function(e,t,n){"use strict";n(68);var a=n(2),o=n.n(a),i=n(0),r=n.n(i),c=n(1),s=n.n(c),l=n(16),u=n(387),d=function(e){var t=e.edges,n=e.theme;return u.AOS||u.AOS.init(),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:o.a.dynamic([["132031231",[n.space.stack.m,n.space.m,n.space.xs,n.font.size.s,n.font.lineHeight.l]]])},t.map(function(e){var t=e.node,a=t.frontmatter.title,i=t.fields.slug;return r.a.createElement("li",{"data-aos":"fade-up","data-aos-offset":"200",key:i,className:o.a.dynamic([["132031231",[n.space.stack.m,n.space.m,n.space.xs,n.font.size.s,n.font.lineHeight.l]]])},r.a.createElement(l.Link,{to:i},a))})),r.a.createElement(o.a,{styleId:"132031231",css:["ul.__jsx-style-dynamic-selector{margin:"+n.space.stack.m+";padding:"+n.space.m+";list-style:circle;}","li.__jsx-style-dynamic-selector{padding:"+n.space.xs+" 0;font-size:"+n.font.size.s+";line-height:"+n.font.lineHeight.l+";}"],dynamic:[n.space.stack.m,n.space.m,n.space.xs,n.font.size.s,n.font.lineHeight.l]}))};d.propTypes={edges:s.a.array.isRequired,theme:s.a.object.isRequired};var f=d;n.d(t,"a",function(){return f})}}]);
//# sourceMappingURL=component---src-templates-category-template-js-f89403b779aa9faa8057.js.map