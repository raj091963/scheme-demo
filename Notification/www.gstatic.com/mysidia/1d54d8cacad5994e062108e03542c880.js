(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var n = this || self;

    function aa(a) {
        a = a.s;
        const b = encodeURIComponent;
        let c = "";
        a.platform && (c += "&uap=" + b(a.platform));
        a.platformVersion && (c += "&uapv=" + b(a.platformVersion));
        a.uaFullVersion && (c += "&uafv=" + b(a.uaFullVersion));
        a.architecture && (c += "&uaa=" + b(a.architecture));
        a.model && (c += "&uam=" + b(a.model));
        a.bitness && (c += "&uab=" + b(a.bitness));
        a.fullVersionList && (c += "&uafvl=" + b(a.fullVersionList.map(d => b(d.brand) + ";" + b(d.version)).join("|")));
        "undefined" !== typeof a.wow64 && (c += "&uaw=" + Number(a.wow64));
        return c
    }

    function ba(a, b) {
        return a.g ? a.l.slice(0, a.g.index) + b + a.l.slice(a.g.index) : a.l + b
    }

    function ca(a) {
        let b = "&act=1&ri=1";
        a.h && a.s && (b += aa(a));
        return ba(a, b)
    }

    function da(a, b) {
        return a.h && a.i || a.o ? 1 == b ? a.h ? a.i : ba(a, "&dct=1") : 2 == b ? ba(a, "&ri=2") : ba(a, "&ri=16") : a.l
    }
    var fa = class {
        constructor({
            url: a,
            S: b
        }) {
            this.l = a;
            this.s = b;
            b = /[?&]dsh=1(&|$)/.test(a);
            this.h = !b && /[?&]ae=1(&|$)/.test(a);
            this.o = !b && /[?&]ae=2(&|$)/.test(a);
            if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
                let c;
                try {
                    c = decodeURIComponent(this.g[1])
                } catch (d) {
                    c = null
                }
                this.i = c
            }
        }
    };

    function q(a) {
        var b;
        a: {
            if (b = n.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };
    var t = class {
        constructor(a, b) {
            this.g = b === r ? a : ""
        }
        toString() {
            return this.g.toString()
        }
    };
    t.prototype.i = !0;
    t.prototype.h = function() {
        return this.g.toString()
    };

    function ha(a) {
        return a instanceof t && a.constructor === t ? a.g : "type_error:SafeUrl"
    }
    var ia = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        r = {},
        ka = new t("about:invalid#zClosurez", r);

    function la(a, b) {
        a: {
            const c = a.length,
                d = "string" === typeof a ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    class ma {
        constructor(a) {
            this.ba = a
        }
    }

    function u(a) {
        return new ma(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const na = new ma(a => /^[^:]*([/?#]|$)/.test(a));
    var oa = u("http"),
        pa = u("https"),
        qa = u("ftp"),
        ra = u("mailto"),
        sa = u("intent"),
        ta = u("market"),
        ua = u("itms"),
        va = u("itms-appss");
    const wa = [u("data"), oa, pa, ra, qa, na];

    function xa(a, b = wa) {
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof ma && d.ba(a)) return new t(a, r)
        }
    }

    function ya(a, b = wa) {
        return xa(a, b) || ka
    };

    function za(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Aa(a, b) {
        b instanceof t || b instanceof t || (b = "object" == typeof b && b.i ? b.h() : String(b), ia.test(b) || (b = "about:invalid#zClosurez"), b = new t(b, r));
        a.href = ha(b)
    };

    function Ba() {
        return q("iPhone") && !q("iPod") && !q("iPad")
    };

    function Ca(a) {
        Ca[" "](a);
        return a
    }
    Ca[" "] = function() {};
    var Ea = Ba(),
        Fa = q("iPad");
    var Ga = Ba() || q("iPod"),
        Ha = q("iPad");
    var Ia = {},
        Ja = null;

    function Ka(a, b) {
        void 0 === b && (b = 0);
        if (!Ja) {
            Ja = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Ia[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Ja[h] && (Ja[h] = g)
                }
            }
        }
        b = Ia[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var l = a[f],
                k = a[f + 1];
            h = a[f + 2];
            g = b[l >> 2];
            l = b[(l & 3) << 4 | k >> 4];
            k = b[(k & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = g + l + k + h
        }
        g = 0;
        h = d;
        switch (a.length - f) {
            case 2:
                g =
                    a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };
    var La = "undefined" !== typeof Uint8Array,
        Ma = {};
    let Na;
    var Oa = class {
        constructor(a) {
            if (Ma !== Ma) throw Error("illegal external caller");
            this.U = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
    };
    const v = Symbol(void 0);

    function w(a, b) {
        Object.isFrozen(a) || (v ? a[v] |= b : void 0 !== a.u ? a.u |= b : Object.defineProperties(a, {
            u: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function Pa(a, b) {
        Object.isExtensible(a) && (v ? a[v] && (a[v] &= ~b) : void 0 !== a.u && (a.u &= ~b))
    }

    function x(a) {
        let b;
        v ? b = a[v] : b = a.u;
        return null == b ? 0 : b
    }

    function y(a, b) {
        v ? a[v] = b : void 0 !== a.u ? a.u = b : Object.defineProperties(a, {
            u: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function z(a) {
        w(a, 1);
        return a
    }

    function Qa(a) {
        w(a, 17);
        return a
    }

    function A(a) {
        return a ? !!(x(a) & 2) : !1
    }

    function B(a) {
        w(a, 2);
        return a
    }

    function C(a) {
        w(a, 16);
        return a
    }

    function Ra(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        Pa(a, 16)
    }

    function Sa(a, b) {
        y(b, (x(a) | 0) & -51)
    };
    var Ta = {};

    function E(a) {
        return A(a.j)
    }

    function Ua(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let Va;
    var Wa = Object,
        Xa = Wa.freeze,
        Ya = [];
    w(Ya, 3);
    var Za = Xa.call(Wa, Ya);

    function db(a) {
        if (E(a)) throw Error("Cannot mutate an immutable Message");
    }
    var eb = class {
        constructor(a) {
            this.h = 0;
            this.g = a
        }
        next() {
            return this.h < this.g.length ? {
                done: !1,
                value: this.g[this.h++]
            } : {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return this
        }
    };

    function fb(a, b, c) {
        let d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.G === Ta) return a;
        if (d) return new b(a);
        if (c) return new b
    }

    function gb(a, b, c = !1) {
        if (Array.isArray(a)) return new b(c ? C(a) : a)
    };

    function ib(a, b) {
        return new F(b, a.i, a.l, a.s)
    }

    function G(a) {
        return Array.from(a.g.keys()).sort(jb)
    }

    function kb(a, b = lb) {
        const c = G(a);
        for (let d = 0; d < c.length; d++) {
            const e = c[d],
                f = a.g.get(c[d]);
            c[d] = [b(e), b(f)]
        }
        return c
    }

    function nb(a, b = lb) {
        const c = [];
        a = a.g.entries();
        for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
        return c
    }
    var F = class {
        constructor(a, b, c, d = ob) {
            c = x(a);
            c |= 32;
            y(a, c);
            this.h = c;
            this.l = (this.i = b) ? pb : qb;
            this.s = d;
            this.g = b = new Map;
            for (d = 0; d < a.length; d++) c = a[d], b.set(c[0], c[1]);
            this.size = b.size
        }
        entries() {
            const a = G(this);
            for (let b = 0; b < a.length; b++) {
                const c = a[b];
                a[b] = [c, this.get(c)]
            }
            return new eb(a)
        }
        keys() {
            const a = G(this);
            return new eb(a)
        }
        values() {
            const a = G(this);
            for (let b = 0; b < a.length; b++) a[b] = this.get(a[b]);
            return new eb(a)
        }
        forEach(a, b) {
            const c = G(this);
            for (let d = 0; d < c.length; d++) {
                const e = c[d];
                a.call(b, this.get(e),
                    e, this)
            }
        }
        set(a, b) {
            if (this.h & 2) throw Error("Cannot mutate an immutable Map");
            const c = this.g;
            if (null == b) return c.delete(a), this;
            c.set(a, this.l(b, this.i, !1, this.o));
            this.size = c.size;
            return this
        }
        get(a) {
            const b = this.g;
            if (b.has(a)) {
                var c = b.get(a),
                    d = this.h,
                    e = this.i;
                e && Array.isArray(c) && d & 16 && C(c);
                d = this.l(c, e, !!(d & 2), this.o);
                d !== c && b.set(a, d);
                return d
            }
        }
        has(a) {
            return this.g.has(a)
        }[Symbol.iterator]() {
            return this.entries()
        }
    };

    function jb(a, b) {
        a = "" + a;
        b = "" + b;
        return a > b ? 1 : a < b ? -1 : 0
    }

    function pb(a, b, c, d) {
        a = fb(a, b, !0);
        c ? B(a.j) : d && (a = rb(a));
        return a
    }

    function qb(a) {
        return a
    }

    function ob(a) {
        return a
    }

    function lb(a) {
        return a
    };

    function sb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (La && null != a && a instanceof Uint8Array) return Ka(a);
                    if (a instanceof Oa) {
                        const b = a.U;
                        return null == b ? "" : "string" === typeof b ? b : a.U = Ka(b)
                    }
                    if (a instanceof F) return kb(a)
                }
        }
        return a
    };

    function tb(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = ub(a, b, c, void 0 !== d);
            else if (Ua(a)) {
                const e = {};
                for (let f in a) e[f] = tb(a[f], b, c, d);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function ub(a, b, c, d) {
        d = d ? !!(x(a) & 16) : void 0;
        const e = Array.prototype.slice.call(a);
        c(a, e);
        for (a = 0; a < e.length; a++) e[a] = tb(e[a], b, c, d);
        return e
    }

    function vb(a) {
        return tb(a, wb, xb)
    }

    function wb(a) {
        return a.G === Ta ? a.toJSON() : a instanceof F ? kb(a, vb) : sb(a)
    }

    function yb(a) {
        return tb(a, zb, xb)
    }

    function zb(a) {
        if (!a) return a;
        if ("object" === typeof a) {
            if (La && null != a && a instanceof Uint8Array) return new Uint8Array(a);
            if (a instanceof F) return a.size ? ib(a, C(nb(a, yb))) : [];
            if (a.G === Ta) return Ab(a)
        }
        return a
    }

    function xb() {};

    function H(a, b, c = !1) {
        return -1 === b ? null : b >= a.A ? a.m ? a.m[b] : void 0 : c && a.m && (c = a.m[b], null != c) ? c : a.j[b + a.v]
    }

    function J(a, b, c, d = !1, e = !1) {
        e || db(a);
        a.h && (a.h = void 0);
        if (b >= a.A || d) return (a.m || (a.m = a.j[a.A + a.v] = {}))[b] = c, a;
        void 0 !== a.m && a.A >= a.j.length ? (d = a.j.length - 1, e = b + a.v, e >= d ? (a.j[d] = void 0, a.j[e] = c, a.j.push(a.m)) : a.j[e] = c) : a.j[b + a.v] = c;
        void 0 !== a.m && b in a.m && delete a.m[b];
        return a
    }

    function Bb(a, b, c, d) {
        let e = H(a, b, d);
        Array.isArray(e) || (e = Za);
        const f = x(e);
        f & 1 || z(e);
        E(a) ? (f & 2 || B(e), c & 1 || Object.freeze(e)) : e === Za || !(c & 1 && c & 2) && f & 2 ? (e = z(Array.prototype.slice.call(e)), J(a, b, e, d)) : !(c & 2) && f & 16 && Ra(e);
        return e
    }

    function Cb(a, b) {
        let c = Bb(a, b, 1, !1);
        if (c.length && !(x(c) & 4)) {
            Object.isFrozen(c) && (c = z(c.slice()), J(a, b, c, !1, !0));
            let d = b = 0;
            for (; b < c.length; b++) {
                const e = c[b];
                null != e && (c[d++] = e)
            }
            d < b && (c.length = d);
            w(c, 5)
        }
        E(a) && !Object.isFrozen(c) && (B(c), Object.freeze(c));
        return c
    }

    function N(a, b, c) {
        a = H(a, b);
        return null == a ? c : a
    }
    let Db;

    function Eb(a, b, c) {
        b: {
            var d = H(a, b),
                e = E(a),
                f = !1;
            if (null == d) {
                if (e) {
                    b = Db || (Db = new F(B([])));
                    break b
                }
                d = []
            } else if (d.constructor === F) {
                if (0 == (d.h & 2) || e) {
                    b = d;
                    break b
                }
                d = nb(d)
            } else Array.isArray(d) ? f = A(d) : d = [];
            if (e) {
                if (!d.length) {
                    b = Db || (Db = new F(B([])));
                    break b
                }
                f || (f = !0, B(d))
            } else if (f)
                for (f = !1, d = Array.prototype.slice.call(d), e = 0; e < d.length; e++) {
                    const g = d[e] = Array.prototype.slice.call(d[e]);
                    Array.isArray(g[1]) && (g[1] = B(g[1]))
                }
            f || (x(d) & 32 ? Ra(d) : x(a.j) & 16 && C(d));f = new F(d, c);J(a, b, f, !1, !0);b = f
        }
        null == b ? a = b : (!E(a) &&
            c && (b.o = !0), a = b);
        return a
    }

    function P(a, b, c) {
        const d = H(a, c, !1);
        b = fb(d, b);
        b !== d && null != b && (J(a, c, b, !1, !0), w(b.j, x(a.j) & -33));
        return b
    }

    function Q(a, b, c) {
        b = P(a, b, c);
        if (null == b) return b;
        E(b) && !E(a) && (b = rb(b), J(a, c, b, !1));
        return b
    }

    function Fb(a, b, c, d, e = !0) {
        a.g || (a.g = {});
        let f = a.g[c];
        var g = Bb(a, c, 3, d),
            h = E(a);
        const l = !!(x(a.j) & 16);
        var k = A(g);
        const p = h || k;
        !e && k && (g = z(Array.prototype.slice.call(g)), J(a, c, g, d));
        if (!f) {
            f = [];
            d = p;
            for (k = 0; k < g.length; k++) {
                var m = g[k];
                d = d || A(m);
                m = gb(m, b, l);
                void 0 !== m && (f.push(m), p && B(m.j))
            }
            a.g[c] = f;
            b = g;
            Object.isFrozen(b) || (g = x(b) | 33, y(b, d ? g & -9 : g | 8))
        }
        e = h || e;
        h = A(f);
        e && !h && (Object.isFrozen(f) && (a.g[c] = f = f.slice()), B(f), Object.freeze(f));
        !e && h && (a.g[c] = f = f.slice());
        return f
    }

    function Gb(a, b, c, d = !1) {
        var e = E(a);
        b = Fb(a, b, c, d, e);
        a = Bb(a, c, 3, d);
        if (e = !e && a) {
            if (!a) throw Error("cannot check mutability state of non-array");
            e = !(x(a) & 8)
        }
        if (e) {
            for (e = 0; e < b.length; e++)(c = b[e]) && E(c) && (b[e] = rb(b[e]), a[e] = b[e].j);
            w(a, 8)
        }
        return b
    }

    function Hb(a, b, c) {
        db(a);
        let d;
        if (null != c) {
            d = z([]);
            let e = !1;
            for (let f = 0; f < c.length; f++) d[f] = c[f].j, e = e || A(d[f]);
            a.g || (a.g = {});
            a.g[b] = c;
            c = d;
            e ? Pa(c, 8) : w(c, 8)
        } else a.g && (a.g[b] = void 0), d = Za;
        return J(a, b, d)
    }

    function Ib(a, b) {
        return null == a ? b : a
    }

    function R(a, b) {
        return Ib(H(a, b), "")
    }

    function S(a, b) {
        a = H(a, b);
        return Ib(null == a ? a : !!a, !1)
    };

    function Jb(a) {
        Array.isArray(a) && B(a);
        return a
    }

    function Kb(a, b, c, d, e, f) {
        (a = a.g && a.g[c]) ? (e = f.B ? z(a.slice()) : a, Hb(b, c, e)) : (null != d ? La && d instanceof Uint8Array ? e = d.length ? new Oa(new Uint8Array(d)) : Na || (Na = new Oa(null)) : d instanceof F ? e = d.g.size ? ib(d, nb(d, (e || d instanceof F && d.h & 2) && d.i ? Jb : void 0)) : [] : (Array.isArray(d) && (e ? B(d) : d && x(d) & 1 && f.B ? (e = Array.prototype.slice.call(d), y(e, (x(d) | 0) & -51), d = e) : Ra(d)), e = d) : e = void 0, J(b, c, e))
    };

    function rb(a) {
        if (E(a)) {
            var {
                B: b
            } = {
                B: !0
            };
            b = {
                B: b
            };
            const d = E(a);
            if (d && !b.B) throw Error("copyRepeatedFields must be true for frozen messages");
            d || Ra(a.j);
            const e = new a.constructor;
            a.C && (e.C = a.C.slice());
            const f = a.j;
            for (let g = 0; g < f.length; g++) {
                const h = f[g];
                if (g === f.length - 1 && Ua(h))
                    for (c in h) {
                        const l = +c;
                        Number.isNaN(l) ? (e.m || (e.m = e.j[e.A + e.v] = {}))[c] = h[c] : Kb(a, e, l, h[c], d, b)
                    } else Kb(a, e, g - a.v, h, d, b)
            }
            var c = e;
            c.h = a;
            a = c
        }
        return a
    }

    function Ab(a) {
        var b = ub(a.j, zb, Sa);
        C(b);
        Lb = b;
        b = new a.constructor(b);
        Lb = null;
        Mb(b, a);
        return b
    }

    function Nb(a) {
        Va = !0;
        try {
            return JSON.stringify(a.toJSON(), Ob)
        } finally {
            Va = !1
        }
    }
    var T = class {
        constructor(a, b, c) {
            null == a && (a = Lb);
            Lb = null;
            var d = this.constructor.g || 0,
                e = 0 < d,
                f = this.constructor.h,
                g = !1;
            if (null == a) {
                var h = f ? [f] : [];
                w(h, 48);
                a = h;
                h = !0
            } else if (h = !!(x(a) & 16)) g = x(a), y(a, g | 32), g = !!(g & 32);
            e && 0 < a.length && Ua(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
            this.v = (f ? 0 : -1) - d;
            this.g = void 0;
            this.j = a;
            a: {
                f = this.j.length;d = f - 1;
                if (f && (f = this.j[d], Ua(f))) {
                    this.m = f;
                    b = Object.keys(f);
                    0 < b.length && Array.prototype.every.call(b, isNaN, void 0) ? this.A = Number.MAX_VALUE : this.A = d - this.v;
                    break a
                }
                void 0 !==
                b && -1 < b ? (this.A = Math.max(b, d + 1 - this.v), this.m = void 0) : this.A = Number.MAX_VALUE
            }
            if (!e && this.m && "g" in this.m) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c)
                for (e = h && !g ? Qa : z, b = 0; b < c.length; b++) h = c[b], (g = H(this, h)) ? Array.isArray(g) && e(g) : J(this, h, Za, !1, !0)
        }
        toJSON() {
            const a = this.j;
            return Va ? a : ub(a, wb, xb)
        }
    };
    T.prototype.G = Ta;
    T.prototype.toString = function() {
        return this.j.toString()
    };

    function Ob(a, b) {
        return sb(b)
    }

    function Mb(a, b) {
        b.C && (a.C = b.C.slice());
        const c = b.g;
        if (c) {
            const f = b.m;
            for (let g in c)
                if (b = c[g]) {
                    var d = !(!f || !f[g]),
                        e = +g;
                    if (Array.isArray(b)) {
                        if (b.length)
                            for (d = Gb(a, b[0].constructor, e, d), e = 0; e < Math.min(d.length, b.length); e++) Mb(d[e], b[e])
                    } else throw a = typeof b, Error("unexpected object: type: " + ("object" != a ? a : b ? Array.isArray(b) ? "array" : a : "null") + ": " + b);
                }
        }
    }
    let Lb;
    var Pb = class extends T {
            constructor(a) {
                super(a)
            }
        },
        Qb = class extends T {
            constructor(a) {
                super(a)
            }
        };
    var Sb = class extends T {
            constructor(a) {
                super(a, -1, Rb)
            }
        },
        Tb = class extends T {
            constructor(a) {
                super(a)
            }
            D() {
                return R(this, 3)
            }
            R(a) {
                J(this, 5, a)
            }
        },
        U = class extends T {
            constructor(a) {
                super(a)
            }
            D() {
                return R(this, 1)
            }
            R(a) {
                J(this, 2, a)
            }
        },
        Ub = class extends T {
            constructor(a) {
                super(a)
            }
        },
        Rb = [6, 7];
    var Wb = class extends T {
            constructor(a) {
                super(a, -1, Vb)
            }
        },
        Vb = [17];
    var Xb = class extends T {
        constructor(a) {
            super(a)
        }
    };
    var Yb = class extends T {
        constructor() {
            super()
        }
    };
    var Zb = {
            capture: !0
        },
        $b = {
            passive: !0
        },
        ac = za(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                n.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function bc(a) {
        return a ? a.passive && ac() ? a : a.capture || !1 : !1
    }

    function V(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, bc(d))
    };

    function cc() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    var dc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function ec(a) {
        var b = a.indexOf("#");
        0 > b && (b = a.length);
        var c = a.indexOf("?");
        if (0 > c || c > b) {
            c = b;
            var d = ""
        } else d = a.substring(c + 1, b);
        return [a.slice(0, c), d, a.slice(b)]
    }

    function fc(a, b) {
        return b ? a ? a + "&" + b : b : a
    }

    function gc(a, b) {
        if (!b) return a;
        a = ec(a);
        a[1] = fc(a[1], b);
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function hc(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) hc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function ic(a) {
        var b = [],
            c;
        for (c in a) hc(c, a[c], b);
        return b.join("&")
    }
    var jc = /#|$/;

    function kc(a, b) {
        var c = a.search(jc);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }

    function pc(a, b) {
        a = ec(a);
        var c = a[1],
            d = [];
        c && c.split("&").forEach(function(e) {
            var f = e.indexOf("=");
            b.hasOwnProperty(0 <= f ? e.slice(0, f) : e) || d.push(e)
        });
        a[1] = fc(d.join("&"), ic(b));
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    };

    function qc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var rc = a => {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    let sc = [];
    const tc = () => {
        const a = sc;
        sc = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var uc = a => {
            sc.push(a);
            1 == sc.length && (window.Promise ? Promise.resolve().then(tc) : window.setImmediate ? setImmediate(tc) : setTimeout(tc, 0))
        },
        vc = a => {
            var b = W;
            "complete" === b.readyState || "interactive" === b.readyState ? uc(a) : b.addEventListener("DOMContentLoaded", a)
        },
        wc = a => {
            var b = window;
            "complete" === b.document.readyState ? uc(a) : b.addEventListener("load", a)
        };

    function xc(a = document) {
        return a.createElement("img")
    };

    function yc(a, b, c = null, d = !1) {
        zc(a, b, c, d)
    }

    function zc(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = xc(a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const h = Array.prototype.indexOf.call(g, e, void 0);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, bc());
                e.removeEventListener && e.removeEventListener("error", f, bc())
            };
            V(e, "load", f);
            V(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }

    function Ac(a, b) {
        var c;
        if (c = a.navigator) c = a.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
        c && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : yc(a, b, void 0, !1)
    };
    let Bc = 0;

    function Cc(a) {
        return (a = Dc(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function Dc(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function Ec(a) {
        if (!(.01 < Math.random())) {
            const b = Dc(a, document.currentScript);
            a = `https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Cc(a)}&sample=${.01}`;
            Ac(window, a)
        }
    };
    var W = document,
        X = window;

    function Fc(a) {
        return ha(a)
    };
    const Gc = [oa, pa, ra, qa, na, ta, ua, sa, va];

    function Hc(a, b) {
        if (a instanceof t) return a;
        const c = ya(a, Gc);
        c === ka && b(a);
        return new t(Fc(c), r)
    }
    var Ic = a => {
        var b = `${"http:"===X.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return c => {
            c = ic({
                id: "unsafeurl",
                ctx: a,
                url: c
            });
            c = gc(b, c);
            navigator.sendBeacon && navigator.sendBeacon(c, "")
        }
    };
    var Jc = a => {
        var b = W;
        try {
            return b.querySelectorAll("*[" + a + "]")
        } catch (c) {
            return []
        }
    };
    class Kc {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Lc = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Mc = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        Nc = class {
            constructor(a, b) {
                this.url = a;
                this.P = !!b;
                this.depth = null
            }
        };

    function Oc(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Pc(a, b, c, d, e) {
        const f = [];
        qc(a, function(g, h) {
            (g = Qc(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Qc(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Qc(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Pc(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Rc(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Sc(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        let d = Rc(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        c = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.h[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                let k = Pc(h[l], a.i, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        b += k;
                        e = a.i;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }
    class Tc {
        constructor() {
            this.i = "&";
            this.h = {};
            this.l = 0;
            this.g = []
        }
    };

    function Uc() {
        var a = Vc,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }

    function Wc(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Tc ? f = c : (f = new Tc, qc(c, (h, l) => {
                var k = f;
                const p = k.l++;
                h = Oc(l, h);
                k.g.push(p);
                k.h[p] = h
            }));
            const g = Sc(f, a.h, "/pagead/gen_204?id=" + b + "&");
            g && yc(n, g)
        } catch (f) {}
    }
    class Xc {
        constructor() {
            this.h = "http:" === X.location.protocol ? "http:" : "https:";
            this.g = Math.random()
        }
    };
    let Yc = null;

    function Zc() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function $c() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    class ad {
        constructor(a, b) {
            var c = $c() || Zc();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const Y = n.performance,
        bd = !!(Y && Y.mark && Y.measure && Y.clearMarks),
        cd = za(() => {
            var a;
            if (a = bd) {
                var b;
                if (null === Yc) {
                    Yc = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && (Yc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Yc;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function dd(a) {
        a && Y && cd() && (Y.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Y.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class ed {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = cd() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new ad(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Y && cd() && Y.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = ($c() || Zc()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Y && cd() && Y.mark(b);
                !this.g ||
                    2048 < this.h.length || this.h.push(a)
            }
        }
    };

    function fd(a) {
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

    function gd(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                dd(e), c = a.s(b, new Kc(f, {
                    message: fd(f)
                }), void 0, void 0)
            } catch (g) {
                a.o(217, g)
            }
            if (c) {
                let g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, f)
            } else throw f;
        }
        return d
    }

    function hd(a, b) {
        var c = id;
        return (...d) => gd(c, a, () => b.apply(void 0, d))
    }
    class jd {
        constructor(a = null) {
            this.i = Vc;
            this.h = null;
            this.s = this.o;
            this.g = a;
            this.l = !1
        }
        pinger() {
            return this.i
        }
        o(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const K = new Tc;
                var g = K;
                g.g.push(1);
                g.h[1] = Oc("context", a);
                b.error && b.meta && b.id || (b = new Kc(b, {
                    message: fd(b)
                }));
                if (b.msg) {
                    g = K;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = Oc("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.h) try {
                    this.h(b)
                } catch (I) {}
                if (d) try {
                    d(b)
                } catch (I) {}
                d = K;
                l = [l];
                d.g.push(3);
                d.h[3] = l;
                d = n;
                l = [];
                let Da;
                b = null;
                do {
                    var k = d;
                    try {
                        var p;
                        if (p = !!k && null != k.location.href) b: {
                            try {
                                Ca(k.foo);
                                p = !0;
                                break b
                            } catch (I) {}
                            p = !1
                        }
                        var m = p
                    } catch (I) {
                        m = !1
                    }
                    m ? (Da = k.location.href, b = k.document && k.document.referrer || null) : (Da = b, b = null);
                    l.push(new Nc(Da || ""));
                    try {
                        d = k.parent
                    } catch (I) {
                        d = null
                    }
                } while (d && k != d);
                for (let I = 0, lc = l.length - 1; I <= lc; ++I) l[I].depth = lc - I;
                k = n;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var D = l[m];
                        D.url || (D.url = k.location.ancestorOrigins[m - 1] || "", D.P = !0)
                    }
                var L = l;
                let $a = new Nc(n.location.href, !1);
                k = null;
                const ab = L.length -
                    1;
                for (D = ab; 0 <= D; --D) {
                    var M = L[D];
                    !k && Lc.test(M.url) && (k = M);
                    if (M.url && !M.P) {
                        $a = M;
                        break
                    }
                }
                M = null;
                const Bd = L.length && L[ab].url;
                0 != $a.depth && Bd && (M = L[ab]);
                f = new Mc($a, M);
                if (f.h) {
                    L = K;
                    var O = f.h.url || "";
                    L.g.push(4);
                    L.h[4] = Oc("top", O)
                }
                var bb = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var cb = f.g.url.match(dc),
                        ea = cb[1],
                        mc = cb[3],
                        nc = cb[4];
                    O = "";
                    ea && (O += ea + ":");
                    mc && (O += "//", O += mc, nc && (O += ":" + nc));
                    var oc = O
                } else oc = "";
                ea = K;
                bb = [bb, {
                    url: oc
                }];
                ea.g.push(5);
                ea.h[5] = bb;
                Wc(this.i, e, K, this.l, c)
            } catch (K) {
                try {
                    Wc(this.i, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: fd(K),
                        url: f && f.g.url
                    }, this.l, c)
                } catch (Da) {}
            }
            return !0
        }
    };
    class kd {};
    let Vc, id;
    const Z = new ed;
    var ld = () => {
        window.google_measure_js_timing || (Z.g = !1, Z.h != Z.i.google_js_reporting_queue && (cd() && Array.prototype.forEach.call(Z.h, dd, void 0), Z.h.length = 0))
    };
    (a => {
        Vc = null != a ? a : new Xc;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Uc();
        id = new jd(Z);
        id.h = b => {
            const c = Bc;
            0 !== c && (b.jc = String(c), b.shv = Cc(c))
        };
        id.l = !0;
        "complete" == window.document.readyState ? ld() : Z.g && V(window, "load", () => {
            ld()
        })
    })();
    var md = (a, b) => hd(a, b),
        nd = a => {
            var b = kd,
                c = "O";
            b.O && b.hasOwnProperty(c) || (c = new b, b.O = c);
            b = [];
            !a.eid && b.length && (a.eid = b.toString());
            Wc(Vc, "gdn-asoch", a, !0)
        };

    function od(a = window) {
        return a
    };
    var pd = (a, b) => {
            b = R(a, 2) || b;
            if (!b) return "";
            if (S(a, 13)) return b;
            const c = /[?&]adurl=([^&]+)/.exec(b);
            if (!c) return b;
            const d = [b.slice(0, c.index + 1)];
            Eb(a, 4).forEach((e, f) => {
                d.push(encodeURIComponent(f) + "=" + encodeURIComponent(e) + "&")
            });
            d.push(b.slice(c.index + 1));
            return d.join("")
        },
        qd = (a, b = []) => {
            b = 0 < b.length ? b : Jc("data-asoch-targets");
            a = Eb(a, 1, Sb);
            const c = [];
            for (let h = 0; h < b.length; ++h) {
                var d = b[h].getAttribute("data-asoch-targets"),
                    e = d.split(","),
                    f = !0;
                for (let l of e)
                    if (!a.has(l)) {
                        f = !1;
                        break
                    }
                if (f) {
                    f = a.get(e[0]);
                    for (d = 1; d < e.length; ++d) {
                        var g = a.get(e[d]);
                        f = Ab(f).toJSON();
                        g = g.toJSON();
                        const l = Math.max(f.length, g.length);
                        for (let k = 0; k < l; ++k) null == f[k] && (f[k] = g[k]);
                        f = new Sb(f)
                    }
                    e = Eb(f, 4);
                    null != H(f, 5, !1) && e.set("nb", N(f, 5, 0).toString());
                    c.push({
                        element: b[h],
                        data: f
                    })
                } else nd({
                    type: 1,
                    data: d
                })
            }
            return c
        },
        sd = (a, b, c, d) => {
            c = pd(b, c);
            if (0 < c.length) {
                if ("1" == kc(c, "ase")) {
                    let f;
                    if (609 === d) f = 4;
                    else {
                        var e;
                        f = (null == (e = W.featurePolicy) ? 0 : e.allowedFeatures().includes("attribution-reporting")) ? 6 : 5
                    }
                    e = rd(c, "asr", "1");
                    a.setAttribute("attributionsrc",
                        e);
                    c = rd(c, "nis", f.toString())
                }
                Aa(a, Hc(c, Ic(d)));
                a.target || (a.target = null != H(b, 11) ? R(b, 11) : "_top")
            }
        },
        td = a => {
            for (const b of a)
                if (a = b.data, "A" == b.element.tagName && !S(a, 1)) {
                    const c = b.element;
                    sd(c, a, c.href, 609)
                }
        },
        ud = a => {
            const b = n.oneAfmaInstance;
            if (b)
                for (const c of a)
                    if ((a = c.data) && void 0 !== P(a, Ub, 8)) {
                        const d = R(Q(a, Ub, 8), 4);
                        if (d) {
                            b.fetchAppStoreOverlay(d, void 0, R(Q(a, Ub, 8), 6));
                            break
                        }
                    }
        },
        vd = (a, b = 500) => {
            const c = [],
                d = [];
            for (var e of a)(a = e.data) && void 0 !== P(a, U, 12) && (d.push(Q(a, U, 12)), c.push(Q(a, U, 12).D()));
            e = (f, g) => {
                if (g)
                    for (const h of d) g[h.D()] && h.R(!0)
            };
            a = n.oneAfmaInstance;
            for (const f of c) {
                let g;
                null == (g = a) || g.canOpenAndroidApp(f, e, () => {}, b)
            }
        },
        xd = (a, b, c, d, e) => {
            if (!b || void 0 === P(b, Ub, 8)) return !1;
            const f = Q(b, Ub, 8);
            let g = R(f, 2);
            Eb(b, 10).forEach((l, k) => {
                var p = g;
                k = encodeURIComponent(k);
                const m = encodeURIComponent(l);
                l = new RegExp("[?&]" + k + "=([^&]+)");
                const D = l.exec(p);
                console.log(D);
                k = k + "=" + m;
                g = D ? p.replace(l, D[0].charAt(0) + k) : p.replace("?", "?" + k + "&")
            });
            wd(b) && S(b, 15) && !/[?&]label=/.test(c) && (c = rd(c, "label",
                "deep_link_fallback"));
            b = l => d.openStoreOverlay(l, void 0, R(f, 6));
            const h = l => Ac(X, l);
            return d.redirectForStoreU2({
                clickUrl: c,
                trackingUrl: R(f, 3),
                finalUrl: g,
                pingFunc: e ? h : d.click,
                openFunc: (null == a ? 0 : S(a, 1)) ? b : d.openIntentOrNativeApp
            })
        },
        zd = (a, b, c, d, e, f, g, h = !1) => {
            e = S(e, 15);
            const l = !/[?&]dsh=1(&|$)/.test(f) && /[?&]ae=1(&|$)/.test(f);
            !a || !b || e && l || (f = h ? yd(f) : yd(f, g.click));
            f && f.startsWith("intent:") ? g.openIntentOrNativeApp(f) : c ? d ? g.openBrowser(f) : g.openChromeCustomTab(f) : g.openSystemBrowser(f, {
                useFirstPackage: !0,
                useRunningProcess: !0
            })
        },
        yd = (a, b = null) => {
            if (null !== b) {
                const c = new fa({
                    url: a
                });
                if (c.h && c.i || c.o) return b(ca(c)), da(c, 1)
            } else return {
                S: b
            } = {}, b = new fa({
                url: a,
                S: b
            }), b.h && b.i || b.o ? navigator.sendBeacon ? navigator.sendBeacon(ca(b), "") ? da(b, 1) : da(b, 2) : da(b, 0) : a;
            return a
        },
        Cd = a => {
            var b = cc();
            b = null != b ? "=" + encodeURIComponent(String(b)) : "";
            b = gc("https://pagead2.googlesyndication.com/pagead/gen_204", "zx" + b);
            Ad(pc(b, a), !1, !0)
        },
        Ad = (a, b = !0, c = !1) => {
            let d = !1;
            c && X.navigator && X.navigator.sendBeacon && (d = X.navigator.sendBeacon(a));
            d || (b && X.fetch ? X.fetch(a, {
                method: "GET",
                keepalive: !0,
                mode: "no-cors"
            }).then(e => {
                e.ok || yc(X, a)
            }) : yc(X, a))
        },
        rd = (a, b, c) => {
            b = encodeURIComponent(String(b));
            c = encodeURIComponent(String(c));
            return a.replace("?", "?" + b + "=" + c + "&")
        },
        wd = a => {
            for (const b of Gb(a, Tb, 7))
                if (3 === N(b, 1, 0) && R(b, 2)) return !0;
            return !1
        };

    function Dd(a, b) {
        return J(a, 2, b)
    }

    function Ed(a, b) {
        return J(a, 3, b)
    }

    function Fd(a, b) {
        return J(a, 4, b)
    }

    function Gd(a, b) {
        return J(a, 5, b)
    }

    function Hd(a, b) {
        return J(a, 9, b)
    }

    function Id(a, b) {
        return Hb(a, 10, b)
    }

    function Jd(a, b) {
        return J(a, 11, b)
    }

    function Kd(a, b) {
        return J(a, 1, b)
    }

    function Ld(a, b) {
        return J(a, 7, b)
    }
    var Nd = class extends T {
            constructor() {
                super(void 0, -1, Md)
            }
        },
        Od = class extends T {
            constructor() {
                super()
            }
        },
        Md = [10, 6];
    const Pd = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Qd(a) {
        let b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Rd(a) {
        let b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function Sd() {
        var a = window;
        if (!Rd(a)) return null;
        const b = Qd(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Pd).then(c => {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function Td(a) {
        let b;
        return Jd(Id(Gd(Dd(Kd(Fd(Ld(Hd(Ed(new Nd, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(c => {
            var d = new Od;
            d = J(d, 1, c.brand);
            return J(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Ud() {
        let a, b;
        return null != (b = null == (a = Sd()) ? void 0 : a.then(c => Td(c))) ? b : null
    };

    function Vd(a) {
        for (const b of a)
            if ("A" == b.element.tagName) {
                a = b.element;
                const c = b.data;
                null == H(c, 2) && J(c, 2, a.href)
            }
    }

    function Wd(a, b) {
        return la(a, c => c.element === b)
    }

    function Xd(a) {
        vc(md(556, () => {
            new Yd(a || {})
        }))
    }

    function Zd(a, b, c, d) {
        if (!S(d, 13)) {
            var e = c.href;
            var f = /[?&]adurl=([^&]+)/.exec(e);
            e = f ? [e.slice(0, f.index), e.slice(f.index)] : [e, ""];
            for (Aa(c, Hc(e[0], Ic(557))); !c.id;)
                if (f = "asoch-id-" + cc(), !W.getElementById(f)) {
                    c.id = f;
                    break
                }
            f = c.id;
            "function" === typeof window.xy && window.xy(b, c, W.body);
            "function" === typeof window.mb && window.mb(c);
            "function" === typeof window.bgz && window.bgz(f);
            "function" === typeof window.ja && window.ja(f, d ? N(d, 5, 0) : 0);
            a.l && "function" === typeof window.ss && (a.M ? window.ss(f, 1, a.l) : window.ss(a.l,
                1));
            0 < e.length && (a = 0 < a.F.length && (null == d || null == H(d, 19)) ? c.href + "&uach=" + encodeURIComponent(a.F) + e[1] : c.href + e[1], Aa(c, Hc(a, Ic(557))))
        }
    }
    async function $d(a, b, c, d) {
        let e = "";
        var f = n.oneAfmaInstance;
        if (f && (b.preventDefault(), e = await f.appendClickSignalsAsync(c.href) || "", a.J && (f = await f.getNativeClickMeta()))) {
            if (f.customClickGestureEligible) return;
            e = rd(e, "nas", f.encodedNas)
        }
        ae(a, b, c, d, e)
    }

    function ae(a, b, c, d, e) {
        const f = S(a.h, 2),
            g = f && 300 < Date.now() - a.L,
            h = n.oneAfmaInstance;
        h ? (rc(b), (() => {
            let l = h.logScionEventAndAddParam(e);
            if (!a.o && d && void 0 !== P(d, U, 12)) {
                var k = Q(d, U, 12).D();
                if (0 < Gb(d, Tb, 7).length)
                    for (const p of Gb(d, Tb, 7));
                S(Q(d, U, 12), 2) ? (h.click(l), h.openAndroidApp(k), k = !0) : k = !1
            } else k = !1;
            k || xd(a.s, d, l, h, a.W) || zd(f, g, a.Y, a.o, d, l, h, a.X)
        })()) : (S(a.h, 21) && c.href && (a.i = kc(c.href, "ai") || "", a.i && Cd({
                id: "_blank" === c.target ? "opennewtab" : "openexistingtab",
                isios: a.o,
                clickstring: a.i
            })), b = window,
            a.V && b.pawsig && "function" === typeof b.pawsig.clk ? b.pawsig.clk(c) : g && (b = a.Z ? yd(c.href, l => {
                X.fetch(l, {
                    method: "GET",
                    keepalive: !0,
                    mode: "no-cors"
                })
            }) : yd(c.href), b !== c.href && Aa(c, Hc(b, Ic(599)))));
        g && (a.L = Date.now());
        Ec(a.K)
    }
    var Yd = class {
        constructor(a) {
            this.o = Ga || Ea || Ha || Fa;
            var b = Jc("data-asoch-meta");
            if (1 !== b.length) nd({
                type: 2,
                data: b.length
            });
            else {
                this.K = 70;
                this.h = new Wb(JSON.parse(b[0].getAttribute("data-asoch-meta")) || []);
                this.T = a["extra-meta"] ? new Wb(JSON.parse(a["extra-meta"])) : null;
                this.J = "true" === a["is-fsn"];
                this.s = a["ios-store-overlay-config"] ? new Xb(JSON.parse(a["ios-store-overlay-config"])) : null;
                this.Y = "true" === a["use-cct-over-browser"];
                this.W = "true" === a["send-ac-click-ping-by-js"];
                this.N = "true" === a["correct-redirect-url-for-och-15-click"];
                this.X = "true" === a["send-click-ping-by-js-in-och"];
                this.V = "true" === a["enable-paw"];
                this.Z = "true" === a["async-using-fetch"];
                this.F = this.i = "";
                b = Ud();
                null != b && b.then(d => {
                    d = Nb(d);
                    for (var e = [], f = 0, g = 0; g < d.length; g++) {
                        var h = d.charCodeAt(g);
                        255 < h && (e[f++] = h & 255, h >>= 8);
                        e[f++] = h
                    }
                    this.F = Ka(e, 3)
                });
                this.g = qd(this.h);
                this.aa = Number(a["deeplink-and-android-app-validation-timeout"]) || 500;
                this.L = -Infinity;
                this.l = R(this.h, 5) || "";
                this.M = S(this.h, 11);
                this.T && (this.M = S(this.T, 11));
                this.I = this.H = null;
                S(this.h, 3) || (td(this.g),
                    J(this.h, 3, !0));
                Vd(this.g);
                a = n.oneAfmaInstance;
                !this.o && a && vd(this.g, this.aa);
                var c;
                if (a && (null == (c = this.s) ? 0 : S(c, 2))) switch (c = () => {
                    const d = Ib(H(this.s, 4), 0);
                    0 < d ? n.setTimeout(() => {
                        ud(this.g)
                    }, d) : ud(this.g)
                }, N(this.s, 3, 0)) {
                    case 1:
                        a.runOnOnShowEvent(c);
                        break;
                    case 2:
                        wc(c);
                        break;
                    default:
                        ud(this.g)
                }
                V(W, "click", md(557, d => {
                    a: if (!d.defaultPrevented || this.H === d) {
                        for (var e, f, g = d.target;
                            (!e || !f) && g;) {
                            f || "A" != g.tagName || (f = g);
                            var h = g.hasAttribute("data-asoch-targets"),
                                l = g.hasAttribute("data-asoch-fixed-value");
                            if (!e)
                                if (l) e = new Sb(JSON.parse(g.getAttribute("data-asoch-fixed-value")) || []);
                                else if ("A" == g.tagName || h)
                                if (h = h && "true" === g.getAttribute("data-asoch-is-dynamic") ? qd(this.h, [g]) : this.g, h = Wd(h, g)) e = h.data;
                            g = g.parentElement
                        }
                        if (g = e && !S(e, 1)) {
                            if (d.defaultPrevented) {
                                var k = f;
                                if (this.H === d && this.I) {
                                    var p = new Pb(this.I);
                                    f = R(e, 9);
                                    var m = "";
                                    switch (N(p, 4, 1)) {
                                        case 2:
                                            if (Ib(H(p, 2), 0)) m = "blocked_fast_click";
                                            else if (R(p, 1) || R(p, 7)) m = "blocked_border_click";
                                            break;
                                        case 3:
                                            m = W, m = m.getElementById ? m.getElementById("common_15click_anchor") :
                                                null, "function" === typeof window.copfcChm && m && (e = Ab(e), J(e, 5, 12), Eb(e, 4).set("nb", (12).toString()), (g = Wd(this.g, m)) ? g.data = e : this.g.push({
                                                    element: m,
                                                    data: e
                                                }), !this.N && k && (Zd(this, d, k, e), J(e, 2, k.href)), window.copfcChm(d, pd(e, m.href), null, void 0 !== P(p, Qb, 10) ? Nb(Q(p, Qb, 10)) : null), this.N && Zd(this, d, m, e)), m = "onepointfiveclick_first_click"
                                    }
                                    f && m && Ad(f + "&label=" + m, !1);
                                    Ec(this.K)
                                }
                                break a
                            }
                            h = e;
                            for (m of Cb(h, 6)) Ad(m)
                        }
                        if (f && g) {
                            e = g ? e : null;
                            (m = Wd(this.g, f)) ? m = m.data: (m = new Sb, J(m, 2, f.href), J(m, 11, f.target || "_top"),
                                this.g.push({
                                    element: f,
                                    data: m
                                }));
                            sd(f, e || m, R(m, 2), 557);
                            Zd(this, d, f, e);
                            for (p of Cb(this.h, 17)) m = p, g = W.body, h = {}, "function" === typeof window.CustomEvent ? l = new CustomEvent(m, h) : (l = document.createEvent("CustomEvent"), l.initCustomEvent(m, !!h.bubbles, !!h.cancelable, h.detail)), g.dispatchEvent(l);
                            if (null == e ? 0 : null != H(e, 19)) p = R(e, 19), m = null != H(e, 20, !1) ? Ib(H(e, 20), 0) : null, g = this.F, h = od(n), l = new Yb, J(l, 1, p), null !== m && J(l, 2, m), null !== g && J(l, 3, g), null == h || null == (k = h.fence) || k.reportEvent({
                                eventType: "click",
                                eventData: JSON.stringify(l),
                                destination: ["buyer"]
                            });
                            S(this.h, 16) || this.J ? $d(this, d, f, e) : (k = "", (p = n.oneAfmaInstance) && (k = p.appendClickSignals(f.href)), ae(this, d, f, e, k))
                        }
                    }
                }), Zb);
                !a && S(this.h, 21) && V(X, "pagehide", md(1037, () => {
                    this.i && Cd({
                        id: "pagehide",
                        isios: this.o,
                        clickstring: this.i
                    })
                }));
                this.l && "function" === typeof window.ss && V(W.body, "mouseover", md(626, () => {
                    window.ss(this.l, 0)
                }), $b);
                c = window;
                c.googqscp && "function" === typeof c.googqscp.registerCallback && c.googqscp.registerCallback((d, e) => {
                    this.H = d;
                    this.I = e
                })
            }
        }
    };
    var be = md(555, a => Xd(a));
    Bc = 70;
    const ce = Dc(70, document.currentScript);
    if (null == ce) throw Error("JSC not found 70");
    const de = {},
        ee = ce.attributes;
    for (let a = ee.length - 1; 0 <= a; a--) {
        const b = ee[a].name;
        0 === b.indexOf("data-jcp-") && (de[b.substring(9)] = ee[a].value)
    }
    be(de);
}).call(this);