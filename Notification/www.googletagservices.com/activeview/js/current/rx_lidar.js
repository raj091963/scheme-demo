(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("a");
        },
        p = ca(this),
        t = function(a, b) {
            if (b) a: {
                var c = p;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    t("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.Ge = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.Ge
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("b");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = p[b[c]];
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
    t("Symbol.asyncIterator", function(a) {
        return a ? a : Symbol("Symbol.asyncIterator")
    });
    var da = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        u = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ea = function(a) {
            if (!(a instanceof Array)) {
                a = u(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ha = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        ia = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ha(d,
                        e) && (a[e] = d[e])
            }
            return a
        };
    t("Object.assign", function(a) {
        return a || ia
    });
    var ja = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ka;
    if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
    else {
        var la;
        a: {
            var na = {
                    a: !0
                },
                oa = {};
            try {
                oa.__proto__ = na;
                la = oa.a;
                break a
            } catch (a) {}
            la = !1
        }
        ka = la ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError("c`" + a);
            return a
        } : null
    }
    var pa = ka,
        w = function(a, b) {
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
            a.tg = b.prototype
        },
        qa = function() {
            this.yb = !1;
            this.Oa = null;
            this.Ed = void 0;
            this.Ka = 1;
            this.Vd = this.Xe = 0;
            this.ob = null
        },
        ra = function(a) {
            if (a.yb) throw new TypeError("e");
            a.yb = !0
        };
    qa.prototype.Bb = function(a) {
        this.Ed = a
    };
    qa.prototype.Jb = function(a) {
        this.ob = {
            hf: a,
            Ef: !0
        };
        this.Ka = this.Xe || this.Vd
    };
    qa.prototype.return = function(a) {
        this.ob = {
            return: a
        };
        this.Ka = this.Vd
    };
    qa.prototype.forIn = function(a) {
        return new sa(a)
    };
    var sa = function(a) {
            this.te = [];
            for (var b in a) this.te.push(b);
            this.te.reverse()
        },
        ta = function(a) {
            this.j = new qa;
            this.eg = a
        };
    ta.prototype.Bb = function(a) {
        ra(this.j);
        if (this.j.Oa) return ua(this, this.j.Oa.next, a, this.j.Bb);
        this.j.Bb(a);
        return va(this)
    };
    var wa = function(a, b) {
        ra(a.j);
        var c = a.j.Oa;
        if (c) return ua(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return va(a)
    };
    ta.prototype.Jb = function(a) {
        ra(this.j);
        if (this.j.Oa) return ua(this, this.j.Oa["throw"], a, this.j.Bb);
        this.j.Jb(a);
        return va(this)
    };
    var ua = function(a, b, c, d) {
            try {
                var e = b.call(a.j.Oa, c);
                if (!(e instanceof Object)) throw new TypeError("d`" + e);
                if (!e.done) return a.j.yb = !1, e;
                var f = e.value
            } catch (g) {
                return a.j.Oa = null, a.j.Jb(g), va(a)
            }
            a.j.Oa = null;
            d.call(a.j, f);
            return va(a)
        },
        va = function(a) {
            for (; a.j.Ka;) try {
                var b = a.eg(a.j);
                if (b) return a.j.yb = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.j.Ed = void 0, a.j.Jb(c)
            }
            a.j.yb = !1;
            if (a.j.ob) {
                b = a.j.ob;
                a.j.ob = null;
                if (b.Ef) throw b.hf;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        xa = function(a) {
            this.next =
                function(b) {
                    return a.Bb(b)
                };
            this.throw = function(b) {
                return a.Jb(b)
            };
            this.return = function(b) {
                return wa(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        ya = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        za = function(a) {
            this[Symbol.asyncIterator] = function() {
                return this
            };
            this[Symbol.iterator] = function() {
                return a
            };
            this.next = function(b) {
                return Promise.resolve(a.next(b))
            };
            void 0 !== a["throw"] && (this["throw"] = function(b) {
                return Promise.resolve(a["throw"](b))
            });
            void 0 !== a["return"] && (this["return"] = function(b) {
                return Promise.resolve(a["return"](b))
            })
        },
        y = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    t("Promise", function(a) {
        function b() {
            this.Fa = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.Nd = function(g) {
            if (null == this.Fa) {
                this.Fa = [];
                var h = this;
                this.Od(function() {
                    h.jf()
                })
            }
            this.Fa.push(g)
        };
        var d = p.setTimeout;
        b.prototype.Od = function(g) {
            d(g, 0)
        };
        b.prototype.jf = function() {
            for (; this.Fa && this.Fa.length;) {
                var g = this.Fa;
                this.Fa = [];
                for (var h = 0; h < g.length; ++h) {
                    var l = g[h];
                    g[h] = null;
                    try {
                        l()
                    } catch (k) {
                        this.Se(k)
                    }
                }
            }
            this.Fa = null
        };
        b.prototype.Se = function(g) {
            this.Od(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.kb = 0;
            this.Gb = void 0;
            this.eb = [];
            this.le = !1;
            var h = this.Pc();
            try {
                g(h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        };
        e.prototype.Pc = function() {
            function g(k) {
                return function(n) {
                    l || (l = !0, k.call(h, n))
                }
            }
            var h = this,
                l = !1;
            return {
                resolve: g(this.kg),
                reject: g(this.qd)
            }
        };
        e.prototype.kg = function(g) {
            if (g === this) this.qd(new TypeError("f"));
            else if (g instanceof e) this.ng(g);
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
                h ? this.jg(g) : this.Xd(g)
            }
        };
        e.prototype.jg = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (l) {
                this.qd(l);
                return
            }
            "function" == typeof h ? this.og(h, g) : this.Xd(g)
        };
        e.prototype.qd = function(g) {
            this.ze(2, g)
        };
        e.prototype.Xd = function(g) {
            this.ze(1, g)
        };
        e.prototype.ze = function(g, h) {
            if (0 != this.kb) throw Error("g`" + g + "`" + h + "`" + this.kb);
            this.kb = g;
            this.Gb = h;
            2 === this.kb && this.lg();
            this.kf()
        };
        e.prototype.lg = function() {
            var g = this;
            d(function() {
                if (g.Vf()) {
                    var h = p.console;
                    "undefined" !== typeof h && h.error(g.Gb)
                }
            }, 1)
        };
        e.prototype.Vf = function() {
            if (this.le) return !1;
            var g = p.CustomEvent,
                h = p.Event,
                l = p.dispatchEvent;
            if ("undefined" === typeof l) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = p.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.Gb;
            return l(g)
        };
        e.prototype.kf = function() {
            if (null != this.eb) {
                for (var g = 0; g < this.eb.length; ++g) f.Nd(this.eb[g]);
                this.eb = null
            }
        };
        var f = new b;
        e.prototype.ng = function(g) {
            var h =
                this.Pc();
            g.Sb(h.resolve, h.reject)
        };
        e.prototype.og = function(g, h) {
            var l = this.Pc();
            try {
                g.call(h, l.resolve, l.reject)
            } catch (k) {
                l.reject(k)
            }
        };
        e.prototype.then = function(g, h) {
            function l(q, A) {
                return "function" == typeof q ? function(z) {
                    try {
                        k(q(z))
                    } catch (v) {
                        n(v)
                    }
                } : A
            }
            var k, n, r = new e(function(q, A) {
                k = q;
                n = A
            });
            this.Sb(l(g, k), l(h, n));
            return r
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Sb = function(g, h) {
            function l() {
                switch (k.kb) {
                    case 1:
                        g(k.Gb);
                        break;
                    case 2:
                        h(k.Gb);
                        break;
                    default:
                        throw Error("h`" +
                            k.kb);
                }
            }
            var k = this;
            null == this.eb ? f.Nd(l) : this.eb.push(l);
            this.le = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, l) {
                l(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, l) {
                for (var k = u(g), n = k.next(); !n.done; n = k.next()) c(n.value).Sb(h, l)
            })
        };
        e.all = function(g) {
            var h = u(g),
                l = h.next();
            return l.done ? c([]) : new e(function(k, n) {
                function r(z) {
                    return function(v) {
                        q[z] = v;
                        A--;
                        0 == A && k(q)
                    }
                }
                var q = [],
                    A = 0;
                do q.push(void 0), A++, c(l.value).Sb(r(q.length - 1), n), l = h.next(); while (!l.done)
            })
        };
        return e
    });
    t("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ha(b, d) && c.push(b[d]);
            return c
        }
    });
    var Aa = function(a, b) {
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
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Aa(this, function(b) {
                return b
            })
        }
    });
    t("WeakMap", function(a) {
        function b() {}

        function c(l) {
            var k = typeof l;
            return "object" === k && null !== l || "function" === k
        }

        function d(l) {
            if (!ha(l, f)) {
                var k = new b;
                ba(l, f, {
                    value: k
                })
            }
        }

        function e(l) {
            var k = Object[l];
            k && (Object[l] = function(n) {
                if (n instanceof b) return n;
                Object.isExtensible(n) && d(n);
                return k(n)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        k = Object.seal({}),
                        n = new a([
                            [l, 2],
                            [k, 3]
                        ]);
                    if (2 != n.get(l) || 3 != n.get(k)) return !1;
                    n.delete(l);
                    n.set(k, 4);
                    return !n.has(l) && 4 == n.get(k)
                } catch (r) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(l) {
                this.wb = (g += Math.random() + 1).toString();
                if (l) {
                    l = u(l);
                    for (var k; !(k = l.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        h.prototype.set = function(l, k) {
            if (!c(l)) throw Error("i");
            d(l);
            if (!ha(l, f)) throw Error("j`" + l);
            l[f][this.wb] = k;
            return this
        };
        h.prototype.get = function(l) {
            return c(l) && ha(l, f) ? l[f][this.wb] : void 0
        };
        h.prototype.has = function(l) {
            return c(l) && ha(l, f) && ha(l[f], this.wb)
        };
        h.prototype.delete = function(l) {
            return c(l) &&
                ha(l, f) && ha(l[f], this.wb) ? delete l[f][this.wb] : !1
        };
        return h
    });
    t("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        l = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != l.get(h) || 1 != l.size || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || 2 != l.size) return !1;
                    var k = l.entries(),
                        n = k.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = k.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !k.next().done ? !1 : !0
                } catch (r) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this.sb = {};
                this.wa =
                    f();
                this.size = 0;
                if (h) {
                    h = u(h);
                    for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        c.prototype.set = function(h, l) {
            h = 0 === h ? 0 : h;
            var k = d(this, h);
            k.list || (k.list = this.sb[k.id] = []);
            k.J ? k.J.value = l : (k.J = {
                next: this.wa,
                za: this.wa.za,
                head: this.wa,
                key: h,
                value: l
            }, k.list.push(k.J), this.wa.za.next = k.J, this.wa.za = k.J, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.J && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.sb[h.id], h.J.za.next = h.J.next, h.J.next.za = h.J.za,
                h.J.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.sb = {};
            this.wa = this.wa.za = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).J
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).J) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, l) {
            for (var k = this.entries(),
                    n; !(n = k.next()).done;) n = n.value, h.call(l, n[1], n[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, l) {
                var k = l && typeof l;
                "object" == k || "function" == k ? b.has(l) ? k = b.get(l) : (k = "" + ++g, b.set(l, k)) : k = "p_" + l;
                var n = h.sb[k];
                if (n && ha(h.sb, k))
                    for (h = 0; h < n.length; h++) {
                        var r = n[h];
                        if (l !== l && r.key !== r.key || l === r.key) return {
                            id: k,
                            list: n,
                            index: h,
                            J: r
                        }
                    }
                return {
                    id: k,
                    list: n,
                    index: -1,
                    J: void 0
                }
            },
            e = function(h, l) {
                var k = h.wa;
                return da(function() {
                    if (k) {
                        for (; k.head != h.wa;) k = k.za;
                        for (; k.next != k.head;) return k =
                            k.next, {
                                done: !1,
                                value: l(k)
                            };
                        k = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.za = h.next = h.head = h
            },
            g = 0;
        return c
    });
    t("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    t("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Aa(this, function(b, c) {
                return c
            })
        }
    });
    t("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.pa = new Map;
            if (c) {
                c =
                    u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.pa.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.pa.set(c, c);
            this.size = this.pa.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.pa.delete(c);
            this.size = this.pa.size;
            return c
        };
        b.prototype.clear = function() {
            this.pa.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.pa.has(c)
        };
        b.prototype.entries = function() {
            return this.pa.entries()
        };
        b.prototype.values = function() {
            return this.pa.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.pa.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    t("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Aa(this, function(b, c) {
                return [b, c]
            })
        }
    });
    t("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    t("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    t("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    var Ba = function(a) {
        return a ? a : Array.prototype.fill
    };
    t("Int8Array.prototype.fill", Ba);
    t("Uint8Array.prototype.fill", Ba);
    t("Uint8ClampedArray.prototype.fill", Ba);
    t("Int16Array.prototype.fill", Ba);
    t("Uint16Array.prototype.fill", Ba);
    t("Int32Array.prototype.fill", Ba);
    t("Uint32Array.prototype.fill", Ba);
    t("Float32Array.prototype.fill", Ba);
    t("Float64Array.prototype.fill", Ba);
    t("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ha(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    t("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("k`includes");
            if (b instanceof RegExp) throw new TypeError("l`includes");
            return -1 !== (this + "").indexOf(b, c || 0)
        }
    });
    t("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            for (var c = [], d = 0; d < this.length; d++) {
                var e = this[d];
                Array.isArray(e) && 0 < b ? (e = Array.prototype.flat.call(e, b - 1), c.push.apply(c, e)) : c.push(e)
            }
            return c
        }
    });
    var Ca = this || self,
        Da = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        Ea = function(a) {
            var b = Da(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Fa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Ga = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.tg = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Sg = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d,
                    g)
            }
        };
    var Ha = function() {
        this.Ee = 0
    };
    Ha.prototype.Ba = function(a, b) {
        var c = this;
        return function() {
            var d = y.apply(0, arguments);
            c.Ee = a;
            return b.apply(null, ea(d))
        }
    };
    var Ia = function() {
            var a = {};
            this.sa = (a[3] = [], a[2] = [], a[1] = [], a);
            this.ed = !1
        },
        Ka = function(a, b, c) {
            var d = Ja(a, c);
            a.sa[c].push(b);
            d && 1 === a.sa[c].length && a.flush()
        },
        Ja = function(a, b) {
            return Object.keys(a.sa).map(function(c) {
                return Number(c)
            }).filter(function(c) {
                return !isNaN(c) && c > b
            }).every(function(c) {
                return 0 === a.sa[c].length
            })
        };
    Ia.prototype.flush = function() {
        if (!this.ed) {
            this.ed = !0;
            try {
                for (; Object.values(this.sa).some(function(a) {
                        return 0 < a.length
                    });) La(this, 3), La(this, 2), La(this, 1)
            } catch (a) {
                throw Object.values(this.sa).forEach(function(b) {
                    return void b.splice(0, b.length)
                }), a;
            } finally {
                this.ed = !1
            }
        }
    };
    var La = function(a, b) {
        for (; Ja(a, b) && 0 < a.sa[b].length;) a.sa[b][0](), a.sa[b].shift()
    };
    p.Object.defineProperties(Ia.prototype, {
        we: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Object.values(this.sa).some(function(a) {
                    return 0 < a.length
                })
            }
        }
    });

    function Ma(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ma);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ga(Ma, Error);
    Ma.prototype.name = "CustomError";
    var Na;

    function Oa(a, b) {
        var c = Ma.call;
        a = a.split("%s");
        for (var d = "", e = a.length - 1, f = 0; f < e; f++) d += a[f] + (f < b.length ? b[f] : "%s");
        c.call(Ma, this, d + a[e])
    }
    Ga(Oa, Ma);
    Oa.prototype.name = "AssertionError";

    function Qa(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new Oa("" + e, f || []);
    }
    var C = function(a, b, c) {
            a || Qa("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ra = function(a, b, c) {
            null == a && Qa("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Sa = function(a, b) {
            throw new Oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Ta = function(a, b, c) {
            "number" !== typeof a && Qa("Expected number but got %s: %s.", [Da(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Ua = function(a, b, c) {
            "string" !== typeof a && Qa("Expected string but got %s: %s.", [Da(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Va = function(a, b, c) {
            "function" !== typeof a && Qa("Expected function but got %s: %s.", [Da(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Wa = function(a, b, c) {
            Fa(a) || Qa("Expected object but got %s: %s.", [Da(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Xa = function(a, b, c) {
            Array.isArray(a) || Qa("Expected array but got %s: %s.", [Da(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Za = function(a, b, c, d) {
            a instanceof b || Qa("Expected instanceof %s but got %s.", [Ya(b), Ya(a)], c, Array.prototype.slice.call(arguments, 3));
            return a
        };

    function Ya(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
    var ab = Array.prototype.forEach ? function(a, b) {
            C(null != a.length);
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        bb = Array.prototype.map ? function(a, b) {
            C(null != a.length);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        cb = Array.prototype.some ? function(a, b) {
            C(null !=
                a.length);
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        },
        db = Array.prototype.every ? function(a, b) {
            C(null != a.length);
            return Array.prototype.every.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && !b.call(void 0, d[e], e, a)) return !1;
            return !0
        };

    function eb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function fb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function gb(a, b, c) {
        if (!Ea(a) || !Ea(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || hb;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return !1;
        return !0
    }

    function hb(a, b) {
        return a === b
    }

    function ib(a, b) {
        return eb.apply([], bb(a, b))
    };
    var jb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        kb = function(a, b) {
            return -1 != a.toLowerCase().indexOf(b.toLowerCase())
        },
        lb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };

    function mb() {
        var a = Ca.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function D(a) {
        return -1 != mb().indexOf(a)
    };

    function nb() {
        return D("Firefox") || D("FxiOS")
    }

    function ob() {
        return D("Safari") && !(qb() || D("Coast") || D("Opera") || D("Edge") || D("Edg/") || D("OPR") || nb() || D("Silk") || D("Android"))
    }

    function qb() {
        return (D("Chrome") || D("CriOS")) && !D("Edge") || D("Silk")
    }

    function rb() {
        return D("Android") && !(qb() || nb() || D("Opera") || D("Silk"))
    };
    var sb = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    /*


     Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var tb = !1,
        ub = {
            set ia(a) {
                a ? console.warn("m`" + Error().stack) : tb && console.log("n");
                tb = a
            },
            get ia() {
                return tb
            }
        };
    var vb = "function" === typeof Symbol && Symbol.observable || "@@observable";

    function wb(a) {
        setTimeout(function() {
            throw a;
        }, 0)
    };
    var xb = {
        closed: !0,
        next: function() {},
        error: function(a) {
            if (ub.ia) throw a;
            wb(a)
        },
        complete: function() {}
    };
    var yb = function() {
        function a(b) {
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b;
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    var zb = Array.isArray || function(a) {
        return a && "number" === typeof a.length
    };

    function Ab(a) {
        return "function" === typeof a
    };

    function Bb(a) {
        return null !== a && "object" === typeof a
    };
    var E = function(a) {
        this.closed = !1;
        this.Xa = this.lb = null;
        a && (this.Ie = !0, this.ua = a)
    };
    E.prototype.unsubscribe = function() {
        if (!this.closed) {
            var a = this.lb,
                b = this.Ie,
                c = this.ua,
                d = this.Xa;
            this.closed = !0;
            this.Xa = this.lb = null;
            if (a instanceof E) a.remove(this);
            else if (null !== a)
                for (var e = 0; e < a.length; ++e) a[e].remove(this);
            if (Ab(c)) {
                b && (this.ua = void 0);
                try {
                    c.call(this)
                } catch (l) {
                    var f = l instanceof yb ? Db(l.errors) : [l]
                }
            }
            if (zb(d)) {
                e = -1;
                for (var g = d.length; ++e < g;) {
                    var h = d[e];
                    if (Bb(h)) try {
                        h.unsubscribe()
                    } catch (l) {
                        f = f || [], l instanceof yb ? f = f.concat(Db(l.errors)) : f.push(l)
                    }
                }
            }
            if (f) throw new yb(f);
        }
    };
    E.prototype.add = function(a) {
        var b = a;
        if (!a) return E.EMPTY;
        switch (typeof a) {
            case "function":
                b = new E(a);
            case "object":
                if (b === this || b.closed || "function" !== typeof b.unsubscribe) return b;
                if (this.closed) return b.unsubscribe(), b;
                b instanceof E || (a = b, b = new E, b.Xa = [a]);
                break;
            default:
                throw Error("o`" + a);
        }
        var c = b.lb;
        if (null === c) b.lb = this;
        else if (c instanceof E) {
            if (c === this) return b;
            b.lb = [c, this]
        } else if (-1 === c.indexOf(this)) c.push(this);
        else return b;
        a = this.Xa;
        null === a ? this.Xa = [b] : a.push(b);
        return b
    };
    E.prototype.remove = function(a) {
        var b = this.Xa;
        b && (a = b.indexOf(a), -1 !== a && b.splice(a, 1))
    };
    var Eb = new E;
    Eb.closed = !0;
    E.EMPTY = Eb;

    function Fb(a) {
        return a instanceof E || a && "closed" in a && "function" === typeof a.remove && "function" === typeof a.add && "function" === typeof a.unsubscribe
    }

    function Db(a) {
        return a.reduce(function(b, c) {
            return b.concat(c instanceof yb ? c.errors : c)
        }, [])
    };
    var J = function(a, b, c) {
        E.call(this);
        this.sc = null;
        this.A = this.Z = this.rc = !1;
        switch (arguments.length) {
            case 0:
                this.destination = xb;
                break;
            case 1:
                if (!a) {
                    this.destination = xb;
                    break
                }
                if ("object" === typeof a) {
                    a instanceof J ? (this.Z = a.Z, this.destination = a, a.add(this)) : (this.Z = !0, this.destination = new Gb(this, a));
                    break
                }
            default:
                this.Z = !0, this.destination = new Gb(this, a, b, c)
        }
    };
    w(J, E);
    J.EMPTY = E.EMPTY;
    J.create = function(a, b, c) {
        a = new J(a, b, c);
        a.Z = !1;
        return a
    };
    m = J.prototype;
    m.next = function(a) {
        this.A || this.l(a)
    };
    m.error = function(a) {
        this.A || (this.A = !0, this.S(a))
    };
    m.complete = function() {
        this.A || (this.A = !0, this.u())
    };
    m.unsubscribe = function() {
        this.closed || (this.A = !0, E.prototype.unsubscribe.call(this))
    };
    m.l = function(a) {
        this.destination.next(a)
    };
    m.S = function(a) {
        this.destination.error(a);
        this.unsubscribe()
    };
    m.u = function() {
        this.destination.complete();
        this.unsubscribe()
    };
    var Gb = function(a, b, c, d) {
        J.call(this);
        this.mb = a;
        var e = this;
        if (Ab(b)) var f = b;
        else b && (f = b.next, c = b.error, d = b.complete, b !== xb && (e = Object.create(b), Fb(b) && b.add(this.unsubscribe.bind(this)), e.unsubscribe = this.unsubscribe.bind(this)));
        this.ta = e;
        this.l = f;
        this.S = c;
        this.u = d
    };
    w(Gb, J);
    Gb.EMPTY = J.EMPTY;
    Gb.create = J.create;
    m = Gb.prototype;
    m.next = function(a) {
        if (!this.A && this.l) {
            var b = this.mb;
            ub.ia && b.Z ? this.yc(b, this.l, a) && this.unsubscribe() : this.zc(this.l, a)
        }
    };
    m.error = function(a) {
        if (!this.A) {
            var b = this.mb,
                c = ub.ia;
            if (this.S) c && b.Z ? this.yc(b, this.S, a) : this.zc(this.S, a), this.unsubscribe();
            else if (b.Z) c ? (b.sc = a, b.rc = !0) : wb(a), this.unsubscribe();
            else {
                this.unsubscribe();
                if (c) throw a;
                wb(a)
            }
        }
    };
    m.complete = function() {
        var a = this;
        if (!this.A) {
            var b = this.mb;
            if (this.u) {
                var c = function() {
                    return a.u.call(a.ta)
                };
                ub.ia && b.Z ? this.yc(b, c) : this.zc(c)
            }
            this.unsubscribe()
        }
    };
    m.zc = function(a, b) {
        try {
            a.call(this.ta, b)
        } catch (c) {
            this.unsubscribe();
            if (ub.ia) throw c;
            wb(c)
        }
    };
    m.yc = function(a, b, c) {
        if (!ub.ia) throw Error("p");
        try {
            b.call(this.ta, c)
        } catch (d) {
            return ub.ia ? (a.sc = d, a.rc = !0) : wb(d), !0
        }
        return !1
    };
    m.ua = function() {
        var a = this.mb;
        this.mb = this.ta = null;
        a.unsubscribe()
    };

    function Hb(a) {
        return a
    };

    function K() {
        return Ib(y.apply(0, arguments))
    }

    function Ib(a) {
        return 0 === a.length ? Hb : 1 === a.length ? a[0] : function(b) {
            return a.reduce(function(c, d) {
                return d(c)
            }, b)
        }
    };

    function Jb(a) {
        return a && "function" === typeof a.next && "function" === typeof a.error && "function" === typeof a.complete
    }
    var Kb = function(a) {
        J.call(this);
        this.destination = a
    };
    w(Kb, J);
    Kb.EMPTY = J.EMPTY;
    Kb.create = J.create;
    var L = function(a) {
        a && (this.W = a)
    };
    m = L.prototype;
    m.cb = function(a) {
        var b = new L;
        b.source = this;
        b.operator = a;
        return b
    };
    m.subscribe = function(a, b, c) {
        var d = this.operator;
        a: {
            if (a) {
                if (a instanceof J || Jb(a) && Fb(a)) break a;
                if (Jb(a)) {
                    a = new Kb(a);
                    break a
                }
            }
            a = a || b || c ? new J(a, b, c) : new J(xb)
        }
        d ? a.add(d.call(a, this.source)) : a.add(this.source || ub.ia && !a.Z ? this.W(a) : this.Ec(a));
        if (ub.ia && a.Z && (a.Z = !1, a.rc)) throw a.sc;
        return a
    };
    m.Ec = function(a) {
        try {
            return this.W(a)
        } catch (e) {
            ub.ia && (a.rc = !0, a.sc = e);
            var b;
            a: {
                for (b = a; b;) {
                    var c = b.destination,
                        d = b.A;
                    if (b.closed || d) {
                        b = !1;
                        break a
                    }
                    b = c && c instanceof J ? c : null
                }
                b = !0
            }
            b ? a.error(e) : console.warn(e)
        }
    };
    m.forEach = function(a, b) {
        var c = this;
        b = Lb(b);
        return new b(function(d, e) {
            var f = c.subscribe(function(g) {
                try {
                    a(g)
                } catch (h) {
                    e(h), f && f.unsubscribe()
                }
            }, e, d)
        })
    };
    m.W = function(a) {
        var b = this.source;
        return b && b.subscribe(a)
    };
    L.prototype[vb] = function() {
        return this
    };
    L.prototype.g = function() {
        var a = y.apply(0, arguments);
        return 0 === a.length ? this : Ib(a)(this)
    };
    L.create = function(a) {
        return new L(a)
    };

    function Lb(a) {
        a || (a = Promise);
        if (!a) throw Error("q");
        return a
    };
    var Mb = function(a, b) {
        E.call(this);
        this.Be = a;
        this.ud = b;
        this.closed = !1
    };
    w(Mb, E);
    Mb.EMPTY = E.EMPTY;
    Mb.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.Be,
                b = a.ya;
            this.Be = null;
            !b || 0 === b.length || a.A || a.closed || (a = b.indexOf(this.ud), -1 !== a && b.splice(a, 1))
        }
    };
    var Nb = function() {
        function a() {
            this.message = "object unsubscribed";
            this.name = "ObjectUnsubscribedError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    var M = function() {
        this.ya = [];
        this.ub = this.A = this.closed = !1;
        this.tc = null
    };
    w(M, L);
    m = M.prototype;
    m.cb = function(a) {
        var b = new Ob(this, this);
        b.operator = a;
        return b
    };
    m.next = function(a) {
        if (this.closed) throw new Nb;
        if (!this.A) {
            var b = this.ya,
                c = b.length;
            b = b.slice();
            for (var d = 0; d < c; d++) b[d].next(a)
        }
    };
    m.error = function(a) {
        if (this.closed) throw new Nb;
        this.ub = !0;
        this.tc = a;
        this.A = !0;
        var b = this.ya,
            c = b.length;
        b = b.slice();
        for (var d = 0; d < c; d++) b[d].error(a);
        this.ya.length = 0
    };
    m.complete = function() {
        if (this.closed) throw new Nb;
        this.A = !0;
        var a = this.ya,
            b = a.length;
        a = a.slice();
        for (var c = 0; c < b; c++) a[c].complete();
        this.ya.length = 0
    };
    m.unsubscribe = function() {
        this.closed = this.A = !0;
        this.ya = null
    };
    m.Ec = function(a) {
        if (this.closed) throw new Nb;
        return L.prototype.Ec.call(this, a)
    };
    m.W = function(a) {
        if (this.closed) throw new Nb;
        if (this.ub) return a.error(this.tc), E.EMPTY;
        if (this.A) return a.complete(), E.EMPTY;
        this.ya.push(a);
        return new Mb(this, a)
    };
    m.ba = function() {
        var a = new L;
        a.source = this;
        return a
    };
    M.create = function(a, b) {
        return new Ob(a, b)
    };
    var Ob = function(a, b) {
        M.call(this);
        this.destination = a;
        this.source = b
    };
    w(Ob, M);
    Ob.create = M.create;
    Ob.prototype.next = function(a) {
        var b = this.destination;
        b && b.next && b.next(a)
    };
    Ob.prototype.error = function(a) {
        var b = this.destination;
        b && b.error && this.destination.error(a)
    };
    Ob.prototype.complete = function() {
        var a = this.destination;
        a && a.complete && this.destination.complete()
    };
    Ob.prototype.W = function(a) {
        return this.source ? this.source.subscribe(a) : E.EMPTY
    };
    var Pb = function(a) {
        M.call(this);
        this.Fc = a
    };
    w(Pb, M);
    Pb.create = M.create;
    Pb.prototype.W = function(a) {
        var b = M.prototype.W.call(this, a);
        b && !b.closed && a.next(this.Fc);
        return b
    };
    Pb.prototype.next = function(a) {
        M.prototype.next.call(this, this.Fc = a)
    };
    p.Object.defineProperties(Pb.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.ub) throw this.tc;
                if (this.closed) throw new Nb;
                return this.Fc
            }
        }
    });
    var Qb = new L(function(a) {
        return a.complete()
    });

    function Rb(a, b) {
        return new L(function(c) {
            var d = new E,
                e = 0;
            d.add(b.s(function() {
                e === a.length ? c.complete() : (c.next(a[e++]), c.closed || d.add(this.s()))
            }));
            return d
        })
    };
    var Sb = function(a) {
        return function(b) {
            for (var c = 0, d = a.length; c < d && !b.closed; c++) b.next(a[c]);
            b.complete()
        }
    };

    function Tb(a, b) {
        return b ? Rb(a, b) : new L(Sb(a))
    };

    function Ub(a) {
        return a && "function" === typeof a.s
    };

    function N() {
        var a = y.apply(0, arguments),
            b = a[a.length - 1];
        return Ub(b) ? (a.pop(), Rb(a, b)) : Tb(a)
    };

    function Vb(a) {
        return new L(function(b) {
            return b.error(a)
        })
    };
    var Wb = {
        now: function() {
            return (Wb.df || Date).now()
        },
        df: void 0
    };
    var Xb = function(a, b, c) {
        a = void 0 === a ? Infinity : a;
        b = void 0 === b ? Infinity : b;
        c = void 0 === c ? Wb : c;
        M.call(this);
        this.wg = c;
        this.Pb = [];
        this.Kd = !1;
        this.Fd = 1 > a ? 1 : a;
        this.Ne = 1 > b ? 1 : b;
        Infinity === b ? (this.Kd = !0, this.next = this.Sf) : this.next = this.Uf
    };
    w(Xb, M);
    Xb.create = M.create;
    m = Xb.prototype;
    m.Sf = function(a) {
        var b = this.Pb;
        b.push(a);
        b.length > this.Fd && b.shift();
        M.prototype.next.call(this, a)
    };
    m.Uf = function(a) {
        this.Pb.push({
            time: this.Id(),
            value: a
        });
        this.Ld();
        M.prototype.next.call(this, a)
    };
    m.W = function(a) {
        var b = this.Kd,
            c = b ? this.Pb : this.Ld(),
            d = c.length;
        if (this.closed) throw new Nb;
        if (this.A || this.ub) var e = E.EMPTY;
        else this.ya.push(a), e = new Mb(this, a);
        if (b)
            for (var f = 0; f < d && !a.closed; f++) a.next(c[f]);
        else
            for (f = 0; f < d && !a.closed; f++) a.next(c[f].value);
        this.ub ? a.error(this.tc) : this.A && a.complete();
        return e
    };
    m.Id = function() {
        var a = this.wg;
        return a ? a.now() : Wb.now()
    };
    m.Ld = function() {
        for (var a = this.Id(), b = this.Fd, c = this.Ne, d = this.Pb, e = d.length, f = 0; f < e && !(a - d[f].time < c);) f++;
        e > b && (f = Math.max(f, e - b));
        0 < f && d.splice(0, f);
        return d
    };
    var Zb = function(a, b) {
        b = void 0 === b ? Yb : b;
        this.He = a;
        this.now = b
    };
    Zb.prototype.s = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        return (new this.He(this, a)).s(c, b)
    };
    var Yb = Wb.now;
    var $b = function() {
        function a() {
            this.message = "no elements in sequence";
            this.name = "EmptyError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();

    function O(a, b) {
        if (a && "function" === typeof a.cb) return a.cb(b);
        throw new TypeError("r");
    };

    function ac() {
        return function(a) {
            return O(a, new bc)
        }
    }
    var bc = function() {};
    bc.prototype.call = function(a, b) {
        b.nb++;
        a = new cc(a, b);
        var c = b.subscribe(a);
        a.closed || (a.connection = b.connect());
        return c
    };
    var cc = function(a, b) {
        J.call(this, a);
        this.Ya = b;
        this.connection = null
    };
    w(cc, J);
    cc.EMPTY = J.EMPTY;
    cc.create = J.create;
    cc.prototype.ua = function() {
        var a = this.Ya;
        if (a) {
            this.Ya = null;
            var b = a.nb;
            0 >= b ? this.connection = null : (a.nb = b - 1, 1 < b ? this.connection = null : (b = this.connection, a = a.Wa, this.connection = null, !a || b && a !== b || a.unsubscribe()))
        } else this.connection = null
    };
    var dc = function(a, b) {
        this.source = a;
        this.Ce = b;
        this.nb = 0;
        this.Qb = !1
    };
    w(dc, L);
    dc.create = L.create;
    dc.prototype.W = function(a) {
        return this.bc().subscribe(a)
    };
    dc.prototype.bc = function() {
        var a = this.Rb;
        if (!a || a.A) this.Rb = this.Ce();
        return this.Rb
    };
    dc.prototype.connect = function() {
        var a = this.Wa;
        a || (this.Qb = !1, a = this.Wa = new E, a.add(this.source.subscribe(new ec(this.bc(), this))), a.closed && (this.Wa = null, a = E.EMPTY));
        return a
    };
    dc.prototype.ue = function() {
        return ac()(this)
    };
    var fc, gc = dc.prototype;
    fc = {
        operator: {
            value: null
        },
        nb: {
            value: 0,
            writable: !0
        },
        Rb: {
            value: null,
            writable: !0
        },
        Wa: {
            value: null,
            writable: !0
        },
        W: {
            value: gc.W
        },
        Qb: {
            value: gc.Qb,
            writable: !0
        },
        bc: {
            value: gc.bc
        },
        connect: {
            value: gc.connect
        },
        ue: {
            value: gc.ue
        }
    };
    var ec = function(a, b) {
        J.call(this);
        this.destination = a;
        this.Ya = b
    };
    w(ec, J);
    ec.EMPTY = J.EMPTY;
    ec.create = J.create;
    ec.prototype.S = function(a) {
        this.ua();
        J.prototype.S.call(this, a)
    };
    ec.prototype.u = function() {
        this.Ya.Qb = !0;
        this.ua();
        J.prototype.u.call(this)
    };
    ec.prototype.ua = function() {
        var a = this.Ya;
        if (a) {
            this.Ya = null;
            var b = a.Wa;
            a.nb = 0;
            a.Rb = null;
            a.Wa = null;
            b && b.unsubscribe()
        }
    };

    function P(a) {
        return function(b) {
            if ("function" !== typeof a) throw new TypeError("s");
            return O(b, new hc(a))
        }
    }
    var hc = function(a) {
        this.G = a;
        this.aa = void 0
    };
    hc.prototype.call = function(a, b) {
        return b.subscribe(new ic(a, this.G, this.aa))
    };
    var ic = function(a, b, c) {
        J.call(this, a);
        this.G = b;
        this.count = 0;
        this.aa = c || this
    };
    w(ic, J);
    ic.EMPTY = J.EMPTY;
    ic.create = J.create;
    ic.prototype.l = function(a) {
        try {
            var b = this.G.call(this.aa, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var jc = "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    var kc = function(a) {
        return a && "number" === typeof a.length && "function" !== typeof a
    };

    function lc(a) {
        return !!a && "function" !== typeof a.subscribe && "function" === typeof a.then
    };

    function mc(a) {
        return function(b) {
            nc(a, b).catch(function(c) {
                return b.error(c)
            })
        }
    }

    function nc(a, b) {
        var c, d, e;
        return ya(new xa(new ta(function(f) {
            switch (f.Ka) {
                case 1:
                    var g = a[Symbol.asyncIterator];
                    c = void 0 !== g ? g.call(a) : new za(u(a));
                case 2:
                    return g = c.next(), f.Ka = 5, {
                        value: g
                    };
                case 5:
                    d = f.Ed;
                    if (d.done) {
                        f.Ka = 4;
                        break
                    }
                    e = d.value;
                    b.next(e);
                    f.Ka = 2;
                    break;
                case 4:
                    b.complete(), f.Ka = 0
            }
        })))
    };
    var oc = function(a) {
        return function(b) {
            var c = a[jc]();
            do {
                var d = void 0;
                try {
                    d = c.next()
                } catch (e) {
                    b.error(e);
                    return
                }
                if (d.done) {
                    b.complete();
                    break
                }
                b.next(d.value);
                if (b.closed) break
            } while (1);
            "function" === typeof c.return && b.add(function() {
                c.return && c.return()
            });
            return b
        }
    };
    var pc = function(a) {
        return function(b) {
            var c = a[vb]();
            if ("function" !== typeof c.subscribe) throw new TypeError("t");
            return c.subscribe(b)
        }
    };
    var qc = function(a) {
        return function(b) {
            a.then(function(c) {
                b.closed || (b.next(c), b.complete())
            }, function(c) {
                return b.error(c)
            }).then(null, wb);
            return b
        }
    };
    var rc = function(a) {
        if (a && "function" === typeof a[vb]) return pc(a);
        if (kc(a)) return Sb(a);
        if (lc(a)) return qc(a);
        if (a && "function" === typeof a[jc]) return oc(a);
        if (Symbol && Symbol.asyncIterator && a && "function" === typeof a[Symbol.asyncIterator]) return mc(a);
        throw new TypeError("u`" + (Bb(a) ? "an invalid object" : "'" + a + "'"));
    };
    var sc = function(a) {
        J.call(this);
        this.parent = a
    };
    w(sc, J);
    sc.EMPTY = J.EMPTY;
    sc.create = J.create;
    sc.prototype.l = function(a) {
        this.parent.qa(a)
    };
    sc.prototype.S = function(a) {
        this.parent.La(a);
        this.unsubscribe()
    };
    sc.prototype.u = function() {
        this.parent.P();
        this.unsubscribe()
    };
    var tc = function(a, b, c) {
        J.call(this);
        this.parent = a;
        this.se = b;
        this.dg = c
    };
    w(tc, J);
    tc.EMPTY = J.EMPTY;
    tc.create = J.create;
    tc.prototype.l = function(a) {
        this.parent.qa(this.se, a, this.dg, this)
    };
    tc.prototype.S = function(a) {
        this.parent.La(a);
        this.unsubscribe()
    };
    tc.prototype.u = function() {
        this.parent.P(this);
        this.unsubscribe()
    };
    var Q = function() {
        J.apply(this, arguments)
    };
    w(Q, J);
    Q.EMPTY = J.EMPTY;
    Q.create = J.create;
    Q.prototype.qa = function(a) {
        this.destination.next(a)
    };
    Q.prototype.La = function(a) {
        this.destination.error(a)
    };
    Q.prototype.P = function() {
        this.destination.complete()
    };
    var R = function() {
        J.apply(this, arguments)
    };
    w(R, J);
    R.EMPTY = J.EMPTY;
    R.create = J.create;
    R.prototype.qa = function(a, b) {
        this.destination.next(b)
    };
    R.prototype.La = function(a) {
        this.destination.error(a)
    };
    R.prototype.P = function() {
        this.destination.complete()
    };

    function uc(a, b) {
        if (!b.closed) return a instanceof L ? a.subscribe(b) : rc(a)(b)
    };
    var vc = {};

    function S() {
        var a = y.apply(0, arguments),
            b = void 0,
            c = void 0,
            d = void 0;
        Ub(a[a.length - 1]) && (c = a.pop());
        "function" === typeof a[a.length - 1] && (b = a.pop());
        if (1 === a.length) {
            var e = a[0];
            zb(e) && (a = e);
            Bb(e) && Object.getPrototypeOf(e) === Object.prototype && (d = Object.keys(e), a = d.map(function(f) {
                return e[f]
            }))
        }
        return O(Tb(a, c), new wc(b, d))
    }
    var wc = function(a, b) {
        this.pc = a;
        this.keys = b
    };
    wc.prototype.call = function(a, b) {
        return b.subscribe(new xc(a, this.pc, this.keys))
    };
    var xc = function(a, b, c) {
        R.call(this, a);
        this.pc = b;
        this.keys = c;
        this.active = 0;
        this.values = [];
        this.Ma = []
    };
    w(xc, R);
    xc.EMPTY = R.EMPTY;
    xc.create = R.create;
    m = xc.prototype;
    m.l = function(a) {
        this.values.push(vc);
        this.Ma.push(a)
    };
    m.u = function() {
        var a = this.Ma,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            this.Va = this.active = b;
            for (var c = 0; c < b; c++) this.add(uc(a[c], new tc(this, null, c)))
        }
    };
    m.P = function() {
        0 === --this.active && this.destination.complete()
    };
    m.qa = function(a, b, c) {
        var d = this.values,
            e = d[c];
        e = this.Va ? e === vc ? --this.Va : this.Va : 0;
        d[c] = b;
        0 === e && (this.pc ? this.Ke(d) : this.destination.next(this.keys ? this.keys.reduce(function(f, g, h) {
            return f[g] = d[h], f
        }, {}) : d.slice()))
    };
    m.Ke = function(a) {
        try {
            var b = this.pc.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };

    function yc(a, b) {
        if (!a) throw Error("v");
        return new L(function(c) {
            var d = new E;
            d.add(b.s(function() {
                var e = a[Symbol.asyncIterator]();
                d.add(b.s(function() {
                    var f = this;
                    e.next().then(function(g) {
                        g.done ? c.complete() : (c.next(g.value), f.s())
                    })
                }))
            }));
            return d
        })
    };

    function zc(a, b) {
        if (!a) throw Error("v");
        return new L(function(c) {
            var d = new E,
                e;
            d.add(function() {
                e && "function" === typeof e.return && e.return()
            });
            d.add(b.s(function() {
                e = a[jc]();
                d.add(b.s(function() {
                    if (!c.closed) {
                        try {
                            var f = e.next();
                            var g = f.value;
                            var h = f.done
                        } catch (l) {
                            c.error(l);
                            return
                        }
                        h ? c.complete() : (c.next(g), this.s())
                    }
                }))
            }));
            return d
        })
    };

    function Ac(a, b) {
        return new L(function(c) {
            var d = new E;
            d.add(b.s(function() {
                var e = a[vb]();
                d.add(e.subscribe({
                    next: function(f) {
                        d.add(b.s(function() {
                            return c.next(f)
                        }))
                    },
                    error: function(f) {
                        d.add(b.s(function() {
                            return c.error(f)
                        }))
                    },
                    complete: function() {
                        d.add(b.s(function() {
                            return c.complete()
                        }))
                    }
                }))
            }));
            return d
        })
    };

    function Bc(a, b) {
        return new L(function(c) {
            var d = new E;
            d.add(b.s(function() {
                return a.then(function(e) {
                    d.add(b.s(function() {
                        c.next(e);
                        d.add(b.s(function() {
                            return c.complete()
                        }))
                    }))
                }, function(e) {
                    d.add(b.s(function() {
                        return c.error(e)
                    }))
                })
            }));
            return d
        })
    };

    function Cc(a) {
        var b = Dc;
        if (null != a) {
            if (a && "function" === typeof a[vb]) return Ac(a, b);
            if (lc(a)) return Bc(a, b);
            if (kc(a)) return Rb(a, b);
            if (a && "function" === typeof a[jc] || "string" === typeof a) return zc(a, b);
            if (Symbol && Symbol.asyncIterator && "function" === typeof a[Symbol.asyncIterator]) return yc(a, b)
        }
        throw new TypeError("w`" + (null !== a && typeof a || a));
    };

    function Ec(a) {
        return a instanceof L ? a : new L(rc(a))
    };

    function Fc(a, b) {
        var c = void 0 === c ? Infinity : c;
        if ("function" === typeof b) return function(d) {
            return d.g(Fc(function(e, f) {
                return Ec(a(e, f)).g(P(function(g, h) {
                    return b(e, g, f, h)
                }))
            }, c))
        };
        "number" === typeof b && (c = b);
        return function(d) {
            return O(d, new Gc(a, c))
        }
    }
    var Gc = function(a, b) {
        b = void 0 === b ? Infinity : b;
        this.G = a;
        this.Lc = b
    };
    Gc.prototype.call = function(a, b) {
        return b.subscribe(new Hc(a, this.G, this.Lc))
    };
    var Hc = function(a, b, c) {
        c = void 0 === c ? Infinity : c;
        Q.call(this, a);
        this.destination = a;
        this.G = b;
        this.Lc = c;
        this.ce = !1;
        this.buffer = [];
        this.index = this.active = 0
    };
    w(Hc, Q);
    Hc.EMPTY = Q.EMPTY;
    Hc.create = Q.create;
    Hc.prototype.l = function(a) {
        if (this.active < this.Lc) {
            var b = this.index++;
            try {
                var c = this.G(a, b)
            } catch (d) {
                this.destination.error(d);
                return
            }
            this.active++;
            a = new sc(this);
            this.destination.add(a);
            uc(c, a)
        } else this.buffer.push(a)
    };
    Hc.prototype.u = function() {
        this.ce = !0;
        0 === this.active && 0 === this.buffer.length && this.destination.complete();
        this.unsubscribe()
    };
    Hc.prototype.qa = function(a) {
        this.destination.next(a)
    };
    Hc.prototype.P = function() {
        var a = this.buffer;
        this.active--;
        0 < a.length ? this.l(a.shift()) : 0 === this.active && this.ce && this.destination.complete()
    };

    function Ic(a) {
        a = void 0 === a ? Infinity : a;
        return Fc(Hb, a)
    };

    function Jc() {
        return Ic(1)(N.apply(null, ea(y.apply(0, arguments))))
    };

    function Kc(a, b, c) {
        if (Ab(c)) {
            var d = c;
            c = void 0
        }
        return d ? Kc(a, b, c).g(P(function(e) {
            return zb(e) ? d.apply(null, ea(e)) : d(e)
        })) : new L(function(e) {
            Lc(a, b, function(f) {
                1 < arguments.length ? e.next(Array.prototype.slice.call(arguments)) : e.next(f)
            }, e, c)
        })
    }

    function Lc(a, b, c, d, e) {
        if (a && "function" === typeof a.addEventListener && "function" === typeof a.removeEventListener) {
            a.addEventListener(b, c, e);
            var f = function() {
                return a.removeEventListener(b, c, e)
            }
        } else if (a && "function" === typeof a.Yf && "function" === typeof a.Xf) a.Yf(b, c), f = function() {
            return a.Xf(b, c)
        };
        else if (a && "function" === typeof a.addListener && "function" === typeof a.removeListener) a.addListener(b, c), f = function() {
            return a.removeListener(b, c)
        };
        else if (a && a.length)
            for (var g = 0, h = a.length; g < h; g++) Lc(a[g], b,
                c, d, e);
        else throw new TypeError("x");
        d.add(f)
    };
    var Mc = function() {
        E.call(this)
    };
    w(Mc, E);
    Mc.EMPTY = E.EMPTY;
    Mc.prototype.s = function() {
        return this
    };
    var Oc = function(a, b) {
            var c = y.apply(2, arguments);
            return (null == Nc ? 0 : Nc.setInterval) ? Nc.setInterval.apply(Nc, [a, b].concat(ea(c))) : setInterval.apply(null, [a, b].concat(ea(c)))
        },
        Nc = void 0;
    var Pc = function(a, b) {
        E.call(this);
        this.Y = a;
        this.xc = b;
        this.pending = !1
    };
    w(Pc, Mc);
    Pc.EMPTY = Mc.EMPTY;
    m = Pc.prototype;
    m.s = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (this.closed) return this;
        this.state = a;
        a = this.id;
        var c = this.Y;
        null != a && (this.id = this.Eb(c, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.Fb(c, this.id, b);
        return this
    };
    m.Fb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return Oc(a.flush.bind(a, this), c)
    };
    m.Eb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && this.delay === c && !1 === this.pending) return b;
        ((null == Nc ? void 0 : Nc.clearInterval) || clearInterval)(b)
    };
    m.execute = function(a, b) {
        if (this.closed) return Error("y");
        this.pending = !1;
        if (a = this.Gd(a, b)) return a;
        !1 === this.pending && null != this.id && (this.id = this.Eb(this.Y, this.id, null))
    };
    m.Gd = function(a) {
        var b = !1,
            c = void 0;
        try {
            this.xc(a)
        } catch (d) {
            b = !0, c = !!d && d || Error(d)
        }
        if (b) return this.unsubscribe(), c
    };
    m.ua = function() {
        var a = this.id,
            b = this.Y,
            c = b.actions,
            d = c.indexOf(this);
        this.state = this.xc = null;
        this.pending = !1;
        this.Y = null; - 1 !== d && c.splice(d, 1);
        null != a && (this.id = this.Eb(b, a, null));
        this.delay = null
    };
    var Rc = function(a, b) {
        b = void 0 === b ? Yb : b;
        Zb.call(this, a, b);
        this.actions = [];
        this.active = !1;
        this.qc = void 0
    };
    w(Rc, Zb);
    Rc.prototype.flush = function(a) {
        var b = this.actions;
        if (this.active) b.push(a);
        else {
            var c;
            this.active = !0;
            do
                if (c = a.execute(a.state, a.delay)) break; while (a = b.shift());
            this.active = !1;
            if (c) {
                for (; a = b.shift();) a.unsubscribe();
                throw c;
            }
        }
    };

    function Uc() {
        var a = y.apply(0, arguments),
            b = Infinity,
            c = void 0,
            d = a[a.length - 1];
        Ub(d) ? (c = a.pop(), 1 < a.length && "number" === typeof a[a.length - 1] && (b = a.pop())) : "number" === typeof d && (b = a.pop());
        return !c && 1 === a.length && a[0] instanceof L ? a[0] : Ic(b)(Tb(a, c))
    };

    function Vc() {};
    var Wc = new L(Vc);

    function T(a) {
        return function(b) {
            return O(b, new Xc(a))
        }
    }
    var Xc = function(a) {
        this.ga = a;
        this.aa = void 0
    };
    Xc.prototype.call = function(a, b) {
        return b.subscribe(new Yc(a, this.ga, this.aa))
    };
    var Yc = function(a, b, c) {
        J.call(this, a);
        this.ga = b;
        this.aa = c;
        this.count = 0
    };
    w(Yc, J);
    Yc.EMPTY = J.EMPTY;
    Yc.create = J.create;
    Yc.prototype.l = function(a) {
        try {
            var b = this.ga.call(this.aa, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b && this.destination.next(a)
    };

    function Zc() {
        var a = y.apply(0, arguments);
        if (1 === a.length)
            if (zb(a[0])) a = a[0];
            else return Ec(a[0]);
        return O(Tb(a), new $c)
    }
    var $c = function() {};
    $c.prototype.call = function(a, b) {
        return b.subscribe(new ad(a))
    };
    var ad = function(a) {
        R.call(this, a);
        this.vb = !1;
        this.Ma = [];
        this.Ib = []
    };
    w(ad, R);
    ad.EMPTY = R.EMPTY;
    ad.create = R.create;
    m = ad.prototype;
    m.l = function(a) {
        this.Ma.push(a)
    };
    m.u = function() {
        var a = this.Ma,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            for (var c = 0; c < b && !this.vb; c++) {
                var d = uc(a[c], new tc(this, null, c));
                this.Ib && this.Ib.push(d);
                this.add(d)
            }
            this.Ma = null
        }
    };
    m.qa = function(a, b, c) {
        if (!this.vb) {
            this.vb = !0;
            for (var d = 0; d < this.Ib.length; d++)
                if (d !== c) {
                    var e = this.Ib[d];
                    e.unsubscribe();
                    this.remove(e)
                }
            this.Ib = null
        }
        this.destination.next(b)
    };
    m.P = function(a) {
        this.vb = !0;
        R.prototype.P.call(this, a)
    };
    m.La = function(a) {
        this.vb = !0;
        R.prototype.La.call(this, a)
    };
    (function() {
        function a(b) {
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = void 0 === b ? null : b;
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    var bd = 1,
        cd, dd = {};

    function ed(a) {
        return a in dd ? (delete dd[a], !0) : !1
    }
    var fd = function(a) {
            var b = bd++;
            dd[b] = !0;
            cd || (cd = Promise.resolve());
            cd.then(function() {
                return ed(b) && a()
            });
            return b
        },
        gd = function(a) {
            ed(a)
        };
    var id = function() {
            return ((null == hd ? void 0 : hd.setImmediate) || fd).apply(null, ea(y.apply(0, arguments)))
        },
        hd = void 0;
    var jd = function(a, b) {
        Pc.call(this, a, b);
        this.Y = a;
        this.xc = b
    };
    w(jd, Pc);
    jd.EMPTY = Pc.EMPTY;
    jd.prototype.Fb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && 0 < c) return Pc.prototype.Fb.call(this, a, b, c);
        a.actions.push(this);
        return a.qc || (a.qc = id(a.flush.bind(a, void 0)))
    };
    jd.prototype.Eb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && 0 < c || null === c && 0 < this.delay) return Pc.prototype.Eb.call(this, a, b, c);
        0 === a.actions.length && (((null == hd ? void 0 : hd.clearImmediate) || gd)(b), a.qc = void 0)
    };
    var kd = function() {
        Rc.apply(this, arguments)
    };
    w(kd, Rc);
    kd.prototype.flush = function(a) {
        this.active = !0;
        this.qc = void 0;
        var b = this.actions,
            c, d = -1;
        a = a || b.shift();
        var e = b.length;
        do
            if (c = a.execute(a.state, a.delay)) break; while (++d < e && (a = b.shift()));
        this.active = !1;
        if (c) {
            for (; ++d < e && (a = b.shift());) a.unsubscribe();
            throw c;
        }
    };
    var ld = new kd(jd);
    var md = function(a, b) {
        Pc.call(this, a, b);
        this.Y = a;
        this.xc = b
    };
    w(md, Pc);
    md.EMPTY = Pc.EMPTY;
    md.prototype.s = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (0 < b) return Pc.prototype.s.call(this, a, b);
        this.delay = b;
        this.state = a;
        this.Y.flush(this);
        return this
    };
    md.prototype.execute = function(a, b) {
        return 0 < b || this.closed ? Pc.prototype.execute.call(this, a, b) : this.Gd(a, b)
    };
    md.prototype.Fb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return null !== c && 0 < c || null === c && 0 < this.delay ? Pc.prototype.Fb.call(this, a, b, c) : a.flush(this)
    };
    var nd = function() {
        Rc.apply(this, arguments)
    };
    w(nd, Rc);
    var Dc = new nd(md);
    var od = function() {
        function a() {
            this.message = "argument out of range";
            this.name = "ArgumentOutOfRangeError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    (function() {
        function a(b) {
            this.message = b;
            this.name = "NotFoundError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    (function() {
        function a(b) {
            this.message = b;
            this.name = "SequenceError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    var pd = function() {
        this.o = new Ha;
        this.h = new Ia;
        this.id = sb()
    };
    pd.prototype.Xc = function() {
        return Wc
    };
    p.Object.defineProperties(pd.prototype, {
        ic: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.id
            }
        }
    });
    var qd = function(a, b) {
        b = Error.call(this, b ? a + ": " + b : String(a));
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.code = a;
        this.__proto__ = qd.prototype;
        this.name = String(a)
    };
    w(qd, Error);
    var rd = function(a) {
        qd.call(this, 1E3, 'sfr:"' + a + '"');
        this.Of = a;
        this.__proto__ = rd.prototype
    };
    w(rd, qd);
    var sd = function() {
        qd.call(this, 1003);
        this.__proto__ = sd.prototype
    };
    w(sd, qd);
    var td = function() {
        qd.call(this, 1009);
        this.__proto__ = td.prototype
    };
    w(td, qd);
    var ud = function() {
        qd.call(this, 1007);
        this.__proto__ = sd.prototype
    };
    w(ud, qd);
    var vd = function() {
        qd.call(this, 1008);
        this.__proto__ = sd.prototype
    };
    w(vd, qd);
    var wd = function() {
        qd.call(this, 1001);
        this.__proto__ = wd.prototype
    };
    w(wd, qd);
    var xd = function(a) {
        qd.call(this, 1004, String(a));
        this.zf = a;
        this.__proto__ = xd.prototype
    };
    w(xd, qd);
    var zd = function(a) {
        qd.call(this, 1010, a);
        this.__proto__ = yd.prototype
    };
    w(zd, qd);
    var yd = function(a) {
        qd.call(this, 1005, a);
        this.__proto__ = yd.prototype
    };
    w(yd, qd);
    var Ad = function(a) {
        var b = y.apply(1, arguments),
            c = this;
        this.fb = [];
        this.fb.push(a);
        b.forEach(function(d) {
            c.fb.push(d)
        })
    };
    Ad.prototype.oa = function(a) {
        return this.fb.some(function(b) {
            return b.oa(a)
        })
    };
    Ad.prototype.ea = function(a, b) {
        for (var c = 0; c < this.fb.length; c++)
            if (this.fb[c].oa(b)) return this.fb[c].ea(a, b);
        throw new td;
    };
    var Bd = Symbol("time-origin"),
        Cd = Symbol("date"),
        Dd = function(a, b) {
            this.value = a;
            this.timeline = b
        },
        Ed = function(a, b) {
            if (b.timeline !== a.timeline) throw new ud;
            return a.value - b.value
        };
    Dd.prototype.equals = function(a) {
        return 0 === Ed(this, a)
    };
    Dd.prototype.maximum = function(a) {
        if (a.timeline !== this.timeline) throw new ud;
        return this.value >= a.value ? this : a
    };
    Dd.prototype.round = function() {
        return new Dd(Math.round(this.value), this.timeline)
    };
    Dd.prototype.toString = function() {
        return String(this.value)
    };

    function Fd(a) {
        function b(c) {
            return "boolean" === typeof c || "string" === typeof c || "number" === typeof c || void 0 === c || null === c
        }
        return b(a) ? !0 : Array.isArray(a) ? a.every(b) : "object" === typeof a ? Object.keys(a).every(function(c) {
            return "string" === typeof c
        }) && Object.values(a).every(function(c) {
            return Array.isArray(c) ? c.every(b) : b(c)
        }) : !1
    }

    function Gd(a) {
        return Fd(a) ? a : String(a)
    };

    function Hd(a) {
        return function(b) {
            return O(b, function(c) {
                var d = this,
                    e = new E,
                    f = null,
                    g = !1,
                    h;
                f = c.subscribe({
                    next: function(l) {
                        return d.next(l)
                    },
                    error: function(l) {
                        try {
                            h = Ec(a(l, Hd(a)(c)))
                        } catch (k) {
                            d.error(k)
                        }
                        h && (f ? (f.unsubscribe(), f = null, e.add(h.subscribe(d))) : g = !0)
                    },
                    complete: function() {
                        return d.complete()
                    }
                });
                g ? (f.unsubscribe(), f = null, e.add(h.subscribe(d))) : e.add(f);
                return e
            })
        }
    };

    function Id() {
        var a = y.apply(0, arguments),
            b = void 0;
        "function" === typeof a[a.length - 1] && (b = a.pop());
        1 === a.length && zb(a[0]) && (a = a[0].slice());
        return function(c) {
            var d = Ec([c].concat(ea(a))),
                e = new wc(b);
            if (c && "function" === typeof c.cb) c = c.cb.call(d, e);
            else throw new TypeError("r");
            return c
        }
    }

    function Jd() {
        return Id.apply(null, ea(y.apply(0, arguments)))
    };

    function Kd(a) {
        a = void 0 === a ? null : a;
        return function(b) {
            return O(b, new Ld(a))
        }
    }
    var Ld = function(a) {
        this.defaultValue = a
    };
    Ld.prototype.call = function(a, b) {
        return b.subscribe(new Md(a, this.defaultValue))
    };
    var Md = function(a, b) {
        J.call(this, a);
        this.defaultValue = b;
        this.isEmpty = !0
    };
    w(Md, J);
    Md.EMPTY = J.EMPTY;
    Md.create = J.create;
    Md.prototype.l = function(a) {
        this.isEmpty = !1;
        this.destination.next(a)
    };
    Md.prototype.u = function() {
        this.isEmpty && this.destination.next(this.defaultValue);
        this.destination.complete()
    };

    function Nd(a) {
        return function(b) {
            return O(b, new Od(a))
        }
    }
    var Od = function(a) {
        this.Qc = a
    };
    Od.prototype.call = function(a, b) {
        return b.subscribe(new Pd(a, this.Qc))
    };
    var Pd = function(a, b) {
        R.call(this, a);
        this.Qc = b;
        this.Rd = !1;
        this.Xb = [];
        this.index = 0
    };
    w(Pd, R);
    Pd.EMPTY = R.EMPTY;
    Pd.create = R.create;
    m = Pd.prototype;
    m.qa = function(a, b, c, d) {
        this.destination.next(a);
        Qd(this, d);
        Rd(this)
    };
    m.La = function(a) {
        this.S(a)
    };
    m.P = function(a) {
        (a = Qd(this, a)) && this.destination.next(a);
        Rd(this)
    };
    m.l = function(a) {
        var b = this.index++;
        try {
            var c = this.Qc(a, b);
            if (c) {
                var d = uc(c, new tc(this, a, 0));
                d && !d.closed && (this.destination.add(d), this.Xb.push(d))
            }
        } catch (e) {
            this.destination.error(e)
        }
    };
    m.u = function() {
        this.Rd = !0;
        Rd(this);
        this.unsubscribe()
    };
    var Qd = function(a, b) {
            b.unsubscribe();
            var c = a.Xb.indexOf(b); - 1 !== c && a.Xb.splice(c, 1);
            return b.se
        },
        Rd = function(a) {
            a.Rd && 0 === a.Xb.length && a.destination.complete()
        };

    function Sd(a) {
        return function(b) {
            return O(b, new Td(a))
        }
    }
    var Td = function(a) {
        this.Ja = a;
        this.qf = void 0
    };
    Td.prototype.call = function(a, b) {
        return b.subscribe(new Ud(a, this.Ja, this.qf))
    };
    var Ud = function(a, b, c) {
        Q.call(this, a);
        this.Ja = b;
        this.values = new Set;
        c && this.add(uc(c, new sc(this)))
    };
    w(Ud, Q);
    Ud.EMPTY = Q.EMPTY;
    Ud.create = Q.create;
    m = Ud.prototype;
    m.qa = function() {
        this.values.clear()
    };
    m.La = function(a) {
        this.S(a)
    };
    m.l = function(a) {
        this.Ja ? this.Le(a) : this.Hd(a, a)
    };
    m.Le = function(a) {
        var b = this.destination;
        try {
            var c = this.Ja(a)
        } catch (d) {
            b.error(d);
            return
        }
        this.Hd(c, a)
    };
    m.Hd = function(a, b) {
        var c = this.values;
        c.has(a) || (c.add(a), this.destination.next(b))
    };

    function U(a) {
        return function(b) {
            return O(b, new Vd(a))
        }
    }
    var Vd = function(a) {
        this.compare = a;
        this.Ja = void 0
    };
    Vd.prototype.call = function(a, b) {
        return b.subscribe(new Wd(a, this.compare, this.Ja))
    };
    var Wd = function(a, b, c) {
        J.call(this, a);
        this.Ja = c;
        this.ee = !1;
        "function" === typeof b && (this.compare = b)
    };
    w(Wd, J);
    Wd.EMPTY = J.EMPTY;
    Wd.create = J.create;
    Wd.prototype.compare = function(a, b) {
        return a === b
    };
    Wd.prototype.l = function(a) {
        try {
            var b = this.Ja;
            var c = b ? b(a) : a
        } catch (e) {
            return this.destination.error(e)
        }
        b = !1;
        if (this.ee) try {
            var d = this.compare;
            b = d(this.key, c)
        } catch (e) {
            return this.destination.error(e)
        } else this.ee = !0;
        b || (this.key = c, this.destination.next(a))
    };

    function Xd(a) {
        if (isNaN(a)) throw new TypeError("z");
        if (0 > a) throw new od;
        return function(b) {
            return 0 === a ? Qb : O(b, new Yd(a))
        }
    }
    var Yd = function(a) {
        this.count = a
    };
    Yd.prototype.call = function(a, b) {
        return b.subscribe(new Zd(a, this.count))
    };
    var Zd = function(a, b) {
        J.call(this, a);
        this.count = b;
        this.Me = 0
    };
    w(Zd, J);
    Zd.EMPTY = J.EMPTY;
    Zd.create = J.create;
    Zd.prototype.l = function(a) {
        var b = this.count,
            c = ++this.Me;
        c <= b && (this.destination.next(a), c === b && (this.destination.complete(), this.unsubscribe()))
    };

    function $d(a) {
        a = void 0 === a ? ae : a;
        return function(b) {
            return O(b, new be(a))
        }
    }
    var be = function(a) {
        this.Sc = a
    };
    be.prototype.call = function(a, b) {
        return b.subscribe(new ce(a, this.Sc))
    };
    var ce = function(a, b) {
        J.call(this, a);
        this.Sc = b;
        this.fe = !1
    };
    w(ce, J);
    ce.EMPTY = J.EMPTY;
    ce.create = J.create;
    ce.prototype.l = function(a) {
        this.fe = !0;
        this.destination.next(a)
    };
    ce.prototype.u = function() {
        if (this.fe) return this.destination.complete();
        try {
            var a = this.Sc()
        } catch (b) {
            a = b
        }
        this.destination.error(a)
    };

    function ae() {
        return new $b
    };

    function de() {
        var a = y.apply(0, arguments);
        return function(b) {
            return Jc(b, N.apply(null, ea(a)))
        }
    };

    function ee(a) {
        return function(b) {
            return O(b, new fe(a, b))
        }
    }
    var fe = function(a, b) {
        this.ga = a;
        this.aa = void 0;
        this.source = b
    };
    fe.prototype.call = function(a, b) {
        return b.subscribe(new ge(a, this.ga, this.aa, this.source))
    };
    var ge = function(a, b, c, d) {
        J.call(this, a);
        this.ga = b;
        this.aa = c;
        this.source = d;
        this.index = 0;
        this.aa = c || this
    };
    w(ge, J);
    ge.EMPTY = J.EMPTY;
    ge.create = J.create;
    ge.prototype.P = function(a) {
        this.destination.next(a);
        this.destination.complete()
    };
    ge.prototype.l = function(a) {
        var b = !1;
        try {
            b = this.ga.call(this.aa, a, this.index++, this.source)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b || this.P(!1)
    };
    ge.prototype.u = function() {
        this.P(!0)
    };

    function he() {
        return function(a) {
            return O(a, new ie)
        }
    }
    var ie = function() {};
    ie.prototype.call = function(a, b) {
        return b.subscribe(new je(a))
    };
    var je = function() {
        J.apply(this, arguments)
    };
    w(je, J);
    je.EMPTY = J.EMPTY;
    je.create = J.create;
    je.prototype.l = function() {};

    function ke() {
        if (isNaN(1)) throw new TypeError("z");
        return function(a) {
            return O(a, new le)
        }
    }
    var le = function() {
        this.total = 1
    };
    le.prototype.call = function(a, b) {
        return b.subscribe(new me(a, this.total))
    };
    var me = function(a, b) {
        J.call(this, a);
        this.total = b;
        this.ve = [];
        this.count = 0
    };
    w(me, J);
    me.EMPTY = J.EMPTY;
    me.create = J.create;
    me.prototype.l = function(a) {
        var b = this.ve,
            c = this.total,
            d = this.count++;
        b.length < c ? b.push(a) : b[d % c] = a
    };
    me.prototype.u = function() {
        var a = this.destination,
            b = this.count;
        if (0 < b)
            for (var c = this.count >= this.total ? this.total : this.count, d = this.ve, e = 0; e < c; e++) {
                var f = b++ % c;
                a.next(d[f])
            }
        a.complete()
    };

    function ne(a, b) {
        var c = 2 <= arguments.length;
        return function(d) {
            return d.g(a ? T(function(e, f) {
                return a(e, f, d)
            }) : Hb, ke(), c ? Kd(b) : $d(function() {
                return new $b
            }))
        }
    };

    function oe(a) {
        return function(b) {
            return O(b, new pe(a))
        }
    }
    var pe = function(a) {
        this.value = a
    };
    pe.prototype.call = function(a, b) {
        return b.subscribe(new qe(a, this.value))
    };
    var qe = function(a, b) {
        J.call(this, a);
        this.value = b
    };
    w(qe, J);
    qe.EMPTY = J.EMPTY;
    qe.create = J.create;
    qe.prototype.l = function() {
        this.destination.next(this.value)
    };

    function re(a, b) {
        var c = !1;
        2 <= arguments.length && (c = !0);
        return function(d) {
            return O(d, new se(a, b, c))
        }
    }
    var se = function(a, b, c) {
        this.Gc = a;
        this.seed = b;
        this.wf = void 0 === c ? !1 : c
    };
    se.prototype.call = function(a, b) {
        return b.subscribe(new te(a, this.Gc, this.seed, this.wf))
    };
    var te = function(a, b, c, d) {
        J.call(this, a);
        this.Gc = b;
        this.Ac = c;
        this.Jd = d;
        this.index = 0
    };
    w(te, J);
    te.EMPTY = J.EMPTY;
    te.create = J.create;
    te.prototype.l = function(a) {
        var b = this.destination;
        if (this.Jd) {
            var c = this.index++;
            try {
                var d = this.Gc(this.Ac, a, c)
            } catch (e) {
                b.error(e);
                return
            }
            this.Ac = d;
            b.next(d)
        } else this.Ac = a, this.Jd = !0, b.next(a)
    };

    function ue(a) {
        return function(b) {
            var c = "function" === typeof a ? a : function() {
                return a
            };
            var d = Object.create(b, fc);
            d.source = b;
            d.Ce = c;
            return d
        }
    };

    function ve() {
        var a = y.apply(0, arguments);
        1 === a.length && zb(a[0]) && (a = a[0]);
        return function(b) {
            return O(b, new we(a))
        }
    }
    var we = function(a) {
        this.ld = a
    };
    we.prototype.call = function(a, b) {
        return b.subscribe(new xe(a, this.ld))
    };
    var xe = function(a, b) {
        Q.call(this, a);
        this.destination = a;
        this.ld = b
    };
    w(xe, Q);
    xe.EMPTY = Q.EMPTY;
    xe.create = Q.create;
    xe.prototype.La = function() {
        ye(this)
    };
    xe.prototype.P = function() {
        ye(this)
    };
    xe.prototype.S = function() {
        ye(this);
        this.unsubscribe()
    };
    xe.prototype.u = function() {
        ye(this);
        this.unsubscribe()
    };
    var ye = function(a) {
        var b = a.ld.shift();
        if (b) {
            var c = new sc(a);
            a.destination.add(c);
            uc(b, c)
        } else a.destination.complete()
    };

    function ze(a) {
        var b = new Xb(a, void 0, void 0);
        return function(c) {
            return ue(function() {
                return b
            })(c)
        }
    };

    function Ae() {
        var a = void 0 === a ? Infinity : a;
        return function(b) {
            return 0 >= a ? Qb : O(b, function(c) {
                var d = this,
                    e = 0,
                    f = new E,
                    g, h = function() {
                        var l = !1;
                        g = c.subscribe({
                            next: function(k) {
                                return d.next(k)
                            },
                            error: function(k) {
                                return d.error(k)
                            },
                            complete: function() {
                                ++e < a ? g ? (g.unsubscribe(), g = null, h()) : l = !0 : d.complete()
                            }
                        });
                        l ? (g.unsubscribe(), g = null, h()) : f.add(g)
                    };
                h();
                return f
            })
        }
    };

    function Be() {
        return new M
    }

    function Ce() {
        return function(a) {
            return ac()(ue(Be)(a))
        }
    };

    function V() {
        var a = y.apply(0, arguments),
            b = a[a.length - 1];
        return Ub(b) ? (a.pop(), function(c) {
            return Jc(a, c, b)
        }) : function(c) {
            return Jc(a, c)
        }
    };
    var De = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? ld : c;
        this.source = a;
        this.delayTime = b;
        this.Y = c;
        0 > b && (this.delayTime = 0);
        Ub(c) || (this.Y = ld)
    };
    w(De, L);
    De.create = L.create;
    De.ef = function(a) {
        return this.add(a.source.subscribe(a.ud))
    };
    De.prototype.W = function(a) {
        return this.Y.s(De.ef, this.delayTime, {
            source: this.source,
            ud: a
        })
    };

    function Ee() {
        var a = void 0 === a ? 0 : a;
        return function(b) {
            return O(b, new Fe(a))
        }
    }
    var Fe = function(a) {
        this.Y = Dc;
        this.delay = a
    };
    Fe.prototype.call = function(a, b) {
        return (new De(b, this.delay, this.Y)).subscribe(a)
    };

    function X(a) {
        return function(b) {
            return O(b, new Ge(a))
        }
    }
    var Ge = function(a) {
        this.G = a
    };
    Ge.prototype.call = function(a, b) {
        return b.subscribe(new He(a, this.G))
    };
    var He = function(a, b) {
        Q.call(this, a);
        this.destination = a;
        this.G = b;
        this.index = 0
    };
    w(He, Q);
    He.EMPTY = Q.EMPTY;
    He.create = Q.create;
    m = He.prototype;
    m.l = function(a) {
        var b = this.index++;
        try {
            var c = this.G(a, b)
        } catch (d) {
            this.destination.error(d);
            return
        }(a = this.hc) && a.unsubscribe();
        a = new sc(this);
        this.destination.add(a);
        this.hc = a;
        uc(c, a)
    };
    m.u = function() {
        var a = this.hc;
        a && !a.closed || Q.prototype.u.call(this);
        this.unsubscribe()
    };
    m.ua = function() {
        this.hc = void 0
    };
    m.P = function() {
        this.hc = void 0;
        this.A && Q.prototype.u.call(this)
    };
    m.qa = function(a) {
        this.destination.next(a)
    };

    function Ie(a, b) {
        b = void 0 === b ? !1 : b;
        return function(c) {
            return O(c, new Je(a, b))
        }
    }
    var Je = function(a, b) {
        this.ga = a;
        this.bd = b
    };
    Je.prototype.call = function(a, b) {
        return b.subscribe(new Ke(a, this.ga, this.bd))
    };
    var Ke = function(a, b, c) {
        J.call(this, a);
        this.ga = b;
        this.bd = c;
        this.index = 0
    };
    w(Ke, J);
    Ke.EMPTY = J.EMPTY;
    Ke.create = J.create;
    Ke.prototype.l = function(a) {
        var b = this.destination;
        try {
            var c = this.ga(a, this.index++)
        } catch (d) {
            b.error(d);
            return
        }
        b = this.destination;
        c ? b.next(a) : (this.bd && b.next(a), b.complete())
    };

    function Le(a, b, c) {
        return function(d) {
            return O(d, new Me(a, b, c))
        }
    }
    var Me = function(a, b, c) {
        this.Tf = a;
        this.error = b;
        this.complete = c
    };
    Me.prototype.call = function(a, b) {
        return b.subscribe(new Ne(a, this.Tf, this.error, this.complete))
    };
    var Ne = function(a, b, c, d) {
        J.call(this, a);
        this.Bc = this.Cc = this.Dc = Vc;
        this.Cc = c || Vc;
        this.Bc = d || Vc;
        Ab(b) ? (this.ta = this, this.Dc = b) : b && (this.ta = b, this.Dc = b.next || Vc, this.Cc = b.error || Vc, this.Bc = b.complete || Vc)
    };
    w(Ne, J);
    Ne.EMPTY = J.EMPTY;
    Ne.create = J.create;
    Ne.prototype.l = function(a) {
        try {
            this.Dc.call(this.ta, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.next(a)
    };
    Ne.prototype.S = function(a) {
        try {
            this.Cc.call(this.ta, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.error(a)
    };
    Ne.prototype.u = function() {
        try {
            this.Bc.call(this.ta)
        } catch (a) {
            this.destination.error(a);
            return
        }
        return this.destination.complete()
    };

    function Oe() {
        var a = y.apply(0, arguments);
        return function(b) {
            var c;
            "function" === typeof a[a.length - 1] && (c = a.pop());
            return O(b, new Pe(a, c))
        }
    }
    var Pe = function(a, b) {
        this.Ma = a;
        this.G = b
    };
    Pe.prototype.call = function(a, b) {
        return b.subscribe(new Qe(a, this.Ma, this.G))
    };
    var Qe = function(a, b, c) {
        R.call(this, a);
        this.G = c;
        this.Va = [];
        a = b.length;
        this.values = Array(a);
        for (c = 0; c < a; c++) this.Va.push(c);
        for (c = 0; c < a; c++) this.add(uc(b[c], new tc(this, void 0, c)))
    };
    w(Qe, R);
    Qe.EMPTY = R.EMPTY;
    Qe.create = R.create;
    Qe.prototype.qa = function(a, b, c) {
        this.values[c] = b;
        b = this.Va;
        0 < b.length && (c = b.indexOf(c), -1 !== c && b.splice(c, 1))
    };
    Qe.prototype.P = function() {};
    Qe.prototype.l = function(a) {
        0 === this.Va.length && (a = [a].concat(ea(this.values)), this.G ? this.Je(a) : this.destination.next(a))
    };
    Qe.prototype.Je = function(a) {
        try {
            var b = this.G.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var Re = function(a) {
        this.fa = a
    };
    Re.prototype.ping = function() {
        var a = this,
            b = N.apply(null, ea(y.apply(0, arguments))).g(Fc(function(c) {
                return Se(a, c)
            }), ee(function(c) {
                return c
            }), ze(1));
        b.connect();
        return b
    };
    var Se = function(a, b) {
        var c = new Xb(1);
        Te(a.fa, b, function() {
            c.next(!0);
            c.complete()
        }, function() {
            c.next(!1);
            c.complete()
        });
        return c
    };
    p.Object.defineProperties(Re.prototype, {
        pb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.fa.oa()
            }
        }
    });

    function Ue(a, b) {
        var c = !1;
        return new L(function(d) {
            var e = a.setTimeout(function() {
                c = !0;
                d.next(!0);
                d.complete()
            }, b);
            return function() {
                c || a.clearTimeout(e)
            }
        })
    };
    var Ve = function(a) {
        this.fa = a;
        this.timeline = Cd
    };
    m = Ve.prototype;
    m.setTimeout = function(a, b) {
        return Number(this.fa.setTimeout(function() {
            return a()
        }, b))
    };
    m.clearTimeout = function(a) {
        this.fa.clearTimeout(a)
    };
    m.now = function() {
        return new Dd(Date.now(), this.timeline)
    };
    m.interval = function(a) {
        return Ue(this, a).g(Ae(), re(function(b) {
            return b + 1
        }, -1))
    };
    m.ja = function() {
        return !0
    };
    var We = function(a, b, c) {
        this.context = a;
        this.Db = b;
        this.pe = c
    };
    We.prototype.oa = function(a) {
        return (void 0 === a || a === this.pe) && this.Db.pb
    };
    We.prototype.ea = function(a, b) {
        if (!this.oa(b)) throw new td;
        return new Xe(this.context, this.Db, this.pe, a)
    };
    var Xe = function(a, b, c, d) {
        var e = this;
        this.Db = b;
        this.method = c;
        this.url = d;
        this.jc = !0;
        this.Te = a.Xc().subscribe(function() {
            e.sendNow()
        })
    };
    Xe.prototype.deactivate = function() {
        this.jc = !1
    };
    Xe.prototype.sendNow = function() {
        if (this.jc)
            if (this.Te.unsubscribe(), this.Db.pb) try {
                this.Db.ping(this.url), this.jc = !1
            } catch (a) {} else this.jc = !1
    };

    function Ye(a) {
        var b = Object.assign({}, a);
        delete b.timestamp;
        return {
            timestamp: new Dd(a.timestamp, Cd),
            value: b
        }
    };

    function Ze(a) {
        return void 0 !== a && "number" === typeof a.x && "number" === typeof a.y && "number" === typeof a.width && "number" === typeof a.height
    };
    var af = function(a, b, c) {
        c = void 0 === c ? null : c;
        pd.call(this);
        this.fa = a;
        this.zg = b;
        this.Qa = c;
        this.rd = new Xb(3);
        this.rd.g(T(function(d) {
            return "sessionStart" === d.value.type
        }));
        this.mg = this.rd.g(T(function(d) {
            return "sessionFinish" === d.value.type
        }));
        this.ge = new Xb(1);
        this.Ag = new Xb;
        this.Yd = new Xb(1);
        this.i = new Ve(a);
        this.L = new We(this, new Re(a), "GET");
        this.Hf = this.fa.oa();
        $e(this)
    };
    w(af, pd);
    af.prototype.validate = function() {
        return this.Hf
    };
    var $e = function(a) {
        a.fa.addEventListener("geometryChange", function(e) {
            if (void 0 === e) var f = !1;
            else {
                f = e.data;
                var g;
                (g = void 0 === f) || (g = f.viewport, g = void 0 !== g && "number" === typeof g.width && "number" === typeof g.height);
                g ? (f = f.adView, f = void 0 !== f && "number" === typeof f.percentageInView && Ze(f.geometry) && Ze(f.onScreenGeometry)) : f = !1
            }
            f && a.Yd.next(Ye(e))
        });
        a.fa.addEventListener("impression", function(e) {
            a.ge.next(Ye(e))
        });
        for (var b = {}, c = u("loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(" ")),
                d = c.next(); !d.done; b = {
                Nb: b.Nb
            }, d = c.next()) b.Nb = d.value, a.fa.addEventListener(b.Nb, function(e) {
            return function(f) {
                f.type === e.Nb && a.Ag.next(Ye(f))
            }
        }(b));
        bf(a.fa, function(e) {
            return void a.rd.next(Ye(e))
        }, a.zg)
    };
    p.Object.defineProperties(af.prototype, {
        global: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return cf
            }
        }
    });
    var cf = {};

    function df() {
        return D("iPhone") && !D("iPod") && !D("iPad")
    }

    function ef() {
        df() || D("iPad") || D("iPod")
    };
    var ff = function(a) {
        ff[" "](a);
        return a
    };
    ff[" "] = function() {};
    var gf = function(a, b) {
            try {
                return ff(a[b]), !0
            } catch (c) {}
            return !1
        },
        jf = function(a) {
            var b = hf;
            return Object.prototype.hasOwnProperty.call(b, "10") ? b["10"] : b["10"] = a("10")
        };
    var kf = D("Opera"),
        lf = D("Trident") || D("MSIE"),
        mf = D("Edge"),
        nf = D("Gecko") && !(kb(mb(), "WebKit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"),
        of = kb(mb(), "WebKit") && !D("Edge"); of && D("Mobile");
    D("Macintosh");
    D("Windows");
    D("Linux") || D("CrOS");
    var pf = Ca.navigator || null;
    pf && (pf.appVersion || "").indexOf("X11");
    D("Android");
    df();
    D("iPad");
    D("iPod");
    ef();
    kb(mb(), "KaiOS");
    var tf = function() {
            var a = Ca.document;
            return a ? a.documentMode : void 0
        },
        uf;
    a: {
        var vf = "",
            wf = function() {
                var a = mb();
                if (nf) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (mf) return /Edge\/([\d\.]+)/.exec(a);
                if (lf) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if ( of ) return /WebKit\/(\S+)/.exec(a);
                if (kf) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();wf && (vf = wf ? wf[1] : "");
        if (lf) {
            var xf = tf();
            if (null != xf && xf > parseFloat(vf)) {
                uf = String(xf);
                break a
            }
        }
        uf = vf
    }
    var yf = uf,
        hf = {},
        zf = function() {
            return jf(function() {
                for (var a = 0, b = jb(String(yf)).split("."), c = jb("10").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
                    var f = b[e] || "",
                        g = c[e] || "";
                    do {
                        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        if (0 == f[0].length && 0 == g[0].length) break;
                        a = lb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || lb(0 == f[2].length, 0 == g[2].length) || lb(f[2], g[2]);
                        f = f[3];
                        g = g[3]
                    } while (0 == a)
                }
                return 0 <= a
            })
        },
        Af;
    if (Ca.document && lf) {
        var Bf = tf();
        Af = Bf ? Bf : parseInt(yf, 10) || void 0
    } else Af = void 0;
    var Cf = Af;
    nb();
    df() || D("iPod");
    D("iPad");
    rb();
    qb();
    ob() && ef();
    var Df = {},
        Ef = null,
        Ff = nf || of || "function" == typeof Ca.btoa,
        Gf = function(a) {
            var b;
            C(Ea(a), "encodeByteArray takes an array as a parameter");
            void 0 === b && (b = 0);
            if (!Ef) {
                Ef = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    Df[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g],
                            l = Ef[h];
                        void 0 === l ? Ef[h] = g : C(l === g)
                    }
                }
            }
            b = Df[b];
            c = Array(Math.floor(a.length / 3));
            d = b[64] || "";
            for (e = f = 0; f < a.length - 2; f += 3) {
                l = a[f];
                var k =
                    a[f + 1];
                h = a[f + 2];
                g = b[l >> 2];
                l = b[(l & 3) << 4 | k >> 4];
                k = b[(k & 15) << 2 | h >> 6];
                h = b[h & 63];
                c[e++] = "" + g + l + k + h
            }
            g = 0;
            h = d;
            switch (a.length - f) {
                case 2:
                    g = a[f + 1], h = b[(g & 15) << 2] || d;
                case 1:
                    a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
            }
            return c.join("")
        };
    var Hf = "undefined" !== typeof Uint8Array,
        If = {};
    var Jf, Lf = function(a) {
        if (If !== If) throw Error("B");
        this.yd = a;
        if (null != a && 0 === a.length) throw Error("C");
        this.dontPassByteStringToStructuredClone = Kf
    };
    Lf.prototype.isEmpty = function() {
        return null == this.yd
    };

    function Kf() {};
    var Mf = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;

    function Nf(a, b) {
        C((b & 127) == b);
        Xa(a);
        Object.isFrozen(a) || (Mf ? a[Mf] |= b : void 0 !== a.na ? a.na |= b : Object.defineProperties(a, {
            na: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function Of(a, b) {
        C((b & 127) == b);
        Xa(a);
        Object.isExtensible(a) && (Mf ? a[Mf] && (a[Mf] &= ~b) : void 0 !== a.na && (a.na &= ~b))
    }
    var Pf = Object.getOwnPropertyDescriptor(Array.prototype, "If");
    Object.defineProperties(Array.prototype, {
        If: {
            get: function() {
                var a = Qf(this),
                    b = [],
                    c = function(d, e) {
                        d & a && b.push(e)
                    };
                c(1, "IS_REPEATED_FIELD");
                c(2, "IS_IMMUTABLE_ARRAY");
                c(4, "IS_API_FORMATTED");
                c(8, "ONLY_MUTABLE_VALUES");
                c(16, "MUTABLE_REFERENCES_ARE_OWNED");
                c(32, "CONSTRUCTED");
                c(64, "TRANSFERRED");
                c = b.join(",");
                return Pf ? Pf.get.call(this) + "|" + c : c
            },
            configurable: !0,
            enumerable: !1
        }
    });

    function Qf(a) {
        a = Mf ? a[Mf] : a.na;
        return null == a ? 0 : a
    }

    function Rf(a, b) {
        Xa(a, "state is only maintained on arrays.");
        C((b & 127) == b);
        Mf ? a[Mf] = b : void 0 !== a.na ? a.na = b : Object.defineProperties(a, {
            na: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function Sf(a) {
        Xa(a, "state is only maintained on arrays.");
        Nf(a, 1);
        return a
    }

    function Tf(a) {
        Xa(a, "state is only maintained on arrays.");
        Nf(a, 17);
        return a
    }

    function Uf(a) {
        return a ? !!(Qf(a) & 2) : !1
    }

    function Vf(a) {
        Nf(a, 16);
        return a
    }

    function Wf(a) {
        if (!Array.isArray(a)) throw Error("D");
        Of(a, 16)
    }

    function Xf(a, b) {
        Rf(b, (Qf(a) | 0) & -51)
    };
    var Yf = {};

    function Zf(a) {
        return Uf(a.m)
    }

    function $f(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var ag, bg = Object,
        cg = bg.freeze,
        dg = [];
    Xa(dg, "state is only maintained on arrays.");
    Nf(dg, 3);
    var eg = cg.call(bg, dg);

    function fg() {};

    function gg(a) {
        return a.displayName || a.name || "unknown type name"
    };
    var hg = function() {
        throw Error("I");
    };
    if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
        var ig = function() {
                throw Error("J");
            },
            jg = {};
        Object.defineProperties(hg, (jg[Symbol.hasInstance] = {
            value: ig,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }, jg));
        C(hg[Symbol.hasInstance] === ig, "defineProperties did not work: was it monkey-patched?")
    };

    function kg(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (Hf && null != a && a instanceof Uint8Array) return Gf(a);
                    if (a instanceof Lf) {
                        var b = a.yd;
                        return null == b ? "" : "string" === typeof b ? b : a.yd = Gf(b)
                    }
                }
        }
        return a
    };

    function lg(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = mg(a, b, c, void 0 !== d);
            else if ($f(a)) {
                var e = {},
                    f;
                for (f in a) e[f] = lg(a[f], b, c, d);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function mg(a, b, c, d) {
        Xa(a);
        d = d ? !!(Qf(a) & 16) : void 0;
        var e = Array.prototype.slice.call(a);
        c(a, e);
        for (a = 0; a < e.length; a++) e[a] = lg(e[a], b, c, d);
        return e
    }

    function ng(a) {
        return a.hd === Yf ? a.toJSON() : kg(a)
    }

    function og(a) {
        if (!a) return a;
        if ("object" === typeof a) {
            if (Hf && null != a && a instanceof Uint8Array) return new Uint8Array(a);
            if (a.hd === Yf) return a.clone()
        }
        return a
    }

    function pg() {};
    var qg = function(a, b, c) {
            return -1 === b ? null : b >= a.Na ? a.F ? a.F[b] : void 0 : (void 0 === c ? 0 : c) && a.F && (c = a.F[b], null != c) ? c : a.m[b + a.Ea]
        },
        rg = function(a, b, c, d, e) {
            if ((void 0 === e || !e) && Zf(a)) throw Error("F");
            a.ie && (a.ie = void 0);
            if (b >= a.Na || (void 0 === d ? 0 : d)) return (a.F || (a.F = a.m[a.Na + a.Ea] = {}))[b] = c, a;
            void 0 !== a.F && a.Na >= a.m.length ? (d = a.m.length - 1, e = b + a.Ea, e >= d ? (a.m[d] = void 0, a.m[e] = c, a.m.push(a.F)) : a.m[e] = c) : a.m[b + a.Ea] = c;
            void 0 !== a.F && b in a.F && delete a.F[b];
            return a
        };

    function sg(a, b) {
        C(a && Zf(b) ? Zf(a) : !0);
        return a
    }

    function tg(a, b, c) {
        c = qg(b, c);
        C(Object.isFrozen(a) || !(Qf(a) & 16));
        C(Zf(b) ? Object.isFrozen(a) : !0);
        C(c && Uf(c) ? Object.isFrozen(a) && Uf(a) : !0);
        C(!Zf(b) || !c || Uf(c) || c === eg);
        C(!(Zf(b) || c && Uf(c)) || Object.isFrozen(a) && Uf(a));
        return a
    }

    function ug(a, b, c) {
        C(!0);
        var d = qg(a, b, c);
        Array.isArray(d) || (d = eg);
        var e = Qf(d);
        e & 1 || Sf(d);
        Zf(a) ? e & 2 || Nf(d, 2) : d === eg && (d = Sf(Array.prototype.slice.call(d)), rg(a, b, d, c));
        return d
    }
    var vg = function(a, b, c) {
            var d = qg(a, 3, c);
            var e = !1;
            var f = null == d || "object" !== typeof d || (e = Array.isArray(d)) || d.hd !== Yf ? e ? new b(d) : void 0 : d;
            f !== d && null != f && (rg(a, 3, f, c, !0), Nf(f.m, Qf(a.m) & -33));
            return sg(f, a)
        },
        yg = function(a) {
            var b = wg;
            var c = void 0 === c ? !1 : c;
            b = vg(a, b, c);
            if (null == b) return b;
            Zf(b) && !Zf(a) && (b = xg(b), rg(a, 3, b, c));
            return sg(b, a)
        },
        zg = function(a, b, c, d) {
            if (Zf(a)) throw Error("F");
            if (null != d) {
                Xa(d);
                var e = Sf([]);
                for (var f = !1, g = 0; g < d.length; g++) {
                    var h = e,
                        l = g,
                        k = d[g],
                        n = Ra(b);
                    if (!(k instanceof n)) throw Error("H`" +
                        gg(n) + "`" + (k && gg(k.constructor)));
                    h[l] = k.m;
                    f = f || Uf(e[g])
                }
                a.N || (a.N = {});
                a.N[c] = d;
                b = e;
                f ? Of(b, 8) : Nf(b, 8)
            } else a.N && (a.N[c] = void 0), e = eg;
            return rg(a, c, e)
        };

    function Ag(a, b) {
        return null == a ? b : a
    }
    var Bg = function(a, b) {
        return Ag(qg(a, b), 0)
    };

    function Cg(a, b, c, d, e, f) {
        (a = a.N && a.N[c]) ? (e = f.Nc ? Sf(a.slice()) : a, zg(b, 0 < e.length ? e[0].constructor : void 0, c, e)) : (null != d ? Hf && d instanceof Uint8Array ? (e = d, Za(e, Uint8Array), e = e.length ? new Lf(new Uint8Array(e)) : Jf || (Jf = new Lf(null))) : (Array.isArray(d) && (e ? Nf(d, 2) : d && Qf(d) & 1 && f.Nc ? (e = Array.prototype.slice.call(d), Rf(e, (Qf(d) | 0) & -51), d = e) : Wf(d)), e = d) : e = void 0, rg(b, c, e))
    };
    if ("undefined" !== typeof Proxy) {
        var Eg = Dg;
        new Proxy({}, {
            getPrototypeOf: Eg,
            setPrototypeOf: Eg,
            isExtensible: Eg,
            preventExtensions: Eg,
            getOwnPropertyDescriptor: Eg,
            defineProperty: Eg,
            has: Eg,
            get: Eg,
            set: Eg,
            deleteProperty: Eg,
            apply: Eg,
            construct: Eg
        })
    }

    function Dg() {
        throw Error("L");
        throw Error();
    };
    var Fg = function(a, b, c) {
        Za(this, Fg, "The message constructor should only be used by subclasses");
        C(this.constructor !== Fg, "Message is an abstract class and cannot be directly constructed");
        null == a && (a = Gg);
        Gg = null;
        var d = this.constructor.dh || 0,
            e = 0 < d,
            f = this.constructor.hh,
            g = !1;
        if (null == a) {
            var h = f ? [f] : [];
            Nf(h, 48);
            a = h;
            h = !0
        } else {
            if (!Array.isArray(a)) throw Error("M`" + JSON.stringify(a) + "`" + Da(a));
            if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a)) throw Error("N");
            if (h = !!(Qf(a) & 16)) g = Qf(a), Rf(a,
                g | 32), g = !!(g & 32)
        }
        e && 0 < a.length && $f(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.Ea = (f ? 0 : -1) - d;
        this.N = void 0;
        this.m = a;
        this.preventPassingToStructuredClone = fg;
        a: {
            f = this.m.length;d = f - 1;
            if (f && (f = this.m[d], $f(f))) {
                this.F = f;
                b = Object.keys(f);
                0 < b.length && db(b, isNaN) ? this.Na = Number.MAX_VALUE : this.Na = d - this.Ea;
                break a
            }
            void 0 !== b && -1 < b ? (this.Na = Math.max(b, d + 1 - this.Ea), this.F = void 0) : this.Na = Number.MAX_VALUE
        }
        if (!e && this.F && "g" in this.F) throw Error("Q");
        if (c)
            for (e = h && !g ? Tf : Sf, b = 0; b < c.length; b++) h = c[b], (g = qg(this,
                h)) ? Array.isArray(g) && e(g) : rg(this, h, eg, !1, !0)
    };
    m = Fg.prototype;
    m.toArray = function() {
        return this.toJSON()
    };
    m.toJSON = function() {
        var a = this.m;
        ag || (Xa(a), a = mg(a, ng, pg));
        return a
    };
    m.jb = function() {
        ag = !0;
        try {
            return JSON.stringify(this.toJSON(), Hg)
        } finally {
            ag = !1
        }
    };
    m.getExtension = function(a) {
        Za(this, a.mf);
        return a.Yg(Za(this, Fg))
    };
    m.hasExtension = function(a) {
        Za(this, a.mf);
        C(!a.eh, "repeated extensions don't support hasExtension");
        var b = Za(this, Fg);
        return null != qg(b, a.Xg, !1)
    };
    m.clone = function() {
        var a = Za(this, Fg);
        var b = a.m;
        Xa(b);
        b = mg(b, og, Xf);
        Vf(b);
        Za(a, Fg);
        Xa(b);
        Gg = b;
        b = new a.constructor(b);
        Za(b, Fg);
        Gg = null;
        Ig(b, a);
        return b
    };
    var xg = function(a) {
        if (Zf(a)) {
            var b = {
                    Nc: !0
                },
                c = Zf(a);
            if (c && !b.Nc) throw Error("K");
            c || Wf(a.m);
            var d = new a.constructor;
            a.xb && (d.xb = a.xb.slice());
            for (var e = a.m, f = 0; f < e.length; f++) {
                var g = e[f];
                if (f === e.length - 1 && $f(g))
                    for (var h in g) {
                        var l = +h;
                        Number.isNaN(l) ? (d.F || (d.F = d.m[d.Na + d.Ea] = {}))[h] = g[h] : Cg(a, d, l, g[h], c, b)
                    } else Cg(a, d, f - a.Ea, g, c, b)
            }
            d.ie = a;
            a = d
        }
        return a
    };
    Fg.prototype.hd = Yf;
    Fg.prototype.toString = function() {
        return this.m.toString()
    };

    function Hg(a, b) {
        return kg(b)
    }

    function Ig(a, b) {
        C(a, "expected `to` to be non-null");
        C(b, "expected `from` to be non-null");
        b.xb && (a.xb = b.xb.slice());
        var c = b.N;
        if (c) {
            b = b.F;
            for (var d in c) {
                var e = c[d];
                if (e) {
                    var f = !(!b || !b[d]),
                        g = +d;
                    if (Array.isArray(e)) {
                        if (e.length) {
                            var h = a,
                                l = f;
                            l = void 0 === l ? !1 : l;
                            f = Zf(h);
                            var k = h;
                            var n = e[0].constructor,
                                r = l,
                                q = f;
                            q = void 0 === q ? !0 : q;
                            k.N || (k.N = {});
                            var A = k.N[g],
                                z = ug(k, g, r),
                                v = Zf(k),
                                H = !!(Qf(k.m) & 16),
                                I = Uf(z),
                                W = v || I;
                            !q && I && (z = Sf(Array.prototype.slice.call(z)), rg(k, g, z, r));
                            if (!A) {
                                A = [];
                                r = W;
                                for (I = 0; I < z.length; I++) {
                                    var fa =
                                        z[I];
                                    r = r || Uf(fa);
                                    var B = n,
                                        x = H,
                                        F = !1;
                                    F = void 0 === F ? !1 : F;
                                    x = void 0 === x ? !1 : x;
                                    fa = Array.isArray(fa) ? new B(x ? Vf(fa) : fa) : F ? new B : void 0;
                                    void 0 !== fa && (A.push(fa), W && Nf(fa.m, 2))
                                }
                                k.N[g] = A;
                                n = z;
                                z = !r;
                                Object.isFrozen(n) || (Xa(n, "state is only maintained on arrays."), H = Qf(n) | 33, Rf(n, z ? H | 8 : H & -9))
                            }
                            q = v || q;
                            v = Uf(A);
                            q && !v && (Object.isFrozen(A) && (k.N[g] = A = A.slice()), Nf(A, 2), Object.freeze(A));
                            !q && v && (k.N[g] = A = A.slice());
                            k = tg(A, k, g);
                            l = ug(h, g, l);
                            if (f = !f && l) {
                                if (!l) throw Error("E");
                                f = !(Qf(l) & 8)
                            }
                            if (f) {
                                for (f = 0; f < k.length; f++)(A = k[f]) &&
                                    Zf(A) && (k[f] = xg(k[f]), l[f] = k[f].m);
                                Nf(l, 8)
                            }
                            g = tg(k, h, g);
                            for (h = 0; h < Math.min(g.length, e.length); h++) Ig(g[h], Za(e[h], Fg))
                        }
                    } else throw Error("S`" + Da(e) + "`" + e);
                }
            }
        }
    }
    var Gg;
    C(!0);

    function Jg(a, b) {
        a.ae = "function" === typeof b ? b : function() {
            return b
        };
        return a
    }
    var Kg = void 0;

    function Lg(a, b) {
        b = void 0 === b ? new Set : b;
        if (b.has(a)) return "(Recursive reference)";
        switch (typeof a) {
            case "object":
                if (a) {
                    var c = Object.getPrototypeOf(a);
                    switch (c) {
                        case Map.prototype:
                        case Set.prototype:
                        case Array.prototype:
                            b.add(a);
                            var d = "[" + Array.from(a, function(e) {
                                return Lg(e, b)
                            }).join(", ") + "]";
                            b.delete(a);
                            c !== Array.prototype && (d = Mg(c.constructor) + "(" + d + ")");
                            return d;
                        case Object.prototype:
                            return b.add(a), c = "{" + Object.entries(a).map(function(e) {
                                var f = u(e);
                                e = f.next().value;
                                f = f.next().value;
                                return e +
                                    ": " + Lg(f, b)
                            }).join(", ") + "}", b.delete(a), c;
                        default:
                            return d = "Object", c && c.constructor && (d = Mg(c.constructor)), "function" === typeof a.toString && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
                    }
                }
                break;
            case "function":
                return "function " + Mg(a);
            case "number":
                if (!Number.isFinite(a)) return String(a);
                break;
            case "bigint":
                return a.toString(10) + "n"
        }
        return JSON.stringify(a)
    }

    function Mg(a) {
        var b = a.name;
        b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
        return b
    };
    var Ng = Fg;
    var Og = function(a, b) {
        this.name = a;
        this.value = b
    };
    Og.prototype.toString = function() {
        return this.name
    };
    var Pg = new Og("OFF", Infinity),
        Qg = new Og("WARNING", 900),
        Rg = new Og("CONFIG", 700),
        Sg = function() {
            this.Tb = 0;
            this.clear()
        },
        Tg;
    Sg.prototype.clear = function() {
        this.Qd = Array(this.Tb);
        this.Sd = -1;
        this.je = !1
    };
    var Ug = function(a, b, c) {
        this.reset(a || Pg, b, c, void 0, void 0)
    };
    Ug.prototype.reset = function(a, b, c, d) {
        d || Date.now();
        this.Rf = b
    };
    Ug.prototype.getMessage = function() {
        return this.Rf
    };
    var Vg = function(a, b) {
            this.level = null;
            this.tf = [];
            this.parent = (void 0 === b ? null : b) || null;
            this.children = [];
            this.Lf = {
                Wc: function() {
                    return a
                }
            }
        },
        Wg = function(a) {
            if (a.level) return a.level;
            if (a.parent) return Wg(a.parent);
            Sa("Root logger has no level set.");
            return Pg
        },
        Xg = function(a, b) {
            for (; a;) a.tf.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        Yg = function() {
            this.entries = {};
            var a = new Vg("");
            a.level = Rg;
            this.entries[""] = a
        },
        Zg, $g = function(a, b) {
            var c = a.entries[b];
            if (c) return c;
            c = b.lastIndexOf(".");
            c = b.slice(0, Math.max(c,
                0));
            c = $g(a, c);
            var d = new Vg(b, c);
            a.entries[b] = d;
            c.children.push(d);
            return d
        },
        ah = function() {
            Zg || (Zg = new Yg);
            return Zg
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var bh = [],
        ch = function(a) {
            var b;
            if (b = $g(ah(), "safevalues").Lf) {
                var c = "A URL with content '" + a + "' was sanitized away.",
                    d = Qg;
                if (a = b)
                    if (a = b && d) {
                        a = d.value;
                        var e = b ? Wg($g(ah(), b.Wc())) : Pg;
                        a = a >= e.value
                    }
                if (a) {
                    d = d || Pg;
                    a = $g(ah(), b.Wc());
                    "function" === typeof c && (c = c());
                    Tg || (Tg = new Sg);
                    e = Tg;
                    b = b.Wc();
                    if (0 < e.Tb) {
                        var f = (e.Sd + 1) % e.Tb;
                        e.Sd = f;
                        e.je ? (e = e.Qd[f], e.reset(d, c, b), b = e) : (e.je = f == e.Tb - 1, b = e.Qd[f] = new Ug(d, c, b))
                    } else b = new Ug(d, c, b);
                    Xg(a, b)
                }
            }
        }; - 1 === bh.indexOf(ch) && bh.push(ch);
    var dh = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    m = dh.prototype;
    m.clone = function() {
        return new dh(this.x, this.y)
    };
    m.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    m.equals = function(a) {
        return a instanceof dh && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    m.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    m.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    m.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    m.translate = function(a, b) {
        a instanceof dh ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    m.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var eh = function(a, b) {
        this.width = a;
        this.height = b
    };
    m = eh.prototype;
    m.clone = function() {
        return new eh(this.width, this.height)
    };
    m.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    m.aspectRatio = function() {
        return this.width / this.height
    };
    m.isEmpty = function() {
        return !(this.width * this.height)
    };
    m.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var hh = function(a) {
            return a ? new fh(gh(a)) : Na || (Na = new fh)
        },
        ih = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : of || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return lf && zf() && a.pageYOffset != b.scrollTop ? new dh(b.scrollLeft, b.scrollTop) : new dh(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        jh = function(a, b, c) {
            function d(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (var e = 1; e < c.length; e++) {
                var f = c[e];
                if (!Ea(f) ||
                    Fa(f) && 0 < f.nodeType) d(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Fa(f)) {
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
                    ab(g ? fb(f) : f, d)
                }
            }
        },
        gh = function(a) {
            C(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        kh = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                C("parentNode" != a.name);
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        fh = function(a) {
            this.Za = a || Ca.document ||
                document
        };
    m = fh.prototype;
    m.getElementsByTagName = function(a, b) {
        return (b || this.Za).getElementsByTagName(String(a))
    };
    m.createElement = function(a) {
        var b = this.Za;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    m.createTextNode = function(a) {
        return this.Za.createTextNode(String(a))
    };
    m.appendChild = function(a, b) {
        C(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    m.append = function(a, b) {
        jh(gh(a), a, arguments)
    };
    m.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    m.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    m.isElement = function(a) {
        return Fa(a) && 1 == a.nodeType
    };
    m.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var mh = function() {
            return !lh() && (D("iPod") || D("iPhone") || D("Android") || D("IEMobile"))
        },
        lh = function() {
            return D("iPad") || D("Android") && !D("Mobile") || D("Silk")
        };
    var nh = function(a) {
        try {
            return !!a && null != a.location.href && gf(a, "foo")
        } catch (b) {
            return !1
        }
    };

    function oh() {
        var a = void 0 === a ? Ca : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var ph = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        qh = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = window,
                e = "undefined" !== typeof queueMicrotask;
            return function() {
                c && e && queueMicrotask(function() {
                    d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1;
                    d.google_rum_task_id_counter += 1
                });
                var f = oh(),
                    g = 3;
                try {
                    var h = b.apply(this, arguments)
                } catch (k) {
                    throw g = 13, k;
                } finally {
                    if (d.google_measure_js_timing && f) {
                        var l = oh() || 0;
                        ph(Object.assign({}, {
                            label: a.toString(),
                            value: f,
                            duration: l - f,
                            type: g
                        }, c && e && {
                            taskId: d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1
                        }), d)
                    }
                }
                return h
            }
        };
    var rh = function() {
        Ha.apply(this, arguments)
    };
    w(rh, Ha);
    rh.prototype.Ba = function(a, b) {
        return Ha.prototype.Ba.call(this, a, qh(a, b))
    };

    function sh(a, b) {
        return function(c) {
            return new L(function(d) {
                return c.subscribe(function(e) {
                    a.Ba(b, function() {
                        d.next(e)
                    })()
                }, function(e) {
                    a.Ba(b, function() {
                        d.error(e)
                    })()
                }, function() {
                    a.Ba(b, function() {
                        d.complete()
                    })()
                })
            })
        }
    };
    var uh = function() {
        for (var a = u(y.apply(0, arguments)), b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.ja()) {
                this.i = b;
                return
            }
        this.i = new th
    };
    m = uh.prototype;
    m.ja = function() {
        return this.i.ja()
    };
    m.now = function() {
        return this.i.now()
    };
    m.setTimeout = function(a, b) {
        return this.i.setTimeout(a, b)
    };
    m.clearTimeout = function(a) {
        this.i.clearTimeout(a)
    };
    m.interval = function(a) {
        return this.i.interval(a)
    };
    p.Object.defineProperties(uh.prototype, {
        timeline: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.i.timeline
            }
        }
    });
    var th = function() {
        this.timeline = Symbol()
    };
    m = th.prototype;
    m.ja = function() {
        return !1
    };
    m.now = function() {
        return new Dd(0, this.timeline)
    };
    m.setTimeout = function() {
        return 0
    };
    m.clearTimeout = function() {};
    m.interval = function() {
        return Wc
    };
    var vh = function(a, b) {
        this.D = a;
        this.o = b
    };
    vh.prototype.setTimeout = function(a, b) {
        return this.D.setTimeout(this.o.Ba(734, a), b)
    };
    vh.prototype.clearTimeout = function(a) {
        this.D.clearTimeout(a)
    };
    vh.prototype.interval = function(a) {
        var b = this;
        return new L(function(c) {
            var d = 0,
                e = b.D.setInterval(function() {
                    c.next(d++)
                }, a);
            return function() {
                b.D.clearInterval(e)
            }
        })
    };
    vh.prototype.ja = function() {
        return !!this.D.clearTimeout && !!this.D.setTimeout && !!this.D.setInterval && !!this.D.clearInterval
    };
    var wh = function(a, b) {
        vh.call(this, a, b);
        this.timeline = Cd
    };
    w(wh, vh);
    wh.prototype.now = function() {
        return new Dd(this.D.Date.now(), this.timeline)
    };
    wh.prototype.ja = function() {
        return !!this.D.Date && !!this.D.Date.now && vh.prototype.ja.call(this)
    };
    var xh = function(a, b) {
        vh.call(this, a, b);
        this.timeline = Bd
    };
    w(xh, vh);
    xh.prototype.now = function() {
        return new Dd(this.D.performance.now(), this.timeline)
    };
    xh.prototype.ja = function() {
        return !!this.D.performance && !!this.D.performance.now && vh.prototype.ja.call(this)
    };
    var yh = function(a) {
        this.context = a
    };
    yh.prototype.ping = function() {
        var a = this;
        return Uc.apply(null, ea(y.apply(0, arguments).map(function(b) {
            return Ec(a.context.global.fetch(b, {
                method: "GET",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors"
            })).g(P(function(c) {
                return 200 === c.status
            }))
        }))).g(ee(function(b) {
            return b
        }), ne())
    };
    p.Object.defineProperties(yh.prototype, {
        pb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !zh(this.context) && !!this.context.global.fetch
            }
        }
    });
    var Ah = function(a) {
        this.context = a
    };
    Ah.prototype.ping = function() {
        var a = this;
        return N(y.apply(0, arguments).map(function(b) {
            try {
                var c = a.context.global;
                c.google_image_requests || (c.google_image_requests = []);
                var d = c.document;
                d = void 0 === d ? document : d;
                var e = d.createElement("img");
                e.src = b;
                c.google_image_requests.push(e);
                return !0
            } catch (f) {
                return !1
            }
        }).every(function(b) {
            return b
        }))
    };
    p.Object.defineProperties(Ah.prototype, {
        pb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !zh(this.context)
            }
        }
    });

    function Bh(a) {
        a = a.global;
        if (a.PendingGetBeacon) return a.PendingGetBeacon
    }
    var Ch = function(a) {
        this.context = a
    };
    Ch.prototype.oa = function(a) {
        return Dh && !zh(this.context) && void 0 !== Bh(this.context) && (void 0 === a || "GET" === a)
    };
    Ch.prototype.ea = function(a, b) {
        if (!this.oa(b)) throw new td;
        return new Eh(this.context, a)
    };
    var Dh = !1,
        Eh = function(a, b) {
            this.context = a;
            this.wd = b;
            a = Bh(this.context);
            if (void 0 === a) throw Error();
            this.Dd = new a(Fh(this), {
                backgroundTimeout: 0
            })
        },
        Fh = function(a) {
            a = a.wd;
            return ("&" === a.slice(-1)[0] ? a : a + "&") + "pbapi=1"
        };
    Eh.prototype.deactivate = function() {
        this.Dd.deactivate()
    };
    Eh.prototype.sendNow = function() {
        this.Dd.sendNow()
    };
    p.Object.defineProperties(Eh.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.wd
            },
            set: function(a) {
                this.wd = a;
                this.Dd.setURL(Fh(this))
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "GET"
            },
            set: function(a) {
                if ("GET" !== a) throw new td;
            }
        }
    });
    var Gh = function(a) {
        this.context = a
    };
    Gh.prototype.ping = function() {
        var a = this;
        return N(y.apply(0, arguments).map(function(b) {
            var c;
            return null == (c = a.context.global.navigator) ? void 0 : c.sendBeacon(b)
        }).every(function(b) {
            return b
        }))
    };
    p.Object.defineProperties(Gh.prototype, {
        pb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return !zh(this.context) && void 0 !== (null == (a = this.context.global.navigator) ? void 0 : a.sendBeacon)
            }
        }
    });

    function Hh(a) {
        return function(b) {
            return b.g(Ih(a, ue(new M)))
        }
    }

    function Y(a, b) {
        return function(c) {
            return c.g(Ih(a, ze(b)))
        }
    }

    function Ih(a, b) {
        function c(d) {
            return new L(function(e) {
                return d.subscribe(function(f) {
                    Ka(a, function() {
                        return void e.next(f)
                    }, 3)
                }, function(f) {
                    Ka(a, function() {
                        return void e.error(f)
                    }, 3)
                }, function() {
                    Ka(a, function() {
                        return void e.complete()
                    }, 3)
                })
            })
        }
        return K(c, Ee(), b, ac(), c)
    };
    var Z = function(a) {
        this.value = a
    };
    Z.prototype.ba = function(a) {
        return N(this.value).g(Y(a, 1))
    };
    var Jh = new Z(!0);

    function Kh(a) {
        var b = Lh(a);
        return null === b ? new Z(null) : b.g(P(function(c) {
            c = c.jb();
            if (Ff) c = Ca.btoa(c);
            else {
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    if (255 < g) throw Error("A");
                    d[e++] = g
                }
                c = Gf(d)
            }
            return c
        }), Xd(1), Y(a.h, 1))
    };

    function Mh(a) {
        var b = void 0 === b ? {} : b;
        if ("function" === typeof Event) return new Event(a, b);
        if ("undefined" !== typeof document) {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
            return c
        }
        throw Error();
    };
    var Nh = ["FRAME", "IMG", "IFRAME"],
        Oh = /^[01](px)?$/;

    function Ph(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    }

    function Qh(a, b) {
        var c = !0,
            d = !0,
            e = void 0,
            f = !0;
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? !1 : d;
        f = void 0 === f ? !1 : f;
        if (a = Ph(a)) {
            e || (e = function(W, fa, B) {
                W.addEventListener(fa, B)
            });
            for (var g = !1, h = function(W) {
                    g || (g = !0, b(W))
                }, l, k, n = 0; n < Nh.length; ++n)
                if (Nh[n] == a.tagName) {
                    k = 3;
                    l = [a];
                    break
                }
            l || (l = a.querySelectorAll(Nh.join(",")), k = 2);
            var r = 0,
                q = 0,
                A = a = !1;
            n = {};
            for (var z = 0; z < l.length; n = {
                    Ob: n.Ob
                }, z++) {
                var v = l[z];
                if (!("IMG" != v.tagName || !v.complete || v.naturalWidth && v.naturalHeight ? Oh.test(v.getAttribute("width")) && Oh.test(v.getAttribute("height")) :
                        1)) {
                    if ("IMG" == v.tagName) var H = v.naturalWidth && v.naturalHeight ? !0 : !1;
                    else try {
                        H = "complete" === (v.readyState ? v.readyState : v.contentWindow && v.contentWindow.document && v.contentWindow.document.readyState) ? !0 : !1
                    } catch (W) {
                        H = void 0 === d ? !1 : d
                    }
                    if (H) a = !0;
                    else {
                        r++;
                        n.Ob = "IMG" === v.tagName;
                        var I = function(W) {
                            return function() {
                                r--;
                                r || h(k);
                                W.Ob && (q--, !q && A && h(k))
                            }
                        }(n);
                        e(v, "load", I);
                        n.Ob && (q++, e(v, "error", I))
                    }
                }
            }
            l = null;
            if (0 === r && !a && "complete" === Ca.document.readyState) k = 5;
            else if (r || !a) {
                e(Ca, "load", function() {
                    f && q ? A = !0 :
                        h(4)
                });
                return
            }
            c && h(k)
        }
    };

    function Rh(a, b, c) {
        if (a)
            for (var d = 0; null != a && 500 > d && !c(a); ++d) a = b(a)
    }

    function Sh(a, b) {
        Rh(a, function(c) {
            try {
                return c === c.parent ? null : c.parent
            } catch (d) {}
            return null
        }, b)
    }

    function Th(a, b) {
        if ("IFRAME" == a.tagName) b(a);
        else {
            a = a.querySelectorAll("IFRAME");
            for (var c = 0; c < a.length && !b(a[c]); ++c);
        }
    }

    function Uh(a) {
        return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null
    }

    function Vh(a, b, c) {
        try {
            var d = JSON.parse(c.data)
        } catch (g) {}
        if ("object" === typeof d && d && "creativeLoad" === d.type) {
            var e = Uh(a);
            if (c.source && e) {
                var f;
                Sh(c.source, function(g) {
                    try {
                        if (g.parent === e) return f = g, !0
                    } catch (h) {}
                });
                f && Th(a, function(g) {
                    if (g.contentWindow === f) return b(d), !0
                })
            }
        }
    }

    function Wh(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    }
    var Xh = function(a, b) {
        var c = Wh(a);
        if (c)
            if (c.onCreativeLoad) c.onCreativeLoad(b);
            else {
                var d = b ? [b] : [],
                    e = function(f) {
                        for (var g = 0; g < d.length; ++g) try {
                            d[g](1, f)
                        } catch (h) {}
                        d = {
                            push: function(h) {
                                h(1, f)
                            }
                        }
                    };
                c.onCreativeLoad = function(f) {
                    d.push(f)
                };
                c.setAttribute("data-creative-load-listener", "");
                c.addEventListener("creativeLoad", function(f) {
                    e(f.detail)
                });
                Ca.addEventListener("message", function(f) {
                    Vh(c, e, f)
                })
            }
    };
    var Yh = function(a, b) {
            var c = this;
            this.global = a;
            this.nd = b;
            this.cg = this.document ? Uc(N(!0), Kc(this.document, "visibilitychange")).g(sh(this.nd.o, 748), P(function() {
                return c.document ? c.document.visibilityState : "visible"
            }), U()) : N("visible");
            this.Zf = this.document ? Kc(this.document, "DOMContentLoaded").g(sh(this.nd.o, 739), Xd(1)) : N(Mh("DOMContentLoaded"))
        },
        Zh = function(a) {
            return a.document ? a.document.readyState : "complete"
        },
        $h = function(a) {
            return null !== a.document && void 0 !== a.document.visibilityState
        };
    Yh.prototype.querySelector = function(a) {
        return this.document ? this.document.querySelector(a) : null
    };
    Yh.prototype.querySelectorAll = function(a) {
        return this.document ? fb(this.document.querySelectorAll(a)) : []
    };
    var ai = function(a) {
        return null !== a.document && "function" === typeof a.document.elementFromPoint
    };
    Yh.prototype.elementFromPoint = function(a, b) {
        return this.document && ai(this) ? this.document.elementFromPoint(a, b) : null
    };
    var bi = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (!a.document) return N(b);
        var d = new Xb(1),
            e = function() {
                d.next(b)
            };
        c || Xh(b, e);
        Qh(b, e);
        return d.g(sh(a.nd.o, 749), Xd(1))
    };
    p.Object.defineProperties(Yh.prototype, {
        document: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return gf(this.global, "document") ? this.global.document || null : null
            }
        }
    });
    var ci = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };

    function di(a, b) {
        return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height
    }

    function ei(a, b) {
        return {
            left: Math.max(a.left, b.left),
            top: Math.max(a.top, b.top),
            width: Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)),
            height: Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top))
        }
    }

    function fi(a, b) {
        return {
            left: Math.round(a.left + b.x),
            top: Math.round(a.top + b.y),
            width: a.width,
            height: a.height
        }
    };
    var gi = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    m = gi.prototype;
    m.Yc = function() {
        return this.right - this.left
    };
    m.Vc = function() {
        return this.bottom - this.top
    };
    m.clone = function() {
        return new gi(this.top, this.right, this.bottom, this.left)
    };
    m.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    m.contains = function(a) {
        return this && a ? a instanceof gi ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    m.expand = function(a, b, c, d) {
        Fa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    m.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    m.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    m.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    m.translate = function(a, b) {
        a instanceof dh ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (Ta(a), this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    m.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var ii = function(a) {
        Ng.call(this, a, -1, hi)
    };
    w(ii, Ng);
    var ji = function(a, b) {
            return rg(a, 2, b)
        },
        ki = function(a, b) {
            return rg(a, 3, b)
        },
        li = function(a, b) {
            return rg(a, 4, b)
        },
        mi = function(a, b) {
            return rg(a, 5, b)
        },
        ni = function(a, b) {
            return rg(a, 9, b)
        },
        pi = function(a, b) {
            return zg(a, oi, 10, b)
        },
        qi = function(a, b) {
            return rg(a, 11, b)
        },
        ri = function(a, b) {
            return rg(a, 1, b)
        },
        si = function(a, b) {
            return rg(a, 7, b)
        },
        oi = function(a) {
            Ng.call(this, a)
        };
    w(oi, Ng);
    oi.prototype.Zd = function() {
        return Ag(qg(this, 2), "")
    };
    var hi = [10, 6];
    var ti = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function ui(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function vi(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function wi(a) {
        if (!vi(a)) return null;
        var b = ui(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(ti).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function xi(a) {
        var b;
        return qi(pi(mi(ji(ri(li(si(ni(ki(new ii, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new oi;
            d = rg(d, 1, c.brand);
            return rg(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function yi(a) {
        var b, c;
        return null != (c = null == (b = wi(a)) ? void 0 : b.then(function(d) {
            return xi(d)
        })) ? c : null
    };
    var zi = function(a, b, c) {
        a = void 0 === a ? window : a;
        b = void 0 === b ? null : b;
        c = void 0 === c ? new Ha : c;
        pd.call(this);
        this.global = a;
        this.Qa = b;
        this.o = c;
        this.ag = Kc(this.global, "pagehide").g(sh(this.o, 941));
        this.re = Kc(this.global, "load").g(sh(this.o, 738), Xd(1));
        this.bg = Kc(this.global, "resize").g(sh(this.o, 741));
        this.onMessage = Kc(this.global, "message").g(sh(this.o, 740));
        this.document = new Yh(this.global, this);
        this.i = new uh(new xh(this.D, this.o), new wh(this.D, this.o));
        this.L = new Ad(new Ch(this), new We(this, new yh(this),
            "GET"), new We(this, new Gh(this), "POST"), new We(this, new Ah(this), "GET"))
    };
    w(zi, pd);
    var zh = function(a) {
        var b = a.global;
        return !!a.global.HTMLFencedFrameElement && !!b.fence && "function" === typeof b.fence.reportEvent
    };
    zi.prototype.gb = function(a) {
        zh(this) && this.global.fence.reportEvent(a)
    };
    zi.prototype.Xc = function() {
        return this.ag.g(sh(this.o, 942), Y(this.h, 1), P(function() {}))
    };
    var Ai = function(a) {
            var b = new zi(a.global.top, a.Qa);
            b.L = a.L;
            return b
        },
        Bi = function(a, b) {
            b.start();
            return Kc(b, "message").g(sh(a.o, 740))
        };
    zi.prototype.postMessage = function(a, b, c) {
        c = void 0 === c ? [] : c;
        this.global.postMessage(a, b, c)
    };
    zi.prototype.Yc = function() {
        return nh(this.global) ? this.global.width : 0
    };
    zi.prototype.Vc = function() {
        return nh(this.global) ? this.global.height : 0
    };
    var Ci = function(a, b) {
        try {
            var c = a.global,
                d = lh() || mh();
            try {
                b && (c = c.top);
                a = c;
                b && null !== a && a != a.top && (a = a.top);
                try {
                    if (void 0 === d ? 0 : d) var e = (new eh(a.innerWidth, a.innerHeight)).round();
                    else {
                        var f = (a || window).document,
                            g = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
                        e = (new eh(g.clientWidth, g.clientHeight)).round()
                    }
                    var h = e
                } catch (z) {
                    h = new eh(-12245933, -12245933)
                }
                b = h;
                var l = b.height,
                    k = b.width;
                if (-12245933 === k) var n = new gi(k, k, k, k);
                else {
                    var r = ih(hh(c.document).Za),
                        q = r.x,
                        A = r.y;
                    n = new gi(A, q + k, A + l, q)
                }
            } catch (z) {
                n =
                    new gi(-12245933, -12245933, -12245933, -12245933)
            }
            return {
                left: n.left,
                top: n.top,
                width: n.Yc(),
                height: n.Vc()
            }
        } catch (z) {
            return ci
        }
    };
    zi.prototype.validate = function() {
        return this.global && this.i.ja() && this.L.oa()
    };
    var Lh = function(a) {
        return (a = yi(a.global)) ? Ec(a) : null
    };
    p.Object.defineProperties(zi.prototype, {
        D: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return window
            }
        },
        ab: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !nh(this.global.top)
            }
        },
        ad: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ab || this.global.top !== this.global
            }
        },
        scrollY: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.global.scrollY
            }
        },
        MutationObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.D.MutationObserver
            }
        },
        ResizeObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.D.ResizeObserver
            }
        },
        Ff: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                C(!0, "Major version must be an integer");
                var a = mb();
                if (D("Trident") || D("MSIE")) {
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
                } else a = "";
                "" === a ? a = NaN : (a = a.split("."),
                    a = 0 === a.length ? NaN : Number(a[0]));
                return 8 <= a
            }
        },
        We: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "vu" in this.global || "vv" in this.global
            }
        }
    });
    var Di = !lf && !ob(),
        Ei = function(a, b) {
            if (/-[a-z]/.test(b)) return null;
            if (Di && a.dataset) {
                if (rb() && !(b in a.dataset)) return null;
                a = a.dataset[b];
                return void 0 === a ? null : a
            }
            return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    var Fi = {},
        Gi = (Fi["data-google-av-cxn"] = "_avicxn_", Fi["data-google-av-cpmav"] = "_cvu_", Fi["data-google-av-metadata"] = "_avm_", Fi["data-google-av-adk"] = "_adk_", Fi["data-google-av-btr"] = void 0, Fi["data-google-av-override"] = void 0, Fi["data-google-av-dm"] = void 0, Fi["data-google-av-immediate"] = void 0, Fi["data-google-av-aid"] = void 0, Fi["data-google-av-naid"] = void 0, Fi["data-google-av-inapp"] = void 0, Fi["data-google-av-slift"] = void 0, Fi["data-google-av-itpl"] = void 0, Fi["data-google-av-ext-cxn"] = void 0, Fi["data-google-av-rs"] =
            void 0, Fi["data-google-av-flags"] = void 0, Fi["data-google-av-turtlex"] = void 0, Fi),
        Hi = {},
        Ii = (Hi["data-google-av-adk"] = "googleAvAdk", Hi["data-google-av-btr"] = "googleAvBtr", Hi["data-google-av-cpmav"] = "googleAvCpmav", Hi["data-google-av-dm"] = "googleAvDm", Hi["data-google-av-ext-cxn"] = "googleAvExtCxn", Hi["data-google-av-immediate"] = "googleAvImmediate", Hi["data-google-av-inapp"] = "googleAvInapp", Hi["data-google-av-itpl"] = "googleAvItpl", Hi["data-google-av-metadata"] = "googleAvMetadata", Hi["data-google-av-naid"] =
            "googleAvNaid", Hi["data-google-av-override"] = "googleAvOverride", Hi["data-google-av-rs"] = "googleAvRs", Hi["data-google-av-slift"] = "googleAvSlift", Hi["data-google-av-cxn"] = "googleAvCxn", Hi["data-google-av-aid"] = void 0, Hi["data-google-av-flags"] = "googleAvFlags", Hi["data-google-av-turtlex"] = "googleAvTurtlex", Hi);

    function Ji(a, b) {
        try {
            var c = a.getAttribute(b);
            if (null !== c) return c
        } catch (f) {}
        try {
            var d = Gi[b];
            if (d && (c = a[d], void 0 !== c)) return c
        } catch (f) {}
        try {
            var e = Ii[b];
            if (e) return Ei(a, e)
        } catch (f) {}
        return null
    }

    function Ki(a) {
        return P(function(b) {
            return Ji(b, a)
        })
    };
    var Li = K(function(a) {
        return P(function(b) {
            return a.map(function(c) {
                return Ji(b, c)
            })
        })
    }(["data-google-av-cxn", "data-google-av-turtlex"]), P(function(a) {
        var b = u(a);
        a = b.next().value;
        b = b.next().value;
        if (!a) {
            if (null !== b) return [];
            throw new wd;
        }
        return a.split("|")
    }));
    var Mi = function() {
        return K(Fc(function(a) {
            return a.element.g(Li, Hd(function() {
                return N([""])
            })).g(P(function(b) {
                return {
                    Ca: b,
                    Vb: a
                }
            }))
        }), Sd(function(a) {
            return a.Ca.sort().join(";")
        }), P(function(a) {
            return a.Vb
        }))
    };
    var Oi = function() {
            return Fc(function(a) {
                return Ec(Ni(a)).g(Hh(a.h))
            })
        },
        Ni = function(a) {
            return a.document.querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass")
        };

    function Pi(a) {
        var b = a.re,
            c = a.document.Zf;
        return Uc(N({}), c, b).g(P(function() {
            return a
        }))
    };
    var Ri = P(Qi);

    function Qi(a) {
        var b = Number(Ji(a, "data-google-av-rs"));
        return isNaN(b) || 0 === b ? (a = a.id) ? 0 == a.lastIndexOf("DfaVisibilityIdentifier", 0) ? 6 : 0 == a.lastIndexOf("YtKevlarVisibilityIdentifier", 0) ? 15 : 0 == a.lastIndexOf("YtSparklesVisibilityIdentifier", 0) ? 17 : 0 == a.lastIndexOf("YtKabukiVisibilityIdentifier", 0) ? 18 : 0 : 0 : b
    };

    function Si(a, b) {
        b = void 0 === b ? Qb : b;
        return Uc(Pi(a), b).g(Oi(), Sd(), Y(a.h, 1))
    };

    function Ti(a) {
        var b, c, d;
        return !!a && "boolean" === typeof a.active && "function" === typeof(null == (b = a.clock) ? void 0 : b.now) && void 0 !== (null == (c = a.clock) ? void 0 : c.timeline) && !(null == (d = a.B) || !d.timestamp) && "function" === typeof a.X && "function" === typeof a.M && "function" === typeof a.ka && "function" === typeof a.map && "function" === typeof a.da
    };

    function Ui(a, b) {
        return new L(function(c) {
            var d = !1,
                e = Array(b.length);
            e.fill(void 0);
            var f = new Set,
                g = new Set,
                h = function(r, q) {
                    a.we ? (e[q] = r, f.add(q), d || (d = !0, Ka(a, function() {
                        d = !1;
                        c.next(fb(e))
                    }, 1))) : c.error(new xd(q))
                },
                l = function(r, q) {
                    g.add(q);
                    f.add(q);
                    Ka(a, function() {
                        c.error(r)
                    }, 1)
                },
                k = function(r) {
                    g.add(r);
                    Ka(a, function() {
                        g.size === b.length && c.complete()
                    }, 1)
                },
                n = b.map(function(r, q) {
                    return r.subscribe(function(A) {
                        return void h(A, q)
                    }, function(A) {
                        return void l(A, q)
                    }, function() {
                        return void k(q)
                    })
                });
            return function() {
                n.forEach(function(r) {
                    return void r.unsubscribe()
                })
            }
        })
    };

    function Vi(a, b, c) {
        function d() {
            if (b.Qa) {
                var v = b.Qa,
                    H = v.next;
                var I = {
                    Tg: c,
                    lh: e,
                    mh: Object.assign({}, f),
                    ah: g,
                    errorMessage: h,
                    Wg: l
                };
                I = {
                    pg: 1,
                    qg: 0,
                    rg: 0,
                    timestamp: Ed(b.i.now(), new Dd(0, b.i.timeline)),
                    ic: b.ic,
                    messageType: 2,
                    Ug: I
                };
                H.call(v, I)
            }
        }
        for (var e = Object.keys(a), f = {}, g = !1, h = null, l = null, k = {}, n = new Set, r = [], q = {}, A = u(e), z = A.next(); !z.done; q = {
                V: q.V
            }, z = A.next()) q.V = z.value, z = a[q.V], z instanceof Z ? (k[q.V] = z.value, n.add(q.V), f[String(q.V)] = Gd(z.value)) : (z = z.g(U(function(v, H) {
            return Ti(v) || Ti(H) ? !1 : v === H
        }), P(function(v) {
            return function(H) {
                f[String(v.V)] =
                    Gd(H);
                d();
                var I = {};
                return I[v.V] = H, I
            }
        }(q)), Hd(function(v) {
            return function(H) {
                if (H instanceof xd) throw new zd(String(v.V));
                throw H;
            }
        }(q)), Le(function(v) {
            return function() {
                n.add(v.V)
            }
        }(q), function(v) {
            return function(H) {
                l = String(v.V);
                h = String(H);
                d()
            }
        }(q), function(v) {
            return function() {
                n.has(v.V) || (g = !0, d())
            }
        }(q))), r.push(z));
        (a = 0 < Object.keys(f).length) && d();
        q = Ui(b.h, r).g(Hd(function(v) {
            if (v instanceof xd) throw new yd(e[v.zf]);
            throw v;
        }), P(function(v) {
            return Object.freeze(Object.assign.apply(Object, [{},
                k
            ].concat(ea(v))))
        }));
        return (r = 0 < r.length) && a ? Uc(N(Object.freeze(k)), q) : r ? q : N(Object.freeze(k))
    };

    function Wi(a, b, c, d) {
        var e = Xi(Yi(Xi(Zi, $i), aj), bj, cj);
        return a.o.Ba.bind(a.o)(733, function() {
            function f() {
                if (a.Qa) {
                    var k = a.Qa,
                        n = k.next;
                    var r = {
                        fh: [].concat(ea(h.values())),
                        Zg: l
                    };
                    r = {
                        pg: 1,
                        qg: 0,
                        rg: 0,
                        timestamp: Ed(a.i.now(), new Dd(0, a.i.timeline)),
                        ic: a.ic,
                        messageType: 1,
                        bh: r
                    };
                    n.call(k, r)
                }
            }
            var g = {},
                h = new Set,
                l = !1;
            try {
                return b.g(Hd(function(k) {
                    d(Object.assign({}, g, {
                        error: k
                    }));
                    return Qb
                }), Le(function() {}, function() {}, function() {
                    l = !0;
                    f()
                }), Fc(function(k) {
                    h.add(k.tb);
                    f();
                    try {
                        var n = c(a, k)
                    } catch (q) {
                        return d(Object.assign({},
                            g, {
                                error: q instanceof Error ? q : String(q)
                            })), Qb
                    }
                    var r = {};
                    return Vi(n, a, k.tb).g(Le(function(q) {
                        r = q
                    }), ze(1), ac()).g(e, Hd(function(q) {
                        d(Object.assign({}, r, {
                            error: q
                        }));
                        return Qb
                    }), de(void 0), P(function() {
                        h.delete(k.tb) && f();
                        return !0
                    }))
                })).g(re(function(k) {
                    return k + 1
                }, 0), Hd(function(k) {
                    d(Object.assign({}, g, {
                        error: k
                    }));
                    return Qb
                }))
            } catch (k) {
                return d(Object.assign({}, g, {
                    error: k
                })), Qb
            }
        })()
    };
    var bj = K(P(function(a) {
        var b = a.L,
            c = a.Ic,
            d = a.Ad,
            e = a.bb;
        if (void 0 === b || void 0 === c || void 0 === d) return !1;
        if (a.Df) {
            if (e) {
                a = a.gb;
                if (!a) return !1;
                a({
                    eventType: "active-view-begin-to-render",
                    eventData: "",
                    destination: ["buyer"]
                });
                return !0
            }
            d(c, a).forEach(function(f) {
                b.ea(f).sendNow()
            });
            return !0
        }
        return void 0 !== a.Rc ? !0 : !1
    }), Ie(function(a) {
        return !a
    }), he());

    function dj(a, b) {
        var c = ej,
            d = fj,
            e = gj;
        b = void 0 === b ? .01 : b;
        return function(f) {
            0 < b && Math.random() <= b && (a.global.HTMLFencedFrameElement && a.global.fence && "function" === typeof a.global.fence.reportEvent && a.global.fence.reportEvent({
                eventType: "active-view-error",
                eventData: "",
                destination: ["buyer"]
            }), f = Object.assign({}, f, {
                errorMessage: f.error instanceof Error && f.error.message ? f.error.message : String(f.error),
                Ud: f.error instanceof Error && f.error.stack ? String(f.error.stack) : null,
                gf: f.error instanceof Error && f.error.name ?
                    String(f.error.name) : null,
                ff: String(a.o.Ee)
            }), d(Object.assign({}, f, {
                ra: function() {
                    return function(g) {
                        try {
                            return e(Object.assign({}, g))
                        } catch (h) {
                            return {}
                        }
                    }
                }(),
                Ca: [c]
            })).forEach(function(g) {
                a.L.ea(g).sendNow()
            }))
        }
    };
    var cj = K(P(function(a) {
        var b = a.L,
            c = a.nf;
        if (void 0 === b || void 0 === c) return !1;
        if (void 0 !== a.Rc) return !0;
        if (null === c) return !1;
        for (a = 0; a < c; a++) b.ea("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=" + Math.floor(1E7 * Math.random())).sendNow();
        return !0
    }), Ie(function(a) {
        return !a
    }), he());
    var gj = function(a) {
        return {
            id: a.od,
            mcvt: a.nc,
            p: a.Wb,
            asp: a.Pg,
            mtos: a.Ab,
            tos: a.Kb,
            v: a.Ve,
            bin: a.Ue,
            avms: a.oe,
            bs: a.Pd,
            mc: a.me,
            "if": a.af,
            vu: a.cf,
            app: a.Ia,
            mse: a.jd,
            mtop: a.kd,
            itpl: a.cd,
            adk: a.Hc,
            exk: a.Rg,
            rs: a.Aa,
            la: a.ke,
            cr: a.dd,
            uach: a.xd,
            vs: a.zd,
            r: a.pd,
            pay: a.uf,
            rst: a.Pe,
            rpt: a.Oe,
            isd: a.yf,
            lsd: a.Kf,
            context: a.ff,
            msg: a.errorMessage,
            stack: a.Ud,
            name: a.gf,
            ec: a.vf,
            sfr: a.td,
            met: a.rb,
            wmsd: a.Cd,
            pv: a.ih,
            epv: a.Vg
        }
    };

    function Xi() {
        var a = y.apply(0, arguments);
        return function(b) {
            var c = b.g(ze(1), ac());
            b = a.map(function(d) {
                return c.g(d, de(!0))
            });
            return S(b).g(Xd(1), he())
        }
    };

    function Yi() {
        var a = y.apply(0, arguments);
        return function(b) {
            var c = b.g(ze(1), ac());
            b = a.map(function(d) {
                return c.g(d, de(!0))
            });
            return Uc.apply(null, ea(b)).g(Xd(1), he())
        }
    };
    var $i = function(a) {
        var b = [];
        return a.g(P(function(c) {
            var d = c.L,
                e = c.Kb,
                f = c.vg,
                g = c.ra,
                h = c.ug,
                l = c.uc,
                k = c.Lb,
                n = c.Bd,
                r = c.de,
                q = c.xf;
            if (!c.Uc || !r || void 0 === c.Ab || void 0 === e || void 0 === f || void 0 === g || void 0 === h || void 0 === k || void 0 === d) return !1;
            if (c.bb) {
                if (void 0 === l) return !1;
                f = c.gb;
                if (!f) return !1;
                f({
                    eventType: "active-view-time-on-screen",
                    eventData: "",
                    destination: ["buyer"]
                });
                return !0
            }
            if (!q && !l) return !1;
            var A;
            e = null != (A = null == n ? void 0 : n.M().value) ? A : !1;
            c = k(Object.assign({}, c, {
                od: h,
                zd: e ? 4 : 3,
                pd: null != l ? l : "u",
                ra: g,
                Ca: f
            }));
            if (q) {
                for (; b.length > f.length;) q = void 0, null == (q = b.shift()) || q.deactivate();
                c.forEach(function(z, v) {
                    v >= b.length ? b.push(d.ea(z)) : b[v].url = z
                });
                return void 0 !== l
            }
            return void 0 !== l ? (c.forEach(function(z) {
                d.ea(z).sendNow()
            }), !0) : !1
        }), Ie(function(c) {
            return !c
        }), he())
    };

    function hj(a) {
        return function(b) {
            return b.g(P(function(c) {
                a.we || Sa("Assertion on queued Observable output failed");
                return c
            }))
        }
    };

    function ij(a) {
        return function(b) {
            return new L(function(c) {
                var d = !1,
                    e = b.g(hj(a)).subscribe(function(f) {
                        d = !0;
                        c.next(f)
                    }, c.error.bind(c), c.complete.bind(c));
                Ka(a, function() {
                    d || c.next(null)
                }, 3);
                return e
            })
        }
    };

    function jj(a, b) {
        return function(c) {
            return c.g(X(function(d) {
                return new L(function(e) {
                    var f = a.MutationObserver;
                    if (f) {
                        var g = new f(function(h) {
                            e.next(h)
                        });
                        g.observe(d, b);
                        return function() {
                            g.disconnect()
                        }
                    }
                })
            }))
        }
    };
    var kj = {
        Og: 0,
        Fg: 1,
        Hg: 2,
        Gg: 3,
        0: "UNKNOWN",
        1: "DEFER_MEASUREMENT",
        2: "DO_NOT_DEFER_MEASUREMENT",
        3: "DEFER_MEASUREMENT_AND_PING"
    };

    function lj(a, b) {
        var c = b.g(jj(a, {
            attributes: !0
        }), Y(a.h, 1));
        return S([b, c.g(Y(a.h, 1), ij(a.h))]).g(P(function(d) {
            return u(d).next().value
        }), Ki("data-google-av-dm"), P(mj))
    }

    function mj(a) {
        return a && a in kj ? Number(a) : 2
    };

    function nj(a) {
        if (3 === a.Nf) return null;
        if (void 0 !== a.uc) {
            var b = !1 === a.Ze ? "n" : !1 === a.Uc && a.uc ? a.uc : null;
            if (null !== b) return b
        }
        return a.Zb instanceof rd ? "msf" : a.Mc instanceof sd ? "c" : !1 === a.Ye ? "pv" : a.Zb || a.Mc ? "x" : null
    }
    var aj = K(P(function(a) {
            var b = nj(a);
            if (null === b) return !1;
            var c = a.L;
            if (void 0 === a.dc || void 0 === a.ra || void 0 === a.Lb || void 0 === a.fc || void 0 === c) return !1;
            if (a.bb) {
                a = a.gb;
                if (!a) return !1;
                a({
                    eventType: "active-view-unmeasurable",
                    eventData: "",
                    destination: ["buyer"]
                });
                return !0
            }
            var d = void 0;
            if ("x" === b) {
                var e, f = null != (e = a.Zb) ? e : a.Mc;
                if (f) {
                    var g = f.stack;
                    d = f.message
                }
            }
            a.Lb(Object.assign({}, a, {
                Ca: a.dc,
                ra: a.ra,
                od: a.fc,
                zd: 2,
                pd: b,
                errorMessage: d,
                Ud: g
            })).forEach(function(h) {
                c.ea(h).sendNow()
            });
            return !0
        }), T(function(a) {
            return a
        }),
        Xd(1), he());

    function oj(a) {
        return "string" === typeof a ? encodeURIComponent(a) : "number" === typeof a ? String(a) : Array.isArray(a) ? a.map(oj).join(",") : a instanceof Dd ? a.toString() : a && "function" === typeof a.M ? oj(a.M().value) : !0 === a ? "1" : !1 === a ? "0" : void 0 === a || null === a ? null : [a.top, a.left, a.top + a.height, a.left + a.width].join()
    }

    function pj(a) {
        a = Object.entries(a).map(function(b) {
            var c = u(b);
            b = c.next().value;
            c = c.next().value;
            c = oj(c);
            return null === c ? "" : b + "=" + c
        }).filter(function(b) {
            return "" !== b
        });
        return a.length ? a.join("&") : ""
    };

    function fj(a) {
        var b = a.ra(a),
            c = pj(b);
        return c ? bb(a.Ca, function(d) {
            d = 0 <= d.indexOf("?") ? d : d + "?";
            d = 0 <= "?&".indexOf(d.slice(-1)) ? d : d + "&";
            return d + c
        }) : a.Ca
    };

    function qj(a, b) {
        return bb(a, function(c) {
            if ("string" === typeof b.xd) {
                var d = "&" + pj({
                    uach: b.xd
                });
                return "&adurl=" == c.substring(c.length - 7) ? c.substring(0, c.length - 7) + d + "&adurl=" : c + d
            }
            return c
        })
    };
    var Zi = K(Ie(function(a) {
        return void 0 === a.Rc
    }), T(function(a) {
        var b = a.Bd,
            c;
        return !!a.de && (null != (c = null == b ? void 0 : b.M().value) ? c : !1)
    }), P(function(a) {
        var b = a.L;
        if (void 0 === a.ra || void 0 === a.dc || void 0 === a.Lb || void 0 === a.fc || void 0 === b) return !1;
        if (a.bb) {
            a = a.gb;
            if (!a) return !1;
            a({
                eventType: "active-view-viewable",
                eventData: "",
                destination: ["buyer"]
            });
            return !0
        }
        var c = a.Lb(Object.assign({}, a, {
                Ca: a.dc,
                ra: a.ra,
                od: a.fc,
                zd: 4,
                pd: "v"
            })),
            d = a.Oc;
        d && 0 < d.length && a.Ad && a.Ad(d, a).forEach(function(e) {
            b.ea(e).sendNow()
        });
        c.forEach(function(e) {
            b.ea(e).sendNow()
        });
        return !0
    }), Ie(function(a) {
        return !a
    }), he());

    function rj(a, b, c) {
        c = void 0 === c ? function(d, e) {
            return d === e
        } : c;
        return a.timestamp.equals(b.timestamp) && c(a.value, b.value)
    };
    var sj = function(a, b) {
        this.a = a;
        this.b = b;
        if (a.clock.timeline !== b.clock.timeline) throw Error();
    };
    sj.prototype.X = function(a) {
        return a instanceof sj ? this.a.X(a.a) && this.b.X(a.b) : !1
    };
    sj.prototype.ka = function(a) {
        var b = this.a.ka(a).value,
            c = this.b.ka(a).value;
        return {
            timestamp: a,
            value: [b, c]
        }
    };
    p.Object.defineProperties(sj.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.active || this.b.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.clock
            }
        },
        B: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = this.a.B.timestamp.maximum(this.b.B.timestamp),
                    b = this.a.B.timestamp.equals(a) ? this.a.B.value : this.a.ka(a).value,
                    c = this.b.B.timestamp.equals(a) ? this.b.B.value : this.b.ka(a).value;
                return {
                    timestamp: a,
                    value: [b, c]
                }
            }
        }
    });
    var tj = function(a, b) {
        this.input = a;
        this.lc = b;
        this.B = {
            timestamp: this.input.B.timestamp,
            value: this.lc(this.input.B.value)
        }
    };
    tj.prototype.X = function(a) {
        return a instanceof tj ? this.input.X(a.input) && this.lc === a.lc : !1
    };
    tj.prototype.ka = function(a) {
        a = this.input.ka(a);
        return {
            timestamp: a.timestamp,
            value: this.lc(a.value)
        }
    };
    p.Object.defineProperties(tj.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.clock
            }
        }
    });
    var uj = function(a, b, c) {
        this.clock = a;
        this.B = b;
        this.active = c
    };
    uj.prototype.X = function(a) {
        return a instanceof uj ? this.active === a.active && this.clock.timeline === a.clock.timeline && rj(this.B, a.B) : !1
    };
    uj.prototype.ka = function(a) {
        return {
            timestamp: a,
            value: this.B.value + (this.active ? Ed(a, this.B.timestamp) : 0)
        }
    };
    var vj = function() {};
    vj.prototype.M = function() {
        return this.ka(this.clock.now())
    };
    vj.prototype.map = function(a) {
        return new wj(this, a)
    };
    vj.prototype.da = function(a) {
        return new xj(this, a)
    };
    var xj = function() {
        sj.apply(this, arguments);
        this.map = vj.prototype.map;
        this.da = vj.prototype.da;
        this.M = vj.prototype.M
    };
    w(xj, sj);
    var yj = function() {
        uj.apply(this, arguments);
        this.map = vj.prototype.map;
        this.da = vj.prototype.da;
        this.M = vj.prototype.M
    };
    w(yj, uj);
    var wj = function() {
        tj.apply(this, arguments);
        this.map = vj.prototype.map;
        this.da = vj.prototype.da;
        this.M = vj.prototype.M
    };
    w(wj, tj);
    var zj = function(a, b) {
        this.B = b;
        this.M = vj.prototype.M;
        this.map = vj.prototype.map;
        this.da = vj.prototype.da;
        this.clock = a
    };
    zj.prototype.X = function(a) {
        return a.active
    };
    zj.prototype.ka = function() {
        return this.B
    };
    p.Object.defineProperties(zj.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !1
            }
        }
    });

    function Aj(a) {
        return K(P(function(b) {
            var c;
            return null != (c = null == b ? void 0 : Bj(b, a)) ? c : !1
        }), P(function(b) {
            return b ? !0 : null
        }))
    };

    function Cj() {
        var a = Dj;
        return K(P(function(b) {
            var c;
            return null != (c = null == b ? void 0 : Bj(b, a)) ? c : !1
        }), P(function(b) {
            return "number" === typeof b ? b : null
        }))
    };

    function Ej(a) {
        var b = Math.pow(10, 2);
        return Math.round(a * b) / b
    };

    function Fj(a, b, c, d) {
        var e = Object.keys(c).map(function(h) {
                return h
            }),
            f = e.filter(function(h) {
                var l = c[h];
                h = d[h];
                return l instanceof Z && h instanceof Z && l.value === h.value
            }),
            g = f.reduce(function(h, l) {
                var k = {};
                return Object.assign({}, h, (k[l] = c[l], k))
            }, {});
        return e.reduce(function(h, l) {
            if (0 <= f.indexOf(l)) return h;
            var k = {};
            return Object.assign({}, h, (k[l] = b.g(X(function(n) {
                return (n = n ? c[l] : d[l]) && (n instanceof L || "function" === typeof n.cb && "function" === typeof n.subscribe) ? n : n.ba(a)
            })), k))
        }, g)
    };

    function Gj(a) {
        return K(P(function() {
            return !0
        }), V(!1), Y(a, 1))
    };

    function Hj(a) {
        return 0 >= a.length ? Qb : S(a.map(function(b) {
            var c = 0;
            return b.g(P(function(d) {
                return {
                    index: c++,
                    value: d
                }
            }))
        })).g(T(function(b) {
            return b.every(function(c) {
                return c.index === b[0].index
            })
        }), P(function(b) {
            return b.map(function(c) {
                return c.value
            })
        }))
    };

    function Ij(a, b) {
        a.va && (a.Sa = a.va);
        a.va = b;
        a.Sa && a.Sa.value ? (b = Math.max(0, Ed(b.timestamp, a.Sa.timestamp)), a.totalTime += b, a.ca += b) : a.ca = 0;
        return a
    }

    function Jj() {
        return K(re(Ij, {
            totalTime: 0,
            ca: 0
        }), P(function(a) {
            return a.totalTime
        }))
    }

    function Kj() {
        return K(re(Ij, {
            totalTime: 0,
            ca: 0
        }), P(function(a) {
            return a.ca
        }))
    };

    function Lj(a, b) {
        return K(Ki("data-google-av-metadata"), P(function(c) {
            if (null === c) return b(void 0);
            c = c.split("&").map(function(d) {
                return d.split("=")
            }).filter(function(d) {
                return d[0] === a
            });
            if (0 === c.length) return b(void 0);
            c = c[0].slice(1).join("=");
            return b(c)
        }))
    };
    var Mj = {
        Dg: "asmreq",
        Eg: "asmres"
    };
    var Nj = function(a) {
        Ng.call(this, a)
    };
    w(Nj, Ng);
    Nj.prototype.ye = function(a) {
        rg(this, 1, a)
    };
    var Oj = function(a) {
        Ng.call(this, a)
    };
    w(Oj, Ng);
    Oj.prototype.ye = function(a) {
        rg(this, 1, a)
    };
    var wg = function(a) {
        Ng.call(this, a)
    };
    w(wg, Ng);

    function Pj(a, b) {
        var c = void 0 === c ? Ai(a) : c;
        var d = new MessageChannel;
        b = b.g(P(function(f) {
            return Number(f)
        }), T(function(f) {
            return !isNaN(f) && 0 !== f
        }), Le(function(f) {
            var g = new Nj;
            g.ye(f);
            f = {
                type: "asmreq",
                payload: g.jb()
            };
            c.postMessage(f, "*", [d.port2])
        }), Xd(1));
        var e = Bi(a, d.port1).g(T(function(f) {
            return "object" === typeof f.data
        }), P(function(f) {
            var g = f.data,
                h = Object.values(Mj).includes(g.type);
            g = "string" === typeof g.payload;
            if (!h || !g || "asmres" !== f.data.type) return null;
            try {
                var l = f.data.payload;
                Va(Oj);
                if (null ==
                    l || "" == l) var k = Za(new Oj, Fg);
                else {
                    Ua(l);
                    var n = JSON.parse(l);
                    if (!Array.isArray(n)) throw Error("R`" + Da(n) + "`" + n);
                    var r = Vf(n);
                    C(!!(Qf(r) & 16));
                    Gg = r;
                    var q = new Oj(r);
                    Gg = null;
                    Za(q, Fg);
                    k = q
                }
                return k
            } catch (A) {
                return null
            }
        }), T(function(f) {
            return null !== f
        }), P(function(f) {
            return f
        }));
        return b.g(X(function(f) {
            return N(f).g(Jd(e))
        }), T(function(f) {
            var g = u(f);
            f = g.next().value;
            g = g.next().value;
            return null != qg(g, 1, !1) ? Ag(qg(g, 1), 0) === f : !1
        }), P(function(f) {
            f = u(f);
            f.next();
            return f.next().value
        }), Hh(a.h))
    };

    function Qj(a, b, c) {
        var d = b.zb.g(Xd(1), X(function() {
            return Pj(a, c)
        }), T(function(f) {
            var g = qg(f, 2);
            return Ag(null == g ? g : !!g, !1) && void 0 !== vg(f, wg, !1) && null != qg(f, 4, !1) && null != qg(f, 5, !1)
        }), Xd(1), Hh(a.h));
        b = d.g(P(function(f) {
            return {
                x: Bg(yg(f), 2),
                y: Bg(yg(f), 1)
            }
        }), U(function(f, g) {
            return f.x === g.x && f.y === g.y
        }), Y(a.h, 1));
        var e = d.g(P(function(f) {
            return Bg(f, 4)
        }), Y(a.h, 1));
        d = d.g(P(function(f) {
            return Bg(f, 5)
        }), Y(a.h, 1));
        return {
            yf: e,
            Re: b,
            Kf: d
        }
    };

    function Rj(a, b) {
        return b.zb.g(Xd(1), P(function() {
            return a.i.now().round()
        }))
    };
    var Sj = P(function(a) {
        return [a.value.H.width, a.value.H.height]
    });

    function Tj(a, b) {
        return function(c) {
            return Hj(b.map(function(d) {
                return c.g(a(d))
            }))
        }
    };

    function Uj() {
        var a;
        return K(Le(function(b) {
            return void(a = b.timestamp)
        }), Kj(), P(function(b) {
            return {
                timestamp: a,
                value: Math.round(b)
            }
        }))
    };
    var Vj = {
        R: "ns",
        T: ci,
        H: ci,
        O: new M,
        I: "ns",
        C: ci,
        K: ci,
        U: {
            x: 0,
            y: 0
        }
    };

    function Wj(a, b) {
        return di(a.H, b.H) && di(a.C, b.C) && di(a.T, b.T) && di(a.K, b.K) && a.I === b.I && a.O === b.O && a.R === b.R && a.U.x === b.U.x && a.U.y === b.U.y
    };
    var Xj = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    };

    function Yj(a, b) {
        return function(c) {
            return function(d) {
                var e = d.g(ue(new M), ac());
                d = c.element.g(U());
                e = e.g(P(function(f) {
                    return f.value
                }));
                return S([d, e, b]).g(P(function(f) {
                    var g = u(f);
                    f = g.next().value;
                    var h = g.next().value;
                    g = g.next().value;
                    var l = f.getBoundingClientRect();
                    var k = a.global,
                        n = new dh(0, 0);
                    var r = (r = gh(f)) ? r.parentWindow || r.defaultView : window;
                    if (gf(r, "parent")) {
                        var q = f;
                        do {
                            if (r == k) {
                                var A = q,
                                    z = gh(A);
                                Wa(A, "Parameter is required");
                                var v = new dh(0, 0);
                                var H = z ? gh(z) : document;
                                H = !lf || 9 <= Number(Cf) || "CSS1Compat" ==
                                    hh(H).Za.compatMode ? H.documentElement : H.body;
                                A != H && (A = Xj(A), z = ih(hh(z).Za), v.x = A.left + z.x, v.y = A.top + z.y)
                            } else v = C(q), v = Xj(v), v = new dh(v.left, v.top);
                            n.x += v.x;
                            n.y += v.y
                        } while (r && r != k && r != r.parent && (q = r.frameElement) && (r = r.parent))
                    }
                    l = fi({
                        top: n.y,
                        left: n.x,
                        width: l.width,
                        height: l.height
                    }, h.U);
                    k = ei(l, h.T);
                    n = a.i.now();
                    r = Object;
                    q = r.assign;
                    if (2 !== g || a.ab || 0 >= k.width || 0 >= k.height) var I = !1;
                    else try {
                        var W = a.document.elementFromPoint(k.left + k.width / 2, k.top + k.height / 2);
                        I = W ? !Zj(W, f) : !1
                    } catch (fa) {
                        I = !1
                    }
                    return {
                        timestamp: n,
                        value: q.call(r, {}, h, {
                            I: "geo",
                            K: I ? Vj.K : k,
                            C: l
                        })
                    }
                }), Hh(a.h))
            }
        }
    }

    function Zj(a, b, c) {
        c = void 0 === c ? 0 : c;
        return a === b || kh(b, function(d) {
            return d === a
        }) ? !0 : b.ownerDocument && b.ownerDocument.defaultView && b.ownerDocument.defaultView === b.ownerDocument.defaultView.top ? !1 : 10 > c && b.ownerDocument && b.ownerDocument.defaultView && b.ownerDocument.defaultView.frameElement ? Zj(a, b.ownerDocument.defaultView.frameElement, c + 1) : !0
    };

    function ak(a) {
        return function(b) {
            return b.g(a.ResizeObserver ? bk(a) : ck(a), ze(1), ac())
        }
    }

    function bk(a) {
        return function(b) {
            return b.g(X(function(c) {
                var d = a.ResizeObserver;
                if (!d) return N(Vj.C);
                var e = (new L(function(f) {
                    var g = new d(function(h) {
                        h.forEach(function(l) {
                            f.next(l)
                        })
                    });
                    g.observe(c);
                    return function() {
                        g.disconnect()
                    }
                })).g(sh(a.o, 736), P(function(f) {
                    return f.contentRect
                }));
                return Uc(N(c.getBoundingClientRect()), e)
            }), U(di))
        }
    }

    function ck(a) {
        return function(b) {
            var c = b.g(jj(a, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })),
                d = a.bg;
            c = Uc(b.g(P(function() {
                return Mh("resize")
            })), c, d);
            return S(b, c).g(sh(a.o, 737), P(function(e) {
                return u(e).next().value.getBoundingClientRect()
            }), U(di))
        }
    };

    function dk(a, b) {
        var c = ek(a, b).g(ze(1), ac());
        return function(d) {
            d = d.g(X(function(e) {
                return e.element
            }), U());
            return S([c, d]).g(X(function(e) {
                var f = u(e);
                e = f.next().value;
                f = f.next().value;
                return fk(a, e.Bf, ak(a), e.Wf, e.pf, f)
            }), Hh(a.h))
        }
    }

    function gk(a, b) {
        var c = dk(a, b);
        return function(d) {
            var e = c(N(d));
            return function(f) {
                return S([f, e]).g(P(function(g) {
                    var h = u(g);
                    g = h.next().value;
                    h = h.next().value;
                    var l = fi(h.value.C, g.value.U),
                        k = ei(fi(h.value.K, g.value.U), g.value.T);
                    return {
                        timestamp: g.timestamp.maximum(h.timestamp),
                        value: Object.assign({}, g.value, {
                            I: "nio",
                            K: k,
                            C: l
                        })
                    }
                }))
            }
        }
    }

    function hk(a) {
        return P(function(b) {
            return "nio" !== b.value.R ? b : Object.assign({}, b, {
                value: Object.assign({}, b.value, {
                    T: Ci(a, !0),
                    H: Ci(a, !0)
                })
            })
        })
    }

    function ik(a, b) {
        return N(b).g(a, P(function() {
            return b
        }))
    }

    function ek(a, b) {
        return a.i.timeline !== Bd ? Vb(new rd(2)) : a.MutationObserver ? "undefined" === typeof IntersectionObserver ? Vb(new rd(0)) : (new L(function(c) {
            var d = new M,
                e = new IntersectionObserver(d.next.bind(d), {
                    threshold: [].concat(ea(b))
                });
            c.next({
                Wf: d.g(sh(a.o, 735)),
                Bf: e,
                pf: function() {
                    var f = e.takeRecords();
                    0 < f.length && d.next(f)
                }
            })
        })).g(Xd(1), ze(1), ac()) : Vb(new rd(1))
    }

    function jk(a) {
        return Cc(a.sort(function(b, c) {
            return b.time - c.time
        }))
    }

    function fk(a, b, c, d, e, f) {
        return new L(function(g) {
            b.observe(f);
            var h = new Pb({
                    timestamp: a.i.now(),
                    value: Object.assign({}, Vj, {
                        R: "nio",
                        I: "nio"
                    })
                }),
                l = d.g(Fc(function(q) {
                    return jk(q)
                }), T(function(q) {
                    return q.target === f
                }), P(function(q) {
                    return {
                        timestamp: new Dd(q.time, Bd),
                        value: {
                            R: "nio",
                            T: q.rootBounds || ci,
                            H: q.rootBounds || Ci(a, !0),
                            O: k,
                            I: "nio",
                            K: q.intersectionRect,
                            C: q.boundingClientRect,
                            U: {
                                x: 0,
                                y: 0
                            }
                        }
                    }
                }), ue(h), ac()).subscribe(g),
                k = new M,
                n = k.subscribe(function() {
                    e();
                    g.next({
                        timestamp: a.i.now(),
                        value: h.value.value
                    });
                    b.unobserve(f);
                    b.observe(f)
                }),
                r = ik(c, f).subscribe(function() {
                    k.next()
                });
            return function() {
                b.unobserve(f);
                l.unsubscribe();
                r.unsubscribe();
                n.unsubscribe()
            }
        })
    };

    function kk(a, b) {
        var c = a.Xc().g(P(function() {
            return "b"
        }));
        return Zc(b, c).g(Xd(1), Y(a.h, 1))
    };

    function lk(a) {
        return function(b) {
            var c;
            return b.g(Le(function(d) {
                return void(c = d.timestamp)
            }), P(function(d) {
                return d.value
            }), a, P(function(d) {
                return {
                    timestamp: c,
                    value: d
                }
            }))
        }
    };
    var mk = function(a) {
            return a.K.width * a.K.height / (a.C.width * a.C.height)
        },
        nk = lk(K(P(function(a) {
            var b;
            return null != (b = a.Yb) ? b : mk(a)
        }), P(function(a) {
            return isFinite(a) ? a : 0
        }))),
        ok = lk(K(P(function(a) {
            var b;
            return null != (b = a.Yb) ? b : mk(a)
        }), P(function(a) {
            return isFinite(a) ? a : -1
        })));

    function pk(a, b) {
        a.va && (a.Sa = a.va);
        a.va = b;
        a.Sa && a.Sa.value ? (b = Math.max(0, Ed(b.timestamp, a.Sa.timestamp)), a.totalTime += b, a.ca += b) : a.ca = 0;
        return a
    }

    function qk(a) {
        return K(re(pk, {
            totalTime: 0,
            ca: 0
        }), P(function(b) {
            return new yj(a, {
                timestamp: b.va.timestamp,
                value: b.totalTime
            }, b.va.value)
        }))
    }

    function rk(a) {
        return K(re(pk, {
            totalTime: 0,
            ca: 0
        }), P(function(b) {
            return new yj(a, {
                timestamp: b.va.timestamp,
                value: b.ca
            }, b.va.value)
        }))
    };

    function sk(a) {
        return K(rk(a), P(function(b) {
            return b.map(function(c) {
                return Math.round(c)
            })
        }))
    };

    function tk(a, b) {
        return b.g(P(function(c) {
            return new zj(a.i, {
                timestamp: a.i.now(),
                value: c
            })
        }))
    };

    function uk(a, b) {
        return 1 <= a ? !0 : 0 >= a ? !1 : a >= b
    };

    function vk(a) {
        return function(b) {
            return b.g(Oe(a), P(function(c) {
                var d = u(c);
                c = d.next().value;
                d = d.next().value;
                return {
                    timestamp: c.timestamp,
                    value: uk(c.value, d)
                }
            }))
        }
    };
    var wk = P(function(a) {
        if ("omid" === a.value.R) {
            if ("nio" === a.value.I) return "omio";
            if ("geo" === a.value.I) return "omgeo"
        }
        return "geo" === a.value.I || "nio" === a.value.I ? a.value.R : a.value.I
    });

    function xk() {
        return K(T(function(a, b) {
            return 0 < b
        }), yk, V(-1), U())
    }
    var yk = K(T(function(a) {
        return !isNaN(a)
    }), re(function(a, b) {
        return isNaN(a) ? b : Math.min(a, b)
    }, NaN), U());
    var zk = lk(K(P(function(a) {
        return a.K.width * a.K.height / (a.T.width * a.T.height)
    }), P(function(a) {
        return isFinite(a) ? Math.min(1, a) : 0
    })));

    function Ak(a, b, c) {
        return a ? S([b, c]).g(T(function(d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.timestamp.equals(e.timestamp)
        }), P(function(d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.value > e.value ? d : e
        })) : b
    }

    function Bk(a) {
        return function(b) {
            var c = b.g(nk),
                d = b.g(zk);
            return a instanceof L ? a.g(X(function(e) {
                return Ak(e, c, d)
            })) : Ak(a.value, c, d)
        }
    };
    var Ck = K(lk(P(function(a) {
        a = a.Yb ? a.Yb * a.C.width * a.C.height / (a.H.width * a.H.height) : a.K.width * a.K.height / (a.H.width * a.H.height);
        return isFinite(a) ? a : 0
    })));

    function Dk(a, b, c, d) {
        var e = d.ac,
            f = d.Tc,
            g = d.Fe,
            h = d.Md,
            l = d.fd,
            k = d.ne;
        d = d.cc;
        b = Ek(a, c, b);
        c = Fk(a, c);
        var n = Gk(a, e, k, b),
            r = n.g(P(function(x) {
                return x.value
            }), U(), Y(a, 1), re(function(x, F) {
                return Math.max(x, F)
            }, 0)),
            q = n.g(P(function(x) {
                return x.value
            }), xk(), Y(a, 1)),
            A = b.g(ok, P(function(x) {
                return x.value
            }), Xd(2), U(), Y(a, 1));
        g = Hk(a, b, g, h);
        var z = g.g(V(!1), U(), P(function(x) {
            return x ? l : f
        }));
        h = n.g(vk(z), U(), Y(a, 1));
        var v = S([h, b]).g(T(function(x) {
                var F = u(x);
                x = F.next().value;
                F = F.next().value;
                return x.timestamp.equals(F.timestamp)
            }),
            P(function(x) {
                var F = u(x);
                x = F.next().value;
                F = F.next().value;
                return {
                    visible: x.value,
                    geometry: F.value.C
                }
            }), re(function(x, F) {
                return !F.visible && x.visible ? x : F
            }, {
                visible: !1,
                geometry: ci
            }), P(function(x) {
                return x.geometry
            }), V(ci), Y(a, 1), U(di));
        k = k instanceof L ? k.g(U(), oe()) : Wc;
        z = S([k, z]).g(oe());
        var H = b.g(T(function(x) {
                return "ns" !== x.value.R && "ns" !== x.value.I
            }), re(function(x) {
                return x + 1
            }, 0), V(0), Y(a, 1)),
            I = c.g(oe(!0), V(!1), Y(a, 1));
        I = S([d, I]).g(P(function(x) {
            var F = u(x);
            x = F.next().value;
            F = F.next().value;
            return x &&
                !F
        }), Y(a, 1));
        var W = b.g(Ck, U()),
            fa = W.g(P(function(x) {
                return x.value
            }), re(function(x, F) {
                return Math.max(x, F)
            }, 0), U(), Y(a, 1)),
            B = W.g(P(function(x) {
                return x.value
            }), xk(), Y(a, 1));
        return {
            sd: k,
            Hb: z,
            ma: {
                fg: b,
                oe: b.g(wk),
                Wb: v.g(U(di)),
                visible: h.g(U(rj)),
                vd: n.g(U(rj)),
                me: r,
                Qf: q,
                Pd: b.g(Sj, U(gb)),
                xg: W,
                Mf: fa,
                Pf: B,
                Zb: c,
                O: (new Z(new M)).ba(a),
                ke: g,
                ac: e,
                cc: d,
                Uc: I,
                yg: H,
                Jf: A
            }
        }
    }

    function Fk(a, b) {
        return b.g(T(function() {
            return !1
        }), P(function(c) {
            return c
        }), Hd(function(c) {
            return (new Z(c)).ba(a)
        }))
    }

    function Ek(a, b, c) {
        return b.g(ve(Wc), Y(a, 1)).g(U(function(d, e) {
            return rj(d, e, Wj)
        }), V({
            timestamp: c.now(),
            value: Vj
        }), Y(a, 1))
    }

    function Gk(a, b, c, d) {
        c = d.g(Bk(c), lk(P(function(e) {
            return Ej(e)
        })), Y(a, 1));
        return b instanceof Z ? c : S([c, b]).g(P(function(e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), U(rj), Y(a, 1))
    }

    function Hk(a, b, c, d) {
        b = [b.g(P(function(e) {
            return 242500 <= e.value.C.width * e.value.C.height
        }))];
        c instanceof L && b.push(c.g(P(function(e) {
            return !!e
        })));
        c = S(b);
        return d ? c.g(P(function(e) {
            return e.some(function(f) {
                return f
            })
        }), V(!1), U(), Y(a, 1)) : (new Z(!1)).ba(a)
    };
    var Ik = function(a) {
            this.i = a;
            this.vc = null;
            this.timeout = new M
        },
        Kk = function(a, b) {
            Jk(a);
            a.vc = a.i.setTimeout(function() {
                return void a.timeout.next()
            }, b)
        },
        Jk = function(a) {
            null !== a.vc && (a.i.clearTimeout(a.vc), a.vc = null)
        };

    function Lk(a, b, c, d) {
        var e = Mk.De,
            f = new Ik(b);
        c = c.g(V(void 0), X(function() {
            Jk(f);
            return d.g(sk(b))
        })).g(P(function(g) {
            var h = g.active;
            return g.map(function(l) {
                Jk(f);
                l = l >= e;
                if (!l && h) {
                    var k = g.B,
                        n = Math.max(0, Ed(b.now(), k.timestamp));
                    Kk(f, Math.max(0, e - k.value - n))
                }
                return l
            })
        }));
        return S([c, Uc(f.timeout, N(void 0))]).g(P(function(g) {
            return u(g).next().value
        }), Ie(function(g) {
            return !g.M().value
        }, !0), Y(a, 1))
    };

    function Nk(a) {
        var b = new yj(a, {
            timestamp: a.now(),
            value: 0
        }, !1);
        return K(rk(a), re(function(c, d) {
            return c.B.value > d.B.value ? new yj(a, c.B, !1) : d
        }, b), P(function(c) {
            return c.map(function(d) {
                return Math.round(d)
            })
        }))
    };

    function Ok(a) {
        return function(b) {
            return K(vk(N(b)), Nk(a))
        }
    };

    function Pk(a) {
        return function(b) {
            return K(lk(P(function(c) {
                return uk(c, b)
            })), qk(a), P(function(c) {
                return c.map(function(d) {
                    return Math.round(d)
                })
            }))
        }
    };

    function Qk(a) {
        return a.map(function(b) {
            return b.map(function(c) {
                return [c]
            })
        }).reduce(function(b, c) {
            return b.da(c).map(function(d) {
                return d.flat()
            })
        })
    }

    function Rk(a, b) {
        return a.da(b).map(function(c) {
            var d = u(c);
            c = d.next().value;
            d = d.next().value;
            return c - d
        })
    }

    function Sk(a, b, c, d, e, f) {
        var g = Tk;
        if (1 < g.length)
            for (var h = 0; h < g.length - 1; h++)
                if (g[h] < g[h + 1]) throw Error();
        h = f.g(V(void 0), X(function() {
            return d.g(sk(a))
        }), U(function(l, k) {
            return l.X(k)
        }), Y(b, 1));
        f = f.g(V(void 0), X(function() {
            return d.g(Nk(a))
        }), U(function(l, k) {
            return l.X(k)
        }), Y(b, 1));
        return {
            Ab: e.g(V(void 0), X(function() {
                return c.g(Tj(Ok(a), g))
            }), P(Qk), U(function(l, k) {
                return l.X(k)
            }), Y(b, 1)),
            Kb: e.g(V(void 0), X(function() {
                return c.g(Tj(Pk(a), g), P(function(l) {
                    return l.map(function(k, n) {
                        return 0 < n ? Rk(k,
                            l[n - 1]) : k
                    })
                }))
            }), P(Qk), U(function(l, k) {
                return l.X(k)
            }), Y(b, 1)),
            nc: f,
            Pa: h.g(U(function(l, k) {
                return l.X(k)
            }), Y(b, 1))
        }
    };

    function Uk(a) {
        var b;
        if (b = Vk(a)) b = !Wk(a, "abgcp") && !Wk(a, "abgc") && !("string" === typeof a.id && "abgb" === a.id) && !("string" === typeof a.id && "mys-abgc" === a.id) && !Wk(a, "cbb");
        return b
    }

    function Wk(a, b) {
        return a.classList ? a.classList.contains(b) : -1 < (" " + a.className + " ").indexOf(" " + b + " ")
    }

    function Vk(a) {
        try {
            var b = a.getBoundingClientRect();
            return b && 30 <= b.height && 30 <= b.width
        } catch (c) {
            return !1
        }
    }

    function Xk(a, b) {
        if (!a.children) return a;
        for (var c = fb(a.children); c.length;) {
            var d = b ? c.filter(Uk) : c.filter(Vk);
            if (1 === d.length) return d[0];
            if (1 < d.length) break;
            c = ib(c, function(e) {
                return fb(e.children)
            })
        }
        return a
    }

    function Yk(a, b, c, d, e) {
        if (c) return {
            Vb: b,
            Ta: N(null)
        };
        c = b.element.g(P(function(f) {
            a: if (Vk(f)) f = {
                    oc: f,
                    Ta: "mue"
                };
                else {
                    var g = Xk(f, e);
                    if (Vk(g)) f = {
                        oc: g,
                        Ta: "ie"
                    };
                    else {
                        if (d || a.ad)
                            if (g = a.document.querySelector(".GoogleActiveViewInnerContainer")) {
                                f = {
                                    oc: g,
                                    Ta: "ce"
                                };
                                break a
                            }
                        f = {
                            oc: f,
                            Ta: "mue"
                        }
                    }
                }return f
        }), Ce());
        return {
            Vb: {
                tb: b.tb,
                element: c.g(P(function(f) {
                    return f.oc
                }))
            },
            Ta: c.g(P(function(f) {
                return f.Ta
            }))
        }
    };

    function Zk(a, b, c, d) {
        var e = d.ac,
            f = d.Tc,
            g = d.Fe,
            h = d.Md,
            l = d.fd,
            k = d.ne;
        d = d.cc;
        b = $k(a, c, b);
        c = al(a, c);
        var n = bl(a, e, k, b),
            r = n.g(P(function(B) {
                return B.value
            }), U(), Y(a, 1), re(function(B, x) {
                return Math.max(B, x)
            }, 0)),
            q = n.g(P(function(B) {
                return B.value
            }), xk(), Y(a, 1)),
            A = b.g(ok, P(function(B) {
                return B.value
            }), Xd(2), U(), Y(a, 1));
        g = cl(a, b, g, h);
        var z = g.g(V(!1), U(), P(function(B) {
            return B ? l : f
        }));
        h = n.g(vk(z), U(), Y(a, 1));
        var v = S([h, b]).g(T(function(B) {
                var x = u(B);
                B = x.next().value;
                x = x.next().value;
                return B.timestamp.equals(x.timestamp)
            }),
            P(function(B) {
                var x = u(B);
                B = x.next().value;
                x = x.next().value;
                return {
                    visible: B.value,
                    geometry: x.value.C
                }
            }), re(function(B, x) {
                return !x.visible && B.visible ? B : x
            }, {
                visible: !1,
                geometry: ci
            }), P(function(B) {
                return B.geometry
            }), V(ci), Y(a, 1), U(di));
        k = k instanceof L ? k.g(U(), oe()) : Wc;
        z = S([k, z]).g(oe());
        var H = b.g(T(function(B) {
                return "ns" !== B.value.R && "ns" !== B.value.I
            }), re(function(B) {
                return B + 1
            }, 0), V(0), Y(a, 1)),
            I = c.g(oe(!0), V(!1), Y(a, 1));
        I = S([d, I]).g(P(function(B) {
            var x = u(B);
            B = x.next().value;
            x = x.next().value;
            return B &&
                !x
        }), Y(a, 1));
        var W = b.g(Ck, U()),
            fa = W.g(P(function(B) {
                return B.value
            }), re(function(B, x) {
                return Math.max(B, x)
            }, 0), U(), Y(a, 1));
        a = W.g(P(function(B) {
            return B.value
        }), xk(), Y(a, 1));
        return {
            sd: k,
            Hb: z,
            ma: {
                fg: b,
                oe: b.g(wk),
                Wb: v.g(U(di)),
                visible: h.g(U(rj)),
                vd: n.g(U(rj)),
                me: r,
                Qf: q,
                Pd: b.g(Sj, U(gb)),
                xg: W,
                Mf: fa,
                Pf: a,
                Zb: c,
                O: b.g(P(function(B) {
                    return B.value.O
                })),
                ke: g,
                ac: e,
                cc: d,
                Uc: I,
                yg: H,
                Jf: A
            }
        }
    }

    function al(a, b) {
        return b.g(T(function() {
            return !1
        }), P(function(c) {
            return c
        }), Hd(function(c) {
            return (new Z(c)).ba(a)
        }))
    }

    function $k(a, b, c) {
        return b.g(ve(Wc), Y(a, 1)).g(U(function(d, e) {
            return rj(d, e, Wj)
        }), V({
            timestamp: c.now(),
            value: Vj
        }), Y(a, 1))
    }

    function bl(a, b, c, d) {
        c = d.g(Bk(c), lk(P(function(e) {
            return Ej(e)
        })), Y(a, 1));
        return b instanceof Z ? c : S([c, b]).g(P(function(e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), U(rj), Y(a, 1))
    }

    function cl(a, b, c, d) {
        b = [b.g(P(function(e) {
            return 242500 <= e.value.C.width * e.value.C.height
        }))];
        c instanceof L && b.push(c.g(P(function(e) {
            return !!e
        })));
        c = S(b);
        return d ? c.g(P(function(e) {
            return e.some(function(f) {
                return f
            })
        }), V(!1), U(), Y(a, 1)) : (new Z(!1)).ba(a)
    };
    var dl = K(Ki("data-google-av-itpl"), P(function(a) {
        return Number(a)
    }), P(function(a) {
        return isNaN(a) ? 1 : a
    }));
    var el = {
            Cg: "addEventListener",
            Ig: "getMaxSize",
            Jg: "getScreenSize",
            Kg: "getState",
            Lg: "getVersion",
            Ng: "removeEventListener",
            Mg: "isViewable"
        },
        gl = function(a, b) {
            b = void 0 === b ? function(f) {
                return fl(f)
            } : b;
            this.ha = null;
            this.Af = new M;
            var c = a.ad,
                d = !a.ab;
            if (c && d) {
                var e = a.global.top.mraid;
                if (e) {
                    this.Ub = b(e);
                    this.ha = e;
                    this.Ua = 3;
                    return
                }
            }(a = a.global.mraid) ? (this.Ub = b(a), this.ha = a, this.Ua = c ? d ? 2 : 1 : 0) : (this.Ua = -1, this.Ub = 2)
        };
    gl.prototype.addEventListener = function(a, b) {
        return this.hb("addEventListener", a, b)
    };
    gl.prototype.removeEventListener = function(a, b) {
        return this.hb("removeEventListener", a, b)
    };
    gl.prototype.Zd = function() {
        var a = this.hb("getVersion");
        return "string" === typeof a ? a : ""
    };
    gl.prototype.getState = function() {
        var a = this.hb("getState");
        return "string" === typeof a ? a : ""
    };
    var hl = function(a) {
            a = a.hb("isViewable");
            return "boolean" === typeof a ? a : !1
        },
        il = function(a) {
            if (a.ha) return a = a.ha.AFMA_LIDAR, "string" === typeof a ? a : void 0
        },
        fl = function(a) {
            return a ? a.IS_GMA_SDK ? Object.values(el).every(function(b) {
                return "function" === typeof a[b]
            }) ? 0 : 1 : 2 : 1
        };
    gl.prototype.hb = function(a) {
        var b = y.apply(1, arguments);
        if (this.ha) try {
            return this.ha[a].apply(this.ha, ea(b))
        } catch (c) {
            this.Af.next(a)
        }
    };
    p.Object.defineProperties(gl.prototype, {
        Td: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.ha) {
                    var a = this.ha.AFMA_LIDAR_EXP_1;
                    return void 0 === a ? void 0 : !!a
                }
            },
            set: function(a) {
                this.ha && (this.ha.AFMA_LIDAR_EXP_1 = a)
            }
        }
    });

    function jl(a, b) {
        return -1 !== (new gl(a)).Ua ? (new Z(!0)).ba(a.h) : b.g(Ki("data-google-av-inapp"), P(function(c) {
            return null !== c
        }), Y(a.h, 1))
    };
    var ll = function(a, b) {
            var c = this;
            this.i = a;
            this.gd = this.kc = null;
            this.ig = b.g(U()).subscribe(function(d) {
                kl(c);
                c.gd = d
            })
        },
        ml = function(a, b) {
            kl(a);
            a.kc = a.i.setTimeout(function() {
                var c;
                return void(null == (c = a.gd) ? void 0 : c.next())
            }, b)
        },
        kl = function(a) {
            null !== a.kc && a.i.clearTimeout(a.kc);
            a.kc = null
        };

    function nl(a, b, c, d, e) {
        var f = Mk.De;
        var g = void 0 === g ? new ll(b, d) : g;
        return (new L(function(h) {
            var l = c.g(V(void 0), X(function() {
                return ol(e)
            })).g(P(function(k) {
                var n = k.value;
                k = k.timestamp;
                var r = n.visible;
                n = n.Pa;
                var q = n >= f;
                q || !r ? kl(g) : (k = Math.max(0, Ed(b.now(), k)), ml(g, Math.max(0, f - n - k)));
                return q
            }), re(function(k, n) {
                return n || k
            }, !1), U()).subscribe(h);
            return function() {
                kl(g);
                g.ig.unsubscribe();
                g.gd = null;
                l.unsubscribe()
            }
        })).g(Ie(function(h) {
            return !h
        }, !0), Y(a, 1))
    }

    function ol(a) {
        return Hj([a, a.g(Uj())]).g(P(function(b) {
            var c = u(b);
            b = c.next().value;
            c = c.next().value;
            return {
                timestamp: b.timestamp,
                value: {
                    visible: b.value,
                    Pa: c.value
                }
            }
        }), U(function(b, c) {
            return rj(b, c, function(d, e) {
                return d.Pa === e.Pa && d.visible === e.visible
            })
        }))
    };

    function pl(a, b) {
        return {
            Hc: b.g(Ki("data-google-av-adk")),
            Ic: b.g(Ki("data-google-av-btr"), U(), P(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            Oc: b.g(Ki("data-google-av-cpmav"), U(), P(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            bf: lj(a, b),
            flags: b.g(Ki("data-google-av-flags"), U()),
            Ia: jl(a, b),
            dd: b.g(Lj("cr", function(c) {
                return "1" === c
            }), U()),
            Gf: b.g(Lj("omid", function(c) {
                return "1" === c
            }), U()),
            cd: b.g(dl),
            metadata: b.g(Ki("data-google-av-metadata")),
            Aa: b.g(Ri),
            Ca: b.g(Li),
            Bg: b.g(Lj("la", function(c) {
                return "1" === c
            }), U()),
            bb: b.g(Ki("data-google-av-turtlex"), P(function(c) {
                return null !== c
            }), U())
        }
    };

    function ql() {
        return K(Kj(), re(function(a, b) {
            return Math.max(a, b)
        }, 0), P(function(a) {
            return Math.round(a)
        }))
    };

    function rl(a) {
        return K(vk(N(a)), ql())
    };

    function sl(a, b, c, d, e) {
        c = c.g(P(function() {
            return !1
        }));
        d = S([e, d]).g(X(function(f) {
            f = u(f).next().value;
            return tl(b, f)
        }));
        return Uc(N(!1), c, d).g(U(), Y(a.h, 1))
    }

    function tl(a, b) {
        return a.g(P(function(c) {
            return b || 0 === c || 2 === c
        }))
    };
    var ul = [33, 32],
        vl = K(dl, P(function(a) {
            return 0 <= ul.indexOf(a)
        }), U());

    function wl(a, b, c, d, e, f) {
        var g = c.g(P(function(l) {
                return 9 === l
            })),
            h = b.element.g(vl);
        c = e.g(T(function(l) {
            return l
        }), X(function() {
            return S([g, h])
        }), P(function(l) {
            l = u(l);
            var k = l.next().value;
            return !l.next().value || k
        }), U());
        f = S([c, d.g(U()), f]).g(P(function(l) {
            var k = u(l);
            l = k.next().value;
            var n = k.next().value;
            k = k.next().value;
            return Yk(a, b, !l, n, k)
        }), ze(1), ac());
        d = f.g(P(function(l) {
            return l.Vb
        }));
        f = f.g(X(function(l) {
            return l.Ta
        }), V(null), U(), Y(a.h, 1));
        return {
            xa: d,
            rb: f
        }
    };

    function xl(a) {
        var b = void 0 === b ? !1 : b;
        return K(X(function(c) {
            return bi(a.document, c, b)
        }), Y(a.h, 1))
    };
    var yl = function(a, b, c, d, e, f) {
        this.zb = b.element.g(xl(a), Y(a.h, 1));
        this.Ae = sl(a, c, b.element, this.zb, d);
        c = wl(a, b, e, d, this.Ae, f);
        d = c.rb;
        this.xa = c.xa;
        this.rb = d;
        this.Cd = Uc((new Z(1)).ba(a.h), b.element.g(Xd(1), P(function() {
            return 2
        }), Y(a.h, 1)), this.zb.g(Xd(1), P(function() {
            return 3
        }), Y(a.h, 1)), this.Ae.g(T(Boolean), Xd(1), P(function() {
            return 0
        }), Y(a.h, 1))).g(Ie(function(g) {
            return 0 !== g
        }, !0), Y(a.h, 0))
    };

    function zl(a, b) {
        return a && 0 === b ? 15 : a || 1 !== b ? null : 14
    }

    function Al(a, b, c) {
        return b instanceof L ? b.g(X(function(d) {
            return (d = zl(d, c)) ? Vb(new rd(d)) : a
        })) : (b = zl(b.value, c)) ? Vb(new rd(b)) : a
    };

    function Bl(a) {
        var b = new rd(13);
        if (1 > a.length) return {
            chain: Qb,
            Kc: Qb
        };
        var c = new M,
            d = a[0];
        return {
            chain: a.slice(1).reduce(function(e, f) {
                return e.g(Hd(function(g) {
                    c.next(g);
                    return f
                }))
            }, d).g(Hd(function(e) {
                c.next(e);
                return Vb(b)
            }), ue(new M), ac()),
            Kc: c
        }
    };
    var Cl = function() {};
    var Dl = function(a, b) {
        this.context = a;
        this.sg = b
    };
    w(Dl, Cl);
    Dl.prototype.Ga = function(a, b) {
        var c = this.sg.map(function(f) {
                return f.Ga(a, b)
            }),
            d = Bl(c.map(function(f) {
                return f.Ha
            })),
            e = d.Kc.g(El());
        return {
            Ha: d.chain.g(Y(this.context.h, 1)),
            Da: Object.assign.apply(Object, [{
                td: e,
                nh: d.Kc
            }].concat(ea(c.map(function(f) {
                return f.Da
            }))))
        }
    };
    var El = function() {
        return re(function(a, b) {
            b instanceof rd ? a.push(b.Of) : a.push(-1);
            return a
        }, [])
    };

    function Fl(a, b) {
        var c = a.g(ue(new M), ac());
        return X(function(d) {
            return c.g(b(d))
        })
    };

    function Gl(a, b) {
        var c = void 0 === c ? function() {
            var f = (nh(a.global) ? a.global.innerWidth : 0) || a.Yc() || 0,
                g = (nh(a.global) ? a.global.innerHeight : 0) || a.Vc() || 0;
            return {
                left: 0,
                top: 0,
                width: f,
                height: g
            }
        } : c;
        var d = a.ab ? ai(a.document) ? a.Ff ? null : Vb(new rd(5)) : Vb(new rd(4)) : Vb(new rd(3));
        if (d) return d;
        var e = new M;
        return Uc(N({}), b, e).g(P(function() {
            var f = Hl(a, c);
            return {
                timestamp: a.i.now(),
                value: {
                    R: "iem",
                    T: f,
                    H: f,
                    O: e,
                    U: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), Y(a.h, 1))
    }

    function Hl(a, b) {
        b = b();
        var c = ih(document),
            d = function(q, A) {
                return !!a.document.elementFromPoint(q, A)
            },
            e = Math.floor(b.left - c.x),
            f = Math.floor(b.top - c.y),
            g = Math.floor(b.left + b.width - c.x),
            h = Math.floor(b.top + b.height - c.y);
        b = d(e, f);
        c = d(g, h);
        if (b && c) return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        };
        var l = d(g, f),
            k = d(e, h);
        if (b) h = Il(f, h, function(q) {
            return d(e, q)
        }), g = Il(e, g, function(q) {
            return d(q, f)
        });
        else if (l) h = Il(f, h, function(q) {
            return d(g, q)
        }), e = Il(g, e, function(q) {
            return d(q, f)
        });
        else if (k) f = Il(h, f, function(q) {
            return d(e,
                q)
        }), g = Il(e, g, function(q) {
            return d(q, h)
        });
        else if (c) f = Il(h, f, function(q) {
            return d(g, q)
        }), e = Il(g, e, function(q) {
            return d(q, h)
        });
        else {
            var n = Math.floor((e + g) / 2),
                r = Math.floor((f + h) / 2);
            if (!d(n, r)) return {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            f = Il(r, f, function(q) {
                return d(n, q)
            });
            h = Il(r, h, function(q) {
                return d(n, q)
            });
            e = Il(n, e, function(q) {
                return d(q, r)
            });
            g = Il(n, g, function(q) {
                return d(q, r)
            })
        }
        return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        }
    }

    function Il(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e === a || e === b) break;
            c(e) ? a = e : b = e
        }
        return a
    };
    var Jl = function(a, b) {
        this.context = a;
        this.Ra = b
    };
    w(Jl, Cl);
    Jl.prototype.Ga = function(a, b) {
        var c = Fl(Gl(this.context, this.Ra), Yj(this.context, b.Aa));
        return {
            Ha: Al(a.xa.g(c), b.Ia, 0),
            Da: {}
        }
    };

    function Kl(a, b) {
        if (a.ab) return Vb(new rd(6));
        var c = new M;
        return Uc(N({}), b, c).g(P(function() {
            return {
                timestamp: a.i.now(),
                value: {
                    R: "geo",
                    T: Ll(a),
                    H: Ci(a, !0),
                    O: c,
                    U: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), Hh(a.h))
    }

    function Ll(a) {
        var b = Ci(a, !1);
        if (!a.ad || !nh(a.global.parent) || a.global.parent === a.global) return b;
        var c = new zi(a.global.parent, a.Qa);
        c.L = a.L;
        c = Ll(c);
        a = a.global.frameElement.getBoundingClientRect();
        return ei(fi(ei(c, a), {
            x: b.left - a.left,
            y: b.top - a.top
        }), b)
    };
    var Ml = function(a, b) {
        this.context = a;
        this.Ra = b
    };
    w(Ml, Cl);
    Ml.prototype.Ga = function(a, b) {
        var c = Fl(Kl(this.context, this.Ra), Yj(this.context, b.Aa));
        return {
            Ha: Al(a.xa.g(c), b.Ia, 0),
            Da: {}
        }
    };
    var Nl = function(a, b, c) {
        c = void 0 === c ? dk(a, b) : c;
        this.context = a;
        this.Cf = c
    };
    w(Nl, Cl);
    Nl.prototype.Ga = function(a, b) {
        return {
            Ha: Al(a.xa.g(this.Cf, hk(this.context)), b.Ia, 0),
            Da: {}
        }
    };

    function Ol(a, b, c, d, e) {
        var f = void 0 === f ? new gl(a) : f;
        var g = void 0 === g ? Ue(a.i, 500) : g;
        var h = void 0 === h ? Ue(a.i, 100) : h;
        e = N(f).g(Pl(c), Le(function(l) {
            d.next(l.Ua)
        }), Ql(a, h), Rl(a), Sl(a, e), ze(1), ac());
        f = new M;
        b = Uc(N({}), b, f);
        return e.g(Tl(a, f, b, g, c), Y(a.h, 1))
    }

    function Sl(a, b) {
        return K(function(c) {
            return S([c, b])
        }, Nd(function(c) {
            c = u(c);
            var d = c.next().value;
            return 9 !== c.next().value || hl(d) ? N(!0) : Ul(a, d, "viewableChange").g(T(function(e) {
                return u(e).next().value
            }), Xd(1))
        }), P(function(c) {
            return u(c).next().value
        }))
    }

    function Pl(a) {
        return X(function(b) {
            if (-1 === b.Ua) return a.next("if"), Vb(new rd(7));
            if (0 !== b.Ub) switch (b.Ub) {
                case 1:
                    return a.next("mm"), Vb(new rd(18));
                case 2:
                    return a.next("ng"), Vb(new rd(17));
                default:
                    return a.next("i"), Vb(new rd(8))
            }
            return N(b)
        })
    }

    function Ql(a, b) {
        return Nd(function() {
            var c = a.re;
            return "complete" === Zh(a.document) ? N(!0) : c.g(Nd(function() {
                return b
            }))
        })
    }
    var Rl = function(a) {
        return X(function(b) {
            return "loading" !== b.getState() ? N(b) : Ul(a, b, "ready").g(P(function() {
                return b
            }))
        })
    };

    function Tl(a, b, c, d, e) {
        return X(function(f) {
            var g = il(f);
            if ("string" !== typeof g) return e.next("nc"), Vb(new rd(9));
            void 0 !== f.Td && (f.Td = !0);
            g = Ul(a, f, g, Vl);
            var h = {
                version: f.Zd(),
                Ua: f.Ua
            };
            g = g.g(P(function(k) {
                return Wl.apply(null, [a, b, f, h].concat(ea(k)))
            }));
            var l = d.g(Le(function() {
                e.next("mt")
            }), X(function() {
                return Vb(new rd(10))
            }));
            g = Zc(g, l);
            return S([g, c]).g(P(function(k) {
                k = u(k).next().value;
                return Object.assign({}, k, {
                    timestamp: a.i.now()
                })
            }))
        })
    }

    function Vl(a, b) {
        return (null === b || "number" === typeof b) && (null === a || !!a && "number" === typeof a.height && "number" === typeof a.width && "number" === typeof a.x && "number" === typeof a.y)
    }

    function Wl(a, b, c, d, e, f) {
        e = e ? {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
        } : ci;
        c = c.hb("getMaxSize");
        var g = null != c && "number" === typeof c.width && "number" === typeof c.height ? c : {
            width: 0,
            height: 0
        };
        c = {
            left: 0,
            top: 0,
            width: -1,
            height: -1
        };
        if (g) {
            var h = Number(String(g.width));
            g = Number(String(g.height));
            c = isNaN(h) || isNaN(g) ? c : {
                left: 0,
                top: 0,
                width: h,
                height: g
            }
        }
        a = {
            value: {
                T: e,
                H: c,
                R: "mraid",
                O: b,
                U: {
                    x: 0,
                    y: 0
                }
            },
            timestamp: a.i.now()
        };
        return Object.assign({}, a, d, {
            Qg: f
        })
    }

    function Ul(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        return (new L(function(e) {
            var f = a.o.Ba(745, function() {
                e.next(y.apply(0, arguments))
            });
            b.addEventListener(c, f);
            return function() {
                b.removeEventListener(c, f)
            }
        })).g(T(function(e) {
            return d.apply(null, ea(e))
        }))
    };
    var Xl = function(a, b) {
        this.context = a;
        this.Ra = b
    };
    w(Xl, Cl);
    Xl.prototype.Ga = function(a, b) {
        var c = new Xb(1),
            d = new Xb(1),
            e = Fl(Ol(this.context, this.Ra, c, d, b.Aa), Yj(this.context, b.Aa));
        return {
            Ha: Al(a.xa.g(e), b.Ia, 1),
            Da: {
                jd: c.g(Y(this.context.h, 1)),
                kd: d.g(Y(this.context.h, 1))
            }
        }
    };

    function Yl(a) {
        return ["backgrounded", "notFound", "hidden"].includes(a)
    };

    function Zl() {
        var a = Error;
        return Jg(function(b) {
            return b instanceof a
        }, function() {
            return Mg(a)
        })
    };

    function $l(a, b) {
        var c = void 0 === c ? null : c;
        var d = new M,
            e = void 0,
            f = a.Yd,
            g = d.g(P(function() {
                return e ? Object.assign({}, e, {
                    timestamp: a.i.now()
                }) : null
            }), T(function(l) {
                return null !== l
            }), P(function(l) {
                return l
            }));
        b = S([Uc(f, g), b]);
        var h = c;
        return b.g(T(function(l) {
            l = u(l).next().value;
            null === h && (h = l.value.Qe);
            return l.value.Qe === h
        }), Le(function(l) {
            return void(e = u(l).next().value)
        }), P(function(l) {
            var k = u(l);
            l = k.next().value;
            k = k.next().value;
            try {
                var n = l.value.data,
                    r = l.timestamp,
                    q = n.viewport,
                    A = Object.assign({},
                        q, {
                            x: 0,
                            y: 0,
                            jh: q.width * q.height
                        }),
                    z = am(A),
                    v = n.adView,
                    H = v.measuringElement && v.containerGeometry ? am(v.containerGeometry) : am(v.geometry),
                    I = am(v.geometry),
                    W = v.reasons.some(Yl),
                    fa = W ? ci : am(v.onScreenGeometry),
                    B;
                k && (B = v.percentageInView / 100);
                k && W && (B = 0);
                return {
                    timestamp: r,
                    value: {
                        R: "omid",
                        T: H,
                        H: z,
                        O: d,
                        I: "omid",
                        C: I,
                        U: {
                            x: H.left,
                            y: H.top
                        },
                        K: fa,
                        Yb: B
                    }
                }
            } catch (Qc) {
                z = Qc;
                n = Zl();
                r = Kg;
                Kg = void 0;
                q = [];
                A = n(z, q);
                !A && q && (z = "Expected " + n.ae() + ", got " + Lg(z), q.push(z));
                if (!A) {
                    var x = "";
                    r && (x = r() + "\n");
                    throw Error("T`" + x + "`" + n.ae() +
                        "`" + q.reverse().join("\n"));
                }
                var F;
                n = null != (F = null == (x = Qc) ? void 0 : x.message) ? F : "An unknown error occurred";
                x = "Error while processing geometryChange event: " + JSON.stringify(l.value) + "; " + n;
                throw Error(x);
            }
        }), ze(1), ac())
    }

    function am(a) {
        return {
            left: Math.floor(a.x),
            top: Math.floor(a.y),
            width: Math.floor(a.width),
            height: Math.floor(a.height)
        }
    };

    function bm(a, b, c, d) {
        c = void 0 === c ? Wc : c;
        var e = a.h;
        if (null === b) return Vb(new rd(20));
        if (!b.validate()) return Vb(new rd(21));
        var f;
        d = cm(e, b, d).g(P(function(g) {
            var h = g.value;
            g = g.timestamp;
            var l = b.i,
                k = a.i;
            if (l.timeline !== g.timeline) throw new vd;
            g = new Dd(g.value - l.now().value + k.now().value, k.timeline);
            return f = {
                value: h,
                timestamp: g
            }
        }));
        return Uc(d, c.g(P(function() {
            return f
        }))).g(T(function(g) {
            return void 0 !== g
        }), P(function(g) {
            return g
        }), Y(a.h, 1))
    }

    function cm(a, b, c) {
        return $l(b, c).g(Y(a, 1), P(function(d) {
            return {
                timestamp: d.timestamp,
                value: {
                    U: {
                        x: d.value.C.left,
                        y: d.value.C.top
                    },
                    T: d.value.K,
                    H: d.value.H,
                    R: d.value.I,
                    O: d.value.O
                }
            }
        }))
    };
    var dm = function(a, b, c) {
        this.md = a;
        this.Mb = b;
        this.Ra = c
    };
    w(dm, Cl);
    dm.prototype.Ga = function(a, b) {
        var c = b.Aa;
        b = bm(this.Mb, this.md, this.Ra, b.qe);
        c = Fl(b, Yj(this.Mb, c));
        return {
            Ha: a.xa.g(c),
            Da: {}
        }
    };
    var em = function(a, b, c) {
        this.md = a;
        this.Mb = b;
        this.lf = c
    };
    w(em, Cl);
    em.prototype.Ga = function(a, b) {
        b = bm(this.Mb, this.md, void 0, b.qe);
        var c = gk(this.Mb, this.lf);
        b = Fl(b, c);
        return {
            Ha: a.xa.g(b),
            Da: {}
        }
    };

    function fm(a) {
        return a.document.cg.g(P(function(b) {
            return "visible" === b
        }), U(), Y(a.h, 1))
    };
    var gm = function() {
            this.Wd = {}
        },
        Bj = function(a, b) {
            a = a.Wd[b.key];
            if ("proto" === b.valueType) {
                try {
                    var c = JSON.parse(a);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return b.defaultValue
            }
            return typeof a === typeof b.defaultValue ? a : b.defaultValue
        };
    var hm = function(a) {
        var b = new gm;
        return K(P(function(c) {
            if (null === c) return null;
            try {
                var d = JSON.parse(c)[0];
                c = "";
                for (var e = 0; e < d.length; e++) c += String.fromCharCode(d.charCodeAt(e) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(e % 10));
                b.Wd = JSON.parse(c)
            } catch (f) {}
            return b
        }), Y(a.h, 1))
    };
    var im;
    im = ["av.key", "js", "20221012"].slice(-1)[0];

    function jm(a, b, c) {
        var d;
        return b.g(U(), X(function(e) {
            return c.g(P(function() {
                if (!d) {
                    d = !0;
                    try {
                        e.next()
                    } finally {
                        d = !1
                    }
                }
                return !0
            }))
        }), V(!1), Y(a.h, 1))
    };

    function km(a) {
        return K(lk(P(function(b) {
            return uk(b, a)
        })), Jj(), P(function(b) {
            return Math.round(b)
        }))
    };

    function lm(a, b, c, d, e) {
        var f = Tk;
        if (1 < f.length)
            for (var g = 0; g < f.length - 1; g++)
                if (f[g] < f[g + 1]) throw Error();
        g = e.g(V(void 0), X(function() {
            return c.g(Uj())
        }), U(), Y(a, 1));
        e = e.g(V(void 0), X(function() {
            return c.g(ql())
        }), U(), Y(a, 1));
        return {
            Ab: d.g(V(void 0), X(function() {
                return b.g(Tj(rl, f))
            }), U(gb), Y(a, 1)),
            Kb: d.g(V(void 0), X(function() {
                return b.g(Tj(km, f), P(function(h) {
                    return h.map(function(l, k) {
                        return 0 < k ? l - h[k - 1] : l
                    })
                }))
            }), U(gb), Y(a, 1)),
            nc: e,
            Pa: g.g(U(rj), Y(a, 1))
        }
    };

    function mm(a, b, c) {
        var d = c.g(P(function(e) {
            return {
                value: e,
                timestamp: a.i.now()
            }
        }), U(rj));
        return b instanceof L ? b.g(U(), X(function(e) {
            return e ? (new Z({
                value: !1,
                timestamp: a.i.now()
            })).ba(a.h) : d
        })) : !1 === b.value ? d : new Z(!1)
    }

    function nm(a, b, c, d, e, f) {
        var g = Mk;
        b = b instanceof L ? b.g(V(!1), U()) : b;
        var h = !(lh() || mh());
        c = mm(a, c, d);
        a = f.xa.g(Gj(a.h));
        return Object.assign({}, g, {
            ac: c,
            Fe: e,
            Md: h,
            ne: b,
            cc: a
        })
    };

    function om(a) {
        a = a.global;
        if ("undefined" === typeof a.__google_lidar_) return a.__google_lidar_ = 1, !1;
        a.__google_lidar_ = Number(a.__google_lidar_) + 1;
        var b = a.__google_lidar_adblocks_count_;
        if ("number" === typeof b && 0 < b && (a = a.__google_lidar_radf_, "function" === typeof a)) try {
            a()
        } catch (c) {}
        return !0
    }

    function pm(a) {
        var b = a.global;
        b.osdlfm = function() {
            return b.__google_lidar_radf_
        };
        if (void 0 !== b.__google_lidar_radf_) return Qb;
        b.__google_lidar_adblocks_count_ = 1;
        var c = new M;
        b.__google_lidar_radf_ = function() {
            return void c.next(a)
        };
        return c.g(sh(a.o, 743))
    };
    var qm = function(a) {
        this.key = a;
        this.defaultValue = !1;
        this.valueType = "boolean"
    };
    var rm = new qm("100006"),
        sm = new qm("45381331"),
        Dj = new function(a, b) {
            this.key = a;
            this.defaultValue = void 0 === b ? 0 : b;
            this.valueType = "number"
        }("45362137"),
        tm = new qm("45377435"),
        um = new qm("45372163"),
        vm = new qm("45382077");

    function wm() {
        var a = mb();
        return a ? cb("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return kb(a, b)
        }) || kb(a, "OMI/") && !kb(a, "XiaoMi/") ? !0 : kb(a, "Presto") && kb(a, "Linux") && !kb(a, "X11") && !kb(a, "Android") && !kb(a, "Mobi") : !1
    };
    var Mk = Object.freeze({
            De: 1E3,
            Tc: .5,
            fd: .3
        }),
        Tk = Object.freeze([1, .75, Mk.Tc, Mk.fd, 0]),
        ej = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=7&v=" + im;

    function xm(a, b, c, d, e) {
        var f = om(a),
            g = pm(a);
        g = Si(a, g);
        f = f ? Qb : g.g(P(function(k) {
            return Object.freeze({
                tb: sb(),
                element: (new Z(k)).ba(a.h)
            })
        }), Mi());
        var h = fm(a).g(P(function(k) {
                return !k
            })),
            l = new Dl(a, [new Nl(a, Tk), new Ml(a, d), new Jl(a, d), new em(e, a, Tk), new dm(e, a, d), new Xl(a, d)]);
        return Wi(a, f, function(k, n) {
            var r = pl(k, n.element),
                q = r.Hc,
                A = r.Ic,
                z = r.Oc,
                v = r.bf,
                H = r.Ia,
                I = r.Gf,
                W = r.cd,
                fa = r.dd,
                B = r.Aa,
                x = r.Ca,
                F = r.Bg,
                Qc = r.bb;
            r = r.flags.g(U(), hm(k));
            var qf = r.g(Aj(sm), P(function(G) {
                    return !!G
                })),
                pb = r.g(Aj(vm), P(function(G) {
                    return !!G
                })),
                Pa = H.g(Jd(I, qf), P(function(G) {
                    var $a = u(G);
                    G = $a.next().value;
                    var Sm = $a.next().value;
                    $a = $a.next().value;
                    !(G = G || Sm) && (G = $a) && ((G = kb(mb(), "CrKey") || kb(mb(), "PlayStation") || kb(mb(), "Roku") || wm() || kb(mb(), "Xbox")) || (G = mb(), G = kb(G, "AppleTV") || kb(G, "Apple TV") || kb(G, "CFNetwork") || kb(G, "tvOS")), G || (G = mb(), G = kb(G, "sdk_google_atv_x86") || kb(G, "Android TV")));
                    return G
                }));
            I = new yl(k, n, v, H, B, pb);
            pb = r.g(Aj(rm), P(function(G) {
                return !!G
            }));
            pb = l.Ga(I, {
                Ia: H,
                Aa: B,
                qe: pb
            });
            var ma = pb.Ha,
                Sc = pb.Da;
            pb = Sc.jd;
            qf = Sc.kd;
            Sc = Sc.td;
            var Cb = nm(k, fa, Pa, h, F, I);
            F = Zk(k.h, k.i, ma, Cb);
            Pa = lm(k.h, F.ma.vd, F.ma.visible, F.sd, F.Hb);
            var Tc = nl(k.h, k.i, F.Hb, F.ma.O, F.ma.visible);
            ma = Dk(k.h, k.i, ma, Cb);
            Cb = Sk(k.i, k.h, ma.ma.vd, ma.ma.visible, ma.sd, ma.Hb);
            var rf = {
                    Bd: Lk(k.h, k.i, ma.Hb, ma.ma.visible)
                },
                sf = r.g(Aj(tm), P(function(G) {
                    return !!G
                }), V(!1));
            F = Fj(k.h, sf, Object.assign({}, ma.ma, Cb, rf), Object.assign({}, F.ma, {
                Bd: tk(k, Tc),
                Ab: tk(k, Pa.Ab),
                Kb: tk(k, Pa.Kb),
                nc: tk(k, Pa.nc),
                Pa: Pa.Pa.g(P(function(G) {
                    return new zj(k.i, G)
                }))
            }));
            ma = kk(k, c.g(oe("t")));
            Pa = null !== e &&
                e.validate();
            Tc = (Pa ? e.mg : Wc).g(Y(k.h, 1), oe("u"));
            ma = Zc(ma, Tc);
            Pa = Pa ? e.ge.g(Xd(1), oe(!0), V(!1), Y(k.h, 1)) : Jh;
            Tc = jm(k, F.O, ma.g(T(function(G) {
                return null !== G
            })));
            Cb = ym(k, I, q);
            rf = zm(k, ma, n.element);
            sf = Cb.Re.g(V({
                x: 0,
                y: 0
            }));
            var Vm = r.g(Aj(um), P(function(G) {
                return !!G
            }), V(!1), U(), Le(function(G) {
                Dh = G
            }), Y(k.h, 1));
            return Object.assign({}, {
                L: new Z(k.L),
                fc: new Z("lidar2"),
                ug: new Z("lidartos"),
                Ve: new Z(im),
                Ue: new Z(7),
                Mc: new Z(k.validate() ? null : new sd),
                Ye: new Z($h(k.document)),
                ra: new Z(gj),
                Rc: ma,
                uc: ma,
                kh: Tc,
                de: Pa,
                af: new Z(k.ab ? 1 : void 0),
                cf: new Z(k.We ? 1 : void 0),
                Ia: H,
                bb: Qc,
                gb: Qc.g(T(function(G) {
                    return G
                }), P(function() {
                    return k.gb.bind(k)
                })),
                jd: pb.g(Y(k.h, 1)),
                kd: qf.g(Y(k.h, 1)),
                nf: r.g(Cj()),
                xf: Vm,
                Ze: n.element.g(P(function(G) {
                    return null !== G
                })),
                dc: x,
                vg: x,
                Oc: z.g(V([])),
                uf: z.g(P(function(G) {
                    return 0 < G.length ? !0 : null
                }), V(null), U()),
                Ic: A.g(V([]), Y(k.h, 1)),
                gh: r,
                Hc: q,
                rb: I.rb,
                cd: W.g(V(0), Y(k.h, 1)),
                Nf: v,
                Aa: B.g(V(0), Y(k.h, 1)),
                Lb: new Z(fj),
                Ad: new Z(qj),
                dd: fa,
                Df: I.zb.g(Gj(k.h)),
                Cd: I.Cd
            }, F, {
                Wb: S([F.Wb, sf]).g(P(function(G) {
                    var $a =
                        u(G);
                    G = $a.next().value;
                    $a = $a.next().value;
                    return fi(G, $a)
                }), U(di))
            }, Cb, {
                xd: Kh(k),
                vf: rf,
                td: Sc
            })
        }, dj(a, b))
    }

    function ym(a, b, c) {
        var d = void 0 === d ? Ca : d;
        var e, f;
        d = (null == (e = d.performance) ? void 0 : null == (f = e.timing) ? void 0 : f.navigationStart) || 0;
        return Object.assign({}, {
            Pe: new Z(d),
            Oe: Rj(a, b)
        }, Qj(a, b, c))
    }

    function zm(a, b, c) {
        return b.g(T(function(d) {
            return null !== d
        }), X(function() {
            return c
        }), P(function(d) {
            var e = Ni(a);
            return 0 < e.length && 0 <= e.indexOf(d)
        }), P(function(d) {
            return !d
        }))
    };

    function Am(a, b) {
        if (!b) throw Error("U`" + a);
        if ("string" !== typeof b && !(b instanceof String)) throw Error("V`" + a);
        if ("" === b.trim()) throw Error("W`" + a);
    }

    function Bm(a) {
        if (!a) throw Error("Z`functionToExecute");
    }

    function Cm(a, b) {
        if (null == b) throw Error("X`" + a);
        if ("number" !== typeof b || isNaN(b)) throw Error("Y`" + a);
        if (0 > b) throw Error("$`" + a);
    };

    function Dm() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.3.37-google_20220829")
    }

    function Em() {
        for (var a = ["1", "3", "37"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var Fm = function(a, b, c, d) {
            this.be = a;
            this.method = b;
            this.version = c;
            this.args = d
        },
        Gm = function(a) {
            return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
        },
        Hm = function(a) {
            return new Fm(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        };
    Fm.prototype.jb = function() {
        var a = {};
        a = (a.omid_message_guid = this.be, a.omid_message_method = this.method, a.omid_message_version = this.version, a);
        void 0 !== this.args && (a.omid_message_args = this.args);
        return a
    };
    var Im = function(a) {
        this.wc = a
    };
    Im.prototype.jb = function() {
        return JSON.stringify(void 0)
    };

    function Jm(a, b) {
        return a && (a[b] || (a[b] = {}))
    };

    function Km() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function Lm() {
        var a = y.apply(0, arguments);
        Mm(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(ea(a))));
        }, function() {
            return console.error.apply(console, ea(a))
        })
    }

    function Mm(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    };
    var Nm = function() {
        if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
        if ("undefined" !== typeof global && global) return global;
        if ("undefined" !== typeof window && window) return window;
        if ("undefined" !== typeof globalThis && globalThis) return globalThis;
        var a = Function("return this")();
        if (a) return a;
        throw Error("aa");
    }();
    var Om = function(a) {
        try {
            return a.frames ? !!a.frames.omid_v1_present : !1
        } catch (b) {
            return !1
        }
    };
    var Pm = function(a) {
        this.wc = a;
        this.handleExportedMessage = Pm.prototype.rf.bind(this)
    };
    w(Pm, Im);
    Pm.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.wc : b;
        if (!b) throw Error("ba");
        b.handleExportedMessage(a.jb(), this)
    };
    Pm.prototype.rf = function(a, b) {
        if (Gm(a) && this.onMessage) this.onMessage(Hm(a), b)
    };

    function Qm(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }

    function Rm(a) {
        if (a === Nm) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    };
    var Tm = function(a, b) {
        this.wc = b = void 0 === b ? Nm : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                if (Gm(e) && d.source && c.onMessage) c.onMessage(Hm(e), d.source)
            }
        })
    };
    w(Tm, Im);
    Tm.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.wc : b;
        if (!b) throw Error("ba");
        b.postMessage(a.jb(), "*")
    };
    var Um = ["omid", "v1_VerificationServiceCommunication"],
        Wm = ["omidVerificationProperties", "serviceWindow"];

    function Xm(a, b) {
        return b.reduce(function(c, d) {
            return c && c[d]
        }, a)
    };
    var Ym = function(a) {
        if (!a) {
            var b;
            "undefined" === typeof b && "undefined" !== typeof window && window && (b = window);
            b = Qm(b) ? b : Nm;
            var c = void 0 === c ? Om : c;
            a = [];
            var d = Xm(b, Wm);
            d && a.push(d);
            a.push(Qm(b) ? b.top : Nm);
            a: {
                a = u(a);
                for (var e = a.next(); !e.done; e = a.next()) {
                    b: {
                        d = b;e = e.value;
                        var f = c;
                        if (!Rm(e)) try {
                            var g = Xm(e, Um);
                            if (g) {
                                var h = new Pm(g);
                                break b
                            }
                        } catch (l) {}
                        h = f(e) ? new Tm(d, e) : null
                    }
                    if (d = h) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
        }
        if (this.qb = a) this.qb.onMessage = this.sf.bind(this);
        else if (c = (c = Nm.omid3p) && "function" === typeof c.registerSessionObserver &&
            "function" === typeof c.addEventListener ? c : null) this.Cb = c;
        this.gg = this.hg = 0;
        this.Jc = {};
        this.Zc = [];
        this.he = (c = Nm.omidVerificationProperties) ? c.injectionId : void 0
    };
    Ym.prototype.oa = function() {
        return !(!this.qb && !this.Cb)
    };
    var bf = function(a, b, c) {
        Bm(b);
        a.Cb ? a.Cb.registerSessionObserver(b, c, a.he) : a.ib("addSessionListener", b, c, a.he)
    };
    Ym.prototype.addEventListener = function(a, b) {
        Am("eventType", a);
        Bm(b);
        this.Cb ? this.Cb.addEventListener(a, b) : this.ib("addEventListener", b, a)
    };
    var Te = function(a, b, c, d) {
            Am("url", b);
            Nm.document && Nm.document.createElement ? Zm(a, b, c, d) : a.ib("sendUrl", function(e) {
                e && c ? c() : !e && d && d()
            }, b)
        },
        Zm = function(a, b, c, d) {
            var e = Nm.document.createElement("img");
            a.Zc.push(e);
            var f = function(g) {
                var h = a.Zc.indexOf(e);
                0 <= h && a.Zc.splice(h, 1);
                g && g()
            };
            e.addEventListener("load", f.bind(a, c));
            e.addEventListener("error", f.bind(a, d));
            e.src = b
        };
    Ym.prototype.setTimeout = function(a, b) {
        Bm(a);
        Cm("timeInMillis", b);
        if ($m()) return Nm.setTimeout(a, b);
        var c = this.hg++;
        this.ib("setTimeout", a, c, b);
        return c
    };
    Ym.prototype.clearTimeout = function(a) {
        Cm("timeoutId", a);
        $m() ? Nm.clearTimeout(a) : this.xe("clearTimeout", a)
    };
    Ym.prototype.setInterval = function(a, b) {
        Bm(a);
        Cm("timeInMillis", b);
        if (an()) return Nm.setInterval(a, b);
        var c = this.gg++;
        this.ib("setInterval", a, c, b);
        return c
    };
    Ym.prototype.clearInterval = function(a) {
        Cm("intervalId", a);
        an() ? Nm.clearInterval(a) : this.xe("clearInterval", a)
    };
    var $m = function() {
            return "function" === typeof Nm.setTimeout && "function" === typeof Nm.clearTimeout
        },
        an = function() {
            return "function" === typeof Nm.setInterval && "function" === typeof Nm.clearInterval
        };
    Ym.prototype.sf = function(a) {
        var b = a.method,
            c = a.be;
        a = a.args;
        if ("response" === b && this.Jc[c]) {
            var d = Dm() && Em() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.Jc[c].apply(this, d)
        }
        "error" === b && window.console && Lm(a)
    };
    Ym.prototype.xe = function(a) {
        this.ib.apply(this, [a, null].concat(ea(y.apply(1, arguments))))
    };
    Ym.prototype.ib = function(a, b) {
        var c = y.apply(2, arguments);
        if (this.qb) {
            var d = Km();
            b && (this.Jc[d] = b);
            var e = "VerificationService." + a;
            c = Dm() && Em() ? c : JSON.stringify(c);
            this.qb.sendMessage(new Fm(d, e, "1.3.37-google_20220829", c))
        }
    };
    var bn = void 0;
    if (bn = void 0 === bn ? "undefined" === typeof omidExports ? null : omidExports : bn) {
        var cn = ["OmidVerificationClient"];
        cn.slice(0, cn.length - 1).reduce(Jm, bn)[cn[cn.length - 1]] = Ym
    };
    var dn = null;
    try {
        var en = new Ym;
        dn = new af(en, "doubleclickbygoogle.com-omid")
    } catch (a) {
        dn = null
    }(function(a, b, c, d, e) {
        b = void 0 === b ? .01 : b;
        c = void 0 === c ? Ue(a.i, 36E5) : c;
        d = void 0 === d ? a.i.interval(100).g(Y(a.h, 1)) : d;
        e = void 0 === e ? null : e;
        return a.o.Ba(742, function() {
            return xm(a, b, c, d, e)
        })()
    })(new zi(window, null, new rh), void 0, void 0, void 0, dn).subscribe();
}).call(this);