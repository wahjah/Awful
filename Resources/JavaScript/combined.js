/* Zepto v1.1.3-5-g579c097 - zepto event touch - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):T[N.call(t)]||"object"}function $(t){return"function"==L(t)}function D(t){return null!=t&&t==t.window}function Z(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function _(t){return"object"==L(t)}function j(t){return _(t)&&!D(t)&&Object.getPrototypeOf(t)==Object.prototype}function k(t){return"number"==typeof t.length}function z(t){return s.call(t,function(t){return null!=t})}function R(t){return t.length>0?n.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function U(t,e){return"number"!=typeof e||c[I(t)]?e:e+"px"}function q(t){var e,n;return a[t]||(e=u.createElement(t),u.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),a[t]=n),a[t]}function F(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function Y(n,i,r){for(e in i)r&&(j(i[e])||A(i[e]))?(j(i[e])&&!j(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),Y(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function B(t,e){return null==e?n(t):n(t).filter(e)}function H(t,e,n,i){return $(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function J(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function G(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function W(t,e){e(t);for(var n in t.childNodes)W(t.childNodes[n],e)}var t,e,n,i,S,C,r=[],o=r.slice,s=r.filter,u=window.document,a={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,g=/([A-Z])/g,m=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=u.createElement("table"),w=u.createElement("tr"),b={tr:u.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:w,th:w,"*":u.createElement("div")},E=/complete|loaded|interactive/,x=/^[\w-]*$/,T={},N=T.toString,P={},O=u.createElement("div"),M={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return P.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~P.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},P.fragment=function(e,i,r){var s,a,f;return h.test(e)&&(s=n(u.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),j(r)&&(a=n(s),n.each(r,function(t,e){m.indexOf(t)>-1?a[t](e):a.attr(t,e)})),s},P.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},P.isZ=function(t){return t instanceof P.Z},P.init=function(e,i){var r;if(!e)return P.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=P.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=P.qsa(u,e)}else{if($(e))return n(u).ready(e);if(P.isZ(e))return e;if(A(e))r=z(e);else if(_(e))r=[e],e=null;else if(l.test(e))r=P.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=P.qsa(u,e)}}return P.Z(r,e)},n=function(t,e){return P.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){Y(t,n,e)}),t},P.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,u=x.test(s);return Z(t)&&u&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(u&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=function(t,e){return t!==e&&t.contains(e)},n.type=L,n.isFunction=$,n.isWindow=D,n.isArray=A,n.isPlainObject=j,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=S,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(k(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return R(i)},n.each=function(t,e){var n,i;if(k(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){T["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return E.test(u.readyState)&&u.body?t(n):u.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return $(t)?this.not(this.not(t)):n(s.call(this,function(e){return P.matches(e,t)}))},add:function(t,e){return n(C(this.concat(n(t,e))))},is:function(t){return this.length>0&&P.matches(this[0],t)},not:function(e){var i=[];if($(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):k(e)&&$(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return _(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!_(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!_(t)?t:n(t)},find:function(t){var e,i=this;return e="object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(P.qsa(this[0],t)):this.map(function(){return P.qsa(this,t)})},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:P.matches(i,t));)i=i!==e&&!Z(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!Z(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return B(e,t)},parent:function(t){return B(C(this.pluck("parentNode")),t)},children:function(t){return B(this.map(function(){return F(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return B(this.map(function(t,e){return s.call(F(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=q(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=$(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=$(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;n(this).empty().append(H(this,t,e,i))})},text:function(e){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e===t?"":""+e})},attr:function(n,i){var r;return"string"==typeof n&&i===t?0==this.length||1!==this[0].nodeType?t:"value"==n&&"INPUT"==this[0].nodeName?this.val():!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:this.each(function(t){if(1===this.nodeType)if(_(n))for(e in n)X(this,e,n[e]);else X(this,n,H(this,i,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&X(this,t)})},prop:function(e,n){return e=M[e]||e,n===t?this[0]&&this[0][e]:this.each(function(t){this[e]=H(this,n,t,this[e])})},data:function(e,n){var i=this.attr("data-"+e.replace(g,"-$1").toLowerCase(),n);return null!==i?G(i):t},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=H(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=H(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[S(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[S(e)]||o.getPropertyValue(e)}),s}}var u="";if("string"==L(t))i||0===i?u=I(t)+":"+U(t,i):this.each(function(){this.style.removeProperty(I(t))});else for(e in t)t[e]||0===t[e]?u+=I(e)+":"+U(e,t[e])+";":this.each(function(){this.style.removeProperty(I(e))});return this.each(function(){this.style.cssText+=";"+u})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(J(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=J(this),o=H(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&J(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?J(this,""):(i=J(this),H(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),void J(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=H(this,e,r,J(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||u.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?D(s)?s["inner"+i]:Z(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,H(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:P.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null,r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();W(o.insertBefore(t,u),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),P.Z.prototype=n.fn,P.uniq=C,P.deserializeValue=G,n.zepto=P,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!a&&t.e in f||!!e}function m(t){return c[t]||a&&f[t]||t}function v(e,i,r,o,u,a,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=u,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=a;var l=a||r;s.proxy=function(t){if(t=T(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(m(s.e),s.proxy,g(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(m(e.e),e.proxy,g(e,r))})})}function T(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(x,function(t,n){var r=i[t];e[t]=function(){return this[n]=w,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function N(t){var e,i={originalEvent:t};for(e in t)E.test(e)||t[e]===n||(i[e]=t[e]);return T(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},u={},a="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){if(r(e)){var i=function(){return e.apply(n,arguments)};return i._zid=l(e),i}if(o(n))return t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},b=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,x={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,u,a,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,u,e,f)}),h):(o(s)||r(a)||a===!1||(a=u,u=s,s=n),(r(u)||u===!1)&&(a=u,u=n),a===!1&&(a=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,a),a.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(N(e),{currentTarget:o,liveFired:r}),(c||a).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,a,u,s,l||c)}))},t.fn.off=function(e,i,s){var u=this;return e&&!o(e)?(t.each(e,function(t,e){u.off(t,i,e)}),u):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),u.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):T(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,u){i=N(o(e)?t.Event(e):e),i._args=n,i.target=u,t.each(h(u,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),T(n)}}(Zepto),function(t){function a(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function f(){o=null,e.last&&(e.el.trigger("longTap"),e={})}function c(){o&&clearTimeout(o),o=null}function l(){n&&clearTimeout(n),i&&clearTimeout(i),r&&clearTimeout(r),o&&clearTimeout(o),n=i=r=o=null,e={}}function h(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function p(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var n,i,r,o,u,e={},s=750;t(document).ready(function(){var d,g,y,w,m=0,v=0;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),t(document).bind("MSGestureEnd",function(t){var n=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;n&&(e.el.trigger("swipe"),e.el.trigger("swipe"+n))}).on("touchstart MSPointerDown pointerdown",function(i){(!(w=p(i,"down"))||h(i))&&(y=w?i:i.touches[0],i.touches&&1===i.touches.length&&e.x2&&(e.x2=void 0,e.y2=void 0),d=Date.now(),g=d-(e.last||d),e.el=t("tagName"in y.target?y.target:y.target.parentNode),n&&clearTimeout(n),e.x1=y.pageX,e.y1=y.pageY,g>0&&250>=g&&(e.isDoubleTap=!0),e.last=d,o=setTimeout(f,s),u&&w&&u.addPointer(i.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(w=p(t,"move"))||h(t))&&(y=w?t:t.touches[0],c(),e.x2=y.pageX,e.y2=y.pageY,m+=Math.abs(e.x1-e.x2),v+=Math.abs(e.y1-e.y2))}).on("touchend MSPointerUp pointerup",function(o){(!(w=p(o,"up"))||h(o))&&(c(),e.x2&&Math.abs(e.x1-e.x2)>30||e.y2&&Math.abs(e.y1-e.y2)>30?r=setTimeout(function(){e.el.trigger("swipe"),e.el.trigger("swipe"+a(e.x1,e.x2,e.y1,e.y2)),e={}},0):"last"in e&&(30>m&&30>v?i=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=l,e.el.trigger(i),e.isDoubleTap?(e.el&&e.el.trigger("doubleTap"),e={}):n=setTimeout(function(){n=null,e.el&&e.el.trigger("singleTap"),e={}},250)},0):e={}),m=v=0)}).on("touchcancel MSPointerCancel pointercancel",l),t(window).on("scroll",l)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto);;(function(){
var Awful = {}

Awful.posts = function(posts){
  $('#posts').empty()
  $.each(posts, function(i, post){
    render(post).appendTo('#posts')
  })
}

Awful.insertPost = function(post, i){
  if (i === 0) {
    render(post).prependTo('#posts')
  } else if (i >= $('#posts > article').length) {
    render(post).appendTo('#posts')
  } else {
    $('#posts > article').eq(i).before(render(post))
  }
}

Awful.deletePost = function(post, i){
  $('#posts > article').eq(i).remove()
}

Awful.post = function(i, post){
  $('#posts > article').eq(i).replaceWith(render(post))
}

Awful.markReadUpToPostWithID = function(postID) {
  var lastReadIndex = $('#' + postID).index();
  if (lastReadIndex == -1) return;
  $('article.post').each(function(i) {
    $(this).toggleClass('seen', i <= lastReadIndex);
  });
};

Awful.stylesheet = function(style){
  $('#awful-inline-style').text(style)
}

Awful.ad = function(ad){
  $('#ad').html(ad)
}

Awful.endMessage = function(end){
  $('#end').text(nullOrUndefined(end) ? '' : end)
}

Awful.highlightMentionUsername = function(username){
  Awful._highlightMentionUsername = username
  if (nullOrUndefined(username)) {
    $('span.mention').each(function(){
      this.parentNode.replaceChild(this.firstChild, this)
      this.parentNode.normalize()
    })
  } else {
    $('.postbody').each(function(){ highlightMentions(this) })
  }
}

Awful.showAvatars = function(on) {
  if (on) {
    $('header[data-avatar]').each(function() {
      var header = $(this);
      var img = $('<img>', {
        src: header.data('avatar'),
        alt: '',
        class: 'avatar'
      });
      img.prependTo(header);
      header.data('avatar', null);
      header.closest('article').removeClass('no-avatar');
    });
  } else {
    $('header img.avatar').each(function() {
      var img = $(this);
      img.closest('header').data('avatar', img.attr('src'));
      img.remove();
      img.closest('article').addClass('no-avatar');
    });
  }
}

Awful.loadLinkifiedImages = function() {
  $('a[data-awful="image"]').each(function() {
    var link = $(this);
    link.replaceWith($('<img>', { src: link.text(), border: 0 }));
  });
};

Awful.postWithButtonForPoint = function(x, y){
  var button = $(document.elementFromPoint(x, y)).closest('button')
  if (button.length) {
    var post = button.closest('article')
    return JSON.stringify({ rect: rectOf(button), postIndex: post.index() })
  }
}
	
Awful.postWithUserNameForPoint = function(x, y){
	var usernameHeading = $(document.elementFromPoint(x, y)).closest('h1')
	if (usernameHeading.length) {
		var post = usernameHeading.closest('article')
		return JSON.stringify({ rect: rectOf(usernameHeading), postIndex: post.index() })
	}
}

Awful.headerForPostWithID = function(postID){
  var post = $('#' + postID)
  if (post.length) {
    return JSON.stringify(rectOf(post.find('header')))
  }
}

Awful.footerForPostWithID = function(postID){
  var post = $('#' + postID)
  if (post.length) {
    return JSON.stringify(rectOf(post.find('footer')))
  }
}

Awful.actionButtonForPostWithID = function(postID){
  var post = $('#' + postID)
  if (post.length) {
    return JSON.stringify(rectOf(post.find('footer button')))
  }
}

function rectOf(el) {
  var rect = el.offset()
  rect.left -= window.pageXOffset
  rect.top -= window.pageYOffset
  return rect
}

Awful.spoiledImageInPostForPoint = function(x, y){
  var img = $(document.elementFromPoint(x, y)).closest('img')
  if (img.length) {
    var spoiler = img.closest('.bbc-spoiler')
    if (spoiler.length == 0 || spoiler.hasClass('spoiled')) {
      return JSON.stringify({ url: img.attr('src') })
    }
  }
}

Awful.spoiledLinkInPostForPoint = function(x, y){
  var a = $(document.elementFromPoint(x, y)).closest('a')
  if (a.length) {
    var spoiler = a.closest('.bbc-spoiler')
    if (spoiler.length == 0 || spoiler.hasClass('spoiled')) {
      return JSON.stringify({ rect: rectOf(a), url: a.attr('href') })
    }
  }
}

Awful.spoiledVideoInPostForPoint = function(x, y){
  var iframe = $(document.elementFromPoint(x, y)).closest('iframe')
  if (iframe.length) {
    var spoiler = iframe.closest('.bbc-spoiler')
    if (spoiler.length == 0 || spoiler.hasClass('spoiled')) {
      return JSON.stringify({ rect: rectOf(iframe), url: iframe.attr('src') })
    }
  }
}

function render(post) {
  post = $(post);
  highlightMentions(post.find('.postbody'));
  return post;
}

function nullOrUndefined(arg) {
  return arg === null || arg === undefined
}

function highlightMentions(post) {
  var username = Awful._highlightMentionUsername
  if (nullOrUndefined(username)) return
  var regex = new RegExp("\\b" + regexEscape(username) + "\\b", "i")
  eachTextNode($(post)[0], replaceAll)
  
  function eachTextNode(node, callback) {
    if (node.nodeType === Node.TEXT_NODE) callback(node)
    for (var i = 0, len = node.childNodes.length; i < len; i++) {
      eachTextNode(node.childNodes[i], callback)
    }
  }
  function replaceAll(node) {
    if ($(node.parentNode).filter('span.mention').length > 0) return
    var match = node.data.match(regex)
    if (match === null) return
    var nameNode = node.splitText(match.index)
    var rest = nameNode.splitText(username.length)
    var span = node.ownerDocument.createElement('span')
    span.className = 'mention'
    span.appendChild(nameNode.cloneNode(true))
    node.parentNode.replaceChild(span, nameNode)
    replaceAll(rest)
  }
}

function regexEscape(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

window.Awful = Awful
})()


;(function(){

$(function(){
  $('body').addClass($.os.ipad ? 'ipad' : 'iphone')
  $('#posts').on('click', 'a[data-awful="image"]', showLinkedImage)
  $('#posts').on('click', '.bbc-spoiler', toggleSpoiled)
})

function showLinkedImage(e) {
  var link = $(e.target)
  link.replaceWith($('<img border=0>').attr('src', link.text()))
  e.preventDefault()
}

function toggleSpoiled(e) {
  var target = $(e.target)
  var spoiler = target.closest('.bbc-spoiler')
  if (!spoiler.hasClass('spoiled') && target.filter('a').length) {
    e.preventDefault()
  }
  spoiler.toggleClass('spoiled')
}

})()
