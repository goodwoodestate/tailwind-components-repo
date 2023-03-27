!(function (n) {
  var t = {};
  function e(i) {
    if (t[i]) return t[i].exports;
    var o = (t[i] = { i: i, l: !1, exports: {} });
    return n[i].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = n),
    (e.c = t),
    (e.d = function (n, t, i) {
      e.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: i });
    }),
    (e.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (e.t = function (n, t) {
      if ((1 & t && (n = e(n)), 8 & t)) return n;
      if (4 & t && "object" == typeof n && n && n.__esModule) return n;
      var i = Object.create(null);
      if (
        (e.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: n }),
        2 & t && "string" != typeof n)
      )
        for (var o in n)
          e.d(
            i,
            o,
            function (t) {
              return n[t];
            }.bind(null, o)
          );
      return i;
    }),
    (e.n = function (n) {
      var t =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return e.d(t, "a", t), t;
    }),
    (e.o = function (n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (e.p = ""),
    e((e.s = 0));
})([
  function (n, t, e) {
    const i = window.jQuery,
      o = e(1);
    const r = i(".newsletter-signup").first(),
      p = i(".newsletter-signup-title").first(),
      s = (i(".newsletter-signup-desc").first(), i("body")),
      a = i(".newsletter-signup-form").first(),
      l =
        (i(".exit-intent-popup .newsletter-signup-form").first(),
        i(".newsletter-signup-form #FirstName").first()),
      u = i(".newsletter-signup-form #Email").first();
    !o.val("gx-exit-intent-shown") &&
      r.length > 0 &&
      (function () {
        const n = (e) => {
            const i = !e.toElement && !e.relatedTarget && e.clientY < 10;
            !o.val("gw-newsletter-signup") &&
              i &&
              (document.removeEventListener("mouseout", n),
              s.append(
                '\n <div class="exit-intent-overlay exit-intent-overlay--visible">\n   <div class="exit-intent-popup">\n   <div class="exit-intent-popup__content" style="background: url(\'https://static.goodwood.com/globalassets/goodwoof/2020/chris-ison/super-approved/sausage-dog-playing-piano.jpg?crop=(0,411,6623,4136)&width=1000&quality=80\');padding-top: 56.25%;width: 500px;background-size: cover;\n background-position: right;">\n          \n   </div>\n   <div class="exit-intent-popup__close">\n\n   </div>\n \n   </div>\n </div>\n '
              ),
              r.prependTo(".exit-intent-popup"),
              p.text("Barking mad? Share our love of all things dog"),
              document
                .querySelector(".exit-intent-overlay")
                .addEventListener("click", t),
              (function () {
                console.log("Dropping cookie");
                var n = new Date();
                n.setDate(n.getDate() + 30),
                  o.set("gx-exit-intent-shown", "true", {
                    expiry: n,
                    path: "/",
                    domain: ".goodwood.com",
                  });
              })());
          },
          t = (n) => {
            ([...n.target.classList].includes("exit-intent-overlay") ||
              "exit-intent-popup__close" === n.target.className ||
              27 === n.keyCode) &&
              (document
                .querySelector(".exit-intent-overlay")
                .classList.remove("exit-intent-overlay--visible"),
              ga("send", {
                hitType: "event",
                eventCategory: "Optimize",
                eventAction: "Exit",
                eventLabel: "Close",
              }));
          };
        setTimeout(() => {
          document.addEventListener("mouseout", n),
            document.addEventListener("keydown", t);
        }, 4e3),
          a.submit(function (n) {
            (function () {
              var n = !0;
              l.hasClass("input-validation-error") && (n = !1);
              u.hasClass("input-validation-error") && (n = !1);
              return n;
            })()
              ? i.ajax({
                  success: function () {
                    ga("send", {
                      hitType: "event",
                      eventCategory: "Optimize",
                      eventAction: "Exit",
                      eventLabel: "Signup",
                    }),
                      i(".exit-intent-overlay").hide();
                  },
                })
              : console.warn(
                  "[" +
                    experience.platform +
                    " " +
                    experience.id +
                    "]Submission cookie hasn't dropped. Form fields have errors. "
                );
    
          }),
          ($style = (() =>
            i(
              '\n    <style>\n\n    .exit-intent-overlay {     \n        position: fixed;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        z-index: 9999;\n        background: rgb(0,0,0,0.95);\n        justify-content: center;\n        align-items: center;\n        display: none;\n        visibility: hidden;\n    }\n    .exit-intent-overlay--visible {\n        display: flex; \n        visibility: visible; \n\n    }\n\n    .exit-intent-popup { \n        position: relative; \n        display: flex;\n        background: #f1f1f1;\n\n    }\n\n    .exit-intent-popup__close { height: 44px; width: 44px; background: #303030; position: absolute; top: 0; right: 0; cursor: pointer; border: 2px solid #303030; }\n\n    .exit-intent-popup__close:hover {\n        background: transparent; \n    }\n\n    .exit-intent-popup__close:before, .exit-intent-popup__close:after {\n        content: "";\n        display: block;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        height: 3px;\n        width: 12px;\n        background-color: #fff;\n        -webkit-transform: translate(-50%,-50%) rotate(45deg);\n        -ms-transform: translate(-50%,-50%) rotate(45deg);\n        transform: translate(-50%,-50%) rotate(45deg);\n\n}\n\n.exit-intent-popup__close:hover:before,.exit-intent-popup__close:hover:after {\n    background-color: #303030;\n}\n\n.exit-intent-popup__close:after {\n    -webkit-transform: translate(-50%,-50%) rotate(-45deg);\n    -ms-transform: translate(-50%,-50%) rotate(-45deg);\n    transform: translate(-50%,-50%) rotate(-45deg);\n}\n\n.exit-intent-popup { max-width: 900px}\n.exit-intent-popup .newsletter-signup {\n width: 390px;\n display: flex;\n}\n\n.exit-intent-popup .form-controlGroup-inlineWrapper__fill.form-controlGroup-inline-items.form-controlGroup-inline-items--3 {\n    flex-direction: column;\n    width: 100% \n}\n\n.exit-intent-popup .form-controlGroup-inline-items--3 .form-controlGroup-inline-item { width: 100%;}\n\n.exit-intent-popup .exit-intent-popup__content {\n    color: white;\n    max-width: 280px;\n    padding-top: 60px;\n}\n.exit-intent-popup__content h3 {\n    font-weight: 700;\n    margin-bottom: 1.5rem;\n\n}\n.exit-intent-popup .newsletter-signup-desc { display: none;}\n.exit-intent-popup .newsletter-signup-title { \n    margin-bottom: 1.5rem;\n    font-size: 26px;\n    font-weight: 600;\n}\n\n.exit-intent-popup__content ul li {\n    margin-bottom: 12px;\n}\n\n.exit-intent-popup__content ul svg {\n    margin-right: 10px;\n\n}\n.exit-intent-popup .newsletter-signup {\n    \n\n}\n\n.exit-intent-popup .newsletter-signup .g-col { padding: 0;}\n\n@media screen and (max-width: 48em){\n    .exit-intent-popup .newsletter-signup-title {\n        margin-bottom: .75rem\n    }\n.exit-intent-popup .newsletter-signup {\n    transform: none; \n    margin:auto;\n    width: 100%;\n    margin-top:44px;\n}\n\n.exit-intent-popup .newsletter-signup-form {\n    padding: 10px;\n}\n.exit-intent-popup {\n    flex-direction: column;\n}\n.exit-intent-popup .exit-intent-popup__content {\n   padding:0;\n   margin-bottom:20px;\n   display: none;\n}\n\n.exit-intent-overlay--visible {\n    margin: 20px;\n}\n\n.exit-intent-popup .form-controlGroup-inline-item { margin-top:0;}\n}\n\n\n\n    </style>'
            ))()),
          $style.appendTo("head");
      })();
  },
  function (n, t, e) {
    var i = e(2),
      o = e(3),
      r = e(4);
    function p(n) {
      return l(n);
    }
    function s(n, t, e) {
      var i = n + "=" + t + ";";
      (e = e || {}).expires &&
        (i += "Expires=" + new Date(e.expires).toUTCString() + ";"),
        e.path && (i += "Path=" + e.path + ";"),
        e.domain && (i += "Domain=" + e.domain + ";"),
        (document.cookie = i);
    }
    function a(n) {
      var t = n.indexOf("=");
      return t < 0 ? [n, ""] : [n.substring(0, t), n.substring(t + 1)];
    }
    function l(n) {
      var t,
        e = document.cookie,
        i = [];
      if (!e) return i;
      for (var o = e.split(";"), p = 0; p < o.length; p++) {
        t = a(o[p]);
        var s = r(t[0]);
        (n && s !== n) || i.push({ name: s, value: r(t[1]) });
      }
      return i;
    }
    function u(n, t) {
      var e = l().length;
      return (
        ((t = t || {}).expires = new Date(1)), s(n, "", t), l().length !== e
      );
    }
    n.exports = {
      get: p,
      set: s,
      cookies: l,
      clear: u,
      clearAll: function (n) {
        var t = [],
          e = o(window.location.pathname),
          r = i(window.location.hostname);
        if (u(n)) return [{ path: null, domain: null }];
        for (var p = 0; p < r.length; p++)
          for (var s = 0; s < e.length; s++)
            u(n, { path: e[s], domain: r[p] }) &&
              t.push({ domain: r[p], path: e[s] });
        return t;
      },
      val: function (n) {
        var t = p(n);
        return t.length ? t[0].value : null;
      },
    };
  },
  function (n, t) {
    n.exports = function (n) {
      for (var t, e = [], i = n.split("."), o = 0; o < i.length; o++)
        (t = i.slice(o, i.length).join(".")), e.push(t, "." + t);
      return e.push(null), e;
    };
  },
  function (n, t) {
    n.exports = function (n) {
      n = n.replace(/\/$/, "").split("/");
      for (var t = [], e = 0; e < n.length; e++)
        t.push(n.slice(0, e + 1).join("/") || "/");
      return t;
    };
  },
  function (n, t) {
    n.exports = "".trim
      ? function (n) {
          return n.trim();
        }
      : function (n) {
          return n.replace(/(^\s+|\s+$)/gi, "");
        };
  },
]);
