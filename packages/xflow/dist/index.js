!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(
        ((t = 'undefined' != typeof globalThis ? globalThis : t || self).XFlow =
          {}),
      )
})(this, function (t) {
  'use strict'
  function e(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, 'default')
      ? t.default
      : t
  }
  var n,
    r = { exports: {} },
    i = {}
  function s() {
    if (n) return i
    n = 1
    var t = Symbol.for('react.element'),
      e = Symbol.for('react.portal'),
      r = Symbol.for('react.fragment'),
      s = Symbol.for('react.strict_mode'),
      o = Symbol.for('react.profiler'),
      a = Symbol.for('react.provider'),
      l = Symbol.for('react.context'),
      c = Symbol.for('react.forward_ref'),
      h = Symbol.for('react.suspense'),
      u = Symbol.for('react.memo'),
      g = Symbol.for('react.lazy'),
      d = Symbol.iterator
    var f = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      p = Object.assign,
      m = {}
    function y(t, e, n) {
      ;(this.props = t),
        (this.context = e),
        (this.refs = m),
        (this.updater = n || f)
    }
    function v() {}
    function b(t, e, n) {
      ;(this.props = t),
        (this.context = e),
        (this.refs = m),
        (this.updater = n || f)
    }
    ;(y.prototype.isReactComponent = {}),
      (y.prototype.setState = function (t, e) {
        if ('object' != typeof t && 'function' != typeof t && null != t)
          throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
          )
        this.updater.enqueueSetState(this, t, e, 'setState')
      }),
      (y.prototype.forceUpdate = function (t) {
        this.updater.enqueueForceUpdate(this, t, 'forceUpdate')
      }),
      (v.prototype = y.prototype)
    var x = (b.prototype = new v())
    ;(x.constructor = b), p(x, y.prototype), (x.isPureReactComponent = !0)
    var w = Array.isArray,
      P = Object.prototype.hasOwnProperty,
      A = { current: null },
      C = { key: !0, ref: !0, __self: !0, __source: !0 }
    function O(e, n, r) {
      var i,
        s = {},
        o = null,
        a = null
      if (null != n)
        for (i in (void 0 !== n.ref && (a = n.ref),
        void 0 !== n.key && (o = '' + n.key),
        n))
          P.call(n, i) && !C.hasOwnProperty(i) && (s[i] = n[i])
      var l = arguments.length - 2
      if (1 === l) s.children = r
      else if (1 < l) {
        for (var c = Array(l), h = 0; h < l; h++) c[h] = arguments[h + 2]
        s.children = c
      }
      if (e && e.defaultProps)
        for (i in (l = e.defaultProps)) void 0 === s[i] && (s[i] = l[i])
      return {
        $$typeof: t,
        type: e,
        key: o,
        ref: a,
        props: s,
        _owner: A.current,
      }
    }
    function E(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === t
    }
    var M = /\/+/g
    function S(t, e) {
      return 'object' == typeof t && null !== t && null != t.key
        ? (function (t) {
            var e = { '=': '=0', ':': '=2' }
            return (
              '$' +
              t.replace(/[=:]/g, function (t) {
                return e[t]
              })
            )
          })('' + t.key)
        : e.toString(36)
    }
    function T(n, r, i, s, o) {
      var a = typeof n
      ;('undefined' !== a && 'boolean' !== a) || (n = null)
      var l = !1
      if (null === n) l = !0
      else
        switch (a) {
          case 'string':
          case 'number':
            l = !0
            break
          case 'object':
            switch (n.$$typeof) {
              case t:
              case e:
                l = !0
            }
        }
      if (l)
        return (
          (o = o((l = n))),
          (n = '' === s ? '.' + S(l, 0) : s),
          w(o)
            ? ((i = ''),
              null != n && (i = n.replace(M, '$&/') + '/'),
              T(o, r, i, '', function (t) {
                return t
              }))
            : null != o &&
              (E(o) &&
                (o = (function (e, n) {
                  return {
                    $$typeof: t,
                    type: e.type,
                    key: n,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  }
                })(
                  o,
                  i +
                    (!o.key || (l && l.key === o.key)
                      ? ''
                      : ('' + o.key).replace(M, '$&/') + '/') +
                    n,
                )),
              r.push(o)),
          1
        )
      if (((l = 0), (s = '' === s ? '.' : s + ':'), w(n)))
        for (var c = 0; c < n.length; c++) {
          var h = s + S((a = n[c]), c)
          l += T(a, r, i, h, o)
        }
      else if (
        ((h = (function (t) {
          return null === t || 'object' != typeof t
            ? null
            : 'function' == typeof (t = (d && t[d]) || t['@@iterator'])
            ? t
            : null
        })(n)),
        'function' == typeof h)
      )
        for (n = h.call(n), c = 0; !(a = n.next()).done; )
          l += T((a = a.value), r, i, (h = s + S(a, c++)), o)
      else if ('object' === a)
        throw (
          ((r = String(n)),
          Error(
            'Objects are not valid as a React child (found: ' +
              ('[object Object]' === r
                ? 'object with keys {' + Object.keys(n).join(', ') + '}'
                : r) +
              '). If you meant to render a collection of children, use an array instead.',
          ))
        )
      return l
    }
    function j(t, e, n) {
      if (null == t) return t
      var r = [],
        i = 0
      return (
        T(t, r, '', '', function (t) {
          return e.call(n, t, i++)
        }),
        r
      )
    }
    function k(t) {
      if (-1 === t._status) {
        var e = t._result
        ;(e = e()).then(
          function (e) {
            ;(0 !== t._status && -1 !== t._status) ||
              ((t._status = 1), (t._result = e))
          },
          function (e) {
            ;(0 !== t._status && -1 !== t._status) ||
              ((t._status = 2), (t._result = e))
          },
        ),
          -1 === t._status && ((t._status = 0), (t._result = e))
      }
      if (1 === t._status) return t._result.default
      throw t._result
    }
    var N = { current: null },
      _ = { transition: null },
      L = {
        ReactCurrentDispatcher: N,
        ReactCurrentBatchConfig: _,
        ReactCurrentOwner: A,
      }
    return (
      (i.Children = {
        map: j,
        forEach: function (t, e, n) {
          j(
            t,
            function () {
              e.apply(this, arguments)
            },
            n,
          )
        },
        count: function (t) {
          var e = 0
          return (
            j(t, function () {
              e++
            }),
            e
          )
        },
        toArray: function (t) {
          return (
            j(t, function (t) {
              return t
            }) || []
          )
        },
        only: function (t) {
          if (!E(t))
            throw Error(
              'React.Children.only expected to receive a single React element child.',
            )
          return t
        },
      }),
      (i.Component = y),
      (i.Fragment = r),
      (i.Profiler = o),
      (i.PureComponent = b),
      (i.StrictMode = s),
      (i.Suspense = h),
      (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
      (i.cloneElement = function (e, n, r) {
        if (null == e)
          throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
              e +
              '.',
          )
        var i = p({}, e.props),
          s = e.key,
          o = e.ref,
          a = e._owner
        if (null != n) {
          if (
            (void 0 !== n.ref && ((o = n.ref), (a = A.current)),
            void 0 !== n.key && (s = '' + n.key),
            e.type && e.type.defaultProps)
          )
            var l = e.type.defaultProps
          for (c in n)
            P.call(n, c) &&
              !C.hasOwnProperty(c) &&
              (i[c] = void 0 === n[c] && void 0 !== l ? l[c] : n[c])
        }
        var c = arguments.length - 2
        if (1 === c) i.children = r
        else if (1 < c) {
          l = Array(c)
          for (var h = 0; h < c; h++) l[h] = arguments[h + 2]
          i.children = l
        }
        return {
          $$typeof: t,
          type: e.type,
          key: s,
          ref: o,
          props: i,
          _owner: a,
        }
      }),
      (i.createContext = function (t) {
        return (
          ((t = {
            $$typeof: l,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }).Provider = { $$typeof: a, _context: t }),
          (t.Consumer = t)
        )
      }),
      (i.createElement = O),
      (i.createFactory = function (t) {
        var e = O.bind(null, t)
        return (e.type = t), e
      }),
      (i.createRef = function () {
        return { current: null }
      }),
      (i.forwardRef = function (t) {
        return { $$typeof: c, render: t }
      }),
      (i.isValidElement = E),
      (i.lazy = function (t) {
        return { $$typeof: g, _payload: { _status: -1, _result: t }, _init: k }
      }),
      (i.memo = function (t, e) {
        return { $$typeof: u, type: t, compare: void 0 === e ? null : e }
      }),
      (i.startTransition = function (t) {
        var e = _.transition
        _.transition = {}
        try {
          t()
        } finally {
          _.transition = e
        }
      }),
      (i.unstable_act = function () {
        throw Error('act(...) is not supported in production builds of React.')
      }),
      (i.useCallback = function (t, e) {
        return N.current.useCallback(t, e)
      }),
      (i.useContext = function (t) {
        return N.current.useContext(t)
      }),
      (i.useDebugValue = function () {}),
      (i.useDeferredValue = function (t) {
        return N.current.useDeferredValue(t)
      }),
      (i.useEffect = function (t, e) {
        return N.current.useEffect(t, e)
      }),
      (i.useId = function () {
        return N.current.useId()
      }),
      (i.useImperativeHandle = function (t, e, n) {
        return N.current.useImperativeHandle(t, e, n)
      }),
      (i.useInsertionEffect = function (t, e) {
        return N.current.useInsertionEffect(t, e)
      }),
      (i.useLayoutEffect = function (t, e) {
        return N.current.useLayoutEffect(t, e)
      }),
      (i.useMemo = function (t, e) {
        return N.current.useMemo(t, e)
      }),
      (i.useReducer = function (t, e, n) {
        return N.current.useReducer(t, e, n)
      }),
      (i.useRef = function (t) {
        return N.current.useRef(t)
      }),
      (i.useState = function (t) {
        return N.current.useState(t)
      }),
      (i.useSyncExternalStore = function (t, e, n) {
        return N.current.useSyncExternalStore(t, e, n)
      }),
      (i.useTransition = function () {
        return N.current.useTransition()
      }),
      (i.version = '18.2.0'),
      i
    )
  }
  !(function (t) {
    t.exports = s()
  })(r)
  var o = e(r.exports),
    a = r.exports.createContext({ graph: null, setGraph: function () {} }),
    l = a.Provider
  a.Consumer
  var c = function () {
    return (
      (c =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
          return t
        }),
      c.apply(this, arguments)
    )
  }
  window.NodeList &&
    !NodeList.prototype.forEach &&
    (NodeList.prototype.forEach = Array.prototype.forEach),
    [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(
      (t) => {
        Object.prototype.hasOwnProperty.call(t, 'append') ||
          Object.defineProperty(t, 'append', {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value(...t) {
              const e = document.createDocumentFragment()
              t.forEach((t) => {
                const n = t instanceof Node
                e.appendChild(n ? t : document.createTextNode(String(t)))
              }),
                this.appendChild(e)
            },
          })
      },
    )
  class h {
    get disposed() {
      return !0 === this._disposed
    }
    dispose() {
      this._disposed = !0
    }
  }
  !(function (t) {
    t.dispose = function () {
      return (t, e, n) => {
        const r = n.value,
          i = t.__proto__
        n.value = function () {
          this.disposed || (r.call(this), i.dispose.call(this))
        }
      }
    }
  })(h || (h = {}))
  class u {
    constructor() {
      ;(this.isDisposed = !1), (this.items = new Set())
    }
    get disposed() {
      return this.isDisposed
    }
    dispose() {
      this.isDisposed ||
        ((this.isDisposed = !0),
        this.items.forEach((t) => {
          t.dispose()
        }),
        this.items.clear())
    }
    contains(t) {
      return this.items.has(t)
    }
    add(t) {
      this.items.add(t)
    }
    remove(t) {
      this.items.delete(t)
    }
    clear() {
      this.items.clear()
    }
  }
  !(function (t) {
    t.from = function (e) {
      const n = new t()
      return (
        e.forEach((t) => {
          n.add(t)
        }),
        n
      )
    }
  })(u || (u = {}))
  var g =
      'object' == typeof global && global && global.Object === Object && global,
    d = 'object' == typeof self && self && self.Object === Object && self,
    f = g || d || Function('return this')(),
    p = f.Symbol,
    m = Object.prototype,
    y = m.hasOwnProperty,
    v = m.toString,
    b = p ? p.toStringTag : void 0
  var x = Object.prototype.toString
  var w = p ? p.toStringTag : void 0
  function P(t) {
    return null == t
      ? void 0 === t
        ? '[object Undefined]'
        : '[object Null]'
      : w && w in Object(t)
      ? (function (t) {
          var e = y.call(t, b),
            n = t[b]
          try {
            t[b] = void 0
            var r = !0
          } catch (t) {}
          var i = v.call(t)
          return r && (e ? (t[b] = n) : delete t[b]), i
        })(t)
      : (function (t) {
          return x.call(t)
        })(t)
  }
  function A(t) {
    return null != t && 'object' == typeof t
  }
  function C(t) {
    return 'symbol' == typeof t || (A(t) && '[object Symbol]' == P(t))
  }
  function O(t) {
    return 'number' == typeof t ? t : C(t) ? NaN : +t
  }
  function E(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
      i[n] = e(t[n], n, t)
    return i
  }
  var M = Array.isArray,
    S = p ? p.prototype : void 0,
    T = S ? S.toString : void 0
  function j(t) {
    if ('string' == typeof t) return t
    if (M(t)) return E(t, j) + ''
    if (C(t)) return T ? T.call(t) : ''
    var e = t + ''
    return '0' == e && 1 / t == -Infinity ? '-0' : e
  }
  function k(t, e) {
    return function (n, r) {
      var i
      if (void 0 === n && void 0 === r) return e
      if ((void 0 !== n && (i = n), void 0 !== r)) {
        if (void 0 === i) return r
        'string' == typeof n || 'string' == typeof r
          ? ((n = j(n)), (r = j(r)))
          : ((n = O(n)), (r = O(r))),
          (i = t(n, r))
      }
      return i
    }
  }
  var N = k(function (t, e) {
      return t + e
    }, 0),
    _ = /\s/
  function L(t) {
    for (var e = t.length; e-- && _.test(t.charAt(e)); );
    return e
  }
  var I = /^\s+/
  function B(t) {
    return t ? t.slice(0, L(t) + 1).replace(I, '') : t
  }
  function R(t) {
    var e = typeof t
    return null != t && ('object' == e || 'function' == e)
  }
  var D = /^[-+]0x[0-9a-f]+$/i,
    V = /^0b[01]+$/i,
    z = /^0o[0-7]+$/i,
    $ = parseInt
  function F(t) {
    if ('number' == typeof t) return t
    if (C(t)) return NaN
    if (R(t)) {
      var e = 'function' == typeof t.valueOf ? t.valueOf() : t
      t = R(e) ? e + '' : e
    }
    if ('string' != typeof t) return 0 === t ? t : +t
    t = B(t)
    var n = V.test(t)
    return n || z.test(t) ? $(t.slice(2), n ? 2 : 8) : D.test(t) ? NaN : +t
  }
  var q = 1 / 0
  function G(t) {
    return t
      ? (t = F(t)) === q || t === -1 / 0
        ? 17976931348623157e292 * (t < 0 ? -1 : 1)
        : t == t
        ? t
        : 0
      : 0 === t
      ? t
      : 0
  }
  function W(t) {
    var e = G(t),
      n = e % 1
    return e == e ? (n ? e - n : e) : 0
  }
  function H(t) {
    return t
  }
  function U(t) {
    if (!R(t)) return !1
    var e = P(t)
    return (
      '[object Function]' == e ||
      '[object GeneratorFunction]' == e ||
      '[object AsyncFunction]' == e ||
      '[object Proxy]' == e
    )
  }
  var J,
    X = f['__core-js_shared__'],
    Y = (J = /[^.]+$/.exec((X && X.keys && X.keys.IE_PROTO) || ''))
      ? 'Symbol(src)_1.' + J
      : ''
  var Z = Function.prototype.toString
  function K(t) {
    if (null != t) {
      try {
        return Z.call(t)
      } catch (t) {}
      try {
        return t + ''
      } catch (t) {}
    }
    return ''
  }
  var Q = /^\[object .+?Constructor\]$/,
    tt = Function.prototype,
    et = Object.prototype,
    nt = tt.toString,
    rt = et.hasOwnProperty,
    it = RegExp(
      '^' +
        nt
          .call(rt)
          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    )
  function st(t) {
    return (
      !(
        !R(t) ||
        (function (t) {
          return !!Y && Y in t
        })(t)
      ) && (U(t) ? it : Q).test(K(t))
    )
  }
  function ot(t, e) {
    var n = (function (t, e) {
      return null == t ? void 0 : t[e]
    })(t, e)
    return st(n) ? n : void 0
  }
  var at = ot(f, 'WeakMap'),
    lt = at && new at(),
    ct = lt
      ? function (t, e) {
          return lt.set(t, e), t
        }
      : H,
    ht = Object.create,
    ut = (function () {
      function t() {}
      return function (e) {
        if (!R(e)) return {}
        if (ht) return ht(e)
        t.prototype = e
        var n = new t()
        return (t.prototype = void 0), n
      }
    })()
  function gt(t) {
    return function () {
      var e = arguments
      switch (e.length) {
        case 0:
          return new t()
        case 1:
          return new t(e[0])
        case 2:
          return new t(e[0], e[1])
        case 3:
          return new t(e[0], e[1], e[2])
        case 4:
          return new t(e[0], e[1], e[2], e[3])
        case 5:
          return new t(e[0], e[1], e[2], e[3], e[4])
        case 6:
          return new t(e[0], e[1], e[2], e[3], e[4], e[5])
        case 7:
          return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
      }
      var n = ut(t.prototype),
        r = t.apply(n, e)
      return R(r) ? r : n
    }
  }
  function dt(t, e, n) {
    switch (n.length) {
      case 0:
        return t.call(e)
      case 1:
        return t.call(e, n[0])
      case 2:
        return t.call(e, n[0], n[1])
      case 3:
        return t.call(e, n[0], n[1], n[2])
    }
    return t.apply(e, n)
  }
  var ft = Math.max
  function pt(t, e, n, r) {
    for (
      var i = -1,
        s = t.length,
        o = n.length,
        a = -1,
        l = e.length,
        c = ft(s - o, 0),
        h = Array(l + c),
        u = !r;
      ++a < l;

    )
      h[a] = e[a]
    for (; ++i < o; ) (u || i < s) && (h[n[i]] = t[i])
    for (; c--; ) h[a++] = t[i++]
    return h
  }
  var mt = Math.max
  function yt(t, e, n, r) {
    for (
      var i = -1,
        s = t.length,
        o = -1,
        a = n.length,
        l = -1,
        c = e.length,
        h = mt(s - a, 0),
        u = Array(h + c),
        g = !r;
      ++i < h;

    )
      u[i] = t[i]
    for (var d = i; ++l < c; ) u[d + l] = e[l]
    for (; ++o < a; ) (g || i < s) && (u[d + n[o]] = t[i++])
    return u
  }
  function vt(t, e) {
    for (var n = t.length, r = 0; n--; ) t[n] === e && ++r
    return r
  }
  function bt() {}
  function xt(t) {
    ;(this.__wrapped__ = t),
      (this.__actions__ = []),
      (this.__dir__ = 1),
      (this.__filtered__ = !1),
      (this.__iteratees__ = []),
      (this.__takeCount__ = 4294967295),
      (this.__views__ = [])
  }
  function wt() {}
  ;(xt.prototype = ut(bt.prototype)), (xt.prototype.constructor = xt)
  var Pt = lt
      ? function (t) {
          return lt.get(t)
        }
      : wt,
    At = {},
    Ct = Object.prototype.hasOwnProperty
  function Ot(t) {
    for (
      var e = t.name + '', n = At[e], r = Ct.call(At, e) ? n.length : 0;
      r--;

    ) {
      var i = n[r],
        s = i.func
      if (null == s || s == t) return i.name
    }
    return e
  }
  function Et(t, e) {
    ;(this.__wrapped__ = t),
      (this.__actions__ = []),
      (this.__chain__ = !!e),
      (this.__index__ = 0),
      (this.__values__ = void 0)
  }
  function Mt(t, e) {
    var n = -1,
      r = t.length
    for (e || (e = Array(r)); ++n < r; ) e[n] = t[n]
    return e
  }
  function St(t) {
    if (t instanceof xt) return t.clone()
    var e = new Et(t.__wrapped__, t.__chain__)
    return (
      (e.__actions__ = Mt(t.__actions__)),
      (e.__index__ = t.__index__),
      (e.__values__ = t.__values__),
      e
    )
  }
  ;(Et.prototype = ut(bt.prototype)), (Et.prototype.constructor = Et)
  var Tt = Object.prototype.hasOwnProperty
  function jt(t) {
    if (A(t) && !M(t) && !(t instanceof xt)) {
      if (t instanceof Et) return t
      if (Tt.call(t, '__wrapped__')) return St(t)
    }
    return new Et(t)
  }
  function kt(t) {
    var e = Ot(t),
      n = jt[e]
    if ('function' != typeof n || !(e in xt.prototype)) return !1
    if (t === n) return !0
    var r = Pt(n)
    return !!r && t === r[0]
  }
  ;(jt.prototype = bt.prototype), (jt.prototype.constructor = jt)
  var Nt = Date.now
  function _t(t) {
    var e = 0,
      n = 0
    return function () {
      var r = Nt(),
        i = 16 - (r - n)
      if (((n = r), i > 0)) {
        if (++e >= 800) return arguments[0]
      } else e = 0
      return t.apply(void 0, arguments)
    }
  }
  var Lt = _t(ct),
    It = /\{\n\/\* \[wrapped with (.+)\] \*/,
    Bt = /,? & /
  var Rt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/
  function Dt(t) {
    return function () {
      return t
    }
  }
  var Vt = (function () {
      try {
        var t = ot(Object, 'defineProperty')
        return t({}, '', {}), t
      } catch (t) {}
    })(),
    zt = Vt
      ? function (t, e) {
          return Vt(t, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: Dt(e),
            writable: !0,
          })
        }
      : H,
    $t = _t(zt)
  function Ft(t, e) {
    for (
      var n = -1, r = null == t ? 0 : t.length;
      ++n < r && !1 !== e(t[n], n, t);

    );
    return t
  }
  function qt(t, e, n, r) {
    for (var i = t.length, s = n + (r ? 1 : -1); r ? s-- : ++s < i; )
      if (e(t[s], s, t)) return s
    return -1
  }
  function Gt(t) {
    return t != t
  }
  function Wt(t, e, n) {
    return e == e
      ? (function (t, e, n) {
          for (var r = n - 1, i = t.length; ++r < i; ) if (t[r] === e) return r
          return -1
        })(t, e, n)
      : qt(t, Gt, n)
  }
  function Ht(t, e) {
    return !!(null == t ? 0 : t.length) && Wt(t, e, 0) > -1
  }
  var Ut = [
    ['ary', 128],
    ['bind', 1],
    ['bindKey', 2],
    ['curry', 8],
    ['curryRight', 16],
    ['flip', 512],
    ['partial', 32],
    ['partialRight', 64],
    ['rearg', 256],
  ]
  function Jt(t, e, n) {
    var r = e + ''
    return $t(
      t,
      (function (t, e) {
        var n = e.length
        if (!n) return t
        var r = n - 1
        return (
          (e[r] = (n > 1 ? '& ' : '') + e[r]),
          (e = e.join(n > 2 ? ', ' : ' ')),
          t.replace(Rt, '{\n/* [wrapped with ' + e + '] */\n')
        )
      })(
        r,
        (function (t, e) {
          return (
            Ft(Ut, function (n) {
              var r = '_.' + n[0]
              e & n[1] && !Ht(t, r) && t.push(r)
            }),
            t.sort()
          )
        })(
          (function (t) {
            var e = t.match(It)
            return e ? e[1].split(Bt) : []
          })(r),
          n,
        ),
      ),
    )
  }
  function Xt(t, e, n, r, i, s, o, a, l, c) {
    var h = 8 & e
    ;(e |= h ? 32 : 64), 4 & (e &= ~(h ? 64 : 32)) || (e &= -4)
    var u = [
        t,
        e,
        i,
        h ? s : void 0,
        h ? o : void 0,
        h ? void 0 : s,
        h ? void 0 : o,
        a,
        l,
        c,
      ],
      g = n.apply(void 0, u)
    return kt(t) && Lt(g, u), (g.placeholder = r), Jt(g, t, e)
  }
  function Yt(t) {
    return t.placeholder
  }
  var Zt = /^(?:0|[1-9]\d*)$/
  function Kt(t, e) {
    var n = typeof t
    return (
      !!(e = null == e ? 9007199254740991 : e) &&
      ('number' == n || ('symbol' != n && Zt.test(t))) &&
      t > -1 &&
      t % 1 == 0 &&
      t < e
    )
  }
  var Qt = Math.min
  function te(t, e) {
    for (var n = t.length, r = Qt(e.length, n), i = Mt(t); r--; ) {
      var s = e[r]
      t[r] = Kt(s, n) ? i[s] : void 0
    }
    return t
  }
  var ee = '__lodash_placeholder__'
  function ne(t, e) {
    for (var n = -1, r = t.length, i = 0, s = []; ++n < r; ) {
      var o = t[n]
      ;(o !== e && o !== ee) || ((t[n] = ee), (s[i++] = n))
    }
    return s
  }
  function re(t, e, n, r, i, s, o, a, l, c) {
    var h = 128 & e,
      u = 1 & e,
      g = 2 & e,
      d = 24 & e,
      p = 512 & e,
      m = g ? void 0 : gt(t)
    return function y() {
      for (var v = arguments.length, b = Array(v), x = v; x--; )
        b[x] = arguments[x]
      if (d)
        var w = Yt(y),
          P = vt(b, w)
      if (
        (r && (b = pt(b, r, i, d)),
        s && (b = yt(b, s, o, d)),
        (v -= P),
        d && v < c)
      ) {
        var A = ne(b, w)
        return Xt(t, e, re, y.placeholder, n, b, A, a, l, c - v)
      }
      var C = u ? n : this,
        O = g ? C[t] : t
      return (
        (v = b.length),
        a ? (b = te(b, a)) : p && v > 1 && b.reverse(),
        h && l < v && (b.length = l),
        this && this !== f && this instanceof y && (O = m || gt(O)),
        O.apply(C, b)
      )
    }
  }
  var ie = '__lodash_placeholder__',
    se = 128,
    oe = Math.min
  var ae = Math.max
  function le(t, e, n, r, i, s, o, a) {
    var l = 2 & e
    if (!l && 'function' != typeof t) throw new TypeError('Expected a function')
    var c = r ? r.length : 0
    if (
      (c || ((e &= -97), (r = i = void 0)),
      (o = void 0 === o ? o : ae(W(o), 0)),
      (a = void 0 === a ? a : W(a)),
      (c -= i ? i.length : 0),
      64 & e)
    ) {
      var h = r,
        u = i
      r = i = void 0
    }
    var g = l ? void 0 : Pt(t),
      d = [t, e, n, r, i, h, u, s, o, a]
    if (
      (g &&
        (function (t, e) {
          var n = t[1],
            r = e[1],
            i = n | r,
            s = i < 131,
            o =
              (r == se && 8 == n) ||
              (r == se && 256 == n && t[7].length <= e[8]) ||
              (384 == r && e[7].length <= e[8] && 8 == n)
          if (!s && !o) return t
          1 & r && ((t[2] = e[2]), (i |= 1 & n ? 0 : 4))
          var a = e[3]
          if (a) {
            var l = t[3]
            ;(t[3] = l ? pt(l, a, e[4]) : a), (t[4] = l ? ne(t[3], ie) : e[4])
          }
          ;(a = e[5]) &&
            ((l = t[5]),
            (t[5] = l ? yt(l, a, e[6]) : a),
            (t[6] = l ? ne(t[5], ie) : e[6])),
            (a = e[7]) && (t[7] = a),
            r & se && (t[8] = null == t[8] ? e[8] : oe(t[8], e[8])),
            null == t[9] && (t[9] = e[9]),
            (t[0] = e[0]),
            (t[1] = i)
        })(d, g),
      (t = d[0]),
      (e = d[1]),
      (n = d[2]),
      (r = d[3]),
      (i = d[4]),
      !(a = d[9] = void 0 === d[9] ? (l ? 0 : t.length) : ae(d[9] - c, 0)) &&
        24 & e &&
        (e &= -25),
      e && 1 != e)
    )
      p =
        8 == e || 16 == e
          ? (function (t, e, n) {
              var r = gt(t)
              return function i() {
                for (
                  var s = arguments.length, o = Array(s), a = s, l = Yt(i);
                  a--;

                )
                  o[a] = arguments[a]
                var c = s < 3 && o[0] !== l && o[s - 1] !== l ? [] : ne(o, l)
                return (s -= c.length) < n
                  ? Xt(
                      t,
                      e,
                      re,
                      i.placeholder,
                      void 0,
                      o,
                      c,
                      void 0,
                      void 0,
                      n - s,
                    )
                  : dt(this && this !== f && this instanceof i ? r : t, this, o)
              }
            })(t, e, a)
          : (32 != e && 33 != e) || i.length
          ? re.apply(void 0, d)
          : (function (t, e, n, r) {
              var i = 1 & e,
                s = gt(t)
              return function e() {
                for (
                  var o = -1,
                    a = arguments.length,
                    l = -1,
                    c = r.length,
                    h = Array(c + a),
                    u = this && this !== f && this instanceof e ? s : t;
                  ++l < c;

                )
                  h[l] = r[l]
                for (; a--; ) h[l++] = arguments[++o]
                return dt(u, i ? n : this, h)
              }
            })(t, e, n, r)
    else
      var p = (function (t, e, n) {
        var r = 1 & e,
          i = gt(t)
        return function e() {
          return (this && this !== f && this instanceof e ? i : t).apply(
            r ? n : this,
            arguments,
          )
        }
      })(t, e, n)
    return Jt((g ? ct : Lt)(p, d), t, e)
  }
  function ce(t, e, n) {
    return (
      (e = n ? void 0 : e),
      le(
        t,
        128,
        void 0,
        void 0,
        void 0,
        void 0,
        (e = t && null == e ? t.length : e),
      )
    )
  }
  function he(t, e, n) {
    '__proto__' == e && Vt
      ? Vt(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (t[e] = n)
  }
  function ue(t, e) {
    return t === e || (t != t && e != e)
  }
  var ge = Object.prototype.hasOwnProperty
  function de(t, e, n) {
    var r = t[e]
    ;(ge.call(t, e) && ue(r, n) && (void 0 !== n || e in t)) || he(t, e, n)
  }
  function fe(t, e, n, r) {
    var i = !n
    n || (n = {})
    for (var s = -1, o = e.length; ++s < o; ) {
      var a = e[s],
        l = r ? r(n[a], t[a], a, n, t) : void 0
      void 0 === l && (l = t[a]), i ? he(n, a, l) : de(n, a, l)
    }
    return n
  }
  var pe = Math.max
  function me(t, e, n) {
    return (
      (e = pe(void 0 === e ? t.length - 1 : e, 0)),
      function () {
        for (
          var r = arguments, i = -1, s = pe(r.length - e, 0), o = Array(s);
          ++i < s;

        )
          o[i] = r[e + i]
        i = -1
        for (var a = Array(e + 1); ++i < e; ) a[i] = r[i]
        return (a[e] = n(o)), dt(t, this, a)
      }
    )
  }
  function ye(t, e) {
    return $t(me(t, e, H), t + '')
  }
  function ve(t) {
    return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
  }
  function be(t) {
    return null != t && ve(t.length) && !U(t)
  }
  function xe(t, e, n) {
    if (!R(n)) return !1
    var r = typeof e
    return (
      !!('number' == r ? be(n) && Kt(e, n.length) : 'string' == r && e in n) &&
      ue(n[e], t)
    )
  }
  function we(t) {
    return ye(function (e, n) {
      var r = -1,
        i = n.length,
        s = i > 1 ? n[i - 1] : void 0,
        o = i > 2 ? n[2] : void 0
      for (
        s = t.length > 3 && 'function' == typeof s ? (i--, s) : void 0,
          o && xe(n[0], n[1], o) && ((s = i < 3 ? void 0 : s), (i = 1)),
          e = Object(e);
        ++r < i;

      ) {
        var a = n[r]
        a && t(e, a, r, s)
      }
      return e
    })
  }
  var Pe = Object.prototype
  function Ae(t) {
    var e = t && t.constructor
    return t === (('function' == typeof e && e.prototype) || Pe)
  }
  function Ce(t, e) {
    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n)
    return r
  }
  function Oe(t) {
    return A(t) && '[object Arguments]' == P(t)
  }
  var Ee = Object.prototype,
    Me = Ee.hasOwnProperty,
    Se = Ee.propertyIsEnumerable,
    Te = Oe(
      (function () {
        return arguments
      })(),
    )
      ? Oe
      : function (t) {
          return A(t) && Me.call(t, 'callee') && !Se.call(t, 'callee')
        }
  function je() {
    return !1
  }
  var ke = 'object' == typeof t && t && !t.nodeType && t,
    Ne =
      ke && 'object' == typeof module && module && !module.nodeType && module,
    _e = Ne && Ne.exports === ke ? f.Buffer : void 0,
    Le = (_e ? _e.isBuffer : void 0) || je,
    Ie = {}
  function Be(t) {
    return function (e) {
      return t(e)
    }
  }
  ;(Ie['[object Float32Array]'] =
    Ie['[object Float64Array]'] =
    Ie['[object Int8Array]'] =
    Ie['[object Int16Array]'] =
    Ie['[object Int32Array]'] =
    Ie['[object Uint8Array]'] =
    Ie['[object Uint8ClampedArray]'] =
    Ie['[object Uint16Array]'] =
    Ie['[object Uint32Array]'] =
      !0),
    (Ie['[object Arguments]'] =
      Ie['[object Array]'] =
      Ie['[object ArrayBuffer]'] =
      Ie['[object Boolean]'] =
      Ie['[object DataView]'] =
      Ie['[object Date]'] =
      Ie['[object Error]'] =
      Ie['[object Function]'] =
      Ie['[object Map]'] =
      Ie['[object Number]'] =
      Ie['[object Object]'] =
      Ie['[object RegExp]'] =
      Ie['[object Set]'] =
      Ie['[object String]'] =
      Ie['[object WeakMap]'] =
        !1)
  var Re = 'object' == typeof t && t && !t.nodeType && t,
    De =
      Re && 'object' == typeof module && module && !module.nodeType && module,
    Ve = De && De.exports === Re && g.process,
    ze = (function () {
      try {
        var t = De && De.require && De.require('util').types
        return t || (Ve && Ve.binding && Ve.binding('util'))
      } catch (t) {}
    })(),
    $e = ze && ze.isTypedArray,
    Fe = $e
      ? Be($e)
      : function (t) {
          return A(t) && ve(t.length) && !!Ie[P(t)]
        },
    qe = Object.prototype.hasOwnProperty
  function Ge(t, e) {
    var n = M(t),
      r = !n && Te(t),
      i = !n && !r && Le(t),
      s = !n && !r && !i && Fe(t),
      o = n || r || i || s,
      a = o ? Ce(t.length, String) : [],
      l = a.length
    for (var c in t)
      (!e && !qe.call(t, c)) ||
        (o &&
          ('length' == c ||
            (i && ('offset' == c || 'parent' == c)) ||
            (s && ('buffer' == c || 'byteLength' == c || 'byteOffset' == c)) ||
            Kt(c, l))) ||
        a.push(c)
    return a
  }
  function We(t, e) {
    return function (n) {
      return t(e(n))
    }
  }
  var He = We(Object.keys, Object),
    Ue = Object.prototype.hasOwnProperty
  function Je(t) {
    if (!Ae(t)) return He(t)
    var e = []
    for (var n in Object(t)) Ue.call(t, n) && 'constructor' != n && e.push(n)
    return e
  }
  function Xe(t) {
    return be(t) ? Ge(t) : Je(t)
  }
  var Ye = Object.prototype.hasOwnProperty,
    Ze = we(function (t, e) {
      if (Ae(e) || be(e)) fe(e, Xe(e), t)
      else for (var n in e) Ye.call(e, n) && de(t, n, e[n])
    })
  var Ke = Object.prototype.hasOwnProperty
  function Qe(t) {
    if (!R(t))
      return (function (t) {
        var e = []
        if (null != t) for (var n in Object(t)) e.push(n)
        return e
      })(t)
    var e = Ae(t),
      n = []
    for (var r in t) ('constructor' != r || (!e && Ke.call(t, r))) && n.push(r)
    return n
  }
  function tn(t) {
    return be(t) ? Ge(t, !0) : Qe(t)
  }
  var en = we(function (t, e) {
      fe(e, tn(e), t)
    }),
    nn = we(function (t, e, n, r) {
      fe(e, tn(e), t, r)
    }),
    rn = we(function (t, e, n, r) {
      fe(e, Xe(e), t, r)
    }),
    sn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    on = /^\w*$/
  function an(t, e) {
    if (M(t)) return !1
    var n = typeof t
    return (
      !(
        'number' != n &&
        'symbol' != n &&
        'boolean' != n &&
        null != t &&
        !C(t)
      ) ||
      on.test(t) ||
      !sn.test(t) ||
      (null != e && t in Object(e))
    )
  }
  var ln = ot(Object, 'create')
  var cn = Object.prototype.hasOwnProperty
  var hn = Object.prototype.hasOwnProperty
  function un(t) {
    var e = -1,
      n = null == t ? 0 : t.length
    for (this.clear(); ++e < n; ) {
      var r = t[e]
      this.set(r[0], r[1])
    }
  }
  function gn(t, e) {
    for (var n = t.length; n--; ) if (ue(t[n][0], e)) return n
    return -1
  }
  ;(un.prototype.clear = function () {
    ;(this.__data__ = ln ? ln(null) : {}), (this.size = 0)
  }),
    (un.prototype.delete = function (t) {
      var e = this.has(t) && delete this.__data__[t]
      return (this.size -= e ? 1 : 0), e
    }),
    (un.prototype.get = function (t) {
      var e = this.__data__
      if (ln) {
        var n = e[t]
        return '__lodash_hash_undefined__' === n ? void 0 : n
      }
      return cn.call(e, t) ? e[t] : void 0
    }),
    (un.prototype.has = function (t) {
      var e = this.__data__
      return ln ? void 0 !== e[t] : hn.call(e, t)
    }),
    (un.prototype.set = function (t, e) {
      var n = this.__data__
      return (
        (this.size += this.has(t) ? 0 : 1),
        (n[t] = ln && void 0 === e ? '__lodash_hash_undefined__' : e),
        this
      )
    })
  var dn = Array.prototype.splice
  function fn(t) {
    var e = -1,
      n = null == t ? 0 : t.length
    for (this.clear(); ++e < n; ) {
      var r = t[e]
      this.set(r[0], r[1])
    }
  }
  ;(fn.prototype.clear = function () {
    ;(this.__data__ = []), (this.size = 0)
  }),
    (fn.prototype.delete = function (t) {
      var e = this.__data__,
        n = gn(e, t)
      return (
        !(n < 0) &&
        (n == e.length - 1 ? e.pop() : dn.call(e, n, 1), --this.size, !0)
      )
    }),
    (fn.prototype.get = function (t) {
      var e = this.__data__,
        n = gn(e, t)
      return n < 0 ? void 0 : e[n][1]
    }),
    (fn.prototype.has = function (t) {
      return gn(this.__data__, t) > -1
    }),
    (fn.prototype.set = function (t, e) {
      var n = this.__data__,
        r = gn(n, t)
      return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
    })
  var pn = ot(f, 'Map')
  function mn(t, e) {
    var n,
      r,
      i = t.__data__
    return (
      'string' == (r = typeof (n = e)) ||
      'number' == r ||
      'symbol' == r ||
      'boolean' == r
        ? '__proto__' !== n
        : null === n
    )
      ? i['string' == typeof e ? 'string' : 'hash']
      : i.map
  }
  function yn(t) {
    var e = -1,
      n = null == t ? 0 : t.length
    for (this.clear(); ++e < n; ) {
      var r = t[e]
      this.set(r[0], r[1])
    }
  }
  ;(yn.prototype.clear = function () {
    ;(this.size = 0),
      (this.__data__ = {
        hash: new un(),
        map: new (pn || fn)(),
        string: new un(),
      })
  }),
    (yn.prototype.delete = function (t) {
      var e = mn(this, t).delete(t)
      return (this.size -= e ? 1 : 0), e
    }),
    (yn.prototype.get = function (t) {
      return mn(this, t).get(t)
    }),
    (yn.prototype.has = function (t) {
      return mn(this, t).has(t)
    }),
    (yn.prototype.set = function (t, e) {
      var n = mn(this, t),
        r = n.size
      return n.set(t, e), (this.size += n.size == r ? 0 : 1), this
    })
  function vn(t, e) {
    if ('function' != typeof t || (null != e && 'function' != typeof e))
      throw new TypeError('Expected a function')
    var n = function () {
      var r = arguments,
        i = e ? e.apply(this, r) : r[0],
        s = n.cache
      if (s.has(i)) return s.get(i)
      var o = t.apply(this, r)
      return (n.cache = s.set(i, o) || s), o
    }
    return (n.cache = new (vn.Cache || yn)()), n
  }
  vn.Cache = yn
  var bn =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    xn = /\\(\\)?/g,
    wn = (function (t) {
      var e = vn(t, function (t) {
          return 500 === n.size && n.clear(), t
        }),
        n = e.cache
      return e
    })(function (t) {
      var e = []
      return (
        46 === t.charCodeAt(0) && e.push(''),
        t.replace(bn, function (t, n, r, i) {
          e.push(r ? i.replace(xn, '$1') : n || t)
        }),
        e
      )
    })
  function Pn(t) {
    return null == t ? '' : j(t)
  }
  function An(t, e) {
    return M(t) ? t : an(t, e) ? [t] : wn(Pn(t))
  }
  function Cn(t) {
    if ('string' == typeof t || C(t)) return t
    var e = t + ''
    return '0' == e && 1 / t == -Infinity ? '-0' : e
  }
  function On(t, e) {
    for (var n = 0, r = (e = An(e, t)).length; null != t && n < r; )
      t = t[Cn(e[n++])]
    return n && n == r ? t : void 0
  }
  function En(t, e, n) {
    var r = null == t ? void 0 : On(t, e)
    return void 0 === r ? n : r
  }
  function Mn(t, e) {
    for (var n = -1, r = e.length, i = Array(r), s = null == t; ++n < r; )
      i[n] = s ? void 0 : En(t, e[n])
    return i
  }
  function Sn(t, e) {
    for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n]
    return t
  }
  var Tn = p ? p.isConcatSpreadable : void 0
  function jn(t) {
    return M(t) || Te(t) || !!(Tn && t && t[Tn])
  }
  function kn(t, e, n, r, i) {
    var s = -1,
      o = t.length
    for (n || (n = jn), i || (i = []); ++s < o; ) {
      var a = t[s]
      e > 0 && n(a)
        ? e > 1
          ? kn(a, e - 1, n, r, i)
          : Sn(i, a)
        : r || (i[i.length] = a)
    }
    return i
  }
  function Nn(t) {
    return (null == t ? 0 : t.length) ? kn(t, 1) : []
  }
  function _n(t) {
    return $t(me(t, void 0, Nn), t + '')
  }
  var Ln = _n(Mn),
    In = We(Object.getPrototypeOf, Object),
    Bn = Function.prototype,
    Rn = Object.prototype,
    Dn = Bn.toString,
    Vn = Rn.hasOwnProperty,
    zn = Dn.call(Object)
  function $n(t) {
    if (!A(t) || '[object Object]' != P(t)) return !1
    var e = In(t)
    if (null === e) return !0
    var n = Vn.call(e, 'constructor') && e.constructor
    return 'function' == typeof n && n instanceof n && Dn.call(n) == zn
  }
  function Fn(t) {
    if (!A(t)) return !1
    var e = P(t)
    return (
      '[object Error]' == e ||
      '[object DOMException]' == e ||
      ('string' == typeof t.message && 'string' == typeof t.name && !$n(t))
    )
  }
  var qn = ye(function (t, e) {
    try {
      return dt(t, void 0, e)
    } catch (t) {
      return Fn(t) ? t : new Error(t)
    }
  })
  function Gn(t, e) {
    var n
    if ('function' != typeof e) throw new TypeError('Expected a function')
    return (
      (t = W(t)),
      function () {
        return (
          --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = void 0), n
        )
      }
    )
  }
  var Wn = ye(function (t, e, n) {
    var r = 1
    if (n.length) {
      var i = ne(n, Yt(Wn))
      r |= 32
    }
    return le(t, r, e, n, i)
  })
  Wn.placeholder = {}
  var Hn = _n(function (t, e) {
      return (
        Ft(e, function (e) {
          ;(e = Cn(e)), he(t, e, Wn(t[e], t))
        }),
        t
      )
    }),
    Un = ye(function (t, e, n) {
      var r = 3
      if (n.length) {
        var i = ne(n, Yt(Un))
        r |= 32
      }
      return le(e, r, t, n, i)
    })
  function Jn(t, e, n) {
    var r = -1,
      i = t.length
    e < 0 && (e = -e > i ? 0 : i + e),
      (n = n > i ? i : n) < 0 && (n += i),
      (i = e > n ? 0 : (n - e) >>> 0),
      (e >>>= 0)
    for (var s = Array(i); ++r < i; ) s[r] = t[r + e]
    return s
  }
  function Xn(t, e, n) {
    var r = t.length
    return (n = void 0 === n ? r : n), !e && n >= r ? t : Jn(t, e, n)
  }
  Un.placeholder = {}
  var Yn = RegExp(
    '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]',
  )
  function Zn(t) {
    return Yn.test(t)
  }
  var Kn = '[\\ud800-\\udfff]',
    Qn = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    tr = '\\ud83c[\\udffb-\\udfff]',
    er = '[^\\ud800-\\udfff]',
    nr = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rr = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    ir = '(?:' + Qn + '|' + tr + ')' + '?',
    sr = '[\\ufe0e\\ufe0f]?',
    or =
      sr +
      ir +
      ('(?:\\u200d(?:' + [er, nr, rr].join('|') + ')' + sr + ir + ')*'),
    ar = '(?:' + [er + Qn + '?', Qn, nr, rr, Kn].join('|') + ')',
    lr = RegExp(tr + '(?=' + tr + ')|' + ar + or, 'g')
  function cr(t) {
    return Zn(t)
      ? (function (t) {
          return t.match(lr) || []
        })(t)
      : (function (t) {
          return t.split('')
        })(t)
  }
  function hr(t) {
    return function (e) {
      var n = Zn((e = Pn(e))) ? cr(e) : void 0,
        r = n ? n[0] : e.charAt(0),
        i = n ? Xn(n, 1).join('') : e.slice(1)
      return r[t]() + i
    }
  }
  var ur = hr('toUpperCase')
  function gr(t) {
    return ur(Pn(t).toLowerCase())
  }
  function dr(t, e, n, r) {
    var i = -1,
      s = null == t ? 0 : t.length
    for (r && s && (n = t[++i]); ++i < s; ) n = e(n, t[i], i, t)
    return n
  }
  function fr(t) {
    return function (e) {
      return null == t ? void 0 : t[e]
    }
  }
  var pr = fr({
      À: 'A',
      Á: 'A',
      Â: 'A',
      Ã: 'A',
      Ä: 'A',
      Å: 'A',
      à: 'a',
      á: 'a',
      â: 'a',
      ã: 'a',
      ä: 'a',
      å: 'a',
      Ç: 'C',
      ç: 'c',
      Ð: 'D',
      ð: 'd',
      È: 'E',
      É: 'E',
      Ê: 'E',
      Ë: 'E',
      è: 'e',
      é: 'e',
      ê: 'e',
      ë: 'e',
      Ì: 'I',
      Í: 'I',
      Î: 'I',
      Ï: 'I',
      ì: 'i',
      í: 'i',
      î: 'i',
      ï: 'i',
      Ñ: 'N',
      ñ: 'n',
      Ò: 'O',
      Ó: 'O',
      Ô: 'O',
      Õ: 'O',
      Ö: 'O',
      Ø: 'O',
      ò: 'o',
      ó: 'o',
      ô: 'o',
      õ: 'o',
      ö: 'o',
      ø: 'o',
      Ù: 'U',
      Ú: 'U',
      Û: 'U',
      Ü: 'U',
      ù: 'u',
      ú: 'u',
      û: 'u',
      ü: 'u',
      Ý: 'Y',
      ý: 'y',
      ÿ: 'y',
      Æ: 'Ae',
      æ: 'ae',
      Þ: 'Th',
      þ: 'th',
      ß: 'ss',
      Ā: 'A',
      Ă: 'A',
      Ą: 'A',
      ā: 'a',
      ă: 'a',
      ą: 'a',
      Ć: 'C',
      Ĉ: 'C',
      Ċ: 'C',
      Č: 'C',
      ć: 'c',
      ĉ: 'c',
      ċ: 'c',
      č: 'c',
      Ď: 'D',
      Đ: 'D',
      ď: 'd',
      đ: 'd',
      Ē: 'E',
      Ĕ: 'E',
      Ė: 'E',
      Ę: 'E',
      Ě: 'E',
      ē: 'e',
      ĕ: 'e',
      ė: 'e',
      ę: 'e',
      ě: 'e',
      Ĝ: 'G',
      Ğ: 'G',
      Ġ: 'G',
      Ģ: 'G',
      ĝ: 'g',
      ğ: 'g',
      ġ: 'g',
      ģ: 'g',
      Ĥ: 'H',
      Ħ: 'H',
      ĥ: 'h',
      ħ: 'h',
      Ĩ: 'I',
      Ī: 'I',
      Ĭ: 'I',
      Į: 'I',
      İ: 'I',
      ĩ: 'i',
      ī: 'i',
      ĭ: 'i',
      į: 'i',
      ı: 'i',
      Ĵ: 'J',
      ĵ: 'j',
      Ķ: 'K',
      ķ: 'k',
      ĸ: 'k',
      Ĺ: 'L',
      Ļ: 'L',
      Ľ: 'L',
      Ŀ: 'L',
      Ł: 'L',
      ĺ: 'l',
      ļ: 'l',
      ľ: 'l',
      ŀ: 'l',
      ł: 'l',
      Ń: 'N',
      Ņ: 'N',
      Ň: 'N',
      Ŋ: 'N',
      ń: 'n',
      ņ: 'n',
      ň: 'n',
      ŋ: 'n',
      Ō: 'O',
      Ŏ: 'O',
      Ő: 'O',
      ō: 'o',
      ŏ: 'o',
      ő: 'o',
      Ŕ: 'R',
      Ŗ: 'R',
      Ř: 'R',
      ŕ: 'r',
      ŗ: 'r',
      ř: 'r',
      Ś: 'S',
      Ŝ: 'S',
      Ş: 'S',
      Š: 'S',
      ś: 's',
      ŝ: 's',
      ş: 's',
      š: 's',
      Ţ: 'T',
      Ť: 'T',
      Ŧ: 'T',
      ţ: 't',
      ť: 't',
      ŧ: 't',
      Ũ: 'U',
      Ū: 'U',
      Ŭ: 'U',
      Ů: 'U',
      Ű: 'U',
      Ų: 'U',
      ũ: 'u',
      ū: 'u',
      ŭ: 'u',
      ů: 'u',
      ű: 'u',
      ų: 'u',
      Ŵ: 'W',
      ŵ: 'w',
      Ŷ: 'Y',
      ŷ: 'y',
      Ÿ: 'Y',
      Ź: 'Z',
      Ż: 'Z',
      Ž: 'Z',
      ź: 'z',
      ż: 'z',
      ž: 'z',
      Ĳ: 'IJ',
      ĳ: 'ij',
      Œ: 'Oe',
      œ: 'oe',
      ŉ: "'n",
      ſ: 's',
    }),
    mr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    yr = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g')
  function vr(t) {
    return (t = Pn(t)) && t.replace(mr, pr).replace(yr, '')
  }
  var br = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g
  var xr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
  var wr = '\\u2700-\\u27bf',
    Pr = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    Ar = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    Cr =
      '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    Or = '[' + Cr + ']',
    Er = '\\d+',
    Mr = '[\\u2700-\\u27bf]',
    Sr = '[' + Pr + ']',
    Tr = '[^\\ud800-\\udfff' + Cr + Er + wr + Pr + Ar + ']',
    jr = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    kr = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    Nr = '[' + Ar + ']',
    _r = '(?:' + Sr + '|' + Tr + ')',
    Lr = '(?:' + Nr + '|' + Tr + ')',
    Ir = "(?:['’](?:d|ll|m|re|s|t|ve))?",
    Br = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
    Rr =
      '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?',
    Dr = '[\\ufe0e\\ufe0f]?',
    Vr =
      Dr +
      Rr +
      ('(?:\\u200d(?:' +
        ['[^\\ud800-\\udfff]', jr, kr].join('|') +
        ')' +
        Dr +
        Rr +
        ')*'),
    zr = '(?:' + [Mr, jr, kr].join('|') + ')' + Vr,
    $r = RegExp(
      [
        Nr + '?' + Sr + '+' + Ir + '(?=' + [Or, Nr, '$'].join('|') + ')',
        Lr + '+' + Br + '(?=' + [Or, Nr + _r, '$'].join('|') + ')',
        Nr + '?' + _r + '+' + Ir,
        Nr + '+' + Br,
        '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
        '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
        Er,
        zr,
      ].join('|'),
      'g',
    )
  function Fr(t, e, n) {
    return (
      (t = Pn(t)),
      void 0 === (e = n ? void 0 : e)
        ? (function (t) {
            return xr.test(t)
          })(t)
          ? (function (t) {
              return t.match($r) || []
            })(t)
          : (function (t) {
              return t.match(br) || []
            })(t)
        : t.match(e) || []
    )
  }
  var qr = RegExp("['’]", 'g')
  function Gr(t) {
    return function (e) {
      return dr(Fr(vr(e).replace(qr, '')), t, '')
    }
  }
  var Wr = Gr(function (t, e, n) {
    return (e = e.toLowerCase()), t + (n ? gr(e) : e)
  })
  var Hr = f.isFinite,
    Ur = Math.min
  function Jr(t) {
    var e = Math[t]
    return function (t, n) {
      if (((t = F(t)), (n = null == n ? 0 : Ur(W(n), 292)) && Hr(t))) {
        var r = (Pn(t) + 'e').split('e')
        return +(
          (r = (Pn(e(r[0] + 'e' + (+r[1] + n))) + 'e').split('e'))[0] +
          'e' +
          (+r[1] - n)
        )
      }
      return e(t)
    }
  }
  var Xr = Jr('ceil')
  function Yr(t) {
    var e = jt(t)
    return (e.__chain__ = !0), e
  }
  var Zr = Math.ceil,
    Kr = Math.max
  function Qr(t, e, n) {
    return (
      t == t &&
        (void 0 !== n && (t = t <= n ? t : n),
        void 0 !== e && (t = t >= e ? t : e)),
      t
    )
  }
  function ti(t, e, n) {
    return (
      void 0 === n && ((n = e), (e = void 0)),
      void 0 !== n && (n = (n = F(n)) == n ? n : 0),
      void 0 !== e && (e = (e = F(e)) == e ? e : 0),
      Qr(F(t), e, n)
    )
  }
  function ei(t) {
    var e = (this.__data__ = new fn(t))
    this.size = e.size
  }
  function ni(t, e) {
    return t && fe(e, Xe(e), t)
  }
  ;(ei.prototype.clear = function () {
    ;(this.__data__ = new fn()), (this.size = 0)
  }),
    (ei.prototype.delete = function (t) {
      var e = this.__data__,
        n = e.delete(t)
      return (this.size = e.size), n
    }),
    (ei.prototype.get = function (t) {
      return this.__data__.get(t)
    }),
    (ei.prototype.has = function (t) {
      return this.__data__.has(t)
    }),
    (ei.prototype.set = function (t, e) {
      var n = this.__data__
      if (n instanceof fn) {
        var r = n.__data__
        if (!pn || r.length < 199)
          return r.push([t, e]), (this.size = ++n.size), this
        n = this.__data__ = new yn(r)
      }
      return n.set(t, e), (this.size = n.size), this
    })
  var ri = 'object' == typeof t && t && !t.nodeType && t,
    ii =
      ri && 'object' == typeof module && module && !module.nodeType && module,
    si = ii && ii.exports === ri ? f.Buffer : void 0,
    oi = si ? si.allocUnsafe : void 0
  function ai(t, e) {
    if (e) return t.slice()
    var n = t.length,
      r = oi ? oi(n) : new t.constructor(n)
    return t.copy(r), r
  }
  function li(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = 0, s = []; ++n < r; ) {
      var o = t[n]
      e(o, n, t) && (s[i++] = o)
    }
    return s
  }
  function ci() {
    return []
  }
  var hi = Object.prototype.propertyIsEnumerable,
    ui = Object.getOwnPropertySymbols,
    gi = ui
      ? function (t) {
          return null == t
            ? []
            : ((t = Object(t)),
              li(ui(t), function (e) {
                return hi.call(t, e)
              }))
        }
      : ci
  var di = Object.getOwnPropertySymbols
    ? function (t) {
        for (var e = []; t; ) Sn(e, gi(t)), (t = In(t))
        return e
      }
    : ci
  function fi(t, e, n) {
    var r = e(t)
    return M(t) ? r : Sn(r, n(t))
  }
  function pi(t) {
    return fi(t, Xe, gi)
  }
  function mi(t) {
    return fi(t, tn, di)
  }
  var yi = ot(f, 'DataView'),
    vi = ot(f, 'Promise'),
    bi = ot(f, 'Set'),
    xi = '[object Map]',
    wi = '[object Promise]',
    Pi = '[object Set]',
    Ai = '[object WeakMap]',
    Ci = '[object DataView]',
    Oi = K(yi),
    Ei = K(pn),
    Mi = K(vi),
    Si = K(bi),
    Ti = K(at),
    ji = P
  ;((yi && ji(new yi(new ArrayBuffer(1))) != Ci) ||
    (pn && ji(new pn()) != xi) ||
    (vi && ji(vi.resolve()) != wi) ||
    (bi && ji(new bi()) != Pi) ||
    (at && ji(new at()) != Ai)) &&
    (ji = function (t) {
      var e = P(t),
        n = '[object Object]' == e ? t.constructor : void 0,
        r = n ? K(n) : ''
      if (r)
        switch (r) {
          case Oi:
            return Ci
          case Ei:
            return xi
          case Mi:
            return wi
          case Si:
            return Pi
          case Ti:
            return Ai
        }
      return e
    })
  var ki = ji,
    Ni = Object.prototype.hasOwnProperty
  var _i = f.Uint8Array
  function Li(t) {
    var e = new t.constructor(t.byteLength)
    return new _i(e).set(new _i(t)), e
  }
  var Ii = /\w*$/
  var Bi = p ? p.prototype : void 0,
    Ri = Bi ? Bi.valueOf : void 0
  function Di(t, e) {
    var n = e ? Li(t.buffer) : t.buffer
    return new t.constructor(n, t.byteOffset, t.length)
  }
  function Vi(t, e, n) {
    var r,
      i = t.constructor
    switch (e) {
      case '[object ArrayBuffer]':
        return Li(t)
      case '[object Boolean]':
      case '[object Date]':
        return new i(+t)
      case '[object DataView]':
        return (function (t, e) {
          var n = e ? Li(t.buffer) : t.buffer
          return new t.constructor(n, t.byteOffset, t.byteLength)
        })(t, n)
      case '[object Float32Array]':
      case '[object Float64Array]':
      case '[object Int8Array]':
      case '[object Int16Array]':
      case '[object Int32Array]':
      case '[object Uint8Array]':
      case '[object Uint8ClampedArray]':
      case '[object Uint16Array]':
      case '[object Uint32Array]':
        return Di(t, n)
      case '[object Map]':
      case '[object Set]':
        return new i()
      case '[object Number]':
      case '[object String]':
        return new i(t)
      case '[object RegExp]':
        return (function (t) {
          var e = new t.constructor(t.source, Ii.exec(t))
          return (e.lastIndex = t.lastIndex), e
        })(t)
      case '[object Symbol]':
        return (r = t), Ri ? Object(Ri.call(r)) : {}
    }
  }
  function zi(t) {
    return 'function' != typeof t.constructor || Ae(t) ? {} : ut(In(t))
  }
  var $i = ze && ze.isMap,
    Fi = $i
      ? Be($i)
      : function (t) {
          return A(t) && '[object Map]' == ki(t)
        }
  var qi = ze && ze.isSet,
    Gi = qi
      ? Be(qi)
      : function (t) {
          return A(t) && '[object Set]' == ki(t)
        },
    Wi = '[object Arguments]',
    Hi = '[object Function]',
    Ui = '[object Object]',
    Ji = {}
  function Xi(t, e, n, r, i, s) {
    var o,
      a = 1 & e,
      l = 2 & e,
      c = 4 & e
    if ((n && (o = i ? n(t, r, i, s) : n(t)), void 0 !== o)) return o
    if (!R(t)) return t
    var h = M(t)
    if (h) {
      if (
        ((o = (function (t) {
          var e = t.length,
            n = new t.constructor(e)
          return (
            e &&
              'string' == typeof t[0] &&
              Ni.call(t, 'index') &&
              ((n.index = t.index), (n.input = t.input)),
            n
          )
        })(t)),
        !a)
      )
        return Mt(t, o)
    } else {
      var u = ki(t),
        g = u == Hi || '[object GeneratorFunction]' == u
      if (Le(t)) return ai(t, a)
      if (u == Ui || u == Wi || (g && !i)) {
        if (((o = l || g ? {} : zi(t)), !a))
          return l
            ? (function (t, e) {
                return fe(t, di(t), e)
              })(
                t,
                (function (t, e) {
                  return t && fe(e, tn(e), t)
                })(o, t),
              )
            : (function (t, e) {
                return fe(t, gi(t), e)
              })(t, ni(o, t))
      } else {
        if (!Ji[u]) return i ? t : {}
        o = Vi(t, u, a)
      }
    }
    s || (s = new ei())
    var d = s.get(t)
    if (d) return d
    s.set(t, o),
      Gi(t)
        ? t.forEach(function (r) {
            o.add(Xi(r, e, n, r, t, s))
          })
        : Fi(t) &&
          t.forEach(function (r, i) {
            o.set(i, Xi(r, e, n, i, t, s))
          })
    var f = h ? void 0 : (c ? (l ? mi : pi) : l ? tn : Xe)(t)
    return (
      Ft(f || t, function (r, i) {
        f && (r = t[(i = r)]), de(o, i, Xi(r, e, n, i, t, s))
      }),
      o
    )
  }
  ;(Ji[Wi] =
    Ji['[object Array]'] =
    Ji['[object ArrayBuffer]'] =
    Ji['[object DataView]'] =
    Ji['[object Boolean]'] =
    Ji['[object Date]'] =
    Ji['[object Float32Array]'] =
    Ji['[object Float64Array]'] =
    Ji['[object Int8Array]'] =
    Ji['[object Int16Array]'] =
    Ji['[object Int32Array]'] =
    Ji['[object Map]'] =
    Ji['[object Number]'] =
    Ji[Ui] =
    Ji['[object RegExp]'] =
    Ji['[object Set]'] =
    Ji['[object String]'] =
    Ji['[object Symbol]'] =
    Ji['[object Uint8Array]'] =
    Ji['[object Uint8ClampedArray]'] =
    Ji['[object Uint16Array]'] =
    Ji['[object Uint32Array]'] =
      !0),
    (Ji['[object Error]'] = Ji[Hi] = Ji['[object WeakMap]'] = !1)
  function Yi(t) {
    return Xi(t, 4)
  }
  function Zi(t) {
    return Xi(t, 5)
  }
  function Ki(t) {
    var e = -1,
      n = null == t ? 0 : t.length
    for (this.__data__ = new yn(); ++e < n; ) this.add(t[e])
  }
  function Qi(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
      if (e(t[n], n, t)) return !0
    return !1
  }
  function ts(t, e) {
    return t.has(e)
  }
  ;(Ki.prototype.add = Ki.prototype.push =
    function (t) {
      return this.__data__.set(t, '__lodash_hash_undefined__'), this
    }),
    (Ki.prototype.has = function (t) {
      return this.__data__.has(t)
    })
  function es(t, e, n, r, i, s) {
    var o = 1 & n,
      a = t.length,
      l = e.length
    if (a != l && !(o && l > a)) return !1
    var c = s.get(t),
      h = s.get(e)
    if (c && h) return c == e && h == t
    var u = -1,
      g = !0,
      d = 2 & n ? new Ki() : void 0
    for (s.set(t, e), s.set(e, t); ++u < a; ) {
      var f = t[u],
        p = e[u]
      if (r) var m = o ? r(p, f, u, e, t, s) : r(f, p, u, t, e, s)
      if (void 0 !== m) {
        if (m) continue
        g = !1
        break
      }
      if (d) {
        if (
          !Qi(e, function (t, e) {
            if (!ts(d, e) && (f === t || i(f, t, n, r, s))) return d.push(e)
          })
        ) {
          g = !1
          break
        }
      } else if (f !== p && !i(f, p, n, r, s)) {
        g = !1
        break
      }
    }
    return s.delete(t), s.delete(e), g
  }
  function ns(t) {
    var e = -1,
      n = Array(t.size)
    return (
      t.forEach(function (t, r) {
        n[++e] = [r, t]
      }),
      n
    )
  }
  function rs(t) {
    var e = -1,
      n = Array(t.size)
    return (
      t.forEach(function (t) {
        n[++e] = t
      }),
      n
    )
  }
  var is = p ? p.prototype : void 0,
    ss = is ? is.valueOf : void 0
  var os = Object.prototype.hasOwnProperty
  var as = '[object Arguments]',
    ls = '[object Array]',
    cs = '[object Object]',
    hs = Object.prototype.hasOwnProperty
  function us(t, e, n, r, i, s) {
    var o = M(t),
      a = M(e),
      l = o ? ls : ki(t),
      c = a ? ls : ki(e),
      h = (l = l == as ? cs : l) == cs,
      u = (c = c == as ? cs : c) == cs,
      g = l == c
    if (g && Le(t)) {
      if (!Le(e)) return !1
      ;(o = !0), (h = !1)
    }
    if (g && !h)
      return (
        s || (s = new ei()),
        o || Fe(t)
          ? es(t, e, n, r, i, s)
          : (function (t, e, n, r, i, s, o) {
              switch (n) {
                case '[object DataView]':
                  if (
                    t.byteLength != e.byteLength ||
                    t.byteOffset != e.byteOffset
                  )
                    return !1
                  ;(t = t.buffer), (e = e.buffer)
                case '[object ArrayBuffer]':
                  return !(
                    t.byteLength != e.byteLength || !s(new _i(t), new _i(e))
                  )
                case '[object Boolean]':
                case '[object Date]':
                case '[object Number]':
                  return ue(+t, +e)
                case '[object Error]':
                  return t.name == e.name && t.message == e.message
                case '[object RegExp]':
                case '[object String]':
                  return t == e + ''
                case '[object Map]':
                  var a = ns
                case '[object Set]':
                  var l = 1 & r
                  if ((a || (a = rs), t.size != e.size && !l)) return !1
                  var c = o.get(t)
                  if (c) return c == e
                  ;(r |= 2), o.set(t, e)
                  var h = es(a(t), a(e), r, i, s, o)
                  return o.delete(t), h
                case '[object Symbol]':
                  if (ss) return ss.call(t) == ss.call(e)
              }
              return !1
            })(t, e, l, n, r, i, s)
      )
    if (!(1 & n)) {
      var d = h && hs.call(t, '__wrapped__'),
        f = u && hs.call(e, '__wrapped__')
      if (d || f) {
        var p = d ? t.value() : t,
          m = f ? e.value() : e
        return s || (s = new ei()), i(p, m, n, r, s)
      }
    }
    return (
      !!g &&
      (s || (s = new ei()),
      (function (t, e, n, r, i, s) {
        var o = 1 & n,
          a = pi(t),
          l = a.length
        if (l != pi(e).length && !o) return !1
        for (var c = l; c--; ) {
          var h = a[c]
          if (!(o ? h in e : os.call(e, h))) return !1
        }
        var u = s.get(t),
          g = s.get(e)
        if (u && g) return u == e && g == t
        var d = !0
        s.set(t, e), s.set(e, t)
        for (var f = o; ++c < l; ) {
          var p = t[(h = a[c])],
            m = e[h]
          if (r) var y = o ? r(m, p, h, e, t, s) : r(p, m, h, t, e, s)
          if (!(void 0 === y ? p === m || i(p, m, n, r, s) : y)) {
            d = !1
            break
          }
          f || (f = 'constructor' == h)
        }
        if (d && !f) {
          var v = t.constructor,
            b = e.constructor
          v == b ||
            !('constructor' in t) ||
            !('constructor' in e) ||
            ('function' == typeof v &&
              v instanceof v &&
              'function' == typeof b &&
              b instanceof b) ||
            (d = !1)
        }
        return s.delete(t), s.delete(e), d
      })(t, e, n, r, i, s))
    )
  }
  function gs(t, e, n, r, i) {
    return (
      t === e ||
      (null == t || null == e || (!A(t) && !A(e))
        ? t != t && e != e
        : us(t, e, n, r, gs, i))
    )
  }
  function ds(t, e, n, r) {
    var i = n.length,
      s = i,
      o = !r
    if (null == t) return !s
    for (t = Object(t); i--; ) {
      var a = n[i]
      if (o && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
    }
    for (; ++i < s; ) {
      var l = (a = n[i])[0],
        c = t[l],
        h = a[1]
      if (o && a[2]) {
        if (void 0 === c && !(l in t)) return !1
      } else {
        var u = new ei()
        if (r) var g = r(c, h, l, t, e, u)
        if (!(void 0 === g ? gs(h, c, 3, r, u) : g)) return !1
      }
    }
    return !0
  }
  function fs(t) {
    return t == t && !R(t)
  }
  function ps(t) {
    for (var e = Xe(t), n = e.length; n--; ) {
      var r = e[n],
        i = t[r]
      e[n] = [r, i, fs(i)]
    }
    return e
  }
  function ms(t, e) {
    return function (n) {
      return null != n && n[t] === e && (void 0 !== e || t in Object(n))
    }
  }
  function ys(t) {
    var e = ps(t)
    return 1 == e.length && e[0][2]
      ? ms(e[0][0], e[0][1])
      : function (n) {
          return n === t || ds(n, t, e)
        }
  }
  function vs(t, e) {
    return null != t && e in Object(t)
  }
  function bs(t, e, n) {
    for (var r = -1, i = (e = An(e, t)).length, s = !1; ++r < i; ) {
      var o = Cn(e[r])
      if (!(s = null != t && n(t, o))) break
      t = t[o]
    }
    return s || ++r != i
      ? s
      : !!(i = null == t ? 0 : t.length) && ve(i) && Kt(o, i) && (M(t) || Te(t))
  }
  function xs(t, e) {
    return null != t && bs(t, e, vs)
  }
  function ws(t, e) {
    return an(t) && fs(e)
      ? ms(Cn(t), e)
      : function (n) {
          var r = En(n, t)
          return void 0 === r && r === e ? xs(n, t) : gs(e, r, 3)
        }
  }
  function Ps(t) {
    return function (e) {
      return null == e ? void 0 : e[t]
    }
  }
  function As(t) {
    return an(t)
      ? Ps(Cn(t))
      : (function (t) {
          return function (e) {
            return On(e, t)
          }
        })(t)
  }
  function Cs(t) {
    return 'function' == typeof t
      ? t
      : null == t
      ? H
      : 'object' == typeof t
      ? M(t)
        ? ws(t[0], t[1])
        : ys(t)
      : As(t)
  }
  function Os(t, e, n) {
    var r = n.length
    if (null == t) return !r
    for (t = Object(t); r--; ) {
      var i = n[r],
        s = e[i],
        o = t[i]
      if ((void 0 === o && !(i in t)) || !s(o)) return !1
    }
    return !0
  }
  function Es(t, e, n, r) {
    for (var i = -1, s = null == t ? 0 : t.length; ++i < s; ) {
      var o = t[i]
      e(r, o, n(o), t)
    }
    return r
  }
  function Ms(t) {
    return function (e, n, r) {
      for (var i = -1, s = Object(e), o = r(e), a = o.length; a--; ) {
        var l = o[t ? a : ++i]
        if (!1 === n(s[l], l, s)) break
      }
      return e
    }
  }
  var Ss = Ms()
  function Ts(t, e) {
    return t && Ss(t, e, Xe)
  }
  function js(t, e) {
    return function (n, r) {
      if (null == n) return n
      if (!be(n)) return t(n, r)
      for (
        var i = n.length, s = e ? i : -1, o = Object(n);
        (e ? s-- : ++s < i) && !1 !== r(o[s], s, o);

      );
      return n
    }
  }
  var ks = js(Ts)
  function Ns(t, e, n, r) {
    return (
      ks(t, function (t, i, s) {
        e(r, t, n(t), s)
      }),
      r
    )
  }
  function _s(t, e) {
    return function (n, r) {
      var i = M(n) ? Es : Ns,
        s = e ? e() : {}
      return i(n, t, Cs(r), s)
    }
  }
  var Ls = Object.prototype.hasOwnProperty,
    Is = _s(function (t, e, n) {
      Ls.call(t, n) ? ++t[n] : he(t, n, 1)
    })
  function Bs(t, e, n) {
    var r = le(
      t,
      8,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      (e = n ? void 0 : e),
    )
    return (r.placeholder = Bs.placeholder), r
  }
  Bs.placeholder = {}
  function Rs(t, e, n) {
    var r = le(
      t,
      16,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      (e = n ? void 0 : e),
    )
    return (r.placeholder = Rs.placeholder), r
  }
  Rs.placeholder = {}
  var Ds = function () {
      return f.Date.now()
    },
    Vs = Math.max,
    zs = Math.min
  function $s(t, e, n) {
    var r,
      i,
      s,
      o,
      a,
      l,
      c = 0,
      h = !1,
      u = !1,
      g = !0
    if ('function' != typeof t) throw new TypeError('Expected a function')
    function d(e) {
      var n = r,
        s = i
      return (r = i = void 0), (c = e), (o = t.apply(s, n))
    }
    function f(t) {
      return (c = t), (a = setTimeout(m, e)), h ? d(t) : o
    }
    function p(t) {
      var n = t - l
      return void 0 === l || n >= e || n < 0 || (u && t - c >= s)
    }
    function m() {
      var t = Ds()
      if (p(t)) return y(t)
      a = setTimeout(
        m,
        (function (t) {
          var n = e - (t - l)
          return u ? zs(n, s - (t - c)) : n
        })(t),
      )
    }
    function y(t) {
      return (a = void 0), g && r ? d(t) : ((r = i = void 0), o)
    }
    function v() {
      var t = Ds(),
        n = p(t)
      if (((r = arguments), (i = this), (l = t), n)) {
        if (void 0 === a) return f(l)
        if (u) return clearTimeout(a), (a = setTimeout(m, e)), d(l)
      }
      return void 0 === a && (a = setTimeout(m, e)), o
    }
    return (
      (e = F(e) || 0),
      R(n) &&
        ((h = !!n.leading),
        (s = (u = 'maxWait' in n) ? Vs(F(n.maxWait) || 0, e) : s),
        (g = 'trailing' in n ? !!n.trailing : g)),
      (v.cancel = function () {
        void 0 !== a && clearTimeout(a), (c = 0), (r = l = i = a = void 0)
      }),
      (v.flush = function () {
        return void 0 === a ? o : y(Ds())
      }),
      v
    )
  }
  var Fs = Object.prototype,
    qs = Fs.hasOwnProperty,
    Gs = ye(function (t, e) {
      t = Object(t)
      var n = -1,
        r = e.length,
        i = r > 2 ? e[2] : void 0
      for (i && xe(e[0], e[1], i) && (r = 1); ++n < r; )
        for (var s = e[n], o = tn(s), a = -1, l = o.length; ++a < l; ) {
          var c = o[a],
            h = t[c]
          ;(void 0 === h || (ue(h, Fs[c]) && !qs.call(t, c))) && (t[c] = s[c])
        }
      return t
    })
  function Ws(t, e, n) {
    ;((void 0 !== n && !ue(t[e], n)) || (void 0 === n && !(e in t))) &&
      he(t, e, n)
  }
  function Hs(t) {
    return A(t) && be(t)
  }
  function Us(t, e) {
    if (('constructor' !== e || 'function' != typeof t[e]) && '__proto__' != e)
      return t[e]
  }
  function Js(t) {
    return fe(t, tn(t))
  }
  function Xs(t, e, n, r, i) {
    t !== e &&
      Ss(
        e,
        function (s, o) {
          if ((i || (i = new ei()), R(s)))
            !(function (t, e, n, r, i, s, o) {
              var a = Us(t, n),
                l = Us(e, n),
                c = o.get(l)
              if (c) Ws(t, n, c)
              else {
                var h = s ? s(a, l, n + '', t, e, o) : void 0,
                  u = void 0 === h
                if (u) {
                  var g = M(l),
                    d = !g && Le(l),
                    f = !g && !d && Fe(l)
                  ;(h = l),
                    g || d || f
                      ? M(a)
                        ? (h = a)
                        : Hs(a)
                        ? (h = Mt(a))
                        : d
                        ? ((u = !1), (h = ai(l, !0)))
                        : f
                        ? ((u = !1), (h = Di(l, !0)))
                        : (h = [])
                      : $n(l) || Te(l)
                      ? ((h = a),
                        Te(a) ? (h = Js(a)) : (R(a) && !U(a)) || (h = zi(l)))
                      : (u = !1)
                }
                u && (o.set(l, h), i(h, l, r, s, o), o.delete(l)), Ws(t, n, h)
              }
            })(t, e, o, n, Xs, r, i)
          else {
            var a = r ? r(Us(t, o), s, o + '', t, e, i) : void 0
            void 0 === a && (a = s), Ws(t, o, a)
          }
        },
        tn,
      )
  }
  function Ys(t, e, n, r, i, s) {
    return (
      R(t) && R(e) && (s.set(e, t), Xs(t, e, void 0, Ys, s), s.delete(e)), t
    )
  }
  var Zs = we(function (t, e, n, r) {
      Xs(t, e, n, r)
    }),
    Ks = ye(function (t) {
      return t.push(void 0, Ys), dt(Zs, void 0, t)
    })
  function Qs(t, e, n) {
    if ('function' != typeof t) throw new TypeError('Expected a function')
    return setTimeout(function () {
      t.apply(void 0, n)
    }, e)
  }
  var to = ye(function (t, e) {
      return Qs(t, 1, e)
    }),
    eo = ye(function (t, e, n) {
      return Qs(t, F(e) || 0, n)
    })
  function no(t, e, n) {
    for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
      if (n(e, t[r])) return !0
    return !1
  }
  function ro(t, e, n, r) {
    var i = -1,
      s = Ht,
      o = !0,
      a = t.length,
      l = [],
      c = e.length
    if (!a) return l
    n && (e = E(e, Be(n))),
      r
        ? ((s = no), (o = !1))
        : e.length >= 200 && ((s = ts), (o = !1), (e = new Ki(e)))
    t: for (; ++i < a; ) {
      var h = t[i],
        u = null == n ? h : n(h)
      if (((h = r || 0 !== h ? h : 0), o && u == u)) {
        for (var g = c; g--; ) if (e[g] === u) continue t
        l.push(h)
      } else s(e, u, r) || l.push(h)
    }
    return l
  }
  var io = ye(function (t, e) {
    return Hs(t) ? ro(t, kn(e, 1, Hs, !0)) : []
  })
  function so(t) {
    var e = null == t ? 0 : t.length
    return e ? t[e - 1] : void 0
  }
  var oo = ye(function (t, e) {
      var n = so(e)
      return Hs(n) && (n = void 0), Hs(t) ? ro(t, kn(e, 1, Hs, !0), Cs(n)) : []
    }),
    ao = ye(function (t, e) {
      var n = so(e)
      return (
        Hs(n) && (n = void 0), Hs(t) ? ro(t, kn(e, 1, Hs, !0), void 0, n) : []
      )
    }),
    lo = k(function (t, e) {
      return t / e
    }, 1)
  function co(t, e, n, r) {
    for (
      var i = t.length, s = r ? i : -1;
      (r ? s-- : ++s < i) && e(t[s], s, t);

    );
    return n ? Jn(t, r ? 0 : s, r ? s + 1 : i) : Jn(t, r ? s + 1 : 0, r ? i : s)
  }
  function ho(t) {
    return 'function' == typeof t ? t : H
  }
  function uo(t, e) {
    return (M(t) ? Ft : ks)(t, ho(e))
  }
  function go(t, e) {
    for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t); );
    return t
  }
  var fo = Ms(!0)
  function po(t, e) {
    return t && fo(t, e, Xe)
  }
  var mo = js(po, !0)
  function yo(t, e) {
    return (M(t) ? go : mo)(t, ho(e))
  }
  function vo(t) {
    return function (e) {
      var n = ki(e)
      return '[object Map]' == n
        ? ns(e)
        : '[object Set]' == n
        ? (function (t) {
            var e = -1,
              n = Array(t.size)
            return (
              t.forEach(function (t) {
                n[++e] = [t, t]
              }),
              n
            )
          })(e)
        : (function (t, e) {
            return E(e, function (e) {
              return [e, t[e]]
            })
          })(e, t(e))
    }
  }
  var bo = vo(Xe),
    xo = vo(tn),
    wo = fr({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }),
    Po = /[&<>"']/g,
    Ao = RegExp(Po.source)
  function Co(t) {
    return (t = Pn(t)) && Ao.test(t) ? t.replace(Po, wo) : t
  }
  var Oo = /[\\^$.*+?()[\]{}|]/g,
    Eo = RegExp(Oo.source)
  function Mo(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
      if (!e(t[n], n, t)) return !1
    return !0
  }
  function So(t, e) {
    var n = !0
    return (
      ks(t, function (t, r, i) {
        return (n = !!e(t, r, i))
      }),
      n
    )
  }
  function To(t) {
    return t ? Qr(W(t), 0, 4294967295) : 0
  }
  function jo(t, e) {
    var n = []
    return (
      ks(t, function (t, r, i) {
        e(t, r, i) && n.push(t)
      }),
      n
    )
  }
  function ko(t) {
    return function (e, n, r) {
      var i = Object(e)
      if (!be(e)) {
        var s = Cs(n)
        ;(e = Xe(e)),
          (n = function (t) {
            return s(i[t], t, i)
          })
      }
      var o = t(e, n, r)
      return o > -1 ? i[s ? e[o] : o] : void 0
    }
  }
  var No = Math.max
  function _o(t, e, n) {
    var r = null == t ? 0 : t.length
    if (!r) return -1
    var i = null == n ? 0 : W(n)
    return i < 0 && (i = No(r + i, 0)), qt(t, Cs(e), i)
  }
  var Lo = ko(_o)
  function Io(t, e, n) {
    var r
    return (
      n(t, function (t, n, i) {
        if (e(t, n, i)) return (r = n), !1
      }),
      r
    )
  }
  var Bo = Math.max,
    Ro = Math.min
  function Do(t, e, n) {
    var r = null == t ? 0 : t.length
    if (!r) return -1
    var i = r - 1
    return (
      void 0 !== n && ((i = W(n)), (i = n < 0 ? Bo(r + i, 0) : Ro(i, r - 1))),
      qt(t, Cs(e), i, !0)
    )
  }
  var Vo = ko(Do)
  function zo(t) {
    return t && t.length ? t[0] : void 0
  }
  function $o(t, e) {
    var n = -1,
      r = be(t) ? Array(t.length) : []
    return (
      ks(t, function (t, i, s) {
        r[++n] = e(t, i, s)
      }),
      r
    )
  }
  function Fo(t, e) {
    return (M(t) ? E : $o)(t, Cs(e))
  }
  var qo = Jr('floor')
  function Go(t) {
    return _n(function (e) {
      var n = e.length,
        r = n,
        i = Et.prototype.thru
      for (t && e.reverse(); r--; ) {
        var s = e[r]
        if ('function' != typeof s) throw new TypeError('Expected a function')
        if (i && !o && 'wrapper' == Ot(s)) var o = new Et([], !0)
      }
      for (r = o ? r : n; ++r < n; ) {
        var a = Ot((s = e[r])),
          l = 'wrapper' == a ? Pt(s) : void 0
        o =
          l && kt(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9]
            ? o[Ot(l[0])].apply(o, l[3])
            : 1 == s.length && kt(s)
            ? o[a]()
            : o.thru(s)
      }
      return function () {
        var t = arguments,
          r = t[0]
        if (o && 1 == t.length && M(r)) return o.plant(r).value()
        for (var i = 0, s = n ? e[i].apply(this, t) : r; ++i < n; )
          s = e[i].call(this, s)
        return s
      }
    })
  }
  var Wo = Go(),
    Ho = Go(!0)
  function Uo(t, e) {
    return li(e, function (e) {
      return U(t[e])
    })
  }
  var Jo = Object.prototype.hasOwnProperty,
    Xo = _s(function (t, e, n) {
      Jo.call(t, n) ? t[n].push(e) : he(t, n, [e])
    })
  function Yo(t, e) {
    return t > e
  }
  function Zo(t) {
    return function (e, n) {
      return (
        ('string' == typeof e && 'string' == typeof n) ||
          ((e = F(e)), (n = F(n))),
        t(e, n)
      )
    }
  }
  var Ko = Zo(Yo),
    Qo = Zo(function (t, e) {
      return t >= e
    }),
    ta = Object.prototype.hasOwnProperty
  function ea(t, e) {
    return null != t && ta.call(t, e)
  }
  function na(t, e) {
    return null != t && bs(t, e, ea)
  }
  var ra = Math.max,
    ia = Math.min
  function sa(t) {
    return 'string' == typeof t || (!M(t) && A(t) && '[object String]' == P(t))
  }
  function oa(t, e) {
    return E(e, function (e) {
      return t[e]
    })
  }
  function aa(t) {
    return null == t ? [] : oa(t, Xe(t))
  }
  var la = Math.max
  var ca = Math.max
  var ha = Math.min
  function ua(t, e, n) {
    for (
      var r = n ? no : Ht,
        i = t[0].length,
        s = t.length,
        o = s,
        a = Array(s),
        l = 1 / 0,
        c = [];
      o--;

    ) {
      var h = t[o]
      o && e && (h = E(h, Be(e))),
        (l = ha(h.length, l)),
        (a[o] =
          !n && (e || (i >= 120 && h.length >= 120)) ? new Ki(o && h) : void 0)
    }
    h = t[0]
    var u = -1,
      g = a[0]
    t: for (; ++u < i && c.length < l; ) {
      var d = h[u],
        f = e ? e(d) : d
      if (((d = n || 0 !== d ? d : 0), !(g ? ts(g, f) : r(c, f, n)))) {
        for (o = s; --o; ) {
          var p = a[o]
          if (!(p ? ts(p, f) : r(t[o], f, n))) continue t
        }
        g && g.push(f), c.push(d)
      }
    }
    return c
  }
  function ga(t) {
    return Hs(t) ? t : []
  }
  var da = ye(function (t) {
      var e = E(t, ga)
      return e.length && e[0] === t[0] ? ua(e) : []
    }),
    fa = ye(function (t) {
      var e = so(t),
        n = E(t, ga)
      return (
        e === so(n) ? (e = void 0) : n.pop(),
        n.length && n[0] === t[0] ? ua(n, Cs(e)) : []
      )
    }),
    pa = ye(function (t) {
      var e = so(t),
        n = E(t, ga)
      return (
        (e = 'function' == typeof e ? e : void 0) && n.pop(),
        n.length && n[0] === t[0] ? ua(n, void 0, e) : []
      )
    })
  function ma(t, e) {
    return function (n, r) {
      return (function (t, e, n, r) {
        return (
          Ts(t, function (t, i, s) {
            e(r, n(t), i, s)
          }),
          r
        )
      })(n, t, e(r), {})
    }
  }
  var ya = Object.prototype.toString,
    va = ma(function (t, e, n) {
      null != e && 'function' != typeof e.toString && (e = ya.call(e)),
        (t[e] = n)
    }, Dt(H)),
    ba = Object.prototype,
    xa = ba.hasOwnProperty,
    wa = ba.toString,
    Pa = ma(function (t, e, n) {
      null != e && 'function' != typeof e.toString && (e = wa.call(e)),
        xa.call(t, e) ? t[e].push(n) : (t[e] = [n])
    }, Cs)
  function Aa(t, e) {
    return e.length < 2 ? t : On(t, Jn(e, 0, -1))
  }
  function Ca(t, e, n) {
    var r = null == (t = Aa(t, (e = An(e, t)))) ? t : t[Cn(so(e))]
    return null == r ? void 0 : dt(r, t, n)
  }
  var Oa = ye(Ca),
    Ea = ye(function (t, e, n) {
      var r = -1,
        i = 'function' == typeof e,
        s = be(t) ? Array(t.length) : []
      return (
        ks(t, function (t) {
          s[++r] = i ? dt(e, t, n) : Ca(t, e, n)
        }),
        s
      )
    })
  var Ma = ze && ze.isArrayBuffer,
    Sa = Ma
      ? Be(Ma)
      : function (t) {
          return A(t) && '[object ArrayBuffer]' == P(t)
        }
  var Ta = ze && ze.isDate,
    ja = Ta
      ? Be(Ta)
      : function (t) {
          return A(t) && '[object Date]' == P(t)
        }
  var ka = Object.prototype.hasOwnProperty
  function Na(t) {
    if (null == t) return !0
    if (
      be(t) &&
      (M(t) ||
        'string' == typeof t ||
        'function' == typeof t.splice ||
        Le(t) ||
        Fe(t) ||
        Te(t))
    )
      return !t.length
    var e = ki(t)
    if ('[object Map]' == e || '[object Set]' == e) return !t.size
    if (Ae(t)) return !Je(t).length
    for (var n in t) if (ka.call(t, n)) return !1
    return !0
  }
  function _a(t, e) {
    return gs(t, e)
  }
  var La = f.isFinite
  function Ia(t) {
    return 'number' == typeof t && t == W(t)
  }
  function Ba(t) {
    return 'number' == typeof t || (A(t) && '[object Number]' == P(t))
  }
  var Ra = X ? U : je
  var Da = ze && ze.isRegExp,
    Va = Da
      ? Be(Da)
      : function (t) {
          return A(t) && '[object RegExp]' == P(t)
        },
    za = 9007199254740991
  var $a = Array.prototype.join
  var Fa = Gr(function (t, e, n) {
      return t + (n ? '-' : '') + e.toLowerCase()
    }),
    qa = _s(function (t, e, n) {
      he(t, n, e)
    })
  var Ga = Math.max,
    Wa = Math.min
  var Ha = Gr(function (t, e, n) {
      return t + (n ? ' ' : '') + e.toLowerCase()
    }),
    Ua = hr('toLowerCase')
  function Ja(t, e) {
    return t < e
  }
  var Xa = Zo(Ja),
    Ya = Zo(function (t, e) {
      return t <= e
    })
  function Za(t, e, n) {
    for (var r = -1, i = t.length; ++r < i; ) {
      var s = t[r],
        o = e(s)
      if (null != o && (void 0 === a ? o == o && !C(o) : n(o, a)))
        var a = o,
          l = s
    }
    return l
  }
  function Ka(t) {
    return t && t.length ? Za(t, H, Yo) : void 0
  }
  function Qa(t, e) {
    for (var n, r = -1, i = t.length; ++r < i; ) {
      var s = e(t[r])
      void 0 !== s && (n = void 0 === n ? s : n + s)
    }
    return n
  }
  function tl(t, e) {
    var n = null == t ? 0 : t.length
    return n ? Qa(t, e) / n : NaN
  }
  var el = we(function (t, e, n) {
      Xs(t, e, n)
    }),
    nl = ye(function (t, e) {
      return function (n) {
        return Ca(n, t, e)
      }
    }),
    rl = ye(function (t, e) {
      return function (n) {
        return Ca(t, n, e)
      }
    })
  function il(t, e, n) {
    var r = Xe(e),
      i = Uo(e, r),
      s = !(R(n) && 'chain' in n && !n.chain),
      o = U(t)
    return (
      Ft(i, function (n) {
        var r = e[n]
        ;(t[n] = r),
          o &&
            (t.prototype[n] = function () {
              var e = this.__chain__
              if (s || e) {
                var n = t(this.__wrapped__),
                  i = (n.__actions__ = Mt(this.__actions__))
                return (
                  i.push({ func: r, args: arguments, thisArg: t }),
                  (n.__chain__ = e),
                  n
                )
              }
              return r.apply(t, Sn([this.value()], arguments))
            })
      }),
      t
    )
  }
  var sl = k(function (t, e) {
    return t * e
  }, 1)
  function ol(t) {
    if ('function' != typeof t) throw new TypeError('Expected a function')
    return function () {
      var e = arguments
      switch (e.length) {
        case 0:
          return !t.call(this)
        case 1:
          return !t.call(this, e[0])
        case 2:
          return !t.call(this, e[0], e[1])
        case 3:
          return !t.call(this, e[0], e[1], e[2])
      }
      return !t.apply(this, e)
    }
  }
  var al = p ? p.iterator : void 0
  function ll(t) {
    if (!t) return []
    if (be(t)) return sa(t) ? cr(t) : Mt(t)
    if (al && t[al])
      return (function (t) {
        for (var e, n = []; !(e = t.next()).done; ) n.push(e.value)
        return n
      })(t[al]())
    var e = ki(t)
    return ('[object Map]' == e ? ns : '[object Set]' == e ? rs : aa)(t)
  }
  function cl(t, e) {
    var n = t.length
    if (n) return Kt((e += e < 0 ? n : 0), n) ? t[e] : void 0
  }
  function hl(t, e) {
    return null == (t = Aa(t, (e = An(e, t)))) || delete t[Cn(so(e))]
  }
  function ul(t) {
    return $n(t) ? void 0 : t
  }
  var gl = _n(function (t, e) {
    var n = {}
    if (null == t) return n
    var r = !1
    ;(e = E(e, function (e) {
      return (e = An(e, t)), r || (r = e.length > 1), e
    })),
      fe(t, mi(t), n),
      r && (n = Xi(n, 7, ul))
    for (var i = e.length; i--; ) hl(n, e[i])
    return n
  })
  function dl(t, e, n, r) {
    if (!R(t)) return t
    for (
      var i = -1, s = (e = An(e, t)).length, o = s - 1, a = t;
      null != a && ++i < s;

    ) {
      var l = Cn(e[i]),
        c = n
      if ('__proto__' === l || 'constructor' === l || 'prototype' === l)
        return t
      if (i != o) {
        var h = a[l]
        void 0 === (c = r ? r(h, l, a) : void 0) &&
          (c = R(h) ? h : Kt(e[i + 1]) ? [] : {})
      }
      de(a, l, c), (a = a[l])
    }
    return t
  }
  function fl(t, e, n) {
    for (var r = -1, i = e.length, s = {}; ++r < i; ) {
      var o = e[r],
        a = On(t, o)
      n(a, o) && dl(s, An(o, t), a)
    }
    return s
  }
  function pl(t, e) {
    if (null == t) return {}
    var n = E(mi(t), function (t) {
      return [t]
    })
    return (
      (e = Cs(e)),
      fl(t, n, function (t, n) {
        return e(t, n[0])
      })
    )
  }
  function ml(t, e) {
    if (t !== e) {
      var n = void 0 !== t,
        r = null === t,
        i = t == t,
        s = C(t),
        o = void 0 !== e,
        a = null === e,
        l = e == e,
        c = C(e)
      if (
        (!a && !c && !s && t > e) ||
        (s && o && l && !a && !c) ||
        (r && o && l) ||
        (!n && l) ||
        !i
      )
        return 1
      if (
        (!r && !s && !c && t < e) ||
        (c && n && i && !r && !s) ||
        (a && n && i) ||
        (!o && i) ||
        !l
      )
        return -1
    }
    return 0
  }
  function yl(t, e, n) {
    e = e.length
      ? E(e, function (t) {
          return M(t)
            ? function (e) {
                return On(e, 1 === t.length ? t[0] : t)
              }
            : t
        })
      : [H]
    var r = -1
    e = E(e, Be(Cs))
    var i = $o(t, function (t, n, i) {
      var s = E(e, function (e) {
        return e(t)
      })
      return { criteria: s, index: ++r, value: t }
    })
    return (function (t, e) {
      var n = t.length
      for (t.sort(e); n--; ) t[n] = t[n].value
      return t
    })(i, function (t, e) {
      return (function (t, e, n) {
        for (
          var r = -1,
            i = t.criteria,
            s = e.criteria,
            o = i.length,
            a = n.length;
          ++r < o;

        ) {
          var l = ml(i[r], s[r])
          if (l) return r >= a ? l : l * ('desc' == n[r] ? -1 : 1)
        }
        return t.index - e.index
      })(t, e, n)
    })
  }
  function vl(t) {
    return _n(function (e) {
      return (
        (e = E(e, Be(Cs))),
        ye(function (n) {
          var r = this
          return t(e, function (t) {
            return dt(t, r, n)
          })
        })
      )
    })
  }
  var bl = vl(E),
    xl = ye,
    wl = Math.min,
    Pl = xl(function (t, e) {
      var n = (e =
        1 == e.length && M(e[0]) ? E(e[0], Be(Cs)) : E(kn(e, 1), Be(Cs))).length
      return ye(function (r) {
        for (var i = -1, s = wl(r.length, n); ++i < s; )
          r[i] = e[i].call(this, r[i])
        return dt(t, this, r)
      })
    }),
    Al = vl(Mo),
    Cl = vl(Qi),
    Ol = Math.floor
  function El(t, e) {
    var n = ''
    if (!t || e < 1 || e > 9007199254740991) return n
    do {
      e % 2 && (n += t), (e = Ol(e / 2)) && (t += t)
    } while (e)
    return n
  }
  var Ml = Ps('length'),
    Sl = '[\\ud800-\\udfff]',
    Tl = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    jl = '\\ud83c[\\udffb-\\udfff]',
    kl = '[^\\ud800-\\udfff]',
    Nl = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    _l = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    Ll = '(?:' + Tl + '|' + jl + ')' + '?',
    Il = '[\\ufe0e\\ufe0f]?',
    Bl =
      Il +
      Ll +
      ('(?:\\u200d(?:' + [kl, Nl, _l].join('|') + ')' + Il + Ll + ')*'),
    Rl = '(?:' + [kl + Tl + '?', Tl, Nl, _l, Sl].join('|') + ')',
    Dl = RegExp(jl + '(?=' + jl + ')|' + Rl + Bl, 'g')
  function Vl(t) {
    return Zn(t)
      ? (function (t) {
          for (var e = (Dl.lastIndex = 0); Dl.test(t); ) ++e
          return e
        })(t)
      : Ml(t)
  }
  var zl = Math.ceil
  function $l(t, e) {
    var n = (e = void 0 === e ? ' ' : j(e)).length
    if (n < 2) return n ? El(e, t) : e
    var r = El(e, zl(t / Vl(e)))
    return Zn(e) ? Xn(cr(r), 0, t).join('') : r.slice(0, t)
  }
  var Fl = Math.ceil,
    ql = Math.floor
  var Gl = /^\s+/,
    Wl = f.parseInt
  var Hl = ye(function (t, e) {
    return le(t, 32, void 0, e, ne(e, Yt(Hl)))
  })
  Hl.placeholder = {}
  var Ul = ye(function (t, e) {
    return le(t, 64, void 0, e, ne(e, Yt(Ul)))
  })
  Ul.placeholder = {}
  var Jl = _s(
    function (t, e, n) {
      t[n ? 0 : 1].push(e)
    },
    function () {
      return [[], []]
    },
  )
  var Xl = _n(function (t, e) {
    return null == t
      ? {}
      : (function (t, e) {
          return fl(t, e, function (e, n) {
            return xs(t, n)
          })
        })(t, e)
  })
  function Yl(t, e, n, r) {
    for (var i = n - 1, s = t.length; ++i < s; ) if (r(t[i], e)) return i
    return -1
  }
  var Zl = Array.prototype.splice
  function Kl(t, e, n, r) {
    var i = r ? Yl : Wt,
      s = -1,
      o = e.length,
      a = t
    for (t === e && (e = Mt(e)), n && (a = E(t, Be(n))); ++s < o; )
      for (var l = 0, c = e[s], h = n ? n(c) : c; (l = i(a, h, l, r)) > -1; )
        a !== t && Zl.call(a, l, 1), Zl.call(t, l, 1)
    return t
  }
  function Ql(t, e) {
    return t && t.length && e && e.length ? Kl(t, e) : t
  }
  var tc = ye(Ql)
  var ec = Array.prototype.splice
  function nc(t, e) {
    for (var n = t ? e.length : 0, r = n - 1; n--; ) {
      var i = e[n]
      if (n == r || i !== s) {
        var s = i
        Kt(i) ? ec.call(t, i, 1) : hl(t, i)
      }
    }
    return t
  }
  var rc = _n(function (t, e) {
      var n = null == t ? 0 : t.length,
        r = Mn(t, e)
      return (
        nc(
          t,
          E(e, function (t) {
            return Kt(t, n) ? +t : t
          }).sort(ml),
        ),
        r
      )
    }),
    ic = Math.floor,
    sc = Math.random
  function oc(t, e) {
    return t + ic(sc() * (e - t + 1))
  }
  var ac = parseFloat,
    lc = Math.min,
    cc = Math.random
  var hc = Math.ceil,
    uc = Math.max
  function gc(t) {
    return function (e, n, r) {
      return (
        r && 'number' != typeof r && xe(e, n, r) && (n = r = void 0),
        (e = G(e)),
        void 0 === n ? ((n = e), (e = 0)) : (n = G(n)),
        (function (t, e, n, r) {
          for (
            var i = -1, s = uc(hc((e - t) / (n || 1)), 0), o = Array(s);
            s--;

          )
            (o[r ? s : ++i] = t), (t += n)
          return o
        })(e, n, (r = void 0 === r ? (e < n ? 1 : -1) : G(r)), t)
      )
    }
  }
  var dc = gc(),
    fc = gc(!0),
    pc = _n(function (t, e) {
      return le(t, 256, void 0, void 0, void 0, e)
    })
  function mc(t, e, n, r, i) {
    return (
      i(t, function (t, i, s) {
        n = r ? ((r = !1), t) : e(n, t, i, s)
      }),
      n
    )
  }
  function yc(t, e, n, r) {
    var i = null == t ? 0 : t.length
    for (r && i && (n = t[--i]); i--; ) n = e(n, t[i], i, t)
    return n
  }
  var vc = Array.prototype.reverse
  function bc(t) {
    return null == t ? t : vc.call(t)
  }
  var xc = Jr('round')
  function wc(t) {
    var e = t.length
    return e ? t[oc(0, e - 1)] : void 0
  }
  function Pc(t) {
    return wc(aa(t))
  }
  function Ac(t, e) {
    var n = -1,
      r = t.length,
      i = r - 1
    for (e = void 0 === e ? r : e; ++n < e; ) {
      var s = oc(n, i),
        o = t[s]
      ;(t[s] = t[n]), (t[n] = o)
    }
    return (t.length = e), t
  }
  function Cc(t, e) {
    return Ac(Mt(t), Qr(e, 0, t.length))
  }
  function Oc(t, e) {
    var n = aa(t)
    return Ac(n, Qr(e, 0, n.length))
  }
  function Ec(t) {
    return Ac(Mt(t))
  }
  function Mc(t) {
    return Ac(aa(t))
  }
  var Sc = Gr(function (t, e, n) {
    return t + (n ? '_' : '') + e.toLowerCase()
  })
  function Tc(t, e) {
    var n
    return (
      ks(t, function (t, r, i) {
        return !(n = e(t, r, i))
      }),
      !!n
    )
  }
  var jc = ye(function (t, e) {
      if (null == t) return []
      var n = e.length
      return (
        n > 1 && xe(t, e[0], e[1])
          ? (e = [])
          : n > 2 && xe(e[0], e[1], e[2]) && (e = [e[0]]),
        yl(t, kn(e, 1), [])
      )
    }),
    kc = Math.floor,
    Nc = Math.min
  function _c(t, e, n, r) {
    var i = 0,
      s = null == t ? 0 : t.length
    if (0 === s) return 0
    for (
      var o = (e = n(e)) != e, a = null === e, l = C(e), c = void 0 === e;
      i < s;

    ) {
      var h = kc((i + s) / 2),
        u = n(t[h]),
        g = void 0 !== u,
        d = null === u,
        f = u == u,
        p = C(u)
      if (o) var m = r || f
      else
        m = c
          ? f && (r || g)
          : a
          ? f && g && (r || !d)
          : l
          ? f && g && !d && (r || !p)
          : !d && !p && (r ? u <= e : u < e)
      m ? (i = h + 1) : (s = h)
    }
    return Nc(s, 4294967294)
  }
  function Lc(t, e, n) {
    var r = 0,
      i = null == t ? r : t.length
    if ('number' == typeof e && e == e && i <= 2147483647) {
      for (; r < i; ) {
        var s = (r + i) >>> 1,
          o = t[s]
        null !== o && !C(o) && (n ? o <= e : o < e) ? (r = s + 1) : (i = s)
      }
      return i
    }
    return _c(t, e, H, n)
  }
  function Ic(t, e) {
    return Lc(t, e)
  }
  function Bc(t, e, n) {
    return _c(t, e, Cs(n))
  }
  function Rc(t, e) {
    for (var n = -1, r = t.length, i = 0, s = []; ++n < r; ) {
      var o = t[n],
        a = e ? e(o) : o
      if (!n || !ue(a, l)) {
        var l = a
        s[i++] = 0 === o ? 0 : o
      }
    }
    return s
  }
  var Dc = Math.max
  var Vc = Gr(function (t, e, n) {
    return t + (n ? ' ' : '') + ur(e)
  })
  var zc = k(function (t, e) {
    return t - e
  }, 0)
  var $c = Object.prototype,
    Fc = $c.hasOwnProperty
  function qc(t, e, n, r) {
    return void 0 === t || (ue(t, $c[n]) && !Fc.call(r, n)) ? e : t
  }
  var Gc = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029',
  }
  function Wc(t) {
    return '\\' + Gc[t]
  }
  var Hc = /<%=([\s\S]+?)%>/g,
    Uc = {
      escape: /<%-([\s\S]+?)%>/g,
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: Hc,
      variable: '',
      imports: { _: { escape: Co } },
    },
    Jc = /\b__p \+= '';/g,
    Xc = /\b(__p \+=) '' \+/g,
    Yc = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
    Zc = /[()=,{}\[\]\/\s]/,
    Kc = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    Qc = /($^)/,
    th = /['\n\r\u2028\u2029\\]/g,
    eh = Object.prototype.hasOwnProperty
  function nh(t, e) {
    return e(t)
  }
  var rh = 4294967295,
    ih = Math.min
  function sh(t, e) {
    var n = t
    return (
      n instanceof xt && (n = n.value()),
      dr(
        e,
        function (t, e) {
          return e.func.apply(e.thisArg, Sn([t], e.args))
        },
        n,
      )
    )
  }
  function oh() {
    return sh(this.__wrapped__, this.__actions__)
  }
  var ah = 9007199254740991
  function lh(t, e) {
    for (var n = t.length; n-- && Wt(e, t[n], 0) > -1; );
    return n
  }
  function ch(t, e) {
    for (var n = -1, r = t.length; ++n < r && Wt(e, t[n], 0) > -1; );
    return n
  }
  var hh = /^\s+/
  var uh = /\w*$/
  var gh = fr({
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'",
    }),
    dh = /&(?:amp|lt|gt|quot|#39);/g,
    fh = RegExp(dh.source)
  var ph =
    bi && 1 / rs(new bi([, -0]))[1] == 1 / 0
      ? function (t) {
          return new bi(t)
        }
      : wt
  function mh(t, e, n) {
    var r = -1,
      i = Ht,
      s = t.length,
      o = !0,
      a = [],
      l = a
    if (n) (o = !1), (i = no)
    else if (s >= 200) {
      var c = e ? null : ph(t)
      if (c) return rs(c)
      ;(o = !1), (i = ts), (l = new Ki())
    } else l = e ? [] : a
    t: for (; ++r < s; ) {
      var h = t[r],
        u = e ? e(h) : h
      if (((h = n || 0 !== h ? h : 0), o && u == u)) {
        for (var g = l.length; g--; ) if (l[g] === u) continue t
        e && l.push(u), a.push(h)
      } else i(l, u, n) || (l !== a && l.push(u), a.push(h))
    }
    return a
  }
  var yh = ye(function (t) {
      return mh(kn(t, 1, Hs, !0))
    }),
    vh = ye(function (t) {
      var e = so(t)
      return Hs(e) && (e = void 0), mh(kn(t, 1, Hs, !0), Cs(e))
    }),
    bh = ye(function (t) {
      var e = so(t)
      return (
        (e = 'function' == typeof e ? e : void 0),
        mh(kn(t, 1, Hs, !0), void 0, e)
      )
    })
  function xh(t) {
    return t && t.length ? mh(t) : []
  }
  var wh = 0
  var Ph = Math.max
  function Ah(t) {
    if (!t || !t.length) return []
    var e = 0
    return (
      (t = li(t, function (t) {
        if (Hs(t)) return (e = Ph(t.length, e)), !0
      })),
      Ce(e, function (e) {
        return E(t, Ps(e))
      })
    )
  }
  function Ch(t, e) {
    if (!t || !t.length) return []
    var n = Ah(t)
    return null == e
      ? n
      : E(n, function (t) {
          return dt(e, void 0, t)
        })
  }
  function Oh(t, e, n, r) {
    return dl(t, e, n(On(t, e)), r)
  }
  var Eh = Gr(function (t, e, n) {
    return t + (n ? ' ' : '') + e.toUpperCase()
  })
  var Mh = ye(function (t, e) {
    return Hs(t) ? ro(t, e) : []
  })
  var Sh = _n(function (t) {
    var e = t.length,
      n = e ? t[0] : 0,
      r = this.__wrapped__,
      i = function (e) {
        return Mn(e, t)
      }
    return !(e > 1 || this.__actions__.length) && r instanceof xt && Kt(n)
      ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({
          func: nh,
          args: [i],
          thisArg: void 0,
        }),
        new Et(r, this.__chain__).thru(function (t) {
          return e && !t.length && t.push(void 0), t
        }))
      : this.thru(i)
  })
  function Th(t, e, n) {
    var r = t.length
    if (r < 2) return r ? mh(t[0]) : []
    for (var i = -1, s = Array(r); ++i < r; )
      for (var o = t[i], a = -1; ++a < r; )
        a != i && (s[i] = ro(s[i] || o, t[a], e, n))
    return mh(kn(s, 1), e, n)
  }
  var jh = ye(function (t) {
      return Th(li(t, Hs))
    }),
    kh = ye(function (t) {
      var e = so(t)
      return Hs(e) && (e = void 0), Th(li(t, Hs), Cs(e))
    }),
    Nh = ye(function (t) {
      var e = so(t)
      return (e = 'function' == typeof e ? e : void 0), Th(li(t, Hs), void 0, e)
    }),
    _h = ye(Ah)
  function Lh(t, e, n) {
    for (var r = -1, i = t.length, s = e.length, o = {}; ++r < i; ) {
      var a = r < s ? e[r] : void 0
      n(o, t[r], a)
    }
    return o
  }
  var Ih = ye(function (t) {
      var e = t.length,
        n = e > 1 ? t[e - 1] : void 0
      return (n = 'function' == typeof n ? (t.pop(), n) : void 0), Ch(t, n)
    }),
    Bh = {
      chunk: function (t, e, n) {
        e = (n ? xe(t, e, n) : void 0 === e) ? 1 : Kr(W(e), 0)
        var r = null == t ? 0 : t.length
        if (!r || e < 1) return []
        for (var i = 0, s = 0, o = Array(Zr(r / e)); i < r; )
          o[s++] = Jn(t, i, (i += e))
        return o
      },
      compact: function (t) {
        for (
          var e = -1, n = null == t ? 0 : t.length, r = 0, i = [];
          ++e < n;

        ) {
          var s = t[e]
          s && (i[r++] = s)
        }
        return i
      },
      concat: function () {
        var t = arguments.length
        if (!t) return []
        for (var e = Array(t - 1), n = arguments[0], r = t; r--; )
          e[r - 1] = arguments[r]
        return Sn(M(n) ? Mt(n) : [n], kn(e, 1))
      },
      difference: io,
      differenceBy: oo,
      differenceWith: ao,
      drop: function (t, e, n) {
        var r = null == t ? 0 : t.length
        return r ? Jn(t, (e = n || void 0 === e ? 1 : W(e)) < 0 ? 0 : e, r) : []
      },
      dropRight: function (t, e, n) {
        var r = null == t ? 0 : t.length
        return r
          ? Jn(t, 0, (e = r - (e = n || void 0 === e ? 1 : W(e))) < 0 ? 0 : e)
          : []
      },
      dropRightWhile: function (t, e) {
        return t && t.length ? co(t, Cs(e), !0, !0) : []
      },
      dropWhile: function (t, e) {
        return t && t.length ? co(t, Cs(e), !0) : []
      },
      fill: function (t, e, n, r) {
        var i = null == t ? 0 : t.length
        return i
          ? (n && 'number' != typeof n && xe(t, e, n) && ((n = 0), (r = i)),
            (function (t, e, n, r) {
              var i = t.length
              for (
                (n = W(n)) < 0 && (n = -n > i ? 0 : i + n),
                  (r = void 0 === r || r > i ? i : W(r)) < 0 && (r += i),
                  r = n > r ? 0 : To(r);
                n < r;

              )
                t[n++] = e
              return t
            })(t, e, n, r))
          : []
      },
      findIndex: _o,
      findLastIndex: Do,
      first: zo,
      flatten: Nn,
      flattenDeep: function (t) {
        return (null == t ? 0 : t.length) ? kn(t, Infinity) : []
      },
      flattenDepth: function (t, e) {
        return (null == t ? 0 : t.length)
          ? kn(t, (e = void 0 === e ? 1 : W(e)))
          : []
      },
      fromPairs: function (t) {
        for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n; ) {
          var i = t[e]
          r[i[0]] = i[1]
        }
        return r
      },
      head: zo,
      indexOf: function (t, e, n) {
        var r = null == t ? 0 : t.length
        if (!r) return -1
        var i = null == n ? 0 : W(n)
        return i < 0 && (i = ca(r + i, 0)), Wt(t, e, i)
      },
      initial: function (t) {
        return (null == t ? 0 : t.length) ? Jn(t, 0, -1) : []
      },
      intersection: da,
      intersectionBy: fa,
      intersectionWith: pa,
      join: function (t, e) {
        return null == t ? '' : $a.call(t, e)
      },
      last: so,
      lastIndexOf: function (t, e, n) {
        var r = null == t ? 0 : t.length
        if (!r) return -1
        var i = r
        return (
          void 0 !== n && (i = (i = W(n)) < 0 ? Ga(r + i, 0) : Wa(i, r - 1)),
          e == e
            ? (function (t, e, n) {
                for (var r = n + 1; r--; ) if (t[r] === e) return r
                return r
              })(t, e, i)
            : qt(t, Gt, i, !0)
        )
      },
      nth: function (t, e) {
        return t && t.length ? cl(t, W(e)) : void 0
      },
      pull: tc,
      pullAll: Ql,
      pullAllBy: function (t, e, n) {
        return t && t.length && e && e.length ? Kl(t, e, Cs(n)) : t
      },
      pullAllWith: function (t, e, n) {
        return t && t.length && e && e.length ? Kl(t, e, void 0, n) : t
      },
      pullAt: rc,
      remove: function (t, e) {
        var n = []
        if (!t || !t.length) return n
        var r = -1,
          i = [],
          s = t.length
        for (e = Cs(e); ++r < s; ) {
          var o = t[r]
          e(o, r, t) && (n.push(o), i.push(r))
        }
        return nc(t, i), n
      },
      reverse: bc,
      slice: function (t, e, n) {
        var r = null == t ? 0 : t.length
        return r
          ? (n && 'number' != typeof n && xe(t, e, n)
              ? ((e = 0), (n = r))
              : ((e = null == e ? 0 : W(e)), (n = void 0 === n ? r : W(n))),
            Jn(t, e, n))
          : []
      },
      sortedIndex: Ic,
      sortedIndexBy: Bc,
      sortedIndexOf: function (t, e) {
        var n = null == t ? 0 : t.length
        if (n) {
          var r = Lc(t, e)
          if (r < n && ue(t[r], e)) return r
        }
        return -1
      },
      sortedLastIndex: function (t, e) {
        return Lc(t, e, !0)
      },
      sortedLastIndexBy: function (t, e, n) {
        return _c(t, e, Cs(n), !0)
      },
      sortedLastIndexOf: function (t, e) {
        if (null == t ? 0 : t.length) {
          var n = Lc(t, e, !0) - 1
          if (ue(t[n], e)) return n
        }
        return -1
      },
      sortedUniq: function (t) {
        return t && t.length ? Rc(t) : []
      },
      sortedUniqBy: function (t, e) {
        return t && t.length ? Rc(t, Cs(e)) : []
      },
      tail: function (t) {
        var e = null == t ? 0 : t.length
        return e ? Jn(t, 1, e) : []
      },
      take: function (t, e, n) {
        return t && t.length
          ? Jn(t, 0, (e = n || void 0 === e ? 1 : W(e)) < 0 ? 0 : e)
          : []
      },
      takeRight: function (t, e, n) {
        var r = null == t ? 0 : t.length
        return r
          ? Jn(t, (e = r - (e = n || void 0 === e ? 1 : W(e))) < 0 ? 0 : e, r)
          : []
      },
      takeRightWhile: function (t, e) {
        return t && t.length ? co(t, Cs(e), !1, !0) : []
      },
      takeWhile: function (t, e) {
        return t && t.length ? co(t, Cs(e)) : []
      },
      union: yh,
      unionBy: vh,
      unionWith: bh,
      uniq: xh,
      uniqBy: function (t, e) {
        return t && t.length ? mh(t, Cs(e)) : []
      },
      uniqWith: function (t, e) {
        return (
          (e = 'function' == typeof e ? e : void 0),
          t && t.length ? mh(t, void 0, e) : []
        )
      },
      unzip: Ah,
      unzipWith: Ch,
      without: Mh,
      xor: jh,
      xorBy: kh,
      xorWith: Nh,
      zip: _h,
      zipObject: function (t, e) {
        return Lh(t || [], e || [], de)
      },
      zipObjectDeep: function (t, e) {
        return Lh(t || [], e || [], dl)
      },
      zipWith: Ih,
    },
    Rh = {
      countBy: Is,
      each: uo,
      eachRight: yo,
      every: function (t, e, n) {
        var r = M(t) ? Mo : So
        return n && xe(t, e, n) && (e = void 0), r(t, Cs(e))
      },
      filter: function (t, e) {
        return (M(t) ? li : jo)(t, Cs(e))
      },
      find: Lo,
      findLast: Vo,
      flatMap: function (t, e) {
        return kn(Fo(t, e), 1)
      },
      flatMapDeep: function (t, e) {
        return kn(Fo(t, e), Infinity)
      },
      flatMapDepth: function (t, e, n) {
        return (n = void 0 === n ? 1 : W(n)), kn(Fo(t, e), n)
      },
      forEach: uo,
      forEachRight: yo,
      groupBy: Xo,
      includes: function (t, e, n, r) {
        ;(t = be(t) ? t : aa(t)), (n = n && !r ? W(n) : 0)
        var i = t.length
        return (
          n < 0 && (n = la(i + n, 0)),
          sa(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && Wt(t, e, n) > -1
        )
      },
      invokeMap: Ea,
      keyBy: qa,
      map: Fo,
      orderBy: function (t, e, n, r) {
        return null == t
          ? []
          : (M(e) || (e = null == e ? [] : [e]),
            M((n = r ? void 0 : n)) || (n = null == n ? [] : [n]),
            yl(t, e, n))
      },
      partition: Jl,
      reduce: function (t, e, n) {
        var r = M(t) ? dr : mc,
          i = arguments.length < 3
        return r(t, Cs(e), n, i, ks)
      },
      reduceRight: function (t, e, n) {
        var r = M(t) ? yc : mc,
          i = arguments.length < 3
        return r(t, Cs(e), n, i, mo)
      },
      reject: function (t, e) {
        return (M(t) ? li : jo)(t, ol(Cs(e)))
      },
      sample: function (t) {
        return (M(t) ? wc : Pc)(t)
      },
      sampleSize: function (t, e, n) {
        return (
          (e = (n ? xe(t, e, n) : void 0 === e) ? 1 : W(e)),
          (M(t) ? Cc : Oc)(t, e)
        )
      },
      shuffle: function (t) {
        return (M(t) ? Ec : Mc)(t)
      },
      size: function (t) {
        if (null == t) return 0
        if (be(t)) return sa(t) ? Vl(t) : t.length
        var e = ki(t)
        return '[object Map]' == e || '[object Set]' == e
          ? t.size
          : Je(t).length
      },
      some: function (t, e, n) {
        var r = M(t) ? Qi : Tc
        return n && xe(t, e, n) && (e = void 0), r(t, Cs(e))
      },
      sortBy: jc,
    },
    Dh = Ds,
    Vh = {
      after: function (t, e) {
        if ('function' != typeof e) throw new TypeError('Expected a function')
        return (
          (t = W(t)),
          function () {
            if (--t < 1) return e.apply(this, arguments)
          }
        )
      },
      ary: ce,
      before: Gn,
      bind: Wn,
      bindKey: Un,
      curry: Bs,
      curryRight: Rs,
      debounce: $s,
      defer: to,
      delay: eo,
      flip: function (t) {
        return le(t, 512)
      },
      memoize: vn,
      negate: ol,
      once: function (t) {
        return Gn(2, t)
      },
      overArgs: Pl,
      partial: Hl,
      partialRight: Ul,
      rearg: pc,
      rest: function (t, e) {
        if ('function' != typeof t) throw new TypeError('Expected a function')
        return ye(t, (e = void 0 === e ? e : W(e)))
      },
      spread: function (t, e) {
        if ('function' != typeof t) throw new TypeError('Expected a function')
        return (
          (e = null == e ? 0 : Dc(W(e), 0)),
          ye(function (n) {
            var r = n[e],
              i = Xn(n, 0, e)
            return r && Sn(i, r), dt(t, this, i)
          })
        )
      },
      throttle: function (t, e, n) {
        var r = !0,
          i = !0
        if ('function' != typeof t) throw new TypeError('Expected a function')
        return (
          R(n) &&
            ((r = 'leading' in n ? !!n.leading : r),
            (i = 'trailing' in n ? !!n.trailing : i)),
          $s(t, e, { leading: r, maxWait: e, trailing: i })
        )
      },
      unary: function (t) {
        return ce(t, 1)
      },
      wrap: function (t, e) {
        return Hl(ho(e), t)
      },
    },
    zh = {
      castArray: function () {
        if (!arguments.length) return []
        var t = arguments[0]
        return M(t) ? t : [t]
      },
      clone: Yi,
      cloneDeep: Zi,
      cloneDeepWith: function (t, e) {
        return Xi(t, 5, (e = 'function' == typeof e ? e : void 0))
      },
      cloneWith: function (t, e) {
        return Xi(t, 4, (e = 'function' == typeof e ? e : void 0))
      },
      conformsTo: function (t, e) {
        return null == e || Os(t, e, Xe(e))
      },
      eq: ue,
      gt: Ko,
      gte: Qo,
      isArguments: Te,
      isArray: M,
      isArrayBuffer: Sa,
      isArrayLike: be,
      isArrayLikeObject: Hs,
      isBoolean: function (t) {
        return !0 === t || !1 === t || (A(t) && '[object Boolean]' == P(t))
      },
      isBuffer: Le,
      isDate: ja,
      isElement: function (t) {
        return A(t) && 1 === t.nodeType && !$n(t)
      },
      isEmpty: Na,
      isEqual: _a,
      isEqualWith: function (t, e, n) {
        var r = (n = 'function' == typeof n ? n : void 0) ? n(t, e) : void 0
        return void 0 === r ? gs(t, e, void 0, n) : !!r
      },
      isError: Fn,
      isFinite: function (t) {
        return 'number' == typeof t && La(t)
      },
      isFunction: U,
      isInteger: Ia,
      isLength: ve,
      isMap: Fi,
      isMatch: function (t, e) {
        return t === e || ds(t, e, ps(e))
      },
      isMatchWith: function (t, e, n) {
        return (n = 'function' == typeof n ? n : void 0), ds(t, e, ps(e), n)
      },
      isNaN: function (t) {
        return Ba(t) && t != +t
      },
      isNative: function (t) {
        if (Ra(t))
          throw new Error(
            'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
          )
        return st(t)
      },
      isNil: function (t) {
        return null == t
      },
      isNull: function (t) {
        return null === t
      },
      isNumber: Ba,
      isObject: R,
      isObjectLike: A,
      isPlainObject: $n,
      isRegExp: Va,
      isSafeInteger: function (t) {
        return Ia(t) && t >= -9007199254740991 && t <= za
      },
      isSet: Gi,
      isString: sa,
      isSymbol: C,
      isTypedArray: Fe,
      isUndefined: function (t) {
        return void 0 === t
      },
      isWeakMap: function (t) {
        return A(t) && '[object WeakMap]' == ki(t)
      },
      isWeakSet: function (t) {
        return A(t) && '[object WeakSet]' == P(t)
      },
      lt: Xa,
      lte: Ya,
      toArray: ll,
      toFinite: G,
      toInteger: W,
      toLength: To,
      toNumber: F,
      toPlainObject: Js,
      toSafeInteger: function (t) {
        return t ? Qr(W(t), -9007199254740991, ah) : 0 === t ? t : 0
      },
      toString: Pn,
    },
    $h = {
      add: N,
      ceil: Xr,
      divide: lo,
      floor: qo,
      max: Ka,
      maxBy: function (t, e) {
        return t && t.length ? Za(t, Cs(e), Yo) : void 0
      },
      mean: function (t) {
        return tl(t, H)
      },
      meanBy: function (t, e) {
        return tl(t, Cs(e))
      },
      min: function (t) {
        return t && t.length ? Za(t, H, Ja) : void 0
      },
      minBy: function (t, e) {
        return t && t.length ? Za(t, Cs(e), Ja) : void 0
      },
      multiply: sl,
      round: xc,
      subtract: zc,
      sum: function (t) {
        return t && t.length ? Qa(t, H) : 0
      },
      sumBy: function (t, e) {
        return t && t.length ? Qa(t, Cs(e)) : 0
      },
    },
    Fh = ti,
    qh = function (t, e, n) {
      return (
        (e = G(e)),
        void 0 === n ? ((n = e), (e = 0)) : (n = G(n)),
        (function (t, e, n) {
          return t >= ia(e, n) && t < ra(e, n)
        })((t = F(t)), e, n)
      )
    },
    Gh = function (t, e, n) {
      if (
        (n && 'boolean' != typeof n && xe(t, e, n) && (e = n = void 0),
        void 0 === n &&
          ('boolean' == typeof e
            ? ((n = e), (e = void 0))
            : 'boolean' == typeof t && ((n = t), (t = void 0))),
        void 0 === t && void 0 === e
          ? ((t = 0), (e = 1))
          : ((t = G(t)), void 0 === e ? ((e = t), (t = 0)) : (e = G(e))),
        t > e)
      ) {
        var r = t
        ;(t = e), (e = r)
      }
      if (n || t % 1 || e % 1) {
        var i = cc()
        return lc(t + i * (e - t + ac('1e-' + ((i + '').length - 1))), e)
      }
      return oc(t, e)
    },
    Wh = {
      assign: Ze,
      assignIn: en,
      assignInWith: nn,
      assignWith: rn,
      at: Ln,
      create: function (t, e) {
        var n = ut(t)
        return null == e ? n : ni(n, e)
      },
      defaults: Gs,
      defaultsDeep: Ks,
      entries: bo,
      entriesIn: xo,
      extend: en,
      extendWith: nn,
      findKey: function (t, e) {
        return Io(t, Cs(e), Ts)
      },
      findLastKey: function (t, e) {
        return Io(t, Cs(e), po)
      },
      forIn: function (t, e) {
        return null == t ? t : Ss(t, ho(e), tn)
      },
      forInRight: function (t, e) {
        return null == t ? t : fo(t, ho(e), tn)
      },
      forOwn: function (t, e) {
        return t && Ts(t, ho(e))
      },
      forOwnRight: function (t, e) {
        return t && po(t, ho(e))
      },
      functions: function (t) {
        return null == t ? [] : Uo(t, Xe(t))
      },
      functionsIn: function (t) {
        return null == t ? [] : Uo(t, tn(t))
      },
      get: En,
      has: na,
      hasIn: xs,
      invert: va,
      invertBy: Pa,
      invoke: Oa,
      keys: Xe,
      keysIn: tn,
      mapKeys: function (t, e) {
        var n = {}
        return (
          (e = Cs(e)),
          Ts(t, function (t, r, i) {
            he(n, e(t, r, i), t)
          }),
          n
        )
      },
      mapValues: function (t, e) {
        var n = {}
        return (
          (e = Cs(e)),
          Ts(t, function (t, r, i) {
            he(n, r, e(t, r, i))
          }),
          n
        )
      },
      merge: el,
      mergeWith: Zs,
      omit: gl,
      omitBy: function (t, e) {
        return pl(t, ol(Cs(e)))
      },
      pick: Xl,
      pickBy: pl,
      result: function (t, e, n) {
        var r = -1,
          i = (e = An(e, t)).length
        for (i || ((i = 1), (t = void 0)); ++r < i; ) {
          var s = null == t ? void 0 : t[Cn(e[r])]
          void 0 === s && ((r = i), (s = n)), (t = U(s) ? s.call(t) : s)
        }
        return t
      },
      set: function (t, e, n) {
        return null == t ? t : dl(t, e, n)
      },
      setWith: function (t, e, n, r) {
        return (
          (r = 'function' == typeof r ? r : void 0),
          null == t ? t : dl(t, e, n, r)
        )
      },
      toPairs: bo,
      toPairsIn: xo,
      transform: function (t, e, n) {
        var r = M(t),
          i = r || Le(t) || Fe(t)
        if (((e = Cs(e)), null == n)) {
          var s = t && t.constructor
          n = i ? (r ? new s() : []) : R(t) && U(s) ? ut(In(t)) : {}
        }
        return (
          (i ? Ft : Ts)(t, function (t, r, i) {
            return e(n, t, r, i)
          }),
          n
        )
      },
      unset: function (t, e) {
        return null == t || hl(t, e)
      },
      update: function (t, e, n) {
        return null == t ? t : Oh(t, e, ho(n))
      },
      updateWith: function (t, e, n, r) {
        return (
          (r = 'function' == typeof r ? r : void 0),
          null == t ? t : Oh(t, e, ho(n), r)
        )
      },
      values: aa,
      valuesIn: function (t) {
        return null == t ? [] : oa(t, tn(t))
      },
    },
    Hh = {
      at: Sh,
      chain: Yr,
      commit: function () {
        return new Et(this.value(), this.__chain__)
      },
      lodash: jt,
      next: function () {
        void 0 === this.__values__ && (this.__values__ = ll(this.value()))
        var t = this.__index__ >= this.__values__.length
        return {
          done: t,
          value: t ? void 0 : this.__values__[this.__index__++],
        }
      },
      plant: function (t) {
        for (var e, n = this; n instanceof bt; ) {
          var r = St(n)
          ;(r.__index__ = 0),
            (r.__values__ = void 0),
            e ? (i.__wrapped__ = r) : (e = r)
          var i = r
          n = n.__wrapped__
        }
        return (i.__wrapped__ = t), e
      },
      reverse: function () {
        var t = this.__wrapped__
        if (t instanceof xt) {
          var e = t
          return (
            this.__actions__.length && (e = new xt(this)),
            (e = e.reverse()).__actions__.push({
              func: nh,
              args: [bc],
              thisArg: void 0,
            }),
            new Et(e, this.__chain__)
          )
        }
        return this.thru(bc)
      },
      tap: function (t, e) {
        return e(t), t
      },
      thru: nh,
      toIterator: function () {
        return this
      },
      toJSON: oh,
      value: oh,
      valueOf: oh,
      wrapperChain: function () {
        return Yr(this)
      },
    },
    Uh = {
      camelCase: Wr,
      capitalize: gr,
      deburr: vr,
      endsWith: function (t, e, n) {
        ;(t = Pn(t)), (e = j(e))
        var r = t.length,
          i = (n = void 0 === n ? r : Qr(W(n), 0, r))
        return (n -= e.length) >= 0 && t.slice(n, i) == e
      },
      escape: Co,
      escapeRegExp: function (t) {
        return (t = Pn(t)) && Eo.test(t) ? t.replace(Oo, '\\$&') : t
      },
      kebabCase: Fa,
      lowerCase: Ha,
      lowerFirst: Ua,
      pad: function (t, e, n) {
        t = Pn(t)
        var r = (e = W(e)) ? Vl(t) : 0
        if (!e || r >= e) return t
        var i = (e - r) / 2
        return $l(ql(i), n) + t + $l(Fl(i), n)
      },
      padEnd: function (t, e, n) {
        t = Pn(t)
        var r = (e = W(e)) ? Vl(t) : 0
        return e && r < e ? t + $l(e - r, n) : t
      },
      padStart: function (t, e, n) {
        t = Pn(t)
        var r = (e = W(e)) ? Vl(t) : 0
        return e && r < e ? $l(e - r, n) + t : t
      },
      parseInt: function (t, e, n) {
        return (
          n || null == e ? (e = 0) : e && (e = +e),
          Wl(Pn(t).replace(Gl, ''), e || 0)
        )
      },
      repeat: function (t, e, n) {
        return (e = (n ? xe(t, e, n) : void 0 === e) ? 1 : W(e)), El(Pn(t), e)
      },
      replace: function () {
        var t = arguments,
          e = Pn(t[0])
        return t.length < 3 ? e : e.replace(t[1], t[2])
      },
      snakeCase: Sc,
      split: function (t, e, n) {
        return (
          n && 'number' != typeof n && xe(t, e, n) && (e = n = void 0),
          (n = void 0 === n ? 4294967295 : n >>> 0)
            ? (t = Pn(t)) &&
              ('string' == typeof e || (null != e && !Va(e))) &&
              !(e = j(e)) &&
              Zn(t)
              ? Xn(cr(t), 0, n)
              : t.split(e, n)
            : []
        )
      },
      startCase: Vc,
      startsWith: function (t, e, n) {
        return (
          (t = Pn(t)),
          (n = null == n ? 0 : Qr(W(n), 0, t.length)),
          (e = j(e)),
          t.slice(n, n + e.length) == e
        )
      },
      template: function (t, e, n) {
        var r = Uc.imports._.templateSettings || Uc
        n && xe(t, e, n) && (e = void 0), (t = Pn(t)), (e = nn({}, e, r, qc))
        var i,
          s,
          o = nn({}, e.imports, r.imports, qc),
          a = Xe(o),
          l = oa(o, a),
          c = 0,
          h = e.interpolate || Qc,
          u = "__p += '",
          g = RegExp(
            (e.escape || Qc).source +
              '|' +
              h.source +
              '|' +
              (h === Hc ? Kc : Qc).source +
              '|' +
              (e.evaluate || Qc).source +
              '|$',
            'g',
          ),
          d = eh.call(e, 'sourceURL')
            ? '//# sourceURL=' + (e.sourceURL + '').replace(/\s/g, ' ') + '\n'
            : ''
        t.replace(g, function (e, n, r, o, a, l) {
          return (
            r || (r = o),
            (u += t.slice(c, l).replace(th, Wc)),
            n && ((i = !0), (u += "' +\n__e(" + n + ") +\n'")),
            a && ((s = !0), (u += "';\n" + a + ";\n__p += '")),
            r && (u += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
            (c = l + e.length),
            e
          )
        }),
          (u += "';\n")
        var f = eh.call(e, 'variable') && e.variable
        if (f) {
          if (Zc.test(f))
            throw new Error(
              'Invalid `variable` option passed into `_.template`',
            )
        } else u = 'with (obj) {\n' + u + '\n}\n'
        ;(u = (s ? u.replace(Jc, '') : u).replace(Xc, '$1').replace(Yc, '$1;')),
          (u =
            'function(' +
            (f || 'obj') +
            ') {\n' +
            (f ? '' : 'obj || (obj = {});\n') +
            "var __t, __p = ''" +
            (i ? ', __e = _.escape' : '') +
            (s
              ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
              : ';\n') +
            u +
            'return __p\n}')
        var p = qn(function () {
          return Function(a, d + 'return ' + u).apply(void 0, l)
        })
        if (((p.source = u), Fn(p))) throw p
        return p
      },
      templateSettings: Uc,
      toLower: function (t) {
        return Pn(t).toLowerCase()
      },
      toUpper: function (t) {
        return Pn(t).toUpperCase()
      },
      trim: function (t, e, n) {
        if ((t = Pn(t)) && (n || void 0 === e)) return B(t)
        if (!t || !(e = j(e))) return t
        var r = cr(t),
          i = cr(e)
        return Xn(r, ch(r, i), lh(r, i) + 1).join('')
      },
      trimEnd: function (t, e, n) {
        if ((t = Pn(t)) && (n || void 0 === e)) return t.slice(0, L(t) + 1)
        if (!t || !(e = j(e))) return t
        var r = cr(t)
        return Xn(r, 0, lh(r, cr(e)) + 1).join('')
      },
      trimStart: function (t, e, n) {
        if ((t = Pn(t)) && (n || void 0 === e)) return t.replace(hh, '')
        if (!t || !(e = j(e))) return t
        var r = cr(t)
        return Xn(r, ch(r, cr(e))).join('')
      },
      truncate: function (t, e) {
        var n = 30,
          r = '...'
        if (R(e)) {
          var i = 'separator' in e ? e.separator : i
          ;(n = 'length' in e ? W(e.length) : n),
            (r = 'omission' in e ? j(e.omission) : r)
        }
        var s = (t = Pn(t)).length
        if (Zn(t)) {
          var o = cr(t)
          s = o.length
        }
        if (n >= s) return t
        var a = n - Vl(r)
        if (a < 1) return r
        var l = o ? Xn(o, 0, a).join('') : t.slice(0, a)
        if (void 0 === i) return l + r
        if ((o && (a += l.length - a), Va(i))) {
          if (t.slice(a).search(i)) {
            var c,
              h = l
            for (
              i.global || (i = RegExp(i.source, Pn(uh.exec(i)) + 'g')),
                i.lastIndex = 0;
              (c = i.exec(h));

            )
              var u = c.index
            l = l.slice(0, void 0 === u ? a : u)
          }
        } else if (t.indexOf(j(i), a) != a) {
          var g = l.lastIndexOf(i)
          g > -1 && (l = l.slice(0, g))
        }
        return l + r
      },
      unescape: function (t) {
        return (t = Pn(t)) && fh.test(t) ? t.replace(dh, gh) : t
      },
      upperCase: Eh,
      upperFirst: ur,
      words: Fr,
    },
    Jh = {
      attempt: qn,
      bindAll: Hn,
      cond: function (t) {
        var e = null == t ? 0 : t.length,
          n = Cs
        return (
          (t = e
            ? E(t, function (t) {
                if ('function' != typeof t[1])
                  throw new TypeError('Expected a function')
                return [n(t[0]), t[1]]
              })
            : []),
          ye(function (n) {
            for (var r = -1; ++r < e; ) {
              var i = t[r]
              if (dt(i[0], this, n)) return dt(i[1], this, n)
            }
          })
        )
      },
      conforms: function (t) {
        return (function (t) {
          var e = Xe(t)
          return function (n) {
            return Os(n, t, e)
          }
        })(Xi(t, 1))
      },
      constant: Dt,
      defaultTo: function (t, e) {
        return null == t || t != t ? e : t
      },
      flow: Wo,
      flowRight: Ho,
      identity: H,
      iteratee: function (t) {
        return Cs('function' == typeof t ? t : Xi(t, 1))
      },
      matches: function (t) {
        return ys(Xi(t, 1))
      },
      matchesProperty: function (t, e) {
        return ws(t, Xi(e, 1))
      },
      method: nl,
      methodOf: rl,
      mixin: il,
      noop: wt,
      nthArg: function (t) {
        return (
          (t = W(t)),
          ye(function (e) {
            return cl(e, t)
          })
        )
      },
      over: bl,
      overEvery: Al,
      overSome: Cl,
      property: As,
      propertyOf: function (t) {
        return function (e) {
          return null == t ? void 0 : On(t, e)
        }
      },
      range: dc,
      rangeRight: fc,
      stubArray: ci,
      stubFalse: je,
      stubObject: function () {
        return {}
      },
      stubString: function () {
        return ''
      },
      stubTrue: function () {
        return !0
      },
      times: function (t, e) {
        if ((t = W(t)) < 1 || t > 9007199254740991) return []
        var n = rh,
          r = ih(t, rh)
        ;(e = ho(e)), (t -= rh)
        for (var i = Ce(r, e); ++n < t; ) e(n)
        return i
      },
      toPath: function (t) {
        return M(t) ? E(t, Cn) : C(t) ? [t] : Mt(wn(Pn(t)))
      },
      uniqueId: function (t) {
        var e = ++wh
        return Pn(t) + e
      },
    }
  var Xh = Math.max,
    Yh = Math.min
  var Zh = Math.min
  /**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
  var Kh,
    Qh = 4294967295,
    tu = Array.prototype,
    eu = Object.prototype.hasOwnProperty,
    nu = p ? p.iterator : void 0,
    ru = Math.max,
    iu = Math.min,
    su = (function (t) {
      return function (e, n, r) {
        if (null == r) {
          var i = R(n),
            s = i && Xe(n),
            o = s && s.length && Uo(n, s)
          ;(o ? o.length : i) || ((r = n), (n = e), (e = this))
        }
        return t(e, n, r)
      }
    })(il)
  function ou(t, e, n) {
    if (n)
      switch (n.length) {
        case 0:
          return t.call(e)
        case 1:
          return t.call(e, n[0])
        case 2:
          return t.call(e, n[0], n[1])
        case 3:
          return t.call(e, n[0], n[1], n[2])
        case 4:
          return t.call(e, n[0], n[1], n[2], n[3])
        case 5:
          return t.call(e, n[0], n[1], n[2], n[3], n[4])
        case 6:
          return t.call(e, n[0], n[1], n[2], n[3], n[4], n[5])
        default:
          return t.apply(e, n)
      }
    return t.call(e)
  }
  function au(t, e, ...n) {
    return ou(t, e, n)
  }
  function lu(t) {
    return (
      null != t &&
      (t instanceof Promise ||
        (function (t) {
          return 'object' == typeof t && t.then && 'function' == typeof t.then
        })(t))
    )
  }
  function cu(...t) {
    const e = []
    t.forEach((t) => {
      Array.isArray(t) ? e.push(...t) : e.push(t)
    })
    if (e.some((t) => lu(t))) {
      const t = e.map((t) => (lu(t) ? t : Promise.resolve(!1 !== t)))
      return Promise.all(t).then((t) => t.reduce((t, e) => !1 !== e && t, !0))
    }
    return e.every((t) => !1 !== t)
  }
  function hu(t, e) {
    const n = []
    for (let r = 0; r < t.length; r += 2) {
      const i = ou(t[r], t[r + 1], Array.isArray(e) ? e : [e])
      n.push(i)
    }
    return cu(n)
  }
  ;(jt.after = Vh.after),
    (jt.ary = Vh.ary),
    (jt.assign = Wh.assign),
    (jt.assignIn = Wh.assignIn),
    (jt.assignInWith = Wh.assignInWith),
    (jt.assignWith = Wh.assignWith),
    (jt.at = Wh.at),
    (jt.before = Vh.before),
    (jt.bind = Vh.bind),
    (jt.bindAll = Jh.bindAll),
    (jt.bindKey = Vh.bindKey),
    (jt.castArray = zh.castArray),
    (jt.chain = Hh.chain),
    (jt.chunk = Bh.chunk),
    (jt.compact = Bh.compact),
    (jt.concat = Bh.concat),
    (jt.cond = Jh.cond),
    (jt.conforms = Jh.conforms),
    (jt.constant = Jh.constant),
    (jt.countBy = Rh.countBy),
    (jt.create = Wh.create),
    (jt.curry = Vh.curry),
    (jt.curryRight = Vh.curryRight),
    (jt.debounce = Vh.debounce),
    (jt.defaults = Wh.defaults),
    (jt.defaultsDeep = Wh.defaultsDeep),
    (jt.defer = Vh.defer),
    (jt.delay = Vh.delay),
    (jt.difference = Bh.difference),
    (jt.differenceBy = Bh.differenceBy),
    (jt.differenceWith = Bh.differenceWith),
    (jt.drop = Bh.drop),
    (jt.dropRight = Bh.dropRight),
    (jt.dropRightWhile = Bh.dropRightWhile),
    (jt.dropWhile = Bh.dropWhile),
    (jt.fill = Bh.fill),
    (jt.filter = Rh.filter),
    (jt.flatMap = Rh.flatMap),
    (jt.flatMapDeep = Rh.flatMapDeep),
    (jt.flatMapDepth = Rh.flatMapDepth),
    (jt.flatten = Bh.flatten),
    (jt.flattenDeep = Bh.flattenDeep),
    (jt.flattenDepth = Bh.flattenDepth),
    (jt.flip = Vh.flip),
    (jt.flow = Jh.flow),
    (jt.flowRight = Jh.flowRight),
    (jt.fromPairs = Bh.fromPairs),
    (jt.functions = Wh.functions),
    (jt.functionsIn = Wh.functionsIn),
    (jt.groupBy = Rh.groupBy),
    (jt.initial = Bh.initial),
    (jt.intersection = Bh.intersection),
    (jt.intersectionBy = Bh.intersectionBy),
    (jt.intersectionWith = Bh.intersectionWith),
    (jt.invert = Wh.invert),
    (jt.invertBy = Wh.invertBy),
    (jt.invokeMap = Rh.invokeMap),
    (jt.iteratee = Jh.iteratee),
    (jt.keyBy = Rh.keyBy),
    (jt.keys = Xe),
    (jt.keysIn = Wh.keysIn),
    (jt.map = Rh.map),
    (jt.mapKeys = Wh.mapKeys),
    (jt.mapValues = Wh.mapValues),
    (jt.matches = Jh.matches),
    (jt.matchesProperty = Jh.matchesProperty),
    (jt.memoize = Vh.memoize),
    (jt.merge = Wh.merge),
    (jt.mergeWith = Wh.mergeWith),
    (jt.method = Jh.method),
    (jt.methodOf = Jh.methodOf),
    (jt.mixin = su),
    (jt.negate = ol),
    (jt.nthArg = Jh.nthArg),
    (jt.omit = Wh.omit),
    (jt.omitBy = Wh.omitBy),
    (jt.once = Vh.once),
    (jt.orderBy = Rh.orderBy),
    (jt.over = Jh.over),
    (jt.overArgs = Vh.overArgs),
    (jt.overEvery = Jh.overEvery),
    (jt.overSome = Jh.overSome),
    (jt.partial = Vh.partial),
    (jt.partialRight = Vh.partialRight),
    (jt.partition = Rh.partition),
    (jt.pick = Wh.pick),
    (jt.pickBy = Wh.pickBy),
    (jt.property = Jh.property),
    (jt.propertyOf = Jh.propertyOf),
    (jt.pull = Bh.pull),
    (jt.pullAll = Bh.pullAll),
    (jt.pullAllBy = Bh.pullAllBy),
    (jt.pullAllWith = Bh.pullAllWith),
    (jt.pullAt = Bh.pullAt),
    (jt.range = Jh.range),
    (jt.rangeRight = Jh.rangeRight),
    (jt.rearg = Vh.rearg),
    (jt.reject = Rh.reject),
    (jt.remove = Bh.remove),
    (jt.rest = Vh.rest),
    (jt.reverse = Bh.reverse),
    (jt.sampleSize = Rh.sampleSize),
    (jt.set = Wh.set),
    (jt.setWith = Wh.setWith),
    (jt.shuffle = Rh.shuffle),
    (jt.slice = Bh.slice),
    (jt.sortBy = Rh.sortBy),
    (jt.sortedUniq = Bh.sortedUniq),
    (jt.sortedUniqBy = Bh.sortedUniqBy),
    (jt.split = Uh.split),
    (jt.spread = Vh.spread),
    (jt.tail = Bh.tail),
    (jt.take = Bh.take),
    (jt.takeRight = Bh.takeRight),
    (jt.takeRightWhile = Bh.takeRightWhile),
    (jt.takeWhile = Bh.takeWhile),
    (jt.tap = Hh.tap),
    (jt.throttle = Vh.throttle),
    (jt.thru = nh),
    (jt.toArray = zh.toArray),
    (jt.toPairs = Wh.toPairs),
    (jt.toPairsIn = Wh.toPairsIn),
    (jt.toPath = Jh.toPath),
    (jt.toPlainObject = zh.toPlainObject),
    (jt.transform = Wh.transform),
    (jt.unary = Vh.unary),
    (jt.union = Bh.union),
    (jt.unionBy = Bh.unionBy),
    (jt.unionWith = Bh.unionWith),
    (jt.uniq = Bh.uniq),
    (jt.uniqBy = Bh.uniqBy),
    (jt.uniqWith = Bh.uniqWith),
    (jt.unset = Wh.unset),
    (jt.unzip = Bh.unzip),
    (jt.unzipWith = Bh.unzipWith),
    (jt.update = Wh.update),
    (jt.updateWith = Wh.updateWith),
    (jt.values = Wh.values),
    (jt.valuesIn = Wh.valuesIn),
    (jt.without = Bh.without),
    (jt.words = Uh.words),
    (jt.wrap = Vh.wrap),
    (jt.xor = Bh.xor),
    (jt.xorBy = Bh.xorBy),
    (jt.xorWith = Bh.xorWith),
    (jt.zip = Bh.zip),
    (jt.zipObject = Bh.zipObject),
    (jt.zipObjectDeep = Bh.zipObjectDeep),
    (jt.zipWith = Bh.zipWith),
    (jt.entries = Wh.toPairs),
    (jt.entriesIn = Wh.toPairsIn),
    (jt.extend = Wh.assignIn),
    (jt.extendWith = Wh.assignInWith),
    su(jt, jt),
    (jt.add = $h.add),
    (jt.attempt = Jh.attempt),
    (jt.camelCase = Uh.camelCase),
    (jt.capitalize = Uh.capitalize),
    (jt.ceil = $h.ceil),
    (jt.clamp = Fh),
    (jt.clone = zh.clone),
    (jt.cloneDeep = zh.cloneDeep),
    (jt.cloneDeepWith = zh.cloneDeepWith),
    (jt.cloneWith = zh.cloneWith),
    (jt.conformsTo = zh.conformsTo),
    (jt.deburr = Uh.deburr),
    (jt.defaultTo = Jh.defaultTo),
    (jt.divide = $h.divide),
    (jt.endsWith = Uh.endsWith),
    (jt.eq = zh.eq),
    (jt.escape = Uh.escape),
    (jt.escapeRegExp = Uh.escapeRegExp),
    (jt.every = Rh.every),
    (jt.find = Rh.find),
    (jt.findIndex = Bh.findIndex),
    (jt.findKey = Wh.findKey),
    (jt.findLast = Rh.findLast),
    (jt.findLastIndex = Bh.findLastIndex),
    (jt.findLastKey = Wh.findLastKey),
    (jt.floor = $h.floor),
    (jt.forEach = Rh.forEach),
    (jt.forEachRight = Rh.forEachRight),
    (jt.forIn = Wh.forIn),
    (jt.forInRight = Wh.forInRight),
    (jt.forOwn = Wh.forOwn),
    (jt.forOwnRight = Wh.forOwnRight),
    (jt.get = Wh.get),
    (jt.gt = zh.gt),
    (jt.gte = zh.gte),
    (jt.has = Wh.has),
    (jt.hasIn = Wh.hasIn),
    (jt.head = Bh.head),
    (jt.identity = H),
    (jt.includes = Rh.includes),
    (jt.indexOf = Bh.indexOf),
    (jt.inRange = qh),
    (jt.invoke = Wh.invoke),
    (jt.isArguments = zh.isArguments),
    (jt.isArray = M),
    (jt.isArrayBuffer = zh.isArrayBuffer),
    (jt.isArrayLike = zh.isArrayLike),
    (jt.isArrayLikeObject = zh.isArrayLikeObject),
    (jt.isBoolean = zh.isBoolean),
    (jt.isBuffer = zh.isBuffer),
    (jt.isDate = zh.isDate),
    (jt.isElement = zh.isElement),
    (jt.isEmpty = zh.isEmpty),
    (jt.isEqual = zh.isEqual),
    (jt.isEqualWith = zh.isEqualWith),
    (jt.isError = zh.isError),
    (jt.isFinite = zh.isFinite),
    (jt.isFunction = zh.isFunction),
    (jt.isInteger = zh.isInteger),
    (jt.isLength = zh.isLength),
    (jt.isMap = zh.isMap),
    (jt.isMatch = zh.isMatch),
    (jt.isMatchWith = zh.isMatchWith),
    (jt.isNaN = zh.isNaN),
    (jt.isNative = zh.isNative),
    (jt.isNil = zh.isNil),
    (jt.isNull = zh.isNull),
    (jt.isNumber = zh.isNumber),
    (jt.isObject = R),
    (jt.isObjectLike = zh.isObjectLike),
    (jt.isPlainObject = zh.isPlainObject),
    (jt.isRegExp = zh.isRegExp),
    (jt.isSafeInteger = zh.isSafeInteger),
    (jt.isSet = zh.isSet),
    (jt.isString = zh.isString),
    (jt.isSymbol = zh.isSymbol),
    (jt.isTypedArray = zh.isTypedArray),
    (jt.isUndefined = zh.isUndefined),
    (jt.isWeakMap = zh.isWeakMap),
    (jt.isWeakSet = zh.isWeakSet),
    (jt.join = Bh.join),
    (jt.kebabCase = Uh.kebabCase),
    (jt.last = so),
    (jt.lastIndexOf = Bh.lastIndexOf),
    (jt.lowerCase = Uh.lowerCase),
    (jt.lowerFirst = Uh.lowerFirst),
    (jt.lt = zh.lt),
    (jt.lte = zh.lte),
    (jt.max = $h.max),
    (jt.maxBy = $h.maxBy),
    (jt.mean = $h.mean),
    (jt.meanBy = $h.meanBy),
    (jt.min = $h.min),
    (jt.minBy = $h.minBy),
    (jt.stubArray = Jh.stubArray),
    (jt.stubFalse = Jh.stubFalse),
    (jt.stubObject = Jh.stubObject),
    (jt.stubString = Jh.stubString),
    (jt.stubTrue = Jh.stubTrue),
    (jt.multiply = $h.multiply),
    (jt.nth = Bh.nth),
    (jt.noop = Jh.noop),
    (jt.now = Dh),
    (jt.pad = Uh.pad),
    (jt.padEnd = Uh.padEnd),
    (jt.padStart = Uh.padStart),
    (jt.parseInt = Uh.parseInt),
    (jt.random = Gh),
    (jt.reduce = Rh.reduce),
    (jt.reduceRight = Rh.reduceRight),
    (jt.repeat = Uh.repeat),
    (jt.replace = Uh.replace),
    (jt.result = Wh.result),
    (jt.round = $h.round),
    (jt.sample = Rh.sample),
    (jt.size = Rh.size),
    (jt.snakeCase = Uh.snakeCase),
    (jt.some = Rh.some),
    (jt.sortedIndex = Bh.sortedIndex),
    (jt.sortedIndexBy = Bh.sortedIndexBy),
    (jt.sortedIndexOf = Bh.sortedIndexOf),
    (jt.sortedLastIndex = Bh.sortedLastIndex),
    (jt.sortedLastIndexBy = Bh.sortedLastIndexBy),
    (jt.sortedLastIndexOf = Bh.sortedLastIndexOf),
    (jt.startCase = Uh.startCase),
    (jt.startsWith = Uh.startsWith),
    (jt.subtract = $h.subtract),
    (jt.sum = $h.sum),
    (jt.sumBy = $h.sumBy),
    (jt.template = Uh.template),
    (jt.times = Jh.times),
    (jt.toFinite = zh.toFinite),
    (jt.toInteger = W),
    (jt.toLength = zh.toLength),
    (jt.toLower = Uh.toLower),
    (jt.toNumber = zh.toNumber),
    (jt.toSafeInteger = zh.toSafeInteger),
    (jt.toString = zh.toString),
    (jt.toUpper = Uh.toUpper),
    (jt.trim = Uh.trim),
    (jt.trimEnd = Uh.trimEnd),
    (jt.trimStart = Uh.trimStart),
    (jt.truncate = Uh.truncate),
    (jt.unescape = Uh.unescape),
    (jt.uniqueId = Jh.uniqueId),
    (jt.upperCase = Uh.upperCase),
    (jt.upperFirst = Uh.upperFirst),
    (jt.each = Rh.forEach),
    (jt.eachRight = Rh.forEachRight),
    (jt.first = Bh.head),
    su(
      jt,
      ((Kh = {}),
      Ts(jt, function (t, e) {
        eu.call(jt.prototype, e) || (Kh[e] = t)
      }),
      Kh),
      { chain: !1 },
    ),
    (jt.VERSION = '4.17.21'),
    ((jt.templateSettings = Uh.templateSettings).imports._ = jt),
    Ft(
      ['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'],
      function (t) {
        jt[t].placeholder = jt
      },
    ),
    Ft(['drop', 'take'], function (t, e) {
      ;(xt.prototype[t] = function (n) {
        n = void 0 === n ? 1 : ru(W(n), 0)
        var r = this.__filtered__ && !e ? new xt(this) : this.clone()
        return (
          r.__filtered__
            ? (r.__takeCount__ = iu(n, r.__takeCount__))
            : r.__views__.push({
                size: iu(n, Qh),
                type: t + (r.__dir__ < 0 ? 'Right' : ''),
              }),
          r
        )
      }),
        (xt.prototype[t + 'Right'] = function (e) {
          return this.reverse()[t](e).reverse()
        })
    }),
    Ft(['filter', 'map', 'takeWhile'], function (t, e) {
      var n = e + 1,
        r = 1 == n || 3 == n
      xt.prototype[t] = function (t) {
        var e = this.clone()
        return (
          e.__iteratees__.push({ iteratee: Cs(t), type: n }),
          (e.__filtered__ = e.__filtered__ || r),
          e
        )
      }
    }),
    Ft(['head', 'last'], function (t, e) {
      var n = 'take' + (e ? 'Right' : '')
      xt.prototype[t] = function () {
        return this[n](1).value()[0]
      }
    }),
    Ft(['initial', 'tail'], function (t, e) {
      var n = 'drop' + (e ? '' : 'Right')
      xt.prototype[t] = function () {
        return this.__filtered__ ? new xt(this) : this[n](1)
      }
    }),
    (xt.prototype.compact = function () {
      return this.filter(H)
    }),
    (xt.prototype.find = function (t) {
      return this.filter(t).head()
    }),
    (xt.prototype.findLast = function (t) {
      return this.reverse().find(t)
    }),
    (xt.prototype.invokeMap = ye(function (t, e) {
      return 'function' == typeof t
        ? new xt(this)
        : this.map(function (n) {
            return Ca(n, t, e)
          })
    })),
    (xt.prototype.reject = function (t) {
      return this.filter(ol(Cs(t)))
    }),
    (xt.prototype.slice = function (t, e) {
      t = W(t)
      var n = this
      return n.__filtered__ && (t > 0 || e < 0)
        ? new xt(n)
        : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
          void 0 !== e &&
            (n = (e = W(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
          n)
    }),
    (xt.prototype.takeRightWhile = function (t) {
      return this.reverse().takeWhile(t).reverse()
    }),
    (xt.prototype.toArray = function () {
      return this.take(Qh)
    }),
    Ts(xt.prototype, function (t, e) {
      var n = /^(?:filter|find|map|reject)|While$/.test(e),
        r = /^(?:head|last)$/.test(e),
        i = jt[r ? 'take' + ('last' == e ? 'Right' : '') : e],
        s = r || /^find/.test(e)
      i &&
        (jt.prototype[e] = function () {
          var e = this.__wrapped__,
            o = r ? [1] : arguments,
            a = e instanceof xt,
            l = o[0],
            c = a || M(e),
            h = function (t) {
              var e = i.apply(jt, Sn([t], o))
              return r && u ? e[0] : e
            }
          c && n && 'function' == typeof l && 1 != l.length && (a = c = !1)
          var u = this.__chain__,
            g = !!this.__actions__.length,
            d = s && !u,
            f = a && !g
          if (!s && c) {
            e = f ? e : new xt(this)
            var p = t.apply(e, o)
            return (
              p.__actions__.push({ func: nh, args: [h], thisArg: void 0 }),
              new Et(p, u)
            )
          }
          return d && f
            ? t.apply(this, o)
            : ((p = this.thru(h)), d ? (r ? p.value()[0] : p.value()) : p)
        })
    }),
    Ft(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (t) {
      var e = tu[t],
        n = /^(?:push|sort|unshift)$/.test(t) ? 'tap' : 'thru',
        r = /^(?:pop|shift)$/.test(t)
      jt.prototype[t] = function () {
        var t = arguments
        if (r && !this.__chain__) {
          var i = this.value()
          return e.apply(M(i) ? i : [], t)
        }
        return this[n](function (n) {
          return e.apply(M(n) ? n : [], t)
        })
      }
    }),
    Ts(xt.prototype, function (t, e) {
      var n = jt[e]
      if (n) {
        var r = n.name + ''
        eu.call(At, r) || (At[r] = []), At[r].push({ name: e, func: n })
      }
    }),
    (At[re(void 0, 2).name] = [{ name: 'wrapper', func: void 0 }]),
    (xt.prototype.clone = function () {
      var t = new xt(this.__wrapped__)
      return (
        (t.__actions__ = Mt(this.__actions__)),
        (t.__dir__ = this.__dir__),
        (t.__filtered__ = this.__filtered__),
        (t.__iteratees__ = Mt(this.__iteratees__)),
        (t.__takeCount__ = this.__takeCount__),
        (t.__views__ = Mt(this.__views__)),
        t
      )
    }),
    (xt.prototype.reverse = function () {
      if (this.__filtered__) {
        var t = new xt(this)
        ;(t.__dir__ = -1), (t.__filtered__ = !0)
      } else (t = this.clone()).__dir__ *= -1
      return t
    }),
    (xt.prototype.value = function () {
      var t = this.__wrapped__.value(),
        e = this.__dir__,
        n = M(t),
        r = e < 0,
        i = n ? t.length : 0,
        s = (function (t, e, n) {
          for (var r = -1, i = n.length; ++r < i; ) {
            var s = n[r],
              o = s.size
            switch (s.type) {
              case 'drop':
                t += o
                break
              case 'dropRight':
                e -= o
                break
              case 'take':
                e = Yh(e, t + o)
                break
              case 'takeRight':
                t = Xh(t, e - o)
            }
          }
          return { start: t, end: e }
        })(0, i, this.__views__),
        o = s.start,
        a = s.end,
        l = a - o,
        c = r ? a : o - 1,
        h = this.__iteratees__,
        u = h.length,
        g = 0,
        d = Zh(l, this.__takeCount__)
      if (!n || (!r && i == l && d == l)) return sh(t, this.__actions__)
      var f = []
      t: for (; l-- && g < d; ) {
        for (var p = -1, m = t[(c += e)]; ++p < u; ) {
          var y = h[p],
            v = y.iteratee,
            b = y.type,
            x = v(m)
          if (2 == b) m = x
          else if (!x) {
            if (1 == b) continue t
            break t
          }
        }
        f[g++] = m
      }
      return f
    }),
    (jt.prototype.at = Hh.at),
    (jt.prototype.chain = Hh.wrapperChain),
    (jt.prototype.commit = Hh.commit),
    (jt.prototype.next = Hh.next),
    (jt.prototype.plant = Hh.plant),
    (jt.prototype.reverse = Hh.reverse),
    (jt.prototype.toJSON =
      jt.prototype.valueOf =
      jt.prototype.value =
        Hh.value),
    (jt.prototype.first = jt.prototype.head),
    nu && (jt.prototype[nu] = Hh.toIterator)
  class uu {
    constructor() {
      this.listeners = {}
    }
    on(t, e, n) {
      if (null == e) return this
      this.listeners[t] || (this.listeners[t] = [])
      return this.listeners[t].push(e, n), this
    }
    once(t, e, n) {
      const r = (...i) => (this.off(t, r), hu([e, n], i))
      return this.on(t, r, this)
    }
    off(t, e, n) {
      if (!(t || e || n)) return (this.listeners = {}), this
      const r = this.listeners
      return (
        (t ? [t] : Object.keys(r)).forEach((t) => {
          const i = r[t]
          if (i)
            if (e || n)
              for (let t = i.length - 2; t >= 0; t -= 2)
                (e && i[t] !== e) || (n && i[t + 1] !== n) || i.splice(t, 2)
            else delete r[t]
        }),
        this
      )
    }
    trigger(t, ...e) {
      let n = !0
      if ('*' !== t) {
        const r = this.listeners[t]
        null != r && (n = hu([...r], e))
      }
      const r = this.listeners['*']
      return null != r ? cu([n, hu([...r], [t, ...e])]) : n
    }
    emit(t, ...e) {
      return this.trigger(t, ...e)
    }
  }
  const gu =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (t, e) {
        t.__proto__ = e
      }) ||
    function (t, e) {
      for (const n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
    }
  const du =
    /^\s*class\s+/.test(`${class {}}`) || /^\s*class\s*\{/.test(`${class {}}`)
  function fu(t, e) {
    let n
    return (
      du
        ? (n = class extends e {})
        : ((n = function () {
            return e.apply(this, arguments)
          }),
          (function (t, e) {
            function n() {
              this.constructor = t
            }
            gu(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()))
          })(n, e)),
      Object.defineProperty(n, 'name', { value: t }),
      n
    )
  }
  function pu(t) {
    return '__proto__' === t
  }
  function mu(t, e, n = '/') {
    let r
    const i = Array.isArray(e) ? e : e.split(n)
    if (i.length)
      for (r = t; i.length; ) {
        const t = i.shift()
        if (Object(r) !== r || !t || !(t in r)) return
        r = r[t]
      }
    return r
  }
  function yu(t, e, n, r = '/') {
    const i = Array.isArray(e) ? e : e.split(r),
      s = i.pop()
    if (s && !pu(s)) {
      let e = t
      i.forEach((t) => {
        pu(t) || (null == e[t] && (e[t] = {}), (e = e[t]))
      }),
        (e[s] = n)
    }
    return t
  }
  function vu(t, e, n = '/') {
    const r = Array.isArray(e) ? e.slice() : e.split(n),
      i = r.pop()
    if (i)
      if (r.length > 0) {
        const e = mu(t, r)
        e && delete e[i]
      } else delete t[i]
    return t
  }
  class bu extends uu {}
  !(function (t) {
    t.dispose = h.dispose
  })(bu || (bu = {})),
    (function (t, ...e) {
      e.forEach((e) => {
        Object.getOwnPropertyNames(e.prototype).forEach((n) => {
          'constructor' !== n &&
            Object.defineProperty(
              t.prototype,
              n,
              Object.getOwnPropertyDescriptor(e.prototype, n),
            )
        })
      })
    })(bu, h)
  const xu = (t) => {
      const e = Object.create(null)
      return (n) => e[n] || (e[n] = t(n))
    },
    wu = xu((t) => t.replace(/\B([A-Z])/g, '-$1').toLowerCase()),
    Pu = xu((t) => Vc(Wr(t)).replace(/ /g, ''))
  function Au(t) {
    let e = 2166136261,
      n = !1,
      r = t
    for (let t = 0, i = r.length; t < i; t += 1) {
      let i = r.charCodeAt(t)
      i > 127 &&
        !n &&
        ((r = unescape(encodeURIComponent(r))),
        (i = r.charCodeAt(t)),
        (n = !0)),
        (e ^= i),
        (e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24))
    }
    return e >>> 0
  }
  function Cu() {
    let t = ''
    const e = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    for (let n = 0, r = e.length; n < r; n += 1) {
      const r = e[n],
        i = (16 * Math.random()) | 0
      t += ('x' === r ? i : 'y' === r ? (3 & i) | 8 : r).toString(16)
    }
    return t
  }
  function Ou(t, e, n) {
    let r = new Array(e.length + 1),
      i = new Array(e.length + 1)
    const s = n + 1
    for (let t = 0; t <= e.length; t += 1) r[t] = t
    for (let o = 1; o <= t.length; o += 1) {
      const a = t.charCodeAt(o - 1),
        l = o > n ? o - n : 1,
        c = e.length > n + o ? n + o : e.length
      i[0] = o
      let h = o
      for (let t = 1; t < l; t += 1) i[t] = s
      for (let t = l; t <= c; t += 1) {
        const n =
          a === e.charCodeAt(t - 1)
            ? r[t - 1]
            : Math.min(r[t] + 1, i[t - 1] + 1, r[t - 1] + 2)
        ;(i[t] = n), (h = Math.min(h, n))
      }
      for (let t = c + 1; t <= e.length; t += 1) i[t] = s
      if (h > n) return
      const u = r
      ;(r = i), (i = u)
    }
    const o = r[e.length]
    return o > n ? void 0 : o
  }
  function Eu(t) {
    return 'string' == typeof t && '%' === t.slice(-1)
  }
  function Mu(t, e) {
    if (null == t) return 0
    let n
    if ('string' == typeof t) {
      if (((n = parseFloat(t)), Eu(t) && ((n /= 100), Number.isFinite(n))))
        return n * e
    } else n = t
    return Number.isFinite(n) ? (n > 0 && n < 1 ? n * e : n) : 0
  }
  function Su(t) {
    if ('object' == typeof t) {
      let e = 0,
        n = 0,
        r = 0,
        i = 0
      return (
        null != t.vertical &&
          Number.isFinite(t.vertical) &&
          (n = i = t.vertical),
        null != t.horizontal &&
          Number.isFinite(t.horizontal) &&
          (r = e = t.horizontal),
        null != t.left && Number.isFinite(t.left) && (e = t.left),
        null != t.top && Number.isFinite(t.top) && (n = t.top),
        null != t.right && Number.isFinite(t.right) && (r = t.right),
        null != t.bottom && Number.isFinite(t.bottom) && (i = t.bottom),
        { top: n, right: r, bottom: i, left: e }
      )
    }
    let e = 0
    return (
      null != t && Number.isFinite(t) && (e = t),
      { top: e, right: e, bottom: e, left: e }
    )
  }
  let Tu = !1,
    ju = !1,
    ku = !1,
    Nu = !1,
    _u = !1,
    Lu = !1,
    Iu = !1,
    Bu = !1,
    Ru = !1,
    Du = !1,
    Vu = !1,
    zu = !1,
    $u = !1,
    Fu = !1,
    qu = !1,
    Gu = !1
  if ('object' == typeof navigator) {
    const t = navigator.userAgent
    ;(Tu = t.indexOf('Macintosh') >= 0),
      (ju = !!t.match(/(iPad|iPhone|iPod)/g)),
      (ku = t.indexOf('Windows') >= 0),
      (Nu = t.indexOf('MSIE') >= 0),
      (_u = !!t.match(/Trident\/7\./)),
      (Lu = !!t.match(/Edge\//)),
      (Iu =
        t.indexOf('Mozilla/') >= 0 &&
        t.indexOf('MSIE') < 0 &&
        t.indexOf('Edge/') < 0),
      (Ru = t.indexOf('Chrome/') >= 0 && t.indexOf('Edge/') < 0),
      (Du = t.indexOf('Opera/') >= 0 || t.indexOf('OPR/') >= 0),
      (Vu = t.indexOf('Firefox/') >= 0),
      (zu =
        t.indexOf('AppleWebKit/') >= 0 &&
        t.indexOf('Chrome/') < 0 &&
        t.indexOf('Edge/') < 0),
      'object' == typeof document &&
        (Gu =
          !document.createElementNS ||
          '[object SVGForeignObjectElement]' !=
            `${document.createElementNS(
              'http://www.w3.org/2000/svg',
              'foreignObject',
            )}` ||
          t.indexOf('Opera/') >= 0)
  }
  if (
    ('object' == typeof window &&
      ((Bu =
        null != window.chrome &&
        null != window.chrome.app &&
        null != window.chrome.app.runtime),
      (Fu = null != window.PointerEvent && !Tu)),
    'object' == typeof document)
  ) {
    $u = 'ontouchstart' in document.documentElement
    try {
      const t = Object.defineProperty({}, 'passive', {
          get() {
            qu = !0
          },
        }),
        e = document.createElement('div')
      e.addEventListener && e.addEventListener('click', () => {}, t)
    } catch (t) {}
  }
  var Wu
  !(function (t) {
    ;(t.IS_MAC = Tu),
      (t.IS_IOS = ju),
      (t.IS_WINDOWS = ku),
      (t.IS_IE = Nu),
      (t.IS_IE11 = _u),
      (t.IS_EDGE = Lu),
      (t.IS_NETSCAPE = Iu),
      (t.IS_CHROME_APP = Bu),
      (t.IS_CHROME = Ru),
      (t.IS_OPERA = Du),
      (t.IS_FIREFOX = Vu),
      (t.IS_SAFARI = zu),
      (t.SUPPORT_TOUCH = $u),
      (t.SUPPORT_POINTER = Fu),
      (t.SUPPORT_PASSIVE = qu),
      (t.NO_FOREIGNOBJECT = Gu),
      (t.SUPPORT_FOREIGNOBJECT = !t.NO_FOREIGNOBJECT)
  })(Wu || (Wu = {})),
    (function (t) {
      function e() {
        const t = window.module
        return null != t && null != t.hot && null != t.hot.status
          ? t.hot.status()
          : 'unkonwn'
      }
      ;(t.getHMRStatus = e),
        (t.isApplyingHMR = function () {
          return 'apply' === e()
        })
      const n = {
        select: 'input',
        change: 'input',
        submit: 'form',
        reset: 'form',
        error: 'img',
        load: 'img',
        abort: 'img',
      }
      t.isEventSupported = function (t) {
        const e = document.createElement(n[t] || 'div'),
          r = `on${t}`
        let i = r in e
        return (
          i || (e.setAttribute(r, 'return;'), (i = 'function' == typeof e[r])),
          i
        )
      }
    })(Wu || (Wu = {}))
  const Hu = /[\t\r\n\f]/g,
    Uu = /\S+/g,
    Ju = (t) => ` ${t} `
  function Xu(t) {
    return (t && t.getAttribute && t.getAttribute('class')) || ''
  }
  function Yu(t, e) {
    if (null == t || null == e) return !1
    const n = Ju(Xu(t)),
      r = Ju(e)
    return 1 === t.nodeType && n.replace(Hu, ' ').includes(r)
  }
  function Zu(t, e) {
    if (null != t && null != e) {
      if ('function' == typeof e) return Zu(t, e(Xu(t)))
      if ('string' == typeof e && 1 === t.nodeType) {
        const n = e.match(Uu) || [],
          r = Ju(Xu(t)).replace(Hu, ' ')
        let i = n.reduce((t, e) => (t.indexOf(Ju(e)) < 0 ? `${t}${e} ` : t), r)
        ;(i = i.trim()), r !== i && t.setAttribute('class', i)
      }
    }
  }
  function Ku(t, e) {
    if (null != t) {
      if ('function' == typeof e) return Ku(t, e(Xu(t)))
      if ((!e || 'string' == typeof e) && 1 === t.nodeType) {
        const n = (e || '').match(Uu) || [],
          r = Ju(Xu(t)).replace(Hu, ' ')
        let i = n.reduce((t, e) => {
          const n = Ju(e)
          return t.indexOf(n) > -1 ? t.replace(n, ' ') : t
        }, r)
        ;(i = e ? i.trim() : ''), r !== i && t.setAttribute('class', i)
      }
    }
  }
  function Qu(t, e, n) {
    if (null != t && null != e)
      if (null == n || 'string' != typeof e) {
        if ('function' == typeof e) return Qu(t, e(Xu(t), n), n)
        if ('string' == typeof e) {
          ;(e.match(Uu) || []).forEach((e) => {
            Yu(t, e) ? Ku(t, e) : Zu(t, e)
          })
        }
      } else n ? Zu(t, e) : Ku(t, e)
  }
  let tg = 0
  function eg(t) {
    return (null != t.id && '' !== t.id) || (t.id = ((tg += 1), `v${tg}`)), t.id
  }
  function ng(t) {
    return (
      null != t &&
      'function' == typeof t.getScreenCTM &&
      t instanceof SVGElement
    )
  }
  const rg = {
    svg: 'http://www.w3.org/2000/svg',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xlink: 'http://www.w3.org/1999/xlink',
    xhtml: 'http://www.w3.org/1999/xhtml',
  }
  function ig(t, e = document) {
    return e.createElement(t)
  }
  function sg(t, e = rg.xhtml, n = document) {
    return n.createElementNS(e, t)
  }
  function og(t, e = document) {
    return sg(t, rg.svg, e)
  }
  function ag(t) {
    if (t) {
      const e = `<svg xmlns="${rg.svg}" xmlns:xlink="${rg.xlink}" version="1.1">${t}</svg>`,
        { documentElement: n } = (function (t, e = {}) {
          let n
          try {
            const r = new DOMParser()
            if (null != e.async) {
              r.async = e.async
            }
            n = r.parseFromString(t, e.mimeType || 'text/xml')
          } catch (t) {
            n = void 0
          }
          if (!n || n.getElementsByTagName('parsererror').length)
            throw new Error(`Invalid XML: ${t}`)
          return n
        })(e, { async: !1 })
      return n
    }
    const e = document.createElementNS(rg.svg, 'svg')
    return (
      e.setAttributeNS(rg.xmlns, 'xmlns:xlink', rg.xlink),
      e.setAttribute('version', '1.1'),
      e
    )
  }
  function lg(t) {
    let e = 0,
      n = t.previousSibling
    for (; n; ) 1 === n.nodeType && (e += 1), (n = n.previousSibling)
    return e
  }
  function cg(t, e, n) {
    const r = t.ownerSVGElement
    let i = t.parentNode
    for (; i && i !== n && i !== r; ) {
      if (Yu(i, e)) return i
      i = i.parentNode
    }
    return null
  }
  function hg(t, e) {
    const n = e && e.parentNode
    return (
      t === n || !!(n && 1 === n.nodeType && 16 & t.compareDocumentPosition(n))
    )
  }
  function ug(t) {
    if (t) {
      ;(Array.isArray(t) ? t : [t]).forEach((t) => {
        t.parentNode && t.parentNode.removeChild(t)
      })
    }
  }
  function gg(t) {
    for (; t.firstChild; ) t.removeChild(t.firstChild)
  }
  function dg(t, e) {
    ;(Array.isArray(e) ? e : [e]).forEach((e) => {
      null != e && t.appendChild(e)
    })
  }
  function fg(t, e) {
    const n = t.parentNode
    if (n) {
      ;(Array.isArray(e) ? e : [e]).forEach((e) => {
        null != e && n.insertBefore(e, t)
      })
    }
  }
  function pg(t) {
    try {
      return t instanceof HTMLElement
    } catch (e) {
      return (
        'object' == typeof t &&
        1 === t.nodeType &&
        'object' == typeof t.style &&
        'object' == typeof t.ownerDocument
      )
    }
  }
  const mg = ['viewBox', 'attributeName', 'attributeType', 'repeatCount']
  function yg(t, e) {
    const n = wg(e)
    n.ns
      ? t.hasAttributeNS(n.ns, n.local) && t.removeAttributeNS(n.ns, n.local)
      : t.hasAttribute(e) && t.removeAttribute(e)
  }
  function vg(t, e, n) {
    if (null == n) return yg(t, e)
    const r = wg(e)
    r.ns && 'string' == typeof n
      ? t.setAttributeNS(r.ns, e, n)
      : 'id' === e
      ? (t.id = `${n}`)
      : t.setAttribute(e, `${n}`)
  }
  function bg(t, e) {
    Object.keys(e).forEach((n) => {
      vg(t, n, e[n])
    })
  }
  function xg(t, e, n) {
    if (null == e) {
      const e = t.attributes,
        n = {}
      for (let t = 0; t < e.length; t += 1) n[e[t].name] = e[t].value
      return n
    }
    if ('string' == typeof e && void 0 === n) return t.getAttribute(e)
    'object' == typeof e ? bg(t, e) : vg(t, e, n)
  }
  function wg(t) {
    if (-1 !== t.indexOf(':')) {
      const e = t.split(':')
      return { ns: rg[e[0]], local: e[1] }
    }
    return { ns: null, local: t }
  }
  function Pg(t) {
    const e = {}
    return (
      Object.keys(t).forEach((n) => {
        const r = mg.includes(n) ? n : wu(n)
        e[r] = t[n]
      }),
      e
    )
  }
  function Ag(t) {
    const e = {}
    return (
      t.split(';').forEach((t) => {
        const n = t.trim()
        if (n) {
          const t = n.split('=')
          t.length && (e[t[0].trim()] = t[1] ? t[1].trim() : '')
        }
      }),
      e
    )
  }
  function Cg(t, e) {
    return (
      Object.keys(e).forEach((n) => {
        if ('class' === n) t[n] = t[n] ? `${t[n]} ${e[n]}` : e[n]
        else if ('style' === n) {
          const r = 'object' == typeof t[n],
            i = 'object' == typeof e[n]
          let s, o
          r && i
            ? ((s = t[n]), (o = e[n]))
            : r
            ? ((s = t[n]), (o = Ag(e[n])))
            : i
            ? ((s = Ag(t[n])), (o = e[n]))
            : ((s = Ag(t[n])), (o = Ag(e[n]))),
            (t[n] = Cg(s, o))
        } else t[n] = e[n]
      }),
      t
    )
  }
  function Og(t, e, n = {}) {
    const r = n.offset || 0,
      i = [],
      s = []
    let o,
      a,
      l = null
    for (let c = 0; c < t.length; c += 1) {
      o = s[c] = t[c]
      for (let i = 0, a = e.length; i < a; i += 1) {
        const a = e[i],
          l = a.start + r,
          h = a.end + r
        c >= l &&
          c < h &&
          ('string' == typeof o
            ? (o = s[c] = { t: t[c], attrs: a.attrs })
            : (o.attrs = Cg(Cg({}, o.attrs), a.attrs)),
          n.includeAnnotationIndices &&
            (null == o.annotations && (o.annotations = []),
            o.annotations.push(i)))
      }
      ;(a = s[c - 1]),
        a
          ? R(o) && R(a)
            ? JSON.stringify(o.attrs) === JSON.stringify(a.attrs)
              ? (l.t += o.t)
              : (i.push(l), (l = o))
            : R(o) || R(a)
            ? (i.push(l), (l = o))
            : (l = (l || '') + o)
          : (l = o)
    }
    return null != l && i.push(l), i
  }
  var Eg
  let Mg
  !(function (t) {
    function e(t) {
      const e = 'data:'
      return t.substr(0, e.length) === e
    }
    function n(t) {
      let e = t.replace(/\s/g, '')
      e = decodeURIComponent(e)
      const n = e.indexOf(','),
        r = e.slice(0, n),
        i = r.split(':')[1].split(';')[0],
        s = e.slice(n + 1)
      let o
      o = r.indexOf('base64') >= 0 ? atob(s) : unescape(encodeURIComponent(s))
      const a = new Uint8Array(o.length)
      for (let t = 0; t < o.length; t += 1) a[t] = o.charCodeAt(t)
      return new Blob([a], { type: i })
    }
    function r(t, e) {
      const n = window.navigator.msSaveBlob
      if (n) n(t, e)
      else {
        const n = window.URL.createObjectURL(t),
          r = document.createElement('a')
        ;(r.href = n),
          (r.download = e),
          document.body.appendChild(r),
          r.click(),
          document.body.removeChild(r),
          window.URL.revokeObjectURL(n)
      }
    }
    function i(t) {
      const e = parseFloat(t)
      return Number.isNaN(e) ? null : e
    }
    ;(t.isDataUrl = e),
      (t.imageToDataUri = function (t, n) {
        if (!t || e(t)) return void setTimeout(() => n(null, t))
        const r = () => {
            n(new Error(`Failed to load image: ${t}`))
          },
          i = window.FileReader
            ? (t) => {
                if (200 === t.status) {
                  const e = new FileReader()
                  ;(e.onload = (t) => {
                    const e = t.target.result
                    n(null, e)
                  }),
                    (e.onerror = r),
                    e.readAsDataURL(t.response)
                } else r()
              }
            : (e) => {
                if (200 === e.status) {
                  let r = t.split('.').pop() || 'png'
                  'svg' === r && (r = 'svg+xml')
                  const i = `data:image/${r};base64,`,
                    s = new Uint8Array(e.response),
                    o =
                      i +
                      btoa(
                        ((t) => {
                          const e = []
                          for (let n = 0; n < t.length; n += 32768)
                            e.push(
                              String.fromCharCode.apply(
                                null,
                                t.subarray(n, n + 32768),
                              ),
                            )
                          return e.join('')
                        })(s),
                      )
                  n(null, o)
                } else r()
              },
          s = new XMLHttpRequest()
        ;(s.responseType = window.FileReader ? 'blob' : 'arraybuffer'),
          s.open('GET', t, !0),
          s.addEventListener('error', r),
          s.addEventListener('load', () => i(s)),
          s.send()
      }),
      (t.dataUriToBlob = n),
      (t.downloadBlob = r),
      (t.downloadDataUri = function (t, e) {
        r(n(t), e)
      }),
      (t.svgToDataUrl = function (t, e = {}) {
        let n = null
        const r = (e) => (
            null == n &&
              (n = (function (t) {
                const e = t.match(
                  /<svg[^>]*viewBox\s*=\s*(["']?)(.+?)\1[^>]*>/i,
                )
                return e && e[2] ? e[2].replace(/\s+/, ' ').split(' ') : null
              })(t)),
            null != n ? i(n[e]) : null
          ),
          s = (e) => {
            const n = t.match(e)
            return n && n[2] ? i(n[2]) : null
          }
        let o = e.width
        if (
          (null == o && (o = s(/<svg[^>]*width\s*=\s*(["']?)(.+?)\1[^>]*>/i)),
          null == o && (o = r(2)),
          null == o)
        )
          throw new Error('Can not parse width from svg string')
        let a = e.height
        if (
          (null == a && (a = s(/<svg[^>]*height\s*=\s*(["']?)(.+?)\1[^>]*>/i)),
          null == a && (a = r(3)),
          null == a)
        )
          throw new Error('Can not parse height from svg string')
        return `data:image/svg+xml,${encodeURIComponent(t)
          .replace(/'/g, '%27')
          .replace(/"/g, '%22')}`
      })
  })(Eg || (Eg = {}))
  const Sg = {
    px: (t) => t,
    mm: (t) => Mg * t,
    cm: (t) => Mg * t * 10,
    in: (t) => Mg * t * 25.4,
    pt: (t) => Mg * ((25.4 * t) / 72),
    pc: (t) => Mg * ((25.4 * t) / 6),
  }
  var Tg
  !(function (t) {
    function e(t, e, n) {
      const r = document.createElement('div'),
        i = r.style
      ;(i.display = 'inline-block'),
        (i.position = 'absolute'),
        (i.left = '-15000px'),
        (i.top = '-15000px'),
        (i.width = t + (n || 'px')),
        (i.height = e + (n || 'px')),
        document.body.appendChild(r)
      const s = r.getBoundingClientRect(),
        o = { width: s.width || 0, height: s.height || 0 }
      return document.body.removeChild(r), o
    }
    ;(t.measure = e),
      (t.toPx = function (t, n) {
        null == Mg && (Mg = e('1', '1', 'mm').width)
        const r = n ? Sg[n] : null
        return r ? r(t) : t
      })
  })(Tg || (Tg = {}))
  const jg = /-(.)/g
  const kg = {},
    Ng = ['webkit', 'ms', 'moz', 'o'],
    _g = document ? document.createElement('div').style : {}
  function Lg(t) {
    const e = t.replace(jg, (t, e) => e.toUpperCase())
    if (null == kg[e]) {
      const t = e.charAt(0).toUpperCase() + e.slice(1)
      kg[e] =
        e in _g
          ? e
          : (function (t) {
              for (let e = 0; e < Ng.length; e += 1) {
                const n = Ng[e] + t
                if (n in _g) return n
              }
              return null
            })(t)
    }
    return kg[e]
  }
  function Ig(t, e) {
    const n =
      t.ownerDocument &&
      t.ownerDocument.defaultView &&
      t.ownerDocument.defaultView.opener
        ? t.ownerDocument.defaultView.getComputedStyle(t, null)
        : window.getComputedStyle(t, null)
    return n && e ? n.getPropertyValue(e) || n[e] : n
  }
  const Bg = {
    animationIterationCount: !0,
    columnCount: !0,
    flexGrow: !0,
    flexShrink: !0,
    fontWeight: !0,
    gridArea: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnStart: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowStart: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    widows: !0,
    zIndex: !0,
  }
  function Rg(t, e, n) {
    if ('string' != typeof e) for (const n in e) Rg(t, n, e[n])
    else {
      const r = (function (t) {
        return /^--/.test(t)
      })(e)
      if ((r || (e = Lg(e)), void 0 === n))
        return (function (t, e, n) {
          const r = window.getComputedStyle(t, null)
          return n ? r.getPropertyValue(e) || void 0 : r[e] || t.style[e]
        })(t, e, r)
      r ||
        (n = (function (t, e) {
          return Bg[t] || 'number' != typeof e ? e : `${e}px`
        })(e, n))
      const i = t.style
      r ? i.setProperty(e, n) : (i[e] = n)
    }
  }
  function Dg(t, e) {
    const n = t[e] || t[Wr(e)]
    try {
      return JSON.parse(n)
    } catch (t) {
      return n
    }
  }
  function Vg(t, e, n) {
    if (!e) {
      const e = {},
        n = t.dataset
      for (const t in n) e[t] = Dg(n, t)
      return e
    }
    if ('string' == typeof e) {
      const r = t.dataset
      return void 0 === n
        ? Dg(r, e)
        : void (function (t, e, n) {
            let r = n
            try {
              r = JSON.stringify(r)
            } catch (t) {}
            t[Wr(e)] = r
          })(r, e, n)
    }
    for (const n in e) Vg(t, n, e[n])
  }
  class zg {
    constructor(t, e, n) {
      if (!t) throw new TypeError('Invalid element to create vector')
      let r
      if (zg.isVector(t)) r = t.node
      else if ('string' == typeof t)
        if ('svg' === t.toLowerCase()) r = ag()
        else if ('<' === t[0]) {
          const e = ag(t)
          r = document.importNode(e.firstChild, !0)
        } else r = document.createElementNS(rg.svg, t)
      else r = t
      ;(this.node = r), e && this.setAttributes(e), n && this.append(n)
    }
    get [Symbol.toStringTag]() {
      return zg.toStringTag
    }
    get type() {
      return this.node.nodeName
    }
    get id() {
      return this.node.id
    }
    set id(t) {
      this.node.id = t
    }
    transform(t, e) {
      return null == t ? ud(this.node) : (ud(this.node, t, e), this)
    }
    translate(t, e = 0, n = {}) {
      return null == t ? gd(this.node) : (gd(this.node, t, e, n), this)
    }
    rotate(t, e, n, r = {}) {
      return null == t ? dd(this.node) : (dd(this.node, t, e, n, r), this)
    }
    scale(t, e) {
      return null == t ? fd(this.node) : (fd(this.node, t, e), this)
    }
    getTransformToElement(t) {
      const e = zg.toNode(t)
      return pd(this.node, e)
    }
    removeAttribute(t) {
      return yg(this.node, t), this
    }
    getAttribute(t) {
      return (function (t, e) {
        return t.getAttribute(e)
      })(this.node, t)
    }
    setAttribute(t, e) {
      return vg(this.node, t, e), this
    }
    setAttributes(t) {
      return bg(this.node, t), this
    }
    attr(t, e) {
      return null == t
        ? xg(this.node)
        : 'string' == typeof t && void 0 === e
        ? xg(this.node, t)
        : ('object' == typeof t ? xg(this.node, t) : xg(this.node, t, e), this)
    }
    svg() {
      return this.node instanceof SVGSVGElement
        ? this
        : zg.create(this.node.ownerSVGElement)
    }
    defs() {
      const t = this.svg() || this,
        e = t.node.getElementsByTagName('defs')[0]
      return e ? zg.create(e) : zg.create('defs').appendTo(t)
    }
    text(t, e = {}) {
      return Wg(this.node, t, e), this
    }
    tagName() {
      return (function (t, e = !0) {
        const n = t.nodeName
        return e ? n.toLowerCase() : n.toUpperCase()
      })(this.node)
    }
    clone() {
      return zg.create(this.node.cloneNode(!0))
    }
    remove() {
      return ug(this.node), this
    }
    empty() {
      return gg(this.node), this
    }
    append(t) {
      return dg(this.node, zg.toNodes(t)), this
    }
    appendTo(t) {
      return (
        (function (t, e) {
          null != e && e.appendChild(t)
        })(this.node, zg.isVector(t) ? t.node : t),
        this
      )
    }
    prepend(t) {
      return (
        (function (t, e) {
          const n = t.firstChild
          n ? fg(n, e) : dg(t, e)
        })(this.node, zg.toNodes(t)),
        this
      )
    }
    before(t) {
      return fg(this.node, zg.toNodes(t)), this
    }
    replace(t) {
      return (
        this.node.parentNode &&
          this.node.parentNode.replaceChild(zg.toNode(t), this.node),
        zg.create(t)
      )
    }
    first() {
      return this.node.firstChild ? zg.create(this.node.firstChild) : null
    }
    last() {
      return this.node.lastChild ? zg.create(this.node.lastChild) : null
    }
    get(t) {
      const e = this.node.childNodes[t]
      return e ? zg.create(e) : null
    }
    indexOf(t) {
      return Array.prototype.slice
        .call(this.node.childNodes)
        .indexOf(zg.toNode(t))
    }
    find(t) {
      const e = [],
        n = (function (t, e) {
          return t.querySelectorAll(e)
        })(this.node, t)
      if (n)
        for (let t = 0, r = n.length; t < r; t += 1) e.push(zg.create(n[t]))
      return e
    }
    findOne(t) {
      const e = (function (t, e) {
        return t.querySelector(e)
      })(this.node, t)
      return e ? zg.create(e) : null
    }
    findParentByClass(t, e) {
      const n = cg(this.node, t, e)
      return n ? zg.create(n) : null
    }
    matches(t) {
      const e = this.node
      this.node.matches
      const n =
        e.matches ||
        e.matchesSelector ||
        e.msMatchesSelector ||
        e.mozMatchesSelector ||
        e.webkitMatchesSelector ||
        e.oMatchesSelector ||
        null
      return n && n.call(e, t)
    }
    contains(t) {
      return hg(this.node, zg.isVector(t) ? t.node : t)
    }
    wrap(t) {
      const e = zg.create(t),
        n = this.node.parentNode
      return null != n && n.insertBefore(e.node, this.node), e.append(this)
    }
    parent(t) {
      let e = this
      if (null == e.node.parentNode) return null
      if (((e = zg.create(e.node.parentNode)), null == t)) return e
      do {
        if ('string' == typeof t ? e.matches(t) : e instanceof t) return e
      } while ((e = zg.create(e.node.parentNode)))
      return e
    }
    children() {
      const t = this.node.childNodes,
        e = []
      for (let n = 0; n < t.length; n += 1) {
        1 === t[n].nodeType && e.push(zg.create(t[n]))
      }
      return e
    }
    eachChild(t, e) {
      const n = this.children()
      for (let r = 0, i = n.length; r < i; r += 1)
        t.call(n[r], n[r], r, n), e && n[r].eachChild(t, e)
      return this
    }
    index() {
      return lg(this.node)
    }
    hasClass(t) {
      return Yu(this.node, t)
    }
    addClass(t) {
      return Zu(this.node, t), this
    }
    removeClass(t) {
      return Ku(this.node, t), this
    }
    toggleClass(t, e) {
      return Qu(this.node, t, e), this
    }
    toLocalPoint(t, e) {
      return (function (t, e, n) {
        const r = t instanceof SVGSVGElement ? t : t.ownerSVGElement,
          i = r.createSVGPoint()
        ;(i.x = e), (i.y = n)
        try {
          const e = r.getScreenCTM(),
            n = i.matrixTransform(e.inverse()),
            s = pd(t, r).inverse()
          return n.matrixTransform(s)
        } catch (t) {
          return i
        }
      })(this.node, t, e)
    }
    sample(t = 1) {
      return this.node instanceof SVGPathElement
        ? (function (t, e = 1) {
            const n = t.getTotalLength(),
              r = []
            let i,
              s = 0
            for (; s < n; )
              (i = t.getPointAtLength(s)),
                r.push({ distance: s, x: i.x, y: i.y }),
                (s += e)
            return r
          })(this.node, t)
        : []
    }
    toPath() {
      return zg.create(
        (function (t) {
          const e = og('path')
          xg(e, xg(t))
          const n = Qg(t)
          n && e.setAttribute('d', n)
          return e
        })(this.node),
      )
    }
    toPathData() {
      return Qg(this.node)
    }
  }
  !(function (t) {
    function e(e) {
      if (null == e) return !1
      if (e instanceof t) return !0
      const n = e[Symbol.toStringTag],
        r = e
      return (
        (null == n || n === t.toStringTag) &&
        r.node instanceof SVGElement &&
        'function' == typeof r.sample &&
        'function' == typeof r.toPath
      )
    }
    function n(e, n, r) {
      return new t(e, n, r)
    }
    function r(t) {
      return e(t) ? t.node : t
    }
    ;(t.toStringTag = `X6.${t.name}`),
      (t.isVector = e),
      (t.create = n),
      (t.createVectors = function (t) {
        if ('<' === t[0]) {
          const e = ag(t),
            r = []
          for (let t = 0, i = e.childNodes.length; t < i; t += 1) {
            const i = e.childNodes[t]
            r.push(n(document.importNode(i, !0)))
          }
          return r
        }
        return [n(t)]
      }),
      (t.toNode = r),
      (t.toNodes = function (t) {
        return Array.isArray(t) ? t.map((t) => r(t)) : [r(t)]
      })
  })(zg || (zg = {}))
  const $g = document.createElement('canvas').getContext('2d')
  function Fg(t, e, n) {
    const r = n.eol,
      i = n.baseSize,
      s = n.lineHeight
    let o,
      a = 0
    const l = {},
      c = e.length - 1
    for (let s = 0; s <= c; s += 1) {
      let l = e[s],
        h = null
      if ('object' == typeof l) {
        const t = l.attrs,
          e = zg.create('tspan', t)
        o = e.node
        let u = l.t
        r && s === c && (u += r), (o.textContent = u)
        const g = t.class
        g && e.addClass(g),
          n.includeAnnotationIndices &&
            e.attr('annotations', l.annotations.join(',')),
          (h = parseFloat(t['font-size'])),
          void 0 === h && (h = i),
          h && h > a && (a = h)
      } else
        r && s === c && (l += r),
          (o = document.createTextNode(l || ' ')),
          i && i > a && (a = i)
      t.appendChild(o)
    }
    return (
      a && (l.maxFontSize = a),
      s ? (l.lineHeight = s) : a && (l.lineHeight = 1.2 * a),
      l
    )
  }
  const qg = /em$/
  function Gg(t, e) {
    const n = parseFloat(t)
    return qg.test(t) ? n * e : n
  }
  function Wg(t, e, n = {}) {
    e = (function (t) {
      return t.replace(/ /g, ' ')
    })(e)
    const r = n.eol
    let i = n.textPath
    const s = n.textVerticalAnchor,
      o = 'middle' === s || 'bottom' === s || 'top' === s
    let a = n.x
    void 0 === a && (a = t.getAttribute('x') || 0)
    const l = n.includeAnnotationIndices
    let c = n.annotations
    c && !Array.isArray(c) && (c = [c])
    const h = n.lineHeight,
      u = 'auto' === h,
      g = u ? '1.5em' : h || '1em'
    gg(t),
      xg(t, {
        'xml:space': 'preserve',
        display: e || n.displayEmpty ? null : 'none',
      })
    const d = xg(t, 'font-size')
    let f,
      p,
      m = parseFloat(d)
    m || ((m = 16), (!o && !c) || d || xg(t, 'font-size', `${m}`)),
      i
        ? ('string' == typeof i && (i = { d: i }),
          (f = (function (t, e) {
            const n = zg.create(e),
              r = zg.create('textPath'),
              i = t.d
            if (i && void 0 === t['xlink:href']) {
              const t = zg.create('path').attr('d', i).appendTo(n.defs())
              r.attr('xlink:href', `#${t.id}`)
            }
            return 'object' == typeof t && r.attr(t), r.node
          })(i, t)))
        : (f = document.createDocumentFragment())
    let y,
      v = 0
    const b = e.split('\n'),
      x = [],
      w = b.length - 1
    for (let t = 0; t <= w; t += 1) {
      p = g
      let e = 'v-line'
      const n = og('tspan')
      let s,
        o = b[t]
      if (o)
        if (c) {
          s = Fg(n, Og(o, c, { offset: -v, includeAnnotationIndices: l }), {
            eol: t !== w && r,
            baseSize: m,
            lineHeight: u ? null : g,
            includeAnnotationIndices: l,
          })
          const e = s.lineHeight
          e && u && 0 !== t && (p = e), 0 === t && (y = 0.8 * s.maxFontSize)
        } else r && t !== w && (o += r), (n.textContent = o)
      else {
        ;(n.textContent = '-'), (e += ' v-empty-line')
        const t = n.style
        ;(t.fillOpacity = 0), (t.strokeOpacity = 0), c && (s = {})
      }
      s && x.push(s),
        t > 0 && n.setAttribute('dy', p),
        (t > 0 || i) && n.setAttribute('x', a),
        (n.className.baseVal = e),
        f.appendChild(n),
        (v += o.length + 1)
    }
    if (o)
      if (c)
        p = (function (t, e, n, r) {
          if (!Array.isArray(e)) return 0
          const i = e.length
          if (!i) return 0
          let s = e[0]
          const o = Gg(s.maxFontSize, n) || n
          let a = 0
          const l = Gg(r, n)
          for (let t = 1; t < i; t += 1)
            (s = e[t]), (a += Gg(s.lineHeight, n) || l)
          const c = Gg(s.maxFontSize, n) || n
          let h
          switch (t) {
            case 'middle':
              h = o / 2 - 0.15 * c - a / 2
              break
            case 'bottom':
              h = -0.25 * c - a
              break
            default:
              h = 0.8 * o
          }
          return h
        })(s, x, m, g)
      else if ('top' === s) p = '0.8em'
      else {
        let t
        switch (
          (w > 0
            ? ((t = parseFloat(g) || 1), (t *= w), qg.test(g) || (t /= m))
            : (t = 0),
          s)
        ) {
          case 'middle':
            p = 0.3 - t / 2 + 'em'
            break
          case 'bottom':
            p = -t - 0.3 + 'em'
        }
      }
    else
      0 === s
        ? (p = '0em')
        : s
        ? (p = s)
        : ((p = 0),
          null == t.getAttribute('y') && t.setAttribute('y', `${y || '0.8em'}`))
    f.firstChild.setAttribute('dy', p), t.appendChild(f)
  }
  function Hg(t, e = {}) {
    if (!t) return { width: 0 }
    const n = [],
      r = e['font-size'] ? `${parseFloat(e['font-size'])}px` : '14px'
    return (
      n.push(e['font-style'] || 'normal'),
      n.push(e['font-variant'] || 'normal'),
      n.push(e['font-weight'] || 400),
      n.push(r),
      n.push(e['font-family'] || 'sans-serif'),
      ($g.font = n.join(' ')),
      $g.measureText(t)
    )
  }
  function Ug(t, e, n, r = {}) {
    if (e >= n) return [t, '']
    const i = t.length,
      s = {}
    let o = Math.round((e / n) * i - 1)
    for (o < 0 && (o = 0); o >= 0 && o < i; ) {
      const n = t.slice(0, o),
        i = s[n] || Hg(n, r).width,
        a = t.slice(0, o + 1),
        l = s[a] || Hg(a, r).width
      if (((s[n] = i), (s[a] = l), i > e)) o -= 1
      else {
        if (!(l <= e)) break
        o += 1
      }
    }
    return [t.slice(0, o), t.slice(o)]
  }
  const Jg = 0.551784
  function Xg(t, e, n = NaN) {
    const r = t.getAttribute(e)
    if (null == r) return n
    const i = parseFloat(r)
    return Number.isNaN(i) ? n : i
  }
  function Yg(t) {
    return `M ${t.map((t) => `${t.x} ${t.y}`).join(' L')}`
  }
  function Zg(t) {
    const e = [],
      n = t.points
    if (n)
      for (let t = 0, r = n.numberOfItems; t < r; t += 1) e.push(n.getItem(t))
    return e
  }
  function Kg(t) {
    let e
    const n = t.x,
      r = t.y,
      i = t.width,
      s = t.height,
      o = Math.min(t.rx || t['top-rx'] || 0, i / 2),
      a = Math.min(t.rx || t['bottom-rx'] || 0, i / 2),
      l = Math.min(t.ry || t['top-ry'] || 0, s / 2),
      c = Math.min(t.ry || t['bottom-ry'] || 0, s / 2)
    return (
      (e =
        o || a || l || c
          ? [
              'M',
              n,
              r + l,
              'v',
              s - l - c,
              'a',
              a,
              c,
              0,
              0,
              0,
              a,
              c,
              'h',
              i - 2 * a,
              'a',
              a,
              c,
              0,
              0,
              0,
              a,
              -c,
              'v',
              -(s - c - l),
              'a',
              o,
              l,
              0,
              0,
              0,
              -o,
              -l,
              'h',
              -(i - 2 * o),
              'a',
              o,
              l,
              0,
              0,
              0,
              -o,
              l,
              'Z',
            ]
          : ['M', n, r, 'H', n + i, 'V', r + s, 'H', n, 'V', r, 'Z']),
      e.join(' ')
    )
  }
  function Qg(t) {
    const e = t.tagName.toLowerCase()
    switch (e) {
      case 'path':
        return t.getAttribute('d')
      case 'line':
        return (function (t) {
          return [
            'M',
            Xg(t, 'x1'),
            Xg(t, 'y1'),
            'L',
            Xg(t, 'x2'),
            Xg(t, 'y2'),
          ].join(' ')
        })(t)
      case 'polygon':
        return (function (t) {
          const e = Zg(t)
          return 0 === e.length ? null : `${Yg(e)} Z`
        })(t)
      case 'polyline':
        return (function (t) {
          const e = Zg(t)
          return 0 === e.length ? null : Yg(e)
        })(t)
      case 'ellipse':
        return (function (t) {
          const e = Xg(t, 'cx', 0),
            n = Xg(t, 'cy', 0),
            r = Xg(t, 'rx'),
            i = Xg(t, 'ry') || r,
            s = r * Jg,
            o = i * Jg
          return [
            'M',
            e,
            n - i,
            'C',
            e + s,
            n - i,
            e + r,
            n - o,
            e + r,
            n,
            'C',
            e + r,
            n + o,
            e + s,
            n + i,
            e,
            n + i,
            'C',
            e - s,
            n + i,
            e - r,
            n + o,
            e - r,
            n,
            'C',
            e - r,
            n - o,
            e - s,
            n - i,
            e,
            n - i,
            'Z',
          ].join(' ')
        })(t)
      case 'circle':
        return (function (t) {
          const e = Xg(t, 'cx', 0),
            n = Xg(t, 'cy', 0),
            r = Xg(t, 'r'),
            i = r * Jg
          return [
            'M',
            e,
            n - r,
            'C',
            e + i,
            n - r,
            e + r,
            n - i,
            e + r,
            n,
            'C',
            e + r,
            n + i,
            e + i,
            n + r,
            e,
            n + r,
            'C',
            e - i,
            n + r,
            e - r,
            n + i,
            e - r,
            n,
            'C',
            e - r,
            n - i,
            e - i,
            n - r,
            e,
            n - r,
            'Z',
          ].join(' ')
        })(t)
      case 'rect':
        return (function (t) {
          return Kg({
            x: Xg(t, 'x', 0),
            y: Xg(t, 'y', 0),
            width: Xg(t, 'width', 0),
            height: Xg(t, 'height', 0),
            rx: Xg(t, 'rx', 0),
            ry: Xg(t, 'ry', 0),
          })
        })(t)
    }
    throw new Error(`"${e}" cannot be converted to svg path element.`)
  }
  const td = og('svg'),
    ed = /(\w+)\(([^,)]+),?([^)]+)?\)/gi,
    nd = /[ ,]+/,
    rd = /^(\w+)\((.*)\)/
  function id(t, e) {
    const n = td.createSVGPoint()
    return (n.x = t), (n.y = e), n
  }
  function sd(t) {
    const e = td.createSVGMatrix()
    if (null != t) {
      const n = t,
        r = e
      for (const t in n) r[t] = n[t]
    }
    return e
  }
  function od(t) {
    return null != t
      ? (t instanceof DOMMatrix || (t = sd(t)),
        td.createSVGTransformFromMatrix(t))
      : td.createSVGTransform()
  }
  function ad(t) {
    let e = sd()
    const n = null != t && t.match(ed)
    if (!n) return e
    for (let t = 0, r = n.length; t < r; t += 1) {
      const r = n[t].match(rd)
      if (r) {
        let t,
          n,
          i,
          s,
          o,
          a = sd()
        const l = r[2].split(nd)
        switch (r[1].toLowerCase()) {
          case 'scale':
            ;(t = parseFloat(l[0])),
              (n = void 0 === l[1] ? t : parseFloat(l[1])),
              (a = a.scaleNonUniform(t, n))
            break
          case 'translate':
            ;(i = parseFloat(l[0])),
              (s = parseFloat(l[1])),
              (a = a.translate(i, s))
            break
          case 'rotate':
            ;(o = parseFloat(l[0])),
              (i = parseFloat(l[1]) || 0),
              (s = parseFloat(l[2]) || 0),
              (a =
                0 !== i || 0 !== s
                  ? a.translate(i, s).rotate(o).translate(-i, -s)
                  : a.rotate(o))
            break
          case 'skewx':
            ;(o = parseFloat(l[0])), (a = a.skewX(o))
            break
          case 'skewy':
            ;(o = parseFloat(l[0])), (a = a.skewY(o))
            break
          case 'matrix':
            ;(a.a = parseFloat(l[0])),
              (a.b = parseFloat(l[1])),
              (a.c = parseFloat(l[2])),
              (a.d = parseFloat(l[3])),
              (a.e = parseFloat(l[4])),
              (a.f = parseFloat(l[5]))
            break
          default:
            continue
        }
        e = e.multiply(a)
      }
    }
    return e
  }
  function ld(t) {
    const e = t || {}
    return `matrix(${
      null != e.a ? e.a : 1
    },${null != e.b ? e.b : 0},${null != e.c ? e.c : 0},${null != e.d ? e.d : 1},${null != e.e ? e.e : 0},${null != e.f ? e.f : 0})`
  }
  function cd(t) {
    let e, n, r
    if (t) {
      const i = nd
      if (t.trim().indexOf('matrix') >= 0) {
        const i = (function (t) {
          const e = hd(t, { x: 0, y: 1 }),
            n = hd(t, { x: 1, y: 0 }),
            r = (180 / Math.PI) * Math.atan2(e.y, e.x) - 90,
            i = (180 / Math.PI) * Math.atan2(n.y, n.x)
          return {
            skewX: r,
            skewY: i,
            translateX: t.e,
            translateY: t.f,
            scaleX: Math.sqrt(t.a * t.a + t.b * t.b),
            scaleY: Math.sqrt(t.c * t.c + t.d * t.d),
            rotation: r,
          }
        })(ad(t))
        ;(e = [i.translateX, i.translateY]),
          (n = [i.rotation]),
          (r = [i.scaleX, i.scaleY])
        const s = []
        ;(0 === e[0] && 0 === e[1]) || s.push(`translate(${e.join(',')})`),
          (1 === r[0] && 1 === r[1]) || s.push(`scale(${r.join(',')})`),
          0 !== n[0] && s.push(`rotate(${n[0]})`),
          (t = s.join(' '))
      } else {
        const s = t.match(/translate\((.*?)\)/)
        s && (e = s[1].split(i))
        const o = t.match(/rotate\((.*?)\)/)
        o && (n = o[1].split(i))
        const a = t.match(/scale\((.*?)\)/)
        a && (r = a[1].split(i))
      }
    }
    const i = r && r[0] ? parseFloat(r[0]) : 1
    return {
      raw: t || '',
      translation: {
        tx: e && e[0] ? parseInt(e[0], 10) : 0,
        ty: e && e[1] ? parseInt(e[1], 10) : 0,
      },
      rotation: {
        angle: n && n[0] ? parseInt(n[0], 10) : 0,
        cx: n && n[1] ? parseInt(n[1], 10) : void 0,
        cy: n && n[2] ? parseInt(n[2], 10) : void 0,
      },
      scale: { sx: i, sy: r && r[1] ? parseFloat(r[1]) : i },
    }
  }
  function hd(t, e) {
    return { x: e.x * t.a + e.y * t.c + 0, y: e.x * t.b + e.y * t.d + 0 }
  }
  function ud(t, e, n = {}) {
    if (null == e) return ad(xg(t, 'transform'))
    if (n.absolute) return void t.setAttribute('transform', ld(e))
    const r = t.transform,
      i = od(e)
    r.baseVal.appendItem(i)
  }
  function gd(t, e, n = 0, r = {}) {
    let i = xg(t, 'transform')
    const s = cd(i)
    if (null == e) return s.translation
    ;(i = s.raw), (i = i.replace(/translate\([^)]*\)/g, '').trim())
    const o = `translate(${r.absolute ? e : s.translation.tx + e},${
      r.absolute ? n : s.translation.ty + n
    })`
    t.setAttribute('transform', `${o} ${i}`.trim())
  }
  function dd(t, e, n, r, i = {}) {
    let s = xg(t, 'transform')
    const o = cd(s)
    if (null == e) return o.rotation
    ;(s = o.raw), (s = s.replace(/rotate\([^)]*\)/g, '').trim()), (e %= 360)
    const a = `rotate(${i.absolute ? e : o.rotation.angle + e}${
      null != n && null != r ? `,${n},${r}` : ''
    })`
    t.setAttribute('transform', `${s} ${a}`.trim())
  }
  function fd(t, e, n) {
    let r = xg(t, 'transform')
    const i = cd(r)
    if (null == e) return i.scale
    ;(n = null == n ? e : n),
      (r = i.raw),
      (r = r.replace(/scale\([^)]*\)/g, '').trim())
    const s = `scale(${e},${n})`
    t.setAttribute('transform', `${r} ${s}`.trim())
  }
  function pd(t, e) {
    if (ng(e) && ng(t)) {
      const n = e.getScreenCTM(),
        r = t.getScreenCTM()
      if (n && r) return n.inverse().multiply(r)
    }
    return sd()
  }
  var md, yd, vd
  !(function (t) {
    const e = {}
    ;(t.get = function (t) {
      return e[t] || {}
    }),
      (t.register = function (t, n) {
        e[t] = n
      }),
      (t.unregister = function (t) {
        delete e[t]
      })
  })(md || (md = {})),
    (function (t) {
      const e = new WeakMap()
      ;(t.ensure = function (t) {
        return e.has(t) || e.set(t, { events: Object.create(null) }), e.get(t)
      }),
        (t.get = function (t) {
          return e.get(t)
        }),
        (t.remove = function (t) {
          return e.delete(t)
        })
    })(yd || (yd = {})),
    (function (t) {
      ;(t.returnTrue = () => !0),
        (t.returnFalse = () => !1),
        (t.stopPropagationCallback = function (t) {
          t.stopPropagation()
        }),
        (t.addEventListener = function (t, e, n) {
          null != t.addEventListener && t.addEventListener(e, n)
        }),
        (t.removeEventListener = function (t, e, n) {
          null != t.removeEventListener && t.removeEventListener(e, n)
        })
    })(vd || (vd = {})),
    (function (t) {
      const e = /[^\x20\t\r\n\f]+/g,
        n = /^([^.]*)(?:\.(.+)|)/
      ;(t.splitType = function (t) {
        return (t || '').match(e) || ['']
      }),
        (t.normalizeType = function (t) {
          const e = n.exec(t) || []
          return {
            originType: e[1] ? e[1].trim() : e[1],
            namespaces: e[2]
              ? e[2]
                  .split('.')
                  .map((t) => t.trim())
                  .sort()
              : [],
          }
        }),
        (t.isValidTarget = function (t) {
          return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }),
        (t.isValidSelector = function (t, e) {
          if (e) {
            const n = t
            return null != n.querySelector && null != n.querySelector(e)
          }
          return !0
        })
    })(vd || (vd = {})),
    (function (t) {
      let e = 0
      const n = new WeakMap()
      ;(t.ensureHandlerId = function (t) {
        return n.has(t) || (n.set(t, e), (e += 1)), n.get(t)
      }),
        (t.getHandlerId = function (t) {
          return n.get(t)
        }),
        (t.removeHandlerId = function (t) {
          return n.delete(t)
        }),
        (t.setHandlerId = function (t, e) {
          return n.set(t, e)
        })
    })(vd || (vd = {})),
    (function (t) {
      t.getHandlerQueue = function (t, e) {
        const n = [],
          r = yd.get(t),
          i = r && r.events && r.events[e.type],
          s = (i && i.handlers) || [],
          o = i ? i.delegateCount : 0
        if (
          o > 0 &&
          !('click' === e.type && 'number' == typeof e.button && e.button >= 1)
        )
          for (let r = e.target; r !== t; r = r.parentNode || t)
            if (1 === r.nodeType && ('click' !== e.type || !0 !== r.disabled)) {
              const e = [],
                i = {}
              for (let n = 0; n < o; n += 1) {
                const o = s[n],
                  a = o.selector
                if (null != a && null == i[a]) {
                  const e = []
                  t.querySelectorAll(a).forEach((t) => {
                    e.push(t)
                  }),
                    (i[a] = e.includes(r))
                }
                i[a] && e.push(o)
              }
              e.length && n.push({ elem: r, handlers: e })
            }
        return o < s.length && n.push({ elem: t, handlers: s.slice(o) }), n
      }
    })(vd || (vd = {})),
    (function (t) {
      t.isWindow = function (t) {
        return null != t && t === t.window
      }
    })(vd || (vd = {})),
    (function (t) {
      t.contains = function (t, e) {
        const n = 9 === t.nodeType ? t.documentElement : t,
          r = e && e.parentNode
        return (
          t === r ||
          !(
            !r ||
            1 !== r.nodeType ||
            !(n.contains
              ? n.contains(r)
              : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r))
          )
        )
      }
    })(vd || (vd = {}))
  class bd {
    constructor(t, e) {
      ;(this.isDefaultPrevented = vd.returnFalse),
        (this.isPropagationStopped = vd.returnFalse),
        (this.isImmediatePropagationStopped = vd.returnFalse),
        (this.isSimulated = !1),
        'string' == typeof t
          ? (this.type = t)
          : t.type &&
            ((this.originalEvent = t),
            (this.type = t.type),
            (this.isDefaultPrevented = t.defaultPrevented
              ? vd.returnTrue
              : vd.returnFalse),
            (this.target = t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget),
            (this.timeStamp = t.timeStamp)),
        e && Object.assign(this, e),
        this.timeStamp || (this.timeStamp = Date.now())
    }
    preventDefault() {
      const t = this.originalEvent
      ;(this.isDefaultPrevented = vd.returnTrue),
        t && !this.isSimulated && t.preventDefault()
    }
    stopPropagation() {
      const t = this.originalEvent
      ;(this.isPropagationStopped = vd.returnTrue),
        t && !this.isSimulated && t.stopPropagation()
    }
    stopImmediatePropagation() {
      const t = this.originalEvent
      ;(this.isImmediatePropagationStopped = vd.returnTrue),
        t && !this.isSimulated && t.stopImmediatePropagation(),
        this.stopPropagation()
    }
  }
  !(function (t) {
    t.create = function (e) {
      return e instanceof t ? e : new t(e)
    }
  })(bd || (bd = {})),
    (function (t) {
      t.addProperty = function (e, n) {
        Object.defineProperty(t.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get:
            'function' == typeof n
              ? function () {
                  if (this.originalEvent) return n(this.originalEvent)
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e]
                },
          set(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          },
        })
      }
    })(bd || (bd = {})),
    (function (t) {
      const e = {
        bubbles: !0,
        cancelable: !0,
        eventPhase: !0,
        detail: !0,
        view: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pageX: !0,
        pageY: !0,
        screenX: !0,
        screenY: !0,
        toElement: !0,
        pointerId: !0,
        pointerType: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        touches: !0,
        changedTouches: !0,
        targetTouches: !0,
        which: !0,
        altKey: !0,
        ctrlKey: !0,
        metaKey: !0,
        shiftKey: !0,
      }
      Object.keys(e).forEach((n) => t.addProperty(n, e[n]))
    })(bd || (bd = {})),
    md.register('load', { noBubble: !0 }),
    md.register('beforeunload', {
      postDispatch(t, e) {
        void 0 !== e.result &&
          e.originalEvent &&
          (e.originalEvent.returnValue = e.result)
      },
    }),
    md.register('mouseenter', {
      delegateType: 'mouseover',
      bindType: 'mouseover',
      handle(t, e) {
        let n
        const r = e.relatedTarget,
          i = e.handleObj
        return (
          (r && (r === t || vd.contains(t, r))) ||
            ((e.type = i.originType),
            (n = i.handler.call(t, e)),
            (e.type = 'mouseover')),
          n
        )
      },
    }),
    md.register('mouseleave', {
      delegateType: 'mouseout',
      bindType: 'mouseout',
      handle(t, e) {
        let n
        const r = e.relatedTarget,
          i = e.handleObj
        return (
          (r && (r === t || vd.contains(t, r))) ||
            ((e.type = i.originType),
            (n = i.handler.call(t, e)),
            (e.type = 'mouseout')),
          n
        )
      },
    })
  var xd,
    wd,
    Pd,
    Ad = function (t, e) {
      var n = {}
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r])
      if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0
        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
          e.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
            (n[r[i]] = t[r[i]])
      }
      return n
    }
  !(function (t) {
    let e
    function n(t, e, ...n) {
      const r = bd.create(e)
      r.delegateTarget = t
      const i = md.get(r.type)
      if (i.preDispatch && !1 === i.preDispatch(t, r)) return
      const s = vd.getHandlerQueue(t, r)
      for (
        let t = 0, e = s.length;
        t < e && !r.isPropagationStopped();
        t += 1
      ) {
        const e = s[t]
        r.currentTarget = e.elem
        for (
          let t = 0, i = e.handlers.length;
          t < i && !r.isImmediatePropagationStopped();
          t += 1
        ) {
          const i = e.handlers[t]
          if (
            null == r.rnamespace ||
            (i.namespace && r.rnamespace.test(i.namespace))
          ) {
            ;(r.handleObj = i), (r.data = i.data)
            const t = md.get(i.originType).handle,
              s = t ? t(e.elem, r, ...n) : i.handler.call(e.elem, r, ...n)
            void 0 !== s &&
              ((r.result = s),
              !1 === s && (r.preventDefault(), r.stopPropagation()))
          }
        }
      }
      return i.postDispatch && i.postDispatch(t, r), r.result
    }
    ;(t.on = function (t, r, i, s, o) {
      if (!vd.isValidTarget(t)) return
      let a
      if ('function' != typeof i) {
        const { handler: t, selector: e } = i,
          n = Ad(i, ['handler', 'selector'])
        ;(i = t), (o = e), (a = n)
      }
      const l = yd.ensure(t)
      let c = l.handler
      null == c &&
        (c = l.handler =
          function (r, ...i) {
            return e !== r.type ? n(t, r, ...i) : void 0
          })
      const h = vd.ensureHandlerId(i)
      vd.splitType(r).forEach((e) => {
        const { originType: n, namespaces: r } = vd.normalizeType(e)
        if (!n) return
        let u = n,
          g = md.get(u)
        ;(u = (o ? g.delegateType : g.bindType) || u), (g = md.get(u))
        const d = Object.assign(
            {
              type: u,
              originType: n,
              data: s,
              selector: o,
              guid: h,
              handler: i,
              namespace: r.join('.'),
            },
            a,
          ),
          f = l.events
        let p = f[u]
        p ||
          ((p = f[u] = { handlers: [], delegateCount: 0 }),
          (g.setup && !1 !== g.setup(t, s, r, c)) ||
            vd.addEventListener(t, u, c)),
          g.add &&
            (vd.removeHandlerId(d.handler),
            g.add(t, d),
            vd.setHandlerId(d.handler, h)),
          o
            ? (p.handlers.splice(p.delegateCount, 0, d), (p.delegateCount += 1))
            : p.handlers.push(d)
      })
    }),
      (t.off = function t(e, n, r, i, s) {
        const o = yd.get(e)
        if (!o) return
        const a = o.events
        a &&
          (vd.splitType(n).forEach((n) => {
            const { originType: l, namespaces: c } = vd.normalizeType(n)
            if (!l)
              return void Object.keys(a).forEach((s) => {
                t(e, s + n, r, i, !0)
              })
            let h = l
            const u = md.get(h)
            h = (i ? u.delegateType : u.bindType) || h
            const g = a[h] || {},
              d =
                c.length > 0
                  ? new RegExp(`(^|\\.)${c.join('\\.(?:.*\\.|)')}(\\.|$)`)
                  : null,
              f = g.handlers.length
            for (let t = g.handlers.length - 1; t >= 0; t -= 1) {
              const n = g.handlers[t]
              ;(!s && l !== n.originType) ||
                (r && vd.getHandlerId(r) !== n.guid) ||
                !(null == d || (n.namespace && d.test(n.namespace))) ||
                !(
                  null == i ||
                  i === n.selector ||
                  ('**' === i && n.selector)
                ) ||
                (g.handlers.splice(t, 1),
                n.selector && (g.delegateCount -= 1),
                u.remove && u.remove(e, n))
            }
            f &&
              0 === g.handlers.length &&
              ((u.teardown && !1 !== u.teardown(e, c, o.handler)) ||
                vd.removeEventListener(e, h, o.handler),
              delete a[h])
          }),
          0 === Object.keys(a).length && yd.remove(e))
      }),
      (t.dispatch = n),
      (t.trigger = function (t, n, r, i) {
        let s = t,
          o = 'string' == typeof t ? t : t.type,
          a =
            'string' == typeof t || null == s.namespace
              ? []
              : s.namespace.split('.')
        const l = r
        if (3 === l.nodeType || 8 === l.nodeType) return
        o.indexOf('.') > -1 && ((a = o.split('.')), (o = a.shift()), a.sort())
        const c = o.indexOf(':') < 0 && `on${o}`
        ;(s = t instanceof bd ? t : new bd(o, 'object' == typeof t ? t : null)),
          (s.namespace = a.join('.')),
          (s.rnamespace = s.namespace
            ? new RegExp(`(^|\\.)${a.join('\\.(?:.*\\.|)')}(\\.|$)`)
            : null),
          (s.result = void 0),
          s.target || (s.target = l)
        const h = [s]
        Array.isArray(n) ? h.push(...n) : h.push(n)
        const u = md.get(o)
        if (!i && u.trigger && !1 === u.trigger(l, s, n)) return
        let g
        const d = [l]
        if (!i && !u.noBubble && !vd.isWindow(l)) {
          g = u.delegateType || o
          let t = l,
            e = l.parentNode
          for (; null != e; ) d.push(e), (t = e), (e = e.parentNode)
          if (t === (l.ownerDocument || document)) {
            const e = t.defaultView || t.parentWindow || window
            d.push(e)
          }
        }
        let f = l
        for (
          let t = 0, e = d.length;
          t < e && !s.isPropagationStopped();
          t += 1
        ) {
          const e = d[t]
          ;(f = e), (s.type = t > 1 ? g : u.bindType || o)
          const n = yd.get(e)
          n && n.events[s.type] && n.handler && n.handler.call(e, ...h)
          const r = (c && e[c]) || null
          r &&
            vd.isValidTarget(e) &&
            ((s.result = r.call(e, ...h)),
            !1 === s.result && s.preventDefault())
        }
        if (((s.type = o), !i && !s.isDefaultPrevented())) {
          const t = u.preventDefault
          if (
            (null == t || !1 === t(d.pop(), s, n)) &&
            vd.isValidTarget(l) &&
            c &&
            'function' == typeof l[o] &&
            !vd.isWindow(l)
          ) {
            const t = l[c]
            t && (l[c] = null),
              (e = o),
              s.isPropagationStopped() &&
                f.addEventListener(o, vd.stopPropagationCallback),
              l[o](),
              s.isPropagationStopped() &&
                f.removeEventListener(o, vd.stopPropagationCallback),
              (e = void 0),
              t && (l[c] = t)
          }
        }
        return s.result
      })
  })(xd || (xd = {})),
    (function (t) {
      ;(t.on = function (t, e, n, r, i) {
        return Pd.on(t, e, n, r, i), t
      }),
        (t.once = function (t, e, n, r, i) {
          return Pd.on(t, e, n, r, i, !0), t
        }),
        (t.off = function (t, e, n, r) {
          return Pd.off(t, e, n, r), t
        }),
        (t.trigger = function (t, e, n, r) {
          return xd.trigger(e, n, t, r), t
        })
    })(wd || (wd = {})),
    (function (t) {
      ;(t.on = function e(n, r, i, s, o, a) {
        if ('object' == typeof r)
          return (
            'string' != typeof i && ((s = s || i), (i = void 0)),
            void Object.keys(r).forEach((t) => e(n, t, i, s, r[t], a))
          )
        if (
          (null == s && null == o
            ? ((o = i), (s = i = void 0))
            : null == o &&
              ('string' == typeof i
                ? ((o = s), (s = void 0))
                : ((o = s), (s = i), (i = void 0))),
          !1 === o)
        )
          o = vd.returnFalse
        else if (!o) return
        if (a) {
          const e = o
          ;(o = function (r, ...i) {
            return t.off(n, r), e.call(this, r, ...i)
          }),
            vd.setHandlerId(o, vd.ensureHandlerId(e))
        }
        xd.on(n, r, o, s, i)
      }),
        (t.off = function t(e, n, r, i) {
          const s = n
          if (s && null != s.preventDefault && null != s.handleObj) {
            const e = s.handleObj
            t(
              s.delegateTarget,
              e.namespace ? `${e.originType}.${e.namespace}` : e.originType,
              e.selector,
              e.handler,
            )
          } else if ('object' != typeof n)
            (!1 !== r && 'function' != typeof r) || ((i = r), (r = void 0)),
              !1 === i && (i = vd.returnFalse),
              xd.off(e, n, i, r)
          else {
            const i = n
            Object.keys(i).forEach((n) => t(e, n, r, i[n]))
          }
        })
    })(Pd || (Pd = {}))
  class Cd {
    constructor(t, e, n) {
      ;(this.animationFrameId = 0),
        (this.deltaX = 0),
        (this.deltaY = 0),
        (this.eventName = Wu.isEventSupported('wheel')
          ? 'wheel'
          : 'mousewheel'),
        (this.target = t),
        (this.onWheelCallback = e),
        (this.onWheelGuard = n),
        (this.onWheel = this.onWheel.bind(this)),
        (this.didWheel = this.didWheel.bind(this))
    }
    enable() {
      this.target.addEventListener(this.eventName, this.onWheel, {
        passive: !1,
      })
    }
    disable() {
      this.target.removeEventListener(this.eventName, this.onWheel)
    }
    onWheel(t) {
      if (null != this.onWheelGuard && !this.onWheelGuard(t)) return
      let e
      ;(this.deltaX += t.deltaX),
        (this.deltaY += t.deltaY),
        t.preventDefault(),
        (0 === this.deltaX && 0 === this.deltaY) ||
          (t.stopPropagation(), (e = !0)),
        !0 === e &&
          0 === this.animationFrameId &&
          (this.animationFrameId = requestAnimationFrame(() => {
            this.didWheel(t)
          }))
    }
    didWheel(t) {
      ;(this.animationFrameId = 0),
        this.onWheelCallback(t, this.deltaX, this.deltaY),
        (this.deltaX = 0),
        (this.deltaY = 0)
    }
  }
  function Od(t, e = 60) {
    let n = null
    return (...r) => {
      n && clearTimeout(n),
        (n = window.setTimeout(() => {
          t.apply(this, r)
        }, e))
    }
  }
  const Ed =
    'undefined' != typeof ResizeObserver
      ? function (t) {
          let e = null,
            n = []
          const r = Od(() => {
              n.forEach((e) => {
                e(t)
              })
            }),
            i = () => {
              e && (e.disconnect(), (n = []), (e = null))
            }
          return {
            element: t,
            bind: (i) => {
              e ||
                (e = (() => {
                  const e = new ResizeObserver(r)
                  return e.observe(t), r(), e
                })()),
                -1 === n.indexOf(i) && n.push(i)
            },
            destroy: i,
            unbind: (t) => {
              const r = n.indexOf(t)
              ;-1 !== r && n.splice(r, 1), 0 === n.length && e && i()
            },
          }
        }
      : function (t) {
          let e = null,
            n = []
          const r = Od(() => {
              n.forEach((e) => e(t))
            }),
            i = () => {
              e &&
                e.parentNode &&
                (e.contentDocument &&
                  e.contentDocument.defaultView.removeEventListener(
                    'resize',
                    r,
                  ),
                e.parentNode.removeChild(e),
                (e = null),
                (n = []))
            }
          return {
            element: t,
            bind: (i) => {
              e ||
                (e = (() => {
                  'static' === getComputedStyle(t).position &&
                    (t.style.position = 'relative')
                  const e = document.createElement('object')
                  return (
                    (e.onload = () => {
                      e.contentDocument.defaultView.addEventListener(
                        'resize',
                        r,
                      ),
                        r()
                    }),
                    (e.style.display = 'block'),
                    (e.style.position = 'absolute'),
                    (e.style.top = '0'),
                    (e.style.left = '0'),
                    (e.style.height = '100%'),
                    (e.style.width = '100%'),
                    (e.style.overflow = 'hidden'),
                    (e.style.pointerEvents = 'none'),
                    (e.style.zIndex = '-1'),
                    (e.style.opacity = '0'),
                    e.setAttribute('tabindex', '-1'),
                    (e.type = 'text/html'),
                    t.appendChild(e),
                    (e.data = 'about:blank'),
                    e
                  )
                })()),
                -1 === n.indexOf(i) && n.push(i)
            },
            destroy: i,
            unbind: (t) => {
              const r = n.indexOf(t)
              ;-1 !== r && n.splice(r, 1), 0 === n.length && e && i()
            },
          }
        }
  var Md, Sd, Td, jd, kd
  !(function (t) {
    const e = new WeakMap()
    function n(t) {
      let n = e.get(t)
      return n || ((n = Ed(t)), e.set(t, n), n)
    }
    ;(t.bind = (t, e) => {
      const r = n(t)
      return r.bind(e), () => r.unbind(e)
    }),
      (t.clear = (t) => {
        !(function (t) {
          t.destroy(), e.delete(t.element)
        })(n(t))
      })
  })(Md || (Md = {}))
  class Nd {
    constructor(t = {}) {
      ;(this.comparator = t.comparator || Nd.defaultComparator),
        (this.index = {}),
        (this.data = t.data || []),
        this.heapify()
    }
    isEmpty() {
      return 0 === this.data.length
    }
    insert(t, e, n) {
      const r = { priority: t, value: e },
        i = this.data.length - 1
      return (
        n && ((r.id = n), (this.index[n] = i)),
        this.data.push(r),
        this.bubbleUp(i),
        this
      )
    }
    peek() {
      return this.data[0] ? this.data[0].value : null
    }
    peekPriority() {
      return this.data[0] ? this.data[0].priority : null
    }
    updatePriority(t, e) {
      const n = this.index[t]
      if (void 0 === n)
        throw new Error(`Node with id '${t}' was not found in the heap.`)
      const r = this.data,
        i = r[n].priority,
        s = this.comparator(e, i)
      s < 0
        ? ((r[n].priority = e), this.bubbleUp(n))
        : s > 0 && ((r[n].priority = e), this.bubbleDown(n))
    }
    remove() {
      const t = this.data,
        e = t[0],
        n = t.pop()
      return (
        delete this.index[t.length],
        t.length > 0 &&
          ((t[0] = n), n.id && (this.index[n.id] = 0), this.bubbleDown(0)),
        e ? e.value : null
      )
    }
    heapify() {
      for (let t = 0; t < this.data.length; t += 1) this.bubbleUp(t)
    }
    bubbleUp(t) {
      const e = this.data
      let n,
        r,
        i = t
      for (
        ;
        i > 0 &&
        ((r = (i - 1) >>> 1),
        this.comparator(e[i].priority, e[r].priority) < 0);

      ) {
        ;(n = e[r]), (e[r] = e[i])
        let t = e[i].id
        null != t && (this.index[t] = r),
          (e[i] = n),
          (t = e[i].id),
          null != t && (this.index[t] = i),
          (i = r)
      }
    }
    bubbleDown(t) {
      const e = this.data,
        n = e.length - 1
      let r = t
      for (;;) {
        const t = 1 + (r << 1),
          i = t + 1
        let s = r
        if (
          (t <= n &&
            this.comparator(e[t].priority, e[s].priority) < 0 &&
            (s = t),
          i <= n &&
            this.comparator(e[i].priority, e[s].priority) < 0 &&
            (s = i),
          s === r)
        )
          break
        {
          const t = e[s]
          e[s] = e[r]
          let n = e[r].id
          null != n && (this.index[n] = s),
            (e[r] = t),
            (n = e[r].id),
            null != n && (this.index[n] = r),
            (r = s)
        }
      }
    }
  }
  !(function (t) {
    t.defaultComparator = (t, e) => t - e
  })(Nd || (Nd = {})),
    (function (t) {
      t.run = function (t, e, n = (t, e) => 1) {
        const r = {},
          i = {},
          s = {},
          o = new Nd()
        for (
          r[e] = 0,
            Object.keys(t).forEach((t) => {
              t !== e && (r[t] = 1 / 0), o.insert(r[t], t, t)
            });
          !o.isEmpty();

        ) {
          const e = o.remove()
          s[e] = !0
          const a = t[e] || []
          for (let t = 0; t < a.length; t += 1) {
            const l = a[t]
            if (!s[l]) {
              const t = r[e] + n(e, l)
              t < r[l] && ((r[l] = t), (i[l] = e), o.updatePriority(l, t))
            }
          }
        }
        return i
      }
    })(Sd || (Sd = {}))
  class _d {
    constructor(t, e, n, r) {
      return null == t
        ? this.set(255, 255, 255, 1)
        : 'number' == typeof t
        ? this.set(t, e, n, r)
        : 'string' == typeof t
        ? _d.fromString(t) || this
        : Array.isArray(t)
        ? this.set(t)
        : void this.set(t.r, t.g, t.b, null == t.a ? 1 : t.a)
    }
    blend(t, e, n) {
      this.set(
        t.r + (e.r - t.r) * n,
        t.g + (e.g - t.g) * n,
        t.b + (e.b - t.b) * n,
        t.a + (e.a - t.a) * n,
      )
    }
    lighten(t) {
      const e = _d.lighten(this.toArray(), t)
      ;(this.r = e[0]), (this.g = e[1]), (this.b = e[2]), (this.a = e[3])
    }
    darken(t) {
      this.lighten(-t)
    }
    set(t, e, n, r) {
      const i = Array.isArray(t) ? t[0] : t,
        s = Array.isArray(t) ? t[1] : e,
        o = Array.isArray(t) ? t[2] : n,
        a = Array.isArray(t) ? t[3] : r
      return (
        (this.r = Math.round(ti(i, 0, 255))),
        (this.g = Math.round(ti(s, 0, 255))),
        (this.b = Math.round(ti(o, 0, 255))),
        (this.a = null == a ? 1 : ti(a, 0, 1)),
        this
      )
    }
    toHex() {
      return `#${['r', 'g', 'b']
        .map((t) => {
          const e = this[t].toString(16)
          return e.length < 2 ? `0${e}` : e
        })
        .join('')}`
    }
    toRGBA() {
      return this.toArray()
    }
    toHSLA() {
      return _d.rgba2hsla(this.r, this.g, this.b, this.a)
    }
    toCSS(t) {
      const e = `${this.r},${this.g},${this.b},`
      return t ? `rgb(${e})` : `rgba(${e},${this.a})`
    }
    toGrey() {
      return _d.makeGrey(Math.round((this.r + this.g + this.b) / 3), this.a)
    }
    toArray() {
      return [this.r, this.g, this.b, this.a]
    }
    toString() {
      return this.toCSS()
    }
  }
  !(function (t) {
    function e(e) {
      return new t([...a(e), 1])
    }
    function n(e) {
      const n = e.toLowerCase().match(/^rgba?\(([\s.,0-9]+)\)/)
      if (n) {
        const e = n[1].split(/\s*,\s*/).map((t) => parseInt(t, 10))
        return new t(e)
      }
      return null
    }
    function r(t, e, n) {
      n < 0 && ++n, n > 1 && --n
      const r = 6 * n
      return r < 1
        ? t + (e - t) * r
        : 2 * n < 1
        ? e
        : 3 * n < 2
        ? t + (e - t) * (2 / 3 - n) * 6
        : t
    }
    function i(e) {
      const n = e.toLowerCase().match(/^hsla?\(([\s.,0-9]+)\)/)
      if (n) {
        const e = n[2].split(/\s*,\s*/),
          r = (((parseFloat(e[0]) % 360) + 360) % 360) / 360,
          i = parseFloat(e[1]) / 100,
          o = parseFloat(e[2]) / 100,
          a = null == e[3] ? 1 : parseInt(e[3], 10)
        return new t(s(r, i, o, a))
      }
      return null
    }
    function s(t, e, n, i) {
      const s = Array.isArray(t) ? t[0] : t,
        o = Array.isArray(t) ? t[1] : e,
        a = Array.isArray(t) ? t[2] : n,
        l = Array.isArray(t) ? t[3] : i,
        c = a <= 0.5 ? a * (o + 1) : a + o - a * o,
        h = 2 * a - c
      return [
        256 * r(h, c, s + 1 / 3),
        256 * r(h, c, s),
        256 * r(h, c, s - 1 / 3),
        null == l ? 1 : l,
      ]
    }
    function o(e) {
      return new t(
        Math.round(256 * Math.random()),
        Math.round(256 * Math.random()),
        Math.round(256 * Math.random()),
        e ? void 0 : parseFloat(Math.random().toFixed(2)),
      )
    }
    function a(t) {
      const e = 0 === t.indexOf('#') ? t : `#${t}`
      let n = Number(`0x${e.substr(1)}`)
      if ((4 !== e.length && 7 !== e.length) || Number.isNaN(n))
        throw new Error('Invalid hex color.')
      const r = 4 === e.length ? 4 : 8,
        i = (1 << r) - 1,
        s = ['b', 'g', 'r'].map(() => {
          const t = n & i
          return (n >>= r), 4 === r ? 17 * t : t
        })
      return [s[2], s[1], s[0]]
    }
    function l(t, e, n) {
      const r = (t) => (t.length < 2 ? `0${t}` : t)
      return `${r(t.toString(16))}${r(e.toString(16))}${r(n.toString(16))}`
    }
    function c(t, e) {
      if ('string' == typeof t) {
        const n = '#' === t[0],
          r = parseInt(n ? t.substr(1) : t, 16),
          i = ti((r >> 16) + e, 0, 255),
          s = ti(((r >> 8) & 255) + e, 0, 255)
        return `${n ? '#' : ''}${(
          ti((255 & r) + e, 0, 255) |
          (s << 8) |
          (i << 16)
        ).toString(16)}`
      }
      const n = a(c(l(t[0], t[1], t[2]), e))
      return [n[0], n[1], n[2], t[3]]
    }
    ;(t.fromArray = function (e) {
      return new t(e)
    }),
      (t.fromHex = e),
      (t.fromRGBA = n),
      (t.fromHSLA = i),
      (t.fromString = function (r) {
        if (r.startsWith('#')) return e(r)
        if (r.startsWith('rgb')) return n(r)
        const s = t.named[r]
        return s ? e(s) : i(r)
      }),
      (t.makeGrey = function (e, n) {
        return t.fromArray([e, e, e, n])
      }),
      (t.rgba2hsla = function (t, e, n, r) {
        const i = Array.isArray(t) ? t[0] : t,
          s = Array.isArray(t) ? t[1] : e,
          o = Array.isArray(t) ? t[2] : n,
          a = Array.isArray(t) ? t[3] : r,
          l = Math.max(i, s, o),
          c = Math.min(i, s, o),
          h = (l + c) / 2
        let u = 0,
          g = 0
        if (c !== l) {
          const t = l - c
          switch (((g = h > 0.5 ? t / (2 - l - c) : t / (l + c)), l)) {
            case i:
              u = (s - o) / t + (s < o ? 6 : 0)
              break
            case s:
              u = (o - i) / t + 2
              break
            case o:
              u = (i - s) / t + 4
          }
          u /= 6
        }
        return [u, g, h, null == a ? 1 : a]
      }),
      (t.hsla2rgba = s),
      (t.random = o),
      (t.randomHex = function () {
        let t = '#'
        for (let e = 0; e < 6; e += 1)
          t += '0123456789ABCDEF'[Math.floor(16 * Math.random())]
        return t
      }),
      (t.randomRGBA = function (t) {
        return o(t).toString()
      }),
      (t.invert = function (t, e) {
        if ('string' == typeof t) {
          const n = '#' === t[0],
            [r, i, s] = a(t)
          return e
            ? 0.299 * r + 0.587 * i + 0.114 * s > 186
              ? '#000000'
              : '#ffffff'
            : `${n ? '#' : ''}${l(255 - r, 255 - i, 255 - s)}`
        }
        const n = t[0],
          r = t[1],
          i = t[2],
          s = t[3]
        return e
          ? 0.299 * n + 0.587 * r + 0.114 * i > 186
            ? [0, 0, 0, s]
            : [255, 255, 255, s]
          : [255 - n, 255 - r, 255 - i, s]
      }),
      (t.lighten = function (t, e) {
        return c(t, e)
      }),
      (t.darken = function (t, e) {
        return c(t, -e)
      })
  })(_d || (_d = {})),
    (function (t) {
      t.named = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        burntsienna: '#ea7e5d',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32',
      }
    })(_d || (_d = {}))
  class Ld {
    constructor() {
      this.clear()
    }
    clear() {
      ;(this.map = new WeakMap()), (this.arr = [])
    }
    has(t) {
      return this.map.has(t)
    }
    get(t) {
      return this.map.get(t)
    }
    set(t, e) {
      this.map.set(t, e), this.arr.push(t)
    }
    delete(t) {
      const e = this.arr.indexOf(t)
      e >= 0 && this.arr.splice(e, 1)
      const n = this.map.get(t)
      return this.map.delete(t), n
    }
    each(t) {
      this.arr.forEach((e) => {
        const n = this.map.get(e)
        t(n, e)
      })
    }
    dispose() {
      this.clear()
    }
  }
  !(function (t) {
    function e(t) {
      const e = [],
        n = []
      return (
        Array.isArray(t)
          ? e.push(...t)
          : t.split('|').forEach((t) => {
              ;-1 === t.indexOf('&') ? e.push(t) : n.push(...t.split('&'))
            }),
        { or: e, and: n }
      )
    }
    ;(t.parse = e),
      (t.equals = function (t, n) {
        if (null != t && null != n) {
          const r = e(t),
            i = e(n),
            s = r.or.sort(),
            o = i.or.sort(),
            a = r.and.sort(),
            l = i.and.sort(),
            c = (t, e) =>
              t.length === e.length &&
              (0 === t.length || t.every((t, n) => t === e[n]))
          return c(s, o) && c(a, l)
        }
        return null == t && null == n
      }),
      (t.isMatch = function (t, n, r) {
        if (null == n || (Array.isArray(n) && 0 === n.length))
          return (
            !r ||
            (!0 !== t.altKey &&
              !0 !== t.ctrlKey &&
              !0 !== t.metaKey &&
              !0 !== t.shiftKey)
          )
        const { or: i, and: s } = e(n),
          o = (e) => {
            const n = `${e.toLowerCase()}Key`
            return !0 === t[n]
          }
        return i.some((t) => o(t)) && s.every((t) => o(t))
      })
  })(Td || (Td = {})),
    (function (t) {
      ;(t.linear = (t) => t),
        (t.quad = (t) => t * t),
        (t.cubic = (t) => t * t * t),
        (t.inout = (t) => {
          if (t <= 0) return 0
          if (t >= 1) return 1
          const e = t * t,
            n = e * t
          return 4 * (t < 0.5 ? n : 3 * (t - e) + n - 0.75)
        }),
        (t.exponential = (t) => Math.pow(2, 10 * (t - 1))),
        (t.bounce = (t) => {
          for (let e = 0, n = 1; ; e += n, n /= 2)
            if (t >= (7 - 4 * e) / 11) {
              const r = (11 - 6 * e - 11 * t) / 4
              return -r * r + n * n
            }
        })
    })(jd || (jd = {})),
    (function (t) {
      t.decorators = {
        reverse: (t) => (e) => 1 - t(1 - e),
        reflect: (t) => (e) => 0.5 * (e < 0.5 ? t(2 * e) : 2 - t(2 - 2 * e)),
        clamp:
          (t, e = 0, n = 1) =>
          (r) => {
            const i = t(r)
            return i < e ? e : i > n ? n : i
          },
        back:
          (t = 1.70158) =>
          (e) =>
            e * e * ((t + 1) * e - t),
        elastic:
          (t = 1.5) =>
          (e) =>
            Math.pow(2, 10 * (e - 1)) * Math.cos(((20 * Math.PI * t) / 3) * e),
      }
    })(jd || (jd = {})),
    (function (t) {
      function e(t) {
        const e = t / 1
        if (e < 1 / 2.75) return 7.5625 * e * e
        if (e < 2 / 2.75) {
          const t = e - 1.5 / 2.75
          return 7.5625 * t * t + 0.75
        }
        if (e < 2.5 / 2.75) {
          const t = e - 2.25 / 2.75
          return 7.5625 * t * t + 0.9375
        }
        {
          const t = e - 2.625 / 2.75
          return 7.5625 * t * t + 0.984375
        }
      }
      function n(t) {
        return 1 - e(1 - t)
      }
      ;(t.easeInSine = function (t) {
        return -1 * Math.cos(t * (Math.PI / 2)) + 1
      }),
        (t.easeOutSine = function (t) {
          return Math.sin(t * (Math.PI / 2))
        }),
        (t.easeInOutSine = function (t) {
          return -0.5 * (Math.cos(Math.PI * t) - 1)
        }),
        (t.easeInQuad = function (t) {
          return t * t
        }),
        (t.easeOutQuad = function (t) {
          return t * (2 - t)
        }),
        (t.easeInOutQuad = function (t) {
          return t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1
        }),
        (t.easeInCubic = function (t) {
          return t * t * t
        }),
        (t.easeOutCubic = function (t) {
          const e = t - 1
          return e * e * e + 1
        }),
        (t.easeInOutCubic = function (t) {
          return t < 0.5
            ? 4 * t * t * t
            : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        }),
        (t.easeInQuart = function (t) {
          return t * t * t * t
        }),
        (t.easeOutQuart = function (t) {
          const e = t - 1
          return 1 - e * e * e * e
        }),
        (t.easeInOutQuart = function (t) {
          const e = t - 1
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * e * e * e * e
        }),
        (t.easeInQuint = function (t) {
          return t * t * t * t * t
        }),
        (t.easeOutQuint = function (t) {
          const e = t - 1
          return 1 + e * e * e * e * e
        }),
        (t.easeInOutQuint = function (t) {
          const e = t - 1
          return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * e * e * e * e * e
        }),
        (t.easeInExpo = function (t) {
          return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
        }),
        (t.easeOutExpo = function (t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        }),
        (t.easeInOutExpo = function (t) {
          if (0 === t || 1 === t) return t
          const e = 2 * t,
            n = e - 1
          return e < 1
            ? 0.5 * Math.pow(2, 10 * n)
            : 0.5 * (2 - Math.pow(2, -10 * n))
        }),
        (t.easeInCirc = function (t) {
          const e = t / 1
          return -1 * (Math.sqrt(1 - e * t) - 1)
        }),
        (t.easeOutCirc = function (t) {
          const e = t - 1
          return Math.sqrt(1 - e * e)
        }),
        (t.easeInOutCirc = function (t) {
          const e = 2 * t,
            n = e - 2
          return e < 1
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - n * n) + 1)
        }),
        (t.easeInBack = function (t, e = 1.70158) {
          return t * t * ((e + 1) * t - e)
        }),
        (t.easeOutBack = function (t, e = 1.70158) {
          const n = t / 1 - 1
          return n * n * ((e + 1) * n + e) + 1
        }),
        (t.easeInOutBack = function (t, e = 1.70158) {
          const n = 2 * t,
            r = n - 2,
            i = 1.525 * e
          return n < 1
            ? 0.5 * n * n * ((i + 1) * n - i)
            : 0.5 * (r * r * ((i + 1) * r + i) + 2)
        }),
        (t.easeInElastic = function (t, e = 0.7) {
          if (0 === t || 1 === t) return t
          const n = t / 1 - 1,
            r = 1 - e,
            i = (r / (2 * Math.PI)) * Math.asin(1)
          return -Math.pow(2, 10 * n) * Math.sin(((n - i) * (2 * Math.PI)) / r)
        }),
        (t.easeOutElastic = function (t, e = 0.7) {
          const n = 1 - e,
            r = 2 * t
          if (0 === t || 1 === t) return t
          const i = (n / (2 * Math.PI)) * Math.asin(1)
          return (
            Math.pow(2, -10 * r) * Math.sin(((r - i) * (2 * Math.PI)) / n) + 1
          )
        }),
        (t.easeInOutElastic = function (t, e = 0.65) {
          const n = 1 - e
          if (0 === t || 1 === t) return t
          const r = 2 * t,
            i = r - 1,
            s = (n / (2 * Math.PI)) * Math.asin(1)
          return r < 1
            ? Math.pow(2, 10 * i) *
                Math.sin(((i - s) * (2 * Math.PI)) / n) *
                -0.5
            : Math.pow(2, -10 * i) *
                Math.sin(((i - s) * (2 * Math.PI)) / n) *
                0.5 +
                1
        }),
        (t.easeOutBounce = e),
        (t.easeInBounce = n),
        (t.easeInOutBounce = function (t) {
          return t < 0.5 ? 0.5 * n(2 * t) : 0.5 * e(2 * t - 1) + 0.5
        })
    })(jd || (jd = {})),
    (function (t) {
      ;(t.number = (t, e) => {
        const n = e - t
        return (e) => t + n * e
      }),
        (t.object = (t, e) => {
          const n = Object.keys(t)
          return (r) => {
            const i = {}
            for (let s = n.length - 1; -1 !== s; s -= 1) {
              const o = n[s]
              i[o] = t[o] + (e[o] - t[o]) * r
            }
            return i
          }
        }),
        (t.unit = (t, e) => {
          const n = /(-?[0-9]*.[0-9]*)(px|em|cm|mm|in|pt|pc|%)/,
            r = n.exec(t),
            i = n.exec(e),
            s = i ? i[1] : '',
            o = r ? +r[1] : 0,
            a = i ? +i[1] : 0,
            l = s.indexOf('.'),
            c = l > 0 ? s[1].length - l - 1 : 0,
            h = a - o,
            u = r ? r[2] : ''
          return (t) => (o + h * t).toFixed(c) + u
        }),
        (t.color = (t, e) => {
          const n = parseInt(t.slice(1), 16),
            r = parseInt(e.slice(1), 16),
            i = 255 & n,
            s = (255 & r) - i,
            o = 65280 & n,
            a = (65280 & r) - o,
            l = 16711680 & n,
            c = (16711680 & r) - l
          return (t) =>
            `#${(
              (1 << 24) |
              ((i + s * t) & 255) |
              ((o + a * t) & 65280) |
              ((l + c * t) & 16711680)
            )
              .toString(16)
              .slice(1)}`
        })
    })(kd || (kd = {}))
  const Id = []
  var Bd, Rd
  !(function (t) {
    ;(t.toDeg = function (t) {
      return ((180 * t) / Math.PI) % 360
    }),
      (t.toRad = function (t, e = !1) {
        return ((e ? t : t % 360) * Math.PI) / 180
      }),
      (t.normalize = function (t) {
        return (t % 360) + (t < 0 ? 360 : 0)
      })
  })(Bd || (Bd = {})),
    (function (t) {
      ;(t.round = function (t, e = 0) {
        return Number.isInteger(t) ? t : +t.toFixed(e)
      }),
        (t.random = function (t, e) {
          let n, r
          if (
            (null == e
              ? ((r = null == t ? 1 : t), (n = 0))
              : ((r = e), (n = null == t ? 0 : t)),
            r < n)
          ) {
            const t = n
            ;(n = r), (r = t)
          }
          return Math.floor(Math.random() * (r - n + 1) + n)
        }),
        (t.clamp = function (t, e, n) {
          return Number.isNaN(t)
            ? NaN
            : Number.isNaN(e) || Number.isNaN(n)
            ? 0
            : e < n
            ? t < e
              ? e
              : t > n
              ? n
              : t
            : t < n
            ? n
            : t > e
            ? e
            : t
        }),
        (t.snapToGrid = function (t, e) {
          return e * Math.round(t / e)
        }),
        (t.containsPoint = function (t, e) {
          return (
            null != e &&
            null != t &&
            e.x >= t.x &&
            e.x <= t.x + t.width &&
            e.y >= t.y &&
            e.y <= t.y + t.height
          )
        }),
        (t.squaredLength = function (t, e) {
          const n = t.x - e.x,
            r = t.y - e.y
          return n * n + r * r
        })
    })(Rd || (Rd = {}))
  class Dd {
    valueOf() {
      return this.toJSON()
    }
    toString() {
      return JSON.stringify(this.toJSON())
    }
  }
  class Vd extends Dd {
    constructor(t, e) {
      super(), (this.x = null == t ? 0 : t), (this.y = null == e ? 0 : e)
    }
    round(t = 0) {
      return (
        (this.x = Rd.round(this.x, t)), (this.y = Rd.round(this.y, t)), this
      )
    }
    add(t, e) {
      const n = Vd.create(t, e)
      return (this.x += n.x), (this.y += n.y), this
    }
    update(t, e) {
      const n = Vd.create(t, e)
      return (this.x = n.x), (this.y = n.y), this
    }
    translate(t, e) {
      const n = Vd.create(t, e)
      return (this.x += n.x), (this.y += n.y), this
    }
    rotate(t, e) {
      const n = Vd.rotate(this, t, e)
      return (this.x = n.x), (this.y = n.y), this
    }
    scale(t, e, n = new Vd()) {
      const r = Vd.create(n)
      return (
        (this.x = r.x + t * (this.x - r.x)),
        (this.y = r.y + e * (this.y - r.y)),
        this
      )
    }
    closest(t) {
      if (1 === t.length) return Vd.create(t[0])
      let e = null,
        n = 1 / 0
      return (
        t.forEach((t) => {
          const r = this.squaredDistance(t)
          r < n && ((e = t), (n = r))
        }),
        e ? Vd.create(e) : null
      )
    }
    distance(t) {
      return Math.sqrt(this.squaredDistance(t))
    }
    squaredDistance(t) {
      const e = Vd.create(t),
        n = this.x - e.x,
        r = this.y - e.y
      return n * n + r * r
    }
    manhattanDistance(t) {
      const e = Vd.create(t)
      return Math.abs(e.x - this.x) + Math.abs(e.y - this.y)
    }
    magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y) || 0.01
    }
    theta(t = new Vd()) {
      const e = Vd.create(t),
        n = -(e.y - this.y),
        r = e.x - this.x
      let i = Math.atan2(n, r)
      return i < 0 && (i = 2 * Math.PI + i), (180 * i) / Math.PI
    }
    angleBetween(t, e) {
      if (this.equals(t) || this.equals(e)) return NaN
      let n = this.theta(e) - this.theta(t)
      return n < 0 && (n += 360), n
    }
    vectorAngle(t) {
      return new Vd(0, 0).angleBetween(this, t)
    }
    toPolar(t) {
      return this.update(Vd.toPolar(this, t)), this
    }
    changeInAngle(t, e, n = new Vd()) {
      return this.clone().translate(-t, -e).theta(n) - this.theta(n)
    }
    adhereToRect(t) {
      return (
        Rd.containsPoint(t, this) ||
          ((this.x = Math.min(Math.max(this.x, t.x), t.x + t.width)),
          (this.y = Math.min(Math.max(this.y, t.y), t.y + t.height))),
        this
      )
    }
    bearing(t) {
      const e = Vd.create(t),
        n = Bd.toRad(this.y),
        r = Bd.toRad(e.y),
        i = this.x,
        s = e.x,
        o = Bd.toRad(s - i),
        a = Math.sin(o) * Math.cos(r),
        l = Math.cos(n) * Math.sin(r) - Math.sin(n) * Math.cos(r) * Math.cos(o)
      let c = Bd.toDeg(Math.atan2(a, l)) - 22.5
      return (
        c < 0 && (c += 360),
        (c = parseInt(c / 45, 10)),
        ['NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'][c]
      )
    }
    cross(t, e) {
      if (null != t && null != e) {
        const n = Vd.create(t),
          r = Vd.create(e)
        return (r.x - this.x) * (n.y - this.y) - (r.y - this.y) * (n.x - this.x)
      }
      return NaN
    }
    dot(t) {
      const e = Vd.create(t)
      return this.x * e.x + this.y * e.y
    }
    diff(t, e) {
      if ('number' == typeof t) return new Vd(this.x - t, this.y - e)
      const n = Vd.create(t)
      return new Vd(this.x - n.x, this.y - n.y)
    }
    lerp(t, e) {
      const n = Vd.create(t)
      return new Vd((1 - e) * this.x + e * n.x, (1 - e) * this.y + e * n.y)
    }
    normalize(t = 1) {
      const e = t / this.magnitude()
      return this.scale(e, e)
    }
    move(t, e) {
      const n = Vd.create(t),
        r = Bd.toRad(n.theta(this))
      return this.translate(Math.cos(r) * e, -Math.sin(r) * e)
    }
    reflection(t) {
      return Vd.create(t).move(this, this.distance(t))
    }
    snapToGrid(t, e) {
      return (
        (this.x = Rd.snapToGrid(this.x, t)),
        (this.y = Rd.snapToGrid(this.y, null == e ? t : e)),
        this
      )
    }
    equals(t) {
      const e = Vd.create(t)
      return null != e && e.x === this.x && e.y === this.y
    }
    clone() {
      return Vd.clone(this)
    }
    toJSON() {
      return Vd.toJSON(this)
    }
    serialize() {
      return `${this.x} ${this.y}`
    }
  }
  !(function (t) {
    t.isPoint = function (e) {
      return null != e && e instanceof t
    }
  })(Vd || (Vd = {})),
    (function (t) {
      ;(t.isPointLike = function (t) {
        return (
          null != t &&
          'object' == typeof t &&
          'number' == typeof t.x &&
          'number' == typeof t.y
        )
      }),
        (t.isPointData = function (t) {
          return (
            null != t &&
            Array.isArray(t) &&
            2 === t.length &&
            'number' == typeof t[0] &&
            'number' == typeof t[1]
          )
        })
    })(Vd || (Vd = {})),
    (function (t) {
      function e(e) {
        return t.isPoint(e)
          ? new t(e.x, e.y)
          : Array.isArray(e)
          ? new t(e[0], e[1])
          : new t(e.x, e.y)
      }
      function n(t, e) {
        return t === e || (null != t && null != e && t.x === e.x && t.y === e.y)
      }
      function r(n, r, i, s = new t()) {
        const o = e(n),
          a = e(s),
          l = o.x - a.x,
          c = o.y - a.y,
          h = c * r + l * i
        return new t(l * r - c * i + a.x, h + a.y)
      }
      ;(t.create = function (n, r) {
        return null == n || 'number' == typeof n ? new t(n, r) : e(n)
      }),
        (t.clone = e),
        (t.toJSON = function (e) {
          return t.isPoint(e)
            ? { x: e.x, y: e.y }
            : Array.isArray(e)
            ? { x: e[0], y: e[1] }
            : { x: e.x, y: e.y }
        }),
        (t.fromPolar = function (n, r, i = new t()) {
          let s = Math.abs(n * Math.cos(r)),
            o = Math.abs(n * Math.sin(r))
          const a = e(i),
            l = Bd.normalize(Bd.toDeg(r))
          return (
            l < 90
              ? (o = -o)
              : l < 180
              ? ((s = -s), (o = -o))
              : l < 270 && (s = -s),
            new t(a.x + s, a.y + o)
          )
        }),
        (t.toPolar = function (n, r = new t()) {
          const i = e(n),
            s = e(r),
            o = i.x - s.x,
            a = i.y - s.y
          return new t(Math.sqrt(o * o + a * a), Bd.toRad(s.theta(i)))
        }),
        (t.equals = n),
        (t.equalPoints = function (t, e) {
          if (
            (null == t && null != e) ||
            (null != t && null == e) ||
            (null != t && null != e && t.length !== e.length)
          )
            return !1
          if (null != t && null != e)
            for (let r = 0, i = t.length; r < i; r += 1)
              if (!n(t[r], e[r])) return !1
          return !0
        }),
        (t.random = function (e, n, r, i) {
          return new t(Rd.random(e, n), Rd.random(r, i))
        }),
        (t.rotate = function (t, e, n) {
          const i = Bd.toRad(Bd.normalize(-e)),
            s = Math.sin(i)
          return r(t, Math.cos(i), s, n)
        }),
        (t.rotateEx = r)
    })(Vd || (Vd = {}))
  class zd extends Dd {
    constructor(t, e, n, r) {
      super(),
        (this.x = null == t ? 0 : t),
        (this.y = null == e ? 0 : e),
        (this.width = null == n ? 0 : n),
        (this.height = null == r ? 0 : r)
    }
    get left() {
      return this.x
    }
    get top() {
      return this.y
    }
    get right() {
      return this.x + this.width
    }
    get bottom() {
      return this.y + this.height
    }
    get origin() {
      return new Vd(this.x, this.y)
    }
    get topLeft() {
      return new Vd(this.x, this.y)
    }
    get topCenter() {
      return new Vd(this.x + this.width / 2, this.y)
    }
    get topRight() {
      return new Vd(this.x + this.width, this.y)
    }
    get center() {
      return new Vd(this.x + this.width / 2, this.y + this.height / 2)
    }
    get bottomLeft() {
      return new Vd(this.x, this.y + this.height)
    }
    get bottomCenter() {
      return new Vd(this.x + this.width / 2, this.y + this.height)
    }
    get bottomRight() {
      return new Vd(this.x + this.width, this.y + this.height)
    }
    get corner() {
      return new Vd(this.x + this.width, this.y + this.height)
    }
    get rightMiddle() {
      return new Vd(this.x + this.width, this.y + this.height / 2)
    }
    get leftMiddle() {
      return new Vd(this.x, this.y + this.height / 2)
    }
    get topLine() {
      return new $d(this.topLeft, this.topRight)
    }
    get rightLine() {
      return new $d(this.topRight, this.bottomRight)
    }
    get bottomLine() {
      return new $d(this.bottomLeft, this.bottomRight)
    }
    get leftLine() {
      return new $d(this.topLeft, this.bottomLeft)
    }
    getOrigin() {
      return this.origin
    }
    getTopLeft() {
      return this.topLeft
    }
    getTopCenter() {
      return this.topCenter
    }
    getTopRight() {
      return this.topRight
    }
    getCenter() {
      return this.center
    }
    getCenterX() {
      return this.x + this.width / 2
    }
    getCenterY() {
      return this.y + this.height / 2
    }
    getBottomLeft() {
      return this.bottomLeft
    }
    getBottomCenter() {
      return this.bottomCenter
    }
    getBottomRight() {
      return this.bottomRight
    }
    getCorner() {
      return this.corner
    }
    getRightMiddle() {
      return this.rightMiddle
    }
    getLeftMiddle() {
      return this.leftMiddle
    }
    getTopLine() {
      return this.topLine
    }
    getRightLine() {
      return this.rightLine
    }
    getBottomLine() {
      return this.bottomLine
    }
    getLeftLine() {
      return this.leftLine
    }
    bbox(t) {
      if (!t) return this.clone()
      const e = Bd.toRad(t),
        n = Math.abs(Math.sin(e)),
        r = Math.abs(Math.cos(e)),
        i = this.width * r + this.height * n,
        s = this.width * n + this.height * r
      return new zd(
        this.x + (this.width - i) / 2,
        this.y + (this.height - s) / 2,
        i,
        s,
      )
    }
    round(t = 0) {
      return (
        (this.x = Rd.round(this.x, t)),
        (this.y = Rd.round(this.y, t)),
        (this.width = Rd.round(this.width, t)),
        (this.height = Rd.round(this.height, t)),
        this
      )
    }
    add(t, e, n, r) {
      const i = zd.create(t, e, n, r),
        s = Math.min(this.x, i.x),
        o = Math.min(this.y, i.y),
        a = Math.max(this.x + this.width, i.x + i.width),
        l = Math.max(this.y + this.height, i.y + i.height)
      return (
        (this.x = s),
        (this.y = o),
        (this.width = a - s),
        (this.height = l - o),
        this
      )
    }
    update(t, e, n, r) {
      const i = zd.create(t, e, n, r)
      return (
        (this.x = i.x),
        (this.y = i.y),
        (this.width = i.width),
        (this.height = i.height),
        this
      )
    }
    inflate(t, e) {
      const n = t,
        r = null != e ? e : t
      return (
        (this.x -= n),
        (this.y -= r),
        (this.width += 2 * n),
        (this.height += 2 * r),
        this
      )
    }
    snapToGrid(t, e) {
      const n = this.origin.snapToGrid(t, e),
        r = this.corner.snapToGrid(t, e)
      return (
        (this.x = n.x),
        (this.y = n.y),
        (this.width = r.x - n.x),
        (this.height = r.y - n.y),
        this
      )
    }
    translate(t, e) {
      const n = Vd.create(t, e)
      return (this.x += n.x), (this.y += n.y), this
    }
    scale(t, e, n = new Vd()) {
      const r = this.origin.scale(t, e, n)
      return (
        (this.x = r.x),
        (this.y = r.y),
        (this.width *= t),
        (this.height *= e),
        this
      )
    }
    rotate(t, e = this.getCenter()) {
      if (0 !== t) {
        const n = Bd.toRad(t),
          r = Math.cos(n),
          i = Math.sin(n)
        let s = this.getOrigin(),
          o = this.getTopRight(),
          a = this.getBottomRight(),
          l = this.getBottomLeft()
        ;(s = Vd.rotateEx(s, r, i, e)),
          (o = Vd.rotateEx(o, r, i, e)),
          (a = Vd.rotateEx(a, r, i, e)),
          (l = Vd.rotateEx(l, r, i, e))
        const c = new zd(s.x, s.y, 0, 0)
        c.add(o.x, o.y, 0, 0),
          c.add(a.x, a.y, 0, 0),
          c.add(l.x, l.y, 0, 0),
          this.update(c)
      }
      return this
    }
    rotate90() {
      const t = (this.width - this.height) / 2
      ;(this.x += t), (this.y -= t)
      const e = this.width
      return (this.width = this.height), (this.height = e), this
    }
    moveAndExpand(t) {
      const e = zd.clone(t)
      return (
        (this.x += e.x || 0),
        (this.y += e.y || 0),
        (this.width += e.width || 0),
        (this.height += e.height || 0),
        this
      )
    }
    getMaxScaleToFit(t, e = this.center) {
      const n = zd.clone(t),
        r = e.x,
        i = e.y
      let s = 1 / 0,
        o = 1 / 0,
        a = 1 / 0,
        l = 1 / 0,
        c = 1 / 0,
        h = 1 / 0,
        u = 1 / 0,
        g = 1 / 0
      const d = n.topLeft
      d.x < r && (s = (this.x - r) / (d.x - r)),
        d.y < i && (c = (this.y - i) / (d.y - i))
      const f = n.bottomRight
      f.x > r && (o = (this.x + this.width - r) / (f.x - r)),
        f.y > i && (h = (this.y + this.height - i) / (f.y - i))
      const p = n.topRight
      p.x > r && (a = (this.x + this.width - r) / (p.x - r)),
        p.y < i && (u = (this.y - i) / (p.y - i))
      const m = n.bottomLeft
      return (
        m.x < r && (l = (this.x - r) / (m.x - r)),
        m.y > i && (g = (this.y + this.height - i) / (m.y - i)),
        { sx: Math.min(s, o, a, l), sy: Math.min(c, h, u, g) }
      )
    }
    getMaxUniformScaleToFit(t, e = this.center) {
      const n = this.getMaxScaleToFit(t, e)
      return Math.min(n.sx, n.sy)
    }
    containsPoint(t, e) {
      return Rd.containsPoint(this, Vd.create(t, e))
    }
    containsRect(t, e, n, r) {
      const i = zd.create(t, e, n, r),
        s = this.x,
        o = this.y,
        a = this.width,
        l = this.height,
        c = i.x,
        h = i.y,
        u = i.width,
        g = i.height
      return (
        0 !== a &&
        0 !== l &&
        0 !== u &&
        0 !== g &&
        c >= s &&
        h >= o &&
        c + u <= s + a &&
        h + g <= o + l
      )
    }
    intersectsWithLine(t) {
      const e = [this.topLine, this.rightLine, this.bottomLine, this.leftLine],
        n = [],
        r = []
      return (
        e.forEach((e) => {
          const i = t.intersectsWithLine(e)
          null !== i &&
            r.indexOf(i.toString()) < 0 &&
            (n.push(i), r.push(i.toString()))
        }),
        n.length > 0 ? n : null
      )
    }
    intersectsWithLineFromCenterToPoint(t, e) {
      const n = Vd.clone(t),
        r = this.center
      let i = null
      null != e && 0 !== e && n.rotate(e, r)
      const s = [this.topLine, this.rightLine, this.bottomLine, this.leftLine],
        o = new $d(r, n)
      for (let t = s.length - 1; t >= 0; t -= 1) {
        const e = s[t].intersectsWithLine(o)
        if (null !== e) {
          i = e
          break
        }
      }
      return i && null != e && 0 !== e && i.rotate(-e, r), i
    }
    intersectsWithRect(t, e, n, r) {
      const i = zd.create(t, e, n, r)
      if (!this.isIntersectWithRect(i)) return null
      const s = this.origin,
        o = this.corner,
        a = i.origin,
        l = i.corner,
        c = Math.max(s.x, a.x),
        h = Math.max(s.y, a.y)
      return new zd(c, h, Math.min(o.x, l.x) - c, Math.min(o.y, l.y) - h)
    }
    isIntersectWithRect(t, e, n, r) {
      const i = zd.create(t, e, n, r),
        s = this.origin,
        o = this.corner,
        a = i.origin,
        l = i.corner
      return !(l.x <= s.x || l.y <= s.y || a.x >= o.x || a.y >= o.y)
    }
    normalize() {
      let t = this.x,
        e = this.y,
        n = this.width,
        r = this.height
      return (
        this.width < 0 && ((t = this.x + this.width), (n = -this.width)),
        this.height < 0 && ((e = this.y + this.height), (r = -this.height)),
        (this.x = t),
        (this.y = e),
        (this.width = n),
        (this.height = r),
        this
      )
    }
    union(t) {
      const e = zd.clone(t),
        n = this.origin,
        r = this.corner,
        i = e.origin,
        s = e.corner,
        o = Math.min(n.x, i.x),
        a = Math.min(n.y, i.y),
        l = Math.max(r.x, s.x),
        c = Math.max(r.y, s.y)
      return new zd(o, a, l - o, c - a)
    }
    getNearestSideToPoint(t) {
      const e = Vd.clone(t),
        n = e.x - this.x,
        r = this.x + this.width - e.x,
        i = e.y - this.y
      let s = n,
        o = 'left'
      return (
        r < s && ((s = r), (o = 'right')),
        i < s && ((s = i), (o = 'top')),
        this.y + this.height - e.y < s && (o = 'bottom'),
        o
      )
    }
    getNearestPointToPoint(t) {
      const e = Vd.clone(t)
      if (this.containsPoint(e)) {
        const t = this.getNearestSideToPoint(e)
        if ('left' === t) return new Vd(this.x, e.y)
        if ('top' === t) return new Vd(e.x, this.y)
        if ('right' === t) return new Vd(this.x + this.width, e.y)
        if ('bottom' === t) return new Vd(e.x, this.y + this.height)
      }
      return e.adhereToRect(this)
    }
    equals(t) {
      return (
        null != t &&
        t.x === this.x &&
        t.y === this.y &&
        t.width === this.width &&
        t.height === this.height
      )
    }
    clone() {
      return new zd(this.x, this.y, this.width, this.height)
    }
    toJSON() {
      return { x: this.x, y: this.y, width: this.width, height: this.height }
    }
    serialize() {
      return `${this.x} ${this.y} ${this.width} ${this.height}`
    }
  }
  !(function (t) {
    t.isRectangle = function (e) {
      return null != e && e instanceof t
    }
  })(zd || (zd = {})),
    (function (t) {
      t.isRectangleLike = function (t) {
        return (
          null != t &&
          'object' == typeof t &&
          'number' == typeof t.x &&
          'number' == typeof t.y &&
          'number' == typeof t.width &&
          'number' == typeof t.height
        )
      }
    })(zd || (zd = {})),
    (function (t) {
      function e(e) {
        return t.isRectangle(e)
          ? e.clone()
          : Array.isArray(e)
          ? new t(e[0], e[1], e[2], e[3])
          : new t(e.x, e.y, e.width, e.height)
      }
      ;(t.create = function (n, r, i, s) {
        return null == n || 'number' == typeof n ? new t(n, r, i, s) : e(n)
      }),
        (t.clone = e),
        (t.fromEllipse = function (e) {
          return new t(e.x - e.a, e.y - e.b, 2 * e.a, 2 * e.b)
        }),
        (t.fromSize = function (e) {
          return new t(0, 0, e.width, e.height)
        }),
        (t.fromPositionAndSize = function (e, n) {
          return new t(e.x, e.y, n.width, n.height)
        })
    })(zd || (zd = {}))
  class $d extends Dd {
    constructor(t, e, n, r) {
      super(),
        'number' == typeof t && 'number' == typeof e
          ? ((this.start = new Vd(t, e)), (this.end = new Vd(n, r)))
          : ((this.start = Vd.create(t)), (this.end = Vd.create(e)))
    }
    get center() {
      return new Vd(
        (this.start.x + this.end.x) / 2,
        (this.start.y + this.end.y) / 2,
      )
    }
    getCenter() {
      return this.center
    }
    round(t = 0) {
      return this.start.round(t), this.end.round(t), this
    }
    translate(t, e) {
      return (
        'number' == typeof t
          ? (this.start.translate(t, e), this.end.translate(t, e))
          : (this.start.translate(t), this.end.translate(t)),
        this
      )
    }
    rotate(t, e) {
      return this.start.rotate(t, e), this.end.rotate(t, e), this
    }
    scale(t, e, n) {
      return this.start.scale(t, e, n), this.end.scale(t, e, n), this
    }
    length() {
      return Math.sqrt(this.squaredLength())
    }
    squaredLength() {
      const t = this.start.x - this.end.x,
        e = this.start.y - this.end.y
      return t * t + e * e
    }
    setLength(t) {
      const e = this.length()
      if (!e) return this
      const n = t / e
      return this.scale(n, n, this.start)
    }
    parallel(t) {
      const e = this.clone()
      if (!e.isDifferentiable()) return e
      const { start: n, end: r } = e,
        i = n.clone().rotate(270, r),
        s = r.clone().rotate(90, n)
      return n.move(s, t), r.move(i, t), e
    }
    vector() {
      return new Vd(this.end.x - this.start.x, this.end.y - this.start.y)
    }
    angle() {
      const t = new Vd(this.start.x + 1, this.start.y)
      return this.start.angleBetween(this.end, t)
    }
    bbox() {
      const t = Math.min(this.start.x, this.end.x),
        e = Math.min(this.start.y, this.end.y),
        n = Math.max(this.start.x, this.end.x),
        r = Math.max(this.start.y, this.end.y)
      return new zd(t, e, n - t, r - e)
    }
    bearing() {
      return this.start.bearing(this.end)
    }
    closestPoint(t) {
      return this.pointAt(this.closestPointNormalizedLength(t))
    }
    closestPointLength(t) {
      return this.closestPointNormalizedLength(t) * this.length()
    }
    closestPointTangent(t) {
      return this.tangentAt(this.closestPointNormalizedLength(t))
    }
    closestPointNormalizedLength(t) {
      const e = this.vector().dot(new $d(this.start, t).vector()),
        n = Math.min(1, Math.max(0, e / this.squaredLength()))
      return Number.isNaN(n) ? 0 : n
    }
    pointAt(t) {
      const e = this.start,
        n = this.end
      return t <= 0 ? e.clone() : t >= 1 ? n.clone() : e.lerp(n, t)
    }
    pointAtLength(t) {
      const e = this.start,
        n = this.end
      let r = !0
      t < 0 && ((r = !1), (t = -t))
      const i = this.length()
      if (t >= i) return r ? n.clone() : e.clone()
      const s = (r ? t : i - t) / i
      return this.pointAt(s)
    }
    divideAt(t) {
      const e = this.pointAt(t)
      return [new $d(this.start, e), new $d(e, this.end)]
    }
    divideAtLength(t) {
      const e = this.pointAtLength(t)
      return [new $d(this.start, e), new $d(e, this.end)]
    }
    containsPoint(t) {
      const e = this.start,
        n = this.end
      if (0 !== e.cross(t, n)) return !1
      const r = this.length()
      return !(new $d(e, t).length() > r) && !(new $d(t, n).length() > r)
    }
    intersect(t, e) {
      const n = t.intersectsWithLine(this, e)
      return n ? (Array.isArray(n) ? n : [n]) : null
    }
    intersectsWithLine(t) {
      const e = new Vd(this.end.x - this.start.x, this.end.y - this.start.y),
        n = new Vd(t.end.x - t.start.x, t.end.y - t.start.y),
        r = e.x * n.y - e.y * n.x,
        i = new Vd(t.start.x - this.start.x, t.start.y - this.start.y),
        s = i.x * n.y - i.y * n.x,
        o = i.x * e.y - i.y * e.x
      if (0 === r || s * r < 0 || o * r < 0) return null
      if (r > 0) {
        if (s > r || o > r) return null
      } else if (s < r || o < r) return null
      return new Vd(this.start.x + (s * e.x) / r, this.start.y + (s * e.y) / r)
    }
    isDifferentiable() {
      return !this.start.equals(this.end)
    }
    pointOffset(t) {
      const e = Vd.clone(t),
        n = this.start,
        r = this.end
      return (
        ((r.x - n.x) * (e.y - n.y) - (r.y - n.y) * (e.x - n.x)) / this.length()
      )
    }
    pointSquaredDistance(t, e) {
      const n = Vd.create(t, e)
      return this.closestPoint(n).squaredDistance(n)
    }
    pointDistance(t, e) {
      const n = Vd.create(t, e)
      return this.closestPoint(n).distance(n)
    }
    tangentAt(t) {
      if (!this.isDifferentiable()) return null
      const e = this.start,
        n = this.end,
        r = this.pointAt(t),
        i = new $d(e, n)
      return i.translate(r.x - e.x, r.y - e.y), i
    }
    tangentAtLength(t) {
      if (!this.isDifferentiable()) return null
      const e = this.start,
        n = this.end,
        r = this.pointAtLength(t),
        i = new $d(e, n)
      return i.translate(r.x - e.x, r.y - e.y), i
    }
    relativeCcw(t, e) {
      const n = Vd.create(t, e)
      let r = n.x - this.start.x,
        i = n.y - this.start.y
      const s = this.end.x - this.start.x,
        o = this.end.y - this.start.y
      let a = r * o - i * s
      return (
        0 === a &&
          ((a = r * s + i * o),
          a > 0 && ((r -= s), (i -= o), (a = r * s + i * o), a < 0 && (a = 0))),
        a < 0 ? -1 : a > 0 ? 1 : 0
      )
    }
    equals(t) {
      return (
        null != t &&
        this.start.x === t.start.x &&
        this.start.y === t.start.y &&
        this.end.x === t.end.x &&
        this.end.y === t.end.y
      )
    }
    clone() {
      return new $d(this.start, this.end)
    }
    toJSON() {
      return { start: this.start.toJSON(), end: this.end.toJSON() }
    }
    serialize() {
      return [this.start.serialize(), this.end.serialize()].join(' ')
    }
  }
  !(function (t) {
    t.isLine = function (e) {
      return null != e && e instanceof t
    }
  })($d || ($d = {}))
  class Fd extends Dd {
    constructor(t, e, n, r) {
      super(),
        (this.x = null == t ? 0 : t),
        (this.y = null == e ? 0 : e),
        (this.a = null == n ? 0 : n),
        (this.b = null == r ? 0 : r)
    }
    get center() {
      return new Vd(this.x, this.y)
    }
    bbox() {
      return zd.fromEllipse(this)
    }
    getCenter() {
      return this.center
    }
    inflate(t, e) {
      const n = t,
        r = null != e ? e : t
      return (this.a += 2 * n), (this.b += 2 * r), this
    }
    normalizedDistance(t, e) {
      const n = Vd.create(t, e),
        r = n.x - this.x,
        i = n.y - this.y,
        s = this.a,
        o = this.b
      return (r * r) / (s * s) + (i * i) / (o * o)
    }
    containsPoint(t, e) {
      return this.normalizedDistance(t, e) <= 1
    }
    intersectsWithLine(t) {
      const e = [],
        n = this.a,
        r = this.b,
        i = t.start,
        s = t.end,
        o = t.vector(),
        a = i.diff(new Vd(this.x, this.y)),
        l = new Vd(o.x / (n * n), o.y / (r * r)),
        c = new Vd(a.x / (n * n), a.y / (r * r)),
        h = o.dot(l),
        u = o.dot(c),
        g = u * u - h * (a.dot(c) - 1)
      if (g < 0) return null
      if (g > 0) {
        const t = Math.sqrt(g),
          n = (-u - t) / h,
          r = (-u + t) / h
        if ((n < 0 || n > 1) && (r < 0 || r > 1)) return null
        n >= 0 && n <= 1 && e.push(i.lerp(s, n)),
          r >= 0 && r <= 1 && e.push(i.lerp(s, r))
      } else {
        const t = -u / h
        if (!(t >= 0 && t <= 1)) return null
        e.push(i.lerp(s, t))
      }
      return e
    }
    intersectsWithLineFromCenterToPoint(t, e = 0) {
      const n = Vd.clone(t)
      e && n.rotate(e, this.getCenter())
      const r = n.x - this.x,
        i = n.y - this.y
      let s
      if (0 === r)
        return (
          (s = this.bbox().getNearestPointToPoint(n)),
          e ? s.rotate(-e, this.getCenter()) : s
        )
      const o = i / r,
        a = o * o,
        l = this.a * this.a,
        c = this.b * this.b
      let h = Math.sqrt(1 / (1 / l + a / c))
      h = r < 0 ? -h : h
      const u = o * h
      return (
        (s = new Vd(this.x + h, this.y + u)),
        e ? s.rotate(-e, this.getCenter()) : s
      )
    }
    tangentTheta(t) {
      const e = Vd.clone(t),
        n = e.x,
        r = e.y,
        i = this.a,
        s = this.b,
        o = this.bbox().center,
        a = o.x,
        l = o.y,
        c = n > o.x + i / 2,
        h = n < o.x - i / 2
      let u, g
      return (
        c || h
          ? ((g = n > o.x ? r - 30 : r + 30),
            (u =
              (i * i) / (n - a) -
              (i * i * (r - l) * (g - l)) / (s * s * (n - a)) +
              a))
          : ((u = r > o.y ? n + 30 : n - 30),
            (g =
              (s * s) / (r - l) -
              (s * s * (n - a) * (u - a)) / (i * i * (r - l)) +
              l)),
        new Vd(u, g).theta(e)
      )
    }
    scale(t, e) {
      return (this.a *= t), (this.b *= e), this
    }
    rotate(t, e) {
      const n = zd.fromEllipse(this)
      n.rotate(t, e)
      const r = Fd.fromRect(n)
      return (
        (this.a = r.a), (this.b = r.b), (this.x = r.x), (this.y = r.y), this
      )
    }
    translate(t, e) {
      const n = Vd.create(t, e)
      return (this.x += n.x), (this.y += n.y), this
    }
    equals(t) {
      return (
        null != t &&
        t.x === this.x &&
        t.y === this.y &&
        t.a === this.a &&
        t.b === this.b
      )
    }
    clone() {
      return new Fd(this.x, this.y, this.a, this.b)
    }
    toJSON() {
      return { x: this.x, y: this.y, a: this.a, b: this.b }
    }
    serialize() {
      return `${this.x} ${this.y} ${this.a} ${this.b}`
    }
  }
  !(function (t) {
    t.isEllipse = function (e) {
      return null != e && e instanceof t
    }
  })(Fd || (Fd = {})),
    (function (t) {
      function e(e) {
        return t.isEllipse(e)
          ? e.clone()
          : Array.isArray(e)
          ? new t(e[0], e[1], e[2], e[3])
          : new t(e.x, e.y, e.a, e.b)
      }
      ;(t.create = function (n, r, i, s) {
        return null == n || 'number' == typeof n ? new t(n, r, i, s) : e(n)
      }),
        (t.parse = e),
        (t.fromRect = function (e) {
          const n = e.center
          return new t(n.x, n.y, e.width / 2, e.height / 2)
        })
    })(Fd || (Fd = {}))
  const qd = new RegExp('^[\\s\\dLMCZz,.]*$')
  function Gd(t) {
    return 'string' == typeof t && qd.test(t)
  }
  function Wd(t, e) {
    return ((t % e) + e) % e
  }
  function Hd(t, e = {}) {
    const n = []
    return (
      t &&
        t.length &&
        t.forEach((t) => {
          Array.isArray(t)
            ? n.push({ x: t[0], y: t[1] })
            : n.push({ x: t.x, y: t.y })
        }),
      (function (t, e, n, r, i) {
        const s = [],
          o = t[t.length - 1],
          a = null != e && e > 0,
          l = e || 0
        if (r && a) {
          const e = (t = t.slice())[0],
            n = new Vd(o.x + (e.x - o.x) / 2, o.y + (e.y - o.y) / 2)
          t.splice(0, 0, n)
        }
        let c = t[0],
          h = 1
        for (
          n ? s.push('M', c.x, c.y) : s.push('L', c.x, c.y);
          h < (r ? t.length : t.length - 1);

        ) {
          let e = t[Wd(h, t.length)],
            n = c.x - e.x,
            r = c.y - e.y
          if (
            a &&
            (0 !== n || 0 !== r) &&
            (null == i || i.indexOf(h - 1) < 0)
          ) {
            let i = Math.sqrt(n * n + r * r)
            const o = (n * Math.min(l, i / 2)) / i,
              a = (r * Math.min(l, i / 2)) / i,
              c = e.x + o,
              u = e.y + a
            s.push('L', c, u)
            let g = t[Wd(h + 1, t.length)]
            for (
              ;
              h < t.length - 2 &&
              0 === Math.round(g.x - e.x) &&
              0 === Math.round(g.y - e.y);

            )
              (g = t[Wd(h + 2, t.length)]), (h += 1)
            ;(n = g.x - e.x),
              (r = g.y - e.y),
              (i = Math.max(1, Math.sqrt(n * n + r * r)))
            const d = (n * Math.min(l, i / 2)) / i,
              f = (r * Math.min(l, i / 2)) / i,
              p = e.x + d,
              m = e.y + f
            s.push('Q', e.x, e.y, p, m), (e = new Vd(p, m))
          } else s.push('L', e.x, e.y)
          ;(c = e), (h += 1)
        }
        return (
          r ? s.push('Z') : s.push('L', o.x, o.y),
          s.map((t) => ('string' == typeof t ? t : +t.toFixed(3))).join(' ')
        )
      })(n, e.round, null == e.initialMove || e.initialMove, e.close, e.exclude)
    )
  }
  function Ud(t, e, n, r, i = 0, s = 0, o = 0, a, l) {
    if (0 === n || 0 === r) return []
    ;(a -= t), (l -= e), (n = Math.abs(n)), (r = Math.abs(r))
    const c = -a / 2,
      h = -l / 2,
      u = Math.cos((i * Math.PI) / 180),
      g = Math.sin((i * Math.PI) / 180),
      d = u * c + g * h,
      f = -1 * g * c + u * h,
      p = d * d,
      m = f * f,
      y = n * n,
      v = r * r,
      b = p / y + m / v
    let x
    if (b > 1) (n = Math.sqrt(b) * n), (r = Math.sqrt(b) * r), (x = 0)
    else {
      let t = 1
      s === o && (t = -1),
        (x = t * Math.sqrt((y * v - y * m - v * p) / (y * m + v * p)))
    }
    const w = (x * n * f) / r,
      P = (-1 * x * r * d) / n,
      A = u * w - g * P + a / 2,
      C = g * w + u * P + l / 2
    let O = Math.atan2((f - P) / r, (d - w) / n) - Math.atan2(0, 1),
      E = O >= 0 ? O : 2 * Math.PI + O
    O =
      Math.atan2((-f - P) / r, (-d - w) / n) -
      Math.atan2((f - P) / r, (d - w) / n)
    let M = O >= 0 ? O : 2 * Math.PI + O
    0 === o && M > 0
      ? (M -= 2 * Math.PI)
      : 0 !== o && M < 0 && (M += 2 * Math.PI)
    const S = (2 * M) / Math.PI,
      T = Math.ceil(S < 0 ? -1 * S : S),
      j = M / T,
      k = ((8 / 3) * Math.sin(j / 4) * Math.sin(j / 4)) / Math.sin(j / 2),
      N = u * n,
      _ = u * r,
      L = g * n,
      I = g * r
    let B = Math.cos(E),
      R = Math.sin(E),
      D = -k * (N * R + I * B),
      V = -k * (L * R - _ * B),
      z = 0,
      $ = 0
    const F = []
    for (let n = 0; n < T; n += 1) {
      ;(E += j),
        (B = Math.cos(E)),
        (R = Math.sin(E)),
        (z = N * B - I * R + A),
        ($ = L * B + _ * R + C)
      const r = -k * (N * R + I * B),
        i = -k * (L * R - _ * B),
        s = 6 * n
      ;(F[s] = Number(D + t)),
        (F[s + 1] = Number(V + e)),
        (F[s + 2] = Number(z - r + t)),
        (F[s + 3] = Number($ - i + e)),
        (F[s + 4] = Number(z + t)),
        (F[s + 5] = Number($ + e)),
        (D = z + r),
        (V = $ + i)
    }
    return F.map((t) => +t.toFixed(2))
  }
  function Jd(t, e, n, r, i = 0, s = 0, o = 0, a, l) {
    const c = [],
      h = Ud(t, e, n, r, i, s, o, a, l)
    if (null != h)
      for (let t = 0, e = h.length; t < e; t += 6)
        c.push('C', h[t], h[t + 1], h[t + 2], h[t + 3], h[t + 4], h[t + 5])
    return c.join(' ')
  }
  class Xd extends Dd {
    constructor(t) {
      if ((super(), null != t)) {
        if ('string' == typeof t) return Xd.parse(t)
        this.points = t.map((t) => Vd.create(t))
      } else this.points = []
    }
    get start() {
      return this.points[0] || null
    }
    get end() {
      return this.points[this.points.length - 1] || null
    }
    scale(t, e, n = new Vd()) {
      return this.points.forEach((r) => r.scale(t, e, n)), this
    }
    rotate(t, e) {
      return this.points.forEach((n) => n.rotate(t, e)), this
    }
    translate(t, e) {
      const n = Vd.create(t, e)
      return this.points.forEach((t) => t.translate(n.x, n.y)), this
    }
    round(t = 0) {
      return this.points.forEach((e) => e.round(t)), this
    }
    bbox() {
      if (0 === this.points.length) return new zd()
      let t = 1 / 0,
        e = -1 / 0,
        n = 1 / 0,
        r = -1 / 0
      const i = this.points
      for (let s = 0, o = i.length; s < o; s += 1) {
        const o = i[s],
          a = o.x,
          l = o.y
        a < t && (t = a), a > e && (e = a), l < n && (n = l), l > r && (r = l)
      }
      return new zd(t, n, e - t, r - n)
    }
    closestPoint(t) {
      const e = this.closestPointLength(t)
      return this.pointAtLength(e)
    }
    closestPointLength(t) {
      const e = this.points,
        n = e.length
      if (0 === n || 1 === n) return 0
      let r = 0,
        i = 0,
        s = 1 / 0
      for (let o = 0, a = n - 1; o < a; o += 1) {
        const n = new $d(e[o], e[o + 1]),
          a = n.length(),
          l = n.closestPointNormalizedLength(t),
          c = n.pointAt(l).squaredDistance(t)
        c < s && ((s = c), (i = r + l * a)), (r += a)
      }
      return i
    }
    closestPointNormalizedLength(t) {
      const e = this.length()
      if (0 === e) return 0
      return this.closestPointLength(t) / e
    }
    closestPointTangent(t) {
      const e = this.closestPointLength(t)
      return this.tangentAtLength(e)
    }
    containsPoint(t) {
      if (0 === this.points.length) return !1
      const e = Vd.clone(t),
        n = e.x,
        r = e.y,
        i = this.points,
        s = i.length
      let o = s - 1,
        a = 0
      for (let l = 0; l < s; l += 1) {
        const s = i[o],
          c = i[l]
        if (e.equals(s)) return !0
        const h = new $d(s, c)
        if (h.containsPoint(t)) return !0
        if ((r <= s.y && r > c.y) || (r > s.y && r <= c.y)) {
          const e = s.x - n > c.x - n ? s.x - n : c.x - n
          if (e >= 0) {
            const i = new Vd(n + e, r),
              s = new $d(t, i)
            h.intersectsWithLine(s) && (a += 1)
          }
        }
        o = l
      }
      return a % 2 == 1
    }
    intersectsWithLine(t) {
      const e = []
      for (let n = 0, r = this.points.length - 1; n < r; n += 1) {
        const r = this.points[n],
          i = this.points[n + 1],
          s = t.intersectsWithLine(new $d(r, i))
        s && e.push(s)
      }
      return e.length > 0 ? e : null
    }
    isDifferentiable() {
      for (let t = 0, e = this.points.length - 1; t < e; t += 1) {
        const e = this.points[t],
          n = this.points[t + 1]
        if (new $d(e, n).isDifferentiable()) return !0
      }
      return !1
    }
    length() {
      let t = 0
      for (let e = 0, n = this.points.length - 1; e < n; e += 1) {
        const n = this.points[e],
          r = this.points[e + 1]
        t += n.distance(r)
      }
      return t
    }
    pointAt(t) {
      const e = this.points,
        n = e.length
      if (0 === n) return null
      if (1 === n) return e[0].clone()
      if (t <= 0) return e[0].clone()
      if (t >= 1) return e[n - 1].clone()
      const r = this.length() * t
      return this.pointAtLength(r)
    }
    pointAtLength(t) {
      const e = this.points,
        n = e.length
      if (0 === n) return null
      if (1 === n) return e[0].clone()
      let r = !0
      t < 0 && ((r = !1), (t = -t))
      let i = 0
      for (let s = 0, o = n - 1; s < o; s += 1) {
        const n = r ? s : o - 1 - s,
          a = e[n],
          l = e[n + 1],
          c = new $d(a, l),
          h = a.distance(l)
        if (t <= i + h) return c.pointAtLength((r ? 1 : -1) * (t - i))
        i += h
      }
      return (r ? e[n - 1] : e[0]).clone()
    }
    tangentAt(t) {
      const e = this.points.length
      if (0 === e || 1 === e) return null
      t < 0 && (t = 0), t > 1 && (t = 1)
      const n = this.length() * t
      return this.tangentAtLength(n)
    }
    tangentAtLength(t) {
      const e = this.points,
        n = e.length
      if (0 === n || 1 === n) return null
      let r,
        i = !0
      t < 0 && ((i = !1), (t = -t))
      let s = 0
      for (let o = 0, a = n - 1; o < a; o += 1) {
        const n = i ? o : a - 1 - o,
          l = e[n],
          c = e[n + 1],
          h = new $d(l, c),
          u = l.distance(c)
        if (h.isDifferentiable()) {
          if (t <= s + u) return h.tangentAtLength((i ? 1 : -1) * (t - s))
          r = h
        }
        s += u
      }
      if (r) {
        const t = i ? 1 : 0
        return r.tangentAt(t)
      }
      return null
    }
    simplify(t = {}) {
      const e = this.points
      if (e.length < 3) return this
      const n = t.threshold || 0
      let r = 0
      for (; e[r + 2]; ) {
        const t = r + 1,
          i = r + 2,
          s = e[r],
          o = e[t],
          a = e[i]
        new $d(s, a).closestPoint(o).distance(o) <= n
          ? e.splice(t, 1)
          : (r += 1)
      }
      return this
    }
    toHull() {
      const t = this.points,
        e = t.length
      if (0 === e) return new Xd()
      let n = t[0]
      for (let r = 1; r < e; r += 1)
        (t[r].y < n.y || (t[r].y === n.y && t[r].x > n.x)) && (n = t[r])
      const r = []
      for (let i = 0; i < e; i += 1) {
        let e = n.theta(t[i])
        0 === e && (e = 360), r.push([t[i], i, e])
      }
      if (
        (r.sort((t, e) => {
          let n = t[2] - e[2]
          return 0 === n && (n = e[1] - t[1]), n
        }),
        r.length > 2)
      ) {
        const t = r[r.length - 1]
        r.unshift(t)
      }
      const i = {},
        s = [],
        o = (t) => `${t[0].toString()}@${t[1]}`
      for (; 0 !== r.length; ) {
        const t = r.pop(),
          e = t[0]
        if (i[o(t)]) continue
        let n = !1
        for (; !n; )
          if (s.length < 2) s.push(t), (n = !0)
          else {
            const a = s.pop(),
              l = a[0],
              c = s.pop(),
              h = c[0],
              u = h.cross(l, e)
            if (u < 0) s.push(c), s.push(a), s.push(t), (n = !0)
            else if (0 === u) {
              const t = 1e-10,
                n = l.angleBetween(h, e)
              Math.abs(n - 180) < t || l.equals(e) || h.equals(l)
                ? ((i[o(a)] = l), s.push(c))
                : Math.abs(((n + 1) % 360) - 1) < t && (s.push(c), r.push(a))
            } else (i[o(a)] = l), s.push(c)
          }
      }
      let a
      s.length > 2 && s.pop()
      let l = -1
      for (let t = 0, e = s.length; t < e; t += 1) {
        const e = s[t][1]
        ;(void 0 === a || e < a) && ((a = e), (l = t))
      }
      let c = []
      if (l > 0) {
        const t = s.slice(l),
          e = s.slice(0, l)
        c = t.concat(e)
      } else c = s
      const h = []
      for (let t = 0, e = c.length; t < e; t += 1) h.push(c[t][0])
      return new Xd(h)
    }
    equals(t) {
      return (
        null != t &&
        t.points.length === this.points.length &&
        t.points.every((t, e) => t.equals(this.points[e]))
      )
    }
    clone() {
      return new Xd(this.points.map((t) => t.clone()))
    }
    toJSON() {
      return this.points.map((t) => t.toJSON())
    }
    serialize() {
      return this.points.map((t) => `${t.serialize()}`).join(' ')
    }
  }
  !(function (t) {
    t.isPolyline = function (e) {
      return null != e && e instanceof t
    }
  })(Xd || (Xd = {})),
    (function (t) {
      t.parse = function (e) {
        const n = e.trim()
        if ('' === n) return new t()
        const r = [],
          i = n.split(/\s*,\s*|\s+/)
        for (let t = 0, e = i.length; t < e; t += 2)
          r.push({ x: +i[t], y: +i[t + 1] })
        return new t(r)
      }
    })(Xd || (Xd = {}))
  class Yd extends Dd {
    constructor(t, e, n, r) {
      super(),
        (this.PRECISION = 3),
        (this.start = Vd.create(t)),
        (this.controlPoint1 = Vd.create(e)),
        (this.controlPoint2 = Vd.create(n)),
        (this.end = Vd.create(r))
    }
    bbox() {
      const t = this.start,
        e = this.controlPoint1,
        n = this.controlPoint2,
        r = this.end,
        i = t.x,
        s = t.y,
        o = e.x,
        a = e.y,
        l = n.x,
        c = n.y,
        h = r.x,
        u = r.y,
        g = [],
        d = [[], []]
      let f, p, m, y, v, b, x, w, P, A, C
      for (let t = 0; t < 2; t += 1)
        if (
          (0 === t
            ? ((p = 6 * i - 12 * o + 6 * l),
              (f = -3 * i + 9 * o - 9 * l + 3 * h),
              (m = 3 * o - 3 * i))
            : ((p = 6 * s - 12 * a + 6 * c),
              (f = -3 * s + 9 * a - 9 * c + 3 * u),
              (m = 3 * a - 3 * s)),
          Math.abs(f) < 1e-12)
        ) {
          if (Math.abs(p) < 1e-12) continue
          ;(y = -m / p), y > 0 && y < 1 && g.push(y)
        } else
          (x = p * p - 4 * m * f),
            (w = Math.sqrt(x)),
            x < 0 ||
              ((v = (-p + w) / (2 * f)),
              v > 0 && v < 1 && g.push(v),
              (b = (-p - w) / (2 * f)),
              b > 0 && b < 1 && g.push(b))
      let O = g.length
      const E = O
      for (; O; )
        (O -= 1),
          (y = g[O]),
          (C = 1 - y),
          (P =
            C * C * C * i +
            3 * C * C * y * o +
            3 * C * y * y * l +
            y * y * y * h),
          (d[0][O] = P),
          (A =
            C * C * C * s +
            3 * C * C * y * a +
            3 * C * y * y * c +
            y * y * y * u),
          (d[1][O] = A)
      ;(g[E] = 0),
        (g[E + 1] = 1),
        (d[0][E] = i),
        (d[1][E] = s),
        (d[0][E + 1] = h),
        (d[1][E + 1] = u),
        (g.length = E + 2),
        (d[0].length = E + 2),
        (d[1].length = E + 2)
      const M = Math.min.apply(null, d[0]),
        S = Math.min.apply(null, d[1]),
        T = Math.max.apply(null, d[0]),
        j = Math.max.apply(null, d[1])
      return new zd(M, S, T - M, j - S)
    }
    closestPoint(t, e = {}) {
      return this.pointAtT(this.closestPointT(t, e))
    }
    closestPointLength(t, e = {}) {
      const n = this.getOptions(e)
      return this.lengthAtT(this.closestPointT(t, n), n)
    }
    closestPointNormalizedLength(t, e = {}) {
      const n = this.getOptions(e),
        r = this.closestPointLength(t, n)
      if (!r) return 0
      const i = this.length(n)
      return 0 === i ? 0 : r / i
    }
    closestPointT(t, e = {}) {
      const n = this.getPrecision(e),
        r = this.getDivisions(e),
        i = Math.pow(10, -n)
      let s = null,
        o = 0,
        a = 0,
        l = 0,
        c = 0,
        h = 0,
        u = null
      const g = r.length
      let d = g > 0 ? 1 / g : 0
      for (
        r.forEach((e, n) => {
          const r = e.start.distance(t),
            i = e.end.distance(t),
            g = r + i
          ;(null == u || g < u) &&
            ((s = e),
            (o = n * d),
            (a = (n + 1) * d),
            (l = r),
            (c = i),
            (u = g),
            (h = e.endpointDistance()))
        });
        ;

      ) {
        const e = l ? Math.abs(l - c) / l : 0,
          n = null != c ? Math.abs(l - c) / c : 0,
          r = !c || c < h * i,
          u = !l || l < h * i || r
        if (e < i || n < i || u) return l <= c ? o : a
        const g = s.divide(0.5)
        d /= 2
        const f = g[0].start.distance(t),
          p = g[0].end.distance(t),
          m = f + p,
          y = g[1].start.distance(t),
          v = g[1].end.distance(t)
        m <= y + v
          ? ((s = g[0]), (a -= d), (l = f), (c = p))
          : ((s = g[1]), (o += d), (l = y), (c = v))
      }
    }
    closestPointTangent(t, e = {}) {
      return this.tangentAtT(this.closestPointT(t, e))
    }
    containsPoint(t, e = {}) {
      return this.toPolyline(e).containsPoint(t)
    }
    divideAt(t, e = {}) {
      if (t <= 0) return this.divideAtT(0)
      if (t >= 1) return this.divideAtT(1)
      const n = this.tAt(t, e)
      return this.divideAtT(n)
    }
    divideAtLength(t, e = {}) {
      const n = this.tAtLength(t, e)
      return this.divideAtT(n)
    }
    divide(t) {
      return this.divideAtT(t)
    }
    divideAtT(t) {
      const e = this.start,
        n = this.controlPoint1,
        r = this.controlPoint2,
        i = this.end
      if (t <= 0) return [new Yd(e, e, e, e), new Yd(e, n, r, i)]
      if (t >= 1) return [new Yd(e, n, r, i), new Yd(i, i, i, i)]
      const s = this.getSkeletonPoints(t),
        o = s.startControlPoint1,
        a = s.startControlPoint2,
        l = s.divider,
        c = s.dividerControlPoint1,
        h = s.dividerControlPoint2
      return [new Yd(e, o, a, l), new Yd(l, c, h, i)]
    }
    endpointDistance() {
      return this.start.distance(this.end)
    }
    getSkeletonPoints(t) {
      const e = this.start,
        n = this.controlPoint1,
        r = this.controlPoint2,
        i = this.end
      if (t <= 0)
        return {
          startControlPoint1: e.clone(),
          startControlPoint2: e.clone(),
          divider: e.clone(),
          dividerControlPoint1: n.clone(),
          dividerControlPoint2: r.clone(),
        }
      if (t >= 1)
        return {
          startControlPoint1: n.clone(),
          startControlPoint2: r.clone(),
          divider: i.clone(),
          dividerControlPoint1: i.clone(),
          dividerControlPoint2: i.clone(),
        }
      const s = new $d(e, n).pointAt(t),
        o = new $d(n, r).pointAt(t),
        a = new $d(r, i).pointAt(t),
        l = new $d(s, o).pointAt(t),
        c = new $d(o, a).pointAt(t)
      return {
        startControlPoint1: s,
        startControlPoint2: l,
        divider: new $d(l, c).pointAt(t),
        dividerControlPoint1: c,
        dividerControlPoint2: a,
      }
    }
    getSubdivisions(t = {}) {
      const e = this.getPrecision(t)
      let n = [
        new Yd(this.start, this.controlPoint1, this.controlPoint2, this.end),
      ]
      if (0 === e) return n
      let r = this.endpointDistance()
      const i = Math.pow(10, -e)
      let s = 0
      for (;;) {
        s += 1
        const t = []
        n.forEach((e) => {
          const n = e.divide(0.5)
          t.push(n[0], n[1])
        })
        const e = t.reduce((t, e) => t + e.endpointDistance(), 0),
          o = 0 !== e ? (e - r) / e : 0
        if (s > 1 && o < i) return t
        ;(n = t), (r = e)
      }
    }
    length(t = {}) {
      return this.getDivisions(t).reduce((t, e) => t + e.endpointDistance(), 0)
    }
    lengthAtT(t, e = {}) {
      if (t <= 0) return 0
      const n = void 0 === e.precision ? this.PRECISION : e.precision
      return this.divide(t)[0].length({ precision: n })
    }
    pointAt(t, e = {}) {
      if (t <= 0) return this.start.clone()
      if (t >= 1) return this.end.clone()
      const n = this.tAt(t, e)
      return this.pointAtT(n)
    }
    pointAtLength(t, e = {}) {
      const n = this.tAtLength(t, e)
      return this.pointAtT(n)
    }
    pointAtT(t) {
      return t <= 0
        ? this.start.clone()
        : t >= 1
        ? this.end.clone()
        : this.getSkeletonPoints(t).divider
    }
    isDifferentiable() {
      const t = this.start,
        e = this.controlPoint1,
        n = this.controlPoint2,
        r = this.end
      return !(t.equals(e) && e.equals(n) && n.equals(r))
    }
    tangentAt(t, e = {}) {
      if (!this.isDifferentiable()) return null
      t < 0 ? (t = 0) : t > 1 && (t = 1)
      const n = this.tAt(t, e)
      return this.tangentAtT(n)
    }
    tangentAtLength(t, e = {}) {
      if (!this.isDifferentiable()) return null
      const n = this.tAtLength(t, e)
      return this.tangentAtT(n)
    }
    tangentAtT(t) {
      if (!this.isDifferentiable()) return null
      t < 0 && (t = 0), t > 1 && (t = 1)
      const e = this.getSkeletonPoints(t),
        n = e.startControlPoint2,
        r = e.dividerControlPoint1,
        i = e.divider,
        s = new $d(n, r)
      return s.translate(i.x - n.x, i.y - n.y), s
    }
    getPrecision(t = {}) {
      return null == t.precision ? this.PRECISION : t.precision
    }
    getDivisions(t = {}) {
      if (null != t.subdivisions) return t.subdivisions
      const e = this.getPrecision(t)
      return this.getSubdivisions({ precision: e })
    }
    getOptions(t = {}) {
      return {
        precision: this.getPrecision(t),
        subdivisions: this.getDivisions(t),
      }
    }
    tAt(t, e = {}) {
      if (t <= 0) return 0
      if (t >= 1) return 1
      const n = this.getOptions(e),
        r = this.length(n) * t
      return this.tAtLength(r, n)
    }
    tAtLength(t, e = {}) {
      let n = !0
      t < 0 && ((n = !1), (t = -t))
      const r = this.getPrecision(e),
        i = this.getDivisions(e),
        s = { precision: r, subdivisions: i }
      let o,
        a,
        l = null,
        c = 0,
        h = 0,
        u = 0
      const g = i.length
      let d = g > 0 ? 1 / g : 0
      for (let e = 0; e < g; e += 1) {
        const r = n ? e : g - 1 - e,
          s = i[e],
          f = s.endpointDistance()
        if (t <= u + f) {
          ;(l = s),
            (o = r * d),
            (a = (r + 1) * d),
            (c = n ? t - u : f + u - t),
            (h = n ? f + u - t : t - u)
          break
        }
        u += f
      }
      if (null == l) return n ? 1 : 0
      const f = this.length(s),
        p = Math.pow(10, -r)
      for (;;) {
        let t, e, n
        if (((t = 0 !== f ? c / f : 0), t < p)) return o
        if (((t = 0 !== f ? h / f : 0), t < p)) return a
        const r = l.divide(0.5)
        d /= 2
        const i = r[0].endpointDistance(),
          s = r[1].endpointDistance()
        c <= i
          ? ((l = r[0]), (a -= d), (e = c), (n = i - e))
          : ((l = r[1]), (o += d), (e = c - i), (n = s - e)),
          (c = e),
          (h = n)
      }
    }
    toPoints(t = {}) {
      const e = this.getDivisions(t),
        n = [e[0].start.clone()]
      return e.forEach((t) => n.push(t.end.clone())), n
    }
    toPolyline(t = {}) {
      return new Xd(this.toPoints(t))
    }
    scale(t, e, n) {
      return (
        this.start.scale(t, e, n),
        this.controlPoint1.scale(t, e, n),
        this.controlPoint2.scale(t, e, n),
        this.end.scale(t, e, n),
        this
      )
    }
    rotate(t, e) {
      return (
        this.start.rotate(t, e),
        this.controlPoint1.rotate(t, e),
        this.controlPoint2.rotate(t, e),
        this.end.rotate(t, e),
        this
      )
    }
    translate(t, e) {
      return (
        'number' == typeof t
          ? (this.start.translate(t, e),
            this.controlPoint1.translate(t, e),
            this.controlPoint2.translate(t, e),
            this.end.translate(t, e))
          : (this.start.translate(t),
            this.controlPoint1.translate(t),
            this.controlPoint2.translate(t),
            this.end.translate(t)),
        this
      )
    }
    equals(t) {
      return (
        null != t &&
        this.start.equals(t.start) &&
        this.controlPoint1.equals(t.controlPoint1) &&
        this.controlPoint2.equals(t.controlPoint2) &&
        this.end.equals(t.end)
      )
    }
    clone() {
      return new Yd(
        this.start,
        this.controlPoint1,
        this.controlPoint2,
        this.end,
      )
    }
    toJSON() {
      return {
        start: this.start.toJSON(),
        controlPoint1: this.controlPoint1.toJSON(),
        controlPoint2: this.controlPoint2.toJSON(),
        end: this.end.toJSON(),
      }
    }
    serialize() {
      return [
        this.start.serialize(),
        this.controlPoint1.serialize(),
        this.controlPoint2.serialize(),
        this.end.serialize(),
      ].join(' ')
    }
  }
  !(function (t) {
    t.isCurve = function (e) {
      return null != e && e instanceof t
    }
  })(Yd || (Yd = {})),
    (function (t) {
      function e(t) {
        const e = t.length,
          n = [],
          r = []
        let i = 2
        n[0] = t[0] / i
        for (let s = 1; s < e; s += 1)
          (r[s] = 1 / i),
            (i = (s < e - 1 ? 4 : 3.5) - r[s]),
            (n[s] = (t[s] - n[s - 1]) / i)
        for (let t = 1; t < e; t += 1) n[e - t - 1] -= r[e - t] * n[e - t]
        return n
      }
      t.throughPoints = function (n) {
        if (null == n || (Array.isArray(n) && n.length < 2))
          throw new Error('At least 2 points are required')
        const r = (function (t) {
            const n = t.map((t) => Vd.clone(t)),
              r = [],
              i = [],
              s = n.length - 1
            if (1 === s)
              return (
                (r[0] = new Vd(
                  (2 * n[0].x + n[1].x) / 3,
                  (2 * n[0].y + n[1].y) / 3,
                )),
                (i[0] = new Vd(2 * r[0].x - n[0].x, 2 * r[0].y - n[0].y)),
                [r, i]
              )
            const o = []
            for (let t = 1; t < s - 1; t += 1)
              o[t] = 4 * n[t].x + 2 * n[t + 1].x
            ;(o[0] = n[0].x + 2 * n[1].x),
              (o[s - 1] = (8 * n[s - 1].x + n[s].x) / 2)
            const a = e(o)
            for (let t = 1; t < s - 1; t += 1)
              o[t] = 4 * n[t].y + 2 * n[t + 1].y
            ;(o[0] = n[0].y + 2 * n[1].y),
              (o[s - 1] = (8 * n[s - 1].y + n[s].y) / 2)
            const l = e(o)
            for (let t = 0; t < s; t += 1)
              r.push(new Vd(a[t], l[t])),
                t < s - 1
                  ? i.push(
                      new Vd(
                        2 * n[t + 1].x - a[t + 1],
                        2 * n[t + 1].y - l[t + 1],
                      ),
                    )
                  : i.push(
                      new Vd((n[s].x + a[s - 1]) / 2, (n[s].y + l[s - 1]) / 2),
                    )
            return [r, i]
          })(n),
          i = []
        for (let e = 0, s = r[0].length; e < s; e += 1) {
          const s = new Vd(r[0][e].x, r[0][e].y),
            o = new Vd(r[1][e].x, r[1][e].y)
          i.push(new t(n[e], s, o, n[e + 1]))
        }
        return i
      }
    })(Yd || (Yd = {}))
  class Zd extends Dd {
    constructor() {
      super(...arguments),
        (this.isVisible = !0),
        (this.isSegment = !0),
        (this.isSubpathStart = !1)
    }
    get end() {
      return this.endPoint
    }
    get start() {
      if (null == this.previousSegment)
        throw new Error(
          'Missing previous segment. (This segment cannot be the first segment of a path, or segment has not yet been added to a path.)',
        )
      return this.previousSegment.end
    }
    closestPointT(t, e) {
      if (this.closestPointNormalizedLength)
        return this.closestPointNormalizedLength(t)
      throw new Error(
        'Neither `closestPointT` nor `closestPointNormalizedLength` method is implemented.',
      )
    }
    lengthAtT(t, e) {
      if (t <= 0) return 0
      const n = this.length()
      return t >= 1 ? n : n * t
    }
    divideAtT(t) {
      if (this.divideAt) return this.divideAt(t)
      throw new Error(
        'Neither `divideAtT` nor `divideAt` method is implemented.',
      )
    }
    pointAtT(t) {
      if (this.pointAt) return this.pointAt(t)
      throw new Error('Neither `pointAtT` nor `pointAt` method is implemented.')
    }
    tangentAtT(t) {
      if (this.tangentAt) return this.tangentAt(t)
      throw new Error(
        'Neither `tangentAtT` nor `tangentAt` method is implemented.',
      )
    }
  }
  class Kd extends Zd {
    constructor(t, e) {
      super(),
        $d.isLine(t)
          ? (this.endPoint = t.end.clone().round(2))
          : (this.endPoint = Vd.create(t, e).round(2))
    }
    get type() {
      return 'L'
    }
    get line() {
      return new $d(this.start, this.end)
    }
    bbox() {
      return this.line.bbox()
    }
    closestPoint(t) {
      return this.line.closestPoint(t)
    }
    closestPointLength(t) {
      return this.line.closestPointLength(t)
    }
    closestPointNormalizedLength(t) {
      return this.line.closestPointNormalizedLength(t)
    }
    closestPointTangent(t) {
      return this.line.closestPointTangent(t)
    }
    length() {
      return this.line.length()
    }
    divideAt(t) {
      const e = this.line.divideAt(t)
      return [new Kd(e[0]), new Kd(e[1])]
    }
    divideAtLength(t) {
      const e = this.line.divideAtLength(t)
      return [new Kd(e[0]), new Kd(e[1])]
    }
    getSubdivisions() {
      return []
    }
    pointAt(t) {
      return this.line.pointAt(t)
    }
    pointAtLength(t) {
      return this.line.pointAtLength(t)
    }
    tangentAt(t) {
      return this.line.tangentAt(t)
    }
    tangentAtLength(t) {
      return this.line.tangentAtLength(t)
    }
    isDifferentiable() {
      return null != this.previousSegment && !this.start.equals(this.end)
    }
    clone() {
      return new Kd(this.end)
    }
    scale(t, e, n) {
      return this.end.scale(t, e, n), this
    }
    rotate(t, e) {
      return this.end.rotate(t, e), this
    }
    translate(t, e) {
      return (
        'number' == typeof t ? this.end.translate(t, e) : this.end.translate(t),
        this
      )
    }
    equals(t) {
      return (
        this.type === t.type &&
        this.start.equals(t.start) &&
        this.end.equals(t.end)
      )
    }
    toJSON() {
      return {
        type: this.type,
        start: this.start.toJSON(),
        end: this.end.toJSON(),
      }
    }
    serialize() {
      const t = this.end
      return `${this.type} ${t.x} ${t.y}`
    }
  }
  !(function (t) {
    t.create = function (...e) {
      const n = e.length,
        r = e[0]
      if ($d.isLine(r)) return new t(r)
      if (Vd.isPointLike(r)) return 1 === n ? new t(r) : e.map((e) => new t(e))
      if (2 === n) return new t(+e[0], +e[1])
      const i = []
      for (let r = 0; r < n; r += 2) {
        const n = +e[r],
          s = +e[r + 1]
        i.push(new t(n, s))
      }
      return i
    }
  })(Kd || (Kd = {}))
  class Qd extends Zd {
    get end() {
      if (!this.subpathStartSegment)
        throw new Error(
          'Missing subpath start segment. (This segment needs a subpath start segment (e.g. MoveTo), or segment has not yet been added to a path.)',
        )
      return this.subpathStartSegment.end
    }
    get type() {
      return 'Z'
    }
    get line() {
      return new $d(this.start, this.end)
    }
    bbox() {
      return this.line.bbox()
    }
    closestPoint(t) {
      return this.line.closestPoint(t)
    }
    closestPointLength(t) {
      return this.line.closestPointLength(t)
    }
    closestPointNormalizedLength(t) {
      return this.line.closestPointNormalizedLength(t)
    }
    closestPointTangent(t) {
      return this.line.closestPointTangent(t)
    }
    length() {
      return this.line.length()
    }
    divideAt(t) {
      const e = this.line.divideAt(t)
      return [
        e[1].isDifferentiable() ? new Kd(e[0]) : this.clone(),
        new Kd(e[1]),
      ]
    }
    divideAtLength(t) {
      const e = this.line.divideAtLength(t)
      return [
        e[1].isDifferentiable() ? new Kd(e[0]) : this.clone(),
        new Kd(e[1]),
      ]
    }
    getSubdivisions() {
      return []
    }
    pointAt(t) {
      return this.line.pointAt(t)
    }
    pointAtLength(t) {
      return this.line.pointAtLength(t)
    }
    tangentAt(t) {
      return this.line.tangentAt(t)
    }
    tangentAtLength(t) {
      return this.line.tangentAtLength(t)
    }
    isDifferentiable() {
      return (
        !(!this.previousSegment || !this.subpathStartSegment) &&
        !this.start.equals(this.end)
      )
    }
    scale() {
      return this
    }
    rotate() {
      return this
    }
    translate() {
      return this
    }
    equals(t) {
      return (
        this.type === t.type &&
        this.start.equals(t.start) &&
        this.end.equals(t.end)
      )
    }
    clone() {
      return new Qd()
    }
    toJSON() {
      return {
        type: this.type,
        start: this.start.toJSON(),
        end: this.end.toJSON(),
      }
    }
    serialize() {
      return this.type
    }
  }
  !(function (t) {
    t.create = function () {
      return new t()
    }
  })(Qd || (Qd = {}))
  class tf extends Zd {
    constructor(t, e) {
      super(),
        (this.isVisible = !1),
        (this.isSubpathStart = !0),
        $d.isLine(t) || Yd.isCurve(t)
          ? (this.endPoint = t.end.clone().round(2))
          : (this.endPoint = Vd.create(t, e).round(2))
    }
    get start() {
      throw new Error(
        'Illegal access. Moveto segments should not need a start property.',
      )
    }
    get type() {
      return 'M'
    }
    bbox() {
      return null
    }
    closestPoint() {
      return this.end.clone()
    }
    closestPointLength() {
      return 0
    }
    closestPointNormalizedLength() {
      return 0
    }
    closestPointT() {
      return 1
    }
    closestPointTangent() {
      return null
    }
    length() {
      return 0
    }
    lengthAtT() {
      return 0
    }
    divideAt() {
      return [this.clone(), this.clone()]
    }
    divideAtLength() {
      return [this.clone(), this.clone()]
    }
    getSubdivisions() {
      return []
    }
    pointAt() {
      return this.end.clone()
    }
    pointAtLength() {
      return this.end.clone()
    }
    pointAtT() {
      return this.end.clone()
    }
    tangentAt() {
      return null
    }
    tangentAtLength() {
      return null
    }
    tangentAtT() {
      return null
    }
    isDifferentiable() {
      return !1
    }
    scale(t, e, n) {
      return this.end.scale(t, e, n), this
    }
    rotate(t, e) {
      return this.end.rotate(t, e), this
    }
    translate(t, e) {
      return (
        'number' == typeof t ? this.end.translate(t, e) : this.end.translate(t),
        this
      )
    }
    clone() {
      return new tf(this.end)
    }
    equals(t) {
      return this.type === t.type && this.end.equals(t.end)
    }
    toJSON() {
      return { type: this.type, end: this.end.toJSON() }
    }
    serialize() {
      const t = this.end
      return `${this.type} ${t.x} ${t.y}`
    }
  }
  !(function (t) {
    t.create = function (...e) {
      const n = e.length,
        r = e[0]
      if ($d.isLine(r)) return new t(r)
      if (Yd.isCurve(r)) return new t(r)
      if (Vd.isPointLike(r)) {
        if (1 === n) return new t(r)
        const i = []
        for (let r = 0; r < n; r += 1)
          0 === r ? i.push(new t(e[r])) : i.push(new Kd(e[r]))
        return i
      }
      if (2 === n) return new t(+e[0], +e[1])
      const i = []
      for (let r = 0; r < n; r += 2) {
        const n = +e[r],
          s = +e[r + 1]
        0 === r ? i.push(new t(n, s)) : i.push(new Kd(n, s))
      }
      return i
    }
  })(tf || (tf = {}))
  class ef extends Zd {
    constructor(t, e, n, r, i, s) {
      super(),
        Yd.isCurve(t)
          ? ((this.controlPoint1 = t.controlPoint1.clone().round(2)),
            (this.controlPoint2 = t.controlPoint2.clone().round(2)),
            (this.endPoint = t.end.clone().round(2)))
          : 'number' == typeof t
          ? ((this.controlPoint1 = new Vd(t, e).round(2)),
            (this.controlPoint2 = new Vd(n, r).round(2)),
            (this.endPoint = new Vd(i, s).round(2)))
          : ((this.controlPoint1 = Vd.create(t).round(2)),
            (this.controlPoint2 = Vd.create(e).round(2)),
            (this.endPoint = Vd.create(n).round(2)))
    }
    get type() {
      return 'C'
    }
    get curve() {
      return new Yd(
        this.start,
        this.controlPoint1,
        this.controlPoint2,
        this.end,
      )
    }
    bbox() {
      return this.curve.bbox()
    }
    closestPoint(t) {
      return this.curve.closestPoint(t)
    }
    closestPointLength(t) {
      return this.curve.closestPointLength(t)
    }
    closestPointNormalizedLength(t) {
      return this.curve.closestPointNormalizedLength(t)
    }
    closestPointTangent(t) {
      return this.curve.closestPointTangent(t)
    }
    length() {
      return this.curve.length()
    }
    divideAt(t, e = {}) {
      const n = this.curve.divideAt(t, e)
      return [new ef(n[0]), new ef(n[1])]
    }
    divideAtLength(t, e = {}) {
      const n = this.curve.divideAtLength(t, e)
      return [new ef(n[0]), new ef(n[1])]
    }
    divideAtT(t) {
      const e = this.curve.divideAtT(t)
      return [new ef(e[0]), new ef(e[1])]
    }
    getSubdivisions() {
      return []
    }
    pointAt(t) {
      return this.curve.pointAt(t)
    }
    pointAtLength(t) {
      return this.curve.pointAtLength(t)
    }
    tangentAt(t) {
      return this.curve.tangentAt(t)
    }
    tangentAtLength(t) {
      return this.curve.tangentAtLength(t)
    }
    isDifferentiable() {
      if (!this.previousSegment) return !1
      const t = this.start,
        e = this.controlPoint1,
        n = this.controlPoint2,
        r = this.end
      return !(t.equals(e) && e.equals(n) && n.equals(r))
    }
    scale(t, e, n) {
      return (
        this.controlPoint1.scale(t, e, n),
        this.controlPoint2.scale(t, e, n),
        this.end.scale(t, e, n),
        this
      )
    }
    rotate(t, e) {
      return (
        this.controlPoint1.rotate(t, e),
        this.controlPoint2.rotate(t, e),
        this.end.rotate(t, e),
        this
      )
    }
    translate(t, e) {
      return (
        'number' == typeof t
          ? (this.controlPoint1.translate(t, e),
            this.controlPoint2.translate(t, e),
            this.end.translate(t, e))
          : (this.controlPoint1.translate(t),
            this.controlPoint2.translate(t),
            this.end.translate(t)),
        this
      )
    }
    equals(t) {
      return (
        this.start.equals(t.start) &&
        this.end.equals(t.end) &&
        this.controlPoint1.equals(t.controlPoint1) &&
        this.controlPoint2.equals(t.controlPoint2)
      )
    }
    clone() {
      return new ef(this.controlPoint1, this.controlPoint2, this.end)
    }
    toJSON() {
      return {
        type: this.type,
        start: this.start.toJSON(),
        controlPoint1: this.controlPoint1.toJSON(),
        controlPoint2: this.controlPoint2.toJSON(),
        end: this.end.toJSON(),
      }
    }
    serialize() {
      const t = this.controlPoint1,
        e = this.controlPoint2,
        n = this.end
      return [this.type, t.x, t.y, e.x, e.y, n.x, n.y].join(' ')
    }
  }
  function nf(t, e, n) {
    return {
      x: t * Math.cos(n) - e * Math.sin(n),
      y: t * Math.sin(n) + e * Math.cos(n),
    }
  }
  function rf(t, e, n, r, i, s) {
    const o = 1 / 3,
      a = 2 / 3
    return [o * t + a * n, o * e + a * r, o * i + a * n, o * s + a * r, i, s]
  }
  function sf(t, e, n, r, i, s, o, a, l, c) {
    const h = (120 * Math.PI) / 180,
      u = (Math.PI / 180) * (+i || 0)
    let g,
      d,
      f,
      p,
      m,
      y = []
    if (c) (d = c[0]), (f = c[1]), (p = c[2]), (m = c[3])
    else {
      ;(g = nf(t, e, -u)), (t = g.x), (e = g.y), (g = nf(a, l, -u))
      const i = (t - (a = g.x)) / 2,
        c = (e - (l = g.y)) / 2
      let h = (i * i) / (n * n) + (c * c) / (r * r)
      h > 1 && ((h = Math.sqrt(h)), (n *= h), (r *= h))
      const y = n * n,
        v = r * r,
        b =
          (s === o ? -1 : 1) *
          Math.sqrt(
            Math.abs((y * v - y * c * c - v * i * i) / (y * c * c + v * i * i)),
          )
      ;(p = (b * n * c) / r + (t + a) / 2),
        (m = (b * -r * i) / n + (e + l) / 2),
        (d = Math.asin((e - m) / r)),
        (f = Math.asin((l - m) / r)),
        (d = t < p ? Math.PI - d : d),
        (f = a < p ? Math.PI - f : f),
        d < 0 && (d = 2 * Math.PI + d),
        f < 0 && (f = 2 * Math.PI + f),
        o && d > f && (d -= 2 * Math.PI),
        !o && f > d && (f -= 2 * Math.PI)
    }
    let v = f - d
    if (Math.abs(v) > h) {
      const t = f,
        e = a,
        s = l
      ;(f = d + h * (o && f > d ? 1 : -1)),
        (y = sf(
          (a = p + n * Math.cos(f)),
          (l = m + r * Math.sin(f)),
          n,
          r,
          i,
          0,
          o,
          e,
          s,
          [f, t, p, m],
        ))
    }
    v = f - d
    const b = Math.cos(d),
      x = Math.sin(d),
      w = Math.cos(f),
      P = Math.sin(f),
      A = Math.tan(v / 4),
      C = (4 / 3) * (n * A),
      O = (4 / 3) * (r * A),
      E = [t, e],
      M = [t + C * x, e - O * b],
      S = [a + C * P, l - O * w],
      T = [a, l]
    if (((M[0] = 2 * E[0] - M[0]), (M[1] = 2 * E[1] - M[1]), c))
      return [M, S, T].concat(y)
    {
      y = [M, S, T].concat(y).join().split(',')
      const t = [],
        e = y.length
      for (let n = 0; n < e; n += 1)
        t[n] = n % 2 ? nf(+y[n - 1], +y[n], u).y : nf(+y[n], +y[n + 1], u).x
      return t
    }
  }
  function of(t) {
    const e = (function (t) {
      if (!t) return null
      const e = '\t\n\v\f\r   ᠎             　\u2028\u2029',
        n = new RegExp(
          `([a-z])[${e},]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[${e}]*,?[${e}]*)+)`,
          'ig',
        ),
        r = new RegExp(
          `(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[${e}]*,?[${e}]*`,
          'ig',
        ),
        i = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
        s = []
      return (
        t.replace(n, (t, e, n) => {
          const o = []
          let a = e.toLowerCase()
          n.replace(r, (t, e) => (e && o.push(+e), t)),
            'm' === a &&
              o.length > 2 &&
              (s.push([e, ...o.splice(0, 2)]),
              (a = 'l'),
              (e = 'm' === e ? 'l' : 'L'))
          const l = i[a]
          for (; o.length >= l && (s.push([e, ...o.splice(0, l)]), l); );
          return t
        }),
        s
      )
    })(t)
    if (!e || !e.length) return [['M', 0, 0]]
    let n = 0,
      r = 0,
      i = 0,
      s = 0
    const o = []
    for (let t = 0, a = e.length; t < a; t += 1) {
      const a = []
      o.push(a)
      const l = e[t],
        c = l[0]
      if (c !== c.toUpperCase())
        switch (((a[0] = c.toUpperCase()), a[0])) {
          case 'A':
            ;(a[1] = l[1]),
              (a[2] = l[2]),
              (a[3] = l[3]),
              (a[4] = l[4]),
              (a[5] = l[5]),
              (a[6] = +l[6] + n),
              (a[7] = +l[7] + r)
            break
          case 'V':
            a[1] = +l[1] + r
            break
          case 'H':
            a[1] = +l[1] + n
            break
          case 'M':
            ;(i = +l[1] + n), (s = +l[2] + r)
            for (let t = 1, e = l.length; t < e; t += 1)
              a[t] = +l[t] + (t % 2 ? n : r)
            break
          default:
            for (let t = 1, e = l.length; t < e; t += 1)
              a[t] = +l[t] + (t % 2 ? n : r)
        }
      else for (let t = 0, e = l.length; t < e; t += 1) a[t] = l[t]
      switch (a[0]) {
        case 'Z':
          ;(n = +i), (r = +s)
          break
        case 'H':
          n = a[1]
          break
        case 'V':
          r = a[1]
          break
        case 'M':
          ;(i = a[a.length - 2]),
            (s = a[a.length - 1]),
            (n = a[a.length - 2]),
            (r = a[a.length - 1])
          break
        default:
          ;(n = a[a.length - 2]), (r = a[a.length - 1])
      }
    }
    return o
  }
  function af(t) {
    const e = of(t),
      n = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }
    function r(t, e, n) {
      let r, i
      if (!t) return ['C', e.x, e.y, e.x, e.y, e.x, e.y]
      switch (
        (t[0] in { T: 1, Q: 1 } || ((e.qx = null), (e.qy = null)), t[0])
      ) {
        case 'M':
          ;(e.X = t[1]), (e.Y = t[2])
          break
        case 'A':
          return 0 === parseFloat(t[1]) || 0 === parseFloat(t[2])
            ? ['L', t[6], t[7]]
            : ['C'].concat(sf.apply(0, [e.x, e.y].concat(t.slice(1))))
        case 'S':
          return (
            'C' === n || 'S' === n
              ? ((r = 2 * e.x - e.bx), (i = 2 * e.y - e.by))
              : ((r = e.x), (i = e.y)),
            ['C', r, i].concat(t.slice(1))
          )
        case 'T':
          return (
            'Q' === n || 'T' === n
              ? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
              : ((e.qx = e.x), (e.qy = e.y)),
            ['C'].concat(rf(e.x, e.y, e.qx, e.qy, t[1], t[2]))
          )
        case 'Q':
          return (
            (e.qx = t[1]),
            (e.qy = t[2]),
            ['C'].concat(rf(e.x, e.y, t[1], t[2], t[3], t[4]))
          )
        case 'H':
          return ['L'].concat(t[1], e.y)
        case 'V':
          return ['L'].concat(e.x, t[1])
      }
      return t
    }
    function i(t, n) {
      if (t[n].length > 7) {
        t[n].shift()
        const r = t[n]
        for (; r.length; )
          (s[n] = 'A'), (n += 1), t.splice(n, 0, ['C'].concat(r.splice(0, 6)))
        t.splice(n, 1), (a = e.length)
      }
    }
    const s = []
    let o = '',
      a = e.length
    for (let t = 0; t < a; t += 1) {
      let a = ''
      e[t] && (a = e[t][0]),
        'C' !== a && ((s[t] = a), t > 0 && (o = s[t - 1])),
        (e[t] = r(e[t], n, o)),
        'A' !== s[t] && 'C' === a && (s[t] = 'C'),
        i(e, t)
      const l = e[t],
        c = l.length
      ;(n.x = l[c - 2]),
        (n.y = l[c - 1]),
        (n.bx = parseFloat(l[c - 4]) || n.x),
        (n.by = parseFloat(l[c - 3]) || n.y)
    }
    return (e[0][0] && 'M' === e[0][0]) || e.unshift(['M', 0, 0]), e
  }
  function lf(t) {
    return af(t)
      .map((t) => t.map((t) => ('string' == typeof t ? t : Rd.round(t, 2))))
      .join(',')
      .split(',')
      .join(' ')
  }
  !(function (t) {
    t.create = function (...e) {
      const n = e.length,
        r = e[0]
      if (Yd.isCurve(r)) return new t(r)
      if (Vd.isPointLike(r)) {
        if (3 === n) return new t(e[0], e[1], e[2])
        const r = []
        for (let i = 0; i < n; i += 3) r.push(new t(e[i], e[i + 1], e[i + 2]))
        return r
      }
      if (6 === n) return new t(e[0], e[1], e[2], e[3], e[4], e[5])
      const i = []
      for (let r = 0; r < n; r += 6)
        i.push(new t(e[r], e[r + 1], e[r + 2], e[r + 3], e[r + 4], e[r + 5]))
      return i
    }
  })(ef || (ef = {}))
  class cf extends Dd {
    constructor(t) {
      if (
        (super(), (this.PRECISION = 3), (this.segments = []), Array.isArray(t))
      )
        if ($d.isLine(t[0]) || Yd.isCurve(t[0])) {
          let e = null
          t.forEach((t, n) => {
            0 === n && this.appendSegment(cf.createSegment('M', t.start)),
              null == e ||
                e.end.equals(t.start) ||
                this.appendSegment(cf.createSegment('M', t.start)),
              $d.isLine(t)
                ? this.appendSegment(cf.createSegment('L', t.end))
                : Yd.isCurve(t) &&
                  this.appendSegment(
                    cf.createSegment(
                      'C',
                      t.controlPoint1,
                      t.controlPoint2,
                      t.end,
                    ),
                  ),
              (e = t)
          })
        } else {
          t.forEach((t) => {
            t.isSegment && this.appendSegment(t)
          })
        }
      else
        null != t &&
          ($d.isLine(t)
            ? (this.appendSegment(cf.createSegment('M', t.start)),
              this.appendSegment(cf.createSegment('L', t.end)))
            : Yd.isCurve(t)
            ? (this.appendSegment(cf.createSegment('M', t.start)),
              this.appendSegment(
                cf.createSegment('C', t.controlPoint1, t.controlPoint2, t.end),
              ))
            : Xd.isPolyline(t)
            ? t.points &&
              t.points.length &&
              t.points.forEach((t, e) => {
                const n =
                  0 === e ? cf.createSegment('M', t) : cf.createSegment('L', t)
                this.appendSegment(n)
              })
            : t.isSegment && this.appendSegment(t))
    }
    get start() {
      const t = this.segments,
        e = t.length
      if (0 === e) return null
      for (let n = 0; n < e; n += 1) {
        const e = t[n]
        if (e.isVisible) return e.start
      }
      return t[e - 1].end
    }
    get end() {
      const t = this.segments,
        e = t.length
      if (0 === e) return null
      for (let n = e - 1; n >= 0; n -= 1) {
        const e = t[n]
        if (e.isVisible) return e.end
      }
      return t[e - 1].end
    }
    moveTo(...t) {
      return this.appendSegment(tf.create.call(null, ...t))
    }
    lineTo(...t) {
      return this.appendSegment(Kd.create.call(null, ...t))
    }
    curveTo(...t) {
      return this.appendSegment(ef.create.call(null, ...t))
    }
    arcTo(t, e, n, r, i, s, o) {
      const a = this.end || new Vd(),
        l =
          'number' == typeof s
            ? Ud(a.x, a.y, t, e, n, r, i, s, o)
            : Ud(a.x, a.y, t, e, n, r, i, s.x, s.y)
      if (null != l)
        for (let t = 0, e = l.length; t < e; t += 6)
          this.curveTo(l[t], l[t + 1], l[t + 2], l[t + 3], l[t + 4], l[t + 5])
      return this
    }
    quadTo(t, e, n, r) {
      const i = this.end || new Vd(),
        s = ['M', i.x, i.y]
      if ('number' == typeof t) s.push('Q', t, e, n, r)
      else {
        const n = e
        s.push('Q', t.x, t.y, n.x, n.y)
      }
      const o = cf.parse(s.join(' '))
      return this.appendSegment(o.segments.slice(1)), this
    }
    close() {
      return this.appendSegment(Qd.create())
    }
    drawPoints(t, e = {}) {
      const n = Hd(t, e),
        r = cf.parse(n)
      r && r.segments && this.appendSegment(r.segments)
    }
    bbox() {
      const t = this.segments,
        e = t.length
      if (0 === e) return null
      let n
      for (let r = 0; r < e; r += 1) {
        const e = t[r]
        if (e.isVisible) {
          const t = e.bbox()
          null != t && (n = n ? n.union(t) : t)
        }
      }
      if (null != n) return n
      const r = t[e - 1]
      return new zd(r.end.x, r.end.y, 0, 0)
    }
    appendSegment(t) {
      const e = this.segments.length
      let n,
        r = 0 !== e ? this.segments[e - 1] : null
      if (Array.isArray(t))
        for (let e = 0, i = t.length; e < i; e += 1) {
          const i = t[e]
          ;(n = this.prepareSegment(i, r, null)), this.segments.push(n), (r = n)
        }
      else
        null != t &&
          t.isSegment &&
          ((n = this.prepareSegment(t, r, null)), this.segments.push(n))
      return this
    }
    insertSegment(t, e) {
      const n = this.segments.length
      if ((t < 0 && (t = n + t + 1), t > n || t < 0))
        throw new Error('Index out of range.')
      let r,
        i = null,
        s = null
      if (
        (0 !== n &&
          (t >= 1
            ? ((i = this.segments[t - 1]), (s = i.nextSegment))
            : ((i = null), (s = this.segments[0]))),
        Array.isArray(e))
      )
        for (let n = 0, o = e.length; n < o; n += 1) {
          const o = e[n]
          ;(r = this.prepareSegment(o, i, s)),
            this.segments.splice(t + n, 0, r),
            (i = r)
        }
      else (r = this.prepareSegment(e, i, s)), this.segments.splice(t, 0, r)
      return this
    }
    removeSegment(t) {
      const e = this.fixIndex(t),
        n = this.segments.splice(e, 1)[0],
        r = n.previousSegment,
        i = n.nextSegment
      return (
        r && (r.nextSegment = i),
        i && (i.previousSegment = r),
        n.isSubpathStart && i && this.updateSubpathStartSegment(i),
        n
      )
    }
    replaceSegment(t, e) {
      const n = this.fixIndex(t)
      let r
      const i = this.segments[n]
      let s = i.previousSegment
      const o = i.nextSegment
      let a = i.isSubpathStart
      if (Array.isArray(e)) {
        this.segments.splice(t, 1)
        for (let n = 0, i = e.length; n < i; n += 1) {
          const i = e[n]
          ;(r = this.prepareSegment(i, s, o)),
            this.segments.splice(t + n, 0, r),
            (s = r),
            a && r.isSubpathStart && (a = !1)
        }
      } else (r = this.prepareSegment(e, s, o)), this.segments.splice(n, 1, r), a && r.isSubpathStart && (a = !1)
      a && o && this.updateSubpathStartSegment(o)
    }
    getSegment(t) {
      const e = this.fixIndex(t)
      return this.segments[e]
    }
    fixIndex(t) {
      const e = this.segments.length
      if (0 === e) throw new Error('Path has no segments.')
      let n = t
      for (; n < 0; ) n = e + n
      if (n >= e || n < 0) throw new Error('Index out of range.')
      return n
    }
    segmentAt(t, e = {}) {
      const n = this.segmentIndexAt(t, e)
      return n ? this.getSegment(n) : null
    }
    segmentAtLength(t, e = {}) {
      const n = this.segmentIndexAtLength(t, e)
      return n ? this.getSegment(n) : null
    }
    segmentIndexAt(t, e = {}) {
      if (0 === this.segments.length) return null
      const n = Rd.clamp(t, 0, 1),
        r = this.getOptions(e),
        i = this.length(r) * n
      return this.segmentIndexAtLength(i, r)
    }
    segmentIndexAtLength(t, e = {}) {
      const n = this.segments.length
      if (0 === n) return null
      let r = !0
      t < 0 && ((r = !1), (t = -t))
      const i = this.getPrecision(e),
        s = this.getSubdivisions(e)
      let o = 0,
        a = null
      for (let e = 0; e < n; e += 1) {
        const l = r ? e : n - 1 - e,
          c = this.segments[l],
          h = s[l],
          u = c.length({ precision: i, subdivisions: h })
        if (c.isVisible) {
          if (t <= o + u) return l
          a = l
        }
        o += u
      }
      return a
    }
    getSegmentSubdivisions(t = {}) {
      const e = this.getPrecision(t),
        n = []
      for (let t = 0, r = this.segments.length; t < r; t += 1) {
        const r = this.segments[t].getSubdivisions({ precision: e })
        n.push(r)
      }
      return n
    }
    updateSubpathStartSegment(t) {
      let e = t.previousSegment,
        n = t
      for (; n && !n.isSubpathStart; )
        (n.subpathStartSegment = null != e ? e.subpathStartSegment : null),
          (e = n),
          (n = n.nextSegment)
    }
    prepareSegment(t, e, n) {
      ;(t.previousSegment = e),
        (t.nextSegment = n),
        null != e && (e.nextSegment = t),
        null != n && (n.previousSegment = t)
      let r = t
      return (
        t.isSubpathStart && ((t.subpathStartSegment = t), (r = n)),
        null != r && this.updateSubpathStartSegment(r),
        t
      )
    }
    closestPoint(t, e = {}) {
      const n = this.closestPointT(t, e)
      return n ? this.pointAtT(n) : null
    }
    closestPointLength(t, e = {}) {
      const n = this.getOptions(e),
        r = this.closestPointT(t, n)
      return r ? this.lengthAtT(r, n) : 0
    }
    closestPointNormalizedLength(t, e = {}) {
      const n = this.getOptions(e),
        r = this.closestPointLength(t, n)
      if (0 === r) return 0
      const i = this.length(n)
      return 0 === i ? 0 : r / i
    }
    closestPointT(t, e = {}) {
      if (0 === this.segments.length) return null
      const n = this.getPrecision(e),
        r = this.getSubdivisions(e)
      let i,
        s = 1 / 0
      for (let e = 0, o = this.segments.length; e < o; e += 1) {
        const o = this.segments[e],
          a = r[e]
        if (o.isVisible) {
          const r = o.closestPointT(t, { precision: n, subdivisions: a }),
            l = o.pointAtT(r),
            c = Rd.squaredLength(l, t)
          c < s && ((i = { segmentIndex: e, value: r }), (s = c))
        }
      }
      return i || { segmentIndex: this.segments.length - 1, value: 1 }
    }
    closestPointTangent(t, e = {}) {
      if (0 === this.segments.length) return null
      const n = this.getPrecision(e),
        r = this.getSubdivisions(e)
      let i,
        s = 1 / 0
      for (let e = 0, o = this.segments.length; e < o; e += 1) {
        const o = this.segments[e],
          a = r[e]
        if (o.isDifferentiable()) {
          const e = o.closestPointT(t, { precision: n, subdivisions: a }),
            r = o.pointAtT(e),
            l = Rd.squaredLength(r, t)
          l < s && ((i = o.tangentAtT(e)), (s = l))
        }
      }
      return i || null
    }
    containsPoint(t, e = {}) {
      const n = this.toPolylines(e)
      if (!n) return !1
      let r = 0
      for (let e = 0, i = n.length; e < i; e += 1) {
        n[e].containsPoint(t) && (r += 1)
      }
      return r % 2 == 1
    }
    pointAt(t, e = {}) {
      if (0 === this.segments.length) return null
      if (t <= 0) return this.start.clone()
      if (t >= 1) return this.end.clone()
      const n = this.getOptions(e),
        r = this.length(n) * t
      return this.pointAtLength(r, n)
    }
    pointAtLength(t, e = {}) {
      if (0 === this.segments.length) return null
      if (0 === t) return this.start.clone()
      let n = !0
      t < 0 && ((n = !1), (t = -t))
      const r = this.getPrecision(e),
        i = this.getSubdivisions(e)
      let s,
        o = 0
      for (let e = 0, a = this.segments.length; e < a; e += 1) {
        const l = n ? e : a - 1 - e,
          c = this.segments[l],
          h = i[l],
          u = c.length({ precision: r, subdivisions: h })
        if (c.isVisible) {
          if (t <= o + u)
            return c.pointAtLength((n ? 1 : -1) * (t - o), {
              precision: r,
              subdivisions: h,
            })
          s = c
        }
        o += u
      }
      if (s) return n ? s.end : s.start
      return this.segments[this.segments.length - 1].end.clone()
    }
    pointAtT(t) {
      const e = this.segments,
        n = e.length
      if (0 === n) return null
      const r = t.segmentIndex
      if (r < 0) return e[0].pointAtT(0)
      if (r >= n) return e[n - 1].pointAtT(1)
      const i = Rd.clamp(t.value, 0, 1)
      return e[r].pointAtT(i)
    }
    divideAt(t, e = {}) {
      if (0 === this.segments.length) return null
      const n = Rd.clamp(t, 0, 1),
        r = this.getOptions(e),
        i = this.length(r) * n
      return this.divideAtLength(i, r)
    }
    divideAtLength(t, e = {}) {
      if (0 === this.segments.length) return null
      let n = !0
      t < 0 && ((n = !1), (t = -t))
      const r = this.getPrecision(e),
        i = this.getSubdivisions(e)
      let s,
        o,
        a,
        l,
        c,
        h = 0
      for (let e = 0, c = this.segments.length; e < c; e += 1) {
        const u = n ? e : c - 1 - e,
          g = this.getSegment(u),
          d = { precision: r, subdivisions: i[u] },
          f = g.length(d)
        if (g.isDifferentiable() && ((a = g), (l = u), t <= h + f)) {
          ;(o = u), (s = g.divideAtLength((n ? 1 : -1) * (t - h), d))
          break
        }
        h += f
      }
      if (!a) return null
      s || ((o = l), (c = n ? 1 : 0), (s = a.divideAtT(c)))
      const u = this.clone(),
        g = o
      u.replaceSegment(g, s)
      const d = g
      let f = g + 1,
        p = g + 2
      s[0].isDifferentiable() || (u.removeSegment(d), (f -= 1), (p -= 1))
      const m = u.getSegment(f).start
      u.insertSegment(f, cf.createSegment('M', m)),
        (p += 1),
        s[1].isDifferentiable() || (u.removeSegment(p - 1), (p -= 1))
      const y = p - d - 1
      for (let t = p, e = u.segments.length; t < e; t += 1) {
        const e = this.getSegment(t - y),
          n = u.getSegment(t)
        if (
          'Z' === n.type &&
          !e.subpathStartSegment.end.equals(n.subpathStartSegment.end)
        ) {
          const n = cf.createSegment('L', e.end)
          u.replaceSegment(t, n)
        }
      }
      return [new cf(u.segments.slice(0, f)), new cf(u.segments.slice(f))]
    }
    intersectsWithLine(t, e = {}) {
      const n = this.toPolylines(e)
      if (null == n) return null
      let r = null
      for (let e = 0, i = n.length; e < i; e += 1) {
        const i = n[e],
          s = t.intersect(i)
        s &&
          (null == r && (r = []), Array.isArray(s) ? r.push(...s) : r.push(s))
      }
      return r
    }
    isDifferentiable() {
      for (let t = 0, e = this.segments.length; t < e; t += 1) {
        if (this.segments[t].isDifferentiable()) return !0
      }
      return !1
    }
    isValid() {
      const t = this.segments
      return 0 === t.length || 'M' === t[0].type
    }
    length(t = {}) {
      if (0 === this.segments.length) return 0
      const e = this.getSubdivisions(t)
      let n = 0
      for (let t = 0, r = this.segments.length; t < r; t += 1) {
        const r = this.segments[t],
          i = e[t]
        n += r.length({ subdivisions: i })
      }
      return n
    }
    lengthAtT(t, e = {}) {
      const n = this.segments.length
      if (0 === n) return 0
      let r = t.segmentIndex
      if (r < 0) return 0
      let i = Rd.clamp(t.value, 0, 1)
      r >= n && ((r = n - 1), (i = 1))
      const s = this.getPrecision(e),
        o = this.getSubdivisions(e)
      let a = 0
      for (let t = 0; t < r; t += 1) {
        const e = this.segments[t],
          n = o[t]
        a += e.length({ precision: s, subdivisions: n })
      }
      const l = this.segments[r],
        c = o[r]
      return (a += l.lengthAtT(i, { precision: s, subdivisions: c })), a
    }
    tangentAt(t, e = {}) {
      if (0 === this.segments.length) return null
      const n = Rd.clamp(t, 0, 1),
        r = this.getOptions(e),
        i = this.length(r) * n
      return this.tangentAtLength(i, r)
    }
    tangentAtLength(t, e = {}) {
      if (0 === this.segments.length) return null
      let n = !0
      t < 0 && ((n = !1), (t = -t))
      const r = this.getPrecision(e),
        i = this.getSubdivisions(e)
      let s,
        o = 0
      for (let e = 0, a = this.segments.length; e < a; e += 1) {
        const l = n ? e : a - 1 - e,
          c = this.segments[l],
          h = i[l],
          u = c.length({ precision: r, subdivisions: h })
        if (c.isDifferentiable()) {
          if (t <= o + u)
            return c.tangentAtLength((n ? 1 : -1) * (t - o), {
              precision: r,
              subdivisions: h,
            })
          s = c
        }
        o += u
      }
      if (s) {
        const t = n ? 1 : 0
        return s.tangentAtT(t)
      }
      return null
    }
    tangentAtT(t) {
      const e = this.segments.length
      if (0 === e) return null
      const n = t.segmentIndex
      if (n < 0) return this.segments[0].tangentAtT(0)
      if (n >= e) return this.segments[e - 1].tangentAtT(1)
      const r = Rd.clamp(t.value, 0, 1)
      return this.segments[n].tangentAtT(r)
    }
    getPrecision(t = {}) {
      return null == t.precision ? this.PRECISION : t.precision
    }
    getSubdivisions(t = {}) {
      if (null == t.segmentSubdivisions) {
        const e = this.getPrecision(t)
        return this.getSegmentSubdivisions({ precision: e })
      }
      return t.segmentSubdivisions
    }
    getOptions(t = {}) {
      return {
        precision: this.getPrecision(t),
        segmentSubdivisions: this.getSubdivisions(t),
      }
    }
    toPoints(t = {}) {
      const e = this.segments,
        n = e.length
      if (0 === n) return null
      const r = this.getSubdivisions(t),
        i = []
      let s = []
      for (let t = 0; t < n; t += 1) {
        const n = e[t]
        if (n.isVisible) {
          const e = r[t]
          e.length > 0 ? e.forEach((t) => s.push(t.start)) : s.push(n.start)
        } else s.length > 0 && (s.push(e[t - 1].end), i.push(s), (s = []))
      }
      return s.length > 0 && (s.push(this.end), i.push(s)), i
    }
    toPolylines(t = {}) {
      const e = this.toPoints(t)
      return e ? e.map((t) => new Xd(t)) : null
    }
    scale(t, e, n) {
      return this.segments.forEach((r) => r.scale(t, e, n)), this
    }
    rotate(t, e) {
      return this.segments.forEach((n) => n.rotate(t, e)), this
    }
    translate(t, e) {
      return (
        'number' == typeof t
          ? this.segments.forEach((n) => n.translate(t, e))
          : this.segments.forEach((e) => e.translate(t)),
        this
      )
    }
    clone() {
      const t = new cf()
      return this.segments.forEach((e) => t.appendSegment(e.clone())), t
    }
    equals(t) {
      if (null == t) return !1
      const e = this.segments,
        n = t.segments,
        r = e.length
      if (n.length !== r) return !1
      for (let t = 0; t < r; t += 1) {
        const r = e[t],
          i = n[t]
        if (r.type !== i.type || !r.equals(i)) return !1
      }
      return !0
    }
    toJSON() {
      return this.segments.map((t) => t.toJSON())
    }
    serialize() {
      if (!this.isValid()) throw new Error('Invalid path segments.')
      return this.segments.map((t) => t.serialize()).join(' ')
    }
    toString() {
      return this.serialize()
    }
  }
  !(function (t) {
    t.isPath = function (e) {
      return null != e && e instanceof t
    }
  })(cf || (cf = {})),
    (function (t) {
      function e(t, ...e) {
        if ('M' === t) return tf.create.call(null, ...e)
        if ('L' === t) return Kd.create.call(null, ...e)
        if ('C' === t) return ef.create.call(null, ...e)
        if ('z' === t || 'Z' === t) return Qd.create()
        throw new Error(`Invalid path segment type "${t}"`)
      }
      ;(t.parse = function (n) {
        if (!n) return new t()
        const r = new t(),
          i = t
            .normalize(n)
            .match(
              /(?:[a-zA-Z] *)(?:(?:-?\d+(?:\.\d+)?(?:e[-+]?\d+)? *,? *)|(?:-?\.\d+ *,? *))+|(?:[a-zA-Z] *)(?! |\d|-|\.)/g,
            )
        if (null != i)
          for (let t = 0, n = i.length; t < n; t += 1) {
            const n =
                /(?:[a-zA-Z])|(?:(?:-?\d+(?:\.\d+)?(?:e[-+]?\d+)?))|(?:(?:-?\.\d+))/g,
              s = i[t].match(n)
            if (null != s) {
              const t = s[0],
                n = s.slice(1).map((t) => +t),
                i = e.call(null, t, ...n)
              r.appendSegment(i)
            }
          }
        return r
      }),
        (t.createSegment = e)
    })(cf || (cf = {})),
    (function (t) {
      ;(t.normalize = lf),
        (t.isValid = Gd),
        (t.drawArc = Jd),
        (t.drawPoints = Hd),
        (t.arcToCurves = Ud)
    })(cf || (cf = {}))
  class hf {
    constructor(t) {
      ;(this.options = Object.assign({}, t)),
        (this.data = this.options.data || {}),
        (this.register = this.register.bind(this)),
        (this.unregister = this.unregister.bind(this))
    }
    get names() {
      return Object.keys(this.data)
    }
    register(t, e, n = !1) {
      if ('object' == typeof t)
        return void Object.keys(t).forEach((n) => {
          this.register(n, t[n], e)
        })
      !this.exist(t) || n || Wu.isApplyingHMR() || this.onDuplicated(t)
      const r = this.options.process,
        i = r ? au(r, this, t, e) : e
      return (this.data[t] = i), i
    }
    unregister(t) {
      const e = t ? this.data[t] : null
      return delete this.data[t], e
    }
    get(t) {
      return t ? this.data[t] : null
    }
    exist(t) {
      return !!t && null != this.data[t]
    }
    onDuplicated(t) {
      try {
        throw (
          (this.options.onConflict && au(this.options.onConflict, this, t),
          new Error(
            `${ur(this.options.type)} with name '${t}' already registered.`,
          ))
        )
      } catch (t) {
        throw t
      }
    }
    onNotFound(t, e) {
      throw new Error(this.getSpellingSuggestion(t, e))
    }
    getSpellingSuggestion(t, e) {
      const n = this.getSpellingSuggestionForName(t),
        r = e ? `${e} ${Ua(this.options.type)}` : this.options.type
      return `${ur(
        r,
      )} with name '${t}' does not exist.${n ? ` Did you mean '${n}'?` : ''}`
    }
    getSpellingSuggestionForName(t) {
      return (function (t, e, n) {
        const r = Math.min(2, Math.floor(0.34 * t.length))
        let i,
          s = Math.floor(0.4 * t.length) + 1,
          o = !1
        const a = t.toLowerCase()
        for (const l of e) {
          const e = n(l)
          if (void 0 !== e && Math.abs(e.length - a.length) <= r) {
            const n = e.toLowerCase()
            if (n === a) {
              if (e === t) continue
              return l
            }
            if (o) continue
            if (e.length < 3) continue
            const r = Ou(a, n, s - 1)
            if (void 0 === r) continue
            r < 3 ? ((o = !0), (i = l)) : ((s = r), (i = l))
          }
        }
        return i
      })(t, Object.keys(this.data), (t) => t)
    }
  }
  !(function (t) {
    t.create = function (e) {
      return new t(e)
    }
  })(hf || (hf = {}))
  const uf = {
      color: '#aaaaaa',
      thickness: 1,
      markup: 'rect',
      update(t, e) {
        const n = e.thickness * e.sx,
          r = e.thickness * e.sy
        xg(t, { width: n, height: r, rx: n, ry: r, fill: e.color })
      },
    },
    gf = {
      color: '#aaaaaa',
      thickness: 1,
      markup: 'rect',
      update(t, e) {
        const n = e.sx <= 1 ? e.thickness * e.sx : e.thickness
        xg(t, { width: n, height: n, rx: n, ry: n, fill: e.color })
      },
    },
    df = {
      color: 'rgba(224,224,224,1)',
      thickness: 1,
      markup: 'path',
      update(t, e) {
        let n
        const r = e.width,
          i = e.height,
          s = e.thickness
        ;(n =
          r - s >= 0 && i - s >= 0
            ? ['M', r, 0, 'H0 M0 0 V0', i].join(' ')
            : 'M 0 0 0 0'),
          xg(t, { d: n, stroke: e.color, 'stroke-width': e.thickness })
      },
    },
    ff = [
      {
        color: 'rgba(224,224,224,1)',
        thickness: 1,
        markup: 'path',
        update(t, e) {
          let n
          const r = e.width,
            i = e.height,
            s = e.thickness
          ;(n =
            r - s >= 0 && i - s >= 0
              ? ['M', r, 0, 'H0 M0 0 V0', i].join(' ')
              : 'M 0 0 0 0'),
            xg(t, { d: n, stroke: e.color, 'stroke-width': e.thickness })
        },
      },
      {
        color: 'rgba(224,224,224,0.2)',
        thickness: 3,
        factor: 4,
        markup: 'path',
        update(t, e) {
          let n
          const r = e.factor || 1,
            i = e.width * r,
            s = e.height * r,
            o = e.thickness
          ;(n =
            i - o >= 0 && s - o >= 0
              ? ['M', i, 0, 'H0 M0 0 V0', s].join(' ')
              : 'M 0 0 0 0'),
            (e.width = i),
            (e.height = s),
            xg(t, { d: n, stroke: e.color, 'stroke-width': e.thickness })
        },
      },
    ]
  var pf = Object.freeze({
    __proto__: null,
    dot: uf,
    fixedDot: gf,
    mesh: df,
    doubleMesh: ff,
  })
  class mf {
    constructor() {
      ;(this.patterns = {}),
        (this.root = zg.create(ag(), { width: '100%', height: '100%' }, [
          og('defs'),
        ]).node)
    }
    add(t, e) {
      const n = this.root.childNodes[0]
      n && n.appendChild(e),
        (this.patterns[t] = e),
        zg
          .create('rect', { width: '100%', height: '100%', fill: `url(#${t})` })
          .appendTo(this.root)
    }
    get(t) {
      return this.patterns[t]
    }
    has(t) {
      return null != this.patterns[t]
    }
  }
  !(function (t) {
    ;(t.presets = pf),
      (t.registry = hf.create({ type: 'grid' })),
      t.registry.register(t.presets, !0)
  })(mf || (mf = {}))
  const yf = function (t) {
      const e = document.createElement('canvas'),
        n = t.width,
        r = t.height
      ;(e.width = 2 * n), (e.height = r)
      const i = e.getContext('2d')
      return (
        i.drawImage(t, 0, 0, n, r),
        i.translate(2 * n, 0),
        i.scale(-1, 1),
        i.drawImage(t, 0, 0, n, r),
        e
      )
    },
    vf = function (t) {
      const e = document.createElement('canvas'),
        n = t.width,
        r = t.height
      ;(e.width = n), (e.height = 2 * r)
      const i = e.getContext('2d')
      return (
        i.drawImage(t, 0, 0, n, r),
        i.translate(0, 2 * r),
        i.scale(1, -1),
        i.drawImage(t, 0, 0, n, r),
        e
      )
    },
    bf = function (t) {
      const e = document.createElement('canvas'),
        n = t.width,
        r = t.height
      ;(e.width = 2 * n), (e.height = 2 * r)
      const i = e.getContext('2d')
      return (
        i.drawImage(t, 0, 0, n, r),
        i.setTransform(-1, 0, 0, -1, e.width, e.height),
        i.drawImage(t, 0, 0, n, r),
        i.setTransform(-1, 0, 0, 1, e.width, 0),
        i.drawImage(t, 0, 0, n, r),
        i.setTransform(1, 0, 0, -1, 0, e.height),
        i.drawImage(t, 0, 0, n, r),
        e
      )
    }
  var xf,
    wf = Object.freeze({
      __proto__: null,
      flipX: yf,
      flipY: vf,
      flipXY: bf,
      watermark: function (t, e) {
        const n = t.width,
          r = t.height,
          i = document.createElement('canvas')
        ;(i.width = 3 * n), (i.height = 3 * r)
        const s = i.getContext('2d'),
          o = null != e.angle ? -e.angle : -20,
          a = Bd.toRad(o),
          l = i.width / 4,
          c = i.height / 4
        for (let e = 0; e < 4; e += 1)
          for (let i = 0; i < 4; i += 1)
            (e + i) % 2 > 0 &&
              (s.setTransform(1, 0, 0, 1, (2 * e - 1) * l, (2 * i - 1) * c),
              s.rotate(a),
              s.drawImage(t, -n / 2, -r / 2, n, r))
        return i
      },
    })
  function Pf(t, e) {
    return null != t ? t : e
  }
  function Af(t, e) {
    return null != t && Number.isFinite(t) ? t : e
  }
  !(function (t) {
    ;(t.presets = Object.assign({}, wf)),
      (t.presets['flip-x'] = yf),
      (t.presets['flip-y'] = vf),
      (t.presets['flip-xy'] = bf),
      (t.registry = hf.create({ type: 'background pattern' })),
      t.registry.register(t.presets, !0)
  })(xf || (xf = {}))
  var Cf,
    Of = Object.freeze({
      __proto__: null,
      outline: function (t = {}) {
        const e = Pf(t.color, 'blue'),
          n = Af(t.width, 1),
          r = Af(t.margin, 2)
        return `\n    <filter>\n      <feFlood flood-color="${e}" flood-opacity="${Af(
          t.opacity,
          1,
        )}" result="colored"/>\n      <feMorphology in="SourceAlpha" result="morphedOuter" operator="dilate" radius="${
          r + n
        }" />\n      <feMorphology in="SourceAlpha" result="morphedInner" operator="dilate" radius="${r}" />\n      <feComposite result="morphedOuterColored" in="colored" in2="morphedOuter" operator="in"/>\n      <feComposite operator="xor" in="morphedOuterColored" in2="morphedInner" result="outline"/>\n      <feMerge>\n        <feMergeNode in="outline"/>\n        <feMergeNode in="SourceGraphic"/>\n      </feMerge>\n    </filter>\n  `.trim()
      },
      highlight: function (t = {}) {
        const e = Pf(t.color, 'red'),
          n = Af(t.blur, 0),
          r = Af(t.width, 1)
        return `\n      <filter>\n        <feFlood flood-color="${e}" flood-opacity="${Af(
          t.opacity,
          1,
        )}" result="colored"/>\n        <feMorphology result="morphed" in="SourceGraphic" operator="dilate" radius="${r}"/>\n        <feComposite result="composed" in="colored" in2="morphed" operator="in"/>\n        <feGaussianBlur result="blured" in="composed" stdDeviation="${n}"/>\n        <feBlend in="SourceGraphic" in2="blured" mode="normal"/>\n      </filter>\n    `.trim()
      },
      blur: function (t = {}) {
        const e = Af(t.x, 2)
        return `\n    <filter>\n      <feGaussianBlur stdDeviation="${
          null != t.y && Number.isFinite(t.y) ? [e, t.y] : e
        }"/>\n    </filter>\n  `.trim()
      },
      dropShadow: function (t = {}) {
        const e = Af(t.dx, 0),
          n = Af(t.dy, 0),
          r = Pf(t.color, 'black'),
          i = Af(t.blur, 4),
          s = Af(t.opacity, 1)
        return 'SVGFEDropShadowElement' in window
          ? `<filter>\n         <feDropShadow stdDeviation="${i}" dx="${e}" dy="${n}" flood-color="${r}" flood-opacity="${s}" />\n       </filter>`.trim()
          : `<filter>\n         <feGaussianBlur in="SourceAlpha" stdDeviation="${i}" />\n         <feOffset dx="${e}" dy="${n}" result="offsetblur" />\n         <feFlood flood-color="${r}" />\n         <feComposite in2="offsetblur" operator="in" />\n         <feComponentTransfer>\n           <feFuncA type="linear" slope="${s}" />\n         </feComponentTransfer>\n         <feMerge>\n           <feMergeNode/>\n           <feMergeNode in="SourceGraphic"/>\n         </feMerge>\n       </filter>`.trim()
      },
      grayScale: function (t = {}) {
        const e = Af(t.amount, 1),
          n = 0.7152 - 0.7152 * (1 - e)
        return `\n    <filter>\n      <feColorMatrix type="matrix" values="${
          0.2126 + 0.7874 * (1 - e)
        } ${n} ${0.0722 - 0.0722 * (1 - e)} 0 0 ${0.2126 - 0.2126 * (1 - e)} ${
          0.7152 + 0.2848 * (1 - e)
        } ${0.0722 - 0.0722 * (1 - e)} 0 0 ${0.2126 - 0.2126 * (1 - e)} ${n} ${
          0.0722 + 0.9278 * (1 - e)
        } 0 0 0 0 0 1 0"/>\n    </filter>\n  `.trim()
      },
      sepia: function (t = {}) {
        const e = Af(t.amount, 1)
        return `\n      <filter>\n        <feColorMatrix type="matrix" values="${
          0.393 + 0.607 * (1 - e)
        } ${0.769 - 0.769 * (1 - e)} ${0.189 - 0.189 * (1 - e)} 0 0 ${
          0.349 - 0.349 * (1 - e)
        } ${0.686 + 0.314 * (1 - e)} ${0.168 - 0.168 * (1 - e)} 0 0 ${
          0.272 - 0.272 * (1 - e)
        } ${0.534 - 0.534 * (1 - e)} ${
          0.131 + 0.869 * (1 - e)
        } 0 0 0 0 0 1 0"/>\n      </filter>\n    `.trim()
      },
      saturate: function (t = {}) {
        return `\n      <filter>\n        <feColorMatrix type="saturate" values="${
          1 - Af(t.amount, 1)
        }"/>\n      </filter>\n    `.trim()
      },
      hueRotate: function (t = {}) {
        return `\n      <filter>\n        <feColorMatrix type="hueRotate" values="${Af(
          t.angle,
          0,
        )}"/>\n      </filter>\n    `.trim()
      },
      invert: function (t = {}) {
        const e = Af(t.amount, 1),
          n = 1 - e
        return `\n      <filter>\n        <feComponentTransfer>\n          <feFuncR type="table" tableValues="${e} ${n}"/>\n          <feFuncG type="table" tableValues="${e} ${n}"/>\n          <feFuncB type="table" tableValues="${e} ${n}"/>\n        </feComponentTransfer>\n      </filter>\n    `.trim()
      },
      brightness: function (t = {}) {
        const e = Af(t.amount, 1)
        return `\n    <filter>\n      <feComponentTransfer>\n        <feFuncR type="linear" slope="${e}"/>\n        <feFuncG type="linear" slope="${e}"/>\n        <feFuncB type="linear" slope="${e}"/>\n      </feComponentTransfer>\n    </filter>\n  `.trim()
      },
      contrast: function (t = {}) {
        const e = Af(t.amount, 1),
          n = 0.5 - e / 2
        return `\n    <filter>\n     <feComponentTransfer>\n        <feFuncR type="linear" slope="${e}" intercept="${n}"/>\n        <feFuncG type="linear" slope="${e}" intercept="${n}"/>\n        <feFuncB type="linear" slope="${e}" intercept="${n}"/>\n      </feComponentTransfer>\n    </filter>\n  `.trim()
      },
    })
  !(function (t) {
    ;(t.presets = Of),
      (t.registry = hf.create({ type: 'filter' })),
      t.registry.register(t.presets, !0)
  })(Cf || (Cf = {}))
  const Ef = {
      xlinkHref: 'xlink:href',
      xlinkShow: 'xlink:show',
      xlinkRole: 'xlink:role',
      xlinkType: 'xlink:type',
      xlinkArcrole: 'xlink:arcrole',
      xlinkTitle: 'xlink:title',
      xlinkActuate: 'xlink:actuate',
      xmlSpace: 'xml:space',
      xmlBase: 'xml:base',
      xmlLang: 'xml:lang',
      preserveAspectRatio: 'preserveAspectRatio',
      requiredExtension: 'requiredExtension',
      requiredFeatures: 'requiredFeatures',
      systemLanguage: 'systemLanguage',
      externalResourcesRequired: 'externalResourceRequired',
    },
    Mf = { position: Yf('x', 'width', 'origin') },
    Sf = { position: Yf('y', 'height', 'origin') },
    Tf = { position: Yf('x', 'width', 'corner') },
    jf = { position: Yf('y', 'height', 'corner') },
    kf = { set: Zf('width', 'width') },
    Nf = { set: Zf('height', 'height') },
    _f = { set: Zf('rx', 'width') },
    Lf = { set: Zf('ry', 'height') },
    If = {
      set: ((t) => {
        const e = Zf('r', 'width'),
          n = Zf('r', 'height')
        return function (t, r) {
          const i = r.refBBox
          return au(i.height > i.width ? e : n, this, t, r)
        }
      })(),
    },
    Bf = {
      set(t, { refBBox: e }) {
        let n = parseFloat(t)
        const r = Eu(t)
        r && (n /= 100)
        const i = Math.sqrt(e.height * e.height + e.width * e.width)
        let s
        return (
          Number.isFinite(n) &&
            (s = r || (n >= 0 && n <= 1) ? n * i : Math.max(n + i, 0)),
          { r: s }
        )
      },
    },
    Rf = { set: Zf('cx', 'width') },
    Df = { set: Zf('cy', 'height') },
    Vf = { set: Qf({ resetOffset: !0 }) },
    zf = { set: Qf({ resetOffset: !1 }) },
    $f = { set: tp({ resetOffset: !0 }) },
    Ff = { set: tp({ resetOffset: !1 }) },
    qf = If,
    Gf = Vf,
    Wf = $f,
    Hf = Mf,
    Uf = Sf,
    Jf = kf,
    Xf = Nf
  function Yf(t, e, n) {
    return (r, { refBBox: i }) => {
      if (null == r) return null
      let s = parseFloat(r)
      const o = Eu(r)
      let a
      if ((o && (s /= 100), Number.isFinite(s))) {
        const r = i[n]
        a = o || (s > 0 && s < 1) ? r[t] + i[e] * s : r[t] + s
      }
      const l = new Vd()
      return (l[t] = a || 0), l
    }
  }
  function Zf(t, e) {
    return function (n, { refBBox: r }) {
      let i = parseFloat(n)
      const s = Eu(n)
      s && (i /= 100)
      const o = {}
      if (Number.isFinite(i)) {
        const n = s || (i >= 0 && i <= 1) ? i * r[e] : Math.max(i + r[e], 0)
        o[t] = n
      }
      return o
    }
  }
  function Kf(t, e) {
    const n = 'x6-shape',
      r = e && e.resetOffset
    return function (e, { elem: i, refBBox: s }) {
      let o = Vg(i, n)
      if (!o || o.value !== e) {
        const r = t(e)
        ;(o = { value: e, shape: r, shapeBBox: r.bbox() }), Vg(i, n, o)
      }
      const a = o.shape.clone(),
        l = o.shapeBBox.clone(),
        c = l.getOrigin(),
        h = s.getOrigin()
      ;(l.x = h.x), (l.y = h.y)
      const u = s.getMaxScaleToFit(l, h),
        g = 0 === l.width || 0 === s.width ? 1 : u.sx,
        d = 0 === l.height || 0 === s.height ? 1 : u.sy
      return a.scale(g, d, c), r && a.translate(-c.x, -c.y), a
    }
  }
  function Qf(t) {
    const e = Kf(function (t) {
      return cf.parse(t)
    }, t)
    return (t, n) => ({ d: e(t, n).serialize() })
  }
  function tp(t) {
    const e = Kf((t) => new Xd(t), t)
    return (t, n) => ({ points: e(t, n).serialize() })
  }
  const ep = {
      qualify: $n,
      set: (t, { view: e }) => `url(#${e.graph.defineGradient(t)})`,
    },
    np = {
      qualify: $n,
      set(t, { view: e }) {
        const n = e.cell,
          r = Object.assign({}, t)
        if (n.isEdge() && 'linearGradient' === r.type) {
          const t = e,
            i = t.sourcePoint,
            s = t.targetPoint
          ;(r.id = `gradient-${r.type}-${n.id}`),
            (r.attrs = Object.assign(Object.assign({}, r.attrs), {
              x1: i.x,
              y1: i.y,
              x2: s.x,
              y2: s.y,
              gradientUnits: 'userSpaceOnUse',
            })),
            e.graph.defs.remove(r.id)
        }
        return `url(#${e.graph.defineGradient(r)})`
      },
    },
    rp = {
      qualify: (t, { attrs: e }) => null == e.textWrap || !$n(e.textWrap),
      set(t, { view: e, elem: n, attrs: r }) {
        const i = 'x6-text',
          s = Vg(n, i),
          o = (t) => {
            try {
              return JSON.parse(t)
            } catch (e) {
              return t
            }
          },
          a = {
            x: r.x,
            eol: r.eol,
            annotations: o(r.annotations),
            textPath: o(r['text-path'] || r.textPath),
            textVerticalAnchor:
              r['text-vertical-anchor'] || r.textVerticalAnchor,
            displayEmpty: 'true' === (r['display-empty'] || r.displayEmpty),
            lineHeight: r['line-height'] || r.lineHeight,
          },
          l = r['font-size'] || r.fontSize,
          c = JSON.stringify([t, a])
        if ((l && n.setAttribute('font-size', l), null == s || s !== c)) {
          const r = a.textPath
          if (null != r && 'object' == typeof r) {
            const t = r.selector
            if ('string' == typeof t) {
              const n = e.find(t)[0]
              n instanceof SVGPathElement &&
                (eg(n),
                (a.textPath = Object.assign({ 'xlink:href': `#${n.id}` }, r)))
            }
          }
          Wg(n, `${t}`, a), Vg(n, i, c)
        }
      },
    },
    ip = {
      qualify: $n,
      set(t, { view: e, elem: n, attrs: r, refBBox: i }) {
        const s = t,
          o = s.width || 0
        Eu(o)
          ? (i.width *= parseFloat(o) / 100)
          : o <= 0
          ? (i.width += o)
          : (i.width = o)
        const a = s.height || 0
        let l
        Eu(a)
          ? (i.height *= parseFloat(a) / 100)
          : a <= 0
          ? (i.height += a)
          : (i.height = a)
        let c = s.text
        null == c && (c = r.text),
          (l =
            null != c
              ? (function (t, e, n = {}, r = {}) {
                  const i = e.width,
                    s = e.height,
                    o = r.eol || '\n',
                    { width: a } = Hg(t, n)
                  if (a < i) return t
                  const l = [],
                    c = n.fontSize || 14,
                    h = n.lineHeight
                      ? parseFloat(n.lineHeight)
                      : Math.ceil(1.4 * c),
                    u = Math.floor(s / h)
                  let g = t,
                    d = a,
                    f = r.ellipsis,
                    p = 0
                  f && ('string' != typeof f && (f = '…'), (p = Hg(f, n).width))
                  for (let t = 0; t < u; t += 1) {
                    if (!(d > i)) {
                      l.push(g)
                      break
                    }
                    if (t === u - 1) {
                      const [t] = Ug(g, i - p, d, n)
                      l.push(f ? `${t}${f}` : t)
                    } else {
                      const [t, e] = Ug(g, i, d, n)
                      l.push(t), (g = e), (d = Hg(g, n).width)
                    }
                  }
                  return l.join(o)
                })(
                  `${c}`,
                  i,
                  {
                    'font-weight': r['font-weight'] || r.fontWeight,
                    'font-size': r['font-size'] || r.fontSize,
                    'font-family': r['font-family'] || r.fontFamily,
                    lineHeight: r.lineHeight,
                  },
                  { ellipsis: s.ellipsis },
                )
              : ''),
          au(rp.set, this, l, {
            view: e,
            elem: n,
            attrs: r,
            refBBox: i,
            cell: e.cell,
          })
      },
    },
    sp = (t, { attrs: e }) => void 0 !== e.text,
    op = { qualify: sp },
    ap = { qualify: sp },
    lp = { qualify: sp },
    cp = { qualify: sp },
    hp = { qualify: sp },
    up = { qualify: sp },
    gp = {
      qualify: (t, { elem: e }) => e instanceof SVGElement,
      set(t, { elem: e }) {
        const n = 'x6-title',
          r = `${t}`,
          i = Vg(e, n)
        if (null == i || i !== r) {
          Vg(e, n, r)
          const t = e.firstChild
          if (t && 'TITLE' === t.tagName.toUpperCase()) {
            t.textContent = r
          } else {
            const n = document.createElementNS(e.namespaceURI, 'title')
            ;(n.textContent = r), e.insertBefore(n, t)
          }
        }
      },
    },
    dp = { offset: mp('x', 'width', 'right') },
    fp = { offset: mp('y', 'height', 'bottom') },
    pp = {
      offset: (t, { refBBox: e }) =>
        t ? { x: -e.x, y: -e.y } : { x: 0, y: 0 },
    }
  function mp(t, e, n) {
    return (r, { refBBox: i }) => {
      const s = new Vd()
      let o
      return (
        (o =
          'middle' === r
            ? i[e] / 2
            : r === n
            ? i[e]
            : 'number' == typeof r && Number.isFinite(r)
            ? r > -1 && r < 1
              ? -i[e] * r
              : -r
            : Eu(r)
            ? (i[e] * parseFloat(r)) / 100
            : 0),
        (s[t] = -(i[t] + o)),
        s
      )
    }
  }
  const yp = {
      qualify: $n,
      set(t, { elem: e }) {
        Rg(e, t)
      },
    },
    vp = {
      set(t, { elem: e }) {
        e.innerHTML = `${t}`
      },
    },
    bp = {
      qualify: $n,
      set: (t, { view: e }) => `url(#${e.graph.defineFilter(t)})`,
    },
    xp = { set: (t) => (null != t && 'object' == typeof t && t.id ? t.id : t) }
  function wp(t, e, n) {
    let r, i
    'object' == typeof e ? ((r = e.x), (i = e.y)) : ((r = e), (i = n))
    const s = cf.parse(t),
      o = s.bbox()
    if (o) {
      let t = -o.height / 2 - o.y,
        e = -o.width / 2 - o.x
      'number' == typeof r && (e -= r),
        'number' == typeof i && (t -= i),
        s.translate(e, t)
    }
    return s.serialize()
  }
  var Pp = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  function Ap(t, e, n, r = 3 / 4, i = {}) {
    const s = t.size || 10,
      o = t.width || s,
      a = t.height || s,
      l = new cf(),
      c = {}
    if (e)
      l
        .moveTo(o, 0)
        .lineTo(0, a / 2)
        .lineTo(o, a),
        (c.fill = 'none')
    else {
      if ((l.moveTo(0, a / 2), l.lineTo(o, 0), !n)) {
        const t = ti(r, 0, 1)
        l.lineTo(o * t, a / 2)
      }
      l.lineTo(o, a), l.close()
    }
    return Object.assign(Object.assign(Object.assign({}, c), i), {
      tagName: 'path',
      d: wp(l.serialize(), { x: null != t.offset ? t.offset : -o / 2 }),
    })
  }
  var Cp = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  var Op = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  var Ep = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  var Mp = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  var Sp = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  const Tp = (t) => {
    var { r: e } = t,
      n = Sp(t, ['r'])
    const r = e || 5
    return Object.assign(Object.assign({ cx: r }, n), {
      tagName: 'circle',
      r: r,
    })
  }
  var jp = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  var kp,
    Np = Object.freeze({
      __proto__: null,
      block: (t) => {
        var { size: e, width: n, height: r, offset: i, open: s } = t
        return Ap(
          { size: e, width: n, height: r, offset: i },
          !0 === s,
          !0,
          void 0,
          Pp(t, ['size', 'width', 'height', 'offset', 'open']),
        )
      },
      classic: (t) => {
        var { size: e, width: n, height: r, offset: i, factor: s } = t
        return Ap(
          { size: e, width: n, height: r, offset: i },
          !1,
          !1,
          s,
          Pp(t, ['size', 'width', 'height', 'offset', 'factor']),
        )
      },
      diamond: (t) => {
        var { size: e, width: n, height: r, offset: i } = t,
          s = Cp(t, ['size', 'width', 'height', 'offset'])
        const o = e || 10,
          a = n || o,
          l = r || o,
          c = new cf()
        return (
          c
            .moveTo(0, l / 2)
            .lineTo(a / 2, 0)
            .lineTo(a, l / 2)
            .lineTo(a / 2, l)
            .close(),
          Object.assign(Object.assign({}, s), {
            tagName: 'path',
            d: wp(c.serialize(), null == i ? -a / 2 : i),
          })
        )
      },
      path: (t) => {
        var { d: e, offsetX: n, offsetY: r } = t,
          i = Op(t, ['d', 'offsetX', 'offsetY'])
        return Object.assign(Object.assign({}, i), {
          tagName: 'path',
          d: wp(e, n, r),
        })
      },
      cross: (t) => {
        var { size: e, width: n, height: r, offset: i } = t,
          s = Ep(t, ['size', 'width', 'height', 'offset'])
        const o = e || 10,
          a = n || o,
          l = r || o,
          c = new cf()
        return (
          c.moveTo(0, 0).lineTo(a, l).moveTo(0, l).lineTo(a, 0),
          Object.assign(Object.assign({}, s), {
            tagName: 'path',
            fill: 'none',
            d: wp(c.serialize(), i || -a / 2),
          })
        )
      },
      async: (t) => {
        var { width: e, height: n, offset: r, open: i, flip: s } = t,
          o = Mp(t, ['width', 'height', 'offset', 'open', 'flip'])
        let a = n || 6
        const l = e || 10,
          c = !0 === i,
          h = !0 === s,
          u = Object.assign(Object.assign({}, o), { tagName: 'path' })
        h && (a = -a)
        const g = new cf()
        return (
          g.moveTo(0, a).lineTo(l, 0),
          c ? (u.fill = 'none') : (g.lineTo(l, a), g.close()),
          (u.d = wp(g.serialize(), { x: r || -l / 2, y: a / 2 })),
          u
        )
      },
      circle: Tp,
      circlePlus: (t) => {
        var { r: e } = t,
          n = Sp(t, ['r'])
        const r = e || 5,
          i = new cf()
        return (
          i.moveTo(r, 0).lineTo(r, 2 * r),
          i.moveTo(0, r).lineTo(2 * r, r),
          {
            children: [
              Object.assign(Object.assign({}, Tp({ r: r })), { fill: 'none' }),
              Object.assign(Object.assign({}, n), {
                tagName: 'path',
                d: wp(i.serialize(), -r),
              }),
            ],
          }
        )
      },
      ellipse: (t) => {
        var { rx: e, ry: n } = t,
          r = jp(t, ['rx', 'ry'])
        const i = e || 5,
          s = n || 5
        return Object.assign(Object.assign({ cx: i }, r), {
          tagName: 'ellipse',
          rx: i,
          ry: s,
        })
      },
    })
  !(function (t) {
    ;(t.presets = Np),
      (t.registry = hf.create({ type: 'marker' })),
      t.registry.register(t.presets, !0)
  })(kp || (kp = {})),
    (function (t) {
      t.normalize = wp
    })(kp || (kp = {}))
  var _p = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  function Lp(t) {
    return 'string' == typeof t || $n(t)
  }
  const Ip = {
      qualify: Lp,
      set: (t, { view: e, attrs: n }) => Dp('marker-start', t, e, n),
    },
    Bp = {
      qualify: Lp,
      set: (t, { view: e, attrs: n }) =>
        Dp('marker-end', t, e, n, { transform: 'rotate(180)' }),
    },
    Rp = {
      qualify: Lp,
      set: (t, { view: e, attrs: n }) => Dp('marker-mid', t, e, n),
    }
  function Dp(t, e, n, r, i = {}) {
    const s = 'string' == typeof e ? { name: e } : e,
      { name: o, args: a } = s,
      l = _p(s, ['name', 'args'])
    let c = l
    if (o && 'string' == typeof o) {
      const t = kp.registry.get(o)
      if (!t) return kp.registry.onNotFound(o)
      c = t(Object.assign(Object.assign({}, l), a))
    }
    const h = Object.assign(
      Object.assign(
        Object.assign(
          {},
          (function (t, e) {
            const n = {},
              r = t.stroke
            'string' == typeof r && ((n.stroke = r), (n.fill = r))
            let i = t.strokeOpacity
            null == i && (i = t['stroke-opacity'])
            null == i && (i = t.opacity)
            null != i && ((n['stroke-opacity'] = i), (n['fill-opacity'] = i))
            if ('marker-mid' !== e) {
              const r = parseFloat(t.strokeWidth || t['stroke-width'])
              if (Number.isFinite(r) && r > 1) {
                const t = Math.ceil(r / 2)
                n.refX = 'marker-start' === e ? t : -t
              }
            }
            return n
          })(r, t),
        ),
        i,
      ),
      c,
    )
    return { [t]: `url(#${n.graph.defineMarker(h)})` }
  }
  const Vp = (t, { view: e }) => e.cell.isEdge(),
    zp = {
      qualify: Vp,
      set(t, e) {
        var n, r, i, s
        const o = e.view,
          a = t.reverse || !1,
          l = t.stubs || 0
        let c
        if (Number.isFinite(l) && 0 !== l)
          if (a) {
            let t, e
            const a = o.getConnectionLength() || 0
            l < 0 ? ((t = (a + l) / 2), (e = -l)) : ((t = l), (e = a - 2 * l))
            const h = o.getConnection()
            c =
              null ===
                (s =
                  null ===
                    (i =
                      null ===
                        (r =
                          null ===
                            (n = null == h ? void 0 : h.divideAtLength(t)) ||
                          void 0 === n
                            ? void 0
                            : n[1]) || void 0 === r
                        ? void 0
                        : r.divideAtLength(e)) || void 0 === i
                    ? void 0
                    : i[0]) || void 0 === s
                ? void 0
                : s.serialize()
          } else {
            let t
            if (l < 0) {
              t = ((o.getConnectionLength() || 0) + l) / 2
            } else t = l
            const e = o.getConnection()
            if (e) {
              const n = e.divideAtLength(t),
                r = e.divideAtLength(-t)
              n && r && (c = `${n[0].serialize()} ${r[1].serialize()}`)
            }
          }
        return { d: c || o.getConnectionPathData() }
      },
    },
    $p = { qualify: Vp, set: Up('getTangentAtLength', { rotate: !0 }) },
    Fp = { qualify: Vp, set: Up('getTangentAtLength', { rotate: !1 }) },
    qp = { qualify: Vp, set: Up('getTangentAtRatio', { rotate: !0 }) },
    Gp = { qualify: Vp, set: Up('getTangentAtRatio', { rotate: !1 }) },
    Wp = $p,
    Hp = qp
  function Up(t, e) {
    const n = { x: 1, y: 0 }
    return (r, i) => {
      let s, o
      const a = i.view,
        l = a[t](Number(r))
      return (
        l
          ? ((o = e.rotate ? l.vector().vectorAngle(n) : 0), (s = l.start))
          : ((s = a.path.start), (o = 0)),
        0 === o
          ? { transform: `translate(${s.x},${s.y}')` }
          : { transform: `translate(${s.x},${s.y}') rotate(${o})` }
      )
    }
  }
  var Jp,
    Xp = Object.freeze({
      __proto__: null,
      ref: {},
      refX: Mf,
      refY: Sf,
      refDx: Tf,
      refDy: jf,
      refWidth: kf,
      refHeight: Nf,
      refRx: _f,
      refRy: Lf,
      refRInscribed: If,
      refRCircumscribed: Bf,
      refCx: Rf,
      refCy: Df,
      refDResetOffset: Vf,
      refDKeepOffset: zf,
      refPointsResetOffset: $f,
      refPointsKeepOffset: Ff,
      refR: qf,
      refD: Gf,
      refPoints: Wf,
      refX2: Hf,
      refY2: Uf,
      refWidth2: Jf,
      refHeight2: Xf,
      fill: ep,
      stroke: np,
      text: rp,
      textWrap: ip,
      lineHeight: op,
      textVerticalAnchor: ap,
      textPath: lp,
      annotations: cp,
      eol: hp,
      displayEmpty: up,
      title: gp,
      xAlign: dp,
      yAlign: fp,
      resetOffset: pp,
      style: yp,
      html: vp,
      filter: bp,
      port: xp,
      sourceMarker: Ip,
      targetMarker: Bp,
      vertexMarker: Rp,
      connection: zp,
      atConnectionLengthKeepGradient: $p,
      atConnectionLengthIgnoreGradient: Fp,
      atConnectionRatioKeepGradient: qp,
      atConnectionRatioIgnoreGradient: Gp,
      atConnectionLength: Wp,
      atConnectionRatio: Hp,
    })
  !(function (t) {
    t.isValidDefinition = function (t, e, n) {
      if (null != t) {
        if ('string' == typeof t) return !0
        if ('function' != typeof t.qualify || au(t.qualify, this, e, n))
          return !0
      }
      return !1
    }
  })(Jp || (Jp = {})),
    (function (t) {
      ;(t.presets = Object.assign(Object.assign({}, Ef), Xp)),
        (t.registry = hf.create({ type: 'attribute definition' })),
        t.registry.register(t.presets, !0)
    })(Jp || (Jp = {}))
  const Yp = {
      prefixCls: 'x6',
      autoInsertCSS: !0,
      useCSSSelector: !0,
      prefix: (t) => `${Yp.prefixCls}-${t}`,
    },
    Zp = Yp.prefix('highlighted'),
    Kp = {
      highlight(t, e, n) {
        Zu(e, (n && n.className) || Zp)
      },
      unhighlight(t, e, n) {
        Ku(e, (n && n.className) || Zp)
      },
    },
    Qp = Yp.prefix('highlight-opacity'),
    tm = {
      highlight(t, e) {
        Zu(e, Qp)
      },
      unhighlight(t, e) {
        Ku(e, Qp)
      },
    }
  var em
  !(function (t) {
    const e = og('svg')
    function n(t, e) {
      const n = id(t.x, t.y).matrixTransform(e)
      return new Vd(n.x, n.y)
    }
    function r(t, n) {
      const r = e.createSVGPoint()
      ;(r.x = t.x), (r.y = t.y)
      const i = r.matrixTransform(n)
      ;(r.x = t.x + t.width), (r.y = t.y)
      const s = r.matrixTransform(n)
      ;(r.x = t.x + t.width), (r.y = t.y + t.height)
      const o = r.matrixTransform(n)
      ;(r.x = t.x), (r.y = t.y + t.height)
      const a = r.matrixTransform(n),
        l = Math.min(i.x, s.x, o.x, a.x),
        c = Math.max(i.x, s.x, o.x, a.x),
        h = Math.min(i.y, s.y, o.y, a.y),
        u = Math.max(i.y, s.y, o.y, a.y)
      return new zd(l, h, c - l, u - h)
    }
    function i(t, e = {}) {
      let n
      if (!t.ownerSVGElement || !ng(t)) {
        if (pg(t)) {
          const { left: e, top: n, width: r, height: i } = s(t)
          return new zd(e, n, r, i)
        }
        return new zd(0, 0, 0, 0)
      }
      let o = e.target
      if (!e.recursive) {
        try {
          n = t.getBBox()
        } catch (e) {
          n = {
            x: t.clientLeft,
            y: t.clientTop,
            width: t.clientWidth,
            height: t.clientHeight,
          }
        }
        if (!o) return zd.create(n)
        return r(n, pd(t, o))
      }
      {
        const e = t.childNodes,
          r = e.length
        if (0 === r) return i(t, { target: o })
        o || (o = t)
        for (let t = 0; t < r; t += 1) {
          const r = e[t]
          let s
          ;(s =
            0 === r.childNodes.length
              ? i(r, { target: o })
              : i(r, { target: o, recursive: !0 })),
            (n = n ? n.union(s) : s)
        }
        return n
      }
    }
    function s(t) {
      let e = 0,
        n = 0,
        r = 0,
        i = 0
      if (t) {
        let s = t
        for (; s; )
          (e += s.offsetLeft),
            (n += s.offsetTop),
            (s = s.offsetParent),
            s &&
              ((e += parseInt(Ig(s, 'borderLeft'), 10)),
              (n += parseInt(Ig(s, 'borderTop'), 10)))
        ;(r = t.offsetWidth), (i = t.offsetHeight)
      }
      return { left: e, top: n, width: r, height: i }
    }
    function o(t) {
      const e = (e) => {
        const n = t.getAttribute(e),
          r = n ? parseFloat(n) : 0
        return Number.isNaN(r) ? 0 : r
      }
      switch (t instanceof SVGElement && t.nodeName.toLowerCase()) {
        case 'rect':
          return new zd(e('x'), e('y'), e('width'), e('height'))
        case 'circle':
          return new Fd(e('cx'), e('cy'), e('r'), e('r'))
        case 'ellipse':
          return new Fd(e('cx'), e('cy'), e('rx'), e('ry'))
        case 'polyline': {
          const e = Zg(t)
          return new Xd(e)
        }
        case 'polygon': {
          const e = Zg(t)
          return e.length > 1 && e.push(e[0]), new Xd(e)
        }
        case 'path': {
          let e = t.getAttribute('d')
          return cf.isValid(e) || (e = cf.normalize(e)), cf.parse(e)
        }
        case 'line':
          return new $d(e('x1'), e('y1'), e('x2'), e('y2'))
      }
      return i(t)
    }
    function a(t) {
      if (null == t) return null
      let e = t
      do {
        let t = e.tagName
        if ('string' != typeof t) return null
        if (((t = t.toUpperCase()), Yu(e, 'x6-port'))) e = e.nextElementSibling
        else if ('G' === t) e = e.firstElementChild
        else {
          if ('TITLE' !== t) break
          e = e.nextElementSibling
        }
      } while (e)
      return e
    }
    ;(t.transformPoint = n),
      (t.transformLine = function (t, e) {
        return new $d(n(t.start, e), n(t.end, e))
      }),
      (t.transformPolyline = function (t, e) {
        let r = t instanceof Xd ? t.points : t
        return Array.isArray(r) || (r = []), new Xd(r.map((t) => n(t, e)))
      }),
      (t.transformRectangle = r),
      (t.bbox = function (t, e, n) {
        let i
        const s = t.ownerSVGElement
        if (!s) return new zd(0, 0, 0, 0)
        try {
          i = t.getBBox()
        } catch (e) {
          i = {
            x: t.clientLeft,
            y: t.clientTop,
            width: t.clientWidth,
            height: t.clientHeight,
          }
        }
        return e ? zd.create(i) : r(i, pd(t, n || s))
      }),
      (t.getBBox = i),
      (t.getBoundingOffsetRect = s),
      (t.toGeometryShape = o),
      (t.translateAndAutoOrient = function (t, e, n, r) {
        const s = Vd.create(e),
          o = Vd.create(n)
        if (!r) {
          r = t instanceof SVGSVGElement ? t : t.ownerSVGElement
        }
        const a = fd(t)
        t.setAttribute('transform', '')
        const l = i(t, { target: r }).scale(a.sx, a.sy),
          c = od()
        c.setTranslate(-l.x - l.width / 2, -l.y - l.height / 2)
        const h = od(),
          u = s.angleBetween(o, s.clone().translate(1, 0))
        u && h.setRotate(u, 0, 0)
        const g = od(),
          d = s.clone().move(o, l.width / 2)
        g.setTranslate(2 * s.x - d.x, 2 * s.y - d.y)
        const f = pd(t, r),
          p = od()
        p.setMatrix(
          g.matrix.multiply(
            h.matrix.multiply(c.matrix.multiply(f.scale(a.sx, a.sy))),
          ),
        ),
          t.setAttribute('transform', ld(p.matrix))
      }),
      (t.findShapeNode = a),
      (t.getBBoxV2 = function (t) {
        const e = a(t)
        if (!ng(e)) {
          if (pg(t)) {
            const { left: e, top: n, width: r, height: i } = s(t)
            return new zd(e, n, r, i)
          }
          return new zd(0, 0, 0, 0)
        }
        return o(e).bbox() || zd.create()
      })
  })(em || (em = {}))
  const nm = {
      padding: 3,
      rx: 0,
      ry: 0,
      attrs: { 'stroke-width': 3, stroke: '#FEB663' },
    },
    rm = {
      highlight(t, e, n) {
        const r = im.getHighlighterId(e, n)
        if (im.hasCache(r)) return
        n = Ks({}, n, nm)
        const i = zg.create(e)
        let s, o
        try {
          s = i.toPathData()
        } catch (t) {
          ;(o = em.bbox(i.node, !0)),
            (s = Kg(Object.assign(Object.assign({}, n), o)))
        }
        const a = og('path')
        if (
          (xg(
            a,
            Object.assign(
              {
                d: s,
                'pointer-events': 'none',
                'vector-effect': 'non-scaling-stroke',
                fill: 'none',
              },
              n.attrs ? Pg(n.attrs) : null,
            ),
          ),
          t.isEdgeElement(e))
        )
          xg(a, 'd', t.getConnectionPathData())
        else {
          let e = i.getTransformToElement(t.container)
          const r = n.padding
          if (r) {
            null == o && (o = em.bbox(i.node, !0))
            const t = o.x + o.width / 2,
              n = o.y + o.height / 2
            o = em.transformRectangle(o, e)
            const s = Math.max(o.width, 1),
              a = Math.max(o.height, 1),
              l = (s + r) / s,
              c = (a + r) / a,
              h = sd({ a: l, b: 0, c: 0, d: c, e: t - l * t, f: n - c * n })
            e = e.multiply(h)
          }
          ud(a, e)
        }
        Zu(a, Yp.prefix('highlight-stroke'))
        const l = t.cell,
          c = () => im.removeHighlighter(r)
        l.on('removed', c),
          l.model && l.model.on('reseted', c),
          t.container.appendChild(a),
          im.setCache(r, a)
      },
      unhighlight(t, e, n) {
        im.removeHighlighter(im.getHighlighterId(e, n))
      },
    }
  var im
  !(function (t) {
    t.getHighlighterId = function (t, e) {
      return eg(t), t.id + JSON.stringify(e)
    }
    const e = {}
    ;(t.setCache = function (t, n) {
      e[t] = n
    }),
      (t.hasCache = function (t) {
        return null != e[t]
      }),
      (t.removeHighlighter = function (t) {
        const n = e[t]
        n && (ug(n), delete e[t])
      })
  })(im || (im = {}))
  var sm,
    om = Object.freeze({
      __proto__: null,
      className: Kp,
      opacity: tm,
      stroke: rm,
    })
  function am(t, e = {}) {
    return new Vd(Mu(e.x, t.width), Mu(e.y, t.height))
  }
  function lm(t, e, n) {
    return Object.assign({ angle: e, position: t.toJSON() }, n)
  }
  !(function (t) {
    t.check = function (t, e) {
      if ('function' != typeof e.highlight)
        throw new Error(
          `Highlighter '${t}' is missing required \`highlight()\` method`,
        )
      if ('function' != typeof e.unhighlight)
        throw new Error(
          `Highlighter '${t}' is missing required \`unhighlight()\` method`,
        )
    }
  })(sm || (sm = {})),
    (function (t) {
      ;(t.presets = om),
        (t.registry = hf.create({ type: 'highlighter' })),
        t.registry.register(t.presets, !0)
    })(sm || (sm = {}))
  function cm(t, e, n, r) {
    const i = e.getCenter(),
      s = e.getTopCenter(),
      o = e.width / e.height,
      a = Fd.fromRect(e),
      l = t.length
    return t.map((t, e) => {
      const c = n + r(e, l),
        h = s.clone().rotate(-c, i).scale(o, 1, i),
        u = t.compensateRotate ? -a.tangentTheta(h) : 0
      return (
        (t.dx || t.dy) && h.translate(t.dx || 0, t.dy || 0),
        t.dr && h.move(i, t.dr),
        lm(h.round(), u, t)
      )
    })
  }
  var hm = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  function um(t, e, n, r) {
    const i = new $d(e, n),
      s = t.length
    return t.map((t, e) => {
      var { strict: n } = t,
        o = hm(t, ['strict'])
      const a = n || r.strict ? (e + 1) / (s + 1) : (e + 0.5) / s,
        l = i.pointAt(a)
      return (
        (o.dx || o.dy) && l.translate(o.dx || 0, o.dy || 0), lm(l.round(), 0, o)
      )
    })
  }
  var gm,
    dm = Object.freeze({
      __proto__: null,
      absolute: (t, e) =>
        t.map(({ x: t, y: n, angle: r }) => lm(am(e, { x: t, y: n }), r || 0)),
      ellipse: (t, e, n) => {
        const r = n.start || 0,
          i = n.step || 20
        return cm(t, e, r, (t, e) => (t + 0.5 - e / 2) * i)
      },
      ellipseSpread: (t, e, n) => {
        const r = n.start || 0,
          i = n.step || 360 / t.length
        return cm(t, e, r, (t) => t * i)
      },
      line: (t, e, n) =>
        um(
          t,
          am(e, n.start || e.getOrigin()),
          am(e, n.end || e.getCorner()),
          n,
        ),
      left: (t, e, n) => um(t, e.getTopLeft(), e.getBottomLeft(), n),
      right: (t, e, n) => um(t, e.getTopRight(), e.getBottomRight(), n),
      top: (t, e, n) => um(t, e.getTopLeft(), e.getTopRight(), n),
      bottom: (t, e, n) => um(t, e.getBottomLeft(), e.getBottomRight(), n),
    })
  !(function (t) {
    ;(t.presets = dm),
      (t.registry = hf.create({ type: 'port layout' })),
      t.registry.register(t.presets, !0)
  })(gm || (gm = {}))
  const fm = {
    position: { x: 0, y: 0 },
    angle: 0,
    attrs: { '.': { y: '0', 'text-anchor': 'start' } },
  }
  function pm(t, e) {
    const { x: n, y: r, angle: i, attrs: s } = e || {}
    return Ks({}, { angle: i, attrs: s, position: { x: n, y: r } }, t, fm)
  }
  function mm(t, e, n, r) {
    const i = null != r.offset ? r.offset : 15,
      s = e.getCenter().theta(t),
      o = vm(e)
    let a,
      l,
      c,
      h,
      u = 0
    return (
      s < o[1] || s > o[2]
        ? ((a = '.3em'), (l = i), (c = 0), (h = 'start'))
        : s < o[0]
        ? ((a = '0'),
          (l = 0),
          (c = -i),
          n ? ((u = -90), (h = 'start')) : (h = 'middle'))
        : s < o[3]
        ? ((a = '.3em'), (l = -i), (c = 0), (h = 'end'))
        : ((a = '.6em'),
          (l = 0),
          (c = i),
          n ? ((u = 90), (h = 'start')) : (h = 'middle')),
      pm(
        {
          position: { x: Math.round(l), y: Math.round(c) },
          angle: u,
          attrs: { '.': { y: a, 'text-anchor': h } },
        },
        r,
      )
    )
  }
  function ym(t, e, n, r) {
    const i = null != r.offset ? r.offset : 15,
      s = e.getCenter().theta(t),
      o = vm(e)
    let a,
      l,
      c,
      h,
      u = 0
    return (
      s < o[1] || s > o[2]
        ? ((a = '.3em'), (l = -i), (c = 0), (h = 'end'))
        : s < o[0]
        ? ((a = '.6em'),
          (l = 0),
          (c = i),
          n ? ((u = 90), (h = 'start')) : (h = 'middle'))
        : s < o[3]
        ? ((a = '.3em'), (l = i), (c = 0), (h = 'start'))
        : ((a = '0em'),
          (l = 0),
          (c = -i),
          n ? ((u = -90), (h = 'start')) : (h = 'middle')),
      pm(
        {
          position: { x: Math.round(l), y: Math.round(c) },
          angle: u,
          attrs: { '.': { y: a, 'text-anchor': h } },
        },
        r,
      )
    )
  }
  function vm(t) {
    const e = t.getCenter(),
      n = e.theta(t.getTopLeft()),
      r = e.theta(t.getBottomLeft()),
      i = e.theta(t.getBottomRight())
    return [n, e.theta(t.getTopRight()), i, r]
  }
  function bm(t, e, n) {
    const r = null != n.offset ? n.offset : 20,
      i = new Vd(0, 0),
      s = -t.theta(i)
    let o,
      a = '.3em',
      l = s
    return (
      (s + 90) % 180 == 0
        ? ((o = e ? 'end' : 'middle'), e || -270 !== s || (a = '0em'))
        : s > -270 && s < -90
        ? ((o = 'start'), (l = s - 180))
        : (o = 'end'),
      pm(
        {
          position: t.clone().move(i, r).diff(t).round().round().toJSON(),
          angle: e ? l : 0,
          attrs: { '.': { y: a, 'text-anchor': o } },
        },
        n,
      )
    )
  }
  var xm,
    wm,
    Pm,
    Am = Object.freeze({
      __proto__: null,
      manual: (t, e, n) => pm({ position: e.getTopLeft() }, n),
      left: (t, e, n) =>
        pm(
          {
            position: { x: -15, y: 0 },
            attrs: { '.': { y: '.3em', 'text-anchor': 'end' } },
          },
          n,
        ),
      right: (t, e, n) =>
        pm(
          {
            position: { x: 15, y: 0 },
            attrs: { '.': { y: '.3em', 'text-anchor': 'start' } },
          },
          n,
        ),
      top: (t, e, n) =>
        pm(
          {
            position: { x: 0, y: -15 },
            attrs: { '.': { 'text-anchor': 'middle' } },
          },
          n,
        ),
      bottom: (t, e, n) =>
        pm(
          {
            position: { x: 0, y: 15 },
            attrs: { '.': { y: '.6em', 'text-anchor': 'middle' } },
          },
          n,
        ),
      outside: (t, e, n) => mm(t, e, !1, n),
      outsideOriented: (t, e, n) => mm(t, e, !0, n),
      inside: (t, e, n) => ym(t, e, !1, n),
      insideOriented: (t, e, n) => ym(t, e, !0, n),
      radial: (t, e, n) => bm(t.diff(e.getCenter()), !1, n),
      radialOriented: (t, e, n) => bm(t.diff(e.getCenter()), !0, n),
    })
  !(function (t) {
    ;(t.presets = Am),
      (t.registry = hf.create({ type: 'port label layout' })),
      t.registry.register(t.presets, !0)
  })(xm || (xm = {}))
  class Cm extends bu {
    constructor() {
      super(), (this.cid = wm.uniqueId()), (Cm.views[this.cid] = this)
    }
    get priority() {
      return 2
    }
    confirmUpdate(t, e) {
      return 0
    }
    empty(t = this.container) {
      return gg(t), this
    }
    unmount(t = this.container) {
      return ug(t), this
    }
    remove(t = this.container) {
      return (
        t === this.container &&
          (this.removeEventListeners(document),
          this.onRemove(),
          delete Cm.views[this.cid]),
        this.unmount(t),
        this
      )
    }
    onRemove() {}
    setClass(t, e = this.container) {
      e.classList.value = Array.isArray(t) ? t.join(' ') : t
    }
    addClass(t, e = this.container) {
      return Zu(e, Array.isArray(t) ? t.join(' ') : t), this
    }
    removeClass(t, e = this.container) {
      return Ku(e, Array.isArray(t) ? t.join(' ') : t), this
    }
    setStyle(t, e = this.container) {
      return Rg(e, t), this
    }
    setAttrs(t, e = this.container) {
      return null != t && null != e && xg(e, t), this
    }
    findAttr(t, e = this.container) {
      let n = e
      for (; n && 1 === n.nodeType; ) {
        const e = n.getAttribute(t)
        if (null != e) return e
        if (n === this.container) return null
        n = n.parentNode
      }
      return null
    }
    find(t, e = this.container, n = this.selectors) {
      return Cm.find(t, e, n).elems
    }
    findOne(t, e = this.container, n = this.selectors) {
      const r = this.find(t, e, n)
      return r.length > 0 ? r[0] : null
    }
    findByAttr(t, e = this.container) {
      let n = e
      for (; n && n.getAttribute; ) {
        const e = n.getAttribute(t)
        if ((null != e || n === this.container) && 'false' !== e) return n
        n = n.parentNode
      }
      return null
    }
    getSelector(t, e) {
      let n
      if (t === this.container) return 'string' == typeof e && (n = `> ${e}`), n
      if (t) {
        const r = lg(t) + 1
        ;(n = `${t.tagName.toLowerCase()}:nth-child(${r})`),
          e && (n += ` > ${e}`),
          (n = this.getSelector(t.parentNode, n))
      }
      return n
    }
    prefixClassName(t) {
      return Yp.prefix(t)
    }
    delegateEvents(t, e) {
      if (null == t) return this
      e || this.undelegateEvents()
      const n = /^(\S+)\s*(.*)$/
      return (
        Object.keys(t).forEach((e) => {
          const r = e.match(n)
          if (null == r) return
          const i = this.getEventHandler(t[e])
          'function' == typeof i && this.delegateEvent(r[1], r[2], i)
        }),
        this
      )
    }
    undelegateEvents() {
      return wd.off(this.container, this.getEventNamespace()), this
    }
    delegateDocumentEvents(t, e) {
      return this.addEventListeners(document, t, e), this
    }
    undelegateDocumentEvents() {
      return this.removeEventListeners(document), this
    }
    delegateEvent(t, e, n) {
      return wd.on(this.container, t + this.getEventNamespace(), e, n), this
    }
    undelegateEvent(t, e, n) {
      const r = t + this.getEventNamespace()
      return (
        null == e
          ? wd.off(this.container, r)
          : 'string' == typeof e
          ? wd.off(this.container, r, e, n)
          : wd.off(this.container, r, e),
        this
      )
    }
    addEventListeners(t, e, n) {
      if (null == e) return this
      const r = this.getEventNamespace()
      return (
        Object.keys(e).forEach((i) => {
          const s = this.getEventHandler(e[i])
          'function' == typeof s && wd.on(t, i + r, n, s)
        }),
        this
      )
    }
    removeEventListeners(t) {
      return null != t && wd.off(t, this.getEventNamespace()), this
    }
    getEventNamespace() {
      return `.${Yp.prefixCls}-event-${this.cid}`
    }
    getEventHandler(t) {
      let e
      if ('string' == typeof t) {
        const n = this[t]
        'function' == typeof n && (e = (...t) => n.call(this, ...t))
      } else e = (...e) => t.call(this, ...e)
      return e
    }
    getEventTarget(t, e = {}) {
      const { target: n, type: r, clientX: i = 0, clientY: s = 0 } = t
      return e.fromPoint || 'touchmove' === r || 'touchend' === r
        ? document.elementFromPoint(i, s)
        : n
    }
    stopPropagation(t) {
      return this.setEventData(t, { propagationStopped: !0 }), this
    }
    isPropagationStopped(t) {
      return !0 === this.getEventData(t).propagationStopped
    }
    getEventData(t) {
      return this.eventData(t)
    }
    setEventData(t, e) {
      return this.eventData(t, e)
    }
    eventData(t, e) {
      if (null == t) throw new TypeError('Event object required')
      let n = t.data
      const r = `__${this.cid}__`
      return null == e
        ? null == n
          ? {}
          : n[r] || {}
        : (null == n && (n = t.data = {}),
          null == n[r]
            ? (n[r] = Object.assign({}, e))
            : (n[r] = Object.assign(Object.assign({}, n[r]), e)),
          n[r])
    }
    normalizeEvent(t) {
      return Cm.normalizeEvent(t)
    }
  }
  !(function (t) {
    ;(t.createElement = function (t, e) {
      return e ? og(t || 'g') : sg(t || 'div')
    }),
      (t.find = function (t, e, n) {
        if (!t || '.' === t) return { elems: [e] }
        if (n) {
          const e = n[t]
          if (e) return { elems: Array.isArray(e) ? e : [e] }
        }
        {
          const n = t.includes('>') ? `:scope ${t}` : t
          return {
            isCSSSelector: !0,
            elems: Array.prototype.slice.call(e.querySelectorAll(n)),
          }
        }
      }),
      (t.normalizeEvent = function (t) {
        let e = t
        const n = t.originalEvent,
          r = n && n.changedTouches && n.changedTouches[0]
        if (r) {
          for (const e in t) void 0 === r[e] && (r[e] = t[e])
          e = r
        }
        const i = e.target
        if (i) {
          const t = i.correspondingUseElement
          t && (e.target = t)
        }
        return e
      })
  })(Cm || (Cm = {})),
    (function (t) {
      ;(t.views = {}),
        (t.getView = function (e) {
          return t.views[e] || null
        })
    })(Cm || (Cm = {})),
    (function (t) {
      let e = 0
      t.uniqueId = function () {
        const t = `v${e}`
        return (e += 1), t
      }
    })(wm || (wm = {}))
  class Om {
    constructor(t) {
      ;(this.view = t), this.clean()
    }
    clean() {
      this.elemCache && this.elemCache.dispose(),
        (this.elemCache = new Ld()),
        (this.pathCache = {})
    }
    get(t) {
      return (
        this.elemCache.has(t) || this.elemCache.set(t, {}),
        this.elemCache.get(t)
      )
    }
    getData(t) {
      const e = this.get(t)
      return e.data || (e.data = {}), e.data
    }
    getMatrix(t) {
      const e = this.get(t)
      if (null == e.matrix) {
        const n = this.view.container
        e.matrix = (function (t, e) {
          let n = sd()
          if (ng(e) && ng(t)) {
            let r = t
            const i = []
            for (; r && r !== e; ) {
              const t = ad(r.getAttribute('transform') || null)
              i.push(t), (r = r.parentNode)
            }
            i.reverse().forEach((t) => {
              n = n.multiply(t)
            })
          }
          return n
        })(t, n)
      }
      return sd(e.matrix)
    }
    getShape(t) {
      const e = this.get(t)
      return (
        null == e.shape && (e.shape = em.toGeometryShape(t)), e.shape.clone()
      )
    }
    getBoundingRect(t) {
      const e = this.get(t)
      return (
        null == e.boundingRect && (e.boundingRect = em.getBBoxV2(t)),
        e.boundingRect.clone()
      )
    }
  }
  !(function (t) {
    function e(t) {
      return null != t && 'string' == typeof t
    }
    function n(t, e = { ns: rg.svg }) {
      const n = document.createDocumentFragment(),
        r = {},
        i = {},
        s = [{ markup: Array.isArray(t) ? t : [t], parent: n, ns: e.ns }]
      for (; s.length > 0; ) {
        const t = s.pop()
        let e = t.ns || rg.svg
        const n = t.markup,
          o = t.parent
        n.forEach((t) => {
          const n = t.tagName
          if (!n) throw new TypeError('Invalid tagName')
          t.ns && (e = t.ns)
          const a = e ? sg(n, e) : ig(n),
            l = t.attrs
          l && xg(a, Pg(l))
          const c = t.style
          c && Rg(a, c)
          const h = t.className
          null != h &&
            a.setAttribute('class', Array.isArray(h) ? h.join(' ') : h),
            t.textContent && (a.textContent = t.textContent)
          const u = t.selector
          if (null != u) {
            if (i[u]) throw new TypeError('Selector must be unique')
            i[u] = a
          }
          if (t.groupSelector) {
            let e = t.groupSelector
            Array.isArray(e) || (e = [e]),
              e.forEach((t) => {
                r[t] || (r[t] = []), r[t].push(a)
              })
          }
          o.appendChild(a)
          const g = t.children
          Array.isArray(g) && s.push({ ns: e, markup: g, parent: a })
        })
      }
      return (
        Object.keys(r).forEach((t) => {
          if (i[t]) throw new Error('Ambiguous group selector')
          i[t] = r[t]
        }),
        { fragment: n, selectors: i, groups: r }
      )
    }
    function r(t) {
      return t instanceof SVGElement ? og('g') : ig('div')
    }
    ;(t.isJSONMarkup = function (t) {
      return null != t && !e(t)
    }),
      (t.isStringMarkup = e),
      (t.clone = function (t) {
        return null == t || e(t) ? t : Zi(t)
      }),
      (t.sanitize = function (t) {
        return `${t}`
          .trim()
          .replace(/[\r|\n]/g, ' ')
          .replace(/>\s+</g, '><')
      }),
      (t.parseJSONMarkup = n),
      (t.renderMarkup = function (t) {
        if (e(t)) {
          const e = zg.createVectors(t),
            n = e.length
          if (1 === n) return { elem: e[0].node }
          if (n > 1) {
            const t = r(e[0].node)
            return (
              e.forEach((e) => {
                t.appendChild(e.node)
              }),
              { elem: t }
            )
          }
          return {}
        }
        const i = n(t),
          s = i.fragment
        let o = null
        return (
          s.childNodes.length > 1
            ? ((o = r(s.firstChild)), o.appendChild(s))
            : (o = s.firstChild),
          { elem: o, selectors: i.selectors }
        )
      }),
      (t.parseLabelStringMarkup = function (t) {
        const e = zg.createVectors(t),
          n = document.createDocumentFragment()
        for (let t = 0, r = e.length; t < r; t += 1) {
          const r = e[t].node
          n.appendChild(r)
        }
        return { fragment: n, selectors: {} }
      })
  })(Pm || (Pm = {})),
    (function (t) {
      t.getSelector = function t(e, n, r) {
        if (null != e) {
          let i
          const s = e.tagName.toLowerCase()
          if (e === n)
            return (i = 'string' == typeof r ? `> ${s} > ${r}` : `> ${s}`), i
          const o = e.parentNode
          if (o && o.childNodes.length > 1) {
            i = `${s}:nth-child(${lg(e) + 1})`
          } else i = s
          return r && (i += ` > ${r}`), t(e.parentNode, n, i)
        }
        return r
      }
    })(Pm || (Pm = {})),
    (function (t) {
      ;(t.getPortContainerMarkup = function () {
        return 'g'
      }),
        (t.getPortMarkup = function () {
          return {
            tagName: 'circle',
            selector: 'circle',
            attrs: { r: 10, fill: '#FFFFFF', stroke: '#000000' },
          }
        }),
        (t.getPortLabelMarkup = function () {
          return {
            tagName: 'text',
            selector: 'text',
            attrs: { fill: '#000000' },
          }
        })
    })(Pm || (Pm = {})),
    (function (t) {
      t.getEdgeMarkup = function () {
        return [
          {
            tagName: 'path',
            selector: 'wrap',
            groupSelector: 'lines',
            attrs: {
              fill: 'none',
              cursor: 'pointer',
              stroke: 'transparent',
              strokeLinecap: 'round',
            },
          },
          {
            tagName: 'path',
            selector: 'line',
            groupSelector: 'lines',
            attrs: { fill: 'none', pointerEvents: 'none' },
          },
        ]
      }
    })(Pm || (Pm = {})),
    (function (t) {
      t.getForeignObjectMarkup = function (t = !1) {
        return {
          tagName: 'foreignObject',
          selector: 'fo',
          children: [
            {
              ns: rg.xhtml,
              tagName: 'body',
              selector: 'foBody',
              attrs: { xmlns: rg.xhtml },
              style: {
                width: '100%',
                height: '100%',
                background: 'transparent',
              },
              children: t
                ? []
                : [
                    {
                      tagName: 'div',
                      selector: 'foContent',
                      style: { width: '100%', height: '100%' },
                    },
                  ],
            },
          ],
        }
      }
    })(Pm || (Pm = {}))
  class Em {
    constructor(t) {
      this.view = t
    }
    get cell() {
      return this.view.cell
    }
    getDefinition(t) {
      return this.cell.getAttrDefinition(t)
    }
    processAttrs(t, e) {
      let n, r, i, s
      const o = []
      return (
        Object.keys(e).forEach((r) => {
          const i = e[r],
            s = this.getDefinition(r),
            a = au(Jp.isValidDefinition, this.view, s, i, {
              elem: t,
              attrs: e,
              cell: this.cell,
              view: this.view,
            })
          if (s && a)
            'string' == typeof s
              ? (null == n && (n = {}), (n[s] = i))
              : null !== i && o.push({ name: r, definition: s })
          else {
            null == n && (n = {})
            const t = mg.includes(r) ? r : wu(r)
            n[t] = i
          }
        }),
        o.forEach(({ name: t, definition: n }) => {
          const o = e[t]
          'function' == typeof n.set && (null == r && (r = {}), (r[t] = o))
          'function' == typeof n.offset && (null == i && (i = {}), (i[t] = o))
          'function' == typeof n.position && (null == s && (s = {}), (s[t] = o))
        }),
        { raw: e, normal: n, set: r, offset: i, position: s }
      )
    }
    mergeProcessedAttrs(t, e) {
      ;(t.set = Object.assign(Object.assign({}, t.set), e.set)),
        (t.position = Object.assign(Object.assign({}, t.position), e.position)),
        (t.offset = Object.assign(Object.assign({}, t.offset), e.offset))
      const n = t.normal && t.normal.transform
      null != n && e.normal && (e.normal.transform = n), (t.normal = e.normal)
    }
    findAttrs(t, e, n, r) {
      const i = [],
        s = new Ld()
      return (
        Object.keys(t).forEach((o) => {
          const a = t[o]
          if (!$n(a)) return
          const { isCSSSelector: l, elems: c } = Cm.find(o, e, r)
          n[o] = c
          for (let t = 0, e = c.length; t < e; t += 1) {
            const n = c[t],
              h = r && r[o] === n,
              u = s.get(n)
            if (u) {
              u.array ||
                (i.push(n),
                (u.array = !0),
                (u.attrs = [u.attrs]),
                (u.priority = [u.priority]))
              const t = u.attrs,
                r = u.priority
              if (h) t.unshift(a), r.unshift(-1)
              else {
                const n = Ic(r, l ? -1 : e)
                t.splice(n, 0, a), r.splice(n, 0, e)
              }
            } else
              s.set(n, { elem: n, attrs: a, priority: h ? -1 : e, array: !1 })
          }
        }),
        i.forEach((t) => {
          const e = s.get(t),
            n = e.attrs
          e.attrs = n.reduceRight((t, e) => el(t, e), {})
        }),
        s
      )
    }
    updateRelativeAttrs(t, e, n) {
      const r = e.raw || {}
      let i = e.normal || {}
      const s = e.set,
        o = e.position,
        a = e.offset,
        l = () => ({
          elem: t,
          cell: this.cell,
          view: this.view,
          attrs: r,
          refBBox: n.clone(),
        })
      if (
        (null != s &&
          Object.keys(s).forEach((t) => {
            const e = s[t],
              n = this.getDefinition(t)
            if (null != n) {
              const r = au(n.set, this.view, e, l())
              'object' == typeof r
                ? (i = Object.assign(Object.assign({}, i), r))
                : null != r && (i[t] = r)
            }
          }),
        t instanceof HTMLElement)
      )
        return void this.view.setAttrs(i, t)
      const c = i.transform,
        h = ad(c ? `${c}` : null),
        u = new Vd(h.e, h.f)
      c && (delete i.transform, (h.e = 0), (h.f = 0))
      let g = !1
      null != o &&
        Object.keys(o).forEach((t) => {
          const e = o[t],
            n = this.getDefinition(t)
          if (null != n) {
            const t = au(n.position, this.view, e, l())
            null != t && ((g = !0), u.translate(Vd.create(t)))
          }
        }),
        this.view.setAttrs(i, t)
      let d = !1
      if (null != a) {
        const e = this.view.getBoundingRectOfElement(t)
        if (e.width > 0 && e.height > 0) {
          const n = em.transformRectangle(e, h)
          Object.keys(a).forEach((e) => {
            const i = a[e],
              s = this.getDefinition(e)
            if (null != s) {
              const e = au(s.offset, this.view, i, {
                elem: t,
                cell: this.cell,
                view: this.view,
                attrs: r,
                refBBox: n,
              })
              null != e && ((d = !0), u.translate(Vd.create(e)))
            }
          })
        }
      }
      ;(null != c || g || d) &&
        (u.round(1),
        (h.e = u.x),
        (h.f = u.y),
        t.setAttribute('transform', ld(h)))
    }
    update(t, e, n) {
      const r = {},
        i = this.findAttrs(n.attrs || e, t, r, n.selectors),
        s = n.attrs ? this.findAttrs(e, t, r, n.selectors) : i,
        o = []
      i.each((e) => {
        const i = e.elem,
          a = e.attrs,
          l = this.processAttrs(i, a)
        if (null == l.set && null == l.position && null == l.offset)
          this.view.setAttrs(l.normal, i)
        else {
          const e = s.get(i),
            c = e ? e.attrs : null,
            h = c && null == a.ref ? c.ref : a.ref
          let u
          if (h) {
            if (((u = (r[h] || this.view.find(h, t, n.selectors))[0]), !u))
              throw new Error(`"${h}" reference does not exist.`)
          } else u = null
          const g = {
              node: i,
              refNode: u,
              attributes: c,
              processedAttributes: l,
            },
            d = o.findIndex((t) => t.refNode === i)
          d > -1 ? o.splice(d, 0, g) : o.push(g)
        }
      })
      const a = new Ld()
      let l
      o.forEach((e) => {
        const r = e.node,
          i = e.refNode
        let s
        const o = null != i && null != n.rotatableNode && hg(n.rotatableNode, i)
        if ((i && (s = a.get(i)), !s)) {
          const e = o ? n.rotatableNode : t
          ;(s = i ? em.getBBox(i, { target: e }) : n.rootBBox), i && a.set(i, s)
        }
        let c
        n.attrs && e.attributes
          ? ((c = this.processAttrs(r, e.attributes)),
            this.mergeProcessedAttrs(c, e.processedAttributes))
          : (c = e.processedAttributes)
        let h = s
        o &&
          null != n.rotatableNode &&
          !n.rotatableNode.contains(r) &&
          (l || (l = ad(xg(n.rotatableNode, 'transform'))),
          (h = em.transformRectangle(s, l))),
          this.updateRelativeAttrs(r, c, h)
      })
    }
  }
  class Mm {
    constructor(t, e, n = []) {
      this.view = t
      const r = {},
        i = {}
      let s = 0
      Object.keys(e).forEach((t) => {
        let n = e[t]
        Array.isArray(n) || (n = [n]),
          n.forEach((e) => {
            let n = r[e]
            n || ((s += 1), (n = r[e] = 1 << s)), (i[t] |= n)
          })
      })
      let o = n
      if (
        (Array.isArray(o) || (o = [o]),
        o.forEach((t) => {
          r[t] || ((s += 1), (r[t] = 1 << s))
        }),
        s > 25)
      )
        throw new Error('Maximum number of flags exceeded.')
      ;(this.flags = r), (this.attrs = i), (this.bootstrap = n)
    }
    get cell() {
      return this.view.cell
    }
    getFlag(t) {
      const e = this.flags
      return null == e
        ? 0
        : Array.isArray(t)
        ? t.reduce((t, n) => t | e[n], 0)
        : 0 | e[t]
    }
    hasAction(t, e) {
      return t & this.getFlag(e)
    }
    removeAction(t, e) {
      return t ^ (t & this.getFlag(e))
    }
    getBootstrapFlag() {
      return this.getFlag(this.bootstrap)
    }
    getChangedFlag() {
      let t = 0
      return this.attrs
        ? (Object.keys(this.attrs).forEach((e) => {
            this.cell.hasChanged(e) && (t |= this.attrs[e])
          }),
          t)
        : t
    }
  }
  var Sm = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  class Tm extends Cm {
    constructor(t, e = {}) {
      super(),
        (this.cell = t),
        (this.options = this.ensureOptions(e)),
        (this.graph = this.options.graph),
        (this.attr = new Em(this)),
        (this.flag = new Mm(
          this,
          this.options.actions,
          this.options.bootstrap,
        )),
        (this.cache = new Om(this)),
        this.setContainer(this.ensureContainer()),
        this.setup(),
        this.init()
    }
    static getDefaults() {
      return this.defaults
    }
    static config(t) {
      this.defaults = this.getOptions(t)
    }
    static getOptions(t) {
      const e = (t, e) =>
          null != e
            ? xh([
                ...(Array.isArray(t) ? t : [t]),
                ...(Array.isArray(e) ? e : [e]),
              ])
            : Array.isArray(t)
            ? [...t]
            : [t],
        n = Zi(this.getDefaults()),
        { bootstrap: r, actions: i, events: s, documentEvents: o } = t,
        a = Sm(t, ['bootstrap', 'actions', 'events', 'documentEvents'])
      return (
        r && (n.bootstrap = e(n.bootstrap, r)),
        i &&
          Object.keys(i).forEach((t) => {
            const r = i[t],
              s = n.actions[t]
            r && s ? (n.actions[t] = e(s, r)) : r && (n.actions[t] = e(r))
          }),
        s && (n.events = Object.assign(Object.assign({}, n.events), s)),
        t.documentEvents &&
          (n.documentEvents = Object.assign(
            Object.assign({}, n.documentEvents),
            o,
          )),
        el(n, a)
      )
    }
    get [Symbol.toStringTag]() {
      return Tm.toStringTag
    }
    init() {}
    onRemove() {
      this.removeTools()
    }
    get priority() {
      return this.options.priority
    }
    get rootSelector() {
      return this.options.rootSelector
    }
    getConstructor() {
      return this.constructor
    }
    ensureOptions(t) {
      return this.getConstructor().getOptions(t)
    }
    getContainerTagName() {
      return this.options.isSvgElement ? 'g' : 'div'
    }
    getContainerStyle() {}
    getContainerAttrs() {
      return { 'data-cell-id': this.cell.id, 'data-shape': this.cell.shape }
    }
    getContainerClassName() {
      return this.prefixClassName('cell')
    }
    ensureContainer() {
      return Cm.createElement(
        this.getContainerTagName(),
        this.options.isSvgElement,
      )
    }
    setContainer(t) {
      if (this.container !== t) {
        this.undelegateEvents(),
          (this.container = t),
          null != this.options.events &&
            this.delegateEvents(this.options.events)
        const e = this.getContainerAttrs()
        null != e && this.setAttrs(e, t)
        const n = this.getContainerStyle()
        null != n && this.setStyle(n, t)
        const r = this.getContainerClassName()
        null != r && this.addClass(r, t)
      }
      return this
    }
    isNodeView() {
      return !1
    }
    isEdgeView() {
      return !1
    }
    render() {
      return this
    }
    confirmUpdate(t, e = {}) {
      return 0
    }
    getBootstrapFlag() {
      return this.flag.getBootstrapFlag()
    }
    getFlag(t) {
      return this.flag.getFlag(t)
    }
    hasAction(t, e) {
      return this.flag.hasAction(t, e)
    }
    removeAction(t, e) {
      return this.flag.removeAction(t, e)
    }
    handleAction(t, e, n, r) {
      if (this.hasAction(t, e)) {
        n()
        const i = [e]
        return (
          r && ('string' == typeof r ? i.push(r) : i.push(...r)),
          this.removeAction(t, i)
        )
      }
      return t
    }
    setup() {
      this.cell.on('changed', ({ options: t }) => this.onAttrsChange(t))
    }
    onAttrsChange(t) {
      let e = this.flag.getChangedFlag()
      !t.updated &&
        e &&
        (t.dirty &&
          this.hasAction(e, 'update') &&
          (e |= this.getFlag('render')),
        t.toolId && (t.async = !1),
        null != this.graph && this.graph.renderer.requestViewUpdate(this, e, t))
    }
    parseJSONMarkup(t, e) {
      const n = Pm.parseJSONMarkup(t),
        r = n.selectors,
        i = this.rootSelector
      if (e && i) {
        if (r[i]) throw new Error('Invalid root selector')
        r[i] = e
      }
      return n
    }
    can(t) {
      let e = this.graph.options.interacting
      if (
        ('function' == typeof e && (e = au(e, this.graph, this)),
        'object' == typeof e)
      ) {
        let n = e[t]
        return 'function' == typeof n && (n = au(n, this.graph, this)), !1 !== n
      }
      return 'boolean' == typeof e && e
    }
    cleanCache() {
      return this.cache.clean(), this
    }
    getCache(t) {
      return this.cache.get(t)
    }
    getDataOfElement(t) {
      return this.cache.getData(t)
    }
    getMatrixOfElement(t) {
      return this.cache.getMatrix(t)
    }
    getShapeOfElement(t) {
      return this.cache.getShape(t)
    }
    getBoundingRectOfElement(t) {
      return this.cache.getBoundingRect(t)
    }
    getBBoxOfElement(t) {
      const e = this.getBoundingRectOfElement(t),
        n = this.getMatrixOfElement(t),
        r = this.getRootRotatedMatrix(),
        i = this.getRootTranslatedMatrix()
      return em.transformRectangle(e, i.multiply(r).multiply(n))
    }
    getUnrotatedBBoxOfElement(t) {
      const e = this.getBoundingRectOfElement(t),
        n = this.getMatrixOfElement(t),
        r = this.getRootTranslatedMatrix()
      return em.transformRectangle(e, r.multiply(n))
    }
    getBBox(t = {}) {
      let e
      if (t.useCellGeometry) {
        const t = this.cell,
          n = t.isNode() ? t.getAngle() : 0
        e = t.getBBox().bbox(n)
      } else e = this.getBBoxOfElement(this.container)
      return this.graph.coord.localToGraphRect(e)
    }
    getRootTranslatedMatrix() {
      const t = this.cell,
        e = t.isNode() ? t.getPosition() : { x: 0, y: 0 }
      return sd().translate(e.x, e.y)
    }
    getRootRotatedMatrix() {
      let t = sd()
      const e = this.cell,
        n = e.isNode() ? e.getAngle() : 0
      if (n) {
        const r = e.getBBox(),
          i = r.width / 2,
          s = r.height / 2
        t = t.translate(i, s).rotate(n).translate(-i, -s)
      }
      return t
    }
    findMagnet(t = this.container) {
      return this.findByAttr('magnet', t)
    }
    updateAttrs(t, e, n = {}) {
      null == n.rootBBox && (n.rootBBox = new zd()),
        null == n.selectors && (n.selectors = this.selectors),
        this.attr.update(t, e, n)
    }
    isEdgeElement(t) {
      return this.cell.isEdge() && (null == t || t === this.container)
    }
    prepareHighlight(t, e = {}) {
      const n = t || this.container
      return (e.partial = n === this.container), n
    }
    highlight(t, e = {}) {
      const n = this.prepareHighlight(t, e)
      return (
        this.notify('cell:highlight', {
          magnet: n,
          options: e,
          view: this,
          cell: this.cell,
        }),
        this.isEdgeView()
          ? this.notify('edge:highlight', {
              magnet: n,
              options: e,
              view: this,
              edge: this.cell,
              cell: this.cell,
            })
          : this.isNodeView() &&
            this.notify('node:highlight', {
              magnet: n,
              options: e,
              view: this,
              node: this.cell,
              cell: this.cell,
            }),
        this
      )
    }
    unhighlight(t, e = {}) {
      const n = this.prepareHighlight(t, e)
      return (
        this.notify('cell:unhighlight', {
          magnet: n,
          options: e,
          view: this,
          cell: this.cell,
        }),
        this.isNodeView()
          ? this.notify('node:unhighlight', {
              magnet: n,
              options: e,
              view: this,
              node: this.cell,
              cell: this.cell,
            })
          : this.isEdgeView() &&
            this.notify('edge:unhighlight', {
              magnet: n,
              options: e,
              view: this,
              edge: this.cell,
              cell: this.cell,
            }),
        this
      )
    }
    notifyUnhighlight(t, e) {}
    getEdgeTerminal(t, e, n, r, i) {
      const s = this.cell,
        o = this.findAttr('port', t),
        a = t.getAttribute('data-selector'),
        l = { cell: s.id }
      return (
        null != a && (l.magnet = a),
        null != o
          ? ((l.port = o),
            s.isNode() &&
              (s.hasPort(o) || null != a || (l.selector = this.getSelector(t))))
          : null == a &&
            this.container !== t &&
            (l.selector = this.getSelector(t)),
        l
      )
    }
    getMagnetFromEdgeTerminal(t) {
      const e = this.cell,
        n = this.container,
        r = t.port
      let i,
        s = t.magnet
      return (
        null != r && e.isNode() && e.hasPort(r)
          ? (i = this.findPortElem(r, s) || n)
          : (s || (s = t.selector),
            s || null == r || (s = `[port="${r}"]`),
            (i = this.findOne(s, n, this.selectors))),
        i
      )
    }
    hasTools(t) {
      const e = this.tools
      return null != e && (null == t || e.name === t)
    }
    addTools(t) {
      if (!this.can('toolsAddable')) return this
      if ((this.removeTools(), t)) {
        const e = jm.isToolsView(t) ? t : new jm(t)
        ;(this.tools = e), e.config({ view: this }), e.mount()
      }
      return this
    }
    updateTools(t = {}) {
      return this.tools && this.tools.update(t), this
    }
    removeTools() {
      return this.tools && (this.tools.remove(), (this.tools = null)), this
    }
    hideTools() {
      return this.tools && this.tools.hide(), this
    }
    showTools() {
      return this.tools && this.tools.show(), this
    }
    renderTools() {
      const t = this.cell.getTools()
      return this.addTools(t), this
    }
    notify(t, e) {
      return this.trigger(t, e), this.graph.trigger(t, e), this
    }
    getEventArgs(t, e, n) {
      const r = this,
        i = r.cell
      return null == e || null == n
        ? { e: t, view: r, cell: i }
        : { e: t, x: e, y: n, view: r, cell: i }
    }
    onClick(t, e, n) {
      this.notify('cell:click', this.getEventArgs(t, e, n))
    }
    onDblClick(t, e, n) {
      this.notify('cell:dblclick', this.getEventArgs(t, e, n))
    }
    onContextMenu(t, e, n) {
      this.notify('cell:contextmenu', this.getEventArgs(t, e, n))
    }
    onMouseDown(t, e, n) {
      this.cell.model &&
        ((this.cachedModelForMouseEvent = this.cell.model),
        this.cachedModelForMouseEvent.startBatch('mouse')),
        this.notify('cell:mousedown', this.getEventArgs(t, e, n))
    }
    onMouseUp(t, e, n) {
      this.notify('cell:mouseup', this.getEventArgs(t, e, n)),
        this.cachedModelForMouseEvent &&
          (this.cachedModelForMouseEvent.stopBatch('mouse', {
            cell: this.cell,
          }),
          (this.cachedModelForMouseEvent = null))
    }
    onMouseMove(t, e, n) {
      this.notify('cell:mousemove', this.getEventArgs(t, e, n))
    }
    onMouseOver(t) {
      this.notify('cell:mouseover', this.getEventArgs(t))
    }
    onMouseOut(t) {
      this.notify('cell:mouseout', this.getEventArgs(t))
    }
    onMouseEnter(t) {
      this.notify('cell:mouseenter', this.getEventArgs(t))
    }
    onMouseLeave(t) {
      this.notify('cell:mouseleave', this.getEventArgs(t))
    }
    onMouseWheel(t, e, n, r) {
      this.notify(
        'cell:mousewheel',
        Object.assign({ delta: r }, this.getEventArgs(t, e, n)),
      )
    }
    onCustomEvent(t, e, n, r) {
      this.notify(
        'cell:customevent',
        Object.assign({ name: e }, this.getEventArgs(t, n, r)),
      ),
        this.notify(e, Object.assign({}, this.getEventArgs(t, n, r)))
    }
    onMagnetMouseDown(t, e, n, r) {}
    onMagnetDblClick(t, e, n, r) {}
    onMagnetContextMenu(t, e, n, r) {}
    onLabelMouseDown(t, e, n) {}
    checkMouseleave(t) {
      const e = this.getEventTarget(t, { fromPoint: !0 }),
        n = this.graph.findViewByElem(e)
      n !== this && (this.onMouseLeave(t), n && n.onMouseEnter(t))
    }
  }
  ;(Tm.defaults = {
    isSvgElement: !0,
    rootSelector: 'root',
    priority: 0,
    bootstrap: [],
    actions: {},
  }),
    (function (t) {
      ;(t.Flag = Mm), (t.Attr = Em)
    })(Tm || (Tm = {})),
    (function (t) {
      ;(t.toStringTag = `X6.${t.name}`),
        (t.isCellView = function (e) {
          if (null == e) return !1
          if (e instanceof t) return !0
          const n = e[Symbol.toStringTag],
            r = e
          return (
            (null == n || n === t.toStringTag) &&
            'function' == typeof r.isNodeView &&
            'function' == typeof r.isEdgeView &&
            'function' == typeof r.confirmUpdate
          )
        })
    })(Tm || (Tm = {})),
    (function (t) {
      ;(t.priority = function (t) {
        return function (e) {
          e.config({ priority: t })
        }
      }),
        (t.bootstrap = function (t) {
          return function (e) {
            e.config({ bootstrap: t })
          }
        })
    })(Tm || (Tm = {})),
    (function (t) {
      t.registry = hf.create({ type: 'view' })
    })(Tm || (Tm = {}))
  class jm extends Cm {
    constructor(t = {}) {
      super(),
        (this.svgContainer = this.createContainer(!0, t)),
        (this.htmlContainer = this.createContainer(!1, t)),
        this.config(t)
    }
    get name() {
      return this.options.name
    }
    get graph() {
      return this.cellView.graph
    }
    get cell() {
      return this.cellView.cell
    }
    get [Symbol.toStringTag]() {
      return jm.toStringTag
    }
    createContainer(t, e) {
      const n = t ? Cm.createElement('g', !0) : Cm.createElement('div', !1)
      return (
        Zu(n, this.prefixClassName('cell-tools')),
        e.className && Zu(n, e.className),
        n
      )
    }
    config(t) {
      if (
        ((this.options = Object.assign(Object.assign({}, this.options), t)),
        !Tm.isCellView(t.view) || t.view === this.cellView)
      )
        return this
      ;(this.cellView = t.view),
        this.cell.isEdge()
          ? (Zu(this.svgContainer, this.prefixClassName('edge-tools')),
            Zu(this.htmlContainer, this.prefixClassName('edge-tools')))
          : this.cell.isNode() &&
            (Zu(this.svgContainer, this.prefixClassName('node-tools')),
            Zu(this.htmlContainer, this.prefixClassName('node-tools'))),
        this.svgContainer.setAttribute('data-cell-id', this.cell.id),
        this.htmlContainer.setAttribute('data-cell-id', this.cell.id),
        this.name &&
          (this.svgContainer.setAttribute('data-tools-name', this.name),
          this.htmlContainer.setAttribute('data-tools-name', this.name))
      const e = this.options.items
      if (!Array.isArray(e)) return this
      this.tools = []
      const n = []
      e.forEach((t) => {
        if (jm.ToolItem.isToolItem(t))
          'vertices' === t.name ? n.unshift(t) : n.push(t)
        else {
          'vertices' === ('object' == typeof t ? t.name : t)
            ? n.unshift(t)
            : n.push(t)
        }
      })
      for (let t = 0; t < n.length; t += 1) {
        const e = n[t]
        let r
        if (jm.ToolItem.isToolItem(e)) r = e
        else {
          const t = 'object' == typeof e ? e.name : e,
            n = ('object' == typeof e && e.args) || {}
          if (t)
            if (this.cell.isNode()) {
              const e = Km.registry.get(t)
              if (!e) return Km.registry.onNotFound(t)
              r = new e(n)
            } else if (this.cell.isEdge()) {
              const e = Qm.registry.get(t)
              if (!e) return Qm.registry.onNotFound(t)
              r = new e(n)
            }
        }
        if (r) {
          r.config(this.cellView, this), r.render()
          ;(!1 !== r.options.isSVGElement
            ? this.svgContainer
            : this.htmlContainer
          ).appendChild(r.container),
            this.tools.push(r)
        }
      }
      return this
    }
    update(t = {}) {
      const e = this.tools
      return (
        e &&
          e.forEach((e) => {
            t.toolId !== e.cid && e.isVisible() && e.update()
          }),
        this
      )
    }
    focus(t) {
      const e = this.tools
      return (
        e &&
          e.forEach((e) => {
            t === e ? e.show() : e.hide()
          }),
        this
      )
    }
    blur(t) {
      const e = this.tools
      return (
        e &&
          e.forEach((e) => {
            e === t || e.isVisible() || (e.show(), e.update())
          }),
        this
      )
    }
    hide() {
      return this.focus(null)
    }
    show() {
      return this.blur(null)
    }
    remove() {
      const t = this.tools
      return (
        t && (t.forEach((t) => t.remove()), (this.tools = null)),
        ug(this.svgContainer),
        ug(this.htmlContainer),
        super.remove()
      )
    }
    mount() {
      const t = this.tools,
        e = this.cellView
      if (e && t) {
        const n = t.some((t) => !1 !== t.options.isSVGElement),
          r = t.some((t) => !1 === t.options.isSVGElement)
        if (n) {
          ;(this.options.local
            ? e.container
            : e.graph.view.decorator
          ).appendChild(this.svgContainer)
        }
        r && this.graph.container.appendChild(this.htmlContainer)
      }
      return this
    }
  }
  !(function (t) {
    ;(t.toStringTag = `X6.${t.name}`),
      (t.isToolsView = function (e) {
        if (null == e) return !1
        if (e instanceof t) return !0
        const n = e[Symbol.toStringTag],
          r = e
        return (
          (null == n || n === t.toStringTag) &&
          null != r.graph &&
          null != r.cell &&
          'function' == typeof r.config &&
          'function' == typeof r.update &&
          'function' == typeof r.focus &&
          'function' == typeof r.blur &&
          'function' == typeof r.show &&
          'function' == typeof r.hide
        )
      })
  })(jm || (jm = {})),
    (function (t) {
      class e extends Cm {
        constructor(t = {}) {
          super(),
            (this.visible = !0),
            (this.options = this.getOptions(t)),
            (this.container = Cm.createElement(
              this.options.tagName || 'g',
              !1 !== this.options.isSVGElement,
            )),
            Zu(this.container, this.prefixClassName('cell-tool')),
            'string' == typeof this.options.className &&
              Zu(this.container, this.options.className),
            this.init()
        }
        static getDefaults() {
          return this.defaults
        }
        static config(t) {
          this.defaults = this.getOptions(t)
        }
        static getOptions(t) {
          return el(Zi(this.getDefaults()), t)
        }
        get graph() {
          return this.cellView.graph
        }
        get cell() {
          return this.cellView.cell
        }
        get name() {
          return this.options.name
        }
        get [Symbol.toStringTag]() {
          return e.toStringTag
        }
        init() {}
        getOptions(t) {
          return this.constructor.getOptions(t)
        }
        delegateEvents() {
          return (
            this.options.events && super.delegateEvents(this.options.events),
            this
          )
        }
        config(t, e) {
          return (
            (this.cellView = t),
            (this.parent = e),
            this.stamp(this.container),
            this.cell.isEdge()
              ? Zu(this.container, this.prefixClassName('edge-tool'))
              : this.cell.isNode() &&
                Zu(this.container, this.prefixClassName('node-tool')),
            this.name &&
              this.container.setAttribute('data-tool-name', this.name),
            this.delegateEvents(),
            this
          )
        }
        render() {
          this.empty()
          const t = this.options.markup
          if (t) {
            const e = Pm.parseJSONMarkup(t)
            this.container.appendChild(e.fragment),
              (this.childNodes = e.selectors)
          }
          return this.onRender(), this
        }
        onRender() {}
        update() {
          return this
        }
        stamp(t = this.container) {
          t && t.setAttribute('data-cell-id', this.cellView.cell.id)
        }
        show() {
          return (this.container.style.display = ''), (this.visible = !0), this
        }
        hide() {
          return (
            (this.container.style.display = 'none'), (this.visible = !1), this
          )
        }
        isVisible() {
          return this.visible
        }
        focus() {
          const t = this.options.focusOpacity
          return (
            null != t &&
              Number.isFinite(t) &&
              (this.container.style.opacity = `${t}`),
            this.parent.focus(this),
            this
          )
        }
        blur() {
          return (
            (this.container.style.opacity = ''), this.parent.blur(this), this
          )
        }
        guard(t) {
          return (
            null == this.graph ||
            null == this.cellView ||
            this.graph.view.guard(t, this.cellView)
          )
        }
      }
      ;(e.defaults = { isSVGElement: !0, tagName: 'g' }),
        (t.ToolItem = e),
        (function (t) {
          let e = 0
          t.define = function (t) {
            const n = fu(
              (r = t.name) ? Pu(r) : ((e += 1), `CustomTool${e}`),
              this,
            )
            var r
            return n.config(t), n
          }
        })((e = t.ToolItem || (t.ToolItem = {}))),
        (function (t) {
          ;(t.toStringTag = `X6.${t.name}`),
            (t.isToolItem = function (e) {
              if (null == e) return !1
              if (e instanceof t) return !0
              const n = e[Symbol.toStringTag],
                r = e
              return (
                (null == n || n === t.toStringTag) &&
                null != r.graph &&
                null != r.cell &&
                'function' == typeof r.config &&
                'function' == typeof r.update &&
                'function' == typeof r.focus &&
                'function' == typeof r.blur &&
                'function' == typeof r.show &&
                'function' == typeof r.hide &&
                'function' == typeof r.isVisible
              )
            })
        })((e = t.ToolItem || (t.ToolItem = {})))
    })(jm || (jm = {}))
  function km(t, e) {
    return 0 === e ? '0%' : `${Math.round((t / e) * 100)}%`
  }
  function Nm(t) {
    return (e, n, r, i) =>
      n.isEdgeElement(r)
        ? (function (t, e, n, r, i) {
            const s = n.getConnection()
            if (!s) return e
            const o = s.closestPointLength(i)
            if (t) {
              const t = s.length()
              e.anchor = { name: 'ratio', args: { ratio: o / t } }
            } else e.anchor = { name: 'length', args: { length: o } }
            return e
          })(t, e, n, 0, i)
        : (function (t, e, n, r, i) {
            const s = n.cell,
              o = s.getAngle(),
              a = n.getUnrotatedBBoxOfElement(r),
              l = s.getBBox().getCenter(),
              c = Vd.create(i).rotate(o, l)
            let h = c.x - a.x,
              u = c.y - a.y
            t && ((h = km(h, a.width)), (u = km(u, a.height)))
            return (
              (e.anchor = {
                name: 'topLeft',
                args: { dx: h, dy: u, rotate: !0 },
              }),
              e
            )
          })(t, e, n, r, i)
  }
  const _m = Nm(!0),
    Lm = Nm(!1)
  var Im,
    Bm = Object.freeze({
      __proto__: null,
      noop: (t) => t,
      pinRelative: _m,
      pinAbsolute: Lm,
    })
  function Rm(t, e, n, r) {
    return au(
      Im.presets.pinRelative,
      this.graph,
      {},
      e,
      n,
      t,
      this.cell,
      r,
      {},
    ).anchor
  }
  function Dm(t, e) {
    return e
      ? t.cell.getBBox()
      : t.cell.isEdge()
      ? t.getConnection().bbox()
      : t.getUnrotatedBBoxOfElement(t.container)
  }
  !(function (t) {
    ;(t.presets = Bm),
      (t.registry = hf.create({ type: 'connection strategy' })),
      t.registry.register(t.presets, !0)
  })(Im || (Im = {}))
  class Vm extends jm.ToolItem {
    onRender() {
      Zu(this.container, this.prefixClassName('cell-tool-button')),
        this.update()
    }
    update() {
      return this.updatePosition(), this
    }
    updatePosition() {
      const t = this.cellView.cell.isEdge()
        ? this.getEdgeMatrix()
        : this.getNodeMatrix()
      ud(this.container, t, { absolute: !0 })
    }
    getNodeMatrix() {
      const t = this.cellView,
        e = this.options
      let { x: n = 0, y: r = 0 } = e
      const { offset: i, useCellGeometry: s, rotate: o } = e
      let a = Dm(t, s)
      const l = t.cell.getAngle()
      o || (a = a.bbox(l))
      let c = 0,
        h = 0
      'number' == typeof i
        ? ((c = i), (h = i))
        : 'object' == typeof i && ((c = i.x), (h = i.y)),
        (n = Mu(n, a.width)),
        (r = Mu(r, a.height))
      let u = sd().translate(a.x + a.width / 2, a.y + a.height / 2)
      return (
        o && (u = u.rotate(l)),
        (u = u.translate(n + c - a.width / 2, r + h - a.height / 2)),
        u
      )
    }
    getEdgeMatrix() {
      const t = this.cellView,
        e = this.options,
        { offset: n = 0, distance: r = 0, rotate: i } = e
      let s, o, a
      const l = Mu(r, 1)
      ;(s =
        l >= 0 && l <= 1 ? t.getTangentAtRatio(l) : t.getTangentAtLength(l)),
        s
          ? ((o = s.start), (a = s.vector().vectorAngle(new Vd(1, 0)) || 0))
          : ((o = t.getConnection().start), (a = 0))
      let c = sd().translate(o.x, o.y).rotate(a)
      return (
        (c =
          'object' == typeof n
            ? c.translate(n.x || 0, n.y || 0)
            : c.translate(0, n)),
        i || (c = c.rotate(-a)),
        c
      )
    }
    onMouseDown(t) {
      if (this.guard(t)) return
      t.stopPropagation(), t.preventDefault()
      const e = this.options.onClick
      'function' == typeof e &&
        au(e, this.cellView, {
          e: t,
          view: this.cellView,
          cell: this.cellView.cell,
          btn: this,
        })
    }
  }
  !(function (t) {
    t.config({
      name: 'button',
      useCellGeometry: !0,
      events: { mousedown: 'onMouseDown', touchstart: 'onMouseDown' },
    })
  })(Vm || (Vm = {})),
    (function (t) {
      t.Remove = t.define({
        name: 'button-remove',
        markup: [
          {
            tagName: 'circle',
            selector: 'button',
            attrs: { r: 7, fill: '#FF1D00', cursor: 'pointer' },
          },
          {
            tagName: 'path',
            selector: 'icon',
            attrs: {
              d: 'M -3 -3 3 3 M -3 3 3 -3',
              fill: 'none',
              stroke: '#FFFFFF',
              'stroke-width': 2,
              'pointer-events': 'none',
            },
          },
        ],
        distance: 60,
        offset: 0,
        useCellGeometry: !0,
        onClick({ view: t, btn: e }) {
          e.parent.remove(), t.cell.remove({ ui: !0, toolId: e.cid })
        },
      })
    })(Vm || (Vm = {}))
  var zm = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  class $m extends jm.ToolItem {
    onRender() {
      if (
        (Zu(this.container, this.prefixClassName('cell-tool-boundary')),
        this.options.attrs)
      ) {
        const t = this.options.attrs,
          { class: e } = t,
          n = zm(t, ['class'])
        xg(this.container, Pg(n)), e && Zu(this.container, e)
      }
      this.update()
    }
    update() {
      const t = this.cellView,
        e = this.options,
        { useCellGeometry: n, rotate: r } = e,
        i = Su(e.padding)
      let s = Dm(t, n).moveAndExpand({
        x: -i.left,
        y: -i.top,
        width: i.left + i.right,
        height: i.top + i.bottom,
      })
      const o = t.cell
      if (o.isNode()) {
        const t = o.getAngle()
        if (t)
          if (r) {
            const e = o.getBBox().getCenter()
            dd(this.container, t, e.x, e.y, { absolute: !0 })
          } else s = s.bbox(t)
      }
      return xg(this.container, s.toJSON()), this
    }
  }
  !(function (t) {
    t.config({
      name: 'boundary',
      tagName: 'rect',
      padding: 10,
      useCellGeometry: !0,
      attrs: {
        fill: 'none',
        stroke: '#333',
        'stroke-width': 0.5,
        'stroke-dasharray': '5, 5',
        'pointer-events': 'none',
      },
    })
  })($m || ($m = {}))
  class Fm extends jm.ToolItem {
    constructor() {
      super(...arguments), (this.handles = [])
    }
    get vertices() {
      return this.cellView.cell.getVertices()
    }
    onRender() {
      return (
        this.addClass(this.prefixClassName('edge-tool-vertices')),
        this.options.addable && this.updatePath(),
        this.resetHandles(),
        this.renderHandles(),
        this
      )
    }
    update() {
      return (
        this.vertices.length === this.handles.length
          ? this.updateHandles()
          : (this.resetHandles(), this.renderHandles()),
        this.options.addable && this.updatePath(),
        this
      )
    }
    resetHandles() {
      const t = this.handles
      ;(this.handles = []),
        t &&
          t.forEach((t) => {
            this.stopHandleListening(t), t.remove()
          })
    }
    renderHandles() {
      const t = this.vertices
      for (let e = 0, n = t.length; e < n; e += 1) {
        const n = t[e],
          r = this.options.createHandle,
          i = this.options.processHandle,
          s = r({
            index: e,
            graph: this.graph,
            guard: (t) => this.guard(t),
            attrs: this.options.attrs || {},
          })
        i && i(s),
          s.updatePosition(n.x, n.y),
          this.stamp(s.container),
          this.container.appendChild(s.container),
          this.handles.push(s),
          this.startHandleListening(s)
      }
    }
    updateHandles() {
      const t = this.vertices
      for (let e = 0, n = t.length; e < n; e += 1) {
        const n = t[e],
          r = this.handles[e]
        r && r.updatePosition(n.x, n.y)
      }
    }
    updatePath() {
      const t = this.childNodes.connection
      t && t.setAttribute('d', this.cellView.getConnectionPathData())
    }
    startHandleListening(t) {
      const e = this.cellView
      e.can('vertexMovable') &&
        (t.on('change', this.onHandleChange, this),
        t.on('changing', this.onHandleChanging, this),
        t.on('changed', this.onHandleChanged, this)),
        e.can('vertexDeletable') && t.on('remove', this.onHandleRemove, this)
    }
    stopHandleListening(t) {
      const e = this.cellView
      e.can('vertexMovable') &&
        (t.off('change', this.onHandleChange, this),
        t.off('changing', this.onHandleChanging, this),
        t.off('changed', this.onHandleChanged, this)),
        e.can('vertexDeletable') && t.off('remove', this.onHandleRemove, this)
    }
    getNeighborPoints(t) {
      const e = this.cellView,
        n = this.vertices,
        r = t > 0 ? n[t - 1] : e.sourceAnchor,
        i = t < n.length - 1 ? n[t + 1] : e.targetAnchor
      return { prev: Vd.create(r), next: Vd.create(i) }
    }
    getMouseEventArgs(t) {
      const e = this.normalizeEvent(t),
        { x: n, y: r } = this.graph.snapToGrid(e.clientX, e.clientY)
      return { e: e, x: n, y: r }
    }
    onHandleChange({ e: t }) {
      this.focus()
      const e = this.cellView
      if (
        (e.cell.startBatch('move-vertex', { ui: !0, toolId: this.cid }),
        !this.options.stopPropagation)
      ) {
        const { e: n, x: r, y: i } = this.getMouseEventArgs(t)
        e.notifyMouseDown(n, r, i)
      }
    }
    onHandleChanging({ handle: t, e: e }) {
      const n = this.cellView,
        r = t.options.index,
        { e: i, x: s, y: o } = this.getMouseEventArgs(e),
        a = { x: s, y: o }
      this.snapVertex(a, r),
        n.cell.setVertexAt(r, a, { ui: !0, toolId: this.cid }),
        t.updatePosition(a.x, a.y),
        this.options.stopPropagation || n.notifyMouseMove(i, s, o)
    }
    onHandleChanged({ e: t }) {
      const e = this.options,
        n = this.cellView
      if ((e.addable && this.updatePath(), !e.removeRedundancies)) return
      n.removeRedundantLinearVertices({ ui: !0, toolId: this.cid }) &&
        this.render(),
        this.blur(),
        n.cell.stopBatch('move-vertex', { ui: !0, toolId: this.cid }),
        this.eventData(t).vertexAdded &&
          n.cell.stopBatch('add-vertex', { ui: !0, toolId: this.cid })
      const { e: r, x: i, y: s } = this.getMouseEventArgs(t)
      this.options.stopPropagation || n.notifyMouseUp(r, i, s),
        n.checkMouseleave(r),
        e.onChanged && e.onChanged({ edge: n.cell, edgeView: n })
    }
    snapVertex(t, e) {
      const n = this.options.snapRadius || 0
      if (n > 0) {
        const r = this.getNeighborPoints(e),
          i = r.prev,
          s = r.next
        Math.abs(t.x - i.x) < n
          ? (t.x = i.x)
          : Math.abs(t.x - s.x) < n && (t.x = s.x),
          Math.abs(t.y - i.y) < n
            ? (t.y = r.prev.y)
            : Math.abs(t.y - s.y) < n && (t.y = s.y)
      }
    }
    onHandleRemove({ handle: t, e: e }) {
      if (this.options.removable) {
        const n = t.options.index,
          r = this.cellView
        r.cell.removeVertexAt(n, { ui: !0 }),
          this.options.addable && this.updatePath(),
          r.checkMouseleave(this.normalizeEvent(e))
      }
    }
    onPathMouseDown(t) {
      const e = this.cellView
      if (this.guard(t) || !this.options.addable || !e.can('vertexAddable'))
        return
      t.stopPropagation(), t.preventDefault()
      const n = this.normalizeEvent(t),
        r = this.graph.snapToGrid(n.clientX, n.clientY).toJSON()
      e.cell.startBatch('add-vertex', { ui: !0, toolId: this.cid })
      const i = e.getVertexIndex(r.x, r.y)
      this.snapVertex(r, i),
        e.cell.insertVertex(r, i, { ui: !0, toolId: this.cid }),
        this.render()
      const s = this.handles[i]
      this.eventData(n, { vertexAdded: !0 }), s.onMouseDown(n)
    }
    onRemove() {
      this.resetHandles()
    }
  }
  !(function (t) {
    t.Handle = class extends Cm {
      constructor(t) {
        super(),
          (this.options = t),
          this.render(),
          this.delegateEvents({
            mousedown: 'onMouseDown',
            touchstart: 'onMouseDown',
            dblclick: 'onDoubleClick',
          })
      }
      get graph() {
        return this.options.graph
      }
      render() {
        this.container = Cm.createElement('circle', !0)
        const e = this.options.attrs
        if ('function' == typeof e) {
          const n = t.getDefaults()
          this.setAttrs(Object.assign(Object.assign({}, n.attrs), e(this)))
        } else this.setAttrs(e)
        this.addClass(this.prefixClassName('edge-tool-vertex'))
      }
      updatePosition(t, e) {
        this.setAttrs({ cx: t, cy: e })
      }
      onMouseDown(t) {
        this.options.guard(t) ||
          (t.stopPropagation(),
          t.preventDefault(),
          this.graph.view.undelegateEvents(),
          this.delegateDocumentEvents(
            {
              mousemove: 'onMouseMove',
              touchmove: 'onMouseMove',
              mouseup: 'onMouseUp',
              touchend: 'onMouseUp',
              touchcancel: 'onMouseUp',
            },
            t.data,
          ),
          this.emit('change', { e: t, handle: this }))
      }
      onMouseMove(t) {
        this.emit('changing', { e: t, handle: this })
      }
      onMouseUp(t) {
        this.emit('changed', { e: t, handle: this }),
          this.undelegateDocumentEvents(),
          this.graph.view.delegateEvents()
      }
      onDoubleClick(t) {
        this.emit('remove', { e: t, handle: this })
      }
    }
  })(Fm || (Fm = {})),
    (function (t) {
      const e = Yp.prefix('edge-tool-vertex-path')
      t.config({
        name: 'vertices',
        snapRadius: 20,
        addable: !0,
        removable: !0,
        removeRedundancies: !0,
        stopPropagation: !0,
        attrs: {
          r: 6,
          fill: '#333',
          stroke: '#fff',
          cursor: 'move',
          'stroke-width': 2,
        },
        createHandle: (e) => new t.Handle(e),
        markup: [
          {
            tagName: 'path',
            selector: 'connection',
            className: e,
            attrs: {
              fill: 'none',
              stroke: 'transparent',
              'stroke-width': 10,
              cursor: 'pointer',
            },
          },
        ],
        events: {
          [`mousedown .${e}`]: 'onPathMouseDown',
          [`touchstart .${e}`]: 'onPathMouseDown',
        },
      })
    })(Fm || (Fm = {}))
  class qm extends jm.ToolItem {
    constructor() {
      super(...arguments), (this.handles = [])
    }
    get vertices() {
      return this.cellView.cell.getVertices()
    }
    update() {
      return this.render(), this
    }
    onRender() {
      Zu(this.container, this.prefixClassName('edge-tool-segments')),
        this.resetHandles()
      const t = this.cellView,
        e = [...this.vertices]
      e.unshift(t.sourcePoint), e.push(t.targetPoint)
      for (let t = 0, n = e.length; t < n - 1; t += 1) {
        const n = e[t],
          r = e[t + 1],
          i = this.renderHandle(n, r, t)
        this.stamp(i.container), this.handles.push(i)
      }
      return this
    }
    renderHandle(t, e, n) {
      const r = this.options.createHandle({
        index: n,
        graph: this.graph,
        guard: (t) => this.guard(t),
        attrs: this.options.attrs || {},
      })
      return (
        this.options.processHandle && this.options.processHandle(r),
        this.updateHandle(r, t, e),
        this.container.appendChild(r.container),
        this.startHandleListening(r),
        r
      )
    }
    startHandleListening(t) {
      t.on('change', this.onHandleChange, this),
        t.on('changing', this.onHandleChanging, this),
        t.on('changed', this.onHandleChanged, this)
    }
    stopHandleListening(t) {
      t.off('change', this.onHandleChange, this),
        t.off('changing', this.onHandleChanging, this),
        t.off('changed', this.onHandleChanged, this)
    }
    resetHandles() {
      const t = this.handles
      ;(this.handles = []),
        t &&
          t.forEach((t) => {
            this.stopHandleListening(t), t.remove()
          })
    }
    shiftHandleIndexes(t) {
      const e = this.handles
      for (let n = 0, r = e.length; n < r; n += 1) e[n].options.index += t
    }
    resetAnchor(t, e) {
      const n = this.cellView.cell,
        r = { ui: !0, toolId: this.cid }
      e ? n.prop([t, 'anchor'], e, r) : n.removeProp([t, 'anchor'], r)
    }
    snapHandle(t, e, n) {
      const r = t.options.axis,
        i = t.options.index,
        s = this.cellView.cell.getVertices(),
        o = s[i - 2] || n.sourceAnchor,
        a = s[i + 1] || n.targetAnchor,
        l = this.options.snapRadius
      return (
        Math.abs(e[r] - o[r]) < l
          ? (e[r] = o[r])
          : Math.abs(e[r] - a[r]) < l && (e[r] = a[r]),
        e
      )
    }
    onHandleChanging({ handle: t, e: e }) {
      const n = this.graph,
        r = this.options,
        i = this.cellView,
        s = r.anchor,
        o = t.options.axis,
        a = t.options.index - 1,
        l = this.getEventData(e),
        c = this.normalizeEvent(e),
        h = n.snapToGrid(c.clientX, c.clientY),
        u = this.snapHandle(t, h.clone(), l),
        g = Zi(this.vertices)
      let d = g[a],
        f = g[a + 1]
      const p = i.sourceView,
        m = i.sourceBBox
      let y = !1,
        v = !1
      if (
        (d
          ? 0 === a
            ? m.containsPoint(d)
              ? (g.shift(), this.shiftHandleIndexes(-1), (y = !0))
              : ((d[o] = u[o]), (v = !0))
            : (d[o] = u[o])
          : ((d = i.sourceAnchor.toJSON()),
            (d[o] = u[o]),
            m.containsPoint(d)
              ? (y = !0)
              : (g.unshift(d), this.shiftHandleIndexes(1), (v = !0))),
        'function' == typeof s && p)
      ) {
        if (y) {
          const t = l.sourceAnchor.clone()
          t[o] = u[o]
          const e = au(
            s,
            i,
            t,
            p,
            i.sourceMagnet || p.container,
            'source',
            i,
            this,
          )
          this.resetAnchor('source', e)
        }
        v && this.resetAnchor('source', l.sourceAnchorDef)
      }
      const b = i.targetView,
        x = i.targetBBox
      let w = !1,
        P = !1
      if (
        (f
          ? a === g.length - 2
            ? x.containsPoint(f)
              ? (g.pop(), (w = !0))
              : ((f[o] = u[o]), (P = !0))
            : (f[o] = u[o])
          : ((f = i.targetAnchor.toJSON()),
            (f[o] = u[o]),
            x.containsPoint(f) ? (w = !0) : (g.push(f), (P = !0))),
        'function' == typeof s && b)
      ) {
        if (w) {
          const t = l.targetAnchor.clone()
          t[o] = u[o]
          const e = au(
            s,
            i,
            t,
            b,
            i.targetMagnet || b.container,
            'target',
            i,
            this,
          )
          this.resetAnchor('target', e)
        }
        P && this.resetAnchor('target', l.targetAnchorDef)
      }
      Vd.equalPoints(g, this.vertices) ||
        this.cellView.cell.setVertices(g, { ui: !0, toolId: this.cid }),
        this.updateHandle(t, d, f, 0),
        r.stopPropagation || i.notifyMouseMove(c, h.x, h.y)
    }
    onHandleChange({ handle: t, e: e }) {
      const n = this.options,
        r = this.handles,
        i = this.cellView,
        s = t.options.index
      if (Array.isArray(r)) {
        for (let t = 0, e = r.length; t < e; t += 1) t !== s && r[t].hide()
        if (
          (this.focus(),
          this.setEventData(e, {
            sourceAnchor: i.sourceAnchor.clone(),
            targetAnchor: i.targetAnchor.clone(),
            sourceAnchorDef: Zi(this.cell.prop(['source', 'anchor'])),
            targetAnchorDef: Zi(this.cell.prop(['target', 'anchor'])),
          }),
          this.cell.startBatch('move-segment', { ui: !0, toolId: this.cid }),
          !n.stopPropagation)
        ) {
          const t = this.normalizeEvent(e),
            n = this.graph.snapToGrid(t.clientX, t.clientY)
          i.notifyMouseDown(t, n.x, n.y)
        }
      }
    }
    onHandleChanged({ e: t }) {
      const e = this.options,
        n = this.cellView
      e.removeRedundancies &&
        n.removeRedundantLinearVertices({ ui: !0, toolId: this.cid })
      const r = this.normalizeEvent(t),
        i = this.graph.snapToGrid(r.clientX, r.clientY)
      this.render(),
        this.blur(),
        this.cell.stopBatch('move-segment', { ui: !0, toolId: this.cid }),
        e.stopPropagation || n.notifyMouseUp(r, i.x, i.y),
        n.checkMouseleave(r),
        e.onChanged && e.onChanged({ edge: n.cell, edgeView: n })
    }
    updateHandle(t, e, n, r = 0) {
      const i = this.options.precision || 0,
        s = Math.abs(e.x - n.x) < i,
        o = Math.abs(e.y - n.y) < i
      if (s || o) {
        const i = new $d(e, n)
        if (i.length() < this.options.threshold) t.hide()
        else {
          const e = i.getCenter(),
            n = s ? 'x' : 'y'
          e[n] += r || 0
          const o = i.vector().vectorAngle(new Vd(1, 0))
          t.updatePosition(e.x, e.y, o, this.cellView),
            t.show(),
            (t.options.axis = n)
        }
      } else t.hide()
    }
    onRemove() {
      this.resetHandles()
    }
  }
  !(function (t) {
    t.Handle = class extends Cm {
      constructor(t) {
        super(),
          (this.options = t),
          this.render(),
          this.delegateEvents({
            mousedown: 'onMouseDown',
            touchstart: 'onMouseDown',
          })
      }
      render() {
        this.container = Cm.createElement('rect', !0)
        const e = this.options.attrs
        if ('function' == typeof e) {
          const n = t.getDefaults()
          this.setAttrs(Object.assign(Object.assign({}, n.attrs), e(this)))
        } else this.setAttrs(e)
        this.addClass(this.prefixClassName('edge-tool-segment'))
      }
      updatePosition(t, e, n, r) {
        const i = r.getClosestPoint(new Vd(t, e)) || new Vd(t, e)
        let s = sd().translate(i.x, i.y)
        if (i.equals({ x: t, y: e })) s = s.rotate(n)
        else {
          let n = new $d(t, e, i.x, i.y).vector().vectorAngle(new Vd(1, 0))
          0 !== n && (n += 90), (s = s.rotate(n))
        }
        this.setAttrs({
          transform: ld(s),
          cursor: n % 180 == 0 ? 'row-resize' : 'col-resize',
        })
      }
      onMouseDown(t) {
        this.options.guard(t) ||
          (this.trigger('change', { e: t, handle: this }),
          t.stopPropagation(),
          t.preventDefault(),
          this.options.graph.view.undelegateEvents(),
          this.delegateDocumentEvents(
            {
              mousemove: 'onMouseMove',
              touchmove: 'onMouseMove',
              mouseup: 'onMouseUp',
              touchend: 'onMouseUp',
              touchcancel: 'onMouseUp',
            },
            t.data,
          ))
      }
      onMouseMove(t) {
        this.emit('changing', { e: t, handle: this })
      }
      onMouseUp(t) {
        this.emit('changed', { e: t, handle: this }),
          this.undelegateDocumentEvents(),
          this.options.graph.view.delegateEvents()
      }
      show() {
        this.container.style.display = ''
      }
      hide() {
        this.container.style.display = 'none'
      }
    }
  })(qm || (qm = {})),
    (function (t) {
      t.config({
        name: 'segments',
        precision: 0.5,
        threshold: 40,
        snapRadius: 10,
        stopPropagation: !0,
        removeRedundancies: !0,
        attrs: {
          width: 20,
          height: 8,
          x: -10,
          y: -4,
          rx: 4,
          ry: 4,
          fill: '#333',
          stroke: '#fff',
          'stroke-width': 2,
        },
        createHandle: (e) => new t.Handle(e),
        anchor: Rm,
      })
    })(qm || (qm = {}))
  class Gm extends jm.ToolItem {
    get type() {
      return this.options.type
    }
    onRender() {
      Zu(this.container, this.prefixClassName(`edge-tool-${this.type}-anchor`)),
        this.toggleArea(!1),
        this.update()
    }
    update() {
      const t = this.type
      return (
        this.cellView.getTerminalView(t)
          ? (this.updateAnchor(),
            this.updateArea(),
            (this.container.style.display = ''))
          : (this.container.style.display = 'none'),
        this
      )
    }
    updateAnchor() {
      const t = this.childNodes
      if (!t) return
      const e = t.anchor
      if (!e) return
      const n = this.type,
        r = this.cellView,
        i = this.options,
        s = r.getTerminalAnchor(n),
        o = r.cell.prop([n, 'anchor'])
      e.setAttribute('transform', `translate(${s.x}, ${s.y})`)
      const a = o ? i.customAnchorAttrs : i.defaultAnchorAttrs
      a &&
        Object.keys(a).forEach((t) => {
          e.setAttribute(t, a[t])
        })
    }
    updateArea() {
      const t = this.childNodes
      if (!t) return
      const e = t.area
      if (!e) return
      const n = this.type,
        r = this.cellView,
        i = r.getTerminalView(n)
      if (i) {
        const t = i.cell,
          s = r.getTerminalMagnet(n)
        let o,
          a,
          l,
          c = this.options.areaPadding || 0
        Number.isFinite(c) || (c = 0),
          i.isEdgeElement(s)
            ? ((o = i.getBBox()), (a = 0), (l = o.getCenter()))
            : ((o = i.getUnrotatedBBoxOfElement(s)),
              (a = t.getAngle()),
              (l = o.getCenter()),
              a && l.rotate(-a, t.getBBox().getCenter())),
          o.inflate(c),
          xg(e, {
            x: -o.width / 2,
            y: -o.height / 2,
            width: o.width,
            height: o.height,
            transform: `translate(${l.x}, ${l.y}) rotate(${a})`,
          })
      }
    }
    toggleArea(t) {
      if (this.childNodes) {
        const e = this.childNodes.area
        e && (e.style.display = t ? '' : 'none')
      }
    }
    onMouseDown(t) {
      this.guard(t) ||
        (t.stopPropagation(),
        t.preventDefault(),
        this.graph.view.undelegateEvents(),
        this.options.documentEvents &&
          this.delegateDocumentEvents(this.options.documentEvents),
        this.focus(),
        this.toggleArea(this.options.restrictArea),
        this.cell.startBatch('move-anchor', { ui: !0, toolId: this.cid }))
    }
    resetAnchor(t) {
      const e = this.type,
        n = this.cell
      t
        ? n.prop([e, 'anchor'], t, { rewrite: !0, ui: !0, toolId: this.cid })
        : n.removeProp([e, 'anchor'], { ui: !0, toolId: this.cid })
    }
    onMouseMove(t) {
      const e = this.type,
        n = this.cellView,
        r = n.getTerminalView(e)
      if (null == r) return
      const i = this.normalizeEvent(t),
        s = r.cell,
        o = n.getTerminalMagnet(e)
      let a = this.graph.coord.clientToLocalPoint(i.clientX, i.clientY)
      const l = this.options.snap
      if ('function' == typeof l) {
        const t = au(l, n, a, r, o, e, n, this)
        a = Vd.create(t)
      }
      if (this.options.restrictArea)
        if (r.isEdgeElement(o)) {
          const t = r.getClosestPoint(a)
          t && (a = t)
        } else {
          const t = r.getUnrotatedBBoxOfElement(o),
            e = s.getAngle(),
            n = s.getBBox().getCenter(),
            i = a.clone().rotate(e, n)
          t.containsPoint(i) || (a = t.getNearestPointToPoint(i).rotate(-e, n))
        }
      let c
      const h = this.options.anchor
      'function' == typeof h && (c = au(h, n, a, r, o, e, n, this)),
        this.resetAnchor(c),
        this.update()
    }
    onMouseUp(t) {
      this.graph.view.delegateEvents(),
        this.undelegateDocumentEvents(),
        this.blur(),
        this.toggleArea(!1)
      const e = this.cellView
      this.options.removeRedundancies &&
        e.removeRedundantLinearVertices({ ui: !0, toolId: this.cid }),
        this.cell.stopBatch('move-anchor', { ui: !0, toolId: this.cid })
    }
    onDblClick() {
      const t = this.options.resetAnchor
      t && this.resetAnchor(!0 === t ? void 0 : t), this.update()
    }
  }
  !(function (t) {
    t.config({
      tagName: 'g',
      markup: [
        { tagName: 'circle', selector: 'anchor', attrs: { cursor: 'pointer' } },
        {
          tagName: 'rect',
          selector: 'area',
          attrs: {
            'pointer-events': 'none',
            fill: 'none',
            stroke: '#33334F',
            'stroke-dasharray': '2,4',
            rx: 5,
            ry: 5,
          },
        },
      ],
      events: {
        mousedown: 'onMouseDown',
        touchstart: 'onMouseDown',
        dblclick: 'onDblClick',
      },
      documentEvents: {
        mousemove: 'onMouseMove',
        touchmove: 'onMouseMove',
        mouseup: 'onMouseUp',
        touchend: 'onMouseUp',
        touchcancel: 'onMouseUp',
      },
      customAnchorAttrs: {
        'stroke-width': 4,
        stroke: '#33334F',
        fill: '#FFFFFF',
        r: 5,
      },
      defaultAnchorAttrs: {
        'stroke-width': 2,
        stroke: '#FFFFFF',
        fill: '#33334F',
        r: 6,
      },
      areaPadding: 6,
      snapRadius: 10,
      resetAnchor: !0,
      restrictArea: !0,
      removeRedundancies: !0,
      anchor: Rm,
      snap(t, e, n, r, i, s) {
        const o = s.options.snapRadius || 0,
          a = 'source' === r,
          l = a ? 0 : -1,
          c =
            this.cell.getVertexAt(l) ||
            this.getTerminalAnchor(a ? 'target' : 'source')
        return (
          c &&
            (Math.abs(c.x - t.x) < o && (t.x = c.x),
            Math.abs(c.y - t.y) < o && (t.y = c.y)),
          t
        )
      },
    })
  })(Gm || (Gm = {}))
  const Wm = Gm.define({ name: 'source-anchor', type: 'source' }),
    Hm = Gm.define({ name: 'target-anchor', type: 'target' })
  var Um = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  class Jm extends jm.ToolItem {
    get type() {
      return this.options.type
    }
    get ratio() {
      return this.options.ratio
    }
    init() {
      if (this.options.attrs) {
        const t = this.options.attrs,
          { class: e } = t,
          n = Um(t, ['class'])
        this.setAttrs(n, this.container), e && Zu(this.container, e)
      }
    }
    onRender() {
      Zu(
        this.container,
        this.prefixClassName(`edge-tool-${this.type}-arrowhead`),
      ),
        this.update()
    }
    update() {
      const t = this.ratio,
        e = this.cellView,
        n = e.getTangentAtRatio(t),
        r = n ? n.start : e.getPointAtRatio(t),
        i = (n && n.vector().vectorAngle(new Vd(1, 0))) || 0
      if (!r) return this
      const s = sd().translate(r.x, r.y).rotate(i)
      return ud(this.container, s, { absolute: !0 }), this
    }
    onMouseDown(t) {
      if (this.guard(t)) return
      t.stopPropagation(), t.preventDefault()
      const e = this.cellView
      if (e.can('arrowheadMovable')) {
        e.cell.startBatch('move-arrowhead', { ui: !0, toolId: this.cid })
        const n = this.graph.snapToGrid(t.clientX, t.clientY),
          r = e.prepareArrowheadDragging(this.type, {
            x: n.x,
            y: n.y,
            options: { toolId: this.cid },
          })
        this.cellView.setEventData(t, r),
          this.delegateDocumentEvents(this.options.documentEvents, t.data),
          e.graph.view.undelegateEvents(),
          (this.container.style.pointerEvents = 'none')
      }
      this.focus()
    }
    onMouseMove(t) {
      const e = this.normalizeEvent(t),
        n = this.graph.snapToGrid(e.clientX, e.clientY)
      this.cellView.onMouseMove(e, n.x, n.y), this.update()
    }
    onMouseUp(t) {
      this.undelegateDocumentEvents()
      const e = this.normalizeEvent(t),
        n = this.cellView,
        r = this.graph.snapToGrid(e.clientX, e.clientY)
      n.onMouseUp(e, r.x, r.y),
        this.graph.view.delegateEvents(),
        this.blur(),
        (this.container.style.pointerEvents = ''),
        n.cell.stopBatch('move-arrowhead', { ui: !0, toolId: this.cid })
    }
  }
  !(function (t) {
    t.config({
      tagName: 'path',
      isSVGElement: !0,
      events: { mousedown: 'onMouseDown', touchstart: 'onMouseDown' },
      documentEvents: {
        mousemove: 'onMouseMove',
        touchmove: 'onMouseMove',
        mouseup: 'onMouseUp',
        touchend: 'onMouseUp',
        touchcancel: 'onMouseUp',
      },
    })
  })(Jm || (Jm = {}))
  const Xm = Jm.define({
      name: 'source-arrowhead',
      type: 'source',
      ratio: 0,
      attrs: {
        d: 'M 10 -8 -10 0 10 8 Z',
        fill: '#333',
        stroke: '#fff',
        'stroke-width': 2,
        cursor: 'move',
      },
    }),
    Ym = Jm.define({
      name: 'target-arrowhead',
      type: 'target',
      ratio: 1,
      attrs: {
        d: 'M -10 -8 10 0 -10 8 Z',
        fill: '#333',
        stroke: '#fff',
        'stroke-width': 2,
        cursor: 'move',
      },
    })
  class Zm extends jm.ToolItem {
    constructor() {
      super(...arguments), (this.labelIndex = -1), (this.distance = 0.5)
    }
    render() {
      return (
        this.createElement(),
        this.updateEditor(),
        this.autoFocus(),
        this.delegateDocumentEvents(this.options.documentEvents),
        this
      )
    }
    createElement() {
      const { cell: t } = this,
        e = [
          this.prefixClassName((t.isEdge() ? 'edge' : 'node') + '-tool-editor'),
          this.prefixClassName('cell-tool-editor'),
        ]
      ;(this.editor = jm.createElement('div', !1)),
        this.addClass(e, this.editor),
        (this.editor.contentEditable = 'true'),
        this.container.appendChild(this.editor)
    }
    updateEditor() {
      const { graph: t, cell: e, editor: n } = this,
        r = n.style
      let i = new Vd(),
        s = 20
      if (e.isNode()) (i = e.getBBox().center), (s = e.size().width - 4)
      else if (e.isEdge()) {
        const e = this.options.event,
          n = e.target,
          r = n.parentElement
        if (r && Yu(r, this.prefixClassName('edge-label'))) {
          const t = r.getAttribute('data-index') || '0'
          this.labelIndex = parseInt(t, 10)
          const e = r.getAttribute('transform'),
            { translation: o } = cd(e)
          ;(i = new Vd(o.tx, o.ty)), (s = em.getBBox(n).width)
        } else {
          if (!this.options.labelAddable) return this
          i = t.clientToLocal(Vd.create(e.clientX, e.clientY))
          const n = this.cellView.path.closestPointLength(i)
          this.distance = n
        }
      }
      ;(i = t.localToGraph(i)),
        (r.left = `${i.x}px`),
        (r.top = `${i.y}px`),
        (r.minWidth = `${s}px`)
      const o = t.scale()
      r.transform = `scale(${o.sx}, ${o.sy}) translate(-50%, -50%)`
      const a = this.options.attrs
      ;(r.fontSize = `${a.fontSize}px`),
        (r.fontFamily = a.fontFamily),
        (r.color = a.color),
        (r.backgroundColor = a.backgroundColor)
      const l = this.options.getText
      let c
      return (
        'function' == typeof l &&
          (c = au(l, this.cellView, {
            cell: this.cell,
            index: this.labelIndex,
          })),
        (n.innerText = c || ''),
        this
      )
    }
    onDocumentMouseDown(t) {
      if (t.target !== this.editor) {
        const t = this.cell,
          e = this.editor.innerText.replace(/\n$/, '') || '',
          n = this.options.setText
        'function' == typeof n &&
          au(n, this.cellView, {
            cell: this.cell,
            value: e,
            index: this.labelIndex,
            distance: this.distance,
          }),
          t.removeTool(t.isEdge() ? 'edge-editor' : 'node-editor'),
          this.undelegateDocumentEvents()
      }
    }
    onDblClick(t) {
      t.stopPropagation()
    }
    onMouseDown(t) {
      t.stopPropagation()
    }
    autoFocus() {
      setTimeout(() => {
        this.editor.focus(), this.selectText()
      })
    }
    selectText() {
      if (window.getSelection) {
        const t = document.createRange(),
          e = window.getSelection()
        t.selectNodeContents(this.editor), e.removeAllRanges(), e.addRange(t)
      }
    }
  }
  !(function (t) {
    t.config({
      tagName: 'div',
      isSVGElement: !1,
      events: { dblclick: 'onDblClick', mousedown: 'onMouseDown' },
      documentEvents: { mousedown: 'onDocumentMouseDown' },
    })
  })(Zm || (Zm = {})),
    (function (t) {
      ;(t.NodeEditor = t.define({
        attrs: {
          fontSize: 14,
          fontFamily: 'Arial, helvetica, sans-serif',
          color: '#000',
          backgroundColor: '#fff',
        },
        getText: ({ cell: t }) => t.attr('text/text'),
        setText({ cell: t, value: e }) {
          t.attr('text/text', e)
        },
      })),
        (t.EdgeEditor = t.define({
          attrs: {
            fontSize: 14,
            fontFamily: 'Arial, helvetica, sans-serif',
            color: '#000',
            backgroundColor: '#fff',
          },
          labelAddable: !0,
          getText: ({ cell: t, index: e }) =>
            -1 === e ? '' : t.prop(`labels/${e}/attrs/label/text`),
          setText({ cell: t, value: e, index: n, distance: r }) {
            const i = t
            ;-1 === n
              ? i.appendLabel({
                  position: { distance: r },
                  attrs: { label: { text: e } },
                })
              : e
              ? i.prop(`labels/${n}/attrs/label/text`, e)
              : 'number' == typeof n && i.removeLabelAt(n)
          },
        }))
    })(Zm || (Zm = {}))
  var Km,
    Qm,
    ty = function (t, e) {
      var n = {}
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r])
      if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0
        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
          e.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
            (n[r[i]] = t[r[i]])
      }
      return n
    }
  !(function (t) {
    ;(t.presets = {
      boundary: $m,
      button: Vm,
      'button-remove': Vm.Remove,
      'node-editor': Zm.NodeEditor,
    }),
      (t.registry = hf.create({
        type: 'node tool',
        process(t, e) {
          if ('function' == typeof e) return e
          let n = jm.ToolItem
          const { inherit: r } = e,
            i = ty(e, ['inherit'])
          if (r) {
            const t = this.get(r)
            null == t ? this.onNotFound(r, 'inherited') : (n = t)
          }
          return null == i.name && (i.name = t), n.define.call(n, i)
        },
      })),
      t.registry.register(t.presets, !0)
  })(Km || (Km = {})),
    (function (t) {
      ;(t.presets = {
        boundary: $m,
        vertices: Fm,
        segments: qm,
        button: Vm,
        'button-remove': Vm.Remove,
        'source-anchor': Wm,
        'target-anchor': Hm,
        'source-arrowhead': Xm,
        'target-arrowhead': Ym,
        'edge-editor': Zm.EdgeEditor,
      }),
        (t.registry = hf.create({
          type: 'edge tool',
          process(t, e) {
            if ('function' == typeof e) return e
            let n = jm.ToolItem
            const { inherit: r } = e,
              i = ty(e, ['inherit'])
            if (r) {
              const t = this.get(r)
              null == t ? this.onNotFound(r, 'inherited') : (n = t)
            }
            return null == i.name && (i.name = t), n.define.call(n, i)
          },
        })),
        t.registry.register(t.presets, !0)
    })(Qm || (Qm = {}))
  const ey = hy('center'),
    ny = hy('topCenter'),
    ry = hy('bottomCenter'),
    iy = hy('leftMiddle'),
    sy = hy('rightMiddle'),
    oy = hy('topLeft'),
    ay = hy('topRight'),
    ly = hy('bottomLeft'),
    cy = hy('bottomRight')
  function hy(t) {
    return function (e, n, r, i = {}) {
      const s = i.rotate
          ? e.getUnrotatedBBoxOfElement(n)
          : e.getBBoxOfElement(n),
        o = s[t]
      ;(o.x += Mu(i.dx, s.width)), (o.y += Mu(i.dy, s.height))
      const a = e.cell
      return i.rotate ? o.rotate(-a.getAngle(), a.getBBox().getCenter()) : o
    }
  }
  function uy(t) {
    return function (e, n, r, i) {
      if (r instanceof Element) {
        const s = this.graph.findViewByElem(r)
        let o
        if (s)
          if (s.isEdgeElement(r)) {
            o = gy(s, null != i.fixedAt ? i.fixedAt : '50%')
          } else o = s.getBBoxOfElement(r).getCenter()
        else o = new Vd()
        return t.call(this, e, n, o, i)
      }
      return t.apply(this, arguments)
    }
  }
  function gy(t, e) {
    const n = Eu(e),
      r = 'string' == typeof e ? parseFloat(e) : e
    return n ? t.getPointAtRatio(r / 100) : t.getPointAtLength(r)
  }
  const dy = uy(function (t, e, n, r) {
      const i = t.cell.getAngle(),
        s = t.getBBoxOfElement(e),
        o = s.getCenter(),
        a = s.getTopLeft(),
        l = s.getBottomRight()
      let c = r.padding
      if ((Number.isFinite(c) || (c = 0), a.y + c <= n.y && n.y <= l.y - c)) {
        const t = n.y - o.y
        ;(o.x += 0 === i || 180 === i ? 0 : (1 * t) / Math.tan(Bd.toRad(i))),
          (o.y += t)
      } else if (a.x + c <= n.x && n.x <= l.x - c) {
        const t = n.x - o.x
        ;(o.y += 90 === i || 270 === i ? 0 : t * Math.tan(Bd.toRad(i))),
          (o.x += t)
      }
      return o
    }),
    fy = uy(function (t, e, n, r) {
      let i,
        s,
        o = 0
      const a = t.cell
      r.rotate
        ? ((i = t.getUnrotatedBBoxOfElement(e)),
          (s = a.getBBox().getCenter()),
          (o = a.getAngle()))
        : (i = t.getBBoxOfElement(e))
      const l = r.padding
      null != l && Number.isFinite(l) && i.inflate(l),
        r.rotate && n.rotate(o, s)
      const c = i.getNearestSideToPoint(n)
      let h
      switch (c) {
        case 'left':
          h = i.getLeftMiddle()
          break
        case 'right':
          h = i.getRightMiddle()
          break
        case 'top':
          h = i.getTopCenter()
          break
        case 'bottom':
          h = i.getBottomCenter()
      }
      const u = r.direction
      return (
        'H' === u
          ? ('top' !== c && 'bottom' !== c) ||
            (h = n.x <= i.x + i.width ? i.getLeftMiddle() : i.getRightMiddle())
          : 'V' === u &&
            (h =
              n.y <= i.y + i.height ? i.getTopCenter() : i.getBottomCenter()),
        r.rotate ? h.rotate(-o, s) : h
      )
    })
  var py,
    my = Object.freeze({
      __proto__: null,
      center: ey,
      top: ny,
      bottom: ry,
      left: iy,
      right: sy,
      topLeft: oy,
      topRight: ay,
      bottomLeft: ly,
      bottomRight: cy,
      orth: dy,
      nodeCenter: function (t, e, n, r, i) {
        const s = t.cell.getConnectionPoint(this.cell, i)
        return (r.dx || r.dy) && s.translate(r.dx || 0, r.dy || 0), s
      },
      midSide: fy,
    })
  !(function (t) {
    ;(t.presets = my),
      (t.registry = hf.create({ type: 'node endpoint' })),
      t.registry.register(t.presets, !0)
  })(py || (py = {}))
  const yy = function (t, e, n, r) {
      const i = t.getClosestPoint(n)
      return null != i ? i : new Vd()
    },
    vy = uy(yy),
    by = uy(function (t, e, n, r) {
      const i = 1e6,
        s = t.getConnection(),
        o = t.getConnectionSubdivisions(),
        a = new $d(n.clone().translate(0, i), n.clone().translate(0, -i)),
        l = new $d(n.clone().translate(i, 0), n.clone().translate(-i, 0)),
        c = a.intersect(s, { segmentSubdivisions: o }),
        h = l.intersect(s, { segmentSubdivisions: o }),
        u = []
      return (
        c && u.push(...c),
        h && u.push(...h),
        u.length > 0
          ? n.closest(u)
          : null != r.fallbackAt
          ? gy(t, r.fallbackAt)
          : au(yy, this, t, e, n, r)
      )
    })
  var xy,
    wy = Object.freeze({
      __proto__: null,
      closest: vy,
      ratio: function (t, e, n, r) {
        let i = null != r.ratio ? r.ratio : 0.5
        return i > 1 && (i /= 100), t.getPointAtRatio(i)
      },
      length: function (t, e, n, r) {
        const i = null != r.length ? r.length : 20
        return t.getPointAtLength(i)
      },
      orth: by,
    })
  function Py(t, e, n) {
    let r
    if ('object' == typeof n) {
      if (Number.isFinite(n.y)) {
        const r = new $d(e, t),
          { start: i, end: s } = r.parallel(n.y)
        ;(e = i), (t = s)
      }
      r = n.x
    } else r = n
    if (null == r || !Number.isFinite(r)) return t
    const i = t.distance(e)
    return 0 === r && i > 0 ? t : t.move(e, -Math.min(r, i - 1))
  }
  function Ay(t) {
    const e = t.getAttribute('stroke-width')
    return null === e ? 0 : parseFloat(e) || 0
  }
  !(function (t) {
    ;(t.presets = wy),
      (t.registry = hf.create({ type: 'edge endpoint' })),
      t.registry.register(t.presets, !0)
  })(xy || (xy = {}))
  const Cy = function (t, e, n, r) {
    const i = e.getBBoxOfElement(n)
    r.stroked && i.inflate(Ay(n) / 2)
    const s = t.intersect(i)
    return Py(s && s.length ? t.start.closest(s) : t.end, t.start, r.offset)
  }
  var Oy,
    Ey = Object.freeze({
      __proto__: null,
      bbox: Cy,
      rect: function (t, e, n, r, i) {
        const s = e.cell,
          o = s.isNode() ? s.getAngle() : 0
        if (0 === o) return au(Cy, this, t, e, n, r, i)
        const a = e.getUnrotatedBBoxOfElement(n)
        r.stroked && a.inflate(Ay(n) / 2)
        const l = a.getCenter(),
          c = t.clone().rotate(o, l),
          h = c.setLength(1e6).intersect(a)
        return Py(
          h && h.length ? c.start.closest(h).rotate(-o, l) : t.end,
          t.start,
          r.offset,
        )
      },
      boundary: function (t, e, n, r) {
        let i, s
        const o = t.end,
          a = r.selector
        if (
          ((i =
            'string' == typeof a
              ? e.findOne(a)
              : Array.isArray(a)
              ? mu(n, a)
              : (function (t) {
                  if (null == t) return null
                  let e = t
                  do {
                    let t = e.tagName
                    if ('string' != typeof t) return null
                    if (((t = t.toUpperCase()), 'G' === t))
                      e = e.firstElementChild
                    else {
                      if ('TITLE' !== t) break
                      e = e.nextElementSibling
                    }
                  } while (e)
                  return e
                })(n)),
          !ng(i))
        ) {
          if (i === n || !ng(n)) return o
          i = n
        }
        const l = e.getShapeOfElement(i),
          c = e.getMatrixOfElement(i),
          h = e.getRootTranslatedMatrix(),
          u = e.getRootRotatedMatrix(),
          g = h.multiply(u).multiply(c),
          d = g.inverse(),
          f = em.transformLine(t, d),
          p = f.start.clone(),
          m = e.getDataOfElement(i)
        if (!1 === r.insideout) {
          null == m.shapeBBox && (m.shapeBBox = l.bbox())
          const t = m.shapeBBox
          if (null != t && t.containsPoint(p)) return o
        }
        let y
        if ((!0 === r.extrapolate && f.setLength(1e6), cf.isPath(l))) {
          const t = r.precision || 2
          null == m.segmentSubdivisions &&
            (m.segmentSubdivisions = l.getSegmentSubdivisions({
              precision: t,
            })),
            (y = { precision: t, segmentSubdivisions: m.segmentSubdivisions }),
            (s = f.intersect(l, y))
        } else s = f.intersect(l)
        s
          ? Array.isArray(s) && (s = p.closest(s))
          : !0 === r.sticky &&
            (s = zd.isRectangle(l)
              ? l.getNearestPointToPoint(p)
              : Fd.isEllipse(l)
              ? l.intersectsWithLineFromCenterToPoint(p)
              : l.closestPoint(p, y))
        const v = s ? em.transformPoint(s, g) : o
        let b = r.offset || 0
        return (
          !1 !== r.stroked &&
            ('object' == typeof b
              ? ((b = Object.assign({}, b)),
                null == b.x && (b.x = 0),
                (b.x += Ay(i) / 2))
              : (b += Ay(i) / 2)),
          Py(v, t.start, b)
        )
      },
      anchor: function (t, e, n, r) {
        const { alignOffset: i, align: s } = r
        return (
          s &&
            (function (t, e, n = 0) {
              const { start: r, end: i } = t
              let s, o, a, l
              switch (e) {
                case 'left':
                  ;(l = 'x'), (s = i), (o = r), (a = -1)
                  break
                case 'right':
                  ;(l = 'x'), (s = r), (o = i), (a = 1)
                  break
                case 'top':
                  ;(l = 'y'), (s = i), (o = r), (a = -1)
                  break
                case 'bottom':
                  ;(l = 'y'), (s = r), (o = i), (a = 1)
                  break
                default:
                  return
              }
              r[l] < i[l] ? (s[l] = o[l]) : (o[l] = s[l]),
                Number.isFinite(n) && ((s[l] += a * n), (o[l] += a * n))
            })(t, s, i),
          Py(t.end, t.start, r.offset)
        )
      },
    })
  !(function (t) {
    ;(t.presets = Ey),
      (t.registry = hf.create({ type: 'connection point' })),
      t.registry.register(t.presets, !0)
  })(Oy || (Oy = {}))
  function My(t) {
    return new zd(t.x, t.y, 0, 0)
  }
  function Sy(t = {}) {
    const e = Su(t.padding || 20)
    return {
      x: -e.left,
      y: -e.top,
      width: e.left + e.right,
      height: e.top + e.bottom,
    }
  }
  function Ty(t, e = {}) {
    return t.sourceBBox.clone().moveAndExpand(Sy(e))
  }
  function jy(t, e = {}) {
    return t.targetBBox.clone().moveAndExpand(Sy(e))
  }
  const ky = function (t, e, n) {
    let r = Ty(n, e),
      i = jy(n, e)
    const s = (function (t, e = {}) {
        return t.sourceAnchor ? t.sourceAnchor : Ty(t, e).getCenter()
      })(n, e),
      o = (function (t, e = {}) {
        return t.targetAnchor ? t.targetAnchor : jy(t, e).getCenter()
      })(n, e)
    ;(r = r.union(My(s))), (i = i.union(My(o)))
    const a = t.map((t) => Vd.create(t))
    a.unshift(s), a.push(o)
    let l = null
    const c = []
    for (let t = 0, n = a.length - 1; t < n; t += 1) {
      let s = null
      const o = a[t],
        h = a[t + 1],
        u = null != Ny.getBearing(o, h)
      if (0 === t)
        t + 1 === n
          ? r.intersectsWithRect(i.clone().inflate(1))
            ? (s = Ny.insideNode(o, h, r, i))
            : u || (s = Ny.nodeToNode(o, h, r, i))
          : r.containsPoint(h)
          ? (s = Ny.insideNode(o, h, r, My(h).moveAndExpand(Sy(e))))
          : u || (s = Ny.nodeToVertex(o, h, r))
      else if (t + 1 === n) {
        const t = u && Ny.getBearing(h, o) === l
        i.containsPoint(o) || t
          ? (s = Ny.insideNode(o, h, My(o).moveAndExpand(Sy(e)), i, l))
          : u || (s = Ny.vertexToNode(o, h, i, l))
      } else u || (s = Ny.vertexToVertex(o, h, l))
      s ? (c.push(...s.points), (l = s.direction)) : (l = Ny.getBearing(o, h)),
        t + 1 < n && c.push(h)
    }
    return c
  }
  var Ny
  !(function (t) {
    const e = { N: 'S', S: 'N', E: 'W', W: 'E' },
      n = { N: (-Math.PI / 2) * 3, S: -Math.PI / 2, E: 0, W: Math.PI }
    function r(t, e, n) {
      let r = new Vd(t.x, e.y)
      return n.containsPoint(r) && (r = new Vd(e.x, t.y)), r
    }
    function i(t, e) {
      return t['W' === e || 'E' === e ? 'width' : 'height']
    }
    function s(t, e) {
      return t.x === e.x
        ? t.y > e.y
          ? 'N'
          : 'S'
        : t.y === e.y
        ? t.x > e.x
          ? 'W'
          : 'E'
        : null
    }
    function o(t, n, r) {
      const i = new Vd(t.x, n.y),
        o = new Vd(n.x, t.y),
        a = s(t, i),
        l = s(t, o),
        c = r ? e[r] : null,
        h = a === r || (a !== c && (l === c || l !== r)) ? i : o
      return { points: [h], direction: s(h, n) }
    }
    function a(t, e, n) {
      const i = r(t, e, n)
      return { points: [i], direction: s(i, e) }
    }
    ;(t.getBBoxSize = i),
      (t.getBearing = s),
      (t.vertexToVertex = o),
      (t.nodeToVertex = a),
      (t.vertexToNode = function (t, e, n, o) {
        const a = [new Vd(t.x, e.y), new Vd(e.x, t.y)],
          l = a.filter((t) => !n.containsPoint(t)),
          c = l.filter((e) => s(e, t) !== o)
        let h
        if (c.length > 0)
          return (
            (h = c.filter((e) => s(t, e) === o).pop()),
            (h = h || c[0]),
            { points: [h], direction: s(h, e) }
          )
        {
          h = io(a, l)[0]
          const c = Vd.create(e).move(h, -i(n, o) / 2)
          return { points: [r(c, t, n), c], direction: s(c, e) }
        }
      }),
      (t.nodeToNode = function (t, e, n, r) {
        let l = a(e, t, r)
        const c = l.points[0]
        if (n.containsPoint(c)) {
          l = a(t, e, n)
          const h = l.points[0]
          if (r.containsPoint(h)) {
            const u = Vd.create(t).move(h, -i(n, s(t, h)) / 2),
              g = Vd.create(e).move(c, -i(r, s(e, c)) / 2),
              d = new $d(u, g).getCenter(),
              f = a(t, d, n),
              p = o(d, e, f.direction)
            ;(l.points = [f.points[0], p.points[0]]),
              (l.direction = p.direction)
          }
        }
        return l
      }),
      (t.insideNode = function (t, e, i, o, a) {
        const l = i.union(o).inflate(1),
          c = l.getCenter(),
          h = c.distance(e) > c.distance(t),
          u = h ? e : t,
          g = h ? t : e
        let d, f, p, m
        return (
          a
            ? ((d = Vd.fromPolar(l.width + l.height, n[a], u)),
              (d = l.getNearestPointToPoint(d).move(d, -1)))
            : (d = l.getNearestPointToPoint(u).move(u, 1)),
          (f = r(d, g, l)),
          d.round().equals(f.round())
            ? ((f = Vd.fromPolar(
                l.width + l.height,
                Bd.toRad(d.theta(u)) + Math.PI / 2,
                g,
              )),
              (f = l.getNearestPointToPoint(f).move(g, 1).round()),
              (p = r(d, f, l)),
              (m = h ? [f, p, d] : [d, p, f]))
            : (m = h ? [f, d] : [d, f]),
          { points: m, direction: s(h ? d : f, e) }
        )
      })
  })(Ny || (Ny = {}))
  const _y = {
    step: 10,
    maxLoopCount: 2e3,
    precision: 1,
    maxDirectionChange: 90,
    perpendicular: !0,
    excludeTerminals: [],
    excludeShapes: [],
    excludeNodes: [],
    excludeHiddenNodes: !1,
    startDirections: ['top', 'right', 'bottom', 'left'],
    endDirections: ['top', 'right', 'bottom', 'left'],
    directionMap: {
      top: { x: 0, y: -1 },
      right: { x: 1, y: 0 },
      bottom: { x: 0, y: 1 },
      left: { x: -1, y: 0 },
    },
    cost() {
      return Ly(this.step, this)
    },
    directions() {
      const t = Ly(this.step, this),
        e = Ly(this.cost, this)
      return [
        { cost: e, offsetX: t, offsetY: 0 },
        { cost: e, offsetX: -t, offsetY: 0 },
        { cost: e, offsetX: 0, offsetY: t },
        { cost: e, offsetX: 0, offsetY: -t },
      ]
    },
    penalties() {
      const t = Ly(this.step, this)
      return { 0: 0, 45: t / 2, 90: t / 2 }
    },
    paddingBox() {
      const t = Ly(this.step, this)
      return { x: -t, y: -t, width: 2 * t, height: 2 * t }
    },
    fallbackRouter: ky,
    draggingRouter: null,
  }
  function Ly(t, e) {
    return 'function' == typeof t ? t.call(e) : t
  }
  class Iy {
    constructor() {
      ;(this.items = []), (this.hash = {}), (this.values = {})
    }
    add(t, e) {
      this.hash[t]
        ? this.items.splice(this.items.indexOf(t), 1)
        : (this.hash[t] = 1),
        (this.values[t] = e)
      const n = Bc(this.items, t, (t) => this.values[t])
      this.items.splice(n, 0, t)
    }
    pop() {
      const t = this.items.shift()
      return t && (this.hash[t] = 2), t
    }
    isOpen(t) {
      return 1 === this.hash[t]
    }
    isClose(t) {
      return 2 === this.hash[t]
    }
    isEmpty() {
      return 0 === this.items.length
    }
  }
  class By {
    constructor(t) {
      ;(this.options = t), (this.mapGridSize = 100), (this.map = {})
    }
    build(t, e) {
      const n = this.options,
        r = n.excludeTerminals.reduce((n, r) => {
          const i = e[r]
          if (i) {
            const e = t.getCell(i.cell)
            e && n.push(e)
          }
          return n
        }, [])
      let i = []
      const s = t.getCell(e.getSourceCellId())
      s &&
        (i = yh(
          i,
          s.getAncestors().map((t) => t.id),
        ))
      const o = t.getCell(e.getTargetCellId())
      o &&
        (i = yh(
          i,
          o.getAncestors().map((t) => t.id),
        ))
      const a = this.mapGridSize
      return (
        t.getNodes().reduce((t, e) => {
          const s = e.shape,
            o = n.excludeShapes,
            l = !!s && o.includes(s),
            c = r.some((t) => t.id === e.id),
            h = n.excludeNodes.includes(e),
            u = i.includes(e.id),
            g = n.excludeHiddenNodes && !e.isVisible()
          if (!(l || c || h || u || g)) {
            const r = e.getBBox().moveAndExpand(n.paddingBox),
              i = r.getOrigin().snapToGrid(a),
              s = r.getCorner().snapToGrid(a)
            for (let e = i.x; e <= s.x; e += a)
              for (let n = i.y; n <= s.y; n += a) {
                const i = new Vd(e, n).toString()
                null == t[i] && (t[i] = []), t[i].push(r)
              }
          }
          return t
        }, this.map),
        this
      )
    }
    isAccessible(t) {
      const e = t.clone().snapToGrid(this.mapGridSize).toString(),
        n = this.map[e]
      return !n || n.every((e) => !e.containsPoint(t))
    }
  }
  function Ry(t, e) {
    const n = t.sourceBBox.clone()
    return e && e.paddingBox ? n.moveAndExpand(e.paddingBox) : n
  }
  function Dy(t, e) {
    const n = t.targetBBox.clone()
    return e && e.paddingBox ? n.moveAndExpand(e.paddingBox) : n
  }
  function Vy(t, e) {
    if (t.sourceAnchor) return t.sourceAnchor
    return Ry(t, e).getCenter()
  }
  function zy(t, e, n, r, i) {
    const s = 360 / n,
      o = t.theta(
        (function (t, e, n, r) {
          const i = r.step,
            s = e.x - t.x,
            o = e.y - t.y,
            a = s / n.x,
            l = o / n.y,
            c = a * i,
            h = l * i
          return new Vd(t.x + c, t.y + h)
        })(t, e, r, i),
      ),
      a = Bd.normalize(o + s / 2)
    return s * Math.floor(a / s)
  }
  function $y(t, e) {
    const n = Math.abs(t - e)
    return n > 180 ? 360 - n : n
  }
  function Fy(t, e) {
    if (!t) return e
    const n = Math.abs(t),
      r = Math.round(n / e)
    if (!r) return n
    return e + (n - r * e) / r
  }
  function qy(t, e) {
    return t.round(e)
  }
  function Gy(t, e, n) {
    return qy(
      (function (t, e) {
        const n = e.source,
          r = Rd.snapToGrid(t.x - n.x, e.x) + n.x,
          i = Rd.snapToGrid(t.y - n.y, e.y) + n.y
        return new Vd(r, i)
      })(t.clone(), e),
      n,
    )
  }
  function Wy(t) {
    return t.toString()
  }
  function Hy(t) {
    return new Vd(
      0 === t.x ? 0 : Math.abs(t.x) / t.x,
      0 === t.y ? 0 : Math.abs(t.y) / t.y,
    )
  }
  function Uy(t, e) {
    let n = 1 / 0
    for (let r = 0, i = e.length; r < i; r += 1) {
      const i = t.manhattanDistance(e[r])
      i < n && (n = i)
    }
    return n
  }
  function Jy(t, e, n, r, i) {
    const s = i.precision,
      o = i.directionMap,
      a = t.diff(e.getCenter()),
      l = Object.keys(o).reduce((i, l) => {
        if (n.includes(l)) {
          const n = o[l],
            c = new Vd(
              t.x + n.x * (Math.abs(a.x) + e.width),
              t.y + n.y * (Math.abs(a.y) + e.height),
            ),
            h = new $d(t, c).intersect(e) || []
          let u,
            g = null
          for (let e = 0; e < h.length; e += 1) {
            const n = h[e],
              r = t.squaredDistance(n)
            ;(null == u || r > u) && ((u = r), (g = n))
          }
          if (g) {
            let t = Gy(g, r, s)
            e.containsPoint(t) &&
              (t = Gy(t.translate(n.x * r.x, n.y * r.y), r, s)),
              i.push(t)
          }
        }
        return i
      }, [])
    return e.containsPoint(t) || l.push(Gy(t, r, s)), l
  }
  function Xy(t, e, n, r, i) {
    const s = []
    let o,
      a = Hy(i.diff(n)),
      l = Wy(n),
      c = t[l]
    for (; c; ) {
      o = e[l]
      const n = Hy(o.diff(c))
      n.equals(a) || (s.unshift(o), (a = n)), (l = Wy(c)), (c = t[l])
    }
    const h = e[l]
    return Hy(h.diff(r)).equals(a) || s.unshift(h), s
  }
  function Yy(t, e, n, r, i) {
    const s = i.precision
    let o, a
    ;(o = zd.isRectangle(e) ? qy(Vy(t, i).clone(), s) : qy(e.clone(), s)),
      (a = zd.isRectangle(n)
        ? qy(
            (function (t, e) {
              return t.targetAnchor ? t.targetAnchor : Dy(t, e).getCenter()
            })(t, i).clone(),
            s,
          )
        : qy(n.clone(), s))
    const l = (function (t, e, n) {
        return { source: e.clone(), x: Fy(n.x - e.x, t), y: Fy(n.y - e.y, t) }
      })(i.step, o, a),
      c = o,
      h = a
    let u, g
    if (
      ((u = zd.isRectangle(e) ? Jy(c, e, i.startDirections, l, i) : [c]),
      (g = zd.isRectangle(n) ? Jy(a, n, i.endDirections, l, i) : [h]),
      (u = u.filter((t) => r.isAccessible(t))),
      (g = g.filter((t) => r.isAccessible(t))),
      u.length > 0 && g.length > 0)
    ) {
      const t = new Iy(),
        e = {},
        n = {},
        o = {}
      for (let n = 0, r = u.length; n < r; n += 1) {
        const r = u[n],
          i = Wy(r)
        t.add(i, Uy(r, g)), (e[i] = r), (o[i] = 0)
      }
      const a = i.previousDirectionAngle,
        d = void 0 === a
      let f, p
      const m = (function (t, e) {
          const n = e.step
          return (
            e.directions.forEach((e) => {
              ;(e.gridOffsetX = (e.offsetX / n) * t.x),
                (e.gridOffsetY = (e.offsetY / n) * t.y)
            }),
            e.directions
          )
        })(l, i),
        y = m.length,
        v = g.reduce((t, e) => {
          const n = Wy(e)
          return t.push(n), t
        }, []),
        b = Vd.equalPoints(u, g)
      let x = i.maxLoopCount
      for (; !t.isEmpty() && x > 0; ) {
        const u = t.pop(),
          w = e[u],
          P = n[u],
          A = o[u],
          C = w.equals(c),
          O = null == P
        let E
        E = O ? (d ? (C ? null : zy(c, w, y, l, i)) : a) : zy(P, w, y, l, i)
        if (!(O && b) && v.indexOf(u) >= 0)
          return (i.previousDirectionAngle = E), Xy(n, e, w, c, h)
        for (let a = 0; a < y; a += 1) {
          f = m[a]
          const c = f.angle
          if (((p = $y(E, c)), (!d || !C) && p > i.maxDirectionChange)) continue
          const u = Gy(
              w.clone().translate(f.gridOffsetX || 0, f.gridOffsetY || 0),
              l,
              s,
            ),
            b = Wy(u)
          if (t.isClose(b) || !r.isAccessible(u)) continue
          if (v.indexOf(b) >= 0) {
            if (!u.equals(h)) {
              if ($y(c, zy(u, h, y, l, i)) > i.maxDirectionChange) continue
            }
          }
          const x = A + f.cost + (C ? 0 : i.penalties[p])
          ;(!t.isOpen(b) || x < o[b]) &&
            ((e[b] = u), (n[b] = w), (o[b] = x), t.add(b, x + Uy(u, g)))
        }
        x -= 1
      }
    }
    return i.fallbackRoute ? au(i.fallbackRoute, this, c, h, i) : null
  }
  const Zy = function (t, e, n) {
      const r = (function (t) {
          const e = Object.keys(t).reduce(
            (e, n) => (
              (e[n] =
                'fallbackRouter' === n ||
                'draggingRouter' === n ||
                'fallbackRoute' === n
                  ? t[n]
                  : Ly(t[n], t)),
              e
            ),
            {},
          )
          if (e.padding) {
            const t = Su(e.padding)
            e.paddingBox = {
              x: -t.left,
              y: -t.top,
              width: t.left + t.right,
              height: t.top + t.bottom,
            }
          }
          return (
            e.directions.forEach((t) => {
              const e = new Vd(0, 0),
                n = new Vd(t.offsetX, t.offsetY)
              t.angle = Bd.normalize(e.theta(n))
            }),
            e
          )
        })(e),
        i = Ry(n, r),
        s = Dy(n, r),
        o = Vy(n, r),
        a = new By(r).build(n.graph.model, n.cell),
        l = t.map((t) => Vd.create(t)),
        c = []
      let h,
        u,
        g = o
      for (let e = 0, d = l.length; e <= d; e += 1) {
        let d = null
        if (((h = u || i), (u = l[e]), null == u)) {
          u = s
          const t = n.cell
          if (
            (null == t.getSourceCellId() || null == t.getTargetCellId()) &&
            'function' == typeof r.draggingRouter
          ) {
            const t = h === i ? o : h,
              e = u.getOrigin()
            d = au(r.draggingRouter, n, t, e, r)
          }
        }
        if ((null == d && (d = Yy(n, h, u, a, r)), null === d))
          return (
            console.warn(
              'Unable to execute manhattan algorithm, use orth instead',
            ),
            au(r.fallbackRouter, this, t, r, n)
          )
        const f = d[0]
        f && f.equals(g) && d.shift(), (g = d[d.length - 1] || g), c.push(...d)
      }
      return c
    },
    Ky = function (t, e, n) {
      return au(Zy, this, t, Object.assign(Object.assign({}, _y), e), n)
    },
    Qy = {
      maxDirectionChange: 45,
      directions() {
        const t = Ly(this.step, this),
          e = Ly(this.cost, this),
          n = Math.ceil(Math.sqrt((t * t) << 1))
        return [
          { cost: e, offsetX: t, offsetY: 0 },
          { cost: n, offsetX: t, offsetY: t },
          { cost: e, offsetX: 0, offsetY: t },
          { cost: n, offsetX: -t, offsetY: t },
          { cost: e, offsetX: -t, offsetY: 0 },
          { cost: n, offsetX: -t, offsetY: -t },
          { cost: e, offsetX: 0, offsetY: -t },
          { cost: n, offsetX: t, offsetY: -t },
        ]
      },
      fallbackRoute(t, e, n) {
        const r = t.theta(e),
          i = []
        let s = { x: e.x, y: t.y },
          o = { x: t.x, y: e.y }
        if (r % 180 > 90) {
          const t = s
          ;(s = o), (o = t)
        }
        const a = r % 90 < 45 ? s : o,
          l = new $d(t, a),
          c = 90 * Math.ceil(r / 90),
          h = Vd.fromPolar(l.squaredLength(), Bd.toRad(c + 135), a),
          u = new $d(e, h),
          g = l.intersectsWithLine(u),
          d = g || e,
          f = g ? d : t,
          p = 360 / n.directions.length,
          m = f.theta(e),
          y = Bd.normalize(m + p / 2),
          v = p * Math.floor(y / p)
        return (
          (n.previousDirectionAngle = v), d && i.push(d.round()), i.push(e), i
        )
      },
    }
  function tv(t, e) {
    if (null != e && !1 !== e) {
      const n = 'boolean' == typeof e ? 0 : e
      if (n > 0) {
        const e = Vd.create(t[1]).move(t[2], n),
          r = Vd.create(t[1]).move(t[0], n)
        return [e.toJSON(), ...t, r.toJSON()]
      }
      {
        const e = t[1]
        return [Object.assign({}, e), ...t, Object.assign({}, e)]
      }
    }
    return t
  }
  var ev,
    nv = Object.freeze({
      __proto__: null,
      normal: function (t) {
        return [...t]
      },
      oneSide: function (t, e, n) {
        const r = e.side || 'bottom',
          i = Su(e.padding || 40),
          s = n.sourceBBox,
          o = n.targetBBox,
          a = s.getCenter(),
          l = o.getCenter()
        let c, h, u
        switch (r) {
          case 'top':
            ;(u = -1), (c = 'y'), (h = 'height')
            break
          case 'left':
            ;(u = -1), (c = 'x'), (h = 'width')
            break
          case 'right':
            ;(u = 1), (c = 'x'), (h = 'width')
            break
          default:
            ;(u = 1), (c = 'y'), (h = 'height')
        }
        return (
          (a[c] += u * (s[h] / 2 + i[r])),
          (l[c] += u * (o[h] / 2 + i[r])),
          u * (a[c] - l[c]) > 0 ? (l[c] = a[c]) : (a[c] = l[c]),
          [a.toJSON(), ...t, l.toJSON()]
        )
      },
      orth: ky,
      metro: function (t, e, n) {
        return au(Ky, this, t, Object.assign(Object.assign({}, Qy), e), n)
      },
      manhattan: Ky,
      er: function (t, e, n) {
        const r = e.offset || 32,
          i = null == e.min ? 16 : e.min
        let s = 0,
          o = e.direction
        const a = n.sourceBBox,
          l = n.targetBBox,
          c = a.getCenter(),
          h = l.getCenter()
        if (('number' == typeof r && (s = r), null == o)) {
          let t = l.left - a.right,
            e = l.top - a.bottom
          t >= 0 && e >= 0
            ? (o = t >= e ? 'L' : 'T')
            : t <= 0 && e >= 0
            ? ((t = a.left - l.right), (o = t >= 0 && t >= e ? 'R' : 'T'))
            : t >= 0 && e <= 0
            ? ((e = a.top - l.bottom),
              (o = e >= 0 ? (t >= e ? 'L' : 'B') : 'L'))
            : ((t = a.left - l.right),
              (e = a.top - l.bottom),
              (o =
                t >= 0 && e >= 0
                  ? t >= e
                    ? 'R'
                    : 'B'
                  : t <= 0 && e >= 0
                  ? 'B'
                  : (t >= 0 && e <= 0) || Math.abs(t) > Math.abs(e)
                  ? 'R'
                  : 'B'))
        }
        let u, g, d
        'H' === o
          ? (o = h.x - c.x >= 0 ? 'L' : 'R')
          : 'V' === o && (o = h.y - c.y >= 0 ? 'T' : 'B'),
          'center' === r &&
            ('L' === o
              ? (s = (l.left - a.right) / 2)
              : 'R' === o
              ? (s = (a.left - l.right) / 2)
              : 'T' === o
              ? (s = (l.top - a.bottom) / 2)
              : 'B' === o && (s = (a.top - l.bottom) / 2))
        const f = 'L' === o || 'R' === o
        if (f) {
          if (h.y === c.y) return [...t]
          ;(d = 'L' === o ? 1 : -1), (u = 'x'), (g = 'width')
        } else {
          if (h.x === c.x) return [...t]
          ;(d = 'T' === o ? 1 : -1), (u = 'y'), (g = 'height')
        }
        const p = c.clone(),
          m = h.clone()
        if (((p[u] += d * (a[g] / 2 + s)), (m[u] -= d * (l[g] / 2 + s)), f)) {
          const t = p.x,
            e = m.x,
            n = a.width / 2 + i,
            r = l.width / 2 + i
          h.x > c.x
            ? e <= t &&
              ((p.x = Math.max(e, c.x + n)), (m.x = Math.min(t, h.x - r)))
            : e >= t &&
              ((p.x = Math.min(e, c.x - n)), (m.x = Math.max(t, h.x + r)))
        } else {
          const t = p.y,
            e = m.y,
            n = a.height / 2 + i,
            r = l.height / 2 + i
          h.y > c.y
            ? e <= t &&
              ((p.y = Math.max(e, c.y + n)), (m.y = Math.min(t, h.y - r)))
            : e >= t &&
              ((p.y = Math.min(e, c.y - n)), (m.y = Math.max(t, h.y + r)))
        }
        return [p.toJSON(), ...t, m.toJSON()]
      },
      loop: function (t, e, n) {
        const r = e.width || 50,
          i = (e.height || 80) / 2,
          s = e.angle || 'auto',
          o = n.sourceAnchor,
          a = n.targetAnchor,
          l = n.sourceBBox,
          c = n.targetBBox
        if (o.equals(a)) {
          const t = (t) => {
              const e = Bd.toRad(t),
                n = Math.sin(e),
                s = Math.cos(e),
                a = new Vd(o.x + s * r, o.y + n * r),
                l = new Vd(a.x - s * i, a.y - n * i),
                c = l.clone().rotate(-90, a),
                h = l.clone().rotate(90, a)
              return [c.toJSON(), a.toJSON(), h.toJSON()]
            },
            n = (t) => {
              const e = o.clone().move(t, -1),
                n = new $d(e, t)
              return !l.containsPoint(t) && !l.intersectsWithLine(n)
            },
            a = [0, 90, 180, 270, 45, 135, 225, 315]
          if ('number' == typeof s) return tv(t(s), e.merge)
          const c = l.getCenter()
          if (c.equals(o)) return tv(t(0), e.merge)
          const h = c.angleBetween(o, c.clone().translate(1, 0))
          let u = t(h)
          if (n(u[1])) return tv(u, e.merge)
          for (let r = 1, i = a.length; r < i; r += 1)
            if (((u = t(h + a[r])), n(u[1]))) return tv(u, e.merge)
          return tv(u, e.merge)
        }
        {
          const t = new $d(o, a)
          let s = t.parallel(-r),
            h = s.getCenter(),
            u = s.start.clone().move(s.end, i),
            g = s.end.clone().move(s.start, i)
          const d = t.parallel(-1),
            f = new $d(d.start, h),
            p = new $d(d.end, h)
          if (
            ((l.containsPoint(h) ||
              c.containsPoint(h) ||
              l.intersectsWithLine(f) ||
              l.intersectsWithLine(p) ||
              c.intersectsWithLine(f) ||
              c.intersectsWithLine(p)) &&
              ((s = t.parallel(r)),
              (h = s.getCenter()),
              (u = s.start.clone().move(s.end, i)),
              (g = s.end.clone().move(s.start, i))),
            e.merge)
          ) {
            const t = new $d(o, a),
              e = new $d(h, t.center).setLength(Number.MAX_SAFE_INTEGER),
              r = l.intersectsWithLine(e),
              i = c.intersectsWithLine(e),
              s = r ? (Array.isArray(r) ? r : [r]) : []
            i && (Array.isArray(i) ? s.push(...i) : s.push(i))
            const u = t.center.closest(s)
            u
              ? ((n.sourceAnchor = u.clone()), (n.targetAnchor = u.clone()))
              : ((n.sourceAnchor = t.center.clone()),
                (n.targetAnchor = t.center.clone()))
          }
          return tv([u.toJSON(), h.toJSON(), g.toJSON()], e.merge)
        }
      },
    })
  !(function (t) {
    ;(t.presets = nv),
      (t.registry = hf.create({ type: 'router' })),
      t.registry.register(t.presets, !0)
  })(ev || (ev = {}))
  const rv = 1 / 3,
    iv = 2 / 3
  function sv(t, e, n = []) {
    const r = [t, ...n, e],
      i = []
    return (
      r.forEach((t, e) => {
        const n = r[e + 1]
        null != n && i.push(new $d(t, n))
      }),
      i
    )
  }
  function ov(t, e) {
    return new $d(t, e).squaredLength()
  }
  function av(t, e, n, r) {
    const i = new cf()
    let s
    return (
      (s = cf.createSegment('M', t[0].start)),
      i.appendSegment(s),
      t.forEach((o, a) => {
        if (lv.includes(o)) {
          let t, r, a, l
          if ('arc' === n) {
            ;(t = -90), (r = o.start.diff(o.end))
            ;(r.x < 0 || (0 === r.x && r.y < 0)) && (t += 180)
            const e = o.getCenter(),
              n = new $d(e, o.end).rotate(t, e)
            let c
            ;(c = new $d(o.start, e)),
              (a = c.pointAt(2 / 3).rotate(t, o.start)),
              (l = n.pointAt(1 / 3).rotate(-t, n.end)),
              (s = cf.createSegment('C', a, l, n.end)),
              i.appendSegment(s),
              (c = new $d(e, o.end)),
              (a = n.pointAt(1 / 3).rotate(t, n.end)),
              (l = c.pointAt(1 / 3).rotate(-t, o.end)),
              (s = cf.createSegment('C', a, l, o.end)),
              i.appendSegment(s)
          } else if ('gap' === n)
            (s = cf.createSegment('M', o.end)), i.appendSegment(s)
          else if ('cubic' === n) {
            t = o.start.theta(o.end)
            const n = 0.6 * e
            let c = 1.35 * e
            r = o.start.diff(o.end)
            ;(r.x < 0 || (0 === r.x && r.y < 0)) && (c *= -1),
              (a = new Vd(o.start.x + n, o.start.y + c).rotate(t, o.start)),
              (l = new Vd(o.end.x - n, o.end.y + c).rotate(t, o.end)),
              (s = cf.createSegment('C', a, l, o.end)),
              i.appendSegment(s)
          }
        } else {
          const e = t[a + 1]
          0 === r || !e || lv.includes(e)
            ? ((s = cf.createSegment('L', o.end)), i.appendSegment(s))
            : (function (t, e, n, r, i) {
                const s = n.distance(r) / 2,
                  o = n.distance(i) / 2,
                  a = -Math.min(t, s),
                  l = -Math.min(t, o),
                  c = n.clone().move(r, a).round(),
                  h = n.clone().move(i, l).round(),
                  u = new Vd(rv * c.x + iv * n.x, iv * n.y + rv * c.y),
                  g = new Vd(rv * h.x + iv * n.x, iv * n.y + rv * h.y)
                let d
                ;(d = cf.createSegment('L', c)),
                  e.appendSegment(d),
                  (d = cf.createSegment('C', u, g, h)),
                  e.appendSegment(d)
              })(r, i, o.end, o.start, e.end)
        }
      }),
      i
    )
  }
  let lv, cv
  var hv,
    uv = Object.freeze({
      __proto__: null,
      normal: function (t, e, n, r = {}) {
        const i = [t, ...n, e],
          s = new Xd(i),
          o = new cf(s)
        return r.raw ? o : o.serialize()
      },
      loop: function (t, e, n, r = {}) {
        const i = 3 === n.length ? 0 : 1,
          s = Vd.create(n[0 + i]),
          o = Vd.create(n[2 + i]),
          a = Vd.create(n[1 + i])
        if (!Vd.equals(t, e)) {
          const n = new Vd((t.x + e.x) / 2, (t.y + e.y) / 2),
            r = n.angleBetween(Vd.create(t).rotate(90, n), a)
          r > 1 &&
            (s.rotate(180 - r, n), o.rotate(180 - r, n), a.rotate(180 - r, n))
        }
        const l = `\n     M ${t.x} ${t.y}\n     Q ${s.x} ${s.y} ${a.x} ${a.y}\n     Q ${o.x} ${o.y} ${e.x} ${e.y}\n  `
        return r.raw ? cf.parse(l) : l
      },
      rounded: function (t, e, n, r = {}) {
        const i = new cf()
        i.appendSegment(cf.createSegment('M', t))
        const s = 1 / 3,
          o = 2 / 3,
          a = r.radius || 10
        let l, c
        for (let r = 0, h = n.length; r < h; r += 1) {
          const h = Vd.create(n[r]),
            u = n[r - 1] || t,
            g = n[r + 1] || e
          ;(l = c || h.distance(u) / 2), (c = h.distance(g) / 2)
          const d = -Math.min(a, l),
            f = -Math.min(a, c),
            p = h.clone().move(u, d).round(),
            m = h.clone().move(g, f).round(),
            y = new Vd(s * p.x + o * h.x, o * h.y + s * p.y),
            v = new Vd(s * m.x + o * h.x, o * h.y + s * m.y)
          i.appendSegment(cf.createSegment('L', p)),
            i.appendSegment(cf.createSegment('C', y, v, m))
        }
        return (
          i.appendSegment(cf.createSegment('L', e)), r.raw ? i : i.serialize()
        )
      },
      smooth: function (t, e, n, r = {}) {
        let i,
          s = r.direction
        if (n && 0 !== n.length) {
          const r = [t, ...n, e],
            s = Yd.throughPoints(r)
          i = new cf(s)
        } else if (
          ((i = new cf()),
          i.appendSegment(cf.createSegment('M', t)),
          s || (s = Math.abs(t.x - e.x) >= Math.abs(t.y - e.y) ? 'H' : 'V'),
          'H' === s)
        ) {
          const n = (t.x + e.x) / 2
          i.appendSegment(cf.createSegment('C', n, t.y, n, e.y, e.x, e.y))
        } else {
          const n = (t.y + e.y) / 2
          i.appendSegment(cf.createSegment('C', t.x, n, e.x, n, e.x, e.y))
        }
        return r.raw ? i : i.serialize()
      },
      jumpover: function (t, e, n, r = {}) {
        ;(lv = []),
          (cv = []),
          (function (t) {
            let e = t.graph._jumpOverUpdateList
            if (
              (null == e &&
                ((e = t.graph._jumpOverUpdateList = []),
                t.graph.on('cell:mouseup', () => {
                  const e = t.graph._jumpOverUpdateList
                  for (let t = 0; t < e.length; t += 1) e[t].update()
                }),
                t.graph.on('model:reseted', () => {
                  e = t.graph._jumpOverUpdateList = []
                })),
              e.indexOf(t) < 0)
            ) {
              e.push(t)
              const n = () => e.splice(e.indexOf(t), 1)
              t.cell.once('change:connector', n), t.cell.once('removed', n)
            }
          })(this)
        const i = r.size || 5,
          s = r.type || 'arc',
          o = r.radius || 0,
          a = r.ignoreConnectors || ['smooth'],
          l = this.graph,
          c = l.model.getEdges()
        if (1 === c.length) return av(sv(t, e, n), i, s, o)
        const h = this.cell,
          u = c.indexOf(h),
          g = l.options.connecting.connector || {},
          d = c.filter((t, e) => {
            const n = t.getConnector() || g
            return !a.includes(n.name) && (!(e > u) || 'jumpover' !== n.name)
          }),
          f = d.map((t) => l.findViewByCell(t)),
          p = sv(t, e, n),
          m = f.map((t) =>
            null == t
              ? []
              : t === this
              ? p
              : sv(t.sourcePoint, t.targetPoint, t.routePoints),
          ),
          y = []
        p.forEach((t) => {
          const e = d
            .reduce((e, n, r) => {
              if (n !== h) {
                const n = (function (t, e) {
                  const n = []
                  return (
                    e.forEach((e) => {
                      const r = t.intersectsWithLine(e)
                      r && n.push(r)
                    }),
                    n
                  )
                })(t, m[r])
                e.push(...n)
              }
              return e
            }, [])
            .sort((e, n) => ov(t.start, e) - ov(t.start, n))
          e.length > 0
            ? y.push(
                ...(function (t, e, n) {
                  return e.reduce((r, i, s) => {
                    if (cv.includes(i)) return r
                    const o = r.pop() || t,
                      a = Vd.create(i).move(o.start, -n)
                    let l = Vd.create(i).move(o.start, +n)
                    const c = e[s + 1]
                    if (null != c) {
                      const t = l.distance(c)
                      t <= n && ((l = c.move(o.start, t)), cv.push(c))
                    } else if (a.distance(o.end) < 2 * n + 1)
                      return r.push(o), r
                    if (l.distance(o.start) < 2 * n + 1) return r.push(o), r
                    const h = new $d(a, l)
                    return (
                      lv.push(h),
                      r.push(new $d(o.start, a), h, new $d(l, o.end)),
                      r
                    )
                  }, [])
                })(t, e, i),
              )
            : y.push(t)
        })
        const v = av(y, i, s, o)
        return (lv = []), (cv = []), r.raw ? v : v.serialize()
      },
    })
  !(function (t) {
    ;(t.presets = uv),
      (t.registry = hf.create({ type: 'connector' })),
      t.registry.register(t.presets, !0)
  })(hv || (hv = {}))
  var gv = function (t, e, n, r) {
    var i,
      s = arguments.length,
      o =
        s < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(t, e, n, r)
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }
  class dv extends bu {
    constructor(t = {}) {
      super(),
        (this.pending = !1),
        (this.changing = !1),
        (this.data = {}),
        this.mutate(Zi(t)),
        (this.changed = {})
    }
    mutate(t, e = {}) {
      const n = !0 === e.unset,
        r = !0 === e.silent,
        i = [],
        s = this.changing
      ;(this.changing = !0),
        s || ((this.previous = Zi(this.data)), (this.changed = {}))
      const o = this.data,
        a = this.previous,
        l = this.changed
      if (
        (Object.keys(t).forEach((e) => {
          const r = e,
            s = t[r]
          _a(o[r], s) || i.push(r),
            _a(a[r], s) ? delete l[r] : (l[r] = s),
            n ? delete o[r] : (o[r] = s)
        }),
        !r &&
          i.length > 0 &&
          ((this.pending = !0),
          (this.pendingOptions = e),
          i.forEach((t) => {
            this.emit('change:*', {
              key: t,
              options: e,
              store: this,
              current: o[t],
              previous: a[t],
            })
          })),
        s)
      )
        return this
      if (!r)
        for (; this.pending; )
          (this.pending = !1),
            this.emit('changed', {
              current: o,
              previous: a,
              store: this,
              options: this.pendingOptions,
            })
      return (
        (this.pending = !1),
        (this.changing = !1),
        (this.pendingOptions = null),
        this
      )
    }
    get(t, e) {
      if (null == t) return this.data
      const n = this.data[t]
      return null == n ? e : n
    }
    getPrevious(t) {
      if (this.previous) {
        const e = this.previous[t]
        return null == e ? void 0 : e
      }
    }
    set(t, e, n) {
      return (
        null != t &&
          ('object' == typeof t
            ? this.mutate(t, e)
            : this.mutate({ [t]: e }, n)),
        this
      )
    }
    remove(t, e) {
      const n = void 0,
        r = {}
      let i
      if ('string' == typeof t) (r[t] = n), (i = e)
      else if (Array.isArray(t)) t.forEach((t) => (r[t] = n)), (i = e)
      else {
        for (const t in this.data) r[t] = n
        i = t
      }
      return (
        this.mutate(r, Object.assign(Object.assign({}, i), { unset: !0 })), this
      )
    }
    getByPath(t) {
      return mu(this.data, t, '/')
    }
    setByPath(t, e, n = {}) {
      const r = '/',
        i = Array.isArray(t) ? [...t] : t.split(r),
        s = Array.isArray(t) ? t.join(r) : t,
        o = i[0],
        a = i.length
      if (
        ((n.propertyPath = s),
        (n.propertyValue = e),
        (n.propertyPathArray = i),
        1 === a)
      )
        this.set(o, e, n)
      else {
        const s = {}
        let l = s,
          c = o
        for (let t = 1; t < a; t += 1) {
          const e = i[t],
            n = Number.isFinite(Number(e))
          ;(l = l[c] = n ? [] : {}), (c = e)
        }
        yu(s, i, e, r)
        const h = Zi(this.data)
        n.rewrite && vu(h, t, r)
        const u = el(h, s)
        this.set(o, u[o], n)
      }
      return this
    }
    removeByPath(t, e) {
      const n = Array.isArray(t) ? t : t.split('/'),
        r = n[0]
      if (1 === n.length) this.remove(r, e)
      else {
        const t = n.slice(1),
          i = Zi(this.get(r))
        i && vu(i, t), this.set(r, i, e)
      }
      return this
    }
    hasChanged(t) {
      return null == t
        ? Object.keys(this.changed).length > 0
        : t in this.changed
    }
    getChanges(t) {
      if (null == t) return this.hasChanged() ? Zi(this.changed) : null
      const e = this.changing ? this.previous : this.data,
        n = {}
      let r
      for (const i in t) {
        const s = t[i]
        _a(e[i], s) || ((n[i] = s), (r = !0))
      }
      return r ? Zi(n) : null
    }
    toJSON() {
      return Zi(this.data)
    }
    clone() {
      return new (0, this.constructor)(this.data)
    }
    dispose() {
      this.off(),
        (this.data = {}),
        (this.previous = {}),
        (this.changed = {}),
        (this.pending = !1),
        (this.changing = !1),
        (this.pendingOptions = null),
        this.trigger('disposed', { store: this })
    }
  }
  gv([bu.dispose()], dv.prototype, 'dispose', null)
  class fv {
    constructor(t) {
      ;(this.cell = t), (this.ids = {}), (this.cache = {})
    }
    get() {
      return Object.keys(this.ids)
    }
    start(t, e, n = {}, r = '/') {
      const i = this.cell.getPropByPath(t),
        s = Gs(n, fv.defaultOptions),
        o = this.getTiming(s.timing),
        a = this.getInterp(s.interp, i, e)
      let l = 0
      const c = Array.isArray(t) ? t.join(r) : t,
        h = Array.isArray(t) ? t : t.split(r),
        u = () => {
          const t = new Date().getTime()
          0 === l && (l = t)
          let e = (t - l) / s.duration
          e < 1 ? (this.ids[c] = requestAnimationFrame(u)) : (e = 1)
          const r = a(o(e))
          this.cell.setPropByPath(h, r),
            n.progress &&
              n.progress(
                Object.assign(
                  { progress: e, currentValue: r },
                  this.getArgs(c),
                ),
              ),
            1 === e &&
              (this.cell.notify('transition:complete', this.getArgs(c)),
              n.complete && n.complete(this.getArgs(c)),
              this.cell.notify('transition:finish', this.getArgs(c)),
              n.finish && n.finish(this.getArgs(c)),
              this.clean(c))
        }
      return (
        setTimeout(() => {
          this.stop(t, void 0, r),
            (this.cache[c] = { startValue: i, targetValue: e, options: s }),
            (this.ids[c] = requestAnimationFrame(u)),
            this.cell.notify('transition:start', this.getArgs(c)),
            n.start && n.start(this.getArgs(c))
        }, n.delay),
        this.stop.bind(this, t, r, n)
      )
    }
    stop(t, e = {}, n = '/') {
      const r = Array.isArray(t) ? t : t.split(n)
      return (
        Object.keys(this.ids)
          .filter((t) => _a(r, t.split(n).slice(0, r.length)))
          .forEach((t) => {
            cancelAnimationFrame(this.ids[t])
            const n = this.cache[t],
              r = this.getArgs(t),
              i = Object.assign(Object.assign({}, n.options), e),
              s = i.jumpedToEnd
            s &&
              null != n.targetValue &&
              (this.cell.setPropByPath(t, n.targetValue),
              this.cell.notify('transition:end', Object.assign({}, r)),
              this.cell.notify('transition:complete', Object.assign({}, r)),
              i.complete && i.complete(Object.assign({}, r)))
            const o = Object.assign({ jumpedToEnd: s }, r)
            this.cell.notify('transition:stop', Object.assign({}, o)),
              i.stop && i.stop(Object.assign({}, o)),
              this.cell.notify('transition:finish', Object.assign({}, r)),
              i.finish && i.finish(Object.assign({}, r)),
              this.clean(t)
          }),
        this
      )
    }
    clean(t) {
      delete this.ids[t], delete this.cache[t]
    }
    getTiming(t) {
      return 'string' == typeof t ? jd[t] : t
    }
    getInterp(t, e, n) {
      return t
        ? t(e, n)
        : 'number' == typeof n
        ? kd.number(e, n)
        : 'string' == typeof n
        ? '#' === n[0]
          ? kd.color(e, n)
          : kd.unit(e, n)
        : kd.object(e, n)
    }
    getArgs(t) {
      const e = this.cache[t]
      return {
        path: t,
        startValue: e.startValue,
        targetValue: e.targetValue,
        cell: this.cell,
      }
    }
  }
  !(function (t) {
    t.defaultOptions = { delay: 10, duration: 100, timing: 'linear' }
  })(fv || (fv = {}))
  var pv,
    mv = function (t, e, n, r) {
      var i,
        s = arguments.length,
        o =
          s < 3
            ? e
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(e, n))
            : r
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        o = Reflect.decorate(t, e, n, r)
      else
        for (var a = t.length - 1; a >= 0; a--)
          (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
      return s > 3 && o && Object.defineProperty(e, n, o), o
    },
    yv = function (t, e) {
      var n = {}
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r])
      if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0
        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
          e.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
            (n[r[i]] = t[r[i]])
      }
      return n
    }
  class vv extends bu {
    constructor(t = {}) {
      super()
      const e = this.constructor.getDefaults(!0),
        n = el({}, this.preprocess(e), this.preprocess(t))
      ;(this.id = n.id || Cu()),
        (this.store = new dv(n)),
        (this.animation = new fv(this)),
        this.setup(),
        this.init(),
        this.postprocess(t)
    }
    static config(t) {
      const { markup: e, propHooks: n, attrHooks: r } = t,
        i = yv(t, ['markup', 'propHooks', 'attrHooks'])
      null != e && (this.markup = e),
        n &&
          ((this.propHooks = this.propHooks.slice()),
          Array.isArray(n)
            ? this.propHooks.push(...n)
            : 'function' == typeof n
            ? this.propHooks.push(n)
            : Object.keys(n).forEach((t) => {
                const e = n[t]
                'function' == typeof e && this.propHooks.push(e)
              })),
        r &&
          (this.attrHooks = Object.assign(
            Object.assign({}, this.attrHooks),
            r,
          )),
        (this.defaults = el({}, this.defaults, i))
    }
    static getMarkup() {
      return this.markup
    }
    static getDefaults(t) {
      return t ? this.defaults : Zi(this.defaults)
    }
    static getAttrHooks() {
      return this.attrHooks
    }
    static applyPropHooks(t, e) {
      return this.propHooks.reduce((e, n) => (n ? au(n, t, e) : e), e)
    }
    get [Symbol.toStringTag]() {
      return vv.toStringTag
    }
    init() {}
    get model() {
      return this._model
    }
    set model(t) {
      this._model !== t && (this._model = t)
    }
    preprocess(t, e) {
      const n = t.id,
        r = this.constructor.applyPropHooks(this, t)
      return null == n && !0 !== e && (r.id = Cu()), r
    }
    postprocess(t) {}
    setup() {
      this.store.on('change:*', (t) => {
        const { key: e, current: n, previous: r, options: i } = t
        this.notify('change:*', {
          key: e,
          options: i,
          current: n,
          previous: r,
          cell: this,
        }),
          this.notify(`change:${e}`, {
            options: i,
            current: n,
            previous: r,
            cell: this,
          })
        const s = e
        ;('source' !== s && 'target' !== s) ||
          this.notify('change:terminal', {
            type: s,
            current: n,
            previous: r,
            options: i,
            cell: this,
          })
      }),
        this.store.on('changed', ({ options: t }) =>
          this.notify('changed', { options: t, cell: this }),
        )
    }
    notify(t, e) {
      this.trigger(t, e)
      const n = this.model
      return (
        n &&
          (n.notify(`cell:${t}`, e),
          this.isNode()
            ? n.notify(
                `node:${t}`,
                Object.assign(Object.assign({}, e), { node: this }),
              )
            : this.isEdge() &&
              n.notify(
                `edge:${t}`,
                Object.assign(Object.assign({}, e), { edge: this }),
              )),
        this
      )
    }
    isNode() {
      return !1
    }
    isEdge() {
      return !1
    }
    isSameStore(t) {
      return this.store === t.store
    }
    get view() {
      return this.store.get('view')
    }
    get shape() {
      return this.store.get('shape', '')
    }
    getProp(t, e) {
      return null == t ? this.store.get() : this.store.get(t, e)
    }
    setProp(t, e, n) {
      if ('string' == typeof t) this.store.set(t, e, n)
      else {
        const n = this.preprocess(t, !0)
        this.store.set(el({}, this.getProp(), n), e), this.postprocess(t)
      }
      return this
    }
    removeProp(t, e) {
      return (
        'string' == typeof t || Array.isArray(t)
          ? this.store.removeByPath(t, e)
          : this.store.remove(e),
        this
      )
    }
    hasChanged(t) {
      return null == t ? this.store.hasChanged() : this.store.hasChanged(t)
    }
    getPropByPath(t) {
      return this.store.getByPath(t)
    }
    setPropByPath(t, e, n = {}) {
      return (
        this.model &&
          ('children' === t
            ? (this._children = e
                ? e.map((t) => this.model.getCell(t)).filter((t) => null != t)
                : null)
            : 'parent' === t &&
              (this._parent = e ? this.model.getCell(e) : null)),
        this.store.setByPath(t, e, n),
        this
      )
    }
    removePropByPath(t, e = {}) {
      const n = Array.isArray(t) ? t : t.split('/')
      return (
        'attrs' === n[0] && (e.dirty = !0), this.store.removeByPath(n, e), this
      )
    }
    prop(t, e, n) {
      return null == t
        ? this.getProp()
        : 'string' == typeof t || Array.isArray(t)
        ? 1 === arguments.length
          ? this.getPropByPath(t)
          : null == e
          ? this.removePropByPath(t, n || {})
          : this.setPropByPath(t, e, n || {})
        : this.setProp(t, e || {})
    }
    previous(t) {
      return this.store.getPrevious(t)
    }
    get zIndex() {
      return this.getZIndex()
    }
    set zIndex(t) {
      null == t ? this.removeZIndex() : this.setZIndex(t)
    }
    getZIndex() {
      return this.store.get('zIndex')
    }
    setZIndex(t, e = {}) {
      return this.store.set('zIndex', t, e), this
    }
    removeZIndex(t = {}) {
      return this.store.remove('zIndex', t), this
    }
    toFront(t = {}) {
      const e = this.model
      if (e) {
        let n,
          r = e.getMaxZIndex()
        t.deep
          ? ((n = this.getDescendants({ deep: !0, breadthFirst: !0 })),
            n.unshift(this))
          : (n = [this]),
          (r = r - n.length + 1)
        const i = e.total()
        let s = e.indexOf(this) !== i - n.length
        s || (s = n.some((t, e) => t.getZIndex() !== r + e)),
          s &&
            this.batchUpdate('to-front', () => {
              ;(r += n.length),
                n.forEach((e, n) => {
                  e.setZIndex(r + n, t)
                })
            })
      }
      return this
    }
    toBack(t = {}) {
      const e = this.model
      if (e) {
        let n,
          r = e.getMinZIndex()
        t.deep
          ? ((n = this.getDescendants({ deep: !0, breadthFirst: !0 })),
            n.unshift(this))
          : (n = [this])
        let i = 0 !== e.indexOf(this)
        i || (i = n.some((t, e) => t.getZIndex() !== r + e)),
          i &&
            this.batchUpdate('to-back', () => {
              ;(r -= n.length),
                n.forEach((e, n) => {
                  e.setZIndex(r + n, t)
                })
            })
      }
      return this
    }
    get markup() {
      return this.getMarkup()
    }
    set markup(t) {
      null == t ? this.removeMarkup() : this.setMarkup(t)
    }
    getMarkup() {
      let t = this.store.get('markup')
      if (null == t) {
        t = this.constructor.getMarkup()
      }
      return t
    }
    setMarkup(t, e = {}) {
      return this.store.set('markup', t, e), this
    }
    removeMarkup(t = {}) {
      return this.store.remove('markup', t), this
    }
    get attrs() {
      return this.getAttrs()
    }
    set attrs(t) {
      null == t ? this.removeAttrs() : this.setAttrs(t)
    }
    getAttrs() {
      const t = this.store.get('attrs')
      return t ? Object.assign({}, t) : {}
    }
    setAttrs(t, e = {}) {
      if (null == t) this.removeAttrs(e)
      else {
        const n = (t) => this.store.set('attrs', t, e)
        if (!0 === e.overwrite) n(t)
        else {
          const r = this.getAttrs()
          !1 === e.deep
            ? n(Object.assign(Object.assign({}, r), t))
            : n(el({}, r, t))
        }
      }
      return this
    }
    replaceAttrs(t, e = {}) {
      return this.setAttrs(
        t,
        Object.assign(Object.assign({}, e), { overwrite: !0 }),
      )
    }
    updateAttrs(t, e = {}) {
      return this.setAttrs(t, Object.assign(Object.assign({}, e), { deep: !1 }))
    }
    removeAttrs(t = {}) {
      return this.store.remove('attrs', t), this
    }
    getAttrDefinition(t) {
      if (!t) return null
      const e = this.constructor.getAttrHooks() || {}
      let n = e[t] || Jp.registry.get(t)
      if (!n) {
        const r = Wr(t)
        n = e[r] || Jp.registry.get(r)
      }
      return n || null
    }
    getAttrByPath(t) {
      return null == t || '' === t
        ? this.getAttrs()
        : this.getPropByPath(this.prefixAttrPath(t))
    }
    setAttrByPath(t, e, n = {}) {
      return this.setPropByPath(this.prefixAttrPath(t), e, n), this
    }
    removeAttrByPath(t, e = {}) {
      return this.removePropByPath(this.prefixAttrPath(t), e), this
    }
    prefixAttrPath(t) {
      return Array.isArray(t) ? ['attrs'].concat(t) : `attrs/${t}`
    }
    attr(t, e, n) {
      return null == t
        ? this.getAttrByPath()
        : 'string' == typeof t || Array.isArray(t)
        ? 1 === arguments.length
          ? this.getAttrByPath(t)
          : null == e
          ? this.removeAttrByPath(t, n || {})
          : this.setAttrByPath(t, e, n || {})
        : this.setAttrs(t, e || {})
    }
    get visible() {
      return this.isVisible()
    }
    set visible(t) {
      this.setVisible(t)
    }
    setVisible(t, e = {}) {
      return this.store.set('visible', t, e), this
    }
    isVisible() {
      return !1 !== this.store.get('visible')
    }
    show(t = {}) {
      return this.isVisible() || this.setVisible(!0, t), this
    }
    hide(t = {}) {
      return this.isVisible() && this.setVisible(!1, t), this
    }
    toggleVisible(t, e = {}) {
      const n = 'boolean' == typeof t ? e : t
      return (
        ('boolean' == typeof t ? t : !this.isVisible())
          ? this.show(n)
          : this.hide(n),
        this
      )
    }
    get data() {
      return this.getData()
    }
    set data(t) {
      this.setData(t)
    }
    getData() {
      return this.store.get('data')
    }
    setData(t, e = {}) {
      if (null == t) this.removeData(e)
      else {
        const n = (t) => this.store.set('data', t, e)
        if (!0 === e.overwrite) n(t)
        else {
          const r = this.getData()
          !1 === e.deep
            ? n(
                'object' == typeof t
                  ? Object.assign(Object.assign({}, r), t)
                  : t,
              )
            : n(el({}, r, t))
        }
      }
      return this
    }
    replaceData(t, e = {}) {
      return this.setData(
        t,
        Object.assign(Object.assign({}, e), { overwrite: !0 }),
      )
    }
    updateData(t, e = {}) {
      return this.setData(t, Object.assign(Object.assign({}, e), { deep: !1 }))
    }
    removeData(t = {}) {
      return this.store.remove('data', t), this
    }
    get parent() {
      return this.getParent()
    }
    get children() {
      return this.getChildren()
    }
    getParentId() {
      return this.store.get('parent')
    }
    getParent() {
      const t = this.getParentId()
      if (t && this.model) {
        const e = this.model.getCell(t)
        return (this._parent = e), e
      }
      return null
    }
    getChildren() {
      const t = this.store.get('children')
      if (t && t.length && this.model) {
        const e = t
          .map((t) => {
            var e
            return null === (e = this.model) || void 0 === e
              ? void 0
              : e.getCell(t)
          })
          .filter((t) => null != t)
        return (this._children = e), [...e]
      }
      return null
    }
    hasParent() {
      return null != this.parent
    }
    isParentOf(t) {
      return null != t && t.getParent() === this
    }
    isChildOf(t) {
      return null != t && this.getParent() === t
    }
    eachChild(t, e) {
      return this.children && this.children.forEach(t, e), this
    }
    filterChild(t, e) {
      return this.children ? this.children.filter(t, e) : []
    }
    getChildCount() {
      return null == this.children ? 0 : this.children.length
    }
    getChildIndex(t) {
      return null == this.children ? -1 : this.children.indexOf(t)
    }
    getChildAt(t) {
      return null != this.children && t >= 0 ? this.children[t] : null
    }
    getAncestors(t = {}) {
      const e = []
      let n = this.getParent()
      for (; n; ) e.push(n), (n = !1 !== t.deep ? n.getParent() : null)
      return e
    }
    getDescendants(t = {}) {
      if (!1 !== t.deep) {
        if (t.breadthFirst) {
          const t = [],
            e = this.getChildren() || []
          for (; e.length > 0; ) {
            const n = e.shift(),
              r = n.getChildren()
            t.push(n), r && e.push(...r)
          }
          return t
        }
        {
          const e = this.getChildren() || []
          return (
            e.forEach((n) => {
              e.push(...n.getDescendants(t))
            }),
            e
          )
        }
      }
      return this.getChildren() || []
    }
    isDescendantOf(t, e = {}) {
      if (null == t) return !1
      if (!1 !== e.deep) {
        let e = this.getParent()
        for (; e; ) {
          if (e === t) return !0
          e = e.getParent()
        }
        return !1
      }
      return this.isChildOf(t)
    }
    isAncestorOf(t, e = {}) {
      return null != t && t.isDescendantOf(this, e)
    }
    contains(t) {
      return this.isAncestorOf(t)
    }
    getCommonAncestor(...t) {
      return vv.getCommonAncestor(this, ...t)
    }
    setParent(t, e = {}) {
      return (
        (this._parent = t),
        t ? this.store.set('parent', t.id, e) : this.store.remove('parent', e),
        this
      )
    }
    setChildren(t, e = {}) {
      return (
        (this._children = t),
        null != t
          ? this.store.set(
              'children',
              t.map((t) => t.id),
              e,
            )
          : this.store.remove('children', e),
        this
      )
    }
    unembed(t, e = {}) {
      const n = this.children
      if (null != n && null != t) {
        const r = this.getChildIndex(t)
        ;-1 !== r &&
          (n.splice(r, 1), t.setParent(null, e), this.setChildren(n, e))
      }
      return this
    }
    embed(t, e = {}) {
      return t.addTo(this, e), this
    }
    addTo(t, e = {}) {
      return vv.isCell(t) ? t.addChild(this, e) : t.addCell(this, e), this
    }
    insertTo(t, e, n = {}) {
      return t.insertChild(this, e, n), this
    }
    addChild(t, e = {}) {
      return this.insertChild(t, void 0, e)
    }
    insertChild(t, e, n = {}) {
      if (null != t && t !== this) {
        const r = t.getParent(),
          i = this !== r
        let s = e
        if ((null == s && ((s = this.getChildCount()), i || (s -= 1)), r)) {
          const e = r.getChildren()
          if (e) {
            const i = e.indexOf(t)
            i >= 0 &&
              (t.setParent(null, n), e.splice(i, 1), r.setChildren(e, n))
          }
        }
        let o = this.children
        if (
          (null == o ? ((o = []), o.push(t)) : o.splice(s, 0, t),
          t.setParent(this, n),
          this.setChildren(o, n),
          i && this.model)
        ) {
          const t = this.model.getIncomingEdges(this),
            e = this.model.getOutgoingEdges(this)
          t && t.forEach((t) => t.updateParent(n)),
            e && e.forEach((t) => t.updateParent(n))
        }
        this.model && this.model.addCell(t, n)
      }
      return this
    }
    removeFromParent(t = {}) {
      const e = this.getParent()
      if (null != e) {
        const n = e.getChildIndex(this)
        e.removeChildAt(n, t)
      }
      return this
    }
    removeChild(t, e = {}) {
      const n = this.getChildIndex(t)
      return this.removeChildAt(n, e)
    }
    removeChildAt(t, e = {}) {
      const n = this.getChildAt(t)
      return (
        null != this.children && null != n && (this.unembed(n, e), n.remove(e)),
        n
      )
    }
    remove(t = {}) {
      return (
        this.batchUpdate('remove', () => {
          const e = this.getParent()
          e && e.removeChild(this, t),
            !1 !== t.deep && this.eachChild((e) => e.remove(t)),
            this.model && this.model.removeCell(this, t)
        }),
        this
      )
    }
    transition(t, e, n = {}, r = '/') {
      return this.animation.start(t, e, n, r)
    }
    stopTransition(t, e, n = '/') {
      return this.animation.stop(t, e, n), this
    }
    getTransitions() {
      return this.animation.get()
    }
    translate(t, e, n) {
      return this
    }
    scale(t, e, n, r) {
      return this
    }
    addTools(t, e, n) {
      const r = Array.isArray(t) ? t : [t],
        i = 'string' == typeof e ? e : null,
        s = 'object' == typeof e ? e : 'object' == typeof n ? n : {}
      if (s.reset)
        return this.setTools({ name: i, items: r, local: s.local }, s)
      let o = Zi(this.getTools())
      return null == o || null == i || o.name === i
        ? (null == o && (o = {}),
          o.items || (o.items = []),
          (o.name = i),
          (o.items = [...o.items, ...r]),
          this.setTools(Object.assign({}, o), s))
        : void 0
    }
    setTools(t, e = {}) {
      return (
        null == t
          ? this.removeTools()
          : this.store.set('tools', vv.normalizeTools(t), e),
        this
      )
    }
    getTools() {
      return this.store.get('tools')
    }
    removeTools(t = {}) {
      return this.store.remove('tools', t), this
    }
    hasTools(t) {
      const e = this.getTools()
      return null != e && (null == t || e.name === t)
    }
    hasTool(t) {
      const e = this.getTools()
      return (
        null != e &&
        e.items.some((e) => ('string' == typeof e ? e === t : e.name === t))
      )
    }
    removeTool(t, e = {}) {
      const n = Zi(this.getTools())
      if (n) {
        let r = !1
        const i = n.items.slice(),
          s = (t) => {
            i.splice(t, 1), (r = !0)
          }
        if ('number' == typeof t) s(t)
        else
          for (let e = i.length - 1; e >= 0; e -= 1) {
            const n = i[e]
            ;('string' == typeof n ? n === t : n.name === t) && s(e)
          }
        r && ((n.items = i), this.setTools(n, e))
      }
      return this
    }
    getBBox(t) {
      return new zd()
    }
    getConnectionPoint(t, e) {
      return new Vd()
    }
    toJSON(t = {}) {
      const e = Object.assign({}, this.store.get()),
        n = Object.prototype.toString,
        r = this.isNode() ? 'node' : this.isEdge() ? 'edge' : 'cell'
      if (!e.shape) {
        const t = this.constructor
        throw new Error(
          `Unable to serialize ${r} missing "shape" prop, check the ${r} "${
            t.name || n.call(t)
          }"`,
        )
      }
      const i = this.constructor,
        s = !0 === t.diff,
        o = e.attrs || {},
        a = i.getDefaults(!0),
        l = s ? this.preprocess(a, !0) : a,
        c = l.attrs || {},
        h = {}
      Object.keys(e).forEach((t) => {
        const i = e[t]
        if (null != i && !Array.isArray(i) && 'object' == typeof i && !$n(i))
          throw new Error(
            `Can only serialize ${r} with plain-object props, but got a "${n.call(
              i,
            )}" type of key "${t}" on ${r} "${this.id}"`,
          )
        if ('attrs' !== t && 'shape' !== t && s) {
          _a(i, l[t]) && delete e[t]
        }
      }),
        Object.keys(o).forEach((t) => {
          const e = o[t],
            n = c[t]
          Object.keys(e).forEach((r) => {
            const i = e[r],
              s = n ? n[r] : null
            null == i || 'object' != typeof i || Array.isArray(i)
              ? (null != n && _a(s, i)) ||
                (null == h[t] && (h[t] = {}), (h[t][r] = i))
              : Object.keys(i).forEach((e) => {
                  const o = i[e]
                  if (null == n || null == s || !R(s) || !_a(s[e], o)) {
                    null == h[t] && (h[t] = {}),
                      null == h[t][r] && (h[t][r] = {})
                    h[t][r][e] = o
                  }
                })
          })
        })
      const u = Object.assign(Object.assign({}, e), {
        attrs: Na(h) ? void 0 : h,
      })
      null == u.attrs && delete u.attrs
      const g = u
      return 0 === g.angle && delete g.angle, Zi(g)
    }
    clone(t = {}) {
      if (!t.deep) {
        const e = Object.assign({}, this.store.get())
        t.keepId || delete e.id, delete e.parent, delete e.children
        return new (0, this.constructor)(e)
      }
      return vv.deepClone(this)[this.id]
    }
    findView(t) {
      return t.findViewByCell(this)
    }
    startBatch(t, e = {}, n = this.model) {
      return (
        this.notify('batch:start', { name: t, data: e, cell: this }),
        n &&
          n.startBatch(t, Object.assign(Object.assign({}, e), { cell: this })),
        this
      )
    }
    stopBatch(t, e = {}, n = this.model) {
      return (
        n &&
          n.stopBatch(t, Object.assign(Object.assign({}, e), { cell: this })),
        this.notify('batch:stop', { name: t, data: e, cell: this }),
        this
      )
    }
    batchUpdate(t, e, n) {
      const r = this.model
      this.startBatch(t, n, r)
      const i = e()
      return this.stopBatch(t, n, r), i
    }
    dispose() {
      this.removeFromParent(), this.store.dispose()
    }
  }
  ;(vv.defaults = {}),
    (vv.attrHooks = {}),
    (vv.propHooks = []),
    mv([bu.dispose()], vv.prototype, 'dispose', null),
    (function (t) {
      t.normalizeTools = function (t) {
        return 'string' == typeof t
          ? { items: [t] }
          : Array.isArray(t)
          ? { items: t }
          : t.items
          ? t
          : { items: [t] }
      }
    })(vv || (vv = {})),
    (function (t) {
      ;(t.toStringTag = `X6.${t.name}`),
        (t.isCell = function (e) {
          if (null == e) return !1
          if (e instanceof t) return !0
          const n = e[Symbol.toStringTag],
            r = e
          return (
            (null == n || n === t.toStringTag) &&
            'function' == typeof r.isNode &&
            'function' == typeof r.isEdge &&
            'function' == typeof r.prop &&
            'function' == typeof r.attr
          )
        })
    })(vv || (vv = {})),
    (function (t) {
      ;(t.getCommonAncestor = function (...t) {
        const e = t
          .filter((t) => null != t)
          .map((t) => t.getAncestors())
          .sort((t, e) => t.length - e.length)
        return e.shift().find((t) => e.every((e) => e.includes(t))) || null
      }),
        (t.getCellsBBox = function (t, e = {}) {
          let n = null
          for (let r = 0, i = t.length; r < i; r += 1) {
            const i = t[r]
            let s = i.getBBox(e)
            if (s) {
              if (i.isNode()) {
                const t = i.getAngle()
                null != t && 0 !== t && (s = s.bbox(t))
              }
              n = null == n ? s : n.union(s)
            }
          }
          return n
        }),
        (t.deepClone = function (e) {
          const n = [e, ...e.getDescendants({ deep: !0 })]
          return t.cloneCells(n)
        }),
        (t.cloneCells = function (t) {
          const e = xh(t),
            n = e.reduce((t, e) => ((t[e.id] = e.clone()), t), {})
          return (
            e.forEach((t) => {
              const e = n[t.id]
              if (e.isEdge()) {
                const t = e.getSourceCellId(),
                  r = e.getTargetCellId()
                t &&
                  n[t] &&
                  e.setSource(
                    Object.assign(Object.assign({}, e.getSource()), {
                      cell: n[t].id,
                    }),
                  ),
                  r &&
                    n[r] &&
                    e.setTarget(
                      Object.assign(Object.assign({}, e.getTarget()), {
                        cell: n[r].id,
                      }),
                    )
              }
              const r = t.getParent()
              r && n[r.id] && e.setParent(n[r.id])
              const i = t.getChildren()
              if (i && i.length) {
                const t = i.reduce(
                  (t, e) => (n[e.id] && t.push(n[e.id]), t),
                  [],
                )
                t.length > 0 && e.setChildren(t)
              }
            }),
            n
          )
        })
    })(vv || (vv = {})),
    (function (t) {
      t.config({
        propHooks(e) {
          var { tools: n } = e,
            r = yv(e, ['tools'])
          return n && (r.tools = t.normalizeTools(n)), r
        },
      })
    })(vv || (vv = {})),
    (function (t) {
      let e, n
      ;(t.exist = function (t, r) {
        return r ? null != e && e.exist(t) : null != n && n.exist(t)
      }),
        (t.setEdgeRegistry = function (t) {
          e = t
        }),
        (t.setNodeRegistry = function (t) {
          n = t
        })
    })(pv || (pv = {}))
  class bv {
    constructor(t) {
      ;(this.ports = []), (this.groups = {}), this.init(Zi(t))
    }
    getPorts() {
      return this.ports
    }
    getGroup(t) {
      return null != t ? this.groups[t] : null
    }
    getPortsByGroup(t) {
      return this.ports.filter(
        (e) => e.group === t || (null == e.group && null == t),
      )
    }
    getPortsLayoutByGroup(t, e) {
      const n = this.getPortsByGroup(t),
        r = t ? this.getGroup(t) : null,
        i = r ? r.position : null,
        s = i ? i.name : null
      let o
      if (null != s) {
        const t = gm.registry.get(s)
        if (null == t) return gm.registry.onNotFound(s)
        o = t
      } else o = gm.presets.left
      const a = n.map((t) => (t && t.position && t.position.args) || {}),
        l = (i && i.args) || {}
      return o(a, e, l).map((t, r) => {
        const i = n[r]
        return {
          portLayout: t,
          portId: i.id,
          portSize: i.size,
          portAttrs: i.attrs,
          labelSize: i.label.size,
          labelLayout: this.getPortLabelLayout(i, Vd.create(t.position), e),
        }
      })
    }
    init(t) {
      const { groups: e, items: n } = t
      null != e &&
        Object.keys(e).forEach((t) => {
          this.groups[t] = this.parseGroup(e[t])
        }),
        Array.isArray(n) &&
          n.forEach((t) => {
            this.ports.push(this.parsePort(t))
          })
    }
    parseGroup(t) {
      return Object.assign(Object.assign({}, t), {
        label: this.getLabel(t, !0),
        position: this.getPortPosition(t.position, !0),
      })
    }
    parsePort(t) {
      const e = Object.assign({}, t),
        n = this.getGroup(t.group) || {}
      return (
        (e.markup = e.markup || n.markup),
        (e.attrs = el({}, n.attrs, e.attrs)),
        (e.position = this.createPosition(n, e)),
        (e.label = el({}, n.label, this.getLabel(e))),
        (e.zIndex = this.getZIndex(n, e)),
        (e.size = Object.assign(Object.assign({}, n.size), e.size)),
        e
      )
    }
    getZIndex(t, e) {
      return 'number' == typeof e.zIndex
        ? e.zIndex
        : 'number' == typeof t.zIndex || 'auto' === t.zIndex
        ? t.zIndex
        : 'auto'
    }
    createPosition(t, e) {
      return el({ name: 'left', args: {} }, t.position, { args: e.args })
    }
    getPortPosition(t, e = !1) {
      if (null == t) {
        if (e) return { name: 'left', args: {} }
      } else {
        if ('string' == typeof t) return { name: t, args: {} }
        if (Array.isArray(t))
          return { name: 'absolute', args: { x: t[0], y: t[1] } }
        if ('object' == typeof t) return t
      }
      return { args: {} }
    }
    getPortLabelPosition(t, e = !1) {
      if (null == t) {
        if (e) return { name: 'left', args: {} }
      } else {
        if ('string' == typeof t) return { name: t, args: {} }
        if ('object' == typeof t) return t
      }
      return { args: {} }
    }
    getLabel(t, e = !1) {
      const n = t.label || {}
      return (n.position = this.getPortLabelPosition(n.position, e)), n
    }
    getPortLabelLayout(t, e, n) {
      const r = t.label.position.name || 'left',
        i = t.label.position.args || {},
        s = xm.registry.get(r) || xm.presets.left
      return s ? s(e, n, i) : null
    }
  }
  var xv = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  let wv = class extends vv {
    constructor(t = {}) {
      super(t), this.initPorts()
    }
    get [Symbol.toStringTag]() {
      return wv.toStringTag
    }
    preprocess(t, e) {
      const { x: n, y: r, width: i, height: s } = t,
        o = xv(t, ['x', 'y', 'width', 'height'])
      if (null != n || null != r) {
        const t = o.position
        o.position = Object.assign(Object.assign({}, t), {
          x: null != n ? n : t ? t.x : 0,
          y: null != r ? r : t ? t.y : 0,
        })
      }
      if (null != i || null != s) {
        const t = o.size
        o.size = Object.assign(Object.assign({}, t), {
          width: null != i ? i : t ? t.width : 0,
          height: null != s ? s : t ? t.height : 0,
        })
      }
      return super.preprocess(o, e)
    }
    isNode() {
      return !0
    }
    size(t, e, n) {
      return void 0 === t
        ? this.getSize()
        : 'number' == typeof t
        ? this.setSize(t, e, n)
        : this.setSize(t, e)
    }
    getSize() {
      const t = this.store.get('size')
      return t ? Object.assign({}, t) : { width: 1, height: 1 }
    }
    setSize(t, e, n) {
      return (
        'object' == typeof t
          ? this.resize(t.width, t.height, e)
          : this.resize(t, e, n),
        this
      )
    }
    resize(t, e, n = {}) {
      this.startBatch('resize', n)
      const r = n.direction
      if (r) {
        const i = this.getSize()
        switch (r) {
          case 'left':
          case 'right':
            e = i.height
            break
          case 'top':
          case 'bottom':
            t = i.width
        }
        let s = {
          right: 0,
          'top-right': 0,
          top: 1,
          'top-left': 1,
          left: 2,
          'bottom-left': 2,
          bottom: 3,
          'bottom-right': 3,
        }[r]
        const o = Bd.normalize(this.getAngle() || 0)
        n.absolute && ((s += Math.floor((o + 45) / 90)), (s %= 4))
        const a = this.getBBox()
        let l
        l =
          0 === s
            ? a.getBottomLeft()
            : 1 === s
            ? a.getCorner()
            : 2 === s
            ? a.getTopRight()
            : a.getOrigin()
        const c = l.clone().rotate(-o, a.getCenter()),
          h = Math.sqrt(t * t + e * e) / 2
        let u = (s * Math.PI) / 2
        ;(u += Math.atan(s % 2 == 0 ? e / t : t / e)), (u -= Bd.toRad(o))
        const g = Vd.fromPolar(h, u, c)
          .clone()
          .translate(t / -2, e / -2)
        this.store.set('size', { width: t, height: e }, n),
          this.setPosition(g.x, g.y, n)
      } else this.store.set('size', { width: t, height: e }, n)
      return this.stopBatch('resize', n), this
    }
    scale(t, e, n, r = {}) {
      const i = this.getBBox().scale(t, e, null == n ? void 0 : n)
      return (
        this.startBatch('scale', r),
        this.setPosition(i.x, i.y, r),
        this.resize(i.width, i.height, r),
        this.stopBatch('scale'),
        this
      )
    }
    position(t, e, n) {
      return 'number' == typeof t
        ? this.setPosition(t, e, n)
        : this.getPosition(t)
    }
    getPosition(t = {}) {
      if (t.relative) {
        const t = this.getParent()
        if (null != t && t.isNode()) {
          const e = this.getPosition(),
            n = t.getPosition()
          return { x: e.x - n.x, y: e.y - n.y }
        }
      }
      const e = this.store.get('position')
      return e ? Object.assign({}, e) : { x: 0, y: 0 }
    }
    setPosition(t, e, n = {}) {
      let r, i, s
      if (
        ('object' == typeof t
          ? ((r = t.x), (i = t.y), (s = e || {}))
          : ((r = t), (i = e), (s = n || {})),
        s.relative)
      ) {
        const t = this.getParent()
        if (null != t && t.isNode()) {
          const e = t.getPosition()
          ;(r += e.x), (i += e.y)
        }
      }
      if (s.deep) {
        const t = this.getPosition()
        this.translate(r - t.x, i - t.y, s)
      } else this.store.set('position', { x: r, y: i }, s)
      return this
    }
    translate(t = 0, e = 0, n = {}) {
      if (0 === t && 0 === e) return this
      n.translateBy = n.translateBy || this.id
      const r = this.getPosition()
      if (null != n.restrict && n.translateBy === this.id) {
        const i = this.getBBox({ deep: !0 }),
          s = n.restrict,
          o = r.x - i.x,
          a = r.y - i.y,
          l = Math.max(s.x + o, Math.min(s.x + s.width + o - i.width, r.x + t)),
          c = Math.max(
            s.y + a,
            Math.min(s.y + s.height + a - i.height, r.y + e),
          )
        ;(t = l - r.x), (e = c - r.y)
      }
      const i = { x: r.x + t, y: r.y + e }
      return (
        (n.tx = t),
        (n.ty = e),
        n.transition
          ? ('object' != typeof n.transition && (n.transition = {}),
            this.transition(
              'position',
              i,
              Object.assign(Object.assign({}, n.transition), {
                interp: kd.object,
              }),
            ),
            this.eachChild((r) => {
              var i
              ;(null === (i = n.exclude) || void 0 === i
                ? void 0
                : i.includes(r)) || r.translate(t, e, n)
            }))
          : (this.startBatch('translate', n),
            this.store.set('position', i, n),
            this.eachChild((r) => {
              var i
              ;(null === (i = n.exclude) || void 0 === i
                ? void 0
                : i.includes(r)) || r.translate(t, e, n)
            }),
            this.stopBatch('translate', n)),
        this
      )
    }
    angle(t, e) {
      return null == t ? this.getAngle() : this.rotate(t, e)
    }
    getAngle() {
      return this.store.get('angle', 0)
    }
    rotate(t, e = {}) {
      const n = this.getAngle()
      if (e.center) {
        const r = this.getSize(),
          i = this.getPosition(),
          s = this.getBBox().getCenter()
        s.rotate(n - t, e.center)
        const o = s.x - r.width / 2 - i.x,
          a = s.y - r.height / 2 - i.y
        this.startBatch('rotate', { angle: t, options: e }),
          this.setPosition(i.x + o, i.y + a, e),
          this.rotate(t, Object.assign(Object.assign({}, e), { center: null })),
          this.stopBatch('rotate')
      } else this.store.set('angle', e.absolute ? t : (n + t) % 360, e)
      return this
    }
    getBBox(t = {}) {
      if (t.deep) {
        const t = this.getDescendants({ deep: !0, breadthFirst: !0 })
        return t.push(this), vv.getCellsBBox(t)
      }
      return zd.fromPositionAndSize(this.getPosition(), this.getSize())
    }
    getConnectionPoint(t, e) {
      const n = this.getBBox(),
        r = n.getCenter(),
        i = t.getTerminal(e)
      if (null == i) return r
      const s = i.port
      if (!s || !this.hasPort(s)) return r
      const o = this.getPort(s)
      if (!o || !o.group) return r
      const a = this.getPortsPosition(o.group)[s].position,
        l = Vd.create(a).translate(n.getOrigin()),
        c = this.getAngle()
      return c && l.rotate(-c, r), l
    }
    fit(t = {}) {
      const e = (this.getChildren() || []).filter((t) => t.isNode())
      if (0 === e.length) return this
      this.startBatch('fit-embeds', t), t.deep && e.forEach((e) => e.fit(t))
      let { x: n, y: r, width: i, height: s } = vv.getCellsBBox(e)
      const o = Su(t.padding)
      return (
        (n -= o.left),
        (r -= o.top),
        (i += o.left + o.right),
        (s += o.bottom + o.top),
        this.store.set(
          { position: { x: n, y: r }, size: { width: i, height: s } },
          t,
        ),
        this.stopBatch('fit-embeds'),
        this
      )
    }
    get portContainerMarkup() {
      return this.getPortContainerMarkup()
    }
    set portContainerMarkup(t) {
      this.setPortContainerMarkup(t)
    }
    getDefaultPortContainerMarkup() {
      return (
        this.store.get('defaultPortContainerMarkup') ||
        Pm.getPortContainerMarkup()
      )
    }
    getPortContainerMarkup() {
      return (
        this.store.get('portContainerMarkup') ||
        this.getDefaultPortContainerMarkup()
      )
    }
    setPortContainerMarkup(t, e = {}) {
      return this.store.set('portContainerMarkup', Pm.clone(t), e), this
    }
    get portMarkup() {
      return this.getPortMarkup()
    }
    set portMarkup(t) {
      this.setPortMarkup(t)
    }
    getDefaultPortMarkup() {
      return this.store.get('defaultPortMarkup') || Pm.getPortMarkup()
    }
    getPortMarkup() {
      return this.store.get('portMarkup') || this.getDefaultPortMarkup()
    }
    setPortMarkup(t, e = {}) {
      return this.store.set('portMarkup', Pm.clone(t), e), this
    }
    get portLabelMarkup() {
      return this.getPortLabelMarkup()
    }
    set portLabelMarkup(t) {
      this.setPortLabelMarkup(t)
    }
    getDefaultPortLabelMarkup() {
      return this.store.get('defaultPortLabelMarkup') || Pm.getPortLabelMarkup()
    }
    getPortLabelMarkup() {
      return (
        this.store.get('portLabelMarkup') || this.getDefaultPortLabelMarkup()
      )
    }
    setPortLabelMarkup(t, e = {}) {
      return this.store.set('portLabelMarkup', Pm.clone(t), e), this
    }
    get ports() {
      const t = this.store.get('ports', { items: [] })
      return null == t.items && (t.items = []), t
    }
    getPorts() {
      return Zi(this.ports.items)
    }
    getPortsByGroup(t) {
      return this.getPorts().filter((e) => e.group === t)
    }
    getPort(t) {
      return Zi(this.ports.items.find((e) => e.id && e.id === t))
    }
    getPortAt(t) {
      return this.ports.items[t] || null
    }
    hasPorts() {
      return this.ports.items.length > 0
    }
    hasPort(t) {
      return -1 !== this.getPortIndex(t)
    }
    getPortIndex(t) {
      const e = 'string' == typeof t ? t : t.id
      return null != e ? this.ports.items.findIndex((t) => t.id === e) : -1
    }
    getPortsPosition(t) {
      const e = this.getSize()
      return this.port
        .getPortsLayoutByGroup(t, new zd(0, 0, e.width, e.height))
        .reduce((t, e) => {
          const n = e.portLayout
          return (
            (t[e.portId] = {
              position: Object.assign({}, n.position),
              angle: n.angle || 0,
            }),
            t
          )
        }, {})
    }
    getPortProp(t, e) {
      return this.getPropByPath(this.prefixPortPath(t, e))
    }
    setPortProp(t, e, n, r) {
      if ('string' == typeof e || Array.isArray(e)) {
        const i = this.prefixPortPath(t, e),
          s = n
        return this.setPropByPath(i, s, r)
      }
      const i = this.prefixPortPath(t),
        s = e
      return this.setPropByPath(i, s, n)
    }
    removePortProp(t, e, n) {
      return 'string' == typeof e || Array.isArray(e)
        ? this.removePropByPath(this.prefixPortPath(t, e), n)
        : this.removePropByPath(this.prefixPortPath(t), e)
    }
    portProp(t, e, n, r) {
      return null == e
        ? this.getPortProp(t)
        : 'string' == typeof e || Array.isArray(e)
        ? 2 === arguments.length
          ? this.getPortProp(t, e)
          : null == n
          ? this.removePortProp(t, e, r)
          : this.setPortProp(t, e, n, r)
        : this.setPortProp(t, e, n)
    }
    prefixPortPath(t, e) {
      const n = this.getPortIndex(t)
      if (-1 === n) throw new Error(`Unable to find port with id: "${t}"`)
      return null == e || '' === e
        ? ['ports', 'items', `${n}`]
        : Array.isArray(e)
        ? ['ports', 'items', `${n}`, ...e]
        : `ports/items/${n}/${e}`
    }
    addPort(t, e) {
      const n = [...this.ports.items]
      return n.push(t), this.setPropByPath('ports/items', n, e), this
    }
    addPorts(t, e) {
      return (
        this.setPropByPath('ports/items', [...this.ports.items, ...t], e), this
      )
    }
    insertPort(t, e, n) {
      const r = [...this.ports.items]
      return r.splice(t, 0, e), this.setPropByPath('ports/items', r, n), this
    }
    removePort(t, e = {}) {
      return this.removePortAt(this.getPortIndex(t), e)
    }
    removePortAt(t, e = {}) {
      if (t >= 0) {
        const n = [...this.ports.items]
        n.splice(t, 1),
          (e.rewrite = !0),
          this.setPropByPath('ports/items', n, e)
      }
      return this
    }
    removePorts(t, e) {
      let n
      if (Array.isArray(t)) {
        if (((n = e || {}), t.length)) {
          n.rewrite = !0
          const e = [...this.ports.items].filter(
            (e) =>
              !t.some((t) => {
                const n = 'string' == typeof t ? t : t.id
                return e.id === n
              }),
          )
          this.setPropByPath('ports/items', e, n)
        }
      } else
        (n = t || {}),
          (n.rewrite = !0),
          this.setPropByPath('ports/items', [], n)
      return this
    }
    getParsedPorts() {
      return this.port.getPorts()
    }
    getParsedGroups() {
      return this.port.groups
    }
    getPortsLayoutByGroup(t, e) {
      return this.port.getPortsLayoutByGroup(t, e)
    }
    initPorts() {
      this.updatePortData(),
        this.on('change:ports', () => {
          this.processRemovedPort(), this.updatePortData()
        })
    }
    processRemovedPort() {
      const t = this.ports,
        e = {}
      t.items.forEach((t) => {
        t.id && (e[t.id] = !0)
      })
      const n = {}
      ;(this.store.getPrevious('ports') || { items: [] }).items.forEach((t) => {
        t.id && !e[t.id] && (n[t.id] = !0)
      })
      const r = this.model
      if (r && !Na(n)) {
        r.getConnectedEdges(this, { incoming: !0 }).forEach((t) => {
          const e = t.getTargetPortId()
          e && n[e] && t.remove()
        })
        r.getConnectedEdges(this, { outgoing: !0 }).forEach((t) => {
          const e = t.getSourcePortId()
          e && n[e] && t.remove()
        })
      }
    }
    validatePorts() {
      const t = {},
        e = []
      return (
        this.ports.items.forEach((n) => {
          'object' != typeof n && e.push(`Invalid port ${n}.`),
            null == n.id && (n.id = this.generatePortId()),
            t[n.id] && e.push('Duplicitied port id.'),
            (t[n.id] = !0)
        }),
        e
      )
    }
    generatePortId() {
      return Cu()
    }
    updatePortData() {
      const t = this.validatePorts()
      if (t.length > 0)
        throw (
          (this.store.set('ports', this.store.getPrevious('ports')),
          new Error(t.join(' ')))
        )
      const e = this.port ? this.port.getPorts() : null
      this.port = new bv(this.ports)
      const n = this.port.getPorts(),
        r = e
          ? n.filter((t) => (e.find((e) => e.id === t.id) ? null : t))
          : [...n],
        i = e ? e.filter((t) => (n.find((e) => e.id === t.id) ? null : t)) : []
      r.length > 0 &&
        this.notify('ports:added', { added: r, cell: this, node: this }),
        i.length > 0 &&
          this.notify('ports:removed', { removed: i, cell: this, node: this })
    }
  }
  ;(wv.defaults = {
    angle: 0,
    position: { x: 0, y: 0 },
    size: { width: 1, height: 1 },
  }),
    (function (t) {
      ;(t.toStringTag = `X6.${t.name}`),
        (t.isNode = function (e) {
          if (null == e) return !1
          if (e instanceof t) return !0
          const n = e[Symbol.toStringTag],
            r = e
          return (
            (null == n || n === t.toStringTag) &&
            'function' == typeof r.isNode &&
            'function' == typeof r.isEdge &&
            'function' == typeof r.prop &&
            'function' == typeof r.attr &&
            'function' == typeof r.size &&
            'function' == typeof r.position
          )
        })
    })(wv || (wv = {})),
    (function (t) {
      t.config({
        propHooks(t) {
          var { ports: e } = t,
            n = xv(t, ['ports'])
          return e && (n.ports = Array.isArray(e) ? { items: e } : e), n
        },
      })
    })(wv || (wv = {})),
    (function (t) {
      ;(t.registry = hf.create({
        type: 'node',
        process(e, n) {
          if (pv.exist(e, !0))
            throw new Error(
              `Node with name '${e}' was registered by anthor Edge`,
            )
          if ('function' == typeof n) return n.config({ shape: e }), n
          let r = t
          const { inherit: i } = n,
            s = xv(n, ['inherit'])
          if (i)
            if ('string' == typeof i) {
              const t = this.get(i)
              null == t ? this.onNotFound(i, 'inherited') : (r = t)
            } else r = i
          null == s.constructorName && (s.constructorName = e)
          const o = r.define.call(r, s)
          return o.config({ shape: e }), o
        },
      })),
        pv.setNodeRegistry(t.registry)
    })(wv || (wv = {})),
    (function (t) {
      let e = 0
      ;(t.define = function (n) {
        const { constructorName: r, overwrite: i } = n,
          s = xv(n, ['constructorName', 'overwrite']),
          o = fu(
            (a = r || s.shape) ? Pu(a) : ((e += 1), `CustomNode${e}`),
            this,
          )
        var a
        return o.config(s), s.shape && t.registry.register(s.shape, o, i), o
      }),
        (t.create = function (e) {
          const n = e.shape || 'rect',
            r = t.registry.get(n)
          return r ? new r(e) : t.registry.onNotFound(n)
        })
    })(wv || (wv = {}))
  var Pv = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  let Av = class extends vv {
    constructor(t = {}) {
      super(t)
    }
    get [Symbol.toStringTag]() {
      return Av.toStringTag
    }
    preprocess(t, e) {
      const {
          source: n,
          sourceCell: r,
          sourcePort: i,
          sourcePoint: s,
          target: o,
          targetCell: a,
          targetPort: l,
          targetPoint: c,
        } = t,
        h = Pv(t, [
          'source',
          'sourceCell',
          'sourcePort',
          'sourcePoint',
          'target',
          'targetCell',
          'targetPort',
          'targetPoint',
        ]),
        u = (t) => 'string' == typeof t || 'number' == typeof t
      if (null != n)
        if (vv.isCell(n)) h.source = { cell: n.id }
        else if (u(n)) h.source = { cell: n }
        else if (Vd.isPoint(n)) h.source = n.toJSON()
        else if (Array.isArray(n)) h.source = { x: n[0], y: n[1] }
        else {
          const t = n.cell
          vv.isCell(t)
            ? (h.source = Object.assign(Object.assign({}, n), { cell: t.id }))
            : (h.source = n)
        }
      if (null != r || null != i) {
        let t = h.source
        if (null != r) {
          const e = u(r) ? r : r.id
          t ? (t.cell = e) : (t = h.source = { cell: e })
        }
        null != i && t && (t.port = i)
      } else null != s && (h.source = Vd.create(s).toJSON())
      if (null != o)
        if (vv.isCell(o)) h.target = { cell: o.id }
        else if (u(o)) h.target = { cell: o }
        else if (Vd.isPoint(o)) h.target = o.toJSON()
        else if (Array.isArray(o)) h.target = { x: o[0], y: o[1] }
        else {
          const t = o.cell
          vv.isCell(t)
            ? (h.target = Object.assign(Object.assign({}, o), { cell: t.id }))
            : (h.target = o)
        }
      if (null != a || null != l) {
        let t = h.target
        if (null != a) {
          const e = u(a) ? a : a.id
          t ? (t.cell = e) : (t = h.target = { cell: e })
        }
        null != l && t && (t.port = l)
      } else null != c && (h.target = Vd.create(c).toJSON())
      return super.preprocess(h, e)
    }
    setup() {
      super.setup(),
        this.on('change:labels', (t) => this.onLabelsChanged(t)),
        this.on('change:vertices', (t) => this.onVertexsChanged(t))
    }
    isEdge() {
      return !0
    }
    disconnect(t = {}) {
      return (
        this.store.set({ source: { x: 0, y: 0 }, target: { x: 0, y: 0 } }, t),
        this
      )
    }
    get source() {
      return this.getSource()
    }
    set source(t) {
      this.setSource(t)
    }
    getSource() {
      return this.getTerminal('source')
    }
    getSourceCellId() {
      return this.source.cell
    }
    getSourcePortId() {
      return this.source.port
    }
    setSource(t, e, n = {}) {
      return this.setTerminal('source', t, e, n)
    }
    get target() {
      return this.getTarget()
    }
    set target(t) {
      this.setTarget(t)
    }
    getTarget() {
      return this.getTerminal('target')
    }
    getTargetCellId() {
      return this.target.cell
    }
    getTargetPortId() {
      return this.target.port
    }
    setTarget(t, e, n = {}) {
      return this.setTerminal('target', t, e, n)
    }
    getTerminal(t) {
      return Object.assign({}, this.store.get(t))
    }
    setTerminal(t, e, n, r = {}) {
      if (vv.isCell(e))
        return this.store.set(t, el({}, n, { cell: e.id }), r), this
      const i = e
      return Vd.isPoint(e) || (null != i.x && null != i.y)
        ? (this.store.set(t, el({}, n, { x: i.x, y: i.y }), r), this)
        : (this.store.set(t, Zi(e), r), this)
    }
    getSourcePoint() {
      return this.getTerminalPoint('source')
    }
    getTargetPoint() {
      return this.getTerminalPoint('target')
    }
    getTerminalPoint(t) {
      const e = this[t]
      if (Vd.isPointLike(e)) return Vd.create(e)
      const n = this.getTerminalCell(t)
      return n ? n.getConnectionPoint(this, t) : new Vd()
    }
    getSourceCell() {
      return this.getTerminalCell('source')
    }
    getTargetCell() {
      return this.getTerminalCell('target')
    }
    getTerminalCell(t) {
      if (this.model) {
        const e =
          'source' === t ? this.getSourceCellId() : this.getTargetCellId()
        if (e) return this.model.getCell(e)
      }
      return null
    }
    getSourceNode() {
      return this.getTerminalNode('source')
    }
    getTargetNode() {
      return this.getTerminalNode('target')
    }
    getTerminalNode(t) {
      let e = this
      const n = {}
      for (; e && e.isEdge(); ) {
        if (n[e.id]) return null
        ;(n[e.id] = !0), (e = e.getTerminalCell(t))
      }
      return e && e.isNode() ? e : null
    }
    get router() {
      return this.getRouter()
    }
    set router(t) {
      null == t ? this.removeRouter() : this.setRouter(t)
    }
    getRouter() {
      return this.store.get('router')
    }
    setRouter(t, e, n) {
      return (
        'object' == typeof t
          ? this.store.set('router', t, e)
          : this.store.set('router', { name: t, args: e }, n),
        this
      )
    }
    removeRouter(t = {}) {
      return this.store.remove('router', t), this
    }
    get connector() {
      return this.getConnector()
    }
    set connector(t) {
      null == t ? this.removeConnector() : this.setConnector(t)
    }
    getConnector() {
      return this.store.get('connector')
    }
    setConnector(t, e, n) {
      return (
        'object' == typeof t
          ? this.store.set('connector', t, e)
          : this.store.set('connector', { name: t, args: e }, n),
        this
      )
    }
    removeConnector(t = {}) {
      return this.store.remove('connector', t)
    }
    getDefaultLabel() {
      const t = this.constructor
      return Zi(this.store.get('defaultLabel') || t.defaultLabel || {})
    }
    get labels() {
      return this.getLabels()
    }
    set labels(t) {
      this.setLabels(t)
    }
    getLabels() {
      return [...this.store.get('labels', [])].map((t) => this.parseLabel(t))
    }
    setLabels(t, e = {}) {
      return this.store.set('labels', Array.isArray(t) ? t : [t], e), this
    }
    insertLabel(t, e, n = {}) {
      const r = this.getLabels(),
        i = r.length
      let s = null != e && Number.isFinite(e) ? e : i
      return (
        s < 0 && (s = i + s + 1),
        r.splice(s, 0, this.parseLabel(t)),
        this.setLabels(r, n)
      )
    }
    appendLabel(t, e = {}) {
      return this.insertLabel(t, -1, e)
    }
    getLabelAt(t) {
      const e = this.getLabels()
      return null != t && Number.isFinite(t) ? this.parseLabel(e[t]) : null
    }
    setLabelAt(t, e, n = {}) {
      if (null != t && Number.isFinite(t)) {
        const r = this.getLabels()
        ;(r[t] = this.parseLabel(e)), this.setLabels(r, n)
      }
      return this
    }
    removeLabelAt(t, e = {}) {
      const n = this.getLabels(),
        r = null != t && Number.isFinite(t) ? t : -1,
        i = n.splice(r, 1)
      return this.setLabels(n, e), i.length ? i[0] : null
    }
    parseLabel(t) {
      if ('string' == typeof t) {
        return this.constructor.parseStringLabel(t)
      }
      return t
    }
    onLabelsChanged({ previous: t, current: e }) {
      const n =
          t && e
            ? e.filter((e) => (t.find((t) => e === t || _a(e, t)) ? null : e))
            : e
            ? [...e]
            : [],
        r =
          t && e
            ? t.filter((t) => (e.find((e) => t === e || _a(t, e)) ? null : t))
            : t
            ? [...t]
            : []
      n.length > 0 &&
        this.notify('labels:added', { added: n, cell: this, edge: this }),
        r.length > 0 &&
          this.notify('labels:removed', { removed: r, cell: this, edge: this })
    }
    get vertices() {
      return this.getVertices()
    }
    set vertices(t) {
      this.setVertices(t)
    }
    getVertices() {
      return [...this.store.get('vertices', [])]
    }
    setVertices(t, e = {}) {
      const n = Array.isArray(t) ? t : [t]
      return (
        this.store.set(
          'vertices',
          n.map((t) => Vd.toJSON(t)),
          e,
        ),
        this
      )
    }
    insertVertex(t, e, n = {}) {
      const r = this.getVertices(),
        i = r.length
      let s = null != e && Number.isFinite(e) ? e : i
      return (
        s < 0 && (s = i + s + 1),
        r.splice(s, 0, Vd.toJSON(t)),
        this.setVertices(r, n)
      )
    }
    appendVertex(t, e = {}) {
      return this.insertVertex(t, -1, e)
    }
    getVertexAt(t) {
      if (null != t && Number.isFinite(t)) {
        return this.getVertices()[t]
      }
      return null
    }
    setVertexAt(t, e, n = {}) {
      if (null != t && Number.isFinite(t)) {
        const r = this.getVertices()
        ;(r[t] = e), this.setVertices(r, n)
      }
      return this
    }
    removeVertexAt(t, e = {}) {
      const n = this.getVertices(),
        r = null != t && Number.isFinite(t) ? t : -1
      return n.splice(r, 1), this.setVertices(n, e)
    }
    onVertexsChanged({ previous: t, current: e }) {
      const n =
          t && e
            ? e.filter((e) => (t.find((t) => Vd.equals(e, t)) ? null : e))
            : e
            ? [...e]
            : [],
        r =
          t && e
            ? t.filter((t) => (e.find((e) => Vd.equals(t, e)) ? null : t))
            : t
            ? [...t]
            : []
      n.length > 0 &&
        this.notify('vertexs:added', { added: n, cell: this, edge: this }),
        r.length > 0 &&
          this.notify('vertexs:removed', { removed: r, cell: this, edge: this })
    }
    getDefaultMarkup() {
      return this.store.get('defaultMarkup') || Pm.getEdgeMarkup()
    }
    getMarkup() {
      return super.getMarkup() || this.getDefaultMarkup()
    }
    translate(t, e, n = {}) {
      return (
        (n.translateBy = n.translateBy || this.id),
        (n.tx = t),
        (n.ty = e),
        this.applyToPoints((n) => ({ x: (n.x || 0) + t, y: (n.y || 0) + e }), n)
      )
    }
    scale(t, e, n, r = {}) {
      return this.applyToPoints((r) => Vd.create(r).scale(t, e, n).toJSON(), r)
    }
    applyToPoints(t, e = {}) {
      const n = {},
        r = this.getSource(),
        i = this.getTarget()
      Vd.isPointLike(r) && (n.source = t(r)),
        Vd.isPointLike(i) && (n.target = t(i))
      const s = this.getVertices()
      return s.length > 0 && (n.vertices = s.map(t)), this.store.set(n, e), this
    }
    getBBox() {
      return this.getPolyline().bbox()
    }
    getConnectionPoint() {
      return this.getPolyline().pointAt(0.5)
    }
    getPolyline() {
      const t = [
        this.getSourcePoint(),
        ...this.getVertices().map((t) => Vd.create(t)),
        this.getTargetPoint(),
      ]
      return new Xd(t)
    }
    updateParent(t) {
      let e = null
      const n = this.getSourceCell(),
        r = this.getTargetCell(),
        i = this.getParent()
      return (
        n &&
          r &&
          (e =
            n === r || n.isDescendantOf(r)
              ? r
              : r.isDescendantOf(n)
              ? n
              : vv.getCommonAncestor(n, r)),
        !i || (e && e.id === i.id) || i.unembed(this, t),
        e && e.embed(this, t),
        e
      )
    }
    hasLoop(t = {}) {
      const e = this.getSource(),
        n = this.getTarget(),
        r = e.cell,
        i = n.cell
      if (!r || !i) return !1
      let s = r === i
      if (!s && t.deep && this._model) {
        const e = this.getSourceCell(),
          n = this.getTargetCell()
        e && n && (s = e.isAncestorOf(n, t) || n.isAncestorOf(e, t))
      }
      return s
    }
    getFragmentAncestor() {
      const t = [this, this.getSourceNode(), this.getTargetNode()].filter(
        (t) => null != t,
      )
      return this.getCommonAncestor(...t)
    }
    isFragmentDescendantOf(t) {
      const e = this.getFragmentAncestor()
      return !!e && (e.id === t.id || e.isDescendantOf(t))
    }
  }
  ;(Av.defaults = {}),
    (function (t) {
      t.equalTerminals = function (t, e) {
        const n = t,
          r = e
        return (
          n.cell === r.cell &&
          (n.port === r.port || (null == n.port && null == r.port))
        )
      }
    })(Av || (Av = {})),
    (function (t) {
      ;(t.defaultLabel = {
        markup: [
          { tagName: 'rect', selector: 'body' },
          { tagName: 'text', selector: 'label' },
        ],
        attrs: {
          text: {
            fill: '#000',
            fontSize: 14,
            textAnchor: 'middle',
            textVerticalAnchor: 'middle',
            pointerEvents: 'none',
          },
          rect: {
            ref: 'label',
            fill: '#fff',
            rx: 3,
            ry: 3,
            refWidth: 1,
            refHeight: 1,
            refX: 0,
            refY: 0,
          },
        },
        position: { distance: 0.5 },
      }),
        (t.parseStringLabel = function (t) {
          return { attrs: { label: { text: t } } }
        })
    })(Av || (Av = {})),
    (function (t) {
      ;(t.toStringTag = `X6.${t.name}`),
        (t.isEdge = function (e) {
          if (null == e) return !1
          if (e instanceof t) return !0
          const n = e[Symbol.toStringTag],
            r = e
          return (
            (null == n || n === t.toStringTag) &&
            'function' == typeof r.isNode &&
            'function' == typeof r.isEdge &&
            'function' == typeof r.prop &&
            'function' == typeof r.attr &&
            'function' == typeof r.disconnect &&
            'function' == typeof r.getSource &&
            'function' == typeof r.getTarget
          )
        })
    })(Av || (Av = {})),
    (function (t) {
      ;(t.registry = hf.create({
        type: 'edge',
        process(e, n) {
          if (pv.exist(e, !1))
            throw new Error(
              `Edge with name '${e}' was registered by anthor Node`,
            )
          if ('function' == typeof n) return n.config({ shape: e }), n
          let r = t
          const { inherit: i = 'edge' } = n,
            s = Pv(n, ['inherit'])
          if ('string' == typeof i) {
            const t = this.get(i || 'edge')
            null == t && i ? this.onNotFound(i, 'inherited') : (r = t)
          } else r = i
          null == s.constructorName && (s.constructorName = e)
          const o = r.define.call(r, s)
          return o.config({ shape: e }), o
        },
      })),
        pv.setEdgeRegistry(t.registry)
    })(Av || (Av = {})),
    (function (t) {
      let e = 0
      ;(t.define = function (n) {
        const { constructorName: r, overwrite: i } = n,
          s = Pv(n, ['constructorName', 'overwrite']),
          o = fu(
            (a = r || s.shape) ? Pu(a) : ((e += 1), `CustomEdge${e}`),
            this,
          )
        var a
        return o.config(s), s.shape && t.registry.register(s.shape, o, i), o
      }),
        (t.create = function (e) {
          const n = e.shape || 'edge',
            r = t.registry.get(n)
          return r ? new r(e) : t.registry.onNotFound(n)
        })
    })(Av || (Av = {})),
    (function (t) {
      const e = 'basic.edge'
      t.config({
        shape: e,
        propHooks(e) {
          const { label: n, vertices: r } = e,
            i = Pv(e, ['label', 'vertices'])
          if (n) {
            null == i.labels && (i.labels = [])
            const e = 'string' == typeof n ? t.parseStringLabel(n) : n
            i.labels.push(e)
          }
          return (
            r &&
              Array.isArray(r) &&
              (i.vertices = r.map((t) => Vd.create(t).toJSON())),
            i
          )
        },
      }),
        t.registry.register(e, t)
    })(Av || (Av = {}))
  class Cv extends bu {
    constructor(t, e = {}) {
      super(),
        (this.length = 0),
        (this.comparator = e.comparator || 'zIndex'),
        this.clean(),
        t && this.reset(t, { silent: !0 })
    }
    toJSON() {
      return this.cells.map((t) => t.toJSON())
    }
    add(t, e, n) {
      let r, i
      'number' == typeof e
        ? ((r = e), (i = Object.assign({ merge: !1 }, n)))
        : ((r = this.length), (i = Object.assign({ merge: !1 }, e))),
        r > this.length && (r = this.length),
        r < 0 && (r += this.length + 1)
      const s = Array.isArray(t) ? t : [t],
        o = this.comparator && 'number' != typeof e && !1 !== i.sort,
        a = this.comparator || null
      let l = !1
      const c = [],
        h = []
      return (
        s.forEach((t) => {
          const e = this.get(t)
          e
            ? i.merge &&
              !t.isSameStore(e) &&
              (e.setProp(t.getProp(), n),
              h.push(e),
              o &&
                !l &&
                (l =
                  null == a || 'function' == typeof a
                    ? e.hasChanged()
                    : 'string' == typeof a
                    ? e.hasChanged(a)
                    : a.some((t) => e.hasChanged(t))))
            : (c.push(t), this.reference(t))
        }),
        c.length &&
          (o && (l = !0),
          this.cells.splice(r, 0, ...c),
          (this.length = this.cells.length)),
        l && this.sort({ silent: !0 }),
        i.silent ||
          (c.forEach((t, e) => {
            const n = { cell: t, index: r + e, options: i }
            this.trigger('added', n),
              i.dryrun || t.notify('added', Object.assign({}, n))
          }),
          l && this.trigger('sorted'),
          (c.length || h.length) &&
            this.trigger('updated', {
              added: c,
              merged: h,
              removed: [],
              options: i,
            })),
        this
      )
    }
    remove(t, e = {}) {
      const n = Array.isArray(t) ? t : [t],
        r = this.removeCells(n, e)
      return (
        !e.silent &&
          r.length > 0 &&
          this.trigger('updated', {
            options: e,
            removed: r,
            added: [],
            merged: [],
          }),
        Array.isArray(t) ? r : r[0]
      )
    }
    removeCells(t, e) {
      const n = []
      for (let r = 0; r < t.length; r += 1) {
        const i = this.get(t[r])
        if (null == i) continue
        const s = this.cells.indexOf(i)
        this.cells.splice(s, 1),
          (this.length -= 1),
          delete this.map[i.id],
          n.push(i),
          this.unreference(i),
          e.dryrun || i.remove(),
          e.silent ||
            (this.trigger('removed', { cell: i, index: s, options: e }),
            e.dryrun || i.notify('removed', { cell: i, index: s, options: e }))
      }
      return n
    }
    reset(t, e = {}) {
      const n = this.cells.slice()
      if (
        (n.forEach((t) => this.unreference(t)),
        this.clean(),
        this.add(t, Object.assign({ silent: !0 }, e)),
        !e.silent)
      ) {
        const t = this.cells.slice()
        this.trigger('reseted', { options: e, previous: n, current: t })
        const r = [],
          i = []
        t.forEach((t) => {
          n.some((e) => e.id === t.id) || r.push(t)
        }),
          n.forEach((e) => {
            t.some((t) => t.id === e.id) || i.push(e)
          }),
          this.trigger('updated', {
            options: e,
            added: r,
            removed: i,
            merged: [],
          })
      }
      return this
    }
    push(t, e) {
      return this.add(t, this.length, e)
    }
    pop(t) {
      const e = this.at(this.length - 1)
      return this.remove(e, t)
    }
    unshift(t, e) {
      return this.add(t, 0, e)
    }
    shift(t) {
      const e = this.at(0)
      return this.remove(e, t)
    }
    get(t) {
      if (null == t) return null
      const e = 'string' == typeof t || 'number' == typeof t ? t : t.id
      return this.map[e] || null
    }
    has(t) {
      return null != this.get(t)
    }
    at(t) {
      return t < 0 && (t += this.length), this.cells[t] || null
    }
    first() {
      return this.at(0)
    }
    last() {
      return this.at(-1)
    }
    indexOf(t) {
      return this.cells.indexOf(t)
    }
    toArray() {
      return this.cells.slice()
    }
    sort(t = {}) {
      return (
        null != this.comparator &&
          ((this.cells = jc(this.cells, this.comparator)),
          t.silent || this.trigger('sorted')),
        this
      )
    }
    clone() {
      return new (0,
      this.constructor)(this.cells.slice(), { comparator: this.comparator })
    }
    reference(t) {
      ;(this.map[t.id] = t), t.on('*', this.notifyCellEvent, this)
    }
    unreference(t) {
      t.off('*', this.notifyCellEvent, this), delete this.map[t.id]
    }
    notifyCellEvent(t, e) {
      const n = e.cell
      this.trigger(`cell:${t}`, e),
        n &&
          (n.isNode()
            ? this.trigger(
                `node:${t}`,
                Object.assign(Object.assign({}, e), { node: n }),
              )
            : n.isEdge() &&
              this.trigger(
                `edge:${t}`,
                Object.assign(Object.assign({}, e), { edge: n }),
              ))
    }
    clean() {
      ;(this.length = 0), (this.cells = []), (this.map = {})
    }
  }
  class Ov extends bu {
    constructor(t = []) {
      super(),
        (this.batches = {}),
        (this.addings = new WeakMap()),
        (this.nodes = {}),
        (this.edges = {}),
        (this.outgoings = {}),
        (this.incomings = {}),
        (this.collection = new Cv(t)),
        this.setup()
    }
    get [Symbol.toStringTag]() {
      return Ov.toStringTag
    }
    notify(t, e) {
      this.trigger(t, e)
      const n = this.graph
      return (
        n &&
          ('sorted' === t || 'reseted' === t || 'updated' === t
            ? n.trigger(`model:${t}`, e)
            : n.trigger(t, e)),
        this
      )
    }
    setup() {
      const t = this.collection
      t.on('sorted', () => this.notify('sorted', null)),
        t.on('updated', (t) => this.notify('updated', t)),
        t.on('cell:change:zIndex', () => this.sortOnChangeZ()),
        t.on('added', ({ cell: t }) => {
          this.onCellAdded(t)
        }),
        t.on('removed', (t) => {
          const e = t.cell
          this.onCellRemoved(e, t.options),
            this.notify('cell:removed', t),
            e.isNode()
              ? this.notify(
                  'node:removed',
                  Object.assign(Object.assign({}, t), { node: e }),
                )
              : e.isEdge() &&
                this.notify(
                  'edge:removed',
                  Object.assign(Object.assign({}, t), { edge: e }),
                )
        }),
        t.on('reseted', (t) => {
          this.onReset(t.current), this.notify('reseted', t)
        }),
        t.on('edge:change:source', ({ edge: t }) =>
          this.onEdgeTerminalChanged(t, 'source'),
        ),
        t.on('edge:change:target', ({ edge: t }) => {
          this.onEdgeTerminalChanged(t, 'target')
        })
    }
    sortOnChangeZ() {
      this.collection.sort()
    }
    onCellAdded(t) {
      const e = t.id
      t.isEdge()
        ? (t.updateParent(),
          (this.edges[e] = !0),
          this.onEdgeTerminalChanged(t, 'source'),
          this.onEdgeTerminalChanged(t, 'target'))
        : (this.nodes[e] = !0)
    }
    onCellRemoved(t, e) {
      const n = t.id
      if (t.isEdge()) {
        delete this.edges[n]
        const e = t.getSource(),
          r = t.getTarget()
        if (e && e.cell) {
          const t = this.outgoings[e.cell],
            r = t ? t.indexOf(n) : -1
          r >= 0 &&
            (t.splice(r, 1), 0 === t.length && delete this.outgoings[e.cell])
        }
        if (r && r.cell) {
          const t = this.incomings[r.cell],
            e = t ? t.indexOf(n) : -1
          e >= 0 &&
            (t.splice(e, 1), 0 === t.length && delete this.incomings[r.cell])
        }
      } else delete this.nodes[n]
      e.clear ||
        (e.disconnectEdges
          ? this.disconnectConnectedEdges(t, e)
          : this.removeConnectedEdges(t, e)),
        t.model === this && (t.model = null)
    }
    onReset(t) {
      ;(this.nodes = {}),
        (this.edges = {}),
        (this.outgoings = {}),
        (this.incomings = {}),
        t.forEach((t) => this.onCellAdded(t))
    }
    onEdgeTerminalChanged(t, e) {
      const n = 'source' === e ? this.outgoings : this.incomings,
        r = t.previous(e)
      if (r && r.cell) {
        const e = vv.isCell(r.cell) ? r.cell.id : r.cell,
          i = n[e],
          s = i ? i.indexOf(t.id) : -1
        s >= 0 && (i.splice(s, 1), 0 === i.length && delete n[e])
      }
      const i = t.getTerminal(e)
      if (i && i.cell) {
        const e = vv.isCell(i.cell) ? i.cell.id : i.cell,
          r = n[e] || []
        ;-1 === r.indexOf(t.id) && r.push(t.id), (n[e] = r)
      }
    }
    prepareCell(t, e) {
      return (
        t.model || (e && e.dryrun) || (t.model = this),
        null == t.zIndex &&
          t.setZIndex(this.getMaxZIndex() + 1, { silent: !0 }),
        t
      )
    }
    resetCells(t, e = {}) {
      return (
        t.map((t) =>
          this.prepareCell(
            t,
            Object.assign(Object.assign({}, e), { dryrun: !0 }),
          ),
        ),
        this.collection.reset(t, e),
        t.map((t) => this.prepareCell(t, { options: e })),
        this
      )
    }
    clear(t = {}) {
      const e = this.getCells()
      if (0 === e.length) return this
      const n = Object.assign(Object.assign({}, t), { clear: !0 })
      return (
        this.batchUpdate(
          'clear',
          () => {
            const t = e.sort(
              (t, e) => (t.isEdge() ? 1 : 2) - (e.isEdge() ? 1 : 2),
            )
            for (; t.length > 0; ) {
              const e = t.shift()
              e && e.remove(n)
            }
          },
          n,
        ),
        this
      )
    }
    addNode(t, e = {}) {
      const n = wv.isNode(t) ? t : this.createNode(t)
      return this.addCell(n, e), n
    }
    createNode(t) {
      return wv.create(t)
    }
    addEdge(t, e = {}) {
      const n = Av.isEdge(t) ? t : this.createEdge(t)
      return this.addCell(n, e), n
    }
    createEdge(t) {
      return Av.create(t)
    }
    addCell(t, e = {}) {
      return Array.isArray(t)
        ? this.addCells(t, e)
        : (this.collection.has(t) ||
            this.addings.has(t) ||
            (this.addings.set(t, !0),
            this.collection.add(this.prepareCell(t, e), e),
            t.eachChild((t) => this.addCell(t, e)),
            this.addings.delete(t)),
          this)
    }
    addCells(t, e = {}) {
      const n = t.length
      if (0 === n) return this
      const r = Object.assign(Object.assign({}, e), {
        position: n - 1,
        maxPosition: n - 1,
      })
      return (
        this.startBatch(
          'add',
          Object.assign(Object.assign({}, r), { cells: t }),
        ),
        t.forEach((t) => {
          this.addCell(t, r), (r.position -= 1)
        }),
        this.stopBatch(
          'add',
          Object.assign(Object.assign({}, r), { cells: t }),
        ),
        this
      )
    }
    removeCell(t, e = {}) {
      const n = 'string' == typeof t ? this.getCell(t) : t
      return n && this.has(n) ? this.collection.remove(n, e) : null
    }
    updateCellId(t, e) {
      this.startBatch('update', { id: e }), t.prop('id', e)
      const n = t.clone({ keepId: !0 })
      this.addCell(n)
      return (
        this.getConnectedEdges(t).forEach((n) => {
          const r = n.getSourceCell(),
            i = n.getTargetCell()
          r === t &&
            n.setSource(
              Object.assign(Object.assign({}, n.getSource()), { cell: e }),
            ),
            i === t &&
              n.setTarget(
                Object.assign(Object.assign({}, n.getTarget()), { cell: e }),
              )
        }),
        this.removeCell(t),
        this.stopBatch('update', { id: e }),
        n
      )
    }
    removeCells(t, e = {}) {
      return t.length
        ? this.batchUpdate('remove', () => t.map((t) => this.removeCell(t, e)))
        : []
    }
    removeConnectedEdges(t, e = {}) {
      const n = this.getConnectedEdges(t)
      return (
        n.forEach((t) => {
          t.remove(e)
        }),
        n
      )
    }
    disconnectConnectedEdges(t, e = {}) {
      const n = 'string' == typeof t ? t : t.id
      this.getConnectedEdges(t).forEach((t) => {
        const r = t.getSourceCell(),
          i = t.getTargetCell()
        r && r.id === n && t.setSource({ x: 0, y: 0 }, e),
          i && i.id === n && t.setTarget({ x: 0, y: 0 }, e)
      })
    }
    has(t) {
      return this.collection.has(t)
    }
    total() {
      return this.collection.length
    }
    indexOf(t) {
      return this.collection.indexOf(t)
    }
    getCell(t) {
      return this.collection.get(t)
    }
    getCells() {
      return this.collection.toArray()
    }
    getFirstCell() {
      return this.collection.first()
    }
    getLastCell() {
      return this.collection.last()
    }
    getMinZIndex() {
      const t = this.collection.first()
      return (t && t.getZIndex()) || 0
    }
    getMaxZIndex() {
      const t = this.collection.last()
      return (t && t.getZIndex()) || 0
    }
    getCellsFromCache(t) {
      return t
        ? Object.keys(t)
            .map((t) => this.getCell(t))
            .filter((t) => null != t)
        : []
    }
    getNodes() {
      return this.getCellsFromCache(this.nodes)
    }
    getEdges() {
      return this.getCellsFromCache(this.edges)
    }
    getOutgoingEdges(t) {
      const e = 'string' == typeof t ? t : t.id,
        n = this.outgoings[e]
      return n
        ? n.map((t) => this.getCell(t)).filter((t) => t && t.isEdge())
        : null
    }
    getIncomingEdges(t) {
      const e = 'string' == typeof t ? t : t.id,
        n = this.incomings[e]
      return n
        ? n.map((t) => this.getCell(t)).filter((t) => t && t.isEdge())
        : null
    }
    getConnectedEdges(t, e = {}) {
      const n = [],
        r = 'string' == typeof t ? this.getCell(t) : t
      if (null == r) return n
      const i = {},
        s = e.indirect
      let o = e.incoming,
        a = e.outgoing
      null == o && null == a && (o = a = !0)
      const l = (t, e) => {
        const r = e ? this.getOutgoingEdges(t) : this.getIncomingEdges(t)
        if (
          (null != r &&
            r.forEach((t) => {
              i[t.id] ||
                (n.push(t), (i[t.id] = !0), s && (o && l(t, !1), a && l(t, !0)))
            }),
          s && t.isEdge())
        ) {
          const r = e ? t.getTargetCell() : t.getSourceCell()
          r && r.isEdge() && (i[r.id] || (n.push(r), l(r, e)))
        }
      }
      if ((a && l(r, !0), o && l(r, !1), e.deep)) {
        const t = r.getDescendants({ deep: !0 }),
          s = {}
        t.forEach((t) => {
          t.isNode() && (s[t.id] = !0)
        })
        const l = (t, r) => {
          const o = r
            ? this.getOutgoingEdges(t.id)
            : this.getIncomingEdges(t.id)
          null != o &&
            o.forEach((t) => {
              if (!i[t.id]) {
                const r = t.getSourceCell(),
                  o = t.getTargetCell()
                if (!e.enclosed && r && s[r.id] && o && s[o.id]) return
                n.push(t), (i[t.id] = !0)
              }
            })
        }
        t.forEach((t) => {
          t.isEdge() || (a && l(t, !0), o && l(t, !1))
        })
      }
      return n
    }
    isBoundary(t, e) {
      const n = 'string' == typeof t ? this.getCell(t) : t,
        r = e ? this.getIncomingEdges(n) : this.getOutgoingEdges(n)
      return null == r || 0 === r.length
    }
    getBoundaryNodes(t) {
      const e = []
      return (
        Object.keys(this.nodes).forEach((n) => {
          if (this.isBoundary(n, t)) {
            const t = this.getCell(n)
            t && e.push(t)
          }
        }),
        e
      )
    }
    getRoots() {
      return this.getBoundaryNodes(!0)
    }
    getLeafs() {
      return this.getBoundaryNodes(!1)
    }
    isRoot(t) {
      return this.isBoundary(t, !0)
    }
    isLeaf(t) {
      return this.isBoundary(t, !1)
    }
    getNeighbors(t, e = {}) {
      let n = e.incoming,
        r = e.outgoing
      null == n && null == r && (n = r = !0)
      const i = this.getConnectedEdges(t, e).reduce((i, s) => {
        const o = s.hasLoop(e),
          a = s.getSourceCell(),
          l = s.getTargetCell()
        return (
          n &&
            a &&
            a.isNode() &&
            !i[a.id] &&
            ((!o && (a === t || (e.deep && a.isDescendantOf(t)))) ||
              (i[a.id] = a)),
          r &&
            l &&
            l.isNode() &&
            !i[l.id] &&
            ((!o && (l === t || (e.deep && l.isDescendantOf(t)))) ||
              (i[l.id] = l)),
          i
        )
      }, {})
      if (t.isEdge()) {
        if (n) {
          const e = t.getSourceCell()
          e && e.isNode() && !i[e.id] && (i[e.id] = e)
        }
        if (r) {
          const e = t.getTargetCell()
          e && e.isNode() && !i[e.id] && (i[e.id] = e)
        }
      }
      return Object.keys(i).map((t) => i[t])
    }
    isNeighbor(t, e, n = {}) {
      let r = n.incoming,
        i = n.outgoing
      return (
        null == r && null == i && (r = i = !0),
        this.getConnectedEdges(t, n).some((t) => {
          const n = t.getSourceCell(),
            s = t.getTargetCell()
          return !(!r || !n || n.id !== e.id) || !(!i || !s || s.id !== e.id)
        })
      )
    }
    getSuccessors(t, e = {}) {
      const n = []
      return (
        this.search(
          t,
          (r, i) => {
            r !== t && this.matchDistance(i, e.distance) && n.push(r)
          },
          Object.assign(Object.assign({}, e), { outgoing: !0 }),
        ),
        n
      )
    }
    isSuccessor(t, e, n = {}) {
      let r = !1
      return (
        this.search(
          t,
          (i, s) => {
            if (i === e && i !== t && this.matchDistance(s, n.distance))
              return (r = !0), !1
          },
          Object.assign(Object.assign({}, n), { outgoing: !0 }),
        ),
        r
      )
    }
    getPredecessors(t, e = {}) {
      const n = []
      return (
        this.search(
          t,
          (r, i) => {
            r !== t && this.matchDistance(i, e.distance) && n.push(r)
          },
          Object.assign(Object.assign({}, e), { incoming: !0 }),
        ),
        n
      )
    }
    isPredecessor(t, e, n = {}) {
      let r = !1
      return (
        this.search(
          t,
          (i, s) => {
            if (i === e && i !== t && this.matchDistance(s, n.distance))
              return (r = !0), !1
          },
          Object.assign(Object.assign({}, n), { incoming: !0 }),
        ),
        r
      )
    }
    matchDistance(t, e) {
      return (
        null == e ||
        ('function' == typeof e
          ? e(t)
          : !(!Array.isArray(e) || !e.includes(t)) || t === e)
      )
    }
    getCommonAncestor(...t) {
      const e = []
      return (
        t.forEach((t) => {
          t && (Array.isArray(t) ? e.push(...t) : e.push(t))
        }),
        vv.getCommonAncestor(...e)
      )
    }
    getSubGraph(t, e = {}) {
      const n = [],
        r = {},
        i = [],
        s = [],
        o = (t) => {
          r[t.id] ||
            (n.push(t),
            (r[t.id] = t),
            t.isEdge() && s.push(t),
            t.isNode() && i.push(t))
        }
      return (
        t.forEach((t) => {
          if ((o(t), e.deep)) {
            t.getDescendants({ deep: !0 }).forEach((t) => o(t))
          }
        }),
        s.forEach((t) => {
          const e = t.getSourceCell(),
            s = t.getTargetCell()
          e && !r[e.id] && (n.push(e), (r[e.id] = e), e.isNode() && i.push(e)),
            s && !r[s.id] && (n.push(s), (r[s.id] = s), s.isNode() && i.push(s))
        }),
        i.forEach((t) => {
          this.getConnectedEdges(t, e).forEach((t) => {
            const e = t.getSourceCell(),
              i = t.getTargetCell()
            !r[t.id] &&
              e &&
              r[e.id] &&
              i &&
              r[i.id] &&
              (n.push(t), (r[t.id] = t))
          })
        }),
        n
      )
    }
    cloneSubGraph(t, e = {}) {
      const n = this.getSubGraph(t, e)
      return this.cloneCells(n)
    }
    cloneCells(t) {
      return vv.cloneCells(t)
    }
    getNodesFromPoint(t, e) {
      const n = 'number' == typeof t ? { x: t, y: e || 0 } : t
      return this.getNodes().filter((t) => t.getBBox().containsPoint(n))
    }
    getNodesInArea(t, e, n, r, i) {
      const s = 'number' == typeof t ? new zd(t, e, n, r) : zd.create(t),
        o = 'number' == typeof t ? i : e,
        a = o && o.strict
      return this.getNodes().filter((t) => {
        const e = t.getBBox()
        return a ? s.containsRect(e) : s.isIntersectWithRect(e)
      })
    }
    getEdgesInArea(t, e, n, r, i) {
      const s = 'number' == typeof t ? new zd(t, e, n, r) : zd.create(t),
        o = 'number' == typeof t ? i : e,
        a = o && o.strict
      return this.getEdges().filter((t) => {
        const e = t.getBBox()
        return (
          0 === e.width ? e.inflate(1, 0) : 0 === e.height && e.inflate(0, 1),
          a ? s.containsRect(e) : s.isIntersectWithRect(e)
        )
      })
    }
    getNodesUnderNode(t, e = {}) {
      const n = t.getBBox()
      return (
        null == e.by || 'bbox' === e.by
          ? this.getNodesInArea(n)
          : this.getNodesFromPoint(n[e.by])
      ).filter((e) => t.id !== e.id && !e.isDescendantOf(t))
    }
    getAllCellsBBox() {
      return this.getCellsBBox(this.getCells())
    }
    getCellsBBox(t, e = {}) {
      return vv.getCellsBBox(t, e)
    }
    search(t, e, n = {}) {
      n.breadthFirst
        ? this.breadthFirstSearch(t, e, n)
        : this.depthFirstSearch(t, e, n)
    }
    breadthFirstSearch(t, e, n = {}) {
      const r = [],
        i = {},
        s = {}
      for (r.push(t), s[t.id] = 0; r.length > 0; ) {
        const t = r.shift()
        if (null == t || i[t.id]) continue
        if (((i[t.id] = !0), !1 === au(e, this, t, s[t.id]))) continue
        this.getNeighbors(t, n).forEach((e) => {
          ;(s[e.id] = s[t.id] + 1), r.push(e)
        })
      }
    }
    depthFirstSearch(t, e, n = {}) {
      const r = [],
        i = {},
        s = {}
      for (r.push(t), s[t.id] = 0; r.length > 0; ) {
        const t = r.pop()
        if (null == t || i[t.id]) continue
        if (((i[t.id] = !0), !1 === au(e, this, t, s[t.id]))) continue
        const o = this.getNeighbors(t, n),
          a = r.length
        o.forEach((e) => {
          ;(s[e.id] = s[t.id] + 1), r.splice(a, 0, e)
        })
      }
    }
    getShortestPath(t, e, n = {}) {
      const r = {}
      this.getEdges().forEach((t) => {
        const e = t.getSourceCellId(),
          i = t.getTargetCellId()
        e &&
          i &&
          (r[e] || (r[e] = []),
          r[i] || (r[i] = []),
          r[e].push(i),
          n.directed || r[i].push(e))
      })
      const i = 'string' == typeof t ? t : t.id,
        s = Sd.run(r, i, n.weight),
        o = []
      let a = 'string' == typeof e ? e : e.id
      for (s[a] && o.push(a); (a = s[a]); ) o.unshift(a)
      return o
    }
    translate(t, e, n) {
      return (
        this.getCells()
          .filter((t) => !t.hasParent())
          .forEach((r) => r.translate(t, e, n)),
        this
      )
    }
    resize(t, e, n) {
      return this.resizeCells(t, e, this.getCells(), n)
    }
    resizeCells(t, e, n, r = {}) {
      const i = this.getCellsBBox(n)
      if (i) {
        const s = Math.max(t / i.width, 0),
          o = Math.max(e / i.height, 0),
          a = i.getOrigin()
        n.forEach((t) => t.scale(s, o, a, r))
      }
      return this
    }
    toJSON(t = {}) {
      return Ov.toJSON(this.getCells(), t)
    }
    parseJSON(t) {
      return Ov.fromJSON(t)
    }
    fromJSON(t, e = {}) {
      const n = this.parseJSON(t)
      return this.resetCells(n, e), this
    }
    startBatch(t, e = {}) {
      return (
        (this.batches[t] = (this.batches[t] || 0) + 1),
        this.notify('batch:start', { name: t, data: e }),
        this
      )
    }
    stopBatch(t, e = {}) {
      return (
        (this.batches[t] = (this.batches[t] || 0) - 1),
        this.notify('batch:stop', { name: t, data: e }),
        this
      )
    }
    batchUpdate(t, e, n = {}) {
      this.startBatch(t, n)
      const r = e()
      return this.stopBatch(t, n), r
    }
    hasActiveBatch(t = Object.keys(this.batches)) {
      return (Array.isArray(t) ? t : [t]).some((t) => this.batches[t] > 0)
    }
  }
  !(function (t) {
    ;(t.toStringTag = `X6.${t.name}`),
      (t.isModel = function (e) {
        if (null == e) return !1
        if (e instanceof t) return !0
        const n = e[Symbol.toStringTag],
          r = e
        return (
          (null == n || n === t.toStringTag) &&
          'function' == typeof r.addNode &&
          'function' == typeof r.addEdge &&
          null != r.collection
        )
      })
  })(Ov || (Ov = {})),
    (function (t) {
      ;(t.toJSON = function (t, e = {}) {
        return { cells: t.map((t) => t.toJSON(e)) }
      }),
        (t.fromJSON = function (t) {
          const e = []
          return (
            Array.isArray(t)
              ? e.push(...t)
              : (t.cells && e.push(...t.cells),
                t.nodes &&
                  t.nodes.forEach((t) => {
                    null == t.shape && (t.shape = 'rect'), e.push(t)
                  }),
                t.edges &&
                  t.edges.forEach((t) => {
                    null == t.shape && (t.shape = 'edge'), e.push(t)
                  })),
            e.map((t) => {
              const e = t.shape
              if (e) {
                if (wv.registry.exist(e)) return wv.create(t)
                if (Av.registry.exist(e)) return Av.create(t)
              }
              throw new Error(
                'The `shape` should be specified when creating a node/edge instance',
              )
            })
          )
        })
    })(Ov || (Ov = {}))
  var Ev = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  let Mv = class extends wv {
    get label() {
      return this.getLabel()
    }
    set label(t) {
      this.setLabel(t)
    }
    getLabel() {
      return this.getAttrByPath('text/text')
    }
    setLabel(t, e) {
      return (
        null == t ? this.removeLabel() : this.setAttrByPath('text/text', t, e),
        this
      )
    }
    removeLabel() {
      return this.removeAttrByPath('text/text'), this
    }
  }
  !(function (t) {
    ;(t.bodyAttr = { fill: '#ffffff', stroke: '#333333', strokeWidth: 2 }),
      (t.labelAttr = {
        fontSize: 14,
        fill: '#000000',
        refX: 0.5,
        refY: 0.5,
        textAnchor: 'middle',
        textVerticalAnchor: 'middle',
        fontFamily: 'Arial, helvetica, sans-serif',
      }),
      t.config({
        attrs: { text: Object.assign({}, t.labelAttr) },
        propHooks(t) {
          const { label: e } = t,
            n = Ev(t, ['label'])
          return e && yu(n, 'attrs/text/text', e), n
        },
        visible: !0,
      })
  })(Mv || (Mv = {}))
  var Sv = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  function Tv(t, e = 'body') {
    return [
      { tagName: t, selector: e },
      { tagName: 'text', selector: 'label' },
    ]
  }
  function jv(t, e, n = {}) {
    const r = {
      constructorName: t,
      markup: Tv(t, n.selector),
      attrs: { [t]: Object.assign({}, Mv.bodyAttr) },
    }
    return (n.parent || Mv).define(el(r, e, { shape: t }))
  }
  jv('rect', { attrs: { body: { refWidth: '100%', refHeight: '100%' } } })
  const kv = Av.define({
    shape: 'edge',
    markup: [
      {
        tagName: 'path',
        selector: 'wrap',
        groupSelector: 'lines',
        attrs: {
          fill: 'none',
          cursor: 'pointer',
          stroke: 'transparent',
          strokeLinecap: 'round',
        },
      },
      {
        tagName: 'path',
        selector: 'line',
        groupSelector: 'lines',
        attrs: { fill: 'none', pointerEvents: 'none' },
      },
    ],
    attrs: {
      lines: { connection: !0, strokeLinejoin: 'round' },
      wrap: { strokeWidth: 10 },
      line: { stroke: '#333', strokeWidth: 2, targetMarker: 'classic' },
    },
  })
  jv('ellipse', {
    attrs: { body: { refCx: '50%', refCy: '50%', refRx: '50%', refRy: '50%' } },
  })
  var Nv = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  class _v extends Mv {
    get points() {
      return this.getPoints()
    }
    set points(t) {
      this.setPoints(t)
    }
    getPoints() {
      return this.getAttrByPath('body/refPoints')
    }
    setPoints(t, e) {
      return (
        null == t
          ? this.removePoints()
          : this.setAttrByPath('body/refPoints', _v.pointsToString(t), e),
        this
      )
    }
    removePoints() {
      return this.removeAttrByPath('body/refPoints'), this
    }
  }
  !(function (t) {
    function e(t) {
      return 'string' == typeof t
        ? t
        : t
            .map((t) =>
              Array.isArray(t)
                ? t.join(',')
                : Vd.isPointLike(t)
                ? `${t.x}, ${t.y}`
                : '',
            )
            .join(' ')
    }
    ;(t.pointsToString = e),
      t.config({
        propHooks(t) {
          const { points: n } = t,
            r = Nv(t, ['points'])
          if (n) {
            const t = e(n)
            t && yu(r, 'attrs/body/refPoints', t)
          }
          return r
        },
      })
  })(_v || (_v = {})),
    jv('polygon', {}, { parent: _v }),
    jv('polyline', {}, { parent: _v })
  var Lv = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  Mv.define({
    shape: 'path',
    markup: [
      { tagName: 'rect', selector: 'bg' },
      { tagName: 'path', selector: 'body' },
      { tagName: 'text', selector: 'label' },
    ],
    attrs: {
      bg: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'none',
        stroke: 'none',
        pointerEvents: 'all',
      },
      body: { fill: 'none', stroke: '#000', strokeWidth: 2 },
    },
    propHooks(t) {
      const { path: e } = t,
        n = Lv(t, ['path'])
      return e && yu(n, 'attrs/body/refD', e), n
    },
  })
  var Iv = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  Mv.define({
    shape: 'text-block',
    markup: [
      { tagName: 'rect', selector: 'body' },
      Wu.SUPPORT_FOREIGNOBJECT
        ? {
            tagName: 'foreignObject',
            selector: 'foreignObject',
            children: [
              {
                tagName: 'div',
                ns: rg.xhtml,
                selector: 'label',
                style: {
                  width: '100%',
                  height: '100%',
                  position: 'static',
                  backgroundColor: 'transparent',
                  textAlign: 'center',
                  margin: 0,
                  padding: '0px 5px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            ],
          }
        : {
            tagName: 'text',
            selector: 'label',
            attrs: { textAnchor: 'middle' },
          },
    ],
    attrs: {
      body: Object.assign(Object.assign({}, Mv.bodyAttr), {
        refWidth: '100%',
        refHeight: '100%',
      }),
      foreignObject: { refWidth: '100%', refHeight: '100%' },
      label: { style: { fontSize: 14 } },
    },
    propHooks(t) {
      const { text: e } = t,
        n = Iv(t, ['text'])
      return e && yu(n, 'attrs/label/text', e), n
    },
    attrHooks: {
      text: {
        set(t, { cell: e, view: n, refBBox: r, elem: i, attrs: s }) {
          if (!(i instanceof HTMLElement)) {
            const o = s.style || {},
              a = { text: t, width: -5, height: '100%' },
              l = Object.assign({ textVerticalAnchor: 'middle' }, o)
            return (
              au(Jp.presets.textWrap.set, this, a, {
                cell: e,
                view: n,
                elem: i,
                refBBox: r,
                attrs: l,
              }),
              { fill: o.color || null }
            )
          }
          i.textContent = t
        },
        position(t, { refBBox: e, elem: n }) {
          if (n instanceof SVGElement) return e.getCenter()
        },
      },
    },
  }),
    jv(
      'image',
      {
        attrs: { image: { refWidth: '100%', refHeight: '100%' } },
        propHooks: (function (t = 'xlink:href') {
          return (e) => {
            const { imageUrl: n, imageWidth: r, imageHeight: i } = e,
              s = Sv(e, ['imageUrl', 'imageWidth', 'imageHeight'])
            if (null != n || null != r || null != i) {
              const e = () => {
                if (s.attrs) {
                  const e = s.attrs.image
                  null != n && (e[t] = n),
                    null != r && (e.width = r),
                    null != i && (e.height = i),
                    (s.attrs.image = e)
                }
              }
              s.attrs
                ? (null == s.attrs.image && (s.attrs.image = {}), e())
                : ((s.attrs = { image: {} }), e())
            }
            return s
          }
        })(),
      },
      { selector: 'image' },
    ),
    jv('circle', {
      attrs: { body: { refCx: '50%', refCy: '50%', refR: '50%' } },
    })
  class Bv extends Tm {
    constructor() {
      super(...arguments), (this.portsCache = {})
    }
    get [Symbol.toStringTag]() {
      return Bv.toStringTag
    }
    getContainerClassName() {
      const t = [super.getContainerClassName(), this.prefixClassName('node')]
      return (
        this.can('nodeMovable') ||
          t.push(this.prefixClassName('node-immovable')),
        t.join(' ')
      )
    }
    updateClassName(t) {
      const e = t.target
      if (e.hasAttribute('magnet')) {
        const t = this.prefixClassName('port-unconnectable')
        this.can('magnetConnectable') ? Ku(e, t) : Zu(e, t)
      } else {
        const t = this.prefixClassName('node-immovable')
        this.can('nodeMovable') ? this.removeClass(t) : this.addClass(t)
      }
    }
    isNodeView() {
      return !0
    }
    confirmUpdate(t) {
      let e = t
      return (
        this.hasAction(e, 'ports') &&
          (this.removePorts(), this.cleanPortsCache()),
        this.hasAction(e, 'render')
          ? (this.render(),
            (e = this.removeAction(e, [
              'render',
              'update',
              'resize',
              'translate',
              'rotate',
              'ports',
              'tools',
            ])))
          : ((e = this.handleAction(
              e,
              'resize',
              () => this.resize(),
              'update',
            )),
            (e = this.handleAction(e, 'update', () => this.update(), 'ports')),
            (e = this.handleAction(e, 'translate', () => this.translate())),
            (e = this.handleAction(e, 'rotate', () => this.rotate())),
            (e = this.handleAction(e, 'ports', () => this.renderPorts())),
            (e = this.handleAction(e, 'tools', () => this.renderTools()))),
        e
      )
    }
    update(t) {
      this.cleanCache(), this.removePorts()
      const e = this.cell,
        n = e.getSize(),
        r = e.getAttrs()
      this.updateAttrs(this.container, r, {
        attrs: t === r ? null : t,
        rootBBox: new zd(0, 0, n.width, n.height),
        selectors: this.selectors,
      }),
        this.renderPorts()
    }
    renderMarkup() {
      const t = this.cell.markup
      if (t) {
        if ('string' == typeof t)
          throw new TypeError('Not support string markup.')
        return this.renderJSONMarkup(t)
      }
      throw new TypeError('Invalid node markup.')
    }
    renderJSONMarkup(t) {
      const e = this.parseJSONMarkup(t, this.container)
      ;(this.selectors = e.selectors), this.container.appendChild(e.fragment)
    }
    render() {
      return (
        this.empty(),
        this.renderMarkup(),
        this.resize(),
        this.updateTransform(),
        this.renderTools(),
        this
      )
    }
    resize() {
      this.cell.getAngle() && this.rotate(), this.update()
    }
    translate() {
      this.updateTransform()
    }
    rotate() {
      this.updateTransform()
    }
    getTranslationString() {
      const t = this.cell.getPosition()
      return `translate(${t.x},${t.y})`
    }
    getRotationString() {
      const t = this.cell.getAngle()
      if (t) {
        const e = this.cell.getSize()
        return `rotate(${t},${e.width / 2},${e.height / 2})`
      }
    }
    updateTransform() {
      let t = this.getTranslationString()
      const e = this.getRotationString()
      e && (t += ` ${e}`), this.container.setAttribute('transform', t)
    }
    findPortElem(t, e) {
      const n = t ? this.portsCache[t] : null
      if (!n) return null
      const r = n.portContentElement,
        i = n.portContentSelectors || {}
      return this.findOne(e, r, i)
    }
    cleanPortsCache() {
      this.portsCache = {}
    }
    removePorts() {
      Object.keys(this.portsCache).forEach((t) => {
        ug(this.portsCache[t].portElement)
      })
    }
    renderPorts() {
      const t = this.container,
        e = []
      t.childNodes.forEach((t) => {
        e.push(t)
      })
      const n = this.cell.getParsedPorts(),
        r = Xo(n, 'zIndex'),
        i = 'auto'
      r.auto &&
        r.auto.forEach((n) => {
          const r = this.getPortElement(n)
          t.append(r), e.push(r)
        }),
        Object.keys(r).forEach((t) => {
          if (t !== i) {
            const n = parseInt(t, 10)
            this.appendPorts(r[t], n, e)
          }
        }),
        this.updatePorts()
    }
    appendPorts(t, e, n) {
      const r = t.map((t) => this.getPortElement(t))
      n[e] || e < 0 ? fg(n[Math.max(e, 0)], r) : dg(this.container, r)
    }
    getPortElement(t) {
      const e = this.portsCache[t.id]
      return e ? e.portElement : this.createPortElement(t)
    }
    createPortElement(t) {
      let e = Pm.renderMarkup(this.cell.getPortContainerMarkup())
      const n = e.elem
      if (null == n) throw new Error('Invalid port container markup.')
      e = Pm.renderMarkup(this.getPortMarkup(t))
      const r = e.elem,
        i = e.selectors
      if (null == r) throw new Error('Invalid port markup.')
      this.setAttrs({ port: t.id, 'port-group': t.group }, r)
      let s = 'x6-port'
      t.group && (s += ` x6-port-${t.group}`),
        Zu(n, s),
        Zu(n, 'x6-port'),
        Zu(r, 'x6-port-body'),
        n.appendChild(r)
      let o,
        a,
        l = i
      if (this.existPortLabel(t)) {
        if (
          ((e = Pm.renderMarkup(this.getPortLabelMarkup(t.label))),
          (o = e.elem),
          (a = e.selectors),
          null == o)
        )
          throw new Error('Invalid port label markup.')
        if (i && a) {
          for (const t in a)
            if (i[t] && t !== this.rootSelector)
              throw new Error('Selectors within port must be unique.')
          l = Object.assign(Object.assign({}, i), a)
        }
        Zu(o, 'x6-port-label'), n.appendChild(o)
      }
      return (
        (this.portsCache[t.id] = {
          portElement: n,
          portSelectors: l,
          portLabelElement: o,
          portLabelSelectors: a,
          portContentElement: r,
          portContentSelectors: i,
        }),
        this.graph.options.onPortRendered &&
          this.graph.options.onPortRendered({
            port: t,
            node: this.cell,
            container: n,
            selectors: l,
            labelContainer: o,
            labelSelectors: a,
            contentContainer: r,
            contentSelectors: i,
          }),
        n
      )
    }
    updatePorts() {
      const t = this.cell.getParsedGroups()
      Object.keys(t).forEach((t) => this.updatePortGroup(t))
    }
    updatePortGroup(t) {
      const e = zd.fromSize(this.cell.getSize()),
        n = this.cell.getPortsLayoutByGroup(t, e)
      for (let t = 0, e = n.length; t < e; t += 1) {
        const e = n[t],
          r = e.portId,
          i = this.portsCache[r] || {},
          s = e.portLayout
        if ((this.applyPortTransform(i.portElement, s), null != e.portAttrs)) {
          const t = { selectors: i.portSelectors || {} }
          e.portSize && (t.rootBBox = zd.fromSize(e.portSize)),
            this.updateAttrs(i.portElement, e.portAttrs, t)
        }
        const o = e.labelLayout
        if (
          o &&
          i.portLabelElement &&
          (this.applyPortTransform(i.portLabelElement, o, -(s.angle || 0)),
          o.attrs)
        ) {
          const t = { selectors: i.portLabelSelectors || {} }
          e.labelSize && (t.rootBBox = zd.fromSize(e.labelSize)),
            this.updateAttrs(i.portLabelElement, o.attrs, t)
        }
      }
    }
    applyPortTransform(t, e, n = 0) {
      const r = e.angle,
        i = e.position
      ud(
        t,
        sd()
          .rotate(n)
          .translate(i.x || 0, i.y || 0)
          .rotate(r || 0),
        { absolute: !0 },
      )
    }
    getPortMarkup(t) {
      return t.markup || this.cell.portMarkup
    }
    getPortLabelMarkup(t) {
      return t.markup || this.cell.portLabelMarkup
    }
    existPortLabel(t) {
      return t.attrs && t.attrs.text
    }
    getEventArgs(t, e, n) {
      const r = this,
        i = r.cell
      return null == e || null == n
        ? { e: t, view: r, node: i, cell: i }
        : { e: t, x: e, y: n, view: r, node: i, cell: i }
    }
    notifyMouseDown(t, e, n) {
      super.onMouseDown(t, e, n),
        this.notify('node:mousedown', this.getEventArgs(t, e, n))
    }
    notifyMouseMove(t, e, n) {
      super.onMouseMove(t, e, n),
        this.notify('node:mousemove', this.getEventArgs(t, e, n))
    }
    notifyMouseUp(t, e, n) {
      super.onMouseUp(t, e, n),
        this.notify('node:mouseup', this.getEventArgs(t, e, n))
    }
    onClick(t, e, n) {
      super.onClick(t, e, n),
        this.notify('node:click', this.getEventArgs(t, e, n))
    }
    onDblClick(t, e, n) {
      super.onDblClick(t, e, n),
        this.notify('node:dblclick', this.getEventArgs(t, e, n))
    }
    onContextMenu(t, e, n) {
      super.onContextMenu(t, e, n),
        this.notify('node:contextmenu', this.getEventArgs(t, e, n))
    }
    onMouseDown(t, e, n) {
      this.isPropagationStopped(t) ||
        (this.notifyMouseDown(t, e, n), this.startNodeDragging(t, e, n))
    }
    onMouseMove(t, e, n) {
      const r = this.getEventData(t),
        i = r.action
      if ('magnet' === i) this.dragMagnet(t, e, n)
      else {
        if ('move' === i) {
          const i = r.targetView || this
          i.dragNode(t, e, n),
            i.notify('node:moving', {
              e: t,
              x: e,
              y: n,
              view: i,
              cell: i.cell,
              node: i.cell,
            })
        }
        this.notifyMouseMove(t, e, n)
      }
      this.setEventData(t, r)
    }
    onMouseUp(t, e, n) {
      const r = this.getEventData(t),
        i = r.action
      if ('magnet' === i) this.stopMagnetDragging(t, e, n)
      else if ((this.notifyMouseUp(t, e, n), 'move' === i)) {
        ;(r.targetView || this).stopNodeDragging(t, e, n)
      }
      const s = r.targetMagnet
      s && this.onMagnetClick(t, s, e, n), this.checkMouseleave(t)
    }
    onMouseOver(t) {
      super.onMouseOver(t), this.notify('node:mouseover', this.getEventArgs(t))
    }
    onMouseOut(t) {
      super.onMouseOut(t), this.notify('node:mouseout', this.getEventArgs(t))
    }
    onMouseEnter(t) {
      this.updateClassName(t),
        super.onMouseEnter(t),
        this.notify('node:mouseenter', this.getEventArgs(t))
    }
    onMouseLeave(t) {
      super.onMouseLeave(t),
        this.notify('node:mouseleave', this.getEventArgs(t))
    }
    onMouseWheel(t, e, n, r) {
      super.onMouseWheel(t, e, n, r),
        this.notify(
          'node:mousewheel',
          Object.assign({ delta: r }, this.getEventArgs(t, e, n)),
        )
    }
    onMagnetClick(t, e, n, r) {
      const i = this.graph
      i.view.getMouseMovedCount(t) > i.options.clickThreshold ||
        this.notify(
          'node:magnet:click',
          Object.assign({ magnet: e }, this.getEventArgs(t, n, r)),
        )
    }
    onMagnetDblClick(t, e, n, r) {
      this.notify(
        'node:magnet:dblclick',
        Object.assign({ magnet: e }, this.getEventArgs(t, n, r)),
      )
    }
    onMagnetContextMenu(t, e, n, r) {
      this.notify(
        'node:magnet:contextmenu',
        Object.assign({ magnet: e }, this.getEventArgs(t, n, r)),
      )
    }
    onMagnetMouseDown(t, e, n, r) {
      this.startMagnetDragging(t, n, r)
    }
    onCustomEvent(t, e, n, r) {
      this.notify(
        'node:customevent',
        Object.assign({ name: e }, this.getEventArgs(t, n, r)),
      ),
        super.onCustomEvent(t, e, n, r)
    }
    prepareEmbedding(t) {
      const e = this.graph,
        n = this.getEventData(t).cell || this.cell,
        r = e.findViewByCell(n),
        i = e.snapToGrid(t.clientX, t.clientY)
      this.notify('node:embed', {
        e: t,
        node: n,
        view: r,
        cell: n,
        x: i.x,
        y: i.y,
        currentParent: n.getParent(),
      })
    }
    processEmbedding(t, e) {
      const n = e.cell || this.cell,
        r = e.graph || this.graph,
        i = r.options.embedding,
        s = i.findParent
      let o =
        'function' == typeof s
          ? au(s, r, { view: this, node: this.cell }).filter(
              (t) =>
                vv.isCell(t) &&
                this.cell.id !== t.id &&
                !t.isDescendantOf(this.cell),
            )
          : r.model.getNodesUnderNode(n, { by: s })
      if (i.frontOnly && o.length > 0) {
        const t = Xo(o, 'zIndex'),
          e = Ka(Object.keys(t))
        e && (o = t[e])
      }
      o = o.filter((t) => t.visible)
      let a = null
      const l = e.candidateEmbedView,
        c = i.validate
      for (let t = o.length - 1; t >= 0; t -= 1) {
        const e = o[t]
        if (l && l.cell.id === e.id) {
          a = l
          break
        }
        {
          const t = e.findView(r)
          if (
            au(c, r, {
              child: this.cell,
              parent: t.cell,
              childView: this,
              parentView: t,
            })
          ) {
            a = t
            break
          }
        }
      }
      this.clearEmbedding(e),
        a && a.highlight(null, { type: 'embedding' }),
        (e.candidateEmbedView = a)
      const h = r.snapToGrid(t.clientX, t.clientY)
      this.notify('node:embedding', {
        e: t,
        cell: n,
        node: n,
        view: r.findViewByCell(n),
        x: h.x,
        y: h.y,
        currentParent: n.getParent(),
        candidateParent: a ? a.cell : null,
      })
    }
    clearEmbedding(t) {
      const e = t.candidateEmbedView
      e &&
        (e.unhighlight(null, { type: 'embedding' }),
        (t.candidateEmbedView = null))
    }
    finalizeEmbedding(t, e) {
      this.graph.startBatch('embedding')
      const n = e.cell || this.cell,
        r = e.graph || this.graph,
        i = r.findViewByCell(n),
        s = n.getParent(),
        o = e.candidateEmbedView
      if (
        (o
          ? (o.unhighlight(null, { type: 'embedding' }),
            (e.candidateEmbedView = null),
            (null != s && s.id === o.cell.id) ||
              o.cell.insertChild(n, void 0, { ui: !0 }))
          : s && s.unembed(n, { ui: !0 }),
        r.model.getConnectedEdges(n, { deep: !0 }).forEach((t) => {
          t.updateParent({ ui: !0 })
        }),
        i && o)
      ) {
        const e = r.snapToGrid(t.clientX, t.clientY)
        i.notify('node:embedded', {
          e: t,
          cell: n,
          x: e.x,
          y: e.y,
          node: n,
          view: r.findViewByCell(n),
          previousParent: s,
          currentParent: n.getParent(),
        })
      }
      this.graph.stopBatch('embedding')
    }
    getDelegatedView() {
      let t = this.cell,
        e = this
      for (; e && !t.isEdge(); ) {
        if (!t.hasParent() || e.can('stopDelegateOnDragging')) return e
        ;(t = t.getParent()), (e = this.graph.findViewByCell(t))
      }
      return null
    }
    validateMagnet(t, e, n) {
      if ('passive' !== e.getAttribute('magnet')) {
        const r = this.graph.options.connecting.validateMagnet
        return (
          !r || au(r, this.graph, { e: n, magnet: e, view: t, cell: t.cell })
        )
      }
      return !1
    }
    startMagnetDragging(t, e, n) {
      if (!this.can('magnetConnectable')) return
      t.stopPropagation()
      const r = t.currentTarget,
        i = this.graph
      this.setEventData(t, { targetMagnet: r }),
        this.validateMagnet(this, r, t)
          ? (i.options.magnetThreshold <= 0 &&
              this.startConnectting(t, r, e, n),
            this.setEventData(t, { action: 'magnet' }),
            this.stopPropagation(t))
          : ((Yu(r, 'x6-port-body') || r.closest('.x6-port-body')) &&
              this.stopPropagation(t),
            this.onMouseDown(t, e, n)),
        i.view.delegateDragEvents(t, this)
    }
    startConnectting(t, e, n, r) {
      this.graph.model.startBatch('add-edge')
      const i = this.createEdgeFromMagnet(e, n, r)
      i.notifyMouseDown(t, n, r),
        i.setEventData(
          t,
          i.prepareArrowheadDragging('target', {
            x: n,
            y: r,
            isNewEdge: !0,
            fallbackAction: 'remove',
          }),
        ),
        this.setEventData(t, { edgeView: i })
    }
    getDefaultEdge(t, e) {
      let n
      const r = this.graph.options.connecting.createEdge
      return (
        r &&
          (n = au(r, this.graph, {
            sourceMagnet: e,
            sourceView: t,
            sourceCell: t.cell,
          })),
        n
      )
    }
    createEdgeFromMagnet(t, e, n) {
      const r = this.graph,
        i = r.model,
        s = this.getDefaultEdge(this, t)
      return (
        s.setSource(
          Object.assign(
            Object.assign({}, s.getSource()),
            this.getEdgeTerminal(t, e, n, s, 'source'),
          ),
        ),
        s.setTarget(
          Object.assign(Object.assign({}, s.getTarget()), { x: e, y: n }),
        ),
        s.addTo(i, { async: !1, ui: !0 }),
        s.findView(r)
      )
    }
    dragMagnet(t, e, n) {
      const r = this.getEventData(t),
        i = r.edgeView
      if (i) i.onMouseMove(t, e, n), this.autoScrollGraph(t.clientX, t.clientY)
      else {
        const i = this.graph,
          s = i.options.magnetThreshold,
          o = this.getEventTarget(t),
          a = r.targetMagnet
        if ('onleave' === s) {
          if (a === o || a.contains(o)) return
        } else if (i.view.getMouseMovedCount(t) <= s) return
        this.startConnectting(t, a, e, n)
      }
    }
    stopMagnetDragging(t, e, n) {
      const r = this.eventData(t).edgeView
      r && (r.onMouseUp(t, e, n), this.graph.model.stopBatch('add-edge'))
    }
    notifyUnhandledMouseDown(t, e, n) {
      this.notify('node:unhandled:mousedown', {
        e: t,
        x: e,
        y: n,
        view: this,
        cell: this.cell,
        node: this.cell,
      })
    }
    notifyNodeMove(t, e, n, r, i) {
      let s = [i]
      const o = this.graph.getPlugin('selection')
      if (o && o.isSelectionMovable()) {
        const t = o.getSelectedCells()
        t.includes(i) && (s = t.filter((t) => t.isNode()))
      }
      s.forEach((i) => {
        this.notify(t, {
          e: e,
          x: n,
          y: r,
          cell: i,
          node: i,
          view: i.findView(this.graph),
        })
      })
    }
    getRestrictArea(t) {
      const e = this.graph.options.translating.restrict,
        n = 'function' == typeof e ? au(e, this.graph, t) : e
      return 'number' == typeof n
        ? this.graph.transform.getGraphArea().inflate(n)
        : !0 === n
        ? this.graph.transform.getGraphArea()
        : n || null
    }
    startNodeDragging(t, e, n) {
      const r = this.getDelegatedView()
      if (null == r || !r.can('nodeMovable'))
        return this.notifyUnhandledMouseDown(t, e, n)
      this.setEventData(t, { targetView: r, action: 'move' })
      const i = Vd.create(r.cell.getPosition())
      r.setEventData(t, {
        moving: !1,
        offset: i.diff(e, n),
        restrict: this.getRestrictArea(r),
      })
    }
    dragNode(t, e, n) {
      const r = this.cell,
        i = this.graph,
        s = i.getGridSize(),
        o = this.getEventData(t),
        a = o.offset,
        l = o.restrict
      o.moving ||
        ((o.moving = !0),
        this.addClass('node-moving'),
        this.notifyNodeMove('node:move', t, e, n, this.cell)),
        this.autoScrollGraph(t.clientX, t.clientY)
      const c = Rd.snapToGrid(e + a.x, s),
        h = Rd.snapToGrid(n + a.y, s)
      r.setPosition(c, h, { restrict: l, deep: !0, ui: !0 }),
        i.options.embedding.enabled &&
          (o.embedding || (this.prepareEmbedding(t), (o.embedding = !0)),
          this.processEmbedding(t, o))
    }
    stopNodeDragging(t, e, n) {
      const r = this.getEventData(t)
      r.embedding && this.finalizeEmbedding(t, r),
        r.moving &&
          (this.removeClass('node-moving'),
          this.notifyNodeMove('node:moved', t, e, n, this.cell)),
        (r.moving = !1),
        (r.embedding = !1)
    }
    autoScrollGraph(t, e) {
      const n = this.graph.getPlugin('scroller')
      n && n.autoScroll(t, e)
    }
  }
  !(function (t) {
    ;(t.toStringTag = `X6.${t.name}`),
      (t.isNodeView = function (e) {
        if (null == e) return !1
        if (e instanceof t) return !0
        const n = e[Symbol.toStringTag],
          r = e
        return (
          (null == n || n === t.toStringTag) &&
          'function' == typeof r.isNodeView &&
          'function' == typeof r.isEdgeView &&
          'function' == typeof r.confirmUpdate &&
          'function' == typeof r.update &&
          'function' == typeof r.findPortElem &&
          'function' == typeof r.resize &&
          'function' == typeof r.rotate &&
          'function' == typeof r.translate
        )
      })
  })(Bv || (Bv = {})),
    Bv.config({
      isSvgElement: !0,
      priority: 0,
      bootstrap: ['render'],
      actions: {
        view: ['render'],
        markup: ['render'],
        attrs: ['update'],
        size: ['resize', 'ports', 'tools'],
        angle: ['rotate', 'tools'],
        position: ['translate', 'tools'],
        ports: ['ports'],
        tools: ['tools'],
      },
    }),
    Bv.registry.register('node', Bv, !0)
  class Rv extends Tm {
    constructor() {
      super(...arguments), (this.POINT_ROUNDING = 2)
    }
    get [Symbol.toStringTag]() {
      return Rv.toStringTag
    }
    getContainerClassName() {
      return [super.getContainerClassName(), this.prefixClassName('edge')].join(
        ' ',
      )
    }
    get sourceBBox() {
      const t = this.sourceView
      if (!t) {
        const t = this.cell.getSource()
        return new zd(t.x, t.y)
      }
      const e = this.sourceMagnet
      return t.isEdgeElement(e)
        ? new zd(this.sourceAnchor.x, this.sourceAnchor.y)
        : t.getBBoxOfElement(e || t.container)
    }
    get targetBBox() {
      const t = this.targetView
      if (!t) {
        const t = this.cell.getTarget()
        return new zd(t.x, t.y)
      }
      const e = this.targetMagnet
      return t.isEdgeElement(e)
        ? new zd(this.targetAnchor.x, this.targetAnchor.y)
        : t.getBBoxOfElement(e || t.container)
    }
    isEdgeView() {
      return !0
    }
    confirmUpdate(t, e = {}) {
      let n = t
      if (this.hasAction(n, 'source')) {
        if (!this.updateTerminalProperties('source')) return n
        n = this.removeAction(n, 'source')
      }
      if (this.hasAction(n, 'target')) {
        if (!this.updateTerminalProperties('target')) return n
        n = this.removeAction(n, 'target')
      }
      const r = this.graph,
        i = this.sourceView,
        s = this.targetView
      return r &&
        ((i && !r.renderer.isViewMounted(i)) ||
          (s && !r.renderer.isViewMounted(s)))
        ? n
        : this.hasAction(n, 'render')
        ? (this.render(),
          (n = this.removeAction(n, ['render', 'update', 'labels', 'tools'])),
          n)
        : ((n = this.handleAction(n, 'update', () => this.update(e))),
          (n = this.handleAction(n, 'labels', () => this.onLabelsChange(e))),
          (n = this.handleAction(n, 'tools', () => this.renderTools())),
          n)
    }
    render() {
      return (
        this.empty(),
        this.renderMarkup(),
        (this.labelContainer = null),
        this.renderLabels(),
        this.update(),
        this.renderTools(),
        this
      )
    }
    renderMarkup() {
      const t = this.cell.markup
      if (t) {
        if ('string' == typeof t)
          throw new TypeError('Not support string markup.')
        return this.renderJSONMarkup(t)
      }
      throw new TypeError('Invalid edge markup.')
    }
    renderJSONMarkup(t) {
      const e = this.parseJSONMarkup(t, this.container)
      ;(this.selectors = e.selectors), this.container.append(e.fragment)
    }
    customizeLabels() {
      if (this.labelContainer) {
        const t = this.cell,
          e = t.labels
        for (let n = 0, r = e.length; n < r; n += 1) {
          const r = e[n],
            i = this.labelCache[n],
            s = this.labelSelectors[n],
            o = this.graph.options.onEdgeLabelRendered
          o && o({ edge: t, label: r, container: i, selectors: s })
        }
      }
    }
    renderLabels() {
      const t = this.cell,
        e = t.getLabels(),
        n = e.length
      let r = this.labelContainer
      if (((this.labelCache = {}), (this.labelSelectors = {}), n <= 0))
        return r && r.parentNode && r.parentNode.removeChild(r), this
      r
        ? this.empty(r)
        : ((r = og('g')),
          this.addClass(this.prefixClassName('edge-labels'), r),
          (this.labelContainer = r))
      for (let n = 0, i = e.length; n < i; n += 1) {
        const i = e[n],
          s = this.normalizeLabelMarkup(this.parseLabelMarkup(i.markup))
        let o, a
        if (s) (o = s.node), (a = s.selectors)
        else {
          const e = t.getDefaultLabel(),
            n = this.normalizeLabelMarkup(this.parseLabelMarkup(e.markup))
          ;(o = n.node), (a = n.selectors)
        }
        o.setAttribute('data-index', `${n}`), r.appendChild(o)
        const l = this.rootSelector
        if (a[l]) throw new Error('Ambiguous label root selector.')
        ;(a[l] = o), (this.labelCache[n] = o), (this.labelSelectors[n] = a)
      }
      return (
        null == r.parentNode && this.container.appendChild(r),
        this.updateLabels(),
        this.customizeLabels(),
        this
      )
    }
    onLabelsChange(t = {}) {
      this.shouldRerenderLabels(t) ? this.renderLabels() : this.updateLabels(),
        this.updateLabelPositions()
    }
    shouldRerenderLabels(t = {}) {
      const e = this.cell.previous('labels')
      if (null == e) return !0
      if ('propertyPathArray' in t && 'propertyValue' in t) {
        const n = t.propertyPathArray || [],
          r = n.length
        if (r > 1) {
          if (e[n[1]]) {
            if (2 === r)
              return (
                'object' == typeof t.propertyValue &&
                na(t.propertyValue, 'markup')
              )
            if ('markup' !== n[2]) return !1
          }
        }
      }
      return !0
    }
    parseLabelMarkup(t) {
      return t
        ? 'string' == typeof t
          ? this.parseLabelStringMarkup(t)
          : this.parseJSONMarkup(t)
        : null
    }
    parseLabelStringMarkup(t) {
      const e = zg.createVectors(t),
        n = document.createDocumentFragment()
      for (let t = 0, r = e.length; t < r; t += 1) {
        const r = e[t].node
        n.appendChild(r)
      }
      return { fragment: n, selectors: {} }
    }
    normalizeLabelMarkup(t) {
      if (null == t) return
      const e = t.fragment
      if (!(e instanceof DocumentFragment && e.hasChildNodes()))
        throw new Error('Invalid label markup.')
      let n
      const r = e.childNodes
      return (
        (n =
          r.length > 1 || 'G' !== r[0].nodeName.toUpperCase()
            ? zg.create('g').append(e)
            : zg.create(r[0])),
        n.addClass(this.prefixClassName('edge-label')),
        { node: n.node, selectors: t.selectors }
      )
    }
    updateLabels() {
      if (this.labelContainer) {
        const t = this.cell,
          e = t.labels,
          n = this.can('edgeLabelMovable'),
          r = t.getDefaultLabel()
        for (let t = 0, i = e.length; t < i; t += 1) {
          const i = this.labelCache[t],
            s = this.labelSelectors[t]
          i.setAttribute('cursor', n ? 'move' : 'default')
          const o = e[t],
            a = el({}, r.attrs, o.attrs)
          this.updateAttrs(i, a, {
            selectors: s,
            rootBBox: o.size ? zd.fromSize(o.size) : void 0,
          })
        }
      }
    }
    renderTools() {
      const t = this.cell.getTools()
      return this.addTools(t), this
    }
    update(t = {}) {
      this.cleanCache(), this.updateConnection(t)
      const e = this.cell.getAttrs()
      return (
        null != e &&
          this.updateAttrs(this.container, e, { selectors: this.selectors }),
        this.updateLabelPositions(),
        this.updateTools(t),
        this
      )
    }
    removeRedundantLinearVertices(t = {}) {
      const e = this.cell,
        n = e.getVertices(),
        r = [this.sourceAnchor, ...n, this.targetAnchor],
        i = r.length,
        s = new Xd(r)
      s.simplify({ threshold: 0.01 })
      const o = s.points.map((t) => t.toJSON()),
        a = o.length
      return i === a ? 0 : (e.setVertices(o.slice(1, a - 1), t), i - a)
    }
    getTerminalView(t) {
      switch (t) {
        case 'source':
          return this.sourceView || null
        case 'target':
          return this.targetView || null
        default:
          throw new Error(`Unknown terminal type '${t}'`)
      }
    }
    getTerminalAnchor(t) {
      switch (t) {
        case 'source':
          return Vd.create(this.sourceAnchor)
        case 'target':
          return Vd.create(this.targetAnchor)
        default:
          throw new Error(`Unknown terminal type '${t}'`)
      }
    }
    getTerminalConnectionPoint(t) {
      switch (t) {
        case 'source':
          return Vd.create(this.sourcePoint)
        case 'target':
          return Vd.create(this.targetPoint)
        default:
          throw new Error(`Unknown terminal type '${t}'`)
      }
    }
    getTerminalMagnet(t, e = {}) {
      switch (t) {
        case 'source': {
          if (e.raw) return this.sourceMagnet
          const t = this.sourceView
          return t ? this.sourceMagnet || t.container : null
        }
        case 'target': {
          if (e.raw) return this.targetMagnet
          const t = this.targetView
          return t ? this.targetMagnet || t.container : null
        }
        default:
          throw new Error(`Unknown terminal type '${t}'`)
      }
    }
    updateConnection(t = {}) {
      const e = this.cell
      if (t.translateBy && e.isFragmentDescendantOf(t.translateBy)) {
        const e = t.tx || 0,
          n = t.ty || 0
        ;(this.routePoints = new Xd(this.routePoints).translate(e, n).points),
          this.translateConnectionPoints(e, n),
          this.path.translate(e, n)
      } else {
        const t = e.getVertices(),
          n = this.findAnchors(t)
        ;(this.sourceAnchor = n.source),
          (this.targetAnchor = n.target),
          (this.routePoints = this.findRoutePoints(t))
        const r = this.findConnectionPoints(
          this.routePoints,
          this.sourceAnchor,
          this.targetAnchor,
        )
        ;(this.sourcePoint = r.source), (this.targetPoint = r.target)
        const i = this.findMarkerPoints(
          this.routePoints,
          this.sourcePoint,
          this.targetPoint,
        )
        this.path = this.findPath(
          this.routePoints,
          i.source || this.sourcePoint,
          i.target || this.targetPoint,
        )
      }
      this.cleanCache()
    }
    findAnchors(t) {
      const e = this.cell,
        n = e.source,
        r = e.target,
        i = t[0],
        s = t[t.length - 1]
      return r.priority && !n.priority
        ? this.findAnchorsOrdered('target', s, 'source', i)
        : this.findAnchorsOrdered('source', i, 'target', s)
    }
    findAnchorsOrdered(t, e, n, r) {
      let i, s
      const o = this.cell,
        a = o[t],
        l = o[n],
        c = this.getTerminalView(t),
        h = this.getTerminalView(n),
        u = this.getTerminalMagnet(t),
        g = this.getTerminalMagnet(n)
      if (c) {
        let n
        ;(n = e ? Vd.create(e) : h ? g : Vd.create(l)),
          (i = this.getAnchor(a.anchor, c, u, n, t))
      } else i = Vd.create(a)
      if (h) {
        const t = Vd.create(r || i)
        s = this.getAnchor(l.anchor, h, g, t, n)
      } else s = Vd.isPointLike(l) ? Vd.create(l) : new Vd()
      return { [t]: i, [n]: s }
    }
    getAnchor(t, e, n, r, i) {
      const s = e.isEdgeElement(n),
        o = this.graph.options.connecting
      let a,
        l = 'string' == typeof t ? { name: t } : t
      if (!l) {
        const t = s
          ? ('source' === i ? o.sourceEdgeAnchor : o.targetEdgeAnchor) ||
            o.edgeAnchor
          : ('source' === i ? o.sourceAnchor : o.targetAnchor) || o.anchor
        l = 'string' == typeof t ? { name: t } : t
      }
      if (!l) throw new Error('Anchor should be specified.')
      const c = l.name
      if (s) {
        const t = xy.registry.get(c)
        if ('function' != typeof t) return xy.registry.onNotFound(c)
        a = au(t, this, e, n, r, l.args || {}, i)
      } else {
        const t = py.registry.get(c)
        if ('function' != typeof t) return py.registry.onNotFound(c)
        a = au(t, this, e, n, r, l.args || {}, i)
      }
      return a ? a.round(this.POINT_ROUNDING) : new Vd()
    }
    findRoutePoints(t = []) {
      const e = this.graph.options.connecting.router || ev.presets.normal,
        n = this.cell.getRouter() || e
      let r
      if ('function' == typeof n) r = au(n, this, t, {}, this)
      else {
        const e = 'string' == typeof n ? n : n.name,
          i = 'string' == typeof n ? {} : n.args || {},
          s = e ? ev.registry.get(e) : ev.presets.normal
        if ('function' != typeof s) return ev.registry.onNotFound(e)
        r = au(s, this, t, i, this)
      }
      return null == r ? t.map((t) => Vd.create(t)) : r.map((t) => Vd.create(t))
    }
    findConnectionPoints(t, e, n) {
      const r = this.cell,
        i = this.graph.options.connecting,
        s = r.getSource(),
        o = r.getTarget(),
        a = this.sourceView,
        l = this.targetView,
        c = t[0],
        h = t[t.length - 1]
      let u, g
      if (a && !a.isEdgeElement(this.sourceMagnet)) {
        const t = this.sourceMagnet || a.container,
          r = new $d(c || n, e),
          o = s.connectionPoint || i.sourceConnectionPoint || i.connectionPoint
        u = this.getConnectionPoint(o, a, t, r, 'source')
      } else u = e
      if (l && !l.isEdgeElement(this.targetMagnet)) {
        const t = this.targetMagnet || l.container,
          r = o.connectionPoint || i.targetConnectionPoint || i.connectionPoint,
          s = new $d(h || e, n)
        g = this.getConnectionPoint(r, l, t, s, 'target')
      } else g = n
      return { source: u, target: g }
    }
    getConnectionPoint(t, e, n, r, i) {
      const s = r.end
      if (null == t) return s
      const o = 'string' == typeof t ? t : t.name,
        a = 'string' == typeof t ? {} : t.args,
        l = Oy.registry.get(o)
      if ('function' != typeof l) return Oy.registry.onNotFound(o)
      const c = au(l, this, r, e, n, a || {}, i)
      return c ? c.round(this.POINT_ROUNDING) : s
    }
    findMarkerPoints(t, e, n) {
      const r = (t) => {
          const e = this.cell.getAttrs(),
            n = Object.keys(e)
          for (let r = 0, i = n.length; r < i; r += 1) {
            const i = e[n[r]]
            if (i[`${t}Marker`] || i[`${t}-marker`]) {
              const t = i.strokeWidth || i['stroke-width']
              if (t) return parseFloat(t)
              break
            }
          }
          return null
        },
        i = t[0],
        s = t[t.length - 1]
      let o, a
      const l = r('source')
      l && (o = e.clone().move(i || n, -l))
      const c = r('target')
      return (
        c && (a = n.clone().move(s || e, -c)),
        (this.sourceMarkerPoint = o || e.clone()),
        (this.targetMarkerPoint = a || n.clone()),
        { source: o, target: a }
      )
    }
    findPath(t, e, n) {
      const r =
        this.cell.getConnector() || this.graph.options.connecting.connector
      let i, s, o
      if (('string' == typeof r ? (i = r) : ((i = r.name), (s = r.args)), i)) {
        const t = hv.registry.get(i)
        if ('function' != typeof t) return hv.registry.onNotFound(i)
        o = t
      } else o = hv.presets.normal
      const a = au(
        o,
        this,
        e,
        n,
        t,
        Object.assign(Object.assign({}, s), { raw: !0 }),
        this,
      )
      return 'string' == typeof a ? cf.parse(a) : a
    }
    translateConnectionPoints(t, e) {
      this.sourcePoint.translate(t, e),
        this.targetPoint.translate(t, e),
        this.sourceAnchor.translate(t, e),
        this.targetAnchor.translate(t, e),
        this.sourceMarkerPoint.translate(t, e),
        this.targetMarkerPoint.translate(t, e)
    }
    updateLabelPositions() {
      if (null == this.labelContainer) return this
      if (!this.path) return this
      const t = this.cell,
        e = t.getLabels()
      if (0 === e.length) return this
      const n = t.getDefaultLabel(),
        r = this.normalizeLabelPosition(n.position)
      for (let t = 0, n = e.length; t < n; t += 1) {
        const n = e[t],
          i = this.normalizeLabelPosition(n.position),
          s = el({}, r, i),
          o = this.getLabelTransformationMatrix(s)
        this.labelCache[t].setAttribute('transform', ld(o))
      }
      return this
    }
    updateTerminalProperties(t) {
      const e = this.cell,
        n = this.graph,
        r = e[t],
        i = r && r.cell,
        s = `${t}View`
      if (!i) return (this[s] = null), this.updateTerminalMagnet(t), !0
      const o = n.getCellById(i)
      if (!o) throw new Error(`Edge's ${t} node with id "${i}" not exists`)
      const a = o.findView(n)
      return !!a && ((this[s] = a), this.updateTerminalMagnet(t), !0)
    }
    updateTerminalMagnet(t) {
      const e = `${t}Magnet`,
        n = this.getTerminalView(t)
      if (n) {
        let r = n.getMagnetFromEdgeTerminal(this.cell[t])
        r === n.container && (r = null), (this[e] = r)
      } else this[e] = null
    }
    getLabelPositionAngle(t) {
      const e = this.cell.getLabelAt(t)
      return (
        (e &&
          e.position &&
          'object' == typeof e.position &&
          e.position.angle) ||
        0
      )
    }
    getLabelPositionArgs(t) {
      const e = this.cell.getLabelAt(t)
      if (e && e.position && 'object' == typeof e.position)
        return e.position.options
    }
    getDefaultLabelPositionArgs() {
      const t = this.cell.getDefaultLabel()
      if (t && t.position && 'object' == typeof t.position)
        return t.position.options
    }
    mergeLabelPositionArgs(t, e) {
      return null === t
        ? null
        : void 0 === t
        ? null === e
          ? null
          : e
        : el({}, e, t)
    }
    getConnection() {
      return null != this.path ? this.path.clone() : null
    }
    getConnectionPathData() {
      if (null == this.path) return ''
      const t = this.cache.pathCache
      return na(t, 'data') || (t.data = this.path.serialize()), t.data || ''
    }
    getConnectionSubdivisions() {
      if (null == this.path) return null
      const t = this.cache.pathCache
      return (
        na(t, 'segmentSubdivisions') ||
          (t.segmentSubdivisions = this.path.getSegmentSubdivisions()),
        t.segmentSubdivisions
      )
    }
    getConnectionLength() {
      if (null == this.path) return 0
      const t = this.cache.pathCache
      return (
        na(t, 'length') ||
          (t.length = this.path.length({
            segmentSubdivisions: this.getConnectionSubdivisions(),
          })),
        t.length
      )
    }
    getPointAtLength(t) {
      return null == this.path
        ? null
        : this.path.pointAtLength(t, {
            segmentSubdivisions: this.getConnectionSubdivisions(),
          })
    }
    getPointAtRatio(t) {
      return null == this.path
        ? null
        : (Eu(t) && (t = parseFloat(t) / 100),
          this.path.pointAt(t, {
            segmentSubdivisions: this.getConnectionSubdivisions(),
          }))
    }
    getTangentAtLength(t) {
      return null == this.path
        ? null
        : this.path.tangentAtLength(t, {
            segmentSubdivisions: this.getConnectionSubdivisions(),
          })
    }
    getTangentAtRatio(t) {
      return null == this.path
        ? null
        : this.path.tangentAt(t, {
            segmentSubdivisions: this.getConnectionSubdivisions(),
          })
    }
    getClosestPoint(t) {
      return null == this.path
        ? null
        : this.path.closestPoint(t, {
            segmentSubdivisions: this.getConnectionSubdivisions(),
          })
    }
    getClosestPointLength(t) {
      return null == this.path
        ? null
        : this.path.closestPointLength(t, {
            segmentSubdivisions: this.getConnectionSubdivisions(),
          })
    }
    getClosestPointRatio(t) {
      return null == this.path
        ? null
        : this.path.closestPointNormalizedLength(t, {
            segmentSubdivisions: this.getConnectionSubdivisions(),
          })
    }
    getLabelPosition(t, e, n, r) {
      const i = { distance: 0 }
      let s,
        o = 0
      'number' == typeof n ? ((o = n), (s = r)) : (s = n),
        null != s && (i.options = s)
      const a = s && s.absoluteOffset,
        l = !(s && s.absoluteDistance),
        c = s && s.absoluteDistance && s.reverseDistance,
        h = this.path,
        u = { segmentSubdivisions: this.getConnectionSubdivisions() },
        g = new Vd(t, e),
        d = h.closestPointT(g, u),
        f = this.getConnectionLength() || 0
      let p,
        m,
        y = h.lengthAtT(d, u)
      if (
        (l && (y = f > 0 ? y / f : 0),
        c && (y = -1 * (f - y) || 1),
        (i.distance = y),
        a || (p = h.tangentAtT(d)),
        p)
      )
        m = p.pointOffset(g)
      else {
        const t = h.pointAtT(d),
          e = g.diff(t)
        m = { x: e.x, y: e.y }
      }
      return (i.offset = m), (i.angle = o), i
    }
    normalizeLabelPosition(t) {
      return 'number' == typeof t ? { distance: t } : t
    }
    getLabelTransformationMatrix(t) {
      const e = this.normalizeLabelPosition(t),
        n = e.options || {},
        r = e.angle || 0,
        i = e.distance,
        s = i > 0 && i <= 1
      let o = 0
      const a = { x: 0, y: 0 },
        l = e.offset
      l &&
        ('number' == typeof l
          ? (o = l)
          : (null != l.x && (a.x = l.x), null != l.y && (a.y = l.y)))
      const c = 0 !== a.x || 0 !== a.y || 0 === o,
        h = n.keepGradient,
        u = n.ensureLegibility,
        g = this.path,
        d = { segmentSubdivisions: this.getConnectionSubdivisions() },
        f = s ? i * this.getConnectionLength() : i,
        p = g.tangentAtLength(f, d)
      let m,
        y = r
      if (p) {
        if (c) (m = p.start), m.translate(a)
        else {
          const t = p.clone()
          t.rotate(-90, p.start), t.setLength(o), (m = t.end)
        }
        h &&
          ((y = p.angle() + r), u && (y = Bd.normalize(((y + 90) % 180) - 90)))
      } else (m = g.start), c && m.translate(a)
      return sd().translate(m.x, m.y).rotate(y)
    }
    getVertexIndex(t, e) {
      const n = this.cell.getVertices(),
        r = this.getClosestPointLength(new Vd(t, e))
      let i = 0
      if (null != r)
        for (const t = n.length; i < t; i += 1) {
          const t = n[i],
            e = this.getClosestPointLength(t)
          if (null != e && r < e) break
        }
      return i
    }
    getEventArgs(t, e, n) {
      const r = this,
        i = r.cell
      return null == e || null == n
        ? { e: t, view: r, edge: i, cell: i }
        : { e: t, x: e, y: n, view: r, edge: i, cell: i }
    }
    notifyUnhandledMouseDown(t, e, n) {
      this.notify('edge:unhandled:mousedown', {
        e: t,
        x: e,
        y: n,
        view: this,
        cell: this.cell,
        edge: this.cell,
      })
    }
    notifyMouseDown(t, e, n) {
      super.onMouseDown(t, e, n),
        this.notify('edge:mousedown', this.getEventArgs(t, e, n))
    }
    notifyMouseMove(t, e, n) {
      super.onMouseMove(t, e, n),
        this.notify('edge:mousemove', this.getEventArgs(t, e, n))
    }
    notifyMouseUp(t, e, n) {
      super.onMouseUp(t, e, n),
        this.notify('edge:mouseup', this.getEventArgs(t, e, n))
    }
    onClick(t, e, n) {
      super.onClick(t, e, n),
        this.notify('edge:click', this.getEventArgs(t, e, n))
    }
    onDblClick(t, e, n) {
      super.onDblClick(t, e, n),
        this.notify('edge:dblclick', this.getEventArgs(t, e, n))
    }
    onContextMenu(t, e, n) {
      super.onContextMenu(t, e, n),
        this.notify('edge:contextmenu', this.getEventArgs(t, e, n))
    }
    onMouseDown(t, e, n) {
      this.startEdgeDragging(t, e, n)
    }
    onMouseMove(t, e, n) {
      const r = this.getEventData(t)
      switch (r.action) {
        case 'drag-label':
          this.dragLabel(t, e, n)
          break
        case 'drag-arrowhead':
          this.dragArrowhead(t, e, n)
          break
        case 'drag-edge':
          this.dragEdge(t, e, n)
      }
      return this.notifyMouseMove(t, e, n), r
    }
    onMouseUp(t, e, n) {
      const r = this.getEventData(t)
      switch (r.action) {
        case 'drag-label':
          this.stopLabelDragging(t, e, n)
          break
        case 'drag-arrowhead':
          this.stopArrowheadDragging(t, e, n)
          break
        case 'drag-edge':
          this.stopEdgeDragging(t, e, n)
      }
      return this.notifyMouseUp(t, e, n), this.checkMouseleave(t), r
    }
    onMouseOver(t) {
      super.onMouseOver(t), this.notify('edge:mouseover', this.getEventArgs(t))
    }
    onMouseOut(t) {
      super.onMouseOut(t), this.notify('edge:mouseout', this.getEventArgs(t))
    }
    onMouseEnter(t) {
      super.onMouseEnter(t),
        this.notify('edge:mouseenter', this.getEventArgs(t))
    }
    onMouseLeave(t) {
      super.onMouseLeave(t),
        this.notify('edge:mouseleave', this.getEventArgs(t))
    }
    onMouseWheel(t, e, n, r) {
      super.onMouseWheel(t, e, n, r),
        this.notify(
          'edge:mousewheel',
          Object.assign({ delta: r }, this.getEventArgs(t, e, n)),
        )
    }
    onCustomEvent(t, e, n, r) {
      if (cg(t.target, 'edge-tool', this.container)) {
        if ((t.stopPropagation(), this.can('useEdgeTools'))) {
          if ('edge:remove' === e) return void this.cell.remove({ ui: !0 })
          this.notify(
            'edge:customevent',
            Object.assign({ name: e }, this.getEventArgs(t, n, r)),
          )
        }
        this.notifyMouseDown(t, n, r)
      } else this.notify('edge:customevent', Object.assign({ name: e }, this.getEventArgs(t, n, r))), super.onCustomEvent(t, e, n, r)
    }
    onLabelMouseDown(t, e, n) {
      this.notifyMouseDown(t, e, n), this.startLabelDragging(t, e, n)
      this.getEventData(t).stopPropagation && t.stopPropagation()
    }
    startEdgeDragging(t, e, n) {
      this.can('edgeMovable')
        ? this.setEventData(t, { x: e, y: n, moving: !1, action: 'drag-edge' })
        : this.notifyUnhandledMouseDown(t, e, n)
    }
    dragEdge(t, e, n) {
      const r = this.getEventData(t)
      r.moving ||
        ((r.moving = !0),
        this.addClass('edge-moving'),
        this.notify('edge:move', {
          e: t,
          x: e,
          y: n,
          view: this,
          cell: this.cell,
          edge: this.cell,
        })),
        this.cell.translate(e - r.x, n - r.y, { ui: !0 }),
        this.setEventData(t, { x: e, y: n }),
        this.notify('edge:moving', {
          e: t,
          x: e,
          y: n,
          view: this,
          cell: this.cell,
          edge: this.cell,
        })
    }
    stopEdgeDragging(t, e, n) {
      const r = this.getEventData(t)
      r.moving &&
        (this.removeClass('edge-moving'),
        this.notify('edge:moved', {
          e: t,
          x: e,
          y: n,
          view: this,
          cell: this.cell,
          edge: this.cell,
        })),
        (r.moving = !1)
    }
    prepareArrowheadDragging(t, e) {
      const n = this.getTerminalMagnet(t),
        r = {
          action: 'drag-arrowhead',
          x: e.x,
          y: e.y,
          isNewEdge: !0 === e.isNewEdge,
          terminalType: t,
          initialMagnet: n,
          initialTerminal: Yi(this.cell[t]),
          fallbackAction: e.fallbackAction || 'revert',
          getValidateConnectionArgs: this.createValidateConnectionArgs(t),
          options: e.options,
        }
      return this.beforeArrowheadDragging(r), r
    }
    createValidateConnectionArgs(t) {
      const e = []
      let n
      ;(e[4] = t), (e[5] = this)
      let r = 0,
        i = 0
      'source' === t ? ((r = 2), (n = 'target')) : ((i = 2), (n = 'source'))
      const s = this.cell[n],
        o = s.cell
      if (o) {
        let t
        const n = (e[r] = this.graph.findViewByCell(o))
        n &&
          ((t = n.getMagnetFromEdgeTerminal(s)),
          t === n.container && (t = void 0)),
          (e[r + 1] = t)
      }
      return (t, n) => (
        (e[i] = t), (e[i + 1] = t.container === n ? void 0 : n), e
      )
    }
    beforeArrowheadDragging(t) {
      ;(t.zIndex = this.cell.zIndex), this.cell.toFront()
      const e = this.container.style
      ;(t.pointerEvents = e.pointerEvents),
        (e.pointerEvents = 'none'),
        this.graph.options.connecting.highlight &&
          this.highlightAvailableMagnets(t)
    }
    afterArrowheadDragging(t) {
      null != t.zIndex &&
        (this.cell.setZIndex(t.zIndex, { ui: !0 }), (t.zIndex = null))
      ;(this.container.style.pointerEvents = t.pointerEvents || ''),
        this.graph.options.connecting.highlight &&
          this.unhighlightAvailableMagnets(t)
    }
    validateConnection(t, e, n, r, i, s, o) {
      const a = this.graph.options.connecting,
        l = a.allowLoop,
        c = a.allowNode,
        h = a.allowEdge,
        u = a.allowPort,
        g = a.allowMulti,
        d = a.validateConnection,
        f = s ? s.cell : null,
        p = 'target' === i ? n : t,
        m = 'target' === i ? r : e
      let y = !0
      const v = (a) => {
        const l =
            'source' === i
              ? o
                ? o.port
                : null
              : f
              ? f.getSourcePortId()
              : null,
          c =
            'target' === i
              ? o
                ? o.port
                : null
              : f
              ? f.getTargetPortId()
              : null
        return au(a, this.graph, {
          edge: f,
          edgeView: s,
          sourceView: t,
          targetView: n,
          sourcePort: l,
          targetPort: c,
          sourceMagnet: e,
          targetMagnet: r,
          sourceCell: t ? t.cell : null,
          targetCell: n ? n.cell : null,
          type: i,
        })
      }
      if (
        (null != l &&
          ('boolean' == typeof l ? l || t !== n || (y = !1) : (y = v(l))),
        y &&
          null != u &&
          ('boolean' == typeof u ? !u && m && (y = !1) : (y = v(u))),
        y &&
          null != h &&
          ('boolean' == typeof h
            ? !h && Rv.isEdgeView(p) && (y = !1)
            : (y = v(h))),
        y &&
          null != c &&
          null == m &&
          ('boolean' == typeof c
            ? !c && Bv.isNodeView(p) && (y = !1)
            : (y = v(c))),
        y && null != g && s)
      ) {
        const t = s.cell,
          e = 'source' === i ? o : t.getSource(),
          n = 'target' === i ? o : t.getTarget(),
          r = o ? this.graph.getCellById(o.cell) : null
        if (e && n && e.cell && n.cell && r)
          if ('function' == typeof g) y = v(g)
          else {
            const t = this.graph.model.getConnectedEdges(r, {
              outgoing: 'source' === i,
              incoming: 'target' === i,
            })
            if (t.length)
              if ('withPort' === g) {
                t.some((t) => {
                  const r = t.getSource(),
                    i = t.getTarget()
                  return (
                    r &&
                    i &&
                    r.cell === e.cell &&
                    i.cell === n.cell &&
                    null != r.port &&
                    r.port === e.port &&
                    null != i.port &&
                    i.port === n.port
                  )
                }) && (y = !1)
              } else if (!g) {
                t.some((t) => {
                  const r = t.getSource(),
                    i = t.getTarget()
                  return r && i && r.cell === e.cell && i.cell === n.cell
                }) && (y = !1)
              }
          }
      }
      return y && null != d && (y = v(d)), y
    }
    allowConnectToBlank(t) {
      const e = this.graph,
        n = e.options.connecting.allowBlank
      if ('function' != typeof n) return !!n
      const r = e.findViewByCell(t),
        i = t.getSourceCell(),
        s = t.getTargetCell(),
        o = e.findViewByCell(i),
        a = e.findViewByCell(s)
      return au(n, e, {
        edge: t,
        edgeView: r,
        sourceCell: i,
        targetCell: s,
        sourceView: o,
        targetView: a,
        sourcePort: t.getSourcePortId(),
        targetPort: t.getTargetPortId(),
        sourceMagnet: r.sourceMagnet,
        targetMagnet: r.targetMagnet,
      })
    }
    validateEdge(t, e, n) {
      const r = this.graph
      if (!this.allowConnectToBlank(t)) {
        const e = t.getSourceCellId(),
          n = t.getTargetCellId()
        if (!e || !n) return !1
      }
      const i = r.options.connecting.validateEdge
      return !i || au(i, r, { edge: t, type: e, previous: n })
    }
    arrowheadDragging(t, e, n, r) {
      ;(r.x = e),
        (r.y = n),
        r.currentTarget !== t &&
          (r.currentMagnet &&
            r.currentView &&
            r.currentView.unhighlight(r.currentMagnet, {
              type: 'magnetAdsorbed',
            }),
          (r.currentView = this.graph.findViewByElem(t)),
          r.currentView
            ? ((r.currentMagnet = r.currentView.findMagnet(t)),
              r.currentMagnet &&
              this.validateConnection(
                ...r.getValidateConnectionArgs(r.currentView, r.currentMagnet),
                r.currentView.getEdgeTerminal(
                  r.currentMagnet,
                  e,
                  n,
                  this.cell,
                  r.terminalType,
                ),
              )
                ? r.currentView.highlight(r.currentMagnet, {
                    type: 'magnetAdsorbed',
                  })
                : (r.currentMagnet = null))
            : (r.currentMagnet = null)),
        (r.currentTarget = t),
        this.cell.prop(
          r.terminalType,
          { x: e, y: n },
          Object.assign(Object.assign({}, r.options), { ui: !0 }),
        )
    }
    arrowheadDragged(t, e, n) {
      const r = t.currentView,
        i = t.currentMagnet
      if (!i || !r) return
      r.unhighlight(i, { type: 'magnetAdsorbed' })
      const s = t.terminalType,
        o = r.getEdgeTerminal(i, e, n, this.cell, s)
      this.cell.setTerminal(s, o, { ui: !0 })
    }
    snapArrowhead(t, e, n) {
      const r = this.graph,
        { snap: i, allowEdge: s } = r.options.connecting,
        o = ('object' == typeof i && i.radius) || 50,
        a = { x: t - o, y: e - o, width: 2 * o, height: 2 * o },
        l = r.renderer.findViewsInArea(a)
      if (s) {
        const t = r.renderer.findEdgeViewsInArea(a).filter((t) => t != this)
        l.push(...t)
      }
      const c = n.closestView || null,
        h = n.closestMagnet || null
      let u
      ;(n.closestView = null), (n.closestMagnet = null)
      let g = Number.MAX_SAFE_INTEGER
      const d = new Vd(t, e)
      let f
      l.forEach((r) => {
        'false' !== r.container.getAttribute('magnet') &&
          ((u = r.cell.getBBox().getCenter().distance(d)),
          u < o &&
            u < g &&
            (h === r.container ||
              this.validateConnection(
                ...n.getValidateConnectionArgs(r, null),
                r.getEdgeTerminal(r.container, t, e, this.cell, n.terminalType),
              )) &&
            ((g = u), (n.closestView = r), (n.closestMagnet = r.container))),
          r.container.querySelectorAll('[magnet]').forEach((i) => {
            if ('false' !== i.getAttribute('magnet')) {
              const s = r.getBBoxOfElement(i)
              ;(u = d.distance(s.getCenter())),
                u < o &&
                  u < g &&
                  (h === i ||
                    this.validateConnection(
                      ...n.getValidateConnectionArgs(r, i),
                      r.getEdgeTerminal(i, t, e, this.cell, n.terminalType),
                    )) &&
                  ((g = u), (n.closestView = r), (n.closestMagnet = i))
            }
          })
      })
      const p = n.terminalType,
        m = n.closestView,
        y = n.closestMagnet,
        v = h !== y
      if ((c && v && c.unhighlight(h, { type: 'magnetAdsorbed' }), m)) {
        if (!v) return
        m.highlight(y, { type: 'magnetAdsorbed' }),
          (f = m.getEdgeTerminal(y, t, e, this.cell, p))
      } else f = { x: t, y: e }
      this.cell.setTerminal(
        p,
        f,
        {},
        Object.assign(Object.assign({}, n.options), { ui: !0 }),
      )
    }
    snapArrowheadEnd(t) {
      const e = t.closestView,
        n = t.closestMagnet
      e &&
        n &&
        (e.unhighlight(n, { type: 'magnetAdsorbed' }),
        (t.currentMagnet = e.findMagnet(n))),
        (t.closestView = null),
        (t.closestMagnet = null)
    }
    finishEmbedding(t) {
      this.graph.options.embedding.enabled &&
        this.cell.updateParent() &&
        (t.zIndex = null)
    }
    fallbackConnection(t) {
      if ('remove' === t.fallbackAction) this.cell.remove({ ui: !0 })
      else this.cell.prop(t.terminalType, t.initialTerminal, { ui: !0 })
    }
    notifyConnectionEvent(t, e) {
      const n = t.terminalType,
        r = t.initialTerminal,
        i = this.cell[n]
      if (i && !Av.equalTerminals(r, i)) {
        const s = this.graph,
          o = r,
          a = o.cell ? s.getCellById(o.cell) : null,
          l = o.port,
          c = a ? s.findViewByCell(a) : null,
          h = a || t.isNewEdge ? null : Vd.create(r).toJSON(),
          u = i,
          g = u.cell ? s.getCellById(u.cell) : null,
          d = u.port,
          f = g ? s.findViewByCell(g) : null,
          p = g ? null : Vd.create(i).toJSON()
        this.notify('edge:connected', {
          e: e,
          previousCell: a,
          previousPort: l,
          previousView: c,
          previousPoint: h,
          currentCell: g,
          currentView: f,
          currentPort: d,
          currentPoint: p,
          previousMagnet: t.initialMagnet,
          currentMagnet: t.currentMagnet,
          edge: this.cell,
          view: this,
          type: n,
          isNew: t.isNewEdge,
        })
      }
    }
    highlightAvailableMagnets(t) {
      const e = this.graph,
        n = e.model.getCells()
      t.marked = {}
      for (let r = 0, i = n.length; r < i; r += 1) {
        const i = e.findViewByCell(n[r])
        if (!i) continue
        const s = Array.prototype.slice.call(
          i.container.querySelectorAll('[magnet]'),
        )
        'false' !== i.container.getAttribute('magnet') && s.push(i.container)
        const o = s.filter((e) =>
          this.validateConnection(
            ...t.getValidateConnectionArgs(i, e),
            i.getEdgeTerminal(e, t.x, t.y, this.cell, t.terminalType),
          ),
        )
        if (o.length > 0) {
          for (let t = 0, e = o.length; t < e; t += 1)
            i.highlight(o[t], { type: 'magnetAvailable' })
          i.highlight(null, { type: 'nodeAvailable' }),
            (t.marked[i.cell.id] = o)
        }
      }
    }
    unhighlightAvailableMagnets(t) {
      const e = t.marked || {}
      Object.keys(e).forEach((t) => {
        const n = this.graph.findViewByCell(t)
        if (n) {
          e[t].forEach((t) => {
            n.unhighlight(t, { type: 'magnetAvailable' })
          }),
            n.unhighlight(null, { type: 'nodeAvailable' })
        }
      }),
        (t.marked = null)
    }
    startArrowheadDragging(t, e, n) {
      if (!this.can('arrowheadMovable'))
        return void this.notifyUnhandledMouseDown(t, e, n)
      const r = t.target.getAttribute('data-terminal'),
        i = this.prepareArrowheadDragging(r, { x: e, y: n })
      this.setEventData(t, i)
    }
    dragArrowhead(t, e, n) {
      const r = this.getEventData(t)
      this.graph.options.connecting.snap
        ? this.snapArrowhead(e, n, r)
        : this.arrowheadDragging(this.getEventTarget(t), e, n, r)
    }
    stopArrowheadDragging(t, e, n) {
      const r = this.graph,
        i = this.getEventData(t)
      r.options.connecting.snap
        ? this.snapArrowheadEnd(i)
        : this.arrowheadDragged(i, e, n)
      this.validateEdge(this.cell, i.terminalType, i.initialTerminal)
        ? (this.finishEmbedding(i), this.notifyConnectionEvent(i, t))
        : this.fallbackConnection(i),
        this.afterArrowheadDragging(i)
    }
    startLabelDragging(t, e, n) {
      if (this.can('edgeLabelMovable')) {
        const e = t.currentTarget,
          n = parseInt(e.getAttribute('data-index'), 10),
          r = this.getLabelPositionAngle(n),
          i = this.getLabelPositionArgs(n),
          s = this.getDefaultLabelPositionArgs(),
          o = this.mergeLabelPositionArgs(i, s)
        this.setEventData(t, {
          index: n,
          positionAngle: r,
          positionArgs: o,
          stopPropagation: !0,
          action: 'drag-label',
        })
      } else this.setEventData(t, { stopPropagation: !0 })
      this.graph.view.delegateDragEvents(t, this)
    }
    dragLabel(t, e, n) {
      const r = this.getEventData(t),
        i = this.cell.getLabelAt(r.index),
        s = el({}, i, {
          position: this.getLabelPosition(
            e,
            n,
            r.positionAngle,
            r.positionArgs,
          ),
        })
      this.cell.setLabelAt(r.index, s)
    }
    stopLabelDragging(t, e, n) {}
  }
  !(function (t) {
    ;(t.toStringTag = `X6.${t.name}`),
      (t.isEdgeView = function (e) {
        if (null == e) return !1
        if (e instanceof t) return !0
        const n = e[Symbol.toStringTag],
          r = e
        return (
          (null == n || n === t.toStringTag) &&
          'function' == typeof r.isNodeView &&
          'function' == typeof r.isEdgeView &&
          'function' == typeof r.confirmUpdate &&
          'function' == typeof r.update &&
          'function' == typeof r.getConnection
        )
      })
  })(Rv || (Rv = {})),
    Rv.config({
      isSvgElement: !0,
      priority: 1,
      bootstrap: ['render', 'source', 'target'],
      actions: {
        view: ['render'],
        markup: ['render'],
        attrs: ['update'],
        source: ['source', 'update'],
        target: ['target', 'update'],
        router: ['update'],
        connector: ['update'],
        labels: ['labels'],
        defaultLabel: ['labels'],
        tools: ['tools'],
      },
    }),
    Rv.registry.register('edge', Rv, !0)
  var Dv = function (t, e, n, r) {
    var i,
      s = arguments.length,
      o =
        s < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(t, e, n, r)
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }
  class Vv extends Cm {
    constructor(t) {
      super(), (this.graph = t)
      const { selectors: e, fragment: n } = Pm.parseJSONMarkup(Vv.markup)
      ;(this.background = e.background),
        (this.grid = e.grid),
        (this.svg = e.svg),
        (this.defs = e.defs),
        (this.viewport = e.viewport),
        (this.primer = e.primer),
        (this.stage = e.stage),
        (this.decorator = e.decorator),
        (this.overlay = e.overlay),
        (this.container = this.options.container),
        (this.restore = Vv.snapshoot(this.container)),
        Zu(this.container, this.prefixClassName('graph')),
        dg(this.container, n),
        this.delegateEvents()
    }
    get options() {
      return this.graph.options
    }
    delegateEvents() {
      const t = this.constructor
      return super.delegateEvents(t.events), this
    }
    guard(t, e) {
      return (
        ('mousedown' === t.type && 2 === t.button) ||
        !(!this.options.guard || !this.options.guard(t, e)) ||
        (t.data && void 0 !== t.data.guarded
          ? t.data.guarded
          : !(e && e.cell && vv.isCell(e.cell)) &&
            this.svg !== t.target &&
            this.container !== t.target &&
            !this.svg.contains(t.target))
      )
    }
    findView(t) {
      return this.graph.findViewByElem(t)
    }
    onDblClick(t) {
      this.options.preventDefaultDblClick && t.preventDefault()
      const e = this.normalizeEvent(t),
        n = this.findView(e.target)
      if (this.guard(e, n)) return
      const r = this.graph.snapToGrid(e.clientX, e.clientY)
      n
        ? n.onDblClick(e, r.x, r.y)
        : this.graph.trigger('blank:dblclick', { e: e, x: r.x, y: r.y })
    }
    onClick(t) {
      if (this.getMouseMovedCount(t) <= this.options.clickThreshold) {
        const e = this.normalizeEvent(t),
          n = this.findView(e.target)
        if (this.guard(e, n)) return
        const r = this.graph.snapToGrid(e.clientX, e.clientY)
        n
          ? n.onClick(e, r.x, r.y)
          : this.graph.trigger('blank:click', { e: e, x: r.x, y: r.y })
      }
    }
    isPreventDefaultContextMenu(t) {
      let e = this.options.preventDefaultContextMenu
      return 'function' == typeof e && (e = au(e, this.graph, { view: t })), e
    }
    onContextMenu(t) {
      const e = this.normalizeEvent(t),
        n = this.findView(e.target)
      if (
        (this.isPreventDefaultContextMenu(n) && t.preventDefault(),
        this.guard(e, n))
      )
        return
      const r = this.graph.snapToGrid(e.clientX, e.clientY)
      n
        ? n.onContextMenu(e, r.x, r.y)
        : this.graph.trigger('blank:contextmenu', { e: e, x: r.x, y: r.y })
    }
    delegateDragEvents(t, e) {
      null == t.data && (t.data = {}),
        this.setEventData(t, {
          currentView: e || null,
          mouseMovedCount: 0,
          startPosition: { x: t.clientX, y: t.clientY },
        })
      const n = this.constructor
      this.delegateDocumentEvents(n.documentEvents, t.data),
        this.undelegateEvents()
    }
    getMouseMovedCount(t) {
      return this.getEventData(t).mouseMovedCount || 0
    }
    onMouseDown(t) {
      const e = this.normalizeEvent(t),
        n = this.findView(e.target)
      if (this.guard(e, n)) return
      this.options.preventDefaultMouseDown && e.preventDefault()
      const r = this.graph.snapToGrid(e.clientX, e.clientY)
      n
        ? n.onMouseDown(e, r.x, r.y)
        : (this.options.preventDefaultBlankAction &&
            ['touchstart'].includes(e.type) &&
            e.preventDefault(),
          this.graph.trigger('blank:mousedown', { e: e, x: r.x, y: r.y })),
        this.delegateDragEvents(e, n)
    }
    onMouseMove(t) {
      const e = this.getEventData(t),
        n = e.startPosition
      if (n && n.x === t.clientX && n.y === t.clientY) return
      null == e.mouseMovedCount && (e.mouseMovedCount = 0),
        (e.mouseMovedCount += 1)
      if (e.mouseMovedCount <= this.options.moveThreshold) return
      const r = this.normalizeEvent(t),
        i = this.graph.snapToGrid(r.clientX, r.clientY),
        s = e.currentView
      s
        ? s.onMouseMove(r, i.x, i.y)
        : this.graph.trigger('blank:mousemove', { e: r, x: i.x, y: i.y }),
        this.setEventData(r, e)
    }
    onMouseUp(t) {
      this.undelegateDocumentEvents()
      const e = this.normalizeEvent(t),
        n = this.graph.snapToGrid(e.clientX, e.clientY),
        r = this.getEventData(t).currentView
      if (
        (r
          ? r.onMouseUp(e, n.x, n.y)
          : this.graph.trigger('blank:mouseup', { e: e, x: n.x, y: n.y }),
        !t.isPropagationStopped())
      ) {
        const e = new bd(t, { type: 'click', data: t.data })
        this.onClick(e)
      }
      t.stopImmediatePropagation(), this.delegateEvents()
    }
    onMouseOver(t) {
      const e = this.normalizeEvent(t),
        n = this.findView(e.target)
      if (!this.guard(e, n))
        if (n) n.onMouseOver(e)
        else {
          if (this.container === e.target) return
          this.graph.trigger('blank:mouseover', { e: e })
        }
    }
    onMouseOut(t) {
      const e = this.normalizeEvent(t),
        n = this.findView(e.target)
      if (!this.guard(e, n))
        if (n) n.onMouseOut(e)
        else {
          if (this.container === e.target) return
          this.graph.trigger('blank:mouseout', { e: e })
        }
    }
    onMouseEnter(t) {
      const e = this.normalizeEvent(t),
        n = this.findView(e.target)
      if (this.guard(e, n)) return
      const r = this.graph.findViewByElem(e.relatedTarget)
      if (n) {
        if (r === n) return
        n.onMouseEnter(e)
      } else {
        if (r) return
        this.graph.trigger('graph:mouseenter', { e: e })
      }
    }
    onMouseLeave(t) {
      const e = this.normalizeEvent(t),
        n = this.findView(e.target)
      if (this.guard(e, n)) return
      const r = this.graph.findViewByElem(e.relatedTarget)
      if (n) {
        if (r === n) return
        n.onMouseLeave(e)
      } else {
        if (r) return
        this.graph.trigger('graph:mouseleave', { e: e })
      }
    }
    onMouseWheel(t) {
      const e = this.normalizeEvent(t),
        n = this.findView(e.target)
      if (this.guard(e, n)) return
      const r = e.originalEvent,
        i = this.graph.snapToGrid(r.clientX, r.clientY),
        s = Math.max(-1, Math.min(1, r.wheelDelta || -r.detail))
      n
        ? n.onMouseWheel(e, i.x, i.y, s)
        : this.graph.trigger('blank:mousewheel', {
            e: e,
            delta: s,
            x: i.x,
            y: i.y,
          })
    }
    onCustomEvent(t) {
      const e = t.currentTarget,
        n = e.getAttribute('event') || e.getAttribute('data-event')
      if (n) {
        const r = this.findView(e)
        if (r) {
          const e = this.normalizeEvent(t)
          if (this.guard(e, r)) return
          const i = this.graph.snapToGrid(e.clientX, e.clientY)
          r.onCustomEvent(e, n, i.x, i.y)
        }
      }
    }
    handleMagnetEvent(t, e) {
      const n = t.currentTarget,
        r = n.getAttribute('magnet')
      if (r && 'false' !== r.toLowerCase()) {
        const r = this.findView(n)
        if (r) {
          const i = this.normalizeEvent(t)
          if (this.guard(i, r)) return
          const s = this.graph.snapToGrid(i.clientX, i.clientY)
          au(e, this.graph, r, i, n, s.x, s.y)
        }
      }
    }
    onMagnetMouseDown(t) {
      this.handleMagnetEvent(t, (t, e, n, r, i) => {
        t.onMagnetMouseDown(e, n, r, i)
      })
    }
    onMagnetDblClick(t) {
      this.handleMagnetEvent(t, (t, e, n, r, i) => {
        t.onMagnetDblClick(e, n, r, i)
      })
    }
    onMagnetContextMenu(t) {
      const e = this.findView(t.target)
      this.isPreventDefaultContextMenu(e) && t.preventDefault(),
        this.handleMagnetEvent(t, (t, e, n, r, i) => {
          t.onMagnetContextMenu(e, n, r, i)
        })
    }
    onLabelMouseDown(t) {
      const e = t.currentTarget,
        n = this.findView(e)
      if (n) {
        const e = this.normalizeEvent(t)
        if (this.guard(e, n)) return
        const r = this.graph.snapToGrid(e.clientX, e.clientY)
        n.onLabelMouseDown(e, r.x, r.y)
      }
    }
    onImageDragStart() {
      return !1
    }
    dispose() {
      this.undelegateEvents(),
        this.undelegateDocumentEvents(),
        this.restore(),
        (this.restore = () => {})
    }
  }
  Dv([Cm.dispose()], Vv.prototype, 'dispose', null),
    (function (t) {
      const e = `${Yp.prefixCls}-graph`
      ;(t.markup = [
        {
          ns: rg.xhtml,
          tagName: 'div',
          selector: 'background',
          className: `${e}-background`,
        },
        {
          ns: rg.xhtml,
          tagName: 'div',
          selector: 'grid',
          className: `${e}-grid`,
        },
        {
          ns: rg.svg,
          tagName: 'svg',
          selector: 'svg',
          className: `${e}-svg`,
          attrs: { width: '100%', height: '100%', 'xmlns:xlink': rg.xlink },
          children: [
            { tagName: 'defs', selector: 'defs' },
            {
              tagName: 'g',
              selector: 'viewport',
              className: `${e}-svg-viewport`,
              children: [
                {
                  tagName: 'g',
                  selector: 'primer',
                  className: `${e}-svg-primer`,
                },
                {
                  tagName: 'g',
                  selector: 'stage',
                  className: `${e}-svg-stage`,
                },
                {
                  tagName: 'g',
                  selector: 'decorator',
                  className: `${e}-svg-decorator`,
                },
                {
                  tagName: 'g',
                  selector: 'overlay',
                  className: `${e}-svg-overlay`,
                },
              ],
            },
          ],
        },
      ]),
        (t.snapshoot = function (t) {
          const e = t.cloneNode()
          return (
            t.childNodes.forEach((t) => e.appendChild(t)),
            () => {
              for (gg(t); t.attributes.length > 0; )
                t.removeAttribute(t.attributes[0].name)
              for (let n = 0, r = e.attributes.length; n < r; n += 1) {
                const r = e.attributes[n]
                t.setAttribute(r.name, r.value)
              }
              e.childNodes.forEach((e) => t.appendChild(e))
            }
          )
        })
    })(Vv || (Vv = {})),
    (function (t) {
      const e = Yp.prefixCls
      ;(t.events = {
        dblclick: 'onDblClick',
        contextmenu: 'onContextMenu',
        touchstart: 'onMouseDown',
        mousedown: 'onMouseDown',
        mouseover: 'onMouseOver',
        mouseout: 'onMouseOut',
        mouseenter: 'onMouseEnter',
        mouseleave: 'onMouseLeave',
        mousewheel: 'onMouseWheel',
        DOMMouseScroll: 'onMouseWheel',
        [`mouseenter  .${e}-cell`]: 'onMouseEnter',
        [`mouseleave  .${e}-cell`]: 'onMouseLeave',
        [`mouseenter  .${e}-cell-tools`]: 'onMouseEnter',
        [`mouseleave  .${e}-cell-tools`]: 'onMouseLeave',
        [`mousedown   .${e}-cell [event]`]: 'onCustomEvent',
        [`touchstart  .${e}-cell [event]`]: 'onCustomEvent',
        [`mousedown   .${e}-cell [data-event]`]: 'onCustomEvent',
        [`touchstart  .${e}-cell [data-event]`]: 'onCustomEvent',
        [`dblclick    .${e}-cell [magnet]`]: 'onMagnetDblClick',
        [`contextmenu .${e}-cell [magnet]`]: 'onMagnetContextMenu',
        [`mousedown   .${e}-cell [magnet]`]: 'onMagnetMouseDown',
        [`touchstart  .${e}-cell [magnet]`]: 'onMagnetMouseDown',
        [`dblclick    .${e}-cell [data-magnet]`]: 'onMagnetDblClick',
        [`contextmenu .${e}-cell [data-magnet]`]: 'onMagnetContextMenu',
        [`mousedown   .${e}-cell [data-magnet]`]: 'onMagnetMouseDown',
        [`touchstart  .${e}-cell [data-magnet]`]: 'onMagnetMouseDown',
        [`dragstart   .${e}-cell image`]: 'onImageDragStart',
        [`mousedown   .${e}-edge .${e}-edge-label`]: 'onLabelMouseDown',
        [`touchstart  .${e}-edge .${e}-edge-label`]: 'onLabelMouseDown',
      }),
        (t.documentEvents = {
          mousemove: 'onMouseMove',
          touchmove: 'onMouseMove',
          mouseup: 'onMouseUp',
          touchend: 'onMouseUp',
          touchcancel: 'onMouseUp',
        })
    })(Vv || (Vv = {}))
  class zv extends h {
    constructor(t) {
      super(), (this.graph = t), this.init()
    }
    get options() {
      return this.graph.options
    }
    get model() {
      return this.graph.model
    }
    get view() {
      return this.graph.view
    }
    init() {}
  }
  var $v = function (t, e, n, r) {
    var i,
      s = arguments.length,
      o =
        s < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(t, e, n, r)
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }
  class Fv extends zv {
    init() {
      !(function (t, e) {
        if (!Id.find((e) => e.name === t) && !Wu.isApplyingHMR()) {
          const n = document.createElement('style')
          n.setAttribute('type', 'text/css'), (n.textContent = e)
          const r = document.querySelector('head')
          r && r.insertBefore(n, r.firstChild),
            Id.push({ name: t, styleElement: n })
        }
      })(
        'core',
        ".x6-graph {\n  position: relative;\n  outline: none;\n  touch-action: none;\n}\n.x6-graph-background,\n.x6-graph-grid,\n.x6-graph-svg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.x6-graph-background-stage,\n.x6-graph-grid-stage,\n.x6-graph-svg-stage {\n  user-select: none;\n}\n.x6-graph.x6-graph-pannable {\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n.x6-graph.x6-graph-panning {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n  user-select: none;\n}\n.x6-node {\n  cursor: move;\n  /* stylelint-disable-next-line */\n}\n.x6-node.x6-node-immovable {\n  cursor: default;\n}\n.x6-node * {\n  -webkit-user-drag: none;\n}\n.x6-node .scalable * {\n  vector-effect: non-scaling-stroke;\n}\n.x6-node [magnet='true'] {\n  cursor: crosshair;\n  transition: opacity 0.3s;\n}\n.x6-node [magnet='true']:hover {\n  opacity: 0.7;\n}\n.x6-node foreignObject {\n  display: block;\n  overflow: visible;\n  background-color: transparent;\n}\n.x6-node foreignObject > body {\n  position: static;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n  background-color: transparent;\n}\n.x6-edge .source-marker,\n.x6-edge .target-marker {\n  vector-effect: non-scaling-stroke;\n}\n.x6-edge .connection {\n  stroke-linejoin: round;\n  fill: none;\n}\n.x6-edge .connection-wrap {\n  cursor: move;\n  opacity: 0;\n  fill: none;\n  stroke: #000;\n  stroke-width: 15;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.x6-edge .connection-wrap:hover {\n  opacity: 0.4;\n  stroke-opacity: 0.4;\n}\n.x6-edge .vertices {\n  cursor: move;\n  opacity: 0;\n}\n.x6-edge .vertices .vertex {\n  fill: #1abc9c;\n}\n.x6-edge .vertices .vertex :hover {\n  fill: #34495e;\n  stroke: none;\n}\n.x6-edge .vertices .vertex-remove {\n  cursor: pointer;\n  fill: #fff;\n}\n.x6-edge .vertices .vertex-remove-area {\n  cursor: pointer;\n  opacity: 0.1;\n}\n.x6-edge .vertices .vertex-group:hover .vertex-remove-area {\n  opacity: 1;\n}\n.x6-edge .arrowheads {\n  cursor: move;\n  opacity: 0;\n}\n.x6-edge .arrowheads .arrowhead {\n  fill: #1abc9c;\n}\n.x6-edge .arrowheads .arrowhead :hover {\n  fill: #f39c12;\n  stroke: none;\n}\n.x6-edge .tools {\n  cursor: pointer;\n  opacity: 0;\n}\n.x6-edge .tools .tool-options {\n  display: none;\n}\n.x6-edge .tools .tool-remove circle {\n  fill: #f00;\n}\n.x6-edge .tools .tool-remove path {\n  fill: #fff;\n}\n.x6-edge:hover .vertices,\n.x6-edge:hover .arrowheads,\n.x6-edge:hover .tools {\n  opacity: 1;\n}\n.x6-highlight-opacity {\n  opacity: 0.3;\n}\n.x6-cell-tool-editor {\n  position: relative;\n  display: inline-block;\n  min-height: 1em;\n  margin: 0;\n  padding: 0;\n  line-height: 1;\n  white-space: normal;\n  text-align: center;\n  vertical-align: top;\n  overflow-wrap: normal;\n  outline: none;\n  transform-origin: 0 0;\n  -webkit-user-drag: none;\n}\n.x6-edge-tool-editor {\n  border: 1px solid #275fc5;\n  border-radius: 2px;\n}\n",
      )
    }
    dispose() {
      !(function (t) {
        const e = Id.findIndex((e) => e.name === t)
        if (e > -1) {
          let t = Id[e].styleElement
          t && t.parentNode && t.parentNode.removeChild(t),
            (t = null),
            Id.splice(e, 1)
        }
      })('core')
    }
  }
  $v([Fv.dispose()], Fv.prototype, 'dispose', null)
  var qv,
    Gv = function (t, e) {
      var n = {}
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r])
      if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0
        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
          e.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
            (n[r[i]] = t[r[i]])
      }
      return n
    }
  !(function (t) {
    t.get = function (e) {
      const { grid: n, panning: r, mousewheel: i, embedding: s } = e,
        o = Gv(e, ['grid', 'panning', 'mousewheel', 'embedding']),
        a = e.container
      if (null == a)
        throw new Error(
          'Ensure the container of the graph is specified and valid',
        )
      null == o.width && (o.width = a.clientWidth),
        null == o.height && (o.height = a.clientHeight)
      const l = el({}, t.defaults, o),
        c = { size: 10, visible: !1 }
      return (
        (l.grid =
          'number' == typeof n
            ? { size: n, visible: !1 }
            : 'boolean' == typeof n
            ? Object.assign(Object.assign({}, c), { visible: n })
            : Object.assign(Object.assign({}, c), n)),
        ['panning', 'mousewheel', 'embedding'].forEach((t) => {
          const n = e[t]
          'boolean' == typeof n
            ? (l[t].enabled = n)
            : (l[t] = Object.assign(Object.assign({}, l[t]), n))
        }),
        l
      )
    }
  })(qv || (qv = {})),
    (function (t) {
      t.defaults = {
        x: 0,
        y: 0,
        scaling: { min: 0.01, max: 16 },
        grid: { size: 10, visible: !1 },
        background: !1,
        panning: { enabled: !1, eventTypes: ['leftMouseDown'] },
        mousewheel: { enabled: !1, factor: 1.2, zoomAtMousePosition: !0 },
        highlighting: {
          default: { name: 'stroke', args: { padding: 3 } },
          nodeAvailable: {
            name: 'className',
            args: { className: Yp.prefix('available-node') },
          },
          magnetAvailable: {
            name: 'className',
            args: { className: Yp.prefix('available-magnet') },
          },
        },
        connecting: {
          snap: !1,
          allowLoop: !0,
          allowNode: !0,
          allowEdge: !1,
          allowPort: !0,
          highlight: !1,
          anchor: 'center',
          edgeAnchor: 'ratio',
          connectionPoint: 'boundary',
          router: 'normal',
          connector: 'normal',
          validateConnection: ({ type: t, sourceView: e, targetView: n }) =>
            null != ('target' === t ? n : e),
          createEdge: () => new kv(),
        },
        translating: { restrict: !1 },
        embedding: {
          enabled: !1,
          findParent: 'bbox',
          frontOnly: !0,
          validate: () => !0,
        },
        moveThreshold: 0,
        clickThreshold: 0,
        magnetThreshold: 0,
        preventDefaultDblClick: !0,
        preventDefaultMouseDown: !1,
        preventDefaultContextMenu: !0,
        preventDefaultBlankAction: !0,
        interacting: { edgeLabelMovable: !1 },
        async: !0,
        virtual: !1,
        guard: () => !1,
      }
    })(qv || (qv = {}))
  var Wv = function (t, e, n, r) {
      var i,
        s = arguments.length,
        o =
          s < 3
            ? e
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(e, n))
            : r
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        o = Reflect.decorate(t, e, n, r)
      else
        for (var a = t.length - 1; a >= 0; a--)
          (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
      return s > 3 && o && Object.defineProperty(e, n, o), o
    },
    Hv = function (t, e) {
      var n = {}
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r])
      if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0
        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
          e.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
            (n[r[i]] = t[r[i]])
      }
      return n
    }
  class Uv extends zv {
    get elem() {
      return this.view.grid
    }
    get grid() {
      return this.options.grid
    }
    init() {
      this.startListening(), this.draw(this.grid)
    }
    startListening() {
      this.graph.on('scale', this.update, this),
        this.graph.on('translate', this.update, this)
    }
    stopListening() {
      this.graph.off('scale', this.update, this),
        this.graph.off('translate', this.update, this)
    }
    setVisible(t) {
      this.grid.visible !== t && ((this.grid.visible = t), this.update())
    }
    getGridSize() {
      return this.grid.size
    }
    setGridSize(t) {
      ;(this.grid.size = Math.max(t, 1)), this.update()
    }
    show() {
      this.setVisible(!0), this.update()
    }
    hide() {
      this.setVisible(!1), this.update()
    }
    clear() {
      this.elem.style.backgroundImage = ''
    }
    draw(t) {
      this.clear(),
        (this.instance = null),
        Object.assign(this.grid, t),
        (this.patterns = this.resolveGrid(t)),
        this.update()
    }
    update(t = {}) {
      const e = this.grid.size
      if (e <= 1 || !this.grid.visible) return this.clear()
      const n = this.graph.matrix(),
        r = this.getInstance(),
        i = Array.isArray(t) ? t : [t]
      this.patterns.forEach((t, s) => {
        const o = `pattern_${s}`,
          a = n.a || 1,
          l = n.d || 1,
          { update: c, markup: h } = t,
          u = Hv(t, ['update', 'markup']),
          g = Object.assign(Object.assign(Object.assign({}, u), i[s]), {
            sx: a,
            sy: l,
            ox: n.e || 0,
            oy: n.f || 0,
            width: e * a,
            height: e * l,
          })
        r.has(o) ||
          r.add(
            o,
            zg.create(
              'pattern',
              { id: o, patternUnits: 'userSpaceOnUse' },
              zg.createVectors(h),
            ).node,
          )
        const d = r.get(o)
        'function' == typeof c && c(d.childNodes[0], g)
        let f = g.ox % g.width
        f < 0 && (f += g.width)
        let p = g.oy % g.height
        p < 0 && (p += g.height),
          xg(d, { x: f, y: p, width: g.width, height: g.height })
      })
      const s = new XMLSerializer().serializeToString(r.root),
        o = `url(data:image/svg+xml;base64,${btoa(s)})`
      this.elem.style.backgroundImage = o
    }
    getInstance() {
      return this.instance || (this.instance = new mf()), this.instance
    }
    resolveGrid(t) {
      if (!t) return []
      const e = t.type
      if (null == e)
        return [Object.assign(Object.assign({}, mf.presets.dot), t.args)]
      const n = mf.registry.get(e)
      if (n) {
        let e = t.args || []
        return (
          Array.isArray(e) || (e = [e]),
          Array.isArray(n)
            ? n.map((t, n) => Object.assign(Object.assign({}, t), e[n]))
            : [Object.assign(Object.assign({}, n), e[0])]
        )
      }
      return mf.registry.onNotFound(e)
    }
    dispose() {
      this.stopListening(), this.clear()
    }
  }
  Wv([zv.dispose()], Uv.prototype, 'dispose', null)
  class Jv extends zv {
    get container() {
      return this.graph.view.container
    }
    get viewport() {
      return this.graph.view.viewport
    }
    get stage() {
      return this.graph.view.stage
    }
    init() {
      this.resize()
    }
    getMatrix() {
      const t = this.viewport.getAttribute('transform')
      return (
        t !== this.viewportTransformString &&
          ((this.viewportMatrix = this.viewport.getCTM()),
          (this.viewportTransformString = t)),
        sd(this.viewportMatrix)
      )
    }
    setMatrix(t) {
      const e = sd(t),
        n = ld(e)
      this.viewport.setAttribute('transform', n),
        (this.viewportMatrix = e),
        (this.viewportTransformString = n)
    }
    resize(t, e) {
      let n = void 0 === t ? this.options.width : t,
        r = void 0 === e ? this.options.height : e
      ;(this.options.width = n),
        (this.options.height = r),
        'number' == typeof n && (n = Math.round(n)),
        'number' == typeof r && (r = Math.round(r)),
        (this.container.style.width = null == n ? '' : `${n}px`),
        (this.container.style.height = null == r ? '' : `${r}px`)
      const i = this.getComputedSize()
      return this.graph.trigger('resize', Object.assign({}, i)), this
    }
    getComputedSize() {
      let t = this.options.width,
        e = this.options.height
      return (
        Ba(t) || (t = this.container.clientWidth),
        Ba(e) || (e = this.container.clientHeight),
        { width: t, height: e }
      )
    }
    getScale() {
      return (function (t) {
        let e, n, r, i
        return (
          t
            ? ((e = null == t.a ? 1 : t.a),
              (i = null == t.d ? 1 : t.d),
              (n = t.b),
              (r = t.c))
            : (e = i = 1),
          {
            sx: n ? Math.sqrt(e * e + n * n) : e,
            sy: r ? Math.sqrt(r * r + i * i) : i,
          }
        )
      })(this.getMatrix())
    }
    scale(t, e = t, n = 0, r = 0) {
      if (((t = this.clampScale(t)), (e = this.clampScale(e)), n || r)) {
        const i = this.getTranslation(),
          s = i.tx - n * (t - 1),
          o = i.ty - r * (e - 1)
        ;(s === i.tx && o === i.ty) || this.translate(s, o)
      }
      const i = this.getMatrix()
      return (
        (i.a = t),
        (i.d = e),
        this.setMatrix(i),
        this.graph.trigger('scale', { sx: t, sy: e, ox: n, oy: r }),
        this
      )
    }
    clampScale(t) {
      const e = this.graph.options.scaling
      return ti(t, e.min || 0.01, e.max || 16)
    }
    getZoom() {
      return this.getScale().sx
    }
    zoom(t, e) {
      e = e || {}
      let n = t,
        r = t
      const i = this.getScale(),
        s = this.getComputedSize()
      let o = s.width / 2,
        a = s.height / 2
      if (
        (e.absolute || ((n += i.sx), (r += i.sy)),
        e.scaleGrid &&
          ((n = Math.round(n / e.scaleGrid) * e.scaleGrid),
          (r = Math.round(r / e.scaleGrid) * e.scaleGrid)),
        e.maxScale &&
          ((n = Math.min(e.maxScale, n)), (r = Math.min(e.maxScale, r))),
        e.minScale &&
          ((n = Math.max(e.minScale, n)), (r = Math.max(e.minScale, r))),
        e.center && ((o = e.center.x), (a = e.center.y)),
        (n = this.clampScale(n)),
        (r = this.clampScale(r)),
        o || a)
      ) {
        const t = this.getTranslation(),
          e = o - (o - t.tx) * (n / i.sx),
          s = a - (a - t.ty) * (r / i.sy)
        ;(e === t.tx && s === t.ty) || this.translate(e, s)
      }
      return this.scale(n, r), this
    }
    getRotation() {
      return (function (t) {
        let e = { x: 0, y: 1 }
        t && (e = hd(t, e))
        const n = (((180 * Math.atan2(e.y, e.x)) / Math.PI) % 360) - 90
        return { angle: (n % 360) + (n < 0 ? 360 : 0) }
      })(this.getMatrix())
    }
    rotate(t, e, n) {
      if (null == e || null == n) {
        const t = em.getBBox(this.stage)
        ;(e = t.width / 2), (n = t.height / 2)
      }
      const r = this.getMatrix().translate(e, n).rotate(t).translate(-e, -n)
      return this.setMatrix(r), this
    }
    getTranslation() {
      return { tx: ((t = this.getMatrix()) && t.e) || 0, ty: (t && t.f) || 0 }
      var t
    }
    translate(t, e) {
      const n = this.getMatrix()
      ;(n.e = t || 0), (n.f = e || 0), this.setMatrix(n)
      const r = this.getTranslation()
      return (
        (this.options.x = r.tx),
        (this.options.y = r.ty),
        this.graph.trigger('translate', Object.assign({}, r)),
        this
      )
    }
    setOrigin(t, e) {
      return this.translate(t || 0, e || 0)
    }
    fitToContent(t, e, n, r) {
      if ('object' == typeof t) {
        const i = t
        ;(t = i.gridWidth || 1),
          (e = i.gridHeight || 1),
          (n = i.padding || 0),
          (r = i)
      } else (t = t || 1), (e = e || 1), (n = n || 0), null == r && (r = {})
      const i = Su(n),
        s = r.border || 0,
        o = r.contentArea ? zd.create(r.contentArea) : this.getContentArea(r)
      s > 0 && o.inflate(s)
      const a = this.getScale(),
        l = this.getTranslation(),
        c = a.sx,
        h = a.sy
      ;(o.x *= c), (o.y *= h), (o.width *= c), (o.height *= h)
      let u = Math.max(Math.ceil((o.width + o.x) / t), 1) * t,
        g = Math.max(Math.ceil((o.height + o.y) / e), 1) * e,
        d = 0,
        f = 0
      ;(('negative' === r.allowNewOrigin && o.x < 0) ||
        ('positive' === r.allowNewOrigin && o.x >= 0) ||
        'any' === r.allowNewOrigin) &&
        ((d = Math.ceil(-o.x / t) * t), (d += i.left), (u += d)),
        (('negative' === r.allowNewOrigin && o.y < 0) ||
          ('positive' === r.allowNewOrigin && o.y >= 0) ||
          'any' === r.allowNewOrigin) &&
          ((f = Math.ceil(-o.y / e) * e), (f += i.top), (g += f)),
        (u += i.right),
        (g += i.bottom),
        (u = Math.max(u, r.minWidth || 0)),
        (g = Math.max(g, r.minHeight || 0)),
        (u = Math.min(u, r.maxWidth || Number.MAX_SAFE_INTEGER)),
        (g = Math.min(g, r.maxHeight || Number.MAX_SAFE_INTEGER))
      const p = this.getComputedSize(),
        m = u !== p.width || g !== p.height
      return (
        (d !== l.tx || f !== l.ty) && this.translate(d, f),
        m && this.resize(u, g),
        new zd(-d / c, -f / h, u / c, g / h)
      )
    }
    scaleContentToFit(t = {}) {
      this.scaleContentToFitImpl(t)
    }
    scaleContentToFitImpl(t = {}, e = !0) {
      let n, r
      if (t.contentArea) {
        const e = t.contentArea
        ;(n = this.graph.localToGraph(e)), (r = Vd.create(e))
      } else (n = this.getContentBBox(t)), (r = this.graph.graphToLocal(n))
      if (!n.width || !n.height) return
      const i = Su(t.padding),
        s = t.minScale || 0,
        o = t.maxScale || Number.MAX_SAFE_INTEGER,
        a = t.minScaleX || s,
        l = t.maxScaleX || o,
        c = t.minScaleY || s,
        h = t.maxScaleY || o
      let u
      if (t.viewportArea) u = t.viewportArea
      else {
        const t = this.getComputedSize(),
          e = this.getTranslation()
        u = { x: e.tx, y: e.ty, width: t.width, height: t.height }
      }
      u = zd
        .create(u)
        .moveAndExpand({
          x: i.left,
          y: i.top,
          width: -i.left - i.right,
          height: -i.top - i.bottom,
        })
      const g = this.getScale()
      let d = (u.width / n.width) * g.sx,
        f = (u.height / n.height) * g.sy
      !1 !== t.preserveAspectRatio && (d = f = Math.min(d, f))
      const p = t.scaleGrid
      if (
        (p && ((d = p * Math.floor(d / p)), (f = p * Math.floor(f / p))),
        (d = ti(d, a, l)),
        (f = ti(f, c, h)),
        this.scale(d, f),
        e)
      ) {
        const t = this.options,
          e = u.x - r.x * d - t.x,
          n = u.y - r.y * f - t.y
        this.translate(e, n)
      }
    }
    getContentArea(t = {}) {
      return !1 !== t.useCellGeometry
        ? this.model.getAllCellsBBox() || new zd()
        : em.getBBox(this.stage)
    }
    getContentBBox(t = {}) {
      return this.graph.localToGraph(this.getContentArea(t))
    }
    getGraphArea() {
      const t = zd.fromSize(this.getComputedSize())
      return this.graph.graphToLocal(t)
    }
    zoomToRect(t, e = {}) {
      const n = zd.create(t),
        r = this.graph
      ;(e.contentArea = n),
        null == e.viewportArea &&
          (e.viewportArea = {
            x: r.options.x,
            y: r.options.y,
            width: this.options.width,
            height: this.options.height,
          }),
        this.scaleContentToFitImpl(e, !1)
      const i = n.getCenter()
      return this.centerPoint(i.x, i.y), this
    }
    zoomToFit(t = {}) {
      return this.zoomToRect(this.getContentArea(t), t)
    }
    centerPoint(t, e) {
      const n = this.getComputedSize(),
        r = this.getScale(),
        i = this.getTranslation(),
        s = n.width / 2,
        o = n.height / 2
      ;(e = 'number' == typeof e ? e : o),
        (t = s - (t = 'number' == typeof t ? t : s) * r.sx),
        (e = o - e * r.sy),
        (i.tx === t && i.ty === e) || this.translate(t, e)
    }
    centerContent(t) {
      const e = this.graph.getContentArea(t).getCenter()
      this.centerPoint(e.x, e.y)
    }
    centerCell(t) {
      return this.positionCell(t, 'center')
    }
    positionPoint(t, e, n) {
      const r = this.getComputedSize()
      ;(e = Mu(e, Math.max(0, r.width))) < 0 && (e = r.width + e),
        (n = Mu(n, Math.max(0, r.height))) < 0 && (n = r.height + n)
      const i = this.getTranslation(),
        s = this.getScale(),
        o = e - t.x * s.sx,
        a = n - t.y * s.sy
      ;(i.tx === o && i.ty === a) || this.translate(o, a)
    }
    positionRect(t, e) {
      const n = zd.create(t)
      switch (e) {
        case 'center':
          return this.positionPoint(n.getCenter(), '50%', '50%')
        case 'top':
          return this.positionPoint(n.getTopCenter(), '50%', 0)
        case 'top-right':
          return this.positionPoint(n.getTopRight(), '100%', 0)
        case 'right':
          return this.positionPoint(n.getRightMiddle(), '100%', '50%')
        case 'bottom-right':
          return this.positionPoint(n.getBottomRight(), '100%', '100%')
        case 'bottom':
          return this.positionPoint(n.getBottomCenter(), '50%', '100%')
        case 'bottom-left':
          return this.positionPoint(n.getBottomLeft(), 0, '100%')
        case 'left':
          return this.positionPoint(n.getLeftMiddle(), 0, '50%')
        case 'top-left':
          return this.positionPoint(n.getTopLeft(), 0, 0)
        default:
          return this
      }
    }
    positionCell(t, e) {
      const n = t.getBBox()
      return this.positionRect(n, e)
    }
    positionContent(t, e) {
      const n = this.graph.getContentArea(e)
      return this.positionRect(n, t)
    }
  }
  var Xv = function (t, e, n, r) {
    var i,
      s = arguments.length,
      o =
        s < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(t, e, n, r)
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }
  class Yv extends zv {
    get elem() {
      return this.view.background
    }
    init() {
      this.startListening(),
        this.options.background && this.draw(this.options.background)
    }
    startListening() {
      this.graph.on('scale', this.update, this),
        this.graph.on('translate', this.update, this)
    }
    stopListening() {
      this.graph.off('scale', this.update, this),
        this.graph.off('translate', this.update, this)
    }
    updateBackgroundImage(t = {}) {
      let e = t.size || 'auto auto',
        n = t.position || 'center'
      const r = this.graph.transform.getScale(),
        i = this.graph.translate()
      if ('object' == typeof n) {
        n = `${i.tx + r.sx * (n.x || 0)}px ${i.ty + r.sy * (n.y || 0)}px`
      }
      'object' == typeof e &&
        ((e = zd.fromSize(e).scale(r.sx, r.sy)),
        (e = `${e.width}px ${e.height}px`)),
        (this.elem.style.backgroundSize = e),
        (this.elem.style.backgroundPosition = n)
    }
    drawBackgroundImage(t, e = {}) {
      if (!(t instanceof HTMLImageElement))
        return void (this.elem.style.backgroundImage = '')
      const n = this.optionsCache
      if (n && n.image !== e.image) return
      let r
      const i = e.opacity,
        s = e.size
      let o = e.repeat || 'no-repeat'
      const a = xf.registry.get(o)
      if ('function' == typeof a) {
        const n = e.quality || 1
        ;(t.width *= n), (t.height *= n)
        const i = a(t, e)
        if (!(i instanceof HTMLCanvasElement))
          throw new Error(
            'Background pattern must return an HTML Canvas instance',
          )
        ;(r = i.toDataURL('image/png')),
          (o = e.repeat && o !== e.repeat ? e.repeat : 'repeat'),
          'object' == typeof s
            ? ((s.width *= i.width / t.width),
              (s.height *= i.height / t.height))
            : void 0 === s &&
              (e.size = { width: i.width / n, height: i.height / n })
      } else (r = t.src), void 0 === s && (e.size = { width: t.width, height: t.height })
      null != n &&
        'object' == typeof e.size &&
        e.image === n.image &&
        e.repeat === n.repeat &&
        e.quality === n.quality &&
        (n.size = Yi(e.size))
      const l = this.elem.style
      ;(l.backgroundImage = `url(${r})`),
        (l.backgroundRepeat = o),
        (l.opacity = null == i || i >= 1 ? '' : `${i}`),
        this.updateBackgroundImage(e)
    }
    updateBackgroundColor(t) {
      this.elem.style.backgroundColor = t || ''
    }
    updateBackgroundOptions(t) {
      this.graph.options.background = t
    }
    update() {
      this.optionsCache && this.updateBackgroundImage(this.optionsCache)
    }
    draw(t) {
      const e = t || {}
      if (
        (this.updateBackgroundOptions(t),
        this.updateBackgroundColor(e.color),
        e.image)
      ) {
        this.optionsCache = Yi(e)
        const n = document.createElement('img')
        ;(n.onload = () => this.drawBackgroundImage(n, t)),
          n.setAttribute('crossorigin', 'anonymous'),
          (n.src = e.image)
      } else this.drawBackgroundImage(null), (this.optionsCache = null)
    }
    clear() {
      this.draw()
    }
    dispose() {
      this.clear(), this.stopListening()
    }
  }
  Xv([zv.dispose()], Yv.prototype, 'dispose', null)
  var Zv = function (t, e, n, r) {
    var i,
      s = arguments.length,
      o =
        s < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(t, e, n, r)
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }
  class Kv extends zv {
    get widgetOptions() {
      return this.options.panning
    }
    get pannable() {
      return this.widgetOptions && !0 === this.widgetOptions.enabled
    }
    init() {
      this.startListening(), this.updateClassName()
    }
    startListening() {
      const t = this.widgetOptions.eventTypes
      t &&
        (t.includes('leftMouseDown') &&
          (this.graph.on('blank:mousedown', this.preparePanning, this),
          this.graph.on('node:unhandled:mousedown', this.preparePanning, this),
          this.graph.on('edge:unhandled:mousedown', this.preparePanning, this)),
        t.includes('rightMouseDown') &&
          ((this.onRightMouseDown = this.onRightMouseDown.bind(this)),
          wd.on(this.graph.container, 'mousedown', this.onRightMouseDown)),
        t.includes('mouseWheel') &&
          ((this.mousewheelHandle = new Cd(
            this.graph.container,
            this.onMouseWheel.bind(this),
            this.allowMouseWheel.bind(this),
          )),
          this.mousewheelHandle.enable()))
    }
    stopListening() {
      const t = this.widgetOptions.eventTypes
      t &&
        (t.includes('leftMouseDown') &&
          (this.graph.off('blank:mousedown', this.preparePanning, this),
          this.graph.off('node:unhandled:mousedown', this.preparePanning, this),
          this.graph.off(
            'edge:unhandled:mousedown',
            this.preparePanning,
            this,
          )),
        t.includes('rightMouseDown') &&
          wd.off(this.graph.container, 'mousedown', this.onRightMouseDown),
        t.includes('mouseWheel') &&
          this.mousewheelHandle &&
          this.mousewheelHandle.disable())
    }
    preparePanning({ e: t }) {
      const e = this.graph.getPlugin('selection'),
        n = e && e.allowRubberband(t, !0)
      ;(this.allowPanning(t, !0) || (this.allowPanning(t) && !n)) &&
        this.startPanning(t)
    }
    allowPanning(t, e) {
      return this.pannable && Td.isMatch(t, this.widgetOptions.modifiers, e)
    }
    startPanning(t) {
      const e = this.view.normalizeEvent(t)
      ;(this.clientX = e.clientX),
        (this.clientY = e.clientY),
        (this.panning = !0),
        this.updateClassName(),
        wd.on(document.body, {
          'mousemove.panning touchmove.panning': this.pan.bind(this),
          'mouseup.panning touchend.panning': this.stopPanning.bind(this),
          'mouseleave.panning': this.stopPanning.bind(this),
        }),
        wd.on(window, 'mouseup.panning', this.stopPanning.bind(this))
    }
    pan(t) {
      const e = this.view.normalizeEvent(t),
        n = e.clientX - this.clientX,
        r = e.clientY - this.clientY
      ;(this.clientX = e.clientX),
        (this.clientY = e.clientY),
        this.graph.translateBy(n, r)
    }
    stopPanning(t) {
      ;(this.panning = !1),
        this.updateClassName(),
        wd.off(document.body, '.panning'),
        wd.off(window, '.panning')
    }
    updateClassName() {
      const t = this.view.container,
        e = this.view.prefixClassName('graph-panning'),
        n = this.view.prefixClassName('graph-pannable')
      this.pannable
        ? this.panning
          ? (Zu(t, e), Ku(t, n))
          : (Ku(t, e), Zu(t, n))
        : (Ku(t, e), Ku(t, n))
    }
    onRightMouseDown(t) {
      2 === t.button && this.allowPanning(t, !0) && this.startPanning(t)
    }
    allowMouseWheel(t) {
      return this.pannable && !t.ctrlKey
    }
    onMouseWheel(t, e, n) {
      t.ctrlKey || this.graph.translateBy(-e, -n)
    }
    autoPanning(t, e) {
      const n = 10,
        r = this.graph.getGraphArea()
      let i = 0,
        s = 0
      t <= r.left + n && (i = -10),
        e <= r.top + n && (s = -10),
        t >= r.right - n && (i = n),
        e >= r.bottom - n && (s = n),
        (0 === i && 0 === s) || this.graph.translateBy(-i, -s)
    }
    enablePanning() {
      this.pannable ||
        ((this.widgetOptions.enabled = !0), this.updateClassName())
    }
    disablePanning() {
      this.pannable &&
        ((this.widgetOptions.enabled = !1), this.updateClassName())
    }
    dispose() {
      this.stopListening()
    }
  }
  Zv([zv.dispose()], Kv.prototype, 'dispose', null)
  var Qv = function (t, e, n, r) {
    var i,
      s = arguments.length,
      o =
        s < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(t, e, n, r)
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }
  class tb extends zv {
    constructor() {
      super(...arguments), (this.cumulatedFactor = 1)
    }
    get widgetOptions() {
      return this.options.mousewheel
    }
    init() {
      ;(this.container = this.graph.container),
        (this.target = this.widgetOptions.global ? document : this.container),
        (this.mousewheelHandle = new Cd(
          this.target,
          this.onMouseWheel.bind(this),
          this.allowMouseWheel.bind(this),
        )),
        this.widgetOptions.enabled && this.enable(!0)
    }
    get disabled() {
      return !0 !== this.widgetOptions.enabled
    }
    enable(t) {
      ;(this.disabled || t) &&
        ((this.widgetOptions.enabled = !0), this.mousewheelHandle.enable())
    }
    disable() {
      this.disabled ||
        ((this.widgetOptions.enabled = !1), this.mousewheelHandle.disable())
    }
    allowMouseWheel(t) {
      const e = this.widgetOptions.guard
      return (
        (null == e || e.call(t)) && Td.isMatch(t, this.widgetOptions.modifiers)
      )
    }
    onMouseWheel(t) {
      const e = this.widgetOptions.guard
      if (
        (null == e || e.call(t)) &&
        Td.isMatch(t, this.widgetOptions.modifiers)
      ) {
        const e = this.widgetOptions.factor || 1.2
        null == this.currentScale &&
          ((this.startPos = { x: t.clientX, y: t.clientY }),
          (this.currentScale = this.graph.transform.getScale().sx))
        t.deltaY < 0
          ? this.currentScale < 0.15
            ? (this.cumulatedFactor =
                (this.currentScale + 0.01) / this.currentScale)
            : (this.cumulatedFactor =
                Math.round(this.currentScale * e * 20) / 20 / this.currentScale)
          : this.currentScale <= 0.15
          ? (this.cumulatedFactor =
              (this.currentScale - 0.01) / this.currentScale)
          : (this.cumulatedFactor =
              Math.round(this.currentScale * (1 / e) * 20) /
              20 /
              this.currentScale),
          (this.cumulatedFactor = Math.max(
            0.01,
            Math.min(this.currentScale * this.cumulatedFactor, 160) /
              this.currentScale,
          ))
        const n = this.currentScale
        let r = this.graph.transform.clampScale(n * this.cumulatedFactor)
        if (
          ((r = ti(
            r,
            this.widgetOptions.minScale || Number.MIN_SAFE_INTEGER,
            this.widgetOptions.maxScale || Number.MAX_SAFE_INTEGER,
          )),
          r !== n)
        )
          if (this.widgetOptions.zoomAtMousePosition) {
            const t = this.graph.coord.clientToLocalPoint(this.startPos)
            this.graph.zoom(r, { absolute: !0, center: t.clone() })
          } else this.graph.zoom(r, { absolute: !0 })
        ;(this.currentScale = null), (this.cumulatedFactor = 1)
      }
    }
    dispose() {
      this.disable()
    }
  }
  Qv([h.dispose()], tb.prototype, 'dispose', null)
  var eb,
    nb = function (t, e, n, r) {
      var i,
        s = arguments.length,
        o =
          s < 3
            ? e
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(e, n))
            : r
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        o = Reflect.decorate(t, e, n, r)
      else
        for (var a = t.length - 1; a >= 0; a--)
          (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
      return s > 3 && o && Object.defineProperty(e, n, o), o
    }
  class rb extends zv {
    init() {
      ;(this.resetRenderArea = $s(this.resetRenderArea, 200)),
        this.resetRenderArea(),
        this.startListening()
    }
    startListening() {
      this.graph.on('translate', this.resetRenderArea, this),
        this.graph.on('scale', this.resetRenderArea, this),
        this.graph.on('resize', this.resetRenderArea, this)
    }
    stopListening() {
      this.graph.off('translate', this.resetRenderArea, this),
        this.graph.off('scale', this.resetRenderArea, this),
        this.graph.off('resize', this.resetRenderArea, this)
    }
    enableVirtualRender() {
      ;(this.options.virtual = !0), this.resetRenderArea()
    }
    disableVirtualRender() {
      ;(this.options.virtual = !1), this.graph.renderer.setRenderArea(void 0)
    }
    resetRenderArea() {
      if (this.options.virtual) {
        const t = this.graph.getGraphArea()
        this.graph.renderer.setRenderArea(t)
      }
    }
    dispose() {
      this.stopListening()
    }
  }
  nb([zv.dispose()], rb.prototype, 'dispose', null)
  class ib {
    constructor() {
      ;(this.isFlushing = !1),
        (this.isFlushPending = !1),
        (this.scheduleId = 0),
        (this.queue = []),
        (this.frameInterval = 33),
        (this.initialTime = Date.now())
    }
    queueJob(t) {
      const e = this.findInsertionIndex(t)
      e >= 0 && this.queue.splice(e, 0, t)
    }
    queueFlush() {
      this.isFlushing ||
        this.isFlushPending ||
        ((this.isFlushPending = !0), this.scheduleJob())
    }
    queueFlushSync() {
      this.isFlushing ||
        this.isFlushPending ||
        ((this.isFlushPending = !0), this.flushJobsSync())
    }
    clearJobs() {
      ;(this.queue.length = 0),
        (this.isFlushing = !1),
        (this.isFlushPending = !1),
        this.cancelScheduleJob()
    }
    flushJobs() {
      ;(this.isFlushPending = !1), (this.isFlushing = !0)
      const t = this.getCurrentTime()
      let e
      for (; (e = this.queue.shift()); ) {
        try {
          e.cb()
        } catch (t) {}
        if (this.getCurrentTime() - t >= this.frameInterval) break
      }
      ;(this.isFlushing = !1), this.queue.length && this.queueFlush()
    }
    flushJobsSync() {
      let t
      for (
        this.isFlushPending = !1, this.isFlushing = !0;
        (t = this.queue.shift());

      )
        try {
          t.cb()
        } catch (t) {}
      this.isFlushing = !1
    }
    findInsertionIndex(t) {
      let e = 0
      for (; this.queue[e] && this.queue[e].priority >= t.priority; ) e += 1
      return e
    }
    scheduleJob() {
      'requestIdleCallback' in window
        ? (this.scheduleId && this.cancelScheduleJob(),
          (this.scheduleId = window.requestIdleCallback(
            this.flushJobs.bind(this),
            { timeout: 100 },
          )))
        : (this.scheduleId && this.cancelScheduleJob(),
          (this.scheduleId = window.setTimeout(this.flushJobs.bind(this))))
    }
    cancelScheduleJob() {
      'cancelIdleCallback' in window
        ? (this.scheduleId && window.cancelIdleCallback(this.scheduleId),
          (this.scheduleId = 0))
        : (this.scheduleId && clearTimeout(this.scheduleId),
          (this.scheduleId = 0))
    }
    getCurrentTime() {
      return 'object' == typeof performance &&
        'function' == typeof performance.now
        ? performance.now()
        : Date.now() - this.initialTime
    }
  }
  !(function (t) {
    ;(t[(t.RenderEdge = 1)] = 'RenderEdge'),
      (t[(t.RenderNode = 2)] = 'RenderNode'),
      (t[(t.Update = 3)] = 'Update')
  })(eb || (eb = {}))
  var sb = function (t, e, n, r) {
    var i,
      s = arguments.length,
      o =
        s < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(t, e, n, r)
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }
  class ob extends h {
    constructor(t) {
      super(),
        (this.views = {}),
        (this.queue = new ib()),
        (this.graph = t),
        this.init()
    }
    get model() {
      return this.graph.model
    }
    get container() {
      return this.graph.view.stage
    }
    init() {
      this.startListening()
    }
    startListening() {
      this.model.on('reseted', this.onModelReseted, this),
        this.model.on('cell:added', this.onCellAdded, this),
        this.model.on('cell:removed', this.onCellRemoved, this),
        this.model.on('cell:change:zIndex', this.onCellZIndexChanged, this),
        this.model.on('cell:change:visible', this.onCellVisibleChanged, this)
    }
    stopListening() {
      this.model.off('reseted', this.onModelReseted, this),
        this.model.off('cell:added', this.onCellAdded, this),
        this.model.off('cell:removed', this.onCellRemoved, this),
        this.model.off('cell:change:zIndex', this.onCellZIndexChanged, this),
        this.model.off('cell:change:visible', this.onCellVisibleChanged, this)
    }
    onModelReseted({ options: t }) {
      this.queue.clearJobs(),
        this.removeZPivots(),
        this.removeViews(),
        this.renderViews(this.model.getCells(), t)
    }
    onCellAdded({ cell: t, options: e }) {
      this.renderViews([t], e)
    }
    onCellRemoved({ cell: t, options: e }) {
      const n = this.views[t.id]
      if (n) {
        const t = n.view
        this.requestViewUpdate(t, ob.FLAG_REMOVE, e)
      }
    }
    onCellZIndexChanged({ cell: t, options: e }) {
      const n = this.views[t.id]
      n && this.requestViewUpdate(n.view, ob.FLAG_INSERT, e, eb.Update, !0)
    }
    onCellVisibleChanged({ cell: t, current: e }) {
      this.toggleVisible(t, !!e)
    }
    requestViewUpdate(t, e, n = {}, r = eb.Update, i = !0) {
      const s = t.cell.id,
        o = this.views[s]
      if (!o) return
      ;(o.flag = e),
        (o.options = n),
        this.queue.queueJob({
          id: s,
          priority: r,
          cb: () => {
            this.renderViewInArea(t, e, n)
          },
        })
      this.getEffectedEdges(t).forEach((t) => {
        this.requestViewUpdate(t.view, t.flag, n, r, !1)
      }),
        i && this.flush()
    }
    setRenderArea(t) {
      ;(this.renderArea = t), this.flushWaittingViews()
    }
    isViewMounted(t) {
      if (null == t) return !1
      const e = this.views[t.cell.id]
      return !!e && e.state === ob.ViewState.MOUNTED
    }
    renderViews(t, e = {}) {
      t.sort((t, e) => (t.isNode() && e.isEdge() ? -1 : 0)),
        t.forEach((t) => {
          const n = t.id
          let r = 0,
            i = this.views[n]
          if (i) r = ob.FLAG_INSERT
          else {
            const s = this.createCellView(t)
            s &&
              ((s.graph = this.graph),
              (r = ob.FLAG_INSERT | s.getBootstrapFlag()),
              (i = {
                view: s,
                flag: r,
                options: e,
                state: ob.ViewState.CREATED,
              }),
              (this.views[n] = i))
          }
          this.requestViewUpdate(
            i.view,
            r,
            e,
            t.isNode() ? eb.RenderNode : eb.RenderEdge,
            !1,
          )
        }),
        this.flush()
    }
    renderViewInArea(t, e, n = {}) {
      const r = t.cell.id,
        i = this.views[r]
      if (!i) return
      let s = 0
      this.isInRenderArea(t) || i.state === ob.ViewState.MOUNTED
        ? ((s = this.updateView(t, e, n)), (i.flag = s))
        : (i.state = ob.ViewState.WAITTING),
        s && console.log('left flag', s)
    }
    flush() {
      this.graph.options.async
        ? this.queue.queueFlush()
        : this.queue.queueFlushSync()
    }
    flushWaittingViews() {
      const t = Object.keys(this.views)
      for (let e = 0, n = t.length; e < n; e += 1) {
        const n = this.views[t[e]]
        if (n && n.state === ob.ViewState.WAITTING) {
          const { view: t, flag: e, options: r } = n,
            i = t.cell.isNode() ? eb.RenderNode : eb.RenderEdge
          this.requestViewUpdate(t, e, r, i, !1)
        }
      }
      this.flush()
    }
    updateView(t, e, n = {}) {
      if (null == t) return 0
      if (Tm.isCellView(t)) {
        if (e & ob.FLAG_REMOVE) return this.removeView(t.cell), 0
        e & ob.FLAG_INSERT && (this.insertView(t), (e ^= ob.FLAG_INSERT))
      }
      return e ? t.confirmUpdate(e, n) : 0
    }
    insertView(t) {
      const e = this.views[t.cell.id]
      if (e) {
        const n = t.cell.getZIndex(),
          r = this.addZPivot(n)
        this.container.insertBefore(t.container, r),
          (e.state = ob.ViewState.MOUNTED)
      }
    }
    removeViews() {
      Object.keys(this.views).forEach((t) => {
        const e = this.views[t]
        e && this.removeView(e.view.cell)
      }),
        (this.views = {})
    }
    removeView(t) {
      const e = this.views[t.id]
      return e && (e.view.remove(), delete this.views[t.id]), e.view
    }
    toggleVisible(t, e) {
      const n = this.model.getConnectedEdges(t)
      for (let t = 0, r = n.length; t < r; t += 1) {
        const r = n[t]
        if (e) {
          const t = r.getSourceCell(),
            e = r.getTargetCell()
          if ((t && !t.isVisible()) || (e && !e.isVisible())) continue
          this.toggleVisible(r, !0)
        } else this.toggleVisible(r, !1)
      }
      const r = this.views[t.id]
      r && Rg(r.view.container, { display: e ? 'unset' : 'none' })
    }
    addZPivot(t = 0) {
      null == this.zPivots && (this.zPivots = {})
      const e = this.zPivots
      let n = e[t]
      if (n) return n
      n = e[t] = document.createComment(`z-index:${t + 1}`)
      let r = -1 / 0
      for (const n in e) {
        const e = +n
        e < t && e > r && (r = e)
      }
      const i = this.container
      if (r !== -1 / 0) {
        const t = e[r]
        i.insertBefore(n, t.nextSibling)
      } else i.insertBefore(n, i.firstChild)
      return n
    }
    removeZPivots() {
      this.zPivots &&
        Object.keys(this.zPivots).forEach((t) => {
          const e = this.zPivots[t]
          e && e.parentNode && e.parentNode.removeChild(e)
        }),
        (this.zPivots = {})
    }
    createCellView(t) {
      const e = { graph: this.graph },
        n = t.view
      if (null != n && 'string' == typeof n) {
        const r = Tm.registry.get(n)
        return r ? new r(t, e) : Tm.registry.onNotFound(n)
      }
      return t.isNode() ? new Bv(t, e) : t.isEdge() ? new Rv(t, e) : null
    }
    getEffectedEdges(t) {
      const e = [],
        n = t.cell,
        r = this.model.getConnectedEdges(n)
      for (let t = 0, i = r.length; t < i; t += 1) {
        const i = r[t],
          s = this.views[i.id]
        if (!s) continue
        const o = s.view,
          a = ['update']
        i.getTargetCell() === n && a.push('target'),
          i.getSourceCell() === n && a.push('source'),
          e.push({ id: i.id, view: o, flag: o.getFlag(a) })
      }
      return e
    }
    isInRenderArea(t) {
      return (
        !this.renderArea ||
        this.renderArea.isIntersectWithRect(t.cell.getBBox())
      )
    }
    dispose() {
      this.stopListening()
    }
  }
  sb([h.dispose()], ob.prototype, 'dispose', null),
    (function (t) {
      ;(t.FLAG_INSERT = 1 << 30),
        (t.FLAG_REMOVE = 1 << 29),
        (t.FLAG_RENDER = 67108863)
    })(ob || (ob = {})),
    (function (t) {
      var e
      ;((e = t.ViewState || (t.ViewState = {}))[(e.CREATED = 0)] = 'CREATED'),
        (e[(e.MOUNTED = 1)] = 'MOUNTED'),
        (e[(e.WAITTING = 2)] = 'WAITTING')
    })(ob || (ob = {}))
  var ab = function (t, e, n, r) {
    var i,
      s = arguments.length,
      o =
        s < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(t, e, n, r)
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }
  class lb extends zv {
    constructor() {
      super(...arguments), (this.schedule = new ob(this.graph))
    }
    requestViewUpdate(t, e, n = {}) {
      this.schedule.requestViewUpdate(t, e, n)
    }
    isViewMounted(t) {
      return this.schedule.isViewMounted(t)
    }
    setRenderArea(t) {
      this.schedule.setRenderArea(t)
    }
    findViewByElem(t) {
      if (null == t) return null
      const e = this.options.container,
        n =
          'string' == typeof t
            ? e.querySelector(t)
            : t instanceof Element
            ? t
            : t[0]
      if (n) {
        const t = this.graph.view.findAttr('data-cell-id', n)
        if (t) {
          const e = this.schedule.views
          if (e[t]) return e[t].view
        }
      }
      return null
    }
    findViewByCell(t) {
      if (null == t) return null
      const e = vv.isCell(t) ? t.id : t,
        n = this.schedule.views
      return n[e] ? n[e].view : null
    }
    findViewsFromPoint(t) {
      const e = { x: t.x, y: t.y }
      return this.model
        .getCells()
        .map((t) => this.findViewByCell(t))
        .filter(
          (t) =>
            null != t &&
            em
              .getBBox(t.container, { target: this.view.stage })
              .containsPoint(e),
        )
    }
    findViewsInArea(t, e = {}) {
      const n = zd.create(t)
      return this.model
        .getNodes()
        .map((t) => this.findViewByCell(t))
        .filter((t) => {
          if (t) {
            const r = em.getBBox(t.container, { target: this.graph.view.stage })
            return e.strict ? n.containsRect(r) : n.isIntersectWithRect(r)
          }
          return !1
        })
    }
    findEdgeViewsInArea(t, e = {}) {
      const n = zd.create(t)
      return this.model
        .getEdges()
        .map((t) => this.findViewByCell(t))
        .filter((t) => {
          if (t) {
            const r = em.getBBox(t.container, { target: this.view.stage })
            return (
              0 === r.width
                ? r.inflate(1, 0)
                : 0 === r.height && r.inflate(0, 1),
              e.strict ? n.containsRect(r) : n.isIntersectWithRect(r)
            )
          }
          return !1
        })
    }
    dispose() {
      this.schedule.dispose()
    }
  }
  ab([zv.dispose()], lb.prototype, 'dispose', null)
  var cb = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  class hb extends zv {
    get cid() {
      return this.graph.view.cid
    }
    get svg() {
      return this.view.svg
    }
    get defs() {
      return this.view.defs
    }
    isDefined(t) {
      return null != this.svg.getElementById(t)
    }
    filter(t) {
      let e = t.id
      const n = t.name
      if (
        (e || (e = `filter-${n}-${this.cid}-${Au(JSON.stringify(t))}`),
        !this.isDefined(e))
      ) {
        const r = Cf.registry.get(n)
        if (null == r) return Cf.registry.onNotFound(n)
        const i = r(t.args || {}),
          s = Object.assign(
            Object.assign(
              {
                x: -1,
                y: -1,
                width: 3,
                height: 3,
                filterUnits: 'objectBoundingBox',
              },
              t.attrs,
            ),
            { id: e },
          )
        zg.create(Pm.sanitize(i), s).appendTo(this.defs)
      }
      return e
    }
    gradient(t) {
      let e = t.id
      const n = t.type
      if (
        (e || (e = `gradient-${n}-${this.cid}-${Au(JSON.stringify(t))}`),
        !this.isDefined(e))
      ) {
        const r = t.stops.map((t) => {
            const e =
              null != t.opacity && Number.isFinite(t.opacity) ? t.opacity : 1
            return `<stop offset="${t.offset}" stop-color="${t.color}" stop-opacity="${e}"/>`
          }),
          i = `<${n}>${r.join('')}</${n}>`,
          s = Object.assign({ id: e }, t.attrs)
        zg.create(i, s).appendTo(this.defs)
      }
      return e
    }
    marker(t) {
      const {
          id: e,
          refX: n,
          refY: r,
          markerUnits: i,
          markerOrient: s,
          tagName: o,
          children: a,
        } = t,
        l = cb(t, [
          'id',
          'refX',
          'refY',
          'markerUnits',
          'markerOrient',
          'tagName',
          'children',
        ])
      let c = e
      if (
        (c || (c = `marker-${this.cid}-${Au(JSON.stringify(t))}`),
        !this.isDefined(c))
      ) {
        'path' !== o && delete l.d
        const t = zg.create(
          'marker',
          {
            refX: n,
            refY: r,
            id: c,
            overflow: 'visible',
            orient: null != s ? s : 'auto',
            markerUnits: i || 'userSpaceOnUse',
          },
          a
            ? a.map((t) => {
                var { tagName: e } = t,
                  n = cb(t, ['tagName'])
                return zg.create(
                  `${e}` || 'path',
                  Pg(Object.assign(Object.assign({}, l), n)),
                )
              })
            : [zg.create(o || 'path', Pg(l))],
        )
        this.defs.appendChild(t.node)
      }
      return c
    }
    remove(t) {
      const e = this.svg.getElementById(t)
      e && e.parentNode && e.parentNode.removeChild(e)
    }
  }
  class ub extends zv {
    getClientMatrix() {
      return sd(this.view.stage.getScreenCTM())
    }
    getClientOffset() {
      const t = this.view.svg.getBoundingClientRect()
      return new Vd(t.left, t.top)
    }
    getPageOffset() {
      return this.getClientOffset().translate(window.scrollX, window.scrollY)
    }
    snapToGrid(t, e) {
      return (
        'number' == typeof t
          ? this.clientToLocalPoint(t, e)
          : this.clientToLocalPoint(t.x, t.y)
      ).snapToGrid(this.graph.getGridSize())
    }
    localToGraphPoint(t, e) {
      const n = Vd.create(t, e)
      return em.transformPoint(n, this.graph.matrix())
    }
    localToClientPoint(t, e) {
      const n = Vd.create(t, e)
      return em.transformPoint(n, this.getClientMatrix())
    }
    localToPagePoint(t, e) {
      return (
        'number' == typeof t
          ? this.localToGraphPoint(t, e)
          : this.localToGraphPoint(t)
      ).translate(this.getPageOffset())
    }
    localToGraphRect(t, e, n, r) {
      const i = zd.create(t, e, n, r)
      return em.transformRectangle(i, this.graph.matrix())
    }
    localToClientRect(t, e, n, r) {
      const i = zd.create(t, e, n, r)
      return em.transformRectangle(i, this.getClientMatrix())
    }
    localToPageRect(t, e, n, r) {
      return (
        'number' == typeof t
          ? this.localToGraphRect(t, e, n, r)
          : this.localToGraphRect(t)
      ).translate(this.getPageOffset())
    }
    graphToLocalPoint(t, e) {
      const n = Vd.create(t, e)
      return em.transformPoint(n, this.graph.matrix().inverse())
    }
    clientToLocalPoint(t, e) {
      const n = Vd.create(t, e)
      return em.transformPoint(n, this.getClientMatrix().inverse())
    }
    clientToGraphPoint(t, e) {
      const n = Vd.create(t, e)
      return em.transformPoint(
        n,
        this.graph.matrix().multiply(this.getClientMatrix().inverse()),
      )
    }
    pageToLocalPoint(t, e) {
      const n = Vd.create(t, e).diff(this.getPageOffset())
      return this.graphToLocalPoint(n)
    }
    graphToLocalRect(t, e, n, r) {
      const i = zd.create(t, e, n, r)
      return em.transformRectangle(i, this.graph.matrix().inverse())
    }
    clientToLocalRect(t, e, n, r) {
      const i = zd.create(t, e, n, r)
      return em.transformRectangle(i, this.getClientMatrix().inverse())
    }
    clientToGraphRect(t, e, n, r) {
      const i = zd.create(t, e, n, r)
      return em.transformRectangle(
        i,
        this.graph.matrix().multiply(this.getClientMatrix().inverse()),
      )
    }
    pageToLocalRect(t, e, n, r) {
      const i = zd.create(t, e, n, r),
        s = this.getPageOffset()
      return (i.x -= s.x), (i.y -= s.y), this.graphToLocalRect(i)
    }
  }
  var gb = function (t, e, n, r) {
    var i,
      s = arguments.length,
      o =
        s < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(t, e, n, r)
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }
  class db extends zv {
    constructor() {
      super(...arguments), (this.highlights = {})
    }
    init() {
      this.startListening()
    }
    startListening() {
      this.graph.on('cell:highlight', this.onCellHighlight, this),
        this.graph.on('cell:unhighlight', this.onCellUnhighlight, this)
    }
    stopListening() {
      this.graph.off('cell:highlight', this.onCellHighlight, this),
        this.graph.off('cell:unhighlight', this.onCellUnhighlight, this)
    }
    onCellHighlight({ view: t, magnet: e, options: n = {} }) {
      const r = this.resolveHighlighter(n)
      if (!r) return
      const i = this.getHighlighterId(e, r)
      if (!this.highlights[i]) {
        const n = r.highlighter
        n.highlight(t, e, Object.assign({}, r.args)),
          (this.highlights[i] = {
            cellView: t,
            magnet: e,
            highlighter: n,
            args: r.args,
          })
      }
    }
    onCellUnhighlight({ magnet: t, options: e = {} }) {
      const n = this.resolveHighlighter(e)
      if (!n) return
      const r = this.getHighlighterId(t, n)
      this.unhighlight(r)
    }
    resolveHighlighter(t) {
      const e = this.options
      let n = t.highlighter
      if (null == n) {
        const r = t.type
        n = (r && e.highlighting[r]) || e.highlighting.default
      }
      if (null == n) return null
      const r = 'string' == typeof n ? { name: n } : n,
        i = r.name,
        s = sm.registry.get(i)
      return null == s
        ? sm.registry.onNotFound(i)
        : (sm.check(i, s), { name: i, highlighter: s, args: r.args || {} })
    }
    getHighlighterId(t, e) {
      return eg(t), e.name + t.id + JSON.stringify(e.args)
    }
    unhighlight(t) {
      const e = this.highlights[t]
      e &&
        (e.highlighter.unhighlight(e.cellView, e.magnet, e.args),
        delete this.highlights[t])
    }
    dispose() {
      Object.keys(this.highlights).forEach((t) => this.unhighlight(t)),
        this.stopListening()
    }
  }
  gb([db.dispose()], db.prototype, 'dispose', null)
  var fb = function (t, e, n, r) {
    var i,
      s = arguments.length,
      o =
        s < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(t, e, n, r)
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }
  class pb extends zv {
    getScroller() {
      const t = this.graph.getPlugin('scroller')
      return t && t.options.enabled ? t : null
    }
    getContainer() {
      const t = this.getScroller()
      return t ? t.container.parentElement : this.graph.container.parentElement
    }
    getSensorTarget() {
      const t = this.options.autoResize
      if (t) return 'boolean' == typeof t ? this.getContainer() : t
    }
    init() {
      if (this.options.autoResize) {
        const t = this.getSensorTarget()
        t &&
          Md.bind(t, () => {
            const e = t.offsetWidth,
              n = t.offsetHeight
            this.resize(e, n)
          })
      }
    }
    resize(t, e) {
      const n = this.getScroller()
      n ? n.resize(t, e) : this.graph.transform.resize(t, e)
    }
    dispose() {
      Md.clear(this.graph.container)
    }
  }
  fb([zv.dispose()], pb.prototype, 'dispose', null)
  var mb = function (t, e, n, r) {
    var i,
      s = arguments.length,
      o =
        s < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(t, e, n, r)
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o)
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }
  class yb extends bu {
    constructor(t) {
      super(),
        (this.installedPlugins = new Set()),
        (this.options = qv.get(t)),
        (this.css = new Fv(this)),
        (this.view = new Vv(this)),
        (this.defs = new hb(this)),
        (this.coord = new ub(this)),
        (this.transform = new Jv(this)),
        (this.highlight = new db(this)),
        (this.grid = new Uv(this)),
        (this.background = new Yv(this)),
        (this.model = this.options.model ? this.options.model : new Ov()),
        (this.model.graph = this),
        (this.renderer = new lb(this)),
        (this.panning = new Kv(this)),
        (this.mousewheel = new tb(this)),
        (this.virtualRender = new rb(this)),
        (this.size = new pb(this))
    }
    get container() {
      return this.options.container
    }
    get [Symbol.toStringTag]() {
      return yb.toStringTag
    }
    isNode(t) {
      return t.isNode()
    }
    isEdge(t) {
      return t.isEdge()
    }
    resetCells(t, e = {}) {
      return this.model.resetCells(t, e), this
    }
    clearCells(t = {}) {
      return this.model.clear(t), this
    }
    toJSON(t = {}) {
      return this.model.toJSON(t)
    }
    parseJSON(t) {
      return this.model.parseJSON(t)
    }
    fromJSON(t, e = {}) {
      return this.model.fromJSON(t, e), this
    }
    getCellById(t) {
      return this.model.getCell(t)
    }
    addNode(t, e = {}) {
      return this.model.addNode(t, e)
    }
    addNodes(t, e = {}) {
      return this.addCell(
        t.map((t) => (wv.isNode(t) ? t : this.createNode(t))),
        e,
      )
    }
    createNode(t) {
      return this.model.createNode(t)
    }
    removeNode(t, e = {}) {
      return this.model.removeCell(t, e)
    }
    addEdge(t, e = {}) {
      return this.model.addEdge(t, e)
    }
    addEdges(t, e = {}) {
      return this.addCell(
        t.map((t) => (Av.isEdge(t) ? t : this.createEdge(t))),
        e,
      )
    }
    removeEdge(t, e = {}) {
      return this.model.removeCell(t, e)
    }
    createEdge(t) {
      return this.model.createEdge(t)
    }
    addCell(t, e = {}) {
      return this.model.addCell(t, e), this
    }
    removeCell(t, e = {}) {
      return this.model.removeCell(t, e)
    }
    removeCells(t, e = {}) {
      return this.model.removeCells(t, e)
    }
    removeConnectedEdges(t, e = {}) {
      return this.model.removeConnectedEdges(t, e)
    }
    disconnectConnectedEdges(t, e = {}) {
      return this.model.disconnectConnectedEdges(t, e), this
    }
    hasCell(t) {
      return this.model.has(t)
    }
    getCells() {
      return this.model.getCells()
    }
    getCellCount() {
      return this.model.total()
    }
    getNodes() {
      return this.model.getNodes()
    }
    getEdges() {
      return this.model.getEdges()
    }
    getOutgoingEdges(t) {
      return this.model.getOutgoingEdges(t)
    }
    getIncomingEdges(t) {
      return this.model.getIncomingEdges(t)
    }
    getConnectedEdges(t, e = {}) {
      return this.model.getConnectedEdges(t, e)
    }
    getRootNodes() {
      return this.model.getRoots()
    }
    getLeafNodes() {
      return this.model.getLeafs()
    }
    isRootNode(t) {
      return this.model.isRoot(t)
    }
    isLeafNode(t) {
      return this.model.isLeaf(t)
    }
    getNeighbors(t, e = {}) {
      return this.model.getNeighbors(t, e)
    }
    isNeighbor(t, e, n = {}) {
      return this.model.isNeighbor(t, e, n)
    }
    getSuccessors(t, e = {}) {
      return this.model.getSuccessors(t, e)
    }
    isSuccessor(t, e, n = {}) {
      return this.model.isSuccessor(t, e, n)
    }
    getPredecessors(t, e = {}) {
      return this.model.getPredecessors(t, e)
    }
    isPredecessor(t, e, n = {}) {
      return this.model.isPredecessor(t, e, n)
    }
    getCommonAncestor(...t) {
      return this.model.getCommonAncestor(...t)
    }
    getSubGraph(t, e = {}) {
      return this.model.getSubGraph(t, e)
    }
    cloneSubGraph(t, e = {}) {
      return this.model.cloneSubGraph(t, e)
    }
    cloneCells(t) {
      return this.model.cloneCells(t)
    }
    getNodesFromPoint(t, e) {
      return this.model.getNodesFromPoint(t, e)
    }
    getNodesInArea(t, e, n, r, i) {
      return this.model.getNodesInArea(t, e, n, r, i)
    }
    getNodesUnderNode(t, e = {}) {
      return this.model.getNodesUnderNode(t, e)
    }
    searchCell(t, e, n = {}) {
      return this.model.search(t, e, n), this
    }
    getShortestPath(t, e, n = {}) {
      return this.model.getShortestPath(t, e, n)
    }
    getAllCellsBBox() {
      return this.model.getAllCellsBBox()
    }
    getCellsBBox(t, e = {}) {
      return this.model.getCellsBBox(t, e)
    }
    startBatch(t, e = {}) {
      this.model.startBatch(t, e)
    }
    stopBatch(t, e = {}) {
      this.model.stopBatch(t, e)
    }
    batchUpdate(t, e, n) {
      const r = 'string' == typeof t ? t : 'update',
        i = 'string' == typeof t ? e : t,
        s = 'function' == typeof e ? n : e
      this.startBatch(r, s)
      const o = i()
      return this.stopBatch(r, s), o
    }
    updateCellId(t, e) {
      return this.model.updateCellId(t, e)
    }
    findView(t) {
      return vv.isCell(t) ? this.findViewByCell(t) : this.findViewByElem(t)
    }
    findViews(t) {
      return zd.isRectangleLike(t)
        ? this.findViewsInArea(t)
        : Vd.isPointLike(t)
        ? this.findViewsFromPoint(t)
        : []
    }
    findViewByCell(t) {
      return this.renderer.findViewByCell(t)
    }
    findViewByElem(t) {
      return this.renderer.findViewByElem(t)
    }
    findViewsFromPoint(t, e) {
      const n = 'number' == typeof t ? { x: t, y: e } : t
      return this.renderer.findViewsFromPoint(n)
    }
    findViewsInArea(t, e, n, r, i) {
      const s = 'number' == typeof t ? { x: t, y: e, width: n, height: r } : t,
        o = 'number' == typeof t ? i : e
      return this.renderer.findViewsInArea(s, o)
    }
    matrix(t) {
      return void 0 === t
        ? this.transform.getMatrix()
        : (this.transform.setMatrix(t), this)
    }
    resize(t, e) {
      const n = this.getPlugin('scroller')
      return n ? n.resize() : this.transform.resize(t, e), this
    }
    scale(t, e = t, n = 0, r = 0) {
      return void 0 === t
        ? this.transform.getScale()
        : (this.transform.scale(t, e, n, r), this)
    }
    zoom(t, e) {
      const n = this.getPlugin('scroller')
      if (n) {
        if (void 0 === t) return n.zoom()
        n.zoom(t, e)
      } else {
        if (void 0 === t) return this.transform.getZoom()
        this.transform.zoom(t, e)
      }
      return this
    }
    zoomTo(t, e = {}) {
      const n = this.getPlugin('scroller')
      return (
        n
          ? n.zoom(t, Object.assign(Object.assign({}, e), { absolute: !0 }))
          : this.transform.zoom(
              t,
              Object.assign(Object.assign({}, e), { absolute: !0 }),
            ),
        this
      )
    }
    zoomToRect(t, e = {}) {
      const n = this.getPlugin('scroller')
      return n ? n.zoomToRect(t, e) : this.transform.zoomToRect(t, e), this
    }
    zoomToFit(t = {}) {
      const e = this.getPlugin('scroller')
      return e ? e.zoomToFit(t) : this.transform.zoomToFit(t), this
    }
    rotate(t, e, n) {
      return void 0 === t
        ? this.transform.getRotation()
        : (this.transform.rotate(t, e, n), this)
    }
    translate(t, e) {
      return void 0 === t
        ? this.transform.getTranslation()
        : (this.transform.translate(t, e), this)
    }
    translateBy(t, e) {
      const n = this.translate(),
        r = n.tx + t,
        i = n.ty + e
      return this.translate(r, i)
    }
    getGraphArea() {
      return this.transform.getGraphArea()
    }
    getContentArea(t = {}) {
      return this.transform.getContentArea(t)
    }
    getContentBBox(t = {}) {
      return this.transform.getContentBBox(t)
    }
    fitToContent(t, e, n, r) {
      return this.transform.fitToContent(t, e, n, r)
    }
    scaleContentToFit(t = {}) {
      return this.transform.scaleContentToFit(t), this
    }
    center() {
      return this.centerPoint()
    }
    centerPoint(t, e) {
      const n = this.getPlugin('scroller')
      return n ? n.centerPoint(t, e) : this.transform.centerPoint(t, e), this
    }
    centerContent(t) {
      const e = this.getPlugin('scroller')
      return e ? e.centerContent(t) : this.transform.centerContent(t), this
    }
    centerCell(t) {
      const e = this.getPlugin('scroller')
      return e ? e.centerCell(t) : this.transform.centerCell(t), this
    }
    positionPoint(t, e, n) {
      const r = this.getPlugin('scroller')
      return (
        r ? r.positionPoint(t, e, n) : this.transform.positionPoint(t, e, n),
        this
      )
    }
    positionRect(t, e) {
      const n = this.getPlugin('scroller')
      return n ? n.positionRect(t, e) : this.transform.positionRect(t, e), this
    }
    positionCell(t, e) {
      const n = this.getPlugin('scroller')
      return n ? n.positionCell(t, e) : this.transform.positionCell(t, e), this
    }
    positionContent(t, e) {
      const n = this.getPlugin('scroller')
      return (
        n ? n.positionContent(t, e) : this.transform.positionContent(t, e), this
      )
    }
    snapToGrid(t, e) {
      return this.coord.snapToGrid(t, e)
    }
    pageToLocal(t, e, n, r) {
      return zd.isRectangleLike(t)
        ? this.coord.pageToLocalRect(t)
        : 'number' == typeof t &&
          'number' == typeof e &&
          'number' == typeof n &&
          'number' == typeof r
        ? this.coord.pageToLocalRect(t, e, n, r)
        : this.coord.pageToLocalPoint(t, e)
    }
    localToPage(t, e, n, r) {
      return zd.isRectangleLike(t)
        ? this.coord.localToPageRect(t)
        : 'number' == typeof t &&
          'number' == typeof e &&
          'number' == typeof n &&
          'number' == typeof r
        ? this.coord.localToPageRect(t, e, n, r)
        : this.coord.localToPagePoint(t, e)
    }
    clientToLocal(t, e, n, r) {
      return zd.isRectangleLike(t)
        ? this.coord.clientToLocalRect(t)
        : 'number' == typeof t &&
          'number' == typeof e &&
          'number' == typeof n &&
          'number' == typeof r
        ? this.coord.clientToLocalRect(t, e, n, r)
        : this.coord.clientToLocalPoint(t, e)
    }
    localToClient(t, e, n, r) {
      return zd.isRectangleLike(t)
        ? this.coord.localToClientRect(t)
        : 'number' == typeof t &&
          'number' == typeof e &&
          'number' == typeof n &&
          'number' == typeof r
        ? this.coord.localToClientRect(t, e, n, r)
        : this.coord.localToClientPoint(t, e)
    }
    localToGraph(t, e, n, r) {
      return zd.isRectangleLike(t)
        ? this.coord.localToGraphRect(t)
        : 'number' == typeof t &&
          'number' == typeof e &&
          'number' == typeof n &&
          'number' == typeof r
        ? this.coord.localToGraphRect(t, e, n, r)
        : this.coord.localToGraphPoint(t, e)
    }
    graphToLocal(t, e, n, r) {
      return zd.isRectangleLike(t)
        ? this.coord.graphToLocalRect(t)
        : 'number' == typeof t &&
          'number' == typeof e &&
          'number' == typeof n &&
          'number' == typeof r
        ? this.coord.graphToLocalRect(t, e, n, r)
        : this.coord.graphToLocalPoint(t, e)
    }
    clientToGraph(t, e, n, r) {
      return zd.isRectangleLike(t)
        ? this.coord.clientToGraphRect(t)
        : 'number' == typeof t &&
          'number' == typeof e &&
          'number' == typeof n &&
          'number' == typeof r
        ? this.coord.clientToGraphRect(t, e, n, r)
        : this.coord.clientToGraphPoint(t, e)
    }
    defineFilter(t) {
      return this.defs.filter(t)
    }
    defineGradient(t) {
      return this.defs.gradient(t)
    }
    defineMarker(t) {
      return this.defs.marker(t)
    }
    getGridSize() {
      return this.grid.getGridSize()
    }
    setGridSize(t) {
      return this.grid.setGridSize(t), this
    }
    showGrid() {
      return this.grid.show(), this
    }
    hideGrid() {
      return this.grid.hide(), this
    }
    clearGrid() {
      return this.grid.clear(), this
    }
    drawGrid(t) {
      return this.grid.draw(t), this
    }
    updateBackground() {
      return this.background.update(), this
    }
    drawBackground(t) {
      return this.background.draw(t), this
    }
    clearBackground() {
      return this.background.clear(), this
    }
    enableVirtualRender() {
      return this.virtualRender.enableVirtualRender(), this
    }
    disableVirtualRender() {
      return this.virtualRender.disableVirtualRender(), this
    }
    isMouseWheelEnabled() {
      return !this.mousewheel.disabled
    }
    enableMouseWheel() {
      return this.mousewheel.enable(), this
    }
    disableMouseWheel() {
      return this.mousewheel.disable(), this
    }
    toggleMouseWheel(t) {
      return (
        null == t
          ? this.isMouseWheelEnabled()
            ? this.disableMouseWheel()
            : this.enableMouseWheel()
          : t
          ? this.enableMouseWheel()
          : this.disableMouseWheel(),
        this
      )
    }
    isPannable() {
      return this.panning.pannable
    }
    enablePanning() {
      return this.panning.enablePanning(), this
    }
    disablePanning() {
      return this.panning.disablePanning(), this
    }
    togglePanning(t) {
      return (
        null == t
          ? this.isPannable()
            ? this.disablePanning()
            : this.enablePanning()
          : t !== this.isPannable() &&
            (t ? this.enablePanning() : this.disablePanning()),
        this
      )
    }
    use(t, ...e) {
      return (
        this.installedPlugins.has(t) ||
          (this.installedPlugins.add(t), t.init(this, ...e)),
        this
      )
    }
    getPlugin(t) {
      let e
      return (
        this.installedPlugins.forEach((n) => {
          n.name === t && (e = n)
        }),
        e
      )
    }
    dispose() {
      this.clearCells(),
        this.off(),
        this.css.dispose(),
        this.defs.dispose(),
        this.grid.dispose(),
        this.coord.dispose(),
        this.transform.dispose(),
        this.highlight.dispose(),
        this.background.dispose(),
        this.mousewheel.dispose(),
        this.panning.dispose(),
        this.view.dispose(),
        this.renderer.dispose(),
        this.installedPlugins.forEach((t) => {
          t.dispose()
        })
    }
  }
  mb([bu.dispose()], yb.prototype, 'dispose', null),
    (function (t) {
      ;(t.View = Vv),
        (t.Renderer = lb),
        (t.MouseWheel = tb),
        (t.DefsManager = hb),
        (t.GridManager = Uv),
        (t.CoordManager = ub),
        (t.TransformManager = Jv),
        (t.HighlightManager = db),
        (t.BackgroundManager = Yv)
    })(yb || (yb = {})),
    (function (t) {
      ;(t.toStringTag = `X6.${t.name}`),
        (t.isGraph = function (e) {
          if (null == e) return !1
          if (e instanceof t) return !0
          const n = e[Symbol.toStringTag]
          return null == n || n === t.toStringTag
        })
    })(yb || (yb = {})),
    (function (t) {
      t.render = function (e, n) {
        const r = e instanceof HTMLElement ? new t({ container: e }) : new t(e)
        return null != n && r.fromJSON(n), r
      }
    })(yb || (yb = {})),
    (function (t) {
      ;(t.registerNode = wv.registry.register),
        (t.registerEdge = Av.registry.register),
        (t.registerView = Tm.registry.register),
        (t.registerAttr = Jp.registry.register),
        (t.registerGrid = mf.registry.register),
        (t.registerFilter = Cf.registry.register),
        (t.registerNodeTool = Km.registry.register),
        (t.registerEdgeTool = Qm.registry.register),
        (t.registerBackground = xf.registry.register),
        (t.registerHighlighter = sm.registry.register),
        (t.registerPortLayout = gm.registry.register),
        (t.registerPortLabelLayout = xm.registry.register),
        (t.registerMarker = kp.registry.register),
        (t.registerRouter = ev.registry.register),
        (t.registerConnector = hv.registry.register),
        (t.registerAnchor = py.registry.register),
        (t.registerEdgeAnchor = xy.registry.register),
        (t.registerConnectionPoint = Oy.registry.register)
    })(yb || (yb = {})),
    (function (t) {
      ;(t.unregisterNode = wv.registry.unregister),
        (t.unregisterEdge = Av.registry.unregister),
        (t.unregisterView = Tm.registry.unregister),
        (t.unregisterAttr = Jp.registry.unregister),
        (t.unregisterGrid = mf.registry.unregister),
        (t.unregisterFilter = Cf.registry.unregister),
        (t.unregisterNodeTool = Km.registry.unregister),
        (t.unregisterEdgeTool = Qm.registry.unregister),
        (t.unregisterBackground = xf.registry.unregister),
        (t.unregisterHighlighter = sm.registry.unregister),
        (t.unregisterPortLayout = gm.registry.unregister),
        (t.unregisterPortLabelLayout = xm.registry.unregister),
        (t.unregisterMarker = kp.registry.unregister),
        (t.unregisterRouter = ev.registry.unregister),
        (t.unregisterConnector = hv.registry.unregister),
        (t.unregisterAnchor = py.registry.unregister),
        (t.unregisterEdgeAnchor = xy.registry.unregister),
        (t.unregisterConnectionPoint = Oy.registry.unregister)
    })(yb || (yb = {}))
  var vb = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    }
    return n
  }
  class bb extends wv {}
  !(function (t) {
    class e extends Bv {
      init() {
        super.init(),
          this.cell.on('change:*', ({ key: e }) => {
            const n = t.shapeMaps[this.cell.shape]
            if (n) {
              const { effect: t } = n
              ;(t && !t.includes(e)) || this.renderHTMLComponent()
            }
          })
      }
      confirmUpdate(t) {
        const n = super.confirmUpdate(t)
        return this.handleAction(n, e.action, () => this.renderHTMLComponent())
      }
      renderHTMLComponent() {
        const e = this.selectors.foContent
        if (e) {
          gg(e)
          const n = t.shapeMaps[this.cell.shape]
          if (!n) return
          let { html: r } = n
          'function' == typeof r && (r = r(this.cell)),
            r && ('string' == typeof r ? (e.innerHTML = r) : dg(e, r))
        }
      }
    }
    ;(t.View = e),
      (function (t) {
        ;(t.action = 'html'),
          t.config({ bootstrap: [t.action], actions: { html: t.action } }),
          Bv.registry.register('html-view', t)
      })((e = t.View || (t.View = {})))
  })(bb || (bb = {})),
    (function (t) {
      t.config({
        view: 'html-view',
        markup: [
          { tagName: 'rect', selector: 'body' },
          Object.assign({}, Pm.getForeignObjectMarkup()),
          { tagName: 'text', selector: 'label' },
        ],
        attrs: {
          body: {
            fill: 'none',
            stroke: 'none',
            refWidth: '100%',
            refHeight: '100%',
          },
          fo: { refWidth: '100%', refHeight: '100%' },
        },
      }),
        wv.registry.register('html', t)
    })(bb || (bb = {})),
    (function (t) {
      ;(t.shapeMaps = {}),
        (t.register = function (e) {
          const { shape: n, html: r, effect: i, inherit: s } = e,
            o = vb(e, ['shape', 'html', 'effect', 'inherit'])
          if (!n) throw new Error('should specify shape in config')
          ;(t.shapeMaps[n] = { html: r, effect: i }),
            yb.registerNode(n, Object.assign({ inherit: s || 'html' }, o), !0)
        })
    })(bb || (bb = {}))
  var xb = function (t, e, n) {
      return (
        void 0 === e && (e = {}),
        void 0 === n && (n = {}),
        t.forEach(function (t) {
          var r = t.shape
          r &&
            (wv.registry.exist(r) && el(t, e), Av.registry.exist(r) && el(t, n))
        }),
        t
      )
    },
    wb = Object.freeze({
      __proto__: null,
      getSuperGraph: function () {},
      preprocess: xb,
    })
  ;(t.Util = wb),
    (t.Wrapper = function (t) {
      var e = t.children
      return r.exports.useContext(a).graph
        ? o.createElement(o.Fragment, null, e)
        : null
    }),
    (t.XFlow = function (t) {
      var e = t.children,
        n = r.exports.useState(null),
        i = n[0],
        s = n[1]
      return o.createElement(l, { value: { graph: i, setGraph: s } }, e)
    }),
    (t.XFlowGraph = function (t) {
      var e = r.exports.useRef(null),
        n = r.exports.useContext(a),
        i = n.graph,
        s = n.setGraph
      return (
        r.exports.useEffect(function () {
          var n = new yb(c({ container: e.current, autoResize: !0 }, t.configs))
          s(n)
        }, []),
        r.exports.useEffect(
          function () {
            if (i && t.data.length > 0) {
              var e = t.data,
                n = t.defaultNodeOptions,
                r = t.defaultEdgeOptions,
                s = t.centerContent,
                o = xb(e, n, r)
              i.fromJSON(o), s && i.centerContent()
            }
          },
          [i, t.data],
        ),
        o.createElement(
          'div',
          { style: { width: '100%', height: '100%' } },
          o.createElement('div', { ref: e }),
        )
      )
    })
})
//# sourceMappingURL=index.js.map
