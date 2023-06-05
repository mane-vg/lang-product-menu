function H() {
}
function vt(e) {
  return e();
}
function Je() {
  return /* @__PURE__ */ Object.create(null);
}
function q(e) {
  e.forEach(vt);
}
function $e(e) {
  return typeof e == "function";
}
function _e(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let he;
function Qe(e, t) {
  return he || (he = document.createElement("a")), he.href = t, e === he.href;
}
function Xt(e) {
  return Object.keys(e).length === 0;
}
function Et(e, ...t) {
  if (e == null)
    return H;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function zt(e, t, n) {
  e.$$.on_destroy.push(Et(t, n));
}
function F(e, t) {
  e.appendChild(t);
}
function Wt(e, t, n) {
  const r = Zt(e);
  if (!r.getElementById(t)) {
    const i = j("style");
    i.id = t, i.textContent = n, qt(r, i);
  }
}
function Zt(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && t.host ? t : e.ownerDocument;
}
function qt(e, t) {
  return F(e.head || e, t), t.sheet;
}
function B(e, t, n) {
  e.insertBefore(t, n || null);
}
function A(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Jt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function j(e) {
  return document.createElement(e);
}
function _t(e) {
  return document.createTextNode(e);
}
function $() {
  return _t(" ");
}
function Qt() {
  return _t("");
}
function _(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Yt(e) {
  return Array.from(e.childNodes);
}
function R(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
let ie;
function re(e) {
  ie = e;
}
function Kt() {
  if (!ie)
    throw new Error("Function called outside component initialization");
  return ie;
}
function xt(e) {
  Kt().$$.on_mount.push(e);
}
const D = [], Ye = [];
let k = [];
const Ke = [], en = /* @__PURE__ */ Promise.resolve();
let Me = !1;
function tn() {
  Me || (Me = !0, en.then(yt));
}
function Ce(e) {
  k.push(e);
}
const Te = /* @__PURE__ */ new Set();
let U = 0;
function yt() {
  if (U !== 0)
    return;
  const e = ie;
  do {
    try {
      for (; U < D.length; ) {
        const t = D[U];
        U++, re(t), nn(t.$$);
      }
    } catch (t) {
      throw D.length = 0, U = 0, t;
    }
    for (re(null), D.length = 0, U = 0; Ye.length; )
      Ye.pop()();
    for (let t = 0; t < k.length; t += 1) {
      const n = k[t];
      Te.has(n) || (Te.add(n), n());
    }
    k.length = 0;
  } while (D.length);
  for (; Ke.length; )
    Ke.pop()();
  Me = !1, Te.clear(), re(e);
}
function nn(e) {
  if (e.fragment !== null) {
    e.update(), q(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Ce);
  }
}
function rn(e) {
  const t = [], n = [];
  k.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), k = t;
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
  L.r || q(L.c), L = L.p;
}
function E(e, t) {
  e && e.i && (ce.delete(e), e.i(t));
}
function y(e, t, n, r) {
  if (e && e.o) {
    if (ce.has(e))
      return;
    ce.add(e), L.c.push(() => {
      ce.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function V(e) {
  e && e.c();
}
function M(e, t, n, r) {
  const { fragment: i, after_update: s } = e.$$;
  i && i.m(t, n), r || Ce(() => {
    const o = e.$$.on_mount.map(vt).filter($e);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : q(o), e.$$.on_mount = [];
  }), s.forEach(Ce);
}
function C(e, t) {
  const n = e.$$;
  n.fragment !== null && (rn(n.after_update), q(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function sn(e, t) {
  e.$$.dirty[0] === -1 && (D.push(e), tn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ve(e, t, n, r, i, s, o, u = [-1]) {
  const h = ie;
  re(e);
  const a = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: H,
    not_equal: i,
    bound: Je(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: Je(),
    dirty: u,
    skip_bound: !1,
    root: t.target || h.$$.root
  };
  o && o(a.root);
  let l = !1;
  if (a.ctx = n ? n(e, t.props || {}, (f, c, ...m) => {
    const v = m.length ? m[0] : c;
    return a.ctx && i(a.ctx[f], a.ctx[f] = v) && (!a.skip_bound && a.bound[f] && a.bound[f](v), l && sn(e, f)), c;
  }) : [], a.update(), l = !0, q(a.before_update), a.fragment = r ? r(a.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = Yt(t.target);
      a.fragment && a.fragment.l(f), f.forEach(A);
    } else
      a.fragment && a.fragment.c();
    t.intro && E(e.$$.fragment), M(e, t.target, t.anchor, t.customElement), yt();
  }
  re(h);
}
class Xe {
  $destroy() {
    C(this, 1), this.$destroy = H;
  }
  $on(t, n) {
    if (!$e(n))
      return H;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !Xt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function Ae(e) {
  const t = {};
  for (const r in e)
    t[r] = [n(e[r])];
  function n(r) {
    return function() {
      return {
        c: H,
        m: function(s, o) {
          B(s, r.cloneNode(!0), o);
        },
        d: function(s) {
          s && r.innerHTML && A(r);
        },
        l: H
      };
    };
  }
  return t;
}
function an(e) {
  class t extends HTMLElement {
    constructor() {
      super(), this.slotcount = 0;
      let r = e.shadow ? this.attachShadow({ mode: "open" }) : this;
      if (e.href && e.shadow) {
        let i = document.createElement("link");
        i.setAttribute("href", e.href), i.setAttribute("rel", "stylesheet"), r.appendChild(i);
      }
      e.shadow ? (this._root = document.createElement("div"), r.appendChild(this._root)) : this._root = r;
    }
    static get observedAttributes() {
      return e.attributes || [];
    }
    connectedCallback() {
      let r = e.defaults ? e.defaults : {}, i;
      if (r.$$scope = {}, Array.from(this.attributes).forEach((s) => r[s.name] = s.value), r.$$scope = {}, e.shadow) {
        i = this.getShadowSlots();
        let s = e.defaults ? e.defaults : {};
        s.$$scope = {}, this.observer = new MutationObserver(this.processMutations.bind(this, { root: this._root, props: s })), this.observer.observe(this, { childList: !0, subtree: !0, attributes: !1 });
      } else
        i = this.getSlots();
      this.slotcount = Object.keys(i).length, r.$$slots = Ae(i), this.elem = new e.component({ target: this._root, props: r });
    }
    disconnectedCallback() {
      this.observe && this.observer.disconnect();
      try {
        this.elem.$destroy();
      } catch {
      }
    }
    unwrap(r) {
      let i = new DocumentFragment();
      for (; r.firstChild; )
        i.appendChild(r.removeChild(r.firstChild));
      return i;
    }
    getSlots() {
      const r = this.querySelectorAll("[slot]");
      let i = {};
      return r.forEach((s) => {
        i[s.slot] = this.unwrap(s), this.removeChild(s);
      }), this.innerHTML.length && (i.default = this.unwrap(this), this.innerHTML = ""), i;
    }
    getShadowSlots() {
      const r = this.querySelectorAll("[slot]");
      let i = {}, s = this.innerHTML.length;
      return r.forEach((o) => {
        i[o.slot] = document.createElement("slot"), i[o.slot].setAttribute("name", o.slot), s -= o.outerHTML.length;
      }), s > 0 && (i.default = document.createElement("slot")), i;
    }
    processMutations({ root: r, props: i }, s) {
      for (let o of s)
        if (o.type == "childList") {
          let u = this.getShadowSlots();
          Object.keys(u).length && (i.$$slots = Ae(u), this.elem.$set({ $$slots: Ae(u) }), this.slotcount != Object.keys(u).length && (Array.from(this.attributes).forEach((h) => i[h.name] = h.value), this.slotcount = Object.keys(u).length, r.innerHTML = "", this.elem = new e.component({ target: r, props: i })));
        }
    }
    attributeChangedCallback(r, i, s) {
      this.elem && s != i && this.elem.$set({ [r]: s });
    }
  }
  window.customElements.define(e.tagname, t);
}
function on(e) {
  Wt(e, "svelte-xcgc4o", ".sub-menu__item--active.svelte-xcgc4o>a.svelte-xcgc4o{color:red}");
}
function et(e) {
  let t, n;
  return {
    c() {
      t = j("img"), Qe(t.src, n = rt + /*image*/
      e[2]) || _(t, "src", n), _(t, "width", "300"), _(t, "height", "300"), _(t, "loading", "lazy"), _(t, "typeof", "foaf:Image"), _(
        t,
        "alt",
        /*name*/
        e[1]
      );
    },
    m(r, i) {
      B(r, t, i);
    },
    p(r, i) {
      i & /*image*/
      4 && !Qe(t.src, n = rt + /*image*/
      r[2]) && _(t, "src", n), i & /*name*/
      2 && _(
        t,
        "alt",
        /*name*/
        r[1]
      );
    },
    d(r) {
      r && A(t);
    }
  };
}
function tt(e) {
  let t, n, r, i;
  t = new Vt({
    props: {
      menu: (
        /*children*/
        e[3]
      ),
      level: (
        /*level*/
        e[0] + 1
      )
    }
  });
  let s = (
    /*level*/
    e[0] === 1 && nt()
  );
  return {
    c() {
      V(t.$$.fragment), n = $(), s && s.c(), r = Qt();
    },
    m(o, u) {
      M(t, o, u), B(o, n, u), s && s.m(o, u), B(o, r, u), i = !0;
    },
    p(o, u) {
      const h = {};
      u & /*children*/
      8 && (h.menu = /*children*/
      o[3]), u & /*level*/
      1 && (h.level = /*level*/
      o[0] + 1), t.$set(h), /*level*/
      o[0] === 1 ? s || (s = nt(), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null);
    },
    i(o) {
      i || (E(t.$$.fragment, o), i = !0);
    },
    o(o) {
      y(t.$$.fragment, o), i = !1;
    },
    d(o) {
      C(t, o), o && A(n), s && s.d(o), o && A(r);
    }
  };
}
function nt(e) {
  let t;
  return {
    c() {
      t = j("span"), t.innerHTML = "<i></i>", _(t, "class", "expand-sub");
    },
    m(n, r) {
      B(n, t, r);
    },
    d(n) {
      n && A(t);
    }
  };
}
function un(e) {
  let t, n, r, i, s, o, u = (
    /*image*/
    e[2].length > 0 && et(e)
  ), h = (
    /*children*/
    e[3].length > 0 && tt(e)
  );
  return {
    c() {
      t = j("li"), u && u.c(), n = $(), r = j("a"), i = $(), h && h.c(), _(
        r,
        "href",
        /*url*/
        e[4]
      ), _(r, "class", "svelte-xcgc4o"), _(t, "class", s = "main-menu__item with-image main-menu__item--sub main-menu__item--sub-" + /*level*/
      e[0] + " sub-menu__item svelte-xcgc4o"), R(
        t,
        "main-menu__item--with-sub",
        /*children*/
        e[3].length > 0
      ), R(
        t,
        "sub-menu__item--with-sub",
        /*children*/
        e[3].length > 0
      ), R(
        t,
        "sub-menu__item--active",
        /*level*/
        e[0] === 3 && /*url*/
        e[4].split("/")[5] === window.location.pathname.split("/")[5] && /*url*/
        e[4].split("/")[3] === window.location.pathname.split("/")[3] || window.location.pathname.indexOf(
          /*url*/
          e[4]
        ) >= 0 && /*url*/
        e[4].split("/").length > 3 && !/*all*/
        e[5] && /*level*/
        e[0] !== 3 || window.location.pathname === /*url*/
        e[4] && /*all*/
        e[5]
      );
    },
    m(a, l) {
      B(a, t, l), u && u.m(t, null), F(t, n), F(t, r), r.innerHTML = /*name*/
      e[1], F(t, i), h && h.m(t, null), o = !0;
    },
    p(a, [l]) {
      /*image*/
      a[2].length > 0 ? u ? u.p(a, l) : (u = et(a), u.c(), u.m(t, n)) : u && (u.d(1), u = null), (!o || l & /*name*/
      2) && (r.innerHTML = /*name*/
      a[1]), (!o || l & /*url*/
      16) && _(
        r,
        "href",
        /*url*/
        a[4]
      ), /*children*/
      a[3].length > 0 ? h ? (h.p(a, l), l & /*children*/
      8 && E(h, 1)) : (h = tt(a), h.c(), E(h, 1), h.m(t, null)) : h && (me(), y(h, 1, 1, () => {
        h = null;
      }), pe()), (!o || l & /*level*/
      1 && s !== (s = "main-menu__item with-image main-menu__item--sub main-menu__item--sub-" + /*level*/
      a[0] + " sub-menu__item svelte-xcgc4o")) && _(t, "class", s), (!o || l & /*level, children*/
      9) && R(
        t,
        "main-menu__item--with-sub",
        /*children*/
        a[3].length > 0
      ), (!o || l & /*level, children*/
      9) && R(
        t,
        "sub-menu__item--with-sub",
        /*children*/
        a[3].length > 0
      ), (!o || l & /*level, level, url, window, all*/
      49) && R(
        t,
        "sub-menu__item--active",
        /*level*/
        a[0] === 3 && /*url*/
        a[4].split("/")[5] === window.location.pathname.split("/")[5] && /*url*/
        a[4].split("/")[3] === window.location.pathname.split("/")[3] || window.location.pathname.indexOf(
          /*url*/
          a[4]
        ) >= 0 && /*url*/
        a[4].split("/").length > 3 && !/*all*/
        a[5] && /*level*/
        a[0] !== 3 || window.location.pathname === /*url*/
        a[4] && /*all*/
        a[5]
      );
    },
    i(a) {
      o || (E(h), o = !0);
    },
    o(a) {
      y(h), o = !1;
    },
    d(a) {
      a && A(t), u && u.d(), h && h.d();
    }
  };
}
let rt = "https://shopnav-langwebsite.pantheonsite.io";
function ln(e, t, n) {
  let { level: r } = t, { name: i } = t, { image: s = "" } = t, { children: o = [] } = t, { url: u } = t, { all: h = !1 } = t;
  return e.$$set = (a) => {
    "level" in a && n(0, r = a.level), "name" in a && n(1, i = a.name), "image" in a && n(2, s = a.image), "children" in a && n(3, o = a.children), "url" in a && n(4, u = a.url), "all" in a && n(5, h = a.all);
  }, [r, i, s, o, u, h];
}
class ve extends Xe {
  constructor(t) {
    super(), Ve(
      this,
      t,
      ln,
      un,
      _e,
      {
        level: 0,
        name: 1,
        image: 2,
        children: 3,
        url: 4,
        all: 5
      },
      on
    );
  }
}
const G = [];
function hn(e, t) {
  return {
    subscribe: xe(e, t).subscribe
  };
}
function xe(e, t = H) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (_e(e, u) && (e = u, n)) {
      const h = !G.length;
      for (const a of r)
        a[1](), G.push(a, e);
      if (h) {
        for (let a = 0; a < G.length; a += 2)
          G[a][0](G[a + 1]);
        G.length = 0;
      }
    }
  }
  function s(u) {
    i(u(e));
  }
  function o(u, h = H) {
    const a = [u, h];
    return r.add(a), r.size === 1 && (n = t(i) || H), u(e), () => {
      r.delete(a), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function J(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e, s = t.length < 2;
  return hn(n, (o) => {
    let u = !1;
    const h = [];
    let a = 0, l = H;
    const f = () => {
      if (a)
        return;
      l();
      const m = t(r ? h[0] : h, o);
      s ? o(m) : l = $e(m) ? m : H;
    }, c = i.map((m, v) => Et(m, (w) => {
      h[v] = w, a &= ~(1 << v), u && f();
    }, () => {
      a |= 1 << v;
    }));
    return u = !0, f(), function() {
      q(c), l(), u = !1;
    };
  });
}
var fn = function(t) {
  return cn(t) && !mn(t);
};
function cn(e) {
  return !!e && typeof e == "object";
}
function mn(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || dn(e);
}
var pn = typeof Symbol == "function" && Symbol.for, gn = pn ? Symbol.for("react.element") : 60103;
function dn(e) {
  return e.$$typeof === gn;
}
function bn(e) {
  return Array.isArray(e) ? [] : {};
}
function se(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? X(bn(e), e, t) : e;
}
function vn(e, t, n) {
  return e.concat(t).map(function(r) {
    return se(r, n);
  });
}
function En(e, t) {
  if (!t.customMerge)
    return X;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : X;
}
function _n(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function it(e) {
  return Object.keys(e).concat(_n(e));
}
function wt(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function xn(e, t) {
  return wt(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function yn(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && it(e).forEach(function(i) {
    r[i] = se(e[i], n);
  }), it(t).forEach(function(i) {
    xn(e, i) || (wt(e, i) && n.isMergeableObject(t[i]) ? r[i] = En(i, n)(e[i], t[i], n) : r[i] = se(t[i], n));
  }), r;
}
function X(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || vn, n.isMergeableObject = n.isMergeableObject || fn, n.cloneUnlessOtherwiseSpecified = se;
  var r = Array.isArray(t), i = Array.isArray(e), s = r === i;
  return s ? r ? n.arrayMerge(e, t, n) : yn(e, t, n) : se(t, n);
}
X.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return X(r, i, n);
  }, {});
};
var wn = X, Hn = wn, Oe = function(e, t) {
  return Oe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Oe(e, t);
};
function ye(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Oe(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var d = function() {
  return d = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, d.apply(this, arguments);
};
function Se(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, s; r < i; r++)
      (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var p;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(p || (p = {}));
var b;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(b || (b = {}));
var z;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(z || (z = {}));
function st(e) {
  return e.type === b.literal;
}
function Tn(e) {
  return e.type === b.argument;
}
function Ht(e) {
  return e.type === b.number;
}
function Tt(e) {
  return e.type === b.date;
}
function At(e) {
  return e.type === b.time;
}
function St(e) {
  return e.type === b.select;
}
function Bt(e) {
  return e.type === b.plural;
}
function An(e) {
  return e.type === b.pound;
}
function Nt(e) {
  return e.type === b.tag;
}
function It(e) {
  return !!(e && typeof e == "object" && e.type === z.number);
}
function Re(e) {
  return !!(e && typeof e == "object" && e.type === z.dateTime);
}
var Pt = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Sn = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Bn(e) {
  var t = {};
  return e.replace(Sn, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
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
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = r === 4 ? "short" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
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
var Nn = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function In(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Nn).filter(function(c) {
    return c.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var s = i[r], o = s.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], h = o.slice(1), a = 0, l = h; a < l.length; a++) {
      var f = l[a];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: h });
  }
  return n;
}
function Pn(e) {
  return e.replace(/^(.*?)-/, "");
}
var at = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Lt = /^(@+)?(\+|#+)?[rs]?$/g, Ln = /(\*)(0+)|(#+)(0+)|(0+)/g, Mt = /^(0+)$/;
function ot(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Lt, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
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
function Mn(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Mt.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function ut(e) {
  var t = {}, n = Ct(e);
  return n || t;
}
function Cn(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n];
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
        t.style = "unit", t.unit = Pn(i.options[0]);
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
        t = d(d(d({}, t), { notation: "scientific" }), i.options.reduce(function(h, a) {
          return d(d({}, h), ut(a));
        }, {}));
        continue;
      case "engineering":
        t = d(d(d({}, t), { notation: "engineering" }), i.options.reduce(function(h, a) {
          return d(d({}, h), ut(a));
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
        i.options[0].replace(Ln, function(h, a, l, f, c, m) {
          if (a)
            t.minimumIntegerDigits = l.length;
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
    if (Mt.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (at.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(at, function(h, a, l, f, c, m) {
        return l === "*" ? t.minimumFractionDigits = a.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : c && m ? (t.minimumFractionDigits = c.length, t.maximumFractionDigits = c.length + m.length) : (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length), "";
      });
      var s = i.options[0];
      s === "w" ? t = d(d({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = d(d({}, t), ot(s)));
      continue;
    }
    if (Lt.test(i.stem)) {
      t = d(d({}, t), ot(i.stem));
      continue;
    }
    var o = Ct(i.stem);
    o && (t = d(d({}, t), o));
    var u = Mn(i.stem);
    u && (t = d(d({}, t), u));
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
function On(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var s = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        s++, r++;
      var o = 1 + (s & 1), u = s < 2 ? 1 : 3 + (s >> 1), h = "a", a = Rn(t);
      for ((a == "H" || a == "k") && (u = 0); u-- > 0; )
        n += h;
      for (; o-- > 0; )
        n = a + n;
    } else
      i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Rn(e) {
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
  var n = e.language, r;
  n !== "root" && (r = e.maximize().region);
  var i = fe[r || ""] || fe[n || ""] || fe["".concat(n, "-001")] || fe["001"];
  return i[0];
}
var Be, Un = new RegExp("^".concat(Pt.source, "*")), Gn = new RegExp("".concat(Pt.source, "*$"));
function g(e, t) {
  return { start: e, end: t };
}
var Dn = !!String.prototype.startsWith, Fn = !!String.fromCodePoint, kn = !!Object.fromEntries, jn = !!String.prototype.codePointAt, $n = !!String.prototype.trimStart, Vn = !!String.prototype.trimEnd, Xn = !!Number.isSafeInteger, zn = Xn ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Ue = !0;
try {
  var Wn = Rt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ue = ((Be = Wn.exec("a")) === null || Be === void 0 ? void 0 : Be[0]) === "a";
} catch {
  Ue = !1;
}
var lt = Dn ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Ge = Fn ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, s = 0, o; i > s; ) {
      if (o = t[s++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), ht = (
  // native
  kn ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var s = i[r], o = s[0], u = s[1];
        n[o] = u;
      }
      return n;
    }
  )
), Ot = jn ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), s;
      return i < 55296 || i > 56319 || n + 1 === r || (s = t.charCodeAt(n + 1)) < 56320 || s > 57343 ? i : (i - 55296 << 10) + (s - 56320) + 65536;
    }
  }
), Zn = $n ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Un, "");
  }
), qn = Vn ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Gn, "");
  }
);
function Rt(e, t) {
  return new RegExp(e, t);
}
var De;
if (Ue) {
  var ft = Rt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  De = function(t, n) {
    var r;
    ft.lastIndex = n;
    var i = ft.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  De = function(t, n) {
    for (var r = []; ; ) {
      var i = Ot(t, n);
      if (i === void 0 || Ut(i) || Kn(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Ge.apply(void 0, r);
  };
var Jn = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var s = this.char();
        if (s === 123) {
          var o = this.parseArgument(t, r);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (s === 125 && t > 0)
            break;
          if (s === 35 && (n === "plural" || n === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), i.push({
              type: b.pound,
              location: g(u, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(p.UNMATCHED_CLOSING_TAG, g(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && Fe(this.peek() || 0)) {
            var o = this.parseTag(t, n);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(t, n);
            if (o.err)
              return o;
            i.push(o.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: b.literal,
            value: "<".concat(i, "/>"),
            location: g(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, n, !0);
        if (s.err)
          return s;
        var o = s.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Fe(this.char()))
            return this.error(p.INVALID_TAG, g(u, this.clonePosition()));
          var h = this.clonePosition(), a = this.parseTagName();
          return i !== a ? this.error(p.UNMATCHED_CLOSING_TAG, g(h, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: b.tag,
              value: i,
              children: o,
              location: g(r, this.clonePosition())
            },
            err: null
          } : this.error(p.INVALID_TAG, g(u, this.clonePosition())));
        } else
          return this.error(p.UNCLOSED_TAG, g(r, this.clonePosition()));
      } else
        return this.error(p.INVALID_TAG, g(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Yn(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var s = this.tryParseQuote(n);
        if (s) {
          i += s;
          continue;
        }
        var o = this.tryParseUnquoted(t, n);
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
      var h = g(r, this.clonePosition());
      return {
        val: { type: b.literal, value: i, location: h },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Qn(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return Ge.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Ge(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, g(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(p.EMPTY_ARGUMENT, g(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(p.MALFORMED_ARGUMENT, g(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, g(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: b.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: g(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, g(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(p.MALFORMED_ARGUMENT, g(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = De(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var s = this.clonePosition(), o = g(t, s);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var s, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, h = this.clonePosition();
      switch (u) {
        case "":
          return this.error(p.EXPECT_ARGUMENT_TYPE, g(o, h));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var a = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var l = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
            if (f.err)
              return f;
            var c = qn(f.val);
            if (c.length === 0)
              return this.error(p.EXPECT_ARGUMENT_STYLE, g(this.clonePosition(), this.clonePosition()));
            var m = g(l, this.clonePosition());
            a = { style: c, styleLocation: m };
          }
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var w = g(i, this.clonePosition());
          if (a && lt(a == null ? void 0 : a.style, "::", 0)) {
            var I = Zn(a.style.slice(2));
            if (u === "number") {
              var f = this.parseNumberSkeletonFromString(I, a.styleLocation);
              return f.err ? f : {
                val: { type: b.number, value: r, location: w, style: f.val },
                err: null
              };
            } else {
              if (I.length === 0)
                return this.error(p.EXPECT_DATE_TIME_SKELETON, w);
              var K = I;
              this.locale && (K = On(I, this.locale));
              var c = {
                type: z.dateTime,
                pattern: K,
                location: a.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Bn(K) : {}
              }, O = u === "date" ? b.date : b.time;
              return {
                val: { type: O, value: r, location: w, style: c },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? b.number : u === "date" ? b.date : b.time,
              value: r,
              location: w,
              style: (s = a == null ? void 0 : a.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var T = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(p.EXPECT_SELECT_ARGUMENT_OPTIONS, g(T, d({}, T)));
          this.bumpSpace();
          var ee = this.parseIdentifierIfPossible(), P = 0;
          if (u !== "select" && ee.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(p.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, g(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(p.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, p.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), ee = this.parseIdentifierIfPossible(), P = f.val;
          }
          var le = this.tryParsePluralOrSelectOptions(t, u, n, ee);
          if (le.err)
            return le;
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var qe = g(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: b.select,
              value: r,
              options: ht(le.val),
              location: qe
            },
            err: null
          } : {
            val: {
              type: b.plural,
              value: r,
              options: ht(le.val),
              offset: P,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: qe
            },
            err: null
          };
        }
        default:
          return this.error(p.INVALID_ARGUMENT_TYPE, g(o, h));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, g(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(p.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, g(i, this.clonePosition()));
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
                val: this.message.slice(n.offset, this.offset()),
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
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var r = [];
      try {
        r = In(t);
      } catch {
        return this.error(p.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: z.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Cn(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var s, o = !1, u = [], h = /* @__PURE__ */ new Set(), a = i.value, l = i.location; ; ) {
        if (a.length === 0) {
          var f = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var c = this.tryParseDecimalInteger(p.EXPECT_PLURAL_ARGUMENT_SELECTOR, p.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (c.err)
              return c;
            l = g(f, this.clonePosition()), a = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (h.has(a))
          return this.error(n === "select" ? p.DUPLICATE_SELECT_ARGUMENT_SELECTOR : p.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
        a === "other" && (o = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? p.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : p.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, g(this.clonePosition(), this.clonePosition()));
        var v = this.parseMessage(t + 1, n, r);
        if (v.err)
          return v;
        var w = this.tryParseArgumentClose(m);
        if (w.err)
          return w;
        u.push([
          a,
          {
            value: v.val,
            location: g(m, this.clonePosition())
          }
        ]), h.add(a), this.bumpSpace(), s = this.parseIdentifierIfPossible(), a = s.value, l = s.location;
      }
      return u.length === 0 ? this.error(n === "select" ? p.EXPECT_SELECT_ARGUMENT_SELECTOR : p.EXPECT_PLURAL_ARGUMENT_SELECTOR, g(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(p.MISSING_OTHER_CLAUSE, g(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var s = !1, o = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          s = !0, o = o * 10 + (u - 48), this.bump();
        else
          break;
      }
      var h = g(i, this.clonePosition());
      return s ? (o *= r, zn(o) ? { val: o, err: null } : this.error(n, h)) : this.error(t, h);
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
      var n = Ot(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (lt(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), r = this.message.indexOf(t, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
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
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Fe(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Qn(e) {
  return Fe(e) || e === 47;
}
function Yn(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Ut(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Kn(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function ke(e) {
  e.forEach(function(t) {
    if (delete t.location, St(t) || Bt(t))
      for (var n in t.options)
        delete t.options[n].location, ke(t.options[n].value);
    else
      Ht(t) && It(t.style) || (Tt(t) || At(t)) && Re(t.style) ? delete t.style.location : Nt(t) && ke(t.children);
  });
}
function er(e, t) {
  t === void 0 && (t = {}), t = d({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new Jn(e, t).parse();
  if (n.err) {
    var r = SyntaxError(p[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || ke(n.val), n.val;
}
function Ne(e, t) {
  var n = t && t.cache ? t.cache : ar, r = t && t.serializer ? t.serializer : sr, i = t && t.strategy ? t.strategy : nr;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function tr(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Gt(e, t, n, r) {
  var i = tr(r) ? r : n(r), s = t.get(i);
  return typeof s > "u" && (s = e.call(this, r), t.set(i, s)), s;
}
function Dt(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), s = t.get(i);
  return typeof s > "u" && (s = e.apply(this, r), t.set(i, s)), s;
}
function ze(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function nr(e, t) {
  var n = e.length === 1 ? Gt : Dt;
  return ze(e, this, n, t.cache.create(), t.serializer);
}
function rr(e, t) {
  return ze(e, this, Dt, t.cache.create(), t.serializer);
}
function ir(e, t) {
  return ze(e, this, Gt, t.cache.create(), t.serializer);
}
var sr = function() {
  return JSON.stringify(arguments);
};
function We() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
We.prototype.get = function(e) {
  return this.cache[e];
};
We.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var ar = {
  create: function() {
    return new We();
  }
}, Ie = {
  variadic: rr,
  monadic: ir
}, W;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(W || (W = {}));
var we = (
  /** @class */
  function(e) {
    ye(t, e);
    function t(n, r, i) {
      var s = e.call(this, n) || this;
      return s.code = r, s.originalMessage = i, s;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), ct = (
  /** @class */
  function(e) {
    ye(t, e);
    function t(n, r, i, s) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), W.INVALID_VALUE, s) || this;
    }
    return t;
  }(we)
), or = (
  /** @class */
  function(e) {
    ye(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), W.INVALID_VALUE, i) || this;
    }
    return t;
  }(we)
), ur = (
  /** @class */
  function(e) {
    ye(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), W.MISSING_VALUE, r) || this;
    }
    return t;
  }(we)
), x;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(x || (x = {}));
function lr(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== x.literal || n.type !== x.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function hr(e) {
  return typeof e == "function";
}
function ge(e, t, n, r, i, s, o) {
  if (e.length === 1 && st(e[0]))
    return [
      {
        type: x.literal,
        value: e[0].value
      }
    ];
  for (var u = [], h = 0, a = e; h < a.length; h++) {
    var l = a[h];
    if (st(l)) {
      u.push({
        type: x.literal,
        value: l.value
      });
      continue;
    }
    if (An(l)) {
      typeof s == "number" && u.push({
        type: x.literal,
        value: n.getNumberFormat(t).format(s)
      });
      continue;
    }
    var f = l.value;
    if (!(i && f in i))
      throw new ur(f, o);
    var c = i[f];
    if (Tn(l)) {
      (!c || typeof c == "string" || typeof c == "number") && (c = typeof c == "string" || typeof c == "number" ? String(c) : ""), u.push({
        type: typeof c == "string" ? x.literal : x.object,
        value: c
      });
      continue;
    }
    if (Tt(l)) {
      var m = typeof l.style == "string" ? r.date[l.style] : Re(l.style) ? l.style.parsedOptions : void 0;
      u.push({
        type: x.literal,
        value: n.getDateTimeFormat(t, m).format(c)
      });
      continue;
    }
    if (At(l)) {
      var m = typeof l.style == "string" ? r.time[l.style] : Re(l.style) ? l.style.parsedOptions : r.time.medium;
      u.push({
        type: x.literal,
        value: n.getDateTimeFormat(t, m).format(c)
      });
      continue;
    }
    if (Ht(l)) {
      var m = typeof l.style == "string" ? r.number[l.style] : It(l.style) ? l.style.parsedOptions : void 0;
      m && m.scale && (c = c * (m.scale || 1)), u.push({
        type: x.literal,
        value: n.getNumberFormat(t, m).format(c)
      });
      continue;
    }
    if (Nt(l)) {
      var v = l.children, w = l.value, I = i[w];
      if (!hr(I))
        throw new or(w, "function", o);
      var K = ge(v, t, n, r, i, s), O = I(K.map(function(P) {
        return P.value;
      }));
      Array.isArray(O) || (O = [O]), u.push.apply(u, O.map(function(P) {
        return {
          type: typeof P == "string" ? x.literal : x.object,
          value: P
        };
      }));
    }
    if (St(l)) {
      var T = l.options[c] || l.options.other;
      if (!T)
        throw new ct(l.value, c, Object.keys(l.options), o);
      u.push.apply(u, ge(T.value, t, n, r, i));
      continue;
    }
    if (Bt(l)) {
      var T = l.options["=".concat(c)];
      if (!T) {
        if (!Intl.PluralRules)
          throw new we(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, W.MISSING_INTL_API, o);
        var ee = n.getPluralRules(t, { type: l.pluralType }).select(c - (l.offset || 0));
        T = l.options[ee] || l.options.other;
      }
      if (!T)
        throw new ct(l.value, c, Object.keys(l.options), o);
      u.push.apply(u, ge(T.value, t, n, r, i, c - (l.offset || 0)));
      continue;
    }
  }
  return lr(u);
}
function fr(e, t) {
  return t ? d(d(d({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = d(d({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function cr(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = fr(e[r], t[r]), n;
  }, d({}, e)) : e;
}
function Pe(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function mr(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ne(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Se([void 0], n, !1)))();
    }, {
      cache: Pe(e.number),
      strategy: Ie.variadic
    }),
    getDateTimeFormat: Ne(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Se([void 0], n, !1)))();
    }, {
      cache: Pe(e.dateTime),
      strategy: Ie.variadic
    }),
    getPluralRules: Ne(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Se([void 0], n, !1)))();
    }, {
      cache: Pe(e.pluralRules),
      strategy: Ie.variadic
    })
  };
}
var pr = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      var s = this;
      if (n === void 0 && (n = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var u = s.formatToParts(o);
        if (u.length === 1)
          return u[0].value;
        var h = u.reduce(function(a, l) {
          return !a.length || l.type !== x.literal || typeof a[a.length - 1] != "string" ? a.push(l.value) : a[a.length - 1] += l.value, a;
        }, []);
        return h.length <= 1 ? h[0] || "" : h;
      }, this.formatToParts = function(o) {
        return ge(s.ast, s.locales, s.formatters, s.formats, o, void 0, s.message);
      }, this.resolvedOptions = function() {
        return {
          locale: s.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return s.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
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
      this.formats = cr(e.formats, r), this.formatters = i && i.formatters || mr(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      var n = Intl.NumberFormat.supportedLocalesOf(t);
      return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
    }, e.__parse = er, e.formats = {
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
const S = {}, gr = (e, t, n) => n && (t in S || (S[t] = {}), e in S[t] || (S[t][e] = n), n), Ft = (e, t) => {
  if (t == null)
    return;
  if (t in S && e in S[t])
    return S[t][e];
  const n = ue(t);
  for (let r = 0; r < n.length; r++) {
    const i = dr(n[r], e);
    if (i)
      return gr(e, t, i);
  }
};
let Ze;
const oe = xe({});
function kt(e) {
  return e in Ze;
}
function dr(e, t) {
  if (!kt(e))
    return null;
  const n = function(r) {
    return Ze[r] || null;
  }(e);
  return function(r, i) {
    if (i == null)
      return;
    if (i in r)
      return r[i];
    const s = i.split(".");
    let o = r;
    for (let u = 0; u < s.length; u++)
      if (typeof o == "object") {
        if (u > 0) {
          const h = s.slice(u, s.length).join(".");
          if (h in o) {
            o = o[h];
            break;
          }
        }
        o = o[s[u]];
      } else
        o = void 0;
    return o;
  }(n, t);
}
function Q(e, ...t) {
  delete S[e], oe.update((n) => (n[e] = Hn.all([n[e] || {}, ...t]), n));
}
J([oe], ([e]) => Object.keys(e));
oe.subscribe((e) => Ze = e);
const de = {};
function jt(e) {
  return de[e];
}
function Ee(e) {
  return e != null && ue(e).some((t) => {
    var n;
    return (n = jt(t)) === null || n === void 0 ? void 0 : n.size;
  });
}
function br(e, t) {
  return Promise.all(t.map((r) => (function(i, s) {
    de[i].delete(s), de[i].size === 0 && delete de[i];
  }(e, r), r().then((i) => i.default || i)))).then((r) => Q(e, ...r));
}
const te = {};
function $t(e) {
  if (!Ee(e))
    return e in te ? te[e] : Promise.resolve();
  const t = function(n) {
    return ue(n).map((r) => {
      const i = jt(r);
      return [r, i ? [...i] : []];
    }).filter(([, r]) => r.length > 0);
  }(e);
  return te[e] = Promise.all(t.map(([n, r]) => br(n, r))).then(() => {
    if (Ee(e))
      return $t(e);
    delete te[e];
  }), te[e];
}
function vr({ locale: e, id: t }) {
  console.warn(`[svelte-i18n] The message "${t}" was not found in "${ue(e).join('", "')}".${Ee(N()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`);
}
const ne = { fallbackLocale: null, loadingDelay: 200, formats: { number: { scientific: { notation: "scientific" }, engineering: { notation: "engineering" }, compactLong: { notation: "compact", compactDisplay: "long" }, compactShort: { notation: "compact", compactDisplay: "short" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } }, warnOnMissingMessages: !0, handleMissingMessage: void 0, ignoreTag: !0 };
function Z() {
  return ne;
}
function Er(e) {
  const { formats: t, ...n } = e, r = e.initialLocale || e.fallbackLocale;
  return n.warnOnMissingMessages && (delete n.warnOnMissingMessages, n.handleMissingMessage == null ? n.handleMissingMessage = vr : console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')), Object.assign(ne, n, { initialLocale: r }), t && ("number" in t && Object.assign(ne.formats.number, t.number), "date" in t && Object.assign(ne.formats.date, t.date), "time" in t && Object.assign(ne.formats.time, t.time)), Y.set(r);
}
const Le = xe(!1);
let je;
const be = xe(null);
function mt(e) {
  return e.split("-").map((t, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function ue(e, t = Z().fallbackLocale) {
  const n = mt(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...mt(t)])] : n;
}
function N() {
  return je ?? void 0;
}
be.subscribe((e) => {
  je = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const Y = { ...be, set: (e) => {
  if (e && function(t) {
    if (t == null)
      return;
    const n = ue(t);
    for (let r = 0; r < n.length; r++) {
      const i = n[r];
      if (kt(i))
        return i;
    }
  }(e) && Ee(e)) {
    const { loadingDelay: t } = Z();
    let n;
    return typeof window < "u" && N() != null && t ? n = window.setTimeout(() => Le.set(!0), t) : Le.set(!0), $t(e).then(() => {
      be.set(e);
    }).finally(() => {
      clearTimeout(n), Le.set(!1);
    });
  }
  return be.set(e);
} }, He = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => {
    const r = JSON.stringify(n);
    return r in t ? t[r] : t[r] = e(n);
  };
}, ae = (e, t) => {
  const { formats: n } = Z();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, _r = He(({ locale: e, format: t, ...n }) => {
  if (e == null)
    throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
  return t && (n = ae("number", t)), new Intl.NumberFormat(e, n);
}), xr = He(({ locale: e, format: t, ...n }) => {
  if (e == null)
    throw new Error('[svelte-i18n] A "locale" must be set to format dates');
  return t ? n = ae("date", t) : Object.keys(n).length === 0 && (n = ae("date", "short")), new Intl.DateTimeFormat(e, n);
}), yr = He(({ locale: e, format: t, ...n }) => {
  if (e == null)
    throw new Error('[svelte-i18n] A "locale" must be set to format time values');
  return t ? n = ae("time", t) : Object.keys(n).length === 0 && (n = ae("time", "short")), new Intl.DateTimeFormat(e, n);
}), wr = ({ locale: e = N(), ...t } = {}) => _r({ locale: e, ...t }), Hr = ({ locale: e = N(), ...t } = {}) => xr({ locale: e, ...t }), Tr = ({ locale: e = N(), ...t } = {}) => yr({ locale: e, ...t }), Ar = He((e, t = N()) => new pr(e, t, Z().formats, { ignoreTag: Z().ignoreTag })), Sr = (e, t = {}) => {
  var n, r, i, s;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const { values: u, locale: h = N(), default: a } = o;
  if (h == null)
    throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
  let l = Ft(e, h);
  if (l) {
    if (typeof l != "string")
      return console.warn(`[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof l}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`), l;
  } else
    l = (s = (i = (r = (n = Z()).handleMissingMessage) === null || r === void 0 ? void 0 : r.call(n, { locale: h, id: e, defaultValue: a })) !== null && i !== void 0 ? i : a) !== null && s !== void 0 ? s : e;
  if (!u)
    return l;
  let f = l;
  try {
    f = Ar(l, h).format(u);
  } catch (c) {
    c instanceof Error && console.warn(`[svelte-i18n] Message "${e}" has syntax error:`, c.message);
  }
  return f;
}, Br = (e, t) => Tr(t).format(e), Nr = (e, t) => Hr(t).format(e), Ir = (e, t) => wr(t).format(e), Pr = (e, t = N()) => Ft(e, t), Lr = J([Y, oe], () => Sr);
J([Y], () => Br);
J([Y], () => Nr);
J([Y], () => Ir);
J([Y, oe], () => Pr);
function pt(e, t, n) {
  const r = e.slice();
  return r[4] = t[n], r;
}
function gt(e) {
  let t, n;
  return t = new ve({
    props: {
      name: (
        /*menuItem*/
        e[4].name
      ),
      image: (
        /*menuItem*/
        e[4].image
      ),
      url: (
        /*menuItem*/
        e[4].url
      ),
      children: (
        /*menuItem*/
        e[4].children
      ),
      level: (
        /*level*/
        e[1]
      )
    }
  }), {
    c() {
      V(t.$$.fragment);
    },
    m(r, i) {
      M(t, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*menu*/
      1 && (s.name = /*menuItem*/
      r[4].name), i & /*menu*/
      1 && (s.image = /*menuItem*/
      r[4].image), i & /*menu*/
      1 && (s.url = /*menuItem*/
      r[4].url), i & /*menu*/
      1 && (s.children = /*menuItem*/
      r[4].children), i & /*level*/
      2 && (s.level = /*level*/
      r[1]), t.$set(s);
    },
    i(r) {
      n || (E(t.$$.fragment, r), n = !0);
    },
    o(r) {
      y(t.$$.fragment, r), n = !1;
    },
    d(r) {
      C(t, r);
    }
  };
}
function dt(e) {
  let t, n, r, i;
  return t = new ve({
    props: {
      name: (
        /*$_*/
        e[3]("overview.name")
      ),
      image: (
        /*$_*/
        e[3]("overview.image", { default: "" })
      ),
      url: (
        /*$_*/
        e[3]("overview.url")
      ),
      level: (
        /*level*/
        e[1]
      )
    }
  }), r = new ve({
    props: {
      name: (
        /*$_*/
        e[3]("new.name")
      ),
      image: (
        /*$_*/
        e[3]("new.image", { default: "" })
      ),
      url: (
        /*$_*/
        e[3]("new.url")
      ),
      level: (
        /*level*/
        e[1]
      )
    }
  }), {
    c() {
      V(t.$$.fragment), n = $(), V(r.$$.fragment);
    },
    m(s, o) {
      M(t, s, o), B(s, n, o), M(r, s, o), i = !0;
    },
    p(s, o) {
      const u = {};
      o & /*$_*/
      8 && (u.name = /*$_*/
      s[3]("overview.name")), o & /*$_*/
      8 && (u.image = /*$_*/
      s[3]("overview.image", { default: "" })), o & /*$_*/
      8 && (u.url = /*$_*/
      s[3]("overview.url")), o & /*level*/
      2 && (u.level = /*level*/
      s[1]), t.$set(u);
      const h = {};
      o & /*$_*/
      8 && (h.name = /*$_*/
      s[3]("new.name")), o & /*$_*/
      8 && (h.image = /*$_*/
      s[3]("new.image", { default: "" })), o & /*$_*/
      8 && (h.url = /*$_*/
      s[3]("new.url")), o & /*level*/
      2 && (h.level = /*level*/
      s[1]), r.$set(h);
    },
    i(s) {
      i || (E(t.$$.fragment, s), E(r.$$.fragment, s), i = !0);
    },
    o(s) {
      y(t.$$.fragment, s), y(r.$$.fragment, s), i = !1;
    },
    d(s) {
      C(t, s), s && A(n), C(r, s);
    }
  };
}
function bt(e) {
  let t, n;
  return t = new ve({
    props: {
      name: (
        /*$_*/
        e[3]("all.name")
      ),
      image: (
        /*$_*/
        e[3]("all.image", { default: "" })
      ),
      url: (
        /*allUrl*/
        e[2]
      ),
      all: !0,
      level: (
        /*level*/
        e[1]
      )
    }
  }), {
    c() {
      V(t.$$.fragment);
    },
    m(r, i) {
      M(t, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*$_*/
      8 && (s.name = /*$_*/
      r[3]("all.name")), i & /*$_*/
      8 && (s.image = /*$_*/
      r[3]("all.image", { default: "" })), i & /*allUrl*/
      4 && (s.url = /*allUrl*/
      r[2]), i & /*level*/
      2 && (s.level = /*level*/
      r[1]), t.$set(s);
    },
    i(r) {
      n || (E(t.$$.fragment, r), n = !0);
    },
    o(r) {
      y(t.$$.fragment, r), n = !1;
    },
    d(r) {
      C(t, r);
    }
  };
}
function Mr(e) {
  let t, n, r, i, s, o = (
    /*menu*/
    e[0]
  ), u = [];
  for (let f = 0; f < o.length; f += 1)
    u[f] = gt(pt(e, o, f));
  const h = (f) => y(u[f], 1, 1, () => {
    u[f] = null;
  });
  let a = (
    /*level*/
    e[1] === 1 && dt(e)
  ), l = (
    /*level*/
    e[1] > 2 && bt(e)
  );
  return {
    c() {
      t = j("ul");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      n = $(), a && a.c(), r = $(), l && l.c(), _(t, "class", i = "sub-menu sub-menu--sub sub-menu--sub-" + /*level*/
      e[1]);
    },
    m(f, c) {
      B(f, t, c);
      for (let m = 0; m < u.length; m += 1)
        u[m] && u[m].m(t, null);
      F(t, n), a && a.m(t, null), F(t, r), l && l.m(t, null), s = !0;
    },
    p(f, [c]) {
      if (c & /*menu, level*/
      3) {
        o = /*menu*/
        f[0];
        let m;
        for (m = 0; m < o.length; m += 1) {
          const v = pt(f, o, m);
          u[m] ? (u[m].p(v, c), E(u[m], 1)) : (u[m] = gt(v), u[m].c(), E(u[m], 1), u[m].m(t, n));
        }
        for (me(), m = o.length; m < u.length; m += 1)
          h(m);
        pe();
      }
      /*level*/
      f[1] === 1 ? a ? (a.p(f, c), c & /*level*/
      2 && E(a, 1)) : (a = dt(f), a.c(), E(a, 1), a.m(t, r)) : a && (me(), y(a, 1, 1, () => {
        a = null;
      }), pe()), /*level*/
      f[1] > 2 ? l ? (l.p(f, c), c & /*level*/
      2 && E(l, 1)) : (l = bt(f), l.c(), E(l, 1), l.m(t, null)) : l && (me(), y(l, 1, 1, () => {
        l = null;
      }), pe()), (!s || c & /*level*/
      2 && i !== (i = "sub-menu sub-menu--sub sub-menu--sub-" + /*level*/
      f[1])) && _(t, "class", i);
    },
    i(f) {
      if (!s) {
        for (let c = 0; c < o.length; c += 1)
          E(u[c]);
        E(a), E(l), s = !0;
      }
    },
    o(f) {
      u = u.filter(Boolean);
      for (let c = 0; c < u.length; c += 1)
        y(u[c]);
      y(a), y(l), s = !1;
    },
    d(f) {
      f && A(t), Jt(u, f), a && a.d(), l && l.d();
    }
  };
}
function Cr(e, t, n) {
  let r;
  zt(e, Lr, (u) => n(3, r = u));
  let { menu: i } = t, { level: s = 1 } = t, o = "";
  return xt(() => {
    if (i[0] && i[0].url) {
      let u = i[0].url.split("/");
      u.pop(), n(2, o = u.join("/"));
    }
  }), e.$$set = (u) => {
    "menu" in u && n(0, i = u.menu), "level" in u && n(1, s = u.level);
  }, [i, s, o, r];
}
class Vt extends Xe {
  constructor(t) {
    super(), Ve(this, t, Cr, Mr, _e, { menu: 0, level: 1 });
  }
}
function Or(e) {
  let t, n;
  return t = new Vt({ props: { menu: (
    /*sortedMenu*/
    e[0]
  ) } }), {
    c() {
      V(t.$$.fragment);
    },
    m(r, i) {
      M(t, r, i), n = !0;
    },
    p(r, [i]) {
      const s = {};
      i & /*sortedMenu*/
      1 && (s.menu = /*sortedMenu*/
      r[0]), t.$set(s);
    },
    i(r) {
      n || (E(t.$$.fragment, r), n = !0);
    },
    o(r) {
      y(t.$$.fragment, r), n = !1;
    },
    d(r) {
      C(t, r);
    }
  };
}
let Rr = "https://shopnav-langwebsite.pantheonsite.io", Ur = "/rest/product-menu", Gr = "?_format=json";
function Dr(e, t, n) {
  let r = "/de", i = [], s = [];
  function o() {
    let h = i.filter((a) => a.pid === "");
    return h.forEach((a) => {
      a.level = 2, a.children = u(a);
    }), h;
  }
  function u(h) {
    let a = i.filter((l) => l.pid === h.tid).sort((l, f) => l.weight - f.weight);
    return a && a.forEach((l) => {
      l.level = h.level + 1, l.children = u(l);
    }), a;
  }
  return xt(() => {
    r = "/" + document.querySelector("html").lang, fetch(Rr + Ur + r + Gr, { method: "GET" }).then((h) => h.json()).then((h) => {
      i = h, n(0, s = o());
    });
  }), [s];
}
class Fr extends Xe {
  constructor(t) {
    super(), Ve(this, t, Dr, Or, _e, {});
  }
}
const kr = {
  "overview.tid": "",
  "overview.pid": "",
  "overview.name": "Produktübersicht",
  "overview.url": "/de/produkte",
  "overview.image": "",
  "overview.weight": "",
  "overview.children": [],
  "new.tid": "",
  "new.pid": "",
  "new.name": "Produktneuheiten",
  "new.url": "/de/produkte/produktneuheiten",
  "new.image": "",
  "new.weight": "",
  "new.children": [],
  "all.tid": "",
  "all.pid": "",
  "all.name": "Alle anzeigen",
  "all.url": "",
  "all.image": "",
  "all.weight": "",
  "all.children": []
}, jr = {
  "overview.tid": "",
  "overview.pid": "",
  "overview.name": "Product overview",
  "overview.url": "/en/products",
  "overview.image": "",
  "overview.weight": "",
  "overview.children": [],
  "new.tid": "",
  "new.pid": "",
  "new.name": "New products",
  "new.url": "/en/products/new-products",
  "new.image": "",
  "new.weight": "",
  "new.children": [],
  "all.tid": "",
  "all.pid": "",
  "all.name": "Show all",
  "all.url": "",
  "all.image": "",
  "all.weight": "",
  "all.children": []
}, $r = {
  "overview.tid": "",
  "overview.pid": "",
  "overview.name": "Aperçu des produits",
  "overview.url": "/fr/produits",
  "overview.image": "",
  "overview.weight": "",
  "overview.children": [],
  "new.tid": "",
  "new.pid": "",
  "new.name": "Nouveautés de produits",
  "new.url": "/fr/produits/nouveaux-produits",
  "new.image": "",
  "new.weight": "",
  "new.children": [],
  "all.tid": "",
  "all.pid": "",
  "all.name": "Afficher tout",
  "all.url": "",
  "all.image": "",
  "all.weight": "",
  "all.children": []
}, Vr = {
  "overview.tid": "",
  "overview.pid": "",
  "overview.name": "Resumen de productos",
  "overview.url": "/es/productos",
  "overview.image": "",
  "overview.weight": "",
  "overview.children": [],
  "new.tid": "",
  "new.pid": "",
  "new.name": "Novedades de productos",
  "new.url": "/es/productos/novedades",
  "new.image": "",
  "new.weight": "",
  "new.children": [],
  "all.tid": "",
  "all.pid": "",
  "all.name": "Mostrar todo",
  "all.url": "",
  "all.image": "",
  "all.weight": "",
  "all.children": []
}, Xr = "", zr = {
  "overview.tid": "",
  "overview.pid": "",
  "overview.name": "Panoramica dei prodotti",
  "overview.url": "/it/prodotti",
  "overview.image": "",
  overviewImage: Xr,
  "overview.weight": "",
  "overview.children": [],
  "new.tid": "",
  "new.pid": "",
  "new.name": "Novità sui prodotti",
  "new.url": "/it/prodotti/novita-prodotti",
  "new.image": "",
  "new.weight": "",
  "new.children": [],
  "all.tid": "",
  "all.pid": "",
  "all.name": "Mostra tutti",
  "all.url": "",
  "all.image": "",
  "all.weight": "",
  "all.children": []
};
Q("de", kr);
Q("en", jr);
Q("fr", $r);
Q("es", Vr);
Q("it", zr);
let Wr = document.getElementsByTagName("html")[0].getAttribute("lang");
Er({
  fallbackLocale: "en",
  initialLocale: Wr
});
new an({ component: Fr, tagname: "product-menu" });
