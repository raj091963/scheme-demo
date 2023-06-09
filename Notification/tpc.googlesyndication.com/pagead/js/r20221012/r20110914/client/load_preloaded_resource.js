(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    function h(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    var l = Array.prototype.indexOf ? function(a, b) {
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
    var m = [];

    function n() {
        var a = m;
        m = [];
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        a = b ? b.call(a) : {
            next: h(a)
        };
        for (b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (d) {}
        }
    }

    function p(a) {
        a = void 0 === a ? document : a;
        return a.createElement("img")
    };

    function q(a, b, d) {
        a.google_image_requests || (a.google_image_requests = []);
        var e = p(a.document);
        if (d) {
            var c = function() {
                if (d) {
                    var g = a.google_image_requests,
                        f = l(g, e);
                    0 <= f && Array.prototype.splice.call(g, f, 1)
                }
                e.removeEventListener && e.removeEventListener("load", c, !1);
                e.removeEventListener && e.removeEventListener("error", c, !1)
            };
            e.addEventListener && e.addEventListener("load", c, !1);
            e.addEventListener && e.addEventListener("error", c, !1)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };

    function r() {
        var a = document.currentScript;
        return (a = void 0 === a ? null : a) && "26" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="26"]')
    };
    var t = document;

    function u() {
        for (var a = t.head, b = a.querySelectorAll("link[data-reload-stylesheet][as=style][rel=preload]"), d = 0; d < b.length; d++) {
            var e = b[d],
                c = "link",
                g = document;
            c = String(c);
            "application/xhtml+xml" === g.contentType && (c = c.toLowerCase());
            c = g.createElement(c);
            c.setAttribute("rel", "stylesheet");
            c.setAttribute("href", e.getAttribute("href"));
            a.appendChild(c)
        }
        if (0 < b.length) {
            var f = void 0 === f ? .01 : f;
            if (!(Math.random() > f)) {
                a = r();
                a = "https://" + (a && "true" === a.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" :
                    "pagead2.googlesyndication.com") + "/pagead/gen_204?id=jca&jc=26&version=";
                b = (b = r()) && b.getAttribute("data-jc-version") || "unknown";
                f = a + b + "&sample=" + f;
                a = window;
                var k = void 0 === k ? !1 : k;
                if (b = a.navigator) b = a.navigator.userAgent, b = /Chrome/.test(b) && !/Edge/.test(b) ? !0 : !1;
                b && a.navigator.sendBeacon ? a.navigator.sendBeacon(f) : q(a, f, void 0 === k ? !1 : k)
            }
        }
    };
    var v = document;
    "complete" === v.readyState || "interactive" === v.readyState ? (m.push(u), 1 == m.length && (window.Promise ? Promise.resolve().then(n) : window.setImmediate ? setImmediate(n) : setTimeout(n, 0))) : v.addEventListener("DOMContentLoaded", u);
}).call(this);