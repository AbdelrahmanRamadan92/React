(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) c(r);
  new MutationObserver((r) => {
    for (const u of r)
      if (u.type === "childList")
        for (const i of u.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && c(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(r) {
    const u = {};
    return (
      r.integrity && (u.integrity = r.integrity),
      r.referrerpolicy && (u.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (u.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function c(r) {
    if (r.ep) return;
    r.ep = !0;
    const u = o(r);
    fetch(r.href, u);
  }
})();
function D(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var C = { exports: {} },
  n = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d = Symbol.for("react.element"),
  F = Symbol.for("react.portal"),
  T = Symbol.for("react.fragment"),
  N = Symbol.for("react.strict_mode"),
  V = Symbol.for("react.profiler"),
  q = Symbol.for("react.provider"),
  M = Symbol.for("react.context"),
  U = Symbol.for("react.forward_ref"),
  H = Symbol.for("react.suspense"),
  B = Symbol.for("react.memo"),
  z = Symbol.for("react.lazy"),
  w = Symbol.iterator;
function K(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (w && e[w]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var O = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  j = Object.assign,
  P = {};
function y(e, t, o) {
  (this.props = e),
    (this.context = t),
    (this.refs = P),
    (this.updater = o || O);
}
y.prototype.isReactComponent = {};
y.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
y.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function x() {}
x.prototype = y.prototype;
function E(e, t, o) {
  (this.props = e),
    (this.context = t),
    (this.refs = P),
    (this.updater = o || O);
}
var S = (E.prototype = new x());
S.constructor = E;
j(S, y.prototype);
S.isPureReactComponent = !0;
var R = Array.isArray,
  I = Object.prototype.hasOwnProperty,
  g = { current: null },
  L = { key: !0, ref: !0, __self: !0, __source: !0 };
function A(e, t, o) {
  var c,
    r = {},
    u = null,
    i = null;
  if (t != null)
    for (c in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (u = "" + t.key),
    t))
      I.call(t, c) && !L.hasOwnProperty(c) && (r[c] = t[c]);
  var l = arguments.length - 2;
  if (l === 1) r.children = o;
  else if (1 < l) {
    for (var s = Array(l), a = 0; a < l; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  if (e && e.defaultProps)
    for (c in ((l = e.defaultProps), l)) r[c] === void 0 && (r[c] = l[c]);
  return { $$typeof: d, type: e, key: u, ref: i, props: r, _owner: g.current };
}
function W(e, t) {
  return {
    $$typeof: d,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function k(e) {
  return typeof e == "object" && e !== null && e.$$typeof === d;
}
function G(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (o) {
      return t[o];
    })
  );
}
var b = /\/+/g;
function v(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? G("" + e.key)
    : t.toString(36);
}
function h(e, t, o, c, r) {
  var u = typeof e;
  (u === "undefined" || u === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (u) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case d:
          case F:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (r = r(i)),
      (e = c === "" ? "." + v(i, 0) : c),
      R(r)
        ? ((o = ""),
          e != null && (o = e.replace(b, "$&/") + "/"),
          h(r, t, o, "", function (a) {
            return a;
          }))
        : r != null &&
          (k(r) &&
            (r = W(
              r,
              o +
                (!r.key || (i && i.key === r.key)
                  ? ""
                  : ("" + r.key).replace(b, "$&/") + "/") +
                e
            )),
          t.push(r)),
      1
    );
  if (((i = 0), (c = c === "" ? "." : c + ":"), R(e)))
    for (var l = 0; l < e.length; l++) {
      u = e[l];
      var s = c + v(u, l);
      i += h(u, t, o, s, r);
    }
  else if (((s = K(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(u = e.next()).done; )
      (u = u.value), (s = c + v(u, l++)), (i += h(u, t, o, s, r));
  else if (u === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function m(e, t, o) {
  if (e == null) return e;
  var c = [],
    r = 0;
  return (
    h(e, c, "", "", function (u) {
      return t.call(o, u, r++);
    }),
    c
  );
}
function J(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (o) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = o));
        },
        function (o) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = o));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var f = { current: null },
  _ = { transition: null },
  Q = {
    ReactCurrentDispatcher: f,
    ReactCurrentBatchConfig: _,
    ReactCurrentOwner: g,
  };
n.Children = {
  map: m,
  forEach: function (e, t, o) {
    m(
      e,
      function () {
        t.apply(this, arguments);
      },
      o
    );
  },
  count: function (e) {
    var t = 0;
    return (
      m(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      m(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!k(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
n.Component = y;
n.Fragment = T;
n.Profiler = V;
n.PureComponent = E;
n.StrictMode = N;
n.Suspense = H;
n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q;
n.cloneElement = function (e, t, o) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var c = j({}, e.props),
    r = e.key,
    u = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((u = t.ref), (i = g.current)),
      t.key !== void 0 && (r = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      I.call(t, s) &&
        !L.hasOwnProperty(s) &&
        (c[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) c.children = o;
  else if (1 < s) {
    l = Array(s);
    for (var a = 0; a < s; a++) l[a] = arguments[a + 2];
    c.children = l;
  }
  return { $$typeof: d, type: e.type, key: r, ref: u, props: c, _owner: i };
};
n.createContext = function (e) {
  return (
    (e = {
      $$typeof: M,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: q, _context: e }),
    (e.Consumer = e)
  );
};
n.createElement = A;
n.createFactory = function (e) {
  var t = A.bind(null, e);
  return (t.type = e), t;
};
n.createRef = function () {
  return { current: null };
};
n.forwardRef = function (e) {
  return { $$typeof: U, render: e };
};
n.isValidElement = k;
n.lazy = function (e) {
  return { $$typeof: z, _payload: { _status: -1, _result: e }, _init: J };
};
n.memo = function (e, t) {
  return { $$typeof: B, type: e, compare: t === void 0 ? null : t };
};
n.startTransition = function (e) {
  var t = _.transition;
  _.transition = {};
  try {
    e();
  } finally {
    _.transition = t;
  }
};
n.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
n.useCallback = function (e, t) {
  return f.current.useCallback(e, t);
};
n.useContext = function (e) {
  return f.current.useContext(e);
};
n.useDebugValue = function () {};
n.useDeferredValue = function (e) {
  return f.current.useDeferredValue(e);
};
n.useEffect = function (e, t) {
  return f.current.useEffect(e, t);
};
n.useId = function () {
  return f.current.useId();
};
n.useImperativeHandle = function (e, t, o) {
  return f.current.useImperativeHandle(e, t, o);
};
n.useInsertionEffect = function (e, t) {
  return f.current.useInsertionEffect(e, t);
};
n.useLayoutEffect = function (e, t) {
  return f.current.useLayoutEffect(e, t);
};
n.useMemo = function (e, t) {
  return f.current.useMemo(e, t);
};
n.useReducer = function (e, t, o) {
  return f.current.useReducer(e, t, o);
};
n.useRef = function (e) {
  return f.current.useRef(e);
};
n.useState = function (e) {
  return f.current.useState(e);
};
n.useSyncExternalStore = function (e, t, o) {
  return f.current.useSyncExternalStore(e, t, o);
};
n.useTransition = function () {
  return f.current.useTransition();
};
n.version = "18.2.0";
(function (e) {
  e.exports = n;
})(C);
const p = D(C.exports);
console.log("hello from App.jsx");
const $ = (e) =>
    p.createElement("div", {}, [
      p.createElement("h1", {}, e.name),
      p.createElement("h2", {}, e.genus),
      p.createElement("h3", {}, e.species),
    ]),
  Y = () =>
    p.createElement("div", {}, [
      p.createElement("h1", {}, "First Lecture"),
      p.createElement($, {
        name: "Thunder",
        genus: "Dog",
        species: "Havanees",
      }),
      p.createElement($, { name: "Koko", genus: "checkhen", species: "Hendi" }),
    ]),
  X = document.getElementById("root"),
  Z = p.createRoot(X);
Z.render(p.createElement(Y));
