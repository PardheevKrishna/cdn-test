!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("lodash")))
    : "function" == typeof define && define.amd
    ? define(["lodash"], t)
    : "object" == typeof exports
    ? (exports.MyLibrary = t(require("lodash")))
    : (e.MyLibrary = t(e._));
})(this, (e) =>
  (() => {
    "use strict";
    var t = {
        252: (t) => {
          t.exports = e;
        },
      },
      r = {};
    function o(e) {
      var n = r[e];
      if (void 0 !== n) return n.exports;
      var i = (r[e] = { exports: {} });
      return t[e](i, i.exports, o), i.exports;
    }
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
      (o.d = (e, t) => {
        for (var r in t)
          o.o(t, r) &&
            !o.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (o.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    o.r(n), o.d(n, { default: () => c });
    var i = o(252),
      a = o.n(i);
    function u(e) {
      return (
        (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        u(e)
      );
    }
    function f(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, l(o.key), o);
      }
    }
    function l(e) {
      var t = (function (e, t) {
        if ("object" != u(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != u(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      })(e);
      return "symbol" == u(t) ? t : t + "";
    }
    const c = (function () {
      return (
        (e = function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.name = t);
        }),
        (t = [
          {
            key: "greet",
            value: function () {
              return "Hello, ".concat(a().capitalize(this.name), "!");
            },
          },
        ]) && f(e.prototype, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
      var e, t;
    })();
    return n;
  })()
);
