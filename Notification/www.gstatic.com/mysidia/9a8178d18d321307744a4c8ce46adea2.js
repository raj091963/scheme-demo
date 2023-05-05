(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var k = this || self;
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
            this.A = a;
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

    function aa(a) {
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
        ba = G.freeze,
        H = [];
    x(H, 3);
    var I = ba.call(G, H);

    function J(a) {
        if (C(a.h)) throw Error("Cannot mutate an immutable Message");
    };

    function ca(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (r && null != a && a instanceof Uint8Array) return q(a);
                    if (a instanceof v) {
                        const b = a.A;
                        return null == b ? "" : "string" === typeof b ? b : a.A = q(b)
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

    function da(a) {
        return a.v === E ? a.toJSON() : ca(a)
    }

    function ea() {};

    function M(a, b, d = !1) {
        return -1 === b ? null : b >= a.o ? a.i ? a.i[b] : void 0 : d && a.i && (d = a.i[b], null != d) ? d : a.h[b + a.m]
    }

    function N(a, b, d, c = !1, e = !1) {
        e || J(a);
        a.j && (a.j = void 0);
        b >= a.o || c ? (a.i || (a.i = a.h[a.o + a.m] = {}))[b] = d : (void 0 !== a.i && a.o >= a.h.length ? (c = a.h.length - 1, e = b + a.m, e >= c ? (a.h[c] = void 0, a.h[e] = d, a.h.push(a.i)) : a.h[e] = d) : a.h[b + a.m] = d, void 0 !== a.i && b in a.i && delete a.i[b])
    }

    function fa(a) {
        a = M(a, 16);
        return null == a ? a : !!a
    }

    function O(a, b, d) {
        var c = M(a, d, !1);
        var e = !1;
        var f = null == c || "object" !== typeof c || (e = Array.isArray(c)) || c.v !== E ? e ? new b(c) : void 0 : c;
        f !== c && null != f && (N(a, d, f, !1, !0), x(f.h, z(a.h) & -33));
        b = f;
        if (null == b) return b;
        if (C(b.h) && !C(a.h)) {
            if (C(b.h)) {
                ({
                    s: c
                } = {
                    s: !0
                });
                c = {
                    s: c
                };
                if ((f = C(b.h)) && !c.s) throw Error("copyRepeatedFields must be true for frozen messages");
                f || D(b.h);
                e = new b.constructor;
                b.u && (e.u = b.u.slice());
                const h = b.h;
                for (let m = 0; m < h.length; m++) {
                    const n = h[m];
                    if (m === h.length - 1 && F(n))
                        for (g in n) {
                            const X = +g;
                            Number.isNaN(X) ?
                                (e.i || (e.i = e.h[e.o + e.m] = {}))[g] = n[g] : P(b, e, X, n[g], f, c)
                        } else P(b, e, m - b.m, n, f, c)
                }
                var g = e;
                g.j = b;
                b = g
            }
            N(a, d, b, !1)
        }
        return b
    }

    function ha(a) {
        return null == a ? !1 : a
    };

    function P(a, b, d, c, e, f) {
        if (a = a.g && a.g[d]) {
            c = f.s ? B(a.slice()) : a;
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
        } else null != c ? r && c instanceof Uint8Array ? e = c.length ? new v(new Uint8Array(c)) : u || (u = new v(null)) : (Array.isArray(c) && (e ? x(c, 2) : c && z(c) & 1 && f.s ? (e = Array.prototype.slice.call(c), A(e, (z(c) | 0) & -51), c = e) : D(c)), e = c) : e = void 0, N(b, d, e)
    };

    function ia(a) {
        var b = ja;
        if (null == a || "" == a) return new b;
        a = JSON.parse(a);
        if (!Array.isArray(a)) throw Error(void 0);
        x(a, 16);
        Q = a;
        b = new b(a);
        Q = null;
        return b
    }
    var R = class {
        constructor(a, b, d) {
            null == a && (a = Q);
            Q = null;
            var c = this.constructor.g || 0,
                e = 0 < c,
                f = this.constructor.j,
                g = !1;
            if (null == a) {
                var h = f ? [f] : [];
                x(h, 48);
                a = h;
                h = !0
            } else if (h = !!(z(a) & 16)) g = z(a), A(a, g | 32), g = !!(g & 32);
            e && 0 < a.length && F(a[a.length - 1]) && "g" in a[a.length - 1] && (c = 0);
            this.m = (f ? 0 : -1) - c;
            this.g = void 0;
            this.h = a;
            a: {
                f = this.h.length;c = f - 1;
                if (f && (f = this.h[c], F(f))) {
                    this.i = f;
                    b = Object.keys(f);
                    0 < b.length && Array.prototype.every.call(b, isNaN, void 0) ? this.o = Number.MAX_VALUE : this.o = c - this.m;
                    break a
                }
                void 0 !== b && -1 <
                b ? (this.o = Math.max(b, c + 1 - this.m), this.i = void 0) : this.o = Number.MAX_VALUE
            }
            if (!e && this.i && "g" in this.i) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (d)
                for (e = h && !g ? aa : B, b = 0; b < d.length; b++) h = d[b], (g = M(this, h)) ? Array.isArray(g) && e(g) : N(this, h, I, !1, !0)
        }
        toJSON() {
            return L(this.h, da, ea)
        }
    };
    R.prototype.v = E;
    R.prototype.toString = function() {
        return this.h.toString()
    };
    let Q;
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var la = class extends R {
            constructor(a) {
                super(a, -1, ka)
            }
        },
        ka = [17];
    var na = class extends R {
            constructor(a) {
                super(a, -1, ma)
            }
        },
        ma = [27];
    var ja = class extends R {
        constructor(a) {
            super(a)
        }
    };
    let S = null;

    function T() {
        const a = k.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function oa() {
        const a = k.performance;
        return a && a.now ? a.now() : null
    };
    class pa {
        constructor(a, b) {
            var d = oa() || T();
            this.label = a;
            this.type = b;
            this.value = d;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const U = k.performance,
        qa = !!(U && U.mark && U.measure && U.clearMarks),
        V = function(a) {
            let b = !1,
                d;
            return function() {
                b || (d = a(), b = !0);
                return d
            }
        }(() => {
            var a;
            if (a = qa) {
                var b;
                if (null === S) {
                    S = "";
                    try {
                        a = "";
                        try {
                            a = k.top.location.hash
                        } catch (d) {
                            a = k.location.hash
                        }
                        a && (S = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (d) {}
                }
                b = S;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function ra(a) {
        a && U && V() && (U.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), U.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class sa {
        constructor() {
            var a = window;
            this.g = [];
            this.C = a || k;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = V() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new pa(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            U && V() && U.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (oa() || T()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                U && V() && U.mark(b);
                !this.j || 2048 <
                    this.g.length || this.g.push(a)
            }
        }
    };
    const W = new sa;
    var ta = () => {
        window.google_measure_js_timing || (W.j = !1, W.g != W.C.google_js_reporting_queue && (V() && Array.prototype.forEach.call(W.g, ra, void 0), W.g.length = 0))
    };
    "number" !== typeof window.google_srt && (window.google_srt = Math.random());
    if ("complete" == window.document.readyState) ta();
    else if (W.j) {
        var ua = () => {
                ta()
            },
            Y = window;
        Y.addEventListener && Y.addEventListener.call(Y, "load", ua, !1)
    };

    function Z(a, b) {
        a = a.getElementsByTagName("META");
        for (let d = 0; d < a.length; ++d)
            if (a[d].getAttribute("name") === b) return a[d].getAttribute("content") || "";
        return ""
    };

    function va(a) {
        if (!(0 < a.g.length)) {
            var b = Z(a.body, "environment");
            for (const d of b.split("|")) d && a.g.push(d)
        }
    }

    function wa(a) {
        va(a);
        return 0 <= a.g.indexOf("amp")
    }
    var xa = class {
        constructor(a) {
            this.body = a;
            this.g = [];
            this.j = {};
            Z(a, "sampling_mod");
            var b = Z(a, "namespace");
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
            va(this);
            !this.j.hasOwnProperty("META_LOCKED") && (a = Z(this.body, "custom_flags")) && (this.j = JSON.parse(a))
        }
        addEventListener(a, b) {
            this.body.addEventListener(a, b)
        }
    };

    function ya(a, b) {
        if (b) {
            b = JSON.parse(b);
            for (const d in b) b.hasOwnProperty(d) && a.set(d, b[d])
        }
    }
    var za = class {
        constructor() {
            this.g = {}
        }
        set(a, b) {
            this.g[a] = b
        }
        get(a) {
            return this.g[a]
        }
    };

    function Aa({
        threshold: a,
        target: b,
        B: d,
        D: c
    }) {
        if (window.IntersectionObserver) {
            var e = !1;
            (new IntersectionObserver(f => {
                0 !== f.length && f[0].isIntersecting && (!e && d && d(), e = !0, c && c())
            }, {
                threshold: a
            })).observe(b)
        }
    };
    var Ba = class {
        constructor() {
            this.channel = 1;
            (this.g = !(!window.mys || !window.mys.pingback)) && this.setData(43, Date.now() - window.mys.pingback.getBaseTime())
        }
        setAttribute(a, b) {
            this.g && window.mys.pingback.setAttribute(a, b)
        }
        setData(a, b) {
            this.g && window.mys.pingback.setData(a, b, this.channel)
        }
        send(a) {
            this.g && window.mys.pingback.send(a)
        }
        tick(a, b) {
            this.g && (this.setData(a, Date.now() - window.mys.pingback.getBaseTime()), this.send(b))
        }
    };
    var Ca = class {
        constructor(a) {
            this.context = a;
            this.j = new za;
            this.pingback = new Ba
        }
        g() {}
    };
    var Da = class extends Ca {};
    var Ea = class extends Da {
        constructor(a) {
            super(a)
        }
        g() {
            Aa({
                threshold: .9,
                target: document.querySelector(".x-layout"),
                B: () => {
                    const a = document.querySelector(".x-layout");
                    a && a.classList.add("web-on-show")
                }
            })
        }
    };
    (function(a) {
        var b = document.getElementById("mys-content");
        if (b) {
            b = new xa(b);
            var d = new a(b);
            ya(d.j, Z(b.body, "runtime_data"));
            a = ia(Z(b.body, "render_config") || "[]");
            var c;
            wa(b) || (null == (c = O(O(a, na, 1), la, 10)) ? 0 : ha(fa(c))) || (c = mys.engine ? mys.engine.stage() : 0, 0 === (c & 1) && b.addEventListener("overallStart", () => {}), 0 !== (c & 4) && d.g(), b.addEventListener("browserStart", () => {}), b.addEventListener("browserReady", () => {
                d.g()
            }), b.addEventListener("browserQuiet", () => {}))
        }
    })(class extends Ea {});
}).call(this);