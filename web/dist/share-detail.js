import ke, { useState as Oe, useEffect as yr } from "react";
import gr from "react-dom";
var Q = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function hr() {
  if (Se) return I;
  Se = 1;
  var E = ke, f = Symbol.for("react.element"), x = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, _ = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(v, d, P) {
    var h, R = {}, S = null, Y = null;
    P !== void 0 && (S = "" + P), d.key !== void 0 && (S = "" + d.key), d.ref !== void 0 && (Y = d.ref);
    for (h in d) b.call(d, h) && !O.hasOwnProperty(h) && (R[h] = d[h]);
    if (v && v.defaultProps) for (h in d = v.defaultProps, d) R[h] === void 0 && (R[h] = d[h]);
    return { $$typeof: f, type: v, key: S, ref: Y, props: R, _owner: _.current };
  }
  return I.Fragment = x, I.jsx = j, I.jsxs = j, I;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function Er() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var E = ke, f = Symbol.for("react.element"), x = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), v = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ee = Symbol.iterator, De = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[De];
      return typeof r == "function" ? r : null;
    }
    var k = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var $e = !1, Ie = !1, We = !1, Ye = !1, Le = !1, re;
    re = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === O || Le || e === _ || e === P || e === h || Ye || e === Y || $e || Ie || We || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === R || e.$$typeof === j || e.$$typeof === v || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case x:
          return "Portal";
        case O:
          return "Profiler";
        case _:
          return "StrictMode";
        case P:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return te(r) + ".Consumer";
          case j:
            var t = e;
            return te(t._context) + ".Provider";
          case d:
            return Ve(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case S: {
            var i = e, s = i._payload, o = i._init;
            try {
              return T(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, A = 0, ne, ae, oe, ie, se, ue, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ue() {
      {
        if (A === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, se = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Me() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ne
            }),
            info: C({}, e, {
              value: ae
            }),
            warn: C({}, e, {
              value: oe
            }),
            error: C({}, e, {
              value: ie
            }),
            group: C({}, e, {
              value: se
            }),
            groupCollapsed: C({}, e, {
              value: ue
            }),
            groupEnd: C({}, e, {
              value: le
            })
          });
        }
        A < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = k.ReactCurrentDispatcher, z;
    function L(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var q = !1, N;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Be();
    }
    function fe(e, r) {
      if (!e || q)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = B.current, B.current = null, Ue();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (g) {
              n = g;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), y = n.stack.split(`
`), l = a.length - 1, c = y.length - 1; l >= 1 && c >= 0 && a[l] !== y[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (a[l] !== y[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || a[l] !== y[c]) {
                    var m = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, m), m;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        q = !1, B.current = s, Me(), Error.prepareStackTrace = i;
      }
      var F = e ? e.displayName || e.name : "", w = F ? L(F) : "";
      return typeof e == "function" && N.set(e, w), w;
    }
    function ze(e, r, t) {
      return fe(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, qe(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case P:
          return L("Suspense");
        case h:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ze(e.render);
          case R:
            return V(e.type, r, t);
          case S: {
            var n = e, i = n._payload, s = n._init;
            try {
              return V(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, de = {}, ve = k.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, i) {
      {
        var s = Function.call.bind($);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (U(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, U(i), p("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Ke = Array.isArray;
    function J(e) {
      return Ke(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ye(e) {
      if (Xe(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), pe(e);
    }
    var ge = k.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, Ee;
    function Qe(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          he || (he = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, i) {
      {
        var s, o = {}, a = null, y = null;
        t !== void 0 && (ye(t), a = "" + t), Ze(r) && (ye(r.key), a = "" + r.key), Qe(r) && (y = r.ref, er(r, i));
        for (s in r)
          $.call(r, s) && !He.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (s in l)
            o[s] === void 0 && (o[s] = l[s]);
        }
        if (a || y) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(o, c), y && tr(o, c);
        }
        return nr(e, a, y, i, n, ge.current, o);
      }
    }
    var K = k.ReactCurrentOwner, be = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function me() {
      {
        if (K.current) {
          var e = T(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var _e = {};
    function ir(e) {
      {
        var r = me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + T(e._owner.type) + "."), D(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Re(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Fe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              X(o.value) && Re(o.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var i = T(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var je = {};
    function Te(e, r, t, n, i, s) {
      {
        var o = Ne(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = or();
          y ? a += y : a += me();
          var l;
          e === null ? l = "null" : J(e) ? l = "array" : e !== void 0 && e.$$typeof === f ? (l = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var c = ar(e, r, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (J(m)) {
                for (var F = 0; F < m.length; F++)
                  xe(m[F], e);
                Object.freeze && Object.freeze(m);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(m, e);
        }
        if ($.call(r, "key")) {
          var w = T(e), g = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), H = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[w + H]) {
            var vr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, w, vr, w), je[w + H] = !0;
          }
        }
        return e === b ? ur(c) : sr(c), c;
      }
    }
    function lr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var fr = cr, dr = lr;
    W.Fragment = b, W.jsx = fr, W.jsxs = dr;
  }()), W;
}
process.env.NODE_ENV === "production" ? Q.exports = hr() : Q.exports = Er();
var u = Q.exports, Z, M = gr;
if (process.env.NODE_ENV === "production")
  Z = M.createRoot, M.hydrateRoot;
else {
  var we = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Z = function(E, f) {
    we.usingClientEntryPoint = !0;
    try {
      return M.createRoot(E, f);
    } finally {
      we.usingClientEntryPoint = !1;
    }
  };
}
const br = ({ stockData: E, marketData: f }) => {
  const x = f.dailyReturnQuote >= 0 ? "#00C853" : "#D32F2F", b = f.dailyReturnQuote >= 0 ? "+" : "";
  return /* @__PURE__ */ u.jsxs("div", { style: { padding: "20px", fontFamily: "system-ui" }, children: [
    /* @__PURE__ */ u.jsx("h2", { children: E.ticker }),
    /* @__PURE__ */ u.jsx("div", { style: { fontSize: "18px", color: "#666", marginBottom: "20px" }, children: E.companyName }),
    /* @__PURE__ */ u.jsxs("div", { style: {
      background: "#f5f5f5",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "20px"
    }, children: [
      /* @__PURE__ */ u.jsx("div", { style: { fontSize: "14px", color: "#666" }, children: "Current Price" }),
      /* @__PURE__ */ u.jsxs("div", { style: { fontSize: "36px", fontWeight: "bold", margin: "8px 0" }, children: [
        "$",
        f.lastTrade
      ] }),
      /* @__PURE__ */ u.jsxs("div", { style: { color: x, fontSize: "18px" }, children: [
        b,
        f.dailyReturnQuote,
        " (",
        b,
        f.dailyReturnPercentageQuote,
        "%)"
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { style: {
      marginTop: "20px",
      padding: "16px",
      border: "1px solid #e0e0e0",
      borderRadius: "8px"
    }, children: [
      /* @__PURE__ */ u.jsx("h3", { style: { margin: "0 0 12px 0", fontSize: "16px" }, children: "Market Data" }),
      /* @__PURE__ */ u.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "8px" }, children: [
        /* @__PURE__ */ u.jsx("span", { style: { color: "#666" }, children: "Open" }),
        /* @__PURE__ */ u.jsxs("span", { style: { fontWeight: "bold" }, children: [
          "$",
          f.open
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "8px" }, children: [
        /* @__PURE__ */ u.jsx("span", { style: { color: "#666" }, children: "High" }),
        /* @__PURE__ */ u.jsxs("span", { style: { fontWeight: "bold" }, children: [
          "$",
          f.high
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "8px" }, children: [
        /* @__PURE__ */ u.jsx("span", { style: { color: "#666" }, children: "Low" }),
        /* @__PURE__ */ u.jsxs("span", { style: { fontWeight: "bold" }, children: [
          "$",
          f.low
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ u.jsx("span", { style: { color: "#666" }, children: "Volume" }),
        /* @__PURE__ */ u.jsx("span", { style: { fontWeight: "bold" }, children: f.volume.toLocaleString() })
      ] })
    ] })
  ] });
}, mr = () => {
  const [E, f] = Oe(null), [x, b] = Oe(null);
  return yr(() => {
    var _, O;
    try {
      const v = (O = (_ = window.openai) == null ? void 0 : _.getToolOutput) == null ? void 0 : O.call(_);
      if (console.log("Tool output:", v), v && v.stockData && v.marketData) {
        const d = Array.isArray(v.marketData) ? v.marketData[0] : v.marketData;
        f({
          stockData: v.stockData,
          marketData: d
        });
      } else
        b("No data available from tool output");
    } catch (j) {
      console.error("Error reading tool output:", j), b("Error loading data");
    }
  }, []), x ? /* @__PURE__ */ u.jsx("div", { style: { padding: "20px", color: "#D32F2F" }, children: x }) : E ? /* @__PURE__ */ u.jsx(br, { stockData: E.stockData, marketData: E.marketData }) : /* @__PURE__ */ u.jsx("div", { style: { padding: "20px" }, children: "Loading..." });
}, Pe = document.getElementById("share-detail-root");
Pe && Z(Pe).render(/* @__PURE__ */ u.jsx(mr, {}));
