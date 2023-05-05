(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    function aa(a) {
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
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var t = ca(this);

    function u(a, b) {
        if (b) a: {
            var c = t;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var f = a[d];
                if (!(f in c)) break a;
                c = c[f]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    u("Symbol", function(a) {
        function b(h) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (h || "") + "_" + f++, h)
        }

        function c(h, e) {
            this.g = h;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: e
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            f = 0;
        return b
    });
    u("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = t[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return da(aa(this))
                }
            })
        }
        return a
    });

    function da(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function ea(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }
    var fa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                    a: !0
                },
                ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a
            } catch (a) {}
            ia = !1
        }
        ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var la = ha;

    function ma(a, b) {
        a.prototype = fa(b.prototype);
        a.prototype.constructor = a;
        if (la) la(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.fa = b.prototype
    }

    function na() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    u("Promise", function(a) {
        function b(e) {
            this.h = 0;
            this.i = void 0;
            this.g = [];
            this.A = !1;
            var g = this.l();
            try {
                e(g.resolve, g.reject)
            } catch (k) {
                g.reject(k)
            }
        }

        function c() {
            this.g = null
        }

        function d(e) {
            return e instanceof b ? e : new b(function(g) {
                g(e)
            })
        }
        if (a) return a;
        c.prototype.h = function(e) {
            if (null == this.g) {
                this.g = [];
                var g = this;
                this.i(function() {
                    g.o()
                })
            }
            this.g.push(e)
        };
        var f = t.setTimeout;
        c.prototype.i = function(e) {
            f(e, 0)
        };
        c.prototype.o = function() {
            for (; this.g && this.g.length;) {
                var e = this.g;
                this.g = [];
                for (var g = 0; g < e.length; ++g) {
                    var k =
                        e[g];
                    e[g] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.g = null
        };
        c.prototype.l = function(e) {
            this.i(function() {
                throw e;
            })
        };
        b.prototype.l = function() {
            function e(l) {
                return function(q) {
                    k || (k = !0, l.call(g, q))
                }
            }
            var g = this,
                k = !1;
            return {
                resolve: e(this.I),
                reject: e(this.o)
            }
        };
        b.prototype.I = function(e) {
            if (e === this) this.o(new TypeError("A Promise cannot resolve to itself"));
            else if (e instanceof b) this.K(e);
            else {
                a: switch (typeof e) {
                    case "object":
                        var g = null != e;
                        break a;
                    case "function":
                        g = !0;
                        break a;
                    default:
                        g = !1
                }
                g ? this.D(e) : this.s(e)
            }
        };
        b.prototype.D = function(e) {
            var g = void 0;
            try {
                g = e.then
            } catch (k) {
                this.o(k);
                return
            }
            "function" == typeof g ? this.L(g, e) : this.s(e)
        };
        b.prototype.o = function(e) {
            this.C(2, e)
        };
        b.prototype.s = function(e) {
            this.C(1, e)
        };
        b.prototype.C = function(e, g) {
            if (0 != this.h) throw Error("Cannot settle(" + e + ", " + g + "): Promise already settled in state" + this.h);
            this.h = e;
            this.i = g;
            2 === this.h && this.J();
            this.G()
        };
        b.prototype.J = function() {
            var e = this;
            f(function() {
                if (e.H()) {
                    var g = t.console;
                    "undefined" !== typeof g && g.error(e.i)
                }
            }, 1)
        };
        b.prototype.H =
            function() {
                if (this.A) return !1;
                var e = t.CustomEvent,
                    g = t.Event,
                    k = t.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof e ? e = new e("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof g ? e = new g("unhandledrejection", {
                    cancelable: !0
                }) : (e = t.document.createEvent("CustomEvent"), e.initCustomEvent("unhandledrejection", !1, !0, e));
                e.promise = this;
                e.reason = this.i;
                return k(e)
            };
        b.prototype.G = function() {
            if (null != this.g) {
                for (var e = 0; e < this.g.length; ++e) h.h(this.g[e]);
                this.g = null
            }
        };
        var h = new c;
        b.prototype.K =
            function(e) {
                var g = this.l();
                e.M(g.resolve, g.reject)
            };
        b.prototype.L = function(e, g) {
            var k = this.l();
            try {
                e.call(g, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(e, g) {
            function k(n, m) {
                return "function" == typeof n ? function(p) {
                    try {
                        l(n(p))
                    } catch (C) {
                        q(C)
                    }
                } : m
            }
            var l, q, r = new b(function(n, m) {
                l = n;
                q = m
            });
            this.M(k(e, l), k(g, q));
            return r
        };
        b.prototype.catch = function(e) {
            return this.then(void 0, e)
        };
        b.prototype.M = function(e, g) {
            function k() {
                switch (l.h) {
                    case 1:
                        e(l.i);
                        break;
                    case 2:
                        g(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            l.h);
                }
            }
            var l = this;
            null == this.g ? h.h(k) : this.g.push(k);
            this.A = !0
        };
        b.resolve = d;
        b.reject = function(e) {
            return new b(function(g, k) {
                k(e)
            })
        };
        b.race = function(e) {
            return new b(function(g, k) {
                for (var l = ea(e), q = l.next(); !q.done; q = l.next()) d(q.value).M(g, k)
            })
        };
        b.all = function(e) {
            var g = ea(e),
                k = g.next();
            return k.done ? d([]) : new b(function(l, q) {
                function r(p) {
                    return function(C) {
                        n[p] = C;
                        m--;
                        0 == m && l(n)
                    }
                }
                var n = [],
                    m = 0;
                do n.push(void 0), m++, d(k.value).M(r(n.length - 1), q), k = g.next(); while (!k.done)
            })
        };
        return b
    });

    function oa(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            f = {
                next: function() {
                    if (!d && c < a.length) {
                        var h = c++;
                        return {
                            value: b(h, a[h]),
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
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
    u("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return oa(this, function(b) {
                return b
            })
        }
    });
    u("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    var v = this || self;

    function pa(a) {
        return a
    };
    var qa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ra = Array.prototype.forEach ? function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in d && b.call(void 0, d[f], f, a)
        },
        sa = Array.prototype.every ? function(a, b) {
            return Array.prototype.every.call(a,
                b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
                if (f in d && !b.call(void 0, d[f], f, a)) return !1;
            return !0
        };

    function ta(a) {
        ta[" "](a);
        return a
    }
    ta[" "] = function() {};
    var ua = {},
        va = null;

    function wa(a) {
        var b;
        void 0 === b && (b = 0);
        if (!va) {
            va = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], f = 0; 5 > f; f++) {
                var h = c.concat(d[f].split(""));
                ua[f] = h;
                for (var e = 0; e < h.length; e++) {
                    var g = h[e];
                    void 0 === va[g] && (va[g] = e)
                }
            }
        }
        b = ua[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (f = h = 0; h < a.length - 2; h += 3) {
            var k = a[h],
                l = a[h + 1];
            g = a[h + 2];
            e = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | g >> 6];
            g = b[g & 63];
            c[f++] = e + k + l + g
        }
        e = 0;
        g = d;
        switch (a.length - h) {
            case 2:
                e =
                    a[h + 1], g = b[(e & 15) << 2] || d;
            case 1:
                a = a[h], c[f] = b[a >> 2] + b[(a & 3) << 4 | e >> 4] + g + d
        }
        return c.join("")
    };
    var xa = "undefined" !== typeof Uint8Array,
        ya = {};
    var za;

    function Aa(a) {
        if (ya !== ya) throw Error("illegal external caller");
        this.T = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    };
    var w = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

    function x(a, b) {
        Object.isFrozen(a) || (w ? a[w] |= b : void 0 !== a.u ? a.u |= b : Object.defineProperties(a, {
            u: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function Ba(a, b) {
        Object.isExtensible(a) && (w ? a[w] && (a[w] &= ~b) : void 0 !== a.u && (a.u &= ~b))
    }

    function y(a) {
        var b;
        w ? b = a[w] : b = a.u;
        return null == b ? 0 : b
    }

    function Ca(a, b) {
        w ? a[w] = b : void 0 !== a.u ? a.u = b : Object.defineProperties(a, {
            u: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function z(a) {
        x(a, 1);
        return a
    }

    function Da(a) {
        x(a, 17);
        return a
    }

    function A(a) {
        return a ? !!(y(a) & 2) : !1
    }

    function Ea(a) {
        x(a, 16);
        return a
    }

    function Fa(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        Ba(a, 16)
    }

    function Ga(a, b) {
        Ca(b, (y(a) | 0) & -51)
    };
    var Ha = {};

    function Ia(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var Ja = Object,
        Ka = Ja.freeze,
        La = [];
    x(La, 3);
    var Ma = Ka.call(Ja, La);

    function Na(a) {
        if (A(a.j)) throw Error("Cannot mutate an immutable Message");
    };

    function Oa(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (xa && null != a && a instanceof Uint8Array) return wa(a);
                    if (a instanceof Aa) {
                        var b = a.T;
                        return null == b ? "" : "string" === typeof b ? b : a.T = wa(b)
                    }
                }
        }
        return a
    };

    function Pa(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Qa(a, b, c, void 0 !== d);
            else if (Ia(a)) {
                var f = {},
                    h;
                for (h in a) f[h] = Pa(a[h], b, c, d);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Qa(a, b, c, d) {
        d = d ? !!(y(a) & 16) : void 0;
        var f = Array.prototype.slice.call(a);
        c(a, f);
        for (a = 0; a < f.length; a++) f[a] = Pa(f[a], b, c, d);
        return f
    }

    function Ra(a) {
        return a.O === Ha ? a.toJSON() : Oa(a)
    }

    function Sa(a) {
        if (!a) return a;
        if ("object" === typeof a) {
            if (xa && null != a && a instanceof Uint8Array) return new Uint8Array(a);
            if (a.O === Ha) return Ta(a)
        }
        return a
    }

    function Ua() {};

    function B(a, b, c) {
        return -1 === b ? null : b >= a.B ? a.m ? a.m[b] : void 0 : (void 0 === c ? 0 : c) && a.m && (c = a.m[b], null != c) ? c : a.j[b + a.v]
    }

    function G(a, b, c, d, f) {
        d = void 0 === d ? !1 : d;
        (void 0 === f ? 0 : f) || Na(a);
        a.R && (a.R = void 0);
        b >= a.B || d ? (a.m || (a.m = a.j[a.B + a.v] = {}))[b] = c : (void 0 !== a.m && a.B >= a.j.length ? (d = a.j.length - 1, f = b + a.v, f >= d ? (a.j[d] = void 0, a.j[f] = c, a.j.push(a.m)) : a.j[f] = c) : a.j[b + a.v] = c, void 0 !== a.m && b in a.m && delete a.m[b])
    }

    function Va(a, b, c) {
        var d = B(a, b, c);
        Array.isArray(d) || (d = Ma);
        var f = y(d);
        f & 1 || z(d);
        A(a.j) ? f & 2 || x(d, 2) : d === Ma && (d = z(Array.prototype.slice.call(d)), G(a, b, d, c));
        return d
    }

    function Wa(a, b, c) {
        var d = B(a, 1, c);
        var f = !1;
        var h = null == d || "object" !== typeof d || (f = Array.isArray(d)) || d.O !== Ha ? f ? new b(d) : void 0 : d;
        h !== d && null != h && (G(a, 1, h, c, !0), x(h.j, y(a.j) & -33));
        return h
    }

    function Xa(a) {
        var b = Ya;
        var c = void 0 === c ? !1 : c;
        b = Wa(a, b, c);
        if (null == b) return b;
        A(b.j) && !A(a.j) && (b = Za(b), G(a, 1, b, c));
        return b
    }

    function H(a, b) {
        return null == a ? b : a
    }

    function I(a, b) {
        a = B(a, b);
        return H(null == a ? a : !!a, !1)
    };

    function $a(a, b, c, d, f, h) {
        if (a = a.g && a.g[c]) {
            d = h.N ? z(a.slice()) : a;
            Na(b);
            if (null != d) {
                f = z([]);
                h = !1;
                for (a = 0; a < d.length; a++) f[a] = d[a].j, h = h || A(f[a]);
                b.g || (b.g = {});
                b.g[c] = d;
                d = f;
                h ? Ba(d, 8) : x(d, 8)
            } else b.g && (b.g[c] = void 0), f = Ma;
            G(b, c, f)
        } else null != d ? xa && d instanceof Uint8Array ? f = d.length ? new Aa(new Uint8Array(d)) : za || (za = new Aa(null)) : (Array.isArray(d) && (f ? x(d, 2) : d && y(d) & 1 && h.N ? (f = Array.prototype.slice.call(d), Ca(f, (y(d) | 0) & -51), d = f) : Fa(d)), f = d) : f = void 0, G(b, c, f)
    };

    function L(a, b, c) {
        null == a && (a = M);
        M = null;
        var d = this.constructor.g || 0,
            f = 0 < d,
            h = this.constructor.h,
            e = !1;
        if (null == a) {
            var g = h ? [h] : [];
            x(g, 48);
            a = g;
            g = !0
        } else if (g = !!(y(a) & 16)) e = y(a), Ca(a, e | 32), e = !!(e & 32);
        f && 0 < a.length && Ia(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.v = (h ? 0 : -1) - d;
        this.g = void 0;
        this.j = a;
        a: {
            h = this.j.length;d = h - 1;
            if (h && (h = this.j[d], Ia(h))) {
                this.m = h;
                b = Object.keys(h);
                0 < b.length && sa(b, isNaN) ? this.B = Number.MAX_VALUE : this.B = d - this.v;
                break a
            }
            void 0 !== b && -1 < b ? (this.B = Math.max(b, d + 1 - this.v), this.m =
                void 0) : this.B = Number.MAX_VALUE
        }
        if (!f && this.m && "g" in this.m) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (f = g && !e ? Da : z, b = 0; b < c.length; b++) g = c[b], (e = B(this, g)) ? Array.isArray(e) && f(e) : G(this, g, Ma, !1, !0)
    }
    L.prototype.toJSON = function() {
        return Qa(this.j, Ra, Ua)
    };

    function Ta(a) {
        var b = Qa(a.j, Sa, Ga);
        Ea(b);
        M = b;
        b = new a.constructor(b);
        M = null;
        ab(b, a);
        return b
    }

    function Za(a) {
        if (A(a.j)) {
            var b = {
                    N: !0
                },
                c = A(a.j);
            if (c && !b.N) throw Error("copyRepeatedFields must be true for frozen messages");
            c || Fa(a.j);
            var d = new a.constructor;
            a.F && (d.F = a.F.slice());
            for (var f = a.j, h = 0; h < f.length; h++) {
                var e = f[h];
                if (h === f.length - 1 && Ia(e))
                    for (var g in e) {
                        var k = +g;
                        Number.isNaN(k) ? (d.m || (d.m = d.j[d.B + d.v] = {}))[g] = e[g] : $a(a, d, k, e[g], c, b)
                    } else $a(a, d, h - a.v, e, c, b)
            }
            d.R = a;
            a = d
        }
        return a
    }
    L.prototype.O = Ha;

    function ab(a, b) {
        b.F && (a.F = b.F.slice());
        var c = b.g;
        if (c) {
            var d = b.m,
                f;
            for (f in c)
                if (b = c[f]) {
                    var h = !(!d || !d[f]),
                        e = +f;
                    if (Array.isArray(b)) {
                        if (b.length) {
                            var g = a,
                                k = h;
                            k = void 0 === k ? !1 : k;
                            h = A(g.j);
                            var l = g;
                            var q = b[0].constructor,
                                r = k,
                                n = h;
                            n = void 0 === n ? !0 : n;
                            l.g || (l.g = {});
                            var m = l.g[e],
                                p = Va(l, e, r),
                                C = A(l.j),
                                D = !!(y(l.j) & 16),
                                J = A(p),
                                E = C || J;
                            !n && J && (p = z(Array.prototype.slice.call(p)), G(l, e, p, r));
                            if (!m) {
                                m = [];
                                r = E;
                                for (J = 0; J < p.length; J++) {
                                    var F = p[J];
                                    r = r || A(F);
                                    var U = q,
                                        K = D,
                                        O = !1;
                                    O = void 0 === O ? !1 : O;
                                    K = void 0 === K ? !1 : K;
                                    F = Array.isArray(F) ?
                                        new U(K ? Ea(F) : F) : O ? new U : void 0;
                                    void 0 !== F && (m.push(F), E && x(F.j, 2))
                                }
                                l.g[e] = m;
                                Object.isFrozen(p) || (q = y(p) | 33, Ca(p, r ? q & -9 : q | 8))
                            }
                            n = C || n;
                            p = A(m);
                            n && !p && (Object.isFrozen(m) && (l.g[e] = m = m.slice()), x(m, 2), Object.freeze(m));
                            !n && p && (l.g[e] = m = m.slice());
                            l = m;
                            e = Va(g, e, k);
                            if (g = !h && e) {
                                if (!e) throw Error("cannot check mutability state of non-array");
                                g = !(y(e) & 8)
                            }
                            if (g) {
                                for (g = 0; g < l.length; g++)(h = l[g]) && A(h.j) && (l[g] = Za(l[g]), e[g] = l[g].j);
                                x(e, 8)
                            }
                            e = l;
                            for (g = 0; g < Math.min(e.length, b.length); g++) ab(e[g], b[g])
                        }
                    } else throw a =
                        typeof b, Error("unexpected object: type: " + ("object" != a ? a : b ? Array.isArray(b) ? "array" : a : "null") + ": " + b);
                }
        }
    }
    var M;

    function Ya(a) {
        L.call(this, a, -1, bb)
    }
    ma(Ya, L);
    var bb = [28];

    function cb(a) {
        L.call(this, a, -1, db)
    }
    ma(cb, L);
    var db = [21];
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var eb;

    function fb(a, b) {
        this.g = b === gb ? a : ""
    }
    fb.prototype.toString = function() {
        return this.g + ""
    };
    var gb = {};

    function hb(a) {
        if (void 0 === eb) {
            var b = null;
            var c = v.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: pa,
                        createScript: pa,
                        createScriptURL: pa
                    })
                } catch (d) {
                    v.console && v.console.error(d.message)
                }
                eb = b
            } else eb = b
        }
        a = (b = eb) ? b.createScriptURL(a) : a;
        return new fb(a, gb)
    };

    function ib(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var jb = {
            passive: !0
        },
        kb = ib(function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                v.addEventListener("test", null, b)
            } catch (c) {}
            return a
        });

    function lb(a) {
        return a ? a.passive && kb() ? a : a.capture || !1 : !1
    }

    function N(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, lb(d))
    };

    function P(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }

    function mb(a) {
        var b = document;
        b.getElementsByClassName ? a = b.getElementsByClassName(a)[0] : (b = document, a = b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : nb(b, a)[0] || null);
        return a || null
    }

    function nb(a, b) {
        var c, d;
        if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
        if (b && a.getElementsByClassName) {
            var f = a.getElementsByClassName(b);
            return f
        }
        f = a.getElementsByTagName("*");
        if (b) {
            var h = {};
            for (c = d = 0; a = f[c]; c++) {
                var e = a.className,
                    g;
                if (g = "function" == typeof e.split) g = 0 <= qa(e.split(/\s+/), b);
                g && (h[d++] = a)
            }
            h.length = d;
            return h
        }
        return f
    }

    function ob(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    var pb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function qb(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Q(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }

    function rb(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };

    function sb(a, b, c, d) {
        tb(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d)
    }

    function tb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        var f = rb("IMG", a.document);
        if (c || d) {
            var h = function(e) {
                c && c(e);
                if (d) {
                    e = a.google_image_requests;
                    var g = qa(e, f);
                    0 <= g && Array.prototype.splice.call(e, g, 1)
                }
                f.removeEventListener && f.removeEventListener("load", h, lb());
                f.removeEventListener && f.removeEventListener("error", h, lb())
            };
            N(f, "load", h);
            N(f, "error", h)
        }
        f.src = b;
        a.google_image_requests.push(f)
    };
    var ub = 0;

    function vb(a) {
        return (a = wb(a)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function wb(a) {
        var b = document.currentScript;
        return (b = void 0 === b ? null : b) && b.getAttribute("data-jc") === String(a) ? b : document.querySelector('[data-jc="' + a + '"]')
    }

    function xb() {
        var a = void 0 === a ? .01 : a;
        if (!(Math.random() > a)) {
            var b = wb(60);
            a = "https://" + (b && "true" === b.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com") + "/pagead/gen_204?id=jca&jc=60&version=" + vb(60) + "&sample=" + a;
            b = window;
            var c = void 0 === c ? !1 : c;
            var d;
            if (d = b.navigator) d = b.navigator.userAgent, d = /Chrome/.test(d) && !/Edge/.test(d) ? !0 : !1;
            d && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : sb(b, a, void 0, c)
        }
    };
    var yb = document,
        R = window;

    function zb(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function Ab(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : zb(a).match(/\S+/g) || [], b = 0 <= qa(a, b));
        return b
    }

    function S(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!Ab(a, b)) {
            var c = zb(a);
            b = c + (0 < c.length ? " " + b : b);
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        }
    };

    function Bb(a) {
        this.serializedAttributionData = a.toJSON();
        this.g = Ta(a);
        this.isMutableImpression = void 0 !== Wa(this.g, Ya, !1) && !!I(Xa(this.g), 33);
        this.ca = !!I(this.g, 11);
        this.hasUserFeedbackData = !!this.g && void 0 !== Wa(this.g, Ya, !1);
        this.W = !!I(this.g, 4);
        this.Z = !!I(this.g, 6);
        this.V = !!I(this.g, 13);
        this.creativeIndexSuffix = 1 < H(B(this.g, 8), 0) ? H(B(this.g, 7), 0).toString() : "";
        this.da = !!I(this.g, 17);
        this.ba = !!I(this.g, 18);
        this.U = !!I(this.g, 14);
        this.enableMultiplexThirdPartyAttribution = !!I(this.g, 32);
        this.J = !!I(this.g,
            15);
        this.ea = !!I(this.g, 31);
        this.aa = 1 == I(this.g, 9);
        this.openAttributionInline = 1 == I(this.g, 10);
        this.isMobileDevice = !!I(this.g, 12);
        this.D = null;
        this.Y = (a = yb.querySelector("[data-slide]")) ? "true" === a.getAttribute("data-slide") : !1;
        (this.L = "" !== this.creativeIndexSuffix) && void 0 === R.goog_multislot_cache && (R.goog_multislot_cache = {});
        if (this.L && !this.Y) {
            if (a = R.goog_multislot_cache.hd, void 0 === a) {
                a = !1;
                var b = yb.querySelector("[data-dim]");
                if (b)
                    if (b = b.getBoundingClientRect(), 150 <= b.right - b.left && 150 <= b.bottom -
                        b.top) a = !1;
                    else {
                        var c = document.body.getBoundingClientRect();
                        150 > (1 >= Math.abs(c.left - b.left) && 1 >= Math.abs(c.right - b.right) ? b.bottom - b.top : b.right - b.left) && (a = !0)
                    }
                else a = !1;
                window.goog_multislot_cache.hd = a
            }
        } else a = !1;
        this.K = a;
        this.G = P("abgcp" + this.creativeIndexSuffix);
        this.C = P("abgc" + this.creativeIndexSuffix);
        this.h = P("abgs" + this.creativeIndexSuffix);
        P("abgl" + this.creativeIndexSuffix);
        this.A = P("abgb" + this.creativeIndexSuffix);
        this.I = P("abgac" + this.creativeIndexSuffix);
        P("mute_panel" + this.creativeIndexSuffix);
        this.H = mb("goog_delegate_attribution" + this.creativeIndexSuffix);
        this.isDelegateAttributionActive = !!this.H && !!this.U && !mb("goog_delegate_disabled") && !this.J;
        if (this.h) a: for (a = this.h, b = a.childNodes, c = 0; c < b.length; c++) {
            var d = b.item(c);
            if ("undefined" != typeof d.tagName && "A" == d.tagName.toUpperCase()) {
                a = d;
                break a
            }
        } else a = null;
        this.o = a;
        this.l = this.isDelegateAttributionActive ? this.H : P("cbb" + this.creativeIndexSuffix);
        this.X = this.K ? "0" === this.creativeIndexSuffix : !0;
        this.enableDelegateDismissableMenu = !!this.l &&
            Ab(this.l, "goog_dismissable_menu");
        this.s = null;
        this.P = 0;
        this.i = this.isDelegateAttributionActive ? this.H : this.Z && this.G ? this.G : this.C;
        this.autoExpandOnLoad = !!I(this.g, 19);
        this.adbadgeEnabled = !!I(this.g, 24);
        this.enableNativeJakeUi = !!I(this.g, 27)
    };

    function Fb(a, b) {
        if (!a) throw Error("bad conv util ctor args");
        this.h = a;
        this.g = b
    };

    function T(a, b) {
        a && qb(b, function(c, d) {
            a.style[d] = c
        })
    };

    function Gb(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Hb = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function Ib(a, b) {
        this.g = a;
        this.h = b
    }

    function Jb(a, b) {
        this.url = a;
        this.S = !!b;
        this.depth = null
    };

    function Kb() {
        this.i = "&";
        this.h = {};
        this.l = 0;
        this.g = []
    }

    function Lb(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Mb(a, b, c, d, f) {
        var h = [];
        qb(a, function(e, g) {
            (e = Nb(e, b, c, d, f)) && h.push(g + "=" + e)
        });
        return h.join(b)
    }

    function Nb(a, b, c, d, f) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var h = [], e = 0; e < a.length; e++) h.push(Nb(a[e], b, c, d + 1, f));
                return h.join(c[d])
            }
        } else if ("object" == typeof a) return f = f || 0, 2 > f ? encodeURIComponent(Mb(a, b, c, d, f + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Ob(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Pb(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(q, r) {
            return q - r
        });
        c = null;
        for (var f = "", h = 0; h < a.g.length; h++)
            for (var e = a.g[h], g = a.h[e], k = 0; k < g.length; k++) {
                if (!d) {
                    c = null == c ? e : c;
                    break
                }
                var l = Mb(g[k], a.i, ",$");
                if (l) {
                    l = f + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        f = a.i;
                        break
                    }
                    c = null == c ? e : c
                }
            }
        a = "";
        null != c && (a = f + "trn=" + c);
        return b + a
    }

    function Pb(a) {
        var b = 1,
            c;
        for (c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    };

    function Qb() {
        var a = void 0 === a ? R : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.g = Math.random()
    }

    function Rb() {
        var a = Sb,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }

    function Tb(a, b, c, d, f) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (f || .01)) try {
            if (c instanceof Kb) var h = c;
            else h = new Kb, qb(c, function(g, k) {
                var l = h,
                    q = l.l++;
                g = Lb(k, g);
                l.g.push(q);
                l.h[q] = g
            });
            var e = Ob(h, a.h, "/pagead/gen_204?id=" + b + "&");
            e && sb(v, e)
        } catch (g) {}
    };
    var Ub = null;

    function Vb() {
        var a = void 0 === a ? v : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Wb() {
        var a = void 0 === a ? v : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Xb(a, b) {
        var c = Wb() || Vb();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var V = v.performance,
        Yb = !!(V && V.mark && V.measure && V.clearMarks),
        Zb = ib(function() {
            var a;
            if (a = Yb) {
                var b;
                if (null === Ub) {
                    Ub = "";
                    try {
                        a = "";
                        try {
                            a = v.top.location.hash
                        } catch (c) {
                            a = v.location.hash
                        }
                        a && (Ub = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Ub;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function $b() {
        var a = window;
        this.h = [];
        this.i = a || v;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.g = Zb() || (null != b ? b : 1 > Math.random())
    }

    function ac(a) {
        a && V && Zb() && (V.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), V.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    $b.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new Xb(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        V && Zb() && V.mark(b);
        return a
    };
    $b.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (Wb() || Vb()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            V && Zb() && V.mark(b);
            !this.g || 2048 < this.h.length || this.h.push(a)
        }
    };

    function bc() {
        var a = cc;
        this.i = Sb;
        this.h = null;
        this.s = this.o;
        this.g = void 0 === a ? null : a;
        this.l = !1
    }
    bc.prototype.pinger = function() {
        return this.i
    };

    function dc(a, b) {
        var c = ec;
        try {
            if (c.g && c.g.g) {
                var d = c.g.start(a.toString(), 3);
                var f = b();
                c.g.end(d)
            } else f = b()
        } catch (g) {
            b = !0;
            try {
                ac(d), b = c.s(a, new Gb(g, {
                    message: fc(g)
                }), void 0, void 0)
            } catch (k) {
                c.o(217, k)
            }
            if (b) {
                var h, e;
                null == (h = window.console) || null == (e = h.error) || e.call(h, g)
            } else throw g;
        }
        return f
    }

    function gc(a, b) {
        return function() {
            var c = na.apply(0, arguments);
            return dc(a, function() {
                return b.apply(void 0, c)
            })
        }
    }
    bc.prototype.o = function(a, b, c, d, f) {
        f = f || "jserror";
        try {
            var h = new Kb;
            h.g.push(1);
            h.h[1] = Lb("context", a);
            b.error && b.meta && b.id || (b = new Gb(b, {
                message: fc(b)
            }));
            if (b.msg) {
                var e = b.msg.substring(0, 512);
                h.g.push(2);
                h.h[2] = Lb("msg", e)
            }
            var g = b.meta || {};
            if (this.h) try {
                this.h(g)
            } catch (W) {}
            if (d) try {
                d(g)
            } catch (W) {}
            b = [g];
            h.g.push(3);
            h.h[3] = b;
            d = v;
            b = [];
            e = null;
            do {
                var k = d;
                try {
                    var l;
                    if (l = !!k && null != k.location.href) b: {
                        try {
                            ta(k.foo);
                            l = !0;
                            break b
                        } catch (W) {}
                        l = !1
                    }
                    var q = l
                } catch (W) {
                    q = !1
                }
                if (q) {
                    var r = k.location.href;
                    e = k.document &&
                        k.document.referrer || null
                } else r = e, e = null;
                b.push(new Jb(r || ""));
                try {
                    d = k.parent
                } catch (W) {
                    d = null
                }
            } while (d && k != d);
            r = 0;
            for (var n = b.length - 1; r <= n; ++r) b[r].depth = n - r;
            k = v;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (n = 1; n < b.length; ++n) {
                    var m = b[n];
                    m.url || (m.url = k.location.ancestorOrigins[n - 1] || "", m.S = !0)
                }
            var p = new Jb(v.location.href, !1);
            k = null;
            var C = b.length - 1;
            for (m = C; 0 <= m; --m) {
                var D = b[m];
                !k && Hb.test(D.url) && (k = D);
                if (D.url && !D.S) {
                    p = D;
                    break
                }
            }
            D = null;
            var J = b.length &&
                b[C].url;
            0 != p.depth && J && (D = b[C]);
            var E = new Ib(p, D);
            if (E.h) {
                var F = E.h.url || "";
                h.g.push(4);
                h.h[4] = Lb("top", F)
            }
            var U = {
                url: E.g.url || ""
            };
            if (E.g.url) {
                var K = E.g.url.match(pb),
                    O = K[1],
                    Cb = K[3],
                    Db = K[4];
                p = "";
                O && (p += O + ":");
                Cb && (p += "//", p += Cb, Db && (p += ":" + Db));
                var Eb = p
            } else Eb = "";
            U = [U, {
                url: Eb
            }];
            h.g.push(5);
            h.h[5] = U;
            Tb(this.i, f, h, this.l, c)
        } catch (W) {
            try {
                Tb(this.i, f, {
                    context: "ecmserr",
                    rctx: a,
                    msg: fc(W),
                    url: E && E.g.url
                }, this.l, c)
            } catch (Ec) {}
        }
        return !0
    };

    function fc(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (f) {
                b = c
            }
        }
        return b
    };
    var Sb, ec, cc = new $b;

    function hc() {
        if (!window.google_measure_js_timing) {
            var a = cc;
            a.g = !1;
            a.h != a.i.google_js_reporting_queue && (Zb() && ra(a.h, ac), a.h.length = 0)
        }
    }(function(a) {
        Sb = null != a ? a : new Qb;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Rb();
        ec = new bc;
        ec.h = function(b) {
            var c = ub;
            0 !== c && (b.jc = String(c), b.shv = vb(c))
        };
        ec.l = !0;
        "complete" == window.document.readyState ? hc() : cc.g && N(window, "load", function() {
            hc()
        })
    })();

    function X(a, b) {
        return gc(a, b)
    };

    function ic(a, b) {
        var c = this;
        this.g = a;
        this.h = b;
        this.g.da || (this.l = !1, this.i = null, !this.g.K || this.g.adbadgeEnabled || this.g.X ? jc(this) : (a = {
            display: "none"
        }, b = {
            width: "15px",
            height: "15px"
        }, this.g.isMobileDevice ? (T(this.g.A, a), T(this.g.h, a), T(this.g.G, b), T(this.g.C, b)) : T(this.g.C, a)), kc(this), this.g.enableNativeJakeUi && S(this.g.I, "abgnac"), this.g.isDelegateAttributionActive ? (S(document.body, "goog_delegate_active"), S(document.body, "jaa")) : (!this.g.isMutableImpression && this.g.l && ob(this.g.l), setTimeout(function() {
            S(document.body,
                "jar")
        }, this.g.V ? 750 : 100)), this.g.J && S(document.body, "goog_delegate_disabled"), this.g.autoExpandOnLoad && R.addEventListener("load", function() {
            return c.h()
        }))
    }

    function kc(a) {
        if (a.g.ca) N(a.g.i, "click", X(365, function(c) {
            var d = R.goog_interstitial_display;
            d && (d(c), c && (c.stopPropagation(), c.preventDefault()))
        }));
        else if (a.g.isMutableImpression && a.g.isMobileDevice) N(a.g.i, "click", function() {
            return a.h()
        });
        else if (a.g.isMutableImpression && !a.g.isMobileDevice && (a.g.l && (N(a.g.l, "click", function() {
                return a.h()
            }), N(a.g.l, "keydown", function(c) {
                "Enter" !== c.code && "Space" !== c.code || a.h()
            })), a.g.ea && a.g.h && N(a.g.h, "click", function() {
                return a.h()
            })), a.g.W) lc(a);
        else {
            N(a.g.i,
                "mouseover", X(367, function() {
                    return lc(a)
                }));
            N(a.g.i, "mouseout", X(369, function() {
                return mc(a, 500)
            }));
            N(a.g.i, "touchstart", X(368, function() {
                return lc(a)
            }), jb);
            var b = X(370, function() {
                return mc(a, 4E3)
            });
            N(a.g.i, "mouseup", b);
            N(a.g.i, "touchend", b);
            N(a.g.i, "touchcancel", b);
            a.g.o && N(a.g.o, "click", X(371, function(c) {
                return a.preventDefault(c)
            }))
        }
    }

    function jc(a) {
        if (a.g.o && a.g.ba) {
            var b = Xa(a.g.g);
            b && null != B(b, 5) && null != B(b, 6) && (a.i = new Fb(H(B(b, 5), ""), H(B(b, 19), "")));
            N(a.g.o, "click", X(452, function() {
                if (!a.l && (a.l = !0, a.i)) {
                    var c = a.i,
                        d = c.h + "&label=closebutton_whythisad_click";
                    d += "&label_instance=1";
                    c.g && (d += "&cid=" + c.g);
                    sb(window, d)
                }
            }))
        }
    }

    function nc(a) {
        var b = a.g.I;
        b.style.display = "block";
        a.g.enableNativeJakeUi && window.requestAnimationFrame(function() {
            S(b, "abgacfo")
        })
    }

    function lc(a) {
        window.clearTimeout(a.g.s);
        a.g.s = null;
        a.g.h && "block" == a.g.h.style.display || (a.g.P = Date.now(), a.g.A && a.g.h && (a.g.A.style.display = "none", a.g.h.style.display = "block"))
    }

    function mc(a, b) {
        window.clearTimeout(a.g.s);
        a.g.s = window.setTimeout(function() {
            return oc(a)
        }, b)
    }

    function oc(a) {
        window.clearTimeout(a.g.s);
        a.g.s = null;
        a.g.A && a.g.h && (a.g.A.style.display = "block", a.g.h.style.display = "none")
    }
    ic.prototype.preventDefault = function(a) {
        if (this.g.h && "block" == this.g.h.style.display && 500 > Date.now() - this.g.P) Q(a);
        else if (this.g.openAttributionInline) {
            var b = this.g.o.getAttribute("href");
            window.adSlot ? window.adSlot.openAttribution(b) && Q(a) : window.openAttribution && (window.openAttribution(b), Q(a))
        } else this.g.aa && (b = this.g.o.getAttribute("href"), window.adSlot ? window.adSlot.openSystemBrowser(b) && Q(a) : window.openSystemBrowser && (window.openSystemBrowser(b), Q(a)))
    };

    function pc(a) {
        var b = qc,
            c = this;
        if (!b) throw Error("bad ctor");
        this.i = b;
        this.h = a;
        this.g = !1;
        mb("goog_delegate_deferred") ? void 0 !== R.goog_delegate_deferred_token ? rc(this) : (a = function() {
            rc(c)
        }, R.goog_delegate_deferred_token = a, setTimeout(a, 5E3)) : rc(this)
    }

    function rc(a) {
        if (!a.g && (a.g = !0, R.goog_delegate_deferred_token = void 0, a.h)) {
            var b = a.i;
            a = JSON.stringify(a.h);
            if (null == a || "" == a) a = new cb;
            else {
                a = JSON.parse(a);
                if (!Array.isArray(a)) throw Error(void 0);
                M = a = Ea(a);
                a = new cb(a);
                M = null
            }
            if (!a) throw Error("bad attrdata");
            a = new Bb(a);
            new b(a)
        }
    };

    function sc() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function tc() {
        var a = new sc;
        return {
            promise: a.promise,
            resolve: a.resolve
        }
    };

    function uc(a, b) {
        b = void 0 === b ? function() {} : b;
        a.google_llp || (a.google_llp = {});
        a = a.google_llp;
        var c = a[5];
        if (c) return c;
        c = tc();
        a[5] = c;
        b();
        return c
    }

    function vc(a, b) {
        return uc(a, function() {
            var c = a.document,
                d = rb("SCRIPT", c);
            d.src = b instanceof fb && b.constructor === fb ? b.g : "type_error:TrustedResourceUrl";
            var f, h, e = null == (h = (f = (d.ownerDocument && d.ownerDocument.defaultView || window).document).querySelector) ? void 0 : h.call(f, "script[nonce]");
            (f = e ? e.nonce || e.getAttribute("nonce") || "" : "") && d.setAttribute("nonce", f);
            (c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
        }).promise
    };

    function qc(a) {
        var b = this;
        this.g = a;
        this.h = new ic(this.g, X(359, function() {
            return wc(b)
        }))
    }

    function wc(a) {
        a.g.D ? a.g.D.expandAttributionCard() : (dc(373, function() {
            oc(a.h);
            nc(a.h)
        }), vc(window, hb("https://pagead2.googlesyndication.com/pagead/js/" + (H(B(a.g.g, 33), "") + "/abg_survey.js"))).then(function(b) {
            b.createAttributionCard(a.g);
            a.g.D = b;
            b.expandAttributionCard()
        }), xb())
    }

    function xc(a) {
        var b = [a];
        b = void 0 === b ? [] : b;
        v.google_logging_queue || (v.google_logging_queue = []);
        v.google_logging_queue.push([11, b]);
        new pc(a)
    };
    ub = 60;
    var yc = wb(60);
    if (null == yc) throw Error("JSC not found 60");
    for (var zc = {}, Ac = yc.attributes, Bc = Ac.length - 1; 0 <= Bc; Bc--) {
        var Cc = Ac[Bc].name;
        0 === Cc.indexOf("data-jcp-") && (zc[Cc.substring(9)] = Ac[Bc].value)
    }
    if (zc["attribution-data"]) xc(JSON.parse(zc["attribution-data"]));
    else {
        var Dc = ["buildAttribution"],
            Y = v;
        Dc[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + Dc[0]);
        for (var Z; Dc.length && (Z = Dc.shift());) Dc.length || void 0 === xc ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = xc
    };
}).call(this);