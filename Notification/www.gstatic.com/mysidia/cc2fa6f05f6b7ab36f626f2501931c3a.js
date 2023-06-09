(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var aa = this || self;

    function k(a, b) {
        a = a.split(".");
        var d = aa;
        a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
        for (var c; a.length && (c = a.shift());) a.length || void 0 === b ? d[c] && d[c] !== Object.prototype[c] ? d = d[c] : d = d[c] = {} : d[c] = b
    };
    var l = {},
        p = null;

    function q(a) {
        var b;
        void 0 === b && (b = 0);
        if (!p) {
            p = {};
            for (var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), c = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = d.concat(c[e].split(""));
                l[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === p[h] && (p[h] = g)
                }
            }
        }
        b = l[b];
        d = Array(Math.floor(a.length / 3));
        c = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var m = a[f],
                n = a[f + 1];
            h = a[f + 2];
            g = b[m >> 2];
            m = b[(m & 3) << 4 | n >> 4];
            n = b[(n & 15) << 2 | h >> 6];
            h = b[h & 63];
            d[e++] = g + m + n + h
        }
        g = 0;
        h = c;
        switch (a.length - f) {
            case 2:
                g =
                    a[f + 1], h = b[(g & 15) << 2] || c;
            case 1:
                a = a[f], d[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + c
        }
        return d.join("")
    };
    var r = "undefined" !== typeof Uint8Array,
        t = {};
    let u;
    var v = class {
        constructor(a) {
            if (t !== t) throw Error("illegal external caller");
            this.B = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
    };
    const w = Symbol(void 0);

    function x(a, b) {
        Object.isFrozen(a) || (w ? a[w] |= b : void 0 !== a.l ? a.l |= b : Object.defineProperties(a, {
            l: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function y(a, b) {
        Object.isExtensible(a) && (w ? a[w] && (a[w] &= ~b) : void 0 !== a.l && (a.l &= ~b))
    }

    function z(a) {
        let b;
        w ? b = a[w] : b = a.l;
        return null == b ? 0 : b
    }

    function A(a, b) {
        w ? a[w] = b : void 0 !== a.l ? a.l = b : Object.defineProperties(a, {
            l: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function B(a) {
        x(a, 1);
        return a
    }

    function ba(a) {
        x(a, 17);
        return a
    }

    function C(a) {
        return a ? !!(z(a) & 2) : !1
    }

    function D(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        y(a, 16)
    };
    var E = {};

    function F(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var G = Object,
        ca = G.freeze,
        H = [];
    x(H, 3);
    var I = ca.call(G, H);

    function J(a) {
        if (C(a.h)) throw Error("Cannot mutate an immutable Message");
    };

    function da(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (r && null != a && a instanceof Uint8Array) return q(a);
                    if (a instanceof v) {
                        const b = a.B;
                        return null == b ? "" : "string" === typeof b ? b : a.B = q(b)
                    }
                }
        }
        return a
    };

    function K(a, b, d, c) {
        if (null != a) {
            if (Array.isArray(a)) a = L(a, b, d, void 0 !== c);
            else if (F(a)) {
                const e = {};
                for (let f in a) e[f] = K(a[f], b, d, c);
                a = e
            } else a = b(a, c);
            return a
        }
    }

    function L(a, b, d, c) {
        c = c ? !!(z(a) & 16) : void 0;
        const e = Array.prototype.slice.call(a);
        d(a, e);
        for (a = 0; a < e.length; a++) e[a] = K(e[a], b, d, c);
        return e
    }

    function ea(a) {
        return a.A === E ? a.toJSON() : da(a)
    }

    function fa() {};

    function M(a, b, d = !1) {
        return -1 === b ? null : b >= a.s ? a.j ? a.j[b] : void 0 : d && a.j && (d = a.j[b], null != d) ? d : a.h[b + a.o]
    }

    function N(a, b, d, c = !1, e = !1) {
        e || J(a);
        a.i && (a.i = void 0);
        b >= a.s || c ? (a.j || (a.j = a.h[a.s + a.o] = {}))[b] = d : (void 0 !== a.j && a.s >= a.h.length ? (c = a.h.length - 1, e = b + a.o, e >= c ? (a.h[c] = void 0, a.h[e] = d, a.h.push(a.j)) : a.h[e] = d) : a.h[b + a.o] = d, void 0 !== a.j && b in a.j && delete a.j[b])
    }

    function O(a, b) {
        a = M(a, b);
        return null == a ? a : !!a
    }

    function P(a, b, d, c) {
        J(a);
        d !== c ? N(a, b, d) : N(a, b, void 0, !1)
    }

    function Q(a, b, d) {
        var c = M(a, d, !1);
        var e = !1;
        var f = null == c || "object" !== typeof c || (e = Array.isArray(c)) || c.A !== E ? e ? new b(c) : void 0 : c;
        f !== c && null != f && (N(a, d, f, !1, !0), x(f.h, z(a.h) & -33));
        b = f;
        if (null == b) return b;
        if (C(b.h) && !C(a.h)) {
            if (C(b.h)) {
                ({
                    u: c
                } = {
                    u: !0
                });
                c = {
                    u: c
                };
                if ((f = C(b.h)) && !c.u) throw Error("copyRepeatedFields must be true for frozen messages");
                f || D(b.h);
                e = new b.constructor;
                b.v && (e.v = b.v.slice());
                const h = b.h;
                for (let m = 0; m < h.length; m++) {
                    const n = h[m];
                    if (m === h.length - 1 && F(n))
                        for (g in n) {
                            const W = +g;
                            Number.isNaN(W) ?
                                (e.j || (e.j = e.h[e.s + e.o] = {}))[g] = n[g] : R(b, e, W, n[g], f, c)
                        } else R(b, e, m - b.o, n, f, c)
                }
                var g = e;
                g.i = b;
                b = g
            }
            N(a, d, b, !1)
        }
        return b
    }

    function S(a, b) {
        return null == a ? b : a
    };

    function R(a, b, d, c, e, f) {
        if (a = a.g && a.g[d]) {
            c = f.u ? B(a.slice()) : a;
            J(b);
            if (null != c) {
                e = B([]);
                f = !1;
                for (a = 0; a < c.length; a++) e[a] = c[a].h, f = f || C(e[a]);
                b.g || (b.g = {});
                b.g[d] = c;
                c = e;
                f ? y(c, 8) : x(c, 8)
            } else b.g && (b.g[d] = void 0), e = I;
            N(b, d, e)
        } else null != c ? r && c instanceof Uint8Array ? e = c.length ? new v(new Uint8Array(c)) : u || (u = new v(null)) : (Array.isArray(c) && (e ? x(c, 2) : c && z(c) & 1 && f.u ? (e = Array.prototype.slice.call(c), A(e, (z(c) | 0) & -51), c = e) : D(c)), e = c) : e = void 0, N(b, d, e)
    };

    function T(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        x(b, 16);
        U = b;
        a = new a(b);
        U = null;
        return a
    }
    var V = class {
        constructor(a, b, d) {
            null == a && (a = U);
            U = null;
            var c = this.constructor.g || 0,
                e = 0 < c,
                f = this.constructor.i,
                g = !1;
            if (null == a) {
                var h = f ? [f] : [];
                x(h, 48);
                a = h;
                h = !0
            } else if (h = !!(z(a) & 16)) g = z(a), A(a, g | 32), g = !!(g & 32);
            e && 0 < a.length && F(a[a.length - 1]) && "g" in a[a.length - 1] && (c = 0);
            this.o = (f ? 0 : -1) - c;
            this.g = void 0;
            this.h = a;
            a: {
                f = this.h.length;c = f - 1;
                if (f && (f = this.h[c], F(f))) {
                    this.j = f;
                    b = Object.keys(f);
                    0 < b.length && Array.prototype.every.call(b, isNaN, void 0) ? this.s = Number.MAX_VALUE : this.s = c - this.o;
                    break a
                }
                void 0 !== b && -1 <
                b ? (this.s = Math.max(b, c + 1 - this.o), this.j = void 0) : this.s = Number.MAX_VALUE
            }
            if (!e && this.j && "g" in this.j) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (d)
                for (e = h && !g ? ba : B, b = 0; b < d.length; b++) h = d[b], (g = M(this, h)) ? Array.isArray(g) && e(g) : N(this, h, I, !1, !0)
        }
        toJSON() {
            return L(this.h, ea, fa)
        }
    };
    V.prototype.A = E;
    V.prototype.toString = function() {
        return this.h.toString()
    };
    let U;
    var ia = class extends V {
            constructor(a) {
                super(a, -1, ha)
            }
        },
        ha = [8];
    var ka = class extends V {
            constructor(a) {
                super(a, -1, ja)
            }
        },
        ja = [17];
    var ma = class extends V {
            constructor(a) {
                super(a, -1, la)
            }
        },
        la = [27];
    var na = class extends V {
        constructor(a) {
            super(a)
        }
    };
    var pa = class extends V {
            constructor(a) {
                super(a, -1, oa)
            }
        },
        oa = [1, 2, 3, 6];
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function X(a, b) {
        a = a.getElementsByTagName("META");
        for (let d = 0; d < a.length; ++d)
            if (a[d].getAttribute("name") === b) return a[d].getAttribute("content") || "";
        return ""
    };

    function qa(a) {
        if (!(0 < a.g.length)) {
            var b = X(a.body, "environment");
            for (const d of b.split("|")) d && a.g.push(d)
        }
    }

    function Y(a, b) {
        a = a.body;
        var d = {
            detail: void 0
        };
        let c;
        "function" === typeof window.CustomEvent ? c = new CustomEvent(b, d) : (c = document.createEvent("CustomEvent"), c.initCustomEvent(b, !!d.bubbles, !!d.cancelable, d.detail));
        a.dispatchEvent(c)
    }
    var ra = class {
        constructor(a) {
            this.body = a;
            this.g = [];
            this.i = {};
            X(a, "sampling_mod");
            var b = X(a, "namespace");
            if (!b) {
                b = "ns-" + (0, Math.random)().toString(36).substr(2, 5);
                a: {
                    var d = a.getElementsByTagName("META");
                    for (let c = 0; c < d.length; ++c)
                        if ("namespace" === d[c].getAttribute("name") && d[c].getAttribute("index") === (0).toString()) {
                            d[c].setAttribute("content", b);
                            break a
                        }
                    d = a.querySelector("#mys-meta");d || (d = document.createElement("div"), d.id = "mys-meta", d.style.position = "absolute", d.style.display = "none", a.appendChild(d));
                    a = document.createElement("META");a.setAttribute("name", "namespace");a.setAttribute("content", b);a.setAttribute("index", (0).toString());d.appendChild(a)
                }
            }
            qa(this);
            !this.i.hasOwnProperty("META_LOCKED") && (a = X(this.body, "custom_flags")) && (this.i = JSON.parse(a))
        }
        addEventListener(a, b) {
            this.body.addEventListener(a, b)
        }
    };
    var sa = class extends V {
        constructor() {
            super()
        }
    };

    function ta(a) {
        var b = document;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };

    function ua(a) {
        if (1 >= a.i.offsetWidth || 1 >= a.i.offsetHeight) return !1;
        a.g.remove();
        Y(a.context, "spanReady");
        return !0
    }
    var va = class {
        constructor(a, b) {
            this.context = a;
            this.m = b;
            this.i = ta("SPAN");
            this.g = ta("DIV");
            this.i.style.fontSize = "6px";
            this.i.textContent = "go";
            this.g.style.position = "absolute";
            this.g.style.top = "100%";
            this.g.style.left = "100%";
            this.g.style.width = "1px";
            this.g.style.height = "0";
            this.g.style.overflow = "hidden";
            this.g.style.visibility = "hidden";
            this.g.appendChild(this.i)
        }
        wait() {
            if (!S(O(this.m, 1), !1) && (Y(this.context, "spanStart"), this.context.body.appendChild(this.g), !ua(this))) return new Promise(a => {
                const b =
                    setInterval(() => {
                        ua(this) && (clearInterval(b), a())
                    }, S(M(this.m, 3), 0))
            })
        }
    };
    var wa = class {
        constructor(a, b) {
            this.context = a;
            this.i = Q(b, ma, 1) || new ma;
            this.g = Q(b, ia, 12) || new ia;
            Q(this.i, ka, 10) || new ka
        }
    };

    function xa(a) {
        a.m.length = 0;
        a.i = !0
    }

    function ya(a, b) {
        a.g = !0;
        const d = () => {
            a.i = !1;
            const c = a.m.shift();
            return void 0 === c ? (a.g = !1, Promise.resolve()) : ya(a, c())
        };
        return b ? b.then(d, () => {
            if (a.i) return d();
            a.g = !1;
            return Promise.reject()
        }) : d()
    }

    function za(a, b) {
        for (const d of b) a.m.push(d);
        if (!a.g) return ya(a)
    }
    var Aa = class {
        constructor() {
            this.i = this.g = !1;
            this.m = []
        }
    };
    var Ba = class {
        constructor() {
            (this.g = !(!window.mys || !window.mys.pingback)) && this.setData(43, Date.now() - window.mys.pingback.getBaseTime())
        }
        setAttribute(a, b) {
            this.g && window.mys.pingback.setAttribute(a, b)
        }
        setData(a, b) {
            this.g && window.mys.pingback.setData(a, b, 3)
        }
        send(a) {
            this.g && window.mys.pingback.send(a)
        }
    };

    function Ca(a) {
        var b = X(a.context.body, "render_config") || "[]";
        b = T(na, b);
        return new wa(a.context, b)
    }

    function Da(a) {
        xa(a.m);
        return za(a.m, [() => {}, () => {
            let b;
            var d = a.i || (a.i = Ca(a));
            const c = new sa;
            P(c, 3, 100, 0);
            P(c, 4, 1E4, 0);
            O(d.g, 3) && P(c, 2, !0, !1);
            d = d.context;
            qa(d);
            0 <= d.g.indexOf("amp") && P(c, 2, !0, !1);
            c && (b = (new va(a.context, c)).wait());
            Y(a.context, "browserStart");
            Y(a.context, "browserStartEnd");
            a.g &= -31;
            a.g |= 2;
            return b
        }, () => {
            Y(a.context, "browserReady");
            Y(a.context, "browserReadyEnd");
            a.g |= 4;
            Y(a.context, "overallReady")
        }, () => {
            Y(a.context, "browserQuiet");
            Y(a.context, "browserQuietEnd");
            a.g |= 8
        }])
    }

    function Ea(a) {
        T(pa, X(a.context.body, "engine_msg") || "[]");
        return Da(a) || Promise.resolve()
    }
    var Fa = class {
        constructor(a) {
            this.pingback = new Ba;
            this.m = new Aa;
            this.g = 0;
            this.context = new ra(a)
        }
        init() {
            this.g &= -31;
            this.g |= 1;
            let a = 0;
            const b = this.context.body;
            b.addEventListener("browserRender", () => {
                ++a;
                if (1 === a) Y(this.context, "overallStart"), Ea(this).then(() => {
                    Y(this.context, "overallQuiet")
                });
                else {
                    var d = b.clientHeight;
                    b.clientWidth && d && (this.i || (this.i = Ca(this)), Ea(this))
                }
            })
        }
    };
    let Z;
    k("mys.engine.init", (a, b) => {
        Z = new Fa(b);
        Z.init()
    });
    k("mys.engine.stage", () => {
        let a;
        return (null == (a = Z) ? void 0 : a.g) || 0
    });
}).call(this);