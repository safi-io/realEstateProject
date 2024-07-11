function Ty(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Kp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Yp(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(t, i);
        return new o();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var No = {},
  ky = {
    get exports() {
      return No;
    },
    set exports(e) {
      No = e;
    },
  },
  Ss = {},
  C = {},
  Ay = {
    get exports() {
      return C;
    },
    set exports(e) {
      C = e;
    },
  },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ii = Symbol.for("react.element"),
  Oy = Symbol.for("react.portal"),
  by = Symbol.for("react.fragment"),
  My = Symbol.for("react.strict_mode"),
  Ny = Symbol.for("react.profiler"),
  Ly = Symbol.for("react.provider"),
  _y = Symbol.for("react.context"),
  Iy = Symbol.for("react.forward_ref"),
  Ry = Symbol.for("react.suspense"),
  Vy = Symbol.for("react.memo"),
  Dy = Symbol.for("react.lazy"),
  Jc = Symbol.iterator;
function jy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Jc && e[Jc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Qp = Object.assign,
  qp = {};
function kr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qp),
    (this.updater = n || Xp);
}
kr.prototype.isReactComponent = {};
kr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
kr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zp() {}
Zp.prototype = kr.prototype;
function bu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qp),
    (this.updater = n || Xp);
}
var Mu = (bu.prototype = new Zp());
Mu.constructor = bu;
Qp(Mu, kr.prototype);
Mu.isPureReactComponent = !0;
var ef = Array.isArray,
  Jp = Object.prototype.hasOwnProperty,
  Nu = { current: null },
  eh = { key: !0, ref: !0, __self: !0, __source: !0 };
function th(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Jp.call(t, r) && !eh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Ii,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Nu.current,
  };
}
function Fy(e, t) {
  return {
    $$typeof: Ii,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Lu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ii;
}
function zy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var tf = /\/+/g;
function na(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? zy("" + e.key)
    : t.toString(36);
}
function mo(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ii:
          case Oy:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + na(s, 0) : r),
      ef(i)
        ? ((n = ""),
          e != null && (n = e.replace(tf, "$&/") + "/"),
          mo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Lu(i) &&
            (i = Fy(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(tf, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ef(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + na(o, a);
      s += mo(o, t, n, l, i);
    }
  else if (((l = jy(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + na(o, a++)), (s += mo(o, t, n, l, i));
  else if (o === "object")
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
  return s;
}
function Gi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    mo(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function By(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ae = { current: null },
  go = { transition: null },
  $y = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: go,
    ReactCurrentOwner: Nu,
  };
B.Children = {
  map: Gi,
  forEach: function (e, t, n) {
    Gi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Gi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Gi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Lu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = kr;
B.Fragment = by;
B.Profiler = Ny;
B.PureComponent = bu;
B.StrictMode = My;
B.Suspense = Ry;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $y;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Qp({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Nu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Jp.call(t, l) &&
        !eh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ii, type: e.type, key: i, ref: o, props: r, _owner: s };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: _y,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ly, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = th;
B.createFactory = function (e) {
  var t = th.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Iy, render: e };
};
B.isValidElement = Lu;
B.lazy = function (e) {
  return { $$typeof: Dy, _payload: { _status: -1, _result: e }, _init: By };
};
B.memo = function (e, t) {
  return { $$typeof: Vy, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = go.transition;
  go.transition = {};
  try {
    e();
  } finally {
    go.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return Ae.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Ae.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Ae.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Ae.current.useEffect(e, t);
};
B.useId = function () {
  return Ae.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Ae.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Ae.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Ae.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Ae.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Ae.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Ae.current.useRef(e);
};
B.useState = function (e) {
  return Ae.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Ae.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Ae.current.useTransition();
};
B.version = "18.2.0";
(function (e) {
  e.exports = B;
})(Ay);
const W = Kp(C),
  Uy = Ty({ __proto__: null, default: W }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hy = C,
  Wy = Symbol.for("react.element"),
  Gy = Symbol.for("react.fragment"),
  Ky = Object.prototype.hasOwnProperty,
  Yy = Hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Xy = { key: !0, ref: !0, __self: !0, __source: !0 };
function nh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Ky.call(t, r) && !Xy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Wy,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Yy.current,
  };
}
Ss.Fragment = Gy;
Ss.jsx = nh;
Ss.jsxs = nh;
(function (e) {
  e.exports = Ss;
})(ky);
const k = No.jsx,
  R = No.jsxs;
var tl = {},
  nl = {},
  Qy = {
    get exports() {
      return nl;
    },
    set exports(e) {
      nl = e;
    },
  },
  He = {},
  rl = {},
  qy = {
    get exports() {
      return rl;
    },
    set exports(e) {
      rl = e;
    },
  },
  rh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, I) {
    var V = N.length;
    N.push(I);
    e: for (; 0 < V; ) {
      var F = (V - 1) >>> 1,
        X = N[F];
      if (0 < i(X, I)) (N[F] = I), (N[V] = X), (V = F);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var I = N[0],
      V = N.pop();
    if (V !== I) {
      N[0] = V;
      e: for (var F = 0, X = N.length, yt = X >>> 1; F < yt; ) {
        var Ve = 2 * (F + 1) - 1,
          Un = N[Ve],
          wt = Ve + 1,
          Vt = N[wt];
        if (0 > i(Un, V))
          wt < X && 0 > i(Vt, Un)
            ? ((N[F] = Vt), (N[wt] = V), (F = wt))
            : ((N[F] = Un), (N[Ve] = V), (F = Ve));
        else if (wt < X && 0 > i(Vt, V)) (N[F] = Vt), (N[wt] = V), (F = wt);
        else break e;
      }
    }
    return I;
  }
  function i(N, I) {
    var V = N.sortIndex - I.sortIndex;
    return V !== 0 ? V : N.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    p = !1,
    v = !1,
    y = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(N) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= N)
        r(u), (I.sortIndex = I.expirationTime), t(l, I);
      else break;
      I = n(u);
    }
  }
  function w(N) {
    if (((y = !1), g(N), !v))
      if (n(l) !== null) (v = !0), he(S);
      else {
        var I = n(u);
        I !== null && be(w, I.startTime - N);
      }
  }
  function S(N, I) {
    (v = !1), y && ((y = !1), m(E), (E = -1)), (p = !0);
    var V = d;
    try {
      for (
        g(I), f = n(l);
        f !== null && (!(f.expirationTime > I) || (N && !b()));

      ) {
        var F = f.callback;
        if (typeof F == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var X = F(f.expirationTime <= I);
          (I = e.unstable_now()),
            typeof X == "function" ? (f.callback = X) : f === n(l) && r(l),
            g(I);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var yt = !0;
      else {
        var Ve = n(u);
        Ve !== null && be(w, Ve.startTime - I), (yt = !1);
      }
      return yt;
    } finally {
      (f = null), (d = V), (p = !1);
    }
  }
  var P = !1,
    T = null,
    E = -1,
    A = 5,
    M = -1;
  function b() {
    return !(e.unstable_now() - M < A);
  }
  function _() {
    if (T !== null) {
      var N = e.unstable_now();
      M = N;
      var I = !0;
      try {
        I = T(!0, N);
      } finally {
        I ? j() : ((P = !1), (T = null));
      }
    } else P = !1;
  }
  var j;
  if (typeof h == "function")
    j = function () {
      h(_);
    };
  else if (typeof MessageChannel < "u") {
    var $ = new MessageChannel(),
      K = $.port2;
    ($.port1.onmessage = _),
      (j = function () {
        K.postMessage(null);
      });
  } else
    j = function () {
      x(_, 0);
    };
  function he(N) {
    (T = N), P || ((P = !0), j());
  }
  function be(N, I) {
    E = x(function () {
      N(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || p || ((v = !0), he(S));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (N) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var V = d;
      d = I;
      try {
        return N();
      } finally {
        d = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, I) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var V = d;
      d = N;
      try {
        return I();
      } finally {
        d = V;
      }
    }),
    (e.unstable_scheduleCallback = function (N, I, V) {
      var F = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? F + V : F))
          : (V = F),
        N)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = V + X),
        (N = {
          id: c++,
          callback: I,
          priorityLevel: N,
          startTime: V,
          expirationTime: X,
          sortIndex: -1,
        }),
        V > F
          ? ((N.sortIndex = V),
            t(u, N),
            n(l) === null &&
              N === n(u) &&
              (y ? (m(E), (E = -1)) : (y = !0), be(w, V - F)))
          : ((N.sortIndex = X), t(l, N), v || p || ((v = !0), he(S))),
        N
      );
    }),
    (e.unstable_shouldYield = b),
    (e.unstable_wrapCallback = function (N) {
      var I = d;
      return function () {
        var V = d;
        d = I;
        try {
          return N.apply(this, arguments);
        } finally {
          d = V;
        }
      };
    });
})(rh);
(function (e) {
  e.exports = rh;
})(qy);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ih = C,
  $e = rl;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var oh = new Set(),
  ai = {};
function Dn(e, t) {
  vr(e, t), vr(e + "Capture", t);
}
function vr(e, t) {
  for (ai[e] = t, e = 0; e < t.length; e++) oh.add(t[e]);
}
var Mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  il = Object.prototype.hasOwnProperty,
  Zy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  nf = {},
  rf = {};
function Jy(e) {
  return il.call(rf, e)
    ? !0
    : il.call(nf, e)
    ? !1
    : Zy.test(e)
    ? (rf[e] = !0)
    : ((nf[e] = !0), !1);
}
function e0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function t0(e, t, n, r) {
  if (t === null || typeof t > "u" || e0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Oe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ye[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ye[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ye[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ye[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ye[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ye[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ye[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _u = /[\-:]([a-z])/g;
function Iu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_u, Iu);
    ye[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_u, Iu);
    ye[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(_u, Iu);
  ye[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ye[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Oe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ye[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ru(e, t, n, r) {
  var i = ye.hasOwnProperty(t) ? ye[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (t0(t, n, i, r) && (n = null),
    r || i === null
      ? Jy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var It = ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ki = Symbol.for("react.element"),
  Yn = Symbol.for("react.portal"),
  Xn = Symbol.for("react.fragment"),
  Vu = Symbol.for("react.strict_mode"),
  ol = Symbol.for("react.profiler"),
  sh = Symbol.for("react.provider"),
  ah = Symbol.for("react.context"),
  Du = Symbol.for("react.forward_ref"),
  sl = Symbol.for("react.suspense"),
  al = Symbol.for("react.suspense_list"),
  ju = Symbol.for("react.memo"),
  Ft = Symbol.for("react.lazy"),
  lh = Symbol.for("react.offscreen"),
  of = Symbol.iterator;
function br(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (of && e[of]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ie = Object.assign,
  ra;
function Fr(e) {
  if (ra === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ra = (t && t[1]) || "";
    }
  return (
    `
` +
    ra +
    e
  );
}
var ia = !1;
function oa(e, t) {
  if (!e || ia) return "";
  ia = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (ia = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Fr(e) : "";
}
function n0(e) {
  switch (e.tag) {
    case 5:
      return Fr(e.type);
    case 16:
      return Fr("Lazy");
    case 13:
      return Fr("Suspense");
    case 19:
      return Fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = oa(e.type, !1)), e;
    case 11:
      return (e = oa(e.type.render, !1)), e;
    case 1:
      return (e = oa(e.type, !0)), e;
    default:
      return "";
  }
}
function ll(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xn:
      return "Fragment";
    case Yn:
      return "Portal";
    case ol:
      return "Profiler";
    case Vu:
      return "StrictMode";
    case sl:
      return "Suspense";
    case al:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ah:
        return (e.displayName || "Context") + ".Consumer";
      case sh:
        return (e._context.displayName || "Context") + ".Provider";
      case Du:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ju:
        return (
          (t = e.displayName || null), t !== null ? t : ll(e.type) || "Memo"
        );
      case Ft:
        (t = e._payload), (e = e._init);
        try {
          return ll(e(t));
        } catch {}
    }
  return null;
}
function r0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ll(t);
    case 8:
      return t === Vu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function sn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function uh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function i0(e) {
  var t = uh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Yi(e) {
  e._valueTracker || (e._valueTracker = i0(e));
}
function ch(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = uh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ul(e, t) {
  var n = t.checked;
  return ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function sf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = sn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function fh(e, t) {
  (t = t.checked), t != null && Ru(e, "checked", t, !1);
}
function cl(e, t) {
  fh(e, t);
  var n = sn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? fl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fl(e, t.type, sn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function af(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function fl(e, t, n) {
  (t !== "number" || Lo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zr = Array.isArray;
function ur(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function dl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function lf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (zr(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: sn(n) };
}
function dh(e, t) {
  var n = sn(t.value),
    r = sn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function uf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ph(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ph(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Xi,
  hh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Xi = Xi || document.createElement("div"),
          Xi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Xi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function li(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Hr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  o0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hr).forEach(function (e) {
  o0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hr[t] = Hr[e]);
  });
});
function mh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Hr.hasOwnProperty(e) && Hr[e])
    ? ("" + t).trim()
    : t + "px";
}
function gh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = mh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var s0 = ie(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function hl(e, t) {
  if (t) {
    if (s0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function ml(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var gl = null;
function Fu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vl = null,
  cr = null,
  fr = null;
function cf(e) {
  if ((e = Di(e))) {
    if (typeof vl != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Ts(t)), vl(e.stateNode, e.type, t));
  }
}
function vh(e) {
  cr ? (fr ? fr.push(e) : (fr = [e])) : (cr = e);
}
function yh() {
  if (cr) {
    var e = cr,
      t = fr;
    if (((fr = cr = null), cf(e), t)) for (e = 0; e < t.length; e++) cf(t[e]);
  }
}
function wh(e, t) {
  return e(t);
}
function Sh() {}
var sa = !1;
function xh(e, t, n) {
  if (sa) return e(t, n);
  sa = !0;
  try {
    return wh(e, t, n);
  } finally {
    (sa = !1), (cr !== null || fr !== null) && (Sh(), yh());
  }
}
function ui(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ts(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var yl = !1;
if (Mt)
  try {
    var Mr = {};
    Object.defineProperty(Mr, "passive", {
      get: function () {
        yl = !0;
      },
    }),
      window.addEventListener("test", Mr, Mr),
      window.removeEventListener("test", Mr, Mr);
  } catch {
    yl = !1;
  }
function a0(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Wr = !1,
  _o = null,
  Io = !1,
  wl = null,
  l0 = {
    onError: function (e) {
      (Wr = !0), (_o = e);
    },
  };
function u0(e, t, n, r, i, o, s, a, l) {
  (Wr = !1), (_o = null), a0.apply(l0, arguments);
}
function c0(e, t, n, r, i, o, s, a, l) {
  if ((u0.apply(this, arguments), Wr)) {
    if (Wr) {
      var u = _o;
      (Wr = !1), (_o = null);
    } else throw Error(O(198));
    Io || ((Io = !0), (wl = u));
  }
}
function jn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Eh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ff(e) {
  if (jn(e) !== e) throw Error(O(188));
}
function f0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jn(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return ff(i), e;
        if (o === r) return ff(i), t;
        o = o.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Ph(e) {
  return (e = f0(e)), e !== null ? Ch(e) : null;
}
function Ch(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ch(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Th = $e.unstable_scheduleCallback,
  df = $e.unstable_cancelCallback,
  d0 = $e.unstable_shouldYield,
  p0 = $e.unstable_requestPaint,
  se = $e.unstable_now,
  h0 = $e.unstable_getCurrentPriorityLevel,
  zu = $e.unstable_ImmediatePriority,
  kh = $e.unstable_UserBlockingPriority,
  Ro = $e.unstable_NormalPriority,
  m0 = $e.unstable_LowPriority,
  Ah = $e.unstable_IdlePriority,
  xs = null,
  ht = null;
function g0(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(xs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var st = Math.clz32 ? Math.clz32 : w0,
  v0 = Math.log,
  y0 = Math.LN2;
function w0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((v0(e) / y0) | 0)) | 0;
}
var Qi = 64,
  qi = 4194304;
function Br(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Vo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Br(a)) : ((o &= s), o !== 0 && (r = Br(o)));
  } else (s = n & ~i), s !== 0 ? (r = Br(s)) : o !== 0 && (r = Br(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - st(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function S0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function x0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - st(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = S0(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Sl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Oh() {
  var e = Qi;
  return (Qi <<= 1), !(Qi & 4194240) && (Qi = 64), e;
}
function aa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ri(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - st(t)),
    (e[t] = n);
}
function E0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - st(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Bu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - st(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var G = 0;
function bh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Mh,
  $u,
  Nh,
  Lh,
  _h,
  xl = !1,
  Zi = [],
  Yt = null,
  Xt = null,
  Qt = null,
  ci = new Map(),
  fi = new Map(),
  $t = [],
  P0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function pf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yt = null;
      break;
    case "dragenter":
    case "dragleave":
      Xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      ci.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fi.delete(t.pointerId);
  }
}
function Nr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Di(t)), t !== null && $u(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function C0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Yt = Nr(Yt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Xt = Nr(Xt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Qt = Nr(Qt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return ci.set(o, Nr(ci.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), fi.set(o, Nr(fi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Ih(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Eh(n)), t !== null)) {
          (e.blockedOn = t),
            _h(e.priority, function () {
              Nh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function vo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = El(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (gl = r), n.target.dispatchEvent(r), (gl = null);
    } else return (t = Di(n)), t !== null && $u(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function hf(e, t, n) {
  vo(e) && n.delete(t);
}
function T0() {
  (xl = !1),
    Yt !== null && vo(Yt) && (Yt = null),
    Xt !== null && vo(Xt) && (Xt = null),
    Qt !== null && vo(Qt) && (Qt = null),
    ci.forEach(hf),
    fi.forEach(hf);
}
function Lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    xl ||
      ((xl = !0),
      $e.unstable_scheduleCallback($e.unstable_NormalPriority, T0)));
}
function di(e) {
  function t(i) {
    return Lr(i, e);
  }
  if (0 < Zi.length) {
    Lr(Zi[0], e);
    for (var n = 1; n < Zi.length; n++) {
      var r = Zi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yt !== null && Lr(Yt, e),
      Xt !== null && Lr(Xt, e),
      Qt !== null && Lr(Qt, e),
      ci.forEach(t),
      fi.forEach(t),
      n = 0;
    n < $t.length;
    n++
  )
    (r = $t[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < $t.length && ((n = $t[0]), n.blockedOn === null); )
    Ih(n), n.blockedOn === null && $t.shift();
}
var dr = It.ReactCurrentBatchConfig,
  Do = !0;
function k0(e, t, n, r) {
  var i = G,
    o = dr.transition;
  dr.transition = null;
  try {
    (G = 1), Uu(e, t, n, r);
  } finally {
    (G = i), (dr.transition = o);
  }
}
function A0(e, t, n, r) {
  var i = G,
    o = dr.transition;
  dr.transition = null;
  try {
    (G = 4), Uu(e, t, n, r);
  } finally {
    (G = i), (dr.transition = o);
  }
}
function Uu(e, t, n, r) {
  if (Do) {
    var i = El(e, t, n, r);
    if (i === null) va(e, t, r, jo, n), pf(e, r);
    else if (C0(i, e, t, n, r)) r.stopPropagation();
    else if ((pf(e, r), t & 4 && -1 < P0.indexOf(e))) {
      for (; i !== null; ) {
        var o = Di(i);
        if (
          (o !== null && Mh(o),
          (o = El(e, t, n, r)),
          o === null && va(e, t, r, jo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else va(e, t, r, null, n);
  }
}
var jo = null;
function El(e, t, n, r) {
  if (((jo = null), (e = Fu(r)), (e = Sn(e)), e !== null))
    if (((t = jn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Eh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (jo = e), null;
}
function Rh(e) {
  switch (e) {
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
    case "selectstart":
      return 1;
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
    case "pointerleave":
      return 4;
    case "message":
      switch (h0()) {
        case zu:
          return 1;
        case kh:
          return 4;
        case Ro:
        case m0:
          return 16;
        case Ah:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ht = null,
  Hu = null,
  yo = null;
function Vh() {
  if (yo) return yo;
  var e,
    t = Hu,
    n = t.length,
    r,
    i = "value" in Ht ? Ht.value : Ht.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (yo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function wo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ji() {
  return !0;
}
function mf() {
  return !1;
}
function We(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ji
        : mf),
      (this.isPropagationStopped = mf),
      this
    );
  }
  return (
    ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ji));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ji));
      },
      persist: function () {},
      isPersistent: Ji,
    }),
    t
  );
}
var Ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Wu = We(Ar),
  Vi = ie({}, Ar, { view: 0, detail: 0 }),
  O0 = We(Vi),
  la,
  ua,
  _r,
  Es = ie({}, Vi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Gu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _r &&
            (_r && e.type === "mousemove"
              ? ((la = e.screenX - _r.screenX), (ua = e.screenY - _r.screenY))
              : (ua = la = 0),
            (_r = e)),
          la);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ua;
    },
  }),
  gf = We(Es),
  b0 = ie({}, Es, { dataTransfer: 0 }),
  M0 = We(b0),
  N0 = ie({}, Vi, { relatedTarget: 0 }),
  ca = We(N0),
  L0 = ie({}, Ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _0 = We(L0),
  I0 = ie({}, Ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  R0 = We(I0),
  V0 = ie({}, Ar, { data: 0 }),
  vf = We(V0),
  D0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  j0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  F0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function z0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = F0[e]) ? !!t[e] : !1;
}
function Gu() {
  return z0;
}
var B0 = ie({}, Vi, {
    key: function (e) {
      if (e.key) {
        var t = D0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = wo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? j0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Gu,
    charCode: function (e) {
      return e.type === "keypress" ? wo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? wo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  $0 = We(B0),
  U0 = ie({}, Es, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  yf = We(U0),
  H0 = ie({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gu,
  }),
  W0 = We(H0),
  G0 = ie({}, Ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  K0 = We(G0),
  Y0 = ie({}, Es, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  X0 = We(Y0),
  Q0 = [9, 13, 27, 32],
  Ku = Mt && "CompositionEvent" in window,
  Gr = null;
Mt && "documentMode" in document && (Gr = document.documentMode);
var q0 = Mt && "TextEvent" in window && !Gr,
  Dh = Mt && (!Ku || (Gr && 8 < Gr && 11 >= Gr)),
  wf = String.fromCharCode(32),
  Sf = !1;
function jh(e, t) {
  switch (e) {
    case "keyup":
      return Q0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Fh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Qn = !1;
function Z0(e, t) {
  switch (e) {
    case "compositionend":
      return Fh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Sf = !0), wf);
    case "textInput":
      return (e = t.data), e === wf && Sf ? null : e;
    default:
      return null;
  }
}
function J0(e, t) {
  if (Qn)
    return e === "compositionend" || (!Ku && jh(e, t))
      ? ((e = Vh()), (yo = Hu = Ht = null), (Qn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Dh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var e1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function xf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!e1[e.type] : t === "textarea";
}
function zh(e, t, n, r) {
  vh(r),
    (t = Fo(t, "onChange")),
    0 < t.length &&
      ((n = new Wu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Kr = null,
  pi = null;
function t1(e) {
  qh(e, 0);
}
function Ps(e) {
  var t = Jn(e);
  if (ch(t)) return e;
}
function n1(e, t) {
  if (e === "change") return t;
}
var Bh = !1;
if (Mt) {
  var fa;
  if (Mt) {
    var da = "oninput" in document;
    if (!da) {
      var Ef = document.createElement("div");
      Ef.setAttribute("oninput", "return;"),
        (da = typeof Ef.oninput == "function");
    }
    fa = da;
  } else fa = !1;
  Bh = fa && (!document.documentMode || 9 < document.documentMode);
}
function Pf() {
  Kr && (Kr.detachEvent("onpropertychange", $h), (pi = Kr = null));
}
function $h(e) {
  if (e.propertyName === "value" && Ps(pi)) {
    var t = [];
    zh(t, pi, e, Fu(e)), xh(t1, t);
  }
}
function r1(e, t, n) {
  e === "focusin"
    ? (Pf(), (Kr = t), (pi = n), Kr.attachEvent("onpropertychange", $h))
    : e === "focusout" && Pf();
}
function i1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ps(pi);
}
function o1(e, t) {
  if (e === "click") return Ps(t);
}
function s1(e, t) {
  if (e === "input" || e === "change") return Ps(t);
}
function a1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lt = typeof Object.is == "function" ? Object.is : a1;
function hi(e, t) {
  if (lt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!il.call(t, i) || !lt(e[i], t[i])) return !1;
  }
  return !0;
}
function Cf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tf(e, t) {
  var n = Cf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Cf(n);
  }
}
function Uh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Uh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Hh() {
  for (var e = window, t = Lo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lo(e.document);
  }
  return t;
}
function Yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function l1(e) {
  var t = Hh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Uh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Yu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Tf(n, o));
        var s = Tf(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var u1 = Mt && "documentMode" in document && 11 >= document.documentMode,
  qn = null,
  Pl = null,
  Yr = null,
  Cl = !1;
function kf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Cl ||
    qn == null ||
    qn !== Lo(r) ||
    ((r = qn),
    "selectionStart" in r && Yu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Yr && hi(Yr, r)) ||
      ((Yr = r),
      (r = Fo(Pl, "onSelect")),
      0 < r.length &&
        ((t = new Wu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = qn))));
}
function eo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zn = {
    animationend: eo("Animation", "AnimationEnd"),
    animationiteration: eo("Animation", "AnimationIteration"),
    animationstart: eo("Animation", "AnimationStart"),
    transitionend: eo("Transition", "TransitionEnd"),
  },
  pa = {},
  Wh = {};
Mt &&
  ((Wh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zn.animationend.animation,
    delete Zn.animationiteration.animation,
    delete Zn.animationstart.animation),
  "TransitionEvent" in window || delete Zn.transitionend.transition);
function Cs(e) {
  if (pa[e]) return pa[e];
  if (!Zn[e]) return e;
  var t = Zn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wh) return (pa[e] = t[n]);
  return e;
}
var Gh = Cs("animationend"),
  Kh = Cs("animationiteration"),
  Yh = Cs("animationstart"),
  Xh = Cs("transitionend"),
  Qh = new Map(),
  Af =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function cn(e, t) {
  Qh.set(e, t), Dn(t, [e]);
}
for (var ha = 0; ha < Af.length; ha++) {
  var ma = Af[ha],
    c1 = ma.toLowerCase(),
    f1 = ma[0].toUpperCase() + ma.slice(1);
  cn(c1, "on" + f1);
}
cn(Gh, "onAnimationEnd");
cn(Kh, "onAnimationIteration");
cn(Yh, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Xh, "onTransitionEnd");
vr("onMouseEnter", ["mouseout", "mouseover"]);
vr("onMouseLeave", ["mouseout", "mouseover"]);
vr("onPointerEnter", ["pointerout", "pointerover"]);
vr("onPointerLeave", ["pointerout", "pointerover"]);
Dn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Dn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var $r =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  d1 = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
function Of(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), c0(r, t, void 0, e), (e.currentTarget = null);
}
function qh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Of(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Of(i, a, u), (o = l);
        }
    }
  }
  if (Io) throw ((e = wl), (Io = !1), (wl = null), e);
}
function Q(e, t) {
  var n = t[bl];
  n === void 0 && (n = t[bl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Zh(t, e, 2, !1), n.add(r));
}
function ga(e, t, n) {
  var r = 0;
  t && (r |= 4), Zh(n, e, r, t);
}
var to = "_reactListening" + Math.random().toString(36).slice(2);
function mi(e) {
  if (!e[to]) {
    (e[to] = !0),
      oh.forEach(function (n) {
        n !== "selectionchange" && (d1.has(n) || ga(n, !1, e), ga(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[to] || ((t[to] = !0), ga("selectionchange", !1, t));
  }
}
function Zh(e, t, n, r) {
  switch (Rh(t)) {
    case 1:
      var i = k0;
      break;
    case 4:
      i = A0;
      break;
    default:
      i = Uu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !yl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function va(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Sn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  xh(function () {
    var u = o,
      c = Fu(n),
      f = [];
    e: {
      var d = Qh.get(e);
      if (d !== void 0) {
        var p = Wu,
          v = e;
        switch (e) {
          case "keypress":
            if (wo(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = $0;
            break;
          case "focusin":
            (v = "focus"), (p = ca);
            break;
          case "focusout":
            (v = "blur"), (p = ca);
            break;
          case "beforeblur":
          case "afterblur":
            p = ca;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = gf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = M0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = W0;
            break;
          case Gh:
          case Kh:
          case Yh:
            p = _0;
            break;
          case Xh:
            p = K0;
            break;
          case "scroll":
            p = O0;
            break;
          case "wheel":
            p = X0;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = R0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = yf;
        }
        var y = (t & 4) !== 0,
          x = !y && e === "scroll",
          m = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              m !== null && ((w = ui(h, m)), w != null && y.push(gi(h, w, g)))),
            x)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((d = new p(d, v, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          d &&
            n !== gl &&
            (v = n.relatedTarget || n.fromElement) &&
            (Sn(v) || v[Nt]))
        )
          break e;
        if (
          (p || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          p
            ? ((v = n.relatedTarget || n.toElement),
              (p = u),
              (v = v ? Sn(v) : null),
              v !== null &&
                ((x = jn(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((p = null), (v = u)),
          p !== v)
        ) {
          if (
            ((y = gf),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = yf),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (x = p == null ? d : Jn(p)),
            (g = v == null ? d : Jn(v)),
            (d = new y(w, h + "leave", p, n, c)),
            (d.target = x),
            (d.relatedTarget = g),
            (w = null),
            Sn(c) === u &&
              ((y = new y(m, h + "enter", v, n, c)),
              (y.target = g),
              (y.relatedTarget = x),
              (w = y)),
            (x = w),
            p && v)
          )
            t: {
              for (y = p, m = v, h = 0, g = y; g; g = Hn(g)) h++;
              for (g = 0, w = m; w; w = Hn(w)) g++;
              for (; 0 < h - g; ) (y = Hn(y)), h--;
              for (; 0 < g - h; ) (m = Hn(m)), g--;
              for (; h--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = Hn(y)), (m = Hn(m));
              }
              y = null;
            }
          else y = null;
          p !== null && bf(f, d, p, y, !1),
            v !== null && x !== null && bf(f, x, v, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? Jn(u) : window),
          (p = d.nodeName && d.nodeName.toLowerCase()),
          p === "select" || (p === "input" && d.type === "file"))
        )
          var S = n1;
        else if (xf(d))
          if (Bh) S = s1;
          else {
            S = i1;
            var P = r1;
          }
        else
          (p = d.nodeName) &&
            p.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = o1);
        if (S && (S = S(e, u))) {
          zh(f, S, n, c);
          break e;
        }
        P && P(e, d, u),
          e === "focusout" &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === "number" &&
            fl(d, "number", d.value);
      }
      switch (((P = u ? Jn(u) : window), e)) {
        case "focusin":
          (xf(P) || P.contentEditable === "true") &&
            ((qn = P), (Pl = u), (Yr = null));
          break;
        case "focusout":
          Yr = Pl = qn = null;
          break;
        case "mousedown":
          Cl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Cl = !1), kf(f, n, c);
          break;
        case "selectionchange":
          if (u1) break;
        case "keydown":
        case "keyup":
          kf(f, n, c);
      }
      var T;
      if (Ku)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Qn
          ? jh(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Dh &&
          n.locale !== "ko" &&
          (Qn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && Qn && (T = Vh())
            : ((Ht = c),
              (Hu = "value" in Ht ? Ht.value : Ht.textContent),
              (Qn = !0))),
        (P = Fo(u, E)),
        0 < P.length &&
          ((E = new vf(E, e, null, n, c)),
          f.push({ event: E, listeners: P }),
          T ? (E.data = T) : ((T = Fh(n)), T !== null && (E.data = T)))),
        (T = q0 ? Z0(e, n) : J0(e, n)) &&
          ((u = Fo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new vf("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    qh(f, t);
  });
}
function gi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = ui(e, n)),
      o != null && r.unshift(gi(e, o, i)),
      (o = ui(e, t)),
      o != null && r.push(gi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Hn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function bf(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = ui(n, o)), l != null && s.unshift(gi(n, l, a)))
        : i || ((l = ui(n, o)), l != null && s.push(gi(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var p1 = /\r\n?/g,
  h1 = /\u0000|\uFFFD/g;
function Mf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      p1,
      `
`
    )
    .replace(h1, "");
}
function no(e, t, n) {
  if (((t = Mf(t)), Mf(e) !== t && n)) throw Error(O(425));
}
function zo() {}
var Tl = null,
  kl = null;
function Al(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ol = typeof setTimeout == "function" ? setTimeout : void 0,
  m1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Nf = typeof Promise == "function" ? Promise : void 0,
  g1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Nf < "u"
      ? function (e) {
          return Nf.resolve(null).then(e).catch(v1);
        }
      : Ol;
function v1(e) {
  setTimeout(function () {
    throw e;
  });
}
function ya(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), di(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  di(t);
}
function qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Lf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Or = Math.random().toString(36).slice(2),
  pt = "__reactFiber$" + Or,
  vi = "__reactProps$" + Or,
  Nt = "__reactContainer$" + Or,
  bl = "__reactEvents$" + Or,
  y1 = "__reactListeners$" + Or,
  w1 = "__reactHandles$" + Or;
function Sn(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Nt] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Lf(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = Lf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Di(e) {
  return (
    (e = e[pt] || e[Nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Ts(e) {
  return e[vi] || null;
}
var Ml = [],
  er = -1;
function fn(e) {
  return { current: e };
}
function Z(e) {
  0 > er || ((e.current = Ml[er]), (Ml[er] = null), er--);
}
function Y(e, t) {
  er++, (Ml[er] = e.current), (e.current = t);
}
var an = {},
  Pe = fn(an),
  Le = fn(!1),
  bn = an;
function yr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function _e(e) {
  return (e = e.childContextTypes), e != null;
}
function Bo() {
  Z(Le), Z(Pe);
}
function _f(e, t, n) {
  if (Pe.current !== an) throw Error(O(168));
  Y(Pe, t), Y(Le, n);
}
function Jh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, r0(e) || "Unknown", i));
  return ie({}, n, r);
}
function $o(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || an),
    (bn = Pe.current),
    Y(Pe, e),
    Y(Le, Le.current),
    !0
  );
}
function If(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = Jh(e, t, bn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(Le),
      Z(Pe),
      Y(Pe, e))
    : Z(Le),
    Y(Le, n);
}
var Pt = null,
  ks = !1,
  wa = !1;
function em(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function S1(e) {
  (ks = !0), em(e);
}
function dn() {
  if (!wa && Pt !== null) {
    wa = !0;
    var e = 0,
      t = G;
    try {
      var n = Pt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Pt = null), (ks = !1);
    } catch (i) {
      throw (Pt !== null && (Pt = Pt.slice(e + 1)), Th(zu, dn), i);
    } finally {
      (G = t), (wa = !1);
    }
  }
  return null;
}
var tr = [],
  nr = 0,
  Uo = null,
  Ho = 0,
  Ye = [],
  Xe = 0,
  Mn = null,
  Ct = 1,
  Tt = "";
function gn(e, t) {
  (tr[nr++] = Ho), (tr[nr++] = Uo), (Uo = e), (Ho = t);
}
function tm(e, t, n) {
  (Ye[Xe++] = Ct), (Ye[Xe++] = Tt), (Ye[Xe++] = Mn), (Mn = e);
  var r = Ct;
  e = Tt;
  var i = 32 - st(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - st(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Ct = (1 << (32 - st(t) + i)) | (n << i) | r),
      (Tt = o + e);
  } else (Ct = (1 << o) | (n << i) | r), (Tt = e);
}
function Xu(e) {
  e.return !== null && (gn(e, 1), tm(e, 1, 0));
}
function Qu(e) {
  for (; e === Uo; )
    (Uo = tr[--nr]), (tr[nr] = null), (Ho = tr[--nr]), (tr[nr] = null);
  for (; e === Mn; )
    (Mn = Ye[--Xe]),
      (Ye[Xe] = null),
      (Tt = Ye[--Xe]),
      (Ye[Xe] = null),
      (Ct = Ye[--Xe]),
      (Ye[Xe] = null);
}
var ze = null,
  Fe = null,
  J = !1,
  ot = null;
function nm(e, t) {
  var n = Qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Rf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (Fe = qt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Fe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mn !== null ? { id: Ct, overflow: Tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ze = e),
            (Fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Nl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ll(e) {
  if (J) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!Rf(e, t)) {
        if (Nl(e)) throw Error(O(418));
        t = qt(n.nextSibling);
        var r = ze;
        t && Rf(e, t)
          ? nm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (ze = e));
      }
    } else {
      if (Nl(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (ze = e);
    }
  }
}
function Vf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function ro(e) {
  if (e !== ze) return !1;
  if (!J) return Vf(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Al(e.type, e.memoizedProps))),
    t && (t = Fe))
  ) {
    if (Nl(e)) throw (rm(), Error(O(418)));
    for (; t; ) nm(e, t), (t = qt(t.nextSibling));
  }
  if ((Vf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = ze ? qt(e.stateNode.nextSibling) : null;
  return !0;
}
function rm() {
  for (var e = Fe; e; ) e = qt(e.nextSibling);
}
function wr() {
  (Fe = ze = null), (J = !1);
}
function qu(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
var x1 = It.ReactCurrentBatchConfig;
function tt(e, t) {
  if (e && e.defaultProps) {
    (t = ie({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Wo = fn(null),
  Go = null,
  rr = null,
  Zu = null;
function Ju() {
  Zu = rr = Go = null;
}
function ec(e) {
  var t = Wo.current;
  Z(Wo), (e._currentValue = t);
}
function _l(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function pr(e, t) {
  (Go = e),
    (Zu = rr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function Ze(e) {
  var t = e._currentValue;
  if (Zu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rr === null)) {
      if (Go === null) throw Error(O(308));
      (rr = e), (Go.dependencies = { lanes: 0, firstContext: e });
    } else rr = rr.next = e;
  return t;
}
var xn = null;
function tc(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function im(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), tc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Lt(e, r)
  );
}
function Lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var zt = !1;
function nc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function om(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Lt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), tc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Lt(e, n)
  );
}
function So(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bu(e, n);
  }
}
function Df(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ko(e, t, n, r) {
  var i = e.updateQueue;
  zt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var d = a.lane,
        p = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            y = a;
          switch (((d = t), (p = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                f = v.call(p, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (d = typeof v == "function" ? v.call(p, f, d) : v),
                d == null)
              )
                break e;
              f = ie({}, f, d);
              break e;
            case 2:
              zt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = f)) : (c = c.next = p),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Ln |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function jf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(O(191, i));
        i.call(r);
      }
    }
}
var sm = new ih.Component().refs;
function Il(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var As = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = en(e),
      o = Ot(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Zt(e, o, i)),
      t !== null && (at(t, e, i, r), So(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = en(e),
      o = Ot(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Zt(e, o, i)),
      t !== null && (at(t, e, i, r), So(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = en(e),
      i = Ot(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Zt(e, i, r)),
      t !== null && (at(t, e, r, n), So(t, e, r));
  },
};
function Ff(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !hi(n, r) || !hi(i, o)
      : !0
  );
}
function am(e, t, n) {
  var r = !1,
    i = an,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ze(o))
      : ((i = _e(t) ? bn : Pe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? yr(e, i) : an)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = As),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function zf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && As.enqueueReplaceState(t, t.state, null);
}
function Rl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = sm), nc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ze(o))
    : ((o = _e(t) ? bn : Pe.current), (i.context = yr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Il(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && As.enqueueReplaceState(i, i.state, null),
      Ko(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === sm && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function io(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Bf(e) {
  var t = e._init;
  return t(e._payload);
}
function lm(e) {
  function t(m, h) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [h]), (m.flags |= 16)) : g.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return (m = tn(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, h, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((m.flags |= 2), h) : g)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, g, w) {
    return h === null || h.tag !== 6
      ? ((h = ka(g, m.mode, w)), (h.return = m), h)
      : ((h = i(h, g)), (h.return = m), h);
  }
  function l(m, h, g, w) {
    var S = g.type;
    return S === Xn
      ? c(m, h, g.props.children, w, g.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Ft &&
            Bf(S) === h.type))
      ? ((w = i(h, g.props)), (w.ref = Ir(m, h, g)), (w.return = m), w)
      : ((w = ko(g.type, g.key, g.props, null, m.mode, w)),
        (w.ref = Ir(m, h, g)),
        (w.return = m),
        w);
  }
  function u(m, h, g, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = Aa(g, m.mode, w)), (h.return = m), h)
      : ((h = i(h, g.children || [])), (h.return = m), h);
  }
  function c(m, h, g, w, S) {
    return h === null || h.tag !== 7
      ? ((h = kn(g, m.mode, w, S)), (h.return = m), h)
      : ((h = i(h, g)), (h.return = m), h);
  }
  function f(m, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = ka("" + h, m.mode, g)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ki:
          return (
            (g = ko(h.type, h.key, h.props, null, m.mode, g)),
            (g.ref = Ir(m, null, h)),
            (g.return = m),
            g
          );
        case Yn:
          return (h = Aa(h, m.mode, g)), (h.return = m), h;
        case Ft:
          var w = h._init;
          return f(m, w(h._payload), g);
      }
      if (zr(h) || br(h))
        return (h = kn(h, m.mode, g, null)), (h.return = m), h;
      io(m, h);
    }
    return null;
  }
  function d(m, h, g, w) {
    var S = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return S !== null ? null : a(m, h, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ki:
          return g.key === S ? l(m, h, g, w) : null;
        case Yn:
          return g.key === S ? u(m, h, g, w) : null;
        case Ft:
          return (S = g._init), d(m, h, S(g._payload), w);
      }
      if (zr(g) || br(g)) return S !== null ? null : c(m, h, g, w, null);
      io(m, g);
    }
    return null;
  }
  function p(m, h, g, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (m = m.get(g) || null), a(h, m, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ki:
          return (m = m.get(w.key === null ? g : w.key) || null), l(h, m, w, S);
        case Yn:
          return (m = m.get(w.key === null ? g : w.key) || null), u(h, m, w, S);
        case Ft:
          var P = w._init;
          return p(m, h, g, P(w._payload), S);
      }
      if (zr(w) || br(w)) return (m = m.get(g) || null), c(h, m, w, S, null);
      io(h, w);
    }
    return null;
  }
  function v(m, h, g, w) {
    for (
      var S = null, P = null, T = h, E = (h = 0), A = null;
      T !== null && E < g.length;
      E++
    ) {
      T.index > E ? ((A = T), (T = null)) : (A = T.sibling);
      var M = d(m, T, g[E], w);
      if (M === null) {
        T === null && (T = A);
        break;
      }
      e && T && M.alternate === null && t(m, T),
        (h = o(M, h, E)),
        P === null ? (S = M) : (P.sibling = M),
        (P = M),
        (T = A);
    }
    if (E === g.length) return n(m, T), J && gn(m, E), S;
    if (T === null) {
      for (; E < g.length; E++)
        (T = f(m, g[E], w)),
          T !== null &&
            ((h = o(T, h, E)), P === null ? (S = T) : (P.sibling = T), (P = T));
      return J && gn(m, E), S;
    }
    for (T = r(m, T); E < g.length; E++)
      (A = p(T, m, E, g[E], w)),
        A !== null &&
          (e && A.alternate !== null && T.delete(A.key === null ? E : A.key),
          (h = o(A, h, E)),
          P === null ? (S = A) : (P.sibling = A),
          (P = A));
    return (
      e &&
        T.forEach(function (b) {
          return t(m, b);
        }),
      J && gn(m, E),
      S
    );
  }
  function y(m, h, g, w) {
    var S = br(g);
    if (typeof S != "function") throw Error(O(150));
    if (((g = S.call(g)), g == null)) throw Error(O(151));
    for (
      var P = (S = null), T = h, E = (h = 0), A = null, M = g.next();
      T !== null && !M.done;
      E++, M = g.next()
    ) {
      T.index > E ? ((A = T), (T = null)) : (A = T.sibling);
      var b = d(m, T, M.value, w);
      if (b === null) {
        T === null && (T = A);
        break;
      }
      e && T && b.alternate === null && t(m, T),
        (h = o(b, h, E)),
        P === null ? (S = b) : (P.sibling = b),
        (P = b),
        (T = A);
    }
    if (M.done) return n(m, T), J && gn(m, E), S;
    if (T === null) {
      for (; !M.done; E++, M = g.next())
        (M = f(m, M.value, w)),
          M !== null &&
            ((h = o(M, h, E)), P === null ? (S = M) : (P.sibling = M), (P = M));
      return J && gn(m, E), S;
    }
    for (T = r(m, T); !M.done; E++, M = g.next())
      (M = p(T, m, E, M.value, w)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? E : M.key),
          (h = o(M, h, E)),
          P === null ? (S = M) : (P.sibling = M),
          (P = M));
    return (
      e &&
        T.forEach(function (_) {
          return t(m, _);
        }),
      J && gn(m, E),
      S
    );
  }
  function x(m, h, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Xn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ki:
          e: {
            for (var S = g.key, P = h; P !== null; ) {
              if (P.key === S) {
                if (((S = g.type), S === Xn)) {
                  if (P.tag === 7) {
                    n(m, P.sibling),
                      (h = i(P, g.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Ft &&
                    Bf(S) === P.type)
                ) {
                  n(m, P.sibling),
                    (h = i(P, g.props)),
                    (h.ref = Ir(m, P, g)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            g.type === Xn
              ? ((h = kn(g.props.children, m.mode, w, g.key)),
                (h.return = m),
                (m = h))
              : ((w = ko(g.type, g.key, g.props, null, m.mode, w)),
                (w.ref = Ir(m, h, g)),
                (w.return = m),
                (m = w));
          }
          return s(m);
        case Yn:
          e: {
            for (P = g.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(m, h.sibling),
                    (h = i(h, g.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = Aa(g, m.mode, w)), (h.return = m), (m = h);
          }
          return s(m);
        case Ft:
          return (P = g._init), x(m, h, P(g._payload), w);
      }
      if (zr(g)) return v(m, h, g, w);
      if (br(g)) return y(m, h, g, w);
      io(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, g)), (h.return = m), (m = h))
          : (n(m, h), (h = ka(g, m.mode, w)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return x;
}
var Sr = lm(!0),
  um = lm(!1),
  ji = {},
  mt = fn(ji),
  yi = fn(ji),
  wi = fn(ji);
function En(e) {
  if (e === ji) throw Error(O(174));
  return e;
}
function rc(e, t) {
  switch ((Y(wi, t), Y(yi, e), Y(mt, ji), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pl(t, e));
  }
  Z(mt), Y(mt, t);
}
function xr() {
  Z(mt), Z(yi), Z(wi);
}
function cm(e) {
  En(wi.current);
  var t = En(mt.current),
    n = pl(t, e.type);
  t !== n && (Y(yi, e), Y(mt, n));
}
function ic(e) {
  yi.current === e && (Z(mt), Z(yi));
}
var ee = fn(0);
function Yo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Sa = [];
function oc() {
  for (var e = 0; e < Sa.length; e++)
    Sa[e]._workInProgressVersionPrimary = null;
  Sa.length = 0;
}
var xo = It.ReactCurrentDispatcher,
  xa = It.ReactCurrentBatchConfig,
  Nn = 0,
  re = null,
  ue = null,
  fe = null,
  Xo = !1,
  Xr = !1,
  Si = 0,
  E1 = 0;
function we() {
  throw Error(O(321));
}
function sc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!lt(e[n], t[n])) return !1;
  return !0;
}
function ac(e, t, n, r, i, o) {
  if (
    ((Nn = o),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (xo.current = e === null || e.memoizedState === null ? k1 : A1),
    (e = n(r, i)),
    Xr)
  ) {
    o = 0;
    do {
      if (((Xr = !1), (Si = 0), 25 <= o)) throw Error(O(301));
      (o += 1),
        (fe = ue = null),
        (t.updateQueue = null),
        (xo.current = O1),
        (e = n(r, i));
    } while (Xr);
  }
  if (
    ((xo.current = Qo),
    (t = ue !== null && ue.next !== null),
    (Nn = 0),
    (fe = ue = re = null),
    (Xo = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function lc() {
  var e = Si !== 0;
  return (Si = 0), e;
}
function ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (re.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function Je() {
  if (ue === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = fe === null ? re.memoizedState : fe.next;
  if (t !== null) (fe = t), (ue = e);
  else {
    if (e === null) throw Error(O(310));
    (ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      fe === null ? (re.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function xi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ea(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = ue,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Nn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (re.lanes |= c),
          (Ln |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      lt(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (re.lanes |= o), (Ln |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Pa(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    lt(o, t.memoizedState) || (Ne = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function fm() {}
function dm(e, t) {
  var n = re,
    r = Je(),
    i = t(),
    o = !lt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ne = !0)),
    (r = r.queue),
    uc(mm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ei(9, hm.bind(null, n, r, i, t), void 0, null),
      pe === null)
    )
      throw Error(O(349));
    Nn & 30 || pm(n, t, i);
  }
  return i;
}
function pm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), gm(t) && vm(e);
}
function mm(e, t, n) {
  return n(function () {
    gm(t) && vm(e);
  });
}
function gm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function vm(e) {
  var t = Lt(e, 1);
  t !== null && at(t, e, 1, -1);
}
function $f(e) {
  var t = ct();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = T1.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function Ei(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ym() {
  return Je().memoizedState;
}
function Eo(e, t, n, r) {
  var i = ct();
  (re.flags |= e),
    (i.memoizedState = Ei(1 | t, n, void 0, r === void 0 ? null : r));
}
function Os(e, t, n, r) {
  var i = Je();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ue !== null) {
    var s = ue.memoizedState;
    if (((o = s.destroy), r !== null && sc(r, s.deps))) {
      i.memoizedState = Ei(t, n, o, r);
      return;
    }
  }
  (re.flags |= e), (i.memoizedState = Ei(1 | t, n, o, r));
}
function Uf(e, t) {
  return Eo(8390656, 8, e, t);
}
function uc(e, t) {
  return Os(2048, 8, e, t);
}
function wm(e, t) {
  return Os(4, 2, e, t);
}
function Sm(e, t) {
  return Os(4, 4, e, t);
}
function xm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Em(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Os(4, 4, xm.bind(null, t, e), n)
  );
}
function cc() {}
function Pm(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Cm(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Tm(e, t, n) {
  return Nn & 21
    ? (lt(n, t) || ((n = Oh()), (re.lanes |= n), (Ln |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function P1(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = xa.transition;
  xa.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (xa.transition = r);
  }
}
function km() {
  return Je().memoizedState;
}
function C1(e, t, n) {
  var r = en(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Am(e))
  )
    Om(t, n);
  else if (((n = im(e, t, n, r)), n !== null)) {
    var i = ke();
    at(n, e, r, i), bm(n, t, r);
  }
}
function T1(e, t, n) {
  var r = en(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Am(e)) Om(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), lt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), tc(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = im(e, t, i, r)),
      n !== null && ((i = ke()), at(n, e, r, i), bm(n, t, r));
  }
}
function Am(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function Om(e, t) {
  Xr = Xo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function bm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bu(e, n);
  }
}
var Qo = {
    readContext: Ze,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useInsertionEffect: we,
    useLayoutEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useMutableSource: we,
    useSyncExternalStore: we,
    useId: we,
    unstable_isNewReconciler: !1,
  },
  k1 = {
    readContext: Ze,
    useCallback: function (e, t) {
      return (ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ze,
    useEffect: Uf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Eo(4194308, 4, xm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Eo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Eo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ct();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = C1.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $f,
    useDebugValue: cc,
    useDeferredValue: function (e) {
      return (ct().memoizedState = e);
    },
    useTransition: function () {
      var e = $f(!1),
        t = e[0];
      return (e = P1.bind(null, e[1])), (ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        i = ct();
      if (J) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(O(349));
        Nn & 30 || pm(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Uf(mm.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ei(9, hm.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ct(),
        t = pe.identifierPrefix;
      if (J) {
        var n = Tt,
          r = Ct;
        (n = (r & ~(1 << (32 - st(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Si++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = E1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  A1 = {
    readContext: Ze,
    useCallback: Pm,
    useContext: Ze,
    useEffect: uc,
    useImperativeHandle: Em,
    useInsertionEffect: wm,
    useLayoutEffect: Sm,
    useMemo: Cm,
    useReducer: Ea,
    useRef: ym,
    useState: function () {
      return Ea(xi);
    },
    useDebugValue: cc,
    useDeferredValue: function (e) {
      var t = Je();
      return Tm(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Ea(xi)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: fm,
    useSyncExternalStore: dm,
    useId: km,
    unstable_isNewReconciler: !1,
  },
  O1 = {
    readContext: Ze,
    useCallback: Pm,
    useContext: Ze,
    useEffect: uc,
    useImperativeHandle: Em,
    useInsertionEffect: wm,
    useLayoutEffect: Sm,
    useMemo: Cm,
    useReducer: Pa,
    useRef: ym,
    useState: function () {
      return Pa(xi);
    },
    useDebugValue: cc,
    useDeferredValue: function (e) {
      var t = Je();
      return ue === null ? (t.memoizedState = e) : Tm(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Pa(xi)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: fm,
    useSyncExternalStore: dm,
    useId: km,
    unstable_isNewReconciler: !1,
  };
function Er(e, t) {
  try {
    var n = "",
      r = t;
    do (n += n0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ca(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var b1 = typeof WeakMap == "function" ? WeakMap : Map;
function Mm(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Zo || ((Zo = !0), (Gl = r)), Vl(e, t);
    }),
    n
  );
}
function Nm(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Vl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Vl(e, t),
          typeof r != "function" &&
            (Jt === null ? (Jt = new Set([this])) : Jt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Hf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new b1();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = U1.bind(null, e, t, n)), t.then(e, e));
}
function Wf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ot(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var M1 = It.ReactCurrentOwner,
  Ne = !1;
function Te(e, t, n, r) {
  t.child = e === null ? um(t, null, n, r) : Sr(t, e.child, n, r);
}
function Kf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    pr(t, i),
    (r = ac(e, t, n, r, o, i)),
    (n = lc()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        _t(e, t, i))
      : (J && n && Xu(t), (t.flags |= 1), Te(e, t, r, i), t.child)
  );
}
function Yf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !yc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Lm(e, t, o, r, i))
      : ((e = ko(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : hi), n(s, r) && e.ref === t.ref)
    )
      return _t(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = tn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Lm(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (hi(o, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), _t(e, t, i);
  }
  return Dl(e, t, n, r, i);
}
function _m(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(or, De),
        (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Y(or, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Y(or, De),
        (De |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(or, De),
      (De |= r);
  return Te(e, t, i, n), t.child;
}
function Im(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Dl(e, t, n, r, i) {
  var o = _e(n) ? bn : Pe.current;
  return (
    (o = yr(t, o)),
    pr(t, i),
    (n = ac(e, t, n, r, o, i)),
    (r = lc()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        _t(e, t, i))
      : (J && r && Xu(t), (t.flags |= 1), Te(e, t, n, i), t.child)
  );
}
function Xf(e, t, n, r, i) {
  if (_e(n)) {
    var o = !0;
    $o(t);
  } else o = !1;
  if ((pr(t, i), t.stateNode === null))
    Po(e, t), am(t, n, r), Rl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ze(u))
      : ((u = _e(n) ? bn : Pe.current), (u = yr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && zf(t, s, r, u)),
      (zt = !1);
    var d = t.memoizedState;
    (s.state = d),
      Ko(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Le.current || zt
        ? (typeof c == "function" && (Il(t, n, c, r), (l = t.memoizedState)),
          (a = zt || Ff(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      om(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : tt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ze(l))
        : ((l = _e(n) ? bn : Pe.current), (l = yr(t, l)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && zf(t, s, r, l)),
      (zt = !1),
      (d = t.memoizedState),
      (s.state = d),
      Ko(t, r, s, i);
    var v = t.memoizedState;
    a !== f || d !== v || Le.current || zt
      ? (typeof p == "function" && (Il(t, n, p, r), (v = t.memoizedState)),
        (u = zt || Ff(t, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return jl(e, t, n, r, o, i);
}
function jl(e, t, n, r, i, o) {
  Im(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && If(t, n, !1), _t(e, t, o);
  (r = t.stateNode), (M1.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Sr(t, e.child, null, o)), (t.child = Sr(t, null, a, o)))
      : Te(e, t, a, o),
    (t.memoizedState = r.state),
    i && If(t, n, !0),
    t.child
  );
}
function Rm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? _f(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && _f(e, t.context, !1),
    rc(e, t.containerInfo);
}
function Qf(e, t, n, r, i) {
  return wr(), qu(i), (t.flags |= 256), Te(e, t, n, r), t.child;
}
var Fl = { dehydrated: null, treeContext: null, retryLane: 0 };
function zl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vm(e, t, n) {
  var r = t.pendingProps,
    i = ee.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Y(ee, i & 1),
    e === null)
  )
    return (
      Ll(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Ns(s, r, 0, null)),
              (e = kn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = zl(n)),
              (t.memoizedState = Fl),
              e)
            : fc(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return N1(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = tn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = tn(a, o)) : ((o = kn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? zl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = tn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function fc(e, t) {
  return (
    (t = Ns({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function oo(e, t, n, r) {
  return (
    r !== null && qu(r),
    Sr(t, e.child, null, n),
    (e = fc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function N1(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ca(Error(O(422)))), oo(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ns({ mode: "visible", children: r.children }, i, 0, null)),
        (o = kn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Sr(t, e.child, null, s),
        (t.child.memoizedState = zl(s)),
        (t.memoizedState = Fl),
        o);
  if (!(t.mode & 1)) return oo(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(O(419))), (r = Ca(o, r, void 0)), oo(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ne || a)) {
    if (((r = pe), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Lt(e, i), at(r, e, i, -1));
    }
    return vc(), (r = Ca(Error(O(421)))), oo(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = H1.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Fe = qt(i.nextSibling)),
      (ze = t),
      (J = !0),
      (ot = null),
      e !== null &&
        ((Ye[Xe++] = Ct),
        (Ye[Xe++] = Tt),
        (Ye[Xe++] = Mn),
        (Ct = e.id),
        (Tt = e.overflow),
        (Mn = t)),
      (t = fc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function qf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _l(e.return, t, n);
}
function Ta(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Dm(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Te(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qf(e, n, t);
        else if (e.tag === 19) qf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Y(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Yo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ta(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Yo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ta(t, !0, n, null, o);
        break;
      case "together":
        Ta(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Po(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function _t(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ln |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function L1(e, t, n) {
  switch (t.tag) {
    case 3:
      Rm(t), wr();
      break;
    case 5:
      cm(t);
      break;
    case 1:
      _e(t.type) && $o(t);
      break;
    case 4:
      rc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Y(Wo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Vm(e, t, n)
          : (Y(ee, ee.current & 1),
            (e = _t(e, t, n)),
            e !== null ? e.sibling : null);
      Y(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Dm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Y(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), _m(e, t, n);
  }
  return _t(e, t, n);
}
var jm, Bl, Fm, zm;
jm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Bl = function () {};
Fm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), En(mt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = ul(e, i)), (r = ul(e, r)), (o = []);
        break;
      case "select":
        (i = ie({}, i, { value: void 0 })),
          (r = ie({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = dl(e, i)), (r = dl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = zo);
    }
    hl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ai.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ai.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Q("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
zm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rr(e, t) {
  if (!J)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _1(e, t, n) {
  var r = t.pendingProps;
  switch ((Qu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Se(t), null;
    case 1:
      return _e(t.type) && Bo(), Se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        xr(),
        Z(Le),
        Z(Pe),
        oc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ro(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ot !== null && (Xl(ot), (ot = null)))),
        Bl(e, t),
        Se(t),
        null
      );
    case 5:
      ic(t);
      var i = En(wi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Fm(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Se(t), null;
        }
        if (((e = En(mt.current)), ro(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[pt] = t), (r[vi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < $r.length; i++) Q($r[i], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q("error", r), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              sf(r, o), Q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Q("invalid", r);
              break;
            case "textarea":
              lf(r, o), Q("invalid", r);
          }
          hl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      no(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      no(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ai.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              Yi(r), af(r, o, !0);
              break;
            case "textarea":
              Yi(r), uf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = zo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ph(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[pt] = t),
            (e[vi] = r),
            jm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ml(n, r)), n)) {
              case "dialog":
                Q("cancel", e), Q("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < $r.length; i++) Q($r[i], e);
                i = r;
                break;
              case "source":
                Q("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Q("error", e), Q("load", e), (i = r);
                break;
              case "details":
                Q("toggle", e), (i = r);
                break;
              case "input":
                sf(e, r), (i = ul(e, r)), Q("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ie({}, r, { value: void 0 })),
                  Q("invalid", e);
                break;
              case "textarea":
                lf(e, r), (i = dl(e, r)), Q("invalid", e);
                break;
              default:
                i = r;
            }
            hl(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? gh(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && hh(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && li(e, l)
                    : typeof l == "number" && li(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ai.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && Q("scroll", e)
                      : l != null && Ru(e, o, l, s));
              }
            switch (n) {
              case "input":
                Yi(e), af(e, r, !1);
                break;
              case "textarea":
                Yi(e), uf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? ur(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      ur(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = zo);
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
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) zm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = En(wi.current)), En(mt.current), ro(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (o = r.nodeValue !== n) && ((e = ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                no(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  no(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return Se(t), null;
    case 13:
      if (
        (Z(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && Fe !== null && t.mode & 1 && !(t.flags & 128))
          rm(), wr(), (t.flags |= 98560), (o = !1);
        else if (((o = ro(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(O(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(O(317));
            o[pt] = t;
          } else
            wr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Se(t), (o = !1);
        } else ot !== null && (Xl(ot), (ot = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? ce === 0 && (ce = 3) : vc())),
          t.updateQueue !== null && (t.flags |= 4),
          Se(t),
          null);
    case 4:
      return (
        xr(), Bl(e, t), e === null && mi(t.stateNode.containerInfo), Se(t), null
      );
    case 10:
      return ec(t.type._context), Se(t), null;
    case 17:
      return _e(t.type) && Bo(), Se(t), null;
    case 19:
      if ((Z(ee), (o = t.memoizedState), o === null)) return Se(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Rr(o, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Yo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Rr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Y(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            se() > Pr &&
            ((t.flags |= 128), (r = !0), Rr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !J)
            )
              return Se(t), null;
          } else
            2 * se() - o.renderingStartTime > Pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = se()),
          (t.sibling = null),
          (n = ee.current),
          Y(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (Se(t), null);
    case 22:
    case 23:
      return (
        gc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function I1(e, t) {
  switch ((Qu(t), t.tag)) {
    case 1:
      return (
        _e(t.type) && Bo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        xr(),
        Z(Le),
        Z(Pe),
        oc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ic(t), null;
    case 13:
      if ((Z(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(O(340));
        wr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(ee), null;
    case 4:
      return xr(), null;
    case 10:
      return ec(t.type._context), null;
    case 22:
    case 23:
      return gc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var so = !1,
  xe = !1,
  R1 = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function ir(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        oe(e, t, r);
      }
    else n.current = null;
}
function $l(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var Zf = !1;
function V1(e, t) {
  if (((Tl = Do), (e = Hh()), Yu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (d = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++c === r && (l = s),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (kl = { focusedElem: e, selectionRange: n }, Do = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    x = v.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : tt(t.type, y),
                      x
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (w) {
          oe(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (v = Zf), (Zf = !1), v;
}
function Qr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && $l(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function bs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ul(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Bm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[vi], delete t[bl], delete t[y1], delete t[w1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function $m(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Jf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $m(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Hl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = zo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hl(e, t, n), e = e.sibling; e !== null; ) Hl(e, t, n), (e = e.sibling);
}
function Wl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), (e = e.sibling);
}
var me = null,
  rt = !1;
function Dt(e, t, n) {
  for (n = n.child; n !== null; ) Um(e, t, n), (n = n.sibling);
}
function Um(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(xs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xe || ir(n, t);
    case 6:
      var r = me,
        i = rt;
      (me = null),
        Dt(e, t, n),
        (me = r),
        (rt = i),
        me !== null &&
          (rt
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (rt
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? ya(e.parentNode, n)
              : e.nodeType === 1 && ya(e, n),
            di(e))
          : ya(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (i = rt),
        (me = n.stateNode.containerInfo),
        (rt = !0),
        Dt(e, t, n),
        (me = r),
        (rt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && $l(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Dt(e, t, n);
      break;
    case 1:
      if (
        !xe &&
        (ir(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          oe(n, t, a);
        }
      Dt(e, t, n);
      break;
    case 21:
      Dt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xe = (r = xe) || n.memoizedState !== null), Dt(e, t, n), (xe = r))
        : Dt(e, t, n);
      break;
    default:
      Dt(e, t, n);
  }
}
function ed(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new R1()),
      t.forEach(function (r) {
        var i = W1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (me = a.stateNode), (rt = !1);
              break e;
            case 3:
              (me = a.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (me = a.stateNode.containerInfo), (rt = !0);
              break e;
          }
          a = a.return;
        }
        if (me === null) throw Error(O(160));
        Um(o, s, i), (me = null), (rt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        oe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Hm(t, e), (t = t.sibling);
}
function Hm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), ut(e), r & 4)) {
        try {
          Qr(3, e, e.return), bs(3, e);
        } catch (y) {
          oe(e, e.return, y);
        }
        try {
          Qr(5, e, e.return);
        } catch (y) {
          oe(e, e.return, y);
        }
      }
      break;
    case 1:
      et(t, e), ut(e), r & 512 && n !== null && ir(n, n.return);
      break;
    case 5:
      if (
        (et(t, e),
        ut(e),
        r & 512 && n !== null && ir(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          li(i, "");
        } catch (y) {
          oe(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && fh(i, o),
              ml(a, s);
            var u = ml(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? gh(i, f)
                : c === "dangerouslySetInnerHTML"
                ? hh(i, f)
                : c === "children"
                ? li(i, f)
                : Ru(i, c, f, u);
            }
            switch (a) {
              case "input":
                cl(i, o);
                break;
              case "textarea":
                dh(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? ur(i, !!o.multiple, p, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ur(i, !!o.multiple, o.defaultValue, !0)
                      : ur(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[vi] = o;
          } catch (y) {
            oe(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((et(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          oe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (et(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          di(t.containerInfo);
        } catch (y) {
          oe(e, e.return, y);
        }
      break;
    case 4:
      et(t, e), ut(e);
      break;
    case 13:
      et(t, e),
        ut(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (hc = se())),
        r & 4 && ed(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xe = (u = xe) || c), et(t, e), (xe = u)) : et(t, e),
        ut(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qr(4, d, d.return);
                  break;
                case 1:
                  ir(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      oe(r, n, y);
                    }
                  }
                  break;
                case 5:
                  ir(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    nd(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), (L = p)) : nd(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = mh("display", s)));
              } catch (y) {
                oe(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                oe(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      et(t, e), ut(e), r & 4 && ed(e);
      break;
    case 21:
      break;
    default:
      et(t, e), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($m(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (li(i, ""), (r.flags &= -33));
          var o = Jf(e);
          Wl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Jf(e);
          Hl(e, a, s);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      oe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function D1(e, t, n) {
  (L = e), Wm(e);
}
function Wm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || so;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || xe;
        a = so;
        var u = xe;
        if (((so = s), (xe = l) && !u))
          for (L = i; L !== null; )
            (s = L),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? rd(i)
                : l !== null
                ? ((l.return = s), (L = l))
                : rd(i);
        for (; o !== null; ) (L = o), Wm(o), (o = o.sibling);
        (L = i), (so = a), (xe = u);
      }
      td(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : td(e);
  }
}
function td(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xe || bs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && jf(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                jf(t, s, n);
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
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && di(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        xe || (t.flags & 512 && Ul(t));
      } catch (d) {
        oe(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function nd(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function rd(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            bs(4, t);
          } catch (l) {
            oe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              oe(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ul(t);
          } catch (l) {
            oe(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ul(t);
          } catch (l) {
            oe(t, s, l);
          }
      }
    } catch (l) {
      oe(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var j1 = Math.ceil,
  qo = It.ReactCurrentDispatcher,
  dc = It.ReactCurrentOwner,
  qe = It.ReactCurrentBatchConfig,
  H = 0,
  pe = null,
  le = null,
  ve = 0,
  De = 0,
  or = fn(0),
  ce = 0,
  Pi = null,
  Ln = 0,
  Ms = 0,
  pc = 0,
  qr = null,
  Me = null,
  hc = 0,
  Pr = 1 / 0,
  Et = null,
  Zo = !1,
  Gl = null,
  Jt = null,
  ao = !1,
  Wt = null,
  Jo = 0,
  Zr = 0,
  Kl = null,
  Co = -1,
  To = 0;
function ke() {
  return H & 6 ? se() : Co !== -1 ? Co : (Co = se());
}
function en(e) {
  return e.mode & 1
    ? H & 2 && ve !== 0
      ? ve & -ve
      : x1.transition !== null
      ? (To === 0 && (To = Oh()), To)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rh(e.type))),
        e)
    : 1;
}
function at(e, t, n, r) {
  if (50 < Zr) throw ((Zr = 0), (Kl = null), Error(O(185)));
  Ri(e, n, r),
    (!(H & 2) || e !== pe) &&
      (e === pe && (!(H & 2) && (Ms |= n), ce === 4 && Ut(e, ve)),
      Ie(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((Pr = se() + 500), ks && dn()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  x0(e, t);
  var r = Vo(e, e === pe ? ve : 0);
  if (r === 0)
    n !== null && df(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && df(n), t === 1))
      e.tag === 0 ? S1(id.bind(null, e)) : em(id.bind(null, e)),
        g1(function () {
          !(H & 6) && dn();
        }),
        (n = null);
    else {
      switch (bh(r)) {
        case 1:
          n = zu;
          break;
        case 4:
          n = kh;
          break;
        case 16:
          n = Ro;
          break;
        case 536870912:
          n = Ah;
          break;
        default:
          n = Ro;
      }
      n = Jm(n, Gm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gm(e, t) {
  if (((Co = -1), (To = 0), H & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (hr() && e.callbackNode !== n) return null;
  var r = Vo(e, e === pe ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = es(e, r);
  else {
    t = r;
    var i = H;
    H |= 2;
    var o = Ym();
    (pe !== e || ve !== t) && ((Et = null), (Pr = se() + 500), Tn(e, t));
    do
      try {
        B1();
        break;
      } catch (a) {
        Km(e, a);
      }
    while (1);
    Ju(),
      (qo.current = o),
      (H = i),
      le !== null ? (t = 0) : ((pe = null), (ve = 0), (t = ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Sl(e)), i !== 0 && ((r = i), (t = Yl(e, i)))), t === 1)
    )
      throw ((n = Pi), Tn(e, 0), Ut(e, r), Ie(e, se()), n);
    if (t === 6) Ut(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !F1(i) &&
          ((t = es(e, r)),
          t === 2 && ((o = Sl(e)), o !== 0 && ((r = o), (t = Yl(e, o)))),
          t === 1))
      )
        throw ((n = Pi), Tn(e, 0), Ut(e, r), Ie(e, se()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          vn(e, Me, Et);
          break;
        case 3:
          if (
            (Ut(e, r), (r & 130023424) === r && ((t = hc + 500 - se()), 10 < t))
          ) {
            if (Vo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ol(vn.bind(null, e, Me, Et), t);
            break;
          }
          vn(e, Me, Et);
          break;
        case 4:
          if ((Ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - st(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * j1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ol(vn.bind(null, e, Me, Et), r);
            break;
          }
          vn(e, Me, Et);
          break;
        case 5:
          vn(e, Me, Et);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Ie(e, se()), e.callbackNode === n ? Gm.bind(null, e) : null;
}
function Yl(e, t) {
  var n = qr;
  return (
    e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
    (e = es(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && Xl(t)),
    e
  );
}
function Xl(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function F1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!lt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ut(e, t) {
  for (
    t &= ~pc,
      t &= ~Ms,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - st(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function id(e) {
  if (H & 6) throw Error(O(327));
  hr();
  var t = Vo(e, 0);
  if (!(t & 1)) return Ie(e, se()), null;
  var n = es(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Sl(e);
    r !== 0 && ((t = r), (n = Yl(e, r)));
  }
  if (n === 1) throw ((n = Pi), Tn(e, 0), Ut(e, t), Ie(e, se()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    vn(e, Me, Et),
    Ie(e, se()),
    null
  );
}
function mc(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((Pr = se() + 500), ks && dn());
  }
}
function _n(e) {
  Wt !== null && Wt.tag === 0 && !(H & 6) && hr();
  var t = H;
  H |= 1;
  var n = qe.transition,
    r = G;
  try {
    if (((qe.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (qe.transition = n), (H = t), !(H & 6) && dn();
  }
}
function gc() {
  (De = or.current), Z(or);
}
function Tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), m1(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((Qu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Bo();
          break;
        case 3:
          xr(), Z(Le), Z(Pe), oc();
          break;
        case 5:
          ic(r);
          break;
        case 4:
          xr();
          break;
        case 13:
          Z(ee);
          break;
        case 19:
          Z(ee);
          break;
        case 10:
          ec(r.type._context);
          break;
        case 22:
        case 23:
          gc();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (le = e = tn(e.current, null)),
    (ve = De = t),
    (ce = 0),
    (Pi = null),
    (pc = Ms = Ln = 0),
    (Me = qr = null),
    xn !== null)
  ) {
    for (t = 0; t < xn.length; t++)
      if (((n = xn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    xn = null;
  }
  return e;
}
function Km(e, t) {
  do {
    var n = le;
    try {
      if ((Ju(), (xo.current = Qo), Xo)) {
        for (var r = re.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Xo = !1;
      }
      if (
        ((Nn = 0),
        (fe = ue = re = null),
        (Xr = !1),
        (Si = 0),
        (dc.current = null),
        n === null || n.return === null)
      ) {
        (ce = 1), (Pi = t), (le = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = ve),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Wf(s);
          if (p !== null) {
            (p.flags &= -257),
              Gf(p, s, a, o, t),
              p.mode & 1 && Hf(o, u, t),
              (t = p),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Hf(o, u, t), vc();
              break e;
            }
            l = Error(O(426));
          }
        } else if (J && a.mode & 1) {
          var x = Wf(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Gf(x, s, a, o, t),
              qu(Er(l, a));
            break e;
          }
        }
        (o = l = Er(l, a)),
          ce !== 4 && (ce = 2),
          qr === null ? (qr = [o]) : qr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Mm(o, l, t);
              Df(o, m);
              break e;
            case 1:
              a = l;
              var h = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Jt === null || !Jt.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = Nm(o, a, t);
                Df(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Qm(n);
    } catch (S) {
      (t = S), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ym() {
  var e = qo.current;
  return (qo.current = Qo), e === null ? Qo : e;
}
function vc() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    pe === null || (!(Ln & 268435455) && !(Ms & 268435455)) || Ut(pe, ve);
}
function es(e, t) {
  var n = H;
  H |= 2;
  var r = Ym();
  (pe !== e || ve !== t) && ((Et = null), Tn(e, t));
  do
    try {
      z1();
      break;
    } catch (i) {
      Km(e, i);
    }
  while (1);
  if ((Ju(), (H = n), (qo.current = r), le !== null)) throw Error(O(261));
  return (pe = null), (ve = 0), ce;
}
function z1() {
  for (; le !== null; ) Xm(le);
}
function B1() {
  for (; le !== null && !d0(); ) Xm(le);
}
function Xm(e) {
  var t = Zm(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps),
    t === null ? Qm(e) : (le = t),
    (dc.current = null);
}
function Qm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = I1(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (le = null);
        return;
      }
    } else if (((n = _1(n, t, De)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function vn(e, t, n) {
  var r = G,
    i = qe.transition;
  try {
    (qe.transition = null), (G = 1), $1(e, t, n, r);
  } finally {
    (qe.transition = i), (G = r);
  }
  return null;
}
function $1(e, t, n, r) {
  do hr();
  while (Wt !== null);
  if (H & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (E0(e, o),
    e === pe && ((le = pe = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ao ||
      ((ao = !0),
      Jm(Ro, function () {
        return hr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = qe.transition), (qe.transition = null);
    var s = G;
    G = 1;
    var a = H;
    (H |= 4),
      (dc.current = null),
      V1(e, n),
      Hm(n, e),
      l1(kl),
      (Do = !!Tl),
      (kl = Tl = null),
      (e.current = n),
      D1(n),
      p0(),
      (H = a),
      (G = s),
      (qe.transition = o);
  } else e.current = n;
  if (
    (ao && ((ao = !1), (Wt = e), (Jo = i)),
    (o = e.pendingLanes),
    o === 0 && (Jt = null),
    g0(n.stateNode),
    Ie(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Zo) throw ((Zo = !1), (e = Gl), (Gl = null), e);
  return (
    Jo & 1 && e.tag !== 0 && hr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Kl ? Zr++ : ((Zr = 0), (Kl = e))) : (Zr = 0),
    dn(),
    null
  );
}
function hr() {
  if (Wt !== null) {
    var e = bh(Jo),
      t = qe.transition,
      n = G;
    try {
      if (((qe.transition = null), (G = 16 > e ? 16 : e), Wt === null))
        var r = !1;
      else {
        if (((e = Wt), (Wt = null), (Jo = 0), H & 6)) throw Error(O(331));
        var i = H;
        for (H |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child;
          if (L.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (L = f);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        p = c.return;
                      if ((Bm(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), (L = d);
                        break;
                      }
                      L = p;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var x = y.sibling;
                    (y.sibling = null), (y = x);
                  } while (y !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (L = m);
                break e;
              }
              L = o.return;
            }
        }
        var h = e.current;
        for (L = h; L !== null; ) {
          s = L;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (L = g);
          else
            e: for (s = h; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bs(9, a);
                  }
                } catch (S) {
                  oe(a, a.return, S);
                }
              if (a === s) {
                L = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (L = w);
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((H = i), dn(), ht && typeof ht.onPostCommitFiberRoot == "function")
        )
          try {
            ht.onPostCommitFiberRoot(xs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (qe.transition = t);
    }
  }
  return !1;
}
function od(e, t, n) {
  (t = Er(n, t)),
    (t = Mm(e, t, 1)),
    (e = Zt(e, t, 1)),
    (t = ke()),
    e !== null && (Ri(e, 1, t), Ie(e, t));
}
function oe(e, t, n) {
  if (e.tag === 3) od(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        od(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Jt === null || !Jt.has(r)))
        ) {
          (e = Er(n, e)),
            (e = Nm(t, e, 1)),
            (t = Zt(t, e, 1)),
            (e = ke()),
            t !== null && (Ri(t, 1, e), Ie(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function U1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (ve & n) === n &&
      (ce === 4 || (ce === 3 && (ve & 130023424) === ve && 500 > se() - hc)
        ? Tn(e, 0)
        : (pc |= n)),
    Ie(e, t);
}
function qm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = qi), (qi <<= 1), !(qi & 130023424) && (qi = 4194304))
      : (t = 1));
  var n = ke();
  (e = Lt(e, t)), e !== null && (Ri(e, t, n), Ie(e, n));
}
function H1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), qm(e, n);
}
function W1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), qm(e, n);
}
var Zm;
Zm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Le.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), L1(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), J && t.flags & 1048576 && tm(t, Ho, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Po(e, t), (e = t.pendingProps);
      var i = yr(t, Pe.current);
      pr(t, n), (i = ac(null, t, r, e, i, n));
      var o = lc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _e(r) ? ((o = !0), $o(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            nc(t),
            (i.updater = As),
            (t.stateNode = i),
            (i._reactInternals = t),
            Rl(t, r, e, n),
            (t = jl(null, t, r, !0, o, n)))
          : ((t.tag = 0), J && o && Xu(t), Te(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Po(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = K1(r)),
          (e = tt(r, e)),
          i)
        ) {
          case 0:
            t = Dl(null, t, r, e, n);
            break e;
          case 1:
            t = Xf(null, t, r, e, n);
            break e;
          case 11:
            t = Kf(null, t, r, e, n);
            break e;
          case 14:
            t = Yf(null, t, r, tt(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tt(r, i)),
        Dl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tt(r, i)),
        Xf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Rm(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          om(e, t),
          Ko(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Er(Error(O(423)), t)), (t = Qf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Er(Error(O(424)), t)), (t = Qf(e, t, r, n, i));
            break e;
          } else
            for (
              Fe = qt(t.stateNode.containerInfo.firstChild),
                ze = t,
                J = !0,
                ot = null,
                n = um(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((wr(), r === i)) {
            t = _t(e, t, n);
            break e;
          }
          Te(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cm(t),
        e === null && Ll(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Al(r, i) ? (s = null) : o !== null && Al(r, o) && (t.flags |= 32),
        Im(e, t),
        Te(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ll(t), null;
    case 13:
      return Vm(e, t, n);
    case 4:
      return (
        rc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sr(t, null, r, n)) : Te(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tt(r, i)),
        Kf(e, t, r, i, n)
      );
    case 7:
      return Te(e, t, t.pendingProps, n), t.child;
    case 8:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          Y(Wo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (lt(o.value, s)) {
            if (o.children === i.children && !Le.current) {
              t = _t(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Ot(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      _l(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(O(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  _l(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Te(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        pr(t, n),
        (i = Ze(i)),
        (r = r(i)),
        (t.flags |= 1),
        Te(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = tt(r, t.pendingProps)),
        (i = tt(r.type, i)),
        Yf(e, t, r, i, n)
      );
    case 15:
      return Lm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tt(r, i)),
        Po(e, t),
        (t.tag = 1),
        _e(r) ? ((e = !0), $o(t)) : (e = !1),
        pr(t, n),
        am(t, r, i),
        Rl(t, r, i, n),
        jl(null, t, r, !0, e, n)
      );
    case 19:
      return Dm(e, t, n);
    case 22:
      return _m(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Jm(e, t) {
  return Th(e, t);
}
function G1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Qe(e, t, n, r) {
  return new G1(e, t, n, r);
}
function yc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function K1(e) {
  if (typeof e == "function") return yc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Du)) return 11;
    if (e === ju) return 14;
  }
  return 2;
}
function tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ko(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) yc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Xn:
        return kn(n.children, i, o, t);
      case Vu:
        (s = 8), (i |= 8);
        break;
      case ol:
        return (
          (e = Qe(12, n, t, i | 2)), (e.elementType = ol), (e.lanes = o), e
        );
      case sl:
        return (e = Qe(13, n, t, i)), (e.elementType = sl), (e.lanes = o), e;
      case al:
        return (e = Qe(19, n, t, i)), (e.elementType = al), (e.lanes = o), e;
      case lh:
        return Ns(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case sh:
              s = 10;
              break e;
            case ah:
              s = 9;
              break e;
            case Du:
              s = 11;
              break e;
            case ju:
              s = 14;
              break e;
            case Ft:
              (s = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Qe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function kn(e, t, n, r) {
  return (e = Qe(7, e, r, t)), (e.lanes = n), e;
}
function Ns(e, t, n, r) {
  return (
    (e = Qe(22, e, r, t)),
    (e.elementType = lh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ka(e, t, n) {
  return (e = Qe(6, e, null, t)), (e.lanes = n), e;
}
function Aa(e, t, n) {
  return (
    (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Y1(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = aa(0)),
    (this.expirationTimes = aa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = aa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function wc(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new Y1(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Qe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    nc(o),
    e
  );
}
function X1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function eg(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return Jh(e, n, t);
  }
  return t;
}
function tg(e, t, n, r, i, o, s, a, l) {
  return (
    (e = wc(n, r, !0, e, i, o, s, a, l)),
    (e.context = eg(null)),
    (n = e.current),
    (r = ke()),
    (i = en(n)),
    (o = Ot(r, i)),
    (o.callback = t ?? null),
    Zt(n, o, i),
    (e.current.lanes = i),
    Ri(e, i, r),
    Ie(e, r),
    e
  );
}
function Ls(e, t, n, r) {
  var i = t.current,
    o = ke(),
    s = en(i);
  return (
    (n = eg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ot(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zt(i, t, s)),
    e !== null && (at(e, i, s, o), So(e, i, s)),
    s
  );
}
function ts(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function sd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Sc(e, t) {
  sd(e, t), (e = e.alternate) && sd(e, t);
}
function Q1() {
  return null;
}
var ng =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function xc(e) {
  this._internalRoot = e;
}
_s.prototype.render = xc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Ls(e, t, null, null);
};
_s.prototype.unmount = xc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _n(function () {
      Ls(null, e, null, null);
    }),
      (t[Nt] = null);
  }
};
function _s(e) {
  this._internalRoot = e;
}
_s.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < $t.length && t !== 0 && t < $t[n].priority; n++);
    $t.splice(n, 0, e), n === 0 && Ih(e);
  }
};
function Ec(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Is(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ad() {}
function q1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ts(s);
        o.call(u);
      };
    }
    var s = tg(t, r, e, 0, null, !1, !1, "", ad);
    return (
      (e._reactRootContainer = s),
      (e[Nt] = s.current),
      mi(e.nodeType === 8 ? e.parentNode : e),
      _n(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ts(l);
      a.call(u);
    };
  }
  var l = wc(e, 0, !1, null, null, !1, !1, "", ad);
  return (
    (e._reactRootContainer = l),
    (e[Nt] = l.current),
    mi(e.nodeType === 8 ? e.parentNode : e),
    _n(function () {
      Ls(t, l, n, r);
    }),
    l
  );
}
function Rs(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = ts(s);
        a.call(l);
      };
    }
    Ls(t, s, e, i);
  } else s = q1(n, t, e, i, r);
  return ts(s);
}
Mh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Br(t.pendingLanes);
        n !== 0 &&
          (Bu(t, n | 1), Ie(t, se()), !(H & 6) && ((Pr = se() + 500), dn()));
      }
      break;
    case 13:
      _n(function () {
        var r = Lt(e, 1);
        if (r !== null) {
          var i = ke();
          at(r, e, 1, i);
        }
      }),
        Sc(e, 1);
  }
};
$u = function (e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var n = ke();
      at(t, e, 134217728, n);
    }
    Sc(e, 134217728);
  }
};
Nh = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = Lt(e, t);
    if (n !== null) {
      var r = ke();
      at(n, e, t, r);
    }
    Sc(e, t);
  }
};
Lh = function () {
  return G;
};
_h = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
vl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((cl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ts(r);
            if (!i) throw Error(O(90));
            ch(r), cl(r, i);
          }
        }
      }
      break;
    case "textarea":
      dh(e, n);
      break;
    case "select":
      (t = n.value), t != null && ur(e, !!n.multiple, t, !1);
  }
};
wh = mc;
Sh = _n;
var Z1 = { usingClientEntryPoint: !1, Events: [Di, Jn, Ts, vh, yh, mc] },
  Vr = {
    findFiberByHostInstance: Sn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  J1 = {
    bundleType: Vr.bundleType,
    version: Vr.version,
    rendererPackageName: Vr.rendererPackageName,
    rendererConfig: Vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: It.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ph(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || Q1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!lo.isDisabled && lo.supportsFiber)
    try {
      (xs = lo.inject(J1)), (ht = lo);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z1;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ec(t)) throw Error(O(200));
  return X1(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!Ec(e)) throw Error(O(299));
  var n = !1,
    r = "",
    i = ng;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = wc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Nt] = t.current),
    mi(e.nodeType === 8 ? e.parentNode : e),
    new xc(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Ph(t)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return _n(e);
};
He.hydrate = function (e, t, n) {
  if (!Is(t)) throw Error(O(200));
  return Rs(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!Ec(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = ng;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = tg(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Nt] = t.current),
    mi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new _s(t);
};
He.render = function (e, t, n) {
  if (!Is(t)) throw Error(O(200));
  return Rs(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!Is(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (_n(function () {
        Rs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Nt] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = mc;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Is(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Rs(e, t, n, !1, r);
};
He.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = He);
})(Qy);
var ld = nl;
(tl.createRoot = ld.createRoot), (tl.hydrateRoot = ld.hydrateRoot);
var rg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ud = W.createContext && W.createContext(rg),
  nn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (nn =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        nn.apply(this, arguments)
      );
    },
  ew =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      return n;
    };
function ig(e) {
  return (
    e &&
    e.map(function (t, n) {
      return W.createElement(t.tag, nn({ key: n }, t.attr), ig(t.child));
    })
  );
}
function Rt(e) {
  return function (t) {
    return W.createElement(tw, nn({ attr: nn({}, e.attr) }, t), ig(e.child));
  };
}
function tw(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      s = ew(e, ["attr", "size", "title"]),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      W.createElement(
        "svg",
        nn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: l,
            style: nn(nn({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && W.createElement("title", null, o),
        e.children
      )
    );
  };
  return ud !== void 0
    ? W.createElement(ud.Consumer, null, function (n) {
        return t(n);
      })
    : t(rg);
}
function nw(e) {
  return Rt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { d: "M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" } },
    ],
  })(e);
}
var Ql = {},
  rw = {
    get exports() {
      return Ql;
    },
    set exports(e) {
      Ql = e;
    },
  },
  og = {},
  ql = {},
  iw = {
    get exports() {
      return ql;
    },
    set exports(e) {
      ql = e;
    },
  },
  ow = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  sw = ow,
  aw = sw;
function sg() {}
function ag() {}
ag.resetWarningCache = sg;
var lw = function () {
  function e(r, i, o, s, a, l) {
    if (l !== aw) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: ag,
    resetWarningCache: sg,
  };
  return (n.PropTypes = n), n;
};
iw.exports = lw();
function ns() {
  return null;
}
ns.isRequired = ns;
function U() {
  return ns;
}
var uw = {
    and: U,
    between: U,
    booleanSome: U,
    childrenHavePropXorChildren: U,
    childrenOf: U,
    childrenOfType: U,
    childrenSequenceOf: U,
    componentWithName: U,
    disallowedIf: U,
    elementType: U,
    empty: U,
    explicitNull: U,
    forbidExtraProps: Object,
    integer: U,
    keysOf: U,
    mutuallyExclusiveProps: U,
    mutuallyExclusiveTrueProps: U,
    nChildren: U,
    nonNegativeInteger: ns,
    nonNegativeNumber: U,
    numericString: U,
    object: U,
    or: U,
    predicate: U,
    range: U,
    ref: U,
    requiredBy: U,
    restrictedProp: U,
    sequenceOf: U,
    shape: U,
    stringEndsWith: U,
    stringStartsWith: U,
    uniqueArray: U,
    uniqueArrayOf: U,
    valuesOf: U,
    withShape: U,
  },
  cw = uw,
  fw = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
function dw() {
  if (
    !fw ||
    !window.addEventListener ||
    !window.removeEventListener ||
    !Object.defineProperty
  )
    return !1;
  var e = !1;
  try {
    var t = Object.defineProperty({}, "passive", {
        get: (function () {
          function r() {
            e = !0;
          }
          return r;
        })(),
      }),
      n = function () {};
    window.addEventListener("testPassiveEventSupport", n, t),
      window.removeEventListener("testPassiveEventSupport", n, t);
  } catch {}
  return e;
}
var Oa = void 0;
function pw() {
  return Oa === void 0 && (Oa = dw()), Oa;
}
function hw(e) {
  if (e) return pw() ? e : !!e.capture;
}
function mw(e) {
  if (!e) return 0;
  if (e === !0) return 100;
  var t = e.capture << 0,
    n = e.passive << 1,
    r = e.once << 2;
  return t + n + r;
}
function cd(e) {
  e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
}
function Vs(e) {
  (this.target = e), (this.events = {});
}
Vs.prototype.getEventHandlers = (function () {
  function e(t, n) {
    var r = String(t) + " " + String(mw(n));
    return (
      this.events[r] ||
        ((this.events[r] = { handlers: [], handleEvent: void 0 }),
        (this.events[r].nextHandlers = this.events[r].handlers)),
      this.events[r]
    );
  }
  return e;
})();
Vs.prototype.handleEvent = (function () {
  function e(t, n, r) {
    var i = this.getEventHandlers(t, n);
    (i.handlers = i.nextHandlers),
      i.handlers.forEach(function (o) {
        o && o(r);
      });
  }
  return e;
})();
Vs.prototype.add = (function () {
  function e(t, n, r) {
    var i = this,
      o = this.getEventHandlers(t, r);
    cd(o),
      o.nextHandlers.length === 0 &&
        ((o.handleEvent = this.handleEvent.bind(this, t, r)),
        this.target.addEventListener(t, o.handleEvent, r)),
      o.nextHandlers.push(n);
    var s = !0,
      a = (function () {
        function l() {
          if (s) {
            (s = !1), cd(o);
            var u = o.nextHandlers.indexOf(n);
            o.nextHandlers.splice(u, 1),
              o.nextHandlers.length === 0 &&
                (i.target && i.target.removeEventListener(t, o.handleEvent, r),
                (o.handleEvent = void 0));
          }
        }
        return l;
      })();
    return a;
  }
  return e;
})();
var ba = "__consolidated_events_handlers__";
function gw(e, t, n, r) {
  e[ba] || (e[ba] = new Vs(e));
  var i = hw(r);
  return e[ba].add(t, n, i);
}
const vw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, addEventListener: gw },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  yw = Yp(vw);
var fd = Object.prototype.toString,
  lg = function (t) {
    var n = fd.call(t),
      r = n === "[object Arguments]";
    return (
      r ||
        (r =
          n !== "[object Array]" &&
          t !== null &&
          typeof t == "object" &&
          typeof t.length == "number" &&
          t.length >= 0 &&
          fd.call(t.callee) === "[object Function]"),
      r
    );
  },
  Ma,
  dd;
function ww() {
  if (dd) return Ma;
  dd = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty,
      n = Object.prototype.toString,
      r = lg,
      i = Object.prototype.propertyIsEnumerable,
      o = !i.call({ toString: null }, "toString"),
      s = i.call(function () {}, "prototype"),
      a = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor",
      ],
      l = function (d) {
        var p = d.constructor;
        return p && p.prototype === d;
      },
      u = {
        $applicationCache: !0,
        $console: !0,
        $external: !0,
        $frame: !0,
        $frameElement: !0,
        $frames: !0,
        $innerHeight: !0,
        $innerWidth: !0,
        $onmozfullscreenchange: !0,
        $onmozfullscreenerror: !0,
        $outerHeight: !0,
        $outerWidth: !0,
        $pageXOffset: !0,
        $pageYOffset: !0,
        $parent: !0,
        $scrollLeft: !0,
        $scrollTop: !0,
        $scrollX: !0,
        $scrollY: !0,
        $self: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $window: !0,
      },
      c = (function () {
        if (typeof window > "u") return !1;
        for (var d in window)
          try {
            if (
              !u["$" + d] &&
              t.call(window, d) &&
              window[d] !== null &&
              typeof window[d] == "object"
            )
              try {
                l(window[d]);
              } catch {
                return !0;
              }
          } catch {
            return !0;
          }
        return !1;
      })(),
      f = function (d) {
        if (typeof window > "u" || !c) return l(d);
        try {
          return l(d);
        } catch {
          return !1;
        }
      };
    e = function (p) {
      var v = p !== null && typeof p == "object",
        y = n.call(p) === "[object Function]",
        x = r(p),
        m = v && n.call(p) === "[object String]",
        h = [];
      if (!v && !y && !x)
        throw new TypeError("Object.keys called on a non-object");
      var g = s && y;
      if (m && p.length > 0 && !t.call(p, 0))
        for (var w = 0; w < p.length; ++w) h.push(String(w));
      if (x && p.length > 0)
        for (var S = 0; S < p.length; ++S) h.push(String(S));
      else
        for (var P in p)
          !(g && P === "prototype") && t.call(p, P) && h.push(String(P));
      if (o)
        for (var T = f(p), E = 0; E < a.length; ++E)
          !(T && a[E] === "constructor") && t.call(p, a[E]) && h.push(a[E]);
      return h;
    };
  }
  return (Ma = e), Ma;
}
var Sw = Array.prototype.slice,
  xw = lg,
  pd = Object.keys,
  Ao = pd
    ? function (t) {
        return pd(t);
      }
    : ww(),
  hd = Object.keys;
Ao.shim = function () {
  if (Object.keys) {
    var t = (function () {
      var n = Object.keys(arguments);
      return n && n.length === arguments.length;
    })(1, 2);
    t ||
      (Object.keys = function (r) {
        return xw(r) ? hd(Sw.call(r)) : hd(r);
      });
  } else Object.keys = Ao;
  return Object.keys || Ao;
};
var Ew = Ao,
  Pw = function () {
    if (
      typeof Symbol != "function" ||
      typeof Object.getOwnPropertySymbols != "function"
    )
      return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var t = {},
      n = Symbol("test"),
      r = Object(n);
    if (
      typeof n == "string" ||
      Object.prototype.toString.call(n) !== "[object Symbol]" ||
      Object.prototype.toString.call(r) !== "[object Symbol]"
    )
      return !1;
    var i = 42;
    t[n] = i;
    for (n in t) return !1;
    if (
      (typeof Object.keys == "function" && Object.keys(t).length !== 0) ||
      (typeof Object.getOwnPropertyNames == "function" &&
        Object.getOwnPropertyNames(t).length !== 0)
    )
      return !1;
    var o = Object.getOwnPropertySymbols(t);
    if (
      o.length !== 1 ||
      o[0] !== n ||
      !Object.prototype.propertyIsEnumerable.call(t, n)
    )
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = Object.getOwnPropertyDescriptor(t, n);
      if (s.value !== i || s.enumerable !== !0) return !1;
    }
    return !0;
  },
  md = typeof Symbol < "u" && Symbol,
  Cw = Pw,
  Tw = function () {
    return typeof md != "function" ||
      typeof Symbol != "function" ||
      typeof md("foo") != "symbol" ||
      typeof Symbol("bar") != "symbol"
      ? !1
      : Cw();
  },
  kw = "Function.prototype.bind called on incompatible ",
  Na = Array.prototype.slice,
  Aw = Object.prototype.toString,
  Ow = "[object Function]",
  bw = function (t) {
    var n = this;
    if (typeof n != "function" || Aw.call(n) !== Ow)
      throw new TypeError(kw + n);
    for (
      var r = Na.call(arguments, 1),
        i,
        o = function () {
          if (this instanceof i) {
            var c = n.apply(this, r.concat(Na.call(arguments)));
            return Object(c) === c ? c : this;
          } else return n.apply(t, r.concat(Na.call(arguments)));
        },
        s = Math.max(0, n.length - r.length),
        a = [],
        l = 0;
      l < s;
      l++
    )
      a.push("$" + l);
    if (
      ((i = Function(
        "binder",
        "return function (" +
          a.join(",") +
          "){ return binder.apply(this,arguments); }"
      )(o)),
      n.prototype)
    ) {
      var u = function () {};
      (u.prototype = n.prototype),
        (i.prototype = new u()),
        (u.prototype = null);
    }
    return i;
  },
  Mw = bw,
  Pc = Function.prototype.bind || Mw,
  Nw = Pc,
  Lw = Nw.call(Function.call, Object.prototype.hasOwnProperty),
  z,
  Cr = SyntaxError,
  ug = Function,
  mr = TypeError,
  La = function (e) {
    try {
      return ug('"use strict"; return (' + e + ").constructor;")();
    } catch {}
  },
  An = Object.getOwnPropertyDescriptor;
if (An)
  try {
    An({}, "");
  } catch {
    An = null;
  }
var _a = function () {
    throw new mr();
  },
  _w = An
    ? (function () {
        try {
          return arguments.callee, _a;
        } catch {
          try {
            return An(arguments, "callee").get;
          } catch {
            return _a;
          }
        }
      })()
    : _a,
  Wn = Tw(),
  dt =
    Object.getPrototypeOf ||
    function (e) {
      return e.__proto__;
    },
  Kn = {},
  Iw = typeof Uint8Array > "u" ? z : dt(Uint8Array),
  On = {
    "%AggregateError%": typeof AggregateError > "u" ? z : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? z : ArrayBuffer,
    "%ArrayIteratorPrototype%": Wn ? dt([][Symbol.iterator]()) : z,
    "%AsyncFromSyncIteratorPrototype%": z,
    "%AsyncFunction%": Kn,
    "%AsyncGenerator%": Kn,
    "%AsyncGeneratorFunction%": Kn,
    "%AsyncIteratorPrototype%": Kn,
    "%Atomics%": typeof Atomics > "u" ? z : Atomics,
    "%BigInt%": typeof BigInt > "u" ? z : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? z : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? z : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? z : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? z : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? z : Float64Array,
    "%FinalizationRegistry%":
      typeof FinalizationRegistry > "u" ? z : FinalizationRegistry,
    "%Function%": ug,
    "%GeneratorFunction%": Kn,
    "%Int8Array%": typeof Int8Array > "u" ? z : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? z : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? z : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": Wn ? dt(dt([][Symbol.iterator]())) : z,
    "%JSON%": typeof JSON == "object" ? JSON : z,
    "%Map%": typeof Map > "u" ? z : Map,
    "%MapIteratorPrototype%":
      typeof Map > "u" || !Wn ? z : dt(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? z : Promise,
    "%Proxy%": typeof Proxy > "u" ? z : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? z : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? z : Set,
    "%SetIteratorPrototype%":
      typeof Set > "u" || !Wn ? z : dt(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%":
      typeof SharedArrayBuffer > "u" ? z : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": Wn ? dt(""[Symbol.iterator]()) : z,
    "%Symbol%": Wn ? Symbol : z,
    "%SyntaxError%": Cr,
    "%ThrowTypeError%": _w,
    "%TypedArray%": Iw,
    "%TypeError%": mr,
    "%Uint8Array%": typeof Uint8Array > "u" ? z : Uint8Array,
    "%Uint8ClampedArray%":
      typeof Uint8ClampedArray > "u" ? z : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? z : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? z : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? z : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? z : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? z : WeakSet,
  };
try {
  null.error;
} catch (e) {
  var Rw = dt(dt(e));
  On["%Error.prototype%"] = Rw;
}
var Vw = function e(t) {
    var n;
    if (t === "%AsyncFunction%") n = La("async function () {}");
    else if (t === "%GeneratorFunction%") n = La("function* () {}");
    else if (t === "%AsyncGeneratorFunction%") n = La("async function* () {}");
    else if (t === "%AsyncGenerator%") {
      var r = e("%AsyncGeneratorFunction%");
      r && (n = r.prototype);
    } else if (t === "%AsyncIteratorPrototype%") {
      var i = e("%AsyncGenerator%");
      i && (n = dt(i.prototype));
    }
    return (On[t] = n), n;
  },
  gd = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": [
      "AsyncGeneratorFunction",
      "prototype",
      "prototype",
    ],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"],
  },
  Fi = Pc,
  rs = Lw,
  Dw = Fi.call(Function.call, Array.prototype.concat),
  jw = Fi.call(Function.apply, Array.prototype.splice),
  vd = Fi.call(Function.call, String.prototype.replace),
  is = Fi.call(Function.call, String.prototype.slice),
  Fw = Fi.call(Function.call, RegExp.prototype.exec),
  zw =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  Bw = /\\(\\)?/g,
  $w = function (t) {
    var n = is(t, 0, 1),
      r = is(t, -1);
    if (n === "%" && r !== "%")
      throw new Cr("invalid intrinsic syntax, expected closing `%`");
    if (r === "%" && n !== "%")
      throw new Cr("invalid intrinsic syntax, expected opening `%`");
    var i = [];
    return (
      vd(t, zw, function (o, s, a, l) {
        i[i.length] = a ? vd(l, Bw, "$1") : s || o;
      }),
      i
    );
  },
  Uw = function (t, n) {
    var r = t,
      i;
    if ((rs(gd, r) && ((i = gd[r]), (r = "%" + i[0] + "%")), rs(On, r))) {
      var o = On[r];
      if ((o === Kn && (o = Vw(r)), typeof o > "u" && !n))
        throw new mr(
          "intrinsic " +
            t +
            " exists, but is not available. Please file an issue!"
        );
      return { alias: i, name: r, value: o };
    }
    throw new Cr("intrinsic " + t + " does not exist!");
  },
  Ds = function (t, n) {
    if (typeof t != "string" || t.length === 0)
      throw new mr("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof n != "boolean")
      throw new mr('"allowMissing" argument must be a boolean');
    if (Fw(/^%?[^%]*%?$/, t) === null)
      throw new Cr(
        "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
      );
    var r = $w(t),
      i = r.length > 0 ? r[0] : "",
      o = Uw("%" + i + "%", n),
      s = o.name,
      a = o.value,
      l = !1,
      u = o.alias;
    u && ((i = u[0]), jw(r, Dw([0, 1], u)));
    for (var c = 1, f = !0; c < r.length; c += 1) {
      var d = r[c],
        p = is(d, 0, 1),
        v = is(d, -1);
      if (
        (p === '"' ||
          p === "'" ||
          p === "`" ||
          v === '"' ||
          v === "'" ||
          v === "`") &&
        p !== v
      )
        throw new Cr("property names with quotes must have matching quotes");
      if (
        ((d === "constructor" || !f) && (l = !0),
        (i += "." + d),
        (s = "%" + i + "%"),
        rs(On, s))
      )
        a = On[s];
      else if (a != null) {
        if (!(d in a)) {
          if (!n)
            throw new mr(
              "base intrinsic for " +
                t +
                " exists, but the property is not available."
            );
          return;
        }
        if (An && c + 1 >= r.length) {
          var y = An(a, d);
          (f = !!y),
            f && "get" in y && !("originalValue" in y.get)
              ? (a = y.get)
              : (a = a[d]);
        } else (f = rs(a, d)), (a = a[d]);
        f && !l && (On[s] = a);
      }
    }
    return a;
  },
  Hw = Ds,
  Zl = Hw("%Object.defineProperty%", !0),
  Jl = function () {
    if (Zl)
      try {
        return Zl({}, "a", { value: 1 }), !0;
      } catch {
        return !1;
      }
    return !1;
  };
Jl.hasArrayLengthDefineBug = function () {
  if (!Jl()) return null;
  try {
    return Zl([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Ww = Jl,
  Gw = Ew,
  Kw = typeof Symbol == "function" && typeof Symbol("foo") == "symbol",
  Yw = Object.prototype.toString,
  Xw = Array.prototype.concat,
  cg = Object.defineProperty,
  Qw = function (e) {
    return typeof e == "function" && Yw.call(e) === "[object Function]";
  },
  qw = Ww(),
  fg = cg && qw,
  Zw = function (e, t, n, r) {
    if (t in e) {
      if (r === !0) {
        if (e[t] === n) return;
      } else if (!Qw(r) || !r()) return;
    }
    fg
      ? cg(e, t, { configurable: !0, enumerable: !1, value: n, writable: !0 })
      : (e[t] = n);
  },
  dg = function (e, t) {
    var n = arguments.length > 2 ? arguments[2] : {},
      r = Gw(t);
    Kw && (r = Xw.call(r, Object.getOwnPropertySymbols(t)));
    for (var i = 0; i < r.length; i += 1) Zw(e, r[i], t[r[i]], n[r[i]]);
  };
dg.supportsDescriptors = !!fg;
var js = dg,
  os = {},
  Jw = {
    get exports() {
      return os;
    },
    set exports(e) {
      os = e;
    },
  };
(function (e) {
  var t = Pc,
    n = Ds,
    r = n("%Function.prototype.apply%"),
    i = n("%Function.prototype.call%"),
    o = n("%Reflect.apply%", !0) || t.call(i, r),
    s = n("%Object.getOwnPropertyDescriptor%", !0),
    a = n("%Object.defineProperty%", !0),
    l = n("%Math.max%");
  if (a)
    try {
      a({}, "a", { value: 1 });
    } catch {
      a = null;
    }
  e.exports = function (f) {
    var d = o(t, i, arguments);
    if (s && a) {
      var p = s(d, "length");
      p.configurable &&
        a(d, "length", { value: 1 + l(0, f.length - (arguments.length - 1)) });
    }
    return d;
  };
  var u = function () {
    return o(t, r, arguments);
  };
  a ? a(e.exports, "apply", { value: u }) : (e.exports.apply = u);
})(Jw);
var eu = {},
  eS = {
    get exports() {
      return eu;
    },
    set exports(e) {
      eu = e;
    },
  },
  tS = Ds,
  nS = tS("%TypeError%"),
  rS = function (t, n) {
    if (t == null) throw new nS(n || "Cannot call method on " + t);
    return t;
  };
(function (e) {
  e.exports = rS;
})(eS);
var pg = Ds,
  hg = os,
  iS = hg(pg("String.prototype.indexOf")),
  oS = function (t, n) {
    var r = pg(t, !!n);
    return typeof r == "function" && iS(t, ".prototype.") > -1 ? hg(r) : r;
  },
  sS = eu,
  mg = oS,
  aS = mg("Object.prototype.propertyIsEnumerable"),
  lS = mg("Array.prototype.push"),
  gg = function (t) {
    var n = sS(t),
      r = [];
    for (var i in n) aS(n, i) && lS(r, n[i]);
    return r;
  },
  uS = gg,
  vg = function () {
    return typeof Object.values == "function" ? Object.values : uS;
  },
  cS = vg,
  fS = js,
  dS = function () {
    var t = cS();
    return (
      fS(
        Object,
        { values: t },
        {
          values: function () {
            return Object.values !== t;
          },
        }
      ),
      t
    );
  },
  pS = js,
  hS = os,
  mS = gg,
  yg = vg,
  gS = dS,
  wg = hS(yg(), Object);
pS(wg, { getPolyfill: yg, implementation: mS, shim: gS });
var vS = wg,
  Sg = function (t) {
    if (arguments.length < 1) throw new TypeError("1 argument is required");
    if (typeof t != "object")
      throw new TypeError(
        "Argument 1 (”other“) to Node.contains must be an instance of Node"
      );
    var n = t;
    do {
      if (this === n) return !0;
      n && (n = n.parentNode);
    } while (n);
    return !1;
  },
  yS = Sg,
  xg = function () {
    if (typeof document < "u") {
      if (document.contains) return document.contains;
      if (document.body && document.body.contains)
        try {
          if (typeof document.body.contains.call(document, "") == "boolean")
            return document.body.contains;
        } catch {}
    }
    return yS;
  },
  Ia,
  yd;
function wS() {
  if (yd) return Ia;
  yd = 1;
  var e = js,
    t = xg;
  return (
    (Ia = function () {
      var r = t();
      return (
        typeof document < "u" &&
          (e(
            document,
            { contains: r },
            {
              contains: function () {
                return document.contains !== r;
              },
            }
          ),
          typeof Element < "u" &&
            e(
              Element.prototype,
              { contains: r },
              {
                contains: function () {
                  return Element.prototype.contains !== r;
                },
              }
            )),
        r
      );
    }),
    Ia
  );
}
var SS = js,
  xS = Sg,
  Eg = xg,
  ES = Eg(),
  PS = wS(),
  Pg = function (t, n) {
    return ES.apply(t, [n]);
  };
SS(Pg, { getPolyfill: Eg, implementation: xS, shim: PS });
var CS = Pg;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = (function () {
      function w(S, P) {
        for (var T = 0; T < P.length; T++) {
          var E = P[T];
          (E.enumerable = E.enumerable || !1),
            (E.configurable = !0),
            "value" in E && (E.writable = !0),
            Object.defineProperty(S, E.key, E);
        }
      }
      return function (S, P, T) {
        return P && w(S.prototype, P), T && w(S, T), S;
      };
    })(),
    n = C,
    r = d(n),
    i = ql,
    o = d(i),
    s = cw,
    a = yw,
    l = vS,
    u = d(l),
    c = CS,
    f = d(c);
  function d(w) {
    return w && w.__esModule ? w : { default: w };
  }
  function p(w, S) {
    if (!(w instanceof S))
      throw new TypeError("Cannot call a class as a function");
  }
  function v(w, S) {
    if (!w)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return S && (typeof S == "object" || typeof S == "function") ? S : w;
  }
  function y(w, S) {
    if (typeof S != "function" && S !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof S
      );
    (w.prototype = Object.create(S && S.prototype, {
      constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 },
    })),
      S &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(w, S)
          : (w.__proto__ = S));
  }
  var x = {
      BLOCK: "block",
      FLEX: "flex",
      INLINE: "inline",
      INLINE_BLOCK: "inline-block",
      CONTENTS: "contents",
    },
    m = (0, s.forbidExtraProps)({
      children: o.default.node.isRequired,
      onOutsideClick: o.default.func.isRequired,
      disabled: o.default.bool,
      useCapture: o.default.bool,
      display: o.default.oneOf((0, u.default)(x)),
    }),
    h = { disabled: !1, useCapture: !0, display: x.BLOCK },
    g = (function (w) {
      y(S, w);
      function S() {
        var P;
        p(this, S);
        for (var T = arguments.length, E = Array(T), A = 0; A < T; A++)
          E[A] = arguments[A];
        var M = v(
          this,
          (P = S.__proto__ || Object.getPrototypeOf(S)).call.apply(
            P,
            [this].concat(E)
          )
        );
        return (
          (M.onMouseDown = M.onMouseDown.bind(M)),
          (M.onMouseUp = M.onMouseUp.bind(M)),
          (M.setChildNodeRef = M.setChildNodeRef.bind(M)),
          M
        );
      }
      return (
        t(S, [
          {
            key: "componentDidMount",
            value: (function () {
              function P() {
                var T = this.props,
                  E = T.disabled,
                  A = T.useCapture;
                E || this.addMouseDownEventListener(A);
              }
              return P;
            })(),
          },
          {
            key: "componentDidUpdate",
            value: (function () {
              function P(T) {
                var E = T.disabled,
                  A = this.props,
                  M = A.disabled,
                  b = A.useCapture;
                E !== M &&
                  (M
                    ? this.removeEventListeners()
                    : this.addMouseDownEventListener(b));
              }
              return P;
            })(),
          },
          {
            key: "componentWillUnmount",
            value: (function () {
              function P() {
                this.removeEventListeners();
              }
              return P;
            })(),
          },
          {
            key: "onMouseDown",
            value: (function () {
              function P(T) {
                var E = this.props.useCapture,
                  A =
                    this.childNode && (0, f.default)(this.childNode, T.target);
                A ||
                  (this.removeMouseUp &&
                    (this.removeMouseUp(), (this.removeMouseUp = null)),
                  (this.removeMouseUp = (0, a.addEventListener)(
                    document,
                    "mouseup",
                    this.onMouseUp,
                    { capture: E }
                  )));
              }
              return P;
            })(),
          },
          {
            key: "onMouseUp",
            value: (function () {
              function P(T) {
                var E = this.props.onOutsideClick,
                  A =
                    this.childNode && (0, f.default)(this.childNode, T.target);
                this.removeMouseUp &&
                  (this.removeMouseUp(), (this.removeMouseUp = null)),
                  A || E(T);
              }
              return P;
            })(),
          },
          {
            key: "setChildNodeRef",
            value: (function () {
              function P(T) {
                this.childNode = T;
              }
              return P;
            })(),
          },
          {
            key: "addMouseDownEventListener",
            value: (function () {
              function P(T) {
                this.removeMouseDown = (0, a.addEventListener)(
                  document,
                  "mousedown",
                  this.onMouseDown,
                  { capture: T }
                );
              }
              return P;
            })(),
          },
          {
            key: "removeEventListeners",
            value: (function () {
              function P() {
                this.removeMouseDown && this.removeMouseDown(),
                  this.removeMouseUp && this.removeMouseUp();
              }
              return P;
            })(),
          },
          {
            key: "render",
            value: (function () {
              function P() {
                var T = this.props,
                  E = T.children,
                  A = T.display;
                return r.default.createElement(
                  "div",
                  {
                    ref: this.setChildNodeRef,
                    style:
                      A !== x.BLOCK && (0, u.default)(x).includes(A)
                        ? { display: A }
                        : void 0,
                  },
                  E
                );
              }
              return P;
            })(),
          },
        ]),
        S
      );
    })(r.default.Component);
  (e.default = g), (g.propTypes = m), (g.defaultProps = h);
})(og);
(function (e) {
  e.exports = og;
})(rw);
const TS = Kp(Ql);
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ci() {
  return (
    (Ci = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ci.apply(this, arguments)
  );
}
var Pn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Pn || (Pn = {}));
const wd = "popstate";
function kS(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return tu(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : ss(i);
  }
  return bS(t, n, null, e);
}
function Be(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function AS(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function OS() {
  return Math.random().toString(36).substr(2, 8);
}
function Sd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function tu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ci(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Fs(t) : t,
      { state: n, key: (t && t.key) || r || OS() }
    )
  );
}
function ss(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Fs(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function bS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = Pn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Ci({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = Pn.Pop;
    let x = c(),
      m = x == null ? null : x - u;
    (u = x), l && l({ action: a, location: y.location, delta: m });
  }
  function d(x, m) {
    a = Pn.Push;
    let h = tu(y.location, x, m);
    n && n(h, x), (u = c() + 1);
    let g = Sd(h, u),
      w = y.createHref(h);
    try {
      s.pushState(g, "", w);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      i.location.assign(w);
    }
    o && l && l({ action: a, location: y.location, delta: 1 });
  }
  function p(x, m) {
    a = Pn.Replace;
    let h = tu(y.location, x, m);
    n && n(h, x), (u = c());
    let g = Sd(h, u),
      w = y.createHref(h);
    s.replaceState(g, "", w),
      o && l && l({ action: a, location: y.location, delta: 0 });
  }
  function v(x) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof x == "string" ? x : ss(x);
    return (
      (h = h.replace(/ $/, "%20")),
      Be(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, m)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(wd, f),
        (l = x),
        () => {
          i.removeEventListener(wd, f), (l = null);
        }
      );
    },
    createHref(x) {
      return t(i, x);
    },
    createURL: v,
    encodeLocation(x) {
      let m = v(x);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: d,
    replace: p,
    go(x) {
      return s.go(x);
    },
  };
  return y;
}
var xd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(xd || (xd = {}));
function Ed(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = MS(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: p } = c;
      if (d === "*") {
        let y = a[f] || "";
        s = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[f];
      return (
        p && !v ? (u[d] = void 0) : (u[d] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function MS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    AS(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Ti(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function NS(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Fs(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : LS(n, t)) : t,
    search: IS(r),
    hash: RS(i),
  };
}
function LS(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ra(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function _S(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Cg(e, t) {
  let n = _S(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Tg(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Fs(e))
    : ((i = Ci({}, e)),
      Be(
        !i.pathname || !i.pathname.includes("?"),
        Ra("?", "pathname", "search", i)
      ),
      Be(
        !i.pathname || !i.pathname.includes("#"),
        Ra("#", "pathname", "hash", i)
      ),
      Be(!i.search || !i.search.includes("#"), Ra("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      i.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = NS(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const kg = (e) => e.join("/").replace(/\/\/+/g, "/"),
  IS = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  RS = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function as() {
  return (
    (as = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    as.apply(this, arguments)
  );
}
const Cc = C.createContext(null),
  VS = C.createContext(null),
  Fn = C.createContext(null),
  Tc = C.createContext(null),
  zs = C.createContext({ outlet: null, matches: [], isDataRoute: !1 });
function DS(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Bs() || Be(!1);
  let { basename: r, navigator: i } = C.useContext(Fn),
    { hash: o, pathname: s, search: a } = Us(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : kg([r, s])),
    i.createHref({ pathname: l, search: a, hash: o })
  );
}
function Bs() {
  return C.useContext(Tc) != null;
}
function $s() {
  return Bs() || Be(!1), C.useContext(Tc).location;
}
function Ag(e) {
  C.useContext(Fn).static || C.useLayoutEffect(e);
}
function jS() {
  let { isDataRoute: e } = C.useContext(zs);
  return e ? US() : FS();
}
function FS() {
  Bs() || Be(!1);
  let e = C.useContext(Cc),
    { basename: t, future: n, navigator: r } = C.useContext(Fn),
    { matches: i } = C.useContext(zs),
    { pathname: o } = $s(),
    s = JSON.stringify(Cg(i, n.v7_relativeSplatPath)),
    a = C.useRef(!1);
  return (
    Ag(() => {
      a.current = !0;
    }),
    C.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Tg(u, JSON.parse(s), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : kg([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, o, e]
    )
  );
}
function Us(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = C.useContext(Fn),
    { matches: i } = C.useContext(zs),
    { pathname: o } = $s(),
    s = JSON.stringify(Cg(i, r.v7_relativeSplatPath));
  return C.useMemo(() => Tg(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
var Og = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Og || {}),
  bg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(bg || {});
function zS(e) {
  let t = C.useContext(Cc);
  return t || Be(!1), t;
}
function BS(e) {
  let t = C.useContext(zs);
  return t || Be(!1), t;
}
function $S(e) {
  let t = BS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Be(!1), n.route.id;
}
function US() {
  let { router: e } = zS(Og.UseNavigateStable),
    t = $S(bg.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Ag(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, as({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function HS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Pn.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  Bs() && Be(!1);
  let l = t.replace(/^\/*/, "/"),
    u = C.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: as({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s]
    );
  typeof r == "string" && (r = Fs(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: p = null,
      key: v = "default",
    } = r,
    y = C.useMemo(() => {
      let x = Ti(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: f, hash: d, state: p, key: v },
            navigationType: i,
          };
    }, [l, c, f, d, p, v, i]);
  return y == null
    ? null
    : C.createElement(
        Fn.Provider,
        { value: u },
        C.createElement(Tc.Provider, { children: n, value: y })
      );
}
new Promise(() => {});
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ls() {
  return (
    (ls = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ls.apply(this, arguments)
  );
}
function Mg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function WS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function GS(e, t) {
  return e.button === 0 && (!t || t === "_self") && !WS(e);
}
const KS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  YS = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  XS = "6";
try {
  window.__reactRouterVersion = XS;
} catch {}
const QS = C.createContext({ isTransitioning: !1 }),
  qS = "startTransition",
  Pd = Uy[qS];
function ZS(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = C.useRef();
  o.current == null && (o.current = kS({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = C.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = C.useCallback(
      (f) => {
        u && Pd ? Pd(() => l(f)) : l(f);
      },
      [l, u]
    );
  return (
    C.useLayoutEffect(() => s.listen(c), [s, c]),
    C.createElement(HS, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const JS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ex = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ng = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      d = Mg(t, KS),
      { basename: p } = C.useContext(Fn),
      v,
      y = !1;
    if (typeof u == "string" && ex.test(u) && ((v = u), JS))
      try {
        let g = new URL(window.location.href),
          w = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
          S = Ti(w.pathname, p);
        w.origin === g.origin && S != null
          ? (u = S + w.search + w.hash)
          : (y = !0);
      } catch {}
    let x = DS(u, { relative: i }),
      m = nx(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: f,
      });
    function h(g) {
      r && r(g), g.defaultPrevented || m(g);
    }
    return C.createElement(
      "a",
      ls({}, d, { href: v || x, onClick: y || o ? r : h, ref: n, target: l })
    );
  }),
  Lg = C.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: s = !1,
        style: a,
        to: l,
        unstable_viewTransition: u,
        children: c,
      } = t,
      f = Mg(t, YS),
      d = Us(l, { relative: f.relative }),
      p = $s(),
      v = C.useContext(VS),
      { navigator: y, basename: x } = C.useContext(Fn),
      m = v != null && rx(d) && u === !0,
      h = y.encodeLocation ? y.encodeLocation(d).pathname : d.pathname,
      g = p.pathname,
      w =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    i ||
      ((g = g.toLowerCase()),
      (w = w ? w.toLowerCase() : null),
      (h = h.toLowerCase())),
      w && x && (w = Ti(w, x) || w);
    const S = h !== "/" && h.endsWith("/") ? h.length - 1 : h.length;
    let P = g === h || (!s && g.startsWith(h) && g.charAt(S) === "/"),
      T =
        w != null &&
        (w === h || (!s && w.startsWith(h) && w.charAt(h.length) === "/")),
      E = { isActive: P, isPending: T, isTransitioning: m },
      A = P ? r : void 0,
      M;
    typeof o == "function"
      ? (M = o(E))
      : (M = [
          o,
          P ? "active" : null,
          T ? "pending" : null,
          m ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let b = typeof a == "function" ? a(E) : a;
    return C.createElement(
      Ng,
      ls({}, f, {
        "aria-current": A,
        className: M,
        ref: n,
        style: b,
        to: l,
        unstable_viewTransition: u,
      }),
      typeof c == "function" ? c(E) : c
    );
  });
var nu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(nu || (nu = {}));
var Cd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Cd || (Cd = {}));
function tx(e) {
  let t = C.useContext(Cc);
  return t || Be(!1), t;
}
function nx(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = jS(),
    u = $s(),
    c = Us(e, { relative: s });
  return C.useCallback(
    (f) => {
      if (GS(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : ss(u) === ss(c);
        l(e, {
          replace: d,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, c, r, i, n, e, o, s, a]
  );
}
function rx(e, t) {
  t === void 0 && (t = {});
  let n = C.useContext(QS);
  n == null && Be(!1);
  let { basename: r } = tx(nu.useViewTransitionState),
    i = Us(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Ti(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = Ti(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Ed(i.pathname, s) != null || Ed(i.pathname, o) != null;
}
/*! *****************************************************************************
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
***************************************************************************** */ var ru =
  function () {
    return (
      (ru =
        Object.assign ||
        function (t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        }),
      ru.apply(this, arguments)
    );
  };
function ix(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
var gr = "",
  Jr = null,
  Oo = null,
  _g = null;
function kc() {
  (gr = ""),
    Jr !== null && Jr.disconnect(),
    Oo !== null && (window.clearTimeout(Oo), (Oo = null));
}
function Td(e) {
  var t = ["BUTTON", "INPUT", "SELECT", "TEXTAREA"],
    n = ["A", "AREA"];
  return (
    (t.includes(e.tagName) && !e.hasAttribute("disabled")) ||
    (n.includes(e.tagName) && e.hasAttribute("href"))
  );
}
function kd() {
  var e = null;
  if (gr === "#") e = document.body;
  else {
    var t = gr.replace("#", "");
    (e = document.getElementById(t)),
      e === null && gr === "#top" && (e = document.body);
  }
  if (e !== null) {
    _g(e);
    var n = e.getAttribute("tabindex");
    return (
      n === null && !Td(e) && e.setAttribute("tabindex", -1),
      e.focus({ preventScroll: !0 }),
      n === null && !Td(e) && (e.blur(), e.removeAttribute("tabindex")),
      kc(),
      !0
    );
  }
  return !1;
}
function ox(e) {
  window.setTimeout(function () {
    kd() === !1 &&
      (Jr === null && (Jr = new MutationObserver(kd)),
      Jr.observe(document, { attributes: !0, childList: !0, subtree: !0 }),
      (Oo = window.setTimeout(function () {
        kc();
      }, e || 1e4)));
  }, 0);
}
function Ig(e) {
  return W.forwardRef(function (t, n) {
    var r = "";
    typeof t.to == "string" && t.to.includes("#")
      ? (r = "#" + t.to.split("#").slice(1).join("#"))
      : typeof t.to == "object" &&
        typeof t.to.hash == "string" &&
        (r = t.to.hash);
    var i = {};
    e === Lg &&
      (i.isActive = function (a, l) {
        return a && a.isExact && l.hash === r;
      });
    function o(a) {
      kc(),
        (gr = t.elementId ? "#" + t.elementId : r),
        t.onClick && t.onClick(a),
        gr !== "" &&
          !a.defaultPrevented &&
          a.button === 0 &&
          (!t.target || t.target === "_self") &&
          !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey) &&
          ((_g =
            t.scroll ||
            function (l) {
              return t.smooth
                ? l.scrollIntoView({ behavior: "smooth" })
                : l.scrollIntoView();
            }),
          ox(t.timeout));
    }
    var s = ix(t, ["scroll", "smooth", "timeout", "elementId"]);
    return W.createElement(e, ru({}, i, s, { onClick: o, ref: n }), t.children);
  });
}
var Gn = Ig(Ng);
Ig(Lg);
function sx() {
  const [e, t] = C.useState(!1),
    n = () => {
      t((i) => !i);
    };
  return k("section", {
    className: "h-wrapper",
    children: R("div", {
      className: "h-container flexCenter paddings innerWidth",
      children: [
        k(Gn, {
          to: "#hero",
          children: k("img", { src: "./logo.png", alt: "logo", width: 100 }),
        }),
        k(TS, {
          onOutsideClick: () => {
            t(!1);
          },
          children: R("div", {
            className: "flexCenter h-menu",
            style: ((i) => ({ right: !i && "-100%" }))(e),
            children: [
              k(Gn, { to: "#residencies", children: "Residences" }),
              k(Gn, { to: "#values", children: "Our Value" }),
              k(Gn, { to: "#contact", children: "Contact Us" }),
              k(Gn, { to: "#getStart", children: "Get Started" }),
              k("button", {
                className: "button",
                children: k(Gn, { to: "#contact", children: "Contact" }),
              }),
            ],
          }),
        }),
        k("div", {
          className: "menu-icon",
          children: k(nw, { size: 30, onClick: n }),
        }),
      ],
    }),
  });
}
function ax(e) {
  return Rt({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
          clipRule: "evenodd",
        },
      },
    ],
  })(e);
}
function lx(e) {
  return Rt({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
          clipRule: "evenodd",
        },
      },
    ],
  })(e);
}
var Ac = {},
  iu =
    (globalThis && globalThis.__assign) ||
    function () {
      return (iu =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    },
  ux = (function () {
    function e(t, n, r) {
      var i = this;
      (this.endVal = n),
        (this.options = r),
        (this.version = "2.6.0"),
        (this.defaults = {
          startVal: 0,
          decimalPlaces: 0,
          duration: 2,
          useEasing: !0,
          useGrouping: !0,
          useIndianSeparators: !1,
          smartEasingThreshold: 999,
          smartEasingAmount: 333,
          separator: ",",
          decimal: ".",
          prefix: "",
          suffix: "",
          enableScrollSpy: !1,
          scrollSpyDelay: 200,
          scrollSpyOnce: !1,
        }),
        (this.finalEndVal = null),
        (this.useEasing = !0),
        (this.countDown = !1),
        (this.error = ""),
        (this.startVal = 0),
        (this.paused = !0),
        (this.once = !1),
        (this.count = function (o) {
          i.startTime || (i.startTime = o);
          var s = o - i.startTime;
          (i.remaining = i.duration - s),
            i.useEasing
              ? i.countDown
                ? (i.frameVal =
                    i.startVal -
                    i.easingFn(s, 0, i.startVal - i.endVal, i.duration))
                : (i.frameVal = i.easingFn(
                    s,
                    i.startVal,
                    i.endVal - i.startVal,
                    i.duration
                  ))
              : (i.frameVal =
                  i.startVal + (i.endVal - i.startVal) * (s / i.duration));
          var a = i.countDown ? i.frameVal < i.endVal : i.frameVal > i.endVal;
          (i.frameVal = a ? i.endVal : i.frameVal),
            (i.frameVal = Number(i.frameVal.toFixed(i.options.decimalPlaces))),
            i.printValue(i.frameVal),
            s < i.duration
              ? (i.rAF = requestAnimationFrame(i.count))
              : i.finalEndVal !== null
              ? i.update(i.finalEndVal)
              : i.options.onCompleteCallback && i.options.onCompleteCallback();
        }),
        (this.formatNumber = function (o) {
          var s,
            a,
            l,
            u,
            c = o < 0 ? "-" : "";
          s = Math.abs(o).toFixed(i.options.decimalPlaces);
          var f = (s += "").split(".");
          if (
            ((a = f[0]),
            (l = f.length > 1 ? i.options.decimal + f[1] : ""),
            i.options.useGrouping)
          ) {
            u = "";
            for (var d = 3, p = 0, v = 0, y = a.length; v < y; ++v)
              i.options.useIndianSeparators && v === 4 && ((d = 2), (p = 1)),
                v !== 0 && p % d == 0 && (u = i.options.separator + u),
                p++,
                (u = a[y - v - 1] + u);
            a = u;
          }
          return (
            i.options.numerals &&
              i.options.numerals.length &&
              ((a = a.replace(/[0-9]/g, function (x) {
                return i.options.numerals[+x];
              })),
              (l = l.replace(/[0-9]/g, function (x) {
                return i.options.numerals[+x];
              }))),
            c + i.options.prefix + a + l + i.options.suffix
          );
        }),
        (this.easeOutExpo = function (o, s, a, l) {
          return (a * (1 - Math.pow(2, (-10 * o) / l)) * 1024) / 1023 + s;
        }),
        (this.options = iu(iu({}, this.defaults), r)),
        (this.formattingFn = this.options.formattingFn
          ? this.options.formattingFn
          : this.formatNumber),
        (this.easingFn = this.options.easingFn
          ? this.options.easingFn
          : this.easeOutExpo),
        (this.startVal = this.validateValue(this.options.startVal)),
        (this.frameVal = this.startVal),
        (this.endVal = this.validateValue(n)),
        (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
        this.resetDuration(),
        (this.options.separator = String(this.options.separator)),
        (this.useEasing = this.options.useEasing),
        this.options.separator === "" && (this.options.useGrouping = !1),
        (this.el = typeof t == "string" ? document.getElementById(t) : t),
        this.el
          ? this.printValue(this.startVal)
          : (this.error = "[CountUp] target is null or undefined"),
        typeof window < "u" &&
          this.options.enableScrollSpy &&
          (this.error
            ? console.error(this.error, t)
            : ((window.onScrollFns = window.onScrollFns || []),
              window.onScrollFns.push(function () {
                return i.handleScroll(i);
              }),
              (window.onscroll = function () {
                window.onScrollFns.forEach(function (o) {
                  return o();
                });
              }),
              this.handleScroll(this)));
    }
    return (
      (e.prototype.handleScroll = function (t) {
        if (t && window && !t.once) {
          var n = window.innerHeight + window.scrollY,
            r = t.el.getBoundingClientRect(),
            i = r.top + window.pageYOffset,
            o = r.top + r.height + window.pageYOffset;
          o < n && o > window.scrollY && t.paused
            ? ((t.paused = !1),
              setTimeout(function () {
                return t.start();
              }, t.options.scrollSpyDelay),
              t.options.scrollSpyOnce && (t.once = !0))
            : (window.scrollY > o || i > n) && !t.paused && t.reset();
        }
      }),
      (e.prototype.determineDirectionAndSmartEasing = function () {
        var t = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > t;
        var n = t - this.startVal;
        if (
          Math.abs(n) > this.options.smartEasingThreshold &&
          this.options.useEasing
        ) {
          this.finalEndVal = t;
          var r = this.countDown ? 1 : -1;
          (this.endVal = t + r * this.options.smartEasingAmount),
            (this.duration = this.duration / 2);
        } else (this.endVal = t), (this.finalEndVal = null);
        this.finalEndVal !== null
          ? (this.useEasing = !1)
          : (this.useEasing = this.options.useEasing);
      }),
      (e.prototype.start = function (t) {
        this.error ||
          (t && (this.options.onCompleteCallback = t),
          this.duration > 0
            ? (this.determineDirectionAndSmartEasing(),
              (this.paused = !1),
              (this.rAF = requestAnimationFrame(this.count)))
            : this.printValue(this.endVal));
      }),
      (e.prototype.pauseResume = function () {
        this.paused
          ? ((this.startTime = null),
            (this.duration = this.remaining),
            (this.startVal = this.frameVal),
            this.determineDirectionAndSmartEasing(),
            (this.rAF = requestAnimationFrame(this.count)))
          : cancelAnimationFrame(this.rAF),
          (this.paused = !this.paused);
      }),
      (e.prototype.reset = function () {
        cancelAnimationFrame(this.rAF),
          (this.paused = !0),
          this.resetDuration(),
          (this.startVal = this.validateValue(this.options.startVal)),
          (this.frameVal = this.startVal),
          this.printValue(this.startVal);
      }),
      (e.prototype.update = function (t) {
        cancelAnimationFrame(this.rAF),
          (this.startTime = null),
          (this.endVal = this.validateValue(t)),
          this.endVal !== this.frameVal &&
            ((this.startVal = this.frameVal),
            this.finalEndVal == null && this.resetDuration(),
            (this.finalEndVal = null),
            this.determineDirectionAndSmartEasing(),
            (this.rAF = requestAnimationFrame(this.count)));
      }),
      (e.prototype.printValue = function (t) {
        var n;
        if (this.el) {
          var r = this.formattingFn(t);
          (n = this.options.plugin) !== null && n !== void 0 && n.render
            ? this.options.plugin.render(this.el, r)
            : this.el.tagName === "INPUT"
            ? (this.el.value = r)
            : this.el.tagName === "text" || this.el.tagName === "tspan"
            ? (this.el.textContent = r)
            : (this.el.innerHTML = r);
        }
      }),
      (e.prototype.ensureNumber = function (t) {
        return typeof t == "number" && !isNaN(t);
      }),
      (e.prototype.validateValue = function (t) {
        var n = Number(t);
        return this.ensureNumber(n)
          ? n
          : ((this.error = "[CountUp] invalid start or end value: ".concat(t)),
            null);
      }),
      (e.prototype.resetDuration = function () {
        (this.startTime = null),
          (this.duration = 1e3 * Number(this.options.duration)),
          (this.remaining = this.duration);
      }),
      e
    );
  })();
const cx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, CountUp: ux },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fx = Yp(cx);
Object.defineProperty(Ac, "__esModule", { value: !0 });
var de = C,
  dx = fx;
function px(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      o,
      s,
      a = [],
      l = !0,
      u = !1;
    try {
      if (((o = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        l = !1;
      } else
        for (
          ;
          !(l = (r = o.call(n)).done) && (a.push(r.value), a.length !== t);
          l = !0
        );
    } catch (c) {
      (u = !0), (i = c);
    } finally {
      try {
        if (!l && n.return != null && ((s = n.return()), Object(s) !== s))
          return;
      } finally {
        if (u) throw i;
      }
    }
    return a;
  }
}
function Ad(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ad(Object(n), !0).forEach(function (r) {
          hx(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ad(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function hx(e, t, n) {
  return (
    (t = xx(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ou() {
  return (
    (ou = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ou.apply(this, arguments)
  );
}
function mx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Rg(e, t) {
  if (e == null) return {};
  var n = mx(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function gx(e, t) {
  return vx(e) || px(e, t) || yx(e, t) || wx();
}
function vx(e) {
  if (Array.isArray(e)) return e;
}
function yx(e, t) {
  if (e) {
    if (typeof e == "string") return Od(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Od(e, t);
  }
}
function Od(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function wx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sx(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xx(e) {
  var t = Sx(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Ex =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u"
    ? de.useLayoutEffect
    : de.useEffect;
function nt(e) {
  var t = de.useRef(e);
  return (
    Ex(function () {
      t.current = e;
    }),
    de.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, [])
  );
}
var Px = function (t, n) {
    var r = n.decimal,
      i = n.decimals,
      o = n.duration,
      s = n.easingFn,
      a = n.end,
      l = n.formattingFn,
      u = n.numerals,
      c = n.prefix,
      f = n.separator,
      d = n.start,
      p = n.suffix,
      v = n.useEasing,
      y = n.useGrouping,
      x = n.useIndianSeparators,
      m = n.enableScrollSpy,
      h = n.scrollSpyDelay,
      g = n.scrollSpyOnce;
    return new dx.CountUp(t, a, {
      startVal: d,
      duration: o,
      decimal: r,
      decimalPlaces: i,
      easingFn: s,
      formattingFn: l,
      numerals: u,
      separator: f,
      prefix: c,
      suffix: p,
      useEasing: v,
      useIndianSeparators: x,
      useGrouping: y,
      enableScrollSpy: m,
      scrollSpyDelay: h,
      scrollSpyOnce: g,
    });
  },
  Cx = [
    "ref",
    "startOnMount",
    "enableReinitialize",
    "delay",
    "onEnd",
    "onStart",
    "onPauseResume",
    "onReset",
    "onUpdate",
  ],
  Tx = {
    decimal: ".",
    separator: ",",
    delay: null,
    prefix: "",
    suffix: "",
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: !0,
    enableReinitialize: !0,
    useEasing: !0,
    useGrouping: !0,
    useIndianSeparators: !1,
  },
  Vg = function (t) {
    var n = Object.fromEntries(
        Object.entries(t).filter(function (A) {
          var M = gx(A, 2),
            b = M[1];
          return b !== void 0;
        })
      ),
      r = de.useMemo(
        function () {
          return us(us({}, Tx), n);
        },
        [t]
      ),
      i = r.ref,
      o = r.startOnMount,
      s = r.enableReinitialize,
      a = r.delay,
      l = r.onEnd,
      u = r.onStart,
      c = r.onPauseResume,
      f = r.onReset,
      d = r.onUpdate,
      p = Rg(r, Cx),
      v = de.useRef(),
      y = de.useRef(),
      x = de.useRef(!1),
      m = nt(function () {
        return Px(typeof i == "string" ? i : i.current, p);
      }),
      h = nt(function (A) {
        var M = v.current;
        if (M && !A) return M;
        var b = m();
        return (v.current = b), b;
      }),
      g = nt(function () {
        var A = function () {
          return h(!0).start(function () {
            l == null || l({ pauseResume: w, reset: S, start: T, update: P });
          });
        };
        a && a > 0 ? (y.current = setTimeout(A, a * 1e3)) : A(),
          u == null || u({ pauseResume: w, reset: S, update: P });
      }),
      w = nt(function () {
        h().pauseResume(), c == null || c({ reset: S, start: T, update: P });
      }),
      S = nt(function () {
        h().el &&
          (y.current && clearTimeout(y.current),
          h().reset(),
          f == null || f({ pauseResume: w, start: T, update: P }));
      }),
      P = nt(function (A) {
        h().update(A), d == null || d({ pauseResume: w, reset: S, start: T });
      }),
      T = nt(function () {
        S(), g();
      }),
      E = nt(function (A) {
        o && (A && S(), g());
      });
    return (
      de.useEffect(
        function () {
          x.current ? s && E(!0) : ((x.current = !0), E());
        },
        [
          s,
          x,
          E,
          a,
          t.start,
          t.suffix,
          t.prefix,
          t.duration,
          t.separator,
          t.decimals,
          t.decimal,
          t.formattingFn,
        ]
      ),
      de.useEffect(
        function () {
          return function () {
            S();
          };
        },
        [S]
      ),
      { start: T, pauseResume: w, reset: S, update: P, getCountUp: h }
    );
  },
  kx = ["className", "redraw", "containerProps", "children", "style"],
  Ax = function (t) {
    var n = t.className,
      r = t.redraw,
      i = t.containerProps,
      o = t.children,
      s = t.style,
      a = Rg(t, kx),
      l = de.useRef(null),
      u = de.useRef(!1),
      c = Vg(
        us(
          us({}, a),
          {},
          {
            ref: l,
            startOnMount: typeof o != "function" || t.delay === 0,
            enableReinitialize: !1,
          }
        )
      ),
      f = c.start,
      d = c.reset,
      p = c.update,
      v = c.pauseResume,
      y = c.getCountUp,
      x = nt(function () {
        f();
      }),
      m = nt(function (w) {
        t.preserveValue || d(), p(w);
      }),
      h = nt(function () {
        if (
          typeof t.children == "function" &&
          !(l.current instanceof Element)
        ) {
          console.error(
            `Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`
          );
          return;
        }
        y();
      });
    de.useEffect(
      function () {
        h();
      },
      [h]
    ),
      de.useEffect(
        function () {
          u.current && m(t.end);
        },
        [t.end, m]
      );
    var g = r && t;
    return (
      de.useEffect(
        function () {
          r && u.current && x();
        },
        [x, r, g]
      ),
      de.useEffect(
        function () {
          !r && u.current && x();
        },
        [
          x,
          r,
          t.start,
          t.suffix,
          t.prefix,
          t.duration,
          t.separator,
          t.decimals,
          t.decimal,
          t.className,
          t.formattingFn,
        ]
      ),
      de.useEffect(function () {
        u.current = !0;
      }, []),
      typeof o == "function"
        ? o({
            countUpRef: l,
            start: f,
            reset: d,
            update: p,
            pauseResume: v,
            getCountUp: y,
          })
        : de.createElement(
            "span",
            ou({ className: n, ref: l, style: s }, i),
            typeof t.start < "u" ? y().formattingFn(t.start) : ""
          )
    );
  },
  Va = (Ac.default = Ax);
Ac.useCountUp = Vg;
const Dg = C.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Hs = C.createContext({}),
  Oc = C.createContext(null),
  Ws = typeof document < "u",
  bd = Ws ? C.useLayoutEffect : C.useEffect,
  jg = C.createContext({ strict: !1 });
function Ox(e, t, n, r) {
  const { visualElement: i } = C.useContext(Hs),
    o = C.useContext(jg),
    s = C.useContext(Oc),
    a = C.useContext(Dg).reducedMotion,
    l = C.useRef();
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  return (
    C.useInsertionEffect(() => {
      u && u.update(n, s);
    }),
    bd(() => {
      u && u.render();
    }),
    C.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? bd : C.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function sr(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function bx(e, t, n) {
  return C.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : sr(n) && (n.current = r));
    },
    [t]
  );
}
function ki(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Gs(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const bc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Mc = ["initial", ...bc];
function Ks(e) {
  return Gs(e.animate) || Mc.some((t) => ki(e[t]));
}
function Fg(e) {
  return !!(Ks(e) || e.variants);
}
function Mx(e, t) {
  if (Ks(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ki(n) ? n : void 0,
      animate: ki(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Nx(e) {
  const { initial: t, animate: n } = Mx(e, C.useContext(Hs));
  return C.useMemo(() => ({ initial: t, animate: n }), [Md(t), Md(n)]);
}
function Md(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Nd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ai = {};
for (const e in Nd) Ai[e] = { isEnabled: (t) => Nd[e].some((n) => !!t[n]) };
function Lx(e) {
  for (const t in e) Ai[t] = { ...Ai[t], ...e[t] };
}
function zg(e) {
  const t = C.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const ei = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let _x = 1;
function Ix() {
  return zg(() => {
    if (ei.hasEverUpdated) return _x++;
  });
}
const Bg = C.createContext({}),
  $g = C.createContext({}),
  Rx = Symbol.for("motionComponentSymbol");
function Vx({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Lx(e);
  function o(a, l) {
    let u;
    const c = { ...C.useContext(Dg), ...a, layoutId: Dx(a) },
      { isStatic: f } = c,
      d = Nx(a),
      p = f ? void 0 : Ix(),
      v = r(a, f);
    if (!f && Ws) {
      d.visualElement = Ox(i, v, c, t);
      const y = C.useContext($g),
        x = C.useContext(jg).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, x, e, p, y));
    }
    return C.createElement(
      Hs.Provider,
      { value: d },
      u && d.visualElement
        ? C.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, a, p, bx(v, d.visualElement, l), v, f, d.visualElement)
    );
  }
  const s = C.forwardRef(o);
  return (s[Rx] = i), s;
}
function Dx({ layoutId: e }) {
  const t = C.useContext(Bg).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function jx(e) {
  function t(r, i = {}) {
    return Vx(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const Fx = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Nc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Fx.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const cs = {};
function zx(e) {
  Object.assign(cs, e);
}
const Ys = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  zn = new Set(Ys);
function Ug(e, { layout: t, layoutId: n }) {
  return (
    zn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!cs[e] || e === "opacity"))
  );
}
const Re = (e) => !!(e && e.getVelocity),
  Bx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  $x = Ys.length;
function Ux(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < $x; s++) {
    const a = Ys[s];
    if (e[a] !== void 0) {
      const l = Bx[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const Hg = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Wg = Hg("--"),
  su = Hg("var(--"),
  Hx = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  In = (e, t, n) => Math.min(Math.max(n, e), t),
  Bn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ti = { ...Bn, transform: (e) => In(0, 1, e) },
  uo = { ...Bn, default: 1 },
  ni = (e) => Math.round(e * 1e5) / 1e5,
  Oi = /(-)?([\d]*\.?[\d])+/g,
  au =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  Wx =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function zi(e) {
  return typeof e == "string";
}
const Bi = (e) => ({
    test: (t) => zi(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  jt = Bi("deg"),
  gt = Bi("%"),
  D = Bi("px"),
  Gx = Bi("vh"),
  Kx = Bi("vw"),
  Ld = {
    ...gt,
    parse: (e) => gt.parse(e) / 100,
    transform: (e) => gt.transform(e * 100),
  },
  _d = { ...Bn, transform: Math.round },
  Gg = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    size: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    rotate: jt,
    rotateX: jt,
    rotateY: jt,
    rotateZ: jt,
    scale: uo,
    scaleX: uo,
    scaleY: uo,
    scaleZ: uo,
    skew: jt,
    skewX: jt,
    skewY: jt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: ti,
    originX: Ld,
    originY: Ld,
    originZ: D,
    zIndex: _d,
    fillOpacity: ti,
    strokeOpacity: ti,
    numOctaves: _d,
  };
function Lc(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (Wg(f)) {
      o[f] = d;
      continue;
    }
    const p = Gg[f],
      v = Hx(d, p);
    if (zn.has(f)) {
      if (((l = !0), (s[f] = v), !c)) continue;
      d !== (p.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (a[f] = v)) : (i[f] = v);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = Ux(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: p = 0 } = a;
    i.transformOrigin = `${f} ${d} ${p}`;
  }
}
const _c = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Kg(e, t, n) {
  for (const r in t) !Re(t[r]) && !Ug(r, n) && (e[r] = t[r]);
}
function Yx({ transformTemplate: e }, t, n) {
  return C.useMemo(() => {
    const r = _c();
    return (
      Lc(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function Xx(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    Kg(i, r, e),
    Object.assign(i, Yx(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function Qx(e, t, n) {
  const r = {},
    i = Xx(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const qx = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function fs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    qx.has(e)
  );
}
let Yg = (e) => !fs(e);
function Zx(e) {
  e && (Yg = (t) => (t.startsWith("on") ? !fs(t) : e(t)));
}
try {
  Zx(require("@emotion/is-prop-valid").default);
} catch {}
function Jx(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Yg(i) ||
        (n === !0 && fs(i)) ||
        (!t && !fs(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Id(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function eE(e, t, n) {
  const r = Id(t, e.x, e.width),
    i = Id(n, e.y, e.height);
  return `${r} ${i}`;
}
const tE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  nE = { offset: "strokeDashoffset", array: "strokeDasharray" };
function rE(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? tE : nE;
  e[o.offset] = D.transform(-r);
  const s = D.transform(t),
    a = D.transform(n);
  e[o.array] = `${s} ${a}`;
}
function Ic(
  e,
  {
    attrX: t,
    attrY: n,
    originX: r,
    originY: i,
    pathLength: o,
    pathSpacing: s = 1,
    pathOffset: a = 0,
    ...l
  },
  u,
  c,
  f
) {
  if ((Lc(e, l, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: p, dimensions: v } = e;
  d.transform && (v && (p.transform = d.transform), delete d.transform),
    v &&
      (r !== void 0 || i !== void 0 || p.transform) &&
      (p.transformOrigin = eE(
        v,
        r !== void 0 ? r : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    o !== void 0 && rE(d, o, s, a, !1);
}
const Xg = () => ({ ..._c(), attrs: {} }),
  Rc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function iE(e, t, n, r) {
  const i = C.useMemo(() => {
    const o = Xg();
    return (
      Ic(o, t, { enableHardwareAcceleration: !1 }, Rc(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Kg(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function oE(e = !1) {
  return (n, r, i, o, { latestValues: s }, a) => {
    const u = (Nc(n) ? iE : Qx)(r, s, a, n),
      f = { ...Jx(r, typeof n == "string", e), ...u, ref: o },
      { children: d } = r,
      p = C.useMemo(() => (Re(d) ? d.get() : d), [d]);
    return (
      i && (f["data-projection-id"] = i),
      C.createElement(n, { ...f, children: p })
    );
  };
}
const Vc = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Qg(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const qg = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Zg(e, t, n, r) {
  Qg(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(qg.has(i) ? i : Vc(i), t.attrs[i]);
}
function Dc(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Re(n[i]) || (t.style && Re(t.style[i])) || Ug(i, e)) && (r[i] = n[i]);
  return r;
}
function Jg(e, t) {
  const n = Dc(e, t);
  for (const r in e)
    if (Re(e[r]) || Re(t[r])) {
      const i = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
      n[i] = e[r];
    }
  return n;
}
function jc(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
const ds = (e) => Array.isArray(e),
  sE = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  aE = (e) => (ds(e) ? e[e.length - 1] || 0 : e);
function bo(e) {
  const t = Re(e) ? e.get() : e;
  return sE(t) ? t.toValue() : t;
}
function lE(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: uE(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const ev = (e) => (t, n) => {
  const r = C.useContext(Hs),
    i = C.useContext(Oc),
    o = () => lE(e, t, r, i);
  return n ? o() : zg(o);
};
function uE(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = bo(o[d]);
  let { initial: s, animate: a } = e;
  const l = Ks(e),
    u = Fg(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Gs(f) &&
      (Array.isArray(f) ? f : [f]).forEach((p) => {
        const v = jc(e, p);
        if (!v) return;
        const { transitionEnd: y, transition: x, ...m } = v;
        for (const h in m) {
          let g = m[h];
          if (Array.isArray(g)) {
            const w = c ? g.length - 1 : 0;
            g = g[w];
          }
          g !== null && (i[h] = g);
        }
        for (const h in y) i[h] = y[h];
      }),
    i
  );
}
const cE = {
    useVisualState: ev({
      scrapeMotionValuesFromProps: Jg,
      createRenderState: Xg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Ic(
          n,
          r,
          { enableHardwareAcceleration: !1 },
          Rc(t.tagName),
          e.transformTemplate
        ),
          Zg(t, n);
      },
    }),
  },
  fE = {
    useVisualState: ev({
      scrapeMotionValuesFromProps: Dc,
      createRenderState: _c,
    }),
  };
function dE(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Nc(e) ? cE : fE),
    preloadedFeatures: n,
    useRender: oE(t),
    createVisualElement: r,
    Component: e,
  };
}
function kt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const tv = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Xs(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const pE = (e) => (t) => tv(t) && e(t, Xs(t));
function bt(e, t, n, r) {
  return kt(e, t, pE(n), r);
}
const hE = (e, t) => (n) => t(e(n)),
  rn = (...e) => e.reduce(hE);
function nv(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Rd = nv("dragHorizontal"),
  Vd = nv("dragVertical");
function rv(e) {
  let t = !1;
  if (e === "y") t = Vd();
  else if (e === "x") t = Rd();
  else {
    const n = Rd(),
      r = Vd();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function iv() {
  const e = rv(!0);
  return e ? (e(), !1) : !0;
}
class pn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function mE(e) {
  let t = [],
    n = [],
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return (
          u && s.add(l),
          d.indexOf(l) === -1 && (d.push(l), f && i && (r = t.length)),
          l
        );
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        u !== -1 && n.splice(u, 1), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(l), s.has(c) && (a.schedule(c), e());
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
const Ee = { delta: 0, timestamp: 0, isProcessing: !1 },
  gE = 40;
let lu = !0,
  bi = !1;
const $i = ["read", "update", "preRender", "render", "postRender"],
  Qs = $i.reduce((e, t) => ((e[t] = mE(() => (bi = !0))), e), {}),
  ne = $i.reduce((e, t) => {
    const n = Qs[t];
    return (e[t] = (r, i = !1, o = !1) => (bi || yE(), n.schedule(r, i, o))), e;
  }, {}),
  ln = $i.reduce((e, t) => ((e[t] = Qs[t].cancel), e), {}),
  Da = $i.reduce((e, t) => ((e[t] = () => Qs[t].process(Ee)), e), {}),
  vE = (e) => Qs[e].process(Ee),
  ov = (e) => {
    (bi = !1),
      (Ee.delta = lu ? 1e3 / 60 : Math.max(Math.min(e - Ee.timestamp, gE), 1)),
      (Ee.timestamp = e),
      (Ee.isProcessing = !0),
      $i.forEach(vE),
      (Ee.isProcessing = !1),
      bi && ((lu = !1), requestAnimationFrame(ov));
  },
  yE = () => {
    (bi = !0), (lu = !0), Ee.isProcessing || requestAnimationFrame(ov);
  };
function Dd(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.type === "touch" || iv()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && ne.update(() => a[r](o, s));
    };
  return bt(e.current, n, i, { passive: !e.getProps()[r] });
}
class wE extends pn {
  mount() {
    this.unmount = rn(Dd(this.node, !0), Dd(this.node, !1));
  }
  unmount() {}
}
class SE extends pn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = rn(
      kt(this.node.current, "focus", () => this.onFocus()),
      kt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const sv = (e, t) => (t ? (e === t ? !0 : sv(e, t.parentElement)) : !1),
  ge = (e) => e;
function ja(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Xs(n));
}
class xE extends pn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ge),
      (this.removeEndListeners = ge),
      (this.removeAccessibleListeners = ge),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = bt(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              ne.update(() => {
                sv(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = bt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = rn(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                ja("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ne.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = kt(this.node.current, "keyup", s)),
              ja("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = kt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && ja("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = kt(this.node.current, "blur", r);
        this.removeAccessibleListeners = rn(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ne.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !iv()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ne.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = bt(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = kt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = rn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const uu = new WeakMap(),
  Fa = new WeakMap(),
  EE = (e) => {
    const t = uu.get(e.target);
    t && t(e);
  },
  PE = (e) => {
    e.forEach(EE);
  };
function CE({ root: e, ...t }) {
  const n = e || document;
  Fa.has(n) || Fa.set(n, {});
  const r = Fa.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(PE, { root: e, ...t })), r[i];
}
function TE(e, t, n) {
  const r = CE(t);
  return (
    uu.set(e, n),
    r.observe(e),
    () => {
      uu.delete(e), r.unobserve(e);
    }
  );
}
const kE = { some: 0, all: 1 };
class AE extends pn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : kE[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return TE(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(OE(t, n)) && this.startObserver();
  }
  unmount() {}
}
function OE({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const bE = {
  inView: { Feature: AE },
  tap: { Feature: xE },
  focus: { Feature: SE },
  hover: { Feature: wE },
};
function av(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function ME(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function NE(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function qs(e, t, n) {
  const r = e.getProps();
  return jc(r, t, n !== void 0 ? n : r.custom, ME(e), NE(e));
}
const LE = "framerAppearId",
  _E = "data-" + Vc(LE);
let IE = ge,
  ps = ge;
const on = (e) => e * 1e3,
  Rn = (e) => e / 1e3,
  RE = { current: !1 },
  lv = (e) => Array.isArray(e) && typeof e[0] == "number";
function uv(e) {
  return !!(
    !e ||
    (typeof e == "string" && cv[e]) ||
    lv(e) ||
    (Array.isArray(e) && e.every(uv))
  );
}
const Ur = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  cv = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ur([0, 0.65, 0.55, 1]),
    circOut: Ur([0.55, 0, 1, 0.45]),
    backIn: Ur([0.31, 0.01, 0.66, -0.59]),
    backOut: Ur([0.33, 1.53, 0.69, 0.99]),
  };
function fv(e) {
  if (e) return lv(e) ? Ur(e) : Array.isArray(e) ? e.map(fv) : cv[e];
}
function VE(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = fv(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const jd = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  },
  za = {},
  dv = {};
for (const e in jd)
  dv[e] = () => (za[e] === void 0 && (za[e] = jd[e]()), za[e]);
function DE(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const pv = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  jE = 1e-7,
  FE = 12;
function zE(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = pv(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > jE && ++a < FE);
  return s;
}
function Ui(e, t, n, r) {
  if (e === t && n === r) return ge;
  const i = (o) => zE(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : pv(i(o), t, r));
}
const BE = Ui(0.42, 0, 1, 1),
  $E = Ui(0, 0, 0.58, 1),
  hv = Ui(0.42, 0, 0.58, 1),
  Fc = (e, t) => (n) =>
    !!(
      (zi(n) && Wx.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  mv = (e, t, n) => (r) => {
    if (!zi(r)) return r;
    const [i, o, s, a] = r.match(Oi);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  UE = (e) => In(0, 255, e),
  Ba = { ...Bn, transform: (e) => Math.round(UE(e)) },
  Cn = {
    test: Fc("rgb", "red"),
    parse: mv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ba.transform(e) +
      ", " +
      Ba.transform(t) +
      ", " +
      Ba.transform(n) +
      ", " +
      ni(ti.transform(r)) +
      ")",
  };
function HE(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const cu = { test: Fc("#"), parse: HE, transform: Cn.transform },
  ar = {
    test: Fc("hsl", "hue"),
    parse: mv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      gt.transform(ni(t)) +
      ", " +
      gt.transform(ni(n)) +
      ", " +
      ni(ti.transform(r)) +
      ")",
  },
  Ce = {
    test: (e) => Cn.test(e) || cu.test(e) || ar.test(e),
    parse: (e) =>
      Cn.test(e) ? Cn.parse(e) : ar.test(e) ? ar.parse(e) : cu.parse(e),
    transform: (e) =>
      zi(e) ? e : e.hasOwnProperty("red") ? Cn.transform(e) : ar.transform(e),
  },
  te = (e, t, n) => -n * e + n * t + e;
function $a(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function WE({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = $a(l, a, e + 1 / 3)), (o = $a(l, a, e)), (s = $a(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Ua = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  GE = [cu, Cn, ar],
  KE = (e) => GE.find((t) => t.test(e));
function Fd(e) {
  const t = KE(e);
  let n = t.parse(e);
  return t === ar && (n = WE(n)), n;
}
const gv = (e, t) => {
    const n = Fd(e),
      r = Fd(t),
      i = { ...n };
    return (o) => (
      (i.red = Ua(n.red, r.red, o)),
      (i.green = Ua(n.green, r.green, o)),
      (i.blue = Ua(n.blue, r.blue, o)),
      (i.alpha = te(n.alpha, r.alpha, o)),
      Cn.transform(i)
    );
  },
  vv = "${c}",
  yv = "${n}";
function YE(e) {
  var t, n;
  return (
    isNaN(e) &&
    zi(e) &&
    (((t = e.match(Oi)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(au)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
function hs(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0,
    r = 0;
  const i = e.match(au);
  i && ((n = i.length), (e = e.replace(au, vv)), t.push(...i.map(Ce.parse)));
  const o = e.match(Oi);
  return (
    o && ((r = o.length), (e = e.replace(Oi, yv)), t.push(...o.map(Bn.parse))),
    { values: t, numColors: n, numNumbers: r, tokenised: e }
  );
}
function wv(e) {
  return hs(e).values;
}
function Sv(e) {
  const { values: t, numColors: n, tokenised: r } = hs(e),
    i = t.length;
  return (o) => {
    let s = r;
    for (let a = 0; a < i; a++)
      s = s.replace(a < n ? vv : yv, a < n ? Ce.transform(o[a]) : ni(o[a]));
    return s;
  };
}
const XE = (e) => (typeof e == "number" ? 0 : e);
function QE(e) {
  const t = wv(e);
  return Sv(e)(t.map(XE));
}
const un = {
  test: YE,
  parse: wv,
  createTransformer: Sv,
  getAnimatableNone: QE,
};
function xv(e, t) {
  return typeof e == "number"
    ? (n) => te(e, t, n)
    : Ce.test(e)
    ? gv(e, t)
    : Pv(e, t);
}
const Ev = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => xv(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  qE = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = xv(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  Pv = (e, t) => {
    const n = un.createTransformer(t),
      r = hs(e),
      i = hs(t);
    return r.numColors === i.numColors && r.numNumbers >= i.numNumbers
      ? rn(Ev(r.values, i.values), n)
      : (s) => `${s > 0 ? t : e}`;
  },
  Mi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  zd = (e, t) => (n) => te(e, t, n);
function ZE(e) {
  return typeof e == "number"
    ? zd
    : typeof e == "string"
    ? Ce.test(e)
      ? gv
      : Pv
    : Array.isArray(e)
    ? Ev
    : typeof e == "object"
    ? qE
    : zd;
}
function JE(e, t, n) {
  const r = [],
    i = n || ZE(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] : t;
      a = rn(l, a);
    }
    r.push(a);
  }
  return r;
}
function Cv(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (
    (ps(o === t.length),
    ps(!r || !Array.isArray(r) || r.length === o - 1),
    o === 1)
  )
    return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = JE(t, r, i),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Mi(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => l(In(e[0], e[o - 1], u)) : l;
}
function eP(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Mi(0, t, r);
    e.push(te(n, 1, i));
  }
}
function tP(e) {
  const t = [0];
  return eP(t, e.length - 1), t;
}
function nP(e, t) {
  return e.map((n) => n * t);
}
const Tv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  kv = (e) => (t) => 1 - e(1 - t),
  Av = (e) => 1 - Math.sin(Math.acos(e)),
  zc = kv(Av),
  rP = Tv(zc),
  Ov = Ui(0.33, 1.53, 0.69, 0.99),
  Bc = kv(Ov),
  iP = Tv(Bc),
  oP = (e) =>
    (e *= 2) < 1 ? 0.5 * Bc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  sP = {
    linear: ge,
    easeIn: BE,
    easeInOut: hv,
    easeOut: $E,
    circIn: Av,
    circInOut: rP,
    circOut: zc,
    backIn: Bc,
    backInOut: iP,
    backOut: Ov,
    anticipate: oP,
  },
  Bd = (e) => {
    if (Array.isArray(e)) {
      ps(e.length === 4);
      const [t, n, r, i] = e;
      return Ui(t, n, r, i);
    } else if (typeof e == "string") return sP[e];
    return e;
  },
  aP = (e) => Array.isArray(e) && typeof e[0] != "number";
function lP(e, t) {
  return e.map(() => t || hv).splice(0, e.length - 1);
}
function ms({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = aP(r) ? r.map(Bd) : Bd(r),
    o = { done: !1, value: t[0] },
    s = nP(n && n.length === t.length ? n : tP(t), e),
    a = Cv(s, t, { ease: Array.isArray(i) ? i : lP(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
function bv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const uP = 5;
function Mv(e, t, n) {
  const r = Math.max(t - uP, 0);
  return bv(n - e(r), t - r);
}
const Ha = 0.001,
  cP = 0.01,
  $d = 10,
  fP = 0.05,
  dP = 1;
function pP({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  IE(e <= on($d));
  let s = 1 - t;
  (s = In(fP, dP, s)),
    (e = In(cP, $d, Rn(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            p = fu(u, s),
            v = Math.exp(-f);
          return Ha - (d / p) * v;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            p = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            y = fu(Math.pow(u, 2), s);
          return ((-i(u) + Ha > 0 ? -1 : 1) * ((d - p) * v)) / y;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Ha + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = mP(i, o, a);
  if (((e = on(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const hP = 12;
function mP(e, t, n) {
  let r = n;
  for (let i = 1; i < hP; i++) r = r - e(r) / t(r);
  return r;
}
function fu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const gP = ["duration", "bounce"],
  vP = ["stiffness", "damping", "mass"];
function Ud(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function yP(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Ud(e, vP) && Ud(e, gP)) {
    const n = pP(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Nv({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = yP(r),
    p = c ? -Rn(c) : 0,
    v = l / (2 * Math.sqrt(a * u)),
    y = o - i,
    x = Rn(Math.sqrt(a / u)),
    m = Math.abs(y) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (v < 1) {
    const g = fu(x, v);
    h = (w) => {
      const S = Math.exp(-v * x * w);
      return (
        o - S * (((p + v * x * y) / g) * Math.sin(g * w) + y * Math.cos(g * w))
      );
    };
  } else if (v === 1) h = (g) => o - Math.exp(-x * g) * (y + (p + x * y) * g);
  else {
    const g = x * Math.sqrt(v * v - 1);
    h = (w) => {
      const S = Math.exp(-v * x * w),
        P = Math.min(g * w, 300);
      return (
        o - (S * ((p + v * x * y) * Math.sinh(P) + g * y * Math.cosh(P))) / g
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (g) => {
      const w = h(g);
      if (d) s.done = g >= f;
      else {
        let S = p;
        g !== 0 && (v < 1 ? (S = Mv(h, g, w)) : (S = 0));
        const P = Math.abs(S) <= n,
          T = Math.abs(o - w) <= t;
        s.done = P && T;
      }
      return (s.value = s.done ? o : w), s;
    },
  };
}
function Hd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    p = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    v = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
        ? a
        : l;
  let y = n * t;
  const x = f + y,
    m = s === void 0 ? x : s(x);
  m !== x && (y = m - f);
  const h = (E) => -y * Math.exp(-E / r),
    g = (E) => m + h(E),
    w = (E) => {
      const A = h(E),
        M = g(E);
      (d.done = Math.abs(A) <= u), (d.value = d.done ? m : M);
    };
  let S, P;
  const T = (E) => {
    p(d.value) &&
      ((S = E),
      (P = Nv({
        keyframes: [d.value, v(d.value)],
        velocity: Mv(g, E, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let A = !1;
        return (
          !P && S === void 0 && ((A = !0), w(E), T(E)),
          S !== void 0 && E > S ? P.next(E - S) : (!A && w(E), d)
        );
      },
    }
  );
}
const wP = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ne.update(t, !0),
      stop: () => ln.update(t),
      now: () => (Ee.isProcessing ? Ee.timestamp : performance.now()),
    };
  },
  SP = { decay: Hd, inertia: Hd, tween: ms, keyframes: ms, spring: Nv },
  xP = 2e4;
function EP(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < xP; ) (t += n), (r = e.next(t));
  return t;
}
function gs({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = wP,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let p = 1,
    v = !1,
    y,
    x;
  const m = () => {
    y && y(),
      (x = new Promise((F) => {
        y = F;
      }));
  };
  m();
  let h;
  const g = SP[i] || ms;
  let w;
  g !== ms &&
    typeof r[0] != "number" &&
    ((w = Cv([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const S = g({ ...d, keyframes: r });
  let P;
  a === "mirror" &&
    (P = g({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let T = "idle",
    E = null,
    A = null,
    M = null;
  S.calculatedDuration === null && o && (S.calculatedDuration = EP(S));
  const { calculatedDuration: b } = S;
  let _ = 1 / 0,
    j = 1 / 0;
  b !== null && ((_ = b + s), (j = _ * (o + 1) - s));
  let $ = 0;
  const K = (F) => {
      if (A === null) return;
      E !== null ? ($ = E) : ($ = (F - A) * p),
        ($ = Math.max($ - t, 0)),
        T === "finished" && E === null && ($ = j);
      let X = $,
        yt = S;
      if (o) {
        const Vt = $ / _;
        let Wi = Math.floor(Vt),
          hn = Vt % 1;
        !hn && Vt >= 1 && (hn = 1),
          hn === 1 && Wi--,
          (Wi = Math.min(Wi, o + 1));
        const qc = !!(Wi % 2);
        qc &&
          (a === "reverse"
            ? ((hn = 1 - hn), s && (hn -= s / _))
            : a === "mirror" && (yt = P));
        let Zc = In(0, 1, hn);
        $ > j && (Zc = a === "reverse" && qc ? 1 : 0), (X = Zc * _);
      }
      const Ve = yt.next(X);
      w && (Ve.value = w(Ve.value));
      let { done: Un } = Ve;
      b !== null && (Un = $ >= j);
      const wt =
        E === null &&
        (T === "finished" || (T === "running" && Un) || (p < 0 && $ <= 0));
      return f && f(Ve.value), wt && N(), Ve;
    },
    he = () => {
      h && h.stop(), (h = void 0);
    },
    be = () => {
      (T = "idle"), he(), m(), (A = M = null);
    },
    N = () => {
      (T = "finished"), c && c(), he(), m();
    },
    I = () => {
      if (v) return;
      h || (h = n(K));
      const F = h.now();
      l && l(),
        (T = "running"),
        E !== null ? (A = F - E) : A || (A = F),
        (M = A),
        (E = null),
        h.start();
    };
  e && I();
  const V = {
    then(F, X) {
      return x.then(F, X);
    },
    get time() {
      return Rn($);
    },
    set time(F) {
      (F = on(F)),
        ($ = F),
        E !== null || !h || p === 0 ? (E = F) : (A = h.now() - F / p);
    },
    get speed() {
      return p;
    },
    set speed(F) {
      F === p || !h || ((p = F), (V.time = Rn($)));
    },
    get state() {
      return T;
    },
    play: I,
    pause: () => {
      (T = "paused"), (E = $);
    },
    stop: () => {
      (v = !0), T !== "idle" && ((T = "idle"), u && u(), be());
    },
    cancel: () => {
      M !== null && K(M), be();
    },
    complete: () => {
      T = "finished";
    },
    sample: (F) => ((A = 0), K(F)),
  };
  return V;
}
const PP = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  co = 10,
  CP = 2e4,
  TP = (e, t) => t.type === "spring" || e === "backgroundColor" || !uv(t.ease);
function kP(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      dv.waapi() &&
      PP.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    a,
    l;
  const u = () => {
    l = new Promise((y) => {
      a = y;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d } = i;
  if (TP(t, i)) {
    const y = gs({ ...i, repeat: 0, delay: 0 });
    let x = { done: !1, value: c[0] };
    const m = [];
    let h = 0;
    for (; !x.done && h < CP; ) (x = y.sample(h)), m.push(x.value), (h += co);
    (c = m), (f = h - co), (d = "linear");
  }
  const p = VE(e.owner.current, t, c, { ...i, duration: f, ease: d }),
    v = () => {
      ne.update(() => p.cancel()), a(), u();
    };
  return (
    (p.onfinish = () => {
      e.set(DE(c, i)), r && r(), v();
    }),
    {
      then(y, x) {
        return l.then(y, x);
      },
      get time() {
        return Rn(p.currentTime || 0);
      },
      set time(y) {
        p.currentTime = on(y);
      },
      get speed() {
        return p.playbackRate;
      },
      set speed(y) {
        p.playbackRate = y;
      },
      play: () => {
        s || p.play();
      },
      pause: () => p.pause(),
      stop: () => {
        if (((s = !0), p.playState === "idle")) return;
        const { currentTime: y } = p;
        if (y) {
          const x = gs({ ...i, autoplay: !1 });
          e.setWithVelocity(x.sample(y - co).value, x.sample(y).value, co);
        }
        v();
      },
      complete: () => p.finish(),
      cancel: v,
    }
  );
}
function AP({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      play: ge,
      pause: ge,
      stop: ge,
      then: (o) => (o(), Promise.resolve()),
      cancel: ge,
      complete: ge,
    }
  );
  return t ? gs({ keyframes: [0, 1], duration: t, onComplete: i }) : i();
}
const OP = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  bP = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  MP = { type: "keyframes", duration: 0.8 },
  NP = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  LP = (e, { keyframes: t }) =>
    t.length > 2
      ? MP
      : zn.has(e)
      ? e.startsWith("scale")
        ? bP(t[1])
        : OP
      : NP,
  du = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" && un.test(t) && !t.startsWith("url("))
        ),
  _P = new Set(["brightness", "contrast", "saturate", "opacity"]);
function IP(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Oi) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = _P.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const RP = /([a-z-]*)\(.*?\)/g,
  pu = {
    ...un,
    getAnimatableNone: (e) => {
      const t = e.match(RP);
      return t ? t.map(IP).join(" ") : e;
    },
  },
  VP = {
    ...Gg,
    color: Ce,
    backgroundColor: Ce,
    outlineColor: Ce,
    fill: Ce,
    stroke: Ce,
    borderColor: Ce,
    borderTopColor: Ce,
    borderRightColor: Ce,
    borderBottomColor: Ce,
    borderLeftColor: Ce,
    filter: pu,
    WebkitFilter: pu,
  },
  $c = (e) => VP[e];
function Uc(e, t) {
  let n = $c(e);
  return (
    n !== pu && (n = un), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
function DP({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Wd(e) {
  return (
    e === 0 ||
    (typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1)
  );
}
function Gd(e) {
  return typeof e == "number" ? 0 : Uc("", e);
}
function Lv(e, t) {
  return e[t] || e.default || e;
}
function jP(e, t, n, r) {
  const i = du(t, n);
  let o = r.from !== void 0 ? r.from : e.get();
  return (
    o === "none" && i && typeof n == "string"
      ? (o = Uc(t, n))
      : Wd(o) && typeof n == "string"
      ? (o = Gd(n))
      : !Array.isArray(n) && Wd(n) && typeof o == "string" && (n = Gd(o)),
    Array.isArray(n) ? (n[0] === null && (n[0] = o), n) : [o, n]
  );
}
const Hc =
  (e, t, n, r = {}) =>
  (i) => {
    const o = Lv(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - on(s);
    const l = jP(t, e, n, o),
      u = l[0],
      c = l[l.length - 1],
      f = du(e, u),
      d = du(e, c);
    let p = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -a,
      onUpdate: (v) => {
        t.set(v), o.onUpdate && o.onUpdate(v);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (!f || !d || RE.current || o.type === !1) return AP(p);
    if (
      (DP(o) || (p = { ...p, ...LP(e, p) }),
      p.duration && (p.duration = on(p.duration)),
      p.repeatDelay && (p.repeatDelay = on(p.repeatDelay)),
      t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate)
    ) {
      const v = kP(t, e, p);
      if (v) return v;
    }
    return gs(p);
  };
function vs(e) {
  return !!(Re(e) && e.add);
}
const FP = (e) => /^\-?\d*\.?\d+$/.test(e),
  zP = (e) => /^0[^.\s]+$/.test(e);
function Wc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Gc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Kc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Wc(this.subscriptions, t), () => Gc(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const BP = (e) => !isNaN(parseFloat(e));
class $P {
  constructor(t, n = {}) {
    (this.version = "10.8.5"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = Ee;
        this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          ne.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => ne.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = BP(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Kc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ne.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? bv(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Tr(e, t) {
  return new $P(e, t);
}
const _v = (e) => (t) => t.test(e),
  UP = { test: (e) => e === "auto", parse: (e) => e },
  Iv = [Bn, D, gt, jt, Kx, Gx, UP],
  Dr = (e) => Iv.find(_v(e)),
  HP = [...Iv, Ce, un],
  WP = (e) => HP.find(_v(e));
function GP(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Tr(n));
}
function KP(e, t) {
  const n = qs(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = aE(o[s]);
    GP(e, s, a);
  }
}
function YP(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = o.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = o[a],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        c != null &&
          (typeof c == "string" && (FP(c) || zP(c))
            ? (c = parseFloat(c))
            : !WP(c) && un.test(u) && (c = Uc(l, u)),
          e.addValue(l, Tr(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function XP(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function QP(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = XP(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function qP({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Rv(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(f),
      p = a[f];
    if (!d || p === void 0 || (c && qP(c, f))) continue;
    const v = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const x = e.getProps()[_E];
      x && (v.elapsed = window.HandoffAppearAnimations(x, f, d, ne));
    }
    d.start(Hc(f, d, p, e.shouldReduceMotion && zn.has(f) ? { type: !1 } : v));
    const y = d.animation;
    vs(l) && (l.add(f), y.then(() => l.remove(f))), u.push(y);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && KP(e, s);
      }),
    u
  );
}
function hu(e, t, n = {}) {
  const r = qs(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Rv(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return ZP(e, t, u + l, c, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
    return l().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function ZP(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(JP)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            hu(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function JP(e, t) {
  return e.sortNodePosition(t);
}
function eC(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => hu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = hu(e, t, n);
  else {
    const i = typeof t == "function" ? qs(e, t, n.custom) : t;
    r = Promise.all(Rv(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const tC = [...bc].reverse(),
  nC = bc.length;
function rC(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => eC(e, n, r)));
}
function iC(e) {
  let t = rC(e);
  const n = sC();
  let r = !0;
  const i = (l, u) => {
    const c = qs(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...p } = c;
      l = { ...l, ...p, ...d };
    }
    return l;
  };
  function o(l) {
    t = l(e);
  }
  function s(l, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      p = new Set();
    let v = {},
      y = 1 / 0;
    for (let m = 0; m < nC; m++) {
      const h = tC[m],
        g = n[h],
        w = c[h] !== void 0 ? c[h] : f[h],
        S = ki(w),
        P = h === u ? g.isActive : null;
      P === !1 && (y = m);
      let T = w === f[h] && w !== c[h] && S;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (g.protectedKeys = { ...v }),
        (!g.isActive && P === null) ||
          (!w && !g.prevProp) ||
          Gs(w) ||
          typeof w == "boolean")
      )
        continue;
      const E = oC(g.prevProp, w);
      let A = E || (h === u && g.isActive && !T && S) || (m > y && S);
      const M = Array.isArray(w) ? w : [w];
      let b = M.reduce(i, {});
      P === !1 && (b = {});
      const { prevResolvedValues: _ = {} } = g,
        j = { ..._, ...b },
        $ = (K) => {
          (A = !0), p.delete(K), (g.needsAnimating[K] = !0);
        };
      for (const K in j) {
        const he = b[K],
          be = _[K];
        v.hasOwnProperty(K) ||
          (he !== be
            ? ds(he) && ds(be)
              ? !av(he, be) || E
                ? $(K)
                : (g.protectedKeys[K] = !0)
              : he !== void 0
              ? $(K)
              : p.add(K)
            : he !== void 0 && p.has(K)
            ? $(K)
            : (g.protectedKeys[K] = !0));
      }
      (g.prevProp = w),
        (g.prevResolvedValues = b),
        g.isActive && (v = { ...v, ...b }),
        r && e.blockInitialAnimation && (A = !1),
        A &&
          !T &&
          d.push(
            ...M.map((K) => ({ animation: K, options: { type: h, ...l } }))
          );
    }
    if (p.size) {
      const m = {};
      p.forEach((h) => {
        const g = e.getBaseTarget(h);
        g !== void 0 && (m[h] = g);
      }),
        d.push({ animation: m });
    }
    let x = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (x = !1),
      (r = !1),
      x ? t(d) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((p) => {
        var v;
        return (v = p.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(c, l);
    for (const p in n) n[p].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function oC(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !av(t, e) : !1;
}
function mn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function sC() {
  return {
    animate: mn(!0),
    whileInView: mn(),
    whileHover: mn(),
    whileTap: mn(),
    whileDrag: mn(),
    whileFocus: mn(),
    exit: mn(),
  };
}
class aC extends pn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = iC(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Gs(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let lC = 0;
class uC extends pn {
  constructor() {
    super(...arguments), (this.id = lC++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const cC = { animation: { Feature: aC }, exit: { Feature: uC } },
  Kd = (e, t) => Math.abs(e - t);
function fC(e, t) {
  const n = Kd(e.x, t.x),
    r = Kd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Vv {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Ga(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = fC(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: p } = Ee;
        this.history.push({ ...d, timestamp: p });
        const { onStart: v, onMove: y } = this.handlers;
        c ||
          (v && v(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Wa(c, this.transformPagePoint)),
          ne.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          p = Ga(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Wa(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && f && f(u, p), d && d(u, p);
      }),
      !tv(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = Xs(t),
      o = Wa(i, this.transformPagePoint),
      { point: s } = o,
      { timestamp: a } = Ee;
    this.history = [{ ...s, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(t, Ga(o, this.history)),
      (this.removeListeners = rn(
        bt(window, "pointermove", this.handlePointerMove),
        bt(window, "pointerup", this.handlePointerUp),
        bt(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ln.update(this.updatePoint);
  }
}
function Wa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Yd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ga({ point: e }, t) {
  return {
    point: e,
    delta: Yd(e, Dv(t)),
    offset: Yd(e, dC(t)),
    velocity: pC(t, 0.1),
  };
}
function dC(e) {
  return e[0];
}
function Dv(e) {
  return e[e.length - 1];
}
function pC(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Dv(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > on(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = Rn(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Ue(e) {
  return e.max - e.min;
}
function mu(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Xd(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = te(t.min, t.max, e.origin)),
    (e.scale = Ue(n) / Ue(t)),
    (mu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = te(n.min, n.max, e.origin) - e.originPoint),
    (mu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ri(e, t, n, r) {
  Xd(e.x, t.x, n.x, r ? r.originX : void 0),
    Xd(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Qd(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ue(t));
}
function hC(e, t, n) {
  Qd(e.x, t.x, n.x), Qd(e.y, t.y, n.y);
}
function qd(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ue(t));
}
function ii(e, t, n) {
  qd(e.x, t.x, n.x), qd(e.y, t.y, n.y);
}
function mC(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? te(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? te(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Zd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function gC(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Zd(e.x, n, i), y: Zd(e.y, t, r) };
}
function Jd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function vC(e, t) {
  return { x: Jd(e.x, t.x), y: Jd(e.y, t.y) };
}
function yC(e, t) {
  let n = 0.5;
  const r = Ue(e),
    i = Ue(t);
  return (
    i > r
      ? (n = Mi(t.min, t.max - r, e.min))
      : r > i && (n = Mi(e.min, e.max - i, t.min)),
    In(0, 1, n)
  );
}
function wC(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const gu = 0.35;
function SC(e = gu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = gu),
    { x: ep(e, "left", "right"), y: ep(e, "top", "bottom") }
  );
}
function ep(e, t, n) {
  return { min: tp(e, t), max: tp(e, n) };
}
function tp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const np = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  oi = () => ({ x: np(), y: np() }),
  rp = () => ({ min: 0, max: 0 }),
  ae = () => ({ x: rp(), y: rp() });
function ft(e) {
  return [e("x"), e("y")];
}
function jv({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function xC({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function EC(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ka(e) {
  return e === void 0 || e === 1;
}
function vu({ scale: e, scaleX: t, scaleY: n }) {
  return !Ka(e) || !Ka(t) || !Ka(n);
}
function yn(e) {
  return vu(e) || Fv(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Fv(e) {
  return ip(e.x) || ip(e.y);
}
function ip(e) {
  return e && e !== "0%";
}
function ys(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function op(e, t, n, r, i) {
  return i !== void 0 && (e = ys(e, i, r)), ys(e, n, r) + t;
}
function yu(e, t = 0, n = 1, r, i) {
  (e.min = op(e.min, t, n, r, i)), (e.max = op(e.max, t, n, r, i));
}
function zv(e, { x: t, y: n }) {
  yu(e.x, t.translate, t.scale, t.originPoint),
    yu(e.y, n.translate, n.scale, n.originPoint);
}
function PC(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        lr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), zv(e, s)),
      r && yn(o.latestValues) && lr(e, o.latestValues));
  }
  (t.x = sp(t.x)), (t.y = sp(t.y));
}
function sp(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Bt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function ap(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = te(e.min, e.max, o);
  yu(e, t[n], t[r], s, t.scale);
}
const CC = ["x", "scaleX", "originX"],
  TC = ["y", "scaleY", "originY"];
function lr(e, t) {
  ap(e.x, t, CC), ap(e.y, t, TC);
}
function Bv(e, t) {
  return jv(EC(e.getBoundingClientRect(), t));
}
function kC(e, t, n) {
  const r = Bv(e, n),
    { scroll: i } = t;
  return i && (Bt(r.x, i.offset.x), Bt(r.y, i.offset.y)), r;
}
const AC = new WeakMap();
class OC {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ae()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (l) => {
        this.stopAnimation(), n && this.snapToCursor(Xs(l, "page").point);
      },
      o = (l, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = rv(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ft((v) => {
            let y = this.getAxisMotionValue(v).get() || 0;
            if (gt.test(y)) {
              const { projection: x } = this.visualElement;
              if (x && x.layout) {
                const m = x.layout.layoutBox[v];
                m && (y = Ue(m) * (parseFloat(y) / 100));
              }
            }
            this.originPoint[v] = y;
          }),
          d && ne.update(() => d(l, u));
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      },
      s = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: p,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: v } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = bC(v)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, v),
          this.updateAxis("y", u.point, v),
          this.visualElement.render(),
          p && p(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new Vv(
      t,
      { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && ne.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !fo(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = mC(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && sr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = gC(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = SC(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ft((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = wC(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !sr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = kC(r, i.root, this.visualElement.getTransformPagePoint());
    let s = vC(i.layout.layoutBox, o);
    if (n) {
      const a = n(xC(s));
      (this.hasMutatedConstraints = !!a), a && (s = jv(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = ft((c) => {
        if (!fo(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          p = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Hc(t, r, 0, n));
  }
  stopAnimation() {
    ft((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    ft((n) => {
      const { drag: r } = this.getProps();
      if (!fo(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - te(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!sr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ft((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        i[s] = yC({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      ft((s) => {
        if (!fo(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(te(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    AC.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = bt(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        sr(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = kt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (ft((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = gu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function fo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function bC(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class MC extends pn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ge),
      (this.removeListeners = ge),
      (this.controls = new OC(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ge);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const lp = (e) => (t, n) => {
  e && ne.update(() => e(t, n));
};
class NC extends pn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ge);
  }
  onPointerDown(t) {
    this.session = new Vv(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: lp(t),
      onStart: lp(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && ne.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = bt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function LC() {
  const e = C.useContext(Oc);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = C.useId();
  return C.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
function up(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const jr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = up(e, t.target.x),
        r = up(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  $v = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function _C(e) {
  const t = $v.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function wu(e, t, n = 1) {
  const [r, i] = _C(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  return o ? o.trim() : su(i) ? wu(i, t, n + 1) : i;
}
function IC(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!su(o)) return;
      const s = wu(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!su(o)) continue;
    const s = wu(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const cp = "_$css",
  RC = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = e.includes("var("),
        o = [];
      i && (e = e.replace($v, (p) => (o.push(p), cp)));
      const s = un.parse(e);
      if (s.length > 5) return r;
      const a = un.createTransformer(e),
        l = typeof s[0] != "number" ? 1 : 0,
        u = n.x.scale * t.x,
        c = n.y.scale * t.y;
      (s[0 + l] /= u), (s[1 + l] /= c);
      const f = te(u, c, 0.5);
      typeof s[2 + l] == "number" && (s[2 + l] /= f),
        typeof s[3 + l] == "number" && (s[3 + l] /= f);
      let d = a(s);
      if (i) {
        let p = 0;
        d = d.replace(cp, () => {
          const v = o[p];
          return p++, v;
        });
      }
      return d;
    },
  };
class VC extends W.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    zx(DC),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ei.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              ne.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Uv(e) {
  const [t, n] = LC(),
    r = C.useContext(Bg);
  return W.createElement(VC, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: C.useContext($g),
    isPresent: t,
    safeToRemove: n,
  });
}
const DC = {
    borderRadius: {
      ...jr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: jr,
    borderTopRightRadius: jr,
    borderBottomLeftRadius: jr,
    borderBottomRightRadius: jr,
    boxShadow: RC,
  },
  Hv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  jC = Hv.length,
  fp = (e) => (typeof e == "string" ? parseFloat(e) : e),
  dp = (e) => typeof e == "number" || D.test(e);
function FC(e, t, n, r, i, o) {
  i
    ? ((e.opacity = te(0, n.opacity !== void 0 ? n.opacity : 1, zC(r))),
      (e.opacityExit = te(t.opacity !== void 0 ? t.opacity : 1, 0, BC(r))))
    : o &&
      (e.opacity = te(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < jC; s++) {
    const a = `border${Hv[s]}Radius`;
    let l = pp(t, a),
      u = pp(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || dp(l) === dp(u)
        ? ((e[a] = Math.max(te(fp(l), fp(u), r), 0)),
          (gt.test(u) || gt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = te(t.rotate || 0, n.rotate || 0, r));
}
function pp(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const zC = Wv(0, 0.5, zc),
  BC = Wv(0.5, 0.95, ge);
function Wv(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Mi(e, t, r)));
}
function hp(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ke(e, t) {
  hp(e.x, t.x), hp(e.y, t.y);
}
function mp(e, t, n, r, i) {
  return (
    (e -= t), (e = ys(e, 1 / n, r)), i !== void 0 && (e = ys(e, 1 / i, r)), e
  );
}
function $C(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (gt.test(t) &&
      ((t = parseFloat(t)), (t = te(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = te(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = mp(e.min, t, n, a, i)),
    (e.max = mp(e.max, t, n, a, i));
}
function gp(e, t, [n, r, i], o, s) {
  $C(e, t[n], t[r], t[i], t.scale, o, s);
}
const UC = ["x", "scaleX", "originX"],
  HC = ["y", "scaleY", "originY"];
function vp(e, t, n, r) {
  gp(e.x, t, UC, n ? n.x : void 0, r ? r.x : void 0),
    gp(e.y, t, HC, n ? n.y : void 0, r ? r.y : void 0);
}
function yp(e) {
  return e.translate === 0 && e.scale === 1;
}
function Gv(e) {
  return yp(e.x) && yp(e.y);
}
function Su(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function wp(e) {
  return Ue(e.x) / Ue(e.y);
}
class WC {
  constructor() {
    this.members = [];
  }
  add(t) {
    Wc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Gc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Sp(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const GC = (e, t) => e.depth - t.depth;
class KC {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Wc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Gc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(GC),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function YC(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (ln.read(r), e(o - t));
    };
  return ne.read(r, !0), () => ln.read(r);
}
function XC(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function QC(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function qC(e, t, n) {
  const r = Re(e) ? e : Tr(e);
  return r.start(Hc("", r, t, n)), r.animation;
}
const xp = ["", "X", "Y", "Z"],
  Ep = 1e3;
let ZC = 0;
const wn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Kv({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s, a = {}, l = t == null ? void 0 : t()) {
      (this.id = ZC++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (wn.totalNodes =
            wn.resolvedTargetDeltas =
            wn.recalculatedProjection =
              0),
            this.nodes.forEach(tT),
            this.nodes.forEach(oT),
            this.nodes.forEach(sT),
            this.nodes.forEach(nT),
            XC(wn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.elementId = s),
        (this.latestValues = a),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0),
        s && this.root.registerPotentialNode(s, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new KC());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Kc()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    registerPotentialNode(s, a) {
      this.potentialNodes.set(s, a);
    }
    mount(s, a = !1) {
      if (this.instance) return;
      (this.isSVG = QC(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.elementId && this.root.potentialNodes.delete(this.elementId),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = YC(d, 250)),
            ei.hasAnimatedSinceResize &&
              ((ei.hasAnimatedSinceResize = !1), this.nodes.forEach(Cp));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: p,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y =
                  this.options.transition || c.getDefaultTransition() || fT,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: m } =
                  c.getProps(),
                h = !this.targetLayout || !Su(this.targetLayout, v) || p,
                g = !d && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g);
                const w = { ...Lv(y, "layout"), onPlay: x, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                !d && this.animationProgress === 0 && Cp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        ln.preRender(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(aT),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Pp);
        return;
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size &&
          (this.potentialNodes.forEach(dT), this.potentialNodes.clear()),
        this.nodes.forEach(iT),
        this.nodes.forEach(JC),
        this.nodes.forEach(eT),
        this.clearAllSnapshots(),
        Da.update(),
        Da.preRender(),
        Da.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(rT), this.sharedNodes.forEach(lT);
    }
    scheduleUpdateProjection() {
      ne.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      ne.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ae()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Gv(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || yn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        pT(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return ae();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Bt(a.x, l.offset.x), Bt(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = ae();
      Ke(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Ke(a, s);
            const { scroll: d } = this.root;
            d && (Bt(a.x, -d.offset.x), Bt(a.y, -d.offset.y));
          }
          Bt(a.x, c.offset.x), Bt(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = ae();
      Ke(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          lr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          yn(c.latestValues) && lr(l, c.latestValues);
      }
      return yn(this.latestValues) && lr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ae();
      Ke(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !yn(u.latestValues)) continue;
        vu(u.latestValues) && u.updateSnapshot();
        const c = ae(),
          f = u.measurePageBox();
        Ke(c, f),
          vp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return yn(this.latestValues) && vp(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Ee.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout
            ? ((this.relativeParent = p),
              (this.relativeTarget = ae()),
              (this.relativeTargetOrigin = ae()),
              ii(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              Ke(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ae()), (this.targetWithTransforms = ae())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.relativeParent.resolvedRelativeTargetAt !==
                  Ee.timestamp && this.relativeParent.resolveTargetDelta(!0),
                hC(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ke(this.target, this.layout.layoutBox),
                zv(this.target, this.targetDelta))
              : Ke(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target
              ? ((this.relativeParent = p),
                (this.relativeTarget = ae()),
                (this.relativeTargetOrigin = ae()),
                ii(this.relativeTargetOrigin, this.target, p.target),
                Ke(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          wn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          vu(this.parent.latestValues) ||
          Fv(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Ee.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Ke(this.layoutCorrected, this.layout.layoutBox),
        PC(this.layoutCorrected, this.treeScale, this.path, l);
      const { target: d } = a;
      if (!d) return;
      this.projectionDelta ||
        ((this.projectionDelta = oi()),
        (this.projectionDeltaWithTransform = oi()));
      const p = this.treeScale.x,
        v = this.treeScale.y,
        y = this.projectionTransform;
      ri(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.projectionTransform = Sp(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y ||
          this.treeScale.x !== p ||
          this.treeScale.y !== v) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", d)),
        wn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = oi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = ae(),
        p = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = p !== v,
        x = this.getStack(),
        m = !x || x.members.length <= 1,
        h = !!(y && !m && this.options.crossfade === !0 && !this.path.some(cT));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        Tp(f.x, s.x, S),
          Tp(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ii(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            uT(this.relativeTarget, this.relativeTargetOrigin, d, S),
            g && Su(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = ae()),
            Ke(g, this.relativeTarget)),
          y &&
            ((this.animationValues = c), FC(c, u, this.latestValues, S, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (ln.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ne.update(() => {
          (ei.hasAnimatedSinceResize = !0),
            (this.currentAnimation = qC(0, Ep, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Ep),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Yv(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ae();
          const f = Ue(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = Ue(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        Ke(a, l),
          lr(a, c),
          ri(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new WC()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < xp.length; c++) {
        const f = "rotate" + xp[c];
        l[f] && ((u[f] = l[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var a, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = bo(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = bo(s.pointerEvents) || "")),
          this.hasProjected &&
            !yn(this.latestValues) &&
            ((y.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Sp(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: p, y: v } = this.projectionDelta;
      (u.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const y in cs) {
        if (d[y] === void 0) continue;
        const { correct: x, applyTo: m } = cs[y],
          h = u.transform === "none" ? d[y] : x(d[y], f);
        if (m) {
          const g = m.length;
          for (let w = 0; w < g; w++) u[m[w]] = h;
        } else u[y] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? bo(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Pp),
        this.root.sharedNodes.clear();
    }
  };
}
function JC(e) {
  e.updateLayout();
}
function eT(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? ft((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            p = Ue(d);
          (d.min = r[f].min), (d.max = d.min + p);
        })
      : Yv(o, n.layoutBox, r) &&
        ft((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            p = Ue(r[f]);
          d.max = d.min + p;
        });
    const a = oi();
    ri(a, r, n.layoutBox);
    const l = oi();
    s ? ri(l, e.applyTransform(i, !0), n.measuredBox) : ri(l, r, n.layoutBox);
    const u = !Gv(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: p } = f;
        if (d && p) {
          const v = ae();
          ii(v, n.layoutBox, d.layoutBox);
          const y = ae();
          ii(y, r, p.layoutBox),
            Su(v, y) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function tT(e) {
  wn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function nT(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function rT(e) {
  e.clearSnapshot();
}
function Pp(e) {
  e.clearMeasurements();
}
function iT(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Cp(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function oT(e) {
  e.resolveTargetDelta();
}
function sT(e) {
  e.calcProjection();
}
function aT(e) {
  e.resetRotation();
}
function lT(e) {
  e.removeLeadSnapshot();
}
function Tp(e, t, n) {
  (e.translate = te(t.translate, 0, n)),
    (e.scale = te(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function kp(e, t, n, r) {
  (e.min = te(t.min, n.min, r)), (e.max = te(t.max, n.max, r));
}
function uT(e, t, n, r) {
  kp(e.x, t.x, n.x, r), kp(e.y, t.y, n.y, r);
}
function cT(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const fT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function dT(e, t) {
  let n = e.root;
  for (let o = e.path.length - 1; o >= 0; o--)
    if (e.path[o].instance) {
      n = e.path[o];
      break;
    }
  const i = (n && n !== e.root ? n.instance : document).querySelector(
    `[data-projection-id="${t}"]`
  );
  i && e.mount(i, !0);
}
function Ap(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function pT(e) {
  Ap(e.x), Ap(e.y);
}
function Yv(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !mu(wp(t), wp(n), 0.2))
  );
}
const hT = Kv({
    attachResizeListener: (e, t) => kt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ya = { current: void 0 },
  Xv = Kv({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ya.current) {
        const e = new hT(0, {});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ya.current = e);
      }
      return Ya.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  mT = {
    pan: { Feature: NC },
    drag: { Feature: MC, ProjectionNode: Xv, MeasureLayout: Uv },
  },
  gT = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
  Qv = (e) => gT.has(e),
  vT = (e) => Object.keys(e).some(Qv),
  Op = (e) => e === Bn || e === D,
  bp = (e, t) => parseFloat(e.split(", ")[t]),
  Mp =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return bp(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? bp(o[1], e) : 0;
      }
    },
  yT = new Set(["x", "y", "z"]),
  wT = Ys.filter((e) => !yT.has(e));
function ST(e) {
  const t = [];
  return (
    wT.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Np = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Mp(4, 13),
    y: Mp(5, 14),
  },
  xT = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        a[u] = Np[u](r, o);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(a[u]), (e[u] = Np[u](l, o));
      }),
      e
    );
  },
  ET = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(Qv);
    let o = [],
      s = !1;
    const a = [];
    if (
      (i.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          f = Dr(c);
        const d = t[l];
        let p;
        if (ds(d)) {
          const v = d.length,
            y = d[0] === null ? 1 : 0;
          (c = d[y]), (f = Dr(c));
          for (let x = y; x < v; x++) p ? ps(Dr(d[x]) === p) : (p = Dr(d[x]));
        } else p = Dr(d);
        if (f !== p)
          if (Op(f) && Op(p)) {
            const v = u.get();
            typeof v == "string" && u.set(parseFloat(v)),
              typeof d == "string"
                ? (t[l] = parseFloat(d))
                : Array.isArray(d) && p === D && (t[l] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            p != null &&
            p.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(p.transform(c))
                : (t[l] = f.transform(d))
              : (s || ((o = ST(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(d));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = xT(t, e, a);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Ws && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function PT(e, t, n, r) {
  return vT(t) ? ET(e, t, n, r) : { target: t, transitionEnd: r };
}
const CT = (e, t, n, r) => {
    const i = IC(e, t, r);
    return (t = i.target), (r = i.transitionEnd), PT(e, t, n, r);
  },
  xu = { current: null },
  qv = { current: !1 };
function TT() {
  if (((qv.current = !0), !!Ws))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (xu.current = e.matches);
      e.addListener(t), t();
    } else xu.current = !1;
}
function kT(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Re(o)) e.addValue(i, o), vs(r) && r.add(i);
    else if (Re(s)) e.addValue(i, Tr(o, { owner: e })), vs(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        !a.hasAnimated && a.set(o);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, Tr(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Lp = new WeakMap(),
  Zv = Object.keys(Ai),
  AT = Zv.length,
  _p = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  OT = Mc.length;
class bT {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => ne.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Ks(n)),
      (this.isVariantNode = Fg(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      a[f] !== void 0 && Re(d) && (d.set(a[f], !1), vs(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Lp.set(t, this),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      qv.current || TT(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : xu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Lp.delete(this.current),
      this.projection && this.projection.unmount(),
      ln.update(this.notifyUpdate),
      ln.render(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = zn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && ne.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o, s) {
    let a, l;
    for (let u = 0; u < AT; u++) {
      const c = Zv[u],
        {
          isEnabled: f,
          Feature: d,
          ProjectionNode: p,
          MeasureLayout: v,
        } = Ai[c];
      p && (a = p),
        f(n) &&
          (!this.features[c] && d && (this.features[c] = new d(this)),
          v && (l = v));
    }
    if (!this.projection && a) {
      this.projection = new a(
        o,
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: u,
        layout: c,
        drag: f,
        dragConstraints: d,
        layoutScroll: p,
        layoutRoot: v,
      } = n;
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!f || (d && sr(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: s,
        layoutScroll: p,
        layoutRoot: v,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted
        ? n.update(this.props, this.prevProps)
        : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ae();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < _p.length; r++) {
      const i = _p[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = kT(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < OT; r++) {
      const i = Mc[r],
        o = this.props[i];
      (ki(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Tr(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = jc(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Re(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Kc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Jv extends bT {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o
  ) {
    let s = QP(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      YP(this, r, s);
      const a = CT(this, r, s, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function MT(e) {
  return window.getComputedStyle(e);
}
class NT extends Jv {
  readValueFromInstance(t, n) {
    if (zn.has(n)) {
      const r = $c(n);
      return (r && r.default) || 0;
    } else {
      const r = MT(t),
        i = (Wg(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Bv(t, n);
  }
  build(t, n, r, i) {
    Lc(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Dc(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Re(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Qg(t, n, r, i);
  }
}
class LT extends Jv {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (zn.has(n)) {
      const r = $c(n);
      return (r && r.default) || 0;
    }
    return (n = qg.has(n) ? n : Vc(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ae();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Jg(t, n);
  }
  build(t, n, r, i) {
    Ic(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Zg(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Rc(t.tagName)), super.mount(t);
  }
}
const _T = (e, t) =>
    Nc(e)
      ? new LT(t, { enableHardwareAcceleration: !1 })
      : new NT(t, { enableHardwareAcceleration: !0 }),
  IT = { layout: { ProjectionNode: Xv, MeasureLayout: Uv } },
  RT = { ...cC, ...bE, ...mT, ...IT },
  Ip = jx((e, t) => dE(e, t, RT, _T));
function VT() {
  return k("section", {
    className: "hero-wrapper",
    id: "hero",
    children: R("div", {
      className: "flexCenter paddings innerWidth hero-container",
      children: [
        R("div", {
          className: " flexColStart hero-left",
          children: [
            R("div", {
              className: "hero-title",
              children: [
                k("div", { className: "orange-circle" }),
                R(Ip.h1, {
                  initial: { y: "3rem", opacity: 0 },
                  animate: { y: 0, opacity: "1" },
                  transition: { duration: 2, type: "spring" },
                  children: [
                    "Discover ",
                    k("br", {}),
                    "Most Suitable ",
                    k("br", {}),
                    "Property",
                  ],
                }),
              ],
            }),
            k("div", {
              className: "hero-des",
              children: R("p", {
                className: "secondaryText",
                children: [
                  "Find a variety of properties that suit you very easily",
                  k("br", {}),
                  " Forget all difficulties in finding a residence for you",
                ],
              }),
            }),
            R("div", {
              className: "search-bar flexCenter",
              children: [
                k(ax, { color: "var(--blue)", size: 25 }),
                k("input", { type: "text" }),
                k("button", { className: "button", children: "Search" }),
              ],
            }),
            R("div", {
              className: "flexCenter stats",
              children: [
                R("div", {
                  className: "stat flexColCenter",
                  children: [
                    R("span", {
                      children: [
                        k(Va, { start: 8800, end: 9e3, duration: 4 }),
                        " ",
                        k("span", { children: "+" }),
                      ],
                    }),
                    k("span", {
                      className: "secondaryText",
                      children: "Premium Products",
                    }),
                  ],
                }),
                R("div", {
                  className: "stat flexColCenter",
                  children: [
                    R("span", {
                      children: [
                        k(Va, { start: 1950, end: 2e3, duration: 4 }),
                        " ",
                        k("span", { children: "+" }),
                      ],
                    }),
                    k("span", {
                      className: "secondaryText",
                      children: "Happy Customer",
                    }),
                  ],
                }),
                R("div", {
                  className: "stat flexColCenter",
                  children: [
                    R("span", {
                      children: [
                        k(Va, { end: 28 }),
                        " ",
                        k("span", { children: "+" }),
                      ],
                    }),
                    k("span", {
                      className: "secondaryText",
                      children: "Awards Winning",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        k("div", {
          className: "flexCenter hero-right",
          children: k(Ip.div, {
            className: "image-container",
            initial: { x: "7rem", opacity: 0 },
            animate: { x: 0, opacity: "1" },
            transition: { duration: 2, type: "spring" },
            children: k("img", { src: "./hero-image.png", alt: "hero" }),
          }),
        }),
      ],
    }),
  });
}
function DT() {
  return k("section", {
    className: "c-wrapper",
    children: R("div", {
      className: "paddings innerWidth flexCenter c-container",
      children: [
        k("img", { src: "./prologis.png", alt: "logo1" }),
        k("img", { src: "./tower.png", alt: "logo2" }),
        k("img", { src: "./equinix.png", alt: "logo3" }),
        k("img", { src: "./realty.png", alt: "logo4" }),
      ],
    }),
  });
}
function Rp(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Yc(e = {}, t = {}) {
  Object.keys(t).forEach((n) => {
    typeof e[n] > "u"
      ? (e[n] = t[n])
      : Rp(t[n]) && Rp(e[n]) && Object.keys(t[n]).length > 0 && Yc(e[n], t[n]);
  });
}
const ey = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function $n() {
  const e = typeof document < "u" ? document : {};
  return Yc(e, ey), e;
}
const jT = {
  document: ey,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Ge() {
  const e = typeof window < "u" ? window : {};
  return Yc(e, jT), e;
}
function FT(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Eu(e, t = 0) {
  return setTimeout(e, t);
}
function Ni() {
  return Date.now();
}
function zT(e) {
  const t = Ge();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function BT(e, t = "x") {
  const n = Ge();
  let r, i, o;
  const s = zT(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = s.transform || s.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (o = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((o =
          s.MozTransform ||
          s.OTransform ||
          s.MsTransform ||
          s.msTransform ||
          s.transform ||
          s
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = o.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = o.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = o.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function po(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function $T(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function je(...e) {
  const t = Object(e[0]),
    n = ["__proto__", "constructor", "prototype"];
  for (let r = 1; r < e.length; r += 1) {
    const i = e[r];
    if (i != null && !$T(i)) {
      const o = Object.keys(Object(i)).filter((s) => n.indexOf(s) < 0);
      for (let s = 0, a = o.length; s < a; s += 1) {
        const l = o[s],
          u = Object.getOwnPropertyDescriptor(i, l);
        u !== void 0 &&
          u.enumerable &&
          (po(t[l]) && po(i[l])
            ? i[l].__swiper__
              ? (t[l] = i[l])
              : je(t[l], i[l])
            : !po(t[l]) && po(i[l])
            ? ((t[l] = {}), i[l].__swiper__ ? (t[l] = i[l]) : je(t[l], i[l]))
            : (t[l] = i[l]));
      }
    }
  }
  return t;
}
function ho(e, t, n) {
  e.style.setProperty(t, n);
}
function ty({ swiper: e, targetPosition: t, side: n }) {
  const r = Ge(),
    i = -e.translate;
  let o = null,
    s;
  const a = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const l = t > i ? "next" : "prev",
    u = (f, d) => (l === "next" && f >= d) || (l === "prev" && f <= d),
    c = () => {
      (s = new Date().getTime()), o === null && (o = s);
      const f = Math.max(Math.min((s - o) / a, 1), 0),
        d = 0.5 - Math.cos(f * Math.PI) / 2;
      let p = i + d * (t - i);
      if ((u(p, t) && (p = t), e.wrapperEl.scrollTo({ [n]: p }), u(p, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [n]: p });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(c);
    };
  c();
}
function At(e, t = "") {
  return [...e.children].filter((n) => n.matches(t));
}
function UT(e, t = []) {
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
}
function HT(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function WT(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Gt(e, t) {
  return Ge().getComputedStyle(e, null).getPropertyValue(t);
}
function Vp(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function GT(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function Dp(e, t, n) {
  const r = Ge();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
        )
    : e.offsetWidth;
}
let Xa;
function KT() {
  const e = Ge(),
    t = $n();
  return {
    smoothScroll:
      t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function ny() {
  return Xa || (Xa = KT()), Xa;
}
let Qa;
function YT({ userAgent: e } = {}) {
  const t = ny(),
    n = Ge(),
    r = n.navigator.platform,
    i = e || n.navigator.userAgent,
    o = { ios: !1, android: !1 },
    s = n.screen.width,
    a = n.screen.height,
    l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = i.match(/(iPad).*OS\s([\d_]+)/);
  const c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    d = r === "Win32";
  let p = r === "MacIntel";
  const v = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !u &&
      p &&
      t.touch &&
      v.indexOf(`${s}x${a}`) >= 0 &&
      ((u = i.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (p = !1)),
    l && !d && ((o.os = "android"), (o.android = !0)),
    (u || f || c) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function XT(e = {}) {
  return Qa || (Qa = YT(e)), Qa;
}
let qa;
function QT() {
  const e = Ge();
  let t = !1;
  function n() {
    const r = e.navigator.userAgent.toLowerCase();
    return (
      r.indexOf("safari") >= 0 &&
      r.indexOf("chrome") < 0 &&
      r.indexOf("android") < 0
    );
  }
  if (n()) {
    const r = String(e.navigator.userAgent);
    if (r.includes("Version/")) {
      const [i, o] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((s) => Number(s));
      t = i < 16 || (i === 16 && o < 2);
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function qT() {
  return qa || (qa = QT()), qa;
}
function ZT({ swiper: e, on: t, emit: n }) {
  const r = Ge();
  let i = null,
    o = null;
  const s = () => {
      !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((i = new ResizeObserver((c) => {
          o = r.requestAnimationFrame(() => {
            const { width: f, height: d } = e;
            let p = f,
              v = d;
            c.forEach(({ contentBoxSize: y, contentRect: x, target: m }) => {
              (m && m !== e.el) ||
                ((p = x ? x.width : (y[0] || y).inlineSize),
                (v = x ? x.height : (y[0] || y).blockSize));
            }),
              (p !== f || v !== d) && s();
          });
        })),
        i.observe(e.el));
    },
    l = () => {
      o && r.cancelAnimationFrame(o),
        i && i.unobserve && e.el && (i.unobserve(e.el), (i = null));
    },
    u = () => {
      !e || e.destroyed || !e.initialized || n("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      a();
      return;
    }
    r.addEventListener("resize", s), r.addEventListener("orientationchange", u);
  }),
    t("destroy", () => {
      l(),
        r.removeEventListener("resize", s),
        r.removeEventListener("orientationchange", u);
    });
}
function JT({ swiper: e, extendParams: t, on: n, emit: r }) {
  const i = [],
    o = Ge(),
    s = (u, c = {}) => {
      const f = o.MutationObserver || o.WebkitMutationObserver,
        d = new f((p) => {
          if (e.__preventObserver__) return;
          if (p.length === 1) {
            r("observerUpdate", p[0]);
            return;
          }
          const v = function () {
            r("observerUpdate", p[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(v)
            : o.setTimeout(v, 0);
        });
      d.observe(u, {
        attributes: typeof c.attributes > "u" ? !0 : c.attributes,
        childList: typeof c.childList > "u" ? !0 : c.childList,
        characterData: typeof c.characterData > "u" ? !0 : c.characterData,
      }),
        i.push(d);
    },
    a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const u = GT(e.el);
          for (let c = 0; c < u.length; c += 1) s(u[c]);
        }
        s(e.el, { childList: e.params.observeSlideChildren }),
          s(e.wrapperEl, { attributes: !1 });
      }
    },
    l = () => {
      i.forEach((u) => {
        u.disconnect();
      }),
        i.splice(0, i.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    n("init", a),
    n("destroy", l);
}
const ek = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((o) => {
        r.eventsListeners[o] || (r.eventsListeners[o] = []),
          r.eventsListeners[o][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i(...o) {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, o);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, o) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(o, 1);
              });
        }),
      n
    );
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let n, r, i;
    return (
      typeof e[0] == "string" || Array.isArray(e[0])
        ? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
        : ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
      r.unshift(i),
      (Array.isArray(n) ? n : n.split(" ")).forEach((s) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((a) => {
            a.apply(i, [s, ...r]);
          }),
          t.eventsListeners &&
            t.eventsListeners[s] &&
            t.eventsListeners[s].forEach((a) => {
              a.apply(i, r);
            });
      }),
      t
    );
  },
};
function tk() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Gt(r, "padding-left") || 0, 10) -
        parseInt(Gt(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Gt(r, "padding-top") || 0, 10) -
        parseInt(Gt(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function nk() {
  const e = this;
  function t(b) {
    return e.isHorizontal()
      ? b
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[b];
  }
  function n(b, _) {
    return parseFloat(b.getPropertyValue(t(_)) || 0);
  }
  const r = e.params,
    { wrapperEl: i, slidesEl: o, size: s, rtlTranslate: a, wrongRTL: l } = e,
    u = e.virtual && r.virtual.enabled,
    c = u ? e.virtual.slides.length : e.slides.length,
    f = At(o, `.${e.params.slideClass}, swiper-slide`),
    d = u ? e.virtual.slides.length : f.length;
  let p = [];
  const v = [],
    y = [];
  let x = r.slidesOffsetBefore;
  typeof x == "function" && (x = r.slidesOffsetBefore.call(e));
  let m = r.slidesOffsetAfter;
  typeof m == "function" && (m = r.slidesOffsetAfter.call(e));
  const h = e.snapGrid.length,
    g = e.slidesGrid.length;
  let w = r.spaceBetween,
    S = -x,
    P = 0,
    T = 0;
  if (typeof s > "u") return;
  typeof w == "string" &&
    w.indexOf("%") >= 0 &&
    (w = (parseFloat(w.replace("%", "")) / 100) * s),
    (e.virtualSize = -w),
    f.forEach((b) => {
      a ? (b.style.marginLeft = "") : (b.style.marginRight = ""),
        (b.style.marginBottom = ""),
        (b.style.marginTop = "");
    }),
    r.centeredSlides &&
      r.cssMode &&
      (ho(i, "--swiper-centered-offset-before", ""),
      ho(i, "--swiper-centered-offset-after", ""));
  const E = r.grid && r.grid.rows > 1 && e.grid;
  E && e.grid.initSlides(d);
  let A;
  const M =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (b) => typeof r.breakpoints[b].slidesPerView < "u"
    ).length > 0;
  for (let b = 0; b < d; b += 1) {
    A = 0;
    let _;
    if (
      (f[b] && (_ = f[b]),
      E && e.grid.updateSlide(b, _, d, t),
      !(f[b] && Gt(_, "display") === "none"))
    ) {
      if (r.slidesPerView === "auto") {
        M && (f[b].style[t("width")] = "");
        const j = getComputedStyle(_),
          $ = _.style.transform,
          K = _.style.webkitTransform;
        if (
          ($ && (_.style.transform = "none"),
          K && (_.style.webkitTransform = "none"),
          r.roundLengths)
        )
          A = e.isHorizontal() ? Dp(_, "width", !0) : Dp(_, "height", !0);
        else {
          const he = n(j, "width"),
            be = n(j, "padding-left"),
            N = n(j, "padding-right"),
            I = n(j, "margin-left"),
            V = n(j, "margin-right"),
            F = j.getPropertyValue("box-sizing");
          if (F && F === "border-box") A = he + I + V;
          else {
            const { clientWidth: X, offsetWidth: yt } = _;
            A = he + be + N + I + V + (yt - X);
          }
        }
        $ && (_.style.transform = $),
          K && (_.style.webkitTransform = K),
          r.roundLengths && (A = Math.floor(A));
      } else
        (A = (s - (r.slidesPerView - 1) * w) / r.slidesPerView),
          r.roundLengths && (A = Math.floor(A)),
          f[b] && (f[b].style[t("width")] = `${A}px`);
      f[b] && (f[b].swiperSlideSize = A),
        y.push(A),
        r.centeredSlides
          ? ((S = S + A / 2 + P / 2 + w),
            P === 0 && b !== 0 && (S = S - s / 2 - w),
            b === 0 && (S = S - s / 2 - w),
            Math.abs(S) < 1 / 1e3 && (S = 0),
            r.roundLengths && (S = Math.floor(S)),
            T % r.slidesPerGroup === 0 && p.push(S),
            v.push(S))
          : (r.roundLengths && (S = Math.floor(S)),
            (T - Math.min(e.params.slidesPerGroupSkip, T)) %
              e.params.slidesPerGroup ===
              0 && p.push(S),
            v.push(S),
            (S = S + A + w)),
        (e.virtualSize += A + w),
        (P = A),
        (T += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + m),
    a &&
      l &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      (i.style.width = `${e.virtualSize + r.spaceBetween}px`),
    r.setWrapperSize &&
      (i.style[t("width")] = `${e.virtualSize + r.spaceBetween}px`),
    E && e.grid.updateWrapperSize(A, p, t),
    !r.centeredSlides)
  ) {
    const b = [];
    for (let _ = 0; _ < p.length; _ += 1) {
      let j = p[_];
      r.roundLengths && (j = Math.floor(j)),
        p[_] <= e.virtualSize - s && b.push(j);
    }
    (p = b),
      Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(e.virtualSize - s);
  }
  if (u && r.loop) {
    const b = y[0] + w;
    if (r.slidesPerGroup > 1) {
      const _ = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup
        ),
        j = b * r.slidesPerGroup;
      for (let $ = 0; $ < _; $ += 1) p.push(p[p.length - 1] + j);
    }
    for (let _ = 0; _ < e.virtual.slidesBefore + e.virtual.slidesAfter; _ += 1)
      r.slidesPerGroup === 1 && p.push(p[p.length - 1] + b),
        v.push(v[v.length - 1] + b),
        (e.virtualSize += b);
  }
  if ((p.length === 0 && (p = [0]), r.spaceBetween !== 0)) {
    const b = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
    f.filter((_, j) =>
      !r.cssMode || r.loop ? !0 : j !== f.length - 1
    ).forEach((_) => {
      _.style[b] = `${w}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let b = 0;
    y.forEach((j) => {
      b += j + (r.spaceBetween ? r.spaceBetween : 0);
    }),
      (b -= r.spaceBetween);
    const _ = b - s;
    p = p.map((j) => (j < 0 ? -x : j > _ ? _ + m : j));
  }
  if (r.centerInsufficientSlides) {
    let b = 0;
    if (
      (y.forEach((_) => {
        b += _ + (r.spaceBetween ? r.spaceBetween : 0);
      }),
      (b -= r.spaceBetween),
      b < s)
    ) {
      const _ = (s - b) / 2;
      p.forEach((j, $) => {
        p[$] = j - _;
      }),
        v.forEach((j, $) => {
          v[$] = j + _;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: f,
      snapGrid: p,
      slidesGrid: v,
      slidesSizesGrid: y,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    ho(i, "--swiper-centered-offset-before", `${-p[0]}px`),
      ho(
        i,
        "--swiper-centered-offset-after",
        `${e.size / 2 - y[y.length - 1] / 2}px`
      );
    const b = -e.snapGrid[0],
      _ = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((j) => j + b)),
      (e.slidesGrid = e.slidesGrid.map((j) => j + _));
  }
  if (
    (d !== c && e.emit("slidesLengthChange"),
    p.length !== h &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    v.length !== g && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !u && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const b = `${r.containerModifierClass}backface-hidden`,
      _ = e.el.classList.contains(b);
    d <= r.maxBackfaceHiddenSlides
      ? _ || e.el.classList.add(b)
      : _ && e.el.classList.remove(b);
  }
}
function rk(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    o;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const s = (a) => (r ? t.getSlideIndexByData(a) : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
        const a = t.activeIndex + o;
        if (a > t.slides.length && !r) break;
        n.push(s(a));
      }
  else n.push(s(t.activeIndex));
  for (o = 0; o < n.length; o += 1)
    if (typeof n[o] < "u") {
      const a = n[o].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function ik() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n;
}
function ok(e = (this && this.translate) || 0) {
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: o } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e),
    r.forEach((a) => {
      a.classList.remove(n.slideVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  for (let a = 0; a < r.length; a += 1) {
    const l = r[a];
    let u = l.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
    const c =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (l.swiperSlideSize + n.spaceBetween),
      f =
        (s - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (l.swiperSlideSize + n.spaceBetween),
      d = -(s - u),
      p = d + t.slidesSizesGrid[a];
    ((d >= 0 && d < t.size - 1) ||
      (p > 1 && p <= t.size) ||
      (d <= 0 && p >= t.size)) &&
      (t.visibleSlides.push(l),
      t.visibleSlidesIndexes.push(a),
      r[a].classList.add(n.slideVisibleClass)),
      (l.progress = i ? -c : c),
      (l.originalProgress = i ? -f : f);
  }
}
function sk(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: o, isEnd: s, progressLoop: a } = t;
  const l = o,
    u = s;
  if (r === 0) (i = 0), (o = !0), (s = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const c = Math.abs(e - t.minTranslate()) < 1,
      f = Math.abs(e - t.maxTranslate()) < 1;
    (o = c || i <= 0), (s = f || i >= 1), c && (i = 0), f && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      f = t.getSlideIndexByData(t.slides.length - 1),
      d = t.slidesGrid[c],
      p = t.slidesGrid[f],
      v = t.slidesGrid[t.slidesGrid.length - 1],
      y = Math.abs(e);
    y >= d ? (a = (y - d) / v) : (a = (y + v - p) / v), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: o, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    o && !l && t.emit("reachBeginning toEdge"),
    s && !u && t.emit("reachEnd toEdge"),
    ((l && !o) || (u && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function ak() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    o = e.virtual && n.virtual.enabled,
    s = (l) => At(r, `.${n.slideClass}${l}, swiper-slide${l}`)[0];
  t.forEach((l) => {
    l.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let a;
  if (o)
    if (n.loop) {
      let l = i - e.virtual.slidesBefore;
      l < 0 && (l = e.virtual.slides.length + l),
        l >= e.virtual.slides.length && (l -= e.virtual.slides.length),
        (a = s(`[data-swiper-slide-index="${l}"]`));
    } else a = s(`[data-swiper-slide-index="${i}"]`);
  else a = t[i];
  if (a) {
    a.classList.add(n.slideActiveClass);
    let l = WT(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !l && (l = t[0]), l && l.classList.add(n.slideNextClass);
    let u = HT(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !u === 0 && (u = t[t.length - 1]),
      u && u.classList.add(n.slidePrevClass);
  }
  e.emitSlidesClasses();
}
function lk(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let o = 0; o < t.length; o += 1)
    typeof t[o + 1] < "u"
      ? r >= t[o] && r < t[o + 1] - (t[o + 1] - t[o]) / 2
        ? (i = o)
        : r >= t[o] && r < t[o + 1] && (i = o + 1)
      : r >= t[o] && (i = o);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function uk(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: o, realIndex: s, snapIndex: a } = t;
  let l = e,
    u;
  const c = (d) => {
    let p = d - t.virtual.slidesBefore;
    return (
      p < 0 && (p = t.virtual.slides.length + p),
      p >= t.virtual.slides.length && (p -= t.virtual.slides.length),
      p
    );
  };
  if ((typeof l > "u" && (l = lk(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const d = Math.min(i.slidesPerGroupSkip, l);
    u = d + Math.floor((l - d) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), l === o)) {
    u !== a && ((t.snapIndex = u), t.emit("snapIndexChange")),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = c(l));
    return;
  }
  let f;
  t.virtual && i.virtual.enabled && i.loop
    ? (f = c(l))
    : t.slides[l]
    ? (f = parseInt(
        t.slides[l].getAttribute("data-swiper-slide-index") || l,
        10
      ))
    : (f = l),
    Object.assign(t, {
      snapIndex: u,
      realIndex: f,
      previousIndex: o,
      activeIndex: l,
    }),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    s !== f && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function ck(e) {
  const t = this,
    n = t.params,
    r = e.closest(`.${n.slideClass}, swiper-slide`);
  let i = !1,
    o;
  if (r) {
    for (let s = 0; s < t.slides.length; s += 1)
      if (t.slides[s] === r) {
        (i = !0), (o = s);
        break;
      }
  }
  if (r && i)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(
            r.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (t.clickedIndex = o);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
const fk = {
  updateSize: tk,
  updateSlides: nk,
  updateAutoHeight: rk,
  updateSlidesOffset: ik,
  updateSlidesProgress: ok,
  updateProgress: sk,
  updateSlidesClasses: ak,
  updateActiveIndex: uk,
  updateClickedSlide: ck,
};
function dk(e = this.isHorizontal() ? "x" : "y") {
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: o } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = BT(o, e);
  return r && (s = -s), s || 0;
}
function pk(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: o, progress: s } = n;
  let a = 0,
    l = 0;
  const u = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (l = e),
    i.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
    i.cssMode
      ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -l)
      : i.virtualTranslate ||
        (o.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : l);
  let c;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (c = 0) : (c = (e - n.minTranslate()) / f),
    c !== s && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function hk() {
  return -this.snapGrid[0];
}
function mk() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function gk(e = 0, t = this.params.speed, n = !0, r = !0, i) {
  const o = this,
    { params: s, wrapperEl: a } = o;
  if (o.animating && s.preventInteractionOnTransition) return !1;
  const l = o.minTranslate(),
    u = o.maxTranslate();
  let c;
  if (
    (r && e > l ? (c = l) : r && e < u ? (c = u) : (c = e),
    o.updateProgress(c),
    s.cssMode)
  ) {
    const f = o.isHorizontal();
    if (t === 0) a[f ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!o.support.smoothScroll)
        return (
          ty({ swiper: o, targetPosition: -c, side: f ? "left" : "top" }), !0
        );
      a.scrollTo({ [f ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (o.setTransition(0),
        o.setTranslate(c),
        n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd")))
      : (o.setTransition(t),
        o.setTranslate(c),
        n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")),
        o.animating ||
          ((o.animating = !0),
          o.onTranslateToWrapperTransitionEnd ||
            (o.onTranslateToWrapperTransitionEnd = function (d) {
              !o ||
                o.destroyed ||
                (d.target === this &&
                  (o.wrapperEl.removeEventListener(
                    "transitionend",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  (o.onTranslateToWrapperTransitionEnd = null),
                  delete o.onTranslateToWrapperTransitionEnd,
                  n && o.emit("transitionEnd")));
            }),
          o.wrapperEl.addEventListener(
            "transitionend",
            o.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const vk = {
  getTranslate: dk,
  setTranslate: pk,
  minTranslate: hk,
  maxTranslate: mk,
  translateTo: gk,
};
function yk(e, t) {
  const n = this;
  n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`),
    n.emit("setTransition", e, t);
}
function ry({ swiper: e, runCallbacks: t, direction: n, step: r }) {
  const { activeIndex: i, previousIndex: o } = e;
  let s = n;
  if (
    (s || (i > o ? (s = "next") : i < o ? (s = "prev") : (s = "reset")),
    e.emit(`transition${r}`),
    t && i !== o)
  ) {
    if (s === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      s === "next"
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`);
  }
}
function wk(e = !0, t) {
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    ry({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Sk(e = !0, t) {
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      ry({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
const xk = { setTransition: yk, transitionStart: wk, transitionEnd: Sk };
function Ek(e = 0, t = this.params.speed, n = !0, r, i) {
  typeof e == "string" && (e = parseInt(e, 10));
  const o = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: f,
    rtlTranslate: d,
    wrapperEl: p,
    enabled: v,
  } = o;
  if ((o.animating && a.preventInteractionOnTransition) || (!v && !r && !i))
    return !1;
  const y = Math.min(o.params.slidesPerGroupSkip, s);
  let x = y + Math.floor((s - y) / o.params.slidesPerGroup);
  x >= l.length && (x = l.length - 1);
  const m = -l[x];
  if (a.normalizeSlideIndex)
    for (let g = 0; g < u.length; g += 1) {
      const w = -Math.floor(m * 100),
        S = Math.floor(u[g] * 100),
        P = Math.floor(u[g + 1] * 100);
      typeof u[g + 1] < "u"
        ? w >= S && w < P - (P - S) / 2
          ? (s = g)
          : w >= S && w < P && (s = g + 1)
        : w >= S && (s = g);
    }
  if (
    o.initialized &&
    s !== f &&
    ((!o.allowSlideNext && m < o.translate && m < o.minTranslate()) ||
      (!o.allowSlidePrev &&
        m > o.translate &&
        m > o.maxTranslate() &&
        (f || 0) !== s))
  )
    return !1;
  s !== (c || 0) && n && o.emit("beforeSlideChangeStart"), o.updateProgress(m);
  let h;
  if (
    (s > f ? (h = "next") : s < f ? (h = "prev") : (h = "reset"),
    (d && -m === o.translate) || (!d && m === o.translate))
  )
    return (
      o.updateActiveIndex(s),
      a.autoHeight && o.updateAutoHeight(),
      o.updateSlidesClasses(),
      a.effect !== "slide" && o.setTranslate(m),
      h !== "reset" && (o.transitionStart(n, h), o.transitionEnd(n, h)),
      !1
    );
  if (a.cssMode) {
    const g = o.isHorizontal(),
      w = d ? m : -m;
    if (t === 0) {
      const S = o.virtual && o.params.virtual.enabled;
      S &&
        ((o.wrapperEl.style.scrollSnapType = "none"),
        (o._immediateVirtual = !0)),
        S && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
          ? ((o._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              p[g ? "scrollLeft" : "scrollTop"] = w;
            }))
          : (p[g ? "scrollLeft" : "scrollTop"] = w),
        S &&
          requestAnimationFrame(() => {
            (o.wrapperEl.style.scrollSnapType = ""), (o._immediateVirtual = !1);
          });
    } else {
      if (!o.support.smoothScroll)
        return (
          ty({ swiper: o, targetPosition: w, side: g ? "left" : "top" }), !0
        );
      p.scrollTo({ [g ? "left" : "top"]: w, behavior: "smooth" });
    }
    return !0;
  }
  return (
    o.setTransition(t),
    o.setTranslate(m),
    o.updateActiveIndex(s),
    o.updateSlidesClasses(),
    o.emit("beforeTransitionStart", t, r),
    o.transitionStart(n, h),
    t === 0
      ? o.transitionEnd(n, h)
      : o.animating ||
        ((o.animating = !0),
        o.onSlideToWrapperTransitionEnd ||
          (o.onSlideToWrapperTransitionEnd = function (w) {
            !o ||
              o.destroyed ||
              (w.target === this &&
                (o.wrapperEl.removeEventListener(
                  "transitionend",
                  o.onSlideToWrapperTransitionEnd
                ),
                (o.onSlideToWrapperTransitionEnd = null),
                delete o.onSlideToWrapperTransitionEnd,
                o.transitionEnd(n, h)));
          }),
        o.wrapperEl.addEventListener(
          "transitionend",
          o.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Pk(e = 0, t = this.params.speed, n = !0, r) {
  typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  let o = e;
  return (
    i.params.loop &&
      (i.virtual && i.params.virtual.enabled
        ? (o = o + i.virtual.slidesBefore)
        : (o = i.getSlideIndexByData(o))),
    i.slideTo(o, t, n, r)
  );
}
function Ck(e = this.params.speed, t = !0, n) {
  const r = this,
    { enabled: i, params: o, animating: s } = r;
  if (!i) return r;
  let a = o.slidesPerGroup;
  o.slidesPerView === "auto" &&
    o.slidesPerGroup === 1 &&
    o.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a,
    u = r.virtual && o.virtual.enabled;
  if (o.loop) {
    if (s && !u && o.loopPreventsSliding) return !1;
    r.loopFix({ direction: "next" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  return o.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + l, e, t, n);
}
function Tk(e = this.params.speed, t = !0, n) {
  const r = this,
    {
      params: i,
      snapGrid: o,
      slidesGrid: s,
      rtlTranslate: a,
      enabled: l,
      animating: u,
    } = r;
  if (!l) return r;
  const c = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const f = a ? r.translate : -r.translate;
  function d(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const p = d(f),
    v = o.map((m) => d(m));
  let y = o[v.indexOf(p) - 1];
  if (typeof y > "u" && i.cssMode) {
    let m;
    o.forEach((h, g) => {
      p >= h && (m = g);
    }),
      typeof m < "u" && (y = o[m > 0 ? m - 1 : m]);
  }
  let x = 0;
  if (
    (typeof y < "u" &&
      ((x = s.indexOf(y)),
      x < 0 && (x = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((x = x - r.slidesPerViewDynamic("previous", !0) + 1),
        (x = Math.max(x, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const m =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(m, e, t, n);
  }
  return r.slideTo(x, e, t, n);
}
function kk(e = this.params.speed, t = !0, n) {
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function Ak(e = this.params.speed, t = !0, n, r = 0.5) {
  const i = this;
  let o = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, o),
    a = s + Math.floor((o - s) / i.params.slidesPerGroup),
    l = i.rtlTranslate ? i.translate : -i.translate;
  if (l >= i.snapGrid[a]) {
    const u = i.snapGrid[a],
      c = i.snapGrid[a + 1];
    l - u > (c - u) * r && (o += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[a - 1],
      c = i.snapGrid[a];
    l - u <= (c - u) * r && (o -= i.params.slidesPerGroup);
  }
  return (
    (o = Math.max(o, 0)),
    (o = Math.min(o, i.slidesGrid.length - 1)),
    i.slideTo(o, e, t, n)
  );
}
function Ok() {
  const e = this,
    { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    o;
  const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (o = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              At(n, `${s}[data-swiper-slide-index="${o}"]`)[0]
            )),
            Eu(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            At(n, `${s}[data-swiper-slide-index="${o}"]`)[0]
          )),
          Eu(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
const bk = {
  slideTo: Ek,
  slideToLoop: Pk,
  slideNext: Ck,
  slidePrev: Tk,
  slideReset: kk,
  slideToClosest: Ak,
  slideToClickedSlide: Ok,
};
function Mk(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  At(r, `.${n.slideClass}, swiper-slide`).forEach((o, s) => {
    o.setAttribute("data-swiper-slide-index", s);
  }),
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : "next",
    });
}
function Nk({
  slideRealIndex: e,
  slideTo: t = !0,
  direction: n,
  setTranslate: r,
  activeSlideIndex: i,
  byController: o,
  byMousewheel: s,
} = {}) {
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: l,
    allowSlidePrev: u,
    allowSlideNext: c,
    slidesEl: f,
    params: d,
  } = a;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && d.virtual.enabled)
  ) {
    t &&
      (!d.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : d.centeredSlides && a.snapIndex < d.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = u),
      (a.allowSlideNext = c),
      a.emit("loopFix");
    return;
  }
  const p =
    d.slidesPerView === "auto"
      ? a.slidesPerViewDynamic()
      : Math.ceil(parseFloat(d.slidesPerView, 10));
  let v = d.loopedSlides || p;
  v % d.slidesPerGroup !== 0 &&
    (v += d.slidesPerGroup - (v % d.slidesPerGroup)),
    (a.loopedSlides = v);
  const y = [],
    x = [];
  let m = a.activeIndex;
  typeof i > "u"
    ? (i = a.getSlideIndex(
        a.slides.filter((P) => P.classList.contains(d.slideActiveClass))[0]
      ))
    : (m = i);
  const h = n === "next" || !n,
    g = n === "prev" || !n;
  let w = 0,
    S = 0;
  if (i < v) {
    w = Math.max(v - i, d.slidesPerGroup);
    for (let P = 0; P < v - i; P += 1) {
      const T = P - Math.floor(P / l.length) * l.length;
      y.push(l.length - T - 1);
    }
  } else if (i > a.slides.length - v * 2) {
    S = Math.max(i - (a.slides.length - v * 2), d.slidesPerGroup);
    for (let P = 0; P < S; P += 1) {
      const T = P - Math.floor(P / l.length) * l.length;
      x.push(T);
    }
  }
  if (
    (g &&
      y.forEach((P) => {
        f.prepend(a.slides[P]);
      }),
    h &&
      x.forEach((P) => {
        f.append(a.slides[P]);
      }),
    a.recalcSlides(),
    d.watchSlidesProgress && a.updateSlidesOffset(),
    t)
  ) {
    if (y.length > 0 && g)
      if (typeof e > "u") {
        const P = a.slidesGrid[m],
          E = a.slidesGrid[m + w] - P;
        s
          ? a.setTranslate(a.translate - E)
          : (a.slideTo(m + w, 0, !1, !0),
            r && (a.touches[a.isHorizontal() ? "startX" : "startY"] += E));
      } else r && a.slideToLoop(e, 0, !1, !0);
    else if (x.length > 0 && h)
      if (typeof e > "u") {
        const P = a.slidesGrid[m],
          E = a.slidesGrid[m - S] - P;
        s
          ? a.setTranslate(a.translate - E)
          : (a.slideTo(m - S, 0, !1, !0),
            r && (a.touches[a.isHorizontal() ? "startX" : "startY"] += E));
      } else a.slideToLoop(e, 0, !1, !0);
  }
  if (
    ((a.allowSlidePrev = u),
    (a.allowSlideNext = c),
    a.controller && a.controller.control && !o)
  ) {
    const P = {
      slideRealIndex: e,
      slideTo: !1,
      direction: n,
      setTranslate: r,
      activeSlideIndex: i,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((T) => {
          !T.destroyed && T.params.loop && T.loopFix(P);
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix(P);
  }
  a.emit("loopFix");
}
function Lk() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const o =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[o] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
const _k = { loopCreate: Mk, loopFix: Nk, loopDestroy: Lk };
function Ik(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function Rk() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
const Vk = { setGrabCursor: Ik, unsetGrabCursor: Rk };
function Dk(e, t = this) {
  function n(r) {
    if (!r || r === $n() || r === Ge()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function jk(e) {
  const t = this,
    n = $n(),
    r = Ge(),
    i = t.touchEventsData;
  i.evCache.push(e);
  const { params: o, touches: s, enabled: a } = t;
  if (
    !a ||
    (!o.simulateTouch && e.pointerType === "mouse") ||
    (t.animating && o.preventInteractionOnTransition)
  )
    return;
  !t.animating && o.cssMode && o.loop && t.loopFix();
  let l = e;
  l.originalEvent && (l = l.originalEvent);
  let u = l.target;
  if (
    (o.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(u)) ||
    ("which" in l && l.which === 3) ||
    ("button" in l && l.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const c = !!o.noSwipingClass && o.noSwipingClass !== "",
    f = e.composedPath ? e.composedPath() : e.path;
  c && l.target && l.target.shadowRoot && f && (u = f[0]);
  const d = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
    p = !!(l.target && l.target.shadowRoot);
  if (o.noSwiping && (p ? Dk(d, u) : u.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
  (s.currentX = l.pageX), (s.currentY = l.pageY);
  const v = s.currentX,
    y = s.currentY,
    x = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
    m = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
  if (x && (v <= m || v >= r.innerWidth - m))
    if (x === "prevent") e.preventDefault();
    else return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (s.startX = v),
    (s.startY = y),
    (i.touchStartTime = Ni()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    o.threshold > 0 && (i.allowThresholdMove = !1);
  let h = !0;
  u.matches(i.focusableElements) &&
    ((h = !1), u.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== u &&
      n.activeElement.blur();
  const g = h && t.allowTouchMove && o.touchStartPreventDefault;
  (o.touchStartForcePreventDefault || g) &&
    !u.isContentEditable &&
    l.preventDefault(),
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !o.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", l);
}
function Fk(e) {
  const t = $n(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: o, rtlTranslate: s, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let l = e;
  if ((l.originalEvent && (l = l.originalEvent), !r.isTouched)) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l);
    return;
  }
  const u = r.evCache.findIndex((P) => P.pointerId === l.pointerId);
  u >= 0 && (r.evCache[u] = l);
  const c = r.evCache.length > 1 ? r.evCache[0] : l,
    f = c.pageX,
    d = c.pageY;
  if (l.preventedByNestedSwiper) {
    (o.startX = f), (o.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    l.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(o, {
          startX: f,
          startY: d,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: f,
          currentY: d,
        }),
        (r.touchStartTime = Ni()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (d < o.startY && n.translate <= n.maxTranslate()) ||
        (d > o.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (f < o.startX && n.translate <= n.maxTranslate()) ||
      (f > o.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    l.target === t.activeElement &&
    l.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (r.allowTouchCallbacks && n.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
  )
    return;
  (o.currentX = f), (o.currentY = d);
  const p = o.currentX - o.startX,
    v = o.currentY - o.startY;
  if (n.params.threshold && Math.sqrt(p ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let P;
    (n.isHorizontal() && o.currentY === o.startY) ||
    (n.isVertical() && o.currentX === o.startX)
      ? (r.isScrolling = !1)
      : p * p + v * v >= 25 &&
        ((P = (Math.atan2(Math.abs(v), Math.abs(p)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? P > i.touchAngle
          : 90 - P > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", l),
    typeof r.startMoving > "u" &&
      (o.currentX !== o.startX || o.currentY !== o.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        r.evCache.length > 1))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && l.cancelable && l.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
  let y = n.isHorizontal() ? p : v,
    x = n.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
  i.oneWayMovement &&
    ((y = Math.abs(y) * (s ? 1 : -1)), (x = Math.abs(x) * (s ? 1 : -1))),
    (o.diff = y),
    (y *= i.touchRatio),
    s && ((y = -y), (x = -x));
  const m = n.touchesDirection;
  (n.swipeDirection = y > 0 ? "prev" : "next"),
    (n.touchesDirection = x > 0 ? "prev" : "next");
  const h = n.params.loop && !i.cssMode;
  if (!r.isMoved) {
    if (
      (h && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const P = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(P);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", l);
  }
  let g;
  r.isMoved &&
    m !== n.touchesDirection &&
    h &&
    Math.abs(y) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (g = !0)),
    n.emit("sliderMove", l),
    (r.isMoved = !0),
    (r.currentTranslate = y + r.startTranslate);
  let w = !0,
    S = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (S = 0),
    y > 0
      ? (h &&
          !g &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + y) ** S)))
      : y < 0 &&
        (h &&
          !g &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - y) ** S))),
    w && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (o.startX = o.currentX),
          (o.startY = o.currentY),
          (r.currentTranslate = r.startTranslate),
          (o.diff = n.isHorizontal()
            ? o.currentX - o.startX
            : o.currentY - o.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    n.params.freeMode &&
      i.freeMode.enabled &&
      n.freeMode &&
      n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function zk(e) {
  const t = this,
    n = t.touchEventsData,
    r = n.evCache.findIndex((g) => g.pointerId === e.pointerId);
  if (
    (r >= 0 && n.evCache.splice(r, 1),
    ["pointercancel", "pointerout", "pointerleave"].includes(e.type) &&
      !(
        e.type === "pointercancel" &&
        (t.browser.isSafari || t.browser.isWebView)
      ))
  )
    return;
  const {
    params: i,
    touches: o,
    rtlTranslate: s,
    slidesGrid: a,
    enabled: l,
  } = t;
  if (!l || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let u = e;
  if (
    (u.originalEvent && (u = u.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", u),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  i.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const c = Ni(),
    f = c - n.touchStartTime;
  if (t.allowClick) {
    const g = u.path || (u.composedPath && u.composedPath());
    t.updateClickedSlide((g && g[0]) || u.target),
      t.emit("tap click", u),
      f < 300 &&
        c - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", u);
  }
  if (
    ((n.lastClickTime = Ni()),
    Eu(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      o.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let d;
  if (
    (i.followFinger
      ? (d = s ? t.translate : -t.translate)
      : (d = -n.currentTranslate),
    i.cssMode)
  )
    return;
  if (t.params.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: d });
    return;
  }
  let p = 0,
    v = t.slidesSizesGrid[0];
  for (
    let g = 0;
    g < a.length;
    g += g < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const w = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof a[g + w] < "u"
      ? d >= a[g] && d < a[g + w] && ((p = g), (v = a[g + w] - a[g]))
      : d >= a[g] && ((p = g), (v = a[a.length - 1] - a[a.length - 2]));
  }
  let y = null,
    x = null;
  i.rewind &&
    (t.isBeginning
      ? (x =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (y = 0));
  const m = (d - a[p]) / v,
    h = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (f > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (m >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? y : p + h)
        : t.slideTo(p)),
      t.swipeDirection === "prev" &&
        (m > 1 - i.longSwipesRatio
          ? t.slideTo(p + h)
          : x !== null && m < 0 && Math.abs(m) > i.longSwipesRatio
          ? t.slideTo(x)
          : t.slideTo(p));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl)
      ? u.target === t.navigation.nextEl
        ? t.slideTo(p + h)
        : t.slideTo(p)
      : (t.swipeDirection === "next" && t.slideTo(y !== null ? y : p + h),
        t.swipeDirection === "prev" && t.slideTo(x !== null ? x : p));
  }
}
let jp;
function Fp() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: o } = e,
    s = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = s && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !s
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(jp),
      (jp = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
}
function Bk(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function $k() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const o = e.maxTranslate() - e.minTranslate();
  o === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / o),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
const Mo = (e, t) => {
  if (!e || e.destroyed || !e.params) return;
  const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
    r = t.closest(n());
  if (r) {
    const i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
    i && i.remove();
  }
};
function Uk(e) {
  const t = this;
  Mo(t, e.target), t.update();
}
let zp = !1;
function Hk() {}
const iy = (e, t) => {
  const n = $n(),
    { params: r, el: i, wrapperEl: o, device: s } = e,
    a = !!r.nested,
    l = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  i[l]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[l]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[l]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[l]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[l]("click", e.onClick, !0),
    r.cssMode && o[l]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          s.ios || s.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Fp,
          !0
        )
      : e[u]("observerUpdate", Fp, !0),
    i[l]("load", e.onLoad, { capture: !0 });
};
function Wk() {
  const e = this,
    t = $n(),
    { params: n } = e;
  (e.onTouchStart = jk.bind(e)),
    (e.onTouchMove = Fk.bind(e)),
    (e.onTouchEnd = zk.bind(e)),
    n.cssMode && (e.onScroll = $k.bind(e)),
    (e.onClick = Bk.bind(e)),
    (e.onLoad = Uk.bind(e)),
    zp || (t.addEventListener("touchstart", Hk), (zp = !0)),
    iy(e, "on");
}
function Gk() {
  iy(this, "off");
}
const Kk = { attachEvents: Wk, detachEvents: Gk },
  Bp = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Yk() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    o = r.breakpoints;
  if (!o || (o && Object.keys(o).length === 0)) return;
  const s = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
  if (!s || e.currentBreakpoint === s) return;
  const l = (s in o ? o[s] : void 0) || e.originalParams,
    u = Bp(e, r),
    c = Bp(e, l),
    f = r.enabled;
  u && !c
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === "column") ||
        (!l.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((y) => {
      const x = r[y] && r[y].enabled,
        m = l[y] && l[y].enabled;
      x && !m && e[y].disable(), !x && m && e[y].enable();
    });
  const d = l.direction && l.direction !== r.direction,
    p = r.loop && (l.slidesPerView !== r.slidesPerView || d);
  d && n && e.changeDirection(), je(e.params, l);
  const v = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    f && !v ? e.disable() : !f && v && e.enable(),
    (e.currentBreakpoint = s),
    e.emit("_beforeBreakpoint", l),
    p && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
    e.emit("breakpoint", l);
}
function Xk(e, t = "window", n) {
  if (!e || (t === "container" && !n)) return;
  let r = !1;
  const i = Ge(),
    o = t === "window" ? i.innerHeight : n.clientHeight,
    s = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: o * l, point: a };
      }
      return { value: a, point: a };
    });
  s.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < s.length; a += 1) {
    const { point: l, value: u } = s[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = l)
      : u <= n.clientWidth && (r = l);
  }
  return r || "max";
}
const Qk = { setBreakpoint: Yk, getBreakpoint: Xk };
function qk(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function Zk() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: o } = e,
    s = qk(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: o.android },
        { ios: o.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function Jk() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
const eA = { addClasses: Zk, removeClasses: Jk };
function tA() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      o = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > o;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
const nA = { checkOverflow: tA },
  $p = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function rA(e, t) {
  return function (r = {}) {
    const i = Object.keys(r)[0],
      o = r[i];
    if (typeof o != "object" || o === null) {
      je(t, r);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] === !0 &&
        (e[i] = { auto: !0 }),
      !(i in e && "enabled" in o))
    ) {
      je(t, r);
      return;
    }
    e[i] === !0 && (e[i] = { enabled: !0 }),
      typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      je(t, r);
  };
}
const Za = {
    eventsEmitter: ek,
    update: fk,
    translate: vk,
    transition: xk,
    slide: bk,
    loop: _k,
    grabCursor: Vk,
    events: Kk,
    breakpoints: Qk,
    checkOverflow: nA,
    classes: eA,
  },
  Ja = {};
let Li = class xt {
  constructor(...t) {
    let n, r;
    t.length === 1 &&
    t[0].constructor &&
    Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
      ? (r = t[0])
      : ([n, r] = t),
      r || (r = {}),
      (r = je({}, r)),
      n && !r.el && (r.el = n);
    const i = $n();
    if (
      r.el &&
      typeof r.el == "string" &&
      i.querySelectorAll(r.el).length > 1
    ) {
      const l = [];
      return (
        i.querySelectorAll(r.el).forEach((u) => {
          const c = je({}, r, { el: u });
          l.push(new xt(c));
        }),
        l
      );
    }
    const o = this;
    (o.__swiper__ = !0),
      (o.support = ny()),
      (o.device = XT({ userAgent: r.userAgent })),
      (o.browser = qT()),
      (o.eventsListeners = {}),
      (o.eventsAnyListeners = []),
      (o.modules = [...o.__modules__]),
      r.modules && Array.isArray(r.modules) && o.modules.push(...r.modules);
    const s = {};
    o.modules.forEach((l) => {
      l({
        params: r,
        swiper: o,
        extendParams: rA(r, s),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o),
      });
    });
    const a = je({}, $p, s);
    return (
      (o.params = je({}, a, Ja, r)),
      (o.originalParams = je({}, o.params)),
      (o.passedParams = je({}, r)),
      o.params &&
        o.params.on &&
        Object.keys(o.params.on).forEach((l) => {
          o.on(l, o.params.on[l]);
        }),
      o.params && o.params.onAny && o.onAny(o.params.onAny),
      Object.assign(o, {
        enabled: o.params.enabled,
        el: n,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return o.params.direction === "horizontal";
        },
        isVertical() {
          return o.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: o.params.allowSlideNext,
        allowSlidePrev: o.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: o.params.focusableElements,
          lastClickTime: Ni(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: o.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      o.emit("_swiper"),
      o.params.init && o.init(),
      o
    );
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = At(n, `.${r.slideClass}, swiper-slide`),
      o = Vp(i[0]);
    return Vp(t) - o;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = At(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      s = (r.maxTranslate() - i) * t + i;
    r.translateTo(s, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t = "current", n = !1) {
    const r = this,
      {
        params: i,
        slides: o,
        slidesGrid: s,
        slidesSizesGrid: a,
        size: l,
        activeIndex: u,
      } = r;
    let c = 1;
    if (i.centeredSlides) {
      let f = o[u].swiperSlideSize,
        d;
      for (let p = u + 1; p < o.length; p += 1)
        o[p] &&
          !d &&
          ((f += o[p].swiperSlideSize), (c += 1), f > l && (d = !0));
      for (let p = u - 1; p >= 0; p -= 1)
        o[p] &&
          !d &&
          ((f += o[p].swiperSlideSize), (c += 1), f > l && (d = !0));
    } else if (t === "current")
      for (let f = u + 1; f < o.length; f += 1)
        (n ? s[f] + a[f] - s[u] < l : s[f] - s[u] < l) && (c += 1);
    else for (let f = u - 1; f >= 0; f -= 1) s[u] - s[f] < l && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
        s.complete && Mo(t, s);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let o;
    t.params.freeMode && t.params.freeMode.enabled
      ? (i(), t.params.autoHeight && t.updateAutoHeight())
      : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
          ? (o = t.slideTo(t.slides.length - 1, 0, !1, !0))
          : (o = t.slideTo(t.activeIndex, 0, !1, !0)),
        o || i()),
      r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
      t.emit("update");
  }
  changeDirection(t, n = !0) {
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((o) => {
          t === "vertical" ? (o.style.width = "") : (o.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n), r.shadowEl && (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let s = (() =>
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : At(r, i())[0])();
    return (
      !s &&
        n.params.createElements &&
        ((s = UT("div", n.params.wrapperClass)),
        r.append(s),
        At(r, `.${n.params.slideClass}`).forEach((a) => {
          s.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: s,
        slidesEl: n.isElement ? r : s,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || Gt(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || Gt(r, "direction") === "rtl"),
        wrongRTL: Gt(s, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled
          ? n.slideTo(
              n.params.initialSlide + n.virtual.slidesBefore,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            ),
        n.params.loop && n.loopCreate(),
        n.attachEvents(),
        [...n.el.querySelectorAll('[loading="lazy"]')].forEach((i) => {
          i.complete
            ? Mo(n, i)
            : i.addEventListener("load", (o) => {
                Mo(n, o.target);
              });
        }),
        (n.initialized = !0),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(t = !0, n = !0) {
    const r = this,
      { params: i, el: o, wrapperEl: s, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          o.removeAttribute("style"),
          s.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((l) => {
              l.classList.remove(
                i.slideVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                l.removeAttribute("style"),
                l.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((l) => {
          r.off(l);
        }),
        t !== !1 && ((r.el.swiper = null), FT(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    je(Ja, t);
  }
  static get extendedDefaults() {
    return Ja;
  }
  static get defaults() {
    return $p;
  }
  static installModule(t) {
    xt.prototype.__modules__ || (xt.prototype.__modules__ = []);
    const n = xt.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => xt.installModule(n)), xt)
      : (xt.installModule(t), xt);
  }
};
Object.keys(Za).forEach((e) => {
  Object.keys(Za[e]).forEach((t) => {
    Li.prototype[t] = Za[e][t];
  });
});
Li.use([ZT, JT]);
function Vn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Kt(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Vn(t[r]) && Vn(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Kt(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function oy(e = {}) {
  return (
    e.navigation &&
    typeof e.navigation.nextEl > "u" &&
    typeof e.navigation.prevEl > "u"
  );
}
function sy(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function ay(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function ly(e = "") {
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function iA(e = "") {
  return e
    ? e.includes("swiper-wrapper")
      ? e
      : `swiper-wrapper ${e}`
    : "swiper-wrapper";
}
const uy = [
  "eventsPrefix",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
  "injectStyles",
  "injectStylesUrls",
];
function oA(e = {}, t = !0) {
  const n = { on: {} },
    r = {},
    i = {};
  Kt(n, Li.defaults),
    Kt(n, Li.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1);
  const o = {},
    s = uy.map((l) => l.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((l) => {
      typeof e[l] > "u" ||
        (s.indexOf(l) >= 0
          ? Vn(e[l])
            ? ((n[l] = {}), (i[l] = {}), Kt(n[l], e[l]), Kt(i[l], e[l]))
            : ((n[l] = e[l]), (i[l] = e[l]))
          : l.search(/on[A-Z]/) === 0 && typeof e[l] == "function"
          ? t
            ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
            : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
          : (o[l] = e[l]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((l) => {
      n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l];
    }),
    { params: n, passedParams: i, rest: o, events: r }
  );
}
function sA(
  { el: e, nextEl: t, prevEl: n, paginationEl: r, scrollbarEl: i, swiper: o },
  s
) {
  oy(s) &&
    t &&
    n &&
    ((o.params.navigation.nextEl = t),
    (o.originalParams.navigation.nextEl = t),
    (o.params.navigation.prevEl = n),
    (o.originalParams.navigation.prevEl = n)),
    sy(s) &&
      r &&
      ((o.params.pagination.el = r), (o.originalParams.pagination.el = r)),
    ay(s) &&
      i &&
      ((o.params.scrollbar.el = i), (o.originalParams.scrollbar.el = i)),
    o.init(e);
}
function aA(e, t, n, r, i) {
  const o = [];
  if (!t) return o;
  const s = (l) => {
    o.indexOf(l) < 0 && o.push(l);
  };
  if (n && r) {
    const l = r.map(i),
      u = n.map(i);
    l.join("") !== u.join("") && s("children"),
      r.length !== n.length && s("children");
  }
  return (
    uy
      .filter((l) => l[0] === "_")
      .map((l) => l.replace(/_/, ""))
      .forEach((l) => {
        if (l in e && l in t)
          if (Vn(e[l]) && Vn(t[l])) {
            const u = Object.keys(e[l]),
              c = Object.keys(t[l]);
            u.length !== c.length
              ? s(l)
              : (u.forEach((f) => {
                  e[l][f] !== t[l][f] && s(l);
                }),
                c.forEach((f) => {
                  e[l][f] !== t[l][f] && s(l);
                }));
          } else e[l] !== t[l] && s(l);
      }),
    o
  );
}
function cy(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function fy(e) {
  const t = [];
  return (
    W.Children.toArray(e).forEach((n) => {
      cy(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          fy(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function lA(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    W.Children.toArray(e).forEach((r) => {
      if (cy(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = fy(r.props.children);
        i.length > 0 ? i.forEach((o) => t.push(o)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function uA({
  swiper: e,
  slides: t,
  passedParams: n,
  changedParams: r,
  nextEl: i,
  prevEl: o,
  scrollbarEl: s,
  paginationEl: a,
}) {
  const l = r.filter(
      (E) => E !== "children" && E !== "direction" && E !== "wrapperClass"
    ),
    {
      params: u,
      pagination: c,
      navigation: f,
      scrollbar: d,
      virtual: p,
      thumbs: v,
    } = e;
  let y, x, m, h, g, w, S, P;
  r.includes("thumbs") &&
    n.thumbs &&
    n.thumbs.swiper &&
    u.thumbs &&
    !u.thumbs.swiper &&
    (y = !0),
    r.includes("controller") &&
      n.controller &&
      n.controller.control &&
      u.controller &&
      !u.controller.control &&
      (x = !0),
    r.includes("pagination") &&
      n.pagination &&
      (n.pagination.el || a) &&
      (u.pagination || u.pagination === !1) &&
      c &&
      !c.el &&
      (m = !0),
    r.includes("scrollbar") &&
      n.scrollbar &&
      (n.scrollbar.el || s) &&
      (u.scrollbar || u.scrollbar === !1) &&
      d &&
      !d.el &&
      (h = !0),
    r.includes("navigation") &&
      n.navigation &&
      (n.navigation.prevEl || o) &&
      (n.navigation.nextEl || i) &&
      (u.navigation || u.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (g = !0);
  const T = (E) => {
    e[E] &&
      (e[E].destroy(),
      E === "navigation"
        ? (e.isElement && (e[E].prevEl.remove(), e[E].nextEl.remove()),
          (u[E].prevEl = void 0),
          (u[E].nextEl = void 0),
          (e[E].prevEl = void 0),
          (e[E].nextEl = void 0))
        : (e.isElement && e[E].el.remove(),
          (u[E].el = void 0),
          (e[E].el = void 0)));
  };
  r.includes("loop") &&
    e.isElement &&
    (u.loop && !n.loop ? (w = !0) : !u.loop && n.loop ? (S = !0) : (P = !0)),
    l.forEach((E) => {
      if (Vn(u[E]) && Vn(n[E])) Kt(u[E], n[E]);
      else {
        const A = n[E];
        (A === !0 || A === !1) &&
        (E === "navigation" || E === "pagination" || E === "scrollbar")
          ? A === !1 && T(E)
          : (u[E] = n[E]);
      }
    }),
    l.includes("controller") &&
      !x &&
      e.controller &&
      e.controller.control &&
      u.controller &&
      u.controller.control &&
      (e.controller.control = u.controller.control),
    r.includes("children") &&
      t &&
      p &&
      u.virtual.enabled &&
      ((p.slides = t), p.update(!0)),
    r.includes("children") && t && u.loop && (P = !0),
    y && v.init() && v.update(!0),
    x && (e.controller.control = u.controller.control),
    m &&
      (e.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        e.el.shadowEl.appendChild(a)),
      a && (u.pagination.el = a),
      c.init(),
      c.render(),
      c.update()),
    h &&
      (e.isElement &&
        (!s || typeof s == "string") &&
        ((s = document.createElement("div")),
        s.classList.add("swiper-scrollbar"),
        e.el.shadowEl.appendChild(s)),
      s && (u.scrollbar.el = s),
      d.init(),
      d.updateSize(),
      d.setTranslate()),
    g &&
      (e.isElement &&
        ((!i || typeof i == "string") &&
          ((i = document.createElement("div")),
          i.classList.add("swiper-button-next"),
          e.el.shadowEl.appendChild(i)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          e.el.shadowEl.appendChild(o))),
      i && (u.navigation.nextEl = i),
      o && (u.navigation.prevEl = o),
      f.init(),
      f.update()),
    r.includes("allowSlideNext") && (e.allowSlideNext = n.allowSlideNext),
    r.includes("allowSlidePrev") && (e.allowSlidePrev = n.allowSlidePrev),
    r.includes("direction") && e.changeDirection(n.direction, !1),
    (w || P) && e.loopDestroy(),
    (S || P) && e.loopCreate(),
    e.update();
}
function cA(e, t, n) {
  if (!n) return null;
  const r = (c) => {
      let f = c;
      return (
        c < 0 ? (f = t.length + c) : f >= t.length && (f = f - t.length), f
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: o, to: s } = n,
    a = e.params.loop ? -t.length : 0,
    l = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = a; c < l; c += 1) c >= o && c <= s && u.push(t[r(c)]);
  return u.map((c, f) =>
    W.cloneElement(c, { swiper: e, style: i, key: `slide-${f}` })
  );
}
const fA = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function si(e, t) {
  return typeof window > "u" ? C.useEffect(e, t) : C.useLayoutEffect(e, t);
}
const Up = C.createContext(null),
  dy = C.createContext(null),
  dA = () => C.useContext(dy);
function Pu() {
  return (
    (Pu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pu.apply(this, arguments)
  );
}
const py = C.forwardRef(function (e, t) {
  let {
      className: n,
      tag: r = "div",
      wrapperTag: i = "div",
      children: o,
      onSwiper: s,
      ...a
    } = e === void 0 ? {} : e,
    l = !1;
  const [u, c] = C.useState("swiper"),
    [f, d] = C.useState(null),
    [p, v] = C.useState(!1),
    y = C.useRef(!1),
    x = C.useRef(null),
    m = C.useRef(null),
    h = C.useRef(null),
    g = C.useRef(null),
    w = C.useRef(null),
    S = C.useRef(null),
    P = C.useRef(null),
    T = C.useRef(null),
    { params: E, passedParams: A, rest: M, events: b } = oA(a),
    { slides: _, slots: j } = lA(o),
    $ = () => {
      v(!p);
    };
  Object.assign(E.on, {
    _containerClasses(I, V) {
      c(V);
    },
  });
  const K = () => {
    Object.assign(E.on, b), (l = !0);
    const I = { ...E };
    if (
      (delete I.wrapperClass,
      (m.current = new Li(I)),
      m.current.virtual && m.current.params.virtual.enabled)
    ) {
      m.current.virtual.slides = _;
      const V = {
        cache: !1,
        slides: _,
        renderExternal: d,
        renderExternalUpdate: !1,
      };
      Kt(m.current.params.virtual, V), Kt(m.current.originalParams.virtual, V);
    }
  };
  x.current || K(), m.current && m.current.on("_beforeBreakpoint", $);
  const he = () => {
      l ||
        !b ||
        !m.current ||
        Object.keys(b).forEach((I) => {
          m.current.on(I, b[I]);
        });
    },
    be = () => {
      !b ||
        !m.current ||
        Object.keys(b).forEach((I) => {
          m.current.off(I, b[I]);
        });
    };
  C.useEffect(() => () => {
    m.current && m.current.off("_beforeBreakpoint", $);
  }),
    C.useEffect(() => {
      !y.current &&
        m.current &&
        (m.current.emitSlidesClasses(), (y.current = !0));
    }),
    si(() => {
      if ((t && (t.current = x.current), !!x.current))
        return (
          m.current.destroyed && K(),
          sA(
            {
              el: x.current,
              nextEl: w.current,
              prevEl: S.current,
              paginationEl: P.current,
              scrollbarEl: T.current,
              swiper: m.current,
            },
            E
          ),
          s && s(m.current),
          () => {
            m.current && !m.current.destroyed && m.current.destroy(!0, !1);
          }
        );
    }, []),
    si(() => {
      he();
      const I = aA(A, h.current, _, g.current, (V) => V.key);
      return (
        (h.current = A),
        (g.current = _),
        I.length &&
          m.current &&
          !m.current.destroyed &&
          uA({
            swiper: m.current,
            slides: _,
            passedParams: A,
            changedParams: I,
            nextEl: w.current,
            prevEl: S.current,
            scrollbarEl: T.current,
            paginationEl: P.current,
          }),
        () => {
          be();
        }
      );
    }),
    si(() => {
      fA(m.current);
    }, [f]);
  function N() {
    return E.virtual
      ? cA(m.current, _, f)
      : _.map((I, V) =>
          W.cloneElement(I, { swiper: m.current, swiperSlideIndex: V })
        );
  }
  return W.createElement(
    r,
    Pu({ ref: x, className: ly(`${u}${n ? ` ${n}` : ""}`) }, M),
    W.createElement(
      dy.Provider,
      { value: m.current },
      j["container-start"],
      W.createElement(
        i,
        { className: iA(E.wrapperClass) },
        j["wrapper-start"],
        N(),
        j["wrapper-end"]
      ),
      oy(E) &&
        W.createElement(
          W.Fragment,
          null,
          W.createElement("div", { ref: S, className: "swiper-button-prev" }),
          W.createElement("div", { ref: w, className: "swiper-button-next" })
        ),
      ay(E) &&
        W.createElement("div", { ref: T, className: "swiper-scrollbar" }),
      sy(E) &&
        W.createElement("div", { ref: P, className: "swiper-pagination" }),
      j["container-end"]
    )
  );
});
py.displayName = "Swiper";
function Cu() {
  return (
    (Cu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cu.apply(this, arguments)
  );
}
const hy = C.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: o,
    zoom: s,
    lazy: a,
    virtualIndex: l,
    swiperSlideIndex: u,
    ...c
  } = e === void 0 ? {} : e;
  const f = C.useRef(null),
    [d, p] = C.useState("swiper-slide"),
    [v, y] = C.useState(!1);
  function x(w, S, P) {
    S === f.current && p(P);
  }
  si(() => {
    if (
      (typeof u < "u" && (f.current.swiperSlideIndex = u),
      t && (t.current = f.current),
      !(!f.current || !o))
    ) {
      if (o.destroyed) {
        d !== "swiper-slide" && p("swiper-slide");
        return;
      }
      return (
        o.on("_slideClass", x),
        () => {
          o && o.off("_slideClass", x);
        }
      );
    }
  }),
    si(() => {
      o && f.current && !o.destroyed && p(o.getSlideClasses(f.current));
    }, [o]);
  const m = {
      isActive: d.indexOf("swiper-slide-active") >= 0,
      isVisible: d.indexOf("swiper-slide-visible") >= 0,
      isPrev: d.indexOf("swiper-slide-prev") >= 0,
      isNext: d.indexOf("swiper-slide-next") >= 0,
    },
    h = () => (typeof r == "function" ? r(m) : r),
    g = () => {
      y(!0);
    };
  return W.createElement(
    n,
    Cu(
      {
        ref: f,
        className: ly(`${d}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": l,
        onLoad: g,
      },
      c
    ),
    s &&
      W.createElement(
        Up.Provider,
        { value: m },
        W.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof s == "number" ? s : void 0,
          },
          h(),
          a &&
            !v &&
            W.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !s &&
      W.createElement(
        Up.Provider,
        { value: m },
        h(),
        a &&
          !v &&
          W.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
hy.displayName = "SwiperSlide";
const pA = [
    {
      name: "Aliva Priva Jardin",
      price: "47,043",
      detail:
        "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
      image: "./r1.png",
    },
    {
      name: "Asatti Garden City",
      price: "66,353",
      detail:
        "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
      image: "./r2.png",
    },
    {
      name: "Citralan Puri Serang",
      price: "35,853",
      detail:
        "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
      image: "./r3.png",
    },
    {
      name: "Aliva Priva Jardin",
      price: "47,043",
      detail:
        "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
      image: "./r1.png",
    },
    {
      name: "Asatti Garden City",
      price: "66,353",
      detail:
        "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
      image: "./r2.png",
    },
    {
      name: "Citralan Puri Serang",
      price: "35,853",
      detail:
        "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
      image: "./r3.png",
    },
  ],
  hA = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      480: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      750: { slidesPerView: 3 },
      1150: { slidesPerView: 4 },
    },
  };
function mA() {
  return k("section", {
    className: "r-wrapper",
    id: "residencies",
    children: R("div", {
      className: "paddings innerWidth r-container",
      children: [
        R("div", {
          className: "r-head flexColStart",
          children: [
            k("span", { className: "orangeText", children: "Best Choices" }),
            k("span", {
              className: "primaryText",
              children: "Popular Residencies",
            }),
          ],
        }),
        R(py, {
          ...hA,
          children: [
            k(gA, {}),
            pA.map((e, t) =>
              k(
                hy,
                {
                  children: R("div", {
                    className: "flexColStart r-card",
                    children: [
                      k("img", { src: e.image, alt: "property" }),
                      R("span", {
                        className: "secondaryText r-price",
                        children: [
                          k("span", {
                            style: { color: "orange" },
                            children: "$",
                          }),
                          k("span", { children: e.price }),
                        ],
                      }),
                      k("span", { className: "primaryText", children: e.name }),
                      k("span", {
                        className: "secondaryText",
                        children: e.detail,
                      }),
                    ],
                  }),
                },
                t
              )
            ),
          ],
        }),
      ],
    }),
  });
}
function gA() {
  const e = dA();
  return R("div", {
    className: "r-buttons flexCenter",
    children: [
      k("button", {
        onClick: () => {
          e.slidePrev();
        },
        children: "<",
      }),
      k("button", {
        onClick: () => {
          e.slideNext();
        },
        children: ">",
      }),
    ],
  });
}
function Hp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Tu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hp(Object(n), !0).forEach(function (r) {
          q(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Hp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Zs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Js(e, t, n) {
  return (
    t && Wp(e.prototype, t),
    n && Wp(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function q(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function vt() {
  return (
    (vt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    vt.apply(this, arguments)
  );
}
function Xc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ku(e, t);
}
function ws(e) {
  return (
    (ws = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    ws(e)
  );
}
function ku(e, t) {
  return (
    (ku =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    ku(e, t)
  );
}
function vA() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function yA(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ea(e, t) {
  if (e == null) return {};
  var n = yA(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function it(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function wA(e, t) {
  if (t && (typeof t == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return it(e);
}
function Qc(e) {
  var t = vA();
  return function () {
    var r = ws(e),
      i;
    if (t) {
      var o = ws(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return wA(this, i);
  };
}
function SA(e, t) {
  return PA(e) || TA(e, t) || my(e, t) || AA();
}
function xA(e) {
  return EA(e) || CA(e) || my(e) || kA();
}
function EA(e) {
  if (Array.isArray(e)) return Au(e);
}
function PA(e) {
  if (Array.isArray(e)) return e;
}
function CA(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function TA(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      s,
      a;
    try {
      for (
        n = n.call(e);
        !(i = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t));
        i = !0
      );
    } catch (l) {
      (o = !0), (a = l);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw a;
      }
    }
    return r;
  }
}
function my(e, t) {
  if (e) {
    if (typeof e == "string") return Au(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Au(e, t);
  }
}
function Au(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function kA() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var OA = Js(function e(t) {
    var n = this,
      r = t.expanded,
      i = r === void 0 ? [] : r,
      o = t.allowMultipleExpanded,
      s = o === void 0 ? !1 : o,
      a = t.allowZeroExpanded,
      l = a === void 0 ? !1 : a;
    Zs(this, e),
      q(this, "expanded", void 0),
      q(this, "allowMultipleExpanded", void 0),
      q(this, "allowZeroExpanded", void 0),
      q(this, "toggleExpanded", function (u) {
        if (n.isItemDisabled(u)) return n;
        var c = n.isItemExpanded(u);
        return c
          ? n.augment({
              expanded: n.expanded.filter(function (f) {
                return f !== u;
              }),
            })
          : n.augment({
              expanded: n.allowMultipleExpanded
                ? [].concat(xA(n.expanded), [u])
                : [u],
            });
      }),
      q(this, "isItemDisabled", function (u) {
        var c = n.isItemExpanded(u),
          f = n.expanded.length === 1;
        return !!(c && !n.allowZeroExpanded && f);
      }),
      q(this, "isItemExpanded", function (u) {
        return n.expanded.indexOf(u) !== -1;
      }),
      q(this, "getPanelAttributes", function (u, c) {
        var f = c ?? n.isItemExpanded(u);
        return {
          role: n.allowMultipleExpanded ? void 0 : "region",
          "aria-hidden": n.allowMultipleExpanded ? !f : void 0,
          "aria-labelledby": n.getButtonId(u),
          id: n.getPanelId(u),
          hidden: f ? void 0 : !0,
        };
      }),
      q(this, "getHeadingAttributes", function () {
        return { role: "heading" };
      }),
      q(this, "getButtonAttributes", function (u, c) {
        var f = c ?? n.isItemExpanded(u),
          d = n.isItemDisabled(u);
        return {
          id: n.getButtonId(u),
          "aria-disabled": d,
          "aria-expanded": f,
          "aria-controls": n.getPanelId(u),
          role: "button",
          tabIndex: 0,
        };
      }),
      q(this, "getPanelId", function (u) {
        return "accordion__panel-".concat(u);
      }),
      q(this, "getButtonId", function (u) {
        return "accordion__heading-".concat(u);
      }),
      q(this, "augment", function (u) {
        return new e(
          Tu(
            {
              expanded: n.expanded,
              allowMultipleExpanded: n.allowMultipleExpanded,
              allowZeroExpanded: n.allowZeroExpanded,
            },
            u
          )
        );
      }),
      (this.expanded = i),
      (this.allowMultipleExpanded = s),
      (this.allowZeroExpanded = l);
  }),
  gy = C.createContext(null),
  vy = (function (e) {
    Xc(n, e);
    var t = Qc(n);
    function n() {
      var r;
      Zs(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return (
        (r = t.call.apply(t, [this].concat(o))),
        q(
          it(r),
          "state",
          new OA({
            expanded: r.props.preExpanded,
            allowMultipleExpanded: r.props.allowMultipleExpanded,
            allowZeroExpanded: r.props.allowZeroExpanded,
          })
        ),
        q(it(r), "toggleExpanded", function (a) {
          r.setState(
            function (l) {
              return l.toggleExpanded(a);
            },
            function () {
              r.props.onChange && r.props.onChange(r.state.expanded);
            }
          );
        }),
        q(it(r), "isItemDisabled", function (a) {
          return r.state.isItemDisabled(a);
        }),
        q(it(r), "isItemExpanded", function (a) {
          return r.state.isItemExpanded(a);
        }),
        q(it(r), "getPanelAttributes", function (a, l) {
          return r.state.getPanelAttributes(a, l);
        }),
        q(it(r), "getHeadingAttributes", function () {
          return r.state.getHeadingAttributes();
        }),
        q(it(r), "getButtonAttributes", function (a, l) {
          return r.state.getButtonAttributes(a, l);
        }),
        r
      );
    }
    return (
      Js(n, [
        {
          key: "render",
          value: function () {
            var i = this.state,
              o = i.allowZeroExpanded,
              s = i.allowMultipleExpanded;
            return C.createElement(
              gy.Provider,
              {
                value: {
                  allowMultipleExpanded: s,
                  allowZeroExpanded: o,
                  toggleExpanded: this.toggleExpanded,
                  isItemDisabled: this.isItemDisabled,
                  isItemExpanded: this.isItemExpanded,
                  getPanelAttributes: this.getPanelAttributes,
                  getHeadingAttributes: this.getHeadingAttributes,
                  getButtonAttributes: this.getButtonAttributes,
                },
              },
              this.props.children || null
            );
          },
        },
      ]),
      n
    );
  })(C.PureComponent);
q(vy, "defaultProps", { allowMultipleExpanded: !1, allowZeroExpanded: !1 });
var yy = (function (e) {
    Xc(n, e);
    var t = Qc(n);
    function n() {
      var r;
      Zs(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return (
        (r = t.call.apply(t, [this].concat(o))),
        q(it(r), "renderChildren", function (a) {
          return a ? r.props.children(a) : null;
        }),
        r
      );
    }
    return (
      Js(n, [
        {
          key: "render",
          value: function () {
            return C.createElement(gy.Consumer, null, this.renderChildren);
          },
        },
      ]),
      n
    );
  })(C.PureComponent),
  bA = [
    "className",
    "allowMultipleExpanded",
    "allowZeroExpanded",
    "onChange",
    "preExpanded",
  ],
  MA = function (t) {
    var n = t.className,
      r = n === void 0 ? "accordion" : n,
      i = t.allowMultipleExpanded,
      o = t.allowZeroExpanded,
      s = t.onChange,
      a = t.preExpanded,
      l = ea(t, bA);
    return C.createElement(
      vy,
      {
        preExpanded: a,
        allowMultipleExpanded: i,
        allowZeroExpanded: o,
        onChange: s,
      },
      C.createElement(
        "div",
        vt({ "data-accordion-component": "Accordion", className: r }, l)
      )
    );
  },
  Ou;
(function (e) {
  (e.Accordion = "Accordion"),
    (e.AccordionItem = "AccordionItem"),
    (e.AccordionItemButton = "AccordionItemButton"),
    (e.AccordionItemHeading = "AccordionItemHeading"),
    (e.AccordionItemPanel = "AccordionItemPanel");
})(Ou || (Ou = {}));
var wy = Ou,
  el = 0;
function NA() {
  var e = el;
  return (el = el + 1), "raa-".concat(e);
}
var LA = C.useId || NA,
  _A = /[\u0009\u000a\u000c\u000d\u0020]/g;
function _i(e) {
  return e === "" || _A.test(e)
    ? (console.error(
        'uuid must be a valid HTML5 id but was given "'.concat(
          e,
          '", ASCII whitespaces are forbidden'
        )
      ),
      !1)
    : !0;
}
var Sy = C.createContext(null),
  IA = function (t) {
    var n = t.children,
      r = t.uuid,
      i = t.accordionContext,
      o = t.dangerouslySetExpanded,
      s = function () {
        i.toggleExpanded(r);
      },
      a = function (u) {
        var c = o ?? u.isItemExpanded(r),
          f = u.isItemDisabled(r),
          d = u.getPanelAttributes(r, o),
          p = u.getHeadingAttributes(r),
          v = u.getButtonAttributes(r, o);
        return C.createElement(
          Sy.Provider,
          {
            value: {
              uuid: r,
              expanded: c,
              disabled: f,
              toggleExpanded: s,
              panelAttributes: d,
              headingAttributes: p,
              buttonAttributes: v,
            },
          },
          n
        );
      };
    return C.createElement(yy, null, a);
  },
  RA = function (t) {
    return C.createElement(yy, null, function (n) {
      return C.createElement(IA, vt({}, t, { accordionContext: n }));
    });
  },
  Hi = function (t) {
    var n = t.children,
      r = function (o) {
        return o ? n(o) : null;
      };
    return C.createElement(Sy.Consumer, null, r);
  },
  VA = ["uuid", "dangerouslySetExpanded", "className", "activeClassName"],
  xy = function (t) {
    var n = t.uuid,
      r = t.dangerouslySetExpanded,
      i = t.className,
      o = i === void 0 ? "accordion__item" : i,
      s = t.activeClassName,
      a = ea(t, VA),
      l = C.useState(LA()),
      u = SA(l, 1),
      c = u[0],
      f = n ?? c,
      d = function (v) {
        var y = v.expanded,
          x = y && s ? s : o;
        return C.createElement(
          "div",
          vt({ "data-accordion-component": "AccordionItem", className: x }, a)
        );
      };
    return (
      _i(f.toString()),
      a.id && _i(a.id),
      C.createElement(
        RA,
        { uuid: f, dangerouslySetExpanded: r },
        C.createElement(Hi, null, d)
      )
    );
  };
xy.displayName = wy.AccordionItem;
function Ey(e) {
  return (
    e &&
    (e.matches('[data-accordion-component="Accordion"]')
      ? e
      : Ey(e.parentElement))
  );
}
function ta(e) {
  var t = Ey(e);
  return (
    t &&
    Array.from(
      t.querySelectorAll('[data-accordion-component="AccordionItemButton"]')
    )
  );
}
function DA(e) {
  var t = ta(e) || [],
    n = t[0];
  n && n.focus();
}
function jA(e) {
  var t = ta(e) || [],
    n = t[t.length - 1];
  n && n.focus();
}
function FA(e) {
  var t = ta(e) || [],
    n = t.indexOf(e);
  if (n !== -1) {
    var r = t[n + 1];
    r && r.focus();
  }
}
function zA(e) {
  var t = ta(e) || [],
    n = t.indexOf(e);
  if (n !== -1) {
    var r = t[n - 1];
    r && r.focus();
  }
}
var St = {
    END: "End",
    ENTER: "Enter",
    HOME: "Home",
    SPACE: " ",
    SPACE_DEPRECATED: "Spacebar",
    UP: "ArrowUp",
    DOWN: "ArrowDown",
    LEFT: "ArrowLeft",
    RIGHT: "ArrowRight",
  },
  BA = ["toggleExpanded", "className"],
  $A = function (t) {
    var n = t.toggleExpanded,
      r = t.className,
      i = r === void 0 ? "accordion__button" : r,
      o = ea(t, BA),
      s = function (l) {
        var u = l.key;
        if (
          ((u === St.ENTER || u === St.SPACE || u === St.SPACE_DEPRECATED) &&
            (l.preventDefault(), n()),
          l.target instanceof HTMLElement)
        )
          switch (u) {
            case St.HOME: {
              l.preventDefault(), DA(l.target);
              break;
            }
            case St.END: {
              l.preventDefault(), jA(l.target);
              break;
            }
            case St.LEFT:
            case St.UP: {
              l.preventDefault(), zA(l.target);
              break;
            }
            case St.RIGHT:
            case St.DOWN: {
              l.preventDefault(), FA(l.target);
              break;
            }
          }
      };
    return (
      o.id && _i(o.id),
      C.createElement(
        "div",
        vt({ className: i }, o, {
          role: "button",
          tabIndex: 0,
          onClick: n,
          onKeyDown: s,
          "data-accordion-component": "AccordionItemButton",
        })
      )
    );
  },
  UA = function (t) {
    return C.createElement(Hi, null, function (n) {
      var r = n.toggleExpanded,
        i = n.buttonAttributes;
      return C.createElement($A, vt({ toggleExpanded: r }, t, i));
    });
  },
  HA = { className: "accordion__heading", "aria-level": 3 },
  WA = `AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”

`,
  Py = (function (e) {
    Xc(n, e);
    var t = Qc(n);
    function n() {
      var r;
      Zs(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return (
        (r = t.call.apply(t, [this].concat(o))),
        q(it(r), "ref", void 0),
        q(it(r), "setRef", function (a) {
          r.ref = a;
        }),
        r
      );
    }
    return (
      Js(
        n,
        [
          {
            key: "componentDidUpdate",
            value: function () {
              n.VALIDATE(this.ref);
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              n.VALIDATE(this.ref);
            },
          },
          {
            key: "render",
            value: function () {
              return C.createElement(
                "div",
                vt(
                  { "data-accordion-component": "AccordionItemHeading" },
                  this.props,
                  { ref: this.setRef }
                )
              );
            },
          },
        ],
        [
          {
            key: "VALIDATE",
            value: function (i) {
              if (i === void 0) throw new Error("ref is undefined");
              if (
                !(
                  i.childElementCount === 1 &&
                  i.firstElementChild &&
                  i.firstElementChild.getAttribute(
                    "data-accordion-component"
                  ) === "AccordionItemButton"
                )
              )
                throw new Error(WA);
            },
          },
        ]
      ),
      n
    );
  })(C.PureComponent);
q(Py, "defaultProps", HA);
var Cy = function (t) {
  return C.createElement(Hi, null, function (n) {
    var r = n.headingAttributes;
    return t.id && _i(t.id), C.createElement(Py, vt({}, t, r));
  });
};
Cy.displayName = wy.AccordionItemHeading;
var GA = ["className", "region", "id"],
  KA = function (t) {
    var n = t.className,
      r = n === void 0 ? "accordion__panel" : n,
      i = t.region,
      o = t.id,
      s = ea(t, GA),
      a = function (u) {
        var c = u.panelAttributes;
        o && _i(o);
        var f = Tu(
          Tu({}, c),
          {},
          { "aria-labelledby": i ? c["aria-labelledby"] : void 0 }
        );
        return C.createElement(
          "div",
          vt(
            { "data-accordion-component": "AccordionItemPanel", className: r },
            s,
            f,
            { role: i ? "region" : void 0 }
          )
        );
      };
    return C.createElement(Hi, null, a);
  },
  YA = function (t) {
    var n = t.children,
      r = function (o) {
        var s = o.expanded,
          a = o.disabled;
        return C.createElement(
          C.Fragment,
          null,
          n({ expanded: s, disabled: a })
        );
      };
    return C.createElement(Hi, null, r);
  };
function XA(e) {
  return Rt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z",
        },
      },
    ],
  })(e);
}
function QA(e) {
  return Rt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z",
        },
      },
    ],
  })(e);
}
function qA(e) {
  return Rt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
        },
      },
    ],
  })(e);
}
function ZA(e) {
  return Rt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      { tag: "path", attr: { d: "M7 10l5 5 5-5H7z" } },
    ],
  })(e);
}
const JA = [
  {
    icon: k(lx, {}),
    heading: "Best interest rates",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    icon: k(qA, {}),
    heading: "Prevent unstable prices",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    icon: k(XA, {}),
    heading: "Best price on the market",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
];
function eO() {
  const e = ({ expanded: t, onSetClassName: n }) => {
    C.useEffect(() => {
      n(t ? "expanded" : "collapsed");
    }, [t, n]);
  };
  return k("section", {
    className: "v-wrapper",
    id: "values",
    children: R("div", {
      className: "v-container innerWidth paddings flexCenter",
      children: [
        k("div", {
          className: "v-left",
          children: k("div", {
            className: "image-container",
            children: k("img", { src: "./value.png", alt: "value" }),
          }),
        }),
        R("div", {
          className: "flexColStart v-right",
          children: [
            k("span", { className: "orangeText", children: "Our Value" }),
            k("span", {
              className: "primaryText",
              children: "Value We Give to You",
            }),
            R("span", {
              className: "secondaryText",
              children: [
                "We always ready to help by providijng the best services for you.",
                k("br", {}),
                "We beleive a good blace to live can make your life better",
              ],
            }),
            k(MA, {
              allowMultipleExpanded: !1,
              preExpanded: [0],
              className: "accordion",
              children: JA.map((t, n) => {
                const [r, i] = C.useState(null);
                return R(
                  xy,
                  {
                    className: `accordionItem ${r}`,
                    uuid: n,
                    children: [
                      k(Cy, {
                        children: R(UA, {
                          className: "flexCenter accordionButton",
                          children: [
                            k(YA, {
                              children: ({ expanded: o }) =>
                                k(e, { expanded: o, onSetClassName: i }),
                            }),
                            k("div", {
                              className: "flexCenter icon",
                              children: t.icon,
                            }),
                            k("span", {
                              className: "primaryText adjust",
                              children: t.heading,
                            }),
                            k("div", {
                              className: "flexCenter icon",
                              children: k(ZA, { size: 20 }),
                            }),
                          ],
                        }),
                      }),
                      k(KA, {
                        children: k("p", {
                          className: "secondaryText",
                          children: t.detail,
                        }),
                      }),
                    ],
                  },
                  n
                );
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function Gp(e) {
  return Rt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
        },
      },
    ],
  })(e);
}
function tO(e) {
  return Rt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z",
          clipRule: "evenodd",
        },
      },
    ],
  })(e);
}
function nO() {
  return k("section", {
    className: "c-wrapper",
    id: "contact",
    children: R("div", {
      className: "paddings flexCenter innerWidth contact-container ",
      children: [
        R("div", {
          className: "c-left flexColStart",
          children: [
            k("span", { className: "orangeText", children: "Our Contact Us" }),
            k("span", {
              className: "primaryText",
              children: "Easy to contact us",
            }),
            R("span", {
              className: "secondaryText",
              children: [
                "We always ready to help by providijng the best services for you. We beleive a good blace",
                k("br", {}),
                " to live can make your life better",
              ],
            }),
            R("div", {
              className: "flexColStart contactModes",
              children: [
                R("div", {
                  className: "row flexStart",
                  children: [
                    R("div", {
                      className: "flexColCenter mode",
                      children: [
                        R("div", {
                          className: "flexStart",
                          children: [
                            k("div", {
                              className: "icon flexCenter",
                              children: k(QA, { size: 25 }),
                            }),
                            R("div", {
                              className: "flexColStart detail",
                              children: [
                                k("span", {
                                  className: "primaryText",
                                  children: "Call",
                                }),
                                k("span", {
                                  className: "secondaryText",
                                  children: "021 123 145 14",
                                }),
                              ],
                            }),
                          ],
                        }),
                        k("div", {
                          className: "button flexCenter",
                          children: "Call Now",
                        }),
                      ],
                    }),
                    R("div", {
                      className: "flexColCenter mode",
                      children: [
                        R("div", {
                          className: "flexStart",
                          children: [
                            k("div", {
                              className: "icon flexCenter",
                              children: k(Gp, { size: 25 }),
                            }),
                            R("div", {
                              className: "flexColStart detail",
                              children: [
                                k("span", {
                                  className: "primaryText",
                                  children: "Chat",
                                }),
                                k("span", {
                                  className: "secondaryText",
                                  children: "021 123 145 14",
                                }),
                              ],
                            }),
                          ],
                        }),
                        k("div", {
                          className: "button flexCenter",
                          children: "Chat Now",
                        }),
                      ],
                    }),
                  ],
                }),
                R("div", {
                  className: "flexStart row",
                  children: [
                    R("div", {
                      className: "flexColCenter mode",
                      children: [
                        R("div", {
                          className: "flexStart",
                          children: [
                            k("div", {
                              className: "icon flexCenter",
                              children: k(Gp, { size: 25 }),
                            }),
                            R("div", {
                              className: "flexColStart detail",
                              children: [
                                k("span", {
                                  className: "primaryText",
                                  children: "Video Call",
                                }),
                                k("span", {
                                  className: "secondaryText",
                                  children: "021 123 145 14",
                                }),
                              ],
                            }),
                          ],
                        }),
                        k("div", {
                          className: "button flexCenter",
                          children: "Video Call Now",
                        }),
                      ],
                    }),
                    R("div", {
                      className: "flexColCenter mode",
                      children: [
                        R("div", {
                          className: "flexStart",
                          children: [
                            k("div", {
                              className: "icon flexCenter",
                              children: k(tO, { size: 25 }),
                            }),
                            R("div", {
                              className: "flexColStart detail",
                              children: [
                                k("span", {
                                  className: "primaryText",
                                  children: "Message",
                                }),
                                k("span", {
                                  className: "secondaryText",
                                  children: "021 123 145 14",
                                }),
                              ],
                            }),
                          ],
                        }),
                        k("div", {
                          className: "button flexCenter",
                          children: "Message Now",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        k("div", {
          className: "r-left",
          children: k("div", {
            className: "image-container",
            children: k("img", { src: "./contact.jpg", alt: "contactImage" }),
          }),
        }),
      ],
    }),
  });
}
function rO() {
  return k("section", {
    className: "g-wrapper",
    id: "getStart",
    children: k("div", {
      className: "g-container paddings innerWidth flexCenter",
      children: R("div", {
        className: "innerContainer flexColCenter",
        children: [
          k("span", {
            className: "primaryText",
            children: "Get started with Homyz",
          }),
          R("span", {
            className: "secondaryText",
            children: [
              "Subscribe and find super attractive price quotes from us.",
              k("br", {}),
              "Find your residence soon",
            ],
          }),
          k("button", { className: "button", children: "Get Started" }),
        ],
      }),
    }),
  });
}
function iO() {
  return k("section", {
    className: "f-wrapper",
    id: "footer",
    children: R("div", {
      className: "f-container innerWidth paddings flexCenter",
      children: [
        R("div", {
          className: "left-side flexColStart",
          children: [
            k("img", { src: "./logo2.png", alt: "footerLogo", width: 120 }),
            R("span", {
              className: "secondaryText",
              children: [
                "Our vision is to make all people",
                k("br", {}),
                "the best place to live for them.",
              ],
            }),
          ],
        }),
        R("div", {
          className: "right-side flexColStart",
          children: [
            k("span", { className: "primaryText", children: "Information" }),
            k("span", {
              className: "secondaryText",
              children: "145 New York, FL 5467, USA",
            }),
            R("div", {
              className: "f-menu flexCenter",
              children: [
                k("span", { children: "Property" }),
                k("span", { children: "Services" }),
                k("span", { children: "Product" }),
                k("span", { children: "About Us" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function oO() {
  return k(ZS, {
    children: R("div", {
      className: "App",
      children: [
        R("div", {
          children: [
            k("div", { className: "white-gradient" }),
            k(sx, {}),
            k(VT, {}),
          ],
        }),
        k(DT, {}),
        k(mA, {}),
        k(eO, {}),
        k(nO, {}),
        k(rO, {}),
        k(iO, {}),
      ],
    }),
  });
}
tl.createRoot(document.getElementById("root")).render(
  k(W.StrictMode, { children: k(oO, {}) })
);
