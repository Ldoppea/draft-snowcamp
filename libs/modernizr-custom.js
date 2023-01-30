!function(e,t,n,r){function o(e,t){return typeof e===t}function i(e){var t=C.className,n=y._config.classPrefix||"";if(b&&(t=t.baseVal),y._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}y._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),b?C.className.baseVal=t:C.className=t)}function a(e,t){if("object"==typeof e)for(var n in e)E(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=y[r[0]];if(2===r.length&&(o=o[r[1]]),void 0!==o)return y;t="function"==typeof t?t():t,1===r.length?y[r[0]]=t:(!y[r[0]]||y[r[0]]instanceof Boolean||(y[r[0]]=new Boolean(y[r[0]])),y[r[0]][r[1]]=t),i([(t&&!1!==t?"":"no-")+r.join("-")]),y._trigger(e,t)}return y}function l(e,t){return!!~(""+e).indexOf(t)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function c(){var e=n.body;return e||(e=s(b?"svg":"body"),e.fake=!0),e}function u(e,t,r,o){var i,a,l,u,f="modernizr",d=s("div"),p=c();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),a=t(d,e),p.fake&&p.parentNode?(p.parentNode.removeChild(p),C.style.overflow=u,C.offsetHeight):d.parentNode.removeChild(d),!!a}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(e,n,r){var o;if("getComputedStyle"in t){o=getComputedStyle.call(t,e,n);var i=t.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&e.currentStyle&&e.currentStyle[r];return o}function p(e,n){var o=e.length;if("CSS"in t&&"supports"in t.CSS){for(;o--;)if(t.CSS.supports(f(e[o]),n))return!0;return!1}if("CSSSupportsRule"in t){for(var i=[];o--;)i.push("("+f(e[o])+":"+n+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"===d(e,null,"position")})}return r}function m(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function h(e,t,n,i){function a(){u&&(delete _.style,delete _.modElem)}if(i=!o(i,"undefined")&&i,!o(n,"undefined")){var c=p(e,n);if(!o(c,"undefined"))return c}for(var u,f,d,h,v,g=["modernizr","tspan","samp"];!_.style&&g.length;)u=!0,_.modElem=s(g.shift()),_.style=_.modElem.style;for(d=e.length,f=0;f<d;f++)if(h=e[f],v=_.style[h],l(h,"-")&&(h=m(h)),_.style[h]!==r){if(i||o(n,"undefined"))return a(),"pfx"!==t||h;try{_.style[h]=n}catch(e){}if(_.style[h]!==v)return a(),"pfx"!==t||h}return a(),!1}var v=[],g={_version:"3.12.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){v.push({name:e,fn:t,options:n})},addAsyncTest:function(e){v.push({name:null,fn:e})}},y=function(){};y.prototype=g,y=new y;var E,S=[],C=n.documentElement,b="svg"===C.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;E=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),g._l={},g.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),y.hasOwnProperty(e)&&setTimeout(function(){y._trigger(e,y[e])},0)},g._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},y._q.push(function(){g.addTest=a});b||function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=w.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=w.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),w.elements=n+" "+e,c(t)}function i(e){var t=b[e[S]];return t||(t={},C++,e[S]=C,b[C]=t),t}function a(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():E.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||y.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function l(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,l=r(),s=l.length;a<s;a++)o.createElement(l[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return w.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(w,t.frag)}function c(e){e||(e=t);var r=i(e);return!w.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||s(e,r),e}function u(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(f(t)));return a}function f(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(N+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+N+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,a=i(e),l=e.namespaces,s=e.parentWindow;return!T||e.printShived?e:(void 0===l[N]&&l.add(N),s.attachEvent("onbeforeprint",function(){t();for(var i,a,l,s=e.styleSheets,c=[],f=s.length,p=Array(f);f--;)p[f]=s[f];for(;l=p.pop();)if(!l.disabled&&_.test(l.media)){try{i=l.imports,a=i.length}catch(e){a=0}for(f=0;f<a;f++)p.push(i[f]);try{c.push(l.cssText)}catch(e){}}c=d(c.reverse().join("")),o=u(e),r=n(e,c)}),s.attachEvent("onafterprint",function(){p(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,v,g=e.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,E=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,S="_html5shiv",C=0,b={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){h=!0,v=!0}}();var w={elements:g.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==g.shivCSS,supportsUnknownElements:v,shivMethods:!1!==g.shivMethods,type:"default",shivDocument:c,createElement:a,createDocumentFragment:l,addElements:o};e.html5=w,c(t);var _=/^$|\b(?:all|print)\b/,N="html5shiv",T=!v&&function(){var n=t.documentElement;return!(void 0===t.namespaces||void 0===t.parentWindow||void 0===n.applyElement||void 0===n.removeNode||void 0===e.attachEvent)}();w.type+=" print",w.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=w)}(void 0!==t?t:this,n);var w={elem:s("modernizr")};y._q.push(function(){delete w.elem});var _={style:w.elem.style};y._q.unshift(function(){delete _.style});g.testProp=function(e,t,n){return h([e],r,t,n)};!function(){var e,t,n,r,i,a,l;for(var s in v)if(v.hasOwnProperty(s)){if(e=[],t=v[s],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],l=a.split("."),1===l.length?y[l[0]]=r:(y[l[0]]&&(!y[l[0]]||y[l[0]]instanceof Boolean)||(y[l[0]]=new Boolean(y[l[0]])),y[l[0]][l[1]]=r),S.push((r?"":"no-")+l.join("-"))}}(),i(S),delete g.addTest,delete g.addAsyncTest;for(var N=0;N<y._q.length;N++)y._q[N]();e.Modernizr=y}(window,window,document);