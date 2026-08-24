(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Zf={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function xx(){if(xv)return Lo;xv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=e,Lo.jsx=i,Lo.jsxs=i,Lo}var yv;function yx(){return yv||(yv=1,Zf.exports=xx()),Zf.exports}var Ee=yx(),Kf={exports:{}},No={},Qf={exports:{}},Jf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function Mx(){return Mv||(Mv=1,(function(s){function e(P,I){var D=P.length;P.push(I);e:for(;0<D;){var $=D-1>>>1,ee=P[$];if(0<l(ee,I))P[$]=I,P[D]=ee,D=$;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],D=P.pop();if(D!==I){P[0]=D;e:for(var $=0,ee=P.length,R=ee>>>1;$<R;){var Z=2*($+1)-1,ue=P[Z],V=Z+1,oe=P[V];if(0>l(ue,D))V<ee&&0>l(oe,ue)?(P[$]=oe,P[V]=D,$=V):(P[$]=ue,P[Z]=D,$=Z);else if(V<ee&&0>l(oe,D))P[$]=oe,P[V]=D,$=V;else break e}}return I}function l(P,I){var D=P.sortIndex-I.sortIndex;return D!==0?D:P.id-I.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,v=null,x=3,y=!1,E=!1,C=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var I=i(m);I!==null;){if(I.callback===null)r(m);else if(I.startTime<=P)r(m),I.sortIndex=I.expirationTime,e(p,I);else break;I=i(m)}}function J(P){if(C=!1,U(P),!E)if(i(p)!==null)E=!0,k||(k=!0,he());else{var I=i(m);I!==null&&_e(J,I.startTime-P)}}var k=!1,z=-1,K=5,L=-1;function w(){return M?!0:!(s.unstable_now()-L<K)}function X(){if(M=!1,k){var P=s.unstable_now();L=P;var I=!0;try{e:{E=!1,C&&(C=!1,F(z),z=-1),y=!0;var D=x;try{t:{for(U(P),v=i(p);v!==null&&!(v.expirationTime>P&&w());){var $=v.callback;if(typeof $=="function"){v.callback=null,x=v.priorityLevel;var ee=$(v.expirationTime<=P);if(P=s.unstable_now(),typeof ee=="function"){v.callback=ee,U(P),I=!0;break t}v===i(p)&&r(p),U(P)}else r(p);v=i(p)}if(v!==null)I=!0;else{var R=i(m);R!==null&&_e(J,R.startTime-P),I=!1}}break e}finally{v=null,x=D,y=!1}I=void 0}}finally{I?he():k=!1}}}var he;if(typeof N=="function")he=function(){N(X)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ye=ce.port2;ce.port1.onmessage=X,he=function(){ye.postMessage(null)}}else he=function(){S(X,0)};function _e(P,I){z=S(function(){P(s.unstable_now())},I)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(P){switch(x){case 1:case 2:case 3:var I=3;break;default:I=x}var D=x;x=I;try{return P()}finally{x=D}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var D=x;x=P;try{return I()}finally{x=D}},s.unstable_scheduleCallback=function(P,I,D){var $=s.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?$+D:$):D=$,P){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=D+ee,P={id:g++,callback:I,priorityLevel:P,startTime:D,expirationTime:ee,sortIndex:-1},D>$?(P.sortIndex=D,e(m,P),i(p)===null&&P===i(m)&&(C?(F(z),z=-1):C=!0,_e(J,D-$))):(P.sortIndex=ee,e(p,P),E||y||(E=!0,k||(k=!0,he()))),P},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(P){var I=x;return function(){var D=x;x=I;try{return P.apply(this,arguments)}finally{x=D}}}})(Jf)),Jf}var Ev;function Ex(){return Ev||(Ev=1,Qf.exports=Mx()),Qf.exports}var $f={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function Tx(){if(Tv)return rt;Tv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function y(R){return R===null||typeof R!="object"?null:(R=x&&R[x]||R["@@iterator"],typeof R=="function"?R:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function S(R,Z,ue){this.props=R,this.context=Z,this.refs=M,this.updater=ue||E}S.prototype.isReactComponent={},S.prototype.setState=function(R,Z){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,Z,"setState")},S.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function F(){}F.prototype=S.prototype;function N(R,Z,ue){this.props=R,this.context=Z,this.refs=M,this.updater=ue||E}var U=N.prototype=new F;U.constructor=N,C(U,S.prototype),U.isPureReactComponent=!0;var J=Array.isArray;function k(){}var z={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function L(R,Z,ue){var V=ue.ref;return{$$typeof:s,type:R,key:Z,ref:V!==void 0?V:null,props:ue}}function w(R,Z){return L(R.type,Z,R.props)}function X(R){return typeof R=="object"&&R!==null&&R.$$typeof===s}function he(R){var Z={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ue){return Z[ue]})}var ce=/\/+/g;function ye(R,Z){return typeof R=="object"&&R!==null&&R.key!=null?he(""+R.key):Z.toString(36)}function _e(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(k,k):(R.status="pending",R.then(function(Z){R.status==="pending"&&(R.status="fulfilled",R.value=Z)},function(Z){R.status==="pending"&&(R.status="rejected",R.reason=Z)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function P(R,Z,ue,V,oe){var pe=typeof R;(pe==="undefined"||pe==="boolean")&&(R=null);var ve=!1;if(R===null)ve=!0;else switch(pe){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(R.$$typeof){case s:case e:ve=!0;break;case g:return ve=R._init,P(ve(R._payload),Z,ue,V,oe)}}if(ve)return oe=oe(R),ve=V===""?"."+ye(R,0):V,J(oe)?(ue="",ve!=null&&(ue=ve.replace(ce,"$&/")+"/"),P(oe,Z,ue,"",function($e){return $e})):oe!=null&&(X(oe)&&(oe=w(oe,ue+(oe.key==null||R&&R.key===oe.key?"":(""+oe.key).replace(ce,"$&/")+"/")+ve)),Z.push(oe)),1;ve=0;var Pe=V===""?".":V+":";if(J(R))for(var Re=0;Re<R.length;Re++)V=R[Re],pe=Pe+ye(V,Re),ve+=P(V,Z,ue,pe,oe);else if(Re=y(R),typeof Re=="function")for(R=Re.call(R),Re=0;!(V=R.next()).done;)V=V.value,pe=Pe+ye(V,Re++),ve+=P(V,Z,ue,pe,oe);else if(pe==="object"){if(typeof R.then=="function")return P(_e(R),Z,ue,V,oe);throw Z=String(R),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ve}function I(R,Z,ue){if(R==null)return R;var V=[],oe=0;return P(R,V,"","",function(pe){return Z.call(ue,pe,oe++)}),V}function D(R){if(R._status===-1){var Z=R._result;Z=Z(),Z.then(function(ue){(R._status===0||R._status===-1)&&(R._status=1,R._result=ue)},function(ue){(R._status===0||R._status===-1)&&(R._status=2,R._result=ue)}),R._status===-1&&(R._status=0,R._result=Z)}if(R._status===1)return R._result.default;throw R._result}var $=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},ee={map:I,forEach:function(R,Z,ue){I(R,function(){Z.apply(this,arguments)},ue)},count:function(R){var Z=0;return I(R,function(){Z++}),Z},toArray:function(R){return I(R,function(Z){return Z})||[]},only:function(R){if(!X(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return rt.Activity=v,rt.Children=ee,rt.Component=S,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=N,rt.StrictMode=r,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,rt.__COMPILER_RUNTIME={__proto__:null,c:function(R){return z.H.useMemoCache(R)}},rt.cache=function(R){return function(){return R.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(R,Z,ue){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var V=C({},R.props),oe=R.key;if(Z!=null)for(pe in Z.key!==void 0&&(oe=""+Z.key),Z)!K.call(Z,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&Z.ref===void 0||(V[pe]=Z[pe]);var pe=arguments.length-2;if(pe===1)V.children=ue;else if(1<pe){for(var ve=Array(pe),Pe=0;Pe<pe;Pe++)ve[Pe]=arguments[Pe+2];V.children=ve}return L(R.type,oe,V)},rt.createContext=function(R){return R={$$typeof:h,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:c,_context:R},R},rt.createElement=function(R,Z,ue){var V,oe={},pe=null;if(Z!=null)for(V in Z.key!==void 0&&(pe=""+Z.key),Z)K.call(Z,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(oe[V]=Z[V]);var ve=arguments.length-2;if(ve===1)oe.children=ue;else if(1<ve){for(var Pe=Array(ve),Re=0;Re<ve;Re++)Pe[Re]=arguments[Re+2];oe.children=Pe}if(R&&R.defaultProps)for(V in ve=R.defaultProps,ve)oe[V]===void 0&&(oe[V]=ve[V]);return L(R,pe,oe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(R){return{$$typeof:d,render:R}},rt.isValidElement=X,rt.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:D}},rt.memo=function(R,Z){return{$$typeof:m,type:R,compare:Z===void 0?null:Z}},rt.startTransition=function(R){var Z=z.T,ue={};z.T=ue;try{var V=R(),oe=z.S;oe!==null&&oe(ue,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(k,$)}catch(pe){$(pe)}finally{Z!==null&&ue.types!==null&&(Z.types=ue.types),z.T=Z}},rt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},rt.use=function(R){return z.H.use(R)},rt.useActionState=function(R,Z,ue){return z.H.useActionState(R,Z,ue)},rt.useCallback=function(R,Z){return z.H.useCallback(R,Z)},rt.useContext=function(R){return z.H.useContext(R)},rt.useDebugValue=function(){},rt.useDeferredValue=function(R,Z){return z.H.useDeferredValue(R,Z)},rt.useEffect=function(R,Z){return z.H.useEffect(R,Z)},rt.useEffectEvent=function(R){return z.H.useEffectEvent(R)},rt.useId=function(){return z.H.useId()},rt.useImperativeHandle=function(R,Z,ue){return z.H.useImperativeHandle(R,Z,ue)},rt.useInsertionEffect=function(R,Z){return z.H.useInsertionEffect(R,Z)},rt.useLayoutEffect=function(R,Z){return z.H.useLayoutEffect(R,Z)},rt.useMemo=function(R,Z){return z.H.useMemo(R,Z)},rt.useOptimistic=function(R,Z){return z.H.useOptimistic(R,Z)},rt.useReducer=function(R,Z,ue){return z.H.useReducer(R,Z,ue)},rt.useRef=function(R){return z.H.useRef(R)},rt.useState=function(R){return z.H.useState(R)},rt.useSyncExternalStore=function(R,Z,ue){return z.H.useSyncExternalStore(R,Z,ue)},rt.useTransition=function(){return z.H.useTransition()},rt.version="19.2.8",rt}var bv;function Ad(){return bv||(bv=1,$f.exports=Tx()),$f.exports}var eh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function bx(){if(Av)return Dn;Av=1;var s=Ad();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},Dn.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},Dn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Dn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Dn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Dn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Dn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Dn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Dn.requestFormReset=function(p){r.d.r(p)},Dn.unstable_batchedUpdates=function(p,m){return p(m)},Dn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.2.8",Dn}var Rv;function Ax(){if(Rv)return eh.exports;Rv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),eh.exports=bx(),eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function Rx(){if(Cv)return No;Cv=1;var s=Ex(),e=Ad(),i=Ax();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===o)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,T=u.child;T;){if(T===a){_=!0,a=u,o=f;break}if(T===o){_=!0,o=u,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,o=u;break}if(T===o){_=!0,o=f,a=u;break}T=T.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function he(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function ye(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case J:return"Suspense";case k:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ye(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return ye(t(n))}catch{}}return null}var _e=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D={pending:!1,data:null,method:null,action:null},$=[],ee=-1;function R(t){return{current:t}}function Z(t){0>ee||(t.current=$[ee],$[ee]=null,ee--)}function ue(t,n){ee++,$[ee]=t.current,t.current=n}var V=R(null),oe=R(null),pe=R(null),ve=R(null);function Pe(t,n){switch(ue(pe,n),ue(oe,t),ue(V,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?kg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=kg(n),t=Xg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(V),ue(V,t)}function Re(){Z(V),Z(oe),Z(pe)}function $e(t){t.memoizedState!==null&&ue(ve,t);var n=V.current,a=Xg(n,t.type);n!==a&&(ue(oe,t),ue(V,a))}function At(t){oe.current===t&&(Z(V),Z(oe)),ve.current===t&&(Z(ve),Co._currentValue=D)}var st,Wt;function H(t){if(st===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);st=n&&n[1]||"",Wt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+st+t+Wt}var fn=!1;function ft(t,n){if(!t||fn)return"";fn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var ie=le}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(le){ie=le}t.call(xe.prototype)}}else{try{throw Error()}catch(le){ie=le}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&ie&&typeof le.stack=="string")return[le.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var B=_.split(`
`),ne=T.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===ne.length)for(o=B.length-1,u=ne.length-1;1<=o&&0<=u&&B[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==ne[u]){var de=`
`+B[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=u);break}}}finally{fn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?H(a):""}function ht(t,n){switch(t.tag){case 26:case 27:case 5:return H(t.type);case 16:return H("Lazy");case 13:return t.child!==n&&n!==null?H("Suspense Fallback"):H("Suspense");case 19:return H("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return H("Activity");default:return""}}function ke(t){try{var n="",a=null;do n+=ht(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var vt=Object.prototype.hasOwnProperty,qe=s.unstable_scheduleCallback,O=s.unstable_cancelCallback,b=s.unstable_shouldYield,ae=s.unstable_requestPaint,me=s.unstable_now,Te=s.unstable_getCurrentPriorityLevel,Se=s.unstable_ImmediatePriority,Xe=s.unstable_UserBlockingPriority,De=s.unstable_NormalPriority,Ie=s.unstable_LowPriority,_t=s.unstable_IdlePriority,Ae=s.log,He=s.unstable_setDisableYieldValue,Ye=null,We=null;function ze(t){if(typeof Ae=="function"&&He(t),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Ye,t)}catch{}}var et=Math.clz32?Math.clz32:Y,ot=Math.log,Bt=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(ot(t)/Bt|0)|0}var Ce=256,fe=262144,Me=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ue(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=we(o):(_&=T,_!==0?u=we(_):a||(a=T&~t,a!==0&&(u=we(a))))):(T=o&~f,T!==0?u=we(T):_!==0?u=we(_):a||(a=o&~t,a!==0&&(u=we(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function tt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Kt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hn(){var t=Me;return Me<<=1,(Me&62914560)===0&&(Me=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Mn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,ne=t.hiddenUpdates;for(a=_&~a;0<a;){var de=31-et(a),xe=1<<de;T[de]=0,B[de]=-1;var ie=ne[de];if(ie!==null)for(ne[de]=null,de=0;de<ie.length;de++){var le=ie[de];le!==null&&(le.lane&=-536870913)}a&=~xe}o!==0&&Ir(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ir(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-et(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Hr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-et(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Ni(t,n){var a=n&-n;return a=(a&42)!==0?1:Ja(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ja(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ns(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gr(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:dv(t.type))}function $a(t,n){var a=I.p;try{return I.p=t,n()}finally{I.p=a}}var yi=Math.random().toString(36).slice(2),Jt="__reactFiber$"+yi,En="__reactProps$"+yi,Xi="__reactContainer$"+yi,Vr="__reactEvents$"+yi,Vc="__reactListeners$"+yi,kc="__reactHandles$"+yi,Qo="__reactResources$"+yi,es="__reactMarker$"+yi;function kr(t){delete t[Jt],delete t[En],delete t[Vr],delete t[Vc],delete t[kc]}function A(t){var n=t[Jt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Xi]||a[Jt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Qg(t);t!==null;){if(a=t[Jt])return a;t=Qg(t)}return n}t=a,a=t.parentNode}return null}function j(t){if(t=t[Jt]||t[Xi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function se(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function re(t){var n=t[Qo];return n||(n=t[Qo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(t){t[es]=!0}var be=new Set,Le={};function Oe(t,n){Be(t,n),Be(t+"Capture",n)}function Be(t,n){for(Le[t]=n,t=0;t<n.length;t++)be.add(n[t])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},je={};function Mt(t){return vt.call(je,t)?!0:vt.call(it,t)?!1:nt.test(t)?je[t]=!0:(it[t]=!0,!1)}function Et(t,n,a){if(Mt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function qt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ct(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dn(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function bt(t){if(!t._valueTracker){var n=Ke(t)?"checked":"value";t._valueTracker=dn(t,n,""+t[n])}}function Gn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ke(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Mi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zn=/[\n"\\]/g;function vn(t){return t.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ft(t,n,a,o,u,f,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?wn(t,_,at(n)):a!=null?wn(t,_,at(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+at(T):t.removeAttribute("name")}function Bn(t,n,a,o,u,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){bt(t);return}a=a!=null?""+at(a):"",n=n!=null?""+at(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),bt(t)}function wn(t,n,a){n==="number"&&Mi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function $t(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+at(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Tn(t,n,a){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+at(a):""}function Os(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(_e(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=at(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),bt(t)}function Vn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var m0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||m0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Gd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Hd(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Hd(t,f,n[f])}function Xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var g0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),v0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(t){return v0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var Wc=null;function qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ps=null,zs=null;function Vd(t){var n=j(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ft(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[En]||null;if(!u)throw Error(r(90));Ft(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Gn(o)}break e;case"textarea":Tn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&$t(t,!!a.multiple,n,!1)}}}var Yc=!1;function kd(t,n,a){if(Yc)return t(n,a);Yc=!0;try{var o=t(n);return o}finally{if(Yc=!1,(Ps!==null||zs!==null)&&(Il(),Ps&&(n=Ps,t=zs,zs=Ps=null,Vd(n),t)))for(n=0;n<t.length;n++)Vd(t[n])}}function Xr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=!1;if(qi)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{jc=!1}var xa=null,Zc=null,$o=null;function Xd(){if($o)return $o;var t,n=Zc,a=n.length,o,u="value"in xa?xa.value:xa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return $o=u.slice(t,1<o?1-o:void 0)}function el(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Wd(){return!1}function kn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Wd,this.isPropagationStopped=Wd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=kn(ts),qr=v({},ts,{view:0,detail:0}),_0=kn(qr),Kc,Qc,Yr,il=v({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yr&&(Yr&&t.type==="mousemove"?(Kc=t.screenX-Yr.screenX,Qc=t.screenY-Yr.screenY):Qc=Kc=0,Yr=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),qd=kn(il),S0=v({},il,{dataTransfer:0}),x0=kn(S0),y0=v({},qr,{relatedTarget:0}),Jc=kn(y0),M0=v({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=kn(M0),T0=v({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b0=kn(T0),A0=v({},ts,{data:0}),Yd=kn(A0),R0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=w0[t])?!!n[t]:!1}function $c(){return D0}var U0=v({},qr,{key:function(t){if(t.key){var n=R0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),L0=kn(U0),N0=v({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=kn(N0),O0=v({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),P0=kn(O0),z0=v({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=kn(z0),F0=v({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),I0=kn(F0),H0=v({},ts,{newState:0,oldState:0}),G0=kn(H0),V0=[9,13,27,32],eu=qi&&"CompositionEvent"in window,jr=null;qi&&"documentMode"in document&&(jr=document.documentMode);var k0=qi&&"TextEvent"in window&&!jr,Zd=qi&&(!eu||jr&&8<jr&&11>=jr),Kd=" ",Qd=!1;function Jd(t,n){switch(t){case"keyup":return V0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function X0(t,n){switch(t){case"compositionend":return $d(n);case"keypress":return n.which!==32?null:(Qd=!0,Kd);case"textInput":return t=n.data,t===Kd&&Qd?null:t;default:return null}}function W0(t,n){if(Bs)return t==="compositionend"||!eu&&Jd(t,n)?(t=Xd(),$o=Zc=xa=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zd&&n.locale!=="ko"?null:n.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!q0[t.type]:n==="textarea"}function tp(t,n,a,o){Ps?zs?zs.push(o):zs=[o]:Ps=o,n=ql(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Zr=null,Kr=null;function Y0(t){Bg(t,0)}function al(t){var n=se(t);if(Gn(n))return t}function np(t,n){if(t==="change")return n}var ip=!1;if(qi){var tu;if(qi){var nu="oninput"in document;if(!nu){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),nu=typeof ap.oninput=="function"}tu=nu}else tu=!1;ip=tu&&(!document.documentMode||9<document.documentMode)}function sp(){Zr&&(Zr.detachEvent("onpropertychange",rp),Kr=Zr=null)}function rp(t){if(t.propertyName==="value"&&al(Kr)){var n=[];tp(n,Kr,t,qc(t)),kd(Y0,n)}}function j0(t,n,a){t==="focusin"?(sp(),Zr=n,Kr=a,Zr.attachEvent("onpropertychange",rp)):t==="focusout"&&sp()}function Z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(Kr)}function K0(t,n){if(t==="click")return al(n)}function Q0(t,n){if(t==="input"||t==="change")return al(n)}function J0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Jn=typeof Object.is=="function"?Object.is:J0;function Qr(t,n){if(Jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!vt.call(n,u)||!Jn(t[u],n[u]))return!1}return!0}function op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lp(t,n){var a=op(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=op(a)}}function cp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?cp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Mi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Mi(t.document)}return n}function iu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $0=qi&&"documentMode"in document&&11>=document.documentMode,Fs=null,au=null,Jr=null,su=!1;function fp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Fs==null||Fs!==Mi(o)||(o=Fs,"selectionStart"in o&&iu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Jr&&Qr(Jr,o)||(Jr=o,o=ql(au,"onSelect"),0<o.length&&(n=new nl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Fs)))}function ns(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Is={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},ru={},hp={};qi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function is(t){if(ru[t])return ru[t];if(!Is[t])return t;var n=Is[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return ru[t]=n[a];return t}var dp=is("animationend"),pp=is("animationiteration"),mp=is("animationstart"),eS=is("transitionrun"),tS=is("transitionstart"),nS=is("transitioncancel"),gp=is("transitionend"),vp=new Map,ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ou.push("scrollEnd");function Ei(t,n){vp.set(t,n),Oe(n,[t])}var sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],Hs=0,lu=0;function rl(){for(var t=Hs,n=lu=Hs=0;n<t;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&_p(a,u,f)}}function ol(t,n,a,o){fi[Hs++]=t,fi[Hs++]=n,fi[Hs++]=a,fi[Hs++]=o,lu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function cu(t,n,a,o){return ol(t,n,a,o),ll(t)}function as(t,n){return ol(t,null,null,n),ll(t)}function _p(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-et(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ll(t){if(50<yo)throw yo=0,Sf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gs={};function iS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,o){return new iS(t,n,a,o)}function uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yi(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Sp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cl(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")uu(t)&&(_=1);else if(typeof t=="string")_=lx(t,a,V.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=$n(31,a,n,u),t.elementType=L,t.lanes=f,t;case C:return ss(a.children,u,f,n);case M:_=8,u|=24;break;case S:return t=$n(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case J:return t=$n(13,a,n,u),t.elementType=J,t.lanes=f,t;case k:return t=$n(19,a,n,u),t.elementType=k,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:_=10;break e;case F:_=9;break e;case U:_=11;break e;case z:_=14;break e;case K:_=16,o=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=$n(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function ss(t,n,a,o){return t=$n(7,t,o,n),t.lanes=a,t}function fu(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function xp(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function hu(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var yp=new WeakMap;function hi(t,n){if(typeof t=="object"&&t!==null){var a=yp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ke(n)},yp.set(t,n),n)}return{value:t,source:n,stack:ke(n)}}var Vs=[],ks=0,ul=null,$r=0,di=[],pi=0,ya=null,Oi=1,Pi="";function ji(t,n){Vs[ks++]=$r,Vs[ks++]=ul,ul=t,$r=n}function Mp(t,n,a){di[pi++]=Oi,di[pi++]=Pi,di[pi++]=ya,ya=t;var o=Oi;t=Pi;var u=32-et(o)-1;o&=~(1<<u),a+=1;var f=32-et(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Oi=1<<32-et(n)+u|a<<u|o,Pi=f+t}else Oi=1<<f|a<<u|o,Pi=t}function du(t){t.return!==null&&(ji(t,1),Mp(t,1,0))}function pu(t){for(;t===ul;)ul=Vs[--ks],Vs[ks]=null,$r=Vs[--ks],Vs[ks]=null;for(;t===ya;)ya=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null,Oi=di[--pi],di[pi]=null}function Ep(t,n){di[pi++]=Oi,di[pi++]=Pi,di[pi++]=ya,Oi=n.id,Pi=n.overflow,ya=t}var bn=null,Yt=null,Tt=!1,Ma=null,mi=!1,mu=Error(r(519));function Ea(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(hi(n,t)),mu}function Tp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Jt]=t,n[En]=o,a){case"dialog":pt("cancel",n),pt("close",n);break;case"iframe":case"object":case"embed":pt("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)pt(Eo[a],n);break;case"source":pt("error",n);break;case"img":case"image":case"link":pt("error",n),pt("load",n);break;case"details":pt("toggle",n);break;case"input":pt("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pt("invalid",n);break;case"textarea":pt("invalid",n),Os(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Gg(n.textContent,a)?(o.popover!=null&&(pt("beforetoggle",n),pt("toggle",n)),o.onScroll!=null&&pt("scroll",n),o.onScrollEnd!=null&&pt("scrollend",n),o.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ea(t,!0)}function bp(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:bn=bn.return}}function Xs(t){if(t!==bn)return!1;if(!Tt)return bp(t),Tt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Of(t.type,t.memoizedProps)),a=!a),a&&Yt&&Ea(t),bp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=Kg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=Kg(t)}else n===27?(n=Yt,Ba(t.type)?(t=If,If=null,Yt=t):Yt=n):Yt=bn?vi(t.stateNode.nextSibling):null;return!0}function rs(){Yt=bn=null,Tt=!1}function gu(){var t=Ma;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Ma=null),t}function eo(t){Ma===null?Ma=[t]:Ma.push(t)}var vu=R(null),os=null,Zi=null;function Ta(t,n,a){ue(vu,n._currentValue),n._currentValue=a}function Ki(t){t._currentValue=vu.current,Z(vu)}function _u(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Su(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),_u(f.return,a,t),o||(_=null);break e}f=T.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),_u(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ws(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var T=u.type;Jn(u.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(u===ve.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}u=u.return}t!==null&&Su(n,t,a,o),n.flags|=262144}function fl(t){for(t=t.firstContext;t!==null;){if(!Jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ls(t){os=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Ap(os,t)}function hl(t,n){return os===null&&ls(t),Ap(t,n)}function Ap(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(t===null)throw Error(r(308));Zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Zi=Zi.next=n;return a}var aS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},sS=s.unstable_scheduleCallback,rS=s.unstable_NormalPriority,rn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new aS,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&sS(rS,function(){t.controller.abort()})}var no=null,yu=0,qs=0,Ys=null;function oS(t,n){if(no===null){var a=no=[];yu=0,qs=bf(),Ys={status:"pending",value:void 0,then:function(o){a.push(o)}}}return yu++,n.then(Rp,Rp),n}function Rp(){if(--yu===0&&no!==null){Ys!==null&&(Ys.status="fulfilled");var t=no;no=null,qs=0,Ys=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function lS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Cp=P.S;P.S=function(t,n){fg=me(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&oS(t,n),Cp!==null&&Cp(t,n)};var cs=R(null);function Mu(){var t=cs.current;return t!==null?t:Xt.pooledCache}function dl(t,n){n===null?ue(cs,cs.current):ue(cs,n.pool)}function wp(){var t=Mu();return t===null?null:{parent:rn._currentValue,pool:t}}var js=Error(r(460)),Eu=Error(r(474)),pl=Error(r(542)),ml={then:function(){}};function Dp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Up(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Np(t),t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Np(t),t}throw fs=n,js}}function us(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fs=a,js):a}}var fs=null;function Lp(){if(fs===null)throw Error(r(459));var t=fs;return fs=null,t}function Np(t){if(t===js||t===pl)throw Error(r(483))}var Zs=null,io=0;function gl(t){var n=io;return io+=1,Zs===null&&(Zs=[]),Up(Zs,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function vl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Op(t){function n(Q,G){if(t){var te=Q.deletions;te===null?(Q.deletions=[G],Q.flags|=16):te.push(G)}}function a(Q,G){if(!t)return null;for(;G!==null;)n(Q,G),G=G.sibling;return null}function o(Q){for(var G=new Map;Q!==null;)Q.key!==null?G.set(Q.key,Q):G.set(Q.index,Q),Q=Q.sibling;return G}function u(Q,G){return Q=Yi(Q,G),Q.index=0,Q.sibling=null,Q}function f(Q,G,te){return Q.index=te,t?(te=Q.alternate,te!==null?(te=te.index,te<G?(Q.flags|=67108866,G):te):(Q.flags|=67108866,G)):(Q.flags|=1048576,G)}function _(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function T(Q,G,te,ge){return G===null||G.tag!==6?(G=fu(te,Q.mode,ge),G.return=Q,G):(G=u(G,te),G.return=Q,G)}function B(Q,G,te,ge){var Ze=te.type;return Ze===C?de(Q,G,te.props.children,ge,te.key):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&us(Ze)===G.type)?(G=u(G,te.props),ao(G,te),G.return=Q,G):(G=cl(te.type,te.key,te.props,null,Q.mode,ge),ao(G,te),G.return=Q,G)}function ne(Q,G,te,ge){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=hu(te,Q.mode,ge),G.return=Q,G):(G=u(G,te.children||[]),G.return=Q,G)}function de(Q,G,te,ge,Ze){return G===null||G.tag!==7?(G=ss(te,Q.mode,ge,Ze),G.return=Q,G):(G=u(G,te),G.return=Q,G)}function xe(Q,G,te){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=fu(""+G,Q.mode,te),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return te=cl(G.type,G.key,G.props,null,Q.mode,te),ao(te,G),te.return=Q,te;case E:return G=hu(G,Q.mode,te),G.return=Q,G;case K:return G=us(G),xe(Q,G,te)}if(_e(G)||he(G))return G=ss(G,Q.mode,te,null),G.return=Q,G;if(typeof G.then=="function")return xe(Q,gl(G),te);if(G.$$typeof===N)return xe(Q,hl(Q,G),te);vl(Q,G)}return null}function ie(Q,G,te,ge){var Ze=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Ze!==null?null:T(Q,G,""+te,ge);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case y:return te.key===Ze?B(Q,G,te,ge):null;case E:return te.key===Ze?ne(Q,G,te,ge):null;case K:return te=us(te),ie(Q,G,te,ge)}if(_e(te)||he(te))return Ze!==null?null:de(Q,G,te,ge,null);if(typeof te.then=="function")return ie(Q,G,gl(te),ge);if(te.$$typeof===N)return ie(Q,G,hl(Q,te),ge);vl(Q,te)}return null}function le(Q,G,te,ge,Ze){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Q=Q.get(te)||null,T(G,Q,""+ge,Ze);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return Q=Q.get(ge.key===null?te:ge.key)||null,B(G,Q,ge,Ze);case E:return Q=Q.get(ge.key===null?te:ge.key)||null,ne(G,Q,ge,Ze);case K:return ge=us(ge),le(Q,G,te,ge,Ze)}if(_e(ge)||he(ge))return Q=Q.get(te)||null,de(G,Q,ge,Ze,null);if(typeof ge.then=="function")return le(Q,G,te,gl(ge),Ze);if(ge.$$typeof===N)return le(Q,G,te,hl(G,ge),Ze);vl(G,ge)}return null}function Ge(Q,G,te,ge){for(var Ze=null,wt=null,Ve=G,ct=G=0,xt=null;Ve!==null&&ct<te.length;ct++){Ve.index>ct?(xt=Ve,Ve=null):xt=Ve.sibling;var Dt=ie(Q,Ve,te[ct],ge);if(Dt===null){Ve===null&&(Ve=xt);break}t&&Ve&&Dt.alternate===null&&n(Q,Ve),G=f(Dt,G,ct),wt===null?Ze=Dt:wt.sibling=Dt,wt=Dt,Ve=xt}if(ct===te.length)return a(Q,Ve),Tt&&ji(Q,ct),Ze;if(Ve===null){for(;ct<te.length;ct++)Ve=xe(Q,te[ct],ge),Ve!==null&&(G=f(Ve,G,ct),wt===null?Ze=Ve:wt.sibling=Ve,wt=Ve);return Tt&&ji(Q,ct),Ze}for(Ve=o(Ve);ct<te.length;ct++)xt=le(Ve,Q,ct,te[ct],ge),xt!==null&&(t&&xt.alternate!==null&&Ve.delete(xt.key===null?ct:xt.key),G=f(xt,G,ct),wt===null?Ze=xt:wt.sibling=xt,wt=xt);return t&&Ve.forEach(function(Va){return n(Q,Va)}),Tt&&ji(Q,ct),Ze}function Je(Q,G,te,ge){if(te==null)throw Error(r(151));for(var Ze=null,wt=null,Ve=G,ct=G=0,xt=null,Dt=te.next();Ve!==null&&!Dt.done;ct++,Dt=te.next()){Ve.index>ct?(xt=Ve,Ve=null):xt=Ve.sibling;var Va=ie(Q,Ve,Dt.value,ge);if(Va===null){Ve===null&&(Ve=xt);break}t&&Ve&&Va.alternate===null&&n(Q,Ve),G=f(Va,G,ct),wt===null?Ze=Va:wt.sibling=Va,wt=Va,Ve=xt}if(Dt.done)return a(Q,Ve),Tt&&ji(Q,ct),Ze;if(Ve===null){for(;!Dt.done;ct++,Dt=te.next())Dt=xe(Q,Dt.value,ge),Dt!==null&&(G=f(Dt,G,ct),wt===null?Ze=Dt:wt.sibling=Dt,wt=Dt);return Tt&&ji(Q,ct),Ze}for(Ve=o(Ve);!Dt.done;ct++,Dt=te.next())Dt=le(Ve,Q,ct,Dt.value,ge),Dt!==null&&(t&&Dt.alternate!==null&&Ve.delete(Dt.key===null?ct:Dt.key),G=f(Dt,G,ct),wt===null?Ze=Dt:wt.sibling=Dt,wt=Dt);return t&&Ve.forEach(function(Sx){return n(Q,Sx)}),Tt&&ji(Q,ct),Ze}function Gt(Q,G,te,ge){if(typeof te=="object"&&te!==null&&te.type===C&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case y:e:{for(var Ze=te.key;G!==null;){if(G.key===Ze){if(Ze=te.type,Ze===C){if(G.tag===7){a(Q,G.sibling),ge=u(G,te.props.children),ge.return=Q,Q=ge;break e}}else if(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&us(Ze)===G.type){a(Q,G.sibling),ge=u(G,te.props),ao(ge,te),ge.return=Q,Q=ge;break e}a(Q,G);break}else n(Q,G);G=G.sibling}te.type===C?(ge=ss(te.props.children,Q.mode,ge,te.key),ge.return=Q,Q=ge):(ge=cl(te.type,te.key,te.props,null,Q.mode,ge),ao(ge,te),ge.return=Q,Q=ge)}return _(Q);case E:e:{for(Ze=te.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){a(Q,G.sibling),ge=u(G,te.children||[]),ge.return=Q,Q=ge;break e}else{a(Q,G);break}else n(Q,G);G=G.sibling}ge=hu(te,Q.mode,ge),ge.return=Q,Q=ge}return _(Q);case K:return te=us(te),Gt(Q,G,te,ge)}if(_e(te))return Ge(Q,G,te,ge);if(he(te)){if(Ze=he(te),typeof Ze!="function")throw Error(r(150));return te=Ze.call(te),Je(Q,G,te,ge)}if(typeof te.then=="function")return Gt(Q,G,gl(te),ge);if(te.$$typeof===N)return Gt(Q,G,hl(Q,te),ge);vl(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,G!==null&&G.tag===6?(a(Q,G.sibling),ge=u(G,te),ge.return=Q,Q=ge):(a(Q,G),ge=fu(te,Q.mode,ge),ge.return=Q,Q=ge),_(Q)):a(Q,G)}return function(Q,G,te,ge){try{io=0;var Ze=Gt(Q,G,te,ge);return Zs=null,Ze}catch(Ve){if(Ve===js||Ve===pl)throw Ve;var wt=$n(29,Ve,null,Q.mode);return wt.lanes=ge,wt.return=Q,wt}finally{}}}var hs=Op(!0),Pp=Op(!1),ba=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Aa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ra(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ll(t),_p(t,null,a),n}return ol(t,o,n,a),ll(t)}function so(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Hr(t,a)}}function Au(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ru=!1;function ro(){if(Ru){var t=Ys;if(t!==null)throw t}}function oo(t,n,a,o){Ru=!1;var u=t.updateQueue;ba=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,ne=B.next;B.next=null,_===null?f=ne:_.next=ne,_=B;var de=t.alternate;de!==null&&(de=de.updateQueue,T=de.lastBaseUpdate,T!==_&&(T===null?de.firstBaseUpdate=ne:T.next=ne,de.lastBaseUpdate=B))}if(f!==null){var xe=u.baseState;_=0,de=ne=B=null,T=f;do{var ie=T.lane&-536870913,le=ie!==T.lane;if(le?(St&ie)===ie:(o&ie)===ie){ie!==0&&ie===qs&&(Ru=!0),de!==null&&(de=de.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ge=t,Je=T;ie=n;var Gt=a;switch(Je.tag){case 1:if(Ge=Je.payload,typeof Ge=="function"){xe=Ge.call(Gt,xe,ie);break e}xe=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Je.payload,ie=typeof Ge=="function"?Ge.call(Gt,xe,ie):Ge,ie==null)break e;xe=v({},xe,ie);break e;case 2:ba=!0}}ie=T.callback,ie!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[ie]:le.push(ie))}else le={lane:ie,tag:T.tag,payload:T.payload,callback:T.callback,next:null},de===null?(ne=de=le,B=xe):de=de.next=le,_|=ie;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;le=T,T=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);de===null&&(B=xe),u.baseState=B,u.firstBaseUpdate=ne,u.lastBaseUpdate=de,f===null&&(u.shared.lanes=0),La|=_,t.lanes=_,t.memoizedState=xe}}function zp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Bp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)zp(a[t],n)}var Ks=R(null),_l=R(0);function Fp(t,n){t=sa,ue(_l,t),ue(Ks,n),sa=t|n.baseLanes}function Cu(){ue(_l,sa),ue(Ks,Ks.current)}function wu(){sa=_l.current,Z(Ks),Z(_l)}var ei=R(null),gi=null;function Ca(t){var n=t.alternate;ue(nn,nn.current&1),ue(ei,t),gi===null&&(n===null||Ks.current!==null||n.memoizedState!==null)&&(gi=t)}function Du(t){ue(nn,nn.current),ue(ei,t),gi===null&&(gi=t)}function Ip(t){t.tag===22?(ue(nn,nn.current),ue(ei,t),gi===null&&(gi=t)):wa()}function wa(){ue(nn,nn.current),ue(ei,ei.current)}function ti(t){Z(ei),gi===t&&(gi=null),Z(nn)}var nn=R(0);function Sl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||Ff(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,lt=null,It=null,on=null,xl=!1,Qs=!1,ds=!1,yl=0,lo=0,Js=null,cS=0;function en(){throw Error(r(321))}function Uu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Jn(t[a],n[a]))return!1;return!0}function Lu(t,n,a,o,u,f){return Qi=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Mm:Yu,ds=!1,f=a(o,u),ds=!1,Qs&&(f=Gp(n,a,o,u)),Hp(t),f}function Hp(t){P.H=fo;var n=It!==null&&It.next!==null;if(Qi=0,on=It=lt=null,xl=!1,lo=0,Js=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&fl(t)&&(ln=!0))}function Gp(t,n,a,o){lt=t;var u=0;do{if(Qs&&(Js=null),lo=0,Qs=!1,25<=u)throw Error(r(301));if(u+=1,on=It=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Em,f=n(a,o)}while(Qs);return f}function uS(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(It!==null?It.memoizedState:null)!==t&&(lt.flags|=1024),n}function Nu(){var t=yl!==0;return yl=0,t}function Ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Pu(t){if(xl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}xl=!1}Qi=0,on=It=lt=null,Qs=!1,lo=yl=0,Js=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?lt.memoizedState=on=t:on=on.next=t,on}function an(){if(It===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var n=on===null?lt.memoizedState:on.next;if(n!==null)on=n,It=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},on===null?lt.memoizedState=on=t:on=on.next=t}return on}function Ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,Js===null&&(Js=[]),t=Up(Js,t,n),n=lt,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Mm:Yu),t}function El(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===N)return An(t)}throw Error(r(438,String(t)))}function zu(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ml(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function Ji(t,n){return typeof n=="function"?n(t):n}function Tl(t){var n=an();return Bu(n,It,t)}function Bu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=_=null,B=null,ne=n,de=!1;do{var xe=ne.lane&-536870913;if(xe!==ne.lane?(St&xe)===xe:(Qi&xe)===xe){var ie=ne.revertLane;if(ie===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),xe===qs&&(de=!0);else if((Qi&ie)===ie){ne=ne.next,ie===qs&&(de=!0);continue}else xe={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(T=B=xe,_=f):B=B.next=xe,lt.lanes|=ie,La|=ie;xe=ne.action,ds&&a(f,xe),f=ne.hasEagerState?ne.eagerState:a(f,xe)}else ie={lane:xe,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(T=B=ie,_=f):B=B.next=ie,lt.lanes|=xe,La|=xe;ne=ne.next}while(ne!==null&&ne!==n);if(B===null?_=f:B.next=T,!Jn(f,t.memoizedState)&&(ln=!0,de&&(a=Ys,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Fu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);Jn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Vp(t,n,a){var o=lt,u=an(),f=Tt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Jn((It||u).memoizedState,a);if(_&&(u.memoizedState=a,ln=!0),u=u.queue,Gu(Wp.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,$s(9,{destroy:void 0},Xp.bind(null,o,u,a,n),null),Xt===null)throw Error(r(349));f||(Qi&127)!==0||kp(o,n,a)}return a}function kp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Ml(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Xp(t,n,a,o){n.value=a,n.getSnapshot=o,qp(n)&&Yp(t)}function Wp(t,n,a){return a(function(){qp(n)&&Yp(t)})}function qp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Jn(t,a)}catch{return!0}}function Yp(t){var n=as(t,2);n!==null&&jn(n,t,2)}function Iu(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),ds){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function jp(t,n,a,o){return t.baseState=a,Bu(t,It,typeof o=="function"?o:Ji)}function fS(t,n,a,o,u){if(Rl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Zp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Zp(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=P.T,_={};P.T=_;try{var T=a(u,o),B=P.S;B!==null&&B(_,T),Kp(t,n,T)}catch(ne){Hu(t,n,ne)}finally{f!==null&&_.types!==null&&(f.types=_.types),P.T=f}}else try{f=a(u,o),Kp(t,n,f)}catch(ne){Hu(t,n,ne)}}function Kp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Qp(t,n,o)},function(o){return Hu(t,n,o)}):Qp(t,n,a)}function Qp(t,n,a){n.status="fulfilled",n.value=a,Jp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Zp(t,a)))}function Hu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Jp(n),n=n.next;while(n!==o)}t.action=null}function Jp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function $p(t,n){return n}function em(t,n){if(Tt){var a=Xt.formState;if(a!==null){e:{var o=lt;if(Tt){if(Yt){t:{for(var u=Yt,f=mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=vi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Yt=vi(u.nextSibling),o=u.data==="F!";break e}}Ea(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$p,lastRenderedState:n},a.queue=o,a=Sm.bind(null,lt,o),o.dispatch=a,o=Iu(!1),f=qu.bind(null,lt,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=fS.bind(null,lt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function tm(t){var n=an();return nm(n,It,t)}function nm(t,n,a){if(n=Bu(t,n,$p)[0],t=Tl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(_){throw _===js?pl:_}else o=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,$s(9,{destroy:void 0},hS.bind(null,u,a),null)),[o,f,t]}function hS(t,n){t.action=n}function im(t){var n=an(),a=It;if(a!==null)return nm(n,a,t);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function $s(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Ml(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function am(){return an().memoizedState}function bl(t,n,a,o){var u=Fn();lt.flags|=t,u.memoizedState=$s(1|n,{destroy:void 0},a,o===void 0?null:o)}function Al(t,n,a,o){var u=an();o=o===void 0?null:o;var f=u.memoizedState.inst;It!==null&&o!==null&&Uu(o,It.memoizedState.deps)?u.memoizedState=$s(n,f,a,o):(lt.flags|=t,u.memoizedState=$s(1|n,f,a,o))}function sm(t,n){bl(8390656,8,t,n)}function Gu(t,n){Al(2048,8,t,n)}function dS(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Ml(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function rm(t){var n=an().memoizedState;return dS({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function om(t,n){return Al(4,2,t,n)}function lm(t,n){return Al(4,4,t,n)}function cm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function um(t,n,a){a=a!=null?a.concat([t]):null,Al(4,4,cm.bind(null,n,t),a)}function Vu(){}function fm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Uu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function hm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Uu(n,o[1]))return o[0];if(o=t(),ds){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o}function ku(t,n,a){return a===void 0||(Qi&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=dg(),lt.lanes|=t,La|=t,a)}function dm(t,n,a,o){return Jn(a,n)?a:Ks.current!==null?(t=ku(t,a,o),Jn(t,n)||(ln=!0),t):(Qi&42)===0||(Qi&1073741824)!==0&&(St&261930)===0?(ln=!0,t.memoizedState=a):(t=dg(),lt.lanes|=t,La|=t,n)}function pm(t,n,a,o,u){var f=I.p;I.p=f!==0&&8>f?f:8;var _=P.T,T={};P.T=T,qu(t,!1,n,a);try{var B=u(),ne=P.S;if(ne!==null&&ne(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=lS(B,o);uo(t,n,de,ai(t))}else uo(t,n,o,ai(t))}catch(xe){uo(t,n,{then:function(){},status:"rejected",reason:xe},ai())}finally{I.p=f,_!==null&&T.types!==null&&(_.types=T.types),P.T=_}}function pS(){}function Xu(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=mm(t).queue;pm(t,u,n,D,a===null?pS:function(){return gm(t),a(o)})}function mm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:D,baseState:D,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:D},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function gm(t){var n=mm(t);n.next===null&&(n=t.alternate.memoizedState),uo(t,n.next.queue,{},ai())}function Wu(){return An(Co)}function vm(){return an().memoizedState}function _m(){return an().memoizedState}function mS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();t=Aa(a);var o=Ra(n,t,a);o!==null&&(jn(o,n,a),so(o,n,a)),n={cache:xu()},t.payload=n;return}n=n.return}}function gS(t,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(t)?xm(n,a):(a=cu(t,n,a,o),a!==null&&(jn(a,t,o),ym(a,n,o)))}function Sm(t,n,a){var o=ai();uo(t,n,a,o)}function uo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(t))xm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(u.hasEagerState=!0,u.eagerState=T,Jn(T,_))return ol(t,n,u,0),Xt===null&&rl(),!1}catch{}finally{}if(a=cu(t,n,u,o),a!==null)return jn(a,t,o),ym(a,n,o),!0}return!1}function qu(t,n,a,o){if(o={lane:2,revertLane:bf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Rl(t)){if(n)throw Error(r(479))}else n=cu(t,a,o,2),n!==null&&jn(n,t,2)}function Rl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function xm(t,n){Qs=xl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ym(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Hr(t,a)}}var fo={readContext:An,use:El,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};fo.useEffectEvent=en;var Mm={readContext:An,use:El,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:sm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,bl(4194308,4,cm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return bl(4194308,4,t,n)},useInsertionEffect:function(t,n){bl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var o=t();if(ds){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(ds){ze(!0);try{a(n)}finally{ze(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=gS.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Iu(t);var n=t.queue,a=Sm.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Vu,useDeferredValue:function(t,n){var a=Fn();return ku(a,t,n)},useTransition:function(){var t=Iu(!1);return t=pm.bind(null,lt,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=Fn();if(Tt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(St&127)!==0||kp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,sm(Wp.bind(null,o,f,t),[t]),o.flags|=2048,$s(9,{destroy:void 0},Xp.bind(null,o,f,a,n),null),a},useId:function(){var t=Fn(),n=Xt.identifierPrefix;if(Tt){var a=Pi,o=Oi;a=(o&~(1<<32-et(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=cS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Wu,useFormState:em,useActionState:em,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:zu,useCacheRefresh:function(){return Fn().memoizedState=mS.bind(null,lt)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Yu={readContext:An,use:El,useCallback:fm,useContext:An,useEffect:Gu,useImperativeHandle:um,useInsertionEffect:om,useLayoutEffect:lm,useMemo:hm,useReducer:Tl,useRef:am,useState:function(){return Tl(Ji)},useDebugValue:Vu,useDeferredValue:function(t,n){var a=an();return dm(a,It.memoizedState,t,n)},useTransition:function(){var t=Tl(Ji)[0],n=an().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:Vp,useId:vm,useHostTransitionStatus:Wu,useFormState:tm,useActionState:tm,useOptimistic:function(t,n){var a=an();return jp(a,It,t,n)},useMemoCache:zu,useCacheRefresh:_m};Yu.useEffectEvent=rm;var Em={readContext:An,use:El,useCallback:fm,useContext:An,useEffect:Gu,useImperativeHandle:um,useInsertionEffect:om,useLayoutEffect:lm,useMemo:hm,useReducer:Fu,useRef:am,useState:function(){return Fu(Ji)},useDebugValue:Vu,useDeferredValue:function(t,n){var a=an();return It===null?ku(a,t,n):dm(a,It.memoizedState,t,n)},useTransition:function(){var t=Fu(Ji)[0],n=an().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:Vp,useId:vm,useHostTransitionStatus:Wu,useFormState:im,useActionState:im,useOptimistic:function(t,n){var a=an();return It!==null?jp(a,It,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:zu,useCacheRefresh:_m};Em.useEffectEvent=rm;function ju(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zu={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Aa(o);u.payload=n,a!=null&&(u.callback=a),n=Ra(t,u,o),n!==null&&(jn(n,t,o),so(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Aa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ra(t,u,o),n!==null&&(jn(n,t,o),so(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ai(),o=Aa(a);o.tag=2,n!=null&&(o.callback=n),n=Ra(t,o,a),n!==null&&(jn(n,t,a),so(n,t,a))}};function Tm(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,o)||!Qr(u,f):!0}function bm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Zu.enqueueReplaceState(n,n.state,null)}function ps(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Am(t){sl(t)}function Rm(t){console.error(t)}function Cm(t){sl(t)}function Cl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function wm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ku(t,n,a){return a=Aa(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(t,n)},a}function Dm(t){return t=Aa(t),t.tag=3,t}function Um(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){wm(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){wm(n,a,o),typeof u!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function vS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?Hl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Mf(t,o,u)),!1;case 22:return a.flags|=65536,o===ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Mf(t,o,u)),!1}throw Error(r(435,a.tag))}return Mf(t,o,u),Hl(),!1}if(Tt)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==mu&&(t=Error(r(422),{cause:o}),eo(hi(t,a)))):(o!==mu&&(n=Error(r(423),{cause:o}),eo(hi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=hi(o,a),u=Ku(t.stateNode,o,u),Au(t,u),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:o});if(f=hi(f,a),xo===null?xo=[f]:xo.push(f),tn!==4&&(tn=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Ku(a.stateNode,o,t),Au(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Na===null||!Na.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Dm(u),Um(u,t,a,o),Au(a,u),!1}a=a.return}while(a!==null);return!1}var Qu=Error(r(461)),ln=!1;function Rn(t,n,a,o){n.child=t===null?Pp(n,null,a,o):hs(n,t.child,a,o)}function Lm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var T in o)T!=="ref"&&(_[T]=o[T])}else _=o;return ls(n),o=Lu(t,n,a,_,f,u),T=Nu(),t!==null&&!ln?(Ou(t,n,u),$i(t,n,u)):(Tt&&T&&du(n),n.flags|=1,Rn(t,n,o,u),n.child)}function Nm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Om(t,n,f,o,u)):(t=cl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!rf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(_,o)&&t.ref===n.ref)return $i(t,n,u)}return n.flags|=1,t=Yi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Om(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Qr(f,o)&&t.ref===n.ref)if(ln=!1,n.pendingProps=o=f,rf(t,u))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,$i(t,n,u)}return Ju(t,n,a,o,u)}function Pm(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return zm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&dl(n,f!==null?f.cachePool:null),f!==null?Fp(n,f):Cu(),Ip(n);else return o=n.lanes=536870912,zm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(dl(n,f.cachePool),Fp(n,f),wa(),n.memoizedState=null):(t!==null&&dl(n,null),Cu(),wa());return Rn(t,n,u,a),n.child}function ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function zm(t,n,a,o,u){var f=Mu();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&dl(n,null),Cu(),Ip(n),t!==null&&Ws(t,n,o,!0),n.childLanes=u,null}function wl(t,n){return n=Ul({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Bm(t,n,a){return hs(n,t.child,null,a),t=wl(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function _S(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=wl(n,o),n.lanes=536870912,ho(null,t);if(Du(n),(t=Yt)?(t=Zg(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ya!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=xp(t),a.return=n,n.child=a,bn=n,Yt=null)):t=null,t===null)throw Ea(n);return n.lanes=536870912,null}return wl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Du(n),u)if(n.flags&256)n.flags&=-257,n=Bm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Ws(t,n,a,!1),u=(a&t.childLanes)!==0,ln||u){if(o=Xt,o!==null&&(_=Ni(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,as(t,_),jn(o,t,_),Qu;Hl(),n=Bm(t,n,a)}else t=f.treeContext,Yt=vi(_.nextSibling),bn=n,Tt=!0,Ma=null,mi=!1,t!==null&&Ep(n,t),n=wl(n,o),n.flags|=4096;return n}return t=Yi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ju(t,n,a,o,u){return ls(n),a=Lu(t,n,a,o,void 0,u),o=Nu(),t!==null&&!ln?(Ou(t,n,u),$i(t,n,u)):(Tt&&o&&du(n),n.flags|=1,Rn(t,n,a,u),n.child)}function Fm(t,n,a,o,u,f){return ls(n),n.updateQueue=null,a=Gp(n,o,a,u),Hp(t),o=Nu(),t!==null&&!ln?(Ou(t,n,f),$i(t,n,f)):(Tt&&o&&du(n),n.flags|=1,Rn(t,n,a,f),n.child)}function Im(t,n,a,o,u){if(ls(n),n.stateNode===null){var f=Gs,_=a.contextType;typeof _=="object"&&_!==null&&(f=An(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Tu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?An(_):Gs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ju(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Zu.enqueueReplaceState(f,f.state,null),oo(n,o,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=ps(a,T);f.props=B;var ne=f.context,de=a.contextType;_=Gs,typeof de=="object"&&de!==null&&(_=An(de));var xe=a.getDerivedStateFromProps;de=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||ne!==_)&&bm(n,f,o,_),ba=!1;var ie=n.memoizedState;f.state=ie,oo(n,o,f,u),ro(),ne=n.memoizedState,T||ie!==ne||ba?(typeof xe=="function"&&(ju(n,a,xe,o),ne=n.memoizedState),(B=ba||Tm(n,a,B,o,ie,ne,_))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),f.props=o,f.state=ne,f.context=_,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,bu(t,n),_=n.memoizedProps,de=ps(a,_),f.props=de,xe=n.pendingProps,ie=f.context,ne=a.contextType,B=Gs,typeof ne=="object"&&ne!==null&&(B=An(ne)),T=a.getDerivedStateFromProps,(ne=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xe||ie!==B)&&bm(n,f,o,B),ba=!1,ie=n.memoizedState,f.state=ie,oo(n,o,f,u),ro();var le=n.memoizedState;_!==xe||ie!==le||ba||t!==null&&t.dependencies!==null&&fl(t.dependencies)?(typeof T=="function"&&(ju(n,a,T,o),le=n.memoizedState),(de=ba||Tm(n,a,de,o,ie,le,B)||t!==null&&t.dependencies!==null&&fl(t.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=B,o=de):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Dl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=hs(n,t.child,null,u),n.child=hs(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=$i(t,n,u),t}function Hm(t,n,a,o){return rs(),n.flags|=256,Rn(t,n,a,o),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(t){return{baseLanes:t,cachePool:wp()}}function tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function Gm(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Tt){if(u?Ca(n):wa(),(t=Yt)?(t=Zg(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ya!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=xp(t),a.return=n,n.child=a,bn=n,Yt=null)):t=null,t===null)throw Ea(n);return Ff(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(wa(),u=n.mode,T=Ul({mode:"hidden",children:T},u),o=ss(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=ef(a),o.childLanes=tf(t,_,a),n.memoizedState=$u,ho(null,o)):(Ca(n),nf(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Ca(n),n.flags&=-257,n=af(t,n,a)):n.memoizedState!==null?(wa(),n.child=t.child,n.flags|=128,n=null):(wa(),T=o.fallback,u=n.mode,o=Ul({mode:"visible",children:o.children},u),T=ss(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,hs(n,t.child,null,a),o=n.child,o.memoizedState=ef(a),o.childLanes=tf(t,_,a),n.memoizedState=$u,n=ho(null,o));else if(Ca(n),Ff(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var ne=_.dgst;_=ne,o=Error(r(419)),o.stack="",o.digest=_,eo({value:o,source:null,stack:null}),n=af(t,n,a)}else if(ln||Ws(t,n,a,!1),_=(a&t.childLanes)!==0,ln||_){if(_=Xt,_!==null&&(o=Ni(_,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,as(t,o),jn(_,t,o),Qu;Bf(T)||Hl(),n=af(t,n,a)}else Bf(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Yt=vi(T.nextSibling),bn=n,Tt=!0,Ma=null,mi=!1,t!==null&&Ep(n,t),n=nf(n,o.children),n.flags|=4096);return n}return u?(wa(),T=o.fallback,u=n.mode,B=t.child,ne=B.sibling,o=Yi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ne!==null?T=Yi(ne,T):(T=ss(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,ho(null,o),o=n.child,T=t.child.memoizedState,T===null?T=ef(a):(u=T.cachePool,u!==null?(B=rn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=wp(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=tf(t,_,a),n.memoizedState=$u,ho(t.child,o)):(Ca(n),a=t.child,t=a.sibling,a=Yi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function nf(t,n){return n=Ul({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ul(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function af(t,n,a){return hs(n,t.child,null,a),t=nf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Vm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),_u(t.return,n,a)}function sf(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function km(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=nn.current,T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,ue(nn,_),Rn(t,n,o,a),o=Tt?$r:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vm(t,a,n);else if(t.tag===19)Vm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Sl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),sf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Sl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}sf(n,!0,a,null,f,o);break;case"together":sf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function $i(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),La|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Yi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Yi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&fl(t)))}function SS(t,n,a){switch(n.tag){case 3:Pe(n,n.stateNode.containerInfo),Ta(n,rn,t.memoizedState.cache),rs();break;case 27:case 5:$e(n);break;case 4:Pe(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Du(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Gm(t,n,a):(Ca(n),t=$i(t,n,a),t!==null?t.sibling:null);Ca(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ws(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return km(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ue(nn,nn.current),o)break;return null;case 22:return n.lanes=0,Pm(t,n,a,n.pendingProps);case 24:Ta(n,rn,t.memoizedState.cache)}return $i(t,n,a)}function Xm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!rf(t,a)&&(n.flags&128)===0)return ln=!1,SS(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,Tt&&(n.flags&1048576)!==0&&Mp(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=us(n.elementType),n.type=t,typeof t=="function")uu(t)?(o=ps(t,o),n.tag=1,n=Im(null,n,t,o,a)):(n.tag=0,n=Ju(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=Lm(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=Nm(null,n,t,o,a);break e}}throw n=ye(t)||t,Error(r(306,n,""))}}return n;case 0:return Ju(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ps(o,n.pendingProps),Im(t,n,o,u,a);case 3:e:{if(Pe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,bu(t,n),oo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ta(n,rn,o),o!==f.cache&&Su(n,[rn],a,!0),ro(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Hm(t,n,o,a);break e}else if(o!==u){u=hi(Error(r(424)),n),eo(u),n=Hm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=vi(t.firstChild),bn=n,Tt=!0,Ma=null,mi=!0,a=Pp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(rs(),o===u){n=$i(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Dl(t,n),t===null?(a=tv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,t=n.pendingProps,o=Yl(pe.current).createElement(a),o[Jt]=n,o[En]=t,Cn(o,a,t),W(o),n.stateNode=o):n.memoizedState=tv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return $e(n),t===null&&Tt&&(o=n.stateNode=Jg(n.type,n.pendingProps,pe.current),bn=n,mi=!0,u=Yt,Ba(n.type)?(If=u,Yt=vi(o.firstChild)):Yt=u),Rn(t,n,n.pendingProps.children,a),Dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Tt&&((u=o=Yt)&&(o=ZS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,bn=n,Yt=vi(o.firstChild),mi=!1,u=!0):u=!1),u||Ea(n)),$e(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,Of(u,f)?o=null:_!==null&&Of(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Lu(t,n,uS,null,null,a),Co._currentValue=u),Dl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&Tt&&((t=a=Yt)&&(a=KS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,bn=n,Yt=null,t=!0):t=!1),t||Ea(n)),null;case 13:return Gm(t,n,a);case 4:return Pe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=hs(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return Lm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ls(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return Nm(t,n,n.type,n.pendingProps,a);case 15:return Om(t,n,n.type,n.pendingProps,a);case 19:return km(t,n,a);case 31:return _S(t,n,a);case 22:return Pm(t,n,a,n.pendingProps);case 24:return ls(n),o=An(rn),t===null?(u=Mu(),u===null&&(u=Xt,f=xu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Tu(n),Ta(n,rn,u)):((t.lanes&a)!==0&&(bu(t,n),oo(n,null,null,a),ro()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ta(n,rn,o)):(o=f.cache,Ta(n,rn,o),o!==u.cache&&Su(n,[rn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ea(t){t.flags|=4}function of(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(vg())t.flags|=8192;else throw fs=ml,Eu}else t.flags&=-16777217}function Wm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!rv(n))if(vg())t.flags|=8192;else throw fs=ml,Eu}function Ll(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?hn():536870912,t.lanes|=n,ir|=n)}function po(t,n){if(!Tt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function xS(t,n,a){var o=n.pendingProps;switch(pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(rn),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xs(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),jt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ea(n),f!==null?(jt(n),Wm(n,f)):(jt(n),of(n,u,null,o,a))):f?f!==t.memoizedState?(ea(n),jt(n),Wm(n,f)):(jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ea(n),jt(n),of(n,u,t,o,a)),null;case 27:if(At(n),a=pe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}t=V.current,Xs(n)?Tp(n):(t=Jg(u,o,a),n.stateNode=t,ea(n))}return jt(n),null;case 5:if(At(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}if(f=V.current,Xs(n))Tp(n);else{var _=Yl(pe.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[Jt]=n,f[En]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Cn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ea(n)}}return jt(n),of(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=pe.current,Xs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[Jt]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Gg(t.nodeValue,a)),t||Ea(n,!0)}else t=Yl(t).createTextNode(o),t[Jt]=n,n.stateNode=t}return jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Xs(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Jt]=n}else rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),t=!1}else a=gu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Xs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Jt]=n}else rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=gu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),jt(n),null);case 4:return Re(),t===null&&wf(n.stateNode.containerInfo),jt(n),null;case 10:return Ki(n.type),jt(n),null;case 19:if(Z(nn),o=n.memoizedState,o===null)return jt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)po(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Sl(t),f!==null){for(n.flags|=128,po(o,!1),t=f.updateQueue,n.updateQueue=t,Ll(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Sp(a,t),a=a.sibling;return ue(nn,nn.current&1|2),Tt&&ji(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&me()>Bl&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304)}else{if(!u)if(t=Sl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ll(n,t),po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Tt)return jt(n),null}else 2*me()-o.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=me(),t.sibling=null,a=nn.current,ue(nn,u?a&1|2:a&1),Tt&&ji(n,o.treeForkCount),t):(jt(n),null);case 22:case 23:return ti(n),wu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(rn),jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function yS(t,n){switch(pu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ki(rn),Re(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return At(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(r(340));rs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));rs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(nn),null;case 4:return Re(),null;case 10:return Ki(n.type),null;case 22:case 23:return ti(n),wu(),t!==null&&Z(cs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ki(rn),null;case 25:return null;default:return null}}function qm(t,n){switch(pu(n),n.tag){case 3:Ki(rn),Re();break;case 26:case 27:case 5:At(n);break;case 4:Re();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Z(nn);break;case 10:Ki(n.type);break;case 22:case 23:ti(n),wu(),t!==null&&Z(cs);break;case 24:Ki(rn)}}function mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(T){zt(n,n.return,T)}}function Da(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,u=n;var B=a,ne=T;try{ne()}catch(de){zt(u,B,de)}}}o=o.next}while(o!==f)}}catch(de){zt(n,n.return,de)}}function Ym(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Bp(n,a)}catch(o){zt(t,t.return,o)}}}function jm(t,n,a){a.props=ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function go(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function Zm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function lf(t,n,a){try{var o=t.stateNode;kS(o,t.type,a,n),o[En]=n}catch(u){zt(t,t.return,u)}}function Km(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ba(t.type)||t.tag===4}function cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(o!==4&&(o===27&&Ba(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(uf(t,n,a),t=t.sibling;t!==null;)uf(t,n,a),t=t.sibling}function Nl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Nl(t,n,a),t=t.sibling;t!==null;)Nl(t,n,a),t=t.sibling}function Qm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[Jt]=t,n[En]=a}catch(f){zt(t,t.return,f)}}var ta=!1,cn=!1,ff=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function MS(t,n){if(t=t.containerInfo,Lf=ec,t=up(t),iu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,T=-1,B=-1,ne=0,de=0,xe=t,ie=null;t:for(;;){for(var le;xe!==a||u!==0&&xe.nodeType!==3||(T=_+u),xe!==f||o!==0&&xe.nodeType!==3||(B=_+o),xe.nodeType===3&&(_+=xe.nodeValue.length),(le=xe.firstChild)!==null;)ie=xe,xe=le;for(;;){if(xe===t)break t;if(ie===a&&++ne===u&&(T=_),ie===f&&++de===o&&(B=_),(le=xe.nextSibling)!==null)break;xe=ie,ie=xe.parentNode}xe=le}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nf={focusedElem:t,selectionRange:a},ec=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ge=ps(a.type,u);t=o.getSnapshotBeforeUpdate(Ge,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Je){zt(a,a.return,Je)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)zf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function $m(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ia(t,a),o&4&&mo(5,a);break;case 1:if(ia(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){zt(a,a.return,_)}else{var u=ps(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){zt(a,a.return,_)}}o&64&&Ym(a),o&512&&go(a,a.return);break;case 3:if(ia(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bp(t,n)}catch(_){zt(a,a.return,_)}}break;case 27:n===null&&o&4&&Qm(a);case 26:case 5:ia(t,a),n===null&&o&4&&Zm(a),o&512&&go(a,a.return);break;case 12:ia(t,a);break;case 31:ia(t,a),o&4&&ng(t,a);break;case 13:ia(t,a),o&4&&ig(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=US.bind(null,a),QS(t,a))));break;case 22:if(o=a.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||cn,u=ta;var f=cn;ta=o,(cn=n)&&!f?aa(t,a,(a.subtreeFlags&8772)!==0):ia(t,a),ta=u,cn=f}break;case 30:break;default:ia(t,a)}}function eg(t){var n=t.alternate;n!==null&&(t.alternate=null,eg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&kr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,Xn=!1;function na(t,n,a){for(a=a.child;a!==null;)tg(t,n,a),a=a.sibling}function tg(t,n,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Ye,a)}catch{}switch(a.tag){case 26:cn||zi(a,n),na(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||zi(a,n);var o=Qt,u=Xn;Ba(a.type)&&(Qt=a.stateNode,Xn=!1),na(t,n,a),bo(a.stateNode),Qt=o,Xn=u;break;case 5:cn||zi(a,n);case 6:if(o=Qt,u=Xn,Qt=null,na(t,n,a),Qt=o,Xn=u,Qt!==null)if(Xn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Qt!==null&&(Xn?(t=Qt,Yg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fr(t)):Yg(Qt,a.stateNode));break;case 4:o=Qt,u=Xn,Qt=a.stateNode.containerInfo,Xn=!0,na(t,n,a),Qt=o,Xn=u;break;case 0:case 11:case 14:case 15:Da(2,a,n),cn||Da(4,a,n),na(t,n,a);break;case 1:cn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&jm(a,n,o)),na(t,n,a);break;case 21:na(t,n,a);break;case 22:cn=(o=cn)||a.memoizedState!==null,na(t,n,a),cn=o;break;default:na(t,n,a)}}function ng(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fr(t)}catch(a){zt(n,n.return,a)}}}function ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fr(t)}catch(a){zt(n,n.return,a)}}function ES(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Jm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Jm),n;default:throw Error(r(435,t.tag))}}function Ol(t,n){var a=ES(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=LS.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,T=_;e:for(;T!==null;){switch(T.tag){case 27:if(Ba(T.type)){Qt=T.stateNode,Xn=!1;break e}break;case 5:Qt=T.stateNode,Xn=!1;break e;case 3:case 4:Qt=T.stateNode.containerInfo,Xn=!0;break e}T=T.return}if(Qt===null)throw Error(r(160));tg(f,_,u),Qt=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ag(n,t),n=n.sibling}var Ti=null;function ag(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Da(3,t,t.return),mo(3,t),Da(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(cn||a===null||zi(a,a.return)),o&64&&ta&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(Wn(n,t),qn(t),o&512&&(cn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[es]||f[Jt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,o,a),f[Jt]=t,W(f),o=f;break e;case"link":var _=av("link","href",u).get(o+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(f=_[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=av("meta","content",u).get(o+(a.content||""))){for(T=0;T<_.length;T++)if(f=_[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[Jt]=t,W(f),o=f}t.stateNode=o}else sv(u,t.type,t.stateNode);else t.stateNode=iv(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?sv(u,t.type,t.stateNode):iv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&lf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(cn||a===null||zi(a,a.return)),a!==null&&o&4&&lf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(cn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{Vn(u,"")}catch(Ge){zt(t,t.return,Ge)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,lf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(ff=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ge){zt(t,t.return,Ge)}}break;case 3:if(Kl=null,u=Ti,Ti=jl(n.containerInfo),Wn(n,t),Ti=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{fr(n.containerInfo)}catch(Ge){zt(t,t.return,Ge)}ff&&(ff=!1,sg(t));break;case 4:o=Ti,Ti=jl(t.stateNode.containerInfo),Wn(n,t),qn(t),Ti=o;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ol(t,o)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zl=me()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ol(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ne=ta,de=cn;if(ta=ne||u,cn=de||B,Wn(n,t),cn=de,ta=ne,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ta||cn||ms(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=B.stateNode;var xe=B.memoizedProps.style,ie=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;T.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(Ge){zt(B,B.return,Ge)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ge){zt(B,B.return,Ge)}}}else if(n.tag===18){if(a===null){B=n;try{var le=B.stateNode;u?jg(le,!0):jg(B.stateNode,!1)}catch(Ge){zt(B,B.return,Ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ol(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ol(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Km(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=cf(t);Nl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Vn(_,""),a.flags&=-33);var T=cf(t);Nl(t,T,_);break;case 3:case 4:var B=a.stateNode.containerInfo,ne=cf(t);uf(t,ne,B);break;default:throw Error(r(161))}}catch(de){zt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function sg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ia(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$m(t,n.alternate,n),n=n.sibling}function ms(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Da(4,n,n.return),ms(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jm(n,n.return,a),ms(n);break;case 27:bo(n.stateNode);case 26:case 5:zi(n,n.return),ms(n);break;case 22:n.memoizedState===null&&ms(n);break;case 30:ms(n);break;default:ms(n)}t=t.sibling}}function aa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:aa(u,f,a),mo(4,f);break;case 1:if(aa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){zt(o,o.return,ne)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)zp(B[u],T)}catch(ne){zt(o,o.return,ne)}}a&&_&64&&Ym(f),go(f,f.return);break;case 27:Qm(f);case 26:case 5:aa(u,f,a),a&&o===null&&_&4&&Zm(f),go(f,f.return);break;case 12:aa(u,f,a);break;case 31:aa(u,f,a),a&&_&4&&ng(u,f);break;case 13:aa(u,f,a),a&&_&4&&ig(u,f);break;case 22:f.memoizedState===null&&aa(u,f,a),go(f,f.return);break;case 30:break;default:aa(u,f,a)}n=n.sibling}}function hf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function df(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function bi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rg(t,n,a,o),n=n.sibling}function rg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,o),u&2048&&mo(9,n);break;case 1:bi(t,n,a,o);break;case 3:bi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){bi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,T=f.onPostCommit;typeof T=="function"&&T(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){zt(n,n.return,B)}}else bi(t,n,a,o);break;case 31:bi(t,n,a,o);break;case 13:bi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?bi(t,n,a,o):vo(t,n):f._visibility&2?bi(t,n,a,o):(f._visibility|=2,er(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&hf(_,n);break;case 24:bi(t,n,a,o),u&2048&&df(n.alternate,n);break;default:bi(t,n,a,o)}}function er(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,T=a,B=o,ne=_.flags;switch(_.tag){case 0:case 11:case 15:er(f,_,T,B,u),mo(8,_);break;case 23:break;case 22:var de=_.stateNode;_.memoizedState!==null?de._visibility&2?er(f,_,T,B,u):vo(f,_):(de._visibility|=2,er(f,_,T,B,u)),u&&ne&2048&&hf(_.alternate,_);break;case 24:er(f,_,T,B,u),u&&ne&2048&&df(_.alternate,_);break;default:er(f,_,T,B,u)}n=n.sibling}}function vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:vo(a,o),u&2048&&hf(o.alternate,o);break;case 24:vo(a,o),u&2048&&df(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var _o=8192;function tr(t,n,a){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)og(t,n,a),t=t.sibling}function og(t,n,a){switch(t.tag){case 26:tr(t,n,a),t.flags&_o&&t.memoizedState!==null&&cx(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:tr(t,n,a);break;case 3:case 4:var o=Ti;Ti=jl(t.stateNode.containerInfo),tr(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=_o,_o=16777216,tr(t,n,a),_o=o):tr(t,n,a));break;default:tr(t,n,a)}}function lg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function So(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,ug(o,t)}lg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cg(t),t=t.sibling}function cg(t){switch(t.tag){case 0:case 11:case 15:So(t),t.flags&2048&&Da(9,t,t.return);break;case 3:So(t);break;case 12:So(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Pl(t)):So(t);break;default:So(t)}}function Pl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,ug(o,t)}lg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Da(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}t=t.sibling}}function ug(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Da(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else e:for(a=t;_n!==null;){o=_n;var u=o.sibling,f=o.return;if(eg(o),o===a){_n=null;break e}if(u!==null){u.return=f,_n=u;break e}_n=f}}}var TS={getCacheForType:function(t){var n=An(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(rn).controller.signal}},bS=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Xt=null,dt=null,St=0,Pt=0,ni=null,Ua=!1,nr=!1,pf=!1,sa=0,tn=0,La=0,gs=0,mf=0,ii=0,ir=0,xo=null,Yn=null,gf=!1,zl=0,fg=0,Bl=1/0,Fl=null,Na=null,pn=0,Oa=null,ar=null,ra=0,vf=0,_f=null,hg=null,yo=0,Sf=null;function ai(){return(Nt&2)!==0&&St!==0?St&-St:P.T!==null?bf():Gr()}function dg(){if(ii===0)if((St&536870912)===0||Tt){var t=fe;fe<<=1,(fe&3932160)===0&&(fe=262144),ii=t}else ii=536870912;return t=ei.current,t!==null&&(t.flags|=32),ii}function jn(t,n,a){(t===Xt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(sr(t,0),Pa(t,St,ii,!1)),Mn(t,a),((Nt&2)===0||t!==Xt)&&(t===Xt&&((Nt&2)===0&&(gs|=a),tn===4&&Pa(t,St,ii,!1)),Bi(t))}function pg(t,n,a){if((Nt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||tt(t,n),u=o?CS(t,n):yf(t,n,!0),f=o;do{if(u===0){nr&&!o&&Pa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!AS(a)){u=yf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var T=t;u=xo;var B=T.current.memoizedState.isDehydrated;if(B&&(sr(T,_).flags|=256),_=yf(T,_,!1),_!==2){if(pf&&!B){T.errorRecoveryDisabledLanes|=f,gs|=f,u=4;break e}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){sr(t,0),Pa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Pa(o,n,ii,!Ua);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=zl+300-me(),10<u)){if(Pa(o,n,ii,!Ua),Ue(o,0,!0)!==0)break e;ra=n,o.timeoutHandle=Wg(mg.bind(null,o,a,Yn,Fl,gf,n,ii,gs,ir,Ua,f,"Throttled",-0,0),u);break e}mg(o,a,Yn,Fl,gf,n,ii,gs,ir,Ua,f,null,-0,0)}}break}while(!0);Bi(t)}function mg(t,n,a,o,u,f,_,T,B,ne,de,xe,ie,le){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},og(n,f,xe);var Ge=(f&62914560)===f?zl-me():(f&4194048)===f?fg-me():0;if(Ge=ux(xe,Ge),Ge!==null){ra=f,t.cancelPendingCommit=Ge(Eg.bind(null,t,n,f,a,o,u,_,T,B,de,xe,null,ie,le)),Pa(t,f,_,!ne);return}}Eg(t,n,f,a,o,u,_,T,B)}function AS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(t,n,a,o){n&=~mf,n&=~gs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-et(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Ir(t,a,n)}function Il(){return(Nt&6)===0?(Mo(0),!1):!0}function xf(){if(dt!==null){if(Pt===0)var t=dt.return;else t=dt,Zi=os=null,Pu(t),Zs=null,io=0,t=dt;for(;t!==null;)qm(t.alternate,t),t=t.return;dt=null}}function sr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,qS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ra=0,xf(),Xt=t,dt=a=Yi(t.current,null),St=n,Pt=0,ni=null,Ua=!1,nr=tt(t,n),pf=!1,ir=ii=mf=gs=La=tn=0,Yn=xo=null,gf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-et(o),f=1<<u;n|=t[u],o&=~f}return sa=n,rl(),a}function gg(t,n){lt=null,P.H=fo,n===js||n===pl?(n=Lp(),Pt=3):n===Eu?(n=Lp(),Pt=4):Pt=n===Qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,dt===null&&(tn=1,Cl(t,hi(n,t.current)))}function vg(){var t=ei.current;return t===null?!0:(St&4194048)===St?gi===null:(St&62914560)===St||(St&536870912)!==0?t===gi:!1}function _g(){var t=P.H;return P.H=fo,t===null?fo:t}function Sg(){var t=P.A;return P.A=TS,t}function Hl(){tn=4,Ua||(St&4194048)!==St&&ei.current!==null||(nr=!0),(La&134217727)===0&&(gs&134217727)===0||Xt===null||Pa(Xt,St,ii,!1)}function yf(t,n,a){var o=Nt;Nt|=2;var u=_g(),f=Sg();(Xt!==t||St!==n)&&(Fl=null,sr(t,n)),n=!1;var _=tn;e:do try{if(Pt!==0&&dt!==null){var T=dt,B=ni;switch(Pt){case 8:xf(),_=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var ne=Pt;if(Pt=0,ni=null,rr(t,T,B,ne),a&&nr){_=0;break e}break;default:ne=Pt,Pt=0,ni=null,rr(t,T,B,ne)}}RS(),_=tn;break}catch(de){gg(t,de)}while(!0);return n&&t.shellSuspendCounter++,Zi=os=null,Nt=o,P.H=u,P.A=f,dt===null&&(Xt=null,St=0,rl()),_}function RS(){for(;dt!==null;)xg(dt)}function CS(t,n){var a=Nt;Nt|=2;var o=_g(),u=Sg();Xt!==t||St!==n?(Fl=null,Bl=me()+500,sr(t,n)):nr=tt(t,n);e:do try{if(Pt!==0&&dt!==null){n=dt;var f=ni;t:switch(Pt){case 1:Pt=0,ni=null,rr(t,n,f,1);break;case 2:case 9:if(Dp(f)){Pt=0,ni=null,yg(n);break}n=function(){Pt!==2&&Pt!==9||Xt!==t||(Pt=7),Bi(t)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:Dp(f)?(Pt=0,ni=null,yg(n)):(Pt=0,ni=null,rr(t,n,f,7));break;case 5:var _=null;switch(dt.tag){case 26:_=dt.memoizedState;case 5:case 27:var T=dt;if(_?rv(_):T.stateNode.complete){Pt=0,ni=null;var B=T.sibling;if(B!==null)dt=B;else{var ne=T.return;ne!==null?(dt=ne,Gl(ne)):dt=null}break t}}Pt=0,ni=null,rr(t,n,f,5);break;case 6:Pt=0,ni=null,rr(t,n,f,6);break;case 8:xf(),tn=6;break e;default:throw Error(r(462))}}wS();break}catch(de){gg(t,de)}while(!0);return Zi=os=null,P.H=o,P.A=u,Nt=a,dt!==null?0:(Xt=null,St=0,rl(),tn)}function wS(){for(;dt!==null&&!b();)xg(dt)}function xg(t){var n=Xm(t.alternate,t,sa);t.memoizedProps=t.pendingProps,n===null?Gl(t):dt=n}function yg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Fm(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=Fm(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Pu(n);default:qm(a,n),n=dt=Sp(n,sa),n=Xm(a,n,sa)}t.memoizedProps=t.pendingProps,n===null?Gl(t):dt=n}function rr(t,n,a,o){Zi=os=null,Pu(n),Zs=null,io=0;var u=n.return;try{if(vS(t,u,n,a,St)){tn=1,Cl(t,hi(a,t.current)),dt=null;return}}catch(f){if(u!==null)throw dt=u,f;tn=1,Cl(t,hi(a,t.current)),dt=null;return}n.flags&32768?(Tt||o===1?t=!0:nr||(St&536870912)!==0?t=!1:(Ua=t=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),Mg(n,t)):Gl(n)}function Gl(t){var n=t;do{if((n.flags&32768)!==0){Mg(n,Ua);return}t=n.return;var a=xS(n.alternate,n,sa);if(a!==null){dt=a;return}if(n=n.sibling,n!==null){dt=n;return}dt=n=t}while(n!==null);tn===0&&(tn=5)}function Mg(t,n){do{var a=yS(t.alternate,t);if(a!==null){a.flags&=32767,dt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){dt=t;return}dt=t=a}while(t!==null);tn=6,dt=null}function Eg(t,n,a,o,u,f,_,T,B){t.cancelPendingCommit=null;do Vl();while(pn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=lu,xi(t,a,f,_,T,B),t===Xt&&(dt=Xt=null,St=0),ar=n,Oa=t,ra=a,vf=f,_f=u,hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,NS(De,function(){return Cg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=I.p,I.p=2,_=Nt,Nt|=4;try{MS(t,n,a)}finally{Nt=_,I.p=u,P.T=o}}pn=1,Tg(),bg(),Ag()}}function Tg(){if(pn===1){pn=0;var t=Oa,n=ar,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=I.p;I.p=2;var u=Nt;Nt|=4;try{ag(n,t);var f=Nf,_=up(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(_!==T&&T&&T.ownerDocument&&cp(T.ownerDocument.documentElement,T)){if(B!==null&&iu(T)){var ne=B.start,de=B.end;if(de===void 0&&(de=ne),"selectionStart"in T)T.selectionStart=ne,T.selectionEnd=Math.min(de,T.value.length);else{var xe=T.ownerDocument||document,ie=xe&&xe.defaultView||window;if(ie.getSelection){var le=ie.getSelection(),Ge=T.textContent.length,Je=Math.min(B.start,Ge),Gt=B.end===void 0?Je:Math.min(B.end,Ge);!le.extend&&Je>Gt&&(_=Gt,Gt=Je,Je=_);var Q=lp(T,Je),G=lp(T,Gt);if(Q&&G&&(le.rangeCount!==1||le.anchorNode!==Q.node||le.anchorOffset!==Q.offset||le.focusNode!==G.node||le.focusOffset!==G.offset)){var te=xe.createRange();te.setStart(Q.node,Q.offset),le.removeAllRanges(),Je>Gt?(le.addRange(te),le.extend(G.node,G.offset)):(te.setEnd(G.node,G.offset),le.addRange(te))}}}}for(xe=[],le=T;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xe.length;T++){var ge=xe[T];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}ec=!!Lf,Nf=Lf=null}finally{Nt=u,I.p=o,P.T=a}}t.current=n,pn=2}}function bg(){if(pn===2){pn=0;var t=Oa,n=ar,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=I.p;I.p=2;var u=Nt;Nt|=4;try{$m(t,n.alternate,n)}finally{Nt=u,I.p=o,P.T=a}}pn=3}}function Ag(){if(pn===4||pn===3){pn=0,ae();var t=Oa,n=ar,a=ra,o=hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,ar=Oa=null,Rg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Na=null),Ns(a),n=n.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Ye,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=I.p,I.p=2,P.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var T=o[_];f(T.value,{componentStack:T.stack})}}finally{P.T=n,I.p=u}}(ra&3)!==0&&Vl(),Bi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Sf?yo++:(yo=0,Sf=t):yo=0,Mo(0)}}function Rg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Vl(){return Tg(),bg(),Ag(),Cg()}function Cg(){if(pn!==5)return!1;var t=Oa,n=vf;vf=0;var a=Ns(ra),o=P.T,u=I.p;try{I.p=32>a?32:a,P.T=null,a=_f,_f=null;var f=Oa,_=ra;if(pn=0,ar=Oa=null,ra=0,(Nt&6)!==0)throw Error(r(331));var T=Nt;if(Nt|=4,cg(f.current),rg(f,f.current,_,a),Nt=T,Mo(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Ye,f)}catch{}return!0}finally{I.p=u,P.T=o,Rg(t,n)}}function wg(t,n,a){n=hi(a,n),n=Ku(t.stateNode,n,2),t=Ra(t,n,2),t!==null&&(Mn(t,2),Bi(t))}function zt(t,n,a){if(t.tag===3)wg(t,t,a);else for(;n!==null;){if(n.tag===3){wg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Na===null||!Na.has(o))){t=hi(a,t),a=Dm(2),o=Ra(n,a,2),o!==null&&(Um(a,o,n,t),Mn(o,2),Bi(o));break}}n=n.return}}function Mf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new bS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(pf=!0,u.add(a),t=DS.bind(null,t,n,a),n.then(t,t))}function DS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(St&a)===a&&(tn===4||tn===3&&(St&62914560)===St&&300>me()-zl?(Nt&2)===0&&sr(t,0):mf|=a,ir===St&&(ir=0)),Bi(t)}function Dg(t,n){n===0&&(n=hn()),t=as(t,n),t!==null&&(Mn(t,n),Bi(t))}function US(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Dg(t,a)}function LS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Dg(t,a)}function NS(t,n){return qe(t,n)}var kl=null,or=null,Ef=!1,Xl=!1,Tf=!1,za=0;function Bi(t){t!==or&&t.next===null&&(or===null?kl=or=t:or=or.next=t),Xl=!0,Ef||(Ef=!0,PS())}function Mo(t,n){if(!Tf&&Xl){Tf=!0;do for(var a=!1,o=kl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-et(42|t)+1)-1,f&=u&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Og(o,f))}else f=St,f=Ue(o,o===Xt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||tt(o,f)||(a=!0,Og(o,f));o=o.next}while(a);Tf=!1}}function OS(){Ug()}function Ug(){Xl=Ef=!1;var t=0;za!==0&&WS()&&(t=za);for(var n=me(),a=null,o=kl;o!==null;){var u=o.next,f=Lg(o,n);f===0?(o.next=null,a===null?kl=u:a.next=u,u===null&&(or=a)):(a=o,(t!==0||(f&3)!==0)&&(Xl=!0)),o=u}pn!==0&&pn!==5||Mo(t),za!==0&&(za=0)}function Lg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-et(f),T=1<<_,B=u[_];B===-1?((T&a)===0||(T&o)!==0)&&(u[_]=Kt(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Xt,a=St,a=Ue(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&O(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||tt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&O(o),Ns(a)){case 2:case 8:a=Xe;break;case 32:a=De;break;case 268435456:a=_t;break;default:a=De}return o=Ng.bind(null,t),a=qe(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&O(o),t.callbackPriority=2,t.callbackNode=null,2}function Ng(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Vl()&&t.callbackNode!==a)return null;var o=St;return o=Ue(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(pg(t,o,n),Lg(t,me()),t.callbackNode!=null&&t.callbackNode===a?Ng.bind(null,t):null)}function Og(t,n){if(Vl())return null;pg(t,n,!0)}function PS(){YS(function(){(Nt&6)!==0?qe(Se,OS):Ug()})}function bf(){if(za===0){var t=qs;t===0&&(t=Ce,Ce<<=1,(Ce&261888)===0&&(Ce=256)),za=t}return za}function Pg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Jo(""+t)}function zg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function zS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Pg((u[En]||null).action),_=o.submitter;_&&(n=(n=_[En]||null)?Pg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new nl("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(za!==0){var B=_?zg(u,_):new FormData(u);Xu(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=_?zg(u,_):new FormData(u),Xu(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Af=0;Af<ou.length;Af++){var Rf=ou[Af],BS=Rf.toLowerCase(),FS=Rf[0].toUpperCase()+Rf.slice(1);Ei(BS,"on"+FS)}Ei(dp,"onAnimationEnd"),Ei(pp,"onAnimationIteration"),Ei(mp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(eS,"onTransitionRun"),Ei(tS,"onTransitionStart"),Ei(nS,"onTransitionCancel"),Ei(gp,"onTransitionEnd"),Be("onMouseEnter",["mouseout","mouseover"]),Be("onMouseLeave",["mouseout","mouseover"]),Be("onPointerEnter",["pointerout","pointerover"]),Be("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function Bg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var T=o[_],B=T.instance,ne=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=ne;try{f(u)}catch(de){sl(de)}u.currentTarget=null,f=B}else for(_=0;_<o.length;_++){if(T=o[_],B=T.instance,ne=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=ne;try{f(u)}catch(de){sl(de)}u.currentTarget=null,f=B}}}}function pt(t,n){var a=n[Vr];a===void 0&&(a=n[Vr]=new Set);var o=t+"__bubble";a.has(o)||(Fg(n,t,2,!1),a.add(o))}function Cf(t,n,a){var o=0;n&&(o|=4),Fg(a,t,o,n)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function wf(t){if(!t[Wl]){t[Wl]=!0,be.forEach(function(a){a!=="selectionchange"&&(IS.has(a)||Cf(a,!1,t),Cf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Wl]||(n[Wl]=!0,Cf("selectionchange",!1,n))}}function Fg(t,n,a,o){switch(dv(n)){case 2:var u=dx;break;case 8:u=px;break;default:u=Xf}a=u.bind(null,n,a,t),u=void 0,!jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Df(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var T=o.stateNode.containerInfo;if(T===u)break;if(_===4)for(_=o.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;T!==null;){if(_=A(T),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){o=f=_;continue e}T=T.parentNode}}o=o.return}kd(function(){var ne=f,de=qc(a),xe=[];e:{var ie=vp.get(t);if(ie!==void 0){var le=nl,Ge=t;switch(t){case"keypress":if(el(a)===0)break e;case"keydown":case"keyup":le=L0;break;case"focusin":Ge="focus",le=Jc;break;case"focusout":Ge="blur",le=Jc;break;case"beforeblur":case"afterblur":le=Jc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=P0;break;case dp:case pp:case mp:le=E0;break;case gp:le=B0;break;case"scroll":case"scrollend":le=_0;break;case"wheel":le=I0;break;case"copy":case"cut":case"paste":le=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=jd;break;case"toggle":case"beforetoggle":le=G0}var Je=(n&4)!==0,Gt=!Je&&(t==="scroll"||t==="scrollend"),Q=Je?ie!==null?ie+"Capture":null:ie;Je=[];for(var G=ne,te;G!==null;){var ge=G;if(te=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||te===null||Q===null||(ge=Xr(G,Q),ge!=null&&Je.push(To(G,ge,te))),Gt)break;G=G.return}0<Je.length&&(ie=new le(ie,Ge,null,a,de),xe.push({event:ie,listeners:Je}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ie&&a!==Wc&&(Ge=a.relatedTarget||a.fromElement)&&(A(Ge)||Ge[Xi]))break e;if((le||ie)&&(ie=de.window===de?de:(ie=de.ownerDocument)?ie.defaultView||ie.parentWindow:window,le?(Ge=a.relatedTarget||a.toElement,le=ne,Ge=Ge?A(Ge):null,Ge!==null&&(Gt=c(Ge),Je=Ge.tag,Ge!==Gt||Je!==5&&Je!==27&&Je!==6)&&(Ge=null)):(le=null,Ge=ne),le!==Ge)){if(Je=qd,ge="onMouseLeave",Q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Je=jd,ge="onPointerLeave",Q="onPointerEnter",G="pointer"),Gt=le==null?ie:se(le),te=Ge==null?ie:se(Ge),ie=new Je(ge,G+"leave",le,a,de),ie.target=Gt,ie.relatedTarget=te,ge=null,A(de)===ne&&(Je=new Je(Q,G+"enter",Ge,a,de),Je.target=te,Je.relatedTarget=Gt,ge=Je),Gt=ge,le&&Ge)t:{for(Je=HS,Q=le,G=Ge,te=0,ge=Q;ge;ge=Je(ge))te++;ge=0;for(var Ze=G;Ze;Ze=Je(Ze))ge++;for(;0<te-ge;)Q=Je(Q),te--;for(;0<ge-te;)G=Je(G),ge--;for(;te--;){if(Q===G||G!==null&&Q===G.alternate){Je=Q;break t}Q=Je(Q),G=Je(G)}Je=null}else Je=null;le!==null&&Ig(xe,ie,le,Je,!1),Ge!==null&&Gt!==null&&Ig(xe,Gt,Ge,Je,!0)}}e:{if(ie=ne?se(ne):window,le=ie.nodeName&&ie.nodeName.toLowerCase(),le==="select"||le==="input"&&ie.type==="file")var wt=np;else if(ep(ie))if(ip)wt=Q0;else{wt=Z0;var Ve=j0}else le=ie.nodeName,!le||le.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ne&&Xc(ne.elementType)&&(wt=np):wt=K0;if(wt&&(wt=wt(t,ne))){tp(xe,wt,a,de);break e}Ve&&Ve(t,ie,ne),t==="focusout"&&ne&&ie.type==="number"&&ne.memoizedProps.value!=null&&wn(ie,"number",ie.value)}switch(Ve=ne?se(ne):window,t){case"focusin":(ep(Ve)||Ve.contentEditable==="true")&&(Fs=Ve,au=ne,Jr=null);break;case"focusout":Jr=au=Fs=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,fp(xe,a,de);break;case"selectionchange":if($0)break;case"keydown":case"keyup":fp(xe,a,de)}var ct;if(eu)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Bs?Jd(t,a)&&(xt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(Zd&&a.locale!=="ko"&&(Bs||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Bs&&(ct=Xd()):(xa=de,Zc="value"in xa?xa.value:xa.textContent,Bs=!0)),Ve=ql(ne,xt),0<Ve.length&&(xt=new Yd(xt,t,null,a,de),xe.push({event:xt,listeners:Ve}),ct?xt.data=ct:(ct=$d(a),ct!==null&&(xt.data=ct)))),(ct=k0?X0(t,a):W0(t,a))&&(xt=ql(ne,"onBeforeInput"),0<xt.length&&(Ve=new Yd("onBeforeInput","beforeinput",null,a,de),xe.push({event:Ve,listeners:xt}),Ve.data=ct)),zS(xe,t,ne,a,de)}Bg(xe,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Xr(t,a),u!=null&&o.unshift(To(t,u,f)),u=Xr(t,n),u!=null&&o.push(To(t,u,f))),t.tag===3)return o;t=t.return}return[]}function HS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ig(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var T=a,B=T.alternate,ne=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||ne===null||(B=ne,u?(ne=Xr(a,f),ne!=null&&_.unshift(To(a,ne,B))):u||(ne=Xr(a,f),ne!=null&&_.push(To(a,ne,B)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var GS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function Hg(t){return(typeof t=="string"?t:""+t).replace(GS,`
`).replace(VS,"")}function Gg(t,n){return n=Hg(n),Hg(t)===n}function Ht(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vn(t,""+o);break;case"className":qt(t,"class",o);break;case"tabIndex":qt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qt(t,a,o);break;case"style":Gd(t,o,f);break;case"data":if(n!=="object"){qt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Jo(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(t,n,"name",u.name,u,null),Ht(t,n,"formEncType",u.formEncType,u,null),Ht(t,n,"formMethod",u.formMethod,u,null),Ht(t,n,"formTarget",u.formTarget,u,null)):(Ht(t,n,"encType",u.encType,u,null),Ht(t,n,"method",u.method,u,null),Ht(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Jo(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Wi);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Jo(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":pt("beforetoggle",t),pt("toggle",t),Et(t,"popover",o);break;case"xlinkActuate":Ct(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ct(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ct(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ct(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ct(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ct(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Et(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=g0.get(a)||a,Et(t,a,o))}}function Uf(t,n,a,o,u,f){switch(a){case"style":Gd(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Vn(t,o):(typeof o=="number"||typeof o=="bigint")&&Vn(t,""+o);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Et(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",t),pt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(t,n,f,_,a,null)}}u&&Ht(t,n,"srcSet",a.srcSet,a,null),o&&Ht(t,n,"src",a.src,a,null);return;case"input":pt("invalid",t);var T=f=_=u=null,B=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":_=de;break;case"checked":B=de;break;case"defaultChecked":ne=de;break;case"value":f=de;break;case"defaultValue":T=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:Ht(t,n,o,de,a,null)}}Bn(t,f,T,B,ne,_,u,!1);return;case"select":pt("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":o=T;default:Ht(t,n,u,T,a,null)}n=f,a=_,t.multiple=!!o,n!=null?$t(t,!!o,n,!1):a!=null&&$t(t,!!o,a,!0);return;case"textarea":pt("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ht(t,n,_,T,a,null)}Os(t,o,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ht(t,n,B,o,a,null)}return;case"dialog":pt("beforetoggle",t),pt("toggle",t),pt("cancel",t),pt("close",t);break;case"iframe":case"object":pt("load",t);break;case"video":case"audio":for(o=0;o<Eo.length;o++)pt(Eo[o],t);break;case"image":pt("error",t),pt("load",t);break;case"details":pt("toggle",t);break;case"embed":case"source":case"link":pt("error",t),pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(t,n,ne,o,a,null)}return;default:if(Xc(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&Uf(t,n,de,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ht(t,n,T,o,a,null))}function kS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,T=null,B=null,ne=null,de=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=xe;default:o.hasOwnProperty(le)||Ht(t,n,le,null,o,xe)}}for(var ie in o){var le=o[ie];if(xe=a[ie],o.hasOwnProperty(ie)&&(le!=null||xe!=null))switch(ie){case"type":f=le;break;case"name":u=le;break;case"checked":ne=le;break;case"defaultChecked":de=le;break;case"value":_=le;break;case"defaultValue":T=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==xe&&Ht(t,n,ie,le,o,xe)}}Ft(t,_,T,B,ne,de,f,u);return;case"select":le=_=T=ie=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":le=B;default:o.hasOwnProperty(f)||Ht(t,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":ie=f;break;case"defaultValue":T=f;break;case"multiple":_=f;default:f!==B&&Ht(t,n,u,f,o,B)}n=T,a=_,o=le,ie!=null?$t(t,!!a,ie,!1):!!o!=!!a&&(n!=null?$t(t,!!a,n,!0):$t(t,!!a,a?[]:"",!1));return;case"textarea":le=ie=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ht(t,n,T,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ie=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ht(t,n,_,u,o,f)}Tn(t,ie,le);return;case"option":for(var Ge in a)if(ie=a[Ge],a.hasOwnProperty(Ge)&&ie!=null&&!o.hasOwnProperty(Ge))switch(Ge){case"selected":t.selected=!1;break;default:Ht(t,n,Ge,null,o,ie)}for(B in o)if(ie=o[B],le=a[B],o.hasOwnProperty(B)&&ie!==le&&(ie!=null||le!=null))switch(B){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Ht(t,n,B,ie,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)ie=a[Je],a.hasOwnProperty(Je)&&ie!=null&&!o.hasOwnProperty(Je)&&Ht(t,n,Je,null,o,ie);for(ne in o)if(ie=o[ne],le=a[ne],o.hasOwnProperty(ne)&&ie!==le&&(ie!=null||le!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Ht(t,n,ne,ie,o,le)}return;default:if(Xc(n)){for(var Gt in a)ie=a[Gt],a.hasOwnProperty(Gt)&&ie!==void 0&&!o.hasOwnProperty(Gt)&&Uf(t,n,Gt,void 0,o,ie);for(de in o)ie=o[de],le=a[de],!o.hasOwnProperty(de)||ie===le||ie===void 0&&le===void 0||Uf(t,n,de,ie,o,le);return}}for(var Q in a)ie=a[Q],a.hasOwnProperty(Q)&&ie!=null&&!o.hasOwnProperty(Q)&&Ht(t,n,Q,null,o,ie);for(xe in o)ie=o[xe],le=a[xe],!o.hasOwnProperty(xe)||ie===le||ie==null&&le==null||Ht(t,n,xe,ie,o,le)}function Vg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,T=u.duration;if(f&&T&&Vg(_)){for(_=0,T=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],ne=B.startTime;if(ne>T)break;var de=B.transferSize,xe=B.initiatorType;de&&Vg(xe)&&(B=B.responseEnd,_+=de*(B<T?1:(T-ne)/(B-ne)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Lf=null,Nf=null;function Yl(t){return t.nodeType===9?t:t.ownerDocument}function kg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Of(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function WS(){var t=window.event;return t&&t.type==="popstate"?t===Pf?!1:(Pf=t,!0):(Pf=null,!1)}var Wg=typeof setTimeout=="function"?setTimeout:void 0,qS=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,YS=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(t){return qg.resolve(null).then(t).catch(jS)}:Wg;function jS(t){setTimeout(function(){throw t})}function Ba(t){return t==="head"}function Yg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),fr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[es]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&bo(t.ownerDocument.body);a=u}while(a);fr(n)}function jg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function zf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ZS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[es])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function KS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function Zg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Bf(t){return t.data==="$?"||t.data==="$~"}function Ff(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function QS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var If=null;function Kg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Qg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Jg(t,n,a){switch(n=Yl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);kr(t)}var _i=new Map,$g=new Set;function jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=I.d;I.d={f:JS,r:$S,D:ex,C:tx,L:nx,m:ix,X:sx,S:ax,M:rx};function JS(){var t=oa.f(),n=Il();return t||n}function $S(t){var n=j(t);n!==null&&n.tag===5&&n.type==="form"?gm(n):oa.r(t)}var lr=typeof document>"u"?null:document;function ev(t,n,a){var o=lr;if(o&&typeof n=="string"&&n){var u=vn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),$g.has(u)||($g.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),W(n),o.head.appendChild(n)))}}function ex(t){oa.D(t),ev("dns-prefetch",t,null)}function tx(t,n){oa.C(t,n),ev("preconnect",t,n)}function nx(t,n,a){oa.L(t,n,a);var o=lr;if(o&&t&&n){var u='link[rel="preload"][as="'+vn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+vn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+vn(a.imageSizes)+'"]')):u+='[href="'+vn(t)+'"]';var f=u;switch(n){case"style":f=cr(t);break;case"script":f=ur(t)}_i.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ao(f))||n==="script"&&o.querySelector(Ro(f))||(n=o.createElement("link"),Cn(n,"link",t),W(n),o.head.appendChild(n)))}}function ix(t,n){oa.m(t,n);var a=lr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+vn(o)+'"][href="'+vn(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ur(t)}if(!_i.has(f)&&(t=v({rel:"modulepreload",href:t},n),_i.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}o=a.createElement("link"),Cn(o,"link",t),W(o),a.head.appendChild(o)}}}function ax(t,n,a){oa.S(t,n,a);var o=lr;if(o&&t){var u=re(o).hoistableStyles,f=cr(t);n=n||"default";var _=u.get(f);if(!_){var T={loading:0,preload:null};if(_=o.querySelector(Ao(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(f))&&Hf(t,a);var B=_=o.createElement("link");W(B),Cn(B,"link",t),B._p=new Promise(function(ne,de){B.onload=ne,B.onerror=de}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Zl(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:T},u.set(f,_)}}}function sx(t,n){oa.X(t,n);var a=lr;if(a&&t){var o=re(a).hoistableScripts,u=ur(t),f=o.get(u);f||(f=a.querySelector(Ro(u)),f||(t=v({src:t,async:!0},n),(n=_i.get(u))&&Gf(t,n),f=a.createElement("script"),W(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function rx(t,n){oa.M(t,n);var a=lr;if(a&&t){var o=re(a).hoistableScripts,u=ur(t),f=o.get(u);f||(f=a.querySelector(Ro(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&Gf(t,n),f=a.createElement("script"),W(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function tv(t,n,a,o){var u=(u=pe.current)?jl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cr(a.href),a=re(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=cr(a.href);var f=re(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Ao(t)))&&!f._p&&(_.instance=f,_.state.loading=5),_i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,a),f||ox(u,t,a,_.state))),n&&o===null)throw Error(r(528,""));return _}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ur(a),a=re(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function cr(t){return'href="'+vn(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function nv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function ox(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),W(n),t.head.appendChild(n))}function ur(t){return'[src="'+vn(t)+'"]'}function Ro(t){return"script[async]"+t}function iv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+vn(a.href)+'"]');if(o)return n.instance=o,W(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),W(o),Cn(o,"style",u),Zl(o,a.precedence,t),n.instance=o;case"stylesheet":u=cr(a.href);var f=t.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,W(f),f;o=nv(a),(u=_i.get(u))&&Hf(o,u),f=(t.ownerDocument||t).createElement("link"),W(f);var _=f;return _._p=new Promise(function(T,B){_.onload=T,_.onerror=B}),Cn(f,"link",o),n.state.loading|=4,Zl(f,a.precedence,t),n.instance=f;case"script":return f=ur(a.src),(u=t.querySelector(Ro(f)))?(n.instance=u,W(u),u):(o=a,(u=_i.get(f))&&(o=v({},a),Gf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),W(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Zl(o,a.precedence,t));return n.instance}function Zl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var T=o[_];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Hf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Kl=null;function av(t,n,a){if(Kl===null){var o=new Map,u=Kl=new Map;u.set(a,o)}else u=Kl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[es]||f[Jt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var T=o.get(_);T?T.push(f):o.set(_,[f])}}return o}function sv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function lx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function rv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cx(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=cr(o.href),f=n.querySelector(Ao(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ql.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,W(f);return}f=n.ownerDocument||n,o=nv(o),(u=_i.get(u))&&Hf(o,u),f=f.createElement("link"),W(f);var _=f;_._p=new Promise(function(T,B){_.onload=T,_.onerror=B}),Cn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ql.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vf=0;function ux(t,n){return t.stylesheets&&t.count===0&&$l(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Vf===0&&(Vf=62500*XS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Vf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Jl=null;function $l(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Jl=new Map,n.forEach(fx,t),Jl=null,Ql.call(t))}function fx(t,n){if(!(n.state.loading&4)){var a=Jl.get(t);if(a)var o=a.get(null);else{a=new Map,Jl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=Ql.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:N,Provider:null,Consumer:null,_currentValue:D,_currentValue2:D,_threadCount:0};function hx(t,n,a,o,u,f,_,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function ov(t,n,a,o,u,f,_,T,B,ne,de,xe){return t=new hx(t,n,a,_,B,ne,de,xe,T),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),t.current=f,f.stateNode=t,n=xu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Tu(f),t}function lv(t){return t?(t=Gs,t):Gs}function cv(t,n,a,o,u,f){u=lv(u),o.context===null?o.context=u:o.pendingContext=u,o=Aa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ra(t,o,n),a!==null&&(jn(a,t,n),so(a,t,n))}function uv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function kf(t,n){uv(t,n),(t=t.alternate)&&uv(t,n)}function fv(t){if(t.tag===13||t.tag===31){var n=as(t,67108864);n!==null&&jn(n,t,67108864),kf(t,67108864)}}function hv(t){if(t.tag===13||t.tag===31){var n=ai();n=Ja(n);var a=as(t,n);a!==null&&jn(a,t,n),kf(t,n)}}var ec=!0;function dx(t,n,a,o){var u=P.T;P.T=null;var f=I.p;try{I.p=2,Xf(t,n,a,o)}finally{I.p=f,P.T=u}}function px(t,n,a,o){var u=P.T;P.T=null;var f=I.p;try{I.p=8,Xf(t,n,a,o)}finally{I.p=f,P.T=u}}function Xf(t,n,a,o){if(ec){var u=Wf(o);if(u===null)Df(t,n,o,tc,a),pv(t,o);else if(gx(u,t,n,a,o))o.stopPropagation();else if(pv(t,o),n&4&&-1<mx.indexOf(t)){for(;u!==null;){var f=j(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=we(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var B=1<<31-et(_);T.entanglements[1]|=B,_&=~B}Bi(f),(Nt&6)===0&&(Bl=me()+500,Mo(0))}}break;case 31:case 13:T=as(f,2),T!==null&&jn(T,f,2),Il(),kf(f,2)}if(f=Wf(o),f===null&&Df(t,n,o,tc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Df(t,n,o,null,a)}}function Wf(t){return t=qc(t),qf(t)}var tc=null;function qf(t){if(tc=null,t=A(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tc=t,null}function dv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Te()){case Se:return 2;case Xe:return 8;case De:case Ie:return 32;case _t:return 268435456;default:return 32}default:return 32}}var Yf=!1,Fa=null,Ia=null,Ha=null,wo=new Map,Do=new Map,Ga=[],mx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pv(t,n){switch(t){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=j(n),n!==null&&fv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function gx(t,n,a,o,u){switch(n){case"focusin":return Fa=Uo(Fa,t,n,a,o,u),!0;case"dragenter":return Ia=Uo(Ia,t,n,a,o,u),!0;case"mouseover":return Ha=Uo(Ha,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,Uo(wo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,Uo(Do.get(f)||null,t,n,a,o,u)),!0}return!1}function mv(t){var n=A(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,$a(t.priority,function(){hv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,$a(t.priority,function(){hv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Wc=o,a.target.dispatchEvent(o),Wc=null}else return n=j(a),n!==null&&fv(n),t.blockedOn=a,!1;n.shift()}return!0}function gv(t,n,a){nc(t)&&a.delete(n)}function vx(){Yf=!1,Fa!==null&&nc(Fa)&&(Fa=null),Ia!==null&&nc(Ia)&&(Ia=null),Ha!==null&&nc(Ha)&&(Ha=null),wo.forEach(gv),Do.forEach(gv)}function ic(t,n){t.blockedOn===n&&(t.blockedOn=null,Yf||(Yf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,vx)))}var ac=null;function vv(t){ac!==t&&(ac=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ac===t&&(ac=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(qf(o||a)===null)continue;break}var f=j(a);f!==null&&(t.splice(n,3),n-=3,Xu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function fr(t){function n(B){return ic(B,t)}Fa!==null&&ic(Fa,t),Ia!==null&&ic(Ia,t),Ha!==null&&ic(Ha,t),wo.forEach(n),Do.forEach(n);for(var a=0;a<Ga.length;a++){var o=Ga[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ga.length&&(a=Ga[0],a.blockedOn===null);)mv(a),a.blockedOn===null&&Ga.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[En]||null;if(typeof f=="function")_||vv(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[En]||null)T=_.formAction;else if(qf(u)!==null)continue}else T=_.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),vv(a)}}}function _v(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function jf(t){this._internalRoot=t}sc.prototype.render=jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ai();cv(a,o,t,n,null,null)},sc.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;cv(t.current,2,null,t,null,null),Il(),n[Xi]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Gr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ga.length&&n!==0&&n<Ga[a].priority;a++);Ga.splice(a,0,t),a===0&&mv(t)}};var Sv=e.version;if(Sv!=="19.2.8")throw Error(r(527,Sv,"19.2.8"));I.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var _x={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Ye=rc.inject(_x),We=rc}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Am,f=Rm,_=Cm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=ov(t,1,!1,null,null,a,o,null,u,f,_,_v),t[Xi]=n.current,wf(t),new jf(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=Am,_=Rm,T=Cm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=ov(t,1,!0,n,a??null,o,u,B,f,_,T,_v),n.context=lv(null),a=n.current,o=ai(),o=Ja(o),u=Aa(o),u.callback=null,Ra(a,u,o),a=o,n.current.lanes=a,Mn(n,a),Bi(n),t[Xi]=n.current,wf(t),new sc(n)},No.version="19.2.8",No}var wv;function Cx(){if(wv)return Kf.exports;wv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Kf.exports=Rx(),Kf.exports}var wx=Cx(),Ho=Ad();class Dx extends Ho.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){return this.state.error?this.props.fallback??Ee.jsx("div",{className:"fx-fallback",role:"alert",children:Ee.jsx("p",{children:"Фоновый эффект недоступен — визитка работает без него."})}):this.props.children}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xo="172",Ux=0,Dv=1,Lx=2,U_=1,Nx=2,da=3,ga=0,xn=1,Hn=2,Qn=0,wr=1,Uv=2,Lv=3,Nv=4,Ox=5,bs=100,Px=101,zx=102,Bx=103,Fx=104,Ix=200,Hx=201,Gx=202,Vx=203,Fh=204,Ih=205,kx=206,Xx=207,Wx=208,qx=209,Yx=210,jx=211,Zx=212,Kx=213,Qx=214,Hh=0,zc=1,Gh=2,Lr=3,Vh=4,kh=5,Xh=6,Wh=7,L_=0,Jx=1,$x=2,Ka=0,ey=1,ty=2,ny=3,iy=4,ay=5,sy=6,ry=7,N_=300,Nr=301,Or=302,qh=303,Yh=304,Hc=306,jh=1e3,Rs=1001,Zh=1002,Ui=1003,oy=1004,oc=1005,Kn=1006,th=1007,Cs=1008,On=1009,O_=1010,P_=1011,ko=1012,Rd=1013,Ds=1014,Hi=1015,Wo=1016,Cd=1017,wd=1018,Us=1020,z_=35902,B_=1021,F_=1022,Di=1023,I_=1024,H_=1025,Dr=1026,Ls=1027,G_=1028,Dd=1029,V_=1030,Ud=1031,Ld=1033,Dc=33776,Uc=33777,Lc=33778,Nc=33779,Kh=35840,Qh=35841,Jh=35842,$h=35843,ed=36196,td=37492,nd=37496,id=37808,ad=37809,sd=37810,rd=37811,od=37812,ld=37813,cd=37814,ud=37815,fd=37816,hd=37817,dd=37818,pd=37819,md=37820,gd=37821,Oc=36492,vd=36494,_d=36495,k_=36283,Sd=36284,xd=36285,yd=36286,qo=3200,ly=3201,cy=0,uy=1,Ii="",kt="srgb",Qa="srgb-linear",Bc="linear",Vt="srgb",hr=7680,Ov=519,fy=512,hy=513,dy=514,X_=515,py=516,my=517,gy=518,vy=519,Pv=35044,zv="300 es",pa=2e3,Fc=2001;class _a{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nh=Math.PI/180,Md=180/Math.PI;function Yo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function mt(s,e,i){return Math.max(e,Math.min(i,s))}function _y(s,e){return(s%e+e)%e}function ih(s,e,i){return(1-i)*s+i*e}function Oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,i=0){Fe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=mt(this.x,e.x,i.x),this.y=mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=mt(this.x,e,i),this.y=mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,i,r,l,c,h,d,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m)}set(e,i,r,l,c,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],v=r[7],x=r[2],y=r[5],E=r[8],C=l[0],M=l[3],S=l[6],F=l[1],N=l[4],U=l[7],J=l[2],k=l[5],z=l[8];return c[0]=h*C+d*F+p*J,c[3]=h*M+d*N+p*k,c[6]=h*S+d*U+p*z,c[1]=m*C+g*F+v*J,c[4]=m*M+g*N+v*k,c[7]=m*S+g*U+v*z,c[2]=x*C+y*F+E*J,c[5]=x*M+y*N+E*k,c[8]=x*S+y*U+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*c*g+r*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*h-d*m,x=d*p-g*c,y=m*c-h*p,E=i*v+r*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(l*m-g*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(g*i-l*p)*C,e[5]=(l*c-d*i)*C,e[6]=y*C,e[7]=(r*p-m*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ah.makeScale(e,i)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,i){return this.premultiply(ah.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new ut;function W_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ic(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sy(){const s=Ic("canvas");return s.style.display="block",s}const Bv={};function Rr(s){s in Bv||(Bv[s]=!0,console.warn(s))}function xy(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function yy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function My(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fv=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iv=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ey(){const s={enabled:!0,workingColorSpace:Qa,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Vt&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Vt&&(l.r=Ur(l.r),l.g=Ur(l.g),l.b=Ur(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ii?Bc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Qa]:{primaries:e,whitePoint:r,transfer:Bc,toXYZ:Fv,fromXYZ:Iv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:Fv,fromXYZ:Iv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),s}const Ut=Ey();function ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ur(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let dr;class Ty{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{dr===void 0&&(dr=Ic("canvas")),dr.width=e.width,dr.height=e.height;const r=dr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=dr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ic("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ma(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ma(i[r]/255)*255):i[r]=ma(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let by=0;class q_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(sh(l[h].image)):c.push(sh(l[h]))}else c=sh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function sh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ty.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ay=0;class Nn extends _a{constructor(e=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=Rs,l=Rs,c=Kn,h=Cs,d=Di,p=On,m=Nn.DEFAULT_ANISOTROPY,g=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Yo(),this.name="",this.source=new q_(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case Rs:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case Rs:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=N_;Nn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,i=0,r=0,l=1){Zt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],g=p[4],v=p[8],x=p[1],y=p[5],E=p[9],C=p[2],M=p[6],S=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(E+M)<.1&&Math.abs(m+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,U=(y+1)/2,J=(S+1)/2,k=(g+x)/4,z=(v+C)/4,K=(E+M)/4;return N>U&&N>J?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=k/r,c=z/r):U>J?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=k/l,c=K/l):J<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(J),r=z/c,l=K/c),this.set(r,l,c,i),this}let F=Math.sqrt((M-E)*(M-E)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(F)<.001&&(F=1),this.x=(M-E)/F,this.y=(v-C)/F,this.z=(x-g)/F,this.w=Math.acos((m+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=mt(this.x,e.x,i.x),this.y=mt(this.y,e.y,i.y),this.z=mt(this.z,e.z,i.z),this.w=mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=mt(this.x,e,i),this.y=mt(this.y,e,i),this.z=mt(this.z,e,i),this.w=mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ry extends _a{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Zt(0,0,e,i),this.scissorTest=!1,this.viewport=new Zt(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Nn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const i=Object.assign({},e.texture.image);return this.texture.source=new q_(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Ry{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Y_ extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cy extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],v=r[l+3];const x=c[h+0],y=c[h+1],E=c[h+2],C=c[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=E,e[i+3]=C;return}if(v!==C||p!==x||m!==y||g!==E){let M=1-d;const S=p*x+m*y+g*E+v*C,F=S>=0?1:-1,N=1-S*S;if(N>Number.EPSILON){const J=Math.sqrt(N),k=Math.atan2(J,S*F);M=Math.sin(M*k)/J,d=Math.sin(d*k)/J}const U=d*F;if(p=p*M+x*U,m=m*M+y*U,g=g*M+E*U,v=v*M+C*U,M===1-d){const J=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=J,m*=J,g*=J,v*=J}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],v=c[h],x=c[h+1],y=c[h+2],E=c[h+3];return e[i]=d*E+g*v+p*y-m*x,e[i+1]=p*E+g*x+m*v-d*y,e[i+2]=m*E+g*y+d*x-p*v,e[i+3]=g*E-d*v-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),v=d(c/2),x=p(r/2),y=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=x*g*v+m*y*E,this._y=m*y*v-x*g*E,this._z=m*g*E+x*y*v,this._w=m*g*v-x*y*E;break;case"YXZ":this._x=x*g*v+m*y*E,this._y=m*y*v-x*g*E,this._z=m*g*E-x*y*v,this._w=m*g*v+x*y*E;break;case"ZXY":this._x=x*g*v-m*y*E,this._y=m*y*v+x*g*E,this._z=m*g*E+x*y*v,this._w=m*g*v-x*y*E;break;case"ZYX":this._x=x*g*v-m*y*E,this._y=m*y*v+x*g*E,this._z=m*g*E-x*y*v,this._w=m*g*v+x*y*E;break;case"YZX":this._x=x*g*v+m*y*E,this._y=m*y*v+x*g*E,this._z=m*g*E-x*y*v,this._w=m*g*v-x*y*E;break;case"XZY":this._x=x*g*v-m*y*E,this._y=m*y*v-x*g*E,this._z=m*g*E+x*y*v,this._w=m*g*v+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-m)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(c+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-c*p,this._y=l*g+h*p+c*d-r*m,this._z=c*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,i=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Hv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Hv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+p*m+h*v-d*g,this.y=r+p*g+d*m-c*v,this.z=l+p*v+c*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=mt(this.x,e.x,i.x),this.y=mt(this.y,e.y,i.y),this.z=mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=mt(this.x,e,i),this.y=mt(this.y,e,i),this.z=mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new q,Hv=new jo;class Zo{constructor(e=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lc.copy(r.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),cc.subVectors(this.max,Po),pr.subVectors(e.a,Po),mr.subVectors(e.b,Po),gr.subVectors(e.c,Po),ka.subVectors(mr,pr),Xa.subVectors(gr,mr),vs.subVectors(pr,gr);let i=[0,-ka.z,ka.y,0,-Xa.z,Xa.y,0,-vs.z,vs.y,ka.z,0,-ka.x,Xa.z,0,-Xa.x,vs.z,0,-vs.x,-ka.y,ka.x,0,-Xa.y,Xa.x,0,-vs.y,vs.x,0];return!oh(i,pr,mr,gr,cc)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,pr,mr,gr,cc))?!1:(uc.crossVectors(ka,Xa),i=[uc.x,uc.y,uc.z],oh(i,pr,mr,gr,cc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(la),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const la=[new q,new q,new q,new q,new q,new q,new q,new q],Ai=new q,lc=new Zo,pr=new q,mr=new q,gr=new q,ka=new q,Xa=new q,vs=new q,Po=new q,cc=new q,uc=new q,_s=new q;function oh(s,e,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){_s.fromArray(s,c);const d=l.x*Math.abs(_s.x)+l.y*Math.abs(_s.y)+l.z*Math.abs(_s.z),p=e.dot(_s),m=i.dot(_s),g=r.dot(_s);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const wy=new Zo,zo=new q,lh=new q;class Nd{constructor(e=new q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):wy.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(zo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(lh)),this.expandByPoint(zo.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ca=new q,ch=new q,fc=new q,Wa=new q,uh=new q,hc=new q,fh=new q;class Dy{constructor(e=new q,i=new q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ch.copy(e).add(i).multiplyScalar(.5),fc.copy(i).sub(e).normalize(),Wa.copy(this.origin).sub(ch);const c=e.distanceTo(i)*.5,h=-this.direction.dot(fc),d=Wa.dot(this.direction),p=-Wa.dot(fc),m=Wa.lengthSq(),g=Math.abs(1-h*h);let v,x,y,E;if(g>0)if(v=h*p-d,x=h*d-p,E=c*g,v>=0)if(x>=-E)if(x<=E){const C=1/g;v*=C,x*=C,y=v*(v+h*x+2*d)+x*(h*v+x+2*p)+m}else x=c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*p)+m;else x=-c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*p)+m;else x<=-E?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+x*(x+2*p)+m):x<=E?(v=0,x=Math.min(Math.max(-c,-p),c),y=x*(x+2*p)+m):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+x*(x+2*p)+m);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ch).addScaledVector(fc,x),y}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,r,l,c){uh.subVectors(i,e),hc.subVectors(r,e),fh.crossVectors(uh,hc);let h=this.direction.dot(fh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Wa.subVectors(this.origin,e);const p=d*this.direction.dot(hc.crossVectors(Wa,hc));if(p<0)return null;const m=d*this.direction.dot(uh.cross(Wa));if(m<0||p+m>h)return null;const g=-d*Wa.dot(fh);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,c,h,d,p,m,g,v,x,y,E,C,M){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m,g,v,x,y,E,C,M)}set(e,i,r,l,c,h,d,p,m,g,v,x,y,E,C,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=p,S[2]=m,S[6]=g,S[10]=v,S[14]=x,S[3]=y,S[7]=E,S[11]=C,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/vr.setFromMatrixColumn(e,0).length(),c=1/vr.setFromMatrixColumn(e,1).length(),h=1/vr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=h*g,y=h*v,E=d*g,C=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=y+E*m,i[5]=x-C*m,i[9]=-d*p,i[2]=C-x*m,i[6]=E+y*m,i[10]=h*p}else if(e.order==="YXZ"){const x=p*g,y=p*v,E=m*g,C=m*v;i[0]=x+C*d,i[4]=E*d-y,i[8]=h*m,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-E,i[6]=C+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*g,y=p*v,E=m*g,C=m*v;i[0]=x-C*d,i[4]=-h*v,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*g,i[9]=C-x*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*g,y=h*v,E=d*g,C=d*v;i[0]=p*g,i[4]=E*m-y,i[8]=x*m+C,i[1]=p*v,i[5]=C*m+x,i[9]=y*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,y=h*m,E=d*p,C=d*m;i[0]=p*g,i[4]=C-x*v,i[8]=E*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=y*v+E,i[10]=x-C*v}else if(e.order==="XZY"){const x=h*p,y=h*m,E=d*p,C=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=x*v+C,i[5]=h*g,i[9]=y*v-E,i[2]=E*v-y,i[6]=d*g,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uy,e,Ly)}lookAt(e,i,r){const l=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),qa.crossVectors(r,si),qa.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),qa.crossVectors(r,si)),qa.normalize(),dc.crossVectors(si,qa),l[0]=qa.x,l[4]=dc.x,l[8]=si.x,l[1]=qa.y,l[5]=dc.y,l[9]=si.y,l[2]=qa.z,l[6]=dc.z,l[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],v=r[5],x=r[9],y=r[13],E=r[2],C=r[6],M=r[10],S=r[14],F=r[3],N=r[7],U=r[11],J=r[15],k=l[0],z=l[4],K=l[8],L=l[12],w=l[1],X=l[5],he=l[9],ce=l[13],ye=l[2],_e=l[6],P=l[10],I=l[14],D=l[3],$=l[7],ee=l[11],R=l[15];return c[0]=h*k+d*w+p*ye+m*D,c[4]=h*z+d*X+p*_e+m*$,c[8]=h*K+d*he+p*P+m*ee,c[12]=h*L+d*ce+p*I+m*R,c[1]=g*k+v*w+x*ye+y*D,c[5]=g*z+v*X+x*_e+y*$,c[9]=g*K+v*he+x*P+y*ee,c[13]=g*L+v*ce+x*I+y*R,c[2]=E*k+C*w+M*ye+S*D,c[6]=E*z+C*X+M*_e+S*$,c[10]=E*K+C*he+M*P+S*ee,c[14]=E*L+C*ce+M*I+S*R,c[3]=F*k+N*w+U*ye+J*D,c[7]=F*z+N*X+U*_e+J*$,c[11]=F*K+N*he+U*P+J*ee,c[15]=F*L+N*ce+U*I+J*R,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],x=e[10],y=e[14],E=e[3],C=e[7],M=e[11],S=e[15];return E*(+c*p*v-l*m*v-c*d*x+r*m*x+l*d*y-r*p*y)+C*(+i*p*y-i*m*x+c*h*x-l*h*y+l*m*g-c*p*g)+M*(+i*m*v-i*d*y-c*h*v+r*h*y+c*d*g-r*m*g)+S*(-l*d*g-i*p*v+i*d*x+l*h*v-r*h*x+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],x=e[10],y=e[11],E=e[12],C=e[13],M=e[14],S=e[15],F=v*M*m-C*x*m+C*p*y-d*M*y-v*p*S+d*x*S,N=E*x*m-g*M*m-E*p*y+h*M*y+g*p*S-h*x*S,U=g*C*m-E*v*m+E*d*y-h*C*y-g*d*S+h*v*S,J=E*v*p-g*C*p-E*d*x+h*C*x+g*d*M-h*v*M,k=i*F+r*N+l*U+c*J;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=F*z,e[1]=(C*x*c-v*M*c-C*l*y+r*M*y+v*l*S-r*x*S)*z,e[2]=(d*M*c-C*p*c+C*l*m-r*M*m-d*l*S+r*p*S)*z,e[3]=(v*p*c-d*x*c-v*l*m+r*x*m+d*l*y-r*p*y)*z,e[4]=N*z,e[5]=(g*M*c-E*x*c+E*l*y-i*M*y-g*l*S+i*x*S)*z,e[6]=(E*p*c-h*M*c-E*l*m+i*M*m+h*l*S-i*p*S)*z,e[7]=(h*x*c-g*p*c+g*l*m-i*x*m-h*l*y+i*p*y)*z,e[8]=U*z,e[9]=(E*v*c-g*C*c-E*r*y+i*C*y+g*r*S-i*v*S)*z,e[10]=(h*C*c-E*d*c+E*r*m-i*C*m-h*r*S+i*d*S)*z,e[11]=(g*d*c-h*v*c-g*r*m+i*v*m+h*r*y-i*d*y)*z,e[12]=J*z,e[13]=(g*C*l-E*v*l+E*r*x-i*C*x-g*r*M+i*v*M)*z,e[14]=(E*d*l-h*C*l-E*r*p+i*C*p+h*r*M-i*d*M)*z,e[15]=(h*v*l-g*d*l+g*r*p-i*v*p-h*r*x+i*d*x)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,p=e.z,m=c*h,g=c*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,g=h+h,v=d+d,x=c*m,y=c*g,E=c*v,C=h*g,M=h*v,S=d*v,F=p*m,N=p*g,U=p*v,J=r.x,k=r.y,z=r.z;return l[0]=(1-(C+S))*J,l[1]=(y+U)*J,l[2]=(E-N)*J,l[3]=0,l[4]=(y-U)*k,l[5]=(1-(x+S))*k,l[6]=(M+F)*k,l[7]=0,l[8]=(E+N)*z,l[9]=(M-F)*z,l[10]=(1-(x+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=vr.set(l[0],l[1],l[2]).length();const h=vr.set(l[4],l[5],l[6]).length(),d=vr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ri.copy(this);const m=1/c,g=1/h,v=1/d;return Ri.elements[0]*=m,Ri.elements[1]*=m,Ri.elements[2]*=m,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,i.setFromRotationMatrix(Ri),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=pa){const p=this.elements,m=2*c/(i-e),g=2*c/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let y,E;if(d===pa)y=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Fc)y=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=pa){const p=this.elements,m=1/(i-e),g=1/(r-l),v=1/(h-c),x=(i+e)*m,y=(r+l)*g;let E,C;if(d===pa)E=(h+c)*v,C=-2*v;else if(d===Fc)E=c*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=C,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const vr=new q,Ri=new sn,Uy=new q(0,0,0),Ly=new q(1,1,1),qa=new q,dc=new q,si=new q,Gv=new sn,Vv=new jo;class va{constructor(e=0,i=0,r=0,l=va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Vv.setFromEuler(this),this.setFromQuaternion(Vv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class j_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ny=0;const kv=new q,_r=new jo,ua=new sn,pc=new q,Bo=new q,Oy=new q,Py=new jo,Xv=new q(1,0,0),Wv=new q(0,1,0),qv=new q(0,0,1),Yv={type:"added"},zy={type:"removed"},Sr={type:"childadded",child:null},hh={type:"childremoved",child:null};class ci extends _a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const e=new q,i=new va,r=new jo,l=new q(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new ut}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(Xv,e)}rotateY(e){return this.rotateOnAxis(Wv,e)}rotateZ(e){return this.rotateOnAxis(qv,e)}translateOnAxis(e,i){return kv.copy(e).applyQuaternion(this.quaternion),this.position.add(kv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Xv,e)}translateY(e){return this.translateOnAxis(Wv,e)}translateZ(e){return this.translateOnAxis(qv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?pc.copy(e):pc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Bo,pc,this.up):ua.lookAt(pc,Bo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),_r.setFromRotationMatrix(ua),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yv),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(zy),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yv),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,Oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),v=h(e.shapes),x=h(e.skeletons),y=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ci.DEFAULT_UP=new q(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new q,fa=new q,dh=new q,ha=new q,xr=new q,yr=new q,jv=new q,ph=new q,mh=new q,gh=new q,vh=new Zt,_h=new Zt,Sh=new Zt;class wi{constructor(e=new q,i=new q,r=new q){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ci.subVectors(l,i),fa.subVectors(r,i),dh.subVectors(e,i);const h=Ci.dot(Ci),d=Ci.dot(fa),p=Ci.dot(dh),m=fa.dot(fa),g=fa.dot(dh),v=h*m-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,y=(m*p-d*g)*x,E=(h*g-d*p)*x;return c.set(1-y-E,E,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,r,l,c,h,d,p){return this.getBarycoord(e,i,r,l,ha)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ha.x),p.addScaledVector(h,ha.y),p.addScaledVector(d,ha.z),p)}static getInterpolatedAttribute(e,i,r,l,c,h){return vh.setScalar(0),_h.setScalar(0),Sh.setScalar(0),vh.fromBufferAttribute(e,i),_h.fromBufferAttribute(e,r),Sh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(vh,c.x),h.addScaledVector(_h,c.y),h.addScaledVector(Sh,c.z),h}static isFrontFacing(e,i,r,l){return Ci.subVectors(r,i),fa.subVectors(e,i),Ci.cross(fa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ci.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;xr.subVectors(l,r),yr.subVectors(c,r),ph.subVectors(e,r);const p=xr.dot(ph),m=yr.dot(ph);if(p<=0&&m<=0)return i.copy(r);mh.subVectors(e,l);const g=xr.dot(mh),v=yr.dot(mh);if(g>=0&&v<=g)return i.copy(l);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(xr,h);gh.subVectors(e,c);const y=xr.dot(gh),E=yr.dot(gh);if(E>=0&&y<=E)return i.copy(c);const C=y*m-p*E;if(C<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(yr,d);const M=g*E-y*v;if(M<=0&&v-g>=0&&y-E>=0)return jv.subVectors(c,l),d=(v-g)/(v-g+(y-E)),i.copy(l).addScaledVector(jv,d);const S=1/(M+C+x);return h=C*S,d=x*S,i.copy(r).addScaledVector(xr,h).addScaledVector(yr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ya={h:0,s:0,l:0},mc={h:0,s:0,l:0};function xh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class gt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ut.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ut.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ut.workingColorSpace){if(e=_y(e,1),i=mt(i,0,1),r=mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=xh(h,c,e+1/3),this.g=xh(h,c,e),this.b=xh(h,c,e-1/3)}return Ut.toWorkingColorSpace(this,l),this}setStyle(e,i=kt){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=kt){const r=Z_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Ut.fromWorkingColorSpace(Ln.copy(this),e),Math.round(mt(Ln.r*255,0,255))*65536+Math.round(mt(Ln.g*255,0,255))*256+Math.round(mt(Ln.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=g<=.5?v/(h+d):v/(2-h-d),h){case r:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-r)/v+2;break;case c:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=kt){Ut.fromWorkingColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==kt?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ya),this.setHSL(Ya.h+e,Ya.s+i,Ya.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ya),e.getHSL(mc);const r=ih(Ya.h,mc.h,i),l=ih(Ya.s,mc.s,i),c=ih(Ya.l,mc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new gt;gt.NAMES=Z_;let By=0;class Br extends _a{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=wr,this.side=ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Ih,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(r.blending=this.blending),this.side!==ga&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Fh&&(r.blendSrc=this.blendSrc),this.blendDst!==Ih&&(r.blendDst=this.blendDst),this.blendEquation!==bs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ov&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class K_ extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new q,gc=new Fe;class ui{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Pv,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(e),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Oo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pv&&(e.usage=this.usage),e}}class Q_ extends ui{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class J_ extends ui{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Vi extends ui{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Fy=0;const Si=new sn,yh=new ci,Mr=new q,ri=new Zo,Fo=new Zo,Sn=new q;class ki extends _a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W_(e)?J_:Q_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,r){return Si.makeTranslation(e,i,r),this.applyMatrix4(Si),this}scale(e,i,r){return Si.makeScale(e,i,r),this.applyMatrix4(Si),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Vi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ri.min,Fo.min),ri.expandByPoint(Sn),Sn.addVectors(ri.max,Fo.max),ri.expandByPoint(Sn)):(ri.expandByPoint(Fo.min),ri.expandByPoint(Fo.max))}ri.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Sn.fromBufferAttribute(d,m),p&&(Mr.fromBufferAttribute(e,m),Sn.add(Mr)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<r.count;K++)d[K]=new q,p[K]=new q;const m=new q,g=new q,v=new q,x=new Fe,y=new Fe,E=new Fe,C=new q,M=new q;function S(K,L,w){m.fromBufferAttribute(r,K),g.fromBufferAttribute(r,L),v.fromBufferAttribute(r,w),x.fromBufferAttribute(c,K),y.fromBufferAttribute(c,L),E.fromBufferAttribute(c,w),g.sub(m),v.sub(m),y.sub(x),E.sub(x);const X=1/(y.x*E.y-E.x*y.y);isFinite(X)&&(C.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(X),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(X),d[K].add(C),d[L].add(C),d[w].add(C),p[K].add(M),p[L].add(M),p[w].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let K=0,L=F.length;K<L;++K){const w=F[K],X=w.start,he=w.count;for(let ce=X,ye=X+he;ce<ye;ce+=3)S(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const N=new q,U=new q,J=new q,k=new q;function z(K){J.fromBufferAttribute(l,K),k.copy(J);const L=d[K];N.copy(L),N.sub(J.multiplyScalar(J.dot(L))).normalize(),U.crossVectors(k,L);const X=U.dot(p[K])<0?-1:1;h.setXYZW(K,N.x,N.y,N.z,X)}for(let K=0,L=F.length;K<L;++K){const w=F[K],X=w.start,he=w.count;for(let ce=X,ye=X+he;ce<ye;ce+=3)z(e.getX(ce+0)),z(e.getX(ce+1)),z(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new q,c=new q,h=new q,d=new q,p=new q,m=new q,g=new q,v=new q;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,M),d.add(g),p.add(g),m.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,x=new m.constructor(p.length*g);let y=0,E=0;for(let C=0,M=p.length;C<M;C++){d.isInterleavedBufferAttribute?y=p[C]*d.data.stride+d.offset:y=p[C]*g;for(let S=0;S<g;S++)x[E++]=m[y++]}return new ui(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ki,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,v=m.length;g<v;g++){const x=m[g],y=e(x,r);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const y=m[v];g.push(y.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=e.morphAttributes;for(const m in c){const g=[],v=c[m];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zv=new sn,Ss=new Dy,vc=new Nd,Kv=new q,_c=new q,Sc=new q,xc=new q,Mh=new q,yc=new q,Qv=new q,Mc=new q;class li extends ci{constructor(e=new ki,i=new K_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){yc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],v=c[p];g!==0&&(Mh.fromBufferAttribute(v,e),h?yc.addScaledVector(Mh,g):yc.addScaledVector(Mh.sub(i),g))}i.add(yc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vc.copy(r.boundingSphere),vc.applyMatrix4(c),Ss.copy(e.ray).recast(e.near),!(vc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(vc,Kv)===null||Ss.origin.distanceToSquared(Kv)>(e.far-e.near)**2))&&(Zv.copy(c).invert(),Ss.copy(e.ray).applyMatrix4(Zv),!(r.boundingBox!==null&&Ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ss)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,C=x.length;E<C;E++){const M=x[E],S=h[M.materialIndex],F=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=F,J=N;U<J;U+=3){const k=d.getX(U),z=d.getX(U+1),K=d.getX(U+2);l=Ec(this,S,e,r,m,g,v,k,z,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=E,S=C;M<S;M+=3){const F=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=Ec(this,h,e,r,m,g,v,F,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,C=x.length;E<C;E++){const M=x[E],S=h[M.materialIndex],F=Math.max(M.start,y.start),N=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let U=F,J=N;U<J;U+=3){const k=U,z=U+1,K=U+2;l=Ec(this,S,e,r,m,g,v,k,z,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let M=E,S=C;M<S;M+=3){const F=M,N=M+1,U=M+2;l=Ec(this,h,e,r,m,g,v,F,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Iy(s,e,i,r,l,c,h,d){let p;if(e.side===xn?p=r.intersectTriangle(h,c,l,!0,d):p=r.intersectTriangle(l,c,h,e.side===ga,d),p===null)return null;Mc.copy(d),Mc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Mc);return m<i.near||m>i.far?null:{distance:m,point:Mc.clone(),object:s}}function Ec(s,e,i,r,l,c,h,d,p,m){s.getVertexPosition(d,_c),s.getVertexPosition(p,Sc),s.getVertexPosition(m,xc);const g=Iy(s,e,i,r,_c,Sc,xc,Qv);if(g){const v=new q;wi.getBarycoord(Qv,_c,Sc,xc,v),l&&(g.uv=wi.getInterpolatedAttribute(l,d,p,m,v,new Fe)),c&&(g.uv1=wi.getInterpolatedAttribute(c,d,p,m,v,new Fe)),h&&(g.normal=wi.getInterpolatedAttribute(h,d,p,m,v,new q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new q,materialIndex:0};wi.getNormal(_c,Sc,xc,x.normal),g.face=x,g.barycoord=v}return g}class Ko extends ki{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],g=[],v=[];let x=0,y=0;E("z","y","x",-1,-1,r,i,e,h,c,0),E("z","y","x",1,-1,r,i,-e,h,c,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Vi(m,3)),this.setAttribute("normal",new Vi(g,3)),this.setAttribute("uv",new Vi(v,2));function E(C,M,S,F,N,U,J,k,z,K,L){const w=U/z,X=J/K,he=U/2,ce=J/2,ye=k/2,_e=z+1,P=K+1;let I=0,D=0;const $=new q;for(let ee=0;ee<P;ee++){const R=ee*X-ce;for(let Z=0;Z<_e;Z++){const ue=Z*w-he;$[C]=ue*F,$[M]=R*N,$[S]=ye,m.push($.x,$.y,$.z),$[C]=0,$[M]=0,$[S]=k>0?1:-1,g.push($.x,$.y,$.z),v.push(Z/z),v.push(1-ee/K),I+=1}}for(let ee=0;ee<K;ee++)for(let R=0;R<z;R++){const Z=x+R+_e*ee,ue=x+R+_e*(ee+1),V=x+(R+1)+_e*(ee+1),oe=x+(R+1)+_e*ee;p.push(Z,ue,oe),p.push(ue,V,oe),D+=6}d.addGroup(y,D,L),y+=D,x+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=Pr(s[i]);for(const l in r)e[l]=r[l]}return e}function Hy(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function $_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const Gy={clone:Pr,merge:In};var Vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vy,this.fragmentShader=ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class e0 extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=pa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ja=new q,Jv=new Fe,$v=new Fe;class oi extends e0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Md*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Md*2*Math.atan(Math.tan(nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-e/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ja.x,ja.y).multiplyScalar(-e/ja.z)}getViewSize(e,i){return this.getViewBounds(e,Jv,$v),i.subVectors($v,Jv)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(nh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Er=-90,Tr=1;class Xy extends ci{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(Er,Tr,e,i);l.layers=this.layers,this.add(l);const c=new oi(Er,Tr,e,i);c.layers=this.layers,this.add(c);const h=new oi(Er,Tr,e,i);h.layers=this.layers,this.add(h);const d=new oi(Er,Tr,e,i);d.layers=this.layers,this.add(d);const p=new oi(Er,Tr,e,i);p.layers=this.layers,this.add(p);const m=new oi(Er,Tr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===pa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class t0 extends Nn{constructor(e,i,r,l,c,h,d,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:Nr,super(e,i,r,l,c,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wy extends Pn{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new t0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Kn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ko(5,5,5),c=new yn({name:"CubemapFromEquirect",uniforms:Pr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:xn,blending:Qn});c.uniforms.tEquirect.value=i;const h=new li(l,c),d=i.minFilter;return i.minFilter===Cs&&(i.minFilter=Kn),new Xy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class Od{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new gt(e),this.near=i,this.far=r}clone(){return new Od(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ed extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class br extends ui{constructor(e,i,r,l=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Eh=new q,qy=new q,Yy=new ut;class Es{constructor(e=new q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Eh.subVectors(r,i).cross(qy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Eh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Yy.getNormalMatrix(e),l=this.coplanarPoint(Eh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Nd,Tc=new q;class n0{constructor(e=new Es,i=new Es,r=new Es,l=new Es,c=new Es,h=new Es){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=pa){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],v=l[6],x=l[7],y=l[8],E=l[9],C=l[10],M=l[11],S=l[12],F=l[13],N=l[14],U=l[15];if(r[0].setComponents(p-c,x-m,M-y,U-S).normalize(),r[1].setComponents(p+c,x+m,M+y,U+S).normalize(),r[2].setComponents(p+h,x+g,M+E,U+F).normalize(),r[3].setComponents(p-h,x-g,M-E,U-F).normalize(),r[4].setComponents(p-d,x-v,M-C,U-N).normalize(),i===pa)r[5].setComponents(p+d,x+v,M+C,U+N).normalize();else if(i===Fc)r[5].setComponents(d,v,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tc.x=l.normal.x>0?e.max.x:e.min.x,Tc.y=l.normal.y>0?e.max.y:e.min.y,Tc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bc extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Pd extends Nn{constructor(e,i,r,l,c,h,d,p,m,g=Dr){if(g!==Dr&&g!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Dr&&(r=Ds),r===void 0&&g===Ls&&(r=Us),super(null,l,c,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Ui,this.minFilter=p!==void 0?p:Ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Sa{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=e;h++)r=this.getPoint(h/e),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i){const r=this.getLengths();let l=0;const c=r.length;let h;i?h=i:h=e*r[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===h)return l/(c-1);const g=r[l],x=r[l+1]-g,y=(h-g)/x;return(l+y)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),p=i||(h.isVector2?new Fe:new q);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i){const r=new q,l=[],c=[],h=[],d=new q,p=new sn;for(let y=0;y<=e;y++){const E=y/e;l[y]=this.getTangentAt(E,new q)}c[0]=new q,h[0]=new q;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),x=Math.abs(l[0].z);g<=m&&(m=g,r.set(1,0,0)),v<=m&&(m=v,r.set(0,1,0)),x<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let y=1;y<=e;y++){if(c[y]=c[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(mt(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(p.makeRotationAxis(d,E))}h[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(mt(c[0].dot(c[e]),-1,1));y/=e,l[0].dot(d.crossVectors(c[0],c[e]))>0&&(y=-y);for(let E=1;E<=e;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],y*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class i0 extends Sa{constructor(e=0,i=0,r=1,l=1,c=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(e,i=new Fe){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=p-this.aX,y=m-this.aY;p=x*g-y*v+this.aX,m=x*v+y*g+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jy extends i0{constructor(e,i,r,l,c,h){super(e,i,r,r,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function zd(){let s=0,e=0,i=0,r=0;function l(c,h,d,p){s=c,e=d,i=-3*c+3*h-2*d-p,r=2*c-2*h+d+p}return{initCatmullRom:function(c,h,d,p,m){l(h,d,m*(d-c),m*(p-h))},initNonuniformCatmullRom:function(c,h,d,p,m,g,v){let x=(h-c)/m-(d-c)/(m+g)+(d-h)/g,y=(d-h)/g-(p-h)/(g+v)+(p-d)/v;x*=g,y*=g,l(h,d,x,y)},calc:function(c){const h=c*c,d=h*c;return s+e*c+i*h+r*d}}}const Ac=new q,Th=new zd,bh=new zd,Ah=new zd;class Zy extends Sa{constructor(e=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=l}getPoint(e,i=new q){const r=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,g;this.closed||d>0?m=l[(d-1)%c]:(Ac.subVectors(l[0],l[1]).add(l[0]),m=Ac);const v=l[d%c],x=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Ac.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Ac),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(v),y),C=Math.pow(v.distanceToSquared(x),y),M=Math.pow(x.distanceToSquared(g),y);C<1e-4&&(C=1),E<1e-4&&(E=C),M<1e-4&&(M=C),Th.initNonuniformCatmullRom(m.x,v.x,x.x,g.x,E,C,M),bh.initNonuniformCatmullRom(m.y,v.y,x.y,g.y,E,C,M),Ah.initNonuniformCatmullRom(m.z,v.z,x.z,g.z,E,C,M)}else this.curveType==="catmullrom"&&(Th.initCatmullRom(m.x,v.x,x.x,g.x,this.tension),bh.initCatmullRom(m.y,v.y,x.y,g.y,this.tension),Ah.initCatmullRom(m.z,v.z,x.z,g.z,this.tension));return r.set(Th.calc(p),bh.calc(p),Ah.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new q().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function e_(s,e,i,r,l){const c=(r-e)*.5,h=(l-i)*.5,d=s*s,p=s*d;return(2*i-2*r+c+h)*p+(-3*i+3*r-2*c-h)*d+c*s+i}function Ky(s,e){const i=1-s;return i*i*e}function Qy(s,e){return 2*(1-s)*s*e}function Jy(s,e){return s*s*e}function Go(s,e,i,r){return Ky(s,e)+Qy(s,i)+Jy(s,r)}function $y(s,e){const i=1-s;return i*i*i*e}function eM(s,e){const i=1-s;return 3*i*i*s*e}function tM(s,e){return 3*(1-s)*s*s*e}function nM(s,e){return s*s*s*e}function Vo(s,e,i,r,l){return $y(s,e)+eM(s,i)+tM(s,r)+nM(s,l)}class iM extends Sa{constructor(e=new Fe,i=new Fe,r=new Fe,l=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=r,this.v3=l}getPoint(e,i=new Fe){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Vo(e,l.x,c.x,h.x,d.x),Vo(e,l.y,c.y,h.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class aM extends Sa{constructor(e=new q,i=new q,r=new q,l=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=r,this.v3=l}getPoint(e,i=new q){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Vo(e,l.x,c.x,h.x,d.x),Vo(e,l.y,c.y,h.y,d.y),Vo(e,l.z,c.z,h.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sM extends Sa{constructor(e=new Fe,i=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new Fe){const r=i;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new Fe){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a0 extends Sa{constructor(e=new q,i=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new q){const r=i;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rM extends Sa{constructor(e=new Fe,i=new Fe,r=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=r}getPoint(e,i=new Fe){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(Go(e,l.x,c.x,h.x),Go(e,l.y,c.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class s0 extends Sa{constructor(e=new q,i=new q,r=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=r}getPoint(e,i=new q){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(Go(e,l.x,c.x,h.x),Go(e,l.y,c.y,h.y),Go(e,l.z,c.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oM extends Sa{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new Fe){const r=i,l=this.points,c=(l.length-1)*e,h=Math.floor(c),d=c-h,p=l[h===0?h:h-1],m=l[h],g=l[h>l.length-2?l.length-1:h+1],v=l[h>l.length-3?l.length-1:h+2];return r.set(e_(d,p.x,m.x,g.x,v.x),e_(d,p.y,m.y,g.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new Fe().fromArray(l))}return this}}var lM=Object.freeze({__proto__:null,ArcCurve:jy,CatmullRomCurve3:Zy,CubicBezierCurve:iM,CubicBezierCurve3:aM,EllipseCurve:i0,LineCurve:sM,LineCurve3:a0,QuadraticBezierCurve:rM,QuadraticBezierCurve3:s0,SplineCurve:oM});class zr extends ki{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,v=e/d,x=i/p,y=[],E=[],C=[],M=[];for(let S=0;S<g;S++){const F=S*x-h;for(let N=0;N<m;N++){const U=N*v-c;E.push(U,-F,0),C.push(0,0,1),M.push(N/d),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let F=0;F<d;F++){const N=F+m*S,U=F+m*(S+1),J=F+1+m*(S+1),k=F+1+m*S;y.push(N,U,k),y.push(U,J,k)}this.setIndex(y),this.setAttribute("position",new Vi(E,3)),this.setAttribute("normal",new Vi(C,3)),this.setAttribute("uv",new Vi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bd extends ki{constructor(e=new s0(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),i=64,r=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:i,radius:r,radialSegments:l,closed:c};const h=e.computeFrenetFrames(i,c);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new q,p=new q,m=new Fe;let g=new q;const v=[],x=[],y=[],E=[];C(),this.setIndex(E),this.setAttribute("position",new Vi(v,3)),this.setAttribute("normal",new Vi(x,3)),this.setAttribute("uv",new Vi(y,2));function C(){for(let N=0;N<i;N++)M(N);M(c===!1?i:0),F(),S()}function M(N){g=e.getPointAt(N/i,g);const U=h.normals[N],J=h.binormals[N];for(let k=0;k<=l;k++){const z=k/l*Math.PI*2,K=Math.sin(z),L=-Math.cos(z);p.x=L*U.x+K*J.x,p.y=L*U.y+K*J.y,p.z=L*U.z+K*J.z,p.normalize(),x.push(p.x,p.y,p.z),d.x=g.x+r*p.x,d.y=g.y+r*p.y,d.z=g.z+r*p.z,v.push(d.x,d.y,d.z)}}function S(){for(let N=1;N<=i;N++)for(let U=1;U<=l;U++){const J=(l+1)*(N-1)+(U-1),k=(l+1)*N+(U-1),z=(l+1)*N+U,K=(l+1)*(N-1)+U;E.push(J,k,K),E.push(k,z,K)}}function F(){for(let N=0;N<=i;N++)for(let U=0;U<=l;U++)m.x=N/i,m.y=U/l,y.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Bd(new lM[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class cM extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uM extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class r0 extends e0{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class t_ extends ki{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class fM extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=n_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=n_();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function n_(){return performance.now()}class Ot{constructor(e){this.value=e}clone(){return new Ot(this.value.clone===void 0?this.value:this.value.clone())}}function i_(s,e,i,r){const l=dM(r);switch(i){case B_:return s*e;case I_:return s*e;case H_:return s*e*2;case G_:return s*e/l.components*l.byteLength;case Dd:return s*e/l.components*l.byteLength;case V_:return s*e*2/l.components*l.byteLength;case Ud:return s*e*2/l.components*l.byteLength;case F_:return s*e*3/l.components*l.byteLength;case Di:return s*e*4/l.components*l.byteLength;case Ld:return s*e*4/l.components*l.byteLength;case Dc:case Uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qh:case $h:return Math.max(s,16)*Math.max(e,8)/4;case Kh:case Jh:return Math.max(s,8)*Math.max(e,8)/2;case ed:case td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case rd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ld:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case cd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ud:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case dd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case pd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case md:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case gd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Oc:case vd:case _d:return Math.ceil(s/4)*Math.ceil(e/4)*16;case k_:case Sd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xd:case yd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function dM(s){switch(s){case On:case O_:return{byteLength:1,components:1};case ko:case P_:case Wo:return{byteLength:2,components:1};case Cd:case wd:return{byteLength:2,components:4};case Ds:case Rd:case Hi:return{byteLength:4,components:1};case z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function o0(){let s=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function pM(s){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,g);else{v.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<v.length;y++){const E=v[x],C=v[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++x,v[x]=C)}v.length=x+1;for(let y=0,E=v.length;y<E;y++){const C=v[y];s.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var mM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,TM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,FM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,IM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WM="gl_FragColor = linearToOutputTexel( gl_FragColor );",qM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_E=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ME=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,TE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,XE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ET=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:mM,alphahash_pars_fragment:gM,alphamap_fragment:vM,alphamap_pars_fragment:_M,alphatest_fragment:SM,alphatest_pars_fragment:xM,aomap_fragment:yM,aomap_pars_fragment:MM,batching_pars_vertex:EM,batching_vertex:TM,begin_vertex:bM,beginnormal_vertex:AM,bsdfs:RM,iridescence_fragment:CM,bumpmap_pars_fragment:wM,clipping_planes_fragment:DM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:LM,clipping_planes_vertex:NM,color_fragment:OM,color_pars_fragment:PM,color_pars_vertex:zM,color_vertex:BM,common:FM,cube_uv_reflection_fragment:IM,defaultnormal_vertex:HM,displacementmap_pars_vertex:GM,displacementmap_vertex:VM,emissivemap_fragment:kM,emissivemap_pars_fragment:XM,colorspace_fragment:WM,colorspace_pars_fragment:qM,envmap_fragment:YM,envmap_common_pars_fragment:jM,envmap_pars_fragment:ZM,envmap_pars_vertex:KM,envmap_physical_pars_fragment:oE,envmap_vertex:QM,fog_vertex:JM,fog_pars_vertex:$M,fog_fragment:eE,fog_pars_fragment:tE,gradientmap_pars_fragment:nE,lightmap_pars_fragment:iE,lights_lambert_fragment:aE,lights_lambert_pars_fragment:sE,lights_pars_begin:rE,lights_toon_fragment:lE,lights_toon_pars_fragment:cE,lights_phong_fragment:uE,lights_phong_pars_fragment:fE,lights_physical_fragment:hE,lights_physical_pars_fragment:dE,lights_fragment_begin:pE,lights_fragment_maps:mE,lights_fragment_end:gE,logdepthbuf_fragment:vE,logdepthbuf_pars_fragment:_E,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:xE,map_fragment:yE,map_pars_fragment:ME,map_particle_fragment:EE,map_particle_pars_fragment:TE,metalnessmap_fragment:bE,metalnessmap_pars_fragment:AE,morphinstance_vertex:RE,morphcolor_vertex:CE,morphnormal_vertex:wE,morphtarget_pars_vertex:DE,morphtarget_vertex:UE,normal_fragment_begin:LE,normal_fragment_maps:NE,normal_pars_fragment:OE,normal_pars_vertex:PE,normal_vertex:zE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:FE,clearcoat_normal_fragment_maps:IE,clearcoat_pars_fragment:HE,iridescence_pars_fragment:GE,opaque_fragment:VE,packing:kE,premultiplied_alpha_fragment:XE,project_vertex:WE,dithering_fragment:qE,dithering_pars_fragment:YE,roughnessmap_fragment:jE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:KE,shadowmap_pars_vertex:QE,shadowmap_vertex:JE,shadowmask_pars_fragment:$E,skinbase_vertex:eT,skinning_pars_vertex:tT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:aT,specularmap_pars_fragment:sT,tonemapping_fragment:rT,tonemapping_pars_fragment:oT,transmission_fragment:lT,transmission_pars_fragment:cT,uv_pars_fragment:uT,uv_pars_vertex:fT,uv_vertex:hT,worldpos_vertex:dT,background_vert:pT,background_frag:mT,backgroundCube_vert:gT,backgroundCube_frag:vT,cube_vert:_T,cube_frag:ST,depth_vert:xT,depth_frag:yT,distanceRGBA_vert:MT,distanceRGBA_frag:ET,equirect_vert:TT,equirect_frag:bT,linedashed_vert:AT,linedashed_frag:RT,meshbasic_vert:CT,meshbasic_frag:wT,meshlambert_vert:DT,meshlambert_frag:UT,meshmatcap_vert:LT,meshmatcap_frag:NT,meshnormal_vert:OT,meshnormal_frag:PT,meshphong_vert:zT,meshphong_frag:BT,meshphysical_vert:FT,meshphysical_frag:IT,meshtoon_vert:HT,meshtoon_frag:GT,points_vert:VT,points_frag:kT,shadow_vert:XT,shadow_frag:WT,sprite_vert:qT,sprite_frag:YT},Ne={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Fi={basic:{uniforms:In([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:In([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new gt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:In([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:In([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:In([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new gt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:In([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:In([Ne.points,Ne.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:In([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:In([Ne.common,Ne.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:In([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:In([Ne.sprite,Ne.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:In([Ne.common,Ne.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:In([Ne.lights,Ne.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Fi.physical={uniforms:In([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Rc={r:0,b:0,g:0},ys=new va,jT=new sn;function ZT(s,e,i,r,l,c,h){const d=new gt(0);let p=c===!0?0:1,m,g,v=null,x=0,y=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:e).get(U)),U}function C(N){let U=!1;const J=E(N);J===null?S(d,p):J&&J.isColor&&(S(J,1),U=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(N,U){const J=E(U);J&&(J.isCubeTexture||J.mapping===Hc)?(g===void 0&&(g=new li(new Ko(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Pr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,z,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ys.copy(U.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,J.isCubeTexture&&J.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),g.material.uniforms.envMap.value=J,g.material.uniforms.flipEnvMap.value=J.isCubeTexture&&J.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(jT.makeRotationFromEuler(ys)),g.material.toneMapped=Ut.getTransfer(J.colorSpace)!==Vt,(v!==J||x!==J.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,v=J,x=J.version,y=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):J&&J.isTexture&&(m===void 0&&(m=new li(new zr(2,2),new yn({name:"BackgroundMaterial",uniforms:Pr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ga,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=J,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Ut.getTransfer(J.colorSpace)!==Vt,J.matrixAutoUpdate===!0&&J.updateMatrix(),m.material.uniforms.uvTransform.value.copy(J.matrix),(v!==J||x!==J.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,v=J,x=J.version,y=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function S(N,U){N.getRGB(Rc,$_(s)),r.buffers.color.setClear(Rc.r,Rc.g,Rc.b,U,h)}function F(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),p=U,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,S(d,p)},render:C,addToRenderList:M,dispose:F}}function KT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(w,X,he,ce,ye){let _e=!1;const P=v(ce,he,X);c!==P&&(c=P,m(c.object)),_e=y(w,ce,he,ye),_e&&E(w,ce,he,ye),ye!==null&&e.update(ye,s.ELEMENT_ARRAY_BUFFER),(_e||h)&&(h=!1,U(w,X,he,ce),ye!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ye).buffer))}function p(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,X,he){const ce=he.wireframe===!0;let ye=r[w.id];ye===void 0&&(ye={},r[w.id]=ye);let _e=ye[X.id];_e===void 0&&(_e={},ye[X.id]=_e);let P=_e[ce];return P===void 0&&(P=x(p()),_e[ce]=P),P}function x(w){const X=[],he=[],ce=[];for(let ye=0;ye<i;ye++)X[ye]=0,he[ye]=0,ce[ye]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:he,attributeDivisors:ce,object:w,attributes:{},index:null}}function y(w,X,he,ce){const ye=c.attributes,_e=X.attributes;let P=0;const I=he.getAttributes();for(const D in I)if(I[D].location>=0){const ee=ye[D];let R=_e[D];if(R===void 0&&(D==="instanceMatrix"&&w.instanceMatrix&&(R=w.instanceMatrix),D==="instanceColor"&&w.instanceColor&&(R=w.instanceColor)),ee===void 0||ee.attribute!==R||R&&ee.data!==R.data)return!0;P++}return c.attributesNum!==P||c.index!==ce}function E(w,X,he,ce){const ye={},_e=X.attributes;let P=0;const I=he.getAttributes();for(const D in I)if(I[D].location>=0){let ee=_e[D];ee===void 0&&(D==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),D==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor));const R={};R.attribute=ee,ee&&ee.data&&(R.data=ee.data),ye[D]=R,P++}c.attributes=ye,c.attributesNum=P,c.index=ce}function C(){const w=c.newAttributes;for(let X=0,he=w.length;X<he;X++)w[X]=0}function M(w){S(w,0)}function S(w,X){const he=c.newAttributes,ce=c.enabledAttributes,ye=c.attributeDivisors;he[w]=1,ce[w]===0&&(s.enableVertexAttribArray(w),ce[w]=1),ye[w]!==X&&(s.vertexAttribDivisor(w,X),ye[w]=X)}function F(){const w=c.newAttributes,X=c.enabledAttributes;for(let he=0,ce=X.length;he<ce;he++)X[he]!==w[he]&&(s.disableVertexAttribArray(he),X[he]=0)}function N(w,X,he,ce,ye,_e,P){P===!0?s.vertexAttribIPointer(w,X,he,ye,_e):s.vertexAttribPointer(w,X,he,ce,ye,_e)}function U(w,X,he,ce){C();const ye=ce.attributes,_e=he.getAttributes(),P=X.defaultAttributeValues;for(const I in _e){const D=_e[I];if(D.location>=0){let $=ye[I];if($===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),$!==void 0){const ee=$.normalized,R=$.itemSize,Z=e.get($);if(Z===void 0)continue;const ue=Z.buffer,V=Z.type,oe=Z.bytesPerElement,pe=V===s.INT||V===s.UNSIGNED_INT||$.gpuType===Rd;if($.isInterleavedBufferAttribute){const ve=$.data,Pe=ve.stride,Re=$.offset;if(ve.isInstancedInterleavedBuffer){for(let $e=0;$e<D.locationSize;$e++)S(D.location+$e,ve.meshPerAttribute);w.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let $e=0;$e<D.locationSize;$e++)M(D.location+$e);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let $e=0;$e<D.locationSize;$e++)N(D.location+$e,R/D.locationSize,V,ee,Pe*oe,(Re+R/D.locationSize*$e)*oe,pe)}else{if($.isInstancedBufferAttribute){for(let ve=0;ve<D.locationSize;ve++)S(D.location+ve,$.meshPerAttribute);w.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ve=0;ve<D.locationSize;ve++)M(D.location+ve);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let ve=0;ve<D.locationSize;ve++)N(D.location+ve,R/D.locationSize,V,ee,R*oe,R/D.locationSize*ve*oe,pe)}}else if(P!==void 0){const ee=P[I];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(D.location,ee);break;case 3:s.vertexAttrib3fv(D.location,ee);break;case 4:s.vertexAttrib4fv(D.location,ee);break;default:s.vertexAttrib1fv(D.location,ee)}}}}F()}function J(){K();for(const w in r){const X=r[w];for(const he in X){const ce=X[he];for(const ye in ce)g(ce[ye].object),delete ce[ye];delete X[he]}delete r[w]}}function k(w){if(r[w.id]===void 0)return;const X=r[w.id];for(const he in X){const ce=X[he];for(const ye in ce)g(ce[ye].object),delete ce[ye];delete X[he]}delete r[w.id]}function z(w){for(const X in r){const he=r[X];if(he[w.id]===void 0)continue;const ce=he[w.id];for(const ye in ce)g(ce[ye].object),delete ce[ye];delete he[w.id]}}function K(){L(),h=!0,c!==l&&(c=l,m(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:L,dispose:J,releaseStatesOfGeometry:k,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:M,disableUnusedAttributes:F}}function QT(s,e,i){let r;function l(m){r=m}function c(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function h(m,g,v){v!==0&&(s.drawArraysInstanced(r,m,g,v),i.update(g,r,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];i.update(y,r,1)}function p(m,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)h(m[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,v);let E=0;for(let C=0;C<v;C++)E+=g[C]*x[C];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function JT(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Di&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const K=z===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==On&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Hi&&!K)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),J=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:J,maxSamples:k}}function $T(s){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Es,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const E=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,S=s.get(v);if(!l||E===null||E.length===0||c&&!M)c?g(null):m();else{const F=c?0:r,N=F*4;let U=S.clippingState||null;p.value=U,U=g(E,x,N,y);for(let J=0;J!==N;++J)U[J]=i[J];S.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,y,E){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=p.value,E!==!0||M===null){const S=y+C*4,F=x.matrixWorldInverse;d.getNormalMatrix(F),(M===null||M.length<S)&&(M=new Float32Array(S));for(let N=0,U=y;N!==C;++N,U+=4)h.copy(v[N]).applyMatrix4(F,d),h.normal.toArray(M,U),M[U+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function eb(s){let e=new WeakMap;function i(h,d){return d===qh?h.mapping=Nr:d===Yh&&(h.mapping=Or),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===qh||d===Yh)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new Wy(p.height);return m.fromEquirectangularTexture(s,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Cr=4,a_=[.125,.215,.35,.446,.526,.582],As=20,Rh=new r0,s_=new gt;let Ch=null,wh=0,Dh=0,Uh=!1;const Ts=(1+Math.sqrt(5))/2,Ar=1/Ts,r_=[new q(-Ts,Ar,0),new q(Ts,Ar,0),new q(-Ar,0,Ts),new q(Ar,0,Ts),new q(0,Ts,-Ar),new q(0,Ts,Ar),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class o_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){Ch=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ch,wh,Dh),this._renderer.xr.enabled=Uh,e.scissorTest=!1,Cc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Nr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ch=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Wo,format:Di,colorSpace:Qa,depthBuffer:!1},l=l_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tb(c)),this._blurMaterial=nb(c,e,i)}return l}_compileMaterial(e){const i=new li(this._lodPlanes[0],e);this._renderer.compile(i,Rh)}_sceneToCubeUV(e,i,r,l){const d=new oi(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(s_),g.toneMapping=Ka,g.autoClear=!1;const y=new K_({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),E=new li(new Ko,y);let C=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,C=!0):(y.color.copy(s_),C=!0);for(let S=0;S<6;S++){const F=S%3;F===0?(d.up.set(0,p[S],0),d.lookAt(m[S],0,0)):F===1?(d.up.set(0,0,p[S]),d.lookAt(0,m[S],0)):(d.up.set(0,p[S],0),d.lookAt(0,0,m[S]));const N=this._cubeSize;Cc(l,F*N,S>2?N:0,N,N),g.setRenderTarget(l),C&&g.render(E,d),g.render(e,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=M}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Nr||e.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=u_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new li(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Cc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Rh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=r_[(l-c-1)%r_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new li(this._lodPlanes[l],m),x=m.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*As-1),C=c/E,M=isFinite(c)?1+Math.floor(g*C):As;M>As&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${As}`);const S=[];let F=0;for(let z=0;z<As;++z){const K=z/C,L=Math.exp(-K*K/2);S.push(L),z===0?F+=L:z<M&&(F+=2*L)}for(let z=0;z<S.length;z++)S[z]=S[z]/F;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=S,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-r;const U=this._sizeLods[l],J=3*U*(l>N-Cr?l-N+Cr:0),k=4*(this._cubeSize-U);Cc(i,J,k,3*U,2*U),p.setRenderTarget(i),p.render(v,Rh)}}function tb(s){const e=[],i=[],r=[];let l=s;const c=s-Cr+1+a_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>s-Cr?p=a_[h-s+Cr-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,C=3,M=2,S=1,F=new Float32Array(C*E*y),N=new Float32Array(M*E*y),U=new Float32Array(S*E*y);for(let k=0;k<y;k++){const z=k%3*2/3-1,K=k>2?0:-1,L=[z,K,0,z+2/3,K,0,z+2/3,K+1,0,z,K,0,z+2/3,K+1,0,z,K+1,0];F.set(L,C*E*k),N.set(x,M*E*k);const w=[k,k,k,k,k,k];U.set(w,S*E*k)}const J=new ki;J.setAttribute("position",new ui(F,C)),J.setAttribute("uv",new ui(N,M)),J.setAttribute("faceIndex",new ui(U,S)),e.push(J),l>Cr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function l_(s,e,i){const r=new Pn(s,e,i);return r.texture.mapping=Hc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function nb(s,e,i){const r=new Float32Array(As),l=new q(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function c_(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function u_(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Fd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ib(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===qh||p===Yh,g=p===Nr||p===Or;if(m||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new o_(s)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new o_(s)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ab(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Rr("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function sb(s,e,i,r){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(v){const x=v.attributes;for(const y in x)e.update(x[y],s.ARRAY_BUFFER)}function m(v){const x=[],y=v.index,E=v.attributes.position;let C=0;if(y!==null){const F=y.array;C=y.version;for(let N=0,U=F.length;N<U;N+=3){const J=F[N+0],k=F[N+1],z=F[N+2];x.push(J,k,k,z,z,J)}}else if(E!==void 0){const F=E.array;C=E.version;for(let N=0,U=F.length/3-1;N<U;N+=3){const J=N+0,k=N+1,z=N+2;x.push(J,k,k,z,z,J)}}else return;const M=new(W_(x)?J_:Q_)(x,1);M.version=C;const S=c.get(v);S&&e.remove(S),c.set(v,M)}function g(v){const x=c.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function rb(s,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function p(x,y){s.drawElements(r,y,c,x*h),i.update(y,r,1)}function m(x,y,E){E!==0&&(s.drawElementsInstanced(r,y,c,x*h,E),i.update(y,r,E))}function g(x,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,E);let M=0;for(let S=0;S<E;S++)M+=y[S];i.update(M,r,1)}function v(x,y,E,C){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<x.length;S++)m(x[S]/h,y[S],C[S]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,C,0,E);let S=0;for(let F=0;F<E;F++)S+=y[F]*C[F];i.update(S,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function ob(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function lb(s,e,i){const r=new WeakMap,l=new Zt;function c(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let w=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),C===!0&&(U=2),M===!0&&(U=3);let J=d.attributes.position.count*U,k=1;J>e.maxTextureSize&&(k=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const z=new Float32Array(J*k*4*v),K=new Y_(z,J,k,v);K.type=Hi,K.needsUpdate=!0;const L=U*4;for(let X=0;X<v;X++){const he=S[X],ce=F[X],ye=N[X],_e=J*k*4*X;for(let P=0;P<he.count;P++){const I=P*L;E===!0&&(l.fromBufferAttribute(he,P),z[_e+I+0]=l.x,z[_e+I+1]=l.y,z[_e+I+2]=l.z,z[_e+I+3]=0),C===!0&&(l.fromBufferAttribute(ce,P),z[_e+I+4]=l.x,z[_e+I+5]=l.y,z[_e+I+6]=l.z,z[_e+I+7]=0),M===!0&&(l.fromBufferAttribute(ye,P),z[_e+I+8]=l.x,z[_e+I+9]=l.y,z[_e+I+10]=l.z,z[_e+I+11]=ye.itemSize===4?l.w:1)}}x={count:v,texture:K,size:new Fe(J,k)},r.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const C=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function cb(s,e,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const l0=new Nn,f_=new Pd(1,1),c0=new Y_,u0=new Cy,f0=new t0,h_=[],d_=[],p_=new Float32Array(16),m_=new Float32Array(9),g_=new Float32Array(4);function Fr(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=h_[l];if(c===void 0&&(c=new Float32Array(l),h_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,s[h].toArray(c,d)}return c}function mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function gn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Gc(s,e){let i=d_[e];i===void 0&&(i=new Int32Array(e),d_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function ub(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function fb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2fv(this.addr,e),gn(i,e)}}function hb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;s.uniform3fv(this.addr,e),gn(i,e)}}function db(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4fv(this.addr,e),gn(i,e)}}function pb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;g_.set(r),s.uniformMatrix2fv(this.addr,!1,g_),gn(i,r)}}function mb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;m_.set(r),s.uniformMatrix3fv(this.addr,!1,m_),gn(i,r)}}function gb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;p_.set(r),s.uniformMatrix4fv(this.addr,!1,p_),gn(i,r)}}function vb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function _b(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2iv(this.addr,e),gn(i,e)}}function Sb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3iv(this.addr,e),gn(i,e)}}function xb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4iv(this.addr,e),gn(i,e)}}function yb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function Mb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2uiv(this.addr,e),gn(i,e)}}function Eb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3uiv(this.addr,e),gn(i,e)}}function Tb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4uiv(this.addr,e),gn(i,e)}}function bb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(f_.compareFunction=X_,c=f_):c=l0,i.setTexture2D(e||c,l)}function Ab(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||u0,l)}function Rb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||f0,l)}function Cb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||c0,l)}function wb(s){switch(s){case 5126:return ub;case 35664:return fb;case 35665:return hb;case 35666:return db;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return vb;case 35667:case 35671:return _b;case 35668:case 35672:return Sb;case 35669:case 35673:return xb;case 5125:return yb;case 36294:return Mb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Cb}}function Db(s,e){s.uniform1fv(this.addr,e)}function Ub(s,e){const i=Fr(e,this.size,2);s.uniform2fv(this.addr,i)}function Lb(s,e){const i=Fr(e,this.size,3);s.uniform3fv(this.addr,i)}function Nb(s,e){const i=Fr(e,this.size,4);s.uniform4fv(this.addr,i)}function Ob(s,e){const i=Fr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Pb(s,e){const i=Fr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function zb(s,e){const i=Fr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Bb(s,e){s.uniform1iv(this.addr,e)}function Fb(s,e){s.uniform2iv(this.addr,e)}function Ib(s,e){s.uniform3iv(this.addr,e)}function Hb(s,e){s.uniform4iv(this.addr,e)}function Gb(s,e){s.uniform1uiv(this.addr,e)}function Vb(s,e){s.uniform2uiv(this.addr,e)}function kb(s,e){s.uniform3uiv(this.addr,e)}function Xb(s,e){s.uniform4uiv(this.addr,e)}function Wb(s,e,i){const r=this.cache,l=e.length,c=Gc(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||l0,c[h])}function qb(s,e,i){const r=this.cache,l=e.length,c=Gc(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||u0,c[h])}function Yb(s,e,i){const r=this.cache,l=e.length,c=Gc(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||f0,c[h])}function jb(s,e,i){const r=this.cache,l=e.length,c=Gc(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||c0,c[h])}function Zb(s){switch(s){case 5126:return Db;case 35664:return Ub;case 35665:return Lb;case 35666:return Nb;case 35674:return Ob;case 35675:return Pb;case 35676:return zb;case 5124:case 35670:return Bb;case 35667:case 35671:return Fb;case 35668:case 35672:return Ib;case 35669:case 35673:return Hb;case 5125:return Gb;case 36294:return Vb;case 36295:return kb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return jb}}class Kb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=wb(i.type)}}class Qb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Zb(i.type)}}class Jb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function v_(s,e){s.seq.push(e),s.map[e.id]=e}function $b(s,e,i){const r=s.name,l=r.length;for(Lh.lastIndex=0;;){const c=Lh.exec(r),h=Lh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){v_(i,m===void 0?new Kb(d,s,e):new Qb(d,s,e));break}else{let v=i.map[d];v===void 0&&(v=new Jb(d),v_(i,v)),i=v}}}class Pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);$b(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function __(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const eA=37297;let tA=0;function nA(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const S_=new ut;function iA(s){Ut._getMatrix(S_,Ut.workingColorSpace,s);const e=`mat3( ${S_.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(s)){case Bc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function x_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+nA(s.getShaderSource(e),h)}else return l}function aA(s,e){const i=iA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function sA(s,e){let i;switch(e){case ey:i="Linear";break;case ty:i="Reinhard";break;case ny:i="Cineon";break;case iy:i="ACESFilmic";break;case sy:i="AgX";break;case ry:i="Neutral";break;case ay:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wc=new q;function rA(){Ut.getLuminanceCoefficients(wc);const s=wc.x.toFixed(4),e=wc.y.toFixed(4),i=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function lA(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function cA(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(e,h),locationSize:d}}return i}function Io(s){return s!==""}function y_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function M_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(s){return s.replace(uA,hA)}const fA=new Map;function hA(s,e){let i=Qe[e];if(i===void 0){const r=fA.get(e);if(r!==void 0)i=Qe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Td(i)}const dA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E_(s){return s.replace(dA,pA)}function pA(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function T_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mA(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===U_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===da&&(e="SHADOWMAP_TYPE_VSM"),e}function gA(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Nr:case Or:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vA(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function _A(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case L_:e="ENVMAP_BLENDING_MULTIPLY";break;case Jx:e="ENVMAP_BLENDING_MIX";break;case $x:e="ENVMAP_BLENDING_ADD";break}return e}function SA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function xA(s,e,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=mA(i),m=gA(i),g=vA(i),v=_A(i),x=SA(i),y=oA(i),E=lA(c),C=l.createProgram();let M,S,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Io).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Io).join(`
`),S.length>0&&(S+=`
`)):(M=[T_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),S=[T_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?Qe.tonemapping_pars_fragment:"",i.toneMapping!==Ka?sA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,aA("linearToOutputTexel",i.outputColorSpace),rA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),h=Td(h),h=y_(h,i),h=M_(h,i),d=Td(d),d=y_(d,i),d=M_(d,i),h=E_(h),d=E_(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===zv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===zv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=F+M+h,U=F+S+d,J=__(l,l.VERTEX_SHADER,N),k=__(l,l.FRAGMENT_SHADER,U);l.attachShader(C,J),l.attachShader(C,k),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(X){if(s.debug.checkShaderErrors){const he=l.getProgramInfoLog(C).trim(),ce=l.getShaderInfoLog(J).trim(),ye=l.getShaderInfoLog(k).trim();let _e=!0,P=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(_e=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,J,k);else{const I=x_(l,J,"vertex"),D=x_(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+he+`
`+I+`
`+D)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(ce===""||ye==="")&&(P=!1);P&&(X.diagnostics={runnable:_e,programLog:he,vertexShader:{log:ce,prefix:M},fragmentShader:{log:ye,prefix:S}})}l.deleteShader(J),l.deleteShader(k),K=new Pc(l,C),L=cA(l,C)}let K;this.getUniforms=function(){return K===void 0&&z(this),K};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,eA)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=J,this.fragmentShader=k,this}let yA=0;class MA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new EA(e),i.set(e,r)),r}}class EA{constructor(e){this.id=yA++,this.code=e,this.usedTimes=0}}function TA(s,e,i,r,l,c,h){const d=new j_,p=new MA,m=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(L){return m.add(L),L===0?"uv":`uv${L}`}function M(L,w,X,he,ce){const ye=he.fog,_e=ce.geometry,P=L.isMeshStandardMaterial?he.environment:null,I=(L.isMeshStandardMaterial?i:e).get(L.envMap||P),D=I&&I.mapping===Hc?I.image.height:null,$=E[L.type];L.precision!==null&&(y=l.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const ee=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,R=ee!==void 0?ee.length:0;let Z=0;_e.morphAttributes.position!==void 0&&(Z=1),_e.morphAttributes.normal!==void 0&&(Z=2),_e.morphAttributes.color!==void 0&&(Z=3);let ue,V,oe,pe;if($){const Rt=Fi[$];ue=Rt.vertexShader,V=Rt.fragmentShader}else ue=L.vertexShader,V=L.fragmentShader,p.update(L),oe=p.getVertexShaderID(L),pe=p.getFragmentShaderID(L);const ve=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),Re=ce.isInstancedMesh===!0,$e=ce.isBatchedMesh===!0,At=!!L.map,st=!!L.matcap,Wt=!!I,H=!!L.aoMap,fn=!!L.lightMap,ft=!!L.bumpMap,ht=!!L.normalMap,ke=!!L.displacementMap,vt=!!L.emissiveMap,qe=!!L.metalnessMap,O=!!L.roughnessMap,b=L.anisotropy>0,ae=L.clearcoat>0,me=L.dispersion>0,Te=L.iridescence>0,Se=L.sheen>0,Xe=L.transmission>0,De=b&&!!L.anisotropyMap,Ie=ae&&!!L.clearcoatMap,_t=ae&&!!L.clearcoatNormalMap,Ae=ae&&!!L.clearcoatRoughnessMap,He=Te&&!!L.iridescenceMap,Ye=Te&&!!L.iridescenceThicknessMap,We=Se&&!!L.sheenColorMap,ze=Se&&!!L.sheenRoughnessMap,et=!!L.specularMap,ot=!!L.specularColorMap,Bt=!!L.specularIntensityMap,Y=Xe&&!!L.transmissionMap,Ce=Xe&&!!L.thicknessMap,fe=!!L.gradientMap,Me=!!L.alphaMap,we=L.alphaTest>0,Ue=!!L.alphaHash,tt=!!L.extensions;let Kt=Ka;L.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Kt=s.toneMapping);const hn={shaderID:$,shaderType:L.type,shaderName:L.name,vertexShader:ue,fragmentShader:V,defines:L.defines,customVertexShaderID:oe,customFragmentShaderID:pe,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:$e,batchingColor:$e&&ce._colorsTexture!==null,instancing:Re,instancingColor:Re&&ce.instanceColor!==null,instancingMorph:Re&&ce.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Qa,alphaToCoverage:!!L.alphaToCoverage,map:At,matcap:st,envMap:Wt,envMapMode:Wt&&I.mapping,envMapCubeUVHeight:D,aoMap:H,lightMap:fn,bumpMap:ft,normalMap:ht,displacementMap:x&&ke,emissiveMap:vt,normalMapObjectSpace:ht&&L.normalMapType===uy,normalMapTangentSpace:ht&&L.normalMapType===cy,metalnessMap:qe,roughnessMap:O,anisotropy:b,anisotropyMap:De,clearcoat:ae,clearcoatMap:Ie,clearcoatNormalMap:_t,clearcoatRoughnessMap:Ae,dispersion:me,iridescence:Te,iridescenceMap:He,iridescenceThicknessMap:Ye,sheen:Se,sheenColorMap:We,sheenRoughnessMap:ze,specularMap:et,specularColorMap:ot,specularIntensityMap:Bt,transmission:Xe,transmissionMap:Y,thicknessMap:Ce,gradientMap:fe,opaque:L.transparent===!1&&L.blending===wr&&L.alphaToCoverage===!1,alphaMap:Me,alphaTest:we,alphaHash:Ue,combine:L.combine,mapUv:At&&C(L.map.channel),aoMapUv:H&&C(L.aoMap.channel),lightMapUv:fn&&C(L.lightMap.channel),bumpMapUv:ft&&C(L.bumpMap.channel),normalMapUv:ht&&C(L.normalMap.channel),displacementMapUv:ke&&C(L.displacementMap.channel),emissiveMapUv:vt&&C(L.emissiveMap.channel),metalnessMapUv:qe&&C(L.metalnessMap.channel),roughnessMapUv:O&&C(L.roughnessMap.channel),anisotropyMapUv:De&&C(L.anisotropyMap.channel),clearcoatMapUv:Ie&&C(L.clearcoatMap.channel),clearcoatNormalMapUv:_t&&C(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&C(L.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&C(L.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&C(L.iridescenceThicknessMap.channel),sheenColorMapUv:We&&C(L.sheenColorMap.channel),sheenRoughnessMapUv:ze&&C(L.sheenRoughnessMap.channel),specularMapUv:et&&C(L.specularMap.channel),specularColorMapUv:ot&&C(L.specularColorMap.channel),specularIntensityMapUv:Bt&&C(L.specularIntensityMap.channel),transmissionMapUv:Y&&C(L.transmissionMap.channel),thicknessMapUv:Ce&&C(L.thicknessMap.channel),alphaMapUv:Me&&C(L.alphaMap.channel),vertexTangents:!!_e.attributes.tangent&&(ht||b),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!_e.attributes.uv&&(At||Me),fog:!!ye,useFog:L.fog===!0,fogExp2:!!ye&&ye.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Pe,skinning:ce.isSkinnedMesh===!0,morphTargets:_e.morphAttributes.position!==void 0,morphNormals:_e.morphAttributes.normal!==void 0,morphColors:_e.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,decodeVideoTexture:At&&L.map.isVideoTexture===!0&&Ut.getTransfer(L.map.colorSpace)===Vt,decodeVideoTextureEmissive:vt&&L.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(L.emissiveMap.colorSpace)===Vt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Hn,flipSided:L.side===xn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:tt&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&L.extensions.multiDraw===!0||$e)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return hn.vertexUv1s=m.has(1),hn.vertexUv2s=m.has(2),hn.vertexUv3s=m.has(3),m.clear(),hn}function S(L){const w=[];if(L.shaderID?w.push(L.shaderID):(w.push(L.customVertexShaderID),w.push(L.customFragmentShaderID)),L.defines!==void 0)for(const X in L.defines)w.push(X),w.push(L.defines[X]);return L.isRawShaderMaterial===!1&&(F(w,L),N(w,L),w.push(s.outputColorSpace)),w.push(L.customProgramCacheKey),w.join()}function F(L,w){L.push(w.precision),L.push(w.outputColorSpace),L.push(w.envMapMode),L.push(w.envMapCubeUVHeight),L.push(w.mapUv),L.push(w.alphaMapUv),L.push(w.lightMapUv),L.push(w.aoMapUv),L.push(w.bumpMapUv),L.push(w.normalMapUv),L.push(w.displacementMapUv),L.push(w.emissiveMapUv),L.push(w.metalnessMapUv),L.push(w.roughnessMapUv),L.push(w.anisotropyMapUv),L.push(w.clearcoatMapUv),L.push(w.clearcoatNormalMapUv),L.push(w.clearcoatRoughnessMapUv),L.push(w.iridescenceMapUv),L.push(w.iridescenceThicknessMapUv),L.push(w.sheenColorMapUv),L.push(w.sheenRoughnessMapUv),L.push(w.specularMapUv),L.push(w.specularColorMapUv),L.push(w.specularIntensityMapUv),L.push(w.transmissionMapUv),L.push(w.thicknessMapUv),L.push(w.combine),L.push(w.fogExp2),L.push(w.sizeAttenuation),L.push(w.morphTargetsCount),L.push(w.morphAttributeCount),L.push(w.numDirLights),L.push(w.numPointLights),L.push(w.numSpotLights),L.push(w.numSpotLightMaps),L.push(w.numHemiLights),L.push(w.numRectAreaLights),L.push(w.numDirLightShadows),L.push(w.numPointLightShadows),L.push(w.numSpotLightShadows),L.push(w.numSpotLightShadowsWithMaps),L.push(w.numLightProbes),L.push(w.shadowMapType),L.push(w.toneMapping),L.push(w.numClippingPlanes),L.push(w.numClipIntersection),L.push(w.depthPacking)}function N(L,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),L.push(d.mask)}function U(L){const w=E[L.type];let X;if(w){const he=Fi[w];X=Gy.clone(he.uniforms)}else X=L.uniforms;return X}function J(L,w){let X;for(let he=0,ce=g.length;he<ce;he++){const ye=g[he];if(ye.cacheKey===w){X=ye,++X.usedTimes;break}}return X===void 0&&(X=new xA(s,w,L,c),g.push(X)),X}function k(L){if(--L.usedTimes===0){const w=g.indexOf(L);g[w]=g[g.length-1],g.pop(),L.destroy()}}function z(L){p.remove(L)}function K(){p.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:U,acquireProgram:J,releaseProgram:k,releaseShaderCache:z,programs:g,dispose:K}}function bA(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,p){s.get(h)[d]=p}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function AA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function b_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function A_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,E,C,M){let S=s[e];return S===void 0?(S={id:v.id,object:v,geometry:x,material:y,groupOrder:E,renderOrder:v.renderOrder,z:C,group:M},s[e]=S):(S.id=v.id,S.object=v,S.geometry=x,S.material=y,S.groupOrder=E,S.renderOrder=v.renderOrder,S.z=C,S.group=M),e++,S}function d(v,x,y,E,C,M){const S=h(v,x,y,E,C,M);y.transmission>0?r.push(S):y.transparent===!0?l.push(S):i.push(S)}function p(v,x,y,E,C,M){const S=h(v,x,y,E,C,M);y.transmission>0?r.unshift(S):y.transparent===!0?l.unshift(S):i.unshift(S)}function m(v,x){i.length>1&&i.sort(v||AA),r.length>1&&r.sort(x||b_),l.length>1&&l.sort(x||b_)}function g(){for(let v=e,x=s.length;v<x;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function RA(){let s=new WeakMap;function e(r,l){const c=s.get(r);let h;return c===void 0?(h=new A_,s.set(r,[h])):l>=c.length?(h=new A_,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function CA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new q,color:new gt};break;case"SpotLight":i={position:new q,direction:new q,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new gt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":i={color:new gt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=i,i}}}function wA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let DA=0;function UA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function LA(s){const e=new CA,i=wA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new q);const l=new q,c=new sn,h=new sn;function d(m){let g=0,v=0,x=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,E=0,C=0,M=0,S=0,F=0,N=0,U=0,J=0,k=0,z=0;m.sort(UA);for(let L=0,w=m.length;L<w;L++){const X=m[L],he=X.color,ce=X.intensity,ye=X.distance,_e=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)g+=he.r*ce,v+=he.g*ce,x+=he.b*ce;else if(X.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(X.sh.coefficients[P],ce);z++}else if(X.isDirectionalLight){const P=e.get(X);if(P.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const I=X.shadow,D=i.get(X);D.shadowIntensity=I.intensity,D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,r.directionalShadow[y]=D,r.directionalShadowMap[y]=_e,r.directionalShadowMatrix[y]=X.shadow.matrix,F++}r.directional[y]=P,y++}else if(X.isSpotLight){const P=e.get(X);P.position.setFromMatrixPosition(X.matrixWorld),P.color.copy(he).multiplyScalar(ce),P.distance=ye,P.coneCos=Math.cos(X.angle),P.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),P.decay=X.decay,r.spot[C]=P;const I=X.shadow;if(X.map&&(r.spotLightMap[J]=X.map,J++,I.updateMatrices(X),X.castShadow&&k++),r.spotLightMatrix[C]=I.matrix,X.castShadow){const D=i.get(X);D.shadowIntensity=I.intensity,D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,r.spotShadow[C]=D,r.spotShadowMap[C]=_e,U++}C++}else if(X.isRectAreaLight){const P=e.get(X);P.color.copy(he).multiplyScalar(ce),P.halfWidth.set(X.width*.5,0,0),P.halfHeight.set(0,X.height*.5,0),r.rectArea[M]=P,M++}else if(X.isPointLight){const P=e.get(X);if(P.color.copy(X.color).multiplyScalar(X.intensity),P.distance=X.distance,P.decay=X.decay,X.castShadow){const I=X.shadow,D=i.get(X);D.shadowIntensity=I.intensity,D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,D.shadowCameraNear=I.camera.near,D.shadowCameraFar=I.camera.far,r.pointShadow[E]=D,r.pointShadowMap[E]=_e,r.pointShadowMatrix[E]=X.shadow.matrix,N++}r.point[E]=P,E++}else if(X.isHemisphereLight){const P=e.get(X);P.skyColor.copy(X.color).multiplyScalar(ce),P.groundColor.copy(X.groundColor).multiplyScalar(ce),r.hemi[S]=P,S++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==y||K.pointLength!==E||K.spotLength!==C||K.rectAreaLength!==M||K.hemiLength!==S||K.numDirectionalShadows!==F||K.numPointShadows!==N||K.numSpotShadows!==U||K.numSpotMaps!==J||K.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+J-k,r.spotLightMap.length=J,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=z,K.directionalLength=y,K.pointLength=E,K.spotLength=C,K.rectAreaLength=M,K.hemiLength=S,K.numDirectionalShadows=F,K.numPointShadows=N,K.numSpotShadows=U,K.numSpotMaps=J,K.numLightProbes=z,r.version=DA++)}function p(m,g){let v=0,x=0,y=0,E=0,C=0;const M=g.matrixWorldInverse;for(let S=0,F=m.length;S<F;S++){const N=m[S];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(N.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:p,state:r}}function R_(s){const e=new LA(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function NA(s){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new R_(s),e.set(l,[d])):c>=h.length?(d=new R_(s),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const OA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zA(s,e,i){let r=new n0;const l=new Fe,c=new Fe,h=new Zt,d=new cM({depthPacking:ly}),p=new uM,m={},g=i.maxTextureSize,v={[ga]:xn,[xn]:ga,[Hn]:Hn},x=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:OA,fragmentShader:PA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new ki;E.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new li(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U_;let S=this.type;this.render=function(k,z,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||k.length===0)return;const L=s.getRenderTarget(),w=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),he=s.state;he.setBlending(Qn),he.buffers.color.setClear(1,1,1,1),he.buffers.depth.setTest(!0),he.setScissorTest(!1);const ce=S!==da&&this.type===da,ye=S===da&&this.type!==da;for(let _e=0,P=k.length;_e<P;_e++){const I=k[_e],D=I.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;l.copy(D.mapSize);const $=D.getFrameExtents();if(l.multiply($),c.copy(D.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/$.x),l.x=c.x*$.x,D.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/$.y),l.y=c.y*$.y,D.mapSize.y=c.y)),D.map===null||ce===!0||ye===!0){const R=this.type!==da?{minFilter:Ui,magFilter:Ui}:{};D.map!==null&&D.map.dispose(),D.map=new Pn(l.x,l.y,R),D.map.texture.name=I.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const ee=D.getViewportCount();for(let R=0;R<ee;R++){const Z=D.getViewport(R);h.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),he.viewport(h),D.updateMatrices(I,R),r=D.getFrustum(),U(z,K,D.camera,I,this.type)}D.isPointLightShadow!==!0&&this.type===da&&F(D,K),D.needsUpdate=!1}S=this.type,M.needsUpdate=!1,s.setRenderTarget(L,w,X)};function F(k,z){const K=e.update(C);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,y.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Pn(l.x,l.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(z,null,K,x,C,null),y.uniforms.shadow_pass.value=k.mapPass.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(z,null,K,y,C,null)}function N(k,z,K,L){let w=null;const X=K.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(X!==void 0)w=X;else if(w=K.isPointLight===!0?p:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const he=w.uuid,ce=z.uuid;let ye=m[he];ye===void 0&&(ye={},m[he]=ye);let _e=ye[ce];_e===void 0&&(_e=w.clone(),ye[ce]=_e,z.addEventListener("dispose",J)),w=_e}if(w.visible=z.visible,w.wireframe=z.wireframe,L===da?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:v[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,K.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const he=s.properties.get(w);he.light=K}return w}function U(k,z,K,L,w){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&w===da)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,k.matrixWorld);const ce=e.update(k),ye=k.material;if(Array.isArray(ye)){const _e=ce.groups;for(let P=0,I=_e.length;P<I;P++){const D=_e[P],$=ye[D.materialIndex];if($&&$.visible){const ee=N(k,$,L,w);k.onBeforeShadow(s,k,z,K,ce,ee,D),s.renderBufferDirect(K,null,ce,ee,k,D),k.onAfterShadow(s,k,z,K,ce,ee,D)}}}else if(ye.visible){const _e=N(k,ye,L,w);k.onBeforeShadow(s,k,z,K,ce,_e,null),s.renderBufferDirect(K,null,ce,_e,k,null),k.onAfterShadow(s,k,z,K,ce,_e,null)}}const he=k.children;for(let ce=0,ye=he.length;ce<ye;ce++)U(he[ce],z,K,L,w)}function J(k){k.target.removeEventListener("dispose",J);for(const K in m){const L=m[K],w=k.target.uuid;w in L&&(L[w].dispose(),delete L[w])}}}const BA={[Hh]:zc,[Gh]:Xh,[Vh]:Wh,[Lr]:kh,[zc]:Hh,[Xh]:Gh,[Wh]:Vh,[kh]:Lr};function FA(s,e){function i(){let Y=!1;const Ce=new Zt;let fe=null;const Me=new Zt(0,0,0,0);return{setMask:function(we){fe!==we&&!Y&&(s.colorMask(we,we,we,we),fe=we)},setLocked:function(we){Y=we},setClear:function(we,Ue,tt,Kt,hn){hn===!0&&(we*=Kt,Ue*=Kt,tt*=Kt),Ce.set(we,Ue,tt,Kt),Me.equals(Ce)===!1&&(s.clearColor(we,Ue,tt,Kt),Me.copy(Ce))},reset:function(){Y=!1,fe=null,Me.set(-1,0,0,0)}}}function r(){let Y=!1,Ce=!1,fe=null,Me=null,we=null;return{setReversed:function(Ue){if(Ce!==Ue){const tt=e.get("EXT_clip_control");Ce?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT);const Kt=we;we=null,this.setClear(Kt)}Ce=Ue},getReversed:function(){return Ce},setTest:function(Ue){Ue?ve(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(Ue){fe!==Ue&&!Y&&(s.depthMask(Ue),fe=Ue)},setFunc:function(Ue){if(Ce&&(Ue=BA[Ue]),Me!==Ue){switch(Ue){case Hh:s.depthFunc(s.NEVER);break;case zc:s.depthFunc(s.ALWAYS);break;case Gh:s.depthFunc(s.LESS);break;case Lr:s.depthFunc(s.LEQUAL);break;case Vh:s.depthFunc(s.EQUAL);break;case kh:s.depthFunc(s.GEQUAL);break;case Xh:s.depthFunc(s.GREATER);break;case Wh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Me=Ue}},setLocked:function(Ue){Y=Ue},setClear:function(Ue){we!==Ue&&(Ce&&(Ue=1-Ue),s.clearDepth(Ue),we=Ue)},reset:function(){Y=!1,fe=null,Me=null,we=null,Ce=!1}}}function l(){let Y=!1,Ce=null,fe=null,Me=null,we=null,Ue=null,tt=null,Kt=null,hn=null;return{setTest:function(Rt){Y||(Rt?ve(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(Rt){Ce!==Rt&&!Y&&(s.stencilMask(Rt),Ce=Rt)},setFunc:function(Rt,Mn,xi){(fe!==Rt||Me!==Mn||we!==xi)&&(s.stencilFunc(Rt,Mn,xi),fe=Rt,Me=Mn,we=xi)},setOp:function(Rt,Mn,xi){(Ue!==Rt||tt!==Mn||Kt!==xi)&&(s.stencilOp(Rt,Mn,xi),Ue=Rt,tt=Mn,Kt=xi)},setLocked:function(Rt){Y=Rt},setClear:function(Rt){hn!==Rt&&(s.clearStencil(Rt),hn=Rt)},reset:function(){Y=!1,Ce=null,fe=null,Me=null,we=null,Ue=null,tt=null,Kt=null,hn=null}}}const c=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,y=[],E=null,C=!1,M=null,S=null,F=null,N=null,U=null,J=null,k=null,z=new gt(0,0,0),K=0,L=!1,w=null,X=null,he=null,ce=null,ye=null;const _e=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,I=0;const D=s.getParameter(s.VERSION);D.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(D)[1]),P=I>=1):D.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),P=I>=2);let $=null,ee={};const R=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),ue=new Zt().fromArray(R),V=new Zt().fromArray(Z);function oe(Y,Ce,fe,Me){const we=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(Y,Ue),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<fe;tt++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(Ce+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return Ue}const pe={};pe[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),h.setFunc(Lr),ft(!1),ht(Dv),ve(s.CULL_FACE),H(Qn);function ve(Y){g[Y]!==!0&&(s.enable(Y),g[Y]=!0)}function Pe(Y){g[Y]!==!1&&(s.disable(Y),g[Y]=!1)}function Re(Y,Ce){return v[Y]!==Ce?(s.bindFramebuffer(Y,Ce),v[Y]=Ce,Y===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ce),Y===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function $e(Y,Ce){let fe=y,Me=!1;if(Y){fe=x.get(Ce),fe===void 0&&(fe=[],x.set(Ce,fe));const we=Y.textures;if(fe.length!==we.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,tt=we.length;Ue<tt;Ue++)fe[Ue]=s.COLOR_ATTACHMENT0+Ue;fe.length=we.length,Me=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,Me=!0);Me&&s.drawBuffers(fe)}function At(Y){return E!==Y?(s.useProgram(Y),E=Y,!0):!1}const st={[bs]:s.FUNC_ADD,[Px]:s.FUNC_SUBTRACT,[zx]:s.FUNC_REVERSE_SUBTRACT};st[Bx]=s.MIN,st[Fx]=s.MAX;const Wt={[Ix]:s.ZERO,[Hx]:s.ONE,[Gx]:s.SRC_COLOR,[Fh]:s.SRC_ALPHA,[Yx]:s.SRC_ALPHA_SATURATE,[Wx]:s.DST_COLOR,[kx]:s.DST_ALPHA,[Vx]:s.ONE_MINUS_SRC_COLOR,[Ih]:s.ONE_MINUS_SRC_ALPHA,[qx]:s.ONE_MINUS_DST_COLOR,[Xx]:s.ONE_MINUS_DST_ALPHA,[jx]:s.CONSTANT_COLOR,[Zx]:s.ONE_MINUS_CONSTANT_COLOR,[Kx]:s.CONSTANT_ALPHA,[Qx]:s.ONE_MINUS_CONSTANT_ALPHA};function H(Y,Ce,fe,Me,we,Ue,tt,Kt,hn,Rt){if(Y===Qn){C===!0&&(Pe(s.BLEND),C=!1);return}if(C===!1&&(ve(s.BLEND),C=!0),Y!==Ox){if(Y!==M||Rt!==L){if((S!==bs||U!==bs)&&(s.blendEquation(s.FUNC_ADD),S=bs,U=bs),Rt)switch(Y){case wr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uv:s.blendFunc(s.ONE,s.ONE);break;case Lv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nv:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case wr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uv:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Lv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nv:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}F=null,N=null,J=null,k=null,z.set(0,0,0),K=0,M=Y,L=Rt}return}we=we||Ce,Ue=Ue||fe,tt=tt||Me,(Ce!==S||we!==U)&&(s.blendEquationSeparate(st[Ce],st[we]),S=Ce,U=we),(fe!==F||Me!==N||Ue!==J||tt!==k)&&(s.blendFuncSeparate(Wt[fe],Wt[Me],Wt[Ue],Wt[tt]),F=fe,N=Me,J=Ue,k=tt),(Kt.equals(z)===!1||hn!==K)&&(s.blendColor(Kt.r,Kt.g,Kt.b,hn),z.copy(Kt),K=hn),M=Y,L=!1}function fn(Y,Ce){Y.side===Hn?Pe(s.CULL_FACE):ve(s.CULL_FACE);let fe=Y.side===xn;Ce&&(fe=!fe),ft(fe),Y.blending===wr&&Y.transparent===!1?H(Qn):H(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Me=Y.stencilWrite;d.setTest(Me),Me&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),vt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(Y){w!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),w=Y)}function ht(Y){Y!==Ux?(ve(s.CULL_FACE),Y!==X&&(Y===Dv?s.cullFace(s.BACK):Y===Lx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),X=Y}function ke(Y){Y!==he&&(P&&s.lineWidth(Y),he=Y)}function vt(Y,Ce,fe){Y?(ve(s.POLYGON_OFFSET_FILL),(ce!==Ce||ye!==fe)&&(s.polygonOffset(Ce,fe),ce=Ce,ye=fe)):Pe(s.POLYGON_OFFSET_FILL)}function qe(Y){Y?ve(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function O(Y){Y===void 0&&(Y=s.TEXTURE0+_e-1),$!==Y&&(s.activeTexture(Y),$=Y)}function b(Y,Ce,fe){fe===void 0&&($===null?fe=s.TEXTURE0+_e-1:fe=$);let Me=ee[fe];Me===void 0&&(Me={type:void 0,texture:void 0},ee[fe]=Me),(Me.type!==Y||Me.texture!==Ce)&&($!==fe&&(s.activeTexture(fe),$=fe),s.bindTexture(Y,Ce||pe[Y]),Me.type=Y,Me.texture=Ce)}function ae(){const Y=ee[$];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(){try{s.texSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function De(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ie(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{s.texStorage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function He(){try{s.texImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ye(){try{s.texImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function We(Y){ue.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),ue.copy(Y))}function ze(Y){V.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),V.copy(Y))}function et(Y,Ce){let fe=m.get(Ce);fe===void 0&&(fe=new WeakMap,m.set(Ce,fe));let Me=fe.get(Y);Me===void 0&&(Me=s.getUniformBlockIndex(Ce,Y.name),fe.set(Y,Me))}function ot(Y,Ce){const Me=m.get(Ce).get(Y);p.get(Ce)!==Me&&(s.uniformBlockBinding(Ce,Me,Y.__bindingPointIndex),p.set(Ce,Me))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},$=null,ee={},v={},x=new WeakMap,y=[],E=null,C=!1,M=null,S=null,F=null,N=null,U=null,J=null,k=null,z=new gt(0,0,0),K=0,L=!1,w=null,X=null,he=null,ce=null,ye=null,ue.set(0,0,s.canvas.width,s.canvas.height),V.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ve,disable:Pe,bindFramebuffer:Re,drawBuffers:$e,useProgram:At,setBlending:H,setMaterial:fn,setFlipSided:ft,setCullFace:ht,setLineWidth:ke,setPolygonOffset:vt,setScissorTest:qe,activeTexture:O,bindTexture:b,unbindTexture:ae,compressedTexImage2D:me,compressedTexImage3D:Te,texImage2D:He,texImage3D:Ye,updateUBOMapping:et,uniformBlockBinding:ot,texStorage2D:_t,texStorage3D:Ae,texSubImage2D:Se,texSubImage3D:Xe,compressedTexSubImage2D:De,compressedTexSubImage3D:Ie,scissor:We,viewport:ze,reset:Bt}}function IA(s,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Fe,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return y?new OffscreenCanvas(O,b):Ic("canvas")}function C(O,b,ae){let me=1;const Te=qe(O);if((Te.width>ae||Te.height>ae)&&(me=ae/Math.max(Te.width,Te.height)),me<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Se=Math.floor(me*Te.width),Xe=Math.floor(me*Te.height);v===void 0&&(v=E(Se,Xe));const De=b?E(Se,Xe):v;return De.width=Se,De.height=Xe,De.getContext("2d").drawImage(O,0,0,Se,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Se+"x"+Xe+")."),De}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),O;return O}function M(O){return O.generateMipmaps}function S(O){s.generateMipmap(O)}function F(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(O,b,ae,me,Te=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Se=b;if(b===s.RED&&(ae===s.FLOAT&&(Se=s.R32F),ae===s.HALF_FLOAT&&(Se=s.R16F),ae===s.UNSIGNED_BYTE&&(Se=s.R8)),b===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(Se=s.R8UI),ae===s.UNSIGNED_SHORT&&(Se=s.R16UI),ae===s.UNSIGNED_INT&&(Se=s.R32UI),ae===s.BYTE&&(Se=s.R8I),ae===s.SHORT&&(Se=s.R16I),ae===s.INT&&(Se=s.R32I)),b===s.RG&&(ae===s.FLOAT&&(Se=s.RG32F),ae===s.HALF_FLOAT&&(Se=s.RG16F),ae===s.UNSIGNED_BYTE&&(Se=s.RG8)),b===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(Se=s.RG8UI),ae===s.UNSIGNED_SHORT&&(Se=s.RG16UI),ae===s.UNSIGNED_INT&&(Se=s.RG32UI),ae===s.BYTE&&(Se=s.RG8I),ae===s.SHORT&&(Se=s.RG16I),ae===s.INT&&(Se=s.RG32I)),b===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(Se=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(Se=s.RGB16UI),ae===s.UNSIGNED_INT&&(Se=s.RGB32UI),ae===s.BYTE&&(Se=s.RGB8I),ae===s.SHORT&&(Se=s.RGB16I),ae===s.INT&&(Se=s.RGB32I)),b===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(Se=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(Se=s.RGBA16UI),ae===s.UNSIGNED_INT&&(Se=s.RGBA32UI),ae===s.BYTE&&(Se=s.RGBA8I),ae===s.SHORT&&(Se=s.RGBA16I),ae===s.INT&&(Se=s.RGBA32I)),b===s.RGB&&ae===s.UNSIGNED_INT_5_9_9_9_REV&&(Se=s.RGB9_E5),b===s.RGBA){const Xe=Te?Bc:Ut.getTransfer(me);ae===s.FLOAT&&(Se=s.RGBA32F),ae===s.HALF_FLOAT&&(Se=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(Se=Xe===Vt?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT_4_4_4_4&&(Se=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(Se=s.RGB5_A1)}return(Se===s.R16F||Se===s.R32F||Se===s.RG16F||Se===s.RG32F||Se===s.RGBA16F||Se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function U(O,b){let ae;return O?b===null||b===Ds||b===Us?ae=s.DEPTH24_STENCIL8:b===Hi?ae=s.DEPTH32F_STENCIL8:b===ko&&(ae=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ds||b===Us?ae=s.DEPTH_COMPONENT24:b===Hi?ae=s.DEPTH_COMPONENT32F:b===ko&&(ae=s.DEPTH_COMPONENT16),ae}function J(O,b){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ui&&O.minFilter!==Kn?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function k(O){const b=O.target;b.removeEventListener("dispose",k),K(b),b.isVideoTexture&&g.delete(b)}function z(O){const b=O.target;b.removeEventListener("dispose",z),w(b)}function K(O){const b=r.get(O);if(b.__webglInit===void 0)return;const ae=O.source,me=x.get(ae);if(me){const Te=me[b.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&L(O),Object.keys(me).length===0&&x.delete(ae)}r.remove(O)}function L(O){const b=r.get(O);s.deleteTexture(b.__webglTexture);const ae=O.source,me=x.get(ae);delete me[b.__cacheKey],h.memory.textures--}function w(O){const b=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(b.__webglFramebuffer[me]))for(let Te=0;Te<b.__webglFramebuffer[me].length;Te++)s.deleteFramebuffer(b.__webglFramebuffer[me][Te]);else s.deleteFramebuffer(b.__webglFramebuffer[me]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[me])}else{if(Array.isArray(b.__webglFramebuffer))for(let me=0;me<b.__webglFramebuffer.length;me++)s.deleteFramebuffer(b.__webglFramebuffer[me]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let me=0;me<b.__webglColorRenderbuffer.length;me++)b.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[me]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ae=O.textures;for(let me=0,Te=ae.length;me<Te;me++){const Se=r.get(ae[me]);Se.__webglTexture&&(s.deleteTexture(Se.__webglTexture),h.memory.textures--),r.remove(ae[me])}r.remove(O)}let X=0;function he(){X=0}function ce(){const O=X;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),X+=1,O}function ye(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function _e(O,b){const ae=r.get(O);if(O.isVideoTexture&&ke(O),O.isRenderTargetTexture===!1&&O.version>0&&ae.__version!==O.version){const me=O.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(ae,O,b);return}}i.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+b)}function P(O,b){const ae=r.get(O);if(O.version>0&&ae.__version!==O.version){V(ae,O,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+b)}function I(O,b){const ae=r.get(O);if(O.version>0&&ae.__version!==O.version){V(ae,O,b);return}i.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+b)}function D(O,b){const ae=r.get(O);if(O.version>0&&ae.__version!==O.version){oe(ae,O,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+b)}const $={[jh]:s.REPEAT,[Rs]:s.CLAMP_TO_EDGE,[Zh]:s.MIRRORED_REPEAT},ee={[Ui]:s.NEAREST,[oy]:s.NEAREST_MIPMAP_NEAREST,[oc]:s.NEAREST_MIPMAP_LINEAR,[Kn]:s.LINEAR,[th]:s.LINEAR_MIPMAP_NEAREST,[Cs]:s.LINEAR_MIPMAP_LINEAR},R={[fy]:s.NEVER,[vy]:s.ALWAYS,[hy]:s.LESS,[X_]:s.LEQUAL,[dy]:s.EQUAL,[gy]:s.GEQUAL,[py]:s.GREATER,[my]:s.NOTEQUAL};function Z(O,b){if(b.type===Hi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Kn||b.magFilter===th||b.magFilter===oc||b.magFilter===Cs||b.minFilter===Kn||b.minFilter===th||b.minFilter===oc||b.minFilter===Cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,$[b.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,$[b.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,$[b.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,ee[b.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,ee[b.minFilter]),b.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,R[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ui||b.minFilter!==oc&&b.minFilter!==Cs||b.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ue(O,b){let ae=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",k));const me=b.source;let Te=x.get(me);Te===void 0&&(Te={},x.set(me,Te));const Se=ye(b);if(Se!==O.__cacheKey){Te[Se]===void 0&&(Te[Se]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,ae=!0),Te[Se].usedTimes++;const Xe=Te[O.__cacheKey];Xe!==void 0&&(Te[O.__cacheKey].usedTimes--,Xe.usedTimes===0&&L(b)),O.__cacheKey=Se,O.__webglTexture=Te[Se].texture}return ae}function V(O,b,ae){let me=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(me=s.TEXTURE_3D);const Te=ue(O,b),Se=b.source;i.bindTexture(me,O.__webglTexture,s.TEXTURE0+ae);const Xe=r.get(Se);if(Se.version!==Xe.__version||Te===!0){i.activeTexture(s.TEXTURE0+ae);const De=Ut.getPrimaries(Ut.workingColorSpace),Ie=b.colorSpace===Ii?null:Ut.getPrimaries(b.colorSpace),_t=b.colorSpace===Ii||De===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Ae=C(b.image,!1,l.maxTextureSize);Ae=vt(b,Ae);const He=c.convert(b.format,b.colorSpace),Ye=c.convert(b.type);let We=N(b.internalFormat,He,Ye,b.colorSpace,b.isVideoTexture);Z(me,b);let ze;const et=b.mipmaps,ot=b.isVideoTexture!==!0,Bt=Xe.__version===void 0||Te===!0,Y=Se.dataReady,Ce=J(b,Ae);if(b.isDepthTexture)We=U(b.format===Ls,b.type),Bt&&(ot?i.texStorage2D(s.TEXTURE_2D,1,We,Ae.width,Ae.height):i.texImage2D(s.TEXTURE_2D,0,We,Ae.width,Ae.height,0,He,Ye,null));else if(b.isDataTexture)if(et.length>0){ot&&Bt&&i.texStorage2D(s.TEXTURE_2D,Ce,We,et[0].width,et[0].height);for(let fe=0,Me=et.length;fe<Me;fe++)ze=et[fe],ot?Y&&i.texSubImage2D(s.TEXTURE_2D,fe,0,0,ze.width,ze.height,He,Ye,ze.data):i.texImage2D(s.TEXTURE_2D,fe,We,ze.width,ze.height,0,He,Ye,ze.data);b.generateMipmaps=!1}else ot?(Bt&&i.texStorage2D(s.TEXTURE_2D,Ce,We,Ae.width,Ae.height),Y&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,He,Ye,Ae.data)):i.texImage2D(s.TEXTURE_2D,0,We,Ae.width,Ae.height,0,He,Ye,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ot&&Bt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,We,et[0].width,et[0].height,Ae.depth);for(let fe=0,Me=et.length;fe<Me;fe++)if(ze=et[fe],b.format!==Di)if(He!==null)if(ot){if(Y)if(b.layerUpdates.size>0){const we=i_(ze.width,ze.height,b.format,b.type);for(const Ue of b.layerUpdates){const tt=ze.data.subarray(Ue*we/ze.data.BYTES_PER_ELEMENT,(Ue+1)*we/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,Ue,ze.width,ze.height,1,He,tt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,ze.width,ze.height,Ae.depth,He,ze.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,We,ze.width,ze.height,Ae.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Y&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,ze.width,ze.height,Ae.depth,He,Ye,ze.data):i.texImage3D(s.TEXTURE_2D_ARRAY,fe,We,ze.width,ze.height,Ae.depth,0,He,Ye,ze.data)}else{ot&&Bt&&i.texStorage2D(s.TEXTURE_2D,Ce,We,et[0].width,et[0].height);for(let fe=0,Me=et.length;fe<Me;fe++)ze=et[fe],b.format!==Di?He!==null?ot?Y&&i.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,ze.width,ze.height,He,ze.data):i.compressedTexImage2D(s.TEXTURE_2D,fe,We,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Y&&i.texSubImage2D(s.TEXTURE_2D,fe,0,0,ze.width,ze.height,He,Ye,ze.data):i.texImage2D(s.TEXTURE_2D,fe,We,ze.width,ze.height,0,He,Ye,ze.data)}else if(b.isDataArrayTexture)if(ot){if(Bt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,We,Ae.width,Ae.height,Ae.depth),Y)if(b.layerUpdates.size>0){const fe=i_(Ae.width,Ae.height,b.format,b.type);for(const Me of b.layerUpdates){const we=Ae.data.subarray(Me*fe/Ae.data.BYTES_PER_ELEMENT,(Me+1)*fe/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Me,Ae.width,Ae.height,1,He,Ye,we)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,Ye,Ae.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,We,Ae.width,Ae.height,Ae.depth,0,He,Ye,Ae.data);else if(b.isData3DTexture)ot?(Bt&&i.texStorage3D(s.TEXTURE_3D,Ce,We,Ae.width,Ae.height,Ae.depth),Y&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,Ye,Ae.data)):i.texImage3D(s.TEXTURE_3D,0,We,Ae.width,Ae.height,Ae.depth,0,He,Ye,Ae.data);else if(b.isFramebufferTexture){if(Bt)if(ot)i.texStorage2D(s.TEXTURE_2D,Ce,We,Ae.width,Ae.height);else{let fe=Ae.width,Me=Ae.height;for(let we=0;we<Ce;we++)i.texImage2D(s.TEXTURE_2D,we,We,fe,Me,0,He,Ye,null),fe>>=1,Me>>=1}}else if(et.length>0){if(ot&&Bt){const fe=qe(et[0]);i.texStorage2D(s.TEXTURE_2D,Ce,We,fe.width,fe.height)}for(let fe=0,Me=et.length;fe<Me;fe++)ze=et[fe],ot?Y&&i.texSubImage2D(s.TEXTURE_2D,fe,0,0,He,Ye,ze):i.texImage2D(s.TEXTURE_2D,fe,We,He,Ye,ze);b.generateMipmaps=!1}else if(ot){if(Bt){const fe=qe(Ae);i.texStorage2D(s.TEXTURE_2D,Ce,We,fe.width,fe.height)}Y&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,He,Ye,Ae)}else i.texImage2D(s.TEXTURE_2D,0,We,He,Ye,Ae);M(b)&&S(me),Xe.__version=Se.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function oe(O,b,ae){if(b.image.length!==6)return;const me=ue(O,b),Te=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+ae);const Se=r.get(Te);if(Te.version!==Se.__version||me===!0){i.activeTexture(s.TEXTURE0+ae);const Xe=Ut.getPrimaries(Ut.workingColorSpace),De=b.colorSpace===Ii?null:Ut.getPrimaries(b.colorSpace),Ie=b.colorSpace===Ii||Xe===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const _t=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,He=[];for(let Me=0;Me<6;Me++)!_t&&!Ae?He[Me]=C(b.image[Me],!0,l.maxCubemapSize):He[Me]=Ae?b.image[Me].image:b.image[Me],He[Me]=vt(b,He[Me]);const Ye=He[0],We=c.convert(b.format,b.colorSpace),ze=c.convert(b.type),et=N(b.internalFormat,We,ze,b.colorSpace),ot=b.isVideoTexture!==!0,Bt=Se.__version===void 0||me===!0,Y=Te.dataReady;let Ce=J(b,Ye);Z(s.TEXTURE_CUBE_MAP,b);let fe;if(_t){ot&&Bt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,et,Ye.width,Ye.height);for(let Me=0;Me<6;Me++){fe=He[Me].mipmaps;for(let we=0;we<fe.length;we++){const Ue=fe[we];b.format!==Di?We!==null?ot?Y&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,we,0,0,Ue.width,Ue.height,We,Ue.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,we,et,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,we,0,0,Ue.width,Ue.height,We,ze,Ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,we,et,Ue.width,Ue.height,0,We,ze,Ue.data)}}}else{if(fe=b.mipmaps,ot&&Bt){fe.length>0&&Ce++;const Me=qe(He[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,et,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ae){ot?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,He[Me].width,He[Me].height,We,ze,He[Me].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,et,He[Me].width,He[Me].height,0,We,ze,He[Me].data);for(let we=0;we<fe.length;we++){const tt=fe[we].image[Me].image;ot?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,we+1,0,0,tt.width,tt.height,We,ze,tt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,we+1,et,tt.width,tt.height,0,We,ze,tt.data)}}else{ot?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,We,ze,He[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,et,We,ze,He[Me]);for(let we=0;we<fe.length;we++){const Ue=fe[we];ot?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,we+1,0,0,We,ze,Ue.image[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,we+1,et,We,ze,Ue.image[Me])}}}M(b)&&S(s.TEXTURE_CUBE_MAP),Se.__version=Te.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function pe(O,b,ae,me,Te,Se){const Xe=c.convert(ae.format,ae.colorSpace),De=c.convert(ae.type),Ie=N(ae.internalFormat,Xe,De,ae.colorSpace),_t=r.get(b),Ae=r.get(ae);if(Ae.__renderTarget=b,!_t.__hasExternalTextures){const He=Math.max(1,b.width>>Se),Ye=Math.max(1,b.height>>Se);Te===s.TEXTURE_3D||Te===s.TEXTURE_2D_ARRAY?i.texImage3D(Te,Se,Ie,He,Ye,b.depth,0,Xe,De,null):i.texImage2D(Te,Se,Ie,He,Ye,0,Xe,De,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),ht(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,Te,Ae.__webglTexture,0,ft(b)):(Te===s.TEXTURE_2D||Te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,Te,Ae.__webglTexture,Se),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(O,b,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,O),b.depthBuffer){const me=b.depthTexture,Te=me&&me.isDepthTexture?me.type:null,Se=U(b.stencilBuffer,Te),Xe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=ft(b);ht(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,Se,b.width,b.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Se,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Se,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,O)}else{const me=b.textures;for(let Te=0;Te<me.length;Te++){const Se=me[Te],Xe=c.convert(Se.format,Se.colorSpace),De=c.convert(Se.type),Ie=N(Se.internalFormat,Xe,De,Se.colorSpace),_t=ft(b);ae&&ht(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,Ie,b.width,b.height):ht(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,Ie,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(b.depthTexture);me.__renderTarget=b,(!me.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_e(b.depthTexture,0);const Te=me.__webglTexture,Se=ft(b);if(b.depthTexture.format===Dr)ht(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Te,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Te,0);else if(b.depthTexture.format===Ls)ht(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Te,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function Re(O){const b=r.get(O),ae=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const me=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),me){const Te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,me.removeEventListener("dispose",Te)};me.addEventListener("dispose",Te),b.__depthDisposeCallback=Te}b.__boundDepthTexture=me}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");Pe(b.__webglFramebuffer,O)}else if(ae){b.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[me]),b.__webglDepthbuffer[me]===void 0)b.__webglDepthbuffer[me]=s.createRenderbuffer(),ve(b.__webglDepthbuffer[me],O,!1);else{const Te=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=b.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,Se)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ve(b.__webglDepthbuffer,O,!1);else{const me=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Te)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(O,b,ae){const me=r.get(O);b!==void 0&&pe(me.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Re(O)}function At(O){const b=O.texture,ae=r.get(O),me=r.get(b);O.addEventListener("dispose",z);const Te=O.textures,Se=O.isWebGLCubeRenderTarget===!0,Xe=Te.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=b.version,h.memory.textures++),Se){ae.__webglFramebuffer=[];for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0){ae.__webglFramebuffer[De]=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)ae.__webglFramebuffer[De][Ie]=s.createFramebuffer()}else ae.__webglFramebuffer[De]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ae.__webglFramebuffer=[];for(let De=0;De<b.mipmaps.length;De++)ae.__webglFramebuffer[De]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let De=0,Ie=Te.length;De<Ie;De++){const _t=r.get(Te[De]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),h.memory.textures++)}if(O.samples>0&&ht(O)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let De=0;De<Te.length;De++){const Ie=Te[De];ae.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[De]);const _t=c.convert(Ie.format,Ie.colorSpace),Ae=c.convert(Ie.type),He=N(Ie.internalFormat,_t,Ae,Ie.colorSpace,O.isXRRenderTarget===!0),Ye=ft(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,He,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,ae.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(ae.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Se){i.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Z(s.TEXTURE_CUBE_MAP,b);for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)pe(ae.__webglFramebuffer[De][Ie],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ie);else pe(ae.__webglFramebuffer[De],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(b)&&S(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xe){for(let De=0,Ie=Te.length;De<Ie;De++){const _t=Te[De],Ae=r.get(_t);i.bindTexture(s.TEXTURE_2D,Ae.__webglTexture),Z(s.TEXTURE_2D,_t),pe(ae.__webglFramebuffer,O,_t,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,0),M(_t)&&S(s.TEXTURE_2D)}i.unbindTexture()}else{let De=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(De,me.__webglTexture),Z(De,b),b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)pe(ae.__webglFramebuffer[Ie],O,b,s.COLOR_ATTACHMENT0,De,Ie);else pe(ae.__webglFramebuffer,O,b,s.COLOR_ATTACHMENT0,De,0);M(b)&&S(De),i.unbindTexture()}O.depthBuffer&&Re(O)}function st(O){const b=O.textures;for(let ae=0,me=b.length;ae<me;ae++){const Te=b[ae];if(M(Te)){const Se=F(O),Xe=r.get(Te).__webglTexture;i.bindTexture(Se,Xe),S(Se),i.unbindTexture()}}}const Wt=[],H=[];function fn(O){if(O.samples>0){if(ht(O)===!1){const b=O.textures,ae=O.width,me=O.height;let Te=s.COLOR_BUFFER_BIT;const Se=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(O),De=b.length>1;if(De)for(let Ie=0;Ie<b.length;Ie++)i.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Te|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Te|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ie]);const _t=r.get(b[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_t,0)}s.blitFramebuffer(0,0,ae,me,0,0,ae,me,Te,s.NEAREST),p===!0&&(Wt.length=0,H.length=0,Wt.push(s.COLOR_ATTACHMENT0+Ie),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Wt.push(Se),H.push(Se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Wt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let Ie=0;Ie<b.length;Ie++){i.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ie]);const _t=r.get(b[Ie]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,_t,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const b=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ft(O){return Math.min(l.maxSamples,O.samples)}function ht(O){const b=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ke(O){const b=h.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function vt(O,b){const ae=O.colorSpace,me=O.format,Te=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ae!==Qa&&ae!==Ii&&(Ut.getTransfer(ae)===Vt?(me!==Di||Te!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),b}function qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=ce,this.resetTextureUnits=he,this.setTexture2D=_e,this.setTexture2DArray=P,this.setTexture3D=I,this.setTextureCube=D,this.rebindTextures=$e,this.setupRenderTarget=At,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ht}function HA(s,e){function i(r,l=Ii){let c;const h=Ut.getTransfer(l);if(r===On)return s.UNSIGNED_BYTE;if(r===Cd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===wd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===z_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===O_)return s.BYTE;if(r===P_)return s.SHORT;if(r===ko)return s.UNSIGNED_SHORT;if(r===Rd)return s.INT;if(r===Ds)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===Wo)return s.HALF_FLOAT;if(r===B_)return s.ALPHA;if(r===F_)return s.RGB;if(r===Di)return s.RGBA;if(r===I_)return s.LUMINANCE;if(r===H_)return s.LUMINANCE_ALPHA;if(r===Dr)return s.DEPTH_COMPONENT;if(r===Ls)return s.DEPTH_STENCIL;if(r===G_)return s.RED;if(r===Dd)return s.RED_INTEGER;if(r===V_)return s.RG;if(r===Ud)return s.RG_INTEGER;if(r===Ld)return s.RGBA_INTEGER;if(r===Dc||r===Uc||r===Lc||r===Nc)if(h===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Dc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Dc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kh||r===Qh||r===Jh||r===$h)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Kh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ed||r===td||r===nd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ed||r===td)return h===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===nd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===id||r===ad||r===sd||r===rd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===gd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===id)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ad)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===od)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ld)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ud)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===md)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oc||r===vd||r===_d)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Oc)return h===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===k_||r===Sd||r===xd||r===yd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Oc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Sd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Us?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const GA={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),S=this._getHandJoint(m,C);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,E=.005;m.inputState.pinching&&x>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(GA)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new bc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const VA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Nn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new yn({vertexShader:VA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new li(new zr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends _a{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,g=null,v=null,x=null,y=null,E=null;const C=new XA,M=i.getContextAttributes();let S=null,F=null;const N=[],U=[],J=new Fe;let k=null;const z=new oi;z.viewport=new Zt;const K=new oi;K.viewport=new Zt;const L=[z,K],w=new fM;let X=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let oe=N[V];return oe===void 0&&(oe=new Nh,N[V]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(V){let oe=N[V];return oe===void 0&&(oe=new Nh,N[V]=oe),oe.getGripSpace()},this.getHand=function(V){let oe=N[V];return oe===void 0&&(oe=new Nh,N[V]=oe),oe.getHandSpace()};function ce(V){const oe=U.indexOf(V.inputSource);if(oe===-1)return;const pe=N[oe];pe!==void 0&&(pe.update(V.inputSource,V.frame,m||h),pe.dispatchEvent({type:V.type,data:V.inputSource}))}function ye(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",ye),l.removeEventListener("inputsourceschange",_e);for(let V=0;V<N.length;V++){const oe=U[V];oe!==null&&(U[V]=null,N[V].disconnect(oe))}X=null,he=null,C.reset(),e.setRenderTarget(S),y=null,x=null,v=null,l=null,F=null,ue.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(J.width,J.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){c=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){d=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(V){m=V},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(S=e.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",ye),l.addEventListener("inputsourceschange",_e),M.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(J),l.enabledFeatures!==void 0&&l.enabledFeatures.includes("layers")){let pe=null,ve=null,Pe=null;M.depth&&(Pe=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,pe=M.stencil?Ls:Dr,ve=M.stencil?Us:Ds);const Re={colorFormat:i.RGBA8,depthFormat:Pe,scaleFactor:c};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(Re),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),F=new Pn(x.textureWidth,x.textureHeight,{format:Di,type:On,depthTexture:new Pd(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const pe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,pe),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Pn(y.framebufferWidth,y.framebufferHeight,{format:Di,type:On,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}F.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),ue.setContext(l),ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function _e(V){for(let oe=0;oe<V.removed.length;oe++){const pe=V.removed[oe],ve=U.indexOf(pe);ve>=0&&(U[ve]=null,N[ve].disconnect(pe))}for(let oe=0;oe<V.added.length;oe++){const pe=V.added[oe];let ve=U.indexOf(pe);if(ve===-1){for(let Re=0;Re<N.length;Re++)if(Re>=U.length){U.push(pe),ve=Re;break}else if(U[Re]===null){U[Re]=pe,ve=Re;break}if(ve===-1)break}const Pe=N[ve];Pe&&Pe.connect(pe)}}const P=new q,I=new q;function D(V,oe,pe){P.setFromMatrixPosition(oe.matrixWorld),I.setFromMatrixPosition(pe.matrixWorld);const ve=P.distanceTo(I),Pe=oe.projectionMatrix.elements,Re=pe.projectionMatrix.elements,$e=Pe[14]/(Pe[10]-1),At=Pe[14]/(Pe[10]+1),st=(Pe[9]+1)/Pe[5],Wt=(Pe[9]-1)/Pe[5],H=(Pe[8]-1)/Pe[0],fn=(Re[8]+1)/Re[0],ft=$e*H,ht=$e*fn,ke=ve/(-H+fn),vt=ke*-H;if(oe.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(vt),V.translateZ(ke),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Pe[10]===-1)V.projectionMatrix.copy(oe.projectionMatrix),V.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const qe=$e+ke,O=At+ke,b=ft-vt,ae=ht+(ve-vt),me=st*At/O*qe,Te=Wt*At/O*qe;V.projectionMatrix.makePerspective(b,ae,me,Te,qe,O),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function $(V,oe){oe===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(oe.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;let oe=V.near,pe=V.far;C.texture!==null&&(C.depthNear>0&&(oe=C.depthNear),C.depthFar>0&&(pe=C.depthFar)),w.near=K.near=z.near=oe,w.far=K.far=z.far=pe,(X!==w.near||he!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),X=w.near,he=w.far),z.layers.mask=V.layers.mask|2,K.layers.mask=V.layers.mask|4,w.layers.mask=z.layers.mask|K.layers.mask;const ve=V.parent,Pe=w.cameras;$(w,ve);for(let Re=0;Re<Pe.length;Re++)$(Pe[Re],ve);Pe.length===2?D(w,z,K):w.projectionMatrix.copy(z.projectionMatrix),ee(V,w,ve)};function ee(V,oe,pe){pe===null?V.matrix.copy(oe.matrixWorld):(V.matrix.copy(pe.matrixWorld),V.matrix.invert(),V.matrix.multiply(oe.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(oe.projectionMatrix),V.projectionMatrixInverse.copy(oe.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Md*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(V){p=V,x!==null&&(x.fixedFoveation=V),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=V)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(w)};let R=null;function Z(V,oe){if(g=oe.getViewerPose(m||h),E=oe,g!==null){const pe=g.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let ve=!1;pe.length!==w.cameras.length&&(w.cameras.length=0,ve=!0);for(let Re=0;Re<pe.length;Re++){const $e=pe[Re];let At=null;if(y!==null)At=y.getViewport($e);else{const Wt=v.getViewSubImage(x,$e);At=Wt.viewport,Re===0&&(e.setRenderTargetTextures(F,Wt.colorTexture,x.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(F))}let st=L[Re];st===void 0&&(st=new oi,st.layers.enable(Re),st.viewport=new Zt,L[Re]=st),st.matrix.fromArray($e.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray($e.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(At.x,At.y,At.width,At.height),Re===0&&(w.matrix.copy(st.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ve===!0&&w.cameras.push(st)}const Pe=l.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Re=v.getDepthInformation(pe[0]);Re&&Re.isValid&&Re.texture&&C.init(e,Re,l.renderState)}}for(let pe=0;pe<N.length;pe++){const ve=U[pe],Pe=N[pe];ve!==null&&Pe!==void 0&&Pe.update(ve,oe,m||h)}R&&R(V,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),E=null}const ue=new o0;ue.setAnimationLoop(Z),this.setAnimationLoop=function(V){R=V},this.dispose=function(){}}}const Ms=new va,qA=new sn;function YA(s,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function r(M,S){S.color.getRGB(M.fogColor.value,$_(s)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,F,N,U){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(M,S):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),g(M,S)):S.isMeshStandardMaterial?(c(M,S),x(M,S),S.isMeshPhysicalMaterial&&y(M,S,U)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),C(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?p(M,S,F,N):S.isSpriteMaterial?m(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===xn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===xn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const F=e.get(S),N=F.envMap,U=F.envMapRotation;N&&(M.envMap.value=N,Ms.copy(U),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),M.envMapRotation.value.setFromMatrix4(qA.makeRotationFromEuler(Ms)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,F,N){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*F,M.scale.value=N*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function m(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function g(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function x(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,F){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===xn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function C(M,S){const F=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function jA(s,e,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(F,N){const U=N.program;r.uniformBlockBinding(F,U)}function m(F,N){let U=l[F.id];U===void 0&&(E(F),U=g(F),l[F.id]=U,F.addEventListener("dispose",M));const J=N.program;r.updateUBOMapping(F,J);const k=e.render.frame;c[F.id]!==k&&(x(F),c[F.id]=k)}function g(F){const N=v();F.__bindingPointIndex=N;const U=s.createBuffer(),J=F.__size,k=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,J,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,U),U}function v(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const N=l[F.id],U=F.uniforms,J=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let k=0,z=U.length;k<z;k++){const K=Array.isArray(U[k])?U[k]:[U[k]];for(let L=0,w=K.length;L<w;L++){const X=K[L];if(y(X,k,L,J)===!0){const he=X.__offset,ce=Array.isArray(X.value)?X.value:[X.value];let ye=0;for(let _e=0;_e<ce.length;_e++){const P=ce[_e],I=C(P);typeof P=="number"||typeof P=="boolean"?(X.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,he+ye,X.__data)):P.isMatrix3?(X.__data[0]=P.elements[0],X.__data[1]=P.elements[1],X.__data[2]=P.elements[2],X.__data[3]=0,X.__data[4]=P.elements[3],X.__data[5]=P.elements[4],X.__data[6]=P.elements[5],X.__data[7]=0,X.__data[8]=P.elements[6],X.__data[9]=P.elements[7],X.__data[10]=P.elements[8],X.__data[11]=0):(P.toArray(X.__data,ye),ye+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,he,X.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(F,N,U,J){const k=F.value,z=N+"_"+U;if(J[z]===void 0)return typeof k=="number"||typeof k=="boolean"?J[z]=k:J[z]=k.clone(),!0;{const K=J[z];if(typeof k=="number"||typeof k=="boolean"){if(K!==k)return J[z]=k,!0}else if(K.equals(k)===!1)return K.copy(k),!0}return!1}function E(F){const N=F.uniforms;let U=0;const J=16;for(let z=0,K=N.length;z<K;z++){const L=Array.isArray(N[z])?N[z]:[N[z]];for(let w=0,X=L.length;w<X;w++){const he=L[w],ce=Array.isArray(he.value)?he.value:[he.value];for(let ye=0,_e=ce.length;ye<_e;ye++){const P=ce[ye],I=C(P),D=U%J,$=D%I.boundary,ee=D+$;U+=$,ee!==0&&J-ee<I.storage&&(U+=J-ee),he.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=U,U+=I.storage}}}const k=U%J;return k>0&&(U+=J-k),F.__size=U,F.__cache={},this}function C(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),N}function M(F){const N=F.target;N.removeEventListener("dispose",M);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function S(){for(const F in l)s.deleteBuffer(l[F]);h=[],l={},c={}}return{bind:p,update:m,dispose:S}}class ZA{constructor(e={}){const{canvas:i=Sy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const E=new Uint32Array(4),C=new Int32Array(4);let M=null,S=null;const F=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=Ka,this.toneMappingExposure=1;const U=this;let J=!1,k=0,z=0,K=null,L=-1,w=null;const X=new Zt,he=new Zt;let ce=null;const ye=new gt(0);let _e=0,P=i.width,I=i.height,D=1,$=null,ee=null;const R=new Zt(0,0,P,I),Z=new Zt(0,0,P,I);let ue=!1;const V=new n0;let oe=!1,pe=!1;this.transmissionResolutionScale=1;const ve=new sn,Pe=new sn,Re=new q,$e=new Zt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Wt(){return K===null?D:1}let H=r;function fn(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xo}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",we,!1),i.addEventListener("webglcontextcreationerror",Ue,!1),H===null){const j="webgl2";if(H=fn(j,A),H===null)throw fn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ft,ht,ke,vt,qe,O,b,ae,me,Te,Se,Xe,De,Ie,_t,Ae,He,Ye,We,ze,et,ot,Bt,Y;function Ce(){ft=new ab(H),ft.init(),ot=new HA(H,ft),ht=new JT(H,ft,e,ot),ke=new FA(H,ft),ht.reverseDepthBuffer&&x&&ke.buffers.depth.setReversed(!0),vt=new ob(H),qe=new bA,O=new IA(H,ft,ke,qe,ht,ot,vt),b=new eb(U),ae=new ib(U),me=new pM(H),Bt=new KT(H,me),Te=new sb(H,me,vt,Bt),Se=new cb(H,Te,me,vt),We=new lb(H,ht,O),Ae=new $T(qe),Xe=new TA(U,b,ae,ft,ht,Bt,Ae),De=new YA(U,qe),Ie=new RA,_t=new NA(ft),Ye=new ZT(U,b,ae,ke,Se,y,p),He=new zA(U,Se,ht),Y=new jA(H,vt,ht,ke),ze=new QT(H,ft,vt),et=new rb(H,ft,vt),vt.programs=Xe.programs,U.capabilities=ht,U.extensions=ft,U.properties=qe,U.renderLists=Ie,U.shadowMap=He,U.state=ke,U.info=vt}Ce();const fe=new WA(U,H);this.xr=fe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(P,I,!1))},this.getSize=function(A){return A.set(P,I)},this.setSize=function(A,j,se=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,I=j,i.width=Math.floor(A*D),i.height=Math.floor(j*D),se===!0&&(i.style.width=A+"px",i.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(P*D,I*D).floor()},this.setDrawingBufferSize=function(A,j,se){P=A,I=j,D=se,i.width=Math.floor(A*se),i.height=Math.floor(j*se),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(X)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,j,se,re){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,j,se,re),ke.viewport(X.copy(R).multiplyScalar(D).round())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,j,se,re){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,j,se,re),ke.scissor(he.copy(Z).multiplyScalar(D).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(A){ke.setScissorTest(ue=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(A=!0,j=!0,se=!0){let re=0;if(A){let W=!1;if(K!==null){const be=K.texture.format;W=be===Ld||be===Ud||be===Dd}if(W){const be=K.texture.type,Le=be===On||be===Ds||be===ko||be===Us||be===Cd||be===wd,Oe=Ye.getClearColor(),Be=Ye.getClearAlpha(),nt=Oe.r,it=Oe.g,je=Oe.b;Le?(E[0]=nt,E[1]=it,E[2]=je,E[3]=Be,H.clearBufferuiv(H.COLOR,0,E)):(C[0]=nt,C[1]=it,C[2]=je,C[3]=Be,H.clearBufferiv(H.COLOR,0,C))}else re|=H.COLOR_BUFFER_BIT}j&&(re|=H.DEPTH_BUFFER_BIT),se&&(re|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",we,!1),i.removeEventListener("webglcontextcreationerror",Ue,!1),Ye.dispose(),Ie.dispose(),_t.dispose(),qe.dispose(),b.dispose(),ae.dispose(),Se.dispose(),Bt.dispose(),Y.dispose(),Xe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ir),fe.removeEventListener("sessionend",Hr),Ni.stop()};function Me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),J=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),J=!1;const A=vt.autoReset,j=He.enabled,se=He.autoUpdate,re=He.needsUpdate,W=He.type;Ce(),vt.autoReset=A,He.enabled=j,He.autoUpdate=se,He.needsUpdate=re,He.type=W}function Ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tt(A){const j=A.target;j.removeEventListener("dispose",tt),Kt(j)}function Kt(A){hn(A),qe.remove(A)}function hn(A){const j=qe.get(A).programs;j!==void 0&&(j.forEach(function(se){Xe.releaseProgram(se)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,se,re,W,be){j===null&&(j=At);const Le=W.isMesh&&W.matrixWorld.determinant()<0,Oe=Vr(A,j,se,re,W);ke.setMaterial(re,Le);let Be=se.index,nt=1;if(re.wireframe===!0){if(Be=Te.getWireframeAttribute(se),Be===void 0)return;nt=2}const it=se.drawRange,je=se.attributes.position;let Mt=it.start*nt,Et=(it.start+it.count)*nt;be!==null&&(Mt=Math.max(Mt,be.start*nt),Et=Math.min(Et,(be.start+be.count)*nt)),Be!==null?(Mt=Math.max(Mt,0),Et=Math.min(Et,Be.count)):je!=null&&(Mt=Math.max(Mt,0),Et=Math.min(Et,je.count));const qt=Et-Mt;if(qt<0||qt===1/0)return;Bt.setup(W,re,Oe,se,Be);let Ct,at=ze;if(Be!==null&&(Ct=me.get(Be),at=et,at.setIndex(Ct)),W.isMesh)re.wireframe===!0?(ke.setLineWidth(re.wireframeLinewidth*Wt()),at.setMode(H.LINES)):at.setMode(H.TRIANGLES);else if(W.isLine){let Ke=re.linewidth;Ke===void 0&&(Ke=1),ke.setLineWidth(Ke*Wt()),W.isLineSegments?at.setMode(H.LINES):W.isLineLoop?at.setMode(H.LINE_LOOP):at.setMode(H.LINE_STRIP)}else W.isPoints?at.setMode(H.POINTS):W.isSprite&&at.setMode(H.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)at.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))at.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ke=W._multiDrawStarts,dn=W._multiDrawCounts,bt=W._multiDrawCount,Gn=Be?me.get(Be).bytesPerElement:1,Mi=qe.get(re).currentProgram.getUniforms();for(let zn=0;zn<bt;zn++)Mi.setValue(H,"_gl_DrawID",zn),at.render(Ke[zn]/Gn,dn[zn])}else if(W.isInstancedMesh)at.renderInstances(Mt,qt,W.count);else if(se.isInstancedBufferGeometry){const Ke=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,dn=Math.min(se.instanceCount,Ke);at.renderInstances(Mt,qt,dn)}else at.render(Mt,qt)};function Rt(A,j,se){A.transparent===!0&&A.side===Hn&&A.forceSinglePass===!1?(A.side=xn,A.needsUpdate=!0,Jt(A,j,se),A.side=ga,A.needsUpdate=!0,Jt(A,j,se),A.side=Hn):Jt(A,j,se)}this.compile=function(A,j,se=null){se===null&&(se=A),S=_t.get(se),S.init(j),N.push(S),se.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),A!==se&&A.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights();const re=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const be=W.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){const Oe=be[Le];Rt(Oe,se,W),re.add(Oe)}else Rt(be,se,W),re.add(be)}),N.pop(),S=null,re},this.compileAsync=function(A,j,se=null){const re=this.compile(A,j,se);return new Promise(W=>{function be(){if(re.forEach(function(Le){qe.get(Le).currentProgram.isReady()&&re.delete(Le)}),re.size===0){W(A);return}setTimeout(be,10)}ft.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Mn=null;function xi(A){Mn&&Mn(A)}function Ir(){Ni.stop()}function Hr(){Ni.start()}const Ni=new o0;Ni.setAnimationLoop(xi),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(A){Mn=A,fe.setAnimationLoop(A),A===null?Ni.stop():Ni.start()},fe.addEventListener("sessionstart",Ir),fe.addEventListener("sessionend",Hr),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(j),j=fe.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,j,K),S=_t.get(A,N.length),S.init(j),N.push(S),Pe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V.setFromProjectionMatrix(Pe),pe=this.localClippingEnabled,oe=Ae.init(this.clippingPlanes,pe),M=Ie.get(A,F.length),M.init(),F.push(M),fe.enabled===!0&&fe.isPresenting===!0){const be=U.xr.getDepthSensingMesh();be!==null&&Ja(be,j,-1/0,U.sortObjects)}Ja(A,j,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort($,ee),st=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,st&&Ye.addToRenderList(M,A),this.info.render.frame++,oe===!0&&Ae.beginShadows();const se=S.state.shadowsArray;He.render(se,A,j),oe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=M.opaque,W=M.transmissive;if(S.setupLights(),j.isArrayCamera){const be=j.cameras;if(W.length>0)for(let Le=0,Oe=be.length;Le<Oe;Le++){const Be=be[Le];Gr(re,W,A,Be)}st&&Ye.render(A);for(let Le=0,Oe=be.length;Le<Oe;Le++){const Be=be[Le];Ns(M,A,Be,Be.viewport)}}else W.length>0&&Gr(re,W,A,j),st&&Ye.render(A),Ns(M,A,j);K!==null&&z===0&&(O.updateMultisampleRenderTarget(K),O.updateRenderTargetMipmap(K)),A.isScene===!0&&A.onAfterRender(U,A,j),Bt.resetDefaultState(),L=-1,w=null,N.pop(),N.length>0?(S=N[N.length-1],oe===!0&&Ae.setGlobalState(U.clippingPlanes,S.state.camera)):S=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function Ja(A,j,se,re){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){re&&$e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pe);const Le=Se.update(A),Oe=A.material;Oe.visible&&M.push(A,Le,Oe,se,$e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||V.intersectsObject(A))){const Le=Se.update(A),Oe=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$e.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),$e.copy(Le.boundingSphere.center)),$e.applyMatrix4(A.matrixWorld).applyMatrix4(Pe)),Array.isArray(Oe)){const Be=Le.groups;for(let nt=0,it=Be.length;nt<it;nt++){const je=Be[nt],Mt=Oe[je.materialIndex];Mt&&Mt.visible&&M.push(A,Le,Mt,se,$e.z,je)}}else Oe.visible&&M.push(A,Le,Oe,se,$e.z,null)}}const be=A.children;for(let Le=0,Oe=be.length;Le<Oe;Le++)Ja(be[Le],j,se,re)}function Ns(A,j,se,re){const W=A.opaque,be=A.transmissive,Le=A.transparent;S.setupLightsView(se),oe===!0&&Ae.setGlobalState(U.clippingPlanes,se),re&&ke.viewport(X.copy(re)),W.length>0&&$a(W,j,se),be.length>0&&$a(be,j,se),Le.length>0&&$a(Le,j,se),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Gr(A,j,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[re.id]===void 0&&(S.state.transmissionRenderTarget[re.id]=new Pn(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Wo:On,minFilter:Cs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const be=S.state.transmissionRenderTarget[re.id],Le=re.viewport||X;be.setSize(Le.z*U.transmissionResolutionScale,Le.w*U.transmissionResolutionScale);const Oe=U.getRenderTarget();U.setRenderTarget(be),U.getClearColor(ye),_e=U.getClearAlpha(),_e<1&&U.setClearColor(16777215,.5),U.clear(),st&&Ye.render(se);const Be=U.toneMapping;U.toneMapping=Ka;const nt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),S.setupLightsView(re),oe===!0&&Ae.setGlobalState(U.clippingPlanes,re),$a(A,se,re),O.updateMultisampleRenderTarget(be),O.updateRenderTargetMipmap(be),ft.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let je=0,Mt=j.length;je<Mt;je++){const Et=j[je],qt=Et.object,Ct=Et.geometry,at=Et.material,Ke=Et.group;if(at.side===Hn&&qt.layers.test(re.layers)){const dn=at.side;at.side=xn,at.needsUpdate=!0,yi(qt,se,re,Ct,at,Ke),at.side=dn,at.needsUpdate=!0,it=!0}}it===!0&&(O.updateMultisampleRenderTarget(be),O.updateRenderTargetMipmap(be))}U.setRenderTarget(Oe),U.setClearColor(ye,_e),nt!==void 0&&(re.viewport=nt),U.toneMapping=Be}function $a(A,j,se){const re=j.isScene===!0?j.overrideMaterial:null;for(let W=0,be=A.length;W<be;W++){const Le=A[W],Oe=Le.object,Be=Le.geometry,nt=re===null?Le.material:re,it=Le.group;Oe.layers.test(se.layers)&&yi(Oe,j,se,Be,nt,it)}}function yi(A,j,se,re,W,be){A.onBeforeRender(U,j,se,re,W,be),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(U,j,se,re,A,be),W.transparent===!0&&W.side===Hn&&W.forceSinglePass===!1?(W.side=xn,W.needsUpdate=!0,U.renderBufferDirect(se,j,re,W,A,be),W.side=ga,W.needsUpdate=!0,U.renderBufferDirect(se,j,re,W,A,be),W.side=Hn):U.renderBufferDirect(se,j,re,W,A,be),A.onAfterRender(U,j,se,re,W,be)}function Jt(A,j,se){j.isScene!==!0&&(j=At);const re=qe.get(A),W=S.state.lights,be=S.state.shadowsArray,Le=W.state.version,Oe=Xe.getParameters(A,W.state,be,j,se),Be=Xe.getProgramCacheKey(Oe);let nt=re.programs;re.environment=A.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(A.isMeshStandardMaterial?ae:b).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",tt),nt=new Map,re.programs=nt);let it=nt.get(Be);if(it!==void 0){if(re.currentProgram===it&&re.lightsStateVersion===Le)return Xi(A,Oe),it}else Oe.uniforms=Xe.getUniforms(A),A.onBeforeCompile(Oe,U),it=Xe.acquireProgram(Oe,Be),nt.set(Be,it),re.uniforms=Oe.uniforms;const je=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Ae.uniform),Xi(A,Oe),re.needsLights=kc(A),re.lightsStateVersion=Le,re.needsLights&&(je.ambientLightColor.value=W.state.ambient,je.lightProbe.value=W.state.probe,je.directionalLights.value=W.state.directional,je.directionalLightShadows.value=W.state.directionalShadow,je.spotLights.value=W.state.spot,je.spotLightShadows.value=W.state.spotShadow,je.rectAreaLights.value=W.state.rectArea,je.ltc_1.value=W.state.rectAreaLTC1,je.ltc_2.value=W.state.rectAreaLTC2,je.pointLights.value=W.state.point,je.pointLightShadows.value=W.state.pointShadow,je.hemisphereLights.value=W.state.hemi,je.directionalShadowMap.value=W.state.directionalShadowMap,je.directionalShadowMatrix.value=W.state.directionalShadowMatrix,je.spotShadowMap.value=W.state.spotShadowMap,je.spotLightMatrix.value=W.state.spotLightMatrix,je.spotLightMap.value=W.state.spotLightMap,je.pointShadowMap.value=W.state.pointShadowMap,je.pointShadowMatrix.value=W.state.pointShadowMatrix),re.currentProgram=it,re.uniformsList=null,it}function En(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Pc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Xi(A,j){const se=qe.get(A);se.outputColorSpace=j.outputColorSpace,se.batching=j.batching,se.batchingColor=j.batchingColor,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.instancingMorph=j.instancingMorph,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function Vr(A,j,se,re,W){j.isScene!==!0&&(j=At),O.resetTextureUnits();const be=j.fog,Le=re.isMeshStandardMaterial?j.environment:null,Oe=K===null?U.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Qa,Be=(re.isMeshStandardMaterial?ae:b).get(re.envMap||Le),nt=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),je=!!se.morphAttributes.position,Mt=!!se.morphAttributes.normal,Et=!!se.morphAttributes.color;let qt=Ka;re.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(qt=U.toneMapping);const Ct=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,at=Ct!==void 0?Ct.length:0,Ke=qe.get(re),dn=S.state.lights;if(oe===!0&&(pe===!0||A!==w)){const $t=A===w&&re.id===L;Ae.setState(re,A,$t)}let bt=!1;re.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==dn.state.version||Ke.outputColorSpace!==Oe||W.isBatchedMesh&&Ke.batching===!1||!W.isBatchedMesh&&Ke.batching===!0||W.isBatchedMesh&&Ke.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ke.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ke.instancing===!1||!W.isInstancedMesh&&Ke.instancing===!0||W.isSkinnedMesh&&Ke.skinning===!1||!W.isSkinnedMesh&&Ke.skinning===!0||W.isInstancedMesh&&Ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ke.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ke.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ke.instancingMorph===!1&&W.morphTexture!==null||Ke.envMap!==Be||re.fog===!0&&Ke.fog!==be||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ae.numPlanes||Ke.numIntersection!==Ae.numIntersection)||Ke.vertexAlphas!==nt||Ke.vertexTangents!==it||Ke.morphTargets!==je||Ke.morphNormals!==Mt||Ke.morphColors!==Et||Ke.toneMapping!==qt||Ke.morphTargetsCount!==at)&&(bt=!0):(bt=!0,Ke.__version=re.version);let Gn=Ke.currentProgram;bt===!0&&(Gn=Jt(re,j,W));let Mi=!1,zn=!1,vn=!1;const Ft=Gn.getUniforms(),Bn=Ke.uniforms;if(ke.useProgram(Gn.program)&&(Mi=!0,zn=!0,vn=!0),re.id!==L&&(L=re.id,zn=!0),Mi||w!==A){ke.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),yy(ve),My(ve),Ft.setValue(H,"projectionMatrix",ve)):Ft.setValue(H,"projectionMatrix",A.projectionMatrix),Ft.setValue(H,"viewMatrix",A.matrixWorldInverse);const Tn=Ft.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,Re.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&Ft.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ft.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,zn=!0,vn=!0)}if(W.isSkinnedMesh){Ft.setOptional(H,W,"bindMatrix"),Ft.setOptional(H,W,"bindMatrixInverse");const $t=W.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Ft.setValue(H,"boneTexture",$t.boneTexture,O))}W.isBatchedMesh&&(Ft.setOptional(H,W,"batchingTexture"),Ft.setValue(H,"batchingTexture",W._matricesTexture,O),Ft.setOptional(H,W,"batchingIdTexture"),Ft.setValue(H,"batchingIdTexture",W._indirectTexture,O),Ft.setOptional(H,W,"batchingColorTexture"),W._colorsTexture!==null&&Ft.setValue(H,"batchingColorTexture",W._colorsTexture,O));const wn=se.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&We.update(W,se,Gn),(zn||Ke.receiveShadow!==W.receiveShadow)&&(Ke.receiveShadow=W.receiveShadow,Ft.setValue(H,"receiveShadow",W.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Bn.envMap.value=Be,Bn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(Bn.envMapIntensity.value=j.environmentIntensity),zn&&(Ft.setValue(H,"toneMappingExposure",U.toneMappingExposure),Ke.needsLights&&Vc(Bn,vn),be&&re.fog===!0&&De.refreshFogUniforms(Bn,be),De.refreshMaterialUniforms(Bn,re,D,I,S.state.transmissionRenderTarget[A.id]),Pc.upload(H,En(Ke),Bn,O)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Pc.upload(H,En(Ke),Bn,O),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ft.setValue(H,"center",W.center),Ft.setValue(H,"modelViewMatrix",W.modelViewMatrix),Ft.setValue(H,"normalMatrix",W.normalMatrix),Ft.setValue(H,"modelMatrix",W.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const $t=re.uniformsGroups;for(let Tn=0,Os=$t.length;Tn<Os;Tn++){const Vn=$t[Tn];Y.update(Vn,Gn),Y.bind(Vn,Gn)}}return Gn}function Vc(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function kc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,j,se){qe.get(A.texture).__webglTexture=j,qe.get(A.depthTexture).__webglTexture=se;const re=qe.get(A);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=se===void 0,re.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const se=qe.get(A);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0};const Qo=H.createFramebuffer();this.setRenderTarget=function(A,j=0,se=0){K=A,k=j,z=se;let re=!0,W=null,be=!1,Le=!1;if(A){const Be=qe.get(A);if(Be.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(H.FRAMEBUFFER,null),re=!1;else if(Be.__webglFramebuffer===void 0)O.setupRenderTarget(A);else if(Be.__hasExternalTextures)O.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(Be.__boundDepthTexture!==je){if(je!==null&&qe.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Le=!0);const it=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[j])?W=it[j][se]:W=it[j],be=!0):A.samples>0&&O.useMultisampledRTT(A)===!1?W=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?W=it[se]:W=it,X.copy(A.viewport),he.copy(A.scissor),ce=A.scissorTest}else X.copy(R).multiplyScalar(D).floor(),he.copy(Z).multiplyScalar(D).floor(),ce=ue;if(se!==0&&(W=Qo),ke.bindFramebuffer(H.FRAMEBUFFER,W)&&re&&ke.drawBuffers(A,W),ke.viewport(X),ke.scissor(he),ke.setScissorTest(ce),be){const Be=qe.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Be.__webglTexture,se)}else if(Le){const Be=qe.get(A.texture),nt=j;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Be.__webglTexture,se,nt)}else if(A!==null&&se!==0){const Be=qe.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Be.__webglTexture,se)}L=-1},this.readRenderTargetPixels=function(A,j,se,re,W,be,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){ke.bindFramebuffer(H.FRAMEBUFFER,Oe);try{const Be=A.texture,nt=Be.format,it=Be.type;if(!ht.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-re&&se>=0&&se<=A.height-W&&H.readPixels(j,se,re,W,ot.convert(nt),ot.convert(it),be)}finally{const Be=K!==null?qe.get(K).__webglFramebuffer:null;ke.bindFramebuffer(H.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,j,se,re,W,be,Le){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){const Be=A.texture,nt=Be.format,it=Be.type;if(!ht.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-re&&se>=0&&se<=A.height-W){ke.bindFramebuffer(H.FRAMEBUFFER,Oe);const je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.bufferData(H.PIXEL_PACK_BUFFER,be.byteLength,H.STREAM_READ),H.readPixels(j,se,re,W,ot.convert(nt),ot.convert(it),0);const Mt=K!==null?qe.get(K).__webglFramebuffer:null;ke.bindFramebuffer(H.FRAMEBUFFER,Mt);const Et=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await xy(H,Et,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,be),H.deleteBuffer(je),H.deleteSync(Et),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,se=0){A.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const re=Math.pow(2,-se),W=Math.floor(A.image.width*re),be=Math.floor(A.image.height*re),Le=j!==null?j.x:0,Oe=j!==null?j.y:0;O.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,Le,Oe,W,be),ke.unbindTexture()};const es=H.createFramebuffer(),kr=H.createFramebuffer();this.copyTextureToTexture=function(A,j,se=null,re=null,W=0,be=null){A.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,A=arguments[1],j=arguments[2],be=arguments[3]||0,se=null),be===null&&(W!==0?(Rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=W,W=0):be=0);let Le,Oe,Be,nt,it,je,Mt,Et,qt;const Ct=A.isCompressedTexture?A.mipmaps[be]:A.image;if(se!==null)Le=se.max.x-se.min.x,Oe=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,nt=se.min.x,it=se.min.y,je=se.isBox3?se.min.z:0;else{const wn=Math.pow(2,-W);Le=Math.floor(Ct.width*wn),Oe=Math.floor(Ct.height*wn),A.isDataArrayTexture?Be=Ct.depth:A.isData3DTexture?Be=Math.floor(Ct.depth*wn):Be=1,nt=0,it=0,je=0}re!==null?(Mt=re.x,Et=re.y,qt=re.z):(Mt=0,Et=0,qt=0);const at=ot.convert(j.format),Ke=ot.convert(j.type);let dn;j.isData3DTexture?(O.setTexture3D(j,0),dn=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(O.setTexture2DArray(j,0),dn=H.TEXTURE_2D_ARRAY):(O.setTexture2D(j,0),dn=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const bt=H.getParameter(H.UNPACK_ROW_LENGTH),Gn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Mi=H.getParameter(H.UNPACK_SKIP_PIXELS),zn=H.getParameter(H.UNPACK_SKIP_ROWS),vn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ct.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ct.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,je);const Ft=A.isDataArrayTexture||A.isData3DTexture,Bn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const wn=qe.get(A),$t=qe.get(j),Tn=qe.get(wn.__renderTarget),Os=qe.get($t.__renderTarget);ke.bindFramebuffer(H.READ_FRAMEBUFFER,Tn.__webglFramebuffer),ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,Os.__webglFramebuffer);for(let Vn=0;Vn<Be;Vn++)Ft&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,W,je+Vn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(j).__webglTexture,be,qt+Vn)),H.blitFramebuffer(nt,it,Le,Oe,Mt,Et,Le,Oe,H.DEPTH_BUFFER_BIT,H.NEAREST);ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||qe.has(A)){const wn=qe.get(A),$t=qe.get(j);ke.bindFramebuffer(H.READ_FRAMEBUFFER,es),ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,kr);for(let Tn=0;Tn<Be;Tn++)Ft?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wn.__webglTexture,W,je+Tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wn.__webglTexture,W),Bn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$t.__webglTexture,be,qt+Tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$t.__webglTexture,be),W!==0?H.blitFramebuffer(nt,it,Le,Oe,Mt,Et,Le,Oe,H.COLOR_BUFFER_BIT,H.NEAREST):Bn?H.copyTexSubImage3D(dn,be,Mt,Et,qt+Tn,nt,it,Le,Oe):H.copyTexSubImage2D(dn,be,Mt,Et,nt,it,Le,Oe);ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Bn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(dn,be,Mt,Et,qt,Le,Oe,Be,at,Ke,Ct.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(dn,be,Mt,Et,qt,Le,Oe,Be,at,Ct.data):H.texSubImage3D(dn,be,Mt,Et,qt,Le,Oe,Be,at,Ke,Ct):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,be,Mt,Et,Le,Oe,at,Ke,Ct.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,be,Mt,Et,Ct.width,Ct.height,at,Ct.data):H.texSubImage2D(H.TEXTURE_2D,be,Mt,Et,Le,Oe,at,Ke,Ct);H.pixelStorei(H.UNPACK_ROW_LENGTH,bt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Gn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Mi),H.pixelStorei(H.UNPACK_SKIP_ROWS,zn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,vn),be===0&&j.generateMipmaps&&H.generateMipmap(dn),ke.unbindTexture()},this.copyTextureToTexture3D=function(A,j,se=null,re=null,W=0){return A.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,re=arguments[1]||null,A=arguments[2],j=arguments[3],W=arguments[4]||0),Rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,se,re,W)},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&O.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?O.setTextureCube(A,0):A.isData3DTexture?O.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?O.setTexture2DArray(A,0):O.setTexture2D(A,0),ke.unbindTexture()},this.resetState=function(){k=0,z=0,K=null,ke.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ut._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ut._getUnpackColorSpace()}}/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var KA=(()=>{const s=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),i=new ki;return i.setAttribute("position",new ui(s,3)),i.setAttribute("uv",new ui(e,2)),i})(),Li=class bd{static get fullscreenGeometry(){return KA}constructor(e="Pass",i=new Ed,r=new r0){this.name=e,this.renderer=null,this.scene=i,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let i=this.screen;i!==null?i.material=e:(i=new li(bd.fullscreenGeometry,e),i.frustumCulled=!1,this.scene===null&&(this.scene=new Ed),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,i=qo){}render(e,i,r,l,c){throw new Error("Render method not implemented!")}setSize(e,i){}initialize(e,i,r){}dispose(){for(const e of Object.keys(this)){const i=this[e];(i instanceof Pn||i instanceof Br||i instanceof Nn||i instanceof bd)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},QA=class extends Li{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(s,e,i,r,l){const c=s.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},JA=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,h0="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",d0=class extends yn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Ot(null),depthBuffer:new Ot(null),channelWeights:new Ot(null),opacity:new Ot(1)},blending:Qn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:JA,vertexShader:h0}),this.depthFunc=zc}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(s){const e=s!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){const e=s!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=s}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(s){this.colorSpaceConversion!==s&&(s?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(s){s!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=s):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(s){this.uniforms.inputBuffer.value=s}getOpacity(s){return this.uniforms.opacity.value}setOpacity(s){this.uniforms.opacity.value=s}},$A=class extends Li{constructor(s,e=!0){super("CopyPass"),this.fullscreenMaterial=new d0,this.needsSwap=!1,this.renderTarget=s,s===void 0&&(this.renderTarget=new Pn(1,1,{minFilter:Kn,magFilter:Kn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(s){this.autoResize=s}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(s){this.autoResize=s}render(s,e,i,r,l){this.fullscreenMaterial.inputBuffer=e.texture,s.setRenderTarget(this.renderToScreen?null:this.renderTarget),s.render(this.scene,this.camera)}setSize(s,e){this.autoResize&&this.renderTarget.setSize(s,e)}initialize(s,e,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==On?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":s!==null&&s.outputColorSpace===kt&&(this.renderTarget.texture.colorSpace=kt))}},C_=new gt,p0=class extends Li{constructor(s=!0,e=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=s,this.depth=e,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(s,e,i){this.color=s,this.depth=e,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(s){this.overrideClearColor=s}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(s){this.overrideClearAlpha=s}render(s,e,i,r,l){const c=this.overrideClearColor,h=this.overrideClearAlpha,d=s.getClearAlpha(),p=c!==null,m=h>=0;p?(s.getClearColor(C_),s.setClearColor(c,m?h:d)):m&&s.setClearAlpha(h),s.setRenderTarget(this.renderToScreen?null:e),s.clear(this.color,this.depth,this.stencil),p?s.setClearColor(C_,d):m&&s.setClearAlpha(d)}},e1=class extends Li{constructor(s,e){super("MaskPass",s,e),this.needsSwap=!1,this.clearPass=new p0(!1,!1,!0),this.inverse=!1}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get inverted(){return this.inverse}set inverted(s){this.inverse=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(s){this.inverted=s}render(s,e,i,r,l){const c=s.getContext(),h=s.state.buffers,d=this.scene,p=this.camera,m=this.clearPass,g=this.inverted?0:1,v=1-g;h.color.setMask(!1),h.depth.setMask(!1),h.color.setLocked(!0),h.depth.setLocked(!0),h.stencil.setTest(!0),h.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),h.stencil.setFunc(c.ALWAYS,g,4294967295),h.stencil.setClear(v),h.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(s,null):(m.render(s,e),m.render(s,i))),this.renderToScreen?(s.setRenderTarget(null),s.render(d,p)):(s.setRenderTarget(e),s.render(d,p),s.setRenderTarget(i),s.render(d,p)),h.color.setLocked(!1),h.depth.setLocked(!1),h.stencil.setLocked(!1),h.stencil.setFunc(c.EQUAL,1,4294967295),h.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),h.stencil.setLocked(!0)}},Oh=1/1e3,t1=1e3,n1=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(s){typeof document<"u"&&document.hidden!==void 0&&(s?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=s)}get delta(){return this._delta*Oh}get fixedDelta(){return this._fixedDelta*Oh}set fixedDelta(s){this._fixedDelta=s*t1}get elapsed(){return this._elapsed*Oh}update(s){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(s!==void 0?s:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(s){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},i1=class{constructor(s=null,{depthBuffer:e=!0,stencilBuffer:i=!1,multisampling:r=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,i,l,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new $A,this.depthRenderTarget=null,this.passes=[],this.timer=new n1,this.autoRenderToScreen=!0,this.setRenderer(s)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(s){this.multisampling!==s&&(this.inputBuffer.samples=s,this.outputBuffer.samples=s,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(s){if(this.renderer=s,s!==null){const e=s.getSize(new Fe),i=s.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===On&&s.outputColorSpace===kt&&(this.inputBuffer.texture.colorSpace=kt,this.outputBuffer.texture.colorSpace=kt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),s.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(s,i,r)}}replaceRenderer(s,e=!0){const i=this.renderer,r=i.domElement.parentNode;return this.setRenderer(s),e&&r!==null&&(r.removeChild(i.domElement),r.appendChild(s.domElement)),i}createDepthTexture(){const s=new Pd;s.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(s.format=Ls,s.type=Us):s.type=Hi;const e=s.clone();e.name="EffectComposer.OutputDepth";const i=s.clone();i.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=s,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();const{width:r,height:l}=this.inputBuffer;this.depthRenderTarget=new Pn(r,l,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:i})}blitDepthBuffer(s){const e=this.renderer,i=this.depthRenderTarget,r=e.properties,l=e.getContext();e.setRenderTarget(i);const c=r.get(s).__webglFramebuffer,h=r.get(i).__webglFramebuffer,d=s.stencilBuffer?l.DEPTH_BUFFER_BIT|l.STENCIL_BUFFER_BIT:l.DEPTH_BUFFER_BIT;l.bindFramebuffer(l.READ_FRAMEBUFFER,c),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,h),l.blitFramebuffer(0,0,s.width,s.height,0,0,i.width,i.height,d,l.NEAREST),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){const s=this.stableDepthTexture;for(const e of this.passes)e.getDepthTexture()===s&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(s,e,i,r){const l=this.renderer,c=l===null?new Fe:l.getDrawingBufferSize(new Fe),h=new Pn(c.width,c.height,{minFilter:Kn,magFilter:Kn,samples:r,stencilBuffer:e,depthBuffer:s,type:i});return i===On&&l!==null&&l.outputColorSpace===kt&&(h.texture.colorSpace=kt),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(s){for(const e of this.passes)e.mainScene=s}setMainCamera(s){for(const e of this.passes)e.mainCamera=s}addPass(s,e){const i=this.passes,r=this.renderer,l=r.getDrawingBufferSize(new Fe),c=r.getContext().getContextAttributes().alpha,h=this.inputBuffer.texture.type;if(s.renderer=r,s.setSize(l.width,l.height),s.initialize(r,c,h),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),s.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?i.splice(e,0,s):i.push(s),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),s.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(const d of i)d.setDepthTexture(this.stableDepthTexture)}else s.setDepthTexture(this.stableDepthTexture)}removePass(s){const e=this.passes,i=e.indexOf(s);if(i!==-1&&e.splice(i,1).length>0){const c=this.stableDepthTexture;if(c!==null){const h=(p,m)=>p||m.needsDepthTexture;e.reduce(h,!1)||(s.getDepthTexture()===c&&s.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===e.length&&(s.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const s=this.passes;this.deleteDepthTexture(),s.length>0&&(this.autoRenderToScreen&&(s[s.length-1].renderToScreen=!1),this.passes=[])}render(s){const e=this.renderer,i=this.copyPass;let r=this.inputBuffer,l=this.outputBuffer,c,h=!1;s===void 0&&(this.timer.update(),s=this.timer.getDelta());for(const d of this.passes)if(d.enabled){if(d.render(e,r,l,s,h),d.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(r),d.needsSwap){if(h){i.renderToScreen=d.renderToScreen;const p=e.getContext(),m=e.state.buffers.stencil;m.setFunc(p.NOTEQUAL,1,4294967295),i.render(e,r,l,s,h),m.setFunc(p.EQUAL,1,4294967295)}c=r,r=l,l=c}d instanceof e1?h=!0:d instanceof QA&&(h=!1)}}setSize(s,e,i){const r=this.renderer,l=r.getSize(new Fe);(s===void 0||e===void 0)&&(s=l.width,e=l.height),(l.width!==s||l.height!==e)&&r.setSize(s,e,i);const c=r.getDrawingBufferSize(new Fe);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(c.width,c.height);for(const h of this.passes)h.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const s of this.passes)s.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],Li.fullscreenGeometry.dispose()}},ws={NONE:0,DEPTH:1,CONVOLUTION:2},Lt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},a1=class{constructor(){this.shaderParts=new Map([[Lt.FRAGMENT_HEAD,null],[Lt.FRAGMENT_MAIN_UV,null],[Lt.FRAGMENT_MAIN_IMAGE,null],[Lt.VERTEX_HEAD,null],[Lt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ws.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Qa}},Ph=!1,w_=class{constructor(s=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(s),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let i;if(e.material.flatShading)switch(e.material.side){case Hn:i=this.materialsFlatShadedDoubleSide;break;case xn:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(e.material.side){case Hn:i=this.materialsDoubleSide;break;case xn:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=i[2]:e.isInstancedMesh?e.material=i[1]:e.material=i[0],++this.meshCount}}}cloneMaterial(s){if(!(s instanceof yn))return s.clone();const e=s.uniforms,i=new Map;for(const l in e){const c=e[l].value;c.isRenderTargetTexture&&(e[l].value=null,i.set(l,c))}const r=s.clone();for(const l of i)e[l[0]].value=l[1],r.uniforms[l[0]].value=l[1];return r}setMaterial(s){if(this.disposeMaterials(),this.material=s,s!==null){const e=this.materials=[this.cloneMaterial(s),this.cloneMaterial(s),this.cloneMaterial(s)];for(const i of e)i.uniforms=Object.assign({},s.uniforms),i.side=ga;e[2].skinning=!0,this.materialsBackSide=e.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.side=xn,r}),this.materialsDoubleSide=e.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.side=Hn,r}),this.materialsFlatShaded=e.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=e.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r.side=xn,r}),this.materialsFlatShadedDoubleSide=e.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r.side=Hn,r})}}render(s,e,i){const r=s.shadowMap.enabled;if(s.shadowMap.enabled=!1,Ph){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),s.render(e,i);for(const c of l)c[0].material=c[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,s.render(e,i),e.overrideMaterial=l}s.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){const s=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of s)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Ph}static set workaroundEnabled(s){Ph=s}},Za=-1,Gi=class extends _a{constructor(s=null,e=Za,i=Za,r=1){super(),s!==null&&this.addEventListener("change",()=>s.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new Fe(1,1),this.preferredSize=new Fe(e,i),this.target=this.preferredSize,this.s=r,this.effectiveSize=new Fe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const s=this.baseSize,e=this.preferredSize,i=this.effectiveSize,r=this.scale;e.width!==Za?i.width=e.width:e.height!==Za?i.width=Math.round(e.height*(s.width/Math.max(s.height,1))):i.width=Math.round(s.width*r),e.height!==Za?i.height=e.height:e.width!==Za?i.height=Math.round(e.width/Math.max(s.width/Math.max(s.height,1),1)):i.height=Math.round(s.height*r)}get width(){return this.effectiveSize.width}set width(s){this.preferredWidth=s}get height(){return this.effectiveSize.height}set height(s){this.preferredHeight=s}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(s){this.s!==s&&(this.s=s,this.preferredSize.setScalar(Za),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(s){this.scale=s}get baseWidth(){return this.baseSize.width}set baseWidth(s){this.baseSize.width!==s&&(this.baseSize.width=s,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(s){this.baseWidth=s}get baseHeight(){return this.baseSize.height}set baseHeight(s){this.baseSize.height!==s&&(this.baseSize.height=s,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(s){this.baseHeight=s}setBaseSize(s,e){(this.baseSize.width!==s||this.baseSize.height!==e)&&(this.baseSize.set(s,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(s){this.preferredSize.width!==s&&(this.preferredSize.width=s,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(s){this.preferredWidth=s}get preferredHeight(){return this.preferredSize.height}set preferredHeight(s){this.preferredSize.height!==s&&(this.preferredSize.height=s,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(s){this.preferredHeight=s}setPreferredSize(s,e){(this.preferredSize.width!==s||this.preferredSize.height!==e)&&(this.preferredSize.set(s,e),this.dispatchEvent({type:"change"}))}copy(s){this.s=s.scale,this.baseSize.set(s.baseWidth,s.baseHeight),this.preferredSize.set(s.preferredWidth,s.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Za}},yt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},s1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",r1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",o1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",l1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",c1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",u1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",f1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",h1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",d1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",p1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",m1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",g1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",v1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",S1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",x1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",y1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",M1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",E1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",T1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",b1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",A1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",R1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",C1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",w1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",D1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",U1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",L1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",N1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",O1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",P1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",z1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",B1=new Map([[yt.ADD,s1],[yt.ALPHA,r1],[yt.AVERAGE,o1],[yt.COLOR,l1],[yt.COLOR_BURN,c1],[yt.COLOR_DODGE,u1],[yt.DARKEN,f1],[yt.DIFFERENCE,h1],[yt.DIVIDE,d1],[yt.DST,null],[yt.EXCLUSION,p1],[yt.HARD_LIGHT,m1],[yt.HARD_MIX,g1],[yt.HUE,v1],[yt.INVERT,_1],[yt.INVERT_RGB,S1],[yt.LIGHTEN,x1],[yt.LINEAR_BURN,y1],[yt.LINEAR_DODGE,M1],[yt.LINEAR_LIGHT,E1],[yt.LUMINOSITY,T1],[yt.MULTIPLY,b1],[yt.NEGATION,A1],[yt.NORMAL,R1],[yt.OVERLAY,C1],[yt.PIN_LIGHT,w1],[yt.REFLECT,D1],[yt.SATURATION,U1],[yt.SCREEN,L1],[yt.SOFT_LIGHT,N1],[yt.SRC,O1],[yt.SUBTRACT,P1],[yt.VIVID_LIGHT,z1]]),F1=class extends _a{constructor(s,e=1){super(),this._blendFunction=s,this.opacity=new Ot(e)}getOpacity(){return this.opacity.value}setOpacity(s){this.opacity.value=s}get blendFunction(){return this._blendFunction}set blendFunction(s){this._blendFunction=s,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(s){this.blendFunction=s}getShaderCode(){return B1.get(this.blendFunction)}},I1=class extends _a{constructor(s,e,{attributes:i=ws.NONE,blendFunction:r=yt.NORMAL,defines:l=new Map,uniforms:c=new Map,extensions:h=null,vertexShader:d=null}={}){super(),this.name=s,this.renderer=null,this.attributes=i,this.fragmentShader=e,this.vertexShader=d,this.defines=l,this.uniforms=c,this.extensions=h,this.blendMode=new F1(r),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=Qa,this._outputColorSpace=Ii}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(s){this._inputColorSpace=s,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(s){this._outputColorSpace=s,this.setChanged()}set mainScene(s){}set mainCamera(s){}getName(){return this.name}setRenderer(s){this.renderer=s}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(s){this.attributes=s,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(s){this.fragmentShader=s,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(s){this.vertexShader=s,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(s,e=qo){}update(s,e,i){}setSize(s,e){}initialize(s,e,i){}dispose(){for(const s of Object.keys(this)){const e=this[s];(e instanceof Pn||e instanceof Br||e instanceof Nn||e instanceof Li)&&this[s].dispose()}}},Id={MEDIUM:2,LARGE:3},H1=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,G1="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",V1=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],k1=class extends yn{constructor(s=new Zt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Ot(null),texelSize:new Ot(new Zt),scale:new Ot(1),kernel:new Ot(0)},blending:Qn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:H1,vertexShader:G1}),this.setTexelSize(s.x,s.y),this.kernelSize=Id.MEDIUM}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.inputBuffer=s}get kernelSequence(){return V1[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(s){this.uniforms.scale.value=s}getScale(){return this.uniforms.scale.value}setScale(s){this.uniforms.scale.value=s}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(s){this.uniforms.kernel.value=s}setKernel(s){this.kernel=s}setTexelSize(s,e){this.uniforms.texelSize.value.set(s,e,s*.5,e*.5)}setSize(s,e){const i=1/s,r=1/e;this.uniforms.texelSize.value.set(i,r,i*.5,r*.5)}},X1=class extends Li{constructor({kernelSize:s=Id.MEDIUM,resolutionScale:e=.5,width:i=Gi.AUTO_SIZE,height:r=Gi.AUTO_SIZE,resolutionX:l=i,resolutionY:c=r}={}){super("KawaseBlurPass"),this.renderTargetA=new Pn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const h=this.resolution=new Gi(this,l,c,e);h.addEventListener("change",d=>this.setSize(h.baseWidth,h.baseHeight)),this._blurMaterial=new k1,this._blurMaterial.kernelSize=s,this.copyMaterial=new d0}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(s){this._blurMaterial=s}get dithering(){return this.copyMaterial.dithering}set dithering(s){this.copyMaterial.dithering=s}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(s){this.blurMaterial.kernelSize=s}get width(){return this.resolution.width}set width(s){this.resolution.preferredWidth=s}get height(){return this.resolution.height}set height(s){this.resolution.preferredHeight=s}get scale(){return this.blurMaterial.scale}set scale(s){this.blurMaterial.scale=s}getScale(){return this.blurMaterial.scale}setScale(s){this.blurMaterial.scale=s}getKernelSize(){return this.kernelSize}setKernelSize(s){this.kernelSize=s}getResolutionScale(){return this.resolution.scale}setResolutionScale(s){this.resolution.scale=s}render(s,e,i,r,l){const c=this.scene,h=this.camera,d=this.renderTargetA,p=this.renderTargetB,m=this.blurMaterial,g=m.kernelSequence;let v=e;this.fullscreenMaterial=m;for(let x=0,y=g.length;x<y;++x){const E=(x&1)===0?d:p;m.kernel=g[x],m.inputBuffer=v.texture,s.setRenderTarget(E),s.render(c,h),v=E}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=v.texture,s.setRenderTarget(this.renderToScreen?null:i),s.render(c,h)}setSize(s,e){const i=this.resolution;i.setBaseSize(s,e);const r=i.width,l=i.height;this.renderTargetA.setSize(r,l),this.renderTargetB.setSize(r,l),this.blurMaterial.setSize(s,e)}initialize(s,e,i){i!==void 0&&(this.renderTargetA.texture.type=i,this.renderTargetB.texture.type=i,i!==On?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):s!==null&&s.outputColorSpace===kt&&(this.renderTargetA.texture.colorSpace=kt,this.renderTargetB.texture.colorSpace=kt))}static get AUTO_SIZE(){return Gi.AUTO_SIZE}},W1=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,q1=class extends yn{constructor(s=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Xo.replace(/\D+/g,"")},uniforms:{inputBuffer:new Ot(null),threshold:new Ot(0),smoothing:new Ot(1),range:new Ot(null)},blending:Qn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:W1,vertexShader:h0}),this.colorOutput=s,this.luminanceRange=e}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}get threshold(){return this.uniforms.threshold.value}set threshold(s){this.smoothing>0||s>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=s}getThreshold(){return this.threshold}setThreshold(s){this.threshold=s}get smoothing(){return this.uniforms.smoothing.value}set smoothing(s){this.threshold>0||s>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=s}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(s){this.smoothing=s}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(s){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(s){s?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(s){return this.colorOutput}setColorOutputEnabled(s){this.colorOutput=s}get useRange(){return this.luminanceRange!==null}set useRange(s){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(s){s!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=s,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(s){this.luminanceRange=s}},Y1=class extends Li{constructor({renderTarget:s,luminanceRange:e,colorOutput:i,resolutionScale:r=1,width:l=Gi.AUTO_SIZE,height:c=Gi.AUTO_SIZE,resolutionX:h=l,resolutionY:d=c}={}){super("LuminancePass"),this.fullscreenMaterial=new q1(i,e),this.needsSwap=!1,this.renderTarget=s,this.renderTarget===void 0&&(this.renderTarget=new Pn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const p=this.resolution=new Gi(this,h,d,r);p.addEventListener("change",m=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(s,e,i,r,l){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,s.setRenderTarget(this.renderToScreen?null:this.renderTarget),s.render(this.scene,this.camera)}setSize(s,e){const i=this.resolution;i.setBaseSize(s,e),this.renderTarget.setSize(i.width,i.height)}initialize(s,e,i){i!==void 0&&i!==On&&(this.renderTarget.texture.type=i,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},j1=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,Z1="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",K1=class extends yn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Ot(null),texelSize:new Ot(new Fe)},blending:Qn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:j1,vertexShader:Z1})}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setSize(s,e){this.uniforms.texelSize.value.set(1/s,1/e)}},Q1=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,J1="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",$1=class extends yn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Ot(null),supportBuffer:new Ot(null),texelSize:new Ot(new Fe),radius:new Ot(.85)},blending:Qn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Q1,vertexShader:J1})}set inputBuffer(s){this.uniforms.inputBuffer.value=s}set supportBuffer(s){this.uniforms.supportBuffer.value=s}get radius(){return this.uniforms.radius.value}set radius(s){this.uniforms.radius.value=s}setSize(s,e){this.uniforms.texelSize.value.set(1/s,1/e)}},eR=class extends Li{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Pn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new K1,this.upsamplingMaterial=new $1,this.resolution=new Fe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(s){if(this.levels!==s){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let i=0;i<s;++i){const r=e.clone();r.texture.name="Downsampling.Mipmap"+i,this.downsamplingMipmaps.push(r)}this.upsamplingMipmaps.push(e);for(let i=1,r=s-1;i<r;++i){const l=e.clone();l.texture.name="Upsampling.Mipmap"+i,this.upsamplingMipmaps.push(l)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(s){this.upsamplingMaterial.radius=s}render(s,e,i,r,l){const{scene:c,camera:h}=this,{downsamplingMaterial:d,upsamplingMaterial:p}=this,{downsamplingMipmaps:m,upsamplingMipmaps:g}=this;let v=e;this.fullscreenMaterial=d;for(let x=0,y=m.length;x<y;++x){const E=m[x];d.setSize(v.width,v.height),d.inputBuffer=v.texture,s.setRenderTarget(E),s.render(c,h),v=E}this.fullscreenMaterial=p;for(let x=g.length-1;x>=0;--x){const y=g[x];p.setSize(v.width,v.height),p.inputBuffer=v.texture,p.supportBuffer=m[x].texture,s.setRenderTarget(y),s.render(c,h),v=y}}setSize(s,e){const i=this.resolution;i.set(s,e);let r=i.width,l=i.height;for(let c=0,h=this.downsamplingMipmaps.length;c<h;++c)r=Math.round(r*.5),l=Math.round(l*.5),this.downsamplingMipmaps[c].setSize(r,l),c<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[c].setSize(r,l)}initialize(s,e,i){if(i!==void 0){const r=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const l of r)l.texture.type=i;if(i!==On)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(s!==null&&s.outputColorSpace===kt)for(const l of r)l.texture.colorSpace=kt}}dispose(){super.dispose();for(const s of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))s.dispose()}},tR=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,nR=class extends I1{constructor({blendFunction:s=yt.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:i=.03,mipmapBlur:r=!0,intensity:l=1,radius:c=.85,levels:h=8,kernelSize:d=Id.LARGE,resolutionScale:p=.5,width:m=Gi.AUTO_SIZE,height:g=Gi.AUTO_SIZE,resolutionX:v=m,resolutionY:x=g}={}){super("BloomEffect",tR,{blendFunction:s,uniforms:new Map([["map",new Ot(null)],["intensity",new Ot(l)]])}),this.renderTarget=new Pn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new X1({kernelSize:d}),this.luminancePass=new Y1({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=i,this.mipmapBlurPass=new eR,this.mipmapBlurPass.enabled=r,this.mipmapBlurPass.radius=c,this.mipmapBlurPass.levels=h,this.uniforms.get("map").value=r?this.mipmapBlurPass.texture:this.renderTarget.texture;const y=this.resolution=new Gi(this,v,x,p);y.addEventListener("change",E=>this.setSize(y.baseWidth,y.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(s){this.resolution.preferredWidth=s}get height(){return this.resolution.height}set height(s){this.resolution.preferredHeight=s}get dithering(){return this.blurPass.dithering}set dithering(s){this.blurPass.dithering=s}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(s){this.blurPass.kernelSize=s}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(s){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(s){this.uniforms.get("intensity").value=s}getIntensity(){return this.intensity}setIntensity(s){this.intensity=s}getResolutionScale(){return this.resolution.scale}setResolutionScale(s){this.resolution.scale=s}update(s,e,i){const r=this.renderTarget,l=this.luminancePass;l.enabled?(l.render(s,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(s,l.renderTarget):this.blurPass.render(s,l.renderTarget,r)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(s,e):this.blurPass.render(s,e,r)}setSize(s,e){const i=this.resolution;i.setBaseSize(s,e),this.renderTarget.setSize(i.width,i.height),this.blurPass.resolution.copy(i),this.luminancePass.setSize(s,e),this.mipmapBlurPass.setSize(s,e)}initialize(s,e,i){this.blurPass.initialize(s,e,i),this.luminancePass.initialize(s,e,i),this.mipmapBlurPass.initialize(s,e,i),i!==void 0&&(this.renderTarget.texture.type=i,s!==null&&s.outputColorSpace===kt&&(this.renderTarget.texture.colorSpace=kt))}},iR=class extends Li{constructor(s,e,i=null){super("RenderPass",s,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new p0,this.overrideMaterialManager=i===null?null:new w_(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get renderToScreen(){return super.renderToScreen}set renderToScreen(s){super.renderToScreen=s,this.clearPass.renderToScreen=s}get overrideMaterial(){const s=this.overrideMaterialManager;return s!==null?s.material:null}set overrideMaterial(s){const e=this.overrideMaterialManager;s!==null?e!==null?e.setMaterial(s):this.overrideMaterialManager=new w_(s):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(s){this.overrideMaterial=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getSelection(){return this.selection}setSelection(s){this.selection=s}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(s){this.ignoreBackground=s}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(s){this.skipShadowMapUpdate=s}getClearPass(){return this.clearPass}render(s,e,i,r,l){const c=this.scene,h=this.camera,d=this.selection,p=h.layers.mask,m=c.background,g=s.shadowMap.autoUpdate,v=this.renderToScreen?null:e;d!==null&&h.layers.set(d.getLayer()),this.skipShadowMapUpdate&&(s.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(s,e),s.setRenderTarget(v),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(s,c,h):s.render(c,h),h.layers.mask=p,c.background=m,s.shadowMap.autoUpdate=g}},aR=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,sR="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",rR=class extends yn{constructor(s,e,i,r,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Xo.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Ot(null),depthBuffer:new Ot(null),resolution:new Ot(new Fe),texelSize:new Ot(new Fe),cameraNear:new Ot(.3),cameraFar:new Ot(1e3),aspect:new Ot(1),time:new Ot(0)},blending:Qn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),s&&this.setShaderParts(s),e&&this.setDefines(e),i&&this.setUniforms(i),this.copyCameraSettings(r)}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){this.uniforms.depthBuffer.value=s}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}setDepthBuffer(s,e=qo){this.depthBuffer=s,this.depthPacking=e}setShaderData(s){this.setShaderParts(s.shaderParts),this.setDefines(s.defines),this.setUniforms(s.uniforms),this.setExtensions(s.extensions)}setShaderParts(s){return this.fragmentShader=aR.replace(Lt.FRAGMENT_HEAD,s.get(Lt.FRAGMENT_HEAD)||"").replace(Lt.FRAGMENT_MAIN_UV,s.get(Lt.FRAGMENT_MAIN_UV)||"").replace(Lt.FRAGMENT_MAIN_IMAGE,s.get(Lt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=sR.replace(Lt.VERTEX_HEAD,s.get(Lt.VERTEX_HEAD)||"").replace(Lt.VERTEX_MAIN_SUPPORT,s.get(Lt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(s){for(const e of s.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(s){for(const e of s.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(s){this.extensions={};for(const e of s)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(s){this.encodeOutput!==s&&(s?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(s){return this.encodeOutput}setOutputEncodingEnabled(s){this.encodeOutput=s}get time(){return this.uniforms.time.value}set time(s){this.uniforms.time.value=s}setDeltaTime(s){this.uniforms.time.value+=s}adoptCameraSettings(s){this.copyCameraSettings(s)}copyCameraSettings(s){s&&(this.uniforms.cameraNear.value=s.near,this.uniforms.cameraFar.value=s.far,s instanceof oi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(s,e){const i=this.uniforms;i.resolution.value.set(s,e),i.texelSize.value.set(1/s,1/e),i.aspect.value=s/e}static get Section(){return Lt}};function D_(s,e,i){for(const r of e){const l="$1"+s+r.charAt(0).toUpperCase()+r.slice(1),c=new RegExp("([^\\.])(\\b"+r+"\\b)","g");for(const h of i.entries())h[1]!==null&&i.set(h[0],h[1].replace(c,l))}}function oR(s,e,i){let r=e.getFragmentShader(),l=e.getVertexShader();const c=r!==void 0&&/mainImage/.test(r),h=r!==void 0&&/mainUv/.test(r);if(i.attributes|=e.getAttributes(),r===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(h&&(i.attributes&ws.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!h)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const d=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=i.shaderParts;let m=p.get(Lt.FRAGMENT_HEAD)||"",g=p.get(Lt.FRAGMENT_MAIN_UV)||"",v=p.get(Lt.FRAGMENT_MAIN_IMAGE)||"",x=p.get(Lt.VERTEX_HEAD)||"",y=p.get(Lt.VERTEX_MAIN_SUPPORT)||"";const E=new Set,C=new Set;if(h&&(g+=`	${s}MainUv(UV);
`,i.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const F=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);y+=`	${s}MainSupport(`,y+=F?`vUv);
`:`);
`;for(const N of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const U of N[1].split(/\s*,\s*/))i.varyings.add(U),E.add(U),C.add(U);for(const N of l.matchAll(d))C.add(N[1])}for(const F of r.matchAll(d))C.add(F[1]);for(const F of e.defines.keys())C.add(F.replace(/\([\w\s,]*\)/g,""));for(const F of e.uniforms.keys())C.add(F);C.delete("while"),C.delete("for"),C.delete("if"),e.uniforms.forEach((F,N)=>i.uniforms.set(s+N.charAt(0).toUpperCase()+N.slice(1),F)),e.defines.forEach((F,N)=>i.defines.set(s+N.charAt(0).toUpperCase()+N.slice(1),F));const M=new Map([["fragment",r],["vertex",l]]);D_(s,C,i.defines),D_(s,C,M),r=M.get("fragment"),l=M.get("vertex");const S=e.blendMode;if(i.blendModes.set(S.blendFunction,S),c){e.inputColorSpace!==null&&e.inputColorSpace!==i.colorSpace&&(v+=e.inputColorSpace===kt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ii?i.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(i.colorSpace=e.inputColorSpace);const F=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;v+=`${s}MainImage(color0, UV, `,(i.attributes&ws.DEPTH)!==0&&F.test(r)&&(v+="depth, ",i.readDepth=!0),v+=`color1);
	`;const N=s+"BlendOpacity";i.uniforms.set(N,S.opacity),v+=`color0 = blend${S.blendFunction}(color0, color1, ${N});

	`,m+=`uniform float ${N};

`}if(m+=r+`
`,l!==null&&(x+=l+`
`),p.set(Lt.FRAGMENT_HEAD,m),p.set(Lt.FRAGMENT_MAIN_UV,g),p.set(Lt.FRAGMENT_MAIN_IMAGE,v),p.set(Lt.VERTEX_HEAD,x),p.set(Lt.VERTEX_MAIN_SUPPORT,y),e.extensions!==null)for(const F of e.extensions)i.extensions.add(F)}}var lR=class extends Li{constructor(s,...e){super("EffectPass"),this.fullscreenMaterial=new rR(null,null,null,s),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(s){for(const e of this.effects)e.mainScene=s}set mainCamera(s){this.fullscreenMaterial.copyCameraSettings(s);for(const e of this.effects)e.mainCamera=s}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(s){this.fullscreenMaterial.encodeOutput=s}get dithering(){return this.fullscreenMaterial.dithering}set dithering(s){const e=this.fullscreenMaterial;e.dithering=s,e.needsUpdate=!0}setEffects(s){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=s.sort((e,i)=>i.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const s=new a1;let e=0;for(const h of this.effects)if(h.blendMode.blendFunction===yt.DST)s.attributes|=h.getAttributes()&ws.DEPTH;else{if((s.attributes&h.getAttributes()&ws.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${h.name})`);oR("e"+e++,h,s)}let i=s.shaderParts.get(Lt.FRAGMENT_HEAD),r=s.shaderParts.get(Lt.FRAGMENT_MAIN_IMAGE),l=s.shaderParts.get(Lt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const h of s.blendModes.values())i+=h.getShaderCode().replace(c,`blend${h.blendFunction}`)+`
`;(s.attributes&ws.DEPTH)!==0?(s.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,s.colorSpace===kt&&(r+=`color0 = sRGBToLinear(color0);
	`),s.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,s.defines.set("UV","transformedUv")):s.defines.set("UV","vUv"),s.shaderParts.set(Lt.FRAGMENT_HEAD,i),s.shaderParts.set(Lt.FRAGMENT_MAIN_IMAGE,r),s.shaderParts.set(Lt.FRAGMENT_MAIN_UV,l);for(const[h,d]of s.shaderParts)d!==null&&s.shaderParts.set(h,d.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(s)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(s,e=qo){this.fullscreenMaterial.depthBuffer=s,this.fullscreenMaterial.depthPacking=e;for(const i of this.effects)i.setDepthTexture(s,e)}render(s,e,i,r,l){for(const c of this.effects)c.update(s,e,r);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=r*this.timeScale,s.setRenderTarget(this.renderToScreen?null:i),s.render(this.scene,this.camera)}}setSize(s,e){this.fullscreenMaterial.setSize(s,e);for(const i of this.effects)i.setSize(s,e)}initialize(s,e,i){this.renderer=s;for(const r of this.effects)r.initialize(s,e,i);this.updateMaterial(),i!==void 0&&i!==On&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const s of this.effects)s.removeEventListener("change",this.listener),s.dispose()}handleEvent(s){switch(s.type){case"change":this.recompile();break}}};const zh={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:16777215,brokenLines:16777215,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}},cR=({effectOptions:s=zh})=>{const e=Ho.useRef(null),i=Ho.useRef(null);return Ho.useEffect(()=>{if(i.current){i.current.dispose(),i.current=null;const I=e.current;if(I)for(;I.firstChild;)I.removeChild(I.firstChild)}const r={uFreq:{value:new q(3,6,10)},uAmp:{value:new q(30,30,20)}},l={uFreq:{value:new Fe(5,2)},uAmp:{value:new Fe(25,15)}},c={uFreq:{value:new Fe(2,3)},uAmp:{value:new Fe(35,10)}},h={uFreq:{value:new Zt(4,8,8,1)},uAmp:{value:new Zt(25,5,10,10)}},d={uFreq:{value:new Fe(4,8)},uAmp:{value:new Fe(10,20)},uPowY:{value:new Fe(20,2)}},p=I=>Math.sin(I)*.5+.5,m={mountainDistortion:{uniforms:r,getDistortion:`
          uniform vec3 uAmp;
          uniform vec3 uFreq;
          #define PI 3.14159265358979
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
              nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
            );
          }
        `,getJS:(I,D)=>{const ee=r.uFreq.value,R=r.uAmp.value,Z=new q(Math.cos(I*Math.PI*ee.x+D)*R.x-Math.cos(.02*Math.PI*ee.x+D)*R.x,p(I*Math.PI*ee.y+D)*R.y-p(.02*Math.PI*ee.y+D)*R.y,p(I*Math.PI*ee.z+D)*R.z-p(.02*Math.PI*ee.z+D)*R.z),ue=new q(2,2,2),V=new q(0,0,-5);return Z.multiply(ue).add(V)}},xyDistortion:{uniforms:l,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(I,D)=>{const ee=l.uFreq.value,R=l.uAmp.value,Z=new q(Math.cos(I*Math.PI*ee.x+D)*R.x-Math.cos(.02*Math.PI*ee.x+D)*R.x,Math.sin(I*Math.PI*ee.y+D+Math.PI/2)*R.y-Math.sin(.02*Math.PI*ee.y+D+Math.PI/2)*R.y,0),ue=new q(2,.4,1),V=new q(0,0,-3);return Z.multiply(ue).add(V)}},LongRaceDistortion:{uniforms:c,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float camProgress = 0.0125;
            return vec3( 
              sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(I,D)=>{const ee=c.uFreq.value,R=c.uAmp.value,Z=new q(Math.sin(I*Math.PI*ee.x+D)*R.x-Math.sin(.0125*Math.PI*ee.x+D)*R.x,Math.sin(I*Math.PI*ee.y+D)*R.y-Math.sin(.0125*Math.PI*ee.y+D)*R.y,0),ue=new q(1,1,0),V=new q(0,0,-5);return Z.multiply(ue).add(V)}},turbulentDistortion:{uniforms:h,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r + uTime) * uAmp.r +
              pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.0125),
              getDistortionY(progress) - getDistortionY(0.0125),
              0.
            );
          }
        `,getJS:(I,D)=>{const $=h.uFreq.value,ee=h.uAmp.value,R=pe=>Math.cos(Math.PI*pe*$.x+D)*ee.x+Math.pow(Math.cos(Math.PI*pe*$.y+D*($.y/$.x)),2)*ee.y,Z=pe=>-p(Math.PI*pe*$.z+D)*ee.z-Math.pow(p(Math.PI*pe*$.w+D/($.z/$.w)),5)*ee.w,ue=new q(R(I)-R(I+.007),Z(I)-Z(I+.007),0),V=new q(-2,-5,0),oe=new q(0,0,-10);return ue.multiply(V).add(oe)}},turbulentDistortionStill:{uniforms:h,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r) * uAmp.r +
              pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `},deepDistortionStill:{uniforms:d,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x) * uAmp.x * 2.
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.05),
              0.
            );
          }
        `},deepDistortion:{uniforms:d,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x + uTime) * uAmp.x
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `,getJS:(I,D)=>{const $=d.uFreq.value,ee=d.uAmp.value,R=d.uPowY.value,Z=ve=>Math.sin(ve*Math.PI*$.x+D)*ee.x,ue=ve=>Math.pow(ve*R.x,R.y)+Math.sin(ve*Math.PI*$.y+D)*ee.y,V=new q(Z(I)-Z(I+.01),ue(I)-ue(I+.01),0),oe=new q(-2,-4,0),pe=new q(0,0,-10);return V.multiply(oe).add(pe)}}},g={uDistortionX:{value:new Fe(80,3)},uDistortionY:{value:new Fe(-40,2.5)}},v=`
      #define PI 3.14159265358979
      uniform vec2 uDistortionX;
      uniform vec2 uDistortionY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      vec3 getDistortion(float progress){
        progress = clamp(progress, 0., 1.);
        float xAmp = uDistortionX.r;
        float xFreq = uDistortionX.g;
        float yAmp = uDistortionY.r;
        float yFreq = uDistortionY.g;
        return vec3( 
          xAmp * nsin(progress * PI * xFreq - PI / 2.),
          yAmp * nsin(progress * PI * yFreq - PI / 2.),
          0.
        );
      }
    `,x=I=>Array.isArray(I)?Math.random()*(I[1]-I[0])+I[0]:Math.random()*I,y=I=>Array.isArray(I)?I[Math.floor(Math.random()*I.length)]:I;function E(I,D,$=.1,ee=.001){let R=(D-I)*$;return Math.abs(R)<ee&&(R=D-I),R}const C=`
      #define USE_FOG;
      ${Qe.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${Qe.fog_fragment}
      }
    `,M=`
      #define USE_FOG;
      ${Qe.fog_pars_vertex}
      attribute vec3 aOffset;
      attribute vec3 aMetrics;
      attribute vec3 aColor;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec2 vUv; 
      varying vec3 vColor; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float myLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= myLength;

        transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${Qe.fog_vertex}
      }
    `,S=`
      #define USE_FOG;
      ${Qe.fog_pars_vertex}
      attribute float aOffset;
      attribute vec3 aColor;
      attribute vec2 aMetrics;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec3 vColor;
      mat4 rotationY( in float angle ) {
        return mat4(	cos(angle),		0,		sin(angle),	0,
                     0,		1.0,			 0,	0,
                -sin(angle),	0,		cos(angle),	0,
                0, 		0,				0,	1);
      }
      #include <getDistortion_vertex>
      void main(){
        vec3 transformed = position.xyz;
        float width = aMetrics.x;
        float height = aMetrics.y;

        transformed.xy *= vec2(width, height);
        float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

        transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;

        transformed.z += - uTravelLength + time;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += height / 2.;
        transformed.x += -width / 2.;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${Qe.fog_vertex}
      }
    `,F=`
      #define USE_FOG;
      ${Qe.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${Qe.fog_fragment}
      }
    `,N=`
      uniform float uLanes;
      uniform vec3 uBrokenLinesColor;
      uniform vec3 uShoulderLinesColor;
      uniform float uShoulderLinesWidthPercentage;
      uniform float uBrokenLinesWidthPercentage;
      uniform float uBrokenLinesLengthPercentage;
      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }
    `,U=`
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
      color = mix(color, uBrokenLinesColor, brokenLines);
      color = mix(color, uShoulderLinesColor, sideLines);
    `,J=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${Qe.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${Qe.fog_fragment}
      }
    `,k=J.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),z=J.replace("#include <roadMarkings_fragment>",U).replace("#include <roadMarkings_vars>",N),K=`
      #define USE_FOG;
      uniform float uTime;
      ${Qe.fog_pars_vertex}
      uniform float uTravelLength;
      varying vec2 vUv; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;  
        
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${Qe.fog_vertex}
      }
    `;function L(I,D){const $=I.domElement,ee=I.getPixelRatio(),R=Math.max(1,Math.floor($.clientWidth*ee)),Z=Math.max(1,Math.floor($.clientHeight*ee));if($.clientWidth<=0||$.clientHeight<=0)return!1;const ue=$.width!==R||$.height!==Z;return ue&&D($.clientWidth,$.clientHeight,!1),ue}class w{constructor(D,$,ee,R,Z){this.webgl=D,this.options=$,this.colors=ee,this.speed=R,this.fade=Z}init(){const D=this.options,$=new a0(new q(0,0,0),new q(0,0,-1)),ee=new Bd($,40,1,8,!1),R=new t_().copy(ee);R.instanceCount=D.lightPairsPerRoadWay*2;const Z=D.roadWidth/D.lanesPerRoad,ue=[],V=[],oe=[];let pe=this.colors;Array.isArray(pe)?pe=pe.map(Re=>new gt(Re)):pe=new gt(pe);for(let Re=0;Re<D.lightPairsPerRoadWay;Re++){const $e=x(D.carLightsRadius),At=x(D.carLightsLength),st=x(this.speed);let H=Re%D.lanesPerRoad*Z-D.roadWidth/2+Z/2;const fn=x(D.carWidthPercentage)*Z,ft=x(D.carShiftX)*Z;H+=ft;const ht=x(D.carFloorSeparation)+$e*1.3,ke=-x(D.length);ue.push(H-fn/2),ue.push(ht),ue.push(ke),ue.push(H+fn/2),ue.push(ht),ue.push(ke),V.push($e),V.push(At),V.push(st),V.push($e),V.push(At),V.push(st);const vt=y(pe);oe.push(vt.r),oe.push(vt.g),oe.push(vt.b),oe.push(vt.r),oe.push(vt.g),oe.push(vt.b)}R.setAttribute("aOffset",new br(new Float32Array(ue),3,!1)),R.setAttribute("aMetrics",new br(new Float32Array(V),3,!1)),R.setAttribute("aColor",new br(new Float32Array(oe),3,!1));const ve=new yn({fragmentShader:C,vertexShader:M,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:D.length},uFade:{value:this.fade}},this.webgl.fogUniforms,D.distortion.uniforms)});ve.onBeforeCompile=Re=>{Re.vertexShader=Re.vertexShader.replace("#include <getDistortion_vertex>",D.distortion.getDistortion)};const Pe=new li(R,ve);Pe.frustumCulled=!1,this.webgl.scene.add(Pe),this.mesh=Pe}update(D){this.mesh.material.uniforms.uTime.value=D}}class X{constructor(D,$){this.webgl=D,this.options=$}init(){const D=this.options,$=new zr(1,1),ee=new t_().copy($),R=D.totalSideLightSticks;ee.instanceCount=R;const Z=D.length/(R-1),ue=[],V=[],oe=[];let pe=D.colors.sticks;Array.isArray(pe)?pe=pe.map(Re=>new gt(Re)):pe=new gt(pe);for(let Re=0;Re<R;Re++){const $e=x(D.lightStickWidth),At=x(D.lightStickHeight);ue.push((Re-1)*Z*2+Z*Math.random());const st=y(pe);V.push(st.r),V.push(st.g),V.push(st.b),oe.push($e),oe.push(At)}ee.setAttribute("aOffset",new br(new Float32Array(ue),1,!1)),ee.setAttribute("aColor",new br(new Float32Array(V),3,!1)),ee.setAttribute("aMetrics",new br(new Float32Array(oe),2,!1));const ve=new yn({fragmentShader:F,vertexShader:S,side:Hn,uniforms:Object.assign({uTravelLength:{value:D.length},uTime:{value:0}},this.webgl.fogUniforms,D.distortion.uniforms)});ve.onBeforeCompile=Re=>{Re.vertexShader=Re.vertexShader.replace("#include <getDistortion_vertex>",D.distortion.getDistortion)};const Pe=new li(ee,ve);Pe.frustumCulled=!1,this.webgl.scene.add(Pe),this.mesh=Pe}update(D){this.mesh.material.uniforms.uTime.value=D}}class he{constructor(D,$){this.webgl=D,this.options=$,this.uTime={value:0}}createPlane(D,$,ee){const R=this.options,Z=100,ue=new zr(ee?R.roadWidth:R.islandWidth,R.length,20,Z);let V={uTravelLength:{value:R.length},uColor:{value:new gt(ee?R.colors.roadColor:R.colors.islandColor)},uTime:this.uTime};ee&&(V=Object.assign(V,{uLanes:{value:R.lanesPerRoad},uBrokenLinesColor:{value:new gt(R.colors.brokenLines)},uShoulderLinesColor:{value:new gt(R.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:R.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:R.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:R.brokenLinesWidthPercentage}}));const oe=new yn({fragmentShader:ee?z:k,vertexShader:K,side:Hn,uniforms:Object.assign(V,this.webgl.fogUniforms,R.distortion.uniforms)});oe.onBeforeCompile=ve=>{ve.vertexShader=ve.vertexShader.replace("#include <getDistortion_vertex>",R.distortion.getDistortion)};const pe=new li(ue,oe);return pe.rotation.x=-Math.PI/2,pe.position.z=-R.length/2,pe.position.x+=(this.options.islandWidth/2+R.roadWidth/2)*D,this.webgl.scene.add(pe),pe}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(D){this.uTime.value=D}}class ce{constructor(D,$={}){this.options=$,this.options.distortion==null&&(this.options.distortion={uniforms:g,getDistortion:v}),this.container=D,this.hasValidSize=!1;const ee=Math.max(1,D.offsetWidth),R=Math.max(1,D.offsetHeight);this.renderer=new ZA({antialias:!1,alpha:!0}),this.renderer.setSize(ee,R,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.composer=new i1(this.renderer),D.append(this.renderer.domElement),this.camera=new oi($.fov,ee/R,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new Ed,this.scene.background=null;const Z=new Od($.colors.background,$.length*.2,$.length*500);this.scene.fog=Z,this.fogUniforms={fogColor:{value:Z.color},fogNear:{value:Z.near},fogFar:{value:Z.far}},this.clock=new hM,this.assets={},this.disposed=!1,this.rafId=null,this.road=new he(this,$),this.leftCarLights=new w(this,$,$.colors.leftCars,$.movingAwaySpeed,new Fe(0,1-$.carLightsFade)),this.rightCarLights=new w(this,$,$.colors.rightCars,$.movingCloserSpeed,new Fe(1,0+$.carLightsFade)),this.leftSticks=new X(this,$),this.fovTarget=$.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize),D.offsetWidth>0&&D.offsetHeight>0&&(this.hasValidSize=!0)}onWindowResize(){const D=this.container.offsetWidth,$=this.container.offsetHeight;if(D<=0||$<=0){this.hasValidSize=!1;return}this.renderer.setSize(D,$),this.camera.aspect=D/$,this.camera.updateProjectionMatrix(),this.composer.setSize(D,$),this.hasValidSize=!0}initPasses(){this.renderPass=new iR(this.scene,this.camera),this.bloomPass=new lR(this.camera,new nR({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1})),this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass)}init(){if(this.disposed)return;this.initPasses();const D=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-D.roadWidth/2-D.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(D.roadWidth/2+D.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(D.roadWidth+D.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(D){this.options.onSpeedUp&&this.options.onSpeedUp(D),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(D){this.options.onSlowDown&&this.options.onSlowDown(D),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(D){this.options.onSpeedUp&&this.options.onSpeedUp(D),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(D){this.options.onSlowDown&&this.options.onSlowDown(D),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(D){D.preventDefault()}update(D){const $=Math.exp(-(-60*Math.log2(.9))*D);this.speedUp+=E(this.speedUp,this.speedUpTarget,$,1e-5),this.timeOffset+=this.speedUp*D;const ee=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(ee),this.leftCarLights.update(ee),this.leftSticks.update(ee),this.road.update(ee);let R=!1;const Z=E(this.camera.fov,this.fovTarget,$);if(Z!==0&&(this.camera.fov+=Z*D*6,R=!0),this.options.distortion.getJS){const ue=this.options.distortion.getJS(.025,ee);this.camera.lookAt(new q(this.camera.position.x+ue.x,this.camera.position.y+ue.y,this.camera.position.z+ue.z)),R=!0}R&&this.camera.updateProjectionMatrix()}render(D){this.disposed||!this.composer||this.composer.render(D)}dispose(){var D,$;if(this.disposed=!0,this.rafId!=null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.scene&&(this.scene.traverse(ee=>{ee.isMesh&&(ee.geometry&&ee.geometry.dispose(),ee.material&&(Array.isArray(ee.material)?ee.material.forEach(R=>R.dispose()):ee.material.dispose()))}),this.scene.clear()),this.composer&&(this.composer.dispose(),this.composer=null),this.renderer){this.renderer.dispose();const ee=($=(D=this.renderer.getContext())==null?void 0:D.getExtension)==null?void 0:$.call(D,"WEBGL_lose_context");ee==null||ee.loseContext(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),this.renderer=null}window.removeEventListener("resize",this.onWindowResize),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(D,$,ee){if(D<=0||$<=0){this.hasValidSize=!1;return}this.composer.setSize(D,$,ee),this.hasValidSize=!0}tick(){if(!(this.disposed||!this.renderer||!this.composer)){if(!this.hasValidSize){const D=this.container.offsetWidth,$=this.container.offsetHeight;if(D>0&&$>0)this.renderer.setSize(D,$,!1),this.camera.aspect=D/$,this.camera.updateProjectionMatrix(),this.composer.setSize(D,$),this.hasValidSize=!0;else{this.rafId=requestAnimationFrame(this.tick);return}}if(L(this.renderer,this.setSize)){const D=this.renderer.domElement;this.hasValidSize&&(this.camera.aspect=D.clientWidth/D.clientHeight,this.camera.updateProjectionMatrix())}if(this.hasValidSize){const D=this.clock.getDelta();this.render(D),this.update(D)}this.rafId=requestAnimationFrame(this.tick)}}}const ye=e.current;if(!ye)return;const _e={...zh,...s,colors:{...zh.colors,...s.colors}};_e.distortion=m[_e.distortion]||m.turbulentDistortion;const P=new ce(ye,_e);return i.current=P,!P.disposed&&i.current===P&&P.init(),()=>{i.current&&(i.current.dispose(),i.current=null)}},[s]),Ee.jsx("div",{id:"lights",ref:e})},uR={one:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}}},fR=uR.one;function hR(){return Ho.useEffect(()=>{const s=e=>{document.documentElement.style.setProperty("--mx",`${e.clientX}px`),document.documentElement.style.setProperty("--my",`${e.clientY}px`)};return window.addEventListener("pointermove",s,{passive:!0}),()=>window.removeEventListener("pointermove",s)},[]),Ee.jsxs("div",{className:"app",children:[Ee.jsx("div",{className:"fx-grain","aria-hidden":"true"}),Ee.jsx("div",{className:"fx-vignette","aria-hidden":"true"}),Ee.jsx("div",{className:"fx-scan","aria-hidden":"true"}),Ee.jsx("div",{className:"cursor-glow","aria-hidden":"true"}),Ee.jsxs("div",{className:"hero-photo","aria-hidden":"true",children:[Ee.jsx("img",{src:"/lidia-hero.png",alt:"",className:"hero-photo-img",width:900,height:1200,decoding:"async"}),Ee.jsx("div",{className:"hero-photo-shade"})]}),Ee.jsx("div",{className:"hyperspeed-stage","aria-hidden":"true",children:Ee.jsx(Dx,{children:Ee.jsx(cR,{effectOptions:fR})})}),Ee.jsx("div",{className:"hyperspeed-veil","aria-hidden":"true"}),Ee.jsxs("div",{className:"page",children:[Ee.jsx("header",{className:"hero",children:Ee.jsxs("div",{className:"hero-copy",children:[Ee.jsx("p",{className:"role reveal",style:{"--d":"0ms"},children:"Вайб‑кодер · ИИ‑проекты"}),Ee.jsx("h1",{className:"reveal glitch-title",style:{"--d":"80ms"},"data-text":"Титова Лидия",children:"Титова Лидия"}),Ee.jsx("span",{className:"name-line reveal",style:{"--d":"160ms"},"aria-hidden":"true"}),Ee.jsx("p",{className:"tagline reveal",style:{"--d":"220ms"},children:"Вайб‑кодер: ставлю задачу, получаю решение. Оптимизирую промпты, ускоряю разработку."}),Ee.jsx("p",{className:"lede reveal",style:{"--d":"300ms"},children:"Выпускник школы Нейросетей и СММ Ксении Барановой. Создаю сайты, ботов и digital‑проекты с помощью ИИ."}),Ee.jsxs("div",{className:"cta-row reveal",style:{"--d":"380ms"},children:[Ee.jsx("a",{className:"btn",href:"#contacts",children:"Связаться"}),Ee.jsx("a",{className:"btn btn-ghost",href:"#projects",children:"Проекты"})]}),Ee.jsx("p",{className:"hint reveal",style:{"--d":"460ms"},children:"Зажмите мышь или тап — ускорение"})]})}),Ee.jsxs("section",{id:"about","aria-labelledby":"about-title",children:[Ee.jsx("p",{className:"section-label",children:"// для кого"}),Ee.jsx("h2",{id:"about-title",children:"Бизнесу и экспертам"}),Ee.jsx("p",{className:"section-lead",children:"Помогаю запускать сайты, ботов и автоматизации — от идеи до рабочего digital‑продукта."})]}),Ee.jsxs("section",{id:"skills","aria-labelledby":"skills-title",children:[Ee.jsx("p",{className:"section-label",children:"// навыки"}),Ee.jsx("h2",{id:"skills-title",children:"Что умею"}),Ee.jsx("p",{className:"section-lead",children:"Интерфейсы, логика и ИИ — в одном контуре разработки."}),Ee.jsxs("div",{className:"skills",children:[Ee.jsxs("article",{className:"skill",children:[Ee.jsxs("svg",{className:"skill-icon",viewBox:"0 0 40 40",fill:"none","aria-hidden":"true",children:[Ee.jsx("rect",{x:"4",y:"6",width:"32",height:"24",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),Ee.jsx("path",{d:"M10 14h8M10 19h14M10 24h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square"}),Ee.jsx("path",{d:"M28 30v4M16 34h16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square"})]}),Ee.jsxs("div",{children:[Ee.jsx("h3",{children:"Сайты"}),Ee.jsx("p",{children:"Одностраничники и магазины под задачи бизнеса"})]})]}),Ee.jsxs("article",{className:"skill",children:[Ee.jsxs("svg",{className:"skill-icon",viewBox:"0 0 40 40",fill:"none","aria-hidden":"true",children:[Ee.jsx("path",{d:"M20 6 L34 30 H6 Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),Ee.jsx("path",{d:"M20 16v8M16 22h8",stroke:"currentColor",strokeWidth:"1.5"})]}),Ee.jsxs("div",{children:[Ee.jsx("h3",{children:"Боты"}),Ee.jsx("p",{children:"Telegram / VK / МАКС — консультации и сценарии"})]})]}),Ee.jsxs("article",{className:"skill",children:[Ee.jsxs("svg",{className:"skill-icon",viewBox:"0 0 40 40",fill:"none","aria-hidden":"true",children:[Ee.jsx("circle",{cx:"20",cy:"20",r:"12",stroke:"currentColor",strokeWidth:"1.5"}),Ee.jsx("circle",{cx:"20",cy:"20",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),Ee.jsx("path",{d:"M20 8v3M20 29v3M8 20h3M29 20h3M11.5 11.5l2.1 2.1M26.4 26.4l2.1 2.1M11.5 28.5l2.1-2.1M26.4 13.6l2.1-2.1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),Ee.jsxs("div",{children:[Ee.jsx("h3",{children:"Автоматизация"}),Ee.jsx("p",{children:"Интеграции и логика, которая снимает рутину"})]})]}),Ee.jsxs("article",{className:"skill",children:[Ee.jsxs("svg",{className:"skill-icon",viewBox:"0 0 40 40",fill:"none","aria-hidden":"true",children:[Ee.jsx("path",{d:"M12 28c0-6 3.5-10 8-12 4.5 2 8 6 8 12",stroke:"currentColor",strokeWidth:"1.5"}),Ee.jsx("circle",{cx:"20",cy:"14",r:"5",stroke:"currentColor",strokeWidth:"1.5"}),Ee.jsx("path",{d:"M14 22h12M16 26h8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),Ee.jsx("path",{d:"M8 18c2-1 3 0 4 2M32 18c-2-1-3 0-4 2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),Ee.jsxs("div",{children:[Ee.jsx("h3",{children:"Промпт‑инжиниринг"}),Ee.jsx("p",{children:"ИИ в интерфейсах и ускорение разработки"})]})]})]})]}),Ee.jsxs("section",{id:"projects","aria-labelledby":"projects-title",children:[Ee.jsx("p",{className:"section-label",children:"// кейсы"}),Ee.jsx("h2",{id:"projects-title",children:"Реализованные проекты"}),Ee.jsx("p",{className:"section-lead",children:"От лендинга до бота — продукты, которые ведут к действию."}),Ee.jsxs("div",{className:"projects",children:[Ee.jsxs("article",{className:"project",children:[Ee.jsx("span",{className:"project-num",children:"01"}),Ee.jsxs("div",{children:[Ee.jsx("h3",{children:"Одностраничный сайт услуг"}),Ee.jsx("p",{children:"Знакомит с услугами и даёт записаться онлайн — короткий путь от интереса к заявке."})]})]}),Ee.jsxs("article",{className:"project",children:[Ee.jsx("span",{className:"project-num",children:"02"}),Ee.jsxs("div",{children:[Ee.jsx("h3",{children:"Сайт‑магазин"}),Ee.jsx("p",{children:"Помогает выбрать товар и быстро связаться с менеджером без лишних шагов."})]})]}),Ee.jsxs("article",{className:"project",children:[Ee.jsx("span",{className:"project-num",children:"03"}),Ee.jsxs("div",{children:[Ee.jsx("h3",{children:"Бот‑консультант Telegram и МАКС"}),Ee.jsx("p",{children:"Отвечает на типовые вопросы и ведёт диалог в мессенджерах, где уже есть клиенты."})]})]})]})]}),Ee.jsxs("section",{id:"contacts",className:"contacts-block","aria-labelledby":"contacts-title",children:[Ee.jsx("p",{className:"section-label",children:"// связь"}),Ee.jsx("h2",{id:"contacts-title",children:"Контакты"}),Ee.jsx("p",{className:"section-lead",children:"Напишите — обсудим задачу и формат запуска."}),Ee.jsxs("div",{className:"contacts",children:[Ee.jsxs("a",{className:"contact",href:"mailto:tit.lidiya@gmail.com",children:[Ee.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[Ee.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),Ee.jsx("path",{d:"M3.5 7.5 L12 13 L20.5 7.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),"tit.lidiya@gmail.com"]}),Ee.jsxs("a",{className:"contact",href:"https://vk.ru/id47018858",target:"_blank",rel:"noopener noreferrer",children:[Ee.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:Ee.jsx("path",{d:"M3.5 7.5h2.2c.3 0 .5.2.6.5 0 0 .9 2.6 2.4 4.3.3.3.7.3.9 0 .4-.5.4-4.3.4-4.3 0-.4.2-.5.6-.5H14c.3 0 .5.2.5.5v.8c0 .3.2.5.5.5.4 0 .9-.1 1.5-.7.9-.9 1.6-2.1 1.9-2.5.1-.2.3-.3.5-.3h2.1c.5 0 .7.4.5.8-.5 1.1-2.1 3.3-2.1 3.3-.2.3-.2.5 0 .8 0 0 1.9 2.4 2.5 3.2.3.4.1.8-.4.8h-2.2c-.3 0-.5-.1-.7-.4-.4-.5-1.5-1.9-1.6-2-.2-.3-.4-.3-.7 0-.3.3-1.1 1.2-1.7 1.9-.3.3-.6.5-1 .5H9.6c-1.8 0-3.7-1.7-5.4-4.7C2.7 9.6 3 7.5 3.5 7.5Z",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"})}),"vk.ru/id47018858"]})]})]}),Ee.jsx("footer",{children:Ee.jsx("p",{children:"Титова Лидия · код как арт · 2026"})})]})]})}const Bh=document.getElementById("root");if(Bh)try{wx.createRoot(Bh).render(Ee.jsx(hR,{}))}catch(s){Bh.innerHTML=`
      <div style="min-height:100vh;padding:2rem;background:#050505;color:#e8eef5;font-family:monospace">
        <h1 style="font-size:1.4rem;margin:0 0 1rem">Ошибка загрузки визитки</h1>
        <p>Запустите проект через <code>start.bat</code> или <code>npm start</code>.</p>
        <pre style="opacity:.7;margin-top:1rem;white-space:pre-wrap">${String(s)}</pre>
      </div>
    `}
