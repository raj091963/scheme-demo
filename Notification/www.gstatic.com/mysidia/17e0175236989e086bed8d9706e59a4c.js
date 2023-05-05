(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var p = this || self;

    function aa(a) {
        aa[" "](a);
        return a
    }
    aa[" "] = function() {};
    var ba = {},
        q = null;

    function ca(a) {
        var b;
        void 0 === b && (b = 0);
        if (!q) {
            q = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var g = c.concat(d[e].split(""));
                ba[e] = g;
                for (var f = 0; f < g.length; f++) {
                    var h = g[f];
                    void 0 === q[h] && (q[h] = f)
                }
            }
        }
        b = ba[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = g = 0; g < a.length - 2; g += 3) {
            var k = a[g],
                l = a[g + 1];
            h = a[g + 2];
            f = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = f + k + l + h
        }
        f = 0;
        h = d;
        switch (a.length - g) {
            case 2:
                f =
                    a[g + 1], h = b[(f & 15) << 2] || d;
            case 1:
                a = a[g], c[e] = b[a >> 2] + b[(a & 3) << 4 | f >> 4] + h + d
        }
        return c.join("")
    };
    var da = "undefined" !== typeof Uint8Array,
        ea = {};
    let fa;
    var ha = class {
        constructor(a) {
            if (ea !== ea) throw Error("illegal external caller");
            this.K = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
    };
    const r = Symbol(void 0);

    function t(a, b) {
        Object.isFrozen(a) || (r ? a[r] |= b : void 0 !== a.m ? a.m |= b : Object.defineProperties(a, {
            m: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function ia(a, b) {
        Object.isExtensible(a) && (r ? a[r] && (a[r] &= ~b) : void 0 !== a.m && (a.m &= ~b))
    }

    function u(a) {
        let b;
        r ? b = a[r] : b = a.m;
        return null == b ? 0 : b
    }

    function ka(a, b) {
        r ? a[r] = b : void 0 !== a.m ? a.m = b : Object.defineProperties(a, {
            m: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function w(a) {
        t(a, 1);
        return a
    }

    function la(a) {
        t(a, 17);
        return a
    }

    function x(a) {
        return a ? !!(u(a) & 2) : !1
    }

    function ma(a) {
        t(a, 16);
        return a
    }

    function na(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        ia(a, 16)
    };
    var oa = {};

    function y(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let pa;
    var qa = Object,
        ra = qa.freeze,
        sa = [];
    t(sa, 3);
    var z = ra.call(qa, sa);

    function ta(a) {
        if (x(a.h)) throw Error("Cannot mutate an immutable Message");
    };

    function ua(a, b, c = !1) {
        if (Array.isArray(a)) return new b(c ? ma(a) : a)
    };

    function va(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (da && null != a && a instanceof Uint8Array) return ca(a);
                    if (a instanceof ha) {
                        const b = a.K;
                        return null == b ? "" : "string" === typeof b ? b : a.K = ca(b)
                    }
                }
        }
        return a
    };

    function ya(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = za(a, b, c, void 0 !== d);
            else if (y(a)) {
                const e = {};
                for (let g in a) e[g] = ya(a[g], b, c, d);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function za(a, b, c, d) {
        d = d ? !!(u(a) & 16) : void 0;
        const e = Array.prototype.slice.call(a);
        c(a, e);
        for (a = 0; a < e.length; a++) e[a] = ya(e[a], b, c, d);
        return e
    }

    function Aa(a) {
        return a.J === oa ? a.toJSON() : va(a)
    }

    function Ba() {};

    function A(a, b, c = !1) {
        return -1 === b ? null : b >= a.s ? a.j ? a.j[b] : void 0 : c && a.j && (c = a.j[b], null != c) ? c : a.h[b + a.o]
    }

    function B(a, b, c, d = !1, e = !1) {
        e || ta(a);
        a.G && (a.G = void 0);
        b >= a.s || d ? (a.j || (a.j = a.h[a.s + a.o] = {}))[b] = c : (void 0 !== a.j && a.s >= a.h.length ? (d = a.h.length - 1, e = b + a.o, e >= d ? (a.h[d] = void 0, a.h[e] = c, a.h.push(a.j)) : a.h[e] = c) : a.h[b + a.o] = c, void 0 !== a.j && b in a.j && delete a.j[b])
    }

    function Ca(a, b, c, d) {
        let e = A(a, b, d);
        Array.isArray(e) || (e = z);
        const g = u(e);
        g & 1 || w(e);
        x(a.h) ? (g & 2 || t(e, 2), c & 1 || Object.freeze(e)) : e === z || !(c & 1 && c & 2) && g & 2 ? (e = w(Array.prototype.slice.call(e)), B(a, b, e, d)) : !(c & 2) && g & 16 && na(e);
        return e
    }

    function Da(a, b) {
        ta(a);
        "" !== b ? B(a, 2, b) : B(a, 2, void 0, !1)
    }

    function Ea(a, b, c) {
        const d = A(a, c, !1); {
            let g = !1;
            var e = null == d || "object" !== typeof d || (g = Array.isArray(d)) || d.J !== oa ? g ? new b(d) : void 0 : d
        }
        e !== d && null != e && (B(a, c, e, !1, !0), t(e.h, u(a.h) & -33));
        b = e;
        if (null == b) return b;
        x(b.h) && !x(a.h) && (b = Fa(b), B(a, c, b, !1));
        return b
    }

    function Ga(a, b, c, d = !0) {
        a.g || (a.g = {});
        let e = a.g[c];
        var g = Ca(a, c, 3, !1),
            f = x(a.h);
        const h = !!(u(a.h) & 16);
        var k = x(g);
        const l = f || k;
        !d && k && (g = w(Array.prototype.slice.call(g)), B(a, c, g, !1));
        if (!e) {
            e = [];
            k = l;
            for (let n = 0; n < g.length; n++) {
                var m = g[n];
                k = k || x(m);
                m = ua(m, b, h);
                void 0 !== m && (e.push(m), l && t(m.h, 2))
            }
            a.g[c] = e;
            b = g;
            Object.isFrozen(b) || (g = u(b) | 33, ka(b, k ? g & -9 : g | 8))
        }
        d = f || d;
        f = x(e);
        d && !f && (Object.isFrozen(e) && (a.g[c] = e = e.slice()), t(e, 2), Object.freeze(e));
        !d && f && (a.g[c] = e = e.slice());
        return e
    }

    function C(a, b, c) {
        var d = x(a.h);
        b = Ga(a, b, c, d);
        a = Ca(a, c, 3, !1);
        if (d = !d && a) {
            if (!a) throw Error("cannot check mutability state of non-array");
            d = !(u(a) & 8)
        }
        if (d) {
            for (d = 0; d < b.length; d++)
                if ((c = b[d]) && x(c.h)) {
                    c = d;
                    var e = Fa(b[d]);
                    b[c] = e;
                    a[d] = b[d].h
                }
            t(a, 8)
        }
        return b
    }

    function Ha(a, b) {
        return null == a ? b : a
    }

    function F(a, b) {
        return Ha(A(a, b), "")
    }

    function G(a, b) {
        a = A(a, b);
        return Ha(null == a ? a : !!a, !1)
    };

    function Ia(a, b, c, d, e, g) {
        if (a = a.g && a.g[c]) {
            d = g.A ? w(a.slice()) : a;
            ta(b);
            if (null != d) {
                e = w([]);
                g = !1;
                for (a = 0; a < d.length; a++) e[a] = d[a].h, g = g || x(e[a]);
                b.g || (b.g = {});
                b.g[c] = d;
                d = e;
                g ? ia(d, 8) : t(d, 8)
            } else b.g && (b.g[c] = void 0), e = z;
            B(b, c, e)
        } else null != d ? da && d instanceof Uint8Array ? e = d.length ? new ha(new Uint8Array(d)) : fa || (fa = new ha(null)) : (Array.isArray(d) && (e ? t(d, 2) : d && u(d) & 1 && g.A ? (e = Array.prototype.slice.call(d), ka(e, (u(d) | 0) & -51), d = e) : na(d)), e = d) : e = void 0, B(b, c, e)
    };

    function Fa(a) {
        if (!x(a.h)) return a;
        var {
            A: b
        } = {
            A: !0
        };
        b = {
            A: b
        };
        const c = x(a.h);
        if (c && !b.A) throw Error("copyRepeatedFields must be true for frozen messages");
        c || na(a.h);
        const d = new a.constructor;
        a.H && (d.H = a.H.slice());
        const e = a.h;
        for (let g = 0; g < e.length; g++) {
            const f = e[g];
            if (g === e.length - 1 && y(f))
                for (const h in f) {
                    const k = +h;
                    Number.isNaN(k) ? (d.j || (d.j = d.h[d.s + d.o] = {}))[h] = f[h] : Ia(a, d, k, f[h], c, b)
                } else Ia(a, d, g - a.o, f, c, b)
        }
        d.G = a;
        return d
    };
    var K = class {
        constructor(a, b, c) {
            null == a && (a = J);
            J = null;
            var d = this.constructor.g || 0,
                e = 0 < d,
                g = this.constructor.i,
                f = !1;
            if (null == a) {
                var h = g ? [g] : [];
                t(h, 48);
                a = h;
                h = !0
            } else if (h = !!(u(a) & 16)) f = u(a), ka(a, f | 32), f = !!(f & 32);
            e && 0 < a.length && y(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
            this.o = (g ? 0 : -1) - d;
            this.g = void 0;
            this.h = a;
            a: {
                g = this.h.length;d = g - 1;
                if (g && (g = this.h[d], y(g))) {
                    this.j = g;
                    b = Object.keys(g);
                    0 < b.length && Array.prototype.every.call(b, isNaN, void 0) ? this.s = Number.MAX_VALUE : this.s = d - this.o;
                    break a
                }
                void 0 !== b &&
                -1 < b ? (this.s = Math.max(b, d + 1 - this.o), this.j = void 0) : this.s = Number.MAX_VALUE
            }
            if (!e && this.j && "g" in this.j) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c)
                for (e = h && !f ? la : w, b = 0; b < c.length; b++) h = c[b], (f = A(this, h)) ? Array.isArray(f) && e(f) : B(this, h, z, !1, !0)
        }
        toJSON() {
            const a = this.h;
            return pa ? a : za(a, Aa, Ba)
        }
    };
    K.prototype.J = oa;
    K.prototype.toString = function() {
        return this.h.toString()
    };

    function Ja(a, b) {
        return va(b)
    }
    let J;
    var Ka = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function La(a, b) {
        if (!a || /[?&]dsh=1(&|$)/.test(a)) return null;
        if (/[?&]ae=1(&|$)/.test(a)) {
            var c = /[?&]adurl=([^&]+)/.exec(a);
            if (!c) return null;
            b = b ? c.index : a.length;
            try {
                return {
                    D: a.slice(0, b) + "&act=1" + a.slice(b),
                    F: decodeURIComponent(c[1])
                }
            } catch (d) {
                return null
            }
        }
        if (/[?&]ae=2(&|$)/.test(a)) {
            c = a;
            let d = "";
            b && (b = a.indexOf("&adurl="), 0 < b && (c = a.slice(0, b), d = a.slice(b)));
            return {
                D: `${c}&act=1${d}`,
                F: `${c}&dct=1${d}`
            }
        }
        return null
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var L = class {
        constructor(a, b) {
            this.g = b === Ma ? a : ""
        }
        toString() {
            return this.g.toString()
        }
    };
    L.prototype.l = !0;
    L.prototype.i = function() {
        return this.g.toString()
    };

    function Na(a) {
        return a instanceof L && a.constructor === L ? a.g : "type_error:SafeUrl"
    }
    var Oa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Ma = {};

    function N(a) {
        return new L(a, Ma)
    }
    var Pa = N("about:invalid#zClosurez");

    function Qa(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function O(a, b) {
        b instanceof L || b instanceof L || (b = "object" == typeof b && b.l ? b.i() : String(b), Oa.test(b) || (b = "about:invalid#zClosurez"), b = N(b));
        a.href = Na(b)
    };
    var Ra = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Sa(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Sa(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function Ta(a, b) {
        var c = [];
        for (d in b) Sa(d, b[d], c);
        b = c.join("&");
        if (b) {
            c = a.indexOf("#");
            0 > c && (c = a.length);
            var d = a.indexOf("?");
            if (0 > d || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.slice(0, d), e, a.slice(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            a = a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        }
        return a
    };

    function Ua(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Va(a = document) {
        return a.createElement("img")
    };

    function Wa(a, b, c = null, d = !1) {
        Xa(a, b, c, d)
    }

    function Xa(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Va(a.document);
        if (c || d) {
            const g = f => {
                c && c(f);
                if (d) {
                    f = a.google_image_requests;
                    const h = Array.prototype.indexOf.call(f, e, void 0);
                    0 <= h && Array.prototype.splice.call(f, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", g, !1);
                e.removeEventListener && e.removeEventListener("error", g, !1)
            };
            Qa(e, "load", g);
            Qa(e, "error", g)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }

    function Ya(a) {
        var b;
        if (b = p.navigator) b = p.navigator.userAgent, b = /Chrome/.test(b) && !/Edge/.test(b) ? !0 : !1;
        b && p.navigator.sendBeacon ? p.navigator.sendBeacon(a) : Wa(p, a, void 0, !1)
    };
    var Za = window;
    class $a {
        constructor(a) {
            this.L = a
        }
    }

    function Q(a) {
        return new $a(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const ab = new $a(a => /^[^:]*([/?#]|$)/.test(a));
    var bb = Q("http"),
        cb = Q("https"),
        db = Q("ftp"),
        eb = Q("mailto"),
        fb = Q("intent"),
        gb = Q("market"),
        ib = Q("itms"),
        jb = Q("itms-appss");
    const kb = [Q("data"), bb, cb, eb, db, ab];

    function lb(a, b = kb) {
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof $a && d.L(a)) return N(a)
        }
    }

    function nb(a, b = kb) {
        return lb(a, b) || Pa
    };

    function ob(a) {
        return Na(a)
    };
    const pb = [bb, cb, eb, db, ab, gb, ib, fb, jb];

    function qb(a, b) {
        if (a instanceof L) return a;
        const c = nb(a, pb);
        c === Pa && b(a);
        return N(ob(c))
    }
    var rb = () => {
        var a = `${"http:"===Za.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return b => {
            b = Ta(a, {
                id: "unsafeurl",
                ctx: 599,
                url: b
            });
            navigator.sendBeacon && navigator.sendBeacon(b, "")
        }
    };
    class sb {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const tb = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ub = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        zb = class {
            constructor(a, b) {
                this.url = a;
                this.I = !!b;
                this.depth = null
            }
        };

    function R(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Ab(a, b, c, d, e) {
        const g = [];
        Ua(a, function(f, h) {
            (f = Bb(f, b, c, d, e)) && g.push(h + "=" + f)
        });
        return g.join(b)
    }

    function Bb(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const g = [];
                for (let f = 0; f < a.length; f++) g.push(Bb(a[f], b, c, d + 1, e));
                return g.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Ab(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Cb(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    }

    function Db(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        let d = Cb(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(g, f) {
            return g - f
        });
        c = null;
        let e = "";
        for (let g = 0; g < a.g.length; g++) {
            const f = a.g[g],
                h = a.i[f];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? f : c;
                    break
                }
                let l = Ab(h[k], a.l, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.l;
                        break
                    }
                    c = null == c ? f : c
                }
            }
        }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }
    class Eb {
        constructor() {
            this.l = "&";
            this.i = {};
            this.u = 0;
            this.g = []
        }
    };

    function Fb() {
        var a = Gb,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.C = b)
    }

    function Hb(a) {
        var b = Ib.g;
        if (Math.random() < b.i) try {
            let c;
            a instanceof Eb ? c = a : (c = new Eb, Ua(a, (e, g) => {
                var f = c;
                const h = f.u++;
                e = R(g, e);
                f.g.push(h);
                f.i[h] = e
            }));
            const d = Db(c, b.u, b.l + "unsafeurl&");
            d && (b.g ? Ya(d) : Wa(p, d))
        } catch (c) {}
    }
    class Jb {
        constructor(a, b, c, d = !1) {
            this.u = a;
            this.l = b;
            this.i = c;
            this.g = d;
            this.C = Math.random()
        }
    };
    let S = null;

    function Kb() {
        const a = p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Lb() {
        const a = p.performance;
        return a && a.now ? a.now() : null
    };
    class Mb {
        constructor(a, b) {
            var c = Lb() || Kb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const T = p.performance,
        Nb = !!(T && T.mark && T.measure && T.clearMarks),
        U = function(a) {
            let b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(() => {
            var a;
            if (a = Nb) {
                var b;
                if (null === S) {
                    S = "";
                    try {
                        a = "";
                        try {
                            a = p.top.location.hash
                        } catch (c) {
                            a = p.location.hash
                        }
                        a && (S = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = S;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Ob(a) {
        a && T && U() && (T.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), T.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Pb {
        constructor() {
            var a = window;
            this.events = [];
            this.i = a || p;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = U() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Mb(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            T && U() && T.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Lb() || Kb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                T && U() && T.mark(b);
                !this.g ||
                    2048 < this.events.length || this.events.push(a)
            }
        }
    };

    function Qb(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    class Rb {
        constructor() {
            this.g = new Jb("https:", "/pagead/gen_204", 1, !0)
        }
        pinger() {
            return this.g
        }
    };
    let Gb;
    const V = new Pb;
    var Sb = () => {
        window.google_measure_js_timing || (V.g = !1, V.events != V.i.google_js_reporting_queue && (U() && Array.prototype.forEach.call(V.events, Ob, void 0), V.events.length = 0))
    };
    (a => {
        Gb = null != a ? a : new Jb("http:" === Za.location.protocol ? "http:" : "https:", "/pagead/gen_204?id=", .01);
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Fb();
        "complete" == window.document.readyState ? Sb() : V.g && Qa(window, "load", () => {
            Sb()
        })
    })();

    function Tb(a) {
        const {
            B: b,
            v: c
        } = Ub(a.href);
        O(a, qb(b, rb()));
        return c
    }

    function Vb(a, b, c = -1) {
        if (b)
            if (300 > Date.now() - c) a = !1;
            else if (b = a.getAttribute("data-orig-async-clicktrack-url")) {
            const {
                B: d,
                v: e
            } = Ub(b);
            O(a, qb(d, rb()));
            a = e
        } else a.setAttribute("data-orig-async-clicktrack-url", a.href), a = Tb(a);
        else a = Tb(a);
        return a
    }

    function Ub(a) {
        const b = La(a, !0);
        return b ? navigator.sendBeacon ? navigator.sendBeacon(Wb(b.D, "&ri=1"), "") ? {
            B: b.F,
            v: !0
        } : {
            B: Wb(a, "&ri=2"),
            v: !1
        } : {
            B: Wb(a, "&ri=16"),
            v: !1
        } : {
            B: a,
            v: !1
        }
    }

    function Wb(a, b) {
        const c = a.search(/&adurl=/);
        return 0 > c ? a + b : a.slice(0, c) + b + a.slice(c)
    }

    function Xb(a) {
        return null != a && -1 === a.indexOf("dbm/clk") && null !== La(a)
    };

    function Yb(a = !1) {
        var b = W,
            c = Date.now();
        if (!isNaN(c) && 0 < c) {
            var d = b.dataset.onReadyTs;
            d = d ? parseInt(d, 10) : NaN;
            !a && !isNaN(d) && 0 < d || (b.dataset.onReadyTs = String(c))
        }
    };
    var Zb = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var ac = class extends K {
            constructor(a) {
                super(a, -1, $b)
            }
        },
        $b = [1];
    var cc = class extends K {
            constructor(a) {
                super(a, -1, bc)
            }
        },
        bc = [1, 2];
    var dc = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function ec(a, b) {
        (a = F(a, 5)) && Wa(Za, a + "&label=" + b)
    }

    function fc(a, b) {
        !isNaN(b) && 0 < b && (isNaN(a.g) || a.g < b) && (a.g = b)
    }
    class gc {
        constructor() {
            this.g = NaN
        }
        filter(a, b) {
            const c = Ea(a, cc, 4);
            if (!c) return !0;
            for (var d of C(c, ac, 1)) {
                a: {
                    var e = d;
                    var g = b,
                        f = F(e, 2);f = f ? document.querySelectorAll(f) : [g.currentTarget];
                    for (let m = 0; m < f.length; ++m) {
                        const n = f[m].getBoundingClientRect();
                        var h = e,
                            k = Number,
                            l = Ca(h, 1, 1);
                        if (l.length && !(u(l) & 4)) {
                            Object.isFrozen(l) && (l = w(l.slice()), B(h, 1, l, void 0, !0));
                            let v = 0,
                                H = 0;
                            for (; v < l.length; v++) {
                                const M = k(l[v]);
                                null != M && (l[H++] = M)
                            }
                            H < v && (l.length = H);
                            t(l, 5)
                        }
                        x(h.h) && !Object.isFrozen(l) && (t(l, 2), Object.freeze(l));
                        h = l;
                        k = g.clientX;
                        l = g.clientY;
                        if (k >= n.left && k <= n.right && l >= n.top && l <= n.bottom && (l - h[0] < n.top || k + h[1] > n.right || l + h[2] > n.bottom || k - h[3] < n.left)) {
                            e = !1;
                            break a
                        }
                    }
                    e = !0
                }
                if (!e) return ec(a, "blocked_border_click"), !1
            }
            for (const m of C(c, Zb, 2))
                if (d = m, e = b.currentTarget, g = e.dataset.onReadyTs, fc(this, g ? parseInt(g, 10) : NaN), e = e.dataset.onShowTs, fc(this, e ? parseInt(e, 10) : NaN), e = this.g, isNaN(e) || !(0 < e) || Date.now() < this.g + Ha(A(d, 1), 0)) return ec(a, "blocked_fast_click"), !1;
            return G(c, 3) && "function" == typeof p.copfcChm ? (p.copfcChm(b),
                ec(a, "onepointfiveclick_first_click"), !1) : !0
        }
    };
    var Ib = new Rb;

    function hc() {
        return a => {
            a = Ta("https://pagead2.googlesyndication.com/pagead/gen_204", {
                id: "unsafeurl",
                ctx: 620,
                url: a
            });
            navigator.sendBeacon && navigator.sendBeacon(a, "")
        }
    };

    function ic(a, b) {
        const c = nb(a, jc);
        if (c === Pa) {
            a = Error("URL not recognized as safe: " + a);
            let D;
            try {
                const E = new Eb;
                var d = E;
                d.g.push(1);
                d.i[1] = R("context", b);
                a.error && a.meta && a.id || (a = new sb(a, {
                    message: Qb(a)
                }));
                if (a.msg) {
                    d = E;
                    var e = a.msg.substring(0, 512);
                    d.g.push(2);
                    d.i[2] = R("msg", e)
                }
                e = E;
                var g = [a.meta || {}];
                e.g.push(3);
                e.i[3] = g;
                a = p;
                g = [];
                let X;
                e = null;
                do {
                    var f = a;
                    try {
                        var h;
                        if (h = !!f && null != f.location.href) b: {
                            try {
                                aa(f.foo);
                                h = !0;
                                break b
                            } catch (I) {}
                            h = !1
                        }
                        var k = h
                    } catch (I) {
                        k = !1
                    }
                    k ? (X = f.location.href, e = f.document &&
                        f.document.referrer || null) : (X = e, e = null);
                    g.push(new zb(X || ""));
                    try {
                        a = f.parent
                    } catch (I) {
                        a = null
                    }
                } while (a && f != a);
                for (let I = 0, vb = g.length - 1; I <= vb; ++I) g[I].depth = vb - I;
                f = p;
                if (f.location && f.location.ancestorOrigins && f.location.ancestorOrigins.length == g.length - 1)
                    for (k = 1; k < g.length; ++k) {
                        var l = g[k];
                        l.url || (l.url = f.location.ancestorOrigins[k - 1] || "", l.I = !0)
                    }
                var m = g;
                let wa = new zb(p.location.href, !1);
                f = null;
                const xa = m.length - 1;
                for (l = xa; 0 <= l; --l) {
                    var n = m[l];
                    !f && tb.test(n.url) && (f = n);
                    if (n.url && !n.I) {
                        wa = n;
                        break
                    }
                }
                n =
                    null;
                const mc = m.length && m[xa].url;
                0 != wa.depth && mc && (n = m[xa]);
                D = new ub(wa, n);
                if (D.i) {
                    m = E;
                    var v = D.i.url || "";
                    m.g.push(4);
                    m.i[4] = R("top", v)
                }
                var H = {
                    url: D.g.url || ""
                };
                if (D.g.url) {
                    var M = D.g.url.match(Ra),
                        P = M[1],
                        wb = M[3],
                        xb = M[4];
                    v = "";
                    P && (v += P + ":");
                    wb && (v += "//", v += wb, xb && (v += ":" + xb));
                    var yb = v
                } else yb = "";
                P = E;
                H = [H, {
                    url: yb
                }];
                P.g.push(5);
                P.i[5] = H;
                Hb(E)
            } catch (E) {
                try {
                    Hb({
                        context: "ecmserr",
                        rctx: b,
                        msg: Qb(E),
                        url: D && D.g.url
                    })
                } catch (X) {}
            }
        }
        return c
    }
    var jc = [cb, fb, gb, ib, jb];

    function Y(a, b) {
        a.dispatchEvent(new CustomEvent("customError", {
            detail: {
                message: b
            }
        }))
    }

    function Z(a) {
        const b = a.currentTarget;
        let c = a.type;
        null != a.clientX && null != a.clientY && (c += ` [${a.clientX},${a.clientY}]`);
        a = a.target;
        let d = !1,
            e = !1,
            g = !1;
        for (; a !== b;) {
            var f = a.attributes;
            for (var h = 0; h < f.length; ++h) {
                var k = f[h];
                !d && k.name.match(/^x-.+-l$/) ? (c = "[l=" + k.value + "]" + c, d = !0) : !e && k.name.match(/^x-.+-v$/) ? (c = "[v=" + k.value + "]" + c, e = !0) : !g && k.name.match(/^x-.+-e$/) && (c = "[e=" + k.value + "]" + c, g = !0)
            }
            f = a.parentElement || b;
            if (!g)
                for (h = f.children, k = 0; k < h.length; k++)
                    if (h[k] === a) {
                        c = `>${k}` + c;
                        break
                    }
            a = f
        }
        return c
    };

    function kc(a) {
        for (; !a.id;) {
            const b = "goog-js-util-" + Math.random().toString(36).substr(2, 5);
            if (!document.getElementById(b)) {
                a.id = b;
                break
            }
        }
        return a.id
    }
    var lc = class {
        constructor() {
            this.g = !1
        }
    };
    var oc = class extends K {
            constructor(a) {
                super(a, -1, nc)
            }
        },
        nc = [1];

    function pc(a, b) {
        var c = W;
        a.u.g = G(b, 2);
        G(b, 4) && (c.dataset.useCustomTabsInSdk = "true");
        if (F(b, 5))
            for (a = c.querySelectorAll(F(b, 5)), b = 0; b < a.length; ++b) a[b].addEventListener("click", () => {})
    }

    function qc(a) {
        var b = W;
        let c = null,
            d = null;
        b.addEventListener("mousedown", e => {
            for (var g = e.currentTarget, f = e.target; null !== f && f !== g.parentElement && "A" !== f.tagName;) f = f.parentElement;
            c = f === g.parentElement ? null : f;
            a: {
                if (null != a.g) {
                    g = e.currentTarget;
                    f = e.target;
                    if (G(a.g, 2) && 1 == f.children.length && "SPAN" == f.children[0].tagName) {
                        var h = f.children[0],
                            k = h.getBoundingClientRect();
                        k.left <= e.clientX && e.clientX <= k.right && k.top <= e.clientY && e.clientY <= k.bottom && (f = h)
                    }
                    for (h = C(a.g, dc, 1); f != g.parentElement;) {
                        f.matches =
                            f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.msMatchesSelector || f.oMatchesSelector;
                        for (k = 0; k < h.length; ++k) {
                            const m = h[k];
                            if (f.matches(F(m, 1))) {
                                d = m;
                                break a
                            }
                        }
                        f = f.parentElement
                    }
                }
                d = null
            }
            if (c && d && F(d, 2)) {
                f = d;
                g = c;
                if (h = F(f, 2)) O(g, N(ob(ic(h, 618)))), g.target = F(f, 3) || "_top";
                delete g.dataset.u2FinalUrl;
                delete g.dataset.u2TrackingUrl;
                (h = F(f, 6)) && (g.dataset.u2FinalUrl = h);
                (h = F(f, 7)) && (g.dataset.u2TrackingUrl = h);
                delete g.dataset.appClickInfo;
                if (f = Ea(f, Ka, 9)) {
                    g = g.dataset;
                    a: {
                        pa = !0;
                        try {
                            var l = JSON.stringify(f.toJSON(),
                                Ja);
                            break a
                        } finally {
                            pa = !1
                        }
                        l = void 0
                    }
                    g.appClickInfo = l
                }
                l = e.currentTarget;
                "function" === typeof window.st ? window.st(kc(c)) : Y(l, `js-util: st() missing: ${Z(e)}`);
                G(a.g, 6) && c.dispatchEvent(new CustomEvent("CUSTOM_MOUSE_DOWN", {
                    bubbles: !0
                }))
            }
        });
        b.addEventListener("click", e => {
            if (c && d && F(d, 2) && a.C.filter(d, e) && !e.defaultPrevented) {
                var g = c,
                    f = e.currentTarget;
                a: {
                    var h = e.currentTarget;
                    var k = e.target;
                    if (a.u.g && 1 == k.children.length && "SPAN" == k.children[0].tagName) {
                        var l = k.children[0];
                        const m = l.getBoundingClientRect();
                        m.left <= e.clientX && e.clientX <= m.right && m.top <= e.clientY && e.clientY <= m.bottom && (k = l)
                    }
                    for (; k != h;) {
                        l = k.getAttribute("x-code");
                        if (null != l) {
                            h = parseInt(l, 10);
                            break a
                        }
                        k = k.parentElement
                    }
                    h = 17
                }
                k = h;
                "function" === typeof window.ja ? window.ja(kc(g), k) : Y(f, `js-util: ja() missing: ${Z(e)}`);
                f = e.currentTarget;
                (h = g.href) ? (l = [], 0 == /&nb=[^&]+/i.test(h) && l.push("&nb=" + k), 0 == /&nx=[^&]+/i.test(h) && l.push("&nx=" + Math.round(e.clientX - f.offsetLeft)), 0 == /&ny=[^&]+/i.test(h) && l.push("&ny=" + Math.round(e.clientY - f.offsetTop)), 0 <
                    l.length && (k = l.join(""), l = h.indexOf("&adurl="), h = 0 > l ? h + k : h.substring(0, l) + k + h.substring(l), O(g, qb(h, hc())), Y(f, `js-util: ja() filling: ${k} ${Z(e)}`))) : Y(f, `js-util: href is empty: ${Z(e)}`);
                g = F(d, 2);
                f = g.indexOf("&adurl=");
                0 > f || (g = g.slice(f), f = c.href || "", h = f.indexOf(g), 0 > h || (k = f.slice(h + g.length)) && O(c, N(ob(ic(f.slice(0, h) + k + g, 619)))));
                G(a.g, 6) ? (c.dispatchEvent(new CustomEvent("CUSTOM_CLICK", {
                    bubbles: !0
                })), e.stopImmediatePropagation(), e.preventDefault()) : (e = c, (Xb(e.href) || e.getAttribute("data-orig-async-clicktrack-url") &&
                    Xb(e.getAttribute("data-orig-async-clicktrack-url"))) && G(d, 8) && Vb(c, G(d, 10), a.l) && (a.l = Date.now()))
            } else e.stopImmediatePropagation(), e.preventDefault()
        })
    }

    function rc(a, b) {
        if (b instanceof CustomEvent)
            for (const c of b.detail.changeConfigs) b = C(a.g, dc, 1).find(d => F(d, 1) === c.selector), void 0 !== b && Da(b, c.href)
    }
    var sc = class {
        constructor() {
            this.g = null;
            this.C = new gc;
            this.u = new lc;
            this.i = !1;
            this.l = -1
        }
    };
    const W = document.getElementById("mys-content");
    if (W) {
        const a = new sc;
        W.addEventListener("browserReady", () => {
            a: {
                var b = W.getElementsByTagName("META");
                for (let c = 0; c < b.length; ++c)
                    if ("exit" === b[c].getAttribute("name")) {
                        b = b[c].getAttribute("content") || "";
                        break a
                    }
                b = ""
            }
            if (b)
                if (null == b || "" == b) b = new oc;
                else {
                    b = JSON.parse(b);
                    if (!Array.isArray(b)) throw Error(void 0);
                    J = b = ma(b);
                    b = new oc(b);
                    J = null
                }
            else b = null;a.g = b;a.g && (Yb(G(a.g, 7)), pc(a, a.g), a.i || (a.i = !0, qc(a)))
        });
        W.addEventListener("changeExitConfig", b => void rc(a, b))
    };
}).call(this);