var initReactXBlock8StudentView = (function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_production_min;

	function requireReact_production_min () {
		if (hasRequiredReact_production_min) return react_production_min;
		hasRequiredReact_production_min = 1;
	var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
		var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
		E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
		H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
		function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
		function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
		function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
		a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
		function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
		var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
		react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;
		react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;react_production_min.act=X;
		react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
		for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
		react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=X;react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};
		react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
		react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.3.1";
		return react_production_min;
	}

	var hasRequiredReact;

	function requireReact () {
		if (hasRequiredReact) return react.exports;
		hasRequiredReact = 1;

		{
		  react.exports = requireReact_production_min();
		}
		return react.exports;
	}

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_production_min;

	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;
	var f=requireReact(),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
		function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
		return reactJsxRuntime_production_min;
	}

	var hasRequiredJsxRuntime;

	function requireJsxRuntime () {
		if (hasRequiredJsxRuntime) return jsxRuntime.exports;
		hasRequiredJsxRuntime = 1;

		{
		  jsxRuntime.exports = requireReactJsxRuntime_production_min();
		}
		return jsxRuntime.exports;
	}

	var jsxRuntimeExports = requireJsxRuntime();

	var reactExports = requireReact();
	var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

	var client = {};

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredScheduler_production_min;

	function requireScheduler_production_min () {
		if (hasRequiredScheduler_production_min) return scheduler_production_min;
		hasRequiredScheduler_production_min = 1;
		(function (exports) {
	function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
			function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
			"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
			function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=!1;}}var N=!1,O=null,L=-1,P=5,Q=-1;
			function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a);}finally{b?S():(N=!1,O=null);}}else N=!1;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=!0,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
			exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J));};
			exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
			exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
			exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
			exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
		} (scheduler_production_min));
		return scheduler_production_min;
	}

	var hasRequiredScheduler;

	function requireScheduler () {
		if (hasRequiredScheduler) return scheduler.exports;
		hasRequiredScheduler = 1;

		{
		  scheduler.exports = requireScheduler_production_min();
		}
		return scheduler.exports;
	}

	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactDom_production_min;

	function requireReactDom_production_min () {
		if (hasRequiredReactDom_production_min) return reactDom_production_min;
		hasRequiredReactDom_production_min = 1;
	var aa=requireReact(),ca=requireScheduler();function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
		function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
		var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
		{},ma={};function oa(a){if(ja.call(ma,a))return !0;if(ja.call(la,a))return !1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return !1}function pa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
		function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1);});
		["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1);});
		["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
		sa);z[b]=new v(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1);});
		z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0);});
		function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
		var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");	var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=!1;
		function Oa(a,b){if(!a||Na)return "";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
		f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
		function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return ""}}
		function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
		b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
		function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
		case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
		function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
		function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
		null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
		function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1);}
		function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
		function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
		function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
		function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
		function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
		function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
		function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
		var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
		function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
		var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
		zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
		function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
		function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
		function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
		function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb();}}
		function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
		typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=!1;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments);}
		function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null;}else throw Error(p(198));Qb||(Qb=!0,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
		function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
		c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
		var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
		var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
		function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
		default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
		function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return -1;case 134217728:case 268435456:case 536870912:case 1073741824:return -1;default:return -1}}
		function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
		function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
		function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
		function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
		function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
		function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return !1}
		function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
		function Xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift();}return !0}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
		function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
		function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=!0;
		function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
		function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
		function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
		function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
		case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
		function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
		function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
		(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
		var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
		a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
		Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
		119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
		var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
		a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
		deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
		function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
		function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
		var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
		function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
		function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
		function Ie(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return !1}return !0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
		function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
		function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
		function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
		d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
		var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
		function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
		function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
		ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
		function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
		ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
		fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
		function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
		function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
		function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b));}}
		function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
		function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
		a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
		Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
		w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
		n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
		vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
		xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
		break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
		0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
		function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
		var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
		var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
		function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
		function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
		function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
		function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
		function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
		function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return !0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=!0;hg(a);}
		function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
		function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=!1,zg=null;
		function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
		function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
		null,!0):!1;default:return !1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a);}}else {if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
		function Gg(a){if(a!==xg)return !1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
		null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return !0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=!1;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;
		function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode;}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
		function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
		function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
		null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
		b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
		c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
		b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
		function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
		x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
		m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
		f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
		d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
		(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
		function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
		function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
		function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
		function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
		function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
		b;c.lastBaseUpdate=b;}
		function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
		next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
		h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
		function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
		function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(uh);G(uh,b);}function zh(){E(uh);E(vh);E(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c));}function Bh(a){vh.current===a&&(E(uh),E(vh));}var L=Uf(0);
		function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
		function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
		function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
		function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null;}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else {if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a;}return O}
		function Vh(a,b){return "function"===typeof b?b(a):b}
		function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
		eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
		function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
		function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
		function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a);}function ai(a,b,c){return c(function(){ei(b)&&fi(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return !0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
		function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return [b.memoizedState,a]}
		function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
		function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
		function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
		function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
		function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d);}}
		function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d));}}
		function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
		var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
		4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return [d.memoizedState,a]},useRef:function(a){var b=
		Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c();}else {c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
		f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
		useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
		N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
		var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
		yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
		function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
		function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
		function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
		"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
		function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b);};return c}
		function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
		function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return;}while(null!==a);return null}
		function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
		function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
		function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
		function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
		function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d;}else null!==
		f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
		function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b);}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
		(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
		("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
		"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
		g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
		a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1);}return jj(a,b,c,d,f,e)}
		function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo);}
		function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
		function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
		g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
		b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
		function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
		function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
		if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
		0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
		function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
		function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(L,d);if(0===(b.mode&1))b.memoizedState=
		null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
		function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
		function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
		b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
		zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
		Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
		(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
		c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
		function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
		function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
		function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
		c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
		d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
		h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
		"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
		a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
		c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
		!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
		xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
		a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1;}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
		Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
		g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
		a.sibling;}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
		b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
		function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
		null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Nj=!1;
		function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
		q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
		case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Nj;Nj=!1;return n}
		function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
		function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
		function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
		function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
		function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
		function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
		Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
		c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
		function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
		function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
		a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
		f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
		null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
		b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
		rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
		a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V=a;ik(a);}
		function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f),f=f.sibling;V=e;Jj=h;U=l;}kk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a);}}
		function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
		b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
		default:throw Error(p(163));}U||b.flags&512&&Rj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
		function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
		var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
		function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg());}
		function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
		function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
		else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
		d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
		function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
		function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return !1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return !0;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return !0}
		function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
		function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg();}}function Hj(){fj=ej.current;E(ej);}
		function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
		0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
		function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
		m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426));}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
		b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
		function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z);}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y);}function Lk(){for(;null!==Y&&!cc();)Uk(Y);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null;}
		function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d);}finally{ok.transition=e,C=d;}return null}
		function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
		var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c);dc();K=h;C=g;ok.transition=f;}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
		function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
		l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
		u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,ok.transition=b;}}return !1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b));}
		function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
		function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
		function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
		Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1;}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
		null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
		d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
		f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
		gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
		g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
		c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
		b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
		function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
		function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
		function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
		c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
		function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
		break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
		function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
		function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
		null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
		function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
		function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
		function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
		ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
		ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
		function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
		function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c);}}),il(a,1);}};
		Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
		yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Qk;Hb=Rk;
		var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
		var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
		jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
		reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
		reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Rk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
		reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
		e);return new ml(b)};reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Qk;
		reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";
		return reactDom_production_min;
	}

	var hasRequiredReactDom;

	function requireReactDom () {
		if (hasRequiredReactDom) return reactDom.exports;
		hasRequiredReactDom = 1;

		function checkDCE() {
		  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		  if (
		    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
		    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
		  ) {
		    return;
		  }
		  try {
		    // Verify that the code above has been dead code eliminated (DCE'd).
		    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		  } catch (err) {
		    // DevTools shouldn't crash React, no matter what.
		    // We should still report in case we break this code.
		    console.error(err);
		  }
		}

		{
		  // DCE check should happen before ReactDOM bundle executes so that
		  // DevTools can report bad minification during injection.
		  checkDCE();
		  reactDom.exports = requireReactDom_production_min();
		}
		return reactDom.exports;
	}

	var hasRequiredClient;

	function requireClient () {
		if (hasRequiredClient) return client;
		hasRequiredClient = 1;

		var m = requireReactDom();
		{
		  client.createRoot = m.createRoot;
		  client.hydrateRoot = m.hydrateRoot;
		}
		return client;
	}

	var clientExports = requireClient();
	var ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(clientExports);

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	function __spreadArray(to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	}

	typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
	    var e = new Error(message);
	    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
	};

	//
	// Main
	//
	function memoize(fn, options) {
	    var cache = options && options.cache ? options.cache : cacheDefault;
	    var serializer = options && options.serializer ? options.serializer : serializerDefault;
	    var strategy = options && options.strategy ? options.strategy : strategyDefault;
	    return strategy(fn, {
	        cache: cache,
	        serializer: serializer,
	    });
	}
	//
	// Strategy
	//
	function isPrimitive(value) {
	    return (value == null || typeof value === 'number' || typeof value === 'boolean'); // || typeof value === "string" 'unsafe' primitive for our needs
	}
	function monadic(fn, cache, serializer, arg) {
	    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
	    var computedValue = cache.get(cacheKey);
	    if (typeof computedValue === 'undefined') {
	        computedValue = fn.call(this, arg);
	        cache.set(cacheKey, computedValue);
	    }
	    return computedValue;
	}
	function variadic(fn, cache, serializer) {
	    var args = Array.prototype.slice.call(arguments, 3);
	    var cacheKey = serializer(args);
	    var computedValue = cache.get(cacheKey);
	    if (typeof computedValue === 'undefined') {
	        computedValue = fn.apply(this, args);
	        cache.set(cacheKey, computedValue);
	    }
	    return computedValue;
	}
	function assemble(fn, context, strategy, cache, serialize) {
	    return strategy.bind(context, fn, cache, serialize);
	}
	function strategyDefault(fn, options) {
	    var strategy = fn.length === 1 ? monadic : variadic;
	    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
	}
	function strategyVariadic(fn, options) {
	    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
	}
	function strategyMonadic(fn, options) {
	    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
	}
	//
	// Serializer
	//
	var serializerDefault = function () {
	    return JSON.stringify(arguments);
	};
	//
	// Cache
	//
	function ObjectWithoutPrototypeCache() {
	    this.cache = Object.create(null);
	}
	ObjectWithoutPrototypeCache.prototype.get = function (key) {
	    return this.cache[key];
	};
	ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
	    this.cache[key] = value;
	};
	var cacheDefault = {
	    create: function create() {
	        // @ts-ignore
	        return new ObjectWithoutPrototypeCache();
	    },
	};
	var strategies = {
	    variadic: strategyVariadic,
	    monadic: strategyMonadic,
	};

	var ErrorKind;
	(function (ErrorKind) {
	    /** Argument is unclosed (e.g. `{0`) */
	    ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
	    /** Argument is empty (e.g. `{}`). */
	    ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
	    /** Argument is malformed (e.g. `{foo!}``) */
	    ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
	    /** Expect an argument type (e.g. `{foo,}`) */
	    ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
	    /** Unsupported argument type (e.g. `{foo,foo}`) */
	    ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
	    /** Expect an argument style (e.g. `{foo, number, }`) */
	    ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
	    /** The number skeleton is invalid. */
	    ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
	    /** The date time skeleton is invalid. */
	    ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
	    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
	    ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
	    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
	    ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
	    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
	    ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
	    /** Missing select argument options (e.g. `{foo, select}`) */
	    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
	    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
	    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
	    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
	    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
	    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
	    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
	    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
	    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
	    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
	    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
	    /**
	     * Expecting a message fragment after the `plural` or `selectordinal` selector
	     * (e.g. `{foo, plural, one}`)
	     */
	    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
	    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
	    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
	    /**
	     * Duplicate selectors in `plural` or `selectordinal` argument.
	     * (e.g. {foo, plural, one {#} one {#}})
	     */
	    ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
	    /** Duplicate selectors in `select` argument.
	     * (e.g. {foo, select, apple {apple} apple {apple}})
	     */
	    ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
	    /** Plural or select argument option must have `other` clause. */
	    ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
	    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
	    ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
	    /** The tag name is invalid. (e.g. `<123>foo</123>`) */
	    ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
	    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
	    ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
	    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
	    ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
	})(ErrorKind || (ErrorKind = {}));

	var TYPE;
	(function (TYPE) {
	    /**
	     * Raw text
	     */
	    TYPE[TYPE["literal"] = 0] = "literal";
	    /**
	     * Variable w/o any format, e.g `var` in `this is a {var}`
	     */
	    TYPE[TYPE["argument"] = 1] = "argument";
	    /**
	     * Variable w/ number format
	     */
	    TYPE[TYPE["number"] = 2] = "number";
	    /**
	     * Variable w/ date format
	     */
	    TYPE[TYPE["date"] = 3] = "date";
	    /**
	     * Variable w/ time format
	     */
	    TYPE[TYPE["time"] = 4] = "time";
	    /**
	     * Variable w/ select format
	     */
	    TYPE[TYPE["select"] = 5] = "select";
	    /**
	     * Variable w/ plural format
	     */
	    TYPE[TYPE["plural"] = 6] = "plural";
	    /**
	     * Only possible within plural argument.
	     * This is the `#` symbol that will be substituted with the count.
	     */
	    TYPE[TYPE["pound"] = 7] = "pound";
	    /**
	     * XML-like tag
	     */
	    TYPE[TYPE["tag"] = 8] = "tag";
	})(TYPE || (TYPE = {}));
	var SKELETON_TYPE;
	(function (SKELETON_TYPE) {
	    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
	    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
	})(SKELETON_TYPE || (SKELETON_TYPE = {}));
	/**
	 * Type Guards
	 */
	function isLiteralElement(el) {
	    return el.type === TYPE.literal;
	}
	function isArgumentElement(el) {
	    return el.type === TYPE.argument;
	}
	function isNumberElement(el) {
	    return el.type === TYPE.number;
	}
	function isDateElement(el) {
	    return el.type === TYPE.date;
	}
	function isTimeElement(el) {
	    return el.type === TYPE.time;
	}
	function isSelectElement(el) {
	    return el.type === TYPE.select;
	}
	function isPluralElement(el) {
	    return el.type === TYPE.plural;
	}
	function isPoundElement(el) {
	    return el.type === TYPE.pound;
	}
	function isTagElement(el) {
	    return el.type === TYPE.tag;
	}
	function isNumberSkeleton(el) {
	    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
	}
	function isDateTimeSkeleton(el) {
	    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
	}

	// @generated from regex-gen.ts
	var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;

	/**
	 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
	 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
	 * with some tweaks
	 */
	var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
	/**
	 * Parse Date time skeleton into Intl.DateTimeFormatOptions
	 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
	 * @public
	 * @param skeleton skeleton string
	 */
	function parseDateTimeSkeleton(skeleton) {
	    var result = {};
	    skeleton.replace(DATE_TIME_REGEX, function (match) {
	        var len = match.length;
	        switch (match[0]) {
	            // Era
	            case 'G':
	                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
	                break;
	            // Year
	            case 'y':
	                result.year = len === 2 ? '2-digit' : 'numeric';
	                break;
	            case 'Y':
	            case 'u':
	            case 'U':
	            case 'r':
	                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
	            // Quarter
	            case 'q':
	            case 'Q':
	                throw new RangeError('`q/Q` (quarter) patterns are not supported');
	            // Month
	            case 'M':
	            case 'L':
	                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
	                break;
	            // Week
	            case 'w':
	            case 'W':
	                throw new RangeError('`w/W` (week) patterns are not supported');
	            case 'd':
	                result.day = ['numeric', '2-digit'][len - 1];
	                break;
	            case 'D':
	            case 'F':
	            case 'g':
	                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
	            // Weekday
	            case 'E':
	                result.weekday = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
	                break;
	            case 'e':
	                if (len < 4) {
	                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
	                }
	                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
	                break;
	            case 'c':
	                if (len < 4) {
	                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
	                }
	                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
	                break;
	            // Period
	            case 'a': // AM, PM
	                result.hour12 = true;
	                break;
	            case 'b': // am, pm, noon, midnight
	            case 'B': // flexible day periods
	                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
	            // Hour
	            case 'h':
	                result.hourCycle = 'h12';
	                result.hour = ['numeric', '2-digit'][len - 1];
	                break;
	            case 'H':
	                result.hourCycle = 'h23';
	                result.hour = ['numeric', '2-digit'][len - 1];
	                break;
	            case 'K':
	                result.hourCycle = 'h11';
	                result.hour = ['numeric', '2-digit'][len - 1];
	                break;
	            case 'k':
	                result.hourCycle = 'h24';
	                result.hour = ['numeric', '2-digit'][len - 1];
	                break;
	            case 'j':
	            case 'J':
	            case 'C':
	                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
	            // Minute
	            case 'm':
	                result.minute = ['numeric', '2-digit'][len - 1];
	                break;
	            // Second
	            case 's':
	                result.second = ['numeric', '2-digit'][len - 1];
	                break;
	            case 'S':
	            case 'A':
	                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
	            // Zone
	            case 'z': // 1..3, 4: specific non-location format
	                result.timeZoneName = len < 4 ? 'short' : 'long';
	                break;
	            case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
	            case 'O': // 1, 4: milliseconds in day short, long
	            case 'v': // 1, 4: generic non-location format
	            case 'V': // 1, 2, 3, 4: time zone ID or city
	            case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
	            case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
	                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
	        }
	        return '';
	    });
	    return result;
	}

	// @generated from regex-gen.ts
	var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

	function parseNumberSkeletonFromString(skeleton) {
	    if (skeleton.length === 0) {
	        throw new Error('Number skeleton cannot be empty');
	    }
	    // Parse the skeleton
	    var stringTokens = skeleton
	        .split(WHITE_SPACE_REGEX)
	        .filter(function (x) { return x.length > 0; });
	    var tokens = [];
	    for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
	        var stringToken = stringTokens_1[_i];
	        var stemAndOptions = stringToken.split('/');
	        if (stemAndOptions.length === 0) {
	            throw new Error('Invalid number skeleton');
	        }
	        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
	        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
	            var option = options_1[_a];
	            if (option.length === 0) {
	                throw new Error('Invalid number skeleton');
	            }
	        }
	        tokens.push({ stem: stem, options: options });
	    }
	    return tokens;
	}
	function icuUnitToEcma(unit) {
	    return unit.replace(/^(.*?)-/, '');
	}
	var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
	var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
	var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
	var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
	function parseSignificantPrecision(str) {
	    var result = {};
	    if (str[str.length - 1] === 'r') {
	        result.roundingPriority = 'morePrecision';
	    }
	    else if (str[str.length - 1] === 's') {
	        result.roundingPriority = 'lessPrecision';
	    }
	    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
	        // @@@ case
	        if (typeof g2 !== 'string') {
	            result.minimumSignificantDigits = g1.length;
	            result.maximumSignificantDigits = g1.length;
	        }
	        // @@@+ case
	        else if (g2 === '+') {
	            result.minimumSignificantDigits = g1.length;
	        }
	        // .### case
	        else if (g1[0] === '#') {
	            result.maximumSignificantDigits = g1.length;
	        }
	        // .@@## or .@@@ case
	        else {
	            result.minimumSignificantDigits = g1.length;
	            result.maximumSignificantDigits =
	                g1.length + (typeof g2 === 'string' ? g2.length : 0);
	        }
	        return '';
	    });
	    return result;
	}
	function parseSign(str) {
	    switch (str) {
	        case 'sign-auto':
	            return {
	                signDisplay: 'auto',
	            };
	        case 'sign-accounting':
	        case '()':
	            return {
	                currencySign: 'accounting',
	            };
	        case 'sign-always':
	        case '+!':
	            return {
	                signDisplay: 'always',
	            };
	        case 'sign-accounting-always':
	        case '()!':
	            return {
	                signDisplay: 'always',
	                currencySign: 'accounting',
	            };
	        case 'sign-except-zero':
	        case '+?':
	            return {
	                signDisplay: 'exceptZero',
	            };
	        case 'sign-accounting-except-zero':
	        case '()?':
	            return {
	                signDisplay: 'exceptZero',
	                currencySign: 'accounting',
	            };
	        case 'sign-never':
	        case '+_':
	            return {
	                signDisplay: 'never',
	            };
	    }
	}
	function parseConciseScientificAndEngineeringStem(stem) {
	    // Engineering
	    var result;
	    if (stem[0] === 'E' && stem[1] === 'E') {
	        result = {
	            notation: 'engineering',
	        };
	        stem = stem.slice(2);
	    }
	    else if (stem[0] === 'E') {
	        result = {
	            notation: 'scientific',
	        };
	        stem = stem.slice(1);
	    }
	    if (result) {
	        var signDisplay = stem.slice(0, 2);
	        if (signDisplay === '+!') {
	            result.signDisplay = 'always';
	            stem = stem.slice(2);
	        }
	        else if (signDisplay === '+?') {
	            result.signDisplay = 'exceptZero';
	            stem = stem.slice(2);
	        }
	        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
	            throw new Error('Malformed concise eng/scientific notation');
	        }
	        result.minimumIntegerDigits = stem.length;
	    }
	    return result;
	}
	function parseNotationOptions(opt) {
	    var result = {};
	    var signOpts = parseSign(opt);
	    if (signOpts) {
	        return signOpts;
	    }
	    return result;
	}
	/**
	 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
	 */
	function parseNumberSkeleton(tokens) {
	    var result = {};
	    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
	        var token = tokens_1[_i];
	        switch (token.stem) {
	            case 'percent':
	            case '%':
	                result.style = 'percent';
	                continue;
	            case '%x100':
	                result.style = 'percent';
	                result.scale = 100;
	                continue;
	            case 'currency':
	                result.style = 'currency';
	                result.currency = token.options[0];
	                continue;
	            case 'group-off':
	            case ',_':
	                result.useGrouping = false;
	                continue;
	            case 'precision-integer':
	            case '.':
	                result.maximumFractionDigits = 0;
	                continue;
	            case 'measure-unit':
	            case 'unit':
	                result.style = 'unit';
	                result.unit = icuUnitToEcma(token.options[0]);
	                continue;
	            case 'compact-short':
	            case 'K':
	                result.notation = 'compact';
	                result.compactDisplay = 'short';
	                continue;
	            case 'compact-long':
	            case 'KK':
	                result.notation = 'compact';
	                result.compactDisplay = 'long';
	                continue;
	            case 'scientific':
	                result = __assign(__assign(__assign({}, result), { notation: 'scientific' }), token.options.reduce(function (all, opt) { return (__assign(__assign({}, all), parseNotationOptions(opt))); }, {}));
	                continue;
	            case 'engineering':
	                result = __assign(__assign(__assign({}, result), { notation: 'engineering' }), token.options.reduce(function (all, opt) { return (__assign(__assign({}, all), parseNotationOptions(opt))); }, {}));
	                continue;
	            case 'notation-simple':
	                result.notation = 'standard';
	                continue;
	            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
	            case 'unit-width-narrow':
	                result.currencyDisplay = 'narrowSymbol';
	                result.unitDisplay = 'narrow';
	                continue;
	            case 'unit-width-short':
	                result.currencyDisplay = 'code';
	                result.unitDisplay = 'short';
	                continue;
	            case 'unit-width-full-name':
	                result.currencyDisplay = 'name';
	                result.unitDisplay = 'long';
	                continue;
	            case 'unit-width-iso-code':
	                result.currencyDisplay = 'symbol';
	                continue;
	            case 'scale':
	                result.scale = parseFloat(token.options[0]);
	                continue;
	            case 'rounding-mode-floor':
	                result.roundingMode = 'floor';
	                continue;
	            case 'rounding-mode-ceiling':
	                result.roundingMode = 'ceil';
	                continue;
	            case 'rounding-mode-down':
	                result.roundingMode = 'trunc';
	                continue;
	            case 'rounding-mode-up':
	                result.roundingMode = 'expand';
	                continue;
	            case 'rounding-mode-half-even':
	                result.roundingMode = 'halfEven';
	                continue;
	            case 'rounding-mode-half-down':
	                result.roundingMode = 'halfTrunc';
	                continue;
	            case 'rounding-mode-half-up':
	                result.roundingMode = 'halfExpand';
	                continue;
	            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
	            case 'integer-width':
	                if (token.options.length > 1) {
	                    throw new RangeError('integer-width stems only accept a single optional option');
	                }
	                token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
	                    if (g1) {
	                        result.minimumIntegerDigits = g2.length;
	                    }
	                    else if (g3 && g4) {
	                        throw new Error('We currently do not support maximum integer digits');
	                    }
	                    else if (g5) {
	                        throw new Error('We currently do not support exact integer digits');
	                    }
	                    return '';
	                });
	                continue;
	        }
	        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
	        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
	            result.minimumIntegerDigits = token.stem.length;
	            continue;
	        }
	        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
	            // Precision
	            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
	            // precision-integer case
	            if (token.options.length > 1) {
	                throw new RangeError('Fraction-precision stems only accept a single optional option');
	            }
	            token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
	                // .000* case (before ICU67 it was .000+)
	                if (g2 === '*') {
	                    result.minimumFractionDigits = g1.length;
	                }
	                // .### case
	                else if (g3 && g3[0] === '#') {
	                    result.maximumFractionDigits = g3.length;
	                }
	                // .00## case
	                else if (g4 && g5) {
	                    result.minimumFractionDigits = g4.length;
	                    result.maximumFractionDigits = g4.length + g5.length;
	                }
	                else {
	                    result.minimumFractionDigits = g1.length;
	                    result.maximumFractionDigits = g1.length;
	                }
	                return '';
	            });
	            var opt = token.options[0];
	            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
	            if (opt === 'w') {
	                result = __assign(__assign({}, result), { trailingZeroDisplay: 'stripIfInteger' });
	            }
	            else if (opt) {
	                result = __assign(__assign({}, result), parseSignificantPrecision(opt));
	            }
	            continue;
	        }
	        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
	        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
	            result = __assign(__assign({}, result), parseSignificantPrecision(token.stem));
	            continue;
	        }
	        var signOpts = parseSign(token.stem);
	        if (signOpts) {
	            result = __assign(__assign({}, result), signOpts);
	        }
	        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
	        if (conciseScientificAndEngineeringOpts) {
	            result = __assign(__assign({}, result), conciseScientificAndEngineeringOpts);
	        }
	    }
	    return result;
	}

	// @generated from time-data-gen.ts
	// prettier-ignore  
	var timeData = {
	    "001": [
	        "H",
	        "h"
	    ],
	    "419": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "AC": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "AD": [
	        "H",
	        "hB"
	    ],
	    "AE": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "AF": [
	        "H",
	        "hb",
	        "hB",
	        "h"
	    ],
	    "AG": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "AI": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "AL": [
	        "h",
	        "H",
	        "hB"
	    ],
	    "AM": [
	        "H",
	        "hB"
	    ],
	    "AO": [
	        "H",
	        "hB"
	    ],
	    "AR": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "AS": [
	        "h",
	        "H"
	    ],
	    "AT": [
	        "H",
	        "hB"
	    ],
	    "AU": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "AW": [
	        "H",
	        "hB"
	    ],
	    "AX": [
	        "H"
	    ],
	    "AZ": [
	        "H",
	        "hB",
	        "h"
	    ],
	    "BA": [
	        "H",
	        "hB",
	        "h"
	    ],
	    "BB": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "BD": [
	        "h",
	        "hB",
	        "H"
	    ],
	    "BE": [
	        "H",
	        "hB"
	    ],
	    "BF": [
	        "H",
	        "hB"
	    ],
	    "BG": [
	        "H",
	        "hB",
	        "h"
	    ],
	    "BH": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "BI": [
	        "H",
	        "h"
	    ],
	    "BJ": [
	        "H",
	        "hB"
	    ],
	    "BL": [
	        "H",
	        "hB"
	    ],
	    "BM": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "BN": [
	        "hb",
	        "hB",
	        "h",
	        "H"
	    ],
	    "BO": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "BQ": [
	        "H"
	    ],
	    "BR": [
	        "H",
	        "hB"
	    ],
	    "BS": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "BT": [
	        "h",
	        "H"
	    ],
	    "BW": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "BY": [
	        "H",
	        "h"
	    ],
	    "BZ": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "CA": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "CC": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "CD": [
	        "hB",
	        "H"
	    ],
	    "CF": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "CG": [
	        "H",
	        "hB"
	    ],
	    "CH": [
	        "H",
	        "hB",
	        "h"
	    ],
	    "CI": [
	        "H",
	        "hB"
	    ],
	    "CK": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "CL": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "CM": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "CN": [
	        "H",
	        "hB",
	        "hb",
	        "h"
	    ],
	    "CO": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "CP": [
	        "H"
	    ],
	    "CR": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "CU": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "CV": [
	        "H",
	        "hB"
	    ],
	    "CW": [
	        "H",
	        "hB"
	    ],
	    "CX": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "CY": [
	        "h",
	        "H",
	        "hb",
	        "hB"
	    ],
	    "CZ": [
	        "H"
	    ],
	    "DE": [
	        "H",
	        "hB"
	    ],
	    "DG": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "DJ": [
	        "h",
	        "H"
	    ],
	    "DK": [
	        "H"
	    ],
	    "DM": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "DO": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "DZ": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "EA": [
	        "H",
	        "h",
	        "hB",
	        "hb"
	    ],
	    "EC": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "EE": [
	        "H",
	        "hB"
	    ],
	    "EG": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "EH": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "ER": [
	        "h",
	        "H"
	    ],
	    "ES": [
	        "H",
	        "hB",
	        "h",
	        "hb"
	    ],
	    "ET": [
	        "hB",
	        "hb",
	        "h",
	        "H"
	    ],
	    "FI": [
	        "H"
	    ],
	    "FJ": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "FK": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "FM": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "FO": [
	        "H",
	        "h"
	    ],
	    "FR": [
	        "H",
	        "hB"
	    ],
	    "GA": [
	        "H",
	        "hB"
	    ],
	    "GB": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "GD": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "GE": [
	        "H",
	        "hB",
	        "h"
	    ],
	    "GF": [
	        "H",
	        "hB"
	    ],
	    "GG": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "GH": [
	        "h",
	        "H"
	    ],
	    "GI": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "GL": [
	        "H",
	        "h"
	    ],
	    "GM": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "GN": [
	        "H",
	        "hB"
	    ],
	    "GP": [
	        "H",
	        "hB"
	    ],
	    "GQ": [
	        "H",
	        "hB",
	        "h",
	        "hb"
	    ],
	    "GR": [
	        "h",
	        "H",
	        "hb",
	        "hB"
	    ],
	    "GT": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "GU": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "GW": [
	        "H",
	        "hB"
	    ],
	    "GY": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "HK": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "HN": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "HR": [
	        "H",
	        "hB"
	    ],
	    "HU": [
	        "H",
	        "h"
	    ],
	    "IC": [
	        "H",
	        "h",
	        "hB",
	        "hb"
	    ],
	    "ID": [
	        "H"
	    ],
	    "IE": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "IL": [
	        "H",
	        "hB"
	    ],
	    "IM": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "IN": [
	        "h",
	        "H"
	    ],
	    "IO": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "IQ": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "IR": [
	        "hB",
	        "H"
	    ],
	    "IS": [
	        "H"
	    ],
	    "IT": [
	        "H",
	        "hB"
	    ],
	    "JE": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "JM": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "JO": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "JP": [
	        "H",
	        "K",
	        "h"
	    ],
	    "KE": [
	        "hB",
	        "hb",
	        "H",
	        "h"
	    ],
	    "KG": [
	        "H",
	        "h",
	        "hB",
	        "hb"
	    ],
	    "KH": [
	        "hB",
	        "h",
	        "H",
	        "hb"
	    ],
	    "KI": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "KM": [
	        "H",
	        "h",
	        "hB",
	        "hb"
	    ],
	    "KN": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "KP": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "KR": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "KW": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "KY": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "KZ": [
	        "H",
	        "hB"
	    ],
	    "LA": [
	        "H",
	        "hb",
	        "hB",
	        "h"
	    ],
	    "LB": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "LC": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "LI": [
	        "H",
	        "hB",
	        "h"
	    ],
	    "LK": [
	        "H",
	        "h",
	        "hB",
	        "hb"
	    ],
	    "LR": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "LS": [
	        "h",
	        "H"
	    ],
	    "LT": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "LU": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "LV": [
	        "H",
	        "hB",
	        "hb",
	        "h"
	    ],
	    "LY": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "MA": [
	        "H",
	        "h",
	        "hB",
	        "hb"
	    ],
	    "MC": [
	        "H",
	        "hB"
	    ],
	    "MD": [
	        "H",
	        "hB"
	    ],
	    "ME": [
	        "H",
	        "hB",
	        "h"
	    ],
	    "MF": [
	        "H",
	        "hB"
	    ],
	    "MG": [
	        "H",
	        "h"
	    ],
	    "MH": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "MK": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "ML": [
	        "H"
	    ],
	    "MM": [
	        "hB",
	        "hb",
	        "H",
	        "h"
	    ],
	    "MN": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "MO": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "MP": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "MQ": [
	        "H",
	        "hB"
	    ],
	    "MR": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "MS": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "MT": [
	        "H",
	        "h"
	    ],
	    "MU": [
	        "H",
	        "h"
	    ],
	    "MV": [
	        "H",
	        "h"
	    ],
	    "MW": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "MX": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "MY": [
	        "hb",
	        "hB",
	        "h",
	        "H"
	    ],
	    "MZ": [
	        "H",
	        "hB"
	    ],
	    "NA": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "NC": [
	        "H",
	        "hB"
	    ],
	    "NE": [
	        "H"
	    ],
	    "NF": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "NG": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "NI": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "NL": [
	        "H",
	        "hB"
	    ],
	    "NO": [
	        "H",
	        "h"
	    ],
	    "NP": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "NR": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "NU": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "NZ": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "OM": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "PA": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "PE": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "PF": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "PG": [
	        "h",
	        "H"
	    ],
	    "PH": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "PK": [
	        "h",
	        "hB",
	        "H"
	    ],
	    "PL": [
	        "H",
	        "h"
	    ],
	    "PM": [
	        "H",
	        "hB"
	    ],
	    "PN": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "PR": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "PS": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "PT": [
	        "H",
	        "hB"
	    ],
	    "PW": [
	        "h",
	        "H"
	    ],
	    "PY": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "QA": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "RE": [
	        "H",
	        "hB"
	    ],
	    "RO": [
	        "H",
	        "hB"
	    ],
	    "RS": [
	        "H",
	        "hB",
	        "h"
	    ],
	    "RU": [
	        "H"
	    ],
	    "RW": [
	        "H",
	        "h"
	    ],
	    "SA": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "SB": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "SC": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "SD": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "SE": [
	        "H"
	    ],
	    "SG": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "SH": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "SI": [
	        "H",
	        "hB"
	    ],
	    "SJ": [
	        "H"
	    ],
	    "SK": [
	        "H"
	    ],
	    "SL": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "SM": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "SN": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "SO": [
	        "h",
	        "H"
	    ],
	    "SR": [
	        "H",
	        "hB"
	    ],
	    "SS": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "ST": [
	        "H",
	        "hB"
	    ],
	    "SV": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "SX": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "SY": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "SZ": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "TA": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "TC": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "TD": [
	        "h",
	        "H",
	        "hB"
	    ],
	    "TF": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "TG": [
	        "H",
	        "hB"
	    ],
	    "TH": [
	        "H",
	        "h"
	    ],
	    "TJ": [
	        "H",
	        "h"
	    ],
	    "TL": [
	        "H",
	        "hB",
	        "hb",
	        "h"
	    ],
	    "TM": [
	        "H",
	        "h"
	    ],
	    "TN": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "TO": [
	        "h",
	        "H"
	    ],
	    "TR": [
	        "H",
	        "hB"
	    ],
	    "TT": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "TW": [
	        "hB",
	        "hb",
	        "h",
	        "H"
	    ],
	    "TZ": [
	        "hB",
	        "hb",
	        "H",
	        "h"
	    ],
	    "UA": [
	        "H",
	        "hB",
	        "h"
	    ],
	    "UG": [
	        "hB",
	        "hb",
	        "H",
	        "h"
	    ],
	    "UM": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "US": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "UY": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "UZ": [
	        "H",
	        "hB",
	        "h"
	    ],
	    "VA": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "VC": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "VE": [
	        "h",
	        "H",
	        "hB",
	        "hb"
	    ],
	    "VG": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "VI": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "VN": [
	        "H",
	        "h"
	    ],
	    "VU": [
	        "h",
	        "H"
	    ],
	    "WF": [
	        "H",
	        "hB"
	    ],
	    "WS": [
	        "h",
	        "H"
	    ],
	    "XK": [
	        "H",
	        "hB",
	        "h"
	    ],
	    "YE": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "YT": [
	        "H",
	        "hB"
	    ],
	    "ZA": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "ZM": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "ZW": [
	        "H",
	        "h"
	    ],
	    "af-ZA": [
	        "H",
	        "h",
	        "hB",
	        "hb"
	    ],
	    "ar-001": [
	        "h",
	        "hB",
	        "hb",
	        "H"
	    ],
	    "ca-ES": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "en-001": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "en-HK": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "en-IL": [
	        "H",
	        "h",
	        "hb",
	        "hB"
	    ],
	    "en-MY": [
	        "h",
	        "hb",
	        "H",
	        "hB"
	    ],
	    "es-BR": [
	        "H",
	        "h",
	        "hB",
	        "hb"
	    ],
	    "es-ES": [
	        "H",
	        "h",
	        "hB",
	        "hb"
	    ],
	    "es-GQ": [
	        "H",
	        "h",
	        "hB",
	        "hb"
	    ],
	    "fr-CA": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "gl-ES": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "gu-IN": [
	        "hB",
	        "hb",
	        "h",
	        "H"
	    ],
	    "hi-IN": [
	        "hB",
	        "h",
	        "H"
	    ],
	    "it-CH": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "it-IT": [
	        "H",
	        "h",
	        "hB"
	    ],
	    "kn-IN": [
	        "hB",
	        "h",
	        "H"
	    ],
	    "ml-IN": [
	        "hB",
	        "h",
	        "H"
	    ],
	    "mr-IN": [
	        "hB",
	        "hb",
	        "h",
	        "H"
	    ],
	    "pa-IN": [
	        "hB",
	        "hb",
	        "h",
	        "H"
	    ],
	    "ta-IN": [
	        "hB",
	        "h",
	        "hb",
	        "H"
	    ],
	    "te-IN": [
	        "hB",
	        "h",
	        "H"
	    ],
	    "zu-ZA": [
	        "H",
	        "hB",
	        "hb",
	        "h"
	    ]
	};

	/**
	 * Returns the best matching date time pattern if a date time skeleton
	 * pattern is provided with a locale. Follows the Unicode specification:
	 * https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
	 * @param skeleton date time skeleton pattern that possibly includes j, J or C
	 * @param locale
	 */
	function getBestPattern(skeleton, locale) {
	    var skeletonCopy = '';
	    for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
	        var patternChar = skeleton.charAt(patternPos);
	        if (patternChar === 'j') {
	            var extraLength = 0;
	            while (patternPos + 1 < skeleton.length &&
	                skeleton.charAt(patternPos + 1) === patternChar) {
	                extraLength++;
	                patternPos++;
	            }
	            var hourLen = 1 + (extraLength & 1);
	            var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
	            var dayPeriodChar = 'a';
	            var hourChar = getDefaultHourSymbolFromLocale(locale);
	            if (hourChar == 'H' || hourChar == 'k') {
	                dayPeriodLen = 0;
	            }
	            while (dayPeriodLen-- > 0) {
	                skeletonCopy += dayPeriodChar;
	            }
	            while (hourLen-- > 0) {
	                skeletonCopy = hourChar + skeletonCopy;
	            }
	        }
	        else if (patternChar === 'J') {
	            skeletonCopy += 'H';
	        }
	        else {
	            skeletonCopy += patternChar;
	        }
	    }
	    return skeletonCopy;
	}
	/**
	 * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
	 * of the given `locale` to the corresponding time pattern.
	 * @param locale
	 */
	function getDefaultHourSymbolFromLocale(locale) {
	    var hourCycle = locale.hourCycle;
	    if (hourCycle === undefined &&
	        // @ts-ignore hourCycle(s) is not identified yet
	        locale.hourCycles &&
	        // @ts-ignore
	        locale.hourCycles.length) {
	        // @ts-ignore
	        hourCycle = locale.hourCycles[0];
	    }
	    if (hourCycle) {
	        switch (hourCycle) {
	            case 'h24':
	                return 'k';
	            case 'h23':
	                return 'H';
	            case 'h12':
	                return 'h';
	            case 'h11':
	                return 'K';
	            default:
	                throw new Error('Invalid hourCycle');
	        }
	    }
	    // TODO: Once hourCycle is fully supported remove the following with data generation
	    var languageTag = locale.language;
	    var regionTag;
	    if (languageTag !== 'root') {
	        regionTag = locale.maximize().region;
	    }
	    var hourCycles = timeData[regionTag || ''] ||
	        timeData[languageTag || ''] ||
	        timeData["".concat(languageTag, "-001")] ||
	        timeData['001'];
	    return hourCycles[0];
	}

	var _a;
	var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.source, "*"));
	var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(SPACE_SEPARATOR_REGEX.source, "*$"));
	function createLocation(start, end) {
	    return { start: start, end: end };
	}
	// #region Ponyfills
	// Consolidate these variables up top for easier toggling during debugging
	var hasNativeStartsWith = !!String.prototype.startsWith && '_a'.startsWith('a', 1);
	var hasNativeFromCodePoint = !!String.fromCodePoint;
	var hasNativeFromEntries = !!Object.fromEntries;
	var hasNativeCodePointAt = !!String.prototype.codePointAt;
	var hasTrimStart = !!String.prototype.trimStart;
	var hasTrimEnd = !!String.prototype.trimEnd;
	var hasNativeIsSafeInteger = !!Number.isSafeInteger;
	var isSafeInteger = hasNativeIsSafeInteger
	    ? Number.isSafeInteger
	    : function (n) {
	        return (typeof n === 'number' &&
	            isFinite(n) &&
	            Math.floor(n) === n &&
	            Math.abs(n) <= 0x1fffffffffffff);
	    };
	// IE11 does not support y and u.
	var REGEX_SUPPORTS_U_AND_Y = true;
	try {
	    var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
	    /**
	     * legacy Edge or Xbox One browser
	     * Unicode flag support: supported
	     * Pattern_Syntax support: not supported
	     * See https://github.com/formatjs/formatjs/issues/2822
	     */
	    REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
	}
	catch (_) {
	    REGEX_SUPPORTS_U_AND_Y = false;
	}
	var startsWith = hasNativeStartsWith
	    ? // Native
	        function startsWith(s, search, position) {
	            return s.startsWith(search, position);
	        }
	    : // For IE11
	        function startsWith(s, search, position) {
	            return s.slice(position, position + search.length) === search;
	        };
	var fromCodePoint = hasNativeFromCodePoint
	    ? String.fromCodePoint
	    : // IE11
	        function fromCodePoint() {
	            var codePoints = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                codePoints[_i] = arguments[_i];
	            }
	            var elements = '';
	            var length = codePoints.length;
	            var i = 0;
	            var code;
	            while (length > i) {
	                code = codePoints[i++];
	                if (code > 0x10ffff)
	                    throw RangeError(code + ' is not a valid code point');
	                elements +=
	                    code < 0x10000
	                        ? String.fromCharCode(code)
	                        : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00);
	            }
	            return elements;
	        };
	var fromEntries = 
	// native
	hasNativeFromEntries
	    ? Object.fromEntries
	    : // Ponyfill
	        function fromEntries(entries) {
	            var obj = {};
	            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
	                var _a = entries_1[_i], k = _a[0], v = _a[1];
	                obj[k] = v;
	            }
	            return obj;
	        };
	var codePointAt = hasNativeCodePointAt
	    ? // Native
	        function codePointAt(s, index) {
	            return s.codePointAt(index);
	        }
	    : // IE 11
	        function codePointAt(s, index) {
	            var size = s.length;
	            if (index < 0 || index >= size) {
	                return undefined;
	            }
	            var first = s.charCodeAt(index);
	            var second;
	            return first < 0xd800 ||
	                first > 0xdbff ||
	                index + 1 === size ||
	                (second = s.charCodeAt(index + 1)) < 0xdc00 ||
	                second > 0xdfff
	                ? first
	                : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
	        };
	var trimStart = hasTrimStart
	    ? // Native
	        function trimStart(s) {
	            return s.trimStart();
	        }
	    : // Ponyfill
	        function trimStart(s) {
	            return s.replace(SPACE_SEPARATOR_START_REGEX, '');
	        };
	var trimEnd = hasTrimEnd
	    ? // Native
	        function trimEnd(s) {
	            return s.trimEnd();
	        }
	    : // Ponyfill
	        function trimEnd(s) {
	            return s.replace(SPACE_SEPARATOR_END_REGEX, '');
	        };
	// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
	function RE(s, flag) {
	    return new RegExp(s, flag);
	}
	// #endregion
	var matchIdentifierAtIndex;
	if (REGEX_SUPPORTS_U_AND_Y) {
	    // Native
	    var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
	    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
	        var _a;
	        IDENTIFIER_PREFIX_RE_1.lastIndex = index;
	        var match = IDENTIFIER_PREFIX_RE_1.exec(s);
	        return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
	    };
	}
	else {
	    // IE11
	    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
	        var match = [];
	        while (true) {
	            var c = codePointAt(s, index);
	            if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
	                break;
	            }
	            match.push(c);
	            index += c >= 0x10000 ? 2 : 1;
	        }
	        return fromCodePoint.apply(void 0, match);
	    };
	}
	var Parser = /** @class */ (function () {
	    function Parser(message, options) {
	        if (options === void 0) { options = {}; }
	        this.message = message;
	        this.position = { offset: 0, line: 1, column: 1 };
	        this.ignoreTag = !!options.ignoreTag;
	        this.locale = options.locale;
	        this.requiresOtherClause = !!options.requiresOtherClause;
	        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
	    }
	    Parser.prototype.parse = function () {
	        if (this.offset() !== 0) {
	            throw Error('parser can only be used once');
	        }
	        return this.parseMessage(0, '', false);
	    };
	    Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
	        var elements = [];
	        while (!this.isEOF()) {
	            var char = this.char();
	            if (char === 123 /* `{` */) {
	                var result = this.parseArgument(nestingLevel, expectingCloseTag);
	                if (result.err) {
	                    return result;
	                }
	                elements.push(result.val);
	            }
	            else if (char === 125 /* `}` */ && nestingLevel > 0) {
	                break;
	            }
	            else if (char === 35 /* `#` */ &&
	                (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
	                var position = this.clonePosition();
	                this.bump();
	                elements.push({
	                    type: TYPE.pound,
	                    location: createLocation(position, this.clonePosition()),
	                });
	            }
	            else if (char === 60 /* `<` */ &&
	                !this.ignoreTag &&
	                this.peek() === 47 // char code for '/'
	            ) {
	                if (expectingCloseTag) {
	                    break;
	                }
	                else {
	                    return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
	                }
	            }
	            else if (char === 60 /* `<` */ &&
	                !this.ignoreTag &&
	                _isAlpha(this.peek() || 0)) {
	                var result = this.parseTag(nestingLevel, parentArgType);
	                if (result.err) {
	                    return result;
	                }
	                elements.push(result.val);
	            }
	            else {
	                var result = this.parseLiteral(nestingLevel, parentArgType);
	                if (result.err) {
	                    return result;
	                }
	                elements.push(result.val);
	            }
	        }
	        return { val: elements, err: null };
	    };
	    /**
	     * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
	     * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
	     * are accepted:
	     *
	     * ```
	     * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
	     * tagName ::= [a-z] (PENChar)*
	     * PENChar ::=
	     *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
	     *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
	     *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
	     * ```
	     *
	     * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
	     * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
	     * since other tag-based engines like React allow it
	     */
	    Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
	        var startPosition = this.clonePosition();
	        this.bump(); // `<`
	        var tagName = this.parseTagName();
	        this.bumpSpace();
	        if (this.bumpIf('/>')) {
	            // Self closing tag
	            return {
	                val: {
	                    type: TYPE.literal,
	                    value: "<".concat(tagName, "/>"),
	                    location: createLocation(startPosition, this.clonePosition()),
	                },
	                err: null,
	            };
	        }
	        else if (this.bumpIf('>')) {
	            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
	            if (childrenResult.err) {
	                return childrenResult;
	            }
	            var children = childrenResult.val;
	            // Expecting a close tag
	            var endTagStartPosition = this.clonePosition();
	            if (this.bumpIf('</')) {
	                if (this.isEOF() || !_isAlpha(this.char())) {
	                    return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
	                }
	                var closingTagNameStartPosition = this.clonePosition();
	                var closingTagName = this.parseTagName();
	                if (tagName !== closingTagName) {
	                    return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
	                }
	                this.bumpSpace();
	                if (!this.bumpIf('>')) {
	                    return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
	                }
	                return {
	                    val: {
	                        type: TYPE.tag,
	                        value: tagName,
	                        children: children,
	                        location: createLocation(startPosition, this.clonePosition()),
	                    },
	                    err: null,
	                };
	            }
	            else {
	                return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
	            }
	        }
	        else {
	            return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
	        }
	    };
	    /**
	     * This method assumes that the caller has peeked ahead for the first tag character.
	     */
	    Parser.prototype.parseTagName = function () {
	        var startOffset = this.offset();
	        this.bump(); // the first tag name character
	        while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
	            this.bump();
	        }
	        return this.message.slice(startOffset, this.offset());
	    };
	    Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
	        var start = this.clonePosition();
	        var value = '';
	        while (true) {
	            var parseQuoteResult = this.tryParseQuote(parentArgType);
	            if (parseQuoteResult) {
	                value += parseQuoteResult;
	                continue;
	            }
	            var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
	            if (parseUnquotedResult) {
	                value += parseUnquotedResult;
	                continue;
	            }
	            var parseLeftAngleResult = this.tryParseLeftAngleBracket();
	            if (parseLeftAngleResult) {
	                value += parseLeftAngleResult;
	                continue;
	            }
	            break;
	        }
	        var location = createLocation(start, this.clonePosition());
	        return {
	            val: { type: TYPE.literal, value: value, location: location },
	            err: null,
	        };
	    };
	    Parser.prototype.tryParseLeftAngleBracket = function () {
	        if (!this.isEOF() &&
	            this.char() === 60 /* `<` */ &&
	            (this.ignoreTag ||
	                // If at the opening tag or closing tag position, bail.
	                !_isAlphaOrSlash(this.peek() || 0))) {
	            this.bump(); // `<`
	            return '<';
	        }
	        return null;
	    };
	    /**
	     * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
	     * a character that requires quoting (that is, "only where needed"), and works the same in
	     * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
	     */
	    Parser.prototype.tryParseQuote = function (parentArgType) {
	        if (this.isEOF() || this.char() !== 39 /* `'` */) {
	            return null;
	        }
	        // Parse escaped char following the apostrophe, or early return if there is no escaped char.
	        // Check if is valid escaped character
	        switch (this.peek()) {
	            case 39 /* `'` */:
	                // double quote, should return as a single quote.
	                this.bump();
	                this.bump();
	                return "'";
	            // '{', '<', '>', '}'
	            case 123:
	            case 60:
	            case 62:
	            case 125:
	                break;
	            case 35: // '#'
	                if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
	                    break;
	                }
	                return null;
	            default:
	                return null;
	        }
	        this.bump(); // apostrophe
	        var codePoints = [this.char()]; // escaped char
	        this.bump();
	        // read chars until the optional closing apostrophe is found
	        while (!this.isEOF()) {
	            var ch = this.char();
	            if (ch === 39 /* `'` */) {
	                if (this.peek() === 39 /* `'` */) {
	                    codePoints.push(39);
	                    // Bump one more time because we need to skip 2 characters.
	                    this.bump();
	                }
	                else {
	                    // Optional closing apostrophe.
	                    this.bump();
	                    break;
	                }
	            }
	            else {
	                codePoints.push(ch);
	            }
	            this.bump();
	        }
	        return fromCodePoint.apply(void 0, codePoints);
	    };
	    Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
	        if (this.isEOF()) {
	            return null;
	        }
	        var ch = this.char();
	        if (ch === 60 /* `<` */ ||
	            ch === 123 /* `{` */ ||
	            (ch === 35 /* `#` */ &&
	                (parentArgType === 'plural' || parentArgType === 'selectordinal')) ||
	            (ch === 125 /* `}` */ && nestingLevel > 0)) {
	            return null;
	        }
	        else {
	            this.bump();
	            return fromCodePoint(ch);
	        }
	    };
	    Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
	        var openingBracePosition = this.clonePosition();
	        this.bump(); // `{`
	        this.bumpSpace();
	        if (this.isEOF()) {
	            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
	        }
	        if (this.char() === 125 /* `}` */) {
	            this.bump();
	            return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
	        }
	        // argument name
	        var value = this.parseIdentifierIfPossible().value;
	        if (!value) {
	            return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
	        }
	        this.bumpSpace();
	        if (this.isEOF()) {
	            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
	        }
	        switch (this.char()) {
	            // Simple argument: `{name}`
	            case 125 /* `}` */: {
	                this.bump(); // `}`
	                return {
	                    val: {
	                        type: TYPE.argument,
	                        // value does not include the opening and closing braces.
	                        value: value,
	                        location: createLocation(openingBracePosition, this.clonePosition()),
	                    },
	                    err: null,
	                };
	            }
	            // Argument with options: `{name, format, ...}`
	            case 44 /* `,` */: {
	                this.bump(); // `,`
	                this.bumpSpace();
	                if (this.isEOF()) {
	                    return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
	                }
	                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
	            }
	            default:
	                return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
	        }
	    };
	    /**
	     * Advance the parser until the end of the identifier, if it is currently on
	     * an identifier character. Return an empty string otherwise.
	     */
	    Parser.prototype.parseIdentifierIfPossible = function () {
	        var startingPosition = this.clonePosition();
	        var startOffset = this.offset();
	        var value = matchIdentifierAtIndex(this.message, startOffset);
	        var endOffset = startOffset + value.length;
	        this.bumpTo(endOffset);
	        var endPosition = this.clonePosition();
	        var location = createLocation(startingPosition, endPosition);
	        return { value: value, location: location };
	    };
	    Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
	        var _a;
	        // Parse this range:
	        // {name, type, style}
	        //        ^---^
	        var typeStartPosition = this.clonePosition();
	        var argType = this.parseIdentifierIfPossible().value;
	        var typeEndPosition = this.clonePosition();
	        switch (argType) {
	            case '':
	                // Expecting a style string number, date, time, plural, selectordinal, or select.
	                return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
	            case 'number':
	            case 'date':
	            case 'time': {
	                // Parse this range:
	                // {name, number, style}
	                //              ^-------^
	                this.bumpSpace();
	                var styleAndLocation = null;
	                if (this.bumpIf(',')) {
	                    this.bumpSpace();
	                    var styleStartPosition = this.clonePosition();
	                    var result = this.parseSimpleArgStyleIfPossible();
	                    if (result.err) {
	                        return result;
	                    }
	                    var style = trimEnd(result.val);
	                    if (style.length === 0) {
	                        return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
	                    }
	                    var styleLocation = createLocation(styleStartPosition, this.clonePosition());
	                    styleAndLocation = { style: style, styleLocation: styleLocation };
	                }
	                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
	                if (argCloseResult.err) {
	                    return argCloseResult;
	                }
	                var location_1 = createLocation(openingBracePosition, this.clonePosition());
	                // Extract style or skeleton
	                if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
	                    // Skeleton starts with `::`.
	                    var skeleton = trimStart(styleAndLocation.style.slice(2));
	                    if (argType === 'number') {
	                        var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
	                        if (result.err) {
	                            return result;
	                        }
	                        return {
	                            val: { type: TYPE.number, value: value, location: location_1, style: result.val },
	                            err: null,
	                        };
	                    }
	                    else {
	                        if (skeleton.length === 0) {
	                            return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
	                        }
	                        var dateTimePattern = skeleton;
	                        // Get "best match" pattern only if locale is passed, if not, let it
	                        // pass as-is where `parseDateTimeSkeleton()` will throw an error
	                        // for unsupported patterns.
	                        if (this.locale) {
	                            dateTimePattern = getBestPattern(skeleton, this.locale);
	                        }
	                        var style = {
	                            type: SKELETON_TYPE.dateTime,
	                            pattern: dateTimePattern,
	                            location: styleAndLocation.styleLocation,
	                            parsedOptions: this.shouldParseSkeletons
	                                ? parseDateTimeSkeleton(dateTimePattern)
	                                : {},
	                        };
	                        var type = argType === 'date' ? TYPE.date : TYPE.time;
	                        return {
	                            val: { type: type, value: value, location: location_1, style: style },
	                            err: null,
	                        };
	                    }
	                }
	                // Regular style or no style.
	                return {
	                    val: {
	                        type: argType === 'number'
	                            ? TYPE.number
	                            : argType === 'date'
	                                ? TYPE.date
	                                : TYPE.time,
	                        value: value,
	                        location: location_1,
	                        style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null,
	                    },
	                    err: null,
	                };
	            }
	            case 'plural':
	            case 'selectordinal':
	            case 'select': {
	                // Parse this range:
	                // {name, plural, options}
	                //              ^---------^
	                var typeEndPosition_1 = this.clonePosition();
	                this.bumpSpace();
	                if (!this.bumpIf(',')) {
	                    return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, __assign({}, typeEndPosition_1)));
	                }
	                this.bumpSpace();
	                // Parse offset:
	                // {name, plural, offset:1, options}
	                //                ^-----^
	                //
	                // or the first option:
	                //
	                // {name, plural, one {...} other {...}}
	                //                ^--^
	                var identifierAndLocation = this.parseIdentifierIfPossible();
	                var pluralOffset = 0;
	                if (argType !== 'select' && identifierAndLocation.value === 'offset') {
	                    if (!this.bumpIf(':')) {
	                        return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
	                    }
	                    this.bumpSpace();
	                    var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
	                    if (result.err) {
	                        return result;
	                    }
	                    // Parse another identifier for option parsing
	                    this.bumpSpace();
	                    identifierAndLocation = this.parseIdentifierIfPossible();
	                    pluralOffset = result.val;
	                }
	                var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
	                if (optionsResult.err) {
	                    return optionsResult;
	                }
	                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
	                if (argCloseResult.err) {
	                    return argCloseResult;
	                }
	                var location_2 = createLocation(openingBracePosition, this.clonePosition());
	                if (argType === 'select') {
	                    return {
	                        val: {
	                            type: TYPE.select,
	                            value: value,
	                            options: fromEntries(optionsResult.val),
	                            location: location_2,
	                        },
	                        err: null,
	                    };
	                }
	                else {
	                    return {
	                        val: {
	                            type: TYPE.plural,
	                            value: value,
	                            options: fromEntries(optionsResult.val),
	                            offset: pluralOffset,
	                            pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
	                            location: location_2,
	                        },
	                        err: null,
	                    };
	                }
	            }
	            default:
	                return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
	        }
	    };
	    Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
	        // Parse: {value, number, ::currency/GBP }
	        //
	        if (this.isEOF() || this.char() !== 125 /* `}` */) {
	            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
	        }
	        this.bump(); // `}`
	        return { val: true, err: null };
	    };
	    /**
	     * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
	     */
	    Parser.prototype.parseSimpleArgStyleIfPossible = function () {
	        var nestedBraces = 0;
	        var startPosition = this.clonePosition();
	        while (!this.isEOF()) {
	            var ch = this.char();
	            switch (ch) {
	                case 39 /* `'` */: {
	                    // Treat apostrophe as quoting but include it in the style part.
	                    // Find the end of the quoted literal text.
	                    this.bump();
	                    var apostrophePosition = this.clonePosition();
	                    if (!this.bumpUntil("'")) {
	                        return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
	                    }
	                    this.bump();
	                    break;
	                }
	                case 123 /* `{` */: {
	                    nestedBraces += 1;
	                    this.bump();
	                    break;
	                }
	                case 125 /* `}` */: {
	                    if (nestedBraces > 0) {
	                        nestedBraces -= 1;
	                    }
	                    else {
	                        return {
	                            val: this.message.slice(startPosition.offset, this.offset()),
	                            err: null,
	                        };
	                    }
	                    break;
	                }
	                default:
	                    this.bump();
	                    break;
	            }
	        }
	        return {
	            val: this.message.slice(startPosition.offset, this.offset()),
	            err: null,
	        };
	    };
	    Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
	        var tokens = [];
	        try {
	            tokens = parseNumberSkeletonFromString(skeleton);
	        }
	        catch (e) {
	            return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
	        }
	        return {
	            val: {
	                type: SKELETON_TYPE.number,
	                tokens: tokens,
	                location: location,
	                parsedOptions: this.shouldParseSkeletons
	                    ? parseNumberSkeleton(tokens)
	                    : {},
	            },
	            err: null,
	        };
	    };
	    /**
	     * @param nesting_level The current nesting level of messages.
	     *     This can be positive when parsing message fragment in select or plural argument options.
	     * @param parent_arg_type The parent argument's type.
	     * @param parsed_first_identifier If provided, this is the first identifier-like selector of
	     *     the argument. It is a by-product of a previous parsing attempt.
	     * @param expecting_close_tag If true, this message is directly or indirectly nested inside
	     *     between a pair of opening and closing tags. The nested message will not parse beyond
	     *     the closing tag boundary.
	     */
	    Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
	        var _a;
	        var hasOtherClause = false;
	        var options = [];
	        var parsedSelectors = new Set();
	        var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
	        // Parse:
	        // one {one apple}
	        // ^--^
	        while (true) {
	            if (selector.length === 0) {
	                var startPosition = this.clonePosition();
	                if (parentArgType !== 'select' && this.bumpIf('=')) {
	                    // Try parse `={number}` selector
	                    var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
	                    if (result.err) {
	                        return result;
	                    }
	                    selectorLocation = createLocation(startPosition, this.clonePosition());
	                    selector = this.message.slice(startPosition.offset, this.offset());
	                }
	                else {
	                    break;
	                }
	            }
	            // Duplicate selector clauses
	            if (parsedSelectors.has(selector)) {
	                return this.error(parentArgType === 'select'
	                    ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR
	                    : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
	            }
	            if (selector === 'other') {
	                hasOtherClause = true;
	            }
	            // Parse:
	            // one {one apple}
	            //     ^----------^
	            this.bumpSpace();
	            var openingBracePosition = this.clonePosition();
	            if (!this.bumpIf('{')) {
	                return this.error(parentArgType === 'select'
	                    ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
	                    : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
	            }
	            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
	            if (fragmentResult.err) {
	                return fragmentResult;
	            }
	            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
	            if (argCloseResult.err) {
	                return argCloseResult;
	            }
	            options.push([
	                selector,
	                {
	                    value: fragmentResult.val,
	                    location: createLocation(openingBracePosition, this.clonePosition()),
	                },
	            ]);
	            // Keep track of the existing selectors
	            parsedSelectors.add(selector);
	            // Prep next selector clause.
	            this.bumpSpace();
	            (_a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location);
	        }
	        if (options.length === 0) {
	            return this.error(parentArgType === 'select'
	                ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR
	                : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
	        }
	        if (this.requiresOtherClause && !hasOtherClause) {
	            return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
	        }
	        return { val: options, err: null };
	    };
	    Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
	        var sign = 1;
	        var startingPosition = this.clonePosition();
	        if (this.bumpIf('+')) ;
	        else if (this.bumpIf('-')) {
	            sign = -1;
	        }
	        var hasDigits = false;
	        var decimal = 0;
	        while (!this.isEOF()) {
	            var ch = this.char();
	            if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
	                hasDigits = true;
	                decimal = decimal * 10 + (ch - 48);
	                this.bump();
	            }
	            else {
	                break;
	            }
	        }
	        var location = createLocation(startingPosition, this.clonePosition());
	        if (!hasDigits) {
	            return this.error(expectNumberError, location);
	        }
	        decimal *= sign;
	        if (!isSafeInteger(decimal)) {
	            return this.error(invalidNumberError, location);
	        }
	        return { val: decimal, err: null };
	    };
	    Parser.prototype.offset = function () {
	        return this.position.offset;
	    };
	    Parser.prototype.isEOF = function () {
	        return this.offset() === this.message.length;
	    };
	    Parser.prototype.clonePosition = function () {
	        // This is much faster than `Object.assign` or spread.
	        return {
	            offset: this.position.offset,
	            line: this.position.line,
	            column: this.position.column,
	        };
	    };
	    /**
	     * Return the code point at the current position of the parser.
	     * Throws if the index is out of bound.
	     */
	    Parser.prototype.char = function () {
	        var offset = this.position.offset;
	        if (offset >= this.message.length) {
	            throw Error('out of bound');
	        }
	        var code = codePointAt(this.message, offset);
	        if (code === undefined) {
	            throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
	        }
	        return code;
	    };
	    Parser.prototype.error = function (kind, location) {
	        return {
	            val: null,
	            err: {
	                kind: kind,
	                message: this.message,
	                location: location,
	            },
	        };
	    };
	    /** Bump the parser to the next UTF-16 code unit. */
	    Parser.prototype.bump = function () {
	        if (this.isEOF()) {
	            return;
	        }
	        var code = this.char();
	        if (code === 10 /* '\n' */) {
	            this.position.line += 1;
	            this.position.column = 1;
	            this.position.offset += 1;
	        }
	        else {
	            this.position.column += 1;
	            // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
	            this.position.offset += code < 0x10000 ? 1 : 2;
	        }
	    };
	    /**
	     * If the substring starting at the current position of the parser has
	     * the given prefix, then bump the parser to the character immediately
	     * following the prefix and return true. Otherwise, don't bump the parser
	     * and return false.
	     */
	    Parser.prototype.bumpIf = function (prefix) {
	        if (startsWith(this.message, prefix, this.offset())) {
	            for (var i = 0; i < prefix.length; i++) {
	                this.bump();
	            }
	            return true;
	        }
	        return false;
	    };
	    /**
	     * Bump the parser until the pattern character is found and return `true`.
	     * Otherwise bump to the end of the file and return `false`.
	     */
	    Parser.prototype.bumpUntil = function (pattern) {
	        var currentOffset = this.offset();
	        var index = this.message.indexOf(pattern, currentOffset);
	        if (index >= 0) {
	            this.bumpTo(index);
	            return true;
	        }
	        else {
	            this.bumpTo(this.message.length);
	            return false;
	        }
	    };
	    /**
	     * Bump the parser to the target offset.
	     * If target offset is beyond the end of the input, bump the parser to the end of the input.
	     */
	    Parser.prototype.bumpTo = function (targetOffset) {
	        if (this.offset() > targetOffset) {
	            throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
	        }
	        targetOffset = Math.min(targetOffset, this.message.length);
	        while (true) {
	            var offset = this.offset();
	            if (offset === targetOffset) {
	                break;
	            }
	            if (offset > targetOffset) {
	                throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
	            }
	            this.bump();
	            if (this.isEOF()) {
	                break;
	            }
	        }
	    };
	    /** advance the parser through all whitespace to the next non-whitespace code unit. */
	    Parser.prototype.bumpSpace = function () {
	        while (!this.isEOF() && _isWhiteSpace(this.char())) {
	            this.bump();
	        }
	    };
	    /**
	     * Peek at the *next* Unicode codepoint in the input without advancing the parser.
	     * If the input has been exhausted, then this returns null.
	     */
	    Parser.prototype.peek = function () {
	        if (this.isEOF()) {
	            return null;
	        }
	        var code = this.char();
	        var offset = this.offset();
	        var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
	        return nextCode !== null && nextCode !== void 0 ? nextCode : null;
	    };
	    return Parser;
	}());
	/**
	 * This check if codepoint is alphabet (lower & uppercase)
	 * @param codepoint
	 * @returns
	 */
	function _isAlpha(codepoint) {
	    return ((codepoint >= 97 && codepoint <= 122) ||
	        (codepoint >= 65 && codepoint <= 90));
	}
	function _isAlphaOrSlash(codepoint) {
	    return _isAlpha(codepoint) || codepoint === 47; /* '/' */
	}
	/** See `parseTag` function docs. */
	function _isPotentialElementNameChar(c) {
	    return (c === 45 /* '-' */ ||
	        c === 46 /* '.' */ ||
	        (c >= 48 && c <= 57) /* 0..9 */ ||
	        c === 95 /* '_' */ ||
	        (c >= 97 && c <= 122) /** a..z */ ||
	        (c >= 65 && c <= 90) /* A..Z */ ||
	        c == 0xb7 ||
	        (c >= 0xc0 && c <= 0xd6) ||
	        (c >= 0xd8 && c <= 0xf6) ||
	        (c >= 0xf8 && c <= 0x37d) ||
	        (c >= 0x37f && c <= 0x1fff) ||
	        (c >= 0x200c && c <= 0x200d) ||
	        (c >= 0x203f && c <= 0x2040) ||
	        (c >= 0x2070 && c <= 0x218f) ||
	        (c >= 0x2c00 && c <= 0x2fef) ||
	        (c >= 0x3001 && c <= 0xd7ff) ||
	        (c >= 0xf900 && c <= 0xfdcf) ||
	        (c >= 0xfdf0 && c <= 0xfffd) ||
	        (c >= 0x10000 && c <= 0xeffff));
	}
	/**
	 * Code point equivalent of regex `\p{White_Space}`.
	 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
	 */
	function _isWhiteSpace(c) {
	    return ((c >= 0x0009 && c <= 0x000d) ||
	        c === 0x0020 ||
	        c === 0x0085 ||
	        (c >= 0x200e && c <= 0x200f) ||
	        c === 0x2028 ||
	        c === 0x2029);
	}
	/**
	 * Code point equivalent of regex `\p{Pattern_Syntax}`.
	 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
	 */
	function _isPatternSyntax(c) {
	    return ((c >= 0x0021 && c <= 0x0023) ||
	        c === 0x0024 ||
	        (c >= 0x0025 && c <= 0x0027) ||
	        c === 0x0028 ||
	        c === 0x0029 ||
	        c === 0x002a ||
	        c === 0x002b ||
	        c === 0x002c ||
	        c === 0x002d ||
	        (c >= 0x002e && c <= 0x002f) ||
	        (c >= 0x003a && c <= 0x003b) ||
	        (c >= 0x003c && c <= 0x003e) ||
	        (c >= 0x003f && c <= 0x0040) ||
	        c === 0x005b ||
	        c === 0x005c ||
	        c === 0x005d ||
	        c === 0x005e ||
	        c === 0x0060 ||
	        c === 0x007b ||
	        c === 0x007c ||
	        c === 0x007d ||
	        c === 0x007e ||
	        c === 0x00a1 ||
	        (c >= 0x00a2 && c <= 0x00a5) ||
	        c === 0x00a6 ||
	        c === 0x00a7 ||
	        c === 0x00a9 ||
	        c === 0x00ab ||
	        c === 0x00ac ||
	        c === 0x00ae ||
	        c === 0x00b0 ||
	        c === 0x00b1 ||
	        c === 0x00b6 ||
	        c === 0x00bb ||
	        c === 0x00bf ||
	        c === 0x00d7 ||
	        c === 0x00f7 ||
	        (c >= 0x2010 && c <= 0x2015) ||
	        (c >= 0x2016 && c <= 0x2017) ||
	        c === 0x2018 ||
	        c === 0x2019 ||
	        c === 0x201a ||
	        (c >= 0x201b && c <= 0x201c) ||
	        c === 0x201d ||
	        c === 0x201e ||
	        c === 0x201f ||
	        (c >= 0x2020 && c <= 0x2027) ||
	        (c >= 0x2030 && c <= 0x2038) ||
	        c === 0x2039 ||
	        c === 0x203a ||
	        (c >= 0x203b && c <= 0x203e) ||
	        (c >= 0x2041 && c <= 0x2043) ||
	        c === 0x2044 ||
	        c === 0x2045 ||
	        c === 0x2046 ||
	        (c >= 0x2047 && c <= 0x2051) ||
	        c === 0x2052 ||
	        c === 0x2053 ||
	        (c >= 0x2055 && c <= 0x205e) ||
	        (c >= 0x2190 && c <= 0x2194) ||
	        (c >= 0x2195 && c <= 0x2199) ||
	        (c >= 0x219a && c <= 0x219b) ||
	        (c >= 0x219c && c <= 0x219f) ||
	        c === 0x21a0 ||
	        (c >= 0x21a1 && c <= 0x21a2) ||
	        c === 0x21a3 ||
	        (c >= 0x21a4 && c <= 0x21a5) ||
	        c === 0x21a6 ||
	        (c >= 0x21a7 && c <= 0x21ad) ||
	        c === 0x21ae ||
	        (c >= 0x21af && c <= 0x21cd) ||
	        (c >= 0x21ce && c <= 0x21cf) ||
	        (c >= 0x21d0 && c <= 0x21d1) ||
	        c === 0x21d2 ||
	        c === 0x21d3 ||
	        c === 0x21d4 ||
	        (c >= 0x21d5 && c <= 0x21f3) ||
	        (c >= 0x21f4 && c <= 0x22ff) ||
	        (c >= 0x2300 && c <= 0x2307) ||
	        c === 0x2308 ||
	        c === 0x2309 ||
	        c === 0x230a ||
	        c === 0x230b ||
	        (c >= 0x230c && c <= 0x231f) ||
	        (c >= 0x2320 && c <= 0x2321) ||
	        (c >= 0x2322 && c <= 0x2328) ||
	        c === 0x2329 ||
	        c === 0x232a ||
	        (c >= 0x232b && c <= 0x237b) ||
	        c === 0x237c ||
	        (c >= 0x237d && c <= 0x239a) ||
	        (c >= 0x239b && c <= 0x23b3) ||
	        (c >= 0x23b4 && c <= 0x23db) ||
	        (c >= 0x23dc && c <= 0x23e1) ||
	        (c >= 0x23e2 && c <= 0x2426) ||
	        (c >= 0x2427 && c <= 0x243f) ||
	        (c >= 0x2440 && c <= 0x244a) ||
	        (c >= 0x244b && c <= 0x245f) ||
	        (c >= 0x2500 && c <= 0x25b6) ||
	        c === 0x25b7 ||
	        (c >= 0x25b8 && c <= 0x25c0) ||
	        c === 0x25c1 ||
	        (c >= 0x25c2 && c <= 0x25f7) ||
	        (c >= 0x25f8 && c <= 0x25ff) ||
	        (c >= 0x2600 && c <= 0x266e) ||
	        c === 0x266f ||
	        (c >= 0x2670 && c <= 0x2767) ||
	        c === 0x2768 ||
	        c === 0x2769 ||
	        c === 0x276a ||
	        c === 0x276b ||
	        c === 0x276c ||
	        c === 0x276d ||
	        c === 0x276e ||
	        c === 0x276f ||
	        c === 0x2770 ||
	        c === 0x2771 ||
	        c === 0x2772 ||
	        c === 0x2773 ||
	        c === 0x2774 ||
	        c === 0x2775 ||
	        (c >= 0x2794 && c <= 0x27bf) ||
	        (c >= 0x27c0 && c <= 0x27c4) ||
	        c === 0x27c5 ||
	        c === 0x27c6 ||
	        (c >= 0x27c7 && c <= 0x27e5) ||
	        c === 0x27e6 ||
	        c === 0x27e7 ||
	        c === 0x27e8 ||
	        c === 0x27e9 ||
	        c === 0x27ea ||
	        c === 0x27eb ||
	        c === 0x27ec ||
	        c === 0x27ed ||
	        c === 0x27ee ||
	        c === 0x27ef ||
	        (c >= 0x27f0 && c <= 0x27ff) ||
	        (c >= 0x2800 && c <= 0x28ff) ||
	        (c >= 0x2900 && c <= 0x2982) ||
	        c === 0x2983 ||
	        c === 0x2984 ||
	        c === 0x2985 ||
	        c === 0x2986 ||
	        c === 0x2987 ||
	        c === 0x2988 ||
	        c === 0x2989 ||
	        c === 0x298a ||
	        c === 0x298b ||
	        c === 0x298c ||
	        c === 0x298d ||
	        c === 0x298e ||
	        c === 0x298f ||
	        c === 0x2990 ||
	        c === 0x2991 ||
	        c === 0x2992 ||
	        c === 0x2993 ||
	        c === 0x2994 ||
	        c === 0x2995 ||
	        c === 0x2996 ||
	        c === 0x2997 ||
	        c === 0x2998 ||
	        (c >= 0x2999 && c <= 0x29d7) ||
	        c === 0x29d8 ||
	        c === 0x29d9 ||
	        c === 0x29da ||
	        c === 0x29db ||
	        (c >= 0x29dc && c <= 0x29fb) ||
	        c === 0x29fc ||
	        c === 0x29fd ||
	        (c >= 0x29fe && c <= 0x2aff) ||
	        (c >= 0x2b00 && c <= 0x2b2f) ||
	        (c >= 0x2b30 && c <= 0x2b44) ||
	        (c >= 0x2b45 && c <= 0x2b46) ||
	        (c >= 0x2b47 && c <= 0x2b4c) ||
	        (c >= 0x2b4d && c <= 0x2b73) ||
	        (c >= 0x2b74 && c <= 0x2b75) ||
	        (c >= 0x2b76 && c <= 0x2b95) ||
	        c === 0x2b96 ||
	        (c >= 0x2b97 && c <= 0x2bff) ||
	        (c >= 0x2e00 && c <= 0x2e01) ||
	        c === 0x2e02 ||
	        c === 0x2e03 ||
	        c === 0x2e04 ||
	        c === 0x2e05 ||
	        (c >= 0x2e06 && c <= 0x2e08) ||
	        c === 0x2e09 ||
	        c === 0x2e0a ||
	        c === 0x2e0b ||
	        c === 0x2e0c ||
	        c === 0x2e0d ||
	        (c >= 0x2e0e && c <= 0x2e16) ||
	        c === 0x2e17 ||
	        (c >= 0x2e18 && c <= 0x2e19) ||
	        c === 0x2e1a ||
	        c === 0x2e1b ||
	        c === 0x2e1c ||
	        c === 0x2e1d ||
	        (c >= 0x2e1e && c <= 0x2e1f) ||
	        c === 0x2e20 ||
	        c === 0x2e21 ||
	        c === 0x2e22 ||
	        c === 0x2e23 ||
	        c === 0x2e24 ||
	        c === 0x2e25 ||
	        c === 0x2e26 ||
	        c === 0x2e27 ||
	        c === 0x2e28 ||
	        c === 0x2e29 ||
	        (c >= 0x2e2a && c <= 0x2e2e) ||
	        c === 0x2e2f ||
	        (c >= 0x2e30 && c <= 0x2e39) ||
	        (c >= 0x2e3a && c <= 0x2e3b) ||
	        (c >= 0x2e3c && c <= 0x2e3f) ||
	        c === 0x2e40 ||
	        c === 0x2e41 ||
	        c === 0x2e42 ||
	        (c >= 0x2e43 && c <= 0x2e4f) ||
	        (c >= 0x2e50 && c <= 0x2e51) ||
	        c === 0x2e52 ||
	        (c >= 0x2e53 && c <= 0x2e7f) ||
	        (c >= 0x3001 && c <= 0x3003) ||
	        c === 0x3008 ||
	        c === 0x3009 ||
	        c === 0x300a ||
	        c === 0x300b ||
	        c === 0x300c ||
	        c === 0x300d ||
	        c === 0x300e ||
	        c === 0x300f ||
	        c === 0x3010 ||
	        c === 0x3011 ||
	        (c >= 0x3012 && c <= 0x3013) ||
	        c === 0x3014 ||
	        c === 0x3015 ||
	        c === 0x3016 ||
	        c === 0x3017 ||
	        c === 0x3018 ||
	        c === 0x3019 ||
	        c === 0x301a ||
	        c === 0x301b ||
	        c === 0x301c ||
	        c === 0x301d ||
	        (c >= 0x301e && c <= 0x301f) ||
	        c === 0x3020 ||
	        c === 0x3030 ||
	        c === 0xfd3e ||
	        c === 0xfd3f ||
	        (c >= 0xfe45 && c <= 0xfe46));
	}

	function pruneLocation(els) {
	    els.forEach(function (el) {
	        delete el.location;
	        if (isSelectElement(el) || isPluralElement(el)) {
	            for (var k in el.options) {
	                delete el.options[k].location;
	                pruneLocation(el.options[k].value);
	            }
	        }
	        else if (isNumberElement(el) && isNumberSkeleton(el.style)) {
	            delete el.style.location;
	        }
	        else if ((isDateElement(el) || isTimeElement(el)) &&
	            isDateTimeSkeleton(el.style)) {
	            delete el.style.location;
	        }
	        else if (isTagElement(el)) {
	            pruneLocation(el.children);
	        }
	    });
	}
	function parse(message, opts) {
	    if (opts === void 0) { opts = {}; }
	    opts = __assign({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
	    var result = new Parser(message, opts).parse();
	    if (result.err) {
	        var error = SyntaxError(ErrorKind[result.err.kind]);
	        // @ts-expect-error Assign to error object
	        error.location = result.err.location;
	        // @ts-expect-error Assign to error object
	        error.originalMessage = result.err.message;
	        throw error;
	    }
	    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
	        pruneLocation(result.val);
	    }
	    return result.val;
	}

	var ErrorCode;
	(function (ErrorCode) {
	    // When we have a placeholder but no value to format
	    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
	    // When value supplied is invalid
	    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
	    // When we need specific Intl API but it's not available
	    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
	})(ErrorCode || (ErrorCode = {}));
	var FormatError = /** @class */ (function (_super) {
	    __extends(FormatError, _super);
	    function FormatError(msg, code, originalMessage) {
	        var _this = _super.call(this, msg) || this;
	        _this.code = code;
	        _this.originalMessage = originalMessage;
	        return _this;
	    }
	    FormatError.prototype.toString = function () {
	        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
	    };
	    return FormatError;
	}(Error));
	var InvalidValueError = /** @class */ (function (_super) {
	    __extends(InvalidValueError, _super);
	    function InvalidValueError(variableId, value, options, originalMessage) {
	        return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
	    }
	    return InvalidValueError;
	}(FormatError));
	var InvalidValueTypeError = /** @class */ (function (_super) {
	    __extends(InvalidValueTypeError, _super);
	    function InvalidValueTypeError(value, type, originalMessage) {
	        return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
	    }
	    return InvalidValueTypeError;
	}(FormatError));
	var MissingValueError = /** @class */ (function (_super) {
	    __extends(MissingValueError, _super);
	    function MissingValueError(variableId, originalMessage) {
	        return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
	    }
	    return MissingValueError;
	}(FormatError));

	var PART_TYPE;
	(function (PART_TYPE) {
	    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
	    PART_TYPE[PART_TYPE["object"] = 1] = "object";
	})(PART_TYPE || (PART_TYPE = {}));
	function mergeLiteral(parts) {
	    if (parts.length < 2) {
	        return parts;
	    }
	    return parts.reduce(function (all, part) {
	        var lastPart = all[all.length - 1];
	        if (!lastPart ||
	            lastPart.type !== PART_TYPE.literal ||
	            part.type !== PART_TYPE.literal) {
	            all.push(part);
	        }
	        else {
	            lastPart.value += part.value;
	        }
	        return all;
	    }, []);
	}
	function isFormatXMLElementFn(el) {
	    return typeof el === 'function';
	}
	// TODO(skeleton): add skeleton support
	function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
	// For debugging
	originalMessage) {
	    // Hot path for straight simple msg translations
	    if (els.length === 1 && isLiteralElement(els[0])) {
	        return [
	            {
	                type: PART_TYPE.literal,
	                value: els[0].value,
	            },
	        ];
	    }
	    var result = [];
	    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
	        var el = els_1[_i];
	        // Exit early for string parts.
	        if (isLiteralElement(el)) {
	            result.push({
	                type: PART_TYPE.literal,
	                value: el.value,
	            });
	            continue;
	        }
	        // TODO: should this part be literal type?
	        // Replace `#` in plural rules with the actual numeric value.
	        if (isPoundElement(el)) {
	            if (typeof currentPluralValue === 'number') {
	                result.push({
	                    type: PART_TYPE.literal,
	                    value: formatters.getNumberFormat(locales).format(currentPluralValue),
	                });
	            }
	            continue;
	        }
	        var varName = el.value;
	        // Enforce that all required values are provided by the caller.
	        if (!(values && varName in values)) {
	            throw new MissingValueError(varName, originalMessage);
	        }
	        var value = values[varName];
	        if (isArgumentElement(el)) {
	            if (!value || typeof value === 'string' || typeof value === 'number') {
	                value =
	                    typeof value === 'string' || typeof value === 'number'
	                        ? String(value)
	                        : '';
	            }
	            result.push({
	                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
	                value: value,
	            });
	            continue;
	        }
	        // Recursively format plural and select parts' option — which can be a
	        // nested pattern structure. The choosing of the option to use is
	        // abstracted-by and delegated-to the part helper object.
	        if (isDateElement(el)) {
	            var style = typeof el.style === 'string'
	                ? formats.date[el.style]
	                : isDateTimeSkeleton(el.style)
	                    ? el.style.parsedOptions
	                    : undefined;
	            result.push({
	                type: PART_TYPE.literal,
	                value: formatters
	                    .getDateTimeFormat(locales, style)
	                    .format(value),
	            });
	            continue;
	        }
	        if (isTimeElement(el)) {
	            var style = typeof el.style === 'string'
	                ? formats.time[el.style]
	                : isDateTimeSkeleton(el.style)
	                    ? el.style.parsedOptions
	                    : formats.time.medium;
	            result.push({
	                type: PART_TYPE.literal,
	                value: formatters
	                    .getDateTimeFormat(locales, style)
	                    .format(value),
	            });
	            continue;
	        }
	        if (isNumberElement(el)) {
	            var style = typeof el.style === 'string'
	                ? formats.number[el.style]
	                : isNumberSkeleton(el.style)
	                    ? el.style.parsedOptions
	                    : undefined;
	            if (style && style.scale) {
	                value =
	                    value *
	                        (style.scale || 1);
	            }
	            result.push({
	                type: PART_TYPE.literal,
	                value: formatters
	                    .getNumberFormat(locales, style)
	                    .format(value),
	            });
	            continue;
	        }
	        if (isTagElement(el)) {
	            var children = el.children, value_1 = el.value;
	            var formatFn = values[value_1];
	            if (!isFormatXMLElementFn(formatFn)) {
	                throw new InvalidValueTypeError(value_1, 'function', originalMessage);
	            }
	            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
	            var chunks = formatFn(parts.map(function (p) { return p.value; }));
	            if (!Array.isArray(chunks)) {
	                chunks = [chunks];
	            }
	            result.push.apply(result, chunks.map(function (c) {
	                return {
	                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
	                    value: c,
	                };
	            }));
	        }
	        if (isSelectElement(el)) {
	            var opt = el.options[value] || el.options.other;
	            if (!opt) {
	                throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
	            }
	            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
	            continue;
	        }
	        if (isPluralElement(el)) {
	            var opt = el.options["=".concat(value)];
	            if (!opt) {
	                if (!Intl.PluralRules) {
	                    throw new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ErrorCode.MISSING_INTL_API, originalMessage);
	                }
	                var rule = formatters
	                    .getPluralRules(locales, { type: el.pluralType })
	                    .select(value - (el.offset || 0));
	                opt = el.options[rule] || el.options.other;
	            }
	            if (!opt) {
	                throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
	            }
	            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
	            continue;
	        }
	    }
	    return mergeLiteral(result);
	}

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	// -- MessageFormat --------------------------------------------------------
	function mergeConfig(c1, c2) {
	    if (!c2) {
	        return c1;
	    }
	    return __assign(__assign(__assign({}, (c1 || {})), (c2 || {})), Object.keys(c1).reduce(function (all, k) {
	        all[k] = __assign(__assign({}, c1[k]), (c2[k] || {}));
	        return all;
	    }, {}));
	}
	function mergeConfigs(defaultConfig, configs) {
	    if (!configs) {
	        return defaultConfig;
	    }
	    return Object.keys(defaultConfig).reduce(function (all, k) {
	        all[k] = mergeConfig(defaultConfig[k], configs[k]);
	        return all;
	    }, __assign({}, defaultConfig));
	}
	function createFastMemoizeCache$1(store) {
	    return {
	        create: function () {
	            return {
	                get: function (key) {
	                    return store[key];
	                },
	                set: function (key, value) {
	                    store[key] = value;
	                },
	            };
	        },
	    };
	}
	function createDefaultFormatters(cache) {
	    if (cache === void 0) { cache = {
	        number: {},
	        dateTime: {},
	        pluralRules: {},
	    }; }
	    return {
	        getNumberFormat: memoize(function () {
	            var _a;
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            return new ((_a = Intl.NumberFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
	        }, {
	            cache: createFastMemoizeCache$1(cache.number),
	            strategy: strategies.variadic,
	        }),
	        getDateTimeFormat: memoize(function () {
	            var _a;
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
	        }, {
	            cache: createFastMemoizeCache$1(cache.dateTime),
	            strategy: strategies.variadic,
	        }),
	        getPluralRules: memoize(function () {
	            var _a;
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            return new ((_a = Intl.PluralRules).bind.apply(_a, __spreadArray([void 0], args, false)))();
	        }, {
	            cache: createFastMemoizeCache$1(cache.pluralRules),
	            strategy: strategies.variadic,
	        }),
	    };
	}
	var IntlMessageFormat = /** @class */ (function () {
	    function IntlMessageFormat(message, locales, overrideFormats, opts) {
	        if (locales === void 0) { locales = IntlMessageFormat.defaultLocale; }
	        var _this = this;
	        this.formatterCache = {
	            number: {},
	            dateTime: {},
	            pluralRules: {},
	        };
	        this.format = function (values) {
	            var parts = _this.formatToParts(values);
	            // Hot path for straight simple msg translations
	            if (parts.length === 1) {
	                return parts[0].value;
	            }
	            var result = parts.reduce(function (all, part) {
	                if (!all.length ||
	                    part.type !== PART_TYPE.literal ||
	                    typeof all[all.length - 1] !== 'string') {
	                    all.push(part.value);
	                }
	                else {
	                    all[all.length - 1] += part.value;
	                }
	                return all;
	            }, []);
	            if (result.length <= 1) {
	                return result[0] || '';
	            }
	            return result;
	        };
	        this.formatToParts = function (values) {
	            return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
	        };
	        this.resolvedOptions = function () {
	            var _a;
	            return ({
	                locale: ((_a = _this.resolvedLocale) === null || _a === void 0 ? void 0 : _a.toString()) ||
	                    Intl.NumberFormat.supportedLocalesOf(_this.locales)[0],
	            });
	        };
	        this.getAst = function () { return _this.ast; };
	        // Defined first because it's used to build the format pattern.
	        this.locales = locales;
	        this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
	        if (typeof message === 'string') {
	            this.message = message;
	            if (!IntlMessageFormat.__parse) {
	                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
	            }
	            var _a = opts || {}; _a.formatters; var parseOpts = __rest(_a, ["formatters"]);
	            // Parse string messages into an AST.
	            this.ast = IntlMessageFormat.__parse(message, __assign(__assign({}, parseOpts), { locale: this.resolvedLocale }));
	        }
	        else {
	            this.ast = message;
	        }
	        if (!Array.isArray(this.ast)) {
	            throw new TypeError('A message must be provided as a String or AST.');
	        }
	        // Creates a new object with the specified `formats` merged with the default
	        // formats.
	        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
	        this.formatters =
	            (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
	    }
	    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
	        get: function () {
	            if (!IntlMessageFormat.memoizedDefaultLocale) {
	                IntlMessageFormat.memoizedDefaultLocale =
	                    new Intl.NumberFormat().resolvedOptions().locale;
	            }
	            return IntlMessageFormat.memoizedDefaultLocale;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    IntlMessageFormat.memoizedDefaultLocale = null;
	    IntlMessageFormat.resolveLocale = function (locales) {
	        if (typeof Intl.Locale === 'undefined') {
	            return;
	        }
	        var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
	        if (supportedLocales.length > 0) {
	            return new Intl.Locale(supportedLocales[0]);
	        }
	        return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
	    };
	    IntlMessageFormat.__parse = parse;
	    // Default format options used as the prototype of the `formats` provided to the
	    // constructor. These are used when constructing the internal Intl.NumberFormat
	    // and Intl.DateTimeFormat instances.
	    IntlMessageFormat.formats = {
	        number: {
	            integer: {
	                maximumFractionDigits: 0,
	            },
	            currency: {
	                style: 'currency',
	            },
	            percent: {
	                style: 'percent',
	            },
	        },
	        date: {
	            short: {
	                month: 'numeric',
	                day: 'numeric',
	                year: '2-digit',
	            },
	            medium: {
	                month: 'short',
	                day: 'numeric',
	                year: 'numeric',
	            },
	            long: {
	                month: 'long',
	                day: 'numeric',
	                year: 'numeric',
	            },
	            full: {
	                weekday: 'long',
	                month: 'long',
	                day: 'numeric',
	                year: 'numeric',
	            },
	        },
	        time: {
	            short: {
	                hour: 'numeric',
	                minute: 'numeric',
	            },
	            medium: {
	                hour: 'numeric',
	                minute: 'numeric',
	                second: 'numeric',
	            },
	            long: {
	                hour: 'numeric',
	                minute: 'numeric',
	                second: 'numeric',
	                timeZoneName: 'short',
	            },
	            full: {
	                hour: 'numeric',
	                minute: 'numeric',
	                second: 'numeric',
	                timeZoneName: 'short',
	            },
	        },
	    };
	    return IntlMessageFormat;
	}());

	var IntlErrorCode;
	(function (IntlErrorCode) {
	    IntlErrorCode["FORMAT_ERROR"] = "FORMAT_ERROR";
	    IntlErrorCode["UNSUPPORTED_FORMATTER"] = "UNSUPPORTED_FORMATTER";
	    IntlErrorCode["INVALID_CONFIG"] = "INVALID_CONFIG";
	    IntlErrorCode["MISSING_DATA"] = "MISSING_DATA";
	    IntlErrorCode["MISSING_TRANSLATION"] = "MISSING_TRANSLATION";
	})(IntlErrorCode || (IntlErrorCode = {}));
	var IntlError = /** @class */ (function (_super) {
	    __extends(IntlError, _super);
	    function IntlError(code, message, exception) {
	        var _this = this;
	        var err = exception
	            ? exception instanceof Error
	                ? exception
	                : new Error(String(exception))
	            : undefined;
	        _this = _super.call(this, "[@formatjs/intl Error ".concat(code, "] ").concat(message, "\n").concat(err ? "\n".concat(err.message, "\n").concat(err.stack) : '')) || this;
	        _this.code = code;
	        // @ts-ignore just so we don't need to declare dep on @types/node
	        if (typeof Error.captureStackTrace === 'function') {
	            // @ts-ignore just so we don't need to declare dep on @types/node
	            Error.captureStackTrace(_this, IntlError);
	        }
	        return _this;
	    }
	    return IntlError;
	}(Error));
	var UnsupportedFormatterError = /** @class */ (function (_super) {
	    __extends(UnsupportedFormatterError, _super);
	    function UnsupportedFormatterError(message, exception) {
	        return _super.call(this, IntlErrorCode.UNSUPPORTED_FORMATTER, message, exception) || this;
	    }
	    return UnsupportedFormatterError;
	}(IntlError));
	var InvalidConfigError = /** @class */ (function (_super) {
	    __extends(InvalidConfigError, _super);
	    function InvalidConfigError(message, exception) {
	        return _super.call(this, IntlErrorCode.INVALID_CONFIG, message, exception) || this;
	    }
	    return InvalidConfigError;
	}(IntlError));
	var MissingDataError = /** @class */ (function (_super) {
	    __extends(MissingDataError, _super);
	    function MissingDataError(message, exception) {
	        return _super.call(this, IntlErrorCode.MISSING_DATA, message, exception) || this;
	    }
	    return MissingDataError;
	}(IntlError));
	var IntlFormatError = /** @class */ (function (_super) {
	    __extends(IntlFormatError, _super);
	    function IntlFormatError(message, locale, exception) {
	        var _this = _super.call(this, IntlErrorCode.FORMAT_ERROR, "".concat(message, "\nLocale: ").concat(locale, "\n"), exception) || this;
	        _this.locale = locale;
	        return _this;
	    }
	    return IntlFormatError;
	}(IntlError));
	var MessageFormatError = /** @class */ (function (_super) {
	    __extends(MessageFormatError, _super);
	    function MessageFormatError(message, locale, descriptor, exception) {
	        var _this = _super.call(this, "".concat(message, "\nMessageID: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.id, "\nDefault Message: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.defaultMessage, "\nDescription: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.description, "\n"), locale, exception) || this;
	        _this.descriptor = descriptor;
	        _this.locale = locale;
	        return _this;
	    }
	    return MessageFormatError;
	}(IntlFormatError));
	var MissingTranslationError = /** @class */ (function (_super) {
	    __extends(MissingTranslationError, _super);
	    function MissingTranslationError(descriptor, locale) {
	        var _this = _super.call(this, IntlErrorCode.MISSING_TRANSLATION, "Missing message: \"".concat(descriptor.id, "\" for locale \"").concat(locale, "\", using ").concat(descriptor.defaultMessage
	            ? "default message (".concat(typeof descriptor.defaultMessage === 'string'
	                ? descriptor.defaultMessage
	                : descriptor.defaultMessage
	                    .map(function (e) { var _a; return (_a = e.value) !== null && _a !== void 0 ? _a : JSON.stringify(e); })
	                    .join(), ")")
	            : 'id', " as fallback.")) || this;
	        _this.descriptor = descriptor;
	        return _this;
	    }
	    return MissingTranslationError;
	}(IntlError));

	function invariant$1(condition, message, Err) {
	    if (Err === void 0) { Err = Error; }
	    if (!condition) {
	        throw new Err(message);
	    }
	}
	function filterProps(props, allowlist, defaults) {
	    if (defaults === void 0) { defaults = {}; }
	    return allowlist.reduce(function (filtered, name) {
	        if (name in props) {
	            filtered[name] = props[name];
	        }
	        else if (name in defaults) {
	            filtered[name] = defaults[name];
	        }
	        return filtered;
	    }, {});
	}
	var defaultErrorHandler = function (error) {
	};
	var defaultWarnHandler = function (warning) {
	};
	var DEFAULT_INTL_CONFIG$1 = {
	    formats: {},
	    messages: {},
	    timeZone: undefined,
	    defaultLocale: 'en',
	    defaultFormats: {},
	    fallbackOnEmptyString: true,
	    onError: defaultErrorHandler,
	    onWarn: defaultWarnHandler,
	};
	function createIntlCache() {
	    return {
	        dateTime: {},
	        number: {},
	        message: {},
	        relativeTime: {},
	        pluralRules: {},
	        list: {},
	        displayNames: {},
	    };
	}
	function createFastMemoizeCache(store) {
	    return {
	        create: function () {
	            return {
	                get: function (key) {
	                    return store[key];
	                },
	                set: function (key, value) {
	                    store[key] = value;
	                },
	            };
	        },
	    };
	}
	/**
	 * Create intl formatters and populate cache
	 * @param cache explicit cache to prevent leaking memory
	 */
	function createFormatters(cache) {
	    if (cache === void 0) { cache = createIntlCache(); }
	    var RelativeTimeFormat = Intl.RelativeTimeFormat;
	    var ListFormat = Intl.ListFormat;
	    var DisplayNames = Intl.DisplayNames;
	    var getDateTimeFormat = memoize(function () {
	        var _a;
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        return new ((_a = Intl.DateTimeFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
	    }, {
	        cache: createFastMemoizeCache(cache.dateTime),
	        strategy: strategies.variadic,
	    });
	    var getNumberFormat = memoize(function () {
	        var _a;
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        return new ((_a = Intl.NumberFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
	    }, {
	        cache: createFastMemoizeCache(cache.number),
	        strategy: strategies.variadic,
	    });
	    var getPluralRules = memoize(function () {
	        var _a;
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        return new ((_a = Intl.PluralRules).bind.apply(_a, __spreadArray([void 0], args, false)))();
	    }, {
	        cache: createFastMemoizeCache(cache.pluralRules),
	        strategy: strategies.variadic,
	    });
	    return {
	        getDateTimeFormat: getDateTimeFormat,
	        getNumberFormat: getNumberFormat,
	        getMessageFormat: memoize(function (message, locales, overrideFormats, opts) {
	            return new IntlMessageFormat(message, locales, overrideFormats, __assign({ formatters: {
	                    getNumberFormat: getNumberFormat,
	                    getDateTimeFormat: getDateTimeFormat,
	                    getPluralRules: getPluralRules,
	                } }, (opts || {})));
	        }, {
	            cache: createFastMemoizeCache(cache.message),
	            strategy: strategies.variadic,
	        }),
	        getRelativeTimeFormat: memoize(function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            return new (RelativeTimeFormat.bind.apply(RelativeTimeFormat, __spreadArray([void 0], args, false)))();
	        }, {
	            cache: createFastMemoizeCache(cache.relativeTime),
	            strategy: strategies.variadic,
	        }),
	        getPluralRules: getPluralRules,
	        getListFormat: memoize(function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            return new (ListFormat.bind.apply(ListFormat, __spreadArray([void 0], args, false)))();
	        }, {
	            cache: createFastMemoizeCache(cache.list),
	            strategy: strategies.variadic,
	        }),
	        getDisplayNames: memoize(function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            return new (DisplayNames.bind.apply(DisplayNames, __spreadArray([void 0], args, false)))();
	        }, {
	            cache: createFastMemoizeCache(cache.displayNames),
	            strategy: strategies.variadic,
	        }),
	    };
	}
	function getNamedFormat(formats, type, name, onError) {
	    var formatType = formats && formats[type];
	    var format;
	    if (formatType) {
	        format = formatType[name];
	    }
	    if (format) {
	        return format;
	    }
	    onError(new UnsupportedFormatterError("No ".concat(type, " format named: ").concat(name)));
	}

	function setTimeZoneInOptions(opts, timeZone) {
	    return Object.keys(opts).reduce(function (all, k) {
	        all[k] = __assign({ timeZone: timeZone }, opts[k]);
	        return all;
	    }, {});
	}
	function deepMergeOptions(opts1, opts2) {
	    var keys = Object.keys(__assign(__assign({}, opts1), opts2));
	    return keys.reduce(function (all, k) {
	        all[k] = __assign(__assign({}, (opts1[k] || {})), (opts2[k] || {}));
	        return all;
	    }, {});
	}
	function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
	    if (!timeZone) {
	        return f1;
	    }
	    var mfFormats = IntlMessageFormat.formats;
	    return __assign(__assign(__assign({}, mfFormats), f1), { date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)), time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone)) });
	}
	var formatMessage$1 = function (_a, state, messageDescriptor, values, opts) {
	    var locale = _a.locale, formats = _a.formats, messages = _a.messages, defaultLocale = _a.defaultLocale, defaultFormats = _a.defaultFormats, fallbackOnEmptyString = _a.fallbackOnEmptyString, onError = _a.onError, timeZone = _a.timeZone, defaultRichTextElements = _a.defaultRichTextElements;
	    if (messageDescriptor === void 0) { messageDescriptor = { id: '' }; }
	    var msgId = messageDescriptor.id, defaultMessage = messageDescriptor.defaultMessage;
	    // `id` is a required field of a Message Descriptor.
	    invariant$1(!!msgId, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
	    var id = String(msgId);
	    var message = 
	    // In case messages is Object.create(null)
	    // e.g import('foo.json') from webpack)
	    // See https://github.com/formatjs/formatjs/issues/1914
	    messages &&
	        Object.prototype.hasOwnProperty.call(messages, id) &&
	        messages[id];
	    // IMPORTANT: Hot path if `message` is AST with a single literal node
	    if (Array.isArray(message) &&
	        message.length === 1 &&
	        message[0].type === TYPE.literal) {
	        return message[0].value;
	    }
	    // IMPORTANT: Hot path straight lookup for performance
	    if (!values &&
	        message &&
	        typeof message === 'string' &&
	        !defaultRichTextElements) {
	        return message.replace(/'\{(.*?)\}'/gi, "{$1}");
	    }
	    values = __assign(__assign({}, defaultRichTextElements), (values || {}));
	    formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
	    defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
	    if (!message) {
	        if (fallbackOnEmptyString === false && message === '') {
	            return message;
	        }
	        if (!defaultMessage ||
	            (locale && locale.toLowerCase() !== defaultLocale.toLowerCase())) {
	            // This prevents warnings from littering the console in development
	            // when no `messages` are passed into the <IntlProvider> for the
	            // default locale.
	            onError(new MissingTranslationError(messageDescriptor, locale));
	        }
	        if (defaultMessage) {
	            try {
	                var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
	                return formatter.format(values);
	            }
	            catch (e) {
	                onError(new MessageFormatError("Error formatting default message for: \"".concat(id, "\", rendering default message verbatim"), locale, messageDescriptor, e));
	                return typeof defaultMessage === 'string' ? defaultMessage : id;
	            }
	        }
	        return id;
	    }
	    // We have the translated message
	    try {
	        var formatter = state.getMessageFormat(message, locale, formats, __assign({ formatters: state }, (opts || {})));
	        return formatter.format(values);
	    }
	    catch (e) {
	        onError(new MessageFormatError("Error formatting message: \"".concat(id, "\", using ").concat(defaultMessage ? 'default message' : 'id', " as fallback."), locale, messageDescriptor, e));
	    }
	    if (defaultMessage) {
	        try {
	            var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
	            return formatter.format(values);
	        }
	        catch (e) {
	            onError(new MessageFormatError("Error formatting the default message for: \"".concat(id, "\", rendering message verbatim"), locale, messageDescriptor, e));
	        }
	    }
	    if (typeof message === 'string') {
	        return message;
	    }
	    if (typeof defaultMessage === 'string') {
	        return defaultMessage;
	    }
	    return id;
	};

	var DATE_TIME_FORMAT_OPTIONS = [
	    'formatMatcher',
	    'timeZone',
	    'hour12',
	    'weekday',
	    'era',
	    'year',
	    'month',
	    'day',
	    'hour',
	    'minute',
	    'second',
	    'timeZoneName',
	    'hourCycle',
	    'dateStyle',
	    'timeStyle',
	    'calendar',
	    // 'dayPeriod',
	    'numberingSystem',
	    'fractionalSecondDigits',
	];
	function getFormatter$2(_a, type, getDateTimeFormat, options) {
	    var locale = _a.locale, formats = _a.formats, onError = _a.onError, timeZone = _a.timeZone;
	    if (options === void 0) { options = {}; }
	    var format = options.format;
	    var defaults = __assign(__assign({}, (timeZone && { timeZone: timeZone })), (format && getNamedFormat(formats, type, format, onError)));
	    var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults);
	    if (type === 'time' &&
	        !filteredOptions.hour &&
	        !filteredOptions.minute &&
	        !filteredOptions.second &&
	        !filteredOptions.timeStyle &&
	        !filteredOptions.dateStyle) {
	        // Add default formatting options if hour, minute, or second isn't defined.
	        filteredOptions = __assign(__assign({}, filteredOptions), { hour: 'numeric', minute: 'numeric' });
	    }
	    return getDateTimeFormat(locale, filteredOptions);
	}
	function formatDate(config, getDateTimeFormat) {
	    var _a = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        _a[_i - 2] = arguments[_i];
	    }
	    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
	    var date = typeof value === 'string' ? new Date(value || 0) : value;
	    try {
	        return getFormatter$2(config, 'date', getDateTimeFormat, options).format(date);
	    }
	    catch (e) {
	        config.onError(new IntlFormatError('Error formatting date.', config.locale, e));
	    }
	    return String(date);
	}
	function formatTime(config, getDateTimeFormat) {
	    var _a = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        _a[_i - 2] = arguments[_i];
	    }
	    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
	    var date = typeof value === 'string' ? new Date(value || 0) : value;
	    try {
	        return getFormatter$2(config, 'time', getDateTimeFormat, options).format(date);
	    }
	    catch (e) {
	        config.onError(new IntlFormatError('Error formatting time.', config.locale, e));
	    }
	    return String(date);
	}
	function formatDateTimeRange(config, getDateTimeFormat) {
	    var _a = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        _a[_i - 2] = arguments[_i];
	    }
	    var from = _a[0], to = _a[1], _b = _a[2], options = _b === void 0 ? {} : _b;
	    var timeZone = config.timeZone, locale = config.locale, onError = config.onError;
	    var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, timeZone ? { timeZone: timeZone } : {});
	    try {
	        return getDateTimeFormat(locale, filteredOptions).formatRange(from, to);
	    }
	    catch (e) {
	        onError(new IntlFormatError('Error formatting date time range.', config.locale, e));
	    }
	    return String(from);
	}
	function formatDateToParts(config, getDateTimeFormat) {
	    var _a = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        _a[_i - 2] = arguments[_i];
	    }
	    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
	    var date = typeof value === 'string' ? new Date(value || 0) : value;
	    try {
	        return getFormatter$2(config, 'date', getDateTimeFormat, options).formatToParts(date); // TODO: remove this when https://github.com/microsoft/TypeScript/pull/50402 is merged
	    }
	    catch (e) {
	        config.onError(new IntlFormatError('Error formatting date.', config.locale, e));
	    }
	    return [];
	}
	function formatTimeToParts(config, getDateTimeFormat) {
	    var _a = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        _a[_i - 2] = arguments[_i];
	    }
	    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
	    var date = typeof value === 'string' ? new Date(value || 0) : value;
	    try {
	        return getFormatter$2(config, 'time', getDateTimeFormat, options).formatToParts(date); // TODO: remove this when https://github.com/microsoft/TypeScript/pull/50402 is merged
	    }
	    catch (e) {
	        config.onError(new IntlFormatError('Error formatting time.', config.locale, e));
	    }
	    return [];
	}

	var DISPLAY_NAMES_OPTONS = [
	    'style',
	    'type',
	    'fallback',
	    'languageDisplay',
	];
	function formatDisplayName(_a, getDisplayNames, value, options) {
	    var locale = _a.locale, onError = _a.onError;
	    var DisplayNames = Intl.DisplayNames;
	    if (!DisplayNames) {
	        onError(new FormatError("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", ErrorCode.MISSING_INTL_API));
	    }
	    var filteredOptions = filterProps(options, DISPLAY_NAMES_OPTONS);
	    try {
	        return getDisplayNames(locale, filteredOptions).of(value);
	    }
	    catch (e) {
	        onError(new IntlFormatError('Error formatting display name.', locale, e));
	    }
	}

	var LIST_FORMAT_OPTIONS = [
	    'type',
	    'style',
	];
	var now = Date.now();
	function generateToken(i) {
	    return "".concat(now, "_").concat(i, "_").concat(now);
	}
	function formatList(opts, getListFormat, values, options) {
	    if (options === void 0) { options = {}; }
	    var results = formatListToParts(opts, getListFormat, values, options).reduce(function (all, el) {
	        var val = el.value;
	        if (typeof val !== 'string') {
	            all.push(val);
	        }
	        else if (typeof all[all.length - 1] === 'string') {
	            all[all.length - 1] += val;
	        }
	        else {
	            all.push(val);
	        }
	        return all;
	    }, []);
	    return results.length === 1 ? results[0] : results.length === 0 ? '' : results;
	}
	function formatListToParts(_a, getListFormat, values, options) {
	    var locale = _a.locale, onError = _a.onError;
	    if (options === void 0) { options = {}; }
	    var ListFormat = Intl.ListFormat;
	    if (!ListFormat) {
	        onError(new FormatError("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", ErrorCode.MISSING_INTL_API));
	    }
	    var filteredOptions = filterProps(options, LIST_FORMAT_OPTIONS);
	    try {
	        var richValues_1 = {};
	        var serializedValues = values.map(function (v, i) {
	            if (typeof v === 'object') {
	                var id = generateToken(i);
	                richValues_1[id] = v;
	                return id;
	            }
	            return String(v);
	        });
	        return getListFormat(locale, filteredOptions)
	            .formatToParts(serializedValues)
	            .map(function (part) {
	            return (part.type === 'literal'
	                ? part
	                : __assign(__assign({}, part), { value: richValues_1[part.value] || part.value }));
	        });
	    }
	    catch (e) {
	        onError(new IntlFormatError('Error formatting list.', locale, e));
	    }
	    // @ts-ignore
	    return values;
	}

	var PLURAL_FORMAT_OPTIONS = ['type'];
	function formatPlural(_a, getPluralRules, value, options) {
	    var locale = _a.locale, onError = _a.onError;
	    if (options === void 0) { options = {}; }
	    if (!Intl.PluralRules) {
	        onError(new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ErrorCode.MISSING_INTL_API));
	    }
	    var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
	    try {
	        return getPluralRules(locale, filteredOptions).select(value);
	    }
	    catch (e) {
	        onError(new IntlFormatError('Error formatting plural.', locale, e));
	    }
	    return 'other';
	}

	var RELATIVE_TIME_FORMAT_OPTIONS = ['numeric', 'style'];
	function getFormatter$1(_a, getRelativeTimeFormat, options) {
	    var locale = _a.locale, formats = _a.formats, onError = _a.onError;
	    if (options === void 0) { options = {}; }
	    var format = options.format;
	    var defaults = (!!format && getNamedFormat(formats, 'relative', format, onError)) || {};
	    var filteredOptions = filterProps(options, RELATIVE_TIME_FORMAT_OPTIONS, defaults);
	    return getRelativeTimeFormat(locale, filteredOptions);
	}
	function formatRelativeTime(config, getRelativeTimeFormat, value, unit, options) {
	    if (options === void 0) { options = {}; }
	    if (!unit) {
	        unit = 'second';
	    }
	    var RelativeTimeFormat = Intl.RelativeTimeFormat;
	    if (!RelativeTimeFormat) {
	        config.onError(new FormatError("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", ErrorCode.MISSING_INTL_API));
	    }
	    try {
	        return getFormatter$1(config, getRelativeTimeFormat, options).format(value, unit);
	    }
	    catch (e) {
	        config.onError(new IntlFormatError('Error formatting relative time.', config.locale, e));
	    }
	    return String(value);
	}

	var NUMBER_FORMAT_OPTIONS = [
	    'style',
	    'currency',
	    'unit',
	    'unitDisplay',
	    'useGrouping',
	    'minimumIntegerDigits',
	    'minimumFractionDigits',
	    'maximumFractionDigits',
	    'minimumSignificantDigits',
	    'maximumSignificantDigits',
	    // ES2020 NumberFormat
	    'compactDisplay',
	    'currencyDisplay',
	    'currencySign',
	    'notation',
	    'signDisplay',
	    'unit',
	    'unitDisplay',
	    'numberingSystem',
	    // ES2023 NumberFormat
	    // @ts-expect-error: TypeScript doesn't know about this yet
	    'trailingZeroDisplay',
	    // @ts-expect-error: TypeScript doesn't know about this yet
	    'roundingPriority',
	    // @ts-expect-error: TypeScript doesn't know about this yet
	    'roundingIncrement',
	    // @ts-expect-error: TypeScript doesn't know about this yet
	    'roundingMode',
	];
	function getFormatter(_a, getNumberFormat, options) {
	    var locale = _a.locale, formats = _a.formats, onError = _a.onError;
	    if (options === void 0) { options = {}; }
	    var format = options.format;
	    var defaults = ((format &&
	        getNamedFormat(formats, 'number', format, onError)) ||
	        {});
	    var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults);
	    return getNumberFormat(locale, filteredOptions);
	}
	function formatNumber(config, getNumberFormat, value, options) {
	    if (options === void 0) { options = {}; }
	    try {
	        return getFormatter(config, getNumberFormat, options).format(value);
	    }
	    catch (e) {
	        config.onError(new IntlFormatError('Error formatting number.', config.locale, e));
	    }
	    return String(value);
	}
	function formatNumberToParts(config, getNumberFormat, value, options) {
	    if (options === void 0) { options = {}; }
	    try {
	        return getFormatter(config, getNumberFormat, options).formatToParts(value);
	    }
	    catch (e) {
	        config.onError(new IntlFormatError('Error formatting number.', config.locale, e));
	    }
	    return [];
	}

	function messagesContainString(messages) {
	    var firstMessage = messages ? messages[Object.keys(messages)[0]] : undefined;
	    return typeof firstMessage === 'string';
	}
	function verifyConfigMessages(config) {
	    if (config.onWarn &&
	        config.defaultRichTextElements &&
	        messagesContainString(config.messages || {})) {
	        config.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution");
	    }
	}
	/**
	 * Create intl object
	 * @param config intl config
	 * @param cache cache for formatter instances to prevent memory leak
	 */
	function createIntl$1(config, cache) {
	    var formatters = createFormatters(cache);
	    var resolvedConfig = __assign(__assign({}, DEFAULT_INTL_CONFIG$1), config);
	    var locale = resolvedConfig.locale, defaultLocale = resolvedConfig.defaultLocale, onError = resolvedConfig.onError;
	    if (!locale) {
	        if (onError) {
	            onError(new InvalidConfigError("\"locale\" was not configured, using \"".concat(defaultLocale, "\" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details")));
	        }
	        // Since there's no registered locale data for `locale`, this will
	        // fallback to the `defaultLocale` to make sure things can render.
	        // The `messages` are overridden to the `defaultProps` empty object
	        // to maintain referential equality across re-renders. It's assumed
	        // each <FormattedMessage> contains a `defaultMessage` prop.
	        resolvedConfig.locale = resolvedConfig.defaultLocale || 'en';
	    }
	    else if (!Intl.NumberFormat.supportedLocalesOf(locale).length && onError) {
	        onError(new MissingDataError("Missing locale data for locale: \"".concat(locale, "\" in Intl.NumberFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details")));
	    }
	    else if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length &&
	        onError) {
	        onError(new MissingDataError("Missing locale data for locale: \"".concat(locale, "\" in Intl.DateTimeFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details")));
	    }
	    verifyConfigMessages(resolvedConfig);
	    return __assign(__assign({}, resolvedConfig), { formatters: formatters, formatNumber: formatNumber.bind(null, resolvedConfig, formatters.getNumberFormat), formatNumberToParts: formatNumberToParts.bind(null, resolvedConfig, formatters.getNumberFormat), formatRelativeTime: formatRelativeTime.bind(null, resolvedConfig, formatters.getRelativeTimeFormat), formatDate: formatDate.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateToParts: formatDateToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTime: formatTime.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateTimeRange: formatDateTimeRange.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTimeToParts: formatTimeToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatPlural: formatPlural.bind(null, resolvedConfig, formatters.getPluralRules), formatMessage: formatMessage$1.bind(null, resolvedConfig, formatters), $t: formatMessage$1.bind(null, resolvedConfig, formatters), formatList: formatList.bind(null, resolvedConfig, formatters.getListFormat), formatListToParts: formatListToParts.bind(null, resolvedConfig, formatters.getListFormat), formatDisplayName: formatDisplayName.bind(null, resolvedConfig, formatters.getDisplayNames) });
	}

	function invariant(condition, message, Err) {
	    if (Err === void 0) { Err = Error; }
	    if (!condition) {
	        throw new Err(message);
	    }
	}
	function invariantIntlContext(intl) {
	    invariant(intl, '[React Intl] Could not find required `intl` object. ' +
	        '<IntlProvider> needs to exist in the component ancestry.');
	}
	var DEFAULT_INTL_CONFIG = __assign(__assign({}, DEFAULT_INTL_CONFIG$1), { textComponent: reactExports.Fragment });
	/**
	 * Takes a `formatXMLElementFn`, and composes it in function, which passes
	 * argument `parts` through, assigning unique key to each part, to prevent
	 * "Each child in a list should have a unique "key"" React error.
	 * @param formatXMLElementFn
	 */
	function assignUniqueKeysToParts(formatXMLElementFn) {
	    return function (parts) {
	        // eslint-disable-next-line prefer-rest-params
	        return formatXMLElementFn(reactExports.Children.toArray(parts));
	    };
	}
	function shallowEqual(objA, objB) {
	    if (objA === objB) {
	        return true;
	    }
	    if (!objA || !objB) {
	        return false;
	    }
	    var aKeys = Object.keys(objA);
	    var bKeys = Object.keys(objB);
	    var len = aKeys.length;
	    if (bKeys.length !== len) {
	        return false;
	    }
	    for (var i = 0; i < len; i++) {
	        var key = aKeys[i];
	        if (objA[key] !== objB[key] ||
	            !Object.prototype.hasOwnProperty.call(objB, key)) {
	            return false;
	        }
	    }
	    return true;
	}

	var reactIs = {exports: {}};

	var reactIs_production_min = {};

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactIs_production_min;

	function requireReactIs_production_min () {
		if (hasRequiredReactIs_production_min) return reactIs_production_min;
		hasRequiredReactIs_production_min = 1;
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
		Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
		function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
		reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
		reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
		reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
		return reactIs_production_min;
	}

	var hasRequiredReactIs;

	function requireReactIs () {
		if (hasRequiredReactIs) return reactIs.exports;
		hasRequiredReactIs = 1;

		{
		  reactIs.exports = requireReactIs_production_min();
		}
		return reactIs.exports;
	}

	var hoistNonReactStatics_cjs;
	var hasRequiredHoistNonReactStatics_cjs;

	function requireHoistNonReactStatics_cjs () {
		if (hasRequiredHoistNonReactStatics_cjs) return hoistNonReactStatics_cjs;
		hasRequiredHoistNonReactStatics_cjs = 1;

		var reactIs = requireReactIs();

		/**
		 * Copyright 2015, Yahoo! Inc.
		 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
		 */
		var REACT_STATICS = {
		  childContextTypes: true,
		  contextType: true,
		  contextTypes: true,
		  defaultProps: true,
		  displayName: true,
		  getDefaultProps: true,
		  getDerivedStateFromError: true,
		  getDerivedStateFromProps: true,
		  mixins: true,
		  propTypes: true,
		  type: true
		};
		var KNOWN_STATICS = {
		  name: true,
		  length: true,
		  prototype: true,
		  caller: true,
		  callee: true,
		  arguments: true,
		  arity: true
		};
		var FORWARD_REF_STATICS = {
		  '$$typeof': true,
		  render: true,
		  defaultProps: true,
		  displayName: true,
		  propTypes: true
		};
		var MEMO_STATICS = {
		  '$$typeof': true,
		  compare: true,
		  defaultProps: true,
		  displayName: true,
		  propTypes: true,
		  type: true
		};
		var TYPE_STATICS = {};
		TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
		TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

		function getStatics(component) {
		  // React v16.11 and below
		  if (reactIs.isMemo(component)) {
		    return MEMO_STATICS;
		  } // React v16.12 and above


		  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
		}

		var defineProperty = Object.defineProperty;
		var getOwnPropertyNames = Object.getOwnPropertyNames;
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		var getPrototypeOf = Object.getPrototypeOf;
		var objectPrototype = Object.prototype;
		function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
		  if (typeof sourceComponent !== 'string') {
		    // don't hoist over string (html) components
		    if (objectPrototype) {
		      var inheritedComponent = getPrototypeOf(sourceComponent);

		      if (inheritedComponent && inheritedComponent !== objectPrototype) {
		        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
		      }
		    }

		    var keys = getOwnPropertyNames(sourceComponent);

		    if (getOwnPropertySymbols) {
		      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
		    }

		    var targetStatics = getStatics(targetComponent);
		    var sourceStatics = getStatics(sourceComponent);

		    for (var i = 0; i < keys.length; ++i) {
		      var key = keys[i];

		      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
		        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

		        try {
		          // Avoid failures from read-only properties
		          defineProperty(targetComponent, key, descriptor);
		        } catch (e) {}
		      }
		    }
		  }

		  return targetComponent;
		}

		hoistNonReactStatics_cjs = hoistNonReactStatics;
		return hoistNonReactStatics_cjs;
	}

	requireHoistNonReactStatics_cjs();

	// This is primarily dealing with packaging systems where multiple copies of react-intl
	// might exist
	var IntlContext = typeof window !== 'undefined' && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__
	    ? window.__REACT_INTL_CONTEXT__ ||
	        (window.__REACT_INTL_CONTEXT__ = reactExports.createContext(null))
	    : reactExports.createContext(null);
	IntlContext.Consumer; var IntlProvider$1 = IntlContext.Provider;
	var Provider = IntlProvider$1;
	var Context = IntlContext;

	function useIntl() {
	    var intl = reactExports.useContext(Context);
	    invariantIntlContext(intl);
	    return intl;
	}

	var DisplayName;
	(function (DisplayName) {
	    DisplayName["formatDate"] = "FormattedDate";
	    DisplayName["formatTime"] = "FormattedTime";
	    DisplayName["formatNumber"] = "FormattedNumber";
	    DisplayName["formatList"] = "FormattedList";
	    // Note that this DisplayName is the locale display name, not to be confused with
	    // the name of the enum, which is for React component display name in dev tools.
	    DisplayName["formatDisplayName"] = "FormattedDisplayName";
	})(DisplayName || (DisplayName = {}));
	var DisplayNameParts;
	(function (DisplayNameParts) {
	    DisplayNameParts["formatDate"] = "FormattedDateParts";
	    DisplayNameParts["formatTime"] = "FormattedTimeParts";
	    DisplayNameParts["formatNumber"] = "FormattedNumberParts";
	    DisplayNameParts["formatList"] = "FormattedListParts";
	})(DisplayNameParts || (DisplayNameParts = {}));
	function createFormattedDateTimePartsComponent(name) {
	    var ComponentParts = function (props) {
	        var intl = useIntl();
	        var value = props.value, children = props.children, formatProps = __rest(props, ["value", "children"]);
	        var date = typeof value === 'string' ? new Date(value || 0) : value;
	        var formattedParts = name === 'formatDate'
	            ? intl.formatDateToParts(date, formatProps)
	            : intl.formatTimeToParts(date, formatProps);
	        return children(formattedParts);
	    };
	    ComponentParts.displayName = DisplayNameParts[name];
	    return ComponentParts;
	}
	function createFormattedComponent(name) {
	    var Component = function (props) {
	        var intl = useIntl();
	        var value = props.value, children = props.children, formatProps = __rest(props
	        // TODO: fix TS type definition for localeMatcher upstream
	        , ["value", "children"]);
	        // TODO: fix TS type definition for localeMatcher upstream
	        var formattedValue = intl[name](value, formatProps);
	        if (typeof children === 'function') {
	            return children(formattedValue);
	        }
	        var Text = intl.textComponent || reactExports.Fragment;
	        return reactExports.createElement(Text, null, formattedValue);
	    };
	    Component.displayName = DisplayName[name];
	    return Component;
	}

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	function assignUniqueKeysToFormatXMLElementFnArgument(values) {
	    if (!values) {
	        return values;
	    }
	    return Object.keys(values).reduce(function (acc, k) {
	        var v = values[k];
	        acc[k] = isFormatXMLElementFn(v)
	            ? assignUniqueKeysToParts(v)
	            : v;
	        return acc;
	    }, {});
	}
	var formatMessage = function (config, formatters, descriptor, rawValues) {
	    var rest = [];
	    for (var _i = 4; _i < arguments.length; _i++) {
	        rest[_i - 4] = arguments[_i];
	    }
	    var values = assignUniqueKeysToFormatXMLElementFnArgument(rawValues);
	    var chunks = formatMessage$1.apply(void 0, __spreadArray([config,
	        formatters,
	        descriptor,
	        values], rest, false));
	    if (Array.isArray(chunks)) {
	        return reactExports.Children.toArray(chunks);
	    }
	    return chunks;
	};
	/**
	 * Create intl object
	 * @param config intl config
	 * @param cache cache for formatter instances to prevent memory leak
	 */
	var createIntl = function (_a, cache) {
	    var rawDefaultRichTextElements = _a.defaultRichTextElements, config = __rest(_a, ["defaultRichTextElements"]);
	    var defaultRichTextElements = assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements);
	    var coreIntl = createIntl$1(__assign(__assign(__assign({}, DEFAULT_INTL_CONFIG), config), { defaultRichTextElements: defaultRichTextElements }), cache);
	    var resolvedConfig = {
	        locale: coreIntl.locale,
	        timeZone: coreIntl.timeZone,
	        fallbackOnEmptyString: coreIntl.fallbackOnEmptyString,
	        formats: coreIntl.formats,
	        defaultLocale: coreIntl.defaultLocale,
	        defaultFormats: coreIntl.defaultFormats,
	        messages: coreIntl.messages,
	        onError: coreIntl.onError,
	        defaultRichTextElements: defaultRichTextElements,
	    };
	    return __assign(__assign({}, coreIntl), { formatMessage: formatMessage.bind(null, resolvedConfig, coreIntl.formatters), $t: formatMessage.bind(null, resolvedConfig, coreIntl.formatters) });
	};

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	function areEqual(prevProps, nextProps) {
	    var values = prevProps.values, otherProps = __rest(prevProps, ["values"]);
	    var nextValues = nextProps.values, nextOtherProps = __rest(nextProps, ["values"]);
	    return (shallowEqual(nextValues, values) &&
	        shallowEqual(otherProps, nextOtherProps));
	}
	function FormattedMessage(props) {
	    var intl = useIntl();
	    var formatMessage = intl.formatMessage, _a = intl.textComponent, Text = _a === void 0 ? reactExports.Fragment : _a;
	    var id = props.id, description = props.description, defaultMessage = props.defaultMessage, values = props.values, children = props.children, _b = props.tagName, Component = _b === void 0 ? Text : _b, ignoreTag = props.ignoreTag;
	    var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
	    var nodes = formatMessage(descriptor, values, {
	        ignoreTag: ignoreTag,
	    });
	    if (typeof children === 'function') {
	        return children(Array.isArray(nodes) ? nodes : [nodes]);
	    }
	    if (Component) {
	        return reactExports.createElement(Component, null, reactExports.Children.toArray(nodes));
	    }
	    return reactExports.createElement(reactExports.Fragment, null, nodes);
	}
	FormattedMessage.displayName = 'FormattedMessage';
	var MemoizedFormattedMessage = reactExports.memo(FormattedMessage, areEqual);
	MemoizedFormattedMessage.displayName = 'MemoizedFormattedMessage';

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	function processIntlConfig(config) {
	    return {
	        locale: config.locale,
	        timeZone: config.timeZone,
	        fallbackOnEmptyString: config.fallbackOnEmptyString,
	        formats: config.formats,
	        textComponent: config.textComponent,
	        messages: config.messages,
	        defaultLocale: config.defaultLocale,
	        defaultFormats: config.defaultFormats,
	        onError: config.onError,
	        onWarn: config.onWarn,
	        wrapRichTextChunksInFragment: config.wrapRichTextChunksInFragment,
	        defaultRichTextElements: config.defaultRichTextElements,
	    };
	}
	var IntlProvider = /** @class */ (function (_super) {
	    __extends(IntlProvider, _super);
	    function IntlProvider() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.cache = createIntlCache();
	        _this.state = {
	            cache: _this.cache,
	            intl: createIntl(processIntlConfig(_this.props), _this.cache),
	            prevConfig: processIntlConfig(_this.props),
	        };
	        return _this;
	    }
	    IntlProvider.getDerivedStateFromProps = function (props, _a) {
	        var prevConfig = _a.prevConfig, cache = _a.cache;
	        var config = processIntlConfig(props);
	        if (!shallowEqual(prevConfig, config)) {
	            return {
	                intl: createIntl(config, cache),
	                prevConfig: config,
	            };
	        }
	        return null;
	    };
	    IntlProvider.prototype.render = function () {
	        invariantIntlContext(this.state.intl);
	        return reactExports.createElement(Provider, { value: this.state.intl }, this.props.children);
	    };
	    IntlProvider.displayName = 'IntlProvider';
	    IntlProvider.defaultProps = DEFAULT_INTL_CONFIG;
	    return IntlProvider;
	}(reactExports.PureComponent));

	// IMPORTANT: Explicit here to prevent api-extractor from outputing `import('./src/types').CustomFormatConfig`
	createFormattedComponent('formatDate');
	createFormattedComponent('formatTime');
	createFormattedComponent('formatNumber');
	createFormattedComponent('formatList');
	createFormattedComponent('formatDisplayName');
	createFormattedDateTimePartsComponent('formatDate');
	createFormattedDateTimePartsComponent('formatTime');

	// Neither the XBlock library nor SDK nor edx-platform provides any type
	// information so we need to include it.
	//
	// 🛑 As an XBlock author, you probably should NOT edit this file. 🛑
	function getCsrfToken() {
	    return document.cookie.split("; ").find((row) => row.startsWith("csrftoken="))?.split("=")[1] ?? 'unknown CSRF!';
	}
	/** Wraps the XBlock runtime to make it easier to use */
	class BoundRuntime {
	    runtime;
	    element;
	    constructor(runtime, element) {
	        this.runtime = runtime;
	        this.element = element;
	    }
	    /** GET data from a JSON handler */
	    async getHandler(handlerName) {
	        const response = await this.rawHandler(handlerName, { method: 'GET' });
	        return response.json();
	    }
	    /** POST data to a JSON handler */
	    async postHandler(handlerName, data) {
	        const response = await this.rawHandler(handlerName, { method: 'POST', body: JSON.stringify(data) });
	        return response.json();
	    }
	    /** Call an XBlock handler */
	    rawHandler(handlerName, init, suffix, query) {
	        const url = this.runtime.handlerUrl(this.element, handlerName, suffix, query);
	        let { headers, ...otherInit } = init;
	        headers = new Headers(headers); // Wrap headers into a Headers object if not already
	        if (init.method !== 'GET') {
	            headers.set('X-CSRFToken', getCsrfToken());
	        }
	        if (!headers.has('Content-Type')) {
	            headers.set('Content-Type', 'application/json');
	        }
	        return fetch(url, { headers, ...otherInit });
	    }
	}

	var tQLRmz = [
		{
			type: 0,
			value: "Incrémenter"
		}
	];
	var frMessages = {
		"61Tkpq": [
		{
			offset: 0,
			options: {
				one: {
					value: [
						{
							type: 0,
							value: "Le bouton a été cliqué "
						},
						{
							children: [
								{
									type: 0,
									value: "1"
								}
							],
							type: 8,
							value: "bold"
						},
						{
							type: 0,
							value: " fois."
						}
					]
				},
				other: {
					value: [
						{
							type: 0,
							value: "Le bouton a été cliqué "
						},
						{
							children: [
								{
									style: null,
									type: 2,
									value: "count"
								}
							],
							type: 8,
							value: "bold"
						},
						{
							type: 0,
							value: " fois."
						}
					]
				}
			},
			pluralType: "cardinal",
			type: 6,
			value: "count"
		}
	],
		tQLRmz: tQLRmz
	};

	const messages = {
	    // List all your supported languages here, after running 'npm run i18n:extract',
	    // editing the messages in the 'lang' folder, and running 'npm run i18n:compile'
	    fr: frMessages,
	};
	const StudentView = ({ runtime, ...props }) => {
	    const [count, setCount] = React.useState(props.initialCount);
	    // Handlers:
	    const increment = React.useCallback(async () => {
	        const newData = await runtime.postHandler('increment_count', { hello: 'world' });
	        setCount(newData.count);
	    }, [runtime]);
	    // Note: for more sophisticated fetch/cache/mutate behavior, use @tanstack/react-query to manage your data.
	    return jsxRuntimeExports.jsxs("div", { className: "react_xblock_2_block", children: [jsxRuntimeExports.jsx("h1", { children: "ReactXBlock8" }), jsxRuntimeExports.jsx("p", { children: jsxRuntimeExports.jsx(MemoizedFormattedMessage, { id: '61Tkpq', defaultMessage: [{ type: 6, value: "count", options: { one: { value: [{ type: 0, value: "The button has been clicked " }, { type: 8, value: "bold", children: [{ type: 0, value: "1" }] }, { type: 0, value: " time." }] }, other: { value: [{ type: 0, value: "The button has been clicked " }, { type: 8, value: "bold", children: [{ type: 2, value: "count", style: null }] }, { type: 0, value: " times." }] } }, offset: 0, pluralType: "cardinal" }], values: { count, bold: text => jsxRuntimeExports.jsx("span", { className: "count", children: text }) } }) }), jsxRuntimeExports.jsxs("button", { className: "btn btn-primary", onClick: increment, children: ["+ ", jsxRuntimeExports.jsx(MemoizedFormattedMessage, { id: 'tQLRmz', defaultMessage: [{ type: 0, value: "Increment" }] })] })] });
	};
	function initStudentView(runtime, container, initData) {
	    if ('jquery' in container) {
	        // Fix inconsistent parameter typing:
	        container = container[0];
	    }
	    /** Get the language selected by the user, e.g. 'en' or 'fr' */
	    const languageCode = document.body.parentElement.lang;
	    const root = ReactDOM.createRoot(container);
	    root.render(jsxRuntimeExports.jsx(IntlProvider, { messages: messages[languageCode], locale: languageCode, defaultLocale: "en", children: jsxRuntimeExports.jsx(StudentView, { runtime: new BoundRuntime(runtime, container), initialCount: initData.count }) }));
	}

	return initStudentView;

})();
