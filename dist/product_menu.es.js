function T() {
}
function vt(e) {
  return e();
}
function Qe() {
  return /* @__PURE__ */ Object.create(null);
}
function W(e) {
  e.forEach(vt);
}
function je(e) {
  return typeof e == "function";
}
function _e(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let he;
function Ye(e, t) {
  return he || (he = document.createElement("a")), he.href = t, e === he.href;
}
function Xt(e) {
  return Object.keys(e).length === 0;
}
function _t(e, ...t) {
  if (e == null)
    return T;
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function zt(e, t, r) {
  e.$$.on_destroy.push(_t(t, r));
}
function D(e, t) {
  e.appendChild(t);
}
function w(e, t, r) {
  e.insertBefore(t, r || null);
}
function S(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Wt(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function re(e) {
  return document.createElement(e);
}
function Ve(e) {
  return document.createTextNode(e);
}
function F() {
  return Ve(" ");
}
function Zt() {
  return Ve("");
}
function y(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function qt(e) {
  return Array.from(e.childNodes);
}
function Jt(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function le(e, t, r) {
  e.classList[r ? "add" : "remove"](t);
}
let ne;
function te(e) {
  ne = e;
}
function Qt() {
  if (!ne)
    throw new Error("Function called outside component initialization");
  return ne;
}
function xt(e) {
  Qt().$$.on_mount.push(e);
}
const G = [], Ke = [];
let $ = [];
const et = [], Yt = /* @__PURE__ */ Promise.resolve();
let Me = !1;
function Kt() {
  Me || (Me = !0, Yt.then(yt));
}
function Ce(e) {
  $.push(e);
}
const Ae = /* @__PURE__ */ new Set();
let R = 0;
function yt() {
  if (R !== 0)
    return;
  const e = ne;
  do {
    try {
      for (; R < G.length; ) {
        const t = G[R];
        R++, te(t), er(t.$$);
      }
    } catch (t) {
      throw G.length = 0, R = 0, t;
    }
    for (te(null), G.length = 0, R = 0; Ke.length; )
      Ke.pop()();
    for (let t = 0; t < $.length; t += 1) {
      const r = $[t];
      Ae.has(r) || (Ae.add(r), r());
    }
    $.length = 0;
  } while (G.length);
  for (; et.length; )
    et.pop()();
  Me = !1, Ae.clear(), te(e);
}
function er(e) {
  if (e.fragment !== null) {
    e.update(), W(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Ce);
  }
}
function tr(e) {
  const t = [], r = [];
  $.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach((n) => n()), $ = t;
}
const ce = /* @__PURE__ */ new Set();
let L;
function me() {
  L = {
    r: 0,
    c: [],
    p: L
    // parent group
  };
}
function pe() {
  L.r || W(L.c), L = L.p;
}
function v(e, t) {
  e && e.i && (ce.delete(e), e.i(t));
}
function x(e, t, r, n) {
  if (e && e.o) {
    if (ce.has(e))
      return;
    ce.add(e), L.c.push(() => {
      ce.delete(e), n && (r && e.d(1), n());
    }), e.o(t);
  } else
    n && n();
}
function k(e) {
  e && e.c();
}
function M(e, t, r, n) {
  const { fragment: i, after_update: s } = e.$$;
  i && i.m(t, r), n || Ce(() => {
    const o = e.$$.on_mount.map(vt).filter(je);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : W(o), e.$$.on_mount = [];
  }), s.forEach(Ce);
}
function C(e, t) {
  const r = e.$$;
  r.fragment !== null && (tr(r.after_update), W(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function rr(e, t) {
  e.$$.dirty[0] === -1 && (G.push(e), Kt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Xe(e, t, r, n, i, s, o, u = [-1]) {
  const f = ne;
  te(e);
  const a = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: T,
    not_equal: i,
    bound: Qe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Qe(),
    dirty: u,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  o && o(a.root);
  let h = !1;
  if (a.ctx = r ? r(e, t.props || {}, (l, c, ...m) => {
    const E = m.length ? m[0] : c;
    return a.ctx && i(a.ctx[l], a.ctx[l] = E) && (!a.skip_bound && a.bound[l] && a.bound[l](E), h && rr(e, l)), c;
  }) : [], a.update(), h = !0, W(a.before_update), a.fragment = n ? n(a.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = qt(t.target);
      a.fragment && a.fragment.l(l), l.forEach(S);
    } else
      a.fragment && a.fragment.c();
    t.intro && v(e.$$.fragment), M(e, t.target, t.anchor, t.customElement), yt();
  }
  te(f);
}
class ze {
  $destroy() {
    C(this, 1), this.$destroy = T;
  }
  $on(t, r) {
    if (!je(r))
      return T;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(r), () => {
      const i = n.indexOf(r);
      i !== -1 && n.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !Xt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function Se(e) {
  const t = {};
  for (const n in e)
    t[n] = [r(e[n])];
  function r(n) {
    return function() {
      return {
        c: T,
        m: function(s, o) {
          w(s, n.cloneNode(!0), o);
        },
        d: function(s) {
          s && n.innerHTML && S(n);
        },
        l: T
      };
    };
  }
  return t;
}
function nr(e) {
  class t extends HTMLElement {
    constructor() {
      super(), this.slotcount = 0;
      let n = e.shadow ? this.attachShadow({ mode: "open" }) : this;
      if (e.href && e.shadow) {
        let i = document.createElement("link");
        i.setAttribute("href", e.href), i.setAttribute("rel", "stylesheet"), n.appendChild(i);
      }
      e.shadow ? (this._root = document.createElement("div"), n.appendChild(this._root)) : this._root = n;
    }
    static get observedAttributes() {
      return e.attributes || [];
    }
    connectedCallback() {
      let n = e.defaults ? e.defaults : {}, i;
      if (n.$$scope = {}, Array.from(this.attributes).forEach((s) => n[s.name] = s.value), n.$$scope = {}, e.shadow) {
        i = this.getShadowSlots();
        let s = e.defaults ? e.defaults : {};
        s.$$scope = {}, this.observer = new MutationObserver(this.processMutations.bind(this, { root: this._root, props: s })), this.observer.observe(this, { childList: !0, subtree: !0, attributes: !1 });
      } else
        i = this.getSlots();
      this.slotcount = Object.keys(i).length, n.$$slots = Se(i), this.elem = new e.component({ target: this._root, props: n });
    }
    disconnectedCallback() {
      this.observe && this.observer.disconnect();
      try {
        this.elem.$destroy();
      } catch {
      }
    }
    unwrap(n) {
      let i = new DocumentFragment();
      for (; n.firstChild; )
        i.appendChild(n.removeChild(n.firstChild));
      return i;
    }
    getSlots() {
      const n = this.querySelectorAll("[slot]");
      let i = {};
      return n.forEach((s) => {
        i[s.slot] = this.unwrap(s), this.removeChild(s);
      }), this.innerHTML.length && (i.default = this.unwrap(this), this.innerHTML = ""), i;
    }
    getShadowSlots() {
      const n = this.querySelectorAll("[slot]");
      let i = {}, s = this.innerHTML.length;
      return n.forEach((o) => {
        i[o.slot] = document.createElement("slot"), i[o.slot].setAttribute("name", o.slot), s -= o.outerHTML.length;
      }), s > 0 && (i.default = document.createElement("slot")), i;
    }
    processMutations({ root: n, props: i }, s) {
      for (let o of s)
        if (o.type == "childList") {
          let u = this.getShadowSlots();
          Object.keys(u).length && (i.$$slots = Se(u), this.elem.$set({ $$slots: Se(u) }), this.slotcount != Object.keys(u).length && (Array.from(this.attributes).forEach((f) => i[f.name] = f.value), this.slotcount = Object.keys(u).length, n.innerHTML = "", this.elem = new e.component({ target: n, props: i })));
        }
    }
    attributeChangedCallback(n, i, s) {
      this.elem && s != i && this.elem.$set({ [n]: s });
    }
  }
  window.customElements.define(e.tagname, t);
}
function tt(e) {
  let t, r;
  return {
    c() {
      t = re("img"), Ye(t.src, r = it + /*menuItem*/
      e[0].image) || y(t, "src", r), y(t, "width", "300"), y(t, "height", "300"), y(t, "loading", "lazy"), y(t, "typeof", "foaf:Image");
    },
    m(n, i) {
      w(n, t, i);
    },
    p(n, i) {
      i & /*menuItem*/
      1 && !Ye(t.src, r = it + /*menuItem*/
      n[0].image) && y(t, "src", r);
    },
    d(n) {
      n && S(t);
    }
  };
}
function rt(e) {
  let t, r, n, i;
  t = new Vt({
    props: {
      menu: (
        /*menuItem*/
        e[0].children
      ),
      level: (
        /*menuItem*/
        e[0].level
      )
    }
  });
  let s = (
    /*level*/
    e[1] === 1 && nt()
  );
  return {
    c() {
      k(t.$$.fragment), r = F(), s && s.c(), n = Zt();
    },
    m(o, u) {
      M(t, o, u), w(o, r, u), s && s.m(o, u), w(o, n, u), i = !0;
    },
    p(o, u) {
      const f = {};
      u & /*menuItem*/
      1 && (f.menu = /*menuItem*/
      o[0].children), u & /*menuItem*/
      1 && (f.level = /*menuItem*/
      o[0].level), t.$set(f), /*level*/
      o[1] === 1 ? s || (s = nt(), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null);
    },
    i(o) {
      i || (v(t.$$.fragment, o), i = !0);
    },
    o(o) {
      x(t.$$.fragment, o), i = !1;
    },
    d(o) {
      C(t, o), o && S(r), s && s.d(o), o && S(n);
    }
  };
}
function nt(e) {
  let t;
  return {
    c() {
      t = re("span"), t.innerHTML = "<i></i>", y(t, "class", "expand-sub");
    },
    m(r, n) {
      w(r, t, n);
    },
    d(r) {
      r && S(t);
    }
  };
}
function ir(e) {
  let t, r, n, i = (
    /*menuItem*/
    e[0].name + ""
  ), s, o, u, f, a, h = (
    /*menuItem*/
    e[0].image.length > 0 && tt(e)
  ), l = (
    /*menuItem*/
    e[0].children.length > 0 && rt(e)
  );
  return {
    c() {
      t = re("li"), h && h.c(), r = F(), n = re("a"), s = Ve(i), u = F(), l && l.c(), y(n, "href", o = /*menuItem*/
      e[0].url), y(t, "class", f = "main-menu__item with-image main-menu__item--sub main-menu__item--sub-" + /*level*/
      e[1] + " sub-menu__item"), le(
        t,
        "main-menu__item--with-sub",
        /*menuItem*/
        e[0].children.length > 0
      ), le(
        t,
        "sub-menu__item--with-sub",
        /*menuItem*/
        e[0].children.length > 0
      );
    },
    m(c, m) {
      w(c, t, m), h && h.m(t, null), D(t, r), D(t, n), D(n, s), D(t, u), l && l.m(t, null), a = !0;
    },
    p(c, [m]) {
      /*menuItem*/
      c[0].image.length > 0 ? h ? h.p(c, m) : (h = tt(c), h.c(), h.m(t, r)) : h && (h.d(1), h = null), (!a || m & /*menuItem*/
      1) && i !== (i = /*menuItem*/
      c[0].name + "") && Jt(s, i), (!a || m & /*menuItem*/
      1 && o !== (o = /*menuItem*/
      c[0].url)) && y(n, "href", o), /*menuItem*/
      c[0].children.length > 0 ? l ? (l.p(c, m), m & /*menuItem*/
      1 && v(l, 1)) : (l = rt(c), l.c(), v(l, 1), l.m(t, null)) : l && (me(), x(l, 1, 1, () => {
        l = null;
      }), pe()), (!a || m & /*level*/
      2 && f !== (f = "main-menu__item with-image main-menu__item--sub main-menu__item--sub-" + /*level*/
      c[1] + " sub-menu__item")) && y(t, "class", f), (!a || m & /*level, menuItem*/
      3) && le(
        t,
        "main-menu__item--with-sub",
        /*menuItem*/
        c[0].children.length > 0
      ), (!a || m & /*level, menuItem*/
      3) && le(
        t,
        "sub-menu__item--with-sub",
        /*menuItem*/
        c[0].children.length > 0
      );
    },
    i(c) {
      a || (v(l), a = !0);
    },
    o(c) {
      x(l), a = !1;
    },
    d(c) {
      c && S(t), h && h.d(), l && l.d();
    }
  };
}
let it = "https://shopnav-langwebsite.pantheonsite.io";
function sr(e, t, r) {
  let { menuItem: n } = t, { level: i } = t;
  return e.$$set = (s) => {
    "menuItem" in s && r(0, n = s.menuItem), "level" in s && r(1, i = s.level);
  }, [n, i];
}
class Ee extends ze {
  constructor(t) {
    super(), Xe(this, t, sr, ir, _e, { menuItem: 0, level: 1 });
  }
}
const U = [];
function or(e, t) {
  return {
    subscribe: xe(e, t).subscribe
  };
}
function xe(e, t = T) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function i(u) {
    if (_e(e, u) && (e = u, r)) {
      const f = !U.length;
      for (const a of n)
        a[1](), U.push(a, e);
      if (f) {
        for (let a = 0; a < U.length; a += 2)
          U[a][0](U[a + 1]);
        U.length = 0;
      }
    }
  }
  function s(u) {
    i(u(e));
  }
  function o(u, f = T) {
    const a = [u, f];
    return n.add(a), n.size === 1 && (r = t(i) || T), u(e), () => {
      n.delete(a), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function Z(e, t, r) {
  const n = !Array.isArray(e), i = n ? [e] : e, s = t.length < 2;
  return or(r, (o) => {
    let u = !1;
    const f = [];
    let a = 0, h = T;
    const l = () => {
      if (a)
        return;
      h();
      const m = t(n ? f[0] : f, o);
      s ? o(m) : h = je(m) ? m : T;
    }, c = i.map((m, E) => _t(m, (H) => {
      f[E] = H, a &= ~(1 << E), u && l();
    }, () => {
      a |= 1 << E;
    }));
    return u = !0, l(), function() {
      W(c), h(), u = !1;
    };
  });
}
var ar = function(t) {
  return ur(t) && !hr(t);
};
function ur(e) {
  return !!e && typeof e == "object";
}
function hr(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || cr(e);
}
var lr = typeof Symbol == "function" && Symbol.for, fr = lr ? Symbol.for("react.element") : 60103;
function cr(e) {
  return e.$$typeof === fr;
}
function mr(e) {
  return Array.isArray(e) ? [] : {};
}
function ie(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? j(mr(e), e, t) : e;
}
function pr(e, t, r) {
  return e.concat(t).map(function(n) {
    return ie(n, r);
  });
}
function dr(e, t) {
  if (!t.customMerge)
    return j;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : j;
}
function br(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function st(e) {
  return Object.keys(e).concat(br(e));
}
function Ht(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function gr(e, t) {
  return Ht(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Er(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && st(e).forEach(function(i) {
    n[i] = ie(e[i], r);
  }), st(t).forEach(function(i) {
    gr(e, i) || (Ht(e, i) && r.isMergeableObject(t[i]) ? n[i] = dr(i, r)(e[i], t[i], r) : n[i] = ie(t[i], r));
  }), n;
}
function j(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || pr, r.isMergeableObject = r.isMergeableObject || ar, r.cloneUnlessOtherwiseSpecified = ie;
  var n = Array.isArray(t), i = Array.isArray(e), s = n === i;
  return s ? n ? r.arrayMerge(e, t, r) : Er(e, t, r) : ie(t, r);
}
j.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, i) {
    return j(n, i, r);
  }, {});
};
var vr = j, _r = vr, Oe = function(e, t) {
  return Oe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Oe(e, t);
};
function ye(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Oe(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var b = function() {
  return b = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, b.apply(this, arguments);
};
function Be(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var p;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(p || (p = {}));
var g;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(g || (g = {}));
var V;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(V || (V = {}));
function ot(e) {
  return e.type === g.literal;
}
function xr(e) {
  return e.type === g.argument;
}
function Tt(e) {
  return e.type === g.number;
}
function At(e) {
  return e.type === g.date;
}
function St(e) {
  return e.type === g.time;
}
function Bt(e) {
  return e.type === g.select;
}
function wt(e) {
  return e.type === g.plural;
}
function yr(e) {
  return e.type === g.pound;
}
function It(e) {
  return e.type === g.tag;
}
function Nt(e) {
  return !!(e && typeof e == "object" && e.type === V.number);
}
function Re(e) {
  return !!(e && typeof e == "object" && e.type === V.dateTime);
}
var Pt = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Hr = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Tr(e) {
  var t = {};
  return e.replace(Hr, function(r) {
    var n = r.length;
    switch (r[0]) {
      case "G":
        t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = n === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][n - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = n === 4 ? "short" : n === 5 ? "narrow" : "short";
        break;
      case "e":
        if (n < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "c":
        if (n < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][n - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][n - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = n < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var Ar = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Sr(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Ar).filter(function(c) {
    return c.length > 0;
  }), r = [], n = 0, i = t; n < i.length; n++) {
    var s = i[n], o = s.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], f = o.slice(1), a = 0, h = f; a < h.length; a++) {
      var l = h[a];
      if (l.length === 0)
        throw new Error("Invalid number skeleton");
    }
    r.push({ stem: u, options: f });
  }
  return r;
}
function Br(e) {
  return e.replace(/^(.*?)-/, "");
}
var at = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Lt = /^(@+)?(\+|#+)?[rs]?$/g, wr = /(\*)(0+)|(#+)(0+)|(0+)/g, Mt = /^(0+)$/;
function ut(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Lt, function(r, n, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : i === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Ct(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function Ir(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Mt.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function ht(e) {
  var t = {}, r = Ct(e);
  return r || t;
}
function Nr(e) {
  for (var t = {}, r = 0, n = e; r < n.length; r++) {
    var i = n[r];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = Br(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = b(b(b({}, t), { notation: "scientific" }), i.options.reduce(function(f, a) {
          return b(b({}, f), ht(a));
        }, {}));
        continue;
      case "engineering":
        t = b(b(b({}, t), { notation: "engineering" }), i.options.reduce(function(f, a) {
          return b(b({}, f), ht(a));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(i.options[0]);
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(wr, function(f, a, h, l, c, m) {
          if (a)
            t.minimumIntegerDigits = h.length;
          else {
            if (l && c)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Mt.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (at.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(at, function(f, a, h, l, c, m) {
        return h === "*" ? t.minimumFractionDigits = a.length : l && l[0] === "#" ? t.maximumFractionDigits = l.length : c && m ? (t.minimumFractionDigits = c.length, t.maximumFractionDigits = c.length + m.length) : (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length), "";
      });
      var s = i.options[0];
      s === "w" ? t = b(b({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = b(b({}, t), ut(s)));
      continue;
    }
    if (Lt.test(i.stem)) {
      t = b(b({}, t), ut(i.stem));
      continue;
    }
    var o = Ct(i.stem);
    o && (t = b(b({}, t), o));
    var u = Ir(i.stem);
    u && (t = b(b({}, t), u));
  }
  return t;
}
var fe = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
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
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
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
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
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
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
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
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function Pr(e, t) {
  for (var r = "", n = 0; n < e.length; n++) {
    var i = e.charAt(n);
    if (i === "j") {
      for (var s = 0; n + 1 < e.length && e.charAt(n + 1) === i; )
        s++, n++;
      var o = 1 + (s & 1), u = s < 2 ? 1 : 3 + (s >> 1), f = "a", a = Lr(t);
      for ((a == "H" || a == "k") && (u = 0); u-- > 0; )
        r += f;
      for (; o-- > 0; )
        r = a + r;
    } else
      i === "J" ? r += "H" : r += i;
  }
  return r;
}
function Lr(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var r = e.language, n;
  r !== "root" && (n = e.maximize().region);
  var i = fe[n || ""] || fe[r || ""] || fe["".concat(r, "-001")] || fe["001"];
  return i[0];
}
var we, Mr = new RegExp("^".concat(Pt.source, "*")), Cr = new RegExp("".concat(Pt.source, "*$"));
function d(e, t) {
  return { start: e, end: t };
}
var Or = !!String.prototype.startsWith, Rr = !!String.fromCodePoint, Ur = !!Object.fromEntries, Gr = !!String.prototype.codePointAt, Dr = !!String.prototype.trimStart, $r = !!String.prototype.trimEnd, Fr = !!Number.isSafeInteger, kr = Fr ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Ue = !0;
try {
  var jr = Rt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ue = ((we = jr.exec("a")) === null || we === void 0 ? void 0 : we[0]) === "a";
} catch {
  Ue = !1;
}
var lt = Or ? (
  // Native
  function(t, r, n) {
    return t.startsWith(r, n);
  }
) : (
  // For IE11
  function(t, r, n) {
    return t.slice(n, n + r.length) === r;
  }
), Ge = Rr ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    for (var n = "", i = t.length, s = 0, o; i > s; ) {
      if (o = t[s++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      n += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return n;
  }
), ft = (
  // native
  Ur ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var r = {}, n = 0, i = t; n < i.length; n++) {
        var s = i[n], o = s[0], u = s[1];
        r[o] = u;
      }
      return r;
    }
  )
), Ot = Gr ? (
  // Native
  function(t, r) {
    return t.codePointAt(r);
  }
) : (
  // IE 11
  function(t, r) {
    var n = t.length;
    if (!(r < 0 || r >= n)) {
      var i = t.charCodeAt(r), s;
      return i < 55296 || i > 56319 || r + 1 === n || (s = t.charCodeAt(r + 1)) < 56320 || s > 57343 ? i : (i - 55296 << 10) + (s - 56320) + 65536;
    }
  }
), Vr = Dr ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Mr, "");
  }
), Xr = $r ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Cr, "");
  }
);
function Rt(e, t) {
  return new RegExp(e, t);
}
var De;
if (Ue) {
  var ct = Rt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  De = function(t, r) {
    var n;
    ct.lastIndex = r;
    var i = ct.exec(t);
    return (n = i[1]) !== null && n !== void 0 ? n : "";
  };
} else
  De = function(t, r) {
    for (var n = []; ; ) {
      var i = Ot(t, r);
      if (i === void 0 || Ut(i) || qr(i))
        break;
      n.push(i), r += i >= 65536 ? 2 : 1;
    }
    return Ge.apply(void 0, n);
  };
var zr = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!r.ignoreTag, this.locale = r.locale, this.requiresOtherClause = !!r.requiresOtherClause, this.shouldParseSkeletons = !!r.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, r, n) {
      for (var i = []; !this.isEOF(); ) {
        var s = this.char();
        if (s === 123) {
          var o = this.parseArgument(t, n);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (s === 125 && t > 0)
            break;
          if (s === 35 && (r === "plural" || r === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), i.push({
              type: g.pound,
              location: d(u, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(p.UNMATCHED_CLOSING_TAG, d(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && $e(this.peek() || 0)) {
            var o = this.parseTag(t, r);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(t, r);
            if (o.err)
              return o;
            i.push(o.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, r) {
      var n = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: g.literal,
            value: "<".concat(i, "/>"),
            location: d(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, r, !0);
        if (s.err)
          return s;
        var o = s.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !$e(this.char()))
            return this.error(p.INVALID_TAG, d(u, this.clonePosition()));
          var f = this.clonePosition(), a = this.parseTagName();
          return i !== a ? this.error(p.UNMATCHED_CLOSING_TAG, d(f, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: g.tag,
              value: i,
              children: o,
              location: d(n, this.clonePosition())
            },
            err: null
          } : this.error(p.INVALID_TAG, d(u, this.clonePosition())));
        } else
          return this.error(p.UNCLOSED_TAG, d(n, this.clonePosition()));
      } else
        return this.error(p.INVALID_TAG, d(n, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Zr(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, r) {
      for (var n = this.clonePosition(), i = ""; ; ) {
        var s = this.tryParseQuote(r);
        if (s) {
          i += s;
          continue;
        }
        var o = this.tryParseUnquoted(t, r);
        if (o) {
          i += o;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var f = d(n, this.clonePosition());
      return {
        val: { type: g.literal, value: i, location: f },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Wr(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var r = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var n = this.char();
        if (n === 39)
          if (this.peek() === 39)
            r.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          r.push(n);
        this.bump();
      }
      return Ge.apply(void 0, r);
    }, e.prototype.tryParseUnquoted = function(t, r) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), Ge(n));
    }, e.prototype.parseArgument = function(t, r) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, d(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(p.EMPTY_ARGUMENT, d(n, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(p.MALFORMED_ARGUMENT, d(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, d(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: g.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: d(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, d(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
        default:
          return this.error(p.MALFORMED_ARGUMENT, d(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), r = this.offset(), n = De(this.message, r), i = r + n.length;
      this.bumpTo(i);
      var s = this.clonePosition(), o = d(t, s);
      return { value: n, location: o };
    }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
      var s, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, f = this.clonePosition();
      switch (u) {
        case "":
          return this.error(p.EXPECT_ARGUMENT_TYPE, d(o, f));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var a = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var h = this.clonePosition(), l = this.parseSimpleArgStyleIfPossible();
            if (l.err)
              return l;
            var c = Xr(l.val);
            if (c.length === 0)
              return this.error(p.EXPECT_ARGUMENT_STYLE, d(this.clonePosition(), this.clonePosition()));
            var m = d(h, this.clonePosition());
            a = { style: c, styleLocation: m };
          }
          var E = this.tryParseArgumentClose(i);
          if (E.err)
            return E;
          var H = d(i, this.clonePosition());
          if (a && lt(a == null ? void 0 : a.style, "::", 0)) {
            var N = Vr(a.style.slice(2));
            if (u === "number") {
              var l = this.parseNumberSkeletonFromString(N, a.styleLocation);
              return l.err ? l : {
                val: { type: g.number, value: n, location: H, style: l.val },
                err: null
              };
            } else {
              if (N.length === 0)
                return this.error(p.EXPECT_DATE_TIME_SKELETON, H);
              var Q = N;
              this.locale && (Q = Pr(N, this.locale));
              var c = {
                type: V.dateTime,
                pattern: Q,
                location: a.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Tr(Q) : {}
              }, O = u === "date" ? g.date : g.time;
              return {
                val: { type: O, value: n, location: H, style: c },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? g.number : u === "date" ? g.date : g.time,
              value: n,
              location: H,
              style: (s = a == null ? void 0 : a.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var A = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(p.EXPECT_SELECT_ARGUMENT_OPTIONS, d(A, b({}, A)));
          this.bumpSpace();
          var Y = this.parseIdentifierIfPossible(), P = 0;
          if (u !== "select" && Y.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(p.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, d(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var l = this.tryParseDecimalInteger(p.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, p.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (l.err)
              return l;
            this.bumpSpace(), Y = this.parseIdentifierIfPossible(), P = l.val;
          }
          var ue = this.tryParsePluralOrSelectOptions(t, u, r, Y);
          if (ue.err)
            return ue;
          var E = this.tryParseArgumentClose(i);
          if (E.err)
            return E;
          var Je = d(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: g.select,
              value: n,
              options: ft(ue.val),
              location: Je
            },
            err: null
          } : {
            val: {
              type: g.plural,
              value: n,
              options: ft(ue.val),
              offset: P,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: Je
            },
            err: null
          };
        }
        default:
          return this.error(p.INVALID_ARGUMENT_TYPE, d(o, f));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, d(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(p.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, d(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(r.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(r.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, r) {
      var n = [];
      try {
        n = Sr(t);
      } catch {
        return this.error(p.INVALID_NUMBER_SKELETON, r);
      }
      return {
        val: {
          type: V.number,
          tokens: n,
          location: r,
          parsedOptions: this.shouldParseSkeletons ? Nr(n) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, r, n, i) {
      for (var s, o = !1, u = [], f = /* @__PURE__ */ new Set(), a = i.value, h = i.location; ; ) {
        if (a.length === 0) {
          var l = this.clonePosition();
          if (r !== "select" && this.bumpIf("=")) {
            var c = this.tryParseDecimalInteger(p.EXPECT_PLURAL_ARGUMENT_SELECTOR, p.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (c.err)
              return c;
            h = d(l, this.clonePosition()), a = this.message.slice(l.offset, this.offset());
          } else
            break;
        }
        if (f.has(a))
          return this.error(r === "select" ? p.DUPLICATE_SELECT_ARGUMENT_SELECTOR : p.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, h);
        a === "other" && (o = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? p.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : p.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, d(this.clonePosition(), this.clonePosition()));
        var E = this.parseMessage(t + 1, r, n);
        if (E.err)
          return E;
        var H = this.tryParseArgumentClose(m);
        if (H.err)
          return H;
        u.push([
          a,
          {
            value: E.val,
            location: d(m, this.clonePosition())
          }
        ]), f.add(a), this.bumpSpace(), s = this.parseIdentifierIfPossible(), a = s.value, h = s.location;
      }
      return u.length === 0 ? this.error(r === "select" ? p.EXPECT_SELECT_ARGUMENT_SELECTOR : p.EXPECT_PLURAL_ARGUMENT_SELECTOR, d(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(p.MISSING_OTHER_CLAUSE, d(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, r) {
      var n = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var s = !1, o = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          s = !0, o = o * 10 + (u - 48), this.bump();
        else
          break;
      }
      var f = d(i, this.clonePosition());
      return s ? (o *= n, kr(o) ? { val: o, err: null } : this.error(r, f)) : this.error(t, f);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var r = Ot(this.message, t);
      if (r === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return r;
    }, e.prototype.error = function(t, r) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: r
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (lt(this.message, t, this.offset())) {
        for (var r = 0; r < t.length; r++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var r = this.offset(), n = this.message.indexOf(t, r);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var r = this.offset();
        if (r === t)
          break;
        if (r > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Ut(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), r = this.offset(), n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
      return n ?? null;
    }, e;
  }()
);
function $e(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Wr(e) {
  return $e(e) || e === 47;
}
function Zr(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Ut(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function qr(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Fe(e) {
  e.forEach(function(t) {
    if (delete t.location, Bt(t) || wt(t))
      for (var r in t.options)
        delete t.options[r].location, Fe(t.options[r].value);
    else
      Tt(t) && Nt(t.style) || (At(t) || St(t)) && Re(t.style) ? delete t.style.location : It(t) && Fe(t.children);
  });
}
function Jr(e, t) {
  t === void 0 && (t = {}), t = b({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new zr(e, t).parse();
  if (r.err) {
    var n = SyntaxError(p[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return t != null && t.captureLocation || Fe(r.val), r.val;
}
function Ie(e, t) {
  var r = t && t.cache ? t.cache : rn, n = t && t.serializer ? t.serializer : tn, i = t && t.strategy ? t.strategy : Yr;
  return i(e, {
    cache: r,
    serializer: n
  });
}
function Qr(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Gt(e, t, r, n) {
  var i = Qr(n) ? n : r(n), s = t.get(i);
  return typeof s > "u" && (s = e.call(this, n), t.set(i, s)), s;
}
function Dt(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3), i = r(n), s = t.get(i);
  return typeof s > "u" && (s = e.apply(this, n), t.set(i, s)), s;
}
function We(e, t, r, n, i) {
  return r.bind(t, e, n, i);
}
function Yr(e, t) {
  var r = e.length === 1 ? Gt : Dt;
  return We(e, this, r, t.cache.create(), t.serializer);
}
function Kr(e, t) {
  return We(e, this, Dt, t.cache.create(), t.serializer);
}
function en(e, t) {
  return We(e, this, Gt, t.cache.create(), t.serializer);
}
var tn = function() {
  return JSON.stringify(arguments);
};
function Ze() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Ze.prototype.get = function(e) {
  return this.cache[e];
};
Ze.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var rn = {
  create: function() {
    return new Ze();
  }
}, Ne = {
  variadic: Kr,
  monadic: en
}, X;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(X || (X = {}));
var He = (
  /** @class */
  function(e) {
    ye(t, e);
    function t(r, n, i) {
      var s = e.call(this, r) || this;
      return s.code = n, s.originalMessage = i, s;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), mt = (
  /** @class */
  function(e) {
    ye(t, e);
    function t(r, n, i, s) {
      return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), X.INVALID_VALUE, s) || this;
    }
    return t;
  }(He)
), nn = (
  /** @class */
  function(e) {
    ye(t, e);
    function t(r, n, i) {
      return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), X.INVALID_VALUE, i) || this;
    }
    return t;
  }(He)
), sn = (
  /** @class */
  function(e) {
    ye(t, e);
    function t(r, n) {
      return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), X.MISSING_VALUE, n) || this;
    }
    return t;
  }(He)
), _;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(_ || (_ = {}));
function on(e) {
  return e.length < 2 ? e : e.reduce(function(t, r) {
    var n = t[t.length - 1];
    return !n || n.type !== _.literal || r.type !== _.literal ? t.push(r) : n.value += r.value, t;
  }, []);
}
function an(e) {
  return typeof e == "function";
}
function de(e, t, r, n, i, s, o) {
  if (e.length === 1 && ot(e[0]))
    return [
      {
        type: _.literal,
        value: e[0].value
      }
    ];
  for (var u = [], f = 0, a = e; f < a.length; f++) {
    var h = a[f];
    if (ot(h)) {
      u.push({
        type: _.literal,
        value: h.value
      });
      continue;
    }
    if (yr(h)) {
      typeof s == "number" && u.push({
        type: _.literal,
        value: r.getNumberFormat(t).format(s)
      });
      continue;
    }
    var l = h.value;
    if (!(i && l in i))
      throw new sn(l, o);
    var c = i[l];
    if (xr(h)) {
      (!c || typeof c == "string" || typeof c == "number") && (c = typeof c == "string" || typeof c == "number" ? String(c) : ""), u.push({
        type: typeof c == "string" ? _.literal : _.object,
        value: c
      });
      continue;
    }
    if (At(h)) {
      var m = typeof h.style == "string" ? n.date[h.style] : Re(h.style) ? h.style.parsedOptions : void 0;
      u.push({
        type: _.literal,
        value: r.getDateTimeFormat(t, m).format(c)
      });
      continue;
    }
    if (St(h)) {
      var m = typeof h.style == "string" ? n.time[h.style] : Re(h.style) ? h.style.parsedOptions : n.time.medium;
      u.push({
        type: _.literal,
        value: r.getDateTimeFormat(t, m).format(c)
      });
      continue;
    }
    if (Tt(h)) {
      var m = typeof h.style == "string" ? n.number[h.style] : Nt(h.style) ? h.style.parsedOptions : void 0;
      m && m.scale && (c = c * (m.scale || 1)), u.push({
        type: _.literal,
        value: r.getNumberFormat(t, m).format(c)
      });
      continue;
    }
    if (It(h)) {
      var E = h.children, H = h.value, N = i[H];
      if (!an(N))
        throw new nn(H, "function", o);
      var Q = de(E, t, r, n, i, s), O = N(Q.map(function(P) {
        return P.value;
      }));
      Array.isArray(O) || (O = [O]), u.push.apply(u, O.map(function(P) {
        return {
          type: typeof P == "string" ? _.literal : _.object,
          value: P
        };
      }));
    }
    if (Bt(h)) {
      var A = h.options[c] || h.options.other;
      if (!A)
        throw new mt(h.value, c, Object.keys(h.options), o);
      u.push.apply(u, de(A.value, t, r, n, i));
      continue;
    }
    if (wt(h)) {
      var A = h.options["=".concat(c)];
      if (!A) {
        if (!Intl.PluralRules)
          throw new He(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, X.MISSING_INTL_API, o);
        var Y = r.getPluralRules(t, { type: h.pluralType }).select(c - (h.offset || 0));
        A = h.options[Y] || h.options.other;
      }
      if (!A)
        throw new mt(h.value, c, Object.keys(h.options), o);
      u.push.apply(u, de(A.value, t, r, n, i, c - (h.offset || 0)));
      continue;
    }
  }
  return on(u);
}
function un(e, t) {
  return t ? b(b(b({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
    return r[n] = b(b({}, e[n]), t[n] || {}), r;
  }, {})) : e;
}
function hn(e, t) {
  return t ? Object.keys(e).reduce(function(r, n) {
    return r[n] = un(e[n], t[n]), r;
  }, b({}, e)) : e;
}
function Pe(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, r) {
          e[t] = r;
        }
      };
    }
  };
}
function ln(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ie(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, Be([void 0], r, !1)))();
    }, {
      cache: Pe(e.number),
      strategy: Ne.variadic
    }),
    getDateTimeFormat: Ie(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Be([void 0], r, !1)))();
    }, {
      cache: Pe(e.dateTime),
      strategy: Ne.variadic
    }),
    getPluralRules: Ie(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, Be([void 0], r, !1)))();
    }, {
      cache: Pe(e.pluralRules),
      strategy: Ne.variadic
    })
  };
}
var fn = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      var s = this;
      if (r === void 0 && (r = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var u = s.formatToParts(o);
        if (u.length === 1)
          return u[0].value;
        var f = u.reduce(function(a, h) {
          return !a.length || h.type !== _.literal || typeof a[a.length - 1] != "string" ? a.push(h.value) : a[a.length - 1] += h.value, a;
        }, []);
        return f.length <= 1 ? f[0] || "" : f;
      }, this.formatToParts = function(o) {
        return de(s.ast, s.locales, s.formatters, s.formats, o, void 0, s.message);
      }, this.resolvedOptions = function() {
        return {
          locale: s.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return s.ast;
      }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = e.__parse(t, {
          ignoreTag: i == null ? void 0 : i.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = hn(e.formats, n), this.formatters = i && i.formatters || ln(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      var r = Intl.NumberFormat.supportedLocalesOf(t);
      return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
    }, e.__parse = Jr, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
);
const B = {}, cn = (e, t, r) => r && (t in B || (B[t] = {}), e in B[t] || (B[t][e] = r), r), $t = (e, t) => {
  if (t == null)
    return;
  if (t in B && e in B[t])
    return B[t][e];
  const r = ae(t);
  for (let n = 0; n < r.length; n++) {
    const i = mn(r[n], e);
    if (i)
      return cn(e, t, i);
  }
};
let qe;
const oe = xe({});
function Ft(e) {
  return e in qe;
}
function mn(e, t) {
  if (!Ft(e))
    return null;
  const r = function(n) {
    return qe[n] || null;
  }(e);
  return function(n, i) {
    if (i == null)
      return;
    if (i in n)
      return n[i];
    const s = i.split(".");
    let o = n;
    for (let u = 0; u < s.length; u++)
      if (typeof o == "object") {
        if (u > 0) {
          const f = s.slice(u, s.length).join(".");
          if (f in o) {
            o = o[f];
            break;
          }
        }
        o = o[s[u]];
      } else
        o = void 0;
    return o;
  }(r, t);
}
function q(e, ...t) {
  delete B[e], oe.update((r) => (r[e] = _r.all([r[e] || {}, ...t]), r));
}
Z([oe], ([e]) => Object.keys(e));
oe.subscribe((e) => qe = e);
const be = {};
function kt(e) {
  return be[e];
}
function ve(e) {
  return e != null && ae(e).some((t) => {
    var r;
    return (r = kt(t)) === null || r === void 0 ? void 0 : r.size;
  });
}
function pn(e, t) {
  return Promise.all(t.map((n) => (function(i, s) {
    be[i].delete(s), be[i].size === 0 && delete be[i];
  }(e, n), n().then((i) => i.default || i)))).then((n) => q(e, ...n));
}
const K = {};
function jt(e) {
  if (!ve(e))
    return e in K ? K[e] : Promise.resolve();
  const t = function(r) {
    return ae(r).map((n) => {
      const i = kt(n);
      return [n, i ? [...i] : []];
    }).filter(([, n]) => n.length > 0);
  }(e);
  return K[e] = Promise.all(t.map(([r, n]) => pn(r, n))).then(() => {
    if (ve(e))
      return jt(e);
    delete K[e];
  }), K[e];
}
function dn({ locale: e, id: t }) {
  console.warn(`[svelte-i18n] The message "${t}" was not found in "${ae(e).join('", "')}".${ve(I()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`);
}
const ee = { fallbackLocale: null, loadingDelay: 200, formats: { number: { scientific: { notation: "scientific" }, engineering: { notation: "engineering" }, compactLong: { notation: "compact", compactDisplay: "long" }, compactShort: { notation: "compact", compactDisplay: "short" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } }, warnOnMissingMessages: !0, handleMissingMessage: void 0, ignoreTag: !0 };
function z() {
  return ee;
}
function bn(e) {
  const { formats: t, ...r } = e, n = e.initialLocale || e.fallbackLocale;
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = dn : console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')), Object.assign(ee, r, { initialLocale: n }), t && ("number" in t && Object.assign(ee.formats.number, t.number), "date" in t && Object.assign(ee.formats.date, t.date), "time" in t && Object.assign(ee.formats.time, t.time)), J.set(n);
}
const Le = xe(!1);
let ke;
const ge = xe(null);
function pt(e) {
  return e.split("-").map((t, r, n) => n.slice(0, r + 1).join("-")).reverse();
}
function ae(e, t = z().fallbackLocale) {
  const r = pt(e);
  return t ? [.../* @__PURE__ */ new Set([...r, ...pt(t)])] : r;
}
function I() {
  return ke ?? void 0;
}
ge.subscribe((e) => {
  ke = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const J = { ...ge, set: (e) => {
  if (e && function(t) {
    if (t == null)
      return;
    const r = ae(t);
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      if (Ft(i))
        return i;
    }
  }(e) && ve(e)) {
    const { loadingDelay: t } = z();
    let r;
    return typeof window < "u" && I() != null && t ? r = window.setTimeout(() => Le.set(!0), t) : Le.set(!0), jt(e).then(() => {
      ge.set(e);
    }).finally(() => {
      clearTimeout(r), Le.set(!1);
    });
  }
  return ge.set(e);
} }, Te = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const n = JSON.stringify(r);
    return n in t ? t[n] : t[n] = e(r);
  };
}, se = (e, t) => {
  const { formats: r } = z();
  if (e in r && t in r[e])
    return r[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, gn = Te(({ locale: e, format: t, ...r }) => {
  if (e == null)
    throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
  return t && (r = se("number", t)), new Intl.NumberFormat(e, r);
}), En = Te(({ locale: e, format: t, ...r }) => {
  if (e == null)
    throw new Error('[svelte-i18n] A "locale" must be set to format dates');
  return t ? r = se("date", t) : Object.keys(r).length === 0 && (r = se("date", "short")), new Intl.DateTimeFormat(e, r);
}), vn = Te(({ locale: e, format: t, ...r }) => {
  if (e == null)
    throw new Error('[svelte-i18n] A "locale" must be set to format time values');
  return t ? r = se("time", t) : Object.keys(r).length === 0 && (r = se("time", "short")), new Intl.DateTimeFormat(e, r);
}), _n = ({ locale: e = I(), ...t } = {}) => gn({ locale: e, ...t }), xn = ({ locale: e = I(), ...t } = {}) => En({ locale: e, ...t }), yn = ({ locale: e = I(), ...t } = {}) => vn({ locale: e, ...t }), Hn = Te((e, t = I()) => new fn(e, t, z().formats, { ignoreTag: z().ignoreTag })), Tn = (e, t = {}) => {
  var r, n, i, s;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const { values: u, locale: f = I(), default: a } = o;
  if (f == null)
    throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
  let h = $t(e, f);
  if (h) {
    if (typeof h != "string")
      return console.warn(`[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof h}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`), h;
  } else
    h = (s = (i = (n = (r = z()).handleMissingMessage) === null || n === void 0 ? void 0 : n.call(r, { locale: f, id: e, defaultValue: a })) !== null && i !== void 0 ? i : a) !== null && s !== void 0 ? s : e;
  if (!u)
    return h;
  let l = h;
  try {
    l = Hn(h, f).format(u);
  } catch (c) {
    c instanceof Error && console.warn(`[svelte-i18n] Message "${e}" has syntax error:`, c.message);
  }
  return l;
}, An = (e, t) => yn(t).format(e), Sn = (e, t) => xn(t).format(e), Bn = (e, t) => _n(t).format(e), wn = (e, t = I()) => $t(e, t), In = Z([J, oe], () => Tn);
Z([J], () => An);
Z([J], () => Sn);
Z([J], () => Bn);
Z([J, oe], () => wn);
function dt(e, t, r) {
  const n = e.slice();
  return n[6] = t[r], n;
}
function bt(e) {
  let t, r;
  return t = new Ee({
    props: {
      menuItem: (
        /*menuItem*/
        e[6]
      ),
      level: (
        /*level*/
        e[1]
      )
    }
  }), {
    c() {
      k(t.$$.fragment);
    },
    m(n, i) {
      M(t, n, i), r = !0;
    },
    p(n, i) {
      const s = {};
      i & /*menu*/
      1 && (s.menuItem = /*menuItem*/
      n[6]), i & /*level*/
      2 && (s.level = /*level*/
      n[1]), t.$set(s);
    },
    i(n) {
      r || (v(t.$$.fragment, n), r = !0);
    },
    o(n) {
      x(t.$$.fragment, n), r = !1;
    },
    d(n) {
      C(t, n);
    }
  };
}
function gt(e) {
  let t, r, n, i;
  return t = new Ee({
    props: {
      menuItem: (
        /*overviewItem*/
        e[3]
      ),
      level: (
        /*level*/
        e[1]
      )
    }
  }), n = new Ee({
    props: {
      menuItem: (
        /*newItem*/
        e[4]
      ),
      level: (
        /*level*/
        e[1]
      )
    }
  }), {
    c() {
      k(t.$$.fragment), r = F(), k(n.$$.fragment);
    },
    m(s, o) {
      M(t, s, o), w(s, r, o), M(n, s, o), i = !0;
    },
    p(s, o) {
      const u = {};
      o & /*level*/
      2 && (u.level = /*level*/
      s[1]), t.$set(u);
      const f = {};
      o & /*level*/
      2 && (f.level = /*level*/
      s[1]), n.$set(f);
    },
    i(s) {
      i || (v(t.$$.fragment, s), v(n.$$.fragment, s), i = !0);
    },
    o(s) {
      x(t.$$.fragment, s), x(n.$$.fragment, s), i = !1;
    },
    d(s) {
      C(t, s), s && S(r), C(n, s);
    }
  };
}
function Et(e) {
  let t, r;
  return t = new Ee({
    props: {
      menuItem: (
        /*allItem*/
        e[2]
      ),
      level: (
        /*level*/
        e[1]
      )
    }
  }), {
    c() {
      k(t.$$.fragment);
    },
    m(n, i) {
      M(t, n, i), r = !0;
    },
    p(n, i) {
      const s = {};
      i & /*allItem*/
      4 && (s.menuItem = /*allItem*/
      n[2]), i & /*level*/
      2 && (s.level = /*level*/
      n[1]), t.$set(s);
    },
    i(n) {
      r || (v(t.$$.fragment, n), r = !0);
    },
    o(n) {
      x(t.$$.fragment, n), r = !1;
    },
    d(n) {
      C(t, n);
    }
  };
}
function Nn(e) {
  let t, r, n, i, s, o = (
    /*menu*/
    e[0]
  ), u = [];
  for (let l = 0; l < o.length; l += 1)
    u[l] = bt(dt(e, o, l));
  const f = (l) => x(u[l], 1, 1, () => {
    u[l] = null;
  });
  let a = (
    /*level*/
    e[1] === 1 && gt(e)
  ), h = (
    /*level*/
    e[1] > 2 && Et(e)
  );
  return {
    c() {
      t = re("ul");
      for (let l = 0; l < u.length; l += 1)
        u[l].c();
      r = F(), a && a.c(), n = F(), h && h.c(), y(t, "class", i = "sub-menu sub-menu--sub sub-menu--sub-" + /*level*/
      e[1]);
    },
    m(l, c) {
      w(l, t, c);
      for (let m = 0; m < u.length; m += 1)
        u[m] && u[m].m(t, null);
      D(t, r), a && a.m(t, null), D(t, n), h && h.m(t, null), s = !0;
    },
    p(l, [c]) {
      if (c & /*menu, level*/
      3) {
        o = /*menu*/
        l[0];
        let m;
        for (m = 0; m < o.length; m += 1) {
          const E = dt(l, o, m);
          u[m] ? (u[m].p(E, c), v(u[m], 1)) : (u[m] = bt(E), u[m].c(), v(u[m], 1), u[m].m(t, r));
        }
        for (me(), m = o.length; m < u.length; m += 1)
          f(m);
        pe();
      }
      /*level*/
      l[1] === 1 ? a ? (a.p(l, c), c & /*level*/
      2 && v(a, 1)) : (a = gt(l), a.c(), v(a, 1), a.m(t, n)) : a && (me(), x(a, 1, 1, () => {
        a = null;
      }), pe()), /*level*/
      l[1] > 2 ? h ? (h.p(l, c), c & /*level*/
      2 && v(h, 1)) : (h = Et(l), h.c(), v(h, 1), h.m(t, null)) : h && (me(), x(h, 1, 1, () => {
        h = null;
      }), pe()), (!s || c & /*level*/
      2 && i !== (i = "sub-menu sub-menu--sub sub-menu--sub-" + /*level*/
      l[1])) && y(t, "class", i);
    },
    i(l) {
      if (!s) {
        for (let c = 0; c < o.length; c += 1)
          v(u[c]);
        v(a), v(h), s = !0;
      }
    },
    o(l) {
      u = u.filter(Boolean);
      for (let c = 0; c < u.length; c += 1)
        x(u[c]);
      x(a), x(h), s = !1;
    },
    d(l) {
      l && S(t), Wt(u, l), a && a.d(), h && h.d();
    }
  };
}
function Pn(e, t, r) {
  let n;
  zt(e, In, (a) => r(5, n = a));
  let { menu: i } = t, { level: s = 1 } = t, o = n("overview"), u = n("new"), f = n("all");
  return xt(() => {
    if (i[0] && i[0].url) {
      let a = i[0].url.split("/");
      a.pop(), r(2, f.url = a.join("/"), f);
    }
  }), e.$$set = (a) => {
    "menu" in a && r(0, i = a.menu), "level" in a && r(1, s = a.level);
  }, [i, s, f, o, u];
}
class Vt extends ze {
  constructor(t) {
    super(), Xe(this, t, Pn, Nn, _e, { menu: 0, level: 1 });
  }
}
function Ln(e) {
  let t, r;
  return t = new Vt({ props: { menu: (
    /*sortedMenu*/
    e[0]
  ) } }), {
    c() {
      k(t.$$.fragment);
    },
    m(n, i) {
      M(t, n, i), r = !0;
    },
    p(n, [i]) {
      const s = {};
      i & /*sortedMenu*/
      1 && (s.menu = /*sortedMenu*/
      n[0]), t.$set(s);
    },
    i(n) {
      r || (v(t.$$.fragment, n), r = !0);
    },
    o(n) {
      x(t.$$.fragment, n), r = !1;
    },
    d(n) {
      C(t, n);
    }
  };
}
let Mn = "https://shopnav-langwebsite.pantheonsite.io", Cn = "/rest/product-menu", On = "?_format=json";
function Rn(e, t, r) {
  let n = "/de", i = [], s = [];
  function o() {
    let f = i.filter((a) => a.pid === "");
    return f.forEach((a) => {
      a.level = 2, a.children = u(a);
    }), f;
  }
  function u(f) {
    let a = i.filter((h) => h.pid === f.tid).sort((h, l) => h.weight - l.weight);
    return a && a.forEach((h) => {
      h.level = f.level + 1, h.children = u(h);
    }), a;
  }
  return xt(() => {
    n = "/" + document.querySelector("html").lang, fetch(Mn + Cn + n + On, { method: "GET" }).then((f) => f.json()).then((f) => {
      i = f, r(0, s = o());
    });
  }), [s];
}
class Un extends ze {
  constructor(t) {
    super(), Xe(this, t, Rn, Ln, _e, {});
  }
}
const Gn = {
  tid: "",
  pid: "",
  name: "Produktübersicht",
  url: "/de/produkte",
  image: "",
  weight: "",
  children: []
}, Dn = {
  tid: "",
  pid: "",
  name: "Alle anzeigen",
  url: "",
  image: "",
  weight: "",
  children: []
}, $n = {
  overview: Gn,
  new: {
    tid: "",
    pid: "",
    name: "Produktneuheiten",
    url: "/de/produkte/produktneuheiten",
    image: "",
    weight: "",
    children: []
  },
  all: Dn
}, Fn = {
  tid: "",
  pid: "",
  name: "Product overview",
  url: "/en/products",
  image: "",
  weight: "",
  children: []
}, kn = {
  tid: "",
  pid: "",
  name: "Show all",
  url: "",
  image: "",
  weight: "",
  children: []
}, jn = {
  overview: Fn,
  new: {
    tid: "",
    pid: "",
    name: "New products",
    url: "/en/products/new-products",
    image: "",
    weight: "",
    children: []
  },
  all: kn
}, Vn = {
  tid: "",
  pid: "",
  name: "Aperçu des produits",
  url: "/fr/produits",
  image: "",
  weight: "",
  children: []
}, Xn = {
  tid: "",
  pid: "",
  name: "Afficher tout",
  url: "",
  image: "",
  weight: "",
  children: []
}, zn = {
  overview: Vn,
  new: {
    tid: "",
    pid: "",
    name: "Nouveautés de produits",
    url: "/fr/produits/nouveaux-produits",
    image: "",
    weight: "",
    children: []
  },
  all: Xn
}, Wn = {
  tid: "",
  pid: "",
  name: "Resumen de productos",
  url: "/es/productos",
  image: "",
  weight: "",
  children: []
}, Zn = {
  tid: "",
  pid: "",
  name: "Mostrar todo",
  url: "",
  image: "",
  weight: "",
  children: []
}, qn = {
  overview: Wn,
  new: {
    tid: "",
    pid: "",
    name: "Novedades de productos",
    url: "/es/productos/novedades",
    image: "",
    weight: "",
    children: []
  },
  all: Zn
}, Jn = {
  tid: "",
  pid: "",
  name: "Panoramica dei prodotti",
  url: "/it/prodotti",
  image: "",
  weight: "",
  children: []
}, Qn = {
  tid: "",
  pid: "",
  name: "Mostra tutti",
  url: "",
  image: "",
  weight: "",
  children: []
}, Yn = {
  overview: Jn,
  new: {
    tid: "",
    pid: "",
    name: "Novità sui prodotti",
    url: "/it/prodotti/novita-prodotti",
    image: "",
    weight: "",
    children: []
  },
  all: Qn
};
q("de", $n);
q("en", jn);
q("fr", zn);
q("es", qn);
q("it", Yn);
let Kn = document.getElementsByTagName("html")[0].getAttribute("lang");
bn({
  fallbackLocale: "en",
  initialLocale: Kn
});
new nr({ component: Un, tagname: "product-menu" });
