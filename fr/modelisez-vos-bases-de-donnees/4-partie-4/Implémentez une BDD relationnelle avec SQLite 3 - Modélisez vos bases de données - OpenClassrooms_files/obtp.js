try{!function(n,o,t,a){"use strict";function e(){}function i(e,n,t){var r=e[n];e[n]=function(){var e=r.apply(this,arguments);return t.apply(this,arguments),e}}function c(e){return"[object Array]"===Object.prototype.toString.call(e)}function r(e){if(e)return c(e)?e:e.replace(" ","").split(",")}function s(){n.obApi.dispatch.apply(n.obApi,arguments)}var u="//tr.outbrain.com",d="PAGE_VIEW",p="product";s.version=n.obApi.version,s.loaded=n.obApi.loaded,s.marketerId=r(n.obApi.marketerId),s.queue=n.obApi.queue;var f=n.obApi=s;function m(e){var n,t,r,o=(l().split("?")[1]||"").split(/&/);for(n=0;n<o.length;n++)if(t=o[n],r=e,0===t.indexOf(r+"="))return o[n].split("=")[1].split("#")[0];return""}function l(){var n="";try{n=window.top.location.href||document.location.href}catch(e){n=document.location.href}return n||""}f.obtpVersion="1.8.2",s.addMarketer=function(e){s.marketerId=s.marketerId.concat(r(e))};var v,h,w,_,g,b,C,y,I,k,E={get:function(e){if(!document.cookie)return"";var n="";try{n=decodeURIComponent(document.cookie)}catch(e){}var t=n.indexOf(e+"=");if(t<0)return"";var r=t+(e+"=").length,o=n.indexOf(";",r),a=0<o?o:document.cookie.length;return n.substring(r,a)},set:function(e,n,t,r){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3);var a="expires="+o.toUTCString(),i=encodeURIComponent(e)+"="+encodeURIComponent(n)+"; "+a+"; path=/;";r&&(i+="domain="+r+";"),document.cookie=i}},A=(_=w=!(h=[]),g=function(e,n){e.name;if(e.contentType===p&&n){var t=e.content&&e.content.id;t&&C(t,e.marketerId)}b.apply(null,arguments)},b=function(e,n){var t=k(e);delete t.content,delete t.contentType,t.optOut=n?"false":"true";var r=n?function(){var e,n=m("ob_cvr_pixel_domain"),t=m("dicbo");e=t?(E.set("outbrain_click_id",t,1,n),t):E.get("outbrain_click_id");return e}():"";r&&(t.ob_click_id=r),(new o).src=u+"/unifiedPixel?"+y(t)+"&bust="+R()+"&referrer="+encodeURIComponent(document.referrer)},C=function(e,n){(new o).src="//dr.outbrain.com/pixel?mid="+n+"&pid="+e+"&bust="+R()},y=function(e){var n=["dl","name"],t=[];for(var r in e)e.hasOwnProperty(r)&&(-1<n.indexOf(r)?t.push(r+"="+encodeURIComponent(e[r])):t.push(r+"="+e[r]));return t.join("&")},I=function(e){for(var n=[],t={},r=0;r<e.length;r++)t[e[r]]||n.push(e[r]),t[e[r]]=!0;return n},k=function(e){var n={};for(var t in e)n[t]=e[t];return n},function(){var e=arguments;if(!e[1])throw new Error("can't dispatch pixel, event name is missing");var n=e[0],t=e[2]&&"object"==typeof e[2]?e[2]:{};!1===c(f.marketerId)&&(f.marketerId=[f.marketerId]);var r=I(f.marketerId),o={};for(var a in t)o[a]=t[a];switch(o.marketerId=r.toString(),o.obApiVersion=f.version,o.obtpVersion=f.obtpVersion,o.name=e[1].replace(/ /g,"-"),o.dl=l(),n){case"track":j(o,n),function(e){if(_)return g(e,v);h.push(e),w||(w=!0,V.checkHasConsent(function(e){for(_=!0,v=!!e;0<h.length;)g(h.shift(),v)}))}(o);break;default:U(U.LOG_TYPES.ERROR,"Command type "+n+" is not recognized",o.name)}});function R(){return Math.random().toString().replace(".","")}obApi.dispatch=A;var N={hasConsent:function(){return window.__uspapi&&"function"==typeof window.__uspapi},handleConsent:function(t){window.__uspapi("getUSPData",1,function(e,n){n&&"1YYN"!==e.uspString.toUpperCase()&&"1NYN"!==e.uspString.toUpperCase()||!e.uspString?t(!0):t(!1)})}},O={hasConsent:function(){return!!window.__cmp||!!S()},handleConsent:function(e){function r(){window.removeEventListener?window.removeEventListener("message",n,!1):window.detachEvent&&window.detachEvent("message",n,!1),e.apply(e,arguments)}var n=function(e){var n;try{n=e&&"string"==typeof e.data?JSON.parse(e.data):e.data}catch(e){r(!0)}n&&n.__cmpReturn&&o(r,n.__cmpReturn.returnValue,n.__cmpReturn.success)},o=function(e,n,t){if((!t||!n||!n.vendorConsents||void 0===n.vendorConsents[164]||!0===n.vendorConsents[164])&&function(e){if(!e)return 1;var n=!0;for(var t in e)if(e.hasOwnProperty(t)&&(n=!1,e[t]))return 1;return n}(n.purposeConsents))return e(!0);e(!1)};!function(t){if("function"==typeof window.__cmp)window.__cmp("getVendorConsents",[164],function(e,n){o(t,e,n)});else{var e=S();if(window.addEventListener?window.addEventListener("message",n,!1):window.attachEvent&&window.attachEvent("message",n,!1),!e)return r({msg:"CMP not found"},!1);e.postMessage({__cmpCall:{command:"getVendorConsents",parameter:[164],callId:"obamplify"}},"*")}}(r)}};function S(){var e=window;try{for(;e&&!e.frames.__cmpLocator;){if(e===window.top)return;e=e.parent}return e}catch(e){}}var L={hasConsent:function(){return!!window.__tcfapi||!!P()},handleConsent:function(t){function r(e,n){o(t,e,n)}function o(e,n,t){t&&"tcloaded"===n.eventStatus?(n&&n.vendor&&n.vendor.consents&&void 0!==n.vendor.consents[164]&&!0!==n.vendor.consents[164]||!n||!function(e){if(!e||!e.consents)return 1;var n=e.consents,t=!0;return[1,3,4].forEach(function(e){n.hasOwnProperty(e)&&!1===n[e]&&(t=!1)}),t}(n.purpose)?e(!1):e(!0),__tcfapi("removeEventListener",2,r)):e(!0)}function e(e){e.data.__tcfapiReturn&&"obamplify"===e.data.__tcfapiReturn.callId&&o(t,e.data.__tcfapiReturn.returnValue,!0)}if(window.__tcfapi)window.__tcfapi("addEventListener",2,r),__tcfapi("getTCData",2,r,[164]);else{var n=P();window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent&&window.attachEvent("message",e,!1),n.postMessage({__tcfapiCall:{command:"getTCData",parameter:[164],version:2,callId:"obamplify"}},"*")}}};function P(){var e=window;try{for(;e&&!e.frames.__tcfapiLocator;){if(e===window.top)return;e=e.parent}return e}catch(e){}}var G,T,V=(G=0,{checkHasConsent:function(e){function n(){clearTimeout(G),e.apply(e,arguments)}try{G=setTimeout(function(){e(!0)},500),O.hasConsent()?O.handleConsent(n):L.hasConsent()?L.handleConsent(n):N.hasConsent()?N.handleConsent(n):n(!0)}catch(e){throw n(!0),e}}}),U=(function(){var r;if(t.pushState&&t.replaceState&&n.addEventListener){var e=function(e,n,t){a.href!==r&&t&&(r=a.href,obApi("track",d))};i(t,"pushState",e),i(t,"replaceState",e),n.addEventListener("popstate",e,!1)}}(),T=n.postMessage||e,x.LOG_TYPES={LOG:"log",WARNING:"warning",INFO:"info",ERROR:"error"},x);function x(e,n,t){T({action:"log",type:e,message:n,name:t?t.replace(/ /g,"-"):""},"*")}var Y,D,W,M,j=(Y={USD:1,CAD:1,EUR:1,GBP:1,ILS:1,AUD:1,MXN:1,BRL:1,SEK:1,SGD:1,RUB:1,NZD:1,INR:1,JPY:1,PHP:1,CHF:1},D=new RegExp("^[A-Za-z0-9]+[A-Za-z0-9-]*$"),W=new RegExp("^[0-9]+[.0-9]*$"),function(e,n){var t=e.contentType===p,r=e.content&&e.content.id;return!t||r&&("number"==typeof r||"string"==typeof r)?e.orderValue&&!e.currency?(U(U.LOG_TYPES.WARNING,"Order value reported but no currency is declared",e.name),!1):e.currency&&!Y.hasOwnProperty(e.currency)?(U(U.LOG_TYPES.WARNING,"Currency not recognized",e.name),!1):e.orderValue&&!W.test(e.orderValue)?(U(U.LOG_TYPES.WARNING,"Order value can only be a positive number",e.name),!1):e.name===d||D.test(e.name)?!(e.name!==d&&100<e.name.length&&(U(U.LOG_TYPES.WARNING,"Event name length cannot exceed 100 characters",e.name),1)):(U(U.LOG_TYPES.WARNING,"Event Name invalid",e.name),!1):(U(U.LOG_TYPES.WARNING,"content id is not string or number",e.name),!1)}),q="outbrain_cid_fetch";(function(){for(var e=!1;f.queue.length;){var n=f.queue.shift();if(n[1]===d&&!n[2]){if(e)continue;e=!0}f.dispatch.apply(f,n)}})(),E.get("outbrain_click_id")||E.get(q)||m("dicbo")||(obApi.setCachedClickId=((M=document.createElement("script")).src=u+"/cachedClickId?marketerId="+(c(obApi.marketerId)?obApi.marketerId.join(","):obApi.marketerId),document.body.appendChild(M),function(e){if("optout"!==e)if("NoClickId"===e)E.set(q,!0,5/1440);else{var n=m("ob_cvr_pixel_domain");E.set("outbrain_click_id",e,1,n)}}))}(window,(document,Image),history,location)}catch(e){(new Image).src="//tr.outbrain.com/log?obApiVersion="+obApi.version+"&obtpVersion="+obApi.obtpVersion+"&msg="+encodeURIComponent('{"error":"LOAD", "obApiVersion": '+obApi.version+', "marketerID": '+obApi.marketerId+', "referrer": '+document.referrer+', "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","message":"'+e.message+'"}}')}