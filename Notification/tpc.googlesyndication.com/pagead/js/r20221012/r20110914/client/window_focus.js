(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var h = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var d = 0; d < a.length; d++)
            if (d in a && a[d] === b) return d;
        return -1
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function k(a, b, d) {
        a.addEventListener && a.addEventListener(b, d, !1)
    };

    function l(a, b, d) {
        if (Array.isArray(b))
            for (var c = 0; c < b.length; c++) l(a, String(b[c]), d);
        else null != b && d.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };

    function m(a) {
        a = void 0 === a ? document : a;
        return a.createElement("img")
    };

    function n(a, b, d) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = m(a.document);
        if (d) {
            var g = function() {
                if (d) {
                    var e = a.google_image_requests,
                        f = h(e, c);
                    0 <= f && Array.prototype.splice.call(e, f, 1)
                }
                c.removeEventListener && c.removeEventListener("load", g, !1);
                c.removeEventListener && c.removeEventListener("error", g, !1)
            };
            k(c, "load", g);
            k(c, "error", g)
        }
        c.src = b;
        a.google_image_requests.push(c)
    };

    function p() {
        var a = document.currentScript;
        return (a = void 0 === a ? null : a) && "22" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="22"]')
    };
    var q = document,
        r = window;

    function t() {
        var a = u["gws-id"],
            b = u["qem-id"];
        this.l = u.url;
        this.m = a;
        this.o = b;
        this.i = !1;
        a = v(q.hidden) ? {
            g: "hidden",
            h: "visibilitychange"
        } : v(q.mozHidden) ? {
            g: "mozHidden",
            h: "mozvisibilitychange"
        } : v(q.msHidden) ? {
            g: "msHidden",
            h: "msvisibilitychange"
        } : v(q.webkitHidden) ? {
            g: "webkitHidden",
            h: "webkitvisibilitychange"
        } : {
            g: "hidden",
            h: "visibilitychange"
        };
        this.g = a.g;
        this.h = a.h;
        this.j = -1;
        q[this.g] && w(this, 2);
        x(this);
        y(this)
    }

    function x(a) {
        k(q, a.h, function() {
            if (q[a.g]) a.i && (a.i = !1, a.j = Date.now(), w(a, 0));
            else {
                if (-1 !== a.j) {
                    var b = Date.now() - a.j;
                    0 < b && (a.j = -1, w(a, 1, b))
                }
                w(a, 3)
            }
        })
    }

    function y(a) {
        k(r, "click", function(b) {
            a.handleClick(b)
        })
    }
    t.prototype.handleClick = function() {
        var a = this;
        this.i = !0;
        r.setTimeout(function() {
            a.i = !1
        }, 5E3)
    };

    function w(a, b, d) {
        d = void 0 === d ? 0 : d;
        var c = {
            gqid: a.m,
            qqid: a.o
        };
        0 === b && (c["return"] = 0);
        1 === b && (c["return"] = 1, c.timeDelta = d);
        2 === b && (c.bgload = 1);
        3 === b && (c.fg = 1);
        b = [];
        for (var g in c) l(g, c[g], b);
        n(r, a.l + "&label=window_focus&" + b.join("&"), !1);
        var e = void 0 === e ? .01 : e;
        if (!(Math.random() > e)) {
            a = p();
            a = "https://" + (a && "true" === a.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com") + "/pagead/gen_204?id=jca&jc=22&version=";
            c = (c = p()) && c.getAttribute("data-jc-version") || "unknown";
            e = a + c + "&sample=" + e;
            a = window;
            var f = void 0 === f ? !1 : f;
            if (c = a.navigator) c = a.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && a.navigator.sendBeacon ? a.navigator.sendBeacon(e) : n(a, e, void 0 === f ? !1 : f)
        }
    }

    function v(a) {
        return "undefined" !== typeof a
    };
    var z = p();
    if (null == z) throw Error("JSC not found 22");
    for (var u = {}, A = z.attributes, B = A.length - 1; 0 <= B; B--) {
        var C = A[B].name;
        0 === C.indexOf("data-jcp-") && (u[C.substring(9)] = A[B].value)
    }
    window.window_focus_for_click = new t;
}).call(this);