function T() {
}
function Et(e) {
  return e();
}
function Qe() {
  return /* @__PURE__ */ Object.create(null);
}
function V(e) {
  e.forEach(Et);
}
function ke(e) {
  return typeof e == "function";
}
function ge(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let he;
function Ye(e, t) {
  return he || (he = document.createElement("a")), he.href = t, e === he.href;
}
function kt(e) {
  return Object.keys(e).length === 0;
}
function vt(e, ...t) {
  if (e == null)
    return T;
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function Vt(e, t, r) {
  e.$$.on_destroy.push(vt(t, r));
}
function Q(e, t) {
  e.appendChild(t);
}
function w(e, t, r) {
  e.insertBefore(t, r || null);
}
function S(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Xt(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function ee(e) {
  return document.createElement(e);
}
function Ve(e) {
  return document.createTextNode(e);
}
function te() {
  return Ve(" ");
}
function Wt() {
  return Ve("");
}
function _(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function zt(e) {
  return Array.from(e.childNodes);
}
function Zt(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function le(e, t, r) {
  e.classList[r ? "add" : "remove"](t);
}
let re;
function K(e) {
  re = e;
}
function qt() {
  if (!re)
    throw new Error("Function called outside component initialization");
  return re;
}
function Jt(e) {
  qt().$$.on_mount.push(e);
}
const R = [], Ke = [];
let U = [];
const et = [], Qt = /* @__PURE__ */ Promise.resolve();
let Ie = !1;
function Yt() {
  Ie || (Ie = !0, Qt.then(xt));
}
function Pe(e) {
  U.push(e);
}
const ye = /* @__PURE__ */ new Set();
let C = 0;
function xt() {
  if (C !== 0)
    return;
  const e = re;
  do {
    try {
      for (; C < R.length; ) {
        const t = R[C];
        C++, K(t), Kt(t.$$);
      }
    } catch (t) {
      throw R.length = 0, C = 0, t;
    }
    for (K(null), R.length = 0, C = 0; Ke.length; )
      Ke.pop()();
    for (let t = 0; t < U.length; t += 1) {
      const r = U[t];
      ye.has(r) || (ye.add(r), r());
    }
    U.length = 0;
  } while (R.length);
  for (; et.length; )
    et.pop()();
  Ie = !1, ye.clear(), K(e);
}
function Kt(e) {
  if (e.fragment !== null) {
    e.update(), V(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Pe);
  }
}
function er(e) {
  const t = [], r = [];
  U.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach((n) => n()), U = t;
}
const ce = /* @__PURE__ */ new Set();
let L;
function Le() {
  L = {
    r: 0,
    c: [],
    p: L
    // parent group
  };
}
function Me() {
  L.r || V(L.c), L = L.p;
}
function x(e, t) {
  e && e.i && (ce.delete(e), e.i(t));
}
function H(e, t, r, n) {
  if (e && e.o) {
    if (ce.has(e))
      return;
    ce.add(e), L.c.push(() => {
      ce.delete(e), n && (r && e.d(1), n());
    }), e.o(t);
  } else
    n && n();
}
function ne(e) {
  e && e.c();
}
function G(e, t, r, n) {
  const { fragment: i, after_update: s } = e.$$;
  i && i.m(t, r), n || Pe(() => {
    const o = e.$$.on_mount.map(Et).filter(ke);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : V(o), e.$$.on_mount = [];
  }), s.forEach(Pe);
}
function D(e, t) {
  const r = e.$$;
  r.fragment !== null && (er(r.after_update), V(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function tr(e, t) {
  e.$$.dirty[0] === -1 && (R.push(e), Yt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Xe(e, t, r, n, i, s, o, h = [-1]) {
  const l = re;
  K(e);
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
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Qe(),
    dirty: h,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  o && o(a.root);
  let u = !1;
  if (a.ctx = r ? r(e, t.props || {}, (f, c, ...m) => {
    const E = m.length ? m[0] : c;
    return a.ctx && i(a.ctx[f], a.ctx[f] = E) && (!a.skip_bound && a.bound[f] && a.bound[f](E), u && tr(e, f)), c;
  }) : [], a.update(), u = !0, V(a.before_update), a.fragment = n ? n(a.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = zt(t.target);
      a.fragment && a.fragment.l(f), f.forEach(S);
    } else
      a.fragment && a.fragment.c();
    t.intro && x(e.$$.fragment), G(e, t.target, t.anchor, t.customElement), xt();
  }
  K(l);
}
class We {
  $destroy() {
    D(this, 1), this.$destroy = T;
  }
  $on(t, r) {
    if (!ke(r))
      return T;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(r), () => {
      const i = n.indexOf(r);
      i !== -1 && n.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !kt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function He(e) {
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
function rr(e) {
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
      this.slotcount = Object.keys(i).length, n.$$slots = He(i), this.elem = new e.component({ target: this._root, props: n });
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
          let h = this.getShadowSlots();
          Object.keys(h).length && (i.$$slots = He(h), this.elem.$set({ $$slots: He(h) }), this.slotcount != Object.keys(h).length && (Array.from(this.attributes).forEach((l) => i[l.name] = l.value), this.slotcount = Object.keys(h).length, n.innerHTML = "", this.elem = new e.component({ target: n, props: i })));
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
      t = ee("img"), Ye(t.src, r = it + /*menuItem*/
      e[0].image) || _(t, "src", r), _(t, "width", "300"), _(t, "height", "300"), _(t, "loading", "lazy"), _(t, "typeof", "foaf:Image");
    },
    m(n, i) {
      w(n, t, i);
    },
    p(n, i) {
      i & /*menuItem*/
      1 && !Ye(t.src, r = it + /*menuItem*/
      n[0].image) && _(t, "src", r);
    },
    d(n) {
      n && S(t);
    }
  };
}
function rt(e) {
  let t, r, n, i;
  t = new jt({
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
      ne(t.$$.fragment), r = te(), s && s.c(), n = Wt();
    },
    m(o, h) {
      G(t, o, h), w(o, r, h), s && s.m(o, h), w(o, n, h), i = !0;
    },
    p(o, h) {
      const l = {};
      h & /*menuItem*/
      1 && (l.menu = /*menuItem*/
      o[0].children), h & /*menuItem*/
      1 && (l.level = /*menuItem*/
      o[0].level), t.$set(l), /*level*/
      o[1] === 1 ? s || (s = nt(), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null);
    },
    i(o) {
      i || (x(t.$$.fragment, o), i = !0);
    },
    o(o) {
      H(t.$$.fragment, o), i = !1;
    },
    d(o) {
      D(t, o), o && S(r), s && s.d(o), o && S(n);
    }
  };
}
function nt(e) {
  let t;
  return {
    c() {
      t = ee("span"), t.innerHTML = "<i></i>", _(t, "class", "expand-sub");
    },
    m(r, n) {
      w(r, t, n);
    },
    d(r) {
      r && S(t);
    }
  };
}
function nr(e) {
  let t, r, n, i = (
    /*menuItem*/
    e[0].name + ""
  ), s, o, h, l, a, u = (
    /*menuItem*/
    e[0].image.length > 0 && tt(e)
  ), f = (
    /*menuItem*/
    e[0].children.length > 0 && rt(e)
  );
  return {
    c() {
      t = ee("li"), u && u.c(), r = te(), n = ee("a"), s = Ve(i), h = te(), f && f.c(), _(n, "href", o = /*menuItem*/
      e[0].url), _(t, "class", l = "main-menu__item with-image main-menu__item--sub main-menu__item--sub-" + /*level*/
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
      w(c, t, m), u && u.m(t, null), Q(t, r), Q(t, n), Q(n, s), Q(t, h), f && f.m(t, null), a = !0;
    },
    p(c, [m]) {
      /*menuItem*/
      c[0].image.length > 0 ? u ? u.p(c, m) : (u = tt(c), u.c(), u.m(t, r)) : u && (u.d(1), u = null), (!a || m & /*menuItem*/
      1) && i !== (i = /*menuItem*/
      c[0].name + "") && Zt(s, i), (!a || m & /*menuItem*/
      1 && o !== (o = /*menuItem*/
      c[0].url)) && _(n, "href", o), /*menuItem*/
      c[0].children.length > 0 ? f ? (f.p(c, m), m & /*menuItem*/
      1 && x(f, 1)) : (f = rt(c), f.c(), x(f, 1), f.m(t, null)) : f && (Le(), H(f, 1, 1, () => {
        f = null;
      }), Me()), (!a || m & /*level*/
      2 && l !== (l = "main-menu__item with-image main-menu__item--sub main-menu__item--sub-" + /*level*/
      c[1] + " sub-menu__item")) && _(t, "class", l), (!a || m & /*level, menuItem*/
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
      a || (x(f), a = !0);
    },
    o(c) {
      H(f), a = !1;
    },
    d(c) {
      c && S(t), u && u.d(), f && f.d();
    }
  };
}
let it = "https://shopnav-langwebsite.pantheonsite.io";
function ir(e, t, r) {
  let { menuItem: n } = t, { level: i } = t;
  return e.$$set = (s) => {
    "menuItem" in s && r(0, n = s.menuItem), "level" in s && r(1, i = s.level);
  }, [n, i];
}
class Ce extends We {
  constructor(t) {
    super(), Xe(this, t, ir, nr, ge, { menuItem: 0, level: 1 });
  }
}
const O = [];
function sr(e, t) {
  return {
    subscribe: Ee(e, t).subscribe
  };
}
function Ee(e, t = T) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function i(h) {
    if (ge(e, h) && (e = h, r)) {
      const l = !O.length;
      for (const a of n)
        a[1](), O.push(a, e);
      if (l) {
        for (let a = 0; a < O.length; a += 2)
          O[a][0](O[a + 1]);
        O.length = 0;
      }
    }
  }
  function s(h) {
    i(h(e));
  }
  function o(h, l = T) {
    const a = [h, l];
    return n.add(a), n.size === 1 && (r = t(i) || T), h(e), () => {
      n.delete(a), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function X(e, t, r) {
  const n = !Array.isArray(e), i = n ? [e] : e, s = t.length < 2;
  return sr(r, (o) => {
    let h = !1;
    const l = [];
    let a = 0, u = T;
    const f = () => {
      if (a)
        return;
      u();
      const m = t(n ? l[0] : l, o);
      s ? o(m) : u = ke(m) ? m : T;
    }, c = i.map((m, E) => vt(m, (y) => {
      l[E] = y, a &= ~(1 << E), h && f();
    }, () => {
      a |= 1 << E;
    }));
    return h = !0, f(), function() {
      V(c), u(), h = !1;
    };
  });
}
var or = function(t) {
  return ar(t) && !ur(t);
};
function ar(e) {
  return !!e && typeof e == "object";
}
function ur(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || fr(e);
}
var hr = typeof Symbol == "function" && Symbol.for, lr = hr ? Symbol.for("react.element") : 60103;
function fr(e) {
  return e.$$typeof === lr;
}
function cr(e) {
  return Array.isArray(e) ? [] : {};
}
function ie(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? F(cr(e), e, t) : e;
}
function mr(e, t, r) {
  return e.concat(t).map(function(n) {
    return ie(n, r);
  });
}
function pr(e, t) {
  if (!t.customMerge)
    return F;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : F;
}
function br(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function st(e) {
  return Object.keys(e).concat(br(e));
}
function _t(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function dr(e, t) {
  return _t(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function gr(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && st(e).forEach(function(i) {
    n[i] = ie(e[i], r);
  }), st(t).forEach(function(i) {
    dr(e, i) || (_t(e, i) && r.isMergeableObject(t[i]) ? n[i] = pr(i, r)(e[i], t[i], r) : n[i] = ie(t[i], r));
  }), n;
}
function F(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || mr, r.isMergeableObject = r.isMergeableObject || or, r.cloneUnlessOtherwiseSpecified = ie;
  var n = Array.isArray(t), i = Array.isArray(e), s = n === i;
  return s ? n ? r.arrayMerge(e, t, r) : gr(e, t, r) : ie(t, r);
}
F.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, i) {
    return F(n, i, r);
  }, {});
};
var Er = F, vr = Er, Oe = function(e, t) {
  return Oe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Oe(e, t);
};
function ve(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Oe(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var d = function() {
  return d = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, d.apply(this, arguments);
};
function Te(e, t, r) {
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
var $;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})($ || ($ = {}));
function ot(e) {
  return e.type === g.literal;
}
function xr(e) {
  return e.type === g.argument;
}
function yt(e) {
  return e.type === g.number;
}
function Ht(e) {
  return e.type === g.date;
}
function Tt(e) {
  return e.type === g.time;
}
function At(e) {
  return e.type === g.select;
}
function St(e) {
  return e.type === g.plural;
}
function _r(e) {
  return e.type === g.pound;
}
function Bt(e) {
  return e.type === g.tag;
}
function wt(e) {
  return !!(e && typeof e == "object" && e.type === $.number);
}
function Re(e) {
  return !!(e && typeof e == "object" && e.type === $.dateTime);
}
var Nt = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, yr = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Hr(e) {
  var t = {};
  return e.replace(yr, function(r) {
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
var Tr = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ar(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Tr).filter(function(c) {
    return c.length > 0;
  }), r = [], n = 0, i = t; n < i.length; n++) {
    var s = i[n], o = s.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var h = o[0], l = o.slice(1), a = 0, u = l; a < u.length; a++) {
      var f = u[a];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    r.push({ stem: h, options: l });
  }
  return r;
}
function Sr(e) {
  return e.replace(/^(.*?)-/, "");
}
var at = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, It = /^(@+)?(\+|#+)?[rs]?$/g, Br = /(\*)(0+)|(#+)(0+)|(0+)/g, Pt = /^(0+)$/;
function ut(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(It, function(r, n, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : i === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Lt(e) {
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
function wr(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Pt.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function ht(e) {
  var t = {}, r = Lt(e);
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
        t.style = "unit", t.unit = Sr(i.options[0]);
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
        t = d(d(d({}, t), { notation: "scientific" }), i.options.reduce(function(l, a) {
          return d(d({}, l), ht(a));
        }, {}));
        continue;
      case "engineering":
        t = d(d(d({}, t), { notation: "engineering" }), i.options.reduce(function(l, a) {
          return d(d({}, l), ht(a));
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
        i.options[0].replace(Br, function(l, a, u, f, c, m) {
          if (a)
            t.minimumIntegerDigits = u.length;
          else {
            if (f && c)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Pt.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (at.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(at, function(l, a, u, f, c, m) {
        return u === "*" ? t.minimumFractionDigits = a.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : c && m ? (t.minimumFractionDigits = c.length, t.maximumFractionDigits = c.length + m.length) : (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length), "";
      });
      var s = i.options[0];
      s === "w" ? t = d(d({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = d(d({}, t), ut(s)));
      continue;
    }
    if (It.test(i.stem)) {
      t = d(d({}, t), ut(i.stem));
      continue;
    }
    var o = Lt(i.stem);
    o && (t = d(d({}, t), o));
    var h = wr(i.stem);
    h && (t = d(d({}, t), h));
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
function Ir(e, t) {
  for (var r = "", n = 0; n < e.length; n++) {
    var i = e.charAt(n);
    if (i === "j") {
      for (var s = 0; n + 1 < e.length && e.charAt(n + 1) === i; )
        s++, n++;
      var o = 1 + (s & 1), h = s < 2 ? 1 : 3 + (s >> 1), l = "a", a = Pr(t);
      for ((a == "H" || a == "k") && (h = 0); h-- > 0; )
        r += l;
      for (; o-- > 0; )
        r = a + r;
    } else
      i === "J" ? r += "H" : r += i;
  }
  return r;
}
function Pr(e) {
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
var Ae, Lr = new RegExp("^".concat(Nt.source, "*")), Mr = new RegExp("".concat(Nt.source, "*$"));
function b(e, t) {
  return { start: e, end: t };
}
var Cr = !!String.prototype.startsWith, Or = !!String.fromCodePoint, Rr = !!Object.fromEntries, Ur = !!String.prototype.codePointAt, Gr = !!String.prototype.trimStart, Dr = !!String.prototype.trimEnd, Fr = !!Number.isSafeInteger, $r = Fr ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Ue = !0;
try {
  var jr = Ct("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ue = ((Ae = jr.exec("a")) === null || Ae === void 0 ? void 0 : Ae[0]) === "a";
} catch {
  Ue = !1;
}
var lt = Cr ? (
  // Native
  function(t, r, n) {
    return t.startsWith(r, n);
  }
) : (
  // For IE11
  function(t, r, n) {
    return t.slice(n, n + r.length) === r;
  }
), Ge = Or ? String.fromCodePoint : (
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
  Rr ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var r = {}, n = 0, i = t; n < i.length; n++) {
        var s = i[n], o = s[0], h = s[1];
        r[o] = h;
      }
      return r;
    }
  )
), Mt = Ur ? (
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
), kr = Gr ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Lr, "");
  }
), Vr = Dr ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Mr, "");
  }
);
function Ct(e, t) {
  return new RegExp(e, t);
}
var De;
if (Ue) {
  var ct = Ct("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  De = function(t, r) {
    var n;
    ct.lastIndex = r;
    var i = ct.exec(t);
    return (n = i[1]) !== null && n !== void 0 ? n : "";
  };
} else
  De = function(t, r) {
    for (var n = []; ; ) {
      var i = Mt(t, r);
      if (i === void 0 || Ot(i) || Zr(i))
        break;
      n.push(i), r += i >= 65536 ? 2 : 1;
    }
    return Ge.apply(void 0, n);
  };
var Xr = (
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
            var h = this.clonePosition();
            this.bump(), i.push({
              type: g.pound,
              location: b(h, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(p.UNMATCHED_CLOSING_TAG, b(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && Fe(this.peek() || 0)) {
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
            location: b(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, r, !0);
        if (s.err)
          return s;
        var o = s.val, h = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Fe(this.char()))
            return this.error(p.INVALID_TAG, b(h, this.clonePosition()));
          var l = this.clonePosition(), a = this.parseTagName();
          return i !== a ? this.error(p.UNMATCHED_CLOSING_TAG, b(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: g.tag,
              value: i,
              children: o,
              location: b(n, this.clonePosition())
            },
            err: null
          } : this.error(p.INVALID_TAG, b(h, this.clonePosition())));
        } else
          return this.error(p.UNCLOSED_TAG, b(n, this.clonePosition()));
      } else
        return this.error(p.INVALID_TAG, b(n, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && zr(this.char()); )
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
        var h = this.tryParseLeftAngleBracket();
        if (h) {
          i += h;
          continue;
        }
        break;
      }
      var l = b(n, this.clonePosition());
      return {
        val: { type: g.literal, value: i, location: l },
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
        return this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, b(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(p.EMPTY_ARGUMENT, b(n, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(p.MALFORMED_ARGUMENT, b(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, b(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: g.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: b(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, b(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
        default:
          return this.error(p.MALFORMED_ARGUMENT, b(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), r = this.offset(), n = De(this.message, r), i = r + n.length;
      this.bumpTo(i);
      var s = this.clonePosition(), o = b(t, s);
      return { value: n, location: o };
    }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
      var s, o = this.clonePosition(), h = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (h) {
        case "":
          return this.error(p.EXPECT_ARGUMENT_TYPE, b(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var a = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var u = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
            if (f.err)
              return f;
            var c = Vr(f.val);
            if (c.length === 0)
              return this.error(p.EXPECT_ARGUMENT_STYLE, b(this.clonePosition(), this.clonePosition()));
            var m = b(u, this.clonePosition());
            a = { style: c, styleLocation: m };
          }
          var E = this.tryParseArgumentClose(i);
          if (E.err)
            return E;
          var y = b(i, this.clonePosition());
          if (a && lt(a == null ? void 0 : a.style, "::", 0)) {
            var I = kr(a.style.slice(2));
            if (h === "number") {
              var f = this.parseNumberSkeletonFromString(I, a.styleLocation);
              return f.err ? f : {
                val: { type: g.number, value: n, location: y, style: f.val },
                err: null
              };
            } else {
              if (I.length === 0)
                return this.error(p.EXPECT_DATE_TIME_SKELETON, y);
              var Z = I;
              this.locale && (Z = Ir(I, this.locale));
              var c = {
                type: $.dateTime,
                pattern: Z,
                location: a.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Hr(Z) : {}
              }, M = h === "date" ? g.date : g.time;
              return {
                val: { type: M, value: n, location: y, style: c },
                err: null
              };
            }
          }
          return {
            val: {
              type: h === "number" ? g.number : h === "date" ? g.date : g.time,
              value: n,
              location: y,
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
            return this.error(p.EXPECT_SELECT_ARGUMENT_OPTIONS, b(A, d({}, A)));
          this.bumpSpace();
          var q = this.parseIdentifierIfPossible(), P = 0;
          if (h !== "select" && q.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(p.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, b(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(p.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, p.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), q = this.parseIdentifierIfPossible(), P = f.val;
          }
          var ue = this.tryParsePluralOrSelectOptions(t, h, r, q);
          if (ue.err)
            return ue;
          var E = this.tryParseArgumentClose(i);
          if (E.err)
            return E;
          var Je = b(i, this.clonePosition());
          return h === "select" ? {
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
              pluralType: h === "plural" ? "cardinal" : "ordinal",
              location: Je
            },
            err: null
          };
        }
        default:
          return this.error(p.INVALID_ARGUMENT_TYPE, b(o, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, b(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(p.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, b(i, this.clonePosition()));
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
        n = Ar(t);
      } catch {
        return this.error(p.INVALID_NUMBER_SKELETON, r);
      }
      return {
        val: {
          type: $.number,
          tokens: n,
          location: r,
          parsedOptions: this.shouldParseSkeletons ? Nr(n) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, r, n, i) {
      for (var s, o = !1, h = [], l = /* @__PURE__ */ new Set(), a = i.value, u = i.location; ; ) {
        if (a.length === 0) {
          var f = this.clonePosition();
          if (r !== "select" && this.bumpIf("=")) {
            var c = this.tryParseDecimalInteger(p.EXPECT_PLURAL_ARGUMENT_SELECTOR, p.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (c.err)
              return c;
            u = b(f, this.clonePosition()), a = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (l.has(a))
          return this.error(r === "select" ? p.DUPLICATE_SELECT_ARGUMENT_SELECTOR : p.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
        a === "other" && (o = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? p.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : p.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, b(this.clonePosition(), this.clonePosition()));
        var E = this.parseMessage(t + 1, r, n);
        if (E.err)
          return E;
        var y = this.tryParseArgumentClose(m);
        if (y.err)
          return y;
        h.push([
          a,
          {
            value: E.val,
            location: b(m, this.clonePosition())
          }
        ]), l.add(a), this.bumpSpace(), s = this.parseIdentifierIfPossible(), a = s.value, u = s.location;
      }
      return h.length === 0 ? this.error(r === "select" ? p.EXPECT_SELECT_ARGUMENT_SELECTOR : p.EXPECT_PLURAL_ARGUMENT_SELECTOR, b(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(p.MISSING_OTHER_CLAUSE, b(this.clonePosition(), this.clonePosition())) : { val: h, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, r) {
      var n = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var s = !1, o = 0; !this.isEOF(); ) {
        var h = this.char();
        if (h >= 48 && h <= 57)
          s = !0, o = o * 10 + (h - 48), this.bump();
        else
          break;
      }
      var l = b(i, this.clonePosition());
      return s ? (o *= n, $r(o) ? { val: o, err: null } : this.error(r, l)) : this.error(t, l);
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
      var r = Mt(this.message, t);
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
      for (; !this.isEOF() && Ot(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), r = this.offset(), n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
      return n ?? null;
    }, e;
  }()
);
function Fe(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Wr(e) {
  return Fe(e) || e === 47;
}
function zr(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Ot(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Zr(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function $e(e) {
  e.forEach(function(t) {
    if (delete t.location, At(t) || St(t))
      for (var r in t.options)
        delete t.options[r].location, $e(t.options[r].value);
    else
      yt(t) && wt(t.style) || (Ht(t) || Tt(t)) && Re(t.style) ? delete t.style.location : Bt(t) && $e(t.children);
  });
}
function qr(e, t) {
  t === void 0 && (t = {}), t = d({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new Xr(e, t).parse();
  if (r.err) {
    var n = SyntaxError(p[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return t != null && t.captureLocation || $e(r.val), r.val;
}
function Se(e, t) {
  var r = t && t.cache ? t.cache : tn, n = t && t.serializer ? t.serializer : en, i = t && t.strategy ? t.strategy : Qr;
  return i(e, {
    cache: r,
    serializer: n
  });
}
function Jr(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Rt(e, t, r, n) {
  var i = Jr(n) ? n : r(n), s = t.get(i);
  return typeof s > "u" && (s = e.call(this, n), t.set(i, s)), s;
}
function Ut(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3), i = r(n), s = t.get(i);
  return typeof s > "u" && (s = e.apply(this, n), t.set(i, s)), s;
}
function ze(e, t, r, n, i) {
  return r.bind(t, e, n, i);
}
function Qr(e, t) {
  var r = e.length === 1 ? Rt : Ut;
  return ze(e, this, r, t.cache.create(), t.serializer);
}
function Yr(e, t) {
  return ze(e, this, Ut, t.cache.create(), t.serializer);
}
function Kr(e, t) {
  return ze(e, this, Rt, t.cache.create(), t.serializer);
}
var en = function() {
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
var tn = {
  create: function() {
    return new Ze();
  }
}, Be = {
  variadic: Yr,
  monadic: Kr
}, j;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(j || (j = {}));
var xe = (
  /** @class */
  function(e) {
    ve(t, e);
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
    ve(t, e);
    function t(r, n, i, s) {
      return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), j.INVALID_VALUE, s) || this;
    }
    return t;
  }(xe)
), rn = (
  /** @class */
  function(e) {
    ve(t, e);
    function t(r, n, i) {
      return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), j.INVALID_VALUE, i) || this;
    }
    return t;
  }(xe)
), nn = (
  /** @class */
  function(e) {
    ve(t, e);
    function t(r, n) {
      return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), j.MISSING_VALUE, n) || this;
    }
    return t;
  }(xe)
), v;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(v || (v = {}));
function sn(e) {
  return e.length < 2 ? e : e.reduce(function(t, r) {
    var n = t[t.length - 1];
    return !n || n.type !== v.literal || r.type !== v.literal ? t.push(r) : n.value += r.value, t;
  }, []);
}
function on(e) {
  return typeof e == "function";
}
function me(e, t, r, n, i, s, o) {
  if (e.length === 1 && ot(e[0]))
    return [
      {
        type: v.literal,
        value: e[0].value
      }
    ];
  for (var h = [], l = 0, a = e; l < a.length; l++) {
    var u = a[l];
    if (ot(u)) {
      h.push({
        type: v.literal,
        value: u.value
      });
      continue;
    }
    if (_r(u)) {
      typeof s == "number" && h.push({
        type: v.literal,
        value: r.getNumberFormat(t).format(s)
      });
      continue;
    }
    var f = u.value;
    if (!(i && f in i))
      throw new nn(f, o);
    var c = i[f];
    if (xr(u)) {
      (!c || typeof c == "string" || typeof c == "number") && (c = typeof c == "string" || typeof c == "number" ? String(c) : ""), h.push({
        type: typeof c == "string" ? v.literal : v.object,
        value: c
      });
      continue;
    }
    if (Ht(u)) {
      var m = typeof u.style == "string" ? n.date[u.style] : Re(u.style) ? u.style.parsedOptions : void 0;
      h.push({
        type: v.literal,
        value: r.getDateTimeFormat(t, m).format(c)
      });
      continue;
    }
    if (Tt(u)) {
      var m = typeof u.style == "string" ? n.time[u.style] : Re(u.style) ? u.style.parsedOptions : n.time.medium;
      h.push({
        type: v.literal,
        value: r.getDateTimeFormat(t, m).format(c)
      });
      continue;
    }
    if (yt(u)) {
      var m = typeof u.style == "string" ? n.number[u.style] : wt(u.style) ? u.style.parsedOptions : void 0;
      m && m.scale && (c = c * (m.scale || 1)), h.push({
        type: v.literal,
        value: r.getNumberFormat(t, m).format(c)
      });
      continue;
    }
    if (Bt(u)) {
      var E = u.children, y = u.value, I = i[y];
      if (!on(I))
        throw new rn(y, "function", o);
      var Z = me(E, t, r, n, i, s), M = I(Z.map(function(P) {
        return P.value;
      }));
      Array.isArray(M) || (M = [M]), h.push.apply(h, M.map(function(P) {
        return {
          type: typeof P == "string" ? v.literal : v.object,
          value: P
        };
      }));
    }
    if (At(u)) {
      var A = u.options[c] || u.options.other;
      if (!A)
        throw new mt(u.value, c, Object.keys(u.options), o);
      h.push.apply(h, me(A.value, t, r, n, i));
      continue;
    }
    if (St(u)) {
      var A = u.options["=".concat(c)];
      if (!A) {
        if (!Intl.PluralRules)
          throw new xe(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, j.MISSING_INTL_API, o);
        var q = r.getPluralRules(t, { type: u.pluralType }).select(c - (u.offset || 0));
        A = u.options[q] || u.options.other;
      }
      if (!A)
        throw new mt(u.value, c, Object.keys(u.options), o);
      h.push.apply(h, me(A.value, t, r, n, i, c - (u.offset || 0)));
      continue;
    }
  }
  return sn(h);
}
function an(e, t) {
  return t ? d(d(d({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
    return r[n] = d(d({}, e[n]), t[n] || {}), r;
  }, {})) : e;
}
function un(e, t) {
  return t ? Object.keys(e).reduce(function(r, n) {
    return r[n] = an(e[n], t[n]), r;
  }, d({}, e)) : e;
}
function we(e) {
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
function hn(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Se(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, Te([void 0], r, !1)))();
    }, {
      cache: we(e.number),
      strategy: Be.variadic
    }),
    getDateTimeFormat: Se(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Te([void 0], r, !1)))();
    }, {
      cache: we(e.dateTime),
      strategy: Be.variadic
    }),
    getPluralRules: Se(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, Te([void 0], r, !1)))();
    }, {
      cache: we(e.pluralRules),
      strategy: Be.variadic
    })
  };
}
var ln = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      var s = this;
      if (r === void 0 && (r = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var h = s.formatToParts(o);
        if (h.length === 1)
          return h[0].value;
        var l = h.reduce(function(a, u) {
          return !a.length || u.type !== v.literal || typeof a[a.length - 1] != "string" ? a.push(u.value) : a[a.length - 1] += u.value, a;
        }, []);
        return l.length <= 1 ? l[0] || "" : l;
      }, this.formatToParts = function(o) {
        return me(s.ast, s.locales, s.formatters, s.formats, o, void 0, s.message);
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
      this.formats = un(e.formats, n), this.formatters = i && i.formatters || hn(this.formatterCache);
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
    }, e.__parse = qr, e.formats = {
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
const B = {}, fn = (e, t, r) => r && (t in B || (B[t] = {}), e in B[t] || (B[t][e] = r), r), Gt = (e, t) => {
  if (t == null)
    return;
  if (t in B && e in B[t])
    return B[t][e];
  const r = ae(t);
  for (let n = 0; n < r.length; n++) {
    const i = cn(r[n], e);
    if (i)
      return fn(e, t, i);
  }
};
let qe;
const oe = Ee({});
function Dt(e) {
  return e in qe;
}
function cn(e, t) {
  if (!Dt(e))
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
    for (let h = 0; h < s.length; h++)
      if (typeof o == "object") {
        if (h > 0) {
          const l = s.slice(h, s.length).join(".");
          if (l in o) {
            o = o[l];
            break;
          }
        }
        o = o[s[h]];
      } else
        o = void 0;
    return o;
  }(r, t);
}
function W(e, ...t) {
  delete B[e], oe.update((r) => (r[e] = vr.all([r[e] || {}, ...t]), r));
}
X([oe], ([e]) => Object.keys(e));
oe.subscribe((e) => qe = e);
const pe = {};
function Ft(e) {
  return pe[e];
}
function de(e) {
  return e != null && ae(e).some((t) => {
    var r;
    return (r = Ft(t)) === null || r === void 0 ? void 0 : r.size;
  });
}
function mn(e, t) {
  return Promise.all(t.map((n) => (function(i, s) {
    pe[i].delete(s), pe[i].size === 0 && delete pe[i];
  }(e, n), n().then((i) => i.default || i)))).then((n) => W(e, ...n));
}
const J = {};
function $t(e) {
  if (!de(e))
    return e in J ? J[e] : Promise.resolve();
  const t = function(r) {
    return ae(r).map((n) => {
      const i = Ft(n);
      return [n, i ? [...i] : []];
    }).filter(([, n]) => n.length > 0);
  }(e);
  return J[e] = Promise.all(t.map(([r, n]) => mn(r, n))).then(() => {
    if (de(e))
      return $t(e);
    delete J[e];
  }), J[e];
}
function pn({ locale: e, id: t }) {
  console.warn(`[svelte-i18n] The message "${t}" was not found in "${ae(e).join('", "')}".${de(N()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`);
}
const Y = { fallbackLocale: null, loadingDelay: 200, formats: { number: { scientific: { notation: "scientific" }, engineering: { notation: "engineering" }, compactLong: { notation: "compact", compactDisplay: "long" }, compactShort: { notation: "compact", compactDisplay: "short" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } }, warnOnMissingMessages: !0, handleMissingMessage: void 0, ignoreTag: !0 };
function k() {
  return Y;
}
function bn(e) {
  const { formats: t, ...r } = e, n = e.initialLocale || e.fallbackLocale;
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = pn : console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')), Object.assign(Y, r, { initialLocale: n }), t && ("number" in t && Object.assign(Y.formats.number, t.number), "date" in t && Object.assign(Y.formats.date, t.date), "time" in t && Object.assign(Y.formats.time, t.time)), z.set(n);
}
const Ne = Ee(!1);
let je;
const be = Ee(null);
function pt(e) {
  return e.split("-").map((t, r, n) => n.slice(0, r + 1).join("-")).reverse();
}
function ae(e, t = k().fallbackLocale) {
  const r = pt(e);
  return t ? [.../* @__PURE__ */ new Set([...r, ...pt(t)])] : r;
}
function N() {
  return je ?? void 0;
}
be.subscribe((e) => {
  je = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const z = { ...be, set: (e) => {
  if (e && function(t) {
    if (t == null)
      return;
    const r = ae(t);
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      if (Dt(i))
        return i;
    }
  }(e) && de(e)) {
    const { loadingDelay: t } = k();
    let r;
    return typeof window < "u" && N() != null && t ? r = window.setTimeout(() => Ne.set(!0), t) : Ne.set(!0), $t(e).then(() => {
      be.set(e);
    }).finally(() => {
      clearTimeout(r), Ne.set(!1);
    });
  }
  return be.set(e);
} }, _e = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const n = JSON.stringify(r);
    return n in t ? t[n] : t[n] = e(r);
  };
}, se = (e, t) => {
  const { formats: r } = k();
  if (e in r && t in r[e])
    return r[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, dn = _e(({ locale: e, format: t, ...r }) => {
  if (e == null)
    throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
  return t && (r = se("number", t)), new Intl.NumberFormat(e, r);
}), gn = _e(({ locale: e, format: t, ...r }) => {
  if (e == null)
    throw new Error('[svelte-i18n] A "locale" must be set to format dates');
  return t ? r = se("date", t) : Object.keys(r).length === 0 && (r = se("date", "short")), new Intl.DateTimeFormat(e, r);
}), En = _e(({ locale: e, format: t, ...r }) => {
  if (e == null)
    throw new Error('[svelte-i18n] A "locale" must be set to format time values');
  return t ? r = se("time", t) : Object.keys(r).length === 0 && (r = se("time", "short")), new Intl.DateTimeFormat(e, r);
}), vn = ({ locale: e = N(), ...t } = {}) => dn({ locale: e, ...t }), xn = ({ locale: e = N(), ...t } = {}) => gn({ locale: e, ...t }), _n = ({ locale: e = N(), ...t } = {}) => En({ locale: e, ...t }), yn = _e((e, t = N()) => new ln(e, t, k().formats, { ignoreTag: k().ignoreTag })), Hn = (e, t = {}) => {
  var r, n, i, s;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const { values: h, locale: l = N(), default: a } = o;
  if (l == null)
    throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
  let u = Gt(e, l);
  if (u) {
    if (typeof u != "string")
      return console.warn(`[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof u}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`), u;
  } else
    u = (s = (i = (n = (r = k()).handleMissingMessage) === null || n === void 0 ? void 0 : n.call(r, { locale: l, id: e, defaultValue: a })) !== null && i !== void 0 ? i : a) !== null && s !== void 0 ? s : e;
  if (!h)
    return u;
  let f = u;
  try {
    f = yn(u, l).format(h);
  } catch (c) {
    c instanceof Error && console.warn(`[svelte-i18n] Message "${e}" has syntax error:`, c.message);
  }
  return f;
}, Tn = (e, t) => _n(t).format(e), An = (e, t) => xn(t).format(e), Sn = (e, t) => vn(t).format(e), Bn = (e, t = N()) => Gt(e, t), wn = X([z, oe], () => Hn);
X([z], () => Tn);
X([z], () => An);
X([z], () => Sn);
X([z, oe], () => Bn);
function bt(e, t, r) {
  const n = e.slice();
  return n[5] = t[r], n;
}
function dt(e) {
  let t, r;
  return t = new Ce({
    props: {
      menuItem: (
        /*menuItem*/
        e[5]
      ),
      level: (
        /*level*/
        e[1]
      )
    }
  }), {
    c() {
      ne(t.$$.fragment);
    },
    m(n, i) {
      G(t, n, i), r = !0;
    },
    p(n, i) {
      const s = {};
      i & /*menu*/
      1 && (s.menuItem = /*menuItem*/
      n[5]), i & /*level*/
      2 && (s.level = /*level*/
      n[1]), t.$set(s);
    },
    i(n) {
      r || (x(t.$$.fragment, n), r = !0);
    },
    o(n) {
      H(t.$$.fragment, n), r = !1;
    },
    d(n) {
      D(t, n);
    }
  };
}
function gt(e) {
  let t, r, n, i;
  return t = new Ce({
    props: {
      menuItem: (
        /*overviewItem*/
        e[2]
      ),
      level: (
        /*level*/
        e[1]
      )
    }
  }), n = new Ce({
    props: {
      menuItem: (
        /*newItem*/
        e[3]
      ),
      level: (
        /*level*/
        e[1]
      )
    }
  }), {
    c() {
      ne(t.$$.fragment), r = te(), ne(n.$$.fragment);
    },
    m(s, o) {
      G(t, s, o), w(s, r, o), G(n, s, o), i = !0;
    },
    p(s, o) {
      const h = {};
      o & /*level*/
      2 && (h.level = /*level*/
      s[1]), t.$set(h);
      const l = {};
      o & /*level*/
      2 && (l.level = /*level*/
      s[1]), n.$set(l);
    },
    i(s) {
      i || (x(t.$$.fragment, s), x(n.$$.fragment, s), i = !0);
    },
    o(s) {
      H(t.$$.fragment, s), H(n.$$.fragment, s), i = !1;
    },
    d(s) {
      D(t, s), s && S(r), D(n, s);
    }
  };
}
function Nn(e) {
  let t, r, n, i, s = (
    /*menu*/
    e[0]
  ), o = [];
  for (let a = 0; a < s.length; a += 1)
    o[a] = dt(bt(e, s, a));
  const h = (a) => H(o[a], 1, 1, () => {
    o[a] = null;
  });
  let l = (
    /*level*/
    e[1] === 1 && gt(e)
  );
  return {
    c() {
      t = ee("ul");
      for (let a = 0; a < o.length; a += 1)
        o[a].c();
      r = te(), l && l.c(), _(t, "class", n = "sub-menu sub-menu--sub sub-menu--sub-" + /*level*/
      e[1]);
    },
    m(a, u) {
      w(a, t, u);
      for (let f = 0; f < o.length; f += 1)
        o[f] && o[f].m(t, null);
      Q(t, r), l && l.m(t, null), i = !0;
    },
    p(a, [u]) {
      if (u & /*menu, level*/
      3) {
        s = /*menu*/
        a[0];
        let f;
        for (f = 0; f < s.length; f += 1) {
          const c = bt(a, s, f);
          o[f] ? (o[f].p(c, u), x(o[f], 1)) : (o[f] = dt(c), o[f].c(), x(o[f], 1), o[f].m(t, r));
        }
        for (Le(), f = s.length; f < o.length; f += 1)
          h(f);
        Me();
      }
      /*level*/
      a[1] === 1 ? l ? (l.p(a, u), u & /*level*/
      2 && x(l, 1)) : (l = gt(a), l.c(), x(l, 1), l.m(t, null)) : l && (Le(), H(l, 1, 1, () => {
        l = null;
      }), Me()), (!i || u & /*level*/
      2 && n !== (n = "sub-menu sub-menu--sub sub-menu--sub-" + /*level*/
      a[1])) && _(t, "class", n);
    },
    i(a) {
      if (!i) {
        for (let u = 0; u < s.length; u += 1)
          x(o[u]);
        x(l), i = !0;
      }
    },
    o(a) {
      o = o.filter(Boolean);
      for (let u = 0; u < o.length; u += 1)
        H(o[u]);
      H(l), i = !1;
    },
    d(a) {
      a && S(t), Xt(o, a), l && l.d();
    }
  };
}
function In(e, t, r) {
  let n;
  Vt(e, wn, (l) => r(4, n = l));
  let { menu: i } = t, { level: s = 1 } = t, o = n("overview"), h = n("new");
  return e.$$set = (l) => {
    "menu" in l && r(0, i = l.menu), "level" in l && r(1, s = l.level);
  }, [i, s, o, h];
}
class jt extends We {
  constructor(t) {
    super(), Xe(this, t, In, Nn, ge, { menu: 0, level: 1 });
  }
}
function Pn(e) {
  let t, r;
  return t = new jt({ props: { menu: (
    /*sortedMenu*/
    e[0]
  ) } }), {
    c() {
      ne(t.$$.fragment);
    },
    m(n, i) {
      G(t, n, i), r = !0;
    },
    p(n, [i]) {
      const s = {};
      i & /*sortedMenu*/
      1 && (s.menu = /*sortedMenu*/
      n[0]), t.$set(s);
    },
    i(n) {
      r || (x(t.$$.fragment, n), r = !0);
    },
    o(n) {
      H(t.$$.fragment, n), r = !1;
    },
    d(n) {
      D(t, n);
    }
  };
}
let Ln = "https://shopnav-langwebsite.pantheonsite.io", Mn = "/rest/product-menu", Cn = "?_format=json";
function On(e, t, r) {
  let n = "/de", i = [], s = [];
  function o() {
    let l = i.filter((a) => a.pid === "");
    return l.forEach((a) => {
      a.level = 2, a.children = h(a);
    }), l;
  }
  function h(l) {
    let a = i.filter((u) => u.pid === l.tid);
    return a && a.forEach((u) => {
      u.level = l.level + 1, u.children = h(u);
    }), a;
  }
  return Jt(() => {
    n = "/" + document.querySelector("html").lang, fetch(Ln + Mn + n + Cn, { method: "GET" }).then((l) => l.json()).then((l) => {
      i = l, r(0, s = o());
    });
  }), [s];
}
class Rn extends We {
  constructor(t) {
    super(), Xe(this, t, On, Pn, ge, {});
  }
}
const Un = {
  tid: "",
  pid: "",
  name: "Produktübersicht",
  url: "/de/produkte",
  image: "",
  weight: "",
  children: []
}, Gn = {
  overview: Un,
  new: {
    tid: "",
    pid: "",
    name: "Produktneuheiten",
    url: "/de/produkte/produktneuheiten",
    image: "",
    weight: "",
    children: []
  }
}, Dn = {
  tid: "",
  pid: "",
  name: "Product overview",
  url: "/en/products",
  image: "",
  weight: "",
  children: []
}, Fn = {
  overview: Dn,
  new: {
    tid: "",
    pid: "",
    name: "New products",
    url: "/en/products/new-products",
    image: "",
    weight: "",
    children: []
  }
}, $n = {
  tid: "",
  pid: "",
  name: "Aperçu des produits",
  url: "/fr/produits",
  image: "",
  weight: "",
  children: []
}, jn = {
  overview: $n,
  new: {
    tid: "",
    pid: "",
    name: "Nouveautés de produits",
    url: "/fr/produits/nouveaux-produits",
    image: "",
    weight: "",
    children: []
  }
}, kn = {
  tid: "",
  pid: "",
  name: "Resumen de productos",
  url: "/es/productos",
  image: "",
  weight: "",
  children: []
}, Vn = {
  overview: kn,
  new: {
    tid: "",
    pid: "",
    name: "Novedades de productos",
    url: "/es/productos/novedades",
    image: "",
    weight: "",
    children: []
  }
}, Xn = {
  tid: "",
  pid: "",
  name: "Panoramica dei prodotti",
  url: "/it/prodotti",
  image: "",
  weight: "",
  children: []
}, Wn = {
  overview: Xn,
  new: {
    tid: "",
    pid: "",
    name: "Novità sui prodotti",
    url: "/it/prodotti/novita-prodotti",
    image: "",
    weight: "",
    children: []
  }
};
W("de", Gn);
W("en", Fn);
W("fr", jn);
W("es", Vn);
W("it", Wn);
let zn = document.getElementsByTagName("html")[0].getAttribute("lang");
bn({
  fallbackLocale: "en",
  initialLocale: zn
});
new rr({ component: Rn, tagname: "product-menu" });
