(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this);

    function r(a, b) {
        if (b) a: {
            var c = ea;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ca(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    r("Symbol", function(a) {
        function b(g) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (g || "") + "_" + e++, g)
        }

        function c(g, k) {
            this.g = g;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: k
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    r("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return fa(ba(this))
                }
            })
        }
        return a
    });

    function fa(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function t(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function ha(a) {
        if (!(a instanceof Array)) {
            a = t(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    function v(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var ia = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) v(d, e) && (a[e] = d[e])
        }
        return a
    };
    r("Object.assign", function(a) {
        return a || ia
    });
    var ja = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        la;
    if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var na = {
                    a: !0
                },
                oa = {};
            try {
                oa.__proto__ = na;
                ma = oa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var pa = la;

    function qa(a, b) {
        a.prototype = ja(b.prototype);
        a.prototype.constructor = a;
        if (pa) pa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.S = b.prototype
    }
    r("WeakMap", function(a) {
        function b(h) {
            this.g = (f += Math.random() + 1).toString();
            if (h) {
                h = t(h);
                for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }

        function c() {}

        function d(h) {
            var l = typeof h;
            return "object" === l && null !== h || "function" === l
        }

        function e(h) {
            if (!v(h, k)) {
                var l = new c;
                ca(h, k, {
                    value: l
                })
            }
        }

        function g(h) {
            var l = Object[h];
            l && (Object[h] = function(m) {
                if (m instanceof c) return m;
                Object.isExtensible(m) && e(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var h = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [h, 2],
                            [l, 3]
                        ]);
                    if (2 != m.get(h) || 3 != m.get(l)) return !1;
                    m.delete(h);
                    m.set(l, 4);
                    return !m.has(h) && 4 == m.get(l)
                } catch (u) {
                    return !1
                }
            }()) return a;
        var k = "$jscomp_hidden_" + Math.random();
        g("freeze");
        g("preventExtensions");
        g("seal");
        var f = 0;
        b.prototype.set = function(h, l) {
            if (!d(h)) throw Error("Invalid WeakMap key");
            e(h);
            if (!v(h, k)) throw Error("WeakMap key fail: " + h);
            h[k][this.g] = l;
            return this
        };
        b.prototype.get = function(h) {
            return d(h) && v(h, k) ? h[k][this.g] : void 0
        };
        b.prototype.has = function(h) {
            return d(h) && v(h,
                k) && v(h[k], this.g)
        };
        b.prototype.delete = function(h) {
            return d(h) && v(h, k) && v(h[k], this.g) ? delete h[k][this.g] : !1
        };
        return b
    });
    r("Map", function(a) {
        function b() {
            var f = {};
            return f.u = f.next = f.head = f
        }

        function c(f, h) {
            var l = f.g;
            return fa(function() {
                if (l) {
                    for (; l.head != f.g;) l = l.u;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: h(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(f, h) {
            var l = h && typeof h;
            "object" == l || "function" == l ? g.has(h) ? l = g.get(h) : (l = "" + ++k, g.set(h, l)) : l = "p_" + h;
            var m = f.i[l];
            if (m && v(f.i, l))
                for (f = 0; f < m.length; f++) {
                    var u = m[f];
                    if (h !== h && u.key !== u.key || h === u.key) return {
                        id: l,
                        list: m,
                        index: f,
                        l: u
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                l: void 0
            }
        }

        function e(f) {
            this.i = {};
            this.g = b();
            this.size = 0;
            if (f) {
                f = t(f);
                for (var h; !(h = f.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var f = Object.seal({
                            x: 4
                        }),
                        h = new a(t([
                            [f, "s"]
                        ]));
                    if ("s" != h.get(f) || 1 != h.size || h.get({
                            x: 4
                        }) || h.set({
                            x: 4
                        }, "t") != h || 2 != h.size) return !1;
                    var l = h.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != f || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (u) {
                    return !1
                }
            }()) return a;
        var g = new WeakMap;
        e.prototype.set = function(f, h) {
            f = 0 === f ? 0 : f;
            var l = d(this, f);
            l.list || (l.list = this.i[l.id] = []);
            l.l ? l.l.value = h : (l.l = {
                next: this.g,
                u: this.g.u,
                head: this.g,
                key: f,
                value: h
            }, l.list.push(l.l), this.g.u.next = l.l, this.g.u = l.l, this.size++);
            return this
        };
        e.prototype.delete = function(f) {
            f = d(this, f);
            return f.l && f.list ? (f.list.splice(f.index, 1), f.list.length || delete this.i[f.id], f.l.u.next = f.l.next, f.l.next.u = f.l.u, f.l.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.g = this.g.u = b();
            this.size = 0
        };
        e.prototype.has = function(f) {
            return !!d(this, f).l
        };
        e.prototype.get = function(f) {
            return (f = d(this, f).l) && f.value
        };
        e.prototype.entries = function() {
            return c(this, function(f) {
                return [f.key, f.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(f) {
                return f.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(f) {
                return f.value
            })
        };
        e.prototype.forEach = function(f, h) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                f.call(h, m[1], m[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var k = 0;
        return e
    });

    function ra(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var g = c++;
                        return {
                            value: b(g, a[g]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ra(this, function(b) {
                return b
            })
        }
    });
    r("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    var w = this || self;

    function sa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ta(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function x(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? x = sa : x = ta;
        return x.apply(null, arguments)
    }

    function ua(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.S = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.X = function(d, e, g) {
            for (var k = Array(arguments.length - 2), f = 2; f < arguments.length; f++) k[f - 2] = arguments[f];
            return b.prototype[e].apply(d, k)
        }
    };
    var va = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        wa = Array.prototype.forEach ? function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        xa = Array.prototype.every ? function(a, b) {
            return Array.prototype.every.call(a,
                b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && !b.call(void 0, d[e], e, a)) return !1;
            return !0
        };
    var ya = {},
        za = null;

    function Aa(a) {
        var b;
        void 0 === b && (b = 0);
        if (!za) {
            za = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var g = c.concat(d[e].split(""));
                ya[e] = g;
                for (var k = 0; k < g.length; k++) {
                    var f = g[k];
                    void 0 === za[f] && (za[f] = k)
                }
            }
        }
        b = ya[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = g = 0; g < a.length - 2; g += 3) {
            var h = a[g],
                l = a[g + 1];
            f = a[g + 2];
            k = b[h >> 2];
            h = b[(h & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | f >> 6];
            f = b[f & 63];
            c[e++] = k + h + l + f
        }
        k = 0;
        f = d;
        switch (a.length - g) {
            case 2:
                k =
                    a[g + 1], f = b[(k & 15) << 2] || d;
            case 1:
                a = a[g], c[e] = b[a >> 2] + b[(a & 3) << 4 | k >> 4] + f + d
        }
        return c.join("")
    };
    var Ba = "undefined" !== typeof Uint8Array,
        Ca = {};
    var Da;

    function Ea(a) {
        if (Ca !== Ca) throw Error("illegal external caller");
        this.U = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    };
    var z = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

    function B(a, b) {
        Object.isFrozen(a) || (z ? a[z] |= b : void 0 !== a.s ? a.s |= b : Object.defineProperties(a, {
            s: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function Fa(a, b) {
        Object.isExtensible(a) && (z ? a[z] && (a[z] &= ~b) : void 0 !== a.s && (a.s &= ~b))
    }

    function C(a) {
        var b;
        z ? b = a[z] : b = a.s;
        return null == b ? 0 : b
    }

    function Ga(a, b) {
        z ? a[z] = b : void 0 !== a.s ? a.s = b : Object.defineProperties(a, {
            s: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function D(a) {
        B(a, 1);
        return a
    }

    function Ha(a) {
        B(a, 17);
        return a
    }

    function E(a) {
        return a ? !!(C(a) & 2) : !1
    }

    function Ia(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        Fa(a, 16)
    };
    var Ja = {};

    function Ka(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var La = Object,
        Ma = La.freeze,
        Na = [];
    B(Na, 3);
    var Oa = Ma.call(La, Na);

    function Pa(a) {
        if (E(a.h)) throw Error("Cannot mutate an immutable Message");
    };

    function Qa(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (Ba && null != a && a instanceof Uint8Array) return Aa(a);
                    if (a instanceof Ea) {
                        var b = a.U;
                        return null == b ? "" : "string" === typeof b ? b : a.U = Aa(b)
                    }
                }
        }
        return a
    };

    function Ra(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Sa(a, b, c, void 0 !== d);
            else if (Ka(a)) {
                var e = {},
                    g;
                for (g in a) e[g] = Ra(a[g], b, c, d);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Sa(a, b, c, d) {
        d = d ? !!(C(a) & 16) : void 0;
        var e = Array.prototype.slice.call(a);
        c(a, e);
        for (a = 0; a < e.length; a++) e[a] = Ra(e[a], b, c, d);
        return e
    }

    function Ta(a) {
        return a.R === Ja ? a.toJSON() : Qa(a)
    }

    function Ua() {};

    function F(a, b, c) {
        return -1 === b ? null : b >= a.C ? a.j ? a.j[b] : void 0 : (void 0 === c ? 0 : c) && a.j && (c = a.j[b], null != c) ? c : a.h[b + a.v]
    }

    function G(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        (void 0 === e ? 0 : e) || Pa(a);
        a.O && (a.O = void 0);
        b >= a.C || d ? (a.j || (a.j = a.h[a.C + a.v] = {}))[b] = c : (void 0 !== a.j && a.C >= a.h.length ? (d = a.h.length - 1, e = b + a.v, e >= d ? (a.h[d] = void 0, a.h[e] = c, a.h.push(a.j)) : a.h[e] = c) : a.h[b + a.v] = c, void 0 !== a.j && b in a.j && delete a.j[b])
    }

    function Va(a, b) {
        var c = F(a, 1, b);
        Array.isArray(c) || (c = Oa);
        var d = C(c);
        d & 1 || D(c);
        E(a.h) ? d & 2 || B(c, 2) : c === Oa && (c = D(Array.prototype.slice.call(c)), G(a, 1, c, b));
        return c
    }

    function H(a, b) {
        a = F(a, b);
        return null == a ? 1 : a
    }

    function Wa(a) {
        var b = Xa;
        var c = void 0 === c ? !1 : c;
        var d = F(a, 1, c);
        var e = !1;
        var g = null == d || "object" !== typeof d || (e = Array.isArray(d)) || d.R !== Ja ? e ? new b(d) : void 0 : d;
        g !== d && null != g && (G(a, 1, g, c, !0), B(g.h, C(a.h) & -33));
        b = g;
        if (null == b) return b;
        E(b.h) && !E(a.h) && (b = Ya(b), G(a, 1, b, c));
        return b
    }

    function Za(a) {
        var b = $a;
        var c = void 0 === c ? !1 : c;
        var d = E(a.h),
            e = d;
        e = void 0 === e ? !0 : e;
        a.g || (a.g = {});
        var g = a.g[1];
        var k = Va(a, c),
            f = E(a.h),
            h = !!(C(a.h) & 16),
            l = E(k),
            m = f || l;
        !e && l && (k = D(Array.prototype.slice.call(k)), G(a, 1, k, c));
        if (!g) {
            g = [];
            l = m;
            for (var u = 0; u < k.length; u++) {
                var q = k[u];
                l = l || E(q);
                var n = b,
                    p = h,
                    A = !1;
                A = void 0 === A ? !1 : A;
                p = void 0 === p ? !1 : p;
                Array.isArray(q) ? (p && B(q, 16), q = new n(q)) : q = A ? new n : void 0;
                void 0 !== q && (g.push(q), m && B(q.h, 2))
            }
            a.g[1] = g;
            Object.isFrozen(k) || (b = C(k) | 33, Ga(k, l ? b & -9 : b | 8))
        }
        e = f || e;
        k = E(g);
        e &&
            !k && (Object.isFrozen(g) && (a.g[1] = g = g.slice()), B(g, 2), Object.freeze(g));
        !e && k && (a.g[1] = g = g.slice());
        a = Va(a, c);
        if (d = !d && a) {
            if (!a) throw Error("cannot check mutability state of non-array");
            d = !(C(a) & 8)
        }
        if (d) {
            for (d = 0; d < g.length; d++)(c = g[d]) && E(c.h) && (g[d] = Ya(g[d]), a[d] = g[d].h);
            B(a, 8)
        }
        return g
    }

    function I(a) {
        a = F(a, 1);
        return null == a ? "" : a
    }

    function J(a, b) {
        a = F(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    }

    function L(a, b) {
        a = F(a, b);
        return null == a ? 0 : a
    };

    function ab(a, b, c, d, e, g) {
        if (a = a.g && a.g[c]) {
            d = g.M ? D(a.slice()) : a;
            Pa(b);
            if (null != d) {
                e = D([]);
                g = !1;
                for (a = 0; a < d.length; a++) e[a] = d[a].h, g = g || E(e[a]);
                b.g || (b.g = {});
                b.g[c] = d;
                d = e;
                g ? Fa(d, 8) : B(d, 8)
            } else b.g && (b.g[c] = void 0), e = Oa;
            G(b, c, e)
        } else null != d ? Ba && d instanceof Uint8Array ? e = d.length ? new Ea(new Uint8Array(d)) : Da || (Da = new Ea(null)) : (Array.isArray(d) && (e ? B(d, 2) : d && C(d) & 1 && g.M ? (e = Array.prototype.slice.call(d), Ga(e, (C(d) | 0) & -51), d = e) : Ia(d)), e = d) : e = void 0, G(b, c, e)
    };

    function M(a, b, c) {
        null == a && (a = bb);
        bb = null;
        var d = this.constructor.g || 0,
            e = 0 < d,
            g = this.constructor.i,
            k = !1;
        if (null == a) {
            var f = g ? [g] : [];
            B(f, 48);
            a = f;
            f = !0
        } else if (f = !!(C(a) & 16)) k = C(a), Ga(a, k | 32), k = !!(k & 32);
        e && 0 < a.length && Ka(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.v = (g ? 0 : -1) - d;
        this.g = void 0;
        this.h = a;
        a: {
            g = this.h.length;d = g - 1;
            if (g && (g = this.h[d], Ka(g))) {
                this.j = g;
                b = Object.keys(g);
                0 < b.length && xa(b, isNaN) ? this.C = Number.MAX_VALUE : this.C = d - this.v;
                break a
            }
            void 0 !== b && -1 < b ? (this.C = Math.max(b, d + 1 - this.v), this.j =
                void 0) : this.C = Number.MAX_VALUE
        }
        if (!e && this.j && "g" in this.j) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = f && !k ? Ha : D, b = 0; b < c.length; b++) f = c[b], (k = F(this, f)) ? Array.isArray(k) && e(k) : G(this, f, Oa, !1, !0)
    }
    M.prototype.toJSON = function() {
        return Sa(this.h, Ta, Ua)
    };

    function Ya(a) {
        if (E(a.h)) {
            var b = {
                    M: !0
                },
                c = E(a.h);
            if (c && !b.M) throw Error("copyRepeatedFields must be true for frozen messages");
            c || Ia(a.h);
            var d = new a.constructor;
            a.P && (d.P = a.P.slice());
            for (var e = a.h, g = 0; g < e.length; g++) {
                var k = e[g];
                if (g === e.length - 1 && Ka(k))
                    for (var f in k) {
                        var h = +f;
                        Number.isNaN(h) ? (d.j || (d.j = d.h[d.C + d.v] = {}))[f] = k[f] : ab(a, d, h, k[f], c, b)
                    } else ab(a, d, g - a.v, k, c, b)
            }
            d.O = a;
            a = d
        }
        return a
    }
    M.prototype.R = Ja;
    M.prototype.toString = function() {
        return this.h.toString()
    };
    var bb;

    function Xa(a) {
        M.call(this, a, -1, cb)
    }
    qa(Xa, M);

    function $a(a) {
        M.call(this, a)
    }
    qa($a, M);
    var cb = [1];

    function db(a) {
        M.call(this, a)
    }
    qa(db, M);
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function O(a, b) {
        this.g = b === P ? a : ""
    }
    O.prototype.toString = function() {
        return this.g.toString()
    };
    O.prototype.m = !0;
    O.prototype.i = function() {
        return this.g.toString()
    };

    function eb(a) {
        return a instanceof O && a.constructor === O ? a.g : "type_error:SafeUrl"
    }
    var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        P = {},
        gb = new O("about:invalid#zClosurez", P);

    function hb() {}

    function ib(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var jb = {
            capture: !0
        },
        kb = {
            passive: !0
        },
        lb = ib(function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                w.addEventListener("test", null, b)
            } catch (c) {}
            return a
        });

    function mb(a) {
        return a ? a.passive && lb() ? a : a.capture || !1 : !1
    }

    function Q(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, mb(d))
    };

    function nb(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) nb(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };

    function ob(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var pb = [];

    function qb() {
        var a = pb;
        pb = [];
        a = t(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function rb(a) {
        var b = R;
        "complete" === b.readyState || "interactive" === b.readyState ? (pb.push(a), 1 == pb.length && (window.Promise ? Promise.resolve().then(qb) : window.setImmediate ? setImmediate(qb) : setTimeout(qb, 0))) : b.addEventListener("DOMContentLoaded", a)
    }

    function sb(a) {
        a = void 0 === a ? document : a;
        return a.createElement("img")
    };

    function tb(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = sb(a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = va(g, d);
                    0 <= k && Array.prototype.splice.call(g, k, 1)
                }
                d.removeEventListener && d.removeEventListener("load", e, mb());
                d.removeEventListener && d.removeEventListener("error", e, mb())
            };
            Q(d, "load", e);
            Q(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    };

    function ub() {
        var a = document.currentScript;
        return (a = void 0 === a ? null : a) && "23" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="23"]')
    }

    function vb() {
        var a = void 0 === a ? .01 : a;
        if (!(Math.random() > a)) {
            var b = ub();
            b = "https://" + (b && "true" === b.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com") + "/pagead/gen_204?id=jca&jc=23&version=";
            var c = (c = ub()) && c.getAttribute("data-jc-version") || "unknown";
            a = b + c + "&sample=" + a;
            b = window;
            var d = void 0 === d ? !1 : d;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : tb(b, a, void 0 === d ? !1 :
                d)
        }
    };
    var R = document,
        S = window;

    function wb(a) {
        a = void 0 === a ? [] : a;
        w.google_logging_queue || (w.google_logging_queue = []);
        w.google_logging_queue.push([12, a])
    };

    function xb(a) {
        this.W = a
    }

    function T(a) {
        return new xb(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var yb = new xb(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        }),
        zb = T("http"),
        Ab = T("https"),
        Bb = T("ftp"),
        Cb = T("mailto"),
        Db = [T("data"), zb, Ab, Cb, Bb, yb];

    function Eb(a) {
        return eb(a)
    };
    var Fb = [zb, Ab, Cb, Bb, yb, T("market"), T("itms"), T("intent"), T("itms-appss")];

    function Gb() {
        var a = (Hb() ? "http:" : "https:") + "//pagead2.googlesyndication.com/pagead/gen_204";
        return function(b) {
            b = {
                id: "unsafeurl",
                ctx: 625,
                url: b
            };
            var c = [];
            for (d in b) nb(d, b[d], c);
            var d = c.join("&");
            if (d) {
                b = a.indexOf("#");
                0 > b && (b = a.length);
                c = a.indexOf("?");
                if (0 > c || c > b) {
                    c = b;
                    var e = ""
                } else e = a.substring(c + 1, b);
                b = [a.slice(0, c), e, a.slice(b)];
                c = b[1];
                b[1] = d ? c ? c + "&" + d : d : c;
                d = b[0] + (b[1] ? "?" + b[1] : "") + b[2]
            } else d = a;
            navigator.sendBeacon && navigator.sendBeacon(d, "")
        }
    };

    function Hb() {
        var a = void 0 === a ? S : a;
        return "http:" === a.location.protocol
    }

    function Ib() {
        var a = R;
        try {
            return a.querySelectorAll("*[data-ifc]")
        } catch (b) {
            return []
        }
    }

    function Jb(a, b) {
        a && ob(b, function(c, d) {
            a.style[d] = c
        })
    }

    function Kb(a) {
        for (var b = R.body, c = document.createDocumentFragment(), d = a.length, e = 0; e < d; ++e) c.appendChild(a[e]);
        b.appendChild(c)
    };
    var Lb = null;

    function Mb() {
        var a = void 0 === a ? w : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Nb() {
        var a = void 0 === a ? w : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Ob(a, b) {
        var c = Nb() || Mb();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var U = w.performance,
        Pb = !!(U && U.mark && U.measure && U.clearMarks),
        V = ib(function() {
            var a;
            if (a = Pb) {
                var b;
                if (null === Lb) {
                    Lb = "";
                    try {
                        a = "";
                        try {
                            a = w.top.location.hash
                        } catch (c) {
                            a = w.location.hash
                        }
                        a && (Lb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Lb;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Qb() {
        var a = window;
        this.g = [];
        this.m = a || w;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.i = V() || (null != b ? b : 1 > Math.random())
    }

    function Rb(a) {
        a && U && V() && (U.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), U.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Qb.prototype.start = function(a, b) {
        if (!this.i) return null;
        a = new Ob(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        U && V() && U.mark(b);
        return a
    };
    Qb.prototype.end = function(a) {
        if (this.i && "number" === typeof a.value) {
            a.duration = (Nb() || Mb()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            U && V() && U.mark(b);
            !this.i || 2048 < this.g.length || this.g.push(a)
        }
    };
    var W = new Qb;

    function Sb() {
        window.google_measure_js_timing || (W.i = !1, W.g != W.m.google_js_reporting_queue && (V() && wa(W.g, Rb), W.g.length = 0))
    }
    "number" !== typeof window.google_srt && (window.google_srt = Math.random());
    "complete" == window.document.readyState ? Sb() : W.i && Q(window, "load", function() {
        Sb()
    });

    function Tb(a) {
        var b = void 0 === b ? null : b;
        Q(S, "message", function(c) {
            try {
                var d = JSON.parse(c.data)
            } catch (e) {
                return
            }!d || "ig" !== d.googMsgType || b && /[:|%3A]javascript\(/i.test(c.data) && !b(d, c) || a(d, c)
        })
    };

    function Ub() {
        this.i = this.i;
        this.m = this.m
    }
    Ub.prototype.i = !1;

    function Vb(a) {
        a.i || (a.i = !0, a.A())
    }
    Ub.prototype.A = function() {
        if (this.m)
            for (; this.m.length;) this.m.shift()()
    };

    function X(a, b, c) {
        Ub.call(this);
        this.B = a;
        this.K = b || 0;
        this.D = c;
        this.H = x(this.I, this)
    }
    ua(X, Ub);
    X.prototype.g = 0;
    X.prototype.A = function() {
        X.S.A.call(this);
        this.isActive() && w.clearTimeout(this.g);
        this.g = 0;
        delete this.B;
        delete this.D
    };
    X.prototype.start = function(a) {
        this.isActive() && w.clearTimeout(this.g);
        this.g = 0;
        var b = this.H;
        a = void 0 !== a ? a : this.K;
        if ("function" !== typeof b)
            if (b && "function" == typeof b.handleEvent) b = x(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.g = 2147483647 < Number(a) ? -1 : w.setTimeout(b, a || 0)
    };
    X.prototype.isActive = function() {
        return 0 != this.g
    };
    X.prototype.I = function() {
        this.g = 0;
        this.B && this.B.call(this.D)
    };
    var Wb = {
            display: "inline-block",
            position: "absolute"
        },
        Xb = {
            display: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
        };

    function Y(a, b) {
        a && (a.style.display = b ? "inline-block" : "none")
    }

    function Yb(a, b) {
        if (a) return S.getComputedStyle(a).getPropertyValue(b)
    }

    function Zb() {
        this.A = [];
        this.B = this.i = null;
        this.T = [];
        this.data = null;
        this.K = [];
        this.m = [];
        this.D = [];
        this.I = {};
        this.V = [];
        this.H = this.g = null
    }
    Zb.prototype.init = function(a) {
        var b = this;
        wb([a]);
        this.data = new db(a);
        a = Wa(this.data);
        wa(Za(a), function(f) {
            b.D.push({
                L: 0,
                G: !1,
                N: 0,
                o: f,
                J: -1
            })
        });
        this.m = Ib();
        var c = !1;
        a = this.m.length;
        for (var d = {
                F: 0
            }; d.F < a; d = {
                F: d.F
            }, ++d.F) {
            var e = new Xa(JSON.parse(this.m[d.F].getAttribute("data-ifc") || "[]"));
            wa(Za(e), function(f) {
                return function(h) {
                    b.D.push({
                        L: 0,
                        G: !1,
                        N: 0,
                        o: h,
                        J: f.F
                    });
                    1 === H(h, 4) && (c = !0)
                }
            }(d))
        }
        d = a = !1;
        e = t(this.D);
        for (var g = e.next(); !g.done; g = e.next()) {
            g = g.value;
            var k = g.o;
            0 < L(k, 2) && 0 < H(k, 5) ? (!this.i && J(k, 9) &&
                (this.i = $b(this, Xb)), ac(this, g)) : I(k) && J(k, 9) && bc(this, I(k));
            I(k) && (a = !0);
            0 < L(k, 11) && (d = !0)
        }
        e = [];
        this.i && e.push(this.i);
        !c && e.push.apply(e, ha(this.A));
        R.body && Kb(e);
        J(this.data, 13) && rb(function() {
            for (var f = R.body.querySelectorAll(".amp-fcp, .amp-bcp"), h = 0; h < f.length; ++h) "absolute" === Yb(f[h], "position") && Y(f[h], !1)
        });
        Q(R, "click", function(f) {
            if (!1 === f.isTrusted && J(b.data, 15)) cc(f), f.stopImmediatePropagation(), vb();
            else {
                for (var h, l = -1, m = [], u = t(b.D), q = u.next(); !q.done; q = u.next()) {
                    q = q.value;
                    var n = q.J,
                        p = -1 !== n;
                    if (!(L(q.o, 3) <= l || q.G || p && !1 === m[n])) {
                        var A = !p || m[n] || b.m[n].contains(f.target);
                        p && A && (m[n] = !0);
                        if (n = A)
                            if (n = f, p = q.o, 0 < L(p, 2) && 0 < H(p, 5)) n = b.I[H(p, 5)], n = void 0 !== n && Date.now() < n + L(p, 2);
                            else if (I(p)) {
                            p = (0 <= q.J ? b.m[q.J] : R.body).getBoundingClientRect();
                            A = Number(Yb(R.body, "zoom") || "1");
                            var y = t([n.clientX, n.clientY]),
                                aa = y.next().value;
                            y = y.next().value;
                            y = t([aa / A - p.left, y / A - p.top, p.width, p.height]);
                            var K = y.next().value,
                                ka = y.next().value;
                            aa = y.next().value;
                            y = y.next().value;
                            if (!(0 < aa && 0 < y) || isNaN(K) ||
                                isNaN(ka) || 0 > K || 0 > ka) n = !1;
                            else {
                                var N = dc(I(q.o));
                                K = !(K >= N.left && aa - K > N.right && ka >= N.top && y - ka > N.bottom);
                                b.g && J(b.data, 12) && 300 > n.timeStamp - b.g.timeStamp && (n = b.g.changedTouches[0], p = t([n.clientX / A - p.left, n.clientY / A - p.top]), n = p.next().value, p = p.next().value, !isNaN(n) && !isNaN(p) && 0 <= n && 0 <= p && (K = (K = J(b.data, 16) ? K : !1) || !(n >= N.left && aa - n > N.right && p >= N.top && y - p > N.bottom)));
                                n = K
                            }
                        } else n = 0 < L(p, 11) ? ec(b, n, q) : !0;
                        n && (h = q, l = L(q.o, 3))
                    }
                }
                if (h) switch (l = h.o, H(l, 4)) {
                    case 2:
                    case 3:
                        cc(f);
                        m = Date.now();
                        500 < m - h.N && (h.N = m,
                            ++h.L);
                        m = h.o;
                        if (L(m, 8) && h.L >= L(m, 8))
                            if (h.G = !0, b.i && 0 < L(m, 2)) fc(b);
                            else if (0 < b.A.length && I(m))
                            for (h = t(b.A), m = h.next(); !m.done; m = h.next()) Y(m.value, !1);
                        vb();
                        h = l.toJSON();
                        l = t(b.K);
                        for (m = l.next(); !m.done; m = l.next()) m = m.value, m(f, h)
                }
            }
        }, jb);
        d && Q(R, "touchstart", function(f) {
            b.H = f
        }, kb);
        (a && J(this.data, 12) || d) && Q(R, "touchend", function(f) {
            b.g = f
        }, kb)
    };
    Zb.prototype.registerCallback = function(a) {
        this.K.push(a)
    };

    function bc(a, b) {
        b = dc(b);
        var c = L(a.data, 9);
        a.A = [{
            width: "100%",
            height: b.top + c + "px",
            top: -c + "px",
            left: "0"
        }, {
            width: b.right + c + "px",
            height: "100%",
            top: "0",
            right: -c + "px"
        }, {
            width: "100%",
            height: b.bottom + c + "px",
            bottom: -c + "px",
            left: "0"
        }, {
            width: b.left + c + "px",
            height: "100%",
            top: "0",
            left: -c + "px"
        }].map(function(d) {
            return $b(a, d, 9019)
        })
    }

    function Z(a, b) {
        b.G || (a.I[H(b.o, 5)] = Date.now(), J(b.o, 9) && (a.T.push(b), fc(a)))
    }

    function ac(a, b) {
        switch (H(b.o, 5)) {
            case 2:
                var c, d;
                null == (c = S.AFMA_Communicator) || null == (d = c.addEventListener) || d.call(c, "onshow", function() {
                    Z(a, b)
                });
                break;
            case 10:
                Q(S, "i-creative-view", function() {
                    Z(a, b)
                });
                break;
            case 4:
                Q(R, "DOMContentLoaded", function() {
                    Z(a, b)
                });
                break;
            case 8:
                Tb(function(k) {
                    k.rr && Z(a, b)
                });
                break;
            case 9:
                "IntersectionObserver" in S && (c = new IntersectionObserver(function(k) {
                    k = t(k);
                    for (var f = k.next(); !f.done; f = k.next())
                        if (0 < f.value.intersectionRatio) {
                            Z(a, b);
                            break
                        }
                }), c.observe(R.body), a.V.push(c));
                break;
            case 11:
                var e, g;
                null == (e = S.AFMA_Communicator) || null == (g = e.addEventListener) || g.call(e, "onAdVisibilityChanged", function() {
                    Z(a, b)
                })
        }
    }

    function cc(a) {
        var b = void 0 === b ? !1 : b;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1;
        b && a.stopPropagation()
    }

    function ec(a, b, c) {
        if (!a.g || !a.H || 300 <= b.timeStamp - a.g.timeStamp) return !1;
        var d = new Map;
        wa(a.H.changedTouches, function(g) {
            d.set(g.identifier, {
                x: g.clientX,
                y: g.clientY
            })
        });
        b = L(c.o, 11) || 10;
        a = t(a.g.changedTouches);
        for (c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var e = d.get(c.identifier);
            if (!e || Math.abs(e.x - c.clientX) > b || Math.abs(e.y - c.clientY) > b) return !0
        }
        return !1
    }

    function fc(a) {
        for (var b = 0, c = t(a.T), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = d.o,
                g = a.I[H(e, 5)];
            d.G || void 0 === g || (b = Math.max(b, g + L(e, 2)))
        }
        a.B && Vb(a.B);
        b -= Date.now();
        var k = a.i;
        0 < b ? (Y(k, !0), a.B = new X(function() {
            Y(k, !1)
        }, b), a.B.start()) : Y(k, !1)
    }

    function $b(a, b, c) {
        var d = R.createElement("div");
        Jb(d, Object.assign({}, Wb, {
            "z-index": String(void 0 === c ? 2147483647 : c)
        }, b));
        J(a.data, 10) && Q(d, "click", hb);
        if (J(a.data, 11)) {
            a = R.createElement("a");
            b = Gb();
            c = Fb;
            c = void 0 === c ? Db : c;
            a: {
                c = void 0 === c ? Db : c;
                for (var e = 0; e < c.length; ++e) {
                    var g = c[e];
                    if (g instanceof xb && g.W("#")) {
                        c = new O("#", P);
                        break a
                    }
                }
                c = void 0
            }
            c = c || gb;
            c === gb && b("#");
            b = new O(Eb(c), P);
            b instanceof O || b instanceof O || (b = "object" == typeof b && b.m ? b.i() : String(b), fb.test(b) || (b = "about:invalid#zClosurez"),
                b = new O(b, P));
            a.href = eb(b);
            a.appendChild(d);
            return a
        }
        return d
    }

    function dc(a) {
        a = void 0 === a ? "" : a;
        var b = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        a && (a = a.split(","), 4 === a.length && a.reduce(function(c, d) {
            return c && !isNaN(+d)
        }, !0) && (a = t(a.map(function(c) {
            return +c
        })), b.top = a.next().value, b.right = a.next().value, b.bottom = a.next().value, b.left = a.next().value));
        return b
    };
    window.googqscp = new Zb;
}).call(this);