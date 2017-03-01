!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={log:console.log,debug:console.debug,info:console.info,warn:console.warn,error:console.error,group:console.group,groupCollapsed:console.groupCollapsed,groupEnd:console.groupEnd,assert:console.assert,count:console.count,clear:console.clear,dir:console.dir,dirxml:console.dirxml,profile:console.profile,profileEnd:console.profileEnd,time:console.time,timeEnd:console.timeEnd,timeStamp:console.timeStamp,trace:console.trace};e.default=n},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function a(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];a.print.apply(a,["log"].concat(e))}Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),l=n(i),u=r(2),s=n(u),c=r(3),f=n(c),p=r(4);Object.assign(a,{init:function(){this.configure(),this.previousNamespace=new f.default,this.currentNamespace=new f.default,this.clojureNamespace=new f.default},configure:function(){function t(t,e){return c.previousNamespace.close(),c.previousNamespace=new f.default,l.default[t].apply(l.default,o(e))}var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.enabled,n=void 0===r||r,a=e.enableFormatting,i=void 0===a||a,u=e.setupConsoleHooks,s=void 0===u||u;Object.assign(this,{enabled:n,enableFormatting:i,setupConsoleHooks:s,formattableMethods:["log","info","debug","warn","error","focus"]});var c=this;return this.setupConsoleHooks&&(console.log=function(){t("log",arguments)},console.debug=function(){t("debug",arguments)},console.info=function(){t("info",arguments)},console.warn=function(){t("warn",arguments)},console.error=function(){t("error",arguments)},console.assert=function(){t("assert",arguments)},console.count=function(){t("count",arguments)},console.dir=function(){t("dir",arguments)},console.dirxml=function(){t("dirxml",arguments)},console.group=function(){t("group",arguments)},console.groupCollapsed=function(){t("groupCollapsed",arguments)},console.groupEnd=function(){t("groupEnd",arguments)},console.profile=function(){t("profile",arguments)},console.profileEnd=function(){t("profileEnd",arguments)},console.time=function(){t("time",arguments)},console.timeEnd=function(){t("timeEnd",arguments)},console.timeStamp=function(){t("timeStamp",arguments)},console.trace=function(){t("trace",arguments)},console.clear=function(){c.previousNamespace=new f.default,l.default.clear()}),this},namespace:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=e.pop();if("function"==typeof n){if(this._isEnabled()){var a=this.clojureNamespace;this.clojureNamespace=new(Function.prototype.bind.apply(f.default,[null].concat(o(a.stack),o(e))))}var i=n();return this._isEnabled()&&(this.previousNamespace.transitionInto(a),this.clojureNamespace=a),i}return this._isEnabled()&&(this.currentNamespace=new(Function.prototype.bind.apply(f.default,[null].concat(o(this.currentNamespace.stack),o(e),[n])))),this},log:function(){this.print.apply(this,["log"].concat(Array.prototype.slice.call(arguments)))},debug:function(){this.print.apply(this,["debug"].concat(Array.prototype.slice.call(arguments)))},info:function(){this.print.apply(this,["info"].concat(Array.prototype.slice.call(arguments)))},warn:function(){this.print.apply(this,["warn"].concat(Array.prototype.slice.call(arguments)))},error:function(){this.print.apply(this,["error"].concat(Array.prototype.slice.call(arguments)))},assert:function(){this.print.apply(this,["assert"].concat(Array.prototype.slice.call(arguments)))},count:function(t){this.print("count",t)},dir:function(t){this.print("dir",t)},dirxml:function(t){this.print("dirxml",t)},profile:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=e.pop();if("function"==typeof n){this._isEnabled()&&l.default.profile(e[0]);var o=n();return this._isEnabled()&&this.profileEnd(),o}this._isEnabled()&&l.default.profile(e[0])},profileEnd:function(){this._isEnabled()&&l.default.profileEnd()},time:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=e.pop();if("function"==typeof n){this._isEnabled()&&l.default.time(e[0]);var o=n();return this._isEnabled()&&this.timeEnd(e[0]),o}this._isEnabled()&&l.default.time(e[0])},timeEnd:function(t){this._isEnabled()&&l.default.timeEnd(t)},timeStamp:function(t){this._isEnabled()&&l.default.timeStamp(t)},trace:function(t){this.print("trace",t)},group:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=e.pop();if("function"==typeof n){this._isEnabled()&&l.default.group.apply(l.default,o(e));var a=n();return this._isEnabled()&&this.groupEnd(),a}this._isEnabled()&&l.default.group.apply(l.default,o(e).concat([n]))},groupCollapsed:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=e.pop();if("function"==typeof n){this._isEnabled()&&l.default.groupCollapsed.apply(l.default,o(e));var a=n();return this._isEnabled()&&this.groupEnd(),a}this._isEnabled()&&l.default.groupCollapsed.apply(l.default,o(e).concat([n]))},groupEnd:function(){this._isEnabled()&&l.default.groupEnd()},print:function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(this._isEnabled()){this.formattableMethods.indexOf(t)>-1&&this.enableFormatting&&(r=s.default.format(r));var a=this.clojureNamespace.stack.concat(this.currentNamespace.stack);(0,p.compareArrays)(this.previousNamespace.stack,a)?l.default[t].apply(l.default,o(r)):(this.previousNamespace.transitionInto(this.clojureNamespace,this.currentNamespace),l.default[t].apply(l.default,o(r))),this.currentNamespace=new f.default}},enable:function(){localStorage&&localStorage.setItem("logalizeEnabled","true")},disable:function(){localStorage&&localStorage.setItem("logalizeEnabled","false")},_isEnabled:function(){return localStorage&&localStorage.logalizeEnabled?"false"!==localStorage.logalizeEnabled:this.enabled}}),e.default=a},function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var o={format:function(t){var e,r,o=[],a=[],i=0,l=!0,u=!1,s=void 0;try{for(var c,f=t[Symbol.iterator]();!(l=(c=f.next()).done);l=!0){var p=c.value;if(p=this.formatObject(p),void 0===p||!p[1].length)break;o.push(p[0]),a.push.apply(a,n(p[1])),i+=1}}catch(t){u=!0,s=t}finally{try{!l&&f.return&&f.return()}finally{if(u)throw s}}if(t.splice(0,i),r=[],o.length){var d;r.push(o.join(" ")),(d=r).push.apply(d,a)}return(e=r).push.apply(e,n(t)),r},formatObject:function(t){if("string"==typeof t)return this.formatString(t)},formatString:function(t){for(var e,r=[];this.canFormat(t);){var n=this.getRelevantMatch(t);e="string"==typeof n.format.classes?n.format.classes:n.format.classes(n.match),t=t.replace(n.format.regex,function(t,e){return"%c"+e+"%c"}),r.push(this.computeStyle(e)),r.push(this.computeStyle("default"))}return[t,r]},canFormat:function(t){var e=!0,r=!1,n=void 0;try{for(var o,a=this.formats[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){if(o.value.regex.test(t))return!0}}catch(t){r=!0,n=t}finally{try{!e&&a.return&&a.return()}finally{if(r)throw n}}return!1},getRelevantMatch:function(t){var e=[],r=!0,n=!1,o=void 0;try{for(var a,i=this.formats[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var l=a.value;l.regex.test(t)&&e.push({match:t.match(l.regex),format:l})}}catch(t){n=!0,o=t}finally{try{!r&&i.return&&i.return()}finally{if(n)throw o}}return e.sort(function(t,e){return t.match.index-e.match.index})[0]},computeStyle:function(t){var e=document.createElement("div");e.id="logalize",e.className=t,e.style="display: none;",document.getElementsByTagName("body")[0].appendChild(e);var r=getComputedStyle(e),n=[],o=!0,a=!1,i=void 0;try{for(var l,u=this.supportedStyles[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var s=l.value;n.push(s+":"+r.getPropertyValue(s))}}catch(t){a=!0,i=t}finally{try{!o&&u.return&&u.return()}finally{if(a)throw i}}return n.join(";")},supportedStyles:["margin","color","background-color","border-radius","padding","font-weight","font-style","text-decoration"],formats:[{regex:/\*\*([^\*]+)\*\*/,classes:"bold"},{regex:/\*([^\*]+)\*/,classes:"italic"},{regex:/~([^~]+)~/,classes:"strikethrough"},{regex:/_([^_]+)_/,classes:"underline"},{regex:/\[([^\[\]]+)\](\.[\.\w]+)/,classes:function(t){return t[2].split(".").join(" ")}}]};e.default=o},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=t[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw a}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(0),s=n(u),c=function(){function t(){a(this,t);for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];this.stack=r||[]}return l(t,[{key:"print",value:function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];s.default[t].apply(s.default,r)}},{key:"transitionInto",value:function(){for(var t=[],e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=!0,l=!1,u=void 0;try{for(var c,f=r[Symbol.iterator]();!(a=(c=f.next()).done);a=!0){var p=c.value;t.push.apply(t,o(p.stack))}}catch(t){l=!0,u=t}finally{try{!a&&f.return&&f.return()}finally{if(l)throw u}}var d=0,h=!0,y=!1,v=void 0;try{for(var m,g=this.stack.entries()[Symbol.iterator]();!(h=(m=g.next()).done);h=!0){var b=m.value,E=i(b,2),_=E[0];E[1]===t[_]&&(d+=1)}}catch(t){y=!0,v=t}finally{try{!h&&g.return&&g.return()}finally{if(y)throw v}}for(var w=this.stack.length-d,A=0;A<w;A++)s.default.groupEnd();var x=t.slice(d),S=!0,j=!1,k=void 0;try{for(var N,O=x[Symbol.iterator]();!(S=(N=O.next()).done);S=!0){var C=N.value;s.default.group(C)}}catch(t){j=!0,k=t}finally{try{!S&&O.return&&O.return()}finally{if(j)throw k}}this.stack=t}},{key:"close",value:function(){for(var t in this.stack)s.default.groupEnd()}}]),t}();e.default=c},function(t,e,r){"use strict";function n(t,e){if(t.length!==e.length)return!1;var r=!0,a=!1,i=void 0;try{for(var l,u=t.entries()[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var s=l.value,c=o(s,2),f=c[0],p=c[1];if(p instanceof Array&&e[f]instanceof Array){if(!n(p,e[f]))return!1}else if(p!=e[f])return!1}}catch(t){a=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return!0}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=t[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw a}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.compareArrays=n},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(1),a=n(o);window.logalize=a.default,window.logalize.init()}]);