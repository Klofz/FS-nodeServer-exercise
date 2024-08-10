"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncDelegator = (this && this.__asyncDelegator) || function (o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
};
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var rm = e => { throw TypeError(e); };
var Yc = (e, t, n) => t.has(e) || rm("Cannot " + n);
var N = (e, t, n) => (Yc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), re = (e, t, n) => t.has(e) ? rm("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), H = (e, t, n, r) => (Yc(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ue = (e, t, n) => (Yc(e, t, "access private method"), n);
var ca = (e, t, n, r) => ({ set _(o) { H(e, t, o, n); }, get _() { return N(e, t, r); } });
function vE(e, t) { for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
        for (const o in r)
            if (o !== "default" && !(o in e)) {
                const i = Object.getOwnPropertyDescriptor(r, o);
                i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
            }
    }
} return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })); }
(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload"))
    return; for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    r(o); new MutationObserver(o => { for (const i of o)
    if (i.type === "childList")
        for (const s of i.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s); }).observe(document, { childList: !0, subtree: !0 }); function n(o) { const i = {}; return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i; } function r(o) { if (o.ep)
    return; o.ep = !0; const i = n(o); fetch(o.href, i); } })();
function Hf(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var Wg = { exports: {} }, zl = {}, Kg = { exports: {} }, le = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vs = Symbol.for("react.element"), gE = Symbol.for("react.portal"), yE = Symbol.for("react.fragment"), xE = Symbol.for("react.strict_mode"), wE = Symbol.for("react.profiler"), SE = Symbol.for("react.provider"), CE = Symbol.for("react.context"), EE = Symbol.for("react.forward_ref"), bE = Symbol.for("react.suspense"), PE = Symbol.for("react.memo"), RE = Symbol.for("react.lazy"), om = Symbol.iterator;
function NE(e) { return e === null || typeof e != "object" ? null : (e = om && e[om] || e["@@iterator"], typeof e == "function" ? e : null); }
var Gg = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, Qg = Object.assign, qg = {};
function ci(e, t, n) { this.props = e, this.context = t, this.refs = qg, this.updater = n || Gg; }
ci.prototype.isReactComponent = {};
ci.prototype.setState = function (e, t) { if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); };
ci.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
function Yg() { }
Yg.prototype = ci.prototype;
function Wf(e, t, n) { this.props = e, this.context = t, this.refs = qg, this.updater = n || Gg; }
var Kf = Wf.prototype = new Yg;
Kf.constructor = Wf;
Qg(Kf, ci.prototype);
Kf.isPureReactComponent = !0;
var im = Array.isArray, Xg = Object.prototype.hasOwnProperty, Gf = { current: null }, Jg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zg(e, t, n) { var r, o = {}, i = null, s = null; if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)
        Xg.call(t, r) && !Jg.hasOwnProperty(r) && (o[r] = t[r]); var a = arguments.length - 2; if (a === 1)
    o.children = n;
else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++)
        l[c] = arguments[c + 2];
    o.children = l;
} if (e && e.defaultProps)
    for (r in a = e.defaultProps, a)
        o[r] === void 0 && (o[r] = a[r]); return { $$typeof: Vs, type: e, key: i, ref: s, props: o, _owner: Gf.current }; }
function kE(e, t) { return { $$typeof: Vs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }
function Qf(e) { return typeof e == "object" && e !== null && e.$$typeof === Vs; }
function TE(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (n) { return t[n]; }); }
var sm = /\/+/g;
function Xc(e, t) { return typeof e == "object" && e !== null && e.key != null ? TE("" + e.key) : t.toString(36); }
function $a(e, t, n, r, o) { var i = typeof e; (i === "undefined" || i === "boolean") && (e = null); var s = !1; if (e === null)
    s = !0;
else
    switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object": switch (e.$$typeof) {
            case Vs:
            case gE: s = !0;
        }
    } if (s)
    return s = e, o = o(s), e = r === "" ? "." + Xc(s, 0) : r, im(o) ? (n = "", e != null && (n = e.replace(sm, "$&/") + "/"), $a(o, t, n, "", function (c) { return c; })) : o != null && (Qf(o) && (o = kE(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(sm, "$&/") + "/") + e)), t.push(o)), 1; if (s = 0, r = r === "" ? "." : r + ":", im(e))
    for (var a = 0; a < e.length; a++) {
        i = e[a];
        var l = r + Xc(i, a);
        s += $a(i, t, n, l, o);
    }
else if (l = NE(e), typeof l == "function")
    for (e = l.call(e), a = 0; !(i = e.next()).done;)
        i = i.value, l = r + Xc(i, a++), s += $a(i, t, n, l, o);
else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return s; }
function ua(e, t, n) { if (e == null)
    return e; var r = [], o = 0; return $a(e, r, "", "", function (i) { return t.call(n, i, o++); }), r; }
function OE(e) { if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n); }, function (n) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n); }), e._status === -1 && (e._status = 0, e._result = t);
} if (e._status === 1)
    return e._result.default; throw e._result; }
var it = { current: null }, Fa = { transition: null }, jE = { ReactCurrentDispatcher: it, ReactCurrentBatchConfig: Fa, ReactCurrentOwner: Gf };
function ey() { throw Error("act(...) is not supported in production builds of React."); }
le.Children = { map: ua, forEach: function (e, t, n) { ua(e, function () { t.apply(this, arguments); }, n); }, count: function (e) { var t = 0; return ua(e, function () { t++; }), t; }, toArray: function (e) { return ua(e, function (t) { return t; }) || []; }, only: function (e) { if (!Qf(e))
        throw Error("React.Children.only expected to receive a single React element child."); return e; } };
le.Component = ci;
le.Fragment = yE;
le.Profiler = wE;
le.PureComponent = Wf;
le.StrictMode = xE;
le.Suspense = bE;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jE;
le.act = ey;
le.cloneElement = function (e, t, n) { if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = Qg({}, e.props), o = e.key, i = e.ref, s = e._owner; if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Gf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
        var a = e.type.defaultProps;
    for (l in t)
        Xg.call(t, l) && !Jg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
} var l = arguments.length - 2; if (l === 1)
    r.children = n;
else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++)
        a[c] = arguments[c + 2];
    r.children = a;
} return { $$typeof: Vs, type: e.type, key: o, ref: i, props: r, _owner: s }; };
le.createContext = function (e) { return e = { $$typeof: CE, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: SE, _context: e }, e.Consumer = e; };
le.createElement = Zg;
le.createFactory = function (e) { var t = Zg.bind(null, e); return t.type = e, t; };
le.createRef = function () { return { current: null }; };
le.forwardRef = function (e) { return { $$typeof: EE, render: e }; };
le.isValidElement = Qf;
le.lazy = function (e) { return { $$typeof: RE, _payload: { _status: -1, _result: e }, _init: OE }; };
le.memo = function (e, t) { return { $$typeof: PE, type: e, compare: t === void 0 ? null : t }; };
le.startTransition = function (e) { var t = Fa.transition; Fa.transition = {}; try {
    e();
}
finally {
    Fa.transition = t;
} };
le.unstable_act = ey;
le.useCallback = function (e, t) { return it.current.useCallback(e, t); };
le.useContext = function (e) { return it.current.useContext(e); };
le.useDebugValue = function () { };
le.useDeferredValue = function (e) { return it.current.useDeferredValue(e); };
le.useEffect = function (e, t) { return it.current.useEffect(e, t); };
le.useId = function () { return it.current.useId(); };
le.useImperativeHandle = function (e, t, n) { return it.current.useImperativeHandle(e, t, n); };
le.useInsertionEffect = function (e, t) { return it.current.useInsertionEffect(e, t); };
le.useLayoutEffect = function (e, t) { return it.current.useLayoutEffect(e, t); };
le.useMemo = function (e, t) { return it.current.useMemo(e, t); };
le.useReducer = function (e, t, n) { return it.current.useReducer(e, t, n); };
le.useRef = function (e) { return it.current.useRef(e); };
le.useState = function (e) { return it.current.useState(e); };
le.useSyncExternalStore = function (e, t, n) { return it.current.useSyncExternalStore(e, t, n); };
le.useTransition = function () { return it.current.useTransition(); };
le.version = "18.3.1";
Kg.exports = le;
var u = Kg.exports;
const Me = Hf(u), qf = vE({ __proto__: null, default: Me }, [u]); /**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var AE = u, _E = Symbol.for("react.element"), ME = Symbol.for("react.fragment"), IE = Object.prototype.hasOwnProperty, DE = AE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, LE = { key: !0, ref: !0, __self: !0, __source: !0 };
function ty(e, t, n) { var r, o = {}, i = null, s = null; n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref); for (r in t)
    IE.call(t, r) && !LE.hasOwnProperty(r) && (o[r] = t[r]); if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
        o[r] === void 0 && (o[r] = t[r]); return { $$typeof: _E, type: e, key: i, ref: s, props: o, _owner: DE.current }; }
zl.Fragment = ME;
zl.jsx = ty;
zl.jsxs = ty;
Wg.exports = zl;
var p = Wg.exports, Qu = {}, ny = { exports: {} }, Et = {}, ry = { exports: {} }, oy = {}; /**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function (e) { function t(A, I) { var Q = A.length; A.push(I); e: for (; 0 < Q;) {
    var ee = Q - 1 >>> 1, j = A[ee];
    if (0 < o(j, I))
        A[ee] = I, A[Q] = j, Q = ee;
    else
        break e;
} } function n(A) { return A.length === 0 ? null : A[0]; } function r(A) { if (A.length === 0)
    return null; var I = A[0], Q = A.pop(); if (Q !== I) {
    A[0] = Q;
    e: for (var ee = 0, j = A.length, V = j >>> 1; ee < V;) {
        var q = 2 * (ee + 1) - 1, z = A[q], Y = q + 1, $ = A[Y];
        if (0 > o(z, Q))
            Y < j && 0 > o($, z) ? (A[ee] = $, A[Y] = Q, ee = Y) : (A[ee] = z, A[q] = Q, ee = q);
        else if (Y < j && 0 > o($, Q))
            A[ee] = $, A[Y] = Q, ee = Y;
        else
            break e;
    }
} return I; } function o(A, I) { var Q = A.sortIndex - I.sortIndex; return Q !== 0 ? Q : A.id - I.id; } if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () { return i.now(); };
}
else {
    var s = Date, a = s.now();
    e.unstable_now = function () { return s.now() - a; };
} var l = [], c = [], d = 1, f = null, h = 3, x = !1, y = !1, v = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function w(A) { for (var I = n(c); I !== null;) {
    if (I.callback === null)
        r(c);
    else if (I.startTime <= A)
        r(c), I.sortIndex = I.expirationTime, t(l, I);
    else
        break;
    I = n(c);
} } function C(A) { if (v = !1, w(A), !y)
    if (n(l) !== null)
        y = !0, K(E);
    else {
        var I = n(c);
        I !== null && F(C, I.startTime - A);
    } } function E(A, I) { y = !1, v && (v = !1, m(P), P = -1), x = !0; var Q = h; try {
    for (w(I), f = n(l); f !== null && (!(f.expirationTime > I) || A && !M());) {
        var ee = f.callback;
        if (typeof ee == "function") {
            f.callback = null, h = f.priorityLevel;
            var j = ee(f.expirationTime <= I);
            I = e.unstable_now(), typeof j == "function" ? f.callback = j : f === n(l) && r(l), w(I);
        }
        else
            r(l);
        f = n(l);
    }
    if (f !== null)
        var V = !0;
    else {
        var q = n(c);
        q !== null && F(C, q.startTime - I), V = !1;
    }
    return V;
}
finally {
    f = null, h = Q, x = !1;
} } var R = !1, b = null, P = -1, k = 5, T = -1; function M() { return !(e.unstable_now() - T < k); } function D() { if (b !== null) {
    var A = e.unstable_now();
    T = A;
    var I = !0;
    try {
        I = b(!0, A);
    }
    finally {
        I ? te() : (R = !1, b = null);
    }
}
else
    R = !1; } var te; if (typeof g == "function")
    te = function () { g(D); };
else if (typeof MessageChannel < "u") {
    var G = new MessageChannel, U = G.port2;
    G.port1.onmessage = D, te = function () { U.postMessage(null); };
}
else
    te = function () { S(D, 0); }; function K(A) { b = A, R || (R = !0, te()); } function F(A, I) { P = S(function () { A(e.unstable_now()); }, I); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (A) { A.callback = null; }, e.unstable_continueExecution = function () { y || x || (y = !0, K(E)); }, e.unstable_forceFrameRate = function (A) { 0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < A ? Math.floor(1e3 / A) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return h; }, e.unstable_getFirstCallbackNode = function () { return n(l); }, e.unstable_next = function (A) { switch (h) {
    case 1:
    case 2:
    case 3:
        var I = 3;
        break;
    default: I = h;
} var Q = h; h = I; try {
    return A();
}
finally {
    h = Q;
} }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (A, I) { switch (A) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: A = 3;
} var Q = h; h = A; try {
    return I();
}
finally {
    h = Q;
} }, e.unstable_scheduleCallback = function (A, I, Q) { var ee = e.unstable_now(); switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? ee + Q : ee) : Q = ee, A) {
    case 1:
        var j = -1;
        break;
    case 2:
        j = 250;
        break;
    case 5:
        j = 1073741823;
        break;
    case 4:
        j = 1e4;
        break;
    default: j = 5e3;
} return j = Q + j, A = { id: d++, callback: I, priorityLevel: A, startTime: Q, expirationTime: j, sortIndex: -1 }, Q > ee ? (A.sortIndex = Q, t(c, A), n(l) === null && A === n(c) && (v ? (m(P), P = -1) : v = !0, F(C, Q - ee))) : (A.sortIndex = j, t(l, A), y || x || (y = !0, K(E))), A; }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function (A) { var I = h; return function () { var Q = h; h = I; try {
    return A.apply(this, arguments);
}
finally {
    h = Q;
} }; }; })(oy);
ry.exports = oy;
var $E = ry.exports; /**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var FE = u, Ct = $E;
function _(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
var iy = new Set, cs = {};
function to(e, t) { Yo(e, t), Yo(e + "Capture", t); }
function Yo(e, t) { for (cs[e] = t, e = 0; e < t.length; e++)
    iy.add(t[e]); }
var Rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), qu = Object.prototype.hasOwnProperty, zE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, am = {}, lm = {};
function BE(e) { return qu.call(lm, e) ? !0 : qu.call(am, e) ? !1 : zE.test(e) ? lm[e] = !0 : (am[e] = !0, !1); }
function UE(e, t, n, r) { if (n !== null && n.type === 0)
    return !1; switch (typeof t) {
    case "function":
    case "symbol": return !0;
    case "boolean": return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default: return !1;
} }
function VE(e, t, n, r) { if (t === null || typeof t > "u" || UE(e, t, n, r))
    return !0; if (r)
    return !1; if (n !== null)
    switch (n.type) {
        case 3: return !t;
        case 4: return t === !1;
        case 5: return isNaN(t);
        case 6: return isNaN(t) || 1 > t;
    } return !1; }
function st(e, t, n, r, o, i, s) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s; }
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { We[e] = new st(e, 0, !1, e, null, !1, !1); });
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0]; We[t] = new st(t, 1, !1, e[1], null, !1, !1); });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { We[e] = new st(e, 2, !1, e.toLowerCase(), null, !1, !1); });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { We[e] = new st(e, 2, !1, e, null, !1, !1); });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { We[e] = new st(e, 3, !1, e.toLowerCase(), null, !1, !1); });
["checked", "multiple", "muted", "selected"].forEach(function (e) { We[e] = new st(e, 3, !0, e, null, !1, !1); });
["capture", "download"].forEach(function (e) { We[e] = new st(e, 4, !1, e, null, !1, !1); });
["cols", "rows", "size", "span"].forEach(function (e) { We[e] = new st(e, 6, !1, e, null, !1, !1); });
["rowSpan", "start"].forEach(function (e) { We[e] = new st(e, 5, !1, e.toLowerCase(), null, !1, !1); });
var Yf = /[\-:]([a-z])/g;
function Xf(e) { return e[1].toUpperCase(); }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var t = e.replace(Yf, Xf); We[t] = new st(t, 1, !1, e, null, !1, !1); });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var t = e.replace(Yf, Xf); We[t] = new st(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(Yf, Xf); We[t] = new st(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
["tabIndex", "crossOrigin"].forEach(function (e) { We[e] = new st(e, 1, !1, e.toLowerCase(), null, !1, !1); });
We.xlinkHref = new st("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) { We[e] = new st(e, 1, !1, e.toLowerCase(), null, !0, !0); });
function Jf(e, t, n, r) { var o = We.hasOwnProperty(t) ? We[t] : null; (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (VE(t, n, o, r) && (n = null), r || o === null ? BE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); }
var An = FE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, da = Symbol.for("react.element"), mo = Symbol.for("react.portal"), vo = Symbol.for("react.fragment"), Zf = Symbol.for("react.strict_mode"), Yu = Symbol.for("react.profiler"), sy = Symbol.for("react.provider"), ay = Symbol.for("react.context"), ep = Symbol.for("react.forward_ref"), Xu = Symbol.for("react.suspense"), Ju = Symbol.for("react.suspense_list"), tp = Symbol.for("react.memo"), Vn = Symbol.for("react.lazy"), ly = Symbol.for("react.offscreen"), cm = Symbol.iterator;
function Oi(e) { return e === null || typeof e != "object" ? null : (e = cm && e[cm] || e["@@iterator"], typeof e == "function" ? e : null); }
var Ne = Object.assign, Jc;
function Ui(e) {
    if (Jc === void 0)
        try {
            throw Error();
        }
        catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Jc = t && t[1] || "";
        }
    return `
` + Jc + e;
}
var Zc = !1;
function eu(e, t) {
    if (!e || Zc)
        return "";
    Zc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, []);
                }
                catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], t);
            }
            else {
                try {
                    t.call();
                }
                catch (c) {
                    r = c;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            }
            catch (c) {
                r = c;
            }
            e();
        }
    }
    catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var o = c.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];)
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    }
    finally {
        Zc = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Ui(e) : "";
}
function HE(e) { switch (e.tag) {
    case 5: return Ui(e.type);
    case 16: return Ui("Lazy");
    case 13: return Ui("Suspense");
    case 19: return Ui("SuspenseList");
    case 0:
    case 2:
    case 15: return e = eu(e.type, !1), e;
    case 11: return e = eu(e.type.render, !1), e;
    case 1: return e = eu(e.type, !0), e;
    default: return "";
} }
function Zu(e) { if (e == null)
    return null; if (typeof e == "function")
    return e.displayName || e.name || null; if (typeof e == "string")
    return e; switch (e) {
    case vo: return "Fragment";
    case mo: return "Portal";
    case Yu: return "Profiler";
    case Zf: return "StrictMode";
    case Xu: return "Suspense";
    case Ju: return "SuspenseList";
} if (typeof e == "object")
    switch (e.$$typeof) {
        case ay: return (e.displayName || "Context") + ".Consumer";
        case sy: return (e._context.displayName || "Context") + ".Provider";
        case ep:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case tp: return t = e.displayName || null, t !== null ? t : Zu(e.type) || "Memo";
        case Vn:
            t = e._payload, e = e._init;
            try {
                return Zu(e(t));
            }
            catch (_q) { }
    } return null; }
function WE(e) { var t = e.type; switch (e.tag) {
    case 24: return "Cache";
    case 9: return (t.displayName || "Context") + ".Consumer";
    case 10: return (t._context.displayName || "Context") + ".Provider";
    case 18: return "DehydratedFragment";
    case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7: return "Fragment";
    case 5: return t;
    case 4: return "Portal";
    case 3: return "Root";
    case 6: return "Text";
    case 16: return Zu(t);
    case 8: return t === Zf ? "StrictMode" : "Mode";
    case 22: return "Offscreen";
    case 12: return "Profiler";
    case 21: return "Scope";
    case 13: return "Suspense";
    case 19: return "SuspenseList";
    case 25: return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
} return null; }
function fr(e) { switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined": return e;
    case "object": return e;
    default: return "";
} }
function cy(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
function KE(e) { var t = cy(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function () { return o.call(this); }, set: function (s) { r = "" + s, i.call(this, s); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (s) { r = "" + s; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
} }
function fa(e) { e._valueTracker || (e._valueTracker = KE(e)); }
function uy(e) { if (!e)
    return !1; var t = e._valueTracker; if (!t)
    return !0; var n = t.getValue(), r = ""; return e && (r = cy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1; }
function el(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null; try {
    return e.activeElement || e.body;
}
catch (_q) {
    return e.body;
} }
function ed(e, t) { var n = t.checked; return Ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n !== null && n !== void 0 ? n : e._wrapperState.initialChecked }); }
function um(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked; n = fr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }; }
function dy(e, t) { t = t.checked, t != null && Jf(e, "checked", t, !1); }
function td(e, t) { dy(e, t); var n = fr(t.value), r = t.type; if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
} t.hasOwnProperty("value") ? nd(e, t.type, n) : t.hasOwnProperty("defaultValue") && nd(e, t.type, fr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked); }
function dm(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
} n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n); }
function nd(e, t, n) { (t !== "number" || el(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
var Vi = Array.isArray;
function No(e, t, n, r) { if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
}
else {
    for (n = "" + fr(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
            e[o].selected = !0, r && (e[o].defaultSelected = !0);
            return;
        }
        t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
} }
function rd(e, t) { if (t.dangerouslySetInnerHTML != null)
    throw Error(_(91)); return Ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
function fm(e, t) { var n = t.value; if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
            throw Error(_(92));
        if (Vi(n)) {
            if (1 < n.length)
                throw Error(_(93));
            n = n[0];
        }
        t = n;
    }
    t == null && (t = ""), n = t;
} e._wrapperState = { initialValue: fr(n) }; }
function fy(e, t) { var n = fr(t.value), r = fr(t.defaultValue); n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r); }
function pm(e) { var t = e.textContent; t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t); }
function py(e) { switch (e) {
    case "svg": return "http://www.w3.org/2000/svg";
    case "math": return "http://www.w3.org/1998/Math/MathML";
    default: return "http://www.w3.org/1999/xhtml";
} }
function od(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? py(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
var pa, hy = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) { MSApp.execUnsafeLocalFunction(function () { return e(t, n, r, o); }); } : e; }(function (e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
else {
    for (pa = pa || document.createElement("div"), pa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = pa.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
    for (; t.firstChild;)
        e.appendChild(t.firstChild);
} });
function us(e, t) { if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
    }
} e.textContent = t; }
var qi = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, GE = ["Webkit", "ms", "Moz", "O"];
Object.keys(qi).forEach(function (e) { GE.forEach(function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), qi[t] = qi[e]; }); });
function my(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qi.hasOwnProperty(e) && qi[e] ? ("" + t).trim() : t + "px"; }
function vy(e, t) { e = e.style; for (var n in t)
    if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, o = my(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    } }
var QE = Ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function id(e, t) { if (t) {
    if (QE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
            throw Error(_(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
            throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object")
        throw Error(_(62));
} }
function sd(e, t) { if (e.indexOf("-") === -1)
    return typeof t.is == "string"; switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph": return !1;
    default: return !0;
} }
var ad = null;
function np(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
var ld = null, ko = null, To = null;
function hm(e) { if (e = Ks(e)) {
    if (typeof ld != "function")
        throw Error(_(280));
    var t = e.stateNode;
    t && (t = Wl(t), ld(e.stateNode, e.type, t));
} }
function gy(e) { ko ? To ? To.push(e) : To = [e] : ko = e; }
function yy() { if (ko) {
    var e = ko, t = To;
    if (To = ko = null, hm(e), t)
        for (e = 0; e < t.length; e++)
            hm(t[e]);
} }
function xy(e, t) { return e(t); }
function wy() { }
var tu = !1;
function Sy(e, t, n) { if (tu)
    return e(t, n); tu = !0; try {
    return xy(e, t, n);
}
finally {
    tu = !1, (ko !== null || To !== null) && (wy(), yy());
} }
function ds(e, t) { var n = e.stateNode; if (n === null)
    return null; var r = Wl(n); if (r === null)
    return null; n = r[t]; e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
    default: e = !1;
} if (e)
    return null; if (n && typeof n != "function")
    throw Error(_(231, t, typeof n)); return n; }
var cd = !1;
if (Rn)
    try {
        var ji = {};
        Object.defineProperty(ji, "passive", { get: function () { cd = !0; } }), window.addEventListener("test", ji, ji), window.removeEventListener("test", ji, ji);
    }
    catch (_q) {
        cd = !1;
    }
function qE(e, t, n, r, o, i, s, a, l) { var c = Array.prototype.slice.call(arguments, 3); try {
    t.apply(n, c);
}
catch (d) {
    this.onError(d);
} }
var Yi = !1, tl = null, nl = !1, ud = null, YE = { onError: function (e) { Yi = !0, tl = e; } };
function XE(e, t, n, r, o, i, s, a, l) { Yi = !1, tl = null, qE.apply(YE, arguments); }
function JE(e, t, n, r, o, i, s, a, l) { if (XE.apply(this, arguments), Yi) {
    if (Yi) {
        var c = tl;
        Yi = !1, tl = null;
    }
    else
        throw Error(_(198));
    nl || (nl = !0, ud = c);
} }
function no(e) { var t = e, n = e; if (e.alternate)
    for (; t.return;)
        t = t.return;
else {
    e = t;
    do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
} return t.tag === 3 ? n : null; }
function Cy(e) { if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
} return null; }
function mm(e) { if (no(e) !== e)
    throw Error(_(188)); }
function ZE(e) { var t = e.alternate; if (!t) {
    if (t = no(e), t === null)
        throw Error(_(188));
    return t !== e ? null : e;
} for (var n = e, r = t;;) {
    var o = n.return;
    if (o === null)
        break;
    var i = o.alternate;
    if (i === null) {
        if (r = o.return, r !== null) {
            n = r;
            continue;
        }
        break;
    }
    if (o.child === i.child) {
        for (i = o.child; i;) {
            if (i === n)
                return mm(o), e;
            if (i === r)
                return mm(o), t;
            i = i.sibling;
        }
        throw Error(_(188));
    }
    if (n.return !== r.return)
        n = o, r = i;
    else {
        for (var s = !1, a = o.child; a;) {
            if (a === n) {
                s = !0, n = o, r = i;
                break;
            }
            if (a === r) {
                s = !0, r = o, n = i;
                break;
            }
            a = a.sibling;
        }
        if (!s) {
            for (a = i.child; a;) {
                if (a === n) {
                    s = !0, n = i, r = o;
                    break;
                }
                if (a === r) {
                    s = !0, r = i, n = o;
                    break;
                }
                a = a.sibling;
            }
            if (!s)
                throw Error(_(189));
        }
    }
    if (n.alternate !== r)
        throw Error(_(190));
} if (n.tag !== 3)
    throw Error(_(188)); return n.stateNode.current === n ? e : t; }
function Ey(e) { return e = ZE(e), e !== null ? by(e) : null; }
function by(e) { if (e.tag === 5 || e.tag === 6)
    return e; for (e = e.child; e !== null;) {
    var t = by(e);
    if (t !== null)
        return t;
    e = e.sibling;
} return null; }
var Py = Ct.unstable_scheduleCallback, vm = Ct.unstable_cancelCallback, eb = Ct.unstable_shouldYield, tb = Ct.unstable_requestPaint, je = Ct.unstable_now, nb = Ct.unstable_getCurrentPriorityLevel, rp = Ct.unstable_ImmediatePriority, Ry = Ct.unstable_UserBlockingPriority, rl = Ct.unstable_NormalPriority, rb = Ct.unstable_LowPriority, Ny = Ct.unstable_IdlePriority, Bl = null, un = null;
function ob(e) { if (un && typeof un.onCommitFiberRoot == "function")
    try {
        un.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
    }
    catch (_q) { } }
var Ht = Math.clz32 ? Math.clz32 : ab, ib = Math.log, sb = Math.LN2;
function ab(e) { return e >>>= 0, e === 0 ? 32 : 31 - (ib(e) / sb | 0) | 0; }
var ha = 64, ma = 4194304;
function Hi(e) { switch (e & -e) {
    case 1: return 1;
    case 2: return 2;
    case 4: return 4;
    case 8: return 8;
    case 16: return 16;
    case 32: return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return e & 130023424;
    case 134217728: return 134217728;
    case 268435456: return 268435456;
    case 536870912: return 536870912;
    case 1073741824: return 1073741824;
    default: return e;
} }
function ol(e, t) { var n = e.pendingLanes; if (n === 0)
    return 0; var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455; if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = Hi(a) : (i &= s, i !== 0 && (r = Hi(i)));
}
else
    s = n & ~o, s !== 0 ? r = Hi(s) : i !== 0 && (r = Hi(i)); if (r === 0)
    return 0; if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t; if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;)
        n = 31 - Ht(t), o = 1 << n, r |= e[n], t &= ~o; return r; }
function lb(e, t) { switch (e) {
    case 1:
    case 2:
    case 4: return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824: return -1;
    default: return -1;
} }
function cb(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
    var s = 31 - Ht(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = lb(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
} }
function dd(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
function ky() { var e = ha; return ha <<= 1, !(ha & 4194240) && (ha = 64), e; }
function nu(e) { for (var t = [], n = 0; 31 > n; n++)
    t.push(e); return t; }
function Hs(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ht(t), e[t] = n; }
function ub(e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - Ht(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
} }
function op(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
    var r = 31 - Ht(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
} }
var ve = 0;
function Ty(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1; }
var Oy, ip, jy, Ay, _y, fd = !1, va = [], rr = null, or = null, ir = null, fs = new Map, ps = new Map, Wn = [], db = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function gm(e, t) { switch (e) {
    case "focusin":
    case "focusout":
        rr = null;
        break;
    case "dragenter":
    case "dragleave":
        or = null;
        break;
    case "mouseover":
    case "mouseout":
        ir = null;
        break;
    case "pointerover":
    case "pointerout":
        fs.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture": ps.delete(t.pointerId);
} }
function Ai(e, t, n, r, o, i) { return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ks(t), t !== null && ip(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e); }
function fb(e, t, n, r, o) { switch (t) {
    case "focusin": return rr = Ai(rr, e, t, n, r, o), !0;
    case "dragenter": return or = Ai(or, e, t, n, r, o), !0;
    case "mouseover": return ir = Ai(ir, e, t, n, r, o), !0;
    case "pointerover":
        var i = o.pointerId;
        return fs.set(i, Ai(fs.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture": return i = o.pointerId, ps.set(i, Ai(ps.get(i) || null, e, t, n, r, o)), !0;
} return !1; }
function My(e) { var t = Nr(e.target); if (t !== null) {
    var n = no(t);
    if (n !== null) {
        if (t = n.tag, t === 13) {
            if (t = Cy(n), t !== null) {
                e.blockedOn = t, _y(e.priority, function () { jy(n); });
                return;
            }
        }
        else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
        }
    }
} e.blockedOn = null; }
function za(e) { if (e.blockedOn !== null)
    return !1; for (var t = e.targetContainers; 0 < t.length;) {
    var n = pd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ad = r, n.target.dispatchEvent(r), ad = null;
    }
    else
        return t = Ks(n), t !== null && ip(t), e.blockedOn = n, !1;
    t.shift();
} return !0; }
function ym(e, t, n) { za(e) && n.delete(t); }
function pb() { fd = !1, rr !== null && za(rr) && (rr = null), or !== null && za(or) && (or = null), ir !== null && za(ir) && (ir = null), fs.forEach(ym), ps.forEach(ym); }
function _i(e, t) { e.blockedOn === t && (e.blockedOn = null, fd || (fd = !0, Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority, pb))); }
function hs(e) { function t(o) { return _i(o, e); } if (0 < va.length) {
    _i(va[0], e);
    for (var n = 1; n < va.length; n++) {
        var r = va[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
} for (rr !== null && _i(rr, e), or !== null && _i(or, e), ir !== null && _i(ir, e), fs.forEach(t), ps.forEach(t), n = 0; n < Wn.length; n++)
    r = Wn[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < Wn.length && (n = Wn[0], n.blockedOn === null);)
    My(n), n.blockedOn === null && Wn.shift(); }
var Oo = An.ReactCurrentBatchConfig, il = !0;
function hb(e, t, n, r) { var o = ve, i = Oo.transition; Oo.transition = null; try {
    ve = 1, sp(e, t, n, r);
}
finally {
    ve = o, Oo.transition = i;
} }
function mb(e, t, n, r) { var o = ve, i = Oo.transition; Oo.transition = null; try {
    ve = 4, sp(e, t, n, r);
}
finally {
    ve = o, Oo.transition = i;
} }
function sp(e, t, n, r) { if (il) {
    var o = pd(e, t, n, r);
    if (o === null)
        fu(e, t, r, sl, n), gm(e, r);
    else if (fb(o, e, t, n, r))
        r.stopPropagation();
    else if (gm(e, r), t & 4 && -1 < db.indexOf(e)) {
        for (; o !== null;) {
            var i = Ks(o);
            if (i !== null && Oy(i), i = pd(e, t, n, r), i === null && fu(e, t, r, sl, n), i === o)
                break;
            o = i;
        }
        o !== null && r.stopPropagation();
    }
    else
        fu(e, t, r, null, n);
} }
var sl = null;
function pd(e, t, n, r) { if (sl = null, e = np(r), e = Nr(e), e !== null)
    if (t = no(e), t === null)
        e = null;
    else if (n = t.tag, n === 13) {
        if (e = Cy(t), e !== null)
            return e;
        e = null;
    }
    else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
    }
    else
        t !== e && (e = null); return sl = e, null; }
function Iy(e) { switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart": return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave": return 4;
    case "message": switch (nb()) {
        case rp: return 1;
        case Ry: return 4;
        case rl:
        case rb: return 16;
        case Ny: return 536870912;
        default: return 16;
    }
    default: return 16;
} }
var er = null, ap = null, Ba = null;
function Dy() { if (Ba)
    return Ba; var e, t = ap, n = t.length, r, o = "value" in er ? er.value : er.textContent, i = o.length; for (e = 0; e < n && t[e] === o[e]; e++)
    ; var s = n - e; for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
    ; return Ba = o.slice(e, 1 < r ? 1 - r : void 0); }
function Ua(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
function ga() { return !0; }
function xm() { return !1; }
function bt(e) { function t(n, r, o, i, s) { this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null; for (var a in e)
    e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]); return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ga : xm, this.isPropagationStopped = xm, this; } return Ne(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ga); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ga); }, persist: function () { }, isPersistent: ga }), t; }
var ui = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, lp = bt(ui), Ws = Ne({}, ui, { view: 0, detail: 0 }), vb = bt(Ws), ru, ou, Mi, Ul = Ne({}, Ws, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: cp, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Mi && (Mi && e.type === "mousemove" ? (ru = e.screenX - Mi.screenX, ou = e.screenY - Mi.screenY) : ou = ru = 0, Mi = e), ru); }, movementY: function (e) { return "movementY" in e ? e.movementY : ou; } }), wm = bt(Ul), gb = Ne({}, Ul, { dataTransfer: 0 }), yb = bt(gb), xb = Ne({}, Ws, { relatedTarget: 0 }), iu = bt(xb), wb = Ne({}, ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Sb = bt(wb), Cb = Ne({}, ui, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), Eb = bt(Cb), bb = Ne({}, ui, { data: 0 }), Sm = bt(bb), Pb = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Rb = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Nb = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function kb(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = Nb[e]) ? !!t[e] : !1; }
function cp() { return kb; }
var Tb = Ne({}, Ws, { key: function (e) { if (e.key) {
        var t = Pb[e.key] || e.key;
        if (t !== "Unidentified")
            return t;
    } return e.type === "keypress" ? (e = Ua(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rb[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: cp, charCode: function (e) { return e.type === "keypress" ? Ua(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? Ua(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), Ob = bt(Tb), jb = Ne({}, Ul, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cm = bt(jb), Ab = Ne({}, Ws, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: cp }), _b = bt(Ab), Mb = Ne({}, ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ib = bt(Mb), Db = Ne({}, Ul, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Lb = bt(Db), $b = [9, 13, 27, 32], up = Rn && "CompositionEvent" in window, Xi = null;
Rn && "documentMode" in document && (Xi = document.documentMode);
var Fb = Rn && "TextEvent" in window && !Xi, Ly = Rn && (!up || Xi && 8 < Xi && 11 >= Xi), Em = " ", bm = !1;
function $y(e, t) { switch (e) {
    case "keyup": return $b.indexOf(t.keyCode) !== -1;
    case "keydown": return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout": return !0;
    default: return !1;
} }
function Fy(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
var go = !1;
function zb(e, t) { switch (e) {
    case "compositionend": return Fy(t);
    case "keypress": return t.which !== 32 ? null : (bm = !0, Em);
    case "textInput": return e = t.data, e === Em && bm ? null : e;
    default: return null;
} }
function Bb(e, t) { if (go)
    return e === "compositionend" || !up && $y(e, t) ? (e = Dy(), Ba = ap = er = null, go = !1, e) : null; switch (e) {
    case "paste": return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which);
        }
        return null;
    case "compositionend": return Ly && t.locale !== "ko" ? null : t.data;
    default: return null;
} }
var Ub = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Pm(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!Ub[e.type] : t === "textarea"; }
function zy(e, t, n, r) { gy(r), t = al(t, "onChange"), 0 < t.length && (n = new lp("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); }
var Ji = null, ms = null;
function Vb(e) { Xy(e, 0); }
function Vl(e) { var t = wo(e); if (uy(t))
    return e; }
function Hb(e, t) { if (e === "change")
    return t; }
var By = !1;
if (Rn) {
    var su;
    if (Rn) {
        var au = "oninput" in document;
        if (!au) {
            var Rm = document.createElement("div");
            Rm.setAttribute("oninput", "return;"), au = typeof Rm.oninput == "function";
        }
        su = au;
    }
    else
        su = !1;
    By = su && (!document.documentMode || 9 < document.documentMode);
}
function Nm() { Ji && (Ji.detachEvent("onpropertychange", Uy), ms = Ji = null); }
function Uy(e) { if (e.propertyName === "value" && Vl(ms)) {
    var t = [];
    zy(t, ms, e, np(e)), Sy(Vb, t);
} }
function Wb(e, t, n) { e === "focusin" ? (Nm(), Ji = t, ms = n, Ji.attachEvent("onpropertychange", Uy)) : e === "focusout" && Nm(); }
function Kb(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Vl(ms); }
function Gb(e, t) { if (e === "click")
    return Vl(t); }
function Qb(e, t) { if (e === "input" || e === "change")
    return Vl(t); }
function qb(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var qt = typeof Object.is == "function" ? Object.is : qb;
function vs(e, t) { if (qt(e, t))
    return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
    return !1; for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!qu.call(t, o) || !qt(e[o], t[o]))
        return !1;
} return !0; }
function km(e) { for (; e && e.firstChild;)
    e = e.firstChild; return e; }
function Tm(e, t) { var n = km(e); e = 0; for (var r; n;) {
    if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
            return { node: n, offset: t - e };
        e = r;
    }
    e: {
        for (; n;) {
            if (n.nextSibling) {
                n = n.nextSibling;
                break e;
            }
            n = n.parentNode;
        }
        n = void 0;
    }
    n = km(n);
} }
function Vy(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1; }
function Hy() { for (var e = window, t = el(); t instanceof e.HTMLIFrameElement;) {
    try {
        var n = typeof t.contentWindow.location.href == "string";
    }
    catch (_q) {
        n = !1;
    }
    if (n)
        e = t.contentWindow;
    else
        break;
    t = el(e.document);
} return t; }
function dp(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true"); }
function Yb(e) { var t = Hy(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && Vy(n.ownerDocument.documentElement, n)) {
    if (r !== null && dp(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
            n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var o = n.textContent.length, i = Math.min(r.start, o);
            r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Tm(n, i);
            var s = Tm(n, r);
            o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
    }
    for (t = [], e = n; e = e.parentNode;)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
} }
var Xb = Rn && "documentMode" in document && 11 >= document.documentMode, yo = null, hd = null, Zi = null, md = !1;
function Om(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; md || yo == null || yo !== el(r) || (r = yo, "selectionStart" in r && dp(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Zi && vs(Zi, r) || (Zi = r, r = al(hd, "onSelect"), 0 < r.length && (t = new lp("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = yo))); }
function ya(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
var xo = { animationend: ya("Animation", "AnimationEnd"), animationiteration: ya("Animation", "AnimationIteration"), animationstart: ya("Animation", "AnimationStart"), transitionend: ya("Transition", "TransitionEnd") }, lu = {}, Wy = {};
Rn && (Wy = document.createElement("div").style, "AnimationEvent" in window || (delete xo.animationend.animation, delete xo.animationiteration.animation, delete xo.animationstart.animation), "TransitionEvent" in window || delete xo.transitionend.transition);
function Hl(e) { if (lu[e])
    return lu[e]; if (!xo[e])
    return e; var t = xo[e], n; for (n in t)
    if (t.hasOwnProperty(n) && n in Wy)
        return lu[e] = t[n]; return e; }
var Ky = Hl("animationend"), Gy = Hl("animationiteration"), Qy = Hl("animationstart"), qy = Hl("transitionend"), Yy = new Map, jm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yr(e, t) { Yy.set(e, t), to(t, [e]); }
for (var cu = 0; cu < jm.length; cu++) {
    var uu = jm[cu], Jb = uu.toLowerCase(), Zb = uu[0].toUpperCase() + uu.slice(1);
    yr(Jb, "on" + Zb);
}
yr(Ky, "onAnimationEnd");
yr(Gy, "onAnimationIteration");
yr(Qy, "onAnimationStart");
yr("dblclick", "onDoubleClick");
yr("focusin", "onFocus");
yr("focusout", "onBlur");
yr(qy, "onTransitionEnd");
Yo("onMouseEnter", ["mouseout", "mouseover"]);
Yo("onMouseLeave", ["mouseout", "mouseover"]);
Yo("onPointerEnter", ["pointerout", "pointerover"]);
Yo("onPointerLeave", ["pointerout", "pointerover"]);
to("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
to("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
to("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
to("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
to("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
to("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Wi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), eP = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));
function Am(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, JE(r, t, void 0, e), e.currentTarget = null; }
function Xy(e, t) { t = (t & 4) !== 0; for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
        var i = void 0;
        if (t)
            for (var s = r.length - 1; 0 <= s; s--) {
                var a = r[s], l = a.instance, c = a.currentTarget;
                if (a = a.listener, l !== i && o.isPropagationStopped())
                    break e;
                Am(o, a, c), i = l;
            }
        else
            for (s = 0; s < r.length; s++) {
                if (a = r[s], l = a.instance, c = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped())
                    break e;
                Am(o, a, c), i = l;
            }
    }
} if (nl)
    throw e = ud, nl = !1, ud = null, e; }
function xe(e, t) { var n = t[wd]; n === void 0 && (n = t[wd] = new Set); var r = e + "__bubble"; n.has(r) || (Jy(t, e, 2, !1), n.add(r)); }
function du(e, t, n) { var r = 0; t && (r |= 4), Jy(n, e, r, t); }
var xa = "_reactListening" + Math.random().toString(36).slice(2);
function gs(e) { if (!e[xa]) {
    e[xa] = !0, iy.forEach(function (n) { n !== "selectionchange" && (eP.has(n) || du(n, !1, e), du(n, !0, e)); });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xa] || (t[xa] = !0, du("selectionchange", !1, t));
} }
function Jy(e, t, n, r) { switch (Iy(t)) {
    case 1:
        var o = hb;
        break;
    case 4:
        o = mb;
        break;
    default: o = sp;
} n = o.bind(null, t, n, e), o = void 0, !cd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1); }
function fu(e, t, n, r, o) { var i = r; if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
        if (r === null)
            return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === o || a.nodeType === 8 && a.parentNode === o)
                break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var l = s.tag;
                    if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                        return;
                    s = s.return;
                }
            for (; a !== null;) {
                if (s = Nr(a), s === null)
                    return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = i = s;
                    continue e;
                }
                a = a.parentNode;
            }
        }
        r = r.return;
    } Sy(function () { var c = i, d = np(n), f = []; e: {
    var h = Yy.get(e);
    if (h !== void 0) {
        var x = lp, y = e;
        switch (e) {
            case "keypress": if (Ua(n) === 0)
                break e;
            case "keydown":
            case "keyup":
                x = Ob;
                break;
            case "focusin":
                y = "focus", x = iu;
                break;
            case "focusout":
                y = "blur", x = iu;
                break;
            case "beforeblur":
            case "afterblur":
                x = iu;
                break;
            case "click": if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                x = wm;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                x = yb;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                x = _b;
                break;
            case Ky:
            case Gy:
            case Qy:
                x = Sb;
                break;
            case qy:
                x = Ib;
                break;
            case "scroll":
                x = vb;
                break;
            case "wheel":
                x = Lb;
                break;
            case "copy":
            case "cut":
            case "paste":
                x = Eb;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup": x = Cm;
        }
        var v = (t & 4) !== 0, S = !v && e === "scroll", m = v ? h !== null ? h + "Capture" : null : h;
        v = [];
        for (var g = c, w; g !== null;) {
            w = g;
            var C = w.stateNode;
            if (w.tag === 5 && C !== null && (w = C, m !== null && (C = ds(g, m), C != null && v.push(ys(g, C, w)))), S)
                break;
            g = g.return;
        }
        0 < v.length && (h = new x(h, y, null, n, d), f.push({ event: h, listeners: v }));
    }
} if (!(t & 7)) {
    e: {
        if (h = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", h && n !== ad && (y = n.relatedTarget || n.fromElement) && (Nr(y) || y[Nn]))
            break e;
        if ((x || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, x ? (y = n.relatedTarget || n.toElement, x = c, y = y ? Nr(y) : null, y !== null && (S = no(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (x = null, y = c), x !== y)) {
            if (v = wm, C = "onMouseLeave", m = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (v = Cm, C = "onPointerLeave", m = "onPointerEnter", g = "pointer"), S = x == null ? h : wo(x), w = y == null ? h : wo(y), h = new v(C, g + "leave", x, n, d), h.target = S, h.relatedTarget = w, C = null, Nr(d) === c && (v = new v(m, g + "enter", y, n, d), v.target = w, v.relatedTarget = S, C = v), S = C, x && y)
                t: {
                    for (v = x, m = y, g = 0, w = v; w; w = so(w))
                        g++;
                    for (w = 0, C = m; C; C = so(C))
                        w++;
                    for (; 0 < g - w;)
                        v = so(v), g--;
                    for (; 0 < w - g;)
                        m = so(m), w--;
                    for (; g--;) {
                        if (v === m || m !== null && v === m.alternate)
                            break t;
                        v = so(v), m = so(m);
                    }
                    v = null;
                }
            else
                v = null;
            x !== null && _m(f, h, x, v, !1), y !== null && S !== null && _m(f, S, y, v, !0);
        }
    }
    e: {
        if (h = c ? wo(c) : window, x = h.nodeName && h.nodeName.toLowerCase(), x === "select" || x === "input" && h.type === "file")
            var E = Hb;
        else if (Pm(h))
            if (By)
                E = Qb;
            else {
                E = Kb;
                var R = Wb;
            }
        else
            (x = h.nodeName) && x.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = Gb);
        if (E && (E = E(e, c))) {
            zy(f, E, n, d);
            break e;
        }
        R && R(e, h, c), e === "focusout" && (R = h._wrapperState) && R.controlled && h.type === "number" && nd(h, "number", h.value);
    }
    switch (R = c ? wo(c) : window, e) {
        case "focusin":
            (Pm(R) || R.contentEditable === "true") && (yo = R, hd = c, Zi = null);
            break;
        case "focusout":
            Zi = hd = yo = null;
            break;
        case "mousedown":
            md = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            md = !1, Om(f, n, d);
            break;
        case "selectionchange": if (Xb)
            break;
        case "keydown":
        case "keyup": Om(f, n, d);
    }
    var b;
    if (up)
        e: {
            switch (e) {
                case "compositionstart":
                    var P = "onCompositionStart";
                    break e;
                case "compositionend":
                    P = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    P = "onCompositionUpdate";
                    break e;
            }
            P = void 0;
        }
    else
        go ? $y(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
    P && (Ly && n.locale !== "ko" && (go || P !== "onCompositionStart" ? P === "onCompositionEnd" && go && (b = Dy()) : (er = d, ap = "value" in er ? er.value : er.textContent, go = !0)), R = al(c, P), 0 < R.length && (P = new Sm(P, e, null, n, d), f.push({ event: P, listeners: R }), b ? P.data = b : (b = Fy(n), b !== null && (P.data = b)))), (b = Fb ? zb(e, n) : Bb(e, n)) && (c = al(c, "onBeforeInput"), 0 < c.length && (d = new Sm("onBeforeInput", "beforeinput", null, n, d), f.push({ event: d, listeners: c }), d.data = b));
} Xy(f, t); }); }
function ys(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
function al(e, t) { for (var n = t + "Capture", r = []; e !== null;) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ds(e, n), i != null && r.unshift(ys(e, i, o)), i = ds(e, t), i != null && r.push(ys(e, i, o))), e = e.return;
} return r; }
function so(e) { if (e === null)
    return null; do
    e = e.return;
while (e && e.tag !== 5); return e || null; }
function _m(e, t, n, r, o) { for (var i = t._reactName, s = []; n !== null && n !== r;) {
    var a = n, l = a.alternate, c = a.stateNode;
    if (l !== null && l === r)
        break;
    a.tag === 5 && c !== null && (a = c, o ? (l = ds(n, i), l != null && s.unshift(ys(n, l, a))) : o || (l = ds(n, i), l != null && s.push(ys(n, l, a)))), n = n.return;
} s.length !== 0 && e.push({ event: t, listeners: s }); }
var tP = /\r\n?/g, nP = /\u0000|\uFFFD/g;
function Mm(e) {
    return (typeof e == "string" ? e : "" + e).replace(tP, `
`).replace(nP, "");
}
function wa(e, t, n) { if (t = Mm(t), Mm(e) !== t && n)
    throw Error(_(425)); }
function ll() { }
var vd = null, gd = null;
function yd(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
var xd = typeof setTimeout == "function" ? setTimeout : void 0, rP = typeof clearTimeout == "function" ? clearTimeout : void 0, Im = typeof Promise == "function" ? Promise : void 0, oP = typeof queueMicrotask == "function" ? queueMicrotask : typeof Im < "u" ? function (e) { return Im.resolve(null).then(e).catch(iP); } : xd;
function iP(e) { setTimeout(function () { throw e; }); }
function pu(e, t) { var n = t, r = 0; do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$") {
            if (r === 0) {
                e.removeChild(o), hs(t);
                return;
            }
            r--;
        }
        else
            n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
} while (n); hs(t); }
function sr(e) { for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
        break;
    if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
            break;
        if (t === "/$")
            return null;
    }
} return e; }
function Dm(e) { e = e.previousSibling; for (var t = 0; e;) {
    if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0)
                return e;
            t--;
        }
        else
            n === "/$" && t++;
    }
    e = e.previousSibling;
} return null; }
var di = Math.random().toString(36).slice(2), ln = "__reactFiber$" + di, xs = "__reactProps$" + di, Nn = "__reactContainer$" + di, wd = "__reactEvents$" + di, sP = "__reactListeners$" + di, aP = "__reactHandles$" + di;
function Nr(e) { var t = e[ln]; if (t)
    return t; for (var n = e.parentNode; n;) {
    if (t = n[Nn] || n[ln]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = Dm(e); e !== null;) {
                if (n = e[ln])
                    return n;
                e = Dm(e);
            }
        return t;
    }
    e = n, n = e.parentNode;
} return null; }
function Ks(e) { return e = e[ln] || e[Nn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
function wo(e) { if (e.tag === 5 || e.tag === 6)
    return e.stateNode; throw Error(_(33)); }
function Wl(e) { return e[xs] || null; }
var Sd = [], So = -1;
function xr(e) { return { current: e }; }
function we(e) { 0 > So || (e.current = Sd[So], Sd[So] = null, So--); }
function ge(e, t) { So++, Sd[So] = e.current, e.current = t; }
var pr = {}, Je = xr(pr), dt = xr(!1), Ur = pr;
function Xo(e, t) { var n = e.type.contextTypes; if (!n)
    return pr; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext; var o = {}, i; for (i in n)
    o[i] = t[i]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o; }
function ft(e) { return e = e.childContextTypes, e != null; }
function cl() { we(dt), we(Je); }
function Lm(e, t, n) { if (Je.current !== pr)
    throw Error(_(168)); ge(Je, t), ge(dt, n); }
function Zy(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n; r = r.getChildContext(); for (var o in r)
    if (!(o in t))
        throw Error(_(108, WE(e) || "Unknown", o)); return Ne({}, n, r); }
function ul(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pr, Ur = Je.current, ge(Je, e), ge(dt, dt.current), !0; }
function $m(e, t, n) { var r = e.stateNode; if (!r)
    throw Error(_(169)); n ? (e = Zy(e, t, Ur), r.__reactInternalMemoizedMergedChildContext = e, we(dt), we(Je), ge(Je, e)) : we(dt), ge(dt, n); }
var Sn = null, Kl = !1, hu = !1;
function e0(e) { Sn === null ? Sn = [e] : Sn.push(e); }
function lP(e) { Kl = !0, e0(e); }
function wr() { if (!hu && Sn !== null) {
    hu = !0;
    var e = 0, t = ve;
    try {
        var n = Sn;
        for (ve = 1; e < n.length; e++) {
            var r = n[e];
            do
                r = r(!0);
            while (r !== null);
        }
        Sn = null, Kl = !1;
    }
    catch (o) {
        throw Sn !== null && (Sn = Sn.slice(e + 1)), Py(rp, wr), o;
    }
    finally {
        ve = t, hu = !1;
    }
} return null; }
var Co = [], Eo = 0, dl = null, fl = 0, kt = [], Tt = 0, Vr = null, En = 1, bn = "";
function br(e, t) { Co[Eo++] = fl, Co[Eo++] = dl, dl = e, fl = t; }
function t0(e, t, n) { kt[Tt++] = En, kt[Tt++] = bn, kt[Tt++] = Vr, Vr = e; var r = En; e = bn; var o = 32 - Ht(r) - 1; r &= ~(1 << o), n += 1; var i = 32 - Ht(t) + o; if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, En = 1 << 32 - Ht(t) + o | n << o | r, bn = i + e;
}
else
    En = 1 << i | n << o | r, bn = e; }
function fp(e) { e.return !== null && (br(e, 1), t0(e, 1, 0)); }
function pp(e) { for (; e === dl;)
    dl = Co[--Eo], Co[Eo] = null, fl = Co[--Eo], Co[Eo] = null; for (; e === Vr;)
    Vr = kt[--Tt], kt[Tt] = null, bn = kt[--Tt], kt[Tt] = null, En = kt[--Tt], kt[Tt] = null; }
var wt = null, xt = null, Ce = !1, Ut = null;
function n0(e, t) { var n = Ot(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n); }
function Fm(e, t) { switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, wt = e, xt = sr(t.firstChild), !0) : !1;
    case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, wt = e, xt = null, !0) : !1;
    case 13: return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Vr !== null ? { id: En, overflow: bn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ot(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, wt = e, xt = null, !0) : !1;
    default: return !1;
} }
function Cd(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0; }
function Ed(e) { if (Ce) {
    var t = xt;
    if (t) {
        var n = t;
        if (!Fm(e, t)) {
            if (Cd(e))
                throw Error(_(418));
            t = sr(n.nextSibling);
            var r = wt;
            t && Fm(e, t) ? n0(r, n) : (e.flags = e.flags & -4097 | 2, Ce = !1, wt = e);
        }
    }
    else {
        if (Cd(e))
            throw Error(_(418));
        e.flags = e.flags & -4097 | 2, Ce = !1, wt = e;
    }
} }
function zm(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return; wt = e; }
function Sa(e) { if (e !== wt)
    return !1; if (!Ce)
    return zm(e), Ce = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !yd(e.type, e.memoizedProps)), t && (t = xt)) {
    if (Cd(e))
        throw r0(), Error(_(418));
    for (; t;)
        n0(e, t), t = sr(t.nextSibling);
} if (zm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(_(317));
    e: {
        for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                    if (t === 0) {
                        xt = sr(e.nextSibling);
                        break e;
                    }
                    t--;
                }
                else
                    n !== "$" && n !== "$!" && n !== "$?" || t++;
            }
            e = e.nextSibling;
        }
        xt = null;
    }
}
else
    xt = wt ? sr(e.stateNode.nextSibling) : null; return !0; }
function r0() { for (var e = xt; e;)
    e = sr(e.nextSibling); }
function Jo() { xt = wt = null, Ce = !1; }
function hp(e) { Ut === null ? Ut = [e] : Ut.push(e); }
var cP = An.ReactCurrentBatchConfig;
function Ii(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
        if (n = n._owner, n) {
            if (n.tag !== 1)
                throw Error(_(309));
            var r = n.stateNode;
        }
        if (!r)
            throw Error(_(147, e));
        var o = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function (s) { var a = o.refs; s === null ? delete a[i] : a[i] = s; }, t._stringRef = i, t);
    }
    if (typeof e != "string")
        throw Error(_(284));
    if (!n._owner)
        throw Error(_(290, e));
} return e; }
function Ca(e, t) { throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); }
function Bm(e) { var t = e._init; return t(e._payload); }
function o0(e) { function t(m, g) { if (e) {
    var w = m.deletions;
    w === null ? (m.deletions = [g], m.flags |= 16) : w.push(g);
} } function n(m, g) { if (!e)
    return null; for (; g !== null;)
    t(m, g), g = g.sibling; return null; } function r(m, g) { for (m = new Map; g !== null;)
    g.key !== null ? m.set(g.key, g) : m.set(g.index, g), g = g.sibling; return m; } function o(m, g) { return m = ur(m, g), m.index = 0, m.sibling = null, m; } function i(m, g, w) { return m.index = w, e ? (w = m.alternate, w !== null ? (w = w.index, w < g ? (m.flags |= 2, g) : w) : (m.flags |= 2, g)) : (m.flags |= 1048576, g); } function s(m) { return e && m.alternate === null && (m.flags |= 2), m; } function a(m, g, w, C) { return g === null || g.tag !== 6 ? (g = Su(w, m.mode, C), g.return = m, g) : (g = o(g, w), g.return = m, g); } function l(m, g, w, C) { var E = w.type; return E === vo ? d(m, g, w.props.children, C, w.key) : g !== null && (g.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Vn && Bm(E) === g.type) ? (C = o(g, w.props), C.ref = Ii(m, g, w), C.return = m, C) : (C = qa(w.type, w.key, w.props, null, m.mode, C), C.ref = Ii(m, g, w), C.return = m, C); } function c(m, g, w, C) { return g === null || g.tag !== 4 || g.stateNode.containerInfo !== w.containerInfo || g.stateNode.implementation !== w.implementation ? (g = Cu(w, m.mode, C), g.return = m, g) : (g = o(g, w.children || []), g.return = m, g); } function d(m, g, w, C, E) { return g === null || g.tag !== 7 ? (g = Fr(w, m.mode, C, E), g.return = m, g) : (g = o(g, w), g.return = m, g); } function f(m, g, w) { if (typeof g == "string" && g !== "" || typeof g == "number")
    return g = Su("" + g, m.mode, w), g.return = m, g; if (typeof g == "object" && g !== null) {
    switch (g.$$typeof) {
        case da: return w = qa(g.type, g.key, g.props, null, m.mode, w), w.ref = Ii(m, null, g), w.return = m, w;
        case mo: return g = Cu(g, m.mode, w), g.return = m, g;
        case Vn:
            var C = g._init;
            return f(m, C(g._payload), w);
    }
    if (Vi(g) || Oi(g))
        return g = Fr(g, m.mode, w, null), g.return = m, g;
    Ca(m, g);
} return null; } function h(m, g, w, C) { var E = g !== null ? g.key : null; if (typeof w == "string" && w !== "" || typeof w == "number")
    return E !== null ? null : a(m, g, "" + w, C); if (typeof w == "object" && w !== null) {
    switch (w.$$typeof) {
        case da: return w.key === E ? l(m, g, w, C) : null;
        case mo: return w.key === E ? c(m, g, w, C) : null;
        case Vn: return E = w._init, h(m, g, E(w._payload), C);
    }
    if (Vi(w) || Oi(w))
        return E !== null ? null : d(m, g, w, C, null);
    Ca(m, w);
} return null; } function x(m, g, w, C, E) { if (typeof C == "string" && C !== "" || typeof C == "number")
    return m = m.get(w) || null, a(g, m, "" + C, E); if (typeof C == "object" && C !== null) {
    switch (C.$$typeof) {
        case da: return m = m.get(C.key === null ? w : C.key) || null, l(g, m, C, E);
        case mo: return m = m.get(C.key === null ? w : C.key) || null, c(g, m, C, E);
        case Vn:
            var R = C._init;
            return x(m, g, w, R(C._payload), E);
    }
    if (Vi(C) || Oi(C))
        return m = m.get(w) || null, d(g, m, C, E, null);
    Ca(g, C);
} return null; } function y(m, g, w, C) { for (var E = null, R = null, b = g, P = g = 0, k = null; b !== null && P < w.length; P++) {
    b.index > P ? (k = b, b = null) : k = b.sibling;
    var T = h(m, b, w[P], C);
    if (T === null) {
        b === null && (b = k);
        break;
    }
    e && b && T.alternate === null && t(m, b), g = i(T, g, P), R === null ? E = T : R.sibling = T, R = T, b = k;
} if (P === w.length)
    return n(m, b), Ce && br(m, P), E; if (b === null) {
    for (; P < w.length; P++)
        b = f(m, w[P], C), b !== null && (g = i(b, g, P), R === null ? E = b : R.sibling = b, R = b);
    return Ce && br(m, P), E;
} for (b = r(m, b); P < w.length; P++)
    k = x(b, m, P, w[P], C), k !== null && (e && k.alternate !== null && b.delete(k.key === null ? P : k.key), g = i(k, g, P), R === null ? E = k : R.sibling = k, R = k); return e && b.forEach(function (M) { return t(m, M); }), Ce && br(m, P), E; } function v(m, g, w, C) { var E = Oi(w); if (typeof E != "function")
    throw Error(_(150)); if (w = E.call(w), w == null)
    throw Error(_(151)); for (var R = E = null, b = g, P = g = 0, k = null, T = w.next(); b !== null && !T.done; P++, T = w.next()) {
    b.index > P ? (k = b, b = null) : k = b.sibling;
    var M = h(m, b, T.value, C);
    if (M === null) {
        b === null && (b = k);
        break;
    }
    e && b && M.alternate === null && t(m, b), g = i(M, g, P), R === null ? E = M : R.sibling = M, R = M, b = k;
} if (T.done)
    return n(m, b), Ce && br(m, P), E; if (b === null) {
    for (; !T.done; P++, T = w.next())
        T = f(m, T.value, C), T !== null && (g = i(T, g, P), R === null ? E = T : R.sibling = T, R = T);
    return Ce && br(m, P), E;
} for (b = r(m, b); !T.done; P++, T = w.next())
    T = x(b, m, P, T.value, C), T !== null && (e && T.alternate !== null && b.delete(T.key === null ? P : T.key), g = i(T, g, P), R === null ? E = T : R.sibling = T, R = T); return e && b.forEach(function (D) { return t(m, D); }), Ce && br(m, P), E; } function S(m, g, w, C) { if (typeof w == "object" && w !== null && w.type === vo && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
    switch (w.$$typeof) {
        case da:
            e: {
                for (var E = w.key, R = g; R !== null;) {
                    if (R.key === E) {
                        if (E = w.type, E === vo) {
                            if (R.tag === 7) {
                                n(m, R.sibling), g = o(R, w.props.children), g.return = m, m = g;
                                break e;
                            }
                        }
                        else if (R.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Vn && Bm(E) === R.type) {
                            n(m, R.sibling), g = o(R, w.props), g.ref = Ii(m, R, w), g.return = m, m = g;
                            break e;
                        }
                        n(m, R);
                        break;
                    }
                    else
                        t(m, R);
                    R = R.sibling;
                }
                w.type === vo ? (g = Fr(w.props.children, m.mode, C, w.key), g.return = m, m = g) : (C = qa(w.type, w.key, w.props, null, m.mode, C), C.ref = Ii(m, g, w), C.return = m, m = C);
            }
            return s(m);
        case mo:
            e: {
                for (R = w.key; g !== null;) {
                    if (g.key === R)
                        if (g.tag === 4 && g.stateNode.containerInfo === w.containerInfo && g.stateNode.implementation === w.implementation) {
                            n(m, g.sibling), g = o(g, w.children || []), g.return = m, m = g;
                            break e;
                        }
                        else {
                            n(m, g);
                            break;
                        }
                    else
                        t(m, g);
                    g = g.sibling;
                }
                g = Cu(w, m.mode, C), g.return = m, m = g;
            }
            return s(m);
        case Vn: return R = w._init, S(m, g, R(w._payload), C);
    }
    if (Vi(w))
        return y(m, g, w, C);
    if (Oi(w))
        return v(m, g, w, C);
    Ca(m, w);
} return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, g !== null && g.tag === 6 ? (n(m, g.sibling), g = o(g, w), g.return = m, m = g) : (n(m, g), g = Su(w, m.mode, C), g.return = m, m = g), s(m)) : n(m, g); } return S; }
var Zo = o0(!0), i0 = o0(!1), pl = xr(null), hl = null, bo = null, mp = null;
function vp() { mp = bo = hl = null; }
function gp(e) { var t = pl.current; we(pl), e._currentValue = t; }
function bd(e, t, n) { for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
    e = e.return;
} }
function jo(e, t) { hl = e, mp = bo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ut = !0), e.firstContext = null); }
function _t(e) { var t = e._currentValue; if (mp !== e)
    if (e = { context: e, memoizedValue: t, next: null }, bo === null) {
        if (hl === null)
            throw Error(_(308));
        bo = e, hl.dependencies = { lanes: 0, firstContext: e };
    }
    else
        bo = bo.next = e; return t; }
var kr = null;
function yp(e) { kr === null ? kr = [e] : kr.push(e); }
function s0(e, t, n, r) { var o = t.interleaved; return o === null ? (n.next = n, yp(t)) : (n.next = o.next, o.next = n), t.interleaved = n, kn(e, r); }
function kn(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null; }
var Hn = !1;
function xp(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
function a0(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
function Pn(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; }
function ar(e, t, n) { var r = e.updateQueue; if (r === null)
    return null; if (r = r.shared, fe & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, kn(e, n);
} return o = r.interleaved, o === null ? (t.next = t, yp(r)) : (t.next = o.next, o.next = t), r.interleaved = t, kn(e, n); }
function Va(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, op(e, n);
} }
function Um(e, t) { var n = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
        do {
            var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            i === null ? o = i = s : i = i.next = s, n = n.next;
        } while (n !== null);
        i === null ? o = i = t : i = i.next = t;
    }
    else
        o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
} e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
function ml(e, t, n, r) { var o = e.updateQueue; Hn = !1; var i = o.firstBaseUpdate, s = o.lastBaseUpdate, a = o.shared.pending; if (a !== null) {
    o.shared.pending = null;
    var l = a, c = l.next;
    l.next = null, s === null ? i = c : s.next = c, s = l;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== s && (a === null ? d.firstBaseUpdate = c : a.next = c, d.lastBaseUpdate = l));
} if (i !== null) {
    var f = o.baseState;
    s = 0, d = c = l = null, a = i;
    do {
        var h = a.lane, x = a.eventTime;
        if ((r & h) === h) {
            d !== null && (d = d.next = { eventTime: x, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
            e: {
                var y = e, v = a;
                switch (h = t, x = n, v.tag) {
                    case 1:
                        if (y = v.payload, typeof y == "function") {
                            f = y.call(x, f, h);
                            break e;
                        }
                        f = y;
                        break e;
                    case 3: y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = v.payload, h = typeof y == "function" ? y.call(x, f, h) : y, h == null)
                            break e;
                        f = Ne({}, f, h);
                        break e;
                    case 2: Hn = !0;
                }
            }
            a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [a] : h.push(a));
        }
        else
            x = { eventTime: x, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, d === null ? (c = d = x, l = f) : d = d.next = x, s |= h;
        if (a = a.next, a === null) {
            if (a = o.shared.pending, a === null)
                break;
            h = a, a = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
        }
    } while (!0);
    if (d === null && (l = f), o.baseState = l, o.firstBaseUpdate = c, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
        o = t;
        do
            s |= o.lane, o = o.next;
        while (o !== t);
    }
    else
        i === null && (o.shared.lanes = 0);
    Wr |= s, e.lanes = s, e.memoizedState = f;
} }
function Vm(e, t, n) { if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
        var r = e[t], o = r.callback;
        if (o !== null) {
            if (r.callback = null, r = n, typeof o != "function")
                throw Error(_(191, o));
            o.call(r);
        }
    } }
var Gs = {}, dn = xr(Gs), ws = xr(Gs), Ss = xr(Gs);
function Tr(e) { if (e === Gs)
    throw Error(_(174)); return e; }
function wp(e, t) { switch (ge(Ss, t), ge(ws, e), ge(dn, Gs), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : od(null, "");
        break;
    default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = od(t, e);
} we(dn), ge(dn, t); }
function ei() { we(dn), we(ws), we(Ss); }
function l0(e) { Tr(Ss.current); var t = Tr(dn.current), n = od(t, e.type); t !== n && (ge(ws, e), ge(dn, n)); }
function Sp(e) { ws.current === e && (we(dn), we(ws)); }
var be = xr(0);
function vl(e) { for (var t = e; t !== null;) {
    if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
            return t;
    }
    else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
            return t;
    }
    else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
    }
    if (t === e)
        break;
    for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
            return null;
        t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
} return null; }
var mu = [];
function Cp() { for (var e = 0; e < mu.length; e++)
    mu[e]._workInProgressVersionPrimary = null; mu.length = 0; }
var Ha = An.ReactCurrentDispatcher, vu = An.ReactCurrentBatchConfig, Hr = 0, Re = null, De = null, $e = null, gl = !1, es = !1, Cs = 0, uP = 0;
function Ge() { throw Error(_(321)); }
function Ep(e, t) { if (t === null)
    return !1; for (var n = 0; n < t.length && n < e.length; n++)
    if (!qt(e[n], t[n]))
        return !1; return !0; }
function bp(e, t, n, r, o, i) { if (Hr = i, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ha.current = e === null || e.memoizedState === null ? hP : mP, e = n(r, o), es) {
    i = 0;
    do {
        if (es = !1, Cs = 0, 25 <= i)
            throw Error(_(301));
        i += 1, $e = De = null, t.updateQueue = null, Ha.current = vP, e = n(r, o);
    } while (es);
} if (Ha.current = yl, t = De !== null && De.next !== null, Hr = 0, $e = De = Re = null, gl = !1, t)
    throw Error(_(300)); return e; }
function Pp() { var e = Cs !== 0; return Cs = 0, e; }
function tn() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return $e === null ? Re.memoizedState = $e = e : $e = $e.next = e, $e; }
function Mt() { if (De === null) {
    var e = Re.alternate;
    e = e !== null ? e.memoizedState : null;
}
else
    e = De.next; var t = $e === null ? Re.memoizedState : $e.next; if (t !== null)
    $e = t, De = e;
else {
    if (e === null)
        throw Error(_(310));
    De = e, e = { memoizedState: De.memoizedState, baseState: De.baseState, baseQueue: De.baseQueue, queue: De.queue, next: null }, $e === null ? Re.memoizedState = $e = e : $e = $e.next = e;
} return $e; }
function Es(e, t) { return typeof t == "function" ? t(e) : t; }
function gu(e) { var t = Mt(), n = t.queue; if (n === null)
    throw Error(_(311)); n.lastRenderedReducer = e; var r = De, o = r.baseQueue, i = n.pending; if (i !== null) {
    if (o !== null) {
        var s = o.next;
        o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
} if (o !== null) {
    i = o.next, r = r.baseState;
    var a = s = null, l = null, c = i;
    do {
        var d = c.lane;
        if ((Hr & d) === d)
            l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
        else {
            var f = { lane: d, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
            l === null ? (a = l = f, s = r) : l = l.next = f, Re.lanes |= d, Wr |= d;
        }
        c = c.next;
    } while (c !== null && c !== i);
    l === null ? s = r : l.next = a, qt(r, t.memoizedState) || (ut = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
} if (e = n.interleaved, e !== null) {
    o = e;
    do
        i = o.lane, Re.lanes |= i, Wr |= i, o = o.next;
    while (o !== e);
}
else
    o === null && (n.lanes = 0); return [t.memoizedState, n.dispatch]; }
function yu(e) { var t = Mt(), n = t.queue; if (n === null)
    throw Error(_(311)); n.lastRenderedReducer = e; var r = n.dispatch, o = n.pending, i = t.memoizedState; if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
        i = e(i, s.action), s = s.next;
    while (s !== o);
    qt(i, t.memoizedState) || (ut = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
} return [i, r]; }
function c0() { }
function u0(e, t) { var n = Re, r = Mt(), o = t(), i = !qt(r.memoizedState, o); if (i && (r.memoizedState = o, ut = !0), r = r.queue, Rp(p0.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || $e !== null && $e.memoizedState.tag & 1) {
    if (n.flags |= 2048, bs(9, f0.bind(null, n, r, o, t), void 0, null), Fe === null)
        throw Error(_(349));
    Hr & 30 || d0(n, t, o);
} return o; }
function d0(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)); }
function f0(e, t, n, r) { t.value = n, t.getSnapshot = r, h0(t) && m0(e); }
function p0(e, t, n) { return n(function () { h0(t) && m0(e); }); }
function h0(e) { var t = e.getSnapshot; e = e.value; try {
    var n = t();
    return !qt(e, n);
}
catch (_q) {
    return !0;
} }
function m0(e) { var t = kn(e, 1); t !== null && Wt(t, e, 1, -1); }
function Hm(e) { var t = tn(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Es, lastRenderedState: e }, t.queue = e, e = e.dispatch = pP.bind(null, Re, e), [t.memoizedState, e]; }
function bs(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e; }
function v0() { return Mt().memoizedState; }
function Wa(e, t, n, r) { var o = tn(); Re.flags |= e, o.memoizedState = bs(1 | t, n, void 0, r === void 0 ? null : r); }
function Gl(e, t, n, r) { var o = Mt(); r = r === void 0 ? null : r; var i = void 0; if (De !== null) {
    var s = De.memoizedState;
    if (i = s.destroy, r !== null && Ep(r, s.deps)) {
        o.memoizedState = bs(t, n, i, r);
        return;
    }
} Re.flags |= e, o.memoizedState = bs(1 | t, n, i, r); }
function Wm(e, t) { return Wa(8390656, 8, e, t); }
function Rp(e, t) { return Gl(2048, 8, e, t); }
function g0(e, t) { return Gl(4, 2, e, t); }
function y0(e, t) { return Gl(4, 4, e, t); }
function x0(e, t) { if (typeof t == "function")
    return e = e(), t(e), function () { t(null); }; if (t != null)
    return e = e(), t.current = e, function () { t.current = null; }; }
function w0(e, t, n) { return n = n != null ? n.concat([e]) : null, Gl(4, 4, x0.bind(null, t, e), n); }
function Np() { }
function S0(e, t) { var n = Mt(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Ep(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
function C0(e, t) { var n = Mt(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Ep(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); }
function E0(e, t, n) { return Hr & 21 ? (qt(n, t) || (n = ky(), Re.lanes |= n, Wr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ut = !0), e.memoizedState = n); }
function dP(e, t) { var n = ve; ve = n !== 0 && 4 > n ? n : 4, e(!0); var r = vu.transition; vu.transition = {}; try {
    e(!1), t();
}
finally {
    ve = n, vu.transition = r;
} }
function b0() { return Mt().memoizedState; }
function fP(e, t, n) { var r = cr(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, P0(e))
    R0(t, n);
else if (n = s0(e, t, n, r), n !== null) {
    var o = rt();
    Wt(n, e, r, o), N0(n, t, r);
} }
function pP(e, t, n) { var r = cr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (P0(e))
    R0(t, o);
else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
            var s = t.lastRenderedState, a = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = a, qt(a, s)) {
                var l = t.interleaved;
                l === null ? (o.next = o, yp(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                return;
            }
        }
        catch (_q) { }
        finally { }
    n = s0(e, t, o, r), n !== null && (o = rt(), Wt(n, e, r, o), N0(n, t, r));
} }
function P0(e) { var t = e.alternate; return e === Re || t !== null && t === Re; }
function R0(e, t) { es = gl = !0; var n = e.pending; n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
function N0(e, t, n) { if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, op(e, n);
} }
var yl = { readContext: _t, useCallback: Ge, useContext: Ge, useEffect: Ge, useImperativeHandle: Ge, useInsertionEffect: Ge, useLayoutEffect: Ge, useMemo: Ge, useReducer: Ge, useRef: Ge, useState: Ge, useDebugValue: Ge, useDeferredValue: Ge, useTransition: Ge, useMutableSource: Ge, useSyncExternalStore: Ge, useId: Ge, unstable_isNewReconciler: !1 }, hP = { readContext: _t, useCallback: function (e, t) { return tn().memoizedState = [e, t === void 0 ? null : t], e; }, useContext: _t, useEffect: Wm, useImperativeHandle: function (e, t, n) { return n = n != null ? n.concat([e]) : null, Wa(4194308, 4, x0.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Wa(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Wa(4, 2, e, t); }, useMemo: function (e, t) { var n = tn(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = tn(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = fP.bind(null, Re, e), [r.memoizedState, e]; }, useRef: function (e) { var t = tn(); return e = { current: e }, t.memoizedState = e; }, useState: Hm, useDebugValue: Np, useDeferredValue: function (e) { return tn().memoizedState = e; }, useTransition: function () { var e = Hm(!1), t = e[0]; return e = dP.bind(null, e[1]), tn().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = Re, o = tn(); if (Ce) {
        if (n === void 0)
            throw Error(_(407));
        n = n();
    }
    else {
        if (n = t(), Fe === null)
            throw Error(_(349));
        Hr & 30 || d0(r, t, n);
    } o.memoizedState = n; var i = { value: n, getSnapshot: t }; return o.queue = i, Wm(p0.bind(null, r, i, e), [e]), r.flags |= 2048, bs(9, f0.bind(null, r, i, n, t), void 0, null), n; }, useId: function () { var e = tn(), t = Fe.identifierPrefix; if (Ce) {
        var n = bn, r = En;
        n = (r & ~(1 << 32 - Ht(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Cs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    }
    else
        n = uP++, t = ":" + t + "r" + n.toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, mP = { readContext: _t, useCallback: S0, useContext: _t, useEffect: Rp, useImperativeHandle: w0, useInsertionEffect: g0, useLayoutEffect: y0, useMemo: C0, useReducer: gu, useRef: v0, useState: function () { return gu(Es); }, useDebugValue: Np, useDeferredValue: function (e) { var t = Mt(); return E0(t, De.memoizedState, e); }, useTransition: function () { var e = gu(Es)[0], t = Mt().memoizedState; return [e, t]; }, useMutableSource: c0, useSyncExternalStore: u0, useId: b0, unstable_isNewReconciler: !1 }, vP = { readContext: _t, useCallback: S0, useContext: _t, useEffect: Rp, useImperativeHandle: w0, useInsertionEffect: g0, useLayoutEffect: y0, useMemo: C0, useReducer: yu, useRef: v0, useState: function () { return yu(Es); }, useDebugValue: Np, useDeferredValue: function (e) { var t = Mt(); return De === null ? t.memoizedState = e : E0(t, De.memoizedState, e); }, useTransition: function () { var e = yu(Es)[0], t = Mt().memoizedState; return [e, t]; }, useMutableSource: c0, useSyncExternalStore: u0, useId: b0, unstable_isNewReconciler: !1 };
function Ft(e, t) { if (e && e.defaultProps) {
    t = Ne({}, t), e = e.defaultProps;
    for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
    return t;
} return t; }
function Pd(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : Ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n); }
var Ql = { isMounted: function (e) { return (e = e._reactInternals) ? no(e) === e : !1; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = rt(), o = cr(e), i = Pn(r, o); i.payload = t, n != null && (i.callback = n), t = ar(e, i, o), t !== null && (Wt(t, e, o, r), Va(t, e, o)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = rt(), o = cr(e), i = Pn(r, o); i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ar(e, i, o), t !== null && (Wt(t, e, o, r), Va(t, e, o)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = rt(), r = cr(e), o = Pn(n, r); o.tag = 2, t != null && (o.callback = t), t = ar(e, o, r), t !== null && (Wt(t, e, r, n), Va(t, e, r)); } };
function Km(e, t, n, r, o, i, s) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !vs(n, r) || !vs(o, i) : !0; }
function k0(e, t, n) { var r = !1, o = pr, i = t.contextType; return typeof i == "object" && i !== null ? i = _t(i) : (o = ft(t) ? Ur : Je.current, r = t.contextTypes, i = (r = r != null) ? Xo(e, o) : pr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ql, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t; }
function Gm(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ql.enqueueReplaceState(t, t.state, null); }
function Rd(e, t, n, r) { var o = e.stateNode; o.props = n, o.state = e.memoizedState, o.refs = {}, xp(e); var i = t.contextType; typeof i == "object" && i !== null ? o.context = _t(i) : (i = ft(t) ? Ur : Je.current, o.context = Xo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Pd(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ql.enqueueReplaceState(o, o.state, null), ml(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308); }
function ti(e, t) {
    try {
        var n = "", r = t;
        do
            n += HE(r), r = r.return;
        while (r);
        var o = n;
    }
    catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function xu(e, t, n) { return { value: e, source: null, stack: n !== null && n !== void 0 ? n : null, digest: t !== null && t !== void 0 ? t : null }; }
function Nd(e, t) { try {
    console.error(t.value);
}
catch (n) {
    setTimeout(function () { throw n; });
} }
var gP = typeof WeakMap == "function" ? WeakMap : Map;
function T0(e, t, n) { n = Pn(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { wl || (wl = !0, Ld = r), Nd(e, t); }, n; }
function O0(e, t, n) { n = Pn(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") {
    var o = t.value;
    n.payload = function () { return r(o); }, n.callback = function () { Nd(e, t); };
} var i = e.stateNode; return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function () { Nd(e, t), typeof r != "function" && (lr === null ? lr = new Set([this]) : lr.add(this)); var s = t.stack; this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" }); }), n; }
function Qm(e, t, n) { var r = e.pingCache; if (r === null) {
    r = e.pingCache = new gP;
    var o = new Set;
    r.set(t, o);
}
else
    o = r.get(t), o === void 0 && (o = new Set, r.set(t, o)); o.has(n) || (o.add(n), e = jP.bind(null, e, t, n), t.then(e, e)); }
function qm(e) { do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
    e = e.return;
} while (e !== null); return null; }
function Ym(e, t, n, r, o) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pn(-1, 1), t.tag = 2, ar(n, t, 1))), n.lanes |= 1), e); }
var yP = An.ReactCurrentOwner, ut = !1;
function nt(e, t, n, r) { t.child = e === null ? i0(t, null, n, r) : Zo(t, e.child, n, r); }
function Xm(e, t, n, r, o) { n = n.render; var i = t.ref; return jo(t, o), r = bp(e, t, n, r, i, o), n = Pp(), e !== null && !ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tn(e, t, o)) : (Ce && n && fp(t), t.flags |= 1, nt(e, t, r, o), t.child); }
function Jm(e, t, n, r, o) { if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Ip(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, j0(e, t, i, r, o)) : (e = qa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
} if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : vs, n(s, r) && e.ref === t.ref)
        return Tn(e, t, o);
} return t.flags |= 1, e = ur(i, r), e.ref = t.ref, e.return = t, t.child = e; }
function j0(e, t, n, r, o) { if (e !== null) {
    var i = e.memoizedProps;
    if (vs(i, r) && e.ref === t.ref)
        if (ut = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
            e.flags & 131072 && (ut = !0);
        else
            return t.lanes = e.lanes, Tn(e, t, o);
} return kd(e, t, n, r, o); }
function A0(e, t, n) { var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
    if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ge(Ro, gt), gt |= n;
    else {
        if (!(n & 1073741824))
            return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ge(Ro, gt), gt |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ge(Ro, gt), gt |= r;
    }
else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ge(Ro, gt), gt |= r; return nt(e, t, o, n), t.child; }
function _0(e, t) { var n = t.ref; (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); }
function kd(e, t, n, r, o) { var i = ft(n) ? Ur : Je.current; return i = Xo(t, i), jo(t, o), n = bp(e, t, n, r, i, o), r = Pp(), e !== null && !ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tn(e, t, o)) : (Ce && r && fp(t), t.flags |= 1, nt(e, t, n, o), t.child); }
function Zm(e, t, n, r, o) { if (ft(n)) {
    var i = !0;
    ul(t);
}
else
    i = !1; if (jo(t, o), t.stateNode === null)
    Ka(e, t), k0(t, n, r), Rd(t, n, r, o), r = !0;
else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = _t(c) : (c = ft(n) ? Ur : Je.current, c = Xo(t, c));
    var d = n.getDerivedStateFromProps, f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== c) && Gm(t, s, r, c), Hn = !1;
    var h = t.memoizedState;
    s.state = h, ml(t, r, s, o), l = t.memoizedState, a !== r || h !== l || dt.current || Hn ? (typeof d == "function" && (Pd(t, n, d, r), l = t.memoizedState), (a = Hn || Km(t, n, a, r, h, l, c)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = c, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
}
else {
    s = t.stateNode, a0(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Ft(t.type, a), s.props = c, f = t.pendingProps, h = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = _t(l) : (l = ft(n) ? Ur : Je.current, l = Xo(t, l));
    var x = n.getDerivedStateFromProps;
    (d = typeof x == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || h !== l) && Gm(t, s, r, l), Hn = !1, h = t.memoizedState, s.state = h, ml(t, r, s, o);
    var y = t.memoizedState;
    a !== f || h !== y || dt.current || Hn ? (typeof x == "function" && (Pd(t, n, x, r), y = t.memoizedState), (c = Hn || Km(t, n, c, r, h, y, l) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = l, r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
} return Td(e, t, n, r, i, o); }
function Td(e, t, n, r, o, i) { _0(e, t); var s = (t.flags & 128) !== 0; if (!r && !s)
    return o && $m(t, n, !1), Tn(e, t, i); r = t.stateNode, yP.current = t; var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return t.flags |= 1, e !== null && s ? (t.child = Zo(t, e.child, null, i), t.child = Zo(t, null, a, i)) : nt(e, t, a, i), t.memoizedState = r.state, o && $m(t, n, !0), t.child; }
function M0(e) { var t = e.stateNode; t.pendingContext ? Lm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lm(e, t.context, !1), wp(e, t.containerInfo); }
function ev(e, t, n, r, o) { return Jo(), hp(o), t.flags |= 256, nt(e, t, n, r), t.child; }
var Od = { dehydrated: null, treeContext: null, retryLane: 0 };
function jd(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
function I0(e, t, n) { var r = t.pendingProps, o = be.current, i = !1, s = (t.flags & 128) !== 0, a; if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ge(be, o & 1), e === null)
    return Ed(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Xl(s, r, 0, null), e = Fr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = jd(n), t.memoizedState = Od, e) : kp(t, s)); if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return xP(e, t, s, r, a, o, n); if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = ur(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = ur(a, i) : (i = Fr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? jd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Od, r;
} return i = e.child, e = i.sibling, r = ur(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r; }
function kp(e, t) { return t = Xl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t; }
function Ea(e, t, n, r) { return r !== null && hp(r), Zo(t, e.child, null, n), e = kp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e; }
function xP(e, t, n, r, o, i, s) { if (n)
    return t.flags & 256 ? (t.flags &= -257, r = xu(Error(_(422))), Ea(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Xl({ mode: "visible", children: r.children }, o, 0, null), i = Fr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Zo(t, e.child, null, s), t.child.memoizedState = jd(s), t.memoizedState = Od, i); if (!(t.mode & 1))
    return Ea(e, t, s, null); if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
        var a = r.dgst;
    return r = a, i = Error(_(419)), r = xu(i, r, void 0), Ea(e, t, s, r);
} if (a = (s & e.childLanes) !== 0, ut || a) {
    if (r = Fe, r !== null) {
        switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default: o = 0;
        }
        o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, kn(e, o), Wt(r, e, o, -1));
    }
    return Mp(), r = xu(Error(_(421))), Ea(e, t, s, r);
} return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = AP.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, xt = sr(o.nextSibling), wt = t, Ce = !0, Ut = null, e !== null && (kt[Tt++] = En, kt[Tt++] = bn, kt[Tt++] = Vr, En = e.id, bn = e.overflow, Vr = t), t = kp(t, r.children), t.flags |= 4096, t); }
function tv(e, t, n) { e.lanes |= t; var r = e.alternate; r !== null && (r.lanes |= t), bd(e.return, t, n); }
function wu(e, t, n, r, o) { var i = e.memoizedState; i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o); }
function D0(e, t, n) { var r = t.pendingProps, o = r.revealOrder, i = r.tail; if (nt(e, t, r.children, n), r = be.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
else {
    if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && tv(e, n, t);
            else if (e.tag === 19)
                tv(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
} if (ge(be, r), !(t.mode & 1))
    t.memoizedState = null;
else
    switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;)
                e = n.alternate, e !== null && vl(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), wu(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && vl(e) === null) {
                    t.child = o;
                    break;
                }
                e = o.sibling, o.sibling = n, n = o, o = e;
            }
            wu(t, !0, n, null, i);
            break;
        case "together":
            wu(t, !1, null, null, void 0);
            break;
        default: t.memoizedState = null;
    } return t.child; }
function Ka(e, t) { !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2); }
function Tn(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), Wr |= t.lanes, !(n & t.childLanes))
    return null; if (e !== null && t.child !== e.child)
    throw Error(_(153)); if (t.child !== null) {
    for (e = t.child, n = ur(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        e = e.sibling, n = n.sibling = ur(e, e.pendingProps), n.return = t;
    n.sibling = null;
} return t.child; }
function wP(e, t, n) { switch (t.tag) {
    case 3:
        M0(t), Jo();
        break;
    case 5:
        l0(t);
        break;
    case 1:
        ft(t.type) && ul(t);
        break;
    case 4:
        wp(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        ge(pl, r._currentValue), r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState, r !== null)
            return r.dehydrated !== null ? (ge(be, be.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? I0(e, t, n) : (ge(be, be.current & 1), e = Tn(e, t, n), e !== null ? e.sibling : null);
        ge(be, be.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
            if (r)
                return D0(e, t, n);
            t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ge(be, be.current), r)
            break;
        return null;
    case 22:
    case 23: return t.lanes = 0, A0(e, t, n);
} return Tn(e, t, n); }
var L0, Ad, $0, F0;
L0 = function (e, t) { for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
    }
    if (n === t)
        break;
    for (; n.sibling === null;) {
        if (n.return === null || n.return === t)
            return;
        n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
} };
Ad = function () { };
$0 = function (e, t, n, r) { var o = e.memoizedProps; if (o !== r) {
    e = t.stateNode, Tr(dn.current);
    var i = null;
    switch (n) {
        case "input":
            o = ed(e, o), r = ed(e, r), i = [];
            break;
        case "select":
            o = Ne({}, o, { value: void 0 }), r = Ne({}, r, { value: void 0 }), i = [];
            break;
        case "textarea":
            o = rd(e, o), r = rd(e, r), i = [];
            break;
        default: typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ll);
    }
    id(n, r);
    var s;
    n = null;
    for (c in o)
        if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
            if (c === "style") {
                var a = o[c];
                for (s in a)
                    a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
            }
            else
                c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (cs.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
        var l = r[c];
        if (a = o != null ? o[c] : void 0, r.hasOwnProperty(c) && l !== a && (l != null || a != null))
            if (c === "style")
                if (a) {
                    for (s in a)
                        !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                    for (s in l)
                        l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
                }
                else
                    n || (i || (i = []), i.push(c, n)), n = l;
            else
                c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (cs.hasOwnProperty(c) ? (l != null && c === "onScroll" && xe("scroll", e), i || a === l || (i = [])) : (i = i || []).push(c, l));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
} };
F0 = function (e, t, n, r) { n !== r && (t.flags |= 4); };
function Di(e, t) { if (!Ce)
    switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;)
                t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;)
                n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    } }
function Qe(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0; if (t)
    for (var o = e.child; o !== null;)
        n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
else
    for (o = e.child; o !== null;)
        n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; }
function SP(e, t, n) { var r = t.pendingProps; switch (pp(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14: return Qe(t), null;
    case 1: return ft(t.type) && cl(), Qe(t), null;
    case 3: return r = t.stateNode, ei(), we(dt), we(Je), Cp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Sa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ut !== null && (zd(Ut), Ut = null))), Ad(e, t), Qe(t), null;
    case 5:
        Sp(t);
        var o = Tr(Ss.current);
        if (n = t.type, e !== null && t.stateNode != null)
            $0(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(_(166));
                return Qe(t), null;
            }
            if (e = Tr(dn.current), Sa(t)) {
                r = t.stateNode, n = t.type;
                var i = t.memoizedProps;
                switch (r[ln] = t, r[xs] = i, e = (t.mode & 1) !== 0, n) {
                    case "dialog":
                        xe("cancel", r), xe("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        xe("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Wi.length; o++)
                            xe(Wi[o], r);
                        break;
                    case "source":
                        xe("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        xe("error", r), xe("load", r);
                        break;
                    case "details":
                        xe("toggle", r);
                        break;
                    case "input":
                        um(r, i), xe("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = { wasMultiple: !!i.multiple }, xe("invalid", r);
                        break;
                    case "textarea": fm(r, i), xe("invalid", r);
                }
                id(n, i), o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var a = i[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && wa(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && wa(r.textContent, a, e), o = ["children", "" + a]) : cs.hasOwnProperty(s) && a != null && s === "onScroll" && xe("scroll", r);
                    }
                switch (n) {
                    case "input":
                        fa(r), dm(r, i, !0);
                        break;
                    case "textarea":
                        fa(r), pm(r);
                        break;
                    case "select":
                    case "option": break;
                    default: typeof i.onClick == "function" && (r.onclick = ll);
                }
                r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
            }
            else {
                s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = py(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[ln] = t, e[xs] = r, L0(e, t, !1, !1), t.stateNode = e;
                e: {
                    switch (s = sd(n, r), n) {
                        case "dialog":
                            xe("cancel", e), xe("close", e), o = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            xe("load", e), o = r;
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Wi.length; o++)
                                xe(Wi[o], e);
                            o = r;
                            break;
                        case "source":
                            xe("error", e), o = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            xe("error", e), xe("load", e), o = r;
                            break;
                        case "details":
                            xe("toggle", e), o = r;
                            break;
                        case "input":
                            um(e, r), o = ed(e, r), xe("invalid", e);
                            break;
                        case "option":
                            o = r;
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!r.multiple }, o = Ne({}, r, { value: void 0 }), xe("invalid", e);
                            break;
                        case "textarea":
                            fm(e, r), o = rd(e, r), xe("invalid", e);
                            break;
                        default: o = r;
                    }
                    id(n, o), a = o;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? vy(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && hy(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && us(e, l) : typeof l == "number" && us(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (cs.hasOwnProperty(i) ? l != null && i === "onScroll" && xe("scroll", e) : l != null && Jf(e, i, l, s));
                        }
                    switch (n) {
                        case "input":
                            fa(e), dm(e, r, !1);
                            break;
                        case "textarea":
                            fa(e), pm(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + fr(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple, i = r.value, i != null ? No(e, !!r.multiple, i, !1) : r.defaultValue != null && No(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default: typeof o.onClick == "function" && (e.onclick = ll);
                    }
                    switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default: r = !1;
                    }
                }
                r && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Qe(t), null;
    case 6:
        if (e && t.stateNode != null)
            F0(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(_(166));
            if (n = Tr(Ss.current), Tr(dn.current), Sa(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[ln] = t, (i = r.nodeValue !== n) && (e = wt, e !== null))
                    switch (e.tag) {
                        case 3:
                            wa(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5: e.memoizedProps.suppressHydrationWarning !== !0 && wa(r.nodeValue, n, (e.mode & 1) !== 0);
                    }
                i && (t.flags |= 4);
            }
            else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ln] = t, t.stateNode = r;
        }
        return Qe(t), null;
    case 13:
        if (we(be), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Ce && xt !== null && t.mode & 1 && !(t.flags & 128))
                r0(), Jo(), t.flags |= 98560, i = !1;
            else if (i = Sa(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(_(318));
                    if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
                        throw Error(_(317));
                    i[ln] = t;
                }
                else
                    Jo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                Qe(t), i = !1;
            }
            else
                Ut !== null && (zd(Ut), Ut = null), i = !0;
            if (!i)
                return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || be.current & 1 ? Le === 0 && (Le = 3) : Mp())), t.updateQueue !== null && (t.flags |= 4), Qe(t), null);
    case 4: return ei(), Ad(e, t), e === null && gs(t.stateNode.containerInfo), Qe(t), null;
    case 10: return gp(t.type._context), Qe(t), null;
    case 17: return ft(t.type) && cl(), Qe(t), null;
    case 19:
        if (we(be), i = t.memoizedState, i === null)
            return Qe(t), null;
        if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
            if (r)
                Di(i, !1);
            else {
                if (Le !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null;) {
                        if (s = vl(e), s !== null) {
                            for (t.flags |= 128, Di(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)
                                i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                            return ge(be, be.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                i.tail !== null && je() > ni && (t.flags |= 128, r = !0, Di(i, !1), t.lanes = 4194304);
            }
        else {
            if (!r)
                if (e = vl(s), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Di(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ce)
                        return Qe(t), null;
                }
                else
                    2 * je() - i.renderingStartTime > ni && n !== 1073741824 && (t.flags |= 128, r = !0, Di(i, !1), t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = je(), t.sibling = null, n = be.current, ge(be, r ? n & 1 | 2 : n & 1), t) : (Qe(t), null);
    case 22:
    case 23: return _p(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? gt & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), null;
    case 24: return null;
    case 25: return null;
} throw Error(_(156, t.tag)); }
function CP(e, t) { switch (pp(t), t.tag) {
    case 1: return ft(t.type) && cl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3: return ei(), we(dt), we(Je), Cp(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5: return Sp(t), null;
    case 13:
        if (we(be), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(_(340));
            Jo();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19: return we(be), null;
    case 4: return ei(), null;
    case 10: return gp(t.type._context), null;
    case 22:
    case 23: return _p(), null;
    case 24: return null;
    default: return null;
} }
var ba = !1, Ye = !1, EP = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Po(e, t) { var n = e.ref; if (n !== null)
    if (typeof n == "function")
        try {
            n(null);
        }
        catch (r) {
            Te(e, t, r);
        }
    else
        n.current = null; }
function _d(e, t, n) { try {
    n();
}
catch (r) {
    Te(e, t, r);
} }
var nv = !1;
function bP(e, t) { if (vd = il, e = Hy(), dp(e)) {
    if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
    else
        e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset, i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType;
                }
                catch (_q) {
                    n = null;
                    break e;
                }
                var s = 0, a = -1, l = -1, c = 0, d = 0, f = e, h = null;
                t: for (;;) {
                    for (var x; f !== n || o !== 0 && f.nodeType !== 3 || (a = s + o), f !== i || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (x = f.firstChild) !== null;)
                        h = f, f = x;
                    for (;;) {
                        if (f === e)
                            break t;
                        if (h === n && ++c === o && (a = s), h === i && ++d === r && (l = s), (x = f.nextSibling) !== null)
                            break;
                        f = h, h = f.parentNode;
                    }
                    f = x;
                }
                n = a === -1 || l === -1 ? null : { start: a, end: l };
            }
            else
                n = null;
        }
    n = n || { start: 0, end: 0 };
}
else
    n = null; for (gd = { focusedElem: e, selectionRange: n }, il = !1, B = t; B !== null;)
    if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, B = e;
    else
        for (; B !== null;) {
            t = B;
            try {
                var y = t.alternate;
                if (t.flags & 1024)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15: break;
                        case 1:
                            if (y !== null) {
                                var v = y.memoizedProps, S = y.memoizedState, m = t.stateNode, g = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ft(t.type, v), S);
                                m.__reactInternalSnapshotBeforeUpdate = g;
                            }
                            break;
                        case 3:
                            var w = t.stateNode.containerInfo;
                            w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17: break;
                        default: throw Error(_(163));
                    }
            }
            catch (C) {
                Te(t, t.return, C);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, B = e;
                break;
            }
            B = t.return;
        } return y = nv, nv = !1, y; }
function ts(e, t, n) { var r = t.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
        if ((o.tag & e) === e) {
            var i = o.destroy;
            o.destroy = void 0, i !== void 0 && _d(t, n, i);
        }
        o = o.next;
    } while (o !== r);
} }
function ql(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
        if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
        }
        n = n.next;
    } while (n !== t);
} }
function Md(e) { var t = e.ref; if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
        case 5:
            e = n;
            break;
        default: e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
} }
function z0(e) { var t = e.alternate; t !== null && (e.alternate = null, z0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ln], delete t[xs], delete t[wd], delete t[sP], delete t[aP])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
function B0(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
function rv(e) { e: for (;;) {
    for (; e.sibling === null;) {
        if (e.return === null || B0(e.return))
            return null;
        e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
        e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2))
        return e.stateNode;
} }
function Id(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ll));
else if (r !== 4 && (e = e.child, e !== null))
    for (Id(e, t, n), e = e.sibling; e !== null;)
        Id(e, t, n), e = e.sibling; }
function Dd(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
else if (r !== 4 && (e = e.child, e !== null))
    for (Dd(e, t, n), e = e.sibling; e !== null;)
        Dd(e, t, n), e = e.sibling; }
var Be = null, Bt = !1;
function Dn(e, t, n) { for (n = n.child; n !== null;)
    U0(e, t, n), n = n.sibling; }
function U0(e, t, n) { if (un && typeof un.onCommitFiberUnmount == "function")
    try {
        un.onCommitFiberUnmount(Bl, n);
    }
    catch (_q) { } switch (n.tag) {
    case 5: Ye || Po(n, t);
    case 6:
        var r = Be, o = Bt;
        Be = null, Dn(e, t, n), Be = r, Bt = o, Be !== null && (Bt ? (e = Be, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Be.removeChild(n.stateNode));
        break;
    case 18:
        Be !== null && (Bt ? (e = Be, n = n.stateNode, e.nodeType === 8 ? pu(e.parentNode, n) : e.nodeType === 1 && pu(e, n), hs(e)) : pu(Be, n.stateNode));
        break;
    case 4:
        r = Be, o = Bt, Be = n.stateNode.containerInfo, Bt = !0, Dn(e, t, n), Be = r, Bt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            o = r = r.next;
            do {
                var i = o, s = i.destroy;
                i = i.tag, s !== void 0 && (i & 2 || i & 4) && _d(n, t, s), o = o.next;
            } while (o !== r);
        }
        Dn(e, t, n);
        break;
    case 1:
        if (!Ye && (Po(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            }
            catch (a) {
                Te(n, t, a);
            }
        Dn(e, t, n);
        break;
    case 21:
        Dn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ye = (r = Ye) || n.memoizedState !== null, Dn(e, t, n), Ye = r) : Dn(e, t, n);
        break;
    default: Dn(e, t, n);
} }
function ov(e) { var t = e.updateQueue; if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new EP), t.forEach(function (r) { var o = _P.bind(null, e, r); n.has(r) || (n.add(r), r.then(o, o)); });
} }
function $t(e, t) { var n = t.deletions; if (n !== null)
    for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
            var i = e, s = t, a = s;
            e: for (; a !== null;) {
                switch (a.tag) {
                    case 5:
                        Be = a.stateNode, Bt = !1;
                        break e;
                    case 3:
                        Be = a.stateNode.containerInfo, Bt = !0;
                        break e;
                    case 4:
                        Be = a.stateNode.containerInfo, Bt = !0;
                        break e;
                }
                a = a.return;
            }
            if (Be === null)
                throw Error(_(160));
            U0(i, s, o), Be = null, Bt = !1;
            var l = o.alternate;
            l !== null && (l.return = null), o.return = null;
        }
        catch (c) {
            Te(o, t, c);
        }
    } if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
        V0(t, e), t = t.sibling; }
function V0(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if ($t(t, e), en(e), r & 4) {
            try {
                ts(3, e, e.return), ql(3, e);
            }
            catch (v) {
                Te(e, e.return, v);
            }
            try {
                ts(5, e, e.return);
            }
            catch (v) {
                Te(e, e.return, v);
            }
        }
        break;
    case 1:
        $t(t, e), en(e), r & 512 && n !== null && Po(n, n.return);
        break;
    case 5:
        if ($t(t, e), en(e), r & 512 && n !== null && Po(n, n.return), e.flags & 32) {
            var o = e.stateNode;
            try {
                us(o, "");
            }
            catch (v) {
                Te(e, e.return, v);
            }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
            var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
            if (e.updateQueue = null, l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && dy(o, i), sd(a, s);
                    var c = sd(a, i);
                    for (s = 0; s < l.length; s += 2) {
                        var d = l[s], f = l[s + 1];
                        d === "style" ? vy(o, f) : d === "dangerouslySetInnerHTML" ? hy(o, f) : d === "children" ? us(o, f) : Jf(o, d, f, c);
                    }
                    switch (a) {
                        case "input":
                            td(o, i);
                            break;
                        case "textarea":
                            fy(o, i);
                            break;
                        case "select":
                            var h = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var x = i.value;
                            x != null ? No(o, !!i.multiple, x, !1) : h !== !!i.multiple && (i.defaultValue != null ? No(o, !!i.multiple, i.defaultValue, !0) : No(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[xs] = i;
                }
                catch (v) {
                    Te(e, e.return, v);
                }
        }
        break;
    case 6:
        if ($t(t, e), en(e), r & 4) {
            if (e.stateNode === null)
                throw Error(_(162));
            o = e.stateNode, i = e.memoizedProps;
            try {
                o.nodeValue = i;
            }
            catch (v) {
                Te(e, e.return, v);
            }
        }
        break;
    case 3:
        if ($t(t, e), en(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                hs(t.containerInfo);
            }
            catch (v) {
                Te(e, e.return, v);
            }
        break;
    case 4:
        $t(t, e), en(e);
        break;
    case 13:
        $t(t, e), en(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (jp = je())), r & 4 && ov(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ye = (c = Ye) || d, $t(t, e), Ye = c) : $t(t, e), en(e), r & 8192) {
            if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for (B = e, d = e.child; d !== null;) {
                    for (f = B = d; B !== null;) {
                        switch (h = B, x = h.child, h.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                ts(4, h, h.return);
                                break;
                            case 1:
                                Po(h, h.return);
                                var y = h.stateNode;
                                if (typeof y.componentWillUnmount == "function") {
                                    r = h, n = h.return;
                                    try {
                                        t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                                    }
                                    catch (v) {
                                        Te(r, n, v);
                                    }
                                }
                                break;
                            case 5:
                                Po(h, h.return);
                                break;
                            case 22: if (h.memoizedState !== null) {
                                sv(f);
                                continue;
                            }
                        }
                        x !== null ? (x.return = h, B = x) : sv(f);
                    }
                    d = d.sibling;
                }
            e: for (d = null, f = e;;) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            o = f.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = my("display", s));
                        }
                        catch (v) {
                            Te(e, e.return, v);
                        }
                    }
                }
                else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                        }
                        catch (v) {
                            Te(e, e.return, v);
                        }
                }
                else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f, f = f.child;
                    continue;
                }
                if (f === e)
                    break e;
                for (; f.sibling === null;) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null), f = f.return;
                }
                d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
            }
        }
        break;
    case 19:
        $t(t, e), en(e), r & 4 && ov(e);
        break;
    case 21: break;
    default: $t(t, e), en(e);
} }
function en(e) { var t = e.flags; if (t & 2) {
    try {
        e: {
            for (var n = e.return; n !== null;) {
                if (B0(n)) {
                    var r = n;
                    break e;
                }
                n = n.return;
            }
            throw Error(_(160));
        }
        switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (us(o, ""), r.flags &= -33);
                var i = rv(e);
                Dd(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo, a = rv(e);
                Id(e, a, s);
                break;
            default: throw Error(_(161));
        }
    }
    catch (l) {
        Te(e, e.return, l);
    }
    e.flags &= -3;
} t & 4096 && (e.flags &= -4097); }
function PP(e, t, n) { B = e, H0(e); }
function H0(e, t, n) { for (var r = (e.mode & 1) !== 0; B !== null;) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
        var s = o.memoizedState !== null || ba;
        if (!s) {
            var a = o.alternate, l = a !== null && a.memoizedState !== null || Ye;
            a = ba;
            var c = Ye;
            if (ba = s, (Ye = l) && !c)
                for (B = o; B !== null;)
                    s = B, l = s.child, s.tag === 22 && s.memoizedState !== null ? av(o) : l !== null ? (l.return = s, B = l) : av(o);
            for (; i !== null;)
                B = i, H0(i), i = i.sibling;
            B = o, ba = a, Ye = c;
        }
        iv(e);
    }
    else
        o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : iv(e);
} }
function iv(e) { for (; B !== null;) {
    var t = B;
    if (t.flags & 8772) {
        var n = t.alternate;
        try {
            if (t.flags & 8772)
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ye || ql(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ye)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Ft(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                        var i = t.updateQueue;
                        i !== null && Vm(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null)
                                switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1: n = t.child.stateNode;
                                }
                            Vm(t, s, n);
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img": l.src && (n.src = l.src);
                            }
                        }
                        break;
                    case 6: break;
                    case 4: break;
                    case 12: break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && hs(f);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25: break;
                    default: throw Error(_(163));
                }
            Ye || t.flags & 512 && Md(t);
        }
        catch (h) {
            Te(t, t.return, h);
        }
    }
    if (t === e) {
        B = null;
        break;
    }
    if (n = t.sibling, n !== null) {
        n.return = t.return, B = n;
        break;
    }
    B = t.return;
} }
function sv(e) { for (; B !== null;) {
    var t = B;
    if (t === e) {
        B = null;
        break;
    }
    var n = t.sibling;
    if (n !== null) {
        n.return = t.return, B = n;
        break;
    }
    B = t.return;
} }
function av(e) { for (; B !== null;) {
    var t = B;
    try {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ql(4, t);
                }
                catch (l) {
                    Te(t, n, l);
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount();
                    }
                    catch (l) {
                        Te(t, o, l);
                    }
                }
                var i = t.return;
                try {
                    Md(t);
                }
                catch (l) {
                    Te(t, i, l);
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Md(t);
                }
                catch (l) {
                    Te(t, s, l);
                }
        }
    }
    catch (l) {
        Te(t, t.return, l);
    }
    if (t === e) {
        B = null;
        break;
    }
    var a = t.sibling;
    if (a !== null) {
        a.return = t.return, B = a;
        break;
    }
    B = t.return;
} }
var RP = Math.ceil, xl = An.ReactCurrentDispatcher, Tp = An.ReactCurrentOwner, jt = An.ReactCurrentBatchConfig, fe = 0, Fe = null, Ie = null, He = 0, gt = 0, Ro = xr(0), Le = 0, Ps = null, Wr = 0, Yl = 0, Op = 0, ns = null, ct = null, jp = 0, ni = 1 / 0, gn = null, wl = !1, Ld = null, lr = null, Pa = !1, tr = null, Sl = 0, rs = 0, $d = null, Ga = -1, Qa = 0;
function rt() { return fe & 6 ? je() : Ga !== -1 ? Ga : Ga = je(); }
function cr(e) { return e.mode & 1 ? fe & 2 && He !== 0 ? He & -He : cP.transition !== null ? (Qa === 0 && (Qa = ky()), Qa) : (e = ve, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Iy(e.type)), e) : 1; }
function Wt(e, t, n, r) { if (50 < rs)
    throw rs = 0, $d = null, Error(_(185)); Hs(e, n, r), (!(fe & 2) || e !== Fe) && (e === Fe && (!(fe & 2) && (Yl |= n), Le === 4 && Kn(e, He)), pt(e, r), n === 1 && fe === 0 && !(t.mode & 1) && (ni = je() + 500, Kl && wr())); }
function pt(e, t) { var n = e.callbackNode; cb(e, t); var r = ol(e, e === Fe ? He : 0); if (r === 0)
    n !== null && vm(n), e.callbackNode = null, e.callbackPriority = 0;
else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && vm(n), t === 1)
        e.tag === 0 ? lP(lv.bind(null, e)) : e0(lv.bind(null, e)), oP(function () { !(fe & 6) && wr(); }), n = null;
    else {
        switch (Ty(r)) {
            case 1:
                n = rp;
                break;
            case 4:
                n = Ry;
                break;
            case 16:
                n = rl;
                break;
            case 536870912:
                n = Ny;
                break;
            default: n = rl;
        }
        n = J0(n, W0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
} }
function W0(e, t) { if (Ga = -1, Qa = 0, fe & 6)
    throw Error(_(327)); var n = e.callbackNode; if (Ao() && e.callbackNode !== n)
    return null; var r = ol(e, e === Fe ? He : 0); if (r === 0)
    return null; if (r & 30 || r & e.expiredLanes || t)
    t = Cl(e, r);
else {
    t = r;
    var o = fe;
    fe |= 2;
    var i = G0();
    (Fe !== e || He !== t) && (gn = null, ni = je() + 500, $r(e, t));
    do
        try {
            TP();
            break;
        }
        catch (a) {
            K0(e, a);
        }
    while (!0);
    vp(), xl.current = i, fe = o, Ie !== null ? t = 0 : (Fe = null, He = 0, t = Le);
} if (t !== 0) {
    if (t === 2 && (o = dd(e), o !== 0 && (r = o, t = Fd(e, o))), t === 1)
        throw n = Ps, $r(e, 0), Kn(e, r), pt(e, je()), n;
    if (t === 6)
        Kn(e, r);
    else {
        if (o = e.current.alternate, !(r & 30) && !NP(o) && (t = Cl(e, r), t === 2 && (i = dd(e), i !== 0 && (r = i, t = Fd(e, i))), t === 1))
            throw n = Ps, $r(e, 0), Kn(e, r), pt(e, je()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
            case 0:
            case 1: throw Error(_(345));
            case 2:
                Pr(e, ct, gn);
                break;
            case 3:
                if (Kn(e, r), (r & 130023424) === r && (t = jp + 500 - je(), 10 < t)) {
                    if (ol(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes, (o & r) !== r) {
                        rt(), e.pingedLanes |= e.suspendedLanes & o;
                        break;
                    }
                    e.timeoutHandle = xd(Pr.bind(null, e, ct, gn), t);
                    break;
                }
                Pr(e, ct, gn);
                break;
            case 4:
                if (Kn(e, r), (r & 4194240) === r)
                    break;
                for (t = e.eventTimes, o = -1; 0 < r;) {
                    var s = 31 - Ht(r);
                    i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
                }
                if (r = o, r = je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * RP(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = xd(Pr.bind(null, e, ct, gn), r);
                    break;
                }
                Pr(e, ct, gn);
                break;
            case 5:
                Pr(e, ct, gn);
                break;
            default: throw Error(_(329));
        }
    }
} return pt(e, je()), e.callbackNode === n ? W0.bind(null, e) : null; }
function Fd(e, t) { var n = ns; return e.current.memoizedState.isDehydrated && ($r(e, t).flags |= 256), e = Cl(e, t), e !== 2 && (t = ct, ct = n, t !== null && zd(t)), e; }
function zd(e) { ct === null ? ct = e : ct.push.apply(ct, e); }
function NP(e) { for (var t = e;;) {
    if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
            for (var r = 0; r < n.length; r++) {
                var o = n[r], i = o.getSnapshot;
                o = o.value;
                try {
                    if (!qt(i(), o))
                        return !1;
                }
                catch (_q) {
                    return !1;
                }
            }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
    else {
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return !0;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    }
} return !0; }
function Kn(e, t) { for (t &= ~Op, t &= ~Yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - Ht(t), r = 1 << n;
    e[n] = -1, t &= ~r;
} }
function lv(e) { if (fe & 6)
    throw Error(_(327)); Ao(); var t = ol(e, 0); if (!(t & 1))
    return pt(e, je()), null; var n = Cl(e, t); if (e.tag !== 0 && n === 2) {
    var r = dd(e);
    r !== 0 && (t = r, n = Fd(e, r));
} if (n === 1)
    throw n = Ps, $r(e, 0), Kn(e, t), pt(e, je()), n; if (n === 6)
    throw Error(_(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Pr(e, ct, gn), pt(e, je()), null; }
function Ap(e, t) { var n = fe; fe |= 1; try {
    return e(t);
}
finally {
    fe = n, fe === 0 && (ni = je() + 500, Kl && wr());
} }
function Kr(e) { tr !== null && tr.tag === 0 && !(fe & 6) && Ao(); var t = fe; fe |= 1; var n = jt.transition, r = ve; try {
    if (jt.transition = null, ve = 1, e)
        return e();
}
finally {
    ve = r, jt.transition = n, fe = t, !(fe & 6) && wr();
} }
function _p() { gt = Ro.current, we(Ro); }
function $r(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, rP(n)), Ie !== null)
    for (n = Ie.return; n !== null;) {
        var r = n;
        switch (pp(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && cl();
                break;
            case 3:
                ei(), we(dt), we(Je), Cp();
                break;
            case 5:
                Sp(r);
                break;
            case 4:
                ei();
                break;
            case 13:
                we(be);
                break;
            case 19:
                we(be);
                break;
            case 10:
                gp(r.type._context);
                break;
            case 22:
            case 23: _p();
        }
        n = n.return;
    } if (Fe = e, Ie = e = ur(e.current, null), He = gt = t, Le = 0, Ps = null, Op = Yl = Wr = 0, ct = ns = null, kr !== null) {
    for (t = 0; t < kr.length; t++)
        if (n = kr[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var o = r.next, i = n.pending;
            if (i !== null) {
                var s = i.next;
                i.next = o, r.next = s;
            }
            n.pending = r;
        }
    kr = null;
} return e; }
function K0(e, t) { do {
    var n = Ie;
    try {
        if (vp(), Ha.current = yl, gl) {
            for (var r = Re.memoizedState; r !== null;) {
                var o = r.queue;
                o !== null && (o.pending = null), r = r.next;
            }
            gl = !1;
        }
        if (Hr = 0, $e = De = Re = null, es = !1, Cs = 0, Tp.current = null, n === null || n.return === null) {
            Le = 1, Ps = t, Ie = null;
            break;
        }
        e: {
            var i = e, s = n.return, a = n, l = t;
            if (t = He, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                var c = l, d = a, f = d.tag;
                if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                    var h = d.alternate;
                    h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null);
                }
                var x = qm(s);
                if (x !== null) {
                    x.flags &= -257, Ym(x, s, a, i, t), x.mode & 1 && Qm(i, c, t), t = x, l = c;
                    var y = t.updateQueue;
                    if (y === null) {
                        var v = new Set;
                        v.add(l), t.updateQueue = v;
                    }
                    else
                        y.add(l);
                    break e;
                }
                else {
                    if (!(t & 1)) {
                        Qm(i, c, t), Mp();
                        break e;
                    }
                    l = Error(_(426));
                }
            }
            else if (Ce && a.mode & 1) {
                var S = qm(s);
                if (S !== null) {
                    !(S.flags & 65536) && (S.flags |= 256), Ym(S, s, a, i, t), hp(ti(l, a));
                    break e;
                }
            }
            i = l = ti(l, a), Le !== 4 && (Le = 2), ns === null ? ns = [i] : ns.push(i), i = s;
            do {
                switch (i.tag) {
                    case 3:
                        i.flags |= 65536, t &= -t, i.lanes |= t;
                        var m = T0(i, l, t);
                        Um(i, m);
                        break e;
                    case 1:
                        a = l;
                        var g = i.type, w = i.stateNode;
                        if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (lr === null || !lr.has(w)))) {
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var C = O0(i, a, t);
                            Um(i, C);
                            break e;
                        }
                }
                i = i.return;
            } while (i !== null);
        }
        q0(n);
    }
    catch (E) {
        t = E, Ie === n && n !== null && (Ie = n = n.return);
        continue;
    }
    break;
} while (!0); }
function G0() { var e = xl.current; return xl.current = yl, e === null ? yl : e; }
function Mp() { (Le === 0 || Le === 3 || Le === 2) && (Le = 4), Fe === null || !(Wr & 268435455) && !(Yl & 268435455) || Kn(Fe, He); }
function Cl(e, t) { var n = fe; fe |= 2; var r = G0(); (Fe !== e || He !== t) && (gn = null, $r(e, t)); do
    try {
        kP();
        break;
    }
    catch (o) {
        K0(e, o);
    }
while (!0); if (vp(), fe = n, xl.current = r, Ie !== null)
    throw Error(_(261)); return Fe = null, He = 0, Le; }
function kP() { for (; Ie !== null;)
    Q0(Ie); }
function TP() { for (; Ie !== null && !eb();)
    Q0(Ie); }
function Q0(e) { var t = X0(e.alternate, e, gt); e.memoizedProps = e.pendingProps, t === null ? q0(e) : Ie = t, Tp.current = null; }
function q0(e) { var t = e; do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
        if (n = CP(n, t), n !== null) {
            n.flags &= 32767, Ie = n;
            return;
        }
        if (e !== null)
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
            Le = 6, Ie = null;
            return;
        }
    }
    else if (n = SP(n, t, gt), n !== null) {
        Ie = n;
        return;
    }
    if (t = t.sibling, t !== null) {
        Ie = t;
        return;
    }
    Ie = t = e;
} while (t !== null); Le === 0 && (Le = 5); }
function Pr(e, t, n) { var r = ve, o = jt.transition; try {
    jt.transition = null, ve = 1, OP(e, t, n, r);
}
finally {
    jt.transition = o, ve = r;
} return null; }
function OP(e, t, n, r) { do
    Ao();
while (tr !== null); if (fe & 6)
    throw Error(_(327)); n = e.finishedWork; var o = e.finishedLanes; if (n === null)
    return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(_(177)); e.callbackNode = null, e.callbackPriority = 0; var i = n.lanes | n.childLanes; if (ub(e, i), e === Fe && (Ie = Fe = null, He = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pa || (Pa = !0, J0(rl, function () { return Ao(), null; })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = jt.transition, jt.transition = null;
    var s = ve;
    ve = 1;
    var a = fe;
    fe |= 4, Tp.current = null, bP(e, n), V0(n, e), Yb(gd), il = !!vd, gd = vd = null, e.current = n, PP(n), tb(), fe = a, ve = s, jt.transition = i;
}
else
    e.current = n; if (Pa && (Pa = !1, tr = e, Sl = o), i = e.pendingLanes, i === 0 && (lr = null), ob(n.stateNode), pt(e, je()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest }); if (wl)
    throw wl = !1, e = Ld, Ld = null, e; return Sl & 1 && e.tag !== 0 && Ao(), i = e.pendingLanes, i & 1 ? e === $d ? rs++ : (rs = 0, $d = e) : rs = 0, wr(), null; }
function Ao() { if (tr !== null) {
    var e = Ty(Sl), t = jt.transition, n = ve;
    try {
        if (jt.transition = null, ve = 16 > e ? 16 : e, tr === null)
            var r = !1;
        else {
            if (e = tr, tr = null, Sl = 0, fe & 6)
                throw Error(_(331));
            var o = fe;
            for (fe |= 4, B = e.current; B !== null;) {
                var i = B, s = i.child;
                if (B.flags & 16) {
                    var a = i.deletions;
                    if (a !== null) {
                        for (var l = 0; l < a.length; l++) {
                            var c = a[l];
                            for (B = c; B !== null;) {
                                var d = B;
                                switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15: ts(8, d, i);
                                }
                                var f = d.child;
                                if (f !== null)
                                    f.return = d, B = f;
                                else
                                    for (; B !== null;) {
                                        d = B;
                                        var h = d.sibling, x = d.return;
                                        if (z0(d), d === c) {
                                            B = null;
                                            break;
                                        }
                                        if (h !== null) {
                                            h.return = x, B = h;
                                            break;
                                        }
                                        B = x;
                                    }
                            }
                        }
                        var y = i.alternate;
                        if (y !== null) {
                            var v = y.child;
                            if (v !== null) {
                                y.child = null;
                                do {
                                    var S = v.sibling;
                                    v.sibling = null, v = S;
                                } while (v !== null);
                            }
                        }
                        B = i;
                    }
                }
                if (i.subtreeFlags & 2064 && s !== null)
                    s.return = i, B = s;
                else
                    e: for (; B !== null;) {
                        if (i = B, i.flags & 2048)
                            switch (i.tag) {
                                case 0:
                                case 11:
                                case 15: ts(9, i, i.return);
                            }
                        var m = i.sibling;
                        if (m !== null) {
                            m.return = i.return, B = m;
                            break e;
                        }
                        B = i.return;
                    }
            }
            var g = e.current;
            for (B = g; B !== null;) {
                s = B;
                var w = s.child;
                if (s.subtreeFlags & 2064 && w !== null)
                    w.return = s, B = w;
                else
                    e: for (s = g; B !== null;) {
                        if (a = B, a.flags & 2048)
                            try {
                                switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15: ql(9, a);
                                }
                            }
                            catch (E) {
                                Te(a, a.return, E);
                            }
                        if (a === s) {
                            B = null;
                            break e;
                        }
                        var C = a.sibling;
                        if (C !== null) {
                            C.return = a.return, B = C;
                            break e;
                        }
                        B = a.return;
                    }
            }
            if (fe = o, wr(), un && typeof un.onPostCommitFiberRoot == "function")
                try {
                    un.onPostCommitFiberRoot(Bl, e);
                }
                catch (_q) { }
            r = !0;
        }
        return r;
    }
    finally {
        ve = n, jt.transition = t;
    }
} return !1; }
function cv(e, t, n) { t = ti(n, t), t = T0(e, t, 1), e = ar(e, t, 1), t = rt(), e !== null && (Hs(e, 1, t), pt(e, t)); }
function Te(e, t, n) { if (e.tag === 3)
    cv(e, e, n);
else
    for (; t !== null;) {
        if (t.tag === 3) {
            cv(t, e, n);
            break;
        }
        else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (lr === null || !lr.has(r))) {
                e = ti(n, e), e = O0(t, e, 1), t = ar(t, e, 1), e = rt(), t !== null && (Hs(t, 1, e), pt(t, e));
                break;
            }
        }
        t = t.return;
    } }
function jP(e, t, n) { var r = e.pingCache; r !== null && r.delete(t), t = rt(), e.pingedLanes |= e.suspendedLanes & n, Fe === e && (He & n) === n && (Le === 4 || Le === 3 && (He & 130023424) === He && 500 > je() - jp ? $r(e, 0) : Op |= n), pt(e, t); }
function Y0(e, t) { t === 0 && (e.mode & 1 ? (t = ma, ma <<= 1, !(ma & 130023424) && (ma = 4194304)) : t = 1); var n = rt(); e = kn(e, t), e !== null && (Hs(e, t, n), pt(e, n)); }
function AP(e) { var t = e.memoizedState, n = 0; t !== null && (n = t.retryLane), Y0(e, n); }
function _P(e, t) { var n = 0; switch (e.tag) {
    case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default: throw Error(_(314));
} r !== null && r.delete(t), Y0(e, n); }
var X0;
X0 = function (e, t, n) { if (e !== null)
    if (e.memoizedProps !== t.pendingProps || dt.current)
        ut = !0;
    else {
        if (!(e.lanes & n) && !(t.flags & 128))
            return ut = !1, wP(e, t, n);
        ut = !!(e.flags & 131072);
    }
else
    ut = !1, Ce && t.flags & 1048576 && t0(t, fl, t.index); switch (t.lanes = 0, t.tag) {
    case 2:
        var r = t.type;
        Ka(e, t), e = t.pendingProps;
        var o = Xo(t, Je.current);
        jo(t, n), o = bp(null, t, r, e, o, n);
        var i = Pp();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ft(r) ? (i = !0, ul(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, xp(t), o.updater = Ql, t.stateNode = o, o._reactInternals = t, Rd(t, r, e, n), t = Td(null, t, r, !0, i, n)) : (t.tag = 0, Ce && i && fp(t), nt(null, t, o, n), t = t.child), t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ka(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = IP(r), e = Ft(r, e), o) {
                case 0:
                    t = kd(null, t, r, e, n);
                    break e;
                case 1:
                    t = Zm(null, t, r, e, n);
                    break e;
                case 11:
                    t = Xm(null, t, r, e, n);
                    break e;
                case 14:
                    t = Jm(null, t, r, Ft(r.type, e), n);
                    break e;
            }
            throw Error(_(306, r, ""));
        }
        return t;
    case 0: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ft(r, o), kd(e, t, r, o, n);
    case 1: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ft(r, o), Zm(e, t, r, o, n);
    case 3:
        e: {
            if (M0(t), e === null)
                throw Error(_(387));
            r = t.pendingProps, i = t.memoizedState, o = i.element, a0(e, t), ml(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element, i.isDehydrated)
                if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    o = ti(Error(_(423)), t), t = ev(e, t, r, n, o);
                    break e;
                }
                else if (r !== o) {
                    o = ti(Error(_(424)), t), t = ev(e, t, r, n, o);
                    break e;
                }
                else
                    for (xt = sr(t.stateNode.containerInfo.firstChild), wt = t, Ce = !0, Ut = null, n = i0(t, null, r, n), t.child = n; n;)
                        n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
                if (Jo(), r === o) {
                    t = Tn(e, t, n);
                    break e;
                }
                nt(e, t, r, n);
            }
            t = t.child;
        }
        return t;
    case 5: return l0(t), e === null && Ed(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, yd(r, o) ? s = null : i !== null && yd(r, i) && (t.flags |= 32), _0(e, t), nt(e, t, s, n), t.child;
    case 6: return e === null && Ed(t), null;
    case 13: return I0(e, t, n);
    case 4: return wp(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Zo(t, null, r, n) : nt(e, t, r, n), t.child;
    case 11: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ft(r, o), Xm(e, t, r, o, n);
    case 7: return nt(e, t, t.pendingProps, n), t.child;
    case 8: return nt(e, t, t.pendingProps.children, n), t.child;
    case 12: return nt(e, t, t.pendingProps.children, n), t.child;
    case 10:
        e: {
            if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ge(pl, r._currentValue), r._currentValue = s, i !== null)
                if (qt(i.value, s)) {
                    if (i.children === o.children && !dt.current) {
                        t = Tn(e, t, n);
                        break e;
                    }
                }
                else
                    for (i = t.child, i !== null && (i.return = t); i !== null;) {
                        var a = i.dependencies;
                        if (a !== null) {
                            s = i.child;
                            for (var l = a.firstContext; l !== null;) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = Pn(-1, n & -n), l.tag = 2;
                                        var c = i.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? l.next = l : (l.next = d.next, d.next = l), c.pending = l;
                                        }
                                    }
                                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), bd(i.return, n, t), a.lanes |= n;
                                    break;
                                }
                                l = l.next;
                            }
                        }
                        else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return, s === null)
                                throw Error(_(341));
                            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), bd(s, n, t), s = i.sibling;
                        }
                        else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null;) {
                                if (s === t) {
                                    s = null;
                                    break;
                                }
                                if (i = s.sibling, i !== null) {
                                    i.return = s.return, s = i;
                                    break;
                                }
                                s = s.return;
                            }
                        i = s;
                    }
            nt(e, t, o.children, n), t = t.child;
        }
        return t;
    case 9: return o = t.type, r = t.pendingProps.children, jo(t, n), o = _t(o), r = r(o), t.flags |= 1, nt(e, t, r, n), t.child;
    case 14: return r = t.type, o = Ft(r, t.pendingProps), o = Ft(r.type, o), Jm(e, t, r, o, n);
    case 15: return j0(e, t, t.type, t.pendingProps, n);
    case 17: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ft(r, o), Ka(e, t), t.tag = 1, ft(r) ? (e = !0, ul(t)) : e = !1, jo(t, n), k0(t, r, o), Rd(t, r, o, n), Td(null, t, r, !0, e, n);
    case 19: return D0(e, t, n);
    case 22: return A0(e, t, n);
} throw Error(_(156, t.tag)); };
function J0(e, t) { return Py(e, t); }
function MP(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
function Ot(e, t, n, r) { return new MP(e, t, n, r); }
function Ip(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
function IP(e) { if (typeof e == "function")
    return Ip(e) ? 1 : 0; if (e != null) {
    if (e = e.$$typeof, e === ep)
        return 11;
    if (e === tp)
        return 14;
} return 2; }
function ur(e, t) { var n = e.alternate; return n === null ? (n = Ot(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
function qa(e, t, n, r, o, i) { var s = 2; if (r = e, typeof e == "function")
    Ip(e) && (s = 1);
else if (typeof e == "string")
    s = 5;
else
    e: switch (e) {
        case vo: return Fr(n.children, o, i, t);
        case Zf:
            s = 8, o |= 8;
            break;
        case Yu: return e = Ot(12, n, t, o | 2), e.elementType = Yu, e.lanes = i, e;
        case Xu: return e = Ot(13, n, t, o), e.elementType = Xu, e.lanes = i, e;
        case Ju: return e = Ot(19, n, t, o), e.elementType = Ju, e.lanes = i, e;
        case ly: return Xl(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                    case sy:
                        s = 10;
                        break e;
                    case ay:
                        s = 9;
                        break e;
                    case ep:
                        s = 11;
                        break e;
                    case tp:
                        s = 14;
                        break e;
                    case Vn:
                        s = 16, r = null;
                        break e;
                }
            throw Error(_(130, e == null ? e : typeof e, ""));
    } return t = Ot(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t; }
function Fr(e, t, n, r) { return e = Ot(7, e, r, t), e.lanes = n, e; }
function Xl(e, t, n, r) { return e = Ot(22, e, r, t), e.elementType = ly, e.lanes = n, e.stateNode = { isHidden: !1 }, e; }
function Su(e, t, n) { return e = Ot(6, e, null, t), e.lanes = n, e; }
function Cu(e, t, n) { return t = Ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
function DP(e, t, n, r, o) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = nu(0), this.expirationTimes = nu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null; }
function Dp(e, t, n, r, o, i, s, a, l) { return e = new DP(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ot(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xp(i), e; }
function LP(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: mo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n }; }
function Z0(e) { if (!e)
    return pr; e = e._reactInternals; e: {
    if (no(e) !== e || e.tag !== 1)
        throw Error(_(170));
    var t = e;
    do {
        switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1: if (ft(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
            }
        }
        t = t.return;
    } while (t !== null);
    throw Error(_(171));
} if (e.tag === 1) {
    var n = e.type;
    if (ft(n))
        return Zy(e, n, t);
} return t; }
function ex(e, t, n, r, o, i, s, a, l) { return e = Dp(n, r, !0, e, o, i, s, a, l), e.context = Z0(null), n = e.current, r = rt(), o = cr(n), i = Pn(r, o), i.callback = t !== null && t !== void 0 ? t : null, ar(n, i, o), e.current.lanes = o, Hs(e, o, r), pt(e, r), e; }
function Jl(e, t, n, r) { var o = t.current, i = rt(), s = cr(o); return n = Z0(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ar(o, t, s), e !== null && (Wt(e, o, s, i), Va(e, o, s)), s; }
function El(e) { if (e = e.current, !e.child)
    return null; switch (e.child.tag) {
    case 5: return e.child.stateNode;
    default: return e.child.stateNode;
} }
function uv(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
} }
function Lp(e, t) { uv(e, t), (e = e.alternate) && uv(e, t); }
function $P() { return null; }
var tx = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
function $p(e) { this._internalRoot = e; }
Zl.prototype.render = $p.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
    throw Error(_(409)); Jl(e, t, null, null); };
Zl.prototype.unmount = $p.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kr(function () { Jl(null, e, null, null); }), t[Nn] = null;
} };
function Zl(e) { this._internalRoot = e; }
Zl.prototype.unstable_scheduleHydration = function (e) { if (e) {
    var t = Ay();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++)
        ;
    Wn.splice(n, 0, e), n === 0 && My(e);
} };
function Fp(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
function ec(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
function dv() { }
function FP(e, t, n, r, o) { if (o) {
    if (typeof r == "function") {
        var i = r;
        r = function () { var c = El(s); i.call(c); };
    }
    var s = ex(t, r, e, 0, null, !1, !1, "", dv);
    return e._reactRootContainer = s, e[Nn] = s.current, gs(e.nodeType === 8 ? e.parentNode : e), Kr(), s;
} for (; o = e.lastChild;)
    e.removeChild(o); if (typeof r == "function") {
    var a = r;
    r = function () { var c = El(l); a.call(c); };
} var l = Dp(e, 0, !1, null, null, !1, !1, "", dv); return e._reactRootContainer = l, e[Nn] = l.current, gs(e.nodeType === 8 ? e.parentNode : e), Kr(function () { Jl(t, l, n, r); }), l; }
function tc(e, t, n, r, o) { var i = n._reactRootContainer; if (i) {
    var s = i;
    if (typeof o == "function") {
        var a = o;
        o = function () { var l = El(s); a.call(l); };
    }
    Jl(t, s, e, o);
}
else
    s = FP(n, t, e, o, r); return El(s); }
Oy = function (e) { switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Hi(t.pendingLanes);
            n !== 0 && (op(t, n | 1), pt(t, je()), !(fe & 6) && (ni = je() + 500, wr()));
        }
        break;
    case 13: Kr(function () { var r = kn(e, 1); if (r !== null) {
        var o = rt();
        Wt(r, e, 1, o);
    } }), Lp(e, 1);
} };
ip = function (e) { if (e.tag === 13) {
    var t = kn(e, 134217728);
    if (t !== null) {
        var n = rt();
        Wt(t, e, 134217728, n);
    }
    Lp(e, 134217728);
} };
jy = function (e) { if (e.tag === 13) {
    var t = cr(e), n = kn(e, t);
    if (n !== null) {
        var r = rt();
        Wt(n, e, t, r);
    }
    Lp(e, t);
} };
Ay = function () { return ve; };
_y = function (e, t) { var n = ve; try {
    return ve = e, t();
}
finally {
    ve = n;
} };
ld = function (e, t, n) { switch (t) {
    case "input":
        if (td(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;)
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Wl(r);
                    if (!o)
                        throw Error(_(90));
                    uy(r), td(r, o);
                }
            }
        }
        break;
    case "textarea":
        fy(e, n);
        break;
    case "select": t = n.value, t != null && No(e, !!n.multiple, t, !1);
} };
xy = Ap;
wy = Kr;
var zP = { usingClientEntryPoint: !1, Events: [Ks, wo, Wl, gy, yy, Ap] }, Li = { findFiberByHostInstance: Nr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, BP = { bundleType: Li.bundleType, version: Li.version, rendererPackageName: Li.rendererPackageName, rendererConfig: Li.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: An.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = Ey(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: Li.findFiberByHostInstance || $P, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ra = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ra.isDisabled && Ra.supportsFiber)
        try {
            Bl = Ra.inject(BP), un = Ra;
        }
        catch (_z) { }
}
Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zP;
Et.createPortal = function (e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!Fp(t))
    throw Error(_(200)); return LP(e, t, null, n); };
Et.createRoot = function (e, t) { if (!Fp(e))
    throw Error(_(299)); var n = !1, r = "", o = tx; return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Dp(e, 1, !1, null, null, n, !1, r, o), e[Nn] = t.current, gs(e.nodeType === 8 ? e.parentNode : e), new $p(t); };
Et.findDOMNode = function (e) { if (e == null)
    return null; if (e.nodeType === 1)
    return e; var t = e._reactInternals; if (t === void 0)
    throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e))); return e = Ey(t), e = e === null ? null : e.stateNode, e; };
Et.flushSync = function (e) { return Kr(e); };
Et.hydrate = function (e, t, n) { if (!ec(t))
    throw Error(_(200)); return tc(null, e, t, !0, n); };
Et.hydrateRoot = function (e, t, n) { if (!Fp(e))
    throw Error(_(405)); var r = n != null && n.hydratedSources || null, o = !1, i = "", s = tx; if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ex(t, null, e, 1, n !== null && n !== void 0 ? n : null, o, !1, i, s), e[Nn] = t.current, gs(e), r)
    for (e = 0; e < r.length; e++)
        n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o); return new Zl(t); };
Et.render = function (e, t, n) { if (!ec(t))
    throw Error(_(200)); return tc(null, e, t, !1, n); };
Et.unmountComponentAtNode = function (e) { if (!ec(e))
    throw Error(_(40)); return e._reactRootContainer ? (Kr(function () { tc(null, null, e, !1, function () { e._reactRootContainer = null, e[Nn] = null; }); }), !0) : !1; };
Et.unstable_batchedUpdates = Ap;
Et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!ec(n))
    throw Error(_(200)); if (e == null || e._reactInternals === void 0)
    throw Error(_(38)); return tc(e, t, n, !1, r); };
Et.version = "18.3.1-next-f1338f8080-20240426";
function nx() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nx);
    }
    catch (e) {
        console.error(e);
    } }
nx(), ny.exports = Et;
var _n = ny.exports;
const zp = Hf(_n);
var fv = _n;
Qu.createRoot = fv.createRoot, Qu.hydrateRoot = fv.hydrateRoot; /**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Rs() { return Rs = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Rs.apply(this, arguments); }
var nr;
(function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; })(nr || (nr = {}));
const pv = "popstate";
function UP(e) { e === void 0 && (e = {}); function t(r, o) { let { pathname: i, search: s, hash: a } = r.location; return Bd("", { pathname: i, search: s, hash: a }, o.state && o.state.usr || null, o.state && o.state.key || "default"); } function n(r, o) { return typeof o == "string" ? o : bl(o); } return HP(t, n, null, e); }
function Ae(e, t) { if (e === !1 || e === null || typeof e > "u")
    throw new Error(t); }
function rx(e, t) { if (!e) {
    typeof console < "u" && console.warn(t);
    try {
        throw new Error(t);
    }
    catch (_q) { }
} }
function VP() { return Math.random().toString(36).substr(2, 8); }
function hv(e, t) { return { usr: e.state, key: e.key, idx: t }; }
function Bd(e, t, n, r) { return n === void 0 && (n = null), Rs({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? fi(t) : t, { state: n, key: t && t.key || r || VP() }); }
function bl(e) { let { pathname: t = "/", search: n = "", hash: r = "" } = e; return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t; }
function fi(e) { let t = {}; if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
} return t; }
function HP(e, t, n, r) { r === void 0 && (r = {}); let { window: o = document.defaultView, v5Compat: i = !1 } = r, s = o.history, a = nr.Pop, l = null, c = d(); c == null && (c = 0, s.replaceState(Rs({}, s.state, { idx: c }), "")); function d() { return (s.state || { idx: null }).idx; } function f() { a = nr.Pop; let S = d(), m = S == null ? null : S - c; c = S, l && l({ action: a, location: v.location, delta: m }); } function h(S, m) { a = nr.Push; let g = Bd(v.location, S, m); c = d() + 1; let w = hv(g, c), C = v.createHref(g); try {
    s.pushState(w, "", C);
}
catch (E) {
    if (E instanceof DOMException && E.name === "DataCloneError")
        throw E;
    o.location.assign(C);
} i && l && l({ action: a, location: v.location, delta: 1 }); } function x(S, m) { a = nr.Replace; let g = Bd(v.location, S, m); c = d(); let w = hv(g, c), C = v.createHref(g); s.replaceState(w, "", C), i && l && l({ action: a, location: v.location, delta: 0 }); } function y(S) { let m = o.location.origin !== "null" ? o.location.origin : o.location.href, g = typeof S == "string" ? S : bl(S); return g = g.replace(/ $/, "%20"), Ae(m, "No window.location.(origin|href) available to create URL for href: " + g), new URL(g, m); } let v = { get action() { return a; }, get location() { return e(o, s); }, listen(S) { if (l)
        throw new Error("A history only accepts one active listener"); return o.addEventListener(pv, f), l = S, () => { o.removeEventListener(pv, f), l = null; }; }, createHref(S) { return t(o, S); }, createURL: y, encodeLocation(S) { let m = y(S); return { pathname: m.pathname, search: m.search, hash: m.hash }; }, push: h, replace: x, go(S) { return s.go(S); } }; return v; }
var mv;
(function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; })(mv || (mv = {}));
function WP(e, t, n) { return n === void 0 && (n = "/"), KP(e, t, n, !1); }
function KP(e, t, n, r) { let o = typeof t == "string" ? fi(t) : t, i = Bp(o.pathname || "/", n); if (i == null)
    return null; let s = ox(e); GP(s); let a = null; for (let l = 0; a == null && l < s.length; ++l) {
    let c = sx(i);
    a = nR(s[l], c, r);
} return a; }
function ox(e, t, n, r) { t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""); let o = (i, s, a) => { let l = { relativePath: a === void 0 ? i.path || "" : a, caseSensitive: i.caseSensitive === !0, childrenIndex: s, route: i }; l.relativePath.startsWith("/") && (Ae(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length)); let c = dr([r, l.relativePath]), d = n.concat(l); i.children && i.children.length > 0 && (Ae(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), ox(i.children, t, d, c)), !(i.path == null && !i.index) && t.push({ path: c, score: eR(c, i.index), routesMeta: d }); }; return e.forEach((i, s) => { var a; if (i.path === "" || !((a = i.path) != null && a.includes("?")))
    o(i, s);
else
    for (let l of ix(i.path))
        o(i, s, l); }), t; }
function ix(e) { let t = e.split("/"); if (t.length === 0)
    return []; let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, ""); if (r.length === 0)
    return o ? [i, ""] : [i]; let s = ix(r.join("/")), a = []; return a.push(...s.map(l => l === "" ? i : [i, l].join("/"))), o && a.push(...s), a.map(l => e.startsWith("/") && l === "" ? "/" : l); }
function GP(e) { e.sort((t, n) => t.score !== n.score ? n.score - t.score : tR(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex))); }
const QP = /^:[\w-]+$/, qP = 3, YP = 2, XP = 1, JP = 10, ZP = -2, vv = e => e === "*";
function eR(e, t) { let n = e.split("/"), r = n.length; return n.some(vv) && (r += ZP), t && (r += YP), n.filter(o => !vv(o)).reduce((o, i) => o + (QP.test(i) ? qP : i === "" ? XP : JP), r); }
function tR(e, t) { return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0; }
function nR(e, t, n) { let { routesMeta: r } = e, o = {}, i = "/", s = []; for (let a = 0; a < r.length; ++a) {
    let l = r[a], c = a === r.length - 1, d = i === "/" ? t : t.slice(i.length) || "/", f = Ud({ path: l.relativePath, caseSensitive: l.caseSensitive, end: c }, d), h = l.route;
    if (!f && c && n && !r[r.length - 1].route.index && (f = Ud({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, d)), !f)
        return null;
    Object.assign(o, f.params), s.push({ params: o, pathname: dr([i, f.pathname]), pathnameBase: aR(dr([i, f.pathnameBase])), route: h }), f.pathnameBase !== "/" && (i = dr([i, f.pathnameBase]));
} return s; }
function Ud(e, t) { typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 }); let [n, r] = rR(e.path, e.caseSensitive, e.end), o = t.match(n); if (!o)
    return null; let i = o[0], s = i.replace(/(.)\/+$/, "$1"), a = o.slice(1); return { params: r.reduce((c, d, f) => { let { paramName: h, isOptional: x } = d; if (h === "*") {
        let v = a[f] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
    } const y = a[f]; return x && !y ? c[h] = void 0 : c[h] = (y || "").replace(/%2F/g, "/"), c; }, {}), pathname: i, pathnameBase: s, pattern: e }; }
function rR(e, t, n) { t === void 0 && (t = !1), n === void 0 && (n = !0), rx(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')); let r = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({ paramName: a, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")); return e.endsWith("*") ? (r.push({ paramName: "*" }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]; }
function sx(e) { try {
    return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
}
catch (t) {
    return rx(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
} }
function Bp(e, t) { if (t === "/")
    return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null; let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && r !== "/" ? null : e.slice(n) || "/"; }
function oR(e, t) { t === void 0 && (t = "/"); let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? fi(e) : e; return { pathname: n ? n.startsWith("/") ? n : iR(n, t) : t, search: lR(r), hash: cR(o) }; }
function iR(e, t) { let n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach(o => { o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o); }), n.length > 1 ? n.join("/") : "/"; }
function Eu(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'; }
function sR(e) { return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0); }
function ax(e, t) { let n = sR(e); return t ? n.map((r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase); }
function lx(e, t, n, r) { r === void 0 && (r = !1); let o; typeof e == "string" ? o = fi(e) : (o = Rs({}, e), Ae(!o.pathname || !o.pathname.includes("?"), Eu("?", "pathname", "search", o)), Ae(!o.pathname || !o.pathname.includes("#"), Eu("#", "pathname", "hash", o)), Ae(!o.search || !o.search.includes("#"), Eu("#", "search", "hash", o))); let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, a; if (s == null)
    a = n;
else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
        let h = s.split("/");
        for (; h[0] === "..";)
            h.shift(), f -= 1;
        o.pathname = h.join("/");
    }
    a = f >= 0 ? t[f] : "/";
} let l = oR(o, a), c = s && s !== "/" && s.endsWith("/"), d = (i || s === ".") && n.endsWith("/"); return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l; }
const dr = e => e.join("/").replace(/\/\/+/g, "/"), aR = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"), lR = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, cR = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function uR(e) { return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e; }
const cx = ["post", "put", "patch", "delete"];
new Set(cx);
const dR = ["get", ...cx];
new Set(dR); /**
* React Router v6.25.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Ns() { return Ns = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Ns.apply(this, arguments); }
const Up = u.createContext(null), fR = u.createContext(null), ro = u.createContext(null), nc = u.createContext(null), oo = u.createContext({ outlet: null, matches: [], isDataRoute: !1 }), ux = u.createContext(null);
function pR(e, t) { let { relative: n } = t === void 0 ? {} : t; pi() || Ae(!1); let { basename: r, navigator: o } = u.useContext(ro), { hash: i, pathname: s, search: a } = fx(e, { relative: n }), l = s; return r !== "/" && (l = s === "/" ? r : dr([r, s])), o.createHref({ pathname: l, search: a, hash: i }); }
function pi() { return u.useContext(nc) != null; }
function hi() { return pi() || Ae(!1), u.useContext(nc).location; }
function hR(e) { pi() || Ae(!1); let { pathname: t } = hi(); return u.useMemo(() => Ud(e, sx(t)), [t, e]); }
function dx(e) { u.useContext(ro).static || u.useLayoutEffect(e); }
function rc() { let { isDataRoute: e } = u.useContext(oo); return e ? NR() : mR(); }
function mR() { pi() || Ae(!1); let e = u.useContext(Up), { basename: t, future: n, navigator: r } = u.useContext(ro), { matches: o } = u.useContext(oo), { pathname: i } = hi(), s = JSON.stringify(ax(o, n.v7_relativeSplatPath)), a = u.useRef(!1); return dx(() => { a.current = !0; }), u.useCallback(function (c, d) { if (d === void 0 && (d = {}), !a.current)
    return; if (typeof c == "number") {
    r.go(c);
    return;
} let f = lx(c, JSON.parse(s), i, d.relative === "path"); e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : dr([t, f.pathname])), (d.replace ? r.replace : r.push)(f, d.state, d); }, [t, r, s, i, e]); }
function fx(e, t) { let { relative: n } = t === void 0 ? {} : t, { future: r } = u.useContext(ro), { matches: o } = u.useContext(oo), { pathname: i } = hi(), s = JSON.stringify(ax(o, r.v7_relativeSplatPath)); return u.useMemo(() => lx(e, JSON.parse(s), i, n === "path"), [e, s, i, n]); }
function vR(e, t) { return gR(e, t); }
function gR(e, t, n, r) { pi() || Ae(!1); let { navigator: o } = u.useContext(ro), { matches: i } = u.useContext(oo), s = i[i.length - 1], a = s ? s.params : {}; s && s.pathname; let l = s ? s.pathnameBase : "/"; s && s.route; let c = hi(), d; if (t) {
    var f;
    let S = typeof t == "string" ? fi(t) : t;
    l === "/" || (f = S.pathname) != null && f.startsWith(l) || Ae(!1), d = S;
}
else
    d = c; let h = d.pathname || "/", x = h; if (l !== "/") {
    let S = l.replace(/^\//, "").split("/");
    x = "/" + h.replace(/^\//, "").split("/").slice(S.length).join("/");
} let y = WP(e, { pathname: x }), v = CR(y && y.map(S => Object.assign({}, S, { params: Object.assign({}, a, S.params), pathname: dr([l, o.encodeLocation ? o.encodeLocation(S.pathname).pathname : S.pathname]), pathnameBase: S.pathnameBase === "/" ? l : dr([l, o.encodeLocation ? o.encodeLocation(S.pathnameBase).pathname : S.pathnameBase]) })), i, n, r); return t && v ? u.createElement(nc.Provider, { value: { location: Ns({ pathname: "/", search: "", hash: "", state: null, key: "default" }, d), navigationType: nr.Pop } }, v) : v; }
function yR() { let e = RR(), t = uR(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return u.createElement(u.Fragment, null, u.createElement("h2", null, "Unexpected Application Error!"), u.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? u.createElement("pre", { style: o }, n) : null, null); }
const xR = u.createElement(yR, null);
class wR extends u.Component {
    constructor(t) { super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error }; }
    static getDerivedStateFromError(t) { return { error: t }; }
    static getDerivedStateFromProps(t, n) { return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation }; }
    componentDidCatch(t, n) { console.error("React Router caught the following error during render", t, n); }
    render() { return this.state.error !== void 0 ? u.createElement(oo.Provider, { value: this.props.routeContext }, u.createElement(ux.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; }
}
function SR(e) { let { routeContext: t, match: n, children: r } = e, o = u.useContext(Up); return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), u.createElement(oo.Provider, { value: t }, r); }
function CR(e, t, n, r) { var o; if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var i;
    if ((i = n) != null && i.errors)
        e = n.matches;
    else
        return null;
} let s = e, a = (o = n) == null ? void 0 : o.errors; if (a != null) {
    let d = s.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
    d >= 0 || Ae(!1), s = s.slice(0, Math.min(s.length, d + 1));
} let l = !1, c = -1; if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
        let f = s[d];
        if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d), f.route.id) {
            let { loaderData: h, errors: x } = n, y = f.route.loader && h[f.route.id] === void 0 && (!x || x[f.route.id] === void 0);
            if (f.route.lazy || y) {
                l = !0, c >= 0 ? s = s.slice(0, c + 1) : s = [s[0]];
                break;
            }
        }
    } return s.reduceRight((d, f, h) => { let x, y = !1, v = null, S = null; n && (x = a && f.route.id ? a[f.route.id] : void 0, v = f.route.errorElement || xR, l && (c < 0 && h === 0 ? (y = !0, S = null) : c === h && (y = !0, S = f.route.hydrateFallbackElement || null))); let m = t.concat(s.slice(0, h + 1)), g = () => { let w; return x ? w = v : y ? w = S : f.route.Component ? w = u.createElement(f.route.Component, null) : f.route.element ? w = f.route.element : w = d, u.createElement(SR, { match: f, routeContext: { outlet: d, matches: m, isDataRoute: n != null }, children: w }); }; return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? u.createElement(wR, { location: n.location, revalidation: n.revalidation, component: v, error: x, children: g(), routeContext: { outlet: null, matches: m, isDataRoute: !0 } }) : g(); }, null); }
var px = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e; }(px || {}), Pl = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(Pl || {});
function ER(e) { let t = u.useContext(Up); return t || Ae(!1), t; }
function bR(e) { let t = u.useContext(fR); return t || Ae(!1), t; }
function PR(e) { let t = u.useContext(oo); return t || Ae(!1), t; }
function hx(e) { let t = PR(), n = t.matches[t.matches.length - 1]; return n.route.id || Ae(!1), n.route.id; }
function RR() { var e; let t = u.useContext(ux), n = bR(Pl.UseRouteError), r = hx(Pl.UseRouteError); return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]; }
function NR() { let { router: e } = ER(px.UseNavigateStable), t = hx(Pl.UseNavigateStable), n = u.useRef(!1); return dx(() => { n.current = !0; }), u.useCallback(function (o, i) { i === void 0 && (i = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Ns({ fromRouteId: t }, i))); }, [e, t]); }
function po(e) { Ae(!1); }
function kR(e) { let { basename: t = "/", children: n = null, location: r, navigationType: o = nr.Pop, navigator: i, static: s = !1, future: a } = e; pi() && Ae(!1); let l = t.replace(/^\/*/, "/"), c = u.useMemo(() => ({ basename: l, navigator: i, static: s, future: Ns({ v7_relativeSplatPath: !1 }, a) }), [l, a, i, s]); typeof r == "string" && (r = fi(r)); let { pathname: d = "/", search: f = "", hash: h = "", state: x = null, key: y = "default" } = r, v = u.useMemo(() => { let S = Bp(d, l); return S == null ? null : { location: { pathname: S, search: f, hash: h, state: x, key: y }, navigationType: o }; }, [l, d, f, h, x, y, o]); return v == null ? null : u.createElement(ro.Provider, { value: c }, u.createElement(nc.Provider, { children: n, value: v })); }
function TR(e) { let { children: t, location: n } = e; return vR(Vd(t), n); }
new Promise(() => { });
function Vd(e, t) { t === void 0 && (t = []); let n = []; return u.Children.forEach(e, (r, o) => { if (!u.isValidElement(r))
    return; let i = [...t, o]; if (r.type === u.Fragment) {
    n.push.apply(n, Vd(r.props.children, i));
    return;
} r.type !== po && Ae(!1), !r.props.index || !r.props.children || Ae(!1); let s = { id: r.props.id || i.join("-"), caseSensitive: r.props.caseSensitive, element: r.props.element, Component: r.props.Component, index: r.props.index, path: r.props.path, loader: r.props.loader, action: r.props.action, errorElement: r.props.errorElement, ErrorBoundary: r.props.ErrorBoundary, hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null, shouldRevalidate: r.props.shouldRevalidate, handle: r.props.handle, lazy: r.props.lazy }; r.props.children && (s.children = Vd(r.props.children, i)), n.push(s); }), n; } /**
* React Router DOM v6.25.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Hd() { return Hd = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Hd.apply(this, arguments); }
function OR(e, t) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), o, i; for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]); return n; }
function jR(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }
function AR(e, t) { return e.button === 0 && (!t || t === "_self") && !jR(e); }
const _R = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], MR = "6";
try {
    window.__reactRouterVersion = MR;
}
catch (_3) { }
const IR = "startTransition", gv = qf[IR];
function DR(e) { let { basename: t, children: n, future: r, window: o } = e, i = u.useRef(); i.current == null && (i.current = UP({ window: o, v5Compat: !0 })); let s = i.current, [a, l] = u.useState({ action: s.action, location: s.location }), { v7_startTransition: c } = r || {}, d = u.useCallback(f => { c && gv ? gv(() => l(f)) : l(f); }, [l, c]); return u.useLayoutEffect(() => s.listen(d), [s, d]), u.createElement(kR, { basename: t, children: n, location: a.location, navigationType: a.action, navigator: s, future: r }); }
const LR = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $R = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, mx = u.forwardRef(function (t, n) { let { onClick: r, relative: o, reloadDocument: i, replace: s, state: a, target: l, to: c, preventScrollReset: d, unstable_viewTransition: f } = t, h = OR(t, _R), { basename: x } = u.useContext(ro), y, v = !1; if (typeof c == "string" && $R.test(c) && (y = c, LR))
    try {
        let w = new URL(window.location.href), C = c.startsWith("//") ? new URL(w.protocol + c) : new URL(c), E = Bp(C.pathname, x);
        C.origin === w.origin && E != null ? c = E + C.search + C.hash : v = !0;
    }
    catch (_q) { } let S = pR(c, { relative: o }), m = FR(c, { replace: s, state: a, target: l, preventScrollReset: d, relative: o, unstable_viewTransition: f }); function g(w) { r && r(w), w.defaultPrevented || m(w); } return u.createElement("a", Hd({}, h, { href: y || S, onClick: v || i ? r : g, ref: n, target: l })); });
var yv;
(function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"; })(yv || (yv = {}));
var xv;
(function (e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; })(xv || (xv = {}));
function FR(e, t) { let { target: n, replace: r, state: o, preventScrollReset: i, relative: s, unstable_viewTransition: a } = t === void 0 ? {} : t, l = rc(), c = hi(), d = fx(e, { relative: s }); return u.useCallback(f => { if (AR(f, n)) {
    f.preventDefault();
    let h = r !== void 0 ? r : bl(c) === bl(d);
    l(e, { replace: h, state: o, preventScrollReset: i, relative: s, unstable_viewTransition: a });
} }, [c, l, d, r, o, n, e, i, s, a]); }
var Qs = class {
    constructor() { this.listeners = new Set, this.subscribe = this.subscribe.bind(this); }
    subscribe(e) { return this.listeners.add(e), this.onSubscribe(), () => { this.listeners.delete(e), this.onUnsubscribe(); }; }
    hasListeners() { return this.listeners.size > 0; }
    onSubscribe() { }
    onUnsubscribe() { }
}, ri = typeof window > "u" || "Deno" in globalThis;
function Nt() { }
function zR(e, t) { return typeof e == "function" ? e(t) : e; }
function Wd(e) { return typeof e == "number" && e >= 0 && e !== 1 / 0; }
function vx(e, t) { return Math.max(e + (t || 0) - Date.now(), 0); }
function _o(e, t) { return typeof e == "function" ? e(t) : e; }
function Vt(e, t) { return typeof e == "function" ? e(t) : e; }
function wv(e, t) { const { type: n = "all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: a } = e; if (s) {
    if (r) {
        if (t.queryHash !== Vp(s, t.options))
            return !1;
    }
    else if (!Ts(t.queryKey, s))
        return !1;
} if (n !== "all") {
    const l = t.isActive();
    if (n === "active" && !l || n === "inactive" && l)
        return !1;
} return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || i && !i(t)); }
function Sv(e, t) { const { exact: n, status: r, predicate: o, mutationKey: i } = e; if (i) {
    if (!t.options.mutationKey)
        return !1;
    if (n) {
        if (ks(t.options.mutationKey) !== ks(i))
            return !1;
    }
    else if (!Ts(t.options.mutationKey, i))
        return !1;
} return !(r && t.state.status !== r || o && !o(t)); }
function Vp(e, t) { return ((t == null ? void 0 : t.queryKeyHashFn) || ks)(e); }
function ks(e) { return JSON.stringify(e, (t, n) => Gd(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n); }
function Ts(e, t) { return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Ts(e[n], t[n])) : !1; }
function gx(e, t) { if (e === t)
    return e; const n = Cv(e) && Cv(t); if (n || Gd(e) && Gd(t)) {
    const r = n ? e : Object.keys(e), o = r.length, i = n ? t : Object.keys(t), s = i.length, a = n ? [] : {};
    let l = 0;
    for (let c = 0; c < s; c++) {
        const d = n ? c : i[c];
        (!n && r.includes(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0, l++) : (a[d] = gx(e[d], t[d]), a[d] === e[d] && e[d] !== void 0 && l++);
    }
    return o === s && l === o ? e : a;
} return t; }
function Kd(e, t) { if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1; for (const n in e)
    if (e[n] !== t[n])
        return !1; return !0; }
function Cv(e) { return Array.isArray(e) && e.length === Object.keys(e).length; }
function Gd(e) { if (!Ev(e))
    return !1; const t = e.constructor; if (t === void 0)
    return !0; const n = t.prototype; return !(!Ev(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype); }
function Ev(e) { return Object.prototype.toString.call(e) === "[object Object]"; }
function BR(e) { return new Promise(t => { setTimeout(t, e); }); }
function Qd(e, t, n) { return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? gx(e, t) : t; }
function UR(e, t, n = 0) { const r = [...e, t]; return n && r.length > n ? r.slice(1) : r; }
function VR(e, t, n = 0) { const r = [t, ...e]; return n && r.length > n ? r.slice(0, -1) : r; }
var yx = Symbol();
function xx(e, t) { return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === yx ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn; }
var jr, Qn, Lo, Dg, HR = (Dg = class extends Qs {
    constructor() { super(); re(this, jr); re(this, Qn); re(this, Lo); H(this, Lo, t => { if (!ri && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => { window.removeEventListener("visibilitychange", n); };
    } }); }
    onSubscribe() { N(this, Qn) || this.setEventListener(N(this, Lo)); }
    onUnsubscribe() { var t; this.hasListeners() || ((t = N(this, Qn)) == null || t.call(this), H(this, Qn, void 0)); }
    setEventListener(t) { var n; H(this, Lo, t), (n = N(this, Qn)) == null || n.call(this), H(this, Qn, t(r => { typeof r == "boolean" ? this.setFocused(r) : this.onFocus(); })); }
    setFocused(t) { N(this, jr) !== t && (H(this, jr, t), this.onFocus()); }
    onFocus() { const t = this.isFocused(); this.listeners.forEach(n => { n(t); }); }
    isFocused() { var t; return typeof N(this, jr) == "boolean" ? N(this, jr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"; }
}, jr = new WeakMap, Qn = new WeakMap, Lo = new WeakMap, Dg), Hp = new HR, $o, qn, Fo, Lg, WR = (Lg = class extends Qs {
    constructor() { super(); re(this, $o, !0); re(this, qn); re(this, Fo); H(this, Fo, t => { if (!ri && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => { window.removeEventListener("online", n), window.removeEventListener("offline", r); };
    } }); }
    onSubscribe() { N(this, qn) || this.setEventListener(N(this, Fo)); }
    onUnsubscribe() { var t; this.hasListeners() || ((t = N(this, qn)) == null || t.call(this), H(this, qn, void 0)); }
    setEventListener(t) { var n; H(this, Fo, t), (n = N(this, qn)) == null || n.call(this), H(this, qn, t(this.setOnline.bind(this))); }
    setOnline(t) { N(this, $o) !== t && (H(this, $o, t), this.listeners.forEach(r => { r(t); })); }
    isOnline() { return N(this, $o); }
}, $o = new WeakMap, qn = new WeakMap, Fo = new WeakMap, Lg), Rl = new WR;
function KR(e) { return Math.min(1e3 * Math.pow(2, e), 3e4); }
function wx(e) { return (e !== null && e !== void 0 ? e : "online") === "online" ? Rl.isOnline() : !0; }
var Sx = class {
    constructor(e) { this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent; }
};
function bu(e) { return e instanceof Sx; }
function Cx(e) { let t = !1, n = 0, r = !1, o, i, s; const a = new Promise((m, g) => { i = m, s = g; }), l = m => { var g; r || (y(new Sx(m)), (g = e.abort) == null || g.call(e)); }, c = () => { t = !0; }, d = () => { t = !1; }, f = () => Hp.isFocused() && (e.networkMode === "always" || Rl.isOnline()) && e.canRun(), h = () => wx(e.networkMode) && e.canRun(), x = m => { var g; r || (r = !0, (g = e.onSuccess) == null || g.call(e, m), o == null || o(), i(m)); }, y = m => { var g; r || (r = !0, (g = e.onError) == null || g.call(e, m), o == null || o(), s(m)); }, v = () => new Promise(m => { var g; o = w => { (r || f()) && m(w); }, (g = e.onPause) == null || g.call(e); }).then(() => { var m; o = void 0, r || (m = e.onContinue) == null || m.call(e); }), S = () => { if (r)
    return; let m; const g = n === 0 ? e.initialPromise : void 0; try {
    m = g !== null && g !== void 0 ? g : e.fn();
}
catch (w) {
    m = Promise.reject(w);
} Promise.resolve(m).then(x).catch(w => { var _q, _z; var P; if (r)
    return; const C = (_q = e.retry) !== null && _q !== void 0 ? _q : (ri ? 0 : 3), E = (_z = e.retryDelay) !== null && _z !== void 0 ? _z : KR, R = typeof E == "function" ? E(n, w) : E, b = C === !0 || typeof C == "number" && n < C || typeof C == "function" && C(n, w); if (t || !b) {
    y(w);
    return;
} n++, (P = e.onFail) == null || P.call(e, n, w), BR(R).then(() => f() ? void 0 : v()).then(() => { t ? y(w) : S(); }); }); }; return { promise: a, cancel: l, continue: () => (o == null || o(), a), cancelRetry: c, continueRetry: d, canStart: h, start: () => (h() ? S() : v().then(S), a) }; }
function GR() { let e = [], t = 0, n = h => { h(); }, r = h => { h(); }, o = h => setTimeout(h, 0); const i = h => { o = h; }, s = h => { let x; t++; try {
    x = h();
}
finally {
    t--, t || c();
} return x; }, a = h => { t ? e.push(h) : o(() => { n(h); }); }, l = h => (...x) => { a(() => { h(...x); }); }, c = () => { const h = e; e = [], h.length && o(() => { r(() => { h.forEach(x => { n(x); }); }); }); }; return { batch: s, batchCalls: l, schedule: a, setNotifyFunction: h => { n = h; }, setBatchNotifyFunction: h => { r = h; }, setScheduler: i }; }
var Ue = GR(), Ar, $g, Ex = ($g = class {
    constructor() { re(this, Ar); }
    destroy() { this.clearGcTimeout(); }
    scheduleGc() { this.clearGcTimeout(), Wd(this.gcTime) && H(this, Ar, setTimeout(() => { this.optionalRemove(); }, this.gcTime)); }
    updateGcTime(e) { this.gcTime = Math.max(this.gcTime || 0, e !== null && e !== void 0 ? e : (ri ? 1 / 0 : 5 * 60 * 1e3)); }
    clearGcTimeout() { N(this, Ar) && (clearTimeout(N(this, Ar)), H(this, Ar, void 0)); }
}, Ar = new WeakMap, $g), zo, Bo, Rt, qe, Fs, _r, zt, vn, Fg, QR = (Fg = class extends Ex {
    constructor(t) { super(); re(this, zt); re(this, zo); re(this, Bo); re(this, Rt); re(this, qe); re(this, Fs); re(this, _r); H(this, _r, !1), H(this, Fs, t.defaultOptions), this.setOptions(t.options), this.observers = [], H(this, Rt, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, H(this, zo, t.state || qR(this.options)), this.state = N(this, zo), this.scheduleGc(); }
    get meta() { return this.options.meta; }
    get promise() { var t; return (t = N(this, qe)) == null ? void 0 : t.promise; }
    setOptions(t) { this.options = Object.assign(Object.assign({}, N(this, Fs)), t), this.updateGcTime(this.options.gcTime); }
    optionalRemove() { !this.observers.length && this.state.fetchStatus === "idle" && N(this, Rt).remove(this); }
    setData(t, n) { const r = Qd(this.state.data, t, this.options); return ue(this, zt, vn).call(this, { data: r, type: "success", dataUpdatedAt: n == null ? void 0 : n.updatedAt, manual: n == null ? void 0 : n.manual }), r; }
    setState(t, n) { ue(this, zt, vn).call(this, { type: "setState", state: t, setStateOptions: n }); }
    cancel(t) { var r, o; const n = (r = N(this, qe)) == null ? void 0 : r.promise; return (o = N(this, qe)) == null || o.cancel(t), n ? n.then(Nt).catch(Nt) : Promise.resolve(); }
    destroy() { super.destroy(), this.cancel({ silent: !0 }); }
    reset() { this.destroy(), this.setState(N(this, zo)); }
    isActive() { return this.observers.some(t => Vt(t.options.enabled, this) !== !1); }
    isDisabled() { return this.getObserversCount() > 0 && !this.isActive(); }
    isStale() { return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0; }
    isStaleByTime(t = 0) { return this.state.isInvalidated || this.state.data === void 0 || !vx(this.state.dataUpdatedAt, t); }
    onFocus() { var n; const t = this.observers.find(r => r.shouldFetchOnWindowFocus()); t == null || t.refetch({ cancelRefetch: !1 }), (n = N(this, qe)) == null || n.continue(); }
    onOnline() { var n; const t = this.observers.find(r => r.shouldFetchOnReconnect()); t == null || t.refetch({ cancelRefetch: !1 }), (n = N(this, qe)) == null || n.continue(); }
    addObserver(t) { this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), N(this, Rt).notify({ type: "observerAdded", query: this, observer: t })); }
    removeObserver(t) { this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (N(this, qe) && (N(this, _r) ? N(this, qe).cancel({ revert: !0 }) : N(this, qe).cancelRetry()), this.scheduleGc()), N(this, Rt).notify({ type: "observerRemoved", query: this, observer: t })); }
    getObserversCount() { return this.observers.length; }
    invalidate() { this.state.isInvalidated || ue(this, zt, vn).call(this, { type: "invalidate" }); }
    fetch(t, n) { var l, c, d; if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
            this.cancel({ silent: !0 });
        else if (N(this, qe))
            return N(this, qe).continueRetry(), N(this, qe).promise;
    } if (t && this.setOptions(t), !this.options.queryFn) {
        const f = this.observers.find(h => h.options.queryFn);
        f && this.setOptions(f.options);
    } const r = new AbortController, o = f => { Object.defineProperty(f, "signal", { enumerable: !0, get: () => (H(this, _r, !0), r.signal) }); }, i = () => { const f = xx(this.options, n), h = { queryKey: this.queryKey, meta: this.meta }; return o(h), H(this, _r, !1), this.options.persister ? this.options.persister(f, h, this) : f(h); }, s = { fetchOptions: n, options: this.options, queryKey: this.queryKey, state: this.state, fetchFn: i }; o(s), (l = this.options.behavior) == null || l.onFetch(s, this), H(this, Bo, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = s.fetchOptions) == null ? void 0 : c.meta)) && ue(this, zt, vn).call(this, { type: "fetch", meta: (d = s.fetchOptions) == null ? void 0 : d.meta }); const a = f => { var h, x, y, v; bu(f) && f.silent || ue(this, zt, vn).call(this, { type: "error", error: f }), bu(f) || ((x = (h = N(this, Rt).config).onError) == null || x.call(h, f, this), (v = (y = N(this, Rt).config).onSettled) == null || v.call(y, this.state.data, f, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1; }; return H(this, qe, Cx({ initialPromise: n == null ? void 0 : n.initialPromise, fn: s.fetchFn, abort: r.abort.bind(r), onSuccess: f => { var h, x, y, v; if (f === void 0) {
            a(new Error(`${this.queryHash} data is undefined`));
            return;
        } this.setData(f), (x = (h = N(this, Rt).config).onSuccess) == null || x.call(h, f, this), (v = (y = N(this, Rt).config).onSettled) == null || v.call(y, f, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1; }, onError: a, onFail: (f, h) => { ue(this, zt, vn).call(this, { type: "failed", failureCount: f, error: h }); }, onPause: () => { ue(this, zt, vn).call(this, { type: "pause" }); }, onContinue: () => { ue(this, zt, vn).call(this, { type: "continue" }); }, retry: s.options.retry, retryDelay: s.options.retryDelay, networkMode: s.options.networkMode, canRun: () => !0 })), N(this, qe).start(); }
}, zo = new WeakMap, Bo = new WeakMap, Rt = new WeakMap, qe = new WeakMap, Fs = new WeakMap, _r = new WeakMap, zt = new WeakSet, vn = function (t) { const n = r => { var _q, _z; switch (t.type) {
    case "failed": return Object.assign(Object.assign({}, r), { fetchFailureCount: t.failureCount, fetchFailureReason: t.error });
    case "pause": return Object.assign(Object.assign({}, r), { fetchStatus: "paused" });
    case "continue": return Object.assign(Object.assign({}, r), { fetchStatus: "fetching" });
    case "fetch": return Object.assign(Object.assign(Object.assign({}, r), bx(r.data, this.options)), { fetchMeta: (_q = t.meta) !== null && _q !== void 0 ? _q : null });
    case "success": return Object.assign(Object.assign(Object.assign({}, r), { data: t.data, dataUpdateCount: r.dataUpdateCount + 1, dataUpdatedAt: (_z = t.dataUpdatedAt) !== null && _z !== void 0 ? _z : Date.now(), error: null, isInvalidated: !1, status: "success" }), !t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null });
    case "error":
        const o = t.error;
        return bu(o) && o.revert && N(this, Bo) ? Object.assign(Object.assign({}, N(this, Bo)), { fetchStatus: "idle" }) : Object.assign(Object.assign({}, r), { error: o, errorUpdateCount: r.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: r.fetchFailureCount + 1, fetchFailureReason: o, fetchStatus: "idle", status: "error" });
    case "invalidate": return Object.assign(Object.assign({}, r), { isInvalidated: !0 });
    case "setState": return Object.assign(Object.assign({}, r), t.state);
} }; this.state = n(this.state), Ue.batch(() => { this.observers.forEach(r => { r.onQueryUpdate(); }), N(this, Rt).notify({ query: this, type: "updated", action: t }); }); }, Fg);
function bx(e, t) { return Object.assign({ fetchFailureCount: 0, fetchFailureReason: null, fetchStatus: wx(t.networkMode) ? "fetching" : "paused" }, e === void 0 && { error: null, status: "pending" }); }
function qR(e) { const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0; return { data: t, dataUpdateCount: 0, dataUpdatedAt: n ? r !== null && r !== void 0 ? r : Date.now() : 0, error: null, errorUpdateCount: 0, errorUpdatedAt: 0, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: null, isInvalidated: !1, status: n ? "success" : "pending", fetchStatus: "idle" }; }
var rn, zg, YR = (zg = class extends Qs {
    constructor(t = {}) { super(); re(this, rn); this.config = t, H(this, rn, new Map); }
    build(t, n, r) { var _q; const o = n.queryKey, i = (_q = n.queryHash) !== null && _q !== void 0 ? _q : Vp(o, n); let s = this.get(i); return s || (s = new QR({ cache: this, queryKey: o, queryHash: i, options: t.defaultQueryOptions(n), state: r, defaultOptions: t.getQueryDefaults(o) }), this.add(s)), s; }
    add(t) { N(this, rn).has(t.queryHash) || (N(this, rn).set(t.queryHash, t), this.notify({ type: "added", query: t })); }
    remove(t) { const n = N(this, rn).get(t.queryHash); n && (t.destroy(), n === t && N(this, rn).delete(t.queryHash), this.notify({ type: "removed", query: t })); }
    clear() { Ue.batch(() => { this.getAll().forEach(t => { this.remove(t); }); }); }
    get(t) { return N(this, rn).get(t); }
    getAll() { return [...N(this, rn).values()]; }
    find(t) { const n = Object.assign({ exact: !0 }, t); return this.getAll().find(r => wv(n, r)); }
    findAll(t = {}) { const n = this.getAll(); return Object.keys(t).length > 0 ? n.filter(r => wv(t, r)) : n; }
    notify(t) { Ue.batch(() => { this.listeners.forEach(n => { n(t); }); }); }
    onFocus() { Ue.batch(() => { this.getAll().forEach(t => { t.onFocus(); }); }); }
    onOnline() { Ue.batch(() => { this.getAll().forEach(t => { t.onOnline(); }); }); }
}, rn = new WeakMap, zg), on, et, Mr, sn, zn, Bg, XR = (Bg = class extends Ex {
    constructor(t) { super(); re(this, sn); re(this, on); re(this, et); re(this, Mr); this.mutationId = t.mutationId, H(this, et, t.mutationCache), H(this, on, []), this.state = t.state || JR(), this.setOptions(t.options), this.scheduleGc(); }
    setOptions(t) { this.options = t, this.updateGcTime(this.options.gcTime); }
    get meta() { return this.options.meta; }
    addObserver(t) { N(this, on).includes(t) || (N(this, on).push(t), this.clearGcTimeout(), N(this, et).notify({ type: "observerAdded", mutation: this, observer: t })); }
    removeObserver(t) { H(this, on, N(this, on).filter(n => n !== t)), this.scheduleGc(), N(this, et).notify({ type: "observerRemoved", mutation: this, observer: t }); }
    optionalRemove() { N(this, on).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, et).remove(this)); }
    continue() { var _q; var t; return (_q = ((t = N(this, Mr)) == null ? void 0 : t.continue())) !== null && _q !== void 0 ? _q : this.execute(this.state.variables); }
    execute(t) {
        return __awaiter(this, void 0, void 0, function* () { var _q; var o, i, s, a, l, c, d, f, h, x, y, v, S, m, g, w, C, E, R, b; H(this, Mr, Cx({ fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")), onFail: (P, k) => { ue(this, sn, zn).call(this, { type: "failed", failureCount: P, error: k }); }, onPause: () => { ue(this, sn, zn).call(this, { type: "pause" }); }, onContinue: () => { ue(this, sn, zn).call(this, { type: "continue" }); }, retry: (_q = this.options.retry) !== null && _q !== void 0 ? _q : 0, retryDelay: this.options.retryDelay, networkMode: this.options.networkMode, canRun: () => N(this, et).canRun(this) })); const n = this.state.status === "pending", r = !N(this, Mr).canStart(); try {
            if (!n) {
                ue(this, sn, zn).call(this, { type: "pending", variables: t, isPaused: r }), yield ((i = (o = N(this, et).config).onMutate) == null ? void 0 : i.call(o, t, this));
                const k = yield ((a = (s = this.options).onMutate) == null ? void 0 : a.call(s, t));
                k !== this.state.context && ue(this, sn, zn).call(this, { type: "pending", context: k, variables: t, isPaused: r });
            }
            const P = yield N(this, Mr).start();
            return yield ((c = (l = N(this, et).config).onSuccess) == null ? void 0 : c.call(l, P, t, this.state.context, this)), yield ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, P, t, this.state.context)), yield ((x = (h = N(this, et).config).onSettled) == null ? void 0 : x.call(h, P, null, this.state.variables, this.state.context, this)), yield ((v = (y = this.options).onSettled) == null ? void 0 : v.call(y, P, null, t, this.state.context)), ue(this, sn, zn).call(this, { type: "success", data: P }), P;
        }
        catch (P) {
            try {
                throw yield ((m = (S = N(this, et).config).onError) == null ? void 0 : m.call(S, P, t, this.state.context, this)), yield ((w = (g = this.options).onError) == null ? void 0 : w.call(g, P, t, this.state.context)), yield ((E = (C = N(this, et).config).onSettled) == null ? void 0 : E.call(C, void 0, P, this.state.variables, this.state.context, this)), yield ((b = (R = this.options).onSettled) == null ? void 0 : b.call(R, void 0, P, t, this.state.context)), P;
            }
            finally {
                ue(this, sn, zn).call(this, { type: "error", error: P });
            }
        }
        finally {
            N(this, et).runNext(this);
        } });
    }
}, on = new WeakMap, et = new WeakMap, Mr = new WeakMap, sn = new WeakSet, zn = function (t) { const n = r => { switch (t.type) {
    case "failed": return Object.assign(Object.assign({}, r), { failureCount: t.failureCount, failureReason: t.error });
    case "pause": return Object.assign(Object.assign({}, r), { isPaused: !0 });
    case "continue": return Object.assign(Object.assign({}, r), { isPaused: !1 });
    case "pending": return Object.assign(Object.assign({}, r), { context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: t.isPaused, status: "pending", variables: t.variables, submittedAt: Date.now() });
    case "success": return Object.assign(Object.assign({}, r), { data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1 });
    case "error": return Object.assign(Object.assign({}, r), { data: void 0, error: t.error, failureCount: r.failureCount + 1, failureReason: t.error, isPaused: !1, status: "error" });
} }; this.state = n(this.state), Ue.batch(() => { N(this, on).forEach(r => { r.onMutationUpdate(t); }), N(this, et).notify({ mutation: this, type: "updated", action: t }); }); }, Bg);
function JR() { return { context: void 0, data: void 0, error: null, failureCount: 0, failureReason: null, isPaused: !1, status: "idle", variables: void 0, submittedAt: 0 }; }
var vt, zs, Ug, ZR = (Ug = class extends Qs {
    constructor(t = {}) { super(); re(this, vt); re(this, zs); this.config = t, H(this, vt, new Map), H(this, zs, Date.now()); }
    build(t, n, r) { const o = new XR({ mutationCache: this, mutationId: ++ca(this, zs)._, options: t.defaultMutationOptions(n), state: r }); return this.add(o), o; }
    add(t) { var _q; const n = Na(t), r = (_q = N(this, vt).get(n)) !== null && _q !== void 0 ? _q : []; r.push(t), N(this, vt).set(n, r), this.notify({ type: "added", mutation: t }); }
    remove(t) { var r; const n = Na(t); if (N(this, vt).has(n)) {
        const o = (r = N(this, vt).get(n)) == null ? void 0 : r.filter(i => i !== t);
        o && (o.length === 0 ? N(this, vt).delete(n) : N(this, vt).set(n, o));
    } this.notify({ type: "removed", mutation: t }); }
    canRun(t) { var r; const n = (r = N(this, vt).get(Na(t))) == null ? void 0 : r.find(o => o.state.status === "pending"); return !n || n === t; }
    runNext(t) { var _q; var r; const n = (r = N(this, vt).get(Na(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused); return (_q = (n == null ? void 0 : n.continue())) !== null && _q !== void 0 ? _q : Promise.resolve(); }
    clear() { Ue.batch(() => { this.getAll().forEach(t => { this.remove(t); }); }); }
    getAll() { return [...N(this, vt).values()].flat(); }
    find(t) { const n = Object.assign({ exact: !0 }, t); return this.getAll().find(r => Sv(n, r)); }
    findAll(t = {}) { return this.getAll().filter(n => Sv(t, n)); }
    notify(t) { Ue.batch(() => { this.listeners.forEach(n => { n(t); }); }); }
    resumePausedMutations() { const t = this.getAll().filter(n => n.state.isPaused); return Ue.batch(() => Promise.all(t.map(n => n.continue().catch(Nt)))); }
}, vt = new WeakMap, zs = new WeakMap, Ug);
function Na(e) { var _q; var t; return (_q = ((t = e.options.scope) == null ? void 0 : t.id)) !== null && _q !== void 0 ? _q : String(e.mutationId); }
function eN(e) { return { onFetch: (t, n) => { const r = () => __awaiter(this, void 0, void 0, function* () { var _q; var y, v, S, m, g; const o = t.options, i = (S = (v = (y = t.fetchOptions) == null ? void 0 : y.meta) == null ? void 0 : v.fetchMore) == null ? void 0 : S.direction, s = ((m = t.state.data) == null ? void 0 : m.pages) || [], a = ((g = t.state.data) == null ? void 0 : g.pageParams) || [], l = { pages: [], pageParams: [] }; let c = !1; const d = w => { Object.defineProperty(w, "signal", { enumerable: !0, get: () => (t.signal.aborted ? c = !0 : t.signal.addEventListener("abort", () => { c = !0; }), t.signal) }); }, f = xx(t.options, t.fetchOptions), h = (w, C, E) => __awaiter(this, void 0, void 0, function* () { if (c)
        return Promise.reject(); if (C == null && w.pages.length)
        return Promise.resolve(w); const R = { queryKey: t.queryKey, pageParam: C, direction: E ? "backward" : "forward", meta: t.options.meta }; d(R); const b = yield f(R), { maxPages: P } = t.options, k = E ? VR : UR; return { pages: k(w.pages, b, P), pageParams: k(w.pageParams, C, P) }; }); let x; if (i && s.length) {
        const w = i === "backward", C = w ? tN : bv, E = { pages: s, pageParams: a }, R = C(o, E);
        x = yield h(E, R, w);
    }
    else {
        x = yield h(l, (_q = a[0]) !== null && _q !== void 0 ? _q : o.initialPageParam);
        const w = e !== null && e !== void 0 ? e : s.length;
        for (let C = 1; C < w; C++) {
            const E = bv(o, x);
            x = yield h(x, E);
        }
    } return x; }); t.options.persister ? t.fetchFn = () => { var o, i; return (i = (o = t.options).persister) == null ? void 0 : i.call(o, r, { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal }, n); } : t.fetchFn = r; } }; }
function bv(e, { pages: t, pageParams: n }) { const r = t.length - 1; return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0; }
function tN(e, { pages: t, pageParams: n }) { var r; return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0; }
var ke, Yn, Xn, Uo, Vo, Jn, Ho, Wo, Vg, nN = (Vg = class {
    constructor(e = {}) { re(this, ke); re(this, Yn); re(this, Xn); re(this, Uo); re(this, Vo); re(this, Jn); re(this, Ho); re(this, Wo); H(this, ke, e.queryCache || new YR), H(this, Yn, e.mutationCache || new ZR), H(this, Xn, e.defaultOptions || {}), H(this, Uo, new Map), H(this, Vo, new Map), H(this, Jn, 0); }
    mount() { ca(this, Jn)._++, N(this, Jn) === 1 && (H(this, Ho, Hp.subscribe((e) => __awaiter(this, void 0, void 0, function* () { e && (yield this.resumePausedMutations(), N(this, ke).onFocus()); }))), H(this, Wo, Rl.subscribe((e) => __awaiter(this, void 0, void 0, function* () { e && (yield this.resumePausedMutations(), N(this, ke).onOnline()); })))); }
    unmount() { var e, t; ca(this, Jn)._--, N(this, Jn) === 0 && ((e = N(this, Ho)) == null || e.call(this), H(this, Ho, void 0), (t = N(this, Wo)) == null || t.call(this), H(this, Wo, void 0)); }
    isFetching(e) { return N(this, ke).findAll(Object.assign(Object.assign({}, e), { fetchStatus: "fetching" })).length; }
    isMutating(e) { return N(this, Yn).findAll(Object.assign(Object.assign({}, e), { status: "pending" })).length; }
    getQueryData(e) { var n; const t = this.defaultQueryOptions({ queryKey: e }); return (n = N(this, ke).get(t.queryHash)) == null ? void 0 : n.state.data; }
    ensureQueryData(e) { const t = this.getQueryData(e.queryKey); if (t === void 0)
        return this.fetchQuery(e); {
        const n = this.defaultQueryOptions(e), r = N(this, ke).build(this, n);
        return e.revalidateIfStale && r.isStaleByTime(_o(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t);
    } }
    getQueriesData(e) { return N(this, ke).findAll(e).map(({ queryKey: t, state: n }) => { const r = n.data; return [t, r]; }); }
    setQueryData(e, t, n) { const r = this.defaultQueryOptions({ queryKey: e }), o = N(this, ke).get(r.queryHash), i = o == null ? void 0 : o.state.data, s = zR(t, i); if (s !== void 0)
        return N(this, ke).build(this, r).setData(s, Object.assign(Object.assign({}, n), { manual: !0 })); }
    setQueriesData(e, t, n) { return Ue.batch(() => N(this, ke).findAll(e).map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])); }
    getQueryState(e) { var n; const t = this.defaultQueryOptions({ queryKey: e }); return (n = N(this, ke).get(t.queryHash)) == null ? void 0 : n.state; }
    removeQueries(e) { const t = N(this, ke); Ue.batch(() => { t.findAll(e).forEach(n => { t.remove(n); }); }); }
    resetQueries(e, t) { const n = N(this, ke), r = Object.assign({ type: "active" }, e); return Ue.batch(() => (n.findAll(e).forEach(o => { o.reset(); }), this.refetchQueries(r, t))); }
    cancelQueries(e = {}, t = {}) { const n = Object.assign({ revert: !0 }, t), r = Ue.batch(() => N(this, ke).findAll(e).map(o => o.cancel(n))); return Promise.all(r).then(Nt).catch(Nt); }
    invalidateQueries(e = {}, t = {}) { return Ue.batch(() => { var _q, _z; if (N(this, ke).findAll(e).forEach(r => { r.invalidate(); }), e.refetchType === "none")
        return Promise.resolve(); const n = Object.assign(Object.assign({}, e), { type: (_z = (_q = e.refetchType) !== null && _q !== void 0 ? _q : e.type) !== null && _z !== void 0 ? _z : "active" }); return this.refetchQueries(n, t); }); }
    refetchQueries(e = {}, t) { var _q; const n = Object.assign(Object.assign({}, t), { cancelRefetch: (_q = (t == null ? void 0 : t.cancelRefetch)) !== null && _q !== void 0 ? _q : !0 }), r = Ue.batch(() => N(this, ke).findAll(e).filter(o => !o.isDisabled()).map(o => { let i = o.fetch(void 0, n); return n.throwOnError || (i = i.catch(Nt)), o.state.fetchStatus === "paused" ? Promise.resolve() : i; })); return Promise.all(r).then(Nt); }
    fetchQuery(e) { const t = this.defaultQueryOptions(e); t.retry === void 0 && (t.retry = !1); const n = N(this, ke).build(this, t); return n.isStaleByTime(_o(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data); }
    prefetchQuery(e) { return this.fetchQuery(e).then(Nt).catch(Nt); }
    fetchInfiniteQuery(e) { return e.behavior = eN(e.pages), this.fetchQuery(e); }
    prefetchInfiniteQuery(e) { return this.fetchInfiniteQuery(e).then(Nt).catch(Nt); }
    resumePausedMutations() { return Rl.isOnline() ? N(this, Yn).resumePausedMutations() : Promise.resolve(); }
    getQueryCache() { return N(this, ke); }
    getMutationCache() { return N(this, Yn); }
    getDefaultOptions() { return N(this, Xn); }
    setDefaultOptions(e) { H(this, Xn, e); }
    setQueryDefaults(e, t) { N(this, Uo).set(ks(e), { queryKey: e, defaultOptions: t }); }
    getQueryDefaults(e) { const t = [...N(this, Uo).values()]; let n = {}; return t.forEach(r => { Ts(e, r.queryKey) && (n = Object.assign(Object.assign({}, n), r.defaultOptions)); }), n; }
    setMutationDefaults(e, t) { N(this, Vo).set(ks(e), { mutationKey: e, defaultOptions: t }); }
    getMutationDefaults(e) { const t = [...N(this, Vo).values()]; let n = {}; return t.forEach(r => { Ts(e, r.mutationKey) && (n = Object.assign(Object.assign({}, n), r.defaultOptions)); }), n; }
    defaultQueryOptions(e) { if (e._defaulted)
        return e; const t = Object.assign(Object.assign(Object.assign(Object.assign({}, N(this, Xn).queries), this.getQueryDefaults(e.queryKey)), e), { _defaulted: !0 }); return t.queryHash || (t.queryHash = Vp(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === yx && (t.enabled = !1), t; }
    defaultMutationOptions(e) { return e != null && e._defaulted ? e : Object.assign(Object.assign(Object.assign(Object.assign({}, N(this, Xn).mutations), (e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)), e), { _defaulted: !0 }); }
    clear() { N(this, ke).clear(), N(this, Yn).clear(); }
}, ke = new WeakMap, Yn = new WeakMap, Xn = new WeakMap, Uo = new WeakMap, Vo = new WeakMap, Jn = new WeakMap, Ho = new WeakMap, Wo = new WeakMap, Vg), lt, de, Bs, tt, Ir, Ko, an, Us, Go, Qo, Dr, Lr, Zn, qo, me, Ki, qd, Yd, Xd, Jd, Zd, ef, tf, Px, Hg, rN = (Hg = class extends Qs {
    constructor(t, n) { super(); re(this, me); re(this, lt); re(this, de); re(this, Bs); re(this, tt); re(this, Ir); re(this, Ko); re(this, an); re(this, Us); re(this, Go); re(this, Qo); re(this, Dr); re(this, Lr); re(this, Zn); re(this, qo, new Set); this.options = n, H(this, lt, t), H(this, an, null), this.bindMethods(), this.setOptions(n); }
    bindMethods() { this.refetch = this.refetch.bind(this); }
    onSubscribe() { this.listeners.size === 1 && (N(this, de).addObserver(this), Pv(N(this, de), this.options) ? ue(this, me, Ki).call(this) : this.updateResult(), ue(this, me, Jd).call(this)); }
    onUnsubscribe() { this.hasListeners() || this.destroy(); }
    shouldFetchOnReconnect() { return nf(N(this, de), this.options, this.options.refetchOnReconnect); }
    shouldFetchOnWindowFocus() { return nf(N(this, de), this.options, this.options.refetchOnWindowFocus); }
    destroy() { this.listeners = new Set, ue(this, me, Zd).call(this), ue(this, me, ef).call(this), N(this, de).removeObserver(this); }
    setOptions(t, n) { const r = this.options, o = N(this, de); if (this.options = N(this, lt).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Vt(this.options.enabled, N(this, de)) != "boolean")
        throw new Error("Expected enabled to be a boolean or a callback that returns a boolean"); ue(this, me, tf).call(this), N(this, de).setOptions(this.options), r._defaulted && !Kd(this.options, r) && N(this, lt).getQueryCache().notify({ type: "observerOptionsUpdated", query: N(this, de), observer: this }); const i = this.hasListeners(); i && Rv(N(this, de), o, this.options, r) && ue(this, me, Ki).call(this), this.updateResult(n), i && (N(this, de) !== o || Vt(this.options.enabled, N(this, de)) !== Vt(r.enabled, N(this, de)) || _o(this.options.staleTime, N(this, de)) !== _o(r.staleTime, N(this, de))) && ue(this, me, qd).call(this); const s = ue(this, me, Yd).call(this); i && (N(this, de) !== o || Vt(this.options.enabled, N(this, de)) !== Vt(r.enabled, N(this, de)) || s !== N(this, Zn)) && ue(this, me, Xd).call(this, s); }
    getOptimisticResult(t) { const n = N(this, lt).getQueryCache().build(N(this, lt), t), r = this.createResult(n, t); return iN(this, r) && (H(this, tt, r), H(this, Ko, this.options), H(this, Ir, N(this, de).state)), r; }
    getCurrentResult() { return N(this, tt); }
    trackResult(t, n) { const r = {}; return Object.keys(t).forEach(o => { Object.defineProperty(r, o, { configurable: !1, enumerable: !0, get: () => (this.trackProp(o), n == null || n(o), t[o]) }); }), r; }
    trackProp(t) { N(this, qo).add(t); }
    getCurrentQuery() { return N(this, de); }
    refetch(_q = {}) { var t = __rest(_q, []); return this.fetch(Object.assign({}, t)); }
    fetchOptimistic(t) { const n = N(this, lt).defaultQueryOptions(t), r = N(this, lt).getQueryCache().build(N(this, lt), n); return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, n)); }
    fetch(t) { var _q; return ue(this, me, Ki).call(this, Object.assign(Object.assign({}, t), { cancelRefetch: (_q = t.cancelRefetch) !== null && _q !== void 0 ? _q : !0 })).then(() => (this.updateResult(), N(this, tt))); }
    createResult(t, n) { var b; const r = N(this, de), o = this.options, i = N(this, tt), s = N(this, Ir), a = N(this, Ko), c = t !== r ? t.state : N(this, Bs), { state: d } = t; let f = Object.assign({}, d), h = !1, x; if (n._optimisticResults) {
        const P = this.hasListeners(), k = !P && Pv(t, n), T = P && Rv(t, r, n, o);
        (k || T) && (f = Object.assign(Object.assign({}, f), bx(d.data, t.options))), n._optimisticResults === "isRestoring" && (f.fetchStatus = "idle");
    } let { error: y, errorUpdatedAt: v, status: S } = f; if (n.select && f.data !== void 0)
        if (i && f.data === (s == null ? void 0 : s.data) && n.select === N(this, Us))
            x = N(this, Go);
        else
            try {
                H(this, Us, n.select), x = n.select(f.data), x = Qd(i == null ? void 0 : i.data, x, n), H(this, Go, x), H(this, an, null);
            }
            catch (P) {
                H(this, an, P);
            }
    else
        x = f.data; if (n.placeholderData !== void 0 && x === void 0 && S === "pending") {
        let P;
        if (i != null && i.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData))
            P = i.data;
        else if (P = typeof n.placeholderData == "function" ? n.placeholderData((b = N(this, Qo)) == null ? void 0 : b.state.data, N(this, Qo)) : n.placeholderData, n.select && P !== void 0)
            try {
                P = n.select(P), H(this, an, null);
            }
            catch (k) {
                H(this, an, k);
            }
        P !== void 0 && (S = "success", x = Qd(i == null ? void 0 : i.data, P, n), h = !0);
    } N(this, an) && (y = N(this, an), x = N(this, Go), v = Date.now(), S = "error"); const m = f.fetchStatus === "fetching", g = S === "pending", w = S === "error", C = g && m, E = x !== void 0; return { status: S, fetchStatus: f.fetchStatus, isPending: g, isSuccess: S === "success", isError: w, isInitialLoading: C, isLoading: C, data: x, dataUpdatedAt: f.dataUpdatedAt, error: y, errorUpdatedAt: v, failureCount: f.fetchFailureCount, failureReason: f.fetchFailureReason, errorUpdateCount: f.errorUpdateCount, isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0, isFetchedAfterMount: f.dataUpdateCount > c.dataUpdateCount || f.errorUpdateCount > c.errorUpdateCount, isFetching: m, isRefetching: m && !g, isLoadingError: w && !E, isPaused: f.fetchStatus === "paused", isPlaceholderData: h, isRefetchError: w && E, isStale: Wp(t, n), refetch: this.refetch }; }
    updateResult(t) { const n = N(this, tt), r = this.createResult(N(this, de), this.options); if (H(this, Ir, N(this, de).state), H(this, Ko, this.options), N(this, Ir).data !== void 0 && H(this, Qo, N(this, de)), Kd(r, n))
        return; H(this, tt, r); const o = {}, i = () => { if (!n)
        return !0; const { notifyOnChangeProps: s } = this.options, a = typeof s == "function" ? s() : s; if (a === "all" || !a && !N(this, qo).size)
        return !0; const l = new Set(a !== null && a !== void 0 ? a : N(this, qo)); return this.options.throwOnError && l.add("error"), Object.keys(N(this, tt)).some(c => { const d = c; return N(this, tt)[d] !== n[d] && l.has(d); }); }; (t == null ? void 0 : t.listeners) !== !1 && i() && (o.listeners = !0), ue(this, me, Px).call(this, Object.assign(Object.assign({}, o), t)); }
    onQueryUpdate() { this.updateResult(), this.hasListeners() && ue(this, me, Jd).call(this); }
}, lt = new WeakMap, de = new WeakMap, Bs = new WeakMap, tt = new WeakMap, Ir = new WeakMap, Ko = new WeakMap, an = new WeakMap, Us = new WeakMap, Go = new WeakMap, Qo = new WeakMap, Dr = new WeakMap, Lr = new WeakMap, Zn = new WeakMap, qo = new WeakMap, me = new WeakSet, Ki = function (t) { ue(this, me, tf).call(this); let n = N(this, de).fetch(this.options, t); return t != null && t.throwOnError || (n = n.catch(Nt)), n; }, qd = function () { ue(this, me, Zd).call(this); const t = _o(this.options.staleTime, N(this, de)); if (ri || N(this, tt).isStale || !Wd(t))
    return; const r = vx(N(this, tt).dataUpdatedAt, t) + 1; H(this, Dr, setTimeout(() => { N(this, tt).isStale || this.updateResult(); }, r)); }, Yd = function () { var _q; return (_q = (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(N(this, de)) : this.options.refetchInterval)) !== null && _q !== void 0 ? _q : !1; }, Xd = function (t) { ue(this, me, ef).call(this), H(this, Zn, t), !(ri || Vt(this.options.enabled, N(this, de)) === !1 || !Wd(N(this, Zn)) || N(this, Zn) === 0) && H(this, Lr, setInterval(() => { (this.options.refetchIntervalInBackground || Hp.isFocused()) && ue(this, me, Ki).call(this); }, N(this, Zn))); }, Jd = function () { ue(this, me, qd).call(this), ue(this, me, Xd).call(this, ue(this, me, Yd).call(this)); }, Zd = function () { N(this, Dr) && (clearTimeout(N(this, Dr)), H(this, Dr, void 0)); }, ef = function () { N(this, Lr) && (clearInterval(N(this, Lr)), H(this, Lr, void 0)); }, tf = function () { const t = N(this, lt).getQueryCache().build(N(this, lt), this.options); if (t === N(this, de))
    return; const n = N(this, de); H(this, de, t), H(this, Bs, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this)); }, Px = function (t) { Ue.batch(() => { t.listeners && this.listeners.forEach(n => { n(N(this, tt)); }), N(this, lt).getQueryCache().notify({ query: N(this, de), type: "observerResultsUpdated" }); }); }, Hg);
function oN(e, t) { return Vt(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1); }
function Pv(e, t) { return oN(e, t) || e.state.data !== void 0 && nf(e, t, t.refetchOnMount); }
function nf(e, t, n) { if (Vt(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && Wp(e, t);
} return !1; }
function Rv(e, t, n, r) { return (e !== t || Vt(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && Wp(e, n); }
function Wp(e, t) { return Vt(t.enabled, e) !== !1 && e.isStaleByTime(_o(t.staleTime, e)); }
function iN(e, t) { return !Kd(e.getCurrentResult(), t); }
var Rx = u.createContext(void 0), sN = e => { const t = u.useContext(Rx); if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one"); return t; }, aN = ({ client: e, children: t }) => (u.useEffect(() => (e.mount(), () => { e.unmount(); }), [e]), p.jsx(Rx.Provider, { value: e, children: t })), Nx = u.createContext(!1), lN = () => u.useContext(Nx);
Nx.Provider;
function cN() { let e = !1; return { clearReset: () => { e = !1; }, reset: () => { e = !0; }, isReset: () => e }; }
var uN = u.createContext(cN()), dN = () => u.useContext(uN);
function fN(e, t) { return typeof e == "function" ? e(...t) : !!e; }
var pN = (e, t) => { (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1)); }, hN = e => { u.useEffect(() => { e.clearReset(); }, [e]); }, mN = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) => e.isError && !t.isReset() && !e.isFetching && r && fN(n, [e.error, r]), vN = e => { e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3); }, gN = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, yN = (e, t, n) => t.fetchOptimistic(e).catch(() => { n.clearReset(); });
function xN(e, t, n) { var c, d, f, h; const r = sN(), o = lN(), i = dN(), s = r.defaultQueryOptions(e); (d = (c = r.getDefaultOptions().queries) == null ? void 0 : c._experimental_beforeQuery) == null || d.call(c, s), s._optimisticResults = o ? "isRestoring" : "optimistic", vN(s), pN(s, i), hN(i); const [a] = u.useState(() => new t(r, s)), l = a.getOptimisticResult(s); if (u.useSyncExternalStore(u.useCallback(x => { const y = o ? () => { } : a.subscribe(Ue.batchCalls(x)); return a.updateResult(), y; }, [a, o]), () => a.getCurrentResult(), () => a.getCurrentResult()), u.useEffect(() => { a.setOptions(s, { listeners: !1 }); }, [s, a]), gN(s, l))
    throw yN(s, a, i); if (mN({ result: l, errorResetBoundary: i, throwOnError: s.throwOnError, query: r.getQueryCache().get(s.queryHash) }))
    throw l.error; return (h = (f = r.getDefaultOptions().queries) == null ? void 0 : f._experimental_afterQuery) == null || h.call(f, s, l), s.notifyOnChangeProps ? l : a.trackResult(l); }
function mi(e, t) { return xN(e, rN); }
function wN(e, t) { const n = u.createContext(t); function r(i) { const { children: s } = i, a = __rest(i, ["children"]), l = u.useMemo(() => a, Object.values(a)); return p.jsx(n.Provider, { value: l, children: s }); } function o(i) { const s = u.useContext(n); if (s)
    return s; if (t !== void 0)
    return t; throw new Error(`\`${i}\` must be used within \`${e}\``); } return r.displayName = e + "Provider", [r, o]; }
function hn(e, t = []) { let n = []; function r(i, s) { const a = u.createContext(s), l = n.length; n = [...n, s]; function c(f) { const { scope: h, children: x } = f, y = __rest(f, ["scope", "children"]), v = (h == null ? void 0 : h[e][l]) || a, S = u.useMemo(() => y, Object.values(y)); return p.jsx(v.Provider, { value: S, children: x }); } function d(f, h) { const x = (h == null ? void 0 : h[e][l]) || a, y = u.useContext(x); if (y)
    return y; if (s !== void 0)
    return s; throw new Error(`\`${f}\` must be used within \`${i}\``); } return c.displayName = i + "Provider", [c, d]; } const o = () => { const i = n.map(s => u.createContext(s)); return function (a) { const l = (a == null ? void 0 : a[e]) || i; return u.useMemo(() => ({ [`__scope${e}`]: Object.assign(Object.assign({}, a), { [e]: l }) }), [a, l]); }; }; return o.scopeName = e, [r, SN(o, ...t)]; }
function SN(...e) { const t = e[0]; if (e.length === 1)
    return t; const n = () => { const r = e.map(o => ({ useScope: o(), scopeName: o.scopeName })); return function (i) { const s = r.reduce((a, { useScope: l, scopeName: c }) => { const f = l(i)[`__scope${c}`]; return Object.assign(Object.assign({}, a), f); }, {}); return u.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]); }; }; return n.scopeName = t.scopeName, n; }
function W(e, t, { checkForDefaultPrevented: n = !0 } = {}) { return function (o) { if (e == null || e(o), n === !1 || !o.defaultPrevented)
    return t == null ? void 0 : t(o); }; }
function CN(e, t) { typeof e == "function" ? e(t) : e != null && (e.current = t); }
function Kp(...e) { return t => e.forEach(n => CN(n, t)); }
function ce(...e) { return u.useCallback(Kp(...e), e); }
var hr = u.forwardRef((e, t) => { const { children: n } = e, r = __rest(e, ["children"]), o = u.Children.toArray(n), i = o.find(EN); if (i) {
    const s = i.props.children, a = o.map(l => l === i ? u.Children.count(s) > 1 ? u.Children.only(null) : u.isValidElement(s) ? s.props.children : null : l);
    return p.jsx(rf, Object.assign(Object.assign({}, r), { ref: t, children: u.isValidElement(s) ? u.cloneElement(s, void 0, a) : null }));
} return p.jsx(rf, Object.assign(Object.assign({}, r), { ref: t, children: n })); });
hr.displayName = "Slot";
var rf = u.forwardRef((e, t) => { const { children: n } = e, r = __rest(e, ["children"]); if (u.isValidElement(n)) {
    const o = PN(n);
    return u.cloneElement(n, Object.assign(Object.assign({}, bN(r, n.props)), { ref: t ? Kp(t, o) : o }));
} return u.Children.count(n) > 1 ? u.Children.only(null) : null; });
rf.displayName = "SlotClone";
var kx = ({ children: e }) => p.jsx(p.Fragment, { children: e });
function EN(e) { return u.isValidElement(e) && e.type === kx; }
function bN(e, t) { const n = Object.assign({}, t); for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => { i(...a), o(...a); } : o && (n[r] = o) : r === "style" ? n[r] = Object.assign(Object.assign({}, o), i) : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
} return Object.assign(Object.assign({}, e), n); }
function PN(e) { var r, o; let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning; return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref); }
var RN = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"], ne = RN.reduce((e, t) => { const n = u.forwardRef((r, o) => { const { asChild: i } = r, s = __rest(r, ["asChild"]), a = i ? hr : t; return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), p.jsx(a, Object.assign(Object.assign({}, s), { ref: o })); }); return n.displayName = `Primitive.${t}`, Object.assign(Object.assign({}, e), { [t]: n }); }, {});
function of(e, t) { e && _n.flushSync(() => e.dispatchEvent(t)); }
function Ve(e) { const t = u.useRef(e); return u.useEffect(() => { t.current = e; }), u.useMemo(() => (...n) => { var r; return (r = t.current) == null ? void 0 : r.call(t, ...n); }, []); }
function It({ prop: e, defaultProp: t, onChange: n = () => { } }) { const [r, o] = NN({ defaultProp: t, onChange: n }), i = e !== void 0, s = i ? e : r, a = Ve(n), l = u.useCallback(c => { if (i) {
    const f = typeof c == "function" ? c(e) : c;
    f !== e && a(f);
}
else
    o(c); }, [i, e, o, a]); return [s, l]; }
function NN({ defaultProp: e, onChange: t }) { const n = u.useState(e), [r] = n, o = u.useRef(r), i = Ve(t); return u.useEffect(() => { o.current !== r && (i(r), o.current = r); }, [r, o, i]), n; }
var kN = u.createContext(void 0);
function qs(e) { const t = u.useContext(kN); return e || t || "ltr"; }
var ze = globalThis != null && globalThis.document ? u.useLayoutEffect : () => { };
function TN(e, t) { return u.useReducer((n, r) => { var _q; return (_q = t[n][r]) !== null && _q !== void 0 ? _q : n; }, e); }
var Xt = e => { const { present: t, children: n } = e, r = ON(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), i = ce(r.ref, jN(o)); return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: i }) : null; };
Xt.displayName = "Presence";
function ON(e) { const [t, n] = u.useState(), r = u.useRef({}), o = u.useRef(e), i = u.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = TN(s, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } }); return u.useEffect(() => { const c = ka(r.current); i.current = a === "mounted" ? c : "none"; }, [a]), ze(() => { const c = r.current, d = o.current; if (d !== e) {
    const h = i.current, x = ka(c);
    e ? l("MOUNT") : x === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && h !== x ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
} }, [e, l]), ze(() => { if (t) {
    const c = f => { const x = ka(r.current).includes(f.animationName); f.target === t && x && _n.flushSync(() => l("ANIMATION_END")); }, d = f => { f.target === t && (i.current = ka(r.current)); };
    return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => { t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c); };
}
else
    l("ANIMATION_END"); }, [t, l]), { isPresent: ["mounted", "unmountSuspended"].includes(a), ref: u.useCallback(c => { c && (r.current = getComputedStyle(c)), n(c); }, []) }; }
function ka(e) { return (e == null ? void 0 : e.animationName) || "none"; }
function jN(e) { var r, o; let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning; return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref); }
var AN = qf.useId || (() => { }), _N = 0;
function Kt(e) { const [t, n] = u.useState(AN()); return ze(() => { e || n(r => r !== null && r !== void 0 ? r : String(_N++)); }, [e]), e || (t ? `radix-${t}` : ""); }
function Ys(e) { const t = e + "CollectionProvider", [n, r] = hn(t), [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map }), s = x => { const { scope: y, children: v } = x, S = Me.useRef(null), m = Me.useRef(new Map).current; return p.jsx(o, { scope: y, itemMap: m, collectionRef: S, children: v }); }; s.displayName = t; const a = e + "CollectionSlot", l = Me.forwardRef((x, y) => { const { scope: v, children: S } = x, m = i(a, v), g = ce(y, m.collectionRef); return p.jsx(hr, { ref: g, children: S }); }); l.displayName = a; const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = Me.forwardRef((x, y) => { const { scope: v, children: S } = x, m = __rest(x, ["scope", "children"]), g = Me.useRef(null), w = ce(y, g), C = i(c, v); return Me.useEffect(() => (C.itemMap.set(g, Object.assign({ ref: g }, m)), () => void C.itemMap.delete(g))), p.jsx(hr, { [d]: "", ref: w, children: S }); }); f.displayName = c; function h(x) { const y = i(e + "CollectionConsumer", x); return Me.useCallback(() => { const S = y.collectionRef.current; if (!S)
    return []; const m = Array.from(S.querySelectorAll(`[${d}]`)); return Array.from(y.itemMap.values()).sort((C, E) => m.indexOf(C.ref.current) - m.indexOf(E.ref.current)); }, [y.collectionRef, y.itemMap]); } return [{ Provider: s, Slot: l, ItemSlot: f }, h, r]; }
function MN(e, t = globalThis == null ? void 0 : globalThis.document) { const n = Ve(e); u.useEffect(() => { const r = o => { o.key === "Escape" && n(o); }; return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 }); }, [n, t]); }
var IN = "DismissableLayer", sf = "dismissableLayer.update", DN = "dismissableLayer.pointerDownOutside", LN = "dismissableLayer.focusOutside", Nv, Tx = u.createContext({ layers: new Set, layersWithOutsidePointerEventsDisabled: new Set, branches: new Set }), vi = u.forwardRef((e, t) => { var _q; const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: a } = e, l = __rest(e, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]), c = u.useContext(Tx), [d, f] = u.useState(null), h = (_q = (d == null ? void 0 : d.ownerDocument)) !== null && _q !== void 0 ? _q : (globalThis == null ? void 0 : globalThis.document), [, x] = u.useState({}), y = ce(t, b => f(b)), v = Array.from(c.layers), [S] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), m = v.indexOf(S), g = d ? v.indexOf(d) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, C = g >= m, E = zN(b => { const P = b.target, k = [...c.branches].some(T => T.contains(P)); !C || k || (o == null || o(b), s == null || s(b), b.defaultPrevented || a == null || a()); }, h), R = BN(b => { const P = b.target; [...c.branches].some(T => T.contains(P)) || (i == null || i(b), s == null || s(b), b.defaultPrevented || a == null || a()); }, h); return MN(b => { g === c.layers.size - 1 && (r == null || r(b), !b.defaultPrevented && a && (b.preventDefault(), a())); }, h), u.useEffect(() => { if (d)
    return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Nv = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), kv(), () => { n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Nv); }; }, [d, h, n, c]), u.useEffect(() => () => { d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), kv()); }, [d, c]), u.useEffect(() => { const b = () => x({}); return document.addEventListener(sf, b), () => document.removeEventListener(sf, b); }, []), p.jsx(ne.div, Object.assign(Object.assign({}, l), { ref: y, style: Object.assign({ pointerEvents: w ? C ? "auto" : "none" : void 0 }, e.style), onFocusCapture: W(e.onFocusCapture, R.onFocusCapture), onBlurCapture: W(e.onBlurCapture, R.onBlurCapture), onPointerDownCapture: W(e.onPointerDownCapture, E.onPointerDownCapture) })); });
vi.displayName = IN;
var $N = "DismissableLayerBranch", FN = u.forwardRef((e, t) => { const n = u.useContext(Tx), r = u.useRef(null), o = ce(t, r); return u.useEffect(() => { const i = r.current; if (i)
    return n.branches.add(i), () => { n.branches.delete(i); }; }, [n.branches]), p.jsx(ne.div, Object.assign(Object.assign({}, e), { ref: o })); });
FN.displayName = $N;
function zN(e, t = globalThis == null ? void 0 : globalThis.document) { const n = Ve(e), r = u.useRef(!1), o = u.useRef(() => { }); return u.useEffect(() => { const i = a => { if (a.target && !r.current) {
    let l = function () { Ox(DN, n, c, { discrete: !0 }); };
    const c = { originalEvent: a };
    a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
}
else
    t.removeEventListener("click", o.current); r.current = !1; }, s = window.setTimeout(() => { t.addEventListener("pointerdown", i); }, 0); return () => { window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current); }; }, [t, n]), { onPointerDownCapture: () => r.current = !0 }; }
function BN(e, t = globalThis == null ? void 0 : globalThis.document) { const n = Ve(e), r = u.useRef(!1); return u.useEffect(() => { const o = i => { i.target && !r.current && Ox(LN, n, { originalEvent: i }, { discrete: !1 }); }; return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o); }, [t, n]), { onFocusCapture: () => r.current = !0, onBlurCapture: () => r.current = !1 }; }
function kv() { const e = new CustomEvent(sf); document.dispatchEvent(e); }
function Ox(e, t, n, { discrete: r }) { const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n }); t && o.addEventListener(e, t, { once: !0 }), r ? of(o, i) : o.dispatchEvent(i); }
function Gp(e) { const t = u.useRef({ value: e, previous: e }); return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]); }
var UN = "VisuallyHidden", Qp = u.forwardRef((e, t) => p.jsx(ne.span, Object.assign(Object.assign({}, e), { ref: t, style: Object.assign({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }, e.style) })));
Qp.displayName = UN;
var jx = Qp, gi = "NavigationMenu", [qp, Ax, VN] = Ys(gi), [af, HN, WN] = Ys(gi), [Yp, lL] = hn(gi, [VN, WN]), [KN, Dt] = Yp(gi), [GN, QN] = Yp(gi), _x = u.forwardRef((e, t) => { const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: i, delayDuration: s = 200, skipDelayDuration: a = 300, orientation: l = "horizontal", dir: c } = e, d = __rest(e, ["__scopeNavigationMenu", "value", "onValueChange", "defaultValue", "delayDuration", "skipDelayDuration", "orientation", "dir"]), [f, h] = u.useState(null), x = ce(t, k => h(k)), y = qs(c), v = u.useRef(0), S = u.useRef(0), m = u.useRef(0), [g, w] = u.useState(!0), [C = "", E] = It({ prop: r, onChange: k => { const T = k !== "", M = a > 0; T ? (window.clearTimeout(m.current), M && w(!1)) : (window.clearTimeout(m.current), m.current = window.setTimeout(() => w(!0), a)), o == null || o(k); }, defaultProp: i }), R = u.useCallback(() => { window.clearTimeout(S.current), S.current = window.setTimeout(() => E(""), 150); }, [E]), b = u.useCallback(k => { window.clearTimeout(S.current), E(k); }, [E]), P = u.useCallback(k => { C === k ? window.clearTimeout(S.current) : v.current = window.setTimeout(() => { window.clearTimeout(S.current), E(k); }, s); }, [C, E, s]); return u.useEffect(() => () => { window.clearTimeout(v.current), window.clearTimeout(S.current), window.clearTimeout(m.current); }, []), p.jsx(Ix, { scope: n, isRootMenu: !0, value: C, dir: y, orientation: l, rootNavigationMenu: f, onTriggerEnter: k => { window.clearTimeout(v.current), g ? P(k) : b(k); }, onTriggerLeave: () => { window.clearTimeout(v.current), R(); }, onContentEnter: () => window.clearTimeout(S.current), onContentLeave: R, onItemSelect: k => { E(T => T === k ? "" : k); }, onItemDismiss: () => E(""), children: p.jsx(ne.nav, Object.assign(Object.assign({ "aria-label": "Main", "data-orientation": l, dir: y }, d), { ref: x })) }); });
_x.displayName = gi;
var Mx = "NavigationMenuSub", qN = u.forwardRef((e, t) => { const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: i, orientation: s = "horizontal" } = e, a = __rest(e, ["__scopeNavigationMenu", "value", "onValueChange", "defaultValue", "orientation"]), l = Dt(Mx, n), [c = "", d] = It({ prop: r, onChange: o, defaultProp: i }); return p.jsx(Ix, { scope: n, isRootMenu: !1, value: c, dir: l.dir, orientation: s, rootNavigationMenu: l.rootNavigationMenu, onTriggerEnter: f => d(f), onItemSelect: f => d(f), onItemDismiss: () => d(""), children: p.jsx(ne.div, Object.assign(Object.assign({ "data-orientation": s }, a), { ref: t })) }); });
qN.displayName = Mx;
var Ix = e => { const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: i, children: s, value: a, onItemSelect: l, onItemDismiss: c, onTriggerEnter: d, onTriggerLeave: f, onContentEnter: h, onContentLeave: x } = e, [y, v] = u.useState(null), [S, m] = u.useState(new Map), [g, w] = u.useState(null); return p.jsx(KN, { scope: t, isRootMenu: n, rootNavigationMenu: r, value: a, previousValue: Gp(a), baseId: Kt(), dir: o, orientation: i, viewport: y, onViewportChange: v, indicatorTrack: g, onIndicatorTrackChange: w, onTriggerEnter: Ve(d), onTriggerLeave: Ve(f), onContentEnter: Ve(h), onContentLeave: Ve(x), onItemSelect: Ve(l), onItemDismiss: Ve(c), onViewportContentChange: u.useCallback((C, E) => { m(R => (R.set(C, E), new Map(R))); }, []), onViewportContentRemove: u.useCallback(C => { m(E => E.has(C) ? (E.delete(C), new Map(E)) : E); }, []), children: p.jsx(qp.Provider, { scope: t, children: p.jsx(GN, { scope: t, items: S, children: s }) }) }); }, Dx = "NavigationMenuList", Lx = u.forwardRef((e, t) => { const { __scopeNavigationMenu: n } = e, r = __rest(e, ["__scopeNavigationMenu"]), o = Dt(Dx, n), i = p.jsx(ne.ul, Object.assign(Object.assign({ "data-orientation": o.orientation }, r), { ref: t })); return p.jsx(ne.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: p.jsx(qp.Slot, { scope: n, children: o.isRootMenu ? p.jsx(Gx, { asChild: !0, children: i }) : i }) }); });
Lx.displayName = Dx;
var $x = "NavigationMenuItem", [YN, Fx] = Yp($x), zx = u.forwardRef((e, t) => { const { __scopeNavigationMenu: n, value: r } = e, o = __rest(e, ["__scopeNavigationMenu", "value"]), i = Kt(), s = r || i || "LEGACY_REACT_AUTO_VALUE", a = u.useRef(null), l = u.useRef(null), c = u.useRef(null), d = u.useRef(() => { }), f = u.useRef(!1), h = u.useCallback((y = "start") => { if (a.current) {
    d.current();
    const v = cf(a.current);
    v.length && Zp(y === "start" ? v : v.reverse());
} }, []), x = u.useCallback(() => { if (a.current) {
    const y = cf(a.current);
    y.length && (d.current = rk(y));
} }, []); return p.jsx(YN, { scope: n, value: s, triggerRef: l, contentRef: a, focusProxyRef: c, wasEscapeCloseRef: f, onEntryKeyDown: h, onFocusProxyEnter: h, onRootContentClose: x, onContentFocusOutside: x, children: p.jsx(ne.li, Object.assign(Object.assign({}, o), { ref: t })) }); });
zx.displayName = $x;
var lf = "NavigationMenuTrigger", Bx = u.forwardRef((e, t) => { const { __scopeNavigationMenu: n, disabled: r } = e, o = __rest(e, ["__scopeNavigationMenu", "disabled"]), i = Dt(lf, e.__scopeNavigationMenu), s = Fx(lf, e.__scopeNavigationMenu), a = u.useRef(null), l = ce(a, s.triggerRef, t), c = qx(i.baseId, s.value), d = Yx(i.baseId, s.value), f = u.useRef(!1), h = u.useRef(!1), x = s.value === i.value; return p.jsxs(p.Fragment, { children: [p.jsx(qp.ItemSlot, { scope: n, value: s.value, children: p.jsx(Qx, { asChild: !0, children: p.jsx(ne.button, Object.assign(Object.assign({ id: c, disabled: r, "data-disabled": r ? "" : void 0, "data-state": eh(x), "aria-expanded": x, "aria-controls": d }, o), { ref: l, onPointerEnter: W(e.onPointerEnter, () => { h.current = !1, s.wasEscapeCloseRef.current = !1; }), onPointerMove: W(e.onPointerMove, Nl(() => { r || h.current || s.wasEscapeCloseRef.current || f.current || (i.onTriggerEnter(s.value), f.current = !0); })), onPointerLeave: W(e.onPointerLeave, Nl(() => { r || (i.onTriggerLeave(), f.current = !1); })), onClick: W(e.onClick, () => { i.onItemSelect(s.value), h.current = x; }), onKeyDown: W(e.onKeyDown, y => { const S = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation]; x && y.key === S && (s.onEntryKeyDown(), y.preventDefault()); }) })) }) }), x && p.jsxs(p.Fragment, { children: [p.jsx(jx, { "aria-hidden": !0, tabIndex: 0, ref: s.focusProxyRef, onFocus: y => { const v = s.contentRef.current, S = y.relatedTarget, m = S === a.current, g = v == null ? void 0 : v.contains(S); (m || !g) && s.onFocusProxyEnter(m ? "start" : "end"); } }), i.viewport && p.jsx("span", { "aria-owns": d })] })] }); });
Bx.displayName = lf;
var XN = "NavigationMenuLink", Tv = "navigationMenu.linkSelect", Ux = u.forwardRef((e, t) => { const { __scopeNavigationMenu: n, active: r, onSelect: o } = e, i = __rest(e, ["__scopeNavigationMenu", "active", "onSelect"]); return p.jsx(Qx, { asChild: !0, children: p.jsx(ne.a, Object.assign(Object.assign({ "data-active": r ? "" : void 0, "aria-current": r ? "page" : void 0 }, i), { ref: t, onClick: W(e.onClick, s => { const a = s.target, l = new CustomEvent(Tv, { bubbles: !0, cancelable: !0 }); if (a.addEventListener(Tv, c => o == null ? void 0 : o(c), { once: !0 }), of(a, l), !l.defaultPrevented && !s.metaKey) {
            const c = new CustomEvent(Ya, { bubbles: !0, cancelable: !0 });
            of(a, c);
        } }, { checkForDefaultPrevented: !1 }) })) }); });
Ux.displayName = XN;
var Xp = "NavigationMenuIndicator", Vx = u.forwardRef((e, t) => { const { forceMount: n } = e, r = __rest(e, ["forceMount"]), o = Dt(Xp, e.__scopeNavigationMenu), i = !!o.value; return o.indicatorTrack ? zp.createPortal(p.jsx(Xt, { present: n || i, children: p.jsx(JN, Object.assign(Object.assign({}, r), { ref: t })) }), o.indicatorTrack) : null; });
Vx.displayName = Xp;
var JN = u.forwardRef((e, t) => { const { __scopeNavigationMenu: n } = e, r = __rest(e, ["__scopeNavigationMenu"]), o = Dt(Xp, n), i = Ax(n), [s, a] = u.useState(null), [l, c] = u.useState(null), d = o.orientation === "horizontal", f = !!o.value; u.useEffect(() => { var v; const y = (v = i().find(S => S.value === o.value)) == null ? void 0 : v.ref.current; y && a(y); }, [i, o.value]); const h = () => { s && c({ size: d ? s.offsetWidth : s.offsetHeight, offset: d ? s.offsetLeft : s.offsetTop }); }; return uf(s, h), uf(o.indicatorTrack, h), l ? p.jsx(ne.div, Object.assign(Object.assign({ "aria-hidden": !0, "data-state": f ? "visible" : "hidden", "data-orientation": o.orientation }, r), { ref: t, style: Object.assign(Object.assign({ position: "absolute" }, d ? { left: 0, width: l.size + "px", transform: `translateX(${l.offset}px)` } : { top: 0, height: l.size + "px", transform: `translateY(${l.offset}px)` }), r.style) })) : null; }), oi = "NavigationMenuContent", Hx = u.forwardRef((e, t) => { const { forceMount: n } = e, r = __rest(e, ["forceMount"]), o = Dt(oi, e.__scopeNavigationMenu), i = Fx(oi, e.__scopeNavigationMenu), s = ce(i.contentRef, t), a = i.value === o.value, l = Object.assign({ value: i.value, triggerRef: i.triggerRef, focusProxyRef: i.focusProxyRef, wasEscapeCloseRef: i.wasEscapeCloseRef, onContentFocusOutside: i.onContentFocusOutside, onRootContentClose: i.onRootContentClose }, r); return o.viewport ? p.jsx(ZN, Object.assign(Object.assign({ forceMount: n }, l), { ref: s })) : p.jsx(Xt, { present: n || a, children: p.jsx(Wx, Object.assign(Object.assign({ "data-state": eh(a) }, l), { ref: s, onPointerEnter: W(e.onPointerEnter, o.onContentEnter), onPointerLeave: W(e.onPointerLeave, Nl(o.onContentLeave)), style: Object.assign({ pointerEvents: !a && o.isRootMenu ? "none" : void 0 }, l.style) })) }); });
Hx.displayName = oi;
var ZN = u.forwardRef((e, t) => { const n = Dt(oi, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n; return ze(() => { r(e.value, Object.assign({ ref: t }, e)); }, [e, t, r]), ze(() => () => o(e.value), [e.value, o]), null; }), Ya = "navigationMenu.rootContentDismiss", Wx = u.forwardRef((e, t) => { const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: i, wasEscapeCloseRef: s, onRootContentClose: a, onContentFocusOutside: l } = e, c = __rest(e, ["__scopeNavigationMenu", "value", "triggerRef", "focusProxyRef", "wasEscapeCloseRef", "onRootContentClose", "onContentFocusOutside"]), d = Dt(oi, n), f = u.useRef(null), h = ce(f, t), x = qx(d.baseId, r), y = Yx(d.baseId, r), v = Ax(n), S = u.useRef(null), { onItemDismiss: m } = d; u.useEffect(() => { const w = f.current; if (d.isRootMenu && w) {
    const C = () => { var E; m(), a(), w.contains(document.activeElement) && ((E = o.current) == null || E.focus()); };
    return w.addEventListener(Ya, C), () => w.removeEventListener(Ya, C);
} }, [d.isRootMenu, e.value, o, m, a]); const g = u.useMemo(() => { const C = v().map(T => T.value); d.dir === "rtl" && C.reverse(); const E = C.indexOf(d.value), R = C.indexOf(d.previousValue), b = r === d.value, P = R === C.indexOf(r); if (!b && !P)
    return S.current; const k = (() => { if (E !== R) {
    if (b && R !== -1)
        return E > R ? "from-end" : "from-start";
    if (P && E !== -1)
        return E > R ? "to-start" : "to-end";
} return null; })(); return S.current = k, k; }, [d.previousValue, d.value, d.dir, v, r]); return p.jsx(Gx, { asChild: !0, children: p.jsx(vi, Object.assign(Object.assign({ id: y, "aria-labelledby": x, "data-motion": g, "data-orientation": d.orientation }, c), { ref: h, disableOutsidePointerEvents: !1, onDismiss: () => { var C; const w = new Event(Ya, { bubbles: !0, cancelable: !0 }); (C = f.current) == null || C.dispatchEvent(w); }, onFocusOutside: W(e.onFocusOutside, w => { var E; l(); const C = w.target; (E = d.rootNavigationMenu) != null && E.contains(C) && w.preventDefault(); }), onPointerDownOutside: W(e.onPointerDownOutside, w => { var b; const C = w.target, E = v().some(P => { var k; return (k = P.ref.current) == null ? void 0 : k.contains(C); }), R = d.isRootMenu && ((b = d.viewport) == null ? void 0 : b.contains(C)); (E || R || !d.isRootMenu) && w.preventDefault(); }), onKeyDown: W(e.onKeyDown, w => { var R; const C = w.altKey || w.ctrlKey || w.metaKey; if (w.key === "Tab" && !C) {
            const b = cf(w.currentTarget), P = document.activeElement, k = b.findIndex(D => D === P), M = w.shiftKey ? b.slice(0, k).reverse() : b.slice(k + 1, b.length);
            Zp(M) ? w.preventDefault() : (R = i.current) == null || R.focus();
        } }), onEscapeKeyDown: W(e.onEscapeKeyDown, w => { s.current = !0; }) })) }); }), Jp = "NavigationMenuViewport", Kx = u.forwardRef((e, t) => { const { forceMount: n } = e, r = __rest(e, ["forceMount"]), i = !!Dt(Jp, e.__scopeNavigationMenu).value; return p.jsx(Xt, { present: n || i, children: p.jsx(ek, Object.assign(Object.assign({}, r), { ref: t })) }); });
Kx.displayName = Jp;
var ek = u.forwardRef((e, t) => { const { __scopeNavigationMenu: n, children: r } = e, o = __rest(e, ["__scopeNavigationMenu", "children"]), i = Dt(Jp, n), s = ce(t, i.onViewportChange), a = QN(oi, e.__scopeNavigationMenu), [l, c] = u.useState(null), [d, f] = u.useState(null), h = l ? (l == null ? void 0 : l.width) + "px" : void 0, x = l ? (l == null ? void 0 : l.height) + "px" : void 0, y = !!i.value, v = y ? i.value : i.previousValue; return uf(d, () => { d && c({ width: d.offsetWidth, height: d.offsetHeight }); }), p.jsx(ne.div, Object.assign(Object.assign({ "data-state": eh(y), "data-orientation": i.orientation }, o), { ref: s, style: Object.assign({ pointerEvents: !y && i.isRootMenu ? "none" : void 0, "--radix-navigation-menu-viewport-width": h, "--radix-navigation-menu-viewport-height": x }, o.style), onPointerEnter: W(e.onPointerEnter, i.onContentEnter), onPointerLeave: W(e.onPointerLeave, Nl(i.onContentLeave)), children: Array.from(a.items).map((_q) => { var [m, _z] = _q, { ref: g, forceMount: w } = _z, C = __rest(_z, ["ref", "forceMount"]); const E = v === m; return p.jsx(Xt, { present: w || E, children: p.jsx(Wx, Object.assign(Object.assign({}, C), { ref: Kp(g, R => { E && R && f(R); }) })) }, m); }) })); }), tk = "FocusGroup", Gx = u.forwardRef((e, t) => { const { __scopeNavigationMenu: n } = e, r = __rest(e, ["__scopeNavigationMenu"]), o = Dt(tk, n); return p.jsx(af.Provider, { scope: n, children: p.jsx(af.Slot, { scope: n, children: p.jsx(ne.div, Object.assign(Object.assign({ dir: o.dir }, r), { ref: t })) }) }); }), Ov = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], nk = "FocusGroupItem", Qx = u.forwardRef((e, t) => { const { __scopeNavigationMenu: n } = e, r = __rest(e, ["__scopeNavigationMenu"]), o = HN(n), i = Dt(nk, n); return p.jsx(af.ItemSlot, { scope: n, children: p.jsx(ne.button, Object.assign(Object.assign({}, r), { ref: t, onKeyDown: W(e.onKeyDown, s => { if (["Home", "End", ...Ov].includes(s.key)) {
            let l = o().map(f => f.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && l.reverse(), Ov.includes(s.key)) {
                const f = l.indexOf(s.currentTarget);
                l = l.slice(f + 1);
            }
            setTimeout(() => Zp(l)), s.preventDefault();
        } }) })) }); });
function cf(e) { const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: r => { const o = r.tagName === "INPUT" && r.type === "hidden"; return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP; } }); for (; n.nextNode();)
    t.push(n.currentNode); return t; }
function Zp(e) { const t = document.activeElement; return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t)); }
function rk(e) { return e.forEach(t => { t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1"); }), () => { e.forEach(t => { const n = t.dataset.tabindex; t.setAttribute("tabindex", n); }); }; }
function uf(e, t) { const n = Ve(t); ze(() => { let r = 0; if (e) {
    const o = new ResizeObserver(() => { cancelAnimationFrame(r), r = window.requestAnimationFrame(n); });
    return o.observe(e), () => { window.cancelAnimationFrame(r), o.unobserve(e); };
} }, [e, n]); }
function eh(e) { return e ? "open" : "closed"; }
function qx(e, t) { return `${e}-trigger-${t}`; }
function Yx(e, t) { return `${e}-content-${t}`; }
function Nl(e) { return t => t.pointerType === "mouse" ? e(t) : void 0; }
var Xx = _x, Jx = Lx, ok = zx, Zx = Bx, ik = Ux, ew = Vx, tw = Hx, nw = Kx;
function rw(e) { var t, n, r = ""; if (typeof e == "string" || typeof e == "number")
    r += e;
else if (typeof e == "object")
    if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
            e[t] && (n = rw(e[t])) && (r && (r += " "), r += n);
    else
        for (t in e)
            e[t] && (r && (r += " "), r += t); return r; }
function sk() { for (var e, t, n = 0, r = ""; n < arguments.length;)
    (e = arguments[n++]) && (t = rw(e)) && (r && (r += " "), r += t); return r; }
const jv = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Av = sk, Xs = (e, t) => n => { var r; if ((t == null ? void 0 : t.variants) == null)
    return Av(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className); const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map(c => { const d = n == null ? void 0 : n[c], f = i == null ? void 0 : i[c]; if (d === null)
    return null; const h = jv(d) || jv(f); return o[c][h]; }), a = n && Object.entries(n).reduce((c, d) => { let [f, h] = d; return h === void 0 || (c[f] = h), c; }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => { let { class: f, className: h } = d, x = __rest(d, ["class", "className"]); return Object.entries(x).every(y => { let [v, S] = y; return Array.isArray(S) ? S.includes(Object.assign(Object.assign({}, i), a)[v]) : Object.assign(Object.assign({}, i), a)[v] === S; }) ? [...c, f, h] : c; }, []); return Av(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className); }; /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ak = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ow = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" "); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var lk = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }; /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ck = u.forwardRef((_q, l) => {
    var { color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: i, iconNode: s } = _q, a = __rest(_q, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"]);
    return u.createElement("svg", Object.assign(Object.assign(Object.assign({ ref: l }, lk), { width: t, height: t, stroke: e, strokeWidth: r ? Number(n) * 24 / Number(t) : n, className: ow("lucide", o) }), a), [...s.map(([c, d]) => u.createElement(c, d)), ...Array.isArray(i) ? i : [i]]);
}); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _e = (e, t) => { const n = u.forwardRef((_q, i) => {
    var { className: r } = _q, o = __rest(_q, ["className"]);
    return u.createElement(ck, Object.assign({ ref: i, iconNode: t, className: ow(`lucide-${ak(e)}`, r) }, o));
}); return n.displayName = `${e}`, n; }; /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const uk = _e("ArrowLeft", [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const dk = _e("ArrowRight", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fk = _e("Bird", [["path", { d: "M16 7h.01", key: "1kdx03" }], ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20", key: "oj1oa8" }], ["path", { d: "m20 7 2 .5-2 .5", key: "12nv4d" }], ["path", { d: "M10 18v3", key: "1yea0a" }], ["path", { d: "M14 17.75V21", key: "1pymcb" }], ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61", key: "1npnn0" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pk = _e("Book", [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hk = _e("Bot", [["path", { d: "M12 8V4H8", key: "hb8ula" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M15 13v2", key: "1xurst" }], ["path", { d: "M9 13v2", key: "rq6x2g" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mk = _e("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const th = _e("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vk = _e("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gk = _e("CodeXml", [["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }], ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }], ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yk = _e("CornerDownLeft", [["polyline", { points: "9 10 4 15 9 20", key: "r3jprv" }], ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xk = _e("LifeBuoy", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }], ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }], ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }], ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }], ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wk = _e("Mic", [["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }], ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sk = _e("Paperclip", [["path", { d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48", key: "1u3ebp" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ck = _e("Rabbit", [["path", { d: "M13 16a3 3 0 0 1 2.24 5", key: "1epib5" }], ["path", { d: "M18 12h.01", key: "yjnet6" }], ["path", { d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3", key: "ue9ozu" }], ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3", key: "49iql8" }], ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3", key: "1e33i0" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const iw = _e("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ek = _e("Settings2", [["path", { d: "M20 7h-9", key: "3s1dr2" }], ["path", { d: "M14 17H5", key: "gfn3mx" }], ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }], ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bk = _e("SquareTerminal", [["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }], ["path", { d: "M11 13h4", key: "1p7l4v" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pk = _e("SquareUser", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }], ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2", key: "1m6ac2" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Rk = _e("Triangle", [["path", { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", key: "14u9p9" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nk = _e("Turtle", [["path", { d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z", key: "1lbbv7" }], ["path", { d: "M4.82 7.9 8 10", key: "m9wose" }], ["path", { d: "M15.18 7.9 12 10", key: "p8dp2u" }], ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2", key: "12nsm7" }]]); /**
* @license lucide-react v0.408.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const sw = _e("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]);
function aw(e) { var t, n, r = ""; if (typeof e == "string" || typeof e == "number")
    r += e;
else if (typeof e == "object")
    if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
            e[t] && (n = aw(e[t])) && (r && (r += " "), r += n);
    }
    else
        for (n in e)
            e[n] && (r && (r += " "), r += n); return r; }
function kk() { for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = aw(e)) && (r && (r += " "), r += t); return r; }
const nh = "-";
function Tk(e) { const t = jk(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e; function o(s) { const a = s.split(nh); return a[0] === "" && a.length !== 1 && a.shift(), lw(a, t) || Ok(s); } function i(s, a) { const l = n[s] || []; return a && r[s] ? [...l, ...r[s]] : l; } return { getClassGroupId: o, getConflictingClassGroupIds: i }; }
function lw(e, t) { var s; if (e.length === 0)
    return t.classGroupId; const n = e[0], r = t.nextPart.get(n), o = r ? lw(e.slice(1), r) : void 0; if (o)
    return o; if (t.validators.length === 0)
    return; const i = e.join(nh); return (s = t.validators.find(({ validator: a }) => a(i))) == null ? void 0 : s.classGroupId; }
const _v = /^\[(.+)\]$/;
function Ok(e) { if (_v.test(e)) {
    const t = _v.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
        return "arbitrary.." + n;
} }
function jk(e) { const { theme: t, prefix: n } = e, r = { nextPart: new Map, validators: [] }; return _k(Object.entries(e.classGroups), n).forEach(([i, s]) => { df(s, r, i, t); }), r; }
function df(e, t, n, r) { e.forEach(o => { if (typeof o == "string") {
    const i = o === "" ? t : Mv(t, o);
    i.classGroupId = n;
    return;
} if (typeof o == "function") {
    if (Ak(o)) {
        df(o(r), t, n, r);
        return;
    }
    t.validators.push({ validator: o, classGroupId: n });
    return;
} Object.entries(o).forEach(([i, s]) => { df(s, Mv(t, i), n, r); }); }); }
function Mv(e, t) { let n = e; return t.split(nh).forEach(r => { n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map, validators: [] }), n = n.nextPart.get(r); }), n; }
function Ak(e) { return e.isThemeGetter; }
function _k(e, t) { return t ? e.map(([n, r]) => { const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i); return [n, o]; }) : e; }
function Mk(e) { if (e < 1)
    return { get: () => { }, set: () => { } }; let t = 0, n = new Map, r = new Map; function o(i, s) { n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map); } return { get(i) { let s = n.get(i); if (s !== void 0)
        return s; if ((s = r.get(i)) !== void 0)
        return o(i, s), s; }, set(i, s) { n.has(i) ? n.set(i, s) : o(i, s); } }; }
const cw = "!";
function Ik(e) { const { separator: t, experimentalParseClassName: n } = e, r = t.length === 1, o = t[0], i = t.length; function s(a) { const l = []; let c = 0, d = 0, f; for (let S = 0; S < a.length; S++) {
    let m = a[S];
    if (c === 0) {
        if (m === o && (r || a.slice(S, S + i) === t)) {
            l.push(a.slice(d, S)), d = S + i;
            continue;
        }
        if (m === "/") {
            f = S;
            continue;
        }
    }
    m === "[" ? c++ : m === "]" && c--;
} const h = l.length === 0 ? a : a.substring(d), x = h.startsWith(cw), y = x ? h.substring(1) : h, v = f && f > d ? f - d : void 0; return { modifiers: l, hasImportantModifier: x, baseClassName: y, maybePostfixModifierPosition: v }; } return n ? function (l) { return n({ className: l, parseClassName: s }); } : s; }
function Dk(e) { if (e.length <= 1)
    return e; const t = []; let n = []; return e.forEach(r => { r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r); }), t.push(...n.sort()), t; }
function Lk(e) { return Object.assign({ cache: Mk(e.cacheSize), parseClassName: Ik(e) }, Tk(e)); }
const $k = /\s+/;
function Fk(e, t) { const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t, i = new Set; return e.trim().split($k).map(s => { const { modifiers: a, hasImportantModifier: l, baseClassName: c, maybePostfixModifierPosition: d } = n(s); let f = !!d, h = r(f ? c.substring(0, d) : c); if (!h) {
    if (!f)
        return { isTailwindClass: !1, originalClassName: s };
    if (h = r(c), !h)
        return { isTailwindClass: !1, originalClassName: s };
    f = !1;
} const x = Dk(a).join(":"); return { isTailwindClass: !0, modifierId: l ? x + cw : x, classGroupId: h, originalClassName: s, hasPostfixModifier: f }; }).reverse().filter(s => { if (!s.isTailwindClass)
    return !0; const { modifierId: a, classGroupId: l, hasPostfixModifier: c } = s, d = a + l; return i.has(d) ? !1 : (i.add(d), o(l, c).forEach(f => i.add(a + f)), !0); }).reverse().map(s => s.originalClassName).join(" "); }
function zk() { let e = 0, t, n, r = ""; for (; e < arguments.length;)
    (t = arguments[e++]) && (n = uw(t)) && (r && (r += " "), r += n); return r; }
function uw(e) { if (typeof e == "string")
    return e; let t, n = ""; for (let r = 0; r < e.length; r++)
    e[r] && (t = uw(e[r])) && (n && (n += " "), n += t); return n; }
function Bk(e, ...t) { let n, r, o, i = s; function s(l) { const c = t.reduce((d, f) => f(d), e()); return n = Lk(c), r = n.cache.get, o = n.cache.set, i = a, a(l); } function a(l) { const c = r(l); if (c)
    return c; const d = Fk(l, n); return o(l, d), d; } return function () { return i(zk.apply(null, arguments)); }; }
function ye(e) { const t = n => n[e] || []; return t.isThemeGetter = !0, t; }
const dw = /^\[(?:([a-z-]+):)?(.+)\]$/i, Uk = /^\d+\/\d+$/, Vk = new Set(["px", "full", "screen"]), Hk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Kk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Gk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function mn(e) { return Or(e) || Vk.has(e) || Uk.test(e); }
function Ln(e) { return yi(e, "length", nT); }
function Or(e) { return !!e && !Number.isNaN(Number(e)); }
function Ta(e) { return yi(e, "number", Or); }
function $i(e) { return !!e && Number.isInteger(Number(e)); }
function qk(e) { return e.endsWith("%") && Or(e.slice(0, -1)); }
function ae(e) { return dw.test(e); }
function $n(e) { return Hk.test(e); }
const Yk = new Set(["length", "size", "percentage"]);
function Xk(e) { return yi(e, Yk, fw); }
function Jk(e) { return yi(e, "position", fw); }
const Zk = new Set(["image", "url"]);
function eT(e) { return yi(e, Zk, oT); }
function tT(e) { return yi(e, "", rT); }
function Fi() { return !0; }
function yi(e, t, n) { const r = dw.exec(e); return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1; }
function nT(e) { return Wk.test(e) && !Kk.test(e); }
function fw() { return !1; }
function rT(e) { return Gk.test(e); }
function oT(e) { return Qk.test(e); }
function iT() { const e = ye("colors"), t = ye("spacing"), n = ye("blur"), r = ye("brightness"), o = ye("borderColor"), i = ye("borderRadius"), s = ye("borderSpacing"), a = ye("borderWidth"), l = ye("contrast"), c = ye("grayscale"), d = ye("hueRotate"), f = ye("invert"), h = ye("gap"), x = ye("gradientColorStops"), y = ye("gradientColorStopPositions"), v = ye("inset"), S = ye("margin"), m = ye("opacity"), g = ye("padding"), w = ye("saturate"), C = ye("scale"), E = ye("sepia"), R = ye("skew"), b = ye("space"), P = ye("translate"), k = () => ["auto", "contain", "none"], T = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", ae, t], D = () => [ae, t], te = () => ["", mn, Ln], G = () => ["auto", Or, ae], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], K = () => ["solid", "dashed", "dotted", "double", "none"], F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], A = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], I = () => ["", "0", ae], Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ee = () => [Or, Ta], j = () => [Or, ae]; return { cacheSize: 500, separator: ":", theme: { colors: [Fi], spacing: [mn, Ln], blur: ["none", "", $n, ae], brightness: ee(), borderColor: [e], borderRadius: ["none", "", "full", $n, ae], borderSpacing: D(), borderWidth: te(), contrast: ee(), grayscale: I(), hueRotate: j(), invert: I(), gap: D(), gradientColorStops: [e], gradientColorStopPositions: [qk, Ln], inset: M(), margin: M(), opacity: ee(), padding: D(), saturate: ee(), scale: ee(), sepia: I(), skew: j(), space: D(), translate: D() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", ae] }], container: ["container"], columns: [{ columns: [$n] }], "break-after": [{ "break-after": Q() }], "break-before": [{ "break-before": Q() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...U(), ae] }], overflow: [{ overflow: T() }], "overflow-x": [{ "overflow-x": T() }], "overflow-y": [{ "overflow-y": T() }], overscroll: [{ overscroll: k() }], "overscroll-x": [{ "overscroll-x": k() }], "overscroll-y": [{ "overscroll-y": k() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [v] }], "inset-x": [{ "inset-x": [v] }], "inset-y": [{ "inset-y": [v] }], start: [{ start: [v] }], end: [{ end: [v] }], top: [{ top: [v] }], right: [{ right: [v] }], bottom: [{ bottom: [v] }], left: [{ left: [v] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", $i, ae] }], basis: [{ basis: M() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", ae] }], grow: [{ grow: I() }], shrink: [{ shrink: I() }], order: [{ order: ["first", "last", "none", $i, ae] }], "grid-cols": [{ "grid-cols": [Fi] }], "col-start-end": [{ col: ["auto", { span: ["full", $i, ae] }, ae] }], "col-start": [{ "col-start": G() }], "col-end": [{ "col-end": G() }], "grid-rows": [{ "grid-rows": [Fi] }], "row-start-end": [{ row: ["auto", { span: [$i, ae] }, ae] }], "row-start": [{ "row-start": G() }], "row-end": [{ "row-end": G() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ae] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ae] }], gap: [{ gap: [h] }], "gap-x": [{ "gap-x": [h] }], "gap-y": [{ "gap-y": [h] }], "justify-content": [{ justify: ["normal", ...A()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...A(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...A(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [g] }], px: [{ px: [g] }], py: [{ py: [g] }], ps: [{ ps: [g] }], pe: [{ pe: [g] }], pt: [{ pt: [g] }], pr: [{ pr: [g] }], pb: [{ pb: [g] }], pl: [{ pl: [g] }], m: [{ m: [S] }], mx: [{ mx: [S] }], my: [{ my: [S] }], ms: [{ ms: [S] }], me: [{ me: [S] }], mt: [{ mt: [S] }], mr: [{ mr: [S] }], mb: [{ mb: [S] }], ml: [{ ml: [S] }], "space-x": [{ "space-x": [b] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [b] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ae, t] }], "min-w": [{ "min-w": [ae, t, "min", "max", "fit"] }], "max-w": [{ "max-w": [ae, t, "none", "full", "min", "max", "fit", "prose", { screen: [$n] }, $n] }], h: [{ h: [ae, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [ae, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [ae, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [ae, t, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", $n, Ln] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ta] }], "font-family": [{ font: [Fi] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ae] }], "line-clamp": [{ "line-clamp": ["none", Or, Ta] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", mn, ae] }], "list-image": [{ "list-image": ["none", ae] }], "list-style-type": [{ list: ["none", "disc", "decimal", ae] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e] }], "placeholder-opacity": [{ "placeholder-opacity": [m] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e] }], "text-opacity": [{ "text-opacity": [m] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...K(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", mn, Ln] }], "underline-offset": [{ "underline-offset": ["auto", mn, ae] }], "text-decoration-color": [{ decoration: [e] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: D() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ae] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", ae] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [m] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...U(), Jk] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", Xk] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, eT] }], "bg-color": [{ bg: [e] }], "gradient-from-pos": [{ from: [y] }], "gradient-via-pos": [{ via: [y] }], "gradient-to-pos": [{ to: [y] }], "gradient-from": [{ from: [x] }], "gradient-via": [{ via: [x] }], "gradient-to": [{ to: [x] }], rounded: [{ rounded: [i] }], "rounded-s": [{ "rounded-s": [i] }], "rounded-e": [{ "rounded-e": [i] }], "rounded-t": [{ "rounded-t": [i] }], "rounded-r": [{ "rounded-r": [i] }], "rounded-b": [{ "rounded-b": [i] }], "rounded-l": [{ "rounded-l": [i] }], "rounded-ss": [{ "rounded-ss": [i] }], "rounded-se": [{ "rounded-se": [i] }], "rounded-ee": [{ "rounded-ee": [i] }], "rounded-es": [{ "rounded-es": [i] }], "rounded-tl": [{ "rounded-tl": [i] }], "rounded-tr": [{ "rounded-tr": [i] }], "rounded-br": [{ "rounded-br": [i] }], "rounded-bl": [{ "rounded-bl": [i] }], "border-w": [{ border: [a] }], "border-w-x": [{ "border-x": [a] }], "border-w-y": [{ "border-y": [a] }], "border-w-s": [{ "border-s": [a] }], "border-w-e": [{ "border-e": [a] }], "border-w-t": [{ "border-t": [a] }], "border-w-r": [{ "border-r": [a] }], "border-w-b": [{ "border-b": [a] }], "border-w-l": [{ "border-l": [a] }], "border-opacity": [{ "border-opacity": [m] }], "border-style": [{ border: [...K(), "hidden"] }], "divide-x": [{ "divide-x": [a] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [a] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [m] }], "divide-style": [{ divide: K() }], "border-color": [{ border: [o] }], "border-color-x": [{ "border-x": [o] }], "border-color-y": [{ "border-y": [o] }], "border-color-t": [{ "border-t": [o] }], "border-color-r": [{ "border-r": [o] }], "border-color-b": [{ "border-b": [o] }], "border-color-l": [{ "border-l": [o] }], "divide-color": [{ divide: [o] }], "outline-style": [{ outline: ["", ...K()] }], "outline-offset": [{ "outline-offset": [mn, ae] }], "outline-w": [{ outline: [mn, Ln] }], "outline-color": [{ outline: [e] }], "ring-w": [{ ring: te() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e] }], "ring-opacity": [{ "ring-opacity": [m] }], "ring-offset-w": [{ "ring-offset": [mn, Ln] }], "ring-offset-color": [{ "ring-offset": [e] }], shadow: [{ shadow: ["", "inner", "none", $n, tT] }], "shadow-color": [{ shadow: [Fi] }], opacity: [{ opacity: [m] }], "mix-blend": [{ "mix-blend": [...F(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": F() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [n] }], brightness: [{ brightness: [r] }], contrast: [{ contrast: [l] }], "drop-shadow": [{ "drop-shadow": ["", "none", $n, ae] }], grayscale: [{ grayscale: [c] }], "hue-rotate": [{ "hue-rotate": [d] }], invert: [{ invert: [f] }], saturate: [{ saturate: [w] }], sepia: [{ sepia: [E] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [n] }], "backdrop-brightness": [{ "backdrop-brightness": [r] }], "backdrop-contrast": [{ "backdrop-contrast": [l] }], "backdrop-grayscale": [{ "backdrop-grayscale": [c] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }], "backdrop-invert": [{ "backdrop-invert": [f] }], "backdrop-opacity": [{ "backdrop-opacity": [m] }], "backdrop-saturate": [{ "backdrop-saturate": [w] }], "backdrop-sepia": [{ "backdrop-sepia": [E] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [s] }], "border-spacing-x": [{ "border-spacing-x": [s] }], "border-spacing-y": [{ "border-spacing-y": [s] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ae] }], duration: [{ duration: j() }], ease: [{ ease: ["linear", "in", "out", "in-out", ae] }], delay: [{ delay: j() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ae] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [C] }], "scale-x": [{ "scale-x": [C] }], "scale-y": [{ "scale-y": [C] }], rotate: [{ rotate: [$i, ae] }], "translate-x": [{ "translate-x": [P] }], "translate-y": [{ "translate-y": [P] }], "skew-x": [{ "skew-x": [R] }], "skew-y": [{ "skew-y": [R] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ae] }], accent: [{ accent: ["auto", e] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ae] }], "caret-color": [{ caret: [e] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": D() }], "scroll-mx": [{ "scroll-mx": D() }], "scroll-my": [{ "scroll-my": D() }], "scroll-ms": [{ "scroll-ms": D() }], "scroll-me": [{ "scroll-me": D() }], "scroll-mt": [{ "scroll-mt": D() }], "scroll-mr": [{ "scroll-mr": D() }], "scroll-mb": [{ "scroll-mb": D() }], "scroll-ml": [{ "scroll-ml": D() }], "scroll-p": [{ "scroll-p": D() }], "scroll-px": [{ "scroll-px": D() }], "scroll-py": [{ "scroll-py": D() }], "scroll-ps": [{ "scroll-ps": D() }], "scroll-pe": [{ "scroll-pe": D() }], "scroll-pt": [{ "scroll-pt": D() }], "scroll-pr": [{ "scroll-pr": D() }], "scroll-pb": [{ "scroll-pb": D() }], "scroll-pl": [{ "scroll-pl": D() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", ae] }], fill: [{ fill: [e, "none"] }], "stroke-w": [{ stroke: [mn, Ln, Ta] }], stroke: [{ stroke: [e, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } }; }
const sT = Bk(iT);
function J(...e) { return sT(kk(e)); }
const pw = u.forwardRef((_q, r) => {
    var { className: e, children: t } = _q, n = __rest(_q, ["className", "children"]);
    return p.jsxs(Xx, Object.assign(Object.assign({ ref: r, className: J("relative z-10 flex max-w-max flex-1 items-center justify-center", e) }, n), { children: [t, p.jsx(mw, {})] }));
});
pw.displayName = Xx.displayName;
const hw = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(Jx, Object.assign({ ref: n, className: J("group flex flex-1 list-none items-center justify-center space-x-1", e) }, t));
});
hw.displayName = Jx.displayName;
const ff = ok, kl = Xs("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"), aT = u.forwardRef((_q, r) => {
    var { className: e, children: t } = _q, n = __rest(_q, ["className", "children"]);
    return p.jsxs(Zx, Object.assign(Object.assign({ ref: r, className: J(kl(), "group", e) }, n), { children: [t, " ", p.jsx(th, { className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180", "aria-hidden": "true" })] }));
});
aT.displayName = Zx.displayName;
const lT = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(tw, Object.assign({ ref: n, className: J("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", e) }, t));
});
lT.displayName = tw.displayName;
const pf = ik, mw = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx("div", { className: J("absolute left-0 top-full flex justify-center"), children: p.jsx(nw, Object.assign({ className: J("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", e), ref: n }, t)) });
});
mw.displayName = nw.displayName;
const cT = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(ew, Object.assign(Object.assign({ ref: n, className: J("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", e) }, t), { children: p.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }) }));
});
cT.displayName = ew.displayName;
function vw(e, t) { return function () { return e.apply(t, arguments); }; }
const { toString: uT } = Object.prototype, { getPrototypeOf: rh } = Object, oc = (e => t => { const n = uT.call(t); return e[n] || (e[n] = n.slice(8, -1).toLowerCase()); })(Object.create(null)), Jt = e => (e = e.toLowerCase(), t => oc(t) === e), ic = e => t => typeof t === e, { isArray: xi } = Array, Os = ic("undefined");
function dT(e) { return e !== null && !Os(e) && e.constructor !== null && !Os(e.constructor) && At(e.constructor.isBuffer) && e.constructor.isBuffer(e); }
const gw = Jt("ArrayBuffer");
function fT(e) { let t; return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && gw(e.buffer), t; }
const pT = ic("string"), At = ic("function"), yw = ic("number"), sc = e => e !== null && typeof e == "object", hT = e => e === !0 || e === !1, Xa = e => { if (oc(e) !== "object")
    return !1; const t = rh(e); return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e); }, mT = Jt("Date"), vT = Jt("File"), gT = Jt("Blob"), yT = Jt("FileList"), xT = e => sc(e) && At(e.pipe), wT = e => { let t; return e && (typeof FormData == "function" && e instanceof FormData || At(e.append) && ((t = oc(e)) === "formdata" || t === "object" && At(e.toString) && e.toString() === "[object FormData]")); }, ST = Jt("URLSearchParams"), [CT, ET, bT, PT] = ["ReadableStream", "Request", "Response", "Headers"].map(Jt), RT = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Js(e, t, { allOwnKeys: n = !1 } = {}) { if (e === null || typeof e > "u")
    return; let r, o; if (typeof e != "object" && (e = [e]), xi(e))
    for (r = 0, o = e.length; r < o; r++)
        t.call(null, e[r], r, e);
else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
        a = i[r], t.call(null, e[a], a, e);
} }
function xw(e, t) { t = t.toLowerCase(); const n = Object.keys(e); let r = n.length, o; for (; r-- > 0;)
    if (o = n[r], t === o.toLowerCase())
        return o; return null; }
const ww = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Sw = e => !Os(e) && e !== ww;
function hf() { const { caseless: e } = Sw(this) && this || {}, t = {}, n = (r, o) => { const i = e && xw(t, o) || o; Xa(t[i]) && Xa(r) ? t[i] = hf(t[i], r) : Xa(r) ? t[i] = hf({}, r) : xi(r) ? t[i] = r.slice() : t[i] = r; }; for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Js(arguments[r], n); return t; }
const NT = (e, t, n, { allOwnKeys: r } = {}) => (Js(t, (o, i) => { n && At(o) ? e[i] = vw(o, n) : e[i] = o; }, { allOwnKeys: r }), e), kT = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), TT = (e, t, n, r) => { e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: t.prototype }), n && Object.assign(e.prototype, n); }, OT = (e, t, n, r) => { let o, i, s; const a = {}; if (t = t || {}, e == null)
    return t; do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0;)
        s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && rh(e);
} while (e && (!n || n(e, t)) && e !== Object.prototype); return t; }, jT = (e, t, n) => { e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length; const r = e.indexOf(t, n); return r !== -1 && r === n; }, AT = e => { if (!e)
    return null; if (xi(e))
    return e; let t = e.length; if (!yw(t))
    return null; const n = new Array(t); for (; t-- > 0;)
    n[t] = e[t]; return n; }, _T = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && rh(Uint8Array)), MT = (e, t) => { const r = (e && e[Symbol.iterator]).call(e); let o; for (; (o = r.next()) && !o.done;) {
    const i = o.value;
    t.call(e, i[0], i[1]);
} }, IT = (e, t) => { let n; const r = []; for (; (n = e.exec(t)) !== null;)
    r.push(n); return r; }, DT = Jt("HTMLFormElement"), LT = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) { return r.toUpperCase() + o; }), Iv = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), $T = Jt("RegExp"), Cw = (e, t) => { const n = Object.getOwnPropertyDescriptors(e), r = {}; Js(n, (o, i) => { let s; (s = t(o, i, e)) !== !1 && (r[i] = s || o); }), Object.defineProperties(e, r); }, FT = e => { Cw(e, (t, n) => { if (At(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
    return !1; const r = e[n]; if (At(r)) {
    if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
    }
    t.set || (t.set = () => { throw Error("Can not rewrite read-only method '" + n + "'"); });
} }); }, zT = (e, t) => { const n = {}, r = o => { o.forEach(i => { n[i] = !0; }); }; return xi(e) ? r(e) : r(String(e).split(t)), n; }, BT = () => { }, UT = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Pu = "abcdefghijklmnopqrstuvwxyz", Dv = "0123456789", Ew = { DIGIT: Dv, ALPHA: Pu, ALPHA_DIGIT: Pu + Pu.toUpperCase() + Dv }, VT = (e = 16, t = Ew.ALPHA_DIGIT) => { let n = ""; const { length: r } = t; for (; e--;)
    n += t[Math.random() * r | 0]; return n; };
function HT(e) { return !!(e && At(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]); }
const WT = e => { const t = new Array(10), n = (r, o) => { if (sc(r)) {
    if (t.indexOf(r) >= 0)
        return;
    if (!("toJSON" in r)) {
        t[o] = r;
        const i = xi(r) ? [] : {};
        return Js(r, (s, a) => { const l = n(s, o + 1); !Os(l) && (i[a] = l); }), t[o] = void 0, i;
    }
} return r; }; return n(e, 0); }, KT = Jt("AsyncFunction"), GT = e => e && (sc(e) || At(e)) && At(e.then) && At(e.catch), O = { isArray: xi, isArrayBuffer: gw, isBuffer: dT, isFormData: wT, isArrayBufferView: fT, isString: pT, isNumber: yw, isBoolean: hT, isObject: sc, isPlainObject: Xa, isReadableStream: CT, isRequest: ET, isResponse: bT, isHeaders: PT, isUndefined: Os, isDate: mT, isFile: vT, isBlob: gT, isRegExp: $T, isFunction: At, isStream: xT, isURLSearchParams: ST, isTypedArray: _T, isFileList: yT, forEach: Js, merge: hf, extend: NT, trim: RT, stripBOM: kT, inherits: TT, toFlatObject: OT, kindOf: oc, kindOfTest: Jt, endsWith: jT, toArray: AT, forEachEntry: MT, matchAll: IT, isHTMLForm: DT, hasOwnProperty: Iv, hasOwnProp: Iv, reduceDescriptors: Cw, freezeMethods: FT, toObjectSet: zT, toCamelCase: LT, noop: BT, toFiniteNumber: UT, findKey: xw, global: ww, isContextDefined: Sw, ALPHABET: Ew, generateString: VT, isSpecCompliantForm: HT, toJSONObject: WT, isAsyncFn: KT, isThenable: GT };
function se(e, t, n, r, o) { Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o); }
O.inherits(se, Error, { toJSON: function () { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: O.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null }; } });
const bw = se.prototype, Pw = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => { Pw[e] = { value: e }; });
Object.defineProperties(se, Pw);
Object.defineProperty(bw, "isAxiosError", { value: !0 });
se.from = (e, t, n, r, o, i) => { const s = Object.create(bw); return O.toFlatObject(e, s, function (l) { return l !== Error.prototype; }, a => a !== "isAxiosError"), se.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s; };
const QT = null;
function mf(e) { return O.isPlainObject(e) || O.isArray(e); }
function Rw(e) { return O.endsWith(e, "[]") ? e.slice(0, -2) : e; }
function Lv(e, t, n) { return e ? e.concat(t).map(function (o, i) { return o = Rw(o), !n && i ? "[" + o + "]" : o; }).join(n ? "." : "") : t; }
function qT(e) { return O.isArray(e) && !e.some(mf); }
const YT = O.toFlatObject(O, {}, null, function (t) { return /^is[A-Z]/.test(t); });
function ac(e, t, n) { if (!O.isObject(e))
    throw new TypeError("target must be an object"); t = t || new FormData, n = O.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (v, S) { return !O.isUndefined(S[v]); }); const r = n.metaTokens, o = n.visitor || d, i = n.dots, s = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(t); if (!O.isFunction(o))
    throw new TypeError("visitor must be a function"); function c(y) { if (y === null)
    return ""; if (O.isDate(y))
    return y.toISOString(); if (!l && O.isBlob(y))
    throw new se("Blob is not supported. Use a Buffer instead."); return O.isArrayBuffer(y) || O.isTypedArray(y) ? l && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y; } function d(y, v, S) { let m = y; if (y && !S && typeof y == "object") {
    if (O.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), y = JSON.stringify(y);
    else if (O.isArray(y) && qT(y) || (O.isFileList(y) || O.endsWith(v, "[]")) && (m = O.toArray(y)))
        return v = Rw(v), m.forEach(function (w, C) { !(O.isUndefined(w) || w === null) && t.append(s === !0 ? Lv([v], C, i) : s === null ? v : v + "[]", c(w)); }), !1;
} return mf(y) ? !0 : (t.append(Lv(S, v, i), c(y)), !1); } const f = [], h = Object.assign(YT, { defaultVisitor: d, convertValue: c, isVisitable: mf }); function x(y, v) { if (!O.isUndefined(y)) {
    if (f.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
    f.push(y), O.forEach(y, function (m, g) { (!(O.isUndefined(m) || m === null) && o.call(t, m, O.isString(g) ? g.trim() : g, v, h)) === !0 && x(m, v ? v.concat(g) : [g]); }), f.pop();
} } if (!O.isObject(e))
    throw new TypeError("data must be an object"); return x(e), t; }
function $v(e) { const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" }; return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) { return t[r]; }); }
function oh(e, t) { this._pairs = [], e && ac(e, this, t); }
const Nw = oh.prototype;
Nw.append = function (t, n) { this._pairs.push([t, n]); };
Nw.toString = function (t) { const n = t ? function (r) { return t.call(this, r, $v); } : $v; return this._pairs.map(function (o) { return n(o[0]) + "=" + n(o[1]); }, "").join("&"); };
function XT(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]"); }
function kw(e, t, n) { if (!t)
    return e; const r = n && n.encode || XT, o = n && n.serialize; let i; if (o ? i = o(t, n) : i = O.isURLSearchParams(t) ? t.toString() : new oh(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
} return e; }
class Fv {
    constructor() { this.handlers = []; }
    use(t, n, r) { return this.handlers.push({ fulfilled: t, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }), this.handlers.length - 1; }
    eject(t) { this.handlers[t] && (this.handlers[t] = null); }
    clear() { this.handlers && (this.handlers = []); }
    forEach(t) { O.forEach(this.handlers, function (r) { r !== null && t(r); }); }
}
const Tw = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, JT = typeof URLSearchParams < "u" ? URLSearchParams : oh, ZT = typeof FormData < "u" ? FormData : null, eO = typeof Blob < "u" ? Blob : null, tO = { isBrowser: !0, classes: { URLSearchParams: JT, FormData: ZT, Blob: eO }, protocols: ["http", "https", "file", "blob", "url", "data"] }, ih = typeof window < "u" && typeof document < "u", nO = (e => ih && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), rO = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", oO = ih && window.location.href || "http://localhost", iO = Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: ih, hasStandardBrowserEnv: nO, hasStandardBrowserWebWorkerEnv: rO, origin: oO }, Symbol.toStringTag, { value: "Module" })), Gt = Object.assign(Object.assign({}, iO), tO);
function sO(e, t) { return ac(e, new Gt.classes.URLSearchParams, Object.assign({ visitor: function (n, r, o, i) { return Gt.isNode && O.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments); } }, t)); }
function aO(e) { return O.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0]); }
function lO(e) { const t = {}, n = Object.keys(e); let r; const o = n.length; let i; for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i]; return t; }
function Ow(e) { function t(n, r, o, i) { let s = n[i++]; if (s === "__proto__")
    return !0; const a = Number.isFinite(+s), l = i >= n.length; return s = !s && O.isArray(o) ? o.length : s, l ? (O.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !O.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && O.isArray(o[s]) && (o[s] = lO(o[s])), !a); } if (O.isFormData(e) && O.isFunction(e.entries)) {
    const n = {};
    return O.forEachEntry(e, (r, o) => { t(aO(r), o, n, 0); }), n;
} return null; }
function cO(e, t, n) { if (O.isString(e))
    try {
        return (t || JSON.parse)(e), O.trim(e);
    }
    catch (r) {
        if (r.name !== "SyntaxError")
            throw r;
    } return (n || JSON.stringify)(e); }
const Zs = { transitional: Tw, adapter: ["xhr", "http", "fetch"], transformRequest: [function (t, n) { const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = O.isObject(t); if (i && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t))
            return o ? JSON.stringify(Ow(t)) : t; if (O.isArrayBuffer(t) || O.isBuffer(t) || O.isStream(t) || O.isFile(t) || O.isBlob(t) || O.isReadableStream(t))
            return t; if (O.isArrayBufferView(t))
            return t.buffer; if (O.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString(); let a; if (i) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return sO(t, this.formSerializer).toString();
            if ((a = O.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return ac(a ? { "files[]": t } : t, l && new l, this.formSerializer);
            }
        } return i || o ? (n.setContentType("application/json", !1), cO(t)) : t; }], transformResponse: [function (t) { const n = this.transitional || Zs.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json"; if (O.isResponse(t) || O.isReadableStream(t))
            return t; if (t && O.isString(t) && (r && !this.responseType || o)) {
            const s = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t);
            }
            catch (a) {
                if (s)
                    throw a.name === "SyntaxError" ? se.from(a, se.ERR_BAD_RESPONSE, this, null, this.response) : a;
            }
        } return t; }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: Gt.classes.FormData, Blob: Gt.classes.Blob }, validateStatus: function (t) { return t >= 200 && t < 300; }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
O.forEach(["delete", "get", "head", "post", "put", "patch"], e => { Zs.headers[e] = {}; });
const uO = O.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), dO = e => {
    const t = {};
    let n, r, o;
    return e && e.split(`
`).forEach(function (s) { o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && uO[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r); }), t;
}, zv = Symbol("internals");
function zi(e) { return e && String(e).trim().toLowerCase(); }
function Ja(e) { return e === !1 || e == null ? e : O.isArray(e) ? e.map(Ja) : String(e); }
function fO(e) { const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; let r; for (; r = n.exec(e);)
    t[r[1]] = r[2]; return t; }
const pO = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ru(e, t, n, r, o) { if (O.isFunction(r))
    return r.call(this, t, n); if (o && (t = n), !!O.isString(t)) {
    if (O.isString(r))
        return t.indexOf(r) !== -1;
    if (O.isRegExp(r))
        return r.test(t);
} }
function hO(e) { return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r); }
function mO(e, t) { const n = O.toCamelCase(" " + t); ["get", "set", "has"].forEach(r => { Object.defineProperty(e, r + n, { value: function (o, i, s) { return this[r].call(this, t, o, i, s); }, configurable: !0 }); }); }
class ht {
    constructor(t) { t && this.set(t); }
    set(t, n, r) { const o = this; function i(a, l, c) { const d = zi(l); if (!d)
        throw new Error("header name must be a non-empty string"); const f = O.findKey(o, d); (!f || o[f] === void 0 || c === !0 || c === void 0 && o[f] !== !1) && (o[f || l] = Ja(a)); } const s = (a, l) => O.forEach(a, (c, d) => i(c, d, l)); if (O.isPlainObject(t) || t instanceof this.constructor)
        s(t, n);
    else if (O.isString(t) && (t = t.trim()) && !pO(t))
        s(dO(t), n);
    else if (O.isHeaders(t))
        for (const [a, l] of t.entries())
            i(l, a, r);
    else
        t != null && i(n, t, r); return this; }
    get(t, n) { if (t = zi(t), t) {
        const r = O.findKey(this, t);
        if (r) {
            const o = this[r];
            if (!n)
                return o;
            if (n === !0)
                return fO(o);
            if (O.isFunction(n))
                return n.call(this, o, r);
            if (O.isRegExp(n))
                return n.exec(o);
            throw new TypeError("parser must be boolean|regexp|function");
        }
    } }
    has(t, n) { if (t = zi(t), t) {
        const r = O.findKey(this, t);
        return !!(r && this[r] !== void 0 && (!n || Ru(this, this[r], r, n)));
    } return !1; }
    delete(t, n) { const r = this; let o = !1; function i(s) { if (s = zi(s), s) {
        const a = O.findKey(r, s);
        a && (!n || Ru(r, r[a], a, n)) && (delete r[a], o = !0);
    } } return O.isArray(t) ? t.forEach(i) : i(t), o; }
    clear(t) { const n = Object.keys(this); let r = n.length, o = !1; for (; r--;) {
        const i = n[r];
        (!t || Ru(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    } return o; }
    normalize(t) { const n = this, r = {}; return O.forEach(this, (o, i) => { const s = O.findKey(r, i); if (s) {
        n[s] = Ja(o), delete n[i];
        return;
    } const a = t ? hO(i) : String(i).trim(); a !== i && delete n[i], n[a] = Ja(o), r[a] = !0; }), this; }
    concat(...t) { return this.constructor.concat(this, ...t); }
    toJSON(t) { const n = Object.create(null); return O.forEach(this, (r, o) => { r != null && r !== !1 && (n[o] = t && O.isArray(r) ? r.join(", ") : r); }), n; }
    [Symbol.iterator]() { return Object.entries(this.toJSON())[Symbol.iterator](); }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
    }
    get [Symbol.toStringTag]() { return "AxiosHeaders"; }
    static from(t) { return t instanceof this ? t : new this(t); }
    static concat(t, ...n) { const r = new this(t); return n.forEach(o => r.set(o)), r; }
    static accessor(t) { const r = (this[zv] = this[zv] = { accessors: {} }).accessors, o = this.prototype; function i(s) { const a = zi(s); r[a] || (mO(o, s), r[a] = !0); } return O.isArray(t) ? t.forEach(i) : i(t), this; }
}
ht.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(ht.prototype, ({ value: e }, t) => { let n = t[0].toUpperCase() + t.slice(1); return { get: () => e, set(r) { this[n] = r; } }; });
O.freezeMethods(ht);
function Nu(e, t) { const n = this || Zs, r = t || n, o = ht.from(r.headers); let i = r.data; return O.forEach(e, function (a) { i = a.call(n, i, o.normalize(), t ? t.status : void 0); }), o.normalize(), i; }
function jw(e) { return !!(e && e.__CANCEL__); }
function wi(e, t, n) { se.call(this, e !== null && e !== void 0 ? e : "canceled", se.ERR_CANCELED, t, n), this.name = "CanceledError"; }
O.inherits(wi, se, { __CANCEL__: !0 });
function Aw(e, t, n) { const r = n.config.validateStatus; !n.status || !r || r(n.status) ? e(n) : t(new se("Request failed with status code " + n.status, [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)); }
function vO(e) { const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e); return t && t[1] || ""; }
function gO(e, t) { e = e || 10; const n = new Array(e), r = new Array(e); let o = 0, i = 0, s; return t = t !== void 0 ? t : 1e3, function (l) { const c = Date.now(), d = r[i]; s || (s = c), n[o] = l, r[o] = c; let f = i, h = 0; for (; f !== o;)
    h += n[f++], f = f % e; if (o = (o + 1) % e, o === i && (i = (i + 1) % e), c - s < t)
    return; const x = d && c - d; return x ? Math.round(h * 1e3 / x) : void 0; }; }
function yO(e, t) { let n = 0; const r = 1e3 / t; let o = null; return function () { const s = this === !0, a = Date.now(); if (s || a - n > r)
    return o && (clearTimeout(o), o = null), n = a, e.apply(null, arguments); o || (o = setTimeout(() => (o = null, n = Date.now(), e.apply(null, arguments)), r - (a - n))); }; }
const Tl = (e, t, n = 3) => { let r = 0; const o = gO(50, 250); return yO(i => { const s = i.loaded, a = i.lengthComputable ? i.total : void 0, l = s - r, c = o(l), d = s <= a; r = s; const f = { loaded: s, total: a, progress: a ? s / a : void 0, bytes: l, rate: c || void 0, estimated: c && a && d ? (a - s) / c : void 0, event: i, lengthComputable: a != null }; f[t ? "download" : "upload"] = !0, e(f); }, n); }, xO = Gt.hasStandardBrowserEnv ? function () { const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"); let r; function o(i) { let s = i; return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname }; } return r = o(window.location.href), function (s) { const a = O.isString(s) ? o(s) : s; return a.protocol === r.protocol && a.host === r.host; }; }() : function () { return function () { return !0; }; }(), wO = Gt.hasStandardBrowserEnv ? { write(e, t, n, r, o, i) { const s = [e + "=" + encodeURIComponent(t)]; O.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), O.isString(r) && s.push("path=" + r), O.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; "); }, read(e) { const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null; }, remove(e) { this.write(e, "", Date.now() - 864e5); } } : { write() { }, read() { return null; }, remove() { } };
function SO(e) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e); }
function CO(e, t) { return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e; }
function _w(e, t) { return e && !SO(t) ? CO(e, t) : t; }
const Bv = e => e instanceof ht ? Object.assign({}, e) : e;
function Gr(e, t) { t = t || {}; const n = {}; function r(c, d, f) { return O.isPlainObject(c) && O.isPlainObject(d) ? O.merge.call({ caseless: f }, c, d) : O.isPlainObject(d) ? O.merge({}, d) : O.isArray(d) ? d.slice() : d; } function o(c, d, f) { if (O.isUndefined(d)) {
    if (!O.isUndefined(c))
        return r(void 0, c, f);
}
else
    return r(c, d, f); } function i(c, d) { if (!O.isUndefined(d))
    return r(void 0, d); } function s(c, d) { if (O.isUndefined(d)) {
    if (!O.isUndefined(c))
        return r(void 0, c);
}
else
    return r(void 0, d); } function a(c, d, f) { if (f in t)
    return r(c, d); if (f in e)
    return r(void 0, c); } const l = { url: i, method: i, data: i, baseURL: s, transformRequest: s, transformResponse: s, paramsSerializer: s, timeout: s, timeoutMessage: s, withCredentials: s, withXSRFToken: s, adapter: s, responseType: s, xsrfCookieName: s, xsrfHeaderName: s, onUploadProgress: s, onDownloadProgress: s, decompress: s, maxContentLength: s, maxBodyLength: s, beforeRedirect: s, transport: s, httpAgent: s, httpsAgent: s, cancelToken: s, socketPath: s, responseEncoding: s, validateStatus: a, headers: (c, d) => o(Bv(c), Bv(d), !0) }; return O.forEach(Object.keys(Object.assign({}, e, t)), function (d) { const f = l[d] || o, h = f(e[d], t[d], d); O.isUndefined(h) && f !== a || (n[d] = h); }), n; }
const Mw = e => { const t = Gr({}, e); let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t; t.headers = s = ht.from(s), t.url = kw(_w(t.baseURL, t.url), e.params, e.paramsSerializer), a && s.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))); let l; if (O.isFormData(n)) {
    if (Gt.hasStandardBrowserEnv || Gt.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
    else if ((l = s.getContentType()) !== !1) {
        const [c, ...d] = l ? l.split(";").map(f => f.trim()).filter(Boolean) : [];
        s.setContentType([c || "multipart/form-data", ...d].join("; "));
    }
} if (Gt.hasStandardBrowserEnv && (r && O.isFunction(r) && (r = r(t)), r || r !== !1 && xO(t.url))) {
    const c = o && i && wO.read(i);
    c && s.set(o, c);
} return t; }, EO = typeof XMLHttpRequest < "u", bO = EO && function (e) { return new Promise(function (n, r) { const o = Mw(e); let i = o.data; const s = ht.from(o.headers).normalize(); let { responseType: a } = o, l; function c() { o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l); } let d = new XMLHttpRequest; d.open(o.method.toUpperCase(), o.url, !0), d.timeout = o.timeout; function f() { if (!d)
    return; const x = ht.from("getAllResponseHeaders" in d && d.getAllResponseHeaders()), v = { data: !a || a === "text" || a === "json" ? d.responseText : d.response, status: d.status, statusText: d.statusText, headers: x, config: e, request: d }; Aw(function (m) { n(m), c(); }, function (m) { r(m), c(); }, v), d = null; } "onloadend" in d ? d.onloadend = f : d.onreadystatechange = function () { !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(f); }, d.onabort = function () { d && (r(new se("Request aborted", se.ECONNABORTED, o, d)), d = null); }, d.onerror = function () { r(new se("Network Error", se.ERR_NETWORK, o, d)), d = null; }, d.ontimeout = function () { let y = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded"; const v = o.transitional || Tw; o.timeoutErrorMessage && (y = o.timeoutErrorMessage), r(new se(y, v.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED, o, d)), d = null; }, i === void 0 && s.setContentType(null), "setRequestHeader" in d && O.forEach(s.toJSON(), function (y, v) { d.setRequestHeader(v, y); }), O.isUndefined(o.withCredentials) || (d.withCredentials = !!o.withCredentials), a && a !== "json" && (d.responseType = o.responseType), typeof o.onDownloadProgress == "function" && d.addEventListener("progress", Tl(o.onDownloadProgress, !0)), typeof o.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Tl(o.onUploadProgress)), (o.cancelToken || o.signal) && (l = x => { d && (r(!x || x.type ? new wi(null, e, d) : x), d.abort(), d = null); }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l))); const h = vO(o.url); if (h && Gt.protocols.indexOf(h) === -1) {
    r(new se("Unsupported protocol " + h + ":", se.ERR_BAD_REQUEST, e));
    return;
} d.send(i || null); }); }, PO = (e, t) => { let n = new AbortController, r; const o = function (l) { if (!r) {
    r = !0, s();
    const c = l instanceof Error ? l : this.reason;
    n.abort(c instanceof se ? c : new wi(c instanceof Error ? c.message : c));
} }; let i = t && setTimeout(() => { o(new se(`timeout ${t} of ms exceeded`, se.ETIMEDOUT)); }, t); const s = () => { e && (i && clearTimeout(i), i = null, e.forEach(l => { l && (l.removeEventListener ? l.removeEventListener("abort", o) : l.unsubscribe(o)); }), e = null); }; e.forEach(l => l && l.addEventListener && l.addEventListener("abort", o)); const { signal: a } = n; return a.unsubscribe = s, [a, () => { i && clearTimeout(i), i = null; }]; }, RO = function* (e, t) { let n = e.byteLength; if (!t || n < t) {
    yield e;
    return;
} let r = 0, o; for (; r < n;)
    o = r + t, yield e.slice(r, o), r = o; }, NO = function (e, t, n) { return __asyncGenerator(this, arguments, function* () { var _q, e_1, _z, _3; try {
    for (var _4 = true, e_2 = __asyncValues(e), e_2_1; e_2_1 = yield __await(e_2.next()), _q = e_2_1.done, !_q; _4 = true) {
        _3 = e_2_1.value;
        _4 = false;
        const r = _3;
        yield __await(yield* __asyncDelegator(__asyncValues(RO(ArrayBuffer.isView(r) ? r : yield __await(n(String(r))), t))));
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (!_4 && !_q && (_z = e_2.return)) yield __await(_z.call(e_2));
    }
    finally { if (e_1) throw e_1.error; }
} }); }, Uv = (e, t, n, r, o) => { const i = NO(e, t, o); let s = 0; return new ReadableStream({ type: "bytes", pull(a) {
        return __awaiter(this, void 0, void 0, function* () { const { done: l, value: c } = yield i.next(); if (l) {
            a.close(), r();
            return;
        } let d = c.byteLength; n && n(s += d), a.enqueue(new Uint8Array(c)); });
    }, cancel(a) { return r(a), i.return(); } }, { highWaterMark: 2 }); }, Vv = (e, t) => { const n = e != null; return r => setTimeout(() => t({ lengthComputable: n, total: e, loaded: r })); }, lc = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Iw = lc && typeof ReadableStream == "function", vf = lc && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : (e) => __awaiter(void 0, void 0, void 0, function* () { return new Uint8Array(yield new Response(e).arrayBuffer()); })), kO = Iw && (() => { let e = !1; const t = new Request(Gt.origin, { body: new ReadableStream, method: "POST", get duplex() { return e = !0, "half"; } }).headers.has("Content-Type"); return e && !t; })(), Hv = 64 * 1024, gf = Iw && !!(() => { try {
    return O.isReadableStream(new Response("").body);
}
catch (_q) { } })(), Ol = { stream: gf && (e => e.body) };
lc && (e => { ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => { !Ol[t] && (Ol[t] = O.isFunction(e[t]) ? n => n[t]() : (n, r) => { throw new se(`Response type '${t}' is not supported`, se.ERR_NOT_SUPPORT, r); }); }); })(new Response);
const TO = (e) => __awaiter(void 0, void 0, void 0, function* () { if (e == null)
    return 0; if (O.isBlob(e))
    return e.size; if (O.isSpecCompliantForm(e))
    return (yield new Request(e).arrayBuffer()).byteLength; if (O.isArrayBufferView(e))
    return e.byteLength; if (O.isURLSearchParams(e) && (e = e + ""), O.isString(e))
    return (yield vf(e)).byteLength; }), OO = (e, t) => __awaiter(void 0, void 0, void 0, function* () { const n = O.toFiniteNumber(e.getContentLength()); return n !== null && n !== void 0 ? n : TO(t); }), jO = lc && ((e) => __awaiter(void 0, void 0, void 0, function* () { let { url: t, method: n, data: r, signal: o, cancelToken: i, timeout: s, onDownloadProgress: a, onUploadProgress: l, responseType: c, headers: d, withCredentials: f = "same-origin", fetchOptions: h } = Mw(e); c = c ? (c + "").toLowerCase() : "text"; let [x, y] = o || i || s ? PO([o, i], s) : [], v, S; const m = () => { !v && setTimeout(() => { x && x.unsubscribe(); }), v = !0; }; let g; try {
    if (l && kO && n !== "get" && n !== "head" && (g = yield OO(d, r)) !== 0) {
        let R = new Request(t, { method: "POST", body: r, duplex: "half" }), b;
        O.isFormData(r) && (b = R.headers.get("content-type")) && d.setContentType(b), R.body && (r = Uv(R.body, Hv, Vv(g, Tl(l)), null, vf));
    }
    O.isString(f) || (f = f ? "cors" : "omit"), S = new Request(t, Object.assign(Object.assign({}, h), { signal: x, method: n.toUpperCase(), headers: d.normalize().toJSON(), body: r, duplex: "half", withCredentials: f }));
    let w = yield fetch(S);
    const C = gf && (c === "stream" || c === "response");
    if (gf && (a || C)) {
        const R = {};
        ["status", "statusText", "headers"].forEach(P => { R[P] = w[P]; });
        const b = O.toFiniteNumber(w.headers.get("content-length"));
        w = new Response(Uv(w.body, Hv, a && Vv(b, Tl(a, !0)), C && m, vf), R);
    }
    c = c || "text";
    let E = yield Ol[O.findKey(Ol, c) || "text"](w, e);
    return !C && m(), y && y(), yield new Promise((R, b) => { Aw(R, b, { data: E, headers: ht.from(w.headers), status: w.status, statusText: w.statusText, config: e, request: S }); });
}
catch (w) {
    throw m(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(new se("Network Error", se.ERR_NETWORK, e, S), { cause: w.cause || w }) : se.from(w, w && w.code, e, S);
} })), yf = { http: QT, xhr: bO, fetch: jO };
O.forEach(yf, (e, t) => { if (e) {
    try {
        Object.defineProperty(e, "name", { value: t });
    }
    catch (_q) { }
    Object.defineProperty(e, "adapterName", { value: t });
} });
const Wv = e => `- ${e}`, AO = e => O.isFunction(e) || e === null || e === !1, Dw = { getAdapter: e => {
        e = O.isArray(e) ? e : [e];
        const { length: t } = e;
        let n, r;
        const o = {};
        for (let i = 0; i < t; i++) {
            n = e[i];
            let s;
            if (r = n, !AO(n) && (r = yf[(s = String(n)).toLowerCase()], r === void 0))
                throw new se(`Unknown adapter '${s}'`);
            if (r)
                break;
            o[s || "#" + i] = r;
        }
        if (!r) {
            const i = Object.entries(o).map(([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
            let s = t ? i.length > 1 ? `since :
` + i.map(Wv).join(`
`) : " " + Wv(i[0]) : "as no adapter specified";
            throw new se("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT");
        }
        return r;
    }, adapters: yf };
function ku(e) { if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new wi(null, e); }
function Kv(e) { return ku(e), e.headers = ht.from(e.headers), e.data = Nu.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Dw.getAdapter(e.adapter || Zs.adapter)(e).then(function (r) { return ku(e), r.data = Nu.call(e, e.transformResponse, r), r.headers = ht.from(r.headers), r; }, function (r) { return jw(r) || (ku(e), r && r.response && (r.response.data = Nu.call(e, e.transformResponse, r.response), r.response.headers = ht.from(r.response.headers))), Promise.reject(r); }); }
const Lw = "1.7.2", sh = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => { sh[e] = function (r) { return typeof r === e || "a" + (t < 1 ? "n " : " ") + e; }; });
const Gv = {};
sh.transitional = function (t, n, r) { function o(i, s) { return "[Axios v" + Lw + "] Transitional option '" + i + "'" + s + (r ? ". " + r : ""); } return (i, s, a) => { if (t === !1)
    throw new se(o(s, " has been removed" + (n ? " in " + n : "")), se.ERR_DEPRECATED); return n && !Gv[s] && (Gv[s] = !0, console.warn(o(s, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(i, s, a) : !0; }; };
function _O(e, t, n) { if (typeof e != "object")
    throw new se("options must be an object", se.ERR_BAD_OPTION_VALUE); const r = Object.keys(e); let o = r.length; for (; o-- > 0;) {
    const i = r[o], s = t[i];
    if (s) {
        const a = e[i], l = a === void 0 || s(a, i, e);
        if (l !== !0)
            throw new se("option " + i + " must be " + l, se.ERR_BAD_OPTION_VALUE);
        continue;
    }
    if (n !== !0)
        throw new se("Unknown option " + i, se.ERR_BAD_OPTION);
} }
const xf = { assertOptions: _O, validators: sh }, Fn = xf.validators;
class zr {
    constructor(t) { this.defaults = t, this.interceptors = { request: new Fv, response: new Fv }; }
    request(t, n) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._request(t, n);
            }
            catch (r) {
                if (r instanceof Error) {
                    let o;
                    Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error;
                    const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                    try {
                        r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
                    }
                    catch (_q) { }
                }
                throw r;
            }
        });
    }
    _request(t, n) { typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Gr(this.defaults, n); const { transitional: r, paramsSerializer: o, headers: i } = n; r !== void 0 && xf.assertOptions(r, { silentJSONParsing: Fn.transitional(Fn.boolean), forcedJSONParsing: Fn.transitional(Fn.boolean), clarifyTimeoutError: Fn.transitional(Fn.boolean) }, !1), o != null && (O.isFunction(o) ? n.paramsSerializer = { serialize: o } : xf.assertOptions(o, { encode: Fn.function, serialize: Fn.function }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase(); let s = i && O.merge(i.common, i[n.method]); i && O.forEach(["delete", "get", "head", "post", "put", "patch", "common"], y => { delete i[y]; }), n.headers = ht.concat(s, i); const a = []; let l = !0; this.interceptors.request.forEach(function (v) { typeof v.runWhen == "function" && v.runWhen(n) === !1 || (l = l && v.synchronous, a.unshift(v.fulfilled, v.rejected)); }); const c = []; this.interceptors.response.forEach(function (v) { c.push(v.fulfilled, v.rejected); }); let d, f = 0, h; if (!l) {
        const y = [Kv.bind(this), void 0];
        for (y.unshift.apply(y, a), y.push.apply(y, c), h = y.length, d = Promise.resolve(n); f < h;)
            d = d.then(y[f++], y[f++]);
        return d;
    } h = a.length; let x = n; for (f = 0; f < h;) {
        const y = a[f++], v = a[f++];
        try {
            x = y(x);
        }
        catch (S) {
            v.call(this, S);
            break;
        }
    } try {
        d = Kv.call(this, x);
    }
    catch (y) {
        return Promise.reject(y);
    } for (f = 0, h = c.length; f < h;)
        d = d.then(c[f++], c[f++]); return d; }
    getUri(t) { t = Gr(this.defaults, t); const n = _w(t.baseURL, t.url); return kw(n, t.params, t.paramsSerializer); }
}
O.forEach(["delete", "get", "head", "options"], function (t) { zr.prototype[t] = function (n, r) { return this.request(Gr(r || {}, { method: t, url: n, data: (r || {}).data })); }; });
O.forEach(["post", "put", "patch"], function (t) { function n(r) { return function (i, s, a) { return this.request(Gr(a || {}, { method: t, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: i, data: s })); }; } zr.prototype[t] = n(), zr.prototype[t + "Form"] = n(!0); });
class ah {
    constructor(t) { if (typeof t != "function")
        throw new TypeError("executor must be a function."); let n; this.promise = new Promise(function (i) { n = i; }); const r = this; this.promise.then(o => { if (!r._listeners)
        return; let i = r._listeners.length; for (; i-- > 0;)
        r._listeners[i](o); r._listeners = null; }), this.promise.then = o => { let i; const s = new Promise(a => { r.subscribe(a), i = a; }).then(o); return s.cancel = function () { r.unsubscribe(i); }, s; }, t(function (i, s, a) { r.reason || (r.reason = new wi(i, s, a), n(r.reason)); }); }
    throwIfRequested() { if (this.reason)
        throw this.reason; }
    subscribe(t) { if (this.reason) {
        t(this.reason);
        return;
    } this._listeners ? this._listeners.push(t) : this._listeners = [t]; }
    unsubscribe(t) { if (!this._listeners)
        return; const n = this._listeners.indexOf(t); n !== -1 && this._listeners.splice(n, 1); }
    static source() { let t; return { token: new ah(function (o) { t = o; }), cancel: t }; }
}
function MO(e) { return function (n) { return e.apply(null, n); }; }
function IO(e) { return O.isObject(e) && e.isAxiosError === !0; }
const wf = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(wf).forEach(([e, t]) => { wf[t] = e; });
function $w(e) { const t = new zr(e), n = vw(zr.prototype.request, t); return O.extend(n, zr.prototype, t, { allOwnKeys: !0 }), O.extend(n, t, null, { allOwnKeys: !0 }), n.create = function (o) { return $w(Gr(e, o)); }, n; }
const Se = $w(Zs);
Se.Axios = zr;
Se.CanceledError = wi;
Se.CancelToken = ah;
Se.isCancel = jw;
Se.VERSION = Lw;
Se.toFormData = ac;
Se.AxiosError = se;
Se.Cancel = Se.CanceledError;
Se.all = function (t) { return Promise.all(t); };
Se.spread = MO;
Se.isAxiosError = IO;
Se.mergeConfig = Gr;
Se.AxiosHeaders = ht;
Se.formToJSON = e => Ow(O.isHTMLForm(e) ? new FormData(e) : e);
Se.getAdapter = Dw.getAdapter;
Se.HttpStatusCode = wf;
Se.default = Se;
const Si = "/api", DO = () => __awaiter(void 0, void 0, void 0, function* () { const { data: e } = yield Se.get(`${Si}/merch`); return e; }), Fw = { getAll: DO };
var Tu = 0;
function lh() { u.useEffect(() => { var _q, _z; const e = document.querySelectorAll("[data-radix-focus-guard]"); return document.body.insertAdjacentElement("afterbegin", (_q = e[0]) !== null && _q !== void 0 ? _q : Qv()), document.body.insertAdjacentElement("beforeend", (_z = e[1]) !== null && _z !== void 0 ? _z : Qv()), Tu++, () => { Tu === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Tu--; }; }, []); }
function Qv() { const e = document.createElement("span"); return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e; }
var Ou = "focusScope.autoFocusOnMount", ju = "focusScope.autoFocusOnUnmount", qv = { bubbles: !1, cancelable: !0 }, LO = "FocusScope", cc = u.forwardRef((e, t) => { const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i } = e, s = __rest(e, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]), [a, l] = u.useState(null), c = Ve(o), d = Ve(i), f = u.useRef(null), h = ce(t, v => l(v)), x = u.useRef({ paused: !1, pause() { this.paused = !0; }, resume() { this.paused = !1; } }).current; u.useEffect(() => { if (r) {
    let v = function (w) { if (x.paused || !a)
        return; const C = w.target; a.contains(C) ? f.current = C : Bn(f.current, { select: !0 }); }, S = function (w) { if (x.paused || !a)
        return; const C = w.relatedTarget; C !== null && (a.contains(C) || Bn(f.current, { select: !0 })); }, m = function (w) { if (document.activeElement === document.body)
        for (const E of w)
            E.removedNodes.length > 0 && Bn(a); };
    document.addEventListener("focusin", v), document.addEventListener("focusout", S);
    const g = new MutationObserver(m);
    return a && g.observe(a, { childList: !0, subtree: !0 }), () => { document.removeEventListener("focusin", v), document.removeEventListener("focusout", S), g.disconnect(); };
} }, [r, a, x.paused]), u.useEffect(() => { if (a) {
    Xv.add(x);
    const v = document.activeElement;
    if (!a.contains(v)) {
        const m = new CustomEvent(Ou, qv);
        a.addEventListener(Ou, c), a.dispatchEvent(m), m.defaultPrevented || ($O(VO(zw(a)), { select: !0 }), document.activeElement === v && Bn(a));
    }
    return () => { a.removeEventListener(Ou, c), setTimeout(() => { const m = new CustomEvent(ju, qv); a.addEventListener(ju, d), a.dispatchEvent(m), m.defaultPrevented || Bn(v !== null && v !== void 0 ? v : document.body, { select: !0 }), a.removeEventListener(ju, d), Xv.remove(x); }, 0); };
} }, [a, c, d, x]); const y = u.useCallback(v => { if (!n && !r || x.paused)
    return; const S = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, m = document.activeElement; if (S && m) {
    const g = v.currentTarget, [w, C] = FO(g);
    w && C ? !v.shiftKey && m === C ? (v.preventDefault(), n && Bn(w, { select: !0 })) : v.shiftKey && m === w && (v.preventDefault(), n && Bn(C, { select: !0 })) : m === g && v.preventDefault();
} }, [n, r, x.paused]); return p.jsx(ne.div, Object.assign(Object.assign({ tabIndex: -1 }, s), { ref: h, onKeyDown: y })); });
cc.displayName = LO;
function $O(e, { select: t = !1 } = {}) { const n = document.activeElement; for (const r of e)
    if (Bn(r, { select: t }), document.activeElement !== n)
        return; }
function FO(e) { const t = zw(e), n = Yv(t, e), r = Yv(t.reverse(), e); return [n, r]; }
function zw(e) { const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: r => { const o = r.tagName === "INPUT" && r.type === "hidden"; return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP; } }); for (; n.nextNode();)
    t.push(n.currentNode); return t; }
function Yv(e, t) { for (const n of e)
    if (!zO(n, { upTo: t }))
        return n; }
function zO(e, { upTo: t }) { if (getComputedStyle(e).visibility === "hidden")
    return !0; for (; e;) {
    if (t !== void 0 && e === t)
        return !1;
    if (getComputedStyle(e).display === "none")
        return !0;
    e = e.parentElement;
} return !1; }
function BO(e) { return e instanceof HTMLInputElement && "select" in e; }
function Bn(e, { select: t = !1 } = {}) { if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && BO(e) && t && e.select();
} }
var Xv = UO();
function UO() { let e = []; return { add(t) { const n = e[0]; t !== n && (n == null || n.pause()), e = Jv(e, t), e.unshift(t); }, remove(t) { var n; e = Jv(e, t), (n = e[0]) == null || n.resume(); } }; }
function Jv(e, t) { const n = [...e], r = n.indexOf(t); return r !== -1 && n.splice(r, 1), n; }
function VO(e) { return e.filter(t => t.tagName !== "A"); }
const HO = ["top", "right", "bottom", "left"], cn = Math.min, yt = Math.max, jl = Math.round, Oa = Math.floor, mr = e => ({ x: e, y: e }), WO = { left: "right", right: "left", bottom: "top", top: "bottom" }, KO = { start: "end", end: "start" };
function Sf(e, t, n) { return yt(e, cn(t, n)); }
function On(e, t) { return typeof e == "function" ? e(t) : e; }
function jn(e) { return e.split("-")[0]; }
function Ci(e) { return e.split("-")[1]; }
function ch(e) { return e === "x" ? "y" : "x"; }
function uh(e) { return e === "y" ? "height" : "width"; }
function vr(e) { return ["top", "bottom"].includes(jn(e)) ? "y" : "x"; }
function dh(e) { return ch(vr(e)); }
function GO(e, t, n) { n === void 0 && (n = !1); const r = Ci(e), o = dh(e), i = uh(o); let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top"; return t.reference[i] > t.floating[i] && (s = Al(s)), [s, Al(s)]; }
function QO(e) { const t = Al(e); return [Cf(e), t, Cf(t)]; }
function Cf(e) { return e.replace(/start|end/g, t => KO[t]); }
function qO(e, t, n) { const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"]; switch (e) {
    case "top":
    case "bottom": return n ? t ? o : r : t ? r : o;
    case "left":
    case "right": return t ? i : s;
    default: return [];
} }
function YO(e, t, n, r) { const o = Ci(e); let i = qO(jn(e), n === "start", r); return o && (i = i.map(s => s + "-" + o), t && (i = i.concat(i.map(Cf)))), i; }
function Al(e) { return e.replace(/left|right|bottom|top/g, t => WO[t]); }
function XO(e) { return Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, e); }
function Bw(e) { return typeof e != "number" ? XO(e) : { top: e, right: e, bottom: e, left: e }; }
function _l(e) { const { x: t, y: n, width: r, height: o } = e; return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n }; }
function Zv(e, t, n) { let { reference: r, floating: o } = e; const i = vr(t), s = dh(t), a = uh(s), l = jn(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2; let x; switch (l) {
    case "top":
        x = { x: d, y: r.y - o.height };
        break;
    case "bottom":
        x = { x: d, y: r.y + r.height };
        break;
    case "right":
        x = { x: r.x + r.width, y: f };
        break;
    case "left":
        x = { x: r.x - o.width, y: f };
        break;
    default: x = { x: r.x, y: r.y };
} switch (Ci(t)) {
    case "start":
        x[s] -= h * (n && c ? -1 : 1);
        break;
    case "end":
        x[s] += h * (n && c ? -1 : 1);
        break;
} return x; }
const JO = (e, t, n) => __awaiter(void 0, void 0, void 0, function* () { const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: s } = n, a = i.filter(Boolean), l = yield (s.isRTL == null ? void 0 : s.isRTL(t)); let c = yield s.getElementRects({ reference: e, floating: t, strategy: o }), { x: d, y: f } = Zv(c, r, l), h = r, x = {}, y = 0; for (let v = 0; v < a.length; v++) {
    const { name: S, fn: m } = a[v], { x: g, y: w, data: C, reset: E } = yield m({ x: d, y: f, initialPlacement: r, placement: h, strategy: o, middlewareData: x, rects: c, platform: s, elements: { reference: e, floating: t } });
    d = g !== null && g !== void 0 ? g : d, f = w !== null && w !== void 0 ? w : f, x = Object.assign(Object.assign({}, x), { [S]: Object.assign(Object.assign({}, x[S]), C) }), E && y <= 50 && (y++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (c = E.rects === !0 ? yield s.getElementRects({ reference: e, floating: t, strategy: o }) : E.rects), { x: d, y: f } = Zv(c, h, l)), v = -1);
} return { x: d, y: f, placement: h, strategy: o, middlewareData: x }; });
function js(e, t) {
    return __awaiter(this, void 0, void 0, function* () { var n; t === void 0 && (t = {}); const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e, { boundary: c = "clippingAncestors", rootBoundary: d = "viewport", elementContext: f = "floating", altBoundary: h = !1, padding: x = 0 } = On(t, e), y = Bw(x), S = a[h ? f === "floating" ? "reference" : "floating" : f], m = _l(yield i.getClippingRect({ element: (n = yield (i.isElement == null ? void 0 : i.isElement(S))) == null || n ? S : S.contextElement || (yield (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))), boundary: c, rootBoundary: d, strategy: l })), g = f === "floating" ? { x: r, y: o, width: s.floating.width, height: s.floating.height } : s.reference, w = yield (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), C = (yield (i.isElement == null ? void 0 : i.isElement(w))) ? (yield (i.getScale == null ? void 0 : i.getScale(w))) || { x: 1, y: 1 } : { x: 1, y: 1 }, E = _l(i.convertOffsetParentRelativeRectToViewportRelativeRect ? yield i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: a, rect: g, offsetParent: w, strategy: l }) : g); return { top: (m.top - E.top + y.top) / C.y, bottom: (E.bottom - m.bottom + y.bottom) / C.y, left: (m.left - E.left + y.left) / C.x, right: (E.right - m.right + y.right) / C.x }; });
}
const ZO = e => ({ name: "arrow", options: e, fn(t) {
        return __awaiter(this, void 0, void 0, function* () { const { x: n, y: r, placement: o, rects: i, platform: s, elements: a, middlewareData: l } = t, { element: c, padding: d = 0 } = On(e, t) || {}; if (c == null)
            return {}; const f = Bw(d), h = { x: n, y: r }, x = dh(o), y = uh(x), v = yield s.getDimensions(c), S = x === "y", m = S ? "top" : "left", g = S ? "bottom" : "right", w = S ? "clientHeight" : "clientWidth", C = i.reference[y] + i.reference[x] - h[x] - i.floating[y], E = h[x] - i.reference[x], R = yield (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c)); let b = R ? R[w] : 0; (!b || !(yield (s.isElement == null ? void 0 : s.isElement(R)))) && (b = a.floating[w] || i.floating[y]); const P = C / 2 - E / 2, k = b / 2 - v[y] / 2 - 1, T = cn(f[m], k), M = cn(f[g], k), D = T, te = b - v[y] - M, G = b / 2 - v[y] / 2 + P, U = Sf(D, G, te), K = !l.arrow && Ci(o) != null && G !== U && i.reference[y] / 2 - (G < D ? T : M) - v[y] / 2 < 0, F = K ? G < D ? G - D : G - te : 0; return { [x]: h[x] + F, data: Object.assign({ [x]: U, centerOffset: G - U - F }, K && { alignmentOffset: F }), reset: K }; });
    } }), ej = function (e) { return e === void 0 && (e = {}), { name: "flip", options: e, fn(t) {
        return __awaiter(this, void 0, void 0, function* () { var n, r; const { placement: o, middlewareData: i, rects: s, initialPlacement: a, platform: l, elements: c } = t, _q = On(e, t), { mainAxis: d = !0, crossAxis: f = !0, fallbackPlacements: h, fallbackStrategy: x = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: v = !0 } = _q, S = __rest(_q, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]); if ((n = i.arrow) != null && n.alignmentOffset)
            return {}; const m = jn(o), g = vr(a), w = jn(a) === a, C = yield (l.isRTL == null ? void 0 : l.isRTL(c.floating)), E = h || (w || !v ? [Al(a)] : QO(a)), R = y !== "none"; !h && R && E.push(...YO(a, v, y, C)); const b = [a, ...E], P = yield js(t, S), k = []; let T = ((r = i.flip) == null ? void 0 : r.overflows) || []; if (d && k.push(P[m]), f) {
            const G = GO(o, s, C);
            k.push(P[G[0]], P[G[1]]);
        } if (T = [...T, { placement: o, overflows: k }], !k.every(G => G <= 0)) {
            var M, D;
            const G = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1, U = b[G];
            if (U)
                return { data: { index: G, overflows: T }, reset: { placement: U } };
            let K = (D = T.filter(F => F.overflows[0] <= 0).sort((F, A) => F.overflows[1] - A.overflows[1])[0]) == null ? void 0 : D.placement;
            if (!K)
                switch (x) {
                    case "bestFit": {
                        var te;
                        const F = (te = T.filter(A => { if (R) {
                            const I = vr(A.placement);
                            return I === g || I === "y";
                        } return !0; }).map(A => [A.placement, A.overflows.filter(I => I > 0).reduce((I, Q) => I + Q, 0)]).sort((A, I) => A[1] - I[1])[0]) == null ? void 0 : te[0];
                        F && (K = F);
                        break;
                    }
                    case "initialPlacement":
                        K = a;
                        break;
                }
            if (o !== K)
                return { reset: { placement: K } };
        } return {}; });
    } }; };
function eg(e, t) { return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width }; }
function tg(e) { return HO.some(t => e[t] >= 0); }
const tj = function (e) { return e === void 0 && (e = {}), { name: "hide", options: e, fn(t) {
        return __awaiter(this, void 0, void 0, function* () { const { rects: n } = t, _q = On(e, t), { strategy: r = "referenceHidden" } = _q, o = __rest(_q, ["strategy"]); switch (r) {
            case "referenceHidden": {
                const i = yield js(t, Object.assign(Object.assign({}, o), { elementContext: "reference" })), s = eg(i, n.reference);
                return { data: { referenceHiddenOffsets: s, referenceHidden: tg(s) } };
            }
            case "escaped": {
                const i = yield js(t, Object.assign(Object.assign({}, o), { altBoundary: !0 })), s = eg(i, n.floating);
                return { data: { escapedOffsets: s, escaped: tg(s) } };
            }
            default: return {};
        } });
    } }; };
function nj(e, t) {
    return __awaiter(this, void 0, void 0, function* () { const { placement: n, platform: r, elements: o } = e, i = yield (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = jn(n), a = Ci(n), l = vr(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, d = i && l ? -1 : 1, f = On(t, e); let { mainAxis: h, crossAxis: x, alignmentAxis: y } = typeof f == "number" ? { mainAxis: f, crossAxis: 0, alignmentAxis: null } : Object.assign({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, f); return a && typeof y == "number" && (x = a === "end" ? y * -1 : y), l ? { x: x * d, y: h * c } : { x: h * c, y: x * d }; });
}
const rj = function (e) { return e === void 0 && (e = 0), { name: "offset", options: e, fn(t) {
        return __awaiter(this, void 0, void 0, function* () { var n, r; const { x: o, y: i, placement: s, middlewareData: a } = t, l = yield nj(t, e); return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : { x: o + l.x, y: i + l.y, data: Object.assign(Object.assign({}, l), { placement: s }) }; });
    } }; }, oj = function (e) { return e === void 0 && (e = {}), { name: "shift", options: e, fn(t) {
        return __awaiter(this, void 0, void 0, function* () { const { x: n, y: r, placement: o } = t, _q = On(e, t), { mainAxis: i = !0, crossAxis: s = !1, limiter: a = { fn: S => { let { x: m, y: g } = S; return { x: m, y: g }; } } } = _q, l = __rest(_q, ["mainAxis", "crossAxis", "limiter"]), c = { x: n, y: r }, d = yield js(t, l), f = vr(jn(o)), h = ch(f); let x = c[h], y = c[f]; if (i) {
            const S = h === "y" ? "top" : "left", m = h === "y" ? "bottom" : "right", g = x + d[S], w = x - d[m];
            x = Sf(g, x, w);
        } if (s) {
            const S = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", g = y + d[S], w = y - d[m];
            y = Sf(g, y, w);
        } const v = a.fn(Object.assign(Object.assign({}, t), { [h]: x, [f]: y })); return Object.assign(Object.assign({}, v), { data: { x: v.x - n, y: v.y - r } }); });
    } }; }, ij = function (e) { return e === void 0 && (e = {}), { options: e, fn(t) { const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t, { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = On(e, t), d = { x: n, y: r }, f = vr(o), h = ch(f); let x = d[h], y = d[f]; const v = On(a, t), S = typeof v == "number" ? { mainAxis: v, crossAxis: 0 } : Object.assign({ mainAxis: 0, crossAxis: 0 }, v); if (l) {
        const w = h === "y" ? "height" : "width", C = i.reference[h] - i.floating[w] + S.mainAxis, E = i.reference[h] + i.reference[w] - S.mainAxis;
        x < C ? x = C : x > E && (x = E);
    } if (c) {
        var m, g;
        const w = h === "y" ? "width" : "height", C = ["top", "left"].includes(jn(o)), E = i.reference[f] - i.floating[w] + (C && ((m = s.offset) == null ? void 0 : m[f]) || 0) + (C ? 0 : S.crossAxis), R = i.reference[f] + i.reference[w] + (C ? 0 : ((g = s.offset) == null ? void 0 : g[f]) || 0) - (C ? S.crossAxis : 0);
        y < E ? y = E : y > R && (y = R);
    } return { [h]: x, [f]: y }; } }; }, sj = function (e) { return e === void 0 && (e = {}), { name: "size", options: e, fn(t) {
        return __awaiter(this, void 0, void 0, function* () { const { placement: n, rects: r, platform: o, elements: i } = t, _q = On(e, t), { apply: s = () => { } } = _q, a = __rest(_q, ["apply"]), l = yield js(t, a), c = jn(n), d = Ci(n), f = vr(n) === "y", { width: h, height: x } = r.floating; let y, v; c === "top" || c === "bottom" ? (y = c, v = d === ((yield (o.isRTL == null ? void 0 : o.isRTL(i.floating))) ? "start" : "end") ? "left" : "right") : (v = c, y = d === "end" ? "top" : "bottom"); const S = x - l.top - l.bottom, m = h - l.left - l.right, g = cn(x - l[y], S), w = cn(h - l[v], m), C = !t.middlewareData.shift; let E = g, R = w; if (f ? R = d || C ? cn(w, m) : m : E = d || C ? cn(g, S) : S, C && !d) {
            const P = yt(l.left, 0), k = yt(l.right, 0), T = yt(l.top, 0), M = yt(l.bottom, 0);
            f ? R = h - 2 * (P !== 0 || k !== 0 ? P + k : yt(l.left, l.right)) : E = x - 2 * (T !== 0 || M !== 0 ? T + M : yt(l.top, l.bottom));
        } yield s(Object.assign(Object.assign({}, t), { availableWidth: R, availableHeight: E })); const b = yield o.getDimensions(i.floating); return h !== b.width || x !== b.height ? { reset: { rects: !0 } } : {}; });
    } }; };
function Ei(e) { return Uw(e) ? (e.nodeName || "").toLowerCase() : "#document"; }
function St(e) { var t; return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window; }
function Mn(e) { var t; return (t = (Uw(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement; }
function Uw(e) { return e instanceof Node || e instanceof St(e).Node; }
function fn(e) { return e instanceof Element || e instanceof St(e).Element; }
function pn(e) { return e instanceof HTMLElement || e instanceof St(e).HTMLElement; }
function ng(e) { return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof St(e).ShadowRoot; }
function ea(e) { const { overflow: t, overflowX: n, overflowY: r, display: o } = Yt(e); return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o); }
function aj(e) { return ["table", "td", "th"].includes(Ei(e)); }
function uc(e) { return [":popover-open", ":modal"].some(t => { try {
    return e.matches(t);
}
catch (_q) {
    return !1;
} }); }
function fh(e) { const t = ph(), n = Yt(e); return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r)); }
function lj(e) { let t = gr(e); for (; pn(t) && !ii(t);) {
    if (uc(t))
        return null;
    if (fh(t))
        return t;
    t = gr(t);
} return null; }
function ph() { return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none"); }
function ii(e) { return ["html", "body", "#document"].includes(Ei(e)); }
function Yt(e) { return St(e).getComputedStyle(e); }
function dc(e) { return fn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY }; }
function gr(e) { if (Ei(e) === "html")
    return e; const t = e.assignedSlot || e.parentNode || ng(e) && e.host || Mn(e); return ng(t) ? t.host : t; }
function Vw(e) { const t = gr(e); return ii(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : pn(t) && ea(t) ? t : Vw(t); }
function As(e, t, n) { var r; t === void 0 && (t = []), n === void 0 && (n = !0); const o = Vw(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = St(o); return i ? t.concat(s, s.visualViewport || [], ea(o) ? o : [], s.frameElement && n ? As(s.frameElement) : []) : t.concat(o, As(o, [], n)); }
function Hw(e) { const t = Yt(e); let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0; const o = pn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = jl(n) !== i || jl(r) !== s; return a && (n = i, r = s), { width: n, height: r, $: a }; }
function hh(e) { return fn(e) ? e : e.contextElement; }
function Mo(e) { const t = hh(e); if (!pn(t))
    return mr(1); const n = t.getBoundingClientRect(), { width: r, height: o, $: i } = Hw(t); let s = (i ? jl(n.width) : n.width) / r, a = (i ? jl(n.height) : n.height) / o; return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: s, y: a }; }
const cj = mr(0);
function Ww(e) { const t = St(e); return !ph() || !t.visualViewport ? cj : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }; }
function uj(e, t, n) { return t === void 0 && (t = !1), !n || t && n !== St(e) ? !1 : t; }
function Qr(e, t, n, r) { t === void 0 && (t = !1), n === void 0 && (n = !1); const o = e.getBoundingClientRect(), i = hh(e); let s = mr(1); t && (r ? fn(r) && (s = Mo(r)) : s = Mo(e)); const a = uj(i, n, r) ? Ww(i) : mr(0); let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y; if (i) {
    const h = St(i), x = r && fn(r) ? St(r) : r;
    let y = h, v = y.frameElement;
    for (; v && r && x !== y;) {
        const S = Mo(v), m = v.getBoundingClientRect(), g = Yt(v), w = m.left + (v.clientLeft + parseFloat(g.paddingLeft)) * S.x, C = m.top + (v.clientTop + parseFloat(g.paddingTop)) * S.y;
        l *= S.x, c *= S.y, d *= S.x, f *= S.y, l += w, c += C, y = St(v), v = y.frameElement;
    }
} return _l({ width: d, height: f, x: l, y: c }); }
function dj(e) { let { elements: t, rect: n, offsetParent: r, strategy: o } = e; const i = o === "fixed", s = Mn(r), a = t ? uc(t.floating) : !1; if (r === s || a && i)
    return n; let l = { scrollLeft: 0, scrollTop: 0 }, c = mr(1); const d = mr(0), f = pn(r); if ((f || !f && !i) && ((Ei(r) !== "body" || ea(s)) && (l = dc(r)), pn(r))) {
    const h = Qr(r);
    c = Mo(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
} return { width: n.width * c.x, height: n.height * c.y, x: n.x * c.x - l.scrollLeft * c.x + d.x, y: n.y * c.y - l.scrollTop * c.y + d.y }; }
function fj(e) { return Array.from(e.getClientRects()); }
function Kw(e) { return Qr(Mn(e)).left + dc(e).scrollLeft; }
function pj(e) { const t = Mn(e), n = dc(e), r = e.ownerDocument.body, o = yt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = yt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight); let s = -n.scrollLeft + Kw(e); const a = -n.scrollTop; return Yt(r).direction === "rtl" && (s += yt(t.clientWidth, r.clientWidth) - o), { width: o, height: i, x: s, y: a }; }
function hj(e, t) { const n = St(e), r = Mn(e), o = n.visualViewport; let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0; if (o) {
    i = o.width, s = o.height;
    const c = ph();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
} return { width: i, height: s, x: a, y: l }; }
function mj(e, t) { const n = Qr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = pn(e) ? Mo(e) : mr(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y; return { width: s, height: a, x: l, y: c }; }
function rg(e, t, n) { let r; if (t === "viewport")
    r = hj(e, n);
else if (t === "document")
    r = pj(Mn(e));
else if (fn(t))
    r = mj(t, n);
else {
    const o = Ww(e);
    r = Object.assign(Object.assign({}, t), { x: t.x - o.x, y: t.y - o.y });
} return _l(r); }
function Gw(e, t) { const n = gr(e); return n === t || !fn(n) || ii(n) ? !1 : Yt(n).position === "fixed" || Gw(n, t); }
function vj(e, t) { const n = t.get(e); if (n)
    return n; let r = As(e, [], !1).filter(a => fn(a) && Ei(a) !== "body"), o = null; const i = Yt(e).position === "fixed"; let s = i ? gr(e) : e; for (; fn(s) && !ii(s);) {
    const a = Yt(s), l = fh(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ea(s) && !l && Gw(e, s)) ? r = r.filter(d => d !== s) : o = a, s = gr(s);
} return t.set(e, r), r; }
function gj(e) { let { element: t, boundary: n, rootBoundary: r, strategy: o } = e; const s = [...n === "clippingAncestors" ? uc(t) ? [] : vj(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => { const f = rg(t, d, o); return c.top = yt(f.top, c.top), c.right = cn(f.right, c.right), c.bottom = cn(f.bottom, c.bottom), c.left = yt(f.left, c.left), c; }, rg(t, a, o)); return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top }; }
function yj(e) { const { width: t, height: n } = Hw(e); return { width: t, height: n }; }
function xj(e, t, n) { const r = pn(t), o = Mn(t), i = n === "fixed", s = Qr(e, !0, i, t); let a = { scrollLeft: 0, scrollTop: 0 }; const l = mr(0); if (r || !r && !i)
    if ((Ei(t) !== "body" || ea(o)) && (a = dc(t)), r) {
        const f = Qr(t, !0, i, t);
        l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    }
    else
        o && (l.x = Kw(o)); const c = s.left + a.scrollLeft - l.x, d = s.top + a.scrollTop - l.y; return { x: c, y: d, width: s.width, height: s.height }; }
function Au(e) { return Yt(e).position === "static"; }
function og(e, t) { return !pn(e) || Yt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent; }
function Qw(e, t) { const n = St(e); if (uc(e))
    return n; if (!pn(e)) {
    let o = gr(e);
    for (; o && !ii(o);) {
        if (fn(o) && !Au(o))
            return o;
        o = gr(o);
    }
    return n;
} let r = og(e, t); for (; r && aj(r) && Au(r);)
    r = og(r, t); return r && ii(r) && Au(r) && !fh(r) ? n : r || lj(e) || n; }
const wj = function (e) {
    return __awaiter(this, void 0, void 0, function* () { const t = this.getOffsetParent || Qw, n = this.getDimensions, r = yield n(e.floating); return { reference: xj(e.reference, yield t(e.floating), e.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } }; });
};
function Sj(e) { return Yt(e).direction === "rtl"; }
const Cj = { convertOffsetParentRelativeRectToViewportRelativeRect: dj, getDocumentElement: Mn, getClippingRect: gj, getOffsetParent: Qw, getElementRects: wj, getClientRects: fj, getDimensions: yj, getScale: Mo, isElement: fn, isRTL: Sj };
function Ej(e, t) { let n = null, r; const o = Mn(e); function i() { var a; clearTimeout(r), (a = n) == null || a.disconnect(), n = null; } function s(a, l) { a === void 0 && (a = !1), l === void 0 && (l = 1), i(); const { left: c, top: d, width: f, height: h } = e.getBoundingClientRect(); if (a || t(), !f || !h)
    return; const x = Oa(d), y = Oa(o.clientWidth - (c + f)), v = Oa(o.clientHeight - (d + h)), S = Oa(c), g = { rootMargin: -x + "px " + -y + "px " + -v + "px " + -S + "px", threshold: yt(0, cn(1, l)) || 1 }; let w = !0; function C(E) { const R = E[0].intersectionRatio; if (R !== l) {
    if (!w)
        return s();
    R ? s(!1, R) : r = setTimeout(() => { s(!1, 1e-7); }, 1e3);
} w = !1; } try {
    n = new IntersectionObserver(C, Object.assign(Object.assign({}, g), { root: o.ownerDocument }));
}
catch (_q) {
    n = new IntersectionObserver(C, g);
} n.observe(e); } return s(!0), i; }
function bj(e, t, n, r) { r === void 0 && (r = {}); const { ancestorScroll: o = !0, ancestorResize: i = !0, elementResize: s = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = r, c = hh(e), d = o || i ? [...c ? As(c) : [], ...As(t)] : []; d.forEach(m => { o && m.addEventListener("scroll", n, { passive: !0 }), i && m.addEventListener("resize", n); }); const f = c && a ? Ej(c, n) : null; let h = -1, x = null; s && (x = new ResizeObserver(m => { let [g] = m; g && g.target === c && x && (x.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => { var w; (w = x) == null || w.observe(t); })), n(); }), c && !l && x.observe(c), x.observe(t)); let y, v = l ? Qr(e) : null; l && S(); function S() { const m = Qr(e); v && (m.x !== v.x || m.y !== v.y || m.width !== v.width || m.height !== v.height) && n(), v = m, y = requestAnimationFrame(S); } return n(), () => { var m; d.forEach(g => { o && g.removeEventListener("scroll", n), i && g.removeEventListener("resize", n); }), f == null || f(), (m = x) == null || m.disconnect(), x = null, l && cancelAnimationFrame(y); }; }
const Pj = rj, Rj = oj, Nj = ej, kj = sj, Tj = tj, ig = ZO, Oj = ij, jj = (e, t, n) => { const r = new Map, o = Object.assign({ platform: Cj }, n), i = Object.assign(Object.assign({}, o.platform), { _c: r }); return JO(e, t, Object.assign(Object.assign({}, o), { platform: i })); };
var Za = typeof document < "u" ? u.useLayoutEffect : u.useEffect;
function Ml(e, t) { if (e === t)
    return !0; if (typeof e != typeof t)
    return !1; if (typeof e == "function" && e.toString() === t.toString())
    return !0; let n, r, o; if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
        if (n = e.length, n !== t.length)
            return !1;
        for (r = n; r-- !== 0;)
            if (!Ml(e[r], t[r]))
                return !1;
        return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
        return !1;
    for (r = n; r-- !== 0;)
        if (!{}.hasOwnProperty.call(t, o[r]))
            return !1;
    for (r = n; r-- !== 0;) {
        const i = o[r];
        if (!(i === "_owner" && e.$$typeof) && !Ml(e[i], t[i]))
            return !1;
    }
    return !0;
} return e !== e && t !== t; }
function qw(e) { return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1; }
function sg(e, t) { const n = qw(e); return Math.round(t * n) / n; }
function ag(e) { const t = u.useRef(e); return Za(() => { t.current = e; }), t; }
function Aj(e) { e === void 0 && (e = {}); const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: o, elements: { reference: i, floating: s } = {}, transform: a = !0, whileElementsMounted: l, open: c } = e, [d, f] = u.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }), [h, x] = u.useState(r); Ml(h, r) || x(r); const [y, v] = u.useState(null), [S, m] = u.useState(null), g = u.useCallback(F => { F !== R.current && (R.current = F, v(F)); }, []), w = u.useCallback(F => { F !== b.current && (b.current = F, m(F)); }, []), C = i || y, E = s || S, R = u.useRef(null), b = u.useRef(null), P = u.useRef(d), k = l != null, T = ag(l), M = ag(o), D = u.useCallback(() => { if (!R.current || !b.current)
    return; const F = { placement: t, strategy: n, middleware: h }; M.current && (F.platform = M.current), jj(R.current, b.current, F).then(A => { const I = Object.assign(Object.assign({}, A), { isPositioned: !0 }); te.current && !Ml(P.current, I) && (P.current = I, _n.flushSync(() => { f(I); })); }); }, [h, t, n, M]); Za(() => { c === !1 && P.current.isPositioned && (P.current.isPositioned = !1, f(F => (Object.assign(Object.assign({}, F), { isPositioned: !1 })))); }, [c]); const te = u.useRef(!1); Za(() => (te.current = !0, () => { te.current = !1; }), []), Za(() => { if (C && (R.current = C), E && (b.current = E), C && E) {
    if (T.current)
        return T.current(C, E, D);
    D();
} }, [C, E, D, T, k]); const G = u.useMemo(() => ({ reference: R, floating: b, setReference: g, setFloating: w }), [g, w]), U = u.useMemo(() => ({ reference: C, floating: E }), [C, E]), K = u.useMemo(() => { const F = { position: n, left: 0, top: 0 }; if (!U.floating)
    return F; const A = sg(U.floating, d.x), I = sg(U.floating, d.y); return a ? Object.assign(Object.assign(Object.assign({}, F), { transform: "translate(" + A + "px, " + I + "px)" }), qw(U.floating) >= 1.5 && { willChange: "transform" }) : { position: n, left: A, top: I }; }, [n, a, U.floating, d.x, d.y]); return u.useMemo(() => (Object.assign(Object.assign({}, d), { update: D, refs: G, elements: U, floatingStyles: K })), [d, D, G, U, K]); }
const _j = e => { function t(n) { return {}.hasOwnProperty.call(n, "current"); } return { name: "arrow", options: e, fn(n) { const { element: r, padding: o } = typeof e == "function" ? e(n) : e; return r && t(r) ? r.current != null ? ig({ element: r.current, padding: o }).fn(n) : {} : r ? ig({ element: r, padding: o }).fn(n) : {}; } }; }, Mj = (e, t) => (Object.assign(Object.assign({}, Pj(e)), { options: [e, t] })), Ij = (e, t) => (Object.assign(Object.assign({}, Rj(e)), { options: [e, t] })), Dj = (e, t) => (Object.assign(Object.assign({}, Oj(e)), { options: [e, t] })), Lj = (e, t) => (Object.assign(Object.assign({}, Nj(e)), { options: [e, t] })), $j = (e, t) => (Object.assign(Object.assign({}, kj(e)), { options: [e, t] })), Fj = (e, t) => (Object.assign(Object.assign({}, Tj(e)), { options: [e, t] })), zj = (e, t) => (Object.assign(Object.assign({}, _j(e)), { options: [e, t] }));
var Bj = "Arrow", Yw = u.forwardRef((e, t) => { const { children: n, width: r = 10, height: o = 5 } = e, i = __rest(e, ["children", "width", "height"]); return p.jsx(ne.svg, Object.assign(Object.assign({}, i), { ref: t, width: r, height: o, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : p.jsx("polygon", { points: "0,0 30,0 15,10" }) })); });
Yw.displayName = Bj;
var Uj = Yw;
function Xw(e) { const [t, n] = u.useState(void 0); return ze(() => { if (e) {
    n({ width: e.offsetWidth, height: e.offsetHeight });
    const r = new ResizeObserver(o => { if (!Array.isArray(o) || !o.length)
        return; const i = o[0]; let s, a; if ("borderBoxSize" in i) {
        const l = i.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
        s = c.inlineSize, a = c.blockSize;
    }
    else
        s = e.offsetWidth, a = e.offsetHeight; n({ width: s, height: a }); });
    return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
}
else
    n(void 0); }, [e]), t; }
var mh = "Popper", [Jw, bi] = hn(mh), [Vj, Zw] = Jw(mh), e1 = e => { const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null); return p.jsx(Vj, { scope: t, anchor: r, onAnchorChange: o, children: n }); };
e1.displayName = mh;
var t1 = "PopperAnchor", n1 = u.forwardRef((e, t) => { const { __scopePopper: n, virtualRef: r } = e, o = __rest(e, ["__scopePopper", "virtualRef"]), i = Zw(t1, n), s = u.useRef(null), a = ce(t, s); return u.useEffect(() => { i.onAnchorChange((r == null ? void 0 : r.current) || s.current); }), r ? null : p.jsx(ne.div, Object.assign(Object.assign({}, o), { ref: a })); });
n1.displayName = t1;
var vh = "PopperContent", [Hj, Wj] = Jw(vh), r1 = u.forwardRef((e, t) => { var _q, _z; var $, X, pe, oe, Z, L; const { __scopePopper: n, side: r = "bottom", sideOffset: o = 0, align: i = "center", alignOffset: s = 0, arrowPadding: a = 0, avoidCollisions: l = !0, collisionBoundary: c = [], collisionPadding: d = 0, sticky: f = "partial", hideWhenDetached: h = !1, updatePositionStrategy: x = "optimized", onPlaced: y } = e, v = __rest(e, ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"]), S = Zw(vh, n), [m, g] = u.useState(null), w = ce(t, ie => g(ie)), [C, E] = u.useState(null), R = Xw(C), b = (_q = (R == null ? void 0 : R.width)) !== null && _q !== void 0 ? _q : 0, P = (_z = (R == null ? void 0 : R.height)) !== null && _z !== void 0 ? _z : 0, k = r + (i !== "center" ? "-" + i : ""), T = typeof d == "number" ? d : Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, d), M = Array.isArray(c) ? c : [c], D = M.length > 0, te = { padding: T, boundary: M.filter(Gj), altBoundary: D }, { refs: G, floatingStyles: U, placement: K, isPositioned: F, middlewareData: A } = Aj({ strategy: "fixed", placement: k, whileElementsMounted: (...ie) => bj(...ie, { animationFrame: x === "always" }), elements: { reference: S.anchor }, middleware: [Mj({ mainAxis: o + P, alignmentAxis: s }), l && Ij(Object.assign({ mainAxis: !0, crossAxis: !1, limiter: f === "partial" ? Dj() : void 0 }, te)), l && Lj(Object.assign({}, te)), $j(Object.assign(Object.assign({}, te), { apply: ({ elements: ie, rects: he, availableWidth: Ee, availableHeight: Ke }) => { const { width: Ze, height: Pt } = he.reference, at = ie.floating.style; at.setProperty("--radix-popper-available-width", `${Ee}px`), at.setProperty("--radix-popper-available-height", `${Ke}px`), at.setProperty("--radix-popper-anchor-width", `${Ze}px`), at.setProperty("--radix-popper-anchor-height", `${Pt}px`); } })), C && zj({ element: C, padding: a }), Qj({ arrowWidth: b, arrowHeight: P }), h && Fj(Object.assign({ strategy: "referenceHidden" }, te))] }), [I, Q] = s1(K), ee = Ve(y); ze(() => { F && (ee == null || ee()); }, [F, ee]); const j = ($ = A.arrow) == null ? void 0 : $.x, V = (X = A.arrow) == null ? void 0 : X.y, q = ((pe = A.arrow) == null ? void 0 : pe.centerOffset) !== 0, [z, Y] = u.useState(); return ze(() => { m && Y(window.getComputedStyle(m).zIndex); }, [m]), p.jsx("div", { ref: G.setFloating, "data-radix-popper-content-wrapper": "", style: Object.assign(Object.assign(Object.assign({}, U), { transform: F ? U.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: z, "--radix-popper-transform-origin": [(oe = A.transformOrigin) == null ? void 0 : oe.x, (Z = A.transformOrigin) == null ? void 0 : Z.y].join(" ") }), ((L = A.hide) == null ? void 0 : L.referenceHidden) && { visibility: "hidden", pointerEvents: "none" }), dir: e.dir, children: p.jsx(Hj, { scope: n, placedSide: I, onArrowChange: E, arrowX: j, arrowY: V, shouldHideArrow: q, children: p.jsx(ne.div, Object.assign(Object.assign({ "data-side": I, "data-align": Q }, v), { ref: w, style: Object.assign(Object.assign({}, v.style), { animation: F ? void 0 : "none" }) })) }) }); });
r1.displayName = vh;
var o1 = "PopperArrow", Kj = { top: "bottom", right: "left", bottom: "top", left: "right" }, i1 = u.forwardRef(function (t, n) { const { __scopePopper: r } = t, o = __rest(t, ["__scopePopper"]), i = Wj(o1, r), s = Kj[i.placedSide]; return p.jsx("span", { ref: i.onArrowChange, style: { position: "absolute", left: i.arrowX, top: i.arrowY, [s]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[i.placedSide], visibility: i.shouldHideArrow ? "hidden" : void 0 }, children: p.jsx(Uj, Object.assign(Object.assign({}, o), { ref: n, style: Object.assign(Object.assign({}, o.style), { display: "block" }) })) }); });
i1.displayName = o1;
function Gj(e) { return e !== null; }
var Qj = e => ({ name: "transformOrigin", options: e, fn(t) { var _q, _z; var S, m, g; const { placement: n, rects: r, middlewareData: o } = t, s = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, d] = s1(n), f = { start: "0%", center: "50%", end: "100%" }[d], h = ((_q = ((m = o.arrow) == null ? void 0 : m.x)) !== null && _q !== void 0 ? _q : 0) + a / 2, x = ((_z = ((g = o.arrow) == null ? void 0 : g.y)) !== null && _z !== void 0 ? _z : 0) + l / 2; let y = "", v = ""; return c === "bottom" ? (y = s ? f : `${h}px`, v = `${-l}px`) : c === "top" ? (y = s ? f : `${h}px`, v = `${r.floating.height + l}px`) : c === "right" ? (y = `${-l}px`, v = s ? f : `${x}px`) : c === "left" && (y = `${r.floating.width + l}px`, v = s ? f : `${x}px`), { data: { x: y, y: v } }; } });
function s1(e) { const [t, n = "center"] = e.split("-"); return [t, n]; }
var gh = e1, fc = n1, yh = r1, xh = i1, qj = "Portal", pc = u.forwardRef((e, t) => { var a; const { container: n } = e, r = __rest(e, ["container"]), [o, i] = u.useState(!1); ze(() => i(!0), []); const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body); return s ? zp.createPortal(p.jsx(ne.div, Object.assign(Object.assign({}, r), { ref: t })), s) : null; });
pc.displayName = qj;
var Yj = function (e) { if (typeof document > "u")
    return null; var t = Array.isArray(e) ? e[0] : e; return t.ownerDocument.body; }, ao = new WeakMap, ja = new WeakMap, Aa = {}, _u = 0, a1 = function (e) { return e && (e.host || a1(e.parentNode)); }, Xj = function (e, t) { return t.map(function (n) { if (e.contains(n))
    return n; var r = a1(n); return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null); }).filter(function (n) { return !!n; }); }, Jj = function (e, t, n, r) { var o = Xj(t, Array.isArray(e) ? e : [e]); Aa[n] || (Aa[n] = new WeakMap); var i = Aa[n], s = [], a = new Set, l = new Set(o), c = function (f) { !f || a.has(f) || (a.add(f), c(f.parentNode)); }; o.forEach(c); var d = function (f) { !f || l.has(f) || Array.prototype.forEach.call(f.children, function (h) { if (a.has(h))
    d(h);
else
    try {
        var x = h.getAttribute(r), y = x !== null && x !== "false", v = (ao.get(h) || 0) + 1, S = (i.get(h) || 0) + 1;
        ao.set(h, v), i.set(h, S), s.push(h), v === 1 && y && ja.set(h, !0), S === 1 && h.setAttribute(n, "true"), y || h.setAttribute(r, "true");
    }
    catch (m) {
        console.error("aria-hidden: cannot operate on ", h, m);
    } }); }; return d(t), a.clear(), _u++, function () { s.forEach(function (f) { var h = ao.get(f) - 1, x = i.get(f) - 1; ao.set(f, h), i.set(f, x), h || (ja.has(f) || f.removeAttribute(r), ja.delete(f)), x || f.removeAttribute(n); }), _u--, _u || (ao = new WeakMap, ao = new WeakMap, ja = new WeakMap, Aa = {}); }; }, hc = function (e, t, n) { n === void 0 && (n = "data-aria-hidden"); var r = Array.from(Array.isArray(e) ? e : [e]), o = Yj(e); return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Jj(r, o, n, "aria-hidden")) : function () { return null; }; }, Xe = function () { return Xe = Object.assign || function (t) { for (var n, r = 1, o = arguments.length; r < o; r++) {
    n = arguments[r];
    for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
} return t; }, Xe.apply(this, arguments); };
function wh(e, t) { var n = {}; for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]); return n; }
function l1(e, t, n) { if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
        (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]); return e.concat(i || Array.prototype.slice.call(t)); }
var os = "right-scroll-bar-position", is = "width-before-scroll-bar", Zj = "with-scroll-bars-hidden", eA = "--removed-body-scroll-bar-size";
function Mu(e, t) { return typeof e == "function" ? e(t) : e && (e.current = t), e; }
function tA(e, t) { var n = u.useState(function () { return { value: e, callback: t, facade: { get current() { return n.value; }, set current(r) { var o = n.value; o !== r && (n.value = r, n.callback(r, o)); } } }; })[0]; return n.callback = t, n.facade; }
var nA = typeof window < "u" ? u.useLayoutEffect : u.useEffect, lg = new WeakMap;
function c1(e, t) { var n = tA(null, function (r) { return e.forEach(function (o) { return Mu(o, r); }); }); return nA(function () { var r = lg.get(n); if (r) {
    var o = new Set(r), i = new Set(e), s = n.current;
    o.forEach(function (a) { i.has(a) || Mu(a, null); }), i.forEach(function (a) { o.has(a) || Mu(a, s); });
} lg.set(n, e); }, [e]), n; }
function rA(e) { return e; }
function oA(e, t) { t === void 0 && (t = rA); var n = [], r = !1, o = { read: function () { if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."); return n.length ? n[n.length - 1] : e; }, useMedium: function (i) { var s = t(i, r); return n.push(s), function () { n = n.filter(function (a) { return a !== s; }); }; }, assignSyncMedium: function (i) { for (r = !0; n.length;) {
        var s = n;
        n = [], s.forEach(i);
    } n = { push: function (a) { return i(a); }, filter: function () { return n; } }; }, assignMedium: function (i) { r = !0; var s = []; if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
    } var l = function () { var d = s; s = [], d.forEach(i); }, c = function () { return Promise.resolve().then(l); }; c(), n = { push: function (d) { s.push(d), c(); }, filter: function (d) { return s = s.filter(d), n; } }; } }; return o; }
function u1(e) { e === void 0 && (e = {}); var t = oA(null); return t.options = Xe({ async: !0, ssr: !1 }, e), t; }
var d1 = function (e) { var t = e.sideCar, n = wh(e, ["sideCar"]); if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car"); var r = t.read(); if (!r)
    throw new Error("Sidecar medium not found"); return u.createElement(r, Xe({}, n)); };
d1.isSideCarExport = !0;
function f1(e, t) { return e.useMedium(t), d1; }
var p1 = u1(), Iu = function () { }, mc = u.forwardRef(function (e, t) { var n = u.useRef(null), r = u.useState({ onScrollCapture: Iu, onWheelCapture: Iu, onTouchMoveCapture: Iu }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, f = e.shards, h = e.sideCar, x = e.noIsolation, y = e.inert, v = e.allowPinchZoom, S = e.as, m = S === void 0 ? "div" : S, g = e.gapMode, w = wh(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = h, E = c1([n, t]), R = Xe(Xe({}, w), o); return u.createElement(u.Fragment, null, d && u.createElement(C, { sideCar: p1, removeScrollBar: c, shards: f, noIsolation: x, inert: y, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: g }), s ? u.cloneElement(u.Children.only(a), Xe(Xe({}, R), { ref: E })) : u.createElement(m, Xe({}, R, { className: l, ref: E }), a)); });
mc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
mc.classNames = { fullWidth: is, zeroRight: os };
var iA = function () { if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__; };
function sA() { if (!document)
    return null; var e = document.createElement("style"); e.type = "text/css"; var t = iA(); return t && e.setAttribute("nonce", t), e; }
function aA(e, t) { e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)); }
function lA(e) { var t = document.head || document.getElementsByTagName("head")[0]; t.appendChild(e); }
var cA = function () { var e = 0, t = null; return { add: function (n) { e == 0 && (t = sA()) && (aA(t, n), lA(t)), e++; }, remove: function () { e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null); } }; }, uA = function () { var e = cA(); return function (t, n) { u.useEffect(function () { return e.add(t), function () { e.remove(); }; }, [t && n]); }; }, Sh = function () { var e = uA(), t = function (n) { var r = n.styles, o = n.dynamic; return e(r, o), null; }; return t; }, dA = { left: 0, top: 0, right: 0, gap: 0 }, Du = function (e) { return parseInt(e || "", 10) || 0; }, fA = function (e) { var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"]; return [Du(n), Du(r), Du(o)]; }, pA = function (e) { if (e === void 0 && (e = "margin"), typeof window > "u")
    return dA; var t = fA(e), n = document.documentElement.clientWidth, r = window.innerWidth; return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) }; }, hA = Sh(), Io = "data-scroll-locked", mA = function (e, t, n, r) {
    var o = e.left, i = e.top, s = e.right, a = e.gap;
    return n === void 0 && (n = "margin"), `
  .`.concat(Zj, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Io, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(os, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(is, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(os, " .").concat(os, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(is, " .").concat(is, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Io, `] {
    `).concat(eA, ": ").concat(a, `px;
  }
`);
}, cg = function () { var e = parseInt(document.body.getAttribute(Io) || "0", 10); return isFinite(e) ? e : 0; }, vA = function () { u.useEffect(function () { return document.body.setAttribute(Io, (cg() + 1).toString()), function () { var e = cg() - 1; e <= 0 ? document.body.removeAttribute(Io) : document.body.setAttribute(Io, e.toString()); }; }, []); }, h1 = function (e) { var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r; vA(); var i = u.useMemo(function () { return pA(o); }, [o]); return u.createElement(hA, { styles: mA(i, !t, o, n ? "" : "!important") }); }, Ef = !1;
if (typeof window < "u")
    try {
        var _a = Object.defineProperty({}, "passive", { get: function () { return Ef = !0, !0; } });
        window.addEventListener("test", _a, _a), window.removeEventListener("test", _a, _a);
    }
    catch (_4) {
        Ef = !1;
    }
var lo = Ef ? { passive: !1 } : !1, gA = function (e) { return e.tagName === "TEXTAREA"; }, m1 = function (e, t) { var n = window.getComputedStyle(e); return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !gA(e) && n[t] === "visible"); }, yA = function (e) { return m1(e, "overflowY"); }, xA = function (e) { return m1(e, "overflowX"); }, ug = function (e, t) { var n = t.ownerDocument, r = t; do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = v1(e, r);
    if (o) {
        var i = g1(e, r), s = i[1], a = i[2];
        if (s > a)
            return !0;
    }
    r = r.parentNode;
} while (r && r !== n.body); return !1; }, wA = function (e) { var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight; return [t, n, r]; }, SA = function (e) { var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth; return [t, n, r]; }, v1 = function (e, t) { return e === "v" ? yA(t) : xA(t); }, g1 = function (e, t) { return e === "v" ? wA(t) : SA(t); }, CA = function (e, t) { return e === "h" && t === "rtl" ? -1 : 1; }, EA = function (e, t, n, r, o) { var i = CA(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, l = t.contains(a), c = !1, d = s > 0, f = 0, h = 0; do {
    var x = g1(e, a), y = x[0], v = x[1], S = x[2], m = v - S - i * y;
    (y || m) && v1(e, a) && (f += m, h += y), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
} while (!l && a !== document.body || l && (t.contains(a) || t === a)); return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(h) < 1 || !o)) && (c = !0), c; }, Ma = function (e) { return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]; }, dg = function (e) { return [e.deltaX, e.deltaY]; }, fg = function (e) { return e && "current" in e ? e.current : e; }, bA = function (e, t) { return e[0] === t[0] && e[1] === t[1]; }, PA = function (e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, RA = 0, co = [];
function NA(e) { var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(RA++)[0], i = u.useState(Sh)[0], s = u.useRef(e); u.useEffect(function () { s.current = e; }, [e]), u.useEffect(function () { if (e.inert) {
    document.body.classList.add("block-interactivity-".concat(o));
    var v = l1([e.lockRef.current], (e.shards || []).map(fg), !0).filter(Boolean);
    return v.forEach(function (S) { return S.classList.add("allow-interactivity-".concat(o)); }), function () { document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function (S) { return S.classList.remove("allow-interactivity-".concat(o)); }); };
} }, [e.inert, e.lockRef.current, e.shards]); var a = u.useCallback(function (v, S) { if ("touches" in v && v.touches.length === 2)
    return !s.current.allowPinchZoom; var m = Ma(v), g = n.current, w = "deltaX" in v ? v.deltaX : g[0] - m[0], C = "deltaY" in v ? v.deltaY : g[1] - m[1], E, R = v.target, b = Math.abs(w) > Math.abs(C) ? "h" : "v"; if ("touches" in v && b === "h" && R.type === "range")
    return !1; var P = ug(b, R); if (!P)
    return !0; if (P ? E = b : (E = b === "v" ? "h" : "v", P = ug(b, R)), !P)
    return !1; if (!r.current && "changedTouches" in v && (w || C) && (r.current = E), !E)
    return !0; var k = r.current || E; return EA(k, S, v, k === "h" ? w : C, !0); }, []), l = u.useCallback(function (v) { var S = v; if (!(!co.length || co[co.length - 1] !== i)) {
    var m = "deltaY" in S ? dg(S) : Ma(S), g = t.current.filter(function (E) { return E.name === S.type && (E.target === S.target || S.target === E.shadowParent) && bA(E.delta, m); })[0];
    if (g && g.should) {
        S.cancelable && S.preventDefault();
        return;
    }
    if (!g) {
        var w = (s.current.shards || []).map(fg).filter(Boolean).filter(function (E) { return E.contains(S.target); }), C = w.length > 0 ? a(S, w[0]) : !s.current.noIsolation;
        C && S.cancelable && S.preventDefault();
    }
} }, []), c = u.useCallback(function (v, S, m, g) { var w = { name: v, delta: S, target: m, should: g, shadowParent: kA(m) }; t.current.push(w), setTimeout(function () { t.current = t.current.filter(function (C) { return C !== w; }); }, 1); }, []), d = u.useCallback(function (v) { n.current = Ma(v), r.current = void 0; }, []), f = u.useCallback(function (v) { c(v.type, dg(v), v.target, a(v, e.lockRef.current)); }, []), h = u.useCallback(function (v) { c(v.type, Ma(v), v.target, a(v, e.lockRef.current)); }, []); u.useEffect(function () { return co.push(i), e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: h }), document.addEventListener("wheel", l, lo), document.addEventListener("touchmove", l, lo), document.addEventListener("touchstart", d, lo), function () { co = co.filter(function (v) { return v !== i; }), document.removeEventListener("wheel", l, lo), document.removeEventListener("touchmove", l, lo), document.removeEventListener("touchstart", d, lo); }; }, []); var x = e.removeScrollBar, y = e.inert; return u.createElement(u.Fragment, null, y ? u.createElement(i, { styles: PA(o) }) : null, x ? u.createElement(h1, { gapMode: e.gapMode }) : null); }
function kA(e) { for (var t = null; e !== null;)
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode; return t; }
const TA = f1(p1, NA);
var vc = u.forwardRef(function (e, t) { return u.createElement(mc, Xe({}, e, { ref: t, sideCar: TA })); });
vc.classNames = mc.classNames;
var Ch = "Popover", [y1, cL] = hn(Ch, [bi]), ta = bi(), [OA, Sr] = y1(Ch), x1 = e => { const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: s = !1 } = e, a = ta(t), l = u.useRef(null), [c, d] = u.useState(!1), [f = !1, h] = It({ prop: r, defaultProp: o, onChange: i }); return p.jsx(gh, Object.assign(Object.assign({}, a), { children: p.jsx(OA, { scope: t, contentId: Kt(), triggerRef: l, open: f, onOpenChange: h, onOpenToggle: u.useCallback(() => h(x => !x), [h]), hasCustomAnchor: c, onCustomAnchorAdd: u.useCallback(() => d(!0), []), onCustomAnchorRemove: u.useCallback(() => d(!1), []), modal: s, children: n }) })); };
x1.displayName = Ch;
var w1 = "PopoverAnchor", jA = u.forwardRef((e, t) => { const { __scopePopover: n } = e, r = __rest(e, ["__scopePopover"]), o = Sr(w1, n), i = ta(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o; return u.useEffect(() => (s(), () => a()), [s, a]), p.jsx(fc, Object.assign(Object.assign(Object.assign({}, i), r), { ref: t })); });
jA.displayName = w1;
var S1 = "PopoverTrigger", C1 = u.forwardRef((e, t) => { const { __scopePopover: n } = e, r = __rest(e, ["__scopePopover"]), o = Sr(S1, n), i = ta(n), s = ce(t, o.triggerRef), a = p.jsx(ne.button, Object.assign(Object.assign({ type: "button", "aria-haspopup": "dialog", "aria-expanded": o.open, "aria-controls": o.contentId, "data-state": N1(o.open) }, r), { ref: s, onClick: W(e.onClick, o.onOpenToggle) })); return o.hasCustomAnchor ? a : p.jsx(fc, Object.assign(Object.assign({ asChild: !0 }, i), { children: a })); });
C1.displayName = S1;
var Eh = "PopoverPortal", [AA, _A] = y1(Eh, { forceMount: void 0 }), E1 = e => { const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = Sr(Eh, t); return p.jsx(AA, { scope: t, forceMount: n, children: p.jsx(Xt, { present: n || i.open, children: p.jsx(pc, { asChild: !0, container: o, children: r }) }) }); };
E1.displayName = Eh;
var si = "PopoverContent", b1 = u.forwardRef((e, t) => { const n = _A(si, e.__scopePopover), { forceMount: r = n.forceMount } = e, o = __rest(e, ["forceMount"]), i = Sr(si, e.__scopePopover); return p.jsx(Xt, { present: r || i.open, children: i.modal ? p.jsx(MA, Object.assign(Object.assign({}, o), { ref: t })) : p.jsx(IA, Object.assign(Object.assign({}, o), { ref: t })) }); });
b1.displayName = si;
var MA = u.forwardRef((e, t) => { const n = Sr(si, e.__scopePopover), r = u.useRef(null), o = ce(t, r), i = u.useRef(!1); return u.useEffect(() => { const s = r.current; if (s)
    return hc(s); }, []), p.jsx(vc, { as: hr, allowPinchZoom: !0, children: p.jsx(P1, Object.assign(Object.assign({}, e), { ref: o, trapFocus: n.open, disableOutsidePointerEvents: !0, onCloseAutoFocus: W(e.onCloseAutoFocus, s => { var a; s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus(); }), onPointerDownOutside: W(e.onPointerDownOutside, s => { const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, c = a.button === 2 || l; i.current = c; }, { checkForDefaultPrevented: !1 }), onFocusOutside: W(e.onFocusOutside, s => s.preventDefault(), { checkForDefaultPrevented: !1 }) })) }); }), IA = u.forwardRef((e, t) => { const n = Sr(si, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1); return p.jsx(P1, Object.assign(Object.assign({}, e), { ref: t, trapFocus: !1, disableOutsidePointerEvents: !1, onCloseAutoFocus: i => { var s, a; (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1; }, onInteractOutside: i => { var l, c; (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0)); const s = i.target; ((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault(); } })); }), P1 = u.forwardRef((e, t) => { const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: s, onEscapeKeyDown: a, onPointerDownOutside: l, onFocusOutside: c, onInteractOutside: d } = e, f = __rest(e, ["__scopePopover", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus", "disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside"]), h = Sr(si, n), x = ta(n); return lh(), p.jsx(cc, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: i, children: p.jsx(vi, { asChild: !0, disableOutsidePointerEvents: s, onInteractOutside: d, onEscapeKeyDown: a, onPointerDownOutside: l, onFocusOutside: c, onDismiss: () => h.onOpenChange(!1), children: p.jsx(yh, Object.assign(Object.assign(Object.assign({ "data-state": N1(h.open), role: "dialog", id: h.contentId }, x), f), { ref: t, style: Object.assign(Object.assign({}, f.style), { "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" }) })) }) }); }), R1 = "PopoverClose", DA = u.forwardRef((e, t) => { const { __scopePopover: n } = e, r = __rest(e, ["__scopePopover"]), o = Sr(R1, n); return p.jsx(ne.button, Object.assign(Object.assign({ type: "button" }, r), { ref: t, onClick: W(e.onClick, () => o.onOpenChange(!1)) })); });
DA.displayName = R1;
var LA = "PopoverArrow", $A = u.forwardRef((e, t) => { const { __scopePopover: n } = e, r = __rest(e, ["__scopePopover"]), o = ta(n); return p.jsx(xh, Object.assign(Object.assign(Object.assign({}, o), r), { ref: t })); });
$A.displayName = LA;
function N1(e) { return e ? "open" : "closed"; }
var FA = x1, zA = C1, BA = E1, k1 = b1;
const T1 = FA, O1 = zA, bh = u.forwardRef((_q, o) => {
    var { className: e, align: t = "center", sideOffset: n = 4 } = _q, r = __rest(_q, ["className", "align", "sideOffset"]);
    return p.jsx(BA, { children: p.jsx(k1, Object.assign({ ref: o, align: t, sideOffset: n, className: J("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e) }, r)) });
});
bh.displayName = k1.displayName;
const UA = Xs("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90", outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-10 px-4 py-2", sm: "h-9 rounded-md px-3", lg: "h-11 rounded-md px-8", icon: "h-10 w-10" } }, defaultVariants: { variant: "default", size: "default" } }), Oe = u.forwardRef((_q, i) => { var { className: e, variant: t, size: n, asChild: r = !1 } = _q, o = __rest(_q, ["className", "variant", "size", "asChild"]); const s = r ? hr : "button"; return p.jsx(s, Object.assign({ className: J(UA({ variant: t, size: n, className: e })), ref: i }, o)); });
Oe.displayName = "Button";
var pg = 1, VA = .9, HA = .8, WA = .17, Lu = .1, $u = .999, KA = .9999, GA = .99, QA = /[\\\/_+.#"@\[\(\{&]/, qA = /[\\\/_+.#"@\[\(\{&]/g, YA = /[\s-]/, j1 = /[\s-]/g;
function bf(e, t, n, r, o, i, s) { if (i === t.length)
    return o === e.length ? pg : GA; var a = `${o},${i}`; if (s[a] !== void 0)
    return s[a]; for (var l = r.charAt(i), c = n.indexOf(l, o), d = 0, f, h, x, y; c >= 0;)
    f = bf(e, t, n, r, c + 1, i + 1, s), f > d && (c === o ? f *= pg : QA.test(e.charAt(c - 1)) ? (f *= HA, x = e.slice(o, c - 1).match(qA), x && o > 0 && (f *= Math.pow($u, x.length))) : YA.test(e.charAt(c - 1)) ? (f *= VA, y = e.slice(o, c - 1).match(j1), y && o > 0 && (f *= Math.pow($u, y.length))) : (f *= WA, o > 0 && (f *= Math.pow($u, c - o))), e.charAt(c) !== t.charAt(i) && (f *= KA)), (f < Lu && n.charAt(c - 1) === r.charAt(i + 1) || r.charAt(i + 1) === r.charAt(i) && n.charAt(c - 1) !== r.charAt(i)) && (h = bf(e, t, n, r, c + 1, i + 2, s), h * Lu > f && (f = h * Lu)), f > d && (d = f), c = n.indexOf(l, c + 1); return s[a] = d, d; }
function hg(e) { return e.toLowerCase().replace(j1, " "); }
function XA(e, t, n) { return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, bf(e, t, hg(e), hg(t), 0, 0, {}); }
function ot() { return ot = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, ot.apply(null, arguments); }
function Do(e, t, { checkForDefaultPrevented: n = !0 } = {}) { return function (o) { if (e == null || e(o), n === !1 || !o.defaultPrevented)
    return t == null ? void 0 : t(o); }; }
function JA(e, t) { typeof e == "function" ? e(t) : e != null && (e.current = t); }
function A1(...e) { return t => e.forEach(n => JA(n, t)); }
function na(...e) { return u.useCallback(A1(...e), e); }
function ZA(e, t = []) { let n = []; function r(i, s) { const a = u.createContext(s), l = n.length; n = [...n, s]; function c(f) { const { scope: h, children: x } = f, y = __rest(f, ["scope", "children"]), v = (h == null ? void 0 : h[e][l]) || a, S = u.useMemo(() => y, Object.values(y)); return u.createElement(v.Provider, { value: S }, x); } function d(f, h) { const x = (h == null ? void 0 : h[e][l]) || a, y = u.useContext(x); if (y)
    return y; if (s !== void 0)
    return s; throw new Error(`\`${f}\` must be used within \`${i}\``); } return c.displayName = i + "Provider", [c, d]; } const o = () => { const i = n.map(s => u.createContext(s)); return function (a) { const l = (a == null ? void 0 : a[e]) || i; return u.useMemo(() => ({ [`__scope${e}`]: Object.assign(Object.assign({}, a), { [e]: l }) }), [a, l]); }; }; return o.scopeName = e, [r, e_(o, ...t)]; }
function e_(...e) { const t = e[0]; if (e.length === 1)
    return t; const n = () => { const r = e.map(o => ({ useScope: o(), scopeName: o.scopeName })); return function (i) { const s = r.reduce((a, { useScope: l, scopeName: c }) => { const f = l(i)[`__scope${c}`]; return Object.assign(Object.assign({}, a), f); }, {}); return u.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]); }; }; return n.scopeName = t.scopeName, n; }
const Pf = globalThis != null && globalThis.document ? u.useLayoutEffect : () => { }, t_ = qf.useId || (() => { });
let n_ = 0;
function Fu(e) { const [t, n] = u.useState(t_()); return Pf(() => { e || n(r => r !== null && r !== void 0 ? r : String(n_++)); }, [e]), e || (t ? `radix-${t}` : ""); }
function qr(e) { const t = u.useRef(e); return u.useEffect(() => { t.current = e; }), u.useMemo(() => (...n) => { var r; return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n); }, []); }
function r_({ prop: e, defaultProp: t, onChange: n = () => { } }) { const [r, o] = o_({ defaultProp: t, onChange: n }), i = e !== void 0, s = i ? e : r, a = qr(n), l = u.useCallback(c => { if (i) {
    const f = typeof c == "function" ? c(e) : c;
    f !== e && a(f);
}
else
    o(c); }, [i, e, o, a]); return [s, l]; }
function o_({ defaultProp: e, onChange: t }) { const n = u.useState(e), [r] = n, o = u.useRef(r), i = qr(t); return u.useEffect(() => { o.current !== r && (i(r), o.current = r); }, [r, o, i]), n; }
const Ph = u.forwardRef((e, t) => { const { children: n } = e, r = __rest(e, ["children"]), o = u.Children.toArray(n), i = o.find(s_); if (i) {
    const s = i.props.children, a = o.map(l => l === i ? u.Children.count(s) > 1 ? u.Children.only(null) : u.isValidElement(s) ? s.props.children : null : l);
    return u.createElement(Rf, ot({}, r, { ref: t }), u.isValidElement(s) ? u.cloneElement(s, void 0, a) : null);
} return u.createElement(Rf, ot({}, r, { ref: t }), n); });
Ph.displayName = "Slot";
const Rf = u.forwardRef((e, t) => { const { children: n } = e, r = __rest(e, ["children"]); return u.isValidElement(n) ? u.cloneElement(n, Object.assign(Object.assign({}, a_(r, n.props)), { ref: t ? A1(t, n.ref) : n.ref })) : u.Children.count(n) > 1 ? u.Children.only(null) : null; });
Rf.displayName = "SlotClone";
const i_ = ({ children: e }) => u.createElement(u.Fragment, null, e);
function s_(e) { return u.isValidElement(e) && e.type === i_; }
function a_(e, t) { const n = Object.assign({}, t); for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => { i(...a), o(...a); } : o && (n[r] = o) : r === "style" ? n[r] = Object.assign(Object.assign({}, o), i) : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
} return Object.assign(Object.assign({}, e), n); }
const l_ = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"], Lt = l_.reduce((e, t) => { const n = u.forwardRef((r, o) => { const { asChild: i } = r, s = __rest(r, ["asChild"]), a = i ? Ph : t; return u.useEffect(() => { window[Symbol.for("radix-ui")] = !0; }, []), u.createElement(a, ot({}, s, { ref: o })); }); return n.displayName = `Primitive.${t}`, Object.assign(Object.assign({}, e), { [t]: n }); }, {});
function c_(e, t) { e && _n.flushSync(() => e.dispatchEvent(t)); }
function u_(e, t = globalThis == null ? void 0 : globalThis.document) { const n = qr(e); u.useEffect(() => { const r = o => { o.key === "Escape" && n(o); }; return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r); }, [n, t]); }
const Nf = "dismissableLayer.update", d_ = "dismissableLayer.pointerDownOutside", f_ = "dismissableLayer.focusOutside";
let mg;
const p_ = u.createContext({ layers: new Set, layersWithOutsidePointerEventsDisabled: new Set, branches: new Set }), h_ = u.forwardRef((e, t) => { var n; const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: a, onDismiss: l } = e, c = __rest(e, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]), d = u.useContext(p_), [f, h] = u.useState(null), x = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, y] = u.useState({}), v = na(t, P => h(P)), S = Array.from(d.layers), [m] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), g = S.indexOf(m), w = f ? S.indexOf(f) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= g, R = m_(P => { const k = P.target, T = [...d.branches].some(M => M.contains(k)); !E || T || (i == null || i(P), a == null || a(P), P.defaultPrevented || l == null || l()); }, x), b = v_(P => { const k = P.target; [...d.branches].some(M => M.contains(k)) || (s == null || s(P), a == null || a(P), P.defaultPrevented || l == null || l()); }, x); return u_(P => { w === d.layers.size - 1 && (o == null || o(P), !P.defaultPrevented && l && (P.preventDefault(), l())); }, x), u.useEffect(() => { if (f)
    return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (mg = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), vg(), () => { r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = mg); }; }, [f, x, r, d]), u.useEffect(() => () => { f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), vg()); }, [f, d]), u.useEffect(() => { const P = () => y({}); return document.addEventListener(Nf, P), () => document.removeEventListener(Nf, P); }, []), u.createElement(Lt.div, ot({}, c, { ref: v, style: Object.assign({ pointerEvents: C ? E ? "auto" : "none" : void 0 }, e.style), onFocusCapture: Do(e.onFocusCapture, b.onFocusCapture), onBlurCapture: Do(e.onBlurCapture, b.onBlurCapture), onPointerDownCapture: Do(e.onPointerDownCapture, R.onPointerDownCapture) })); });
function m_(e, t = globalThis == null ? void 0 : globalThis.document) { const n = qr(e), r = u.useRef(!1), o = u.useRef(() => { }); return u.useEffect(() => { const i = a => { if (a.target && !r.current) {
    let d = function () { _1(d_, n, c, { discrete: !0 }); };
    var l = d;
    const c = { originalEvent: a };
    a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = d, t.addEventListener("click", o.current, { once: !0 })) : d();
}
else
    t.removeEventListener("click", o.current); r.current = !1; }, s = window.setTimeout(() => { t.addEventListener("pointerdown", i); }, 0); return () => { window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current); }; }, [t, n]), { onPointerDownCapture: () => r.current = !0 }; }
function v_(e, t = globalThis == null ? void 0 : globalThis.document) { const n = qr(e), r = u.useRef(!1); return u.useEffect(() => { const o = i => { i.target && !r.current && _1(f_, n, { originalEvent: i }, { discrete: !1 }); }; return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o); }, [t, n]), { onFocusCapture: () => r.current = !0, onBlurCapture: () => r.current = !1 }; }
function vg() { const e = new CustomEvent(Nf); document.dispatchEvent(e); }
function _1(e, t, n, { discrete: r }) { const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n }); t && o.addEventListener(e, t, { once: !0 }), r ? c_(o, i) : o.dispatchEvent(i); }
const zu = "focusScope.autoFocusOnMount", Bu = "focusScope.autoFocusOnUnmount", gg = { bubbles: !1, cancelable: !0 }, g_ = u.forwardRef((e, t) => { const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i } = e, s = __rest(e, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]), [a, l] = u.useState(null), c = qr(o), d = qr(i), f = u.useRef(null), h = na(t, v => l(v)), x = u.useRef({ paused: !1, pause() { this.paused = !0; }, resume() { this.paused = !1; } }).current; u.useEffect(() => { if (r) {
    let g = function (R) { if (x.paused || !a)
        return; const b = R.target; a.contains(b) ? f.current = b : Un(f.current, { select: !0 }); }, w = function (R) { if (x.paused || !a)
        return; const b = R.relatedTarget; b !== null && (a.contains(b) || Un(f.current, { select: !0 })); }, C = function (R) { if (document.activeElement === document.body)
        for (const P of R)
            P.removedNodes.length > 0 && Un(a); };
    var v = g, S = w, m = C;
    document.addEventListener("focusin", g), document.addEventListener("focusout", w);
    const E = new MutationObserver(C);
    return a && E.observe(a, { childList: !0, subtree: !0 }), () => { document.removeEventListener("focusin", g), document.removeEventListener("focusout", w), E.disconnect(); };
} }, [r, a, x.paused]), u.useEffect(() => { if (a) {
    xg.add(x);
    const v = document.activeElement;
    if (!a.contains(v)) {
        const m = new CustomEvent(zu, gg);
        a.addEventListener(zu, c), a.dispatchEvent(m), m.defaultPrevented || (y_(E_(M1(a)), { select: !0 }), document.activeElement === v && Un(a));
    }
    return () => { a.removeEventListener(zu, c), setTimeout(() => { const m = new CustomEvent(Bu, gg); a.addEventListener(Bu, d), a.dispatchEvent(m), m.defaultPrevented || Un(v !== null && v !== void 0 ? v : document.body, { select: !0 }), a.removeEventListener(Bu, d), xg.remove(x); }, 0); };
} }, [a, c, d, x]); const y = u.useCallback(v => { if (!n && !r || x.paused)
    return; const S = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, m = document.activeElement; if (S && m) {
    const g = v.currentTarget, [w, C] = x_(g);
    w && C ? !v.shiftKey && m === C ? (v.preventDefault(), n && Un(w, { select: !0 })) : v.shiftKey && m === w && (v.preventDefault(), n && Un(C, { select: !0 })) : m === g && v.preventDefault();
} }, [n, r, x.paused]); return u.createElement(Lt.div, ot({ tabIndex: -1 }, s, { ref: h, onKeyDown: y })); });
function y_(e, { select: t = !1 } = {}) { const n = document.activeElement; for (const r of e)
    if (Un(r, { select: t }), document.activeElement !== n)
        return; }
function x_(e) { const t = M1(e), n = yg(t, e), r = yg(t.reverse(), e); return [n, r]; }
function M1(e) { const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: r => { const o = r.tagName === "INPUT" && r.type === "hidden"; return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP; } }); for (; n.nextNode();)
    t.push(n.currentNode); return t; }
function yg(e, t) { for (const n of e)
    if (!w_(n, { upTo: t }))
        return n; }
function w_(e, { upTo: t }) { if (getComputedStyle(e).visibility === "hidden")
    return !0; for (; e;) {
    if (t !== void 0 && e === t)
        return !1;
    if (getComputedStyle(e).display === "none")
        return !0;
    e = e.parentElement;
} return !1; }
function S_(e) { return e instanceof HTMLInputElement && "select" in e; }
function Un(e, { select: t = !1 } = {}) { if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && S_(e) && t && e.select();
} }
const xg = C_();
function C_() { let e = []; return { add(t) { const n = e[0]; t !== n && (n == null || n.pause()), e = wg(e, t), e.unshift(t); }, remove(t) { var n; e = wg(e, t), (n = e[0]) === null || n === void 0 || n.resume(); } }; }
function wg(e, t) { const n = [...e], r = n.indexOf(t); return r !== -1 && n.splice(r, 1), n; }
function E_(e) { return e.filter(t => t.tagName !== "A"); }
const b_ = u.forwardRef((e, t) => { var n; const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body } = e, o = __rest(e, ["container"]); return r ? zp.createPortal(u.createElement(Lt.div, ot({}, o, { ref: t })), r) : null; });
function P_(e, t) { return u.useReducer((n, r) => { const o = t[n][r]; return o !== null && o !== void 0 ? o : n; }, e); }
const gc = e => { const { present: t, children: n } = e, r = R_(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), i = na(r.ref, o.ref); return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: i }) : null; };
gc.displayName = "Presence";
function R_(e) { const [t, n] = u.useState(), r = u.useRef({}), o = u.useRef(e), i = u.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = P_(s, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } }); return u.useEffect(() => { const c = Ia(r.current); i.current = a === "mounted" ? c : "none"; }, [a]), Pf(() => { const c = r.current, d = o.current; if (d !== e) {
    const h = i.current, x = Ia(c);
    e ? l("MOUNT") : x === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && h !== x ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
} }, [e, l]), Pf(() => { if (t) {
    const c = f => { const x = Ia(r.current).includes(f.animationName); f.target === t && x && _n.flushSync(() => l("ANIMATION_END")); }, d = f => { f.target === t && (i.current = Ia(r.current)); };
    return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => { t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c); };
}
else
    l("ANIMATION_END"); }, [t, l]), { isPresent: ["mounted", "unmountSuspended"].includes(a), ref: u.useCallback(c => { c && (r.current = getComputedStyle(c)), n(c); }, []) }; }
function Ia(e) { return (e == null ? void 0 : e.animationName) || "none"; }
let Uu = 0;
function N_() { u.useEffect(() => { var e, t; const n = document.querySelectorAll("[data-radix-focus-guard]"); return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Sg()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Sg()), Uu++, () => { Uu === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(r => r.remove()), Uu--; }; }, []); }
function Sg() { const e = document.createElement("span"); return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e; }
var I1 = u1(), Vu = function () { }, yc = u.forwardRef(function (e, t) { var n = u.useRef(null), r = u.useState({ onScrollCapture: Vu, onWheelCapture: Vu, onTouchMoveCapture: Vu }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, f = e.shards, h = e.sideCar, x = e.noIsolation, y = e.inert, v = e.allowPinchZoom, S = e.as, m = S === void 0 ? "div" : S, g = wh(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), w = h, C = c1([n, t]), E = Xe(Xe({}, g), o); return u.createElement(u.Fragment, null, d && u.createElement(w, { sideCar: I1, removeScrollBar: c, shards: f, noIsolation: x, inert: y, setCallbacks: i, allowPinchZoom: !!v, lockRef: n }), s ? u.cloneElement(u.Children.only(a), Xe(Xe({}, E), { ref: C })) : u.createElement(m, Xe({}, E, { className: l, ref: C }), a)); });
yc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
yc.classNames = { fullWidth: is, zeroRight: os };
var kf = !1;
if (typeof window < "u")
    try {
        var Da = Object.defineProperty({}, "passive", { get: function () { return kf = !0, !0; } });
        window.addEventListener("test", Da, Da), window.removeEventListener("test", Da, Da);
    }
    catch (_5) {
        kf = !1;
    }
var uo = kf ? { passive: !1 } : !1, k_ = function (e) { return e.tagName === "TEXTAREA"; }, D1 = function (e, t) { var n = window.getComputedStyle(e); return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !k_(e) && n[t] === "visible"); }, T_ = function (e) { return D1(e, "overflowY"); }, O_ = function (e) { return D1(e, "overflowX"); }, Cg = function (e, t) { var n = t; do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = L1(e, n);
    if (r) {
        var o = $1(e, n), i = o[1], s = o[2];
        if (i > s)
            return !0;
    }
    n = n.parentNode;
} while (n && n !== document.body); return !1; }, j_ = function (e) { var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight; return [t, n, r]; }, A_ = function (e) { var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth; return [t, n, r]; }, L1 = function (e, t) { return e === "v" ? T_(t) : O_(t); }, $1 = function (e, t) { return e === "v" ? j_(t) : A_(t); }, __ = function (e, t) { return e === "h" && t === "rtl" ? -1 : 1; }, M_ = function (e, t, n, r, o) { var i = __(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, l = t.contains(a), c = !1, d = s > 0, f = 0, h = 0; do {
    var x = $1(e, a), y = x[0], v = x[1], S = x[2], m = v - S - i * y;
    (y || m) && L1(e, a) && (f += m, h += y), a = a.parentNode;
} while (!l && a !== document.body || l && (t.contains(a) || t === a)); return (d && (f === 0 || !o) || !d && (h === 0 || !o)) && (c = !0), c; }, La = function (e) { return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]; }, Eg = function (e) { return [e.deltaX, e.deltaY]; }, bg = function (e) { return e && "current" in e ? e.current : e; }, I_ = function (e, t) { return e[0] === t[0] && e[1] === t[1]; }, D_ = function (e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, L_ = 0, fo = [];
function $_(e) { var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(L_++)[0], i = u.useState(function () { return Sh(); })[0], s = u.useRef(e); u.useEffect(function () { s.current = e; }, [e]), u.useEffect(function () { if (e.inert) {
    document.body.classList.add("block-interactivity-".concat(o));
    var v = l1([e.lockRef.current], (e.shards || []).map(bg), !0).filter(Boolean);
    return v.forEach(function (S) { return S.classList.add("allow-interactivity-".concat(o)); }), function () { document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function (S) { return S.classList.remove("allow-interactivity-".concat(o)); }); };
} }, [e.inert, e.lockRef.current, e.shards]); var a = u.useCallback(function (v, S) { if ("touches" in v && v.touches.length === 2)
    return !s.current.allowPinchZoom; var m = La(v), g = n.current, w = "deltaX" in v ? v.deltaX : g[0] - m[0], C = "deltaY" in v ? v.deltaY : g[1] - m[1], E, R = v.target, b = Math.abs(w) > Math.abs(C) ? "h" : "v"; if ("touches" in v && b === "h" && R.type === "range")
    return !1; var P = Cg(b, R); if (!P)
    return !0; if (P ? E = b : (E = b === "v" ? "h" : "v", P = Cg(b, R)), !P)
    return !1; if (!r.current && "changedTouches" in v && (w || C) && (r.current = E), !E)
    return !0; var k = r.current || E; return M_(k, S, v, k === "h" ? w : C, !0); }, []), l = u.useCallback(function (v) { var S = v; if (!(!fo.length || fo[fo.length - 1] !== i)) {
    var m = "deltaY" in S ? Eg(S) : La(S), g = t.current.filter(function (E) { return E.name === S.type && E.target === S.target && I_(E.delta, m); })[0];
    if (g && g.should) {
        S.cancelable && S.preventDefault();
        return;
    }
    if (!g) {
        var w = (s.current.shards || []).map(bg).filter(Boolean).filter(function (E) { return E.contains(S.target); }), C = w.length > 0 ? a(S, w[0]) : !s.current.noIsolation;
        C && S.cancelable && S.preventDefault();
    }
} }, []), c = u.useCallback(function (v, S, m, g) { var w = { name: v, delta: S, target: m, should: g }; t.current.push(w), setTimeout(function () { t.current = t.current.filter(function (C) { return C !== w; }); }, 1); }, []), d = u.useCallback(function (v) { n.current = La(v), r.current = void 0; }, []), f = u.useCallback(function (v) { c(v.type, Eg(v), v.target, a(v, e.lockRef.current)); }, []), h = u.useCallback(function (v) { c(v.type, La(v), v.target, a(v, e.lockRef.current)); }, []); u.useEffect(function () { return fo.push(i), e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: h }), document.addEventListener("wheel", l, uo), document.addEventListener("touchmove", l, uo), document.addEventListener("touchstart", d, uo), function () { fo = fo.filter(function (v) { return v !== i; }), document.removeEventListener("wheel", l, uo), document.removeEventListener("touchmove", l, uo), document.removeEventListener("touchstart", d, uo); }; }, []); var x = e.removeScrollBar, y = e.inert; return u.createElement(u.Fragment, null, y ? u.createElement(i, { styles: D_(o) }) : null, x ? u.createElement(h1, { gapMode: "margin" }) : null); }
const F_ = f1(I1, $_);
var F1 = u.forwardRef(function (e, t) { return u.createElement(yc, Xe({}, e, { ref: t, sideCar: F_ })); });
F1.classNames = yc.classNames;
const z1 = "Dialog", [B1, uL] = ZA(z1), [z_, io] = B1(z1), B_ = e => { const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: s = !0 } = e, a = u.useRef(null), l = u.useRef(null), [c = !1, d] = r_({ prop: r, defaultProp: o, onChange: i }); return u.createElement(z_, { scope: t, triggerRef: a, contentRef: l, contentId: Fu(), titleId: Fu(), descriptionId: Fu(), open: c, onOpenChange: d, onOpenToggle: u.useCallback(() => d(f => !f), [d]), modal: s }, n); }, U1 = "DialogPortal", [U_, V1] = B1(U1, { forceMount: void 0 }), V_ = e => { const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = io(U1, t); return u.createElement(U_, { scope: t, forceMount: n }, u.Children.map(r, s => u.createElement(gc, { present: n || i.open }, u.createElement(b_, { asChild: !0, container: o }, s)))); }, Tf = "DialogOverlay", H_ = u.forwardRef((e, t) => { const n = V1(Tf, e.__scopeDialog), { forceMount: r = n.forceMount } = e, o = __rest(e, ["forceMount"]), i = io(Tf, e.__scopeDialog); return i.modal ? u.createElement(gc, { present: r || i.open }, u.createElement(W_, ot({}, o, { ref: t }))) : null; }), W_ = u.forwardRef((e, t) => { const { __scopeDialog: n } = e, r = __rest(e, ["__scopeDialog"]), o = io(Tf, n); return u.createElement(F1, { as: Ph, allowPinchZoom: !0, shards: [o.contentRef] }, u.createElement(Lt.div, ot({ "data-state": W1(o.open) }, r, { ref: t, style: Object.assign({ pointerEvents: "auto" }, r.style) }))); }), _s = "DialogContent", K_ = u.forwardRef((e, t) => { const n = V1(_s, e.__scopeDialog), { forceMount: r = n.forceMount } = e, o = __rest(e, ["forceMount"]), i = io(_s, e.__scopeDialog); return u.createElement(gc, { present: r || i.open }, i.modal ? u.createElement(G_, ot({}, o, { ref: t })) : u.createElement(Q_, ot({}, o, { ref: t }))); }), G_ = u.forwardRef((e, t) => { const n = io(_s, e.__scopeDialog), r = u.useRef(null), o = na(t, n.contentRef, r); return u.useEffect(() => { const i = r.current; if (i)
    return hc(i); }, []), u.createElement(H1, ot({}, e, { ref: o, trapFocus: n.open, disableOutsidePointerEvents: !0, onCloseAutoFocus: Do(e.onCloseAutoFocus, i => { var s; i.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus(); }), onPointerDownOutside: Do(e.onPointerDownOutside, i => { const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0; (s.button === 2 || a) && i.preventDefault(); }), onFocusOutside: Do(e.onFocusOutside, i => i.preventDefault()) })); }), Q_ = u.forwardRef((e, t) => { const n = io(_s, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1); return u.createElement(H1, ot({}, e, { ref: t, trapFocus: !1, disableOutsidePointerEvents: !1, onCloseAutoFocus: i => { var s; if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, i), !i.defaultPrevented) {
        var a;
        r.current || (a = n.triggerRef.current) === null || a === void 0 || a.focus(), i.preventDefault();
    } r.current = !1, o.current = !1; }, onInteractOutside: i => { var s, a; (s = e.onInteractOutside) === null || s === void 0 || s.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0)); const l = i.target; ((a = n.triggerRef.current) === null || a === void 0 ? void 0 : a.contains(l)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault(); } })); }), H1 = u.forwardRef((e, t) => { const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i } = e, s = __rest(e, ["__scopeDialog", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus"]), a = io(_s, n), l = u.useRef(null), c = na(t, l); return N_(), u.createElement(u.Fragment, null, u.createElement(g_, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: i }, u.createElement(h_, ot({ role: "dialog", id: a.contentId, "aria-describedby": a.descriptionId, "aria-labelledby": a.titleId, "data-state": W1(a.open) }, s, { ref: c, onDismiss: () => a.onOpenChange(!1) }))), !1); });
function W1(e) { return e ? "open" : "closed"; }
const q_ = B_, Y_ = V_, X_ = H_, J_ = K_;
var Bi = '[cmdk-group=""]', Hu = '[cmdk-group-items=""]', Z_ = '[cmdk-group-heading=""]', Rh = '[cmdk-item=""]', Pg = `${Rh}:not([aria-disabled="true"])`, Of = "cmdk-item-select", Rr = "data-value", e2 = (e, t, n) => XA(e, t, n), K1 = u.createContext(void 0), ra = () => u.useContext(K1), G1 = u.createContext(void 0), Nh = () => u.useContext(G1), Q1 = u.createContext(void 0), q1 = u.forwardRef((e, t) => { let n = ho(() => { var j, V; return { search: "", value: (V = (j = e.value) != null ? j : e.defaultValue) != null ? V : "", filtered: { count: 0, items: new Map, groups: new Set } }; }), r = ho(() => new Set), o = ho(() => new Map), i = ho(() => new Map), s = ho(() => new Set), a = Y1(e), { label: l, children: c, value: d, onValueChange: f, filter: h, shouldFilter: x, loop: y, disablePointerSelection: v = !1, vimBindings: S = !0 } = e, m = __rest(e, ["label", "children", "value", "onValueChange", "filter", "shouldFilter", "loop", "disablePointerSelection", "vimBindings"]), g = u.useId(), w = u.useId(), C = u.useId(), E = u.useRef(null), R = d2(); Yr(() => { if (d !== void 0) {
    let j = d.trim();
    n.current.value = j, b.emit();
} }, [d]), Yr(() => { R(6, te); }, []); let b = u.useMemo(() => ({ subscribe: j => (s.current.add(j), () => s.current.delete(j)), snapshot: () => n.current, setState: (j, V, q) => { var z, Y, $; if (!Object.is(n.current[j], V)) {
        if (n.current[j] = V, j === "search")
            D(), T(), R(1, M);
        else if (j === "value" && (q || R(5, te), ((z = a.current) == null ? void 0 : z.value) !== void 0)) {
            let X = V !== null && V !== void 0 ? V : "";
            ($ = (Y = a.current).onValueChange) == null || $.call(Y, X);
            return;
        }
        b.emit();
    } }, emit: () => { s.current.forEach(j => j()); } }), []), P = u.useMemo(() => ({ value: (j, V, q) => { var z; V !== ((z = i.current.get(j)) == null ? void 0 : z.value) && (i.current.set(j, { value: V, keywords: q }), n.current.filtered.items.set(j, k(V, q)), R(2, () => { T(), b.emit(); })); }, item: (j, V) => (r.current.add(j), V && (o.current.has(V) ? o.current.get(V).add(j) : o.current.set(V, new Set([j]))), R(3, () => { D(), T(), n.current.value || M(), b.emit(); }), () => { i.current.delete(j), r.current.delete(j), n.current.filtered.items.delete(j); let q = G(); R(4, () => { D(), (q == null ? void 0 : q.getAttribute("id")) === j && M(), b.emit(); }); }), group: j => (o.current.has(j) || o.current.set(j, new Set), () => { i.current.delete(j), o.current.delete(j); }), filter: () => a.current.shouldFilter, label: l || e["aria-label"], disablePointerSelection: v, listId: g, inputId: C, labelId: w, listInnerRef: E }), []); function k(j, V) { var q, z; let Y = (z = (q = a.current) == null ? void 0 : q.filter) != null ? z : e2; return j ? Y(j, n.current.search, V) : 0; } function T() { if (!n.current.search || a.current.shouldFilter === !1)
    return; let j = n.current.filtered.items, V = []; n.current.filtered.groups.forEach(z => { let Y = o.current.get(z), $ = 0; Y.forEach(X => { let pe = j.get(X); $ = Math.max(pe, $); }), V.push([z, $]); }); let q = E.current; U().sort((z, Y) => { var $, X; let pe = z.getAttribute("id"), oe = Y.getAttribute("id"); return (($ = j.get(oe)) != null ? $ : 0) - ((X = j.get(pe)) != null ? X : 0); }).forEach(z => { let Y = z.closest(Hu); Y ? Y.appendChild(z.parentElement === Y ? z : z.closest(`${Hu} > *`)) : q.appendChild(z.parentElement === q ? z : z.closest(`${Hu} > *`)); }), V.sort((z, Y) => Y[1] - z[1]).forEach(z => { let Y = E.current.querySelector(`${Bi}[${Rr}="${encodeURIComponent(z[0])}"]`); Y == null || Y.parentElement.appendChild(Y); }); } function M() { let j = U().find(q => q.getAttribute("aria-disabled") !== "true"), V = j == null ? void 0 : j.getAttribute(Rr); b.setState("value", V || void 0); } function D() { var j, V, q, z; if (!n.current.search || a.current.shouldFilter === !1) {
    n.current.filtered.count = r.current.size;
    return;
} n.current.filtered.groups = new Set; let Y = 0; for (let $ of r.current) {
    let X = (V = (j = i.current.get($)) == null ? void 0 : j.value) != null ? V : "", pe = (z = (q = i.current.get($)) == null ? void 0 : q.keywords) != null ? z : [], oe = k(X, pe);
    n.current.filtered.items.set($, oe), oe > 0 && Y++;
} for (let [$, X] of o.current)
    for (let pe of X)
        if (n.current.filtered.items.get(pe) > 0) {
            n.current.filtered.groups.add($);
            break;
        } n.current.filtered.count = Y; } function te() { var j, V, q; let z = G(); z && (((j = z.parentElement) == null ? void 0 : j.firstChild) === z && ((q = (V = z.closest(Bi)) == null ? void 0 : V.querySelector(Z_)) == null || q.scrollIntoView({ block: "nearest" })), z.scrollIntoView({ block: "nearest" })); } function G() { var j; return (j = E.current) == null ? void 0 : j.querySelector(`${Rh}[aria-selected="true"]`); } function U() { var j; return Array.from((j = E.current) == null ? void 0 : j.querySelectorAll(Pg)); } function K(j) { let V = U()[j]; V && b.setState("value", V.getAttribute(Rr)); } function F(j) { var V; let q = G(), z = U(), Y = z.findIndex(X => X === q), $ = z[Y + j]; (V = a.current) != null && V.loop && ($ = Y + j < 0 ? z[z.length - 1] : Y + j === z.length ? z[0] : z[Y + j]), $ && b.setState("value", $.getAttribute(Rr)); } function A(j) { let V = G(), q = V == null ? void 0 : V.closest(Bi), z; for (; q && !z;)
    q = j > 0 ? c2(q, Bi) : u2(q, Bi), z = q == null ? void 0 : q.querySelector(Pg); z ? b.setState("value", z.getAttribute(Rr)) : F(j); } let I = () => K(U().length - 1), Q = j => { j.preventDefault(), j.metaKey ? I() : j.altKey ? A(1) : F(1); }, ee = j => { j.preventDefault(), j.metaKey ? K(0) : j.altKey ? A(-1) : F(-1); }; return u.createElement(Lt.div, Object.assign(Object.assign({ ref: t, tabIndex: -1 }, m), { "cmdk-root": "", onKeyDown: j => { var V; if ((V = m.onKeyDown) == null || V.call(m, j), !j.defaultPrevented)
        switch (j.key) {
            case "n":
            case "j": {
                S && j.ctrlKey && Q(j);
                break;
            }
            case "ArrowDown": {
                Q(j);
                break;
            }
            case "p":
            case "k": {
                S && j.ctrlKey && ee(j);
                break;
            }
            case "ArrowUp": {
                ee(j);
                break;
            }
            case "Home": {
                j.preventDefault(), K(0);
                break;
            }
            case "End": {
                j.preventDefault(), I();
                break;
            }
            case "Enter": if (!j.nativeEvent.isComposing && j.keyCode !== 229) {
                j.preventDefault();
                let q = G();
                if (q) {
                    let z = new Event(Of);
                    q.dispatchEvent(z);
                }
            }
        } } }), u.createElement("label", { "cmdk-label": "", htmlFor: P.inputId, id: P.labelId, style: p2 }, l), xc(e, j => u.createElement(G1.Provider, { value: b }, u.createElement(K1.Provider, { value: P }, j)))); }), t2 = u.forwardRef((e, t) => { var n, r; let o = u.useId(), i = u.useRef(null), s = u.useContext(Q1), a = ra(), l = Y1(e), c = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount; Yr(() => { if (!c)
    return a.item(o, s == null ? void 0 : s.id); }, [c]); let d = X1(o, i, [e.value, e.children, i], e.keywords), f = Nh(), h = Xr(R => R.value && R.value === d.current), x = Xr(R => c || a.filter() === !1 ? !0 : R.search ? R.filtered.items.get(o) > 0 : !0); u.useEffect(() => { let R = i.current; if (!(!R || e.disabled))
    return R.addEventListener(Of, y), () => R.removeEventListener(Of, y); }, [x, e.onSelect, e.disabled]); function y() { var R, b; v(), (b = (R = l.current).onSelect) == null || b.call(R, d.current); } function v() { f.setState("value", d.current, !0); } if (!x)
    return null; let { disabled: S, value: m, onSelect: g, forceMount: w, keywords: C } = e, E = __rest(e, ["disabled", "value", "onSelect", "forceMount", "keywords"]); return u.createElement(Lt.div, Object.assign(Object.assign({ ref: Ms([i, t]) }, E), { id: o, "cmdk-item": "", role: "option", "aria-disabled": !!S, "aria-selected": !!h, "data-disabled": !!S, "data-selected": !!h, onPointerMove: S || a.disablePointerSelection ? void 0 : v, onClick: S ? void 0 : y }), e.children); }), n2 = u.forwardRef((e, t) => { let { heading: n, children: r, forceMount: o } = e, i = __rest(e, ["heading", "children", "forceMount"]), s = u.useId(), a = u.useRef(null), l = u.useRef(null), c = u.useId(), d = ra(), f = Xr(x => o || d.filter() === !1 ? !0 : x.search ? x.filtered.groups.has(s) : !0); Yr(() => d.group(s), []), X1(s, a, [e.value, e.heading, l]); let h = u.useMemo(() => ({ id: s, forceMount: o }), [o]); return u.createElement(Lt.div, Object.assign(Object.assign({ ref: Ms([a, t]) }, i), { "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }), n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), xc(e, x => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, u.createElement(Q1.Provider, { value: h }, x)))); }), r2 = u.forwardRef((e, t) => { let { alwaysRender: n } = e, r = __rest(e, ["alwaysRender"]), o = u.useRef(null), i = Xr(s => !s.search); return !n && !i ? null : u.createElement(Lt.div, Object.assign(Object.assign({ ref: Ms([o, t]) }, r), { "cmdk-separator": "", role: "separator" })); }), o2 = u.forwardRef((e, t) => { let { onValueChange: n } = e, r = __rest(e, ["onValueChange"]), o = e.value != null, i = Nh(), s = Xr(d => d.search), a = Xr(d => d.value), l = ra(), c = u.useMemo(() => { var d; let f = (d = l.listInnerRef.current) == null ? void 0 : d.querySelector(`${Rh}[${Rr}="${encodeURIComponent(a)}"]`); return f == null ? void 0 : f.getAttribute("id"); }, []); return u.useEffect(() => { e.value != null && i.setState("search", e.value); }, [e.value]), u.createElement(Lt.input, Object.assign(Object.assign({ ref: t }, r), { "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": c, id: l.inputId, type: "text", value: o ? e.value : s, onChange: d => { o || i.setState("search", d.target.value), n == null || n(d.target.value); } })); }), i2 = u.forwardRef((e, t) => { let { children: n, label: r = "Suggestions" } = e, o = __rest(e, ["children", "label"]), i = u.useRef(null), s = u.useRef(null), a = ra(); return u.useEffect(() => { if (s.current && i.current) {
    let l = s.current, c = i.current, d, f = new ResizeObserver(() => { d = requestAnimationFrame(() => { let h = l.offsetHeight; c.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px"); }); });
    return f.observe(l), () => { cancelAnimationFrame(d), f.unobserve(l); };
} }, []), u.createElement(Lt.div, Object.assign(Object.assign({ ref: Ms([i, t]) }, o), { "cmdk-list": "", role: "listbox", "aria-label": r, id: a.listId }), xc(e, l => u.createElement("div", { ref: Ms([s, a.listInnerRef]), "cmdk-list-sizer": "" }, l))); }), s2 = u.forwardRef((e, t) => { let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: i, container: s } = e, a = __rest(e, ["open", "onOpenChange", "overlayClassName", "contentClassName", "container"]); return u.createElement(q_, { open: n, onOpenChange: r }, u.createElement(Y_, { container: s }, u.createElement(X_, { "cmdk-overlay": "", className: o }), u.createElement(J_, { "aria-label": e.label, "cmdk-dialog": "", className: i }, u.createElement(q1, Object.assign({ ref: t }, a))))); }), a2 = u.forwardRef((e, t) => Xr(n => n.filtered.count === 0) ? u.createElement(Lt.div, Object.assign(Object.assign({ ref: t }, e), { "cmdk-empty": "", role: "presentation" })) : null), l2 = u.forwardRef((e, t) => { let { progress: n, children: r, label: o = "Loading..." } = e, i = __rest(e, ["progress", "children", "label"]); return u.createElement(Lt.div, Object.assign(Object.assign({ ref: t }, i), { "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }), xc(e, s => u.createElement("div", { "aria-hidden": !0 }, s))); }), mt = Object.assign(q1, { List: i2, Item: t2, Input: o2, Group: n2, Separator: r2, Dialog: s2, Empty: a2, Loading: l2 });
function c2(e, t) { let n = e.nextElementSibling; for (; n;) {
    if (n.matches(t))
        return n;
    n = n.nextElementSibling;
} }
function u2(e, t) { let n = e.previousElementSibling; for (; n;) {
    if (n.matches(t))
        return n;
    n = n.previousElementSibling;
} }
function Y1(e) { let t = u.useRef(e); return Yr(() => { t.current = e; }), t; }
var Yr = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function ho(e) { let t = u.useRef(); return t.current === void 0 && (t.current = e()), t; }
function Ms(e) { return t => { e.forEach(n => { typeof n == "function" ? n(t) : n != null && (n.current = t); }); }; }
function Xr(e) { let t = Nh(), n = () => e(t.snapshot()); return u.useSyncExternalStore(t.subscribe, n, n); }
function X1(e, t, n, r = []) { let o = u.useRef(), i = ra(); return Yr(() => { var s; let a = (() => { var c; for (let d of n) {
    if (typeof d == "string")
        return d.trim();
    if (typeof d == "object" && "current" in d)
        return d.current ? (c = d.current.textContent) == null ? void 0 : c.trim() : o.current;
} })(), l = r.map(c => c.trim()); i.value(e, a, l), (s = t.current) == null || s.setAttribute(Rr, a), o.current = a; }), o; }
var d2 = () => { let [e, t] = u.useState(), n = ho(() => new Map); return Yr(() => { n.current.forEach(r => r()), n.current = new Map; }, [e]), (r, o) => { n.current.set(r, o), t({}); }; };
function f2(e) { let t = e.type; return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e; }
function xc({ asChild: e, children: t }, n) { return e && u.isValidElement(t) ? u.cloneElement(f2(t), { ref: t.ref }, n(t.props.children)) : n(t); }
var p2 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" }, kh = "Dialog", [J1, dL] = hn(kh), [h2, Zt] = J1(kh), Z1 = e => { const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: s = !0 } = e, a = u.useRef(null), l = u.useRef(null), [c = !1, d] = It({ prop: r, defaultProp: o, onChange: i }); return p.jsx(h2, { scope: t, triggerRef: a, contentRef: l, contentId: Kt(), titleId: Kt(), descriptionId: Kt(), open: c, onOpenChange: d, onOpenToggle: u.useCallback(() => d(f => !f), [d]), modal: s, children: n }); };
Z1.displayName = kh;
var eS = "DialogTrigger", tS = u.forwardRef((e, t) => { const { __scopeDialog: n } = e, r = __rest(e, ["__scopeDialog"]), o = Zt(eS, n), i = ce(t, o.triggerRef); return p.jsx(ne.button, Object.assign(Object.assign({ type: "button", "aria-haspopup": "dialog", "aria-expanded": o.open, "aria-controls": o.contentId, "data-state": jh(o.open) }, r), { ref: i, onClick: W(e.onClick, o.onOpenToggle) })); });
tS.displayName = eS;
var Th = "DialogPortal", [m2, nS] = J1(Th, { forceMount: void 0 }), rS = e => { const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Zt(Th, t); return p.jsx(m2, { scope: t, forceMount: n, children: u.Children.map(r, s => p.jsx(Xt, { present: n || i.open, children: p.jsx(pc, { asChild: !0, container: o, children: s }) })) }); };
rS.displayName = Th;
var Il = "DialogOverlay", oS = u.forwardRef((e, t) => { const n = nS(Il, e.__scopeDialog), { forceMount: r = n.forceMount } = e, o = __rest(e, ["forceMount"]), i = Zt(Il, e.__scopeDialog); return i.modal ? p.jsx(Xt, { present: r || i.open, children: p.jsx(v2, Object.assign(Object.assign({}, o), { ref: t })) }) : null; });
oS.displayName = Il;
var v2 = u.forwardRef((e, t) => { const { __scopeDialog: n } = e, r = __rest(e, ["__scopeDialog"]), o = Zt(Il, n); return p.jsx(vc, { as: hr, allowPinchZoom: !0, shards: [o.contentRef], children: p.jsx(ne.div, Object.assign(Object.assign({ "data-state": jh(o.open) }, r), { ref: t, style: Object.assign({ pointerEvents: "auto" }, r.style) })) }); }), Jr = "DialogContent", iS = u.forwardRef((e, t) => { const n = nS(Jr, e.__scopeDialog), { forceMount: r = n.forceMount } = e, o = __rest(e, ["forceMount"]), i = Zt(Jr, e.__scopeDialog); return p.jsx(Xt, { present: r || i.open, children: i.modal ? p.jsx(g2, Object.assign(Object.assign({}, o), { ref: t })) : p.jsx(y2, Object.assign(Object.assign({}, o), { ref: t })) }); });
iS.displayName = Jr;
var g2 = u.forwardRef((e, t) => { const n = Zt(Jr, e.__scopeDialog), r = u.useRef(null), o = ce(t, n.contentRef, r); return u.useEffect(() => { const i = r.current; if (i)
    return hc(i); }, []), p.jsx(sS, Object.assign(Object.assign({}, e), { ref: o, trapFocus: n.open, disableOutsidePointerEvents: !0, onCloseAutoFocus: W(e.onCloseAutoFocus, i => { var s; i.preventDefault(), (s = n.triggerRef.current) == null || s.focus(); }), onPointerDownOutside: W(e.onPointerDownOutside, i => { const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0; (s.button === 2 || a) && i.preventDefault(); }), onFocusOutside: W(e.onFocusOutside, i => i.preventDefault()) })); }), y2 = u.forwardRef((e, t) => { const n = Zt(Jr, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1); return p.jsx(sS, Object.assign(Object.assign({}, e), { ref: t, trapFocus: !1, disableOutsidePointerEvents: !1, onCloseAutoFocus: i => { var s, a; (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1; }, onInteractOutside: i => { var l, c; (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0)); const s = i.target; ((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault(); } })); }), sS = u.forwardRef((e, t) => { const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i } = e, s = __rest(e, ["__scopeDialog", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus"]), a = Zt(Jr, n), l = u.useRef(null), c = ce(t, l); return lh(), p.jsxs(p.Fragment, { children: [p.jsx(cc, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: i, children: p.jsx(vi, Object.assign(Object.assign({ role: "dialog", id: a.contentId, "aria-describedby": a.descriptionId, "aria-labelledby": a.titleId, "data-state": jh(a.open) }, s), { ref: c, onDismiss: () => a.onOpenChange(!1) })) }), p.jsxs(p.Fragment, { children: [p.jsx(x2, { titleId: a.titleId }), p.jsx(S2, { contentRef: l, descriptionId: a.descriptionId })] })] }); }), Oh = "DialogTitle", aS = u.forwardRef((e, t) => { const { __scopeDialog: n } = e, r = __rest(e, ["__scopeDialog"]), o = Zt(Oh, n); return p.jsx(ne.h2, Object.assign(Object.assign({ id: o.titleId }, r), { ref: t })); });
aS.displayName = Oh;
var lS = "DialogDescription", cS = u.forwardRef((e, t) => { const { __scopeDialog: n } = e, r = __rest(e, ["__scopeDialog"]), o = Zt(lS, n); return p.jsx(ne.p, Object.assign(Object.assign({ id: o.descriptionId }, r), { ref: t })); });
cS.displayName = lS;
var uS = "DialogClose", dS = u.forwardRef((e, t) => { const { __scopeDialog: n } = e, r = __rest(e, ["__scopeDialog"]), o = Zt(uS, n); return p.jsx(ne.button, Object.assign(Object.assign({ type: "button" }, r), { ref: t, onClick: W(e.onClick, () => o.onOpenChange(!1)) })); });
dS.displayName = uS;
function jh(e) { return e ? "open" : "closed"; }
var fS = "DialogTitleWarning", [fL, pS] = wN(fS, { contentName: Jr, titleName: Oh, docsSlug: "dialog" }), x2 = ({ titleId: e }) => {
    const t = pS(fS), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return u.useEffect(() => { e && (document.getElementById(e) || console.error(n)); }, [n, e]), null;
}, w2 = "DialogDescriptionWarning", S2 = ({ contentRef: e, descriptionId: t }) => { const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${pS(w2).contentName}}.`; return u.useEffect(() => { var i; const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby"); t && o && (document.getElementById(t) || console.warn(r)); }, [r, e, t]), null; }, C2 = Z1, E2 = tS, hS = rS, wc = oS, Sc = iS, Cc = aS, Ec = cS, Ah = dS;
const b2 = hS, mS = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(wc, Object.assign({ ref: n, className: J("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e) }, t));
});
mS.displayName = wc.displayName;
const P2 = u.forwardRef((_q, r) => {
    var { className: e, children: t } = _q, n = __rest(_q, ["className", "children"]);
    return p.jsxs(b2, { children: [p.jsx(mS, {}), p.jsxs(Sc, Object.assign(Object.assign({ ref: r, className: J("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e) }, n), { children: [t, p.jsxs(Ah, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [p.jsx(sw, { className: "h-4 w-4" }), p.jsx("span", { className: "sr-only", children: "Close" })] })] }))] });
});
P2.displayName = Sc.displayName;
const R2 = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(Cc, Object.assign({ ref: n, className: J("text-lg font-semibold leading-none tracking-tight", e) }, t));
});
R2.displayName = Cc.displayName;
const N2 = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(Ec, Object.assign({ ref: n, className: J("text-sm text-muted-foreground", e) }, t));
});
N2.displayName = Ec.displayName;
const bc = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(mt, Object.assign({ ref: n, className: J("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e) }, t));
});
bc.displayName = mt.displayName;
const Pc = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [p.jsx(iw, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), p.jsx(mt.Input, Object.assign({ ref: n, className: J("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", e) }, t))] });
});
Pc.displayName = mt.Input.displayName;
const Rc = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(mt.List, Object.assign({ ref: n, className: J("max-h-[300px] overflow-y-auto overflow-x-hidden", e) }, t));
});
Rc.displayName = mt.List.displayName;
const Nc = u.forwardRef((e, t) => p.jsx(mt.Empty, Object.assign({ ref: t, className: "py-6 text-center text-sm" }, e)));
Nc.displayName = mt.Empty.displayName;
const Is = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(mt.Group, Object.assign({ ref: n, className: J("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e) }, t));
});
Is.displayName = mt.Group.displayName;
const vS = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(mt.Separator, Object.assign({ ref: n, className: J("-mx-1 h-px bg-border", e) }, t));
});
vS.displayName = mt.Separator.displayName;
const Cn = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(mt.Item, Object.assign({ ref: n, className: J("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled='true']:pointer-events-none data-[disabled='true']:opacity-50", e) }, t));
});
Cn.displayName = mt.Item.displayName;
function k2({ searchArr: e, merchArr: t }) { const { searchValue: n, setSearchValue: r } = e, o = rc(), i = t.map(s => p.jsx(Cn, { value: s.title, onSelect: () => { o(`/merch/${s.merch_url}`); }, children: s.title }, s.id)); return p.jsx(p.Fragment, { children: p.jsxs(bc, { children: [p.jsx("div", { children: p.jsx(Pc, { placeholder: "Search product...", className: "h-9", value: n, onValueChange: r }) }), p.jsxs(Rc, { children: [p.jsx(Nc, { children: "No product found." }), p.jsx(Is, { children: i })] })] }) }); }
function T2() { const [e, t] = u.useState(""), n = { searchValue: e, setSearchValue: t }, r = mi({ queryKey: ["merchAll"], queryFn: Fw.getAll }), o = r.data ? r.data : []; return p.jsx(p.Fragment, { children: p.jsx("div", { className: "flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4", children: p.jsx("div", { className: "ml-auto flex-1 sm:flex-initial", children: p.jsxs(T1, { children: [p.jsx(O1, { asChild: !0, children: p.jsx(Oe, { variant: "ghost", role: "combobox", "aria-expanded": !0, className: "px-2", children: p.jsxs("div", { className: "flex items-center", children: ["Name", " ", p.jsx(iw, { className: " text-muted-foreground" })] }) }) }), p.jsx(bh, { className: "w-[200px] p-0", onOpenAutoFocus: i => i.preventDefault(), children: p.jsx(k2, { searchArr: n, merchArr: o }) })] }) }) }) }); }
const O2 = () => p.jsx("div", { children: p.jsx(T2, {}) });
var j2 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Rg = e => { let t; const n = new Set, r = (d, f) => { const h = typeof d == "function" ? d(t) : d; if (!Object.is(h, t)) {
    const x = t;
    t = (f !== null && f !== void 0 ? f : (typeof h != "object" || h === null)) ? h : Object.assign({}, t, h), n.forEach(y => y(t, x));
} }, o = () => t, l = { setState: r, getState: o, getInitialState: () => c, subscribe: d => (n.add(d), () => n.delete(d)), destroy: () => { (j2 ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear(); } }, c = t = e(r, o, l); return l; }, A2 = e => e ? Rg(e) : Rg;
var gS = { exports: {} }, yS = {}, xS = { exports: {} }, wS = {}; /**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ai = u;
function _2(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var M2 = typeof Object.is == "function" ? Object.is : _2, I2 = ai.useState, D2 = ai.useEffect, L2 = ai.useLayoutEffect, $2 = ai.useDebugValue;
function F2(e, t) { var n = t(), r = I2({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1]; return L2(function () { o.value = n, o.getSnapshot = t, Wu(o) && i({ inst: o }); }, [e, n, t]), D2(function () { return Wu(o) && i({ inst: o }), e(function () { Wu(o) && i({ inst: o }); }); }, [e]), $2(n), n; }
function Wu(e) { var t = e.getSnapshot; e = e.value; try {
    var n = t();
    return !M2(e, n);
}
catch (_q) {
    return !0;
} }
function z2(e, t) { return t(); }
var B2 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? z2 : F2;
wS.useSyncExternalStore = ai.useSyncExternalStore !== void 0 ? ai.useSyncExternalStore : B2;
xS.exports = wS;
var U2 = xS.exports; /**
* @license React
* use-sync-external-store-shim/with-selector.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var kc = u, V2 = U2;
function H2(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var W2 = typeof Object.is == "function" ? Object.is : H2, K2 = V2.useSyncExternalStore, G2 = kc.useRef, Q2 = kc.useEffect, q2 = kc.useMemo, Y2 = kc.useDebugValue;
yS.useSyncExternalStoreWithSelector = function (e, t, n, r, o) { var i = G2(null); if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
}
else
    s = i.current; i = q2(function () { function l(x) { if (!c) {
    if (c = !0, d = x, x = r(x), o !== void 0 && s.hasValue) {
        var y = s.value;
        if (o(y, x))
            return f = y;
    }
    return f = x;
} if (y = f, W2(d, x))
    return y; var v = r(x); return o !== void 0 && o(y, v) ? y : (d = x, f = v); } var c = !1, d, f, h = n === void 0 ? null : n; return [function () { return l(t()); }, h === null ? void 0 : function () { return l(h()); }]; }, [t, n, r, o]); var a = K2(e, i[0], i[1]); return Q2(function () { s.hasValue = !0, s.value = a; }, [a]), Y2(a), a; };
gS.exports = yS;
var X2 = gS.exports;
const J2 = Hf(X2);
var SS = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: Z2 } = Me, { useSyncExternalStoreWithSelector: eM } = J2;
let Ng = !1;
const tM = e => e;
function nM(e, t = tM, n) { (SS ? "production" : void 0) !== "production" && n && !Ng && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), Ng = !0); const r = eM(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n); return Z2(r), r; }
const kg = e => { (SS ? "production" : void 0) !== "production" && typeof e != "function" && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."); const t = typeof e == "function" ? A2(e) : e, n = (r, o) => nM(t, r, o); return Object.assign(n, t), n; }, rM = e => e ? kg(e) : kg, Pi = rM(e => ({ choosenBrands: [], choosenProductCategories: [], choosenPriceRange: ["0", "1000"], choosenProductCategories_Map: new Map, showFilterSettings: !1, updateChoosenBrands: t => e(() => ({ choosenBrands: t })), updateChoosenProductCategories: t => e(() => ({ choosenProductCategories: t })), updateChoosenPriceRange: t => e(() => ({ choosenPriceRange: t })), updateChoosenProductCategories_Map: t => e(() => ({ choosenProductCategories_Map: t })), updateShowFilterSettings: t => e(() => ({ showFilterSettings: t })) }));
function oM() { const { showFilterSettings: e, updateShowFilterSettings: t } = Pi(), n = () => { t(!e); }; return p.jsx("div", { className: "w-1/4 flex 	justify-end", children: p.jsx(Oe, { onClick: n, variant: "ghost", size: "default", children: "Filter" }) }); }
const iM = () => hi().pathname === "/search" ? p.jsx(oM, {}) : p.jsx(ff, { className: "w-1/4 flex justify-end", children: p.jsx(pf, { asChild: !0, className: kl(), children: p.jsx(mx, { to: "/search", children: "Search" }) }) });
function oa() { return p.jsx("header", { className: "sticky top-0 border-b bg-background flex justify-center", children: p.jsx(pw, { className: "", children: p.jsxs(hw, { className: "w-[100vw] max-w-screen-xl", children: [p.jsx(ff, { className: "w-1/4 flex justify-start whitespace-nowrap", children: p.jsx(pf, { asChild: !0, className: kl(), children: p.jsx(mx, { to: "/", children: "Main Page" }) }) }), p.jsx("div", { className: "w-1/4" }), p.jsx(iM, {}), p.jsx(ff, { className: "w-1/4 flex justify-end", children: p.jsx(pf, { asChild: !0, className: kl(), children: p.jsx("div", { className: "flex items-center pr-[7%]", children: p.jsx(O2, {}) }) }) })] }) }) }); }
const ia = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx("div", Object.assign({ ref: n, className: J("rounded-lg border bg-card text-card-foreground shadow-sm", e) }, t));
});
ia.displayName = "Card";
const Tc = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx("div", Object.assign({ ref: n, className: J("flex flex-col space-y-1.5 p-6", e) }, t));
});
Tc.displayName = "CardHeader";
const Oc = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx("h3", Object.assign({ ref: n, className: J("text-2xl font-semibold leading-none tracking-tight", e) }, t));
});
Oc.displayName = "CardTitle";
const sM = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx("p", Object.assign({ ref: n, className: J("text-sm text-muted-foreground", e) }, t));
});
sM.displayName = "CardDescription";
const jc = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx("div", Object.assign({ ref: n, className: J("p-6 pt-0", e) }, t));
});
jc.displayName = "CardContent";
const Ac = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx("div", Object.assign({ ref: n, className: J("flex items-center p-6 pt-0", e) }, t));
});
Ac.displayName = "CardFooter";
function aM({ merch: e }) { const t = rc(), n = () => { t(`/merch/${e.merch_url}`); }; return p.jsxs(ia, { className: "min-h-72 h-[45vh] max-w-96 w-11/12", children: [p.jsx("div", { className: "h-[55%] flex items-center justify-center p-2 pb-0 mt-[1%]", children: p.jsx("img", { className: "h-full w-4/5 object-contain", onClick: n, src: e.img_url, alt: "casa" }) }), p.jsxs("div", { className: "h-[45%]", children: [p.jsx(Tc, { className: "h-2/3 p-2 flex items-center justify-center", children: p.jsx(Oc, { className: "text-base font-medium leading-none", onClick: n, children: e.title }) }), p.jsxs(Ac, { className: "h-1/3 p-0 pb-1 text-sm font-medium", children: [p.jsx("div", { className: "w-1/2 flex items-center justify-center", children: e.price }), p.jsx("div", { className: "w-1/2 pr-2 pb-1 flex items-center justify-center", children: p.jsx(Oe, { size: "sm", children: "Añadir" }) })] })] })] }); }
function lM() { var _q; const e = mi({ queryKey: ["merchAll"], queryFn: Fw.getAll }); if (e.isLoading)
    return p.jsx("div", { children: p.jsx("p", { children: "Loading products..." }) }); const n = ((_q = e.data) !== null && _q !== void 0 ? _q : []).map(r => p.jsx(aM, { merch: r }, r.id)); return p.jsxs("div", { className: "min-w-80 p-3", children: [p.jsx("div", { className: "flex items-center justify-center", children: p.jsx("img", { className: "min-h-28 max-h-[40vh] rounded-lg ", src: "landing_banner.jpg", alt: "cute banner picture" }) }), p.jsx("div", { className: "pt-4 grid grid-cols-2 gap-y-3 justify-items-center", children: n })] }); }
function cM() { return p.jsxs("div", { children: [p.jsx(oa, {}), p.jsx("main", { children: p.jsx(lM, {}) })] }); }
function uM({ merch: e }) { var o; const t = rc(), n = () => { t(`/merch/${e.id}`); }; return p.jsxs(ia, { className: "flex w-11/12 h-[25vh] min-h-48 ", children: [p.jsx("div", { className: "w-2/5 flex items-center justify-center", children: p.jsx("img", { className: "w-11/12 h-9/10 object-contain", onClick: n, src: "/71HE.webp", alt: "casa" }) }), p.jsxs("div", { className: "w-3/5", children: [p.jsx(Tc, { className: "h-2/6 items-start p-4 pt-5 pb-0", children: p.jsx(Oc, { className: "text-base font-semibold leading-none", onClick: n, children: e.name }) }), p.jsxs(jc, { className: "h-2/6 p-0 pl-4 flex flex-col items-start text-base", children: [p.jsxs("p", { children: ["Disponibles: ", e.units] }), p.jsxs("p", { children: ["Precio: ", e.price, "$"] }), p.jsxs("p", { children: ["Marca: ", (o = e.brand) == null ? void 0 : o.name] })] }), p.jsx(Ac, { className: "h-2/6 p-0 pl-[15%]", children: p.jsx(Oe, { size: "sm", children: "Añadir" }) })] })] }); }
const dM = () => __awaiter(void 0, void 0, void 0, function* () { const { data: e } = yield Se.get(`${Si}/products`); return e; }), fM = () => __awaiter(void 0, void 0, void 0, function* () { const { data: e } = yield Se.get(`${Si}/brands`); return e.sort((n, r) => n.name.localeCompare(r.name)); }), pM = () => __awaiter(void 0, void 0, void 0, function* () { const { data: e } = yield Se.get(`${Si}/variants`); return e; }), hM = () => __awaiter(void 0, void 0, void 0, function* () { const { data: e } = yield Se.get(`${Si}/variant-categories`); return e; }), mM = () => __awaiter(void 0, void 0, void 0, function* () { const { data: e } = yield Se.get(`${Si}/product-categories`); return e; }), _c = { getAll_Products: dM, getAll_ProductCategories: mM, getAll_Brands: fM, getAll_Variants: pM, getAll_VariantCategories: hM }, vM = (e, t) => t.length === 0 ? e : e.filter(r => { var o; return (o = r.categories) == null ? void 0 : o.some(i => t.includes(i.id)); }), gM = (e, t) => t.length == 0 ? e : e.filter(r => { var o; return (o = r.brand) != null && o.id ? t.includes(r.brand.id) : !1; }), yM = (e, t) => { const n = Number(t[0]), r = Number(t[1]); return e.filter(i => n <= i.price && i.price <= r); }, Ku = { categoryFilter: vM, brandFilter: gM, priceFilter: yM };
function xM() { var _q; const { choosenProductCategories: e, choosenBrands: t, choosenPriceRange: n } = Pi(), r = mi({ queryKey: ["getAllProducts"], queryFn: _c.getAll_Products }); if (r.isLoading)
    return p.jsx("div", { children: "loading data..." }); let o = (_q = r.data) !== null && _q !== void 0 ? _q : []; o = Ku.categoryFilter(o, e), o = Ku.brandFilter(o, t), o = Ku.priceFilter(o, n), o = o.slice(0, 15); const i = o.map(s => p.jsx(uM, { merch: s }, s.id)); return p.jsx("div", { className: "flex flex-col justify-start items-center bg-muted/80 gap-y-3", children: i }); }
const wM = C2, SM = E2, CM = Ah, EM = hS, CS = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(wc, Object.assign(Object.assign({ className: J("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e) }, t), { ref: n }));
});
CS.displayName = wc.displayName;
const bM = Xs("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", { variants: { side: { top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm" } }, defaultVariants: { side: "right" } }), ES = u.forwardRef((_q, o) => {
    var { side: e = "right", className: t, children: n } = _q, r = __rest(_q, ["side", "className", "children"]);
    return p.jsxs(EM, { children: [p.jsx(CS, {}), p.jsxs(Sc, Object.assign(Object.assign({ ref: o, className: J(bM({ side: e }), t) }, r), { children: [n, p.jsxs(Ah, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [p.jsx(sw, { className: "h-4 w-4" }), p.jsx("span", { className: "sr-only", children: "Close" })] })] }))] });
});
ES.displayName = Sc.displayName;
const bS = (_q) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx("div", Object.assign({ className: J("flex flex-col space-y-2 text-center sm:text-left", e) }, t));
};
bS.displayName = "SheetHeader";
const PS = (_q) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx("div", Object.assign({ className: J("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e) }, t));
};
PS.displayName = "SheetFooter";
const RS = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(Cc, Object.assign({ ref: n, className: J("text-lg font-semibold text-foreground", e) }, t));
});
RS.displayName = Cc.displayName;
const NS = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(Ec, Object.assign({ ref: n, className: J("text-sm text-muted-foreground", e) }, t));
});
NS.displayName = Ec.displayName;
const PM = { retriveOrdered_productCategories: RM };
function RM() {
    return __awaiter(this, void 0, void 0, function* () { const e = yield _c.getAll_ProductCategories(), t = new Map, n = [], r = e.sort((o, i) => o.name.localeCompare(i.name)); for (const o of r)
        o.children = [], t.set(o.id, o); for (const o of t)
        if (o[1].parentId) {
            const i = t.get(o[1].parentId);
            i && i.children.push(o[1]);
        } for (const o of t)
        o[1].parentId == null && n.push(o[1]); return n; });
}
var Gu = "rovingFocusGroup.onEntryFocus", NM = { bubbles: !1, cancelable: !0 }, Mc = "RovingFocusGroup", [jf, kS, kM] = Ys(Mc), [TM, TS] = hn(Mc, [kM]), [OM, jM] = TM(Mc), OS = u.forwardRef((e, t) => p.jsx(jf.Provider, { scope: e.__scopeRovingFocusGroup, children: p.jsx(jf.Slot, { scope: e.__scopeRovingFocusGroup, children: p.jsx(AM, Object.assign(Object.assign({}, e), { ref: t })) }) }));
OS.displayName = Mc;
var AM = u.forwardRef((e, t) => { const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: i, currentTabStopId: s, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: l, onEntryFocus: c, preventScrollOnEntryFocus: d = !1 } = e, f = __rest(e, ["__scopeRovingFocusGroup", "orientation", "loop", "dir", "currentTabStopId", "defaultCurrentTabStopId", "onCurrentTabStopIdChange", "onEntryFocus", "preventScrollOnEntryFocus"]), h = u.useRef(null), x = ce(t, h), y = qs(i), [v = null, S] = It({ prop: s, defaultProp: a, onChange: l }), [m, g] = u.useState(!1), w = Ve(c), C = kS(n), E = u.useRef(!1), [R, b] = u.useState(0); return u.useEffect(() => { const P = h.current; if (P)
    return P.addEventListener(Gu, w), () => P.removeEventListener(Gu, w); }, [w]), p.jsx(OM, { scope: n, orientation: r, dir: y, loop: o, currentTabStopId: v, onItemFocus: u.useCallback(P => S(P), [S]), onItemShiftTab: u.useCallback(() => g(!0), []), onFocusableItemAdd: u.useCallback(() => b(P => P + 1), []), onFocusableItemRemove: u.useCallback(() => b(P => P - 1), []), children: p.jsx(ne.div, Object.assign(Object.assign({ tabIndex: m || R === 0 ? -1 : 0, "data-orientation": r }, f), { ref: x, style: Object.assign({ outline: "none" }, e.style), onMouseDown: W(e.onMouseDown, () => { E.current = !0; }), onFocus: W(e.onFocus, P => { const k = !E.current; if (P.target === P.currentTarget && k && !m) {
            const T = new CustomEvent(Gu, NM);
            if (P.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
                const M = C().filter(K => K.focusable), D = M.find(K => K.active), te = M.find(K => K.id === v), U = [D, te, ...M].filter(Boolean).map(K => K.ref.current);
                _S(U, d);
            }
        } E.current = !1; }), onBlur: W(e.onBlur, () => g(!1)) })) }); }), jS = "RovingFocusGroupItem", AS = u.forwardRef((e, t) => { const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: i } = e, s = __rest(e, ["__scopeRovingFocusGroup", "focusable", "active", "tabStopId"]), a = Kt(), l = i || a, c = jM(jS, n), d = c.currentTabStopId === l, f = kS(n), { onFocusableItemAdd: h, onFocusableItemRemove: x } = c; return u.useEffect(() => { if (r)
    return h(), () => x(); }, [r, h, x]), p.jsx(jf.ItemSlot, { scope: n, id: l, focusable: r, active: o, children: p.jsx(ne.span, Object.assign(Object.assign({ tabIndex: d ? 0 : -1, "data-orientation": c.orientation }, s), { ref: t, onMouseDown: W(e.onMouseDown, y => { r ? c.onItemFocus(l) : y.preventDefault(); }), onFocus: W(e.onFocus, () => c.onItemFocus(l)), onKeyDown: W(e.onKeyDown, y => { if (y.key === "Tab" && y.shiftKey) {
            c.onItemShiftTab();
            return;
        } if (y.target !== y.currentTarget)
            return; const v = IM(y, c.orientation, c.dir); if (v !== void 0) {
            if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey)
                return;
            y.preventDefault();
            let m = f().filter(g => g.focusable).map(g => g.ref.current);
            if (v === "last")
                m.reverse();
            else if (v === "prev" || v === "next") {
                v === "prev" && m.reverse();
                const g = m.indexOf(y.currentTarget);
                m = c.loop ? DM(m, g + 1) : m.slice(g + 1);
            }
            setTimeout(() => _S(m));
        } }) })) }); });
AS.displayName = jS;
var _M = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function MM(e, t) { return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e; }
function IM(e, t, n) { const r = MM(e.key, n); if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return _M[r]; }
function _S(e, t = !1) { const n = document.activeElement; for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n))
        return; }
function DM(e, t) { return e.map((n, r) => e[(t + r) % e.length]); }
var LM = OS, $M = AS, FM = "Toggle", _h = u.forwardRef((e, t) => { const { pressed: n, defaultPressed: r = !1, onPressedChange: o } = e, i = __rest(e, ["pressed", "defaultPressed", "onPressedChange"]), [s = !1, a] = It({ prop: n, onChange: o, defaultProp: r }); return p.jsx(ne.button, Object.assign(Object.assign({ type: "button", "aria-pressed": s, "data-state": s ? "on" : "off", "data-disabled": e.disabled ? "" : void 0 }, i), { ref: t, onClick: W(e.onClick, () => { e.disabled || a(!s); }) })); });
_h.displayName = FM;
var MS = _h, Ri = "ToggleGroup", [IS, pL] = hn(Ri, [TS]), DS = TS(), Mh = Me.forwardRef((e, t) => { const { type: n } = e, r = __rest(e, ["type"]); if (n === "single") {
    const o = r;
    return p.jsx(zM, Object.assign(Object.assign({}, o), { ref: t }));
} if (n === "multiple") {
    const o = r;
    return p.jsx(BM, Object.assign(Object.assign({}, o), { ref: t }));
} throw new Error(`Missing prop \`type\` expected on \`${Ri}\``); });
Mh.displayName = Ri;
var [LS, $S] = IS(Ri), zM = Me.forwardRef((e, t) => { const { value: n, defaultValue: r, onValueChange: o = () => { } } = e, i = __rest(e, ["value", "defaultValue", "onValueChange"]), [s, a] = It({ prop: n, defaultProp: r, onChange: o }); return p.jsx(LS, { scope: e.__scopeToggleGroup, type: "single", value: s ? [s] : [], onItemActivate: a, onItemDeactivate: Me.useCallback(() => a(""), [a]), children: p.jsx(FS, Object.assign(Object.assign({}, i), { ref: t })) }); }), BM = Me.forwardRef((e, t) => { const { value: n, defaultValue: r, onValueChange: o = () => { } } = e, i = __rest(e, ["value", "defaultValue", "onValueChange"]), [s = [], a] = It({ prop: n, defaultProp: r, onChange: o }), l = Me.useCallback(d => a((f = []) => [...f, d]), [a]), c = Me.useCallback(d => a((f = []) => f.filter(h => h !== d)), [a]); return p.jsx(LS, { scope: e.__scopeToggleGroup, type: "multiple", value: s, onItemActivate: l, onItemDeactivate: c, children: p.jsx(FS, Object.assign(Object.assign({}, i), { ref: t })) }); });
Mh.displayName = Ri;
var [UM, VM] = IS(Ri), FS = Me.forwardRef((e, t) => { const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: i, dir: s, loop: a = !0 } = e, l = __rest(e, ["__scopeToggleGroup", "disabled", "rovingFocus", "orientation", "dir", "loop"]), c = DS(n), d = qs(s), f = Object.assign({ role: "group", dir: d }, l); return p.jsx(UM, { scope: n, rovingFocus: o, disabled: r, children: o ? p.jsx(LM, Object.assign(Object.assign({ asChild: !0 }, c), { orientation: i, dir: d, loop: a, children: p.jsx(ne.div, Object.assign(Object.assign({}, f), { ref: t })) })) : p.jsx(ne.div, Object.assign(Object.assign({}, f), { ref: t })) }); }), Dl = "ToggleGroupItem", zS = Me.forwardRef((e, t) => { const n = $S(Dl, e.__scopeToggleGroup), r = VM(Dl, e.__scopeToggleGroup), o = DS(e.__scopeToggleGroup), i = n.value.includes(e.value), s = r.disabled || e.disabled, a = Object.assign(Object.assign({}, e), { pressed: i, disabled: s }), l = Me.useRef(null); return r.rovingFocus ? p.jsx($M, Object.assign(Object.assign({ asChild: !0 }, o), { focusable: !s, active: i, ref: l, children: p.jsx(Tg, Object.assign(Object.assign({}, a), { ref: t })) })) : p.jsx(Tg, Object.assign(Object.assign({}, a), { ref: t })); });
zS.displayName = Dl;
var Tg = Me.forwardRef((e, t) => { const { __scopeToggleGroup: n, value: r } = e, o = __rest(e, ["__scopeToggleGroup", "value"]), i = $S(Dl, n), s = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, a = i.type === "single" ? s : void 0; return p.jsx(_h, Object.assign(Object.assign(Object.assign({}, a), o), { ref: t, onPressedChange: l => { l ? i.onItemActivate(r) : i.onItemDeactivate(r); } })); }), BS = Mh, US = zS;
const VS = Xs("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", { variants: { variant: { default: "bg-transparent", outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground" }, size: { default: "h-10 px-3", sm: "h-9 px-2.5", lg: "h-11 px-5" } }, defaultVariants: { variant: "default", size: "default" } }), HM = u.forwardRef((_q, o) => {
    var { className: e, variant: t, size: n } = _q, r = __rest(_q, ["className", "variant", "size"]);
    return p.jsx(MS, Object.assign({ ref: o, className: J(VS({ variant: t, size: n, className: e })) }, r));
});
HM.displayName = MS.displayName;
const HS = u.createContext({ size: "default", variant: "default" }), Ih = u.forwardRef((_q, i) => {
    var { className: e, variant: t, size: n, children: r } = _q, o = __rest(_q, ["className", "variant", "size", "children"]);
    return p.jsx(BS, Object.assign(Object.assign({ ref: i, className: J("flex items-center justify-center gap-1", e) }, o), { children: p.jsx(HS.Provider, { value: { variant: t, size: n }, children: r }) }));
});
Ih.displayName = BS.displayName;
const Dh = u.forwardRef((_q, i) => { var { className: e, children: t, variant: n, size: r } = _q, o = __rest(_q, ["className", "children", "variant", "size"]); const s = u.useContext(HS); return p.jsx(US, Object.assign(Object.assign({ ref: i, className: J(VS({ variant: s.variant || n, size: s.size || r }), e) }, o), { children: t })); });
Dh.displayName = US.displayName;
function WM({ productCategory: e, handleCategoryChanges: t, productTree: n }) { var _q; const r = (_q = n.get(e.id)) !== null && _q !== void 0 ? _q : [], o = s => { t(e.id, s); }, i = s => p.jsx(Dh, { className: "bg-slate-100 data-[state=on]:bg-slate-200", size: "sm", value: s.id, "aria-label": `Toggle brand ${s.name}`, children: s.name }, s.id); return p.jsxs("div", { className: "pb-3", children: [p.jsx("h4", { className: "text-base font-semibold text-foreground", children: e.name }), p.jsxs(Ih, { className: "justify-start flex-wrap m-2", type: "multiple", value: r, onValueChange: o, children: [i(e), e.children.map(i)] })] }); }
function KM() { var _q; const { choosenProductCategories_Map: e, updateChoosenProductCategories_Map: t, updateChoosenProductCategories: n } = Pi(), r = e, o = t, i = mi({ queryKey: ["getProductCategories"], queryFn: PM.retriveOrdered_productCategories }); if (i.isLoading)
    return p.jsx("div", { children: "loading data..." }); const a = ((_q = i.data) !== null && _q !== void 0 ? _q : []).map(c => p.jsx(WM, { productCategory: c, handleCategoryChanges: l, productTree: r }, c.id)); function l(c, d) { const f = new Map(r); f.set(c, d); const h = []; for (const x of f)
    for (const y of x[1])
        h.push(y); o(f), n(h); } return p.jsxs("div", { children: [p.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Categorias:" }), a] }); }
function GM() { var _q; const { choosenBrands: e, updateChoosenBrands: t } = Pi(), n = mi({ queryKey: ["getBrands"], queryFn: _c.getAll_Brands }); if (n.isLoading)
    return p.jsx("div", { children: "loading data..." }); const o = ((_q = n.data) !== null && _q !== void 0 ? _q : []).map(i => p.jsx(Dh, { className: "bg-slate-100 data-[state=on]:bg-slate-200", size: "sm", value: i.id, "aria-label": `Toggle brand ${i.name}`, children: i.name }, i.id)); return p.jsxs("div", { children: [p.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Marcas:" }), p.jsx(Ih, { className: "justify-start flex-wrap m-2", type: "multiple", value: e, onValueChange: t, children: o })] }); }
const ss = u.forwardRef((_q, r) => {
    var { className: e, type: t } = _q, n = __rest(_q, ["className", "type"]);
    return p.jsx("input", Object.assign({ type: t, className: J("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e), ref: r }, n));
});
ss.displayName = "Input";
function Ll(e, [t, n]) { return Math.min(n, Math.max(t, e)); }
var WS = ["PageUp", "PageDown"], KS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], GS = { "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"], "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"] }, Ni = "Slider", [Af, QM, qM] = Ys(Ni), [QS, hL] = hn(Ni, [qM]), [YM, Ic] = QS(Ni), qS = u.forwardRef((e, t) => { const { name: n, min: r = 0, max: o = 100, step: i = 1, orientation: s = "horizontal", disabled: a = !1, minStepsBetweenThumbs: l = 0, defaultValue: c = [r], value: d, onValueChange: f = () => { }, onValueCommit: h = () => { }, inverted: x = !1 } = e, y = __rest(e, ["name", "min", "max", "step", "orientation", "disabled", "minStepsBetweenThumbs", "defaultValue", "value", "onValueChange", "onValueCommit", "inverted"]), v = u.useRef(new Set), S = u.useRef(0), g = s === "horizontal" ? XM : JM, [w = [], C] = It({ prop: d, defaultProp: c, onChange: T => { var D; (D = [...v.current][S.current]) == null || D.focus(), f(T); } }), E = u.useRef(w); function R(T) { const M = rI(w, T); k(T, M); } function b(T) { k(T, S.current); } function P() { const T = E.current[S.current]; w[S.current] !== T && h(w); } function k(T, M, { commit: D } = { commit: !1 }) { const te = aI(i), G = lI(Math.round((T - r) / i) * i + r, te), U = Ll(G, [r, o]); C((K = []) => { const F = tI(K, U, M); if (sI(F, l * i)) {
    S.current = F.indexOf(U);
    const A = String(F) !== String(K);
    return A && D && h(F), A ? F : K;
}
else
    return K; }); } return p.jsx(YM, { scope: e.__scopeSlider, name: n, disabled: a, min: r, max: o, valueIndexToChangeRef: S, thumbs: v.current, values: w, orientation: s, children: p.jsx(Af.Provider, { scope: e.__scopeSlider, children: p.jsx(Af.Slot, { scope: e.__scopeSlider, children: p.jsx(g, Object.assign(Object.assign({ "aria-disabled": a, "data-disabled": a ? "" : void 0 }, y), { ref: t, onPointerDown: W(y.onPointerDown, () => { a || (E.current = w); }), min: r, max: o, inverted: x, onSlideStart: a ? void 0 : R, onSlideMove: a ? void 0 : b, onSlideEnd: a ? void 0 : P, onHomeKeyDown: () => !a && k(r, 0, { commit: !0 }), onEndKeyDown: () => !a && k(o, w.length - 1, { commit: !0 }), onStepKeyDown: ({ event: T, direction: M }) => { if (!a) {
                    const G = WS.includes(T.key) || T.shiftKey && KS.includes(T.key) ? 10 : 1, U = S.current, K = w[U], F = i * G * M;
                    k(K + F, U, { commit: !0 });
                } } })) }) }) }); });
qS.displayName = Ni;
var [YS, XS] = QS(Ni, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }), XM = u.forwardRef((e, t) => { const { min: n, max: r, dir: o, inverted: i, onSlideStart: s, onSlideMove: a, onSlideEnd: l, onStepKeyDown: c } = e, d = __rest(e, ["min", "max", "dir", "inverted", "onSlideStart", "onSlideMove", "onSlideEnd", "onStepKeyDown"]), [f, h] = u.useState(null), x = ce(t, w => h(w)), y = u.useRef(), v = qs(o), S = v === "ltr", m = S && !i || !S && i; function g(w) { const C = y.current || f.getBoundingClientRect(), E = [0, C.width], b = Lh(E, m ? [n, r] : [r, n]); return y.current = C, b(w - C.left); } return p.jsx(YS, { scope: e.__scopeSlider, startEdge: m ? "left" : "right", endEdge: m ? "right" : "left", direction: m ? 1 : -1, size: "width", children: p.jsx(JS, Object.assign(Object.assign({ dir: v, "data-orientation": "horizontal" }, d), { ref: x, style: Object.assign(Object.assign({}, d.style), { "--radix-slider-thumb-transform": "translateX(-50%)" }), onSlideStart: w => { const C = g(w.clientX); s == null || s(C); }, onSlideMove: w => { const C = g(w.clientX); a == null || a(C); }, onSlideEnd: () => { y.current = void 0, l == null || l(); }, onStepKeyDown: w => { const E = GS[m ? "from-left" : "from-right"].includes(w.key); c == null || c({ event: w, direction: E ? -1 : 1 }); } })) }); }), JM = u.forwardRef((e, t) => { const { min: n, max: r, inverted: o, onSlideStart: i, onSlideMove: s, onSlideEnd: a, onStepKeyDown: l } = e, c = __rest(e, ["min", "max", "inverted", "onSlideStart", "onSlideMove", "onSlideEnd", "onStepKeyDown"]), d = u.useRef(null), f = ce(t, d), h = u.useRef(), x = !o; function y(v) { const S = h.current || d.current.getBoundingClientRect(), m = [0, S.height], w = Lh(m, x ? [r, n] : [n, r]); return h.current = S, w(v - S.top); } return p.jsx(YS, { scope: e.__scopeSlider, startEdge: x ? "bottom" : "top", endEdge: x ? "top" : "bottom", size: "height", direction: x ? 1 : -1, children: p.jsx(JS, Object.assign(Object.assign({ "data-orientation": "vertical" }, c), { ref: f, style: Object.assign(Object.assign({}, c.style), { "--radix-slider-thumb-transform": "translateY(50%)" }), onSlideStart: v => { const S = y(v.clientY); i == null || i(S); }, onSlideMove: v => { const S = y(v.clientY); s == null || s(S); }, onSlideEnd: () => { h.current = void 0, a == null || a(); }, onStepKeyDown: v => { const m = GS[x ? "from-bottom" : "from-top"].includes(v.key); l == null || l({ event: v, direction: m ? -1 : 1 }); } })) }); }), JS = u.forwardRef((e, t) => { const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: i, onHomeKeyDown: s, onEndKeyDown: a, onStepKeyDown: l } = e, c = __rest(e, ["__scopeSlider", "onSlideStart", "onSlideMove", "onSlideEnd", "onHomeKeyDown", "onEndKeyDown", "onStepKeyDown"]), d = Ic(Ni, n); return p.jsx(ne.span, Object.assign(Object.assign({}, c), { ref: t, onKeyDown: W(e.onKeyDown, f => { f.key === "Home" ? (s(f), f.preventDefault()) : f.key === "End" ? (a(f), f.preventDefault()) : WS.concat(KS).includes(f.key) && (l(f), f.preventDefault()); }), onPointerDown: W(e.onPointerDown, f => { const h = f.target; h.setPointerCapture(f.pointerId), f.preventDefault(), d.thumbs.has(h) ? h.focus() : r(f); }), onPointerMove: W(e.onPointerMove, f => { f.target.hasPointerCapture(f.pointerId) && o(f); }), onPointerUp: W(e.onPointerUp, f => { const h = f.target; h.hasPointerCapture(f.pointerId) && (h.releasePointerCapture(f.pointerId), i(f)); }) })); }), ZS = "SliderTrack", eC = u.forwardRef((e, t) => { const { __scopeSlider: n } = e, r = __rest(e, ["__scopeSlider"]), o = Ic(ZS, n); return p.jsx(ne.span, Object.assign(Object.assign({ "data-disabled": o.disabled ? "" : void 0, "data-orientation": o.orientation }, r), { ref: t })); });
eC.displayName = ZS;
var _f = "SliderRange", tC = u.forwardRef((e, t) => { const { __scopeSlider: n } = e, r = __rest(e, ["__scopeSlider"]), o = Ic(_f, n), i = XS(_f, n), s = u.useRef(null), a = ce(t, s), l = o.values.length, c = o.values.map(h => rC(h, o.min, o.max)), d = l > 1 ? Math.min(...c) : 0, f = 100 - Math.max(...c); return p.jsx(ne.span, Object.assign(Object.assign({ "data-orientation": o.orientation, "data-disabled": o.disabled ? "" : void 0 }, r), { ref: a, style: Object.assign(Object.assign({}, e.style), { [i.startEdge]: d + "%", [i.endEdge]: f + "%" }) })); });
tC.displayName = _f;
var Mf = "SliderThumb", nC = u.forwardRef((e, t) => { const n = QM(e.__scopeSlider), [r, o] = u.useState(null), i = ce(t, a => o(a)), s = u.useMemo(() => r ? n().findIndex(a => a.ref.current === r) : -1, [n, r]); return p.jsx(ZM, Object.assign(Object.assign({}, e), { ref: i, index: s })); }), ZM = u.forwardRef((e, t) => { const { __scopeSlider: n, index: r, name: o } = e, i = __rest(e, ["__scopeSlider", "index", "name"]), s = Ic(Mf, n), a = XS(Mf, n), [l, c] = u.useState(null), d = ce(t, g => c(g)), f = l ? !!l.closest("form") : !0, h = Xw(l), x = s.values[r], y = x === void 0 ? 0 : rC(x, s.min, s.max), v = nI(r, s.values.length), S = h == null ? void 0 : h[a.size], m = S ? oI(S, y, a.direction) : 0; return u.useEffect(() => { if (l)
    return s.thumbs.add(l), () => { s.thumbs.delete(l); }; }, [l, s.thumbs]), p.jsxs("span", { style: { transform: "var(--radix-slider-thumb-transform)", position: "absolute", [a.startEdge]: `calc(${y}% + ${m}px)` }, children: [p.jsx(Af.ItemSlot, { scope: e.__scopeSlider, children: p.jsx(ne.span, Object.assign(Object.assign({ role: "slider", "aria-label": e["aria-label"] || v, "aria-valuemin": s.min, "aria-valuenow": x, "aria-valuemax": s.max, "aria-orientation": s.orientation, "data-orientation": s.orientation, "data-disabled": s.disabled ? "" : void 0, tabIndex: s.disabled ? void 0 : 0 }, i), { ref: d, style: x === void 0 ? { display: "none" } : e.style, onFocus: W(e.onFocus, () => { s.valueIndexToChangeRef.current = r; }) })) }), f && p.jsx(eI, { name: o !== null && o !== void 0 ? o : (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0), value: x }, r)] }); });
nC.displayName = Mf;
var eI = e => { const { value: t } = e, n = __rest(e, ["value"]), r = u.useRef(null), o = Gp(t); return u.useEffect(() => { const i = r.current, s = window.HTMLInputElement.prototype, l = Object.getOwnPropertyDescriptor(s, "value").set; if (o !== t && l) {
    const c = new Event("input", { bubbles: !0 });
    l.call(i, t), i.dispatchEvent(c);
} }, [o, t]), p.jsx("input", Object.assign(Object.assign({ style: { display: "none" } }, n), { ref: r, defaultValue: t })); };
function tI(e = [], t, n) { const r = [...e]; return r[n] = t, r.sort((o, i) => o - i); }
function rC(e, t, n) { const i = 100 / (n - t) * (e - t); return Ll(i, [0, 100]); }
function nI(e, t) { return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0; }
function rI(e, t) { if (e.length === 1)
    return 0; const n = e.map(o => Math.abs(o - t)), r = Math.min(...n); return n.indexOf(r); }
function oI(e, t, n) { const r = e / 2, i = Lh([0, 50], [0, r]); return (r - i(t) * n) * n; }
function iI(e) { return e.slice(0, -1).map((t, n) => e[n + 1] - t); }
function sI(e, t) { if (t > 0) {
    const n = iI(e);
    return Math.min(...n) >= t;
} return !0; }
function Lh(e, t) { return n => { if (e[0] === e[1] || t[0] === t[1])
    return t[0]; const r = (t[1] - t[0]) / (e[1] - e[0]); return t[0] + r * (n - e[0]); }; }
function aI(e) { return (String(e).split(".")[1] || "").length; }
function lI(e, t) { const n = Math.pow(10, t); return Math.round(e * n) / n; }
var oC = qS, cI = eC, uI = tC, dI = nC;
const iC = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsxs(oC, Object.assign(Object.assign({ ref: n, className: J("relative flex w-full touch-none select-none items-center", e) }, t), { children: [p.jsx(cI, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: p.jsx(uI, { className: "absolute h-full bg-primary" }) }), p.jsx(dI, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })] }));
});
iC.displayName = oC.displayName;
function fI() { const { choosenPriceRange: e, updateChoosenPriceRange: t } = Pi(), n = (o, i) => { t(o === "min" ? [i, e[1]] : [e[0], i]); }, r = (o, i) => { const s = l => { n(i, String(l[0])); }, a = l => { n(i, l.currentTarget.value); }; return p.jsxs("div", { className: " pb-2 gap-8 flex items-center justify-start", children: [p.jsx(iC, { className: "max-w-64", value: [Number(o)], onValueChange: s, max: 1e3, step: 1 }), p.jsx(ss, { className: "h-8 max-w-20", type: "number", value: o, onChange: a, placeholder: i })] }); }; return p.jsxs("div", { children: [p.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Precios:" }), p.jsxs("div", { className: "", children: [r(e[0], "min"), r(e[1], "max")] })] }); }
function pI() { return p.jsxs("div", { className: "max-h-[50vh] overflow-y-auto", children: [p.jsx("div", { className: "pt-3", children: p.jsx(fI, {}) }), p.jsx("div", { className: "border-t-1 pt-3", children: p.jsx(KM, {}) }), p.jsx("div", { className: "border-t-1 pt-3", children: p.jsx(GM, {}) })] }); }
function hI() { const { showFilterSettings: e, updateChoosenBrands: t, updateChoosenProductCategories: n, updateChoosenProductCategories_Map: r, updateChoosenPriceRange: o, updateShowFilterSettings: i } = Pi(), s = () => { t([]), n([]), r(new Map), o(["0", "1000"]); }; return p.jsxs(wM, { open: e, onOpenChange: i, children: [p.jsx(SM, { asChild: !0 }), p.jsx(ES, { className: "min-w-80 p-0", side: "bottom", children: p.jsxs("div", { className: "max-w-screen-lg", children: [p.jsxs(bS, { className: "flex-row text-start p-6 border-b-1", children: [p.jsxs("div", { className: "w-4/5 space-y-2", children: [p.jsx(RS, { children: "Opciones de filtrado" }), p.jsx(NS, { children: "Seleccione los filtros que desea aplicar para la busqueda:" })] }), p.jsx("div", { className: "w-1/5 flex items-center justify-center", children: p.jsx(Oe, { onClick: s, size: "sm", children: "Reset" }) })] }), p.jsx("div", { className: "mx-3", children: p.jsx(pI, {}) }), p.jsxs(PS, { className: "items-center pb-3 pt-2 border-t-1 border-gray-300 sm:space-x-0 sm:px-6", children: [p.jsx("div", { className: "w-0 sm:w-4/5" }), p.jsx("div", { className: "w-auto flex items-center justify-center sm:w-1/5 ", children: p.jsx(CM, { asChild: !0, children: p.jsx(Oe, { className: "w-36 ", type: "submit", children: "Save changes" }) }) })] })] }) })] }); }
function mI() { return p.jsxs("div", { children: [p.jsx(oa, {}), p.jsxs("main", { children: [p.jsx(hI, {}), p.jsx(xM, {})] })] }); }
var [Dc, mL] = hn("Tooltip", [bi]), Lc = bi(), sC = "TooltipProvider", vI = 700, If = "tooltip.open", [gI, $h] = Dc(sC), aC = e => { const { __scopeTooltip: t, delayDuration: n = vI, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: i } = e, [s, a] = u.useState(!0), l = u.useRef(!1), c = u.useRef(0); return u.useEffect(() => { const d = c.current; return () => window.clearTimeout(d); }, []), p.jsx(gI, { scope: t, isOpenDelayed: s, delayDuration: n, onOpen: u.useCallback(() => { window.clearTimeout(c.current), a(!1); }, []), onClose: u.useCallback(() => { window.clearTimeout(c.current), c.current = window.setTimeout(() => a(!0), r); }, [r]), isPointerInTransitRef: l, onPointerInTransitChange: u.useCallback(d => { l.current = d; }, []), disableHoverableContent: o, children: i }); };
aC.displayName = sC;
var $c = "Tooltip", [yI, Fc] = Dc($c), lC = e => { const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: i, disableHoverableContent: s, delayDuration: a } = e, l = $h($c, e.__scopeTooltip), c = Lc(t), [d, f] = u.useState(null), h = Kt(), x = u.useRef(0), y = s !== null && s !== void 0 ? s : l.disableHoverableContent, v = a !== null && a !== void 0 ? a : l.delayDuration, S = u.useRef(!1), [m = !1, g] = It({ prop: r, defaultProp: o, onChange: b => { b ? (l.onOpen(), document.dispatchEvent(new CustomEvent(If))) : l.onClose(), i == null || i(b); } }), w = u.useMemo(() => m ? S.current ? "delayed-open" : "instant-open" : "closed", [m]), C = u.useCallback(() => { window.clearTimeout(x.current), S.current = !1, g(!0); }, [g]), E = u.useCallback(() => { window.clearTimeout(x.current), g(!1); }, [g]), R = u.useCallback(() => { window.clearTimeout(x.current), x.current = window.setTimeout(() => { S.current = !0, g(!0); }, v); }, [v, g]); return u.useEffect(() => () => window.clearTimeout(x.current), []), p.jsx(gh, Object.assign(Object.assign({}, c), { children: p.jsx(yI, { scope: t, contentId: h, open: m, stateAttribute: w, trigger: d, onTriggerChange: f, onTriggerEnter: u.useCallback(() => { l.isOpenDelayed ? R() : C(); }, [l.isOpenDelayed, R, C]), onTriggerLeave: u.useCallback(() => { y ? E() : window.clearTimeout(x.current); }, [E, y]), onOpen: C, onClose: E, disableHoverableContent: y, children: n }) })); };
lC.displayName = $c;
var Df = "TooltipTrigger", cC = u.forwardRef((e, t) => { const { __scopeTooltip: n } = e, r = __rest(e, ["__scopeTooltip"]), o = Fc(Df, n), i = $h(Df, n), s = Lc(n), a = u.useRef(null), l = ce(t, a, o.onTriggerChange), c = u.useRef(!1), d = u.useRef(!1), f = u.useCallback(() => c.current = !1, []); return u.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), p.jsx(fc, Object.assign(Object.assign({ asChild: !0 }, s), { children: p.jsx(ne.button, Object.assign(Object.assign({ "aria-describedby": o.open ? o.contentId : void 0, "data-state": o.stateAttribute }, r), { ref: l, onPointerMove: W(e.onPointerMove, h => { h.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0); }), onPointerLeave: W(e.onPointerLeave, () => { o.onTriggerLeave(), d.current = !1; }), onPointerDown: W(e.onPointerDown, () => { c.current = !0, document.addEventListener("pointerup", f, { once: !0 }); }), onFocus: W(e.onFocus, () => { c.current || o.onOpen(); }), onBlur: W(e.onBlur, o.onClose), onClick: W(e.onClick, o.onClose) })) })); });
cC.displayName = Df;
var xI = "TooltipPortal", [vL, wI] = Dc(xI, { forceMount: void 0 }), li = "TooltipContent", uC = u.forwardRef((e, t) => { const n = wI(li, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top" } = e, i = __rest(e, ["forceMount", "side"]), s = Fc(li, e.__scopeTooltip); return p.jsx(Xt, { present: r || s.open, children: s.disableHoverableContent ? p.jsx(dC, Object.assign(Object.assign({ side: o }, i), { ref: t })) : p.jsx(SI, Object.assign(Object.assign({ side: o }, i), { ref: t })) }); }), SI = u.forwardRef((e, t) => { const n = Fc(li, e.__scopeTooltip), r = $h(li, e.__scopeTooltip), o = u.useRef(null), i = ce(t, o), [s, a] = u.useState(null), { trigger: l, onClose: c } = n, d = o.current, { onPointerInTransitChange: f } = r, h = u.useCallback(() => { a(null), f(!1); }, [f]), x = u.useCallback((y, v) => { const S = y.currentTarget, m = { x: y.clientX, y: y.clientY }, g = PI(m, S.getBoundingClientRect()), w = RI(m, g), C = NI(v.getBoundingClientRect()), E = TI([...w, ...C]); a(E), f(!0); }, [f]); return u.useEffect(() => () => h(), [h]), u.useEffect(() => { if (l && d) {
    const y = S => x(S, d), v = S => x(S, l);
    return l.addEventListener("pointerleave", y), d.addEventListener("pointerleave", v), () => { l.removeEventListener("pointerleave", y), d.removeEventListener("pointerleave", v); };
} }, [l, d, x, h]), u.useEffect(() => { if (s) {
    const y = v => { const S = v.target, m = { x: v.clientX, y: v.clientY }, g = (l == null ? void 0 : l.contains(S)) || (d == null ? void 0 : d.contains(S)), w = !kI(m, s); g ? h() : w && (h(), c()); };
    return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
} }, [l, d, s, c, h]), p.jsx(dC, Object.assign(Object.assign({}, e), { ref: i })); }), [CI, EI] = Dc($c, { isInside: !1 }), dC = u.forwardRef((e, t) => { const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s } = e, a = __rest(e, ["__scopeTooltip", "children", "aria-label", "onEscapeKeyDown", "onPointerDownOutside"]), l = Fc(li, n), c = Lc(n), { onClose: d } = l; return u.useEffect(() => (document.addEventListener(If, d), () => document.removeEventListener(If, d)), [d]), u.useEffect(() => { if (l.trigger) {
    const f = h => { const x = h.target; x != null && x.contains(l.trigger) && d(); };
    return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
} }, [l.trigger, d]), p.jsx(vi, { asChild: !0, disableOutsidePointerEvents: !1, onEscapeKeyDown: i, onPointerDownOutside: s, onFocusOutside: f => f.preventDefault(), onDismiss: d, children: p.jsxs(yh, Object.assign(Object.assign(Object.assign({ "data-state": l.stateAttribute }, c), a), { ref: t, style: Object.assign(Object.assign({}, a.style), { "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" }), children: [p.jsx(kx, { children: r }), p.jsx(CI, { scope: n, isInside: !0, children: p.jsx(jx, { id: l.contentId, role: "tooltip", children: o || r }) })] })) }); });
uC.displayName = li;
var fC = "TooltipArrow", bI = u.forwardRef((e, t) => { const { __scopeTooltip: n } = e, r = __rest(e, ["__scopeTooltip"]), o = Lc(n); return EI(fC, n).isInside ? null : p.jsx(xh, Object.assign(Object.assign(Object.assign({}, o), r), { ref: t })); });
bI.displayName = fC;
function PI(e, t) { const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x); switch (Math.min(n, r, o, i)) {
    case i: return "left";
    case o: return "right";
    case n: return "top";
    case r: return "bottom";
    default: throw new Error("unreachable");
} }
function RI(e, t, n = 5) { const r = []; switch (t) {
    case "top":
        r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
        break;
    case "bottom":
        r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
        break;
    case "left":
        r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
        break;
    case "right":
        r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
        break;
} return r; }
function NI(e) { const { top: t, right: n, bottom: r, left: o } = e; return [{ x: o, y: t }, { x: n, y: t }, { x: n, y: r }, { x: o, y: r }]; }
function kI(e, t) { const { x: n, y: r } = e; let o = !1; for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, l = t[i].y, c = t[s].x, d = t[s].y;
    l > r != d > r && n < (c - a) * (r - l) / (d - l) + a && (o = !o);
} return o; }
function TI(e) { const t = e.slice(); return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), OI(t); }
function OI(e) { if (e.length <= 1)
    return e.slice(); const t = []; for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2;) {
        const i = t[t.length - 1], s = t[t.length - 2];
        if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
            t.pop();
        else
            break;
    }
    t.push(o);
} t.pop(); const n = []; for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2;) {
        const i = n[n.length - 1], s = n[n.length - 2];
        if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
            n.pop();
        else
            break;
    }
    n.push(o);
} return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n); }
var jI = aC, AI = lC, _I = cC, pC = uC;
const as = jI, yn = AI, xn = _I, nn = u.forwardRef((_q, r) => {
    var { className: e, sideOffset: t = 4 } = _q, n = __rest(_q, ["className", "sideOffset"]);
    return p.jsx(pC, Object.assign({ ref: r, sideOffset: t, className: J("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e) }, n));
});
nn.displayName = pC.displayName;
function MI() { return p.jsxs("aside", { className: "inset-y fixed  left-0 z-20 flex h-full flex-col border-r", children: [p.jsx("div", { className: "border-b p-2", children: p.jsx(Oe, { variant: "outline", size: "icon", "aria-label": "Home", children: p.jsx(Rk, { className: "size-5 fill-foreground" }) }) }), p.jsx("nav", { className: "grid gap-1 p-2", children: p.jsxs(as, { children: [p.jsxs(yn, { children: [p.jsx(xn, { asChild: !0, children: p.jsx(Oe, { variant: "ghost", size: "icon", className: "rounded-lg bg-muted", "aria-label": "Playground", children: p.jsx(bk, { className: "size-5" }) }) }), p.jsx(nn, { side: "right", sideOffset: 5, children: "Playground" })] }), p.jsxs(yn, { children: [p.jsx(xn, { asChild: !0, children: p.jsx(Oe, { variant: "ghost", size: "icon", className: "rounded-lg", "aria-label": "Models", children: p.jsx(hk, { className: "size-5" }) }) }), p.jsx(nn, { side: "right", sideOffset: 5, children: "Models" })] }), p.jsxs(yn, { children: [p.jsx(xn, { asChild: !0, children: p.jsx(Oe, { variant: "ghost", size: "icon", className: "rounded-lg", "aria-label": "API", children: p.jsx(gk, { className: "size-5" }) }) }), p.jsx(nn, { side: "right", sideOffset: 5, children: "API" })] }), p.jsxs(yn, { children: [p.jsx(xn, { asChild: !0, children: p.jsx(Oe, { variant: "ghost", size: "icon", className: "rounded-lg", "aria-label": "Documentation", children: p.jsx(pk, { className: "size-5" }) }) }), p.jsx(nn, { side: "right", sideOffset: 5, children: "Documentation" })] }), p.jsxs(yn, { children: [p.jsx(xn, { asChild: !0, children: p.jsx(Oe, { variant: "ghost", size: "icon", className: "rounded-lg", "aria-label": "Settings", children: p.jsx(Ek, { className: "size-5" }) }) }), p.jsx(nn, { side: "right", sideOffset: 5, children: "Settings" })] })] }) }), p.jsxs("nav", { className: "mt-auto grid gap-1 p-2", children: [p.jsx(as, { children: p.jsxs(yn, { children: [p.jsx(xn, { asChild: !0, children: p.jsx(Oe, { variant: "ghost", size: "icon", className: "mt-auto rounded-lg", "aria-label": "Help", children: p.jsx(xk, { className: "size-5" }) }) }), p.jsx(nn, { side: "right", sideOffset: 5, children: "Help" })] }) }), p.jsx(as, { children: p.jsxs(yn, { children: [p.jsx(xn, { asChild: !0, children: p.jsx(Oe, { variant: "ghost", size: "icon", className: "mt-auto rounded-lg", "aria-label": "Account", children: p.jsx(Pk, { className: "size-5" }) }) }), p.jsx(nn, { side: "right", sideOffset: 5, children: "Account" })] }) })] })] }); }
var II = "Label", hC = u.forwardRef((e, t) => p.jsx(ne.label, Object.assign(Object.assign({}, e), { ref: t, onMouseDown: n => { var o; n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault()); } })));
hC.displayName = II;
var mC = hC;
const DI = Xs("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), Gn = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(mC, Object.assign({ ref: n, className: J(DI(), e) }, t));
});
Gn.displayName = mC.displayName;
var LI = [" ", "Enter", "ArrowUp", "ArrowDown"], $I = [" ", "Enter"], sa = "Select", [zc, Bc, FI] = Ys(sa), [ki, gL] = hn(sa, [FI, bi]), Uc = bi(), [zI, Cr] = ki(sa), [BI, UI] = ki(sa), vC = e => { const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: s, defaultValue: a, onValueChange: l, dir: c, name: d, autoComplete: f, disabled: h, required: x } = e, y = Uc(t), [v, S] = u.useState(null), [m, g] = u.useState(null), [w, C] = u.useState(!1), E = qs(c), [R = !1, b] = It({ prop: r, defaultProp: o, onChange: i }), [P, k] = It({ prop: s, defaultProp: a, onChange: l }), T = u.useRef(null), M = v ? !!v.closest("form") : !0, [D, te] = u.useState(new Set), G = Array.from(D).map(U => U.props.value).join(";"); return p.jsx(gh, Object.assign(Object.assign({}, y), { children: p.jsxs(zI, { required: x, scope: t, trigger: v, onTriggerChange: S, valueNode: m, onValueNodeChange: g, valueNodeHasChildren: w, onValueNodeHasChildrenChange: C, contentId: Kt(), value: P, onValueChange: k, open: R, onOpenChange: b, dir: E, triggerPointerDownPosRef: T, disabled: h, children: [p.jsx(zc.Provider, { scope: t, children: p.jsx(BI, { scope: e.__scopeSelect, onNativeOptionAdd: u.useCallback(U => { te(K => new Set(K).add(U)); }, []), onNativeOptionRemove: u.useCallback(U => { te(K => { const F = new Set(K); return F.delete(U), F; }); }, []), children: n }) }), M ? p.jsxs(BC, { "aria-hidden": !0, required: x, tabIndex: -1, name: d, autoComplete: f, value: P, onChange: U => k(U.target.value), disabled: h, children: [P === void 0 ? p.jsx("option", { value: "" }) : null, Array.from(D)] }, G) : null] }) })); };
vC.displayName = sa;
var gC = "SelectTrigger", yC = u.forwardRef((e, t) => { const { __scopeSelect: n, disabled: r = !1 } = e, o = __rest(e, ["__scopeSelect", "disabled"]), i = Uc(n), s = Cr(gC, n), a = s.disabled || r, l = ce(t, s.onTriggerChange), c = Bc(n), [d, f, h] = UC(y => { const v = c().filter(g => !g.disabled), S = v.find(g => g.value === s.value), m = VC(v, y, S); m !== void 0 && s.onValueChange(m.value); }), x = () => { a || (s.onOpenChange(!0), h()); }; return p.jsx(fc, Object.assign(Object.assign({ asChild: !0 }, i), { children: p.jsx(ne.button, Object.assign(Object.assign({ type: "button", role: "combobox", "aria-controls": s.contentId, "aria-expanded": s.open, "aria-required": s.required, "aria-autocomplete": "none", dir: s.dir, "data-state": s.open ? "open" : "closed", disabled: a, "data-disabled": a ? "" : void 0, "data-placeholder": zC(s.value) ? "" : void 0 }, o), { ref: l, onClick: W(o.onClick, y => { y.currentTarget.focus(); }), onPointerDown: W(o.onPointerDown, y => { const v = y.target; v.hasPointerCapture(y.pointerId) && v.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && (x(), s.triggerPointerDownPosRef.current = { x: Math.round(y.pageX), y: Math.round(y.pageY) }, y.preventDefault()); }), onKeyDown: W(o.onKeyDown, y => { const v = d.current !== ""; !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && f(y.key), !(v && y.key === " ") && LI.includes(y.key) && (x(), y.preventDefault()); }) })) })); });
yC.displayName = gC;
var xC = "SelectValue", wC = u.forwardRef((e, t) => { const { __scopeSelect: n, className: r, style: o, children: i, placeholder: s = "" } = e, a = __rest(e, ["__scopeSelect", "className", "style", "children", "placeholder"]), l = Cr(xC, n), { onValueNodeHasChildrenChange: c } = l, d = i !== void 0, f = ce(t, l.onValueNodeChange); return ze(() => { c(d); }, [c, d]), p.jsx(ne.span, Object.assign(Object.assign({}, a), { ref: f, style: { pointerEvents: "none" }, children: zC(l.value) ? p.jsx(p.Fragment, { children: s }) : i })); });
wC.displayName = xC;
var VI = "SelectIcon", SC = u.forwardRef((e, t) => { const { __scopeSelect: n, children: r } = e, o = __rest(e, ["__scopeSelect", "children"]); return p.jsx(ne.span, Object.assign(Object.assign({ "aria-hidden": !0 }, o), { ref: t, children: r || "▼" })); });
SC.displayName = VI;
var HI = "SelectPortal", CC = e => p.jsx(pc, Object.assign({ asChild: !0 }, e));
CC.displayName = HI;
var Zr = "SelectContent", EC = u.forwardRef((e, t) => { const n = Cr(Zr, e.__scopeSelect), [r, o] = u.useState(); if (ze(() => { o(new DocumentFragment); }, []), !n.open) {
    const i = r;
    return i ? _n.createPortal(p.jsx(bC, { scope: e.__scopeSelect, children: p.jsx(zc.Slot, { scope: e.__scopeSelect, children: p.jsx("div", { children: e.children }) }) }), i) : null;
} return p.jsx(PC, Object.assign(Object.assign({}, e), { ref: t })); });
EC.displayName = Zr;
var wn = 10, [bC, Er] = ki(Zr), WI = "SelectContentImpl", PC = u.forwardRef((e, t) => { const { __scopeSelect: n, position: r = "item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: i, onPointerDownOutside: s, side: a, sideOffset: l, align: c, alignOffset: d, arrowPadding: f, collisionBoundary: h, collisionPadding: x, sticky: y, hideWhenDetached: v, avoidCollisions: S } = e, m = __rest(e, ["__scopeSelect", "position", "onCloseAutoFocus", "onEscapeKeyDown", "onPointerDownOutside", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "avoidCollisions"]), g = Cr(Zr, n), [w, C] = u.useState(null), [E, R] = u.useState(null), b = ce(t, $ => C($)), [P, k] = u.useState(null), [T, M] = u.useState(null), D = Bc(n), [te, G] = u.useState(!1), U = u.useRef(!1); u.useEffect(() => { if (w)
    return hc(w); }, [w]), lh(); const K = u.useCallback($ => { const [X, ...pe] = D().map(L => L.ref.current), [oe] = pe.slice(-1), Z = document.activeElement; for (const L of $)
    if (L === Z || (L == null || L.scrollIntoView({ block: "nearest" }), L === X && E && (E.scrollTop = 0), L === oe && E && (E.scrollTop = E.scrollHeight), L == null || L.focus(), document.activeElement !== Z))
        return; }, [D, E]), F = u.useCallback(() => K([P, w]), [K, P, w]); u.useEffect(() => { te && F(); }, [te, F]); const { onOpenChange: A, triggerPointerDownPosRef: I } = g; u.useEffect(() => { if (w) {
    let $ = { x: 0, y: 0 };
    const X = oe => { var _q, _z; var Z, L; $ = { x: Math.abs(Math.round(oe.pageX) - ((_q = ((Z = I.current) == null ? void 0 : Z.x)) !== null && _q !== void 0 ? _q : 0)), y: Math.abs(Math.round(oe.pageY) - ((_z = ((L = I.current) == null ? void 0 : L.y)) !== null && _z !== void 0 ? _z : 0)) }; }, pe = oe => { $.x <= 10 && $.y <= 10 ? oe.preventDefault() : w.contains(oe.target) || A(!1), document.removeEventListener("pointermove", X), I.current = null; };
    return I.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", pe, { capture: !0, once: !0 })), () => { document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", pe, { capture: !0 }); };
} }, [w, A, I]), u.useEffect(() => { const $ = () => A(!1); return window.addEventListener("blur", $), window.addEventListener("resize", $), () => { window.removeEventListener("blur", $), window.removeEventListener("resize", $); }; }, [A]); const [Q, ee] = UC($ => { const X = D().filter(Z => !Z.disabled), pe = X.find(Z => Z.ref.current === document.activeElement), oe = VC(X, $, pe); oe && setTimeout(() => oe.ref.current.focus()); }), j = u.useCallback(($, X, pe) => { const oe = !U.current && !pe; (g.value !== void 0 && g.value === X || oe) && (k($), oe && (U.current = !0)); }, [g.value]), V = u.useCallback(() => w == null ? void 0 : w.focus(), [w]), q = u.useCallback(($, X, pe) => { const oe = !U.current && !pe; (g.value !== void 0 && g.value === X || oe) && M($); }, [g.value]), z = r === "popper" ? Lf : RC, Y = z === Lf ? { side: a, sideOffset: l, align: c, alignOffset: d, arrowPadding: f, collisionBoundary: h, collisionPadding: x, sticky: y, hideWhenDetached: v, avoidCollisions: S } : {}; return p.jsx(bC, { scope: n, content: w, viewport: E, onViewportChange: R, itemRefCallback: j, selectedItem: P, onItemLeave: V, itemTextRefCallback: q, focusSelectedItem: F, selectedItemText: T, position: r, isPositioned: te, searchRef: Q, children: p.jsx(vc, { as: hr, allowPinchZoom: !0, children: p.jsx(cc, { asChild: !0, trapped: g.open, onMountAutoFocus: $ => { $.preventDefault(); }, onUnmountAutoFocus: W(o, $ => { var X; (X = g.trigger) == null || X.focus({ preventScroll: !0 }), $.preventDefault(); }), children: p.jsx(vi, { asChild: !0, disableOutsidePointerEvents: !0, onEscapeKeyDown: i, onPointerDownOutside: s, onFocusOutside: $ => $.preventDefault(), onDismiss: () => g.onOpenChange(!1), children: p.jsx(z, Object.assign(Object.assign(Object.assign({ role: "listbox", id: g.contentId, "data-state": g.open ? "open" : "closed", dir: g.dir, onContextMenu: $ => $.preventDefault() }, m), Y), { onPlaced: () => G(!0), ref: b, style: Object.assign({ display: "flex", flexDirection: "column", outline: "none" }, m.style), onKeyDown: W(m.onKeyDown, $ => { const X = $.ctrlKey || $.altKey || $.metaKey; if ($.key === "Tab" && $.preventDefault(), !X && $.key.length === 1 && ee($.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
                        let oe = D().filter(Z => !Z.disabled).map(Z => Z.ref.current);
                        if (["ArrowUp", "End"].includes($.key) && (oe = oe.slice().reverse()), ["ArrowUp", "ArrowDown"].includes($.key)) {
                            const Z = $.target, L = oe.indexOf(Z);
                            oe = oe.slice(L + 1);
                        }
                        setTimeout(() => K(oe)), $.preventDefault();
                    } }) })) }) }) }) }); });
PC.displayName = WI;
var KI = "SelectItemAlignedPosition", RC = u.forwardRef((e, t) => { const { __scopeSelect: n, onPlaced: r } = e, o = __rest(e, ["__scopeSelect", "onPlaced"]), i = Cr(Zr, n), s = Er(Zr, n), [a, l] = u.useState(null), [c, d] = u.useState(null), f = ce(t, b => d(b)), h = Bc(n), x = u.useRef(!1), y = u.useRef(!0), { viewport: v, selectedItem: S, selectedItemText: m, focusSelectedItem: g } = s, w = u.useCallback(() => { if (i.trigger && i.valueNode && a && c && v && S && m) {
    const b = i.trigger.getBoundingClientRect(), P = c.getBoundingClientRect(), k = i.valueNode.getBoundingClientRect(), T = m.getBoundingClientRect();
    if (i.dir !== "rtl") {
        const Z = T.left - P.left, L = k.left - Z, ie = b.left - L, he = b.width + ie, Ee = Math.max(he, P.width), Ke = window.innerWidth - wn, Ze = Ll(L, [wn, Ke - Ee]);
        a.style.minWidth = he + "px", a.style.left = Ze + "px";
    }
    else {
        const Z = P.right - T.right, L = window.innerWidth - k.right - Z, ie = window.innerWidth - b.right - L, he = b.width + ie, Ee = Math.max(he, P.width), Ke = window.innerWidth - wn, Ze = Ll(L, [wn, Ke - Ee]);
        a.style.minWidth = he + "px", a.style.right = Ze + "px";
    }
    const M = h(), D = window.innerHeight - wn * 2, te = v.scrollHeight, G = window.getComputedStyle(c), U = parseInt(G.borderTopWidth, 10), K = parseInt(G.paddingTop, 10), F = parseInt(G.borderBottomWidth, 10), A = parseInt(G.paddingBottom, 10), I = U + K + te + A + F, Q = Math.min(S.offsetHeight * 5, I), ee = window.getComputedStyle(v), j = parseInt(ee.paddingTop, 10), V = parseInt(ee.paddingBottom, 10), q = b.top + b.height / 2 - wn, z = D - q, Y = S.offsetHeight / 2, $ = S.offsetTop + Y, X = U + K + $, pe = I - X;
    if (X <= q) {
        const Z = S === M[M.length - 1].ref.current;
        a.style.bottom = "0px";
        const L = c.clientHeight - v.offsetTop - v.offsetHeight, ie = Math.max(z, Y + (Z ? V : 0) + L + F), he = X + ie;
        a.style.height = he + "px";
    }
    else {
        const Z = S === M[0].ref.current;
        a.style.top = "0px";
        const ie = Math.max(q, U + v.offsetTop + (Z ? j : 0) + Y) + pe;
        a.style.height = ie + "px", v.scrollTop = X - q + v.offsetTop;
    }
    a.style.margin = `${wn}px 0`, a.style.minHeight = Q + "px", a.style.maxHeight = D + "px", r == null || r(), requestAnimationFrame(() => x.current = !0);
} }, [h, i.trigger, i.valueNode, a, c, v, S, m, i.dir, r]); ze(() => w(), [w]); const [C, E] = u.useState(); ze(() => { c && E(window.getComputedStyle(c).zIndex); }, [c]); const R = u.useCallback(b => { b && y.current === !0 && (w(), g == null || g(), y.current = !1); }, [w, g]); return p.jsx(QI, { scope: n, contentWrapper: a, shouldExpandOnScrollRef: x, onScrollButtonChange: R, children: p.jsx("div", { ref: l, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: C }, children: p.jsx(ne.div, Object.assign(Object.assign({}, o), { ref: f, style: Object.assign({ boxSizing: "border-box", maxHeight: "100%" }, o.style) })) }) }); });
RC.displayName = KI;
var GI = "SelectPopperPosition", Lf = u.forwardRef((e, t) => { const { __scopeSelect: n, align: r = "start", collisionPadding: o = wn } = e, i = __rest(e, ["__scopeSelect", "align", "collisionPadding"]), s = Uc(n); return p.jsx(yh, Object.assign(Object.assign(Object.assign({}, s), i), { ref: t, align: r, collisionPadding: o, style: Object.assign(Object.assign({ boxSizing: "border-box" }, i.style), { "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" }) })); });
Lf.displayName = GI;
var [QI, Fh] = ki(Zr, {}), $f = "SelectViewport", NC = u.forwardRef((e, t) => { const { __scopeSelect: n, nonce: r } = e, o = __rest(e, ["__scopeSelect", "nonce"]), i = Er($f, n), s = Fh($f, n), a = ce(t, i.onViewportChange), l = u.useRef(0); return p.jsxs(p.Fragment, { children: [p.jsx("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: r }), p.jsx(zc.Slot, { scope: n, children: p.jsx(ne.div, Object.assign(Object.assign({ "data-radix-select-viewport": "", role: "presentation" }, o), { ref: a, style: Object.assign({ position: "relative", flex: 1, overflow: "auto" }, o.style), onScroll: W(o.onScroll, c => { const d = c.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: h } = s; if (h != null && h.current && f) {
                    const x = Math.abs(l.current - d.scrollTop);
                    if (x > 0) {
                        const y = window.innerHeight - wn * 2, v = parseFloat(f.style.minHeight), S = parseFloat(f.style.height), m = Math.max(v, S);
                        if (m < y) {
                            const g = m + x, w = Math.min(y, g), C = g - w;
                            f.style.height = w + "px", f.style.bottom === "0px" && (d.scrollTop = C > 0 ? C : 0, f.style.justifyContent = "flex-end");
                        }
                    }
                } l.current = d.scrollTop; }) })) })] }); });
NC.displayName = $f;
var kC = "SelectGroup", [qI, YI] = ki(kC), XI = u.forwardRef((e, t) => { const { __scopeSelect: n } = e, r = __rest(e, ["__scopeSelect"]), o = Kt(); return p.jsx(qI, { scope: n, id: o, children: p.jsx(ne.div, Object.assign(Object.assign({ role: "group", "aria-labelledby": o }, r), { ref: t })) }); });
XI.displayName = kC;
var TC = "SelectLabel", OC = u.forwardRef((e, t) => { const { __scopeSelect: n } = e, r = __rest(e, ["__scopeSelect"]), o = YI(TC, n); return p.jsx(ne.div, Object.assign(Object.assign({ id: o.id }, r), { ref: t })); });
OC.displayName = TC;
var $l = "SelectItem", [JI, jC] = ki($l), AC = u.forwardRef((e, t) => { const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i } = e, s = __rest(e, ["__scopeSelect", "value", "disabled", "textValue"]), a = Cr($l, n), l = Er($l, n), c = a.value === r, [d, f] = u.useState(i !== null && i !== void 0 ? i : ""), [h, x] = u.useState(!1), y = ce(t, m => { var g; return (g = l.itemRefCallback) == null ? void 0 : g.call(l, m, r, o); }), v = Kt(), S = () => { o || (a.onValueChange(r), a.onOpenChange(!1)); }; if (r === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."); return p.jsx(JI, { scope: n, value: r, disabled: o, textId: v, isSelected: c, onItemTextChange: u.useCallback(m => { f(g => { var _q; return g || ((_q = (m == null ? void 0 : m.textContent)) !== null && _q !== void 0 ? _q : "").trim(); }); }, []), children: p.jsx(zc.ItemSlot, { scope: n, value: r, disabled: o, textValue: d, children: p.jsx(ne.div, Object.assign(Object.assign({ role: "option", "aria-labelledby": v, "data-highlighted": h ? "" : void 0, "aria-selected": c && h, "data-state": c ? "checked" : "unchecked", "aria-disabled": o || void 0, "data-disabled": o ? "" : void 0, tabIndex: o ? void 0 : -1 }, s), { ref: y, onFocus: W(s.onFocus, () => x(!0)), onBlur: W(s.onBlur, () => x(!1)), onPointerUp: W(s.onPointerUp, S), onPointerMove: W(s.onPointerMove, m => { var g; o ? (g = l.onItemLeave) == null || g.call(l) : m.currentTarget.focus({ preventScroll: !0 }); }), onPointerLeave: W(s.onPointerLeave, m => { var g; m.currentTarget === document.activeElement && ((g = l.onItemLeave) == null || g.call(l)); }), onKeyDown: W(s.onKeyDown, m => { var w; ((w = l.searchRef) == null ? void 0 : w.current) !== "" && m.key === " " || ($I.includes(m.key) && S(), m.key === " " && m.preventDefault()); }) })) }) }); });
AC.displayName = $l;
var Gi = "SelectItemText", _C = u.forwardRef((e, t) => { const { __scopeSelect: n, className: r, style: o } = e, i = __rest(e, ["__scopeSelect", "className", "style"]), s = Cr(Gi, n), a = Er(Gi, n), l = jC(Gi, n), c = UI(Gi, n), [d, f] = u.useState(null), h = ce(t, m => f(m), l.onItemTextChange, m => { var g; return (g = a.itemTextRefCallback) == null ? void 0 : g.call(a, m, l.value, l.disabled); }), x = d == null ? void 0 : d.textContent, y = u.useMemo(() => p.jsx("option", { value: l.value, disabled: l.disabled, children: x }, l.value), [l.disabled, l.value, x]), { onNativeOptionAdd: v, onNativeOptionRemove: S } = c; return ze(() => (v(y), () => S(y)), [v, S, y]), p.jsxs(p.Fragment, { children: [p.jsx(ne.span, Object.assign(Object.assign({ id: l.textId }, i), { ref: h })), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? _n.createPortal(i.children, s.valueNode) : null] }); });
_C.displayName = Gi;
var MC = "SelectItemIndicator", IC = u.forwardRef((e, t) => { const { __scopeSelect: n } = e, r = __rest(e, ["__scopeSelect"]); return jC(MC, n).isSelected ? p.jsx(ne.span, Object.assign(Object.assign({ "aria-hidden": !0 }, r), { ref: t })) : null; });
IC.displayName = MC;
var Ff = "SelectScrollUpButton", DC = u.forwardRef((e, t) => { const n = Er(Ff, e.__scopeSelect), r = Fh(Ff, e.__scopeSelect), [o, i] = u.useState(!1), s = ce(t, r.onScrollButtonChange); return ze(() => { if (n.viewport && n.isPositioned) {
    let a = function () { const c = l.scrollTop > 0; i(c); };
    const l = n.viewport;
    return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
} }, [n.viewport, n.isPositioned]), o ? p.jsx($C, Object.assign(Object.assign({}, e), { ref: s, onAutoScroll: () => { const { viewport: a, selectedItem: l } = n; a && l && (a.scrollTop = a.scrollTop - l.offsetHeight); } })) : null; });
DC.displayName = Ff;
var zf = "SelectScrollDownButton", LC = u.forwardRef((e, t) => { const n = Er(zf, e.__scopeSelect), r = Fh(zf, e.__scopeSelect), [o, i] = u.useState(!1), s = ce(t, r.onScrollButtonChange); return ze(() => { if (n.viewport && n.isPositioned) {
    let a = function () { const c = l.scrollHeight - l.clientHeight, d = Math.ceil(l.scrollTop) < c; i(d); };
    const l = n.viewport;
    return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
} }, [n.viewport, n.isPositioned]), o ? p.jsx($C, Object.assign(Object.assign({}, e), { ref: s, onAutoScroll: () => { const { viewport: a, selectedItem: l } = n; a && l && (a.scrollTop = a.scrollTop + l.offsetHeight); } })) : null; });
LC.displayName = zf;
var $C = u.forwardRef((e, t) => { const { __scopeSelect: n, onAutoScroll: r } = e, o = __rest(e, ["__scopeSelect", "onAutoScroll"]), i = Er("SelectScrollButton", n), s = u.useRef(null), a = Bc(n), l = u.useCallback(() => { s.current !== null && (window.clearInterval(s.current), s.current = null); }, []); return u.useEffect(() => () => l(), [l]), ze(() => { var d; const c = a().find(f => f.ref.current === document.activeElement); (d = c == null ? void 0 : c.ref.current) == null || d.scrollIntoView({ block: "nearest" }); }, [a]), p.jsx(ne.div, Object.assign(Object.assign({ "aria-hidden": !0 }, o), { ref: t, style: Object.assign({ flexShrink: 0 }, o.style), onPointerDown: W(o.onPointerDown, () => { s.current === null && (s.current = window.setInterval(r, 50)); }), onPointerMove: W(o.onPointerMove, () => { var c; (c = i.onItemLeave) == null || c.call(i), s.current === null && (s.current = window.setInterval(r, 50)); }), onPointerLeave: W(o.onPointerLeave, () => { l(); }) })); }), ZI = "SelectSeparator", FC = u.forwardRef((e, t) => { const { __scopeSelect: n } = e, r = __rest(e, ["__scopeSelect"]); return p.jsx(ne.div, Object.assign(Object.assign({ "aria-hidden": !0 }, r), { ref: t })); });
FC.displayName = ZI;
var Bf = "SelectArrow", eD = u.forwardRef((e, t) => { const { __scopeSelect: n } = e, r = __rest(e, ["__scopeSelect"]), o = Uc(n), i = Cr(Bf, n), s = Er(Bf, n); return i.open && s.position === "popper" ? p.jsx(xh, Object.assign(Object.assign(Object.assign({}, o), r), { ref: t })) : null; });
eD.displayName = Bf;
function zC(e) { return e === "" || e === void 0; }
var BC = u.forwardRef((e, t) => { const { value: n } = e, r = __rest(e, ["value"]), o = u.useRef(null), i = ce(t, o), s = Gp(n); return u.useEffect(() => { const a = o.current, l = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(l, "value").set; if (s !== n && d) {
    const f = new Event("change", { bubbles: !0 });
    d.call(a, n), a.dispatchEvent(f);
} }, [s, n]), p.jsx(Qp, { asChild: !0, children: p.jsx("select", Object.assign(Object.assign({}, r), { ref: i, defaultValue: n })) }); });
BC.displayName = "BubbleSelect";
function UC(e) { const t = Ve(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(s => { const a = n.current + s; t(a), function l(c) { n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3)); }(a); }, [t]), i = u.useCallback(() => { n.current = "", window.clearTimeout(r.current); }, []); return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i]; }
function VC(e, t, n) { const o = t.length > 1 && Array.from(t).every(c => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1; let s = tD(e, Math.max(i, 0)); o.length === 1 && (s = s.filter(c => c !== n)); const l = s.find(c => c.textValue.toLowerCase().startsWith(o.toLowerCase())); return l !== n ? l : void 0; }
function tD(e, t) { return e.map((n, r) => e[(t + r) % e.length]); }
var nD = vC, HC = yC, rD = wC, oD = SC, iD = CC, WC = EC, sD = NC, KC = OC, GC = AC, aD = _C, lD = IC, QC = DC, qC = LC, YC = FC;
const XC = nD, JC = rD, zh = u.forwardRef((_q, r) => {
    var { className: e, children: t } = _q, n = __rest(_q, ["className", "children"]);
    return p.jsxs(HC, Object.assign(Object.assign({ ref: r, className: J("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e) }, n), { children: [t, p.jsx(oD, { asChild: !0, children: p.jsx(th, { className: "h-4 w-4 opacity-50" }) })] }));
});
zh.displayName = HC.displayName;
const ZC = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(QC, Object.assign(Object.assign({ ref: n, className: J("flex cursor-default items-center justify-center py-1", e) }, t), { children: p.jsx(vk, { className: "h-4 w-4" }) }));
});
ZC.displayName = QC.displayName;
const eE = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(qC, Object.assign(Object.assign({ ref: n, className: J("flex cursor-default items-center justify-center py-1", e) }, t), { children: p.jsx(th, { className: "h-4 w-4" }) }));
});
eE.displayName = qC.displayName;
const Bh = u.forwardRef((_q, o) => {
    var { className: e, children: t, position: n = "popper" } = _q, r = __rest(_q, ["className", "children", "position"]);
    return p.jsx(iD, { children: p.jsxs(WC, Object.assign(Object.assign({ ref: o, className: J("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e), position: n }, r), { children: [p.jsx(ZC, {}), p.jsx(sD, { className: J("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: t }), p.jsx(eE, {})] })) });
});
Bh.displayName = WC.displayName;
const cD = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(KC, Object.assign({ ref: n, className: J("py-1.5 pl-8 pr-2 text-sm font-semibold", e) }, t));
});
cD.displayName = KC.displayName;
const Br = u.forwardRef((_q, r) => {
    var { className: e, children: t } = _q, n = __rest(_q, ["className", "children"]);
    return p.jsxs(GC, Object.assign(Object.assign({ ref: r, className: J("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e) }, n), { children: [p.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: p.jsx(lD, { children: p.jsx(mk, { className: "h-4 w-4" }) }) }), p.jsx(aD, { children: t })] }));
});
Br.displayName = GC.displayName;
const uD = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx(YC, Object.assign({ ref: n, className: J("-mx-1 my-1 h-px bg-muted", e) }, t));
});
uD.displayName = YC.displayName;
const Uh = u.forwardRef((_q, n) => {
    var { className: e } = _q, t = __rest(_q, ["className"]);
    return p.jsx("textarea", Object.assign({ className: J("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e), ref: n }, t));
});
Uh.displayName = "Textarea";
function dD() { return p.jsxs("div", { className: "grid gap-3", children: [p.jsx(Gn, { htmlFor: "model", children: "Model" }), p.jsxs(XC, { children: [p.jsx(zh, { id: "model", className: "items-start [&_[data-description]]:hidden", children: p.jsx(JC, { placeholder: "Select a model" }) }), p.jsxs(Bh, { children: [p.jsx(Br, { value: "genesis", children: p.jsxs("div", { className: "flex items-start gap-3 text-muted-foreground", children: [p.jsx(Ck, { className: "size-5" }), p.jsxs("div", { className: "grid gap-0.5", children: [p.jsxs("p", { children: ["Neural", " ", p.jsx("span", { className: "font-medium text-foreground", children: "Genesis" })] }), p.jsx("p", { className: "text-xs", "data-description": !0, children: "Our fastest model for general use cases." })] })] }) }), p.jsx(Br, { value: "explorer", children: p.jsxs("div", { className: "flex items-start gap-3 text-muted-foreground", children: [p.jsx(fk, { className: "size-5" }), p.jsxs("div", { className: "grid gap-0.5", children: [p.jsxs("p", { children: ["Neural", " ", p.jsx("span", { className: "font-medium text-foreground", children: "Explorer" })] }), p.jsx("p", { className: "text-xs", "data-description": !0, children: "Performance and speed for efficiency." })] })] }) }), p.jsx(Br, { value: "quantum", children: p.jsxs("div", { className: "flex items-start gap-3 text-muted-foreground", children: [p.jsx(Nk, { className: "size-5" }), p.jsxs("div", { className: "grid gap-0.5", children: [p.jsxs("p", { children: ["Neural", " ", p.jsx("span", { className: "font-medium text-foreground", children: "Quantum" })] }), p.jsx("p", { className: "text-xs", "data-description": !0, children: "The most powerful model for complex computations." })] })] }) })] })] })] }); }
function fD() { return p.jsx("div", { className: "relative hidden flex-col items-start gap-8 md:flex", children: p.jsxs("form", { className: "grid w-full items-start gap-6", children: [p.jsxs("fieldset", { className: "grid gap-6 rounded-lg border p-4", children: [p.jsx("legend", { className: "-ml-1 px-1 text-sm font-medium", children: "Settings" }), p.jsx(dD, {}), p.jsxs("div", { className: "grid gap-3", children: [p.jsx(Gn, { htmlFor: "temperature", children: "Temperature" }), p.jsx(ss, { id: "temperature", type: "number", placeholder: "0.4" })] }), p.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [p.jsxs("div", { className: "grid gap-3", children: [p.jsx(Gn, { htmlFor: "top-p", children: "Top P" }), p.jsx(ss, { id: "top-p", type: "number", placeholder: "0.7" })] }), p.jsxs("div", { className: "grid gap-3", children: [p.jsx(Gn, { htmlFor: "top-k", children: "Top K" }), p.jsx(ss, { id: "top-k", type: "number", placeholder: "0.0" })] })] })] }), p.jsxs("fieldset", { className: "grid gap-6 rounded-lg border p-4", children: [p.jsx("legend", { className: "-ml-1 px-1 text-sm font-medium", children: "Messages" }), p.jsxs("div", { className: "grid gap-3", children: [p.jsx(Gn, { htmlFor: "role", children: "Role" }), p.jsxs(XC, { defaultValue: "system", children: [p.jsx(zh, { children: p.jsx(JC, { placeholder: "Select a role" }) }), p.jsxs(Bh, { children: [p.jsx(Br, { value: "system", children: "System" }), p.jsx(Br, { value: "user", children: "User" }), p.jsx(Br, { value: "assistant", children: "Assistant" })] })] })] }), p.jsxs("div", { className: "grid gap-3", children: [p.jsx(Gn, { htmlFor: "content", children: "Content" }), p.jsx(Uh, { id: "content", placeholder: "You are a...", className: "min-h-[9.5rem]" })] })] })] }) }); }
function pD() { return p.jsxs(p.Fragment, { children: [p.jsx(as, { children: p.jsxs(yn, { children: [p.jsx(xn, { asChild: !0, children: p.jsxs(Oe, { variant: "ghost", size: "icon", children: [p.jsx(Sk, { className: "size-4" }), p.jsx("span", { className: "sr-only", children: "Attach file" })] }) }), p.jsx(nn, { side: "top", children: "Attach File" })] }) }), p.jsx(as, { children: p.jsxs(yn, { children: [p.jsx(xn, { asChild: !0, children: p.jsxs(Oe, { variant: "ghost", size: "icon", children: [p.jsx(wk, { className: "size-4" }), p.jsx("span", { className: "sr-only", children: "Use Microphone" })] }) }), p.jsx(nn, { side: "top", children: "Use Microphone" })] }) }), p.jsxs(Oe, { type: "submit", size: "sm", className: "ml-auto gap-1.5", children: ["Send Message", p.jsx(yk, { className: "size-3.5" })] })] }); }
function hD() { return p.jsxs("div", { className: "relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2", children: [p.jsx("div", { className: "flex-1" }), p.jsxs("form", { className: "relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring", children: [p.jsx(Gn, { htmlFor: "message", className: "sr-only", children: "Message" }), p.jsx(Uh, { id: "message", placeholder: "Type your message here...", className: "min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0" }), p.jsx("div", { className: "flex items-center p-3 pt-0", children: p.jsx(pD, {}) })] })] }); }
function mD() { return p.jsxs("main", { className: "grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3", children: [p.jsx(fD, {}), p.jsx(hD, {})] }); }
function vD() { return p.jsxs("div", { className: "grid h-screen w-full pl-[56px]", children: [p.jsx(MI, {}), p.jsxs("div", { className: "flex flex-col", children: [p.jsx(oa, {}), p.jsx(mD, {})] })] }); }
const Og = [{ value: "next.js", label: "Next.js" }, { value: "sveltekit", label: "SvelteKit" }, { value: "nuxt.js", label: "Nuxt.js" }, { value: "remix", label: "Remix" }, { value: "astro", label: "Astro" }], jg = { ComboA: gD, ComboboxDemo: yD };
function gD() { return p.jsxs(bc, { children: [p.jsx(Pc, { placeholder: "Type a command or search..." }), p.jsxs(Rc, { children: [p.jsx(Nc, { children: "No results found." }), p.jsxs(Is, { heading: "Suggestions", children: [p.jsx(Cn, { children: "Calendar" }), p.jsx(Cn, { children: "Search Emoji" }), p.jsx(Cn, { children: "Calculator" })] }), p.jsx(vS, {}), p.jsxs(Is, { heading: "Settings", children: [p.jsx(Cn, { children: "Profile" }), p.jsx(Cn, { children: "Billing" }), p.jsx(Cn, { children: "Settings" })] })] })] }); }
function yD() { var o; const [e, t] = u.useState(!1), [n, r] = u.useState(""); return p.jsxs(T1, { open: e, onOpenChange: t, children: [p.jsx(O1, { asChild: !0, children: p.jsx(Oe, { variant: "outline", role: "combobox", "aria-expanded": e, className: "w-[200px] justify-between", children: n ? (o = Og.find(i => i.value === n)) == null ? void 0 : o.label : "Select framework..." }) }), p.jsx(bh, { className: "w-[200px] p-0", children: p.jsxs(bc, { children: [p.jsx(Pc, { placeholder: "Search framework...", className: "h-9" }), p.jsx(Nc, { children: "No framework found." }), p.jsx(Rc, { children: p.jsx(Is, { children: Og.map(i => p.jsx(Cn, { value: i.value, onSelect: s => { r(s === n ? "" : s), t(!1); }, children: i.label }, i.value)) }) })] }) })] }); }
function xD() { const e = p.jsx("div", { className: "grid h-screen w-full ", children: p.jsxs("div", { className: "flex flex-col", children: [p.jsx(oa, {}), p.jsx("main", { className: "grid flex-1 overflow-auto p-4", children: p.jsxs("div", { children: [p.jsx(jg.ComboboxDemo, {}), p.jsx(jg.ComboA, {})] }) })] }) }); return p.jsx("div", { children: e }); }
function wD(e) { return Object.prototype.toString.call(e) === "[object Object]"; }
function Ag(e) { return wD(e) || Array.isArray(e); }
function SD() { return !!(typeof window < "u" && window.document && window.document.createElement); }
function Vh(e, t) { const n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
    return !1; const o = JSON.stringify(Object.keys(e.breakpoints || {})), i = JSON.stringify(Object.keys(t.breakpoints || {})); return o !== i ? !1 : n.every(s => { const a = e[s], l = t[s]; return typeof a == "function" ? `${a}` == `${l}` : !Ag(a) || !Ag(l) ? a === l : Vh(a, l); }); }
function _g(e) { return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map(t => t.options); }
function CD(e, t) { if (e.length !== t.length)
    return !1; const n = _g(e), r = _g(t); return n.every((o, i) => { const s = r[i]; return Vh(o, s); }); }
function Hh(e) { return typeof e == "number"; }
function Uf(e) { return typeof e == "string"; }
function Wh(e) { return typeof e == "boolean"; }
function Mg(e) { return Object.prototype.toString.call(e) === "[object Object]"; }
function Pe(e) { return Math.abs(e); }
function Kh(e) { return Math.sign(e); }
function ls(e, t) { return Pe(e - t); }
function ED(e, t) { if (e === 0 || t === 0 || Pe(e) <= Pe(t))
    return 0; const n = ls(Pe(e), Pe(t)); return Pe(n / e); }
function Ds(e) { return Ls(e).map(Number); }
function Qt(e) { return e[aa(e)]; }
function aa(e) { return Math.max(0, e.length - 1); }
function Gh(e, t) { return t === aa(e); }
function Ig(e, t = 0) { return Array.from(Array(e), (n, r) => t + r); }
function Ls(e) { return Object.keys(e); }
function tE(e, t) { return [e, t].reduce((n, r) => (Ls(r).forEach(o => { const i = n[o], s = r[o], a = Mg(i) && Mg(s); n[o] = a ? tE(i, s) : s; }), n), {}); }
function Vf(e, t) { return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent; }
function bD(e, t) { const n = { start: r, center: o, end: i }; function r() { return 0; } function o(l) { return i(l) / 2; } function i(l) { return t - l; } function s(l, c) { return Uf(e) ? n[e](l) : e(t, l, c); } return { measure: s }; }
function $s() { let e = []; function t(o, i, s, a = { passive: !0 }) { let l; if ("addEventListener" in o)
    o.addEventListener(i, s, a), l = () => o.removeEventListener(i, s, a);
else {
    const c = o;
    c.addListener(s), l = () => c.removeListener(s);
} return e.push(l), r; } function n() { e = e.filter(o => o()); } const r = { add: t, clear: n }; return r; }
function PD(e, t, n, r) { const o = $s(), i = 1e3 / 60; let s = null, a = 0, l = 0; function c() { o.add(e, "visibilitychange", () => { e.hidden && y(); }); } function d() { x(), o.clear(); } function f(S) { if (!l)
    return; s || (s = S); const m = S - s; for (s = S, a += m; a >= i;)
    n(i), a -= i; const g = a / i; r(g), l && t.requestAnimationFrame(f); } function h() { l || (l = t.requestAnimationFrame(f)); } function x() { t.cancelAnimationFrame(l), s = null, a = 0, l = 0; } function y() { s = null, a = 0; } return { init: c, destroy: d, start: h, stop: x, update: () => n(i), render: r }; }
function RD(e, t) { const n = t === "rtl", r = e === "y", o = r ? "y" : "x", i = r ? "x" : "y", s = !r && n ? -1 : 1, a = d(), l = f(); function c(y) { const { height: v, width: S } = y; return r ? v : S; } function d() { return r ? "top" : n ? "right" : "left"; } function f() { return r ? "bottom" : n ? "left" : "right"; } function h(y) { return y * s; } return { scroll: o, cross: i, startEdge: a, endEdge: l, measureSize: c, direction: h }; }
function eo(e = 0, t = 0) { const n = Pe(e - t); function r(c) { return c < e; } function o(c) { return c > t; } function i(c) { return r(c) || o(c); } function s(c) { return i(c) ? r(c) ? e : t : c; } function a(c) { return n ? c - n * Math.ceil((c - t) / n) : c; } return { length: n, max: t, min: e, constrain: s, reachedAny: i, reachedMax: o, reachedMin: r, removeOffset: a }; }
function nE(e, t, n) { const { constrain: r } = eo(0, e), o = e + 1; let i = s(t); function s(h) { return n ? Pe((o + h) % o) : r(h); } function a() { return i; } function l(h) { return i = s(h), f; } function c(h) { return d().set(a() + h); } function d() { return nE(e, a(), n); } const f = { get: a, set: l, add: c, clone: d }; return f; }
function ND(e, t, n, r, o, i, s, a, l, c, d, f, h, x, y, v, S, m, g) { const { cross: w, direction: C } = e, E = ["INPUT", "SELECT", "TEXTAREA"], R = { passive: !1 }, b = $s(), P = $s(), k = eo(50, 225).constrain(x.measure(20)), T = { mouse: 300, touch: 400 }, M = { mouse: 500, touch: 600 }, D = y ? 43 : 25; let te = !1, G = 0, U = 0, K = !1, F = !1, A = !1, I = !1; function Q(L) { if (!g)
    return; function ie(Ee) { (Wh(g) || g(L, Ee)) && Y(Ee); } const he = t; b.add(he, "dragstart", Ee => Ee.preventDefault(), R).add(he, "touchmove", () => { }, R).add(he, "touchend", () => { }).add(he, "touchstart", ie).add(he, "mousedown", ie).add(he, "touchcancel", X).add(he, "contextmenu", X).add(he, "click", pe, !0); } function ee() { b.clear(), P.clear(); } function j() { const L = I ? n : t; P.add(L, "touchmove", $, R).add(L, "touchend", X).add(L, "mousemove", $, R).add(L, "mouseup", X); } function V(L) { const ie = L.nodeName || ""; return E.includes(ie); } function q() { return (y ? M : T)[I ? "mouse" : "touch"]; } function z(L, ie) { const he = f.add(Kh(L) * -1), Ee = d.byDistance(L, !y).distance; return y || Pe(L) < k ? Ee : S && ie ? Ee * .5 : d.byIndex(he.get(), 0).distance; } function Y(L) { const ie = Vf(L, r); I = ie, A = y && ie && !L.buttons && te, te = ls(o.get(), s.get()) >= 2, !(ie && L.button !== 0) && (V(L.target) || (K = !0, i.pointerDown(L), c.useFriction(0).useDuration(0), o.set(s), j(), G = i.readPoint(L), U = i.readPoint(L, w), h.emit("pointerDown"))); } function $(L) { if (!Vf(L, r) && L.touches.length >= 2)
    return X(L); const he = i.readPoint(L), Ee = i.readPoint(L, w), Ke = ls(he, G), Ze = ls(Ee, U); if (!F && !I && (!L.cancelable || (F = Ke > Ze, !F)))
    return X(L); const Pt = i.pointerMove(L); Ke > v && (A = !0), c.useFriction(.3).useDuration(.75), a.start(), o.add(C(Pt)), L.preventDefault(); } function X(L) { const he = d.byDistance(0, !1).index !== f.get(), Ee = i.pointerUp(L) * q(), Ke = z(C(Ee), he), Ze = ED(Ee, Ke), Pt = D - 10 * Ze, at = m + Ze / 50; F = !1, K = !1, P.clear(), c.useDuration(Pt).useFriction(at), l.distance(Ke, !y), I = !1, h.emit("pointerUp"); } function pe(L) { A && (L.stopPropagation(), L.preventDefault(), A = !1); } function oe() { return K; } return { init: Q, destroy: ee, pointerDown: oe }; }
function kD(e, t) { let r, o; function i(f) { return f.timeStamp; } function s(f, h) { const y = `client${(h || e.scroll) === "x" ? "X" : "Y"}`; return (Vf(f, t) ? f : f.touches[0])[y]; } function a(f) { return r = f, o = f, s(f); } function l(f) { const h = s(f) - s(o), x = i(f) - i(r) > 170; return o = f, x && (r = f), h; } function c(f) { if (!r || !o)
    return 0; const h = s(o) - s(r), x = i(f) - i(r), y = i(f) - i(o) > 170, v = h / x; return x && !y && Pe(v) > .1 ? v : 0; } return { pointerDown: a, pointerMove: l, pointerUp: c, readPoint: s }; }
function TD() { function e(n) { const { offsetTop: r, offsetLeft: o, offsetWidth: i, offsetHeight: s } = n; return { top: r, right: o + i, bottom: r + s, left: o, width: i, height: s }; } return { measure: e }; }
function OD(e) { function t(r) { return e * (r / 100); } return { measure: t }; }
function jD(e, t, n, r, o, i, s) { const a = [e].concat(r); let l, c, d = [], f = !1; function h(S) { return o.measureSize(s.measure(S)); } function x(S) { if (!i)
    return; c = h(e), d = r.map(h); function m(g) { for (const w of g) {
    if (f)
        return;
    const C = w.target === e, E = r.indexOf(w.target), R = C ? c : d[E], b = h(C ? e : r[E]);
    if (Pe(b - R) >= .5) {
        S.reInit(), t.emit("resize");
        break;
    }
} } l = new ResizeObserver(g => { (Wh(i) || i(S, g)) && m(g); }), n.requestAnimationFrame(() => { a.forEach(g => l.observe(g)); }); } function y() { f = !0, l && l.disconnect(); } return { init: x, destroy: y }; }
function AD(e, t, n, r, o, i) { let s = 0, a = 0, l = o, c = i, d = e.get(), f = 0; function h(R) { const b = R / 1e3, P = l * b, k = r.get() - e.get(), T = !l; let M = 0; return T ? (s = 0, n.set(r), e.set(r), M = k) : (n.set(e), s += k / P, s *= c, d += s, e.add(s * b), M = d - f), a = Kh(M), f = d, E; } function x() { const R = r.get() - t.get(); return Pe(R) < .001; } function y() { return l; } function v() { return a; } function S() { return s; } function m() { return w(o); } function g() { return C(i); } function w(R) { return l = R, E; } function C(R) { return c = R, E; } const E = { direction: v, duration: y, velocity: S, seek: h, settled: x, useBaseFriction: g, useBaseDuration: m, useFriction: C, useDuration: w }; return E; }
function _D(e, t, n, r, o) { const i = o.measure(10), s = o.measure(50), a = eo(.1, .99); let l = !1; function c() { return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get())); } function d(x) { if (!c())
    return; const y = e.reachedMin(t.get()) ? "min" : "max", v = Pe(e[y] - t.get()), S = n.get() - t.get(), m = a.constrain(v / s); n.subtract(S * m), !x && Pe(S) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction()); } function f(x) { l = !x; } return { shouldConstrain: c, constrain: d, toggleActive: f }; }
function MD(e, t, n, r, o) { const i = eo(-t + e, 0), s = f(), a = d(), l = h(); function c(y, v) { return ls(y, v) < 1; } function d() { const y = s[0], v = Qt(s), S = s.lastIndexOf(y), m = s.indexOf(v) + 1; return eo(S, m); } function f() { return n.map((y, v) => { const { min: S, max: m } = i, g = i.constrain(y), w = !v, C = Gh(n, v); return w ? m : C || c(S, g) ? S : c(m, g) ? m : g; }).map(y => parseFloat(y.toFixed(3))); } function h() { if (t <= e + o)
    return [i.max]; if (r === "keepSnaps")
    return s; const { min: y, max: v } = a; return s.slice(y, v); } return { snapsContained: l, scrollContainLimit: a }; }
function ID(e, t, n) { const r = t[0], o = n ? r - e : Qt(t); return { limit: eo(o, r) }; }
function DD(e, t, n, r) { const i = t.min + .1, s = t.max + .1, { reachedMin: a, reachedMax: l } = eo(i, s); function c(h) { return h === 1 ? l(n.get()) : h === -1 ? a(n.get()) : !1; } function d(h) { if (!c(h))
    return; const x = e * (h * -1); r.forEach(y => y.add(x)); } return { loop: d }; }
function LD(e) { const { max: t, length: n } = e; function r(i) { const s = i - t; return n ? s / -n : 0; } return { get: r }; }
function $D(e, t, n, r, o) { const { startEdge: i, endEdge: s } = e, { groupSlides: a } = o, l = f().map(t.measure), c = h(), d = x(); function f() { return a(r).map(v => Qt(v)[s] - v[0][i]).map(Pe); } function h() { return r.map(v => n[i] - v[i]).map(v => -Pe(v)); } function x() { return a(c).map(v => v[0]).map((v, S) => v + l[S]); } return { snaps: c, snapsAligned: d }; }
function FD(e, t, n, r, o, i) { const { groupSlides: s } = o, { min: a, max: l } = r, c = d(); function d() { const h = s(i), x = !e || t === "keepSnaps"; return n.length === 1 ? [i] : x ? h : h.slice(a, l).map((y, v, S) => { const m = !v, g = Gh(S, v); if (m) {
    const w = Qt(S[0]) + 1;
    return Ig(w);
} if (g) {
    const w = aa(i) - Qt(S)[0] + 1;
    return Ig(w, Qt(S)[0]);
} return y; }); } return { slideRegistry: c }; }
function zD(e, t, n, r, o) { const { reachedAny: i, removeOffset: s, constrain: a } = r; function l(y) { return y.concat().sort((v, S) => Pe(v) - Pe(S))[0]; } function c(y) { const v = e ? s(y) : a(y), S = t.map((g, w) => ({ diff: d(g - v, 0), index: w })).sort((g, w) => Pe(g.diff) - Pe(w.diff)), { index: m } = S[0]; return { index: m, distance: v }; } function d(y, v) { const S = [y, y + n, y - n]; if (!e)
    return y; if (!v)
    return l(S); const m = S.filter(g => Kh(g) === v); return m.length ? l(m) : Qt(S) - n; } function f(y, v) { const S = t[y] - o.get(), m = d(S, v); return { index: y, distance: m }; } function h(y, v) { const S = o.get() + y, { index: m, distance: g } = c(S), w = !e && i(S); if (!v || w)
    return { index: m, distance: y }; const C = t[m] - g, E = y + d(C, 0); return { index: m, distance: E }; } return { byDistance: h, byIndex: f, shortcut: d }; }
function BD(e, t, n, r, o, i, s) { function a(f) { const h = f.distance, x = f.index !== t.get(); i.add(h), h && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), x && (n.set(t.get()), t.set(f.index), s.emit("select")); } function l(f, h) { const x = o.byDistance(f, h); a(x); } function c(f, h) { const x = t.clone().set(f), y = o.byIndex(x.get(), h); a(y); } return { distance: l, index: c }; }
function UD(e, t, n, r, o, i, s) { let a = 0; function l() { i.add(document, "keydown", c, !1), t.forEach(d); } function c(h) { h.code === "Tab" && (a = new Date().getTime()); } function d(h) { const x = () => { if (new Date().getTime() - a > 10)
    return; e.scrollLeft = 0; const S = t.indexOf(h), m = n.findIndex(g => g.includes(S)); Hh(m) && (o.useDuration(0), r.index(m, 0), s.emit("slideFocus")); }; i.add(h, "focus", x, { passive: !0, capture: !0 }); } return { init: l }; }
function Qi(e) { let t = e; function n() { return t; } function r(l) { t = s(l); } function o(l) { t += s(l); } function i(l) { t -= s(l); } function s(l) { return Hh(l) ? l : l.get(); } return { get: n, set: r, add: o, subtract: i }; }
function rE(e, t) { const n = e.scroll === "x" ? i : s, r = t.style; let o = !1; function i(f) { return `translate3d(${f}px,0px,0px)`; } function s(f) { return `translate3d(0px,${f}px,0px)`; } function a(f) { o || (r.transform = n(e.direction(f))); } function l(f) { o = !f; } function c() { o || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style")); } return { clear: c, to: a, toggleActive: l }; }
function VD(e, t, n, r, o, i, s, a, l) { const d = Ds(o), f = Ds(o).reverse(), h = m().concat(g()); function x(b, P) { return b.reduce((k, T) => k - o[T], P); } function y(b, P) { return b.reduce((k, T) => x(k, P) > 0 ? k.concat([T]) : k, []); } function v(b) { return i.map((P, k) => ({ start: P - r[k] + .5 + b, end: P + t - .5 + b })); } function S(b, P, k) { const T = v(P); return b.map(M => { const D = k ? 0 : -n, te = k ? n : 0, G = k ? "end" : "start", U = T[M][G]; return { index: M, loopPoint: U, slideLocation: Qi(-1), translate: rE(e, l[M]), target: () => a.get() > U ? D : te }; }); } function m() { const b = s[0], P = y(f, b); return S(P, n, !1); } function g() { const b = t - s[0] - 1, P = y(d, b); return S(P, -n, !0); } function w() { return h.every(({ index: b }) => { const P = d.filter(k => k !== b); return x(P, t) <= .1; }); } function C() { h.forEach(b => { const { target: P, translate: k, slideLocation: T } = b, M = P(); M !== T.get() && (k.to(M), T.set(M)); }); } function E() { h.forEach(b => b.translate.clear()); } return { canLoop: w, clear: E, loop: C, loopPoints: h }; }
function HD(e, t, n) { let r, o = !1; function i(l) { if (!n)
    return; function c(d) { for (const f of d)
    if (f.type === "childList") {
        l.reInit(), t.emit("slidesChanged");
        break;
    } } r = new MutationObserver(d => { o || (Wh(n) || n(l, d)) && c(d); }), r.observe(e, { childList: !0 }); } function s() { r && r.disconnect(), o = !0; } return { init: i, destroy: s }; }
function WD(e, t, n, r) { const o = {}; let i = null, s = null, a, l = !1; function c() { a = new IntersectionObserver(y => { l || (y.forEach(v => { const S = t.indexOf(v.target); o[S] = v; }), i = null, s = null, n.emit("slidesInView")); }, { root: e.parentElement, threshold: r }), t.forEach(y => a.observe(y)); } function d() { a && a.disconnect(), l = !0; } function f(y) { return Ls(o).reduce((v, S) => { const m = parseInt(S), { isIntersecting: g } = o[m]; return (y && g || !y && !g) && v.push(m), v; }, []); } function h(y = !0) { if (y && i)
    return i; if (!y && s)
    return s; const v = f(y); return y && (i = v), y || (s = v), v; } return { init: c, destroy: d, get: h }; }
function KD(e, t, n, r, o, i) { const { measureSize: s, startEdge: a, endEdge: l } = e, c = n[0] && o, d = y(), f = v(), h = n.map(s), x = S(); function y() { if (!c)
    return 0; const g = n[0]; return Pe(t[a] - g[a]); } function v() { if (!c)
    return 0; const g = i.getComputedStyle(Qt(r)); return parseFloat(g.getPropertyValue(`margin-${l}`)); } function S() { return n.map((g, w, C) => { const E = !w, R = Gh(C, w); return E ? h[w] + d : R ? h[w] + f : C[w + 1][a] - g[a]; }).map(Pe); } return { slideSizes: h, slideSizesWithGaps: x, startGap: d, endGap: f }; }
function GD(e, t, n, r, o, i, s, a, l) { const { startEdge: c, endEdge: d, direction: f } = e, h = Hh(n); function x(m, g) { return Ds(m).filter(w => w % g === 0).map(w => m.slice(w, w + g)); } function y(m) { return m.length ? Ds(m).reduce((g, w, C) => { const E = Qt(g) || 0, R = E === 0, b = w === aa(m), P = o[c] - i[E][c], k = o[c] - i[w][d], T = !r && R ? f(s) : 0, M = !r && b ? f(a) : 0, D = Pe(k - M - (P + T)); return C && D > t + l && g.push(w), b && g.push(m.length), g; }, []).map((g, w, C) => { const E = Math.max(C[w - 1] || 0); return m.slice(E, g); }) : []; } function v(m) { return h ? x(m, n) : y(m); } return { groupSlides: v }; }
function QD(e, t, n, r, o, i, s) { const { align: a, axis: l, direction: c, startIndex: d, loop: f, duration: h, dragFree: x, dragThreshold: y, inViewThreshold: v, slidesToScroll: S, skipSnaps: m, containScroll: g, watchResize: w, watchSlides: C, watchDrag: E } = i, R = 2, b = TD(), P = b.measure(t), k = n.map(b.measure), T = RD(l, c), M = T.measureSize(P), D = OD(M), te = bD(a, M), G = !f && !!g, U = f || !!g, { slideSizes: K, slideSizesWithGaps: F, startGap: A, endGap: I } = KD(T, P, k, n, U, o), Q = GD(T, M, S, f, P, k, A, I, R), { snaps: ee, snapsAligned: j } = $D(T, te, P, k, Q), V = -Qt(ee) + Qt(F), { snapsContained: q, scrollContainLimit: z } = MD(M, V, j, g, R), Y = G ? q : j, { limit: $ } = ID(V, Y, f), X = nE(aa(Y), d, f), pe = X.clone(), oe = Ds(n), Z = ({ dragHandler: In, scrollBody: Gc, scrollBounds: Qc, options: { loop: la } }, qc) => { la || Qc.constrain(In.pointerDown()), Gc.seek(qc); }, L = ({ scrollBody: In, translate: Gc, location: Qc, offsetLocation: la, scrollLooper: qc, slideLooper: uE, dragHandler: dE, animation: fE, eventHandler: Jh, scrollBounds: pE, options: { loop: Zh } }, em) => { const tm = In.settled(), hE = !pE.shouldConstrain(), nm = Zh ? tm : tm && hE; nm && !dE.pointerDown() && (fE.stop(), Jh.emit("settle")), nm || Jh.emit("scroll"); const mE = Qc.get() * em + Ze.get() * (1 - em); la.set(mE), Zh && (qc.loop(In.direction()), uE.loop()), Gc.to(la.get()); }, ie = PD(r, o, In => Z(Kc, In), In => L(Kc, In)), he = .68, Ee = Y[X.get()], Ke = Qi(Ee), Ze = Qi(Ee), Pt = Qi(Ee), at = Qi(Ee), Ti = AD(Ke, Pt, Ze, at, h, he), Hc = zD(f, Y, V, $, at), Wc = BD(ie, X, pe, Ti, Hc, at, s), qh = LD($), Yh = $s(), lE = WD(t, n, s, v), { slideRegistry: Xh } = FD(G, g, Y, z, Q, oe), cE = UD(e, n, Xh, Wc, Ti, Yh, s), Kc = { ownerDocument: r, ownerWindow: o, eventHandler: s, containerRect: P, slideRects: k, animation: ie, axis: T, dragHandler: ND(T, e, r, o, at, kD(T, o), Ke, ie, Wc, Ti, Hc, X, s, D, x, y, m, he, E), eventStore: Yh, percentOfView: D, index: X, indexPrevious: pe, limit: $, location: Ke, offsetLocation: Pt, previousLocation: Ze, options: i, resizeHandler: jD(t, s, o, n, T, w, b), scrollBody: Ti, scrollBounds: _D($, Pt, at, Ti, D), scrollLooper: DD(V, $, Pt, [Ke, Pt, Ze, at]), scrollProgress: qh, scrollSnapList: Y.map(qh.get), scrollSnaps: Y, scrollTarget: Hc, scrollTo: Wc, slideLooper: VD(T, M, V, K, F, ee, Y, Pt, n), slideFocus: cE, slidesHandler: HD(t, s, C), slidesInView: lE, slideIndexes: oe, slideRegistry: Xh, slidesToScroll: Q, target: at, translate: rE(T, t) }; return Kc; }
function qD() { let e = {}, t; function n(c) { t = c; } function r(c) { return e[c] || []; } function o(c) { return r(c).forEach(d => d(t, c)), l; } function i(c, d) { return e[c] = r(c).concat([d]), l; } function s(c, d) { return e[c] = r(c).filter(f => f !== d), l; } function a() { e = {}; } const l = { init: n, emit: o, off: s, on: i, clear: a }; return l; }
const YD = { align: "center", axis: "x", container: null, slides: null, containScroll: "trimSnaps", direction: "ltr", slidesToScroll: 1, inViewThreshold: 0, breakpoints: {}, dragFree: !1, dragThreshold: 10, loop: !1, skipSnaps: !1, duration: 25, startIndex: 0, active: !0, watchDrag: !0, watchResize: !0, watchSlides: !0 };
function XD(e) { function t(i, s) { return tE(i, s || {}); } function n(i) { const s = i.breakpoints || {}, a = Ls(s).filter(l => e.matchMedia(l).matches).map(l => s[l]).reduce((l, c) => t(l, c), {}); return t(i, a); } function r(i) { return i.map(s => Ls(s.breakpoints || {})).reduce((s, a) => s.concat(a), []).map(e.matchMedia); } return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r }; }
function JD(e) { let t = []; function n(i, s) { return t = s.filter(({ options: a }) => e.optionsAtMedia(a).active !== !1), t.forEach(a => a.init(i, e)), s.reduce((a, l) => Object.assign(a, { [l.name]: l }), {}); } function r() { t = t.filter(i => i.destroy()); } return { init: n, destroy: r }; }
function Fl(e, t, n) { const r = e.ownerDocument, o = r.defaultView, i = XD(o), s = JD(i), a = $s(), l = qD(), { mergeOptions: c, optionsAtMedia: d, optionsMediaQueries: f } = i, { on: h, off: x, emit: y } = l, v = M; let S = !1, m, g = c(YD, Fl.globalOptions), w = c(g), C = [], E, R, b; function P() { const { container: Z, slides: L } = w; R = (Uf(Z) ? e.querySelector(Z) : Z) || e.children[0]; const he = Uf(L) ? R.querySelectorAll(L) : L; b = [].slice.call(he || R.children); } function k(Z) { const L = QD(e, R, b, r, o, Z, l); if (Z.loop && !L.slideLooper.canLoop()) {
    const ie = Object.assign({}, Z, { loop: !1 });
    return k(ie);
} return L; } function T(Z, L) { S || (g = c(g, Z), w = d(g), C = L || C, P(), m = k(w), f([g, ...C.map(({ options: ie }) => ie)]).forEach(ie => a.add(ie, "change", M)), w.active && (m.translate.to(m.location.get()), m.animation.init(), m.slidesInView.init(), m.slideFocus.init(), m.eventHandler.init(oe), m.resizeHandler.init(oe), m.slidesHandler.init(oe), m.options.loop && m.slideLooper.loop(), R.offsetParent && b.length && m.dragHandler.init(oe), E = s.init(oe, C))); } function M(Z, L) { const ie = ee(); D(), T(c({ startIndex: ie }, Z), L), l.emit("reInit"); } function D() { m.dragHandler.destroy(), m.eventStore.clear(), m.translate.clear(), m.slideLooper.clear(), m.resizeHandler.destroy(), m.slidesHandler.destroy(), m.slidesInView.destroy(), m.animation.destroy(), s.destroy(), a.clear(); } function te() { S || (S = !0, a.clear(), D(), l.emit("destroy"), l.clear()); } function G(Z, L, ie) { !w.active || S || (m.scrollBody.useBaseFriction().useDuration(L === !0 ? 0 : w.duration), m.scrollTo.index(Z, ie || 0)); } function U(Z) { const L = m.index.add(1).get(); G(L, Z, -1); } function K(Z) { const L = m.index.add(-1).get(); G(L, Z, 1); } function F() { return m.index.add(1).get() !== ee(); } function A() { return m.index.add(-1).get() !== ee(); } function I() { return m.scrollSnapList; } function Q() { return m.scrollProgress.get(m.location.get()); } function ee() { return m.index.get(); } function j() { return m.indexPrevious.get(); } function V() { return m.slidesInView.get(); } function q() { return m.slidesInView.get(!1); } function z() { return E; } function Y() { return m; } function $() { return e; } function X() { return R; } function pe() { return b; } const oe = { canScrollNext: F, canScrollPrev: A, containerNode: X, internalEngine: Y, destroy: te, off: x, on: h, emit: y, plugins: z, previousScrollSnap: j, reInit: v, rootNode: $, scrollNext: U, scrollPrev: K, scrollProgress: Q, scrollSnapList: I, scrollTo: G, selectedScrollSnap: ee, slideNodes: pe, slidesInView: V, slidesNotInView: q }; return T(t, n), setTimeout(() => l.emit("init"), 0), oe; }
Fl.globalOptions = void 0;
function Qh(e = {}, t = []) { const n = u.useRef(e), r = u.useRef(t), [o, i] = u.useState(), [s, a] = u.useState(), l = u.useCallback(() => { o && o.reInit(n.current, r.current); }, [o]); return u.useEffect(() => { if (SD() && s) {
    Fl.globalOptions = Qh.globalOptions;
    const c = Fl(s, n.current, r.current);
    return i(c), () => c.destroy();
}
else
    i(void 0); }, [s, i]), u.useEffect(() => { Vh(n.current, e) || (n.current = e, l()); }, [e, l]), u.useEffect(() => { CD(r.current, t) || (r.current = t, l()); }, [t, l]), [a, o]; }
Qh.globalOptions = void 0;
const oE = u.createContext(null);
function Vc() { const e = u.useContext(oE); if (!e)
    throw new Error("useCarousel must be used within a <Carousel />"); return e; }
const iE = u.forwardRef((_q, a) => { var { orientation: e = "horizontal", opts: t, setApi: n, plugins: r, className: o, children: i } = _q, s = __rest(_q, ["orientation", "opts", "setApi", "plugins", "className", "children"]); const [l, c] = Qh(Object.assign(Object.assign({}, t), { axis: e === "horizontal" ? "x" : "y" }), r), [d, f] = u.useState(!1), [h, x] = u.useState(!1), y = u.useCallback(g => { g && (f(g.canScrollPrev()), x(g.canScrollNext())); }, []), v = u.useCallback(() => { c == null || c.scrollPrev(); }, [c]), S = u.useCallback(() => { c == null || c.scrollNext(); }, [c]), m = u.useCallback(g => { g.key === "ArrowLeft" ? (g.preventDefault(), v()) : g.key === "ArrowRight" && (g.preventDefault(), S()); }, [v, S]); return u.useEffect(() => { !c || !n || n(c); }, [c, n]), u.useEffect(() => { if (c)
    return y(c), c.on("reInit", y), c.on("select", y), () => { c == null || c.off("select", y); }; }, [c, y]), p.jsx(oE.Provider, { value: { carouselRef: l, api: c, opts: t, orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"), scrollPrev: v, scrollNext: S, canScrollPrev: d, canScrollNext: h }, children: p.jsx("div", Object.assign(Object.assign({ ref: a, onKeyDownCapture: m, className: J("relative", o), role: "region", "aria-roledescription": "carousel" }, s), { children: i })) }); });
iE.displayName = "Carousel";
const sE = u.forwardRef((_q, n) => { var { className: e } = _q, t = __rest(_q, ["className"]); const { carouselRef: r, orientation: o } = Vc(); return p.jsx("div", { ref: r, className: "overflow-hidden", children: p.jsx("div", Object.assign({ ref: n, className: J("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e) }, t)) }); });
sE.displayName = "CarouselContent";
const aE = u.forwardRef((_q, n) => { var { className: e } = _q, t = __rest(_q, ["className"]); const { orientation: r } = Vc(); return p.jsx("div", Object.assign({ ref: n, role: "group", "aria-roledescription": "slide", className: J("min-w-0 shrink-0 grow-0 basis-full", r === "horizontal" ? "pl-4" : "pt-4", e) }, t)); });
aE.displayName = "CarouselItem";
const ZD = u.forwardRef((_q, o) => { var { className: e, variant: t = "outline", size: n = "icon" } = _q, r = __rest(_q, ["className", "variant", "size"]); const { orientation: i, scrollPrev: s, canScrollPrev: a } = Vc(); return p.jsxs(Oe, Object.assign(Object.assign({ ref: o, variant: t, size: n, className: J("absolute  h-8 w-8 rounded-full", i === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", e), disabled: !a, onClick: s }, r), { children: [p.jsx(uk, { className: "h-4 w-4" }), p.jsx("span", { className: "sr-only", children: "Previous slide" })] })); });
ZD.displayName = "CarouselPrevious";
const eL = u.forwardRef((_q, o) => { var { className: e, variant: t = "outline", size: n = "icon" } = _q, r = __rest(_q, ["className", "variant", "size"]); const { orientation: i, scrollNext: s, canScrollNext: a } = Vc(); return p.jsxs(Oe, Object.assign(Object.assign({ ref: o, variant: t, size: n, className: J("absolute h-8 w-8 rounded-full", i === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", e), disabled: !a, onClick: s }, r), { children: [p.jsx(dk, { className: "h-4 w-4" }), p.jsx("span", { className: "sr-only", children: "Next slide" })] })); });
eL.displayName = "CarouselNext";
function tL({ srcURL: e }) { const t = () => e.map(n => p.jsx(aE, { className: "", children: p.jsx("div", { className: "", children: p.jsx(ia, { className: "", children: p.jsx(jc, { className: "py-3 flex items-center justify-center", children: p.jsx("img", { className: "w-[50vw] h-[45vh] min-w-60 min-h-80  object-contain", src: n, alt: "???" }) }) }) }) }, n)); return p.jsx(iE, { className: "w-full max-w-xs", children: p.jsx(sE, { children: t() }) }); }
function nL({ merch: e }) { var n; const t = ["/71HE.webp", "/81TrO.jpg", "/6119o.webp"]; return p.jsxs(ia, { children: [p.jsx(Tc, { className: "p-3 items-center", children: p.jsx(Oc, { children: e.name }) }), p.jsxs("div", { className: "grid flex-1 gap-1 overflow-auto p-4 md:grid-cols-2", children: [p.jsx(tL, { srcURL: t }), p.jsxs(jc, { className: "h-2/6 p-0 pl-4 flex flex-col items-start text-base", children: [p.jsxs("p", { children: ["Disponibles: ", e.units] }), p.jsxs("p", { children: ["Precio: ", e.price, "$"] }), p.jsxs("p", { children: ["Marca: ", (n = e.brand) == null ? void 0 : n.name] })] }), p.jsx(Ac, { className: "p-0 pt-3 justify-center", children: p.jsx(Oe, { className: "w-full", children: "Agregar al Carro" }) })] })] }); }
function rL() { var _q; const e = hR("/merch/:url"), t = mi({ queryKey: ["getAllProducts"], queryFn: _c.getAll_Products }); if (t.isLoading)
    return p.jsx("div", { children: "loading data..." }); const n = (_q = t.data) !== null && _q !== void 0 ? _q : [], r = e ? n.find(o => o.id === String(e.params.url)) : null; return r ? p.jsx("div", { className: " flex h-full items-center min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2", children: p.jsx(nL, { merch: r }) }) : p.jsx("div", { children: "Could not find the particular product..." }); }
function oL() { return p.jsxs("div", { children: [p.jsx(oa, {}), p.jsx("main", { className: "bg-muted/50", children: p.jsx(rL, {}) })] }); }
function iL() { return p.jsx("div", { className: "min-w-80", children: p.jsxs(TR, { children: [p.jsx(po, { path: "/", element: p.jsx(cM, {}) }), p.jsx(po, { path: "/search", element: p.jsx(mI, {}) }), p.jsx(po, { path: "/DB3-testing", element: p.jsx(vD, {}) }), p.jsx(po, { path: "/alone-testing", element: p.jsx(xD, {}) }), p.jsx(po, { path: "/merch/:url", element: p.jsx(oL, {}) })] }) }); }
const sL = new nN;
Qu.createRoot(document.getElementById("root")).render(p.jsx(Me.StrictMode, { children: p.jsx(DR, { children: p.jsx(aN, { client: sL, children: p.jsx(iL, {}) }) }) }));
