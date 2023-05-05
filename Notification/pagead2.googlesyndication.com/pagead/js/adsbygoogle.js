(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n, aa;

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
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        p = {},
        ha = {};

    function r(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function t(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in p ? f = p : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    t("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ia(a) {
        a = {
            next: a
        };
        a[r(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function ja(a) {
        return a.raw = a
    }

    function v(a) {
        var b = "undefined" != typeof p.Symbol && r(p.Symbol, "iterator") && a[r(p.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function ka(a) {
        if (!(a instanceof Array)) {
            a = v(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    function la(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var ma = fa && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) la(d, e) && (a[e] = d[e])
        }
        return a
    };
    t("Object.assign", function(a) {
        return a || ma
    }, "es6");
    var na = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        oa;
    if (fa && "function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa;

    function w(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.ec = b.prototype
    }

    function ta() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    t("Promise", function(a) {
        function b(g) {
            this.g = 0;
            this.i = void 0;
            this.h = [];
            this.v = !1;
            var h = this.j();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.g = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.i(function() {
                    h.l()
                })
            }
            this.g.push(g)
        };
        var e = ea.setTimeout;
        c.prototype.i = function(g) {
            e(g, 0)
        };
        c.prototype.l = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.j(l)
                    }
                }
            }
            this.g = null
        };
        c.prototype.j = function(g) {
            this.i(function() {
                throw g;
            })
        };
        b.prototype.j = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.R),
                reject: g(this.l)
            }
        };
        b.prototype.R = function(g) {
            if (g === this) this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.Y(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.P(g) : this.u(g)
            }
        };
        b.prototype.P = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.l(k);
                return
            }
            "function" == typeof h ? this.ja(h, g) : this.u(g)
        };
        b.prototype.l = function(g) {
            this.B(2, g)
        };
        b.prototype.u = function(g) {
            this.B(1, g)
        };
        b.prototype.B = function(g, h) {
            if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.i = h;
            2 === this.g && this.T();
            this.G()
        };
        b.prototype.T = function() {
            var g = this;
            e(function() {
                if (g.I()) {
                    var h = ea.console;
                    "undefined" !== typeof h && h.error(g.i)
                }
            }, 1)
        };
        b.prototype.I =
            function() {
                if (this.v) return !1;
                var g = ea.CustomEvent,
                    h = ea.Event,
                    k = ea.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.i;
                return k(g)
            };
        b.prototype.G = function() {
            if (null != this.h) {
                for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                this.h = null
            }
        };
        var f = new c;
        b.prototype.Y = function(g) {
            var h = this.j();
            g.la(h.resolve, h.reject)
        };
        b.prototype.ja = function(g, h) {
            var k = this.j();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(u, y) {
                return "function" == typeof u ? function(G) {
                    try {
                        l(u(G))
                    } catch (B) {
                        m(B)
                    }
                } : y
            }
            var l, m, q = new b(function(u, y) {
                l = u;
                m = y
            });
            this.la(k(g, l), k(h, m));
            return q
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.la = function(g, h) {
            function k() {
                switch (l.g) {
                    case 1:
                        g(l.i);
                        break;
                    case 2:
                        h(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.g);
                }
            }
            var l = this;
            null == this.h ? f.h(k) : this.h.push(k);
            this.v = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = v(g), m = l.next(); !m.done; m = l.next()) d(m.value).la(h, k)
            })
        };
        b.all = function(g) {
            var h = v(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function q(G) {
                    return function(B) {
                        u[G] = B;
                        y--;
                        0 == y && l(u)
                    }
                }
                var u = [],
                    y = 0;
                do u.push(void 0), y++, d(k.value).la(q(u.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    t("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    t("WeakMap", function(a) {
        function b(g) {
            this.g = (f += Math.random() + 1).toString();
            if (g) {
                g = v(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!la(g, e)) {
                var k = new c;
                ca(g, e, {
                    value: k
                })
            }
            if (!la(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.g] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && la(g, e) ? g[e][this.g] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && la(g, e) && la(g[e], this.g)
        };
        b.prototype.delete = function(g) {
            return d(g) && la(g, e) && la(g[e], this.g) ? delete g[e][this.g] : !1
        };
        return b
    }, "es6");
    t("Map", function(a) {
        function b() {
            var h = {};
            return h.N = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.g;
            return ia(function() {
                if (l) {
                    for (; l.head != h.g;) l = l.N;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.h[l];
            if (m && la(h.h, l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: m,
                        index: h,
                        C: q
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                C: void 0
            }
        }

        function e(h) {
            this.h = {};
            this.g = b();
            this.size = 0;
            if (h) {
                h = v(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(v([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.h[l.id] = []);
            l.C ? l.C.value = k : (l.C = {
                next: this.g,
                N: this.g.N,
                head: this.g,
                key: h,
                value: k
            }, l.list.push(l.C), this.g.N.next = l.C, this.g.N = l.C, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.C && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.C.N.next = h.C.next, h.C.next.N = h.C.N, h.C.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.h = {};
            this.g = this.g.N = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).C
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).C) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[r(p.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function ua(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
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
        e[r(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ua(this, function(b) {
                return b
            })
        }
    }, "es6");
    t("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    t("Set", function(a) {
        function b(c) {
            this.g = new p.Map;
            if (c) {
                c = v(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(v([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return r(this.g, "values").call(this.g)
        };
        b.prototype.keys = r(b.prototype,
            "values");
        b.prototype[r(p.Symbol, "iterator")] = r(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");

    function va(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    t("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = va(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    t("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = va(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    t("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    t("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ua(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    t("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || r(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== va(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    t("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = va(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? r(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    t("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return p.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return p.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var x = this || self;

    function wa(a) {
        a = a.split(".");
        for (var b = x, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function xa(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ya(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function za(a) {
        return Object.prototype.hasOwnProperty.call(a, Aa) && a[Aa] || (a[Aa] = ++Ba)
    }
    var Aa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ba = 0;

    function Ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Da(a, b, c) {
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

    function Ea(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ea = Ca : Ea = Da;
        return Ea.apply(null, arguments)
    }

    function Fa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ga(a, b) {
        a = a.split(".");
        var c = x;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ha(a) {
        return a
    };
    var Ia = (new Date).getTime();

    function Ja(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ka(a, b) {
        var c = 0;
        a = Ja(String(a)).split(".");
        b = Ja(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = La(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || La(0 == f[2].length, 0 == g[2].length) || La(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function La(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Ma() {
        var a = x.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function z(a) {
        return -1 != Ma().indexOf(a)
    };

    function Na() {
        return z("Trident") || z("MSIE")
    }

    function Oa() {
        return (z("Chrome") || z("CriOS")) && !z("Edge") || z("Silk")
    }

    function Pa(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[r(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }

    function Qa() {
        var a = Ma();
        if (Na()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Pa(b);
        return z("Opera") ? a(["Version", "Opera"]) :
            z("Edge") ? a(["Edge"]) : z("Edg/") ? a(["Edg"]) : z("Silk") ? a(["Silk"]) : Oa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ra(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Sa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ta(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ua(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Va(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Wa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Xa(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ya(a, b) {
        return 0 <= Ra(a, b)
    }

    function Za(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function $a(a) {
        $a[" "](a);
        return a
    }
    $a[" "] = function() {};
    var ab = Na();
    !z("Android") || Oa();
    Oa();
    !z("Safari") || Oa();
    var bb = {},
        cb = null;

    function db(a) {
        var b;
        void 0 === b && (b = 0);
        eb();
        b = bb[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function fb(a) {
        var b = [];
        gb(a, function(c) {
            b.push(c)
        });
        return b
    }

    function gb(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = cb[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        eb();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function eb() {
        if (!cb) {
            cb = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                bb[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === cb[f] && (cb[f] = e)
                }
            }
        }
    };
    var hb = "undefined" !== typeof Uint8Array,
        ib = {};
    var jb;

    function kb(a) {
        if (ib !== ib) throw Error("illegal external caller");
        this.wa = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    kb.prototype.isEmpty = function() {
        return null == this.wa
    };
    var lb = "function" === typeof p.Symbol && "symbol" === typeof(0, p.Symbol)() ? (0, p.Symbol)(void 0) : void 0;

    function mb(a, b) {
        Object.isFrozen(a) || (lb ? a[lb] |= b : void 0 !== a.J ? a.J |= b : Object.defineProperties(a, {
            J: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function nb(a, b) {
        Object.isExtensible(a) && (lb ? a[lb] && (a[lb] &= ~b) : void 0 !== a.J && (a.J &= ~b))
    }

    function ob(a) {
        var b;
        lb ? b = a[lb] : b = a.J;
        return null == b ? 0 : b
    }

    function pb(a, b) {
        lb ? a[lb] = b : void 0 !== a.J ? a.J = b : Object.defineProperties(a, {
            J: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function qb(a) {
        mb(a, 1);
        return a
    }

    function rb(a) {
        mb(a, 17);
        return a
    }

    function sb(a) {
        return a ? !!(ob(a) & 2) : !1
    }

    function tb(a) {
        mb(a, 16);
        return a
    }

    function ub(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        nb(a, 16)
    };
    var vb = {};

    function wb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var xb, yb = Object,
        zb = yb.freeze,
        Ab = [];
    mb(Ab, 3);
    var Bb = zb.call(yb, Ab);

    function Cb(a) {
        if (sb(a.m)) throw Error("Cannot mutate an immutable Message");
    };

    function Db(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (hb && null != a && a instanceof Uint8Array) return db(a);
                    if (a instanceof kb) {
                        var b = a.wa;
                        return null == b ? "" : "string" === typeof b ? b : a.wa = db(b)
                    }
                }
        }
        return a
    };

    function Eb(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Fb(a, b, c, void 0 !== d);
            else if (wb(a)) {
                var e = {},
                    f;
                for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = Eb(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Fb(a, b, c, d) {
        d = d ? !!(ob(a) & 16) : void 0;
        var e = Array.prototype.slice.call(a);
        c(a, e);
        for (a = 0; a < e.length; a++) e[a] = Eb(e[a], b, c, d);
        return e
    }

    function Gb(a) {
        return a.Sa === vb ? a.toJSON() : Db(a)
    }

    function Hb() {};

    function A(a, b, c) {
        return -1 === b ? null : b >= a.X ? a.A ? a.A[b] : void 0 : (void 0 === c ? 0 : c) && a.A && (c = a.A[b], null != c) ? c : a.m[b + a.U]
    }

    function C(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        (void 0 === e ? 0 : e) || Cb(a);
        a.Na && (a.Na = void 0);
        if (b >= a.X || d) return (a.A || (a.A = a.m[a.X + a.U] = {}))[b] = c, a;
        void 0 !== a.A && a.X >= a.m.length ? (d = a.m.length - 1, e = b + a.U, e >= d ? (a.m[d] = void 0, a.m[e] = c, a.m.push(a.A)) : a.m[e] = c) : a.m[b + a.U] = c;
        void 0 !== a.A && b in a.A && delete a.A[b];
        return a
    }

    function Ib(a, b, c) {
        return void 0 !== Jb(a, b, Kb(a, Lb, c))
    }

    function Mb(a, b, c, d) {
        var e = A(a, b, d);
        Array.isArray(e) || (e = Bb);
        var f = ob(e);
        f & 1 || qb(e);
        sb(a.m) ? (f & 2 || mb(e, 2), c & 1 || Object.freeze(e)) : e === Bb || !(c & 1 && c & 2) && f & 2 ? (e = qb(Array.prototype.slice.call(e)), C(a, b, e, d)) : !(c & 2) && f & 16 && ub(e);
        return e
    }

    function Nb(a, b) {
        a = A(a, b);
        return null == a ? a : !!a
    }

    function Ob(a, b) {
        var c = Mb(a, b, 1, !1);
        if (c.length && !(ob(c) & 4)) {
            Object.isFrozen(c) && (c = qb(c.slice()), C(a, b, c, !1, !0));
            for (var d = b = 0; b < c.length; b++) {
                var e = c[b];
                null != e && (c[d++] = e)
            }
            d < b && (c.length = d);
            mb(c, 5)
        }
        sb(a.m) && !Object.isFrozen(c) && (mb(c, 2), Object.freeze(c));
        return c
    }

    function D(a, b) {
        a = A(a, b);
        return null == a ? 0 : a
    }

    function Pb(a, b, c) {
        null == c ? c = Bb : qb(c);
        return C(a, b, c)
    }

    function Qb(a, b, c) {
        Cb(a);
        0 !== c ? C(a, b, c) : C(a, b, void 0, !1);
        return a
    }

    function Rb(a, b, c, d) {
        Cb(a);
        (c = Sb(a, c)) && c !== b && null != d && C(a, c, void 0, !1);
        return C(a, b, d)
    }

    function Kb(a, b, c) {
        return Sb(a, b) === c ? c : -1
    }

    function Sb(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != A(a, e) && (0 !== c && C(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function Jb(a, b, c, d) {
        var e = A(a, c, d);
        var f = !1;
        var g = null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.Sa !== vb ? f ? new b(e) : void 0 : e;
        g !== e && null != g && (C(a, c, g, d, !0), mb(g.m, ob(a.m) & -33));
        return g
    }

    function E(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Jb(a, b, c, d);
        if (null == b) return b;
        sb(b.m) && !sb(a.m) && (b = Tb(b), C(a, c, b, d));
        return b
    }

    function Ub(a, b, c, d, e) {
        e = void 0 === e ? !0 : e;
        a.g || (a.g = {});
        var f = a.g[c],
            g = Mb(a, c, 3, d),
            h = sb(a.m),
            k = !!(ob(a.m) & 16),
            l = sb(g),
            m = h || l;
        !e && l && (g = qb(Array.prototype.slice.call(g)), C(a, c, g, d));
        if (!f) {
            f = [];
            d = m;
            for (l = 0; l < g.length; l++) {
                var q = g[l];
                d = d || sb(q);
                var u = b,
                    y = k,
                    G = !1;
                G = void 0 === G ? !1 : G;
                y = void 0 === y ? !1 : y;
                q = Array.isArray(q) ? new u(y ? tb(q) : q) : G ? new u : void 0;
                void 0 !== q && (f.push(q), m && mb(q.m, 2))
            }
            a.g[c] = f;
            b = g;
            Object.isFrozen(b) || (g = ob(b) | 33, pb(b, d ? g & -9 : g | 8))
        }
        e = h || e;
        h = sb(f);
        e && !h && (Object.isFrozen(f) && (a.g[c] = f = f.slice()),
            mb(f, 2), Object.freeze(f));
        !e && h && (a.g[c] = f = f.slice());
        return f
    }

    function F(a, b, c) {
        var d = void 0 === d ? !1 : d;
        var e = sb(a.m);
        b = Ub(a, b, c, d, e);
        a = Mb(a, c, 3, d);
        if (e = !e && a) {
            if (!a) throw Error("cannot check mutability state of non-array");
            e = !(ob(a) & 8)
        }
        if (e) {
            for (e = 0; e < b.length; e++)(c = b[e]) && sb(c.m) && (c = e, d = Tb(b[e]), b[c] = d, a[e] = b[e].m);
            mb(a, 8)
        }
        return b
    }

    function Vb(a, b, c) {
        Cb(a);
        null == c && (c = void 0);
        return C(a, b, c)
    }

    function Wb(a, b, c, d) {
        Cb(a);
        null == d && (d = void 0);
        return Rb(a, b, c, d)
    }

    function Xb(a, b, c) {
        Cb(a);
        if (null != c) {
            var d = qb([]);
            for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].m, e = e || sb(d[f]);
            a.g || (a.g = {});
            a.g[b] = c;
            c = d;
            e ? nb(c, 8) : mb(c, 8)
        } else a.g && (a.g[b] = void 0), d = Bb;
        return C(a, b, d)
    }

    function I(a, b) {
        return null == a ? b : a
    }

    function J(a, b) {
        return I(A(a, b), "")
    }

    function Yb(a, b, c) {
        return I(Nb(a, b), void 0 === c ? !1 : c)
    }

    function Zb(a, b) {
        a = A(a, b);
        return I(null == a ? a : +a, 0)
    }

    function $b(a, b, c, d) {
        return E(a, b, Kb(a, d, c))
    };

    function ac(a, b, c, d, e, f) {
        (a = a.g && a.g[c]) ? (e = f.ta ? qb(a.slice()) : a, Xb(b, c, e)) : (null != d ? hb && d instanceof Uint8Array ? e = d.length ? new kb(new Uint8Array(d)) : jb || (jb = new kb(null)) : (Array.isArray(d) && (e ? mb(d, 2) : d && ob(d) & 1 && f.ta ? (e = Array.prototype.slice.call(d), pb(e, (ob(d) | 0) & -51), d = e) : ub(d)), e = d) : e = void 0, C(b, c, e))
    };

    function Tb(a) {
        if (!sb(a.m)) return a;
        var b = {
                ta: !0
            },
            c = sb(a.m);
        if (c && !b.ta) throw Error("copyRepeatedFields must be true for frozen messages");
        c || ub(a.m);
        var d = new a.constructor;
        a.Oa && (d.Oa = a.Oa.slice());
        for (var e = a.m, f = 0; f < e.length; f++) {
            var g = e[f];
            if (f === e.length - 1 && wb(g))
                for (var h in g) {
                    if (Object.prototype.hasOwnProperty.call(g, h)) {
                        var k = +h;
                        r(Number, "isNaN").call(Number, k) ? (d.A || (d.A = d.m[d.X + d.U] = {}))[h] = g[h] : ac(a, d, k, g[h], c, b)
                    }
                } else ac(a, d, f - a.U, g, c, b)
        }
        d.Na = a;
        return d
    };

    function K(a, b, c) {
        null == a && (a = bc);
        bc = null;
        var d = this.constructor.g || 0,
            e = 0 < d,
            f = this.constructor.messageId,
            g = !1;
        if (null == a) {
            var h = f ? [f] : [];
            mb(h, 48);
            a = h;
            h = !0
        } else if (h = !!(ob(a) & 16)) g = ob(a), pb(a, g | 32), g = !!(g & 32);
        e && 0 < a.length && wb(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.U = (f ? 0 : -1) - d;
        this.g = void 0;
        this.m = a;
        a: {
            f = this.m.length;d = f - 1;
            if (f && (f = this.m[d], wb(f))) {
                this.A = f;
                b = r(Object, "keys").call(Object, f);
                if (f = 0 < b.length) b: {
                    f = isNaN;a = b.length;
                    for (var k = "string" === typeof b ? b.split("") : b, l = 0; l < a; l++)
                        if (l in
                            k && !f.call(void 0, k[l], l, b)) {
                            f = !1;
                            break b
                        }
                    f = !0
                }
                f ? this.X = Number.MAX_VALUE : this.X = d - this.U;
                break a
            }
            void 0 !== b && -1 < b ? (this.X = Math.max(b, d + 1 - this.U), this.A = void 0) : this.X = Number.MAX_VALUE
        }
        if (!e && this.A && "g" in this.A) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = h && !g ? rb : qb, h = 0; h < c.length; h++) g = c[h], (d = A(this, g)) ? Array.isArray(d) && e(d) : C(this, g, Bb, !1, !0)
    }
    K.prototype.toJSON = function() {
        var a = this.m;
        return xb ? a : Fb(a, Gb, Hb)
    };

    function cc(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        bc = b = tb(b);
        a = new a(b);
        bc = null;
        return a
    }
    K.prototype.Sa = vb;

    function dc(a, b) {
        return Db(b)
    }
    var bc;

    function ec(a) {
        return null !== a && void 0 !== a
    }
    var fc = void 0;

    function gc(a, b) {
        var c = fc;
        fc = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function hc(a) {
        K.call(this, a, -1, ic)
    }
    w(hc, K);

    function jc(a) {
        K.call(this, a)
    }
    w(jc, K);
    var ic = [2, 3];

    function kc(a, b) {
        this.h = a === lc && b || "";
        this.g = mc
    }
    var mc = {},
        lc = {};
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function nc(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function oc(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function pc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function qc(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var rc;

    function sc() {
        if (void 0 === rc) {
            var a = null,
                b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ha,
                        createScript: Ha,
                        createScriptURL: Ha
                    })
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                rc = a
            } else rc = a
        }
        return rc
    };
    var tc = {};

    function uc(a, b) {
        this.g = b === tc ? a : ""
    }
    uc.prototype.toString = function() {
        return this.g.toString()
    };

    function vc(a, b) {
        this.g = b === wc ? a : ""
    }
    vc.prototype.toString = function() {
        return this.g + ""
    };

    function xc(a, b) {
        a = yc.exec(zc(a).toString());
        var c = a[3] || "";
        return Ac(a[1] + Bc("?", a[2] || "", b) + Bc("#", c))
    }

    function zc(a) {
        return a instanceof vc && a.constructor === vc ? a.g : "type_error:TrustedResourceUrl"
    }
    var yc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        wc = {};

    function Ac(a) {
        var b = sc();
        a = b ? b.createScriptURL(a) : a;
        return new vc(a, wc)
    }

    function Bc(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function Cc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Dc(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Ec(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Fc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Gc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function Hc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Ic(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!xa(f) || ya(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ya(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Sa(g ? Za(f) : f, d)
            }
        }
    }

    function Jc(a) {
        this.g = a || x.document || document
    }
    n = Jc.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.g;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };
    n.append = function(a, b) {
        Ic(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Kc() {
        return !Lc() && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"))
    }

    function Lc() {
        return z("iPad") || z("Android") && !z("Mobile") || z("Silk")
    };
    var Mc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Nc = /#|$/;

    function Oc(a, b) {
        var c = a.search(Nc);
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
    };

    function Pc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    $a(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Qc(a) {
        return Pc(a.top) ? a.top : null
    }

    function Rc(a, b) {
        var c = Sc("SCRIPT", a);
        c.src = zc(b);
        var d, e;
        (d = (b = null == (e = (d = (c.ownerDocument && c.ownerDocument.defaultView || window).document).querySelector) ? void 0 : e.call(d, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Tc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Uc(a, b) {
        if (!Vc() && !Wc()) {
            var c = Math.random();
            if (c < b) return c = Xc(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Xc() {
        if (!p.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            p.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Yc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Zc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Wc = Dc(function() {
            return Va(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], $c) || 1E-4 > Math.random()
        }),
        Vc = Dc(function() {
            return $c("MSIE")
        });

    function $c(a) {
        return -1 != Ma().indexOf(a)
    }
    var ad = /^([0-9.]+)px$/,
        bd = /^(-?[0-9.]{1,30})$/;

    function ed(a) {
        if (!bd.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function L(a) {
        return (a = ad.exec(a)) ? +a[1] : null
    }

    function fd(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var gd = Dc(function() {
        return Kc() ? 2 : Lc() ? 1 : 0
    });

    function hd(a, b) {
        Yc(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    }
    var id = [];

    function jd() {
        var a = id;
        id = [];
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function kd(a, b) {
        if (a.length && b.head) {
            a = v(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = Sc("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }

    function ld(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function md(a) {
        var b = nd;
        "complete" === b.readyState || "interactive" === b.readyState ? (id.push(a), 1 == id.length && (p.Promise ? p.Promise.resolve().then(jd) : window.setImmediate ? setImmediate(jd) : setTimeout(jd, 0))) : b.addEventListener("DOMContentLoaded", a)
    }

    function Sc(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var od = null;
    var nd = document,
        M = window;
    var pd = null;

    function qd(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        x.google_logging_queue || (c = !0, x.google_logging_queue = []);
        x.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == pd) {
                pd = !1;
                try {
                    var d = Qc(x);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (pd = !0);
                    x.localStorage.getItem("google_logging") && (pd = !0)
                } catch (e) {}
            }
            a = pd
        }
        a && (d = x.document, a = new kc(lc, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = Ac(a instanceof kc && a.constructor === kc && a.g === mc ? a.h : "type_error:Const"), Rc(d, a))
    };

    function rd(a) {
        a = void 0 === a ? x : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    }

    function sd(a) {
        return (a = void 0 === a ? rd() : a) ? Pc(a.master) ? a.master : null : null
    };

    function td(a) {
        var b = ta.apply(1, arguments);
        if (0 === b.length) return Ac(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Ac(c.join(""))
    };

    function ud(a) {
        var b = void 0 === b ? 1 : b;
        a = sd(rd(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function vd(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function wd() {
        var a = void 0 === a ? M : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function xd(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var yd = {
        Pb: 0,
        Ob: 1,
        Lb: 2,
        Gb: 3,
        Mb: 4,
        Hb: 5,
        Nb: 6,
        Jb: 7,
        Kb: 8,
        Fb: 9,
        Ib: 10
    };
    var zd = {
        Rb: 0,
        Sb: 1,
        Qb: 2
    };

    function Ad() {
        this.h = new Bd(this);
        this.g = 0
    }
    Ad.prototype.resolve = function(a) {
        Cd(this);
        this.g = 1;
        this.j = a;
        Dd(this.h)
    };
    Ad.prototype.reject = function(a) {
        Cd(this);
        this.g = 2;
        this.i = a;
        Dd(this.h)
    };

    function Cd(a) {
        if (0 != a.g) throw Error("Already resolved/rejected.");
    }

    function Bd(a) {
        this.g = a
    }
    Bd.prototype.then = function(a, b) {
        if (this.h) throw Error("Then functions already set.");
        this.h = a;
        this.i = b;
        Dd(this)
    };

    function Dd(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.h && a.h(a.g.j);
                break;
            case 2:
                a.i && a.i(a.g.i);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function Ed(a) {
        this.g = a.slice(0)
    }
    n = Ed.prototype;
    n.forEach = function(a) {
        var b = this;
        this.g.forEach(function(c, d) {
            return void a(c, d, b)
        })
    };
    n.filter = function(a) {
        return new Ed(Ta(this.g, a))
    };
    n.apply = function(a) {
        return new Ed(a(this.g.slice(0)))
    };
    n.sort = function(a) {
        return new Ed(this.g.slice(0).sort(a))
    };
    n.get = function(a) {
        return this.g[a]
    };
    n.add = function(a) {
        var b = this.g.slice(0);
        b.push(a);
        return new Ed(b)
    };

    function Fd(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function Gd() {
        this.g = {};
        this.h = {}
    }
    Gd.prototype.set = function(a, b) {
        var c = Hd(a);
        this.g[c] = b;
        this.h[c] = a
    };
    Gd.prototype.get = function(a, b) {
        a = Hd(a);
        return void 0 !== this.g[a] ? this.g[a] : b
    };
    Gd.prototype.clear = function() {
        this.g = {};
        this.h = {}
    };

    function Hd(a) {
        return a instanceof Object ? String(za(a)) : a + ""
    };

    function Id(a, b) {
        this.g = a;
        this.h = b
    }

    function Jd(a) {
        return null != a.g ? a.g.value : null
    }

    function Kd(a, b) {
        null != a.g && b(a.g.value);
        return a
    }
    Id.prototype.map = function(a) {
        return null != this.g ? (a = a(this.g.value), a instanceof Id ? a : Ld(a)) : this
    };

    function Md(a, b) {
        null != a.g || b(a.h);
        return a
    }

    function Ld(a) {
        return new Id({
            value: a
        }, null)
    }

    function Nd(a) {
        return new Id(null, a)
    }

    function Od(a) {
        try {
            return Ld(a())
        } catch (b) {
            return Nd(b)
        }
    };

    function Pd(a) {
        this.g = new Gd;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    Pd.prototype.add = function(a) {
        this.g.set(a, !0)
    };
    Pd.prototype.contains = function(a) {
        return void 0 !== this.g.g[Hd(a)]
    };

    function Qd() {
        this.g = new Gd
    }
    Qd.prototype.set = function(a, b) {
        var c = this.g.get(a);
        c || (c = new Pd, this.g.set(a, c));
        c.add(b)
    };

    function N(a) {
        K.call(this, a, -1, Rd)
    }
    w(N, K);
    N.prototype.getId = function() {
        return A(this, 3)
    };
    var Rd = [4];

    function Sd(a) {
        var b = void 0 === a.Ja ? void 0 : a.Ja,
            c = void 0 === a.pb ? void 0 : a.pb,
            d = void 0 === a.Wa ? void 0 : a.Wa;
        this.g = void 0 === a.ib ? void 0 : a.ib;
        this.j = new Ed(b || []);
        this.i = d;
        this.h = c
    };

    function Td(a) {
        var b = [],
            c = a.j;
        c && c.g.length && b.push({
            aa: "a",
            fa: Ud(c)
        });
        null != a.g && b.push({
            aa: "as",
            fa: a.g
        });
        null != a.h && b.push({
            aa: "i",
            fa: String(a.h)
        });
        null != a.i && b.push({
            aa: "rp",
            fa: String(a.i)
        });
        b.sort(function(d, e) {
            return d.aa.localeCompare(e.aa)
        });
        b.unshift({
            aa: "t",
            fa: "aa"
        });
        return b
    }

    function Ud(a) {
        a = a.g.slice(0).map(Vd);
        a = JSON.stringify(a);
        return Zc(a)
    }

    function Vd(a) {
        var b = {};
        null != A(a, 7) && (b.q = A(a, 7));
        null != A(a, 2, !1) && (b.o = A(a, 2));
        null != A(a, 5, !1) && (b.p = A(a, 5));
        return b
    };

    function Wd(a) {
        K.call(this, a)
    }
    w(Wd, K);
    Wd.prototype.setLocation = function(a) {
        return C(this, 1, a)
    };

    function Xd(a, b) {
        this.La = a;
        this.Va = b
    }

    function Yd(a) {
        var b = [].slice.call(arguments).filter(Cc(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.La || []);
            d = r(Object, "assign").call(Object, d, e.Va)
        });
        return new Xd(c, d)
    }

    function Zd(a) {
        switch (a) {
            case 1:
                return new Xd(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Xd(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Xd(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Xd(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function $d(a) {
        if (null == a) a = null;
        else {
            var b = Td(a);
            a = [];
            b = v(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.fa);
                a.push(c.aa + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new Xd(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var ae = {},
        be = new Xd(["google-auto-placed"], (ae.google_reactive_ad_format = 40, ae.google_tag_origin = "qs", ae));

    function ce(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = Sc("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        g = Ra(f, d);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                Gc(d, "load", e);
                Gc(d, "error", e)
            };
            Fc(d, "load", e);
            Fc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    function de(a) {
        var b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=dtt_err";
        Yc(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        ee(c, b)
    }

    function ee(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : ce(c, a, void 0 === b ? !1 : b)
    };

    function fe() {
        this.i = "&";
        this.h = {};
        this.j = 0;
        this.g = []
    }

    function ge(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function he(a, b, c, d, e) {
        var f = [];
        Yc(a, function(g, h) {
            (g = ie(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function ie(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(ie(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(he(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function je(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = ke(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(m, q) {
            return m - q
        });
        b = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = he(h[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.i;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }

    function ke(a) {
        var b = 1,
            c;
        for (c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    };

    function le() {
        this.g = Math.random()
    }

    function me() {
        var a = ne,
            b = x.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }

    function oe(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .01)) try {
            if (c instanceof fe) var f = c;
            else f = new fe, Yc(c, function(h, k) {
                var l = f,
                    m = l.j++;
                h = ge(k, h);
                l.g.push(m);
                l.h[m] = h
            });
            var g = je(f, "/pagead/gen_204?id=" + b + "&");
            g && ce(x, g, !1)
        } catch (h) {}
    };
    var pe = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function qe() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new re;
        this.sideRailProcessedFixedElements = new p.Set;
        this.sideRailAvailableSpace = new p.Map
    }

    function se(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new p.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new p.Map)) : a.google_reactive_ads_global_state = new qe;
        return a.google_reactive_ads_global_state
    }

    function re() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function te(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function ue(a) {
        return te(a).clientWidth
    };

    function ve(a) {
        a = a.getBoundingClientRect();
        return 0 < a.width && 0 < a.height
    }

    function we(a) {
        var b = 0;
        a.forEach(function(c) {
            return b = Math.max(b, c.getBoundingClientRect().width)
        });
        return function(c) {
            return c.getBoundingClientRect().width > .5 * b
        }
    }

    function xe(a) {
        var b = te(a).clientHeight || 0;
        return function(c) {
            return c.getBoundingClientRect().height >= .75 * b
        }
    }

    function ye(a, b) {
        return a.getBoundingClientRect().top - b.getBoundingClientRect().top
    };

    function ze(a) {
        K.call(this, a)
    }
    w(ze, K);

    function Ae(a) {
        K.call(this, a)
    }
    w(Ae, K);

    function Be(a) {
        K.call(this, a, -1, Ce)
    }
    w(Be, K);

    function De(a) {
        K.call(this, a)
    }
    w(De, K);
    var Ce = [1];

    function Ee(a) {
        K.call(this, a, -1, Fe)
    }
    w(Ee, K);

    function Ge(a) {
        K.call(this, a)
    }
    w(Ge, K);
    var Fe = [1];

    function He(a) {
        K.call(this, a)
    }
    w(He, K);

    function Ie(a) {
        K.call(this, a)
    }
    w(Ie, K);

    function Je(a) {
        K.call(this, a, -1, Ke)
    }
    w(Je, K);
    var Ke = [6, 7, 9, 10, 11];

    function Le(a, b, c, d) {
        this.j = a;
        this.h = b;
        this.i = c;
        this.g = d
    }
    Le.prototype.query = function(a) {
        var b = [];
        try {
            b = a.querySelectorAll(this.j)
        } catch (f) {}
        if (!b.length) return [];
        a = Za(b);
        a = Ne(this, a);
        "number" === typeof this.h && (b = this.h, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
        if ("number" === typeof this.i) {
            b = [];
            for (var c = 0; c < a.length; c++) {
                var d = Oe(a[c]),
                    e = this.i;
                0 > e && (e += d.length);
                0 <= e && e < d.length && b.push(d[e])
            }
            a = b
        }
        return a
    };
    Le.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.j,
            occurrenceIndex: this.h,
            paragraphIndex: this.i,
            ignoreMode: this.g
        })
    };

    function Ne(a, b) {
        if (null == a.g) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }

    function Oe(a) {
        var b = [];
        Fd(a.getElementsByTagName("p"), function(c) {
            100 <= Pe(c) && b.push(c)
        });
        return b
    }

    function Pe(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Fd(a.childNodes, function(c) {
            b += Pe(c)
        });
        return b
    }

    function Qe(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function Re(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };

    function O(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function Se(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function Te(a, b) {
        b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var Ue = new O(1082, !0),
        Ve = new O(1209),
        We = new Se(1130, 100),
        Xe = new function(a, b) {
            this.g = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        Ye = new O(316),
        Ze = new O(1207),
        $e = new O(313),
        af = new O(369),
        bf = new O(1129, !0),
        cf = new O(1128),
        df = new O(1171),
        ef = new O(1201, !0),
        ff = new O(217),
        gf = new O(1212),
        hf = new O(1211),
        jf = new O(1198),
        kf = new O(1206, !0),
        lf = new O(1210),
        mf = new O(1086),
        nf = new Se(1079, 5),
        of = new Te(1934, ["A+cA2PUOfIOKAdSDJOW5CP9ZlxONy1yu+hqAq72zUtKw4rLdihqRp6Nui/jUyCyegr+BUtH+C+Elv0ufn05yBQEAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A+zsdH3aNZT/bkjT8U/o5ACzyaeNYzTvtoVmwf/KOilfv39pxY2AIsOwhQJv+YnXp98i3TqrQibIVtMWs5UHjgoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "AxceVEhIegcDEHqLXFQ2+vPKqzCppoJYsRCZ/BdfVnbM/sUUF2BXV8lwNosyYjvoxnTh2FC8cOlAnA5uULr/zAUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        pf = new O(203),
        qf = new O(84),
        rf = new O(1162),
        sf = new O(1120),
        tf = new Se(1114, 1),
        uf = new Se(1110, 5),
        vf = new Se(1111, 5),
        wf = new Se(1112, 5),
        xf = new Se(1113, 5),
        yf = new Se(1104),
        zf = new Se(1108),
        Af = new Se(1106),
        Bf = new Se(1107),
        Cf = new Se(1105),
        Df = new Se(1115, -1),
        Ef = new O(1186, !0),
        Ff = new O(1928),
        Gf = new O(1941),
        Hf = new O(370946349),
        If = new O(392736476),
        Jf = new Se(406149835),
        Kf = new Te(1932),
        Lf = new Se(1935);

    function P(a) {
        var b = "va";
        if (a.va && a.hasOwnProperty(b)) return a.va;
        b = new a;
        return a.va = b
    };

    function Mf() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function() {}
    }

    function Q(a) {
        return P(Mf).h(a.g, a.defaultValue)
    }

    function Nf(a) {
        return P(Mf).i(a.g, a.defaultValue)
    }

    function Of() {
        return P(Mf).j(Xe.g, Xe.defaultValue)
    };

    function Pf(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Re(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Qf(a, b, c) {
        function d(f) {
            f = Rf(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = Rf(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: Sf(a.previousSibling, e),
                    ma: function(f) {
                        return Sf(f.previousSibling, e)
                    },
                    pa: 0
                };
            case 2:
                return {
                    init: Sf(a.lastChild, e),
                    ma: function(f) {
                        return Sf(f.previousSibling, e)
                    },
                    pa: 0
                };
            case 3:
                return {
                    init: Sf(a.nextSibling, d),
                    ma: function(f) {
                        return Sf(f.nextSibling, d)
                    },
                    pa: 3
                };
            case 1:
                return {
                    init: Sf(a.firstChild, d),
                    ma: function(f) {
                        return Sf(f.nextSibling, d)
                    },
                    pa: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Rf(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Sf(a, b) {
        return a && b(a) ? a : null
    };
    var Tf = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function Uf(a) {
        return "string" === typeof a
    }

    function Vf(a) {
        return void 0 === a
    };

    function Wf(a) {
        K.call(this, a, -1, Xf)
    }
    w(Wf, K);
    var Xf = [2, 8],
        Yf = [3, 4, 5],
        Zf = [6, 7];
    var $f;
    $f = {
        Tb: 0,
        eb: 3,
        fb: 4,
        gb: 5
    };
    var ag = $f.eb,
        bg = $f.fb,
        cg = $f.gb;

    function dg(a) {
        return null != a ? !a : a
    }

    function eg(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function fg(a, b) {
        var c = F(a, Wf, 2);
        if (!c.length) return gg(a, b);
        a = D(a, 1);
        if (1 === a) return dg(fg(c[0], b));
        c = Ua(c, function(d) {
            return function() {
                return fg(d, b)
            }
        });
        switch (a) {
            case 2:
                return eg(c, !1);
            case 3:
                return eg(c, !0)
        }
    }

    function gg(a, b) {
        var c = Sb(a, Yf);
        a: {
            switch (c) {
                case ag:
                    var d = D(a, Kb(a, Yf, 3));
                    break a;
                case bg:
                    d = D(a, Kb(a, Yf, 4));
                    break a;
                case cg:
                    d = D(a, Kb(a, Yf, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, ka(Ob(a, 8)))
            } catch (f) {
                return
            }
            b = D(a, 1);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = J(a, Kb(a, Zf, 7));
            else a: {
                switch (c) {
                    case bg:
                        a = Zb(a, Kb(a, Zf, 6));
                        break a;
                    case cg:
                        a = J(a, Kb(a, Zf, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === Ka(String(e), a);
                if (d) switch (b) {
                    case 7:
                        return e <
                            a;
                    case 8:
                        return e > a;
                    case 12:
                        return Uf(a) && Uf(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === Ka(String(e), a);
                    case 11:
                        return null != e && 1 === Ka(String(e), a)
                }
            }
        }
    }

    function hg(a, b) {
        return !a || !(!b || !fg(a, b))
    };

    function ig(a) {
        K.call(this, a, -1, jg)
    }
    w(ig, K);
    var jg = [4];

    function kg(a) {
        K.call(this, a)
    }
    w(kg, K);

    function lg(a) {
        K.call(this, a, -1, mg)
    }
    w(lg, K);
    var mg = [5],
        ng = [1, 2, 3, 6, 7];

    function og(a) {
        K.call(this, a, -1, pg)
    }
    w(og, K);
    og.prototype.V = function() {
        return D(this, 1)
    };
    var pg = [2];

    function qg(a) {
        K.call(this, a)
    }
    w(qg, K);

    function rg(a) {
        var b = new qg;
        return C(b, 1, a)
    };

    function sg(a) {
        K.call(this, a)
    }
    w(sg, K);
    sg.prototype.getWidth = function() {
        return I(A(this, 1), 0)
    };

    function tg(a, b) {
        return C(a, 1, b)
    }
    sg.prototype.getHeight = function() {
        return I(A(this, 2), 0)
    };

    function ug(a, b) {
        return C(a, 2, b)
    };

    function vg(a) {
        K.call(this, a)
    }
    w(vg, K);

    function wg(a, b) {
        return Vb(a, 1, b)
    }

    function xg(a, b) {
        return Vb(a, 2, b)
    }

    function yg(a, b) {
        Vb(a, 3, b)
    };

    function zg(a) {
        K.call(this, a)
    }
    w(zg, K);

    function Ag(a) {
        K.call(this, a)
    }
    w(Ag, K);

    function Bg(a, b) {
        return Wb(a, 4, Cg, b)
    }
    var Cg = [4, 8, 5, 6, 9];

    function Dg(a) {
        K.call(this, a, -1, Eg)
    }
    w(Dg, K);

    function Fg(a, b) {
        return Vb(a, 1, b)
    }

    function Gg(a, b) {
        return Xb(a, 2, b)
    }

    function Hg(a, b) {
        return Pb(a, 4, b)
    }

    function Ig(a, b) {
        return Xb(a, 5, b)
    }

    function Jg(a, b) {
        return Qb(a, 6, b)
    }

    function Kg(a) {
        K.call(this, a)
    }
    w(Kg, K);
    Kg.prototype.V = function() {
        return D(this, 1)
    };

    function Lg(a, b) {
        return Qb(a, 1, b)
    }

    function Mg(a, b) {
        return Qb(a, 2, b)
    }

    function Ng(a) {
        K.call(this, a)
    }
    w(Ng, K);
    var Eg = [2, 4, 5],
        Og = [1, 2];

    function Pg(a) {
        K.call(this, a, -1, Qg)
    }
    w(Pg, K);

    function Rg(a) {
        K.call(this, a, -1, Sg)
    }
    w(Rg, K);
    var Qg = [2, 3],
        Sg = [5],
        Tg = [1, 2, 3, 4];

    function Ug(a) {
        K.call(this, a)
    }
    w(Ug, K);
    Ug.prototype.getTagSessionCorrelator = function() {
        return I(A(this, 2), 0)
    };

    function Vg(a) {
        var b = new Ug;
        return Wb(b, 4, Wg, a)
    }
    var Wg = [4, 5, 7];

    function Xg(a) {
        a.Xa.apply(a, ka(ta.apply(1, arguments).map(function(b) {
            return {
                cb: 4,
                message: b
            }
        })))
    }

    function Yg(a) {
        a.Xa.apply(a, ka(ta.apply(1, arguments).map(function(b) {
            return {
                cb: 7,
                message: b
            }
        })))
    };

    function Zg(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.cb] = b.message.toJSON(), c)]
        })])
    };

    function $g(a, b) {
        if (p.globalThis.fetch) p.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };

    function ah(a, b, c, d) {
        this.v = a;
        this.u = b;
        this.B = c;
        this.l = d;
        this.g = 1;
        this.j = [];
        this.h = [];
        this.i = null
    }

    function bh(a, b, c, d) {
        if (3 !== a.g) {
            if (1 === a.g) {
                a.g = 2;
                var e = function() {
                    a.g = 3;
                    for (var f = v(a.j), g = f.next(); !g.done; g = f.next()) g = g.value, g();
                    c()
                };
                b.document.visibilityState ? b.document.addEventListener("visibilitychange", function() {
                    "hidden" === b.document.visibilityState && e();
                    "visible" === b.document.visibilityState && (a.g = 2)
                }) : "onpagehide" in b ? (b.addEventListener("pagehide", e), b.addEventListener("pageshow", function() {
                    a.g = 2
                })) : b.addEventListener("unload", e)
            }
            d && a.j.push(d)
        }
    }

    function ch(a) {
        if (a.h.length) {
            var b = Zg(a.h);
            a.u(a.v + "?e=1", b);
            a.h = [];
            a.i = null
        }
    }
    ah.prototype.Xa = function() {
        var a = this;
        this.h.push.apply(this.h, ka(ta.apply(0, arguments)));
        this.h.length >= this.l ? (null !== this.i && clearTimeout(this.i), ch(this)) : null === this.i && (this.i = setTimeout(function() {
            ch(a)
        }, this.B))
    };

    function dh(a, b, c) {
        bh(a, b, function() {
            ch(a)
        }, c)
    }

    function eh(a, b) {
        ah.call(this, "https://pagead2.googlesyndication.com/pagead/ping", $g, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b)
    }
    w(eh, ah);

    function fh(a, b, c) {
        var d = void 0 === d ? new eh(b) : d;
        this.h = a;
        this.l = c;
        this.i = d;
        this.g = [];
        this.j = 0 < this.h && Xc() < 1 / this.h
    }

    function gh(a, b, c, d, e, f) {
        var g = Mg(Lg(new Kg, b), c);
        b = Jg(Gg(Fg(Ig(Hg(new Dg, d), e), g), a.g), f);
        b = Vg(b);
        a.j && Xg(a.i, hh(a, b));
        if (1 === f || 3 === f || 4 === f && !a.g.some(function(h) {
                return h.V() === g.V() && D(h, 2) === c
            })) a.g.push(g), 100 < a.g.length && a.g.shift()
    }

    function ih(a, b, c, d) {
        if (a.l) {
            var e = new Pg;
            b = Xb(e, 2, b);
            c = Xb(b, 3, c);
            d && Qb(c, 1, d);
            d = new Ug;
            d = Wb(d, 7, Wg, c);
            a.j && Xg(a.i, hh(a, d))
        }
    }

    function hh(a, b) {
        b = Qb(b, 1, Date.now());
        var c = ld(window);
        b = Qb(b, 2, c);
        return Qb(b, 6, a.h)
    };

    function jh() {
        var a = {};
        this.g = (a[ag] = {}, a[bg] = {}, a[cg] = {}, a)
    };
    var kh = /^true$/.test("false");

    function lh(a, b) {
        switch (b) {
            case 1:
                return D(a, Kb(a, ng, 1));
            case 2:
                return D(a, Kb(a, ng, 2));
            case 3:
                return D(a, Kb(a, ng, 3));
            case 6:
                return D(a, Kb(a, ng, 6));
            default:
                return null
        }
    }

    function mh(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return Yb(a, 1);
            case 7:
                return J(a, 3);
            case 2:
                return Zb(a, 2);
            case 3:
                return J(a, 3);
            case 6:
                return Ob(a, 4);
            default:
                return null
        }
    }
    var nh = Dc(function() {
        if (!kh) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function oh(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        P(ph).i[e] = null != (g = null == (f = P(ph).i[e]) ? void 0 : f.add(b)) ? g : (new p.Set).add(b);
        e = nh();
        if (null != e[b]) return e[b];
        b = qh(d)[b];
        if (!b) return c;
        b = new lg(b);
        b = rh(b);
        a = mh(b, a);
        return null != a ? a : c
    }

    function rh(a) {
        var b = P(jh).g;
        if (b) {
            var c = Xa(F(a, kg, 5), function(d) {
                return hg(E(d, Wf, 1), b)
            });
            if (c) return E(c, ig, 2)
        }
        return E(a, ig, 4)
    }

    function ph() {
        this.h = {};
        this.j = [];
        this.i = {};
        this.g = new p.Map
    }

    function sh(a, b, c) {
        return !!oh(1, a, void 0 === b ? !1 : b, c)
    }

    function th(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(oh(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function uh(a, b, c) {
        return oh(3, a, void 0 === b ? "" : b, c)
    }

    function vh(a, b, c) {
        b = void 0 === b ? [] : b;
        return oh(6, a, b, c)
    }

    function qh(a) {
        return P(ph).h[a] || (P(ph).h[a] = {})
    }

    function wh(a, b) {
        var c = qh(b);
        Yc(a, function(d, e) {
            return c[e] = d
        })
    }

    function xh(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        Sa(b, function(h) {
            var k = qh(h);
            Sa(a, function(l) {
                var m = Sb(l, ng),
                    q = lh(l, m);
                if (q) {
                    var u, y, G;
                    var B = null != (G = null == (u = P(ph).g.get(h)) ? void 0 : null == (y = u.get(q)) ? void 0 : y.slice(0)) ? G : [];
                    a: {
                        u = new Rg;
                        switch (m) {
                            case 1:
                                Rb(u, 1, Tg, q);
                                break;
                            case 2:
                                Rb(u, 2, Tg, q);
                                break;
                            case 3:
                                Rb(u, 3, Tg, q);
                                break;
                            case 6:
                                Rb(u, 4, Tg, q);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        Pb(u, 5, B);m = u
                    }
                    if (B = m) {
                        var H;
                        B = !(null == (H = P(ph).i[h]) || !H.has(q))
                    }
                    B && f.push(m);
                    if (H = m) {
                        var T;
                        H = !(null == (T = P(ph).g.get(h)) ||
                            !T.has(q))
                    }
                    H && g.push(m);
                    e || (T = P(ph), T.g.has(h) || T.g.set(h, new p.Map), T.g.get(h).has(q) || T.g.get(h).set(q, []), d && T.g.get(h).get(q).push(d));
                    k[q] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && ih(c, f, g, null != d ? d : void 0)
    }

    function yh(a, b) {
        var c = qh(b);
        Sa(a, function(d) {
            var e = new lg(d),
                f = Sb(e, ng);
            (e = lh(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function zh() {
        return Ua(r(Object, "keys").call(Object, P(ph).h), function(a) {
            return Number(a)
        })
    }

    function Ah(a) {
        Ya(P(ph).j, a) || wh(qh(4), a)
    };

    function Bh(a) {
        this.methodName = a
    }
    var Ch = new Bh(1),
        Dh = new Bh(16),
        Eh = new Bh(15),
        Fh = new Bh(2),
        Gh = new Bh(3),
        Hh = new Bh(4),
        Ih = new Bh(5),
        Jh = new Bh(6),
        Kh = new Bh(7),
        Lh = new Bh(8),
        Mh = new Bh(9),
        Nh = new Bh(10),
        Oh = new Bh(11),
        Th = new Bh(12),
        Uh = new Bh(13),
        Vh = new Bh(14);

    function Wh(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function Xh(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function Yh(a) {
        Wh(Ih, sh, a);
        Wh(Jh, th, a);
        Wh(Kh, uh, a);
        Wh(Lh, vh, a);
        Wh(Uh, yh, a);
        Wh(Eh, Ah, a)
    }

    function Zh(a) {
        Wh(Hh, function(b) {
            P(jh).g = b
        }, a);
        Wh(Mh, function(b, c) {
            var d = P(jh);
            d.g[ag][b] || (d.g[ag][b] = c)
        }, a);
        Wh(Nh, function(b, c) {
            var d = P(jh);
            d.g[bg][b] || (d.g[bg][b] = c)
        }, a);
        Wh(Oh, function(b, c) {
            var d = P(jh);
            d.g[cg][b] || (d.g[cg][b] = c)
        }, a);
        Wh(Vh, function(b) {
            for (var c = P(jh), d = v([ag, bg, cg]), e = d.next(); !e.done; e = d.next()) e = e.value, r(Object, "assign").call(Object, c.g[e], b[e])
        }, a)
    }

    function $h(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function ai() {
        this.i = function() {};
        this.g = function() {};
        this.j = function() {
            return []
        };
        this.h = function() {
            return []
        }
    }

    function bi(a, b, c) {
        a.i = Xh(Ch, b, function() {});
        a.j = function(d) {
            return Xh(Fh, b, function() {
                return []
            })(d, c)
        };
        a.h = function() {
            return Xh(Gh, b, function() {
                return []
            })(c)
        };
        a.g = function(d) {
            Xh(Dh, b, function() {})(d, c)
        }
    };

    function ci(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function di(a) {
        return !!(a.error && a.meta && a.id)
    };
    var ei = null;

    function fi() {
        if (null === ei) {
            ei = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    ei = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return ei
    };

    function gi() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function hi() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function ii(a, b) {
        var c = hi() || gi();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var ji = x.performance,
        ki = !!(ji && ji.mark && ji.measure && ji.clearMarks),
        li = Dc(function() {
            var a;
            if (a = ki) a = fi(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function mi() {
        this.h = [];
        this.i = x || x;
        var a = null;
        x && (x.google_js_reporting_queue = x.google_js_reporting_queue || [], this.h = x.google_js_reporting_queue, a = x.google_measure_js_timing);
        this.g = li() || (null != a ? a : 1 > Math.random())
    }

    function ni(a) {
        a && ji && li() && (ji.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), ji.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    mi.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new ii(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        ji && li() && ji.mark(b);
        return a
    };
    mi.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (hi() || gi()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            ji && li() && ji.mark(b);
            !this.g || 2048 < this.h.length || this.h.push(a)
        }
    };

    function oi(a) {
        if (a == a.top) return 0;
        for (; a && a != a.top && Pc(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function pi(a, b) {
        do {
            var c = Tc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function qi(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = L(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function ri(a, b) {
        return !((bd.test(b.google_ad_width) || ad.test(a.style.width)) && (bd.test(b.google_ad_height) || ad.test(a.style.height)))
    }

    function si(a, b) {
        return (a = ti(a, b)) ? a.y : 0
    }

    function ti(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function ui(a) {
        var b = 0,
            c;
        for (c in Tf) - 1 != a.indexOf(c) && (b |= Tf[c]);
        return b
    }

    function vi(a, b, c, d, e) {
        if (a !== a.top) return Qc(a) ? 3 : 16;
        if (!(488 > ue(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = ue(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = ue(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = Tc(b, a)) && (e = L(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function wi(a, b, c, d) {
        var e = vi(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || pi(c, b) ? (b = ue(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function xi(a, b, c) {
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }

    function yi(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = Tc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function zi(a, b, c) {
        a = ti(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Ai(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Tc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            xi(b, c, "0px");
            b.style.width = ue(a) + "px";
            if (0 !== zi(a, b, c)) {
                xi(b, c, "0px");
                var d = zi(a, b, c);
                xi(b, c, -1 * d + "px");
                a = zi(a, b, c);
                0 !== a && a !== d && xi(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };

    function Bi(a, b) {
        this.K = a;
        this.i = b
    }
    Bi.prototype.height = function() {
        return this.i
    };
    Bi.prototype.g = function(a) {
        return 300 < a && 300 < this.i ? this.K : Math.min(1200, Math.round(a))
    };
    Bi.prototype.h = function() {};

    function Ci(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = Tc(a, b)) && e[c] && d(e[c]) || null
    }

    function Di(a) {
        return function(b) {
            return b.K <= a
        }
    }

    function Ei(a, b, c, d) {
        var e = a && Fi(c, b),
            f = Gi(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Hi(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Fi(a, b) {
        return si(a, b) < te(b).clientHeight - 100
    }

    function Ii(a, b) {
        var c = Ci(b, a, "height", L);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Ci(b, a, "height", L);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && L(b.style.height)) && (c = Math.min(c, d)), (d = Ci(b, a, "maxHeight", L)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Gi(a, b) {
        var c = 0 == vd(a);
        return b && c ? Math.max(250, 2 * te(a).clientHeight / 3) : 250
    };
    var R = {},
        Ji = (R.google_ad_channel = !0, R.google_ad_client = !0, R.google_ad_host = !0, R.google_ad_host_channel = !0, R.google_adtest = !0, R.google_tag_for_child_directed_treatment = !0, R.google_tag_for_under_age_of_consent = !0, R.google_tag_partner = !0, R.google_restrict_data_processing = !0, R.google_page_url = !0, R.google_debug_params = !0, R.google_shadow_mode = !0, R.google_adbreak_test = !0, R.google_ad_frequency_hint = !0, R.google_admob_interstitial_slot = !0, R.google_admob_rewarded_slot = !0, R.google_admob_ads_only = !0, R.google_max_ad_content_rating = !0, R.google_traffic_source = !0, R),
        Ki = RegExp("(^| )adsbygoogle($| )");

    function Li(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Hc(d.ac);
            a[e] = d.value
        }
    };
    var Mi = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function Ni() {
        var a = void 0 === a ? "jserror" : a;
        var b = void 0 === b ? .01 : b;
        var c = void 0 === c ? td(Mi) : c;
        this.i = a;
        this.g = null;
        this.j = !1;
        this.u = Math.random();
        this.l = b;
        this.h = this.H;
        this.v = c
    }
    n = Ni.prototype;
    n.Ya = function(a) {
        this.g = a
    };
    n.ab = function(a) {
        this.j = a
    };
    n.Za = function(a) {
        this.h = a
    };
    n.H = function(a, b, c, d, e) {
        c = void 0 === c ? this.l : c;
        e = void 0 === e ? this.i : e;
        if ((this.j ? this.u : Math.random()) > c) return !1;
        di(b) || (b = new ci(b, {
            context: a,
            id: e
        }));
        if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        x.google_js_errors = x.google_js_errors || [];
        x.google_js_errors.push(b);
        x.error_rep_loaded || (Rc(x.document, Ac(zc(this.v).toString())), x.error_rep_loaded = !0);
        return !1
    };
    n.qa = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.h(a, d, this.l, c, this.i)) throw d;
        }
    };
    n.Ta = function(a, b) {
        var c = this;
        return function() {
            var d = ta.apply(0, arguments);
            return c.qa(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.Ua = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.H(a, d instanceof Error ? d : Error(d))
        })
    };

    function Oi(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }

    function Pi(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = hi(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && Oi(r(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (hi() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter ||
                        1
                }), f)
            }
            return l
        }
    }

    function Qi(a, b) {
        return Pi(a, b, function(c, d) {
            (new Ni).H(c, d)
        }, void 0, !1)
    };

    function Ri(a, b, c) {
        return Pi(a, b, void 0, c, !0).apply()
    }

    function Si(a) {
        if (!a) return null;
        var b = A(a, 7);
        if (A(a, 1) || a.getId() || 0 < Ob(a, 4).length) {
            b = Ob(a, 4);
            var c = A(a, 3),
                d = A(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Qe(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Qe(b[c]);
            a = (b = e) ? new Le(b, A(a, 2), A(a, 5), Ti(A(a, 6))) : null
        } else a = b ? new Le(b, A(a, 2), A(a, 5), Ti(A(a, 6))) : null;
        return a
    }
    var Ui = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ti(a) {
        return null == a ? a : Ui[a]
    }
    var Vi = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Wi(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Xi(a) {
        a = Wi(a);
        return a.optimization = a.optimization || {}
    };

    function Yi(a) {
        K.call(this, a)
    }
    w(Yi, K);
    Yi.prototype.getName = function() {
        return A(this, 4)
    };

    function Zi(a) {
        K.call(this, a)
    }
    w(Zi, K);

    function $i(a) {
        K.call(this, a)
    }
    w($i, K);

    function aj(a) {
        K.call(this, a)
    }
    w(aj, K);
    var bj = [1, 2, 3];

    function cj(a) {
        K.call(this, a, -1, dj)
    }
    w(cj, K);

    function ej(a) {
        K.call(this, a)
    }
    w(ej, K);

    function fj(a) {
        K.call(this, a)
    }
    w(fj, K);
    var dj = [1, 4],
        gj = [1, 2];

    function hj(a) {
        K.call(this, a, -1, ij)
    }
    w(hj, K);

    function jj(a) {
        K.call(this, a)
    }
    w(jj, K);

    function kj(a) {
        K.call(this, a, -1, lj)
    }
    w(kj, K);

    function mj(a) {
        K.call(this, a)
    }
    w(mj, K);

    function nj(a) {
        K.call(this, a)
    }
    w(nj, K);

    function oj(a) {
        K.call(this, a)
    }
    w(oj, K);

    function pj(a) {
        K.call(this, a)
    }
    w(pj, K);
    var ij = [1, 2, 5, 7],
        lj = [2, 5, 6, 11];

    function qj(a) {
        K.call(this, a)
    }
    w(qj, K);

    function rj(a) {
        switch (A(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = E(a, N, 1), null == b ? b = null : (a = A(a, 2), b = null == a ? null : new Sd({
                    Ja: [b],
                    Wa: a
                }));
                return null != b ? Ld(b) : Nd(Error("Missing dimension when creating placement id"));
            case 3:
                return Nd(Error("Missing dimension when creating placement id"));
            default:
                return Nd(Error("Invalid type: " + A(a, 8)))
        }
    };

    function sj(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function tj(a, b) {
        this.h = a;
        this.g = b
    }

    function uj(a, b) {
        var c = new Qd,
            d = new Pd;
        b.forEach(function(e) {
            if ($b(e, Zi, 1, bj)) {
                e = $b(e, Zi, 1, bj);
                if (E(e, He, 1) && E(E(e, He, 1), N, 1) && E(e, He, 2) && E(E(e, He, 2), N, 1)) {
                    var f = vj(a, E(E(e, He, 1), N, 1)),
                        g = vj(a, E(E(e, He, 2), N, 1));
                    if (f && g)
                        for (f = v(sj({
                                anchor: f,
                                position: A(E(e, He, 1), 2)
                            }, {
                                anchor: g,
                                position: A(E(e, He, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(za(g.anchor), g.position)
                }
                E(e, He, 3) && E(E(e, He, 3), N, 1) && (f = vj(a, E(E(e, He, 3), N, 1))) && c.set(za(f), A(E(e, He, 3), 2))
            } else $b(e, $i, 2, bj) ? wj(a, $b(e, $i, 2, bj), c) : $b(e,
                aj, 3, bj) && xj(a, $b(e, aj, 3, bj), d)
        });
        return new tj(c, d)
    }

    function wj(a, b, c) {
        E(b, He, 2) ? (b = E(b, He, 2), (a = vj(a, E(b, N, 1))) && c.set(za(a), A(b, 2))) : E(b, N, 1) && (a = yj(a, E(b, N, 1))) && a.forEach(function(d) {
            d = za(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function xj(a, b, c) {
        E(b, N, 1) && (a = yj(a, E(b, N, 1))) && a.forEach(function(d) {
            c.add(za(d))
        })
    }

    function vj(a, b) {
        return (a = yj(a, b)) && 0 < a.length ? a[0] : null
    }

    function yj(a, b) {
        return (b = Si(b)) ? b.query(a) : null
    };

    function zj() {
        this.g = new p.Set
    }

    function Aj(a) {
        a = Bj(a);
        return a.has("all") || a.has("after")
    }

    function Cj(a) {
        a = Bj(a);
        return a.has("all") || a.has("before")
    }

    function Dj(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Ej(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(function(d) {
            return a.g.add(d)
        });
        return !1
    }

    function Ej(a) {
        var b = Bj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }

    function Bj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new p.Set(a.split("|")) : new p.Set
    };

    function Fj(a, b) {
        if (!a) return !1;
        a = Tc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Gj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Hj(a) {
        return !!a.nextSibling || !!a.parentNode && Hj(a.parentNode)
    };

    function Ij(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Jj(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Jj(a) {
        var b = "";
        Yc(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };

    function Kj(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };

    function Lj(a) {
        var b = Kj(a);
        return b ? Ta(Ua(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    }

    function Mj(a, b) {
        return Za(a.document.querySelectorAll(b))
    }

    function Nj(a) {
        var b = [];
        a = v(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };

    function Oj(a, b, c, d, e) {
        this.g = a;
        this.G = b;
        this.h = c;
        this.l = e || null;
        this.u = (this.B = d) ? uj(a.document, F(d, Yi, 5)) : uj(a.document, []);
        this.v = new zj;
        this.i = 0;
        this.j = !1
    }

    function Pj(a, b) {
        if (a.j) return !0;
        a.j = !0;
        var c = F(a.h, Je, 1);
        a.i = 0;
        var d = Qj(a.B);
        if (Ij(a.g.location, "google_audio_sense")) {
            var e = new ze;
            e = C(e, 1, 1);
            var f = new Ae;
            f = C(f, 2, !0);
            e = Vb(e, 2, f);
            f = new Be;
            var g = new De;
            var h = C(g, 1, 1);
            Cb(f);
            g = Ub(f, De, 1, void 0, !1);
            h = null != h ? h : new De;
            var k = Mb(f, 1, 2);
            g.push(h);
            k.push(h.m);
            sb(h.m) && nb(k, 8);
            e = Vb(e, 3, f)
        } else e = E(a.h, ze, 27);
        if (f = e) {
            var l;
            e = (null == (l = E(a.h, Ee, 6)) ? void 0 : F(l, Ge, 1)) || [];
            l = a.g;
            var m;
            if (1 == D(f, 1) && null != (m = E(f, Ae, 2)) && Yb(m, 2) && 0 != e.length) {
                m = [];
                e = v(e);
                for (f =
                    e.next(); !f.done; f = e.next())
                    if (f = Si(E(f.value, N, 1) || null)) f = f.query(l.document), 0 < f.length && m.push(f[0]);
                m = m.filter(ve).filter(we(m)).filter(xe(l));
                m.sort(ye);
                if (m = m[0] || null) e = l.document.createElement("div"), e.id = "google-auto-placed-read-aloud-player-reserved", hd(e, {
                    width: "100%",
                    height: "65px"
                }), m.insertBefore(e, m.firstChild), Wi(l).audioSenseSpaceReserved = !0
            }
        }
        m = a.g;
        try {
            var q = m.localStorage.getItem("google_ama_settings");
            var u = q ? cc(qj, q) : null
        } catch (cd) {
            u = null
        }
        l = null !== u && Yb(u, 2, !1);
        u = Wi(m);
        l && (u.eatf = !0, qd(7, [!0, 0, !1]));
        e = Q(cf) || Q(bf);
        q = Q(bf);
        if (e) {
            b: {
                f = {
                    nb: !1,
                    ob: !1
                };g = Mj(m, ".google-auto-placed");h = Mj(m, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]");k = Mj(m, "ins.adsbygoogle[data-ad-format=autorelaxed]");
                var y = (Lj(m) || Mj(m, "div[id^=div-gpt-ad]")).concat(Mj(m, "iframe[id^=google_ads_iframe]"));
                var G = Mj(m, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
                    B = Mj(m, "ins.adsbygoogle-ablated-ad-slot"),
                    H = Mj(m, "div.googlepublisherpluginad"),
                    T = Mj(m, "html > ins.adsbygoogle");e = [].concat(Mj(m, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), Mj(m, "body ins.adsbygoogle"));l = [];f = v([
                    [f.Vb, g],
                    [f.nb, h],
                    [f.Yb, k],
                    [f.Wb, y],
                    [f.Zb, G],
                    [f.Ub, B],
                    [f.Xb, H],
                    [f.ob, T]
                ]);
                for (g = f.next(); !g.done; g = f.next()) h = v(g.value),
                g = h.next().value,
                h = h.next().value,
                !1 === g ? l = l.concat(h) : e = e.concat(h);e = Nj(e);f = Nj(l);l = e.slice(0);e = v(f);
                for (f = e.next(); !f.done; f = e.next())
                    for (f = f.value, g = 0; g <
                        l.length; g++)(f.contains(l[g]) || l[g].contains(f)) && l.splice(g, 1);m = te(m).clientHeight;
                for (e = 0; e < l.length; e++)
                    if (f = l[e].getBoundingClientRect(), !(0 === f.height && !q || f.top > m)) {
                        m = !0;
                        break b
                    }
                m = !1
            }
            u = m ? u.eatfAbg = !0 : !1
        }
        else u = l;
        if (u) return !0;
        u = new Pd([2]);
        for (m = 0; m < c.length; m++) {
            q = a;
            e = c[m];
            l = m;
            f = b;
            if (E(e, Wd, 4) && u.contains(A(E(e, Wd, 4), 1)) && 1 === A(e, 8) && Rj(e, d)) {
                q.i++;
                if (f = Sj(q, e, f, d)) g = Wi(q.g), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0), E(e, N, 1) && null != A(E(e, N, 1), 5) && (g.numPostPlacementsPlaced ? g.numPostPlacementsPlaced++ :
                    g.numPostPlacementsPlaced = 1), null == g.placed && (g.placed = []), g.numAutoAdsPlaced++, g.placed.push({
                    index: l,
                    element: f.ka
                }), qd(7, [!1, q.i, !0]);
                q = f
            } else q = null;
            if (q) return !0
        }
        qd(7, [!1, a.i, !1]);
        return !1
    }

    function Sj(a, b, c, d) {
        if (!Rj(b, d) || 1 != A(b, 8)) return null;
        d = E(b, N, 1);
        if (!d) return null;
        d = Si(d);
        if (!d) return null;
        d = d.query(a.g.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = Vi[A(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = Fj(Gj(d), f);
                        break a;
                    case 3:
                        f = Fj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Fj(g ? 1 == g.nodeType ? g : Gj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !Hj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !Re(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.u;
            f = A(b, 2);
            g = za(d);
            g = c.h.g.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(za(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(za(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.v;
            f = A(b, 2);
            a: switch (f) {
                case 1:
                    g = Aj(d.previousElementSibling) || Cj(d);
                    break a;
                case 4:
                    g = Aj(d) || Cj(d.nextElementSibling);
                    break a;
                case 2:
                    g = Cj(d.firstElementChild);
                    break a;
                case 3:
                    g = Aj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + f);
            }
            c = g || Dj(c, d, f)
        }
        if (c) return null;
        c = E(b, Ie, 3);
        f = {};
        c && (f.bb = A(c, 1), f.Ka = A(c, 2), f.kb = !!Nb(c, 3));
        c = E(b, Wd, 4) && A(E(b, Wd, 4), 2) ? A(E(b, Wd, 4), 2) : null;
        c = Zd(c);
        g = null != A(b, 12, !1) ? A(b, 12) : null;
        g = null == g ? null : new Xd(null, {
            google_ml_rank: g
        });
        b = Tj(a, b);
        b = Yd(a.l, c, g, b);
        c = a.g;
        a = a.G;
        var h = c.document,
            k = f.kb || !1;
        g = (new Jc(h)).createElement("DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.ub && Li(k, f.ub);
        h = (new Jc(h)).createElement("INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor =
            "transparent";
        f.bb && (k.marginTop = f.bb);
        f.Ka && (k.marginBottom = f.Ka);
        f.hb && Li(k, f.hb);
        g.appendChild(h);
        f = {
            ua: g,
            ka: h
        };
        f.ka.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.La) f.ua.className = h.join(" ");
        h = f.ka;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.ua;
                var q = void 0 === q ? 0 : q;
                if (Q($e)) {
                    q = void 0 === q ? 0 : q;
                    var u = Qf(d, e, q);
                    if (u.init) {
                        var y = u.init;
                        for (d = y; d = u.ma(d);) y = d;
                        var G = {
                            anchor: y,
                            position: u.pa
                        }
                    } else G = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = q;
                    Pf(m, G.anchor, G.position)
                } else Pf(m, d, e);
                b: {
                    var B = f.ka;B.dataset.adsbygoogleStatus = "reserved";B.className += " adsbygoogle-noablate";m = {
                        element: B
                    };
                    var H = b && b.Va;
                    if (B.hasAttribute("data-pub-vars")) {
                        try {
                            H = JSON.parse(B.getAttribute("data-pub-vars"))
                        } catch (T) {
                            break b
                        }
                        B.removeAttribute("data-pub-vars")
                    }
                    H && (m.params = H);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (T) {
                (B = f.ua) && B.parentNode && (H = B.parentNode, H.removeChild(B), Re(H) && (H.style.display = H.getAttribute("data-init-display") ||
                    "none"));
                B = !1;
                break a
            }
            B = !0
        }
        return B ? f : null
    }

    function Tj(a, b) {
        return Jd(Md(rj(b).map($d), function(c) {
            Wi(a.g).exception = c
        }))
    }

    function Qj(a) {
        var b = {};
        a && Mb(a, 6, 0, !1).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function Rj(a, b) {
        return a && void 0 !== Jb(a, Wd, 4, !1) && b[A(E(a, Wd, 4), 2)] ? !1 : !0
    };

    function Uj(a) {
        K.call(this, a)
    }
    w(Uj, K);
    var Vj = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function Wj(a, b) {
        this.g = a;
        this.h = b
    }

    function Xj(a, b, c) {
        this.url = a;
        this.s = b;
        this.Pa = !!c;
        this.depth = null
    };

    function Yj() {
        var a = Zj;
        this.l = ne;
        this.h = null;
        this.j = this.H;
        this.g = void 0 === a ? null : a;
        this.i = !1
    }
    n = Yj.prototype;
    n.Za = function(a) {
        this.j = a
    };
    n.Ya = function(a) {
        this.h = a
    };
    n.ab = function(a) {
        this.i = a
    };
    n.qa = function(a, b, c) {
        try {
            if (this.g && this.g.g) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                ni(d), b = this.j(a, new ci(h, {
                    message: ak(h)
                }), void 0, c)
            } catch (k) {
                this.H(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    n.Ta = function(a, b) {
        var c = this;
        return function() {
            var d = ta.apply(0, arguments);
            return c.qa(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.H = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new fe;
            f.g.push(1);
            f.h[1] = ge("context", a);
            di(b) || (b = new ci(b, {
                message: ak(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.g.push(2);
                f.h[2] = ge("msg", g)
            }
            var h = b.meta || {};
            if (this.h) try {
                this.h(h)
            } catch (dd) {}
            if (d) try {
                d(h)
            } catch (dd) {}
            b = [h];
            f.g.push(3);
            f.h[3] = b;
            d = x;
            b = [];
            g = null;
            do {
                var k = d;
                if (Pc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new Xj(l || "", k));
                try {
                    d = k.parent
                } catch (dd) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = x;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var q = b[m];
                    q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.Pa = !0)
                }
            var u = new Xj(x.location.href, x, !1);
            k = null;
            var y = b.length - 1;
            for (q = y; 0 <= q; --q) {
                var G = b[q];
                !k && Vj.test(G.url) && (k = G);
                if (G.url && !G.Pa) {
                    u = G;
                    break
                }
            }
            G = null;
            var B = b.length && b[y].url;
            0 != u.depth && B && (G = b[y]);
            var H = new Wj(u, G);
            if (H.h) {
                var T = H.h.url || "";
                f.g.push(4);
                f.h[4] = ge("top", T)
            }
            var cd = {
                url: H.g.url || ""
            };
            if (H.g.url) {
                var Me = H.g.url.match(Mc),
                    Ph = Me[1],
                    Qh = Me[3],
                    Rh = Me[4];
                u = "";
                Ph && (u += Ph + ":");
                Qh && (u += "//", u += Qh, Rh && (u += ":" + Rh));
                var Sh = u
            } else Sh = "";
            cd = [cd, {
                url: Sh
            }];
            f.g.push(5);
            f.h[5] = cd;
            oe(this.l, e, f, this.i, c)
        } catch (dd) {
            try {
                oe(this.l, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ak(dd),
                    url: H && H.g.url
                }, this.i, c)
            } catch (wq) {}
        }
        return !0
    };
    n.Ua = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.H(a, d instanceof Error ? d : Error(d))
        })
    };

    function ak(a) {
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
            } catch (e) {
                b = c
            }
        }
        return b
    };

    function S(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, S) : this.stack = Error().stack || ""
    }
    w(S, Error);
    var ne, bk, Zj = new mi;

    function ck(a) {
        null != a && (x.google_measure_js_timing = a);
        x.google_measure_js_timing || (a = Zj, a.g = !1, a.h != a.i.google_js_reporting_queue && (li() && Sa(a.h, ni), a.h.length = 0))
    }(function(a) {
        ne = a || new le;
        "number" !== typeof x.google_srt && (x.google_srt = Math.random());
        me();
        bk = new Yj;
        bk.ab(!0);
        "complete" == x.document.readyState ? ck() : Zj.g && Fc(x, "load", function() {
            ck()
        })
    })();

    function dk(a, b, c) {
        return bk.qa(a, b, c)
    }

    function ek(a, b) {
        return bk.Ta(a, b)
    }

    function fk(a, b, c) {
        var d = P(ai).h();
        !b.eid && d.length && (b.eid = d.toString());
        oe(ne, a, b, !0, c)
    }

    function gk(a, b) {
        bk.Ua(a, b)
    }

    function hk(a, b, c, d) {
        var e;
        di(b) ? e = b.msg || ak(b.error) : e = ak(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof ci ? b.error : b, c.pbr || (c.pbr = !0, bk.H(a, b, .1, d, "puberror")), !1) : bk.H(a, b, c, d)
    };

    function ik(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? Od(function() {
            return cc(Uj, c)
        }) : Ld(null)
    };

    function jk() {
        this.S = {}
    }

    function kk() {
        if (lk) return lk;
        var a = sd() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? lk = b : a.google_persistent_state_async = lk = new jk
    }

    function mk(a) {
        return nk[a] || "google_ps_" + a
    }

    function ok(a, b, c) {
        b = mk(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function pk(a, b, c) {
        return ok(a, b, function() {
            return c
        })
    }
    var lk = null,
        qk = {},
        nk = (qk[8] = "google_prev_ad_formats_by_region", qk[9] = "google_prev_ad_slotnames_by_region", qk);

    function rk(a) {
        this.g = a || {
            cookie: ""
        }
    }
    rk.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.bc;
            d = c.cc || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.sb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    rk.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ja(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    rk.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    rk.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ja(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            sb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function sk(a) {
        K.call(this, a)
    }
    w(sk, K);

    function tk(a) {
        var b = new sk;
        return C(b, 5, a)
    };

    function uk() {
        this.u = this.u;
        this.v = this.v
    }
    uk.prototype.u = !1;
    uk.prototype.i = function() {
        if (this.v)
            for (; this.v.length;) this.v.shift()()
    };

    function vk(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function wk(a, b, c) {
        b = void 0 === b ? 500 : b;
        c = void 0 === c ? !1 : c;
        uk.call(this);
        this.g = a;
        this.h = null;
        this.l = {};
        this.I = 0;
        this.G = b;
        this.B = c;
        this.j = null
    }
    w(wk, uk);
    wk.prototype.i = function() {
        this.l = {};
        this.j && (Gc(this.g, "message", this.j), delete this.j);
        delete this.l;
        delete this.g;
        delete this.h;
        uk.prototype.i.call(this)
    };

    function xk(a) {
        return "function" === typeof a.g.__tcfapi || null != yk(a)
    }
    wk.prototype.addEventListener = function(a) {
        function b(g, h) {
            clearTimeout(f);
            g ? (d = g, d.internalErrorState = vk(d), d.internalBlockOnErrors = c.B, h && 0 === d.internalErrorState || (d.tcString = "tcunavailable", h || (d.internalErrorState = 3))) : (d.tcString = "tcunavailable", d.internalErrorState = 3);
            a(d)
        }
        var c = this,
            d = {
                internalBlockOnErrors: this.B
            },
            e = Ec(function() {
                return a(d)
            }),
            f = 0; - 1 !== this.G && (f = setTimeout(function() {
            d.tcString = "tcunavailable";
            d.internalErrorState = 1;
            e()
        }, this.G));
        try {
            zk(this, "addEventListener", b)
        } catch (g) {
            d.tcString =
                "tcunavailable", d.internalErrorState = 3, f && (clearTimeout(f), f = 0), e()
        }
    };
    wk.prototype.removeEventListener = function(a) {
        a && a.listenerId && zk(this, "removeEventListener", null, a.listenerId)
    };

    function zk(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.g.__tcfapi) a = a.g.__tcfapi, a(b, 2, c, d);
        else if (yk(a)) {
            Ak(a);
            var e = ++a.I;
            a.l[e] = c;
            a.h && (c = {}, a.h.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function yk(a) {
        if (a.h) return a.h;
        a.h = fd(a.g, "__tcfapiLocator");
        return a.h
    }

    function Ak(a) {
        a.j || (a.j = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.l[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Fc(a.g, "message", a.j))
    };

    function Bk(a) {
        var b = a.s,
            c = a.Cb,
            d = a.jb;
        a = Ck({
            s: b,
            ga: a.ga,
            na: void 0 === a.na ? !1 : a.na,
            oa: void 0 === a.oa ? !1 : a.oa
        });
        null != a.g || "tcunav" != a.h.message ? d(a) : Dk(b, c).then(function(e) {
            return e.map(Ek)
        }).then(function(e) {
            return e.map(function(f) {
                return Fk(b, f)
            })
        }).then(d)
    }

    function Ck(a) {
        var b = a.s,
            c = a.ga,
            d = void 0 === a.na ? !1 : a.na;
        if (a = (void 0 === a.oa ? 0 : a.oa) || !xk(new wk(b))) {
            if (!d) {
                if (!(c = !c))
                    if (c = ik(b), null == c.g) bk.H(806, c.h, void 0, void 0), c = !1;
                    else if ((c = c.g.value) && null != A(c, 1, !1)) b: switch (c = A(c, 1), c) {
                    case 1:
                        c = !0;
                        break b;
                    default:
                        throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                } else c = !1;
                d = c
            }
            a = d
        }
        if (a) return Fk(b, tk(!0));
        c = kk();
        return (c = pk(c, 24)) ? Fk(b, Ek(c)) : Nd(Error("tcunav"))
    }

    function Dk(a, b) {
        return p.Promise.race([Gk(), Hk(a, b)])
    }

    function Gk() {
        return (new p.Promise(function(a) {
            var b = kk();
            a = {
                resolve: a
            };
            var c = pk(b, 25, []);
            c.push(a);
            b.S[mk(25)] = c
        })).then(Ik)
    }

    function Hk(a, b) {
        return new p.Promise(function(c) {
            a.setTimeout(c, b, Nd(Error("tcto")))
        })
    }

    function Ik(a) {
        return a ? Ld(a) : Nd(Error("tcnull"))
    }

    function Ek(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = vk(a)), c = "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions &&
                        (b = a.publisher.restrictions["1"], void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return tk(a)
    }

    function Fk(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (Nb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? Ld(b) : Nd(Error("unav"))
    };

    function Jk(a) {
        K.call(this, a)
    }
    w(Jk, K);

    function Kk(a) {
        K.call(this, a, -1, Lk)
    }
    w(Kk, K);
    var Lk = [1, 2, 3];

    function Mk(a) {
        this.exception = a
    }

    function Nk(a, b, c) {
        this.i = a;
        this.g = b;
        this.h = c
    }
    Nk.prototype.start = function() {
        this.j()
    };
    Nk.prototype.j = function() {
        try {
            switch (this.i.document.readyState) {
                case "complete":
                case "interactive":
                    Pj(this.g, !0);
                    Ok(this);
                    break;
                default:
                    Pj(this.g, !1) ? Ok(this) : this.i.setTimeout(Ea(this.j, this), 100)
            }
        } catch (a) {
            Ok(this, a)
        }
    };

    function Ok(a, b) {
        try {
            var c = a.h,
                d = c.resolve,
                e = a.g;
            Wi(e.g);
            F(e.h, Je, 1);
            d.call(c, new Mk(b))
        } catch (f) {
            a.h.reject(f)
        }
    };
    var Pk = "a".charCodeAt(),
        Qk = pc(yd),
        Rk = pc(zd);

    function Sk(a) {
        if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
        this.h = a;
        this.g = 0
    }

    function Tk(a) {
        var b = Uk(a, 16);
        return !0 === !!Uk(a, 1) ? (a = Vk(a), a.forEach(function(c) {
            if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }), a) : Wk(a, b)
    }

    function Vk(a) {
        for (var b = Uk(a, 12), c = []; b--;) {
            var d = !0 === !!Uk(a, 1),
                e = Uk(a, 16);
            if (d)
                for (d = Uk(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }

    function Wk(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (Uk(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }

    function Uk(a, b) {
        if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string.");
        var c = a.h.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    };

    function Xk(a, b) {
        try {
            var c = fb(a.split(".")[0]).map(function(e) {
                    return (aa = e.toString(2), r(aa, "padStart")).call(aa, 8, "0")
                }).join(""),
                d = new Sk(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.g += 78;
            c.cmpId = Uk(d, 12);
            c.cmpVersion = Uk(d, 12);
            d.g += 30;
            c.tcfPolicyVersion = Uk(d, 6);
            c.isServiceSpecific = !!Uk(d, 1);
            c.useNonStandardStacks = !!Uk(d, 1);
            c.specialFeatureOptins = Yk(Wk(d, 12, Rk), Rk);
            c.purpose = {
                consents: Yk(Wk(d, 24, Qk), Qk),
                legitimateInterests: Yk(Wk(d, 24, Qk), Qk)
            };
            c.purposeOneTreatment = !!Uk(d, 1);
            c.publisherCC = String.fromCharCode(Pk +
                Uk(d, 6)) + String.fromCharCode(Pk + Uk(d, 6));
            c.vendor = {
                consents: Yk(Tk(d), b),
                legitimateInterests: Yk(Tk(d), b)
            };
            return c
        } catch (e) {
            return null
        }
    }

    function Yk(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = v(b);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
        } else
            for (a = v(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
        delete c[0];
        return c
    };

    function Zk(a) {
        this.key = a;
        this.defaultValue = !1;
        this.valueType = "boolean"
    };

    function $k() {
        this.g = {}
    }

    function al(a) {
        bl || (bl = new cl);
        var b = bl.g[a.key];
        if ("proto" === a.valueType) {
            try {
                var c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (d) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    };

    function dl(a) {
        K.call(this, a)
    }
    w(dl, K);

    function el(a) {
        K.call(this, a)
    }
    w(el, K);

    function fl(a) {
        K.call(this, a)
    }
    w(fl, K);
    var gl = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25, 26];

    function hl() {};

    function il(a) {
        K.call(this, a, -1, jl)
    }
    w(il, K);

    function kl(a) {
        K.call(this, a)
    }
    w(kl, K);

    function ll(a) {
        K.call(this, a)
    }
    w(ll, K);
    var jl = [7];
    var ml = new Zk("45368529"),
        nl = new Zk("45369554");

    function cl() {
        this.g = {};
        var a = x.__fcexpdef || "";
        try {
            var b = JSON.parse(a)[0];
            a = "";
            for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
            this.g = JSON.parse(a)
        } catch (d) {}
    }
    var bl;
    w(cl, $k);

    function ol(a) {
        return (a = pl(a)) ? E(a, kl, 4) : null
    }

    function pl(a) {
        if (a = (new rk(a)).get("FCCDCF", ""))
            if (al(ml))
                if (r(a, "startsWith").call(a, "%")) try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    ql(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            return b ? cc(il, b) : null
        } catch (c) {
            return ql(2), null
        }
    }

    function ql(a) {
        new hl;
        var b = new el;
        a = C(b, 7, a);
        b = new dl;
        a = Vb(b, 1, a);
        b = new fl;
        Wb(b, 22, gl, a);
        al(nl)
    };
    pc(yd).map(function(a) {
        return Number(a)
    });
    pc(zd).map(function(a) {
        return Number(a)
    });

    function rl(a) {
        this.g = a;
        this.h = null
    }

    function sl(a) {
        a.__tcfapiPostMessageReady || tl(new rl(a))
    }

    function tl(a) {
        a.h = function(b) {
            var c = "string" == typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, function(f, g) {
                var h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage &&
                    b.source.postMessage(f, b.origin);
                return f
            }, e.parameter)
        };
        a.g.addEventListener("message", a.h);
        a.g.__tcfapiPostMessageReady = !0
    };

    function ul(a, b) {
        function c() {
            if (!a.frames[b])
                if (d.body) {
                    var e = Sc("IFRAME", d);
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = b;
                    d.body.appendChild(e)
                } else a.setTimeout(c, 5)
        }
        var d = a.document;
        c()
    };

    function vl(a) {
        this.g = a;
        this.h = a.document;
        this.l = (a = (a = pl(this.h)) ? E(a, ll, 5) || null : null) ? A(a, 2) : null;
        this.i = (a = ol(this.h)) && null != A(a, 1) ? A(a, 1) : null;
        this.j = (a = ol(this.h)) && null != A(a, 2) ? A(a, 2) : null
    }

    function wl() {
        var a = window,
            b = Q(df);
        a.__uspapi || a.frames.__uspapiLocator || (a = new vl(a), xl(a), b && yl(a))
    }

    function xl(a) {
        !a.l || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", ul(a.g, "__uspapiLocator"), Ga("__uspapi", function() {
            return a.v.apply(a, ka(ta.apply(0, arguments)))
        }))
    }
    vl.prototype.v = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.l
        }, !0)
    };

    function yl(a) {
        !a.i || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", ul(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], Ga("__tcfapi", function() {
            return a.u.apply(a, ka(ta.apply(0, arguments)))
        }), sl(a.g))
    }
    vl.prototype.u = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.g.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(zl(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c);
                    c(zl(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ?
                        (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };

    function zl(a, b, c) {
        if (!a.i) return null;
        b = Xk(a.i, b);
        b.addtlConsent = null != a.j ? a.j : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };

    function Al(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function Bl(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function Cl(a) {
        a = Mb(a, 2, 0, !1);
        if (!a) return !1;
        for (var b = 0; b < a.length; b++)
            if (1 == a[b]) return !0;
        return !1
    }

    function Dl(a, b) {
        a = Bl(Al(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = Zc(a),
            d = El(a);
        return r(b, "find").call(b, function(e) {
            var f = void 0 !== Jb(e, mj, 7, !1) ? A(E(e, mj, 7), 1) : A(e, 1);
            e = void 0 !== Jb(e, mj, 7, !1) ? A(E(e, mj, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function El(a) {
        for (var b = {};;) {
            b[Zc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var Fl = {},
        Gl = (Fl.google_ad_channel = !0, Fl.google_ad_host = !0, Fl);

    function Hl(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        fk("ama", b, .01)
    }

    function Il(a) {
        var b = {};
        Yc(Gl, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function Jl(a) {
        a = E(a, jj, 3);
        return !a || A(a, 1) <= Date.now() ? !1 : !0
    }

    function Kl(a) {
        if (Q(Ye)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? cc(hj, b) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function Ll(a) {
        K.call(this, a)
    }
    w(Ll, K);

    function Ml(a) {
        K.call(this, a, -1, Nl)
    }
    w(Ml, K);
    var Nl = [1];

    function Ol(a) {
        K.call(this, a, -1, Pl)
    }
    w(Ol, K);
    Ol.prototype.getId = function() {
        return I(A(this, 1), 0)
    };
    Ol.prototype.V = function() {
        return D(this, 7)
    };
    var Pl = [2];

    function Ql(a) {
        K.call(this, a, -1, Rl)
    }
    w(Ql, K);
    Ql.prototype.V = function() {
        return D(this, 5)
    };
    var Rl = [2];

    function Sl(a) {
        K.call(this, a, -1, Tl)
    }
    w(Sl, K);

    function Ul(a) {
        K.call(this, a, -1, Vl)
    }
    w(Ul, K);
    Ul.prototype.V = function() {
        return D(this, 1)
    };

    function Wl(a) {
        K.call(this, a)
    }
    w(Wl, K);
    var Tl = [1, 4, 2, 3],
        Vl = [2];

    function Xl(a) {
        K.call(this, a, -1, Yl)
    }
    w(Xl, K);

    function Zl(a) {
        return $b(a, Ml, 14, Lb)
    }
    var Yl = [19],
        Lb = [13, 14];
    var $l = void 0;

    function am() {
        gc($l, ec);
        return $l
    }

    function bm(a) {
        gc($l, Vf);
        $l = a
    };

    function cm(a, b, c, d) {
        c = void 0 === c ? "" : c;
        return 1 === b && dm(c, void 0 === d ? null : d) ? !0 : em(a, c, function(e) {
            return Va(F(e, jc, 2), function(f) {
                return A(f, 1) === b
            })
        })
    }

    function dm(a, b) {
        return b ? Ib(b, Ll, 13) ? Yb($b(b, Ll, 13, Lb), 1) : Ib(b, Ml, 14) && "" !== a && 1 === Ob(Zl(b), 1).length && Ob(Zl(b), 1)[0] === a ? Yb(E(Zl(b), Ll, 2), 1) : !1 : !1
    }

    function fm(a, b) {
        b = I(A(b, 18), 0); - 1 !== b && (a.tmod = b)
    }

    function gm(a) {
        var b = void 0 === b ? "" : b;
        var c = Qc(M) || M;
        return hm(c, a) ? !0 : em(M, b, function(d) {
            return Va(Mb(d, 3, 0, !1), function(e) {
                return e === a
            })
        })
    }

    function im(a) {
        return em(x, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function hm(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ya(a.split(","), b.toString())
    }

    function em(a, b, c) {
        a = Qc(a) || a;
        var d = jm(a);
        b && (b = xd(String(b)));
        return oc(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function jm(a) {
        a = km(a);
        var b = {};
        Yc(a, function(c, d) {
            try {
                var e = new hc(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function km(a) {
        return Q(Ue) ? (a = Ck({
            s: a,
            ga: am()
        }), null != a.g ? lm(a.g.value) : {}) : lm(a.localStorage)
    }

    function lm(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : nc(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function mm(a) {
        Q(ef) && fk("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }

    function nm(a) {
        return !!a && (0 < F(a, Je, 1).length || Q(Ze) && 0 < F(a, Ge, 3).length)
    };

    function U(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function om(a) {
        a = U(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ia: !0,
            Bb: b,
            sa: a.ablation_viewport_offset
        } : null
    }

    function pm(a, b) {
        a = U(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function qm(a) {
        U(M).allow_second_reactive_tag = a
    }

    function rm() {
        var a = U(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function sm(a) {
        var b, c;
        return null != (c = null == (b = a.document.querySelector('meta[name="google-adsense-platform-account"]')) ? void 0 : b.getAttribute("content")) ? c : null
    };

    function tm(a, b, c, d) {
        um(new vm(a, b, c, d))
    }

    function vm(a, b, c, d) {
        this.s = a;
        this.h = b;
        this.i = c;
        this.g = d
    }

    function um(a) {
        Md(Kd(Ck({
            s: a.s,
            ga: Yb(a.h, 6)
        }), function(b) {
            wm(a, b, !0)
        }), function() {
            xm(a)
        })
    }

    function wm(a, b, c) {
        Md(Kd(ym(b), function(d) {
            zm("ok");
            a.g(d, {
                fromLocalStorage: !0
            })
        }), function() {
            var d = a.s;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                Hl(d, {
                    lserr: 1
                })
            }
            c ? xm(a) : a.g(null, null)
        })
    }

    function xm(a) {
        Md(Kd(Am(a), function(b) {
            a.g(b, {
                fromPABGSettings: !0
            })
        }), function() {
            Bm(a)
        })
    }

    function Bm(a) {
        Bk({
            s: a.s,
            ga: Yb(a.h, 6),
            Cb: 50,
            jb: function(b) {
                Cm(a, b)
            }
        })
    }

    function ym(a) {
        return (a = (a = Kl(a)) ? Jl(a) ? a : null : null) ? Ld(a) : Nd(Error("invlocst"))
    }

    function Am(a) {
        var b = a.s,
            c, d, e;
        if (null != (e = null == (c = U(b)) ? void 0 : null == (d = c.head_tag_slot_vars) ? void 0 : d.google_ad_host) ? e : sm(b)) return Nd(Error("invtag"));
        a: if (b = a.s, c = a.i, a = a.h, null == a ? 0 : Ib(a, Ll, 13)) {
            var f, g;
            var h = null == a ? void 0 : null == (f = $b(a, Ll, 13, Lb)) ? void 0 : null == (g = E(f, Jk, 2)) ? void 0 : E(g, Kk, 2);
            nm(h) ? mm(!1) : h = null
        } else {
            if (null == a ? 0 : Ib(a, Ml, 14)) {
                var k;
                f = null == a ? void 0 : null == (k = Zl(a)) ? void 0 : Ob(k, 1);
                var l, m;
                g = null == a ? void 0 : null == (h = Zl(a)) ? void 0 : null == (l = E(h, Ll, 2)) ? void 0 : null == (m = E(l, Jk, 2)) ? void 0 :
                    E(m, Kk, 2);
                if (f && 1 === f.length && f[0] === c && nm(g) && J(a, 17) === b.location.host) {
                    mm(!0);
                    h = g;
                    break a
                }
            }
            h = null
        }
        h ? (l = new hj, m = F(h, Je, 1), l = Xb(l, 1, m), m = F(h, kj, 2), l = Xb(l, 7, m), Q(Ze) && 0 < F(h, Ge, 3).length && (m = new Ee, h = F(h, Ge, 3), h = Xb(m, 1, h), Vb(l, 6, h)), h = Ld(l)) : h = Nd(Error("invtag"));
        return h
    }

    function Cm(a, b) {
        Md(Kd(b, function(c) {
            wm(a, c, !1)
        }), function(c) {
            zm(c.message);
            a.g(null, null)
        })
    }

    function zm(a) {
        fk("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    };

    function Dm(a, b, c, d) {
        try {
            var e = Dl(a, F(c, kj, 7));
            if (e && Cl(e)) {
                if (A(e, 4)) {
                    var f = {},
                        g = new Xd(null, (f.google_package = A(e, 4), f));
                    d = Yd(d, g)
                }
                var h = new Oj(a, b, c, e, d);
                Ri(1E3, function() {
                    var k = new Ad;
                    (new Nk(a, h, k)).start();
                    return k.h
                }, a).then(Fa(Em, a), Fa(Fm, a))
            }
        } catch (k) {
            Hl(a, {
                atf: -1
            })
        }
    }

    function Em(a) {
        Hl(a, {
            atf: 1
        })
    }

    function Fm(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        Hl(a, {
            atf: 0
        })
    };
    ab || !z("Safari") || Oa();

    function Gm() {
        var a = this;
        this.promise = new p.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function Hm() {
        var a = new Gm;
        return {
            promise: a.promise,
            resolve: a.resolve
        }
    };

    function Im(a) {
        a = void 0 === a ? function() {} : a;
        x.google_llp || (x.google_llp = {});
        var b = x.google_llp,
            c = b[7];
        if (c) return c;
        c = Hm();
        b[7] = c;
        a();
        return c
    }

    function Jm(a) {
        return Im(function() {
            Rc(x.document, a)
        }).promise
    };

    function Km(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function Lm(a) {
        if (x.google_apltlad || x !== x.top || !a.google_ad_client) return null;
        x.google_apltlad = !0;
        var b = Km(a.google_ad_client),
            c = b.enable_page_level_ads;
        Yc(a, function(d, e) {
            Ji[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        Q(Ef) && (c.easpi = Q(sf), Q(rf) && (c.easpa = !0), c.asntp = Nf(yf), c.asntpv = Nf(Cf), c.asntpl = Nf(Af), c.asntpm = Nf(Bf), c.asntpc = Nf(zf), c.asna = Nf(uf), c.asnd = Nf(vf), c.asnp = Nf(wf), c.asns = Nf(xf), c.asmat = Nf(tf), c.asptt = Nf(Df));
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section =
            a.google_ad_section || a.google_ad_region;
        return b
    }

    function Mm(a) {
        return ya(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function Nm(a, b) {
        U(M).ama_ran_on_page || Ri(1001, function() {
            return Om(new Pm(a, b))
        }, x)
    }

    function Pm(a, b) {
        this.g = x;
        this.h = a;
        this.i = b
    }

    function Om(a) {
        tm(a.g, a.i, a.h.google_ad_client || "", function(b, c) {
            var d = a.g,
                e = a.h;
            U(M).ama_ran_on_page || b && Qm(d, e, b, c)
        })
    }

    function Qm(a, b, c, d) {
        d && (Wi(a).configSourceInAbg = d);
        if (void 0 !== Jb(c, cj, 24, !1)) {
            d = Xi(a);
            d.availableAbg = !0;
            var e, f;
            d.ablationFromStorage = !!(null == (e = E(c, cj, 24)) ? 0 : null == (f = E(e, ej, 3)) ? 0 : $b(f, fj, 2, gj))
        }
        if (Mm(b) && (e = Dl(a, F(c, kj, 7)), !e || !Nb(e, 8))) return;
        U(M).ama_ran_on_page = !0;
        var g;
        if (null == (g = E(c, pj, 15)) ? 0 : Nb(g, 23)) U(a).enable_overlap_observer = !0;
        if ((g = E(c, nj, 13)) && 1 === A(g, 1)) {
            var h = 0,
                k = E(g, oj, 6);
            k && A(k, 3) && (h = A(k, 3) || 0);
            pm(a, h)
        } else if (null == (h = E(c, cj, 24)) ? 0 : null == (k = E(h, ej, 3)) ? 0 : $b(k, fj, 2, gj)) Xi(a).ablatingThisPageview = !0, pm(a, 1);
        qd(3, [c.toJSON()]);
        var l = b.google_ad_client || "";
        b = Il(ya(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        var m = Yd(be, new Xd(null, b));
        dk(782, function() {
            Dm(a, l, c, m)
        })
    };
    var Rm = {},
        Sm = (Rm.google_ad_modifications = !0, Rm.google_analytics_domain_name = !0, Rm.google_analytics_uacct = !0, Rm.google_pause_ad_requests = !0, Rm.google_user_agent_client_hint = !0, Rm);

    function Tm(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function Um(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function Vm(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };

    function Wm(a) {
        if (a.google_ad_client) return String(a.google_ad_client);
        var b, c, d, e, f;
        if (null != (e = null != (d = null == (b = U(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client"))) b = e;
        else {
            b: {
                b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                    "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !wd() ? Tm : Um;
                for (c = b.length - 1; 0 <= c; c--)
                    if (d = b[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                        b = d;
                        break b
                    }
                b = null
            }
            if (b) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (c = {}; d = a.exec(b);) c[d[1]] = Vm(d[2]);
                b = c.google_ad_client ? c.google_ad_client : ""
            } else b = ""
        }
        return null != (f = b) ? f : ""
    };

    function Xm(a) {
        var b = this;
        this.s = sd() || window;
        this.g = null != a ? a : new eh(100);
        this.state = ok(kk(), 33, function() {
            var c = Nf(We),
                d = 0 < c && Xc() < 1 / c;
            return {
                sd: c,
                ssp: d,
                pc: Q(Ve) ? null : d ? ld(b.s) : 0,
                wpc: Q(Ve) ? null : d ? Wm(b.s) : "",
                le: [],
                lgdp: []
            }
        })
    }

    function Ym(a) {
        var b = new Ag;
        if (Q(Ve)) {
            var c = a.state.pc;
            c = null !== c && 0 !== c ? c : a.state.pc = ld(a.s)
        } else c = a.state.pc;
        b = C(b, 1, c);
        Q(Ve) ? (c = a.state.wpc, c = null !== c && "" !== c ? c : a.state.wpc = Wm(a.s)) : c = a.state.wpc;
        b = C(b, 2, c);
        b = C(b, 3, a.state.sd);
        return C(b, 7, a.s.performance.now())
    }

    function Zm() {
        var a = P(Xm);
        if (a.h && !r(a.state.le, "includes").call(a.state.le, 1)) {
            a.state.le.push(1);
            var b = wg(xg(new vg, ug(tg(new sg, te(a.s).scrollWidth), te(a.s).scrollHeight)), ug(tg(new sg, ue(a.s)), te(a.s).clientHeight));
            if (Q(hf)) {
                var c = oi(a.s);
                0 !== c && yg(b, rg(c))
            }
            Yg(a.g, Bg(Ym(a), b));
            dh(a.g, a.s, function() {
                var d = a.g;
                var e = Ym(a);
                var f = new zg;
                e = Wb(e, 8, Cg, f);
                Yg(d, e)
            })
        }
    }
    ea.Object.defineProperties(Xm.prototype, {
        h: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.state.ssp
            }
        }
    });

    function $m(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function an(a) {
        var b = M.document;
        if (b.currentScript) return $m(b.currentScript, a);
        b = v(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === $m(c.value, a)) return 0;
        return 1
    };

    function bn(a, b) {
        var c = {},
            d = {},
            e = {},
            f = {};
        return f[ag] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(g) {
            return cm(M, Number(g))
        }, c[24] = function(g) {
            return gm(Number(g))
        }, c[61] = function() {
            return Yb(b, 6)
        }, c[63] = function() {
            return Yb(b, 6) || ".google.ch" === J(b, 8)
        }, c), f[bg] = (d[7] = function(g) {
            try {
                var h = window.localStorage
            } catch (q) {
                h = null
            }
            g = Number(g);
            g = void 0 === g ? 0 : g;
            g = 0 !== g ? "google_experiment_mod" + g : "google_experiment_mod";
            a: {
                var k = -1;
                try {
                    h && (k = parseInt(h.getItem(g), 10))
                } catch (q) {
                    k = null;
                    break a
                }
                k = 0 <= k && 1E3 >
                k ? k : null
            }
            if (null === k) {
                k = Wc() ? null : Math.floor(1E3 * Xc());
                var l;
                if (l = null != k && h) a: {
                    var m = String(k);
                    try {
                        if (h) {
                            h.setItem(g, m);
                            l = m;
                            break a
                        }
                    } catch (q) {}
                    l = null
                }
                h = l ? k : null
            } else h = k;
            return null != h ? h : void 0
        }, d), f[cg] = (e[6] = function() {
            return J(b, 15)
        }, e), f
    };

    function cn(a) {
        a = void 0 === a ? x : a;
        return a.ggeac || (a.ggeac = {})
    };

    function dn() {
        var a = P(Mf).g( of .g, of .defaultValue),
            b = M.document;
        b = void 0 === b ? window.document : b;
        kd(a, b)
    };

    function en(a, b) {
        try {
            var c = a.split(".");
            a = x;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }

    function fn() {
        var a = {};
        this[ag] = (a[8] = function(b) {
            try {
                return null != wa(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = wa(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return Ya(P(ai).h(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = en(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a[60] = function(b) {
            try {
                return !!x.document.querySelector(b)
            } catch (c) {}
        }, a[69] = function(b) {
            var c =
                x.document;
            c = void 0 === c ? document : c;
            var d;
            return !(null == (d = c.featurePolicy) || !(aa = d.features(), r(aa, "includes")).call(aa, b))
        }, a[70] = function(b) {
            var c = x.document;
            c = void 0 === c ? document : c;
            var d;
            return !(null == (d = c.featurePolicy) || !(aa = d.allowedFeatures(), r(aa, "includes")).call(aa, b))
        }, a);
        a = {};
        this[bg] = (a[3] = function() {
            return gd()
        }, a[6] = function(b) {
            b = en(b, "number");
            return void 0 !== b ? b : void 0
        }, a[11] = function(b) {
            b = void 0 === b ? "" : b;
            var c = x;
            b = void 0 === b ? "" : b;
            c = void 0 === c ? window : c;
            b = (c = (c = c.location.href.match(Mc)[3] ||
                null) ? decodeURI(c) : c) ? Zc(c + b) : null;
            return null == b ? void 0 : b % 1E3
        }, a);
        a = {};
        this[cg] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = en(b, "string");
            return void 0 !== b ? b : void 0
        }, a[10] = function() {
            try {
                var b = x.document;
                return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
            } catch (c) {
                return ""
            }
        }, a[11] = function() {
            try {
                var b, c, d, e, f;
                return null != (f = null == (d = null == (b = wa("google_tag_data")) ? void 0 : null == (c =
                    b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = r(d, "find").call(d, function(g) {
                    return "Google Chrome" === g.brand
                })) ? void 0 : e.version) ? f : ""
            } catch (g) {
                return ""
            }
        }, a)
    };
    var gn = [12, 13, 20];

    function hn() {}
    hn.prototype.init = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? {} : d;
        var f = void 0 === d.Ma ? !1 : d.Ma,
            g = void 0 === d.tb ? {} : d.tb;
        d = void 0 === d.vb ? [] : d.vb;
        this.j = a;
        this.u = {};
        this.v = f;
        this.l = g;
        a = {};
        this.h = (a[b] = [], a[4] = [], a);
        this.i = {};
        (b = fi()) && Sa(b.split(",") || [], function(h) {
            (h = parseInt(h, 10)) && (e.i[h] = !0)
        });
        Sa(d, function(h) {
            e.i[h] = !0
        });
        this.g = c;
        return this
    };

    function jn(a, b, c) {
        var d = [],
            e = kn(a.j, b),
            f;
        if (f = 9 !== b) a.u[b] ? f = !0 : (a.u[b] = !0, f = !1);
        if (f) return gh(a.g, b, c, d, [], 4), d;
        if (!e.length) return gh(a.g, b, c, d, [], 3), d;
        var g = Ya(gn, b),
            h = [];
        Sa(e, function(k) {
            var l = new Ng;
            if (k = ln(a, k, c, l)) 0 !== Sb(l, Og) && h.push(l), l = k.getId(), d.push(l), mn(a, l, g ? 4 : c), (k = F(k, lg, 2)) && (g ? xh(k, zh(), a.g, l) : xh(k, [c], a.g, l))
        });
        gh(a.g, b, c, d, h, 1);
        return d
    }

    function mn(a, b, c) {
        a.h[c] || (a.h[c] = []);
        a = a.h[c];
        Ya(a, b) || a.push(b)
    }

    function nn(a, b) {
        a.j.push.apply(a.j, ka(Ta(Ua(b, function(c) {
            return new Ul(c)
        }), function(c) {
            return !Ya(gn, c.V())
        })))
    }

    function ln(a, b, c, d) {
        var e = P(jh).g;
        if (!hg(E(b, Wf, 3), e)) return null;
        var f = F(b, Ol, 2),
            g = D(b, 6);
        if (g) {
            Rb(d, 1, Og, g);
            f = e[bg];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), Qb(d, 3, c)
            } catch (k) {}
            return (b = on(b, c)) ? pn(a, [b], 1) : null
        }
        if (g = D(b, 10)) {
            Rb(d, 2, Og, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[bg][9];
                    break;
                case 2:
                    h = e[bg][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === D(b, 11)) return null;
            void 0 !== c && Qb(d, 3, c);
            return (b = on(b, c)) ? pn(a, [b], 1) : null
        }
        d = e ? Ta(f, function(k) {
            return hg(E(k,
                Wf, 3), e)
        }) : f;
        if (!d.length) return null;
        c = d.length * I(A(b, 1), 0);
        return (b = D(b, 4)) ? qn(a, b, c, d) : pn(a, d, c / 1E3)
    }

    function qn(a, b, c, d) {
        var e = null != a.l[b] ? a.l[b] : 1E3;
        if (0 >= e) return null;
        d = pn(a, d, c / e);
        a.l[b] = d ? 0 : e - c;
        return d
    }

    function pn(a, b, c) {
        var d = a.i,
            e = Wa(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.v ? null : Uc(b, c)
    }

    function rn(a, b) {
        Wh(Ch, function(c) {
            a.i[c] = !0
        }, b);
        Wh(Fh, function(c, d) {
            return jn(a, c, d)
        }, b);
        Wh(Gh, function(c) {
            return (a.h[c] || []).concat(a.h[4])
        }, b);
        Wh(Th, function(c) {
            return void nn(a, c)
        }, b);
        Wh(Dh, function(c, d) {
            return void mn(a, c, d)
        }, b)
    }

    function kn(a, b) {
        return (a = Wa(a, function(c) {
            return c.V() == b
        })) && F(a, Ql, 2) || []
    }

    function on(a, b) {
        var c = F(a, Ol, 2),
            d = c.length,
            e = I(A(a, 8), 0);
        a = d * I(A(a, 1), 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * Xc());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = P(jh).g;
        return !c || e && !hg(E(c, Wf, 3), e) ? null : c
    };

    function sn() {
        this.g = function() {}
    }

    function tn(a) {
        P(sn).g(a)
    };
    var un, vn, wn, xn, yn, zn;

    function An(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? cn() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new fh(null != (xn = null == (un = E(a, Wl, 5)) ? void 0 : I(A(un, 2), 0)) ? xn : 0, null != (yn = null == (vn = E(a, Wl, 5)) ? void 0 : I(A(vn, 4), 0)) ? yn : 0, null != (zn = null == (wn = E(a, Wl, 5)) ? void 0 : Yb(wn, 3)) ? zn : !1) : f;
        d.hasOwnProperty("init-done") ? (Xh(Th, d)(Ua(F(a, Ul, 2), function(g) {
            return g.toJSON()
        })), Xh(Uh, d)(Ua(F(a, lg, 1), function(g) {
            return g.toJSON()
        }), e), b && Xh(Vh, d)(b), Bn(e, d)) : (rn(P(hn).init(F(a, Ul, 2), e, f, c), d), Yh(d), Zh(d), $h(d), Bn(e, d), xh(F(a, lg, 1), [e], f, void 0, !0), kh = kh || !(!c || !c.qb), tn(P(fn)), b && tn(b))
    }

    function Bn(a, b) {
        var c = b = void 0 === b ? cn() : b;
        bi(P(ai), c, a);
        Cn(b, a);
        a = b;
        P(sn).g = Xh(Vh, a);
        P(Mf).l()
    }

    function Cn(a, b) {
        var c = P(Mf);
        c.h = function(d, e) {
            return Xh(Ih, a, function() {
                return !1
            })(d, e, b)
        };
        c.i = function(d, e) {
            return Xh(Jh, a, function() {
                return 0
            })(d, e, b)
        };
        c.j = function(d, e) {
            return Xh(Kh, a, function() {
                return ""
            })(d, e, b)
        };
        c.g = function(d, e) {
            return Xh(Lh, a, function() {
                return []
            })(d, e, b)
        };
        c.l = function() {
            Xh(Eh, a)(b)
        }
    };

    function Dn(a) {
        var b = P(ai).j(a);
        if (Q(gf)) {
            var c = P(Xm);
            if (c.h && b.length && !r(c.state.lgdp, "includes").call(c.state.lgdp, Number(a))) {
                c.state.lgdp.push(Number(a));
                var d = c.g;
                c = Ym(c);
                var e = new og;
                a = C(e, 1, a);
                b = Pb(a, 2, b);
                b = Wb(c, 9, Cg, b);
                Yg(d, b)
            }
        }
    }

    function En(a, b, c) {
        var d = U(a);
        if (d.plle) Bn(1, cn(a));
        else {
            d.plle = !0;
            d = E(b, Sl, 12);
            var e = Yb(b, 9);
            An(d, bn(c, b), {
                Ma: e && !!a.google_disable_experiments,
                qb: e
            }, cn(a));
            if (c = J(b, 15)) c = Number(c), P(ai).i(c);
            b = v(Mb(b, 19, 0, !1));
            for (c = b.next(); !c.done; c = b.next()) c = c.value, P(ai).g(c);
            Dn(12);
            Dn(10);
            a = Qc(a) || a;
            Ij(a.location, "google_mc_lab") && P(ai).g(44738307);
            Ij(a.location, "google_auto_storify_swipeable") && P(ai).g(44773747);
            Ij(a.location, "google_auto_storify_scrollable") && P(ai).g(44773746)
        }
    };
    var Fn = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Gn(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function V(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Bi.call(this, a, b);
        this.ha = c;
        this.rb = d
    }
    w(V, Bi);
    V.prototype.ra = function() {
        return this.ha
    };
    V.prototype.h = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function Hn(a) {
        return function(b) {
            return !!(b.ha & a)
        }
    };
    var In = {},
        Jn = (In.image_stacked = 1 / 1.91, In.image_sidebyside = 1 / 3.82, In.mobile_banner_image_sidebyside = 1 / 3.82, In.pub_control_image_stacked = 1 / 1.91, In.pub_control_image_sidebyside = 1 / 3.82, In.pub_control_image_card_stacked = 1 / 1.91, In.pub_control_image_card_sidebyside = 1 / 3.74, In.pub_control_text = 0, In.pub_control_text_card = 0, In),
        Kn = {},
        Ln = (Kn.image_stacked = 80, Kn.image_sidebyside = 0, Kn.mobile_banner_image_sidebyside = 0, Kn.pub_control_image_stacked = 80, Kn.pub_control_image_sidebyside = 0, Kn.pub_control_image_card_stacked =
            85, Kn.pub_control_image_card_sidebyside = 0, Kn.pub_control_text = 80, Kn.pub_control_text_card = 80, Kn),
        Mn = {},
        Nn = (Mn.pub_control_image_stacked = 100, Mn.pub_control_image_sidebyside = 200, Mn.pub_control_image_card_stacked = 150, Mn.pub_control_image_card_sidebyside = 250, Mn.pub_control_text = 100, Mn.pub_control_text_card = 150, Mn);

    function On(a) {
        var b = 0;
        a.W && b++;
        a.L && b++;
        a.M && b++;
        if (3 > b) return {
            O: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.W.split(",");
        var c = a.M.split(",");
        a = a.L.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            O: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            O: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (r(Number, "isNaN").call(Number, g) || 0 === g) return {
                O: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (r(Number, "isNaN").call(Number, g) || 0 === g) return {
                O: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            M: d,
            L: e,
            Ra: b
        }
    }

    function Pn(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var Qn = $a("script");

    function Rn(a, b, c, d, e, f, g, h, k, l, m, q) {
        this.u = a;
        this.Y = b;
        this.ha = void 0 === c ? null : c;
        this.g = void 0 === d ? null : d;
        this.R = void 0 === e ? null : e;
        this.h = void 0 === f ? null : f;
        this.i = void 0 === g ? null : g;
        this.G = void 0 === h ? null : h;
        this.I = void 0 === k ? null : k;
        this.j = void 0 === l ? null : l;
        this.l = void 0 === m ? null : m;
        this.P = void 0 === q ? null : q;
        this.T = this.B = this.v = null
    }
    Rn.prototype.size = function() {
        return this.Y
    };

    function Sn(a, b, c) {
        null != a.ha && (c.google_responsive_formats = a.ha);
        null != a.R && (c.google_safe_for_responsive_override = a.R);
        null != a.h && (!0 === a.h ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.h));
        null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
        var d = a.l || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.j || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().g(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.g(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.u;
            null != a.g && (c.armr = a.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.h && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.G && (c.gfwroml = a.G);
        null != a.I && (c.gfwromr = a.I);
        null != a.j && (c.gfwroh = a.j);
        null != a.l && (c.gfwrow = a.l);
        null != a.P && (c.gfwroz = a.P);
        null != a.v && (c.gml = a.v);
        null != a.B && (c.gmr = a.B);
        null != a.T && (c.gzi = a.T);
        b = Qc(window) || window;
        Ij(b.location, "google_responsive_dummy_ad") &&
            (Ya([1, 2, 3, 4, 5, 6, 7, 8], a.u) || 1 === a.g) && 2 !== a.g && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + Qn + ">window.top.postMessage('" + a + "', '*');\n          </" + Qn + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    var Tn = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Un(a, b) {
        Bi.call(this, a, b)
    }
    w(Un, Bi);
    Un.prototype.g = function(a) {
        return Math.min(1200, Math.max(this.K, Math.round(a)))
    };

    function Vn(a, b) {
        Wn(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new Rn(9, new Un(a, Math.floor(a * b.google_phwr)));
        var c = Kc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Jn.mobile_banner_image_sidebyside + Ln.mobile_banner_image_sidebyside) + 96), a = {
            da: a,
            ca: c,
            L: 1,
            M: 12,
            W: "mobile_banner_image_sidebyside"
        }) : (a = Pn(a), a = {
            da: a.width,
            ca: a.height,
            L: 1,
            M: 13,
            W: "image_sidebyside"
        }) : (a = Pn(a), a = {
            da: a.width,
            ca: a.height,
            L: 4,
            M: 2,
            W: "image_stacked"
        });
        Xn(b, a);
        return new Rn(9, new Un(a.da,
            a.ca))
    }

    function Yn(a, b) {
        Wn(a, b);
        var c = On({
            M: b.google_content_recommendation_rows_num,
            L: b.google_content_recommendation_columns_num,
            W: b.google_content_recommendation_ui_type
        });
        if (c.O) a = {
            da: 0,
            ca: 0,
            L: 0,
            M: 0,
            W: "image_stacked",
            O: c.O
        };
        else {
            var d = 2 === c.Ra.length && 468 <= a ? 1 : 0;
            var e = c.Ra[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Nn[e];
            for (var g = c.L[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.M[d];
            d = Math.floor(((a - 8 * f - 8) / f * Jn[e] + Ln[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    zb: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    zb: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = {
                da: a.width,
                ca: a.height,
                L: f,
                M: c,
                W: e
            }
        }
        if (a.O) throw new S(a.O);
        Xn(b, a);
        return new Rn(9, new Un(a.da, a.ca))
    }

    function Wn(a, b) {
        if (0 >= a) throw new S("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Xn(a, b) {
        a.google_content_recommendation_ui_type = b.W;
        a.google_content_recommendation_columns_num = b.L;
        a.google_content_recommendation_rows_num = b.M
    };

    function Zn(a, b) {
        Bi.call(this, a, b)
    }
    w(Zn, Bi);
    Zn.prototype.g = function() {
        return this.K
    };
    Zn.prototype.h = function(a, b, c) {
        Ai(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var $n = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function ao(a, b) {
        Bi.call(this, a, b)
    }
    w(ao, Bi);
    ao.prototype.g = function() {
        return Math.min(1200, this.K)
    };

    function bo(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive) a = g;
            else if (a = vi(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
            else if (a = ue(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (var h = 0; 100 > h && g.parentElement; ++h) {
                            for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
                                var m = k[l];
                                if (m != g && yi(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Ai(b, c)
                }
            else a = g;
            else a = g
        }
        if (250 > a) throw new S("Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new S("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new Rn(11, new Bi(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new S("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 *
                c - -725 + 10);
            if (isNaN(f)) throw new S("Invalid height: height=" + f);
            if (50 > f) throw new S("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new S("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new Rn(11, new Bi(a, f))
        }
        d = $n[f];
        if (!d) throw new S("Invalid data-ad-layout value: " + f);
        c = Fi(c, b);
        b = ue(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new Rn(11, "in-article" == f ? new ao(a, b) : new Bi(a, b))
    };

    function co(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function eo(a, b) {
        for (var c = fo.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var W = [new V(970, 90, 2), new V(728, 90, 2), new V(468, 60, 2), new V(336, 280, 1), new V(320, 100, 2), new V(320, 50, 2), new V(300, 600, 4), new V(300, 250, 1), new V(250, 250, 1), new V(234, 60, 2), new V(200, 200, 1), new V(180, 150, 1), new V(160, 600, 4), new V(125, 125, 1), new V(120, 600, 4), new V(120, 240, 4), new V(120, 120, 1, !0)],
        fo = [W[6], W[12], W[3], W[0], W[7], W[14], W[1], W[8], W[10], W[4], W[15], W[2], W[11], W[5], W[13], W[9], W[16]];

    function go(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            D: a,
            F: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || ho(b) || e.google_ad_resize ? (b = wi(a, c, d, e), c = !0 !== b ? {
            D: a,
            F: b
        } : {
            D: ue(c) || a,
            F: !0
        }) : c = {
            D: a,
            F: 2
        };
        b = c.F;
        return !0 !== b ? {
            D: a,
            F: b
        } : d.parentElement ? {
            D: c.D,
            F: b
        } : {
            D: a,
            F: b
        }
    }

    function io(a, b, c, d, e) {
        var f = dk(247, function() {
                return go(a, b, c, d, e)
            }),
            g = f.D;
        f = f.F;
        var h = !0 === f,
            k = L(d.style.width),
            l = L(d.style.height),
            m = jo(g, b, c, d, e, h);
        g = m.ba;
        h = m.Z;
        var q = m.ra;
        m = m.Qa;
        var u = ko(b, q),
            y, G = (y = Ci(d, c, "marginLeft", L)) ? y + "px" : "",
            B = (y = Ci(d, c, "marginRight", L)) ? y + "px" : "";
        y = Ci(d, c, "zIndex") || "";
        return new Rn(u, g, q, null, m, f, h, G, B, l, k, y)
    }

    function ho(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function jo(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, ue(c)) ? 4 : 3 : ui(b);
        var g = !1,
            h = !1,
            k = 488 > ue(c);
        if (k) {
            var l = pi(d, c);
            var m = Fi(d, c);
            g = !m && l;
            h = m && l
        }
        m = [Di(a), Hn(b)];
        m.push(Ei(k, c, d, h));
        null != e.google_max_responsive_height && m.push(Hi(e.google_max_responsive_height));
        k = [function(u) {
            return !u.rb
        }];
        if (g || h) g = Ii(c, d), k.push(Hi(g));
        var q = eo(co(m), co(k));
        if (!q) throw new S("No slot size for availableWidth=" + a);
        m = dk(248, function() {
            var u;
            a: if (f) {
                if (e.gfwrnh && (u = L(e.gfwrnh))) {
                    u = {
                        ba: new Zn(a, u),
                        Z: !0
                    };
                    break a
                }
                u =
                    a / 1.2;
                var y = Math;
                var G = y.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var B = Infinity;
                else {
                    B = d;
                    var H = Infinity;
                    do {
                        var T = Ci(B, c, "height", L);
                        T && (H = Math.min(H, T));
                        (T = Ci(B, c, "maxHeight", L)) && (H = Math.min(H, T))
                    } while ((B = B.parentElement) && "HTML" != B.tagName);
                    B = H
                }
                y = G.call(y, u, B);
                if (y < .5 * u || 100 > y) y = u;
                u = {
                    ba: new Zn(a, Math.floor(y)),
                    Z: y < u ? 102 : !0
                }
            } else u = {
                ba: q,
                Z: 100
            };
            return u
        });
        g = m.ba;
        m = m.Z;
        return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
            ba: lo(a,
                c, d, g, e),
            Z: !1,
            ra: b,
            Qa: l
        } : {
            ba: g,
            Z: m,
            ra: b,
            Qa: l
        }
    }

    function ko(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function lo(a, b, c, d, e) {
        var f = e.google_ad_height || Ci(c, b, "height", L);
        b = bo(a, b, c, f, e).size();
        return b.K * b.height() > a * d.height() ? new V(b.K, b.height(), 1) : d
    };

    function mo(a, b, c, d, e) {
        var f;
        (f = ue(b)) ? 488 > ue(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Ai(b, c), f = {
            D: f,
            F: !0
        }) : f = {
            D: a,
            F: 5
        } : f = {
            D: a,
            F: 4
        }: f = {
            D: a,
            F: 10
        };
        var g = f;
        f = g.D;
        g = g.F;
        if (!0 !== g || a == f) return new Rn(12, new Bi(a, d), null, null, !0, g, 100);
        a = jo(f, "auto", b, c, e, !0);
        return new Rn(1, a.ba, a.ra, 2, !0, g, a.Z)
    };

    function no(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = v(Tn), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (ho(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (oo(b), 1);
        if (27 === b.google_reactive_ad_format) return oo(b), 1
    }

    function po(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Ci(b, d, "width", L) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = qo(a, e, b, c, d)) ? f : io(e, c.google_ad_format, d, b, c);
        f.size().h(d, c, b);
        Sn(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function qo(a, b, c, d, e) {
        var f = d.google_ad_height || Ci(c, e, "height", L);
        switch (a) {
            case 5:
                return f = dk(247, function() {
                    return go(b, d.google_ad_format, e, c, d)
                }), a = f.D, f = f.F, !0 === f && b != a && Ai(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), Vn(a, d);
            case 9:
                return Yn(b, d);
            case 8:
                return bo(b, e, c, f, d);
            case 10:
                return mo(b, e, c, f, d)
        }
    }

    function oo(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function ro(a, b) {
        var c = Qc(b);
        if (c) {
            c = ue(c);
            var d = Tc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var so = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        to = ja(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        uo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        vo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
        wo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]);

    function xo(a) {
        bk.Ya(function(b) {
            b.shv = String(a);
            b.mjsv = "m202210100101";
            var c = P(ai).h(),
                d = U(x);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    };

    function yo(a) {
        var b = a.wb;
        return a.lb || ("dev" === b ? "dev" : "")
    };
    var zo = "undefined" === typeof sttc ? void 0 : sttc;

    function Ao(a) {
        var b = bk;
        try {
            return gc(a, Uf), new Xl(JSON.parse(a))
        } catch (c) {
            b.H(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
                d.jspb = String(a)
            })
        }
        return new Xl
    };

    function Bo(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Co(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Do() {
        var a = new p.Set,
            b = Kj();
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = v(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Eo(a) {
        a = a.id;
        return null != a && (Do().has(a) || r(a, "startsWith").call(a, "google_ads_iframe_") || r(a, "startsWith").call(a, "aswift"))
    }

    function Fo(a, b, c) {
        if (!a.sources) return !1;
        switch (Go(a)) {
            case 2:
                var d = Ho(a);
                if (d) return c.some(function(f) {
                    return Io(d, f)
                });
            case 1:
                var e = Jo(a);
                if (e) return b.some(function(f) {
                    return Io(e, f)
                })
        }
        return !1
    }

    function Go(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Jo(a) {
        return Ko(a, function(b) {
            return b.currentRect
        })
    }

    function Ho(a) {
        return Ko(a, function(b) {
            return b.previousRect
        })
    }

    function Ko(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Lo() {
        uk.call(this);
        this.h = this.g = this.R = this.P = this.G = 0;
        this.Ea = this.Ba = Number.NEGATIVE_INFINITY;
        this.xa = this.za = this.Aa = this.Ca = this.Ha = this.l = this.Ga = this.Y = 0;
        this.ya = !1;
        this.T = this.I = this.B = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Fa = a ? a.getAttribute("data-google-query-id") : null;
        this.j = null;
        this.Da = !1;
        this.ja = function() {}
    }
    w(Lo, uk);

    function Mo() {
        var a = new Lo;
        if (Q(pf)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = v(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                for (var c = b.next(); !c.done; c = b.next()) c = c.value, No(a).observe({
                    type: c,
                    buffered: !0
                });
                Oo(a)
            }
        }
    }

    function No(a) {
        a.j || (a.j = new PerformanceObserver(Qi(640, function(b) {
            var c = Po !== window.scrollX || Qo !== window.scrollY ? [] : Ro,
                d = So();
            b = v(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput) {
                        f.G += Number(e.value);
                        Number(e.value) > f.P && (f.P = Number(e.value));
                        f.R += 1;
                        var g = Fo(e, c, d);
                        g && (f.l += e.value, f.Ca++);
                        if (5E3 < e.startTime - f.Ba || 1E3 < e.startTime - f.Ea) f.Ba = e.startTime, f.g = 0, f.h = 0;
                        f.Ea = e.startTime;
                        f.g += e.value;
                        g && (f.h += e.value);
                        f.g > f.Y && (f.Y = f.g, f.Ha = f.h, f.Ga = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.Aa = Math.floor(e.renderTime || e.loadTime);
                    a.za = e.size;
                    break;
                case "first-input":
                    a.xa = Number((e.processingStart - e.startTime).toFixed(3));
                    a.ya = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.B += e, a.I = Math.max(a.I, e), a.T += 1
            }
        })));
        return a.j
    }

    function Oo(a) {
        var b = Qi(641, function() {
                var d = document;
                2 == (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && To(a)
            }),
            c = Qi(641, function() {
                return void To(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        a.ja = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            No(a).disconnect()
        }
    }
    Lo.prototype.i = function() {
        uk.prototype.i.call(this);
        this.ja()
    };

    function To(a) {
        if (!a.Da) {
            a.Da = !0;
            No(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Co("cls", a.G), b += Co("mls", a.P), b += Bo("nls", a.R), window.LayoutShiftAttribution && (b += Co("cas", a.l), b += Bo("nas", a.Ca)), b += Co("wls", a.Y), b += Co("tls", a.Ga), window.LayoutShiftAttribution && (b += Co("was", a.Ha)));
            window.LargestContentfulPaint && (b += Bo("lcp", a.Aa), b += Bo("lcps", a.za));
            window.PerformanceEventTiming && a.ya && (b += Bo("fid", a.xa));
            window.PerformanceLongTaskTiming &&
                (b += Bo("cbt", a.B), b += Bo("mbt", a.I), b += Bo("nlt", a.T));
            for (var c = 0, d = v(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Eo(e.value) && c++;
            b += Bo("nif", c);
            b += Bo("ifi", vd(window));
            c = P(ai).h();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (x === x.top ? 1 : 0);
            b += a.Fa ? "&qqid=" + encodeURIComponent(a.Fa) : Bo("pvsid", ld(x));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.u || (a.u = !0, a.i())
        }
    }

    function Io(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function So() {
        var a = [].concat(ka(document.getElementsByTagName("iframe"))).filter(Eo),
            b = [].concat(ka(Do())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        Po = window.scrollX;
        Qo = window.scrollY;
        return Ro = [].concat(ka(a), ka(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var Po = void 0,
        Qo = void 0,
        Ro = [];
    var X = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function Uo(a, b, c) {
        uk.call(this);
        var d = this;
        this.h = a;
        this.g = [];
        b && Vo() && this.g.push(X);
        c && this.g.push(Y);
        if (document.hasTrustToken && !Q(Hf)) {
            var e = new p.Map;
            this.g.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.h ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof p.Map ? new p.Map([].concat(ka(e), ka(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof p.Map || (window.goog_tt_promise_map =
                new p.Map)
        }
    }
    w(Uo, uk);

    function Vo() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function Wo() {
        var a = void 0 === a ? window.document : a;
        var b = P(Mf).g(Kf.g, Kf.defaultValue);
        kd(b, a)
    }

    function Xo(a, b) {
        return a || ".google.ch" === b || "function" === typeof M.__tcfapi
    }

    function Z(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function Yo() {
        var a = X.issuerOrigin + X.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: X.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(X.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5)
        })
    }

    function Zo() {
        var a = X.issuerOrigin + X.issuancePath;
        Z(X.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 10);
            return Yo()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return Z(X.issuerOrigin, 10), Yo();
            Z(X.issuerOrigin, 9)
        })
    }

    function $o() {
        Z(X.issuerOrigin, 13);
        return document.hasTrustToken(X.issuerOrigin).then(function(a) {
            return a ? Yo() : Zo()
        })
    }

    function ap() {
        Z(Y.issuerOrigin, 13);
        if (p.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = Y.issuerOrigin + Y.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f && "NoModificationAllowedError" ===
                        f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e) return p.Promise.reject({
                            state: 17,
                            error: f
                        });
                        Z(Y.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = ld(window);
            return a.then(function(e) {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return p.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                Z(Y.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" ===
                        typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = Nf(Jf);
                        Math.random() <= f && de({
                            state: e.state,
                            err: e.error.toString()
                        })
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function bp(a) {
        if (document.hasTrustToken && !Q(Hf) && a.h) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof p.Map) {
                var c = [];
                if (a.g.some(function(e) {
                        return e.issuerOrigin === X.issuerOrigin
                    })) {
                    var d = b.get(X.issuerOrigin);
                    d || (d = $o(), b.set(X.issuerOrigin, d));
                    c.push(d)
                }
                a.g.some(function(e) {
                    return e.issuerOrigin === Y.issuerOrigin
                }) && (a = b.get(Y.issuerOrigin), a || (a = ap(), b.set(Y.issuerOrigin, a)), c.push(a));
                if (0 < c.length && p.Promise && p.Promise.all) return p.Promise.all(c)
            }
        }
    };

    function cp(a) {
        K.call(this, a, -1, dp)
    }
    w(cp, K);

    function ep(a, b) {
        return C(a, 2, b)
    }

    function fp(a, b) {
        return C(a, 3, b)
    }

    function gp(a, b) {
        return C(a, 4, b)
    }

    function hp(a, b) {
        return C(a, 5, b)
    }

    function ip(a, b) {
        return C(a, 9, b)
    }

    function jp(a, b) {
        return Xb(a, 10, b)
    }

    function kp(a, b) {
        return C(a, 11, b)
    }

    function lp(a, b) {
        return C(a, 1, b)
    }

    function mp(a, b) {
        return C(a, 7, b)
    }

    function np(a) {
        K.call(this, a)
    }
    w(np, K);
    np.prototype.getVersion = function() {
        return J(this, 2)
    };
    var dp = [10, 6];
    var op = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function pp() {
        var a;
        return null != (a = M.google_tag_data) ? a : M.google_tag_data = {}
    }

    function qp() {
        var a, b;
        return "function" === typeof(null == (a = M.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function rp() {
        if (!qp()) return null;
        var a = pp();
        if (a.uach_promise) return a.uach_promise;
        var b = M.navigator.userAgentData.getHighEntropyValues(op).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }

    function sp(a) {
        var b;
        return kp(jp(hp(ep(lp(gp(mp(ip(fp(new cp, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new np;
            d = C(d, 1, c.brand);
            return C(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function tp() {
        var a, b;
        return null != (b = null == (a = rp()) ? void 0 : a.then(function(c) {
            return sp(c)
        })) ? b : null
    };

    function up(a, b) {
        b.google_ad_host || (a = sm(a)) && (b.google_ad_host = a)
    }

    function vp(a, b, c) {
        c = void 0 === c ? "" : c;
        M.google_sa_impl && !M.document.getElementById("google_shimpl") && (delete M.google_sa_queue, delete M.google_sa_impl);
        M.google_sa_queue || (M.google_sa_queue = [], M.google_process_slots = ek(215, function() {
            return wp(M.google_sa_queue)
        }), a = xp(c, a, b), Rc(M.document, a).id = "google_shimpl")
    }

    function wp(a) {
        var b = a.shift();
        "function" === typeof b && dk(216, b);
        a.length && x.setTimeout(ek(215, function() {
            return wp(a)
        }), 0)
    }

    function yp(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function xp(a, b, c) {
        b = Ac(zc(Yb(c, 4) ? b.xb : b.yb).toString());
        var d = {};
        a: {
            if (Yb(c, 4)) {
                if (a = a || Wm(M)) {
                    c = {};
                    a = (c.client = a, c.plah = M.location.host, c);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            a = {}
        }
        zp(a, d);
        zp(Of() ? {
            bust: Of()
        } : {}, d);
        return xc(b, d)
    }

    function zp(a, b) {
        Yc(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Ap(a) {
        a: {
            var b = void 0 === b ? !1 : b;
            for (var c = [x.top], d = [], e = 0, f; f = c[e++];) {
                b && !Pc(f) || d.push(f);
                try {
                    if (f.frames)
                        for (var g = 0; g < f.frames.length && 1024 > c.length; ++g) c.push(f.frames[g])
                } catch (k) {}
            }
            for (b = 0; b < d.length; b++) try {
                var h = d[b].frames.google_esf;
                if (h) {
                    od = h;
                    break a
                }
            } catch (k) {}
            od = null
        }
        if (od) return null;d = Sc("IFRAME");d.id = "google_esf";d.name = "google_esf";d.src = zc(a.Eb).toString();d.style.display = "none";
        return d
    }

    function Bp(a, b, c, d) {
        Cp(a, b, c, d, function(e, f) {
            e = e.document;
            for (var g = void 0, h = 0; !g || e.getElementById(g + "_host");) g = "aswift_" + h++;
            e = g;
            h = Number(f.google_ad_width || 0);
            var k = Number(f.google_ad_height || 0);
            g = Sc("DIV");
            g.id = e + "_host";
            var l = g.style;
            l.border = "none";
            l.height = k + "px";
            l.width = h + "px";
            l.margin = "0px";
            l.padding = "0px";
            l.position = "relative";
            l.visibility = "visible";
            l.backgroundColor = "transparent";
            g.style.display = "inline-block";
            c.appendChild(g);
            f = (f = f.google_shadow_mode) && "string" === typeof f && "open" ===
                f ? "open" : "closed";
            a: {
                try {
                    if (Q(lf) && g) {
                        var m = g.attachShadow({
                            mode: f
                        });
                        break a
                    }
                } catch (q) {}
                m = void 0
            }
            return {
                mb: e,
                outerInsElement: g,
                innerInsElement: g,
                shadowRoot: m
            }
        })
    }

    function Cp(a, b, c, d, e) {
        var f = e(a, b);
        e = f.mb;
        Dp(a, c, b);
        c = Ia;
        var g = (new Date).getTime();
        b.google_lrv = J(d, 2);
        b.google_async_iframe_id = e;
        b.shadow_root = f.shadowRoot;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        d = a.document.getElementById(e + "_host") ? function(h) {
            return h()
        } : function(h) {
            return window.setTimeout(h, 0)
        };
        yp(a, function() {
            var h = f.outerInsElement,
                k = f.innerInsElement;
            if (!(h && k && h.isConnected && k.isConnected) && (k = a.document.getElementById(String(b.google_async_iframe_id) +
                    "_host"), h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), null == k || null == h)) throw Error("no_ins");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                outerInsElement: h,
                innerInsElement: k
            })) && gk(911, h)
        }, d)
    }

    function Dp(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Fn[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Zc(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var q = k[m];
                            if (q.nodeName && q.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === q) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var u = a.parent;
                for (e = 0; u && u !== a && 25 > e; ++e) {
                    var y = u.frames;
                    for (d = 0; d < y.length; ++d)
                        if (a === y[d]) {
                            b.push(d);
                            break
                        }
                    a = u;
                    u = a.parent
                }
            } catch (G) {}
            c.google_ad_dom_fingerprint = Zc(h + b.join()).toString()
        }
    }

    function Ep() {
        var a = Qc(x);
        a && (a = se(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Fp(a) {
        Wo();
        Xo(am(), J(a, 8)) || ek(779, function() {
            var b = window;
            b = void 0 === b ? window : b;
            b = Q(b.PeriodicSyncManager ? Ff : Gf);
            var c = Q(If);
            b = new Uo(!0, b, c);
            0 < Nf(Lf) ? M.google_trust_token_operation_promise = bp(b) : bp(b)
        })();
        a = tp();
        null != a && a.then(function(b) {
            a: {
                xb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), dc);
                    break a
                } finally {
                    xb = !1
                }
                c = void 0
            }
            M.google_user_agent_client_hint = c
        });
        dn()
    };

    function Gp(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function Hp(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = Oc(c, "client");
            d && (b.google_ad_client = Gp("google_ad_client", d));
            (c = Oc(c, "host")) && (b.google_ad_host = Gp("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = Ja(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Gp(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function Ip(a) {
        if (a = rd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Jp(a, b, c, d) {
        Hp(a, b);
        if (c.document && c.document.body && !no(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = ro(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Fn[e + "x" + g];
                var h = f;
                if (e) {
                    var k = Gn(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new S("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = io(f, "auto", c, a, b);
                h = f;
                g.size().h(c, b,
                    a);
                Sn(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.K > f && !e && (b.google_ad_width = g.K, a.style.width = g.K + "px")
            }
        }
        e = a.offsetWidth || Ci(a, c, "width", L) || b.google_ad_width || 0;
        if (488 > ue(c)) {
            f = Qc(c) || c;
            g = b.google_ad_client;
            if (d = Ij(f.location, "google_responsive_slot_preview") || Q(ff) || cm(f, 1, g, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || no(c, b) || ri(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = Tc(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Ya(["static", "relative"], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    d = vi(c, a, e, .3, b);
                    !0 !== d ? (b.gfwrnwer = d, d = !1) : d = c === c.top ? !0 : !1
                }
            d ? (b.google_resizing_allowed = !0, b.ovlp = !0, b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1, d = !0) : d = !1
        } else d = !1;
        if (e = no(c, b)) po(e, a, b, c, d);
        else {
            if (ri(a, b)) {
                if (d = Tc(a, c)) a.style.width = d.width, a.style.height = d.height, qi(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Ip(c)
            } else qi(a.style, b);
            c.location &&
                "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? po(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = wi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };
    var Kp = ja(["(a=0)=>{let b;const c=class{};}"]);

    function Lp() {
        var a = Kp[0];
        var b = sc();
        a = b ? b.createScript(a) : a;
        a = new uc(a, tc);
        try {
            b = window;
            var c = a instanceof uc && a.constructor === uc ? a.g : "type_error:SafeScript";
            b.eval(c) === c && b.eval(c.toString());
            return {
                supports: !0,
                error: ""
            }
        } catch (d) {
            return {
                supports: !1,
                error: String(d)
            }
        }
    };

    function Mp(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        Fc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };

    function Np(a) {
        uk.call(this);
        this.h = a;
        this.g = null
    }
    w(Np, uk);
    Np.prototype.i = function() {
        uk.prototype.i.call(this)
    };

    function Op(a) {
        uk.call(this);
        this.j = a;
        this.g = null;
        this.h = !1
    }
    w(Op, uk);
    var Pp = null,
        Qp = [],
        Rp = new p.Map,
        Sp = -1;

    function Tp(a) {
        return Ki.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }

    function Up(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        Vp(a, b, c)
    }

    function Vp(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Jp);
        var e = b.google_reactive_ads_config;
        e || Jp(a, b, d, c);
        up(d, b);
        if (!Wp(a, b, d)) {
            e || (d.google_lpabyc = si(a, d) + Ci(a, d, "height", L));
            if (e) {
                e = e.page_level_pubvars || {};
                if (U(M).page_contains_reactive_tag && !U(M).allow_second_reactive_tag) {
                    if (e.pltais) {
                        qm(!1);
                        return
                    }
                    throw new S("Only one 'enable_page_level_ads' allowed per page.");
                }
                U(M).page_contains_reactive_tag = !0;
                qm(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = ud(d);
            Yc(Sm, function(f, g) {
                b[g] = b[g] ||
                    d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (U(M).first_tag_on_page || 0);
            dk(164, function() {
                Bp(d, b, a, c)
            })
        }
    }

    function Wp(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = om(c);
        if (f && f.Ia && "on" !== b.google_adtest && !e) {
            e = si(a, c);
            var g = te(c).clientHeight;
            if (!f.sa || f.sa && ((0 == g ? null : e / g) || 0) >= f.sa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = za(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), "slot" === f.Bb && (null !== ed(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== ed(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Tc(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (x.console && x.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Xp(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (Tp(e) && "reserved" !== e.dataset.adsbygoogleStatus && (!a || d.id === a)) return d
        }
        return null
    }

    function Yp(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    Zp(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function $p() {
        var a = Sc("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        hd(a, {
            display: "none"
        });
        return a
    }

    function aq(a, b) {
        var c = {};
        Yc(pe, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        ya(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = $p();
        nd.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!U(M).pause_ad_requests;
        Up(d, e, b)
    }

    function bq(a, b) {
        function c() {
            return aq(a, b)
        }
        se(x).wasPlaTagProcessed = !0;
        var d = x.document;
        if (d.body || "complete" === d.readyState || "interactive" === d.readyState) c();
        else {
            var e = Ec(ek(191, c));
            Fc(d, "DOMContentLoaded", e);
            (new x.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function Zp(a, b, c) {
        var d = {};
        dk(165, function() {
            return cq(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function dq(a) {
        delete a.google_checked_head;
        Yc(a, function(b, c) {
            Ji[c] || (delete a[c], x.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function eq(a, b) {
        var c = M.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || M.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = U(window);
            if (d.head_tag_slot_vars) fq(c);
            else {
                var e = {};
                Hp(c, e);
                dq(e);
                var f = qc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                M.adsbygoogle || (M.adsbygoogle = []);
                d = M.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                var g;
                e.google_adbreak_test || (null == (g = $b(b, Ll, 13, Lb)) ? 0 : Yb(g, 3)) && Q(mf) ? gq(f, a) : Mp(function() {
                    gq(f, a)
                })
            }
        }
    }

    function fq(a) {
        var b = U(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Oc(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new S("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function hq(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function cq(a, b, c, d) {
        if (null == a) throw new S("push() called with no parameters.");
        Ib(d, Ml, 14) && iq(a, Ob(Zl(d), 1), J(d, 2));
        var e = hq(a);
        if (0 !== e) d = rm(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = Ia), null == Pp ? (jq(a), Qp.push(a)) : 3 === e ? dk(787, function() {
            Pp.handleAdConfig(a)
        }) : gk(730, Pp.handleAdBreak(a));
        else {
            Ia = (new Date).getTime();
            vp(c, d, kq(a));
            lq();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new S("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) mq(a, d);
            else if ((e = a.params) && Yc(e, function(g, h) {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = nq(a.element);
                Hp(e, b);
                c = U(x).head_tag_slot_vars || {};
                Yc(c, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (e.hasAttribute("data-require-head") && !U(x).head_tag_slot_vars) throw new S("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new S("Ad client is missing from the slot.");
                Q(kf) || (b.google_apsail = im(b.google_ad_client));
                var f = (c = 0 === (U(M).first_tag_on_page || 0) && Lm(b)) && Mm(c);
                c && (f || (mq(c, d), U(M).skip_next_reactive_tag = !0), Q(jf) && f && oq(c));
                0 === (U(M).first_tag_on_page || 0) && (U(M).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!U(M).pause_ad_requests;
                Up(e, b, d);
                !Q(jf) && c && f && oq(c)
            }
        }
    }
    var pq = !1;

    function iq(a, b, c) {
        pq || (pq = !0, a = kq(a) || Wm(M), fk("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function kq(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function lq() {
        if (Q(af)) {
            var a = om(M);
            if (!(a = a && a.Ia)) {
                try {
                    var b = M.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? Kl(b) : null;
                a = !(b && Jl(b) && b)
            }
            a || pm(M, 1)
        }
    }

    function oq(a) {
        md(function() {
            se(x).wasPlaTagProcessed || x.adsbygoogle && x.adsbygoogle.push(a)
        })
    }

    function mq(a, b) {
        if (U(M).skip_next_reactive_tag) U(M).skip_next_reactive_tag = !1;
        else {
            0 === (U(M).first_tag_on_page || 0) && (U(M).first_tag_on_page = 1);
            if (a.tag_partner) {
                var c = a.tag_partner,
                    d = U(x);
                d.tag_partners = d.tag_partners || [];
                d.tag_partners.push(c)
            }
            Nm(a, b);
            bq(a, b)
        }
    }

    function nq(a) {
        if (a) {
            if (!Tp(a) && (a.id ? a = Xp(a.id) : a = null, !a)) throw new S("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new S("'element' is not a good DOM element.");
        } else if (a = Xp(), !a) throw new S("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function qq() {
        var a = new wk(M),
            b = new Np(M),
            c = new Op(M),
            d = M.__cmp ? 1 : 0;
        a = xk(a) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null == (e = b.h) ? void 0 : e.__uspapi)) || (b.g ? b = b.g : (b.g = fd(b.h, "__uspapiLocator"), b = b.g), f = null != b);
        c.h || (c.g || (c.g = fd(c.j, "googlefcPresent")), c.h = !0);
        fk("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: f ? 1 : 0,
            fc: c.g ? 1 : 0,
            ptt: 9
        }, .001)
    }

    function rq(a) {
        kk().S[mk(26)] = !!Number(a)
    }

    function sq(a) {
        Number(a) ? U(M).pause_ad_requests = !0 : (U(M).pause_ad_requests = !1, a = function() {
            if (!U(M).pause_ad_requests) {
                var b = void 0 === b ? {} : b;
                if ("function" === typeof window.CustomEvent) var c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b);
                else c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail);
                M.dispatchEvent(c)
            }
        }, x.setTimeout(a, 0), x.setTimeout(a, 1E3))
    }

    function tq(a) {
        fk("adsenseGfpKnob", {
            value: a,
            ptt: 9
        }, .1);
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        M._gfp_a_ = a
    }

    function uq(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function gq(a, b) {
        b = Jm(xc(Ac(zc(b.Ab).toString()), Of() ? {
            bust: Of()
        } : {})).then(function(c) {
            null == Pp && (c.init(a), Pp = c, vq())
        });
        gk(723, b);
        r(b, "finally").call(b, function() {
            Qp.length = 0;
            fk("slotcar", {
                event: "api_ld",
                time: Date.now() - Ia,
                time_pr: Date.now() - Sp
            })
        })
    }

    function vq() {
        for (var a = v(Rp), b = a.next(); !b.done; b = a.next()) {
            var c = v(b.value);
            b = c.next().value;
            c = c.next().value; - 1 !== c && (x.clearTimeout(c), Rp.delete(b))
        }
        a = {};
        for (b = 0; b < Qp.length; a = {
                ia: a.ia,
                ea: a.ea
            }, b++) Rp.has(b) || (a.ea = Qp[b], a.ia = hq(a.ea), dk(723, function(d) {
            return function() {
                3 === d.ia ? Pp.handleAdConfig(d.ea) : 2 === d.ia && gk(730, Pp.handleAdBreakBeforeReady(d.ea))
            }
        }(a)))
    }

    function jq(a) {
        var b = Qp.length;
        if (2 === hq(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === Sp && (Sp = Date.now());
            var c = x.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), Rp.set(b, -1), fk("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * Nf(nf));
            Rp.set(b, c)
        }
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        bk.Za(hk);
        dk(166, function() {
            var e = Ao(b);
            xo(J(e, 2));
            bm(Yb(e, 6));
            d();
            qd(16, [1, e.toJSON()]);
            var f = sd(rd(M)) || M,
                g = c(yo({
                    lb: a,
                    wb: J(e, 2)
                }), e);
            fm(f, e);
            En(f, e, null === M.document.currentScript ? 1 : an(g.Db));
            Zm();
            if (!Na() || 0 <= Ka(Qa(), 11)) {
                ck(Q(qf));
                Fp(e);
                wl();
                try {
                    Mo()
                } catch (q) {}
                Ep();
                eq(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    fk("new_abg_tag", {
                        value: String(Yb(e, 16)),
                        frequency: .01
                    }, .01);
                    qq();
                    var k = {
                        push: function(q) {
                            Zp(q, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k,
                            "requestNonPersonalizedAds", {
                                set: rq
                            }), Object.defineProperty(k, "pauseAdRequests", {
                            set: sq
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: tq
                        }), Object.defineProperty(k, "onload", {
                            set: uq
                        })
                    } catch (q) {}
                    if (h)
                        for (var l = v(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== h[m] && (k[m] = h[m]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    Yp(h, g, e);
                    f.adsbygoogle = k;
                    h && (k.onload = h.onload);
                    (f = Ap(g)) && document.documentElement.appendChild(f);
                    f = Lp();
                    fk("modern_js", {
                        fy: I(A(e, 1), 0),
                        supports: String(f.supports),
                        c: 2012,
                        e: f.error
                    }, .01)
                }
            }
        })
    })("m202210100101", zo, function(a, b) {
        var c = 2012 < I(A(b, 1), 0) ? "_fy" + I(A(b, 1), 0) : "",
            d = J(b, 3),
            e = J(b, 2);
        b = td(so, a, c);
        d = td(to, e, d);
        return {
            Ab: b,
            yb: td(uo, a, c),
            xb: td(vo, a, c),
            dc: td(wo, a, c),
            Eb: d,
            Db: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20221012\",\"r20190131\",null,null,null,null,\".google.co.in\",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,10000]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,1159,null,[null,500]],[1122,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1201,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1206,null,null,[1]],[1184,null,null,[1]],[1190,null,null,[1]],[380254521,null,null,[1]],[381914117,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1034,null,[]],[null,1080,null,[null,5]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[63669,null,null,[1]],[1033,null,null,[1]],[null,null,null,[null,null,null,[\"A+cA2PUOfIOKAdSDJOW5CP9ZlxONy1yu+hqAq72zUtKw4rLdihqRp6Nui\/jUyCyegr+BUtH+C+Elv0ufn05yBQEAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A+zsdH3aNZT\/bkjT8U\/o5ACzyaeNYzTvtoVmwf\/KOilfv39pxY2AIsOwhQJv+YnXp98i3TqrQibIVtMWs5UHjgoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"AxceVEhIegcDEHqLXFQ2+vPKqzCppoJYsRCZ\/BdfVnbM\/sUUF2BXV8lwNosyYjvoxnTh2FC8cOlAnA5uULr\/zAUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1947,null,null,[1]],[null,1972,null,[]],[null,1142,null,[null,8]],[null,1165,null,[null,1000]],[null,1195,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1115,null,[null,-1]],[null,1194,null,[null,1]],[null,469675170,null,[null,30000]],[1186,null,null,[1]],[392736476,null,null,[]],[null,null,null,[],null,1932],[432938498,null,null,[]]],[[10,[[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[500,[[42531705],[42531706]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[20,[[44760911],[44760912,[[1160,null,null,[1]]]],[44768832,[[1160,null,null,[1]]]]]],[10,[[44767166],[44767167]]],[10,[[44769305],[44769306,[[313,null,null,[1]]]]]],[null,[[44755592],[44755593,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755594,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755653,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[1,[[44770147],[44770148,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44773339,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44773340,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[null,[[44771607],[44771608,[[1200,null,null,[1]]]]],null,51],[50,[[44773613],[44773614,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[1000,[[44774652,null,[4,null,6,null,null,null,null,[\"44774648\"]]],[44774653,[[1086,null,null,[1]]],[4,null,6,null,null,null,null,[\"44774649\"]]]]],[10,[[44775121,[[null,null,1166,[null,null,\"h.3.0.0\"]],[10000,null,null,[1]]]],[44776004]],null,51],[1,[[44775965],[44775966,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[10,[[21066428],[21066429]]],[50,[[31069177],[31069178,[[1198,null,null,[1]]]]]],[10,[[31069972],[31069973,[[1208,null,null,[1]]]]]],[1,[[31070201],[31070202,[[1210,null,null,[1]]]]]],[1000,[[31070290,[[null,null,14,[null,null,\"31070290\"]]],[6,null,null,null,6,null,\"31070290\"]],[31070291,[[null,null,14,[null,null,\"31070291\"]]],[6,null,null,null,6,null,\"31070291\"]]],[4,null,55],63],[1000,[[31070319,[[null,null,14,[null,null,\"31070319\"]]],[6,null,null,null,6,null,\"31070319\"]],[31070320,[[null,null,14,[null,null,\"31070320\"]]],[6,null,null,null,6,null,\"31070320\"]]],[4,null,55],63],[100,[[31070341],[31070342,[[1209,null,null,[1]]]]]],[1000,[[31070367,[[null,null,14,[null,null,\"31070367\"]]],[6,null,null,null,6,null,\"31070367\"]],[31070368,[[null,null,14,[null,null,\"31070368\"]]],[6,null,null,null,6,null,\"31070368\"]]],[4,null,55],63],[10,[[31070385],[31070386,[[1211,null,null,[1]]]]]],[10,[[44770765],[44770766,[[1134,null,null,[1]]]]]],[50,[[44770880],[44770881,[[1171,null,null,[1]]]]]],[1,[[44772268],[44772269,[[1185,null,null,[1]]]]]],[50,[[44774292],[44774293,[[1147,null,null,[1]]]],[44774605,[[1147,null,null,[1]]]],[44774606,[[1147,null,null,[1]]]]],null,54],[null,[[44775016],[44775017,[[473283545,null,null,[1]]]]],null,66],[50,[[31067422],[31067423,[[null,1032,null,[]]]],[31068455],[31068456],[44775620],[44775621],[44776074]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]]]],[17,[[50,[[44773745],[44773746],[44773747]],null,null,null,null,31,null,null,113],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]],[10,[[31069794,[[null,1103,null,[null,31069794]]]],[31069795,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31069795]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,null,null,115],[1,[[31070275,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31070275]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,300]],[null,1194,null,[null,2]]]],[31070276,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31070276]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,300]],[null,1194,null,[null,2]],[471262996,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,40,null,115],[1,[[31070278,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31070278]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]]]],[31070279,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31070279]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[471262996,null,null,[1]],[469675169,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,60,null,115],[1,[[31070280,[[null,1103,null,[null,31070280]],[1121,null,null,[1]]]],[31070281,[[1120,null,null,[1]],[null,1103,null,[null,31070281]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[1121,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,80,null,115],[10,[[44775305,[[null,1103,null,[null,44775305]]]],[44775306,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44775306]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,20,null,115],[1,[[44775986,[[null,1103,null,[null,44775986]]]],[44775987,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44775987]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]],[478725123,null,null,[1]]]],[44775988,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44775988]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]],[472491850,null,null,[1]]]],[44775989,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44775989]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]],[478725123,null,null,[1]],[472491850,null,null,[1]]]],[44775990,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44775990]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]],[479047366,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,90,null,115],[1,[[44776362,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44776362]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]]]],[44776363,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44776363]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]],[479047366,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,140,null,115]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102],[50,[[31068919],[31068920],[31068921]],null,null,null,null,null,401,null,102]]],[13,[[10,[[31065824],[31065825,[[424117738,null,null,[1]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1,[[31064018],[31064019,[[1961,null,null,[1]]]]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[10,[[31069563],[31069564,[[471682731,null,null,[1]]]]]],[1000,[[31069602]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]],[1000,[[31069603,null,[4,null,8,null,null,null,null,[\"anonymouslyFramed\"]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]],[10,[[31070380],[31070381,[[477209535,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]],[1000,[[31070382,null,[4,null,9,null,null,null,null,[\"SharedArrayBuffer\"]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]],[200,[[31070383,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]],[31070384,[[null,null,null,[null,null,null,[\"A\/6fvn8\/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N\/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A\/nrjb\/iPi\/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,472572701],[439828594,null,null,[1]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]]]],[50,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[null,[[31067825],[31067826,[[1971,null,null,[1]]]]]],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]]],null,null,[0.001,\"1000\",1,\"1000\"]],[null,[]],null,null,null,null,1168744948,[44759875,44759926,44759837]]");